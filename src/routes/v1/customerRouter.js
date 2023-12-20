const express = require('express');
const CustomerController = require('../../controllers/CustomerController');
const router = express.Router();

router.get('/', CustomerController.getAll);

router.post('/create', CustomerController.create);

router.put('/update/:id', CustomerController.update);

router.delete('/delete/:id', CustomerController.delete);

module.exports = router;
