'use client';

import React, { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  role: string;
  email: string;
}

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Simulating an API call to fetch user data
        const mockUsers: User[] = [
          {
            id: '1',
            name: 'John Doe',
            role: 'Officer',
            email: 'john@example.com',
          },
          {
            id: '2',
            name: 'Jane Smith',
            role: 'Admin',
            email: 'jane@example.com',
          },
          {
            id: '3',
            name: 'Alice Johnson',
            role: 'Officer',
            email: 'alice@example.com',
          },
        ];
        setUsers(mockUsers);
        setLoading(false);
      } catch (err) {
        setError('Failed to load users. Please try again.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          User Management
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          View and manage users in the system.
        </p>

        {loading && (
          <p className="text-center text-blue-600">Loading users...</p>
        )}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && !error && users.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-300">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-300">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-300">
                    Role
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-300">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">
                      {user.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">
                      {user.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">
                      {user.role}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">
                      {user.email}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">
                      <a
                        href={`/admin/edit-user?id=${user.id}`}
                        className="text-indigo-600 hover:text-indigo-800 mr-4"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => alert(`Delete user ${user.name}`)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <p className="text-center text-gray-600">
            No users found in the system.
          </p>
        )}
      </div>
    </div>
  );
}
