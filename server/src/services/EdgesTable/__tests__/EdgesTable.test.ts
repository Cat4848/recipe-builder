import EdgesTable from "../EdgesTable";
import db from "../../../databases/MySqlDatabase";

const edgesTable = new EdgesTable(db);

test("if the edges are retrieved correctly", async () => {
  expect.assertions(2);
  const result = await edgesTable.getAll();
  expect(result.success).toBe(true);
  if (result.success) {
    const edges = JSON.parse(result.data);
    const firstEdge = edges[0];
    expect(firstEdge).toHaveProperty("edge_id");
  }
});
