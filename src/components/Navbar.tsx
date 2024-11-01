import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black/95 border-b border-gray-800 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Analytics Hub
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <User className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </nav>
  );
}