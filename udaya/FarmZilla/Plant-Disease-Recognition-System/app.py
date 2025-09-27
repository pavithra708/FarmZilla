from flask import Flask, request, render_template, jsonify, send_from_directory
import numpy as np
import tensorflow as tf
from tensorflow import keras
import uuid
import os
import json
from flask_cors import CORS

app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

# Load model
model = keras.models.load_model("models/plant_disease_recog_model_pwp.keras")

# Load disease mapping
with open("plant_disease.json", 'r') as file:
    plant_disease = json.load(file)

# Create upload folder
UPLOAD_FOLDER = 'uploadimages'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def extract_features(image_path):
    image = keras.utils.load_img(image_path, target_size=(160, 160))
    image_array = keras.utils.img_to_array(image)
    image_array = np.expand_dims(image_array, axis=0)
    return image_array

def model_predict(image_path):
    features = extract_features(image_path)
    prediction = model.predict(features)
    prediction_index = prediction.argmax()
    return plant_disease[prediction_index]

# Serve uploaded images
@app.route('/uploadimages/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'img' not in request.files:
        return render_template('home.html', error="No file part")

    file = request.files['img']
    if file.filename == '':
        return render_template('home.html', error="No file selected")

    temp_filename = f"{uuid.uuid4().hex}_{file.filename}"
    temp_path = os.path.join(UPLOAD_FOLDER, temp_filename)
    file.save(temp_path)

    try:
        prediction = model_predict(temp_path)
        # Use URL to serve image
        image_url = f"/uploadimages/{temp_filename}"
        return render_template('home.html', result=True, imagepath=image_url, prediction=prediction)
    except Exception as e:
        return render_template('home.html', error=str(e))

if __name__ == "__main__":
    app.run(debug=False, port=5000)
