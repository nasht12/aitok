import { useState } from 'react';
import {useAccount } from 'wagmi';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const DatasetForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [cid, setCid] = useState('');
  const [description, setDescription] = useState('');
  const [contributors, setContributors] = useState<string[]>([]);
  const [newContributor, setNewContributor] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

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
      setIsSuccess(true);
      setIsError(false);
    } catch (error) {
      console.error('Error storing dataset:', error);
      setIsSuccess(false);
      setIsError(true);
    }
  };

  return (
    <div>
      {/* <h2>Add Dataset</h2> */}
      <form onSubmit={handleSubmit}>
        <Typography variant="caption"><b>Address:</b> {address}</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop:'1rem' }}>
          <TextField
            type="text"
            label="Text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            type="text"
            id="cid"
            label="CID"
            value={cid}
            onChange={(e) => setCid(e.target.value)}
            required
          />
          <TextField
            id="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div>
          <TextField
            type="text"
            label="Contributors"
            id="contributors"
            value={newContributor}
            onChange={handleContributorChange}
          />
          <Button type="button" size={'small'} onClick={handleAddContributor} sx={{margin: '0.75rem'}}>
            Add Contributor
          </Button>
        </div>
        <div>
          <ul>
            {contributors.map((contributor, index) => (
              <li key={index}>{contributor}</li>
            ))}
          </ul>
        </div>
        </div>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      {isSuccess && (
        <Alert severity="success" sx={{ marginTop: '1rem' }}>
          Minted dataset successfully!
        </Alert>
      )}

      {isError && (
        <Alert severity="error" sx={{ marginTop: '1rem' }}>
          Failed to mint dataset. Please try again.
        </Alert>
      )}
    </div>
  );
};

export default DatasetForm;
