import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// media assets
import logo from '../../static/images/logo.png';
// import MobileBar from './MobileBar';
import careers from '../../static/images/icons/careers-icon.svg';
import about from '../../static/images/icons/about-icon.svg';

// styles
import '../../static/css/Navbar.scss';
 class PageHeader extends React.Component {
  
   render(){
  return (
    <div className="grow">
      <AppBar position="fixed" id="navbar-root">
        <Toolbar className="header-bar">      
          <NavLink to="/">
            <Button>
              <img src={logo} alt="Logo" width={130}/>
            </Button>
          </NavLink>
          
          <div className="grow" />
          <div className="section-desktop">
          <NavLink className="navbar-item-wrapper" exact to="/college-package">
          <Button
            color="inherit"
            aria-label="Open drawer"
            edge="start"
        >
            <img src={careers} alt="Menu" width="18"/>
            <Typography className="navbar-item">
              College Package
            </Typography>
        </Button> 
          </NavLink>
          <Link className="navbar-item-wrapper" to="/#partners">
          <Button
            color="inherit"
            aria-label="Open drawer"
            edge="start"
        >
            <img src={careers} alt="Menu" width="18"/>
            <Typography className="navbar-item">
              Partners
            </Typography>
        </Button> 
          </Link>
          <Link className="navbar-item-wrapper" to="/#careers">
          <Button
            color="inherit"
            aria-label="Open drawer"
            edge="start"
        >
            <img src={careers} alt="Menu" width="18"/>
            <Typography className="navbar-item">
              Careers
            </Typography>
        </Button> 
          </Link>
          <NavLink className="navbar-item-wrapper" to="/about-us">
          <Button
            color="inherit"
            aria-label="Open drawer"
            edge="start"
        >
            <img src={about} alt="Menu" width="18"/>
            <Typography className="navbar-item">
              About us
            </Typography>
        </Button> 
          </NavLink>
          </div>
        </Toolbar>
        {/* <MobileBar/> */}
      </AppBar>
    </div>
  );
   }
}
export default PageHeader; 
