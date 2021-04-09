class TPuppet extends TGeometry {
  constructor(){
    super(new TPuppetProps());

    this.puppet = [];
  }

  Tronco(){
    return new THREE.Mesh(new THREE.BoxGeometry(4, 7, 4), materials);
  }

  Cabeca(){
    return new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({color: blue}));
  }

  Ombro(){
    return new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
  }

  Cotovelo(){
    return new THREE.Mesh(new THREE.SphereGeometry(1, 28, 28), new THREE.MeshBasicMaterial({color: 0xffffff}));
  }

  Membro(width, height, depth){
    return new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), new THREE.MeshBasicMaterial({color: red}));
  }

  MountTronco(){
    this.tronco           = this.Tronco();
	  this.puppet["tronco"] = this.tronco;
    this.cabeca           = this.Cabeca();
	  this.puppet["cabeca"] = this.cabeca;
	  this.tronco.add(this.cabeca);
	  this.cabeca.position.y = this.tronco.position.y + 5.5;
  }

  MountOmbro(){
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
  }

  MountBraco(){
    this.bracoD           = this.Membro(1, 4, 1);
    this.puppet["bracoD"] = this.bracoD;
    this.pivotOmbroD.add(this.bracoD);

    this.bracoE           = this.Membro(1, 4, 1);
    this.puppet["bracoE"] = this.bracoE;
    this.pivotOmbroE.add(this.bracoE);

    this.bracoD.position.y -= 2;
    this.bracoE.position.y -= 2;
  }

  MountCotovelo(){
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
  }

  MountAnteBraco(){
    this.pivotantebracoD           = new THREE.Group();
    this.puppet["pivotantebracoD"] = this.pivotantebracoD;
    this.cotoveloD.add(this.pivotantebracoD);

    this.pivotantebracoE           = new THREE.Group();
    this.puppet["pivotantebracoE"] = this.pivotantebracoE;
    this.cotoveloE.add(this.pivotantebracoE);

    this.antebracoD           = this.Membro(1, 4, 1);
    this.puppet["antebracoD"] = this.antebracoD;
    this.pivotantebracoD.add(this.antebracoD);

    this.antebracoE           = this.Membro(1, 4, 1);
    this.puppet["antebracoE"] = this.antebracoE;
    this.pivotantebracoE.add(this.antebracoE);

    this.antebracoD.position.y -= 2;
    this.antebracoE.position.y -= 2;
  }

  MountCoxa(){
    this.pivotCoxaD           = new THREE.Group();
    this.puppet["pivotCoxaD"] = this.pivotCoxaD;
    this.tronco.add(this.pivotCoxaD);

    this.pivotCoxaE           = new THREE.Group();
    this.puppet["pivotCoxaE"] = this.pivotCoxaE;
    this.tronco.add(this.pivotCoxaE);

    this.coxaD           = this.Membro(1.5, 3.5, 1.5);
    this.puppet["coxaD"] = this.coxaD;
    this.pivotCoxaD.add(this.coxaD);

    this.coxaE           = this.Membro(1.5, 3.5, 1.5);
    this.puppet["coxaE"] = this.coxaE;
    this.pivotCoxaE.add(this.coxaE);    

    this.pivotCoxaD.position.y = this.tronco.position.y - 4.2;
    this.pivotCoxaD.position.x = this.tronco.position.y - 1.2;
    this.pivotCoxaE.position.y = this.tronco.position.y - 4.2;
    this.pivotCoxaE.position.x = this.tronco.position.y + 1.2;
  }

  MountJoelho(){
    this.pivotJoelhoD           = new THREE.Group();
    this.puppet["pivotJoelhoD"] = this.pivotJoelhoD;
    this.coxaD.add(this.pivotJoelhoD);

    this.pivotJoelhoE           = new THREE.Group();
    this.puppet["pivotJoelhoE"] = this.pivotJoelhoE;
    this.coxaE.add(this.pivotJoelhoE);

    this.joelhoD           = this.Cotovelo();
    this.puppet["joelhoD"] = this.joelhoD;
    this.pivotJoelhoD.add(this.joelhoD);

    this.joelhoE           = this.Cotovelo();
    this.puppet["joelhoE"] = this.joelhoE;
    this.pivotJoelhoE.add(this.joelhoE);

    this.joelhoD.position.y -= 2.5;
    this.joelhoE.position.y -= 2.5;
  }

  MountPerna(){
    this.pivotPernaD           = new THREE.Group();
    this.puppet["pivotPernaD"] = this.pivotPernaD;
    this.joelhoD.add(this.pivotPernaD);

    this.pivotPernaE           = new THREE.Group();
    this.puppet["pivotPernaE"] = this.pivotPernaE;
    this.joelhoE.add(this.pivotPernaE);

    this.pernaD           = this.Membro(1.5, 3.5, 1.5);
    this.puppet["pernaD"] = this.pernaD;
    this.pivotPernaD.add(this.pernaD);

    this.pernaE           = this.Membro(1.5, 3.5, 1.5);
    this.puppet["pernaE"] = this.pernaE;
    this.pivotPernaE.add(this.pernaE);

    this.pernaD.position.y -= 2.5;
    this.pernaE.position.y -= 2.5;
  }

  CriarObjeto(){
    this.MountTronco();
    this.MountOmbro();
    this.MountBraco();
    this.MountCotovelo();
    this.MountAnteBraco();
    this.MountCoxa();
    this.MountJoelho();
    this.MountPerna();

	  return this.tronco
  }
}