import { validarTokenServicio } from "../services/token.service.js";

export function UsuarioMiddleware(req, res, next){
    const token= req.headers.authorization.split(' ')[1]
    
    try{
        validarTokenServicio(token);
        next()
    }catch(e){
        
        res.status(401).send("Error de token")

    }

}