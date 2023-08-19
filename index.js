const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const expressValidator = require('express-validator');

//const authRoutes = require('./routes/auth');
//const userRoutes = require('./routes/user');
// const categoryRoutes = require('./routes/category');
// const productRoutes = require('./routes/product');
// const braintreeRoutes = require('./routes/braintree');
// const orderRoutes = require('./routes/order');
const postsRouter = require("./routes/posts");

require('dotenv').config();

// app
const app = express();

// db connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};
connectDB();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// // routes middleware
// app.use('/api', authRoutes);
// app.use('/api', userRoutes);
// app.use('/api', categoryRoutes);
// app.use('/api', productRoutes);
// app.use('/api', braintreeRoutes);
// app.use('/api', orderRoutes);
 app.use('/api/posts', postsRouter);

// // Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('hello!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('hello!')
// })
// app.listen(process.env.PORT || 5000)
