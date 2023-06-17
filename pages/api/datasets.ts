import prisma from '../../lib/prisma'; // Update the path based on your project structure
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.datasets.findMany();

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, cid, description, address, contributors } = req.body;

      const result = await prisma.datasets.create({
        data: {
          title,
          cid,
          description,
          address,
          contributors
        },
      });

      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
