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

  OmbroD(){
    return new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
  }

  BracoD(){
    return new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), new THREE.MeshBasicMaterial({color: red}));
  }

  CriarObjeto(){
    this.tronco           = this.Tronco();
	  this.puppet["tronco"] = this.tronco;
    this.cabeca           = this.Cabeca();
	  this.puppet["cabeca"] = this.cabeca;
	  this.tronco.add(this.cabeca);
	  this.cabeca.position.y = this.tronco.position.y + 6;

    //bracoDireito	
    this.ombroD           = this.OmbroD();
    this.puppet["ombroD"] = this.ombroD;
    this.tronco.add(this.ombroD);

    this.ombroD.position.y = this.tronco.position.y + 3;
    this.ombroD.position.x = this.tronco.position.y + 3;
    
    this.pivotOmbroD           = new THREE.Group();
    this.puppet["pivotOmbroD"] = this.pivotOmbroD;
    this.ombroD.add(this.pivotOmbroD);
    
    this.bracoD           = this.BracoD();
    this.puppet["bracoD"] = this.bracoD;
    this.pivotOmbroD.add(this.bracoD);

    this.bracoD.position.y -= 2.7;

	  return this.tronco
  }
}