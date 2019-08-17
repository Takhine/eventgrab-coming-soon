import React,{Component} from 'react';
import ConstructionLayout from '../../components/ConstructionLayout';
import Header from './components/Header';
import Partners from './components/Partners';
import About from './components/About';
import Careers from './components/Careers';
import Footer from './components/Footer';
import '../../static/css/construction/Construction.scss';


export default class Construction extends Component{
    render(){
        return(
            <ConstructionLayout>
				<Header/>
                <Partners/>
					<Careers/>
                    <About/>
				<Footer/>
			</ConstructionLayout>
        );
    }
}
