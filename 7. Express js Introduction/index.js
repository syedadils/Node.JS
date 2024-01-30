const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('welcome, this is home page')
    console.log("data send by browser  ==>>> ",req.query.name)
});

app.get('/about', (req, res) => {
    res.send('welcome, this is about page')
});

app.get('/contact', (req, res) => {
    res.send('welcome, this is contact page')
});

app.listen(3000);