import React from 'react';
import Navbar from './Navbar';
import 'static/css/main.scss'; 

export default function ConstructionLayout(props) {
    return (
        <React.Fragment>
            <Navbar />
            {props.children} 
        </React.Fragment>
    )
}