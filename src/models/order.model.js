const mongoose = require('mongoose'); 

const orderSchema = new mongoose.Schema({
    email: String,
    contact_number: String, 
    comments: String, 
    package: String, 
    startDate: Date, 
    endDate: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});  

 module.exports =  mongoose.model('Order', orderSchema); 