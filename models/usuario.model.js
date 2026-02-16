import { baseDatos } from "../config/usuario.config.js";

export function UsuarioModel() {
    const Schema = baseDatos.Schema;
    
    const UsuarioSchema = new Schema({
        email: {
            type: String,
            required: true,
            unique: true,
        },
        nombre: String,
        password: {
            type: String,
            required: true 
        }
    }, { timestamps: true });

    
    const Modelo = baseDatos.models.UsuarioLogin || baseDatos.model('UsuarioLogin', UsuarioSchema, 'UsuarioLogin');

    return Modelo;
}