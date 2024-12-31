'use client';

import React, { useState } from 'react';

type Settings = {
  retentionPolicy: string;
  notificationPreference: string;
  encryptionEnabled: boolean;
};

export default function SystemSettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    retentionPolicy: '30 days',
    notificationPreference: 'Email',
    encryptionEnabled: true,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (key: keyof Settings, value: any) => {
    setSettings((prevSettings) => ({ ...prevSettings, [key]: value }));
  };

  const handleSaveSettings = async () => {
    try {
      // Simulate an API call to save the system settings
      console.log('Saving settings:', settings);
      setSuccessMessage('Settings saved successfully!');
      setError('');
    } catch (err) {
      setError('Failed to save settings. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-8 py-10 bg-white shadow-xl rounded-2xl mt-16">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        System Settings
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Manage global system preferences and policies.
      </p>

      {successMessage && (
        <p className="text-green-600 text-center mb-8 font-medium transition-opacity duration-300 opacity-100">
          {successMessage}
        </p>
      )}
      {error && (
        <p className="text-red-600 text-center mb-8 font-medium transition-opacity duration-300 opacity-100">
          {error}
        </p>
      )}

      <div className="space-y-10">
        {/* File Retention Policy */}
        <div>
          <label
            htmlFor="retentionPolicy"
            className="block text-xl font-medium text-gray-700 mb-3"
          >
            File Retention Policy
          </label>
          <select
            id="retentionPolicy"
            value={settings.retentionPolicy}
            onChange={(e) =>
              handleInputChange('retentionPolicy', e.target.value)
            }
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          >
            <option value="30 days">30 days</option>
            <option value="60 days">60 days</option>
            <option value="90 days">90 days</option>
          </select>
        </div>

        {/* Notification Preference */}
        <div>
          <label
            htmlFor="notificationPreference"
            className="block text-xl font-medium text-gray-700 mb-3"
          >
            Notification Preference
          </label>
          <select
            id="notificationPreference"
            value={settings.notificationPreference}
            onChange={(e) =>
              handleInputChange('notificationPreference', e.target.value)
            }
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          >
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
            <option value="In-App">In-App</option>
          </select>
        </div>

        {/* Enable Encryption */}
        <div>
          <label
            htmlFor="encryptionEnabled"
            className="block text-xl font-medium text-gray-700 mb-3"
          >
            Enable Encryption
          </label>
          <input
            id="encryptionEnabled"
            type="checkbox"
            checked={settings.encryptionEnabled}
            onChange={(e) =>
              handleInputChange('encryptionEnabled', e.target.checked)
            }
            className="w-8 h-8 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Save Button */}
        <div className="mt-10">
          <button
            onClick={handleSaveSettings}
            className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 ease-in-out"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
