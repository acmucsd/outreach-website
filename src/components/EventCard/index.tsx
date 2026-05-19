import Image from 'next/image';
import styles from './style.module.scss';
import Typography from '../Typography';
import Card from '../Card';

interface EventCardProps {
  eventImages: string[];
  event: { title: string; date: string; location: string; students: number | null };
}

enum EventStatus {
  PAST = 'Past Event',
  TODAY = 'Happening Today',
  UPCOMMING = 'Upcoming Event',
}

const parseEventDate = (date: string) => {
  const [month, day, year] = date.split('/').map(Number);
  if (!month || !day || !year) return null;
  return new Date(year, month - 1, day);
};

const getEventStatus = (date: string) => {
  const eventDate = parseEventDate(date);
  if (!eventDate) return null;

  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const eventStart = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());

  if (eventStart.getTime() < todayStart.getTime()) return EventStatus.PAST;
  if (eventStart.getTime() > todayStart.getTime()) return EventStatus.UPCOMMING;
  return EventStatus.UPCOMMING;
};

const getStatusClassName = (status: EventStatus | null) => {
  if (status === EventStatus.UPCOMMING) return styles.upcoming;
  if (status === EventStatus.TODAY) return styles.today;
  if (status === EventStatus.PAST) return styles.past;
  return styles.status;
};

const EventCard = ({ eventImages, event: { title, date, location, students } }: EventCardProps) => {
  const status = getEventStatus(date);

  return (
    <Card images={eventImages} className={styles.card}>
      {status && (
        <Typography variant="label" className={`${styles.status} ${getStatusClassName(status)}`}>
          {status}
        </Typography>
      )}
      <Typography variant="body" className={styles.heading}>
        {title}
      </Typography>
      <Typography variant="label" className={styles.date}>
        Date: {date}
      </Typography>
      <Typography variant="label" className={styles.location}>
        Location: {location}
      </Typography>
      {students && (
        <Typography variant="label" className={styles.students}>
          Number of Students: {students}
        </Typography>
      )}
    </Card>
  );
};

export default EventCard;
