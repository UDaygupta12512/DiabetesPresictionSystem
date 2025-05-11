import React from 'react';
import Card from '../components/ui/Card';
import ModelComparison from '../components/dashboard/ModelComparison';
import { MODEL_COLORS } from '../utils/constants';

const modelDescriptions = [
  {
    name: 'Logistic Regression',
    description: 'A statistical model that uses a logistic function to model a binary dependent variable. It is simple, efficient, and provides good baseline performance for many binary classification problems.',
    strengths: ['Simple and explainable', 'Computationally efficient', 'Works well for linearly separable data', 'Provides probability scores'],
    weaknesses: ['Cannot handle non-linear relationships well', 'May underperform with complex feature interactions'],
    color: MODEL_COLORS['Logistic Regression']
  },
  {
    name: 'Decision Tree',
    description: 'A model that predicts the value of a target variable by learning simple decision rules inferred from the data features. It splits the data into branches representing different outcomes.',
    strengths: ['Intuitive and easy to interpret', 'Handles both numerical and categorical data', 'Requires minimal data preprocessing', 'Captures non-linear patterns'],
    weaknesses: ['Prone to overfitting', 'Can be unstable (small changes in data can result in very different trees)'],
    color: MODEL_COLORS['Decision Tree']
  },
  {
    name: 'Random Forest',
    description: 'An ensemble learning method that operates by constructing multiple decision trees during training and outputting the class that is the mode of the classes of the individual trees.',
    strengths: ['Reduced risk of overfitting', 'Handles large datasets with higher dimensionality', 'Provides feature importance metrics', 'Generally high accuracy'],
    weaknesses: ['Less interpretable than single decision trees', 'Computationally more intensive', 'Slower prediction time'],
    color: MODEL_COLORS['Random Forest']
  },
  {
    name: 'Support Vector Machine',
    description: 'A supervised learning model that analyzes data for classification and regression analysis. SVM finds the hyperplane that best separates the classes in the feature space.',
    strengths: ['Effective in high-dimensional spaces', 'Memory efficient', 'Versatile through different kernel functions', 'Works well with clear margin of separation'],
    weaknesses: ['Not suitable for larger datasets (training can be slow)', 'Less effective with overlapping classes', 'Sensitive to feature scaling'],
    color: MODEL_COLORS['Support Vector Machine']
  },
  {
    name: 'Naive Bayes',
    description: 'A probabilistic classifier based on applying Bayes\' theorem with strong (naive) independence assumptions between the features. It assumes that the presence of a feature is unrelated to the presence of any other feature.',
    strengths: ['Simple and fast', 'Works well with high-dimensional data', 'Requires less training data', 'Handles missing values well'],
    weaknesses: ['Assumes feature independence (often unrealistic)', 'Limited by the "zero frequency" problem'],
    color: MODEL_COLORS['Naive Bayes']
  }
];

const Models: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Machine Learning Models</h1>
        <p className="mt-2 text-gray-600">
          Comparison of different machine learning algorithms used for diabetes prediction.
        </p>
      </div>
      
      <ModelComparison />
      
      <div className="space-y-6">
        <h2 className="text-xl font-medium text-gray-900">Model Overview</h2>
        
        <div className="grid grid-cols-1 gap-6">
          {modelDescriptions.map(model => (
            <Card key={model.name} className="border-l-4" style={{ borderLeftColor: model.color }}>
              <h3 className="text-lg font-medium text-gray-900">{model.name}</h3>
              <p className="mt-2 text-gray-600">{model.description}</p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Strengths</h4>
                  <ul className="space-y-1">
                    {model.strengths.map((strength, index) => (
                      <li key={index} className="text-sm flex items-baseline">
                        <span className="text-green-500 mr-2">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-700 mb-2">Limitations</h4>
                  <ul className="space-y-1">
                    {model.weaknesses.map((weakness, index) => (
                      <li key={index} className="text-sm flex items-baseline">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-gray-50 rounded-lg text-sm">
                <p className="text-gray-700">
                  <strong>Application in Diabetes Prediction:</strong> {
                    model.name === 'Logistic Regression' ? 
                      'Provides clear probability scores and is useful for understanding feature relationships in diabetes risk factors.' :
                    model.name === 'Decision Tree' ?
                      'Creates intuitive decision paths that can be explained to healthcare providers for diabetes screening.' :
                    model.name === 'Random Forest' ?
                      'Offers the highest accuracy in our comparison and provides insights into the most important predictors of diabetes.' :
                    model.name === 'Support Vector Machine' ?
                      'Performs well at finding the separation boundary between diabetic and non-diabetic cases, even with complex relationships.' :
                      'Efficient for rapid screening and works well even with limited patient data points.'
                  }
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <Card>
        <h3 className="text-lg font-medium text-gray-900">Model Selection Strategy</h3>
        <p className="mt-2 text-gray-600">
          For diabetes prediction, we've implemented multiple models to leverage their combined strengths. While Random Forest typically yields the highest accuracy, other models provide valuable insights and interpretability that can be useful in clinical settings.
        </p>
        <div className="mt-4 bg-cyan-50 p-4 rounded-lg">
          <p className="text-sm text-cyan-800">
            <strong>Best Practice:</strong> In medical applications, model transparency and explainability are often as important as raw accuracy. For critical healthcare decisions, the final prediction should be reviewed by healthcare professionals.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Models;