function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=n.parcelRequirea886;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequirea886=l),l.register("jSC0s",(function(n,t){var r,o,a,i;r=n.exports,o="Unlock",a=function(){return I},i=function(e){return I=e},Object.defineProperty(r,o,{get:a,set:i,enumerable:!0,configurable:!0});var c=l("aZikt"),s=l("hHMPk"),u=l("7Qmuu"),m=l("1vmp5"),d=l("8C6BZ"),p=l("iyOkC"),f=l("aADTv"),g=l("3rE52"),E=l("hJDxl"),w=l("lSpdH"),y=l("a80wK"),x=l("g7X40"),b=l("jiwMC"),h=l("8sl7I"),k=l("bJYWD"),v=l("eeuNW"),C=function(e,n,t,r){return new(t||(t=Promise))((function(l,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?l(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,i)}c((r=r.apply(e,n||[])).next())}))};const T=s.default.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`,S=s.default.div`
  flex: 1;
  height: 100%;
  margin-top: ${e=>e.isFullScreen?"40px":"105px"};
  display: flex;
  flex-direction: column;
  align-items: center;
`,F=s.default(y.Input)`
  margin-top: 26px;
  margin-bottom: 15px;
`,M=s.default.div`
  width: 12px;
`,W=s.default(x.Text)`
  visibility: ${e=>e.visibility};
  margin-top: 18px;
  text-decoration: none;
  &:hover {
    color: #999999;
  }
`,I=({unlockSeedAndMnemonic:n,isFullScreen:t})=>{const{t:r}=u.useTranslation(),{register:l,handleSubmit:o,errors:a,getValues:i,setError:s}=m.useForm(),{showWalletMenu:f}=v.useWalletMenu(),w=c.useCallback((()=>C(void 0,void 0,void 0,(function*(){try{yield n(i("password")),d.analytics.capture("unlockWallet")}catch(e){console.error(e),e.message&&e.message.includes("Incorrect password")?s("password",{type:"manual",message:r("unlockErrorIncorrectPassword")}):s("password",{type:"manual",message:r("unlockErrorSomethingWentWrong")})}}))),[n]),y=()=>{d.analytics.capture("forgotPassword"),p.openTabAsync({url:"onboarding.html?restore=true"})};return t?e(c).createElement(k.Body,null,e(c).createElement(T,{onSubmit:o(w)},e(c).createElement(S,{isFullScreen:!0},e(c).createElement(j,null),e(c).createElement(P,{register:l,warning:a.password})),e(c).createElement(O,null),e(c).createElement(D,{error:a.password,onClick:y}))):e(c).createElement(k.Container,null,e(c).createElement(g.Header,{justifyContent:"space-between"},e(c).createElement(b.IconWrapper,{onClick:()=>{const n=e(c).createElement(e(c).Fragment,null,e(c).createElement(h.ResetWalletMenuItem,null),e(c).createElement(h.HelpMenuItem,null));f(n)}},e(c).createElement(E.WalletMenuIcon,null)),e(c).createElement(x.Text,{weight:500,size:16,color:"#555555"},"Phantom.app"),e(c).createElement(M,null)),e(c).createElement(k.Body,null,e(c).createElement(T,{id:"unlock-form",onSubmit:o(w)},e(c).createElement(S,{isFullScreen:!1},e(c).createElement(j,null),e(c).createElement(P,{register:l,warning:a.password}),e(c).createElement(D,{error:a.password,onClick:y})))),e(c).createElement(k.Footer,{plain:!0},e(c).createElement(O,{form:"unlock-form"})))},P=({register:n,warning:t})=>{const{t:r}=u.useTranslation();return e(c).createElement(F,{name:"password",autoFocus:!0,placeholder:r("unlockPassword"),type:"password",ref:n({required:!0}),warning:t})},j=()=>{const{t:n}=u.useTranslation();return e(c).createElement(w.IconHeader,{icon:e(c).createElement(E.LogoDark,null),primaryText:n("unlockEnterPassword")})},D=({onClick:n,error:t})=>{const{t:r}=u.useTranslation();return e(c).createElement(W,{size:16,color:"#666666",onClick:n,visibility:t?"visible":"hidden"},r("unlockForgotPassword"))},O=n=>{const{t:t}=u.useTranslation();return e(c).createElement(f.Button,Object.assign({type:"submit",theme:"primary"},n),t("unlockActionButtonUnlock"))}}));