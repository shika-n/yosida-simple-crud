import { error } from "console";
import { getDbConnection } from "$lib/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	if (params.id) {
		const db = await getDbConnection();

		try {
			const [ result, _ ] = await db.execute(`
				SELECT * FROM restaurants
				WHERE id = ?
				LIMIT 1
			`, [params.id]);
			return { result: result as {
				id: number,
				name: string,
				address: string,
				telephone: string,
				owner: string,
				area: number,
				capacity: number,
				is_barrier_free: boolean,
				is_parking_available: boolean,
				parking_capacity: number,
				open_time: string,
				close_time: string,
			}[]};
		} catch (e) {
			return {
				message: "見つけませんでした",
				error: true,
			}
		} finally {
			db.release();
		}
	}

	error(404, "Not found");
}

