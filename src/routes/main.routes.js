const express = require('express'); 
const router = express.Router(); 
const mainCtrl = require('../controllers/main.controller');
const passport = require('passport'); 


const adminAuth = passport.authenticate('jwt-admin-rule', {session: false}); 

router.post('/createOrder',mainCtrl.addOrder); 
router.post('/createEnquiry',mainCtrl.addEnquiry); 

router.get('/getEquipmentByPackage', mainCtrl.getPackagesWithEquipments);
router.get('/getAllData', mainCtrl.combineData);

router.get('/getAllPackages', mainCtrl.getPackages);  
router.get('/getAllEquipments', mainCtrl.getAllEquipments); 
router.get('/getPackgeDetails', mainCtrl.getPackageByName);  

/**
 * ADMIN AUTH
 */
router.get('/getAllEnquiries',adminAuth, adminAuth,mainCtrl.getAllEnquiry); 
router.get('/getAllOrders',adminAuth, mainCtrl.getAllOrders); 
router.post('/addUpdateEquipment',adminAuth, mainCtrl.addUpdateEquipment);
router.post('/addUpdatePackage',adminAuth, mainCtrl.addUpdatePackage);


router.post('/loginAdmin', mainCtrl.loginAdmin); 

module.exports = router; 