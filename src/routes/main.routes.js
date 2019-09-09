const express = require('express'); 
const router = express.Router(); 
const mainCtrl = require('../controllers/main.controller');

router.get('/getEquipmentByPackage', mainCtrl.getPackagesWithEquipments);
router.get('/getAllPackages', mainCtrl.getPackages);  
router.get('/getAllOrders', mainCtrl.getAllOrders); 
router.get('/getAllEquipments', mainCtrl.getAllEquipments); 
router.get('/getPackgeDetails', mainCtrl.getPackageByName); 
router.get('/getAllData', mainCtrl.combineData); 
router.get('/getAllEnquiries', mainCtrl.getAllEnquiry); 

router.post('/addUpdateEquipment', mainCtrl.addUpdateEquipment);
router.post('/addUpdatePackage', mainCtrl.addUpdatePackage);

router.post('/createOrder', mainCtrl.addOrder); 
router.post('/createEnquiry', mainCtrl.addEnquiry); 


router.post('/loginAdmin', mainCtrl.loginAdmin); 

module.exports = router; 