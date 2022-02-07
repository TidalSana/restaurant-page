(()=>{"use strict";var n={434:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},890:(n,e,t)=>{t.d(e,{Z:()=>h});var a=t(81),r=t.n(a),o=t(645),i=t.n(o),c=t(667),d=t.n(c),s=new URL(t(505),t.b),l=new URL(t(204),t.b),p=new URL(t(622),t.b),m=i()(r()),u=d()(s),f=d()(l),b=d()(p);m.push([n.id,"/* fonts */\n@font-face {\n    font-family: 'Cantarell-Regular';\n    src: url("+u+");\n}\n@font-face {\n    font-family: 'Libre Franklin';\n    src: url("+f+");\n}\n@font-face {\n    font-family: 'MuktaVaani-Light';\n    src: url("+b+");\n}\n\nbody {\n    background-color: #EEE9E6;\n}\n\n\n/* header & navigation */\n#content {\n    display: flex;\n    flex-direction: column; \n    align-items: center; \n    height: 100vh;\n}\n#header {\n    display: flex;\n    font-family: 'Libre Franklin';\n    font-style: italic;\n    font-size: 2em;\n    justify-content: center;\n    align-items:center;\n    margin-top: 10px;\n    width: 100%;\n    height: 5%;\n}\n.button-style  {\n    font-family: 'MuktaVaani-Light';\n    font-size: 1em;\n    border: none;\n    padding: 0; \n    background: none;\n    margin: 10px;\n    transition: all .2s ease-in-out;\n}\n.button-style:hover {\n    transform: scale(1.1);\n}\n\n\n/* main home */\n.main-home {\n    display: flex;\n    flex-direction: row;\n    gap: 50px;\n    margin: 10px;\n    align-items: center;\n    justify-content: space-evenly;\n}\n.center-div-keeb {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgb(186, 183, 181);\n    padding: 5px;\n    border-radius: 50%;\n    height: 250px;\n    width: 250px;\n}\n.text-div-keeb {\n    font-family: 'Cantarell-Regular';\n    font-style: oblique;\n    padding: 5px;\n    margin: 10px;\n}\n#banner-head {\n    font-family: 'Libre Franklin';\n    font-style: initial;\n    margin: 10px;\n    font-size: 2.3em;\n}\n.div-first, .div-second {\n    box-shadow: -1px 5px 15px 5px rgba(0,0,0,0.26);\n}\n#keyboard-banner, #ramen-banner {\n    display: block;\n    max-height: 500px;\n    max-width: 500px;\n    transition: all .2s ease-in-out;\n}\n.div-first {\n    margin-top: 400px;\n}\n#keyboard-banner {\n}\n#keyboard-banner:hover {\n    transform: scale(1.1);\n    background-position: 0 -30px;\n}\n.div-second {\n}\n#ramen-banner {\n}   \n#ramen-banner:hover {\n    transform: scale(1.1);\n    background-position: 0 -30px;\n}\n\n\n/* main ramen */\n.main-ramen {\n    font-family: 'Cantarell-Regular';\n}\n.ramen-menu {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; \n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n.ramen-item {\n    background-color: #6E6C6A;\n    color: white;\n    box-shadow: -1px 5px 15px 5px rgba(0,0,0,0.26);\n    padding: 8px;\n    margin: 10px;\n}\n.ramen-pics {\n    width: 600px;\n    height: 350px;\n    border-radius: 3px;\n}\n#ramenText {\n    margin: 5px;\n}\n\n/* main keeb */\n.main-keeb {\n    font-family: 'Cantarell-Regular';\n}\n.keyboard-menu {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; \n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n.keyboard-item {\n    display: flex;\n    flex-direction: column;\n    background-color: #6E6C6A;\n    color: white;\n    box-shadow: -1px 5px 15px 5px rgba(0,0,0,0.26);\n    padding: 8px;\n    margin: 10px;\n}\n.keyboard-pics {\n    border-radius: 3px;\n}\n#keebText {\n    margin: 5px;\n}\n\n/* media queries */\n@media only screen and (max-width: 1000px ) {\n    .main-home {\n        -webkit-transform: scale(0.7);\n        -moz-transform: scale(0.7);\n        -ms-transform: scale(0.7);\n        transform: scale(0.7);\n    }\n}\n@media only screen and (max-width: 800px) {\n    body {\n        overflow: hidden;\n    }\n    .main-home {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 30px;\n    }\n    .div-first {\n        margin-top: 10px;\n    }\n}\n@media only screen and (max-width: 650px) {\n    .main-home {\n        display: flex;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap; \n        justify-content: center;\n        align-items: center;\n        gap: 30px;\n    }\n}",""]);const h=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],c=0;c<n.length;c++){var d=n[c],s=a.base?d[0]+a.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var d=a(n,r),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},505:(n,e,t)=>{n.exports=t.p+"5b469c70a5057e66d742.ttf"},204:(n,e,t)=>{n.exports=t.p+"dd7a00dd0653ec2dbe2e.ttf"},622:(n,e,t)=>{n.exports=t.p+"86e01431392b060d0303.ttf"},831:(n,e,t)=>{n.exports=t.p+"7839bcf1a453dfe06c10.jpg"},248:(n,e,t)=>{n.exports=t.p+"0dcf316b068a48bf3f95.jpg"},604:(n,e,t)=>{n.exports=t.p+"7c0a530b6755ba2f890e.jpg"},51:(n,e,t)=>{n.exports=t.p+"773cc74a4b529e24bfd5.jpg"},319:(n,e,t)=>{n.exports=t.p+"cf48e908b2e7348631f8.jpg"},253:(n,e,t)=>{n.exports=t.p+"7839bcf1a453dfe06c10.jpg"},247:(n,e,t)=>{n.exports=t.p+"6f346a2a970c9fff970b.jpg"},161:(n,e,t)=>{n.exports=t.p+"4b0ac1cd508f31690de3.jpg"},877:(n,e,t)=>{n.exports=t.p+"7f5f813ba141e75f7e80.jpg"},811:(n,e,t)=>{n.exports=t.p+"251ee4b6ef6132cd4f0f.jpg"},488:(n,e,t)=>{n.exports=t.p+"91720daed36482fadf35.jpg"},463:(n,e,t)=>{n.exports=t.p+"760ef2508a49384163a8.jpg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),m=t.n(p),u=t(890),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var b=t(434),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;let g=function(n,e){const t=document.createElement("button");return t.setAttribute("id",n),t.innerText=e,t.classList.add("button-style"),t};var y=t(831),x=t(248),v=t(319),k=t(51),C=t(247),E=t(604),w=t(253);let L=function(n){const e=document.createElement("div");return e.classList.add(n),e},j=function(n,e,t){const a=L("keyboard-item"),r=function(n,e){const t=document.createElement("img");return t.classList.add("keyboard-pics"),t.src=n,t.id=e,t}(n,e),o=document.createElement("p");return o.id="keebText",o.textContent=t,a.appendChild(r),a.appendChild(o),a};const T=function(){console.log("clicked keebs");const n=document.getElementById("main-section");n.classList.add("main-keeb"),n.classList.remove("main-home"),n.classList.remove("main-ramen"),n.textContent="";const e=function(){const n=L("keyboard-menu"),e=j(v,"cyberboard","Angry Miao - Cyberboard"),t=j(k,"blade-sixtyfive","KBDFans Blade65"),a=j(C,"tgr-nineten","TGR-910"),r=j(E,"av-three","IV-AV3"),o=j(w,"kara","Rama Kara");return n.appendChild(e),n.appendChild(t),n.appendChild(a),n.appendChild(r),n.appendChild(o),n}();return n.appendChild(e),n};var I=t(161),R=t(877),M=t(811),S=t(488),B=t(463);let A=function(n){const e=document.createElement("div");return e.classList.add(n),e},q=function(n,e,t){const a=A("ramen-item"),r=function(n,e){const t=document.createElement("img");return t.classList.add("ramen-pics"),t.src=n,t.id=e,t}(n,e),o=document.createElement("p");return o.id="ramenText",o.textContent=t,a.appendChild(r),a.appendChild(o),a};const Z=function(){console.log("clicked ramen");const n=document.getElementById("main-section");n.classList.add("main-ramen"),n.classList.remove("main-home"),n.classList.remove("main-keyboard"),n.textContent="";const e=function(){const n=A("ramen-menu"),e=q(I,"dumpling","Shoyu Dumpling Ramen"),t=q(R,"ginger","Shoyu Ginger Ramen"),a=q(M,"spicy-miso","Spicy Miso Ramen"),r=q(S,"tantanmen","Spicy Tantanmen (Ramen)"),o=q(B,"tonkotsu","Tonkotsu Ramen");return n.appendChild(e),n.appendChild(t),n.appendChild(a),n.appendChild(r),n.appendChild(o),n}();n.appendChild(e)};let F=function(n){const e=document.createElement("div");return e.classList.add(n),e},P=function(n,e){const t=document.createElement("img");return t.src=n,t.id=e,t};const U=function(){console.log("clicked home");const n=document.getElementById("content"),e=document.getElementById("main-section");e.classList.add("main-home"),e.classList.remove("main-ramen"),e.textContent="",n.appendChild(e);const t=function(){const n=F("div-first"),e=P(y,"keyboard-banner");return n.appendChild(e),e.addEventListener("click",T),n}();e.appendChild(t);const a=function(){const n=F("center-div-keeb"),e=document.createElement("div"),t=document.createElement("h2"),a=document.createElement("p");return n.classList.add("center-div-keeb"),e.classList.add("text-div-keeb"),t.id="banner-head",t.innerHTML="'Why?'",a.innerHTML="you may ask. <br> <br> Because I like keyboards and ramen.",n.appendChild(e),e.appendChild(t),e.appendChild(a),n}();e.appendChild(a);const r=function(){const n=F("div-second"),e=P(x,"ramen-banner");return n.appendChild(e),e.addEventListener("click",Z),n}();e.appendChild(r)};(function(){const n=document.getElementById("content"),e=function(n,e){const t=document.createElement("header");t.id="header";const a=document.createElement("h1");return a.textContent="Keebs X Ramen",t.appendChild(a),t}();n.appendChild(e);const t=function(){const n=document.createElement("nav"),e=g("home","home"),t=g("ramen","ramen"),a=g("keyboard","keebs");return n.appendChild(e),n.appendChild(t),n.appendChild(a),n}();n.appendChild(t);const a=function(n){const e=document.createElement("main");return e.id="main-section",e}();n.appendChild(a)})(),U(),function(){const n=document.getElementById("home"),e=document.getElementById("ramen"),t=document.getElementById("keyboard"),a=document.getElementById("keyboard-banner"),r=document.getElementById("ramen-banner");n.addEventListener("click",U),e.addEventListener("click",Z),t.addEventListener("click",T),a.addEventListener("click",T),r.addEventListener("click",Z)}()})()})();