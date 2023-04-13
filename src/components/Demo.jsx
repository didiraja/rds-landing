import Image from 'next/image';
import Button from './Button';
import styles from './Demo.module.scss';

function Demo() {
  return (
    <section className={styles.demo}>
      <div className="container mx-auto">

        <div className="wrapper">
          <div className="content-wrapper">
            <p className="title">
              Entenda melhor como o RD Station Marketing funciona na prática
            </p>

            <Button secondary className="button">
              assista a demonstração
              {' '}
              {'>'}
            </Button>
          </div>

          <div className="video-wrapper">
            <Image
              className="thumbnail mx-auto"
              src="/img-video-thumbnail.jpg"
              alt="menu"
              width={649}
              height={365}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Demo;
