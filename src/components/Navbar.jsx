import Image from 'next/image';
import { useMediaQuery, useToggle } from 'usehooks-ts';
import { MEDIA_QUERIES } from '@/services';

import Button from './Button';
import styles from './Navbar.module.scss';

function Navbar() {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <nav className={styles.navbar}>
      <Image
        src="/logo-default.svg"
        alt="RD Station"
        width={150}
        height={24}
        priority
      />

      {!isDesktop ? <MenuMobile /> : <NavDesktop />}
    </nav>
  );
}

function MenuMobile() {
  const [showMenu, toggleMenu] = useToggle();

  return (
    <>
      {showMenu ? (
        <Image
          src="/icon/close.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={toggleMenu}
        />
      ) : null}

      {!showMenu ? (
        <Image
          src="/icon/menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={toggleMenu}
          preload
        />
      ) : null}

      {showMenu ? <NavMobile /> : null}
    </>
  );
}

function NavMobile() {
  return (
    <div className={`${styles.menuMobile}`}>
      <ul className="w-full menu-list">
        <MenuList />
      </ul>

      <NavCTA />
    </div>
  );
}

function NavDesktop() {
  return (
    <div className={`${styles.menuDesktop}`}>
      <ul className="menu-list">
        <MenuList />
      </ul>

      <NavCTA />
    </div>
  );
}

function MenuList() {
  const [showSub, toggleSub] = useToggle(true);

  return (
    <>
      <li>Menu 1</li>
      <li className="has-submenu">
        <div className="label">
          Menu 2
          {' '}
          <img
            src="/icon/down.svg"
            alt="seta - abrir menu"
            onClick={toggleSub}
          />
        </div>

        {showSub ? (
          <div className="menu">
            <ul className={`${styles.subMenu}`}>
              <li>Metodologia</li>
              <li>Tudo sobre Inbound Marketing</li>
            </ul>
            <ul className={`${styles.subMenu}`}>
              <li>Cursos</li>
              <li>RD University</li>
              <li>Introdução ao Inbound Marketing</li>
              <li>RD Station Marketing Basic</li>
            </ul>
            <ul className={`${styles.subMenu}`}>
              <li>Ferramentas</li>
              <li>Avalie seu funil de vendas</li>
              <li>Compare suas métricas de Email Marketing</li>
              <li>Calcule o ROI do RD Station Marketing</li>
            </ul>
          </div>
        ) : null}
      </li>
      <li>Menu 3</li>
      <li>Menu 4</li>
      <li>Menu 5</li>
    </>
  );
}

function NavCTA() {
  return (
    <div className={`${styles.ctaBlock}`}>
      <div className="btn-wrapper">
        <Button secondary>Button</Button>
        <Button>
          Button
          {' '}
          <Image
            className="pl-2"
            src="/icon/right.svg"
            alt=""
            width={22}
            height={31}
            preload
          />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
