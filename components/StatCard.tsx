import React from 'react';
import { ArrowUpRight, ArrowDownRight, HelpCircle } from 'lucide-react';
import { StatMetric } from '../types';

interface StatCardProps {
  data: StatMetric;
}

const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const isIncrease = data.type === 'increase';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{data.label}</p>
          <h3 className="text-2xl font-bold text-gray-900">{data.value}</h3>
        </div>
        <div className={`p-2 rounded-lg ${isIncrease ? 'bg-teal-500' : 'bg-blue-500'} shadow-sm`}>
          {data.icon}
        </div>
      </div>
      
      <div className="flex items-center text-sm">
        <span className={`flex items-center font-semibold ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
          {isIncrease ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {Math.abs(data.change)}%
        </span>
        <span className="text-gray-400 ml-2">since last month</span>
      </div>
    </div>
  );
};

export default StatCard;