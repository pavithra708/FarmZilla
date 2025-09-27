from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
from flask_cors import CORS
CORS(app)

CORS(app)

with open('fertilizer_data.json', 'r') as f:
    data = json.load(f)

@app.route('/api/recommend-fertilizer', methods=['POST'])
def recommend():
    content = request.json
    required_fields = ['cropType', 'soilType', 'nitrogen', 'phosphorus', 'potassium']
    missing = [field for field in required_fields if field not in content]
    
    if missing:
        return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

    crop = content['cropType'].strip().lower()
    soil = content['soilType'].strip().lower()

    for entry in data:
        if entry['crop'].lower() == crop and entry['soil'].lower() == soil:
            fertilizer = entry["fertilizer"]
            return jsonify({
                "fertilizer": {
                    "name": fertilizer["name"],
                    "quantity": fertilizer["quantity"],
                    "method": fertilizer["method"],
                    "precautions": fertilizer["precautions"]
                }
            }), 200

    return jsonify({"fertilizer": {
        "name": "No suitable recommendation found",
        "quantity": "",
        "method": "",
        "precautions": ""
    }}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)