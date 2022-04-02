function e(e){return e&&e.__esModule?e.default:e}function t(e,t,o,l){Object.defineProperty(e,t,{get:o,set:l,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},i=o.parcelRequirea886;null==i&&((i=function(e){if(e in l)return l[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return l[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},o.parcelRequirea886=i),i.register("f2RwE",(function(o,l){t(o.exports,"SwapperArrowStyle",(function(){return S})),t(o.exports,"Swapper",(function(){return k}));var n=i("aZikt"),r=i("hHMPk"),a=i("7Qmuu"),s=i("6oEu9"),c=i("cFuyE"),d=i("g9lcT"),u=i("hJDxl"),p=i("aADTv"),m=i("gkUV0"),f=i("g7X40"),g=i("lPkGw"),v=i("jiwMC"),b=i("euMlY"),x=i("a80wK");const E=r.default.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,w=r.default.div`
  margin-top: 11px;
  margin-bottom: 19px;
`,h=r.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`,A=r.default(v.IconWrapper)`
  margin-right: 32px;
  margin-bottom: 5px;
`,y=r.default.div`
  label {
    color: #777;
    font-weight: 400;
  }
  cursor: pointer;
`;var S;!function(e){e.Down="down",e.Double="double"}(S||(S={}));const k=({onCancelClick:t,onArrowClick:o,buttonTheme:l,fromAsset:i,totalFees:r,toAsset:m,fromAssetsList:g,toAssetsList:v,initialFromAssetAmount:x,price:k,slippage:F,feeDisclaimer:T,priceImpact:D,errorMessage:I,onConvertClick:O=s.NOOP,onFromAssetSelect:M=s.NOOP,onToAssetSelect:L=s.NOOP,onFromAssetAmountChange:N=s.NOOP,onSlippageUpdate:U=s.NOOP,arrowStyle:_=S.Down,isBottomInputDisabled:P=!1,topInputLabel:B="From",bottomInputLabel:z="To",convertButtonLabel:R="Convert",feeBreakdown:V=[]})=>{const{t:W}=a.useTranslation(),{showAssetSelectionModal:j,hideAssetSelectionModal:q}=d.useModals(),{symbol:$,balance:G}=i,H=i.decimals,J=m.decimals,[K,Q]=n.useState(null==x?void 0:x.toString()),X=parseFloat(null!=K?K:"0"),[Y,Z]=n.useState(K&&k?(X*k).toString():void 0);n.useEffect((()=>{N(K?parseFloat(K):void 0)}),[K]);const ee=e=>{var t;if(!e)return Q(void 0),void Z(void 0);const o=k&&!isNaN(parseFloat(e))?parseFloat(e)*k:void 0;Q(e),Z(null===(t=null==o?void 0:o.toFixed(J))||void 0===t?void 0:t.toString())};n.useEffect((()=>{ee(K)}),[k]);const te=e=>{q(),M(e)},oe=e=>{q(),L(e)},le=o?()=>{Q(Y||void 0),Z(void 0),o()}:void 0,ne=null!=G?G:0,ie=i.isNativeOfType&&ne>s.ESTIMATED_SOL_TRADE_FEE?ne-s.ESTIMATED_SOL_TRADE_FEE:ne,re=X>ne,ae=re||!K||!Y;return e(n).createElement(E,{onSubmit:e=>{e.preventDefault(),K&&O(X)}},e(n).createElement("div",null,e(n).createElement(w,null,e(n).createElement(h,null,e(n).createElement(f.Text,{size:16,color:"#777",weight:500,textAlign:"left"},B),e(n).createElement(y,{onClick:()=>ee(ie.toString())},e(n).createElement(f.Text,{size:14,color:"#777",hoverColor:"#8A81F8",weight:500,textAlign:"left"},e(n).createElement("label",null,W("swapperMax"))," ",c.formatTokenAmount(ie)," ",$))),e(n).createElement(C,{size:16,selectedAsset:i,hasWarning:re,onClick:g?()=>{j(te,g)}:void 0,onUserInput:ee,assetValue:K})),e(n).createElement(w,null,e(n).createElement(h,null,e(n).createElement(f.Text,{size:16,color:"#777",weight:500,textAlign:"left"},z),e(n).createElement(A,{onClick:le},_===S.Double?e(n).createElement(u.VerticalDoubleArrowsIcon,null):e(n).createElement(u.DownArrowIcon,null))),e(n).createElement(C,{disabled:P,selectedAsset:m,isLoading:void 0!==K&&void 0===Y&&void 0===I,onClick:v?()=>{j(oe,v)}:void 0,onUserInput:e=>{var t;if(!e)return Z(void 0),void Q(void 0);const o=k?parseFloat(e)/k:void 0;Z(parseFloat(e).toFixed(J).toString()),Q(null===(t=null==o?void 0:o.toFixed(H))||void 0===t?void 0:t.toString())},assetValue:Y,errorMessage:I}))),e(n).createElement("div",null,e(n).createElement(b.SwapFees,{price:k,fromAssetSymbol:i.symbol,toAssetSymbol:m.symbol,totalFees:r,feeBreakdown:V,feeDisclaimer:T,slippage:F,onSlippageUpdate:U,priceImpact:D}),t?e(n).createElement(p.ButtonPair,{primaryText:R,secondaryText:"Cancel",primaryDisabled:ae,primaryTheme:l,onSecondaryClicked:t}):e(n).createElement(p.Button,{type:"submit",theme:ae?"default":l,disabled:ae,onClick:t},R)))},F=r.default.div`
  box-sizing: border-box;
  background: #181818;
  border: ${e=>e.hasWarning?"1px solid #EB3742":"1px solid #2F2F2F"};
  border-radius: 6px;
  width: 100%;
  position: relative;
  display: flex;
`,T=r.default.div`
  position: absolute;
  top: 12px;
  left: 12px;
`,C=({selectedAsset:t,assetValue:o,isLoading:l=!1,hasWarning:i,errorMessage:r,disabled:a,onClick:s,onUserInput:c})=>{let d=l?void 0:"0";return r&&(d=r),e(n).createElement(F,{hasWarning:i},l&&e(n).createElement(T,null,e(n).createElement(g.Spinner,{diameter:25,color:"#8A81F8"})),e(n).createElement(x.NumericalInput,{name:"amount",placeholder:d,warning:i,value:null!=o?o:"",decimalLimit:null==t?void 0:t.decimals,disabled:a,onUserInput:c,border:"1px"}),e(n).createElement(O,{selectedAsset:t,onClick:s}))},D=r.default.div`
  border-radius: 40px 10px 10px 40px;
  background-color: #2a2a2a;
  display: flex;
  margin: 6px;
  align-items: center;
  > * {
    margin-right: 6px;
  }
  svg {
    margin-right: 10px;
    fill: #777777;
  }
  ${e=>e.isClickable?r.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,I=r.default(m.TokenImage)`
  margin: 0px 6px 0px 5px;
`,O=({selectedAsset:t,onClick:o})=>e(n).createElement(D,{isClickable:void 0!==o,onClick:o},e(n).createElement(I,{width:30,iconUrl:t.iconUrl,alt:t.symbol}),e(n).createElement(f.Text,{weight:600,size:16,color:"white"},t.symbol),void 0!==o&&e(n).createElement(u.DownChevronIcon,{width:9}))}));