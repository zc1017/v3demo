import{bs as w,d as x,r as s,f as L,h as l,o as h,l as $,q as e,w as t,p as r,bc as D,ac as M}from"./index-40c733bf.js";import{v as R}from"./el-loading-3b671738.js";import{E as T,a as A}from"./el-table-column-1dbda909.js";import"./el-checkbox-3b2a9147.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-fa01422f.js";/* empty css               */import{E as B,a as F}from"./el-form-item-cfb0ea0d.js";import{u as O}from"./useTable-f5bb2529.js";import{_ as U}from"./index.vue_vue_type_script_setup_true_lang-e58cf6c3.js";import{_ as q}from"./index.vue_vue_type_script_setup_true_lang-de1053bb.js";import"./_Uint8Array-a6e86528.js";import"./_initCloneObject-e3d16b17.js";import"./isEqual-408657fd.js";import"./index-596e56c2.js";import"./castArray-5f3bb4e1.js";import"./el-dialog-d88d5945.js";import"./use-dialog-24078bca.js";import"./refs-092a071f.js";import"./el-tree-3da22496.js";import"./index-0896be7e.js";const I=()=>w.get("/mock/role"),N={class:"page-card h-full"},me=x({__name:"index",setup(P){const m=s(),p=s(),c=s([]),{tableData:u,loading:f}=O({apiFn:I,isPageable:!1}),_=o=>{m.value.init(o)};(async()=>{const{data:o}=await D();c.value=o})();const b=async o=>{p.value.init(o.menu_id)},g=()=>{};return(o,d)=>{const a=M,k=B,v=F,n=T,y=A,C=R;return L((h(),$("div",N,[e(v,{inline:""},{default:t(()=>[e(k,null,{default:t(()=>[e(a,{type:"default",onClick:d[0]||(d[0]=i=>_())},{default:t(()=>[r("新增")]),_:1})]),_:1})]),_:1}),e(y,{data:l(u),border:""},{default:t(()=>[e(n,{label:"ID",type:"index",align:"center"}),e(n,{label:"名称",prop:"name",align:"center"}),e(n,{label:"标识",prop:"role_name",align:"center"}),e(n,{label:"创建时间",prop:"creat_at",align:"center"}),e(n,{label:"操作",width:"260",align:"center"},{default:t(i=>[e(a,{type:"primary",link:"",onClick:E=>_(i.row)},{default:t(()=>[r("编辑")]),_:2},1032,["onClick"]),e(a,{type:"primary",link:"",onClick:E=>b(i.row)},{default:t(()=>[r("菜单权限")]),_:2},1032,["onClick"]),e(a,{type:"danger",link:"",onClick:g},{default:t(()=>[r("删除")]),_:1})]),_:1})]),_:1},8,["data"]),e(l(U),{ref_key:"addOrUpdateRef",ref:m},null,512),e(l(q),{ref_key:"permissonRef",ref:p,"all-menu-list":c.value},null,8,["all-menu-list"])])),[[C,l(f)]])}}});export{me as default};
