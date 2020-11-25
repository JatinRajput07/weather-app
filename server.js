const express = require('express');
const app = express();
const router = require('./routes/routes')
const pug = require('pug')
const path = require('path')

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'public')));


app.use(router);
app.get('*',(req,res)=>{
    res.render('Error')
})


const port = process.env.PORT || 3000;
app.listen(port,'127.0.0.1',()=>{
    console.log(`hello from server port ${port}....`)
})