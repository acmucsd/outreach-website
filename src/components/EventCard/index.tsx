import Image from 'next/image';
import styles from './style.module.scss';
import Typography from '../Typography';
import Card from '../Card';

interface EventCardProps {
  image: string;
  event: { title: string; date: string; location: string };
}

const EventCard = ({ image, event: { title, date, location } }: EventCardProps) => {
  return (
    <Card image={image} className={styles.card}>
      <Typography variant="body" className={styles.heading}>
        {title}
      </Typography>
      <Typography variant="label" className={styles.date}>
        {date}
      </Typography>
      <Typography variant="label" className={styles.location}>
        {location}
      </Typography>
    </Card>
  );
};

export default EventCard;
