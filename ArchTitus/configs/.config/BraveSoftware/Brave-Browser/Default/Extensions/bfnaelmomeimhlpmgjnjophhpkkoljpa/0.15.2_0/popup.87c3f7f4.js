function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},l={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},n.parcelRequirea886=a),a.register("dczY0",(function(t,n){e(t.exports,"Column",(function(){return r}));const r=a("hHMPk").default.div`
  display: flex;
  flex-direction: column;
  width: ${e=>e.width};
  padding: ${e=>e.padding};
  align-items: ${e=>e.align};
  justify-content: ${e=>e.justify};
`;r.defaultProps={width:"100%",align:"flex-start",justify:"flex-start"}})),a.register("cqRHn",(function(n,r){e(n.exports,"shouldRenderWhatsNewOverlay",(function(){return x}),(function(e){return x=e})),e(n.exports,"acknowledgeWhatsNewOverlay",(function(){return h}),(function(e){return h=e})),e(n.exports,"WhatsNewOverlay",(function(){return w}),(function(e){return w=e}));var l=a("aZikt"),i=a("hHMPk"),o=a("7Qmuu"),u=a("1XmKR"),c=a("czDD7"),s=a("aADTv"),d=a("g7X40"),f=a("dtSLt"),p=a("6oEu9"),g=function(e,t,n,r){return new(n||(n=Promise))((function(l,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function o(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((r=r.apply(e,t||[])).next())}))};const x=()=>g(void 0,void 0,void 0,(function*(){return 31>((yield c.getStorageValue(u.StorageKeys.LastSeenWhatsNewId))||0)})),h=()=>{c.setStorageValue(u.StorageKeys.LastSeenWhatsNewId,31)},w=({onClose:e})=>{const{t:n}=o.useTranslation(),[r,a]=l.useState(!1);return r?t(l).createElement(m,null,t(l).createElement(b,null,t(l).createElement(t(f),{size:190,value:p.PHANTOM_MOBILE_APP_DOWNLOAD_URL})),t(l).createElement(O,null,n("whatsNewOverlayv1ScanWithCamera")),t(l).createElement(v,null),t(l).createElement(T,null,t(l).createElement(A,{onClick:e}))):t(l).createElement(m,null,t(l).createElement(y,null,t(l).createElement(d.Text,{color:"#8A81F8",size:16,weight:600},n("whatsNewOverlayNew"))),t(l).createElement(E,null,n("whatsNewOverlayv1PrimaryText")),t(l).createElement(O,null,n("whatsNewOverlayv1SecondaryText")),t(l).createElement(N,{color:"#8A81F8",size:16,weight:500,onClick:()=>{a(!0)}},n("whatsNewOverlayv1ActionGetAppNow")),t(l).createElement(v,null),t(l).createElement(T,null,t(l).createElement(A,{onClick:e})))},m=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: 20px;
`,v=i.default.div`
  flex: 1;
`,y=i.default.div`
  margin-top: 40px;
  align-self: center;
  width: 76px;
  height: 35px;
  background-color: rgba(138, 129, 248, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`,E=i.default(d.Text).attrs({size:28,weight:500})`
  align-self: center;
  margin-top: 22px;
  line-height: 34px;
  max-width: 275px;
  text-align: center;
`,O=i.default(d.Text).attrs({size:16,color:"#777"})`
  align-self: center;
  margin-top: 22px;
  max-width: 275px;
  text-align: center;
  span {
    color: white;
  }
`,N=i.default(d.Text).attrs({color:"#8A81F8",size:16,weight:500})`
  cursor: pointer;
  margin-top: 22px;
`,b=i.default.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;

  canvas {
    border: 8px solid white;
    border-radius: 10px;
  }
`,T=i.default.div``,A=e=>{const{t:n}=o.useTranslation();return t(l).createElement(s.Button,Object.assign({type:"button",theme:"default"},e),n("whatsNewOverlayActionButtonClose"))}}));