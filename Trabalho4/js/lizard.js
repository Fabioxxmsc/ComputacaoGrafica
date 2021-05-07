function createLizard() {
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/lizard/Lizard.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['liz'] = obj;

      let texLoader = new THREE.TextureLoader().setPath("../assets/lizard/");

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("Lizard_texture.png");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          child.material = material;
        }
      }
      );

      obj.scale.y = 0.005;
      obj.scale.z = 0.005;
      obj.scale.x = 0.005;

      obj.position.y = -7.5;
      obj.position.x = 5;
      obj.position.z = 45;

      scene.add(obj);
      console.log("Carregou Lagarto");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda Lagarto!: " + error);
    }//o que acontece se der merda.
  );
}