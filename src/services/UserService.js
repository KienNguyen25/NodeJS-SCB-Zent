const User = require("../models/User");

class UserService {
    create = async (dataUser) =>{
        try {
            //Xu lý các nghiệp vụ liên quan
            //gọi đến tầng model
            const user = new User(dataUser);
            await user.save();
            return user;
        } catch (error) {
            throw error
        }
    }

    //De viet dc 1 ham ta phai xac dinh cac yeu to:
    //1. Hàm để làm gì
    //2. Có trả về data hay không, có tham số đầu vào hay không

    getAll = async () =>{
        try {
           //goi den model
           const users = await User.find();
           return users;
        } catch (error) {
            throw error
        }
    }

    update = async (id, data) =>{
        try {
            //Xu lý các nghiệp vụ liên quan
            //gọi đến tầng model
            const result = await User.updateOne({_id: id}, {username: data.username});
            return true
        } catch (error) {
            throw error
        }
    }

    delete = async (id) =>{
        try {
            //Xu lý các nghiệp vụ liên quan
            //gọi đến tầng model
            const user = await User.findById(id);
            console.log(user);
            await user.deleteOne()
            return true
        } catch (error) {
            throw error
        }
    }

}
module.exports = new UserService();
