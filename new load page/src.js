function random_rotate(){
    // chooses between -30 and 30 degrees 
    var zerotothirty= Math.floor(Math.random, 31);
    var binary = Math.random > 0.5? -1: 1; 
    var degree =  zerotothirty * binary;

    
    document.getElementById("e_image").style.transform = "rotate(30deg)";
    // document.getElementById(id).style.transform("rotate(90deg)");
}