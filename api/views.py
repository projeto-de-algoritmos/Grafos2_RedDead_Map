from flask import json, request
from server import server
from models import GraphModel

app = server.app

cities = {
        "Blackwater": [
            "Strawberry",
            "Valentine",
            "Armadillo"
        ],
        "Valentine": [
            "Rhodes",
            "Blackwater",
            "Mount Hagen"
        ],
        "Annesburg": [
            "Van Horn",
            "Saint Denis",
            "Rhodes"
        ],
        "Van Horn": ["Annesburg"],
        "Saint Denis": [
            "Annesburg",
            "Rhodes"
        ],
        "Mount Hagen": ["Valentine"],
        "Rhodes": [
            "Valentine",
            "Saint Denis",
            "Annesburg"
        ],
        "Strawberry": [
            "Blackwater",
            "Armadillo"
        ],
        "Tumbleweed": ["Armadillo"],
        "Armadillo": [
            "Tumbleweed",
            "Strawberry",
            "Blackwater"
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
