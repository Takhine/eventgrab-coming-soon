import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import facebook from '../../../static/images/icons/facebook.svg';
import instagram from '../../../static/images/icons/instagram.svg';
import linkedin from '../../../static/images/icons/linkedin.svg';
import Link from '@material-ui/core/Link';

export default function Footer(){
    return(
        <div className="footer-construction-page">
            <Box style={{paddingRight:'20px'}}>
            <h3 className="footer-heading">Contact Us</h3>
            <Link href="tel:8104142534">
            <Typography className="footer-message">
                +91 8104142534
            </Typography>
            </Link>
            <Link href="mailto:careers@eventgrab.com">
            <Typography className="footer-message">
                careers@eventgrab.com
            </Typography>
            </Link>
            </Box>
            <Box style={{margin:'0',padding:'40px'}}>
                <Link href="https://www.facebook.com/eventgrabofficial/" target="_blank">
                <img className="social-icon" width="60" src={facebook} alt="Facebook Icon"/>                
                </Link>
                <Link href="https://www.instagram.com/eventgrabofficial/" target="_blank">
                <img className="social-icon" width="60" src={instagram} alt="Instagram Icon"/>
                </Link>
                <Link href="https://www.linkedin.com/company/20390373/" target="_blank">
                <img className="social-icon" width="60" src={linkedin} alt="Linkedin Icon"/>                
                </Link>
            </Box>
        </div>
    )
}