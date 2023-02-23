import bcrypt from "bcrypt"
import { v4 as uuidv4 } from 'uuid'
import { db } from "../database/database.connection.js"

export async function signIn(req, res){
    const user = res.locals.user


    try{
        const {rows, rowCount} = await db.query('SELECT token FROM sessions WHERE user_id = $1', [user])
        if(rowCount !== 0) return res.status(200).send(rows[0].token)

        const token = uuidv4()

        await db.query('INSERT INTO sessions (user_id, token) values ($1, $2)', [user, token])
        res.status(200).send(token)
    }catch (error) {
        res.status(500).send(error.message)
    }
}
export async function signUp(req, res){
    const {name, email, password} = req.body
    const senhaHashed = bcrypt.hashSync(password, 10)
    try{
        await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, senhaHashed])
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }
}