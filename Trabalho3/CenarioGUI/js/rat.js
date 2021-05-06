function createRat() {  
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../../assets/rat/rat.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['rat'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0x#2F322F");
        }
      }
      );

      obj.scale.y = 0.01;
      obj.scale.z = 0.01;
      obj.scale.x = 0.01;

      obj.position.y = 0;
      obj.position.x = -35;
      obj.position.z = 20;

      obj.rotation.y += 11;

      scene.add(obj);
      console.log("Carregou Rato");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log(" Deu merda!: " + error);
    }//o que acontece se der merda.
  );
}