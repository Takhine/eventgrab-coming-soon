import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../../static/images/about-bg.svg';
export default function HeaderImages(props){
    return(
<Carousel className="custom-carousel" showArrows={false} showStatus={false} emulateTouch={true} showIndicators={false} axis="vertical">
<div>
<img src={props.imageLink} alt="test" />
</div>
<div>
<img src={props.imageLink} alt="test"/>
</div>
<div>
<img src={props.imageLink} alt="test"/>
</div>
</Carousel>
    );
}