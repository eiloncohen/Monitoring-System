import json
import random
import time

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.get("/dummy")
def dummy_data():
    with open("dummy.json") as f:
        dummy = json.load(f)['dummy']
    print(dummy)
    with open("dummy.json") as f:
        dummy = json.load(f)['dummy']
        dummy[3]["state"] = random.choice(["work", "detect", "solved"])
        print(dummy)
        time.sleep(5)
    print(dummy)
    return jsonify(dummy)



if __name__ == '__main__':
    app.run(port=5000)