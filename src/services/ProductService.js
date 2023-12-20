//Thông tin sản phẩm bao gồm

const Product = require("../models/Product");

//Tên sản phẩm, nhà sản xuất, năm sản xuất, số lượng, giá bán.
class ProductService{
    create = async (dataProduct) =>{
        try {
            const product = new Product(dataProduct)  ;
            await product.save();
            return product; 
        } catch (error) {
            throw error
        }
    }
    getAll = async () =>{
        try {
           //goi den model
           const products = await Product.find();
           return products;
        } catch (error) {
            throw error
        }
    }
    update = async (id, data) =>{
        try {
            //Xu lý các nghiệp vụ liên quan
            //gọi đến tầng model
            const result = await Product.findByIdAndUpdate(id, data);
            return true
        } catch (error) {
            throw error
        }
    }
    delete = async (id) =>{
        try {
            //Xu lý các nghiệp vụ liên quan
            //gọi đến tầng model
            const product = await Product.findById(id);
            console.log(product);
            await product.deleteOne()
            return true
        } catch (error) {
            throw error
        }
    }
    
}
module.exports = new ProductService();
