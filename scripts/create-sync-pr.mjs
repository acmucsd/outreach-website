const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
const branch = process.env.PR_BRANCH || 'chore/sync-notion-content';
const token = process.env.GITHUB_TOKEN;

if (!owner || !repo) {
  throw new Error('Missing GITHUB_REPOSITORY.');
}

if (!token) {
  throw new Error('Missing GITHUB_TOKEN.');
}

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

const run = async () => {
  const existing = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls?head=${owner}:${branch}&state=open`,
    { headers },
  ).then((response) => response.json());

  if (Array.isArray(existing) && existing.length > 0) {
    console.log('Pull request already exists.');
    return;
  }

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'chore: sync notion content',
      head: branch,
      base: 'main',
      body: 'Automated Notion sync for events and impact content.',
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create pull request: ${response.status} ${response.statusText}`);
  }

  console.log('Pull request created.');
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
