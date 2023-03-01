import express from "express";
import cors from "cors"
import authRouter from "./router/auth.router.js";
import urlRouter from "./router/url.router.js";
import userRouter from "./router/user.router.js";
import rankingRouter from "./router/ranking.router.js";

const server = express()
server.use(express.json())
server.use(cors())
server.use([authRouter, urlRouter, userRouter, rankingRouter])

server.listen(5000, () =>{
    console.log('deu bom')
})

