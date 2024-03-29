const Order = require('../models/order.model');
const Equipment = require('../models/equipment.model'); 
const Package = require('../models/package.model'); 
const Enquiry = require('../models/enquiry.model'); 
const Admin   = require('../models/admin.model'); 
const isEmpty = require('../validator/is-empty');

const {validateOrderInput}    = require('../validator/order.validator'); 
const {validateLoginInput}    = require('../validator/login.validator'); 

const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const {secretOrKey} = require('../config/keys'); 

exports.addOrder = async (req,res) => {
    try{

        const { errors, isValid } = validateOrderInput(req.body); 

        if(!isValid) {
            return res.status(400).json(errors); 
        }

        if (!isEmpty(req.body._id)) {
            const order = await Order.findByIdAndUpdate(req.body._id,req.body,{ new: true }).catch((error) =>{throw error}); 

            if(order) return res.json({success: true}); 
        }
        
        const order = await Order.create(req.body).catch((error) => {throw error}); 

        if(order) return res.json({success: true}); 


    }catch(err){
        console.log(err); 
        return res.status(500).end(); 
    }
}


exports.getAllOrders = async (req,res) => {
    try{
        const orders = await Order.find(); 

        if(orders) await res.send(orders); 

    }catch(err) {
        console.log(err); 
        return res.status(500).end(); 
    }
}

exports.addEnquiry = async (req,res) => {
    try{

        const { errors, isValid } = validateOrderInput(req.body); 

        if(!isValid) {
            return res.status(400).json(errors); 
        }

        if (!isEmpty(req.body._id)) {
            const enquiry = await Enquiry.findByIdAndUpdate(req.body._id,req.body,{ new: true }).catch((error) =>{throw error}); 

            if(enquiry) return res.json({success: true}); 
        }
        
        const enquiry = await Enquiry.create(req.body).catch((error) => {throw error}); 

        if(enquiry) return res.json({success: true}); 


    }catch(err){
        console.log(err); 
        return res.status(500).end(); 
    }
}


exports.getAllEnquiry = async (req,res) => {
    try{
        const enquiries = await Enquiry.find(); 

        if(enquiries) await res.send(enquiries); 

    }catch(err) {
        console.log(err); 
        return res.status(500).end(); 
    }
}


/**
 * EQUIPMENT CONTROLLER
 */

exports.getAllEquipments = async (req,res) => {
    try{
        const equipments = await Equipment.find();
        
        if(equipments) return res.send(equipments); 

    }catch(err) {
        console.log(err); 
        return res.status
    }
}

exports.addUpdateEquipment = async (req,res) => {
    try{
        if (!isEmpty(req.body._id)) {
            const equipment = await Equipment.findByIdAndUpdate(req.body._id,req.body,{ new: true }).catch((error) =>{throw error}); 

            if(equipment) return res.json({success: true}); 
        }
        
        const equipment = await Equipment.create(req.body).catch((error) => {throw error}); 

        if(equipment) return res.json({success: true}); 



    }catch(err) {
        console.log(err); 
        return res.status
    }
}
/**
 * PACKAGE CONTROLLER 
 */
exports.getPackagesWithEquipments = async (req,res) => {
     try {
        const package_name = req.query.package ? req.query.package : '';
        if(package_name){
            const equipments = await Equipment.find({package: package_name}); 

            if(equipments) return res.send(equipments);  
        }
     } catch(err) {
         console.log(err); 
         return res.status(500).end(); 
     }
}



exports.getPackages = async (req,res) => {
    try {
       const packages = await Package.find();  

       res.json(packages); 

    } catch(err) {
        console.log(err); 
        return res.status(500).end(); 
    }
}

exports.getPackageByName = async (req,res) => {
    try{

        const package_name = req.query.package_name ? req.query.package_name : ''


        if(package_name){
            const package = await Package.findOne({name: package_name}); 

            if(package){ return res.send(package)} else throw Error;  
        }
    }catch(err){
        return res.status(500).end(); 
    }
}


exports.combineData = async (req,res) => {    
    try {
        
        const data = {
        college_package: [],
        birthday_package: [],
        collPackData: {}, 
        birthPackData: {}
        }

    data.college_package = await Equipment.find({package: 'college-package'}); 
    data.birthday_package = await Equipment.find({package: 'birthday-package'});
    data.collPackData = await Package.find({name: 'college-package'}); 
    data.birthPackData = await Package.find({name: 'birthday-package'}); 


    res.send(data); 

    }catch(err){
        return res.status(500).end(); 
    }

}


exports.addUpdatePackage = async (req,res) => {
    try {
        if (!isEmpty(req.body._id)) {
            const package = await Package.findByIdAndUpdate(req.body._id,req.body,{ new: true }).catch((error) =>{throw error}); 

            if(package) return res.json({success: true}); 
        }
        
        const package = await Package.create(req.body).catch((error) => {throw error}); 

        if(package) return res.json({success: true}); 

    } catch(err) {
        console.log(err); 
        return res.status(500).end(); 
    }
}


exports.loginAdmin = async (req,res) => {
    try{

        const { errors, isValid } = validateLoginInput(req.body); 

        if(!isValid) {
            return res.status(400).json(errors); 
        }

        const email = req.body.email; 
        const password = req.body.password; 
        const admin = await Admin.findOne({email}); 
        
        if(isEmpty(admin)){
            errors.email = "Email not found"; 
            return res.status(404).json(errors); 
        }

        // Check Password 
        bcrypt.compare(password, admin.password)
            .then(isMatch => {
                if(isMatch) {
                    // Host Matched 
                    const payload = {
                        id: admin.id,
                        name: admin.name,
                        email: admin.email 
                    }

                    // Sign Token 
                    jwt.sign(
                        payload, 
                        secretOrKey,
                        { expiresIn: "48h"},
                        (err, token) => {
                            res.json({
                                success: true, 
                                token: token 
                            }); 
                        }); 
                }else{
                    errors.password = 'Password is incorrect'
                    return res.status(400).json(errors); 
                }
            }); 
    }catch(err){
       console.log(err); 
       return res.status(500).end(); 
    }
}; 



