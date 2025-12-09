// Edge representation: [destination, weight]
type WeightedEdge = [number, number];

class DirectAndWeightedGraph {
  private adjacencyList: Map<number, WeightedEdge[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  // Add vertex
  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add directed edge with weight
  addEdge(from: number, to: number, weight: number): void {
    this.addVertex(from);
    this.addVertex(to);

    // Only add from -> to with weight (DIRECTED)
    this.adjacencyList.get(from)!.push([to, weight]);
  }

  // Get all neighbor
  getNeighbors(vertex: number): WeightedEdge[] {
    return this.adjacencyList.get(vertex) || [];
  }

  // Get all vertices
  getVertices(): number[] {
    return Array.from(this.adjacencyList.keys());
  }

  // Print the graph
  print(): void {
    console.log("\n📊 Graph Structure (Direct + Weighted)");
    for (const [vertex, edges] of this.adjacencyList) {
      const edgeStr = edges
        .map(([to, weight]) => `${to}(w:${weight})`)
        .join(", ");
      console.log(`${vertex} -> [${edgeStr}]`);
    }
  }
}
