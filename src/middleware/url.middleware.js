

export function validarUrlSchema(schema) {
    return async (req, res, next) => {
        const { error } = schema.validate(req.body, {abortEarly: false})
        if (error) {
            const msgErro = error.details.map(err => err.message)
            return res.status(422).send(msgErro)
        }
        next()
    }
}