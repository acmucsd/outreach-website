import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';
import team from './team';
import TeamCard from '@/components/TeamCard';

export default function MeetTeam() {
  return (
    <div className={styles.container}>
        <div className={styles.description}>
            <Typography variant="display/medium">Meet Our Team</Typography>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.teamGrid}>
            {team.map((item, index) => (
              <TeamCard key={index} {...item} />
            ))}
          </div>
      </div>
    </div>
  );
}
