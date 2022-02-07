(()=>{"use strict";var n={434:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},890:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(505),t.b),l=new URL(t(204),t.b),p=new URL(t(622),t.b),u=i()(a()),m=s()(d),f=s()(l),b=s()(p);u.push([n.id,"/* fonts */\n@font-face {\n    font-family: 'Cantarell-Regular';\n    src: url("+m+");\n}\n@font-face {\n    font-family: 'Libre Franklin';\n    src: url("+f+");\n}\n@font-face {\n    font-family: 'MuktaVaani-Light';\n    src: url("+b+");\n}\n\nbody {\n    background-color: #EEE9E6;\n}\n\n\n/* header & navigation */\n#content {\n    display: flex;\n    flex-direction: column; \n    align-items: center; \n    height: 100vh;\n}\n#header {\n    display: flex;\n    font-family: 'Libre Franklin';\n    font-style: italic;\n    font-size: 2em;\n    justify-content: center;\n    align-items:center;\n    margin-top: 10px;\n    width: 100%;\n    height: 5%;\n}\n.button-style  {\n    font-family: 'MuktaVaani-Light';\n    font-size: 1em;\n    border: none;\n    padding: 0; \n    background: none;\n    margin: 10px;\n    transition: all .2s ease-in-out;\n}\n.button-style:hover {\n    transform: scale(1.1);\n}\n\n\n/* main home */\n.main-home {\n    display: flex;\n    flex-direction: row;\n    gap: 50px;\n    margin: 10px;\n    align-items: center;\n    justify-content: space-evenly;\n}\n.center-div-keeb {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgb(186, 183, 181);\n    padding: 5px;\n    border-radius: 50%;\n    height: 250px;\n    width: 250px;\n}\n.text-div-keeb {\n    font-family: 'Cantarell-Regular';\n    font-style: oblique;\n    padding: 5px;\n    margin: 10px;\n}\n#banner-head {\n    font-family: 'Libre Franklin';\n    font-style: initial;\n    margin: 10px;\n    font-size: 2.3em;\n}\n.div-first, .div-second {\n    box-shadow: -1px 5px 15px 5px rgba(0,0,0,0.26);\n}\n#keyboard-banner, #ramen-banner {\n    display: block;\n    max-height: 500px;\n    max-width: 500px;\n    transition: all .2s ease-in-out;\n}\n.div-first {\n    margin-top: 400px;\n}\n#keyboard-banner {\n}\n#keyboard-banner:hover {\n    transform: scale(1.1);\n    background-position: 0 -30px;\n}\n.div-second {\n}\n#ramen-banner {\n}   \n#ramen-banner:hover {\n    transform: scale(1.1);\n    background-position: 0 -30px;\n}\n\n\n/* main ramen */\n.main-ramen {\n    font-family: 'Cantarell-Regular';\n}\n.ramen-menu {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; \n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n.ramen-item {\n    background-color: #6E6C6A;\n    color: white;\n    box-shadow: -1px 5px 15px 5px rgba(0,0,0,0.26);\n    padding: 8px;\n    margin: 10px;\n}\n.ramen-pics {\n    width: 600px;\n    height: 350px;\n    border-radius: 3px;\n}\n#ramenText {\n    margin: 5px;\n}\n\n/* main keeb */\n.main-keeb {\n    font-family: 'Cantarell-Regular';\n}\n.keyboard-menu {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; \n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n.keyboard-item {\n    display: flex;\n    flex-direction: column;\n    background-color: #6E6C6A;\n    color: white;\n    box-shadow: -1px 5px 15px 5px rgba(0,0,0,0.26);\n    padding: 8px;\n    margin: 10px;\n}\n.keyboard-pics {\n    border-radius: 3px;\n}\n#keebText {\n    margin: 5px;\n}",""]);const h=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},505:(n,e,t)=>{n.exports=t.p+"5b469c70a5057e66d742.ttf"},204:(n,e,t)=>{n.exports=t.p+"dd7a00dd0653ec2dbe2e.ttf"},622:(n,e,t)=>{n.exports=t.p+"86e01431392b060d0303.ttf"},831:(n,e,t)=>{n.exports=t.p+"7839bcf1a453dfe06c10.jpg"},248:(n,e,t)=>{n.exports=t.p+"0dcf316b068a48bf3f95.jpg"},604:(n,e,t)=>{n.exports=t.p+"7c0a530b6755ba2f890e.jpg"},51:(n,e,t)=>{n.exports=t.p+"773cc74a4b529e24bfd5.jpg"},319:(n,e,t)=>{n.exports=t.p+"cf48e908b2e7348631f8.jpg"},253:(n,e,t)=>{n.exports=t.p+"7839bcf1a453dfe06c10.jpg"},247:(n,e,t)=>{n.exports=t.p+"6f346a2a970c9fff970b.jpg"},161:(n,e,t)=>{n.exports=t.p+"4b0ac1cd508f31690de3.jpg"},877:(n,e,t)=>{n.exports=t.p+"7f5f813ba141e75f7e80.jpg"},811:(n,e,t)=>{n.exports=t.p+"251ee4b6ef6132cd4f0f.jpg"},488:(n,e,t)=>{n.exports=t.p+"91720daed36482fadf35.jpg"},463:(n,e,t)=>{n.exports=t.p+"760ef2508a49384163a8.jpg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(890),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var b=t(434),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;let g=function(n,e){const t=document.createElement("button");return t.setAttribute("id",n),t.innerText=e,t.classList.add("button-style"),t};var y=t(831),x=t(248);let v=function(n){const e=document.createElement("div");return e.classList.add(n),e},k=function(n,e){const t=document.createElement("img");return t.src=n,t.id=e,t};const C=function(){console.log("clicked home");const n=document.getElementById("content"),e=document.getElementById("main-section");e.classList.add("main-home"),e.classList.remove("main-ramen"),e.textContent="",n.appendChild(e);const t=function(){const n=v("div-first"),e=k(y,"keyboard-banner");return n.appendChild(e),n}();e.appendChild(t);const r=function(){const n=v("center-div-keeb"),e=document.createElement("div"),t=document.createElement("h2"),r=document.createElement("p");return n.classList.add("center-div-keeb"),e.classList.add("text-div-keeb"),t.id="banner-head",t.innerHTML="'But why?'",r.innerHTML="you may ask. <br> <br> Because I love keyboards and ramen that simple...",n.appendChild(e),e.appendChild(t),e.appendChild(r),n}();e.appendChild(r);const a=function(){const n=v("div-second"),e=k(x,"ramen-banner");return n.appendChild(e),n}();e.appendChild(a)};var E=t(161),w=t(877),L=t(811),T=t(488),j=t(463);let I=function(n){const e=document.createElement("div");return e.classList.add(n),e},R=function(n,e,t){const r=I("ramen-item"),a=function(n,e){const t=document.createElement("img");return t.classList.add("ramen-pics"),t.src=n,t.id=e,t}(n,e),o=document.createElement("p");return o.id="ramenText",o.textContent=t,r.appendChild(a),r.appendChild(o),r};const M=function(){console.log("clicked ramen");const n=document.getElementById("main-section");n.classList.add("main-ramen"),n.classList.remove("main-home"),n.classList.remove("main-keyboard"),n.textContent="";const e=function(){const n=I("ramen-menu"),e=R(E,"dumpling","Shoyu Dumpling Ramen"),t=R(w,"ginger","Shoyu Ginger Ramen"),r=R(L,"spicy-miso","Spicy Miso Ramen"),a=R(T,"tantanmen","Spicy Tanntanmen (Ramen)"),o=R(j,"tonkotsu","Tonkotsu Ramen");return n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(a),n.appendChild(o),n}();n.appendChild(e)};var S=t(319),A=t(51),B=t(247),q=t(604),Z=t(253);let F=function(n){const e=document.createElement("div");return e.classList.add(n),e},P=function(n,e,t){const r=F("keyboard-item"),a=function(n,e){const t=document.createElement("img");return t.classList.add("keyboard-pics"),t.src=n,t.id=e,t}(n,e),o=document.createElement("p");return o.id="keebText",o.textContent=t,r.appendChild(a),r.appendChild(o),r};const U=function(){console.log("clicked keebs");const n=document.getElementById("main-section");n.classList.add("main-keeb"),n.classList.remove("main-home"),n.classList.remove("main-ramen"),n.textContent="";const e=function(){const n=F("keyboard-menu"),e=P(S,"cyberboard","Angry Miao - Cyberboard"),t=P(A,"blade-sixtyfive","KBDFans Blade65"),r=P(B,"tgr-nineten","TGR-910"),a=P(q,"av-three","IV-AV3"),o=P(Z,"kara","Rama Kara");return n.appendChild(e),n.appendChild(t),n.appendChild(r),n.appendChild(a),n.appendChild(o),n}();return n.appendChild(e),n};(function(){const n=document.getElementById("content"),e=function(n,e){const t=document.createElement("header");t.id="header";const r=document.createElement("h1");return r.textContent="Keebs X Ramen",t.appendChild(r),t}();n.appendChild(e);const t=function(){const n=document.createElement("nav"),e=g("home","home"),t=g("ramen","ramen"),r=g("keyboard","keebs");return n.appendChild(e),n.appendChild(t),n.appendChild(r),n}();n.appendChild(t);const r=function(n){const e=document.createElement("main");return e.id="main-section",e}();n.appendChild(r)})(),C(),function(){const n=document.getElementById("home"),e=document.getElementById("ramen"),t=document.getElementById("keyboard");n.addEventListener("click",C),e.addEventListener("click",M),t.addEventListener("click",U)}()})()})();