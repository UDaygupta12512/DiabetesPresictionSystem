import React from 'react';
import { BarList, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Card from '../ui/Card';
import { getFeatureImportance } from '../../utils/data';
import { FeatureImportance } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FeatureImportanceChart: React.FC = () => {
  const featureImportance = getFeatureImportance();
  
  // Sort by importance descending
  const sortedFeatures = [...featureImportance].sort((a, b) => b.importance - a.importance);
  
  const chartData = {
    labels: sortedFeatures.map(f => f.feature.charAt(0).toUpperCase() + f.feature.slice(1)),
    datasets: [
      {
        label: 'Feature Importance',
        data: sortedFeatures.map(f => f.importance),
        backgroundColor: 'rgba(8, 145, 178, 0.7)',
        borderColor: 'rgb(8, 145, 178)',
        borderWidth: 1
      }
    ]
  };
  
  const chartOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Importance: ${(context.raw * 100).toFixed(1)}%`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: Math.max(...featureImportance.map(f => f.importance)) * 1.1,
        ticks: {
          callback: function(value: any) {
            return (value * 100).toFixed(0) + '%';
          }
        }
      }
    }
  };

  return (
    <Card 
      title="Feature Importance" 
      subtitle="Relative importance of each feature in diabetes prediction"
    >
      <div className="h-80">
        <Bar data={chartData} options={chartOptions} />
      </div>
      
      <div className="mt-6 space-y-4">
        <h4 className="font-medium text-gray-900">Feature Descriptions</h4>
        <div className="space-y-3">
          {sortedFeatures.map((feature: FeatureImportance) => (
            <div key={feature.feature} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between">
                <h5 className="font-medium text-gray-900">
                  {feature.feature.charAt(0).toUpperCase() + feature.feature.slice(1)}
                </h5>
                <span className="text-sm font-medium text-cyan-700">
                  {(feature.importance * 100).toFixed(1)}%
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FeatureImportanceChart;