// testing accessing universal variables 
function getLetterIds() {
    const object = localStorage.getItem("letterIds");

    window.alert(object["A"]);
}

// this function turns the scissors
function turnScissors() {
    let top = document.getElementById("top");
    let bottom = document.getElementById("bottom");
    if (opened == "closed") {
        top.animate (
            {
                transform: ["rotate(0deg)", "rotate(5deg)"]
            }, 1000,
        )
        bottom.animate (
            {
                transform: ["rotate(0deg)", "rotate(5deg)"]
            }, 1000,
        )
        top.style.transform = "rotate(5deg)";
        bottom.style.transform = "rotate(5deg)";
        opened = "opened";
    } else {
        top.animate (
            {
                transform: ["rotate(5deg)", "rotate(0deg)"]
            }, 1000,
        )
        bottom.animate (
            {
                transform: ["rotate(5deg)", "rotate(0deg)"]
            }, 1000,
        )
        top.style.transform = "rotate(0deg)";
        bottom.style.transform = "rotate(0deg)";
        opened = "closed";
    }
}

let opened = "closed";

function openScissors() {
    let top = document.getElementById("top");
    let bottom = document.getElementById("bottom");
    let menu = document.getElementById("menu");
    let expanded_menu = document.getElementById("expanded_menu");
    if (opened == "closed") {
        top.animate (
            {
                transform: ["rotate(0deg)", "rotate(20deg)"]
            }, 1000,
        )
        bottom.animate (
            {
                transform: ["rotate(0deg)", "rotate(-20deg)"]
            }, 1000,
        )
        menu.animate (
            {
                visibility: ["visible", "hidden"]
            }, 10,
        )
        expanded_menu.animate (
            {
                visibility: ["hidden", "visible"]
            }, 5000,
        )

        
        top.style.transform = "rotate(20deg)";
        bottom.style.transfrom = "rotate(-20deg)";
        menu.style.visibility = "hidden";
        expanded_menu.style.visibility = "visible";

        // menu.style.visibility = "hidden";
        // menu.src = "../_archive/menu/full_menu.png";
        // menu.style.height = "30vh";
        // menu.style.visibility = "visible";
    }
}

function sayhi() {
    window.alert("hello");
}