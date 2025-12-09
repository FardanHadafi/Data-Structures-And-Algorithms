// ============================================
// DIRECTED WEIGHTED GRAPH - COMPLETE GUIDE
// ============================================

// A directed weighted graph where:
// - Edges HAVE direction (A → B doesn't mean B → A)
// - Edges have WEIGHTS/COSTS (distances, prices, time)
// - Think: Flight routes with prices, network delays, road distances

// ============================================
// 1. GRAPH REPRESENTATION
// ============================================

// Edge representation: [destination, weight]
type WeightedEdge = [number, number];
class DirectedWeightedGraph {
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

  // Get all neighbors
  getNeighbors(vertex: number): WeightedEdge[] {
    return this.adjacencyList.get(vertex) || [];
  }

  // Get all vertices
  getVertices(): number[] {
    return Array.from(this.adjacencyList.keys());
  }

  // Print the graph
  print(): void {
    console.log("\n📊 Graph Structure (Directed + Weighted)");
    for (const [vertex, edges] of this.adjacencyList) {
      const edgeStr = edges
        .map(([to, weight]) => `${to}(w:${weight})`)
        .join(", ");
      console.log(`${vertex} -> [${edgeStr}]`);
    }
  }
}

// ============================================
// 2. DIJKSTRA'S ALGORITHM ⭐⭐⭐ (MOST IMPORTANT!)
// ============================================

// Finds SHORTEST PATH from source to all other nodes
// Works ONLY with NON-NEGATIVE weights
// Time: O((V + E) log V) with min-heap
interface DijkstraResult {
  distances: Map<number, number>;
  previous: Map<number, number | null>;
}
function dijkstra(graph: DirectedWeightedGraph, start: number): DijkstraResult {
  const distances = new Map<number, number>();
  const previous = new Map<number, number | null>();
  const visited = new Set<number>();

  // Min-Heap: [distance, node]
  // In production, use a proper priority queue/heap
  const pq: [number, number][] = [];

  // Initialize distances
  for (const vertex of graph.getVertices()) {
    distances.set(vertex, Infinity);
    previous.set(vertex, null);
  }
  distances.set(start, 0);
  pq.push([0, start]);

  while (pq.length > 0) {
    // Sort to simulate min-heap (in production, use proper heap)
    pq.sort((a, b) => a[0] - b[0]);
    const [currentDist, node] = pq.shift()!;

    // Skip if already processed
    if (visited.has(node)) continue;
    visited.add(node);

    // Explore neighbors
    for (const [neighbors, weight] of graph.getNeighbors(node)) {
      const newDist = currentDist + weight;

      // Found shorter path ?
      if (newDist < distances.get(neighbors)!) {
        distances.set(neighbors, newDist);
        previous.set(neighbors, node);
        pq.push([newDist, neighbors]);
      }
    }
  }
  return { distances, previous };
}

// Reconstruc shortest path from source to target
function getShortestPath(
  previous: Map<number, number | null>,
  start: number,
  end: number
): number[] | null {
  const path: number[] = [];
  let current: number | null = end;

  while (current !== null) {
    path.unshift(current);
    if (current === start) return path;
    current = previous.get(current)!;
  }
  return null; // No path found;
}
