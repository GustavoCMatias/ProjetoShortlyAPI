import { db } from "../database/database.connection.js"


export async function getUser(_, res) {
    const userId = res.locals.user
    const shortenedUrls = []
    let totalVisitcount = 0
    try {
        const { rows, rowCount } = await db.query('SELECT u.id, u.name, l.id as l_id, l.short_link, l.original_link, l.view_count FROM users AS u JOIN links as l ON u.id = l.user_id WHERE u.id = $1', [userId])
        if(rowCount === 0) return res.status(200).send({})
        rows.forEach(item => {
            totalVisitcount += item.view_count
            let infoObject = {id: item.l_id, shortUrl: item.short_link, url: item.original_link, visitCount: item.view_count}
            shortenedUrls.push(infoObject)
        })
        const response = {id: rows[0].id, name: rows[0].name, visitCount: totalVisitcount, shortenedUrls}
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }

}