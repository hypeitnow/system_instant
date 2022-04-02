var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirea886;e.register("5i1Um",(function(t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(e("aZikt")),a=e("kqNhH"),i=e("7ByLj");function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P="wistia-player-",m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,r,l=y(u);function u(){var e;s(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(b(e=l.call.apply(l,[this].concat(n))),"callPlayer",a.callPlayer),v(b(e),"playerID",e.props.config.playerId||"".concat(P).concat((0,a.randomString)())),v(b(e),"onPlay",(function(){var t;return(t=e.props).onPlay.apply(t,arguments)})),v(b(e),"onPause",(function(){var t;return(t=e.props).onPause.apply(t,arguments)})),v(b(e),"onSeek",(function(){var t;return(t=e.props).onSeek.apply(t,arguments)})),v(b(e),"onEnded",(function(){var t;return(t=e.props).onEnded.apply(t,arguments)})),v(b(e),"mute",(function(){e.callPlayer("mute")})),v(b(e),"unmute",(function(){e.callPlayer("unmute")})),e}return t=u,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,r=n.playing,o=n.muted,i=n.controls,l=n.onReady,u=n.config,s=n.onError;(0,a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then((function(e){u.customControls&&u.customControls.forEach((function(t){return e.defineControl(t)})),window._wq=window._wq||[],window._wq.push({id:t.playerID,options:c({autoPlay:r,silentAutoPlay:"allow",muted:o,controlsVisibleOnLoad:i,fullscreenButton:i,playbar:i,playbackRateControl:i,qualityControl:i,volumeControl:i,settingsControl:i,smallPlayButton:i},u.options),onReady:function(e){t.player=e,t.unbind(),t.player.bind("play",t.onPlay),t.player.bind("pause",t.onPause),t.player.bind("seek",t.onSeek),t.player.bind("end",t.onEnded),l()}})}),s)}},{key:"unbind",value:function(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.unbind(),this.callPlayer("remove")}},{key:"seekTo",value:function(e){this.callPlayer("time",e)}},{key:"setVolume",value:function(e){this.callPlayer("volume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("playbackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props.url,t=e&&e.match(i.MATCH_URL_WISTIA)[1],n="wistia_embed wistia_async_".concat(t);return o.default.createElement("div",{id:this.playerID,key:t,className:n,style:{width:"100%",height:"100%"}})}}])&&p(t.prototype,n),r&&p(t,r),u}(o.Component);t.exports.default=m,v(m,"displayName","Wistia"),v(m,"canPlay",i.canPlay.wistia),v(m,"loopOnEnded",!0)}));