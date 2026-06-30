export type TraversalState = "unvisited" | "visiting" | "visited" | "path";

export type Algorithm = "BFS" | "DFS" | "Dijkstra";

export interface Node {
  id: string;
  x: number;
  y: number;
  state: TraversalState;
}

export interface Edge {
  from: string;
  to: string;
  weight?: number;
}

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export interface ParserResult {
  graph: Graph;
  errors?: string[];
}
