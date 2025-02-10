function popup(iD){
    var x = document.getElementById(iD);
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}
function popupHover(iD){
    var x = document.getElementById(iD);
    x.style.display = "block"


}
function openViewer(iD){
    var x = document.getElementById(iD);
    x.style.display = "flex"

}
function popupExit(iD){
    var x = document.getElementById(iD);
    x.style.display = "none"
}

const move = document.getElementById("move");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`

    }, {duration: 1000, fill: "forwards"})

}