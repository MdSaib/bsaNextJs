'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface FileDetails {
  id: string;
  title: string;
  description: string;
  status: string;
  workflow: string[];
  currentStep: string;
}

export default function FileDetailsPage() {
  const { fileId } = useParams(); // Get dynamic route params
  const [fileDetails, setFileDetails] = useState<FileDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!fileId) return;

    const fetchFileDetails = async () => {
      try {
        setLoading(true);
        // Simulating an API call
        const mockFileDetails: FileDetails = {
          id: fileId,
          title: 'Policy Draft',
          description:
            'This is a detailed draft for the new policy implementation.',
          status: 'In Progress',
          workflow: ['Department A', 'Department B', 'Department C'],
          currentStep: 'Department B',
        };
        setFileDetails(mockFileDetails);
        setLoading(false);
      } catch (err) {
        setError('Failed to load file details. Please try again.');
        setLoading(false);
      }
    };

    fetchFileDetails();
  }, [fileId]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 sm:px-8 lg:px-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          File Details
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          View detailed information about your file's current status and
          workflow.
        </p>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="w-16 h-16 border-4 border-t-4 border-indigo-600 rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg shadow-md mb-6">
          <p className="text-center text-lg">{error}</p>
        </div>
      )}

      {!loading && !error && fileDetails && (
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {fileDetails.title}
            </h2>
            <p className="text-lg text-gray-500 mt-2">
              {fileDetails.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-gray-500">
                Status:
              </span>
              <span
                className={`text-base font-semibold ${
                  fileDetails.status === 'In Progress'
                    ? 'text-yellow-600'
                    : 'text-green-600'
                }`}
              >
                {fileDetails.status}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-gray-500">
                Current Step:
              </span>
              <span className="text-base font-semibold text-indigo-600">
                {fileDetails.currentStep}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Workflow
            </h3>
            <ol className="list-decimal pl-5 space-y-2 mt-4">
              {fileDetails.workflow.map((step, index) => (
                <li
                  key={index}
                  className={`text-lg ${
                    step === fileDetails.currentStep
                      ? 'text-indigo-600 font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={`/file/${fileId}/workflow-edit`}
              className="inline-block px-8 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Edit Workflow
            </a>
          </div>
        </div>
      )}

      {!loading && !error && !fileDetails && (
        <p className="text-center text-gray-500 text-lg mt-6">
          No details available for this file.
        </p>
      )}
    </div>
  );
}
