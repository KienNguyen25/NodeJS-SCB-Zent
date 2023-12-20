const CustomerService = require("../services/CustomerService");

class CustomerController {
    getAll = async (req, res , next)=> {
        try {
           //GOi den services
           const customers = await CustomerService.getAll();
           res.status(200).json({
            customers
        })
        } catch (error) {
           throw error;
        }
    }
    create = async (req,res, next) => {
        try {
            const { fullName, email, address, gender, birthYear,phone} = req.body;
            console.log("create a Customer");
            let data = {
                fullName, email, address, gender, birthYear,phone
            }
            const customer = await CustomerService.create(data);
            res.status(200).json({
                customer
            })
        } catch (error) {
            throw error
        }
    }
    update = async(req, res, next) =>{
        try {
            const { fullName, email, address, gender, birthYear,phone} = req.body;
            const {id} = req.params;
            console.log("updated customer");
            let data = {
                fullName, email, address, gender, birthYear,phone
            }
            const result =  await CustomerService.update(id, data);
            if (result) {
                res.status(200).json({'msg' : 'updated success'})
            } else {
                throw new Error('updated fail');
            }
            res.status(200).json({
                // username, password, phone, age
                customer
            })
        } catch (error) {
           throw error;
        }
    }
    
    delete = async (req,res,next) => {
        try {
            const {id} = req.params;
            const result =  await CustomerService.delete(id);

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
module.exports = new CustomerController();
