import React from 'react';
import { Row, Col } from 'antd';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PackageLayout from '../../../components/PackageLayout';
import { Card, Icon, Button } from 'antd';
import Footer from '../components/Footer';
import Fadein from 'react-reveal/Fade';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import {Helmet} from 'react-helmet';

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
export default class About extends React.Component{
    componentDidMount() {
 
        Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
        });
     
        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });
     
        scrollSpy.update();
     
      }
      scrollToTop
      () {
        scroll.scrollToTop();
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
      handleSetActive(to) {
        console.log(to);
      }
    render(){
    return(
        <PackageLayout>
            <Helmet>
                <title>Equipment Renting Services | Package deals</title>
                <meta name="description" content="Eventgrab leads the event management industry in college fests, house parties and birthday parties.
                 We're an event renting company Mumbai and help plan all kinds of events. 
                 Join the eventgrab community and rent equipment like AV, lights, decor and furniture for your event. 
				Book your equipment with ease."/>
                <meta name="keywords" content="party equipment rental, rent party supplies, chair and table rentals, open mic, college fest, equipment rental, events, eventgrab, house party, birthday party, festival, cheap rental, rent equipment, rent offers," />
                <meta name="robots" content="index,follow"/>
            </Helmet>
        <div name="about" className="about-construction-page">
            <div className="about-construction-wrapper">
            <Box className="about-message-wrapper">
            <Fadein duration={1000}>
                <Typography className="about-message" variant="h1">
                Rent Equipment,
                <br/>
                Book Performers,
                <br/>
                Hire Organisers.
                </Typography>
            </Fadein>
            <Link 
                activeClass="active" 
                to="services" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                onSetActive={this.handleSetActive}
                >
                <Button className="scroll-bottom" 
                icon="down" 
                shape="circle"/>
                </Link>
            </Box>
            <Box className="about-services-wrapper">
                <Row name="services" gutter={16}>
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
}