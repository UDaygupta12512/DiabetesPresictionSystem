import { FeatureImportance, ModelPerformance, PatientData, PredictionResult } from '../types';
import { MODEL_COLORS, MODEL_NAMES } from './constants';

// Simulated model performance metrics
export const getModelPerformances = (): ModelPerformance[] => {
  return [
    {
      modelName: 'Logistic Regression',
      accuracy: 0.76,
      precision: 0.73,
      recall: 0.64,
      f1Score: 0.68,
      auc: 0.82,
      color: MODEL_COLORS['Logistic Regression']
    },
    {
      modelName: 'Decision Tree',
      accuracy: 0.72,
      precision: 0.66,
      recall: 0.72,
      f1Score: 0.69,
      auc: 0.78,
      color: MODEL_COLORS['Decision Tree']
    },
    {
      modelName: 'Random Forest',
      accuracy: 0.84,
      precision: 0.82,
      recall: 0.75,
      f1Score: 0.78,
      auc: 0.89,
      color: MODEL_COLORS['Random Forest']
    },
    {
      modelName: 'Support Vector Machine',
      accuracy: 0.77,
      precision: 0.76,
      recall: 0.67,
      f1Score: 0.71,
      auc: 0.83,
      color: MODEL_COLORS['Support Vector Machine']
    },
    {
      modelName: 'Naive Bayes',
      accuracy: 0.75,
      precision: 0.69,
      recall: 0.76,
      f1Score: 0.72,
      auc: 0.81,
      color: MODEL_COLORS['Naive Bayes']
    }
  ];
};

// Simulated feature importance for educational purposes
export const getFeatureImportance = (): FeatureImportance[] => {
  return [
    {
      feature: 'glucose',
      importance: 0.28,
      description: 'Plasma glucose concentration is one of the most critical indicators for diabetes prediction.'
    },
    {
      feature: 'bmi',
      importance: 0.19,
      description: 'Body Mass Index (BMI) strongly correlates with diabetes risk.'
    },
    {
      feature: 'age',
      importance: 0.17,
      description: 'Age is a significant risk factor, with increased risk in older individuals.'
    },
    {
      feature: 'diabetesPedigree',
      importance: 0.11,
      description: 'Genetic factors play an important role in diabetes development.'
    },
    {
      feature: 'insulin',
      importance: 0.09,
      description: 'Insulin levels help assess pancreatic function and insulin resistance.'
    },
    {
      feature: 'bloodPressure',
      importance: 0.08,
      description: 'High blood pressure is often associated with diabetes.'
    },
    {
      feature: 'pregnancies',
      importance: 0.05,
      description: 'Number of pregnancies correlates with gestational diabetes and later diabetes risk.'
    },
    {
      feature: 'skinThickness',
      importance: 0.03,
      description: 'Skin thickness can be an indicator of body fat distribution.'
    }
  ];
};

// Simulated prediction logic
export const getPredictions = (data: PatientData): PredictionResult[] => {
  // Simulated weights for a simple weighted sum model
  const weights = {
    pregnancies: 0.3,
    glucose: 0.8,
    bloodPressure: 0.2,
    skinThickness: 0.1,
    insulin: 0.3,
    bmi: 0.7,
    diabetesPedigree: 0.5,
    age: 0.6
  };

  // Normalize the input data (very simplified)
  const normalizedGlucose = data.glucose / 200;
  const normalizedBMI = data.bmi / 60;
  const normalizedAge = data.age / 80;
  const normalizedDP = data.diabetesPedigree / 2.5;
  
  // Base probability with some randomization for different models
  const baseProb = 
    weights.glucose * normalizedGlucose +
    weights.bmi * normalizedBMI +
    weights.age * normalizedAge +
    weights.diabetesPedigree * normalizedDP;
  
  // Create variability between models
  return MODEL_NAMES.map(model => {
    let modelVariation = 0;
    
    // Add some variability between models
    switch(model) {
      case 'Logistic Regression':
        modelVariation = -0.02;
        break;
      case 'Decision Tree':
        modelVariation = 0.03;
        break;
      case 'Random Forest':
        modelVariation = 0.05;
        break;
      case 'Support Vector Machine':
        modelVariation = -0.01;
        break;
      case 'Naive Bayes':
        modelVariation = 0.02;
        break;
    }
    
    // Add some random noise for variation
    const randomFactor = Math.random() * 0.1 - 0.05;
    
    // Calculate final probability
    let probability = baseProb + modelVariation + randomFactor;
    
    // Ensure probability is between 0 and 1
    probability = Math.max(0, Math.min(1, probability));
    
    // Determine prediction and confidence
    const prediction = probability >= 0.5;
    const confidence = prediction ? probability : 1 - probability;
    
    return {
      modelName: model,
      probability,
      prediction,
      confidence
    };
  });
};

// Simulated dataset for visualization
export const getDatasetDistribution = () => {
  return {
    labels: ['Healthy', 'Diabetic'],
    datasets: [
      {
        label: 'Dataset Distribution',
        data: [500, 268],
        backgroundColor: ['#0D9488', '#F97316'],
        borderWidth: 1
      }
    ]
  };
};

// Simulated correlation matrix for features
export const getFeatureCorrelations = () => {
  return {
    labels: ['Preg', 'Gluc', 'BP', 'Skin', 'Insulin', 'BMI', 'DP', 'Age'],
    datasets: [
      {
        label: 'Correlation with Outcome',
        data: [0.22, 0.47, 0.07, 0.16, 0.13, 0.29, 0.17, 0.24],
        backgroundColor: '#0891B2',
        borderColor: '#0891B2',
        borderWidth: 1
      }
    ]
  };
};