class GraphModel():
    
    def __init__(self, edges: dict) -> None: 
        """
        Init graph as a dictionary

        edges = { "A": ["B", "C"], "B": ["A"] }
        """
        self.graph = dict
        self.add_edges(edges)
    
    def add_edges(self, edges: dict) -> None:
        """
        Add edges to graph as dictionary of lists
        """
        self.graph = edges

    def get_edges(self) -> None:
        """
        Returns all graph's edges
        """
        edges = []
        for key in self.graph.keys():
            edges.append((key, self.graph[key]))
        return edges

    def get_nodes(self) -> list:
        """
        Returns all graph's nodes
        """
        return list(self.graph.keys())

    def get_neighbors(self) -> dict:
        """
        Returns all neighbors from graph
        """
        return self.graph

    def find_shortest_path(self, start: str, end: str, path=[]) -> list:
        """
        Find shortest path using BFS seach on the graph
        """
        explored = list()
        queue = list()
        queue.append([start])

        if start == end:
            return queue # start point is equal to end point
        
        while queue:
            path = queue.pop(0)
            node = path[-1]

            if node not in explored:
                neighbors = self.graph.get(node, [])
                for neighbour in neighbors:
                    new_path = list(path)
                    new_path.append(neighbour)
                    queue.append(new_path)

                    if neighbour == end:
                        return new_path # returns shortest path

        return False # there is no possible path