import pandas as pd
import numpy as np
import random
import pickle

def prediction(data):
    load_model = open("/Users/varun/DS/Hackathon/Habify_Plus/habify_backend/status_model.pkl", 'rb')
    classifier = pickle.load(load_model)

    random_index = random.choice(data.index)
    random_row = data.loc[random_index]

    # Extract features from the random row
    features = random_row
    features = features.values.reshape(1, -1)

    # Make a prediction using the loaded model
    prediction = classifier.predict(features)

    # Print the output
    #print(f"Input Features: {random_row}")
    #print(f"Model Prediction: {prediction[0]}")
    return(prediction[0])

# Load the test dataset into a DataFrame
test_data = pd.read_csv("/Users/varun/DS/Hackathon/Habify_Plus/habify_backend/test_data.csv")

result = prediction(test_data)
print(result)