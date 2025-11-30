import React from 'react';
import { MoreHorizontal, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Transaction } from '../types';

interface TransactionsTableProps {
  transactions: Transaction[];
}

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let styles = "";
  let icon = null;

  switch (status) {
    case 'Success':
      styles = "bg-green-100 text-green-700 border-green-200";
      icon = <CheckCircle className="w-3 h-3 mr-1" />;
      break;
    case 'Pending':
      styles = "bg-yellow-100 text-yellow-700 border-yellow-200";
      icon = <Clock className="w-3 h-3 mr-1" />;
      break;
    case 'Failed':
      styles = "bg-red-100 text-red-700 border-red-200";
      icon = <XCircle className="w-3 h-3 mr-1" />;
      break;
    default:
      styles = "bg-gray-100 text-gray-700 border-gray-200";
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles}`}>
      {icon}
      {status}
    </span>
  );
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b border-gray-200 bg-gray-50/50">
          <tr>
            <th scope="col" className="px-6 py-4 font-semibold text-gray-500">Transaction ID</th>
            <th scope="col" className="px-6 py-4 font-semibold text-gray-500">Customer</th>
            <th scope="col" className="px-6 py-4 font-semibold text-gray-500">Date</th>
            <th scope="col" className="px-6 py-4 font-semibold text-gray-500">Amount</th>
            <th scope="col" className="px-6 py-4 font-semibold text-gray-500">Status</th>
            <th scope="col" className="px-6 py-4 font-semibold text-gray-500 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.map((txn) => (
            <tr key={txn.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{txn.id}</td>
              <td className="px-6 py-4 text-gray-600">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{txn.customer}</span>
                  <span className="text-xs text-gray-400">{txn.method}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-600">{txn.date}</td>
              <td className="px-6 py-4 font-medium text-gray-900">${txn.amount.toFixed(2)}</td>
              <td className="px-6 py-4">
                <StatusBadge status={txn.status} />
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;