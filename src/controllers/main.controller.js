const Order = require('../models/order.model');
const Equipment = require('../models/equipment.model'); 
const Package = require('../models/package.model'); 

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
exports.addUpdateEquipment = async (req,res) => {
    try{

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


exports.addUpdatePackage = async (req,res) => {
    try {
        const package = await Package.create(req.body); 

        if(package) res.json({success: true}).catch((error) => {throw error})
    } catch(err) {
        console.log(err); 
        return res.status(500).end(); 
    }
}


