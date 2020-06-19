import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from 'react-bootstrap/Badge'

const Habilidades = () => {
  return (
    <div class="row habilidades">
      <div class="col-4">
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

      <div class="col-7">
        <h3>Consulta los mejores autos</h3>
        <ProgressBar animated variant="success" now={45} />
      </div>
    </div>
  );
};

export default Habilidades;
