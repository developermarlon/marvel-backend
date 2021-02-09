const jwt = require('jsonwebtoken');
const jwt_decode  = require('jwt-decode');

const routsToken = (req, res, netx) => {
    const token = req.headers['token'];
    
    if(typeof token !== 'undefined'){
        jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
            if(err) {
                res.status(400).json({
                    message: 'El token ha expirado'
                });
            }else{
                netx();
            }
        })
    } else {
        res.status(400).json({
            message: 'Falta token de seguridad'
        });
    }
}

const verifyToken = (req, res) => {
    const token = req.headers['token'];
    if(typeof token !== 'undefined'){
        jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
            if(err) {
                res.status(400).json({
                    message: 'El token ha expirado'
                });
            }else{
                res.status(200).json({
                    message: 'Token Verificado'
                });
            }
        })
    } else {
        res.status(400).json({
            message: 'Falta token de seguridad'
        });
    }
}

module.exports = {
    routsToken,
    verifyToken
}
