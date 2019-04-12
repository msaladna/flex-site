/** Add any JavaScript you need to this file. */
window.onscroll = function () {
    myFunction()
};

let header = document.getElementById("navBar");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}