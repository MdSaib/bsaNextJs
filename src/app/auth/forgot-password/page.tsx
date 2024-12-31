'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleForgotPassword = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setError('Email is required.');
      return;
    }

    // Simulate a successful password reset request
    setSuccessMessage(`A password reset link has been sent to ${email}.`);
    setError('');
    setEmail('');
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-200 mt-16">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">
        Forgot Password
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Enter your email to receive a password reset link.
      </p>
      <form onSubmit={handleForgotPassword}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
        {successMessage && (
          <p className="text-sm text-green-500 mb-4">{successMessage}</p>
        )}
        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      <p className="mt-6 text-center text-gray-700">
        <Link legacyBehavior href="/auth/login">
          <a className="text-indigo-600 hover:text-indigo-700">Back to Login</a>
        </Link>
      </p>
    </div>
  );
}
