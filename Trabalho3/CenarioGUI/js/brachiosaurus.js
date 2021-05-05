function createBrachiosaurus() {
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    'assets/brachiosaurus/low.FBX',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['brq'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0xbe62be");
        }
      }
      );

   /*    obj.scale.y = 0.02;
      obj.scale.z = 0.02;
      obj.scale.x = 0.02;

      obj.position.y = 0;
      obj.position.x = 15;
      obj.position.z = 30;

      obj.rotation.y += 15; */

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