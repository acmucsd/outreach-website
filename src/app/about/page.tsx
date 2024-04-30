import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import Typography from '@/components/Typography';
import MeetTeam from '@/sections/about/MeetTeam';
import Hero from '@/sections/about/Hero';

const About: React.FC = () => {
  return (
    <main className={styles.main}>
        <Hero />
        <MeetTeam />
    </main>
  );
};

export default About;
