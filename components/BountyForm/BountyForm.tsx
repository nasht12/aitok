import { useState } from 'react';
import { useAccount } from 'wagmi';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const BountyForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [bounty, setBounty] = useState(0);
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const { address, connector, isConnected } = useAccount();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/bounties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, bounty, status: 'active' }),
      });

      const data = await response.json();

      console.log('Dataset stored:', data.message);

      // Reset form fields and show success alert
      setTitle('');
      setBounty(0);
      setStatus('');
      setDescription('');
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
      <form onSubmit={handleSubmit}>
        <Typography variant="caption">
          <b>Address:</b> {address}
        </Typography>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}
        >
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            sx={{ width: '300px' }}
          />

          <TextField
            id="description"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            sx={{ width: '300px' }}
          />

          <TextField
            id="bounty"
            label="Bounty"
            variant="outlined"
            type="number"
            value={bounty}
            onChange={(e) => setBounty(parseInt(e.target.value, 10))}
            sx={{ width: '300px' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">FIL</InputAdornment>,
            }}
          />
        </div>
        <Button variant="contained" type="submit" sx={{ marginTop: '1rem' }}>
          Submit
        </Button>
      </form>

      {isSuccess && (
        <Alert severity="success" sx={{ marginTop: '1rem' }}>
          Added bounty successfully!
        </Alert>
      )}

      {isError && (
        <Alert severity="error" sx={{ marginTop: '1rem' }}>
          Failed to submit bounty. Please try again.
        </Alert>
      )}
    </div>
  );
};

export default BountyForm;
