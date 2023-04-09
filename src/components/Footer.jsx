import Image from 'next/image';
import styles from './Footer.module.scss';

const social = ['twitter', 'facebook', 'linkedin', 'instagram', 'youtube'];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          className="mx-auto"
          src="/logo-bw.svg"
          alt="RD Station"
          width={174}
          height={32}
        />

        <hr />

        <div className="social mx-auto w-[60%]">
          {social
            ? social.map((item) => (
              <a href="#">
                <img
                  className="social-icon"
                  src={`/social/${item}.svg`}
                  alt={item}
                />
              </a>
            ))
            : null}
        </div>

        <p className="legal">
          © 2021
          {' '}
          <strong>RD Station</strong>
          .
          {' '}
          <a className={styles.a} href="">
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
