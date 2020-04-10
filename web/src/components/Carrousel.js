import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

class CarouselComponent extends Component {
  render() {
      const slide1 = require("../assets/components/test1.jpg")
    return(
        <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay infiniteLoop={true}>
            <div>
                <img src={ slide1 } alt="pic1" />
                <p className="legend">Labmeta S.A test1.</p>
            </div>
            <div>
                <img src={ slide1 } alt="pic2" />
                <p className="legend">Labmeta S.A test2.</p>
            </div>
            <div>
                <img src={ slide1 } alt="pic3" />
                <p className="legend">Labmeta S.A test3.</p>
            </div>
        </Carousel>
    )
  }
}

export default withRouter(CarouselComponent);
