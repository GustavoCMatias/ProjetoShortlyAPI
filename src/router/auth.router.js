import { Router } from "express";
import { signIn, signUp } from "../controller/auth.controller.js";
import { validarSignInSchema, validarSignUpSchema } from "../middleware/auth.middleware.js";
import { signInSchema, signUpSchema } from "../schema/auth.schema.js";



const authRouter = Router()

authRouter.post('/signup', validarSignUpSchema(signUpSchema), signUp)
authRouter.post('/signin', validarSignInSchema(signInSchema), signIn)

export default authRouter