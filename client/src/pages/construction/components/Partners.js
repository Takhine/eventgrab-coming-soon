import React from 'react';
import { Row, Col, Button } from 'antd';
import Box from '@material-ui/core/Box';
import vendor from '../../../static/images/vendor.svg';
import organiser from '../../../static/images/organiser.svg';
import performer from '../../../static/images/performer.svg';
import Fadein from 'react-reveal/Fade';
export default function Partners(){
    return(
        <div className="partners-wrapper">
            <Row gutter={16} style={{marginBottom:'100px'}}>
                <Col xs={24} lg={8}>
            <span id="partners-mobile" style={{position:'absolute',top:'-450px'}}></span>                
            <span id="partners-section" style={{position:'absolute',top:'-350px'}}></span>                
                    <Box className="partner-box">
                    <Fadein bottom duration={1500}>
                        <div name="partners" className="text-center" style={{maxWidth:'250px',margin:'auto'}}>
                            <img style={{padding:'20px'}} src={vendor} alt="Vendor Truck" width="100%"/>
                        </div>
                        <h2 className="text-center partner-heading">Vendors</h2>
                        <p className="text-center partner-message">Earn a passive income by renting out your equipment, for events or daily use!</p>
                        <div className="text-center">
                        <Button className="partner-button">Enquire</Button>
                        </div>
                </Fadein>
                        
                    </Box>
                </Col>
                
                <Col xs={24} lg={8}>
                <Box className="partner-box">
                <Fadein bottom duration={1500}>

                        <div className="text-center" style={{maxWidth:'250px',margin:'auto'}}>
                            <img style={{padding:'20px'}} src={performer} alt="Vendor Truck" width="100%"/>
                        </div>
                        <h2 className="text-center partner-heading">Performers</h2>
                        <p className="text-center partner-message">Get booked for gigs and performances at events across Mumbai city! </p>
                        <div className="text-center">
                        <Button className="partner-button">Enquire</Button>
                        </div>
                    </Fadein>
                        
                    </Box>
                </Col>
                
                <Col xs={24} lg={8}>
                <Box className="partner-box">
                <Fadein bottom duration={1500}>

                        <div className="text-center" style={{maxWidth:'250px',margin:'auto'}}>
                            <img style={{padding:'20px'}} src={organiser} alt="Vendor Truck" width="100%"/>
                        </div>
                        <h2 className="text-center partner-heading">Organisers</h2>
                        <p className="text-center partner-message">Have professional experience organizing events? Call us to collaborate!</p>
                        <div className="text-center">
                        <Button className="partner-button">Enquire</Button>
                        </div>
                    </Fadein>
                        
                    </Box>
                </Col>
            </Row>
        </div>
    )
}