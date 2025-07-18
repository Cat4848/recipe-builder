import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useNodes } from "../hooks/useNodes";
import { useEdges } from "../hooks/useEdges";

const nodesUrl = "/nodes";
const edgesUrl = "/edges";

export default function App() {
  const { nodes, setNodes } = useNodes(nodesUrl);
  const { edges, setEdges } = useEdges(edgesUrl);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
