'use client';

import React, { useState, useEffect } from 'react';

export default function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch user data
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Replace this mock data with an actual API call
        const mockUsers = [
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
    <div
      style={{
        maxWidth: '800px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>User Management</h1>
      <p style={{ textAlign: 'center' }}>
        View and manage users in the system.
      </p>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && users.length > 0 && (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>ID</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>
                Name
              </th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>
                Role
              </th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>
                Email
              </th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {user.id}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {user.name}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {user.role}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {user.email}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  <a
                    href={`/admin/add-user?id=${user.id}`}
                    style={{
                      color: '#0070f3',
                      textDecoration: 'none',
                      marginRight: '10px',
                    }}
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => alert(`Delete user ${user.name}`)}
                    style={{
                      color: 'white',
                      background: 'red',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '5px 10px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!loading && !error && users.length === 0 && (
        <p>No users found in the system.</p>
      )}
    </div>
  );
}
