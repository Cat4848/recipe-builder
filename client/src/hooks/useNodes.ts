import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Node } from "@xyflow/react";

export const useNodes = (url: string) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  useEffect(() => {
    fetchNodes(url).then(
      (nodes) => {
        setNodes(nodes);
      },
      (error: Error) => {
        toast.error(error.message);
      }
    );
  }, [url]);
  return nodes;
};

const fetchNodes = (url: string) => {
  return new Promise<Node[]>(async (resolve, reject) => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const nodes: Node[] = await res.json();
        resolve(nodes);
      } else {
        const errorMessage = await res.text();
        reject(new Error(errorMessage));
      }
    } catch (e) {
      if (e instanceof Error) {
        reject(e);
      } else {
        reject(new Error(JSON.stringify(e)));
      }
    }
  });
};
