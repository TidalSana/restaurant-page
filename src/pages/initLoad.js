let createHeader = function(id, text) {
    const header = document.createElement('header');
    header.id = id;
    const title = document.createElement('h1');
    title.textContent = text;
    header.appendChild(title);
    
    return header;
};
let createBtn = function(id, inner) {
    //buttons for nav
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.innerText = inner;
    // add styles to buttons
    button.classList.add('button-style');
    
    return button;
};
let createNav = function() {
    const navigation = document.createElement('nav');
    // call button function
    const homeButton = createBtn('home', 'home');
    const ramenButton = createBtn('ramen', 'ramen');
    const keyboardButton = createBtn('keyboard', 'keebs');
    // appending buttons
    navigation.appendChild(homeButton);
    navigation.appendChild(ramenButton);
    navigation.appendChild(keyboardButton);
    
    return navigation;
};
let createMain = function(id) {
    const mainSection = document.createElement('main');
    mainSection.id = id;
    
    return mainSection;
};
let initLoad = function() {
    // DOM elements made in HTML already
    const content = document.getElementById('content');
    // header section to hold nav 
    const header = createHeader('header', 'Keebs X Ramen'); 
    content.appendChild(header);
    // nav buttons
    const nav = createNav();
    content.appendChild(nav);
    // main content
    const main = createMain('main-section');
    content.appendChild(main);
};

export default initLoad;