import type { Actions } from "./$types";
import { getDbConnection } from "$lib/db";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		console.log(typeof data.get("barrier_free"));

		// TODO: checks
		const db = await getDbConnection();
		try {
			const [result, _] = await db.execute(`
				INSERT INTO restaurants (
					name,
					address,
					telephone,
					owner,
					area,
					capacity,
					is_barrier_free,
					is_parking_available,
					parking_capacity,
					open_time,
					close_time
				) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
			]);
			
		} catch (e) {
			console.log(e);
			return {
				message: "登録失敗しました！",
				error: true,
			}
		} finally {
			db.release();
		}

		return {
			message: "登録しました！",
			error: false,
		};
	}
} satisfies Actions;
