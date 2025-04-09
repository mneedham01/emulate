// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 0;
let numOfPapers = 2;
let maxLocation = numOfPapers + 1;

function createBook(issue, numPg){
    let pg = 1;
    for (let i = 1; i <= numPg; i++){
        let page = document.createElement("div")
        book.append(page)
        page.id = "p" + i;
        page.style.zIndex = i.toString()
        page.classList.add("paper")

        let front = document.createElement("div")
        let back = document.createElement("div")
        page.append(front)
        page.append(back)
        front.id = "front" + i
        back.id = "back" + i
        front.classList.add("front")
        back.classList.add("back")

        let f = document.createElement("div")
        let b = document.createElement("div")
        front.append(f)
        back.append(b)
        f.id = "f" + i
        b.id = "b" + i
        f.classList.add("front-content")
        b.classList.add("back-content")

        let fimg = document.createElement("img")
        let bimg = document.createElement("img")
        fimg.scr = '../_archive/magazines/' + issue + '/' + pg + '.png'
        pg++
        bimg.scr = '../_archive/magazines/' + issue + '/' + pg + '.png'
        pg++
        document.getElementById("f" + i).append(fimg)
        document.getElementById("b" + i).append(bimg)

    }

}

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 0:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = "1";
                break;
            case 1:
                paper2.classList.add("flipped");
                paper2.style.zIndex = "2";
                break;
            case 2:
                paper3.classList.add("flipped");
                paper3.style.zIndex = "3";
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}
// function goNextPage(){
//     let paper = "#p" + currentLocation + 1
//     let id = document.querySelector(paper);
//
//     let zIndex = currentLocation + 1;
//     if(currentLocation <= maxLocation) {
//         if(currentLocation === numOfPapers){
//             closeBook(false);
//         }else if(currentLocation === 0){
//             openBook();
//         }
//         id.classList.add("flipped")
//         id.style.zIndex = zIndex.toString()
//     }
//     currentLocation++;
// }


// function goPrevPage(){
//     let paper = "#p" + currentLocation + 1
//     let id = document.querySelector(paper);
//
//     let zIndex = numOfPapers - currentLocation + 1
//     if(currentLocation > 0 && currentLocation <= numOfPapers){
//         if(currentLocation === 1){
//             closeBook(true);
//         }else if(currentLocation === numOfPapers){
//             openBook();
//         }
//         id.classList.remove("flipped")
//         id.style.zIndex = zIndex.toString()
//     }
//     currentLocation--;
// }

function goPrevPage() {
    if(currentLocation > 0) {
        switch(currentLocation) {
            case 1:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 2:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}



// const move = document.getElementById("move");
//
// function popup(iD){
//     var x = document.getElementById(iD);
//     if(x.style.display === "none"){
//         x.style.display = "block";
//     }else{
//         x.style.display = "none";
//     }
// }
// // document.getElementById("zine1").addEventListener("mouseover", hover("move"));
// // document.getElementById("zine1").addEventListener("mouseout", exit("move"));
//
// document.body.onpointermove = event => {
//     const { clientX, clientY } = event;
//
//     move.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//
//     }, {duration: 1000, fill: "forwards"})
//
// }
// function hover(iD){
//     var x = document.getElementById(iD);
//     x.style.display = "block"
// }
//
function exit(iD){
    location.reload()
}
//
function openViewer(iD, elmt){
    let x = document.getElementById(iD);
    x.style.display = "flex"
    createBook('zine1', 20)
}
