import Image from 'next/image';
import './styles.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="findUs">
          <h1>Find us here!</h1>
          <p>Interested in learning more?</p>
          <p>
            Reach out to get connected, or explore our socials to get a sense of who we are as a
            community!
          </p>
        </div>
        <div className="socials">
          <div className="socialInfo">
            <Image src="/mail-icon.svg" width={50} height={50} alt="Mail Icon" />
            {/* <MailIcon /> */}
            <p>Send us an inquiry</p>
          </div>

          <div className="socialInfo">
            <Image src="/instagram-logo.svg" width={50} height={50} alt="Instagram Logo" />
            {/* <InstagramLogo /> */}
            <p>Follow us for updates</p>
          </div>

          <div className="socialInfo">
            <Image src="/discord-icon.svg" width={50} height={50} alt="Discord Icon" />
            <p>Join the discussion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
