import { FaBell, FaTrash, FaCheck, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: "New Subscription Request",
      message: 'Employee EMP123 requested VPN access for Engineering team',
      time: '2 mins ago',
      type: 'info',
      read: false,
      action: {
        label: 'Review',
        url: '/dashboard/requests'
      }
    },
    {
      id: 2,
      title: "Profile Update",
      message: 'John Doe updated their contact information',
      time: '1 hour ago',
      type: 'success',
      read: true,
      action: {
        label: 'View',
        url: '/dashboard/users/EMP123'
      }
    },
    {
      id: 3,
      title: "Maintenance Scheduled",
      message: 'Server downtime scheduled for 3AM tomorrow (15 min expected)',
      time: 'Yesterday',
      type: 'warning',
      read: false,
      action: {
        label: 'Details',
        url: '/dashboard/maintenance'
      }
    },
    {
      id: 4,
      title: "Payment Received",
      message: 'Invoice #INV-2025-001 has been paid',
      time: '2 days ago',
      type: 'success',
      read: true,
      action: {
        label: 'Receipt',
        url: '/dashboard/bills/INV-2025-001'
      }
    }
  ];

  const typeStyles = {
    info: {
      icon: <FaInfoCircle className="text-blue-500" />,
      bg: 'bg-blue-50',
      border: 'border-l-blue-500',
      text: 'text-blue-800'
    },
    success: {
      icon: <FaCheck className="text-green-500" />,
      bg: 'bg-green-50',
      border: 'border-l-green-500',
      text: 'text-green-800'
    },
    warning: {
      icon: <FaExclamationTriangle className="text-yellow-500" />,
      bg: 'bg-yellow-50',
      border: 'border-l-yellow-500',
      text: 'text-yellow-800'
    },
    error: {
      icon: <FaExclamationTriangle className="text-red-500" />,
      bg: 'bg-red-50',
      border: 'border-l-red-500',
      text: 'text-red-800'
    }
  };

  const markAsRead = (id: number) => {
    // Implement read status update
  };

  const deleteNotification = (id: number) => {
    // Implement delete functionality
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaBell className="text-2xl text-pink-600" />
          <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Mark All as Read
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors">
            Clear All
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => {
          const style = typeStyles[notification.type as keyof typeof typeStyles];
          
          return (
            <div
              key={notification.id}
              className={`flex items-start gap-4 p-5 rounded-lg shadow-sm border-l-4 ${style.border} ${style.bg} ${
                notification.read ? 'opacity-75' : ''
              } transition hover:shadow-md`}
            >
              <div className="text-xl mt-1 flex-shrink-0">
                {style.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className={`font-medium ${style.text}`}>{notification.title}</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => markAsRead(notification.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Mark as read"
                    >
                      <FiClock className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => deleteNotification(notification.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Delete notification"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mt-1">{notification.message}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    {notification.time}
                  </span>
                  {notification.action && (
                    <a 
                      href={notification.action.url}
                      className="text-xs font-medium text-pink-600 hover:text-pink-700 hover:underline transition-colors"
                    >
                      {notification.action.label} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationsPage;