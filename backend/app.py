# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Backend Running Successfully!"

@app.route('/predict', methods=['POST'])
def predict():
    # Dummy prediction for now
    return jsonify({
        "temperature": 78,
        "humidity": 62,
        "uv_index": 3
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
