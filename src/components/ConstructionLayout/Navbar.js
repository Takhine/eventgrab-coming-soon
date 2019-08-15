import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// media assets
import logo from 'static/images/logo.png';
import MobileBar from './MobileBar';
import careers from 'static/images/icons/careers-icon.svg';
import about from 'static/images/icons/about-icon.svg';

// styles
import 'static/css/Navbar.scss';
 class Navbar extends React.Component {
  componentDidMount() {
 
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
 
  }
  scrollToTop
  () {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  handleSetActive(to) {
    console.log(to);
  }
   render(){
  return (
    <div className="grow">
      <AppBar position="fixed" id="navbar-root">
        <Toolbar>      
          <Link to="logo" onClick={this.scrollToTop}>
            <Button>
              <img src={logo} width={130}/>
            </Button>
          </Link>
          
          <div className="grow" />
          <div className="section-desktop">
          <Link className="navbar-item-wrapper" activeClass="active" to="careers" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
        >
            <img src={careers} alt="Menu" width="18"/>
            <Typography className="navbar-item">
              Careers
            </Typography>
        </IconButton> 
          </Link>
          <Link className="navbar-item-wrapper" activeClass="active" to="about" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
        >
            <img src={about} alt="Menu" width="18"/>
            <Typography className="navbar-item">
              About us
            </Typography>
        </IconButton> 
          </Link>
          </div>
        </Toolbar>
        <MobileBar/>
      </AppBar>
    </div>
  );
   }
}
export default Navbar; 
