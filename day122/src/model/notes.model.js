const { default: mongoose } = require("mongoose");



const notesSchema = new mongoose.Schema({
    tital:String,
    discription:String,
})

const notemodel = mongoose.model('Note',notesSchema);

module.exports = notemodel;
