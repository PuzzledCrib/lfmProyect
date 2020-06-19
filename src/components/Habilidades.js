import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';

const Habilidades = () => {
  return (
    <div class="row habilidades">
      <div class="col-4 col-left">
        <Badge pill variant="secondary">
          <h4 class="habilidad">JavaScript</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={90} label="90%" />
        </div>
        <Badge pill variant="secondary">
          <h4 class="habilidad">Java</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={85} label="85%" />
        </div>
        <Badge pill variant="secondary">
          <h4 class="habilidad">CSS</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={80} label="80%" />
        </div>
        <Badge pill variant="secondary">
          <h4 class="habilidad">PHP</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={80} label="80%" />
        </div>
        <Badge pill variant="secondary">
          <h4 class="habilidad">Fotografía</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={95} label="95%" />
        </div>
        <Badge pill variant="secondary">
          <h4 class="habilidad">Diseño Gráfico</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={50} label="50%" />
        </div>
      </div>

      <div class="col-7 col-right">
      <Carousel className="carousel carousel-fade">
                    <Carousel.Item>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-1.jpg"
                         alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-8.jpg"
                         alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-14.jpg"
                         alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-20.jpg"
                         alt="Fourth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-26.jpg"
                         alt="Fifth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-33.jpg"
                         alt="Sixth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-39.jpg"
                         alt="Seventh slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="slider_img d-block w-100"
                         src="https://360view.hum3d.com/original/Ford/Ford_Mustang_GT_1967_360_720_50-45.jpg"
                         alt="Eighth slide"
                    />
                    </Carousel.Item>  
               </Carousel>
      </div>
    </div>
  );
};

export default Habilidades;
