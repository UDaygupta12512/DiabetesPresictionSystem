import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Card from '../ui/Card';
import { getDatasetDistribution, getFeatureCorrelations } from '../../utils/data';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataDistribution: React.FC = () => {
  const distributionData = getDatasetDistribution();
  const correlationsData = getFeatureCorrelations();
  
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw} cases (${((context.raw / 768) * 100).toFixed(1)}%)`;
          }
        }
      }
    }
  };
  
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Correlation: ${context.raw.toFixed(2)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 0.6,
        title: {
          display: true,
          text: 'Correlation Coefficient'
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Dataset Distribution" subtitle="Balance between positive and negative cases">
        <div className="h-64 flex items-center justify-center">
          <div className="w-64">
            <Pie data={distributionData} options={pieOptions} />
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            The dataset contains a total of 768 patient records with approximately 35% positive diabetes cases.
          </p>
        </div>
      </Card>
      
      <Card title="Feature Correlations" subtitle="Correlation of features with diabetes outcome">
        <div className="h-64">
          <Bar data={correlationsData} options={barOptions} />
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>
            Glucose level shows the strongest correlation with diabetes outcome (0.47), 
            followed by BMI (0.29) and Age (0.24). This aligns with medical knowledge about diabetes risk factors.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default DataDistribution;