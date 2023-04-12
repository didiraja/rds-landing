import Image from 'next/image';
import styles from './Slide.module.scss';

function Slide({ icon, title, content }) {
  return (
    <div className={`${styles.slide} slide`}>

      <div className={styles.iconWrapper}>
        <Image
          src={`/icon/${icon}.svg`}
          alt="Seta subindo"
          className={styles.icon}
          width={32}
          height={32}
          priority
        />
      </div>

      <p className={styles.title}>
        {title}
      </p>

      <p className={styles.content}>
        {content}
      </p>
    </div>
  );
}

export default Slide;
