'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/'); // Redirect to the home page
  };

  return (
    <div className="flex flex-col justify-center items-center mt-12 px-6 py-8 max-w-2xl mx-auto">
      <h1 className="text-6xl font-bold text-blue-600 mb-6">404</h1>
      <p className="text-xl text-gray-700 mb-6 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoBack}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
