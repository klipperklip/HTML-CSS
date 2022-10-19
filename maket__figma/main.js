/*function viewDiv() {
    let document = document.getElementById(slide1).style.display;
    if (document == 'none') {
        document.getElementById(slide1).style.display = 'block'
    } else {
        document.getElementById(slide1).style.display = 'none'
    }
};
*/

function viewDiv() {
    document.getElementById("slide1").style.display = "block";
    document.getElementById("slide2").style.display = "none";
    document.getElementById("slide3").style.display = "none";
};

function viewDiv2() {
    document.getElementById("slide1").style.display = "none";
    document.getElementById("slide2").style.display = "block";
    document.getElementById("slide3").style.display = "none";
};

function viewDiv3() {
    document.getElementById("slide1").style.display = "none";
    document.getElementById("slide2").style.display = "none";
    document.getElementById("slide3").style.display = "block";
};
