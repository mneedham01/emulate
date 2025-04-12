// this function is called when the button for a particular event is pressed 
function populate(id){
    // first, change the color of the button to indicate it has been pressed 
    document.getElementById(id).style.backgroundColor = "#27293D";
    // loop through the folder until there are no more files 
    var valid_address = true; 
    // establish the first side to be left
    var left_column = true; 
    // establish the first address to be 1 
    var i = 1; 
    while (valid_address) {
        let img = document.createElement('img');
        // give the image a source 
        img.src = '../_archive/eventPhotos/' + id + '/' + i + '.jpg';
        // if there is an error (if we have run out of photos), then
        img.onLoad = onLoad();
        
        img.onError = errorHandler();
        
        // errorHandler function 
        function errorHandler() {
            // alert("hello");
            valid_address = false; 
        }

        // place in appropriate column
        if (left_column) {
            document.getElementById("col1").appendChild(img);
        } else {
            document.getElementById("col2").appendChild(img);
        }
        // increase the id 
        i++; 
        // switch sides 
        left_column = false;
    }
}

function refresh(){
    let img;
    for (let i = 1; i < 26; i++) {
        img = document.getElementById("img" + i);
        if (i < 26 / 2) {
            document.getElementById("col1").removeChild(img);
        } else {
            document.getElementById("col2").removeChild(img);
        }
    }
}


// function zoom(){
//     document.getElementById('zoomed').style.display = "block";
// }
//
// let im = document.querySelector('.img');
//
// let zoom = () => {
//     document.getElementById('zoomed').style.display = "block";
// }
// im.forEach((item) => {
//     item.addEventListener('click', zoom)
// });

function random_rotate(id){
    // chooses between -30 and 30 degrees
    const min = -15;
    const max = 15;
    var degree = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById(id).style.transform = "rotate("+ degree.toString() + "deg)";
}

const numMin = 1;
const numMax = 3;
let numElements = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

for(let i = 0; i <= numElements; i++){
    randomElement();
}
function randomElement(){
    const eMin = 0;
    const eMax = 39;
    let currentImg = Math.floor(Math.random() * (eMax - eMin + 1)) + eMin;

    let divs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    // let divs = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];

    const divMin = 0;
    const divMax =6;
    let curDiv = Math.floor(Math.random() * (divMax - divMin + 1)) + divMin;

    const heads = 0;
    const tails = 1;
    let coin = Math.floor(Math.random() * (tails - heads + 1)) + heads;

    let id = "";

    if(coin === 1){
        id = divs[curDiv].toUpperCase() + "-";
    } else {
        id = "-" + divs[curDiv];
    }

    let element = document.getElementById(id);
    let image = '../_archive/collageElements/' + currentImg + '.png';
    element.src = image;
    random_rotate(id)
}

// window.addEventListener("load", randomElement);
