"use client";

import React, { useState } from 'react';

export default function CreateFilePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [workflow, setWorkflow] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate form inputs
    if (!title || !description || !workflow) {
      setError('All fields are required.');
      return;
    }

    // Simulate API call to create file
    try {
      console.log('Creating file:', { title, description, workflow });
      setSuccessMessage('File created successfully!');
      setError('');
      setTitle('');
      setDescription('');
      setWorkflow('');
    } catch (err) {
      setError('Failed to create file. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Create New File</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', height: '100px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="workflow" style={{ display: 'block', marginBottom: '5px' }}>Workflow (Departments/Officers)</label>
          <input
            id="workflow"
            type="text"
            value={workflow}
            onChange={(e) => setWorkflow(e.target.value)}
            placeholder="Enter departments separated by commas (e.g., Dept1, Dept2)"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green', marginBottom: '15px' }}>{successMessage}</p>}
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
          Create File
        </button>
      </form>
    </div>
  );
}
