function populate(id){
    document.getElementById(id).style.backgroundColor = "#27293D";
    // location.reload();
    for(let i=1; i < 26; i++){
        let img = document.createElement('img');
        img.id = "img" + i;
        // document.getElementById("img" + i).addEventListener("click", zoom());
        img.src = '../_archive/eventPhotos/' + id + '/' + i + '.JPG';
        if(i < 26/2) {
            document.getElementById("col1").appendChild(img);
        } else {
            document.getElementById("col2").appendChild(img);
        }
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
