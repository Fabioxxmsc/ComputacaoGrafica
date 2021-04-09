class TPuppet extends TGeometry {
  constructor(){
    super(new TPuppetProps());

    this.puppet = [];
  }

  Tronco(){
    return new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), materials);
  }

  Cabeca(){
    return new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({color: blue}));
  }

  Ombro(){
    return new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
  }

  Cotovelo(){
    return new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
  }

  Braco(width, height, depth){
    return new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), new THREE.MeshBasicMaterial({color: red}));
  }

  CriarObjeto(){
    this.tronco           = this.Tronco();
	  this.puppet["tronco"] = this.tronco;
    this.cabeca           = this.Cabeca();
	  this.puppet["cabeca"] = this.cabeca;
	  this.tronco.add(this.cabeca);
	  this.cabeca.position.y = this.tronco.position.y + 5.5;

    this.ombroD           = this.Ombro();
    this.puppet["ombroD"] = this.ombroD;
    this.tronco.add(this.ombroD);

    this.ombroE           = this.Ombro();
    this.puppet["ombroE"] = this.ombroE;
    this.tronco.add(this.ombroE);

    this.ombroD.position.y = this.tronco.position.y + 3;
    this.ombroD.position.x = this.tronco.position.y - 3;
    this.ombroE.position.y = this.tronco.position.y + 3;
    this.ombroE.position.x = this.tronco.position.y + 3;    
    
    this.pivotOmbroD           = new THREE.Group();
    this.puppet["pivotOmbroD"] = this.pivotOmbroD;
    this.ombroD.add(this.pivotOmbroD);

    this.pivotOmbroE           = new THREE.Group();
    this.puppet["pivotOmbroE"] = this.pivotOmbroE;
    this.ombroE.add(this.pivotOmbroE);
    
    this.bracoD           = this.Braco(1, 3.5, 1);
    this.puppet["bracoD"] = this.bracoD;
    this.pivotOmbroD.add(this.bracoD);

    this.bracoE           = this.Braco(1, 3.5, 1);
    this.puppet["bracoE"] = this.bracoE;
    this.pivotOmbroE.add(this.bracoE);

    this.bracoD.position.y -= 2;
    this.bracoE.position.y -= 2;

    this.pivotcotoveloD           = new THREE.Group();
    this.puppet["pivotcotoveloD"] = this.pivotcotoveloD;
    this.bracoD.add(this.pivotcotoveloD);

    this.pivotcotoveloE           = new THREE.Group();
    this.puppet["pivotcotoveloE"] = this.pivotcotoveloE;
    this.bracoE.add(this.pivotcotoveloE);

    this.cotoveloD           = this.Cotovelo();
    this.puppet["cotoveloD"] = this.cotoveloD;
    this.pivotcotoveloD.add(this.cotoveloD);    

    this.cotoveloE           = this.Cotovelo();
    this.puppet["cotoveloE"] = this.cotoveloE;
    this.pivotcotoveloE.add(this.cotoveloE);

    this.cotoveloD.position.y -= 2;
    this.cotoveloE.position.y -= 2;

    this.pivotantebracoD           = new THREE.Group();
    this.puppet["pivotantebracoD"] = this.pivotantebracoD;
    this.cotoveloD.add(this.pivotantebracoD);

    this.pivotantebracoE           = new THREE.Group();
    this.puppet["pivotantebracoE"] = this.pivotantebracoE;
    this.cotoveloE.add(this.pivotantebracoE);

    this.antebracoD           = this.Braco(1, 4, 1);
    this.puppet["antebracoD"] = this.antebracoD;
    this.pivotantebracoD.add(this.antebracoD);

    this.antebracoE           = this.Braco(1, 4, 1);
    this.puppet["antebracoE"] = this.antebracoE;
    this.pivotantebracoE.add(this.antebracoE);

    this.antebracoD.position.y -= 2;
    this.antebracoE.position.y -= 2;

	  return this.tronco
  }
}