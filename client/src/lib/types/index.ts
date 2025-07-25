export interface NodeRecord {
  node_id: number;
  position_x: number;
  position_y: number;
  type: string;
  content: string;
}

export interface EdgeRecord {
  edge_id: number;
  source: number;
  target: number;
}