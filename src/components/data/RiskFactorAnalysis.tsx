import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import Card from '../ui/Card';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RiskFactorAnalysis: React.FC = () => {
  const data = {
    labels: ['Glucose', 'BMI', 'Age', 'Blood Pressure', 'Family History', 'Physical Activity'],
    datasets: [
      {
        label: 'Risk Factor Impact',
        data: [0.85, 0.75, 0.65, 0.55, 0.70, 0.60],
        backgroundColor: 'rgba(8, 145, 178, 0.2)',
        borderColor: '#0891B2',
        borderWidth: 2,
        pointBackgroundColor: '#0891B2',
      }
    ]
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 1,
        ticks: {
          callback: function(value: any) {
            return (value * 100) + '%';
          }
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Impact: ${(context.raw * 100).toFixed(1)}%`;
          }
        }
      }
    }
  };

  return (
    <Card 
      title="Risk Factor Analysis" 
      subtitle="Impact of different factors on diabetes risk"
    >
      <div className="h-80">
        <Radar data={data} options={options} />
      </div>
    </Card>
  );
};

export default RiskFactorAnalysis;