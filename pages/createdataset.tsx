import React from 'react';
import DatasetForm from '../components/DatasetForm/DatasetForm';
import Layout from '../components/Layout/Layout';
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'

const CreateDatasetPage: React.FC = () => {
    const { address, connector, isConnected } = useAccount()

  return (
    <Layout>
    <div>
      <h1>Create Dataset</h1>
      <h3>Address: {address}</h3>
      <DatasetForm />
    </div>
    </Layout>
  );
};

export default CreateDatasetPage;
