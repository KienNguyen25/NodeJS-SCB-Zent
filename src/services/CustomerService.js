const Customer = require("../models/Customer");

class CustomerService{
    create = async (dataCustomer) =>{
        try {
            const customer = new Customer(dataCustomer)  ;
            await customer.save();
            return customer; 
        } catch (error) {
            throw error
        }
    }
    getAll = async () =>{
        try {
           //goi den model
           const customers = await Customer.find();
           return customers;
        } catch (error) {
            throw error
        }
    }
    update = async (id, data) =>{
        try {
            //Xu lý các nghiệp vụ liên quan
            //gọi đến tầng model
            const result = await Customer.findByIdAndUpdate(id, data);
            return true
        } catch (error) {
            throw error
        }
    }
    delete = async (id) =>{
        try {
            //Xu lý các nghiệp vụ liên quan
            //gọi đến tầng model
            const customer = await Customer.findById(id);
            console.log(customer);
            await customer.deleteOne()
            return true
        } catch (error) {
            throw error
        }
    }
    
}
module.exports = new CustomerService();
