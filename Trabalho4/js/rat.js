function createRat() {  
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/rat/rat.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['rat'] = obj;

      let texLoader = new THREE.TextureLoader().setPath("../assets/rat/");

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("UV Rat.png");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          child.material = material;
        }
      }
      );

      obj.scale.y = 0.01;
      obj.scale.z = 0.01;
      obj.scale.x = 0.01;

      obj.position.y = -7.3;
      obj.position.x = -35;
      obj.position.z = 20;

      obj.rotation.y += 11;

      scene.add(obj);
      console.log("Carregou Rato");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda no Rato!: " + error);
    }//o que acontece se der merda.
  );
}