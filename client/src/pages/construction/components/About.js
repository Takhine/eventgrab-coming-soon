import React from 'react';
import { Row, Col } from 'antd';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Card, Icon } from 'antd';

const { Meta } = Card;

const servicesData=[
    {
        id:1,
        src:'gift',
        title:'Event Packages',
        description:'Fests, House parties, Sports events and more !',
    },
    {
        id:2,
        src:'database',
        title:'Equipment Varieties',
        description:'Explore our vast list of equipment for all occasions ',
    },
    {
        id:3,
        src:'apartment',
        title:'Hosting Ecosystem',
        description:'Join our network of hosts, organizers and performers',
    },
    {
        id:4,
        src:'user',
        title:'Professional Organizers',
        description:'Host events with a professional by your side',
    },
    {
        id:5,
        src:'smile',
        title:'Talented Performers',
        description:'Add a buzz to your parties, book a performer!',
    },
    {
        id:6,
        src:'shopping-cart',
        title:'Unbeatable Deals',
        description:'We have the best possible offers for our hosts',
    },
]
export default function About(){
    return(
        <div name="about" className="about-construction-page">
            <div className="about-construction-wrapper">
            <Box className="about-message-wrapper">
            <Typography className="about-message">
            Rent Equipment,
            Book Performers,
            Hire Organisers.
            </Typography>
            </Box>
            <Box className="about-services-wrapper">
                <Row gutter={16}>
                    {servicesData.map(service=>(
                        <Col 
                            xs={24} md={12} lg={8}
                            key={service.id} 
                        >
                    <Card>
                        <Meta
                        avatar={<Icon type={service.src} />}
                        title={service.title}
                        />
                        <p className="service-description">{service.description}</p>
                    </Card>
                    </Col>
                    ))}
                </Row>
            </Box>
            </div>
        </div>
    )
}