import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Habilidades = () => {
  return (
    <div class="row habilidades">
      <div class="col-4">
        <div class="car">
          <h3>Consulta los mejores autos</h3>

          <ProgressBar
            animated
            class="progressBar"
            variant="success"
            now={85}
            label="85%"
          />
          <h3>Consulta los mejores autos</h3>
          <ProgressBar animated variant="success" now={45} label="45%" />
          <h3>Consulta los mejores autos</h3>
          <ProgressBar animated variant="success" now={45} label="45%" />
          <h3>Consulta los mejores autos</h3>
          <ProgressBar animated variant="success" now={45} label="45%" />
          <h3>Consulta los mejores autos</h3>
          <ProgressBar animated variant="success" now={45} label="45%" />
          <h3>Consulta los mejores autos</h3>
          <ProgressBar animated variant="success" now={45} label="45%" />
        </div>
      </div>

      <div class="col-7">
        <h3>Consulta los mejores autos</h3>
        <ProgressBar animated variant="success" now={45} />
      </div>
    </div>
  );
};

export default Habilidades;
