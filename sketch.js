// Define strokeHue as a global variable. This variable
// will be used to color each line.
let strokeHue = 20;

function setup() {
  createCanvas(720, 400);

  // Remove the bezier stroke fills and establish a new
  // stroke weight. Change the color mode to HSB.
  noFill();
  strokeWeight(2);
  colorMode(HSB);
}

function draw() {
  describe(
    'Ten rainbow-colored lines in a bezier curve formation. The top anchors of the curves move with the cursor as it hovers over the black canvas.'
  );

  background(5);

  // Create 10 bezier lines with anchor points moving
  // with the X coordinate of the cursor.
  for (let i = 0; i < 500; i += 10) {
    // Add 10 to the line's hue value during
    // each iteration.
    strokeColor = i + 40;

    stroke(strokeColor, 50, 60);

    bezier(mouseX - i / 2, 0 + i, 100, 20, 500, 500, 240 - i / 20, 200 + i / 9);
  }
}