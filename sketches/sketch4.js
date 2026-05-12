function sketch4(p) {

  let set = 0;

  p.setup = function() {
    p.createCanvas(1000, 1000);
  };

  p.draw = function() {
    p.background(220);

    if (set == 0) {
      // ── set 0 ──

    }

    if (set == 1) {
      // ── set 1 ──

    }

    if (set == 2) {
      // ── set 2 ──

    }

    if (set == 3) {
      // ── set 3 ──

    }

  };

  p.mousePressed = function() {
    set = (set + 1) % 4;
  };

}