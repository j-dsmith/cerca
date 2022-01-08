import styles from './mobile-menu-btn.module.scss';

function MobileMenuBtn() {
  return (
    <button className={styles.btn}>
      <div className={styles.menuIcon}>
        <span className={styles.short} />
        <span className={styles.medium} />
        <span />
      </div>
    </button>
  );
}

export default MobileMenuBtn;
