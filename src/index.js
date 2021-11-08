const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const path = require('path');
const route = require('./routers');
var methodOverride = require('method-override')
// const mongoose = require('mongoose');
const db = require('./config/db')
var flash = require('req-flash');
var session = require('express-session')
var cookieParser = require('cookie-parser')


app.use(methodOverride('_method'))


app.use(cookieParser())
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
}))

db.connect();



app.use(express.static(path.join( __dirname, 'public')))
//app.use("/public", express.static(__dirname + '/public'));
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join( __dirname, 'resources','views'))
// app.use(flash());

route(app);





app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})