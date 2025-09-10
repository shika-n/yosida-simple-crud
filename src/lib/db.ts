import mysql, { createPool } from "mysql2/promise";

const pool = createPool({
	host: "localhost",
	port: 3306,
	database: "family_restaurant",
	user: "dev",
	password: "dev",
});
async function getDbConnection() {
	return await pool.getConnection();
}
