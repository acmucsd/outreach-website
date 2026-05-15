"use client"
import Image from 'next/image';
import styles from './style.module.scss';
import { ReactNode, useState } from 'react';

interface EventCardProps {
  images: string[];
  children: ReactNode;
  className?: string;
}

const Card = ({ images, children, className }: EventCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = images && images.length > 0;
  const hasMultipleImages = images && images.length > 1;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.picture}>
        {hasImages ? (
          <>
            <Image 
              src={images[currentIndex]} 
              alt={`Event image ${currentIndex + 1}`} 
              objectFit="cover" 
              fill 
            />
            
            {/* Show controls only if there are multiple images */}
            {hasMultipleImages && (
              <div className={styles.carouselControls}>
                <button 
                  onClick={prevImage} 
                  className={styles.navButton} 
                  aria-label="Previous image"
                >
                  &#10094;
                </button>
                <button 
                  onClick={nextImage} 
                  className={styles.navButton} 
                  aria-label="Next image"
                >
                  &#10095;
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.placeholder}>No Image Available</div>
        )}
      </div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default Card;
