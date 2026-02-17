import jwt from 'jsonwebtoken'; 



export function validarTokenServicio(token) {
    const tokenValidado = jwt.verify(token, process.env.JWT_TOKEN);
    return tokenValidado;
}