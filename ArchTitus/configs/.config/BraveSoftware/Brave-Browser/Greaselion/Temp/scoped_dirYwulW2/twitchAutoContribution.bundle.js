!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}({0:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return f}));const r=(e,t)=>e&&t?`${e}_${t}`:"",o=(e,t)=>`${e}#channel:${t}`,i=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const o=r+t.length,i=e.indexOf(n,o);let a="";return i!==o?a=-1!==i&&i>o||-1!==i?e.substring(o,i):e.substring(o):""===n&&(a=e.substring(o)),a},a=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const o=n[r];if(e[o]!==t[o])return!1}return!0},u=()=>"complete"===document.readyState&&"visible"===document.visibilityState,c=(e,t)=>`${e}: ${t.statusText} (${t.status})`,s={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},d=/&(?:amp|lt|gt|quot|#(0+)?39);/g,l=RegExp(d.source),f=e=>e&&l.test(e)?e.replace(d,e=>s[e]||"'"):e||""},1:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a}));let r=null;const o=()=>r,i=e=>{r?e(!0):(chrome.runtime.sendMessage("mnojpmjdmbbfmejpflffifhffcmidifd",{type:"SupportsGreaselion"},(function(t){if(!chrome.runtime.lastError&&t&&t.supported)return r=chrome.runtime.connect("mnojpmjdmbbfmejpflffifhffcmidifd",{name:"Greaselion"}),void e(!0)})),setTimeout(()=>{if(!r)return r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),void e(!0)},100))},a=(e,t)=>{e&&r&&r.postMessage({type:"GreaselionError",mediaType:e,data:{errorMessage:t}})}},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1),o=n(0);const i=(e,t,n,i)=>{if(!e||!t)return;const a=Object(r.b)();a&&a.postMessage({type:"MediaDurationMetadata",mediaType:e,data:{mediaKey:o.b(e,t),duration:n,firstVisit:i}})}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(6);const o=()=>{const e=document.querySelector(".channel-info-content .tw-avatar [src]");return e&&e.getAttribute("src")||""},i=()=>document.querySelector("h1.tw-title"),a=()=>{const e=i();return e&&e.textContent||""},u=e=>e.replace(/^\/|\/[\s\S]*/g,""),c=new Set(["directory","downloads","jobs","p","search","turbo"]),s=()=>"videos"===u(location.pathname).toLowerCase(),d=e=>{if(!e)return"";const t=/^\/*videos\//i;if(t.test(location.pathname)){const n=location.pathname.replace(t,""),o=u(n);return o?`${r.b}_${e}_void_${o}`:""}return`${r.b}_${e}`},l=e=>e?`${r.b}#author:${e}`:"",f=()=>({mediaId:"",mediaKey:"",publisherUrl:"https://"+r.a,publisherKey:r.a,publisherName:r.a,favIconUrl:""}),m=()=>{const e=(()=>{if(s()){const e=i();if(!e||!e.parentElement)return"";const t=e.parentElement.getAttribute("href");return t?u(t).toLowerCase():""}const e=u(location.pathname).toLowerCase();return c.has(e)?"":e})();return e?{mediaId:e,mediaKey:d(e),publisherUrl:`https://${r.a}/${e}`,publisherKey:l(e),publisherName:a(),favIconUrl:o()}:f()};class p{constructor(){this.previous=f()}async read(){let e=m();if(!e.mediaId&&!s())return this.previous=e,e;let{previous:t}=this;const n=()=>e.mediaId&&e.publisherName&&e.favIconUrl&&(e.mediaId&&t.mediaId===e.mediaId||e.publisherName!==t.publisherName&&e.favIconUrl!==t.favIconUrl);for(let t=0;t<5e3&&!n();t+=250)await new Promise(e=>setTimeout(e,250)),e=m();return this.previous=e,e}}},25:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(20),i=n(11),a=n(3),u=n(6);let c=0,s="";const d=new o.a,l=new Set,f=()=>{c=Date.now()},m=e=>{e&&(e.url||"complete"===e.status)&&location.href!==s&&(s=location.href,f())};chrome.extension.inIncognitoContext||(Object(r.a)(e=>{e?(document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?f():d.read().then(e=>{const t=!l.has(e.mediaKey);t&&l.add(e.mediaKey);const n=e.mediaKey.replace(u.b+"_",""),r=Math.round((Date.now()-c)/1e3);i.a(u.b,n,r,t)}).catch(e=>{throw new Error("Failed to retrieve publisher data: "+e)})})),"visible"===document.visibilityState&&f(),a.a(u.b,m)):console.error("Failed to initialize communications port")}),console.info("Greaselion script loaded: twitchAutoContribution.ts"))},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1);let o=!1;const i=(e,t)=>{if(!e||o)return;o=!0;const n=Object(r.b)();n&&(n.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),n.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnUpdatedTab":t(e.data.changeInfo)}})))}},6:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));const r="twitch",o="www.twitch.tv"}});