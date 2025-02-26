// setInterval(call_random_rotate, 1000);
function call_random_rotate() {
    let ids = ["e_image", "m_image", "u_image", "l_image", "a_image", "t_image", "i_image", "n_image", "g_image"]
    for (var id of ids) {
        random_rotate(id);
    }
}
function random_rotate(id){
    // chooses between -30 and 30 degrees 
    const min = -25;
    const max = 25;
    var degree = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById(id).style.transform = "rotate("+ degree.toString() + "deg)";
}
window.addEventListener("load", call_random_rotate);
window.addEventListener("click", enterPage);

function enterPage(){
    window.location.href = '../home page/home.html';
}