'use client';

import React, { useState } from 'react';

export default function ProfileSettingsPage() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (key: string, value: any) => {
    setProfile((prevProfile) => ({ ...prevProfile, [key]: value }));
  };

  const handleSaveProfile = async () => {
    if (!profile.name || !profile.email) {
      setError('Name and email are required.');
      return;
    }

    try {
      // Simulate an API call to save the profile settings
      console.log('Saving profile:', profile);
      setSuccessMessage('Profile updated successfully!');
      setError('');
      setProfile((prevProfile) => ({ ...prevProfile, password: '' })); // Clear the password field after save
    } catch (err) {
      setError('Failed to save profile. Please try again.');
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
      <h1 style={{ textAlign: 'center' }}>Profile Settings</h1>
      <p style={{ textAlign: 'center' }}>
        Manage your personal profile settings.
      </p>
      {successMessage && (
        <p style={{ color: 'green', marginBottom: '15px' }}>{successMessage}</p>
      )}
      {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
          Name
        </label>
        <input
          id="name"
          type="text"
          value={profile.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
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
          value={profile.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
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
          htmlFor="password"
          style={{ display: 'block', marginBottom: '5px' }}
        >
          Password (Leave blank to keep current password)
        </label>
        <input
          id="password"
          type="password"
          value={profile.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>
      <button
        onClick={handleSaveProfile}
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
        Save Profile
      </button>
    </div>
  );
}
