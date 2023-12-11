const express = require('express');
const ProductController = require('../../controllers/ProductController');
const router = express.Router();

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
router.get('/', ProductController.find);
router.post('/create', ProductController.create);
router.put('/update', ProductController.update);
router.delete('/delete/:id', ProductController.delete);

module.exports = router;
