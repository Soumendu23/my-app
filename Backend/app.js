const express = require('express')
const bodyparser=require('body-parser')
const cors =require('cors')

const app =express();
const authRoutes=require('./routes/auth');
const userRoutes=require('./routes/user');


app.use('/user',userRoutes)

app.listen(8000)
