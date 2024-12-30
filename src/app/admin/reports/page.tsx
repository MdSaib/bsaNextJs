'use client';

import React, { useState } from 'react';

interface DateRange {
  start: string;
  end: string;
}

export default function ExportReportsPage() {
  const [reportType, setReportType] = useState<string>('');
  const [dateRange, setDateRange] = useState<DateRange>({ start: '', end: '' });
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Export Reports
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Select the report type and date range to export system reports.
        </p>
        <form onSubmit={handleExport}>
          <div className="mb-6">
            <label
              htmlFor="reportType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Report Type
            </label>
            <select
              id="reportType"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Report Type</option>
              <option value="File Processing">File Processing</option>
              <option value="User Activity">User Activity</option>
              <option value="System Performance">System Performance</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          {successMessage && (
            <p className="text-green-600 text-sm mb-4">{successMessage}</p>
          )}
          {loading && (
            <p className="text-blue-600 text-sm mb-4">Exporting report...</p>
          )}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          >
            Export Report
          </button>
        </form>
      </div>
    </div>
  );
}
