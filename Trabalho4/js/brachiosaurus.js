function createBrachiosaurus() {
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/brachiosaurus/low.FBX',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['brq'] = obj;

      let texLoader = new THREE.TextureLoader().setPath("../assets/brachiosaurus/");

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("low_01 - Default_Diffuse.png");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          material.normalMap = texLoader.load("1_normals.jpg");
          material.roughnessMap = texLoader.load("low_01 - Default_Glossiness.png");
          material.roughnessMap.wrapS = THREE.RepeatWrapping;

          material.metalnessMap = texLoader.load("low_01 - Default_Specular.png");
          material.metalnessMap.wrapS = THREE.RepeatWrapping;

          child.material = material;
        }
      }
      );

      obj.scale.y = 7;
      obj.scale.z = 7;
      obj.scale.x = 7;

      obj.position.x = 25;
      obj.position.y = 1;
      obj.position.z = -10;

      obj.rotation.y += 0.9;

      scene.add(obj);
      console.log("Carregou Braquiossauro");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda no Braquiossauro!: " + error);
    }//o que acontece se der merda.
  );
}