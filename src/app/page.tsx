import Hero from '@/sections/landing/Hero';
import styles from './page.module.scss';
import Impact from '@/sections/landing/Impact';
import Events from '@/sections/landing/Events';
import GetInvolved from '@/sections/landing/GetInvolved';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Impact />
      <Events />
      <GetInvolved />
    </main>
  );
}
