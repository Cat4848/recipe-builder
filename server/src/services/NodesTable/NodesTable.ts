import { Database, SemiNodeRecord } from "../../lib/types";

export default class NodesTable {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  getAll = async () => {
    const sql = "SELECT * FROM nodes;";
    const result = await this.db.execute(sql);
    return result;
  };

  new = async ({ position_x, position_y, type, content }: SemiNodeRecord) => {
    const sql = `INSERT INTO nodes (
      position_x,position_y,type,content
    ) VALUES (?,?,?,?);`;
    const result = await this.db.execute(sql, [
      position_x,
      position_y,
      type,
      content
    ]);
    return result;
  };

  getById = async (nodeId: number) => {
    const sql = "SELECT * FROM nodes WHERE node_id = ?;";
    const result = await this.db.execute(sql, [nodeId]);
    return result;
  };
}
