const mongoose = require("mongoose")


function Connectdb(){

    mongoose.connect("mongodb+srv://baghelkashyap2004:2oZJnl5XqwD1aC68@cluster0.8myl1xv.mongodb.net/cohort")
    .then(()=>{
        console.log("connect db sucsessfully");
    })
}

module.exports = Connectdb