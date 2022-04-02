function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequirea886;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequirea886=a);var o=a("aZikt"),l=a("ihAua"),i=a("hHMPk"),c=a("ehJ6P"),d=a("d3pmY"),s=a("lxqKj"),u=a("gDkTC"),p=a("lwple"),m=a("czDD7");a("6CHoY");var g=a("7Qmuu"),h=a("6oEu9"),y=(p=a("lwple"),a("6oQjh")),f=a("ci2Mj"),v=a("8C6BZ"),x=a("5cKs6"),S=a("6gzK9"),E=a("cFuyE"),w=a("jKFz7"),T=a("iXlMH"),P=a("5DQqc"),b=a("6a67Q"),H=a("bMYcF"),C=a("aADTv"),A=a("i2Zy4"),k=a("hJDxl"),I=a("9P0Mo"),F=a("2cgmz"),D=a("lSpdH"),L=(o=a("aZikt"),i=a("hHMPk"),S=a("6gzK9"),a("hoJun")),B=a("8FNEt"),O=(k=a("hJDxl"),a("cweFb"));const M=i.default(O.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
  position: absolute;
`,_=i.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,j=i.default.div`
  width: 24px;
  height: 24px;
`,K=({onBackClick:t,totalSteps:n,currentStepIndex:r,isHidden:a,showBackButtonOnFirstStep:l})=>{const i=l||0!==r;return e(o).createElement(M,{opacity:a?0:1},i?e(o).createElement(L.ChevronCircle,{right:1,onClick:t},e(o).createElement(k.LeftChevronIcon,null)):e(o).createElement(j,null),e(o).createElement(_,null,S.range(n).map((t=>{const n=t<=r?"#4E44CE":"#333";return e(o).createElement(B.Circle,{key:t,diameter:12,color:n})}))),e(o).createElement(j,null))};var N=a("lPkGw"),R=(o=a("aZikt"),i=a("hHMPk"),a("i5Y99")),W=(k=a("hJDxl"),a("bPgZb"));const V=i.default(R.ListboxInput)`
  position: relative;
  width: 100%;
`,z=i.default.div`
  width: 11px;
  margin-top: 1px;
  margin-right: 8px;
  svg {
    fill: #aaa;
  }
`,Z=({value:t,placeholderText:n,options:r,onChange:a})=>{var l;const i=r.map((e=>e.value)),c=0===r.length,d=null===(l=r.find((e=>e.value===t)))||void 0===l?void 0:l.displayValue;return e(o).createElement(V,{value:null!=t?t:"__none",onChange:e=>a(e,i.indexOf(e)),tabIndex:0,disabled:c},(()=>e(o).createElement(e(o).Fragment,null,e(o).createElement(W.SelectButton,{arrow:e(o).createElement(z,null,e(o).createElement(k.DownChevronIcon,null))},void 0===t?n:d),!c&&e(o).createElement(W.SelectPopover,null,e(o).createElement(W.SelectList,null,r.map((t=>{var n;return e(o).createElement(W.SelectItem,{key:t.value,value:t.value},null!==(n=t.displayValue)&&void 0!==n?n:t.value)})))))))};var J=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))};f.initSentry();const Y=i.default.main`
  width: 400px;
  height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`,q=i.default.section`
  > * {
    margin-bottom: 10px;
  }
  margin-top: 27px;
`,Q=i.default(D.IconHeader)`
  margin-top: 46px;
  padding-left: 10px;
  padding-right: 10px;
`,U=i.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    color: #999;
  }
`,$=()=>{const t=new URLSearchParams(u.useLocation().search).get("permission");return e(o).createElement(e(o).Fragment,null,e(o).createElement(x.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(o).createElement(I.FullPageHeader,null),e(o).createElement(P.HardwareWalletProvider,null,e(o).createElement(A.OnboardingAndConnectHardwareErrorBoundary,null,t?e(o).createElement(Y,null,e(o).createElement(ee,{onFinish:()=>window.close(),pushStep:h.NOOP,popStep:h.NOOP})):e(o).createElement(G,null))))},G=()=>{const[t,n]=o.useState([]),r=s.usePreviousDistinct(t,((e,t)=>(null==e?void 0:e.length)===t.length)),a=S.getLast(t),l=e=>{n((t=>c.default(t,(t=>{t.push(e)}))))},i=()=>{n((e=>c.default(e,(e=>{e.pop()}))))};o.useEffect((()=>{n([e(o).createElement(ee,{pushStep:l,popStep:i})])}),[]);const u=t.length,p=t.length>(null!=r?r:[]).length,m=0===(null==r?void 0:r.length),g={initial:{x:m?0:p?150:-150,opacity:m?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(o).createElement(Y,null,e(o).createElement(K,{totalSteps:3,onBackClick:i,currentStepIndex:u-1}),e(o).createElement(d.AnimatePresence,{exitBeforeEnter:!0},e(o).createElement(d.motion.div,Object.assign({style:{height:"100%"},key:`${t.length}_${null==r?void 0:r.length}`},g),a)))},X=i.default.div`
  padding: 20px;
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,ee=t=>{const{t:n}=g.useTranslation(),{ledgerTransportState:r,transport:a,getPermission:l}=P.useLedgerTransport();let i,c,d=F.ConfirmationIconType.Default,s=e(o).createElement(N.SpinnerIcon,null),u=n("connectHardwareContinueActionButtonText"),p=!1,m=h.NOOP;switch(r){case P.LedgerTransportState.Searching:i=n("connectHardwareSearchingPrimaryText"),c=n("connectHardwareSearchingSecondaryText"),p=!0;break;case P.LedgerTransportState.NeedsPermission:s=e(o).createElement(k.AddIcon,null),i=n("connectHardwareNeedsPermissionPrimaryText"),c=n("connectHardwareNeedsPermissionSecondaryText"),m=l;break;case P.LedgerTransportState.WaitingForPermission:i=n("connectHardwareWaitingForPermissionPrimaryText"),c=n("connectHardwareWaitingForPermissionSecondaryText"),p=!0;break;case P.LedgerTransportState.WaitingForApplication:s=e(o).createElement(k.SolanaIcon,null),i=n("connectHardwareWaitingForApplicationPrimaryText"),c=n("connectHardwareWaitingForApplicationSecondaryText"),p=!0;break;case P.LedgerTransportState.Connected:d=F.ConfirmationIconType.Success,i=n("connectHardwareConnectedPrimaryText"),c=n("connectHardwareConnectedSecondaryText"),m=()=>{if(!a)throw new Error("Transport is missing");t.onFinish?t.onFinish():t.pushStep(e(o).createElement(ne,Object.assign({transport:a},t)))};break;case P.LedgerTransportState.Failed:d=F.ConfirmationIconType.Failure,i=n("connectHardwareFailedPrimaryText"),c=n("connectHardwareFailedSecondaryText"),u=n("connectHardwareFailedRetryActionButtonText"),m=l}return e(o).createElement(X,null,e(o).createElement(Q,{icon:e(o).createElement(F.ConfirmationIcon,{defaultIcon:s,type:d}),primaryText:i,secondaryText:c,headerStyle:D.IconHeaderStyle.Large}),e(o).createElement(C.Button,{onClick:m,theme:"primary",disabled:p},u))},te=[p.DerivationPathType.Bip44Root,p.DerivationPathType.Bip44,p.DerivationPathType.Bip44Change],ne=t=>{const{t:n}=g.useTranslation(),[r,a]=o.useState(0),[l,i]=o.useState(void 0),[d,s]=o.useState([]),[u,f]=o.useState({}),[x,P]=o.useState(!1),H=b.useConnection(),[A,I,F]=y.useStorage(p.StorageKeys.AccountMetas,[]),L=o.useMemo((()=>{const e=A.filter((e=>e.type===p.AccountType.Ledger)).map((e=>e.publicKey.toString()));return d.filter((t=>!e.includes(t.toString())))}),[d,A]),B=void 0!==r?te[r]:void 0,O=o.useMemo((()=>B?B===p.DerivationPathType.Bip44Root?[w.solanaDerivationPath(0,0,p.DerivationPathType.Bip44Root)]:S.range(10).map((e=>w.solanaDerivationPath(e,0,B))):[]),[r]),M=te.map((e=>({value:e,displayValue:h.DERIVATION_PATH_TYPE_TO_VALUE[e]})));o.useEffect((()=>{J(void 0,void 0,void 0,(function*(){if(!I){P(!0);try{const e=[];for(const n of O){const r=yield w.getPublicKeyAsync(t.transport,n);e.push(r)}s(e);const n=yield T.getMultipleAccountsAsync(H,e,"finalized");f(n)}catch(e){console.error(e)}finally{P(!1)}}}))}),[t.transport,I,O,H]),o.useEffect((()=>{s([])}),[O]),o.useEffect((()=>{1===L.length&&i(0)}),[L]);const _=L.map((t=>{var n;const r=t.toString(),a=null===(n=u[t.toString()])||void 0===n?void 0:n.lamports,l=void 0!==a?E.formatTokenAmount(E.lamportsToSolana(a)):"0";return{displayValue:e(o).createElement(U,null,e(o).createElement("span",null,E.formatHashMedium(r,7)),e(o).createElement("label",null,l," SOL")),value:r}})),j=void 0===r||void 0===l,K=void 0!==l?L[l]:void 0;return e(o).createElement(X,null,e(o).createElement(Q,{icon:e(o).createElement(k.AddIcon,null),primaryText:n("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:D.IconHeaderStyle.Large}),e(o).createElement(q,null,e(o).createElement(Z,{placeholderText:n("connectHardwareSelectAddressDerivationPath"),options:M,value:B,onChange:(e,t)=>{a(t)}}),e(o).createElement(Z,{placeholderText:x?n("connectHardwareSelectAddressSearching"):0===L.length?n("connectHardwareSelectAddressAllAddressesImported"):n("connectHardwareSelectAddressWalletAddress"),options:_,value:null==K?void 0:K.toString(),onChange:(e,t)=>{i(t)}})),e(o).createElement(C.Button,{onClick:()=>{if(void 0===l)return;const n=L[l],r=d.map((e=>e.toString())).indexOf(n.toString());var a,i;a=n.toString(),i=r,J(void 0,void 0,void 0,(function*(){if(I)return;const e=c.default(A,(e=>{const t=e.filter((e=>e.type===p.AccountType.Ledger)).length+1,n=O[i].toString("hex");e.push({type:p.AccountType.Ledger,name:`Ledger ${t}`,publicKey:a,derivationPath:n})})),t=e.length-1;v.analytics.capture("connectHardwareAddAccount"),F(e),m.setStorageValue(p.StorageKeys.SelectedAccountIndex,t)})),t.pushStep(e(o).createElement(re,Object.assign({},t)))},theme:"primary",disabled:j},"Add Account"))},re=()=>{const{t:t}=g.useTranslation();return e(o).createElement(X,null,e(o).createElement(Q,{icon:e(o).createElement(F.ConfirmationIcon,{defaultIcon:e(o).createElement("div",null),type:F.ConfirmationIconType.Success}),primaryText:t("connectHardwareFinishPrimaryText"),secondaryText:t("connectHardwareFinishSecondaryText"),headerStyle:D.IconHeaderStyle.Large}),e(o).createElement(C.Button,{onClick:()=>{v.analytics.capture("connectHardwareFinishClick"),window.close()},theme:"primary"},"Done"))};l.render(e(o).createElement(u.BrowserRouter,null,e(o).createElement(H.BannerProvider,null,e(o).createElement(b.ConnectionProvider,null,e(o).createElement($,null)))),document.getElementById("root")),v.analytics.capture("connectHardwareOpen");