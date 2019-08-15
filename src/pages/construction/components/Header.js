import React from 'react';
import Box from '@material-ui/core/Box';
import cycle from '../../../static/images/construction-cycle.svg';
export default function Header(){
    return(
        <div className="header-construction-page">
            <h3 id="soon">Coming Soon</h3>
            <div className="header-construction-wrapper">
            <h2 className="header-message">New website is on a Roll!</h2>
            <Box className="header-image">
                <img src={cycle} alt="People Cycling" />
            </Box>
            </div>
            <Box className="header-question-wrapper">
            <h1 className="header-question">Want to join us on the ride?</h1>
            </Box>
        </div>
    )
}