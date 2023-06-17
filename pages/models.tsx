import React from 'react';
import Layout from './components/Layout/Layout';
import styles from '../styles/Home.module.css';

const Models: React.FC = () => {
  // Dummy data for the models
  const models = [
    { id: 1, name: 'Model 1', description: 'Description 1' },
    { id: 2, name: 'Model 2', description: 'Description 2' },
    { id: 3, name: 'Model 3', description: 'Description 3' },
  ];

  return (
    <Layout>
    <div className={styles.content}>
      {/* <h1>Models</h1> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.id}>
              <td>{model.id}</td>
              <td>{model.name}</td>
              <td>{model.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  );
};

export default Models;
