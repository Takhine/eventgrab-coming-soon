const express = require('express'); 
const router = express.Router(); 
const mainCtrl = require('../controllers/main.controller');

router.get('/getAllPackages', mainCtrl.getPackagesWithEquipments); 
router.get('/getAllOrders', mainCtrl.getAllOrders); 

router.post('/addUpdateEquipment', mainCtrl.addUpdateEquipment);
router.post('/addUpdatePackage', mainCtrl.addUpdatePackage); 
router.post('/createOrder', mainCtrl.addOrder); 

module.exports = router; 