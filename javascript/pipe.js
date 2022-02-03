class Pipe {
  constructor(posYParam, srcParam) {
    this.x = canvasDOM.width - 20;
    this.y = posYParam;
    this.width = 50;
    this.height = 140;
    this.img = new Image();
    this.img.src = srcParam;
    this.pipeMovementSpeed = 2;
    this.jumpSpeedMultiplier = 20;
  }

  drawPipe = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  pipeMove = () => {
    this.x = this.x - this.pipeMovementSpeed;
  };
}
