"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6654],{64509:(e,t,o)=>{o.d(t,{$n:()=>tR,$w:()=>t7,A3:()=>S,AM:()=>oC,B3:()=>b,BJ:()=>oB,CA:()=>td,Cy:()=>tH,D0:()=>z,DP:()=>K,DZ:()=>tP,Dr:()=>rI,EY:()=>tg,EZ:()=>t3,Ex:()=>tb,GD:()=>op,GE:()=>tu,GG:()=>U,JU:()=>e5,KC:()=>H,M4:()=>Z,Ml:()=>w,NP:()=>X,Nj:()=>r$,PR:()=>T,Pm:()=>P,Q3:()=>E,QY:()=>C,Qx:()=>v,Sc:()=>tA,U1:()=>N,W1:()=>rx,WE:()=>I,WP:()=>ou,Wd:()=>od,XS:()=>ot,Xy:()=>et,Z4:()=>on,ZL:()=>of,Zp:()=>tE,aY:()=>ee,az:()=>tp,bz:()=>G,cF:()=>B,cV:()=>tV,cZ:()=>q,dO:()=>oX,dU:()=>t8,eu:()=>tn,fs:()=>oQ,g5:()=>tk,gK:()=>e1,jt:()=>er,ks:()=>rt,l6:()=>oF,l_:()=>e0,m_:()=>rf,mc:()=>tF,nY:()=>j,oz:()=>rE,q4:()=>R,qW:()=>rg,rX:()=>rS,sU:()=>y,sb:()=>k,so:()=>tw,sx:()=>oN,u4:()=>t5,vE:()=>rc,wb:()=>rN,wj:()=>oy,xA:()=>tO,y$:()=>t$,zd:()=>$});var r=o(56555),n=o(95155),i=o(11748),a=o(12115),d=o(30218),l=o(37849),s=o(96241),c=o(58146),u=o(88334),f=o(69758),p=o(71408),h=o(70189),g=o(47650),m=o(88106);let b=r.B3,v=(0,r.me)(),w=[],y={},x={card:{initial:{scale:.97,willChange:"transform"},hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",duration:.1}},scaleIn:{scale:1},scaleOut:{scale:.97}},children:{hidden:{opacity:0},visible:{opacity:1}},transition:{type:"spring",visualDuration:.2,bounce:.25}};function $(e){return j(e)||I(e)}function k(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function j(e){return k(e)&&"A"===e.nodeName}function S(e){return k(e)&&"INPUT"===e.nodeName}function I(e){return k(e)&&"BUTTON"===e.nodeName}function R(e){return k(e)&&"SELECT"===e.nodeName}function C(e){return k(e)&&"TEXTAREA"===e.nodeName}function E(e,t){return e.contains(t)||e===t}function z(e){return 0===e?0:`${e/16}rem`}function N(e,t,o){return(t?.map(o)||[]).map((t,o)=>0===o?t:{[`@media screen and (min-width: ${e[o-1]}px)`]:t})}function A(e,t){return void 0===e?t||w:Array.isArray(e)?e:[e]}function _(e,t,o=w){if(!Array.isArray(o))throw Error("the property must be array of numbers");if(0===o.length)return null;let{media:n,space:i}=(0,r.JW)(e);return N(n,o,e=>{var o;return o=z(i[e]),t.reduce((e,t)=>(e[t]=o,e),{})})}function W(e,t){let{$size:o,$weight:n}=t,{font:i,media:a}=(0,r.JW)(t.theme),{family:d,sizes:l,weights:s}=i[e],c=n&&s[n]||s.regular,u=l[2],f={position:"relative",fontFamily:d,fontWeight:`${c}`,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return o?[f,...N(a,o,e=>(function(e){let{ascenderHeight:t,descenderHeight:o,fontSize:r,iconSize:n,letterSpacing:i,lineHeight:a}=e,d=t+o,l=a-d,s=2*Math.floor(1.125*r/2)+1;return{fontSize:z(r),lineHeight:`calc(${a} / ${r})`,letterSpacing:z(i),transform:`translateY(${z(o)})`,"&:before":{marginTop:`calc(${z(0-d)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:z((l-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:z((l-n)/2)}}})(l[e]||u))]:(W.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:o,props:t,base:f}),W.warned=!0),[f])}function M(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$align,e=>({textAlign:e}))}function H(e,t){let o,r=(0,i.c)(3);r[0]!==t||r[1]!==e?(o=()=>[A(e,t),JSON.stringify(e??t)],r[0]=t,r[1]=e,r[2]=o):o=r[2];let[n,d]=(0,a.useState)(o),[l,s]=n,c=JSON.stringify(e??t);return c!==s&&d([A(e,t),c]),l}function T(e,t,o){let r,n,d,l=(0,i.c)(9),s=void 0===t?L:t;l[0]!==o||l[1]!==s||l[2]!==e?(r=t=>{if(!e)return;let r=t.target;if(!(r instanceof Node))return;let n=o?.();if(!n||n.contains(r)){for(let e of s().flat())if(e&&(r===e||e.contains(r)))return;e(t)}},l[0]=o,l[1]=s,l[2]=e,l[3]=r):r=l[3];let c=(0,m.J)(r),u=!!e;l[4]!==u||l[5]!==c?(n=()=>{if(!u)return;let e=e=>c(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},l[4]=u,l[5]=c,l[6]=n):n=l[6],l[7]!==u?(d=[u],l[7]=u,l[8]=d):d=l[8],(0,a.useEffect)(n,d),(0,a.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function L(){return w}function F(e,t){let o,r,n=(0,i.c)(6);n[0]!==t||n[1]!==e.current?(o=()=>{e.current?.setCustomValidity(t||"")},n[0]=t,n[1]=e.current,n[2]=o):o=n[2],n[3]!==t||n[4]!==e?(r=[t,e],n[3]=t,n[4]=e,n[5]=r):r=n[5],(0,a.useEffect)(o,r)}let J="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:h.tb,O=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(o,r){let n=t.get(o)||[],i=e.get(o);return t.has(o)||(t.set(o,n),i=({subscribe(e,t){let o=new J(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return o.observe(e),()=>{o.unobserve(e),o.disconnect()}}}).subscribe(o,e=>{for(let t of n)t(e)})),n.push(r),()=>{let e=n.indexOf(r);e>-1&&n.splice(e,1),0===n.length&&i&&i()}}}}();function B(e){let t,o,r=(0,i.c)(3),[n,d]=(0,a.useState)(null);return r[0]!==e?(t=()=>{if(e)return O.subscribe(e,d)},o=[e],r[0]=e,r[1]=t,r[2]=o):(t=r[1],o=r[2]),(0,a.useEffect)(t,o),n}function P(e){let t,o,r,n=(0,i.c)(5);n[0]!==e?(t=t=>e(t),n[0]=e,n[1]=t):t=n[1];let d=(0,m.J)(t);n[2]!==d?(o=()=>{let e=e=>d(e);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},n[2]=d,n[3]=o):o=n[3],n[4]===Symbol.for("react.memo_cache_sentinel")?(r=[],n[4]=r):r=n[4],(0,a.useEffect)(o,r)}function D(e,t){let o,r,n=(0,i.c)(4);return(0,a.useDebugValue)(e),n[0]!==e?(o=t=>{let o=window.matchMedia(e);return o.addEventListener("change",t),()=>o.removeEventListener("change",t)},n[0]=e,n[1]=o):o=n[1],n[2]!==e?(r=()=>window.matchMedia(e).matches,n[2]=e,n[3]=r):r=n[3],(0,a.useSyncExternalStore)(o,r,t)}let V=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function G(e,t){let o=Symbol.for(e);return typeof document>"u"?(0,a.createContext)(t):(V[o]=V[o]||(0,a.createContext)(t),V[o])}let Y=G("@sanity/ui/context/theme",null);function X(e){let t,o,l,s,c=(0,i.c)(15),u=(0,a.useContext)(Y),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),g=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}c[0]!==h||c[1]!==p||c[2]!==g?(e={version:0,theme:h,scheme:p,tone:g},c[0]=h,c[1]=p,c[2]=g,c[3]=e):e=c[3],t=e}let m=t;t:{let e;if(!h){o=null;break t}c[4]!==h||c[5]!==p||c[6]!==g?(e=(0,r.sR)(h,p,g),c[4]=h,c[5]=p,c[6]=g,c[7]=e):e=c[7],o=e}let b=o;if(!b){let e;return c[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,n.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),c[8]=e):e=c[8],e}return c[9]!==f||c[10]!==b?(l=(0,n.jsx)(d.NP,{theme:b,children:f}),c[9]=f,c[10]=b,c[11]=l):l=c[11],c[12]!==l||c[13]!==m?(s=(0,n.jsx)(Y.Provider,{value:m,children:l}),c[12]=l,c[13]=m,c[14]=s):s=c[14],s}function U(){let e=(0,a.useContext)(Y);if(!e)throw Error("useRootTheme(): missing context value");return e}function q(e){let t,o=(0,i.c)(5),{children:r,scheme:a,tone:d}=e,l=U(),s=a||l.scheme;return o[0]!==r||o[1]!==l.theme||o[2]!==s||o[3]!==d?(t=(0,n.jsx)(X,{scheme:s,theme:l.theme,tone:d,children:r}),o[0]=r,o[1]=l.theme,o[2]=s,o[3]=d,o[4]=t):t=o[4],t}function K(){return(0,d.DP)()}function Z(){let e,t=(0,i.c)(2),o=(0,d.DP)();return t[0]!==o?(e=(0,r.JW)(o),t[0]=o,t[1]=e):e=t[1],e}function Q(){return 0}function ee(){let e,t,o=(0,i.c)(2),{media:r}=Z();return o[0]!==r?(t=function(e){let t,o=e.length,r=()=>{if(!t){t=[];for(let n=o;n>-1;n-=1){var r;let o=0===(r=n)?`screen and (max-width: ${e[r]-1}px)`:r===e.length?`screen and (min-width: ${e[r-1]}px)`:`screen and (min-width: ${e[r-1]}px) and (max-width: ${e[r]-1}px)`;t.push({index:n,mq:window.matchMedia(o)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of r())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:o}of r()){let r=()=>{o.matches&&e()};o.addEventListener("change",r),t.push(()=>o.removeEventListener("change",r))}return()=>{for(let e of t)e()}}}}(r),o[0]=r,o[1]=t):t=o[1],e=t,(0,a.useSyncExternalStore)(e.subscribe,e.getSnapshot,Q)}function et(e){return D("(prefers-color-scheme: dark)",void 0===e?eo:e)}function eo(){return!1}function er(e){return D("(prefers-reduced-motion: reduce)",void 0===e?en:e)}function en(){return!1}function ei(e){let{card:t,media:o}=(0,r.JW)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return N(o,e.$border,e=>e?{"&&":{border:n}}:{"&&":{border:0}})}function ea(e){let{card:t,media:o}=(0,r.JW)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return N(o,e.$borderTop,e=>e?{"&&":{borderTop:n}}:{"&&":{borderTop:0}})}function ed(e){let{card:t,media:o}=(0,r.JW)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return N(o,e.$borderRight,e=>e?{"&&":{borderRight:n}}:{"&&":{borderRight:0}})}function el(e){let{card:t,media:o}=(0,r.JW)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return N(o,e.$borderBottom,e=>e?{"&&":{borderBottom:n}}:{"&&":{borderBottom:0}})}function es(e){let{card:t,media:o}=(0,r.JW)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return N(o,e.$borderLeft,e=>e?{"&&":{borderLeft:n}}:{"&&":{borderLeft:0}})}X.displayName="ThemeProvider",q.displayName="ThemeColorProvider";let ec={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eu={content:"content-box",border:"border-box"},ef={stretch:"stretch",fill:"100%"};function ep(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function eh(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$sizing,e=>({boxSizing:eu[e]}))}function eg(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$height,e=>({height:ef[e]}))}function em(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$overflow,e=>({overflow:e}))}let eb={minWidth:0,minHeight:0};function ev(){return[eb,ew]}function ew(e){let{media:t}=(0,r.JW)(e.theme);return e.$flex?N(t,e.$flex,e=>({flex:`${e}`})):w}let ey={"&&:not([hidden])":{display:"flex"}};function ex(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$align,e=>({alignItems:e}))}function e$(e){let{media:t,space:o}=(0,r.JW)(e.theme);return N(t,e.$gap,e=>({gap:e?z(o[e]):void 0}))}function ek(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$wrap,e=>({flexWrap:e}))}function ej(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$justify,e=>({justifyContent:e}))}function eS(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$direction,e=>({flexDirection:e}))}function eI(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function eR(e){let{base:t,border:o,focusRing:r}=e,n=r.offset+r.width,i=0-r.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,o&&eI(o),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let eC={auto:"auto",full:"1 / -1"},eE={auto:"auto",full:"1 / -1"};function ez(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:eC[e]})}function eN(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$rowStart,e=>({gridRowStart:`${e}`}))}function eA(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$rowEnd,e=>({gridRowEnd:`${e}`}))}function e_(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:eE[e]})}function eW(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$columnStart,e=>({gridColumnStart:`${e}`}))}function eM(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$columnEnd,e=>({gridColumnEnd:`${e}`}))}let eH={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eT={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},eL={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function eF(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function eJ(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$autoRows,e=>({gridAutoRows:e&&eL[e]}))}function eO(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$autoCols,e=>({gridAutoColumns:e&&eT[e]}))}function eB(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function eP(e){let{media:t}=(0,r.JW)(e.theme);return N(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function eD(e){let{media:t,space:o}=(0,r.JW)(e.theme);return N(t,e.$gap,e=>({gridGap:e?z(o[e]):void 0}))}function eV(e){let{media:t,space:o}=(0,r.JW)(e.theme);return N(t,e.$gapX,e=>({columnGap:e?z(o[e]):void 0}))}function eG(e){let{media:t,space:o}=(0,r.JW)(e.theme);return N(t,e.$gapY,e=>({rowGap:e?z(o[e]):void 0}))}function eY(e){let{$fontSize:t,$iconLeft:o,$iconRight:n,$padding:i,$space:a}=e,{font:d,media:l,space:s}=(0,r.JW)(e.theme),c=Math.max(i.length,a.length,t.length),u=[],f=[],p=[];for(let e=0;e<c;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===i[e]?u[e-1]:i[e],f[e]=void 0===a[e]?f[e-1]:a[e];return N(l,u,(e,t)=>{let r=d.text.sizes[p[t]]||d.text.sizes[2],i=r.lineHeight-r.ascenderHeight-r.descenderHeight,a=s[u[t]],l=s[f[t]],c={paddingTop:z(a-r.ascenderHeight),paddingRight:z(a),paddingBottom:z(a-r.descenderHeight),paddingLeft:z(a)};return n&&(c.paddingRight=z(a+i+l)),o&&(c.paddingLeft=z(a+i+l)),c})}function eX(e){return eY({...e,$iconRight:!0})}let eU=(0,d.AH)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function eq(){return eU}function eK(e){let{$scheme:t,$tone:o,$weight:n}=e,{color:i,font:a}=(0,r.JW)(e.theme);return(0,d.AH)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${n&&a.text.weights[n]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${o}'] {
      --input-fg-color: ${i.input.default.enabled.fg};
      --input-placeholder-color: ${i.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${i.input.default.enabled.fg};
        --input-placeholder-color: ${i.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${i.input.default.disabled.fg};
        --input-placeholder-color: ${i.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${i.input.invalid.enabled.fg};
        --input-placeholder-color: ${i.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${i.input.default.readOnly.fg};
        --input-placeholder-color: ${i.input.default.readOnly.placeholder};
      }
    }
  `}function eZ(e){let{font:t,media:o}=(0,r.JW)(e.theme);return N(o,e.$fontSize,e=>{let o=t.text.sizes[e]||t.text.sizes[2];return{fontSize:z(o.fontSize),lineHeight:`${o.lineHeight/o.fontSize}`}})}function eQ(e){let{$hasPrefix:t,$hasSuffix:o,$scheme:n,$tone:i,$unstableDisableFocusRing:a}=e,{color:l,input:s}=(0,r.JW)(e.theme);return(0,d.AH)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${o?0:void 0};
    border-bottom-right-radius: ${o?0:void 0};

    &[data-scheme='${n}'][data-tone='${i}'] {
      --card-bg-color: ${l.input.default.enabled.bg};
      --card-fg-color: ${l.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${eI({color:l.input.default.enabled.border,width:s.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${l.input.invalid.enabled.bg};
        --card-fg-color: ${l.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${eI({color:l.input.invalid.enabled.border,width:s.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:eR({border:{color:l.input.default.enabled.border,width:s.border.width},focusRing:s.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:eR({focusRing:s.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${l.input.default.disabled.bg} !important;
        --card-fg-color: ${l.input.default.disabled.fg} !important;
        --card-icon-color: ${l.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${eI({color:l.input.default.disabled.border,width:s.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${l.input.invalid.disabled.bg} !important;
        --card-fg-color: ${l.input.invalid.disabled.fg} !important;
        --card-icon-color: ${l.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${eI({color:l.input.invalid.disabled.border,width:s.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${l.input.default.readOnly.bg} !important;
        --card-fg-color: ${l.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${l.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${l.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${l.input.default.hovered.bg};
          --card-fg-color: ${l.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${l.input.invalid.hovered.bg};
          --card-fg-color: ${l.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${eI({color:l.input.default.hovered.border,width:s.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${eI({color:l.input.invalid.hovered.border,width:s.border.width})};
        }
      }
    }
  `}function e0(e){let{theme:t}=e;return[_(t,["padding"],e.$padding),_(t,["paddingLeft","paddingRight"],e.$paddingX),_(t,["paddingTop","paddingBottom"],e.$paddingY),_(t,["paddingTop"],e.$paddingTop),_(t,["paddingRight"],e.$paddingRight),_(t,["paddingBottom"],e.$paddingBottom),_(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function e1(e){let{media:t,radius:o}=(0,r.JW)(e.theme);return N(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=z(o[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function e2(e,t){return`${e.map(z).join(" ")} ${t}`}let e4=d.I4.span.withConfig({displayName:"SpanWithTextOverflow",componentId:"sc-ol2i3b-0"})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,e3=d.I4.div.withConfig({displayName:"StyledLabel",componentId:"sc-1luap7z-0"})(function(e){return W("label",e)},M,function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.JW)(e.theme);return(0,d.AH)`
    text-transform: uppercase;

    ${t&&(0,d.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,d.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),e5=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p=(0,i.c)(22);p[0]!==e?({accent:o,align:r,children:a,muted:l,size:s,textOverflow:c,weight:u,...d}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=a,p[4]=d,p[5]=l,p[6]=s,p[7]=c,p[8]=u):(o=p[1],r=p[2],a=p[3],d=p[4],l=p[5],s=p[6],c=p[7],u=p[8]);let h=void 0!==l&&l,g=void 0===s?2:s,m=a;if("ellipsis"===c){let e;p[9]!==m?(e=(0,n.jsx)(e4,{children:m}),p[9]=m,p[10]=e):e=p[10],m=e}else{let e;p[11]!==m?(e=(0,n.jsx)("span",{children:m}),p[11]=m,p[12]=e):e=p[12],m=e}let b=H(r),v=H(g);return p[13]!==o||p[14]!==m||p[15]!==h||p[16]!==t||p[17]!==d||p[18]!==b||p[19]!==v||p[20]!==u?(f=(0,n.jsx)(e3,{"data-ui":"Label",...d,$accent:o,$align:b,$muted:h,$size:v,$weight:u,ref:t,children:m}),p[13]=o,p[14]=m,p[15]=h,p[16]=t,p[17]=d,p[18]=b,p[19]=v,p[20]=u,p[21]=f):f=p[21],f});e5.displayName="ForwardRef(Label)";let e6={root:function(e){let{$color:t}=e,{avatar:o}=(0,r.JW)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:"0.5"},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:eR({focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}},arrow:function(){return{position:"absolute",boxSizing:"border-box",zIndex:"0",opacity:"0",transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:"0"},"[data-arrow-position='top'] > &":{opacity:"1",transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:"1",transform:"rotate(-180deg)"}}},bgStroke:function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}},stroke:function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}},initials:function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}},image:function(){return{position:"relative"}}},e7=d.I4.div.withConfig({displayName:"StyledAvatar",componentId:"sc-1rj7kl0-0"})(function(e){let{avatar:t,media:o}=(0,r.JW)(e.theme);return N(o,e.$size,e=>{let o=t.sizes[e]||t.sizes[0];return{width:z(o.size),height:z(o.size),borderRadius:z(o.size/2),"&>svg":{width:z(o.size),height:z(o.size),borderRadius:z(o.size/2)}}})},e6.root),e8=d.I4.div.withConfig({displayName:"Arrow",componentId:"sc-1rj7kl0-1"})(e6.arrow),e9=d.I4.ellipse.withConfig({displayName:"BgStroke",componentId:"sc-1rj7kl0-2"})(e6.bgStroke),te=d.I4.ellipse.withConfig({displayName:"Stroke",componentId:"sc-1rj7kl0-3"})(e6.stroke),tt=d.I4.div.withConfig({displayName:"Initials",componentId:"sc-1rj7kl0-4"})(e6.initials),to=(0,d.I4)(e5).withConfig({displayName:"InitialsLabel",componentId:"sc-1rj7kl0-5"})({color:"inherit"}),tr=d.I4.svg.withConfig({displayName:"AvatarImage",componentId:"sc-1rj7kl0-6"})(e6.image),tn=(0,a.forwardRef)(function(e,t){let o,r,d,s,c,u,f,p,h,g,m,b,v,w,y,x,$,k,j,S,I,R,C,E=(0,i.c)(52);E[0]!==e?({__unstable_hideInnerStroke:o,as:s,color:h,src:p,title:b,initials:c,onImageLoadError:u,arrowPosition:d,animateArrowFrom:r,status:g,size:m,...f}=e,E[0]=e,E[1]=o,E[2]=r,E[3]=d,E[4]=s,E[5]=c,E[6]=u,E[7]=f,E[8]=p,E[9]=h,E[10]=g,E[11]=m,E[12]=b):(o=E[1],r=E[2],d=E[3],s=E[4],c=E[5],u=E[6],f=E[7],p=E[8],h=E[9],g=E[10],m=E[11],b=E[12]);let z=void 0===h?"gray":h,N=void 0===g?"online":g,A=void 0===m?1:m,{avatar:_}=Z(),W=l.isValidElementType(s)?s:"div",M=H(A),T=(_.sizes[M[0]]||_.sizes[0]).size,L=T/2,F=(0,a.useId)(),[J,O]=(0,a.useState)(r||d||"inside"),[B,P]=(0,a.useState)(!1),D=`avatar-image-${F}`;E[13]!==J||E[14]!==d?(v=()=>{if(J===d)return;let e=requestAnimationFrame(()=>O(d));return()=>cancelAnimationFrame(e)},w=[J,d],E[13]=J,E[14]=d,E[15]=v,E[16]=w):(v=E[15],w=E[16]),(0,a.useEffect)(v,w),E[17]!==p?(y=()=>{p&&P(!1)},x=[p],E[17]=p,E[18]=y,E[19]=x):(y=E[18],x=E[19]),(0,a.useEffect)(y,x),E[20]!==u?($=()=>{P(!0),u&&u(Error("Avatar: the image failed to load"))},E[20]=u,E[21]=$):$=E[21];let V=$;E[22]!==M?(j=M.map(ti),E[22]=M,E[23]=j):j=E[23],k=j;let G="string"==typeof W?W:void 0;return E[24]!==z?(S=(0,n.jsx)(e8,{children:(0,n.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,n.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:z})})}),E[24]=z,E[25]=S):S=E[25],E[26]!==o||E[27]!==L||E[28]!==T||E[29]!==V||E[30]!==B||E[31]!==D||E[32]!==p?(I=!B&&p&&(0,n.jsxs)(tr,{viewBox:`0 0 ${T} ${T}`,fill:"none",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:D,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,n.jsx)("image",{href:p,width:"1",height:"1",onError:V})})}),(0,n.jsx)("circle",{cx:L,cy:L,r:L,fill:`url(#${D})`}),!o&&(0,n.jsx)(e9,{cx:L,cy:L,rx:L,ry:L,vectorEffect:"non-scaling-stroke"}),(0,n.jsx)(te,{cx:L,cy:L,rx:L,ry:L,vectorEffect:"non-scaling-stroke"})]}),E[26]=o,E[27]=L,E[28]=T,E[29]=V,E[30]=B,E[31]=D,E[32]=p,E[33]=I):I=E[33],E[34]!==B||E[35]!==c||E[36]!==k||E[37]!==p?(R=(B||!p)&&c&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(tt,{children:(0,n.jsx)(to,{forwardedAs:"span",size:k,weight:"medium",children:c})})}),E[34]=B,E[35]=c,E[36]=k,E[37]=p,E[38]=R):R=E[38],E[39]!==J||E[40]!==W||E[41]!==z||E[42]!==t||E[43]!==f||E[44]!==M||E[45]!==N||E[46]!==G||E[47]!==S||E[48]!==I||E[49]!==R||E[50]!==b?(C=(0,n.jsxs)(e7,{as:W,"data-as":G,"data-ui":"Avatar",...f,$color:z,$size:M,"aria-label":b,"data-arrow-position":J,"data-status":N,ref:t,title:b,children:[S,I,R]}),E[39]=J,E[40]=W,E[41]=z,E[42]=t,E[43]=f,E[44]=M,E[45]=N,E[46]=G,E[47]=S,E[48]=I,E[49]=R,E[50]=b,E[51]=C):C=E[51],C});function ti(e){return 1===e?1:2===e?3:5*(3===e)}tn.displayName="ForwardRef(Avatar)";let ta=d.I4.div.withConfig({displayName:"StyledAvatarCounter",componentId:"sc-1ydx86y-0"})(function(e){let{avatar:t,media:o}=(0,r.JW)(e.theme);return N(o,e.$size,e=>{let o=t.sizes[e];return o?{borderRadius:z(o.size/2),minWidth:z(o.size),height:z(o.size)}:y})},function(e){let{space:t}=(0,r.JW)(e.theme);return(0,d.AH)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${z(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),td=(0,a.forwardRef)(function(e,t){let o,r,a,d,l=(0,i.c)(9),{count:s,size:c}=e,u=H(void 0===c?1:c);return l[0]!==u?(r=u.map(tl),l[0]=u,l[1]=r):r=l[1],o=r,l[2]!==s||l[3]!==o?(a=(0,n.jsx)(e5,{as:"span",size:o,weight:"medium",children:s}),l[2]=s,l[3]=o,l[4]=a):a=l[4],l[5]!==t||l[6]!==u||l[7]!==a?(d=(0,n.jsx)(ta,{$size:u,"data-ui":"AvatarCounter",ref:t,children:a}),l[5]=t,l[6]=u,l[7]=a,l[8]=d):d=l[8],d});function tl(e){return 1===e?1:2===e?3:5*(3===e)}td.displayName="ForwardRef(AvatarCounter)";let ts=(0,d.AH)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,tc=d.I4.div.withConfig({displayName:"StyledAvatarStack",componentId:"sc-cysmbb-0"})(function(e){let{avatar:t,media:o}=(0,r.JW)(e.theme);return N(o,e.$size,e=>{let o=t.sizes[e];return o?{"& > div + div":{marginLeft:z(o.distance)}}:y})},function(){return ts}),tu=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u=(0,i.c)(15);u[0]!==e?({children:o,maxLength:d,size:l,...r}=e,u[0]=e,u[1]=o,u[2]=r,u[3]=d,u[4]=l):(o=u[1],r=u[2],d=u[3],l=u[4]);let f=void 0===d?4:d,p=void 0===l?1:l,h=a.Children.toArray(o).filter(a.isValidElement),g=Math.max(f,0),m=H(p),b=h.length,v=b-(g-1),w=v>1?h.slice(v,b):h,y=0===b&&(0,n.jsx)("div",{children:(0,n.jsx)(td,{count:b,size:m})}),x=0!==b&&v>1&&(0,n.jsx)("div",{children:(0,n.jsx)(td,{count:v,size:m})});u[5]!==m?(s=(e,t)=>(0,n.jsx)("div",{children:(0,a.cloneElement)(e,{size:m})},String(t)),u[5]=m,u[6]=s):s=u[6];let $=w.map(s);return u[7]!==tc||u[8]!==t||u[9]!==r||u[10]!==m||u[11]!==y||u[12]!==x||u[13]!==$?(c=(0,n.jsxs)(tc,{"data-ui":"AvatarStack",...r,ref:t,$size:m,children:[y,x,$]}),u[7]=tc,u[8]=t,u[9]=r,u[10]=m,u[11]=y,u[12]=x,u[13]=$,u[14]=c):c=u[14],c});tu.displayName="ForwardRef(AvatarStack)";let tf=d.I4.div.withConfig({displayName:"StyledBox",componentId:"sc-1hhky9f-0"})(function(){return ec},ev,function(){return[eh,eg,em,ep]},function(){return[ez,eN,eA,e_,eW,eM]},function(e){let{theme:t}=e;return[_(t,["margin"],e.$margin),_(t,["marginLeft","marginRight"],e.$marginX),_(t,["marginTop","marginBottom"],e.$marginY),_(t,["marginTop"],e.$marginTop),_(t,["marginRight"],e.$marginRight),_(t,["marginBottom"],e.$marginBottom),_(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},e0),tp=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p,h,g,m,b,v,w,y,x,$,k,j,S,I,R,C,E,z,N,A=(0,i.c)(59);A[0]!==e?({as:R,column:o,columnStart:a,columnEnd:r,display:C,flex:d,height:l,margin:E,marginX:p,marginY:h,marginTop:f,marginRight:u,marginBottom:s,marginLeft:c,overflow:g,padding:z,paddingX:y,paddingY:x,paddingTop:w,paddingRight:v,paddingBottom:m,paddingLeft:b,row:k,rowStart:S,rowEnd:j,sizing:I,...$}=e,A[0]=e,A[1]=o,A[2]=r,A[3]=a,A[4]=d,A[5]=l,A[6]=s,A[7]=c,A[8]=u,A[9]=f,A[10]=p,A[11]=h,A[12]=g,A[13]=m,A[14]=b,A[15]=v,A[16]=w,A[17]=y,A[18]=x,A[19]=$,A[20]=k,A[21]=j,A[22]=S,A[23]=I,A[24]=R,A[25]=C,A[26]=E,A[27]=z):(o=A[1],r=A[2],a=A[3],d=A[4],l=A[5],s=A[6],c=A[7],u=A[8],f=A[9],p=A[10],h=A[11],g=A[12],m=A[13],b=A[14],v=A[15],w=A[16],y=A[17],x=A[18],$=A[19],k=A[20],j=A[21],S=A[22],I=A[23],R=A[24],C=A[25],E=A[26],z=A[27]);let _=void 0===R?"div":R,W=void 0===C?"block":C,M=void 0===E?0:E,T=void 0===z?0:z,L="string"==typeof _?_:void 0,F=H(o),J=H(a),O=H(r),B=H(W),P=H(d),D=H(l),V=H(M),G=H(p),Y=H(h),X=H(f),U=H(u),q=H(s),K=H(c),Z=H(g),Q=H(T),ee=H(y),et=H(x),eo=H(w),er=H(v),en=H(m),ei=H(b),ea=H(k),ed=H(S),el=H(j),es=H(I);return A[28]!==_||A[29]!==e.children||A[30]!==t||A[31]!==$||A[32]!==D||A[33]!==V||A[34]!==G||A[35]!==Y||A[36]!==X||A[37]!==U||A[38]!==q||A[39]!==K||A[40]!==Z||A[41]!==Q||A[42]!==ee||A[43]!==et||A[44]!==eo||A[45]!==er||A[46]!==en||A[47]!==ei||A[48]!==ea||A[49]!==ed||A[50]!==el||A[51]!==es||A[52]!==L||A[53]!==F||A[54]!==J||A[55]!==O||A[56]!==B||A[57]!==P?(N=(0,n.jsx)(tf,{"data-as":L,"data-ui":"Box",...$,$column:F,$columnStart:J,$columnEnd:O,$display:B,$flex:P,$height:D,$margin:V,$marginX:G,$marginY:Y,$marginTop:X,$marginRight:U,$marginBottom:q,$marginLeft:K,$overflow:Z,$padding:Q,$paddingX:ee,$paddingY:et,$paddingTop:eo,$paddingRight:er,$paddingBottom:en,$paddingLeft:ei,$row:ea,$rowStart:ed,$rowEnd:el,$sizing:es,as:_,ref:t,children:e.children}),A[28]=_,A[29]=e.children,A[30]=t,A[31]=$,A[32]=D,A[33]=V,A[34]=G,A[35]=Y,A[36]=X,A[37]=U,A[38]=q,A[39]=K,A[40]=Z,A[41]=Q,A[42]=ee,A[43]=et,A[44]=eo,A[45]=er,A[46]=en,A[47]=ei,A[48]=ea,A[49]=ed,A[50]=el,A[51]=es,A[52]=L,A[53]=F,A[54]=J,A[55]=O,A[56]=B,A[57]=P,A[58]=N):N=A[58],N});tp.displayName="ForwardRef(Box)";let th=d.I4.div.withConfig({displayName:"StyledText",componentId:"sc-11ov82j-0"})(function(e){return W("text",e)},M,function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.JW)(e.theme);return(0,d.AH)`
    color: var(--card-fg-color);

    ${t&&(0,d.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,d.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${n.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),tg=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p,h=(0,i.c)(22);h[0]!==e?({accent:d,align:o,children:r,muted:l,size:s,textOverflow:c,weight:u,...a}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=a,h[4]=d,h[5]=l,h[6]=s,h[7]=c,h[8]=u):(o=h[1],r=h[2],a=h[3],d=h[4],l=h[5],s=h[6],c=h[7],u=h[8]);let g=void 0!==d&&d,m=void 0!==l&&l,b=void 0===s?2:s,v=r;if("ellipsis"===c){let e;h[9]!==v?(e=(0,n.jsx)(e4,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let w=H(o),y=H(b);return h[11]!==v?(f=(0,n.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==g||h[14]!==m||h[15]!==t||h[16]!==a||h[17]!==w||h[18]!==y||h[19]!==f||h[20]!==u?(p=(0,n.jsx)(th,{"data-ui":"Text",...a,$accent:g,$align:w,$muted:m,ref:t,$size:y,$weight:u,children:f}),h[13]=g,h[14]=m,h[15]=t,h[16]=a,h[17]=w,h[18]=y,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});tg.displayName="ForwardRef(Text)";let tm=(0,d.I4)(tp).withConfig({displayName:"StyledBadge",componentId:"sc-5u140l-0"})(e1,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),tb=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f=(0,i.c)(17);if(f[0]!==e){let{children:t,fontSize:n,mode:i,padding:c,radius:u,tone:p,...h}=e;o=t,a=n,d=c,l=u,s=p,r=h,f[0]=e,f[1]=o,f[2]=r,f[3]=a,f[4]=d,f[5]=l,f[6]=s}else o=f[1],r=f[2],a=f[3],d=f[4],l=f[5],s=f[6];let p=void 0===a?1:a,h=void 0===d?1:d,g=void 0===s?"default":s,m=H(void 0===l?"full":l),b=H(h);return f[7]!==o||f[8]!==p?(c=(0,n.jsx)(tg,{size:p,children:o}),f[7]=o,f[8]=p,f[9]=c):c=f[9],f[10]!==t||f[11]!==r||f[12]!==m||f[13]!==b||f[14]!==c||f[15]!==g?(u=(0,n.jsx)(tm,{"data-ui":"Badge",...r,$tone:g,$radius:m,padding:b,ref:t,children:c}),f[10]=t,f[11]=r,f[12]=m,f[13]=b,f[14]=c,f[15]=g,f[16]=u):u=f[16],u});tb.displayName="ForwardRef(Badge)";let tv=(0,d.I4)(tp).withConfig({displayName:"StyledFlex",componentId:"sc-oxesg3-0"})(ev,function(){return[ey,ex,e$,ek,ej,eS]}),tw=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f=(0,i.c)(17);f[0]!==e?({align:o,as:r,direction:s,gap:a,justify:d,wrap:c,...l}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=a,f[4]=d,f[5]=l,f[6]=s,f[7]=c):(o=f[1],r=f[2],a=f[3],d=f[4],l=f[5],s=f[6],c=f[7]);let p=void 0===s?"row":s,h=H(o),g=H(p),m=H(a),b=H(d),v=H(c);return f[8]!==r||f[9]!==t||f[10]!==l||f[11]!==h||f[12]!==g||f[13]!==m||f[14]!==b||f[15]!==v?(u=(0,n.jsx)(tv,{"data-ui":"Flex",...l,$align:h,$direction:g,$gap:m,$justify:b,$wrap:v,forwardedAs:r,ref:t}),f[8]=r,f[9]=t,f[10]=l,f[11]=h,f[12]=g,f[13]=m,f[14]=b,f[15]=v,f[16]=u):u=f[16],u});tw.displayName="ForwardRef(Flex)";let ty=(0,d.i7)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,tx=(0,d.I4)(tg).withConfig({displayName:"StyledSpinner",componentId:"sc-124hnd0-0"})`& > span > svg{animation:${ty} 500ms linear infinite;}`,t$=(0,a.forwardRef)(function(e,t){let o,r,a=(0,i.c)(4);return a[0]===Symbol.for("react.memo_cache_sentinel")?(o=(0,n.jsx)(s.Nl1,{}),a[0]=o):o=a[0],a[1]!==e||a[2]!==t?(r=(0,n.jsx)(tx,{"data-ui":"Spinner",...e,ref:t,children:o}),a[1]=e,a[2]=t,a[3]=r):r=a[3],r});function tk(e,t,o=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":o?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function tj(...e){return e.filter(Boolean).join(",")}t$.displayName="ForwardRef(Spinner)";let tS=d.I4.button.withConfig({displayName:"StyledButton",componentId:"sc-aaekt4-0"})(e1,function(e){let{$width:t}=e,{style:o}=(0,r.JW)(e.theme);return(0,d.AH)`
    ${o?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,d.AH)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:o,color:n,style:i}=(0,r.JW)(e.theme),a="ghost"===e.$mode,d=n.button[t]||n.button.default,l=d[e.$tone]||d.default,s={width:o.border.width,color:"var(--card-border-color)"},c=void 0;return[tk(n,l.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:eI(s),'&:disabled, &[data-disabled="true"]':tk(n,l.disabled),"&:not([data-disabled='true'])":{boxShadow:tj(eI(s),a?c:void 0),"&:focus":{boxShadow:eR({base:n,border:{width:2,color:n.bg},focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:tj(eI(s),a?c:void 0)},"@media (hover: hover)":{"&:hover":tk(n,l.hovered),"&:active":tk(n,l.pressed),"&[data-hovered]":tk(n,l.hovered)},"&[data-selected]":tk(n,l.pressed)}},i?.button?.root].filter(Boolean)}),tI=d.I4.div.withConfig({displayName:"LoadingBox",componentId:"sc-aaekt4-1"})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,tR=(0,a.forwardRef)(function(e,t){let o,r,d,s,c,u,f,p,h,g,m,b,v,w,y,x,$,k,j,S,I,R,C,E,z,N,A,_,W,M,T,L,F=(0,i.c)(66);F[0]!==e?({children:d,disabled:s,fontSize:w,icon:o,iconRight:r,justify:y,loading:c,mode:x,padding:$,paddingX:g,paddingY:m,paddingTop:h,paddingBottom:u,paddingLeft:f,paddingRight:p,radius:k,selected:v,space:j,text:C,textAlign:E,textWeight:z,tone:S,type:I,muted:R,width:N,...b}=e,F[0]=e,F[1]=o,F[2]=r,F[3]=d,F[4]=s,F[5]=c,F[6]=u,F[7]=f,F[8]=p,F[9]=h,F[10]=g,F[11]=m,F[12]=b,F[13]=v,F[14]=w,F[15]=y,F[16]=x,F[17]=$,F[18]=k,F[19]=j,F[20]=S,F[21]=I,F[22]=R,F[23]=C,F[24]=E,F[25]=z,F[26]=N):(o=F[1],r=F[2],d=F[3],s=F[4],c=F[5],u=F[6],f=F[7],p=F[8],h=F[9],g=F[10],m=F[11],b=F[12],v=F[13],w=F[14],y=F[15],x=F[16],$=F[17],k=F[18],j=F[19],S=F[20],I=F[21],R=F[22],C=F[23],E=F[24],z=F[25],N=F[26]);let J=void 0===w?1:w,O=void 0===y?"center":y,B=void 0===x?"default":x,P=void 0===$?3:$,D=void 0===k?2:k,V=void 0===j?3:j,G=void 0===S?"default":S,Y=void 0===I?"button":I,X=void 0!==R&&R,{button:U}=Z(),q=H(O),K=H(P),Q=H(g),ee=H(m),et=H(h),eo=H(u),er=H(f),en=H(p),ei=H(D),ea=H(V);F[27]!==K||F[28]!==eo||F[29]!==er||F[30]!==en||F[31]!==et||F[32]!==Q||F[33]!==ee?(_={padding:K,paddingX:Q,paddingY:ee,paddingTop:et,paddingBottom:eo,paddingLeft:er,paddingRight:en},F[27]=K,F[28]=eo,F[29]=er,F[30]=en,F[31]=et,F[32]=Q,F[33]=ee,F[34]=_):_=F[34],A=_;let ed=!!(c||s),el=v?"":void 0,es=!!(c||s);return F[35]!==c?(W=!!c&&(0,n.jsx)(tI,{children:(0,n.jsx)(t$,{})}),F[35]=c,F[36]=W):W=F[36],F[37]!==o||F[38]!==r||F[39]!==A||F[40]!==U||F[41]!==J||F[42]!==q||F[43]!==X||F[44]!==ea||F[45]!==C||F[46]!==E||F[47]!==z?(M=(o||C||r)&&(0,n.jsx)(tp,{as:"span",...A,children:(0,n.jsxs)(tw,{as:"span",justify:q,gap:ea,children:[o&&(0,n.jsxs)(tg,{size:J,children:[(0,a.isValidElement)(o)&&o,(0,l.isValidElementType)(o)&&(0,n.jsx)(o,{})]}),C&&(0,n.jsx)(tp,{children:(0,n.jsx)(tg,{muted:X,align:E,size:J,textOverflow:"ellipsis",weight:z??U.textWeight,children:C})}),r&&(0,n.jsxs)(tg,{size:J,children:[(0,a.isValidElement)(r)&&r,(0,l.isValidElementType)(r)&&(0,n.jsx)(r,{})]})]})}),F[37]=o,F[38]=r,F[39]=A,F[40]=U,F[41]=J,F[42]=q,F[43]=X,F[44]=ea,F[45]=C,F[46]=E,F[47]=z,F[48]=M):M=F[48],F[49]!==A||F[50]!==d?(T=d&&(0,n.jsx)(tp,{as:"span",...A,children:d}),F[49]=A,F[50]=d,F[51]=T):T=F[51],F[52]!==B||F[53]!==ei||F[54]!==t||F[55]!==b||F[56]!==ed||F[57]!==el||F[58]!==es||F[59]!==W||F[60]!==M||F[61]!==T||F[62]!==G||F[63]!==Y||F[64]!==N?(L=(0,n.jsxs)(tS,{"data-ui":"Button",...b,$mode:B,$radius:ei,$tone:G,"data-disabled":ed,"data-selected":el,disabled:es,ref:t,type:Y,$width:N,children:[W,M,T]}),F[52]=B,F[53]=ei,F[54]=t,F[55]=b,F[56]=ed,F[57]=el,F[58]=es,F[59]=W,F[60]=M,F[61]=T,F[62]=G,F[63]=Y,F[64]=N,F[65]=L):L=F[65],L});tR.displayName="ForwardRef(Button)";let tC=(0,d.I4)(tp).withConfig({displayName:"StyledCard",componentId:"sc-osnro2-0"})(function(){return[ei,ea,ed,el,es]},e1,function(e){let{card:t,media:o,shadow:n}=(0,r.JW)(e.theme);return N(o,e.$shadow,e=>(function(e,t=1){if(!e)return y;let o=`0 0 0 ${z(t)} var(--card-shadow-outline-color)`,r=e2(e.umbra,"var(--card-shadow-umbra-color)"),n=e2(e.penumbra,"var(--card-shadow-penumbra-color)"),i=e2(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${o}, ${r}, ${n}, ${i}`}})(n[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:o}=(0,r.JW)(e.theme);return(0,d.AH)`
    ${t&&(0,d.AH)`
      background-size: ${o[3]}px ${o[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:o,$muted:n}=e,{card:i,color:a,style:l}=(0,r.JW)(e.theme),s={width:i.border.width,color:"var(--card-border-color)"};return(0,d.AH)`
    color-scheme: ${a._dark?"dark":"light"};

    ${tk(a,a,t)}

    background-color: ${n?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${tk(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${tk(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${tk(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${tk(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${tk(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?eR({base:a,border:s,focusRing:i.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${tk(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${tk(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${tk(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${tk(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${tk(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?eR({base:a,border:s,focusRing:i.focusRing}):void 0};
        }
      }
    }

    ${l?.card?.root}
  `}(e)]}),tE=(0,a.forwardRef)(function(e,t){let o,r,a,d,s,c,u,f,p,h,g,m,b,v,w,y,x,$,k=(0,i.c)(42);k[0]!==e?({__unstable_checkered:b,__unstable_focusRing:v,as:o,border:r,borderTop:c,borderRight:s,borderBottom:a,borderLeft:d,muted:u,pressed:f,radius:w,scheme:h,selected:g,shadow:m,tone:y,...p}=e,k[0]=e,k[1]=o,k[2]=r,k[3]=a,k[4]=d,k[5]=s,k[6]=c,k[7]=u,k[8]=f,k[9]=p,k[10]=h,k[11]=g,k[12]=m,k[13]=b,k[14]=v,k[15]=w,k[16]=y):(o=k[1],r=k[2],a=k[3],d=k[4],s=k[5],c=k[6],u=k[7],f=k[8],p=k[9],h=k[10],g=k[11],m=k[12],b=k[13],v=k[14],w=k[15],y=k[16]);let j=void 0!==b&&b,S=void 0!==v&&v,I=void 0===w?0:w,R=void 0===y?"default":y,C=(0,l.isValidElementType)(o)?o:"div",E=U(),z="inherit"===R?E.tone:R,N="string"==typeof C?C:void 0,A=E.scheme,_=H(r),W=H(c),M=H(s),T=H(a),L=H(d),F=H(I),J=H(m),O=j?"":void 0,B=f?"":void 0,P=g?"":void 0;return k[17]!==C||k[18]!==j||k[19]!==S||k[20]!==u||k[21]!==t||k[22]!==p||k[23]!==E.scheme||k[24]!==g||k[25]!==L||k[26]!==F||k[27]!==J||k[28]!==O||k[29]!==B||k[30]!==P||k[31]!==N||k[32]!==_||k[33]!==W||k[34]!==M||k[35]!==T||k[36]!==z?(x=(0,n.jsx)(tC,{"data-as":N,"data-scheme":A,"data-ui":"Card","data-tone":z,...p,$border:_,$borderTop:W,$borderRight:M,$borderBottom:T,$borderLeft:L,$checkered:j,$focusRing:S,$muted:u,$radius:F,$shadow:J,$tone:z,"data-checkered":O,"data-pressed":B,"data-selected":P,forwardedAs:C,ref:t,selected:g}),k[17]=C,k[18]=j,k[19]=S,k[20]=u,k[21]=t,k[22]=p,k[23]=E.scheme,k[24]=g,k[25]=L,k[26]=F,k[27]=J,k[28]=O,k[29]=B,k[30]=P,k[31]=N,k[32]=_,k[33]=W,k[34]=M,k[35]=T,k[36]=z,k[37]=x):x=k[37],k[38]!==h||k[39]!==x||k[40]!==z?($=(0,n.jsx)(q,{scheme:h,tone:z,children:x}),k[38]=h,k[39]=x,k[40]=z,k[41]=$):$=k[41],$});tE.displayName="ForwardRef(Card)";let tz=d.I4.div.withConfig({displayName:"StyledCheckbox",componentId:"sc-1l5mt2l-0"})(function(){return(0,d.AH)`
    position: relative;
    display: inline-block;
  `}),tN=d.I4.input.withConfig({displayName:"Input",componentId:"sc-1l5mt2l-1"})(function(e){let{color:t,input:o,radius:n}=(0,r.JW)(e.theme),{focusRing:i}=o.checkbox;return(0,d.AH)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${z(o.checkbox.size)};
      width: ${z(o.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${eI({color:t.input.default.enabled.border,width:o.border.width})};
      border-radius: ${z(n[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${eI({color:t.input.default.enabled.fg,width:o.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${eR({focusRing:i})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${eR({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${eI({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${eI({width:o.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${eI({width:o.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),tA=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,u,f,p,h,g,m,b,v,w,y=(0,i.c)(25);y[0]!==e?({checked:o,className:r,disabled:l,indeterminate:c,customValidity:d,readOnly:u,style:p,...f}=e,y[0]=e,y[1]=o,y[2]=r,y[3]=d,y[4]=l,y[5]=c,y[6]=u,y[7]=f,y[8]=p):(o=y[1],r=y[2],d=y[3],l=y[4],c=y[5],u=y[6],f=y[7],p=y[8]);let x=(0,a.useRef)(null);y[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>x.current,y[9]=h):h=y[9],(0,a.useImperativeHandle)(t,h),y[10]!==c?(g=()=>{x.current&&(x.current.indeterminate=c||!1)},m=[c],y[10]=c,y[11]=g,y[12]=m):(g=y[11],m=y[12]),(0,a.useEffect)(g,m),F(x,d);let $=!l&&u?"":void 0,k=d?"":void 0,j=l||u;return y[13]!==o||y[14]!==u||y[15]!==f||y[16]!==$||y[17]!==k||y[18]!==j?(b=(0,n.jsx)(tN,{"data-read-only":$,"data-error":k,...f,checked:o,disabled:j,type:"checkbox",readOnly:u,ref:x}),y[13]=o,y[14]=u,y[15]=f,y[16]=$,y[17]=k,y[18]=j,y[19]=b):b=y[19],y[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,n.jsxs)("span",{children:[(0,n.jsx)(s.Nrt,{}),(0,n.jsx)(s.YPx,{})]}),y[20]=v):v=y[20],y[21]!==r||y[22]!==p||y[23]!==b?(w=(0,n.jsxs)(tz,{className:r,"data-ui":"Checkbox",style:p,children:[b,v]}),y[21]=r,y[22]=p,y[23]=b,y[24]=w):w=y[24],w});function t_({theme:e}){let{color:{syntax:t}}=(0,r.JW)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}tA.displayName="ForwardRef(Checkbox)";let tW=(0,a.lazy)(()=>Promise.all([o.e(9849),o.e(1931)]).then(o.bind(o,51931))),tM=d.I4.pre.withConfig({displayName:"StyledCode",componentId:"sc-4dymyn-0"})(function(){return(0,d.AH)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${t_}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return W("code",e)}),tH=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h=(0,i.c)(20);h[0]!==e?({children:o,language:r,size:l,weight:s,...d}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=d,h[4]=l,h[5]=s):(o=h[1],r=h[2],d=h[3],l=h[4],s=h[5]);let g=H(void 0===l?2:l);return h[6]!==o?(c=(0,n.jsx)("code",{children:o}),h[6]=o,h[7]=c):c=h[7],h[8]!==o||h[9]!==r?(u=(0,n.jsx)(tW,{language:r,value:o}),h[8]=o,h[9]=r,h[10]=u):u=h[10],h[11]!==c||h[12]!==u?(f=(0,n.jsx)(a.Suspense,{fallback:c,children:u}),h[11]=c,h[12]=u,h[13]=f):f=h[13],h[14]!==t||h[15]!==d||h[16]!==g||h[17]!==f||h[18]!==s?(p=(0,n.jsx)(tM,{"data-ui":"Code",...d,$size:g,$weight:s,ref:t,children:f}),h[14]=t,h[15]=d,h[16]=g,h[17]=f,h[18]=s,h[19]=p):p=h[19],p});tH.displayName="ForwardRef(Code)";let tT={width:"100%",margin:"0 auto"},tL=(0,d.I4)(tp).withConfig({displayName:"StyledContainer",componentId:"sc-wyroop-0"})(function(){return tT},function(e){let{container:t,media:o}=(0,r.JW)(e.theme);return N(o,e.$width,e=>({maxWidth:"auto"===e?"none":z(t[e])}))}),tF=(0,a.forwardRef)(function(e,t){let o,r,a,d,l=(0,i.c)(9);l[0]!==e?({as:o,width:a,...r}=e,l[0]=e,l[1]=o,l[2]=r,l[3]=a):(o=l[1],r=l[2],a=l[3]);let s=H(void 0===a?2:a);return l[4]!==o||l[5]!==t||l[6]!==r||l[7]!==s?(d=(0,n.jsx)(tL,{"data-ui":"Container",...r,$width:s,forwardedAs:o,ref:t}),l[4]=o,l[5]=t,l[6]=r,l[7]=s,l[8]=d):d=l[8],d});tF.displayName="ForwardRef(Container)";let tJ=(0,d.I4)(tp).withConfig({displayName:"StyledGrid",componentId:"sc-v8t8oz-0"})(function(){return[eH,eF,eJ,eO,eB,eP,eD,eV,eG]}),tO=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p,h,g,m=(0,i.c)(26);m[0]!==e?({as:o,autoRows:d,autoCols:r,autoFlow:a,columns:s,gap:c,gapX:u,gapY:f,rows:h,children:l,...p}=e,m[0]=e,m[1]=o,m[2]=r,m[3]=a,m[4]=d,m[5]=l,m[6]=s,m[7]=c,m[8]=u,m[9]=f,m[10]=p,m[11]=h):(o=m[1],r=m[2],a=m[3],d=m[4],l=m[5],s=m[6],c=m[7],u=m[8],f=m[9],p=m[10],h=m[11]);let b="string"==typeof o?o:void 0,v=H(d),w=H(r),y=H(a),x=H(s),$=H(c),k=H(u),j=H(f),S=H(h);return m[12]!==o||m[13]!==l||m[14]!==t||m[15]!==p||m[16]!==b||m[17]!==v||m[18]!==w||m[19]!==y||m[20]!==x||m[21]!==$||m[22]!==k||m[23]!==j||m[24]!==S?(g=(0,n.jsx)(tJ,{"data-as":b,"data-ui":"Grid",...p,$autoRows:v,$autoCols:w,$autoFlow:y,$columns:x,$gap:$,$gapX:k,$gapY:j,$rows:S,forwardedAs:o,ref:t,children:l}),m[12]=o,m[13]=l,m[14]=t,m[15]=p,m[16]=b,m[17]=v,m[18]=w,m[19]=y,m[20]=x,m[21]=$,m[22]=k,m[23]=j,m[24]=S,m[25]=g):g=m[25],g});tO.displayName="ForwardRef(Grid)";let tB=d.I4.div.withConfig({displayName:"StyledHeading",componentId:"sc-137lwim-0"})(function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.JW)(e.theme);return(0,d.AH)`
    ${t&&(0,d.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,d.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${n.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},M,function(e){return W("heading",e)}),tP=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p,h=(0,i.c)(22);h[0]!==e?({accent:d,align:o,children:r,muted:l,size:s,textOverflow:c,weight:u,...a}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=a,h[4]=d,h[5]=l,h[6]=s,h[7]=c,h[8]=u):(o=h[1],r=h[2],a=h[3],d=h[4],l=h[5],s=h[6],c=h[7],u=h[8]);let g=void 0!==d&&d,m=void 0!==l&&l,b=void 0===s?2:s,v=r;if("ellipsis"===c){let e;h[9]!==v?(e=(0,n.jsx)(e4,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let w=H(o),y=H(b);return h[11]!==v?(f=(0,n.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==g||h[14]!==m||h[15]!==t||h[16]!==a||h[17]!==w||h[18]!==y||h[19]!==f||h[20]!==u?(p=(0,n.jsx)(tB,{"data-ui":"Heading",...a,$accent:g,$align:w,$muted:m,$size:y,$weight:u,ref:t,children:f}),h[13]=g,h[14]=m,h[15]=t,h[16]=a,h[17]=w,h[18]=y,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});tP.displayName="ForwardRef(Heading)";let tD=(0,d.I4)(tp).withConfig({displayName:"StyledInline",componentId:"sc-1pkiy6j-0"})(function(){return{lineHeight:"0","&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:o}=(0,r.JW)(e.theme);return N(t,e.$space,e=>{let t=z(.5===e?o[1]/2:o[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),tV=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f=(0,i.c)(13);f[0]!==e?({as:o,children:r,space:l,...d}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=d,f[4]=l):(o=f[1],r=f[2],d=f[3],l=f[4]),f[5]!==r?(c=a.Children.map(r,tG),f[5]=r,f[6]=c):c=f[6],s=c;let p=H(l);return f[7]!==o||f[8]!==s||f[9]!==d||f[10]!==p||f[11]!==t?(u=(0,n.jsx)(tD,{"data-ui":"Inline",...d,$space:p,forwardedAs:o,ref:t,children:s}),f[7]=o,f[8]=s,f[9]=d,f[10]=p,f[11]=t,f[12]=u):u=f[12],u});function tG(e){return e&&(0,n.jsx)("div",{children:e})}tV.displayName="ForwardRef(Inline)";let tY=d.I4.kbd.withConfig({displayName:"StyledKBD",componentId:"sc-1w7yd8w-0"})(e1,function(){return(0,d.AH)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),tX=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f=(0,i.c)(17);f[0]!==e?({children:o,fontSize:a,padding:d,radius:l,...r}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=a,f[4]=d,f[5]=l):(o=f[1],r=f[2],a=f[3],d=f[4],l=f[5]);let p=void 0===a?0:a,h=void 0===d?1:d,g=H(void 0===l?2:l);return f[6]!==o||f[7]!==p?(s=(0,n.jsx)(tg,{as:"span",size:p,weight:"semibold",children:o}),f[6]=o,f[7]=p,f[8]=s):s=f[8],f[9]!==h||f[10]!==s?(c=(0,n.jsx)(tp,{as:"span",padding:h,children:s}),f[9]=h,f[10]=s,f[11]=c):c=f[11],f[12]!==t||f[13]!==r||f[14]!==g||f[15]!==c?(u=(0,n.jsx)(tY,{"data-ui":"KBD",...r,$radius:g,ref:t,children:c}),f[12]=t,f[13]=r,f[14]=g,f[15]=c,f[16]=u):u=f[16],u});tX.displayName="ForwardRef(KBD)";let tU={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:o}){let[r]=t.split("-"),n=o.floating.width,i=o.floating.height,a=e.shift?.x||0,d=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:l,originY:s}=["bottom","top"].includes(r)?{originX:tq(.5-a/n,0,1),originY:+("bottom"!==r)}:{originX:+("left"===r),originY:tq(.5-d/i,0,1)};return{data:{originX:l,originY:s}}}};function tq(e,t,o){return Math.min(Math.max(e,t),o)}function tK(e,t,o){let r=t.x-e.x,n=t.y-e.y;return tZ(e,t,Math.min(1,o/Math.sqrt(r*r+n*n)))}function tZ(e,t,o){return{x:e.x+(t.x-e.x)*o,y:e.y+(t.y-e.y)*o}}let tQ=d.I4.div.withConfig({displayName:"StyledArrow",componentId:"sc-12vzy6c-0"})(({$w:e})=>(0,d.AH)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),t0=d.I4.path.withConfig({displayName:"StrokePath",componentId:"sc-12vzy6c-1"})`stroke:var(--card-shadow-outline-color);`,t1=d.I4.path.withConfig({displayName:"ShapePath",componentId:"sc-12vzy6c-2"})`fill:var(--card-bg-color);`,t2=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p=(0,i.c)(24);p[0]!==e?({width:d,height:o,radius:a,...r}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=a,p[4]=d):(o=p[1],r=p[2],a=p[3],d=p[4]);let h=void 0===a?0:a,{card:g}=Z(),m=g.shadow.outline,b=(function(e){let t=e.length,o=[];for(let r=0;r<t;r+=1){let t=e[r],n=e[r-1],i=e[r+1];if(n&&t.radius){let e=tK(t,n,t.radius),r=tK(t,i,t.radius),a=tZ(e,t,.5),d=tZ(t,r,.5);o.push({type:"point",...e}),o.push({type:"curve",curveEnd:r,startControl:a,endControl:d})}else o.push({type:"point",...t})}return o})([{x:0,y:0},{x:h,y:0,radius:h},{x:d/2,y:o-1,radius:h},{x:d-h,y:0,radius:h},{x:d,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),v=`${b}`,w=`${b} M ${d} -1 M 0 -1 Z`,y=`0 0 ${d} ${d}`;p[5]!==m||p[6]!==d?(l=(0,n.jsx)("mask",{id:"stroke-mask",children:(0,n.jsx)("rect",{x:0,y:m,width:d,height:d,fill:"white"})}),p[5]=m,p[6]=d,p[7]=l):l=p[7];let x=2*m;return p[8]!==v||p[9]!==x?(s=(0,n.jsx)(t0,{d:v,mask:"url(#stroke-mask)",strokeWidth:x}),p[8]=v,p[9]=x,p[10]=s):s=p[10],p[11]!==w?(c=(0,n.jsx)(t1,{d:w}),p[11]=w,p[12]=c):c=p[12],p[13]!==y||p[14]!==l||p[15]!==s||p[16]!==c||p[17]!==d?(u=(0,n.jsxs)("svg",{width:d,height:d,viewBox:y,children:[l,s,c]}),p[13]=y,p[14]=l,p[15]=s,p[16]=c,p[17]=d,p[18]=u):u=p[18],p[19]!==t||p[20]!==r||p[21]!==u||p[22]!==d?(f=(0,n.jsx)(tQ,{...r,$w:d,ref:t,children:u}),p[19]=t,p[20]=r,p[21]=u,p[22]=d,p[23]=f):f=p[23],f});t2.displayName="ForwardRef(Arrow)";let t4=G("@sanity/ui/context/boundaryElement",null);function t3(e){let t,o,r,a=(0,i.c)(5),{children:d,element:l}=e;return a[0]!==l?(o={version:0,element:l},a[0]=l,a[1]=o):o=a[1],t=o,a[2]!==d||a[3]!==t?(r=(0,n.jsx)(t4.Provider,{value:t,children:d}),a[2]=d,a[3]=t,a[4]=r):r=a[4],r}function t5(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}t3.displayName="BoundaryElementProvider";let t6={version:0,element:null};function t7(){let e=(0,a.useContext)(t4);if(e&&(!t5(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||t6}let t8=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h,g,m=(0,i.c)(18),b=Z();m[0]!==e?({children:r,media:o,...d}=e,m[0]=e,m[1]=o,m[2]=r,m[3]=d):(o=m[1],r=m[2],d=m[3]);let v=o??b.media,[w,y]=(0,a.useState)(null),x=B(w);if(l=x?.border.width??window.innerWidth,m[4]!==v||m[5]!==l){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]>t&&o.push(r);return o}(v,l);c=e.length?e.join(" "):void 0,m[4]=v,m[5]=l,m[6]=c}else c=m[6];if(s=c,m[7]!==v||m[8]!==l){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]<=t&&o.push(r);return o}(v,l);f=e.length?e.join(" "):void 0,m[7]=v,m[8]=l,m[9]=f}else f=m[9];return u=f,m[10]!==w?(p=()=>w,h=[w],m[10]=w,m[11]=p,m[12]=h):(p=m[11],h=m[12]),(0,a.useImperativeHandle)(t,p,h),m[13]!==r||m[14]!==s||m[15]!==u||m[16]!==d?(g=(0,n.jsx)("div",{"data-ui":"ElementQuery",...d,"data-eq-max":s,"data-eq-min":u,ref:y,children:r}),m[13]=r,m[14]=s,m[15]=u,m[16]=d,m[17]=g):g=m[17],g});function t9(e){if(!t5(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}t8.displayName="ForwardRef(ElementQuery)";let oe=G("@sanity/ui/context/layer",null);function ot(e){let t,o,r,d,l,s,c,u,f=(0,i.c)(19),{children:p,zOffset:h}=e,g=(0,a.useContext)(oe);f[0]!==g?(t=g&&t9(g),f[0]=g,f[1]=t):t=f[1];let m=t,b=m?.registerChild,v=(m?.level??0)+1,w=H(void 0===h?0:h),y=w.length-1,x=Math.min(ee(),y),$=m?m.zIndex+w[x]:w[x];f[2]===Symbol.for("react.memo_cache_sentinel")?(o={},f[2]=o):o=f[2];let[,k]=(0,a.useState)(o),[j,S]=(0,a.useState)(0),I=0===j;f[3]!==b||f[4]!==k?(r=e=>{let t=b?.(e);return void 0!==e?k(t=>{let o=t[e]??0,r={...t,[e]:o+1};return S(Object.keys(r).length),r}):S(or),()=>{void 0!==e?k(t=>{let o={...t};return 1===o[e]?(delete o[e],S(Object.keys(o).length)):o[e]=o[e]-1,o}):S(oo),t?.()}},f[3]=b,f[4]=k,f[5]=r):r=f[5];let R=r;return f[6]!==v||f[7]!==b?(d=()=>b?.(v),l=[v,b],f[6]=v,f[7]=b,f[8]=d,f[9]=l):(d=f[8],l=f[9]),(0,a.useEffect)(d,l),f[10]!==I||f[11]!==v||f[12]!==R||f[13]!==j||f[14]!==$?(c={version:0,isTopLayer:I,level:v,registerChild:R,size:j,zIndex:$},f[10]=I,f[11]=v,f[12]=R,f[13]=j,f[14]=$,f[15]=c):c=f[15],s=c,f[16]!==p||f[17]!==s?(u=(0,n.jsx)(oe.Provider,{value:s,children:p}),f[16]=p,f[17]=s,f[18]=u):u=f[18],u}function oo(e){return e-1}function or(e){return e+1}function on(){let e=(0,i.c)(2),t=(0,a.useContext)(oe);if(!t)throw Error("useLayer(): missing context value");try{let o;return e[0]!==t?(o=t9(t),e[0]=t,e[1]=o):o=e[1],o}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}ot.displayName="LayerProvider";let oi=d.I4.div.withConfig({displayName:"StyledLayer",componentId:"sc-16kojrv-0"})({position:"relative"}),oa=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h,g,m=(0,i.c)(22);m[0]!==e?({children:o,onActivate:r,onFocus:d,style:s,...l}=e,m[0]=e,m[1]=o,m[2]=r,m[3]=d,m[4]=l,m[5]=s):(o=m[1],r=m[2],d=m[3],l=m[4],s=m[5]);let b=void 0===s?y:s,{zIndex:v,isTopLayer:w}=on(),x=(0,a.useRef)(null),$=(0,a.useRef)(null),j=(0,a.useRef)(w);m[6]===Symbol.for("react.memo_cache_sentinel")?(c=()=>$.current,m[6]=c):c=m[6],(0,a.useImperativeHandle)(t,c),m[7]!==w||m[8]!==r?(u=()=>{j.current!==w&&w&&r?.({activeElement:x.current}),j.current=w},f=[w,r],m[7]=w,m[8]=r,m[9]=u,m[10]=f):(u=m[9],f=m[10]),(0,a.useEffect)(u,f),m[11]!==w||m[12]!==d?(p=e=>{d?.(e);let t=$.current,o=document.activeElement;!w||!t||!o||k(o)&&E(t,o)&&(x.current=o)},m[11]=w,m[12]=d,m[13]=p):p=m[13];let S=p;return m[14]!==b||m[15]!==v?(h={...b,zIndex:v},m[14]=b,m[15]=v,m[16]=h):h=m[16],m[17]!==o||m[18]!==S||m[19]!==l||m[20]!==h?(g=(0,n.jsx)(oi,{...l,"data-ui":"Layer",onFocus:S,ref:$,style:h,children:o}),m[17]=o,m[18]=S,m[19]=l,m[20]=h,m[21]=g):g=m[21],g}),od=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s=(0,i.c)(11);s[0]!==e?({children:o,zOffset:a,...r}=e,s[0]=e,s[1]=o,s[2]=r,s[3]=a):(o=s[1],r=s[2],a=s[3]);let c=void 0===a?1:a;return s[4]!==o||s[5]!==t||s[6]!==r?(d=(0,n.jsx)(oa,{...r,ref:t,children:o}),s[4]=o,s[5]=t,s[6]=r,s[7]=d):d=s[7],s[8]!==d||s[9]!==c?(l=(0,n.jsx)(ot,{zOffset:c,children:d}),s[8]=d,s[9]=c,s[10]=l):l=s[10],l});od.displayName="ForwardRef(Layer)";let ol="@sanity/ui/context/portal",os=Symbol.for(`${ol}/element`);V[os]=null;let oc=G(ol,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(V[os]||(V[os]=document.createElement("div"),V[os].setAttribute("data-portal",""),document.body.appendChild(V[os])),V[os])}});function ou(){let e=(0,a.useContext)(oc);if(!e)throw Error("usePortal(): missing context value");if(!t5(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function of(e){let t,o=(0,i.c)(3),{children:r,__unstable_name:n}=e,a=ou(),d=(n?a.elements&&a.elements[n]:a.element)||a.elements?.default;return d?(o[0]!==r||o[1]!==d?(t=(0,g.createPortal)(r,d),o[0]=r,o[1]=d,o[2]=t):t=o[2],t):null}function op(e){let t,o,r,d=(0,i.c)(7),{boundaryElement:l,children:s,element:c,__unstable_elements:u}=e,f=function(e){let t=(0,a.useRef)(e);return function(e,t){if(!e||!t)return e===t;let o=Object.keys(e),r=Object.keys(t);return o.length===r.length&&o.every(o=>e[o]===t[o])}(t.current,e)||(t.current=e),t.current}(u),p=(0,a.useSyncExternalStore)(om,og,oh),h=l||null,g=c||p;return d[0]!==f||d[1]!==h||d[2]!==g?(o={version:0,boundaryElement:h,element:g,elements:f},d[0]=f,d[1]=h,d[2]=g,d[3]=o):o=d[3],t=o,d[4]!==s||d[5]!==t?(r=(0,n.jsx)(oc.Provider,{value:t,children:s}),d[4]=s,d[5]=t,d[6]=r):r=d[6],r}function oh(){return null}function og(){return document.body}of.displayName="Portal",op.displayName="PortalProvider";let om=()=>()=>{},ob=d.I4.div.withConfig({displayName:"StyledSrOnly",componentId:"sc-mubr0c-0"})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`;(0,a.forwardRef)(function(e,t){let o,r=(0,i.c)(4),{as:a,children:d}=e;return r[0]!==a||r[1]!==d||r[2]!==t?(o=(0,n.jsx)(ob,{"aria-hidden":!0,as:a,"data-ui":"SrOnly",ref:t,children:d}),r[0]=a,r[1]=d,r[2]=t,r[3]=o):o=r[3],o}).displayName="ForwardRef(SrOnly)";let ov=d.I4.div.withConfig({displayName:"StyledVirtualList",componentId:"sc-dlqsj4-0"})`position:relative;`,ow=d.I4.div.withConfig({displayName:"ItemWrapper",componentId:"sc-dlqsj4-1"})`position:absolute;left:0;right:0;`,oy=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h,g,m,b,v,w,y,x,$,k,j,S=(0,i.c)(56);S[0]!==e?({as:s,gap:c,getItemKey:o,items:u,onChange:r,renderItem:d,...l}=e,S[0]=e,S[1]=o,S[2]=r,S[3]=d,S[4]=l,S[5]=s,S[6]=c,S[7]=u):(o=S[1],r=S[2],d=S[3],l=S[4],s=S[5],c=S[6],u=S[7]);let I=void 0===s?"div":s,R=void 0===c?0:c;S[8]!==u?(f=void 0===u?[]:u,S[8]=u,S[9]=f):f=S[9];let C=f,{space:E}=Z(),z=(0,a.useRef)(null),N=(0,a.useRef)(null),[A,_]=(0,a.useState)(0),[W,M]=(0,a.useState)(0),[H,T]=(0,a.useState)(-1);S[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>z.current,S[10]=p):p=S[10],(0,a.useImperativeHandle)(t,p),S[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!N.current)return;let e=N.current.firstChild;e instanceof HTMLElement&&T(e.offsetHeight)},S[11]=h):h=S[11],S[12]!==d?(g=[d],S[12]=d,S[13]=g):g=S[13],(0,a.useEffect)(h,g),S[14]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{if(!z.current)return;let e=function(e){let t=e;for(;t&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(t);)t=t.parentNode;return t}(z.current.parentNode);if(e){if(!(e instanceof HTMLElement))return;let t=()=>{_(e.scrollTop)};e.addEventListener("scroll",t,{passive:!0});let o=new J(e=>{M(e[0].contentRect.height)});return o.observe(e),t(),()=>{e.removeEventListener("scroll",t),o.unobserve(e),o.disconnect()}}let t=()=>{_(window.scrollY)},o=()=>{M(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",o),M(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",o)}},b=[],S[14]=m,S[15]=b):(m=S[14],b=S[15]),(0,a.useEffect)(m,b);let L=C.length,F=H?L*(H+E[R])-E[R]:0,O=F?Math.max(Math.floor(A/F*L)-2,0):0,B=F?Math.ceil((A+W)/F*L)+1:0;S[16]!==O||S[17]!==R||S[18]!==H||S[19]!==r||S[20]!==W||S[21]!==A||S[22]!==E||S[23]!==B?(w=()=>{r&&r({fromIndex:O,gap:E[R],itemHeight:H,scrollHeight:W,scrollTop:A,toIndex:B})},v=[O,R,H,r,W,A,E,B],S[16]=O,S[17]=R,S[18]=H,S[19]=r,S[20]=W,S[21]=A,S[22]=E,S[23]=B,S[24]=v,S[25]=w):(v=S[24],w=S[25]),(0,a.useEffect)(w,v);e:{let e;if(!d||0===C.length){y=null;break e}if(-1===H){let e,t;S[26]!==C[0]||S[27]!==d?(e=d(C[0]),S[26]=C[0],S[27]=d,S[28]=e):e=S[28],S[29]!==e?(t=[(0,n.jsx)(ow,{children:e},0)],S[29]=e,S[30]=t):t=S[30],y=t;break e}if(S[31]!==O||S[32]!==R||S[33]!==o||S[34]!==H||S[35]!==C||S[36]!==d||S[37]!==E||S[38]!==B){let t;S[40]!==O||S[41]!==R||S[42]!==o||S[43]!==H||S[44]!==d||S[45]!==E?(t=(e,t)=>{let r=O+t,i=d(e),a=o?o(e,r):r;return(0,n.jsx)(ow,{style:{top:r*(H+E[R])},children:i},a)},S[40]=O,S[41]=R,S[42]=o,S[43]=H,S[44]=d,S[45]=E,S[46]=t):t=S[46],e=C.slice(O,B).map(t),S[31]=O,S[32]=R,S[33]=o,S[34]=H,S[35]=C,S[36]=d,S[37]=E,S[38]=B,S[39]=e}else e=S[39];y=e}let P=y;return S[47]!==F?($={height:F},S[47]=F,S[48]=$):$=S[48],x=$,S[49]!==P||S[50]!==x?(k=(0,n.jsx)("div",{ref:N,style:x,children:P}),S[49]=P,S[50]=x,S[51]=k):k=S[51],S[52]!==I||S[53]!==l||S[54]!==k?(j=(0,n.jsx)(ov,{as:I,"data-ui":"VirtualList",...l,ref:z,children:k}),S[52]=I,S[53]=l,S[54]=k,S[55]=j):j=S[55],j});function ox(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(o=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}oy.displayName="ForwardRef(VirtualList)";let o$=[0,0,0,0],ok={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},oj=(0,d.I4)(f.P.create(tE)).withConfig({displayName:"MotionCard",componentId:"sc-ihg31s-0"})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`,oS=(0,d.I4)(f.P.create(tw)).withConfig({displayName:"MotionFlex",componentId:"sc-ihg31s-1"})`will-change:opacity;`,oI=(0,a.memo)((0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p,h,g,m,b,v,w,y,$,k,j,S,I,R,C,E,z,N,A,_,W,M,H,T,L,F=(0,i.c)(66);F[0]!==e?({__unstable_margins:c,animate:o,arrow:r,arrowRef:a,arrowX:d,arrowY:l,children:s,padding:h,placement:g,originX:u,originY:f,overflow:p,radius:m,scheme:v,shadow:w,strategy:y,style:$,tone:k,width:j,x:S,y:I,...b}=e,F[0]=e,F[1]=o,F[2]=r,F[3]=a,F[4]=d,F[5]=l,F[6]=s,F[7]=c,F[8]=u,F[9]=f,F[10]=p,F[11]=h,F[12]=g,F[13]=m,F[14]=b,F[15]=v,F[16]=w,F[17]=y,F[18]=$,F[19]=k,F[20]=j,F[21]=S,F[22]=I):(o=F[1],r=F[2],a=F[3],d=F[4],l=F[5],s=F[6],c=F[7],u=F[8],f=F[9],p=F[10],h=F[11],g=F[12],m=F[13],b=F[14],v=F[15],w=F[16],y=F[17],$=F[18],k=F[19],j=F[20],S=F[21],I=F[22]);let{zIndex:J}=on(),O=(S??0)+(R=c||o$)[3],B=(I??0)+R[0],P=o?"transform":void 0;F[23]!==u||F[24]!==f||F[25]!==y||F[26]!==$||F[27]!==P||F[28]!==j||F[29]!==O||F[30]!==B||F[31]!==J?(E={left:O,originX:u,originY:f,position:y,top:B,width:j,zIndex:J,willChange:P,...$},F[23]=u,F[24]=f,F[25]=y,F[26]=$,F[27]=P,F[28]=j,F[29]=O,F[30]=B,F[31]=J,F[32]=E):E=F[32],C=E;let D=null!==d?d:void 0,V=null!==l?l:void 0;F[33]!==D||F[34]!==V?(N={left:D,top:V,right:void 0,bottom:void 0},F[33]=D,F[34]=V,F[35]=N):N=F[35],z=N;let G=b;return F[36]!==o?(A=o?["hidden","initial"]:void 0,F[36]=o,F[37]=A):A=F[37],F[38]!==o?(_=o?["visible","scaleIn"]:void 0,F[38]=o,F[39]=_):_=F[39],F[40]!==o?(W=o?["hidden","scaleOut"]:void 0,F[40]=o,F[41]=W):W=F[41],F[42]!==s||F[43]!==h?(M=(0,n.jsx)(tw,{direction:"column",flex:1,padding:h,children:s}),F[42]=s,F[43]=h,F[44]=M):M=F[44],F[45]!==p||F[46]!==M?(H=(0,n.jsx)(oS,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:p,variants:x.children,transition:x.transition,children:M}),F[45]=p,F[46]=M,F[47]=H):H=F[47],F[48]!==r||F[49]!==a||F[50]!==z?(T=r&&(0,n.jsx)(t2,{ref:a,style:z,width:19,height:8,radius:2}),F[48]=r,F[49]=a,F[50]=z,F[51]=T):T=F[51],F[52]!==g||F[53]!==m||F[54]!==t||F[55]!==C||F[56]!==v||F[57]!==w||F[58]!==_||F[59]!==W||F[60]!==H||F[61]!==T||F[62]!==G||F[63]!==A||F[64]!==k?(L=(0,n.jsxs)(oj,{"data-ui":"Popover",...G,"data-placement":g,radius:m,ref:t,scheme:v,shadow:w,sizing:"border",style:C,tone:k,variants:x.card,transition:x.transition,initial:A,animate:_,exit:W,children:[H,T]}),F[52]=g,F[53]=m,F[54]=t,F[55]=C,F[56]=v,F[57]=w,F[58]=_,F[59]=W,F[60]=H,F[61]=T,F[62]=G,F[63]=A,F[64]=k,F[65]=L):L=F[65],L}));oI.displayName="Memo(ForwardRef(PopoverCard))";let oR=()=>{let e,t=(0,i.c)(2),{zIndex:o}=on();return t[0]!==o?(e=(0,n.jsx)("div",{style:{height:"100vh",inset:0,position:"fixed",width:"100vw",zIndex:o}}),t[0]=o,t[1]=e):e=t[1],e},oC=(0,a.memo)((0,a.forwardRef)(function(e,t){let{container:o,layer:r}=Z(),i=t7(),{__unstable_margins:d=o$,animate:l=!1,arrow:s=!1,boundaryElement:f=i.element,children:h,constrainSize:g=!1,content:m,disabled:b,fallbackPlacements:v=e.fallbackPlacements??ok[e.placement??"bottom"],matchReferenceWidth:w,floatingBoundary:y=e.boundaryElement??i.element,modal:x,onActivate:$,open:k,overflow:j="hidden",padding:S,placement:I="bottom",placementStrategy:R="flip",portal:C,preventOverflow:E=!0,radius:z=3,referenceBoundary:N=e.boundaryElement??i.element,referenceElement:A,scheme:_,shadow:W=3,tone:M="inherit",width:T="auto",zOffset:L=r.popover.zOffset,updateRef:F,...J}=e,O=!er()&&l,P=B(f)?.border,D=H(S),V=H(z),G=H(W),Y=H(T),X=H(L),U=(0,a.useRef)(null),q=(0,a.useRef)(null),K="viewport";(0,a.useImperativeHandle)(t,()=>U.current);let Q=ee(),et=g||E?P?.width:void 0,eo=function(e){let{container:t,mediaIndex:o,width:r}=e,n=r[o],i=void 0===n?r[r.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:o,mediaIndex:Q,width:Y}),en=(0,a.useRef)(eo);(0,a.useEffect)(()=>{en.current=eo},[eo]);let ei=function(e){let{boundaryWidth:t,currentWidth:o}=e;if(void 0!==o||void 0!==t)return Math.min(o??1/0,(t||1/0)-8)}({boundaryWidth:et,currentWidth:eo}),ea=(0,a.useRef)(ei);(0,a.useEffect)(()=>{ea.current=ei},[ei]);let ed=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{let e=U.current;if(!k||!e)return;let t=ed.current;w?void 0!==t&&(e.style.width=`${t}px`):void 0!==eo&&(e.style.width=`${eo}px`),"number"==typeof ei&&(e.style.maxWidth=`${ei}px`)},[eo,w,ei,k]);let el=(0,a.useMemo)(()=>{let e=[];return(g||E)&&("autoPlacement"===R?e.push((0,u.RK)({allowedPlacements:[I].concat(v)})):e.push((0,u.UU)({boundary:y||void 0,fallbackPlacements:v,padding:4,rootBoundary:K}))),e.push((0,u.cY)({mainAxis:4})),(g||w)&&e.push(function(e){let{apply:t,margins:o,padding:r=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:d,rects:l}=n,{floating:s,reference:u}=l,f=await (0,c.__)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:r,rootBoundary:"viewport"}),p=1/0,h=1/0,g=s.width,m=s.height;a.includes("top")&&(p=g-(f.left+f.right),h=m-f.top),a.includes("right")&&(p=g-f.right,h=m-(f.top+f.bottom)),a.includes("bottom")&&(p=g-(f.left+f.right),h=m-f.bottom),a.includes("left")&&(p=g-f.left,h=m-(f.top+f.bottom)),t({availableWidth:p-o[1]-o[3],availableHeight:h-o[0]-o[2],elements:i,referenceWidth:u.width-o[1]-o[3]});let b=await d.getDimensions(i.floating),v=b.height;return g!==b.width||m!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:o,referenceWidth:r}){ed.current=r;let n=en.current,i=ea.current;w?o.floating.style.width=`${r}px`:void 0!==n&&(o.floating.style.width=`${n}px`),g&&(o.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,o.floating.style.maxHeight=`${t}px`)},boundaryElement:y||void 0,margins:d,padding:4})),E&&e.push((0,u.BN)({boundary:y||void 0,rootBoundary:K,padding:4})),s&&e.push((0,u.UE)({element:q,padding:4})),O&&e.push(tU),e.push((0,u.jD)({boundary:N||void 0,padding:4,strategy:"referenceHidden"})),e},[O,s,g,v,I,R,y,d,w,E,N]),{x:es,y:ec,middlewareData:eu,placement:ef,refs:ep,strategy:eh,update:eg}=(0,u.we)({middleware:el,placement:I,whileElementsMounted:c.ll,elements:A?{reference:A}:void 0}),em=eu.hide?.referenceHidden,eb=eu.arrow?.x,ev=eu.arrow?.y,ew=eu["@sanity/ui/origin"]?.originX,ey=eu["@sanity/ui/origin"]?.originY,ex=(0,a.useCallback)(e=>{q.current=e},[]),e$=(0,a.useCallback)(e=>{U.current=e,ep.setFloating(e)},[ep]),ek=(0,a.useCallback)(e=>{ep.setReference(e);let t=ox(h);"function"==typeof t?t(e):t&&(t.current=e)},[h,ep]),ej=(0,a.useMemo)(()=>A?h:h?(0,a.cloneElement)(h,{ref:ek}):null,[h,A,ek]);if((0,a.useEffect)(()=>{F&&("function"==typeof F?F(eg):F&&(F.current=eg))},[eg,F]),b)return h||(0,n.jsx)(n.Fragment,{});let eS=(0,n.jsxs)(ot,{zOffset:X,children:[x&&(0,n.jsx)(oR,{}),(0,n.jsx)(oI,{...J,__unstable_margins:d,animate:O,arrow:s,arrowRef:ex,arrowX:eb,arrowY:ev,hidden:em,overflow:j,padding:D,placement:ef,radius:V,ref:e$,scheme:_,shadow:G,originX:ew,originY:ey,strategy:eh,tone:M,width:w?ed.current:eo,x:es,y:ec,children:m})]}),eI=k&&(C?(0,n.jsx)(of,{__unstable_name:"string"==typeof C?C:void 0,children:eS}):eS);return(0,n.jsxs)(n.Fragment,{children:[O?(0,n.jsx)(p.N,{children:eI}):eI,ej]})}));oC.displayName="Memo(ForwardRef(Popover))";let oE=d.I4.div.withConfig({displayName:"StyledRadio",componentId:"sc-ccrwkf-0"})(function(){return(0,d.AH)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),oz=d.I4.input.withConfig({displayName:"Input",componentId:"sc-ccrwkf-1"})(function(e){let{color:t,input:o}=(0,r.JW)(e.theme),n=(o.radio.size-o.radio.markSize)/2;return(0,d.AH)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${z(o.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${z(o.radio.size)};
      width: ${z(o.radio.size)};
      border-radius: ${z(o.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${eI({color:t.input.default.enabled.border,width:o.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${z(n)};
        left: ${z(n)};
        height: ${z(o.radio.markSize)};
        width: ${z(o.radio.markSize)};
        border-radius: ${z(o.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${eI({color:t.input.default.enabled.border,width:o.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${eI({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),oN=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h,g=(0,i.c)(19);g[0]!==e?({className:o,disabled:d,style:c,customValidity:r,readOnly:l,...s}=e,g[0]=e,g[1]=o,g[2]=r,g[3]=d,g[4]=l,g[5]=s,g[6]=c):(o=g[1],r=g[2],d=g[3],l=g[4],s=g[5],c=g[6]);let m=(0,a.useRef)(null);g[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>m.current,g[7]=u):u=g[7],(0,a.useImperativeHandle)(t,u),F(m,r);let b=!d&&l?"":void 0,v=r?"":void 0,w=d||l;return g[8]!==l||g[9]!==s||g[10]!==b||g[11]!==v||g[12]!==w?(f=(0,n.jsx)(oz,{"data-read-only":b,"data-error":v,...s,disabled:w,readOnly:l,ref:m,type:"radio"}),g[8]=l,g[9]=s,g[10]=b,g[11]=v,g[12]=w,g[13]=f):f=g[13],g[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,n.jsx)("span",{}),g[14]=p):p=g[14],g[15]!==o||g[16]!==c||g[17]!==f?(h=(0,n.jsxs)(oE,{className:o,"data-ui":"Radio",style:c,children:[f,p]}),g[15]=o,g[16]=c,g[17]=f,g[18]=h):h=g[18],h});function oA(e){let{font:t}=(0,r.JW)(e.theme);return(0,d.AH)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function o_(e){let{color:t,input:o}=(0,r.JW)(e.theme);return(0,d.AH)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${eI({color:t.input.default.enabled.border,width:o.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${eI({color:t.input.default.hovered.border,width:o.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${eI({color:t.input.default.readOnly.border,width:o.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${eI({color:t.input.default.disabled.border,width:o.border.width})};
    }
  `}function oW(e){let{$fontSize:t}=e,{font:o,media:n}=(0,r.JW)(e.theme);return N(n,t,e=>{var t;return{fontSize:z((t=o.text.sizes[e]||o.text.sizes[2]).fontSize),lineHeight:`${z(t.lineHeight)}`}})}oN.displayName="ForwardRef(Radio)";let oM={root:function(){return(0,d.AH)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `},input:function(){return[e1,oA,o_,oW,eX]},iconBox:function(e){let{color:t}=(0,r.JW)(e.theme);return(0,d.AH)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}},oH=d.I4.div.withConfig({displayName:"StyledSelect",componentId:"sc-5mxno7-0"})(oM.root),oT=d.I4.select.withConfig({displayName:"Input",componentId:"sc-5mxno7-1"})(oM.input),oL=(0,d.I4)(tp).withConfig({displayName:"IconBox",componentId:"sc-5mxno7-2"})(oM.iconBox),oF=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,u,f,p,h,g,m,b,v,w,y,x=(0,i.c)(29);x[0]!==e?({children:o,customValidity:r,disabled:d,fontSize:u,padding:f,radius:p,readOnly:l,space:h,...c}=e,x[0]=e,x[1]=o,x[2]=r,x[3]=d,x[4]=l,x[5]=c,x[6]=u,x[7]=f,x[8]=p,x[9]=h):(o=x[1],r=x[2],d=x[3],l=x[4],c=x[5],u=x[6],f=x[7],p=x[8],h=x[9]);let $=void 0===u?2:u,k=void 0===f?3:f,j=void 0===p?2:p,S=void 0===h?3:h,I=(0,a.useRef)(null);x[10]===Symbol.for("react.memo_cache_sentinel")?(g=()=>I.current,x[10]=g):g=x[10],(0,a.useImperativeHandle)(t,g),F(I,r);let R=!d&&l?"":void 0,C=H($),E=H(k),z=H(j),N=H(S),A=d||l;return x[11]!==o||x[12]!==c||x[13]!==A||x[14]!==R||x[15]!==C||x[16]!==E||x[17]!==z||x[18]!==N?(m=(0,n.jsx)(oT,{"data-read-only":R,"data-ui":"Select",...c,$fontSize:C,$padding:E,$radius:z,$space:N,disabled:A,ref:I,children:o}),x[11]=o,x[12]=c,x[13]=A,x[14]=R,x[15]=C,x[16]=E,x[17]=z,x[18]=N,x[19]=m):m=x[19],x[20]===Symbol.for("react.memo_cache_sentinel")?(b=(0,n.jsx)(s.D3D,{}),x[20]=b):b=x[20],x[21]!==$?(v=(0,n.jsx)(tg,{size:$,children:b}),x[21]=$,x[22]=v):v=x[22],x[23]!==k||x[24]!==v?(w=(0,n.jsx)(oL,{padding:k,children:v}),x[23]=k,x[24]=v,x[25]=w):w=x[25],x[26]!==m||x[27]!==w?(y=(0,n.jsxs)(oH,{"data-ui":"Select",children:[m,w]}),x[26]=m,x[27]=w,x[28]=y):y=x[28],y});oF.displayName="ForwardRef(Select)";let oJ={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},oO=(0,d.I4)(tp).withConfig({displayName:"StyledStack",componentId:"sc-8dpfq2-0"})(function(){return oJ},function(e){let{media:t,space:o}=(0,r.JW)(e.theme);return N(t,e.$space,e=>({gridGap:z(o[e])}))}),oB=(0,a.forwardRef)(function(e,t){let o,r,a,d,l=(0,i.c)(10);l[0]!==e?({as:o,space:a,...r}=e,l[0]=e,l[1]=o,l[2]=r,l[3]=a):(o=l[1],r=l[2],a=l[3]);let s="string"==typeof o?o:void 0,c=H(a);return l[4]!==o||l[5]!==t||l[6]!==r||l[7]!==s||l[8]!==c?(d=(0,n.jsx)(oO,{"data-as":s,"data-ui":"Stack",...r,$space:c,forwardedAs:o,ref:t}),l[4]=o,l[5]=t,l[6]=r,l[7]=s,l[8]=c,l[9]=d):d=l[9],d});oB.displayName="ForwardRef(Stack)";let oP=d.I4.span.withConfig({displayName:"StyledSwitch",componentId:"sc-dw1foe-0"})(function(){return(0,d.AH)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),oD=d.I4.input.withConfig({displayName:"Input",componentId:"sc-dw1foe-1"})(function(){return(0,d.AH)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),oV=d.I4.span.withConfig({displayName:"Representation",componentId:"sc-dw1foe-2"})(function(e){let{color:t,input:o}=(0,r.JW)(e.theme);return(0,d.AH)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${z(o.switch.width)};
    height: ${z(o.switch.height)};
    border-radius: ${z(o.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${eR({focusRing:o.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),oG=d.I4.span.withConfig({displayName:"Track",componentId:"sc-dw1foe-3"})(function(e){let{input:t}=(0,r.JW)(e.theme);return(0,d.AH)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${z(t.switch.width)};
    height: ${z(t.switch.height)};
    border-radius: ${z(t.switch.height/2)};
  `}),oY=d.I4.span.withConfig({displayName:"Thumb",componentId:"sc-dw1foe-4"})(function(e){let{$indeterminate:t}=e,{input:o}=(0,r.JW)(e.theme),n=o.switch.width,i=o.switch.height,a=o.switch.padding,l=i-2*o.switch.padding,s=n-2*a-l,c=n/2-l/2-a,u=!0!==t&&!0===e.$checked;return(0,d.AH)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${z(a)};
    top: ${z(a)};
    height: ${z(l)};
    width: ${z(l)};
    border-radius: ${z(l/2)};
    transition-property: transform;
    transition-duration: ${o.switch.transitionDurationMs}ms;
    transition-timing-function: ${o.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&(0,d.AH)`
      transform: translate3d(${s}px, 0, 0);
    `}

    ${t&&(0,d.AH)`
      transform: translate3d(${c}px, 0, 0);
    `}
  `}),oX=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h,g,m,b,v,w=(0,i.c)(26);w[0]!==e?({checked:o,className:r,disabled:d,indeterminate:l,readOnly:s,style:u,...c}=e,w[0]=e,w[1]=o,w[2]=r,w[3]=d,w[4]=l,w[5]=s,w[6]=c,w[7]=u):(o=w[1],r=w[2],d=w[3],l=w[4],s=w[5],c=w[6],u=w[7]);let y=(0,a.useRef)(null);w[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>y.current,w[8]=f):f=w[8],(0,a.useImperativeHandle)(t,f),w[9]!==l?(p=()=>{y.current&&(y.current.indeterminate=l||!1)},h=[l],w[9]=l,w[10]=p,w[11]=h):(p=w[10],h=w[11]),(0,a.useEffect)(p,h);let x=!d&&s?"":void 0,$=!0!==l&&o,k=d||s;return w[12]!==c||w[13]!==x||w[14]!==$||w[15]!==k?(g=(0,n.jsx)(oD,{"data-read-only":x,...c,checked:$,disabled:k,type:"checkbox",ref:y}),w[12]=c,w[13]=x,w[14]=$,w[15]=k,w[16]=g):g=w[16],w[17]===Symbol.for("react.memo_cache_sentinel")?(m=(0,n.jsx)(oG,{}),w[17]=m):m=w[17],w[18]!==o||w[19]!==l?(b=(0,n.jsxs)(oV,{"aria-hidden":!0,"data-name":"representation",children:[m,(0,n.jsx)(oY,{$checked:o,$indeterminate:l})]}),w[18]=o,w[19]=l,w[20]=b):b=w[20],w[21]!==r||w[22]!==u||w[23]!==g||w[24]!==b?(v=(0,n.jsxs)(oP,{className:r,"data-ui":"Switch",style:u,children:[g,b]}),w[21]=r,w[22]=u,w[23]=g,w[24]=b,w[25]=v):v=w[25],v});oX.displayName="ForwardRef(Switch)";let oU=d.I4.span.withConfig({displayName:"StyledTextArea",componentId:"sc-1d6h1o8-0"})(eq),oq=d.I4.span.withConfig({displayName:"InputRoot",componentId:"sc-1d6h1o8-1"})`flex:1;min-width:0;display:block;position:relative;`,oK=d.I4.textarea.withConfig({displayName:"Input",componentId:"sc-1d6h1o8-2"})(eY,eK,eZ),oZ=d.I4.div.withConfig({displayName:"Presentation",componentId:"sc-1d6h1o8-3"})(e1,eQ),oQ=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h,g,m,b,v=(0,i.c)(29);v[0]!==e?({border:l,customValidity:r,disabled:s,fontSize:c,padding:u,radius:f,weight:p,__unstable_disableFocusRing:o,...d}=e,v[0]=e,v[1]=o,v[2]=r,v[3]=d,v[4]=l,v[5]=s,v[6]=c,v[7]=u,v[8]=f,v[9]=p):(o=v[1],r=v[2],d=v[3],l=v[4],s=v[5],c=v[6],u=v[7],f=v[8],p=v[9]);let w=void 0===l||l,y=void 0!==s&&s,x=void 0===c?2:c,$=void 0===u?3:u,k=void 0===f?2:f,j=(0,a.useRef)(null),S=U();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>j.current,v[10]=h):h=v[10],(0,a.useImperativeHandle)(t,h),F(j,r);let I=S.scheme,R=S.tone,C=H(x),E=H($),z=S.scheme,N=H(0);v[11]!==y||v[12]!==d||v[13]!==S.scheme||v[14]!==S.tone||v[15]!==N||v[16]!==C||v[17]!==E||v[18]!==p?(g=(0,n.jsx)(oK,{"data-as":"textarea","data-scheme":I,"data-tone":R,...d,$fontSize:C,$padding:E,$scheme:z,$space:N,$tone:S.tone,$weight:p,disabled:y,ref:j}),v[11]=y,v[12]=d,v[13]=S.scheme,v[14]=S.tone,v[15]=N,v[16]=C,v[17]=E,v[18]=p,v[19]=g):g=v[19];let A=H(k),_=w?"":void 0;return v[20]!==o||v[21]!==S.scheme||v[22]!==S.tone||v[23]!==A||v[24]!==_?(m=(0,n.jsx)(oZ,{$radius:A,$unstableDisableFocusRing:o,$scheme:S.scheme,$tone:S.tone,"data-border":_,"data-scheme":S.scheme,"data-tone":S.tone}),v[20]=o,v[21]=S.scheme,v[22]=S.tone,v[23]=A,v[24]=_,v[25]=m):m=v[25],v[26]!==g||v[27]!==m?(b=(0,n.jsx)(oU,{"data-ui":"TextArea",children:(0,n.jsxs)(oq,{children:[g,m]})}),v[26]=g,v[27]=m,v[28]=b):b=v[28],b});oQ.displayName="ForwardRef(TextArea)";let o0={zIndex:2},o1=(0,d.I4)(tE).attrs({forwardedAs:"span"}).withConfig({displayName:"StyledTextInput",componentId:"sc-h62wco-0"})(eq),o2=d.I4.span.withConfig({displayName:"InputRoot",componentId:"sc-h62wco-1"})`flex:1;min-width:0;display:block;position:relative;`,o4=(0,d.I4)(tE).attrs({forwardedAs:"span"}).withConfig({displayName:"Prefix",componentId:"sc-h62wco-2"})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,o3=(0,d.I4)(tE).attrs({forwardedAs:"span"}).withConfig({displayName:"Suffix",componentId:"sc-h62wco-3"})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,o5=d.I4.input.withConfig({displayName:"Input",componentId:"sc-h62wco-4"})(eY,eK,eZ),o6=d.I4.span.withConfig({displayName:"Presentation",componentId:"sc-h62wco-5"})(e1,eQ),o7=(0,d.I4)(tp).withConfig({displayName:"LeftBox",componentId:"sc-h62wco-6"})`position:absolute;top:0;left:0;`,o8=(0,d.I4)(tp).withConfig({displayName:"RightBox",componentId:"sc-h62wco-7"})`position:absolute;top:0;right:0;`,o9=(0,d.I4)(tE).withConfig({displayName:"RightCard",componentId:"sc-h62wco-8"})`background-color:transparent;position:absolute;top:0;right:0;`,re=(0,d.I4)(tR).withConfig({displayName:"TextInputClearButton",componentId:"sc-h62wco-9"})({"&:not([hidden])":{display:"block"}}),rt=(0,a.forwardRef)(function(e,t){let o,r,d,c,u,f,p,h,g,m,b,v,w,x,$,k,j,S,I,R,C,E,z,N,A,_,W,M,T,L,J,O,B,P,D,V,G,Y,X=(0,i.c)(84);X[0]!==e?({__unstable_disableFocusRing:d,border:b,clearButton:c,disabled:v,fontSize:w,icon:o,iconRight:r,onClear:f,padding:x,prefix:p,radius:$,readOnly:h,space:k,suffix:m,customValidity:u,type:j,weight:S,...g}=e,X[0]=e,X[1]=o,X[2]=r,X[3]=d,X[4]=c,X[5]=u,X[6]=f,X[7]=p,X[8]=h,X[9]=g,X[10]=m,X[11]=b,X[12]=v,X[13]=w,X[14]=x,X[15]=$,X[16]=k,X[17]=j,X[18]=S):(o=X[1],r=X[2],d=X[3],c=X[4],u=X[5],f=X[6],p=X[7],h=X[8],g=X[9],m=X[10],b=X[11],v=X[12],w=X[13],x=X[14],$=X[15],k=X[16],j=X[17],S=X[18]);let q=void 0===b||b,K=void 0!==v&&v,Z=void 0===w?2:w,Q=void 0===x?3:x,ee=void 0===$?2:$,et=void 0===k?3:k,eo=void 0===j?"text":j,er=(0,a.useRef)(null),en=U(),ei=H(Z),ea=H(Q),ed=H(ee),el=H(et),es=!!c,ec=!!o,eu=!!r,ef=!!m,ep=!!p;X[19]===Symbol.for("react.memo_cache_sentinel")?(I=()=>er.current,X[19]=I):I=X[19],(0,a.useImperativeHandle)(t,I),F(er,u),X[20]!==f?(R=e=>{e.preventDefault(),e.stopPropagation(),f&&f(),er.current?.focus()},X[20]=f,X[21]=R):R=X[21];let eh=R;X[22]!==p||X[23]!==ed?(E=p&&(0,n.jsx)(o4,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ed,sizing:"border",tone:"inherit",children:(0,n.jsx)("span",{children:p})}),X[22]=p,X[23]=ed,X[24]=E):E=X[24],C=E;let eg=q?"":void 0;X[25]!==o||X[26]!==ei||X[27]!==ea?(N=o&&(0,n.jsx)(o7,{padding:ea,children:(0,n.jsxs)(tg,{size:ei,children:[(0,a.isValidElement)(o)&&o,(0,l.isValidElementType)(o)&&(0,n.jsx)(o,{})]})}),X[25]=o,X[26]=ei,X[27]=ea,X[28]=N):N=X[28],X[29]!==es||X[30]!==r||X[31]!==ei||X[32]!==ea?(A=!es&&r&&(0,n.jsx)(o8,{padding:ea,children:(0,n.jsxs)(tg,{size:ei,children:[(0,a.isValidElement)(r)&&r,(0,l.isValidElementType)(r)&&(0,n.jsx)(r,{})]})}),X[29]=es,X[30]=r,X[31]=ei,X[32]=ea,X[33]=A):A=X[33],X[34]!==ep||X[35]!==ef||X[36]!==d||X[37]!==ed||X[38]!==en.scheme||X[39]!==en.tone||X[40]!==eg||X[41]!==N||X[42]!==A?(_=(0,n.jsxs)(o6,{$hasPrefix:ep,$unstableDisableFocusRing:d,$hasSuffix:ef,$radius:ed,$scheme:en.scheme,$tone:en.tone,"data-border":eg,"data-scheme":en.scheme,"data-tone":en.tone,children:[N,A]}),X[34]=ep,X[35]=ef,X[36]=d,X[37]=ed,X[38]=en.scheme,X[39]=en.tone,X[40]=eg,X[41]=N,X[42]=A,X[43]=_):_=X[43],z=_,X[44]!==ea?(M=ea.map(rr),X[44]=ea,X[45]=M):M=X[45],W=M,X[46]!==ea?(L=ea.map(rn),X[46]=ea,X[47]=L):L=X[47],T=L,J="object"==typeof c?c:y,X[48]!==c||X[49]!==W||X[50]!==T||X[51]!==J||X[52]!==u||X[53]!==K||X[54]!==ei||X[55]!==eh||X[56]!==ed||X[57]!==h?(B=!K&&!h&&c&&(0,n.jsx)(o9,{forwardedAs:"span",padding:W,style:o0,tone:u?"critical":"inherit",children:(0,n.jsx)(re,{"aria-label":"Clear","data-qa":"clear-button",fontSize:ei,icon:s.USm,mode:"bleed",padding:T,radius:ed,...J,onClick:eh,onMouseDown:ro})}),X[48]=c,X[49]=W,X[50]=T,X[51]=J,X[52]=u,X[53]=K,X[54]=ei,X[55]=eh,X[56]=ed,X[57]=h,X[58]=B):B=X[58],O=B,X[59]!==ed||X[60]!==m?(D=m&&(0,n.jsx)(o3,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ed,sizing:"border",tone:"inherit",children:(0,n.jsx)("span",{children:m})}),X[59]=ed,X[60]=m,X[61]=D):D=X[61],P=D;let em=eu||es;return X[62]!==ec||X[63]!==K||X[64]!==ei||X[65]!==ea||X[66]!==h||X[67]!==g||X[68]!==en.scheme||X[69]!==en.tone||X[70]!==el||X[71]!==em||X[72]!==eo||X[73]!==S?(V=(0,n.jsx)(o5,{"data-as":"input","data-scheme":en.scheme,"data-tone":en.tone,...g,$fontSize:ei,$iconLeft:ec,$iconRight:em,$padding:ea,$scheme:en.scheme,$space:el,$tone:en.tone,$weight:S,disabled:K,readOnly:h,ref:er,type:eo}),X[62]=ec,X[63]=K,X[64]=ei,X[65]=ea,X[66]=h,X[67]=g,X[68]=en.scheme,X[69]=en.tone,X[70]=el,X[71]=em,X[72]=eo,X[73]=S,X[74]=V):V=X[74],X[75]!==O||X[76]!==z||X[77]!==V?(G=(0,n.jsxs)(o2,{children:[V,z,O]}),X[75]=O,X[76]=z,X[77]=V,X[78]=G):G=X[78],X[79]!==C||X[80]!==en.tone||X[81]!==P||X[82]!==G?(Y=(0,n.jsxs)(o1,{"data-ui":"TextInput",tone:en.tone,children:[C,G,P]}),X[79]=C,X[80]=en.tone,X[81]=P,X[82]=G,X[83]=Y):Y=X[83],Y});function ro(e){e.preventDefault(),e.stopPropagation()}function rr(e){return 0===e?0:1===e||2===e?1:e-2}function rn(e){return 0===e||1===e?0:2===e?1:e-1}function ri(e){let t,o,r=(0,i.c)(3),[n,d]=(0,a.useState)(e),l=(0,a.useRef)(void 0);r[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let o=()=>{d(e)};if(l.current&&(clearTimeout(l.current),l.current=void 0),!t)return o();l.current=setTimeout(o,t)},r[0]=t):t=r[0];let s=t;return r[1]!==n?(o=[n,s],r[1]=n,r[2]=o):o=r[2],o}rt.displayName="ForwardRef(TextInput)";let ra={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},rd=(0,d.I4)(f.P.create(tE)).withConfig({displayName:"MotionCard",componentId:"sc-1xn138w-0"})`will-change:transform;`,rl=(0,a.memo)((0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p,h,g,m,b,v,w,y,$,k,j,S,I,R,C,E=(0,i.c)(48);E[0]!==e?({animate:o,arrow:r,arrowRef:a,arrowX:d,arrowY:l,children:s,originX:c,originY:u,padding:f,placement:p,radius:h,scheme:m,shadow:b,style:v,...g}=e,E[0]=e,E[1]=o,E[2]=r,E[3]=a,E[4]=d,E[5]=l,E[6]=s,E[7]=c,E[8]=u,E[9]=f,E[10]=p,E[11]=h,E[12]=g,E[13]=m,E[14]=b,E[15]=v):(o=E[1],r=E[2],a=E[3],d=E[4],l=E[5],s=E[6],c=E[7],u=E[8],f=E[9],p=E[10],h=E[11],g=E[12],m=E[13],b=E[14],v=E[15]);let z=o?"transform":void 0;E[16]!==c||E[17]!==u||E[18]!==v||E[19]!==z?(y={originX:c,originY:u,willChange:z,...v},E[16]=c,E[17]=u,E[18]=v,E[19]=z,E[20]=y):y=E[20],w=y;let N=null!==d?d:void 0,A=null!==l?l:void 0;E[21]!==N||E[22]!==A?(k={left:N,top:A,right:void 0,bottom:void 0},E[21]=N,E[22]=A,E[23]=k):k=E[23],$=k;let _=g;return E[24]!==o?(j=o?["hidden","initial"]:void 0,E[24]=o,E[25]=j):j=E[25],E[26]!==o?(S=o?["visible","scaleIn"]:void 0,E[26]=o,E[27]=S):S=E[27],E[28]!==o?(I=o?["hidden","scaleOut"]:void 0,E[28]=o,E[29]=I):I=E[29],E[30]!==r||E[31]!==a||E[32]!==$?(R=r&&(0,n.jsx)(t2,{ref:a,style:$,width:15,height:6,radius:2}),E[30]=r,E[31]=a,E[32]=$,E[33]=R):R=E[33],E[34]!==s||E[35]!==f||E[36]!==p||E[37]!==h||E[38]!==t||E[39]!==w||E[40]!==m||E[41]!==b||E[42]!==I||E[43]!==R||E[44]!==_||E[45]!==j||E[46]!==S?(C=(0,n.jsxs)(rd,{"data-ui":"Tooltip__card",..._,"data-placement":p,padding:f,radius:h,ref:t,scheme:m,shadow:b,style:w,variants:x.card,transition:x.transition,initial:j,animate:S,exit:I,children:[s,R]}),E[34]=s,E[35]=f,E[36]=p,E[37]=h,E[38]=t,E[39]=w,E[40]=m,E[41]=b,E[42]=I,E[43]=R,E[44]=_,E[45]=j,E[46]=S,E[47]=C):C=E[47],C}));rl.displayName="Memo(ForwardRef(TooltipCard))";let rs=G("@sanity/ui/context/tooltipDelayGroup",null);function rc(e){let t,o,r,a=(0,i.c)(9),{children:d,delay:l}=e,[s,c]=ri(!1),[u,f]=ri(null),p="number"==typeof l?l:l?.open||0,h="number"==typeof l?l:l?.close||0,g=s?1:p;return a[0]!==h||a[1]!==u||a[2]!==c||a[3]!==f||a[4]!==g?(o={setIsGroupActive:c,openTooltipId:u,setOpenTooltipId:f,openDelay:g,closeDelay:h},a[0]=h,a[1]=u,a[2]=c,a[3]=f,a[4]=g,a[5]=o):o=a[5],t=o,a[6]!==d||a[7]!==t?(r=(0,n.jsx)(rs.Provider,{value:t,children:d}),a[6]=d,a[7]=t,a[8]=r):r=a[8],r}rc.displayName="TooltipDelayGroupProvider";let ru=(0,d.I4)(od).withConfig({displayName:"StyledTooltip",componentId:"sc-13f2zvh-0"})`pointer-events:none;`,rf=(0,a.forwardRef)(function(e,t){let o=t7(),{layer:r}=Z(),{animate:d=!1,arrow:l=!1,boundaryElement:s=o?.element,children:f,content:h,disabled:g,fallbackPlacements:b=e.fallbackPlacements??ra[e.placement??"bottom"],padding:v=2,placement:w="bottom",portal:y,radius:x=2,scheme:$,shadow:k=2,zOffset:j=r.tooltip.zOffset,delay:S,...I}=e,R=!er()&&d,C=H(b),E=(0,a.useRef)(null),[z,N]=(0,a.useState)(null),A=(0,a.useRef)(null),_="viewport",[W,M]=(0,a.useState)(0);(0,a.useImperativeHandle)(t,()=>E.current);let T=ou(),L="string"==typeof y?T.elements?.[y]||null:T.element,F=(0,a.useMemo)(()=>{let e=[];return e.push((0,u.UU)({boundary:s||void 0,fallbackPlacements:C,padding:4,rootBoundary:_})),e.push((0,u.cY)({mainAxis:4})),e.push((0,u.BN)({boundary:s||void 0,rootBoundary:_,padding:4})),l&&e.push((0,u.UE)({element:A,padding:4})),R&&e.push(tU),e},[R,l,s,C]),{floatingStyles:J,placement:O,middlewareData:B,refs:P,update:D}=(0,u.we)({middleware:F,placement:w,whileElementsMounted:c.ll,elements:{reference:z}}),V=B.arrow?.x,G=B.arrow?.y,Y=B["@sanity/ui/origin"]?.originX,X=B["@sanity/ui/origin"]?.originY,U=(0,a.useId)(),[q,K]=ri(!1),Q=(0,a.useContext)(rs),{setIsGroupActive:ee,setOpenTooltipId:et}=Q||{},eo=q||Q?.openTooltipId===U,en=null!==Q,ei="number"==typeof S?S:S?.open||0,ea="number"==typeof S?S:S?.close||0,ed=en?Q.openDelay:ei,el=en?Q.closeDelay:ea,es=(0,a.useCallback)((e,t)=>{if(en)if(e){let o=t?0:ed;ee?.(e,o),et?.(U,o)}else{let o=el>200?el:200;ee?.(e,o),et?.(null,t?0:el)}else K(e,t?0:e?ed:el)},[en,ed,ee,et,U,el,K]),ec=(0,a.useCallback)(e=>{es(!1),f?.props?.onBlur?.(e)},[f?.props,es]),eu=(0,a.useCallback)(e=>{es(!1,!0),f?.props.onClick?.(e)},[f?.props,es]),ef=(0,a.useCallback)(e=>{es(!1,!0),f?.props.onContextMenu?.(e)},[f?.props,es]),ep=(0,a.useCallback)(e=>{es(!0),f?.props?.onFocus?.(e)},[f?.props,es]),eh=(0,a.useCallback)(e=>{es(!0),f?.props?.onMouseEnter?.(e)},[f?.props,es]),eg=(0,a.useCallback)(e=>{es(!1),f?.props?.onMouseLeave?.(e)},[f?.props,es]);(function(e){let t,o,r,n=(0,i.c)(10),{handleIsOpenChange:d,referenceElement:l,showTooltip:s,isInsideGroup:c}=e;n[0]!==d||n[1]!==l?(t=(e,t)=>{l&&(l===e||e instanceof Node&&l.contains(e)||(d(!1),t()))},n[0]=d,n[1]=l,n[2]=t):t=n[2];let u=(0,m.J)(t);n[3]!==c||n[4]!==u||n[5]!==s?(o=()=>{if(!s||c)return;let e=t=>{u(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},n[3]=c,n[4]=u,n[5]=s,n[6]=o):o=n[6],n[7]!==c||n[8]!==s?(r=[c,s],n[7]=c,n[8]=s,n[9]=r):r=n[9],(0,a.useEffect)(o,r)})({handleIsOpenChange:es,referenceElement:z,showTooltip:eo,isInsideGroup:en}),(0,a.useEffect)(()=>{g&&eo&&es(!1)},[g,es,eo]),(0,a.useEffect)(()=>{!h&&eo&&es(!1)},[h,es,eo]),(0,a.useEffect)(()=>{if(eo)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&es(!1,!0)}},[es,eo]),(0,a.useLayoutEffect)(()=>{M(Math.min(...s?[s.offsetWidth]:[],L?.offsetWidth||document.body.offsetWidth)-8)},[s,L]);let em=(0,a.useCallback)(e=>{A.current=e,D()},[D]),eb=(0,a.useCallback)(e=>{E.current=e,P.setFloating(e)},[P]),ev=(0,a.useMemo)(()=>f?(0,a.cloneElement)(f,{onBlur:ec,onFocus:ep,onMouseEnter:eh,onMouseLeave:eg,onClick:eu,onContextMenu:ef,ref:N}):null,[f,ec,eu,ef,ep,eh,eg]);if((0,a.useImperativeHandle)(f?ox(f):null,()=>z,[z]),!ev)return(0,n.jsx)(n.Fragment,{});if(g)return ev;let ew=(0,n.jsx)(ru,{"data-ui":"Tooltip",...I,ref:eb,style:{...J,maxWidth:W>0?`${W}px`:void 0},zOffset:j,children:(0,n.jsx)(rl,{...I,animate:R,arrow:l,arrowRef:em,arrowX:V,arrowY:G,originX:Y,originY:X,padding:v,placement:O,radius:x,ref:eb,scheme:$,shadow:k,children:h})}),ey=eo&&(y?(0,n.jsx)(of,{__unstable_name:"string"==typeof y?y:void 0,children:ew}):ew);return(0,n.jsxs)(n.Fragment,{children:[R?(0,n.jsx)(p.N,{children:ey}):ey,ev]})});rf.displayName="ForwardRef(Tooltip)";let rp=d.I4.kbd.withConfig({displayName:"StyledHotkeys",componentId:"sc-b37mge-0"})`font:inherit;padding:1px;&:not([hidden]){display:block;}`,rh=(0,d.I4)(tX).withConfig({displayName:"Key",componentId:"sc-b37mge-1"})`&:not([hidden]){display:block;}`,rg=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,s,c,u,f,p=(0,i.c)(24);p[0]!==e?({fontSize:o,keys:r,padding:a,radius:d,space:s,...l}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=a,p[4]=d,p[5]=l,p[6]=s):(o=p[1],r=p[2],a=p[3],d=p[4],l=p[5],s=p[6]);let h=H(void 0===s?.5:s);if(!r||0===r.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,n.jsx)(n.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==o||p[9]!==r||p[10]!==a||p[11]!==d){let e;p[13]!==o||p[14]!==a||p[15]!==d?(e=(e,t)=>(0,n.jsx)(rh,{fontSize:o,padding:a,radius:d,children:e},t),p[13]=o,p[14]=a,p[15]=d,p[16]=e):e=p[16],c=r.map(e),p[8]=o,p[9]=r,p[10]=a,p[11]=d,p[12]=c}else c=p[12];return p[17]!==h||p[18]!==c?(u=(0,n.jsx)(tV,{as:"span",space:h,children:c}),p[17]=h,p[18]=c,p[19]=u):u=p[19],p[20]!==t||p[21]!==l||p[22]!==u?(f=(0,n.jsx)(rp,{"data-ui":"Hotkeys",...l,ref:t,children:u}),p[20]=t,p[21]=l,p[22]=u,p[23]=f):f=p[23],f});rg.displayName="ForwardRef(Hotkeys)";let rm=G("@sanity/ui/context/menu",null);function rb(e){return j(e)&&"true"!==e.getAttribute("data-disabled")||I(e)&&!e.disabled}function rv(e){return e.filter(rb)}let rw=[],ry=(0,d.I4)(tp).withConfig({displayName:"StyledMenu",componentId:"sc-xt0tnv-0"})`outline:none;overflow:auto;`,rx=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h,g,m,b,v,w,y,x,$,k,j,S,I,R,C,E=(0,i.c)(50);if(E[0]!==e){let{children:t,focusFirst:n,focusLast:i,onClickOutside:a,onEscape:b,onItemClick:v,onItemSelect:w,onKeyDown:y,originElement:x,padding:$,registerElement:k,shouldFocus:j,space:S,...I}=e;r=t,d=a,l=b,s=v,c=w,u=y,f=x,g=$,p=k,o=j,m=S,h=I,E[0]=e,E[1]=o,E[2]=r,E[3]=d,E[4]=l,E[5]=s,E[6]=c,E[7]=u,E[8]=f,E[9]=p,E[10]=h,E[11]=g,E[12]=m}else o=E[1],r=E[2],d=E[3],l=E[4],s=E[5],c=E[6],u=E[7],f=E[8],p=E[9],h=E[10],g=E[11],m=E[12];let z=void 0===g?1:g,N=void 0===m?1:m,A=o??(e.focusFirst&&"first"||e.focusLast&&"last"||null),_=(0,a.useRef)(null);E[13]===Symbol.for("react.memo_cache_sentinel")?(b=()=>_.current,E[13]=b):b=E[13],(0,a.useImperativeHandle)(t,b);let{isTopLayer:W}=on();E[14]!==u||E[15]!==f||E[16]!==A?(v={onKeyDown:u,originElement:f,shouldFocus:A,rootElementRef:_},E[14]=u,E[15]=f,E[16]=A,E[17]=v):v=E[17];let{activeElement:M,activeIndex:H,handleItemMouseEnter:L,handleItemMouseLeave:F,handleKeyDown:J,mount:O}=function(e){let{onKeyDown:t,originElement:o,shouldFocus:r,rootElementRef:n}=e,i=(0,a.useRef)([]),[d,l]=(0,a.useState)(-1),s=(0,a.useRef)(d),c=(0,a.useMemo)(()=>i.current[d]||null,[d]),u=!!n.current,f=(0,a.useCallback)(e=>{l(e),s.current=e},[]),p=(0,a.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let o=new WeakMap;for(let r of t)o.set(r,function(e,t){let o=[],r=t;for(;r!==e;){let t=r.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(r);if(o.unshift(n),t===e)break;r=t}return o}(e,r));t.sort((e,t)=>{let r=o.get(e)||rw,n=o.get(t)||rw,i=Math.max(r.length,n.length);for(let e=0;e<i;e+=1){let t=r[e]||-1,o=n[e]||-1;if(t!==o)return t-o}return 0})}(n.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[n,f]),h=(0,a.useCallback)(e=>{if("Tab"===e.key){o&&o.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=rv(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=rv(i.current),o=t[t.length-1];if(!o)return;f(i.current.indexOf(o));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=rv(i.current),o=t.length;if(0===o)return;let r=i.current[s.current],n=t.indexOf(r),a=t[n=(n-1+o)%o];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=rv(i.current),o=t.length;if(0===o)return;let r=i.current[s.current],n=t.indexOf(r),a=t[n=(n+1)%o];f(i.current.indexOf(a));return}t&&t(e)},[t,o,f]),g=(0,a.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),m=(0,a.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,a.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===d){if("first"===r){let e=rv(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===r){let e=rv(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[d]||null)?.focus()});return()=>cancelAnimationFrame(e)},[d,u,f,r]),{activeElement:c,activeIndex:d,handleItemMouseEnter:g,handleItemMouseLeave:m,handleKeyDown:h,mount:p}}(v),B=(0,a.useRef)(null);E[18]!==p?(w=e=>{B.current&&(B.current(),B.current=null),_.current=e,_.current&&p&&(B.current=p(_.current))},E[18]=p,E[19]=w):w=E[19];let D=w;return E[20]!==H||E[21]!==c?(y=()=>{c&&c(H)},x=[H,c],E[20]=H,E[21]=c,E[22]=y,E[23]=x):(y=E[22],x=E[23]),(0,a.useEffect)(y,x),E[24]===Symbol.for("react.memo_cache_sentinel")?($=()=>[_.current],E[24]=$):$=E[24],T(W&&d,$),E[25]!==W||E[26]!==l?(k=e=>{W&&"Escape"===e.key&&(e.stopPropagation(),l&&l())},E[25]=W,E[26]=l,E[27]=k):k=E[27],P(k),E[28]!==M||E[29]!==H||E[30]!==L||E[31]!==F||E[32]!==O||E[33]!==d||E[34]!==l||E[35]!==s||E[36]!==p?(S={version:0,activeElement:M,activeIndex:H,mount:O,onClickOutside:d,onEscape:l,onItemClick:s,onItemMouseEnter:L,onItemMouseLeave:F,registerElement:p,onMouseEnter:L,onMouseLeave:F},E[28]=M,E[29]=H,E[30]=L,E[31]=F,E[32]=O,E[33]=d,E[34]=l,E[35]=s,E[36]=p,E[37]=S):S=E[37],j=S,E[38]!==r||E[39]!==N?(I=(0,n.jsx)(oB,{space:N,children:r}),E[38]=r,E[39]=N,E[40]=I):I=E[40],E[41]!==J||E[42]!==D||E[43]!==z||E[44]!==h||E[45]!==I?(R=(0,n.jsx)(ry,{"data-ui":"Menu",...h,onKeyDown:J,padding:z,ref:D,role:"menu",tabIndex:-1,children:I}),E[41]=J,E[42]=D,E[43]=z,E[44]=h,E[45]=I,E[46]=R):R=E[46],E[47]!==R||E[48]!==j?(C=(0,n.jsx)(rm.Provider,{value:j,children:R}),E[47]=R,E[48]=j,E[49]=C):C=E[49],C});rx.displayName="ForwardRef(Menu)";let r$=d.I4.hr.withConfig({displayName:"MenuDivider",componentId:"sc-uhoxwu-0"})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;r$.displayName="MenuDivider";let rk=(0,d.I4)(tp).withConfig({displayName:"Selectable",componentId:"sc-1w01ang-0"})(e1,function(){return(0,d.AH)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:o,style:n}=(0,r.JW)(e.theme),i=o.selectable[t];return(0,d.AH)`
    ${tk(o,i.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${tk(o,i.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${tk(o,i.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${tk(o,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${tk(o,i.hovered)}
            }

            &:active {
              ${tk(o,i.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${tk(o,i.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${tk(o,i.pressed)}
        }

        &[data-selected] {
          ${tk(o,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${tk(o,i.hovered)}
            }
            &:active {
              ${tk(o,i.pressed)}
            }
          }
        }
      }
    }

    ${n?.card?.root}
  `});function rj(){let e=(0,a.useContext)(rm);if(!e)throw Error("useMenu(): missing context value");if(!t5(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function rS(e){let t,o,r,d,c,u,f,p,h,g,m,b,v,w,y,x,$,k,j,S,I,R,C,E,z,N,A,_,W,M,T,L,F,J,O,B=(0,i.c)(79);B[0]!==e?({as:f,children:o,fontSize:p,icon:t,menu:r,onClick:d,padding:h,popover:c,radius:g,space:m,text:v,tone:b,...u}=e,B[0]=e,B[1]=t,B[2]=o,B[3]=r,B[4]=d,B[5]=c,B[6]=u,B[7]=f,B[8]=p,B[9]=h,B[10]=g,B[11]=m,B[12]=b,B[13]=v):(t=B[1],o=B[2],r=B[3],d=B[4],c=B[5],u=B[6],f=B[7],p=B[8],h=B[9],g=B[10],m=B[11],b=B[12],v=B[13]);let P=void 0===f?"button":f,D=void 0===p?1:p,V=void 0===h?3:h,G=void 0===g?2:g,Y=void 0===m?3:m,X=void 0===b?"default":b,q=rj(),{scheme:K}=U(),{activeElement:Z,mount:Q,onClickOutside:ee,onEscape:et,onItemClick:eo,onItemMouseEnter:er,registerElement:en}=q,ei=er??q.onMouseEnter,[ea,ed]=(0,a.useState)(null),[el,es]=(0,a.useState)(!1),[ec,eu]=(0,a.useState)(null),ef=!!Z&&Z===ea,[ep,eh]=(0,a.useState)(!1);B[14]!==ei?(w=e=>{eh(!1),ei(e),es(!0)},B[14]=ei,B[15]=w):w=B[15];let eg=w;B[16]!==ea?(y=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),es(!1),requestAnimationFrame(()=>{ea?.focus()}))},B[16]=ea,B[17]=y):y=B[17];let em=y;B[18]!==d?(x=e=>{d?.(e),eu("first"),es(!0)},B[18]=d,B[19]=x):x=B[19];let eb=x;B[20]!==eo?($=()=>{es(!1),eo?.()},B[20]=eo,B[21]=$):$=B[21];let ev=$;B[22]===Symbol.for("react.memo_cache_sentinel")?(k=()=>eh(!0),B[22]=k):k=B[22];let ew=k;B[23]!==Q||B[24]!==ea?(j=()=>Q(ea),S=[Q,ea],B[23]=Q,B[24]=ea,B[25]=j,B[26]=S):(j=B[25],S=B[26]),(0,a.useEffect)(j,S),B[27]!==ef?(I=()=>{ef||es(!1)},R=[ef],B[27]=ef,B[28]=I,B[29]=R):(I=B[28],R=B[29]),(0,a.useEffect)(I,R),B[30]!==el?(C=()=>{el||eh(!1)},E=[el],B[30]=el,B[31]=C,B[32]=E):(C=B[31],E=B[32]),(0,a.useEffect)(C,E),B[33]!==ec?(z=()=>{if(!ec)return;let e=requestAnimationFrame(()=>eu(null));return()=>cancelAnimationFrame(e)},N=[ec],B[33]=ec,B[34]=z,B[35]=N):(z=B[34],N=B[35]),(0,a.useEffect)(z,N),B[36]!==o||B[37]!==ev||B[38]!==em||B[39]!==r||B[40]!==ee||B[41]!==et||B[42]!==en||B[43]!==ec?(A=(0,n.jsx)(rx,{...r,onClickOutside:ee,onEscape:et,onItemClick:ev,onKeyDown:em,onMouseEnter:ew,registerElement:en,shouldFocus:ec,children:o}),B[36]=o,B[37]=ev,B[38]=em,B[39]=r,B[40]=ee,B[41]=et,B[42]=en,B[43]=ec,B[44]=A):A=B[44];let ey=A;B[45]===Symbol.for("react.memo_cache_sentinel")?(_=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){eu("first"),es(!0),eh(!0);return}},B[45]=_):_=B[45];let ex=_,e$="button"===P?ep:void 0,ek="button"!==P?ep:void 0,ej=!ep&&ef?"":void 0,eS=H(G),eI="button"===P?"button":void 0;return B[46]!==t||B[47]!==D?(W=t&&(0,n.jsxs)(tg,{size:D,children:[(0,a.isValidElement)(t)&&t,(0,l.isValidElementType)(t)&&(0,n.jsx)(t,{})]}),B[46]=t,B[47]=D,B[48]=W):W=B[48],B[49]!==D||B[50]!==v?(M=(0,n.jsx)(tp,{flex:1,children:(0,n.jsx)(tg,{size:D,textOverflow:"ellipsis",weight:"medium",children:v})}),B[49]=D,B[50]=v,B[51]=M):M=B[51],B[52]===Symbol.for("react.memo_cache_sentinel")?(T=(0,n.jsx)(s.vKP,{}),B[52]=T):T=B[52],B[53]!==D?(L=(0,n.jsx)(tg,{size:D,children:T}),B[53]=D,B[54]=L):L=B[54],B[55]!==V||B[56]!==Y||B[57]!==W||B[58]!==M||B[59]!==L?(F=(0,n.jsxs)(tw,{gap:Y,padding:V,children:[W,M,L]}),B[55]=V,B[56]=Y,B[57]=W,B[58]=M,B[59]=L,B[60]=F):F=B[60],B[61]!==P||B[62]!==eb||B[63]!==eg||B[64]!==u||B[65]!==K||B[66]!==e$||B[67]!==ek||B[68]!==ej||B[69]!==eS||B[70]!==eI||B[71]!==F||B[72]!==X?(J=(0,n.jsx)(rk,{"data-as":P,"data-ui":"MenuGroup",forwardedAs:P,...u,"aria-pressed":e$,"data-pressed":ek,"data-selected":ej,$radius:eS,$tone:X,$scheme:K,onClick:eb,onKeyDown:ex,onMouseEnter:eg,ref:ed,tabIndex:-1,type:eI,children:F}),B[61]=P,B[62]=eb,B[63]=eg,B[64]=u,B[65]=K,B[66]=e$,B[67]=ek,B[68]=ej,B[69]=eS,B[70]=eI,B[71]=F,B[72]=X,B[73]=J):J=B[73],B[74]!==ey||B[75]!==el||B[76]!==c||B[77]!==J?(O=(0,n.jsx)(oC,{...c,content:ey,"data-ui":"MenuGroup__popover",open:el,children:J}),B[74]=ey,B[75]=el,B[76]=c,B[77]=J,B[78]=O):O=B[78],O}rk.displayName="Selectable",rS.displayName="MenuGroup";let rI=(0,a.forwardRef)(function(e,t){let o,r,d,s,c,u,f,p,h,g,m,b,v,w,y,x,$,k,j,S,I,R,C,E,z,N,A,_,W,M,T,L,F,J=(0,i.c)(73);J[0]!==e?({as:x,children:d,disabled:s,fontSize:$,hotkeys:c,icon:o,iconRight:r,onClick:u,padding:k,paddingX:m,paddingY:b,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:p,pressed:v,radius:j,selected:y,space:S,text:R,tone:I,...w}=e,J[0]=e,J[1]=o,J[2]=r,J[3]=d,J[4]=s,J[5]=c,J[6]=u,J[7]=f,J[8]=p,J[9]=h,J[10]=g,J[11]=m,J[12]=b,J[13]=v,J[14]=w,J[15]=y,J[16]=x,J[17]=$,J[18]=k,J[19]=j,J[20]=S,J[21]=I,J[22]=R):(o=J[1],r=J[2],d=J[3],s=J[4],c=J[5],u=J[6],f=J[7],p=J[8],h=J[9],g=J[10],m=J[11],b=J[12],v=J[13],w=J[14],y=J[15],x=J[16],$=J[17],k=J[18],j=J[19],S=J[20],I=J[21],R=J[22]);let O=void 0===x?"button":x,B=void 0===$?1:$,P=void 0===k?3:k,D=void 0===j?2:j,V=void 0===S?3:S,G=void 0===I?"default":I,{scheme:Y}=U(),X=rj(),{activeElement:q,mount:K,onItemClick:Z,onItemMouseEnter:Q,onItemMouseLeave:ee}=X,et=Q??X.onMouseEnter,eo=ee??X.onMouseLeave,[er,en]=(0,a.useState)(null),ei=!!q&&q===er,ea=(0,a.useRef)(null);J[23]===Symbol.for("react.memo_cache_sentinel")?(C=()=>ea.current,J[23]=C):C=J[23],(0,a.useImperativeHandle)(t,C),J[24]!==K||J[25]!==er||J[26]!==y?(E=()=>K(er,y),z=[K,er,y],J[24]=K,J[25]=er,J[26]=y,J[27]=E,J[28]=z):(E=J[27],z=J[28]),(0,a.useEffect)(E,z),J[29]!==s||J[30]!==u||J[31]!==Z?(N=e=>{s||(u&&u(e),Z&&Z())},J[29]=s,J[30]=u,J[31]=Z,J[32]=N):N=J[32];let ed=N;J[33]!==P||J[34]!==f||J[35]!==p||J[36]!==h||J[37]!==g||J[38]!==m||J[39]!==b?(_={padding:P,paddingX:m,paddingY:b,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:p},J[33]=P,J[34]=f,J[35]=p,J[36]=h,J[37]=g,J[38]=m,J[39]=b,J[40]=_):_=J[40],A=_;let el=H(B);J[41]!==el?(W=el.map(rR),J[41]=el,J[42]=W):W=J[42];let es=W;J[43]===Symbol.for("react.memo_cache_sentinel")?(M=e=>{ea.current=e,en(e)},J[43]=M):M=J[43];let ec=M,eu="button"!==O&&v?"":void 0,ef=ei?"":void 0,ep=s?"":void 0,eh=H(D),eg=H(0),em=s?"default":G,eb="button"===O?"button":void 0;return J[44]!==o||J[45]!==r||J[46]!==B||J[47]!==c||J[48]!==es||J[49]!==A||J[50]!==V||J[51]!==R?(T=(o||R||r)&&(0,n.jsxs)(tw,{as:"span",gap:V,align:"center",...A,children:[o&&(0,n.jsxs)(tg,{size:B,children:[(0,a.isValidElement)(o)&&o,(0,l.isValidElementType)(o)&&(0,n.jsx)(o,{})]}),R&&(0,n.jsx)(tp,{flex:1,children:(0,n.jsx)(tg,{size:B,textOverflow:"ellipsis",weight:"medium",children:R})}),c&&(0,n.jsx)(rg,{fontSize:es,keys:c,style:{marginTop:-4,marginBottom:-4}}),r&&(0,n.jsxs)(tg,{size:B,children:[(0,a.isValidElement)(r)&&r,(0,l.isValidElementType)(r)&&(0,n.jsx)(r,{})]})]}),J[44]=o,J[45]=r,J[46]=B,J[47]=c,J[48]=es,J[49]=A,J[50]=V,J[51]=R,J[52]=T):T=J[52],J[53]!==d||J[54]!==A?(L=d&&(0,n.jsx)(tp,{as:"span",...A,children:d}),J[53]=d,J[54]=A,J[55]=L):L=J[55],J[56]!==O||J[57]!==s||J[58]!==ed||J[59]!==et||J[60]!==eo||J[61]!==w||J[62]!==Y||J[63]!==eu||J[64]!==ef||J[65]!==ep||J[66]!==eh||J[67]!==eg||J[68]!==em||J[69]!==eb||J[70]!==T||J[71]!==L?(F=(0,n.jsxs)(rk,{"data-ui":"MenuItem",role:"menuitem",...w,"data-pressed":eu,"data-selected":ef,"data-disabled":ep,forwardedAs:O,$radius:eh,$padding:eg,$tone:em,$scheme:Y,disabled:s,onClick:ed,onMouseEnter:et,onMouseLeave:eo,ref:ec,tabIndex:-1,type:eb,children:[T,L]}),J[56]=O,J[57]=s,J[58]=ed,J[59]=et,J[60]=eo,J[61]=w,J[62]=Y,J[63]=eu,J[64]=ef,J[65]=ep,J[66]=eh,J[67]=eg,J[68]=em,J[69]=eb,J[70]=T,J[71]=L,J[72]=F):F=J[72],F});function rR(e){return e-1}rI.displayName="ForwardRef(MenuItem)";let rC=(0,d.I4)(tR).withConfig({displayName:"CustomButton",componentId:"sc-1kns779-0"})`max-width:100%;`,rE=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c,u,f,p,h,g,m,b,v,w,y,x=(0,i.c)(30);x[0]!==e?({icon:r,id:d,focused:o,fontSize:p,label:l,onClick:s,onFocus:c,padding:h,selected:f,...u}=e,x[0]=e,x[1]=o,x[2]=r,x[3]=d,x[4]=l,x[5]=s,x[6]=c,x[7]=u,x[8]=f,x[9]=p,x[10]=h):(o=x[1],r=x[2],d=x[3],l=x[4],s=x[5],c=x[6],u=x[7],f=x[8],p=x[9],h=x[10]);let $=void 0===p?1:p,k=void 0===h?2:h,j=(0,a.useRef)(null),S=(0,a.useRef)(!1);x[11]===Symbol.for("react.memo_cache_sentinel")?(g=()=>j.current,x[11]=g):g=x[11],(0,a.useImperativeHandle)(t,g),x[12]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{S.current=!1},x[12]=m):m=x[12];let I=m;x[13]!==c?(b=e=>{S.current=!0,c&&c(e)},x[13]=c,x[14]=b):b=x[14];let R=b;x[15]!==o?(v=()=>{o&&!S.current&&(j.current&&j.current.focus(),S.current=!0)},w=[o],x[15]=o,x[16]=v,x[17]=w):(v=x[16],w=x[17]),(0,a.useEffect)(v,w);let C=f?"true":"false",E=f?0:-1;return x[18]!==$||x[19]!==R||x[20]!==r||x[21]!==d||x[22]!==l||x[23]!==s||x[24]!==k||x[25]!==u||x[26]!==f||x[27]!==C||x[28]!==E?(y=(0,n.jsx)(rC,{"data-ui":"Tab",...u,"aria-selected":C,fontSize:$,icon:r,id:d,mode:"bleed",onClick:s,onBlur:I,onFocus:R,padding:k,ref:j,role:"tab",selected:f,tabIndex:E,text:l,type:"button"}),x[18]=$,x[19]=R,x[20]=r,x[21]=d,x[22]=l,x[23]=s,x[24]=k,x[25]=u,x[26]=f,x[27]=C,x[28]=E,x[29]=y):y=x[29],y});rE.displayName="ForwardRef(Tab)";let rz=(0,d.I4)(tV).withConfig({displayName:"CustomInline",componentId:"sc-5cm04m-0"})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,rN=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,c=(0,i.c)(15);c[0]!==e?({children:o,...r}=e,c[0]=e,c[1]=o,c[2]=r):(o=c[1],r=c[2]);let[u,f]=(0,a.useState)(-1);if(c[3]!==o||c[4]!==u){let e,t=a.Children.toArray(o).filter(a.isValidElement);c[6]!==u?(e=(e,t)=>(0,a.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),c[6]=u,c[7]=e):e=c[7],d=t.map(e),c[3]=o,c[4]=u,c[5]=d}else d=c[5];let p=d,h=p.length;c[8]!==h?(l=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},c[8]=h,c[9]=l):l=c[9];let g=l;return c[10]!==g||c[11]!==t||c[12]!==r||c[13]!==p?(s=(0,n.jsx)(rz,{"data-ui":"TabList",...r,onKeyDown:g,ref:t,role:"tablist",children:p}),c[10]=g,c[11]=t,c[12]=r,c[13]=p,c[14]=s):s=c[14],s});rN.displayName="ForwardRef(TabList)"}}]);