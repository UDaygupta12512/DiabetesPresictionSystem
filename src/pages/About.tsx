import React from 'react';
import { ArrowUpRight, BookOpen, FileText, Github, Users } from 'lucide-react';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">About This Project</h1>
        <p className="mt-2 text-gray-600">
          Learn more about the diabetes prediction system, its purpose, and implementation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-medium text-gray-900">Project Overview</h2>
          <p className="mt-3 text-gray-600">
            This diabetes prediction system aims to demonstrate how machine learning can be used to predict diabetes risk based on medical indicators. The project focuses on creating interpretable models that can assist healthcare providers in early detection and intervention.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <img 
              src="https://images.pexels.com/photos/7089396/pexels-photo-7089396.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Medical technology" 
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">Machine Learning in Healthcare</h3>
              <p className="text-sm text-gray-600">
                Enhancing early detection for better health outcomes
              </p>
            </div>
          </div>
        </Card>
        
        <Card>
          <h2 className="text-xl font-medium text-gray-900">Key Features</h2>
          <ul className="mt-3 space-y-3">
            <li className="flex items-start">
              <span className="bg-cyan-100 text-cyan-700 p-1 rounded mr-3 mt-0.5">
                <Users size={16} />
              </span>
              <div>
                <h3 className="font-medium text-gray-900">Patient Data Analysis</h3>
                <p className="text-sm text-gray-600">
                  Process and analyze patient health indicators for diabetes risk assessment
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-teal-100 text-teal-700 p-1 rounded mr-3 mt-0.5">
                <FileText size={16} />
              </span>
              <div>
                <h3 className="font-medium text-gray-900">Multi-Model Predictions</h3>
                <p className="text-sm text-gray-600">
                  Compare predictions from multiple ML algorithms for more reliable results
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-100 text-orange-700 p-1 rounded mr-3 mt-0.5">
                <BookOpen size={16} />
              </span>
              <div>
                <h3 className="font-medium text-gray-900">Educational Components</h3>
                <p className="text-sm text-gray-600">
                  Learn about ML techniques and diabetes risk factors through interactive visualizations
                </p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
      
      <Card>
        <h2 className="text-xl font-medium text-gray-900">Implementation Details</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-900">Frontend Technologies</h3>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-600">• React with TypeScript</li>
              <li className="text-sm text-gray-600">• Chart.js for data visualization</li>
              <li className="text-sm text-gray-600">• Tailwind CSS for styling</li>
              <li className="text-sm text-gray-600">• Lucide React for icons</li>
              <li className="text-sm text-gray-600">• React Router for navigation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Machine Learning Models</h3>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-600">• Logistic Regression</li>
              <li className="text-sm text-gray-600">• Decision Trees</li>
              <li className="text-sm text-gray-600">• Random Forest</li>
              <li className="text-sm text-gray-600">• Support Vector Machines</li>
              <li className="text-sm text-gray-600">• Naive Bayes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Data Processing</h3>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-600">• Feature scaling and normalization</li>
              <li className="text-sm text-gray-600">• Missing value imputation</li>
              <li className="text-sm text-gray-600">• Feature importance analysis</li>
              <li className="text-sm text-gray-600">• Cross-validation for model evaluation</li>
              <li className="text-sm text-gray-600">• Hyperparameter tuning</li>
            </ul>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-medium text-gray-900">Medical Disclaimer</h2>
          <div className="mt-3 p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>Important:</strong> This system is designed for educational and demonstration purposes only. It is not intended to be used as a medical device or to provide medical advice. Always consult with qualified healthcare professionals for proper diagnosis and treatment of diabetes or any other medical condition.
            </p>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            The predictions made by this system are based on statistical models and may not account for all factors relevant to an individual's health. The system has not been evaluated by any regulatory authority and should not be used to make healthcare decisions.
          </p>
        </Card>
        
        <Card>
          <h2 className="text-xl font-medium text-gray-900">Resources & References</h2>
          <ul className="mt-3 space-y-3">
            <li>
              <a 
                href="https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyan-700 hover:text-cyan-800 transition-colors"
              >
                <span className="mr-2">Pima Indians Diabetes Database</span>
                <ArrowUpRight size={14} />
              </a>
              <p className="text-sm text-gray-600">Original dataset used for model development</p>
            </li>
            <li>
              <a 
                href="https://www.diabetes.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyan-700 hover:text-cyan-800 transition-colors"
              >
                <span className="mr-2">American Diabetes Association</span>
                <ArrowUpRight size={14} />
              </a>
              <p className="text-sm text-gray-600">Information on diabetes prevention and management</p>
            </li>
            <li>
              <a 
                href="https://github.com/scikit-learn/scikit-learn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyan-700 hover:text-cyan-800 transition-colors"
              >
                <span className="mr-2">Scikit-learn Documentation</span>
                <ArrowUpRight size={14} />
              </a>
              <p className="text-sm text-gray-600">Machine learning library used for model development</p>
            </li>
          </ul>
          <div className="mt-6 flex justify-end">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={16} className="mr-2" />
              <span>View Project on GitHub</span>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;