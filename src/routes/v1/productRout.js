const express = require('express');
const ProductController = require('../../controllers/ProductController');
const router = express.Router();
const verifyToken = require('../../middlewares/VerifyToken');
const Joi = require('joi');

// router.get('/', (req, res) =>{

//       const {page, sort} = req.query;
//       console.log(page,sort);
//       res.status(200).json({msg: `get param page = ${page} va sort = ${sort}`});
  
//   });

//   router.post('/create', (req, res) => {
//     const {name, password,sdt,email,product} = req.body;
//     res.status(200).json({
//       name,
//       password,
//       sdt,
//       email,
//       product
//     })
// });
// router.put('/', (req,res)=>{
//     //  res.send('<h1>customer Router</h1>');

//     const {code, address} = req.body;
//     res.status(200).json({
//        code,
//        address
//       })
// });
// router.delete('/:id', (req,res) => {
//     let id = req.params.id;
//     res.status(200).json({msg: `Xoa Customer co id = ${id}`});
    
// })

const productValidationSchema = Joi.object({
    productName: Joi.string().required(),
    producerProduct: Joi.string().required(),
    yearOfManufacture: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
    quantity: Joi.number().integer().min(0).required(),
    price: Joi.number().min(0).required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateProductData = (req, res, next) => {
    const { error, value } = productValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};
router.get('/', ProductController.getAll);
router.post('/create',validateProductData, ProductController.create);
router.put('/update/:id', ProductController.update);
router.delete('/delete/:id', ProductController.delete);

module.exports = router;
