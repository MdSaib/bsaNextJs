"use client";

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
      setSuccessMessage('Your support request has been submitted successfully!');
      setError('');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to submit support request. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Support</h1>
      <p style={{ textAlign: 'center' }}>Need help? Fill out the form below, and our team will get back to you shortly.</p>
      {successMessage && <p style={{ color: 'green', marginBottom: '15px' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', height: '100px' }}
            required
          />
        </div>
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
      <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px', color: '#555' }}>
        You can also reach us at <a href="mailto:support@example.com" style={{ color: '#0070f3', textDecoration: 'none' }}>support@example.com</a>.
      </p>
    </div>
  );
}
