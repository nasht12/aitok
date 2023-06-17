import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Layout>
    <div className={styles.content}>
      {pathname === '/' && <>Home</>}
      {/* {pathname === '/models' && <Models />}
      {pathname === '/datasets' && <Datasets />} */}
    </div>
    </Layout>
  );
};

export default Home;
