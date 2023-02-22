import bcrypt from "bcrypt"
import { v4 as uuidv4 } from 'uuid'
import { db } from "../database/database.connection.js"

export async function signIn(){
    return 0
}
export async function signUp(req, res){
    console.log(res.statusCode)
    const {name, email, password} = req.body
    const senhaHashed = bcrypt.hashSync(password, 10)
    try{
        await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, senhaHashed])
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }
}