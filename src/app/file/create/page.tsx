'use client';

import React, { useState } from 'react';

export default function CreateFilePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [workflow, setWorkflow] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate form inputs
    if (!title || !description || !workflow) {
      setError('All fields are required.');
      return;
    }

    // Simulate API call to create file
    try {
      console.log('Creating file:', { title, description, workflow });
      setSuccessMessage('File created successfully!');
      setError('');
      setTitle('');
      setDescription('');
      setWorkflow('');
    } catch (err) {
      setError('Failed to create file. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-xl border border-gray-300 mt-12">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Create New File
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              rows={4}
              required
            />
          </div>

          {/* Workflow Field */}
          <div>
            <label
              htmlFor="workflow"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Workflow (Departments/Officers)
            </label>
            <input
              id="workflow"
              type="text"
              value={workflow}
              onChange={(e) => setWorkflow(e.target.value)}
              placeholder="Enter departments separated by commas (e.g., Dept1, Dept2)"
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          {/* Error and Success Messages */}
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {successMessage && (
            <p className="text-green-600 text-sm">{successMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold text-lg rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create File
          </button>
        </div>
      </form>
    </div>
  );
}
