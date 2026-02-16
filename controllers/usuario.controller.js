import { registrarServicio, buscarPorEmailService } from '../services/usuario.service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registrarController = async (req, res) => {
    try {
        const usuario = await registrarServicio(req.body);
        res.status(201).send(usuario);
    } catch (error) {
        res.status(400).send({ mensaje: "Error al registrar", error: error.message });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await buscarPorEmailService(email);

        if (!usuario) return res.status(404).send({ mensaje: "Usuario no encontrado" });

        // Comparar contraseñas
        const esValida = await bcrypt.compare(password, usuario.password);
        if (!esValida) return res.status(401).send({ mensaje: "Contraseña incorrecta" });

        // Generar Token (usar JWT_SECRET del .env)
        const token = jwt.sign(
            { id: usuario._id, email: usuario.email },
            process.env.JWT_SECRET,
            
            
            // { expiresIn: '' }
        );

        res.status(200).send({ mensaje: "Login exitoso", token });
    } catch (error) {
        res.status(500).send({ mensaje: "Error interno del servidor" });
    }
};