import express from "express";
import { getAllNodes } from "../services/NodesTable/actions";

const nodesRouter = express.Router();

nodesRouter.get("/nodes", async (req, res) => {
  const result = await getAllNodes();
  if (result instanceof Error) {
    res.status(500).send(result.message);
    return;
  }
  res.send(result);
  return;
});

nodesRouter.post("/nodes/new", async () => {});

export default nodesRouter;
