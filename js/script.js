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
        all: window.data,
        //This function converts the first character of lang to uppercase.
        cap: function (lang) {
            return lang.charAt(0).toUpperCase() + lang.slice(1);
        },
        //Function to change webpage title, called by changePage
        titleChange: function (page) {
            document.getElementById('titleName').innerHTML = '';
            let titleName = document.getElementById('titleName');
            let titleText = document.createTextNode('Flex Fuels - ' + this.cap(page));
            titleName.appendChild(titleText);
        },
        //Change currentPage to keep track of the current page
        changePage: function (page) {
            currentPage = page;
            this.titleChange(page);
        },
        // Clears the main element and populates it with a loading screen to display a loading animation
        clearPage: function (page) {
            if (page !== currentPage) {
                document.getElementById('mainSection').innerHTML = `<div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <h1>Loading..</h1>
                    <div class="lds-ripple"><div></div><div></div></div></div>
                </div>`;
            }
            this.titleChange('Loading..');
        },
        //Populates Home page
        mainPage: function (page) {
            if (page === currentPage) {
                console.log(page + ' is the same as ' + currentPage); //debugging
                return;
            }
            console.log('Writing main page');
            document.getElementById('mainSection').innerHTML = `<div class="row">
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
        },
        //Populates Store page
        storePage: function (page) {
            if (page === currentPage) {
                console.log(page + ' is the same as ' + currentPage); //debugging
                return;
            }
        },
        //Populates About page
        aboutPage: function (page) {
            if (page === currentPage) {
                console.log(page + ' is the same as ' + currentPage); //debugging
                return;
            }

        }
    };

    //Page initialization and menu handlers
    function setupMenuHandlers() {
        pageHelper.clearPage('home');
        pageHelper.mainPage('home');
        pageHelper.changePage('home');
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
