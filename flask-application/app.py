from flask import Flask, request, jsonify
import pandas as pd
import tensorflow as tf
import numpy as np
from flask_cors import CORS
from sklearn.preprocessing import OneHotEncoder

loaded_model1 = tf.saved_model.load('recommender_system')
loaded_model2 = tf.saved_model.load('shortlisting_model')

def preprocess_recommender(input_data):
    df=pd.DataFrame(input_data, columns=["CGPA","Education_Level","Required_GPA","Scholarship_Level"])

    categorical_columns = ["Education_Level","Scholarship_Level"]
    
    df_encoded = pd.get_dummies(df, columns=categorical_columns)
    # expected_columns = loaded_model2.signatures["serving_default"].inputs[1].shape
    # if len(df_encoded.columns) < expected_columns:
    #     missing_columns = set(range(expected_columns)) - set(df_encoded.columns)
    #     for col in missing_columns:
    #         df_encoded[col] = 0
   
    df_encoded = df_encoded[loaded_model1.signatures["serving_default"].inputs[1].shape]

    input_array = df_encoded.values

    return np.array(input_array).reshape(-1,-1).astype('float32')

def preprocess_shortlist(input_data):
    df=pd.DataFrame(input_data, columns=["CGPA","Education_Level","Required_GPA","Scholarship_Level"])

    categorical_columns = ["Education_Level","Scholarship_Level"]
    
    df_encoded = pd.get_dummies(df, columns=categorical_columns)
    # expected_columns = loaded_model2.signatures["serving_default"].inputs[1].shape
    # if len(df_encoded.columns) < expected_columns:
    #     missing_columns = set(range(expected_columns)) - set(df_encoded.columns)
    #     for col in missing_columns:
    #         df_encoded[col] = 0
   
    df_encoded = df_encoded[loaded_model2.signatures["serving_default"].inputs[1].shape]

    input_array = df_encoded.values

    return np.array(input_array).reshape(-1,-1).astype('float32')



app = Flask(__name__)

CORS(app, origins=['http://localhost:3002'])  # Allow requests from http://localhost:3000 only


@app.route('/')
def hello():
    return "Hello World!!"

@app.route('/recommend', methods=['POST'])
def recommend():
    d1 = request.json
    # Assuming the data is in the format suitable for your model
    input_d1 = preprocess_recommender(d1)
    # Make prediction
    prediction = loaded_model1.signatures["serving_default"](tf.constant(input_d1, dtype=tf.float32))
    prediction_value=prediction['dense_3'].numpy()[0][0]
    return jsonify({'prediction': prediction_value})

@app.route('/shortlist', methods=['POST'])
def shortlist():
    # loaded_model_input_type = loaded_model2.signatures["serving_default"].inputs[0].shape
    # print("Loaded model input type:", loaded_model_input_type) 
    # dummy_data = np.array([[2.8,1,0,0,2.5,1,0,0]]).astype('float32')
    d2 = request.get_json()
    # Assuming the data is in the format suitable for your model
    input_d2 = preprocess_shortlist(d2)
    # Make prediction
    output = loaded_model2.signatures["serving_default"](tf.constant(input_d2, dtype=tf.float32))
    # prediction = output['output'].numpy()  # Assuming 'output' is the name of the output tensor
    prediction_value=output['dense_3'].numpy()[0][0]
    # return jsonify({'prediction': prediction.tolist()})
    return jsonify({'prediction': prediction_value})

if __name__ == '__main__':
    app.run()
