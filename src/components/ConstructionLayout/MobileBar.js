import React from 'react';
import '../../static/css/Navbar.scss';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { Icon } from 'antd';
import careers from '../../static/images/icons/careers-icon.svg';
import about from '../../static/images/icons/about-icon.svg';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default class FilterBar extends React.Component{
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
    return(
        <div className="grow" id="mobilebar">
          <Toolbar>  
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            id="mobile-call"
        >
            <Icon type="phone" /> 
            <Typography className="navbar-item">
              <small>8104142534</small>
            </Typography>
        </IconButton>    
          <div className="grow" />
          <Link to="careers" className="navbar-item-wrapper" offset={-400} activeClass="active" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
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
          <Link to="about" className="navbar-item-wrapper" offset={-100} activeClass="active" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
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
        </Toolbar>
          </div>
    )
}
}