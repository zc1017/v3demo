import{bd as de,b as Q,W as ve,X as T,D as ce,A as $,b8 as ke,Z as ye,r as z,R as Ie,c as N,a4 as xe,a5 as Se,d as P,a as X,o as w,l as q,g as A,f as se,be as we,h as n,bf as Ke,n as O,O as M,m as he,p as B,t as Ae,_ as Z,a9 as D,I as Ye,b4 as Qe,a3 as Re,a6 as Xe,L as Ve,Q as Ze,a8 as H,bg as _e,H as ue,af as me,y as Be,U as $e,b9 as ne,Y as W,a2 as Je,a$ as le,bh as el,aa as te,q as v,w as V,e as G,ad as ll,bi as tl,E as Ne,j as Y,bj as nl,bk as al,ab as Oe,M as ol,S as sl,au as ie,ac as rl}from"./index-6fcfa17b.js";import{E as ul}from"./el-dialog-c4cd8439.js";import{E as il,a as dl}from"./el-form-item-06e9f8a8.js";import{_ as cl}from"./SelectIcon.vue_vue_type_script_setup_true_lang-ba9ca37e.js";/* empty css               */import{E as fe,a as Ce,s as ml}from"./el-select-fd0bccb8.js";import"./el-popper-e9445e27.js";import{_ as pe}from"./el-tree-f0b7b6b1.js";import{p as re}from"./el-checkbox-e56fa43d.js";import{i as fl}from"./isEqual-a491a902.js";const pl=100,bl=600,Ee={beforeMount(e,f){const o=f.value,{interval:t=pl,delay:p=bl}=de(o)?{}:o;let l,d;const c=()=>de(o)?o():o.handler(),s=()=>{d&&(clearTimeout(d),d=void 0),l&&(clearInterval(l),l=void 0)};e.addEventListener("mousedown",_=>{_.button===0&&(s(),c(),document.addEventListener("mouseup",()=>s(),{once:!0}),d=setTimeout(()=>{l=setInterval(()=>{c()},t)},p))})}},Pe=Q({size:ve,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),vl=Q({...Pe,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),Te={[T]:e=>ce(e)||$(e)||ke(e),[ye]:e=>ce(e)||$(e)||ke(e)},Fe=Symbol("radioGroupKey"),Ue=(e,f)=>{const o=z(),t=Ie(Fe,void 0),p=N(()=>!!t),l=N({get(){return p.value?t.modelValue:e.modelValue},set(u){p.value?t.changeEvent(u):f&&f(T,u),o.value.checked=e.modelValue===e.label}}),d=xe(N(()=>t==null?void 0:t.size)),c=Se(N(()=>t==null?void 0:t.disabled)),s=z(!1),_=N(()=>c.value||p.value&&l.value!==e.label?-1:0);return{radioRef:o,isGroup:p,radioGroup:t,focus:s,size:d,disabled:c,tabIndex:_,modelValue:l}},yl=["value","name","disabled"],hl=P({name:"ElRadio"}),Vl=P({...hl,props:vl,emits:Te,setup(e,{emit:f}){const o=e,t=X("radio"),{radioRef:p,radioGroup:l,focus:d,size:c,disabled:s,modelValue:_}=Ue(o,f);function u(){D(()=>f("change",_.value))}return(b,r)=>{var i;return w(),q("label",{class:O([n(t).b(),n(t).is("disabled",n(s)),n(t).is("focus",n(d)),n(t).is("bordered",b.border),n(t).is("checked",n(_)===b.label),n(t).m(n(c))])},[A("span",{class:O([n(t).e("input"),n(t).is("disabled",n(s)),n(t).is("checked",n(_)===b.label)])},[se(A("input",{ref_key:"radioRef",ref:p,"onUpdate:modelValue":r[0]||(r[0]=h=>Ke(_)?_.value=h:null),class:O(n(t).e("original")),value:b.label,name:b.name||((i=n(l))==null?void 0:i.name),disabled:n(s),type:"radio",onFocus:r[1]||(r[1]=h=>d.value=!0),onBlur:r[2]||(r[2]=h=>d.value=!1),onChange:u,onClick:r[3]||(r[3]=M(()=>{},["stop"]))},null,42,yl),[[we,n(_)]]),A("span",{class:O(n(t).e("inner"))},null,2)],2),A("span",{class:O(n(t).e("label")),onKeydown:r[4]||(r[4]=M(()=>{},["stop"]))},[he(b.$slots,"default",{},()=>[B(Ae(b.label),1)])],34)],2)}}});var _l=Z(Vl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const gl=Q({...Pe,name:{type:String,default:""}}),kl=["value","name","disabled"],Nl=P({name:"ElRadioButton"}),Cl=P({...Nl,props:gl,setup(e){const f=e,o=X("radio"),{radioRef:t,focus:p,size:l,disabled:d,modelValue:c,radioGroup:s}=Ue(f),_=N(()=>({backgroundColor:(s==null?void 0:s.fill)||"",borderColor:(s==null?void 0:s.fill)||"",boxShadow:s!=null&&s.fill?`-1px 0 0 0 ${s.fill}`:"",color:(s==null?void 0:s.textColor)||""}));return(u,b)=>{var r;return w(),q("label",{class:O([n(o).b("button"),n(o).is("active",n(c)===u.label),n(o).is("disabled",n(d)),n(o).is("focus",n(p)),n(o).bm("button",n(l))])},[se(A("input",{ref_key:"radioRef",ref:t,"onUpdate:modelValue":b[0]||(b[0]=i=>Ke(c)?c.value=i:null),class:O(n(o).be("button","original-radio")),value:u.label,type:"radio",name:u.name||((r=n(s))==null?void 0:r.name),disabled:n(d),onFocus:b[1]||(b[1]=i=>p.value=!0),onBlur:b[2]||(b[2]=i=>p.value=!1),onClick:b[3]||(b[3]=M(()=>{},["stop"]))},null,42,kl),[[we,n(c)]]),A("span",{class:O(n(o).be("button","inner")),style:Ye(n(c)===u.label?n(_):{}),onKeydown:b[4]||(b[4]=M(()=>{},["stop"]))},[he(u.$slots,"default",{},()=>[B(Ae(u.label),1)])],38)],2)}}});var Le=Z(Cl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const El=Q({id:{type:String,default:void 0},size:ve,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),Il=Te,xl=["id","aria-label","aria-labelledby"],Sl=P({name:"ElRadioGroup"}),wl=P({...Sl,props:El,emits:Il,setup(e,{emit:f}){const o=e,t=X("radio"),p=Qe(),l=z(),{formItem:d}=Re(),{inputId:c,isLabeledByFormItem:s}=Xe(o,{formItemContext:d}),_=b=>{f(T,b),D(()=>f("change",b))};Ve(()=>{const b=l.value.querySelectorAll("[type=radio]"),r=b[0];!Array.from(b).some(i=>i.checked)&&r&&(r.tabIndex=0)});const u=N(()=>o.name||p.value);return Ze(Fe,H({..._e(o),changeEvent:_,name:u})),ue(()=>o.modelValue,()=>{o.validateEvent&&(d==null||d.validate("change").catch(b=>me()))}),(b,r)=>(w(),q("div",{id:n(c),ref_key:"radioGroupRef",ref:l,class:O(n(t).b("group")),role:"radiogroup","aria-label":n(s)?void 0:b.label||"radio-group","aria-labelledby":n(s)?n(d).labelId:void 0},[he(b.$slots,"default")],10,xl))}});var Me=Z(wl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Kl=Be(_l,{RadioButton:Le,RadioGroup:Me}),Al=$e(Me),Rl=$e(Le),Bl=Q({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ve,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>e===null||$(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),$l={[ye]:(e,f)=>f!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[ne]:e=>$(e)||W(e),[T]:e=>$(e)||W(e)},Ol=["aria-label","onKeydown"],Pl=["aria-label","onKeydown"],Tl=P({name:"ElInputNumber"}),Fl=P({...Tl,props:Bl,emits:$l,setup(e,{expose:f,emit:o}){const t=e,{t:p}=Je(),l=X("input-number"),d=z(),c=H({currentValue:t.modelValue,userInput:null}),{formItem:s}=Re(),_=N(()=>$(t.modelValue)&&t.modelValue<=t.min),u=N(()=>$(t.modelValue)&&t.modelValue>=t.max),b=N(()=>{const a=x(t.step);return le(t.precision)?Math.max(x(t.modelValue),a):(a>t.precision,t.precision)}),r=N(()=>t.controls&&t.controlsPosition==="right"),i=xe(),h=Se(),k=N(()=>{if(c.userInput!==null)return c.userInput;let a=c.currentValue;if(W(a))return"";if($(a)){if(Number.isNaN(a))return"";le(t.precision)||(a=a.toFixed(t.precision))}return a}),K=(a,m)=>{if(le(m)&&(m=b.value),m===0)return Math.round(a);let g=String(a);const C=g.indexOf(".");if(C===-1||!g.replace(".","").split("")[C+m])return a;const J=g.length;return g.charAt(J-1)==="5"&&(g=`${g.slice(0,Math.max(0,J-1))}6`),Number.parseFloat(Number(g).toFixed(m))},x=a=>{if(W(a))return 0;const m=a.toString(),g=m.indexOf(".");let C=0;return g!==-1&&(C=m.length-g-1),C},I=(a,m=1)=>$(a)?K(a+t.step*m):c.currentValue,F=()=>{if(t.readonly||h.value||u.value)return;const a=Number(k.value)||0,m=I(a);y(m),o(ne,c.currentValue)},L=()=>{if(t.readonly||h.value||_.value)return;const a=Number(k.value)||0,m=I(a,-1);y(m),o(ne,c.currentValue)},S=(a,m)=>{const{max:g,min:C,step:E,precision:U,stepStrictly:J,valueOnClear:ee}=t;g<C&&ol("InputNumber","min should not be greater than max.");let R=Number(a);if(W(a)||Number.isNaN(R))return null;if(a===""){if(ee===null)return null;R=ce(ee)?{min:C,max:g}[ee]:ee}return J&&(R=K(Math.round(R/E)*E,U)),le(U)||(R=K(R,U)),(R>g||R<C)&&(R=R>g?g:C,m&&o(T,R)),R},y=(a,m=!0)=>{var g;const C=c.currentValue,E=S(a);if(!m){o(T,E);return}C!==E&&(c.userInput=null,o(T,E),o(ye,E,C),t.validateEvent&&((g=s==null?void 0:s.validate)==null||g.call(s,"change").catch(U=>me())),c.currentValue=E)},ze=a=>{c.userInput=a;const m=a===""?null:Number(a);o(ne,m),y(m,!1)},De=a=>{const m=a!==""?Number(a):"";($(m)&&!Number.isNaN(m)||a==="")&&y(m),c.userInput=null},qe=()=>{var a,m;(m=(a=d.value)==null?void 0:a.focus)==null||m.call(a)},He=()=>{var a,m;(m=(a=d.value)==null?void 0:a.blur)==null||m.call(a)},je=a=>{o("focus",a)},We=a=>{var m;o("blur",a),t.validateEvent&&((m=s==null?void 0:s.validate)==null||m.call(s,"blur").catch(g=>me()))};return ue(()=>t.modelValue,a=>{const m=S(c.userInput),g=S(a,!0);!$(m)&&(!m||m!==g)&&(c.currentValue=g,c.userInput=null)},{immediate:!0}),Ve(()=>{var a;const{min:m,max:g,modelValue:C}=t,E=(a=d.value)==null?void 0:a.input;if(E.setAttribute("role","spinbutton"),Number.isFinite(g)?E.setAttribute("aria-valuemax",String(g)):E.removeAttribute("aria-valuemax"),Number.isFinite(m)?E.setAttribute("aria-valuemin",String(m)):E.removeAttribute("aria-valuemin"),E.setAttribute("aria-valuenow",c.currentValue||c.currentValue===0?String(c.currentValue):""),E.setAttribute("aria-disabled",String(h.value)),!$(C)&&C!=null){let U=Number(C);Number.isNaN(U)&&(U=null),o(T,U)}}),el(()=>{var a,m;const g=(a=d.value)==null?void 0:a.input;g==null||g.setAttribute("aria-valuenow",`${(m=c.currentValue)!=null?m:""}`)}),f({focus:qe,blur:He}),(a,m)=>(w(),q("div",{class:O([n(l).b(),n(l).m(n(i)),n(l).is("disabled",n(h)),n(l).is("without-controls",!a.controls),n(l).is("controls-right",n(r))]),onDragstart:m[1]||(m[1]=M(()=>{},["prevent"]))},[a.controls?se((w(),q("span",{key:0,role:"button","aria-label":n(p)("el.inputNumber.decrease"),class:O([n(l).e("decrease"),n(l).is("disabled",n(_))]),onKeydown:te(L,["enter"])},[v(n(Ne),null,{default:V(()=>[n(r)?(w(),G(n(ll),{key:0})):(w(),G(n(tl),{key:1}))]),_:1})],42,Ol)),[[n(Ee),L]]):Y("v-if",!0),a.controls?se((w(),q("span",{key:1,role:"button","aria-label":n(p)("el.inputNumber.increase"),class:O([n(l).e("increase"),n(l).is("disabled",n(u))]),onKeydown:te(F,["enter"])},[v(n(Ne),null,{default:V(()=>[n(r)?(w(),G(n(nl),{key:0})):(w(),G(n(al),{key:1}))]),_:1})],42,Pl)),[[n(Ee),F]]):Y("v-if",!0),v(n(Oe),{id:a.id,ref_key:"input",ref:d,type:"number",step:a.step,"model-value":n(k),placeholder:a.placeholder,readonly:a.readonly,disabled:n(h),size:n(i),max:a.max,min:a.min,name:a.name,label:a.label,"validate-event":!1,onWheel:m[0]||(m[0]=M(()=>{},["prevent"])),onKeydown:[te(M(F,["prevent"]),["up"]),te(M(L,["prevent"]),["down"])],onBlur:We,onFocus:je,onInput:ze,onChange:De},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Ul=Z(Fl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Ll=Be(Ul),Ml=(e,{attrs:f},{tree:o,key:t})=>{const p=X("tree-select"),l={...re(_e(e),Object.keys(fe.props)),...f,valueKey:t,popperClass:N(()=>{const d=[p.e("popper")];return e.popperClass&&d.push(e.popperClass),d.join(" ")}),filterMethod:(d="")=>{e.filterMethod&&e.filterMethod(d),D(()=>{var c;(c=o.value)==null||c.filter(d)})},onVisibleChange:d=>{var c;(c=f.onVisibleChange)==null||c.call(f,d),e.filterable&&d&&l.filterMethod()}};return l},Gl=P({extends:Ce,setup(e,f){const o=Ce.setup(e,f);delete o.selectOptionClick;const t=sl().proxy;return D(()=>{o.select.cachedOptions.get(t.value)||o.select.onOptionCreate(t)}),o},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function be(e){return e||e===0}function ge(e){return Array.isArray(e)&&e.length}function j(e){return Array.isArray(e)?e:be(e)?[e]:[]}function ae(e,f,o,t,p){for(let l=0;l<e.length;l++){const d=e[l];if(f(d,l,e,p))return t?t(d,l,e,p):d;{const c=o(d);if(ge(c)){const s=ae(c,f,o,t,d);if(s)return s}}}}function Ge(e,f,o,t){for(let p=0;p<e.length;p++){const l=e[p];f(l,p,e,t);const d=o(l);ge(d)&&Ge(d,f,o,l)}}const zl=(e,{attrs:f,slots:o,emit:t},{select:p,tree:l,key:d})=>{ue(()=>e.modelValue,()=>{e.showCheckbox&&D(()=>{const r=l.value;r&&!fl(r.getCheckedKeys(),j(e.modelValue))&&r.setCheckedKeys(j(e.modelValue))})},{immediate:!0,deep:!0});const c=N(()=>({value:d.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props})),s=(r,i)=>{var h;const k=c.value[r];return de(k)?k(i,(h=l.value)==null?void 0:h.getNode(s("value",i))):i[k]},_=j(e.modelValue).map(r=>ae(e.data||[],i=>s("value",i)===r,i=>s("children",i),(i,h,k,K)=>K&&s("value",K))).filter(r=>be(r)),u=N(()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const r=[];return Ge(e.data.concat(e.cacheData),i=>{const h=s("value",i);r.push({value:h,currentLabel:s("label",i),isDisabled:s("disabled",i)})},i=>s("children",i)),r}),b=N(()=>u.value.reduce((r,i)=>({...r,[i.value]:i}),{}));return{...re(_e(e),Object.keys(pe.props)),...f,nodeKey:d,expandOnClickNode:N(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:N(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(_):_),renderContent:(r,{node:i,data:h,store:k})=>r(Gl,{value:s("value",h),label:s("label",h),disabled:s("disabled",h)},e.renderContent?()=>e.renderContent(r,{node:i,data:h,store:k}):o.default?()=>o.default({node:i,data:h,store:k}):void 0),filterNodeMethod:(r,i,h)=>{var k;return e.filterNodeMethod?e.filterNodeMethod(r,i,h):r?(k=s("label",i))==null?void 0:k.includes(r):!0},onNodeClick:(r,i,h)=>{var k,K,x;if((k=f.onNodeClick)==null||k.call(f,r,i,h),!(e.showCheckbox&&e.checkOnClickNode))if(!e.showCheckbox&&(e.checkStrictly||i.isLeaf)){if(!s("disabled",r)){const I=(K=p.value)==null?void 0:K.options.get(s("value",r));(x=p.value)==null||x.handleOptionSelect(I)}}else e.expandOnClickNode&&h.proxy.handleExpandIconClick()},onCheck:(r,i)=>{if(!e.showCheckbox)return;const h=s("value",r),k=i.checkedKeys,K=e.multiple?j(e.modelValue).filter(I=>I in b.value&&!l.value.getNode(I)&&!k.includes(I)):[],x=k.concat(K);if(e.checkStrictly)t(T,e.multiple?x:x.includes(h)?h:void 0);else if(e.multiple)t(T,l.value.getCheckedKeys(!0));else{const I=ae([r],S=>!ge(s("children",S))&&!s("disabled",S),S=>s("children",S)),F=I?s("value",I):void 0,L=be(e.modelValue)&&!!ae([r],S=>s("value",S)===e.modelValue,S=>s("children",S));t(T,F===e.modelValue||L?void 0:F)}D(()=>{var I;const F=j(e.modelValue);l.value.setCheckedKeys(F),(I=f.onCheck)==null||I.call(f,r,{checkedKeys:l.value.getCheckedKeys(),checkedNodes:l.value.getCheckedNodes(),halfCheckedKeys:l.value.getHalfCheckedKeys(),halfCheckedNodes:l.value.getHalfCheckedNodes()})})},cacheOptions:u}};var Dl=P({props:{data:{type:Array,default:()=>[]}},setup(e){const f=Ie(ml);return ue(()=>e.data,()=>{var o;e.data.forEach(p=>{f.cachedOptions.has(p.value)||f.cachedOptions.set(p.value,p)});const t=((o=f.selectWrapper)==null?void 0:o.querySelectorAll("input"))||[];Array.from(t).includes(document.activeElement)||f.setSelected()},{flush:"post",immediate:!0}),()=>{}}});const ql=P({name:"ElTreeSelect",inheritAttrs:!1,props:{...fe.props,...pe.props,cacheData:{type:Array,default:()=>[]}},setup(e,f){const{slots:o,expose:t}=f,p=z(),l=z(),d=N(()=>e.nodeKey||e.valueKey||"value"),c=Ml(e,f,{select:p,tree:l,key:d}),{cacheOptions:s,..._}=zl(e,f,{select:p,tree:l,key:d}),u=H({});return t(u),Ve(()=>{Object.assign(u,{...re(l.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...re(p.value,["focus","blur"])})}),()=>ie(fe,H({...c,ref:b=>p.value=b}),{...o,default:()=>[ie(Dl,{data:s.value}),ie(pe,H({..._,ref:b=>l.value=b}))]})}});var oe=Z(ql,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);oe.install=e=>{e.component(oe.name,oe)};const Hl=oe,jl=Hl;const Wl={pid:{required:!0,message:"不能为空",trigger:"blur"},title:{required:!0,message:"不能为空",trigger:"blur"},path:{required:!0,message:"不能为空",trigger:"blur"},component:{required:!0,message:"不能为空",trigger:"blur"},type:{required:!0,message:"不能为空",trigger:"blur"},hidden:{required:!0,message:"不能为空",trigger:"blur"}},Yl=A("div",{class:"text-neutral text-xs"},"如为外链访问则以`http(s)://`开头",-1),Ql=A("div",{class:"text-neutral text-xs"},"如：`system/menu/index`，默认在`views`目录下",-1),Xl=A("div",{class:"text-neutral text-xs"},"如有多个权限，请以`,`分割",-1),Zl=A("div",{class:"text-neutral text-xs"},"选择隐藏则侧边栏不会显示，但仍可以访问",-1),Jl=A("div",{class:"text-neutral text-xs"},"选择启用则会被`keep-alive`缓存",-1),et=A("div",{class:"text-neutral text-xs"},"选择启用则多页签会一直保留",-1),lt={class:"dialog-footer"},mt=P({__name:"index",props:{treeData:{}},setup(e,{expose:f}){const o=e,t=z(!1),p=z(),l=H({id:0,pid:0,title:"",icon:"",path:"",component:"",iframeLink:"",permission:"",affix:0,isHide:0,isKeep:0,sort:0,type:0}),d=N(()=>{const _=[{id:0,title:"顶级",children:[]}];return _[0].children=o.treeData,_}),c=async _=>{t.value=!0,_&&(await D(),Object.assign(l,_))},s=()=>{p.value&&p.value.resetFields()};return f({init:c}),(_,u)=>{const b=Rl,r=Al,i=il,h=jl,k=Oe,K=cl,x=Kl,I=Ll,F=dl,L=rl,S=ul;return w(),G(S,{modelValue:t.value,"onUpdate:modelValue":u[14]||(u[14]=y=>t.value=y),title:l.id?"编辑":"添加",width:"550px",onClosed:s},{footer:V(()=>[A("span",lt,[v(L,{onClick:u[12]||(u[12]=y=>t.value=!1)},{default:V(()=>[B("取消")]),_:1}),v(L,{type:"primary",onClick:u[13]||(u[13]=y=>t.value=!1)},{default:V(()=>[B("确认")]),_:1})])]),default:V(()=>[v(F,{model:l,"label-width":"100",ref_key:"formRef",ref:p,rules:n(Wl)},{default:V(()=>[v(i,{label:"菜单类型",prop:"type"},{default:V(()=>[v(r,{modelValue:l.type,"onUpdate:modelValue":u[0]||(u[0]=y=>l.type=y)},{default:V(()=>[v(b,{label:0},{default:V(()=>[B("目录")]),_:1}),v(b,{label:1},{default:V(()=>[B("菜单")]),_:1})]),_:1},8,["modelValue"])]),_:1}),v(i,{label:"父级菜单",prop:"pid"},{default:V(()=>[v(h,{class:"w-full",modelValue:l.pid,"onUpdate:modelValue":u[1]||(u[1]=y=>l.pid=y),data:d.value,"node-key":"id","check-strictly":"",placeholder:"请选择父级菜单","render-after-expand":!1,"default-expanded-keys":[0],props:{label:"title"}},null,8,["modelValue","data"])]),_:1}),v(i,{label:"菜单名称",prop:"title"},{default:V(()=>[v(k,{modelValue:l.title,"onUpdate:modelValue":u[2]||(u[2]=y=>l.title=y),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])]),_:1}),v(i,{label:"菜单图标",prop:"icon"},{default:V(()=>[v(K,{modelValue:l.icon,"onUpdate:modelValue":u[3]||(u[3]=y=>l.icon=y),style:{width:"100%"}},null,8,["modelValue"])]),_:1}),v(i,{label:"路由路径",prop:"path"},{default:V(()=>[v(k,{modelValue:l.path,"onUpdate:modelValue":u[4]||(u[4]=y=>l.path=y),placeholder:"请输入路由路径",clearable:""},null,8,["modelValue"]),Yl]),_:1}),l.type?(w(),G(i,{key:0,label:"组件路径",prop:"component"},{default:V(()=>[v(k,{modelValue:l.component,"onUpdate:modelValue":u[5]||(u[5]=y=>l.component=y),placeholder:"请输入组件路径",clearable:""},null,8,["modelValue"]),Ql]),_:1})):Y("",!0),l.type?(w(),G(i,{key:1,label:"按钮权限",prop:"permission"},{default:V(()=>[v(k,{modelValue:l.permission,"onUpdate:modelValue":u[6]||(u[6]=y=>l.permission=y),placeholder:"请输入组件路径",clearable:""},null,8,["modelValue"]),Xl]),_:1})):Y("",!0),l.type?(w(),G(i,{key:2,label:"内链地址",prop:"iframeLink"},{default:V(()=>[v(k,{modelValue:l.iframeLink,"onUpdate:modelValue":u[7]||(u[7]=y=>l.iframeLink=y),placeholder:"请输入内链地址",clearable:""},null,8,["modelValue"])]),_:1})):Y("",!0),v(i,{label:"是否显示"},{default:V(()=>[v(r,{modelValue:l.isHide,"onUpdate:modelValue":u[8]||(u[8]=y=>l.isHide=y),class:"w-full"},{default:V(()=>[v(x,{label:0},{default:V(()=>[B("启用")]),_:1}),v(x,{label:1},{default:V(()=>[B("隐藏")]),_:1})]),_:1},8,["modelValue"]),Zl]),_:1}),v(i,{label:"是否缓存"},{default:V(()=>[v(r,{modelValue:l.isKeep,"onUpdate:modelValue":u[9]||(u[9]=y=>l.isKeep=y),class:"w-full"},{default:V(()=>[v(x,{label:1},{default:V(()=>[B("启用")]),_:1}),v(x,{label:0},{default:V(()=>[B("关闭")]),_:1})]),_:1},8,["modelValue"]),Jl]),_:1}),v(i,{label:"是否固定"},{default:V(()=>[v(r,{modelValue:l.affix,"onUpdate:modelValue":u[10]||(u[10]=y=>l.affix=y),class:"w-full"},{default:V(()=>[v(x,{label:1},{default:V(()=>[B("启用")]),_:1}),v(x,{label:0},{default:V(()=>[B("关闭")]),_:1})]),_:1},8,["modelValue"]),et]),_:1}),v(i,{label:"排序"},{default:V(()=>[v(I,{modelValue:l.sort,"onUpdate:modelValue":u[11]||(u[11]=y=>l.sort=y),placeholder:"请输入排序序号"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{mt as _};
