const Package   = require('../models/package.model'); 
const Equipment = require('../models/equipment.model'); 

db = require('../db/index');

const imageLink1 = "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
const imageLink2 = "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
const thumbnail_img = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"; 
const loadData =  async () => {
    await Package.deleteMany({}).then((res) => {
        console.log('All package cleared');

    }).catch((err) => {
        console.log('Error clearing the package data');
    });


    await Equipment.deleteMany({}).then((res) => {
        console.log('All equipment cleared')
    }).catch((err) => {
        console.log('Error clearing equipment data'); 
    })

    await Package.create({
        name: 'birthday-package', 
        slide1: imageLink1, 
        slide2: imageLink1, 
        slide3: imageLink1

    }); 

    await Package.create({
        name: 'college-package', 
        slide1: imageLink2, 
        slide2: imageLink2, 
        slide3: imageLink2 
    }); 



    await Equipment.create({
        name: 'Chairs',
        package: 'college-package', 
        description: 'somedescription', 
        thumbnail: thumbnail_img,     
    })



    await Equipment.create({
        name: 'Chairs',
        package: 'birthday-package', 
        description: 'somedescription', 
        thumbnail: thumbnail_img,     
    })

    console.log('all data loaded')
    db.close(); 
}; 


loadData(); 



