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