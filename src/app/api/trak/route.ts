import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type TrackingRequest = {
  tracking_number: string;
  carrier: string;
};

type TrackingResponse = {
  object_state: string;
  status: string;
  [key: string]: any; // Allow additional properties from Shippo API
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tracking_number, carrier }: TrackingRequest = req.body;

  if (!tracking_number || !carrier) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await axios.post<TrackingResponse>(
      'https://api.goshippo.com/tracks/',
      {
        tracking_number,
        carrier,
      },
      {
        headers: {
          Authorization: `ShippoToken ${process.env.SHIPPO_API_KEY}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
