'use client';

import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <div className={styles.logoContainer}>
          <a href="#hero" className={styles.icon}>
            <Image src="/outreach-logo.svg" alt="Outreach" fill sizes="40px" style={{ objectFit: 'contain' }} />
          </a>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>Outreach</span>
            <span className={styles.logoSubtitle}>ACM at UC San Diego</span>
          </div>
        </div>
        <button
          type="button"
          className={styles.menuButton}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
