"use client";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <Image
            src="/images/img2.jpeg"
            alt="First slide"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Some description</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <Image
            src="/images/img3.jpeg"
            alt="Second slide"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Another description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
