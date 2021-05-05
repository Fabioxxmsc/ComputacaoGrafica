function createTriceratops() {

  loader = new THREE.OBJLoader();
  loader.load(
    'assets/triceratops/triceratops.obj',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['tri'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0xbe6262");
        }
      }
      );

      obj.scale.y = 2;
      obj.scale.z = 2;
      obj.scale.x = 2;

      obj.position.y = -6;
      obj.position.z = 2;

      obj.rotation.y += 0.9;

      scene.add(obj);
      console.log("Carregou!");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log(" Deu merda!: " + error);
    }//o que acontece se der merda.
  );
}