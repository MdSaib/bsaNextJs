'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function InternalServerErrorPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/'); // Redirect to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-6">500</h1>
      <p className="text-xl mb-6 text-gray-800">
        Something went wrong on our end. Please try again later.
      </p>
      <button
        onClick={handleGoBack}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
}
