import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero">
      <div className={styles.container}>
        <div className={styles.description}>
          <Typography variant="display/medium">ACM Outreach at UCSD</Typography>
          <Typography variant="subheading">
            Welcome to ACM Outreach at UCSD, where our mission is to ignite a passion for computing
            and STEM among K-12 students, with a special focus on those who are underrepresented in
            the computing community. Our goal is to empower students to explore the exciting world
            of computing by nurturing their curiosity and enthusiasm for technology. Join us in
            inspiring the next generation of innovators and problem solvers!
          </Typography>
        </div>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image
              src="/outreach-logo.svg"
              alt="Outreach Logo"
              fill
              sizes="400px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.subLogo}>
            <Typography variant="body">by</Typography>
            <a href="https://acmucsd.com">
              <Image src="/acm-logo.png" alt="ACM Logo" width={50} height={50} />
            </a>
            <Typography variant="body">at UC San Diego</Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
