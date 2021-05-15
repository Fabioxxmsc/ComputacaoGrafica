function createSTRV103() {  
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/stridsvagn103/81h4eakja931.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['strv'] = obj;

      let texLoader = new THREE.TextureLoader().setPath("../assets/stridsvagn103/");

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("Body_d.jpg");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          material.normalMap = texLoader.load("Body_n.jpg");
          material.roughnessMap = texLoader.load("Body_g.jpg");
          material.roughnessMap.wrapS = THREE.RepeatWrapping;

          material.metalnessMap = texLoader.load("Body_s.jpg");
          material.metalnessMap.wrapS = THREE.RepeatWrapping;

          child.material = material;
        }
      }
      );

      obj.scale.y = 5;
      obj.scale.z = 5;
      obj.scale.x = 5;

      obj.position.y = 1;
      obj.position.x = 1;
      obj.position.z = 1;

      obj.rotation.x += 11.05;

      scene.add(obj);
      console.log("Carregou STRV");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda na STRV!: " + error);
    }//o que acontece se der merda.
  );
}