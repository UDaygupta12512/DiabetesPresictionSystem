export const MODEL_NAMES = [
  'Logistic Regression',
  'Decision Tree',
  'Random Forest',
  'Support Vector Machine',
  'Naive Bayes'
];

export const MODEL_COLORS = {
  'Logistic Regression': '#0891B2', // Primary
  'Decision Tree': '#0D9488', // Secondary
  'Random Forest': '#F97316', // Accent
  'Support Vector Machine': '#4338CA', // Purple
  'Naive Bayes': '#A855F7' // Violet
};

export const FEATURE_DESCRIPTIONS = {
  pregnancies: 'Number of times pregnant',
  glucose: 'Plasma glucose concentration (2 hours after glucose tolerance test)',
  bloodPressure: 'Diastolic blood pressure (mm Hg)',
  skinThickness: 'Triceps skin fold thickness (mm)',
  insulin: '2-Hour serum insulin (mu U/ml)',
  bmi: 'Body mass index (weight in kg/(height in m)²)',
  diabetesPedigree: 'Diabetes pedigree function (genetic influence)',
  age: 'Age in years'
};

export const FEATURE_RANGES = {
  pregnancies: { min: 0, max: 17, step: 1 },
  glucose: { min: 0, max: 200, step: 1 },
  bloodPressure: { min: 0, max: 122, step: 1 },
  skinThickness: { min: 0, max: 99, step: 1 },
  insulin: { min: 0, max: 846, step: 1 },
  bmi: { min: 0, max: 67.1, step: 0.1 },
  diabetesPedigree: { min: 0.078, max: 2.42, step: 0.001 },
  age: { min: 21, max: 81, step: 1 }
};

export const SAMPLE_PATIENT_DATA = {
  pregnancies: 6,
  glucose: 148,
  bloodPressure: 72,
  skinThickness: 35,
  insulin: 0,
  bmi: 33.6,
  diabetesPedigree: 0.627,
  age: 50
};

export const NAVIGATION_ITEMS = [
  { name: 'Dashboard', path: '/', icon: 'LayoutDashboard' },
  { name: 'Prediction', path: '/prediction', icon: 'BarChart' },
  { name: 'Models', path: '/models', icon: 'CircuitBoard' },
  { name: 'Data', path: '/data', icon: 'Database' },
  { name: 'About', path: '/about', icon: 'Info' }
];