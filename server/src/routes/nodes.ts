import express from "express";
import { getAllNodes } from "../services/NodesTable/actions";
import { newNodeValidation } from "../lib/validators/newNodeValidation/newNodeValidation";
import { ValidationError } from "yup";

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
