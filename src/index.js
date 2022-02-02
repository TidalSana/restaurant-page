// imports & assets
import './style.css';
import './reset.css'
import keebBanner from './img/banner.jpg';
import ramenBanner from './img/banner2.jpg';

// DOM elements made in HTML already
const content = document.getElementById('content');


// header element
const header = document.createElement('header');
const title = document.createElement('h1');
const name = document.createTextNode('Keebs X Ramen');
const navigation = document.createElement('nav');

//buttons
const homeButton = document.createElement('button');
const ramenButton = document.createElement('button');
const keyboardButton = document.createElement('button');
homeButton.innerText = 'home';
ramenButton.innerText = 'ramen';
keyboardButton.innerText = 'keebs';
homeButton.classList.add('button-style');
ramenButton.classList.add('button-style');
keyboardButton.classList.add('button-style');

navigation.appendChild(homeButton);
navigation.appendChild(ramenButton);
navigation.appendChild(keyboardButton);
title.id = 'title';
title.appendChild(name);
header.id = "header";
header.appendChild(title);

// main content
const main = document.createElement('main');
main.classList.add('main');

// center / text div
const bannerHead = document.createElement('h2');
const bannerText = document.createElement('p');
const centerDiv = document.createElement('div');
const textDiv = document.createElement('div');
centerDiv.classList.add('center-div-keeb');
textDiv.classList.add('text-div-keeb');
bannerHead.id = 'banner-head';
bannerHead.innerHTML = `'But why?'`
bannerText.innerHTML = "you may ask. <br> Because I love keyboards and ramen that simple...";
centerDiv.appendChild(textDiv);
textDiv.appendChild(bannerHead);
textDiv.appendChild(bannerText);

// left div inside of main
const keebContainer = document.createElement('div');
keebContainer.classList.add('div-first');
// here we create an html tag in JS
const keyboard = document.createElement('img');
// then we add a the source or path referenced
// in the import variable 'keebBanner'
keyboard.src = keebBanner;
keyboard.id = "keyboard-banner";
keebContainer.appendChild(keyboard);

// right div inside of main 
const ramenContainer = document.createElement('div');
ramenContainer.classList.add('div-second');
const ramen = document.createElement('img');
ramen.src = ramenBanner;
ramen.id = "ramen-banner";

ramenContainer.appendChild(ramen);


// adding the divs to the parents
content.appendChild(header);
content.appendChild(navigation);
content.appendChild(main);
main.appendChild(keebContainer);
main.appendChild(centerDiv);
main.appendChild(ramenContainer);




