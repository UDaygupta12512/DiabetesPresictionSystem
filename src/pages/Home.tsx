import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetricsOverview from '../components/dashboard/MetricsOverview';
import ModelComparison from '../components/dashboard/ModelComparison';
import PerformanceMetrics from '../components/dashboard/PerformanceMetrics';
import RiskFactorAnalysis from '../components/data/RiskFactorAnalysis';
import DataDistribution from '../components/data/DataDistribution';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-700 to-teal-600 rounded-lg text-white p-8">
        <h1 className="text-3xl font-bold">Machine Learning for Diabetes Prediction</h1>
        <p className="mt-2 text-cyan-50 max-w-3xl">
          This platform uses advanced machine learning algorithms to predict diabetes risk based on 
          patient data. Explore model performance, feature importance, and make predictions.
        </p>
        <div className="mt-6">
          <Link
            to="/prediction"
            className="inline-flex items-center bg-white text-cyan-800 px-4 py-2 rounded-md font-medium hover:bg-cyan-50 transition-colors"
          >
            Try Prediction <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <MetricsOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PerformanceMetrics />
        <RiskFactorAnalysis />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-medium text-gray-900 mb-4">Dataset Overview</h2>
          <DataDistribution />
        </div>
        <div>
          <h2 className="text-xl font-medium text-gray-900 mb-4">Model Performance</h2>
          <ModelComparison />
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-medium text-gray-900">Project Insights</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-900">Model Accuracy</h3>
            <p className="mt-1 text-sm text-gray-600">
              Achieving 87% accuracy with continuous improvement through model optimization.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-900">Risk Factors</h3>
            <p className="mt-1 text-sm text-gray-600">
              Glucose levels and BMI are the strongest predictors of diabetes risk.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-900">Impact</h3>
            <p className="mt-1 text-sm text-gray-600">
              Supporting early detection and preventive healthcare measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;