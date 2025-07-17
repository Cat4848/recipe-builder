import express from "express";
import { getAllEdges } from "../services/EdgesTable/actions";

const edgesRouter = express.Router();

edgesRouter.get("/edges", async (req, res) => {
  const result = await getAllEdges();
  if (result instanceof Error) {
    res.status(500).send(result.message);
    return;
  }
  res.send(result);
  return;
});

edgesRouter.post("/edges/new", async () => {});

export default edgesRouter;
