function sketch2(p) {

  let set = 0;
  let img1, img2, img3, img4, img5, img6, img7, img8;

  p.preload = function() {
    img1 = p.loadImage('img/clown.png'); // replace with your image path
    img2 = p.loadImage('img/deadclown.png'); // replace with your image path
    img3 = p.loadImage('img/blood.png'); // replace with your image path
    img4 = p.loadImage('img/blooddrop1.png'); // replace with your image path
    img5 = p.loadImage('img/blooddrop2.png'); // replace with your image path
    img6 = p.loadImage('img/baldy.png'); // replace with your image path
    img7 = p.loadImage('img/beard.png'); // replace with your image path
    img8 = p.loadImage('img/shortbeard.png'); // replace with your image path
  };

  p.setup = function() {
    p.createCanvas(1000, 1000);
  };

  p.draw = function() {
    p.background(220);

    if (set == 0) {
      p.fill('yellow');
      p.rect(0, 0, 1000, 1000); 
      p.image (img1, 250, 400, 600, 600*(img1.height/img1.width));
    }

    if (set == 1) {
      p.fill('yellow');
      p.rect(0, 0, 1000, 1000); 
      p.image (img2, 250, 400, 600, 600*(img2.height/img2.width));
      p.image (img3, 150, 350, 400, 400*(img3.height/img3.width));
      p.image (img4, 100, 400, 100, 100*(img4.height/img4.width));
      p.image (img5, 0, 700, 100, 100*(img5.height/img5.width));
      p.textSize(150);
      p.fill(255); 
      p.text('Of Bloodiness', 200, 100, 500, 400);
    }

    if (set == 2) {
      p.fill('lime');
      p.rect(0, 0, 1000, 1000); 
      p.image (img6, 250, 400, 600, 600*(img6.height/img6.width));
      p.image (img7, 300, 650, 500, 500*(img7.height/img7.width));
      p.image (img8, 300, 650, 500, 500*(img8.height/img8.width));
      p.textSize(150);
      p.fill(255); 
      p.text('And Hairiness', 200, 100, 500, 400);

    }

    if (set == 3) {
      p.fill('lime');
      p.rect(0, 0, 1000, 1000); 
      p.image (img6, 250, 400, 600, 600*(img6.height/img6.width));
      p.image (img7, 300, 650, 500, 500*(img7.height/img7.width));
      p.textSize(150);
      p.fill(255); 
      p.text('And Hairiness', 200, 100, 500, 400);


    }

    if (set == 4) {
      p.fill('lime');
      p.rect(0, 0, 1000, 1000); 
      p.image (img6, 250, 400, 600, 600*(img6.height/img6.width));
      p.textSize(150);
      p.fill(255); 
      p.text('And Hairiness', 200, 100, 500, 400);


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
  set = (set + 1) % 5; // your existing set switching
  };

}