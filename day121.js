const express = require("express")
const Connectdb = require("./src/db/db")


const app = express()

Connectdb()

app.get("/",(req,res)=>{
    
    res.send("port created")
})



app.listen(3000,()=>{
    console.log("port runnig posrtnumber 3000");  
})