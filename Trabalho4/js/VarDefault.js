var scene;  // Conjunto de elementos que podem ou não aparecer(Mundo)
var camera; // Espectador(Área de visualização)
var render; // Responsável por renderizar tudo
var comboChange;
var Elementos   = [];
var ListaEvento = [];

var animacao                    = false;
var MousePosAnterior            = {x: 0, y: 0}
var velocidadeOmbroEsquerdoC    = -0.05;
var velocidadeOmbroEsquerdoL    = -0.05;
var velocidadeOmbroDireitoC     = -0.05;
var velocidadeOmbroDireitoL     = -0.05;
var velocidadeCotoveloDireitoC  = -0.05;
var velocidadeCotoveloEsquerdoC = -0.05;
var velocidadeCoxaEsquerdoC     = -0.05;
var velocidadeCoxaEsquerdoL     = -0.05;
var velocidadeCoxaDireitoC      = -0.05;
var velocidadeCoxaDireitoL      = -0.05;
var velocidadePernaDireitoC     = -0.03;
var velocidadePernaEsquerdoC    = -0.03;
var velocidadePernaDireitoPosX  = -0.05;
var velocidadePernaDireitoPosY  = -0.05;
var velocidadePernaDireitoPosZ  = -0.05;
var velocidadePernaEsquerdoPosX = -0.05;
var velocidadePernaEsquerdoPosY = -0.05;
var velocidadePernaEsquerdoPosZ = -0.05;

var parametrosGUI = {
    scalarPuppet: 1,
    positionX: 0,
    positionY: -6,
    positionZ: 0,
    rotationY: 0,
    skyColor: "#000000",
    groundColor: "#006400",
    animais: "",
    modelGUI: ""
  };

var red              = new THREE.Color(1, 0, 0);
var green            = new THREE.Color(0, 1, 0);
var blue             = new THREE.Color(0, 0, 1);

var materials = [new THREE.MeshBasicMaterial({color: blue}),
                 new THREE.MeshBasicMaterial({color: blue}),
                 new THREE.MeshBasicMaterial({color: blue}),
                 new THREE.MeshBasicMaterial({color: blue}),
                 new THREE.MeshBasicMaterial({color: green}),
                 new THREE.MeshBasicMaterial({color: blue})];

const Angulo     = 50;
const velocidade = 0.07;
const mouseclick = 999;
const mousewheel = 998;
const botao      = 0;
const status     = 1;
const delta      = 2;
const angQuater  = 888;

var Botoes = {87 : ["W",          false], // Inicio Movimentos
              119: ["w",          false],
              65 : ["A",          false],
              97 : ["a",          false],
              83 : ["S",          false],
              115: ["s",          false],
              68:  ["D",          false],
              115: ["d",          false],
              81 : ["Q",          false],
              113: ["q",          false],
              69 : ["E",          false],
              101: ["e",          false],
              82 : ["R",          false],
              114: ["r",          false],
              70 : ["F",          false],
              102: ["f",          false],
              84 : ["T",          false],
              116: ["t",          false],
              71 : ["G",          false],
              103: ["g",          false],
              89 : ["Y",          false],
              121: ["y",          false],
              72 : ["H",          false],
              104: ["h",          false], // Fim Movimentos
              77 : ["M",          false],
              109: ["m",          false], // Animação
              999: ["mouseclick", false],
              998: ["mousewheel", false, 0],
              888: ["Angulo",     false, 0],
              32 : ["space",      false],
            };

function ParaRadianos(angulo){
  return angulo * (Math.PI / 180);
}