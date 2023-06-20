import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Layout>
    <div className={styles.content}>
      {pathname === '/' && <>
      <Typography variant="h6"><b>Datanomy</b></Typography>
      <Typography variant="caption">
          Fueling the data economy with collaborative, trusted, and incentivized data creation. <br/>
          Post bounties, reward contributors, and store datasets on Filecoin. <br/>
          Democratizing the data economy for innovation, research and fair token rewards.
        </Typography>
      </>}
    </div>
    </Layout>
  );
};

export default Home;
