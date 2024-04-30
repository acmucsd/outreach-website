import Typography from '@/components/Typography';
import styles from './style.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Typography variant="display/medium">Hello World!</Typography>
        <Typography variant="subheading">
            Join us in our endeavor to empower the next generation of programmers, builders, and leaders.
        </Typography>
      </div>
    </div>
  );
}
