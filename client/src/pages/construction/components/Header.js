import React from 'react';
import Box from '@material-ui/core/Box';
import cycle from '../../../static/images/construction-cycle.svg';
export default function Header(){
    return(
        <div className="header-construction-page">
            <h3 id="soon">Event Season</h3>
            <div className="header-construction-wrapper">
            <h2 className="header-message">New website is on a Roll!</h2>
            <Box className="header-image">
                <img src={cycle} alt="People Cycling" />
            </Box>
            </div>
            <Box className="header-question-wrapper">
            <h1 className="header-question">Help us, Help you!</h1>
            <p className="header-answer">Increase your business drastically and grab the 
            leads on the cities humblest and trending 
            events!</p>
            </Box>
        </div>
    )
}