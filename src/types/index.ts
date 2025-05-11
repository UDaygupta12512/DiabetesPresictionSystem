export interface PatientData {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  age: number;
}

export interface PredictionResult {
  modelName: string;
  probability: number;
  confidence: number;
  prediction: boolean;
}

export interface ModelPerformance {
  modelName: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  auc: number;
  color: string;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
  description: string;
}