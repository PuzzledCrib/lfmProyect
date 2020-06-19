import React from "react";

const Trabajos = () => {
  return (
    <div class="trabajos">
      <div class="row trabajo">
        <div className="col-sm ">
          <div class="card">
            <img src="img/12.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Cazando al Venado</h5>
              <p class="card-text">
                Juego desarrollado en el Game Jam 2018, junto a Alexis y Mitch.
                Desarrollado en Unity con código C#
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card">
            <img src="img/13.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">EAB-Models</h5>
              <p class="card-text">
                Página Web para buscar vehículos y poder compararlos.
                Información sencilla de autos para el usuario
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card">
            <img src="img/14.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Taller Koki Landing Page</h5>
              <p class="card-text">
                Ejemplo de Landing Page para el Taller Koki, con react, sass y bootstrap.
                Protipo sin funcionalidad
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div class="card">
            <img src="img/11.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Afiches Parque Marino del Pacífico</h5>
              <p class="card-text">
                Estos afiches fueron creados para la reapertura del Parque Marino del Pacífico, 
                en tiempos de Covid-19
                
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabajos;
