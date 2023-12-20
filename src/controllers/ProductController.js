const ProductService = require("../services/ProductService");

class ProductController {
    getAll = async (req, res , next)=> {
        try {
           //GOi den services
           const products = await ProductService.getAll();
           res.status(200).json({
            products
        })
        } catch (error) {
           throw error;
        }
    }
    create = async (req,res, next) => {
        try {
            const {productName, producerProduct, yearOfManufacture, quantity, price} = req.body;
            console.log('create product')
            let data = {
                productName, producerProduct, yearOfManufacture, quantity, price
            }
            const product = await ProductService.create(data);
            res.status(200).json({
                product
            })
        } catch (error) {
            throw error
        }
    }
    update = async (req,res, next) => {
        try {
            const {productName, producerProduct, yearOfManufacture, quantity, price} = req.body;
            const {id} = req.params;
            console.log("updated Product");
            let data = {
                productName, producerProduct, yearOfManufacture, quantity, price
            }
            const result =  await ProductService.update(id, data);
            if (result) {
                res.status(200).json({'msg' : 'updated success'})
            } else {
                throw new Error('updated fail');
            }
            res.status(200).json({
                product
            })
        } catch (error) {
            throw error
        }
    }
    delete = async (req,res,next) => {
        try {
            const {id} = req.params;
            const result =  await ProductService.delete(id);

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
module.exports = new ProductController();
