import Level from "./level.js";
import Bird from "./bird.js";
export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
    this.running =true;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
  }

  animate() {
    // console.log(this);

    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
  
    if (this.running){
      debugger;
      requestAnimationFrame(this.animate.bind(this.ctx));
    }
  }

  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate();
    this.running = false;
  }

  play(){
    this.running = true;
    this.animate();
  }

}
