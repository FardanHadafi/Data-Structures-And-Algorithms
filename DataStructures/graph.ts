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

  // Breadth-First Search (BFS)
  bfs(startVertex: T): T[] {
    if (!this.adjacencyList.has(startVertex)) return [];

    const visited = new Set<T>();
    const queue: T[] = [startVertex];
    const result: T[] = [];

    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)!) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  // Depth-First Search (DFS)
  dfs(startVertex: T): T[] {
    if (!this.adjacencyList.has(startVertex)) return [];

    const visited = new Set<T>();
    const result: T[] = [];

    const dfsHelper = (vertex: T) => {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)!) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(startVertex);
    return result;
  }

  // Find shortest path between two vertices (unweighted)
  shortestPath(start: T, end: T): T[] | null {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      return null;
    }

    const queue: T[] = [start];
    const visited = new Set<T>([start]);
    const parent = new Map<T, T | null>();
    parent.set(start, null);

    while (queue.length > 0) {
      const vertex = queue.shift()!;

      if (vertex === end) {
        // Reconstruct path
        const path: T[] = [];
        let current: T | null = end;
        while (current !== null) {
          path.unshift(current);
          current = parent.get(current)!;
        }
        return path;
      }

      for (const neighbor of this.adjacencyList.get(vertex)!) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent.set(neighbor, vertex);
          queue.push(neighbor);
        }
      }
    }

    return null; // No path found
  }

  print(): void {
    for (const [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> ${Array.from(neighbors).join(", ")}`);
    }
  }
}

// Directed Graph
class DirectedGraph<T> {
  private adjacencyList: Map<T, Set<T>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
  }

  addEdge(from: T, to: T): void {
    this.addVertex(from);
    this.addVertex(to);
    this.adjacencyList.get(from)!.add(to);
  }

  // Topological Sort (for DAG - Directed Acyclic Graph)
  topologicalSort(): T[] | null {
    const visited = new Set<T>();
    const recursionStack = new Set<T>();
    const result: T[] = [];

    const dfs = (vertex: T): boolean => {
      visited.add(vertex);
      recursionStack.add(vertex);

      for (const neighbor of this.adjacencyList.get(vertex)!) {
        if (!visited.has(neighbor)) {
          if (!dfs(neighbor)) return false;
        } else if (recursionStack.has(neighbor)) {
          return false; // Cycle detected
        }
      }

      recursionStack.delete(vertex);
      result.unshift(vertex);
      return true;
    };

    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        if (!dfs(vertex)) {
          return null; // Graph has a cycle
        }
      }
    }

    return result;
  }

  print(): void {
    for (const [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> ${Array.from(neighbors).join(", ")}`);
    }
  }
}

// Weighted Graph (for Dijkstra's algorithm)
class WeightedGraph {
  private adjacencyList: Map<string, Map<string, number>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Map());
    }
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1)!.set(vertex2, weight);
    this.adjacencyList.get(vertex2)!.set(vertex1, weight);
  }

  // Dijkstra's Shortest Path Algorithm
  dijkstra(
    start: string,
    end: string
  ): { path: string[]; distance: number } | null {
    const distances = new Map<string, number>();
    const previous = new Map<string, string | null>();
    const unvisited = new Set<string>();

    // Initialize
    for (const vertex of this.adjacencyList.keys()) {
      distances.set(vertex, vertex === start ? 0 : Infinity);
      previous.set(vertex, null);
      unvisited.add(vertex);
    }

    while (unvisited.size > 0) {
      // Find vertex with minimum distance
      let minVertex: string | null = null;
      let minDistance = Infinity;
      for (const vertex of unvisited) {
        const dist = distances.get(vertex)!;
        if (dist < minDistance) {
          minDistance = dist;
          minVertex = vertex;
        }
      }

      if (minVertex === null || minDistance === Infinity) break;

      unvisited.delete(minVertex);

      if (minVertex === end) break;

      // Update distances to neighbors
      for (const [neighbor, weight] of this.adjacencyList.get(minVertex)!) {
        if (unvisited.has(neighbor)) {
          const newDistance = distances.get(minVertex)! + weight;
          if (newDistance < distances.get(neighbor)!) {
            distances.set(neighbor, newDistance);
            previous.set(neighbor, minVertex);
          }
        }
      }
    }

    // Reconstruct path
    if (distances.get(end) === Infinity) return null;

    const path: string[] = [];
    let current: string | null = end;
    while (current !== null) {
      path.unshift(current);
      current = previous.get(current)!;
    }

    return {
      path,
      distance: distances.get(end)!,
    };
  }

  print(): void {
    for (const [vertex, neighbors] of this.adjacencyList) {
      const edges = Array.from(neighbors.entries())
        .map(([n, w]) => `${n}(${w})`)
        .join(", ");
      console.log(`${vertex} -> ${edges}`);
    }
  }
}

// ============ EXAMPLES ============

console.log("=== Undirected Graph Example ===");
const socialNetwork = new UnDirectedGraph<string>();
socialNetwork.addEdge("Alice", "Bob");
socialNetwork.addEdge("Alice", "Charlie");
socialNetwork.addEdge("Bob", "David");
socialNetwork.addEdge("Charlie", "David");
socialNetwork.addEdge("David", "Eve");

console.log("\nSocial Network:");
socialNetwork.print();

console.log("\nBFS from Alice:", socialNetwork.bfs("Alice"));
console.log("DFS from Alice:", socialNetwork.dfs("Alice"));
console.log(
  "Shortest path Alice to Eve:",
  socialNetwork.shortestPath("Alice", "Eve")
);

console.log("\n=== Directed Graph Example (Task Dependencies) ===");
const tasks = new DirectedGraph<string>();
tasks.addEdge("wake up", "brush teeth");
tasks.addEdge("wake up", "make coffee");
tasks.addEdge("brush teeth", "eat breakfast");
tasks.addEdge("make coffee", "eat breakfast");
tasks.addEdge("eat breakfast", "go to work");

console.log("\nTask Dependencies:");
tasks.print();
console.log("\nTopological Sort (valid task order):", tasks.topologicalSort());

console.log("\n=== Weighted Graph Example (City Distances) ===");
const cities = new WeightedGraph();
cities.addEdge("New York", "Boston", 215);
cities.addEdge("New York", "Philadelphia", 95);
cities.addEdge("Philadelphia", "Washington DC", 140);
cities.addEdge("Boston", "Washington DC", 440);
cities.addEdge("New York", "Washington DC", 225);

console.log("\nCity Distances:");
cities.print();

const route = cities.dijkstra("Boston", "Washington DC");
if (route) {
  console.log(`\nShortest route from Boston to Washington DC:`);
  console.log(`Path: ${route.path.join(" -> ")}`);
  console.log(`Distance: ${route.distance} miles`);
}
