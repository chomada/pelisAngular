import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config.js';

export const validateCredentials = (req, res) => {
    const credentials = req.body;

    if (credentials.email === 'test@gmail.com' && credentials.password === '123456') {
        const payload = {
            email: credentials.email,
            userName: 'Test User',
            role: 'admin'
        };
        console.log("valido")
        console.log(req.body)
        const token = jwt.sign(payload, SECRET_KEY);

        res.json({
            status: 'OK',
            token: token
        });
    } else {
        res.json({
            status:'NOT OK',
            message: 'Inavlid user or password'
        })
        console.log("invalido")
        console.log(req.body)
    }
}
