// imports
import dumpling from '../img/ramen/dumpling.jpg';
import ginger from '../img/ramen/ginger.jpg';
import spicyMiso from '../img/ramen/spicymiso.jpg'
import tantan from '../img/ramen/tantan.jpg';
import tonkotsu from '../img/ramen/tonkotsu.jpg';


// makes divs
let createDiv = function(style) {
    const div = document.createElement('div');
    div.classList.add(style);
    
    return div;
};
// makes imgs for each ramen
let createRamen = function(img, identifier) { 
    const ramen = document.createElement('img');
    ramen.classList.add('ramen-pics');
    ramen.src = img; 
    ramen.id = identifier;

    return ramen;
};
// makes a div for each ramen to sit in
let ramenDiv = function(img, identifier, text) {
    const ramenContainer = createDiv('ramen-item');
    const bowls = createRamen(img, identifier);
    const paragraph = document.createElement('p');
    paragraph.id = 'ramenText';
    paragraph.textContent = text;
    
    ramenContainer.appendChild(bowls);
    ramenContainer.appendChild(paragraph)

    return ramenContainer;
};
// entire ramen menu in one div
let createMenu = function() {
    const menu = createDiv('ramen-menu');
    
    const dumplingRamen = ramenDiv(dumpling, 'dumpling', 'Shoyu Dumpling Ramen');
    const gingerRamen = ramenDiv(ginger, 'ginger', 'Shoyu Ginger Ramen');
    const spicyRamen = ramenDiv(spicyMiso, 'spicy-miso', 'Spicy Miso Ramen');
    const tantanmen = ramenDiv(tantan, 'tantanmen', 'Spicy Tanntanmen (Ramen)');
    const tonkotsuRamen = ramenDiv(tonkotsu, 'tonkotsu', 'Tonkotsu Ramen');

    menu.appendChild(dumplingRamen);
    menu.appendChild(gingerRamen);
    menu.appendChild(spicyRamen);
    menu.appendChild(tantanmen);
    menu.appendChild(tonkotsuRamen);
    
    return menu; 
};
let loadRamen = function() {
    console.log('clicked ramen');
    const main = document.getElementById('main-section');
    main.classList.add('main-ramen');
    main.classList.remove('main-home');
    main.classList.remove('main-keyboard');
    main.textContent = '';

    // append ramen div to main section
    const menuDiv = createMenu();
    main.appendChild(menuDiv);
};

export default loadRamen;