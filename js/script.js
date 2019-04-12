/** Add any JavaScript you need to this file. */
window.onscroll = function () {
    navSticky()
};

let header = document.getElementById("navBar");
let sticky = header.offsetTop;

function navSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}