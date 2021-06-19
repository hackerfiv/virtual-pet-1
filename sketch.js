//Create variables here
var dog,dogimg,dogimg1;
var database;
var foods,foodStock;



function preload()
{
	//load images here
dogimg = loadImage("images/dogImg.png");
dogimg1 = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
dog.addImage(dogimg);
dog.scale=0.15
foodStock=database.ref('Food');
foodStock.on("value",readStock);
textSize(20);


}


function draw() {  
background("gold");

if (keyWentDown(UP_ARROW)) {
  writeStock(foods);
  dog.addImage(dogimg1);
}

  drawSprites();
  //add styles here

fill(255,255,254);
stroke("ceruleanBlueHue");
text("food remaining:"+foods,170,200);
textSize(13);
text("note:press upArrowKey to Feed T0MMY milk",130,10,300,20);
}
function readStock(data) {
 foods=data.val();

}

function writeStock(x) {
  if (x<=0) {
    x=0;
  } else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}
