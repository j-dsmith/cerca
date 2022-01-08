import Head from 'next/head';
import Image from 'next/image';
import LandingPage from '../components/landing-page';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cerca - Reusable Coffee Pouch</title>
        <link rel="icon" href="/cerca-icon.ico" />
      </Head>
      <LandingPage />
    </>
  );
}
