'use client';

import React, { useState, useEffect } from 'react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch notifications
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        // Replace this mock data with an actual API call
        const mockNotifications = [
          {
            id: '1',
            message: 'File 123 has been approved.',
            type: 'success',
            timestamp: '2024-01-01 10:00 AM',
          },
          {
            id: '2',
            message: 'File 456 is pending review.',
            type: 'info',
            timestamp: '2024-01-02 02:00 PM',
          },
          {
            id: '3',
            message: 'Workflow step failed for File 789.',
            type: 'error',
            timestamp: '2024-01-03 05:00 PM',
          },
        ];
        setNotifications(mockNotifications);
        setLoading(false);
      } catch (err) {
        setError('Failed to load notifications. Please try again.');
        setLoading(false);
      }
    };

    fetchNotifications();
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
      <h1 style={{ textAlign: 'center' }}>Notifications</h1>
      <p style={{ textAlign: 'center' }}>
        View the latest system notifications and alerts below.
      </p>
      {loading && <p>Loading notifications...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && notifications.length > 0 && (
        <ul style={{ listStyle: 'none', padding: '0', marginTop: '20px' }}>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              style={{
                marginBottom: '15px',
                padding: '10px',
                borderRadius: '5px',
                border: `1px solid ${
                  notification.type === 'success'
                    ? 'green'
                    : notification.type === 'info'
                    ? 'blue'
                    : 'red'
                }`,
                backgroundColor:
                  notification.type === 'success'
                    ? '#e6ffe6'
                    : notification.type === 'info'
                    ? '#e6f7ff'
                    : '#ffe6e6',
              }}
            >
              <p style={{ margin: '0', fontWeight: 'bold' }}>
                {notification.message}
              </p>
              <small style={{ color: '#555' }}>{notification.timestamp}</small>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && notifications.length === 0 && (
        <p>No notifications available at the moment.</p>
      )}
    </div>
  );
}
