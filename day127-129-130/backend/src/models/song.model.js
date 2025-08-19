const mongoose = require('mongoose')

const Songschema = new  mongoose.Schema({
    title:String,
    artist:String,
    audio:String,
    mood:String,
})


const song = mongoose.model('song',Songschema)


module.exports = song