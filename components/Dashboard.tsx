import React from 'react';
import { Download, SlidersHorizontal, Plus } from 'lucide-react';
import { METRICS, REVENUE_DATA, VISITOR_DATA, RECENT_TRANSACTIONS } from '../constants';
import StatCard from './StatCard';
import { RevenueChart, VisitorBarChart } from './Charts';
import TransactionsTable from './TransactionsTable';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back, here's what's happening with your store today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((metric, index) => (
          <StatCard key={index} data={metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Statistics</h3>
            <div className="flex items-center gap-2">
                <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100">
                    <SlidersHorizontal className="w-4 h-4" />
                </button>
                <select className="text-sm border-gray-200 rounded-md text-gray-600 focus:ring-indigo-500 focus:border-indigo-500 py-1 pl-2 pr-8 bg-gray-50">
                    <option>This Year</option>
                    <option>Last Year</option>
                </select>
            </div>
          </div>
          <RevenueChart data={REVENUE_DATA} />
        </div>

        {/* Secondary Visitor Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-semibold text-gray-900">Weekly Visitors</h3>
             <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">+14%</span>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <VisitorBarChart data={VISITOR_DATA} />
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">Most visitors are from <span className="font-semibold text-gray-700">Social Media</span> ads.</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
        </div>
        <TransactionsTable transactions={RECENT_TRANSACTIONS} />
      </div>
    </div>
  );
};

export default Dashboard;