import{d as R,a2 as Y,R as M,b6 as G,c as v,cv as H,o as f,l as I,g as h,m as r,n as t,h as e,t as W,q as k,w as n,e as F,i as X,E as Z,j as T,I as N,_ as j,cw as x,u as ee,aj as P,a as oe,r as S,Q as se,f as ae,ah as le,ai as te,al as ne,b5 as re,v as ie,s as de,am as ce,cx as ue,y as fe}from"./index-40c733bf.js";import{b as pe,c as me,d as ge,a as ve,u as be}from"./use-dialog-24078bca.js";import{c as ye}from"./refs-092a071f.js";const z=Symbol("dialogInjectionKey"),Ce=["aria-level"],he=["aria-label"],ke=["id"],Re=R({name:"ElDialogContent"}),Ee=R({...Re,props:pe,emits:me,setup(E){const l=E,{t:i}=Y(),{Close:$}=x,{dialogRef:d,headerRef:p,bodyId:w,ns:s,style:m}=M(z),{focusTrapRef:b}=M(G),y=v(()=>[s.b(),s.is("fullscreen",l.fullscreen),s.is("draggable",l.draggable),s.is("align-center",l.alignCenter),{[s.m("center")]:l.center},l.customClass]),A=ye(b,d),D=v(()=>l.draggable);return H(d,p,D),(a,C)=>(f(),I("div",{ref:e(A),class:t(e(y)),style:N(e(m)),tabindex:"-1"},[h("header",{ref_key:"headerRef",ref:p,class:t(e(s).e("header"))},[r(a.$slots,"header",{},()=>[h("span",{role:"heading","aria-level":a.ariaLevel,class:t(e(s).e("title"))},W(a.title),11,Ce)]),a.showClose?(f(),I("button",{key:0,"aria-label":e(i)("el.dialog.close"),class:t(e(s).e("headerbtn")),type:"button",onClick:C[0]||(C[0]=L=>a.$emit("close"))},[k(e(Z),{class:t(e(s).e("close"))},{default:n(()=>[(f(),F(X(a.closeIcon||e($))))]),_:1},8,["class"])],10,he)):T("v-if",!0)],2),h("div",{id:e(w),class:t(e(s).e("body"))},[r(a.$slots,"default")],10,ke),a.$slots.footer?(f(),I("footer",{key:0,class:t(e(s).e("footer"))},[r(a.$slots,"footer")],2)):T("v-if",!0)],6))}});var $e=j(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const we=["aria-label","aria-labelledby","aria-describedby"],Ae=R({name:"ElDialog",inheritAttrs:!1}),De=R({...Ae,props:ge,emits:ve,setup(E,{expose:l}){const i=E,$=ee();P({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},v(()=>!!$.title)),P({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},v(()=>!!i.customClass));const d=oe("dialog"),p=S(),w=S(),s=S(),{visible:m,titleId:b,bodyId:y,style:A,overlayDialogStyle:D,rendered:a,zIndex:C,afterEnter:L,afterLeave:q,beforeLeave:K,handleClose:B,onModalClick:O,onOpenAutoFocus:_,onCloseAutoFocus:U,onCloseRequested:V,onFocusoutPrevented:J}=be(i,p);se(z,{dialogRef:p,headerRef:w,bodyId:y,ns:d,rendered:a,style:A});const c=ue(O),Q=v(()=>i.draggable&&!i.fullscreen);return l({visible:m,dialogContentRef:s}),(o,u)=>(f(),F(ce,{to:"body",disabled:!o.appendToBody},[k(de,{name:"dialog-fade",onAfterEnter:e(L),onAfterLeave:e(q),onBeforeLeave:e(K),persisted:""},{default:n(()=>[ae(k(e(le),{"custom-mask-event":"",mask:o.modal,"overlay-class":o.modalClass,"z-index":e(C)},{default:n(()=>[h("div",{role:"dialog","aria-modal":"true","aria-label":o.title||void 0,"aria-labelledby":o.title?void 0:e(b),"aria-describedby":e(y),class:t(`${e(d).namespace.value}-overlay-dialog`),style:N(e(D)),onClick:u[0]||(u[0]=(...g)=>e(c).onClick&&e(c).onClick(...g)),onMousedown:u[1]||(u[1]=(...g)=>e(c).onMousedown&&e(c).onMousedown(...g)),onMouseup:u[2]||(u[2]=(...g)=>e(c).onMouseup&&e(c).onMouseup(...g))},[k(e(te),{loop:"",trapped:e(m),"focus-start-el":"container",onFocusAfterTrapped:e(_),onFocusAfterReleased:e(U),onFocusoutPrevented:e(J),onReleaseRequested:e(V)},{default:n(()=>[e(a)?(f(),F($e,ne({key:0,ref_key:"dialogContentRef",ref:s},o.$attrs,{"custom-class":o.customClass,center:o.center,"align-center":o.alignCenter,"close-icon":o.closeIcon,draggable:e(Q),fullscreen:o.fullscreen,"show-close":o.showClose,title:o.title,"aria-level":o.headerAriaLevel,onClose:e(B)}),re({header:n(()=>[o.$slots.title?r(o.$slots,"title",{key:1}):r(o.$slots,"header",{key:0,close:e(B),titleId:e(b),titleClass:e(d).e("title")})]),default:n(()=>[r(o.$slots,"default")]),_:2},[o.$slots.footer?{name:"footer",fn:n(()=>[r(o.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):T("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,we)]),_:3},8,["mask","overlay-class","z-index"]),[[ie,e(m)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Ie=j(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Le=fe(Ie);export{Le as E};
