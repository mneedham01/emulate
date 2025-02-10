function highlight(){
    document.getElementById("title").style.color = "darkred";
}
function unhighlight(){
    document.getElementById("title").style.color = "black";
}
function exit(id){
    document.getElementById(id).style.display = "none";
}


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


dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("zine"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}