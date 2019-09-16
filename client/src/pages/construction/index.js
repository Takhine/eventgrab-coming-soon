import React,{Component} from 'react';
import ConstructionLayout from '../../components/ConstructionLayout';
import Header from './components/Header';
import Partners from './components/Partners';
import Careers from './components/Careers';
import Footer from './components/Footer';
import '../../static/css/construction/Construction.scss';
import {Helmet} from 'react-helmet';

export default class Construction extends Component{
    render(){
        return(
            <ConstructionLayout>
                <Helmet>
                <title>Eventgrab: Rent Equipment | College Fest Package | House Party Package</title>
                <meta name="description" content="Rent equipment for your college fest. 
                We specialize in the rental of furniture, stage, lights and sound. Host a grand event with eventgrab.
                "/>
                <meta name="keywords" content="party equipment rental, rent party supplies, chair and table rentals, open mic, college fest, equipment rental, events, eventgrab, house party, birthday party, festival, cheap rental, rent equipment, rent offers," />
                <meta name="robots" content="index,follow"/>
            </Helmet>
				<Header/>
                <Partners/>
					<Careers/>
				<Footer/>
			</ConstructionLayout>
        );
    }
}
