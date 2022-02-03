class Pollo {
  constructor() {
    // aquí las propiedades del pollo
    this.x = 100;
    this.y = canvasDOM.height / 2;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.img.src = "./images/flappy.png";
    this.gravitySpeed = 2;
    this.jumpSpeedMultiplier = 10;
    this.jumpSpeed = this.gravitySpeed * this.jumpSpeedMultiplier;
  }

  // las acciones del pollo

  // necesitaremos ver el pollo
  drawPollo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  polloGravity = () => {
    this.y = this.y + this.gravitySpeed;
  };

  // necesitaremos mover el pollo
  polloJump = () => {
    this.y = this.y - this.gravitySpeed * this.jumpSpeed;
    // if (this.y < -100) {this.redefinePollo();};
  };

  redefinePollo = () => {
    this.x = 30;
    this.width = 150;
    this.height = 150;
    this.img.src = "./images/flappy2.png";
  };
}
