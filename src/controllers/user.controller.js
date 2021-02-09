//TOKENS SECURITY
const jwt = require('jsonwebtoken')

//NCRYPT JWT
const bcrypt = require('bcrypt')

const jwt_decode  = require('jwt-decode');

//MODELS
const {Op} = require('sequelize')
const User = require('../database/models/user')

const login = async (req, res) => {
    
    try {

        const { email, password } = req.body

        let user = await User.findOne({
            where: {
                email
            }
        })
        
        if(user) {

            user = user.dataValues

            const validate_password = await bcrypt.compare(password, user.password);
            
            if(validate_password){

                const token = await jwt.sign({id: user.id_user}, process.env.SECRET_KEY, { expiresIn: '3d' })

                res.status(200).json({
                    message: 'Bienvenido',
                    token,
                    name: user.name
                })

            }else{
                res.status(400).json({
                    message: 'contraseña incorrecta'
                })
            }
        }else{
            res.status(400).json({
                message: 'El usuario no se encuentra registrado'
            })
        }

    }catch(error) {
        console.log(error)
        res.status(500).json({
            message: 'error interno en el servidor'
        })
    }

}

const createUser = async (req, res) => {

    try{
        const {
            email,
            name,
            password,
            confirm_password
        } = req.body

        if( email !== null &&
            name !== null &&
            password !== null &&
            confirm_password !== null){

            if(password === confirm_password){

                const encript_password = await bcrypt.hash(password, 10)

                const countUser = await User.count({
                    where: {
                        email: email
                    }
                })
                
                if(countUser > 0){
                    res.status(400).json({
                        message: 'El usuario ya se encuentra registrado'
                    })
                }else{
                    try {

                        const user = await User.create({
                            email,
                            name,
                            password: encript_password,
                        })

                        res.status(200).json({
                            message: 'Usuario creado exitosamente'
                        })
                        
                    }catch(error){
                        console.log(error)
                        res.status(400).json({
                            message: 'El usuario ya encuentra registrado'
                        })
                    }
                }

            }else{
                res.status(400).json({
                    message: 'Las contraseñas no coinciden'
                })
            }

        }else{
            res.status(400).json({
                message: 'Complete los campos del formulario'
            })
        }

    }catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Error en el servidor'
        })
    }

}

module.exports = {
    createUser,
    login
}