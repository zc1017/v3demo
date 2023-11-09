import{u as ce,b as A,E as $e}from"./el-popper-e9445e27.js";import{J as ke,ay as Be,bl as Re,b as M,b8 as Oe,d as L,c as O,a as x,r as N,h as y,G as Ae,o as q,e as ze,w as ue,l as te,n as ae,t as de,j as ee,m as F,p as De,al as Le,_ as oe,bm as Ue,y as me,C as se,aw as he,R as ne,M as le,H as D,a9 as re,ax as ge,I as Ve,S as j,bn as Fe,bo as Me,L as ye,bh as xe,q as f,E as K,bp as Ie,as as Ke,ae as He,ag as H,aj as qe,Q as je,bk as We,X as we,a$ as pe,D as Xe,A as Ge,u as Je,bq as be,a8 as Qe,br as Ye,f as Ze,v as et,U as tt}from"./index-6fcfa17b.js";import{d as Y}from"./dropdown-57016389.js";import{c as z}from"./strings-f9281a6e.js";const at=(t,o,n)=>Be(t.subTree).filter(a=>{var s;return Re(a)&&((s=a.type)==null?void 0:s.name)===o&&!!a.component}).map(a=>a.component.uid).map(a=>n[a]).filter(a=>!!a),ot=(t,o)=>{const n={},d=ke([]);return{children:d,addChild:s=>{n[s.uid]=s,d.value=at(t,o,n)},removeChild:s=>{delete n[s],d.value=d.value.filter($=>$.uid!==s)}}},st=M({trigger:ce.trigger,placement:Y.placement,disabled:ce.disabled,visible:A.visible,transition:A.transition,popperOptions:Y.popperOptions,tabindex:Y.tabindex,content:A.content,popperStyle:A.popperStyle,popperClass:A.popperClass,enterable:{...A.enterable,default:!0},effect:{...A.effect,default:"light"},teleported:A.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),nt={"update:visible":t=>Oe(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},lt="onUpdate:visible",rt=L({name:"ElPopover"}),it=L({...rt,props:st,emits:nt,setup(t,{expose:o,emit:n}){const d=t,c=O(()=>d[lt]),a=x("popover"),s=N(),$=O(()=>{var e;return(e=y(s))==null?void 0:e.popperRef}),p=O(()=>[{width:Ae(d.width)},d.popperStyle]),h=O(()=>[a.b(),d.popperClass,{[a.m("plain")]:!!d.content}]),v=O(()=>d.transition===`${a.namespace.value}-fade-in-linear`),m=()=>{var e;(e=s.value)==null||e.hide()},u=()=>{n("before-enter")},r=()=>{n("before-leave")},B=()=>{n("after-enter")},E=()=>{n("update:visible",!1),n("after-leave")};return o({popperRef:$,hide:m}),(e,S)=>(q(),ze(y($e),Le({ref_key:"tooltipRef",ref:s},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":y(h),"popper-style":y(p),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":y(v),"onUpdate:visible":y(c),onBeforeShow:u,onBeforeHide:r,onShow:B,onHide:E}),{content:ue(()=>[e.title?(q(),te("div",{key:0,class:ae(y(a).e("title")),role:"title"},de(e.title),3)):ee("v-if",!0),F(e.$slots,"default",{},()=>[De(de(e.content),1)])]),default:ue(()=>[e.$slots.reference?F(e.$slots,"reference",{key:0}):ee("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ct=oe(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const fe=(t,o)=>{const n=o.arg||o.value,d=n==null?void 0:n.popperRef;d&&(d.triggerRef=t)};var ut={mounted(t,o){fe(t,o)},updated(t,o){fe(t,o)}};const dt="popover",pt=Ue(ut,dt),Rt=me(ct,{directive:pt}),W=Symbol("tabsRootContextKey"),bt=M({tabs:{type:se(Array),default:()=>he([])}}),Ne="ElTabBar",ft=L({name:Ne}),vt=L({...ft,props:bt,setup(t,{expose:o}){const n=t,d=j(),c=ne(W);c||le(Ne,"<el-tabs><el-tab-bar /></el-tabs>");const a=x("tabs"),s=N(),$=N(),p=()=>{let v=0,m=0;const u=["top","bottom"].includes(c.props.tabPosition)?"width":"height",r=u==="width"?"x":"y",B=r==="x"?"left":"top";return n.tabs.every(E=>{var e,S;const C=(S=(e=d.parent)==null?void 0:e.refs)==null?void 0:S[`tab-${E.uid}`];if(!C)return!1;if(!E.active)return!0;v=C[`offset${z(B)}`],m=C[`client${z(u)}`];const k=window.getComputedStyle(C);return u==="width"&&(n.tabs.length>1&&(m-=Number.parseFloat(k.paddingLeft)+Number.parseFloat(k.paddingRight)),v+=Number.parseFloat(k.paddingLeft)),!1}),{[u]:`${m}px`,transform:`translate${z(r)}(${v}px)`}},h=()=>$.value=p();return D(()=>n.tabs,async()=>{await re(),h()},{immediate:!0}),ge(s,()=>h()),o({ref:s,update:h}),(v,m)=>(q(),te("div",{ref_key:"barRef",ref:s,class:ae([y(a).e("active-bar"),y(a).is(y(c).props.tabPosition)]),style:Ve($.value)},null,6))}});var mt=oe(vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const ht=M({panes:{type:se(Array),default:()=>he([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),gt={tabClick:(t,o,n)=>n instanceof Event,tabRemove:(t,o)=>o instanceof Event},ve="ElTabNav",yt=L({name:ve,props:ht,emits:gt,setup(t,{expose:o,emit:n}){const d=j(),c=ne(W);c||le(ve,"<el-tabs><tab-nav /></el-tabs>");const a=x("tabs"),s=Fe(),$=Me(),p=N(),h=N(),v=N(),m=N(),u=N(!1),r=N(0),B=N(!1),E=N(!0),e=O(()=>["top","bottom"].includes(c.props.tabPosition)?"width":"height"),S=O(()=>({transform:`translate${e.value==="width"?"X":"Y"}(-${r.value}px)`})),C=()=>{if(!p.value)return;const i=p.value[`offset${z(e.value)}`],b=r.value;if(!b)return;const l=b>i?b-i:0;r.value=l},k=()=>{if(!p.value||!h.value)return;const i=h.value[`offset${z(e.value)}`],b=p.value[`offset${z(e.value)}`],l=r.value;if(i-l<=b)return;const P=i-l>b*2?l+b:i-b;r.value=P},U=async()=>{const i=h.value;if(!u.value||!v.value||!p.value||!i)return;await re();const b=v.value.querySelector(".is-active");if(!b)return;const l=p.value,P=["top","bottom"].includes(c.props.tabPosition),T=b.getBoundingClientRect(),w=l.getBoundingClientRect(),R=P?i.offsetWidth-w.width:i.offsetHeight-w.height,_=r.value;let g=_;P?(T.left<w.left&&(g=_-(w.left-T.left)),T.right>w.right&&(g=_+T.right-w.right)):(T.top<w.top&&(g=_-(w.top-T.top)),T.bottom>w.bottom&&(g=_+(T.bottom-w.bottom))),g=Math.max(g,0),r.value=Math.min(g,R)},I=()=>{var i;if(!h.value||!p.value)return;t.stretch&&((i=m.value)==null||i.update());const b=h.value[`offset${z(e.value)}`],l=p.value[`offset${z(e.value)}`],P=r.value;l<b?(u.value=u.value||{},u.value.prev=P,u.value.next=P+l<b,b-P<l&&(r.value=b-l)):(u.value=!1,P>0&&(r.value=0))},Te=i=>{const b=i.code,{up:l,down:P,left:T,right:w}=H;if(![l,P,T,w].includes(b))return;const R=Array.from(i.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),_=R.indexOf(i.target);let g;b===T||b===l?_===0?g=R.length-1:g=_-1:_<R.length-1?g=_+1:g=0,R[g].focus({preventScroll:!0}),R[g].click(),ie()},ie=()=>{E.value&&(B.value=!0)},X=()=>B.value=!1;return D(s,i=>{i==="hidden"?E.value=!1:i==="visible"&&setTimeout(()=>E.value=!0,50)}),D($,i=>{i?setTimeout(()=>E.value=!0,50):E.value=!1}),ge(v,I),ye(()=>setTimeout(()=>U(),0)),xe(()=>I()),o({scrollToActiveTab:U,removeFocus:X}),D(()=>t.panes,()=>d.update(),{flush:"post",deep:!0}),()=>{const i=u.value?[f("span",{class:[a.e("nav-prev"),a.is("disabled",!u.value.prev)],onClick:C},[f(K,null,{default:()=>[f(Ie,null,null)]})]),f("span",{class:[a.e("nav-next"),a.is("disabled",!u.value.next)],onClick:k},[f(K,null,{default:()=>[f(Ke,null,null)]})])]:null,b=t.panes.map((l,P)=>{var T,w,R,_;const g=l.uid,G=l.props.disabled,J=(w=(T=l.props.name)!=null?T:l.index)!=null?w:`${P}`,Q=!G&&(l.isClosable||t.editable);l.index=`${P}`;const Ee=Q?f(K,{class:"is-icon-close",onClick:V=>n("tabRemove",l,V)},{default:()=>[f(He,null,null)]}):null,Se=((_=(R=l.slots).label)==null?void 0:_.call(R))||l.props.label,_e=!G&&l.active?0:-1;return f("div",{ref:`tab-${g}`,class:[a.e("item"),a.is(c.props.tabPosition),a.is("active",l.active),a.is("disabled",G),a.is("closable",Q),a.is("focus",B.value)],id:`tab-${J}`,key:`tab-${g}`,"aria-controls":`pane-${J}`,role:"tab","aria-selected":l.active,tabindex:_e,onFocus:()=>ie(),onBlur:()=>X(),onClick:V=>{X(),n("tabClick",l,J,V)},onKeydown:V=>{Q&&(V.code===H.delete||V.code===H.backspace)&&n("tabRemove",l,V)}},[Se,Ee])});return f("div",{ref:v,class:[a.e("nav-wrap"),a.is("scrollable",!!u.value),a.is(c.props.tabPosition)]},[i,f("div",{class:a.e("nav-scroll"),ref:p},[f("div",{class:[a.e("nav"),a.is(c.props.tabPosition),a.is("stretch",t.stretch&&["top","bottom"].includes(c.props.tabPosition))],ref:h,style:S.value,role:"tablist",onKeydown:Te},[t.type?null:f(mt,{ref:m,tabs:[...t.panes]},null),b])])])}}}),wt=M({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:se(Function),default:()=>!0},stretch:Boolean}),Z=t=>Xe(t)||Ge(t),Nt={[we]:t=>Z(t),tabClick:(t,o)=>o instanceof Event,tabChange:t=>Z(t),edit:(t,o)=>["remove","add"].includes(o),tabRemove:t=>Z(t),tabAdd:()=>!0},Ct=L({name:"ElTabs",props:wt,emits:Nt,setup(t,{emit:o,slots:n,expose:d}){var c,a;const s=x("tabs"),{children:$,addChild:p,removeChild:h}=ot(j(),"ElTabPane"),v=N(),m=N((a=(c=t.modelValue)!=null?c:t.activeName)!=null?a:"0"),u=async(e,S=!1)=>{var C,k,U;if(!(m.value===e||pe(e)))try{await((C=t.beforeLeave)==null?void 0:C.call(t,e,m.value))!==!1&&(m.value=e,S&&(o(we,e),o("tabChange",e)),(U=(k=v.value)==null?void 0:k.removeFocus)==null||U.call(k))}catch{}},r=(e,S,C)=>{e.props.disabled||(u(S,!0),o("tabClick",e,C))},B=(e,S)=>{e.props.disabled||pe(e.props.name)||(S.stopPropagation(),o("edit",e.props.name,"remove"),o("tabRemove",e.props.name))},E=()=>{o("edit",void 0,"add"),o("tabAdd")};return qe({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},O(()=>!!t.activeName)),D(()=>t.activeName,e=>u(e)),D(()=>t.modelValue,e=>u(e)),D(m,async()=>{var e;await re(),(e=v.value)==null||e.scrollToActiveTab()}),je(W,{props:t,currentName:m,registerPane:p,unregisterPane:h}),d({currentName:m}),()=>{const e=n.addIcon,S=t.editable||t.addable?f("span",{class:s.e("new-tab"),tabindex:"0",onClick:E,onKeydown:U=>{U.code===H.enter&&E()}},[e?F(n,"addIcon"):f(K,{class:s.is("icon-plus")},{default:()=>[f(We,null,null)]})]):null,C=f("div",{class:[s.e("header"),s.is(t.tabPosition)]},[S,f(yt,{ref:v,currentName:m.value,editable:t.editable,type:t.type,panes:$.value,stretch:t.stretch,onTabClick:r,onTabRemove:B},null)]),k=f("div",{class:s.e("content")},[F(n,"default")]);return f("div",{class:[s.b(),s.m(t.tabPosition),{[s.m("card")]:t.type==="card",[s.m("border-card")]:t.type==="border-card"}]},[...t.tabPosition!=="bottom"?[C,k]:[k,C]])}}}),Pt=M({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),Tt=["id","aria-hidden","aria-labelledby"],Ce="ElTabPane",Et=L({name:Ce}),St=L({...Et,props:Pt,setup(t){const o=t,n=j(),d=Je(),c=ne(W);c||le(Ce,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const a=x("tab-pane"),s=N(),$=O(()=>o.closable||c.props.closable),p=be(()=>{var r;return c.currentName.value===((r=o.name)!=null?r:s.value)}),h=N(p.value),v=O(()=>{var r;return(r=o.name)!=null?r:s.value}),m=be(()=>!o.lazy||h.value||p.value);D(p,r=>{r&&(h.value=!0)});const u=Qe({uid:n.uid,slots:d,props:o,paneName:v,active:p,index:s,isClosable:$});return ye(()=>{c.registerPane(u)}),Ye(()=>{c.unregisterPane(u.uid)}),(r,B)=>y(m)?Ze((q(),te("div",{key:0,id:`pane-${y(v)}`,class:ae(y(a).b()),role:"tabpanel","aria-hidden":!y(p),"aria-labelledby":`tab-${y(v)}`},[F(r.$slots,"default")],10,Tt)),[[et,y(p)]]):ee("v-if",!0)}});var Pe=oe(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const Ot=me(Ct,{TabPane:Pe}),At=tt(Pe);export{At as E,Ot as a,Rt as b};
