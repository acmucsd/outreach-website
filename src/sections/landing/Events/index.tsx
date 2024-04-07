import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Events() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Typography variant="display/medium">Upcoming Public Events</Typography>
        <Typography variant="subheading">
          Open to everyone to join!! Cannot attend but still interested? Contact us!
        </Typography>
      </div>
    </div>
  );
}
