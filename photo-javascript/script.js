document.getElementById("img").onmouseover = color;

function color() {
    document.getElementById("img").style.filter = "grayscale(0%)";
};

document.getElementById("img").onmouseout = nocolor;

function nocolor() {
    document.getElementById("img").style.filter = "grayscale(100%)"
}




document.getElementById("img").
addEventListener("mouseover",
    function color() {
        this.style.filter = "grayscale(0%)";
    }
);



document.getElementById("img").
addEventListener("mouseout",
    function nocolor() {
        this.style.filter = "grayscale(100%)";
    }
);