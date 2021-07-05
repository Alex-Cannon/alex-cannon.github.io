import { laptopWidth } from './constants';

let isNavMenuOpen = false;

const renderNavBar = () => {
    if (window.innerWidth < laptopWidth) {
        document.getElementById('menu-btn').classList.remove('menu-btn--hide');
        document.getElementById('menu-btn').setAttribute('aria-hidden', 'false');
        document.getElementById('menu-items').classList.add('menu-items--closed');
        setNavLinkEventListeners(true);
    } else {
        document.getElementById('menu-btn').classList.add('menu-btn--hide');
        document.getElementById('menu-btn').setAttribute('aria-hidden', 'true');
        document.getElementById('menu-items').classList.remove('menu-items--closed');
        setNavLinkEventListeners(false);
    }
    closeNavMenu();
};

const setNavLinkEventListeners = (addEventListener) => {
    const navLinkCollection = document.getElementsByClassName('top-nav__link');
    for (let i = 0; i < navLinkCollection.length; i++) {
        if (addEventListener) {
            navLinkCollection.item(i).addEventListener('click', toggleNavMenu);
        } else {
            navLinkCollection.item(i).removeEventListener('click', toggleNavMenu);
        }
    }
}

const closeNavMenu = () => {
    document.getElementById('menu-btn').classList.replace('menu-btn--opened', 'menu-btn');
    document.getElementById('menu-items').classList.replace('menu-items--opened', 'menu-items--closed');
    isNavMenuOpen = false;
}

const openNavMenu = () => {
    document.getElementById('menu-btn').classList.replace('menu-btn', 'menu-btn--opened');
    document.getElementById('menu-items').classList.replace('menu-items--closed', 'menu-items--opened');
    isNavMenuOpen = true;
}

const toggleNavMenu = () => {
    if (isNavMenuOpen) {
        closeNavMenu();
    } else {
        openNavMenu();
    }
};

const initialize = () => {
    document.getElementById('menu-btn').addEventListener('click', toggleNavMenu);

    window.onresize = renderNavBar;
    renderNavBar();
};

initialize();