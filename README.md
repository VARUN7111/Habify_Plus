# Habify-Plus
Junction Hackathon 2023 Submission: Leveraging an ML model, our app predicts children's sedentary behavior and provides engaging challenges to promote an active lifestyle. Transforming wearables and mobiles into tools for health and wellness. #JunctionHackathon #MLforHealth #ChildWellness

# About the Project

- The data for this project was imported from kaggle datasets. which is huge in size when compared to any other tabular data of accelerometer. Which is going to precursor our success of the project by mitigating the defieciency of data for training.

- This project was developed in python with most common python packages. All the predictions are made using classical machine learning methods.


<br/>

# Built With

The below mentioned are some of the most cardinal python modules used in this project

- Numpy 
- Pandas
- Matplotlib
- Seaborn
- sklearn
- Glob
- Pickle

<br/>

# Getting Started

- The below steps are to be executed in the order mentioned for orderly processing and non-disruptive execution.

- Certainly! Here's a breakdown of the code with detailed descriptions for each subsection:

## Importing Libraries
- This section imports the necessary Python libraries for data analysis, visualization, and machine learning. Notable libraries include pandas for data manipulation, numpy for numerical operations, matplotlib and seaborn for plotting, and scikit-learn for machine learning tasks.

## Reading the Data
- In this section, accelerometer data is ingested into a pandas DataFrame for further analysis. Accelerometer data typically includes information about the participant, timestamp, and acceleration along the x, y, and z axes. The data is loaded using the pandas read_csv function, with specific column names assigned during the import process.

- The accelerometer data may have been collected from mobile devices or wearables, capturing the participant's movements during various activities. Activities are often represented by specific codes, and a mapping is created to associate these codes with human-readable activity names.

## Exploratory Data Analysis (EDA)
- The show_accel_per_activity function is defined to visualize the acceleration time history for each activity. It uses matplotlib to plot the acceleration along the x, y, and z axes.

## Preprocessing Data
- The script reads multiple accelerometer data files, excludes some activities, and transforms the target variable into a binary classification task. It drops unnecessary columns and performs exploratory data analysis, including distribution plots for key features.

## Outlier Detection & Scaling
- Outliers are detected for features like XPEAK, YPEAK, and ZPEAK. Data points exceeding nine times the standard deviation from the mean are considered outliers and removed. 
- The script scales the selected features using MaxAbsScaler to bring them to a similar scale. The scaling parameters are saved for later use.

## Classification
- Two classifiers, Logistic Regression and K-Nearest Neighbors, are trained using the preprocessed data. Grid search is used to find optimal hyperparameters. Model evaluation metrics such as accuracy, confusion matrix, and classification report are computed.

## Model Evaluation
- The Logistic Regression model achieves an accuracy of 97%
- The K-Nearest Neighbors model achieves 98%.
- In the model evaluation phase, the Logistic Regression model demonstrates strong performance, achieving an accuracy of 97%. Considering the evaluation metrics, including accuracy, confusion matrix, and classification report, the Logistic Regression model is selected as the final model for the task at hand. The model is saved for future use using pickle, indicating its suitability for deployment in scenarios requiring activity classification based on accelerometer data.

## Conclusion
- This script demonstrates a comprehensive data preprocessing and machine learning pipeline for accelerometer data classification. It includes data cleaning, exploratory data analysis, outlier detection, scaling, and model training and evaluation. The final models can be used for predicting sedentary and active activities based on accelerometer data.

# Contributors
   
- Varun Shanmugam
- Kamal
- Nithin
- Sudharsan


 # Contact Info

Name: Varun Shanmugam\
Github ID: VARUN7111\
Repository Name: Habify-Plus\
Email ID: varun33366@gmail.com\
Contact: +358 0415767254
