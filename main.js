
 var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromUrl(getImage, function(Img){
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
		top:blockY,
		left:blockX,
	});
	canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '40') // adicione os códigos adequados às teclas
	{
		blockX = 50;
		newImage('rr.png');
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png');
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png');
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('pr.png');
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	    newImage('br.png');
	}
	
}

