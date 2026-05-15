import { writeFile, mkdir, rmdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createWriteStream } from 'node:fs';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';
import { Client } from "@notionhq/client"

const root = process.cwd();

const config = {
  token: process.env.OUTREACH_NOTION_API_KEY,
  dataSourceId: process.env.OUTREACH_WORKSHOP_DATA_SOURCE_ID,
  eventsOutput: 'src/sections/landing/Events/events.ts',
  impactOutput: 'src/sections/landing/Impact/impact.ts',
  imageExtensions: ['.jpg', '.jpeg', '.png'],
  eventImagesDirectory: 'public/events/pictures'
};

if (!config.token || !config.dataSourceId) {
  throw new Error('Missing OUTREACH_NOTION_API_KEY or OUTREACH_WORKSHOP_DATA_SOURCE_ID.');
}

const notion = new Client({ auth: config.token })

const getPropertyValue = (event, propertyName) => event.properties?.[propertyName];

const getDateText = (dateProperty) => {
	const date = new Date(dateProperty?.date.start);
	if (!date) return '';
	return date.toLocaleDateString('en-US', {
		month: '2-digit',
		day: '2-digit',
		year: 'numeric'
	});
};

const getLocationText = (locationProperty) => {
	const location = locationProperty.rich_text.map((part) => part.plain_text).join('') || '';
	return location;
}

const getTitleText = (workshopProperty) => {
	const title = workshopProperty.title.map((part) => part.plain_text).join('') || '';
	return title;
}

const getOrganizationText = (organizationProperty) => {
	// Is a list of organizations based on multiselect if we have multiple orgs with workshop
	const org = organizationProperty.multi_select.map(o => o.name);
	return org;
}

const getNumStudents = (attendeeProperty) => {
	const students = attendeeProperty.number;
	return students;
}

const getFiles = async (fileProperty, eventID) => {
	// Make directory for event
	const eventDir = path.join(config.eventImagesDirectory,eventID);
	await mkdir(eventDir, {recursive: true});

	const files = fileProperty.files
	var paths = [];

	// Download each image to events
	await Promise.all(files.map(async (item, index) => {
		// Check if image extension
		const ext = path.extname(item.name).toLowerCase();
		if (!config.imageExtensions.includes(ext)) {
			return;
		}

		const fileUrl = item.file.url;
		// Check if file url not null
		if(!fileUrl) {
			return;
		}

		const fileName = `${index}${ext}`;
		const localPath = path.join(root,eventDir,fileName);
		const publicPath = `/${config.eventImagesDirectory.replace('public/', '')}/${eventID}/${fileName}`;
		
		// Download
		try {
			const res = await fetch(fileUrl);
			if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
			const fileStream = createWriteStream(localPath);
			await finished(Readable.fromWeb(res.body).pipe(fileStream));
			paths.push(publicPath);
		} catch(e) {
			console.error(`Failed downloading file ${index} for event ${eventID}:`, e.message);
		}
	}))

	// Fill in default if no image
	if (paths.length == 0) {
		paths.push("/events/default.png")
	}
	return paths;
}

const collectEvents = async () => {
	const events = [];
	let cursor;

	try {
		// Loop through notion data source for Outreach event table
		while (true) {
			const res = await notion.dataSources.query({
			data_source_id: config.dataSourceId,
			filter: {
				property: "Display On Website",
				checkbox: { equals: true }
			},
			sorts: [
				{
				property: "Date",
				direction: "descending"
				}
			],
			start_cursor: cursor
			})
			
			events.push(...res.results);
			if (!res.has_more) break;
			cursor = result.next_cursor;
		}

		// Parse results to get needed values
		const processedEvents = await Promise.all(
			events.map(async (e) => {
				return {
					id: e.id,
					images: await getFiles(getPropertyValue(e,"Pictures"),e.id),
					date: getDateText(getPropertyValue(e,"Date")),
					location: getLocationText(getPropertyValue(e,"Location")),
					title: getTitleText(getPropertyValue(e,"Workshop")),
					organization: getOrganizationText(getPropertyValue(e,"Organization")),
					students: getNumStudents(getPropertyValue(e,"Attendees"))
				}
			})
		)

		return processedEvents;
	} catch (error) {
		throw new Error(`Unable to retrieve data from Notion: ${error}`)
	}
};


// Get events
const events = await collectEvents();

// Build TS file for events
const buildEvents = (events) => {
	return events.map((e) => {
		return {
			images: e.images,
			event: {
				title: e.title,
				date: e.date,
				location: e.location,
				students: e.students
			}
		}
	});
}

// Build TS file for impact
const buildImpact = (events) => {
	const organizations = new Set(events.map((e) => e.organization));
	const students = events.map((e) => e.students).reduce((total,attendees) => total + attendees,0);

	return {
		organizations: organizations.size,
		students: students,
		events: events.length,
	};
};

const formatTsObject = (value, indent = 0) => {
  const pad = ' '.repeat(indent);
  if (Array.isArray(value)) {
    const items = value.map((item) => `${pad}  ${formatTsObject(item, indent + 4)}`).join(',\n');
    return `[\n${items}\n${pad}]`;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([key, item]) => `${pad}  ${key}: ${formatTsObject(item, indent + 2)}`)
      .join(',\n');
    return `{\n${entries}\n${pad}}`;
  }

  return typeof value === 'string' ? JSON.stringify(value) : String(value);
};

const writeModule = async (filePath, exportName, value) => {
  const contents = `const ${exportName} = ${formatTsObject(value)};\n\nexport default ${exportName};\n`;
  await writeFile(path.join(root, filePath), contents, 'utf8');
};

await writeModule(config.eventsOutput, 'events', buildEvents(events));
await writeModule(config.impactOutput, 'impact', buildImpact(events));
