import { Node } from "@xyflow/react";
import { NodeRecord } from "../../lib/types";

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
