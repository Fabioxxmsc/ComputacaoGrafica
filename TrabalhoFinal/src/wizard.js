function createWizard() {  
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/wizard/Wizard.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['wzd'] = obj;

      let texLoader = new THREE.TextureLoader().setPath("../assets/wizard/");

     // mixer         = new THREE.AnimationMixer(obj);
      //let animation = mixer.clipAction(obj.animations[0]);
      //animationActions.push(animation);

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {

          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("UVWizard.png");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          //material.normalMap = texLoader.load("Body_n.jpg");
          //material.roughnessMap = texLoader.load("Body_g.jpg");
          //material.roughnessMap.wrapS = THREE.RepeatWrapping;

          //material.metalnessMap = texLoader.load("Body_s.jpg");
          //material.metalnessMap.wrapS = THREE.RepeatWrapping;

          child.material = material;
        }
      }
      );

      obj.scale.y = 5;
      obj.scale.z = 5;
      obj.scale.x = 5;

      //obj.position.y = 1;
      //obj.position.x = 1;
      //obj.position.z = 1;

      //obj.rotation.x += 11.05;

      scene.add(obj);
      console.log("Carregou Mago");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda na Mago!: " + error);
    }//o que acontece se der merda.
  );
}