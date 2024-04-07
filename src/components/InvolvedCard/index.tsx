import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import Typography from '../Typography';
import Card from '../Card';

interface GetInvolvedCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

const GetInvolvedCard = ({ image, title, description, link }: GetInvolvedCard) => {
  return (
    <Card image={image}>
      <div className={styles.cardContent}>
        <div>
          <Typography variant="display/small" className={styles.heading}>
            {title}
          </Typography>
          <Typography variant="label" className={styles.location}>
            {description}
          </Typography>
        </div>
        <Link href={link} className={styles.link}>
          Learn More
        </Link>
      </div>
    </Card>
  );
};

export default GetInvolvedCard;
