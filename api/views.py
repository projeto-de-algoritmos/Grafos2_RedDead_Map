from flask import json, request
from server import server
from models import GraphModel

app = server.app

cities = {
        "Blackwater": [
            ("Strawberry", 432),
            ("Valentine", 710),
            ("Armadillo", 957)
        ],
        "Valentine": [
            ("Rhodes", 873),
            ("Blackwater", 710),
            ("Mount Hagen", 442)
        ],
        "Annesburg": [
            ("Van Horn", 365),
            ("Saint Denis", 903),
            ("Rhodes", 1098)
        ],
        "Van Horn": [("Annesburg", 365)],
        "Saint Denis": [
            ("Annesburg", 903),
            ("Rhodes", 559)
        ],
        "Mount Hagen": [("Valentine", 442)],
        "Rhodes": [
            ("Valentine", 873),
            ("Saint Denis", 559),
            ("Annesburg", 1098)
        ],
        "Strawberry": [
            ("Blackwater", 432),
            ("Armadillo", 957)
        ],
        "Tumbleweed": [("Armadillo", 680)],
        "Armadillo": [
            ("Tumbleweed", 680),
            ("Strawberry", 887),
            ("Blackwater", 957)
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
            best_way, total_distance = graph.find_shortest_path(start=start, end=end)
            print(best_way, total_distance)
        except KeyError:
            return json.dumps(error_response), 400
        except Exception:
            response = {
                "status": "fail",
                "message": "Could not find the best way to this mission."
            }
            return json.dumps(response), 400

        response = {
          "path": best_way,
          "distance": total_distance
        }
        
        return json.dumps(response), 200

    @app.route('/cities', methods=['GET'])
    def get_cities() -> dict:
        """returns all nodes"""
        nodes = json.dumps(graph.get_nodes())

        if not nodes:
            error_response = {"status": "fail", "message": "Invalid payload."}
            return json.dumps(error_response), 404

        return nodes, 200
