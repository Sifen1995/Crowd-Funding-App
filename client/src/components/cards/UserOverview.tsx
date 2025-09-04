import React from 'react';

// Define the type for a single notification object
interface Notification {
  message: string;
  date: string;
}

// Define the props interface for the UserOverview component
interface UserOverviewProps {
  userName: string;
  notifications: Notification[];
}

const UserOverview: React.FC<UserOverviewProps> = ({ userName, notifications }) => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Message Widget */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Welcome back, <span className="text-[#6A5A82]">{userName}</span>!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Here's a quick overview of what's happening.
          </p>
        </div>

        {/* Notifications/Alerts Widget */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Notifications</h2>
          {notifications.length > 0 ? (
            <ul className="space-y-4">
              {notifications.map((alert, index) => (
                <li key={index} className="flex items-start p-4 bg-gray-50 rounded-md">
                  <div className="mr-3">
                    {/* Placeholder for an icon */}
                    <svg className="h-6 w-6 text-[#6A5A82]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>You have no new notifications.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserOverview;