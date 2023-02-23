import { db } from "../database/database.connection.js"
import bcrypt from 'bcrypt'

export function validarSignUpSchema(schema) {
    return async (req, res, next) => {
        const { error } = schema.validate(req.body, {abortEarly: false})
        if (error) {
            const msgErro = error.details.map(err => err.message)
            return res.status(422).send(msgErro)
        }

        try {
            const { rowCount } = await db.query('SELECT * FROM users WHERE email = $1', [req.body.email])
            if(rowCount !== 0)return res.sendStatus(409)
            next()
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

export function validarSignInSchema(schema) {
    return async (req, res, next) => {
        const { error } = schema.validate(req.body, {abortEarly: false})
        if (error) {
            const msgErro = error.details.map(err => err.message)
            return res.status(422).send(msgErro)
        }

        try {
            const { rows, rowCount } = await db.query('SELECT id, password FROM users WHERE email = $1', [req.body.email])
            if(rowCount === 0)return res.sendStatus(401)
  
            const comparePassword = bcrypt.compareSync(req.body.password, rows[0].password)
            if(!comparePassword)return res.sendStatus(401) 

            res.locals.user = rows[0].id
            next()
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

