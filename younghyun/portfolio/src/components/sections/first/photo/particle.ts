class Particle {
  x: number;
  y: number;
  speed: number;
  velocity: number;
  size: number;
  positionX: number;
  angle: number;

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = 0;
    this.velocity = Math.random() * 0.5;
    this.size = Math.random() * 1.5 + 1;
    this.positionX = Math.floor(this.x);
    this.positionX = Math.floor(this.y);
    this.angle = 0;
  }
}

export default Particle;
