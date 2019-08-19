import React from 'react';
import { Row, Col } from 'antd';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PackageLayout from '../../../components/PackageLayout';
import { Card, Icon } from 'antd';
import Footer from '../components/Footer';
import Fadein from 'react-reveal/Fade';
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
        <PackageLayout>
        <div name="about" className="about-construction-page">
            <div className="about-construction-wrapper">
            <Box className="about-message-wrapper">
            <Fadein duration={1000}>
                <Typography className="about-message">
                Rent Equipment,
                Book Performers,
                Hire Organisers.
                </Typography>
            </Fadein>
            </Box>
            <Box className="about-services-wrapper">
                <Row gutter={16}>
                    {servicesData.map(service=>(
                        <Col 
                            xs={24} md={12} lg={8}
                            key={service.id} 
                        >
                        <Fadein duration={1500}>
                    <Card>
                        <Meta
                        avatar={<Icon type={service.src} />}
                        title={service.title}
                        />
                        <p className="service-description">{service.description}</p>
                    </Card>
                    </Fadein>
                    </Col>
                    ))}
                </Row>
            </Box>
            </div>
        </div>
        <Footer/>
        </PackageLayout>
    )
}