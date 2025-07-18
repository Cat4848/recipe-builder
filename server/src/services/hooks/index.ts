import db from "../../databases/MySqlDatabase";
import NodesTable from "../NodesTable/NodesTable";
import EdgesTable from "../EdgesTable/EdgesTable";

export const useNodesTable = () => new NodesTable(db);
export const useEdgesTable = () => new EdgesTable(db);
