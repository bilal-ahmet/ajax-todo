const express = require('express');
const path = require('path');
const todoRoute = require('./routes/todoRoute');
const sequelize = require('./models');
const {ensureTestUser, ensureTestUser} = require('./controllers/todoController');

const app = express();

ensureTestUser();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use('/', todoRoute);

//server
app.listen(3000, () => {
    console.log('server 3000 portunda çalışıyor');
});


sequelize.sync({force: true}).then(() => {
    console.log('db senkronize edildi');
}).catch((err) => {
    console.loh('db senkronize edilmedi', err);
})