const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
    res.send("welcome to home page")
})
app.get('/about',(req,res)=>{
    res.send("welcome to about page")
})

app.listen(3000,()=>{
    console.log("Server running on port");
})