let len = 0;

function setup() {
  createCanvas(400, 400);
  background(50);
  
  let depth = 4;

  for (let i = 1; i <= depth; i++) {
    for (let j = 0; j < Math.pow(2, i); j++) {
      if (j % 2 != 0) {
        stroke(255);
        let x = j * width/Math.pow(2, i);
        let y = len + 50;
        ellipse(x, y, 20, 20);
        if (i != depth) {
          line(x, y, x + width/Math.pow(2, i+1), y + 50); // left
          line(x, y, x - width/Math.pow(2, i+1), y + 50); // right        
        } 
      }
    }
    len += 50;
  }
}
