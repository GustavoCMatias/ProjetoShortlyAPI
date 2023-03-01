import { Router } from "express";
import { rankLinks } from "../controller/ranking.controller.js";

const rankingRouter = Router()
rankingRouter.get('/ranking', rankLinks)

export default rankingRouter