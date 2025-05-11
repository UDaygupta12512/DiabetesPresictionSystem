import React from 'react';
import { Bar } from 'react-chartjs-2';
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
import { getModelPerformances } from '../../utils/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ModelComparison: React.FC = () => {
  const modelPerformances = getModelPerformances();
  
  const chartData = {
    labels: modelPerformances.map(model => model.modelName),
    datasets: [
      {
        label: 'Accuracy',
        data: modelPerformances.map(model => model.accuracy),
        backgroundColor: modelPerformances.map(model => `${model.color}99`),
        borderColor: modelPerformances.map(model => model.color),
        borderWidth: 1
      },
      {
        label: 'Precision',
        data: modelPerformances.map(model => model.precision),
        backgroundColor: modelPerformances.map(model => `${model.color}66`),
        borderColor: modelPerformances.map(model => model.color),
        borderWidth: 1
      },
      {
        label: 'Recall',
        data: modelPerformances.map(model => model.recall),
        backgroundColor: modelPerformances.map(model => `${model.color}33`),
        borderColor: modelPerformances.map(model => model.color),
        borderWidth: 1
      }
    ]
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${(context.raw * 100).toFixed(1)}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          callback: function(value: any) {
            return (value * 100) + '%';
          }
        }
      }
    }
  };

  return (
    <Card 
      title="Model Performance Comparison" 
      subtitle="Accuracy, precision, and recall metrics across models"
    >
      <div className="h-80">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modelPerformances.map(model => (
          <div 
            key={model.modelName} 
            className="border rounded-lg p-3 flex flex-col"
            style={{ borderLeftColor: model.color, borderLeftWidth: '4px' }}
          >
            <h4 className="font-medium text-sm">{model.modelName}</h4>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-gray-500">Accuracy</p>
                <p className="font-medium">{(model.accuracy * 100).toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-gray-500">F1 Score</p>
                <p className="font-medium">{(model.f1Score * 100).toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-gray-500">AUC</p>
                <p className="font-medium">{(model.auc * 100).toFixed(1)}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ModelComparison;