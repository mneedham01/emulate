function expand_menu(){
    let menu = document.getElementById("menu");
    menu.style.visibility = "hidden";

    let expanded_menu = document.getElementById("expanded_menu");
    expanded_menu.style.visibility = "visible";

    let svg = document.getElementById("expanded_menu");
    svg.style.visibility = "visible";
}
// function getImages(){
//     let images = []
//
//     let letters = ["A", "E", "G", "I", "L", "M", "N", "T", "U"]
//     let src=""
//     for(let i=0; i< letters.length; i++){
//         for(let j=1; j < 12; j++){
//             src = "../_archive/letters/" + letters[i] + j + ".png"
//             images.append(src)
//         }
//     }
//     return images
// }
// const images = getImages();

const displayDistance = 100 // distance in px to display another photo
const nDisplay = 7 // number of pictures to display at once

const images = document.getElementsByClassName("image")

let globalIndex = 0 // used to count up the images
let lastMousePosition = {x: 0, y: 0} // used to get the last mouse position

// function to activate photos
function activatePic(img, x, y){
    img.style.display = "block"
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    img.style.zIndex = globalIndex // otherwise the last pic will always be at the top
    lastMousePosition = {x: x, y: y} // update the last mouse position
}

// compute mouse distance
function mouseDistance(x, y){
    return Math.hypot(x - lastMousePosition.x, y - lastMousePosition.y)
}

// onmousemove
window.onmousemove = e => {
    if (mouseDistance(e.clientX, e.clientY) > displayDistance){
        let activePic = images[globalIndex % images.length]
        // let inactivePic = images[(globalIndex - nDisplay) % images.length]

        activatePic(activePic, e.clientX, e.clientY)
        // if (inactivePic){inactivePic.dataset.status = "inactive"}

        globalIndex++
    }
}