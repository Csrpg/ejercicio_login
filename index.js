import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { UsuarioRouter } from './routes/usuario.routes.js';

dotenv.config()
const app=express();

app.use(cors());
app.use(express.json());

app.use('/', UsuarioRouter);



const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`conectado al servidor http://localhost:${PORT}`)
})