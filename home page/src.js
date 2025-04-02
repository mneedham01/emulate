// testing accessing universal variables 
function getLetterIds() {
    const object = localStorage.getItem("letterIds");

    window.alert(object["A"]);
}

// this function turns the scissors
function turnScissors() {
    let top = document.getElementById("top");
    let bottom = document.getElementById("bottom");
    if (opened === "closed") {
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

    if (opened === "closed") {
        // Open Scissors
        top.animate(
            { transform: ["rotate(0deg)", "rotate(20deg)"] },
            { duration: 1000, fill: "forwards" }
        );
        bottom.animate(
            { transform: ["rotate(0deg)", "rotate(-20deg)"] },
            { duration: 1000, fill: "forwards" }
        );
        menu.animate(
            { opacity: [1, 0] },
            { duration: 500, fill: "forwards" }
        );
        expanded_menu.animate(
            { opacity: [0, 1] },
            { duration: 500, fill: "forwards" }
        );

        top.style.transform = "rotate(20deg)";
        bottom.style.transform = "rotate(-20deg)";
        menu.style.visibility = "hidden";
        expanded_menu.style.visibility = "visible";

        opened = "opened";
    } else {
        // Close Scissors
        top.animate(
            { transform: ["rotate(20deg)", "rotate(0deg)"] },
            { duration: 1000, fill: "forwards" }
        );
        bottom.animate(
            { transform: ["rotate(-20deg)", "rotate(0deg)"] },
            { duration: 1000, fill: "forwards" }
        );
        menu.animate(
            { opacity: [0, 1] },
            { duration: 500, fill: "forwards" }
        );
        expanded_menu.animate(
            { opacity: [1, 0] },
            { duration: 500, fill: "forwards" }
        );

        top.style.transform = "rotate(0deg)";
        bottom.style.transform = "rotate(0deg)";
        menu.style.visibility = "visible";
        expanded_menu.style.visibility = "hidden";

        opened = "closed";
    }
}


