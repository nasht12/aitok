import { useState } from 'react';
import {useAccount } from 'wagmi'

const DatasetForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [cid, setCid] = useState('');
  const [description, setDescription] = useState('');
  const [contributors, setContributors] = useState<string[]>([]);
  const [newContributor, setNewContributor] = useState('');

  const handleContributorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContributor(e.target.value);
  };

  const handleAddContributor = () => {
    if (newContributor.trim() !== '') {
      setContributors([...contributors, newContributor]);
      setNewContributor('');
    }
  };


  const { address, connector, isConnected } = useAccount()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/datasets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, cid, description, address, contributors }),
      });

      const data = await response.json();

      console.log('Dataset stored:', data.message);

      // Reset form fields
      setTitle('');
      setCid('');
      setDescription('');
      setContributors([]);
      setNewContributor('');
    } catch (error) {
      console.error('Error storing dataset:', error);
    }
  };

  return (
    <div>
      {/* <h2>Add Dataset</h2> */}
      <form onSubmit={handleSubmit}>
        <h3>Address: {address}</h3>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cid">CID:</label>
          <input
            type="text"
            id="cid"
            value={cid}
            onChange={(e) => setCid(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contributors">Contributors:</label>
          <input
            type="text"
            id="contributors"
            value={newContributor}
            onChange={handleContributorChange}
          />
          <button type="button" onClick={handleAddContributor}>
            Add Contributor
          </button>
        </div>
        <div>
          <ul>
            {contributors.map((contributor, index) => (
              <li key={index}>{contributor}</li>
            ))}
          </ul>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DatasetForm;
