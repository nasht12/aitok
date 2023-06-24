import React from 'react';
import Layout from '../components/Layout/Layout';
import MainTable from '../components/MainTable/MainTable'
import BountyTable from '../components/BountyTable/BountyTable';
import DatasetForm from '../components/DatasetForm/DatasetForm';
import BountyForm from '../components/BountyForm/BountyForm';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export async function getStaticProps() {
  try {
    const response1 = await fetch('https://aitok.vercel.app/api/datasets');
    const datasets = await response1.json();

    const response2 = await fetch('https://aitok.vercel.app/api/bounties');
    const bounties = await response2.json();

    return {
      props: {
        datasets,
        bounties,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        datasets: [],
        bounties: [],
      },
    };
  }
}

interface DatasetsProps {
  datasets: any[]; // Update with the appropriate type for datasets
  bounties: any[]; // Update with the appropriate type for bounties
}

const Datasets: React.FC<DatasetsProps> = ({ datasets, bounties }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div style={{ width: '100%', padding: '40px', margin: '20px 0' }}>
        <h1>Datasets</h1>
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
            <TabPanel value="1">{datasets && <MainTable data={datasets} />}</TabPanel>
            <TabPanel value="2"><BountyTable data={bounties} /></TabPanel>
            <TabPanel value="3"><DatasetForm /></TabPanel>
            <TabPanel value="4"><BountyForm /></TabPanel>
          </TabContext>
        </Box>
      </div>
    </Layout>
  );
};

export default Datasets;
