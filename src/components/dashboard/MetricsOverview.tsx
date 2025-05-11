import React from 'react';
import { Dna, Heart, Brain, Activity } from 'lucide-react';
import Card from '../ui/Card';

const MetricsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="transform transition-transform hover:scale-105">
        <div className="flex items-start">
          <div className="bg-orange-100 p-3 rounded-lg mr-4">
            <Activity className="text-orange-500" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Model Accuracy</p>
            <h3 className="text-2xl font-bold">84.3%</h3>
            <p className="text-xs text-green-600 mt-1">↑ 2.1% from last version</p>
          </div>
        </div>
      </Card>
      
      <Card className="transform transition-transform hover:scale-105">
        <div className="flex items-start">
          <div className="bg-cyan-100 p-3 rounded-lg mr-4">
            <Brain className="text-cyan-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Predictions Made</p>
            <h3 className="text-2xl font-bold">1,248</h3>
            <p className="text-xs text-green-600 mt-1">↑ 124 this week</p>
          </div>
        </div>
      </Card>
      
      <Card className="transform transition-transform hover:scale-105">
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-lg mr-4">
            <Heart className="text-teal-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Risk Assessments</p>
            <h3 className="text-2xl font-bold">768</h3>
            <p className="text-xs text-green-600 mt-1">↑ 15% from last month</p>
          </div>
        </div>
      </Card>
      
      <Card className="transform transition-transform hover:scale-105">
        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-lg mr-4">
            <Dna className="text-purple-600" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Feature Analysis</p>
            <h3 className="text-2xl font-bold">94.5%</h3>
            <p className="text-xs text-green-600 mt-1">↑ 1.2% improvement</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MetricsOverview;