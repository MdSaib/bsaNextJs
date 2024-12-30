'use client';

import React, { useState, useEffect } from 'react';

export default function OfficerDashboard() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch files
    const fetchFiles = async () => {
      try {
        setLoading(true);
        // Replace this with actual API call
        const mockFiles = [
          { id: '123', title: 'Policy Draft', status: 'In Progress' },
          { id: '456', title: 'Annual Report', status: 'Pending' },
          { id: '789', title: 'Budget Proposal', status: 'Completed' },
        ];
        setFiles(mockFiles);
        setLoading(false);
      } catch (err) {
        setError('Failed to load files. Please try again.');
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Officer Dashboard</h1>
      <p style={{ textAlign: 'center' }}>
        View your assigned files and their current statuses below.
      </p>
      {loading && <p>Loading files...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && files.length > 0 && (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>
                File ID
              </th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>
                Title
              </th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>
                Status
              </th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {file.id}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {file.title}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {file.status}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  <a
                    href={`/file/${file.id}`}
                    style={{
                      color: '#0070f3',
                      textDecoration: 'none',
                      marginRight: '10px',
                    }}
                  >
                    View
                  </a>
                  {file.status !== 'Completed' && (
                    <a
                      href={`/file/${file.id}/workflow-edit`}
                      style={{ color: '#0070f3', textDecoration: 'none' }}
                    >
                      Edit Workflow
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!loading && !error && files.length === 0 && (
        <p>No files assigned to you at the moment.</p>
      )}
    </div>
  );
}
