class Circle {
    constructor(x, y, d) {
      this.x = x;
      this.y = y;
      this.diameter = d;
    }
    place(x,y) {
      this.x = x;
      this.y = y;
    }
    draw(){
      circle(this.x, this.y, this.diameter);
    }
  }