import Image from 'next/image';
import Button from './Button';
import styles from './Navbar.module.scss';

function MenuDesktop() {
  return (
    <div className={`${styles.menu} hidden lg:flex w-[70%]`}>
      <ul className="w-full flex justify-between items-center menu-list">
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
        <li>Menu 5</li>

        <div className="btn-wrapper">
          <Button secondary>Button</Button>
          <Button>Button</Button>
        </div>
      </ul>

    </div>
  );
}

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
        className="lg:hidden"
        alt="menu"
        width={32}
        height={32}
      />

      <MenuDesktop />
    </navbar>
  );
}

export default Navbar;
