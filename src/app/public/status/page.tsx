'use client';

import React, { useState } from 'react';

export default function FileStatusCheckPage() {
  const [fileId, setFileId] = useState('');
  const [fileStatus, setFileStatus] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckStatus = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!fileId) {
      setError('File ID is required.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      // Simulate an API call to fetch file status
      const mockFileStatus = {
        id: fileId,
        title: 'Policy Draft',
        currentLocation: 'Department B',
        completedSteps: ['Department A'],
        remainingSteps: ['Department C', 'Signatory'],
        status: 'In Progress',
      };
      setFileStatus(mockFileStatus);
    } catch (err) {
      setError('Failed to fetch file status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>File Status Check</h1>
      <p style={{ textAlign: 'center' }}>
        Enter the File ID to check its current status and workflow progress.
      </p>
      <form onSubmit={handleCheckStatus} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="fileId"
            style={{ display: 'block', marginBottom: '5px' }}
          >
            File ID
          </label>
          <input
            id="fileId"
            type="text"
            value={fileId}
            onChange={(e) => setFileId(e.target.value)}
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
          Check Status
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {fileStatus && (
        <div style={{ marginTop: '20px' }}>
          <h2>{fileStatus.title}</h2>
          <p>
            <strong>File ID:</strong> {fileStatus.id}
          </p>
          <p>
            <strong>Current Location:</strong> {fileStatus.currentLocation}
          </p>
          <p>
            <strong>Status:</strong> {fileStatus.status}
          </p>
          <h3>Completed Steps</h3>
          <ul>
            {fileStatus.completedSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <h3>Remaining Steps</h3>
          <ul>
            {fileStatus.remainingSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
