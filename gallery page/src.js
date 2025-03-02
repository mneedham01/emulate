//want to figure out a way to automatically read in how many eventPhotos there are in a directory

for(let i=1; i < 26; i++){
    let img = document.createElement('img');
    img.id = "img" + i;
    // document.getElementById("img" + i).addEventListener("click", zoom());
    img.src = '../_archive/eventPhotos/' + i + '.JPG';
    if(i < 26/2) {
        document.getElementById("col1").appendChild(img);
    } else {
        document.getElementById("col2").appendChild(img);
    }
}

function zoom(){
    document.getElementById('zoomed').style.display = "block";
}

function random_rotate(id){
    // chooses between -30 and 30 degrees
    const min = -15;
    const max = 15;
    var degree = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById(id).style.transform = "rotate("+ degree.toString() + "deg)";
}

const numMin = 2;
const numMax = 10;
let numElements = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

for(let i = 0; i < numElements; i++){
    randomElement();
}
function randomElement(){
    const eMin = 0;
    const eMax = 40;
    let currentImg = Math.floor(Math.random() * (eMax - eMin + 1)) + eMin;

    // let divs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    let divs = ["c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];

    const divMin = 0;
    const divMax = 14;
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
    element.src = '../_archive/collageElements/' + currentImg + '.png';
    random_rotate(id)
}

// window.addEventListener("load", randomElement);
