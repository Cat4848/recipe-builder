import express from "express";
import { getAllNodes } from "../services/NodesTable/actions";
import { convertNodes } from "./lib/convertNodes";
import { NodeRecord } from "../lib/types";

const nodesRouter = express.Router();

nodesRouter.get("/nodes", async (req, res) => {
  try {
    const result = await getAllNodes();
    if (result instanceof Error) {
      throw result;
    }
    const nodesFromDb: NodeRecord[] = JSON.parse(result);
    const nodesForClient = convertNodes(nodesFromDb);
    res.json(nodesForClient);
    return;
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
      return;
    }
    res.status(500).send(JSON.stringify(e));
    return;
  }
});

nodesRouter.post("/nodes/new", async () => {});

export default nodesRouter;
