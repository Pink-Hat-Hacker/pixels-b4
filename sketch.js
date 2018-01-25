function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var startingIndex = (col + row * width)*4
            pixels[startingIndex] = col; //red 
            pixels[startingIndex + 1] = row-33; //green
            pixels[startingIndex + 2] = 234; //blue
            pixels[startingIndex + 3] = 130; //alpha
        }
    }
    
    updatePixels();
}