import { nanoid } from "nanoid"
import { db } from "../database/database.connection.js"


export async function shortenUrl(req, res) {
    const userId = res.locals.user
    const { url } = req.body

    try {
        const shortUrl = nanoid(8)
        const { rows } = await db.query('INSERT INTO links (original_link, short_link, user_id) VALUES ($1, $2, $3) RETURNING id', [url, shortUrl, userId])
        const id = rows[0].id
        res.status(201).send({ id, shortUrl })
    } catch (error) {
        res.status(500).send(error.message)
    }

}

export async function getUrlFromId(req, res) {
    const { id } = req.params
    try {
        const { rows, rowCount } = await db.query('SELECT id, short_link, original_link FROM links WHERE id = $1', [id])
        if (rowCount === 0) return res.sendStatus(404)
        res.status(200).send({
            id,
            shortUrl: rows[0].short_link,
            url: rows[0].original_link
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function getUrlFromShortUrl(req, res) {
    const { shortUrl } = req.params
    try {
        const { rows, rowCount } = await db.query('UPDATE links SET view_count = view_count+1 WHERE short_link = $1 RETURNING original_link', [shortUrl])

        if (rowCount === 0) return res.sendStatus(404)
        res.redirect(302, rows[0].original_link)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

export async function deleteUrl(req, res) {
    const { id } = req.params
    const userId = res.locals.user

    try {
        const { rows, rowCount } = await db.query('SELECT user_id FROM links WHERE id = $1', [id])

        if (rowCount === 0) return res.sendStatus(404)
        if (rows[0].user_id !== userId) return res.sendStatus(401)

        await db.query('DELETE FROM links WHERE id = $1', [id])
        res.sendStatus(204)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}