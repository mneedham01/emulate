var expanded = false; 
function menu() {
    if (expanded) {
        shrink_menu();
        expanded = false; 
    } else {
        expand_menu();
        expanded = true; 
    }
}
function expand_menu(){
    let menu = document.getElementById("menu");
    menu.style.visibility = "hidden";

    let expanded_menu = document.getElementById("expanded_menu");
    expanded_menu.style.visibility = "visible";
}

function shrink_menu(){
    let menu = document.getElementById("menu");
    menu.style.visibility = "visible";

    let expanded_menu = document.getElementById("expanded_menu");
    expanded_menu.style.visibility = "hidden"; 
}