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

randomElement();
function randomElement(){
    const min = 0;
    const max = 40;
    let currentImg = Math.floor(Math.random() * (max - min + 1)) + min;

    let divs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    const divMin = 0;
    const divMax = 26;
    let curDiv = Math.floor(Math.random() * (divMax - divMin + 1)) + divMin;

    const heads = 0;
    const tails = 1;
    let coin = Math.floor(Math.random() * (tails - heads + 1)) + heads;

    let location = "";

    let img = document.createElement('element');
    img.src = '../_archive/collageElements/' + currentImg + '.png';

    if(coin === 1){
        location = divs[curDiv].toUpperCase() + "-";
    } else {
        location = "-" + divs[curDiv];
    }
    console.log(location);
    console.log(curDiv);
    console.log(coin);

    document.getElementById(location).appendChild(img);
}

// window.addEventListener("load", randomElement);
