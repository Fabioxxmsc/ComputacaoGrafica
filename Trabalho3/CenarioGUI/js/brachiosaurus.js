function createBrachiosaurus() {
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../../assets/brachiosaurus/low.FBX',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['brq'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0x95A8A8");
        }
      }
      );

      obj.scale.y = 6;
      obj.scale.z = 6;
      obj.scale.x = 6;

      obj.position.x = 25;
      obj.position.y = 6;
      obj.position.z = -10;

      obj.rotation.y += 0.9;

      scene.add(obj);
      console.log("Carregou Braquiossauro");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log(" Deu merda!: " + error);
    }//o que acontece se der merda.
  );
}