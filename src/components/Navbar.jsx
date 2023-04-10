import Image from 'next/image';
import { useMediaQuery, useToggle } from 'usehooks-ts';

import Button from './Button';
import styles from './Navbar.module.scss';

function NavCTA() {
  return (
    <div className={`${styles.ctaBlock}`}>
      <div className="btn-wrapper">
        <Button secondary>Button</Button>
        <Button>Button</Button>
      </div>
    </div>
  );
}

function MenuMobile() {
  return (
    <div className={`${styles.menuMobile}`}>
      <ul className="w-full menu-list">
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
        <li>Menu 5</li>

      </ul>

      <NavCTA />
    </div>
  );
}

function MenuDesktop() {
  return (
    <div className={`${styles.menuDesktop} hidden lg:flex w-[70%]`}>
      <ul className="w-full flex justify-between items-center menu-list">
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
        <li>Menu 5</li>

        <NavCTA />
      </ul>

    </div>
  );
}

function Navbar() {
  const [showMenu, toggleMenu, setMenu] = useToggle();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <navbar className={styles.navbar}>

      <Image
        src="/logo-default.svg"
        alt="RD Station"
        width={150}
        height={24}
        priority
      />

      {
        showMenu ? (
          <Image
            src="/icon/close.svg"
            alt="menu"
            width={32}
            height={32}
            onClick={toggleMenu}
          />
        ) : null
      }

      {
        !showMenu ? (
          <Image
            src="/icon/menu.svg"
            alt="menu"
            width={32}
            height={32}
            onClick={toggleMenu}
          />
        ) : null
      }

      {
        showMenu ? (
          <MenuMobile />
        ) : null
      }

    </navbar>
  );
}

export default Navbar;
