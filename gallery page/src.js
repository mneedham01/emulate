//want to figure out a way to automatically read in how many photos there are in a directory

for(let i=1; i < 26; i++){
    var img = document.createElement('img');
    img.src = 'photos/' + i + '.JPG';
    if(i < 26/2) {
        document.getElementById("col1").appendChild(img);
    } else {
        document.getElementById("col2").appendChild(img);
    }
}
