import express from 'express';
import { registrarController, loginController } from '../controllers/usuario.controller.js';

const UsuarioRouter = express.Router();

UsuarioRouter.post('/register', registrarController);
UsuarioRouter.post('/login', loginController);

export { UsuarioRouter };