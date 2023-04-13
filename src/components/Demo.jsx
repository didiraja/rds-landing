import Image from 'next/image';
import Button from './Button';
import styles from './Demo.module.scss';

function Demo() {
  return (
    <section className={styles.demo}>
      <div className="container mx-auto">
        <p className="title">
          Entenda melhor como o RD Station Marketing funciona na prática
        </p>

        <Button secondary className="button mx-auto">
          assista a demonstração
          {' '}
          {'>'}
        </Button>

        <Image
          className="w-full thumbnail"
          src="/img-video-thumbnail.jpg"
          alt="menu"
          width={424}
          height={238}
        />
      </div>
    </section>
  );
}

export default Demo;
