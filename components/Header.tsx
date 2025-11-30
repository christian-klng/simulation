import React from 'react';
import { Menu, Bell, ChevronDown } from 'lucide-react';
import { AuthUser } from '../types';

interface HeaderProps {
  onMenuClick: () => void;
  user: AuthUser;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, user }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-white/80 backdrop-blur-md border-b border-gray-200 lg:px-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:text-gray-700"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center gap-4">
         <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
         </button>
         
         <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>

         <button className="flex items-center gap-3 pl-1 pr-2 py-1 rounded-full hover:bg-gray-50 transition-colors group">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${user.color} shadow-sm border-2 border-white group-hover:border-gray-100`}>
                {getInitials(user.name || user.username)}
            </div>
            <div className="hidden sm:flex flex-col items-start text-left">
              <span className="text-sm font-semibold text-gray-900">{user.name}</span>
              <span className="text-xs text-gray-500">@{user.username}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
         </button>
      </div>
    </header>
  );
};

export default Header;