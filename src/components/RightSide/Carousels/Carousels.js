import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1684479352/pexels-tuan-pm-11291536_lvqqud.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1684479295/pexels-thgusstavo-santana-16271139_fgcz9s.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1684479287/pexels-min-an-765248_pru2fi.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
