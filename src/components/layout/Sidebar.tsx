import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, CircuitBoard, Database, Info, LayoutDashboard } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';

interface SidebarProps {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  const location = useLocation();
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard':
        return <LayoutDashboard size={20} />;
      case 'BarChart':
        return <BarChart size={20} />;
      case 'CircuitBoard':
        return <CircuitBoard size={20} />;
      case 'Database':
        return <Database size={20} />;
      case 'Info':
        return <Info size={20} />;
      default:
        return <LayoutDashboard size={20} />;
    }
  };

  return (
    <div
      className={`lg:block fixed inset-y-0 left-0 z-20 w-64 bg-gray-900 text-white transform transition duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold">Diabetes Prediction</h2>
          <p className="text-gray-400 text-sm mt-1">ML-Powered Analysis</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          <ul className="space-y-1">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-cyan-700 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-3">{getIcon(item.icon)}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-800 mt-auto">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium text-cyan-400">Need Help?</h3>
            <p className="text-sm text-gray-400 mt-1">
              Check our documentation for detailed guidance on using the prediction system.
            </p>
            <a
              href="#"
              className="mt-3 block text-sm text-cyan-400 hover:text-cyan-300"
            >
              View Documentation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;