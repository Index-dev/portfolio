class Particle {
  x: number;
  y: number;
  speed: number;
  velocity: number;
  size: number;
  positionX: number;
  positionY: number;
  angle: number;

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mappedImage: any;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    mappedImage: any
  ) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = 0;
    this.velocity = Math.random() * 0.5;
    this.size = Math.random() * 1.5 + 1;
    this.positionX = Math.floor(this.x);
    this.positionY = Math.floor(this.y);
    this.angle = 0;

    this.canvas = canvas;
    this.ctx = ctx;
    this.mappedImage = mappedImage;
  }

  update() {
    this.positionX = Math.floor(this.x);
    this.positionY = Math.floor(this.y);
    if (
      this.positionX >= 0 &&
      this.positionY >= 0 &&
      this.mappedImage[this.positionX][this.positionY]
    ) {
      this.speed = this.mappedImage[this.positionX][this.positionY][0];
    }
    let movement = 3.5 - this.speed + this.velocity;

    this.angle++;
    this.y += (movement + Math.sin(this.angle)) / 1500;
    this.x += (movement + Math.sin(this.angle)) / 1500;
    this.y += movement;
    this.x += movement;

    if (this.x >= this.canvas.width) {
      this.x = 0;
    }
    if (this.y >= this.canvas.height) {
      this.y = 0;
      this.x = Math.random() * this.canvas.width;
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = `${({ theme }: { theme: ThemeIState }) =>
      theme.primary}`;
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

export default Particle;
