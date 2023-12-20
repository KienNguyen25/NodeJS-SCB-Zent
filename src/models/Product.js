const mongoose = require('mongoose');

//tạo userSchema các trường thông tin mà ta mong muốn
//type => Kiểu dữ liệu
//required => trường có bắt buộc hay không( Có = True, Không = Fale)
//Thông tin sản phẩm bao gồm
//Tên sản phẩm, nhà sản xuất, năm sản xuất, số lượng, giá bán.
const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    producerProduct: { type: String, required: true },
    yearOfManufacture: { type: Number, require: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;