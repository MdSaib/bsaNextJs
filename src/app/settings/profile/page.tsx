'use client';

import React, { useState } from 'react';

type Profile = {
  name: string;
  email: string;
  password: string;
};

export default function ProfileSettingsPage() {
  const [profile, setProfile] = useState<Profile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (key: keyof Profile, value: string) => {
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
    <div className="max-w-4xl mx-auto px-8 py-10 bg-white shadow-lg rounded-xl mt-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Profile Settings
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Manage your personal profile settings and update your information.
      </p>

      {successMessage && (
        <p className="text-green-600 text-center mb-6 font-medium">
          {successMessage}
        </p>
      )}
      {error && (
        <p className="text-red-600 text-center mb-6 font-medium">{error}</p>
      )}

      <div className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block text-xl font-semibold text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={profile.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xl font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xl font-semibold text-gray-700 mb-2"
          >
            Password (Leave blank to keep current password)
          </label>
          <input
            id="password"
            type="password"
            value={profile.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your new password"
          />
        </div>

        <div className="mt-8">
          <button
            onClick={handleSaveProfile}
            className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 ease-in-out"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}
