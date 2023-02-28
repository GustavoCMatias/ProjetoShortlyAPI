import { nanoid } from "nanoid"
import { db } from "../database/database.connection.js"


export async function shortenUrl(req, res){
    const userId = res.locals.user
    const {url} = req.body

    try{
        const shortUrl = nanoid(8)
        const {rows} = await db.query('INSERT INTO links (original_link, short_link, user_id) VALUES ($1, $2, $3) RETURNING id', [url, shortUrl, userId])
        const id = rows[0].id
        res.status(201).send({id, shortUrl})
    }catch (error) {
        res.status(500).send(error.message)
    }
    
}

export async function getUrlFromId(req, res){
    const {id} = req.params
    try{
        const {rows, rowCount} = await db.query('SELECT id, short_link, original_link FROM links WHERE id = $1', [id])
        if(rowCount === 0) return res.sendStatus(404)
        res.status(200).send({
            id,
            shortUrl: rows[0].short_link,
            url: rows[0].original_link
        })
    }catch (error) {
        res.status(500).send(error.message)
    }
}