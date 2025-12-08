// Graph Node/Vertex class
class GraphNode<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

// Undirected Graph using Adjacency List
class UnDirectedGraph<T> {
  private adjacencyList: Map<T, Set<T>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  addEdge(vertex1: T, vertex2: T): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1)!.add(vertex2);
    this.adjacencyList.get(vertex2)!.add(vertex1);
  }

  removeEdge(vertex1: T, vertex2: T): void {
    this.adjacencyList.get(vertex1)?.delete(vertex2);
    this.adjacencyList.get(vertex2)?.delete(vertex1);
  }

  removeVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) return;

    // Remove all edges connected to this vertex
    for (const adjacentVertex of this.adjacencyList.get(vertex)!) {
      this.adjacencyList.get(adjacentVertex)!.delete(vertex);
    }

    this.adjacencyList.delete(vertex);
  }

  getNeighbors(vertex: T): T[] {
    return Array.from(this.adjacencyList.get(vertex) || []);
  }

  hasEdge(vertex1: T, vertex2: T): boolean {
    return this.adjacencyList.get(vertex1)?.has(vertex2) || false;
  }
}
