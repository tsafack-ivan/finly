
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

require('dotenv').config();
require('./libs/dbConnect');

const userRouter = require('./routes/user.route');
const dashboardRouter = require('./routes/dashboard.route');

const app = express();

@@ -13,20 +15,18 @@ app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello From Node.js' });
});

app.use('/users', userRouter);

app.get('/contact', (req, res) => {
  res.render('index', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
  res.render('index', { message: 'The About Page' });
});
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.AUTH_SECRET,
    saveUninitialized: true,
    resave: false,
  })
);

app.use('/', userRouter);
app.use('/dashboard', dashboardRouter);

app.get('*', (req, res) => {
  res.status(404).render('index', { message: 'Not Found' });

  const flash = require('connect-flash');
// ...
app.use(flash());