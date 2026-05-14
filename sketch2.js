function sketch2(p) {

  let set = 0;
  let img1, img2, img3, img4, img5, img6, img7, img8;
  let myFont;
  let myFont2;

  let bloodi = 'BLOODINESS';
  let hairi = 'HAIRINESS';
  let bHovered = new Array(bloodi.length).fill(false);
  let hHovered = new Array(hairi.length).fill(false);
  let letterSize = 80;
  let wordX = 200;
  let wordY = 500;
  let fixedH = 600;
  let imgX = 250;
  let imgY = 350;

  p.preload = function() {
    img1 = p.loadImage('img/clown.png');
    img2 = p.loadImage('img/deadclown.png');
    img3 = p.loadImage('img/blood.png');
    img4 = p.loadImage('img/blooddrop1.png');
    img5 = p.loadImage('img/blooddrop2.png');
    img6 = p.loadImage('img/beardwiz.png');
    img7 = p.loadImage('img/shortbeardwiz.png');
    img8 = p.loadImage('img/baldy.png');
    myFont = p.loadFont('fonts/Melted Monster.ttf');
    myFont2 = p.loadFont('fonts/Hairy Monster Solid.ttf');
  };

  p.setup = function() {
    p.createCanvas(1000, 1000);
  };

  p.draw = function() {
    p.background(220);

    if (set == 0) {
      let allChanged = bHovered.every(h => h === true);
      p.fill('white');
      p.rect(0, 0, 1000, 1000);

      if (allChanged) {
        p.image(img2, 250, 400, 600, 600*(img2.height/img2.width));
        p.image(img3, 150, 350, 400, 400*(img3.height/img3.width));
      } else {
        p.image(img1, 250, 400, 600, 600*(img1.height/img1.width));
      }

      p.push();
      p.textFont('Georgia');
      p.textSize(100);
      p.fill(0);
      p.text('Of', wordX, wordY - letterSize - 20);
      p.pop();
      drawWord(p, bloodi, bHovered);
    }

    if (set == 1) {
      let allChanged = bHovered.every(h => h === true);
      p.fill('white');
      p.rect(0, 0, 1000, 1000);

      if (allChanged) {
        p.image(img2, 250, 400, 600, 600*(img2.height/img2.width));
        p.image(img4, 100, 400, 100, 100*(img4.height/img4.width));
        p.image(img5, 0, 700, 100, 100*(img5.height/img5.width));
      } else {
        p.image(img1, 250, 400, 600, 600*(img1.height/img1.width));
      }

      p.push();
      p.textFont('Georgia');
      p.textSize(150);
      p.fill(0);
      p.text('Of', wordX, wordY - letterSize - 20);
      p.pop();
      drawWord(p, bloodi, bHovered);
    }

    if (set == 2) {
      let changedCount = hHovered.filter(h => h === true).length;
      let half = Math.floor(hairi.length / 2);
      let allChanged = changedCount === hairi.length;
      let halfChanged = changedCount >= half;

      p.fill('white');
      p.rect(0, 0, 1000, 1000);

      if (allChanged) {
        p.image(img8, imgX, imgY, fixedH * (img8.width / img8.height), fixedH);
      } else if (halfChanged) {
        p.image(img7, imgX, imgY, fixedH * (img7.width / img7.height), fixedH);
      } else {
        p.image(img6, imgX, imgY, fixedH * (img6.width / img6.height), fixedH);
      }

      p.push();
      p.textFont('Georgia');
      p.textSize(100);
      p.fill(0);
      p.text('And', wordX, wordY - letterSize - 20);
      p.pop();
      drawWord(p, hairi, hHovered);
    }

    if (set == 3) {
      let changedCount = hHovered.filter(h => h === true).length;
      let half = Math.floor(hairi.length / 2);
      let allChanged = changedCount === hairi.length;
      let halfChanged = changedCount >= half;

      p.fill('white');
      p.rect(0, 0, 1000, 1000);

      if (allChanged) {
        p.image(img8, imgX, imgY, fixedH * (img8.width / img8.height), fixedH);
      } else if (halfChanged) {
        p.image(img7, imgX, imgY, fixedH * (img7.width / img7.height), fixedH);
      } else {
        p.image(img6, imgX, imgY, fixedH * (img6.width / img6.height), fixedH);
      }

      p.push();
      p.textFont('Georgia');
      p.textSize(100);
      p.fill(0);
      p.text('And', wordX, wordY - letterSize - 20);
      p.pop();
      drawWord(p, hairi, hHovered);
    }

    if (set == 4) {
      let changedCount = hHovered.filter(h => h === true).length;
      let half = Math.floor(hairi.length / 2);
      let allChanged = changedCount === hairi.length;
      let halfChanged = changedCount >= half;

      p.fill('lime');
      p.rect(0, 0, 1000, 1000);

      if (allChanged) {
        p.image(img8, imgX, imgY, fixedH * (img8.width / img8.height), fixedH);
      } else if (halfChanged) {
        p.image(img7, imgX, imgY, fixedH * (img7.width / img7.height), fixedH);
      } else {
        p.image(img6, imgX, imgY, fixedH * (img6.width / img6.height), fixedH);
      }

      p.push();
      p.textFont('Georgia');
      p.textSize(100);
      p.fill(0);
      p.text('And', wordX, wordY - letterSize - 20);
      p.pop();
      drawWord(p, hairi, hHovered);
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
    bHovered = new Array(bloodi.length).fill(false);
    hHovered = new Array(hairi.length).fill(false);
    // toggle between bloodiness (set 0) and hairiness (set 2)
    set = (set === 0) ? 2 : 0;
  };

  function drawWord(p, word, hovered) {
    p.textSize(letterSize);
    let x = wordX;
    let isHairi = (word === hairi);
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      let lw = p.textWidth(letter);

      if (p.mouseX > x && p.mouseX < x + lw &&
          p.mouseY > wordY - letterSize && p.mouseY < wordY) {
        hovered[i] = true;
      }

      if (hovered[i]) {
        p.textFont(isHairi ? myFont2 : myFont);
        p.fill(isHairi ? 0 : [255, 0, 0]);
      } else {
        p.textFont('Georgia');
        p.fill(0);
      }

      p.text(letter, x, wordY);
      x += lw;
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