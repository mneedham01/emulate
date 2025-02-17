function random_rotate(){
    // chooses between -30 and 30 degrees 
    const min = -30;
    const max = 30;
    var degree = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("e_image").style.transform = "rotate("+ degree.toString() + "deg)";
}