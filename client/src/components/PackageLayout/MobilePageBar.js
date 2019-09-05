import React from 'react';
import '../../static/css/Navbar.scss';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {NavLink} from 'react-router-dom';

// Icons
import careers from '../../static/images/icons/careers-icon.svg';
import about from '../../static/images/icons/about-icon.svg';
import partners from '../../static/images/icons/partner-icon.svg';
import packages from '../../static/images/icons/package-icon.svg';
import { HashLink as Link } from 'react-router-hash-link';

export default class FilterBar extends React.Component{
  render(){
    return(
        <div className="grow" id="mobilebar">
          <Toolbar style={{paddingLeft:'0'}}>     
          <div className="grow" />
          <NavLink className="mobile-item-wrapper" exact to="/college-package">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={this.props.toggleDrawer}
        >
            <img src={packages} alt="Menu" width="15"/>
            <Typography className="mobile-item">
              Packages
            </Typography>
        </IconButton> 
        </NavLink>
        <Link className="mobile-item-wrapper" to="/#partners-mobile">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={this.props.toggleDrawer}
        >
            <img src={partners} alt="Menu" width="15"/>
            <Typography className="mobile-item">
              Partners
            </Typography>
        </IconButton> 
          </Link>
          <Link className="mobile-item-wrapper" to="/#careers-mobile">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={this.props.toggleDrawer}
        >
            <img src={careers} alt="Menu" width="15"/>
            <Typography className="mobile-item">
              Careers
            </Typography>
        </IconButton> 
          </Link>
          <NavLink className="mobile-item-wrapper" exact to="/about-us">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={this.props.toggleDrawer}
        >
            <img src={about} alt="Menu" width="15"/>
            <Typography className="mobile-item">
              About
            </Typography>
        </IconButton> 
          </NavLink>
        </Toolbar>
          </div>
    )
}
}