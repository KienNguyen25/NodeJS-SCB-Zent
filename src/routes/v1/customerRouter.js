const express = require('express');
const CustomerController = require('../../controllers/CustomerController');
const router = express.Router();
const verifyToken = require('../../middlewares/VerifyToken');
const Joi = require('joi');

const customerValidationSchema = Joi.object({
  fullName: Joi.string().alphanum().required().messages({
    'any.required': `"fullname" không được bỏ trống !`
  }),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  gender:Joi.string().required(),
  birthYear:Joi.number().required(),
  phone: Joi.string().min(10).max(10).required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateCustomerData = (req, res, next) => {
    const { error, value } = customerValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};

router.get('/', CustomerController.getAll);

router.post('/create',validateCustomerData, CustomerController.create);

router.put('/update/:id', CustomerController.update);

router.delete('/delete/:id', CustomerController.delete);

module.exports = router;
