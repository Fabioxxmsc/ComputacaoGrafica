var onKeyDown = function(event){ 
  for(let key in Botoes){
    if(key == event.keyCode)
      Botoes[key][status] = true;
  }
}

var onKeyUp = function(event){ 
  for(let key in Botoes){
    if(key == event.keyCode)
      Botoes[key][status] = false;
  }  
}

var onMouseWheel = function(event){
  Botoes[mousewheel][status] = true;
  Botoes[mousewheel][delta]  = event.deltaY;
}

var onMouseMove = function(event){
	let diferencaMovimento = {
		x: event.offsetX - MousePosAnterior.x,
		y: event.offsetY - MousePosAnterior.y
	}

	if (Botoes[mouseclick][status]){
    Botoes[angQuater][status] = true;
    Botoes[angQuater][delta]  = new THREE.Quaternion().setFromEuler(
                                new THREE.Euler (ParaRadianos(diferencaMovimento.y) * 0.5,
                                                 ParaRadianos(diferencaMovimento.x) * 0.5, 0, 'XYZ') 
                                                                   );
	}

	MousePosAnterior = {x: event.offsetX, y: event.offsetY};
}

var onMouseDown = function(event){ 
  Botoes[mouseclick][status] = true;
}

var onMouseUp = function(event){
  Botoes[mouseclick][status] = false;
 }

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