import {Database} from "sqlite3";
import config from "./config";

const db = new Database(config.DATABASE_URL);

export default db;
