import { 
  FaUsers, 
  FaRegCalendarAlt, 
  FaFileAlt, 
  FaChartLine,
  FaUserClock,
  FaTasks,
  FaClock
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

type DashboardCardProps = {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  trend?: 'up' | 'down' | 'neutral';
  change?: string;
};

function DashboardCard({ icon, label, value, trend, change }: DashboardCardProps) {
  const trendColor = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-500'
  }[trend || 'neutral'];

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-md transition-all duration-200 hover:-translate-y-1 group">
      <div className="text-3xl text-indigo-600 mb-3 group-hover:text-indigo-700 transition-colors">
        {icon}
      </div>
      <span className="text-lg font-semibold text-gray-700">{label}</span>
      <div className="flex items-center mt-2">
        <span className="text-2xl font-bold text-indigo-700 mr-2">{value}</span>
        {trend && (
          <div className="flex flex-col items-start">
            <span className={`text-sm ${trendColor}`}>
              {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {change}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DashboardHome() {
  const recentActivities = [
    {
      id: 1,
      user: "Jane Smith",
      action: "approved a new request",
      time: "10 mins ago",
      icon: <FaFileAlt className="text-green-500" />
    },
    {
      id: 2,
      user: "John Doe",
      action: "submitted a report",
      time: "25 mins ago",
      icon: <FaFileAlt className="text-blue-500" />
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "updated profile information",
      time: "1 hour ago",
      icon: <FaUsers className="text-purple-500" />
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Team Meeting",
      date: "Today, 2:00 PM",
      participants: 12
    },
    {
      id: 2,
      title: "System Maintenance",
      date: "Tomorrow, 3:00 AM",
      participants: 3
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Admin!</h1>
        <p className="text-gray-600">
          Here's what's happening with your employee management system today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          icon={<FaUsers size={24} />}
          label="Total Employees"
          value={124}
          trend="up"
          change="+5% this month"
        />
        <DashboardCard
          icon={<FaUserClock size={24} />}
          label="Active Now"
          value={42}
          trend="up"
          change="+3 today"
        />
        <DashboardCard
          icon={<FaFileAlt size={24} />}
          label="Pending Requests"
          value={8}
          trend="down"
          change="2 resolved"
        />
        <DashboardCard
          icon={<FaChartLine size={24} />}
          label="System Performance"
          value="98%"
          trend="up"
          change="Stable"
        />
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FaTasks className="text-indigo-600" />
              Recent Activities
            </h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="mt-1">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">
                    <span className="text-indigo-600">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FaRegCalendarAlt className="text-indigo-600" />
              Upcoming Events
            </h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                  <FaClock className="text-gray-400" />
                  {event.date}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {event.participants} participants
                </p>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors">
                <FiArrowUpRight />
                Add New Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}