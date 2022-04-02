function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},l=n.parcelRequirea886;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},n.parcelRequirea886=l),l.register("9P0Mo",(function(n,r){t(n.exports,"FullPageHeader",(function(){return h}));var i=l("aZikt"),o=l("hHMPk"),a=l("7Qmuu"),s=l("hJDxl"),d=l("g7X40"),u=l("6oEu9");const p=o.default.header`
  display: flex;
  width: 100%;
  padding: 30px 40px;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
`,c=o.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #252525;
  height: 40px;
  width: 181px;
  border-radius: 100px;
  ${d.LogoText} {
    margin-right: 6px;
    margin-left: 10px;
  }
`,f=o.default.div`
  display: flex;
  align-items: baseline;
`,g=o.default.a`
  padding: 10px 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
  > * {
    margin-left: 8px;
  }
  svg {
    fill: #aaa;
  }
  &:hover {
    color: white;
    svg {
      fill: white;
    }
    p {
      color: white;
    }
  }
`,h=()=>{const{t:t}=a.useTranslation();return e(i).createElement(p,null,e(i).createElement(c,null,e(i).createElement("img",{src:"/grey_logo.png",width:"22px"}),e(i).createElement(f,null,e(i).createElement(d.LogoText,{size:16,lineHeight:18},"Phantom"),e(i).createElement(d.Text,{size:15,lineHeight:18,color:"#8A81F8",weight:500},t("fullPageHeaderBeta")))),e(i).createElement(g,{href:u.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},e(i).createElement(s.HelpIcon,null),e(i).createElement(d.Text,{color:"#AAA",size:16,weight:500,hoverColor:"white"},t("fullPageHeaderHelp"))))}})),l.register("hoJun",(function(e,n){t(e.exports,"ChevronCircle",(function(){return o}));var r=l("hHMPk"),i=l("8FNEt");const o=r.default(i.Circle)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${e=>e.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${e=>e.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${e=>e.top?`top: ${e.top}px;`:""}
    ${e=>e.right?`right: ${e.right}px;`:""}
  }
`}));