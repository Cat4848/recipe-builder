import db from "../../../databases/MySqlDatabase";
import NodesTable from "../NodesTable";

const nodesTable = new NodesTable(db);

export const getAllNodes = async () => {
  const result = await nodesTable.getAll();
  if (result.success) return result.data;
  else return result.error;
};
