const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');
const customerRouter = require('./customerRouter');
const productRouter = require('./productRout');

router.get('/status', (req, res) => {
    res.status(200).json({msg: 'Api ready'});
  })
router.use('/users', userRouter);
router.use('/customer', customerRouter);
router.use('/product', productRouter);

module.exports = router;