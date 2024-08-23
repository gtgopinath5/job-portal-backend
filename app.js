//required express
const express = require("express");

//import the user routes
const userRouter = require("./routes/userRoutes");
const companyRouter = require('./routes/companyRoutes');
const jobRouter = require('./routes/jobRoutes');

//create an express app
const app = express();

//require cors
const cors = require("cors");

//require cookie-parser
const cookieParser = require("cookie-parser");

//require morgan
const morgan = require("morgan");


//use the cors middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//use cookie-parser middleware
app.use(cookieParser());

//use morgan middleware
app.use(morgan('dev'));

//use the express json middleware
app.use(express.json());

//define the environment
app.use("/api/users", userRouter);
app.use('/api/companies', companyRouter);
app.use('/api/jobs', jobRouter);
module.exports = app;
