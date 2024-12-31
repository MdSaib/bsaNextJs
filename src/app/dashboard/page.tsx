'use client';

import React, { useState, useEffect } from 'react';

interface File {
  id: string;
  title: string;
  status: string;
}

export default function OfficerDashboard() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Simulate an API call to fetch files
    const fetchFiles = async () => {
      try {
        setLoading(true);
        // Replace this with actual API call
        const mockFiles: File[] = [
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
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200 mt-12">
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-6">
        Officer Dashboard
      </h1>
      <p className="text-center text-gray-600 mb-8">
        View your assigned files and their current statuses below.
      </p>

      {loading && (
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-t-4 border-indigo-600 rounded-full animate-spin"></div>
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {/* File Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading && !error && files.length > 0 ? (
          files.map((file) => (
            <div
              key={file.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {file.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">File ID: {file.id}</p>
              <div className="mt-4">
                <span
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    file.status === 'Completed'
                      ? 'bg-green-500 text-white'
                      : file.status === 'In Progress'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}
                >
                  {file.status}
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={`/file/${file.id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View
                </a>
                {file.status !== 'Completed' && (
                  <a
                    href={`/file/${file.id}/workflow-edit`}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Edit Workflow
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No files assigned to you at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
