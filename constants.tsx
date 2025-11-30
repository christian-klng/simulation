import React from 'react';
import { Users, DollarSign, ShoppingCart, Activity } from 'lucide-react';
import { StatMetric, ChartDataPoint, Transaction, User } from './types';

// Replace this URL with your deployed Google Apps Script Web App URL
export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyocp5miStLrfeww73ohmtK_z60BtDTsxaM_FqRAPmS0xfZLJmcjwfpkLAQZLF-r6wHpg/exec'; 

export const AVATAR_COLORS = [
  'bg-red-500', 'bg-orange-500', 'bg-amber-500', 
  'bg-green-500', 'bg-teal-500', 'bg-blue-500', 
  'bg-indigo-500', 'bg-violet-500', 'bg-purple-500', 'bg-pink-500'
];

export const METRICS: StatMetric[] = [
  {
    label: "Total Revenue",
    value: "$45,231.89",
    change: 23.36,
    type: 'increase',
    icon: <DollarSign className="w-5 h-5 text-white" />,
    helpText: "Revenue from all sources"
  },
  {
    label: "Total Customers",
    value: "1,205",
    change: 12.05,
    type: 'decrease',
    icon: <Users className="w-5 h-5 text-white" />,
    helpText: "Active user accounts"
  },
  {
    label: "New Orders",
    value: "348",
    change: 5.4,
    type: 'increase',
    icon: <ShoppingCart className="w-5 h-5 text-white" />,
    helpText: "Orders in the last 30 days"
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    change: 0.8,
    type: 'increase',
    icon: <Activity className="w-5 h-5 text-white" />,
    helpText: "Visitor to customer ratio"
  }
];

export const REVENUE_DATA: ChartDataPoint[] = [
  { name: 'Jan', value: 4000, previous: 2400 },
  { name: 'Feb', value: 3000, previous: 1398 },
  { name: 'Mar', value: 2000, previous: 9800 },
  { name: 'Apr', value: 2780, previous: 3908 },
  { name: 'May', value: 1890, previous: 4800 },
  { name: 'Jun', value: 2390, previous: 3800 },
  { name: 'Jul', value: 3490, previous: 4300 },
  { name: 'Aug', value: 4200, previous: 3100 },
  { name: 'Sep', value: 5100, previous: 4200 },
  { name: 'Oct', value: 4800, previous: 4500 },
  { name: 'Nov', value: 5600, previous: 4900 },
  { name: 'Dec', value: 6100, previous: 5200 },
];

export const VISITOR_DATA: ChartDataPoint[] = [
  { name: 'Mon', value: 120, previous: 0 },
  { name: 'Tue', value: 132, previous: 0 },
  { name: 'Wed', value: 101, previous: 0 },
  { name: 'Thu', value: 134, previous: 0 },
  { name: 'Fri', value: 90, previous: 0 },
  { name: 'Sat', value: 230, previous: 0 },
  { name: 'Sun', value: 210, previous: 0 },
];

export const RECENT_TRANSACTIONS: Transaction[] = [
  { id: 'TXN-1001', customer: 'Esther Howard', date: '2023-10-25', amount: 350.00, status: 'Success', method: 'Visa •••• 4242' },
  { id: 'TXN-1002', customer: 'Cameron Williamson', date: '2023-10-24', amount: 120.50, status: 'Pending', method: 'Mastercard •••• 5555' },
  { id: 'TXN-1003', customer: 'Robert Fox', date: '2023-10-24', amount: 850.00, status: 'Success', method: 'PayPal' },
  { id: 'TXN-1004', customer: 'Jenny Wilson', date: '2023-10-23', amount: 56.00, status: 'Failed', method: 'Visa •••• 1234' },
  { id: 'TXN-1005', customer: 'Marvin McKinney', date: '2023-10-23', amount: 210.25, status: 'Success', method: 'Amex •••• 9000' },
];

export const CUSTOMERS: User[] = [
  { id: '1', name: 'Wade Warren', email: 'wade.warren@example.com', avatar: 'https://picsum.photos/100/100', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Jane Cooper', email: 'jane.cooper@example.com', avatar: 'https://picsum.photos/101/101', role: 'Editor', status: 'Active' },
  { id: '3', name: 'Leslie Alexander', email: 'leslie.alexander@example.com', avatar: 'https://picsum.photos/102/102', role: 'Viewer', status: 'Inactive' },
  { id: '4', name: 'Guy Hawkins', email: 'guy.hawkins@example.com', avatar: 'https://picsum.photos/103/103', role: 'Viewer', status: 'Active' },
];