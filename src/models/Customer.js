const mongoose = require('mongoose');

//tạo userSchema các trường thông tin mà ta mong muốn
//type => Kiểu dữ liệu
//required => trường có bắt buộc hay không( Có = True, Không = Fale)

const customerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  birthYear: { type: Number, required: true },
  phone: {
    type: String,
    require: true,
    unique: true
  }
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;