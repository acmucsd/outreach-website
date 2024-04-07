import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';
import EventCard from '@/components/EventCard';
import events from './events';

export default function Events() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Typography variant="display/medium">Upcoming Public Events</Typography>
        <Typography variant="subheading">
          Open to everyone to join!! Cannot attend but still interested? Contact us!
        </Typography>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.eventGrid}>
          {events.map((item, index) => (
            <EventCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
