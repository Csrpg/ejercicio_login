import { UsuarioModel } from "../models/usuario.model.js";
import bcrypt from 'bcrypt';

export const registrarServicio = async (datos) => {
    const salt = await bcrypt.genSalt(10);
    datos.password = await bcrypt.hash(datos.password, salt);
    
    return await UsuarioModel().create(datos);
};

export const buscarPorEmailService = async (email) => {
    return await UsuarioModel().findOne({ email });
};