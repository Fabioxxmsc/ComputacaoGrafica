function createOwl(){
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/owl/OWL on the branch/low.FBX',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['owl'] = obj;

      let texLoader = new THREE.TextureLoader().setPath("../assets/owl/OWL on the branch/");

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("111_01___Default_Diffuse.png");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          material.normalMap = texLoader.load("111_01___Default_Normal.png");
          material.roughnessMap = texLoader.load("111_01___Default_Glossiness.png");
          material.roughnessMap.wrapS = THREE.RepeatWrapping;

          material.metalnessMap = texLoader.load("111_01___Default_Specular.png");
          material.metalnessMap.wrapS = THREE.RepeatWrapping;

          child.material = material;
        }
      }
      );

      obj.scale.y = 2;
      obj.scale.z = 2;
      obj.scale.x = 2;

      obj.position.x = 95;
      obj.position.y = 30;
      obj.position.z = 28;

      obj.rotation.y += 5;

      scene.add(obj);
      console.log("Carregou Corruja");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda na Corruja!: " + error);
    }//o que acontece se der merda.
  );  
}