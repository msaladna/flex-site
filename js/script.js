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
    var currentPage = 'home';
    var pageHelper = {
        // Clears the main element
        clearPage: function (page) {
            if (page !== currentPage)
                document.getElementById('mainSection').innerHTML = "";
        },
    };

    function setupMenuHandlers() {
        document
            .getElementById('home1')
            .addEventListener('click', function () {
                pageHelper.clearPage('home');
            });
        document
            .getElementById('home2')
            .addEventListener('click', function () {
                pageHelper.clearPage('home');
            });
        document
            .getElementById('store1')
            .addEventListener('click', function () {
                pageHelper.clearPage('store');
            });
        document
            .getElementById('store2')
            .addEventListener('click', function () {
                pageHelper.clearPage('store');
            });
        document
            .getElementById('contact1')
            .addEventListener('click', function () {
                pageHelper.clearPage('contact');
            });
        document
            .getElementById('contact2')
            .addEventListener('click', function () {
                pageHelper.clearPage('contact');
            });
        document
            .getElementById('about1')
            .addEventListener('click', function () {
                pageHelper.clearPage('about');
            });
        document
            .getElementById('about2')
            .addEventListener('click', function () {
                pageHelper.clearPage('about');
            });
    }
    window.onload = setupMenuHandlers;
})();
