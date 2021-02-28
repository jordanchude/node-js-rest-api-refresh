// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const PORT = 3000;


// MIDDLEWARE


// ROUTES
app.get("/", (req, res) => {
    res.send('We are on home');
})

app.get("/posts", (req, res) => {
    res.send('We are on posts');
})

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB!'));

// SERVER
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
