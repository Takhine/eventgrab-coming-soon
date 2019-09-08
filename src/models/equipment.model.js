const mongoose = require('mongoose'); 

const equipmentSchema = new mongoose.Schema({
    name: String,
    package: String, 
    description: String, 
    thumbnail: String, 
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});  

 module.exports =  mongoose.model('Equipment', equipmentSchema); 