import { getDbConnection } from "$lib/db";
import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const db = await getDbConnection();

	const [result, _] = await db.query(`
		SELECT * FROM restaurants
	`);

	db.release();
	
	return { result: result as {
		id: number,
		name: string,
		address: string,
		telephone: string,
		owner: string,
	}[] };
}

export const actions = {
	delete: async ({ request }) => {
		const db = await getDbConnection();

		const data = await request.formData();

		try {
			await db.execute(`
				DELETE FROM restaurants
				WHERE id = ?
			`, [data.get("id")]);

		} catch (e) {
			console.log(e);
			return {
				message: "削除失敗しました！",
				error: true,
			}
		} finally {
			db.release();
		}
		
		return {
			message: "削除しました！",
			error: false,
		};
	}
} satisfies Actions;
