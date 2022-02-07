// imports & assets
import './styles/style.css';
import './styles/reset.css';
import initLoad from './pages/initLoad.js';
import homePage from './pages/home.js';
import ramenPage from './pages/ramen.js';
import keebPage from './pages/keebs.js';

let init = function() {
    initLoad();
    homePage();
    checkButtons();
};

let checkButtons = function() {
    // dom element selectors
    const homeBtn = document.getElementById('home');
    const ramenBtn = document.getElementById('ramen');
    const keyboardBtn = document.getElementById('keyboard');

    const keyboardPicture = document.getElementById('keyboard-banner');
    const ramenPicture = document.getElementById('ramen-banner');

    // event listeners
    homeBtn.addEventListener('click', homePage);
    ramenBtn.addEventListener('click', ramenPage);
    keyboardBtn.addEventListener('click', keebPage);

    keyboardPicture.addEventListener('click', keebPage);
    ramenPicture.addEventListener('click', ramenPage);
};

init(); 



