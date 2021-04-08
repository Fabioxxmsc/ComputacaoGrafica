var scene;  // Conjunto de elementos que podem ou não aparecer(Mundo)
var camera; // Espectador(Área de visualização)
var render; // Responsável por renderizar tudo
var Elementos        = [];

var MousePosAnterior        = {x: 0, y: 0}
var velocidadeOmbroDireitoC = -0.01;
var velocidadeOmbroDireitoL = -0.01;

var red              = new THREE.Color(1, 0, 0);
var green            = new THREE.Color(0, 1, 0);
var blue             = new THREE.Color(0, 0, 1);

var materials = [new THREE.MeshBasicMaterial({color: blue}),
                 new THREE.MeshBasicMaterial({color: blue}),
                 new THREE.MeshBasicMaterial({color: blue}),
                 new THREE.MeshBasicMaterial({color: blue}),
                 new THREE.MeshBasicMaterial({color: green}),
                 new THREE.MeshBasicMaterial({color: blue})];

const Angulo     = 40;
const velocidade = 0.07;
const mouseclick = 999;
const mousewheel = 998;
const botao      = 0;
const status     = 1;
const delta      = 2;
const angQuater  = 888;

var Botoes = {87 : ["W",          false],
              119: ["w",          false],
              65 : ["A",          false],
              97 : ["a",          false],
              83 : ["S",          false],
              115: ["s",          false],
              68:  ["D",          false],
              115: ["d",          false],
              999: ["mouseclick", false],
              998: ["mousewheel", false, 0],
              888: ["Angulo",     false, 0]
            };

function ParaRadianos(angulo){
  return angulo * (Math.PI / 180);
}