class TGeometry {

  constructor(property){
    this.propertys = property;
  }

  CriarObjeto(){  }

  Mover(){ 
    this.geometria.position.x = this.propertys.ConfigX(this.geometria.position.x);
    this.geometria.position.y = this.propertys.ConfigY(this.geometria.position.y);
    this.geometria.position.z = this.propertys.ConfigZ(this.geometria.position.z);
    this.geometria.rotation.x = this.propertys.RotationX(this.geometria.rotation.x);
    this.geometria.rotation.y = this.propertys.RotationY(this.geometria.rotation.y);
    this.geometria.rotation.z = this.propertys.RotationZ(this.geometria.rotation.z);
   }
}