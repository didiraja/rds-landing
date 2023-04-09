import Image from 'next/image';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <navbar className={styles.navbar}>
      <Image
        src="/logo-default.svg"
        alt="RD Station"
          // className={}
        width={150}
        height={24}
        priority
      />

      <Image
        src="/icon/menu.svg"
        alt="menu"
        width={32}
        height={32}
      />
    </navbar>
  );
}

export default Navbar;
