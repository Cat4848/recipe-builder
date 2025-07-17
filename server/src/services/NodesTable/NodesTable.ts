import { Database } from "../../databases/types";

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
}
