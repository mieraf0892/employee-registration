import { FaUserPlus, FaEdit, FaTrash, FaUserCog } from "react-icons/fa";
import { FiMail, FiUser } from "react-icons/fi";

const UsersPage = () => {
  const users = [
    {
      id: 'EMP123',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Developer',
      department: 'Engineering',
      status: 'Active',
      lastActive: '2025-08-10'
    },
    {
      id: 'EMP456',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Admin',
      department: 'Management',
      status: 'Inactive',
      lastActive: '2025-07-15'
    },
    {
      id: 'EMP789',
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      role: 'HR Manager',
      department: 'Human Resources',
      status: 'Active',
      lastActive: '2025-08-12'
    }
  ];

  const statusStyles = {
    Active: 'bg-green-100 text-green-800 border-green-200',
    Inactive: 'bg-red-100 text-red-800 border-red-200',
    Pending: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  const roleStyles = {
    Admin: 'text-purple-600 bg-purple-50',
    Developer: 'text-blue-600 bg-blue-50',
    'HR Manager': 'text-pink-600 bg-pink-50'
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <FiUser className="text-2xl text-pink-600" />
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-700 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-pink-600 hover:to-pink-500 transition-colors">
          <FaUserPlus />
          Add User
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <FiUser className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500 font-mono">{user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-500">
                      <FiMail className="flex-shrink-0" />
                      <span className="truncate max-w-[180px]">{user.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${roleStyles[user.role as keyof typeof roleStyles] || 'bg-gray-100 text-gray-800'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {user.department}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${statusStyles[user.status as keyof typeof statusStyles]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-3">
                      <button className="text-indigo-600 hover:text-indigo-900 transition-colors">
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 transition-colors">
                        <FaTrash className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 transition-colors">
                        <FaUserCog className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;