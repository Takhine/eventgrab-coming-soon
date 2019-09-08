const mongoose = require('mongoose'); 

const packageSchema = new mongoose.Schema({
    name: String,
    description: String, 
    slide1: String, 
    slide2: String, 
    slide3: String,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});  

 module.exports =  mongoose.model('Package', packageSchema); 