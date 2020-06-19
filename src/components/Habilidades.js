import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";

const Habilidades = () => {
  return (
    <div class="row habilidades">
      <div class="col-4 col-left">
        <Badge pill variant="secondary">
          <h4 class="habilidad">Fotografía</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={95} label="95%" />
        </div>
        <Badge pill variant="secondary">
          <h4 class="habilidad">Java</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={90} label="90%" />
        </div>
        <Badge pill variant="secondary">
          <h4 class="habilidad">JavaScript</h4>
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
          <h4 class="habilidad">C#</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={70} label="70%" />
        </div>
        <Badge pill variant="secondary">
          <h4 class="habilidad">Diseño Gráfico</h4>
        </Badge>{" "}
        <div class="progressBar">
          <ProgressBar animated variant="success" now={50} label="50%" />
        </div>
      </div>

      <div class="col-7 col-right">
        <Carousel
          className="carousel carousel-fade"
          onHover={true}
          controls={true}
          wrap={true}
          keyboard={true}
          interval="2500"
        >
          <Carousel.Item>
            <div
              class="card bg-dark mb-3"
              style={{ width: "46vw", marginLeft: "5.5vw" }}
            >
              <div class="card-body bg-dark">
                <h5 class="card-title mb-2">
                  Afiche Distanciamiento para el Parque Marino del Pacífico
                </h5>
                <h6 class="card-title mb-2">2020</h6>
              </div>
              <img
                src="img/11.jpg"
                class="card-img-top"
                alt="Afiche Distanciamiento para el Parque Marino del Pacífico"
              />
              <div class="card-footer bg-dark"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              class="card bg-dark mb-3"
              style={{ width: "46vw", marginLeft: "5.5vw" }}
            >
              <div class="card-body bg-dark">
                <h5 class="card-title mb-2">
                  Fotografía de un atardecer en Bajamar
                </h5>
                <h6 class="card-title mb-2">2019</h6>
              </div>
              <img
                src="img/1.jpg"
                class="card-img-top"
                alt="Fotografía de un atardecer en Bajamar"
              />
              <div class="card-footer bg-dark"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              class="card bg-dark mb-3"
              style={{ width: "46vw", marginLeft: "5.5vw" }}
            >
              <div class="card-body bg-dark">
                <h5 class="card-title mb-2">Juego Caza al Venado en Unity</h5>
                <h6 class="card-title mb-2">2018</h6>
              </div>
              <img
                src="img/12.png"
                class="card-img-top"
                alt="Juego Caza al Venado en Unity"
              />
              <div class="card-footer bg-dark"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              class="card bg-dark mb-3"
              style={{ width: "46vw", marginLeft: "5.5vw" }}
            >
              <div class="card-body bg-dark">
                <h5 class="card-subtitle mb-2">
                  Juego Escaleras y Serpientes en Java
                </h5>
                <h6 class="card-title mb-2">2018</h6>
              </div>
              <img
                src="img/12.jpg"
                class="card-img-top"
                alt="Juego Escaleras y Serpientes en Java"
              />
              <div class="card-footer bg-dark"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              class="card bg-dark mb-3"
              style={{ width: "46vw", marginLeft: "5.5vw" }}
            >
              <div class="card-body bg-dark">
                <h5 class="card-subtitle mb-2">Fotografía al Gran Cañon</h5>
                <h6 class="card-title mb-2">2019</h6>
              </div>
              <img
                src="img/9.jpeg"
                class="card-img-top"
                alt="Fotografía al Gran Cañon"
              />
              <div class="card-footer bg-dark"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              class="card bg-dark mb-3"
              style={{ width: "46vw", marginLeft: "5.5vw" }}
            >
              <div class="card-body bg-dark">
                <h5 class="card-subtitle mb-2">
                  Fotografía a las faldas del Volcán Poás
                </h5>
                <h6 class="card-title mb-2">2019</h6>
              </div>
              <img
                src="img/11.jpg"
                class="card-img-top"
                alt="Fotografía a las faldas del Volcán Poás"
              />
              <div class="card-footer bg-dark"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              class="card bg-dark mb-3"
              style={{ width: "46vw", marginLeft: "5.5vw" }}
            >
              <div class="card-body bg-dark">
                <h5 class="card-subtitle mb-2">Página Web EAB-Models</h5>
                <h6 class="card-title mb-2">2020</h6>
              </div>
              <img
                src="img/13.jpg"
                class="card-img-top"
                alt="Página Web EAB-Models"
              />
              <div class="card-footer bg-dark"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              class="card bg-dark mb-3"
              style={{ width: "46vw", marginLeft: "5.5vw" }}
            >
              <div class="card-body bg-dark">
                <h5 class="card-subtitle mb-2">
                  Landing Page para Taller Koki
                </h5>
                <h6 class="card-title mb-2">2020</h6>
              </div>
              <img
                src="img/14.jpg"
                class="card-img-top"
                alt="Landing Page para Taller Koki"
              />
              <div class="card-footer bg-dark"></div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Habilidades;
