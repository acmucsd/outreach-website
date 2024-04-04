import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.scss';

const Footer: React.FC = () => {
  // const [email, setEmail] = useState("");
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerContents">
          <div className="footerContents__wrapper">
            <h1>Find us here!</h1>
            <p>Interested in learning more?</p>
            <p>
              Reach out to get connected, or explore our socials to get a sense of who we are as a
              community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
