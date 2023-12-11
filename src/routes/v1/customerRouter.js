const express = require('express');
const CustomerController = require('../../controllers/CustomerController');
const router = express.Router();

router.get('/', CustomerController.find);

router.post('/create', CustomerController.create);

router.put('/update', CustomerController.update);

router.delete('/delete/:id', CustomerController.delete);

module.exports = router;
