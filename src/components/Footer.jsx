import Image from 'next/image';
import styles from './Footer.module.scss';

const social = [
  {
    icon: 'twitter',
    link: 'https://twitter.com/rd_station',
  },
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/ResultadosDigitais/',
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/company/resultadosdigitais',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/resdigitais/',
  },
  {
    icon: 'youtube',
    link: 'https://www.youtube.com/channel/UC5lPKvmw6-DFya_qreisENQ',
  }];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        <Image
          className="mx-auto"
          src="/logo-bw.svg"
          alt="RD Station"
          width={174}
          height={32}
        />

        <hr />

        <div className="social">
          {social
            ? social.map((item) => (
              <a href={item.link}>
                <img
                  className="social-icon"
                  src={`/social/${item.icon}.svg`}
                  alt={item.icon}
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
          <a className={styles.a} href="https://legal.rdstation.com/pt/privacy-policy/" target="_blank" rel="noreferrer">
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
