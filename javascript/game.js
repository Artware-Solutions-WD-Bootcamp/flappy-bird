class Game {
  constructor() {
    // todas nuestras propiedades
    this.bg = new Image();
    this.bg.src = "../images/bg.png";
    this.pollo = new Pollo();
    this.pipeArr = [new Pipe(0, "./images/obstacle_top.png")];
    this.pipeSeparation = 200;
    this.isGameOver = false;
  }

  spawningPipe = () => {
    let lastPipe = this.pipeArr[this.pipeArr.length - 1];
    if (lastPipe.x < canvasDOM.width - this.pipeSeparation) {
      let randomYUp = Math.random() * -200;
      let newPipe = new Pipe(randomYUp, "./images/obstacle_top.png");
      this.pipeArr.push(newPipe);

      let randomYDown = randomYUp + newPipe.height + 100;
      let newPipeDown = new Pipe(randomYDown, "./images/obstacle_bottom.png");
      this.pipeArr.push(newPipeDown);

      // console.log(this.pipeArr.length);
      if (this.pipeArr.length >= 10) {
        this.pipeArr.splice(0, 2);
      }
    }
  };

  checkPolloPipeCollision = (eachPipeParam) => {
    if (
      this.pollo.x < eachPipeParam.x + eachPipeParam.width &&
      this.pollo.x + this.pollo.width > eachPipeParam.x &&
      this.pollo.y < eachPipeParam.y + eachPipeParam.height &&
      this.pollo.height + this.pollo.y > eachPipeParam.y
    ) {
      // collision detected!
      // console.log("Ouch!");
      //debemos terminar el juego
      // 1. detener el loop
      this.isGameOver = true;
      // 2. ocultar el canvas
      canvasDOM.style.display = "none";
      
      // 3. gameOver screen y darle display flex
      gameOverScreenDOM.style.display = "flex";
    }
  };

  drawBackground = () => {
    // para evitar bugs, lo encapsulamos en un addEventListener "load"
    // para que se ejecute únicamente después de cargar la imagen
    // añadir addEventListener para ver si no hay loop
    // this.bg.addEventListener("load", () => {
    ctx.drawImage(this.bg, 0, 0, canvasDOM.width, canvasDOM.height);
    // });
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvasDOM.width, canvasDOM.height);
  };

  // .todos nuestros métodos
  gameLoop = () => {
    // console.log("¡A jugaaaar!");
    // 1. limpiar el canvas
    this.clearCanvas();

    // 2. mover los elementos u otras acciones (de chequeo)
    this.pollo.polloGravity();
    // aqui deberia mover los pipes
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.pipeMove();
    });
    this.spawningPipe();
    this.pipeArr.forEach((eachPipe) => {
      // chequear colisión entre pollito y pipe
      this.checkPolloPipeCollision(eachPipe);
    });

    // 3. dibujar los elementos
    this.drawBackground();
    this.pollo.drawPollo();
    // aqui deberia dibujar los pipes
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });

    // 4. recursión para la animación
    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
