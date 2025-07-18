import express from "express";
import { getAllNodes } from "../services/NodesTable/actions";
import { newNodeValidation } from "../lib/validators/newNodeValidation/newNodeValidation";
import { ValidationError } from "yup";
import { useNodesTable } from "../services/hooks";
import { ResultSetHeader } from "mysql2";

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

nodesRouter.post("/nodes/new", async (req, res) => {
  try {
    const newNode = await newNodeValidation(req.body);
    const nodesTable = useNodesTable();
    const result = await nodesTable.new(newNode);
    if (result.success) {
      const { insertId }: ResultSetHeader = JSON.parse(result.data);
      // td: get node by id and send it to front end
    } else {
      throw result.error;
    }
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
  }
});

export default nodesRouter;
