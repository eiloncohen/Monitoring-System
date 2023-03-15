import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.get("/dummy")
def dummy_data():
    filename = "Monitoring-System\\backend\\dummy.json"
    cwd = os.getcwd()
    file_path = os.path.join(cwd, filename)
    with open(file_path) as f:
        dummy = json.load(f)['dummy']
    print(dummy)
    return jsonify(dummy)


if __name__ == '__main__':
    app.run(port=5000)