import { Database } from "../../databases/types";

export default class EdgesTable {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  getAll = async () => {
    const sql = "SELECT * FROM edges;";
    const result = await this.db.execute(sql);
    return result;
  };
}
