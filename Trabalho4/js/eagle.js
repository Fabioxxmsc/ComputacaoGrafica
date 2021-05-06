function createEagle(){
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/eagle/Eagle.FBX',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, colore, reposiciona, rotaciona
      Elementos['aga'] = obj;

      obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material.color.setHex("0x97F1F0");
        }
      }
      );

      obj.scale.y = 1.3;
      obj.scale.z = 1.3;
      obj.scale.x = 1.3;

      obj.position.y = 1;
      obj.position.x = -30;
      obj.position.z = 20;

      obj.rotation.y += 5;

      scene.add(obj);
      console.log("Carregou Aguia");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log(" Deu merda!: " + error);
    }//o que acontece se der merda.
  );  
}