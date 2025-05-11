import React from 'react';
import { Activity, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <button
            className="p-2 rounded-md text-gray-500 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">Toggle navigation menu</span>
          </button>
          
          <Link to="/" className="flex items-center space-x-2 text-cyan-700 font-bold text-xl ml-2 lg:ml-0">
            <Activity size={24} />
            <span>DiabetesML</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://www.diabetes.org/diabetes/a1c/diagnosis" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-gray-600 hover:text-cyan-700 transition-colors"
          >
            Resources
          </a>
          <a 
            href="#" 
            className="bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;