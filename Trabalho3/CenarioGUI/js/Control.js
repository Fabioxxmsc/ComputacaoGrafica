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
    if(comboChange.getValue() == "Mapa")
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
  camera = new THREE.PerspectiveCamera(Angulo, window.innerWidth / window.innerHeight, 1, 300);
}

function createRender() {
  render = new THREE.WebGLRenderer(); // API Gráfica
  render.setSize(window.innerWidth, window.innerHeight);
}

function configBody() {
  document.body.appendChild(render.domElement);
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

  parametrosGUI = {
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

  let opcoes = ['Mapa', 'Ovelha', 'Triceratopis'];
  comboChange = gui.add(parametrosGUI, 'animais').options(opcoes).name("Objetos");

  comboChange.onChange(function (parametro) {
    if (parametro == 'Ovelha') {
      camera.lookAt(Elementos["ove"].position);
      parametrosGUI.modelGui = "ove";
    } else if (parametro == 'Triceratopis') {
      camera.lookAt(Elementos["tri"].position);
      parametrosGUI.modelGui = "tri";
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
  loader = new THREE.OBJLoader();

  loader.load(
    'assets/triceratops.obj',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['tri'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0xbe6262");
        }
      }
      );

      obj.scale.y = 2;
      obj.scale.z = 2;
      obj.scale.x = 2;

      obj.position.y = -6;
      obj.position.z = 2;

      obj.rotation.y += 0.9;

      scene.add(obj);
      console.log("Carregou!");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log(" Deu merda!: " + error);
    }//o que acontece se der merda.
  );

  //carregando Ovelha
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    'assets/Sheep.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['ove'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0xbe62be");
        }
      }
      );

      obj.scale.y = 0.02;
      obj.scale.z = 0.02;
      obj.scale.x = 0.02;

      obj.position.y = -5;
      obj.position.x = -20;
      obj.position.z = 0;

      obj.rotation.y += 0.9;

      scene.add(obj);
      console.log("Carregou Ovelha");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log(" Deu merda!: " + error);
    }//o que acontece se der merda.
  );


};

function animation() {
  requestAnimationFrame(animation); // Adiciona o método na fila de renderização
  render.render(scene, camera);
}

function createFloor() {
  ground = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1000, 1000),
    new THREE.MeshBasicMaterial({ color: 0x006400 })
  );
  ground.rotation.x = - Math.PI / 2;
  ground.position.y -= 7.5;
  scene.add(ground);
}

function eventListener() {
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('keyup', onKeyUp);

  document.addEventListener('mousewheel', onMouseWheel);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
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