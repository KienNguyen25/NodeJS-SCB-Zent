class UserController {
    find = (req, res , next)=> {
        try {
            const {page, sort} = req.query;
            console.log(page,sort);
            abc();
            res.status(200).json({msg: `get param`});
        } catch (error) {
           throw error;
        }
    }

    create = (req, res, next) =>{
        try {
            console.log("create a user");
            const {username, password} = req.body;
            abc();
            res.status(200).json({
                username, password
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