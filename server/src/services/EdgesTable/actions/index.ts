import db from "../../../databases/MySqlDatabase";
import EdgesTable from "../EdgesTable";

const edgesTable = new EdgesTable(db);

export const getAllEdges = async () => {
  const result = await edgesTable.getAll();
  if (result.success) return result.data;
  else return result.error;
};
