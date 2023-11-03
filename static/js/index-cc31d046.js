import{bc as ce,b as X,W as _e,X as P,D as me,A as O,b2 as Ne,Z as ye,r as L,R as we,c as C,a4 as xe,a5 as Se,d as $,a as Z,o as K,l as D,g as A,f as Q,bd as Ke,h as n,be as Re,n as T,O as G,m as he,p as x,t as se,_ as J,a9 as q,I as Ze,a_ as Je,a3 as Ae,a6 as el,L as ge,Q as ll,a8 as H,bf as Ve,H as ie,af as pe,y as $e,U as Be,b3 as ae,Y as W,a2 as tl,ba as te,bg as nl,aa as ne,q as m,w as v,e as z,ad as al,bh as ol,E as Ce,j as Y,bi as rl,bj as sl,ab as Oe,M as ul,S as il,au as de,ac as Te,bk as dl}from"./index-cdc499c6.js";import{v as cl}from"./el-loading-18d0f831.js";import{E as ml,a as pl}from"./el-table-column-e77ff0a6.js";import{p as ue}from"./el-checkbox-ab7e2b98.js";import"./el-tooltip-5fcbe9bd.js";import"./el-popper-d448024b.js";/* empty css               */import{_ as fl}from"./Icon.vue_vue_type_script_lang-5f768c9c.js";import{E as Pe,a as Fe}from"./el-form-item-06d23ba6.js";import{E as bl,u as vl}from"./el-dialog-1cbf1e17.js";import{_ as _l}from"./SelectIcon.vue_vue_type_script_setup_true_lang-7b79d43e.js";import{E as fe,a as Ee,s as yl}from"./el-select-27b5bcc5.js";import{_ as be}from"./el-tree-492360d1.js";import{i as hl}from"./isEqual-0817435c.js";import{E as gl}from"./index-6fb065e3.js";import"./refs-a153aa6b.js";import"./use-dialog-dcabaf7a.js";import"./el-tab-pane-3315f7cd.js";import"./dropdown-14853818.js";import"./strings-f1eabd1e.js";import"./index-5913bec4.js";const Vl=100,kl=600,Ie={beforeMount(e,f){const s=f.value,{interval:t=Vl,delay:b=kl}=ce(s)?{}:s;let l,c;const u=()=>ce(s)?s():s.handler(),r=()=>{c&&(clearTimeout(c),c=void 0),l&&(clearInterval(l),l=void 0)};e.addEventListener("mousedown",y=>{y.button===0&&(r(),u(),document.addEventListener("mouseup",()=>r(),{once:!0}),c=setTimeout(()=>{l=setInterval(()=>{u()},t)},b))})}},Ue=X({size:_e,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),Nl=X({...Ue,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),Le={[P]:e=>me(e)||O(e)||Ne(e),[ye]:e=>me(e)||O(e)||Ne(e)},Me=Symbol("radioGroupKey"),Ge=(e,f)=>{const s=L(),t=we(Me,void 0),b=C(()=>!!t),l=C({get(){return b.value?t.modelValue:e.modelValue},set(i){b.value?t.changeEvent(i):f&&f(P,i),s.value.checked=e.modelValue===e.label}}),c=xe(C(()=>t==null?void 0:t.size)),u=Se(C(()=>t==null?void 0:t.disabled)),r=L(!1),y=C(()=>u.value||b.value&&l.value!==e.label?-1:0);return{radioRef:s,isGroup:b,radioGroup:t,focus:r,size:c,disabled:u,tabIndex:y,modelValue:l}},Cl=["value","name","disabled"],El=$({name:"ElRadio"}),Il=$({...El,props:Nl,emits:Le,setup(e,{emit:f}){const s=e,t=Z("radio"),{radioRef:b,radioGroup:l,focus:c,size:u,disabled:r,modelValue:y}=Ge(s,f);function i(){q(()=>f("change",y.value))}return(_,o)=>{var d;return K(),D("label",{class:T([n(t).b(),n(t).is("disabled",n(r)),n(t).is("focus",n(c)),n(t).is("bordered",_.border),n(t).is("checked",n(y)===_.label),n(t).m(n(u))])},[A("span",{class:T([n(t).e("input"),n(t).is("disabled",n(r)),n(t).is("checked",n(y)===_.label)])},[Q(A("input",{ref_key:"radioRef",ref:b,"onUpdate:modelValue":o[0]||(o[0]=h=>Re(y)?y.value=h:null),class:T(n(t).e("original")),value:_.label,name:_.name||((d=n(l))==null?void 0:d.name),disabled:n(r),type:"radio",onFocus:o[1]||(o[1]=h=>c.value=!0),onBlur:o[2]||(o[2]=h=>c.value=!1),onChange:i,onClick:o[3]||(o[3]=G(()=>{},["stop"]))},null,42,Cl),[[Ke,n(y)]]),A("span",{class:T(n(t).e("inner"))},null,2)],2),A("span",{class:T(n(t).e("label")),onKeydown:o[4]||(o[4]=G(()=>{},["stop"]))},[he(_.$slots,"default",{},()=>[x(se(_.label),1)])],34)],2)}}});var wl=J(Il,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const xl=X({...Ue,name:{type:String,default:""}}),Sl=["value","name","disabled"],Kl=$({name:"ElRadioButton"}),Rl=$({...Kl,props:xl,setup(e){const f=e,s=Z("radio"),{radioRef:t,focus:b,size:l,disabled:c,modelValue:u,radioGroup:r}=Ge(f),y=C(()=>({backgroundColor:(r==null?void 0:r.fill)||"",borderColor:(r==null?void 0:r.fill)||"",boxShadow:r!=null&&r.fill?`-1px 0 0 0 ${r.fill}`:"",color:(r==null?void 0:r.textColor)||""}));return(i,_)=>{var o;return K(),D("label",{class:T([n(s).b("button"),n(s).is("active",n(u)===i.label),n(s).is("disabled",n(c)),n(s).is("focus",n(b)),n(s).bm("button",n(l))])},[Q(A("input",{ref_key:"radioRef",ref:t,"onUpdate:modelValue":_[0]||(_[0]=d=>Re(u)?u.value=d:null),class:T(n(s).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((o=n(r))==null?void 0:o.name),disabled:n(c),onFocus:_[1]||(_[1]=d=>b.value=!0),onBlur:_[2]||(_[2]=d=>b.value=!1),onClick:_[3]||(_[3]=G(()=>{},["stop"]))},null,42,Sl),[[Ke,n(u)]]),A("span",{class:T(n(s).be("button","inner")),style:Ze(n(u)===i.label?n(y):{}),onKeydown:_[4]||(_[4]=G(()=>{},["stop"]))},[he(i.$slots,"default",{},()=>[x(se(i.label),1)])],38)],2)}}});var ze=J(Rl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Al=X({id:{type:String,default:void 0},size:_e,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),$l=Le,Bl=["id","aria-label","aria-labelledby"],Ol=$({name:"ElRadioGroup"}),Tl=$({...Ol,props:Al,emits:$l,setup(e,{emit:f}){const s=e,t=Z("radio"),b=Je(),l=L(),{formItem:c}=Ae(),{inputId:u,isLabeledByFormItem:r}=el(s,{formItemContext:c}),y=_=>{f(P,_),q(()=>f("change",_))};ge(()=>{const _=l.value.querySelectorAll("[type=radio]"),o=_[0];!Array.from(_).some(d=>d.checked)&&o&&(o.tabIndex=0)});const i=C(()=>s.name||b.value);return ll(Me,H({...Ve(s),changeEvent:y,name:i})),ie(()=>s.modelValue,()=>{s.validateEvent&&(c==null||c.validate("change").catch(_=>pe()))}),(_,o)=>(K(),D("div",{id:n(u),ref_key:"radioGroupRef",ref:l,class:T(n(t).b("group")),role:"radiogroup","aria-label":n(r)?void 0:_.label||"radio-group","aria-labelledby":n(r)?n(c).labelId:void 0},[he(_.$slots,"default")],10,Bl))}});var De=J(Tl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Pl=$e(wl,{RadioButton:ze,RadioGroup:De}),Fl=Be(De),Ul=Be(ze),Ll=X({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:_e,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>e===null||O(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),Ml={[ye]:(e,f)=>f!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[ae]:e=>O(e)||W(e),[P]:e=>O(e)||W(e)},Gl=["aria-label","onKeydown"],zl=["aria-label","onKeydown"],Dl=$({name:"ElInputNumber"}),ql=$({...Dl,props:Ll,emits:Ml,setup(e,{expose:f,emit:s}){const t=e,{t:b}=tl(),l=Z("input-number"),c=L(),u=H({currentValue:t.modelValue,userInput:null}),{formItem:r}=Ae(),y=C(()=>O(t.modelValue)&&t.modelValue<=t.min),i=C(()=>O(t.modelValue)&&t.modelValue>=t.max),_=C(()=>{const a=N(t.step);return te(t.precision)?Math.max(N(t.modelValue),a):(a>t.precision,t.precision)}),o=C(()=>t.controls&&t.controlsPosition==="right"),d=xe(),h=Se(),k=C(()=>{if(u.userInput!==null)return u.userInput;let a=u.currentValue;if(W(a))return"";if(O(a)){if(Number.isNaN(a))return"";te(t.precision)||(a=a.toFixed(t.precision))}return a}),S=(a,p)=>{if(te(p)&&(p=_.value),p===0)return Math.round(a);let V=String(a);const I=V.indexOf(".");if(I===-1||!V.replace(".","").split("")[I+p])return a;const ee=V.length;return V.charAt(ee-1)==="5"&&(V=`${V.slice(0,Math.max(0,ee-1))}6`),Number.parseFloat(Number(V).toFixed(p))},N=a=>{if(W(a))return 0;const p=a.toString(),V=p.indexOf(".");let I=0;return V!==-1&&(I=p.length-V-1),I},E=(a,p=1)=>O(a)?S(a+t.step*p):u.currentValue,F=()=>{if(t.readonly||h.value||i.value)return;const a=Number(k.value)||0,p=E(a);g(p),s(ae,u.currentValue)},M=()=>{if(t.readonly||h.value||y.value)return;const a=Number(k.value)||0,p=E(a,-1);g(p),s(ae,u.currentValue)},R=(a,p)=>{const{max:V,min:I,step:w,precision:U,stepStrictly:ee,valueOnClear:le}=t;V<I&&ul("InputNumber","min should not be greater than max.");let B=Number(a);if(W(a)||Number.isNaN(B))return null;if(a===""){if(le===null)return null;B=me(le)?{min:I,max:V}[le]:le}return ee&&(B=S(Math.round(B/w)*w,U)),te(U)||(B=S(B,U)),(B>V||B<I)&&(B=B>V?V:I,p&&s(P,B)),B},g=(a,p=!0)=>{var V;const I=u.currentValue,w=R(a);if(!p){s(P,w);return}I!==w&&(u.userInput=null,s(P,w),s(ye,w,I),t.validateEvent&&((V=r==null?void 0:r.validate)==null||V.call(r,"change").catch(U=>pe())),u.currentValue=w)},He=a=>{u.userInput=a;const p=a===""?null:Number(a);s(ae,p),g(p,!1)},je=a=>{const p=a!==""?Number(a):"";(O(p)&&!Number.isNaN(p)||a==="")&&g(p),u.userInput=null},We=()=>{var a,p;(p=(a=c.value)==null?void 0:a.focus)==null||p.call(a)},Ye=()=>{var a,p;(p=(a=c.value)==null?void 0:a.blur)==null||p.call(a)},Qe=a=>{s("focus",a)},Xe=a=>{var p;s("blur",a),t.validateEvent&&((p=r==null?void 0:r.validate)==null||p.call(r,"blur").catch(V=>pe()))};return ie(()=>t.modelValue,a=>{const p=R(u.userInput),V=R(a,!0);!O(p)&&(!p||p!==V)&&(u.currentValue=V,u.userInput=null)},{immediate:!0}),ge(()=>{var a;const{min:p,max:V,modelValue:I}=t,w=(a=c.value)==null?void 0:a.input;if(w.setAttribute("role","spinbutton"),Number.isFinite(V)?w.setAttribute("aria-valuemax",String(V)):w.removeAttribute("aria-valuemax"),Number.isFinite(p)?w.setAttribute("aria-valuemin",String(p)):w.removeAttribute("aria-valuemin"),w.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),w.setAttribute("aria-disabled",String(h.value)),!O(I)&&I!=null){let U=Number(I);Number.isNaN(U)&&(U=null),s(P,U)}}),nl(()=>{var a,p;const V=(a=c.value)==null?void 0:a.input;V==null||V.setAttribute("aria-valuenow",`${(p=u.currentValue)!=null?p:""}`)}),f({focus:We,blur:Ye}),(a,p)=>(K(),D("div",{class:T([n(l).b(),n(l).m(n(d)),n(l).is("disabled",n(h)),n(l).is("without-controls",!a.controls),n(l).is("controls-right",n(o))]),onDragstart:p[1]||(p[1]=G(()=>{},["prevent"]))},[a.controls?Q((K(),D("span",{key:0,role:"button","aria-label":n(b)("el.inputNumber.decrease"),class:T([n(l).e("decrease"),n(l).is("disabled",n(y))]),onKeydown:ne(M,["enter"])},[m(n(Ce),null,{default:v(()=>[n(o)?(K(),z(n(al),{key:0})):(K(),z(n(ol),{key:1}))]),_:1})],42,Gl)),[[n(Ie),M]]):Y("v-if",!0),a.controls?Q((K(),D("span",{key:1,role:"button","aria-label":n(b)("el.inputNumber.increase"),class:T([n(l).e("increase"),n(l).is("disabled",n(i))]),onKeydown:ne(F,["enter"])},[m(n(Ce),null,{default:v(()=>[n(o)?(K(),z(n(rl),{key:0})):(K(),z(n(sl),{key:1}))]),_:1})],42,zl)),[[n(Ie),F]]):Y("v-if",!0),m(n(Oe),{id:a.id,ref_key:"input",ref:c,type:"number",step:a.step,"model-value":n(k),placeholder:a.placeholder,readonly:a.readonly,disabled:n(h),size:n(d),max:a.max,min:a.min,name:a.name,label:a.label,"validate-event":!1,onWheel:p[0]||(p[0]=G(()=>{},["prevent"])),onKeydown:[ne(G(F,["prevent"]),["up"]),ne(G(M,["prevent"]),["down"])],onBlur:Xe,onFocus:Qe,onInput:He,onChange:je},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Hl=J(ql,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const jl=$e(Hl),Wl=(e,{attrs:f},{tree:s,key:t})=>{const b=Z("tree-select"),l={...ue(Ve(e),Object.keys(fe.props)),...f,valueKey:t,popperClass:C(()=>{const c=[b.e("popper")];return e.popperClass&&c.push(e.popperClass),c.join(" ")}),filterMethod:(c="")=>{e.filterMethod&&e.filterMethod(c),q(()=>{var u;(u=s.value)==null||u.filter(c)})},onVisibleChange:c=>{var u;(u=f.onVisibleChange)==null||u.call(f,c),e.filterable&&c&&l.filterMethod()}};return l},Yl=$({extends:Ee,setup(e,f){const s=Ee.setup(e,f);delete s.selectOptionClick;const t=il().proxy;return q(()=>{s.select.cachedOptions.get(t.value)||s.select.onOptionCreate(t)}),s},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function ve(e){return e||e===0}function ke(e){return Array.isArray(e)&&e.length}function j(e){return Array.isArray(e)?e:ve(e)?[e]:[]}function oe(e,f,s,t,b){for(let l=0;l<e.length;l++){const c=e[l];if(f(c,l,e,b))return t?t(c,l,e,b):c;{const u=s(c);if(ke(u)){const r=oe(u,f,s,t,c);if(r)return r}}}}function qe(e,f,s,t){for(let b=0;b<e.length;b++){const l=e[b];f(l,b,e,t);const c=s(l);ke(c)&&qe(c,f,s,l)}}const Ql=(e,{attrs:f,slots:s,emit:t},{select:b,tree:l,key:c})=>{ie(()=>e.modelValue,()=>{e.showCheckbox&&q(()=>{const o=l.value;o&&!hl(o.getCheckedKeys(),j(e.modelValue))&&o.setCheckedKeys(j(e.modelValue))})},{immediate:!0,deep:!0});const u=C(()=>({value:c.value,label:"label",children:"children",disabled:"disabled",isLeaf:"isLeaf",...e.props})),r=(o,d)=>{var h;const k=u.value[o];return ce(k)?k(d,(h=l.value)==null?void 0:h.getNode(r("value",d))):d[k]},y=j(e.modelValue).map(o=>oe(e.data||[],d=>r("value",d)===o,d=>r("children",d),(d,h,k,S)=>S&&r("value",S))).filter(o=>ve(o)),i=C(()=>{if(!e.renderAfterExpand&&!e.lazy)return[];const o=[];return qe(e.data.concat(e.cacheData),d=>{const h=r("value",d);o.push({value:h,currentLabel:r("label",d),isDisabled:r("disabled",d)})},d=>r("children",d)),o}),_=C(()=>i.value.reduce((o,d)=>({...o,[d.value]:d}),{}));return{...ue(Ve(e),Object.keys(be.props)),...f,nodeKey:c,expandOnClickNode:C(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:C(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(y):y),renderContent:(o,{node:d,data:h,store:k})=>o(Yl,{value:r("value",h),label:r("label",h),disabled:r("disabled",h)},e.renderContent?()=>e.renderContent(o,{node:d,data:h,store:k}):s.default?()=>s.default({node:d,data:h,store:k}):void 0),filterNodeMethod:(o,d,h)=>{var k;return e.filterNodeMethod?e.filterNodeMethod(o,d,h):o?(k=r("label",d))==null?void 0:k.includes(o):!0},onNodeClick:(o,d,h)=>{var k,S,N;if((k=f.onNodeClick)==null||k.call(f,o,d,h),!(e.showCheckbox&&e.checkOnClickNode))if(!e.showCheckbox&&(e.checkStrictly||d.isLeaf)){if(!r("disabled",o)){const E=(S=b.value)==null?void 0:S.options.get(r("value",o));(N=b.value)==null||N.handleOptionSelect(E)}}else e.expandOnClickNode&&h.proxy.handleExpandIconClick()},onCheck:(o,d)=>{if(!e.showCheckbox)return;const h=r("value",o),k=d.checkedKeys,S=e.multiple?j(e.modelValue).filter(E=>E in _.value&&!l.value.getNode(E)&&!k.includes(E)):[],N=k.concat(S);if(e.checkStrictly)t(P,e.multiple?N:N.includes(h)?h:void 0);else if(e.multiple)t(P,l.value.getCheckedKeys(!0));else{const E=oe([o],R=>!ke(r("children",R))&&!r("disabled",R),R=>r("children",R)),F=E?r("value",E):void 0,M=ve(e.modelValue)&&!!oe([o],R=>r("value",R)===e.modelValue,R=>r("children",R));t(P,F===e.modelValue||M?void 0:F)}q(()=>{var E;const F=j(e.modelValue);l.value.setCheckedKeys(F),(E=f.onCheck)==null||E.call(f,o,{checkedKeys:l.value.getCheckedKeys(),checkedNodes:l.value.getCheckedNodes(),halfCheckedKeys:l.value.getHalfCheckedKeys(),halfCheckedNodes:l.value.getHalfCheckedNodes()})})},cacheOptions:i}};var Xl=$({props:{data:{type:Array,default:()=>[]}},setup(e){const f=we(yl);return ie(()=>e.data,()=>{var s;e.data.forEach(b=>{f.cachedOptions.has(b.value)||f.cachedOptions.set(b.value,b)});const t=((s=f.selectWrapper)==null?void 0:s.querySelectorAll("input"))||[];Array.from(t).includes(document.activeElement)||f.setSelected()},{flush:"post",immediate:!0}),()=>{}}});const Zl=$({name:"ElTreeSelect",inheritAttrs:!1,props:{...fe.props,...be.props,cacheData:{type:Array,default:()=>[]}},setup(e,f){const{slots:s,expose:t}=f,b=L(),l=L(),c=C(()=>e.nodeKey||e.valueKey||"value"),u=Wl(e,f,{select:b,tree:l,key:c}),{cacheOptions:r,...y}=Ql(e,f,{select:b,tree:l,key:c}),i=H({});return t(i),ge(()=>{Object.assign(i,{...ue(l.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...ue(b.value,["focus","blur"])})}),()=>de(fe,H({...u,ref:_=>b.value=_}),{...s,default:()=>[de(Xl,{data:r.value}),de(be,H({...y,ref:_=>l.value=_}))]})}});var re=J(Zl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);re.install=e=>{e.component(re.name,re)};const Jl=re,et=Jl;const lt={pid:{required:!0,message:"不能为空",trigger:"blur"},title:{required:!0,message:"不能为空",trigger:"blur"},path:{required:!0,message:"不能为空",trigger:"blur"},component:{required:!0,message:"不能为空",trigger:"blur"},type:{required:!0,message:"不能为空",trigger:"blur"},hidden:{required:!0,message:"不能为空",trigger:"blur"}},tt=A("div",{class:"text-neutral text-xs"},"如为外链访问则以`http(s)://`开头",-1),nt=A("div",{class:"text-neutral text-xs"},"如：`system/menu/index`，默认在`views`目录下",-1),at=A("div",{class:"text-neutral text-xs"},"如有多个权限，请以`,`分割",-1),ot=A("div",{class:"text-neutral text-xs"},"选择隐藏则侧边栏不会显示，但仍可以访问",-1),rt=A("div",{class:"text-neutral text-xs"},"选择启用则会被`keep-alive`缓存",-1),st=A("div",{class:"text-neutral text-xs"},"选择启用则多页签会一直保留",-1),ut={class:"dialog-footer"},it=$({__name:"index",props:{treeData:{}},setup(e,{expose:f}){const s=e,t=L(!1),b=L(),l=H({id:0,pid:0,title:"",icon:"",path:"",component:"",iframeLink:"",permission:"",affix:0,isHide:0,isKeep:0,sort:0,type:0}),c=C(()=>{const y=[{id:0,title:"顶级",children:[]}];return y[0].children=s.treeData,y}),u=async y=>{t.value=!0,y&&(await q(),Object.assign(l,y))},r=()=>{b.value&&b.value.resetFields()};return f({init:u}),(y,i)=>{const _=Ul,o=Fl,d=Pe,h=et,k=Oe,S=_l,N=Pl,E=jl,F=Fe,M=Te,R=bl;return K(),z(R,{modelValue:t.value,"onUpdate:modelValue":i[14]||(i[14]=g=>t.value=g),title:l.id?"编辑":"添加",width:"550px",onClosed:r},{footer:v(()=>[A("span",ut,[m(M,{onClick:i[12]||(i[12]=g=>t.value=!1)},{default:v(()=>[x("取消")]),_:1}),m(M,{type:"primary",onClick:i[13]||(i[13]=g=>t.value=!1)},{default:v(()=>[x("确认")]),_:1})])]),default:v(()=>[m(F,{model:l,"label-width":"100",ref_key:"formRef",ref:b,rules:n(lt)},{default:v(()=>[m(d,{label:"菜单类型",prop:"type"},{default:v(()=>[m(o,{modelValue:l.type,"onUpdate:modelValue":i[0]||(i[0]=g=>l.type=g)},{default:v(()=>[m(_,{label:0},{default:v(()=>[x("目录")]),_:1}),m(_,{label:1},{default:v(()=>[x("菜单")]),_:1})]),_:1},8,["modelValue"])]),_:1}),m(d,{label:"父级菜单",prop:"pid"},{default:v(()=>[m(h,{class:"w-full",modelValue:l.pid,"onUpdate:modelValue":i[1]||(i[1]=g=>l.pid=g),data:c.value,"node-key":"id","check-strictly":"",placeholder:"请选择父级菜单","render-after-expand":!1,"default-expanded-keys":[0],props:{label:"title"}},null,8,["modelValue","data"])]),_:1}),m(d,{label:"菜单名称",prop:"title"},{default:v(()=>[m(k,{modelValue:l.title,"onUpdate:modelValue":i[2]||(i[2]=g=>l.title=g),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])]),_:1}),m(d,{label:"菜单图标",prop:"icon"},{default:v(()=>[m(S,{modelValue:l.icon,"onUpdate:modelValue":i[3]||(i[3]=g=>l.icon=g),style:{width:"100%"}},null,8,["modelValue"])]),_:1}),m(d,{label:"路由路径",prop:"path"},{default:v(()=>[m(k,{modelValue:l.path,"onUpdate:modelValue":i[4]||(i[4]=g=>l.path=g),placeholder:"请输入路由路径",clearable:""},null,8,["modelValue"]),tt]),_:1}),l.type?(K(),z(d,{key:0,label:"组件路径",prop:"component"},{default:v(()=>[m(k,{modelValue:l.component,"onUpdate:modelValue":i[5]||(i[5]=g=>l.component=g),placeholder:"请输入组件路径",clearable:""},null,8,["modelValue"]),nt]),_:1})):Y("",!0),l.type?(K(),z(d,{key:1,label:"按钮权限",prop:"permission"},{default:v(()=>[m(k,{modelValue:l.permission,"onUpdate:modelValue":i[6]||(i[6]=g=>l.permission=g),placeholder:"请输入组件路径",clearable:""},null,8,["modelValue"]),at]),_:1})):Y("",!0),l.type?(K(),z(d,{key:2,label:"内链地址",prop:"iframeLink"},{default:v(()=>[m(k,{modelValue:l.iframeLink,"onUpdate:modelValue":i[7]||(i[7]=g=>l.iframeLink=g),placeholder:"请输入内链地址",clearable:""},null,8,["modelValue"])]),_:1})):Y("",!0),m(d,{label:"是否显示"},{default:v(()=>[m(o,{modelValue:l.isHide,"onUpdate:modelValue":i[8]||(i[8]=g=>l.isHide=g),class:"w-full"},{default:v(()=>[m(N,{label:0},{default:v(()=>[x("启用")]),_:1}),m(N,{label:1},{default:v(()=>[x("隐藏")]),_:1})]),_:1},8,["modelValue"]),ot]),_:1}),m(d,{label:"是否缓存"},{default:v(()=>[m(o,{modelValue:l.isKeep,"onUpdate:modelValue":i[9]||(i[9]=g=>l.isKeep=g),class:"w-full"},{default:v(()=>[m(N,{label:1},{default:v(()=>[x("启用")]),_:1}),m(N,{label:0},{default:v(()=>[x("关闭")]),_:1})]),_:1},8,["modelValue"]),rt]),_:1}),m(d,{label:"是否固定"},{default:v(()=>[m(o,{modelValue:l.affix,"onUpdate:modelValue":i[10]||(i[10]=g=>l.affix=g),class:"w-full"},{default:v(()=>[m(N,{label:1},{default:v(()=>[x("启用")]),_:1}),m(N,{label:0},{default:v(()=>[x("关闭")]),_:1})]),_:1},8,["modelValue"]),st]),_:1}),m(d,{label:"排序"},{default:v(()=>[m(E,{modelValue:l.sort,"onUpdate:modelValue":i[11]||(i[11]=g=>l.sort=g),placeholder:"请输入排序序号"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),dt={class:"page-card h-full"},At=$({__name:"index",setup(e){const f=L(),s=C(()=>u=>u.pid===0||u.pid!==0&&u.childen&&u.childen.length?"目录":"菜单"),{tableData:t,loading:b}=vl({apiFn:dl,isPageable:!1}),l=u=>{f.value.init(u)},c=()=>{};return(u,r)=>{const y=Te,i=Pe,_=Fe,o=ml,d=fl,h=gl,k=pl,S=cl;return Q((K(),D("div",dt,[m(_,{inline:""},{default:v(()=>[m(i,null,{default:v(()=>[m(y,{type:"default",onClick:r[0]||(r[0]=N=>l())},{default:v(()=>[x("新增")]),_:1})]),_:1})]),_:1}),m(k,{data:n(t),"row-key":"id"},{default:v(()=>[m(o,{label:"菜单名称",prop:"title","min-width":"150","show-overflow-tooltip":""}),m(o,{label:"类型",prop:"name",align:"center"},{default:v(N=>[A("div",null,se(s.value(N.row)),1)]),_:1}),m(o,{label:"图标",align:"center"},{default:v(N=>[m(d,{name:N.row.icon},null,8,["name"])]),_:1}),m(o,{label:"状态",align:"center"},{default:v(N=>[m(h,{type:""},{default:v(()=>[x(se(N.row.hidden?"隐藏":"启用"),1)]),_:2},1024)]),_:1}),m(o,{label:"排序",prop:"sort",align:"center"}),m(o,{label:"操作",width:"260",align:"center"},{default:v(N=>[m(y,{type:"primary",link:"",onClick:E=>l(N.row)},{default:v(()=>[x("编辑")]),_:2},1032,["onClick"]),m(y,{type:"danger",link:"",onClick:c},{default:v(()=>[x("删除")]),_:1})]),_:1})]),_:1},8,["data"]),m(n(it),{ref_key:"addOrUpdateRef",ref:f,"tree-data":n(t)},null,8,["tree-data"])])),[[S,n(b)]])}}});export{At as default};
