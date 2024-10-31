function setup() {
  createCanvas(400, 400);
  background(255, 235, 205); // Light skin tone background color
}

function draw() {
  noLoop(); // Ensure draw only runs once
  
  // Face
  fill(255, 220, 185); // Face color
  ellipse(200, 200, 180, 220); // Main face shape
  
  // Eyes
  fill(255); // White color for eye whites
  ellipse(170, 180, 40, 20); // Left eye white
  ellipse(230, 180, 40, 20); // Right eye white
  
  fill(50, 50, 50); // Dark color for pupils
  ellipse(170, 180, 20, 20); // Left pupil
  ellipse(230, 180, 20, 20); // Right pupil
  
  // Eyebrows
  stroke(50, 50, 50); // Dark color for eyebrows
  strokeWeight(4);
  line(155, 165, 185, 165); // Left eyebrow
  line(215, 165, 245, 165); // Right eyebrow
  
  // Nose
  noFill();
  stroke(120, 80, 70); // Light brown for nose outline
  strokeWeight(2);
  beginShape();
  vertex(200, 190);
  vertex(195, 220);
  vertex(205, 220);
  endShape();
  
  // Mouth
  fill(200, 100, 100); // Soft red for lips
  arc(200, 250, 50, 30, 0, PI); // Upper lip
  noFill();
  arc(200, 250, 50, 20, PI, TWO_PI); // Lower lip outline
  
  // Ears
  fill(255, 220, 185); // Same color as face
  ellipse(120, 200, 20, 50); // Left ear
  ellipse(280, 200, 20, 50); // Right ear
  
  // Hair
  fill(50, 50, 50); // Dark color for hair
  beginShape();
  vertex(130, 130);
  bezierVertex(160, 70, 240, 70, 270, 130);
  vertex(270, 130);
  bezierVertex(250, 50, 150, 50, 130, 130);
  endShape(CLOSE);
}
