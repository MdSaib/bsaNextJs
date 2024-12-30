"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/'); // Redirect to the home page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={handleGoBack}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
}
