import{b as r,z as p,d as a,a4 as i,a as c,c as m,ba as u,o as d,e as f,w as y,m as x,n as _,h as g,I as S,i as z,_ as C,y as b}from"./index-cdc499c6.js";const v=r({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:p,default:""},truncated:{type:Boolean},lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),w=a({name:"ElText"}),h=a({...w,props:v,setup(n){const t=n,l=i(),e=c("text"),o=m(()=>[e.b(),e.m(t.type),e.m(l.value),e.is("truncated",t.truncated),e.is("line-clamp",!u(t.lineClamp))]);return(s,T)=>(d(),f(z(s.tag),{class:_(g(o)),style:S({"-webkit-line-clamp":s.lineClamp})},{default:y(()=>[x(s.$slots,"default")]),_:3},8,["class","style"]))}});var k=C(h,[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);const E=b(k);export{E};
