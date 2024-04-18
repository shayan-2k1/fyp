from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import pickle
from flask_cors import CORS
from tensorflow.keras.models import load_model

app = Flask(__name__)

# CORS(app, origins='http://127.0.0.1:3001')
CORS(app)
# Load the saved model
loaded_model1 = load_model("./recommender_system/my_model.h5")
loaded_model2 = load_model("./shortlisting_model/my_model.h5")

# Load label encoder from disk
with open("./recommender_system/label_encoders.pkl", "rb") as f:
    label_encoder1 = pickle.load(f)

with open("./shortlisting_model/label_encoders.pkl", "rb") as f:
    label_encoder2 = pickle.load(f)


# Load the scaler
with open("./recommender_system/scaler.pkl", "rb") as f:
    scaler1 = pickle.load(f)


with open("./shortlisting_model/scaler.pkl", "rb") as f:
    scaler2 = pickle.load(f)

# Endpoint for prediction
@app.route('/recommend', methods=['POST'])
def recommend():
    # Get JSON data from the POST request
    data = request.get_json()

    print(data)

    # Sample raw data from JSON
    raw_data = pd.DataFrame(data)

    # Initialize an empty DataFrame to store encoded raw data
    encoded_raw_data = pd.DataFrame()
    
    
    # Encode categorical features in the raw data using the loaded label encoders
    for col in raw_data.columns:
        if col in label_encoder1:
            label_encoder_col = label_encoder1[col]
            encoded_raw_data[col] = label_encoder_col.transform(raw_data[col])

    # Scale the encoded raw data using the loaded scaler
    scaled_raw_data = scaler1.transform(encoded_raw_data)

    # Make predictions with the loaded model
    predictions = loaded_model1.predict(scaled_raw_data)

    # Set the threshold
    threshold = 0.5

    print(predictions[0][0])

    # Apply threshold to convert probabilities to class labels
    binary_predictions = (predictions > threshold).astype(int)

    # Return predictions as JSON response
    print({'predictions': binary_predictions.flatten().tolist()})
    return jsonify({'predictions': binary_predictions.flatten().tolist()})

@app.route('/shortlist', methods=['POST'])
def shortlist():
    
    # Get JSON data from the POST request
    data = request.get_json()

    
    # Sample raw data from JSON
    raw_data = pd.DataFrame(data)

    # Initialize an empty DataFrame to store encoded raw data
    encoded_raw_data = pd.DataFrame()

    # Encode categorical features in the raw data using the loaded label encoders
    for col in raw_data.columns:
        if col in label_encoder2:
            label_encoder_col = label_encoder2[col]
            encoded_raw_data[col] = label_encoder_col.transform(raw_data[col])
        else:
            encoded_raw_data[col] = raw_data[col]

# Scale the numerical columns
# scaled_numeric_data = scaler.transform(raw_data[numeric_cols])
    scaled_numeric_data = scaler2.transform(encoded_raw_data)

    print(scaled_numeric_data)
# Make predictions with the loaded model
    predictions = loaded_model2.predict(scaled_numeric_data)

    # Set the threshold
    threshold = 0.5
    print(predictions)

    # Apply threshold to convert probabilities to class labels
    binary_predictions = (predictions > threshold).astype(int)

    # Return predictions as JSON response
    return jsonify({'predictions': binary_predictions.flatten().tolist()})

if __name__ == '__main__':
    app.run(debug=True)
