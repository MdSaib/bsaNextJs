'use client';

import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  totalFiles: number;
  filesInProgress: number;
  completedFiles: number;
  averageProcessingTime: string;
  bottlenecks: string[];
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Simulate an API call to fetch analytics data
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        // Replace this mock data with an actual API call
        const mockAnalytics: AnalyticsData = {
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
    <div className="max-w-7xl mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Analytics Dashboard
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          View detailed statistics about the system's performance and file
          processing.
        </p>

        {loading && (
          <div className="text-center text-gray-500">
            <div className="spinner-border animate-spin border-t-transparent border-4 rounded-full w-12 h-12 mx-auto mb-4"></div>
            <p>Loading analytics...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-red-600 bg-red-100 border border-red-200 p-4 rounded-md mb-4">
            {error}
          </div>
        )}

        {!loading && !error && analytics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Overview Card */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <ul className="space-y-4 text-lg">
                <li>
                  <strong>Total Files:</strong> {analytics.totalFiles}
                </li>
                <li>
                  <strong>Files In Progress:</strong>{' '}
                  {analytics.filesInProgress}
                </li>
                <li>
                  <strong>Completed Files:</strong> {analytics.completedFiles}
                </li>
                <li>
                  <strong>Average Processing Time:</strong>{' '}
                  {analytics.averageProcessingTime}
                </li>
              </ul>
            </div>

            {/* Bottleneck Card */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Bottleneck Departments
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                {analytics.bottlenecks.map((department, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="text-lg text-blue-600 font-medium">
                      {department}
                    </span>
                    <span className="text-xs text-gray-500">
                      - Delay detected
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Statistics Card */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Performance Trends
              </h3>
              <div className="text-gray-600">
                {/* Placeholder for future charts or performance graphs */}
                <p className="text-lg">Trend analysis to be added here</p>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && !analytics && (
          <p className="text-center text-gray-600 mt-8">
            No analytics data available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
