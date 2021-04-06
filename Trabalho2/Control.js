var onKeyDown = function(event){ }

var onKeyUp = function(event){ }

var onMouseWheel = function(event){ }

var onMouseMove = function(event){ }

var onMouseDown = function(event){ }

var onMouseUp = function(event){ }

function createScene(){
  scene  = new THREE.Scene();
}

function createCamera(){
  camera = new THREE.PerspectiveCamera(Angulo, window.innerWidth / window.innerHeight, 1, 150);
}

function createRender(){
  render = new THREE.WebGLRenderer(); // API Gráfica
  render.setSize(window.innerWidth, window.innerHeight);  
}

function configBody(){
  document.body.appendChild(render.domElement);
}

function configCamera(){
  camera.position.x = 0;
  camera.position.y = 2;
  camera.position.z = 80;
}

function mountGeometry(){
  Elementos.push(new TPuppet());
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

function eventListener(){
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  document.addEventListener('mousewheel', onMouseWheel);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
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
  eventListener();
};

window.onload = this.inicio;