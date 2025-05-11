import React, { useState } from 'react';
import { HelpCircle, RefreshCw } from 'lucide-react';
import { PatientData } from '../../types';
import { FEATURE_DESCRIPTIONS, FEATURE_RANGES, SAMPLE_PATIENT_DATA } from '../../utils/constants';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface PredictionFormProps {
  onSubmit: (data: PatientData) => void;
  isLoading: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<PatientData>(SAMPLE_PATIENT_DATA);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const resetForm = () => {
    setFormData(SAMPLE_PATIENT_DATA);
  };

  return (
    <Card 
      title="Patient Data Input" 
      subtitle="Enter patient parameters to predict diabetes risk"
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(formData).map(([key, value]) => {
            const featureKey = key as keyof PatientData;
            const range = FEATURE_RANGES[featureKey];
            
            return (
              <div key={key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <div className="relative group">
                    <HelpCircle size={16} className="text-gray-400 cursor-help" />
                    <div className="absolute right-0 w-64 p-2 mt-2 text-xs bg-gray-900 text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10">
                      {FEATURE_DESCRIPTIONS[featureKey]}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    id={key}
                    name={key}
                    min={range.min}
                    max={range.max}
                    step={range.step}
                    value={value}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-700"
                  />
                  <span className="text-sm font-medium w-12 text-right">{value}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 flex items-center justify-between">
          <Button 
            type="button" 
            variant="outline" 
            onClick={resetForm}
            icon={<RefreshCw size={16} />}
          >
            Reset to Sample
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Generate Prediction'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default PredictionForm;