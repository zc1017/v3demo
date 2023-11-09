import{d as S,R as q,aX as x,G as U,a as W,f as R,au as B,Y as ee,b as V,C as te,h as l,o as s,l as m,g as b,F as w,a1 as z,e as D,q as d,_ as F,W as se,a4 as le,u as ne,Q as ie,c as M,n as E,m as A,p as N,t as P,j as T,ay as oe,y as O,U as ae,B as re,w as c,i as ce,E as pe}from"./index-40c733bf.js";/* empty css               */import{E as ue}from"./el-card-7e099002.js";import{E as de}from"./index-fd04fce8.js";const G=Symbol("elDescriptions");var I=S({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup(){return{descriptions:q(G,{})}},render(){var h,p,t,g,a,u,i;const f=x(this.cell),e=(((h=this.cell)==null?void 0:h.dirs)||[]).map(X=>{const{dir:Y,arg:H,modifiers:J,value:Z}=X;return[Y,Z,H,J]}),{border:_,direction:n}=this.descriptions,o=n==="vertical",k=((g=(t=(p=this.cell)==null?void 0:p.children)==null?void 0:t.label)==null?void 0:g.call(t))||f.label,v=(i=(u=(a=this.cell)==null?void 0:a.children)==null?void 0:u.default)==null?void 0:i.call(u),r=f.span,C=f.align?`is-${f.align}`:"",$=f.labelAlign?`is-${f.labelAlign}`:C,j=f.className,K=f.labelClassName,L={width:U(f.width),minWidth:U(f.minWidth)},y=W("descriptions");switch(this.type){case"label":return R(B(this.tag,{style:L,class:[y.e("cell"),y.e("label"),y.is("bordered-label",_),y.is("vertical-label",o),$,K],colSpan:o?r:1},k),e);case"content":return R(B(this.tag,{style:L,class:[y.e("cell"),y.e("content"),y.is("bordered-content",_),y.is("vertical-content",o),C,j],colSpan:o?r:r*2-1},v),e);default:return R(B("td",{style:L,class:[y.e("cell"),C],colSpan:r},[ee(k)?void 0:B("span",{class:[y.e("label"),K]},k),B("span",{class:[y.e("content"),j]},v)]),e)}}});const me=V({row:{type:te(Array),default:()=>[]}}),fe={key:1},ve=S({name:"ElDescriptionsRow"}),ge=S({...ve,props:me,setup(h){const p=q(G,{});return(t,g)=>l(p).direction==="vertical"?(s(),m(w,{key:0},[b("tr",null,[(s(!0),m(w,null,z(t.row,(a,u)=>(s(),D(l(I),{key:`tr1-${u}`,cell:a,tag:"th",type:"label"},null,8,["cell"]))),128))]),b("tr",null,[(s(!0),m(w,null,z(t.row,(a,u)=>(s(),D(l(I),{key:`tr2-${u}`,cell:a,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(s(),m("tr",fe,[(s(!0),m(w,null,z(t.row,(a,u)=>(s(),m(w,{key:`tr3-${u}`},[l(p).border?(s(),m(w,{key:0},[d(l(I),{cell:a,tag:"td",type:"label"},null,8,["cell"]),d(l(I),{cell:a,tag:"td",type:"content"},null,8,["cell"])],64)):(s(),D(l(I),{key:1,cell:a,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var _e=F(ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const be=V({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:se,title:{type:String,default:""},extra:{type:String,default:""}}),he=S({name:"ElDescriptions"}),ye=S({...he,props:be,setup(h){const p=h,t=W("descriptions"),g=le(),a=ne();ie(G,p);const u=M(()=>[t.b(),t.m(g.value)]),i=(e,_,n,o=!1)=>(e.props||(e.props={}),_>n&&(e.props.span=n),o&&(e.props.span=_),e),f=()=>{if(!a.default)return[];const e=oe(a.default()).filter(v=>{var r;return((r=v==null?void 0:v.type)==null?void 0:r.name)==="ElDescriptionsItem"}),_=[];let n=[],o=p.column,k=0;return e.forEach((v,r)=>{var C;const $=((C=v.props)==null?void 0:C.span)||1;if(r<e.length-1&&(k+=$>o?o:$),r===e.length-1){const j=p.column-k%p.column;n.push(i(v,j,o,!0)),_.push(n);return}$<o?(o-=$,n.push(v)):(n.push(i(v,$,o)),_.push(n),o=p.column,n=[])}),_};return(e,_)=>(s(),m("div",{class:E(l(u))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(s(),m("div",{key:0,class:E(l(t).e("header"))},[b("div",{class:E(l(t).e("title"))},[A(e.$slots,"title",{},()=>[N(P(e.title),1)])],2),b("div",{class:E(l(t).e("extra"))},[A(e.$slots,"extra",{},()=>[N(P(e.extra),1)])],2)],2)):T("v-if",!0),b("div",{class:E(l(t).e("body"))},[b("table",{class:E([l(t).e("table"),l(t).is("bordered",e.border)])},[b("tbody",null,[(s(!0),m(w,null,z(f(),(n,o)=>(s(),D(_e,{key:o,row:n},null,8,["row"]))),128))])],2)],2)],2))}});var ke=F(ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]);const we=V({label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}),Q=S({name:"ElDescriptionsItem",props:we}),Se=O(ke,{DescriptionsItem:Q}),Ee=ae(Q),De=V({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:re}}),$e={click:h=>h instanceof MouseEvent},Ne=["href"],Ce=S({name:"ElLink"}),Pe=S({...Ce,props:De,emits:$e,setup(h,{emit:p}){const t=h,g=W("link"),a=M(()=>[g.b(),g.m(t.type),g.is("disabled",t.disabled),g.is("underline",t.underline&&!t.disabled)]);function u(i){t.disabled||p("click",i)}return(i,f)=>(s(),m("a",{class:E(l(a)),href:i.disabled||!i.href?void 0:i.href,onClick:u},[i.icon?(s(),D(l(pe),{key:0},{default:c(()=>[(s(),D(ce(i.icon)))]),_:1})):T("v-if",!0),i.$slots.default?(s(),m("span",{key:1,class:E(l(g).e("inner"))},[A(i.$slots,"default")],2)):T("v-if",!0),i.$slots.icon?A(i.$slots,"icon",{key:2}):T("v-if",!0)],10,Ne))}});var ze=F(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const Be=O(ze);const Ie=b("div",{class:"text-lg mb-2"},"关于",-1),je=b("p",{class:"leading-6"}," Element Admin 是一个基于 Vue3、Vite、Pinia、Element-Plus、Unocss、TypeScript 的中后台解决方案，它使用了最新的前端技术栈，，内置主题配置、动态菜单、权限校验等，基于 mock 实现的动态数据展示，可以当作开箱的模板，也可用于学习参考。 ",-1),Te=b("div",{class:"text-lg mb-2"},"项目信息",-1),Ae=b("div",{class:"text-lg mb-2"},"生产环境依赖",-1),Ve=b("div",{class:"text-lg mb-2"},"开发环境依赖",-1),Ge=S({name:"About",__name:"index",setup(h){const{pkg:p,lastBuildTime:t}={pkg:{dependencies:{"@element-plus/icons-vue":"^2.1.0","@vueuse/core":"^10.3.0",axios:"^1.4.0",dayjs:"^1.11.9",echarts:"^5.4.3","element-plus":"^2.3.8",mockjs:"^1.1.0",nprogress:"^0.2.0",pinia:"^2.1.4",vue:"^3.3.4","vue-i18n":"^9.2.2","vue-router":"^4.0.13"},devDependencies:{"@commitlint/cli":"^17.6.7","@commitlint/config-conventional":"^17.6.7","@types/mockjs":"^1.0.7","@types/node":"^18.16.19","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^6.1.0","@typescript-eslint/parser":"^6.1.0","@unocss/preset-uno":"0.53.5","@unocss/transformer-directives":"0.53.5","@unocss/vite":"0.53.5","@vitejs/plugin-vue":"^4.2.3","@vitejs/plugin-vue-jsx":"^3.0.1","@vue/eslint-config-typescript":"^11.0.3",consola:"^3.2.3",eslint:"^8.45.0","eslint-config-prettier":"^8.8.0","eslint-define-config":"^1.21.0","eslint-plugin-prettier":"^5.0.0","eslint-plugin-vue":"^9.15.1",husky:"^8.0.3","lint-staged":"^13.2.3",prettier:"^3.0.0","rollup-plugin-visualizer":"^5.9.2",sass:"^1.63.6",typescript:"^5.0.2","unplugin-auto-import":"^0.16.6","unplugin-icons":"^0.16.5","unplugin-vue-components":"^0.25.1",vite:"^4.4.0","vite-plugin-compression":"^0.5.1","vite-plugin-mock":"2.9.8","vite-plugin-progress":"^0.0.7","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^2.0.1","vite-plugin-vue-devtools":"^0.5.1","vue-tsc":"^1.8.3"},name:"element-admin",version:"1.26.0"},lastBuildTime:"2023-11-09 15:40:07"},{dependencies:g,devDependencies:a,version:u}=p;return(i,f)=>{const e=ue,_=de,n=Ee,o=Be,k=Se;return s(),m("div",null,[d(e,{shadow:"never",class:"mb-3"},{default:c(()=>[Ie,je]),_:1}),d(e,{shadow:"never",class:"mb-3"},{default:c(()=>[Te,d(k,{border:"",column:2},{default:c(()=>[d(n,{label:"版本"},{default:c(()=>[d(_,null,{default:c(()=>[N(P(l(u)),1)]),_:1})]),_:1}),d(n,{label:"更新时间"},{default:c(()=>[d(_,null,{default:c(()=>[N(P(l(t)),1)]),_:1})]),_:1}),d(n,{label:"Github"},{default:c(()=>[d(o,{type:"primary",href:"https://github.com/zc1017/vue3Template",target:"_blank"},{default:c(()=>[N(" Github ")]),_:1})]),_:1})]),_:1})]),_:1}),d(e,{shadow:"never",class:"mb-3"},{default:c(()=>[Ae,d(k,{border:""},{default:c(()=>[(s(!0),m(w,null,z(l(g),(v,r)=>(s(),D(n,{key:r,label:r},{default:c(()=>[N(P(v),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),d(e,{shadow:"never"},{default:c(()=>[Ve,d(k,{border:""},{default:c(()=>[(s(!0),m(w,null,z(l(a),(v,r)=>(s(),D(n,{key:r,label:r},{default:c(()=>[N(P(v),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})])}}});export{Ge as default};
