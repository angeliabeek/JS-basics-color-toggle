// Variables and Arrays
const getBody = document.body;
const getText = document.querySelector('h1');
const getNavList = document.querySelector('.dropdown-nav__list');
const getNavListItems = document.querySelectorAll('.dropdown-nav__list li');
Array.from(getNavListItems);
const getRadiobtn = document.querySelectorAll('input[type=radio]');
Array.from(getRadiobtn);
getRadiobtn.checked = false;
let toggleNavStatus = false;

// Hamburger Menu Onclick
const toggleNav = function () {
    if (toggleNavStatus === false) {
        getNavList.style.visibility = "visible";
        getNavList.style.left = "0";

        getNavListItems.forEach(function (item) {
            item.style.opacity = "1";
        });

        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getNavList.style.visibility = "hidden";
        getNavList.style.left = "-300";

        getNavListItems.forEach(function (item) {
            item.style.opacity = "0";
        });

        toggleNavStatus = false;
    }
};

// Hamburger Menu Onmouseover
const mOver = function () {
    getNavList.style.visibility = "visible";
    getNavList.style.left = "0";

    getNavListItems.forEach(function (item) {
        item.style.opacity = "1";
    });
};
const mOut = function () {
    getNavList.style.visibility = "hidden";
    getNavList.style.left = "-300";

    getNavListItems.forEach(function (item) {
        item.style.opacity = "0";
    });
};

// Color Toggle Functions
const colorGrey = function () {
    getBody.classList.add('grey');
    getBody.classList.remove('orange', 'red', 'purple', 'green');
    getText.innerHTML = "Grey";
    getRadiobtn[0].checked = true;
};
const colorOrange = function () {
    getBody.classList.add('orange');
    getBody.classList.remove('grey', 'red', 'purple', 'green');
    getText.innerHTML = "Orange";
    getRadiobtn[1].checked = true;
};
const colorRed = function () {
    getBody.classList.add('red');
    getBody.classList.remove('grey', 'orange', 'purple', 'green');
    getText.innerHTML = "Red";
    getRadiobtn[2].checked = true;
};
const colorPurple = function () {
    getBody.classList.add('purple');
    getBody.classList.remove('grey', 'orange', 'red', 'green');
    getText.innerHTML = "Purple";
    getRadiobtn[3].checked = true;
};
const colorGreen = function () {
    getBody.classList.add('green');
    getBody.classList.remove('grey', 'orange', 'red', 'purple');
    getText.innerHTML = "Green";
    getRadiobtn[4].checked = true;
};

// Color Toggle Onclick
getNavListItems[0].addEventListener('click', function () {
    colorGrey();
    toggleNav();
});
getNavListItems[1].addEventListener('click', function () {
    colorOrange();
    toggleNav();
});
getNavListItems[2].addEventListener('click', function () {
    colorRed();
    toggleNav();
});
getNavListItems[3].addEventListener('click', function () {
    colorPurple();
    toggleNav();
});
getNavListItems[4].addEventListener('click', function () {
    colorGreen();
    toggleNav();
});

// Color Toggle Keyboard
const colorToggle = function (event) {
    let x = event.key;
    if (x == 1) {
        colorGrey();
    }
    else if (x == 2) {
        colorOrange();
    }
    else if (x == 3) {
        colorRed();
    }
    else if (x == 4) {
        colorPurple();
    }
    else if (x == 5) {
        colorGreen();
    }
};
