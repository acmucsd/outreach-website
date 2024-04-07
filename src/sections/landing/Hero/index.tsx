import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Typography variant="display/medium">ACM Outreach at UCSD</Typography>
        <Typography variant="subheading">
          Welcome to ACM Outreach at UCSD, where our mission is to ignite a passion for computing
          and STEM among K-12 students, with a special focus on those who are underrepresented in
          the computing community. Our goal is to empower students to explore the exciting world of
          computing by nurturing their curiosity and enthusiasm for technology. Join us in inspiring
          the next generation of innovators and problem solvers!
        </Typography>
      </div>
      <div className={styles.logo}>
        <Image src="/outreach-logo.svg" alt="Outreach Logo" fill />
      </div>
    </div>
  );
}
