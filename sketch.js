let carroX = 0;
const y = 300;
let colorSemaforo;
let baseLine = 376;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorSemaforo = color("red");
}
function draw() {
  background(245, 245, 245);

  // Dibujar la estructura del carro
  noStroke();
  fill("blue");
  rect(carroX, y, 100, 60);

  // Llantas del carro
  fill(0);
  circle(carroX + 20, y + 60, 30);
  circle(carroX + 80, y + 60, 30);

  // Aros internos de las llantas
  fill(255);
  circle(carroX + 20, y + 60, 15);
  circle(carroX + 80, y + 60, 15);

  // Ventanas
  fill(255, 255, 0);
  rect(carroX + 50, y + 5, 50, 30);

  // Primera condición: Si el carro llega a la mitad del lienzo, el semáforo cambia a luz verde.

  if (carroX + 30 >= 725) {
    colorSemaforo = color("green");
  }

  // creación del semáforo
  fill(192, 192, 192);
  rect(700, 30, 50, 100);

  // luces del semáforo
  fill(colorSemaforo);
  circle(725, 60, 28);
  fill(colorSemaforo);
  circle(725, 100, 28);

  // Mover el carro hacia la derecha
  carroX += 6;

  // Segunda condición: Si el carro sale del lienzo, que vuelva a la posición inicial.

  if (carroX > windowWidth) {
    carroX = 0;
    colorSemaforo = "red";
  }
  // Dibujar la línea del piso
  stroke(128, 128, 128);
  strokeWeight(4).line(0, baseLine, windowWidth, baseLine);
}
