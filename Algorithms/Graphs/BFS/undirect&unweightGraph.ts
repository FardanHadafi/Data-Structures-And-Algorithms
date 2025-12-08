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

// BREADTH-FIRST SEARCH
// BFS explores level by level using a queue
function bfs(graph: UndirectAndUnwieghtGraph, start: number): void {
  const visited = new Set<number>();
  const queue: number[] = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift()!;
    console.log(`Visited:, ${node}`);

    // Add all unvisited neighbors to queue
    for (const neighbor of graph.getNeighbors(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
