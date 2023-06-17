import React, { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import Link from 'next/link';
import { Button } from '@mui/material';
import MainTable from './components/MainTable/MainTable'
import styles from '../styles/Home.module.css';

const Datasets: React.FC = () => {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/datasets'); // Make sure to use the correct API endpoint URL
        const data = await response.json();
        setDatasets(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
    <div>
      <h1>Datasets</h1>
      <Link href="/createdataset"><Button>Add dataset</Button></Link>
      {datasets && <MainTable data={datasets}/>}
    </div>
    </Layout>
  );
};

export default Datasets;
