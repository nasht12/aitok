import React from 'react';
import Head from 'next/head';
import AIMenu from '../AIMenu/AIMenu';
import Link from '@mui/material/Link';
import styles from '../../styles/Home.module.css'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <Head>
        <title>AITOK App</title>
        <meta
          content="AI model tokenizer"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <AIMenu />
        {children}
      </main>
      <footer className={styles.footer}>
      <Link href="/" >
         About
        </Link>
        <Link href="/" >
         Contact
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
