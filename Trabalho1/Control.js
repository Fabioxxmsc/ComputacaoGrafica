var scene;  // Conjunto de elementos que podem ou não aparecer(Mundo)
var camera; // Espectador(Área de visualização)
var render; // Responsável por renderizar tudo
var Elementos = [];
const Angulo = 55;
const velocidade = 0.20;

function createScene(){
  scene  = new THREE.Scene();
}

function createCamera(){
  camera = new THREE.PerspectiveCamera(Angulo, window.innerWidth / window.innerHeight, 1, 100);
}

function createRender(){
  render = new THREE.WebGLRenderer(); // API Gráfica
  render.setSize(window.innerWidth, window.innerHeight);  
}

function configBody(){
  document.body.appendChild(render.domElement);
}

function configCamera(){
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 80;
}

function mountGeometry(){
  Elementos.push(new TSphereGeometry());
  Elementos.push(new TRingGeometry());
}

function mountScene(){
  for(let elem of Elementos)
    scene.add(elem.CriarObjeto());
}

function animation(){
  requestAnimationFrame(animation); // Adiciona o método na fila de renderização

  for(let elem of Elementos)
    elem.Mover();

  render.render(scene, camera);
}

var inicio = function(){  
  createScene();
  createCamera();
  createRender();
  configBody();
  configCamera();
  mountGeometry();
  mountScene();
  animation();
};

window.onload = this.inicio;