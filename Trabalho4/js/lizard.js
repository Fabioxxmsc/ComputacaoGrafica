function createLizard() {
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/lizard/Lizard.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['liz'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0xbe62be");
        }
      }
      );

      obj.scale.y = 0.001;
      obj.scale.z = 0.001;
      obj.scale.x = 0.001;

      obj.position.y = 0;
      obj.position.x = 5;
      obj.position.z = 45;

      scene.add(obj);
      console.log("Carregou Lagarto");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log(" Deu merda!: " + error);
    }//o que acontece se der merda.
  );
}