// Dependencies
import Image from 'next/image';

// Styles
import styles from './navbar.module.scss';
import cercaIcon from '../../public/cerca-icon.png';

// Components
import MobileMenuBtn from '../ui/mobile-menu-btn';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandIcon}>
        <Image src={cercaIcon} alt="Cerca brand icon" />
      </div>
      <MobileMenuBtn />
    </nav>
  );
}

export default Navbar;
