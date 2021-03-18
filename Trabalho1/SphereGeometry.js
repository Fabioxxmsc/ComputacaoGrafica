class TSphereGeometry extends TGeometry {

  constructor(){

    super(new TSphereGeometryProps());

    this.radius         = this.propertys.radius;
    this.widthSegments  = this.propertys.widthSegments;
    this.heightSegments = this.propertys.heightSegments;
    this.phiStart       = this.propertys.phiStart;
    this.phiLength      = this.propertys.phiLength;
    this.thetaStart     = this.propertys.thetaStart;
    this.thetaLength    = this.propertys.thetaLength;
  }

  CriarObjeto(){    
    this.geometria = new THREE.Mesh(new THREE.SphereGeometry(this.radius,
                                                             this.widthSegments,
                                                             this.heightSegments,
                                                             this.phiStart,
                                                             this.phiLength,
                                                             this.thetaStart,
                                                             this.thetaLength),
                                    new THREE.MeshBasicMaterial({color: "red"}));
    
    this.geometria.position.x = -50;
    this.geometria.position.y = -20;
    this.geometria.position.z = -20;

    return this.geometria;
  }
}