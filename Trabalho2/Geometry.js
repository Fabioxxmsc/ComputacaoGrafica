class TGeometry {

  constructor(property){
    this.propertys = property;
  }

  CriarObjeto(){  }

  Frente(elem){
    if(elem.rotation.x < -2.83 || elem.rotation.x > 1.3)
			velocidadeOmbroDireitoC *= -1;
    return velocidadeOmbroDireitoC;
  }

  Lado(elem){
    if (elem.rotation.z < 0 || elem.rotation.z > 1.4)
      velocidadeOmbroDireitoL *= -1;
    return velocidadeOmbroDireitoL;
  }

  Mover(){
    for(let elem in Elementos){

      for(let item in Botoes){
        let btn = Botoes[item];

        if(btn[status]){

          switch(btn[botao]){

            case "W":
            case "w":
              Elementos[elem]["pivotOmbroD"].rotation.x += this.Frente(Elementos[elem]["pivotOmbroD"]);
              break;

            case "A":
            case "a":              
              Elementos[elem]["pivotOmbroD"].rotation.z += this.Lado(Elementos[elem]["pivotOmbroD"]);
              break;

            case "D":
            case "d":
              Elementos[elem]["tronco"].rotation.y += 0.01;
              break;

            case "mousewheel":
              Botoes[item][status] = false;
              Elementos[elem]["tronco"].scale.x += (btn[delta] > 0) ? -0.1 : 0.1;
              Elementos[elem]["tronco"].scale.y += (btn[delta] > 0) ? -0.1 : 0.1;
              Elementos[elem]["tronco"].scale.z += (btn[delta] > 0) ? -0.1 : 0.1;
              break;

            case "Angulo":
              Botoes[item][status] = false;
              Elementos[elem]["tronco"].quaternion.multiplyQuaternions(btn[delta], Elementos[elem]["tronco"].quaternion);
            break;
          }
        }
      }
    }
   }
}