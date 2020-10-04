// bring in express
const express = require("express");
const session = require("express-session");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(session({ name: "sid", secret: "Baby", resave: false, saveUninitialized: false }));

app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`You have reads this article ${req.session.article_views} times`);
    } else {
        req.session.views === 1;
        res.send("You are reading the article the first time");
        console.log(req.session.views)
    }
});

app.listen(8000, () => {
    console.log('Server running on port 8000 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
})
