function createWindTurbine() {
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/wind-turbine/Wind_turbine_001.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['win'] = obj;
      
      mixer = new THREE.AnimationMixer(obj);

      let animation = mixer.clipAction(obj.animations[0]);
      animationActions.push(animation);
      activeAction = animation;

      animation = mixer.clipAction(obj.animations[1]);
      animationActions.push(animation);

      // add as animações na Gui
      animationFolder.add(parametrosGUI, 'para');
      animationFolder.add(parametrosGUI, 'gira');

      let texLoader = new THREE.TextureLoader().setPath("../assets/wind-turbine/");

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {

          let material = new THREE.MeshStandardMaterial();
          let materialBase = texLoader.load("Wind_Turbine_001_color.png");
          material.encoding = THREE.sRGBEncoding;
          material.map = materialBase;

          child.material = material;
          //child.castShadow = true;
          //child.receiveShadow = true;
        }
      }
      );

      obj.scale.y = 0.005;
      obj.scale.z = 0.005;
      obj.scale.x = 0.005;

      //obj.position.y = -7.5;
      //obj.position.x = 1;
      //obj.position.z = 1;

      scene.add(obj);
      console.log("Carregou Gira");
      loadFinisehd2 = true;

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda Gira!: " + error);
    }//o que acontece se der merda.
  );
}