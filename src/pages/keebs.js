// imports 
import cyber from '../img/keyboard/cyberboard.jpg';
import blade from '../img/keyboard/blade.jpg'; 
import tgr from '../img/keyboard/tgr910.jpg'; 
import avThree from '../img/keyboard/Av3.jpg'; 
import kara from '../img/keyboard/kara.jpg'; 

let createDiv = function(style) {
    const div = document.createElement('div')
    div.classList.add(style);
    
    return div;
};
let createBoards = function(img, identifier) {
    const keyboard = document.createElement('img');
    keyboard.classList.add('keyboard-pics');
    keyboard.src = img;
    keyboard.id = identifier;

    return keyboard;
};
let keyboardDiv = function(img, identifier, text) {
    const keyboardContainer = createDiv('keyboard-item');
    const keebs = createBoards(img, identifier);
    const paragraph = document.createElement('p');
    paragraph.id = 'keebText';
    paragraph.textContent = text;

    keyboardContainer.appendChild(keebs);
    keyboardContainer.appendChild(paragraph);
    
    return keyboardContainer;
};
let createMenu = function() {
    const menu = createDiv('keyboard-menu');

    const cyberBoard = keyboardDiv(cyber, 'cyberboard', 'Angry Miao - Cyberboard');
    const bladeBoard = keyboardDiv(blade, 'blade-sixtyfive', 'KBDFans Blade65');
    const tgrBoard = keyboardDiv(tgr, 'tgr-nineten', 'TGR-910');
    const avBoard = keyboardDiv(avThree, 'av-three', 'IV-AV3');
    const karaBoard = keyboardDiv(kara, 'kara', 'Rama Kara');

    menu.appendChild(cyberBoard);
    menu.appendChild(bladeBoard);
    menu.appendChild(tgrBoard);
    menu.appendChild(avBoard);
    menu.appendChild(karaBoard);

    return menu;
};
let loadKeebs = function() {
    console.log('clicked keebs');
    const main = document.getElementById('main-section');
    main.classList.add('main-keeb');
    main.classList.remove('main-home');
    main.classList.remove('main-ramen');
    main.textContent = '';

    // append ramen div to main section
    const menuDiv = createMenu();
    main.appendChild(menuDiv);

    return main;
};

export default loadKeebs;