function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequirea886;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequirea886=r),r.register("iO2dB",(function(n,o){t(n.exports,"BlocklistConnectRequest",(function(){return O}),(function(e){return O=e})),t(n.exports,"BlocklistOrigin",(function(){return z}),(function(e){return z=e}));var i=r("aZikt"),l=r("hHMPk"),a=r("7Qmuu"),s=r("cFuyE"),c=r("9AO5f"),u=r("lSpdH"),f=r("aADTv"),d=r("g7X40"),p=r("hJDxl"),h=r("6oEu9"),g=r("9OxTN"),m=r("lwple"),y=r("czDD7"),b=r("bJYWD"),w=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function l(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}s((o=o.apply(e,t||[])).next())}))};const x="#eb3742",v=l.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,k=l.default.div`
  border: 1px solid ${x};
  border-radius: 8px;
  padding: 10px 10px;
  margin-bottom: 10px;
`,O=({tabId:t,origin:n,confirmApproval:o,denyApproval:r})=>{const{t:l}=a.useTranslation();return e(i).createElement(b.Container,null,e(i).createElement(c.AccountHeader,{lastChild:e(i).createElement("div",null),walletMenuShowOnlyAccounts:!0}),e(i).createElement(b.Body,null,e(i).createElement(b.TopGroup,null,e(i).createElement(u.TabIconHeader,{tabId:t,secondaryText:s.removeWebPrefixes(n),showWarning:!0})),e(i).createElement(v,null,e(i).createElement(k,null,e(i).createElement(d.Text,{size:14,color:x},l("blocklistConnectionDisabled"))),e(i).createElement(d.Text,{size:14,color:"#777777",hoverColor:x,onClick:()=>o(n)},l("blocklistConnectionIgnoreWarning")))),e(i).createElement(b.Footer,{plain:!0},e(i).createElement(f.Button,{onClick:()=>r(n)},l("blocklistConnectionActionButtonClose"))))},C=l.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fae5e6;
`,E=l.default.div`
  position: absolute;
  width: 760px;
  height: 603px;
  left: calc(50% - 760px / 2 + 0.5px);
  top: calc(50% - 603px / 2);
  border: 2px solid ${x};
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`,T=l.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`,S=l.default.a`
  text-decoration: underline;
  color: ${x};
`,z=({origin:t})=>{const{t:n}=a.useTranslation(),o=t?g.removeSubdomainFromDomain(t):"";return e(i).createElement(C,null,e(i).createElement(E,null,e(i).createElement(T,null,e(i).createElement(p.LogoPhishingDetected,null)),e(i).createElement(d.Text,{size:30,color:x,weight:"600"},n("blocklistOriginDomainIsBlocked",{domainName:o||n("blocklistOriginThisDomain")})),e(i).createElement(d.Text,{color:x},n("blocklistOriginSiteIsMalicious")),e(i).createElement(d.Text,{color:x},e(i).createElement(a.Trans,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",e(i).createElement(S,{href:h.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",e(i).createElement(S,{href:h.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"please file an issue"),".")),o?e(i).createElement(d.Text,{color:x,onClick:()=>w(void 0,void 0,void 0,(function*(){const e=yield y.getStorageValue(m.StorageKeys.UserWhitelistedOrigins);let n=JSON.parse(`${e}`);n?n.push(o):n=[o],n=[...new Set(n)],y.setStorageValue(m.StorageKeys.UserWhitelistedOrigins,JSON.stringify(n)),window.location.href=t})),hoverUnderline:!0},n("blocklistOriginIgnoreWarning",{domainName:o})):e(i).createElement(e(i).Fragment,null)))}})),r.register("9OxTN",(function(n,o){t(n.exports,"removeSubdomainFromDomain",(function(){return p}),(function(e){return p=e})),t(n.exports,"detectPhishing",(function(){return w}),(function(e){return w=e}));var i=r("i0J7O"),l=r("6oEu9"),a=r("hlqH8"),s=r("1XmKR"),c=r("czDD7"),u=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function l(e){try{s(o.next(e))}catch(e){r(e)}}function a(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}s((o=o.apply(e,t||[])).next())}))};const f=6e5;class d{check(t){const n=p(t),o=g(n);if(b(o,this.whitelist))return{type:"whitelist",result:!1,source:n};if(b(o,this.blocklist))return{type:"blocklist",result:!0,source:n};if(this.tolerance>0){let t=y(o);t=t.replace("www.","");const r=this.fuzzylist.find((n=>{const o=y(n);return e(i).get(t,o)<=this.tolerance}));if(r){return{type:"fuzzy",result:!0,match:m(r),source:n}}}return{type:"all",result:!1,source:n}}constructor(e,t,n,o){this.blocklist=h(e),this.whitelist=h(t),this.fuzzylist=h(n),this.tolerance=o||3}}const p=e=>{const t=new URL(e).hostname.split(".");return t.slice(0).slice(-(4===t.length?3:2)).join(".")},h=e=>e.map(g),g=e=>e.split(".").reverse(),m=e=>e.slice().reverse().join("."),y=e=>e.slice(1).reverse().join("."),b=(e,t)=>t.some((t=>!(t.length>e.length)&&t.every(((t,n)=>e[n]===t)))),w=e=>u(void 0,void 0,void 0,(function*(){const t=a.getBlocklist(),n=yield c.getStorageValue(s.StorageKeys.CachedBlocklistDiff),o=JSON.parse(`${n}`);if(o&&o.expiresAt&&o.expiresAt>Date.now()){return new d(t.blocklist.concat(o.blocklist),t.whitelist.concat(o.whitelist),t.fuzzylist.concat(o.fuzzylist)).check(e)}{const n=new Headers,i=a.getVersion();o&&n.append("lastContentHash",`${o.contentHash}`),i&&n.append("localBlocklistVersion",`${i}`);const r=yield fetch(l.PHANTOM_BLOCKLIST_URL,{headers:n});if(200===r.status){const n=yield r.json();n.expiresAt=Date.now()+f,c.setStorageValue(s.StorageKeys.CachedBlocklistDiff,JSON.stringify(n));return new d(t.blocklist.concat(n.blocklist),t.whitelist.concat(n.whitelist),t.fuzzylist.concat(n.fuzzylist)).check(e)}if(304===r.status){o.expiresAt=Date.now()+f,c.setStorageValue(s.StorageKeys.CachedBlocklistDiff,JSON.stringify(o));return new d(t.blocklist.concat(o.blocklist),t.whitelist.concat(o.whitelist),t.fuzzylist.concat(o.fuzzylist)).check(e)}return{result:!1,type:"error"}}}))})),r.register("i0J7O",(function(e,t){!function(){var n;try{n="undefined"!=typeof Intl&&void 0!==Intl.Collator?Intl.Collator("generic",{sensitivity:"base"}):null}catch(e){console.log("Collator could not be initialized and wouldn't be used")}var o=[],i=[],r={get:function(e,t,r){var l,a,s,c,u,f,d=r&&n&&r.useCollator,p=e.length,h=t.length;if(0===p)return h;if(0===h)return p;for(s=0;s<h;++s)o[s]=s,i[s]=t.charCodeAt(s);if(o[h]=h,d)for(s=0;s<p;++s){for(a=s+1,c=0;c<h;++c)l=a,f=0===n.compare(e.charAt(s),String.fromCharCode(i[c])),(a=o[c]+(f?0:1))>(u=l+1)&&(a=u),a>(u=o[c+1]+1)&&(a=u),o[c]=l;o[c]=a}else for(s=0;s<p;++s){for(a=s+1,c=0;c<h;++c)l=a,f=e.charCodeAt(s)===i[c],(a=o[c]+(f?0:1))>(u=l+1)&&(a=u),a>(u=o[c+1]+1)&&(a=u),o[c]=l;o[c]=a}return a}};"undefined"!=typeof define&&null!==define&&define.amd?define((function(){return r})):null!==e&&void 0!==t&&e.exports===t?e.exports=r:"undefined"!=typeof self&&"function"==typeof self.postMessage&&"function"==typeof self.importScripts?self.Levenshtein=r:"undefined"!=typeof window&&null!==window&&(window.Levenshtein=r)}()})),r.register("hlqH8",(function(e,n){var o,i;t(e.exports,"getVersion",(function(){return o}),(function(e){return o=e})),t(e.exports,"getBlocklist",(function(){return i}),(function(e){return i=e}));var l=r("hb5ch").version,a=r("kDwu4");o=()=>l,i=()=>a})),r.register("hb5ch",(function(e,t){e.exports=JSON.parse('{"name":"@phantom-labs/blocklist","version":"0.13.0","main":"index.js","types":"index.d.ts","repository":"git@github.com:phantom-labs/blocklist.git","author":"Jordan Leigh <AlwaysBCoding@gmail.com>","license":"MIT","scripts":{"build":"node build.js"},"dependencies":{"js-yaml":"^4.1.0","sha3":"^2.1.4"}}')})),r.register("kDwu4",(function(e,t){e.exports=JSON.parse('{"blocklist":["phantomweb.app","aurory.app","solvision.io","staratlas.art","starsatlas.com","sollet.cc","raydlum.io","aurorynft.com","sneks.gg","solletweb.io","i-sollet.com","fancyfrenchienft.art","solanawebwallet.online","phahtom.com","server-syncwallet.com","staratias.app","raydium.network","grapesnetwork.me","staratias.art","soistarter.org","audius-nft.top","aurory.me","degenapes.app","phantom-app.online","phantomwallet.net","dapps-node.com","phantom-app.link","solanaoutage.com","walletconnectdapps.net","staratlas.cx","web-phantom.app","0120tt.com"],"whitelist":[],"fuzzylist":[],"contentHash":"830ea1c9a833213eabc17990adf053081f503b1203ca9a2c711db7199e657293"}')}));