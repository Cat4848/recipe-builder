import { Edge, Node } from "@xyflow/react";
import { EdgeRecord, NodeRecord } from "../../lib/types";

export const convertNodes = (input: NodeRecord[]): Node[] => {
  const output: Node[] = input.map((node) => {
    const currentNode: Node = {
      id: String(node.node_id),
      data: { label: node.content },
      position: { x: node.position_x, y: node.position_y }
    };
    return currentNode;
  });
  return output;
};

export const convertEdges = (input: EdgeRecord[]): Edge[] => {
  const output = input.map((edge) => {
    const currentEdge: Edge = {
      id: String(edge.edge_id),
      source: String(edge.source),
      target: String(edge.target)
    };
    return currentEdge;
  });
  return output;
};
