// testing accessing universal variables 
function getLetterIds() {
    const object = localStorage.getItem("letterIds");

    window.alert(object["A"]);
}

let opened = "closed";

// this function opens the scissors
function openScissors() {
    let top = document.getElementById("top");
    let bottom = document.getElementById("bottom");
    if (opened == "closed") {
        top.animate (
            {
                transform: ["rotate(0deg)", "rotate(10deg)"]
            }, 1000,
        )
        bottom.animate (
            {
                transform: ["rotate(0deg)", "rotate(10deg)"]
            }, 1000,
        )
        top.style.transform = "rotate(10deg)";
        bottom.style.transform = "rotate(10deg)";
        opened = "opened";
    } else {
        top.animate (
            {
                transform: ["rotate(10deg)", "rotate(0deg)"]
            }, 1000,
        )
        bottom.animate (
            {
                transform: ["rotate(10deg)", "rotate(0deg)"]
            }, 1000,
        )
        top.style.transform = "rotate(0deg)";
        bottom.style.transform = "rotate(0deg)";
        opened = "closed";
    }
}