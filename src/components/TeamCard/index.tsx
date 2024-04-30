import Image from 'next/image';
import styles from './style.module.scss';
import Typography from '../Typography';
import Card from '../Card';

interface TeamCardProps {
  image: string;
  team: { title: string; position: string};
}

const TeamCard = ({ image, team: { title, position } }: TeamCardProps ) => {
  return (
    <Card image={image} className={styles.card} aspectRatio={9 / 8}>
      <Typography variant="body" className={styles.heading}>
        {title}
      </Typography>
      <Typography variant="label" className={styles.date}>
        {position}
      </Typography>
    </Card>
  );
};

export default TeamCard;
