import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app=express();
app.use(express.json());





const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`conectado al servidor http://localhost:${PORT}`)
})