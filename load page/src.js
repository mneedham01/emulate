// setInterval(call_random_rotate, 1000);
function call_random_rotate() {
    let ids = ["e_image", "m_image", "u_image", "l_image", "a_image", "t_image", "i_image", "n_image", "g_image"]
    let letters = ["E", "M", "U", "L", "A", "T", "I", "N", "G"]
    for (let i = 0; i < ids.length; i++) {
        random_rotate(ids[i]);
        random_letter(ids[i],letters[i] );
    }
}
function random_rotate(id){
    // chooses between -30 and 30 degrees 
    const min = -15;
    const max = 15;
    var degree = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById(id).style.transform = "rotate("+ degree.toString() + "deg)";
}

function random_letter(id, letter){
    const min = 1;
    const max = 11;
    let currentImg = Math.floor(Math.random() * (max - min + 1)) + min;


    let img = document.getElementById(id);
    img.src = '../_archive/letters/' + letter + "/" + currentImg + '.png';
}
window.addEventListener("load", call_random_rotate);
window.addEventListener("click", enterPage);

function enterPage(){
    window.location.href = '../home page/home.html';
}