import{d as v,a as E,Q as V,au as P,m as w,b as $,B as z,c as D,o as n,l as c,g as e,n as m,h as l,I as F,e as x,w as a,i as L,E as U,j as u,t as r,_ as q,y as G,U as J,q as o,F as y,a1 as b,p as T,ac as K}from"./index-6fcfa17b.js";import{E as Q}from"./el-card-b45e0140.js";import{E as R,a as A}from"./el-col-c1e42fab.js";import{_ as C}from"./avatar-ccd16350.js";const H=v({name:"ElTimeline",setup(h,{slots:d}){const t=E("timeline");return V("timeline",d),()=>P("ul",{class:[t.b()]},[w(d,"default")])}}),M=$({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:z},hollow:{type:Boolean,default:!1}}),O=v({name:"ElTimelineItem"}),W=v({...O,props:M,setup(h){const d=h,t=E("timeline-item"),g=D(()=>[t.e("node"),t.em("node",d.size||""),t.em("node",d.type||""),t.is("hollow",d.hollow)]);return(s,B)=>(n(),c("li",{class:m([l(t).b(),{[l(t).e("center")]:s.center}])},[e("div",{class:m(l(t).e("tail"))},null,2),s.$slots.dot?u("v-if",!0):(n(),c("div",{key:0,class:m(l(g)),style:F({backgroundColor:s.color})},[s.icon?(n(),x(l(U),{key:0,class:m(l(t).e("icon"))},{default:a(()=>[(n(),x(L(s.icon)))]),_:1},8,["class"])):u("v-if",!0)],6)),s.$slots.dot?(n(),c("div",{key:1,class:m(l(t).e("dot"))},[w(s.$slots,"dot")],2)):u("v-if",!0),e("div",{class:m(l(t).e("wrapper"))},[!s.hideTimestamp&&s.placement==="top"?(n(),c("div",{key:0,class:m([l(t).e("timestamp"),l(t).is("top")])},r(s.timestamp),3)):u("v-if",!0),e("div",{class:m(l(t).e("content"))},[w(s.$slots,"default")],2),!s.hideTimestamp&&s.placement==="bottom"?(n(),c("div",{key:1,class:m([l(t).e("timestamp"),l(t).is("bottom")])},r(s.timestamp),3)):u("v-if",!0)],2)],2))}});var S=q(W,[["__file","/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);const X=G(H,{TimelineItem:S}),Y=J(S);const Z=e("div",{class:"flex h-full py-2"},[e("img",{class:"w-20 h-20 mr-5 rounded-full border border-borderColor",src:C,alt:""}),e("div",null,[e("h3",{class:"mb-2"},"早上好，又是美好的一天呢!"),e("p",{class:"text-sm text-gray"},"今天天气晴朗，20℃-30℃")])],-1),ee=e("div",{class:"flex justify-around py-2"},[e("div",{class:"mr-7"},[e("div",{class:"text-gray mb-2"},"消息"),e("div",{class:"text-6"},"22")]),e("div",null,[e("div",{class:"text-gray mb-2"},"代办"),e("div",{class:"text-6"},"4/10")]),e("div",null,[e("div",{class:"text-gray mb-2"},"项目"),e("div",{class:"text-6"},"10")])],-1),te={class:"flex flex-wrap"},se={class:"flex items-center"},ae=["src"],le={class:"ml-2 text-xl"},oe={class:"flex justify-between"},ne=e("span",null,"动态",-1),ie=e("div",null,[e("img",{src:C,class:"w-10 mb-2 h-10 rounded-full",alt:""})],-1),me={class:"ml-4"},ue=v({__name:"index",setup(h){const d=[{name:"Vue3",desc:"渐进式 JavaScript 框架",img:"https://cn.vuejs.org/logo.svg"},{name:"Vite",desc:"下一代前端开发与构建工具",img:"https://vitejs.dev/logo.svg"},{name:"Pinia",desc:"新一代的状态管理库",img:"https://pinia.web3doc.top/logo.svg"},{name:"Unocss",desc:"原子化预设样式",img:"https://unocss.dev/logo.svg"},{name:"TypeScript",desc:"js 超集语言",img:"https://img0.baidu.com/it/u=648247815,3161686023&fm=253&fmt=auto&app=138&f=PNG"}],t=[{content:"每天写一点",timestamp:"2023-9-13"},{content:"完善权限角色菜单",timestamp:"2023-9-10"},{content:"封装表格hooks",timestamp:"2023-9-5"},{content:"改写菜单样式",timestamp:"2023-9-1"},{content:"多语言支持",timestamp:"2023-8-26"},{content:"工程化搭建",timestamp:"2023-8-14"},{content:"项目创建",timestamp:"2023-8-1"}],g=[{desc:"不知道写啥在里面，哈哈哈哈",timestamp:"2023-9-13"},{desc:"写了下后台，让页面多起来了",timestamp:"2023-9-12"},{desc:"修复table hooks bug",timestamp:"2023-9-10"},{desc:"修复暗黑模式下的样式错误",timestamp:"2023-9-6"},{desc:"新增权限页面",timestamp:"2023-9-1"}];return(s,B)=>{const _=R,k=A,f=Q,I=K,N=Y,j=X;return n(),c("div",null,[o(f,{shadow:"never"},{default:a(()=>[o(k,{justify:"space-between"},{default:a(()=>[o(_,{span:10,xs:24},{default:a(()=>[Z]),_:1}),o(_,{span:8,xs:24},{default:a(()=>[ee]),_:1})]),_:1})]),_:1}),o(k,{class:"mt-3",gutter:12},{default:a(()=>[o(_,{span:18,xs:24},{default:a(()=>[o(f,{shadow:"never"},{default:a(()=>[e("div",te,[(n(),c(y,null,b(d,(i,p)=>e("div",{class:"w-30% <sm:w-100% bg-fill rounded p-4 mt-2 mx-1",key:p},[e("div",se,[e("img",{src:i.img,alt:"",class:"h-14 w-14 mb-1"},null,8,ae),e("span",le,r(i.name),1)]),e("p",null,r(i.desc),1)])),64))])]),_:1}),o(f,{class:"mt-3",shadow:"never"},{header:a(()=>[e("div",oe,[ne,o(I,{type:"primary",link:""},{default:a(()=>[T("更多")]),_:1})])]),default:a(()=>[(n(),c(y,null,b(g,(i,p)=>e("div",{key:p,class:"flex mb-4 border-b border-borderColor last:border-0"},[ie,e("div",me,[e("div",null,r(i.desc),1),e("div",null,r(i.timestamp),1)])])),64))]),_:1})]),_:1}),o(_,{span:6,xs:24},{default:a(()=>[o(f,{shadow:"never",class:"<sm:mt-3"},{default:a(()=>[o(j,null,{default:a(()=>[(n(),c(y,null,b(t,(i,p)=>o(N,{key:p,timestamp:i.timestamp},{default:a(()=>[T(r(i.content),1)]),_:2},1032,["timestamp"])),64))]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{ue as default};
