import express from 'express';
import { registrarController, loginController } from '../controllers/usuario.controller.js';
import { UsuarioMiddleware } from '../middleware/usuario.middleware.js';

const UsuarioRouter = express.Router();
UsuarioRouter.use(express.json())


UsuarioRouter.post('/register', UsuarioMiddleware, registrarController);
UsuarioRouter.post('/login', UsuarioMiddleware, loginController);

export { UsuarioRouter };