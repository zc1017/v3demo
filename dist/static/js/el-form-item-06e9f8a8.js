import{bX as $e,bE as Ze,bB as Ot,bH as qt,cq as jt,b as Oe,z as He,C as ge,bL as Et,D as me,b8 as Qe,r as V,c as T,d as H,a4 as Xe,a as qe,H as ne,af as Tt,Q as ke,a8 as et,bg as tt,cr as je,o as ye,l as rt,m as ee,n as K,h as E,_ as nt,bd as it,R as ie,bu as ve,M as St,L as at,at as st,bh as _t,ax as Pt,q as ae,F as $t,a9 as ot,u as It,b4 as Mt,cs as Rt,G as Ie,bQ as de,w as ce,e as Lt,i as Nt,I as Me,p as Bt,t as Re,j as Le,g as Ne,ct as Vt,y as Wt,U as Ct}from"./index-6fcfa17b.js";import{c as he}from"./castArray-96aac37c.js";import{k as ft,g as lt,s as Dt,d as Ut,e as zt,f as Ee,n as se,h as ut,a as Gt,S as Kt,j as Yt}from"./_Uint8Array-281f515a.js";import{c as oe,k as Te,g as Jt,e as dt,d as Zt,a as Ht,b as Qt,i as Xt}from"./_initCloneObject-22db3bad.js";function kt(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}function er(r,e){return r&&oe(e,ft(e),r)}function tr(r,e){return r&&oe(e,Te(e),r)}function rr(r,e){return oe(r,lt(r),e)}var nr=Object.getOwnPropertySymbols,ir=nr?function(r){for(var e=[];r;)Ut(e,lt(r)),r=Jt(r);return e}:Dt;const ct=ir;function ar(r,e){return oe(r,ct(r),e)}function sr(r){return zt(r,Te,ct)}var or=Object.prototype,fr=or.hasOwnProperty;function lr(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&fr.call(r,"index")&&(t.index=r.index,t.input=r.input),t}function ur(r,e){var t=e?dt(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var dr=/\w*$/;function cr(r){var e=new r.constructor(r.source,dr.exec(r));return e.lastIndex=r.lastIndex,e}var Be=$e?$e.prototype:void 0,Ve=Be?Be.valueOf:void 0;function pr(r){return Ve?Object(Ve.call(r)):{}}var gr="[object Boolean]",mr="[object Date]",yr="[object Map]",vr="[object Number]",hr="[object RegExp]",br="[object Set]",wr="[object String]",Fr="[object Symbol]",xr="[object ArrayBuffer]",Ar="[object DataView]",Or="[object Float32Array]",qr="[object Float64Array]",jr="[object Int8Array]",Er="[object Int16Array]",Tr="[object Int32Array]",Sr="[object Uint8Array]",_r="[object Uint8ClampedArray]",Pr="[object Uint16Array]",$r="[object Uint32Array]";function Ir(r,e,t){var n=r.constructor;switch(e){case xr:return dt(r);case gr:case mr:return new n(+r);case Ar:return ur(r,t);case Or:case qr:case jr:case Er:case Tr:case Sr:case _r:case Pr:case $r:return Zt(r,t);case yr:return new n;case vr:case wr:return new n(r);case hr:return cr(r);case br:return new n;case Fr:return pr(r)}}var Mr="[object Map]";function Rr(r){return Ze(r)&&Ee(r)==Mr}var We=se&&se.isMap,Lr=We?ut(We):Rr;const Nr=Lr;var Br="[object Set]";function Vr(r){return Ze(r)&&Ee(r)==Br}var Ce=se&&se.isSet,Wr=Ce?ut(Ce):Vr;const Cr=Wr;var Dr=1,Ur=2,zr=4,pt="[object Arguments]",Gr="[object Array]",Kr="[object Boolean]",Yr="[object Date]",Jr="[object Error]",gt="[object Function]",Zr="[object GeneratorFunction]",Hr="[object Map]",Qr="[object Number]",mt="[object Object]",Xr="[object RegExp]",kr="[object Set]",en="[object String]",tn="[object Symbol]",rn="[object WeakMap]",nn="[object ArrayBuffer]",an="[object DataView]",sn="[object Float32Array]",on="[object Float64Array]",fn="[object Int8Array]",ln="[object Int16Array]",un="[object Int32Array]",dn="[object Uint8Array]",cn="[object Uint8ClampedArray]",pn="[object Uint16Array]",gn="[object Uint32Array]",A={};A[pt]=A[Gr]=A[nn]=A[an]=A[Kr]=A[Yr]=A[sn]=A[on]=A[fn]=A[ln]=A[un]=A[Hr]=A[Qr]=A[mt]=A[Xr]=A[kr]=A[en]=A[tn]=A[dn]=A[cn]=A[pn]=A[gn]=!0;A[Jr]=A[gt]=A[rn]=!1;function te(r,e,t,n,i,s){var a,o=e&Dr,u=e&Ur,w=e&zr;if(t&&(a=i?t(r,n,i,s):t(r)),a!==void 0)return a;if(!Ot(r))return r;var c=qt(r);if(c){if(a=lr(r),!o)return Ht(r,a)}else{var g=Ee(r),b=g==gt||g==Zr;if(Gt(r))return Qt(r,o);if(g==mt||g==pt||b&&!i){if(a=u||b?{}:Xt(r),!o)return u?ar(r,tr(a,r)):rr(r,er(a,r))}else{if(!A[g])return i?r:{};a=Ir(r,g,o)}}s||(s=new Kt);var q=s.get(r);if(q)return q;s.set(r,a),Cr(r)?r.forEach(function(m){a.add(te(m,e,t,m,r,s))}):Nr(r)&&r.forEach(function(m,f){a.set(f,te(m,e,t,f,r,s))});var j=w?u?sr:Yt:u?Te:ft,d=c?void 0:j(r);return kt(d||r,function(m,f){d&&(f=m,m=r[f]),jt(a,f,te(m,e,t,f,r,s))}),a}var mn=4;function De(r){return te(r,mn)}const yn=Oe({size:{type:String,values:He},disabled:Boolean}),vn=Oe({...yn,model:Object,rules:{type:ge(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),hn={validate:(r,e,t)=>(Et(r)||me(r))&&Qe(e)&&me(t)};function bn(){const r=V([]),e=T(()=>{if(!r.value.length)return"0";const s=Math.max(...r.value);return s?`${s}px`:""});function t(s){const a=r.value.indexOf(s);return a===-1&&e.value,a}function n(s,a){if(s&&a){const o=t(a);r.value.splice(o,1,s)}else s&&r.value.push(s)}function i(s){const a=t(s);a>-1&&r.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const X=(r,e)=>{const t=he(e);return t.length>0?r.filter(n=>n.prop&&t.includes(n.prop)):r},wn="ElForm",Fn=H({name:wn}),xn=H({...Fn,props:vn,emits:hn,setup(r,{expose:e,emit:t}){const n=r,i=[],s=Xe(),a=qe("form"),o=T(()=>{const{labelPosition:y,inline:l}=n;return[a.b(),a.m(s.value||"default"),{[a.m(`label-${y}`)]:y,[a.m("inline")]:l}]}),u=y=>{i.push(y)},w=y=>{y.prop&&i.splice(i.indexOf(y),1)},c=(y=[])=>{n.model&&X(i,y).forEach(l=>l.resetField())},g=(y=[])=>{X(i,y).forEach(l=>l.clearValidate())},b=T(()=>!!n.model),q=y=>{if(i.length===0)return[];const l=X(i,y);return l.length?l:[]},j=async y=>m(void 0,y),d=async(y=[])=>{if(!b.value)return!1;const l=q(y);if(l.length===0)return!0;let h={};for(const x of l)try{await x.validate("")}catch(O){h={...h,...O}}return Object.keys(h).length===0?!0:Promise.reject(h)},m=async(y=[],l)=>{const h=!it(l);try{const x=await d(y);return x===!0&&(l==null||l(x)),x}catch(x){if(x instanceof Error)throw x;const O=x;return n.scrollToError&&f(Object.keys(O)[0]),l==null||l(!1,O),h&&Promise.reject(O)}},f=y=>{var l;const h=X(i,y)[0];h&&((l=h.$el)==null||l.scrollIntoView(n.scrollIntoViewOptions))};return ne(()=>n.rules,()=>{n.validateOnRuleChange&&j().catch(y=>Tt())},{deep:!0}),ke(je,et({...tt(n),emit:t,resetFields:c,clearValidate:g,validateField:m,addField:u,removeField:w,...bn()})),e({validate:j,validateField:m,resetFields:c,clearValidate:g,scrollToField:f}),(y,l)=>(ye(),rt("form",{class:K(E(o))},[ee(y.$slots,"default")],2))}});var An=nt(xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function W(){return W=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},W.apply(this,arguments)}function On(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Z(r,e)}function be(r){return be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},be(r)}function Z(r,e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Z(r,e)}function qn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function re(r,e,t){return qn()?re=Reflect.construct.bind():re=function(i,s,a){var o=[null];o.push.apply(o,s);var u=Function.bind.apply(i,o),w=new u;return a&&Z(w,a.prototype),w},re.apply(null,arguments)}function jn(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function we(r){var e=typeof Map=="function"?new Map:void 0;return we=function(n){if(n===null||!jn(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return re(n,arguments,be(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Z(i,n)},we(r)}var En=/%[sdj%]/g,Tn=function(){};typeof process<"u"&&process.env;function Fe(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function I(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,s=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var a=r.replace(En,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return a}return r}function Sn(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function S(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||Sn(e)&&typeof r=="string"&&!r)}function _n(r,e,t){var n=[],i=0,s=r.length;function a(o){n.push.apply(n,o||[]),i++,i===s&&t(n)}r.forEach(function(o){e(o,a)})}function Ue(r,e,t){var n=0,i=r.length;function s(a){if(a&&a.length){t(a);return}var o=n;n=n+1,o<i?e(r[o],s):t([])}s([])}function Pn(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var ze=function(r){On(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(we(Error));function $n(r,e,t,n,i){if(e.first){var s=new Promise(function(b,q){var j=function(f){return n(f),f.length?q(new ze(f,Fe(f))):b(i)},d=Pn(r);Ue(d,t,j)});return s.catch(function(b){return b}),s}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],o=Object.keys(r),u=o.length,w=0,c=[],g=new Promise(function(b,q){var j=function(m){if(c.push.apply(c,m),w++,w===u)return n(c),c.length?q(new ze(c,Fe(c))):b(i)};o.length||(n(c),b(i)),o.forEach(function(d){var m=r[d];a.indexOf(d)!==-1?Ue(m,t,j):_n(m,t,j)})});return g.catch(function(b){return b}),g}function In(r){return!!(r&&r.message!==void 0)}function Mn(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Ge(r,e){return function(t){var n;return r.fullFields?n=Mn(e,r.fullFields):n=e[t.field||r.fullField],In(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function Ke(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=W({},r[t],n):r[t]=n}}return r}var yt=function(e,t,n,i,s,a){e.required&&(!n.hasOwnProperty(e.field)||S(t,a||e.type))&&i.push(I(s.messages.required,e.fullField))},Rn=function(e,t,n,i,s){(/^\s+$/.test(t)||t==="")&&i.push(I(s.messages.whitespace,e.fullField))},k,Ln=function(){if(k)return k;var r="[a-fA-F\\d:]",e=function(h){return h&&h.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),u=function(h){return h&&h.exact?s:new RegExp("(?:"+e(h)+t+e(h)+")|(?:"+e(h)+i+e(h)+")","g")};u.v4=function(l){return l&&l.exact?a:new RegExp(""+e(l)+t+e(l),"g")},u.v6=function(l){return l&&l.exact?o:new RegExp(""+e(l)+i+e(l),"g")};var w="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",g=u.v4().source,b=u.v6().source,q="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",j="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",m="(?::\\d{2,5})?",f='(?:[/?#][^\\s"]*)?',y="(?:"+w+"|www\\.)"+c+"(?:localhost|"+g+"|"+b+"|"+q+j+d+")"+m+f;return k=new RegExp("(?:^"+y+"$)","i"),k},Ye={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Y={integer:function(e){return Y.number(e)&&parseInt(e,10)===e},float:function(e){return Y.number(e)&&!Y.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!Y.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Ye.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Ln())},hex:function(e){return typeof e=="string"&&!!e.match(Ye.hex)}},Nn=function(e,t,n,i,s){if(e.required&&t===void 0){yt(e,t,n,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?Y[o](t)||i.push(I(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push(I(s.messages.types[o],e.fullField,e.type))},Bn=function(e,t,n,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",u=typeof e.max=="number",w=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=t,g=null,b=typeof t=="number",q=typeof t=="string",j=Array.isArray(t);if(b?g="number":q?g="string":j&&(g="array"),!g)return!1;j&&(c=t.length),q&&(c=t.replace(w,"_").length),a?c!==e.len&&i.push(I(s.messages[g].len,e.fullField,e.len)):o&&!u&&c<e.min?i.push(I(s.messages[g].min,e.fullField,e.min)):u&&!o&&c>e.max?i.push(I(s.messages[g].max,e.fullField,e.max)):o&&u&&(c<e.min||c>e.max)&&i.push(I(s.messages[g].range,e.fullField,e.min,e.max))},z="enum",Vn=function(e,t,n,i,s){e[z]=Array.isArray(e[z])?e[z]:[],e[z].indexOf(t)===-1&&i.push(I(s.messages[z],e.fullField,e[z].join(", ")))},Wn=function(e,t,n,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(I(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(I(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},v={required:yt,whitespace:Rn,type:Nn,range:Bn,enum:Vn,pattern:Wn},Cn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();v.required(e,t,i,a,s,"string"),S(t,"string")||(v.type(e,t,i,a,s),v.range(e,t,i,a,s),v.pattern(e,t,i,a,s),e.whitespace===!0&&v.whitespace(e,t,i,a,s))}n(a)},Dn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}n(a)},Un=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),S(t)&&!e.required)return n();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}n(a)},zn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}n(a)},Gn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();v.required(e,t,i,a,s),S(t)||v.type(e,t,i,a,s)}n(a)},Kn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}n(a)},Yn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}n(a)},Jn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();v.required(e,t,i,a,s,"array"),t!=null&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}n(a)},Zn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}n(a)},Hn="enum",Qn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();v.required(e,t,i,a,s),t!==void 0&&v[Hn](e,t,i,a,s)}n(a)},Xn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();v.required(e,t,i,a,s),S(t,"string")||v.pattern(e,t,i,a,s)}n(a)},kn=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"date")&&!e.required)return n();if(v.required(e,t,i,a,s),!S(t,"date")){var u;t instanceof Date?u=t:u=new Date(t),v.type(e,u,i,a,s),u&&v.range(e,u.getTime(),i,a,s)}}n(a)},ei=function(e,t,n,i,s){var a=[],o=Array.isArray(t)?"array":typeof t;v.required(e,t,i,a,s,o),n(a)},pe=function(e,t,n,i,s){var a=e.type,o=[],u=e.required||!e.required&&i.hasOwnProperty(e.field);if(u){if(S(t,a)&&!e.required)return n();v.required(e,t,i,o,s,a),S(t,a)||v.type(e,t,i,o,s)}n(o)},ti=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();v.required(e,t,i,a,s)}n(a)},J={string:Cn,method:Dn,number:Un,boolean:zn,regexp:Gn,integer:Kn,float:Yn,array:Jn,object:Zn,enum:Qn,pattern:Xn,date:kn,url:pe,hex:pe,email:pe,required:ei,any:ti};function xe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Ae=xe(),Q=function(){function r(t){this.rules=null,this._messages=Ae,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Ke(xe(),n)),this._messages},e.validate=function(n,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=n,u=i,w=s;if(typeof u=="function"&&(w=u,u={}),!this.rules||Object.keys(this.rules).length===0)return w&&w(null,o),Promise.resolve(o);function c(d){var m=[],f={};function y(h){if(Array.isArray(h)){var x;m=(x=m).concat.apply(x,h)}else m.push(h)}for(var l=0;l<d.length;l++)y(d[l]);m.length?(f=Fe(m),w(m,f)):w(null,o)}if(u.messages){var g=this.messages();g===Ae&&(g=xe()),Ke(g,u.messages),u.messages=g}else u.messages=this.messages();var b={},q=u.keys||Object.keys(this.rules);q.forEach(function(d){var m=a.rules[d],f=o[d];m.forEach(function(y){var l=y;typeof l.transform=="function"&&(o===n&&(o=W({},o)),f=o[d]=l.transform(f)),typeof l=="function"?l={validator:l}:l=W({},l),l.validator=a.getValidationMethod(l),l.validator&&(l.field=d,l.fullField=l.fullField||d,l.type=a.getType(l),b[d]=b[d]||[],b[d].push({rule:l,value:f,source:o,field:d}))})});var j={};return $n(b,u,function(d,m){var f=d.rule,y=(f.type==="object"||f.type==="array")&&(typeof f.fields=="object"||typeof f.defaultField=="object");y=y&&(f.required||!f.required&&d.value),f.field=d.field;function l(O,R){return W({},R,{fullField:f.fullField+"."+O,fullFields:f.fullFields?[].concat(f.fullFields,[O]):[O]})}function h(O){O===void 0&&(O=[]);var R=Array.isArray(O)?O:[O];!u.suppressWarning&&R.length&&r.warning("async-validator:",R),R.length&&f.message!==void 0&&(R=[].concat(f.message));var $=R.map(Ge(f,o));if(u.first&&$.length)return j[f.field]=1,m($);if(!y)m($);else{if(f.required&&!d.value)return f.message!==void 0?$=[].concat(f.message).map(Ge(f,o)):u.error&&($=[u.error(f,I(u.messages.required,f.field))]),m($);var B={};f.defaultField&&Object.keys(d.value).map(function(L){B[L]=f.defaultField}),B=W({},B,d.rule.fields);var G={};Object.keys(B).forEach(function(L){var M=B[L],fe=Array.isArray(M)?M:[M];G[L]=fe.map(l.bind(null,L))});var C=new r(G);C.messages(u.messages),d.rule.options&&(d.rule.options.messages=u.messages,d.rule.options.error=u.error),C.validate(d.value,d.rule.options||u,function(L){var M=[];$&&$.length&&M.push.apply(M,$),L&&L.length&&M.push.apply(M,L),m(M.length?M:null)})}}var x;if(f.asyncValidator)x=f.asyncValidator(f,d.value,h,d.source,u);else if(f.validator){try{x=f.validator(f,d.value,h,d.source,u)}catch(O){console.error==null||console.error(O),u.suppressValidatorError||setTimeout(function(){throw O},0),h(O.message)}x===!0?h():x===!1?h(typeof f.message=="function"?f.message(f.fullField||f.field):f.message||(f.fullField||f.field)+" fails"):x instanceof Array?h(x):x instanceof Error&&h(x.message)}x&&x.then&&x.then(function(){return h()},function(O){return h(O)})},function(d){c(d)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!J.hasOwnProperty(n.type))throw new Error(I("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?J.required:J[this.getType(n)]||void 0},r}();Q.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");J[e]=t};Q.warning=Tn;Q.messages=Ae;Q.validators=J;const ri=["","error","validating","success"],ni=Oe({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:ge([String,Array])},required:{type:Boolean,default:void 0},rules:{type:ge([Object,Array])},error:String,validateStatus:{type:String,values:ri},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:He}}),Je="ElLabelWrap";var ii=H({name:Je,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(r,{slots:e}){const t=ie(je,void 0),n=ie(ve);n||St(Je,"usage: <el-form-item><label-wrap /></el-form-item>");const i=qe("form"),s=V(),a=V(0),o=()=>{var c;if((c=s.value)!=null&&c.firstElementChild){const g=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(g))}else return 0},u=(c="update")=>{ot(()=>{e.default&&r.isAutoWidth&&(c==="update"?a.value=o():c==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},w=()=>u("update");return at(()=>{w()}),st(()=>{u("remove")}),_t(()=>w()),ne(a,(c,g)=>{r.updateAll&&(t==null||t.registerLabelWidth(c,g))}),Pt(T(()=>{var c,g;return(g=(c=s.value)==null?void 0:c.firstElementChild)!=null?g:null}),w),()=>{var c,g;if(!e)return null;const{isAutoWidth:b}=r;if(b){const q=t==null?void 0:t.autoLabelWidth,j=n==null?void 0:n.hasLabel,d={};if(j&&q&&q!=="auto"){const m=Math.max(0,Number.parseInt(q,10)-a.value),f=t.labelPosition==="left"?"marginRight":"marginLeft";m&&(d[f]=`${m}px`)}return ae("div",{ref:s,class:[i.be("item","label-wrap")],style:d},[(c=e.default)==null?void 0:c.call(e)])}else return ae($t,{ref:s},[(g=e.default)==null?void 0:g.call(e)])}}});const ai=["role","aria-labelledby"],si=H({name:"ElFormItem"}),oi=H({...si,props:ni,setup(r,{expose:e}){const t=r,n=It(),i=ie(je,void 0),s=ie(ve,void 0),a=Xe(void 0,{formItem:!1}),o=qe("form-item"),u=Mt().value,w=V([]),c=V(""),g=Rt(c,100),b=V(""),q=V();let j,d=!1;const m=T(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const p=Ie(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return p?{width:p}:{}}),f=T(()=>{if((i==null?void 0:i.labelPosition)==="top"||i!=null&&i.inline)return{};if(!t.label&&!t.labelWidth&&B)return{};const p=Ie(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return!t.label&&!n.label?{marginLeft:p}:{}}),y=T(()=>[o.b(),o.m(a.value),o.is("error",c.value==="error"),o.is("validating",c.value==="validating"),o.is("success",c.value==="success"),o.is("required",fe.value||t.required),o.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),(i==null?void 0:i.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[o.m("feedback")]:i==null?void 0:i.statusIcon}]),l=T(()=>Qe(t.inlineMessage)?t.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),h=T(()=>[o.e("error"),{[o.em("error","inline")]:l.value}]),x=T(()=>t.prop?me(t.prop)?t.prop:t.prop.join("."):""),O=T(()=>!!(t.label||n.label)),R=T(()=>t.for||(w.value.length===1?w.value[0]:void 0)),$=T(()=>!R.value&&O.value),B=!!s,G=T(()=>{const p=i==null?void 0:i.model;if(!(!p||!t.prop))return de(p,t.prop).value}),C=T(()=>{const{required:p}=t,F=[];t.rules&&F.push(...he(t.rules));const P=i==null?void 0:i.rules;if(P&&t.prop){const _=de(P,t.prop).value;_&&F.push(...he(_))}if(p!==void 0){const _=F.map((N,U)=>[N,U]).filter(([N])=>Object.keys(N).includes("required"));if(_.length>0)for(const[N,U]of _)N.required!==p&&(F[U]={...N,required:p});else F.push({required:p})}return F}),L=T(()=>C.value.length>0),M=p=>C.value.filter(P=>!P.trigger||!p?!0:Array.isArray(P.trigger)?P.trigger.includes(p):P.trigger===p).map(({trigger:P,..._})=>_),fe=T(()=>C.value.some(p=>p.required)),ht=T(()=>{var p;return g.value==="error"&&t.showMessage&&((p=i==null?void 0:i.showMessage)!=null?p:!0)}),Se=T(()=>`${t.label||""}${(i==null?void 0:i.labelSuffix)||""}`),D=p=>{c.value=p},bt=p=>{var F,P;const{errors:_,fields:N}=p;(!_||!N)&&console.error(p),D("error"),b.value=_?(P=(F=_==null?void 0:_[0])==null?void 0:F.message)!=null?P:`${t.prop} is required`:"",i==null||i.emit("validate",t.prop,!1,b.value)},wt=()=>{D("success"),i==null||i.emit("validate",t.prop,!0,"")},Ft=async p=>{const F=x.value;return new Q({[F]:p}).validate({[F]:G.value},{firstFields:!0}).then(()=>(wt(),!0)).catch(_=>(bt(_),Promise.reject(_)))},_e=async(p,F)=>{if(d||!t.prop)return!1;const P=it(F);if(!L.value)return F==null||F(!1),!1;const _=M(p);return _.length===0?(F==null||F(!0),!0):(D("validating"),Ft(_).then(()=>(F==null||F(!0),!0)).catch(N=>{const{fields:U}=N;return F==null||F(!1,U),P?!1:Promise.reject(U)}))},le=()=>{D(""),b.value="",d=!1},Pe=async()=>{const p=i==null?void 0:i.model;if(!p||!t.prop)return;const F=de(p,t.prop);d=!0,F.value=De(j),await ot(),le(),d=!1},xt=p=>{w.value.includes(p)||w.value.push(p)},At=p=>{w.value=w.value.filter(F=>F!==p)};ne(()=>t.error,p=>{b.value=p||"",D(p?"error":"")},{immediate:!0}),ne(()=>t.validateStatus,p=>D(p||""));const ue=et({...tt(t),$el:q,size:a,validateState:c,labelId:u,inputIds:w,isGroup:$,hasLabel:O,addInputId:xt,removeInputId:At,resetField:Pe,clearValidate:le,validate:_e});return ke(ve,ue),at(()=>{t.prop&&(i==null||i.addField(ue),j=De(G.value))}),st(()=>{i==null||i.removeField(ue)}),e({size:a,validateMessage:b,validateState:c,validate:_e,clearValidate:le,resetField:Pe}),(p,F)=>{var P;return ye(),rt("div",{ref_key:"formItemRef",ref:q,class:K(E(y)),role:E($)?"group":void 0,"aria-labelledby":E($)?E(u):void 0},[ae(E(ii),{"is-auto-width":E(m).width==="auto","update-all":((P=E(i))==null?void 0:P.labelWidth)==="auto"},{default:ce(()=>[E(O)?(ye(),Lt(Nt(E(R)?"label":"div"),{key:0,id:E(u),for:E(R),class:K(E(o).e("label")),style:Me(E(m))},{default:ce(()=>[ee(p.$slots,"label",{label:E(Se)},()=>[Bt(Re(E(Se)),1)])]),_:3},8,["id","for","class","style"])):Le("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),Ne("div",{class:K(E(o).e("content")),style:Me(E(f))},[ee(p.$slots,"default"),ae(Vt,{name:`${E(o).namespace.value}-zoom-in-top`},{default:ce(()=>[E(ht)?ee(p.$slots,"error",{key:0,error:b.value},()=>[Ne("div",{class:K(E(h))},Re(b.value),3)]):Le("v-if",!0)]),_:3},8,["name"])],6)],10,ai)}}});var vt=nt(oi,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const ci=Wt(An,{FormItem:vt}),pi=Ct(vt);export{pi as E,ci as a};
