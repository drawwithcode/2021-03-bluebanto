/* Antonio Federico Brunetti
Bluebanto
Creative Coding 2021_2022
Assignment N_3: DIGITAL COLLAGE

Project title: PEOPLE OF BOVISA

Concept: This works is inspired by the "choose your character" page of videogames, mixed with the typical description and layout of online shops.
By interacting with the page, all the users will know more about some of the people we can find in Bovisa, around the Polimi design campus.


Parts of code were taken from P5.js editor, some tutorials online and the book titled "Generative Design"
*/

//assets_images
var imageList;
var imageFile = new Array();
//assets_audio
var trackList;
var trackFile = new Array();

//audio control
let trackNo = 0;

let x = 0;

function preload() {
  trackList = loadJSON("./tracks.json");
  imageList = loadJSON("./pictures.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //per cambiare cursore
  noCursor();

  x = windowWidth;

  //load pictures array
  for (let i = 0; i < imageList.images.length; i++) {
    imageFile[i] = loadImage("./assets/images/" + imageList.images[i]);
  }

  //load tracks array
  for (let i = 0; i < trackList.tracks.length; i++) {
    trackFile[i] = loadSound("./assets/tracks/" + trackList.tracks[i]);
  }

  imageMode(CENTER);
}

function draw() {
  background(255);

  //songs[1].play();

  //star in the background
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 190);
  fill("yellow");
  star(0, 0, 60, 355, 12);
  pop();

  //TESTO NON INTERATTIVO
  //assignment
  textSize(15);
  fill(0);
  textAlign(LEFT);
  textFont("Oxygen");
  text("ASSIGNMENT 03", 20, 30);
  //subtitle
  textSize(15);
  fill(0);
  textAlign(CENTER);
  textFont("Oxygen");
  text("WHAT DESIGN STUDENTS FROM BOVISA ARE WEARING", windowWidth / 2, 30);
  //get to know them
  textSize(15);
  fill(0);
  textAlign(RIGHT);
  textFont("Oxygen");
  text("GET TO KNOW THEM", windowWidth - 20, 30);
  //project's title
  textSize(60);
  fill(0);
  textAlign(LEFT);
  textFont("Oxygen");
  text("PEOPLE OF BOVISA", 20, 95);
  //year
  textSize(60);
  fill(0);
  textAlign(LEFT);
  textFont("Oxygen");
  text("2021", 20, 150);
  //author
  textSize(30);
  fill(0);
  textAlign(LEFT);
  textFont("Oxygen");
  text("@bluebanto", 20, 260);

  //TESTO A SCORRIMENTO - INFO
  textSize(15);
  fill(0);
  textFont("Oxygen");
  text(
    "THIS PAGE WILL INTRODUCE YOU TO THE DIFFERENT STYLES OF DESIGN STUDENTS FROM POLITECNICO OF MILAN, EVERYDAY THEY LOOK DIFFERENT FROM THOSE WHO STUDY ENGINEERING WHO ARE ALWAYS LOOKING BORING AF ",
    x,
    windowHeight - 20
  );

  image(
    imageFile[0],
    x,
    height / 2,
    imageFile[0].width / 1.3,
    imageFile[0].height / 1.3
  );

  image(
    imageFile[0],
    x + 350,
    height / 2,
    imageFile[0].width / 1.3,
    imageFile[0].height / 1.3
  );
  image(
    imageFile[0],
    x + 700,
    height / 2,
    imageFile[0].width / 1.3,
    imageFile[0].height / 1.3
  );
  image(
    imageFile[0],
    x + 1050,
    height / 2,
    imageFile[0].width / 1.3,
    imageFile[0].height / 1.3
  );
  image(
    imageFile[0],
    x + 1400,
    height / 2,
    imageFile[0].width / 1.3,
    imageFile[0].height / 1.3
  );

  if (x < -1800) {
    x = windowWidth;
  }
  x--;

  //bottone_playmusic
  var buttonText = "PLAY";
  button = createButton(buttonText);
  button.style("background-color", 0, 0, 0, 0);
  button.style("color", 0);
  button.style("font-size", "15px");
  button.style("width", "80px");
  button.style("font-family", "Oxygen");
  button.style("padding", "8px 20px 8px 20px");
  button.style("border-radius", "15px");
  button.style("border-style", "solid");
  button.style("border-color", 0);
  button.style("border-width", "1px");
  button.position(20, windowHeight - 80);

  //per musica
  button.mousePressed(function () {
    if (trackFile[trackNo].isPlaying()) {
      trackFile[trackNo].pause();
      button.html("PLAY");
      textShow = true;
    } else {
      trackFile[trackNo].loop();
      button.html("PAUSE");
      textShow = false;
    }
  });

  //bottone_changesong
  var buttonText = "NEXT";
  button = createButton(buttonText);
  button.style("background-color", 255);
  button.style("color", 0);
  button.style("font-size", "15px");
  button.style("width", "80px");
  button.style("font-family", "Oxygen");
  button.style("padding", "8px 20px 8px 20px");
  button.style("border-radius", "15px");
  button.style("border-style", "solid");
  button.style("border-color", 0);
  button.style("border-width", "1px");
  button.position(110, windowHeight - 80);

  //per musica_switchtonext
  button.mousePressed(function () {
    trackFile[trackNo].stop();
    trackNo++;
    if (trackNo == trackList.tracks.length) {
      trackNo = 0;
    }
    trackFile[trackNo].play();
  });

  //forma nuovo cursore
  push();
  fill("Violet");
  star(mouseX, mouseY, 5, 12, 12);
  pop();
}

//star in the background
//taken from https://p5js.org/examples/form-star.html

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
