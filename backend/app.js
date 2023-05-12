const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");
var cors = require('cors')


const express = require("express");
const app = express();
app.use(cors())
var userRoute = require('./routes/userRoute');
app.use('/', userRoute)

app.listen(5000,function(){
    console.log('app is running');
})