'use client';

import React, { useState, useEffect } from 'react';

type Notification = {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
  timestamp: string;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch notifications
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        // Replace this mock data with an actual API call
        const mockNotifications: Notification[] = [
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
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-xl border border-gray-300 mt-12">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        Notifications
      </h1>
      <p className="text-center text-gray-600 mb-8">
        View the latest system notifications and alerts below.
      </p>

      {loading && (
        <p className="text-center text-gray-500">Loading notifications...</p>
      )}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && notifications.length > 0 && (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`p-4 rounded-lg border-l-4 ${
                notification.type === 'success'
                  ? 'border-green-500 bg-green-100'
                  : notification.type === 'info'
                  ? 'border-blue-500 bg-blue-100'
                  : 'border-red-500 bg-red-100'
              }`}
            >
              <p className="font-semibold text-gray-800">
                {notification.message}
              </p>
              <small className="text-gray-500">{notification.timestamp}</small>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && notifications.length === 0 && (
        <p className="text-center text-gray-500">
          No notifications available at the moment.
        </p>
      )}
    </div>
  );
}
