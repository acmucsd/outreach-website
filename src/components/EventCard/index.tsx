import Image from 'next/image';
import styles from './style.module.scss';
import Typography from '../Typography';
import Card from '../Card';

interface EventCardProps {
  image: string;
  event: { title: string; date: string; location: string };
}

const EventCard = ({ image, event: { title, date, location, students } }: EventCardProps) => {
  return (
    <Card image={image} className={styles.card}>
      <Typography variant="body" className={styles.heading}>
        {title}
      </Typography>
      <Typography variant="label" className={styles.date}>
        Date: {date}
      </Typography>
      <Typography variant="label" className={styles.location}>
        Location: {location}
      </Typography>
      <Typography variant="label" className={styles.students}>
        Number of Students: {students}
      </Typography>
    </Card>
  );
};

export default EventCard;
