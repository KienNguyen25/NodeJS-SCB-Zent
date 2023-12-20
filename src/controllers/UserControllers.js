const userService = require("../services/userService");

class UserController {
getAll = async (req, res , next)=> {
        try {
           //GOi den services
           const users = await userService.getAll();
           res.status(200).json({
            // username, password, phone, age
            users
        })
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

    update = async(req, res, next) =>{
        try {
            const {username , email, phone, age} = req.body;
            const {id} = req.params;
            console.log("updated user");
            let data = {
                username, email, phone,age
            }
            const result =  await userService.update(id, data);
            if (result) {
                res.status(200).json({'msg' : 'updated success'})
            } else {
                throw new Error('updated fail');
            }
            res.status(200).json({
                // username, password, phone, age
                user
            })
        } catch (error) {
           throw error;
        }
    }

   

    delete = async (req,res,next) => {
        try {
            const {id} = req.params;
            const result =  await userService.delete(id);

            if (result) {
                res.status(200).json({'msg' : 'Deleted success'})
            } else {
                throw new Error('Deleted fail');
            }
            // let id = req.params.id;
            // res.status(200).json({msg: `Xoa User co id = ${id}`});
        } catch (error) {
           throw error;
        }
    }

}

module.exports = new UserController();