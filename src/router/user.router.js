import { Router } from "express";
import { getUser } from "../controller/user.controler.js";
import tokenValidation from "../middleware/authValidation.middleware.js";



const userRouter = Router()
userRouter.get('/users/me', tokenValidation, getUser)

export default userRouter