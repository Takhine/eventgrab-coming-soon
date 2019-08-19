import React from 'react';
import { Row, Col, Button } from 'antd';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import quote from '../../../static/images/icons/careers-quote.svg';
import Link from '@material-ui/core/Link';
import Fade from 'react-fade-in';
import Fadein from 'react-reveal/Fade';
export default function Careers(){
    return(
        <div className="careers-construction-page">
            <Row gutter={24}>
                <Col xs={24} md={12}>
                    <h3 className="careers-heading">Careers</h3>
                    <Row gutter={16} className="careers-quote-wrapper">
                        <Col xs={8} lg={4}>
                        <img className="quote-icon" src={quote} alt="Quote Icon"/>
                        </Col>
                        <Col xs={16} lg={20}>
                        <Fade delay="1500">
                        <Typography className="careers-message">
                        It doesn’t make sense to 
                        hire smart people and 
                        then tell them what to do. 
                        We hire smart people so 
                        they can tell us what to 
                        do.
                        </Typography>
                        </Fade>
                        </Col>
                    </Row>
                </Col>
                <Col id="careers" style={{position:'relative'}} xs={24} md={12}>
                    <div name="careers" className="profiles-wrapper">
                    <Box className="profile-box">
                    <Fadein bottom duration={1500}>
                        <div className="profile">
                        <h4 className="profile-heading">Sales Intern</h4>
                        <p className="profile-message">Build corporate relationships with 
                        potential and existing vendors, acquire 
                        new clients and have the ability to sell 
                        the platform to absolutely anyone!
                        </p>
                        <div className="profile-button-wrapper">
                        <Link target="_blank" href="https://forms.gle/ri4XTyWtkiWYdEaT7">
                        <Button icon="user" className="profile-button">Apply Now</Button>
                        </Link>
                        </div>
                        </div>
                        </Fadein>
                    </Box>
                    <Box className="profile-box">
                        <Fadein  bottom duration={1500}>
                    <div className="profile">
                        <h4 className="profile-heading">Marketing Intern</h4>
                        <p className="profile-message">
                        In the era of digital marketing, we are 
                        looking for someone who can conquer the web as well as use traditional methods.
                        If you think you have what it takes 
                        apply now!
                        </p>
                        <div className="profile-button-wrapper">
                        <Link target="_blank" href="https://forms.gle/2b12XjZ9ujLeEtJPA">
                        <Button icon="user" className="profile-button">Apply Now</Button>
                        </Link>
                        </div>
                    </div>
                    </Fadein>
                    </Box>
                    <Box className="profile-box">
                        <Fadein bottom duration={1500}>
                    <div className="profile">
                        <h4 className="profile-heading">Social Media Intern</h4>
                        <p className="profile-message">
                        We believe online marketing is as 
                        important as its offline brother, so we 
                        are looking for someone with a killer 
                        portfolio to fit the bill!
                        </p>
                        <div className="profile-button-wrapper">
                        <Link target="_blank" href="https://forms.gle/g3opRLW7igbLuKZYA">
                        <Button icon="user" className="profile-button">Apply Now</Button>
                        </Link>
                        </div>
                        </div>
                        </Fadein>
                    </Box>
                    </div>
                </Col>
            </Row>
        </div>
    )
}