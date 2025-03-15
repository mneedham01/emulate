// testing accessing universal variables 
function getLetterIds() {
    const object = localStorage.getItem("letterIds");

    window.alert(object["A"]);
}

// this function opens the scissors
function open() {
    let top = document.getElementById("top");
    let bottom = document.getElementById("bottom");
    top.animate (
        {
            transform: ["rotate(0deg)", "rotate(15deg)"]
        }, 1000,
    )
    bottom.animate (
        {
            transform: ["rotate(0deg)", "rotate(-15deg)"]
        }, 1000,
    )
    top.style.transform = "rotate(15deg)";
    bottom.style.transform = "rotate(-15deg)";
}

window.addEventListener("load", open);