import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import { Button } from '@mui/material';
import MainTable from '../components/MainTable/MainTable'
import DatasetForm from '../components/DatasetForm/DatasetForm';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Datasets: React.FC = () => {
  const [value, setValue] = useState('1');
  const [datasets, setDatasets] = useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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

  console.log('datasets', datasets)

  return (
    <Layout>
    <div style={{ width: '100%', padding: '40px', margin: '20px 0' }}>
      <h1>Datasets</h1>
      {/* <Link href="/createdataset"><Button>Add dataset</Button></Link> */}
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Bounties" value="2" />
            <Tab label="Add dataset" value="3" />
            <Tab label="Add bounty" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">{datasets && <MainTable data={datasets}/>}</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3"><DatasetForm /></TabPanel>
        <TabPanel value="4"><DatasetForm /></TabPanel>
      </TabContext>
    </Box>
      {/* {datasets && <MainTable data={datasets}/>} */}
    </div>
    </Layout>
  );
};

export default Datasets;
