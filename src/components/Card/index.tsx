import Image from 'next/image';
import styles from './style.module.scss';
import { ReactNode } from 'react';

interface EventCardProps {
  image: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ image, children, className }: EventCardProps) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.picture}>
        <Image src={image} alt="Event image" objectFit="cover" fill />
      </div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;
