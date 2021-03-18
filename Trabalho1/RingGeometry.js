class TRingGeometry extends TGeometry {

  constructor(){

    super(new TRingGeometryProps());

    this.innerRadius   = this.propertys.innerRadius;
    this.outerRadius   = this.propertys.outerRadius;
    this.thetaSegments = this.propertys.thetaSegments;
    this.phiSegments   = this.propertys.phiSegments;
    this.thetaStart    = this.propertys.thetaStart;
    this.thetaLength   = this.propertys.thetaLength;
  }

  CriarObjeto(){
    this.geometria = new THREE.Mesh(new THREE.RingGeometry(this.innerRadius,
                                                           this.outerRadius,
                                                           this.thetaSegments,
                                                           this.phiSegments,
                                                           this.thetaStart,
                                                           this.thetaLength),

                                    new THREE.MeshBasicMaterial({color: "blue"}));

    this.geometria.position.x = 50;
    this.geometria.position.y = 20;
    this.geometria.position.z = 20;

    return this.geometria;    
  }
}