const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const expressValidator = require('express-validator');

// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/user');
// const categoryRoutes = require('./routes/category');
// const productRoutes = require('./routes/product');
// const braintreeRoutes = require('./routes/braintree');
// const orderRoutes = require('./routes/order');
// const postsRouter = require("./routes/posts");

require('dotenv').config();
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('hello!')
})
app.listen(process.env.PORT || 3000)
