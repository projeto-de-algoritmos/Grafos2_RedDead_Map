from flask import json, request
from server import server
from models import GraphModel

app = server.app

cities = {
        "Blackwater": [
            ("Strawberry", 5),
            ("Valentine", 10),
            ("Armadillo", 15)
        ],
        "Valentine": [
            ("Rhodes", 5),
            ("Blackwater", 10),
            ("Mount Hagen", 15)
        ],
        "Annesburg": [
            ("Van Horn", 5),
            ("Saint Denis", 10),
            ("Rhodes", 15)
        ],
        "Van Horn": [("Annesburg", 5)],
        "Saint Denis": [
            ("Annesburg", 5),
            ("Rhodes", 10)
        ],
        "Mount Hagen": [("Valentine", 5)],
        "Rhodes": [
            ("Valentine", 5),
            ("Saint Denis", 10),
            ("Annesburg", 15)
        ],
        "Strawberry": [
            ("Blackwater", 5),
            ("Armadillo", 10)
        ],
        "Tumbleweed": [("Armadillo", 5)],
        "Armadillo": [
            ("Tumbleweed", 5),
            ("Strawberry", 10),
            ("Blackwater", 15)
        ]
}

graph = GraphModel(edges=cities)

class RedDeadCitiesView():
    """main view of Red Dead API"""

    @app.route('/', methods=['GET'])
    def get() -> dict:
        """get method"""
        cities_obj = json.dumps(cities)

        if not cities_obj:
            error_response = {"status": "fail", "message": "Have no cities."}
            return json.dumps(error_response), 404

        return cities_obj, 200

    @app.route('/path', methods=['POST'])
    def post() -> list:
        """returns shortest path between two cities"""
        body = request.get_json()

        error_response = {"status": "fail", "message": "Invalid payload."}
        
        if not body:
            return json.dumps(error_response), 400

        try:
            start = body.get("start")
            end = body.get("end")
            best_way = graph.find_shortest_path(start=start, end=end)
        except KeyError:
            return json.dumps(error_response), 400
        except Exception:
            response = {
                "status": "fail",
                "message": "Could not find the best way to this mission."
            }
            return json.dumps(response), 400

        return json.dumps(best_way), 200

    @app.route('/cities', methods=['GET'])
    def get_cities() -> dict:
        """returns all nodes"""
        nodes = json.dumps(graph.get_nodes())

        if not nodes:
            error_response = {"status": "fail", "message": "Invalid payload."}
            return json.dumps(error_response), 404

        return nodes, 200
