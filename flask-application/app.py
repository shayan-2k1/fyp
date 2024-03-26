from flask import Flask, request, jsonify
import pandas as pd
import tensorflow as tf

loaded_model = tf.saved_model.load('saved_model')

def preprocess_data(input_data):
    df=pd.DataFrame(input_data)

    categorical_columns = ["Education_Level", "Country_Preference", "Domain_Area",
                       "Education_Preference", "Country_of_Scholarship",
                       "Eligible_Domain"]
    
    df_encoded = pd.get_dummies(df, columns=categorical_columns)
    expected_columns = loaded_model.input_shape[1]  
    if len(df_encoded.columns) < expected_columns:
        missing_columns = set(range(expected_columns)) - set(df_encoded.columns)
        for col in missing_columns:
            df_encoded[col] = 0
   
    df_encoded = df_encoded[loaded_model.input_shape[1]]

    input_array = df_encoded.values

    return input_array


app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    d1 = request.get_json()
    # Assuming the data is in the format suitable for your model
    input_d1 = preprocess_data(d1)
    # Make prediction
    prediction = loaded_model.predict(input_d1)
    return jsonify({'prediction': prediction.tolist()})

@app.route('/shortlist', methods=['POST'])
def shortlist():
    d2=request.get_json()

    input_d2=preprocess_data(d2)

if __name__ == '__main__':
    app.run(debug=True)
