var onKeyDown = function (event) {
  ListaEvento[event.keyCode] = true;

  for (let key in Botoes) {
    if (key == event.keyCode)
      Botoes[key][status] = true;
  }
}

var onKeyUp = function (event) {
  ListaEvento[event.keyCode] = false;
  for (let key in Botoes) {
    if (key == event.keyCode)
      Botoes[key][status] = false;
  }
}

var onMouseWheel = function (event) {
  Botoes[mousewheel][status] = true;
  Botoes[mousewheel][delta] = event.deltaY;
}

var onMouseMove = function (event) {
  let diferencaMovimento = {
    x: event.offsetX - MousePosAnterior.x,
    y: event.offsetY - MousePosAnterior.y
  }

  if (Botoes[mouseclick][status]) {
    if (comboChange.getValue() == "Mapa")
      camera.rotation.y += ParaRadianos(diferencaMovimento.x) * 0.1;
  }

  MousePosAnterior = { x: event.offsetX, y: event.offsetY };
}

var onMouseDown = function (event) {
  ListaEvento[mouseclick] = true;
  Botoes[mouseclick][status] = true;
}

var onMouseUp = function (event) {
  ListaEvento[mouseclick] = false;
  Botoes[mouseclick][status] = false;
}

function createScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x00BFFF);
}

function createCamera() {
  camera = new THREE.PerspectiveCamera(Angulo, window.innerWidth / window.innerHeight, 1, 500);
}

function createRender() {
  render = new THREE.WebGLRenderer(); // API Gráfica
  render.setSize(window.innerWidth, window.innerHeight);
}

function configBody() {
  document.body.appendChild(render.domElement);
  controls = new THREE.OrbitControls(camera, render.domElement);
  controls.zoomSpeed = 0.1;
}

function configCamera() {
  camera.position.x = 0;
  camera.position.y = 1.7;
  camera.position.z = 50;
}

function createIluminacao() {
  let spot = new THREE.SpotLight(0xffffff);
  spot.position.set(100, 100, 100);

  scene.add(spot);
  scene.add(new THREE.AmbientLight(0xffffff));
}

function createGUI() {
  const gui = new dat.GUI();

  let opcoes = ['Mapa', 'Strv103'];
  comboChange = gui.add(parametrosGUI, 'animais').options(opcoes).name("Objetos").setValue("Mapa");

  comboChange.onChange(function (parametro) {
    if (parametro == 'Strv103') {
      camera.lookAt(Elementos["strv"].position);
      parametrosGUI.modelGui = "strv";
    } 

  }
  );

  let folderPosition = gui.addFolder("Position");

  let positionX = folderPosition.add(parametrosGUI, 'positionX').min(-6).max(6).step(0.1).name("Position X");
  positionX.onChange(function (parametro) {
    Elementos[parametrosGUI.modelGui].position.x = parametro;
  }
  );

  let positionY = folderPosition.add(parametrosGUI, 'positionY').min(-10).max(10).step(0.1).name("Position Y");
  positionY.onChange(function (parametro) {
    Elementos[parametrosGUI.modelGui].position.y = parametro;
  }
  );

  let positionZ = folderPosition.add(parametrosGUI, 'positionZ').min(-6).max(6).step(0.1).name("Position Z");
  positionZ.onChange(function (parametro) {
    Elementos[parametrosGUI.modelGui].position.z = parametro;
  }
  );

  let folderRotation = gui.addFolder("Rotation");

  let rotationY = folderRotation.add(parametrosGUI, 'rotationY').min(-1).max(1).step(0.1).name("Rotation Y");
  rotationY.onChange(function (parametro) {
    if (parametrosGUI.modelGUI != "")
      Elementos[parametrosGUI.modelGUI].rotation.y += parametro;
  }
  );

  let colorFolder = gui.addFolder('Coloros');
  let sColor = colorFolder.addColor(parametrosGUI, 'skyColor').name("SkyColor");
  sColor.onChange(function (parametro) {
    scene.background = new THREE.Color(parametro);
  }
  );

  let gColor = colorFolder.addColor(parametrosGUI, 'groundColor').name("Ground");
  gColor.onChange(function (parametro) {
    ground.material.color.setHex(parametro.replace("#", "0x"));
  }
  );

  gui.open();
}

function objLoading() {
  createSTRV103();
};

function animation() {
  requestAnimationFrame(animation); // Adiciona o método na fila de renderização
  render.render(scene, camera);
}

function createFloor() {
  let textureLoad = new THREE.TextureLoader();
	let groundTexture = textureLoad.load("../assets/texturas/terrain/grasslight-big.jpg"); //busca a imagem

	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; //quero que ela se repita
	groundTexture.encoding = THREE.sRGBEncoding; //padrão cores, sempre que existir será informado
	groundTexture.repeat.set(25,25); //número de vezes que ela vai se repetir dentro do nosso chão
	
	let materialGround = new THREE.MeshStandardMaterial({map: groundTexture});
	materialGround.normalMap = textureLoad.load("../assets/texturas/terrain/grasslight-big-nm.jpg"); //busca a normal, que da noção básica de profundidade

  ground = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1000, 1000),
		materialGround
  );
  
  ground.rotation.x = - Math.PI / 2;
  ground.position.y -= 7.5;
  scene.add(ground);
	scene.fog = new THREE.Fog(0xcce0ff, 150, 450);
}

function eventListener() {
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  //document.addEventListener('mousewheel', onMouseWheel); /* Não precisa mais */
  //document.addEventListener('mousemove', onMouseMove);
  //document.addEventListener('mousedown', onMouseDown);
  //document.addEventListener('mouseup', onMouseUp);
}

var inicio = function () {
  createScene();
  createCamera();
  createRender();
  configBody();
  configCamera();
  createIluminacao();
  createGUI();
  objLoading();
  animation();
  createFloor();
  eventListener();
};

window.onload = this.inicio;