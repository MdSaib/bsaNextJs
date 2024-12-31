'use client';

import React, { useState } from 'react';

type FileStatus = {
  id: string;
  title: string;
  currentLocation: string;
  completedSteps: string[];
  remainingSteps: string[];
  status: string;
};

export default function FileStatusCheckPage() {
  const [fileId, setFileId] = useState('');
  const [fileStatus, setFileStatus] = useState<FileStatus | null>(null);
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
      const mockFileStatus: FileStatus = {
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

  // Helper function to assign colors based on step status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500'; // Green for completed
      case 'In Progress':
        return 'bg-yellow-400'; // Yellow for in progress
      case 'Pending':
        return 'bg-red-500'; // Red for pending
      default:
        return 'bg-gray-500'; // Default color (gray)
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl rounded-xl mt-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        File Status Check
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Enter the File ID to check its current status and workflow progress.
      </p>
      <form onSubmit={handleCheckStatus} className="space-y-6">
        <div className="mb-4">
          <label
            htmlFor="fileId"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            File ID
          </label>
          <input
            id="fileId"
            type="text"
            value={fileId}
            onChange={(e) => setFileId(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Enter your file ID"
            required
          />
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-300"
        >
          {loading ? 'Checking Status...' : 'Check Status'}
        </button>
      </form>

      {fileStatus && (
        <div className="mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            {fileStatus.title}
          </h2>
          <p className="text-lg text-gray-700">
            <strong>File ID:</strong> {fileStatus.id}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Current Location:</strong> {fileStatus.currentLocation}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Status:</strong> {fileStatus.status}
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Completed Steps
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {fileStatus.completedSteps.map((step, index) => (
                <li key={index} className="flex items-center space-x-3 text-lg">
                  <div
                    className={`${getStatusColor(
                      'Completed',
                    )} w-3 h-3 rounded-full`}
                  ></div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Remaining Steps
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {fileStatus.remainingSteps.map((step, index) => (
                <li key={index} className="flex items-center space-x-3 text-lg">
                  <div
                    className={`${getStatusColor(
                      'Pending',
                    )} w-3 h-3 rounded-full`}
                  ></div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
