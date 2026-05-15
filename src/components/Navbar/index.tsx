import styles from './style.module.scss';
import Image from 'next/image';

export default function Navbar() {
  const links = [
    { name: 'About Us', href: '#hero' },
    { name: 'Impact', href: '#impact' },
    { name: 'Events', href: '#events' },
    { name: 'Get Involved', href: '#involved' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
            {/* <Image src={'/outreach-logo.svg'} alt='Outreach' width={100} height={100} /> */}
            ACM Outreach
        </a>
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}