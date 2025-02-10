const move = document.getElementById("move");

function popup(iD){
    var x = document.getElementById(iD);
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}
// document.getElementById("zine1").addEventListener("mouseover", hover("move"));
// document.getElementById("zine1").addEventListener("mouseout", exit("move"));

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`

    }, {duration: 1000, fill: "forwards"})

}
function hover(iD){
    var x = document.getElementById(iD);
    x.style.display = "block"
}

function exit(iD){
    var x = document.getElementById(iD);
    x.style.display = "none"
}

function openViewer(iD, elmtID){
    var elmt = document.getElementById(elmtID)
    var x = document.getElementById(iD);
    x.style.display = "block"

}


