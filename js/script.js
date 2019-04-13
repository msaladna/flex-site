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
    let currentPage = 'home';
    let pageHelper = {
        // Clears the main element
        clearPage: function (page) {
            if (page !== currentPage) {
                console.log('current page is: ' + currentPage + ' passed in page is: ' + page);
                document.getElementById('mainSection').innerHTML = "";
                currentPage = page;
                console.log('new page is: ' + currentPage);
            }
        },
        //Populates Main Page
        mainPage: function (page) {
            if (currentPage === page) {
                console.log('main population failed, current page is ' + currentPage);
                return;
            }
            console.log('population success, current page is ' + currentPage);
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
        //Home Button Handlers
        document
            .getElementById('home1')
            .addEventListener('click', function () {
                pageHelper.clearPage('home');
                pageHelper.mainPage('home');
            });
        document
            .getElementById('home2')
            .addEventListener('click', function () {
                pageHelper.clearPage('home');
                pageHelper.mainPage('home');
            });
        //Store Button Handlers
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
        //Contact Button Handlers
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
        //About Button Handlers
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
