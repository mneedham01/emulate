// create a set of the folders/events 
const letters = new Set(["yule","april-fools","craft-concert","halloween"]);

// create a variable with the previous visited page 
// in order to remove the photos when that page is left 


// this function is called when the button for a particular event is pressed 
function populate(id){
    // first, call refresh 
    refresh();
    // change all the other buttons to be transparent and the given one to be blue
    for (const event of letters) {
        if (event == id) {
            document.getElementById(event).style.backgroundColor = "#27293D";
        } else {
            document.getElementById(event).style.backgroundColor = "transparent";
        }
    }

    // i am sure there is a smarter way to do this
    var folder_size; 
    if (id == "april-fools") {
        folder_size = 55; 
    }
    if (id == "yule") {
        folder_size = 26;
    }
    // establish the first side to be left
    var left_column = true; 
    // loop through the folder 
    for (i =1; i < folder_size + 1; i++) {
        let img = document.createElement('img');
        // give the image a source 
        img.src = '../_archive/eventPhotos/' + id + '/' + i + '.jpg';
        // place in appropriate column
        if (left_column) {
            document.getElementById("col1").appendChild(img);
        } else {
            document.getElementById("col2").appendChild(img);
        }
        // change the column side 
        left_column = left_column ? false : true;
    }
}

function refresh(){
    // let img;
    // remove image from column 1 and column 2 
    let col1 = document.getElementById("col1");
    let col2 = document.getElementById("col2");

    while (col1.firstChild) {
        col1.removeChild(col1.lastChild);
        col2.removeChild(col2.lastChild);
    }
    // for (let i = 1; i < 26; i++) {
    //     img = document.getElementById("img" + i);
    //     if (i < 26 / 2) {
    //         document.getElementById("col1").removeChild(img);
    //     } else {
    //         document.getElementById("col2").removeChild(img);
    //     }
    // }
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
