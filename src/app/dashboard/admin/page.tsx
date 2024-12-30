"use client";

import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch analytics data
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        // Replace this with actual API call
        const mockAnalytics = {
          totalFiles: 120,
          filesInProgress: 45,
          completedFiles: 65,
          bottleneckDepartments: ['Department A', 'Department C'],
          averageProcessingTime: '3 days',
        };
        setAnalytics(mockAnalytics);
        setLoading(false);
      } catch (err) {
        setError('Failed to load analytics data. Please try again.');
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Admin Dashboard</h1>
      <p style={{ textAlign: 'center' }}>
        Monitor system performance and file processing statistics below.
      </p>
      {loading && <p>Loading analytics...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && analytics && (
        <div style={{ marginTop: '20px' }}>
          <h2>System Overview</h2>
          <ul>
            <li>Total Files: {analytics.totalFiles}</li>
            <li>Files In Progress: {analytics.filesInProgress}</li>
            <li>Completed Files: {analytics.completedFiles}</li>
            <li>
              Average Processing Time: {analytics.averageProcessingTime}
            </li>
          </ul>
          <h2>Bottleneck Departments</h2>
          <ul>
            {analytics.bottleneckDepartments.map((dept, index) => (
              <li key={index}>{dept}</li>
            ))}
          </ul>
          <div style={{ marginTop: '20px' }}>
            <a
              href="/admin/analytics"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                marginRight: '10px',
              }}
            >
              View Detailed Analytics
            </a>
            <a
              href="/admin/reports"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Export Reports
            </a>
          </div>
        </div>
      )}
      {!loading && !error && !analytics && (
        <p>No analytics data available at the moment.</p>
      )}
    </div>
  );
}
