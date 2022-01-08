import Image from 'next/image';
import Navbar from '../navbar';
import styles from './landing-page.module.scss';
import cercaLabelSpray from '../../public/label-spray.png';

function LandingPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      {/* <h1 className={styles.brandHeading}>cerca</h1> */}
      <div className={styles.brandHeading}>
        <Image
          src="/cerca-brand-text.png"
          alt="cerca"
          height={262}
          width={1325}
        />
      </div>
    </main>
  );
}

export default LandingPage;
