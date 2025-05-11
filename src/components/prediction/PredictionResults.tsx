import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PredictionResult } from '../../types';
import Card from '../ui/Card';
import { MODEL_COLORS } from '../../utils/constants';

interface PredictionResultsProps {
  results: PredictionResult[];
}

const PredictionResults: React.FC<PredictionResultsProps> = ({ results }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sortedResults = [...results].sort((a, b) => b.probability - a.probability);
  const bestModel = sortedResults[0];
  const allPositive = results.every(r => r.prediction);
  const allNegative = results.every(r => !r.prediction);
  const isConsistent = allPositive || allNegative;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="space-y-6"
    >
      <Card
        title="Prediction Summary"
        subtitle="Combined analysis from all models"
        className="border-l-4 border-l-cyan-600"
      >
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
        >
          <div className="flex items-center">
            {bestModel.prediction ? (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center text-orange-500 font-bold"
              >
                <AlertCircle size={24} className="mr-2" />
                <span>High Risk of Diabetes</span>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center text-teal-600 font-bold"
              >
                <CheckCircle size={24} className="mr-2" />
                <span>Low Risk of Diabetes</span>
              </motion.div>
            )}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-4 md:mt-0 bg-gray-50 p-3 rounded-lg"
          >
            <div className="text-sm text-gray-500">Confidence Level</div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl font-bold"
            >
              {(bestModel.confidence * 100).toFixed(1)}%
            </motion.div>
            <div className="text-xs text-gray-500">Based on {bestModel.modelName}</div>
          </motion.div>
        </motion.div>
        
        {!isConsistent && (
          <motion.div 
            variants={itemVariants}
            className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-lg flex items-start"
          >
            <Info size={20} className="mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Models show mixed predictions. This indicates the patient is in a borderline category. 
              Consider additional tests or clinical evaluation.
            </p>
          </motion.div>
        )}
      </Card>
      
      <Card title="Model Predictions" subtitle="Comparison across different algorithms">
        <div className="space-y-4">
          {sortedResults.map((result, index) => (
            <motion.div 
              key={result.modelName}
              variants={itemVariants}
              custom={index}
              className="border rounded-lg overflow-hidden"
            >
              <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-50">
                <span className="font-medium">{result.modelName}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  result.prediction 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {result.prediction ? 'Positive' : 'Negative'}
                </span>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Probability:</span>
                  <span className="font-medium">{(result.probability * 100).toFixed(1)}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${result.probability * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-2.5 rounded-full" 
                    style={{
                      backgroundColor: MODEL_COLORS[result.modelName as keyof typeof MODEL_COLORS]
                    }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default PredictionResults;