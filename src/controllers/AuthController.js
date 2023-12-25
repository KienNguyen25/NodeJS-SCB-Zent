//import thu vien jwt
const jwt = require('jsonwebtoken');

class AuthController{
    login = async (req,res, next) =>{
        try {
            console.log('function login');
            const {username, password} = req.body;
            const token = jwt.sign({ username,password }, process.env.SECRET_KEY_JWT);

            res.status(200).json({
                token: token
            })
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AuthController();
