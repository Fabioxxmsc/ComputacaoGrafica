function createSheep() {
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/sheep/Sheep.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, color, reposiciona, rotaciona
      Elementos['ove'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load("../assets/texturas/UVSheep.png")}
          );
        }
      }
      );

      obj.scale.y = 0.03;
      obj.scale.z = 0.03;
      obj.scale.x = 0.03;

      obj.position.y = -7.5;
      obj.position.x = -15;
      obj.position.z = 30;

      obj.rotation.y += 1.7;

      scene.add(obj);
      console.log("Carregou Ovelha");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda na Ovelha!: " + error);
    }//o que acontece se der merda.
  );
}