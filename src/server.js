const express = require('express');
//import body parser
var bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 3000;
const userRoutes = require('./routes/v1/userRoutes');
const API_V1 = require('./routes/v1/index');
const errorHandle = require('./middlewares/errorHandler');
//connect db
const db = require('./configs/mongodb');
db.connect();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!- ok 1234</h1>');
})

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });

//su dung bodyPaser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// sử dụng app.use để định nghĩa routes trong server
// app.use('/users', userRoutes);

app.use('/v1',API_V1);
app.use(errorHandle);




app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
})