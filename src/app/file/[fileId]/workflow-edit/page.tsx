'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation
import { useParams } from 'next/navigation'; // Use this for dynamic route parameters

interface File {
  id: string;
  title: string;
  status: string;
}

export default function EditWorkflowPage() {
  const router = useRouter();

  // Ensure the router is ready and query parameters are available
  const [fileId, setFileId] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady && router.query.fileId) {
      setFileId(router.query.fileId as string);
    }
  }, [router.isReady, router.query]);

  const [workflow, setWorkflow] = useState<string[]>([]);
  const [newStep, setNewStep] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!fileId) return; // If fileId is undefined, exit early.

    const fetchWorkflow = async () => {
      try {
        setIsLoading(true);
        // Simulate a faster response or use real data
        const mockWorkflow: string[] = [
          'Department A',
          'Department B',
          'Department C',
        ];
        setWorkflow(mockWorkflow);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load workflow. Please try again.');
        setIsLoading(false);
      }
    };

    fetchWorkflow();
  }, [fileId]); // Depend on fileId instead of router.isReady

  const handleAddStep = () => {
    if (!newStep.trim()) {
      setError('Workflow step cannot be empty.');
      return;
    }
    if (workflow.some((step) => step.toLowerCase() === newStep.toLowerCase())) {
      setError('This step already exists in the workflow.');
      return;
    }
    setWorkflow([...workflow, newStep.trim()]);
    setNewStep('');
    setError('');
  };

  const handleSaveWorkflow = async () => {
    try {
      setIsSaving(true);
      setSuccessMessage('');
      setError('');
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setSuccessMessage('Workflow updated successfully!');
    } catch (err) {
      setError('Failed to save workflow. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleRemoveStep = (index: number) => {
    const updatedWorkflow = workflow.filter((_, i) => i !== index);
    setWorkflow(updatedWorkflow);
  };

  if (!fileId) {
    return (
      <div className="text-center py-10">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-200 mt-12">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
        Edit Workflow
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Modify the workflow for File ID: {fileId}
      </p>

      {/* Error and Success messages */}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-600 text-center mb-4">{successMessage}</p>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center py-8">
          <div className="w-12 h-12 border-4 border-t-4 border-indigo-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* No workflow steps */}
          {workflow.length === 0 && (
            <p className="text-center text-gray-500 mb-6">
              No steps in the workflow. Add a new step to get started!
            </p>
          )}

          {/* Workflow Steps */}
          <ul className="space-y-4">
            {workflow.map((step, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <span className="text-lg text-gray-800">{step}</span>
                <button
                  onClick={() => handleRemoveStep(index)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Add Step */}
          <div className="mt-8 flex items-center space-x-4">
            <input
              type="text"
              value={newStep}
              onChange={(e) => setNewStep(e.target.value)}
              placeholder="Add a new step"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleAddStep}
              disabled={isSaving}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Add Step
            </button>
          </div>

          {/* Save Workflow */}
          <div className="mt-6">
            <button
              onClick={handleSaveWorkflow}
              disabled={isSaving}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isSaving ? 'Saving...' : 'Save Workflow'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
