"use client";

import React, { useState } from 'react';

export default function SystemSettingsPage() {
  const [settings, setSettings] = useState({
    retentionPolicy: '30 days',
    notificationPreference: 'Email',
    encryptionEnabled: true,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (key: string, value: any) => {
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
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>System Settings</h1>
      <p style={{ textAlign: 'center' }}>Manage global system preferences and policies.</p>
      {successMessage && <p style={{ color: 'green', marginBottom: '15px' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="retentionPolicy" style={{ display: 'block', marginBottom: '5px' }}>File Retention Policy</label>
        <select
          id="retentionPolicy"
          value={settings.retentionPolicy}
          onChange={(e) => handleInputChange('retentionPolicy', e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="30 days">30 days</option>
          <option value="60 days">60 days</option>
          <option value="90 days">90 days</option>
        </select>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="notificationPreference" style={{ display: 'block', marginBottom: '5px' }}>Notification Preference</label>
        <select
          id="notificationPreference"
          value={settings.notificationPreference}
          onChange={(e) => handleInputChange('notificationPreference', e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
          <option value="In-App">In-App</option>
        </select>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="encryptionEnabled" style={{ display: 'block', marginBottom: '5px' }}>Enable Encryption</label>
        <input
          id="encryptionEnabled"
          type="checkbox"
          checked={settings.encryptionEnabled}
          onChange={(e) => handleInputChange('encryptionEnabled', e.target.checked)}
        />
      </div>
      <button
        onClick={handleSaveSettings}
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
        Save Settings
      </button>
    </div>
  );
}
