const express = require('express')
const bodyparser=require('body-parser')
const cors =require('cors')

const app =express();
// const authRoutes=require('./routes/auth');
const userRoutes=require('./routes/user');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization,Authentication');
next();
});


app.use('/user',userRoutes)


app.listen(8000)



