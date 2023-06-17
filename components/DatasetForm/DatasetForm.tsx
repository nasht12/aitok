import { useState } from 'react';

const DatasetForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [cid, setCid] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/datasets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, cid, description }),
      });

      const data = await response.json();

      console.log('Dataset stored:', data.message);

      // Reset form fields
      setTitle('');
      setCid('');
      setDescription('');
    } catch (error) {
      console.error('Error storing dataset:', error);
    }
  };

  return (
    <div>
      <h2>Add Dataset</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DatasetForm;
