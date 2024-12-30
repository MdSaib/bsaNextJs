'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function AddUserPage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null); // Store the ID in state
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('Officer');
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  useEffect(() => {
    if (router.query?.id) {
      setUserId(router.query.id as string); // Set user ID when available
    }
  }, [router.query]);

  useEffect(() => {
    // If an ID is present, simulate fetching the user details for editing
    if (userId) {
      const fetchUserDetails = async () => {
        try {
          // Simulate API call with mock data
          const mockUser: User = {
            id: userId,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Officer',
          };
          setName(mockUser.name);
          setEmail(mockUser.email);
          setRole(mockUser.role);
        } catch (err) {
          setError('Failed to load user details.');
        }
      };

      fetchUserDetails();
    }
  }, [userId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !role) {
      setError('All fields are required.');
      return;
    }

    try {
      // Simulate API call to add or update a user
      if (userId) {
        console.log('Updating user:', { id: userId, name, email, role });
        setSuccessMessage('User updated successfully!');
      } else {
        console.log('Creating user:', { name, email, role });
        setSuccessMessage('User created successfully!');
      }

      setError('');
      // Reset the form if creating a new user
      if (!userId) {
        setName('');
        setEmail('');
        setRole('Officer');
      }
    } catch (err) {
      setError('Failed to save user. Please try again.');
    }
  };

  // Check if userId or router.query.id is available before rendering
  if (router.isReady && !userId && !router.query?.id) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        <h1 className="text-2xl font-bold text-center mb-6">Add User</h1>
        <p>Loading user details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        {userId ? 'Edit User' : 'Add User'}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 border border-gray-300 text-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Officer">Officer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        {successMessage && (
          <p className="text-green-600 text-sm mb-4">{successMessage}</p>
        )}

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
        >
          {userId ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>
  );
}
