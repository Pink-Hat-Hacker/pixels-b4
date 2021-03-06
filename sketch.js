var userUpload;

function preload() {
	userUpload = loadImage("wolverine.jpg");
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	image(userUpload, 0, 0);
	loadPixels();
	for (var row = 0; row < height; row++) {
		for (var col = 0; col < width; col++) {
			var startingIndex = (col + row * width) * 4;
			var r = pixels[startingIndex];
			var g = pixels[startingIndex + 1];
			var b = pixels[startingIndex + 2];
			var a = pixels[startingIndex + 3];
			if (keyIsPressed) {
				if (key == "1") {
					gray_filter(startingIndex, g, a);
				}
				if(key=="2"){
                   green_filter(startingIndex, g, a);
                }
                if(key=="3"){
                    light_filter(startingIndex, r, b, g, a);
                }
                if(key=="4"){
                    darken_filter(startingIndex, r, b, g, a);
                }
                if(key=="5"){
                	bright_filter(startingIndex, r, b, g, a);
                }
                if(key=="6"){
                	n_filter(startingIndex, r, b, g, a);
                }
                if(key=="7"){
                	free_filter(startingIndex, r, b, g, a, col, row);
                }
                if(key=="8"){
                	 p_filter(startingIndex, r, g, b, a);
                }
                if (key=="9"){
                	horizontal_filter(startingIndex, r, g, b, a, row, col);
                }
			}
		}
	}
	updatePixels();
}

function gray_filter(startingIndex, g, a) {
	pixels[startingIndex + 0] = g; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = g; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function green_filter(startingIndex,g, a){
    pixels[startingIndex + 0] = 0; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = 0; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function light_filter(startingIndex, r, b, g, a){
    pixels[startingIndex + 0] = g; //red
	pixels[startingIndex + 1] = b; //green
	pixels[startingIndex + 2] = a; //blue
	pixels[startingIndex + 3] = r; //alpha
}

function darken_filter(startingIndex, r, b, g, a){
    pixels[startingIndex + 0] = r/2; //red
	pixels[startingIndex + 1] = g/2; //green
	pixels[startingIndex + 2] = b/2; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function bright_filter(startingIndex, r, b, g, a){
    pixels[startingIndex + 0] = r*2; //red
	pixels[startingIndex + 1] = g*2; //green
	pixels[startingIndex + 2] = b*2; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function n_filter(startingIndex, r, b, g, a){
    pixels[startingIndex + 0] = 255-r; //red
	pixels[startingIndex + 1] = 255-g; //green
	pixels[startingIndex + 2] = 255-b; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function free_filter(startingIndex, r, b, g, a, col, row){
    pixels[startingIndex + 0] = col-r; //red
	pixels[startingIndex + 1] = 255-g; //green
	pixels[startingIndex + 2] = row-b; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function p_filter(startingIndex, r, g, b, a){
	if(startingIndex % 30 == 0){
        pixels[startingIndex + 0] = 0;
        pixels[startingIndex + 1] = 0;
        pixels[startingIndex + 2] = 255;
        pixels[startingIndex + 3] = a;
    }
}

function horizontal_filter(startingIndex, r, g, b, a, row, col){
    
    var ri = col - 300;
    var le = -le - 300;
    startingIndex = (ri + row * width) * 4;
        
    
    pixels[startingIndex + 0] = r;
    pixels[startingIndex + 1] = g;
    pixels[startingIndex + 2] = b;
    pixels[startingIndex + 3] = a;
}