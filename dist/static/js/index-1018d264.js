import{J as E,b0 as S,r as p,h as o,d as $,L as I,at as L,o as N,e as R,w as g,q as b,p as x,g as T,ac as V}from"./index-6fcfa17b.js";import{E as z}from"./el-card-b45e0140.js";function k(f=p(document.body)){let c="",i,l=null;const d=Symbol("watermark").toString(),s=E(null);function w(t,e){const n=document.createElement("canvas");n.width=200,n.height=120;const r=n.getContext("2d");return r&&(r.rotate(((e==null?void 0:e.rotate)??-20)*Math.PI/120),r.font=(e==null?void 0:e.font)??"18px Vedana",r.fillStyle=(e==null?void 0:e.fillStyle)??"rgba(0, 0, 0, 0.12)",r.textAlign="left",r.textBaseline="middle",r.fillText(t,n.width/20,n.height)),n.toDataURL("image/png")}const a=(t,e)=>{if(o(s))return u({text:t,attr:e}),d;const n=document.createElement("div");s.value=n,n.id=d,n.style.pointerEvents="none",n.style.top="0px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000";const r=o(f);if(!r)return d;r.style.position="relative";const{clientHeight:v,clientWidth:y}=r;return u({text:t,width:y,height:v,attr:e}),r.appendChild(n),d};function u(t={}){const e=o(s);e&&(t.width&&(e.style.width=`${t.width}px`),t.height&&(e.style.height=`${t.height}px`),t.text&&(e.style.background=`url(${w(t.text,t.attr)}) left top repeat`),c=e.style.cssText)}function m(t,e){e&&(i=e),a(t,i),i!=null&&i.forever&&W(t,i),window.addEventListener("resize",h)}const h=S(function(){const t=o(f);if(!t)return;const{clientHeight:e,clientWidth:n}=t;u({height:e,width:n})},30),_=()=>{const t=o(s);s.value=null,l==null||l.disconnect(),l??(l=null);const e=o(f);e&&(t&&e.removeChild(t),window.removeEventListener("resize",h))},W=(t,e)=>{const n=o(s);n&&(l=new MutationObserver(r=>{if(r.length){const{removedNodes:v,type:y,target:C}=r[0],B=n.getAttribute("style");v[0]===n?(s.value=null,l.disconnect(),a(t,e)):y==="attributes"&&C===n&&B!==c&&n.setAttribute("style",c)}}),l.observe(o(f),{childList:!0,attributes:!0,subtree:!0}))};return{setWatermark:m,clear:_}}const H=$({__name:"index",setup(f){const c=p(),{setWatermark:i,clear:l}=k(),{setWatermark:d,clear:s}=k(c);return I(()=>{d("不可删除的水印",{forever:!0,fillStyle:"#2ecc71"})}),L(()=>{l(),s()}),(w,a)=>{const u=V,m=z;return N(),R(m,{shadow:"never",class:"h-full"},{default:g(()=>[b(u,{onClick:a[0]||(a[0]=h=>o(i)("测试水印"))},{default:g(()=>[x("设置全屏水印")]),_:1}),b(u,{onClick:a[1]||(a[1]=h=>o(l)())},{default:g(()=>[x("清除水印")]),_:1}),T("div",{ref_key:"divRef",ref:c,class:"my-4 w-350 h-100 border-dotted border-2 border-primary"},null,512)]),_:1})}}});export{H as default};
