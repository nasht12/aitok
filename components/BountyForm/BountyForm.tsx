import { useState } from 'react';
import {useAccount } from 'wagmi'

const BountyForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [bounty, setBounty] = useState(0);
  const [status, setStatus] = useState('');

  const [description, setDescription] = useState('');

  const { address, connector, isConnected } = useAccount()


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

      // Reset form fields
      setTitle('');
      setBounty(0)
      setStatus('');
      setDescription('');
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
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bounty">Bounty:</label>
          <input
          type="number"
          id="bounty"
          value={bounty}
          onChange={(e) => setBounty(parseInt(e.target.value, 10))}
          required
        />
        </div>
        {/* <div>
        <label htmlFor="status">Status:</label>
        <input
          type="radio"
          id="status"
          value="true"
          checked={status === true}
          // onChange={(e) => setBounty(e.target.value)}
        />
      </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BountyForm;
