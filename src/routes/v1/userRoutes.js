const express = require('express');
const UserControllers = require('../../controllers/UserControllers');
const router = express.Router();
const verifyToken = require('../../middlewares/VerifyToken');
const Joi = require('joi');

const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().required().messages({
    'any.required': `"username" không được bỏ trống !`
  }),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required(),
  phone: Joi.string().min(10).max(10).required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateUserData = (req, res, next) => {
    const { error, value } = userValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};

// router.get('/:id', (req, res) => {
//     //  res.send('<h1>User Router</h1>');
//     // get param
//     let id = req.params.id;
//     console.log(id);
//     res.status(200).json({msg: `Get id ${id}`});


//   })
// router.get('/test', (req, res) =>{
//   //c1 get param voi 2 tham so
//     // let page = req.query.page;
//     // let sort = req.query.sort;

//     //c2 get param voi 2 tham so
//     const {page, sort} = req.query;
//     console.log(page,sort);
//     res.status(200).json({msg: `get param`});

// });

// router.post('/create', (req, res) =>{
//   // const {page, sort} = req.query;
//   // console.log(page,sort);
//   // res.status(200).json({msg: `post method`});

//   //request body
//   const {username, password} = req.body;
//   res.status(200).json({
//     username,
//     password
//   })
// });
router.get('/', UserControllers.getAll)
router.post('/',validateUserData,verifyToken , UserControllers.create);
router.put('/update/:id', UserControllers.update);
router.delete('/delete/:id', UserControllers.delete)

module.exports = router;