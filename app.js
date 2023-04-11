const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, './views/index.html'));
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/signin', (req, res) => {
    res.render('dashboard');
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

module.exports = app;