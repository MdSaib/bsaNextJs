'use client';

import React, { useState, useEffect } from 'react';

interface Analytics {
  totalFiles: number;
  filesInProgress: number;
  completedFiles: number;
  bottleneckDepartments: string[];
  averageProcessingTime: string;
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

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
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200 mt-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
        Admin Dashboard
      </h1>
      <p className="text-center text-xl text-gray-600 mb-10">
        Stay on top of system performance and file processing efficiency.
      </p>

      {loading && (
        <div className="text-center text-gray-500">
          <p>Loading analytics...</p>
          <div className="mt-4 animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 border-solid"></div>
        </div>
      )}

      {error && <p className="text-center text-red-600 text-lg">{error}</p>}

      {!loading && !error && analytics && (
        <div>
          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              System Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">
                  Total Files
                </h3>
                <p className="text-3xl font-bold text-indigo-600">
                  {analytics.totalFiles}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">
                  Files In Progress
                </h3>
                <p className="text-3xl font-bold text-indigo-600">
                  {analytics.filesInProgress}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">
                  Completed Files
                </h3>
                <p className="text-3xl font-bold text-green-600">
                  {analytics.completedFiles}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">
                  Average Processing Time
                </h3>
                <p className="text-3xl font-bold text-gray-700">
                  {analytics.averageProcessingTime}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Bottleneck Departments
            </h2>
            <ul className="list-none space-y-4 text-lg text-gray-700">
              {analytics.bottleneckDepartments.map((dept, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-red-600">🔴</span>
                  <span>{dept}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 flex justify-center gap-6 flex-wrap">
            <a
              href="/admin/analytics"
              className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out w-full sm:w-auto text-center"
            >
              View Detailed Analytics
            </a>
            <a
              href="/admin/reports"
              className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out w-full sm:w-auto text-center"
            >
              Export Reports
            </a>
          </section>
        </div>
      )}

      {!loading && !error && !analytics && (
        <p className="text-center text-gray-500 text-lg">
          No analytics data available at the moment.
        </p>
      )}
    </div>
  );
}
