import Image from 'next/image';
import styles from './style.module.scss';
import { ReactNode, useState } from 'react';

interface EventCardProps {
  images: string[];
  children: ReactNode;
  className?: string;
}

const Card = ({ images, children, className }: EventCardProps) => {
  const imageSrc = images?.[0] || '/events/default.png'
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.picture}>
        <Image src={imageSrc} alt="Event image" objectFit="cover" fill />
      </div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;
