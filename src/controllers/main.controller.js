const Order = require('../models/order.model');
const Equipment = require('../models/equipment.model'); 
const Package = require('../models/package.model'); 
const isEmpty = require('../validator/is-empty');
const {validateOrderInput}    = require('../validator/order.validator'); 

/**
 * ORDERS CONTROLLER 
 */
exports.addOrder = async (req,res) => {
    try{

        const { errors, isValid } = validateOrderInput(req.body); 

        if(!isValid) {
            return res.status(400).json(errors); 
        }

        const order = await Order.create(req.body).catch((error) => {throw error}); 
        
        if(order) await res.json({success: true}); 

    }catch(err){
        console.log(err); 
        return res.status(500).end(); 
    }
}


exports.getAllOrders = async (req,res) => {
    try{
        const orders = await orders.find(); 

        if(orders) await res.send(orders); 

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
        const packages = await Package.find();  

        res.json(packages); 

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




