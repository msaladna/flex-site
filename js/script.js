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
    let currentPage = '';
    const pageHelper = {
        // Clears the main element
        clearPage: function (page) {
            if (page !== currentPage)
                document.getElementById('mainSection').innerHTML = "";
        },
        changePage: function (page) {
            currentPage = page;
        },
        mainPage: function (page) {
            if (page === currentPage) {
                console.log(page + ' is the same as ' + currentPage);
                return;
            }
            console.log('Writing main page');
            document.getElementById('mainSection').innerHTML = `
            <div class="row">
                <div class="col-md d-none d-md-flex things2slide">
                    <div class="mr-1">
                        <img src="images/shake1.jpg" class="img img-fluid" alt="Protein Shake" id="proShake">
                    </div>
                </div>
                <div class="col-12 col-md" id="description">
                    <h2>Shop with confidence..</h2>
                    <p>
                        Here at Flex Fuels we strive to be the very best at what we do,
                        because we know how important is to be putting in only the very best fuel in your body.
                        You are what you eat after all!
                        <br><br>Shop for the best supplements at the most competitive prices here
                        at Flex Fuel. Our store carries everything from the tastiest whey powder mixes to the most convenient
                        vitamin pills to help you get what your body needs to keep going at maximum proficiency.
                        <br><br>Don't settle for just any fuel, get Flex Fuels.
                    </p>
                </div>
            </div>`;
        }
    };

    function setupMenuHandlers() {
        //pageHelper.clearPage('home');
        // pageHelper.mainPage('home');
        //pageHelper.changePage('home');
        document
            .getElementById('home1')
            .addEventListener('click', function () {
                pageHelper.clearPage('home');
                pageHelper.mainPage('home');
                pageHelper.changePage('home');
            });
        document
            .getElementById('home2')
            .addEventListener('click', function () {
                pageHelper.clearPage('home');
                pageHelper.mainPage('home');
                pageHelper.changePage('home');
            });
        document
            .getElementById('store1')
            .addEventListener('click', function () {
                pageHelper.clearPage('store');
                pageHelper.changePage('store');
            });
        document
            .getElementById('store2')
            .addEventListener('click', function () {
                pageHelper.clearPage('store');
                pageHelper.changePage('store');
            });
        document
            .getElementById('contact1')
            .addEventListener('click', function () {
                pageHelper.clearPage('contact');
                pageHelper.changePage('contact');
            });
        document
            .getElementById('contact2')
            .addEventListener('click', function () {
                pageHelper.clearPage('contact');
                pageHelper.changePage('contact');
            });
        document
            .getElementById('about1')
            .addEventListener('click', function () {
                pageHelper.clearPage('about');
                pageHelper.changePage('about');
            });
        document
            .getElementById('about2')
            .addEventListener('click', function () {
                pageHelper.clearPage('about');
                pageHelper.changePage('about');
            });
    }

    window.onload = setupMenuHandlers;
})();
