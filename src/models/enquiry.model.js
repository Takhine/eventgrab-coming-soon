const mongoose = require('mongoose'); 

const enquirySchema = new mongoose.Schema({
    email: String,
    contact_number: String, 
    comments: String, 
    package: String, 
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}});  

 module.exports =  mongoose.model('Enquiry', enquirySchema); 