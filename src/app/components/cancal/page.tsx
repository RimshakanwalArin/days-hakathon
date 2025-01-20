// pages/cancel.tsx
'use client'
import React from "react";
import { useRouter } from "next/router";

const CancelPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Payment Canceled</h1>
      <p className="mt-4">Your payment has been canceled. Please try again.</p>
      <button
        onClick={() => router.push("/checkout")}
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Try Again
      </button>
    </div>
  );
};

export default CancelPage;
