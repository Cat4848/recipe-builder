import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useNodes } from "../hooks/useNodes";
import { useEdges } from "../hooks/useEdges";
import IngredientInput from "./IngredientInput";
import { useCallback } from "react";

const nodesUrl = "/nodes";
const edgesUrl = "/edges";

export default function App() {
  const inNodes = useNodes(nodesUrl);
  const inEdges = useEdges(edgesUrl);

  const [nodes, setNodes, onNodesChange] = useNodesState(inNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(inEdges);
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const nodeTypes = {
    IngredientInput
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
