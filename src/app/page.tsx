import styles from './page.module.scss';
import Image from 'next/image';
import OutreachLogo from "@/public/outreach-logo.svg";

// breakpoint = 870px


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landing}>
        <div className={styles.landingContent}>
          <div className={styles.outreachDesc}>
            <h1>ACM Outreach at UCSD</h1>
            <p>Welcome to ACM Outreach at UCSD, where our mission is to ignite a passion for computing and STEM among K-12 students, with a special focus on those who are underrepresented in the computing community. Our goal is to empower students to explore the exciting world of computing by nurturing their curiosity and enthusiasm for technology. Join us in inspiring the next generation of innovators and problem solvers! </p>
          </div>
          <div className={styles.outreachLogo}>
            <Image src="/outreach-logo.svg" width={250} height={250} alt="Outreach Logo" />
          </div>
        </div>
      </div>
    </main>
  );
}
