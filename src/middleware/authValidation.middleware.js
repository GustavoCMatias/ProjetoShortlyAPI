import { db } from "../database/database.connection.js"


export default async function tokenValidation(req, res, next){
    const {authorization} = req.headers
    const token = authorization?.replace("Bearer ", "")

    if(!token) return res.sendStatus(401)

    try{
        const {rows, rowCount} = await db.query('SELECT user_id FROM sessions WHERE token = $1', [token])

        if(rowCount === 0) return res.sendStatus(401)
        res.locals.user = rows[0].user_id
        next()
    }catch(error){
        res.status(500).send(error.message)
    }

}