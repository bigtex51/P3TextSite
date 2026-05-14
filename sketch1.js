function sketch1(p) {

  let set = 0;
  let img1;
  let img2;
  let myFont;

  p.preload = function() {
    img1 = p.loadImage('img/singingguy.png'); // replace with your image path
    img2 = p.loadImage('img/scaryguy.png'); // replace with your image path
    myFont = p.loadFont('fonts/Melted Monster.ttf'); // replace with your font path
  };

  p.setup = function() {
    p.createCanvas(1000, 1000);
  };

  p.draw = function() {
    p.background(220);

    if (set == 0) {
      p.fill(255); 
      p.rect(0, 0, 1000, 1000); 
      p.image (img1, 500, 400, 600, 600*(img1.height/img1.width)); // x, y, width, height
      p.textSize(150);
      p.fill(128,0,0); 
      p.textFont('Georgia');
      p.text('Singing', 200, 200, 500, 400);
      p.text('Songs', 100, 400, 500, 400); 
    }

    if (set == 1) {
      p.fill(0); 
      p.rect(0, 0, 1000, 1000); 
      p.image (img2, 0, 400, 600, 600*(img2.height/img2.width)); // x, y, width, height
      p.textSize(75);
      p.fill(126,0,0); 
      p.textFont('Georgia');
      p.text('Of', 300, 125, 500, 400); 
      p.textFont(myFont);
      p.textSize(150);
      p.text('Scariness', 200, 300, 500, 400);
    }

    function nextButton(p) {
  let bx = 860, by = 940, bw = 120, bh = 44;
  let hovered = p.mouseX > bx && p.mouseX < bx + bw &&
                p.mouseY > by && p.mouseY < by + bh;
  p.push();
  p.fill(hovered ? 60 : 10);
  p.stroke(220);
  p.strokeWeight(1.5);
  p.rect(bx, by, bw, bh, 6);
  p.fill(220);
  p.noStroke();
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(15);
  p.textFont('monospace');
  p.text('NEXT →', bx + bw / 2, by + bh / 2);
  p.pop();
}


  };

  p.mousePressed = function() {
  let bx = 860, by = 940, bw = 120, bh = 44;
  if (p.mouseX > bx && p.mouseX < bx + bw &&
      p.mouseY > by && p.mouseY < by + bh) {
    window.nextSketch();
    return;
  }
  set = (set + 1) % 2; // your existing set switching
};

}