!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function n(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function E(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach(function(e){var t,n;t=o,e=r[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}var L=!0,h=!1,v=!1;function o(){var e=document.querySelector(".loader"),t=document.body.querySelector(".loader-content-container"),n=document.body.querySelectorAll(".icon"),o=document.querySelector(".title"),r=document.querySelector(".description"),c=document.querySelectorAll(".is-loader"),i=document.querySelectorAll(".is-experiment"),u=document.querySelector(".instructions"),l=document.querySelector(".credit-list"),s=document.querySelectorAll(".hide-after-delay"),a=document.querySelector(".start-button"),d=document.querySelector(".experiment-container"),f=E({SHOW_LOADER_FAKE:!0,MIN_LOADING_TIME:0,DELAY_FADEOUT_INFOS:4,NAME_BUILD:"WebGL",ASSETS_PATH:"assets/",SOUND:!0,START_BUTTON:!1,TITLE:"",DESCRIPTION:"",INSTRUCTIONS:"",COLOR:"#FFFFFF",BACKGROUND_COLOR:"#000000",CREDITS:[]},WEBGL_CONFIG),O=f.SOUND||f.START_BUTTON,y=f.INSTRUCTIONS||f.CREDITS.length;console.log("hasInfoButton",y?"has-info-button":"");y="".concat(f.SOUND?"has-sound":""," ").concat(f.START_BUTTON?"has-start-button":""," ").concat(y?"has-info-button":"");document.body.className+=y,t.style.background=f.BACKGROUND_COLOR,document.body.style.background=f.BACKGROUND_COLOR,document.body.style.color=f.COLOR,n.forEach(function(e){var t=e.childNodes;e.style.borderColor=f.COLOR,t.forEach(function(e){var t,n;e.style&&(t=e.getAttribute("fill"),(n=e.getAttribute("stroke"))&&(e.style.stroke=f.COLOR),t&&(e.style.fill=f.COLOR),n||t||(e.style.fill=f.COLOR))})}),o.innerText=f.TITLE,r.innerText=f.DESCRIPTION;var b=function b(){c.forEach(function(e,t){e.classList.add("hide"),e.addEventListener("animationend",function(){e.style.display="none",t===c.length-1&&i.forEach(function(e){e.style.display=e.dataset.display||"block",e.classList.add("show")})})})};d.style.pointerEvents="none";var S=function S(){d.style.pointerEvents="auto",m.start(),b(),window.addEventListener("resize",function(){m.resize(window.innerWidth,window.innerHeight)}),setTimeout(function(){p()},1e3*f.DELAY_FADEOUT_INFOS)},p=function p(){L&&(s.forEach(function(e){e.classList.remove("show"),e.classList.add("hide")}),L=!1)},T=function T(){L||(s.forEach(function(e){e.classList.remove("hide"),e.classList.add("show")}),setTimeout(function(){p()},1e3*f.DELAY_FADEOUT_INFOS),L=!0)};u.innerText=f.INSTRUCTIONS,f.CREDITS.forEach(function(e){var t=document.createElement("div");t.innerHTML=e,l.appendChild(t)});var m=new this[f.NAME_BUILD]["default"]({container:d});m.on("onProgress",function(e){e.percent}),m.on("onLoaded",function(){v=!0,!h&&!O&&f.SHOW_LOADER_FAKE||(e.style.display="none"),O?(a.classList.add("active"),a.onclick=function(){S(),a.onclick=null}):h&&S()}),O||setTimeout(function(){h=!0,v&&S()},1e3*f.MIN_LOADING_TIME),document.querySelector(".info-icon").onclick=T}document.body?o():window.addEventListener("DOMContentLoaded",o)}]);