const userService = require("../services/userService");

class UserController {
    find = (req, res , next)=> {
        try {
            const {page, sort} = req.query;
            console.log(page,sort);
            res.status(200).json({msg: `get param`});
        } catch (error) {
           throw error;
        }
    }

    create = async(req, res, next) =>{
        try {
            const {username , email, phone, age} = req.body;
            console.log("create a user");
            let data = {
                username, email, phone,age
            }
            const user =  await userService.create(data);
            res.status(200).json({
                // username, password, phone, age
                user
            })
        } catch (error) {
           throw error;
        }
    }

    update = (req,res, next) => {
        try {
            const {email, password, name, address} = req.body;
            res.status(200).json({
                email,
                password,
                name,
                address
              })
        } catch (error) {
           throw error;
        }
    }

    delete = (req,res,next) => {
        try {
            let id = req.params.id;
            res.status(200).json({msg: `Xoa User co id = ${id}`});
        } catch (error) {
           throw error;
        }
    }

}

module.exports = new UserController();