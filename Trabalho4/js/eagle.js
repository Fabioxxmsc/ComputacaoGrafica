function createEagle(){
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/eagle/Eagle.FBX',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['aga'] = obj;

      let texLoader = new THREE.TextureLoader().setPath("../assets/eagle/");

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("default_Base_Color.png");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          material.normalMap = texLoader.load("1_normals.jpg");
          material.roughnessMap = texLoader.load("1_occlusion.jpg");
          material.roughnessMap.wrapS = THREE.RepeatWrapping;

          child.material = material;
        }
      }
      );

      obj.scale.y = 1.3;
      obj.scale.z = 1.3;
      obj.scale.x = 1.3;

      obj.position.y = -5.5;
      obj.position.x = -33;
      obj.position.z = 19;

      obj.rotation.y += 5;

      scene.add(obj);
      console.log("Carregou Aguia");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda Aguia!: " + error);
    }//o que acontece se der merda.
  );  
}