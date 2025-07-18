import express from "express";
import { getAllNodes } from "../services/NodesTable/actions";
import { newNodeValidation } from "../lib/validators/newNodeValidation/newNodeValidation";
import { ValidationError } from "yup";
import { useNodesTable } from "../services/hooks";
import { ResultSetHeader } from "mysql2";
import { NodeRecord } from "../lib/types";
import { convertNodes } from "./lib/convertNodes";

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

nodesRouter.post("/nodes/new", async (req, res) => {
  try {
    const newNode = await newNodeValidation(req.body);

    const nodesTable = useNodesTable();
    const result = await nodesTable.new(newNode);
    if (result.success) {
      const { insertId }: ResultSetHeader = JSON.parse(result.data);
      const newNodeResult = await nodesTable.getById(insertId);
      if (newNodeResult.success) {
        res.send(newNodeResult.data);
        return;
      } else throw newNodeResult.error;
    } else throw result.error;
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(400).send(e.errors[0]);
      return;
    }
    if (e instanceof Error) {
      res.status(500).send(e.message);
      return;
    }
    res.status(500).send(e);
    return;
  }
});

export default nodesRouter;
