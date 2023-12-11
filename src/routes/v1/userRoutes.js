const express = require('express');
const UserControllers = require('../../controllers/UserControllers');
const router = express.Router();

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
router.get('/', UserControllers.find)

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
router.post('/', UserControllers.create);
router.put('/update', UserControllers.update);
router.delete('/delete/:id', UserControllers.delete)



module.exports = router;