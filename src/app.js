import express from "express";
import cors from "cors"
import authRouter from "./router/auth.router.js";

const server = express()
server.use(express.json())
server.use(cors())
server.use([authRouter])

server.listen(5000, () =>{
    console.log('deu bom')
})

