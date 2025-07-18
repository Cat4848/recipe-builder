import { useState, useEffect } from "react";
import { NodeRecord } from "../lib/types";
import { toast } from "react-toastify";

export const useNodes = (url: string) => {
  const [nodes, setNodes] = useState<NodeRecord[]>([]);
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
  return [nodes, setNodes];
};

const fetchNodes = (url: string) => {
  return new Promise<NodeRecord[]>(async (resolve, reject) => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const nodes: NodeRecord[] = await res.json();
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
