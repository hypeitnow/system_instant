(self.webpackJsonp_c2c=self.webpackJsonp_c2c||[]).push([[757],{i2XL:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>J});var a=o("/SIk"),i=o.n(a),r=o("G6rc"),n=o("szIg"),s=o("7IDl"),l=o("xjo1"),c=o("krwy"),u=o("HbpF"),m=o("35b4"),p=o("C7qS"),x=o("CVOX"),d=i().createElement;function Z(){const{p2pAds:t}=x.Z.site(),e=(0,s.tv)(),[o]=(0,c.$)(),i=(0,a.useMemo)((()=>d(u.Z,{id:"C2Cadsdetail_btn_back",sx:{cursor:"pointer",fontSize:"12px"},onClick:()=>{e.push(`${t}?code=history`)}},d(m.Z,null,"<"),d(m.Z,{ml:"-4px"},"<"),d(m.Z,{ml:"4px"},o("c2c_ui_naviagtion_back")))),[o]);return d(p.Z,{heightStyle:"90px"},d(u.Z,{tx:"container",variant:"content",flexDirection:"column",sx:{pl:[0,"12px",0]}},d(u.Z,{tx:"HOD",variant:"historyTitle"},d(m.Z,{as:"h1",fontSize:"24px",mt:[2,4,4],mb:[2,4,4]},o("c2c-ui-trade-header-orders")),i)))}const b=i().memo(Z);var y=o("vM3x"),D=o.n(y),O=o("wgY5"),v=o.n(O),f=o("zknK"),h=o("OaRt"),g=i().createElement;const _=function(){const[t]=(0,c.$)(),e=(0,n.useSelector)((t=>t.common.isMobile)),o=(0,n.useSelector)((t=>t.historyOrderDetail.advDetail)),{advNo:i,advStatus:r,tradeType:s,asset:l,fiatUnit:p,initAmount:x,surplusAmount:d,assetScale:Z,minSingleTransAmount:b,maxSingleTransAmount:y,currencyRate:O,rateFloatingRatio:_,createTime:H,advUpdateTime:M,fiatScale:w}=o,E=(0,a.useCallback)(((t="")=>t||"-"),[]),S=(0,a.useMemo)((()=>{const e={1:{name:t("c2c-ui-pc-myposts-list-action-publish"),color:"#2EBD85"},3:{name:t("c2c-ui-pc-myposts-list-action-offline"),color:"#848E9C"},4:{name:t("c2c-ui-pc-myposts-list-action-close"),color:"#CCCCCC"}};return e[r]&&e[r].name}),[r,t]),T=(0,a.useMemo)((()=>{const t=new(D())(x).minus(d).toFixed(Z);return(0,h.xG)(t,(0,h.mK)(Z))}),[x,d,Z]),k=(0,a.useMemo)((()=>{const t=O||"-",e=/-/.test(_)?"#2EBD85":"#F84960",o=0==_?null:_?`(${_}%)`:null;return g(m.Z,{color:"#0B0E11"},`${t}`," ",g("span",{style:{color:e}},o))}),[O,_]),C=(0,a.useMemo)((()=>E(v()(H).format("YYYY-MM-DD hh:mm:ss"))),[E,H]),A=(0,a.useMemo)((()=>E(v()(M).format("YYYY-MM-DD hh:mm:ss"))),[E,M]);return g(u.Z,{tx:"HOD",variant:"head_flex"},g(u.Z,{tx:"HOD",variant:"head_one"},g(u.Z,{tx:"HOD",variant:"ht_box",justifyContent:"space-between"},g(u.Z,{flexDirection:["row","column","column"],alignItems:"flex-start"},g(m.Z,{tx:"HOD",variant:"t_base"},`${t("c2c-ui-pc-myposts-list-asn")}.`),g(m.Z,{color:"#0B0E11",ml:["4px",0,0]},E(i))),e?g(m.Z,{color:"#848E9C"},E(S)):null),g(u.Z,{tx:"HOD",variant:"hb_box"},g(f.Z,{mr:["36px","28px","36px"]},g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-tabletop-type")),g(m.Z,{color:"BUY"===s?"secondary":"#F84960"},E(s))),g(f.Z,{mr:["36px","28px","36px"]},g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-tabletop-asset")),g(m.Z,{color:"#0B0E11"},E(l))),g(f.Z,null,g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-tabletop-currency")),g(m.Z,{color:"#0B0E11"},E(p))),e?g(f.Z,{ml:"36px"},g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-tabletop-currency")),k):null),g(u.Z,{tx:"HOD",variant:"ht_box",sx:{mt:"16px",display:["none","flex","none"]}},g(u.Z,{flexDirection:"column",alignItems:"flex-start"},g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-list-lastUpdated")),g(m.Z,{color:"#0B0E11",ml:["10px",0,0]},A)))),g(f.Z,{tx:"HOD",variant:"line"}),g(u.Z,{tx:"HOD",variant:"head_two"},g(u.Z,{tx:"HOD",variant:"ht_box"},g(u.Z,{flexDirection:"column",mr:[0,0,"45px"]},g(m.Z,{color:"#76808E",mb:1},t("c2c-ui-pc-myposts-tabletop-qti")),g(m.Z,{color:"#0B0E11"},`${E(T)} / ${(0,h.xG)(x,(0,h.mK)(Z))}`))),g(u.Z,{tx:"HOD",variant:"hb_box"},g(f.Z,{mr:"36px"},g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-tabletop-limit")),g(m.Z,null,`${(0,h.xG)(b,(0,h.mK)(w))} - ${(0,h.xG)(y,(0,h.mK)(w))}`))),H?g(u.Z,{tx:"HOD",variant:"ht_box",sx:{mt:"16px",display:["none","flex","none"]}},g(u.Z,{flexDirection:"column",alignItems:"flex-start"},g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-list-createdTime")),g(m.Z,null,C))):null),g(f.Z,{tx:"HOD",variant:"line"}),g(u.Z,{tx:"HOD",variant:"head_three"},g(u.Z,{tx:"HOD",variant:"ht_box"},M?g(u.Z,{tx:"HOD",variant:"ht_box_li",mr:[0,"45px","45px"]},g(m.Z,{color:"#76808E",mb:1},t("c2c-ui-pc-myposts-list-lastUpdated")),g(m.Z,{color:"#0B0E11"},A)):null,e?null:g(u.Z,{flexDirection:"column",sx:{mt:[0,"54px",0]}},g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-tabletop-status")),g(m.Z,{color:"#0B0E11"},E(S)))),H?g(u.Z,{tx:"HOD",variant:"hb_box"},g(u.Z,{tx:"HOD",variant:"ht_box_li",mr:[0,"36px","36px"]},g(m.Z,{tx:"HOD",variant:"t_base"},t("c2c-ui-pc-myposts-list-createdTime")),g(m.Z,null,C))):null))};var H=o("4WKm"),M=o("cstl"),w=o("ENDP"),E=o("fd0E"),S=i().createElement;function T(){const t=(0,n.useDispatch)(),e=(0,n.useSelector)((t=>t.historyOrderDetail.pageTotal)),o=(0,n.useSelector)((t=>t.historyOrderDetail.pageNum)),i=(0,n.useSelector)((t=>t.historyOrderDetail.advNo)),r=(0,a.useCallback)((e=>{t.historyOrderDetail.update({pageNum:e}),t.historyOrderDetail.postAdvOrders({advOrderNumber:i,page:e,rows:10}),document.querySelectorAll("body").scrollTop=0}),[i,t.historyOrderDetail]);return S(u.Z,{tx:"HOD",variant:"listPage",display:["none","flex","flex"]},S(E.Z,{style:{direction:"ltr"},total:Math.ceil(e/10),current:o,onMoveToPage:t=>{r(t)}}))}const k=i().memo(T);var C=i().createElement;const A=({pl:t=0,width:e,textAlign:o,alignItems:a="flex-start",fd:i="column",children:r})=>C(u.Z,{tx:"myads",height:"88px",flexDirection:i,pt:"20px",pl:t,width:e,textAlign:o,alignItems:a},r);function N({colConfigs:t,data:e=""}){var o,i;const[r]=(0,c.$)(),{orderNumber:n,tradeType:s,buyerNickname:l,sellerNickname:p,price:x,amount:d,orderStatus:Z,createTime:b,payMethods:y,currencyTicketSize:O,priceTicketSize:f,assetTicketSize:g}=e,_=(0,a.useMemo)((()=>({1:r("c2c-ui-status-pmtb"),2:r("c2c-ui-status-tbr"),4:r("c2c-ui-status-cpl"),5:r("c2c-ui-status-appealing"),6:r("c2c-ui-status-cc"),7:r("c2c-ui-status-cc")}[Z])),[Z,r]),H=(0,a.useMemo)((()=>{const t=new(D())(x).toFixed(2,1);return(0,h.xG)(t,f)}),[x,f]),M=(0,a.useMemo)((()=>{const t=new(D())(x).multipliedBy(d).toFixed(2,1);return(0,h.xG)(t,O)}),[x,d,O]),{0:w,1:E}=(0,a.useMemo)((()=>{let t=["-","-"];if(b){const e=v()(b).format("YYYY-MM-DD HH:mm:ss").split(" ");t=[e[0],e[1]]}return t}),[b]);return C(u.Z,{tx:"HOD",variant:"listLiBody",display:["none","flex","flex"]},C(A,Object.assign({},t[0],{pl:"24px"}),C(m.Z,null,n)),C(A,t[1],C(m.Z,{mb:"10px"},"SELL"===s?l:p),C(m.Z,null,y&&((null===(o=y[0])||void 0===o?void 0:o.tradeMethodShortName)||(null===(i=y[0])||void 0===i?void 0:i.tradeMethodName)))),C(A,t[2],C(m.Z,{mb:"10px"},H),C(m.Z,null,(0,h.xG)(d,g))),C(A,t[3],C(m.Z,null,M)),C(A,t[4],C(m.Z,{mb:"10px"},w),C(m.Z,null,E)),C(A,t[5],C(m.Z,null,_)))}const B=i().memo(N);var Y=i().createElement;const $=function({data:t=""}){const[e]=(0,c.$)(),{orderNumber:o,tradeType:i,buyerName:r,sellerName:n,price:s,amount:l,orderStatus:p,createTime:x,payMethods:d,currencyTicketSize:Z,priceTicketSize:b,assetTicketSize:y}=t,O=(0,a.useMemo)((()=>({1:e("c2c-ui-status-pmtb"),2:e("c2c-ui-status-tbr"),4:e("c2c-ui-status-cpl"),5:e("c2c-ui-status-appealing"),6:e("c2c-ui-status-cc"),7:e("c2c-ui-status-cc")}[p])),[p,e]),f=(0,a.useMemo)((()=>{const t=new(D())(s).toFixed(2,1);return(0,h.xG)(t,b)}),[s,b]),g=(0,a.useMemo)((()=>{const t=new(D())(s).multipliedBy(l).toFixed(2,1);return(0,h.xG)(t,Z)}),[s,l,Z]);return Y(u.Z,{sx:{borderBottom:"1px solid #EAECEF",flexDirection:"column",py:2}},Y(u.Z,{tx:"HOD",variant:"mob_li"},Y(m.Z,{tx:"HOD",variant:"mob_li_t"},e("c2c-ui-pc-myposts-postOrder-tabletop-oderNumber")),Y(m.Z,null,o)),Y(u.Z,{tx:"HOD",variant:"mob_li"},Y(m.Z,{tx:"HOD",variant:"mob_li_t"},e("c2c-ui-fiatOrder-counterparty")),Y(m.Z,null,"SELL"===i?r:n)),Y(u.Z,{tx:"HOD",variant:"mob_li"},Y(m.Z,{tx:"HOD",variant:"mob_li_t"},e("c2c-ui-pc-myposts-tabletop-payment")),Y(m.Z,null,d[0].tradeMethodName)),Y(u.Z,{tx:"HOD",variant:"mob_li"},Y(m.Z,{tx:"HOD",variant:"mob_li_t"},e("c2c-ui-pc-myposts-tabletop-price")),Y(m.Z,null,f)),Y(u.Z,{tx:"HOD",variant:"mob_li"},Y(m.Z,{tx:"HOD",variant:"mob_li_t"},e("c2c-ui-trade-buy-quantity")),Y(m.Z,null,(0,h.xG)(l,y))),Y(u.Z,{tx:"HOD",variant:"mob_li"},Y(m.Z,{tx:"HOD",variant:"mob_li_t"},e("c2c-ui-pc-myposts-postOrder-tabletop-amount")),Y(m.Z,null,g)),Y(u.Z,{tx:"HOD",variant:"mob_li"},Y(m.Z,{tx:"HOD",variant:"mob_li_t"},e("c2c-ui-pc-myposts-postOrder-tabletop-matchTime")),Y(m.Z,null,v()(x).format("YYYY-MM-DD HH:mm:ss"))),Y(u.Z,{tx:"HOD",variant:"mob_li"},Y(m.Z,{tx:"HOD",variant:"mob_li_t"},e("c2c-ui-pc-myposts-postOrder-tabletop-status")),Y(m.Z,null,O)))};var F=i().createElement;const G=function({colConfigs:t}){const{isMobile:e}=(0,n.useSelector)((t=>t.common)),{advOrders:o}=(0,n.useSelector)((t=>t.historyOrderDetail)),i=(0,a.useMemo)((()=>{const a=[];return e?o&&o.map(((e,o)=>{a.push(F($,{key:o,data:e,colConfigs:t}))})):o&&o.map(((e,o)=>{a.push(F(B,{key:o,data:e,colConfigs:t}))})),a}),[o,t,e]);return F(u.Z,{tx:"HOD",variant:"listBody"},i)};var z=i().createElement;function L({colConfigs:t}){return z(u.Z,{tx:"HOD",variant:"listHead",sx:{display:["none","flex","flex"]}},t.map(((t,e)=>z(f.Z,{key:t.name,pl:0===e?"24px":0,width:t.width,textAlign:t.textAlign},z("span",null,t.name)))))}const I=i().memo(L);var K=i().createElement;function R(){const t=(0,n.useSelector)((t=>t.common.isMobile)),e=(0,n.useSelector)((t=>t.loading.effects.historyOrderDetail.postAdvOrders)),{advOrders:o,mobRows:r,pageTotal:s,advNo:l,firstTime:m}=(0,n.useSelector)((t=>t.historyOrderDetail)),[p]=(0,c.$)(),x=(0,n.useDispatch)(),d=(0,a.useMemo)((()=>[{name:p("c2c-ui-pc-myposts-postOrder-tabletop-oderNumber"),width:"24%",textAlign:"left"},{name:p("c2c-ui-pc-myposts-postOrder-tabletop-counterpartyPayment"),width:"18%",textAlign:"left"},{name:p("c2c-ui-pc-myposts-postOrder-tabletop-priceQuantity"),width:"18%",textAlign:"left"},{name:p("c2c-ui-pc-myposts-postOrder-tabletop-amount"),width:"16%",textAlign:"left"},{name:p("c2c-ui-pc-myposts-postOrder-tabletop-matchTime"),width:"11%",textAlign:"left"},{name:p("c2c-ui-pc-myposts-postOrder-tabletop-status"),width:"13%",textAlign:"left"}]),[p]),Z=(0,a.useMemo)((()=>t?null:K(I,{key:"TableHeader",colConfigs:d})),[t,d]),b=(0,a.useMemo)((()=>t?null:K(k,null)),[t]),y=(0,a.useCallback)((async()=>{await x.historyOrderDetail.postAdvOrders({advOrderNumber:l,page:1,rows:r+10}),x.historyOrderDetail.update({mobRows:r+10})}),[l,x.historyOrderDetail,r]),D=(0,a.useMemo)((()=>t&&s>10?K(w.Z,{totalNum:s,mobRows:r,filterHandler:y,showLoading:e}):null),[t,r,s,y,e]),O=(0,a.useMemo)((()=>m?e&&!t?[Z,K(M.Z,{key:"LoadingDOM"})]:t&&e&&!o?K(M.Z,null):o&&o.length>0?K(i().Fragment,null,Z,K(G,{colConfigs:d}),b,D):K(H.Z,{text:p("c2c-ui-pc-myposts-postOrder-noData")}):t?K(M.Z,null):[Z,K(M.Z,{key:"LoadingDOM"})]),[m,e,t,o,Z,d,b,D,p]);return K(f.Z,{tx:"container",variant:"box",sx:{position:"relative",px:[3,0,4],bg:["pageBg","pageBg","pageBg"]}},K(u.Z,{tx:"container",variant:"content",flexDirection:"column"},O))}const j=i().memo(R);var q=o("jZuj"),U=o("rrXQ"),P=o("Ne75"),X=i().createElement;const J=function(){const{metaData:t,configs:e}=(0,a.useContext)(P.Il),o=(0,n.useDispatch)(),{isLoggedIn:i}=(0,q.b)(),{isMobile:c}=(0,n.useSelector)((t=>t.common)),{code:u}=(0,s.Hb)().query;return(0,a.useEffect)((()=>{!1===i&&(0,U.GL)()}),[i]),(0,a.useEffect)((()=>{u&&/^[a-zA-Z0-9]{1,}$/.test(u)||(window.location.href="/not-found")}),[u]),(0,a.useEffect)((()=>{i&&u&&o.historyOrderDetail.postAdvOrders({advOrderNumber:u,page:1,rows:10})}),[i,u,o.historyOrderDetail]),(0,a.useEffect)((()=>{i&&u&&async function(){const{data:t}=await o.historyOrderDetail.postAdvDetail({advNo:u});t&&null!==t&&void 0!==t&&t.tradeType||(window.location.href="/not-found")}()}),[i,u]),X(r.Z,{metaData:t,configs:e,bg:"bg",withFooter:!c},X(l.Z,{linkType:"historyOrderDetail"}),X(b,null),X(_,null),X(j,null))}}}]);