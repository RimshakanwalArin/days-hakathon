import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Example: Here you would handle the form submission (e.g., save it to a database or send an email)
    // For now, we'll simulate a successful response.

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Simulate successful form submission
    res.status(200).json({ message: 'Message sent successfully!' });
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
