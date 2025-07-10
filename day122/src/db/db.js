const mongoose = require("mongoose")

function connectDB(){
    mongoose.connect(`mongodb+srv://baghelkashyap2004:8sgSfiJkeV16yZ8c@cluster0.8myl1xv.mongodb.net/cohort`)
    .then(()=>{
        console.log("database connect sucsessfully");
    })
}

module.exports = connectDB;


