import { db } from "../database/database.connection.js"

export async function rankLinks(_, res) {

    try {
        const { rows } = await db.query('SELECT u.id, u.name, COUNT(l.id) as "linksCount", SUM(l.view_count) as "visitCount" FROM users as u JOIN links as l on u.id = l.user_id GROUP BY 1 ORDER BY 4 DESC LIMIT 10') 
        res.status(200).send(rows)
    } catch (error) {
        res.status(500).send(error.message)
    }

}