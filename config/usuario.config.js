import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const baseDatos = mongoose;


baseDatos.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB para Login'))
    .catch((e) => console.log('Error:', e));
