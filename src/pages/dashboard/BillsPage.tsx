import { FaFileInvoiceDollar, FaPrint, FaFileExport } from "react-icons/fa";

const BillsPage = () => {
  const bills = [
    {
      id: "B001",
      billNumber: "INV-2025-001",
      employee: {
        id: "EMP123",
        name: "John Doe"
      },
      service: {
        name: "VPN Access",
        type: "Premium"
      },
      amount: 50.00,
      dueDate: "2025-08-15",
      status: "Unpaid",
      billingDate: "2025-08-01",
      paymentMethod: ""
    },
    {
      id: "B002",
      billNumber: "INV-2025-002",
      employee: {
        id: "EMP456",
        name: "Jane Smith"
      },
      service: {
        name: "Mobile SIM",
        type: "Business"
      },
      amount: 30.00,
      dueDate: "2025-08-10",
      status: "Paid",
      billingDate: "2025-07-25",
      paymentMethod: "Credit Card"
    },
    {
      id: "B003",
      billNumber: "INV-2025-003",
      employee: {
        id: "EMP789",
        name: "Mike Johnson"
      },
      service: {
        name: "Conference Line",
        type: "Standard"
      },
      amount: 75.00,
      dueDate: "2025-08-20",
      status: "Pending",
      billingDate: "2025-08-05",
      paymentMethod: "Bank Transfer"
    }
  ];

  const statusStyles = {
    Paid: "bg-green-100 text-green-800 border-green-200",
    Unpaid: "bg-red-100 text-red-800 border-red-200",
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Overdue: "bg-purple-100 text-purple-800 border-purple-200"
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getDueStatus = (dueDate: string, status: string) => {
    if (status !== "Unpaid") return status;
    const today = new Date();
    const due = new Date(dueDate);
    return due < today ? "Overdue" : status;
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <FaFileInvoiceDollar className="text-2xl text-pink-600" />
          <h2 className="text-2xl font-bold text-gray-900">Telecom Bills</h2>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FaPrint className="text-gray-500" />
            Print
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FaFileExport className="text-gray-500" />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill #</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Billing Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bills.map((bill) => {
                const displayStatus = getDueStatus(bill.dueDate, bill.status);
                
                return (
                  <tr key={bill.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {bill.billNumber}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{bill.employee.name}</div>
                      <div className="text-sm text-gray-500">{bill.employee.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{bill.service.name}</div>
                      <div className="text-sm text-gray-500">{bill.service.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {formatCurrency(bill.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {bill.billingDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={displayStatus === "Overdue" ? "text-red-600 font-medium" : ""}>
                        {bill.dueDate}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${statusStyles[displayStatus as keyof typeof statusStyles]}`}>
                        {displayStatus}
                        {displayStatus === "Overdue" && "!"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillsPage;