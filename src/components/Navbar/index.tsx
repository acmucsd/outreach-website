'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import Typography from '../Typography';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.left}>
          <Image src="/acm-logo.png" alt="ACM Logo" width={40} height={40} />
          <Typography
            variant="subheading"
            onClick={() => scrollToSection('landing')}
            style={{ cursor: 'pointer' }}
          >
            at UC San Diego
          </Typography>
        </div>
        <div className={styles.right}>
          <button onClick={() => scrollToSection('impact')} className={styles.navLink}>
            <Typography variant="body">Our Impact</Typography>
          </button>
          <button onClick={() => scrollToSection('get-involved')} className={styles.navLink}>
            <Typography variant="body">Get Involved</Typography>
          </button>
          <button onClick={() => scrollToSection('socials')} className={styles.navLink}>
            <Typography variant="body">Socials</Typography>
          </button>
        </div>
      </div>
    </div>
  );
}
