import React from 'react';
import Box from '@material-ui/core/Box';
import cycle from '../../../static/images/construction-cycle.svg';
import Fade from 'react-fade-in';
import Fadein from 'react-reveal/Fade';

export default function Header(){
    return(
        <div className="header-construction-page">
            <Fade delay="1000">
            <h3 id="soon">Event Season</h3>
            </Fade>
            <div className="header-construction-wrapper">
            <Fade delay="700">
            <h2 className="header-message">New website is on a Roll!</h2>
            </Fade>
            <Fade delay="500">
            <Box className="header-image">
                <img src={cycle} alt="People Cycling" />
            </Box>
            </Fade>
            </div>
            <Box className="header-question-wrapper">
            <Fadein bottom>
            <h1 className="header-question">Help us, Help you!</h1>
            </Fadein>
            <p className="header-answer">Increase your business drastically and grab the 
            leads on the cities humblest and trending 
            events!</p>
            </Box>
        </div>
    )
}