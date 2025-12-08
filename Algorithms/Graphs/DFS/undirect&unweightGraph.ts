class UndirectAndUnwieghtGraph {
  private adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  // IMPORTANT: For undirected graphs, add edge in BOTH DIRECTIONS
  addEdge(v1: number, v2: number): void {
    // Ensure both vertices exist
    this.addVertex(v1);
    this.addVertex(v2);

    // Add edge in both directions
    this.adjacencyList.get(v1)!.push(v2);
    this.adjacencyList.get(v2)!.push(v1);
  }

  // Get all neighbors of a vertex
  getNeighbors(vertex: number): number[] {
    return this.adjacencyList.get(vertex) || [];
  }

  // Get all vertices
  getVertices(): number[] {
    return Array.from(this.adjacencyList.keys());
  }

  // Print the graph
  print(): void {
    console.log("\n📊 Graph Structure:");
    for (const [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> [${neighbors.join(", ")}]`);
    }
  }
}

// DEPTH-FIRST SEARCH
// Recursive DFS - expolers as deep as possible before backtracking
function dfsRecursive(
  graph: UndirectAndUnwieghtGraph,
  start: number,
  visited: Set<number> = new Set()
): void {
  // Mark current node as visited
  visited.add(start);
  console.log(`Visited:, ${start}`);

  // Recursively visit all unvisited neighbors
  for (const neighbor of graph.getNeighbors(start)) {
    if (!visited.has(neighbor)) {
      dfsRecursive(graph, start, visited);
    }
  }
}
