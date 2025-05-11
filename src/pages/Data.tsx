import React from 'react';
import Card from '../components/ui/Card';
import DataDistribution from '../components/data/DataDistribution';
import FeatureImportanceChart from '../components/data/FeatureImportanceChart';
import { FEATURE_DESCRIPTIONS } from '../utils/constants';

const Data: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Data Analysis</h1>
        <p className="mt-2 text-gray-600">
          Explore the diabetes dataset features, distributions, and importance metrics.
        </p>
      </div>
      
      <DataDistribution />
      
      <FeatureImportanceChart />
      
      <div>
        <h2 className="text-xl font-medium text-gray-900 mb-4">Dataset Information</h2>
        <Card>
          <div className="prose max-w-none">
            <p>
              This diabetes prediction system uses the Pima Indians Diabetes Database, 
              which contains diagnostic measurements for 768 female patients of Pima Indian heritage. 
              The dataset includes various medical predictor variables and one target variable (outcome).
            </p>
            
            <h3 className="text-lg font-medium mt-6">Data Preprocessing</h3>
            <p>
              The following preprocessing steps were applied to ensure data quality:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Missing values were identified and handled appropriately</li>
              <li>Features were normalized to ensure equal contribution</li>
              <li>Outliers were detected and addressed</li>
              <li>The dataset was split into training (80%) and testing (20%) sets</li>
              <li>Data augmentation techniques were applied to address class imbalance</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6">Feature Descriptions</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pregnancies</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{FEATURE_DESCRIPTIONS.pregnancies}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Count</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Glucose</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{FEATURE_DESCRIPTIONS.glucose}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">mg/dL</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BloodPressure</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{FEATURE_DESCRIPTIONS.bloodPressure}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">mm Hg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SkinThickness</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{FEATURE_DESCRIPTIONS.skinThickness}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">mm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Insulin</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{FEATURE_DESCRIPTIONS.insulin}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">mu U/ml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BMI</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{FEATURE_DESCRIPTIONS.bmi}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">kg/m²</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DiabetesPedigree</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{FEATURE_DESCRIPTIONS.diabetesPedigree}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Function value</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Age</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{FEATURE_DESCRIPTIONS.age}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-lg font-medium mt-6">Class Distribution</h3>
            <p>
              The dataset contains 768 instances with the following distribution:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Non-diabetic (Outcome=0): 500 instances (65.1%)</li>
              <li>Diabetic (Outcome=1): 268 instances (34.9%)</li>
            </ul>
            
            <p className="text-sm text-gray-500 mt-6">
              Note: This implementation uses a simulated dataset based on the original Pima Indians Diabetes Database for educational purposes.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Data;