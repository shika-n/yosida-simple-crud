import { error } from "console";
import { getDbConnection } from "$lib/db";
import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
	if (params.id) {
		const db = await getDbConnection();

		const [ result, _ ] = await db.execute(`
			SELECT * FROM restaurants
			WHERE id = ?
			LIMIT 1
		`, [params.id]);

		db.release();

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
	}

	error(404, "Not found");
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const db = await getDbConnection();
		try {
			const [result, _] = await db.execute(`
				UPDATE restaurants
				SET
					name = ?,
					address = ?,
					telephone = ?,
					owner = ?,
					area = ?,
					capacity = ?,
					is_barrier_free = ?,
					is_parking_available = ?,
					parking_capacity = ?,
					open_time = ?,
					close_time = ?
				WHERE id = ?
			`, [
				data.get("name"),
				data.get("address"),
				data.get("telephone"),
				data.get("owner"),
				data.get("area"),
				data.get("capacity"),
				data.get("barrier_free") === "true",
				data.get("parking_available") === "true",
				data.get("parking_capacity"),
				data.get("opening_time"),
				data.get("closing_time"),
				data.get("id"),
			]);
			console.log(result, data.get("id"));
		} catch (e) {
			console.log(e);
			return {
				message: "保存できませんでした",
				error: true,
			}
		} finally {
			db.release();
		}
	}
} satisfies Actions;
