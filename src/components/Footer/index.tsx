<<<<<<< Updated upstream
import Image from 'next/image';
import styles from './style.module.scss';
import Typography from '../Typography';
import InstagramIcon from '@/public/instagram-logo.svg';
=======
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import MailIcon from "@/public/mail-icon.svg";
import InstagramLogo from "@/public/instagram-logo.svg";
import DiscordIcon from "@/public/discord-icon.svg";

>>>>>>> Stashed changes

const Footer: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const notMobile = styles[`mobile${!mobileOpen ? '_show': ''}`]
  const mobile = styles[`mobile${mobileOpen ? '_show': ''}`]

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.findUs}>
<<<<<<< Updated upstream
          <Typography variant="display/medium">Find us here!</Typography>
          <div className={styles.description}>
            <Typography variant="subheading">Interested in learning more?</Typography>
            <Typography variant="subheading" className={styles.subdescription}>
              Reach out to get connected, or explore our socials to get a sense of who we are as a
              community!
            </Typography>
          </div>
=======
          <h1>Find us here!</h1>
          <p>Interested in learning more?</p>
          <p>Reach out to get connected, or explore our socials to get a sense of who we are as a community!</p>
>>>>>>> Stashed changes
        </div>
        <div className={styles.socials}>
          <div className={styles.socialInfo}>
            <Image src="/mail-icon.svg" width={50} height={50} alt="Mail Icon" />
            {/* <MailIcon /> */}
            <Typography variant="subheading" className={styles.socialText}>
              Send us an inquiry
            </Typography>
          </div>
<<<<<<< Updated upstream

=======
          
>>>>>>> Stashed changes
          <div className={styles.socialInfo}>
            <Image src="/instagram-logo.svg" width={50} height={50} alt="Instagram Logo" />
            {/* <InstagramLogo /> */}
            <Typography variant="subheading" className={styles.socialText}>
              Follow us for updates
            </Typography>
          </div>
<<<<<<< Updated upstream

=======
          
>>>>>>> Stashed changes
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
