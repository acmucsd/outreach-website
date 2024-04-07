import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Impact() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Typography variant="display/medium">Our Impact</Typography>
        <Typography variant="subheading">
          We have reached 5 different schools within the San Diego community, enlightening kids with
          fun STEM education and exposure to computer science. Join us to make CS more equitable!
        </Typography>
      </div>
      <div className={styles.statistics}>
        <div className={styles.statistic}>
          <Typography variant="display/medium" className={styles.number}>
            5
          </Typography>
          <Typography variant="subheading">schools collaborated</Typography>
        </div>
        <div className={styles.statistic}>
          <Typography variant="display/medium" className={styles.number}>
            100+
          </Typography>
          <Typography variant="subheading">students taught</Typography>
        </div>
        <div className={styles.statistic}>
          <Typography variant="display/medium" className={styles.number}>
            5
          </Typography>
          <Typography variant="subheading">events hosted</Typography>
        </div>
      </div>
      <div className={styles.pictures}>
        <Image
          src="/impact/impact1.png"
          width={250}
          height={250}
          alt="hi"
          className={styles.picture}
        />
        <Image
          src="/impact/impact2.png"
          width={250}
          height={250}
          alt="hi"
          className={styles.picture}
        />
        <Image
          src="/impact/impact3.jpg"
          width={250}
          height={250}
          alt="hi"
          className={styles.picture}
        />
      </div>
    </div>
  );
}
