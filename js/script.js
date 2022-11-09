"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
}

if (isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc')
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const burgerMenu = document.querySelector('.burger__menu');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (burgerIcon.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                burgerIcon.classList.remove('_active');
                burgerMenu.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
const gridSpan = document.querySelector('.grid-span');
if (gridSpan) {
    const gridOwner = document.querySelector('.grid');
    gridSpan.addEventListener("click", function (e) {
        gridOwner.classList.toggle('_active');
        gridSpan.classList.toggle('_active');
    })
}

const burgerIcon = document.querySelector('.burger__icon');
if (burgerIcon) {
    burgerIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerIcon.classList.toggle('_active');
        burgerMenu.classList.toggle('_active');
    })
}