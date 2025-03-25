from flask import Flask, request, jsonify
from transformers import AutoModelForSequenceClassification, AutoTokenizer
from pymongo import MongoClient
import torch

# Initialize Flask app
app = Flask(_name_)

# MongoDB connection (make sure to replace with your actual MongoDB URI)
client = MongoClient('mongodb+srv://dhandhukiyatushar4777:Tushar1234@cluster0.lecee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client['hospital_db']  # Replace with your database name
patients_collection = db['patients']  # Replace with your collection name

# Load your trained model and tokenizer
model = AutoModelForSequenceClassification.from_pretrained('./')  # Replace with your model path
tokenizer = AutoTokenizer.from_pretrained('./')  # Replace with your tokenizer path

@app.route('/get_patient_info', methods=['POST'])
def get_patient_info():
    # Receive the data from the frontend (JSON format)
    data = request.get_json()
    patient_name = data.get('name')
    patient_age = data.get('age')
    condition = data.get('condition')
    medications = data.get('medications')

    # Prepare the input for the model
    input_text = f"Patient Name: {patient_name}, Age: {patient_age}, Condition: {condition}, Medications: {medications}"
    inputs = tokenizer(input_text, return_tensors="pt")

    # Make prediction using the model
    with torch.no_grad():
        output = model(**inputs)

    # Get the predicted condition (based on the model's output)
    predicted_condition = output.logits.argmax(-1).item()

    # Store the patient information and prediction in MongoDB
    patient_data = {
        "name": patient_name,
        "age": patient_age,
        "condition": condition,
        "medications": medications,
        # "predicted_condition": predicted_condition
    }
    patients_collection.insert_one(patient_data)  # Store data in MongoDB

    # Return the prediction as a response (JSON format)
    return jsonify({"predicted_condition": predicted_condition})

# Run the Flask app
if _name_ == '_main_':
    app.run(port=5000)