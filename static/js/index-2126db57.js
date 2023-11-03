import{d as b,aC as I,aE as S,aK as z,o as C,l as V,g as i,q as e,h as d,aI as D,aJ as N,w as o,p as c,aW as P,r as y,aM as B,a8 as T,t as p,ab as U,ac as j}from"./index-cdc499c6.js";import{E as q}from"./el-card-33206790.js";import{E as L,a as R}from"./el-form-item-06d23ba6.js";import{E as A}from"./el-text-88728cd7.js";import{E as F}from"./el-checkbox-ab7e2b98.js";import{E as M,a as J,b as K,c as W}from"./el-dropdown-item-a4aabdec.js";import"./el-popper-d448024b.js";import{_ as G}from"./Icon.vue_vue_type_script_lang-5f768c9c.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./refs-a153aa6b.js";import"./isEqual-0817435c.js";import"./dropdown-14853818.js";const O={class:"flex-y-center justify-between px-25 <sm:px-8 absolute top-0 right-0 left-0 h-20"},Q={class:"flex-y-center"},X=i("div",{class:"text-5 ml-4"},[c("zc"),i("span",{class:"color-primary ml-1"},"Admin")],-1),Y={class:"flex-y-center"},Z={class:"flex-center h-5 w-10 cursor-pointer"},ee=b({__name:"index",setup(g){const m=I(),n=S(),{locale:u}=z.useI18n(),h=r=>{n.setIsDark(r),n.setThemeColor(n.themeColor)},s=r=>{u.value=r,m.setLanguage(r)};return(r,a)=>{const t=G,f=M,l=J,w=K,v=W;return C(),V("div",O,[i("div",Q,[e(t,{name:"local-icon-logo",size:"24",color:"var(--el-color-primary)"}),X]),i("div",Y,[e(f,{"model-value":d(n).isDark,"inline-prompt":"","active-icon":d(D),"inactive-icon":d(N),onChange:h},null,8,["model-value","active-icon","inactive-icon"]),e(v,{trigger:"click",onCommand:s},{dropdown:o(()=>[e(w,null,{default:o(()=>[e(l,{disabled:d(m).language==="zh-CN",command:"zh-CN"},{default:o(()=>[c(" 简体中文 ")]),_:1},8,["disabled"]),e(l,{disabled:d(m).language==="en",command:"en"},{default:o(()=>[c(" English ")]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[i("div",Z,[e(t,{name:"local-icon-language",size:"20"})])]),_:1})])])}}}),E=g=>P.global.t(g),oe={username:{required:!0,message:E("login.usernamePlaceholder"),trigger:"blur"},password:{required:!0,message:E("login.passwordPlaceholder"),trigger:"blur"}},ae={class:"login-container"},te={class:"mt-6 font-500 text-primary text-18px",type:"primary"},se={class:"w-full flex-y-center justify-between"},le=b({name:"Login",__name:"index",setup(g){const m=y(),n=y(!1),u=y(!1),h=B(),s=T({username:"admin",password:"12345"}),r=async()=>{var a;await((a=m.value)==null?void 0:a.validate());try{u.value=!0,await h.login(s)}finally{u.value=!1}};return(a,t)=>{const f=U,l=L,w=F,v=A,x=j,$=R,k=q;return C(),V("div",ae,[e(d(ee)),e(k,{class:"z-1 !border-none w-100 !bg-transparent !rounded-4% <sm:w-83"},{default:o(()=>[i("h3",te,p(a.$t("login.login")),1),e($,{ref_key:"formRef",ref:m,model:s,rules:d(oe),class:"mt-6",size:"large"},{default:o(()=>[e(l,{prop:"username"},{default:o(()=>[e(f,{modelValue:s.username,"onUpdate:modelValue":t[0]||(t[0]=_=>s.username=_),placeholder:a.$t("login.usernamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1}),e(l,{prop:"password"},{default:o(()=>[e(f,{modelValue:s.password,"onUpdate:modelValue":t[1]||(t[1]=_=>s.password=_),"show-password":"",placeholder:a.$t("login.passwordPlaceholder")},null,8,["modelValue","placeholder"])]),_:1}),e(l,null,{default:o(()=>[i("div",se,[e(w,{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=_=>n.value=_),class:"<sm:text-sm"},{default:o(()=>[c(p(a.$t("login.remember")),1)]),_:1},8,["modelValue"]),e(v,{type:"primary",class:"cursor-pointer <sm:!text-sm"},{default:o(()=>[c(p(a.$t("login.forgetPassword")),1)]),_:1})])]),_:1}),e(l,null,{default:o(()=>[e(x,{class:"w-full",type:"primary",onClick:r,loading:u.value},{default:o(()=>[c(p(a.$t("login.login")),1)]),_:1},8,["loading"])]),_:1}),e(l,null,{default:o(()=>[e(x,{class:"w-full"},{default:o(()=>[c(p(a.$t("login.register")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})])}}});const we=H(le,[["__scopeId","data-v-856572ac"]]);export{we as default};
