import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

class CarouselComponent extends Component {
  render() {
    const carousel1 = require("../../../assets/website/carousel1.jpg");
    return (
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop={true}
        swipeable
        transitionTime={3000}
        interval={6000}
      >
        <div>
          <img src={carousel1} alt="pic1" />
          {/* <p className="legend">Labmeta S.A test1.</p> */}
        </div>
        <div>
          <img src={carousel1} alt="pic2" />
          {/* <p className="legend">Labmeta S.A test2.</p> */}
        </div>
        <div>
          <img src={carousel1} alt="pic3" />
          {/* <p className="legend">Labmeta S.A test3.</p> */}
        </div>
      </Carousel>
    );
  }
}

export default withRouter(CarouselComponent);
