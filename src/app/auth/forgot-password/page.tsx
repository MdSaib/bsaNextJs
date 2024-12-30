'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function ForgotPasswordPage() {
  // Default export here
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setError('Email is required.');
      return;
    }

    // Simulate a successful password reset request
    setSuccessMessage(`A password reset link has been sent to ${email}.`);
    setError(''); // Clear previous errors
    setEmail(''); // Reset the email input field
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Forgot Password</h1>
      <p style={{ textAlign: 'center' }}>
        Enter your email to receive a password reset link.
      </p>
      <form onSubmit={handleForgotPassword}>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="email"
            style={{ display: 'block', marginBottom: '5px' }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
        {successMessage && (
          <p style={{ color: 'green', marginBottom: '15px' }}>
            {successMessage}
          </p>
        )}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link legacyBehavior href="/auth/login">
          <a style={{ color: '#0070f3', textDecoration: 'none' }}>
            Back to Login
          </a>
        </Link>
      </p>
    </div>
  );
}
