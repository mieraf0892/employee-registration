import { FaUserShield, FaHistory, FaPlus } from "react-icons/fa";

const RequestPage = () => {
  type Priority = "High" | "Medium" | "Low";
  type Status = "Approved" | "Pending" | "Rejected";

  const requests: {
    id: number;
    requestedBy: string;
    userId: string;
    service: string;
    serviceId: string;
    department: string;
    purpose: string;
    status: Status;
    requestedDate: string;
    priority: Priority;
  }[] = [
    {
      id: 1,
      requestedBy: "John Doe",
      userId: "EMP123",
      service: "VPN Access",
      serviceId: "VPN001",
      department: "IT Department",
      purpose: "Secure remote access for engineering team",
      status: "Pending",
      requestedDate: "2025-08-05",
      priority: "High"
    },
    {
      id: 2,
      requestedBy: "Jane Smith",
      userId: "EMP456",
      service: "Mobile SIM",
      serviceId: "SIM102",
      department: "Finance",
      purpose: "Work mobile connectivity for field audits",
      status: "Approved",
      requestedDate: "2025-08-04",
      priority: "Medium"
    },
    {
      id: 3,
      requestedBy: "Mike Johnson",
      userId: "EMP789",
      service: "Conference Line",
      serviceId: "CONF202",
      department: "Sales",
      purpose: "Weekly team meetings with clients",
      status: "Rejected",
      requestedDate: "2025-08-03",
      priority: "Low"
    }
  ];

  const statusStyles: Record<Status, string> = {
    Approved: "bg-green-100 text-green-800 border-green-200",
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Rejected: "bg-red-100 text-red-800 border-red-200"
  };

  const priorityStyles: Record<Priority, string> = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-green-600"
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <FaUserShield className="text-2xl text-pink-600" />
          <h2 className="text-2xl font-bold text-gray-900">Subscription Requests</h2>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FaHistory className="text-gray-500" />
            View History
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors">
            <FaPlus />
            New Request
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requester</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{request.requestedBy}</div>
                    <div className="text-sm text-gray-500">{request.userId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{request.service}</div>
                    <div className="text-sm text-gray-500">{request.serviceId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {request.department}
                  </td>
                  <td className="px-6 py-4 text-gray-500 max-w-xs">
                    <div className="line-clamp-2">{request.purpose}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`font-medium ${priorityStyles[request.priority]}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${statusStyles[request.status]}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.requestedDate}
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

export default RequestPage;