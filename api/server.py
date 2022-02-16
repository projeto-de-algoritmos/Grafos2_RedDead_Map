from flask import Flask
from flask_cors import CORS

class Server():
    """
    Instance class of API server
    """
    def __init__(self) -> None:
        self.app = Flask(__name__)
        CORS(self.app)

    def run(self) -> None:
        self.app.run(debug=True, host="0.0.0.0")


server = Server()
