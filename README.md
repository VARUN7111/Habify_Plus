# Habify-Plus
Welcome to our fitness and wellness application - a seamless blend of technology and well-being. In this video, we'll explore the intricate components of our app, starting with the machine learning model that intelligently classifies users as either active or sedentary. Let's dive into the world of smart fitness tailored to your personal preferences.

# Machine Learning Model

- Our application employs a cutting-edge machine learning model to understand your activity level. Leveraging a robust set of features, it accurately classifies users as either active or sedentary. This ensures that personalized tasks are assigned to individuals when they are in a sedentary state, allowing for a tailored and effective wellness experience.
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

# Frontend Part

# LoginScreen Interface:

- Upon entering the app, users are greeted by a sleek login interface. Here, they can securely enter their credentials, utilizing the power of React Native's state management. The interface features an intuitive design with input fields for username and password, a logo image, and a seamless login button.

# HomeScreen Interface:

   - The HomeScreen serves as the hub of wellness statistics. A dynamic bar chart, powered by the react-native-chart-kit library, visually represents fitness progress. Accompanying badges showcase achievements, creating a comprehensive overview of the user's fitness journey.

# MeditationScreen Interface:

- For moments of tranquility, our MeditationScreen offers a serene experience. Users are guided through a breathing exercise, facilitated by React Native's state and effect hooks. The screen showcases a breathing icon, phase text, timer, and interactive buttons, creating an immersive meditation environment.

# MusicKeyboard Interface:

- Music aficionados will appreciate our MusicKeyboard interface. This component boasts a virtual keyboard that produces harmonious notes when pressed. The audio experience is enhanced by the Expo Audio library, generating a unique base64-encoded WAV file for each note. An inspirational quote at the bottom adds a touch of motivation.

# Navigation Interface:

- Effortless navigation is at the core of our app. The Navigation component provides a user-friendly menu for tasks, profile management, rewards, and contact options. React Navigation ensures a smooth transition between screens, with a straightforward design that keeps users engaged and in control.

# ProfileScreen Interface:

- Personalization is key, and our ProfileScreen offers just that. Users can effortlessly view and edit their profile information, thanks to React Native's state management. The intuitive interface seamlessly toggles between view and edit modes, ensuring a hassle-free user experience.

# RewardsPage Interface:

- Celebrate achievements with our RewardsPage. This component displays earned badges and a leaderboard, adding a competitive edge to wellness. While the badges and leaderboard are populated with dummy data, the share functionality provides a glimpse into future social features.

# RunActivity Interface:

- For the fitness enthusiasts, our RunActivity component brings real-time tracking to life. Leveraging Expo Location, users can start and stop running activities, complete with a mapped route and distance calculation. The getLocationAsync function ensures precise location data, creating a comprehensive running experience.

# TaskListScreen Interface:

- Tasks tailored to individual preferences await users in the TaskListScreen. This component showcases a list of tasks with corresponding icons, seamlessly navigating users to specific task screens. React Navigation once again plays a crucial role in creating a streamlined user journey.

# TreasureHuntScreen Interface:

- Embark on a virtual treasure hunt with our TreasureHuntScreen. This component combines the power of Expo Location to calculate distances and generate a treasure location. Users can explore their surroundings, adding an adventurous layer to their wellness journey.


- Our fitness and wellness application seamlessly integrates machine learning, thoughtful interface design, and cutting-edge technologies to provide a personalized and enriching experience. Join us on this journey towards a healthier and more balanced lifestyle.
  
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
