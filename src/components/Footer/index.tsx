import Image from 'next/image';
import styles from './style.module.scss';
import Typography from '../Typography';
import InstagramIcon from '@/public/instagram-logo.svg';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.findUs}>
          <Typography variant="display/medium">Find us here!</Typography>
          <div className={styles.description}>
            <Typography variant="subheading">Interested in learning more?</Typography>
            <Typography variant="subheading" className={styles.subdescription}>
              Reach out to get connected, or explore our socials to get a sense of who we are as a
              community!
            </Typography>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.socialInfo}>
            <Image src="/mail-icon.svg" width={50} height={50} alt="Mail Icon" />
            {/* <MailIcon /> */}
            <Typography variant="subheading" className={styles.socialText}>
              Send us an inquiry
            </Typography>
          </div>

          <div className={styles.socialInfo}>
            <Image src="/instagram-logo.svg" width={50} height={50} alt="Instagram Logo" />
            {/* <InstagramLogo /> */}
            <Typography variant="subheading" className={styles.socialText}>
              Follow us for updates
            </Typography>
          </div>

          <div className={styles.socialInfo}>
            <Image src="/discord-icon.svg" width={50} height={50} alt="Discord Icon" />
            <Typography variant="subheading" className={styles.socialText}>
              Join the discussion
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
