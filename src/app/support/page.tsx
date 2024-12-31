'use client';

import React, { useState } from 'react';

export default function SupportPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    try {
      // Simulate an API call to submit the support request
      console.log('Submitting support request:', { name, email, message });
      setSuccessMessage(
        'Your support request has been submitted successfully!',
      );
      setError('');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to submit support request. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Support
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Need help? Fill out the form below, and our team will get back to you
        shortly.
      </p>

      {successMessage && (
        <p className="text-green-600 text-center mb-6">{successMessage}</p>
      )}
      {error && <p className="text-red-600 text-center mb-6">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 h-32 resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-sm text-gray-500">
        You can also reach us at{' '}
        <a
          href="mailto:support@example.com"
          className="text-blue-600 hover:text-blue-800"
        >
          support@example.com
        </a>
        .
      </p>
    </div>
  );
}
