import React from 'react';
import { Row, Col, Button } from 'antd';
import Box from '@material-ui/core/Box';
import vendor from '../../../static/images/vendor.svg';
import organiser from '../../../static/images/organiser.svg';
import performer from '../../../static/images/performer.svg';

export default function Partners(){
    return(
        <div className="partners-wrapper">
            <Row gutter={16} style={{marginBottom:'100px'}}>
                <Col xs={24} lg={8}>
                    <Box className="partner-box">
                        <div name="partners" className="text-center">
                            <img style={{padding:'20px'}} src={vendor} alt="Vendor Truck" width="100%"/>
                        </div>
                        <h2 className="text-center partner-heading">Vendors</h2>
                        <p className="text-center partner-message">Join our network of 
                        hosts, organizers and performers
                        And a lot more!</p>
                        <div className="text-center">
                        <Button className="partner-button">Enquire</Button>
                        </div>
                        
                    </Box>
                </Col>
                <Col xs={24} lg={8}>
                <Box className="partner-box">
                        <div className="text-center">
                            <img style={{padding:'20px'}} src={performer} alt="Vendor Truck" width="100%"/>
                        </div>
                        <h2 className="text-center partner-heading">Performers</h2>
                        <p className="text-center partner-message">Join our network of 
                        hosts, organizers and performers
                        And a lot more!</p>
                        <div className="text-center">
                        <Button className="partner-button">Enquire</Button>
                        </div>
                        
                    </Box>
                </Col>
                <Col xs={24} lg={8}>
                <Box className="partner-box">
                        <div className="text-center">
                            <img style={{padding:'20px'}} src={organiser} alt="Vendor Truck" width="100%"/>
                        </div>
                        <h2 className="text-center partner-heading">Organisers</h2>
                        <p className="text-center partner-message">Join our network of 
                        hosts, organizers and performers
                        And a lot more!</p>
                        <div className="text-center">
                        <Button className="partner-button">Enquire</Button>
                        </div>
                        
                    </Box>
                </Col>
            </Row>
        </div>
    )
}