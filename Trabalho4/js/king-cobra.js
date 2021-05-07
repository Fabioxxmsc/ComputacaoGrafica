function createKingCobra(){
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/king-cobra/low.FBX',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['cbr'] = obj;

      let texLoader = new THREE.TextureLoader().setPath("../assets/king-cobra/");

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("cobra_vcols.jpg");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          material.normalMap = texLoader.load("low_Low_mat_Normal.png");
          material.roughnessMap = texLoader.load("low_Low_mat_Glossiness.png");
          material.roughnessMap.wrapS = THREE.RepeatWrapping;

          material.metalnessMap = texLoader.load("low_Low_mat_Specular.png");
          material.metalnessMap.wrapS = THREE.RepeatWrapping;

          child.material = material;
        }
      }
      );

      obj.scale.y = 0.8;
      obj.scale.z = 0.8;
      obj.scale.x = 0.8;

      obj.position.x = 20;
      obj.position.y = -7.5;
      obj.position.z = 45;

      obj.rotation.y += 4.7;

      scene.add(obj);
      console.log("Carregou Cobra");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda na Cobra!: " + error);
    }//o que acontece se der merda.
  );  
}