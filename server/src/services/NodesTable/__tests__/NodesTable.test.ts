import { getAllNodes } from "../actions";

test("if nodes are retrieved correctly", async () => {
  const result = await getAllNodes();
  if (result instanceof Error) {
    expect(true).toBe(false);
    return;
  }
  const nodes = JSON.parse(result);
  const firstNode = nodes[0];
  expect(firstNode).toHaveProperty("node_id");
});
