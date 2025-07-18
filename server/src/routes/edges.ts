import express from "express";
import { getAllEdges } from "../services/EdgesTable/actions";
import { EdgeRecord } from "../lib/types";
import { convertEdges } from "./lib/convertNodes";

const edgesRouter = express.Router();

edgesRouter.get("/edges", async (req, res) => {
  try {
    const result = await getAllEdges();
    if (result instanceof Error) {
      throw result;
    }
    const edgesFromDb: EdgeRecord[] = JSON.parse(result);
    const edgesForClient = convertEdges(edgesFromDb);
    res.json(edgesForClient);
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

edgesRouter.post("/edges/new", async () => {});

export default edgesRouter;
