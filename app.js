
const express = require('express');
const cors = require("cors")
const fetchArticle = require("./controllers/fetch-article")




// Generating an express app
const app = express();


// Allowing access headers and requests
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE, CONNECT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Linking routes
app.use("/news", fetchArticle)


app.get('/', function (req, res) {
    res.json("Welcome to Matte Demolish Backend");
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000, () => {
    console.log(`Server listening on port 3000...`);
});




module.exports = app;
