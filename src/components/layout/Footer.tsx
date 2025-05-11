import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} DiabetesML Prediction System
            </p>
            <p className="text-gray-500 text-xs mt-1">
              This tool is for educational purposes only. Always consult healthcare professionals.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-cyan-700 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-700 text-sm">
              Terms of Use
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-700 text-sm">
              Contact
            </a>
            <p className="text-gray-600 text-sm flex items-center">
              Made with <Heart size={14} className="text-red-500 mx-1" /> for better health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;