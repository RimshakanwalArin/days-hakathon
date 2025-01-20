'use client'
import { useState } from 'react';

type TrackingInfo = {
  object_state: string;
  status: string;
  [key: string]: any; // Allow additional properties
};

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState<string>('');
  const [carrier, setCarrier] = useState<string>('');
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tracking_number: trackingNumber, carrier }),
      });

      const data: TrackingInfo = await response.json();
      setTrackingInfo(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Track Your Shipment</h1>
      <form onSubmit={handleTrack}>
        <input
          type="text"
          placeholder="Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Carrier"
          value={carrier}
          onChange={(e) => setCarrier(e.target.value)}
          required
        />
        <button type="submit">Track</button>
      </form>
      {trackingInfo && (
        <div>
          <h2>Tracking Info:</h2>
          <pre>{JSON.stringify(trackingInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
