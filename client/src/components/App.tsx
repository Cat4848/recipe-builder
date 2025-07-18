import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "@xyflow/react/dist/base.css";
import { useNodes } from "../hooks/useNodes";
import { useEdges } from "../hooks/useEdges";

const initialNodes = [
  {
    id: "n1",
    data: { label: "Node 1" },
    position: { x: 0, y: 0 },
    type: "input"
  },
  {
    id: "n2",
    data: { label: "Node 2" },
    position: { x: 100, y: 100 }
  }
];
const initialEdges = [
  {
    id: "n1-n2",
    source: "n1",
    target: "n2",
    label: "connects with",
    type: "step"
  }
];
const nodesUrl = "/nodes";
const edgesUrl = "/edges";

function App() {
  const [nodes, setNodes] = useNodes(nodesUrl);
  const [edges, setEdges] = useEdges(edgesUrl);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
