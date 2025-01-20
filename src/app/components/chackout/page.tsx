import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Define the Stripe error interface for proper type checking
interface StripeError {
  message: string;
  type: string;
  param?: string;
}

const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your Stripe publishable key

const CheckoutPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Example order details (replace with dynamic data)
  const order = {
    items: [
      { name: 'Product 1', price: 2000, quantity: 1 },
      { name: 'Product 2', price: 5000, quantity: 1 },
    ],
    total: 7000,
  };

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.post('/api/checkout', {
        amount: order.total,
        items: order.items,
      });

      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Stripe could not be loaded');
      }

      // Define the result from the redirectToCheckout method
      const { error }: { error?: StripeError } = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      // Check if error is defined
      if (error) {
        console.error('Stripe Checkout Error:', error.message); // Log the error message
      }
    } catch (error) {
      console.error('Error in checkout process:', error);
    }

    setIsLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div>
        <h2 className="text-2xl mb-4">Order Summary</h2>
        <ul className="mb-6">
          {order.items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item.name} (x{item.quantity}) - ${item.price * item.quantity / 100}
            </li>
          ))}
        </ul>
        <div className="font-semibold">Total: ${order.total / 100}</div>
      </div>

      <button
        onClick={handleCheckout}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Proceed to Payment'}
      </button>
    </div>
  );
};

export default CheckoutPage;
