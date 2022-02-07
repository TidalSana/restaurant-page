import keebBanner from '../img/banner.jpg';
import ramenBanner from '../img/banner2.jpg';
import keyboardPage from './keebs.js';
import ramenPage from './ramen.js';

let createDiv = function(style) {
    const div = document.createElement('div');
    div.classList.add(style);
    return div; 
};
let createImg = function(img, identifier) {
    const image = document.createElement('img');
    image.src = img;
    image.id = identifier;
    return image;
};
let createLeft = function() {
    const keyboardDiv = createDiv('div-first');
    const keebPicture = createImg(keebBanner, 'keyboard-banner');
    keyboardDiv.appendChild(keebPicture);
    keebPicture.addEventListener('click', keyboardPage);
    return keyboardDiv;
}
let createCenter = function() {
    const centerDiv = createDiv('center-div-keeb');
    const textDiv = document.createElement('div');

    // center & text div
    const bannerHead = document.createElement('h2');
    const bannerText = document.createElement('p');

    centerDiv.classList.add('center-div-keeb');
    textDiv.classList.add('text-div-keeb');
    bannerHead.id = 'banner-head';
    bannerHead.innerHTML = `'But why?'`;
    bannerText.innerHTML = "you may ask. <br> <br> Because I love keyboards and ramen that simple...";
    centerDiv.appendChild(textDiv);
    textDiv.appendChild(bannerHead);
    textDiv.appendChild(bannerText);
    return centerDiv;
};
let createRight = function() {
    const ramenDiv = createDiv('div-second');
    const ramenPicture = createImg(ramenBanner, 'ramen-banner');
    ramenDiv.appendChild(ramenPicture);
    ramenPicture.addEventListener('click', ramenPage);
    return ramenDiv;
};

let homePage = function() {
    console.log('clicked home');
    const content = document.getElementById('content');

    // create main content section
    const main = document.getElementById('main-section');
    main.classList.add('main-home');
    main.classList.remove('main-ramen')

    // clear every time it is clicked so
    // it doesn't repeat when clicked again
    main.textContent = '';

    content.appendChild(main);
    // left div
    const leftDiv = createLeft();
    main.appendChild(leftDiv);
    // center div
    const center = createCenter(); 
    main.appendChild(center);
    // right div
    const rightDiv = createRight();
    main.appendChild(rightDiv);
};
export default homePage;