import{b as w,z as T,d as v,a4 as N,a as I,c as M,o as l,l as V,g as t,m,n as o,h as a,e as c,w as r,q as g,ae as k,O as y,E as C,j as h,I as b,s as $,_ as P,y as j}from"./index-cdc499c6.js";const q=w({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:T,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),F={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},K=v({name:"ElTag"}),O=v({...K,props:q,emits:F,setup(n,{emit:i}){const _=n,E=N(),s=I("tag"),u=M(()=>{const{type:e,hit:f,effect:S,closable:z,round:B}=_;return[s.b(),s.is("closable",z),s.m(e),s.m(E.value),s.m(S),s.is("hit",f),s.is("round",B)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(l(),V("span",{key:0,class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(C),{key:0,class:o(a(s).e("close")),onClick:y(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)):(l(),c($,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[t("span",{class:o(a(u)),style:b({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(C),{key:0,class:o(a(s).e("close")),onClick:y(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):h("v-if",!0)],6)]),_:3},8,["name"]))}});var A=P(O,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const G=j(A);export{G as E,q as t};
