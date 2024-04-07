import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';
import GetInvolvedCard from '@/components/InvolvedCard';

export default function GetInvolved() {
  return (
    <div className={styles.container}>
      <Typography variant="display/medium">Get Involved</Typography>
      <div className={styles.description}>
        <div className={styles.wrapper}>
          <GetInvolvedCard
            image="/involved/students.png"
            title="Students"
            description="Are you curious about what goes on behind your favorite website, game, app, or even the device you’re reading this on? Join us at one of our workshops where you’ll dive into the world of computing and gain hands-on experience or take a look at our curriculum to learn at your own pace."
            link="https://google.com"
          />
          <GetInvolvedCard
            image="/involved/volunteers.png"
            title="Volunteers"
            description="Are you interested in spreading the joy of computing and making a difference in our community? Join us in teaching and inspiring the next generation of programmers and change-makers by becoming a volunteer! No prior experience is required!"
            link="https://google.com"
          />
        </div>
      </div>
    </div>
  );
}
