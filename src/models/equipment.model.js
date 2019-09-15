const mongoose = require('mongoose'); 

const equipmentSchema = new mongoose.Schema({
    name: String,
    package: String, 
    description: String, 
    thumbnail: String, 
    isAddOn: {
        type: Boolean, 
        default: false, 
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});  

 module.exports =  mongoose.model('Equipment', equipmentSchema); 