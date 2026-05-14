function sketch4(p) {

  let set = 0;
  let imgHead, imgLegs;
  let myFont;

  let line1 = 'Three thousand pounds and nine feet tall';
  let line2 = 'The Glurpy Slurpy Skakagrall';
  let line3 = "Who's standing right behind you";

  let l1Hovered = new Array(line1.length).fill(false);
  let l2Hovered = new Array(line2.length).fill(false);
  let l3Hovered = new Array(line3.length).fill(false);

  p.preload = function() {
    imgHead = p.loadImage('img/skakagral.png');
    imgLegs = p.loadImage('img/skalegs.png');
    myFont = p.loadFont('fonts/Melted Monster.ttf');
  };

  p.setup = function() {
    p.createCanvas(1000, 1000);
  };

  p.draw = function() {
    p.background(0);

    if (set == 0) {
      let fixedW = 700;
      p.image(imgLegs, 150, -50 * 0.35, fixedW, fixedH);

      drawLine(p, line1, l1Hovered, 80, 700, 36);
    }

    if (set == 1) {
      let fixedH = 600;
      let fixedW = fixedH * (imgHead.width / imgHead.height);
      p.image(imgHead, (1000 - fixedW) / 2, 300, fixedW, fixedH);

      drawLine(p, line2, l2Hovered, 80, 150, 58);
      drawLine(p, line3, l3Hovered, 60, 260, 72);
    }

    nextButton(p);
  };

  p.mousePressed = function() {
    let bx = 860, by = 940, bw = 120, bh = 44;
    if (p.mouseX > bx && p.mouseX < bx + bw &&
        p.mouseY > by && p.mouseY < by + bh) {
      window.nextSketch();
      return;
    }
    l1Hovered = new Array(line1.length).fill(false);
    l2Hovered = new Array(line2.length).fill(false);
    l3Hovered = new Array(line3.length).fill(false);
    set = (set + 1) % 2;
  };

  function drawLine(p, line, hovered, x, y, size) {
    p.textFont(myFont);
    p.textSize(size);
    let cx = x;
    let cy = y;
    for (let i = 0; i < line.length; i++) {
      let letter = line[i];
      let lw = p.textWidth(letter);

      let padding = 50; // increase this for bigger radius
let isHovered = p.mouseX > cx - padding && p.mouseX < cx + lw + padding &&
                p.mouseY > cy - size - padding && p.mouseY < cy + padding;

      p.fill(255, 0, 0);

      if (isHovered) {
        let shakeX = p.random(-4, 4);
        let shakeY = p.random(-4, 4);
        p.text(letter, cx + shakeX, cy + shakeY);
      } else {
        p.text(letter, cx, cy);
      }

      cx += lw;

      if (cx > 920) {
        cx = x;
        cy += size + 8;
      }
    }
  }

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
  p.text('NEXT \u2192', bx + bw / 2, by + bh / 2);
  p.pop();
}