import{bB as p,bG as O,cq as y,ce as x}from"./index-40c733bf.js";import{l as v,i as m,m as w,o as P,U as u}from"./_Uint8Array-a6e86528.js";var i=Object.create,b=function(){function e(){}return function(n){if(!p(n))return{};if(i)return i(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();const A=b;function G(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function M(e,n,r,t){var g=!r;r||(r={});for(var a=-1,h=n.length;++a<h;){var o=n[a],s=t?t(r[o],e[o],o,r,e):void 0;s===void 0&&(s=e[o]),g?O(r,o,s):y(r,o,s)}return r}function C(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var U=Object.prototype,B=U.hasOwnProperty;function I(e){if(!p(e))return C(e);var n=v(e),r=[];for(var t in e)t=="constructor"&&(n||!B.call(e,t))||r.push(t);return r}function N(e){return m(e)?w(e,!0):I(e)}var K=P(Object.getPrototypeOf,Object);const L=K;var d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,T=f&&f.exports===d,l=T?x.Buffer:void 0,c=l?l.allocUnsafe:void 0;function D(e,n){if(n)return e.slice();var r=e.length,t=c?c(r):new e.constructor(r);return e.copy(t),t}function E(e){var n=new e.constructor(e.byteLength);return new u(n).set(new u(e)),n}function F(e,n){var r=n?E(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function H(e){return typeof e.constructor=="function"&&!v(e)?A(L(e)):{}}export{G as a,D as b,M as c,F as d,E as e,L as g,H as i,N as k};
