from flask import Flask, request
import pickle

app = Flask(__name__)

@app.route('/model', methods=['POST'])
def predict():
    user_input = # {price: 1000, }