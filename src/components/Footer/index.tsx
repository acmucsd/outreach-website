import Image from 'next/image';
import styles from './style.module.scss';
import Typography from '../Typography';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer} id="socials">
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
            {/* <MailIcon /> */}
            <a
              href="mailto:outreach@acmucsd.org"
              className={`${styles.socialInfo} ${styles.highlight}`}
            >
              <Image src="/mail-icon.svg" width={50} height={50} alt="Mail Icon" />
              <Typography variant="subheading" className={styles.socialText}>
                Send us an inquiry
              </Typography>
            </a>
          </div>

          <div className={styles.socialInfo}>
            <a
              href="https://www.instagram.com/acm.at.ucsd"
              className={`${styles.socialInfo} ${styles.highlight}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/instagram-logo.svg" width={50} height={50} alt="Instagram Logo" />
              {/* <InstagramLogo /> */}
              <Typography variant="subheading" className={styles.socialText}>
                Follow us for updates
              </Typography>
            </a>
          </div>

          <div className={styles.socialInfo}>
            <a
              href="https://www.acmurl.com/outreach-discord"
              className={`${styles.socialInfo} ${styles.highlight}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/discord-icon.svg" width={50} height={50} alt="Discord Icon" />
              <Typography variant="subheading" className={styles.socialText}>
                Join the discussion
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
