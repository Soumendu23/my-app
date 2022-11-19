const express = require('express')
const bodyparser=require('body-parser')
const cors =require('cors')

const app =express();
const authRoutes=require('./routes/auth');
app.use(authRoutes)

app.listen(8000)
