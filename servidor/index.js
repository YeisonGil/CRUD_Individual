const express = require('express');
// const req = require('express/lib/request');
// const res = require('express/lib/response');
const conectarDB = require('./config/db')

const app = express();
const PORT = 4000;

conectarDB();

app.get('/',(req,res) => {
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log("Server Running")
})