setInterval(function call_random_rotate() {
    ids = ["e_image", "m_image", "u_image", "l_image", "a_image", "t_image", "e1_image"]
    for (var id of ids) {
        random_rotate(id);
    }
}, 500);

function random_rotate(id){
    // chooses between -30 and 30 degrees 
    const min = -30;
    const max = 30;
    var degree = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById(id).style.transform = "rotate("+ degree.toString() + "deg)";
}