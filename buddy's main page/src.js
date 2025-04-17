function expand_menu(){
    let menu = document.getElementById("menu");
    menu.style.visibility = "hidden";

    let expanded_menu = document.getElementById("expanded_menu");
    // expanded_menu.style.visibility = "visible";

    let svg = document.getElementById("expanded_menu");
    svg.style.visibility = "visible";
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent");
    cnv.style("display", "block");
    cnv.style("position", "absolute");
    cnv.style("inset", "0");
    cnv.style("z-index", "-1");
    lastMousePos = { x: mouseX, y: mouseY };
}

let distThreshold = 100;
// scale factor to size images
let scaleFactor = 4;

// VARIABLES
// array to hold all of our images
let images = [];
// array to hold history of mouse positions and image index for that position
let queue = [];
// object containing our last (stored) mouse position
let lastMousePos = { x: 0, y: 0 };

for(int)
function preload() {
    for (let i = 0; i < imageUrls.length; i++) {
        images[i] = loadImage(imageUrls[i]);
    }
}

function draw() {
    // clear the canvas
    clear();
    background(41, 41, 41);

    // calculate distance between current mouse position and last stored mouse position.
    let d = dist(mouseX, mouseY, lastMousePos.x, lastMousePos.y);

    // If distance is greater than threshold:
    // 1. Add current mouse position and current image index to the front of the queue
    // 2. Update lastMousePos to current mouse position
    // 3. Update imgIndex to next image index
    if (d > distThreshold) {
        queue.unshift({ x: mouseX, y: mouseY, index: imgIndex });
        lastMousePos = { x: mouseX, y: mouseY };
        imgIndex = (imgIndex + 1) % images.length;
    }

    // maintain queue length equal to number of images by removing the last item
    if (queue.length > images.length) {
        queue.pop();
    }

    // define scale of images based on width of canvas
    let scale = width / scaleFactor;

    // draw images in queue
    // draw order is reversed so that the first image in the queue is drawn on top
    for (let i = queue.length - 1; i >= 0; i--) {
        let img = images[queue[i].index];
        if (img) {
            // scale image based on scale factor
            let imgWidth = (img.width * scale) / img.width;
            let imgHeight = (img.height * scale) / img.width;
            // draw image at mouse position offset by half of image width and height
            image(
                img,
                queue[i].x - imgWidth / 2,
                queue[i].y - imgHeight / 2,
                imgWidth,
                imgHeight
            );
        }
    }
}

// resize canvas when window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}