/**

     * Array con las imagenes y enlaces que se iran mostrando en la web

     */

var imagenes = new Array(
  [url("./img/1"), "http://www.lawebdelprogramador.com/cursos/"],

  [url("./img/2"), "http://www.lawebdelprogramador.com/foros/"],

  [url("./img/3"), "http://www.lawebdelprogramador.com/pdf/"]
);

var contador = 0;

/**

     * Funcion para cambiar la imagen y link

     */

function rotarImagenes() {
  // cambiamos la imagen y la url

  contador++;

  document.getElementById("imagen").src =
    imagenes[contador % imagenes.length][0];

  document.getElementById("link").href =
    imagenes[contador % imagenes.length][1];
}

/**

     * Función que se ejecuta una vez cargada la página

     */

onload = function () {
  // Cargamos una imagen aleatoria

  rotarImagenes();

  // Indicamos que cada 5 segundos cambie la imagen

  setInterval(rotarImagenes, 5000);
};
