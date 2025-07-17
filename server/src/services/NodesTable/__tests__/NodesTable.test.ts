import NodesTable from "../NodesTable";
import db from "../../../databases/MySqlDatabase";

const nodesTable = new NodesTable(db);

test("if the nodes are retrieved correctly", async () => {
  expect.assertions(2);
  const result = await nodesTable.getAll();
  expect(result.success).toBe(true);
  if (result.success) {
    const edges = JSON.parse(result.data);
    const firstNode = edges[0];
    expect(firstNode).toHaveProperty("node_id");
  }
});
