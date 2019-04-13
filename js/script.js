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
        changePage: function (page, init) {
            if (init === 1)
                currentPage = 'home';
            let x = document.getElementById(currentPage + '1');
            x.classList.remove("active");
            let y = document.getElementById(currentPage + '2');
            y.classList.remove("activeFoot");
            let a = document.getElementById(page + '1');
            a.className += ' active';
            let b = document.getElementById(page + '2');
            b.className += ' activeFoot';
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
            document.getElementById('mainSection').innerHTML = `<div class="row">
                <div class="col-md-2 category-list">
                    <ul>

                    </ul>
                </div>
                <div class="col-12 col-md-10">
                    <div class="container-fluid">
                        <div class="row product-list">

                        </div>
                    </div>
                </div>
            </div>`;

            commerceHelper.showProducts(0);
            commerceHelper.showCategories();

            for (let item of document.querySelectorAll(".category-list ul li")) {
                item.addEventListener("click", function (evt) {
                    commerceHelper.changeCategory(evt.target.getAttribute("data-cid"));
                    commerceHelper.bold(evt.target.getAttribute("data-cid"));
                }, false);
            }


        },
        //Populates Contact page
        contactPage: function (page) {
            if (page === currentPage) {
                console.log(page + ' is the same as ' + currentPage); //debugging
                return;
            }

            //Validate Contact Form
            function formValidator(phoneNum, postalCode) {
                let phoneFilter = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
                let pcFilter = /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] ?\d[A-Z]\d)$/;

                if (phoneFilter.test(phoneNum) === false && pcFilter.test(postalCode) === false) {
                    alert("Validation Error \nPlease Fix Your Postal Code and Phone Number");
                    return event.preventDefault();
                }
                if (phoneFilter.test(phoneNum) === false) {
                    alert("Validation Error \nPlease Fix Your Phone Number");
                    return event.preventDefault();
                }
                if (pcFilter.test(postalCode) === false) {
                    alert("Validation Error \nPlease Fix Your Postal Code");
                    return event.preventDefault();
                }
            }

            document.getElementById('mainSection').innerHTML = `<form action="https://httpbin.org/post" class="mb-5 col-12 col-lg-6" method="POST">
        <label for="options">What Are You Contacting Us About?</label>
        <select name="options" class="form-control" id="options">
            <option id="return" name="return" value="return"
            >Returns
            </option
            >
            <option id="other" name="other" value="other inquires"
            >Other Inquiries
            </option
            >

        </select>

        <br/>

        <label for="fname">First Name</label>
        <input
                type="text"
                id="fname"
                class="form-control"
                name="firstname"
                placeholder="Your name.."
                required
        />

        <label for="lname">Last Name</label>
        <input
                type="text"
                id="lname"
                name="lastname"
                class="form-control"
                placeholder="Your last name.."
                required
        />

        <label for="email">Email Address</label>
        <input
                type="email"
                id="email"
                name="email address"
                class="form-control"
                placeholder="Example@Example.com"
                required
        />

        <label for="address">Address</label>
        <input
                type="text"
                id="address"
                name="address"
                class="form-control"
                placeholder="Your current address"
                required
        />

        <label for="address2">Apt Number (optional)</label>
        <input
                type="text"
                id="address2"
                name="apptnum"
                class="form-control"
                placeholder="ex apt 3021"
        />

        <label for="citymulti"> City </label>
        <input list="citymulti" name="city " class="form-control" required/>
        <datalist id="citymulti" class="form-control">
            <option value="Toronto"></option>
            <option value="Mississauga"></option>
            <option value="Oakville"></option>
            <option value="Hamilton"></option>
            <option value="London"></option>
        </datalist>

        <label for="phone">Phone number</label>
        <input
                type="text"
                id="phone"
                class="form-control"
                name="phone number"
                placeholder="999-999-9999"
                required
        />
        <div>
            <label for="phonecheck">Would you like to be called?</label>
            <input
                    type="checkbox"
                    id="phonecheck"
                    name="call yes or no"
            />
        </div>
        <label for="postalcode">Postal Code</label>
        <input
                type="text"
                id="postalcode"
                class="form-control"
                name="postal code"
                placeholder="X1X X1X"
        />

        <label for="subject">Subject</label>
        <textarea
                id="subject"
                name="subject"
                class="form-control"
                placeholder="Write something.."
                style="height:200px"
                required
        ></textarea>

        <input
                type="hidden"
                id="myname"
                name="My Name"
                value="First Last"
        />
        <input
                type="hidden"
                id="id"
                name="name"
                value="value"
        />

        <button type="submit" id="SubmitForm" type="submit" class="btn btn-primary">
            Submit
        </button>
    </form>`;
            if (document.getElementById("SubmitForm") !== null) {
                document.getElementById("SubmitForm").addEventListener("click", function () {
                    formValidator(
                        document.getElementById("phone").value,
                        document.getElementById("postalcode").value
                    );
                });
            }
        },
        //Populates About page
        aboutPage: function (page) {
            if (page === currentPage) {
                console.log(page + ' is the same as ' + currentPage); //debugging
                return;
            }
            document.getElementById('mainSection').innerHTML = `<div class="row">
                <div class="col-md d-none d-md-flex things2slide">
                    <div class="mr-1">
                        <img src="images/shake2.jpg" class="img img-fluid" alt="Protein Shake" id="proShake">
                    </div>
                </div>
                <div class="col-12 col-md" id="description">
                    <h2>About Us</h2>
                    <p>
                        We're a proud canadian based company that takes pride in what we do; and
                        that's providing amazing people like you the best fuels possible. <br><br>Thanks to our
                        top-end staff and supply we are able to offer a variety of the best quality
                        protein powders, so we can bring you the best tasting fuel there is.
                    </p>
                </div>
            </div>`;
        }
    };

    const commerceHelper = {
        currentCategoryId: 0,

        showProducts: function (category = 0) {
            console.log(products);
            prods = products.filter(function (prod) {
                if (prod.category == category || category == 0)
                    return prod
            });
            console.log(prods);

            prods.forEach(function (element) {
                let p = commerceHelper.createProductHtml(element);
                $('.product-list').append(p);
            })

        },
        createProductHtml: function (product) {

            let h = '<div class="d-flex mb-3 product-card col-6 col-lg-4 col-xl-2"><div class="card">' +
                '  <img class="card-img-top" src="' + product.image + '" alt="Card image cap">' +
                '  <div class="card-body flex-column d-flex">' +
                '    <h5 class="card-title"><marquee onmouseover="this.stop();" onmouseout="this.start();">' + product.title + '</marquee></h5>' +
                '    <p class="card-text">' + product.description + '</p>' +
                '    <a href="#_" class="btn btn-block btn-primary mt-auto">Buy now for $' + product.price + '</a>' +
                '  </div>' +
                '</div></div>';

            return h;
        },
        showCategories: function () {
            categories.forEach(function (element) {
                $('.category-list ul').append('<li><a href="#_" data-cid="' + element.id + '">' + element.name + '</a></></li>');
            })
        },
        changeCategory: function (category) {
            if (category == this.currentCategoryId || category == null)
                category = 0;
            this.clearProducts();
            this.showProducts(category);
            this.currentCategoryId = category;
        },
        clearProducts: function () {
            $('.product-list').html('');
        },
        bold: function (category) {
            for (let item of document.querySelectorAll(".category-list ul li a")) {
                if ((category == null && item.getAttribute('data-cid') == 0) || category == item.getAttribute('data-cid'))
                    item.style.fontWeight = 'bold';
                else
                    item.style.fontWeight = 'initial';

                console.log(item);
            }
            ele.style.fontWeight = 'bold';
        }


    };

    //Page initialization and menu handlers
    function setupMenuHandlers() {
        pageHelper.clearPage('home');
        pageHelper.mainPage('home');
        pageHelper.changePage('home', 1);
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
                pageHelper.storePage('store');
                pageHelper.changePage('store');
            });
        document
            .getElementById('store2')
            .addEventListener('click', function () {
                pageHelper.clearPage('store');
                pageHelper.storePage('store');
                pageHelper.changePage('store');
            });
        document
            .getElementById('contact1')
            .addEventListener('click', function () {
                pageHelper.clearPage('contact');
                pageHelper.contactPage('contact');
                pageHelper.changePage('contact');
            });
        document
            .getElementById('contact2')
            .addEventListener('click', function () {
                pageHelper.clearPage('contact');
                pageHelper.contactPage('contact');
                pageHelper.changePage('contact');
            });
        document
            .getElementById('about1')
            .addEventListener('click', function () {
                pageHelper.clearPage('about');
                pageHelper.aboutPage('about')
                pageHelper.changePage('about');
            });
        document
            .getElementById('about2')
            .addEventListener('click', function () {
                pageHelper.clearPage('about');
                pageHelper.aboutPage('about')
                pageHelper.changePage('about');
            });
    }
    window.onload = setupMenuHandlers;
})();
