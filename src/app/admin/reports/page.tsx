'use client';

import React, { useState } from 'react';

export default function ExportReportsPage() {
  const [reportType, setReportType] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExport = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!reportType || !dateRange.start || !dateRange.end) {
      setError('All fields are required.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccessMessage('');

      // Simulate an API call to export the report
      console.log('Exporting report:', { reportType, dateRange });
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
      setSuccessMessage(`Report "${reportType}" successfully exported.`);
    } catch (err) {
      setError('Failed to export report. Please try again.');
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
      <h1 style={{ textAlign: 'center' }}>Export Reports</h1>
      <p style={{ textAlign: 'center' }}>
        Select the report type and date range to export system reports.
      </p>
      <form onSubmit={handleExport}>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="reportType"
            style={{ display: 'block', marginBottom: '5px' }}
          >
            Report Type
          </label>
          <select
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          >
            <option value="">Select Report Type</option>
            <option value="File Processing">File Processing</option>
            <option value="User Activity">User Activity</option>
            <option value="System Performance">System Performance</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="startDate"
            style={{ display: 'block', marginBottom: '5px' }}
          >
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            value={dateRange.start}
            onChange={(e) =>
              setDateRange({ ...dateRange, start: e.target.value })
            }
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="endDate"
            style={{ display: 'block', marginBottom: '5px' }}
          >
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            value={dateRange.end}
            onChange={(e) =>
              setDateRange({ ...dateRange, end: e.target.value })
            }
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
        {loading && (
          <p style={{ color: 'blue', marginBottom: '15px' }}>
            Exporting report...
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
          Export Report
        </button>
      </form>
    </div>
  );
}
