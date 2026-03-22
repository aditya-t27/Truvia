import io
import os
from flask import Flask, request, jsonify  # type: ignore
from flask_cors import CORS  # type: ignore
from tensorflow.keras.models import load_model  # type: ignore
from tensorflow.keras.preprocessing import image  # type: ignore
import numpy as np  # type: ignore


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

MODEL_PATH = 'best_final_emotion_model.h5'
model = load_model(MODEL_PATH)
class_labels = ['angry', 'disgust', 'fear', 'happy', 'neutral', 'sad', 'surprise']

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    file_store = request.files['file']
    file_bytes = file_store.read()
    file = io.BytesIO(file_bytes)
    try:
        img = image.load_img(file, target_size=(48, 48), color_mode="grayscale")
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0
        predictions = model.predict(img_array)
        predicted_class = int(np.argmax(predictions))
        confidence = float(np.max(predictions))
        probs = {label: float(pred) for label, pred in zip(class_labels, predictions[0])}
        return jsonify({
            'emotion': class_labels[predicted_class],
            'confidence': confidence,
            'probabilities': probs
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    debug = os.getenv("FLASK_DEBUG", "").strip() in ("1", "true", "True", "yes", "YES")
    port = int(os.getenv("PORT", "5001"))
    app.run(debug=debug, host='0.0.0.0', port=port)
