!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){e.exports=n.p+"img/avatar.jpg"},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.date=new Date}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"render",value:function(){var e="".concat(this.date.getDate(),"-").concat(this.date.getMonth()+1,"-").concat(this.date.getFullYear()),t=document.createElement("p");return t.classList.add("date"),t.innerText=e,t}}]),e}(),o=(n(3),n(0)),i=n.n(o);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t}return function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(e,[{key:"showDate",value:function(){var e=new a;this.parentNode.appendChild(e.render())}},{key:"render",value:function(){var e=document.createElement("div");e.classList.add("component");var t=document.createElement("div");t.classList.add("developer"),t.classList.add("clearfix"),e.appendChild(t);var n=document.createElement("img");n.classList.add("avatar"),n.src=i.a,t.appendChild(n);var r=document.createElement("p");return r.innerText=this.name,r.classList.add("name"),r.addEventListener("click",this.showDate),t.appendChild(r),e}}]),e}())("Старостин Евгений Валерьевич");document.getElementById("app").appendChild(u.render())}]);