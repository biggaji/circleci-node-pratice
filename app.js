// bring in express
const express = require("express");
const indexRouter = require('./routes/index_Routes');
const session = require("express-session");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(session({ name: "sid", secret: "Baby", resave: false, saveUninitialized: false }));
app.use('/', indexRouter);
app.listen(8000, () => {
    console.log('Server running on port 8000 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
})
