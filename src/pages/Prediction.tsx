import React, { useState } from 'react';
import { PatientData, PredictionResult } from '../types';
import PredictionForm from '../components/prediction/PredictionForm';
import PredictionResults from '../components/prediction/PredictionResults';
import { getPredictions } from '../utils/data';

const Prediction: React.FC = () => {
  const [predictions, setPredictions] = useState<PredictionResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (data: PatientData) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = getPredictions(data);
      setPredictions(results);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Diabetes Risk Prediction</h1>
        <p className="mt-2 text-gray-600">
          Enter patient parameters to generate diabetes risk predictions using multiple machine learning models.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:sticky lg:top-24 self-start">
          <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
          
          {!predictions && !isLoading && (
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h3 className="font-medium text-blue-800">How to use this tool</h3>
              <ul className="mt-2 text-sm text-blue-700 space-y-2">
                <li>1. Adjust the patient parameters using the sliders</li>
                <li>2. Submit the form to get predictions from multiple models</li>
                <li>3. Compare results across different machine learning algorithms</li>
                <li>4. Review the confidence level and prediction details</li>
              </ul>
              <p className="mt-3 text-xs text-blue-800">
                Note: This is a demonstration tool and should not be used for actual medical diagnosis.
              </p>
            </div>
          )}
        </div>
        
        <div>
          {isLoading ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-700"></div>
              <p className="mt-4 text-gray-600">Analyzing patient data...</p>
            </div>
          ) : predictions ? (
            <PredictionResults results={predictions} />
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
              <img
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical analysis"
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-medium text-gray-900">Ready for Analysis</h3>
              <p className="mt-2 text-gray-600 max-w-md">
                Adjust the parameters on the left and click "Generate Prediction" to see the results from our machine learning models.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prediction;