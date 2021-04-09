class TGeometry {

  constructor(property){
    this.propertys = property;
  }

  CriarObjeto(){  }

  FrenteD(elem, ombro){
    if(ombro){
      if(elem.rotation.x < -2.83 || elem.rotation.x > 1.3)
			  velocidadeOmbroDireitoC *= -1;
      return velocidadeOmbroDireitoC;
    }else{
      if(elem.rotation.x < -2.83 || elem.rotation.x > 0)
        velocidadeCotoveloDireitoC *= -1;
      return velocidadeCotoveloDireitoC;
    }
  }

  FrenteE(elem, ombro){
    if(ombro){
      if(elem.rotation.x < -2.83 || elem.rotation.x > 1.3)
        velocidadeOmbroEsquerdoC *= -1;
      return velocidadeOmbroEsquerdoC;
    }else{
      if(elem.rotation.x < -2.83 || elem.rotation.x > 0)
        velocidadeCotoveloEsquerdoC *= -1;
      return velocidadeCotoveloEsquerdoC;
    }
  }

  LadoD(elem){
    if (elem.rotation.z < -1.5 || elem.rotation.z > 0)
    velocidadeOmbroDireitoL *= -1;
    return velocidadeOmbroDireitoL;
  }

  LadoE(elem){
    if (elem.rotation.z < 0 || elem.rotation.z > 1.5)
    velocidadeOmbroEsquerdoL *= -1;
    return velocidadeOmbroEsquerdoL;
  }

  Mover(){
    for(let elem in Elementos){

      for(let item in Botoes){
        let btn = Botoes[item];

        if(btn[status]){

          switch(btn[botao]){

            case "W":
            case "w":
              Elementos[elem]["pivotOmbroD"].rotation.x += this.FrenteD(Elementos[elem]["pivotOmbroD"], true);
              break;

            case "S":
            case "s":
              Elementos[elem]["pivotOmbroE"].rotation.x += this.FrenteE(Elementos[elem]["pivotOmbroE"], true);
              break;

            case "A":
            case "a":              
              Elementos[elem]["pivotOmbroE"].rotation.z += this.LadoE(Elementos[elem]["pivotOmbroE"]);
              break;

            case "D":
            case "d":
              Elementos[elem]["pivotOmbroD"].rotation.z += this.LadoD(Elementos[elem]["pivotOmbroD"]);              
              break;

            case "Q":
            case "q":
              Elementos[elem]["pivotantebracoE"].rotation.x += this.FrenteE(Elementos[elem]["pivotantebracoE"], false);
              break;

            case "E":
            case "e":
              Elementos[elem]["pivotantebracoD"].rotation.x += this.FrenteD(Elementos[elem]["pivotantebracoD"], false);
              break;

            case "space":
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