var scene;  // Conjunto de elementos que podem ou não aparecer(Mundo)
var camera; // Espectador(Área de visualização)
var render; // Responsável por renderizar tudo
var Elementos = [];
var velocidade = [0.080, 0.080, 0.080];
const Angulo = 40;

var FuncCubo = function(){
  let geometria = new THREE.BoxGeometry(3, 3, 3);

  let red   = new THREE.Color(1, 0, 0);
  let green = new THREE.Color(0, 1, 0);
  let blue  = new THREE.Color(0, 0, 1);
  let cores = [red, green, blue];

  /*  for(let i = 0; i < 3; i++){
    geometria.faces[4 * i].color = cores[i];
    geometria.faces[4 * i + 1].color = cores[i];
    geometria.faces[4 * i + 2].color = cores[i];
    geometria.faces[4 * i + 3].color = cores[i];
  }
*/
  Elementos.push(new THREE.Mesh(geometria, new THREE.MeshBasicMaterial({color: "blue"})));
  Elementos.push(new THREE.Mesh(geometria, new THREE.MeshBasicMaterial({color: "red"})));  
  Elementos.push(new THREE.Mesh(geometria, new THREE.MeshBasicMaterial({color: "blue"})));  
  Elementos.push(new THREE.Mesh(geometria, new THREE.MeshBasicMaterial({color: "red"})));  
  Elementos.push(new THREE.Mesh(geometria, new THREE.MeshBasicMaterial({color: "blue"})));  

  for(let elem of Elementos)
    scene.add(elem);
};

var FuncMov = function(){
  requestAnimationFrame(FuncMov); // Adiciona o método na fila de renderização

  // elementos["cubo2"].position.x-=velocidade;
	// if (elementos["cubo2"].position.x < -20)
		// velocidade *=-1;
    // https://codeshare.io/G68MAz
    // https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html

  for (let elem of Elementos){
    if ((Elementos.indexOf(elem) + 1) %2 === 0){
      elem.position.x += velocidade[0] + (Elementos.indexOf(elem) / 10);
      elem.position.y += velocidade[1] + (Elementos.indexOf(elem) / 10);
      elem.position.y += velocidade[2] + (Elementos.indexOf(elem) / 10);
    }else{
      elem.position.x -= velocidade[0] - (Elementos.indexOf(elem) / 10);
      elem.position.y -= velocidade[1] - (Elementos.indexOf(elem) / 10);
      elem.position.y -= velocidade[2] - (Elementos.indexOf(elem) / 10);
    }
  }

  if (Elementos[0].position.x < -50 || Elementos[0].position.x > 50)
    velocidade[0] *= -1;

    if (Elementos[0].position.y < -10 || Elementos[0].position.y > 10)
    velocidade[1] *= -1;

    if (Elementos[0].position.z < -10 || Elementos[0].position.z > 10)
    velocidade[2] *= -1;    

  render.render(scene, camera);
}

var FuncIni = function(){
  scene  = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(Angulo, window.innerWidth / window.innerHeight, 1, 100);

  render = new THREE.WebGLRenderer(); // API Gráfica
  render.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(render.domElement);

  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 80;

  FuncCubo();
  FuncMov();
};

window.onload = this.FuncIni;

