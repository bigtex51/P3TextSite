function sketch3(p) {

  p.setup = function() {
    p.createCanvas(1000, 1000);
  };

  p.draw = function() {
    p.fill(0);
    p.rect(0, 0, 1000, 1000);
    p.fill(126,0,0); // this is how you set text color
    p.textSize(100);
    p.textFont('Georgia');
    p.text('I feel obligated at this moment to remind you', 100, 100, 800, 800);
    p.text('of the most ferocious beast of all', 100, 450, 800, 800);

    nextButton(p); // call it here
  };

  p.mousePressed = function() {
    let bx = 860, by = 940, bw = 120, bh = 44;
    if (p.mouseX > bx && p.mouseX < bx + bw &&
        p.mouseY > by && p.mouseY < by + bh) {
      window.nextSketch();
      return;
    }
  };

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