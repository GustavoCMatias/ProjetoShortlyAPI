import { db } from "../database/database.connection.js"

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

