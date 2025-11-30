import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { ViewState, AuthUser } from './types';
import { FileText, Users, Sliders } from 'lucide-react';

const PlaceholderView: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-gray-400">
    <div className="p-4 bg-gray-100 rounded-full mb-4">
      {icon}
    </div>
    <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
    <p className="text-sm text-gray-400 mt-2">This module is under development.</p>
  </div>
);

const App: React.FC = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Auth Handlers
  const handleLogin = (userData: AuthUser) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView(ViewState.DASHBOARD);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard />;
      case ViewState.ANALYTICS:
        return <PlaceholderView title="Analytics Module" icon={<FileText className="w-10 h-10" />} />;
      case ViewState.CUSTOMERS:
        return <PlaceholderView title="Customer Management" icon={<Users className="w-10 h-10" />} />;
      case ViewState.SETTINGS:
        return <PlaceholderView title="Settings" icon={<Sliders className="w-10 h-10" />} />;
      default:
        return <Dashboard />;
    }
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuClick={toggleSidebar} user={user} />
        
        <main className="flex-1 overflow-y-auto focus:outline-none">
           {renderContent()}
           
           {/* Footer */}
           <div className="py-6 text-center text-xs text-gray-400 border-t border-gray-200 mt-auto bg-gray-50">
             &copy; 2024 ChakraDash. All rights reserved. Designed with Tailwind CSS.
           </div>
        </main>
      </div>
    </div>
  );
};

export default App;