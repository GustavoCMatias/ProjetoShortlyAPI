import { Router } from "express";
import { shortenUrl } from "../controller/url.controller.js";
import tokenValidation from "../middleware/authValidation.middleware.js";
import { validarUrlSchema } from "../middleware/url.middleware.js";
import { urlSchema } from "../schema/url.schema.js";



const urlRouter = Router()

urlRouter.post('/urls/shorten', validarUrlSchema(urlSchema), tokenValidation, shortenUrl)

export default urlRouter