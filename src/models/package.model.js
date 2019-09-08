const mongoose = require('mongoose'); 

const packageSchema = new mongoose.Schema({
    name: String,
    description: String, 
    images: {
        "slider": [String],
        "main":  String
    }, 
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});  

 module.exports =  mongoose.model('Package', packageSchema); 