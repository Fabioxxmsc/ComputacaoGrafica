class TSphereGeometryProps extends TProperty {

  constructor(){
    super(velocidade, velocidade, velocidade);
  }

  get radius(){
    return 15;
  }

  get widthSegments(){
    return 4;
  }

  get heightSegments(){
    return 30;
  }

  get phiStart(){
    return Math.PI * 0;
  }
  
  get phiLength(){
    return Math.PI * 2.0;
  }

  get thetaStart(){
    return Math.PI * 1.0;
  }

  get thetaLength(){
    return Math.PI * 1.0;
  }

  ConfigX(value){

    value += this.x;

    if(value > 50 || value < -50)
      this.x *= -1;

    return value;
  }

  ConfigY(value){

    value += this.y;

    if(value > 20 || value < -20)
      this.y *= -1;

    return value;
  }

  ConfigZ(value){

    value += this.z;

    if(value > 20 || value < -20)
      this.z *= -1;

    return value;
  }

  RotationX(value){ 
    value += 0.05;
    return value;
  }

  RotationY(value){ 
    value += 0.05;
    return value;
  }

  RotationZ(value){
    value += 0.3;
    return value;
  }
}