const mongoose = require('mongoose'); 

const equipmentSchema = new mongoose.Schema({
    name: String,
    package_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Package'
    }, 
    description: String, 
    images: {
        "thumbnail": String, 
    }, 
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});  

 module.exports =  mongoose.model('Equipment', equipmentSchema); 