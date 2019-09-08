import React from 'react';
import '../../static/css/Navbar.scss';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {NavLink} from 'react-router-dom';

// Icons
import careers from '../../static/images/icons/careers-icon.svg';
import about from '../../static/images/icons/about-icon.svg';
import partners from '../../static/images/icons/partner-icon.svg';
import packages from '../../static/images/icons/package-icon.svg';
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
          <Link to="partners" className="mobile-item-wrapper" offset={-530} activeClass="active" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
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
          <Link to="careers" className="mobile-item-wrapper" offset={-370} activeClass="active" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
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
          </div>
    )
}
}