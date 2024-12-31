'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-200 mt-16">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">
        Login
      </h1>
      <form onSubmit={handleLogin}>
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
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-center text-gray-700">
        <Link legacyBehavior href="/auth/forgot-password">
          <a className="text-indigo-600 hover:text-indigo-700">
            Forgot Password?
          </a>
        </Link>
      </p>
    </div>
  );
}
