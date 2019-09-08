const express = require('express'); 
const router = express.Router(); 
const mainCtrl = require('../controllers/main.controller');

router.get('/getEquipmentByPackage', mainCtrl.getPackagesWithEquipments);
router.get('/getAllPackages', mainCtrl.getPackages);  
router.get('/getAllOrders', mainCtrl.getAllOrders); 
router.get('/getAllEquipments', mainCtrl.getAllEquipments); 

router.post('/addUpdateEquipment', mainCtrl.addUpdateEquipment);
router.post('/addUpdatePackage', mainCtrl.addUpdatePackage); 
router.post('/createOrder', mainCtrl.addOrder); 

module.exports = router; 