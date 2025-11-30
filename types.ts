import React from 'react';

export interface AuthUser {
  username: string;
  name: string;
  apiKey: string;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
}

export interface Transaction {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: 'Success' | 'Pending' | 'Failed';
  method: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  previous: number;
}

export interface StatMetric {
  label: string;
  value: string | number;
  change: number;
  type: 'increase' | 'decrease';
  icon: React.ReactNode;
  helpText?: string;
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  ANALYTICS = 'ANALYTICS',
  CUSTOMERS = 'CUSTOMERS',
  SETTINGS = 'SETTINGS'
}