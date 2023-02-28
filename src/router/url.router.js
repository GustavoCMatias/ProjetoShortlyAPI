import { Router } from "express";
import { deleteUrl, getUrlFromId, getUrlFromShortUrl, shortenUrl } from "../controller/url.controller.js";
import tokenValidation from "../middleware/authValidation.middleware.js";
import { validarUrlSchema } from "../middleware/url.middleware.js";
import { urlSchema } from "../schema/url.schema.js";



const urlRouter = Router()

urlRouter.post('/urls/shorten', validarUrlSchema(urlSchema), tokenValidation, shortenUrl)
urlRouter.get('/urls/:id', getUrlFromId)
urlRouter.get('/urls/open/:shortUrl', getUrlFromShortUrl)
urlRouter.delete('/urls/:id', tokenValidation, deleteUrl)

export default urlRouter