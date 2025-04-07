const express = require('express');
const path = require('path');
const todoTouter = require('./routes/todoRouter');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.get('/', todoTouter);

//server
app.listen(3000, () => {
    console.log('server 300 portunda çalışıyor');
});