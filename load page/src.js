function highlight(){
    document.getElementById("title").style.color = "darkred";
}
function unhighlight(){
    document.getElementById("title").style.color = "black";
}
function exit(id){
    document.getElementById(id).style.display = "none";
}

// window.addEventListener("click", function goHome(){
//     window.open("../home page/home.html");
// });

//THIS IS NOT WORKING WHYYYY

// window.addEventListener("load", function randomize(){
//     var r;
//     var list = document.getElementsByClassName("randomize")
//     for(var i=0; i<36; i++){
//         r = Math.floor(Math.random()*200);
//         list[i].style.margin = r + "px";
//     }
// });
// window.addEventListener("load", randomize(document.getElementById("welcome")));
// window.addEventListener("load", randomize(document.getElementById("zine")));
// const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
// function randomize(ID){
//     ID.style.left = getRandom(0, 300 - 200)+'px';
//     ID.style.top = getRandom(0, 300 - 200)+'px';
// }

