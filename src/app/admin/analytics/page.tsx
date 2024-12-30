'use client';

import React, { useState, useEffect } from 'react';

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch analytics data
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        // Replace this mock data with an actual API call
        const mockAnalytics = {
          totalFiles: 200,
          filesInProgress: 50,
          completedFiles: 150,
          averageProcessingTime: '3 days',
          bottlenecks: ['Department A', 'Department B'],
        };
        setAnalytics(mockAnalytics);
        setLoading(false);
      } catch (err) {
        setError('Failed to load analytics. Please try again.');
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Analytics Dashboard</h1>
      <p style={{ textAlign: 'center' }}>
        View detailed statistics about the system's performance and file
        processing.
      </p>
      {loading && <p>Loading analytics...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && analytics && (
        <div style={{ marginTop: '20px' }}>
          <h2>Overview</h2>
          <ul>
            <li>
              <strong>Total Files:</strong> {analytics.totalFiles}
            </li>
            <li>
              <strong>Files In Progress:</strong> {analytics.filesInProgress}
            </li>
            <li>
              <strong>Completed Files:</strong> {analytics.completedFiles}
            </li>
            <li>
              <strong>Average Processing Time:</strong>{' '}
              {analytics.averageProcessingTime}
            </li>
          </ul>
          <h3>Bottleneck Departments</h3>
          <ul>
            {analytics.bottlenecks.map((department, index) => (
              <li key={index}>{department}</li>
            ))}
          </ul>
        </div>
      )}
      {!loading && !error && !analytics && (
        <p>No analytics data available at the moment.</p>
      )}
    </div>
  );
}
