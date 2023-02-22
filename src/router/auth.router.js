import { Router } from "express";
import { signIn, signUp } from "../controller/auth.controller.js";
import { validarSignUpSchema } from "../middleware/auth.middleware.js";
import { signUpSchema } from "../schema/auth.schema.js";



const authRouter = Router()

authRouter.post('/signup', validarSignUpSchema(signUpSchema), signUp)
authRouter.post('/signin', signIn)

export default authRouter