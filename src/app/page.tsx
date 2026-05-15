import Hero from '@/sections/landing/Hero';
import styles from './page.module.scss';
import Impact from '@/sections/landing/Impact';
import Events from '@/sections/landing/Events';
import GetInvolved from '@/sections/landing/GetInvolved';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Impact />
      <Events />
      <GetInvolved />
    </main>
  );
}
