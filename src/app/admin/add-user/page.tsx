export default function AddUserPage() {
  return (
    <div>
      <h1>Add/Edit User</h1>
      <p>Use this page to add a new user or edit an existing user account.</p>
    </div>
  );
}
('use client');

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AddUserPage() {
  const router = useRouter();
  const { id } = router.query; // Retrieve the user ID if it's an edit action

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Officer');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // If an ID is present, simulate fetching the user details for editing
    if (id) {
      const fetchUserDetails = async () => {
        try {
          // Simulate API call with mock data
          const mockUser = {
            id,
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
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !role) {
      setError('All fields are required.');
      return;
    }

    try {
      // Simulate API call to add or update a user
      if (id) {
        console.log('Updating user:', { id, name, email, role });
        setSuccessMessage('User updated successfully!');
      } else {
        console.log('Creating user:', { name, email, role });
        setSuccessMessage('User created successfully!');
      }

      setError('');
      // Reset the form if creating a new user
      if (!id) {
        setName('');
        setEmail('');
        setRole('Officer');
      }
    } catch (err) {
      setError('Failed to save user. Please try again.');
    }
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>{id ? 'Edit User' : 'Add User'}</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="name"
            style={{ display: 'block', marginBottom: '5px' }}
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="email"
            style={{ display: 'block', marginBottom: '5px' }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="role"
            style={{ display: 'block', marginBottom: '5px' }}
          >
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="Officer">Officer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
        {successMessage && (
          <p style={{ color: 'green', marginBottom: '15px' }}>
            {successMessage}
          </p>
        )}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {id ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>
  );
}
