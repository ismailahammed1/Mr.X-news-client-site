import React from "react";
import { Carousel } from "react-bootstrap";
import brand1 from "../../../asset/Brand/brand1.jpg";
import brand2 from "../../../asset/Brand/brand2.jpg";

const BrandCarusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={brand1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={brand2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarusel;
