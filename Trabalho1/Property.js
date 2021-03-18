class TProperty {

  constructor(x, y, z){
    this.pointX = x;
    this.pointY = y;
    this.pointZ = z;
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
  }

  get x(){ return this.pointX; }

  set x(value){ this.pointX = value; }
  
  get y(){ return this.pointY; }

  set y(value){ this.pointY = value; }

  get z(){ return this.pointZ; }

  set z(value){ this.pointZ = value; }

  get rx(){ return this.rotationX; }

  set rx(value){ this.rotationX = value; }
  
  get ry(){ return this.rotationY; }

  set ry(value){ this.rotationY = value; }

  get rz(){ return this.rotationZ; }

  set rz(value){ this.rotationZ = value; }

  ConfigX(value){ }

  ConfigY(value){ }

  ConfigZ(value){ }

  RotationX(value){ }

  RotationY(value){ }

  RotationZ(value){ }
}