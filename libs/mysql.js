import { createPool } from "mysql2/promise";

export const pool = createPool({
    config: {
        host: "localhost",
        user: "root",
        password: "root",
        port: 3306,
        database: "studtrack"
    }
})