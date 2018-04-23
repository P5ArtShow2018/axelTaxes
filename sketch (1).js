function setup() {
  createCanvas(1910,1000)
}
function preload() {
  Taxes = loadImage("assets/Taxes.jpg")
  Happy = loadImage("assets/Happy.jpg")
}
function draw() {
 image(Taxes,0,0)
 textSize(50)
 fill(255,255,255)
 text("Help Plan for Retirement",955,500)
 text("With Axel",955,550)
 text("We'll Do The Easy Part",955,600)
 while(mouseIsPressed) { (image(Happy,0,0)); }
}