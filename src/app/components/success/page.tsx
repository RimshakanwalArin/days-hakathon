// pages/success.tsx
'use client'
import React from "react";
import { useRouter } from "next/router";

const SuccessPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Payment Successful!</h1>
      <p className="mt-4">Thank you for your purchase. Your payment has been processed successfully.</p>
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default SuccessPage;
