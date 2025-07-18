import { useState, useEffect } from "react";
import { EdgeRecord } from "../lib/types";
import { toast } from "react-toastify";
import { Edge } from "@xyflow/react";

export const useEdges = (url: string) => {
  const [edges, setEdges] = useState<Edge[]>([]);
  useEffect(() => {
    fetchEdges(url).then(
      (edges) => {
        setEdges(edges);
      },
      (error: Error) => {
        toast.error(error.message);
      }
    );
  }, [url]);
  return { edges, setEdges };
};

const fetchEdges = (url: string) => {
  return new Promise<Edge[]>(async (resolve, reject) => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const edges: Edge[] = await res.json();
        resolve(edges);
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
