function createArvore(){
  let loaderFBX = new THREE.FBXLoader();
  loaderFBX.load(
    '../assets/low-poly-trees/ArbolTipo1.fbx',//arquivo que vamos buscar
    function (obj) {
      //atribui a cena, color, reposiciona, rotaciona
      Elementos['arv'] = obj;

/*       obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load("../assets/low-poly-trees/o5t5df.png")}
          );
        }
      }
      ); */

      obj.scale.y = 0.2;
      obj.scale.z = 0.2;
      obj.scale.x = 0.2;

      obj.position.y = -5.5;
      obj.position.x = 85;
      obj.position.z = 15;

      //obj.rotation.y += 1.7;

      scene.add(obj);
      console.log("Carregou Árvore");

    },//Oque acontece quando terminar!
    function (andamento) {
      console.log("Carregou: " + (andamento.loaded / andamento.total) * 100 + " %");
    },//O que acontece enquanto esta carregando
    function (error) {
      console.log("Deu merda na Árvore!: " + error);
    }//o que acontece se der merda.
  )  
}