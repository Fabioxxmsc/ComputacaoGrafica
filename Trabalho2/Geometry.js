class TGeometry {

  constructor(property){
    this.propertys = property;
  }

  CriarObjeto(){  }

  FrenteBracoD(elem, ombro){
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

  FrenteBracoE(elem, ombro){
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

  FrentePernaD(elem, coxa){
    if(coxa){
      if(elem.rotation.x < -2 || elem.rotation.x > 0.2)
			  velocidadeCoxaDireitoC *= -1;
      return velocidadeCoxaDireitoC;
    }else{
      if(elem.rotation.x < 0 || elem.rotation.x > 2)
        velocidadePernaDireitoC *= -1;
      return velocidadePernaDireitoC;
    }
  }

  FrentePernaE(elem, coxa){
    if(coxa){
      if(elem.rotation.x < -2 || elem.rotation.x > 0.2)
        velocidadeCoxaEsquerdoC *= -1;
      return velocidadeCoxaEsquerdoC;
    }else{
      if(elem.rotation.x < 0 || elem.rotation.x > 2)
        velocidadePernaEsquerdoC *= -1;
      return velocidadePernaEsquerdoC;
    }
  }

  LadoBracoD(elem){
    if (elem.rotation.z < -1.5 || elem.rotation.z > 0)
      velocidadeOmbroDireitoL *= -1;
    return velocidadeOmbroDireitoL;
  }

  LadoPernaE(elem){
    if (elem.rotation.z < 0 || elem.rotation.z > 1.5)
      velocidadeOmbroEsquerdoL *= -1;
    return velocidadeOmbroEsquerdoL;
  }

  LadoPernaD(elem){
    if (elem.rotation.z < -1.5 || elem.rotation.z > 0)
      velocidadePernaDireitoC *= -1;
    return velocidadePernaDireitoC;
  }

  LadoBracoE(elem){
    if (elem.rotation.z < 0 || elem.rotation.z > 1.5)
      velocidadePernaEsquerdoC *= -1;
    return velocidadePernaEsquerdoC;
  }

  Mover(){
    for(let elem in Elementos){

      for(let item in Botoes){
        let btn = Botoes[item];

        if(btn[status]){

          switch(btn[botao]){

            case "W":
            case "w":
              Elementos[elem]["pivotOmbroD"].rotation.x += this.FrenteBracoD(Elementos[elem]["pivotOmbroD"], true);
              break;

            case "S":
            case "s":
              Elementos[elem]["pivotOmbroE"].rotation.x += this.FrenteBracoE(Elementos[elem]["pivotOmbroE"], true);
              break;

            case "A":
            case "a":              
              Elementos[elem]["pivotOmbroE"].rotation.z += this.LadoBracoE(Elementos[elem]["pivotOmbroE"]);
              break;

            case "D":
            case "d":
              Elementos[elem]["pivotOmbroD"].rotation.z += this.LadoBracoD(Elementos[elem]["pivotOmbroD"]);              
              break;

            case "Q":
            case "q":
              Elementos[elem]["pivotantebracoE"].rotation.x += this.FrenteBracoE(Elementos[elem]["pivotantebracoE"], false);
              break;

            case "E":
            case "e":
              Elementos[elem]["pivotantebracoD"].rotation.x += this.FrenteBracoD(Elementos[elem]["pivotantebracoD"], false);
              break;

            case "R":
            case "r":
              Elementos[elem]["coxaD"].rotation.x += this.FrentePernaD(Elementos[elem]["coxaD"], true);
              break;

            case "F":
            case "f":
              Elementos[elem]["coxaE"].rotation.x += this.FrentePernaE(Elementos[elem]["coxaE"], true);
              break;

            case "T":
            case "t":
              Elementos[elem]["pivotPernaD"].rotation.x += this.FrentePernaD(Elementos[elem]["pivotPernaD"], false);
              break;

            case "G":
            case "g":
              Elementos[elem]["pivotPernaE"].rotation.x += this.FrentePernaE(Elementos[elem]["pivotPernaE"], false);
            break;

            case "Y":
            case "y":
              Elementos[elem]["coxaD"].rotation.z += this.LadoPernaD(Elementos[elem]["coxaD"]); 
              break;

            case "H":
            case "h":
              Elementos[elem]["coxaE"].rotation.z += this.LadoPernaE(Elementos[elem]["coxaE"]); 
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