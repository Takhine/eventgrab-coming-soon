import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

// media assets
import logo from '../../static/images/logo.png';
import MobilePageBar from './MobilePageBar';
import careers from '../../static/images/icons/careers-icon.svg';
import about from '../../static/images/icons/about-icon.svg';
import partners from '../../static/images/icons/partner-icon.svg';
import packages from '../../static/images/icons/package-icon.svg';

// styles
import '../../static/css/Navbar.scss';
 class PageHeader extends React.Component {
  constructor(){
    super();
    this.state=
     {
       top:false,
     };
  }
   render(){
    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown') {
        return;
      }
      this.setState({ [side]:open });
    };
    const fullList = side => (
      <div
        role="presentation"
        onClick={toggleDrawer('top', false)}
        onKeyDown={toggleDrawer('top', false)}
      >
        <MobilePageBar toggleDrawer={toggleDrawer('top',false)}/>
      </div>
    );
  return (
    <div className="grow">
      <AppBar position="fixed" id="navbar-root">
        <Toolbar className="header-bar">
        <IconButton 
          onClick={toggleDrawer('top', true)} 
          id="menu-icon" 
          edge="start" 
          color="inherit" 
          aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={this.state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
          </Drawer>       
          <NavLink id="logo-link" to="/">
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
            <img src={packages} alt="Menu" width="18"/>
            <Typography className="navbar-item">
              Packages
            </Typography>
        </Button> 
          </NavLink>
          <Link className="navbar-item-wrapper" to="/#partners-section">
          <Button
            color="inherit"
            aria-label="Open drawer"
            edge="start"
        >
            <img src={partners} alt="Menu" width="18"/>
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
      </AppBar>
    </div>
  );
   }
}
export default PageHeader; 
