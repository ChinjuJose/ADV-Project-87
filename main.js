blockWidth = 350;
blockHeight = 430;

blockX = 1;
blockY = 1;

var imgObj= "";
var canvas = new fabric.Canvas('myCanvas');

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function (Img) {
		imgObj = Img;

		imgObj.scaleToWidth(blockWidth);
		imgObj.scaleToHeight(blockHeight);
		imgObj.set({
			top: blockY,
			left: blockX
		});
		canvas.add(imgObj);

	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		blockX = -10;
		newImage('rr.jpg')
	}
	if(keyPressed == '71')
	{
		blockX = 250
		newImage('gr.png')
	}
	
	if(keyPressed == '89')
	{
		blockX = 400;
		newImage('yr.png',10,10)
	}
	if(keyPressed == '80')
	{
		blockX = 650;
		newImage('pr.png',10,10)
	}
	if(keyPressed == '66')
	{
		blockX = 800;
		newImage('br.png',700,10)
	}
	
}

