const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require("uuid");

const router = require('./router')

const app = express();

const port = process.env.PORT||3000;



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({extended:false})

app.set('view engine','ejs');

//load static asset
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/images',express.static(path.join(__dirname,'public/images')));


app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

app.use('/route',router)


// home route
app.get("/",(req,res)=>{
    res.render('base',{title:'Login System'})
})

app.get("/",(req,res)=>{
    res.render('terms',{title:'Login System'})
})

app.get("/",(req,res)=>{
    res.render('pp',{title:'Login System'})
})

app.get("/",(req,res)=>{
    res.render('rp',{title:'Login System'})
})


app.listen(port,()=>{console.log("Listening to the server on http://localhost:${PORT}")});