import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AITOK App</title>
        <meta
          content="AI model tokenizer"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <ConnectButton />
      <main className={styles.main}>
        <button>Upload Model</button>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
         About
        </a>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
         Contact
        </a>
      </footer>
    </div>
  );
};

export default Home;
