// JS to give navbar sticky behaviour
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

// Menu Handler Functions
(function () {
    var pageHelper = {
        /**
         * Clears the main element
         */
        clearPage: function () {
            document.getElementById('mainSection').innerHTML = "";
        },
    };

    function setupMenuHandlers() {
        document
            .getElementsByClassName('home')
            .addEventListener('click', function () {
                pageHelper.clearPage();
            });
        document
            .getElementsByClassName('store')
            .addEventListener('click', function () {
                pageHelper.clearPage();
            });
        document
            .getElementsByClassName('contact')
            .addEventListener('click', function () {
                // do stuff
            });
        document
            .getElementsByClassName('about')
            .addEventListener('click', function () {
                // do stuff
            });
    }

    window.onload = setupMenuHandlers;
})();
