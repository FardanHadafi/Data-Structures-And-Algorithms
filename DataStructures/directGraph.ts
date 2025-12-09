class DirectGraph {
  private adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to graph
  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add a directed edge from source to destination
  // IMPORTANT: Only add edge in ONE DIRECTION
  addEdge(from: number, to: number): void {
    this.addVertex(from);
    this.addVertex(to);
    // Only add from -> to (NOT BIDIRECTIONAL)
    this.adjacencyList.get(from)!.push(to);
  }

  // Get all neighbors (nodes we can reach FROM this node)
  getNeighbors(vertex: number): number[] {
    return this.adjacencyList.get(vertex) || [];
  }

  // Get all vertices
  getVertices(): number[] {
    return Array.from(this.adjacencyList.keys());
  }

  // Print the graph
  print(): void {
    console.log("\n📊 Graph Structure (Directed):");
    for (const [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> [${neighbors.join(", ")}]`);
    }
  }
}
