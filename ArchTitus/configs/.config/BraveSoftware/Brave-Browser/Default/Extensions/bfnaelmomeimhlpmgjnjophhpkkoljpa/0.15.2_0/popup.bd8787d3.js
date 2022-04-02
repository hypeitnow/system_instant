var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=e.parcelRequirea886;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,r){i[e]=r},e.parcelRequirea886=o),o.register("6mzlH",(function(e,r){var i,n,t,d;i=e.exports,n="Main",t=function(){return s},Object.defineProperty(i,n,{get:t,set:d,enumerable:!0,configurable:!0});var l=o("hHMPk"),a=o("4yWCU"),f=o("fCuks");const s=l.default.div`
  background-color: #222222;
  min-width: ${a.PHANTOM_WIDTH}px;
  min-height: ${a.PHANTOM_HEIGHT}px;
  height: 100vh;
  width: 100vw;
  ${e=>e.withBorder&&a.BROWSER_ENV.browser.name!==f.BROWSER_MAP.safari?"border: 1px solid #323232;":""}
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  ${a.BROWSER_ENV.browser.name===f.BROWSER_MAP.firefox?"border-radius: 8px;":""}
`}));