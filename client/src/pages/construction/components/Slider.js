import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../../static/images/about-bg.svg';

export default function HeaderImages(){
    return(
<Carousel className="custom-carousel" showArrows={false} showStatus={false} showIndicators={false} axis="vertical">
<div>
<img src={img} alt="test" />
</div>
<div>
<img src={img} alt="test"/>
</div>
<div>
<img src={img} alt="test"/>
</div>
</Carousel>
    );
}