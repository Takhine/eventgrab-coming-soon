import React from 'react';
import PageHeader from './PageHeader';
import '../../static/css/main.scss'; 

export default function PackageLayout(props) {
    return (
        <React.Fragment>
            <PageHeader />
            {props.children} 
        </React.Fragment>
    )
}