import { createPool } from "mysql2/promise";
import { getParam } from "./aws/params";

const pool = createPool({
	port: 3306,
	database: "family_restaurant",

	// host: "localhost",
	// user: "dev",
	// password: "dev",

	host: (await getParam("/rk/prod/mysql/host", false)).Parameter?.Value,
	user: (await getParam("/rk/prod/mysql/dbuser", false)).Parameter?.Value,
	password: (await getParam("/rk/prod/mysql/dbpass", true)).Parameter?.Value,
});
export async function getDbConnection() {
	return pool.getConnection();
}
