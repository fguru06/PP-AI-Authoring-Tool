(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Eu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const nt={},Fi=[],zn=()=>{},rg=()=>!1,al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Iu=t=>t.startsWith("onUpdate:"),kt=Object.assign,Cu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},R1=Object.prototype.hasOwnProperty,Xe=(t,e)=>R1.call(t,e),Oe=Array.isArray,Bi=t=>Eo(t)==="[object Map]",ss=t=>Eo(t)==="[object Set]",_h=t=>Eo(t)==="[object Date]",Ve=t=>typeof t=="function",ft=t=>typeof t=="string",Tn=t=>typeof t=="symbol",et=t=>t!==null&&typeof t=="object",ig=t=>(et(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),sg=Object.prototype.toString,Eo=t=>sg.call(t),P1=t=>Eo(t).slice(8,-1),og=t=>Eo(t)==="[object Object]",ll=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vs=Eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},O1=/-\w/g,gn=cl(t=>t.replace(O1,e=>e.slice(1).toUpperCase())),N1=/\B([A-Z])/g,Qr=cl(t=>t.replace(N1,"-$1").toLowerCase()),ul=cl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xl=cl(t=>t?`on${ul(t)}`:""),Br=(t,e)=>!Object.is(t,e),ma=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ag=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},dl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},D1=t=>{const e=ft(t)?Number(t):NaN;return isNaN(e)?t:e};let bh;const hl=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Le(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ft(r)?$1(r):Le(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(ft(t)||et(t))return t}const M1=/;(?![^(]*\))/g,L1=/:([^]+)/,V1=/\/\*[^]*?\*\//g;function $1(t){const e={};return t.replace(V1,"").split(M1).forEach(n=>{if(n){const r=n.split(L1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Me(t){let e="";if(ft(t))e=t;else if(Oe(t))for(let n=0;n<t.length;n++){const r=Me(t[n]);r&&(e+=r+" ")}else if(et(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const F1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B1=Eu(F1);function lg(t){return!!t||t===""}function U1(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=os(t[r],e[r]);return n}function os(t,e){if(t===e)return!0;let n=_h(t),r=_h(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tn(t),r=Tn(e),n||r)return t===e;if(n=Oe(t),r=Oe(e),n||r)return n&&r?U1(t,e):!1;if(n=et(t),r=et(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!os(t[o],e[o]))return!1}}return String(t)===String(e)}function xu(t,e){return t.findIndex(n=>os(n,e))}const cg=t=>!!(t&&t.__v_isRef===!0),fe=t=>ft(t)?t:t==null?"":Oe(t)||et(t)&&(t.toString===sg||!Ve(t.toString))?cg(t)?fe(t.value):JSON.stringify(t,ug,2):String(t),ug=(t,e)=>cg(e)?ug(t,e.value):Bi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Zl(r,s)+" =>"]=i,n),{})}:ss(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Zl(n))}:Tn(e)?Zl(e):et(e)&&!Oe(e)&&!og(e)?String(e):e,Zl=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class dg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){++this._on===1&&(this.prevScope=Ut,Ut=this)}off(){this._on>0&&--this._on===0&&(Ut=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function hg(t){return new dg(t)}function fg(){return Ut}function z1(t,e=!1){Ut&&Ut.cleanups.push(t)}let rt;const ec=new WeakSet;class pg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&Ut.active&&Ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ec.has(this)&&(ec.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wh(this),vg(this);const e=rt,n=xn;rt=this,xn=!0;try{return this.fn()}finally{yg(this),rt=e,xn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Su(e);this.deps=this.depsTail=void 0,wh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ec.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pc(this)&&this.run()}get dirty(){return Pc(this)}}let gg=0,$s,Fs;function mg(t,e=!1){if(t.flags|=8,e){t.next=Fs,Fs=t;return}t.next=$s,$s=t}function ku(){gg++}function Tu(){if(--gg>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$s;){let e=$s;for($s=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function vg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yg(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Su(r),j1(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function Pc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_g(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _g(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===to)||(t.globalVersion=to,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Pc(t))))return;t.flags|=2;const e=t.dep,n=rt,r=xn;rt=t,xn=!0;try{vg(t);const i=t.fn(t._value);(e.version===0||Br(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{rt=n,xn=r,yg(t),t.flags&=-3}}function Su(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Su(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function j1(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let xn=!0;const bg=[];function dr(){bg.push(xn),xn=!1}function hr(){const t=bg.pop();xn=t===void 0?!0:t}function wh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=rt;rt=void 0;try{e()}finally{rt=n}}}let to=0;class q1{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!rt||!xn||rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==rt)n=this.activeLink=new q1(rt,this),rt.deps?(n.prevDep=rt.depsTail,rt.depsTail.nextDep=n,rt.depsTail=n):rt.deps=rt.depsTail=n,wg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=rt.depsTail,n.nextDep=void 0,rt.depsTail.nextDep=n,rt.depsTail=n,rt.deps===n&&(rt.deps=r)}return n}trigger(e){this.version++,to++,this.notify(e)}notify(e){ku();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tu()}}}function wg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)wg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ra=new WeakMap,gi=Symbol(""),Oc=Symbol(""),no=Symbol("");function jt(t,e,n){if(xn&&rt){let r=Ra.get(t);r||Ra.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new Au),i.map=r,i.key=n),i.track()}}function tr(t,e,n,r,i,s){const o=Ra.get(t);if(!o){to++;return}const a=l=>{l&&l.trigger()};if(ku(),e==="clear")o.forEach(a);else{const l=Oe(t),h=l&&ll(n);if(l&&n==="length"){const p=Number(r);o.forEach((g,v)=>{(v==="length"||v===no||!Tn(v)&&v>=p)&&a(g)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),h&&a(o.get(no)),e){case"add":l?h&&a(o.get("length")):(a(o.get(gi)),Bi(t)&&a(o.get(Oc)));break;case"delete":l||(a(o.get(gi)),Bi(t)&&a(o.get(Oc)));break;case"set":Bi(t)&&a(o.get(gi));break}}Tu()}function H1(t,e){const n=Ra.get(t);return n&&n.get(e)}function Ni(t){const e=He(t);return e===t?e:(jt(e,"iterate",no),ln(t)?e:e.map(Sn))}function fl(t){return jt(t=He(t),"iterate",no),t}function Nr(t,e){return fr(t)?Qi(or(t)?Sn(e):e):Sn(e)}const W1={__proto__:null,[Symbol.iterator](){return tc(this,Symbol.iterator,t=>Nr(this,t))},concat(...t){return Ni(this).concat(...t.map(e=>Oe(e)?Ni(e):e))},entries(){return tc(this,"entries",t=>(t[1]=Nr(this,t[1]),t))},every(t,e){return Jn(this,"every",t,e,void 0,arguments)},filter(t,e){return Jn(this,"filter",t,e,n=>n.map(r=>Nr(this,r)),arguments)},find(t,e){return Jn(this,"find",t,e,n=>Nr(this,n),arguments)},findIndex(t,e){return Jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jn(this,"findLast",t,e,n=>Nr(this,n),arguments)},findLastIndex(t,e){return Jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return nc(this,"includes",t)},indexOf(...t){return nc(this,"indexOf",t)},join(t){return Ni(this).join(t)},lastIndexOf(...t){return nc(this,"lastIndexOf",t)},map(t,e){return Jn(this,"map",t,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...t){return xs(this,"push",t)},reduce(t,...e){return Eh(this,"reduce",t,e)},reduceRight(t,...e){return Eh(this,"reduceRight",t,e)},shift(){return xs(this,"shift")},some(t,e){return Jn(this,"some",t,e,void 0,arguments)},splice(...t){return xs(this,"splice",t)},toReversed(){return Ni(this).toReversed()},toSorted(t){return Ni(this).toSorted(t)},toSpliced(...t){return Ni(this).toSpliced(...t)},unshift(...t){return xs(this,"unshift",t)},values(){return tc(this,"values",t=>Nr(this,t))}};function tc(t,e,n){const r=fl(t),i=r[e]();return r!==t&&!ln(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const G1=Array.prototype;function Jn(t,e,n,r,i,s){const o=fl(t),a=o!==t&&!ln(t),l=o[e];if(l!==G1[e]){const g=l.apply(t,s);return a?Sn(g):g}let h=n;o!==t&&(a?h=function(g,v){return n.call(this,Nr(t,g),v,t)}:n.length>2&&(h=function(g,v){return n.call(this,g,v,t)}));const p=l.call(o,h,r);return a&&i?i(p):p}function Eh(t,e,n,r){const i=fl(t);let s=n;return i!==t&&(ln(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Nr(t,a),l,t)}),i[e](s,...r)}function nc(t,e,n){const r=He(t);jt(r,"iterate",no);const i=r[e](...n);return(i===-1||i===!1)&&pl(n[0])?(n[0]=He(n[0]),r[e](...n)):i}function xs(t,e,n=[]){dr(),ku();const r=He(t)[e].apply(t,n);return Tu(),hr(),r}const K1=Eu("__proto__,__v_isRef,__isVue"),Eg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn));function J1(t){Tn(t)||(t=String(t));const e=He(this);return jt(e,"has",t),e.hasOwnProperty(t)}class Ig{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?s_:Tg:s?kg:xg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Oe(e);if(!i){let l;if(o&&(l=W1[n]))return l;if(n==="hasOwnProperty")return J1}const a=Reflect.get(e,n,vt(e)?e:r);if((Tn(n)?Eg.has(n):K1(n))||(i||jt(e,"get",n),s))return a;if(vt(a)){const l=o&&ll(n)?a:a.value;return i&&et(l)?Dc(l):l}return et(a)?i?Dc(a):Io(a):a}}class Cg extends Ig{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];const o=Oe(e)&&ll(n);if(!this._isShallow){const h=fr(s);if(!ln(r)&&!fr(r)&&(s=He(s),r=He(r)),!o&&vt(s)&&!vt(r))return h||(s.value=r),!0}const a=o?Number(n)<e.length:Xe(e,n),l=Reflect.set(e,n,r,vt(e)?e:i);return e===He(i)&&(a?Br(r,s)&&tr(e,"set",n,r):tr(e,"add",n,r)),l}deleteProperty(e,n){const r=Xe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&tr(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!Eg.has(n))&&jt(e,"has",n),r}ownKeys(e){return jt(e,"iterate",Oe(e)?"length":gi),Reflect.ownKeys(e)}}class Q1 extends Ig{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Y1=new Cg,X1=new Q1,Z1=new Cg(!0);const Nc=t=>t,ea=t=>Reflect.getPrototypeOf(t);function e_(t,e,n){return function(...r){const i=this.__v_raw,s=He(i),o=Bi(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=i[t](...r),p=n?Nc:e?Qi:Sn;return!e&&jt(s,"iterate",l?Oc:gi),kt(Object.create(h),{next(){const{value:g,done:v}=h.next();return v?{value:g,done:v}:{value:a?[p(g[0]),p(g[1])]:p(g),done:v}}})}}function ta(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function t_(t,e){const n={get(i){const s=this.__v_raw,o=He(s),a=He(i);t||(Br(i,a)&&jt(o,"get",i),jt(o,"get",a));const{has:l}=ea(o),h=e?Nc:t?Qi:Sn;if(l.call(o,i))return h(s.get(i));if(l.call(o,a))return h(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&jt(He(i),"iterate",gi),i.size},has(i){const s=this.__v_raw,o=He(s),a=He(i);return t||(Br(i,a)&&jt(o,"has",i),jt(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=He(a),h=e?Nc:t?Qi:Sn;return!t&&jt(l,"iterate",gi),a.forEach((p,g)=>i.call(s,h(p),h(g),o))}};return kt(n,t?{add:ta("add"),set:ta("set"),delete:ta("delete"),clear:ta("clear")}:{add(i){!e&&!ln(i)&&!fr(i)&&(i=He(i));const s=He(this);return ea(s).has.call(s,i)||(s.add(i),tr(s,"add",i,i)),this},set(i,s){!e&&!ln(s)&&!fr(s)&&(s=He(s));const o=He(this),{has:a,get:l}=ea(o);let h=a.call(o,i);h||(i=He(i),h=a.call(o,i));const p=l.call(o,i);return o.set(i,s),h?Br(s,p)&&tr(o,"set",i,s):tr(o,"add",i,s),this},delete(i){const s=He(this),{has:o,get:a}=ea(s);let l=o.call(s,i);l||(i=He(i),l=o.call(s,i)),a&&a.call(s,i);const h=s.delete(i);return l&&tr(s,"delete",i,void 0),h},clear(){const i=He(this),s=i.size!==0,o=i.clear();return s&&tr(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=e_(i,t,e)}),n}function Ru(t,e){const n=t_(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Xe(n,i)&&i in r?n:r,i,s)}const n_={get:Ru(!1,!1)},r_={get:Ru(!1,!0)},i_={get:Ru(!0,!1)};const xg=new WeakMap,kg=new WeakMap,Tg=new WeakMap,s_=new WeakMap;function o_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(t){return t.__v_skip||!Object.isExtensible(t)?0:o_(P1(t))}function Io(t){return fr(t)?t:Pu(t,!1,Y1,n_,xg)}function Sg(t){return Pu(t,!1,Z1,r_,kg)}function Dc(t){return Pu(t,!0,X1,i_,Tg)}function Pu(t,e,n,r,i){if(!et(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=a_(t);if(s===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function or(t){return fr(t)?or(t.__v_raw):!!(t&&t.__v_isReactive)}function fr(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function pl(t){return t?!!t.__v_raw:!1}function He(t){const e=t&&t.__v_raw;return e?He(e):t}function Ou(t){return!Xe(t,"__v_skip")&&Object.isExtensible(t)&&ag(t,"__v_skip",!0),t}const Sn=t=>et(t)?Io(t):t,Qi=t=>et(t)?Dc(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function pe(t){return Ag(t,!1)}function l_(t){return Ag(t,!0)}function Ag(t,e){return vt(t)?t:new c_(t,e)}class c_{constructor(e,n){this.dep=new Au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:He(e),this._value=n?e:Sn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ln(e)||fr(e);e=r?e:He(e),Br(e,n)&&(this._rawValue=e,this._value=r?e:Sn(e),this.dep.trigger())}}function Ee(t){return vt(t)?t.value:t}const u_={get:(t,e,n)=>e==="__v_raw"?t:Ee(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return vt(i)&&!vt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Rg(t){return or(t)?t:new Proxy(t,u_)}function d_(t){const e=Oe(t)?new Array(t.length):{};for(const n in t)e[n]=f_(t,n);return e}class h_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=He(e);let i=!0,s=e;if(!Oe(e)||!ll(String(n)))do i=!pl(s)||ln(s);while(i&&(s=s.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=Ee(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&vt(this._raw[this._key])){const n=this._object[this._key];if(vt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return H1(this._raw,this._key)}}function f_(t,e,n){return new h_(t,e,n)}class p_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return mg(this,!0),!0}get value(){const e=this.dep.track();return _g(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function g_(t,e,n=!1){let r,i;return Ve(t)?r=t:(r=t.get,i=t.set),new p_(r,i,n)}const na={},Pa=new WeakMap;let li;function m_(t,e=!1,n=li){if(n){let r=Pa.get(n);r||Pa.set(n,r=[]),r.push(t)}}function v_(t,e,n=nt){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,h=M=>i?M:ln(M)||i===!1||i===0?nr(M,1):nr(M);let p,g,v,m,_=!1,u=!1;if(vt(t)?(g=()=>t.value,_=ln(t)):or(t)?(g=()=>h(t),_=!0):Oe(t)?(u=!0,_=t.some(M=>or(M)||ln(M)),g=()=>t.map(M=>{if(vt(M))return M.value;if(or(M))return h(M);if(Ve(M))return l?l(M,2):M()})):Ve(t)?e?g=l?()=>l(t,2):t:g=()=>{if(v){dr();try{v()}finally{hr()}}const M=li;li=p;try{return l?l(t,3,[m]):t(m)}finally{li=M}}:g=zn,e&&i){const M=g,F=i===!0?1/0:i;g=()=>nr(M(),F)}const C=fg(),x=()=>{p.stop(),C&&C.active&&Cu(C.effects,p)};if(s&&e){const M=e;e=(...F)=>{M(...F),x()}}let A=u?new Array(t.length).fill(na):na;const V=M=>{if(!(!(p.flags&1)||!p.dirty&&!M))if(e){const F=p.run();if(i||_||(u?F.some((L,I)=>Br(L,A[I])):Br(F,A))){v&&v();const L=li;li=p;try{const I=[F,A===na?void 0:u&&A[0]===na?[]:A,m];A=F,l?l(e,3,I):e(...I)}finally{li=L}}}else p.run()};return a&&a(V),p=new pg(g),p.scheduler=o?()=>o(V,!1):V,m=M=>m_(M,!1,p),v=p.onStop=()=>{const M=Pa.get(p);if(M){if(l)l(M,4);else for(const F of M)F();Pa.delete(p)}},e?r?V(!0):A=p.run():o?o(V.bind(null,!0),!0):p.run(),x.pause=p.pause.bind(p),x.resume=p.resume.bind(p),x.stop=x,x}function nr(t,e=1/0,n){if(e<=0||!et(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,vt(t))nr(t.value,e,n);else if(Oe(t))for(let r=0;r<t.length;r++)nr(t[r],e,n);else if(ss(t)||Bi(t))t.forEach(r=>{nr(r,e,n)});else if(og(t)){for(const r in t)nr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&nr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Co(t,e,n,r){try{return r?t(...r):t()}catch(i){gl(i,e,n)}}function An(t,e,n,r){if(Ve(t)){const i=Co(t,e,n,r);return i&&ig(i)&&i.catch(s=>{gl(s,e,n)}),i}if(Oe(t)){const i=[];for(let s=0;s<t.length;s++)i.push(An(t[s],e,n,r));return i}}function gl(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||nt;if(e){let a=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const p=a.ec;if(p){for(let g=0;g<p.length;g++)if(p[g](t,l,h)===!1)return}a=a.parent}if(s){dr(),Co(s,null,10,[t,l,h]),hr();return}}y_(t,n,i,r,o)}function y_(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const Xt=[];let $n=-1;const Ui=[];let Dr=null,Mi=0;const Pg=Promise.resolve();let Oa=null;function xo(t){const e=Oa||Pg;return t?e.then(this?t.bind(this):t):e}function __(t){let e=$n+1,n=Xt.length;for(;e<n;){const r=e+n>>>1,i=Xt[r],s=ro(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function Nu(t){if(!(t.flags&1)){const e=ro(t),n=Xt[Xt.length-1];!n||!(t.flags&2)&&e>=ro(n)?Xt.push(t):Xt.splice(__(e),0,t),t.flags|=1,Og()}}function Og(){Oa||(Oa=Pg.then(Dg))}function b_(t){Oe(t)?Ui.push(...t):Dr&&t.id===-1?Dr.splice(Mi+1,0,t):t.flags&1||(Ui.push(t),t.flags|=1),Og()}function Ih(t,e,n=$n+1){for(;n<Xt.length;n++){const r=Xt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Xt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ng(t){if(Ui.length){const e=[...new Set(Ui)].sort((n,r)=>ro(n)-ro(r));if(Ui.length=0,Dr){Dr.push(...e);return}for(Dr=e,Mi=0;Mi<Dr.length;Mi++){const n=Dr[Mi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Dr=null,Mi=0}}const ro=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Dg(t){try{for($n=0;$n<Xt.length;$n++){const e=Xt[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Co(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<Xt.length;$n++){const e=Xt[$n];e&&(e.flags&=-2)}$n=-1,Xt.length=0,Ng(),Oa=null,(Xt.length||Ui.length)&&Dg()}}let Lt=null,Mg=null;function Na(t){const e=Lt;return Lt=t,Mg=t&&t.type.__scopeId||null,e}function Et(t,e=Lt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&La(-1);const s=Na(e);let o;try{o=t(...i)}finally{Na(s),r._d&&La(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ye(t,e){if(Lt===null)return t;const n=bl(Lt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=nt]=e[i];s&&(Ve(s)&&(s={mounted:s,updated:s}),s.deep&&nr(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ii(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(dr(),An(l,n,8,[t.el,a,t,e]),hr())}}function Bs(t,e){if(Wt){let n=Wt.provides;const r=Wt.parent&&Wt.parent.provides;r===n&&(n=Wt.provides=Object.create(r)),n[t]=e}}function cn(t,e,n=!1){const r=Fu();if(r||mi){let i=mi?mi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ve(e)?e.call(r&&r.proxy):e}}function w_(){return!!(Fu()||mi)}const E_=Symbol.for("v-scx"),I_=()=>cn(E_);function Kt(t,e,n){return Lg(t,e,n)}function Lg(t,e,n=nt){const{immediate:r,deep:i,flush:s,once:o}=n,a=kt({},n),l=e&&r||!e&&s!=="post";let h;if(ao){if(s==="sync"){const m=I_();h=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=zn,m.resume=zn,m.pause=zn,m}}const p=Wt;a.call=(m,_,u)=>An(m,p,_,u);let g=!1;s==="post"?a.scheduler=m=>{Bt(m,p&&p.suspense)}:s!=="sync"&&(g=!0,a.scheduler=(m,_)=>{_?m():Nu(m)}),a.augmentJob=m=>{e&&(m.flags|=4),g&&(m.flags|=2,p&&(m.id=p.uid,m.i=p))};const v=v_(t,e,a);return ao&&(h?h.push(v):l&&v()),v}function C_(t,e,n){const r=this.proxy,i=ft(t)?t.includes(".")?Vg(r,t):()=>r[t]:t.bind(r,r);let s;Ve(e)?s=e:(s=e.handler,n=e);const o=So(this),a=Lg(i,s.bind(r),n);return o(),a}function Vg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const $g=Symbol("_vte"),Fg=t=>t.__isTeleport,Us=t=>t&&(t.disabled||t.disabled===""),Ch=t=>t&&(t.defer||t.defer===""),xh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,kh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Mc=(t,e)=>{const n=t&&t.to;return ft(n)?e?e(n):null:n},Bg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,h){const{mc:p,pc:g,pbc:v,o:{insert:m,querySelector:_,createText:u,createComment:C}}=h,x=Us(e.props);let{shapeFlag:A,children:V,dynamicChildren:M}=e;if(t==null){const F=e.el=u(""),L=e.anchor=u("");m(F,n,r),m(L,n,r);const I=(w,P)=>{A&16&&p(V,w,P,i,s,o,a,l)},b=()=>{const w=e.target=Mc(e.props,_),P=Lc(w,e,u,m);w&&(o!=="svg"&&xh(w)?o="svg":o!=="mathml"&&kh(w)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(w),x||(I(w,P),va(e,!1)))};x&&(I(n,L),va(e,!0)),Ch(e.props)?(e.el.__isMounted=!1,Bt(()=>{b(),delete e.el.__isMounted},s)):b()}else{if(Ch(e.props)&&t.el.__isMounted===!1){Bt(()=>{Bg.process(t,e,n,r,i,s,o,a,l,h)},s);return}e.el=t.el,e.targetStart=t.targetStart;const F=e.anchor=t.anchor,L=e.target=t.target,I=e.targetAnchor=t.targetAnchor,b=Us(t.props),w=b?n:L,P=b?F:I;if(o==="svg"||xh(L)?o="svg":(o==="mathml"||kh(L))&&(o="mathml"),M?(v(t.dynamicChildren,M,w,i,s,o,a),Vu(t,e,!0)):l||g(t,e,w,P,i,s,o,a,!1),x)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ra(e,n,F,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const D=e.target=Mc(e.props,_);D&&ra(e,D,null,h,0)}else b&&ra(e,L,I,h,1);va(e,x)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:h,targetAnchor:p,target:g,props:v}=t;if(g&&(i(h),i(p)),s&&i(l),o&16){const m=s||!Us(v);for(let _=0;_<a.length;_++){const u=a[_];r(u,e,n,m,!!u.dynamicChildren)}}},move:ra,hydrate:x_};function ra(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:h,props:p}=t,g=s===2;if(g&&r(o,e,n),(!g||Us(p))&&l&16)for(let v=0;v<h.length;v++)i(h[v],e,n,2);g&&r(a,e,n)}function x_(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:h,createText:p}},g){function v(C,x){let A=x;for(;A;){if(A&&A.nodeType===8){if(A.data==="teleport start anchor")e.targetStart=A;else if(A.data==="teleport anchor"){e.targetAnchor=A,C._lpa=e.targetAnchor&&o(e.targetAnchor);break}}A=o(A)}}function m(C,x){x.anchor=g(o(C),x,a(C),n,r,i,s)}const _=e.target=Mc(e.props,l),u=Us(e.props);if(_){const C=_._lpa||_.firstChild;e.shapeFlag&16&&(u?(m(t,e),v(_,C),e.targetAnchor||Lc(_,e,p,h,a(t)===_?t:null)):(e.anchor=o(t),v(_,C),e.targetAnchor||Lc(_,e,p,h),g(C&&o(C),e,_,n,r,i,s))),va(e,u)}else u&&e.shapeFlag&16&&(m(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Du=Bg;function va(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Lc(t,e,n,r,i=null){const s=e.targetStart=n(""),o=e.targetAnchor=n("");return s[$g]=o,t&&(r(s,t,i),r(o,t,i)),o}const Fn=Symbol("_leaveCb"),ks=Symbol("_enterCb");function k_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ko(()=>{t.isMounted=!0}),To(()=>{t.isUnmounting=!0}),t}const fn=[Function,Array],Ug={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fn,onEnter:fn,onAfterEnter:fn,onEnterCancelled:fn,onBeforeLeave:fn,onLeave:fn,onAfterLeave:fn,onLeaveCancelled:fn,onBeforeAppear:fn,onAppear:fn,onAfterAppear:fn,onAppearCancelled:fn},zg=t=>{const e=t.subTree;return e.component?zg(e.component):e},T_={name:"BaseTransition",props:Ug,setup(t,{slots:e}){const n=Fu(),r=k_();return()=>{const i=e.default&&Hg(e.default(),!0);if(!i||!i.length)return;const s=jg(i),o=He(t),{mode:a}=o;if(r.isLeaving)return rc(s);const l=Th(s);if(!l)return rc(s);let h=Vc(l,o,r,n,g=>h=g);l.type!==Ht&&io(l,h);let p=n.subTree&&Th(n.subTree);if(p&&p.type!==Ht&&!ui(p,l)&&zg(n).type!==Ht){let g=Vc(p,o,r,n);if(io(p,g),a==="out-in"&&l.type!==Ht)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,p=void 0},rc(s);a==="in-out"&&l.type!==Ht?g.delayLeave=(v,m,_)=>{const u=qg(r,p);u[String(p.key)]=p,v[Fn]=()=>{m(),v[Fn]=void 0,delete h.delayedLeave,p=void 0},h.delayedLeave=()=>{_(),delete h.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return s}}};function jg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ht){e=n;break}}return e}const S_=T_;function qg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Vc(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:p,onEnterCancelled:g,onBeforeLeave:v,onLeave:m,onAfterLeave:_,onLeaveCancelled:u,onBeforeAppear:C,onAppear:x,onAfterAppear:A,onAppearCancelled:V}=e,M=String(t.key),F=qg(n,t),L=(w,P)=>{w&&An(w,r,9,P)},I=(w,P)=>{const D=P[1];L(w,P),Oe(w)?w.every(E=>E.length<=1)&&D():w.length<=1&&D()},b={mode:o,persisted:a,beforeEnter(w){let P=l;if(!n.isMounted)if(s)P=C||l;else return;w[Fn]&&w[Fn](!0);const D=F[M];D&&ui(t,D)&&D.el[Fn]&&D.el[Fn](),L(P,[w])},enter(w){if(F[M]===t)return;let P=h,D=p,E=g;if(!n.isMounted)if(s)P=x||h,D=A||p,E=V||g;else return;let R=!1;w[ks]=J=>{R||(R=!0,J?L(E,[w]):L(D,[w]),b.delayedLeave&&b.delayedLeave(),w[ks]=void 0)};const S=w[ks].bind(null,!1);P?I(P,[w,S]):S()},leave(w,P){const D=String(t.key);if(w[ks]&&w[ks](!0),n.isUnmounting)return P();L(v,[w]);let E=!1;w[Fn]=S=>{E||(E=!0,P(),S?L(u,[w]):L(_,[w]),w[Fn]=void 0,F[D]===t&&delete F[D])};const R=w[Fn].bind(null,!1);F[D]=t,m?I(m,[w,R]):R()},clone(w){const P=Vc(w,e,n,r,i);return i&&i(P),P}};return b}function rc(t){if(ml(t))return t=jr(t),t.children=null,t}function Th(t){if(!ml(t))return Fg(t.type)&&t.children?jg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ve(n.default))return n.default()}}function io(t,e){t.shapeFlag&6&&t.component?(t.transition=e,io(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hg(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Pe?(o.patchFlag&128&&i++,r=r.concat(Hg(o.children,e,a))):(e||o.type!==Ht)&&r.push(a!=null?jr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Wg(t,e){return Ve(t)?kt({name:t.name},e,{setup:t}):t}function Gg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Sh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Da=new WeakMap;function zs(t,e,n,r,i=!1){if(Oe(t)){t.forEach((u,C)=>zs(u,e&&(Oe(e)?e[C]:e),n,r,i));return}if(zi(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zs(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?bl(r.component):r.el,o=i?null:s,{i:a,r:l}=t,h=e&&e.r,p=a.refs===nt?a.refs={}:a.refs,g=a.setupState,v=He(g),m=g===nt?rg:u=>Sh(p,u)?!1:Xe(v,u),_=(u,C)=>!(C&&Sh(p,C));if(h!=null&&h!==l){if(Ah(e),ft(h))p[h]=null,m(h)&&(g[h]=null);else if(vt(h)){const u=e;_(h,u.k)&&(h.value=null),u.k&&(p[u.k]=null)}}if(Ve(l))Co(l,a,12,[o,p]);else{const u=ft(l),C=vt(l);if(u||C){const x=()=>{if(t.f){const A=u?m(l)?g[l]:p[l]:_()||!t.k?l.value:p[t.k];if(i)Oe(A)&&Cu(A,s);else if(Oe(A))A.includes(s)||A.push(s);else if(u)p[l]=[s],m(l)&&(g[l]=p[l]);else{const V=[s];_(l,t.k)&&(l.value=V),t.k&&(p[t.k]=V)}}else u?(p[l]=o,m(l)&&(g[l]=o)):C&&(_(l,t.k)&&(l.value=o),t.k&&(p[t.k]=o))};if(o){const A=()=>{x(),Da.delete(t)};A.id=-1,Da.set(t,A),Bt(A,n)}else Ah(t),x()}}}function Ah(t){const e=Da.get(t);e&&(e.flags|=8,Da.delete(t))}hl().requestIdleCallback;hl().cancelIdleCallback;const zi=t=>!!t.type.__asyncLoader,ml=t=>t.type.__isKeepAlive;function A_(t,e){Kg(t,"a",e)}function R_(t,e){Kg(t,"da",e)}function Kg(t,e,n=Wt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(vl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)ml(i.parent.vnode)&&P_(r,e,n,i),i=i.parent}}function P_(t,e,n,r){const i=vl(e,t,r,!0);Jg(()=>{Cu(r[e],i)},n)}function vl(t,e,n=Wt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{dr();const a=So(n),l=An(e,n,t,o);return a(),hr(),l});return r?i.unshift(s):i.push(s),s}}const vr=t=>(e,n=Wt)=>{(!ao||t==="sp")&&vl(t,(...r)=>e(...r),n)},O_=vr("bm"),ko=vr("m"),N_=vr("bu"),D_=vr("u"),To=vr("bum"),Jg=vr("um"),M_=vr("sp"),L_=vr("rtg"),V_=vr("rtc");function $_(t,e=Wt){vl("ec",t,e)}const F_="components",Qg=Symbol.for("v-ndc");function Yg(t){return ft(t)?B_(F_,t,!1)||t:t||Qg}function B_(t,e,n=!0,r=!1){const i=Lt||Wt;if(i){const s=i.type;{const a=Cb(s,!1);if(a&&(a===e||a===gn(e)||a===ul(gn(e))))return s}const o=Rh(i[t]||s[t],e)||Rh(i.appContext[t],e);return!o&&r?s:o}}function Rh(t,e){return t&&(t[e]||t[gn(e)]||t[ul(gn(e))])}function Ke(t,e,n,r){let i;const s=n,o=Oe(t);if(o||ft(t)){const a=o&&or(t);let l=!1,h=!1;a&&(l=!ln(t),h=fr(t),t=fl(t)),i=new Array(t.length);for(let p=0,g=t.length;p<g;p++)i[p]=e(l?h?Qi(Sn(t[p])):Sn(t[p]):t[p],p,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s)}else if(et(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,h=a.length;l<h;l++){const p=a[l];i[l]=e(t[p],p,l,s)}}else i=[];return i}function $c(t,e,n={},r,i){if(Lt.ce||Lt.parent&&zi(Lt.parent)&&Lt.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),K(),_t(Pe,null,[ot("slot",n,r)],h?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),K();const o=s&&Xg(s(n)),a=n.key||o&&o.key,l=_t(Pe,{key:(a&&!Tn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Xg(t){return t.some(e=>oo(e)?!(e.type===Ht||e.type===Pe&&!Xg(e.children)):!0)?t:null}const Fc=t=>t?vm(t)?bl(t):Fc(t.parent):null,js=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fc(t.parent),$root:t=>Fc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>em(t),$forceUpdate:t=>t.f||(t.f=()=>{Nu(t.update)}),$nextTick:t=>t.n||(t.n=xo.bind(t.proxy)),$watch:t=>C_.bind(t)}),ic=(t,e)=>t!==nt&&!t.__isScriptSetup&&Xe(t,e),U_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(ic(r,e))return o[e]=1,r[e];if(i!==nt&&Xe(i,e))return o[e]=2,i[e];if(Xe(s,e))return o[e]=3,s[e];if(n!==nt&&Xe(n,e))return o[e]=4,n[e];Bc&&(o[e]=0)}}const h=js[e];let p,g;if(h)return e==="$attrs"&&jt(t.attrs,"get",""),h(t);if((p=a.__cssModules)&&(p=p[e]))return p;if(n!==nt&&Xe(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Xe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return ic(i,e)?(i[e]=n,!0):r!==nt&&Xe(r,e)?(r[e]=n,!0):Xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(n[a]||t!==nt&&a[0]!=="$"&&Xe(t,a)||ic(e,a)||Xe(s,a)||Xe(r,a)||Xe(js,a)||Xe(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ph(t){return Oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bc=!0;function z_(t){const e=em(t),n=t.proxy,r=t.ctx;Bc=!1,e.beforeCreate&&Oh(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:h,created:p,beforeMount:g,mounted:v,beforeUpdate:m,updated:_,activated:u,deactivated:C,beforeDestroy:x,beforeUnmount:A,destroyed:V,unmounted:M,render:F,renderTracked:L,renderTriggered:I,errorCaptured:b,serverPrefetch:w,expose:P,inheritAttrs:D,components:E,directives:R,filters:S}=e;if(h&&j_(h,r,null),o)for(const z in o){const de=o[z];Ve(de)&&(r[z]=de.bind(n))}if(i){const z=i.call(n,n);et(z)&&(t.data=Io(z))}if(Bc=!0,s)for(const z in s){const de=s[z],se=Ve(de)?de.bind(n,n):Ve(de.get)?de.get.bind(n,n):zn,Ie=!Ve(de)&&Ve(de.set)?de.set.bind(n):zn,te=xe({get:se,set:Ie});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>te.value,set:Z=>te.value=Z})}if(a)for(const z in a)Zg(a[z],r,n,z);if(l){const z=Ve(l)?l.call(n):l;Reflect.ownKeys(z).forEach(de=>{Bs(de,z[de])})}p&&Oh(p,t,"c");function ae(z,de){Oe(de)?de.forEach(se=>z(se.bind(n))):de&&z(de.bind(n))}if(ae(O_,g),ae(ko,v),ae(N_,m),ae(D_,_),ae(A_,u),ae(R_,C),ae($_,b),ae(V_,L),ae(L_,I),ae(To,A),ae(Jg,M),ae(M_,w),Oe(P))if(P.length){const z=t.exposed||(t.exposed={});P.forEach(de=>{Object.defineProperty(z,de,{get:()=>n[de],set:se=>n[de]=se,enumerable:!0})})}else t.exposed||(t.exposed={});F&&t.render===zn&&(t.render=F),D!=null&&(t.inheritAttrs=D),E&&(t.components=E),R&&(t.directives=R),w&&Gg(t)}function j_(t,e,n=zn){Oe(t)&&(t=Uc(t));for(const r in t){const i=t[r];let s;et(i)?"default"in i?s=cn(i.from||r,i.default,!0):s=cn(i.from||r):s=cn(i),vt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Oh(t,e,n){An(Oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zg(t,e,n,r){let i=r.includes(".")?Vg(n,r):()=>n[r];if(ft(t)){const s=e[t];Ve(s)&&Kt(i,s)}else if(Ve(t))Kt(i,t.bind(n));else if(et(t))if(Oe(t))t.forEach(s=>Zg(s,e,n,r));else{const s=Ve(t.handler)?t.handler.bind(n):e[t.handler];Ve(s)&&Kt(i,s,t)}}function em(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(h=>Ma(l,h,o,!0)),Ma(l,e,o)),et(e)&&s.set(e,l),l}function Ma(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ma(t,s,n,!0),i&&i.forEach(o=>Ma(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=q_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const q_={data:Nh,props:Dh,emits:Dh,methods:Os,computed:Os,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Os,directives:Os,watch:W_,provide:Nh,inject:H_};function Nh(t,e){return e?t?function(){return kt(Ve(t)?t.call(this,this):t,Ve(e)?e.call(this,this):e)}:e:t}function H_(t,e){return Os(Uc(t),Uc(e))}function Uc(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qt(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?kt(Object.create(null),t,e):e}function Dh(t,e){return t?Oe(t)&&Oe(e)?[...new Set([...t,...e])]:kt(Object.create(null),Ph(t),Ph(e??{})):e}function W_(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const r in e)n[r]=Qt(t[r],e[r]);return n}function tm(){return{app:null,config:{isNativeTag:rg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let G_=0;function K_(t,e){return function(r,i=null){Ve(r)||(r=kt({},r)),i!=null&&!et(i)&&(i=null);const s=tm(),o=new WeakSet,a=[];let l=!1;const h=s.app={_uid:G_++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:kb,get config(){return s.config},set config(p){},use(p,...g){return o.has(p)||(p&&Ve(p.install)?(o.add(p),p.install(h,...g)):Ve(p)&&(o.add(p),p(h,...g))),h},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),h},component(p,g){return g?(s.components[p]=g,h):s.components[p]},directive(p,g){return g?(s.directives[p]=g,h):s.directives[p]},mount(p,g,v){if(!l){const m=h._ceVNode||ot(r,i);return m.appContext=s,v===!0?v="svg":v===!1&&(v=void 0),t(m,p,v),l=!0,h._container=p,p.__vue_app__=h,bl(m.component)}},onUnmount(p){a.push(p)},unmount(){l&&(An(a,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(p,g){return s.provides[p]=g,h},runWithContext(p){const g=mi;mi=h;try{return p()}finally{mi=g}}};return h}}let mi=null;const J_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${gn(e)}Modifiers`]||t[`${Qr(e)}Modifiers`];function Q_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||nt;let i=n;const s=e.startsWith("update:"),o=s&&J_(r,e.slice(7));o&&(o.trim&&(i=n.map(p=>ft(p)?p.trim():p)),o.number&&(i=n.map(dl)));let a,l=r[a=Xl(e)]||r[a=Xl(gn(e))];!l&&s&&(l=r[a=Xl(Qr(e))]),l&&An(l,t,6,i);const h=r[a+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,An(h,t,6,i)}}const Y_=new WeakMap;function nm(t,e,n=!1){const r=n?Y_:e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Ve(t)){const l=h=>{const p=nm(h,e,!0);p&&(a=!0,kt(o,p))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(et(t)&&r.set(t,null),null):(Oe(s)?s.forEach(l=>o[l]=null):kt(o,s),et(t)&&r.set(t,o),o)}function yl(t,e){return!t||!al(e)?!1:(e=e.slice(2).replace(/Once$/,""),Xe(t,e[0].toLowerCase()+e.slice(1))||Xe(t,Qr(e))||Xe(t,e))}function Mh(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:h,renderCache:p,props:g,data:v,setupState:m,ctx:_,inheritAttrs:u}=t,C=Na(t);let x,A;try{if(n.shapeFlag&4){const M=i||r,F=M;x=Un(h.call(F,M,p,g,m,v,_)),A=a}else{const M=e;x=Un(M.length>1?M(g,{attrs:a,slots:o,emit:l}):M(g,null)),A=e.props?a:X_(a)}}catch(M){qs.length=0,gl(M,t,1),x=ot(Ht)}let V=x;if(A&&u!==!1){const M=Object.keys(A),{shapeFlag:F}=V;M.length&&F&7&&(s&&M.some(Iu)&&(A=Z_(A,s)),V=jr(V,A,!1,!0))}return n.dirs&&(V=jr(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&io(V,n.transition),x=V,Na(C),x}const X_=t=>{let e;for(const n in t)(n==="class"||n==="style"||al(n))&&((e||(e={}))[n]=t[n]);return e},Z_=(t,e)=>{const n={};for(const r in t)(!Iu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function eb(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Lh(r,o,h):!!o;if(l&8){const p=e.dynamicProps;for(let g=0;g<p.length;g++){const v=p[g];if(rm(o,r,v)&&!yl(h,v))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Lh(r,o,h):!0:!!o;return!1}function Lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(rm(e,t,s)&&!yl(n,s))return!0}return!1}function rm(t,e,n){const r=t[n],i=e[n];return n==="style"&&et(r)&&et(i)?!os(r,i):r!==i}function tb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const im={},sm=()=>Object.create(im),om=t=>Object.getPrototypeOf(t)===im;function nb(t,e,n,r=!1){const i={},s=sm();t.propsDefaults=Object.create(null),am(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Sg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function rb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=He(i),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=t.vnode.dynamicProps;for(let g=0;g<p.length;g++){let v=p[g];if(yl(t.emitsOptions,v))continue;const m=e[v];if(l)if(Xe(s,v))m!==s[v]&&(s[v]=m,h=!0);else{const _=gn(v);i[_]=zc(l,a,_,m,t,!1)}else m!==s[v]&&(s[v]=m,h=!0)}}}else{am(t,e,i,s)&&(h=!0);let p;for(const g in a)(!e||!Xe(e,g)&&((p=Qr(g))===g||!Xe(e,p)))&&(l?n&&(n[g]!==void 0||n[p]!==void 0)&&(i[g]=zc(l,a,g,void 0,t,!0)):delete i[g]);if(s!==a)for(const g in s)(!e||!Xe(e,g))&&(delete s[g],h=!0)}h&&tr(t.attrs,"set","")}function am(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vs(l))continue;const h=e[l];let p;i&&Xe(i,p=gn(l))?!s||!s.includes(p)?n[p]=h:(a||(a={}))[p]=h:yl(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(s){const l=He(n),h=a||nt;for(let p=0;p<s.length;p++){const g=s[p];n[g]=zc(i,l,g,h[g],t,!Xe(h,g))}}return o}function zc(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Xe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const p=So(i);r=h[n]=l.call(null,e),p()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Qr(n))&&(r=!0))}return r}const ib=new WeakMap;function lm(t,e,n=!1){const r=n?ib:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Ve(t)){const p=g=>{l=!0;const[v,m]=lm(g,e,!0);kt(o,v),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!s&&!l)return et(t)&&r.set(t,Fi),Fi;if(Oe(s))for(let p=0;p<s.length;p++){const g=gn(s[p]);Vh(g)&&(o[g]=nt)}else if(s)for(const p in s){const g=gn(p);if(Vh(g)){const v=s[p],m=o[g]=Oe(v)||Ve(v)?{type:v}:kt({},v),_=m.type;let u=!1,C=!0;if(Oe(_))for(let x=0;x<_.length;++x){const A=_[x],V=Ve(A)&&A.name;if(V==="Boolean"){u=!0;break}else V==="String"&&(C=!1)}else u=Ve(_)&&_.name==="Boolean";m[0]=u,m[1]=C,(u||Xe(m,"default"))&&a.push(g)}}const h=[o,a];return et(t)&&r.set(t,h),h}function Vh(t){return t[0]!=="$"&&!Vs(t)}const Mu=t=>t==="_"||t==="_ctx"||t==="$stable",Lu=t=>Oe(t)?t.map(Un):[Un(t)],sb=(t,e,n)=>{if(e._n)return e;const r=Et((...i)=>Lu(e(...i)),n);return r._c=!1,r},cm=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Mu(i))continue;const s=t[i];if(Ve(s))e[i]=sb(i,s,r);else if(s!=null){const o=Lu(s);e[i]=()=>o}}},um=(t,e)=>{const n=Lu(e);t.slots.default=()=>n},dm=(t,e,n)=>{for(const r in e)(n||!Mu(r))&&(t[r]=e[r])},ob=(t,e,n)=>{const r=t.slots=sm();if(t.vnode.shapeFlag&32){const i=e._;i?(dm(r,e,n),n&&ag(r,"_",i,!0)):cm(e,r)}else e&&um(t,e)},ab=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=nt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:dm(i,e,n):(s=!e.$stable,cm(e,i)),o=e}else e&&(um(t,e),o={default:1});if(s)for(const a in i)!Mu(a)&&o[a]==null&&delete i[a]},Bt=hb;function lb(t){return cb(t)}function cb(t,e){const n=hl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:h,setElementText:p,parentNode:g,nextSibling:v,setScopeId:m=zn,insertStaticContent:_}=t,u=(q,B,f,G=null,$=null,O=null,N=void 0,H=null,j=!!B.dynamicChildren)=>{if(q===B)return;q&&!ui(q,B)&&(G=re(q),Z(q,$,O,!0),q=null),B.patchFlag===-2&&(j=!1,B.dynamicChildren=null);const{type:T,ref:W,shapeFlag:Y}=B;switch(T){case _l:C(q,B,f,G);break;case Ht:x(q,B,f,G);break;case ya:q==null&&A(B,f,G,N);break;case Pe:E(q,B,f,G,$,O,N,H,j);break;default:Y&1?F(q,B,f,G,$,O,N,H,j):Y&6?R(q,B,f,G,$,O,N,H,j):(Y&64||Y&128)&&T.process(q,B,f,G,$,O,N,H,j,ye)}W!=null&&$?zs(W,q&&q.ref,O,B||q,!B):W==null&&q&&q.ref!=null&&zs(q.ref,null,O,q,!0)},C=(q,B,f,G)=>{if(q==null)r(B.el=a(B.children),f,G);else{const $=B.el=q.el;B.children!==q.children&&h($,B.children)}},x=(q,B,f,G)=>{q==null?r(B.el=l(B.children||""),f,G):B.el=q.el},A=(q,B,f,G)=>{[q.el,q.anchor]=_(q.children,B,f,G,q.el,q.anchor)},V=({el:q,anchor:B},f,G)=>{let $;for(;q&&q!==B;)$=v(q),r(q,f,G),q=$;r(B,f,G)},M=({el:q,anchor:B})=>{let f;for(;q&&q!==B;)f=v(q),i(q),q=f;i(B)},F=(q,B,f,G,$,O,N,H,j)=>{if(B.type==="svg"?N="svg":B.type==="math"&&(N="mathml"),q==null)L(B,f,G,$,O,N,H,j);else{const T=q.el&&q.el._isVueCE?q.el:null;try{T&&T._beginPatch(),w(q,B,$,O,N,H,j)}finally{T&&T._endPatch()}}},L=(q,B,f,G,$,O,N,H)=>{let j,T;const{props:W,shapeFlag:Y,transition:ne,dirs:le}=q;if(j=q.el=o(q.type,O,W&&W.is,W),Y&8?p(j,q.children):Y&16&&b(q.children,j,null,G,$,sc(q,O),N,H),le&&ii(q,null,G,"created"),I(j,q,q.scopeId,N,G),W){for(const Se in W)Se!=="value"&&!Vs(Se)&&s(j,Se,null,W[Se],O,G);"value"in W&&s(j,"value",null,W.value,O),(T=W.onVnodeBeforeMount)&&Vn(T,G,q)}le&&ii(q,null,G,"beforeMount");const me=ub($,ne);me&&ne.beforeEnter(j),r(j,B,f),((T=W&&W.onVnodeMounted)||me||le)&&Bt(()=>{T&&Vn(T,G,q),me&&ne.enter(j),le&&ii(q,null,G,"mounted")},$)},I=(q,B,f,G,$)=>{if(f&&m(q,f),G)for(let O=0;O<G.length;O++)m(q,G[O]);if($){let O=$.subTree;if(B===O||pm(O.type)&&(O.ssContent===B||O.ssFallback===B)){const N=$.vnode;I(q,N,N.scopeId,N.slotScopeIds,$.parent)}}},b=(q,B,f,G,$,O,N,H,j=0)=>{for(let T=j;T<q.length;T++){const W=q[T]=H?er(q[T]):Un(q[T]);u(null,W,B,f,G,$,O,N,H)}},w=(q,B,f,G,$,O,N)=>{const H=B.el=q.el;let{patchFlag:j,dynamicChildren:T,dirs:W}=B;j|=q.patchFlag&16;const Y=q.props||nt,ne=B.props||nt;let le;if(f&&si(f,!1),(le=ne.onVnodeBeforeUpdate)&&Vn(le,f,B,q),W&&ii(B,q,f,"beforeUpdate"),f&&si(f,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&p(H,""),T?P(q.dynamicChildren,T,H,f,G,sc(B,$),O):N||de(q,B,H,null,f,G,sc(B,$),O,!1),j>0){if(j&16)D(H,Y,ne,f,$);else if(j&2&&Y.class!==ne.class&&s(H,"class",null,ne.class,$),j&4&&s(H,"style",Y.style,ne.style,$),j&8){const me=B.dynamicProps;for(let Se=0;Se<me.length;Se++){const oe=me[Se],$e=Y[oe],Je=ne[oe];(Je!==$e||oe==="value")&&s(H,oe,$e,Je,$,f)}}j&1&&q.children!==B.children&&p(H,B.children)}else!N&&T==null&&D(H,Y,ne,f,$);((le=ne.onVnodeUpdated)||W)&&Bt(()=>{le&&Vn(le,f,B,q),W&&ii(B,q,f,"updated")},G)},P=(q,B,f,G,$,O,N)=>{for(let H=0;H<B.length;H++){const j=q[H],T=B[H],W=j.el&&(j.type===Pe||!ui(j,T)||j.shapeFlag&198)?g(j.el):f;u(j,T,W,null,G,$,O,N,!0)}},D=(q,B,f,G,$)=>{if(B!==f){if(B!==nt)for(const O in B)!Vs(O)&&!(O in f)&&s(q,O,B[O],null,$,G);for(const O in f){if(Vs(O))continue;const N=f[O],H=B[O];N!==H&&O!=="value"&&s(q,O,H,N,$,G)}"value"in f&&s(q,"value",B.value,f.value,$)}},E=(q,B,f,G,$,O,N,H,j)=>{const T=B.el=q?q.el:a(""),W=B.anchor=q?q.anchor:a("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:le}=B;le&&(H=H?H.concat(le):le),q==null?(r(T,f,G),r(W,f,G),b(B.children||[],f,W,$,O,N,H,j)):Y>0&&Y&64&&ne&&q.dynamicChildren&&q.dynamicChildren.length===ne.length?(P(q.dynamicChildren,ne,f,$,O,N,H),(B.key!=null||$&&B===$.subTree)&&Vu(q,B,!0)):de(q,B,f,W,$,O,N,H,j)},R=(q,B,f,G,$,O,N,H,j)=>{B.slotScopeIds=H,q==null?B.shapeFlag&512?$.ctx.activate(B,f,G,N,j):S(B,f,G,$,O,N,j):J(q,B,j)},S=(q,B,f,G,$,O,N)=>{const H=q.component=_b(q,G,$);if(ml(q)&&(H.ctx.renderer=ye),bb(H,!1,N),H.asyncDep){if($&&$.registerDep(H,ae,N),!q.el){const j=H.subTree=ot(Ht);x(null,j,B,f),q.placeholder=j.el}}else ae(H,q,B,f,$,O,N)},J=(q,B,f)=>{const G=B.component=q.component;if(eb(q,B,f))if(G.asyncDep&&!G.asyncResolved){z(G,B,f);return}else G.next=B,G.update();else B.el=q.el,G.vnode=B},ae=(q,B,f,G,$,O,N)=>{const H=()=>{if(q.isMounted){let{next:Y,bu:ne,u:le,parent:me,vnode:Se}=q;{const pt=hm(q);if(pt){Y&&(Y.el=Se.el,z(q,Y,N)),pt.asyncDep.then(()=>{Bt(()=>{q.isUnmounted||T()},$)});return}}let oe=Y,$e;si(q,!1),Y?(Y.el=Se.el,z(q,Y,N)):Y=Se,ne&&ma(ne),($e=Y.props&&Y.props.onVnodeBeforeUpdate)&&Vn($e,me,Y,Se),si(q,!0);const Je=Mh(q),We=q.subTree;q.subTree=Je,u(We,Je,g(We.el),re(We),q,$,O),Y.el=Je.el,oe===null&&tb(q,Je.el),le&&Bt(le,$),($e=Y.props&&Y.props.onVnodeUpdated)&&Bt(()=>Vn($e,me,Y,Se),$)}else{let Y;const{el:ne,props:le}=B,{bm:me,m:Se,parent:oe,root:$e,type:Je}=q,We=zi(B);si(q,!1),me&&ma(me),!We&&(Y=le&&le.onVnodeBeforeMount)&&Vn(Y,oe,B),si(q,!0);{$e.ce&&$e.ce._hasShadowRoot()&&$e.ce._injectChildStyle(Je);const pt=q.subTree=Mh(q);u(null,pt,f,G,q,$,O),B.el=pt.el}if(Se&&Bt(Se,$),!We&&(Y=le&&le.onVnodeMounted)){const pt=B;Bt(()=>Vn(Y,oe,pt),$)}(B.shapeFlag&256||oe&&zi(oe.vnode)&&oe.vnode.shapeFlag&256)&&q.a&&Bt(q.a,$),q.isMounted=!0,B=f=G=null}};q.scope.on();const j=q.effect=new pg(H);q.scope.off();const T=q.update=j.run.bind(j),W=q.job=j.runIfDirty.bind(j);W.i=q,W.id=q.uid,j.scheduler=()=>Nu(W),si(q,!0),T()},z=(q,B,f)=>{B.component=q;const G=q.vnode.props;q.vnode=B,q.next=null,rb(q,B.props,G,f),ab(q,B.children,f),dr(),Ih(q),hr()},de=(q,B,f,G,$,O,N,H,j=!1)=>{const T=q&&q.children,W=q?q.shapeFlag:0,Y=B.children,{patchFlag:ne,shapeFlag:le}=B;if(ne>0){if(ne&128){Ie(T,Y,f,G,$,O,N,H,j);return}else if(ne&256){se(T,Y,f,G,$,O,N,H,j);return}}le&8?(W&16&&_e(T,$,O),Y!==T&&p(f,Y)):W&16?le&16?Ie(T,Y,f,G,$,O,N,H,j):_e(T,$,O,!0):(W&8&&p(f,""),le&16&&b(Y,f,G,$,O,N,H,j))},se=(q,B,f,G,$,O,N,H,j)=>{q=q||Fi,B=B||Fi;const T=q.length,W=B.length,Y=Math.min(T,W);let ne;for(ne=0;ne<Y;ne++){const le=B[ne]=j?er(B[ne]):Un(B[ne]);u(q[ne],le,f,null,$,O,N,H,j)}T>W?_e(q,$,O,!0,!1,Y):b(B,f,G,$,O,N,H,j,Y)},Ie=(q,B,f,G,$,O,N,H,j)=>{let T=0;const W=B.length;let Y=q.length-1,ne=W-1;for(;T<=Y&&T<=ne;){const le=q[T],me=B[T]=j?er(B[T]):Un(B[T]);if(ui(le,me))u(le,me,f,null,$,O,N,H,j);else break;T++}for(;T<=Y&&T<=ne;){const le=q[Y],me=B[ne]=j?er(B[ne]):Un(B[ne]);if(ui(le,me))u(le,me,f,null,$,O,N,H,j);else break;Y--,ne--}if(T>Y){if(T<=ne){const le=ne+1,me=le<W?B[le].el:G;for(;T<=ne;)u(null,B[T]=j?er(B[T]):Un(B[T]),f,me,$,O,N,H,j),T++}}else if(T>ne)for(;T<=Y;)Z(q[T],$,O,!0),T++;else{const le=T,me=T,Se=new Map;for(T=me;T<=ne;T++){const at=B[T]=j?er(B[T]):Un(B[T]);at.key!=null&&Se.set(at.key,T)}let oe,$e=0;const Je=ne-me+1;let We=!1,pt=0;const ze=new Array(Je);for(T=0;T<Je;T++)ze[T]=0;for(T=le;T<=Y;T++){const at=q[T];if($e>=Je){Z(at,$,O,!0);continue}let Ge;if(at.key!=null)Ge=Se.get(at.key);else for(oe=me;oe<=ne;oe++)if(ze[oe-me]===0&&ui(at,B[oe])){Ge=oe;break}Ge===void 0?Z(at,$,O,!0):(ze[Ge-me]=T+1,Ge>=pt?pt=Ge:We=!0,u(at,B[Ge],f,null,$,O,N,H,j),$e++)}const tn=We?db(ze):Fi;for(oe=tn.length-1,T=Je-1;T>=0;T--){const at=me+T,Ge=B[at],yn=B[at+1],hn=at+1<W?yn.el||fm(yn):G;ze[T]===0?u(null,Ge,f,hn,$,O,N,H,j):We&&(oe<0||T!==tn[oe]?te(Ge,f,hn,2):oe--)}}},te=(q,B,f,G,$=null)=>{const{el:O,type:N,transition:H,children:j,shapeFlag:T}=q;if(T&6){te(q.component.subTree,B,f,G);return}if(T&128){q.suspense.move(B,f,G);return}if(T&64){N.move(q,B,f,ye);return}if(N===Pe){r(O,B,f);for(let Y=0;Y<j.length;Y++)te(j[Y],B,f,G);r(q.anchor,B,f);return}if(N===ya){V(q,B,f);return}if(G!==2&&T&1&&H)if(G===0)H.beforeEnter(O),r(O,B,f),Bt(()=>H.enter(O),$);else{const{leave:Y,delayLeave:ne,afterLeave:le}=H,me=()=>{q.ctx.isUnmounted?i(O):r(O,B,f)},Se=()=>{O._isLeaving&&O[Fn](!0),Y(O,()=>{me(),le&&le()})};ne?ne(O,me,Se):Se()}else r(O,B,f)},Z=(q,B,f,G=!1,$=!1)=>{const{type:O,props:N,ref:H,children:j,dynamicChildren:T,shapeFlag:W,patchFlag:Y,dirs:ne,cacheIndex:le}=q;if(Y===-2&&($=!1),H!=null&&(dr(),zs(H,null,f,q,!0),hr()),le!=null&&(B.renderCache[le]=void 0),W&256){B.ctx.deactivate(q);return}const me=W&1&&ne,Se=!zi(q);let oe;if(Se&&(oe=N&&N.onVnodeBeforeUnmount)&&Vn(oe,B,q),W&6)X(q.component,f,G);else{if(W&128){q.suspense.unmount(f,G);return}me&&ii(q,null,B,"beforeUnmount"),W&64?q.type.remove(q,B,f,ye,G):T&&!T.hasOnce&&(O!==Pe||Y>0&&Y&64)?_e(T,B,f,!1,!0):(O===Pe&&Y&384||!$&&W&16)&&_e(j,B,f),G&&we(q)}(Se&&(oe=N&&N.onVnodeUnmounted)||me)&&Bt(()=>{oe&&Vn(oe,B,q),me&&ii(q,null,B,"unmounted")},f)},we=q=>{const{type:B,el:f,anchor:G,transition:$}=q;if(B===Pe){ve(f,G);return}if(B===ya){M(q);return}const O=()=>{i(f),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(q.shapeFlag&1&&$&&!$.persisted){const{leave:N,delayLeave:H}=$,j=()=>N(f,O);H?H(q.el,O,j):j()}else O()},ve=(q,B)=>{let f;for(;q!==B;)f=v(q),i(q),q=f;i(B)},X=(q,B,f)=>{const{bum:G,scope:$,job:O,subTree:N,um:H,m:j,a:T}=q;$h(j),$h(T),G&&ma(G),$.stop(),O&&(O.flags|=8,Z(N,q,B,f)),H&&Bt(H,B),Bt(()=>{q.isUnmounted=!0},B)},_e=(q,B,f,G=!1,$=!1,O=0)=>{for(let N=O;N<q.length;N++)Z(q[N],B,f,G,$)},re=q=>{if(q.shapeFlag&6)return re(q.component.subTree);if(q.shapeFlag&128)return q.suspense.next();const B=v(q.anchor||q.el),f=B&&B[$g];return f?v(f):B};let ue=!1;const he=(q,B,f)=>{let G;q==null?B._vnode&&(Z(B._vnode,null,null,!0),G=B._vnode.component):u(B._vnode||null,q,B,null,null,null,f),B._vnode=q,ue||(ue=!0,Ih(G),Ng(),ue=!1)},ye={p:u,um:Z,m:te,r:we,mt:S,mc:b,pc:de,pbc:P,n:re,o:t};return{render:he,hydrate:void 0,createApp:K_(he)}}function sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function si({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ub(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vu(t,e,n=!1){const r=t.children,i=e.children;if(Oe(r)&&Oe(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=er(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Vu(o,a)),a.type===_l&&(a.patchFlag===-1&&(a=i[s]=er(a)),a.el=o.el),a.type===Ht&&!a.el&&(a.el=o.el)}}function db(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(i=n[n.length-1],t[i]<h){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<h?s=a+1:o=a;h<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function hm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hm(e)}function $h(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function fm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?fm(e.subTree):null}const pm=t=>t.__isSuspense;function hb(t,e){e&&e.pendingBranch?Oe(t)?e.effects.push(...t):e.effects.push(t):b_(t)}const Pe=Symbol.for("v-fgt"),_l=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),ya=Symbol.for("v-stc"),qs=[];let an=null;function K(t=!1){qs.push(an=t?null:[])}function fb(){qs.pop(),an=qs[qs.length-1]||null}let so=1;function La(t,e=!1){so+=t,t<0&&an&&e&&(an.hasOnce=!0)}function gm(t){return t.dynamicChildren=so>0?an||Fi:null,fb(),so>0&&an&&an.push(t),t}function Q(t,e,n,r,i,s){return gm(d(t,e,n,r,i,s,!0))}function _t(t,e,n,r,i){return gm(ot(t,e,n,r,i,!0))}function oo(t){return t?t.__v_isVNode===!0:!1}function ui(t,e){return t.type===e.type&&t.key===e.key}const mm=({key:t})=>t??null,_a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||vt(t)||Ve(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,r=0,i=null,s=t===Pe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mm(e),ref:e&&_a(e),scopeId:Mg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Lt};return a?($u(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ft(n)?8:16),so>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const ot=pb;function pb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Qg)&&(t=Ht),oo(t)){const a=jr(t,e,!0);return n&&$u(a,n),so>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag=-2,a}if(xb(t)&&(t=t.__vccOpts),e){e=gb(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=Me(a)),et(l)&&(pl(l)&&!Oe(l)&&(l=kt({},l)),e.style=Le(l))}const o=ft(t)?1:pm(t)?128:Fg(t)?64:et(t)?4:Ve(t)?2:0;return d(t,e,n,r,i,o,s,!0)}function gb(t){return t?pl(t)||om(t)?kt({},t):t:null}function jr(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=t,h=e?mb(i||{},e):i,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&mm(h),ref:e&&e.ref?n&&s?Oe(s)?s.concat(_a(e)):[s,_a(e)]:_a(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jr(t.ssContent),ssFallback:t.ssFallback&&jr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&io(p,l.clone(p)),p}function Ae(t=" ",e=0){return ot(_l,null,t,e)}function Zt(t,e){const n=ot(ya,null,t);return n.staticCount=e,n}function Te(t="",e=!1){return e?(K(),_t(Ht,null,t)):ot(Ht,null,t)}function Un(t){return t==null||typeof t=="boolean"?ot(Ht):Oe(t)?ot(Pe,null,t.slice()):oo(t)?er(t):ot(_l,null,String(t))}function er(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jr(t)}function $u(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Oe(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),$u(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!om(e)?e._ctx=Lt:i===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),r&64?(n=16,e=[Ae(e)]):n=8);t.children=e,t.shapeFlag|=n}function mb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Me([e.class,r.class]));else if(i==="style")e.style=Le([e.style,r.style]);else if(al(i)){const s=e[i],o=r[i];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Vn(t,e,n,r=null){An(t,e,7,[n,r])}const vb=tm();let yb=0;function _b(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||vb,s={uid:yb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lm(r,i),emitsOptions:nm(r,i),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:r.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Q_.bind(null,s),t.ce&&t.ce(s),s}let Wt=null;const Fu=()=>Wt||Lt;let Va,jc;{const t=hl(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Va=e("__VUE_INSTANCE_SETTERS__",n=>Wt=n),jc=e("__VUE_SSR_SETTERS__",n=>ao=n)}const So=t=>{const e=Wt;return Va(t),t.scope.on(),()=>{t.scope.off(),Va(e)}},Fh=()=>{Wt&&Wt.scope.off(),Va(null)};function vm(t){return t.vnode.shapeFlag&4}let ao=!1;function bb(t,e=!1,n=!1){e&&jc(e);const{props:r,children:i}=t.vnode,s=vm(t);nb(t,r,s,e),ob(t,i,n||e);const o=s?wb(t,e):void 0;return e&&jc(!1),o}function wb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,U_);const{setup:r}=n;if(r){dr();const i=t.setupContext=r.length>1?Ib(t):null,s=So(t),o=Co(r,t,0,[t.props,i]),a=ig(o);if(hr(),s(),(a||t.sp)&&!zi(t)&&Gg(t),a){if(o.then(Fh,Fh),e)return o.then(l=>{Bh(t,l)}).catch(l=>{gl(l,t,0)});t.asyncDep=o}else Bh(t,o)}else ym(t)}function Bh(t,e,n){Ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:et(e)&&(t.setupState=Rg(e)),ym(t)}function ym(t,e,n){const r=t.type;t.render||(t.render=r.render||zn);{const i=So(t);dr();try{z_(t)}finally{hr(),i()}}}const Eb={get(t,e){return jt(t,"get",""),t[e]}};function Ib(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Eb),slots:t.slots,emit:t.emit,expose:e}}function bl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Rg(Ou(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}})):t.proxy}function Cb(t,e=!0){return Ve(t)?t.displayName||t.name:t.name||e&&t.__name}function xb(t){return Ve(t)&&"__vccOpts"in t}const xe=(t,e)=>g_(t,e,ao);function Bu(t,e,n){try{La(-1);const r=arguments.length;return r===2?et(e)&&!Oe(e)?oo(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oo(n)&&(n=[n]),ot(t,e,n))}finally{La(1)}}const kb="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qc;const Uh=typeof window<"u"&&window.trustedTypes;if(Uh)try{qc=Uh.createPolicy("vue",{createHTML:t=>t})}catch{}const _m=qc?t=>qc.createHTML(t):t=>t,Tb="http://www.w3.org/2000/svg",Sb="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,zh=Zn&&Zn.createElement("template"),Ab={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Zn.createElementNS(Tb,t):e==="mathml"?Zn.createElementNS(Sb,t):n?Zn.createElement(t,{is:n}):Zn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{zh.innerHTML=_m(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=zh.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ar="transition",Ts="animation",lo=Symbol("_vtc"),bm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Rb=kt({},Ug,bm),Pb=t=>(t.displayName="Transition",t.props=Rb,t),qr=Pb((t,{slots:e})=>Bu(S_,Ob(t),e)),oi=(t,e=[])=>{Oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},jh=t=>t?Oe(t)?t.some(e=>e.length>1):t.length>1:!1;function Ob(t){const e={};for(const E in t)E in bm||(e[E]=t[E]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:h=o,appearToClass:p=a,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=Nb(i),u=_&&_[0],C=_&&_[1],{onBeforeEnter:x,onEnter:A,onEnterCancelled:V,onLeave:M,onLeaveCancelled:F,onBeforeAppear:L=x,onAppear:I=A,onAppearCancelled:b=V}=e,w=(E,R,S,J)=>{E._enterCancelled=J,ai(E,R?p:a),ai(E,R?h:o),S&&S()},P=(E,R)=>{E._isLeaving=!1,ai(E,g),ai(E,m),ai(E,v),R&&R()},D=E=>(R,S)=>{const J=E?I:A,ae=()=>w(R,E,S);oi(J,[R,ae]),qh(()=>{ai(R,E?l:s),Qn(R,E?p:a),jh(J)||Hh(R,r,u,ae)})};return kt(e,{onBeforeEnter(E){oi(x,[E]),Qn(E,s),Qn(E,o)},onBeforeAppear(E){oi(L,[E]),Qn(E,l),Qn(E,h)},onEnter:D(!1),onAppear:D(!0),onLeave(E,R){E._isLeaving=!0;const S=()=>P(E,R);Qn(E,g),E._enterCancelled?(Qn(E,v),Kh(E)):(Kh(E),Qn(E,v)),qh(()=>{E._isLeaving&&(ai(E,g),Qn(E,m),jh(M)||Hh(E,r,C,S))}),oi(M,[E,S])},onEnterCancelled(E){w(E,!1,void 0,!0),oi(V,[E])},onAppearCancelled(E){w(E,!0,void 0,!0),oi(b,[E])},onLeaveCancelled(E){P(E),oi(F,[E])}})}function Nb(t){if(t==null)return null;if(et(t))return[oc(t.enter),oc(t.leave)];{const e=oc(t);return[e,e]}}function oc(t){return D1(t)}function Qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[lo]||(t[lo]=new Set)).add(e)}function ai(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[lo];n&&(n.delete(e),n.size||(t[lo]=void 0))}function qh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Db=0;function Hh(t,e,n,r){const i=t._endId=++Db,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Mb(t,e);if(!o)return r();const h=o+"end";let p=0;const g=()=>{t.removeEventListener(h,v),s()},v=m=>{m.target===t&&++p>=l&&g()};setTimeout(()=>{p<l&&g()},a+1),t.addEventListener(h,v)}function Mb(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),i=r(`${Ar}Delay`),s=r(`${Ar}Duration`),o=Wh(i,s),a=r(`${Ts}Delay`),l=r(`${Ts}Duration`),h=Wh(a,l);let p=null,g=0,v=0;e===Ar?o>0&&(p=Ar,g=o,v=s.length):e===Ts?h>0&&(p=Ts,g=h,v=l.length):(g=Math.max(o,h),p=g>0?o>h?Ar:Ts:null,v=p?p===Ar?s.length:l.length:0);const m=p===Ar&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ar}Property`).toString());return{type:p,timeout:g,propCount:v,hasTransform:m}}function Wh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Gh(n)+Gh(t[r])))}function Gh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Kh(t){return(t?t.ownerDocument:document).body.offsetHeight}function Lb(t,e,n){const r=t[lo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $a=Symbol("_vod"),wm=Symbol("_vsh"),Vb={name:"show",beforeMount(t,{value:e},{transition:n}){t[$a]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ss(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ss(t,!0),r.enter(t)):r.leave(t,()=>{Ss(t,!1)}):Ss(t,e))},beforeUnmount(t,{value:e}){Ss(t,e)}};function Ss(t,e){t.style.display=e?t[$a]:"none",t[wm]=!e}const $b=Symbol(""),Fb=/(?:^|;)\s*display\s*:/;function Bb(t,e,n){const r=t.style,i=ft(n);let s=!1;if(n&&!i){if(e)if(ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ba(r,a,"")}else for(const o in e)n[o]==null&&ba(r,o,"");for(const o in n)o==="display"&&(s=!0),ba(r,o,n[o])}else if(i){if(e!==n){const o=r[$b];o&&(n+=";"+o),r.cssText=n,s=Fb.test(n)}}else e&&t.removeAttribute("style");$a in t&&(t[$a]=s?r.display:"",t[wm]&&(r.display="none"))}const Jh=/\s*!important$/;function ba(t,e,n){if(Oe(n))n.forEach(r=>ba(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ub(t,e);Jh.test(n)?t.setProperty(Qr(r),n.replace(Jh,""),"important"):t[r]=n}}const Qh=["Webkit","Moz","ms"],ac={};function Ub(t,e){const n=ac[e];if(n)return n;let r=gn(e);if(r!=="filter"&&r in t)return ac[e]=r;r=ul(r);for(let i=0;i<Qh.length;i++){const s=Qh[i]+r;if(s in t)return ac[e]=s}return e}const Yh="http://www.w3.org/1999/xlink";function Xh(t,e,n,r,i,s=B1(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yh,e.slice(6,e.length)):t.setAttributeNS(Yh,e,n):n==null||s&&!lg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Tn(n)?String(n):n)}function Zh(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?_m(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=lg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Lr(t,e,n,r){t.addEventListener(e,n,r)}function zb(t,e,n,r){t.removeEventListener(e,n,r)}const ef=Symbol("_vei");function jb(t,e,n,r,i=null){const s=t[ef]||(t[ef]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=qb(e);if(r){const h=s[e]=Gb(r,i);Lr(t,a,h,l)}else o&&(zb(t,a,o,l),s[e]=void 0)}}const tf=/(?:Once|Passive|Capture)$/;function qb(t){let e;if(tf.test(t)){e={};let r;for(;r=t.match(tf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qr(t.slice(2)),e]}let lc=0;const Hb=Promise.resolve(),Wb=()=>lc||(Hb.then(()=>lc=0),lc=Date.now());function Gb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;An(Kb(r,n.value),e,5,[r])};return n.value=t,n.attached=Wb(),n}function Kb(t,e){if(Oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const nf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jb=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?Lb(t,r,o):e==="style"?Bb(t,n,r):al(e)?Iu(e)||jb(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qb(t,e,r,o))?(Zh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xh(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ft(r))?Zh(t,gn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xh(t,e,r,o))};function Qb(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&nf(e)&&Ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return nf(e)&&ft(n)?!1:e in t}const Yi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Oe(e)?n=>ma(e,n):e};function Yb(t){t.target.composing=!0}function rf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ar=Symbol("_assign");function sf(t,e,n){return e&&(t=t.trim()),n&&(t=dl(t)),t}const ht={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[ar]=Yi(i);const s=r||i.props&&i.props.type==="number";Lr(t,e?"change":"input",o=>{o.target.composing||t[ar](sf(t.value,n,s))}),(n||s)&&Lr(t,"change",()=>{t.value=sf(t.value,n,s)}),e||(Lr(t,"compositionstart",Yb),Lr(t,"compositionend",rf),Lr(t,"change",rf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[ar]=Yi(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?dl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Em={deep:!0,created(t,e,n){t[ar]=Yi(n),Lr(t,"change",()=>{const r=t._modelValue,i=co(t),s=t.checked,o=t[ar];if(Oe(r)){const a=xu(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const h=[...r];h.splice(a,1),o(h)}}else if(ss(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(Im(t,s))})},mounted:of,beforeUpdate(t,e,n){t[ar]=Yi(n),of(t,e,n)}};function of(t,{value:e,oldValue:n},r){t._modelValue=e;let i;if(Oe(e))i=xu(e,r.props.value)>-1;else if(ss(e))i=e.has(r.props.value);else{if(e===n)return;i=os(e,Im(t,!0))}t.checked!==i&&(t.checked=i)}const ia={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=ss(e);Lr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?dl(co(o)):co(o));t[ar](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,xo(()=>{t._assigning=!1})}),t[ar]=Yi(r)},mounted(t,{value:e}){af(t,e)},beforeUpdate(t,e,n){t[ar]=Yi(n)},updated(t,{value:e}){t._assigning||af(t,e)}};function af(t,e){const n=t.multiple,r=Oe(e);if(!(n&&!r&&!ss(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],a=co(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(a)):o.selected=xu(e,a)>-1}else o.selected=e.has(a);else if(os(co(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function co(t){return"_value"in t?t._value:t.value}function Im(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Xb=["ctrl","shift","alt","meta"],Zb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Xb.some(n=>t[`${n}Key`]&&!e.includes(n))},Dt=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=Zb[e[o]];if(a&&a(i,e))return}return t(i,...s)})},e0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Hc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=Qr(i.key);if(e.some(o=>o===s||e0[o]===s))return t(i)})},t0=kt({patchProp:Jb},Ab);let lf;function n0(){return lf||(lf=lb(t0))}const r0=(...t)=>{const e=n0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=s0(r);if(!i)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,i0(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function i0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function s0(t){return ft(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Cm;const wl=t=>Cm=t,xm=Symbol();function Wc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function o0(){const t=hg(!0),e=t.run(()=>pe({}));let n=[],r=[];const i=Ou({install(s){wl(i),i._a=s,s.provide(xm,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return this._a?n.push(s):r.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const km=()=>{};function cf(t,e,n,r=km){t.add(e);const i=()=>{t.delete(e)&&r()};return!n&&fg()&&z1(i),i}function Di(t,...e){t.forEach(n=>{n(...e)})}const a0=t=>t(),uf=Symbol(),cc=Symbol();function Gc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Wc(i)&&Wc(r)&&t.hasOwnProperty(n)&&!vt(r)&&!or(r)?t[n]=Gc(i,r):t[n]=r}return t}const l0=Symbol();function c0(t){return!Wc(t)||!Object.prototype.hasOwnProperty.call(t,l0)}const{assign:Or}=Object;function u0(t){return!!(vt(t)&&t.effect)}function d0(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function h(){a||(n.state.value[t]=i?i():{});const p=d_(n.state.value[t]);return Or(p,s,Object.keys(o||{}).reduce((g,v)=>(g[v]=Ou(xe(()=>{wl(n);const m=n._s.get(t);return o[v].call(m,m)})),g),{}))}return l=Tm(t,h,e,n,r,!0),l}function Tm(t,e,n={},r,i,s){let o;const a=Or({actions:{}},n),l={deep:!0};let h,p,g=new Set,v=new Set,m;const _=r.state.value[t];!s&&!_&&(r.state.value[t]={});let u;function C(b){let w;h=p=!1,typeof b=="function"?(b(r.state.value[t]),w={type:Hs.patchFunction,storeId:t,events:m}):(Gc(r.state.value[t],b),w={type:Hs.patchObject,payload:b,storeId:t,events:m});const P=u=Symbol();xo().then(()=>{u===P&&(h=!0)}),p=!0,Di(g,w,r.state.value[t])}const x=s?function(){const{state:w}=n,P=w?w():{};this.$patch(D=>{Or(D,P)})}:km;function A(){o.stop(),g.clear(),v.clear(),r._s.delete(t)}const V=(b,w="")=>{if(uf in b)return b[cc]=w,b;const P=function(){wl(r);const D=Array.from(arguments),E=new Set,R=new Set;function S(z){E.add(z)}function J(z){R.add(z)}Di(v,{args:D,name:P[cc],store:F,after:S,onError:J});let ae;try{ae=b.apply(this&&this.$id===t?this:F,D)}catch(z){throw Di(R,z),z}return ae instanceof Promise?ae.then(z=>(Di(E,z),z)).catch(z=>(Di(R,z),Promise.reject(z))):(Di(E,ae),ae)};return P[uf]=!0,P[cc]=w,P},M={_p:r,$id:t,$onAction:cf.bind(null,v),$patch:C,$reset:x,$subscribe(b,w={}){const P=cf(g,b,w.detached,()=>D()),D=o.run(()=>Kt(()=>r.state.value[t],E=>{(w.flush==="sync"?p:h)&&b({storeId:t,type:Hs.direct,events:m},E)},Or({},l,w)));return P},$dispose:A},F=Io(M);r._s.set(t,F);const I=(r._a&&r._a.runWithContext||a0)(()=>r._e.run(()=>(o=hg()).run(()=>e({action:V}))));for(const b in I){const w=I[b];if(vt(w)&&!u0(w)||or(w))s||(_&&c0(w)&&(vt(w)?w.value=_[b]:Gc(w,_[b])),r.state.value[t][b]=w);else if(typeof w=="function"){const P=V(w,b);I[b]=P,a.actions[b]=w}}return Or(F,I),Or(He(F),I),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:b=>{C(w=>{Or(w,b)})}}),r._p.forEach(b=>{Or(F,o.run(()=>b({store:F,app:r._a,pinia:r,options:a})))}),_&&s&&n.hydrate&&n.hydrate(F.$state,_),h=!0,p=!0,F}/*! #__NO_SIDE_EFFECTS__ */function El(t,e,n){let r;const i=typeof e=="function";r=i?n:e;function s(o,a){const l=w_();return o=o||(l?cn(xm,null):null),o&&wl(o),o=Cm,o._s.has(t)||(i?Tm(t,e,r,o):d0(t,r,o)),o._s.get(t)}return s.$id=t,s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Li=typeof document<"u";function Sm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function h0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sm(t.default)}const Qe=Object.assign;function uc(t,e){const n={};for(const r in e){const i=e[r];n[r]=Rn(i)?i.map(t):t(i)}return n}const Ws=()=>{},Rn=Array.isArray;function df(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Am=/#/g,f0=/&/g,p0=/\//g,g0=/=/g,m0=/\?/g,Rm=/\+/g,v0=/%5B/g,y0=/%5D/g,Pm=/%5E/g,_0=/%60/g,Om=/%7B/g,b0=/%7C/g,Nm=/%7D/g,w0=/%20/g;function Uu(t){return t==null?"":encodeURI(""+t).replace(b0,"|").replace(v0,"[").replace(y0,"]")}function E0(t){return Uu(t).replace(Om,"{").replace(Nm,"}").replace(Pm,"^")}function Kc(t){return Uu(t).replace(Rm,"%2B").replace(w0,"+").replace(Am,"%23").replace(f0,"%26").replace(_0,"`").replace(Om,"{").replace(Nm,"}").replace(Pm,"^")}function I0(t){return Kc(t).replace(g0,"%3D")}function C0(t){return Uu(t).replace(Am,"%23").replace(m0,"%3F")}function x0(t){return C0(t).replace(p0,"%2F")}function uo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const k0=/\/$/,T0=t=>t.replace(k0,"");function dc(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),s=e.slice(l,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=P0(r??e,n),{fullPath:r+s+o,path:r,query:i,hash:uo(o)}}function S0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function A0(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Xi(e.matched[r],n.matched[i])&&Dm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!R0(t[n],e[n]))return!1;return!0}function R0(t,e){return Rn(t)?ff(t,e):Rn(e)?ff(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function ff(t,e){return Rn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function P0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Jc=function(t){return t.pop="pop",t.push="push",t}({}),hc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function O0(t){if(!t)if(Li){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),T0(t)}const N0=/^[^#]+#/;function D0(t,e){return t.replace(N0,"#")+e}function M0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Il=()=>({left:window.scrollX,top:window.scrollY});function L0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=M0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pf(t,e){return(history.state?history.state.position-e:-1)+t}const Qc=new Map;function V0(t,e){Qc.set(t,e)}function $0(t){const e=Qc.get(t);return Qc.delete(t),e}function F0(t){return typeof t=="string"||t&&typeof t=="object"}function Mm(t){return typeof t=="string"||typeof t=="symbol"}let mt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Lm=Symbol("");mt.MATCHER_NOT_FOUND+"",mt.NAVIGATION_GUARD_REDIRECT+"",mt.NAVIGATION_ABORTED+"",mt.NAVIGATION_CANCELLED+"",mt.NAVIGATION_DUPLICATED+"";function Zi(t,e){return Qe(new Error,{type:t,[Lm]:!0},e)}function Yn(t,e){return t instanceof Error&&Lm in t&&(e==null||!!(t.type&e))}const B0=["params","query","hash"];function U0(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of B0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function z0(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(Rm," "),s=i.indexOf("="),o=uo(s<0?i:i.slice(0,s)),a=s<0?null:uo(i.slice(s+1));if(o in e){let l=e[o];Rn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function gf(t){let e="";for(let n in t){const r=t[n];if(n=I0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rn(r)?r.map(i=>i&&Kc(i)):[r&&Kc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function j0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Rn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const q0=Symbol(""),mf=Symbol(""),Cl=Symbol(""),zu=Symbol(""),Yc=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mr(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const h=v=>{v===!1?l(Zi(mt.NAVIGATION_ABORTED,{from:n,to:e})):v instanceof Error?l(v):F0(v)?l(Zi(mt.NAVIGATION_GUARD_REDIRECT,{from:e,to:v})):(o&&r.enterCallbacks[i]===o&&typeof v=="function"&&o.push(v),a())},p=s(()=>t.call(r&&r.instances[i],e,n,h));let g=Promise.resolve(p);t.length<3&&(g=g.then(h)),g.catch(v=>l(v))})}function fc(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Sm(l)){const h=(l.__vccOpts||l)[e];h&&s.push(Mr(h,n,r,o,a,i))}else{let h=l();s.push(()=>h.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const g=h0(p)?p.default:p;o.mods[a]=p,o.components[a]=g;const v=(g.__vccOpts||g)[e];return v&&Mr(v,n,r,o,a,i)()}))}}return s}function H0(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(h=>Xi(h,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(h=>Xi(h,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let W0=()=>location.protocol+"//"+location.host;function Vm(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let o=i.includes(t.slice(s))?t.slice(s).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),hf(a,"")}return hf(n,t)+r+i}function G0(t,e,n,r){let i=[],s=[],o=null;const a=({state:v})=>{const m=Vm(t,location),_=n.value,u=e.value;let C=0;if(v){if(n.value=m,e.value=v,o&&o===_){o=null;return}C=u?v.position-u.position:0}else r(m);i.forEach(x=>{x(n.value,_,{delta:C,type:Jc.pop,direction:C?C>0?hc.forward:hc.back:hc.unknown})})};function l(){o=n.value}function h(v){i.push(v);const m=()=>{const _=i.indexOf(v);_>-1&&i.splice(_,1)};return s.push(m),m}function p(){if(document.visibilityState==="hidden"){const{history:v}=window;if(!v.state)return;v.replaceState(Qe({},v.state,{scroll:Il()}),"")}}function g(){for(const v of s)v();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",p),document.removeEventListener("visibilitychange",p)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",p),document.addEventListener("visibilitychange",p),{pauseListeners:l,listen:h,destroy:g}}function vf(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Il():null}}function K0(t){const{history:e,location:n}=window,r={value:Vm(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,h,p){const g=t.indexOf("#"),v=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+l:W0()+t+l;try{e[p?"replaceState":"pushState"](h,"",v),i.value=h}catch(m){console.error(m),n[p?"replace":"assign"](v)}}function o(l,h){s(l,Qe({},e.state,vf(i.value.back,l,i.value.forward,!0),h,{position:i.value.position}),!0),r.value=l}function a(l,h){const p=Qe({},i.value,e.state,{forward:l,scroll:Il()});s(p.current,p,!0),s(l,Qe({},vf(r.value,l,null),{position:p.position+1},h),!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function J0(t){t=O0(t);const e=K0(t),n=G0(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Qe({location:"",base:t,go:r,createHref:D0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Q0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),J0(t)}let di=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var xt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(xt||{});const Y0={type:di.Static,value:""},X0=/[a-zA-Z0-9_]/;function Z0(t){if(!t)return[[]];if(t==="/")return[[Y0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${h}": ${m}`)}let n=xt.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,h="",p="";function g(){h&&(n===xt.Static?s.push({type:di.Static,value:h}):n===xt.Param||n===xt.ParamRegExp||n===xt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:di.Param,value:h,regexp:p,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function v(){h+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==xt.ParamRegExp){r=n,n=xt.EscapeNext;continue}switch(n){case xt.Static:l==="/"?(h&&g(),o()):l===":"?(g(),n=xt.Param):v();break;case xt.EscapeNext:v(),n=r;break;case xt.Param:l==="("?n=xt.ParamRegExp:X0.test(l)?v():(g(),n=xt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case xt.ParamRegExp:l===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+l:n=xt.ParamRegExpEnd:p+=l;break;case xt.ParamRegExpEnd:g(),n=xt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,p="";break;default:e("Unknown state");break}}return n===xt.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),g(),o(),i}const yf="[^/]+?",ew={sensitive:!1,strict:!1,start:!0,end:!0};var Yt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Yt||{});const tw=/[.+*?^${}()[\]/\\]/g;function nw(t,e){const n=Qe({},ew,e),r=[];let i=n.start?"^":"";const s=[];for(const h of t){const p=h.length?[]:[Yt.Root];n.strict&&!h.length&&(i+="/");for(let g=0;g<h.length;g++){const v=h[g];let m=Yt.Segment+(n.sensitive?Yt.BonusCaseSensitive:0);if(v.type===di.Static)g||(i+="/"),i+=v.value.replace(tw,"\\$&"),m+=Yt.Static;else if(v.type===di.Param){const{value:_,repeatable:u,optional:C,regexp:x}=v;s.push({name:_,repeatable:u,optional:C});const A=x||yf;if(A!==yf){m+=Yt.BonusCustomRegExp;try{`${A}`}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+M.message)}}let V=u?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;g||(V=C&&h.length<2?`(?:/${V})`:"/"+V),C&&(V+="?"),i+=V,m+=Yt.Dynamic,C&&(m+=Yt.BonusOptional),u&&(m+=Yt.BonusRepeatable),A===".*"&&(m+=Yt.BonusWildcard)}p.push(m)}r.push(p)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=Yt.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(h){const p=h.match(o),g={};if(!p)return null;for(let v=1;v<p.length;v++){const m=p[v]||"",_=s[v-1];g[_.name]=m&&_.repeatable?m.split("/"):m}return g}function l(h){let p="",g=!1;for(const v of t){(!g||!p.endsWith("/"))&&(p+="/"),g=!1;for(const m of v)if(m.type===di.Static)p+=m.value;else if(m.type===di.Param){const{value:_,repeatable:u,optional:C}=m,x=_ in h?h[_]:"";if(Rn(x)&&!u)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=Rn(x)?x.join("/"):x;if(!A)if(C)v.length<2&&(p.endsWith("/")?p=p.slice(0,-1):g=!0);else throw new Error(`Missing required param "${_}"`);p+=A}}return p||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function rw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Yt.Static+Yt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Yt.Static+Yt.Segment?1:-1:0}function $m(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=rw(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(_f(r))return 1;if(_f(i))return-1}return i.length-r.length}function _f(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iw={strict:!1,end:!0,sensitive:!1};function sw(t,e,n){const r=nw(Z0(t.path),n),i=Qe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function ow(t,e){const n=[],r=new Map;e=df(iw,e);function i(g){return r.get(g)}function s(g,v,m){const _=!m,u=wf(g);u.aliasOf=m&&m.record;const C=df(e,g),x=[u];if("alias"in g){const M=typeof g.alias=="string"?[g.alias]:g.alias;for(const F of M)x.push(wf(Qe({},u,{components:m?m.record.components:u.components,path:F,aliasOf:m?m.record:u})))}let A,V;for(const M of x){const{path:F}=M;if(v&&F[0]!=="/"){const L=v.record.path,I=L[L.length-1]==="/"?"":"/";M.path=v.record.path+(F&&I+F)}if(A=sw(M,v,C),m?m.alias.push(A):(V=V||A,V!==A&&V.alias.push(A),_&&g.name&&!Ef(A)&&o(g.name)),Fm(A)&&l(A),u.children){const L=u.children;for(let I=0;I<L.length;I++)s(L[I],A,m&&m.children[I])}m=m||A}return V?()=>{o(V)}:Ws}function o(g){if(Mm(g)){const v=r.get(g);v&&(r.delete(g),n.splice(n.indexOf(v),1),v.children.forEach(o),v.alias.forEach(o))}else{const v=n.indexOf(g);v>-1&&(n.splice(v,1),g.record.name&&r.delete(g.record.name),g.children.forEach(o),g.alias.forEach(o))}}function a(){return n}function l(g){const v=cw(g,n);n.splice(v,0,g),g.record.name&&!Ef(g)&&r.set(g.record.name,g)}function h(g,v){let m,_={},u,C;if("name"in g&&g.name){if(m=r.get(g.name),!m)throw Zi(mt.MATCHER_NOT_FOUND,{location:g});C=m.record.name,_=Qe(bf(v.params,m.keys.filter(V=>!V.optional).concat(m.parent?m.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),g.params&&bf(g.params,m.keys.map(V=>V.name))),u=m.stringify(_)}else if(g.path!=null)u=g.path,m=n.find(V=>V.re.test(u)),m&&(_=m.parse(u),C=m.record.name);else{if(m=v.name?r.get(v.name):n.find(V=>V.re.test(v.path)),!m)throw Zi(mt.MATCHER_NOT_FOUND,{location:g,currentLocation:v});C=m.record.name,_=Qe({},v.params,g.params),u=m.stringify(_)}const x=[];let A=m;for(;A;)x.unshift(A.record),A=A.parent;return{name:C,path:u,params:_,matched:x,meta:lw(x)}}t.forEach(g=>s(g));function p(){n.length=0,r.clear()}return{addRoute:s,resolve:h,removeRoute:o,clearRoutes:p,getRoutes:a,getRecordMatcher:i}}function bf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:aw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function aw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lw(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function cw(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;$m(t,e[s])<0?r=s:n=s+1}const i=uw(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function uw(t){let e=t;for(;e=e.parent;)if(Fm(e)&&$m(t,e)===0)return e}function Fm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function If(t){const e=cn(Cl),n=cn(zu),r=xe(()=>{const l=Ee(t.to);return e.resolve(l)}),i=xe(()=>{const{matched:l}=r.value,{length:h}=l,p=l[h-1],g=n.matched;if(!p||!g.length)return-1;const v=g.findIndex(Xi.bind(null,p));if(v>-1)return v;const m=Cf(l[h-2]);return h>1&&Cf(p)===m&&g[g.length-1].path!==m?g.findIndex(Xi.bind(null,l[h-2])):v}),s=xe(()=>i.value>-1&&gw(n.params,r.value.params)),o=xe(()=>i.value>-1&&i.value===n.matched.length-1&&Dm(n.params,r.value.params));function a(l={}){if(pw(l)){const h=e[Ee(t.replace)?"replace":"push"](Ee(t.to)).catch(Ws);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function dw(t){return t.length===1?t[0]:t}const hw=Wg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:If,setup(t,{slots:e}){const n=Io(If(t)),{options:r}=cn(Cl),i=xe(()=>({[xf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&dw(e.default(n));return t.custom?s:Bu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),fw=hw;function pw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gw(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Rn(i)||i.length!==r.length||r.some((s,o)=>s.valueOf()!==i[o].valueOf()))return!1}return!0}function Cf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xf=(t,e,n)=>t??e??n,mw=Wg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=cn(Yc),i=xe(()=>t.route||r.value),s=cn(mf,0),o=xe(()=>{let h=Ee(s);const{matched:p}=i.value;let g;for(;(g=p[h])&&!g.components;)h++;return h}),a=xe(()=>i.value.matched[o.value]);Bs(mf,xe(()=>o.value+1)),Bs(q0,a),Bs(Yc,i);const l=pe();return Kt(()=>[l.value,a.value,t.name],([h,p,g],[v,m,_])=>{p&&(p.instances[g]=h,m&&m!==p&&h&&h===v&&(p.leaveGuards.size||(p.leaveGuards=m.leaveGuards),p.updateGuards.size||(p.updateGuards=m.updateGuards))),h&&p&&(!m||!Xi(p,m)||!v)&&(p.enterCallbacks[g]||[]).forEach(u=>u(h))},{flush:"post"}),()=>{const h=i.value,p=t.name,g=a.value,v=g&&g.components[p];if(!v)return kf(n.default,{Component:v,route:h});const m=g.props[p],_=m?m===!0?h.params:typeof m=="function"?m(h):m:null,C=Bu(v,Qe({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(g.instances[p]=null)},ref:l}));return kf(n.default,{Component:C,route:h})||C}}});function kf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Bm=mw;function vw(t){const e=ow(t.routes,t),n=t.parseQuery||z0,r=t.stringifyQuery||gf,i=t.history,s=As(),o=As(),a=As(),l=l_(Rr);let h=Rr;Li&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=uc.bind(null,re=>""+re),g=uc.bind(null,x0),v=uc.bind(null,uo);function m(re,ue){let he,ye;return Mm(re)?(he=e.getRecordMatcher(re),ye=ue):ye=re,e.addRoute(ye,he)}function _(re){const ue=e.getRecordMatcher(re);ue&&e.removeRoute(ue)}function u(){return e.getRoutes().map(re=>re.record)}function C(re){return!!e.getRecordMatcher(re)}function x(re,ue){if(ue=Qe({},ue||l.value),typeof re=="string"){const f=dc(n,re,ue.path),G=e.resolve({path:f.path},ue),$=i.createHref(f.fullPath);return Qe(f,G,{params:v(G.params),hash:uo(f.hash),redirectedFrom:void 0,href:$})}let he;if(re.path!=null)he=Qe({},re,{path:dc(n,re.path,ue.path).path});else{const f=Qe({},re.params);for(const G in f)f[G]==null&&delete f[G];he=Qe({},re,{params:g(f)}),ue.params=g(ue.params)}const ye=e.resolve(he,ue),ke=re.hash||"";ye.params=p(v(ye.params));const q=S0(r,Qe({},re,{hash:E0(ke),path:ye.path})),B=i.createHref(q);return Qe({fullPath:q,hash:ke,query:r===gf?j0(re.query):re.query||{}},ye,{redirectedFrom:void 0,href:B})}function A(re){return typeof re=="string"?dc(n,re,l.value.path):Qe({},re)}function V(re,ue){if(h!==re)return Zi(mt.NAVIGATION_CANCELLED,{from:ue,to:re})}function M(re){return I(re)}function F(re){return M(Qe(A(re),{replace:!0}))}function L(re,ue){const he=re.matched[re.matched.length-1];if(he&&he.redirect){const{redirect:ye}=he;let ke=typeof ye=="function"?ye(re,ue):ye;return typeof ke=="string"&&(ke=ke.includes("?")||ke.includes("#")?ke=A(ke):{path:ke},ke.params={}),Qe({query:re.query,hash:re.hash,params:ke.path!=null?{}:re.params},ke)}}function I(re,ue){const he=h=x(re),ye=l.value,ke=re.state,q=re.force,B=re.replace===!0,f=L(he,ye);if(f)return I(Qe(A(f),{state:typeof f=="object"?Qe({},ke,f.state):ke,force:q,replace:B}),ue||he);const G=he;G.redirectedFrom=ue;let $;return!q&&A0(r,ye,he)&&($=Zi(mt.NAVIGATION_DUPLICATED,{to:G,from:ye}),te(ye,ye,!0,!1)),($?Promise.resolve($):P(G,ye)).catch(O=>Yn(O)?Yn(O,mt.NAVIGATION_GUARD_REDIRECT)?O:Ie(O):de(O,G,ye)).then(O=>{if(O){if(Yn(O,mt.NAVIGATION_GUARD_REDIRECT))return I(Qe({replace:B},A(O.to),{state:typeof O.to=="object"?Qe({},ke,O.to.state):ke,force:q}),ue||G)}else O=E(G,ye,!0,B,ke);return D(G,ye,O),O})}function b(re,ue){const he=V(re,ue);return he?Promise.reject(he):Promise.resolve()}function w(re){const ue=ve.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(re):re()}function P(re,ue){let he;const[ye,ke,q]=H0(re,ue);he=fc(ye.reverse(),"beforeRouteLeave",re,ue);for(const f of ye)f.leaveGuards.forEach(G=>{he.push(Mr(G,re,ue))});const B=b.bind(null,re,ue);return he.push(B),_e(he).then(()=>{he=[];for(const f of s.list())he.push(Mr(f,re,ue));return he.push(B),_e(he)}).then(()=>{he=fc(ke,"beforeRouteUpdate",re,ue);for(const f of ke)f.updateGuards.forEach(G=>{he.push(Mr(G,re,ue))});return he.push(B),_e(he)}).then(()=>{he=[];for(const f of q)if(f.beforeEnter)if(Rn(f.beforeEnter))for(const G of f.beforeEnter)he.push(Mr(G,re,ue));else he.push(Mr(f.beforeEnter,re,ue));return he.push(B),_e(he)}).then(()=>(re.matched.forEach(f=>f.enterCallbacks={}),he=fc(q,"beforeRouteEnter",re,ue,w),he.push(B),_e(he))).then(()=>{he=[];for(const f of o.list())he.push(Mr(f,re,ue));return he.push(B),_e(he)}).catch(f=>Yn(f,mt.NAVIGATION_CANCELLED)?f:Promise.reject(f))}function D(re,ue,he){a.list().forEach(ye=>w(()=>ye(re,ue,he)))}function E(re,ue,he,ye,ke){const q=V(re,ue);if(q)return q;const B=ue===Rr,f=Li?history.state:{};he&&(ye||B?i.replace(re.fullPath,Qe({scroll:B&&f&&f.scroll},ke)):i.push(re.fullPath,ke)),l.value=re,te(re,ue,he,B),Ie()}let R;function S(){R||(R=i.listen((re,ue,he)=>{if(!X.listening)return;const ye=x(re),ke=L(ye,X.currentRoute.value);if(ke){I(Qe(ke,{replace:!0,force:!0}),ye).catch(Ws);return}h=ye;const q=l.value;Li&&V0(pf(q.fullPath,he.delta),Il()),P(ye,q).catch(B=>Yn(B,mt.NAVIGATION_ABORTED|mt.NAVIGATION_CANCELLED)?B:Yn(B,mt.NAVIGATION_GUARD_REDIRECT)?(I(Qe(A(B.to),{force:!0}),ye).then(f=>{Yn(f,mt.NAVIGATION_ABORTED|mt.NAVIGATION_DUPLICATED)&&!he.delta&&he.type===Jc.pop&&i.go(-1,!1)}).catch(Ws),Promise.reject()):(he.delta&&i.go(-he.delta,!1),de(B,ye,q))).then(B=>{B=B||E(ye,q,!1),B&&(he.delta&&!Yn(B,mt.NAVIGATION_CANCELLED)?i.go(-he.delta,!1):he.type===Jc.pop&&Yn(B,mt.NAVIGATION_ABORTED|mt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),D(ye,q,B)}).catch(Ws)}))}let J=As(),ae=As(),z;function de(re,ue,he){Ie(re);const ye=ae.list();return ye.length?ye.forEach(ke=>ke(re,ue,he)):console.error(re),Promise.reject(re)}function se(){return z&&l.value!==Rr?Promise.resolve():new Promise((re,ue)=>{J.add([re,ue])})}function Ie(re){return z||(z=!re,S(),J.list().forEach(([ue,he])=>re?he(re):ue()),J.reset()),re}function te(re,ue,he,ye){const{scrollBehavior:ke}=t;if(!Li||!ke)return Promise.resolve();const q=!he&&$0(pf(re.fullPath,0))||(ye||!he)&&history.state&&history.state.scroll||null;return xo().then(()=>ke(re,ue,q)).then(B=>B&&L0(B)).catch(B=>de(B,re,ue))}const Z=re=>i.go(re);let we;const ve=new Set,X={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:u,resolve:x,options:t,push:M,replace:F,go:Z,back:()=>Z(-1),forward:()=>Z(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:se,install(re){re.component("RouterLink",fw),re.component("RouterView",Bm),re.config.globalProperties.$router=X,Object.defineProperty(re.config.globalProperties,"$route",{enumerable:!0,get:()=>Ee(l)}),Li&&!we&&l.value===Rr&&(we=!0,M(i.location).catch(ye=>{}));const ue={};for(const ye in Rr)Object.defineProperty(ue,ye,{get:()=>l.value[ye],enumerable:!0});re.provide(Cl,X),re.provide(zu,Sg(ue)),re.provide(Yc,l);const he=re.unmount;ve.add(re),re.unmount=function(){ve.delete(re),ve.size<1&&(h=Rr,R&&R(),R=null,l.value=Rr,we=!1,z=!1),he()}}};function _e(re){return re.reduce((ue,he)=>ue.then(()=>w(he)),Promise.resolve())}return X}function ju(){return cn(Cl)}function Um(t){return cn(zu)}const Rt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},yw={__name:"App",setup(t){return(e,n)=>(K(),_t(Ee(Bm),null,{default:Et(({Component:r,route:i})=>[ot(qr,{name:"app-view",mode:"out-in"},{default:Et(()=>[(K(),_t(Yg(r),{key:i.fullPath}))]),_:2},1024)]),_:1}))}},_w=Rt(yw,[["__scopeId","data-v-b9a41e6f"]]),Pt=[];for(let t=0;t<256;++t)Pt.push((t+256).toString(16).slice(1));function bw(t,e=0){return(Pt[t[e+0]]+Pt[t[e+1]]+Pt[t[e+2]]+Pt[t[e+3]]+"-"+Pt[t[e+4]]+Pt[t[e+5]]+"-"+Pt[t[e+6]]+Pt[t[e+7]]+"-"+Pt[t[e+8]]+Pt[t[e+9]]+"-"+Pt[t[e+10]]+Pt[t[e+11]]+Pt[t[e+12]]+Pt[t[e+13]]+Pt[t[e+14]]+Pt[t[e+15]]).toLowerCase()}let pc;const ww=new Uint8Array(16);function Ew(){if(!pc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");pc=crypto.getRandomValues.bind(crypto)}return pc(ww)}const Iw=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Tf={randomUUID:Iw};function Cw(t,e,n){var i;t=t||{};const r=t.random??((i=t.rng)==null?void 0:i.call(t))??Ew();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,bw(r)}function _n(t,e,n){return Tf.randomUUID&&!t?Tf.randomUUID():Cw(t)}const xw=()=>{};var Sf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,p=s>>2,g=(s&3)<<4|a>>4;let v=(a&15)<<2|h>>6,m=h&63;l||(m=64,o||(v=64)),r.push(n[p],n[g],n[v],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||g==null)throw new Tw;const v=s<<2|a>>4;if(r.push(v),h!==64){const m=a<<4&240|h>>2;if(r.push(m),g!==64){const _=h<<6&192|g;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sw=function(t){const e=zm(t);return jm.encodeByteArray(e,!0)},Fa=function(t){return Sw(t).replace(/\./g,"")},qm=function(t){try{return jm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=()=>Aw().__FIREBASE_DEFAULTS__,Pw=()=>{if(typeof process>"u"||typeof Sf>"u")return;const t=Sf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ow=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qm(t[1]);return e&&JSON.parse(e)},xl=()=>{try{return xw()||Rw()||Pw()||Ow()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hm=t=>{var e,n;return(n=(e=xl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Nw=t=>{const e=Hm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wm=()=>{var t;return(t=xl())==null?void 0:t.config},Gm=t=>{var e;return(e=xl())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Km(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Fa(JSON.stringify(n)),Fa(JSON.stringify(o)),""].join(".")}const Gs={};function Lw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Gs))Gs[e]?t.emulator.push(e):t.prod.push(e);return t}function Vw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Af=!1;function Jm(t,e){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||Gs[t]===e||Gs[t]||Af)return;Gs[t]=e;function n(v){return`__firebase__banner__${v}`}const r="__firebase__banner",s=Lw().prod.length>0;function o(){const v=document.getElementById(r);v&&v.remove()}function a(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,m){v.setAttribute("width","24"),v.setAttribute("id",m),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Af=!0,o()},v}function p(v,m){v.setAttribute("id",m),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=Vw(r),m=n("text"),_=document.getElementById(m)||document.createElement("span"),u=n("learnmore"),C=document.getElementById(u)||document.createElement("a"),x=n("preprendIcon"),A=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const V=v.element;a(V),p(C,u);const M=h();l(A,x),V.append(A,_,C,M),document.body.appendChild(V)}s?(_.innerText="Preview backend disconnected.",A.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(A.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}function Fw(){var e;const t=(e=xl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zw(){const t=Jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jw(){return!Fw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hu(){try{return typeof indexedDB=="object"}catch{return!1}}function Wu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function Qm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qw,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Hw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new On(i,a,r)}}function Hw(t,e){return t.replace(Ww,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ww=/\{\$([^}]+)}/g;function Gw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rf(s)&&Rf(o)){if(!Hr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kw(t,e){const n=new Jw(t,e);return n.subscribe.bind(n)}class Jw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=1e3,Xw=2,Zw=4*60*60*1e3,e2=.5;function Pf(t,e=Yw,n=Xw){const r=e*Math.pow(n,t),i=Math.round(e2*r*(Math.random()-.5)*2);return Math.min(Zw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(r2(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n2(t){return t===ci?void 0:t}function r2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(je||(je={}));const s2={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},o2=je.INFO,a2={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},l2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=a2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kl{constructor(e){this.name=e,this._logLevel=o2,this._logHandler=l2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const c2=(t,e)=>e.some(n=>t instanceof n);let Of,Nf;function u2(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d2(){return Nf||(Nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ym=new WeakMap,Xc=new WeakMap,Xm=new WeakMap,mc=new WeakMap,Gu=new WeakMap;function h2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ym.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function f2(t){if(Xc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xc.set(t,e)}let Zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p2(t){Zc=t(Zc)}function g2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vc(this),e,...n);return Xm.set(r,e.sort?e.sort():[e]),Ur(r)}:d2().includes(t)?function(...e){return t.apply(vc(this),e),Ur(Ym.get(this))}:function(...e){return Ur(t.apply(vc(this),e))}}function m2(t){return typeof t=="function"?g2(t):(t instanceof IDBTransaction&&f2(t),c2(t,u2())?new Proxy(t,Zc):t)}function Ur(t){if(t instanceof IDBRequest)return h2(t);if(mc.has(t))return mc.get(t);const e=m2(t);return e!==t&&(mc.set(t,e),Gu.set(e,t)),e}const vc=t=>Gu.get(t);function Zm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ur(o.result),l.oldVersion,l.newVersion,Ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const v2=["get","getKey","getAll","getAllKeys","count"],y2=["put","add","delete","clear"],yc=new Map;function Df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=y2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return yc.set(e,s),s}p2(t=>({...t,get:(e,n,r)=>Df(e,n)||t.get(e,n,r),has:(e,n)=>!!Df(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(b2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function b2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eu="@firebase/app",Mf="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new kl("@firebase/app"),w2="@firebase/app-compat",E2="@firebase/analytics-compat",I2="@firebase/analytics",C2="@firebase/app-check-compat",x2="@firebase/app-check",k2="@firebase/auth",T2="@firebase/auth-compat",S2="@firebase/database",A2="@firebase/data-connect",R2="@firebase/database-compat",P2="@firebase/functions",O2="@firebase/functions-compat",N2="@firebase/installations",D2="@firebase/installations-compat",M2="@firebase/messaging",L2="@firebase/messaging-compat",V2="@firebase/performance",$2="@firebase/performance-compat",F2="@firebase/remote-config",B2="@firebase/remote-config-compat",U2="@firebase/storage",z2="@firebase/storage-compat",j2="@firebase/firestore",q2="@firebase/ai",H2="@firebase/firestore-compat",W2="firebase",G2="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="[DEFAULT]",K2={[eu]:"fire-core",[w2]:"fire-core-compat",[I2]:"fire-analytics",[E2]:"fire-analytics-compat",[x2]:"fire-app-check",[C2]:"fire-app-check-compat",[k2]:"fire-auth",[T2]:"fire-auth-compat",[S2]:"fire-rtdb",[A2]:"fire-data-connect",[R2]:"fire-rtdb-compat",[P2]:"fire-fn",[O2]:"fire-fn-compat",[N2]:"fire-iid",[D2]:"fire-iid-compat",[M2]:"fire-fcm",[L2]:"fire-fcm-compat",[V2]:"fire-perf",[$2]:"fire-perf-compat",[F2]:"fire-rc",[B2]:"fire-rc-compat",[U2]:"fire-gcs",[z2]:"fire-gcs-compat",[j2]:"fire-fst",[H2]:"fire-fst-compat",[q2]:"fire-vertex","fire-js":"fire-js",[W2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Map,J2=new Map,nu=new Map;function Lf(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hn(t){const e=t.name;if(nu.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;nu.set(e,t);for(const n of Ba.values())Lf(n,t);for(const n of J2.values())Lf(n,t);return!0}function Ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new ki("app","Firebase",Q2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=G2;function ev(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:tu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw zr.create("bad-app-name",{appName:String(i)});if(n||(n=Wm()),!n)throw zr.create("no-options");const s=Ba.get(i);if(s){if(Hr(n,s.options)&&Hr(r,s.config))return s;throw zr.create("duplicate-app",{appName:i})}const o=new i2(i);for(const l of nu.values())o.addComponent(l);const a=new Y2(n,r,o);return Ba.set(i,a),a}function Ku(t=tu){const e=Ba.get(t);if(!e&&t===tu&&Wm())return ev();if(!e)throw zr.create("no-app",{appName:t});return e}function pn(t,e,n){let r=K2[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(o.join(" "));return}Hn(new Pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="firebase-heartbeat-database",Z2=1,ho="firebase-heartbeat-store";let _c=null;function tv(){return _c||(_c=Zm(X2,Z2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),_c}async function eE(t){try{const n=(await tv()).transaction(ho),r=await n.objectStore(ho).get(nv(t));return await n.done,r}catch(e){if(e instanceof On)pr.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function Vf(t,e){try{const r=(await tv()).transaction(ho,"readwrite");await r.objectStore(ho).put(e,nv(t)),await r.done}catch(n){if(n instanceof On)pr.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function nv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=1024,nE=30;class rE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$f();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>nE){const o=oE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$f(),{heartbeatsToSend:r,unsentEntries:i}=iE(this._heartbeatsCache.heartbeats),s=Fa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pr.warn(n),""}}}function $f(){return new Date().toISOString().substring(0,10)}function iE(t,e=tE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ff(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ff(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hu()?Wu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ff(t){return Fa(JSON.stringify({version:2,heartbeats:t})).length}function oE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){Hn(new Pn("platform-logger",e=>new _2(e),"PRIVATE")),Hn(new Pn("heartbeat",e=>new rE(e),"PRIVATE")),pn(eu,Mf,t),pn(eu,Mf,"esm2020"),pn("fire-js","")}aE("");var lE="firebase",cE="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(lE,cE,"app");function rv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uE=rv,iv=new ki("auth","Firebase",rv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new kl("@firebase/auth");function dE(t,...e){Ua.logLevel<=je.WARN&&Ua.warn(`Auth (${ls}): ${t}`,...e)}function wa(t,...e){Ua.logLevel<=je.ERROR&&Ua.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw Qu(t,...e)}function kn(t,...e){return Qu(t,...e)}function Ju(t,e,n){const r={...uE(),[e]:n};return new ki("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return Ju(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&mn(t,"argument-error"),Ju(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iv.create(t,...e)}function De(t,e,...n){if(!t)throw Qu(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wa(e),new Error(e)}function gr(t,e){t||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function fE(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fE()||qu()||"connection"in navigator)?navigator.onLine:!0}function gE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,gr(n>e,"Short delay should be less than long delay!"),this.isMobile=$w()||Uw()}get(){return pE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e){gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yE=new Ro(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _r(t,e,n,r,i={}){return ov(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...s};return Bw()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&as(t.emulatorConfig.host)&&(h.credentials="include"),sv.fetch()(await av(t,t.config.apiHost,n,a),h)})}async function ov(t,e,n){t._canInitEmulator=!1;const r={...mE,...e};try{const i=new bE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw sa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw sa(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ju(t,p,h);mn(t,p)}}catch(i){if(i instanceof On)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function Po(t,e,n,r,i={}){const s=await _r(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function av(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Yu(t.config,i):`${t.config.apiScheme}://${i}`;return vE.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function _E(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),yE.get())})}}function sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(t,e,r);return i.customData._tokenResponse=n,i}function Uf(t){return t!==void 0&&t.enterprise!==void 0}class wE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _E(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function EE(t,e){return _r(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function za(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CE(t,e=!1){const n=$t(t),r=await n.getIdToken(e),i=Xu(r);De(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ks(bc(i.auth_time)),issuedAtTime:Ks(bc(i.iat)),expirationTime:Ks(bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function Xu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=qm(n);return i?JSON.parse(i):(wa("Failed to decode base64 JWT payload"),null)}catch(i){return wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zf(t){const e=Xu(t);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&xE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t){var g;const e=t.auth,n=await t.getIdToken(),r=await fo(t,za(e,{idToken:n}));De(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(g=i.providerUserInfo)!=null&&g.length?lv(i.providerUserInfo):[],o=SE(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=a?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new iu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function TE(t){const e=$t(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(t,e){const n=await ov(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await av(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&as(t.emulatorConfig.host)&&(l.credentials="include"),sv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RE(t,e){return _r(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){De(e.length!==0,"internal-error");const n=zf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await AE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(De(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(De(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(De(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){De(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new kE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new iu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fo(this,this.stsTokenManager.getToken(this.auth,e));return De(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CE(this,e)}reload(){return TE(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await fo(this,IE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:m,providerData:_,stsTokenManager:u}=n;De(g&&u,e,"internal-error");const C=ji.fromJSON(this.name,u);De(typeof g=="string",e,"internal-error"),Pr(r,e.name),Pr(i,e.name),De(typeof v=="boolean",e,"internal-error"),De(typeof m=="boolean",e,"internal-error"),Pr(s,e.name),Pr(o,e.name),Pr(a,e.name),Pr(l,e.name),Pr(h,e.name),Pr(p,e.name);const x=new In({uid:g,auth:e,email:i,emailVerified:v,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:C,createdAt:h,lastLoginAt:p});return _&&Array.isArray(_)&&(x.providerData=_.map(A=>({...A}))),l&&(x._redirectEventId=l),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new In({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ja(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];De(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ji;a.updateFromIdToken(r);const l=new In({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new iu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map;function sr(t){gr(t instanceof Function,"Expected a class definition");let e=jf.get(t);return e?(gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cv.type="NONE";const qf=cv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ea(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ea("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await za(this.auth,{idToken:e}).catch(()=>{});return n?In._fromGetAccountInfoResponse(this.auth,n,e):null}return In._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(sr(qf),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||sr(qf);const o=Ea(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const p=await h._get(o);if(p){let g;if(typeof p=="string"){const v=await za(e,{idToken:p}).catch(()=>{});if(!v)break;g=await In._fromGetAccountInfoResponse(e,v,p)}else g=In._fromJSON(e,p);h!==s&&(a=g),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new qi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gv(e))return"Blackberry";if(mv(e))return"Webos";if(dv(e))return"Safari";if((e.includes("chrome/")||hv(e))&&!e.includes("edge/"))return"Chrome";if(pv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uv(t=Jt()){return/firefox\//i.test(t)}function dv(t=Jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hv(t=Jt()){return/crios\//i.test(t)}function fv(t=Jt()){return/iemobile/i.test(t)}function pv(t=Jt()){return/android/i.test(t)}function gv(t=Jt()){return/blackberry/i.test(t)}function mv(t=Jt()){return/webos/i.test(t)}function Zu(t=Jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PE(t=Jt()){var e;return Zu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function OE(){return zw()&&document.documentMode===10}function vv(t=Jt()){return Zu(t)||pv(t)||mv(t)||gv(t)||/windows phone/i.test(t)||fv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t,e=[]){let n;switch(t){case"Browser":n=Hf(Jt());break;case"Worker":n=`${Hf(Jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(t,e={}){return _r(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=6;class LE{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ME,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wf(this),this.idTokenSubscription=new Wf(this),this.beforeStateQueue=new NE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await za(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(lr(this));const n=e?$t(e):null;return n&&De(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DE(this),n=new LE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;De(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(on(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&dE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yr(t){return $t(t)}class Wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kw(n=>this.observer=n)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $E(t){Tl=t}function _v(t){return Tl.loadJS(t)}function FE(){return Tl.recaptchaEnterpriseScript}function BE(){return Tl.gapiScript}function UE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zE{constructor(){this.enterprise=new jE}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class jE{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qE="recaptcha-enterprise",bv="NO_RECAPTCHA";class HE{constructor(e){this.type=qE,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{EE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new wE(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Uf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(bv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zE().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Uf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FE();l.length!==0&&(l+=a),_v(l).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function Gf(t,e,n,r=!1,i=!1){const s=new HE(t);let o;if(i)o=bv;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function su(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Gf(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t,e){const n=Ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hr(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function GE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KE(t,e,n){const r=Yr(t);De(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=wv(e),{host:o,port:a}=JE(e),l=a===null?"":`:${a}`,h={url:`${s}//${o}${l}/`},p=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){De(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),De(Hr(h,r.config.emulator)&&Hr(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,as(o)?(Km(`${s}//${o}${l}`),Jm("Auth",!0)):QE()}function wv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JE(t){const e=wv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kf(o)}}}function Kf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}async function YE(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(t,e){return Po(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}async function ZE(t,e){return _r(t,"POST","/v1/accounts:sendOobCode",yr(t,e))}async function eI(t,e){return ZE(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function nI(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends ed{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return su(e,n,"signInWithPassword",XE);case"emailLink":return tI(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return su(e,r,"signUpPassword",YE);case"emailLink":return nI(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e){return Po(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="http://localhost";class mr extends ed{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hi(e,n)}buildRequest(){const e={requestUri:rI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sI(t){const e=Ns(Ds(t)).link,n=e?Ns(Ds(e)).deep_link_id:null,r=Ns(Ds(t)).deep_link_id;return(r?Ns(Ds(r)).link:null)||r||n||e||t}class td{constructor(e){const n=Ns(Ds(e)),r=n.apiKey??null,i=n.oobCode??null,s=iI(n.mode??null);De(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=sI(e);try{return new td(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=td.parseLink(n);return De(r,"argument-error"),po._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends nd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Js extends us{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return De("providerId"in n&&"signInMethod"in n,"argument-error"),mr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return De(e.idToken||e.accessToken,"argument-error"),mr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Js.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Js.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Js(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends us{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends us{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends us{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e){return Po(t,"POST","/v1/accounts:signUp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await In._fromIdTokenResponse(e,r,i),o=Jf(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jf(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends On{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function Ev(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function aI(t,e,n=!1){const r=await fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(lr(r));const i="reauthenticate";try{const s=await fo(t,Ev(r,i,e,t),n);De(s.idToken,r,"internal-error");const o=Xu(s.idToken);De(o,r,"internal-error");const{sub:a}=o;return De(t.uid===a,r,"user-mismatch"),_i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(t,e,n=!1){if(on(t.app))return Promise.reject(lr(t));const r="signIn",i=await Ev(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cI(t,e){return Iv(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uI(t,e,n){if(on(t.app))return Promise.reject(lr(t));const r=Yr(t),o=await su(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Cv(t),l}),a=await _i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function dI(t,e,n){return on(t.app)?Promise.reject(lr(t)):cI($t(t),cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cv(t),r})}async function Qf(t,e){const n=$t(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await eI(n.auth,i);s!==t.email&&await t.reload()}function hI(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function fI(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}function pI(t,e,n,r){return $t(t).onAuthStateChanged(e,n,r)}function gI(t){return $t(t).signOut()}const Ha="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ha,"1"),this.storage.removeItem(Ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=1e3,vI=10;class kv extends xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kv.type="LOCAL";const yI=kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv extends xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tv.type="SESSION";const Sv=Tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),l=await _I(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const h=rd("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(v.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function wI(t){jn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function EI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function II(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function CI(){return Av()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firebaseLocalStorageDb",xI=1,Wa="firebaseLocalStorage",Pv="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([Wa],e?"readwrite":"readonly").objectStore(Wa)}function kI(){const t=indexedDB.deleteDatabase(Rv);return new Oo(t).toPromise()}function ou(){const t=indexedDB.open(Rv,xI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wa,{keyPath:Pv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wa)?e(r):(r.close(),await kI(),e(await ou()))})})}async function Yf(t,e,n){const r=Al(t,!0).put({[Pv]:e,value:n});return new Oo(r).toPromise()}async function TI(t,e){const n=Al(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function Xf(t,e){const n=Al(t,!0).delete(e);return new Oo(n).toPromise()}const SI=800,AI=3;class Ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ou(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sl._getInstance(CI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await EI(),!this.activeServiceWorker)return;this.sender=new bI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||II()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ou();return await Yf(e,Ha,"1"),await Xf(e,Ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Al(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ov.type="LOCAL";const RI=Ov;new Ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t,e){return e?sr(e):(De(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends ed{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PI(t){return Iv(t.auth,new id(t),t.bypassAuthState)}function OI(t){const{auth:e,user:n}=t;return De(n,e,"internal-error"),lI(n,new id(t),t.bypassAuthState)}async function NI(t){const{auth:e,user:n}=t;return De(n,e,"internal-error"),aI(n,new id(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PI;case"linkViaPopup":case"linkViaRedirect":return NI;case"reauthViaPopup":case"reauthViaRedirect":return OI;default:mn(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new Ro(2e3,1e4);async function Zf(t,e,n){if(on(t.app))return Promise.reject(kn(t,"operation-not-supported-in-this-environment"));const r=Yr(t);hE(t,e,nd);const i=Nv(r,n);return new hi(r,"signInViaPopup",e,i).executeNotNull()}class hi extends Dv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return De(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DI.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="pendingRedirect",Ia=new Map;class LI extends Dv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ia.get(this.auth._key());if(!e){try{const r=await VI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ia.set(this.auth._key(),e)}return this.bypassAuthState||Ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VI(t,e){const n=BI(e),r=FI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $I(t,e){Ia.set(t._key(),e)}function FI(t){return sr(t._redirectPersistence)}function BI(t){return Ea(MI,t.config.apiKey,t.name)}async function UI(t,e,n=!1){if(on(t.app))return Promise.reject(lr(t));const r=Yr(t),i=Nv(r,e),o=await new LI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=10*60*1e3;class jI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mv(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(e))}saveEventToCache(e){this.cachedEventUids.add(ep(e)),this.lastProcessedEventTime=Date.now()}}function ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GI=/^https?/;async function KI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HI(t);for(const n of e)try{if(JI(n))return}catch{}mn(t,"unauthorized-domain")}function JI(t){const e=ru(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GI.test(n))return!1;if(WI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new Ro(3e4,6e4);function tp(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YI(t){return new Promise((e,n)=>{var i,s,o;function r(){tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(kn(t,"network-request-failed"))},timeout:QI.get()})}if((s=(i=jn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=jn().gapi)!=null&&o.load)r();else{const a=UE("iframefcb");return jn()[a]=()=>{gapi.load?r():n(kn(t,"network-request-failed"))},_v(`${BE()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ca=null,e})}let Ca=null;function XI(t){return Ca=Ca||YI(t),Ca}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new Ro(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iC(t){const e=t.config;De(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yu(e,tC):`https://${t.config.authDomain}/${eC}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=rC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ao(r).slice(1)}`}async function sC(t){const e=await XI(t),n=jn().gapi;return De(n,t,"internal-error"),e.open({where:document.body,url:iC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=jn().setTimeout(()=>{s(o)},ZI.get());function l(){jn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aC=500,lC=600,cC="_blank",uC="http://localhost";class np{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dC(t,e,n,r=aC,i=lC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...oC,width:r.toString(),height:i.toString(),top:s,left:o},h=Jt().toLowerCase();n&&(a=hv(h)?cC:n),uv(h)&&(e=e||uC,l.scrollbars="yes");const p=Object.entries(l).reduce((v,[m,_])=>`${v}${m}=${_},`,"");if(PE(h)&&a!=="_self")return hC(e||"",a),new np(null);const g=window.open(e||"",a,p);De(g,t,"popup-blocked");try{g.focus()}catch{}return new np(g)}function hC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="__/auth/handler",pC="emulator/auth/handler",gC=encodeURIComponent("fac");async function rp(t,e,n,r,i,s){De(t.config.authDomain,t,"auth-domain-config-required"),De(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof nd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof us){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await t._getAppCheckToken(),h=l?`#${gC}=${encodeURIComponent(l)}`:"";return`${mC(t)}?${Ao(a).slice(1)}${h}`}function mC({config:t}){return t.emulator?Yu(t,pC):`https://${t.authDomain}/${fC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class vC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sv,this._completeRedirectFn=UI,this._overrideRedirectResult=$I}async _openPopup(e,n,r,i){var o;gr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await rp(e,n,r,ru(),i);return dC(e,s,rd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rp(e,n,r,ru(),i);return wI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sC(e),r=new jI(e);return n.register("authEvent",i=>(De(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[wc];s!==void 0&&n(!!s),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vv()||dv()||Zu()}}const yC=vC;var ip="@firebase/auth",sp="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wC(t){Hn(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;De(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yv(t)},h=new VE(r,i,s,l);return GE(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hn(new Pn("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new _C(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(ip,sp,bC(t)),pn(ip,sp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=5*60,IC=Gm("authIdTokenMaxAge")||EC;let op=null;const CC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IC)return;const i=n==null?void 0:n.token;op!==i&&(op=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xC(t=Ku()){const e=Ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WE(t,{popupRedirectResolver:yC,persistence:[RI,yI,Sv]}),r=Gm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=CC(s.toString());fI(n,o,()=>o(n.currentUser)),hI(n,a=>o(a))}}const i=Hm("auth");return i&&KE(n,`http://${i}`),n}function kC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}$E({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wC("Browser");var ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sd;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,b){function w(){}w.prototype=b.prototype,I.F=b.prototype,I.prototype=new w,I.prototype.constructor=I,I.D=function(P,D,E){for(var R=Array(arguments.length-2),S=2;S<arguments.length;S++)R[S-2]=arguments[S];return b.prototype[D].apply(P,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,b,w){w||(w=0);const P=Array(16);if(typeof b=="string")for(var D=0;D<16;++D)P[D]=b.charCodeAt(w++)|b.charCodeAt(w++)<<8|b.charCodeAt(w++)<<16|b.charCodeAt(w++)<<24;else for(D=0;D<16;++D)P[D]=b[w++]|b[w++]<<8|b[w++]<<16|b[w++]<<24;b=I.g[0],w=I.g[1],D=I.g[2];let E=I.g[3],R;R=b+(E^w&(D^E))+P[0]+3614090360&4294967295,b=w+(R<<7&4294967295|R>>>25),R=E+(D^b&(w^D))+P[1]+3905402710&4294967295,E=b+(R<<12&4294967295|R>>>20),R=D+(w^E&(b^w))+P[2]+606105819&4294967295,D=E+(R<<17&4294967295|R>>>15),R=w+(b^D&(E^b))+P[3]+3250441966&4294967295,w=D+(R<<22&4294967295|R>>>10),R=b+(E^w&(D^E))+P[4]+4118548399&4294967295,b=w+(R<<7&4294967295|R>>>25),R=E+(D^b&(w^D))+P[5]+1200080426&4294967295,E=b+(R<<12&4294967295|R>>>20),R=D+(w^E&(b^w))+P[6]+2821735955&4294967295,D=E+(R<<17&4294967295|R>>>15),R=w+(b^D&(E^b))+P[7]+4249261313&4294967295,w=D+(R<<22&4294967295|R>>>10),R=b+(E^w&(D^E))+P[8]+1770035416&4294967295,b=w+(R<<7&4294967295|R>>>25),R=E+(D^b&(w^D))+P[9]+2336552879&4294967295,E=b+(R<<12&4294967295|R>>>20),R=D+(w^E&(b^w))+P[10]+4294925233&4294967295,D=E+(R<<17&4294967295|R>>>15),R=w+(b^D&(E^b))+P[11]+2304563134&4294967295,w=D+(R<<22&4294967295|R>>>10),R=b+(E^w&(D^E))+P[12]+1804603682&4294967295,b=w+(R<<7&4294967295|R>>>25),R=E+(D^b&(w^D))+P[13]+4254626195&4294967295,E=b+(R<<12&4294967295|R>>>20),R=D+(w^E&(b^w))+P[14]+2792965006&4294967295,D=E+(R<<17&4294967295|R>>>15),R=w+(b^D&(E^b))+P[15]+1236535329&4294967295,w=D+(R<<22&4294967295|R>>>10),R=b+(D^E&(w^D))+P[1]+4129170786&4294967295,b=w+(R<<5&4294967295|R>>>27),R=E+(w^D&(b^w))+P[6]+3225465664&4294967295,E=b+(R<<9&4294967295|R>>>23),R=D+(b^w&(E^b))+P[11]+643717713&4294967295,D=E+(R<<14&4294967295|R>>>18),R=w+(E^b&(D^E))+P[0]+3921069994&4294967295,w=D+(R<<20&4294967295|R>>>12),R=b+(D^E&(w^D))+P[5]+3593408605&4294967295,b=w+(R<<5&4294967295|R>>>27),R=E+(w^D&(b^w))+P[10]+38016083&4294967295,E=b+(R<<9&4294967295|R>>>23),R=D+(b^w&(E^b))+P[15]+3634488961&4294967295,D=E+(R<<14&4294967295|R>>>18),R=w+(E^b&(D^E))+P[4]+3889429448&4294967295,w=D+(R<<20&4294967295|R>>>12),R=b+(D^E&(w^D))+P[9]+568446438&4294967295,b=w+(R<<5&4294967295|R>>>27),R=E+(w^D&(b^w))+P[14]+3275163606&4294967295,E=b+(R<<9&4294967295|R>>>23),R=D+(b^w&(E^b))+P[3]+4107603335&4294967295,D=E+(R<<14&4294967295|R>>>18),R=w+(E^b&(D^E))+P[8]+1163531501&4294967295,w=D+(R<<20&4294967295|R>>>12),R=b+(D^E&(w^D))+P[13]+2850285829&4294967295,b=w+(R<<5&4294967295|R>>>27),R=E+(w^D&(b^w))+P[2]+4243563512&4294967295,E=b+(R<<9&4294967295|R>>>23),R=D+(b^w&(E^b))+P[7]+1735328473&4294967295,D=E+(R<<14&4294967295|R>>>18),R=w+(E^b&(D^E))+P[12]+2368359562&4294967295,w=D+(R<<20&4294967295|R>>>12),R=b+(w^D^E)+P[5]+4294588738&4294967295,b=w+(R<<4&4294967295|R>>>28),R=E+(b^w^D)+P[8]+2272392833&4294967295,E=b+(R<<11&4294967295|R>>>21),R=D+(E^b^w)+P[11]+1839030562&4294967295,D=E+(R<<16&4294967295|R>>>16),R=w+(D^E^b)+P[14]+4259657740&4294967295,w=D+(R<<23&4294967295|R>>>9),R=b+(w^D^E)+P[1]+2763975236&4294967295,b=w+(R<<4&4294967295|R>>>28),R=E+(b^w^D)+P[4]+1272893353&4294967295,E=b+(R<<11&4294967295|R>>>21),R=D+(E^b^w)+P[7]+4139469664&4294967295,D=E+(R<<16&4294967295|R>>>16),R=w+(D^E^b)+P[10]+3200236656&4294967295,w=D+(R<<23&4294967295|R>>>9),R=b+(w^D^E)+P[13]+681279174&4294967295,b=w+(R<<4&4294967295|R>>>28),R=E+(b^w^D)+P[0]+3936430074&4294967295,E=b+(R<<11&4294967295|R>>>21),R=D+(E^b^w)+P[3]+3572445317&4294967295,D=E+(R<<16&4294967295|R>>>16),R=w+(D^E^b)+P[6]+76029189&4294967295,w=D+(R<<23&4294967295|R>>>9),R=b+(w^D^E)+P[9]+3654602809&4294967295,b=w+(R<<4&4294967295|R>>>28),R=E+(b^w^D)+P[12]+3873151461&4294967295,E=b+(R<<11&4294967295|R>>>21),R=D+(E^b^w)+P[15]+530742520&4294967295,D=E+(R<<16&4294967295|R>>>16),R=w+(D^E^b)+P[2]+3299628645&4294967295,w=D+(R<<23&4294967295|R>>>9),R=b+(D^(w|~E))+P[0]+4096336452&4294967295,b=w+(R<<6&4294967295|R>>>26),R=E+(w^(b|~D))+P[7]+1126891415&4294967295,E=b+(R<<10&4294967295|R>>>22),R=D+(b^(E|~w))+P[14]+2878612391&4294967295,D=E+(R<<15&4294967295|R>>>17),R=w+(E^(D|~b))+P[5]+4237533241&4294967295,w=D+(R<<21&4294967295|R>>>11),R=b+(D^(w|~E))+P[12]+1700485571&4294967295,b=w+(R<<6&4294967295|R>>>26),R=E+(w^(b|~D))+P[3]+2399980690&4294967295,E=b+(R<<10&4294967295|R>>>22),R=D+(b^(E|~w))+P[10]+4293915773&4294967295,D=E+(R<<15&4294967295|R>>>17),R=w+(E^(D|~b))+P[1]+2240044497&4294967295,w=D+(R<<21&4294967295|R>>>11),R=b+(D^(w|~E))+P[8]+1873313359&4294967295,b=w+(R<<6&4294967295|R>>>26),R=E+(w^(b|~D))+P[15]+4264355552&4294967295,E=b+(R<<10&4294967295|R>>>22),R=D+(b^(E|~w))+P[6]+2734768916&4294967295,D=E+(R<<15&4294967295|R>>>17),R=w+(E^(D|~b))+P[13]+1309151649&4294967295,w=D+(R<<21&4294967295|R>>>11),R=b+(D^(w|~E))+P[4]+4149444226&4294967295,b=w+(R<<6&4294967295|R>>>26),R=E+(w^(b|~D))+P[11]+3174756917&4294967295,E=b+(R<<10&4294967295|R>>>22),R=D+(b^(E|~w))+P[2]+718787259&4294967295,D=E+(R<<15&4294967295|R>>>17),R=w+(E^(D|~b))+P[9]+3951481745&4294967295,I.g[0]=I.g[0]+b&4294967295,I.g[1]=I.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+D&4294967295,I.g[3]=I.g[3]+E&4294967295}r.prototype.v=function(I,b){b===void 0&&(b=I.length);const w=b-this.blockSize,P=this.C;let D=this.h,E=0;for(;E<b;){if(D==0)for(;E<=w;)i(this,I,E),E+=this.blockSize;if(typeof I=="string"){for(;E<b;)if(P[D++]=I.charCodeAt(E++),D==this.blockSize){i(this,P),D=0;break}}else for(;E<b;)if(P[D++]=I[E++],D==this.blockSize){i(this,P),D=0;break}}this.h=D,this.o+=b},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var b=1;b<I.length-8;++b)I[b]=0;b=this.o*8;for(var w=I.length-8;w<I.length;++w)I[w]=b&255,b/=256;for(this.v(I),I=Array(16),b=0,w=0;w<4;++w)for(let P=0;P<32;P+=8)I[b++]=this.g[w]>>>P&255;return I};function s(I,b){var w=a;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=b(I)}function o(I,b){this.h=b;const w=[];let P=!0;for(let D=I.length-1;D>=0;D--){const E=I[D]|0;P&&E==b||(w[D]=E,P=!1)}this.g=w}var a={};function l(I){return-128<=I&&I<128?s(I,function(b){return new o([b|0],b<0?-1:0)}):new o([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return C(h(-I));const b=[];let w=1;for(let P=0;I>=w;P++)b[P]=I/w|0,w*=4294967296;return new o(b,0)}function p(I,b){if(I.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(I.charAt(0)=="-")return C(p(I.substring(1),b));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(b,8));let P=g;for(let E=0;E<I.length;E+=8){var D=Math.min(8,I.length-E);const R=parseInt(I.substring(E,E+D),b);D<8?(D=h(Math.pow(b,D)),P=P.j(D).add(h(R))):(P=P.j(w),P=P.add(h(R)))}return P}var g=l(0),v=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(u(this))return-C(this).m();let I=0,b=1;for(let w=0;w<this.g.length;w++){const P=this.i(w);I+=(P>=0?P:4294967296+P)*b,b*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(_(this))return"0";if(u(this))return"-"+C(this).toString(I);const b=h(Math.pow(I,6));var w=this;let P="";for(;;){const D=M(w,b).g;w=x(w,D.j(b));let E=((w.g.length>0?w.g[0]:w.h)>>>0).toString(I);if(w=D,_(w))return E+P;for(;E.length<6;)E="0"+E;P=E+P}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function _(I){if(I.h!=0)return!1;for(let b=0;b<I.g.length;b++)if(I.g[b]!=0)return!1;return!0}function u(I){return I.h==-1}t.l=function(I){return I=x(this,I),u(I)?-1:_(I)?0:1};function C(I){const b=I.g.length,w=[];for(let P=0;P<b;P++)w[P]=~I.g[P];return new o(w,~I.h).add(v)}t.abs=function(){return u(this)?C(this):this},t.add=function(I){const b=Math.max(this.g.length,I.g.length),w=[];let P=0;for(let D=0;D<=b;D++){let E=P+(this.i(D)&65535)+(I.i(D)&65535),R=(E>>>16)+(this.i(D)>>>16)+(I.i(D)>>>16);P=R>>>16,E&=65535,R&=65535,w[D]=R<<16|E}return new o(w,w[w.length-1]&-2147483648?-1:0)};function x(I,b){return I.add(C(b))}t.j=function(I){if(_(this)||_(I))return g;if(u(this))return u(I)?C(this).j(C(I)):C(C(this).j(I));if(u(I))return C(this.j(C(I)));if(this.l(m)<0&&I.l(m)<0)return h(this.m()*I.m());const b=this.g.length+I.g.length,w=[];for(var P=0;P<2*b;P++)w[P]=0;for(P=0;P<this.g.length;P++)for(let D=0;D<I.g.length;D++){const E=this.i(P)>>>16,R=this.i(P)&65535,S=I.i(D)>>>16,J=I.i(D)&65535;w[2*P+2*D]+=R*J,A(w,2*P+2*D),w[2*P+2*D+1]+=E*J,A(w,2*P+2*D+1),w[2*P+2*D+1]+=R*S,A(w,2*P+2*D+1),w[2*P+2*D+2]+=E*S,A(w,2*P+2*D+2)}for(I=0;I<b;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=b;I<2*b;I++)w[I]=0;return new o(w,0)};function A(I,b){for(;(I[b]&65535)!=I[b];)I[b+1]+=I[b]>>>16,I[b]&=65535,b++}function V(I,b){this.g=I,this.h=b}function M(I,b){if(_(b))throw Error("division by zero");if(_(I))return new V(g,g);if(u(I))return b=M(C(I),b),new V(C(b.g),C(b.h));if(u(b))return b=M(I,C(b)),new V(C(b.g),b.h);if(I.g.length>30){if(u(I)||u(b))throw Error("slowDivide_ only works with positive integers.");for(var w=v,P=b;P.l(I)<=0;)w=F(w),P=F(P);var D=L(w,1),E=L(P,1);for(P=L(P,2),w=L(w,2);!_(P);){var R=E.add(P);R.l(I)<=0&&(D=D.add(w),E=R),P=L(P,1),w=L(w,1)}return b=x(I,D.j(b)),new V(D,b)}for(D=g;I.l(b)>=0;){for(w=Math.max(1,Math.floor(I.m()/b.m())),P=Math.ceil(Math.log(w)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),E=h(w),R=E.j(b);u(R)||R.l(I)>0;)w-=P,E=h(w),R=E.j(b);_(E)&&(E=v),D=D.add(E),I=x(I,R)}return new V(D,I)}t.B=function(I){return M(this,I).h},t.and=function(I){const b=Math.max(this.g.length,I.g.length),w=[];for(let P=0;P<b;P++)w[P]=this.i(P)&I.i(P);return new o(w,this.h&I.h)},t.or=function(I){const b=Math.max(this.g.length,I.g.length),w=[];for(let P=0;P<b;P++)w[P]=this.i(P)|I.i(P);return new o(w,this.h|I.h)},t.xor=function(I){const b=Math.max(this.g.length,I.g.length),w=[];for(let P=0;P<b;P++)w[P]=this.i(P)^I.i(P);return new o(w,this.h^I.h)};function F(I){const b=I.g.length+1,w=[];for(let P=0;P<b;P++)w[P]=I.i(P)<<1|I.i(P-1)>>>31;return new o(w,I.h)}function L(I,b){const w=b>>5;b%=32;const P=I.g.length-w,D=[];for(let E=0;E<P;E++)D[E]=b>0?I.i(E+w)>>>b|I.i(E+w+1)<<32-b:I.i(E+w);return new o(D,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,sd=o}).apply(typeof ap<"u"?ap:typeof self<"u"?self:typeof window<"u"?window:{});var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lv,Ms,Vv,xa,au,$v,Fv,Bv;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof oa=="object"&&oa];for(var y=0;y<c.length;++y){var k=c[y];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var r=n(this);function i(c,y){if(y)e:{var k=r;c=c.split(".");for(var U=0;U<c.length-1;U++){var ie=c[U];if(!(ie in k))break e;k=k[ie]}c=c[c.length-1],U=k[c],y=y(U),y!=U&&y!=null&&e(k,c,{configurable:!0,writable:!0,value:y})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(y){var k=[],U;for(U in y)Object.prototype.hasOwnProperty.call(y,U)&&k.push([U,y[U]]);return k}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function l(c,y,k){return c.call.apply(c.bind,arguments)}function h(c,y,k){return h=l,h.apply(null,arguments)}function p(c,y){var k=Array.prototype.slice.call(arguments,1);return function(){var U=k.slice();return U.push.apply(U,arguments),c.apply(this,U)}}function g(c,y){function k(){}k.prototype=y.prototype,c.Z=y.prototype,c.prototype=new k,c.prototype.constructor=c,c.Ob=function(U,ie,ce){for(var Ce=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Ce[Fe-2]=arguments[Fe];return y.prototype[ie].apply(U,Ce)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function m(c){const y=c.length;if(y>0){const k=Array(y);for(let U=0;U<y;U++)k[U]=c[U];return k}return[]}function _(c,y){for(let U=1;U<arguments.length;U++){const ie=arguments[U];var k=typeof ie;if(k=k!="object"?k:ie?Array.isArray(ie)?"array":k:"null",k=="array"||k=="object"&&typeof ie.length=="number"){k=c.length||0;const ce=ie.length||0;c.length=k+ce;for(let Ce=0;Ce<ce;Ce++)c[k+Ce]=ie[Ce]}else c.push(ie)}}class u{constructor(y,k){this.i=y,this.j=k,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function C(c){o.setTimeout(()=>{throw c},0)}function x(){var c=I;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class A{constructor(){this.h=this.g=null}add(y,k){const U=V.get();U.set(y,k),this.h?this.h.next=U:this.g=U,this.h=U}}var V=new u(()=>new M,c=>c.reset());class M{constructor(){this.next=this.g=this.h=null}set(y,k){this.h=y,this.g=k,this.next=null}reset(){this.next=this.g=this.h=null}}let F,L=!1,I=new A,b=()=>{const c=Promise.resolve(void 0);F=()=>{c.then(w)}};function w(){for(var c;c=x();){try{c.h.call(c.g)}catch(k){C(k)}var y=V;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}L=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var E=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const k=()=>{};o.addEventListener("test",k,y),o.removeEventListener("test",k,y)}catch{}return c}();function R(c){return/^[\s\xa0]*$/.test(c)}function S(c,y){D.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}g(S,D),S.prototype.init=function(c,y){const k=this.type=c.type,U=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(k=="mouseover"?y=c.fromElement:k=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,U?(this.clientX=U.clientX!==void 0?U.clientX:U.pageX,this.clientY=U.clientY!==void 0?U.clientY:U.pageY,this.screenX=U.screenX||0,this.screenY=U.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&S.Z.h.call(this)},S.prototype.h=function(){S.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var J="closure_listenable_"+(Math.random()*1e6|0),ae=0;function z(c,y,k,U,ie){this.listener=c,this.proxy=null,this.src=y,this.type=k,this.capture=!!U,this.ha=ie,this.key=++ae,this.da=this.fa=!1}function de(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function se(c,y,k){for(const U in c)y.call(k,c[U],U,c)}function Ie(c,y){for(const k in c)y.call(void 0,c[k],k,c)}function te(c){const y={};for(const k in c)y[k]=c[k];return y}const Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(c,y){let k,U;for(let ie=1;ie<arguments.length;ie++){U=arguments[ie];for(k in U)c[k]=U[k];for(let ce=0;ce<Z.length;ce++)k=Z[ce],Object.prototype.hasOwnProperty.call(U,k)&&(c[k]=U[k])}}function ve(c){this.src=c,this.g={},this.h=0}ve.prototype.add=function(c,y,k,U,ie){const ce=c.toString();c=this.g[ce],c||(c=this.g[ce]=[],this.h++);const Ce=_e(c,y,U,ie);return Ce>-1?(y=c[Ce],k||(y.fa=!1)):(y=new z(y,this.src,ce,!!U,ie),y.fa=k,c.push(y)),y};function X(c,y){const k=y.type;if(k in c.g){var U=c.g[k],ie=Array.prototype.indexOf.call(U,y,void 0),ce;(ce=ie>=0)&&Array.prototype.splice.call(U,ie,1),ce&&(de(y),c.g[k].length==0&&(delete c.g[k],c.h--))}}function _e(c,y,k,U){for(let ie=0;ie<c.length;++ie){const ce=c[ie];if(!ce.da&&ce.listener==y&&ce.capture==!!k&&ce.ha==U)return ie}return-1}var re="closure_lm_"+(Math.random()*1e6|0),ue={};function he(c,y,k,U,ie){if(Array.isArray(y)){for(let ce=0;ce<y.length;ce++)he(c,y[ce],k,U,ie);return null}return k=N(k),c&&c[J]?c.J(y,k,a(U)?!!U.capture:!1,ie):ye(c,y,k,!1,U,ie)}function ye(c,y,k,U,ie,ce){if(!y)throw Error("Invalid event type");const Ce=a(ie)?!!ie.capture:!!ie;let Fe=$(c);if(Fe||(c[re]=Fe=new ve(c)),k=Fe.add(y,k,U,Ce,ce),k.proxy)return k;if(U=ke(),k.proxy=U,U.src=c,U.listener=k,c.addEventListener)E||(ie=Ce),ie===void 0&&(ie=!1),c.addEventListener(y.toString(),U,ie);else if(c.attachEvent)c.attachEvent(f(y.toString()),U);else if(c.addListener&&c.removeListener)c.addListener(U);else throw Error("addEventListener and attachEvent are unavailable.");return k}function ke(){function c(k){return y.call(c.src,c.listener,k)}const y=G;return c}function q(c,y,k,U,ie){if(Array.isArray(y))for(var ce=0;ce<y.length;ce++)q(c,y[ce],k,U,ie);else U=a(U)?!!U.capture:!!U,k=N(k),c&&c[J]?(c=c.i,ce=String(y).toString(),ce in c.g&&(y=c.g[ce],k=_e(y,k,U,ie),k>-1&&(de(y[k]),Array.prototype.splice.call(y,k,1),y.length==0&&(delete c.g[ce],c.h--)))):c&&(c=$(c))&&(y=c.g[y.toString()],c=-1,y&&(c=_e(y,k,U,ie)),(k=c>-1?y[c]:null)&&B(k))}function B(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[J])X(y.i,c);else{var k=c.type,U=c.proxy;y.removeEventListener?y.removeEventListener(k,U,c.capture):y.detachEvent?y.detachEvent(f(k),U):y.addListener&&y.removeListener&&y.removeListener(U),(k=$(y))?(X(k,c),k.h==0&&(k.src=null,y[re]=null)):de(c)}}}function f(c){return c in ue?ue[c]:ue[c]="on"+c}function G(c,y){if(c.da)c=!0;else{y=new S(y,this);const k=c.listener,U=c.ha||c.src;c.fa&&B(c),c=k.call(U,y)}return c}function $(c){return c=c[re],c instanceof ve?c:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function N(c){return typeof c=="function"?c:(c[O]||(c[O]=function(y){return c.handleEvent(y)}),c[O])}function H(){P.call(this),this.i=new ve(this),this.M=this,this.G=null}g(H,P),H.prototype[J]=!0,H.prototype.removeEventListener=function(c,y,k,U){q(this,c,y,k,U)};function j(c,y){var k,U=c.G;if(U)for(k=[];U;U=U.G)k.push(U);if(c=c.M,U=y.type||y,typeof y=="string")y=new D(y,c);else if(y instanceof D)y.target=y.target||c;else{var ie=y;y=new D(U,c),we(y,ie)}ie=!0;let ce,Ce;if(k)for(Ce=k.length-1;Ce>=0;Ce--)ce=y.g=k[Ce],ie=T(ce,U,!0,y)&&ie;if(ce=y.g=c,ie=T(ce,U,!0,y)&&ie,ie=T(ce,U,!1,y)&&ie,k)for(Ce=0;Ce<k.length;Ce++)ce=y.g=k[Ce],ie=T(ce,U,!1,y)&&ie}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const k=c.g[y];for(let U=0;U<k.length;U++)de(k[U]);delete c.g[y],c.h--}}this.G=null},H.prototype.J=function(c,y,k,U){return this.i.add(String(c),y,!1,k,U)},H.prototype.K=function(c,y,k,U){return this.i.add(String(c),y,!0,k,U)};function T(c,y,k,U){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let ie=!0;for(let ce=0;ce<y.length;++ce){const Ce=y[ce];if(Ce&&!Ce.da&&Ce.capture==k){const Fe=Ce.listener,Ct=Ce.ha||Ce.src;Ce.fa&&X(c.i,Ce),ie=Fe.call(Ct,U)!==!1&&ie}}return ie&&!U.defaultPrevented}function W(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=h(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:o.setTimeout(c,y||0)}function Y(c){c.g=W(()=>{c.g=null,c.i&&(c.i=!1,Y(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class ne extends P{constructor(y,k){super(),this.m=y,this.l=k,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function le(c){P.call(this),this.h=c,this.g={}}g(le,P);var me=[];function Se(c){se(c.g,function(y,k){this.g.hasOwnProperty(k)&&B(y)},c),c.g={}}le.prototype.N=function(){le.Z.N.call(this),Se(this)},le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oe=o.JSON.stringify,$e=o.JSON.parse,Je=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function We(){}function pt(){}var ze={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function tn(){D.call(this,"d")}g(tn,D);function at(){D.call(this,"c")}g(at,D);var Ge={},yn=null;function hn(){return yn=yn||new H}Ge.Ia="serverreachability";function Xr(c){D.call(this,Ge.Ia,c)}g(Xr,D);function Nn(c){const y=hn();j(y,new Xr(y))}Ge.STAT_EVENT="statevent";function br(c,y){D.call(this,Ge.STAT_EVENT,c),this.stat=y}g(br,D);function lt(c){const y=hn();j(y,new br(y,c))}Ge.Ja="timingevent";function Dn(c,y){D.call(this,Ge.Ja,c),this.size=y}g(Dn,D);function wr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},y)}function Er(){this.g=!0}Er.prototype.ua=function(){this.g=!1};function Bo(c,y,k,U,ie,ce){c.info(function(){if(c.g)if(ce){var Ce="",Fe=ce.split("&");for(let tt=0;tt<Fe.length;tt++){var Ct=Fe[tt].split("=");if(Ct.length>1){const Tt=Ct[0];Ct=Ct[1];const Ln=Tt.split("_");Ce=Ln.length>=2&&Ln[1]=="type"?Ce+(Tt+"="+Ct+"&"):Ce+(Tt+"=redacted&")}}}else Ce=null;else Ce=ce;return"XMLHTTP REQ ("+U+") [attempt "+ie+"]: "+y+`
`+k+`
`+Ce})}function Uo(c,y,k,U,ie,ce,Ce){c.info(function(){return"XMLHTTP RESP ("+U+") [ attempt "+ie+"]: "+y+`
`+k+`
`+ce+" "+Ce})}function Kn(c,y,k,U){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+jo(c,k)+(U?" "+U:"")})}function zo(c,y){c.info(function(){return"TIMEOUT: "+y})}Er.prototype.info=function(){};function jo(c,y){if(!c.g)return y;if(!y)return null;try{const ce=JSON.parse(y);if(ce){for(c=0;c<ce.length;c++)if(Array.isArray(ce[c])){var k=ce[c];if(!(k.length<2)){var U=k[1];if(Array.isArray(U)&&!(U.length<1)){var ie=U[0];if(ie!="noop"&&ie!="stop"&&ie!="close")for(let Ce=1;Ce<U.length;Ce++)U[Ce]=""}}}}return oe(ce)}catch{return y}}var Zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ps;function Ri(){}g(Ri,We),Ri.prototype.g=function(){return new XMLHttpRequest},ps=new Ri;function Ir(c){return encodeURIComponent(String(c))}function ee(c){var y=1;c=c.split(":");const k=[];for(;y>0&&c.length;)k.push(c.shift()),y--;return c.length&&k.push(c.join(":")),k}function dt(c,y,k,U){this.j=c,this.i=y,this.l=k,this.S=U||1,this.V=new le(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qo}function qo(){this.i=null,this.g="",this.h=!1}var Vd={},Fl={};function Bl(c,y,k){c.M=1,c.A=Wo(Mn(y)),c.u=k,c.R=!0,$d(c,null)}function $d(c,y){c.F=Date.now(),Ho(c),c.B=Mn(c.A);var k=c.B,U=c.S;Array.isArray(U)||(U=[String(U)]),Yd(k.i,"t",U),c.C=0,k=c.j.L,c.h=new qo,c.g=gh(c.j,k?y:null,!c.u),c.P>0&&(c.O=new ne(h(c.Y,c,c.g),c.P)),y=c.V,k=c.g,U=c.ba;var ie="readystatechange";Array.isArray(ie)||(ie&&(me[0]=ie.toString()),ie=me);for(let ce=0;ce<ie.length;ce++){const Ce=he(k,ie[ce],U||y.handleEvent,!1,y.h||y);if(!Ce)break;y.g[Ce.key]=Ce}y=c.J?te(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),Nn(),Bo(c.i,c.v,c.B,c.l,c.S,c.u)}dt.prototype.ba=function(c){c=c.target;const y=this.O;y&&kr(c)==3?y.j():this.Y(c)},dt.prototype.Y=function(c){try{if(c==this.g)e:{const Fe=kr(this.g),Ct=this.g.ya(),tt=this.g.ca();if(!(Fe<3)&&(Fe!=3||this.g&&(this.h.h||this.g.la()||ih(this.g)))){this.K||Fe!=4||Ct==7||(Ct==8||tt<=0?Nn(3):Nn(2)),Ul(this);var y=this.g.ca();this.X=y;var k=f1(this);if(this.o=y==200,Uo(this.i,this.v,this.B,this.l,this.S,Fe,y),this.o){if(this.U&&!this.L){t:{if(this.g){var U,ie=this.g;if((U=ie.g?ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(U)){var ce=U;break t}}ce=null}if(c=ce)Kn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zl(this,c);else{this.o=!1,this.m=3,lt(12),ei(this),gs(this);break e}}if(this.R){c=!0;let Tt;for(;!this.K&&this.C<k.length;)if(Tt=p1(this,k),Tt==Fl){Fe==4&&(this.m=4,lt(14),c=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Vd){this.m=4,lt(15),Kn(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else Kn(this.i,this.l,Tt,null),zl(this,Tt);if(Fd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||k.length!=0||this.h.h||(this.m=1,lt(16),c=!1),this.o=this.o&&c,!c)Kn(this.i,this.l,k,"[Invalid Chunked Response]"),ei(this),gs(this);else if(k.length>0&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.aa&&!Ce.P&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ql(Ce),Ce.P=!0,lt(11))}}else Kn(this.i,this.l,k,null),zl(this,k);Fe==4&&ei(this),this.o&&!this.K&&(Fe==4?dh(this.j,this):(this.o=!1,Ho(this)))}else S1(this.g),y==400&&k.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),ei(this),gs(this)}}}catch{}finally{}};function f1(c){if(!Fd(c))return c.g.la();const y=ih(c.g);if(y==="")return"";let k="";const U=y.length,ie=kr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ei(c),gs(c),"";c.h.i=new o.TextDecoder}for(let ce=0;ce<U;ce++)c.h.h=!0,k+=c.h.i.decode(y[ce],{stream:!(ie&&ce==U-1)});return y.length=0,c.h.g+=k,c.C=0,c.h.g}function Fd(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function p1(c,y){var k=c.C,U=y.indexOf(`
`,k);return U==-1?Fl:(k=Number(y.substring(k,U)),isNaN(k)?Vd:(U+=1,U+k>y.length?Fl:(y=y.slice(U,U+k),c.C=U+k,y)))}dt.prototype.cancel=function(){this.K=!0,ei(this)};function Ho(c){c.T=Date.now()+c.H,Bd(c,c.H)}function Bd(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=wr(h(c.aa,c),y)}function Ul(c){c.D&&(o.clearTimeout(c.D),c.D=null)}dt.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(zo(this.i,this.B),this.M!=2&&(Nn(),lt(17)),ei(this),this.m=2,gs(this)):Bd(this,this.T-c)};function gs(c){c.j.I==0||c.K||dh(c.j,c)}function ei(c){Ul(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Se(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function zl(c,y){try{var k=c.j;if(k.I!=0&&(k.g==c||jl(k.h,c))){if(!c.L&&jl(k.h,c)&&k.I==3){try{var U=k.Ba.g.parse(y)}catch{U=null}if(Array.isArray(U)&&U.length==3){var ie=U;if(ie[0]==0){e:if(!k.v){if(k.g)if(k.g.F+3e3<c.F)Yo(k),Jo(k);else break e;Jl(k),lt(18)}}else k.xa=ie[1],0<k.xa-k.K&&ie[2]<37500&&k.F&&k.A==0&&!k.C&&(k.C=wr(h(k.Va,k),6e3));jd(k.h)<=1&&k.ta&&(k.ta=void 0)}else ni(k,11)}else if((c.L||k.g==c)&&Yo(k),!R(y))for(ie=k.Ba.g.parse(y),y=0;y<ie.length;y++){let tt=ie[y];const Tt=tt[0];if(!(Tt<=k.K))if(k.K=Tt,tt=tt[1],k.I==2)if(tt[0]=="c"){k.M=tt[1],k.ba=tt[2];const Ln=tt[3];Ln!=null&&(k.ka=Ln,k.j.info("VER="+k.ka));const ri=tt[4];ri!=null&&(k.za=ri,k.j.info("SVER="+k.za));const Tr=tt[5];Tr!=null&&typeof Tr=="number"&&Tr>0&&(U=1.5*Tr,k.O=U,k.j.info("backChannelRequestTimeoutMs_="+U)),U=k;const Sr=c.g;if(Sr){const Zo=Sr.g?Sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zo){var ce=U.h;ce.g||Zo.indexOf("spdy")==-1&&Zo.indexOf("quic")==-1&&Zo.indexOf("h2")==-1||(ce.j=ce.l,ce.g=new Set,ce.h&&(ql(ce,ce.h),ce.h=null))}if(U.G){const Yl=Sr.g?Sr.g.getResponseHeader("X-HTTP-Session-Id"):null;Yl&&(U.wa=Yl,st(U.J,U.G,Yl))}}k.I=3,k.l&&k.l.ra(),k.aa&&(k.T=Date.now()-c.F,k.j.info("Handshake RTT: "+k.T+"ms")),U=k;var Ce=c;if(U.na=ph(U,U.L?U.ba:null,U.W),Ce.L){qd(U.h,Ce);var Fe=Ce,Ct=U.O;Ct&&(Fe.H=Ct),Fe.D&&(Ul(Fe),Ho(Fe)),U.g=Ce}else ch(U);k.i.length>0&&Qo(k)}else tt[0]!="stop"&&tt[0]!="close"||ni(k,7);else k.I==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?ni(k,7):Kl(k):tt[0]!="noop"&&k.l&&k.l.qa(tt),k.A=0)}}Nn(4)}catch{}}var g1=class{constructor(c,y){this.g=c,this.map=y}};function Ud(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zd(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function jd(c){return c.h?1:c.g?c.g.size:0}function jl(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function ql(c,y){c.g?c.g.add(y):c.h=y}function qd(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Ud.prototype.cancel=function(){if(this.i=Hd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Hd(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const k of c.g.values())y=y.concat(k.G);return y}return m(c.i)}var Wd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function m1(c,y){if(c){c=c.split("&");for(let k=0;k<c.length;k++){const U=c[k].indexOf("=");let ie,ce=null;U>=0?(ie=c[k].substring(0,U),ce=c[k].substring(U+1)):ie=c[k],y(ie,ce?decodeURIComponent(ce.replace(/\+/g," ")):"")}}}function Cr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Cr?(this.l=c.l,ms(this,c.j),this.o=c.o,this.g=c.g,vs(this,c.u),this.h=c.h,Hl(this,Xd(c.i)),this.m=c.m):c&&(y=String(c).match(Wd))?(this.l=!1,ms(this,y[1]||"",!0),this.o=ys(y[2]||""),this.g=ys(y[3]||"",!0),vs(this,y[4]),this.h=ys(y[5]||"",!0),Hl(this,y[6]||"",!0),this.m=ys(y[7]||"")):(this.l=!1,this.i=new bs(null,this.l))}Cr.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(_s(y,Gd,!0),":");var k=this.g;return(k||y=="file")&&(c.push("//"),(y=this.o)&&c.push(_s(y,Gd,!0),"@"),c.push(Ir(k).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),k=this.u,k!=null&&c.push(":",String(k))),(k=this.h)&&(this.g&&k.charAt(0)!="/"&&c.push("/"),c.push(_s(k,k.charAt(0)=="/"?_1:y1,!0))),(k=this.i.toString())&&c.push("?",k),(k=this.m)&&c.push("#",_s(k,w1)),c.join("")},Cr.prototype.resolve=function(c){const y=Mn(this);let k=!!c.j;k?ms(y,c.j):k=!!c.o,k?y.o=c.o:k=!!c.g,k?y.g=c.g:k=c.u!=null;var U=c.h;if(k)vs(y,c.u);else if(k=!!c.h){if(U.charAt(0)!="/")if(this.g&&!this.h)U="/"+U;else{var ie=y.h.lastIndexOf("/");ie!=-1&&(U=y.h.slice(0,ie+1)+U)}if(ie=U,ie==".."||ie==".")U="";else if(ie.indexOf("./")!=-1||ie.indexOf("/.")!=-1){U=ie.lastIndexOf("/",0)==0,ie=ie.split("/");const ce=[];for(let Ce=0;Ce<ie.length;){const Fe=ie[Ce++];Fe=="."?U&&Ce==ie.length&&ce.push(""):Fe==".."?((ce.length>1||ce.length==1&&ce[0]!="")&&ce.pop(),U&&Ce==ie.length&&ce.push("")):(ce.push(Fe),U=!0)}U=ce.join("/")}else U=ie}return k?y.h=U:k=c.i.toString()!=="",k?Hl(y,Xd(c.i)):k=!!c.m,k&&(y.m=c.m),y};function Mn(c){return new Cr(c)}function ms(c,y,k){c.j=k?ys(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function vs(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function Hl(c,y,k){y instanceof bs?(c.i=y,E1(c.i,c.l)):(k||(y=_s(y,b1)),c.i=new bs(y,c.l))}function st(c,y,k){c.i.set(y,k)}function Wo(c){return st(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ys(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function _s(c,y,k){return typeof c=="string"?(c=encodeURI(c).replace(y,v1),k&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function v1(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Gd=/[#\/\?@]/g,y1=/[#\?:]/g,_1=/[#\?]/g,b1=/[#\?@]/g,w1=/#/g;function bs(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function ti(c){c.g||(c.g=new Map,c.h=0,c.i&&m1(c.i,function(y,k){c.add(decodeURIComponent(y.replace(/\+/g," ")),k)}))}t=bs.prototype,t.add=function(c,y){ti(this),this.i=null,c=Pi(this,c);let k=this.g.get(c);return k||this.g.set(c,k=[]),k.push(y),this.h+=1,this};function Kd(c,y){ti(c),y=Pi(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Jd(c,y){return ti(c),y=Pi(c,y),c.g.has(y)}t.forEach=function(c,y){ti(this),this.g.forEach(function(k,U){k.forEach(function(ie){c.call(y,ie,U,this)},this)},this)};function Qd(c,y){ti(c);let k=[];if(typeof y=="string")Jd(c,y)&&(k=k.concat(c.g.get(Pi(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)k=k.concat(c[y]);return k}t.set=function(c,y){return ti(this),this.i=null,c=Pi(this,c),Jd(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},t.get=function(c,y){return c?(c=Qd(this,c),c.length>0?String(c[0]):y):y};function Yd(c,y,k){Kd(c,y),k.length>0&&(c.i=null,c.g.set(Pi(c,y),m(k)),c.h+=k.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let U=0;U<y.length;U++){var k=y[U];const ie=Ir(k);k=Qd(this,k);for(let ce=0;ce<k.length;ce++){let Ce=ie;k[ce]!==""&&(Ce+="="+Ir(k[ce])),c.push(Ce)}}return this.i=c.join("&")};function Xd(c){const y=new bs;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Pi(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function E1(c,y){y&&!c.j&&(ti(c),c.i=null,c.g.forEach(function(k,U){const ie=U.toLowerCase();U!=ie&&(Kd(this,U),Yd(this,ie,k))},c)),c.j=y}function I1(c,y){const k=new Er;if(o.Image){const U=new Image;U.onload=p(xr,k,"TestLoadImage: loaded",!0,y,U),U.onerror=p(xr,k,"TestLoadImage: error",!1,y,U),U.onabort=p(xr,k,"TestLoadImage: abort",!1,y,U),U.ontimeout=p(xr,k,"TestLoadImage: timeout",!1,y,U),o.setTimeout(function(){U.ontimeout&&U.ontimeout()},1e4),U.src=c}else y(!1)}function C1(c,y){const k=new Er,U=new AbortController,ie=setTimeout(()=>{U.abort(),xr(k,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:U.signal}).then(ce=>{clearTimeout(ie),ce.ok?xr(k,"TestPingServer: ok",!0,y):xr(k,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(ie),xr(k,"TestPingServer: error",!1,y)})}function xr(c,y,k,U,ie){try{ie&&(ie.onload=null,ie.onerror=null,ie.onabort=null,ie.ontimeout=null),U(k)}catch{}}function x1(){this.g=new Je}function Wl(c){this.i=c.Sb||null,this.h=c.ab||!1}g(Wl,We),Wl.prototype.g=function(){return new Go(this.i,this.h)};function Go(c,y){H.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Go,H),t=Go.prototype,t.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,Es(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||o).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zd(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zd(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?ws(this):Es(this),this.readyState==3&&Zd(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,ws(this))},t.Na=function(c){this.g&&(this.response=c,ws(this))},t.ga=function(){this.g&&ws(this)};function ws(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Es(c)}t.setRequestHeader=function(c,y){this.A.append(c,y)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var k=y.next();!k.done;)k=k.value,c.push(k[0]+": "+k[1]),k=y.next();return c.join(`\r
`)};function Es(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function eh(c){let y="";return se(c,function(k,U){y+=U,y+=":",y+=k,y+=`\r
`}),y}function Gl(c,y,k){e:{for(U in k){var U=!1;break e}U=!0}U||(k=eh(k),typeof c=="string"?k!=null&&Ir(k):st(c,y,k))}function gt(c){H.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(gt,H);var k1=/^https?$/i,T1=["POST","PUT"];t=gt.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,y,k,U){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ps.g(),this.g.onreadystatechange=v(h(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(ce){th(this,ce);return}if(c=k||"",k=new Map(this.headers),U)if(Object.getPrototypeOf(U)===Object.prototype)for(var ie in U)k.set(ie,U[ie]);else if(typeof U.keys=="function"&&typeof U.get=="function")for(const ce of U.keys())k.set(ce,U.get(ce));else throw Error("Unknown input type for opt_headers: "+String(U));U=Array.from(k.keys()).find(ce=>ce.toLowerCase()=="content-type"),ie=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(T1,y,void 0)>=0)||U||ie||k.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ce,Ce]of k)this.g.setRequestHeader(ce,Ce);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(ce){th(this,ce)}};function th(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,nh(c),Ko(c)}function nh(c){c.A||(c.A=!0,j(c,"complete"),j(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,j(this,"complete"),j(this,"abort"),Ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ko(this,!0)),gt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?rh(this):this.Xa())},t.Xa=function(){rh(this)};function rh(c){if(c.h&&typeof s<"u"){if(c.v&&kr(c)==4)setTimeout(c.Ca.bind(c),0);else if(j(c,"readystatechange"),kr(c)==4){c.h=!1;try{const ce=c.ca();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var k;if(!(k=y)){var U;if(U=ce===0){let Ce=String(c.D).match(Wd)[1]||null;!Ce&&o.self&&o.self.location&&(Ce=o.self.location.protocol.slice(0,-1)),U=!k1.test(Ce?Ce.toLowerCase():"")}k=U}if(k)j(c,"complete"),j(c,"success");else{c.o=6;try{var ie=kr(c)>2?c.g.statusText:""}catch{ie=""}c.l=ie+" ["+c.ca()+"]",nh(c)}}finally{Ko(c)}}}}function Ko(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const k=c.g;c.g=null,y||j(c,"ready");try{k.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function kr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return kr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),$e(y)}};function ih(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function S1(c){const y={};c=(c.g&&kr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let U=0;U<c.length;U++){if(R(c[U]))continue;var k=ee(c[U]);const ie=k[0];if(k=k[1],typeof k!="string")continue;k=k.trim();const ce=y[ie]||[];y[ie]=ce,ce.push(k)}Ie(y,function(U){return U.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(c,y,k){return k&&k.internalChannelParams&&k.internalChannelParams[c]||y}function sh(c){this.za=0,this.i=[],this.j=new Er,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Is("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Is("baseRetryDelayMs",5e3,c),this.Za=Is("retryDelaySeedMs",1e4,c),this.Ta=Is("forwardChannelMaxRetries",2,c),this.va=Is("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Ud(c&&c.concurrentRequestLimit),this.Ba=new x1,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=sh.prototype,t.ka=8,t.I=1,t.connect=function(c,y,k,U){lt(0),this.W=c,this.H=y||{},k&&U!==void 0&&(this.H.OSID=k,this.H.OAID=U),this.F=this.X,this.J=ph(this,null,this.W),Qo(this)};function Kl(c){if(oh(c),c.I==3){var y=c.V++,k=Mn(c.J);if(st(k,"SID",c.M),st(k,"RID",y),st(k,"TYPE","terminate"),Cs(c,k),y=new dt(c,c.j,y),y.M=2,y.A=Wo(Mn(k)),k=!1,o.navigator&&o.navigator.sendBeacon)try{k=o.navigator.sendBeacon(y.A.toString(),"")}catch{}!k&&o.Image&&(new Image().src=y.A,k=!0),k||(y.g=gh(y.j,null),y.g.ea(y.A)),y.F=Date.now(),Ho(y)}fh(c)}function Jo(c){c.g&&(Ql(c),c.g.cancel(),c.g=null)}function oh(c){Jo(c),c.v&&(o.clearTimeout(c.v),c.v=null),Yo(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Qo(c){if(!zd(c.h)&&!c.m){c.m=!0;var y=c.Ea;F||b(),L||(F(),L=!0),I.add(y,c),c.D=0}}function A1(c,y){return jd(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=wr(h(c.Ea,c,y),hh(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const ie=new dt(this,this.j,c);let ce=this.o;if(this.U&&(ce?(ce=te(ce),we(ce,this.U)):ce=this.U),this.u!==null||this.R||(ie.J=ce,ce=null),this.S)e:{for(var y=0,k=0;k<this.i.length;k++){t:{var U=this.i[k];if("__data__"in U.map&&(U=U.map.__data__,typeof U=="string")){U=U.length;break t}U=void 0}if(U===void 0)break;if(y+=U,y>4096){y=k;break e}if(y===4096||k===this.i.length-1){y=k+1;break e}}y=1e3}else y=1e3;y=lh(this,ie,y),k=Mn(this.J),st(k,"RID",c),st(k,"CVER",22),this.G&&st(k,"X-HTTP-Session-Id",this.G),Cs(this,k),ce&&(this.R?y="headers="+Ir(eh(ce))+"&"+y:this.u&&Gl(k,this.u,ce)),ql(this.h,ie),this.Ra&&st(k,"TYPE","init"),this.S?(st(k,"$req",y),st(k,"SID","null"),ie.U=!0,Bl(ie,k,null)):Bl(ie,k,y),this.I=2}}else this.I==3&&(c?ah(this,c):this.i.length==0||zd(this.h)||ah(this))};function ah(c,y){var k;y?k=y.l:k=c.V++;const U=Mn(c.J);st(U,"SID",c.M),st(U,"RID",k),st(U,"AID",c.K),Cs(c,U),c.u&&c.o&&Gl(U,c.u,c.o),k=new dt(c,c.j,k,c.D+1),c.u===null&&(k.J=c.o),y&&(c.i=y.G.concat(c.i)),y=lh(c,k,1e3),k.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),ql(c.h,k),Bl(k,U,y)}function Cs(c,y){c.H&&se(c.H,function(k,U){st(y,U,k)}),c.l&&se({},function(k,U){st(y,U,k)})}function lh(c,y,k){k=Math.min(c.i.length,k);const U=c.l?h(c.l.Ka,c.l,c):null;e:{var ie=c.i;let Fe=-1;for(;;){const Ct=["count="+k];Fe==-1?k>0?(Fe=ie[0].g,Ct.push("ofs="+Fe)):Fe=0:Ct.push("ofs="+Fe);let tt=!0;for(let Tt=0;Tt<k;Tt++){var ce=ie[Tt].g;const Ln=ie[Tt].map;if(ce-=Fe,ce<0)Fe=Math.max(0,ie[Tt].g-100),tt=!1;else try{ce="req"+ce+"_"||"";try{var Ce=Ln instanceof Map?Ln:Object.entries(Ln);for(const[ri,Tr]of Ce){let Sr=Tr;a(Tr)&&(Sr=oe(Tr)),Ct.push(ce+ri+"="+encodeURIComponent(Sr))}}catch(ri){throw Ct.push(ce+"type="+encodeURIComponent("_badmap")),ri}}catch{U&&U(Ln)}}if(tt){Ce=Ct.join("&");break e}}Ce=void 0}return c=c.i.splice(0,k),y.G=c,Ce}function ch(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;F||b(),L||(F(),L=!0),I.add(y,c),c.A=0}}function Jl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=wr(h(c.Da,c),hh(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,uh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=wr(h(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),Jo(this),uh(this))};function Ql(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function uh(c){c.g=new dt(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=Mn(c.na);st(y,"RID","rpc"),st(y,"SID",c.M),st(y,"AID",c.K),st(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&st(y,"TO",c.ia),st(y,"TYPE","xmlhttp"),Cs(c,y),c.u&&c.o&&Gl(y,c.u,c.o),c.O&&(c.g.H=c.O);var k=c.g;c=c.ba,k.M=1,k.A=Wo(Mn(y)),k.u=null,k.R=!0,$d(k,c)}t.Va=function(){this.C!=null&&(this.C=null,Jo(this),Jl(this),lt(19))};function Yo(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function dh(c,y){var k=null;if(c.g==y){Yo(c),Ql(c),c.g=null;var U=2}else if(jl(c.h,y))k=y.G,qd(c.h,y),U=1;else return;if(c.I!=0){if(y.o)if(U==1){k=y.u?y.u.length:0,y=Date.now()-y.F;var ie=c.D;U=hn(),j(U,new Dn(U,k)),Qo(c)}else ch(c);else if(ie=y.m,ie==3||ie==0&&y.X>0||!(U==1&&A1(c,y)||U==2&&Jl(c)))switch(k&&k.length>0&&(y=c.h,y.i=y.i.concat(k)),ie){case 1:ni(c,5);break;case 4:ni(c,10);break;case 3:ni(c,6);break;default:ni(c,2)}}}function hh(c,y){let k=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(k*=2),k*y}function ni(c,y){if(c.j.info("Error code "+y),y==2){var k=h(c.bb,c),U=c.Ua;const ie=!U;U=new Cr(U||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ms(U,"https"),Wo(U),ie?I1(U.toString(),k):C1(U.toString(),k)}else lt(2);c.I=0,c.l&&c.l.pa(y),fh(c),oh(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function fh(c){if(c.I=0,c.ja=[],c.l){const y=Hd(c.h);(y.length!=0||c.i.length!=0)&&(_(c.ja,y),_(c.ja,c.i),c.h.i.length=0,m(c.i),c.i.length=0),c.l.oa()}}function ph(c,y,k){var U=k instanceof Cr?Mn(k):new Cr(k);if(U.g!="")y&&(U.g=y+"."+U.g),vs(U,U.u);else{var ie=o.location;U=ie.protocol,y=y?y+"."+ie.hostname:ie.hostname,ie=+ie.port;const ce=new Cr(null);U&&ms(ce,U),y&&(ce.g=y),ie&&vs(ce,ie),k&&(ce.h=k),U=ce}return k=c.G,y=c.wa,k&&y&&st(U,k,y),st(U,"VER",c.ka),Cs(c,U),U}function gh(c,y,k){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new gt(new Wl({ab:k})):new gt(c.ma),y.Fa(c.L),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mh(){}t=mh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Xo(){}Xo.prototype.g=function(c,y){return new sn(c,y)};function sn(c,y){H.call(this),this.g=new sh(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!R(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!R(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Oi(this)}g(sn,H),sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Kl(this.g)},sn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var k={};k.__data__=c,c=k}else this.v&&(k={},k.__data__=oe(c),c=k);y.i.push(new g1(y.Ya++,c)),y.I==3&&Qo(y)},sn.prototype.N=function(){this.g.l=null,delete this.j,Kl(this.g),delete this.g,sn.Z.N.call(this)};function vh(c){tn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const k in y){c=k;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}g(vh,tn);function yh(){at.call(this),this.status=1}g(yh,at);function Oi(c){this.g=c}g(Oi,mh),Oi.prototype.ra=function(){j(this.g,"a")},Oi.prototype.qa=function(c){j(this.g,new vh(c))},Oi.prototype.pa=function(c){j(this.g,new yh)},Oi.prototype.oa=function(){j(this.g,"b")},Xo.prototype.createWebChannel=Xo.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,Bv=function(){return new Xo},Fv=function(){return hn()},$v=Ge,au={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Zr.NO_ERROR=0,Zr.TIMEOUT=8,Zr.HTTP_ERROR=6,xa=Zr,fs.COMPLETE="complete",Vv=fs,pt.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",H.prototype.listen=H.prototype.J,Ms=pt,gt.prototype.listenOnce=gt.prototype.K,gt.prototype.getLastError=gt.prototype.Ha,gt.prototype.getLastErrorCode=gt.prototype.ya,gt.prototype.getStatus=gt.prototype.ca,gt.prototype.getResponseJson=gt.prototype.La,gt.prototype.getResponseText=gt.prototype.la,gt.prototype.send=gt.prototype.ea,gt.prototype.setWithCredentials=gt.prototype.Fa,Lv=gt}).apply(typeof oa<"u"?oa:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="12.10.0";function TC(t){ds=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new kl("@firebase/firestore");function Vi(){return bi.logLevel}function Re(t,...e){if(bi.logLevel<=je.DEBUG){const n=e.map(od);bi.debug(`Firestore (${ds}): ${t}`,...n)}}function wi(t,...e){if(bi.logLevel<=je.ERROR){const n=e.map(od);bi.error(`Firestore (${ds}): ${t}`,...n)}}function go(t,...e){if(bi.logLevel<=je.WARN){const n=e.map(od);bi.warn(`Firestore (${ds}): ${t}`,...n)}}function od(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Uv(t,r,n)}function Uv(t,e,n){let r=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw wi(r),new Error(r)}function yt(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Uv(e,i,r)}function it(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ne extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class AC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RC{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){yt(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Re("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(yt(typeof r.accessToken=="string",31837,{l:r}),new zv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yt(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class PC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class OC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new PC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,on(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){yt(this.o===void 0,3512);const r=s=>{s.error!=null&&Re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new lp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(yt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new lp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=DC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Ze(t,e){return t<e?-1:t>e?1:0}function lu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Ec(i)===Ec(s)?Ze(i,s):Ec(i)?1:-1}return Ze(t.length,e.length)}const MC=55296,LC=57343;function Ec(t){const e=t.charCodeAt(0);return e>=MC&&e<=LC}function es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="__name__";class Bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Bn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Ze(e.length,n.length)}static compareSegments(e,n){const r=Bn.isNumericId(e),i=Bn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Bn.extractNumericId(e).compare(Bn.extractNumericId(n)):lu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sd.fromString(e.substring(4,e.length-2))}}class bt extends Bn{construct(e,n,r){return new bt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Ne(be.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new bt(n)}static emptyPath(){return new bt([])}}const VC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Bn{construct(e,n,r){return new Mt(e,n,r)}static isValidIdentifier(e){return VC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cp}static keyField(){return new Mt([cp])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Ne(be.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Ne(be.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ne(be.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Ne(be.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.path=e}static fromPath(e){return new Be(bt.fromString(e))}static fromName(e){return new Be(bt.fromString(e).popFirst(5))}static empty(){return new Be(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return bt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Be(new bt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t,e,n){if(!n)throw new Ne(be.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FC(t,e,n,r){if(e===!0&&r===!0)throw new Ne(be.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function up(t){if(!Be.isDocumentKey(t))throw new Ne(be.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ld(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ue(12329,{type:typeof t})}function cu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ne(be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ld(t);throw new Ne(be.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){const n={typeString:t};return e&&(n.value=e),n}function No(t,e){if(!jv(t))throw new Ne(be.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Ne(be.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=-62135596800,hp=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*hp);return new ut(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ne(be.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ne(be.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<dp)throw new Ne(be.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ne(be.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hp}_compareTo(e){return this.seconds===e.seconds?Ze(this.nanoseconds,e.nanoseconds):Ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(No(e,ut._jsonSchema))return new ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-dp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:It("string",ut._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static fromTimestamp(e){return new ct(e)}static min(){return new ct(new ut(0,0))}static max(){return new ct(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=-1;function BC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ct.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Wr(i,Be.empty(),e)}function UC(t){return new Wr(t.readTime,t.key,mo)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(ct.min(),Be.empty(),mo)}static max(){return new Wr(ct.max(),Be.empty(),mo)}}function zC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Be.comparator(t.documentKey,e.documentKey),n!==0?n:Ze(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(t){if(t.code!==be.FAILED_PRECONDITION||t.message!==jC)throw t;Re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ge((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ge?n:ge.resolve(n)}catch(n){return ge.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ge.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ge.reject(n)}static resolve(e){return new ge((n,r)=>{n(e)})}static reject(e){return new ge((n,r)=>{r(e)})}static waitFor(e){return new ge((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=ge.resolve(!1);for(const r of e)n=n.next(i=>i?ge.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new ge((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const h=l;n(e[h]).next(p=>{o[h]=p,++a,a===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new ge((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Do(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ud.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=-1;function hd(t){return t==null}function Ga(t){return t===0&&1/t==-1/0}function WC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="";function GC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fp(e)),e=KC(t.get(n),e);return fp(e)}function KC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case qv:n+="";break;default:n+=s}}return n}function fp(t){return t+qv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.comparator=e,this.root=n||Ot.EMPTY}insert(e,n){return new rn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new rn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}}class aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ot.RED,this.left=i??Ot.EMPTY,this.right=s??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ue(27949);return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Ue(57766)}get value(){throw Ue(16141)}get color(){throw Ue(16727)}get left(){throw Ue(29726)}get right(){throw Ue(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new rn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gp(this.data.getIterator())}getIteratorFrom(e){return new gp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Vt(this.comparator);return n.data=e,n}}class gp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new Vt(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new JC("Invalid base64 string: "+s):s}}(e);return new Wn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Wn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wn.EMPTY_BYTE_STRING=new Wn("");const QC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(t){if(yt(!!t,39018),typeof t=="string"){let e=0;const n=QC.exec(t);if(yt(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Nt(t.seconds),nanos:Nt(t.nanos)}}function Nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Wn.fromBase64String(t):Wn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="server_timestamp",Gv="__type__",Kv="__previous_value__",Jv="__local_write_time__";function fd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Gv])==null?void 0:r.stringValue)===Wv}function pd(t){const e=t.mapValue.fields[Kv];return fd(e)?pd(e):e}function Ka(t){const e=Ei(t.mapValue.fields[Jv].timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r,i,s,o,a,l,h,p,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const Ja="(default)";class Qa{constructor(e,n){this.projectId=e,this.database=n||Ja}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database===Ja}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}function XC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ne(be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="__type__",ZC="__max__",la={mapValue:{}},Yv="__vector__",uu="value";function Ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fd(t)?4:tx(t)?9007199254740991:ex(t)?10:11:Ue(28295,{value:t})}function Gn(t,e){if(t===e)return!0;const n=Ii(t);if(n!==Ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ka(t).isEqual(Ka(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ei(i.timestampValue),a=Ei(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ts(i.bytesValue).isEqual(ts(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Nt(i.geoPointValue.latitude)===Nt(s.geoPointValue.latitude)&&Nt(i.geoPointValue.longitude)===Nt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Nt(i.integerValue)===Nt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Nt(i.doubleValue),a=Nt(s.doubleValue);return o===a?Ga(o)===Ga(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(pp(o)!==pp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Gn(o[l],a[l])))return!1;return!0}(t,e);default:return Ue(52216,{left:t})}}function vo(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=Ii(t),r=Ii(e);if(n!==r)return Ze(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ze(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Nt(s.integerValue||s.doubleValue),l=Nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return mp(t.timestampValue,e.timestampValue);case 4:return mp(Ka(t),Ka(e));case 5:return lu(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ts(s),l=ts(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const p=Ze(a[h],l[h]);if(p!==0)return p}return Ze(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ze(Nt(s.latitude),Nt(o.latitude));return a!==0?a:Ze(Nt(s.longitude),Nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vp(t.arrayValue,e.arrayValue);case 10:return function(s,o){var v,m,_,u;const a=s.fields||{},l=o.fields||{},h=(v=a[uu])==null?void 0:v.arrayValue,p=(m=l[uu])==null?void 0:m.arrayValue,g=Ze(((_=h==null?void 0:h.values)==null?void 0:_.length)||0,((u=p==null?void 0:p.values)==null?void 0:u.length)||0);return g!==0?g:vp(h,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===la.mapValue&&o===la.mapValue)return 0;if(s===la.mapValue)return 1;if(o===la.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),h=o.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const v=lu(l[g],p[g]);if(v!==0)return v;const m=ns(a[l[g]],h[p[g]]);if(m!==0)return m}return Ze(l.length,p.length)}(t.mapValue,e.mapValue);default:throw Ue(23264,{he:n})}}function mp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ze(t,e);const n=Ei(t),r=Ei(e),i=Ze(n.seconds,r.seconds);return i!==0?i:Ze(n.nanos,r.nanos)}function vp(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ns(n[i],r[i]);if(s)return s}return Ze(n.length,r.length)}function rs(t){return du(t)}function du(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Be.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=du(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${du(n.fields[o])}`;return i+"}"}(t.mapValue):Ue(61005,{value:t})}function ka(t){switch(Ii(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pd(t);return e?16+ka(e):16;case 5:return 2*t.stringValue.length;case 6:return ts(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ka(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return hs(r.fields,(s,o)=>{i+=s.length+ka(o)}),i}(t.mapValue);default:throw Ue(13486,{value:t})}}function hu(t){return!!t&&"integerValue"in t}function gd(t){return!!t&&"arrayValue"in t}function Ta(t){return!!t&&"mapValue"in t}function ex(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Qv])==null?void 0:r.stringValue)===Yv}function Qs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return{...t}}function tx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ZC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=Mt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Qs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ta(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wn(Qs(this.value))}}function Xv(t){const e=[];return hs(t.fields,(n,r)=>{const i=new Mt([n]);if(Ta(r)){const s=Xv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bn(e,0,ct.min(),ct.min(),ct.min(),wn.empty(),0)}static newFoundDocument(e,n,r,i){return new bn(e,1,n,ct.min(),r,i,0)}static newNoDocument(e,n){return new bn(e,2,n,ct.min(),ct.min(),wn.empty(),0)}static newUnknownDocument(e,n){return new bn(e,3,n,ct.min(),ct.min(),wn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ct.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.position=e,this.inclusive=n}}function yp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Be.comparator(Be.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _p(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n="asc"){this.field=e,this.dir=n}}function nx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{}class At extends Zv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ix(e,n,r):n==="array-contains"?new ax(e,r):n==="in"?new lx(e,r):n==="not-in"?new cx(e,r):n==="array-contains-any"?new ux(e,r):new At(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sx(e,r):new ox(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ns(n,this.value)):n!==null&&Ii(this.value)===Ii(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gr extends Zv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Gr(e,n)}matches(e){return ey(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ey(t){return t.op==="and"}function ty(t){return rx(t)&&ey(t)}function rx(t){for(const e of t.filters)if(e instanceof Gr)return!1;return!0}function fu(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(ty(t))return t.filters.map(e=>fu(e)).join(",");{const e=t.filters.map(n=>fu(n)).join(",");return`${t.op}(${e})`}}function ny(t,e){return t instanceof At?function(r,i){return i instanceof At&&r.op===i.op&&r.field.isEqual(i.field)&&Gn(r.value,i.value)}(t,e):t instanceof Gr?function(r,i){return i instanceof Gr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ny(o,i.filters[a]),!0):!1}(t,e):void Ue(19439)}function ry(t){return t instanceof At?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof Gr?function(n){return n.op.toString()+" {"+n.getFilters().map(ry).join(" ,")+"}"}(t):"Filter"}class ix extends At{constructor(e,n,r){super(e,n,r),this.key=Be.fromName(r.referenceValue)}matches(e){const n=Be.comparator(e.key,this.key);return this.matchesComparison(n)}}class sx extends At{constructor(e,n){super(e,"in",n),this.keys=iy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ox extends At{constructor(e,n){super(e,"not-in",n),this.keys=iy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iy(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Be.fromName(r.referenceValue))}class ax extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gd(n)&&vo(n.arrayValue,this.value)}}class lx extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vo(this.value.arrayValue,n)}}class cx extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!vo(this.value.arrayValue,n)}}class ux extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function bp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dx(t,e,n,r,i,s,o)}function md(t){const e=it(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),hd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.Te=n}return e.Te}function vd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ny(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_p(t.startAt,e.startAt)&&_p(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function hx(t,e,n,r,i,s,o,a){return new Rl(t,e,n,r,i,s,o,a)}function fx(t){return new Rl(t)}function wp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function px(t){return Be.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function gx(t){return t.collectionGroup!==null}function Ys(t){const e=it(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Vt(Mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Xa(s,r))}),n.has(Mt.keyField().canonicalString())||e.Ie.push(new Xa(Mt.keyField(),r))}return e.Ie}function yi(t){const e=it(t);return e.Ee||(e.Ee=mx(e,Ys(t))),e.Ee}function mx(t,e){if(t.limitType==="F")return bp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xa(i.field,s)});const n=t.endAt?new Ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ya(t.startAt.position,t.startAt.inclusive):null;return bp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pu(t,e,n){return new Rl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sy(t,e){return vd(yi(t),yi(e))&&t.limitType===e.limitType}function oy(t){return`${md(yi(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ry(i)).join(", ")}]`),hd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>rs(i)).join(",")),`Target(${r})`}(yi(t))}; limitType=${t.limitType})`}function yd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Be.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ys(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const h=yp(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,Ys(r),i)||r.endAt&&!function(o,a,l){const h=yp(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,Ys(r),i))}(t,e)}function vx(t){return(e,n)=>{let r=!1;for(const i of Ys(t)){const s=yx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yx(t,e,n){const r=t.field.isKeyField()?Be.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),h=a.data.field(s);return l!==null&&h!==null?ns(l,h):Ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ue(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Hv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=new rn(Be.comparator);function Za(){return _x}const ay=new rn(Be.comparator);function ca(...t){let e=ay;for(const n of t)e=e.insert(n.key,n);return e}function ly(t){let e=ay;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fi(){return Xs()}function cy(){return Xs()}function Xs(){return new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}const bx=new rn(Be.comparator),wx=new Vt(Be.comparator);function qt(...t){let e=wx;for(const n of t)e=e.add(n);return e}const Ex=new Vt(Ze);function Ix(){return Ex}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(e)?"-0":e}}function uy(t){return{integerValue:""+t}}function Cx(t,e){return WC(e)?uy(e):_d(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this._=void 0}}function xx(t,e,n){return t instanceof el?function(i,s){const o={fields:{[Gv]:{stringValue:Wv},[Jv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fd(s)&&(s=pd(s)),s&&(o.fields[Kv]=s),{mapValue:o}}(n,e):t instanceof yo?hy(t,e):t instanceof _o?fy(t,e):function(i,s){const o=dy(i,s),a=Ep(o)+Ep(i.Ae);return hu(o)&&hu(i.Ae)?uy(a):_d(i.serializer,a)}(t,e)}function kx(t,e,n){return t instanceof yo?hy(t,e):t instanceof _o?fy(t,e):n}function dy(t,e){return t instanceof tl?function(r){return hu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class el extends Pl{}class yo extends Pl{constructor(e){super(),this.elements=e}}function hy(t,e){const n=py(e);for(const r of t.elements)n.some(i=>Gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends Pl{constructor(e){super(),this.elements=e}}function fy(t,e){let n=py(e);for(const r of t.elements)n=n.filter(i=>!Gn(i,r));return{arrayValue:{values:n}}}class tl extends Pl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ep(t){return Nt(t.integerValue||t.doubleValue)}function py(t){return gd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Tx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof yo&&i instanceof yo||r instanceof _o&&i instanceof _o?es(r.elements,i.elements,Gn):r instanceof tl&&i instanceof tl?Gn(r.Ae,i.Ae):r instanceof el&&i instanceof el}(t.transform,e.transform)}class Sx{constructor(e,n){this.version=e,this.transformResults=n}}class cr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ol{}function gy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vy(t.key,cr.none()):new Mo(t.key,t.data,cr.none());{const n=t.data,r=wn.empty();let i=new Vt(Mt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ai(t.key,r,new Cn(i.toArray()),cr.none())}}function Ax(t,e,n){t instanceof Mo?function(i,s,o){const a=i.value.clone(),l=Cp(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ai?function(i,s,o){if(!Sa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Cp(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(my(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof Mo?function(s,o,a,l){if(!Sa(s.precondition,o))return a;const h=s.value.clone(),p=xp(s.fieldTransforms,l,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ai?function(s,o,a,l){if(!Sa(s.precondition,o))return a;const h=xp(s.fieldTransforms,l,o),p=o.data;return p.setAll(my(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,a){return Sa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Rx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dy(r.transform,i||null);s!=null&&(n===null&&(n=wn.empty()),n.set(r.field,s))}return n||null}function Ip(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&es(r,i,(s,o)=>Tx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mo extends Ol{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends Ol{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function my(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cp(t,e,n){const r=new Map;yt(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,kx(o,a,n[i]))}return r}function xp(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,xx(s,o,e))}return r}class vy extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Px extends Ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ax(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cy();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=gy(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ct.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),qt())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>Ip(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>Ip(n,r))}}class bd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){yt(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return bx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,qe;function Dx(t){switch(t){case be.OK:return Ue(64938);case be.CANCELLED:case be.UNKNOWN:case be.DEADLINE_EXCEEDED:case be.RESOURCE_EXHAUSTED:case be.INTERNAL:case be.UNAVAILABLE:case be.UNAUTHENTICATED:return!1;case be.INVALID_ARGUMENT:case be.NOT_FOUND:case be.ALREADY_EXISTS:case be.PERMISSION_DENIED:case be.FAILED_PRECONDITION:case be.ABORTED:case be.OUT_OF_RANGE:case be.UNIMPLEMENTED:case be.DATA_LOSS:return!0;default:return Ue(15467,{code:t})}}function Mx(t){if(t===void 0)return wi("GRPC error has no .code"),be.UNKNOWN;switch(t){case wt.OK:return be.OK;case wt.CANCELLED:return be.CANCELLED;case wt.UNKNOWN:return be.UNKNOWN;case wt.DEADLINE_EXCEEDED:return be.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return be.RESOURCE_EXHAUSTED;case wt.INTERNAL:return be.INTERNAL;case wt.UNAVAILABLE:return be.UNAVAILABLE;case wt.UNAUTHENTICATED:return be.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return be.INVALID_ARGUMENT;case wt.NOT_FOUND:return be.NOT_FOUND;case wt.ALREADY_EXISTS:return be.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return be.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return be.FAILED_PRECONDITION;case wt.ABORTED:return be.ABORTED;case wt.OUT_OF_RANGE:return be.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return be.UNIMPLEMENTED;case wt.DATA_LOSS:return be.DATA_LOSS;default:return Ue(39323,{code:t})}}(qe=wt||(wt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new sd([4294967295,4294967295],0);class Lx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $x(t,e){return gu(t,e.toTimestamp())}function Wi(t){return yt(!!t,49232),ct.fromTimestamp(function(n){const r=Ei(n);return new ut(r.seconds,r.nanos)}(t))}function yy(t,e){return mu(t,e).canonicalString()}function mu(t,e){const n=function(i){return new bt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Fx(t){const e=bt.fromString(t);return yt(Gx(e),10190,{key:e.toString()}),e}function vu(t,e){return yy(t.databaseId,e.path)}function Bx(t){const e=Fx(t);return e.length===4?bt.emptyPath():zx(e)}function Ux(t){return new bt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zx(t){return yt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function kp(t,e,n){return{name:vu(t,e),fields:n.value.mapValue.fields}}function jx(t,e){let n;if(e instanceof Mo)n={update:kp(t,e.key,e.value)};else if(e instanceof vy)n={delete:vu(t,e.key)};else if(e instanceof Ai)n={update:kp(t,e.key,e.data),updateMask:Wx(e.fieldMask)};else{if(!(e instanceof Px))return Ue(16599,{dt:e.type});n={verify:vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof el)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof tl)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$x(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ue(27497)}(t,e.precondition)),n}function qx(t,e){return t&&t.length>0?(yt(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Wi(i.updateTime):Wi(s);return o.isEqual(ct.min())&&(o=Wi(s)),new Sx(o,i.transformResults||[])}(n,e))):[]}function Hx(t){let e=Bx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){yt(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const v=_y(g);return v instanceof Gr&&ty(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(v=>function(_){return new Xa($i(_.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(v))}(n.orderBy));let a=null;n.limit&&(a=function(g){let v;return v=typeof g=="object"?g.value:g,hd(v)?null:v}(n.limit));let l=null;n.startAt&&(l=function(g){const v=!!g.before,m=g.values||[];return new Ya(m,v)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const v=!g.before,m=g.values||[];return new Ya(m,v)}(n.endAt)),hx(e,i,o,s,a,"F",l,h)}function _y(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$i(n.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$i(n.unaryFilter.field);return At.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$i(n.unaryFilter.field);return At.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$i(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ue(61313);default:return Ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return At.create($i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ue(58110);default:return Ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gr.create(n.compositeFilter.filters.map(r=>_y(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ue(1026)}}(n.compositeFilter.op))}(t):Ue(30097,{filter:t})}function $i(t){return Mt.fromServerFormat(t.fieldPath)}function Wx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function by(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.yt=e}}function Jx(t){const e=Hx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this.Sn=new Yx}addToCollectionParentIndex(e,n){return this.Sn.add(n),ge.resolve()}getCollectionParents(e,n){return ge.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return ge.resolve()}deleteFieldIndex(e,n){return ge.resolve()}deleteAllFieldIndexes(e){return ge.resolve()}createTargetIndexes(e,n){return ge.resolve()}getDocumentsMatchingTarget(e,n){return ge.resolve(null)}getIndexType(e,n){return ge.resolve(0)}getFieldIndexes(e,n){return ge.resolve([])}getNextCollectionGroupToUpdate(e){return ge.resolve(null)}getMinOffset(e,n){return ge.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return ge.resolve(Wr.min())}updateCollectionGroup(e,n,r){return ge.resolve()}updateIndexEntries(e,n){return ge.resolve()}}class Yx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Vt(bt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Vt(bt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wy=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(wy,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new is(0)}static ar(){return new is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="LruGarbageCollector",Xx=1048576;function Ap([t,e],[n,r]){const i=Ze(t,n);return i===0?Ze(e,r):i}class Zx{constructor(e){this.Pr=e,this.buffer=new Vt(Ap),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ap(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ek{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Re(Sp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Do(n)?Re(Sp,"Ignoring IndexedDB error during garbage collection: ",n):await cd(n)}await this.Ar(3e5)})}}class tk{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return ge.resolve(ud.ce);const r=new Zx(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Re("LruGarbageCollector","Garbage collection skipped; disabled"),ge.resolve(Tp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tp):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,a,l,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(Re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,o=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,a=Date.now(),this.removeTargets(e,r,n))).next(g=>(s=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Vi()<=je.DEBUG&&Re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-p}ms`),ge.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function nk(t,e){return new tk(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.changes=new Si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?ge.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zs(r.mutation,i,Cn.empty(),ut.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,qt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=qt()){const i=fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ca();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,qt()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Za();const o=Xs(),a=function(){return Xs()}();return n.forEach((l,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof Ai)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Zs(p.mutation,h,p.mutation.getFieldMask(),ut.now())):o.set(h.key,Cn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>a.set(h,new ik(p,o.get(h)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Xs();let i=new rn((o,a)=>o-a),s=qt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let p=r.get(l)||Cn.empty();p=a.applyToLocalView(h,p),r.set(l,p);const g=(i.get(a.batchId)||qt()).add(l);i=i.insert(a.batchId,g)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,p=l.value,g=cy();p.forEach(v=>{if(!s.has(v)){const m=gy(n.get(v),r.get(v));m!==null&&g.set(v,m),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return ge.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return px(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):ge.resolve(fi());let a=mo,l=s;return o.next(h=>ge.forEach(h,(p,g)=>(a<g.largestBatchId&&(a=g.largestBatchId),s.get(p)?ge.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{l=l.insert(p,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,qt())).next(p=>({batchId:a,changes:ly(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Be(n)).next(r=>{let i=ca();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ca();return this.indexManager.getCollectionParents(e,s).next(a=>ge.forEach(a,l=>{const h=function(g,v){return new Rl(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((g,v)=>{o=o.insert(g,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,bn.newInvalidDocument(p)))});let a=ca();return o.forEach((l,h)=>{const p=s.get(l);p!==void 0&&Zs(p.mutation,h,Cn.empty(),ut.now()),yd(n,h)&&(a=a.insert(l,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return ge.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wi(i.createTime)}}(n)),ge.resolve()}getNamedQuery(e,n){return ge.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:Jx(i.bundledQuery),readTime:Wi(i.readTime)}}(n)),ge.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.overlays=new rn(Be.comparator),this.Lr=new Map}getOverlay(e,n){return ge.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fi();return ge.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),ge.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),ge.resolve()}getOverlaysForCollection(e,n,r){const i=fi(),s=n.length+1,o=new Be(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return ge.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new rn((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=fi(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const a=fi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,p)=>a.set(h,p)),!(a.size()>=i)););return ge.resolve(a)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Nx(n,r));let s=this.Lr.get(n);s===void 0&&(s=qt(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.sessionToken=Wn.EMPTY_BYTE_STRING}getSessionToken(e){return ge.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ge.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.kr=new Vt(St.Kr),this.qr=new Vt(St.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new St(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new St(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Be(new bt([])),r=new St(n,e),i=new St(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Be(new bt([])),r=new St(n,e),i=new St(n,e+1);let s=qt();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new St(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class St{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Be.comparator(e.key,n.key)||Ze(e.Hr,n.Hr)}static Ur(e,n){return Ze(e.Hr,n.Hr)||Be.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Vt(St.Kr)}checkEmpty(e){return ge.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ox(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Jr=this.Jr.add(new St(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ge.resolve(o)}lookupMutationBatch(e,n){return ge.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return ge.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ge.resolve(this.mutationQueue.length===0?dd:this.Yn-1)}getAllMutationBatches(e){return ge.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new St(n,0),i=new St(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),ge.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Vt(Ze);return n.forEach(i=>{const s=new St(i,0),o=new St(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),ge.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Be.isDocumentKey(s)||(s=s.child(""));const o=new St(new Be(s),0);let a=new Vt(Ze);return this.Jr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(l.Hr)),!0)},o),ge.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){yt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return ge.forEach(n.mutations,i=>{const s=new St(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new St(n,0),i=this.Jr.firstAfterOrEqual(r);return ge.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ge.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.ti=e,this.docs=function(){return new rn(Be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return ge.resolve(r?r.document.mutableCopy():bn.newInvalidDocument(n))}getEntries(e,n){let r=Za();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():bn.newInvalidDocument(i))}),ge.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Za();const o=n.path,a=new Be(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:p}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zC(UC(p),r)<=0||(i.has(p.key)||yd(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return ge.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Ue(9500)}ni(e,n){return ge.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new dk(this)}getSize(e){return ge.resolve(this.size)}}class dk extends rk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),ge.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.persistence=e,this.ri=new Si(n=>md(n),vd),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.ii=0,this.si=new wd,this.targetCount=0,this.oi=is._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),ge.resolve()}getLastRemoteSnapshotVersion(e){return ge.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ge.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ge.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),ge.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new is(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,ge.resolve()}updateTargetData(e,n){return this.lr(n),ge.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,ge.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),ge.waitFor(s).next(()=>i)}getTargetCount(e){return ge.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return ge.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),ge.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),ge.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),ge.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return ge.resolve(r)}containsKey(e,n){return ge.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){this._i={},this.overlays={},this.ai=new ud(0),this.ui=!1,this.ui=!0,this.ci=new lk,this.referenceDelegate=e(this),this.li=new hk(this),this.indexManager=new Qx,this.remoteDocumentCache=function(i){return new uk(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Kx(n),this.Pi=new ok(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ak,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new ck(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){Re("MemoryPersistence","Starting transaction:",e);const i=new fk(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return ge.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class fk extends qC{constructor(e){super(),this.currentSequenceNumber=e}}class Ed{constructor(e){this.persistence=e,this.Ri=new wd,this.Ai=null}static Vi(e){return new Ed(e)}get di(){if(this.Ai)return this.Ai;throw Ue(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),ge.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),ge.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),ge.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ge.forEach(this.di,r=>{const i=Be.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ct.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return ge.or([()=>ge.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class nl{constructor(e,n){this.persistence=e,this.fi=new Si(r=>GC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=nk(this,n)}static Vi(e,n){return new nl(e,n)}Ti(){}Ii(e){return ge.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return ge.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?ge.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,ct.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),ge.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ge.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ge.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),ge.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ka(e.data.value)),n}wr(e,n,r){return ge.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return ge.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=qt(),i=qt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Id(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return jw()?8:HC(Jt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pk;return this.ys(e,n,o).next(a=>{if(s.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Vi()<=je.DEBUG&&Re("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ge.resolve()):(Vi()<=je.DEBUG&&Re("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Vi()<=je.DEBUG&&Re("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yi(n))):ge.resolve())}gs(e,n){if(wp(n))return ge.resolve(null);let r=yi(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pu(n,null,"F"),r=yi(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=qt(...s);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.bs(n,a);return this.Ss(n,h,o,l.readTime)?this.gs(e,pu(n,null,"F")):this.Ds(e,h,n,l)}))})))}ps(e,n,r,i){return wp(n)||i.isEqual(ct.min())?ge.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?ge.resolve(null):(Vi()<=je.DEBUG&&Re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rs(n)),this.Ds(e,o,n,BC(i,mo)).next(a=>a))})}bs(e,n){let r=new Vt(vx(e));return n.forEach((i,s)=>{yd(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Vi()<=je.DEBUG&&Re("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.fs.getDocumentsMatchingQuery(e,n,Wr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="LocalStore";class vk{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new rn(Ze),this.Fs=new Si(s=>md(s),vd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function yk(t,e,n,r){return new vk(t,e,n,r)}async function Iy(t,e){const n=it(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=qt();for(const h of i){o.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of s){a.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:a}))})})}function _k(t,e){const n=it(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,h,p){const g=h.batch,v=g.keys();let m=ge.resolve();return v.forEach(_=>{m=m.next(()=>p.getEntry(l,_)).next(u=>{const C=h.docVersions.get(_);yt(C!==null,48541),u.version.compareTo(C)<0&&(g.applyToRemoteDocument(u,h),u.isValidDocument()&&(u.setReadTime(h.commitVersion),p.addEntry(u)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=qt();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function bk(t){const e=it(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function wk(t,e){const n=it(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=dd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Rp{constructor(){this.activeTargetIds=Ix()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ek{constructor(){this.vo=new Rp,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Rp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="ConnectivityMonitor";class Op{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Re(Pp,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Re(Pp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua=null;function yu(){return ua===null?ua=function(){return 268435456+Math.round(2147483648*Math.random())}():ua++,"0x"+ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="RestConnection",Ck={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class xk{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Ja?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=yu(),a=this.Qo(e,n.toUriEncodedString());Re(Ic,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:h}=new URL(a),p=as(h);return this.zo(e,a,l,r,p).then(g=>(Re(Ic,`Received RPC '${e}' ${o}: `,g),g),g=>{throw go(Ic,`RPC '${e}' ${o} failed with error: `,g,"url: ",a,"request:",r),g})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=Ck[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection",Ps=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Gi extends xk{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gi.c_){const e=Fv();Ps(e,$v.STAT_EVENT,n=>{n.stat===au.PROXY?Re(Ft,"STAT_EVENT: detected buffering proxy"):n.stat===au.NOPROXY&&Re(Ft,"STAT_EVENT: detected no buffering proxy")}),Gi.c_=!0}}zo(e,n,r,i,s){const o=yu();return new Promise((a,l)=>{const h=new Lv;h.setWithCredentials(!0),h.listenOnce(Vv.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case xa.NO_ERROR:const g=h.getResponseJson();Re(Ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),a(g);break;case xa.TIMEOUT:Re(Ft,`RPC '${e}' ${o} timed out`),l(new Ne(be.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const v=h.getStatus();if(Re(Ft,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let m=h.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const u=function(x){const A=x.toLowerCase().replace(/_/g,"-");return Object.values(be).indexOf(A)>=0?A:be.UNKNOWN}(_.status);l(new Ne(u,_.message))}else l(new Ne(be.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Ne(be.UNAVAILABLE,"Connection failed."));break;default:Ue(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Re(Ft,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);Re(Ft,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",p,r,15)})}T_(e,n,r){const i=yu(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const h=s.join("");Re(Ft,`Creating RPC '${e}' stream ${i}: ${h}`,a);const p=o.createWebChannel(h,a);this.I_(p);let g=!1,v=!1;const m=new kk({Ho:_=>{v?Re(Ft,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(g||(Re(Ft,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Re(Ft,`RPC '${e}' stream ${i} sending:`,_),p.send(_))},Jo:()=>p.close()});return Ps(p,Ms.EventType.OPEN,()=>{v||(Re(Ft,`RPC '${e}' stream ${i} transport opened.`),m.i_())}),Ps(p,Ms.EventType.CLOSE,()=>{v||(v=!0,Re(Ft,`RPC '${e}' stream ${i} transport closed`),m.o_(),this.E_(p))}),Ps(p,Ms.EventType.ERROR,_=>{v||(v=!0,go(Ft,`RPC '${e}' stream ${i} transport errored. Name:`,_.name,"Message:",_.message),m.o_(new Ne(be.UNAVAILABLE,"The operation could not be completed")))}),Ps(p,Ms.EventType.MESSAGE,_=>{var u;if(!v){const C=_.data[0];yt(!!C,16349);const x=C,A=(x==null?void 0:x.error)||((u=x[0])==null?void 0:u.error);if(A){Re(Ft,`RPC '${e}' stream ${i} received error:`,A);const V=A.status;let M=function(I){const b=wt[I];if(b!==void 0)return Mx(b)}(V),F=A.message;V==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&go(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=be.INTERNAL,F="Unknown error status: "+V+" with message "+A.message),v=!0,m.o_(new Ne(M,F)),p.close()}else Re(Ft,`RPC '${e}' stream ${i} received:`,C),m.__(C)}}),Gi.u_(),setTimeout(()=>{m.s_()},0),m}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Bv()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){return new Gi(t)}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){return new Lx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gi.c_=!1;class Cy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="PersistentStream";class Sk{constructor(e,n,r,i,s,o,a,l){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Cy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===be.RESOURCE_EXHAUSTED?(wi(n.toString()),wi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===be.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new Ne(be.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Re(Np,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(Re(Np,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ak extends Sk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return yt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,yt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){yt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=qx(e.writeResults,e.commitTime),r=Wi(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ux(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jx(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{}class Pk extends Rk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Ne(be.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,mu(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===be.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ne(be.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,mu(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===be.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ne(be.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Ok(t,e,n,r){return new Pk(t,e,n,r)}class Nk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(wi(n),this.aa=!1):Re("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="RemoteStore";class Dk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{$o(this)&&(Re(Lo,"Restarting streams for network reachability change."),await async function(l){const h=it(l);h.Ea.add(4),await Vo(h),h.Va.set("Unknown"),h.Ea.delete(4),await Dl(h)}(this))})}),this.Va=new Nk(r,i)}}async function Dl(t){if($o(t))for(const e of t.Ra)await e(!0)}async function Vo(t){for(const e of t.Ra)await e(!1)}function $o(t){return it(t).Ea.size===0}async function xy(t,e,n){if(!Do(e))throw e;t.Ea.add(1),await Vo(t),t.Va.set("Offline"),n||(n=()=>bk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Re(Lo,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Dl(t)})}function ky(t,e){return e().catch(n=>xy(t,n,e))}async function Ml(t){const e=it(t),n=Kr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:dd;for(;Mk(e);)try{const i=await wk(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,Lk(e,i)}catch(i){await xy(e,i)}Ty(e)&&Sy(e)}function Mk(t){return $o(t)&&t.Ta.length<10}function Lk(t,e){t.Ta.push(e);const n=Kr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Ty(t){return $o(t)&&!Kr(t).x_()&&t.Ta.length>0}function Sy(t){Kr(t).start()}async function Vk(t){Kr(t).ra()}async function $k(t){const e=Kr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Fk(t,e,n){const r=t.Ta.shift(),i=bd.from(r,e,n);await ky(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ml(t)}async function Bk(t,e){e&&Kr(t).Y_&&await async function(r,i){if(function(o){return Dx(o)&&o!==be.ABORTED}(i.code)){const s=r.Ta.shift();Kr(r).B_(),await ky(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ml(r)}}(t,e),Ty(t)&&Sy(t)}async function Dp(t,e){const n=it(t);n.asyncQueue.verifyOperationInProgress(),Re(Lo,"RemoteStore received new credentials");const r=$o(n);n.Ea.add(3),await Vo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Dl(n)}async function Uk(t,e){const n=it(t);e?(n.Ea.delete(2),await Dl(n)):e||(n.Ea.add(2),await Vo(n),n.Va.set("Unknown"))}function Kr(t){return t.fa||(t.fa=function(n,r,i){const s=it(n);return s.sa(),new Ak(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Vk.bind(null,t),t_:Bk.bind(null,t),ta:$k.bind(null,t),na:Fk.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ml(t)):(await t.fa.stop(),t.Ta.length>0&&(Re(Lo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Cd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ne(be.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ay(t,e){if(wi("AsyncQueue",`${e}: ${t}`),Do(t))return new Ne(be.UNAVAILABLE,`${e}: ${t}`);throw t}class zk{constructor(){this.queries=Mp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=it(n),s=i.queries;i.queries=Mp(),s.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new Ne(be.ABORTED,"Firestore shutting down"))}}function Mp(){return new Si(t=>oy(t),sy)}function jk(t){t.Ca.forEach(e=>{e.next()})}var Lp,Vp;(Vp=Lp||(Lp={})).Ma="default",Vp.Cache="cache";const qk="SyncEngine";class Hk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Si(a=>oy(a),sy),this.Iu=new Map,this.Eu=new Set,this.Ru=new rn(Be.comparator),this.Au=new Map,this.Vu=new wd,this.du={},this.mu=new Map,this.fu=is.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Wk(t,e,n){const r=Qk(t);try{const i=await function(o,a){const l=it(o),h=ut.now(),p=a.reduce((m,_)=>m.add(_.key),qt());let g,v;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=Za(),u=qt();return l.xs.getEntries(m,p).next(C=>{_=C,_.forEach((x,A)=>{A.isValidDocument()||(u=u.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(C=>{g=C;const x=[];for(const A of a){const V=Rx(A,g.get(A.key).overlayedDocument);V!=null&&x.push(new Ai(A.key,V,Xv(V.value.mapValue),cr.exists(!0)))}return l.mutationQueue.addMutationBatch(m,h,x,a)}).next(C=>{v=C;const x=C.applyToLocalDocumentSet(g,u);return l.documentOverlayCache.saveOverlays(m,C.batchId,x)})}).then(()=>({batchId:v.batchId,changes:ly(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let h=o.du[o.currentUser.toKey()];h||(h=new rn(Ze)),h=h.insert(a,l),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ll(r,i.changes),await Ml(r.remoteStore)}catch(i){const s=Ay(i,"Failed to persist write");n.reject(s)}}function $p(t,e,n){const r=it(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=it(o);l.onlineState=a;let h=!1;l.queries.forEach((p,g)=>{for(const v of g.ba)v.va(a)&&(h=!0)}),h&&jk(l)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gk(t,e){const n=it(t),r=e.batch.batchId;try{const i=await _k(n.localStore,e);Py(n,r,null),Ry(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ll(n,i)}catch(i){await cd(i)}}async function Kk(t,e,n){const r=it(t);try{const i=await function(o,a){const l=it(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return l.mutationQueue.lookupMutationBatch(h,a).next(g=>(yt(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,p,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>l.localDocuments.getDocuments(h,p))})}(r.localStore,e);Py(r,e,n),Ry(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ll(r,i)}catch(i){await cd(i)}}function Ry(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Py(t,e,n){const r=it(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}async function Ll(t,e,n){const r=it(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){i.push(h);const g=Id.Es(l.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(l,h){const p=it(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>ge.forEach(h,v=>ge.forEach(v.Ts,m=>p.persistence.referenceDelegate.addReference(g,v.targetId,m)).next(()=>ge.forEach(v.Is,m=>p.persistence.referenceDelegate.removeReference(g,v.targetId,m)))))}catch(g){if(!Do(g))throw g;Re(mk,"Failed to update sequence numbers: "+g)}for(const g of h){const v=g.targetId;if(!g.fromCache){const m=p.vs.get(v),_=m.snapshotVersion,u=m.withLastLimboFreeSnapshotVersion(_);p.vs=p.vs.insert(v,u)}}}(r.localStore,s))}async function Jk(t,e){const n=it(t);if(!n.currentUser.isEqual(e)){Re(qk,"User change. New user:",e.toKey());const r=await Iy(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new Ne(be.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ll(n,r.Ns)}}function Qk(t){const e=it(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kk.bind(null,e),e}class rl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return yk(this.persistence,new gk,e.initialUser,this.serializer)}Cu(e){return new Ey(Ed.Vi,this.serializer)}Du(e){return new Ek}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rl.provider={build:()=>new rl};class Yk extends rl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){yt(this.persistence.referenceDelegate instanceof nl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ek(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new Ey(r=>nl.Vi(r,n),this.serializer)}}class _u{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$p(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jk.bind(null,this.syncEngine),await Uk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zk}()}createDatastore(e){const n=Nl(e.databaseInfo.databaseId),r=Tk(e.databaseInfo);return Ok(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Dk(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$p(this.syncEngine,n,0),function(){return Op.v()?new Op:new Ik}())}createSyncEngine(e,n){return function(i,s,o,a,l,h,p){const g=new Hk(i,s,o,a,l,h);return p&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=it(i);Re(Lo,"RemoteStore shutting down."),s.Ea.add(5),await Vo(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}_u.provider={build:()=>new _u};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="FirestoreClient";class Xk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=zt.UNAUTHENTICATED,this.clientId=ad.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Re(Jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Re(Jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ay(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xc(t,e){t.asyncQueue.verifyOperationInProgress(),Re(Jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Iy(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zk(t);Re(Jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dp(e.remoteStore,i)),t._onlineComponents=e}async function Zk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Re(Jr,"Using user provided OfflineComponentProvider");try{await xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===be.FAILED_PRECONDITION||i.code===be.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;go("Error using user provided cache. Falling back to memory cache: "+n),await xc(t,new rl)}}else Re(Jr,"Using default OfflineComponentProvider"),await xc(t,new Yk(void 0));return t._offlineComponents}async function eT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Re(Jr,"Using user provided OnlineComponentProvider"),await Fp(t,t._uninitializedComponentsProvider._online)):(Re(Jr,"Using default OnlineComponentProvider"),await Fp(t,new _u))),t._onlineComponents}function tT(t){return eT(t).then(e=>e.syncEngine)}function nT(t,e){const n=new vi;return t.asyncQueue.enqueueAndForget(async()=>Wk(await tT(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="ComponentProvider",Bp=new Map;function iT(t,e,n,r,i){return new YC(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Oy(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="firestore.googleapis.com",Up=!0;class zp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Ne(be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ny,this.ssl=Up}else this.host=e.host,this.ssl=e.ssl??Up;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xx)throw new Ne(be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oy(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Ne(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Ne(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Ne(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ne(be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ne(be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SC;switch(r.type){case"firstParty":return new OC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ne(be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bp.get(n);r&&(Re(rT,"Removing Datastore"),Bp.delete(n),r.terminate())}(this),Promise.resolve()}}function sT(t,e,n,r={}){var h;t=cu(t,xd);const i=as(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(Km(`https://${a}`),Jm("Firestore",!0)),s.host!==Ny&&s.host!==a&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!Hr(l,o)&&(t._setSettings(l),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=zt.MOCK_USER;else{p=Mw(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new Ne(be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new zt(v)}t._authCredentials=new AC(new zv(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kd(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}toJSON(){return{type:Gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(No(n,Gt._jsonSchema))return new Gt(e,r||null,new Be(bt.fromString(n.referencePath)))}}Gt._jsonSchemaVersion="firestore/documentReference/1.0",Gt._jsonSchema={type:It("string",Gt._jsonSchemaVersion),referencePath:It("string")};class bo extends kd{constructor(e,n,r){super(e,n,fx(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new Be(e))}withConverter(e){return new bo(this.firestore,e,this._path)}}function oT(t,e,...n){if(t=$t(t),arguments.length===1&&(e=ad.newId()),$C("doc","path",e),t instanceof xd){const r=bt.fromString(e,...n);return up(r),new Gt(t,null,new Be(r))}{if(!(t instanceof Gt||t instanceof bo))throw new Ne(be.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(bt.fromString(e,...n));return up(r),new Gt(t.firestore,t instanceof bo?t.converter:null,new Be(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="AsyncQueue";class qp{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Cy(this,"async_queue_retry"),this._c=()=>{const r=Cc();r&&Re(jp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new vi;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Do(e))throw e;Re(jp,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,wi("INTERNAL UNHANDLED ERROR: ",Hp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Cd.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Ue(47125,{Pc:Hp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Hp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Dy extends xd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new qp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qp(e),this._firestoreClient=void 0,await e}}}function aT(t,e){const n=typeof t=="object"?t:Ku(),r=typeof t=="string"?t:Ja,i=Ti(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Nw("firestore");s&&sT(i,...s)}return i}function lT(t){if(t._terminated)throw new Ne(be.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cT(t),t._firestoreClient}function cT(t){var r,i,s,o;const e=t._freezeSettings(),n=iT(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Xk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(Wn.fromBase64String(e))}catch(n){throw new Ne(be.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new En(Wn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:En._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(No(e,En._jsonSchema))return En.fromBase64String(e.bytes)}}En._jsonSchemaVersion="firestore/bytes/1.0",En._jsonSchema={type:It("string",En._jsonSchemaVersion),bytes:It("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ne(be.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ne(be.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ne(be.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ze(this._lat,e._lat)||Ze(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ur._jsonSchemaVersion}}static fromJSON(e){if(No(e,ur._jsonSchema))return new ur(e.latitude,e.longitude)}}ur._jsonSchemaVersion="firestore/geoPoint/1.0",ur._jsonSchema={type:It("string",ur._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(No(e,qn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new qn(e.vectorValues);throw new Ne(be.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qn._jsonSchemaVersion="firestore/vectorValue/1.0",qn._jsonSchema={type:It("string",qn._jsonSchemaVersion),vectorValues:It("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=/^__.*__$/;class dT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mo(e,this.data,n,this.fieldTransforms)}}function Vy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ue(40011,{dataSource:t})}}class Td{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Td({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return il(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Vy(this.dataSource)&&uT.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class hT{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nl(e)}createContext(e,n,r,i=!1){return new Td({dataSource:e,methodName:n,targetDoc:r,path:Mt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fT(t){const e=t._freezeSettings(),n=Nl(t._databaseId);return new hT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pT(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);Uy("Data must be an object, but it was:",o,r);const a=Fy(r,o);let l,h;if(s.merge)l=new Cn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const v=Sd(e,g,n);if(!o.contains(v))throw new Ne(be.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);vT(p,v)||p.push(v)}l=new Cn(p),h=o.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=o.fieldTransforms;return new dT(new wn(a),l,h)}function $y(t,e){if(By(t=$t(t)))return Uy("Unsupported field value:",e,t),Fy(t,e);if(t instanceof Ly)return function(r,i){if(!Vy(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=$y(a,i.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Cx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ut.fromDate(r);return{timestampValue:gu(i.serializer,s)}}if(r instanceof ut){const s=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gu(i.serializer,s)}}if(r instanceof ur)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof En)return{bytesValue:Vx(i.serializer,r._byteString)};if(r instanceof Gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yy(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qn)return function(o,a){const l=o instanceof qn?o.toArray():o;return{mapValue:{fields:{[Qv]:{stringValue:Yv},[uu]:{arrayValue:{values:l.map(p=>{if(typeof p!="number")throw a.createError("VectorValues must only contain numeric values.");return _d(a.serializer,p)})}}}}}}(r,i);if(by(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${ld(r)}`)}(t,e)}function Fy(t,e){const n={};return Hv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,i)=>{const s=$y(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function By(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof ur||t instanceof En||t instanceof Gt||t instanceof Ly||t instanceof qn||by(t))}function Uy(t,e,n){if(!By(n)||!jv(n)){const r=ld(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Sd(t,e,n){if((e=$t(e))instanceof My)return e._internalPath;if(typeof e=="string")return mT(t,e);throw il("Field path arguments must be of type string or ",t,!1,void 0,n)}const gT=new RegExp("[~\\*/\\[\\]]");function mT(t,e,n){if(e.search(gT)>=0)throw il(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new My(...e.split("."))._internalPath}catch{throw il(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function il(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Ne(be.INVALID_ARGUMENT,a+t+l)}function vT(t,e){return t.some(n=>n.isEqual(e))}const Wp="@firebase/firestore",Gp="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Sd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yT extends zy{data(){return super.data()}}function _T(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ki extends zy{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Ne(be.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ki._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ki._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ki._jsonSchema={type:It("string",Ki._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class Aa extends Ki{data(e={}){return super.data(e)}}class eo{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new da(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Aa(this._firestore,this._userDataWriter,r.key,r,new da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ne(be.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Aa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new da(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Aa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new da(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),p=o.indexOf(a.doc.key)),{type:bT(a.type),doc:l,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Ne(be.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=eo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ad.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ue(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eo._jsonSchemaVersion="firestore/querySnapshot/1.0",eo._jsonSchema={type:It("string",eo._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};function wT(t,e,n){t=cu(t,Gt);const r=cu(t.firestore,Dy),i=_T(t.converter,e,n),s=fT(r);return ET(r,[pT(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,cr.none())])}function ET(t,e){const n=lT(t);return nT(n,e)}(function(e,n=!0){TC(ls),Hn(new Pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Dy(new RC(r.getProvider("auth-internal")),new NC(o,r.getProvider("app-check-internal")),XC(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),pn(Wp,Gp,e),pn(Wp,Gp,"esm2020")})();const jy="@firebase/installations",Ad="0.6.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=1e4,Hy=`w:${Ad}`,Wy="FIS_v2",IT="https://firebaseinstallations.googleapis.com/v1",CT=60*60*1e3,xT="installations",kT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ci=new ki(xT,kT,TT);function Gy(t){return t instanceof On&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky({projectId:t}){return`${IT}/projects/${t}/installations`}function Jy(t){return{token:t.token,requestStatus:2,expiresIn:AT(t.expiresIn),creationTime:Date.now()}}async function Qy(t,e){const r=(await e.json()).error;return Ci.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ST(t,{refreshToken:e}){const n=Yy(t);return n.append("Authorization",RT(e)),n}async function Xy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function AT(t){return Number(t.replace("s","000"))}function RT(t){return`${Wy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ky(t),i=Yy(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:Wy,appId:t.appId,sdkVersion:Hy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Xy(()=>fetch(r,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Jy(h.authToken)}}else throw await Qy("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=/^[cdef][\w-]{21}$/,bu="";function DT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=MT(t);return NT.test(n)?n:bu}catch{return bu}}function MT(t){return OT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new Map;function t1(t,e){const n=Vl(t);n1(n,e),LT(n,e)}function n1(t,e){const n=e1.get(t);if(n)for(const r of n)r(e)}function LT(t,e){const n=VT();n&&n.postMessage({key:t,fid:e}),$T()}let pi=null;function VT(){return!pi&&"BroadcastChannel"in self&&(pi=new BroadcastChannel("[Firebase] FID Change"),pi.onmessage=t=>{n1(t.data.key,t.data.fid)}),pi}function $T(){e1.size===0&&pi&&(pi.close(),pi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="firebase-installations-database",BT=1,xi="firebase-installations-store";let kc=null;function Rd(){return kc||(kc=Zm(FT,BT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xi)}}})),kc}async function sl(t,e){const n=Vl(t),i=(await Rd()).transaction(xi,"readwrite"),s=i.objectStore(xi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&t1(t,e.fid),e}async function r1(t){const e=Vl(t),r=(await Rd()).transaction(xi,"readwrite");await r.objectStore(xi).delete(e),await r.done}async function $l(t,e){const n=Vl(t),i=(await Rd()).transaction(xi,"readwrite"),s=i.objectStore(xi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&t1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pd(t){let e;const n=await $l(t.appConfig,r=>{const i=UT(r),s=zT(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===bu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function UT(t){const e=t||{fid:DT(),registrationStatus:0};return i1(e)}function zT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qT(t)}:{installationEntry:e}}async function jT(t,e){try{const n=await PT(t,e);return sl(t.appConfig,n)}catch(n){throw Gy(n)&&n.customData.serverCode===409?await r1(t.appConfig):await sl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qT(t){let e=await Kp(t.appConfig);for(;e.registrationStatus===1;)await Zy(100),e=await Kp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pd(t);return r||n}return e}function Kp(t){return $l(t,e=>{if(!e)throw Ci.create("installation-not-found");return i1(e)})}function i1(t){return HT(t)?{fid:t.fid,registrationStatus:0}:t}function HT(t){return t.registrationStatus===1&&t.registrationTime+qy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT({appConfig:t,heartbeatServiceProvider:e},n){const r=GT(t,n),i=ST(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:Hy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Xy(()=>fetch(r,a));if(l.ok){const h=await l.json();return Jy(h)}else throw await Qy("Generate Auth Token",l)}function GT(t,{fid:e}){return`${Ky(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(t,e=!1){let n;const r=await $l(t.appConfig,s=>{if(!s1(s))throw Ci.create("not-registered");const o=s.authToken;if(!e&&QT(o))return s;if(o.requestStatus===1)return n=KT(t,e),s;{if(!navigator.onLine)throw Ci.create("app-offline");const a=XT(s);return n=JT(t,a),a}});return n?await n:r.authToken}async function KT(t,e){let n=await Jp(t.appConfig);for(;n.authToken.requestStatus===1;)await Zy(100),n=await Jp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Od(t,e):r}function Jp(t){return $l(t,e=>{if(!s1(e))throw Ci.create("not-registered");const n=e.authToken;return ZT(n)?{...e,authToken:{requestStatus:0}}:e})}async function JT(t,e){try{const n=await WT(t,e),r={...e,authToken:n};return await sl(t.appConfig,r),n}catch(n){if(Gy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await r1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await sl(t.appConfig,r)}throw n}}function s1(t){return t!==void 0&&t.registrationStatus===2}function QT(t){return t.requestStatus===2&&!YT(t)}function YT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+CT}function XT(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function ZT(t){return t.requestStatus===1&&t.requestTime+qy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(t){const e=t,{installationEntry:n,registrationPromise:r}=await Pd(e);return r?r.catch(console.error):Od(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(t,e=!1){const n=t;return await nS(n),(await Od(n,e)).token}async function nS(t){const{registrationPromise:e}=await Pd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t){if(!t||!t.options)throw Tc("App Configuration");if(!t.name)throw Tc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tc(t){return Ci.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="installations",iS="installations-internal",sS=t=>{const e=t.getProvider("app").getImmediate(),n=rS(e),r=Ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},oS=t=>{const e=t.getProvider("app").getImmediate(),n=Ti(e,o1).getImmediate();return{getId:()=>eS(n),getToken:i=>tS(n,i)}};function aS(){Hn(new Pn(o1,sS,"PUBLIC")),Hn(new Pn(iS,oS,"PRIVATE"))}aS();pn(jy,Ad);pn(jy,Ad,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="analytics",lS="firebase_id",cS="origin",uS=60*1e3,dS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new kl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},un=new ki("analytics","Analytics",hS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){if(!t.startsWith(Nd)){const e=un.create("invalid-gtag-resource",{gtagURL:t});return en.warn(e.message),""}return t}function a1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function pS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function gS(t,e){const n=pS("firebase-js-sdk-policy",{createScriptURL:fS}),r=document.createElement("script"),i=`${Nd}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function mS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vS(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await a1(n)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(a){en.error(a)}t("config",i,s)}async function yS(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await a1(n);for(const l of o){const h=a.find(g=>g.measurementId===l),p=h&&e[h.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){en.error(s)}}function _S(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await yS(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await vS(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,h]=o;t("get",a,l,h)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){en.error(a)}}return i}function bS(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=_S(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function wS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=30,IS=1e3;class CS{constructor(e={},n=IS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const l1=new CS;function xS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function kS(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:xS(n)},i=dS.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw un.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function TS(t,e=l1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw un.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw un.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new RS;return setTimeout(async()=>{a.abort()},uS),c1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function c1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=l1){var a;const{appId:s,measurementId:o}=t;try{await SS(r,e)}catch(l){if(o)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await kS(t);return i.deleteThrottleMetadata(s),l}catch(l){const h=l;if(!AS(h)){if(i.deleteThrottleMetadata(s),o)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:o};throw l}const p=Number((a=h==null?void 0:h.customData)==null?void 0:a.httpStatus)===503?Pf(n,i.intervalMillis,ES):Pf(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(s,g),en.debug(`Calling attemptFetch again in ${p} millis`),c1(t,g,r,i)}}function SS(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(un.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function AS(t){if(!(t instanceof On)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class RS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function PS(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function OS(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(){if(Hu())try{await Wu()}catch(t){return en.warn(un.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return en.warn(un.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function DS(t,e,n,r,i,s,o){const a=TS(t);a.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>en.error(v)),e.push(a);const l=NS().then(v=>{if(v)return r.getId()}),[h,p]=await Promise.all([a,l]);wS(s)||gS(s,h.measurementId),i("js",new Date);const g=(o==null?void 0:o.config)??{};return g[cS]="firebase",g.update=!0,p!=null&&(g[lS]=p),i("config",h.measurementId,g),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.app=e}_delete(){return delete Ji[this.app.options.appId],Promise.resolve()}}let Ji={},Qp=[];const Yp={};let Sc="dataLayer",LS="gtag",Xp,Dd,Zp=!1;function VS(){const t=[];if(qu()&&t.push("This is a browser extension environment."),Qm()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=un.create("invalid-analytics-context",{errorInfo:e});en.warn(n.message)}}function $S(t,e,n){VS();const r=t.options.appId;if(!r)throw un.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw un.create("no-api-key");if(Ji[r]!=null)throw un.create("already-exists",{id:r});if(!Zp){mS(Sc);const{wrappedGtag:s,gtagCore:o}=bS(Ji,Qp,Yp,Sc,LS);Dd=s,Xp=o,Zp=!0}return Ji[r]=DS(t,Qp,Yp,e,Xp,Sc,n),new MS(t)}function FS(t=Ku()){t=$t(t);const e=Ti(t,ol);return e.isInitialized()?e.getImmediate():BS(t)}function BS(t,e={}){const n=Ti(t,ol);if(n.isInitialized()){const i=n.getImmediate();if(Hr(e,n.getOptions()))return i;throw un.create("already-initialized")}return n.initialize({options:e})}async function US(){if(qu()||!Qm()||!Hu())return!1;try{return await Wu()}catch{return!1}}function zS(t,e,n){t=$t(t),OS(Dd,Ji[t.app.options.appId],e,n).catch(r=>en.error(r))}function jS(t,e,n,r){t=$t(t),PS(Dd,Ji[t.app.options.appId],e,n,r).catch(i=>en.error(i))}const eg="@firebase/analytics",tg="0.10.20";function qS(){Hn(new Pn(ol,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $S(r,i,n)},"PUBLIC")),Hn(new Pn("analytics-internal",t,"PRIVATE")),pn(eg,tg),pn(eg,tg,"esm2020");function t(e){try{const n=e.getProvider(ol).getImmediate();return{logEvent:(r,i,s)=>jS(n,r,i,s),setUserProperties:(r,i)=>zS(n,r,i)}}catch(n){throw un.create("interop-component-reg-failed",{reason:n})}}}qS();const HS={apiKey:"AIzaSyBcbduc3YI8apT4rqL-gCha2v0NFMO__ds",authDomain:"powerpoint-ai-authoring-tool.firebaseapp.com",projectId:"powerpoint-ai-authoring-tool",storageBucket:"powerpoint-ai-authoring-tool.firebasestorage.app",messagingSenderId:"262485353950",appId:"1:262485353950:web:e894909bd1a8c1c2f8a94f",measurementId:"G-F7VD36R6PQ"},Md=ev(HS);US().then(t=>{t&&FS(Md)});const Xn=xC(Md),WS=new rr,GS=new Js("microsoft.com"),KS=aT(Md),Fo=El("auth",()=>{const t=pe(null),e=pe(!1);async function n(p){if(p)try{const g=oT(KS,"users",p.uid);await wT(g,{email:p.email,displayName:p.displayName||"Unknown User",photoURL:p.photoURL||"",lastActive:new Date().toISOString()},{merge:!0})}catch(g){console.error("Failed to track user activity in Firestore",g)}}pI(Xn,p=>{t.value=p,e.value=!0,p&&n(p)});async function r(){try{const p=await Zf(Xn,WS);return t.value=p.user,p.user}catch(p){throw console.error("Google Sign-In Error:",p),p}}async function i(){try{const p=await Zf(Xn,GS);return t.value=p.user,p.user}catch(p){throw console.error("Microsoft Sign-In Error:",p),p}}async function s(p,g){try{const v=await dI(Xn,p,g);return t.value=v.user,v.user}catch(v){throw console.error("Email Sign-In Error:",v),v}}async function o(p,g){try{const v=await uI(Xn,p,g);return t.value=v.user,await Qf(v.user),v.user}catch(v){throw console.error("Email Sign-Up Error:",v),v}}async function a(){t.value&&await Qf(t.value)}async function l(){Xn.currentUser&&(await Xn.currentUser.reload(),t.value=Xn.currentUser)}async function h(){try{await gI(Xn),t.value=null}catch(p){console.error("Sign-Out Error:",p)}}return{user:t,isAuthReady:e,loginWithGoogle:r,loginWithMicrosoft:i,loginWithEmail:s,signUpWithEmail:o,resendVerification:a,reloadUser:l,logout:h}}),wo="elearn_projects";function u1(){return{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif",fontSize:16,headingFont:"Inter, sans-serif"}}function wu(t=0){return{id:_n(),title:`Slide ${t+1}`,background:"#ffffff",backgroundType:"color",backgroundGradient:"",backgroundImage:"",elements:[],notes:"",order:t,transition:"none",duration:0}}function Ac(t="Untitled Project"){const e=wu(0);return{id:_n(),name:t,description:"",thumbnail:"",slides:[e],theme:u1(),createdAt:Date.now(),updatedAt:Date.now(),version:"1.0",authorName:"",tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0}}}function JS(t,e={}){const n=d1(t);return{id:_n(),type:t,x:e.x??100,y:e.y??100,width:e.width??n.width,height:e.height??n.height,rotation:e.rotation??0,zIndex:e.zIndex??1,locked:!1,visible:!0,opacity:e.opacity??1,content:{...n.content||{},...e.content||{}},styles:{...n.styles||{}},interactions:e.interactions||[],animations:e.animations||[]}}function QS(t,e=0){return{id:_n(),title:t.title||`Slide ${e+1}`,background:t.background||"#ffffff",backgroundType:t.backgroundType||"color",backgroundGradient:t.backgroundGradient||"",backgroundImage:t.backgroundImage||"",elements:(t.elements||[]).map((n,r)=>JS(n.type,{...n,zIndex:n.zIndex??r+1})),notes:t.notes||"",order:e,transition:t.transition||"none",duration:t.duration||0}}function YS(t,e){return{microcourse:{description:"Interactive lesson template",theme:{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#f8f8ff",textColor:"#1a1a2e"},slides:[{title:"Course Intro",background:"#f8f8ff",elements:[{type:"heading",x:80,y:72,width:800,height:84,content:{text:e||"Microcourse: AI in Education",textAlign:"left"}},{type:"text",x:80,y:170,width:760,height:90,content:{text:"Learning objective: understand practical AI use-cases for classrooms and workplace training."}},{type:"button",x:80,y:292,width:180,height:50,content:{label:"Start Lesson",action:"navigate",target:"2"}},{type:"shape",x:700,y:320,width:190,height:130,content:{shapeType:"rectangle",fillColor:"#00c9a7",borderRadius:18}}]},{title:"Knowledge Check",background:"#ffffff",elements:[{type:"heading",x:80,y:44,width:600,height:70,content:{text:"Quick Check",textAlign:"left",fontSize:40}},{type:"quiz",x:80,y:130,width:760,height:330,content:{question:"Which AI feature best supports personalized learning?",options:["Automated attendance only","Adaptive feedback based on learner progress","Static PDF handouts","Manual grading spreadsheets"],correctIndex:1,explanation:"Adaptive feedback tailors support based on learner responses and performance."}}]}]},chromatic:{description:"Modern presentation starter",theme:{primaryColor:"#7c3aed",secondaryColor:"#ec4899",bgColor:"#ffffff",textColor:"#1f1638"},slides:[{title:"Title Slide",backgroundType:"gradient",backgroundGradient:"linear-gradient(135deg, #faf5ff 0%, #fff1f2 100%)",elements:[{type:"heading",x:90,y:130,width:780,height:88,content:{text:e||"Chromatic Presentation",textAlign:"center",fontSize:52}},{type:"text",x:180,y:232,width:600,height:70,content:{text:"A colorful template to introduce your topic with style.",textAlign:"center"}},{type:"button",x:390,y:328,width:180,height:48,content:{label:"Continue",action:"navigate",target:"2",variant:"primary",bgColor:"#7c3aed"}}]}]},branching:{description:"Branching scenario template",theme:{primaryColor:"#2563eb",secondaryColor:"#14b8a6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Decision Point",background:"#f8fafc",elements:[{type:"heading",x:80,y:60,width:740,height:74,content:{text:"Branching Scenario",textAlign:"left"}},{type:"text",x:80,y:150,width:800,height:80,content:{text:"A customer asks for a full refund after the deadline. What do you do first?"}},{type:"button",x:80,y:270,width:290,height:54,content:{label:"Option A: Escalate to manager",action:"navigate",target:"2"}},{type:"button",x:390,y:270,width:290,height:54,content:{label:"Option B: Offer partial credit",action:"navigate",target:"3"}},{type:"hotspot",x:770,y:420,width:66,height:66,content:{icon:"i",popupTitle:"Facilitator Tip",popupContent:"Ask learners why they chose each option before revealing outcomes."}}]}]},flipcards:{description:"Interactive card challenge starter",theme:{primaryColor:"#0891b2",secondaryColor:"#f59e0b",bgColor:"#f0f9ff",textColor:"#0f172a"},slides:[{title:"Flipcards Activity",background:"#f0f9ff",elements:[{type:"heading",x:80,y:58,width:800,height:74,content:{text:"Flipcards Museum",textAlign:"left"}},{type:"text",x:80,y:138,width:780,height:64,content:{text:"Prompt learners to reveal each card and discuss what they discover."}},{type:"shape",x:120,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:380,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:640,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}}]}]},"higher-ed":{description:"Higher education lecture starter",theme:{primaryColor:"#1d4ed8",secondaryColor:"#16a34a",bgColor:"#ffffff",textColor:"#0f172a"},slides:[{title:"Lecture Overview",background:"#ffffff",elements:[{type:"heading",x:80,y:70,width:790,height:80,content:{text:e||"Higher Education",textAlign:"left"}},{type:"text",x:80,y:170,width:780,height:124,content:{text:"Use this deck to define outcomes, introduce key concepts, and include formative checks."}},{type:"button",x:80,y:328,width:190,height:48,content:{label:"Add Agenda",action:"none"}}]}]},complete:{description:"Sentence completion quiz starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#22c55e",bgColor:"#f8f7ff",textColor:"#1a1a2e"},slides:[{title:"Complete the Sentence",background:"#f8f7ff",elements:[{type:"heading",x:80,y:55,width:700,height:76,content:{text:"Complete the sentence",textAlign:"left"}},{type:"quiz",x:80,y:140,width:760,height:330,content:{question:"AI literacy in workplaces improves when teams ______.",options:["Avoid practical tasks","Use AI tools with clear guardrails and practice","Rely only on theory","Stop measuring outcomes"],correctIndex:1,explanation:"Practice with clear policies helps teams use AI safely and effectively."}}]}]},"fill-blanks":{description:"Quiz assessment starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#06b6d4",bgColor:"#ffffff",textColor:"#111827"},slides:[{title:"Quiz Assessment",background:"#ffffff",elements:[{type:"heading",x:80,y:48,width:760,height:76,content:{text:"Fill in the blanks",textAlign:"left"}},{type:"text",x:80,y:126,width:760,height:64,content:{text:"Replace with your own question set and publish in minutes."}},{type:"quiz",x:80,y:196,width:760,height:280,content:{question:"The most important part of a good assessment is ______.",options:["Clear learning objective","Random difficulty","Longer text only","Colorful background"],correctIndex:0,explanation:"Assessments should align clearly with learning objectives."}}]}]},timeline:{description:"Timeline infographic starter",theme:{primaryColor:"#0ea5e9",secondaryColor:"#8b5cf6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Data Timeline",background:"#f8fafc",elements:[{type:"heading",x:80,y:40,width:760,height:74,content:{text:"Data Viz Timeline",textAlign:"left"}},{type:"shape",x:100,y:255,width:760,height:8,content:{shapeType:"rectangle",fillColor:"#0ea5e9",borderRadius:8}},{type:"shape",x:170,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:430,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:690,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"text",x:120,y:290,width:150,height:70,content:{text:`Phase 1
Discovery`,textAlign:"center"}},{type:"text",x:380,y:290,width:150,height:70,content:{text:`Phase 2
Build`,textAlign:"center"}},{type:"text",x:640,y:290,width:150,height:70,content:{text:`Phase 3
Launch`,textAlign:"center"}}]}]}}[t]||{description:"Starter template",theme:u1(),slides:[{title:e||"New Slide",background:"#ffffff",elements:[]}]}}function ng(t){const e=t?`${wo}_${t}`:`${wo}_anonymous`;try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function XS(t,e){const n=e?`${wo}_${e}`:`${wo}_anonymous`;try{localStorage.setItem(n,JSON.stringify(t))}catch{}}const dn=El("projects",()=>{const t=Fo(),e=pe([]);Kt(()=>t.user,L=>{const I=ng(L==null?void 0:L.uid);if(L!=null&&L.uid){const b=ng(null);b.length>0&&(b.forEach(w=>{I.find(P=>P.id===w.id)||I.push(w)}),localStorage.removeItem(`${wo}_anonymous`))}e.value=I,L!=null&&L.uid&&r()},{immediate:!0,flush:"sync"});const n=xe(()=>[...e.value].sort((L,I)=>I.updatedAt-L.updatedAt));function r(){var L;XS(e.value,(L=t.user)==null?void 0:L.uid)}function i(L){const I=Ac(L);return e.value.push(I),r(),I}function s(L,I,b=""){const w=YS(L,I),P=Ac(I);return P.description=b||w.description||"",P.theme={...P.theme,...w.theme||{}},P.slides=(w.slides||[]).map((D,E)=>QS(D,E)),P.createdAt=Date.now(),P.updatedAt=Date.now(),e.value.push(P),r(),P}function o(L){const I=e.value.find(w=>w.id===L);if(!I)return null;const b=JSON.parse(JSON.stringify(I));return b.id=_n(),b.name=`${b.name} (copy)`,b.createdAt=Date.now(),b.updatedAt=Date.now(),b.slides=b.slides.map(w=>(w.id=_n(),w.elements=w.elements.map(P=>({...P,id:_n()})),w)),e.value.push(b),r(),b}function a(L){const I=e.value.findIndex(b=>b.id===L);I!==-1&&(e.value.splice(I,1),r())}function l(L){return e.value.find(I=>I.id===L)||null}function h(L,I){const b=e.value.findIndex(w=>w.id===L);b!==-1&&(e.value[b]={...e.value[b],...I,updatedAt:Date.now()},r())}function p(L,I=-1){const b=l(L);if(!b)return null;const w=I>=0?I+1:b.slides.length,P=wu(w);return I>=0?b.slides.splice(I+1,0,P):b.slides.push(P),b.slides.forEach((D,E)=>{D.order=E}),b.updatedAt=Date.now(),r(),P}function g(L,I){const b=l(L);if(!b||b.slides.length<=1)return;const w=b.slides.findIndex(P=>P.id===I);w!==-1&&(b.slides.splice(w,1),b.slides.forEach((P,D)=>{P.order=D}),b.updatedAt=Date.now(),r())}function v(L,I){const b=l(L);if(!b)return null;const w=b.slides.find(E=>E.id===I);if(!w)return null;const P=JSON.parse(JSON.stringify(w));P.id=_n(),P.title=`${P.title} (copy)`;const D=b.slides.findIndex(E=>E.id===I);return b.slides.splice(D+1,0,P),b.slides.forEach((E,R)=>{E.order=R}),b.updatedAt=Date.now(),r(),P}function m(L,I,b){const w=l(L);if(!w)return;const[P]=w.slides.splice(I,1);w.slides.splice(b,0,P),w.slides.forEach((D,E)=>{D.order=E}),w.updatedAt=Date.now(),r()}function _(L,I,b){const w=l(L);if(!w)return;const P=w.slides.find(D=>D.id===I);P&&(Object.assign(P,b),w.updatedAt=Date.now(),r())}function u(L,I,b,w={}){const P=l(L);if(!P)return null;const D=P.slides.find(J=>J.id===I);if(!D)return null;const E=D.elements.reduce((J,ae)=>Math.max(J,ae.zIndex||0),0),R=d1(b),S={id:_n(),type:b,x:100,y:100,width:R.width,height:R.height,rotation:0,zIndex:E+1,locked:!1,visible:!0,opacity:1,...R,...w,interactions:[],animations:[]};return D.elements.push(S),P.updatedAt=Date.now(),r(),S}function C(L,I,b,w){const P=l(L);if(!P)return;const D=P.slides.find(R=>R.id===I);if(!D)return;const E=D.elements.find(R=>R.id===b);E&&(Object.assign(E,w),P.updatedAt=Date.now(),r())}function x(L,I,b){const w=l(L);if(!w)return;const P=w.slides.find(E=>E.id===I);if(!P)return;const D=P.elements.findIndex(E=>E.id===b);D!==-1&&(P.elements.splice(D,1),w.updatedAt=Date.now(),r())}function A(L,I,b){const w=l(L);if(!w)return null;const P=w.slides.find(R=>R.id===I);if(!P)return null;const D=P.elements.find(R=>R.id===b);if(!D)return null;const E=JSON.parse(JSON.stringify(D));return E.id=_n(),E.x+=20,E.y+=20,E.zIndex=D.zIndex+1,P.elements.push(E),w.updatedAt=Date.now(),r(),E}function V(L,I,b,w){const P=l(L);if(!P)return;const D=P.slides.find(J=>J.id===I);if(!D)return;const E=D.elements.find(J=>J.id===b);if(!E)return;const R=D.elements.map(J=>J.zIndex).sort((J,ae)=>J-ae),S=E.zIndex;if(w==="up"){const J=R.find(ae=>ae>S);if(J!==void 0){const ae=D.elements.find(z=>z.zIndex===J);ae&&(ae.zIndex=S,E.zIndex=J)}}else{const J=[...R].reverse().find(ae=>ae<S);if(J!==void 0){const ae=D.elements.find(z=>z.zIndex===J);ae&&(ae.zIndex=S,E.zIndex=J)}}P.updatedAt=Date.now(),r()}function M(L){const I=l(L);return I?JSON.stringify(I,null,2):null}function F(L){try{const I=JSON.parse(L);return I.id=_n(),I.name=`${I.name} (imported)`,I.createdAt=Date.now(),I.updatedAt=Date.now(),e.value.push(I),r(),I}catch{return null}}return{projects:e,sortedProjects:n,createProject:i,createProjectFromTemplate:s,duplicateProject:o,deleteProject:a,getProject:l,updateProject:h,addSlide:p,deleteSlide:g,duplicateSlide:v,reorderSlides:m,updateSlide:_,addElement:u,updateElement:C,deleteElement:x,duplicateElement:A,reorderElement:V,exportProject:M,importProject:F,makeBlankSlide:wu,makeNewProject:Ac}});function d1(t){const e={text:{width:300,height:80,content:{text:"Click to edit text",fontSize:18,fontFamily:"Inter, sans-serif",fontWeight:"normal",fontStyle:"normal",textDecoration:"none",textAlign:"left",color:"#1a1a2e",lineHeight:1.5,textTransform:"none",letterSpacing:0},styles:{}},heading:{width:500,height:80,content:{text:"Heading",fontSize:36,fontFamily:"Inter, sans-serif",fontWeight:"bold",fontStyle:"normal",textDecoration:"none",textAlign:"center",color:"#1a1a2e",lineHeight:1.2,textTransform:"none",letterSpacing:0},styles:{}},image:{width:300,height:200,content:{src:"",alt:"",objectFit:"cover",borderRadius:0,borderWidth:0,borderColor:"#e2e8f0"},styles:{}},shape:{width:150,height:100,content:{shapeType:"rectangle",fillColor:"#6c47ff",borderColor:"transparent",borderWidth:0,borderRadius:8,opacity:1},styles:{}},button:{width:160,height:48,content:{label:"Click Me",variant:"primary",action:"none",target:"",bgColor:"",textColor:"",borderColor:"",borderRadius:8,fontSize:15,fontWeight:600,fontFamily:"Inter, sans-serif",letterSpacing:0},styles:{}},hotspot:{width:60,height:60,content:{icon:"?",bgColor:"#6c47ff",iconColor:"#ffffff",borderRadius:999,tooltip:"Click to learn more",popupContent:"Add your content here...",popupTitle:"Info",popupBgColor:"#ffffff",popupTextColor:"#1a1a2e"},styles:{}},video:{width:480,height:270,content:{src:"",poster:"",autoplay:!1,controls:!0,loop:!1,muted:!1,objectFit:"cover"},styles:{}},audio:{width:280,height:56,content:{src:"",label:"Audio Player",autoplay:!1,controls:!0,loop:!1,bgColor:"#ede7ff",textColor:"#555555",accentColor:"#6c47ff"},styles:{}},divider:{width:400,height:4,content:{color:"#e2e8f0",thickness:2},styles:{}},quiz:{width:480,height:300,content:{question:"Your question here?",options:["Option A","Option B","Option C","Option D"],correctIndex:0,explanation:"",cardBgColor:"#ffffff",questionColor:"#1a1a2e",accentColor:"#6c47ff"},styles:{}}};return e[t]||e.text}const vn=El("editor",()=>{const t=pe(null),e=pe(null),n=pe([]),r=pe(null),i=pe("select"),s=pe("rectangle"),o=pe("properties"),a=pe("slides"),l=pe(!1),h=pe(!1),p=pe(!0),g=pe(20),v=pe(!1),m=pe(1),_=pe(!1),u=pe(!1),C=pe(!1),x=pe(null),A=pe(!1),V=pe(!1),M=pe(!0),F=pe(null),L=pe([]),I=pe(-1),b=20,w=pe(!1),P=pe(!1),D=pe(null),E=pe(0),R=pe(0),S=xe(()=>n.value.length===1?n.value[0]:null),J=xe(()=>n.value.length>0),ae=xe(()=>n.value.length>1);function z(O){t.value=O,n.value=[],L.value=[],I.value=-1,m.value=1}function de(O){e.value=O,n.value=[]}function se(O,N=!1){N&&O?n.value.includes(O)?n.value=n.value.filter(H=>H!==O):n.value=[...n.value,O]:n.value=O?[O]:[]}function Ie(O){n.value=O}function te(){n.value=[]}function Z(O){i.value=O,O!=="select"&&(n.value=[])}function we(O){o.value=O}function ve(O){m.value=Math.max(.25,Math.min(3,O))}function X(){ve(m.value+.1)}function _e(){ve(m.value-.1)}function re(){ve(1)}function ue(){h.value=!h.value}function he(){p.value=!p.value}function ye(){M.value=!M.value}function ke(O){I.value<L.value.length-1&&L.value.splice(I.value+1),L.value.push(JSON.parse(JSON.stringify(O))),L.value.length>b&&L.value.shift(),I.value=L.value.length-1}function q(){return I.value>0}function B(){return I.value<L.value.length-1}function f(){return q()?(I.value--,JSON.parse(JSON.stringify(L.value[I.value]))):null}function G(){return B()?(I.value++,JSON.parse(JSON.stringify(L.value[I.value]))):null}function $(O){F.value=JSON.parse(JSON.stringify(O))}return{projectId:t,currentSlideId:e,selectedElementIds:n,selectedElementId:S,hoveredElementId:r,activeTool:i,activeShape:s,rightPanelTab:o,leftPanelTab:a,isFullscreen:l,showGrid:h,snapToGrid:p,gridSize:g,showRulers:v,zoomLevel:m,isSaving:_,showExportModal:u,showInteractionEditor:C,interactionElementId:x,showThemeManager:A,showAIPanel:V,showSlidePanel:M,clipboard:F,isDragging:w,isResizing:P,resizeHandle:D,panX:E,panY:R,hasSelection:J,multiSelection:ae,setProject:z,setCurrentSlide:de,selectElement:se,setSelection:Ie,clearSelection:te,setActiveTool:Z,setRightPanel:we,setZoom:ve,zoomIn:X,zoomOut:_e,zoomReset:re,toggleGrid:ue,toggleSnap:he,toggleSlidePanel:ye,pushHistory:ke,canUndo:q,canRedo:B,undo:f,redo:G,setClipboard:$}}),ZS=["aria-label"],eA={key:0,class:"modal-header"},tA={key:0,class:"modal-title"},nA={class:"modal-body"},rA={key:1,class:"modal-footer"},iA={__name:"Modal",props:{title:{type:String,default:""},size:{type:String,default:"md"},showClose:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:e}){const n=e;return(r,i)=>(K(),_t(Du,{to:"body"},[ot(qr,{name:"modal"},{default:Et(()=>[d("div",{class:"modal-overlay",onMousedown:i[1]||(i[1]=Dt(s=>n("close"),["self"]))},[d("div",{class:Me(["modal-box",`modal-${t.size}`]),role:"dialog","aria-modal":"true","aria-label":t.title||"Dialog"},[t.title||t.showClose?(K(),Q("div",eA,[t.title?(K(),Q("h3",tA,fe(t.title),1)):Te("",!0),t.showClose?(K(),Q("button",{key:1,class:"btn btn-icon modal-close",onClick:i[0]||(i[0]=s=>n("close"))},[...i[2]||(i[2]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])):Te("",!0)])):Te("",!0),d("div",nA,[$c(r.$slots,"default",{},void 0,!0)]),r.$slots.footer?(K(),Q("div",rA,[$c(r.$slots,"footer",{},void 0,!0)])):Te("",!0)],10,ZS)],32)]),_:3})]))}},Ls=Rt(iA,[["__scopeId","data-v-417bb59d"]]),sA={class:"market-shell"},oA={class:"left-rail"},aA={class:"rail-nav"},lA={class:"market-main"},cA={key:0,class:"verification-banner"},uA={class:"verification-actions"},dA=["disabled"],hA={id:"home-anchor",class:"hero templates-hero"},fA={class:"hero-top"},pA={key:0,class:"hero-user g-rounded"},gA={class:"user-chip-new"},mA={key:1,class:"hero-user g-rounded"},vA={class:"search-bar-g"},yA={id:"templates-anchor",class:"toolbar-row-g"},_A={class:"chip-list-g"},bA=["onClick"],wA={class:"section-title"},EA={class:"cards-row"},IA=["onClick"],CA={class:"card-type"},xA={class:"card-title"},kA={class:"app-top-nav"},TA={class:"nav-search-bar"},SA={class:"nav-actions"},AA={key:0,class:"user-info-mini"},RA={class:"user-chip"},PA={key:1},OA={key:0,class:"home-container"},NA={class:"home-hero"},DA={class:"home-hero-copy"},MA={class:"home-hero-actions"},LA={class:"home-hero-metrics"},VA={class:"hero-metric-card"},$A={class:"hero-metric-card"},FA={class:"welcome-section"},BA={class:"welcome-title"},UA={class:"quick-actions"},zA={class:"projects-section",style:{"padding-top":"0"}},jA={class:"projects-head",style:{"justify-content":"space-between"}},qA={key:0,class:"project-grid"},HA=["onClick","data-tooltip"],WA={class:"project-name"},GA={class:"project-meta"},KA=["onClick"],JA={key:1,class:"projects-lock-card"},QA={key:2,class:"projects-lock-card"},YA={key:1,class:"content-container"},XA={class:"projects-section",style:{padding:"0"}},ZA={key:0,class:"project-grid"},e4=["onClick","data-tooltip"],t4={class:"project-name"},n4={class:"project-meta"},r4=["onClick"],i4=["onClick"],s4={class:"auth-modal-body"},o4={class:"auth-title"},a4={class:"auth-message"},l4={class:"auth-mode-toggle"},c4={class:"form-group"},u4={class:"form-group"},d4={key:0,class:"auth-error-msg"},h4=["disabled"],f4={class:"auth-provider-list"},p4=["onClick"],g4={class:"provider-name"},m4={class:"provider-description"},v4={class:"form-group"},y4={class:"form-group"},_4={key:0,class:"error-msg"},b4={__name:"DashboardView",setup(t){const e=ju(),n=dn(),r=vn(),i=Fo(),s=pe(!1),o=pe(!1),a=pe(!1),l=pe(""),h=pe(""),p=pe(""),g=pe(""),v=pe("all"),m=pe("home"),_=pe(null),u=pe("signin"),C=pe(""),x=pe(""),A=pe(""),V=pe(!1),M=xe(()=>i.user?{authTypeLabel:i.user.displayName||i.user.email||"Current User",emailVerified:i.user.emailVerified,email:i.user.email}:null),F=[{id:"google",label:"Google",description:"Continue with your Google account"},{id:"microsoft",label:"Microsoft",description:"Continue with your Microsoft account"}],L=xe(()=>u.value==="signin"?"Welcome back":"Create your account"),I=xe(()=>u.value==="signin"?"Existing users can sign in with a standard provider.":"New users can sign up with a standard provider."),b=[{label:"Games and challenges",value:"games"},{label:"Quizzes and Surveys",value:"quizzes"},{label:"Presentations",value:"presentations"},{label:"More",value:"more"}],w=[{id:"microcourse",title:"Microcourse: AI in Education",subtitle:"Interactive lesson",category:"presentations",section:"Teach classes",style:"bg-a"},{id:"chromatic",title:"Chromatic",subtitle:"Presentation",category:"presentations",section:"Teach classes",style:"bg-b"},{id:"branching",title:"Branching Scenario",subtitle:"Scenario practice",category:"games",section:"Teach classes",style:"bg-c"},{id:"flipcards",title:"Flipcards Museum",subtitle:"Game challenge",category:"games",section:"Teach classes",style:"bg-d"},{id:"higher-ed",title:"Higher Education",subtitle:"Presentation",category:"presentations",section:"Boost power skills",style:"bg-e"},{id:"complete",title:"Complete the sentence",subtitle:"Quiz",category:"quizzes",section:"Boost power skills",style:"bg-f"},{id:"fill-blanks",title:"Fill in the blanks",subtitle:"Quiz assessment",category:"quizzes",section:"Boost power skills",style:"bg-g"},{id:"timeline",title:"Data Viz Timeline",subtitle:"Interactive infographic",category:"more",section:"Boost power skills",style:"bg-h"}],P=xe(()=>{const B=g.value.trim().toLowerCase();return w.filter(f=>{const G=v.value==="all"||f.category===v.value,$=!B||f.title.toLowerCase().includes(B)||f.subtitle.toLowerCase().includes(B);return G&&$})}),D=xe(()=>{const B=new Map;return P.value.forEach(f=>{B.has(f.section)||B.set(f.section,[]),B.get(f.section).push(f)}),Array.from(B.entries()).map(([f,G])=>({title:f,cards:G}))}),E=xe(()=>{const B=g.value.trim().toLowerCase();return n.sortedProjects.filter(f=>{var G;return B?f.name.toLowerCase().includes(B)||((G=f.description)==null?void 0:G.toLowerCase().includes(B)):!0}).slice(0,8)});function R(){if(!M.value){ye("signin");return}l.value="My New Course",s.value=!0,setTimeout(()=>{var B;return(B=document.getElementById("project-name-input"))==null?void 0:B.focus()},50)}function S(){if(!M.value){ye("signin");return}o.value=!0}function J(){if(!l.value.trim())return;const B=n.createProject(l.value.trim());s.value=!1,ae(B.id)}function ae(B){r.setProject(B),e.push({name:"editor",params:{id:B}})}function z(B){const f=n.createProjectFromTemplate(B.id,B.title,`${B.subtitle} template`);ae(f.id)}function de(B){_.value=B}function se(){_.value&&(n.deleteProject(_.value),_.value=null)}function Ie(B){n.duplicateProject(B)}function te(){p.value="";const B=n.importProject(h.value);if(!B){p.value="Invalid project JSON. Please check and try again.";return}o.value=!1,h.value="",ae(B.id)}function Z(B){return B?new Date(B).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}):""}function we(B){var f;return((f=B.slides)==null?void 0:f.length)||0}function ve(B){u.value=B,A.value="",C.value="",x.value=""}async function X(){if(!C.value||!x.value){A.value="Please enter both email and password.";return}V.value=!0,A.value="";try{u.value==="signin"?await i.loginWithEmail(C.value,x.value):await i.signUpWithEmail(C.value,x.value),a.value=!1}catch(B){console.error("Email Auth Error:",B),B.code==="auth/email-already-in-use"?A.value="This email is already in use. Try signing in instead.":B.code==="auth/wrong-password"||B.code==="auth/user-not-found"||B.code==="auth/invalid-credential"?A.value="Invalid email or password.":B.code==="auth/weak-password"?A.value="Password should be at least 6 characters.":A.value="An error occurred. Please try again."}finally{V.value=!1}}const _e=pe(!1);async function re(){_e.value=!0;try{await i.resendVerification(),alert("Verification email sent! Please check your inbox.")}catch(B){console.error(B),alert("Failed to send verification email. Please wait a moment and try again.")}finally{_e.value=!1}}async function ue(){var B;await i.reloadUser(),(B=M.value)!=null&&B.emailVerified?alert("Thank you! Your email has been verified."):alert("Email not verified yet. Please check your inbox or resend the email.")}async function he(B){try{A.value="",B.id==="google"?await i.loginWithGoogle():B.id==="microsoft"&&await i.loginWithMicrosoft(),a.value=!1}catch(f){console.error("Login failed",f)}}function ye(B="signin"){u.value=B,a.value=!0}async function ke(){await i.logout(),a.value=!1,u.value="signin"}function q(B){(B==="community"||B==="activity"||B==="brand")&&(B="home"),m.value=B,B==="content"&&!M.value&&ye("signin"),!(typeof window>"u")&&requestAnimationFrame(()=>{var f,G,$;if(B==="templates"){(f=document.getElementById("templates-anchor"))==null||f.scrollIntoView({behavior:"smooth",block:"start"});return}if(B==="content"){(G=document.getElementById("projects-anchor"))==null||G.scrollIntoView({behavior:"smooth",block:"start"});return}($=document.getElementById("home-anchor"))==null||$.scrollIntoView({behavior:"smooth",block:"start"})})}return(B,f)=>{var G;return K(),Q("div",sA,[d("aside",oA,[f[37]||(f[37]=d("div",{class:"rail-logo"},"LF",-1)),d("nav",aA,[d("button",{class:Me(["rail-item",m.value==="home"&&"active"]),type:"button",onClick:f[0]||(f[0]=$=>q("home")),"data-tooltip":"Go to home","data-tooltip-position":"right"},[...f[31]||(f[31]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),d("polyline",{points:"9 22 9 12 15 12 15 22"})],-1),Ae(" Home ",-1)])],2),d("button",{class:Me(["rail-item",m.value==="content"&&"active"]),type:"button",onClick:f[1]||(f[1]=$=>q("content")),"data-tooltip":"View your content","data-tooltip-position":"right"},[...f[32]||(f[32]=[Zt('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4b9bda52><rect width="18" height="18" x="3" y="3" rx="2" ry="2" data-v-4b9bda52></rect><path d="M7 7h10" data-v-4b9bda52></path><path d="M7 12h10" data-v-4b9bda52></path><path d="M7 17h10" data-v-4b9bda52></path></svg> Content ',2)])],2),d("button",{class:Me(["rail-item",m.value==="templates"&&"active"]),type:"button",onClick:f[2]||(f[2]=$=>q("templates")),"data-tooltip":"Browse templates","data-tooltip-position":"right"},[...f[33]||(f[33]=[Zt('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4b9bda52><rect width="7" height="9" x="3" y="3" rx="1" data-v-4b9bda52></rect><rect width="7" height="5" x="14" y="3" rx="1" data-v-4b9bda52></rect><rect width="7" height="9" x="14" y="12" rx="1" data-v-4b9bda52></rect><rect width="7" height="5" x="3" y="16" rx="1" data-v-4b9bda52></rect></svg> Templates ',2)])],2),d("button",{class:"rail-item",type:"button",onClick:f[3]||(f[3]=$=>q("community")),"data-tooltip":"Community coming soon","data-tooltip-position":"right"},[...f[34]||(f[34]=[Zt('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4b9bda52><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-v-4b9bda52></path><circle cx="9" cy="7" r="4" data-v-4b9bda52></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-v-4b9bda52></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-v-4b9bda52></path></svg> Community ',2)])]),d("button",{class:"rail-item",type:"button",onClick:f[4]||(f[4]=$=>q("activity")),"data-tooltip":"Activity coming soon","data-tooltip-position":"right"},[...f[35]||(f[35]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})],-1),Ae(" Activity ",-1)])]),d("button",{class:"rail-item",type:"button",onClick:f[5]||(f[5]=$=>q("brand")),"data-tooltip":"Brand kit coming soon","data-tooltip-position":"right"},[...f[36]||(f[36]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"M12 2v20"}),d("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})],-1),Ae(" Brand kit ",-1)])])])]),d("main",lA,[M.value&&!M.value.emailVerified?(K(),Q("div",cA,[d("span",null,[f[38]||(f[38]=Ae("Please verify your email address (",-1)),d("strong",null,fe(M.value.email),1),f[39]||(f[39]=Ae(") to secure your account and unlock all features.",-1))]),d("div",uA,[d("button",{class:"btn btn-primary btn-sm",onClick:ue},"I've verified my email"),d("button",{class:"btn btn-secondary btn-sm",onClick:re,disabled:_e.value},fe(_e.value?"Sending...":"Resend Email"),9,dA)])])):Te("",!0),m.value==="templates"?(K(),Q(Pe,{key:1},[d("section",hA,[d("div",fA,[M.value?(K(),Q("div",pA,[d("span",gA,fe(M.value.authTypeLabel),1),d("button",{class:"btn btn-ghost-text",type:"button",onClick:ke},"Sign out")])):(K(),Q("div",mA,[d("button",{class:"btn btn-ghost-text",type:"button",onClick:f[6]||(f[6]=$=>ye("signin"))},"Log In"),d("button",{class:"btn btn-ghost-text",type:"button",onClick:f[7]||(f[7]=$=>ye("signup"))},"Sign Up")])),d("div",{class:"hero-actions"},[f[40]||(f[40]=d("button",{class:"btn g-premium-btn"},[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),Ae(" Upgrade to Premium ")],-1)),d("button",{class:"btn g-outline-btn",onClick:S,"data-tooltip":"Import a project"},"Import")])]),f[42]||(f[42]=d("h1",{class:"hero-title-g"},"Choose how to create",-1)),d("div",vA,[Ye(d("input",{"onUpdate:modelValue":f[8]||(f[8]=$=>g.value=$),class:"search-input-g",placeholder:"Describe what you're looking for"},null,512),[[ht,g.value]]),f[41]||(f[41]=d("button",{class:"search-btn-g",type:"button","aria-label":"Search"},[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("path",{d:"m21 21-4.35-4.35"})])],-1))])]),d("section",yA,[d("div",_A,[d("button",{class:Me(["chip-g",v.value==="all"&&"active"]),onClick:f[9]||(f[9]=$=>v.value="all"),type:"button"},"All",2),(K(),Q(Pe,null,Ke(b,$=>d("button",{key:$.value,class:Me(["chip-g",v.value===$.value&&"active"]),onClick:O=>v.value=$.value,type:"button"},fe($.label),11,bA)),64))]),f[43]||(f[43]=d("button",{class:"btn g-outline-btn ai-btn-g"},[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})]),Ae(" Create quiz with AI ")],-1))]),(K(!0),Q(Pe,null,Ke(D.value,$=>(K(),Q("section",{key:$.title,class:"template-section"},[d("h2",wA,fe($.title),1),d("div",EA,[(K(!0),Q(Pe,null,Ke($.cards,O=>(K(),Q("article",{key:O.id,class:Me(["market-card",O.style]),onClick:N=>z(O)},[f[44]||(f[44]=Zt('<div class="hover-overlay" data-v-4b9bda52></div><div class="action-icon" data-v-4b9bda52><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-4b9bda52><line x1="12" y1="5" x2="12" y2="19" data-v-4b9bda52></line><line x1="5" y1="12" x2="19" y2="12" data-v-4b9bda52></line></svg></div>',2)),d("span",CA,fe(O.subtitle),1),d("h3",xA,fe(O.title),1)],10,IA))),128))])]))),128))],64)):Te("",!0),m.value==="home"||m.value==="content"?(K(),Q(Pe,{key:2},[d("header",kA,[d("div",TA,[f[45]||(f[45]=d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("path",{d:"m21 21-4.35-4.35"})],-1)),Ye(d("input",{"onUpdate:modelValue":f[10]||(f[10]=$=>g.value=$),placeholder:"Search templates and creations"},null,512),[[ht,g.value]])]),d("div",SA,[f[46]||(f[46]=d("button",{class:"btn btn-secondary btn-sm",style:{color:"#d97706","border-color":"rgba(217,119,6,0.3)",background:"#fffbeb"}},[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),Ae(" Upgrade to Premium ")],-1)),M.value?(K(),Q("div",AA,[d("span",RA,fe(M.value.authTypeLabel),1),d("button",{class:"btn btn-primary btn-sm",onClick:R},"Create course")])):(K(),Q("div",PA,[d("button",{class:"btn btn-secondary btn-sm",onClick:f[11]||(f[11]=$=>ye("signin"))},"Sign In")]))])]),m.value==="home"?(K(),Q("div",OA,[d("section",NA,[f[51]||(f[51]=d("div",{class:"home-hero-pattern"},null,-1)),f[52]||(f[52]=d("div",{class:"home-hero-glow home-hero-glow-left"},null,-1)),f[53]||(f[53]=d("div",{class:"home-hero-glow home-hero-glow-right"},null,-1)),d("div",DA,[f[48]||(f[48]=d("span",{class:"home-hero-kicker"},"Featured challenge",-1)),f[49]||(f[49]=d("h1",{class:"home-hero-title"},"Build interactions that feel alive.",-1)),f[50]||(f[50]=d("p",{class:"home-hero-text"}," Design drag-and-drop lessons, branching slides, and quick knowledge checks with a workspace that feels built for fast iteration. ",-1)),d("div",MA,[d("button",{class:"btn btn-primary btn-lg",onClick:R,"data-tooltip":"Create a new project from scratch"},"Start a new course"),d("button",{class:"btn home-hero-secondary",onClick:f[12]||(f[12]=$=>q("templates")),"data-tooltip":"Open the templates library"},"Browse templates")]),d("div",LA,[d("div",VA,[d("strong",null,fe(E.value.length||0),1),f[47]||(f[47]=d("span",null,"projects in motion",-1))]),d("div",$A,[d("strong",null,fe(M.value?"Ready":"Guest"),1),d("span",null,fe(M.value?"workspace synced":"sign in to sync"),1)])])]),f[54]||(f[54]=Zt('<div class="home-hero-visual" aria-hidden="true" data-v-4b9bda52><div class="hero-preview-card hero-preview-main" data-v-4b9bda52><span class="preview-badge" data-v-4b9bda52>Drag and drop</span><div class="preview-line preview-line-lg" data-v-4b9bda52></div><div class="preview-line preview-line-md" data-v-4b9bda52></div><div class="preview-dropzones" data-v-4b9bda52><span data-v-4b9bda52></span><span data-v-4b9bda52></span><span data-v-4b9bda52></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-quiz" data-v-4b9bda52><span class="preview-dot" data-v-4b9bda52></span><div class="preview-line preview-line-sm" data-v-4b9bda52></div><div class="preview-pill-row" data-v-4b9bda52><span data-v-4b9bda52></span><span data-v-4b9bda52></span><span data-v-4b9bda52></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-media" data-v-4b9bda52><div class="preview-media" data-v-4b9bda52></div><div class="preview-line preview-line-sm" data-v-4b9bda52></div></div></div>',1))]),d("div",FA,[d("h2",BA," Hi, "+fe(((G=M.value)==null?void 0:G.authTypeLabel.split(" ")[0])||"Creator")+" 👋 What are you going to create today? ",1),d("div",UA,[d("button",{class:"quick-btn",onClick:R,"data-tooltip":"Start with a blank project"},[...f[55]||(f[55]=[d("span",{class:"q-icon",style:{color:"var(--color-primary)"}},"+",-1),Ae(" Create scratch project",-1)])]),d("button",{class:"quick-btn",onClick:f[13]||(f[13]=$=>q("templates")),"data-tooltip":"Use a game template"},[...f[56]||(f[56]=[d("span",{class:"q-icon",style:{color:"var(--color-secondary)"}},"🎮",-1),Ae(" Create a game",-1)])]),d("button",{class:"quick-btn",onClick:f[14]||(f[14]=$=>q("templates")),"data-tooltip":"Use a presentation template"},[...f[57]||(f[57]=[d("span",{class:"q-icon",style:{color:"var(--color-success)"}},"📱",-1),Ae(" Create a presentation",-1)])])])]),d("section",zA,[d("div",jA,[f[58]||(f[58]=d("h2",{class:"section-title"},"Pick up where you left off",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:f[15]||(f[15]=$=>q("content"))},"Go to My Content ›")]),M.value&&E.value.length?(K(),Q("div",qA,[(K(!0),Q(Pe,null,Ke(E.value.slice(0,4),$=>(K(),Q("article",{key:$.id,class:"project-card",onClick:O=>ae($.id),"data-tooltip":`Open ${$.name}`},[d("div",WA,fe($.name),1),d("p",GA,fe(we($))+" slides · "+fe(Z($.updatedAt)),1),d("div",{class:"project-actions",onClick:f[16]||(f[16]=Dt(()=>{},["stop"]))},[d("button",{class:"btn btn-ghost btn-sm",onClick:O=>Ie($.id)},"Duplicate",8,KA)])],8,HA))),128))])):M.value?(K(),Q("div",QA,[...f[60]||(f[60]=[d("p",null,"You haven't created any projects yet. Start by creating a project from scratch or a template.",-1)])])):(K(),Q("div",JA,[...f[59]||(f[59]=[d("p",null,"Sign in to see your recent projects.",-1)])]))])])):Te("",!0),m.value==="content"?(K(),Q("div",YA,[f[62]||(f[62]=d("div",{class:"content-header-row"},[d("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[d("div",{class:"content-icon"},"💿"),d("h1",{style:{"font-size":"28px","font-weight":"700"}},"My content")])],-1)),d("div",XA,[M.value?(K(),Q("div",ZA,[d("article",{class:"project-card create-new-card",onClick:R,"data-tooltip":"Create a project"},[...f[61]||(f[61]=[d("div",{class:"create-circle"},"+",-1),d("div",{class:"create-text"},"Create new project",-1)])]),(K(!0),Q(Pe,null,Ke(E.value,$=>(K(),Q("article",{key:$.id,class:"project-card",onClick:O=>ae($.id),"data-tooltip":`Open ${$.name}`},[d("div",t4,fe($.name),1),d("p",n4,fe(we($))+" slides · "+fe(Z($.updatedAt)),1),d("div",{class:"project-actions",onClick:f[17]||(f[17]=Dt(()=>{},["stop"]))},[d("button",{class:"btn btn-ghost btn-sm",onClick:O=>Ie($.id)},"Duplicate",8,r4),d("button",{class:"btn btn-ghost btn-sm",onClick:O=>de($.id),style:{color:"var(--color-danger)"}},"Delete",8,i4)])],8,e4))),128))])):Te("",!0)])])):Te("",!0)],64)):Te("",!0)]),a.value?(K(),_t(Ls,{key:0,title:u.value==="signin"?"Sign In":"Sign Up",size:"md",onClose:f[22]||(f[22]=$=>a.value=!1)},{default:Et(()=>[d("div",s4,[f[65]||(f[65]=d("p",{class:"auth-eyebrow"},"Access your workspace",-1)),d("h2",o4,fe(L.value),1),d("p",a4,fe(I.value),1),d("div",l4,[d("button",{class:Me(["auth-mode-btn",u.value==="signin"&&"active"]),type:"button",onClick:f[18]||(f[18]=$=>ve("signin"))}," Sign In ",2),d("button",{class:Me(["auth-mode-btn",u.value==="signup"&&"active"]),type:"button",onClick:f[19]||(f[19]=$=>ve("signup"))}," Sign Up ",2)]),d("form",{onSubmit:Dt(X,["prevent"]),class:"auth-email-form"},[d("div",c4,[f[63]||(f[63]=d("label",{class:"form-label"},"Email",-1)),Ye(d("input",{type:"email","onUpdate:modelValue":f[20]||(f[20]=$=>C.value=$),class:"input",placeholder:"you@example.com",required:""},null,512),[[ht,C.value]])]),d("div",u4,[f[64]||(f[64]=d("label",{class:"form-label"},"Password",-1)),Ye(d("input",{type:"password","onUpdate:modelValue":f[21]||(f[21]=$=>x.value=$),class:"input",placeholder:"••••••••",required:"",minlength:"6"},null,512),[[ht,x.value]])]),A.value?(K(),Q("div",d4,fe(A.value),1)):Te("",!0),d("button",{type:"submit",class:"btn btn-primary",style:{width:"100%","justify-content":"center",height:"42px"},disabled:V.value},fe(V.value?"Loading...":u.value==="signin"?"Sign In with Email":"Sign Up with Email"),9,h4)],32),f[66]||(f[66]=d("div",{class:"auth-divider"},[d("span",null,"or continue with")],-1)),d("div",f4,[(K(),Q(Pe,null,Ke(F,$=>d("button",{key:$.id,class:"auth-provider-btn",type:"button",onClick:O=>he($)},[d("span",g4,fe($.label),1),d("span",m4,fe($.description),1)],8,p4)),64))])])]),_:1},8,["title"])):Te("",!0),s.value?(K(),_t(Ls,{key:1,title:"New Project",size:"sm",onClose:f[25]||(f[25]=$=>s.value=!1)},{footer:Et(()=>[d("button",{class:"btn btn-secondary",onClick:f[24]||(f[24]=$=>s.value=!1)},"Cancel"),d("button",{class:"btn btn-primary",onClick:J},"Create Project")]),default:Et(()=>[d("div",v4,[f[67]||(f[67]=d("label",{class:"form-label"},"Project Name",-1)),Ye(d("input",{id:"project-name-input","onUpdate:modelValue":f[23]||(f[23]=$=>l.value=$),class:"input",placeholder:"e.g. Quiz Assessment",onKeydown:Hc(J,["enter"])},null,544),[[ht,l.value]])])]),_:1})):Te("",!0),o.value?(K(),_t(Ls,{key:2,title:"Import Project",size:"md",onClose:f[28]||(f[28]=$=>o.value=!1)},{footer:Et(()=>[d("button",{class:"btn btn-secondary",onClick:f[27]||(f[27]=$=>o.value=!1)},"Cancel"),d("button",{class:"btn btn-primary",onClick:te},"Import")]),default:Et(()=>[d("div",y4,[f[68]||(f[68]=d("label",{class:"form-label"},"Paste Project JSON",-1)),Ye(d("textarea",{"onUpdate:modelValue":f[26]||(f[26]=$=>h.value=$),class:"textarea",style:{"min-height":"160px"},placeholder:'{"name":"My Project",...}'},null,512),[[ht,h.value]])]),p.value?(K(),Q("p",_4,fe(p.value),1)):Te("",!0)]),_:1})):Te("",!0),_.value?(K(),_t(Ls,{key:3,title:"Delete Project",size:"sm",onClose:f[30]||(f[30]=$=>_.value=null)},{footer:Et(()=>[d("button",{class:"btn btn-secondary",onClick:f[29]||(f[29]=$=>_.value=null)},"Cancel"),d("button",{class:"btn btn-danger",onClick:se},"Delete")]),default:Et(()=>[f[69]||(f[69]=d("p",{class:"delete-text"},"Are you sure you want to delete this project? This action cannot be undone.",-1))]),_:1})):Te("",!0)])}}},w4=Rt(b4,[["__scopeId","data-v-4b9bda52"]]);function E4(t){function e(n){var a,l,h,p,g,v,m,_,u,C,x,A,V,M,F,L,I;const r=n.ctrlKey||n.metaKey,i=n.key.toLowerCase(),s=n.target.tagName.toLowerCase(),o=s==="input"||s==="textarea"||n.target.isContentEditable;o&&r&&["c","v","x","a","z","y"].includes(i)||(r&&i==="z"&&!n.shiftKey?(n.preventDefault(),(a=t.undo)==null||a.call(t)):r&&(i==="y"||i==="z"&&n.shiftKey)?(n.preventDefault(),(l=t.redo)==null||l.call(t)):r&&i==="c"?(n.preventDefault(),(h=t.copy)==null||h.call(t)):r&&i==="v"?(n.preventDefault(),(p=t.paste)==null||p.call(t)):r&&i==="x"?(n.preventDefault(),(g=t.cut)==null||g.call(t)):r&&i==="d"?(n.preventDefault(),(v=t.duplicate)==null||v.call(t)):r&&i==="a"?(n.preventDefault(),(m=t.selectAll)==null||m.call(t)):i==="delete"||i==="backspace"?o||(n.preventDefault(),(_=t.delete)==null||_.call(t)):i==="escape"?(u=t.escape)==null||u.call(t):r&&i==="g"?(n.preventDefault(),(C=t.toggleGrid)==null||C.call(t)):r&&i==="="||r&&i==="+"?(n.preventDefault(),(x=t.zoomIn)==null||x.call(t)):r&&i==="-"?(n.preventDefault(),(A=t.zoomOut)==null||A.call(t)):r&&i==="0"?(n.preventDefault(),(V=t.zoomReset)==null||V.call(t)):i==="arrowleft"?(M=t.nudge)==null||M.call(t,-1,0):i==="arrowright"?(F=t.nudge)==null||F.call(t,1,0):i==="arrowup"?(L=t.nudge)==null||L.call(t,0,-1):i==="arrowdown"&&((I=t.nudge)==null||I.call(t,0,1)))}ko(()=>window.addEventListener("keydown",e)),To(()=>window.removeEventListener("keydown",e))}const I4={class:"slide-panel"},C4={class:"slide-panel-header"},x4={class:"slide-count"},k4={class:"slides-list"},T4=["onClick","onContextmenu","onDragstart","onDrop"],S4={class:"slide-number"},A4={class:"slide-footer"},R4={class:"slide-title"},P4=["onClick"],O4={__name:"SlidePanel",setup(t){const e=vn(),n=dn(),r=xe(()=>n.getProject(e.projectId)),i=xe(()=>{var M,F;return((F=(M=r.value)==null?void 0:M.slides)==null?void 0:F.slice().sort((L,I)=>L.order-I.order))||[]}),s=pe({show:!1,x:0,y:0,slideId:null});function o(M){e.setCurrentSlide(M)}function a(){const M=i.value.findIndex(L=>L.id===e.currentSlideId),F=n.addSlide(e.projectId,M);F&&e.setCurrentSlide(F.id)}function l(M){var I,b;const F=i.value.findIndex(w=>w.id===M);n.deleteSlide(e.projectId,M);const L=((I=r.value)==null?void 0:I.slides)||[];if(L.length>0){const w=L.slice().sort((D,E)=>D.order-E.order),P=Math.min(F,w.length-1);e.setCurrentSlide((b=w[P])==null?void 0:b.id)}}function h(M,F){M.preventDefault(),s.value={show:!0,x:M.clientX,y:M.clientY,slideId:F},setTimeout(()=>window.addEventListener("click",p,{once:!0}),0)}function p(){s.value.show=!1}function g(){const M=n.duplicateSlide(e.projectId,s.value.slideId);M&&e.setCurrentSlide(M.id),p()}function v(){l(s.value.slideId),p()}function m(M,F){M.stopPropagation(),l(F)}function _(){const M=i.value.findIndex(F=>F.id===s.value.slideId);M>0&&n.reorderSlides(e.projectId,M,M-1),p()}function u(){const M=i.value.findIndex(F=>F.id===s.value.slideId);M<i.value.length-1&&n.reorderSlides(e.projectId,M,M+1),p()}let C=-1;function x(M,F){C=F,M.dataTransfer.effectAllowed="move"}function A(M,F){M.preventDefault(),C!==-1&&C!==F&&n.reorderSlides(e.projectId,C,F),C=-1}function V(M){return M.backgroundType==="gradient"&&M.backgroundGradient?{background:M.backgroundGradient}:M.backgroundType==="image"&&M.backgroundImage?{backgroundImage:`url(${M.backgroundImage})`,backgroundSize:"cover"}:{background:M.background||"#fff"}}return(M,F)=>(K(),Q("div",I4,[d("div",C4,[F[2]||(F[2]=d("span",{class:"panel-section-title"},"Slides",-1)),d("span",x4,fe(i.value.length),1),d("button",{class:"btn btn-icon add-slide-btn",onClick:a,"data-tooltip":"Add slide","aria-label":"Add slide"},[...F[1]||(F[1]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),d("div",k4,[(K(!0),Q(Pe,null,Ke(i.value,(L,I)=>(K(),Q("div",{key:L.id,class:Me(["slide-thumb-item",Ee(e).currentSlideId===L.id&&"active"]),draggable:"true",onClick:b=>o(L.id),onContextmenu:b=>h(b,L.id),onDragstart:b=>x(b,I),onDragover:F[0]||(F[0]=Dt(()=>{},["prevent"])),onDrop:b=>A(b,I)},[d("div",S4,fe(I+1),1),d("div",{class:"slide-thumb",style:Le(V(L))},[(K(!0),Q(Pe,null,Ke(L.elements.slice(0,6),b=>{var w,P;return K(),Q("div",{key:b.id,class:"mini-element",style:Le({left:b.x/960*100+"%",top:b.y/540*100+"%",width:b.width/960*100+"%",height:b.height/540*100+"%",background:b.type==="shape"?(w=b.content)==null?void 0:w.fillColor:b.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:b.type==="shape"&&((P=b.content)==null?void 0:P.shapeType)==="circle"?"50%":void 0})},null,4)}),128))],4),d("div",A4,[d("div",R4,fe(L.title||`Slide ${I+1}`),1),i.value.length>1?(K(),Q("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:b=>m(b,L.id)},[...F[3]||(F[3]=[Zt('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1b392fd3><polyline points="3 6 5 6 21 6" data-v-1b392fd3></polyline><path d="M19 6l-1 14H6L5 6" data-v-1b392fd3></path><path d="M10 11v6M14 11v6" data-v-1b392fd3></path><path d="M9 6V4h6v2" data-v-1b392fd3></path></svg>',1)])],8,P4)):Te("",!0)])],42,T4))),128))]),d("button",{class:"add-slide-bottom",onClick:a},[...F[4]||(F[4]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Ae(" Add Slide ",-1)])]),(K(),_t(Du,{to:"body"},[s.value.show?(K(),Q("div",{key:0,class:"context-menu",style:Le({left:s.value.x+"px",top:s.value.y+"px"})},[d("button",{class:"ctx-item",onClick:g},"Duplicate"),d("button",{class:"ctx-item",onClick:_},"Move Up"),d("button",{class:"ctx-item",onClick:u},"Move Down"),F[5]||(F[5]=d("div",{class:"ctx-divider"},null,-1)),d("button",{class:"ctx-item danger",onClick:v},"Delete Slide")],4)):Te("",!0)]))]))}},N4=Rt(O4,[["__scopeId","data-v-1b392fd3"]]),D4={class:"layer-panel"},M4={class:"layer-header panel-section"},L4={class:"panel-title",style:{"margin-bottom":"0"}},V4={class:"layer-count"},$4={key:0,class:"layers-empty"},F4={key:1,class:"layers-list"},B4=["onClick"],U4={class:"layer-type-icon"},z4={class:"layer-name"},j4={class:"layer-actions"},q4=["onClick","data-tooltip"],H4={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},W4={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},G4=["onClick","data-tooltip"],K4={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},J4={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Q4=["onClick"],Y4=["onClick"],X4=["onClick"],Z4={__name:"LayerPanel",setup(t){const e=vn(),n=dn(),r=xe(()=>n.getProject(e.projectId)),i=xe(()=>{var _,u;return(u=(_=r.value)==null?void 0:_.slides)==null?void 0:u.find(C=>C.id===e.currentSlideId)}),s=xe(()=>{var _;return[...((_=i.value)==null?void 0:_.elements)||[]].sort((u,C)=>(C.zIndex||0)-(u.zIndex||0))});function o(_){e.selectElement(_)}function a(_){n.updateElement(e.projectId,e.currentSlideId,_.id,{visible:!_.visible})}function l(_){n.updateElement(e.projectId,e.currentSlideId,_.id,{locked:!_.locked})}function h(_){n.reorderElement(e.projectId,e.currentSlideId,_,"up")}function p(_){n.reorderElement(e.projectId,e.currentSlideId,_,"down")}function g(_){n.deleteElement(e.projectId,e.currentSlideId,_),e.selectedElementId===_&&e.clearSelection()}function v(_){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[_]||"◆"}function m(_){var u,C,x;return(u=_.content)!=null&&u.text?_.content.text.slice(0,24):(C=_.content)!=null&&C.label?_.content.label:(x=_.content)!=null&&x.question?_.content.question.slice(0,24):_.type.charAt(0).toUpperCase()+_.type.slice(1)}return(_,u)=>(K(),Q("div",D4,[d("div",M4,[d("div",L4,[u[0]||(u[0]=Ae(" Layers ",-1)),d("span",V4,fe(s.value.length),1)])]),s.value.length===0?(K(),Q("div",$4,[...u[1]||(u[1]=[d("p",null,"No elements on this slide.",-1),d("p",null,"Add elements using the toolbar above.",-1)])])):(K(),Q("div",F4,[(K(!0),Q(Pe,null,Ke(s.value,C=>(K(),Q("div",{key:C.id,class:Me(["layer-item",Ee(e).selectedElementIds.includes(C.id)&&"selected",C.locked&&"locked",!C.visible&&"hidden"]),onClick:x=>o(C.id)},[d("span",U4,fe(v(C.type)),1),d("span",z4,fe(m(C)),1),d("div",j4,[d("button",{class:Me(["layer-action-btn",{active:C.visible}]),onClick:Dt(x=>a(C),["stop"]),"data-tooltip":C.visible?"Hide":"Show"},[C.visible?(K(),Q("svg",H4,[...u[2]||(u[2]=[d("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),d("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(K(),Q("svg",W4,[...u[3]||(u[3]=[d("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),d("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),d("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,q4),d("button",{class:Me(["layer-action-btn",{active:C.locked}]),onClick:Dt(x=>l(C),["stop"]),"data-tooltip":C.locked?"Unlock":"Lock"},[C.locked?(K(),Q("svg",K4,[...u[4]||(u[4]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(K(),Q("svg",J4,[...u[5]||(u[5]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,G4),d("button",{class:"layer-action-btn",onClick:Dt(x=>h(C.id),["stop"]),"data-tooltip":"Move up"},[...u[6]||(u[6]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,Q4),d("button",{class:"layer-action-btn",onClick:Dt(x=>p(C.id),["stop"]),"data-tooltip":"Move down"},[...u[7]||(u[7]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Y4),d("button",{class:"layer-action-btn danger",onClick:Dt(x=>g(C.id),["stop"]),"data-tooltip":"Delete"},[...u[8]||(u[8]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,X4)])],10,B4))),128))]))]))}},eR=Rt(Z4,[["__scopeId","data-v-7407acd8"]]),tR={class:"properties-panel"},nR={class:"panel-section"},rR={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iR={class:"form-group"},sR={class:"bg-type-tabs"},oR=["onClick"],aR={key:0,class:"color-row"},lR=["value"],cR=["value"],uR={class:"panel-section"},dR={class:"panel-section"},hR=["value"],fR={class:"panel-section"},pR={class:"panel-title"},gR={class:"element-type-badge"},mR={class:"geo-grid"},vR={class:"form-group"},yR=["value"],_R={class:"form-group"},bR=["value"],wR={class:"form-group"},ER=["value"],IR={class:"form-group"},CR=["value"],xR={class:"form-group"},kR=["value"],TR={class:"form-group"},SR=["value"],AR={key:0,class:"panel-section"},RR={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},PR=["value"],OR={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},NR={class:"form-group"},DR=["value"],MR={class:"form-group"},LR=["value"],VR={class:"form-group",style:{"margin-top":"var(--space-3)"}},$R=["value"],FR=["value"],BR={class:"form-group",style:{"margin-top":"var(--space-3)"}},UR={class:"align-btns"},zR=["onClick"],jR={class:"form-group",style:{"margin-top":"var(--space-3)"}},qR={class:"style-btns"},HR={class:"form-group",style:{"margin-top":"var(--space-3)"}},WR={class:"color-row"},GR=["value"],KR=["value"],JR={class:"form-group",style:{"margin-top":"var(--space-3)"}},QR=["value"],YR={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},XR={class:"form-group"},ZR=["value"],eP={class:"form-group"},tP=["value"],nP={key:1,class:"panel-section"},rP={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iP=["value"],sP={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},oP=["value"],aP={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},lP=["value"],cP={class:"form-group"},uP=["value"],dP={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},hP={class:"form-group"},fP=["value"],pP={class:"form-group"},gP=["value"],mP={key:2,class:"panel-section"},vP={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},yP=["value"],_P={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},bP={class:"color-row"},wP=["value"],EP=["value"],IP={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},CP={class:"color-row"},xP=["value"],kP=["value"],TP={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},SP=["value"],AP={class:"form-group"},RP=["value"],PP={class:"form-group",style:{"margin-top":"var(--space-3)"}},OP=["value"],NP={key:3,class:"panel-section"},DP={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},MP=["value"],LP={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},VP=["value"],$P={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},FP=["value"],BP={key:0,class:"form-group"},UP=["value"],zP={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},jP={class:"form-group"},qP=["value"],HP={class:"form-group"},WP=["value"],GP={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},KP={class:"form-group"},JP=["value"],QP={class:"form-group"},YP=["value"],XP={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},ZP={class:"form-group"},e5=["value"],t5={class:"form-group"},n5=["value"],r5={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},i5={class:"form-group"},s5=["value"],o5=["value"],a5={class:"form-group"},l5=["value"],c5={key:4,class:"panel-section"},u5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},d5=["value"],h5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},f5={class:"color-row"},p5=["value"],g5=["value"],m5={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},v5={class:"form-group"},y5=["value"],_5={class:"form-group"},b5=["value"],w5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},E5=["value"],I5={class:"form-group"},C5=["value"],x5={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},k5={class:"form-group"},T5=["value"],S5={class:"form-group"},A5=["value"],R5={key:5,class:"panel-section"},P5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},O5=["value"],N5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},D5=["value"],M5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},L5=["value"],V5={class:"check-row"},$5=["checked"],F5={class:"check-row"},B5=["checked"],U5={class:"check-row"},z5=["checked"],j5={class:"check-row"},q5=["checked"],H5={key:6,class:"panel-section"},W5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},G5=["value"],K5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},J5=["value"],Q5={class:"check-row"},Y5=["checked"],X5={class:"check-row"},Z5=["checked"],e6={class:"check-row"},t6=["checked"],n6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},r6={class:"form-group"},i6=["value"],s6={class:"form-group"},o6=["value"],a6={class:"form-group",style:{"margin-top":"var(--space-3)"}},l6=["value"],c6={key:7,class:"panel-section"},u6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},d6=["value"],h6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},f6=["value"],p6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},g6=["value"],m6={class:"form-group"},v6=["value"],y6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_6={class:"form-group"},b6=["value"],w6={class:"form-group"},E6=["value"],I6={class:"form-group",style:{"margin-top":"var(--space-3)"}},C6=["value"],x6={class:"panel-section"},k6={class:"actions-list"},T6={__name:"PropertiesPanel",setup(t){const e=vn(),n=dn(),r=xe(()=>n.getProject(e.projectId)),i=xe(()=>{var _,u;return(u=(_=r.value)==null?void 0:_.slides)==null?void 0:u.find(C=>C.id===e.currentSlideId)}),s=xe(()=>{var _,u;return e.selectedElementId?(u=(_=i.value)==null?void 0:_.elements)==null?void 0:u.find(C=>C.id===e.selectedElementId):null}),o=pe({});Kt(s,_=>{_?o.value=JSON.parse(JSON.stringify(_)):o.value={}},{immediate:!0,deep:!0});function a(_){s.value&&n.updateElement(e.projectId,e.currentSlideId,s.value.id,_)}function l(_){if(!s.value)return;const u={...s.value.content,..._};a({content:u})}function h(_,u){const C=parseFloat(u);isNaN(C)||a({[_]:C})}const p=pe({});Kt(i,_=>{_&&(p.value={..._})},{immediate:!0});function g(_){i.value&&n.updateSlide(e.projectId,i.value.id,_)}function v(_,u){g({[_]:u})}const m=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(_,u)=>{var C,x,A,V,M,F,L,I,b,w,P,D,E,R,S,J,ae,z,de,se,Ie,te,Z,we,ve,X,_e,re,ue,he,ye,ke,q,B,f,G,$,O,N,H,j,T,W,Y,ne,le,me,Se,oe,$e,Je,We,pt,ze,tn,at,Ge,yn,hn,Xr,Nn,br,lt,Dn,wr,Er,Bo,Uo,Kn,zo,jo,Zr,fs,ps,Ri,Ir;return K(),Q("div",tR,[u[190]||(u[190]=d("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),s.value?(K(),Q(Pe,{key:1},[d("div",fR,[d("div",pR,[u[95]||(u[95]=Ae(" Position & Size ",-1)),d("span",gR,fe(s.value.type),1)]),d("div",mR,[d("div",vR,[u[96]||(u[96]=d("label",{class:"form-label"},"X",-1)),d("input",{type:"number",value:Math.round(s.value.x),class:"input",onChange:u[11]||(u[11]=ee=>h("x",ee.target.value))},null,40,yR)]),d("div",_R,[u[97]||(u[97]=d("label",{class:"form-label"},"Y",-1)),d("input",{type:"number",value:Math.round(s.value.y),class:"input",onChange:u[12]||(u[12]=ee=>h("y",ee.target.value))},null,40,bR)]),d("div",wR,[u[98]||(u[98]=d("label",{class:"form-label"},"W",-1)),d("input",{type:"number",value:Math.round(s.value.width),class:"input",onChange:u[13]||(u[13]=ee=>h("width",ee.target.value))},null,40,ER)]),d("div",IR,[u[99]||(u[99]=d("label",{class:"form-label"},"H",-1)),d("input",{type:"number",value:Math.round(s.value.height),class:"input",onChange:u[14]||(u[14]=ee=>h("height",ee.target.value))},null,40,CR)]),d("div",xR,[u[100]||(u[100]=d("label",{class:"form-label"},"Rot °",-1)),d("input",{type:"number",value:Math.round(s.value.rotation||0),class:"input",onChange:u[15]||(u[15]=ee=>h("rotation",ee.target.value))},null,40,kR)]),d("div",TR,[u[101]||(u[101]=d("label",{class:"form-label"},"Opacity",-1)),d("input",{type:"number",min:"0",max:"1",step:".05",value:s.value.opacity??1,class:"input",onChange:u[16]||(u[16]=ee=>h("opacity",ee.target.value))},null,40,SR)])])]),["text","heading"].includes(s.value.type)?(K(),Q("div",AR,[u[117]||(u[117]=d("div",{class:"panel-title"},"Text",-1)),d("div",RR,[u[102]||(u[102]=d("label",{class:"form-label"},"Content",-1)),d("textarea",{value:(F=s.value.content)==null?void 0:F.text,class:"textarea",style:{"min-height":"64px"},onInput:u[17]||(u[17]=ee=>l({text:ee.target.value}))},null,40,PR)]),d("div",OR,[d("div",NR,[u[103]||(u[103]=d("label",{class:"form-label"},"Size",-1)),d("input",{type:"number",value:(L=s.value.content)==null?void 0:L.fontSize,class:"input",onChange:u[18]||(u[18]=ee=>l({fontSize:+ee.target.value}))},null,40,DR)]),d("div",MR,[u[105]||(u[105]=d("label",{class:"form-label"},"Weight",-1)),d("select",{value:(I=s.value.content)==null?void 0:I.fontWeight,class:"select",onChange:u[19]||(u[19]=ee=>l({fontWeight:ee.target.value}))},[...u[104]||(u[104]=[d("option",{value:"normal"},"Normal",-1),d("option",{value:"bold"},"Bold",-1),d("option",{value:"600"},"Semi-bold",-1),d("option",{value:"300"},"Light",-1)])],40,LR)])]),d("div",VR,[u[106]||(u[106]=d("label",{class:"form-label"},"Font Family",-1)),d("select",{value:(b=s.value.content)==null?void 0:b.fontFamily,class:"select",onChange:u[20]||(u[20]=ee=>l({fontFamily:ee.target.value}))},[(K(),Q(Pe,null,Ke(m,ee=>d("option",{key:ee,value:ee},fe(ee.split(",")[0]),9,FR)),64))],40,$R)]),d("div",BR,[u[107]||(u[107]=d("label",{class:"form-label"},"Align",-1)),d("div",UR,[(K(),Q(Pe,null,Ke(["left","center","right","justify"],ee=>{var dt;return d("button",{key:ee,class:Me(["align-btn",((dt=s.value.content)==null?void 0:dt.textAlign)===ee&&"active"]),onClick:qo=>l({textAlign:ee})},fe(ee[0].toUpperCase()),11,zR)}),64))])]),d("div",jR,[u[111]||(u[111]=d("label",{class:"form-label"},"Style",-1)),d("div",qR,[d("button",{class:Me(["style-btn",((w=s.value.content)==null?void 0:w.fontStyle)==="italic"&&"active"]),onClick:u[21]||(u[21]=ee=>{var dt;return l({fontStyle:((dt=s.value.content)==null?void 0:dt.fontStyle)==="italic"?"normal":"italic"})})},[...u[108]||(u[108]=[d("i",null,"I",-1)])],2),d("button",{class:Me(["style-btn",((P=s.value.content)==null?void 0:P.textDecoration)==="underline"&&"active"]),onClick:u[22]||(u[22]=ee=>{var dt;return l({textDecoration:((dt=s.value.content)==null?void 0:dt.textDecoration)==="underline"?"none":"underline"})})},[...u[109]||(u[109]=[d("u",null,"U",-1)])],2),d("button",{class:Me(["style-btn",((D=s.value.content)==null?void 0:D.textDecoration)==="line-through"&&"active"]),onClick:u[23]||(u[23]=ee=>{var dt;return l({textDecoration:((dt=s.value.content)==null?void 0:dt.textDecoration)==="line-through"?"none":"line-through"})})},[...u[110]||(u[110]=[d("s",null,"S",-1)])],2)])]),d("div",HR,[u[112]||(u[112]=d("label",{class:"form-label"},"Color",-1)),d("div",WR,[d("input",{type:"color",value:((E=s.value.content)==null?void 0:E.color)||"#000",onInput:u[24]||(u[24]=ee=>l({color:ee.target.value})),class:"color-input-native"},null,40,GR),d("input",{value:((R=s.value.content)==null?void 0:R.color)||"#000",class:"input",onInput:u[25]||(u[25]=ee=>l({color:ee.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,KR)])]),d("div",JR,[u[113]||(u[113]=d("label",{class:"form-label"},"Line Height",-1)),d("input",{type:"number",min:".8",max:"3",step:".1",value:((S=s.value.content)==null?void 0:S.lineHeight)??1.5,class:"input",onChange:u[26]||(u[26]=ee=>l({lineHeight:+ee.target.value}))},null,40,QR)]),d("div",YR,[d("div",XR,[u[115]||(u[115]=d("label",{class:"form-label"},"Case",-1)),d("select",{value:((J=s.value.content)==null?void 0:J.textTransform)||"none",class:"select",onChange:u[27]||(u[27]=ee=>l({textTransform:ee.target.value}))},[...u[114]||(u[114]=[d("option",{value:"none"},"Normal",-1),d("option",{value:"uppercase"},"UPPERCASE",-1),d("option",{value:"lowercase"},"lowercase",-1),d("option",{value:"capitalize"},"Capitalize",-1)])],40,ZR)]),d("div",eP,[u[116]||(u[116]=d("label",{class:"form-label"},"Letter Spacing",-1)),d("input",{type:"number",step:".2",value:((ae=s.value.content)==null?void 0:ae.letterSpacing)??0,class:"input",onChange:u[28]||(u[28]=ee=>l({letterSpacing:+ee.target.value}))},null,40,tP)])])])):Te("",!0),s.value.type==="image"?(K(),Q("div",nP,[u[125]||(u[125]=d("div",{class:"panel-title"},"Image",-1)),d("div",rP,[u[118]||(u[118]=d("label",{class:"form-label"},"Source URL",-1)),d("input",{value:(z=s.value.content)==null?void 0:z.src,class:"input",placeholder:"https://...",onInput:u[29]||(u[29]=ee=>l({src:ee.target.value}))},null,40,iP)]),d("div",sP,[u[119]||(u[119]=d("label",{class:"form-label"},"Alt Text",-1)),d("input",{value:(de=s.value.content)==null?void 0:de.alt,class:"input",onInput:u[30]||(u[30]=ee=>l({alt:ee.target.value}))},null,40,oP)]),d("div",aP,[u[121]||(u[121]=d("label",{class:"form-label"},"Object Fit",-1)),d("select",{value:((se=s.value.content)==null?void 0:se.objectFit)||"cover",class:"select",onChange:u[31]||(u[31]=ee=>l({objectFit:ee.target.value}))},[...u[120]||(u[120]=[d("option",{value:"cover"},"Cover",-1),d("option",{value:"contain"},"Contain",-1),d("option",{value:"fill"},"Fill",-1),d("option",{value:"none"},"None",-1)])],40,lP)]),d("div",cP,[u[122]||(u[122]=d("label",{class:"form-label"},"Border Radius",-1)),d("input",{type:"number",min:"0",value:((Ie=s.value.content)==null?void 0:Ie.borderRadius)||0,class:"input",onChange:u[32]||(u[32]=ee=>l({borderRadius:+ee.target.value}))},null,40,uP)]),d("div",dP,[d("div",hP,[u[123]||(u[123]=d("label",{class:"form-label"},"Border Width",-1)),d("input",{type:"number",min:"0",value:((te=s.value.content)==null?void 0:te.borderWidth)||0,class:"input",onChange:u[33]||(u[33]=ee=>l({borderWidth:+ee.target.value}))},null,40,fP)]),d("div",pP,[u[124]||(u[124]=d("label",{class:"form-label"},"Border Color",-1)),d("input",{type:"color",value:((Z=s.value.content)==null?void 0:Z.borderColor)||"#e2e8f0",class:"color-input-native",onInput:u[34]||(u[34]=ee=>l({borderColor:ee.target.value}))},null,40,gP)])])])):Te("",!0),s.value.type==="shape"?(K(),Q("div",mP,[u[133]||(u[133]=d("div",{class:"panel-title"},"Shape",-1)),d("div",vP,[u[127]||(u[127]=d("label",{class:"form-label"},"Type",-1)),d("select",{value:((we=s.value.content)==null?void 0:we.shapeType)||"rectangle",class:"select",onChange:u[35]||(u[35]=ee=>l({shapeType:ee.target.value}))},[...u[126]||(u[126]=[Zt('<option value="rectangle" data-v-51014b61>Rectangle</option><option value="circle" data-v-51014b61>Circle</option><option value="triangle" data-v-51014b61>Triangle</option><option value="star" data-v-51014b61>Star</option><option value="arrow" data-v-51014b61>Arrow</option><option value="diamond" data-v-51014b61>Diamond</option>',6)])],40,yP)]),d("div",_P,[u[128]||(u[128]=d("label",{class:"form-label"},"Fill Color",-1)),d("div",bP,[d("input",{type:"color",value:((ve=s.value.content)==null?void 0:ve.fillColor)||"#6c47ff",onInput:u[36]||(u[36]=ee=>l({fillColor:ee.target.value})),class:"color-input-native"},null,40,wP),d("input",{value:((X=s.value.content)==null?void 0:X.fillColor)||"#6c47ff",class:"input",onInput:u[37]||(u[37]=ee=>l({fillColor:ee.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,EP)])]),d("div",IP,[u[129]||(u[129]=d("label",{class:"form-label"},"Border Color",-1)),d("div",CP,[d("input",{type:"color",value:((_e=s.value.content)==null?void 0:_e.borderColor)||"transparent",onInput:u[38]||(u[38]=ee=>l({borderColor:ee.target.value})),class:"color-input-native"},null,40,xP),d("input",{value:((re=s.value.content)==null?void 0:re.borderColor)||"transparent",class:"input",onInput:u[39]||(u[39]=ee=>l({borderColor:ee.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,kP)])]),d("div",TP,[u[130]||(u[130]=d("label",{class:"form-label"},"Border Width",-1)),d("input",{type:"number",min:"0",value:((ue=s.value.content)==null?void 0:ue.borderWidth)||0,class:"input",onChange:u[40]||(u[40]=ee=>l({borderWidth:+ee.target.value}))},null,40,SP)]),d("div",AP,[u[131]||(u[131]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((he=s.value.content)==null?void 0:he.borderRadius)||0,class:"input",onChange:u[41]||(u[41]=ee=>l({borderRadius:+ee.target.value}))},null,40,RP)]),d("div",PP,[u[132]||(u[132]=d("label",{class:"form-label"},"Fill Opacity",-1)),d("input",{type:"number",min:"0",max:"1",step:".05",value:((ye=s.value.content)==null?void 0:ye.opacity)??1,class:"input",onChange:u[42]||(u[42]=ee=>l({opacity:+ee.target.value}))},null,40,OP)])])):Te("",!0),s.value.type==="button"?(K(),Q("div",NP,[u[149]||(u[149]=d("div",{class:"panel-title"},"Button",-1)),d("div",DP,[u[134]||(u[134]=d("label",{class:"form-label"},"Label",-1)),d("input",{value:(ke=s.value.content)==null?void 0:ke.label,class:"input",onInput:u[43]||(u[43]=ee=>l({label:ee.target.value}))},null,40,MP)]),d("div",LP,[u[136]||(u[136]=d("label",{class:"form-label"},"Style",-1)),d("select",{value:((q=s.value.content)==null?void 0:q.variant)||"primary",class:"select",onChange:u[44]||(u[44]=ee=>l({variant:ee.target.value}))},[...u[135]||(u[135]=[Zt('<option value="primary" data-v-51014b61>Primary</option><option value="secondary" data-v-51014b61>Secondary</option><option value="outline" data-v-51014b61>Outline</option><option value="ghost" data-v-51014b61>Ghost</option><option value="danger" data-v-51014b61>Danger</option>',5)])],40,VP)]),d("div",$P,[u[138]||(u[138]=d("label",{class:"form-label"},"Action",-1)),d("select",{value:((B=s.value.content)==null?void 0:B.action)||"none",class:"select",onChange:u[45]||(u[45]=ee=>l({action:ee.target.value}))},[...u[137]||(u[137]=[d("option",{value:"none"},"None",-1),d("option",{value:"navigate"},"Navigate to slide",-1),d("option",{value:"link"},"Open URL",-1),d("option",{value:"submit"},"Submit",-1)])],40,FP)]),(f=s.value.content)!=null&&f.action&&s.value.content.action!=="none"?(K(),Q("div",BP,[u[139]||(u[139]=d("label",{class:"form-label"},"Target (slide # or URL)",-1)),d("input",{value:(G=s.value.content)==null?void 0:G.target,class:"input",placeholder:"Slide # or https://...",onInput:u[46]||(u[46]=ee=>l({target:ee.target.value}))},null,40,UP)])):Te("",!0),d("div",zP,[d("div",jP,[u[140]||(u[140]=d("label",{class:"form-label"},"Background",-1)),d("input",{type:"color",value:(($=s.value.content)==null?void 0:$.bgColor)||"#6c47ff",class:"color-input-native",onInput:u[47]||(u[47]=ee=>l({bgColor:ee.target.value}))},null,40,qP)]),d("div",HP,[u[141]||(u[141]=d("label",{class:"form-label"},"Text Color",-1)),d("input",{type:"color",value:((O=s.value.content)==null?void 0:O.textColor)||"#ffffff",class:"color-input-native",onInput:u[48]||(u[48]=ee=>l({textColor:ee.target.value}))},null,40,WP)])]),d("div",GP,[d("div",KP,[u[142]||(u[142]=d("label",{class:"form-label"},"Border Color",-1)),d("input",{type:"color",value:((N=s.value.content)==null?void 0:N.borderColor)||"#6c47ff",class:"color-input-native",onInput:u[49]||(u[49]=ee=>l({borderColor:ee.target.value}))},null,40,JP)]),d("div",QP,[u[143]||(u[143]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((H=s.value.content)==null?void 0:H.borderRadius)??8,class:"input",onChange:u[50]||(u[50]=ee=>l({borderRadius:+ee.target.value}))},null,40,YP)])]),d("div",XP,[d("div",ZP,[u[144]||(u[144]=d("label",{class:"form-label"},"Font Size",-1)),d("input",{type:"number",min:"10",value:((j=s.value.content)==null?void 0:j.fontSize)??15,class:"input",onChange:u[51]||(u[51]=ee=>l({fontSize:+ee.target.value}))},null,40,e5)]),d("div",t5,[u[146]||(u[146]=d("label",{class:"form-label"},"Weight",-1)),d("select",{value:String(((T=s.value.content)==null?void 0:T.fontWeight)??600),class:"select",onChange:u[52]||(u[52]=ee=>l({fontWeight:+ee.target.value}))},[...u[145]||(u[145]=[d("option",{value:"400"},"Normal",-1),d("option",{value:"500"},"Medium",-1),d("option",{value:"600"},"Semi-bold",-1),d("option",{value:"700"},"Bold",-1)])],40,n5)])]),d("div",r5,[d("div",i5,[u[147]||(u[147]=d("label",{class:"form-label"},"Font Family",-1)),d("select",{value:((W=s.value.content)==null?void 0:W.fontFamily)||"Inter, sans-serif",class:"select",onChange:u[53]||(u[53]=ee=>l({fontFamily:ee.target.value}))},[(K(),Q(Pe,null,Ke(m,ee=>d("option",{key:`btn-${ee}`,value:ee},fe(ee.split(",")[0]),9,o5)),64))],40,s5)]),d("div",a5,[u[148]||(u[148]=d("label",{class:"form-label"},"Letter Spacing",-1)),d("input",{type:"number",step:".2",value:((Y=s.value.content)==null?void 0:Y.letterSpacing)??0,class:"input",onChange:u[54]||(u[54]=ee=>l({letterSpacing:+ee.target.value}))},null,40,l5)])])])):Te("",!0),s.value.type==="hotspot"?(K(),Q("div",c5,[u[159]||(u[159]=d("div",{class:"panel-title"},"Hotspot",-1)),d("div",u5,[u[151]||(u[151]=d("label",{class:"form-label"},"Icon",-1)),d("select",{value:((ne=s.value.content)==null?void 0:ne.icon)||"?",class:"select",onChange:u[55]||(u[55]=ee=>l({icon:ee.target.value}))},[...u[150]||(u[150]=[Zt('<option value="?" data-v-51014b61>? (Info)</option><option value="!" data-v-51014b61>! (Alert)</option><option value="+" data-v-51014b61>+ (Plus)</option><option value="i" data-v-51014b61>i (Info)</option><option value="✦" data-v-51014b61>✦ (Star)</option>',5)])],40,d5)]),d("div",h5,[u[152]||(u[152]=d("label",{class:"form-label"},"Background Color",-1)),d("div",f5,[d("input",{type:"color",value:((le=s.value.content)==null?void 0:le.bgColor)||"#6c47ff",onInput:u[56]||(u[56]=ee=>l({bgColor:ee.target.value})),class:"color-input-native"},null,40,p5),d("input",{value:((me=s.value.content)==null?void 0:me.bgColor)||"#6c47ff",class:"input",onInput:u[57]||(u[57]=ee=>l({bgColor:ee.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,g5)])]),d("div",m5,[d("div",v5,[u[153]||(u[153]=d("label",{class:"form-label"},"Icon Color",-1)),d("input",{type:"color",value:((Se=s.value.content)==null?void 0:Se.iconColor)||"#ffffff",class:"color-input-native",onInput:u[58]||(u[58]=ee=>l({iconColor:ee.target.value}))},null,40,y5)]),d("div",_5,[u[154]||(u[154]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((oe=s.value.content)==null?void 0:oe.borderRadius)??999,class:"input",onChange:u[59]||(u[59]=ee=>l({borderRadius:+ee.target.value}))},null,40,b5)])]),d("div",w5,[u[155]||(u[155]=d("label",{class:"form-label"},"Popup Title",-1)),d("input",{value:($e=s.value.content)==null?void 0:$e.popupTitle,class:"input",onInput:u[60]||(u[60]=ee=>l({popupTitle:ee.target.value}))},null,40,E5)]),d("div",I5,[u[156]||(u[156]=d("label",{class:"form-label"},"Popup Content",-1)),d("textarea",{value:(Je=s.value.content)==null?void 0:Je.popupContent,class:"textarea",onInput:u[61]||(u[61]=ee=>l({popupContent:ee.target.value}))},null,40,C5)]),d("div",x5,[d("div",k5,[u[157]||(u[157]=d("label",{class:"form-label"},"Popup Background",-1)),d("input",{type:"color",value:((We=s.value.content)==null?void 0:We.popupBgColor)||"#ffffff",class:"color-input-native",onInput:u[62]||(u[62]=ee=>l({popupBgColor:ee.target.value}))},null,40,T5)]),d("div",S5,[u[158]||(u[158]=d("label",{class:"form-label"},"Popup Text",-1)),d("input",{type:"color",value:((pt=s.value.content)==null?void 0:pt.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:u[63]||(u[63]=ee=>l({popupTextColor:ee.target.value}))},null,40,A5)])])])):Te("",!0),s.value.type==="video"?(K(),Q("div",R5,[u[168]||(u[168]=d("div",{class:"panel-title"},"Video",-1)),d("div",P5,[u[160]||(u[160]=d("label",{class:"form-label"},"Video URL / Embed",-1)),d("input",{value:(ze=s.value.content)==null?void 0:ze.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:u[64]||(u[64]=ee=>l({src:ee.target.value}))},null,40,O5)]),d("div",N5,[u[161]||(u[161]=d("label",{class:"form-label"},"Poster Image URL",-1)),d("input",{value:(tn=s.value.content)==null?void 0:tn.poster,class:"input",onInput:u[65]||(u[65]=ee=>l({poster:ee.target.value}))},null,40,D5)]),d("div",M5,[u[163]||(u[163]=d("label",{class:"form-label"},"Object Fit",-1)),d("select",{value:((at=s.value.content)==null?void 0:at.objectFit)||"cover",class:"select",onChange:u[66]||(u[66]=ee=>l({objectFit:ee.target.value}))},[...u[162]||(u[162]=[d("option",{value:"cover"},"Cover",-1),d("option",{value:"contain"},"Contain",-1),d("option",{value:"fill"},"Fill",-1),d("option",{value:"none"},"None",-1)])],40,L5)]),d("label",V5,[d("input",{type:"checkbox",checked:(Ge=s.value.content)==null?void 0:Ge.autoplay,onChange:u[67]||(u[67]=ee=>l({autoplay:ee.target.checked}))},null,40,$5),u[164]||(u[164]=Ae(" Autoplay ",-1))]),d("label",F5,[d("input",{type:"checkbox",checked:((yn=s.value.content)==null?void 0:yn.controls)??!0,onChange:u[68]||(u[68]=ee=>l({controls:ee.target.checked}))},null,40,B5),u[165]||(u[165]=Ae(" Show Controls ",-1))]),d("label",U5,[d("input",{type:"checkbox",checked:(hn=s.value.content)==null?void 0:hn.loop,onChange:u[69]||(u[69]=ee=>l({loop:ee.target.checked}))},null,40,z5),u[166]||(u[166]=Ae(" Loop ",-1))]),d("label",j5,[d("input",{type:"checkbox",checked:(Xr=s.value.content)==null?void 0:Xr.muted,onChange:u[70]||(u[70]=ee=>l({muted:ee.target.checked}))},null,40,q5),u[167]||(u[167]=Ae(" Muted ",-1))])])):Te("",!0),s.value.type==="audio"?(K(),Q("div",H5,[u[177]||(u[177]=d("div",{class:"panel-title"},"Audio",-1)),d("div",W5,[u[169]||(u[169]=d("label",{class:"form-label"},"Audio URL",-1)),d("input",{value:(Nn=s.value.content)==null?void 0:Nn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:u[71]||(u[71]=ee=>l({src:ee.target.value}))},null,40,G5)]),d("div",K5,[u[170]||(u[170]=d("label",{class:"form-label"},"Label",-1)),d("input",{value:(br=s.value.content)==null?void 0:br.label,class:"input",onInput:u[72]||(u[72]=ee=>l({label:ee.target.value}))},null,40,J5)]),d("label",Q5,[d("input",{type:"checkbox",checked:(lt=s.value.content)==null?void 0:lt.autoplay,onChange:u[73]||(u[73]=ee=>l({autoplay:ee.target.checked}))},null,40,Y5),u[171]||(u[171]=Ae(" Autoplay ",-1))]),d("label",X5,[d("input",{type:"checkbox",checked:((Dn=s.value.content)==null?void 0:Dn.controls)!==!1,onChange:u[74]||(u[74]=ee=>l({controls:ee.target.checked}))},null,40,Z5),u[172]||(u[172]=Ae(" Show Controls ",-1))]),d("label",e6,[d("input",{type:"checkbox",checked:(wr=s.value.content)==null?void 0:wr.loop,onChange:u[75]||(u[75]=ee=>l({loop:ee.target.checked}))},null,40,t6),u[173]||(u[173]=Ae(" Loop ",-1))]),d("div",n6,[d("div",r6,[u[174]||(u[174]=d("label",{class:"form-label"},"Accent Color",-1)),d("input",{type:"color",value:((Er=s.value.content)==null?void 0:Er.accentColor)||"#6c47ff",class:"color-input-native",onInput:u[76]||(u[76]=ee=>l({accentColor:ee.target.value}))},null,40,i6)]),d("div",s6,[u[175]||(u[175]=d("label",{class:"form-label"},"Text Color",-1)),d("input",{type:"color",value:((Bo=s.value.content)==null?void 0:Bo.textColor)||"#555555",class:"color-input-native",onInput:u[77]||(u[77]=ee=>l({textColor:ee.target.value}))},null,40,o6)])]),d("div",a6,[u[176]||(u[176]=d("label",{class:"form-label"},"Background Color",-1)),d("input",{type:"color",value:((Uo=s.value.content)==null?void 0:Uo.bgColor)||"#ede7ff",class:"color-input-native",onInput:u[78]||(u[78]=ee=>l({bgColor:ee.target.value}))},null,40,l6)])])):Te("",!0),s.value.type==="quiz"?(K(),Q("div",c6,[u[185]||(u[185]=d("div",{class:"panel-title"},"Quiz Question",-1)),d("div",u6,[u[178]||(u[178]=d("label",{class:"form-label"},"Question",-1)),d("textarea",{value:(Kn=s.value.content)==null?void 0:Kn.question,class:"textarea",style:{"min-height":"60px"},onInput:u[79]||(u[79]=ee=>l({question:ee.target.value}))},null,40,d6)]),d("div",h6,[u[179]||(u[179]=d("label",{class:"form-label"},"Options (one per line)",-1)),d("textarea",{value:(jo=(zo=s.value.content)==null?void 0:zo.options)==null?void 0:jo.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:u[80]||(u[80]=ee=>l({options:ee.target.value.split(`
`).filter(Boolean)}))},null,40,f6)]),d("div",p6,[u[180]||(u[180]=d("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),d("input",{type:"number",min:"0",value:((Zr=s.value.content)==null?void 0:Zr.correctIndex)??0,class:"input",onChange:u[81]||(u[81]=ee=>l({correctIndex:+ee.target.value}))},null,40,g6)]),d("div",m6,[u[181]||(u[181]=d("label",{class:"form-label"},"Explanation",-1)),d("textarea",{value:(fs=s.value.content)==null?void 0:fs.explanation,class:"textarea",onInput:u[82]||(u[82]=ee=>l({explanation:ee.target.value}))},null,40,v6)]),d("div",y6,[d("div",_6,[u[182]||(u[182]=d("label",{class:"form-label"},"Card Background",-1)),d("input",{type:"color",value:((ps=s.value.content)==null?void 0:ps.cardBgColor)||"#ffffff",class:"color-input-native",onInput:u[83]||(u[83]=ee=>l({cardBgColor:ee.target.value}))},null,40,b6)]),d("div",w6,[u[183]||(u[183]=d("label",{class:"form-label"},"Question Color",-1)),d("input",{type:"color",value:((Ri=s.value.content)==null?void 0:Ri.questionColor)||"#1a1a2e",class:"color-input-native",onInput:u[84]||(u[84]=ee=>l({questionColor:ee.target.value}))},null,40,E6)])]),d("div",I6,[u[184]||(u[184]=d("label",{class:"form-label"},"Accent Color",-1)),d("input",{type:"color",value:((Ir=s.value.content)==null?void 0:Ir.accentColor)||"#6c47ff",class:"color-input-native",onInput:u[85]||(u[85]=ee=>l({accentColor:ee.target.value}))},null,40,C6)])])):Te("",!0),d("div",x6,[u[189]||(u[189]=d("div",{class:"panel-title"},"Actions",-1)),d("div",k6,[d("button",{class:"btn btn-secondary btn-sm w-full",onClick:u[86]||(u[86]=ee=>Ee(n).duplicateElement(Ee(e).projectId,Ee(e).currentSlideId,s.value.id))},[...u[186]||(u[186]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),d("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),Ae(" Duplicate ",-1)])]),d("button",{class:"btn btn-secondary btn-sm w-full",onClick:u[87]||(u[87]=ee=>{Ee(e).showInteractionEditor=!0,Ee(e).interactionElementId=s.value.id})},[...u[187]||(u[187]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Ae(" Interactions ",-1)])]),d("button",{class:"btn btn-danger btn-sm w-full",onClick:u[88]||(u[88]=ee=>{Ee(n).deleteElement(Ee(e).projectId,Ee(e).currentSlideId,s.value.id),Ee(e).clearSelection()})},[...u[188]||(u[188]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"3 6 5 6 21 6"}),d("path",{d:"M19 6l-1 14H6L5 6"}),d("path",{d:"M9 6V4h6v2"})],-1),Ae(" Delete Element ",-1)])])])])],64)):(K(),Q(Pe,{key:0},[d("div",nR,[u[91]||(u[91]=d("div",{class:"panel-title"},"Slide Properties",-1)),d("div",rR,[u[89]||(u[89]=d("label",{class:"form-label"},"Title",-1)),Ye(d("input",{"onUpdate:modelValue":u[0]||(u[0]=ee=>p.value.title=ee),class:"input",onInput:u[1]||(u[1]=ee=>v("title",p.value.title))},null,544),[[ht,p.value.title]])]),d("div",iR,[u[90]||(u[90]=d("label",{class:"form-label"},"Background",-1)),d("div",sR,[(K(),Q(Pe,null,Ke(["color","gradient","image"],ee=>{var dt;return d("button",{key:ee,class:Me(["bg-type-btn",(((dt=i.value)==null?void 0:dt.backgroundType)||"color")===ee&&"active"]),onClick:qo=>g({backgroundType:ee})},fe(ee),11,oR)}),64))]),(((C=i.value)==null?void 0:C.backgroundType)||"color")==="color"?(K(),Q("div",aR,[d("input",{type:"color",value:((x=i.value)==null?void 0:x.background)||"#ffffff",onInput:u[2]||(u[2]=ee=>g({background:ee.target.value})),class:"color-input-native"},null,40,lR),d("input",{value:((A=i.value)==null?void 0:A.background)||"#ffffff",class:"input",onInput:u[3]||(u[3]=ee=>g({background:ee.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,cR)])):((V=i.value)==null?void 0:V.backgroundType)==="gradient"?Ye((K(),Q("input",{key:1,"onUpdate:modelValue":u[4]||(u[4]=ee=>p.value.backgroundGradient=ee),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:u[5]||(u[5]=ee=>g({backgroundGradient:p.value.backgroundGradient}))},null,544)),[[ht,p.value.backgroundGradient]]):Ye((K(),Q("input",{key:2,"onUpdate:modelValue":u[6]||(u[6]=ee=>p.value.backgroundImage=ee),class:"input",placeholder:"https://...",onInput:u[7]||(u[7]=ee=>g({backgroundImage:p.value.backgroundImage}))},null,544)),[[ht,p.value.backgroundImage]])])]),d("div",uR,[u[92]||(u[92]=d("div",{class:"panel-title"},"Slide Notes",-1)),Ye(d("textarea",{"onUpdate:modelValue":u[8]||(u[8]=ee=>p.value.notes=ee),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:u[9]||(u[9]=ee=>v("notes",p.value.notes))},null,544),[[ht,p.value.notes]])]),d("div",dR,[u[94]||(u[94]=d("div",{class:"panel-title"},"Transition",-1)),d("select",{value:((M=i.value)==null?void 0:M.transition)||"none",class:"select",onChange:u[10]||(u[10]=ee=>g({transition:ee.target.value}))},[...u[93]||(u[93]=[Zt('<option value="none" data-v-51014b61>None</option><option value="fade" data-v-51014b61>Fade</option><option value="slide" data-v-51014b61>Slide</option><option value="zoom" data-v-51014b61>Zoom</option><option value="flip" data-v-51014b61>Flip</option>',5)])],40,hR)])],64))])}}},S6=Rt(T6,[["__scopeId","data-v-51014b61"]]),A6={class:"editor-toolbar"},R6={class:"toolbar-group"},P6={class:"toolbar-group"},O6=["data-tooltip","onClick"],N6={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},D6={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},M6={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},L6={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},V6={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$6={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},F6={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},B6={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},U6={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},z6={class:"tool-label"},j6={class:"toolbar-group"},q6={class:"toolbar-group"},H6={__name:"EditorToolbar",setup(t){const e=vn();dn();const n=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"}];function r(i){e.setActiveTool(i)}return(i,s)=>(K(),Q("div",A6,[d("div",R6,[d("button",{class:Me(["tool-btn",Ee(e).activeTool==="select"&&"active"]),onClick:s[0]||(s[0]=o=>r("select")),"data-tooltip":"Select (V)"},[...s[6]||(s[6]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),d("span",{class:"tool-label"},"Select",-1)])],2)]),s[20]||(s[20]=d("div",{class:"toolbar-divider"},null,-1)),d("div",P6,[(K(),Q(Pe,null,Ke(n,o=>d("button",{key:o.id,class:Me(["tool-btn",Ee(e).activeTool===o.id&&"active"]),"data-tooltip":o.tooltip,onClick:a=>r(o.id)},[o.icon==="text"?(K(),Q("svg",N6,[...s[7]||(s[7]=[d("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),d("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),d("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):o.icon==="heading"?(K(),Q("svg",D6,[...s[8]||(s[8]=[d("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):o.icon==="image"?(K(),Q("svg",M6,[...s[9]||(s[9]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),d("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):o.icon==="shape"?(K(),Q("svg",L6,[...s[10]||(s[10]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):o.icon==="button"?(K(),Q("svg",V6,[...s[11]||(s[11]=[d("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),d("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):o.icon==="hotspot"?(K(),Q("svg",$6,[...s[12]||(s[12]=[d("circle",{cx:"12",cy:"12",r:"10"},null,-1),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):o.icon==="video"?(K(),Q("svg",F6,[...s[13]||(s[13]=[d("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),d("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):o.icon==="audio"?(K(),Q("svg",B6,[...s[14]||(s[14]=[d("path",{d:"M9 18V5l12-2v13"},null,-1),d("circle",{cx:"6",cy:"18",r:"3"},null,-1),d("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):o.icon==="quiz"?(K(),Q("svg",U6,[...s[15]||(s[15]=[d("path",{d:"M9 11l3 3L22 4"},null,-1),d("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):Te("",!0),d("span",z6,fe(o.label),1)],10,O6)),64))]),s[21]||(s[21]=d("div",{class:"toolbar-spacer"},null,-1)),d("div",j6,[d("button",{class:"tool-btn",onClick:s[1]||(s[1]=o=>Ee(e).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...s[16]||(s[16]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),d("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),d("button",{class:"zoom-display",onClick:s[2]||(s[2]=o=>Ee(e).zoomReset())},fe(Math.round(Ee(e).zoomLevel*100))+"% ",1),d("button",{class:"tool-btn",onClick:s[3]||(s[3]=o=>Ee(e).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...s[17]||(s[17]=[Zt('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1eac61d4><circle cx="11" cy="11" r="8" data-v-1eac61d4></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-1eac61d4></line><line x1="11" y1="8" x2="11" y2="14" data-v-1eac61d4></line><line x1="8" y1="11" x2="14" y2="11" data-v-1eac61d4></line></svg>',1)])])]),s[22]||(s[22]=d("div",{class:"toolbar-divider"},null,-1)),d("div",q6,[d("button",{class:Me(["tool-btn",Ee(e).showGrid&&"active"]),onClick:s[4]||(s[4]=o=>Ee(e).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...s[18]||(s[18]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[d("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),d("button",{class:Me(["tool-btn",Ee(e).snapToGrid&&"active"]),onClick:s[5]||(s[5]=o=>Ee(e).toggleSnap()),"data-tooltip":"Snap to grid"},[...s[19]||(s[19]=[Zt('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1eac61d4><circle cx="5" cy="5" r="1" data-v-1eac61d4></circle><circle cx="12" cy="5" r="1" data-v-1eac61d4></circle><circle cx="19" cy="5" r="1" data-v-1eac61d4></circle><circle cx="5" cy="12" r="1" data-v-1eac61d4></circle><circle cx="12" cy="12" r="1" data-v-1eac61d4></circle><circle cx="19" cy="12" r="1" data-v-1eac61d4></circle><circle cx="5" cy="19" r="1" data-v-1eac61d4></circle><circle cx="12" cy="19" r="1" data-v-1eac61d4></circle><circle cx="19" cy="19" r="1" data-v-1eac61d4></circle></svg>',1)])],2)])]))}},W6=Rt(H6,[["__scopeId","data-v-1eac61d4"]]),G6=["onMousedown"],K6={key:1,class:"selection-border locked-border"},J6={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=vn(),r=dn(),i=cn("canvasScale",pe(1)),s=xe(()=>n.projectId),o=xe(()=>n.currentSlideId),a=xe(()=>n.selectedElementIds.includes(e.element.id)),l=xe(()=>e.element.locked),h=xe(()=>e.element.visible!==!1);let p=!1,g=0,v=0,m=new Map;function _(ae){var se;if(l.value||ae.target.classList.contains("resize-handle"))return;const z=ae.ctrlKey||ae.metaKey||ae.shiftKey;a.value?z&&n.selectElement(e.element.id,!0):n.selectElement(e.element.id,z),n.setActiveTool("select"),p=!1,g=ae.clientX,v=ae.clientY,m.clear();const de=(se=r.getProject(s.value))==null?void 0:se.slides.find(Ie=>Ie.id===o.value);de&&n.selectedElementIds.forEach(Ie=>{const te=de.elements.find(Z=>Z.id===Ie);te&&!te.locked&&m.set(Ie,{x:te.x,y:te.y})}),window.addEventListener("mousemove",u),window.addEventListener("mouseup",C),ae.stopPropagation()}function u(ae){const z=(ae.clientX-g)/i.value,de=(ae.clientY-v)/i.value;!p&&(Math.abs(z)>3||Math.abs(de)>3)&&(p=!0),p&&m.forEach((se,Ie)=>{let te=se.x+z,Z=se.y+de;if(n.snapToGrid&&n.gridSize){const we=n.gridSize;te=Math.round(te/we)*we,Z=Math.round(Z/we)*we}r.updateElement(s.value,o.value,Ie,{x:te,y:Z})})}function C(ae){p||!(ae.ctrlKey||ae.metaKey||ae.shiftKey)&&n.selectedElementIds.length>1&&n.selectElement(e.element.id,!1),p=!1,window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",C)}const x=["n","ne","e","se","s","sw","w","nw"];let A=!1,V="",M=0,F=0,L=0,I=0,b=0,w=0;function P(ae,z){l.value||(ae.stopPropagation(),ae.preventDefault(),A=!0,V=z,M=ae.clientX,F=ae.clientY,L=e.element.width,I=e.element.height,b=e.element.x,w=e.element.y,window.addEventListener("mousemove",D),window.addEventListener("mouseup",E))}function D(ae){if(!A)return;const z=i.value,de=(ae.clientX-M)/z,se=(ae.clientY-F)/z,Ie=20;let te=b,Z=w,we=L,ve=I;if(V.includes("e")&&(we=Math.max(Ie,L+de)),V.includes("s")&&(ve=Math.max(Ie,I+se)),V.includes("w")){const X=Math.max(Ie,L-de);te=b+(L-X),we=X}if(V.includes("n")){const X=Math.max(Ie,I-se);Z=w+(I-X),ve=X}if(n.snapToGrid&&n.gridSize){const X=n.gridSize;we=Math.round(we/X)*X,ve=Math.round(ve/X)*X,te=Math.round(te/X)*X,Z=Math.round(Z/X)*X}r.updateElement(s.value,o.value,e.element.id,{x:te,y:Z,width:we,height:ve})}function E(){A=!1,window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",E)}function R(){["text","heading"].includes(e.element.type)&&n.setRightPanel("properties")}const S=xe(()=>({position:"absolute",left:`${e.element.x}px`,top:`${e.element.y}px`,width:`${e.element.width}px`,height:`${e.element.height}px`,transform:`rotate(${e.element.rotation||0}deg)`,opacity:e.element.opacity??1,zIndex:e.element.zIndex||1,cursor:l.value?"not-allowed":"move",visibility:h.value?"visible":"hidden",userSelect:"none"}));function J(ae){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[ae]||"auto"}return(ae,z)=>(K(),Q("div",{class:Me(["element-wrapper",a.value&&"selected",l.value&&"locked"]),style:Le(S.value),onMousedown:_,onDblclick:R},[$c(ae.$slots,"default",{},void 0),a.value&&!l.value?(K(),Q(Pe,{key:0},[z[0]||(z[0]=d("div",{class:"selection-border"},null,-1)),(K(),Q(Pe,null,Ke(x,de=>d("div",{key:de,class:Me(["resize-handle",`handle-${de}`]),style:Le({cursor:J(de)}),onMousedown:Dt(se=>P(se,de),["stop"])},null,46,G6)),64))],64)):Te("",!0),a.value&&l.value?(K(),Q("div",K6)):Te("",!0)],38))}},Q6=Rt(J6,[["__scopeId","data-v-2b4aa1b3"]]),Y6=["contenteditable"],Rc={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=xe(()=>e.element.content||{}),r=vn(),i=dn(),s=pe(!1),o=pe(null),a=pe("");Kt(()=>n.value.text,v=>{s.value||(a.value=v||(e.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function l(){r.selectedElementId===e.element.id&&(s.value=!0,xo(()=>{if(o.value){o.value.focus();const v=document.createRange();v.selectNodeContents(o.value),v.collapse(!1);const m=window.getSelection();m.removeAllRanges(),m.addRange(v)}}))}function h(v){}function p(v){s.value&&v.stopPropagation()}function g(){if(s.value=!1,o.value){const v=o.value.innerText;a.value=v,i.updateElement(r.projectId,r.currentSlideId,e.element.id,{content:{...e.element.content,text:v}})}}return(v,m)=>(K(),Q("div",{class:"text-element",ref_key:"textRef",ref:o,contenteditable:s.value,onDblclick:l,onBlur:g,onInput:h,onMousedown:p,style:Le({fontSize:(n.value.fontSize||16)+"px",fontFamily:n.value.fontFamily||"Inter, sans-serif",fontWeight:n.value.fontWeight||"normal",fontStyle:n.value.fontStyle||"normal",textDecoration:n.value.textDecoration||"none",textAlign:n.value.textAlign||"left",color:n.value.color||"#1a1a2e",lineHeight:n.value.lineHeight||1.5,textTransform:n.value.textTransform||"none",letterSpacing:(n.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:s.value?"2px solid var(--primary)":"none",cursor:s.value?"text":"inherit",userSelect:s.value?"text":"none"})},fe(a.value),45,Y6))}},X6=["src","alt"],Z6={key:1,class:"image-placeholder"},e3={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},t3={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o;return K(),Q("div",{class:"image-element",style:Le({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((r=t.element.content)==null?void 0:r.borderRadius)||0)+"px",border:`${((i=t.element.content)==null?void 0:i.borderWidth)||0}px solid ${((s=t.element.content)==null?void 0:s.borderColor)||"transparent"}`})},[(o=t.element.content)!=null&&o.src?(K(),Q("img",{key:0,src:t.element.content.src,alt:t.element.content.alt||"",style:Le({width:"100%",height:"100%",objectFit:t.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,X6)):(K(),Q("div",Z6,[(K(),Q("svg",e3,[...n[0]||(n[0]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),d("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),n[1]||(n[1]=d("span",null,"Image",-1))]))],4)}}},n3=Rt(t3,[["__scopeId","data-v-401e9ff3"]]),r3={class:"shape-element",style:{width:"100%",height:"100%"}},i3=["width","height"],s3=["points","fill","stroke","stroke-width"],o3={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=xe(()=>e.element.content||{}),r=xe(()=>{const o=n.value.shapeType||"rectangle",a={width:"100%",height:"100%",background:n.value.fillColor||"#6c47ff",border:`${n.value.borderWidth||0}px solid ${n.value.borderColor||"transparent"}`,opacity:n.value.opacity??1};return o==="circle"?{...a,borderRadius:"50%"}:o==="rectangle"?{...a,borderRadius:(n.value.borderRadius||0)+"px"}:a}),i=xe(()=>["triangle","star","arrow","diamond"].includes(n.value.shapeType)),s=xe(()=>{const o=e.element.width||150,a=e.element.height||100,l=n.value.shapeType;if(l==="triangle")return`${o/2},0 ${o},${a} 0,${a}`;if(l==="diamond")return`${o/2},0 ${o},${a/2} ${o/2},${a} 0,${a/2}`;if(l==="arrow")return`0,${a*.3} ${o*.6},${a*.3} ${o*.6},0 ${o},${a/2} ${o*.6},${a} ${o*.6},${a*.7} 0,${a*.7}`;if(l==="star"){const h=o/2,p=a/2,g=Math.min(o,a)/2,v=g*.4;let m="";for(let _=0;_<10;_++){const u=(_*36-90)*Math.PI/180,C=_%2===0?g:v;m+=`${h+C*Math.cos(u)},${p+C*Math.sin(u)} `}return m.trim()}return""});return(o,a)=>(K(),Q("div",r3,[i.value?(K(),Q("svg",{key:1,width:t.element.width,height:t.element.height,style:{display:"block",overflow:"visible"}},[d("polygon",{points:s.value,fill:n.value.fillColor||"#6c47ff",stroke:n.value.borderColor||"none","stroke-width":n.value.borderWidth||0},null,8,s3)],8,i3)):(K(),Q("div",{key:0,style:Le(r.value)},null,4))]))}},a3={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=xe(()=>e.element.content||{}),r=xe(()=>{const i={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},s=i[n.value.variant||"primary"]||i.primary;return{...s,background:n.value.bgColor||s.background,color:n.value.textColor||s.color,border:n.value.borderColor?`1px solid ${n.value.borderColor}`:s.border,borderRadius:(n.value.borderRadius??8)+"px"}});return(i,s)=>(K(),Q("div",{class:"button-element",style:Le({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(n.value.fontSize??15)+"px",fontWeight:n.value.fontWeight??600,letterSpacing:(n.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:n.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...r.value})},fe(n.value.label||"Button"),5))}},l3={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},c3={class:"popup-header"},u3={class:"popup-body"},d3={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=xe(()=>e.element.content||{}),r=pe(!1);function i(s){s.stopPropagation(),r.value=!r.value}return(s,o)=>(K(),Q("div",l3,[d("div",{class:"hotspot-btn",style:Le({width:"100%",height:"100%",background:n.value.bgColor||"#6c47ff",borderRadius:(n.value.borderRadius??999)>=999?"50%":(n.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:n.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Dt(i,["stop"])},fe(n.value.icon||"?"),5),ot(qr,{name:"fade"},{default:Et(()=>[r.value?(K(),Q("div",{key:0,class:"hotspot-popup",style:Le({background:n.value.popupBgColor||"#ffffff",color:n.value.popupTextColor||"#1a1a2e"})},[d("div",c3,[d("strong",null,fe(n.value.popupTitle||"Info"),1),d("button",{class:"popup-close",onClick:o[0]||(o[0]=Dt(a=>r.value=!1,["stop"]))},"×")]),d("div",u3,fe(n.value.popupContent||"Add your content in the properties panel."),1)],4)):Te("",!0)]),_:1})]))}},h3=Rt(d3,[["__scopeId","data-v-ef5f15f6"]]),f3={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},p3=["src"],g3=["src","poster","autoplay","controls","loop","muted"],m3={key:2,class:"video-placeholder"},v3={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},y3={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=xe(()=>e.element.content||{}),r=xe(()=>{const s=n.value.src||"";return s.includes("youtube")||s.includes("youtu.be")}),i=xe(()=>{var o,a;const s=n.value.src||"";if(r.value){const l=(o=s.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:o[1];return l?`https://www.youtube.com/embed/${l}`:""}if(s.includes("vimeo.com")){const l=(a=s.match(/vimeo\.com\/(\d+)/))==null?void 0:a[1];return l?`https://player.vimeo.com/video/${l}`:""}return""});return(s,o)=>(K(),Q("div",f3,[i.value?(K(),Q("iframe",{key:0,src:i.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,p3)):n.value.src&&!i.value?(K(),Q("video",{key:1,src:n.value.src,poster:n.value.poster,autoplay:n.value.autoplay,controls:n.value.controls!==!1,loop:n.value.loop,muted:n.value.muted,style:Le({width:"100%",height:"100%",objectFit:n.value.objectFit||"cover"})},null,12,g3)):(K(),Q("div",m3,[(K(),Q("svg",v3,[...o[0]||(o[0]=[d("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),d("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),o[1]||(o[1]=d("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},_3=Rt(y3,[["__scopeId","data-v-dfea1a16"]]),b3=["stroke"],w3=["src","controls","autoplay","loop"],E3={key:1,style:{"font-size":"11px",color:"#aaa"}},I3={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o,a,l,h,p,g;return K(),Q("div",{class:"audio-element",style:Le({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((r=t.element.content)==null?void 0:r.bgColor)||"#ede7ff",border:`1px solid ${((i=t.element.content)==null?void 0:i.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(K(),Q("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((s=t.element.content)==null?void 0:s.accentColor)||"#6c47ff","stroke-width":"2"},[...n[1]||(n[1]=[d("path",{d:"M9 18V5l12-2v13"},null,-1),d("circle",{cx:"6",cy:"18",r:"3"},null,-1),d("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,b3)),d("span",{style:Le({fontSize:"13px",color:((o=t.element.content)==null?void 0:o.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},fe(((a=t.element.content)==null?void 0:a.label)||"Audio Player"),5),(l=t.element.content)!=null&&l.src?(K(),Q("audio",{key:0,src:t.element.content.src,controls:((h=t.element.content)==null?void 0:h.controls)!==!1,autoplay:(p=t.element.content)==null?void 0:p.autoplay,loop:(g=t.element.content)==null?void 0:g.loop,style:{height:"28px","max-width":"180px"},onMousedown:n[0]||(n[0]=Dt(()=>{},["stop"]))},null,40,w3)):(K(),Q("span",E3,"No source"))],4)}}},C3={class:"quiz-options"},x3=["onClick"],k3={class:"opt-letter"},T3={class:"opt-text"},S3={key:0},A3={class:"quiz-actions"},R3=["disabled"],P3={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=xe(()=>e.element.content||{}),r=pe(null),i=pe(!1);function s(h){i.value||(r.value=h)}function o(){r.value!==null&&(i.value=!0)}function a(){r.value=null,i.value=!1}const l=xe(()=>i.value&&r.value===(n.value.correctIndex??0));return(h,p)=>(K(),Q("div",{class:"quiz-element",style:Le({width:"100%",height:"100%",background:n.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":n.value.accentColor||"#6c47ff"})},[d("p",{style:Le({fontSize:"15px",fontWeight:600,color:n.value.questionColor||"#1a1a2e",lineHeight:1.4})},fe(n.value.question||"Question text…"),5),d("div",C3,[(K(!0),Q(Pe,null,Ke(n.value.options||[],(g,v)=>(K(),Q("div",{key:v,class:Me(["quiz-opt",r.value===v&&"selected",i.value&&v===n.value.correctIndex&&"correct",i.value&&r.value===v&&v!==n.value.correctIndex&&"wrong"]),onClick:m=>s(v)},[d("span",k3,fe(String.fromCharCode(65+v)),1),d("span",T3,fe(g),1)],10,x3))),128))]),i.value?(K(),Q("div",{key:0,class:Me(["quiz-feedback",l.value?"correct":"wrong"])},[Ae(fe(l.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!l.value&&n.value.explanation?(K(),Q("span",S3,fe(n.value.explanation),1)):Te("",!0)],2)):Te("",!0),d("div",A3,[i.value?(K(),Q("button",{key:1,class:"quiz-btn secondary",onClick:a},"Try Again")):(K(),Q("button",{key:0,class:"quiz-btn primary",disabled:r.value===null,onClick:o},"Submit",8,R3))])],4))}},O3=Rt(P3,[["__scopeId","data-v-ca2bd187"]]),N3={key:0,class:"canvas-empty"},D3={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},M3={key:0,class:"drop-hint"},L3={class:"canvas-info-bar"},V3=["disabled"],$3={class:"slide-index"},F3=["disabled"],B3={key:0},ha=960,fa=540,U3={__name:"EditorCanvas",setup(t){const e=vn(),n=dn(),r=pe(null),i=pe(null),s=pe(1);Bs("canvasScale",s);const o=xe(()=>n.getProject(e.projectId)),a=xe(()=>{var X,_e;return(_e=(X=o.value)==null?void 0:X.slides)==null?void 0:_e.find(re=>re.id===e.currentSlideId)}),l=xe(()=>{var X;return[...((X=o.value)==null?void 0:X.slides)||[]].sort((_e,re)=>_e.order-re.order)}),h=xe(()=>l.value.findIndex(X=>X.id===e.currentSlideId)),p=xe(()=>{var X;return[...((X=a.value)==null?void 0:X.elements)||[]].sort((_e,re)=>(_e.zIndex||0)-(re.zIndex||0))}),g=xe(()=>{const X=a.value;return X?X.backgroundType==="gradient"&&X.backgroundGradient?{background:X.backgroundGradient}:X.backgroundType==="image"&&X.backgroundImage?{backgroundImage:`url(${X.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:X.background||"#fff"}:{background:"#fff"}}),v=xe(()=>`scale(${e.zoomLevel})`);function m(){if(!r.value)return;const{clientWidth:X,clientHeight:_e}=r.value,re=(X-80)/ha,ue=(_e-80)/fa;s.value=Math.min(re,ue)}let _=null;ko(()=>{m(),_=new ResizeObserver(m),r.value&&_.observe(r.value)}),To(()=>_==null?void 0:_.disconnect());const u=pe({x:0,y:0}),C=pe({x:0,y:0}),x=pe(!1),A=pe(!1),V=xe(()=>{if(!x.value)return null;const X=Math.min(u.value.x,C.value.x),_e=Math.min(u.value.y,C.value.y),re=Math.abs(C.value.x-u.value.x),ue=Math.abs(C.value.y-u.value.y);return{x:X,y:_e,width:re,height:ue}});function M(X){!x.value&&(X.target===i.value||X.target===X.currentTarget)&&e.clearSelection()}function F(X){return X?Array.from(X.files||[]).some(_e=>_e.type.startsWith("image/")):!1}function L(X,_e,re){if(!X||!X.type.startsWith("image/"))return;const ue=new FileReader;ue.onload=()=>{const he=String(ue.result||"");if(!he)return;const ye=new Image;ye.onload=()=>{const ke=i.value.getBoundingClientRect(),q=(_e-ke.left)/e.zoomLevel,B=(re-ke.top)/e.zoomLevel,$=Math.min(420/ye.width,280/ye.height,1),O=Math.max(120,Math.round(ye.width*$)),N=Math.max(80,Math.round(ye.height*$)),H=Math.max(0,Math.min(ha-O,Math.round(q-O/2))),j=Math.max(0,Math.min(fa-N,Math.round(B-N/2))),T=n.addElement(e.projectId,e.currentSlideId,"image",{x:H,y:j,width:O,height:N,content:{src:he,alt:X.name,objectFit:"cover"}});T&&(e.selectElement(T.id),e.setActiveTool("select"),e.setRightPanel("properties"))},ye.src=he},ue.readAsDataURL(X)}function I(X){F(X.dataTransfer)&&(X.preventDefault(),X.dataTransfer.dropEffect="copy",A.value=!0)}function b(X){var _e;(_e=X.currentTarget)!=null&&_e.contains(X.relatedTarget)||(A.value=!1)}function w(X){if(!F(X.dataTransfer))return;X.preventDefault(),A.value=!1;const _e=Array.from(X.dataTransfer.files||[]).find(re=>re.type.startsWith("image/"));_e&&L(_e,X.clientX,X.clientY)}function P(X){const _e=e.activeTool;if(X.target!==i.value&&X.target!==X.currentTarget)return;X.preventDefault(),X.stopPropagation();const re=i.value.getBoundingClientRect(),ue=(X.clientX-re.left)/e.zoomLevel,he=(X.clientY-re.top)/e.zoomLevel;if(_e==="select"){x.value=!0,u.value={x:ue,y:he},C.value={x:ue,y:he};const q=f=>{C.value={x:(f.clientX-re.left)/e.zoomLevel,y:(f.clientY-re.top)/e.zoomLevel}},B=()=>{window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",B);const f=V.value;if(f&&(f.width>2||f.height>2)){const G=p.value.filter($=>{const O=$.x,N=$.y,H=$.width||100,j=$.height||100;return O<f.x+f.width&&O+H>f.x&&N<f.y+f.height&&N+j>f.y}).map($=>$.id);G.length>0?e.setSelection(G):e.clearSelection()}else e.clearSelection();setTimeout(()=>{x.value=!1},0)};window.addEventListener("mousemove",q),window.addEventListener("mouseup",B);return}const ye=q=>e.snapToGrid?Math.round(q/e.gridSize)*e.gridSize:q,ke=n.addElement(e.projectId,e.currentSlideId,_e,{x:ye(ue-75),y:ye(he-40)});ke&&(e.selectElement(ke.id),e.setActiveTool("select"),e.setRightPanel("properties"))}const D=xe(()=>{if(!e.showGrid)return{};const X=e.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${X}px ${X}px`}}),E={text:Rc,heading:Rc,image:n3,shape:o3,button:a3,hotspot:h3,video:_3,audio:I3,quiz:O3,divider:"div"};function R(X){return E[X]||Rc}function S(X){var _e,re;return X.type!=="divider"?{}:{borderTop:`${((_e=X.content)==null?void 0:_e.thickness)||2}px solid ${((re=X.content)==null?void 0:re.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const J=pe({show:!1,x:0,y:0,elId:null});function ae(X,_e){X.preventDefault(),J.value={show:!0,x:X.clientX,y:X.clientY,elId:_e},e.selectElement(_e),setTimeout(()=>window.addEventListener("click",z,{once:!0}),0)}function z(){J.value.show=!1}function de(){if(J.value.elId){const X=n.duplicateElement(e.projectId,e.currentSlideId,J.value.elId);X&&e.selectElement(X.id)}z()}function se(){J.value.elId&&(n.deleteElement(e.projectId,e.currentSlideId,J.value.elId),e.clearSelection()),z()}function Ie(){J.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,J.value.elId,"up"),z()}function te(){J.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,J.value.elId,"down"),z()}function Z(){const X=h.value,_e=n.addSlide(e.projectId,X);_e&&e.setCurrentSlide(_e.id)}function we(){const X=h.value;X>0&&e.setCurrentSlide(l.value[X-1].id)}function ve(){const X=h.value;X<l.value.length-1&&e.setCurrentSlide(l.value[X+1].id)}return(X,_e)=>{var re;return K(),Q("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:r},[a.value?(K(),Q(Pe,{key:1},[d("div",{class:"canvas-zoom-wrapper",style:Le({transform:v.value,transformOrigin:"center center",transition:"transform .15s ease"})},[d("div",{ref_key:"canvasRef",ref:i,class:"slide-canvas",style:Le({width:ha+"px",height:fa+"px",...g.value,...D.value}),onClick:M,onMousedown:P,onDragover:I,onDragleave:b,onDrop:w,onContextmenu:_e[0]||(_e[0]=Dt(()=>{},["prevent"]))},[(K(!0),Q(Pe,null,Ke(p.value,ue=>(K(),_t(Q6,{key:ue.id,element:ue,onContextmenu:Dt(he=>ae(he,ue.id),["stop"])},{default:Et(()=>[(K(),_t(Yg(R(ue.type)),{element:ue,style:Le(ue.type==="divider"?S(ue):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),Ee(e).activeTool!=="select"||A.value?(K(),Q("div",M3,fe(A.value?"Drop image to insert it on this slide":`Click anywhere to add ${Ee(e).activeTool}`),1)):Te("",!0),x.value&&V.value?(K(),Q("div",{key:1,class:"selection-marquee",style:Le({left:V.value.x+"px",top:V.value.y+"px",width:V.value.width+"px",height:V.value.height+"px"})},null,4)):Te("",!0)],36)],4),d("div",L3,[d("button",{class:"bar-btn",onClick:Z},"Add page"),d("button",{class:"bar-btn icon",onClick:we,disabled:h.value<=0},"◀",8,V3),d("span",$3,fe(h.value+1)+" / "+fe(l.value.length),1),d("button",{class:"bar-btn icon",onClick:ve,disabled:h.value>=l.value.length-1},"▶",8,F3),d("span",null,fe(ha)+" × "+fe(fa)+"px"),_e[4]||(_e[4]=d("span",null,"·",-1)),d("span",null,fe(((re=a.value.elements)==null?void 0:re.length)||0)+" elements",1),Ee(e).hasSelection?(K(),Q("span",B3,"· "+fe(Ee(e).selectedElementIds.length)+" selected",1)):Te("",!0),d("button",{class:"bar-btn ai",onClick:_e[1]||(_e[1]=ue=>Ee(e).setRightPanel("ai"))},"AI")])],64)):(K(),Q("div",N3,[(K(),Q("svg",D3,[..._e[2]||(_e[2]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),_e[3]||(_e[3]=d("p",null,"Select a slide to start editing",-1))])),(K(),_t(Du,{to:"body"},[J.value.show?(K(),Q("div",{key:0,class:"ctx-menu",style:Le({left:J.value.x+"px",top:J.value.y+"px"})},[d("button",{class:"ctx-item",onClick:de},"Duplicate"),d("button",{class:"ctx-item",onClick:Ie},"Bring Forward"),d("button",{class:"ctx-item",onClick:te},"Send Backward"),_e[5]||(_e[5]=d("div",{class:"ctx-divider"},null,-1)),d("button",{class:"ctx-item danger",onClick:se},"Delete")],4)):Te("",!0)]))],512)}}},z3=Rt(U3,[["__scopeId","data-v-47ef6b03"]]),j3=El("ai",()=>{const t=pe(localStorage.getItem("ai_api_key")||""),e=pe(localStorage.getItem("ai_provider")||"openai"),n=pe(!1),r=pe(""),i=pe([]);function s(C){t.value=C,localStorage.setItem("ai_api_key",C)}function o(C){e.value=C,localStorage.setItem("ai_provider",C)}async function a(C,x={}){var A;if(!t.value)return u(C,x);n.value=!0,r.value="";try{const V=[{role:"system",content:`You are an expert eLearning content creator. Generate clear, engaging, and educational content. Format output as clean text unless asked for JSON. Context: ${JSON.stringify(x)}`},{role:"user",content:C}],M=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.value}`},body:JSON.stringify({model:"gpt-4o-mini",messages:V,temperature:.7,max_tokens:1500})});if(!M.ok){const I=await M.json();throw new Error(((A=I.error)==null?void 0:A.message)||`HTTP ${M.status}`)}const L=(await M.json()).choices[0].message.content;return i.value.push({prompt:C,result:L,timestamp:Date.now()}),L}catch(V){return r.value=V.message,null}finally{n.value=!1}}async function l(C,x="general",A="",V=""){let M;if(V.trim())M=V.trim();else{const L=A.trim()?`
Additional context: ${A.trim()}`:"",I={intro:"Focus on welcoming learners, stating the purpose, and building motivation.",overview:"Provide a high-level map of all topics to be covered.",concept:"Explain the concept clearly with a definition, how it works, and why it matters.",example:"Present a real-world case study or worked example with outcome.",summary:"Recap the key points covered and reinforce the main message.",callout:"Highlight a single critical insight or action item.",general:"Create a well-structured educational slide with title, key points, and a takeaway."}[x]||"";M=`You are an expert eLearning content creator and visual slide designer.
Create content for a "${x}" eLearning slide about: "${C}".${L}
Instruction: ${I}

Return ONLY a valid JSON object, no markdown:
{
  "title": "Concise, engaging slide title",
  "subtitle": "One-line supporting statement (optional)",
  "bullets": ["Specific point 1 about ${C}", "Specific point 2", "Specific point 3"],
  "callout": "Single most important takeaway",
  "design": {
    "layout": "classic | split | focus",
    "titleAlign": "left | center",
    "bulletStyle": "dot | check | number",
    "emphasis": "balanced | callout"
  }
}

Rules:
- Keep tone professional and concise
- Use 3-5 bullets with strong, action-oriented wording
- Keep subtitle under 18 words
- Ensure all content is specific to "${C}" — never use generic placeholders.`}const F=await a(M,{type:"slideContent",slideType:x,topic:C});if(!F)return null;try{return JSON.parse(F.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return{title:C,bullets:[F]}}}async function h(C,x=5,{audience:A="",objective:V="",tone:M="professional",customPrompt:F=""}={}){const L=Math.max(1,Math.min(20,Number(x)||1));let I;if(F.trim())I=F.trim();else{const w=A.trim()?`
Audience: ${A.trim()}`:"",P=V.trim()?`
Learning objective: ${V.trim()}`:"";I=`You are an expert eLearning instructional designer.
Create a complete ${L}-slide deck about "${C}" in a ${M} tone.${w}${P}

Return ONLY valid JSON, no markdown, in this shape:
{
  "slides": [
    {
      "title": "Concise slide title",
      "subtitle": "Optional one-line subtitle",
      "bullets": ["Point 1", "Point 2", "Point 3"],
      "callout": "Key takeaway",
      "slideType": "intro|overview|concept|example|summary|callout|general"
    }
  ]
}

Rules:
- Return exactly ${L} slides
- Sequence the deck logically: intro → concept build-up → applied example(s) → summary
- Keep each slide distinct and avoid repeated bullet wording
- Keep bullets concise (3-5 per slide), action-oriented, and specific to "${C}"`}const b=await a(I,{type:"slideDeck",topic:C,slideCount:L,tone:M});if(!b)return null;try{const w=b.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim(),P=JSON.parse(w),D=Array.isArray(P)?P:P==null?void 0:P.slides;return Array.isArray(D)?D.slice(0,L).map((E,R)=>{const S=Array.isArray(E==null?void 0:E.bullets)?E.bullets:typeof(E==null?void 0:E.bullets)=="string"?E.bullets.split(`
`):[];return{title:String((E==null?void 0:E.title)||`${C||"Slide"} ${R+1}`).trim(),subtitle:String((E==null?void 0:E.subtitle)||"").trim(),bullets:S.map(J=>String(J||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean),callout:String((E==null?void 0:E.callout)||"").trim(),slideType:String((E==null?void 0:E.slideType)||"general").trim()}}):null}catch{return null}}async function p(C,x=4,{difficulty:A="intermediate",questionType:V="multiple-choice",objective:M="",customPrompt:F=""}={}){if(F.trim()){const D=await a(F.trim(),{type:"quiz",topic:C,count:x,difficulty:A,questionType:V});if(!D)return null;try{return JSON.parse(D.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}const L=V==="true-false"?'Each question must be True/False with exactly 2 options: ["True", "False"]':V==="mixed"?'Mix multiple-choice (4 options) and True/False (2 options: ["True", "False"]) questions roughly 50/50':"Each question must be multiple-choice with exactly 4 distinct options",I={beginner:"Use simple vocabulary. Focus on foundational recall and recognition.",intermediate:"Require some understanding and application of concepts.",advanced:"Challenge deeper understanding, analysis, and critical thinking."}[A]||"",b=M?`
Learning objective: ${M}`:"",w=`You are an expert eLearning instructional designer.
Create exactly ${x} quiz questions about: "${C}".${b}

Difficulty: ${A.charAt(0).toUpperCase()+A.slice(1)} — ${I}
Question type: ${L}

Return ONLY a valid JSON array, no markdown, no extra text:
[
  {
    "question": "Clear, unambiguous question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Brief explanation of why the answer is correct",
    "difficulty": "${A}",
    "type": "multiple-choice"
  }
]

Ensure:
- All questions are unique and clearly worded
- Wrong options (distractors) are plausible but clearly incorrect
- Explanations are educational and concise
- correctIndex is 0-based index into the options array`,P=await a(w,{type:"quiz",topic:C,count:x,difficulty:A,questionType:V});if(!P)return null;try{return JSON.parse(P.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}async function g(C,x="professional"){const A=`Write a ${x} voiceover script for a slide with this content: "${C}".
Keep it concise (30-60 seconds when read aloud). Write naturally as if speaking.`;return a(A,{type:"voiceover",style:x})}async function v(C,x){const A=`Translate the following eLearning content to ${x}. Preserve formatting and educational tone:

${C}`;return a(A,{type:"translation",targetLanguage:x})}async function m(C,x="Make it clearer and more engaging"){const A=`${x}:

${C}`;return a(A,{type:"improve"})}async function _(C){const x=`Generate a detailed image prompt for a corporate or educational slide about: "${C}". 
Make it suitable for AI image generation (like Midjourney or DALL-E). Ensure the prompt specifically asks for a "highly detailed photorealistic image, realistic lighting, photographic style, no text". Be specific about composition and relevance.`;return a(x,{type:"imagePrompt",topic:C})}function u(C,x){const A=x.topic||"this topic",V=Math.max(1,Math.min(20,Number(x.slideCount)||5)),M={slideContent:JSON.stringify({title:x.topic||"Sample Slide",subtitle:`An introduction to ${A}`,bullets:[`${x.topic?x.topic+" covers":"This topic covers"} foundational principles that drive real-world applications`,"Understanding the core components helps in diagnosing and solving complex problems effectively","Best practices ensure safety, efficiency, and long-term performance in this domain"],callout:`Master the fundamentals of ${x.topic||"this subject"} to build a strong professional foundation`,design:{layout:"split",titleAlign:"left",bulletStyle:"check",emphasis:"balanced"}}),slideDeck:JSON.stringify({slides:Array.from({length:V},(F,L)=>{const I=L===0,b=L===V-1;return{title:I?`${A}: Introduction`:b?`${A}: Key Takeaways`:`${A}: Core Idea ${L}`,subtitle:I?`Why ${A} matters`:b?"Summary and next steps":"Building practical understanding",bullets:[`Understand a concrete aspect of ${A}`,"Apply this concept in a practical context","Connect this idea to real-world outcomes"],callout:b?`Use these principles of ${A} to guide decisions and actions.`:"Focus on clarity and practical application.",slideType:I?"intro":b?"summary":"concept"}})}),quiz:JSON.stringify([{question:"Which of the following best describes the core concept of this topic?",options:["It focuses on foundational principles","It applies advanced methodologies","It combines theory with practice","It relies solely on memorization"],correctIndex:2,explanation:"Combining theory with practice is the most effective approach for deep understanding.",difficulty:"intermediate",type:"multiple-choice"},{question:"A learner who understands this topic can apply it to real-world problems.",options:["True","False"],correctIndex:0,explanation:"Understanding foundational concepts enables practical application in real-world scenarios.",difficulty:"intermediate",type:"true-false"},{question:"What is the first step when approaching this subject?",options:["Skip to advanced material","Define key terminology","Practice without understanding","Avoid structured learning"],correctIndex:1,explanation:"Defining key terminology builds the vocabulary needed for deeper comprehension.",difficulty:"beginner",type:"multiple-choice"},{question:"Which strategy leads to the best long-term retention of this material?",options:["Cramming the night before","Spaced repetition and active recall","Reading passively multiple times","Watching videos only"],correctIndex:1,explanation:"Spaced repetition and active recall are scientifically proven to maximize long-term retention.",difficulty:"intermediate",type:"multiple-choice"}]),voiceover:"Welcome to this lesson. In this section, we'll explore the key concepts that will help you understand the topic better. Pay close attention to the main points as we go through them one by one.",translation:`[Translated text for: ${A}]

Las mejores prÃ¡cticas garantizan la seguridad, la eficiencia y el rendimiento a largo plazo en este dominio.`,improve:`Here is a clearer, more engaging version of your text:

Understanding the core components helps you diagnose and solve complex problems much more effectively.`,imagePrompt:`A high-quality, professional, photorealistic image about: "${A}". 8k resolution, highly detailed, realistic lighting, photographic style, suitable for a corporate presentation.`,default:"This is a sample AI-generated response. Configure your OpenAI API key in the AI settings panel to get real responses."};return n.value=!0,new Promise(F=>{setTimeout(()=>{n.value=!1;const L=x.type||"default";F(M[L]||M.default)},1500)})}return{apiKey:t,apiProvider:e,isGenerating:n,lastError:r,generationHistory:i,setApiKey:s,setProvider:o,generate:a,generateSlideContent:l,generateSlideDeck:h,generateQuiz:p,generateVoiceoverScript:g,generateTranslation:v,improveText:m,generateImagePrompt:_}}),q3={class:"ai-panel"},H3={class:"ai-mode-tabs"},W3=["onClick"],G3={class:"ai-content"},K3={class:"form-group"},J3={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},Q3={key:0,class:"form-group"},Y3={key:1,class:"form-group"},X3={class:"form-group"},Z3={class:"form-group"},eO={class:"prompt-label-row"},tO={key:1,class:"prompt-auto-badge"},nO={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},rO=["disabled"],iO={key:0,class:"spinner"},sO={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},oO={key:3,class:"creative-options-wrap"},aO={class:"result-header"},lO={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},cO={key:1,class:"creative-options-list"},uO={class:"creative-title"},dO={class:"creative-angle"},hO=["onClick"],fO={class:"form-group"},pO={class:"quiz-config-row"},gO={class:"form-group",style:{flex:"1"}},mO={class:"form-group",style:{flex:"1"}},vO={class:"form-group"},yO={class:"qtype-btns"},_O=["onClick"],bO={class:"qtype-icon"},wO={class:"form-group"},EO={class:"form-group"},IO={class:"prompt-label-row"},CO={key:1,class:"prompt-auto-badge"},xO=["disabled"],kO={key:0,class:"spinner"},TO={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},SO={key:0,class:"quiz-results"},AO={class:"quiz-results-header"},RO={class:"form-label"},PO={class:"quiz-header-actions"},OO={class:"regen-row"},NO=["disabled"],DO={key:0,class:"spinner spinner-sm"},MO={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},LO=["disabled"],VO={class:"quiz-card-header"},$O={class:"quiz-card-check"},FO=["onUpdate:modelValue"],BO={class:"q-num"},UO={class:"q-badges"},zO={class:"badge type-badge"},jO={class:"q-question"},qO={class:"q-options"},HO={class:"q-option-letter"},WO={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},GO={key:0,class:"q-explanation"},KO=["disabled"],JO={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},QO=["disabled"],YO={key:0,class:"spinner"},XO={key:0,class:"selected-text-preview"},ZO={class:"text-preview"},eN={key:1,class:"ai-hint"},tN={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},nN=["disabled"],rN={key:0,class:"spinner"},iN={key:0,class:"selected-text-preview"},sN={class:"text-preview"},oN={key:1,class:"ai-hint"},aN={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},lN=["disabled"],cN={key:0,class:"spinner"},uN={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},dN={class:"result-header"},hN={class:"result-actions"},fN=["disabled"],pN={class:"textarea result-display"},gN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},mN=["disabled"],vN={key:0,class:"spinner"},yN={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},_N={class:"textarea result-display",style:{color:"var(--color-primary)"}},bN={key:6,class:"ai-settings"},wN={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},EN=["value"],IN={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},CN=["value"],xN={key:0,class:"demo-notice"},kN={key:7,class:"result-area"},TN={class:"result-header"},SN={class:"result-pre"},AN={class:"result-actions"},RN=["disabled"],PN={key:8,class:"ai-error"},ON={__name:"AIAssistant",setup(t){const e=j3(),n=vn(),r=dn(),i=pe("generate"),s=pe(""),o=pe(""),a=pe("");Kt(i,()=>{a.value=""});const l=pe(4),h=pe("general"),p=pe("Spanish"),g=pe(""),v=pe(""),m=pe(""),_=pe(!1),u=pe("single"),C=pe(5),x=pe("slide"),A=pe([]),V=pe(""),M=xe(()=>{const j=o.value.trim()||"[your topic]";if(u.value==="deck"){let Y=`Create a complete ${C.value}-slide learning deck about "${j}".`;return v.value.trim()&&(Y+=`
Additional context: ${v.value.trim()}`),Y+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,Y+=`
Make each slide distinct, logically sequenced, and specific to "${j}".`,Y}let W=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[h.value]||"educational slide"} about "${j}".`;return v.value.trim()&&(W+=`
Additional context: ${v.value.trim()}`),W+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${j}" — no generic placeholders.`,W});Kt(M,j=>{_.value||(m.value=j)},{immediate:!0});function F(){m.value=M.value,_.value=!1}const L=pe(""),I=pe("intermediate"),b=pe("multiple-choice"),w=pe(""),P=pe([]),D=pe(""),E=pe(!1),R=xe(()=>{const j=L.value.trim()||"[your topic]",T={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},W={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let Y=`Generate ${l.value} ${T[I.value]} ${W[b.value]} quiz questions about "${j}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return w.value.trim()&&(Y+=`
Learning objective: ${w.value.trim()}`),Y});Kt(R,j=>{E.value||(D.value=j)},{immediate:!0});function S(){D.value=R.value,E.value=!1}const J=xe(()=>r.getProject(n.projectId)),ae=xe(()=>{var j,T;return(T=(j=J.value)==null?void 0:j.slides)==null?void 0:T.find(W=>W.id===n.currentSlideId)}),z=xe(()=>{var j,T;return n.selectedElementId?(T=(j=ae.value)==null?void 0:j.elements)==null?void 0:T.find(W=>W.id===n.selectedElementId):null});async function de(){if(!o.value.trim()&&!m.value.trim())return;if(a.value="",A.value=[],V.value="",u.value==="deck"){const T=await e.generateSlideDeck(o.value,C.value,{objective:v.value,customPrompt:m.value});if(T!=null&&T.length){const W=T.map(Y=>se(Y));a.value=JSON.stringify({slides:W},null,2),we(W,{replaceGenerated:!0})}return}if(x.value==="options"){await _e();return}const j=await e.generateSlideContent(o.value,h.value,v.value,m.value);if(j){const T=se(j);a.value=JSON.stringify(T,null,2),ve(T,{replaceGenerated:!0})}}function se(j){const T=j&&typeof j=="object"?j:{},Y=(Array.isArray(T.bullets)?T.bullets:typeof T.bullets=="string"?T.bullets.split(`
`):[]).map(ne=>String(ne||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(T.title||o.value||"Untitled Slide").trim(),subtitle:String(T.subtitle||"").trim(),bullets:Y,callout:String(T.callout||"").trim()}}function Ie(j,T){var ne,le,me;const W=(le=(ne=r.getProject(j))==null?void 0:ne.slides)==null?void 0:le.find(Se=>Se.id===T);if(!((me=W==null?void 0:W.elements)!=null&&me.length))return;W.elements.filter(Se=>{var oe;return((oe=Se.meta)==null?void 0:oe.source)==="ai-content"}).map(Se=>Se.id).forEach(Se=>{r.deleteElement(j,T,Se)})}function te(j,T,W,Y){return r.addElement(j,T,W,{...Y,meta:{...Y.meta||{},source:"ai-content"}})}function Z(j,T,W,{replaceGenerated:Y=!1}={}){var ne;if(!(!j||!T)){if(Y&&Ie(j,T),W.title&&(r.updateSlide(j,T,{title:W.title}),te(j,T,"heading",{x:60,y:40,width:840,height:80,content:{text:W.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),W.subtitle&&te(j,T,"text",{x:60,y:130,width:840,height:50,content:{text:W.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(ne=W.bullets)!=null&&ne.length){const le=W.bullets.map(me=>`• ${me}`).join(`
`);te(j,T,"text",{x:60,y:W.subtitle?200:150,width:840,height:200,content:{text:le,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}W.callout&&(te(j,T,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),te(j,T,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${W.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function we(j,{replaceGenerated:T=!1}={}){if(!n.currentSlideId)return;const W=n.projectId;if(!W||!Array.isArray(j)||!j.length)return;j.map(ne=>se(ne)).forEach(ne=>{const le=r.addSlide(W);le&&Z(W,le.id,ne,{replaceGenerated:T})})}function ve(j=null,{replaceGenerated:T=!1}={}){if(!n.currentSlideId)return;let W=j;if(!W){if(!a.value)return;try{W=JSON.parse(a.value)}catch(me){console.warn("Could not parse AI content:",me);return}}const Y=se(W),ne=n.projectId,le=n.currentSlideId;!ne||!le||Z(ne,le,Y,{replaceGenerated:T})}function X(){if(a.value){if(u.value==="deck"){try{const j=JSON.parse(a.value),T=Array.isArray(j)?j:j==null?void 0:j.slides;if(!Array.isArray(T)||!T.length)return;we(T,{replaceGenerated:!0})}catch{return}return}ve()}}async function _e(){const j=o.value.trim()||"[your topic]",T=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${h.value}" slide about "${j}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,W=await e.generate(T,{type:"creativeOptions",topic:j,slideType:h.value});if(W)try{const Y=JSON.parse(W.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(Y))throw new Error("Options must be an array");A.value=Y.slice(0,3).map((ne,le)=>({title:String((ne==null?void 0:ne.title)||`Option ${le+1}`),angle:String((ne==null?void 0:ne.angle)||""),prompt:String((ne==null?void 0:ne.prompt)||"")})).filter(ne=>ne.prompt.trim()),A.value.length||(V.value="No usable creative options were returned. Try generating again.")}catch{V.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function re(j){j!=null&&j.prompt&&(m.value=j.prompt,_.value=!0,x.value="slide",await de())}async function ue(j=!1){if(!L.value.trim()&&!D.value.trim())return;j||(P.value=[]);const T=await e.generateQuiz(L.value,l.value,{difficulty:I.value,questionType:b.value,objective:w.value,customPrompt:D.value});if(T)if(j){const W=new Set(P.value.map(ne=>ne.question)),Y=T.filter(ne=>!W.has(ne.question)).map(ne=>({...ne,_selected:!0}));P.value=[...P.value,...Y]}else P.value=T.map(W=>({...W,_selected:!0}))}async function he(){const j=P.value.filter(W=>W._selected);if(!j.length)return;const T=n.projectId;j.forEach((W,Y)=>{const ne=r.addSlide(T);ne&&(r.addElement(T,ne.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:W.question,options:W.options,correctIndex:W.correctIndex,explanation:W.explanation||""}}),r.updateSlide(T,ne.id,{title:`Q${Y+1}: ${W.question.slice(0,40)}…`}))}),P.value=[]}function ye(j){P.value.forEach(T=>T._selected=j)}async function ke(){if(!g.value.trim())return;const j=await e.generateVoiceoverScript(g.value);j&&(a.value=j)}async function q(){var W,Y;const j=(Y=(W=z.value)==null?void 0:W.content)==null?void 0:Y.text;if(!j)return;const T=await e.generateTranslation(j,p.value);T&&(a.value=T)}async function B(){!a.value||!z.value||r.updateElement(n.projectId,n.currentSlideId,z.value.id,{content:{...z.value.content,text:a.value}})}const f=pe(""),G=pe(!1);async function $(){if(f.value.trim()){G.value=!0,a.value="Optimizing prompt...";try{let j=f.value;const T=await e.generateImagePrompt(f.value);T&&(j=T.replace(/```(json)?\n?/g,"").trim()),a.value="Painting image... this takes about 10-20 seconds. Please wait.";const W=Math.floor(Math.random()*1e6),Y=`https://image.pollinations.ai/prompt/${encodeURIComponent(j)}?width=600&height=400&nologo=true&seed=${W}`;await new Promise((ne,le)=>{const me=new Image;me.onload=ne,me.onerror=le,me.src=Y}),r.addElement(n.projectId,n.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:Y,objectFit:"cover"}}),a.value="Image added to slide!"}catch{a.value="Failed to generate image. Try a different prompt."}finally{G.value=!1}}}async function O(){var T,W;if(!((W=(T=z.value)==null?void 0:T.content)!=null&&W.text))return;const j=await e.improveText(z.value.content.text,s.value||"Make it clearer and more engaging");j&&(a.value=j)}async function N(){!a.value||!z.value||r.updateElement(n.projectId,n.currentSlideId,z.value.id,{content:{...z.value.content,text:a.value}})}async function H(){if(!s.value.trim())return;const j=await e.generate(s.value);j&&(a.value=j)}return(j,T)=>{var W,Y,ne,le,me,Se;return K(),Q("div",q3,[d("div",H3,[(K(),Q(Pe,null,Ke([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],oe=>d("button",{key:oe.id,class:Me(["ai-mode-btn",i.value===oe.id&&"active"]),onClick:$e=>i.value=oe.id},fe(oe.label),11,W3)),64))]),d("div",G3,[i.value==="generate"?(K(),Q(Pe,{key:0},[d("div",K3,[T[34]||(T[34]=d("label",{class:"form-label"},[Ae("Topic / Subject "),d("span",{class:"required"},"*")],-1)),Ye(d("input",{"onUpdate:modelValue":T[0]||(T[0]=oe=>o.value=oe),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:Hc(de,["enter"])},null,544),[[ht,o.value]])]),d("div",J3,[d("button",{class:Me(["output-mode-btn",u.value==="single"&&"active"]),onClick:T[1]||(T[1]=oe=>u.value="single")},"Single Slide",2),d("button",{class:Me(["output-mode-btn",u.value==="deck"&&"active"]),onClick:T[2]||(T[2]=oe=>u.value="deck")},"Slide Deck",2)]),u.value==="single"?(K(),Q("div",Q3,[T[36]||(T[36]=d("label",{class:"form-label"},"Slide Type",-1)),Ye(d("select",{"onUpdate:modelValue":T[3]||(T[3]=oe=>h.value=oe),class:"select"},[...T[35]||(T[35]=[Zt('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[ia,h.value]])])):(K(),Q("div",Y3,[T[37]||(T[37]=d("label",{class:"form-label"},"Number of Slides",-1)),Ye(d("input",{"onUpdate:modelValue":T[4]||(T[4]=oe=>C.value=oe),class:"input",type:"number",min:"1",max:"20"},null,512),[[ht,C.value,void 0,{number:!0}]]),T[38]||(T[38]=d("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),d("div",X3,[T[39]||(T[39]=d("label",{class:"form-label"},[Ae("Description "),d("span",{class:"optional"},"(optional)")],-1)),Ye(d("textarea",{"onUpdate:modelValue":T[5]||(T[5]=oe=>v.value=oe),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[ht,v.value]])]),d("div",Z3,[d("div",eO,[T[41]||(T[41]=d("label",{class:"form-label"},"AI Prompt",-1)),_.value?(K(),Q("button",{key:0,class:"prompt-reset-btn",onClick:F,title:"Reset to auto-generated prompt"},[...T[40]||(T[40]=[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Ae(" Reset ",-1)])])):(K(),Q("span",tO,"auto"))]),Ye(d("textarea",{"onUpdate:modelValue":T[6]||(T[6]=oe=>m.value=oe),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:T[7]||(T[7]=oe=>_.value=!0),spellcheck:"false"},null,544),[[ht,m.value]]),T[42]||(T[42]=d("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),u.value==="single"?(K(),Q("div",nO,[d("button",{class:Me(["output-mode-btn",x.value==="slide"&&"active"]),onClick:T[8]||(T[8]=oe=>x.value="slide")},"Show on Slide",2),d("button",{class:Me(["output-mode-btn",x.value==="options"&&"active"]),onClick:T[9]||(T[9]=oe=>x.value="options")},"Creative Options",2)])):Te("",!0),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ee(e).isGenerating||!o.value.trim()&&!m.value.trim()||u.value==="deck"&&(!C.value||C.value<1||C.value>20),onClick:de},[Ee(e).isGenerating?(K(),Q("span",iO)):(K(),Q("svg",sO,[...T[43]||(T[43]=[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Ae(" "+fe(Ee(e).isGenerating?"Generating…":u.value==="deck"?a.value?`Regenerate ${C.value} Slides`:`Generate ${C.value} Slides`:x.value==="slide"?a.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,rO),u.value==="single"&&x.value==="options"&&(A.value.length||V.value)?(K(),Q("div",oO,[d("div",aO,[T[44]||(T[44]=d("span",{class:"form-label"},"Creative Options",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:T[10]||(T[10]=oe=>{A.value=[],V.value=""})},"Clear")]),V.value?(K(),Q("div",lO,[T[45]||(T[45]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Ae(" "+fe(V.value),1)])):(K(),Q("div",cO,[(K(!0),Q(Pe,null,Ke(A.value,(oe,$e)=>(K(),Q("article",{key:$e,class:"creative-option-card"},[d("h4",uO,fe(oe.title),1),d("p",dO,fe(oe.angle),1),d("button",{class:"btn btn-secondary btn-sm",onClick:Je=>re(oe)},"Use This Option",8,hO)]))),128))]))])):Te("",!0)],64)):i.value==="quiz"?(K(),Q(Pe,{key:1},[d("div",fO,[T[46]||(T[46]=d("label",{class:"form-label"},[Ae("Quiz Topic "),d("span",{class:"required"},"*")],-1)),Ye(d("input",{"onUpdate:modelValue":T[11]||(T[11]=oe=>L.value=oe),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:Hc(ue,["enter"])},null,544),[[ht,L.value]])]),d("div",pO,[d("div",gO,[T[48]||(T[48]=d("label",{class:"form-label"},"Questions",-1)),Ye(d("select",{"onUpdate:modelValue":T[12]||(T[12]=oe=>l.value=oe),class:"select"},[...T[47]||(T[47]=[d("option",{value:2},"2",-1),d("option",{value:3},"3",-1),d("option",{value:4},"4",-1),d("option",{value:5},"5",-1),d("option",{value:6},"6",-1),d("option",{value:8},"8",-1),d("option",{value:10},"10",-1)])],512),[[ia,l.value,void 0,{number:!0}]])]),d("div",mO,[T[50]||(T[50]=d("label",{class:"form-label"},"Difficulty",-1)),Ye(d("select",{"onUpdate:modelValue":T[13]||(T[13]=oe=>I.value=oe),class:"select"},[...T[49]||(T[49]=[d("option",{value:"beginner"},"Beginner",-1),d("option",{value:"intermediate"},"Intermediate",-1),d("option",{value:"advanced"},"Advanced",-1)])],512),[[ia,I.value]])])]),d("div",vO,[T[51]||(T[51]=d("label",{class:"form-label"},"Question Type",-1)),d("div",yO,[(K(),Q(Pe,null,Ke([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],oe=>d("button",{key:oe.id,class:Me(["qtype-btn",b.value===oe.id&&"active"]),onClick:$e=>b.value=oe.id},[d("span",bO,fe(oe.icon),1),d("span",null,fe(oe.label),1)],10,_O)),64))])]),d("div",wO,[T[52]||(T[52]=d("label",{class:"form-label"},[Ae("Learning Objective "),d("span",{class:"optional"},"(optional)")],-1)),Ye(d("input",{"onUpdate:modelValue":T[14]||(T[14]=oe=>w.value=oe),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[ht,w.value]])]),d("div",EO,[d("div",IO,[T[54]||(T[54]=d("label",{class:"form-label"},"AI Prompt",-1)),E.value?(K(),Q("button",{key:0,class:"prompt-reset-btn",onClick:S,title:"Reset to auto-generated prompt"},[...T[53]||(T[53]=[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Ae(" Reset ",-1)])])):(K(),Q("span",CO,"auto"))]),Ye(d("textarea",{"onUpdate:modelValue":T[15]||(T[15]=oe=>D.value=oe),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:T[16]||(T[16]=oe=>E.value=!0),spellcheck:"false"},null,544),[[ht,D.value]]),T[55]||(T[55]=d("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ee(e).isGenerating||!L.value.trim()&&!D.value.trim(),onClick:T[17]||(T[17]=oe=>ue(!1))},[Ee(e).isGenerating?(K(),Q("span",kO)):(K(),Q("svg",TO,[...T[56]||(T[56]=[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Ae(" "+fe(Ee(e).isGenerating?"Generating…":`Generate ${l.value} Questions`),1)],8,xO),P.value.length?(K(),Q("div",SO,[d("div",AO,[d("span",RO,fe(P.value.length)+" Questions",1),d("div",PO,[d("button",{class:"btn btn-ghost btn-sm",onClick:T[18]||(T[18]=oe=>ye(!0))},"All"),d("button",{class:"btn btn-ghost btn-sm",onClick:T[19]||(T[19]=oe=>ye(!1))},"None"),d("button",{class:"btn btn-ghost btn-sm danger",onClick:T[20]||(T[20]=oe=>P.value=[])},"Clear")])]),d("div",OO,[d("button",{class:"btn btn-secondary regen-btn",disabled:Ee(e).isGenerating,onClick:T[21]||(T[21]=oe=>ue(!1)),title:"Replace all questions with a new set"},[Ee(e).isGenerating?(K(),Q("span",DO)):(K(),Q("svg",MO,[...T[57]||(T[57]=[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),d("path",{d:"M3 3v5h5"},null,-1)])])),T[58]||(T[58]=Ae(" Regenerate ",-1))],8,NO),d("button",{class:"btn btn-ghost regen-btn",disabled:Ee(e).isGenerating,onClick:T[22]||(T[22]=oe=>ue(!0)),title:"Generate more and append to current list"},[...T[59]||(T[59]=[d("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Ae(" Add More ",-1)])],8,LO)]),(K(!0),Q(Pe,null,Ke(P.value,(oe,$e)=>(K(),Q("div",{key:$e,class:Me(["quiz-card",{deselected:!oe._selected}])},[d("div",VO,[d("label",$O,[Ye(d("input",{type:"checkbox","onUpdate:modelValue":Je=>oe._selected=Je},null,8,FO),[[Em,oe._selected]]),d("span",BO,"Q"+fe($e+1),1)]),d("div",UO,[d("span",{class:Me(["badge difficulty-badge",oe.difficulty])},fe(oe.difficulty),3),d("span",zO,fe(oe.type==="true-false"?"T/F":"MCQ"),1)])]),d("p",jO,fe(oe.question),1),d("div",qO,[(K(!0),Q(Pe,null,Ke(oe.options,(Je,We)=>(K(),Q("div",{key:We,class:Me(["q-option",We===oe.correctIndex&&"correct"])},[d("span",HO,fe(["A","B","C","D"][We]),1),d("span",null,fe(Je),1),We===oe.correctIndex?(K(),Q("svg",WO,[...T[60]||(T[60]=[d("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):Te("",!0)],2))),128))]),oe.explanation?(K(),Q("div",GO,[T[61]||(T[61]=d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),Ae(" "+fe(oe.explanation),1)])):Te("",!0)],2))),128)),d("button",{class:"btn btn-primary w-full",disabled:!P.value.filter(oe=>oe._selected).length,onClick:he},[T[62]||(T[62]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),Ae(" Add "+fe(P.value.filter(oe=>oe._selected).length)+" Selected as Quiz Slides ",1)],8,KO)])):Te("",!0)],64)):i.value==="voiceover"?(K(),Q(Pe,{key:2},[d("div",JO,[T[63]||(T[63]=d("label",{class:"form-label"},"Slide Content / Key Points",-1)),Ye(d("textarea",{"onUpdate:modelValue":T[23]||(T[23]=oe=>g.value=oe),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[ht,g.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ee(e).isGenerating,onClick:ke},[Ee(e).isGenerating?(K(),Q("span",YO)):Te("",!0),Ae(" "+fe(Ee(e).isGenerating?"Generating…":"Generate Script"),1)],8,QO)],64)):i.value==="improve"?(K(),Q(Pe,{key:3},[(Y=(W=z.value)==null?void 0:W.content)!=null&&Y.text?(K(),Q("div",XO,[T[64]||(T[64]=d("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),d("div",ZO,fe(z.value.content.text.slice(0,120))+fe(z.value.content.text.length>120?"…":""),1)])):(K(),Q("p",eN,"Select a text element on the canvas to improve it.")),d("div",tN,[T[65]||(T[65]=d("label",{class:"form-label"},"Instruction",-1)),Ye(d("input",{"onUpdate:modelValue":T[24]||(T[24]=oe=>s.value=oe),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[ht,s.value]])]),T[66]||(T[66]=d("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),Ye(d("textarea",{"onUpdate:modelValue":T[25]||(T[25]=oe=>s.value=oe),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[ht,s.value]]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ee(e).isGenerating||!z.value&&!s.value,onClick:T[26]||(T[26]=oe=>z.value?O():H())},[Ee(e).isGenerating?(K(),Q("span",rN)):Te("",!0),Ae(" "+fe(Ee(e).isGenerating?"Processing…":"Generate"),1)],8,nN)],64)):i.value==="translate"?(K(),Q(Pe,{key:4},[(le=(ne=z.value)==null?void 0:ne.content)!=null&&le.text?(K(),Q("div",iN,[T[67]||(T[67]=d("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),d("div",sN,fe(z.value.content.text.slice(0,120))+fe(z.value.content.text.length>120?"…":""),1)])):(K(),Q("p",oN,"Select a text element on the canvas to translate it.")),d("div",aN,[T[69]||(T[69]=d("label",{class:"form-label"},"Target Language",-1)),Ye(d("select",{"onUpdate:modelValue":T[27]||(T[27]=oe=>p.value=oe),class:"select"},[...T[68]||(T[68]=[Zt('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[ia,p.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ee(e).isGenerating||!((Se=(me=z.value)==null?void 0:me.content)!=null&&Se.text),onClick:q},[Ee(e).isGenerating?(K(),Q("span",cN)):Te("",!0),Ae(" "+fe(Ee(e).isGenerating?"Translating…":"Translate Text"),1)],8,lN),a.value?(K(),Q("div",uN,[d("div",dN,[T[70]||(T[70]=d("span",{class:"form-label"},"Translation Result",-1)),d("div",hN,[d("button",{class:"btn btn-ghost btn-sm",onClick:T[28]||(T[28]=oe=>j.navigator.clipboard.writeText(a.value))},"Copy"),d("button",{class:"btn btn-primary btn-sm",onClick:B,disabled:!z.value},"Apply",8,fN)])]),d("div",pN,fe(a.value),1)])):Te("",!0)],64)):i.value==="image"?(K(),Q(Pe,{key:5},[T[73]||(T[73]=d("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),d("div",gN,[T[71]||(T[71]=d("label",{class:"form-label"},"Image Description",-1)),Ye(d("textarea",{"onUpdate:modelValue":T[29]||(T[29]=oe=>f.value=oe),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[ht,f.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:G.value||Ee(e).isGenerating||!f.value,onClick:$},[G.value||Ee(e).isGenerating?(K(),Q("span",vN)):Te("",!0),Ae(" "+fe(G.value||Ee(e).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,mN),a.value?(K(),Q("div",yN,[T[72]||(T[72]=d("div",{class:"result-header"},[d("span",{class:"form-label"},"Status")],-1)),d("div",_N,fe(a.value),1)])):Te("",!0)],64)):i.value==="settings"?(K(),Q("div",bN,[d("div",wN,[T[75]||(T[75]=d("label",{class:"form-label"},"AI Provider",-1)),d("select",{value:Ee(e).apiProvider,class:"select",onChange:T[30]||(T[30]=oe=>Ee(e).setProvider(oe.target.value))},[...T[74]||(T[74]=[d("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),d("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,EN)]),d("div",IN,[T[76]||(T[76]=d("label",{class:"form-label"},"API Key",-1)),d("input",{type:"password",value:Ee(e).apiKey,class:"input",placeholder:"sk-…",onChange:T[31]||(T[31]=oe=>Ee(e).setApiKey(oe.target.value))},null,40,CN),T[77]||(T[77]=d("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),Ee(e).apiKey?Te("",!0):(K(),Q("div",xN,[...T[78]||(T[78]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),Ae(" Running in ",-1),d("strong",null,"demo mode",-1),Ae(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):Te("",!0),a.value&&i.value!=="settings"&&i.value!=="quiz"?(K(),Q("div",kN,[d("div",TN,[T[79]||(T[79]=d("span",{class:"form-label"},"Result",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:T[32]||(T[32]=oe=>a.value="")},"Clear")]),d("pre",SN,fe(a.value),1),d("div",AN,[i.value==="generate"?(K(),Q("button",{key:0,class:"btn btn-primary btn-sm",onClick:X},fe(u.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):Te("",!0),i.value==="generate"?(K(),Q("button",{key:1,class:"btn btn-ghost btn-sm",disabled:Ee(e).isGenerating,onClick:de},[...T[80]||(T[80]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Ae(" Regenerate ",-1)])],8,RN)):Te("",!0),i.value==="improve"&&z.value?(K(),Q("button",{key:2,class:"btn btn-primary btn-sm",onClick:N}," Apply to Element ")):Te("",!0),d("button",{class:"btn btn-secondary btn-sm",onClick:T[33]||(T[33]=oe=>{var $e;return($e=j.navigator.clipboard)==null?void 0:$e.writeText(a.value)})}," Copy ")])])):Te("",!0),Ee(e).lastError?(K(),Q("div",PN,[T[81]||(T[81]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Ae(" "+fe(Ee(e).lastError),1)])):Te("",!0)])])}}},NN=Rt(ON,[["__scopeId","data-v-697ec3ea"]]),DN={class:"theme-manager"},MN={class:"panel-section"},LN={class:"presets-grid"},VN=["title","onClick"],$N={class:"preset-preview"},FN={class:"preset-name"},BN={class:"panel-section"},UN={class:"theme-fields"},zN={class:"form-label"},jN={class:"color-row"},qN=["value","onInput"],HN=["value","onChange"],WN={class:"panel-section"},GN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},KN=["value"],JN=["value"],QN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},YN=["value"],XN=["value"],ZN={class:"form-group"},eD=["value"],tD={class:"panel-section"},nD={key:0,class:"apply-message success"},rD={key:1,class:"apply-message error"},iD={__name:"ThemeManager",setup(t){const e=vn(),n=dn(),r=xe(()=>n.getProject(e.projectId)),i=xe(()=>{var m;return((m=r.value)==null?void 0:m.theme)||{}}),s=pe(""),o=pe("");function a(m){n.updateProject(e.projectId,{theme:{...i.value,...m}})}const l=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],h=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function p(m){a(m)}function g(m,_){const u=m.content||{};return m.type==="text"?{content:{...u,fontFamily:_.fontFamily||u.fontFamily,color:_.textColor||u.color}}:m.type==="heading"?{content:{...u,fontFamily:_.headingFont||_.fontFamily||u.fontFamily,color:_.textColor||u.color}}:m.type==="shape"?{content:{...u,fillColor:_.secondaryColor||u.fillColor}}:m.type==="hotspot"?{content:{...u,bgColor:_.primaryColor||u.bgColor}}:m.type==="button"?{content:{...u,bgColor:_.primaryColor||u.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:_.fontFamily||u.fontFamily}}:m.type==="quiz"?{content:{...u,cardBgColor:_.bgColor||u.cardBgColor,questionColor:_.textColor||u.questionColor,accentColor:_.primaryColor||u.accentColor}}:null}function v(){s.value="",o.value="";const m=e.projectId,_=r.value,u=i.value;if(!m||!_){o.value="No active project to apply theme.";return}const C=_.slides||[];let x=0;C.forEach(A=>{(A.backgroundType||"color")==="color"&&n.updateSlide(m,A.id,{backgroundType:"color",background:u.bgColor||A.background||"#ffffff"}),(A.elements||[]).forEach(V=>{const M=g(V,u);M&&(n.updateElement(m,A.id,V.id,M),x+=1)})}),s.value=`Applied theme to ${C.length} slide${C.length===1?"":"s"} and ${x} element${x===1?"":"s"}.`}return(m,_)=>(K(),Q("div",DN,[d("div",MN,[_[3]||(_[3]=d("div",{class:"panel-title"},"Preset Themes",-1)),d("div",LN,[(K(),Q(Pe,null,Ke(l,u=>d("div",{key:u.name,class:"preset-card",title:u.name,onClick:C=>p(u)},[d("div",$N,[d("div",{class:"pp-header",style:Le({background:u.primaryColor})},null,4),d("div",{class:"pp-body",style:Le({background:u.bgColor})},[d("div",{class:"pp-line",style:Le({background:u.textColor,opacity:.7})},null,4),d("div",{class:"pp-line",style:Le({background:u.textColor,opacity:.4,width:"60%"})},null,4)],4),d("div",{class:"pp-accent",style:Le({background:u.secondaryColor})},null,4)]),d("span",FN,fe(u.name),1)],8,VN)),64))])]),d("div",BN,[_[4]||(_[4]=d("div",{class:"panel-title"},"Colors",-1)),d("div",UN,[(K(),Q(Pe,null,Ke({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(u,C)=>d("div",{class:"theme-field",key:C},[d("label",zN,fe(u),1),d("div",jN,[d("input",{type:"color",value:i.value[C]||"#ffffff",class:"color-input-native",onInput:x=>a({[C]:x.target.value})},null,40,qN),d("input",{value:i.value[C]||"",class:"input",onChange:x=>a({[C]:x.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,HN)])])),64))])]),d("div",WN,[_[8]||(_[8]=d("div",{class:"panel-title"},"Typography",-1)),d("div",GN,[_[5]||(_[5]=d("label",{class:"form-label"},"Heading Font",-1)),d("select",{value:i.value.headingFont||"Inter, sans-serif",class:"select",onChange:_[0]||(_[0]=u=>a({headingFont:u.target.value}))},[(K(),Q(Pe,null,Ke(h,u=>d("option",{key:u.value,value:u.value},fe(u.label),9,JN)),64))],40,KN)]),d("div",QN,[_[6]||(_[6]=d("label",{class:"form-label"},"Body Font",-1)),d("select",{value:i.value.fontFamily||"Inter, sans-serif",class:"select",onChange:_[1]||(_[1]=u=>a({fontFamily:u.target.value}))},[(K(),Q(Pe,null,Ke(h,u=>d("option",{key:u.value,value:u.value},fe(u.label),9,XN)),64))],40,YN)]),d("div",ZN,[_[7]||(_[7]=d("label",{class:"form-label"},"Base Font Size",-1)),d("input",{type:"number",min:"12",max:"24",value:i.value.fontSize||16,class:"input",onChange:_[2]||(_[2]=u=>a({fontSize:+u.target.value}))},null,40,eD)])]),d("div",tD,[_[9]||(_[9]=d("div",{class:"panel-title"},"Preview",-1)),d("div",{class:"theme-preview",style:Le({background:i.value.bgColor||"#fff",fontFamily:i.value.fontFamily||"Inter, sans-serif"})},[d("div",{class:"tp-heading",style:Le({color:i.value.textColor,fontFamily:i.value.headingFont||i.value.fontFamily})}," Heading Text ",4),d("div",{class:"tp-body",style:Le({color:i.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),d("div",{class:"tp-btn",style:Le({background:i.value.primaryColor})},"Button",4),d("div",{class:"tp-badge",style:Le({background:i.value.secondaryColor})},"Badge",4)],4),d("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:v}," Apply Theme to Slides "),s.value?(K(),Q("p",nD,fe(s.value),1)):Te("",!0),o.value?(K(),Q("p",rD,fe(o.value),1)):Te("",!0)])]))}},sD=Rt(iD,[["__scopeId","data-v-dd457d78"]]);var pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oD(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ga(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var h1={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(t,e){(function(n){t.exports=n()})(function(){return function n(r,i,s){function o(h,p){if(!i[h]){if(!r[h]){var g=typeof ga=="function"&&ga;if(!p&&g)return g(h,!0);if(a)return a(h,!0);var v=new Error("Cannot find module '"+h+"'");throw v.code="MODULE_NOT_FOUND",v}var m=i[h]={exports:{}};r[h][0].call(m.exports,function(_){var u=r[h][1][_];return o(u||_)},m,m.exports,n,r,i,s)}return i[h].exports}for(var a=typeof ga=="function"&&ga,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(n,r,i){var s=n("./utils"),o=n("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var h,p,g,v,m,_,u,C=[],x=0,A=l.length,V=A,M=s.getTypeOf(l)!=="string";x<l.length;)V=A-x,g=M?(h=l[x++],p=x<A?l[x++]:0,x<A?l[x++]:0):(h=l.charCodeAt(x++),p=x<A?l.charCodeAt(x++):0,x<A?l.charCodeAt(x++):0),v=h>>2,m=(3&h)<<4|p>>4,_=1<V?(15&p)<<2|g>>6:64,u=2<V?63&g:64,C.push(a.charAt(v)+a.charAt(m)+a.charAt(_)+a.charAt(u));return C.join("")},i.decode=function(l){var h,p,g,v,m,_,u=0,C=0,x="data:";if(l.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");var A,V=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&V--,l.charAt(l.length-2)===a.charAt(64)&&V--,V%1!=0)throw new Error("Invalid base64 input, bad content length.");for(A=o.uint8array?new Uint8Array(0|V):new Array(0|V);u<l.length;)h=a.indexOf(l.charAt(u++))<<2|(v=a.indexOf(l.charAt(u++)))>>4,p=(15&v)<<4|(m=a.indexOf(l.charAt(u++)))>>2,g=(3&m)<<6|(_=a.indexOf(l.charAt(u++))),A[C++]=h,m!==64&&(A[C++]=p),_!==64&&(A[C++]=g);return A}},{"./support":30,"./utils":32}],2:[function(n,r,i){var s=n("./external"),o=n("./stream/DataWorker"),a=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function h(p,g,v,m,_){this.compressedSize=p,this.uncompressedSize=g,this.crc32=v,this.compression=m,this.compressedContent=_}h.prototype={getContentWorker:function(){var p=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),g=this;return p.on("end",function(){if(this.streamInfo.data_length!==g.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(p,g,v){return p.pipe(new a).pipe(new l("uncompressedSize")).pipe(g.compressWorker(v)).pipe(new l("compressedSize")).withStreamInfo("compression",g)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var s=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var s=n("./utils"),o=function(){for(var a,l=[],h=0;h<256;h++){a=h;for(var p=0;p<8;p++)a=1&a?3988292384^a>>>1:a>>>1;l[h]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(h,p,g,v){var m=o,_=v+g;h^=-1;for(var u=v;u<_;u++)h=h>>>8^m[255&(h^p[u])];return-1^h}(0|l,a,a.length,0):function(h,p,g,v){var m=o,_=v+g;h^=-1;for(var u=v;u<_;u++)h=h>>>8^m[255&(h^p.charCodeAt(u))];return-1^h}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var s=null;s=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:s}},{lie:37}],7:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=n("pako"),a=n("./utils"),l=n("./stream/GenericWorker"),h=s?"uint8array":"array";function p(g,v){l.call(this,"FlateWorker/"+g),this._pako=null,this._pakoAction=g,this._pakoOptions=v,this.meta={}}i.magic="\b\0",a.inherits(p,l),p.prototype.processChunk=function(g){this.meta=g.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,g.data),!1)},p.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var g=this;this._pako.onData=function(v){g.push({data:v,meta:g.meta})}},i.compressWorker=function(g){return new p("Deflate",g)},i.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function s(m,_){var u,C="";for(u=0;u<_;u++)C+=String.fromCharCode(255&m),m>>>=8;return C}function o(m,_,u,C,x,A){var V,M,F=m.file,L=m.compression,I=A!==h.utf8encode,b=a.transformTo("string",A(F.name)),w=a.transformTo("string",h.utf8encode(F.name)),P=F.comment,D=a.transformTo("string",A(P)),E=a.transformTo("string",h.utf8encode(P)),R=w.length!==F.name.length,S=E.length!==P.length,J="",ae="",z="",de=F.dir,se=F.date,Ie={crc32:0,compressedSize:0,uncompressedSize:0};_&&!u||(Ie.crc32=m.crc32,Ie.compressedSize=m.compressedSize,Ie.uncompressedSize=m.uncompressedSize);var te=0;_&&(te|=8),I||!R&&!S||(te|=2048);var Z=0,we=0;de&&(Z|=16),x==="UNIX"?(we=798,Z|=function(X,_e){var re=X;return X||(re=_e?16893:33204),(65535&re)<<16}(F.unixPermissions,de)):(we=20,Z|=function(X){return 63&(X||0)}(F.dosPermissions)),V=se.getUTCHours(),V<<=6,V|=se.getUTCMinutes(),V<<=5,V|=se.getUTCSeconds()/2,M=se.getUTCFullYear()-1980,M<<=4,M|=se.getUTCMonth()+1,M<<=5,M|=se.getUTCDate(),R&&(ae=s(1,1)+s(p(b),4)+w,J+="up"+s(ae.length,2)+ae),S&&(z=s(1,1)+s(p(D),4)+E,J+="uc"+s(z.length,2)+z);var ve="";return ve+=`
\0`,ve+=s(te,2),ve+=L.magic,ve+=s(V,2),ve+=s(M,2),ve+=s(Ie.crc32,4),ve+=s(Ie.compressedSize,4),ve+=s(Ie.uncompressedSize,4),ve+=s(b.length,2),ve+=s(J.length,2),{fileRecord:g.LOCAL_FILE_HEADER+ve+b+J,dirRecord:g.CENTRAL_FILE_HEADER+s(we,2)+ve+s(D.length,2)+"\0\0\0\0"+s(Z,4)+s(C,4)+b+J+D}}var a=n("../utils"),l=n("../stream/GenericWorker"),h=n("../utf8"),p=n("../crc32"),g=n("../signature");function v(m,_,u,C){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=u,this.encodeFileName=C,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(v,l),v.prototype.push=function(m){var _=m.meta.percent||0,u=this.entriesCount,C=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,l.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:u?(_+100*(u-C-1))/u:100}}))},v.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var _=this.streamFiles&&!m.file.dir;if(_){var u=o(m,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(m){this.accumulate=!1;var _=this.streamFiles&&!m.file.dir,u=o(m,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),_)this.push({data:function(C){return g.DATA_DESCRIPTOR+s(C.crc32,4)+s(C.compressedSize,4)+s(C.uncompressedSize,4)}(m),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var m=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var u=this.bytesWritten-m,C=function(x,A,V,M,F){var L=a.transformTo("string",F(M));return g.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(x,2)+s(x,2)+s(A,4)+s(V,4)+s(L.length,2)+L}(this.dirRecords.length,u,m,this.zipComment,this.encodeFileName);this.push({data:C,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(m){this._sources.push(m);var _=this;return m.on("data",function(u){_.processChunk(u)}),m.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),m.on("error",function(u){_.error(u)}),this},v.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(m){var _=this._sources;if(!l.prototype.error.call(this,m))return!1;for(var u=0;u<_.length;u++)try{_[u].error(m)}catch{}return!0},v.prototype.lock=function(){l.prototype.lock.call(this);for(var m=this._sources,_=0;_<m.length;_++)m[_].lock()},r.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var s=n("../compressions"),o=n("./ZipFileWorker");i.generateWorker=function(a,l,h){var p=new o(l.streamFiles,h,l.platform,l.encodeFileName),g=0;try{a.forEach(function(v,m){g++;var _=function(A,V){var M=A||V,F=s[M];if(!F)throw new Error(M+" is not a valid compression method !");return F}(m.options.compression,l.compression),u=m.options.compressionOptions||l.compressionOptions||{},C=m.dir,x=m.date;m._compressWorker(_,u).withStreamInfo("file",{name:v,dir:C,date:x,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(p)}),p.entriesCount=g}catch(v){p.error(v)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=n("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var s=n("./utils"),o=n("./external"),a=n("./utf8"),l=n("./zipEntries"),h=n("./stream/Crc32Probe"),p=n("./nodejsUtils");function g(v){return new o.Promise(function(m,_){var u=v.decompressed.getContentWorker().pipe(new h);u.on("error",function(C){_(C)}).on("end",function(){u.streamInfo.crc32!==v.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}r.exports=function(v,m){var _=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),p.isNode&&p.isStream(v)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",v,!0,m.optimizedBinaryString,m.base64).then(function(u){var C=new l(m);return C.load(u),C}).then(function(u){var C=[o.Promise.resolve(u)],x=u.files;if(m.checkCRC32)for(var A=0;A<x.length;A++)C.push(g(x[A]));return o.Promise.all(C)}).then(function(u){for(var C=u.shift(),x=C.files,A=0;A<x.length;A++){var V=x[A],M=V.fileNameStr,F=s.resolve(V.fileNameStr);_.file(F,V.decompressed,{binary:!0,optimizedBinaryString:!0,date:V.date,dir:V.dir,comment:V.fileCommentStr.length?V.fileCommentStr:null,unixPermissions:V.unixPermissions,dosPermissions:V.dosPermissions,createFolders:m.createFolders}),V.dir||(_.file(F).unsafeOriginalName=M)}return C.zipComment.length&&(_.comment=C.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var s=n("../utils"),o=n("../stream/GenericWorker");function a(l,h){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(a,o),a.prototype._bindStream=function(l){var h=this;(this._stream=l).pause(),l.on("data",function(p){h.push({data:p,meta:{percent:0}})}).on("error",function(p){h.isPaused?this.generatedError=p:h.error(p)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var s=n("readable-stream").Readable;function o(a,l,h){s.call(this,l),this._helper=a;var p=this;a.on("data",function(g,v){p.push(g)||p._helper.pause(),h&&h(v)}).on("error",function(g){p.emit("error",g)}).on("end",function(){p.push(null)})}n("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,r,i){function s(F,L,I){var b,w=a.getTypeOf(L),P=a.extend(I||{},p);P.date=P.date||new Date,P.compression!==null&&(P.compression=P.compression.toUpperCase()),typeof P.unixPermissions=="string"&&(P.unixPermissions=parseInt(P.unixPermissions,8)),P.unixPermissions&&16384&P.unixPermissions&&(P.dir=!0),P.dosPermissions&&16&P.dosPermissions&&(P.dir=!0),P.dir&&(F=x(F)),P.createFolders&&(b=C(F))&&A.call(this,b,!0);var D=w==="string"&&P.binary===!1&&P.base64===!1;I&&I.binary!==void 0||(P.binary=!D),(L instanceof g&&L.uncompressedSize===0||P.dir||!L||L.length===0)&&(P.base64=!1,P.binary=!0,L="",P.compression="STORE",w="string");var E=null;E=L instanceof g||L instanceof l?L:_.isNode&&_.isStream(L)?new u(F,L):a.prepareContent(F,L,P.binary,P.optimizedBinaryString,P.base64);var R=new v(F,E,P);this.files[F]=R}var o=n("./utf8"),a=n("./utils"),l=n("./stream/GenericWorker"),h=n("./stream/StreamHelper"),p=n("./defaults"),g=n("./compressedObject"),v=n("./zipObject"),m=n("./generate"),_=n("./nodejsUtils"),u=n("./nodejs/NodejsStreamInputAdapter"),C=function(F){F.slice(-1)==="/"&&(F=F.substring(0,F.length-1));var L=F.lastIndexOf("/");return 0<L?F.substring(0,L):""},x=function(F){return F.slice(-1)!=="/"&&(F+="/"),F},A=function(F,L){return L=L!==void 0?L:p.createFolders,F=x(F),this.files[F]||s.call(this,F,null,{dir:!0,createFolders:L}),this.files[F]};function V(F){return Object.prototype.toString.call(F)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(F){var L,I,b;for(L in this.files)b=this.files[L],(I=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&F(I,b)},filter:function(F){var L=[];return this.forEach(function(I,b){F(I,b)&&L.push(b)}),L},file:function(F,L,I){if(arguments.length!==1)return F=this.root+F,s.call(this,F,L,I),this;if(V(F)){var b=F;return this.filter(function(P,D){return!D.dir&&b.test(P)})}var w=this.files[this.root+F];return w&&!w.dir?w:null},folder:function(F){if(!F)return this;if(V(F))return this.filter(function(w,P){return P.dir&&F.test(w)});var L=this.root+F,I=A.call(this,L),b=this.clone();return b.root=I.name,b},remove:function(F){F=this.root+F;var L=this.files[F];if(L||(F.slice(-1)!=="/"&&(F+="/"),L=this.files[F]),L&&!L.dir)delete this.files[F];else for(var I=this.filter(function(w,P){return P.name.slice(0,F.length)===F}),b=0;b<I.length;b++)delete this.files[I[b].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(F){var L,I={};try{if((I=a.extend(F||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=I.type.toLowerCase(),I.compression=I.compression.toUpperCase(),I.type==="binarystring"&&(I.type="string"),!I.type)throw new Error("No output type specified.");a.checkSupport(I.type),I.platform!=="darwin"&&I.platform!=="freebsd"&&I.platform!=="linux"&&I.platform!=="sunos"||(I.platform="UNIX"),I.platform==="win32"&&(I.platform="DOS");var b=I.comment||this.comment||"";L=m.generateWorker(this,I,b)}catch(w){(L=new l("error")).error(w)}return new h(L,I.type||"string",I.mimeType)},generateAsync:function(F,L){return this.generateInternalStream(F).accumulate(L)},generateNodeStream:function(F,L){return(F=F||{}).type||(F.type="nodebuffer"),this.generateInternalStream(F).toNodejsStream(L)}};r.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),h=a.charCodeAt(1),p=a.charCodeAt(2),g=a.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===l&&this.data[v+1]===h&&this.data[v+2]===p&&this.data[v+3]===g)return v-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),h=a.charCodeAt(1),p=a.charCodeAt(2),g=a.charCodeAt(3),v=this.readData(4);return l===v[0]&&h===v[1]&&p===v[2]&&g===v[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var s=n("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,h=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)h=(h<<8)+this.byteAt(l);return this.index+=a,h},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=o},{"../utils":32}],19:[function(n,r,i){var s=n("./Uint8ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var s=n("./ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var s=n("../utils"),o=n("../support"),a=n("./ArrayReader"),l=n("./StringReader"),h=n("./NodeBufferReader"),p=n("./Uint8ArrayReader");r.exports=function(g){var v=s.getTypeOf(g);return s.checkSupport(v),v!=="string"||o.uint8array?v==="nodebuffer"?new h(g):o.uint8array?new p(s.transformTo("uint8array",g)):new a(s.transformTo("array",g)):new l(g)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var s=n("./GenericWorker"),o=n("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var s=n("./GenericWorker"),o=n("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+l.data.length}o.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){h.dataIsReady=!0,h.data=p,h.max=p&&p.length||0,h.type=s.getTypeOf(p),h.isPaused||h._tickAndRepeat()},function(p){h.error(p)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,h);break;case"uint8array":l=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":l=this.data.slice(this.index,h)}return this.index=h,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=s},{}],29:[function(n,r,i){var s=n("../utils"),o=n("./ConvertWorker"),a=n("./GenericWorker"),l=n("../base64"),h=n("../support"),p=n("../external"),g=null;if(h.nodestream)try{g=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(_,u){return new p.Promise(function(C,x){var A=[],V=_._internalType,M=_._outputType,F=_._mimeType;_.on("data",function(L,I){A.push(L),u&&u(I)}).on("error",function(L){A=[],x(L)}).on("end",function(){try{var L=function(I,b,w){switch(I){case"blob":return s.newBlob(s.transformTo("arraybuffer",b),w);case"base64":return l.encode(b);default:return s.transformTo(I,b)}}(M,function(I,b){var w,P=0,D=null,E=0;for(w=0;w<b.length;w++)E+=b[w].length;switch(I){case"string":return b.join("");case"array":return Array.prototype.concat.apply([],b);case"uint8array":for(D=new Uint8Array(E),w=0;w<b.length;w++)D.set(b[w],P),P+=b[w].length;return D;case"nodebuffer":return Buffer.concat(b);default:throw new Error("concat : unsupported type '"+I+"'")}}(V,A),F);C(L)}catch(I){x(I)}A=[]}).resume()})}function m(_,u,C){var x=u;switch(u){case"blob":case"arraybuffer":x="uint8array";break;case"base64":x="string"}try{this._internalType=x,this._outputType=u,this._mimeType=C,s.checkSupport(x),this._worker=_.pipe(new o(x)),_.lock()}catch(A){this._worker=new a("error"),this._worker.error(A)}}m.prototype={accumulate:function(_){return v(this,_)},on:function(_,u){var C=this;return _==="data"?this._worker.on(_,function(x){u.call(C,x.data,x.meta)}):this._worker.on(_,function(){s.delay(u,arguments,C)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new g(this,{objectMode:this._outputType!=="nodebuffer"},_)}},r.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var s=n("./utils"),o=n("./support"),a=n("./nodejsUtils"),l=n("./stream/GenericWorker"),h=new Array(256),p=0;p<256;p++)h[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;h[254]=h[254]=1;function g(){l.call(this,"utf-8 decode"),this.leftOver=null}function v(){l.call(this,"utf-8 encode")}i.utf8encode=function(m){return o.nodebuffer?a.newBufferFrom(m,"utf-8"):function(_){var u,C,x,A,V,M=_.length,F=0;for(A=0;A<M;A++)(64512&(C=_.charCodeAt(A)))==55296&&A+1<M&&(64512&(x=_.charCodeAt(A+1)))==56320&&(C=65536+(C-55296<<10)+(x-56320),A++),F+=C<128?1:C<2048?2:C<65536?3:4;for(u=o.uint8array?new Uint8Array(F):new Array(F),A=V=0;V<F;A++)(64512&(C=_.charCodeAt(A)))==55296&&A+1<M&&(64512&(x=_.charCodeAt(A+1)))==56320&&(C=65536+(C-55296<<10)+(x-56320),A++),C<128?u[V++]=C:(C<2048?u[V++]=192|C>>>6:(C<65536?u[V++]=224|C>>>12:(u[V++]=240|C>>>18,u[V++]=128|C>>>12&63),u[V++]=128|C>>>6&63),u[V++]=128|63&C);return u}(m)},i.utf8decode=function(m){return o.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):function(_){var u,C,x,A,V=_.length,M=new Array(2*V);for(u=C=0;u<V;)if((x=_[u++])<128)M[C++]=x;else if(4<(A=h[x]))M[C++]=65533,u+=A-1;else{for(x&=A===2?31:A===3?15:7;1<A&&u<V;)x=x<<6|63&_[u++],A--;1<A?M[C++]=65533:x<65536?M[C++]=x:(x-=65536,M[C++]=55296|x>>10&1023,M[C++]=56320|1023&x)}return M.length!==C&&(M.subarray?M=M.subarray(0,C):M.length=C),s.applyFromCharCode(M)}(m=s.transformTo(o.uint8array?"uint8array":"array",m))},s.inherits(g,l),g.prototype.processChunk=function(m){var _=s.transformTo(o.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var u=_;(_=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),_.set(u,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var C=function(A,V){var M;for((V=V||A.length)>A.length&&(V=A.length),M=V-1;0<=M&&(192&A[M])==128;)M--;return M<0||M===0?V:M+h[A[M]]>V?M:V}(_),x=_;C!==_.length&&(o.uint8array?(x=_.subarray(0,C),this.leftOver=_.subarray(C,_.length)):(x=_.slice(0,C),this.leftOver=_.slice(C,_.length))),this.push({data:i.utf8decode(x),meta:m.meta})},g.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=g,s.inherits(v,l),v.prototype.processChunk=function(m){this.push({data:i.utf8encode(m.data),meta:m.meta})},i.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var s=n("./support"),o=n("./base64"),a=n("./nodejsUtils"),l=n("./external");function h(u){return u}function p(u,C){for(var x=0;x<u.length;++x)C[x]=255&u.charCodeAt(x);return C}n("setimmediate"),i.newBlob=function(u,C){i.checkSupport("blob");try{return new Blob([u],{type:C})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(u),x.getBlob(C)}catch{throw new Error("Bug : can't construct the Blob.")}}};var g={stringifyByChunk:function(u,C,x){var A=[],V=0,M=u.length;if(M<=x)return String.fromCharCode.apply(null,u);for(;V<M;)C==="array"||C==="nodebuffer"?A.push(String.fromCharCode.apply(null,u.slice(V,Math.min(V+x,M)))):A.push(String.fromCharCode.apply(null,u.subarray(V,Math.min(V+x,M)))),V+=x;return A.join("")},stringifyByChar:function(u){for(var C="",x=0;x<u.length;x++)C+=String.fromCharCode(u[x]);return C},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function v(u){var C=65536,x=i.getTypeOf(u),A=!0;if(x==="uint8array"?A=g.applyCanBeUsed.uint8array:x==="nodebuffer"&&(A=g.applyCanBeUsed.nodebuffer),A)for(;1<C;)try{return g.stringifyByChunk(u,x,C)}catch{C=Math.floor(C/2)}return g.stringifyByChar(u)}function m(u,C){for(var x=0;x<u.length;x++)C[x]=u[x];return C}i.applyFromCharCode=v;var _={};_.string={string:h,array:function(u){return p(u,new Array(u.length))},arraybuffer:function(u){return _.string.uint8array(u).buffer},uint8array:function(u){return p(u,new Uint8Array(u.length))},nodebuffer:function(u){return p(u,a.allocBuffer(u.length))}},_.array={string:v,array:h,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(u)}},_.arraybuffer={string:function(u){return v(new Uint8Array(u))},array:function(u){return m(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:h,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(new Uint8Array(u))}},_.uint8array={string:v,array:function(u){return m(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:h,nodebuffer:function(u){return a.newBufferFrom(u)}},_.nodebuffer={string:v,array:function(u){return m(u,new Array(u.length))},arraybuffer:function(u){return _.nodebuffer.uint8array(u).buffer},uint8array:function(u){return m(u,new Uint8Array(u.length))},nodebuffer:h},i.transformTo=function(u,C){if(C=C||"",!u)return C;i.checkSupport(u);var x=i.getTypeOf(C);return _[x][u](C)},i.resolve=function(u){for(var C=u.split("/"),x=[],A=0;A<C.length;A++){var V=C[A];V==="."||V===""&&A!==0&&A!==C.length-1||(V===".."?x.pop():x.push(V))}return x.join("/")},i.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(u)?"nodebuffer":s.uint8array&&u instanceof Uint8Array?"uint8array":s.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(u){if(!s[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(u){var C,x,A="";for(x=0;x<(u||"").length;x++)A+="\\x"+((C=u.charCodeAt(x))<16?"0":"")+C.toString(16).toUpperCase();return A},i.delay=function(u,C,x){setImmediate(function(){u.apply(x||null,C||[])})},i.inherits=function(u,C){function x(){}x.prototype=C.prototype,u.prototype=new x},i.extend=function(){var u,C,x={};for(u=0;u<arguments.length;u++)for(C in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],C)&&x[C]===void 0&&(x[C]=arguments[u][C]);return x},i.prepareContent=function(u,C,x,A,V){return l.Promise.resolve(C).then(function(M){return s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)&&typeof FileReader<"u"?new l.Promise(function(F,L){var I=new FileReader;I.onload=function(b){F(b.target.result)},I.onerror=function(b){L(b.target.error)},I.readAsArrayBuffer(M)}):M}).then(function(M){var F=i.getTypeOf(M);return F?(F==="arraybuffer"?M=i.transformTo("uint8array",M):F==="string"&&(V?M=o.decode(M):x&&A!==!0&&(M=function(L){return p(L,s.uint8array?new Uint8Array(L.length):new Array(L.length))}(M))),M):l.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./signature"),l=n("./zipEntry"),h=n("./support");function p(g){this.files=[],this.loadOptions=g}p.prototype={checkSignature:function(g){if(!this.reader.readAndCheckSignature(g)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(v)+", expected "+o.pretty(g)+")")}},isSignature:function(g,v){var m=this.reader.index;this.reader.setIndex(g);var _=this.reader.readString(4)===v;return this.reader.setIndex(m),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var g=this.reader.readData(this.zipCommentLength),v=h.uint8array?"uint8array":"array",m=o.transformTo(v,g);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var g,v,m,_=this.zip64EndOfCentralSize-44;0<_;)g=this.reader.readInt(2),v=this.reader.readInt(4),m=this.reader.readData(v),this.zip64ExtensibleData[g]={id:g,length:v,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var g,v;for(g=0;g<this.files.length;g++)v=this.files[g],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var g;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(g=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(g);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var g=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(g<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(g);var v=g;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(g=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(g),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var _=v-m;if(0<_)this.isSignature(v,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(g){this.reader=s(g)},load:function(g){this.prepareReader(g),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./compressedObject"),l=n("./crc32"),h=n("./utf8"),p=n("./compressions"),g=n("./support");function v(m,_){this.options=m,this.loadOptions=_}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var _,u;if(m.skip(22),this.fileNameLength=m.readInt(2),u=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(C){for(var x in p)if(Object.prototype.hasOwnProperty.call(p,x)&&p[x].magic===C)return p[x];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var _=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(_),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var m=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(m){var _,u,C,x=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<x;)_=m.readInt(2),u=m.readInt(2),C=m.readData(u),this.extraFields[_]={id:_,length:u,value:C};m.setIndex(x)},handleUTF8:function(){var m=g.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var u=o.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var C=this.findExtraFieldUnicodeComment();if(C!==null)this.fileCommentStr=C;else{var x=o.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(x)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var _=s(m.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:h.utf8decode(_.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var _=s(m.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:h.utf8decode(_.readData(m.length-5))}return null}},r.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function s(_,u,C){this.name=_,this.dir=C.dir,this.date=C.date,this.comment=C.comment,this.unixPermissions=C.unixPermissions,this.dosPermissions=C.dosPermissions,this._data=u,this._dataBinary=C.binary,this.options={compression:C.compression,compressionOptions:C.compressionOptions}}var o=n("./stream/StreamHelper"),a=n("./stream/DataWorker"),l=n("./utf8"),h=n("./compressedObject"),p=n("./stream/GenericWorker");s.prototype={internalStream:function(_){var u=null,C="string";try{if(!_)throw new Error("No output type specified.");var x=(C=_.toLowerCase())==="string"||C==="text";C!=="binarystring"&&C!=="text"||(C="string"),u=this._decompressWorker();var A=!this._dataBinary;A&&!x&&(u=u.pipe(new l.Utf8EncodeWorker)),!A&&x&&(u=u.pipe(new l.Utf8DecodeWorker))}catch(V){(u=new p("error")).error(V)}return new o(u,C,"")},async:function(_,u){return this.internalStream(_).accumulate(u)},nodeStream:function(_,u){return this.internalStream(_||"nodebuffer").toNodejsStream(u)},_compressWorker:function(_,u){if(this._data instanceof h&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var C=this._decompressWorker();return this._dataBinary||(C=C.pipe(new l.Utf8EncodeWorker)),h.createWorkerFrom(C,_,u)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof p?this._data:new a(this._data)}};for(var g=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<g.length;m++)s.prototype[g[m]]=v;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var h=0,p=new l(_),g=s.document.createTextNode("");p.observe(g,{characterData:!0}),o=function(){g.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var u=s.document.createElement("script");u.onreadystatechange=function(){_(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},s.document.documentElement.appendChild(u)}:function(){setTimeout(_,0)};else{var v=new s.MessageChannel;v.port1.onmessage=_,o=function(){v.port2.postMessage(0)}}var m=[];function _(){var u,C;a=!0;for(var x=m.length;x;){for(C=m,m=[],u=-1;++u<x;)C[u]();x=m.length}a=!1}r.exports=function(u){m.push(u)!==1||a||o()}}).call(this,typeof pa<"u"?pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var s=n("immediate");function o(){}var a={},l=["REJECTED"],h=["FULFILLED"],p=["PENDING"];function g(x){if(typeof x!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,x!==o&&u(this,x)}function v(x,A,V){this.promise=x,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof V=="function"&&(this.onRejected=V,this.callRejected=this.otherCallRejected)}function m(x,A,V){s(function(){var M;try{M=A(V)}catch(F){return a.reject(x,F)}M===x?a.reject(x,new TypeError("Cannot resolve promise with itself")):a.resolve(x,M)})}function _(x){var A=x&&x.then;if(x&&(typeof x=="object"||typeof x=="function")&&typeof A=="function")return function(){A.apply(x,arguments)}}function u(x,A){var V=!1;function M(I){V||(V=!0,a.reject(x,I))}function F(I){V||(V=!0,a.resolve(x,I))}var L=C(function(){A(F,M)});L.status==="error"&&M(L.value)}function C(x,A){var V={};try{V.value=x(A),V.status="success"}catch(M){V.status="error",V.value=M}return V}(r.exports=g).prototype.finally=function(x){if(typeof x!="function")return this;var A=this.constructor;return this.then(function(V){return A.resolve(x()).then(function(){return V})},function(V){return A.resolve(x()).then(function(){throw V})})},g.prototype.catch=function(x){return this.then(null,x)},g.prototype.then=function(x,A){if(typeof x!="function"&&this.state===h||typeof A!="function"&&this.state===l)return this;var V=new this.constructor(o);return this.state!==p?m(V,this.state===h?x:A,this.outcome):this.queue.push(new v(V,x,A)),V},v.prototype.callFulfilled=function(x){a.resolve(this.promise,x)},v.prototype.otherCallFulfilled=function(x){m(this.promise,this.onFulfilled,x)},v.prototype.callRejected=function(x){a.reject(this.promise,x)},v.prototype.otherCallRejected=function(x){m(this.promise,this.onRejected,x)},a.resolve=function(x,A){var V=C(_,A);if(V.status==="error")return a.reject(x,V.value);var M=V.value;if(M)u(x,M);else{x.state=h,x.outcome=A;for(var F=-1,L=x.queue.length;++F<L;)x.queue[F].callFulfilled(A)}return x},a.reject=function(x,A){x.state=l,x.outcome=A;for(var V=-1,M=x.queue.length;++V<M;)x.queue[V].callRejected(A);return x},g.resolve=function(x){return x instanceof this?x:a.resolve(new this(o),x)},g.reject=function(x){var A=new this(o);return a.reject(A,x)},g.all=function(x){var A=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=x.length,M=!1;if(!V)return this.resolve([]);for(var F=new Array(V),L=0,I=-1,b=new this(o);++I<V;)w(x[I],I);return b;function w(P,D){A.resolve(P).then(function(E){F[D]=E,++L!==V||M||(M=!0,a.resolve(b,F))},function(E){M||(M=!0,a.reject(b,E))})}},g.race=function(x){var A=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=x.length,M=!1;if(!V)return this.resolve([]);for(var F=-1,L=new this(o);++F<V;)I=x[F],A.resolve(I).then(function(b){M||(M=!0,a.resolve(L,b))},function(b){M||(M=!0,a.reject(L,b))});var I;return L}},{immediate:36}],38:[function(n,r,i){var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var s=n("./zlib/deflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/messages"),h=n("./zlib/zstream"),p=Object.prototype.toString,g=0,v=-1,m=0,_=8;function u(x){if(!(this instanceof u))return new u(x);this.options=o.assign({level:v,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},x||{});var A=this.options;A.raw&&0<A.windowBits?A.windowBits=-A.windowBits:A.gzip&&0<A.windowBits&&A.windowBits<16&&(A.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var V=s.deflateInit2(this.strm,A.level,A.method,A.windowBits,A.memLevel,A.strategy);if(V!==g)throw new Error(l[V]);if(A.header&&s.deflateSetHeader(this.strm,A.header),A.dictionary){var M;if(M=typeof A.dictionary=="string"?a.string2buf(A.dictionary):p.call(A.dictionary)==="[object ArrayBuffer]"?new Uint8Array(A.dictionary):A.dictionary,(V=s.deflateSetDictionary(this.strm,M))!==g)throw new Error(l[V]);this._dict_set=!0}}function C(x,A){var V=new u(A);if(V.push(x,!0),V.err)throw V.msg||l[V.err];return V.result}u.prototype.push=function(x,A){var V,M,F=this.strm,L=this.options.chunkSize;if(this.ended)return!1;M=A===~~A?A:A===!0?4:0,typeof x=="string"?F.input=a.string2buf(x):p.call(x)==="[object ArrayBuffer]"?F.input=new Uint8Array(x):F.input=x,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new o.Buf8(L),F.next_out=0,F.avail_out=L),(V=s.deflate(F,M))!==1&&V!==g)return this.onEnd(V),!(this.ended=!0);F.avail_out!==0&&(F.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(F.output,F.next_out))):this.onData(o.shrinkBuf(F.output,F.next_out)))}while((0<F.avail_in||F.avail_out===0)&&V!==1);return M===4?(V=s.deflateEnd(this.strm),this.onEnd(V),this.ended=!0,V===g):M!==2||(this.onEnd(g),!(F.avail_out=0))},u.prototype.onData=function(x){this.chunks.push(x)},u.prototype.onEnd=function(x){x===g&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},i.Deflate=u,i.deflate=C,i.deflateRaw=function(x,A){return(A=A||{}).raw=!0,C(x,A)},i.gzip=function(x,A){return(A=A||{}).gzip=!0,C(x,A)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var s=n("./zlib/inflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/constants"),h=n("./zlib/messages"),p=n("./zlib/zstream"),g=n("./zlib/gzheader"),v=Object.prototype.toString;function m(u){if(!(this instanceof m))return new m(u);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},u||{});var C=this.options;C.raw&&0<=C.windowBits&&C.windowBits<16&&(C.windowBits=-C.windowBits,C.windowBits===0&&(C.windowBits=-15)),!(0<=C.windowBits&&C.windowBits<16)||u&&u.windowBits||(C.windowBits+=32),15<C.windowBits&&C.windowBits<48&&!(15&C.windowBits)&&(C.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var x=s.inflateInit2(this.strm,C.windowBits);if(x!==l.Z_OK)throw new Error(h[x]);this.header=new g,s.inflateGetHeader(this.strm,this.header)}function _(u,C){var x=new m(C);if(x.push(u,!0),x.err)throw x.msg||h[x.err];return x.result}m.prototype.push=function(u,C){var x,A,V,M,F,L,I=this.strm,b=this.options.chunkSize,w=this.options.dictionary,P=!1;if(this.ended)return!1;A=C===~~C?C:C===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof u=="string"?I.input=a.binstring2buf(u):v.call(u)==="[object ArrayBuffer]"?I.input=new Uint8Array(u):I.input=u,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new o.Buf8(b),I.next_out=0,I.avail_out=b),(x=s.inflate(I,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&w&&(L=typeof w=="string"?a.string2buf(w):v.call(w)==="[object ArrayBuffer]"?new Uint8Array(w):w,x=s.inflateSetDictionary(this.strm,L)),x===l.Z_BUF_ERROR&&P===!0&&(x=l.Z_OK,P=!1),x!==l.Z_STREAM_END&&x!==l.Z_OK)return this.onEnd(x),!(this.ended=!0);I.next_out&&(I.avail_out!==0&&x!==l.Z_STREAM_END&&(I.avail_in!==0||A!==l.Z_FINISH&&A!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(V=a.utf8border(I.output,I.next_out),M=I.next_out-V,F=a.buf2string(I.output,V),I.next_out=M,I.avail_out=b-M,M&&o.arraySet(I.output,I.output,V,M,0),this.onData(F)):this.onData(o.shrinkBuf(I.output,I.next_out)))),I.avail_in===0&&I.avail_out===0&&(P=!0)}while((0<I.avail_in||I.avail_out===0)&&x!==l.Z_STREAM_END);return x===l.Z_STREAM_END&&(A=l.Z_FINISH),A===l.Z_FINISH?(x=s.inflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===l.Z_OK):A!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(I.avail_out=0))},m.prototype.onData=function(u){this.chunks.push(u)},m.prototype.onEnd=function(u){u===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},i.Inflate=m,i.inflate=_,i.inflateRaw=function(u,C){return(C=C||{}).raw=!0,_(u,C)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var p=h.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var g in p)p.hasOwnProperty(g)&&(l[g]=p[g])}}return l},i.shrinkBuf=function(l,h){return l.length===h?l:l.subarray?l.subarray(0,h):(l.length=h,l)};var o={arraySet:function(l,h,p,g,v){if(h.subarray&&l.subarray)l.set(h.subarray(p,p+g),v);else for(var m=0;m<g;m++)l[v+m]=h[p+m]},flattenChunks:function(l){var h,p,g,v,m,_;for(h=g=0,p=l.length;h<p;h++)g+=l[h].length;for(_=new Uint8Array(g),h=v=0,p=l.length;h<p;h++)m=l[h],_.set(m,v),v+=m.length;return _}},a={arraySet:function(l,h,p,g,v){for(var m=0;m<g;m++)l[v+m]=h[p+m]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(n,r,i){var s=n("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),h=0;h<256;h++)l[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function p(g,v){if(v<65537&&(g.subarray&&a||!g.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(g,v));for(var m="",_=0;_<v;_++)m+=String.fromCharCode(g[_]);return m}l[254]=l[254]=1,i.string2buf=function(g){var v,m,_,u,C,x=g.length,A=0;for(u=0;u<x;u++)(64512&(m=g.charCodeAt(u)))==55296&&u+1<x&&(64512&(_=g.charCodeAt(u+1)))==56320&&(m=65536+(m-55296<<10)+(_-56320),u++),A+=m<128?1:m<2048?2:m<65536?3:4;for(v=new s.Buf8(A),u=C=0;C<A;u++)(64512&(m=g.charCodeAt(u)))==55296&&u+1<x&&(64512&(_=g.charCodeAt(u+1)))==56320&&(m=65536+(m-55296<<10)+(_-56320),u++),m<128?v[C++]=m:(m<2048?v[C++]=192|m>>>6:(m<65536?v[C++]=224|m>>>12:(v[C++]=240|m>>>18,v[C++]=128|m>>>12&63),v[C++]=128|m>>>6&63),v[C++]=128|63&m);return v},i.buf2binstring=function(g){return p(g,g.length)},i.binstring2buf=function(g){for(var v=new s.Buf8(g.length),m=0,_=v.length;m<_;m++)v[m]=g.charCodeAt(m);return v},i.buf2string=function(g,v){var m,_,u,C,x=v||g.length,A=new Array(2*x);for(m=_=0;m<x;)if((u=g[m++])<128)A[_++]=u;else if(4<(C=l[u]))A[_++]=65533,m+=C-1;else{for(u&=C===2?31:C===3?15:7;1<C&&m<x;)u=u<<6|63&g[m++],C--;1<C?A[_++]=65533:u<65536?A[_++]=u:(u-=65536,A[_++]=55296|u>>10&1023,A[_++]=56320|1023&u)}return p(A,_)},i.utf8border=function(g,v){var m;for((v=v||g.length)>g.length&&(v=g.length),m=v-1;0<=m&&(192&g[m])==128;)m--;return m<0||m===0?v:m+l[g[m]]>v?m:v}},{"./common":41}],43:[function(n,r,i){r.exports=function(s,o,a,l){for(var h=65535&s|0,p=s>>>16&65535|0,g=0;a!==0;){for(a-=g=2e3<a?2e3:a;p=p+(h=h+o[l++]|0)|0,--g;);h%=65521,p%=65521}return h|p<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();r.exports=function(o,a,l,h){var p=s,g=h+l;o^=-1;for(var v=h;v<g;v++)o=o>>>8^p[255&(o^a[v])];return-1^o}},{}],46:[function(n,r,i){var s,o=n("../utils/common"),a=n("./trees"),l=n("./adler32"),h=n("./crc32"),p=n("./messages"),g=0,v=4,m=0,_=-2,u=-1,C=4,x=2,A=8,V=9,M=286,F=30,L=19,I=2*M+1,b=15,w=3,P=258,D=P+w+1,E=42,R=113,S=1,J=2,ae=3,z=4;function de(f,G){return f.msg=p[G],G}function se(f){return(f<<1)-(4<f?9:0)}function Ie(f){for(var G=f.length;0<=--G;)f[G]=0}function te(f){var G=f.state,$=G.pending;$>f.avail_out&&($=f.avail_out),$!==0&&(o.arraySet(f.output,G.pending_buf,G.pending_out,$,f.next_out),f.next_out+=$,G.pending_out+=$,f.total_out+=$,f.avail_out-=$,G.pending-=$,G.pending===0&&(G.pending_out=0))}function Z(f,G){a._tr_flush_block(f,0<=f.block_start?f.block_start:-1,f.strstart-f.block_start,G),f.block_start=f.strstart,te(f.strm)}function we(f,G){f.pending_buf[f.pending++]=G}function ve(f,G){f.pending_buf[f.pending++]=G>>>8&255,f.pending_buf[f.pending++]=255&G}function X(f,G){var $,O,N=f.max_chain_length,H=f.strstart,j=f.prev_length,T=f.nice_match,W=f.strstart>f.w_size-D?f.strstart-(f.w_size-D):0,Y=f.window,ne=f.w_mask,le=f.prev,me=f.strstart+P,Se=Y[H+j-1],oe=Y[H+j];f.prev_length>=f.good_match&&(N>>=2),T>f.lookahead&&(T=f.lookahead);do if(Y[($=G)+j]===oe&&Y[$+j-1]===Se&&Y[$]===Y[H]&&Y[++$]===Y[H+1]){H+=2,$++;do;while(Y[++H]===Y[++$]&&Y[++H]===Y[++$]&&Y[++H]===Y[++$]&&Y[++H]===Y[++$]&&Y[++H]===Y[++$]&&Y[++H]===Y[++$]&&Y[++H]===Y[++$]&&Y[++H]===Y[++$]&&H<me);if(O=P-(me-H),H=me-P,j<O){if(f.match_start=G,T<=(j=O))break;Se=Y[H+j-1],oe=Y[H+j]}}while((G=le[G&ne])>W&&--N!=0);return j<=f.lookahead?j:f.lookahead}function _e(f){var G,$,O,N,H,j,T,W,Y,ne,le=f.w_size;do{if(N=f.window_size-f.lookahead-f.strstart,f.strstart>=le+(le-D)){for(o.arraySet(f.window,f.window,le,le,0),f.match_start-=le,f.strstart-=le,f.block_start-=le,G=$=f.hash_size;O=f.head[--G],f.head[G]=le<=O?O-le:0,--$;);for(G=$=le;O=f.prev[--G],f.prev[G]=le<=O?O-le:0,--$;);N+=le}if(f.strm.avail_in===0)break;if(j=f.strm,T=f.window,W=f.strstart+f.lookahead,Y=N,ne=void 0,ne=j.avail_in,Y<ne&&(ne=Y),$=ne===0?0:(j.avail_in-=ne,o.arraySet(T,j.input,j.next_in,ne,W),j.state.wrap===1?j.adler=l(j.adler,T,ne,W):j.state.wrap===2&&(j.adler=h(j.adler,T,ne,W)),j.next_in+=ne,j.total_in+=ne,ne),f.lookahead+=$,f.lookahead+f.insert>=w)for(H=f.strstart-f.insert,f.ins_h=f.window[H],f.ins_h=(f.ins_h<<f.hash_shift^f.window[H+1])&f.hash_mask;f.insert&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[H+w-1])&f.hash_mask,f.prev[H&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=H,H++,f.insert--,!(f.lookahead+f.insert<w)););}while(f.lookahead<D&&f.strm.avail_in!==0)}function re(f,G){for(var $,O;;){if(f.lookahead<D){if(_e(f),f.lookahead<D&&G===g)return S;if(f.lookahead===0)break}if($=0,f.lookahead>=w&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+w-1])&f.hash_mask,$=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),$!==0&&f.strstart-$<=f.w_size-D&&(f.match_length=X(f,$)),f.match_length>=w)if(O=a._tr_tally(f,f.strstart-f.match_start,f.match_length-w),f.lookahead-=f.match_length,f.match_length<=f.max_lazy_match&&f.lookahead>=w){for(f.match_length--;f.strstart++,f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+w-1])&f.hash_mask,$=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart,--f.match_length!=0;);f.strstart++}else f.strstart+=f.match_length,f.match_length=0,f.ins_h=f.window[f.strstart],f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+1])&f.hash_mask;else O=a._tr_tally(f,0,f.window[f.strstart]),f.lookahead--,f.strstart++;if(O&&(Z(f,!1),f.strm.avail_out===0))return S}return f.insert=f.strstart<w-1?f.strstart:w-1,G===v?(Z(f,!0),f.strm.avail_out===0?ae:z):f.last_lit&&(Z(f,!1),f.strm.avail_out===0)?S:J}function ue(f,G){for(var $,O,N;;){if(f.lookahead<D){if(_e(f),f.lookahead<D&&G===g)return S;if(f.lookahead===0)break}if($=0,f.lookahead>=w&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+w-1])&f.hash_mask,$=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),f.prev_length=f.match_length,f.prev_match=f.match_start,f.match_length=w-1,$!==0&&f.prev_length<f.max_lazy_match&&f.strstart-$<=f.w_size-D&&(f.match_length=X(f,$),f.match_length<=5&&(f.strategy===1||f.match_length===w&&4096<f.strstart-f.match_start)&&(f.match_length=w-1)),f.prev_length>=w&&f.match_length<=f.prev_length){for(N=f.strstart+f.lookahead-w,O=a._tr_tally(f,f.strstart-1-f.prev_match,f.prev_length-w),f.lookahead-=f.prev_length-1,f.prev_length-=2;++f.strstart<=N&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+w-1])&f.hash_mask,$=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),--f.prev_length!=0;);if(f.match_available=0,f.match_length=w-1,f.strstart++,O&&(Z(f,!1),f.strm.avail_out===0))return S}else if(f.match_available){if((O=a._tr_tally(f,0,f.window[f.strstart-1]))&&Z(f,!1),f.strstart++,f.lookahead--,f.strm.avail_out===0)return S}else f.match_available=1,f.strstart++,f.lookahead--}return f.match_available&&(O=a._tr_tally(f,0,f.window[f.strstart-1]),f.match_available=0),f.insert=f.strstart<w-1?f.strstart:w-1,G===v?(Z(f,!0),f.strm.avail_out===0?ae:z):f.last_lit&&(Z(f,!1),f.strm.avail_out===0)?S:J}function he(f,G,$,O,N){this.good_length=f,this.max_lazy=G,this.nice_length=$,this.max_chain=O,this.func=N}function ye(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=A,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*I),this.dyn_dtree=new o.Buf16(2*(2*F+1)),this.bl_tree=new o.Buf16(2*(2*L+1)),Ie(this.dyn_ltree),Ie(this.dyn_dtree),Ie(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(b+1),this.heap=new o.Buf16(2*M+1),Ie(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*M+1),Ie(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ke(f){var G;return f&&f.state?(f.total_in=f.total_out=0,f.data_type=x,(G=f.state).pending=0,G.pending_out=0,G.wrap<0&&(G.wrap=-G.wrap),G.status=G.wrap?E:R,f.adler=G.wrap===2?0:1,G.last_flush=g,a._tr_init(G),m):de(f,_)}function q(f){var G=ke(f);return G===m&&function($){$.window_size=2*$.w_size,Ie($.head),$.max_lazy_match=s[$.level].max_lazy,$.good_match=s[$.level].good_length,$.nice_match=s[$.level].nice_length,$.max_chain_length=s[$.level].max_chain,$.strstart=0,$.block_start=0,$.lookahead=0,$.insert=0,$.match_length=$.prev_length=w-1,$.match_available=0,$.ins_h=0}(f.state),G}function B(f,G,$,O,N,H){if(!f)return _;var j=1;if(G===u&&(G=6),O<0?(j=0,O=-O):15<O&&(j=2,O-=16),N<1||V<N||$!==A||O<8||15<O||G<0||9<G||H<0||C<H)return de(f,_);O===8&&(O=9);var T=new ye;return(f.state=T).strm=f,T.wrap=j,T.gzhead=null,T.w_bits=O,T.w_size=1<<T.w_bits,T.w_mask=T.w_size-1,T.hash_bits=N+7,T.hash_size=1<<T.hash_bits,T.hash_mask=T.hash_size-1,T.hash_shift=~~((T.hash_bits+w-1)/w),T.window=new o.Buf8(2*T.w_size),T.head=new o.Buf16(T.hash_size),T.prev=new o.Buf16(T.w_size),T.lit_bufsize=1<<N+6,T.pending_buf_size=4*T.lit_bufsize,T.pending_buf=new o.Buf8(T.pending_buf_size),T.d_buf=1*T.lit_bufsize,T.l_buf=3*T.lit_bufsize,T.level=G,T.strategy=H,T.method=$,q(f)}s=[new he(0,0,0,0,function(f,G){var $=65535;for($>f.pending_buf_size-5&&($=f.pending_buf_size-5);;){if(f.lookahead<=1){if(_e(f),f.lookahead===0&&G===g)return S;if(f.lookahead===0)break}f.strstart+=f.lookahead,f.lookahead=0;var O=f.block_start+$;if((f.strstart===0||f.strstart>=O)&&(f.lookahead=f.strstart-O,f.strstart=O,Z(f,!1),f.strm.avail_out===0)||f.strstart-f.block_start>=f.w_size-D&&(Z(f,!1),f.strm.avail_out===0))return S}return f.insert=0,G===v?(Z(f,!0),f.strm.avail_out===0?ae:z):(f.strstart>f.block_start&&(Z(f,!1),f.strm.avail_out),S)}),new he(4,4,8,4,re),new he(4,5,16,8,re),new he(4,6,32,32,re),new he(4,4,16,16,ue),new he(8,16,32,32,ue),new he(8,16,128,128,ue),new he(8,32,128,256,ue),new he(32,128,258,1024,ue),new he(32,258,258,4096,ue)],i.deflateInit=function(f,G){return B(f,G,A,15,8,0)},i.deflateInit2=B,i.deflateReset=q,i.deflateResetKeep=ke,i.deflateSetHeader=function(f,G){return f&&f.state?f.state.wrap!==2?_:(f.state.gzhead=G,m):_},i.deflate=function(f,G){var $,O,N,H;if(!f||!f.state||5<G||G<0)return f?de(f,_):_;if(O=f.state,!f.output||!f.input&&f.avail_in!==0||O.status===666&&G!==v)return de(f,f.avail_out===0?-5:_);if(O.strm=f,$=O.last_flush,O.last_flush=G,O.status===E)if(O.wrap===2)f.adler=0,we(O,31),we(O,139),we(O,8),O.gzhead?(we(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),we(O,255&O.gzhead.time),we(O,O.gzhead.time>>8&255),we(O,O.gzhead.time>>16&255),we(O,O.gzhead.time>>24&255),we(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),we(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(we(O,255&O.gzhead.extra.length),we(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(f.adler=h(f.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(we(O,0),we(O,0),we(O,0),we(O,0),we(O,0),we(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),we(O,3),O.status=R);else{var j=A+(O.w_bits-8<<4)<<8;j|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(j|=32),j+=31-j%31,O.status=R,ve(O,j),O.strstart!==0&&(ve(O,f.adler>>>16),ve(O,65535&f.adler)),f.adler=1}if(O.status===69)if(O.gzhead.extra){for(N=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>N&&(f.adler=h(f.adler,O.pending_buf,O.pending-N,N)),te(f),N=O.pending,O.pending!==O.pending_buf_size));)we(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>N&&(f.adler=h(f.adler,O.pending_buf,O.pending-N,N)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){N=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>N&&(f.adler=h(f.adler,O.pending_buf,O.pending-N,N)),te(f),N=O.pending,O.pending===O.pending_buf_size)){H=1;break}H=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,we(O,H)}while(H!==0);O.gzhead.hcrc&&O.pending>N&&(f.adler=h(f.adler,O.pending_buf,O.pending-N,N)),H===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){N=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>N&&(f.adler=h(f.adler,O.pending_buf,O.pending-N,N)),te(f),N=O.pending,O.pending===O.pending_buf_size)){H=1;break}H=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,we(O,H)}while(H!==0);O.gzhead.hcrc&&O.pending>N&&(f.adler=h(f.adler,O.pending_buf,O.pending-N,N)),H===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&te(f),O.pending+2<=O.pending_buf_size&&(we(O,255&f.adler),we(O,f.adler>>8&255),f.adler=0,O.status=R)):O.status=R),O.pending!==0){if(te(f),f.avail_out===0)return O.last_flush=-1,m}else if(f.avail_in===0&&se(G)<=se($)&&G!==v)return de(f,-5);if(O.status===666&&f.avail_in!==0)return de(f,-5);if(f.avail_in!==0||O.lookahead!==0||G!==g&&O.status!==666){var T=O.strategy===2?function(W,Y){for(var ne;;){if(W.lookahead===0&&(_e(W),W.lookahead===0)){if(Y===g)return S;break}if(W.match_length=0,ne=a._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,ne&&(Z(W,!1),W.strm.avail_out===0))return S}return W.insert=0,Y===v?(Z(W,!0),W.strm.avail_out===0?ae:z):W.last_lit&&(Z(W,!1),W.strm.avail_out===0)?S:J}(O,G):O.strategy===3?function(W,Y){for(var ne,le,me,Se,oe=W.window;;){if(W.lookahead<=P){if(_e(W),W.lookahead<=P&&Y===g)return S;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=w&&0<W.strstart&&(le=oe[me=W.strstart-1])===oe[++me]&&le===oe[++me]&&le===oe[++me]){Se=W.strstart+P;do;while(le===oe[++me]&&le===oe[++me]&&le===oe[++me]&&le===oe[++me]&&le===oe[++me]&&le===oe[++me]&&le===oe[++me]&&le===oe[++me]&&me<Se);W.match_length=P-(Se-me),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=w?(ne=a._tr_tally(W,1,W.match_length-w),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(ne=a._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),ne&&(Z(W,!1),W.strm.avail_out===0))return S}return W.insert=0,Y===v?(Z(W,!0),W.strm.avail_out===0?ae:z):W.last_lit&&(Z(W,!1),W.strm.avail_out===0)?S:J}(O,G):s[O.level].func(O,G);if(T!==ae&&T!==z||(O.status=666),T===S||T===ae)return f.avail_out===0&&(O.last_flush=-1),m;if(T===J&&(G===1?a._tr_align(O):G!==5&&(a._tr_stored_block(O,0,0,!1),G===3&&(Ie(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),te(f),f.avail_out===0))return O.last_flush=-1,m}return G!==v?m:O.wrap<=0?1:(O.wrap===2?(we(O,255&f.adler),we(O,f.adler>>8&255),we(O,f.adler>>16&255),we(O,f.adler>>24&255),we(O,255&f.total_in),we(O,f.total_in>>8&255),we(O,f.total_in>>16&255),we(O,f.total_in>>24&255)):(ve(O,f.adler>>>16),ve(O,65535&f.adler)),te(f),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?m:1)},i.deflateEnd=function(f){var G;return f&&f.state?(G=f.state.status)!==E&&G!==69&&G!==73&&G!==91&&G!==103&&G!==R&&G!==666?de(f,_):(f.state=null,G===R?de(f,-3):m):_},i.deflateSetDictionary=function(f,G){var $,O,N,H,j,T,W,Y,ne=G.length;if(!f||!f.state||(H=($=f.state).wrap)===2||H===1&&$.status!==E||$.lookahead)return _;for(H===1&&(f.adler=l(f.adler,G,ne,0)),$.wrap=0,ne>=$.w_size&&(H===0&&(Ie($.head),$.strstart=0,$.block_start=0,$.insert=0),Y=new o.Buf8($.w_size),o.arraySet(Y,G,ne-$.w_size,$.w_size,0),G=Y,ne=$.w_size),j=f.avail_in,T=f.next_in,W=f.input,f.avail_in=ne,f.next_in=0,f.input=G,_e($);$.lookahead>=w;){for(O=$.strstart,N=$.lookahead-(w-1);$.ins_h=($.ins_h<<$.hash_shift^$.window[O+w-1])&$.hash_mask,$.prev[O&$.w_mask]=$.head[$.ins_h],$.head[$.ins_h]=O,O++,--N;);$.strstart=O,$.lookahead=w-1,_e($)}return $.strstart+=$.lookahead,$.block_start=$.strstart,$.insert=$.lookahead,$.lookahead=0,$.match_length=$.prev_length=w-1,$.match_available=0,f.next_in=T,f.input=W,f.avail_in=j,$.wrap=H,m},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(s,o){var a,l,h,p,g,v,m,_,u,C,x,A,V,M,F,L,I,b,w,P,D,E,R,S,J;a=s.state,l=s.next_in,S=s.input,h=l+(s.avail_in-5),p=s.next_out,J=s.output,g=p-(o-s.avail_out),v=p+(s.avail_out-257),m=a.dmax,_=a.wsize,u=a.whave,C=a.wnext,x=a.window,A=a.hold,V=a.bits,M=a.lencode,F=a.distcode,L=(1<<a.lenbits)-1,I=(1<<a.distbits)-1;e:do{V<15&&(A+=S[l++]<<V,V+=8,A+=S[l++]<<V,V+=8),b=M[A&L];t:for(;;){if(A>>>=w=b>>>24,V-=w,(w=b>>>16&255)===0)J[p++]=65535&b;else{if(!(16&w)){if(!(64&w)){b=M[(65535&b)+(A&(1<<w)-1)];continue t}if(32&w){a.mode=12;break e}s.msg="invalid literal/length code",a.mode=30;break e}P=65535&b,(w&=15)&&(V<w&&(A+=S[l++]<<V,V+=8),P+=A&(1<<w)-1,A>>>=w,V-=w),V<15&&(A+=S[l++]<<V,V+=8,A+=S[l++]<<V,V+=8),b=F[A&I];n:for(;;){if(A>>>=w=b>>>24,V-=w,!(16&(w=b>>>16&255))){if(!(64&w)){b=F[(65535&b)+(A&(1<<w)-1)];continue n}s.msg="invalid distance code",a.mode=30;break e}if(D=65535&b,V<(w&=15)&&(A+=S[l++]<<V,(V+=8)<w&&(A+=S[l++]<<V,V+=8)),m<(D+=A&(1<<w)-1)){s.msg="invalid distance too far back",a.mode=30;break e}if(A>>>=w,V-=w,(w=p-g)<D){if(u<(w=D-w)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break e}if(R=x,(E=0)===C){if(E+=_-w,w<P){for(P-=w;J[p++]=x[E++],--w;);E=p-D,R=J}}else if(C<w){if(E+=_+C-w,(w-=C)<P){for(P-=w;J[p++]=x[E++],--w;);if(E=0,C<P){for(P-=w=C;J[p++]=x[E++],--w;);E=p-D,R=J}}}else if(E+=C-w,w<P){for(P-=w;J[p++]=x[E++],--w;);E=p-D,R=J}for(;2<P;)J[p++]=R[E++],J[p++]=R[E++],J[p++]=R[E++],P-=3;P&&(J[p++]=R[E++],1<P&&(J[p++]=R[E++]))}else{for(E=p-D;J[p++]=J[E++],J[p++]=J[E++],J[p++]=J[E++],2<(P-=3););P&&(J[p++]=J[E++],1<P&&(J[p++]=J[E++]))}break}}break}}while(l<h&&p<v);l-=P=V>>3,A&=(1<<(V-=P<<3))-1,s.next_in=l,s.next_out=p,s.avail_in=l<h?h-l+5:5-(l-h),s.avail_out=p<v?v-p+257:257-(p-v),a.hold=A,a.bits=V}},{}],49:[function(n,r,i){var s=n("../utils/common"),o=n("./adler32"),a=n("./crc32"),l=n("./inffast"),h=n("./inftrees"),p=1,g=2,v=0,m=-2,_=1,u=852,C=592;function x(E){return(E>>>24&255)+(E>>>8&65280)+((65280&E)<<8)+((255&E)<<24)}function A(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function V(E){var R;return E&&E.state?(R=E.state,E.total_in=E.total_out=R.total=0,E.msg="",R.wrap&&(E.adler=1&R.wrap),R.mode=_,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new s.Buf32(u),R.distcode=R.distdyn=new s.Buf32(C),R.sane=1,R.back=-1,v):m}function M(E){var R;return E&&E.state?((R=E.state).wsize=0,R.whave=0,R.wnext=0,V(E)):m}function F(E,R){var S,J;return E&&E.state?(J=E.state,R<0?(S=0,R=-R):(S=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?m:(J.window!==null&&J.wbits!==R&&(J.window=null),J.wrap=S,J.wbits=R,M(E))):m}function L(E,R){var S,J;return E?(J=new A,(E.state=J).window=null,(S=F(E,R))!==v&&(E.state=null),S):m}var I,b,w=!0;function P(E){if(w){var R;for(I=new s.Buf32(512),b=new s.Buf32(32),R=0;R<144;)E.lens[R++]=8;for(;R<256;)E.lens[R++]=9;for(;R<280;)E.lens[R++]=7;for(;R<288;)E.lens[R++]=8;for(h(p,E.lens,0,288,I,0,E.work,{bits:9}),R=0;R<32;)E.lens[R++]=5;h(g,E.lens,0,32,b,0,E.work,{bits:5}),w=!1}E.lencode=I,E.lenbits=9,E.distcode=b,E.distbits=5}function D(E,R,S,J){var ae,z=E.state;return z.window===null&&(z.wsize=1<<z.wbits,z.wnext=0,z.whave=0,z.window=new s.Buf8(z.wsize)),J>=z.wsize?(s.arraySet(z.window,R,S-z.wsize,z.wsize,0),z.wnext=0,z.whave=z.wsize):(J<(ae=z.wsize-z.wnext)&&(ae=J),s.arraySet(z.window,R,S-J,ae,z.wnext),(J-=ae)?(s.arraySet(z.window,R,S-J,J,0),z.wnext=J,z.whave=z.wsize):(z.wnext+=ae,z.wnext===z.wsize&&(z.wnext=0),z.whave<z.wsize&&(z.whave+=ae))),0}i.inflateReset=M,i.inflateReset2=F,i.inflateResetKeep=V,i.inflateInit=function(E){return L(E,15)},i.inflateInit2=L,i.inflate=function(E,R){var S,J,ae,z,de,se,Ie,te,Z,we,ve,X,_e,re,ue,he,ye,ke,q,B,f,G,$,O,N=0,H=new s.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!E||!E.state||!E.output||!E.input&&E.avail_in!==0)return m;(S=E.state).mode===12&&(S.mode=13),de=E.next_out,ae=E.output,Ie=E.avail_out,z=E.next_in,J=E.input,se=E.avail_in,te=S.hold,Z=S.bits,we=se,ve=Ie,G=v;e:for(;;)switch(S.mode){case _:if(S.wrap===0){S.mode=13;break}for(;Z<16;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(2&S.wrap&&te===35615){H[S.check=0]=255&te,H[1]=te>>>8&255,S.check=a(S.check,H,2,0),Z=te=0,S.mode=2;break}if(S.flags=0,S.head&&(S.head.done=!1),!(1&S.wrap)||(((255&te)<<8)+(te>>8))%31){E.msg="incorrect header check",S.mode=30;break}if((15&te)!=8){E.msg="unknown compression method",S.mode=30;break}if(Z-=4,f=8+(15&(te>>>=4)),S.wbits===0)S.wbits=f;else if(f>S.wbits){E.msg="invalid window size",S.mode=30;break}S.dmax=1<<f,E.adler=S.check=1,S.mode=512&te?10:12,Z=te=0;break;case 2:for(;Z<16;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(S.flags=te,(255&S.flags)!=8){E.msg="unknown compression method",S.mode=30;break}if(57344&S.flags){E.msg="unknown header flags set",S.mode=30;break}S.head&&(S.head.text=te>>8&1),512&S.flags&&(H[0]=255&te,H[1]=te>>>8&255,S.check=a(S.check,H,2,0)),Z=te=0,S.mode=3;case 3:for(;Z<32;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}S.head&&(S.head.time=te),512&S.flags&&(H[0]=255&te,H[1]=te>>>8&255,H[2]=te>>>16&255,H[3]=te>>>24&255,S.check=a(S.check,H,4,0)),Z=te=0,S.mode=4;case 4:for(;Z<16;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}S.head&&(S.head.xflags=255&te,S.head.os=te>>8),512&S.flags&&(H[0]=255&te,H[1]=te>>>8&255,S.check=a(S.check,H,2,0)),Z=te=0,S.mode=5;case 5:if(1024&S.flags){for(;Z<16;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}S.length=te,S.head&&(S.head.extra_len=te),512&S.flags&&(H[0]=255&te,H[1]=te>>>8&255,S.check=a(S.check,H,2,0)),Z=te=0}else S.head&&(S.head.extra=null);S.mode=6;case 6:if(1024&S.flags&&(se<(X=S.length)&&(X=se),X&&(S.head&&(f=S.head.extra_len-S.length,S.head.extra||(S.head.extra=new Array(S.head.extra_len)),s.arraySet(S.head.extra,J,z,X,f)),512&S.flags&&(S.check=a(S.check,J,X,z)),se-=X,z+=X,S.length-=X),S.length))break e;S.length=0,S.mode=7;case 7:if(2048&S.flags){if(se===0)break e;for(X=0;f=J[z+X++],S.head&&f&&S.length<65536&&(S.head.name+=String.fromCharCode(f)),f&&X<se;);if(512&S.flags&&(S.check=a(S.check,J,X,z)),se-=X,z+=X,f)break e}else S.head&&(S.head.name=null);S.length=0,S.mode=8;case 8:if(4096&S.flags){if(se===0)break e;for(X=0;f=J[z+X++],S.head&&f&&S.length<65536&&(S.head.comment+=String.fromCharCode(f)),f&&X<se;);if(512&S.flags&&(S.check=a(S.check,J,X,z)),se-=X,z+=X,f)break e}else S.head&&(S.head.comment=null);S.mode=9;case 9:if(512&S.flags){for(;Z<16;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(te!==(65535&S.check)){E.msg="header crc mismatch",S.mode=30;break}Z=te=0}S.head&&(S.head.hcrc=S.flags>>9&1,S.head.done=!0),E.adler=S.check=0,S.mode=12;break;case 10:for(;Z<32;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}E.adler=S.check=x(te),Z=te=0,S.mode=11;case 11:if(S.havedict===0)return E.next_out=de,E.avail_out=Ie,E.next_in=z,E.avail_in=se,S.hold=te,S.bits=Z,2;E.adler=S.check=1,S.mode=12;case 12:if(R===5||R===6)break e;case 13:if(S.last){te>>>=7&Z,Z-=7&Z,S.mode=27;break}for(;Z<3;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}switch(S.last=1&te,Z-=1,3&(te>>>=1)){case 0:S.mode=14;break;case 1:if(P(S),S.mode=20,R!==6)break;te>>>=2,Z-=2;break e;case 2:S.mode=17;break;case 3:E.msg="invalid block type",S.mode=30}te>>>=2,Z-=2;break;case 14:for(te>>>=7&Z,Z-=7&Z;Z<32;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if((65535&te)!=(te>>>16^65535)){E.msg="invalid stored block lengths",S.mode=30;break}if(S.length=65535&te,Z=te=0,S.mode=15,R===6)break e;case 15:S.mode=16;case 16:if(X=S.length){if(se<X&&(X=se),Ie<X&&(X=Ie),X===0)break e;s.arraySet(ae,J,z,X,de),se-=X,z+=X,Ie-=X,de+=X,S.length-=X;break}S.mode=12;break;case 17:for(;Z<14;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(S.nlen=257+(31&te),te>>>=5,Z-=5,S.ndist=1+(31&te),te>>>=5,Z-=5,S.ncode=4+(15&te),te>>>=4,Z-=4,286<S.nlen||30<S.ndist){E.msg="too many length or distance symbols",S.mode=30;break}S.have=0,S.mode=18;case 18:for(;S.have<S.ncode;){for(;Z<3;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}S.lens[j[S.have++]]=7&te,te>>>=3,Z-=3}for(;S.have<19;)S.lens[j[S.have++]]=0;if(S.lencode=S.lendyn,S.lenbits=7,$={bits:S.lenbits},G=h(0,S.lens,0,19,S.lencode,0,S.work,$),S.lenbits=$.bits,G){E.msg="invalid code lengths set",S.mode=30;break}S.have=0,S.mode=19;case 19:for(;S.have<S.nlen+S.ndist;){for(;he=(N=S.lencode[te&(1<<S.lenbits)-1])>>>16&255,ye=65535&N,!((ue=N>>>24)<=Z);){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(ye<16)te>>>=ue,Z-=ue,S.lens[S.have++]=ye;else{if(ye===16){for(O=ue+2;Z<O;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(te>>>=ue,Z-=ue,S.have===0){E.msg="invalid bit length repeat",S.mode=30;break}f=S.lens[S.have-1],X=3+(3&te),te>>>=2,Z-=2}else if(ye===17){for(O=ue+3;Z<O;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}Z-=ue,f=0,X=3+(7&(te>>>=ue)),te>>>=3,Z-=3}else{for(O=ue+7;Z<O;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}Z-=ue,f=0,X=11+(127&(te>>>=ue)),te>>>=7,Z-=7}if(S.have+X>S.nlen+S.ndist){E.msg="invalid bit length repeat",S.mode=30;break}for(;X--;)S.lens[S.have++]=f}}if(S.mode===30)break;if(S.lens[256]===0){E.msg="invalid code -- missing end-of-block",S.mode=30;break}if(S.lenbits=9,$={bits:S.lenbits},G=h(p,S.lens,0,S.nlen,S.lencode,0,S.work,$),S.lenbits=$.bits,G){E.msg="invalid literal/lengths set",S.mode=30;break}if(S.distbits=6,S.distcode=S.distdyn,$={bits:S.distbits},G=h(g,S.lens,S.nlen,S.ndist,S.distcode,0,S.work,$),S.distbits=$.bits,G){E.msg="invalid distances set",S.mode=30;break}if(S.mode=20,R===6)break e;case 20:S.mode=21;case 21:if(6<=se&&258<=Ie){E.next_out=de,E.avail_out=Ie,E.next_in=z,E.avail_in=se,S.hold=te,S.bits=Z,l(E,ve),de=E.next_out,ae=E.output,Ie=E.avail_out,z=E.next_in,J=E.input,se=E.avail_in,te=S.hold,Z=S.bits,S.mode===12&&(S.back=-1);break}for(S.back=0;he=(N=S.lencode[te&(1<<S.lenbits)-1])>>>16&255,ye=65535&N,!((ue=N>>>24)<=Z);){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(he&&!(240&he)){for(ke=ue,q=he,B=ye;he=(N=S.lencode[B+((te&(1<<ke+q)-1)>>ke)])>>>16&255,ye=65535&N,!(ke+(ue=N>>>24)<=Z);){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}te>>>=ke,Z-=ke,S.back+=ke}if(te>>>=ue,Z-=ue,S.back+=ue,S.length=ye,he===0){S.mode=26;break}if(32&he){S.back=-1,S.mode=12;break}if(64&he){E.msg="invalid literal/length code",S.mode=30;break}S.extra=15&he,S.mode=22;case 22:if(S.extra){for(O=S.extra;Z<O;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}S.length+=te&(1<<S.extra)-1,te>>>=S.extra,Z-=S.extra,S.back+=S.extra}S.was=S.length,S.mode=23;case 23:for(;he=(N=S.distcode[te&(1<<S.distbits)-1])>>>16&255,ye=65535&N,!((ue=N>>>24)<=Z);){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(!(240&he)){for(ke=ue,q=he,B=ye;he=(N=S.distcode[B+((te&(1<<ke+q)-1)>>ke)])>>>16&255,ye=65535&N,!(ke+(ue=N>>>24)<=Z);){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}te>>>=ke,Z-=ke,S.back+=ke}if(te>>>=ue,Z-=ue,S.back+=ue,64&he){E.msg="invalid distance code",S.mode=30;break}S.offset=ye,S.extra=15&he,S.mode=24;case 24:if(S.extra){for(O=S.extra;Z<O;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}S.offset+=te&(1<<S.extra)-1,te>>>=S.extra,Z-=S.extra,S.back+=S.extra}if(S.offset>S.dmax){E.msg="invalid distance too far back",S.mode=30;break}S.mode=25;case 25:if(Ie===0)break e;if(X=ve-Ie,S.offset>X){if((X=S.offset-X)>S.whave&&S.sane){E.msg="invalid distance too far back",S.mode=30;break}_e=X>S.wnext?(X-=S.wnext,S.wsize-X):S.wnext-X,X>S.length&&(X=S.length),re=S.window}else re=ae,_e=de-S.offset,X=S.length;for(Ie<X&&(X=Ie),Ie-=X,S.length-=X;ae[de++]=re[_e++],--X;);S.length===0&&(S.mode=21);break;case 26:if(Ie===0)break e;ae[de++]=S.length,Ie--,S.mode=21;break;case 27:if(S.wrap){for(;Z<32;){if(se===0)break e;se--,te|=J[z++]<<Z,Z+=8}if(ve-=Ie,E.total_out+=ve,S.total+=ve,ve&&(E.adler=S.check=S.flags?a(S.check,ae,ve,de-ve):o(S.check,ae,ve,de-ve)),ve=Ie,(S.flags?te:x(te))!==S.check){E.msg="incorrect data check",S.mode=30;break}Z=te=0}S.mode=28;case 28:if(S.wrap&&S.flags){for(;Z<32;){if(se===0)break e;se--,te+=J[z++]<<Z,Z+=8}if(te!==(4294967295&S.total)){E.msg="incorrect length check",S.mode=30;break}Z=te=0}S.mode=29;case 29:G=1;break e;case 30:G=-3;break e;case 31:return-4;case 32:default:return m}return E.next_out=de,E.avail_out=Ie,E.next_in=z,E.avail_in=se,S.hold=te,S.bits=Z,(S.wsize||ve!==E.avail_out&&S.mode<30&&(S.mode<27||R!==4))&&D(E,E.output,E.next_out,ve-E.avail_out)?(S.mode=31,-4):(we-=E.avail_in,ve-=E.avail_out,E.total_in+=we,E.total_out+=ve,S.total+=ve,S.wrap&&ve&&(E.adler=S.check=S.flags?a(S.check,ae,ve,E.next_out-ve):o(S.check,ae,ve,E.next_out-ve)),E.data_type=S.bits+(S.last?64:0)+(S.mode===12?128:0)+(S.mode===20||S.mode===15?256:0),(we==0&&ve===0||R===4)&&G===v&&(G=-5),G)},i.inflateEnd=function(E){if(!E||!E.state)return m;var R=E.state;return R.window&&(R.window=null),E.state=null,v},i.inflateGetHeader=function(E,R){var S;return E&&E.state&&2&(S=E.state).wrap?((S.head=R).done=!1,v):m},i.inflateSetDictionary=function(E,R){var S,J=R.length;return E&&E.state?(S=E.state).wrap!==0&&S.mode!==11?m:S.mode===11&&o(1,R,J,0)!==S.check?-3:D(E,R,J,J)?(S.mode=31,-4):(S.havedict=1,v):m},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var s=n("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(p,g,v,m,_,u,C,x){var A,V,M,F,L,I,b,w,P,D=x.bits,E=0,R=0,S=0,J=0,ae=0,z=0,de=0,se=0,Ie=0,te=0,Z=null,we=0,ve=new s.Buf16(16),X=new s.Buf16(16),_e=null,re=0;for(E=0;E<=15;E++)ve[E]=0;for(R=0;R<m;R++)ve[g[v+R]]++;for(ae=D,J=15;1<=J&&ve[J]===0;J--);if(J<ae&&(ae=J),J===0)return _[u++]=20971520,_[u++]=20971520,x.bits=1,0;for(S=1;S<J&&ve[S]===0;S++);for(ae<S&&(ae=S),E=se=1;E<=15;E++)if(se<<=1,(se-=ve[E])<0)return-1;if(0<se&&(p===0||J!==1))return-1;for(X[1]=0,E=1;E<15;E++)X[E+1]=X[E]+ve[E];for(R=0;R<m;R++)g[v+R]!==0&&(C[X[g[v+R]]++]=R);if(I=p===0?(Z=_e=C,19):p===1?(Z=o,we-=257,_e=a,re-=257,256):(Z=l,_e=h,-1),E=S,L=u,de=R=te=0,M=-1,F=(Ie=1<<(z=ae))-1,p===1&&852<Ie||p===2&&592<Ie)return 1;for(;;){for(b=E-de,P=C[R]<I?(w=0,C[R]):C[R]>I?(w=_e[re+C[R]],Z[we+C[R]]):(w=96,0),A=1<<E-de,S=V=1<<z;_[L+(te>>de)+(V-=A)]=b<<24|w<<16|P|0,V!==0;);for(A=1<<E-1;te&A;)A>>=1;if(A!==0?(te&=A-1,te+=A):te=0,R++,--ve[E]==0){if(E===J)break;E=g[v+C[R]]}if(ae<E&&(te&F)!==M){for(de===0&&(de=ae),L+=S,se=1<<(z=E-de);z+de<J&&!((se-=ve[z+de])<=0);)z++,se<<=1;if(Ie+=1<<z,p===1&&852<Ie||p===2&&592<Ie)return 1;_[M=te&F]=ae<<24|z<<16|L-u|0}}return te!==0&&(_[L+te]=E-de<<24|64<<16|0),x.bits=ae,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var s=n("../utils/common"),o=0,a=1;function l(N){for(var H=N.length;0<=--H;)N[H]=0}var h=0,p=29,g=256,v=g+1+p,m=30,_=19,u=2*v+1,C=15,x=16,A=7,V=256,M=16,F=17,L=18,I=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],b=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=new Array(2*(v+2));l(D);var E=new Array(2*m);l(E);var R=new Array(512);l(R);var S=new Array(256);l(S);var J=new Array(p);l(J);var ae,z,de,se=new Array(m);function Ie(N,H,j,T,W){this.static_tree=N,this.extra_bits=H,this.extra_base=j,this.elems=T,this.max_length=W,this.has_stree=N&&N.length}function te(N,H){this.dyn_tree=N,this.max_code=0,this.stat_desc=H}function Z(N){return N<256?R[N]:R[256+(N>>>7)]}function we(N,H){N.pending_buf[N.pending++]=255&H,N.pending_buf[N.pending++]=H>>>8&255}function ve(N,H,j){N.bi_valid>x-j?(N.bi_buf|=H<<N.bi_valid&65535,we(N,N.bi_buf),N.bi_buf=H>>x-N.bi_valid,N.bi_valid+=j-x):(N.bi_buf|=H<<N.bi_valid&65535,N.bi_valid+=j)}function X(N,H,j){ve(N,j[2*H],j[2*H+1])}function _e(N,H){for(var j=0;j|=1&N,N>>>=1,j<<=1,0<--H;);return j>>>1}function re(N,H,j){var T,W,Y=new Array(C+1),ne=0;for(T=1;T<=C;T++)Y[T]=ne=ne+j[T-1]<<1;for(W=0;W<=H;W++){var le=N[2*W+1];le!==0&&(N[2*W]=_e(Y[le]++,le))}}function ue(N){var H;for(H=0;H<v;H++)N.dyn_ltree[2*H]=0;for(H=0;H<m;H++)N.dyn_dtree[2*H]=0;for(H=0;H<_;H++)N.bl_tree[2*H]=0;N.dyn_ltree[2*V]=1,N.opt_len=N.static_len=0,N.last_lit=N.matches=0}function he(N){8<N.bi_valid?we(N,N.bi_buf):0<N.bi_valid&&(N.pending_buf[N.pending++]=N.bi_buf),N.bi_buf=0,N.bi_valid=0}function ye(N,H,j,T){var W=2*H,Y=2*j;return N[W]<N[Y]||N[W]===N[Y]&&T[H]<=T[j]}function ke(N,H,j){for(var T=N.heap[j],W=j<<1;W<=N.heap_len&&(W<N.heap_len&&ye(H,N.heap[W+1],N.heap[W],N.depth)&&W++,!ye(H,T,N.heap[W],N.depth));)N.heap[j]=N.heap[W],j=W,W<<=1;N.heap[j]=T}function q(N,H,j){var T,W,Y,ne,le=0;if(N.last_lit!==0)for(;T=N.pending_buf[N.d_buf+2*le]<<8|N.pending_buf[N.d_buf+2*le+1],W=N.pending_buf[N.l_buf+le],le++,T===0?X(N,W,H):(X(N,(Y=S[W])+g+1,H),(ne=I[Y])!==0&&ve(N,W-=J[Y],ne),X(N,Y=Z(--T),j),(ne=b[Y])!==0&&ve(N,T-=se[Y],ne)),le<N.last_lit;);X(N,V,H)}function B(N,H){var j,T,W,Y=H.dyn_tree,ne=H.stat_desc.static_tree,le=H.stat_desc.has_stree,me=H.stat_desc.elems,Se=-1;for(N.heap_len=0,N.heap_max=u,j=0;j<me;j++)Y[2*j]!==0?(N.heap[++N.heap_len]=Se=j,N.depth[j]=0):Y[2*j+1]=0;for(;N.heap_len<2;)Y[2*(W=N.heap[++N.heap_len]=Se<2?++Se:0)]=1,N.depth[W]=0,N.opt_len--,le&&(N.static_len-=ne[2*W+1]);for(H.max_code=Se,j=N.heap_len>>1;1<=j;j--)ke(N,Y,j);for(W=me;j=N.heap[1],N.heap[1]=N.heap[N.heap_len--],ke(N,Y,1),T=N.heap[1],N.heap[--N.heap_max]=j,N.heap[--N.heap_max]=T,Y[2*W]=Y[2*j]+Y[2*T],N.depth[W]=(N.depth[j]>=N.depth[T]?N.depth[j]:N.depth[T])+1,Y[2*j+1]=Y[2*T+1]=W,N.heap[1]=W++,ke(N,Y,1),2<=N.heap_len;);N.heap[--N.heap_max]=N.heap[1],function(oe,$e){var Je,We,pt,ze,tn,at,Ge=$e.dyn_tree,yn=$e.max_code,hn=$e.stat_desc.static_tree,Xr=$e.stat_desc.has_stree,Nn=$e.stat_desc.extra_bits,br=$e.stat_desc.extra_base,lt=$e.stat_desc.max_length,Dn=0;for(ze=0;ze<=C;ze++)oe.bl_count[ze]=0;for(Ge[2*oe.heap[oe.heap_max]+1]=0,Je=oe.heap_max+1;Je<u;Je++)lt<(ze=Ge[2*Ge[2*(We=oe.heap[Je])+1]+1]+1)&&(ze=lt,Dn++),Ge[2*We+1]=ze,yn<We||(oe.bl_count[ze]++,tn=0,br<=We&&(tn=Nn[We-br]),at=Ge[2*We],oe.opt_len+=at*(ze+tn),Xr&&(oe.static_len+=at*(hn[2*We+1]+tn)));if(Dn!==0){do{for(ze=lt-1;oe.bl_count[ze]===0;)ze--;oe.bl_count[ze]--,oe.bl_count[ze+1]+=2,oe.bl_count[lt]--,Dn-=2}while(0<Dn);for(ze=lt;ze!==0;ze--)for(We=oe.bl_count[ze];We!==0;)yn<(pt=oe.heap[--Je])||(Ge[2*pt+1]!==ze&&(oe.opt_len+=(ze-Ge[2*pt+1])*Ge[2*pt],Ge[2*pt+1]=ze),We--)}}(N,H),re(Y,Se,N.bl_count)}function f(N,H,j){var T,W,Y=-1,ne=H[1],le=0,me=7,Se=4;for(ne===0&&(me=138,Se=3),H[2*(j+1)+1]=65535,T=0;T<=j;T++)W=ne,ne=H[2*(T+1)+1],++le<me&&W===ne||(le<Se?N.bl_tree[2*W]+=le:W!==0?(W!==Y&&N.bl_tree[2*W]++,N.bl_tree[2*M]++):le<=10?N.bl_tree[2*F]++:N.bl_tree[2*L]++,Y=W,Se=(le=0)===ne?(me=138,3):W===ne?(me=6,3):(me=7,4))}function G(N,H,j){var T,W,Y=-1,ne=H[1],le=0,me=7,Se=4;for(ne===0&&(me=138,Se=3),T=0;T<=j;T++)if(W=ne,ne=H[2*(T+1)+1],!(++le<me&&W===ne)){if(le<Se)for(;X(N,W,N.bl_tree),--le!=0;);else W!==0?(W!==Y&&(X(N,W,N.bl_tree),le--),X(N,M,N.bl_tree),ve(N,le-3,2)):le<=10?(X(N,F,N.bl_tree),ve(N,le-3,3)):(X(N,L,N.bl_tree),ve(N,le-11,7));Y=W,Se=(le=0)===ne?(me=138,3):W===ne?(me=6,3):(me=7,4)}}l(se);var $=!1;function O(N,H,j,T){ve(N,(h<<1)+(T?1:0),3),function(W,Y,ne,le){he(W),we(W,ne),we(W,~ne),s.arraySet(W.pending_buf,W.window,Y,ne,W.pending),W.pending+=ne}(N,H,j)}i._tr_init=function(N){$||(function(){var H,j,T,W,Y,ne=new Array(C+1);for(W=T=0;W<p-1;W++)for(J[W]=T,H=0;H<1<<I[W];H++)S[T++]=W;for(S[T-1]=W,W=Y=0;W<16;W++)for(se[W]=Y,H=0;H<1<<b[W];H++)R[Y++]=W;for(Y>>=7;W<m;W++)for(se[W]=Y<<7,H=0;H<1<<b[W]-7;H++)R[256+Y++]=W;for(j=0;j<=C;j++)ne[j]=0;for(H=0;H<=143;)D[2*H+1]=8,H++,ne[8]++;for(;H<=255;)D[2*H+1]=9,H++,ne[9]++;for(;H<=279;)D[2*H+1]=7,H++,ne[7]++;for(;H<=287;)D[2*H+1]=8,H++,ne[8]++;for(re(D,v+1,ne),H=0;H<m;H++)E[2*H+1]=5,E[2*H]=_e(H,5);ae=new Ie(D,I,g+1,v,C),z=new Ie(E,b,0,m,C),de=new Ie(new Array(0),w,0,_,A)}(),$=!0),N.l_desc=new te(N.dyn_ltree,ae),N.d_desc=new te(N.dyn_dtree,z),N.bl_desc=new te(N.bl_tree,de),N.bi_buf=0,N.bi_valid=0,ue(N)},i._tr_stored_block=O,i._tr_flush_block=function(N,H,j,T){var W,Y,ne=0;0<N.level?(N.strm.data_type===2&&(N.strm.data_type=function(le){var me,Se=4093624447;for(me=0;me<=31;me++,Se>>>=1)if(1&Se&&le.dyn_ltree[2*me]!==0)return o;if(le.dyn_ltree[18]!==0||le.dyn_ltree[20]!==0||le.dyn_ltree[26]!==0)return a;for(me=32;me<g;me++)if(le.dyn_ltree[2*me]!==0)return a;return o}(N)),B(N,N.l_desc),B(N,N.d_desc),ne=function(le){var me;for(f(le,le.dyn_ltree,le.l_desc.max_code),f(le,le.dyn_dtree,le.d_desc.max_code),B(le,le.bl_desc),me=_-1;3<=me&&le.bl_tree[2*P[me]+1]===0;me--);return le.opt_len+=3*(me+1)+5+5+4,me}(N),W=N.opt_len+3+7>>>3,(Y=N.static_len+3+7>>>3)<=W&&(W=Y)):W=Y=j+5,j+4<=W&&H!==-1?O(N,H,j,T):N.strategy===4||Y===W?(ve(N,2+(T?1:0),3),q(N,D,E)):(ve(N,4+(T?1:0),3),function(le,me,Se,oe){var $e;for(ve(le,me-257,5),ve(le,Se-1,5),ve(le,oe-4,4),$e=0;$e<oe;$e++)ve(le,le.bl_tree[2*P[$e]+1],3);G(le,le.dyn_ltree,me-1),G(le,le.dyn_dtree,Se-1)}(N,N.l_desc.max_code+1,N.d_desc.max_code+1,ne+1),q(N,N.dyn_ltree,N.dyn_dtree)),ue(N),T&&he(N)},i._tr_tally=function(N,H,j){return N.pending_buf[N.d_buf+2*N.last_lit]=H>>>8&255,N.pending_buf[N.d_buf+2*N.last_lit+1]=255&H,N.pending_buf[N.l_buf+N.last_lit]=255&j,N.last_lit++,H===0?N.dyn_ltree[2*j]++:(N.matches++,H--,N.dyn_ltree[2*(S[j]+g+1)]++,N.dyn_dtree[2*Z(H)]++),N.last_lit===N.lit_bufsize-1},i._tr_align=function(N){ve(N,2,3),X(N,V,D),function(H){H.bi_valid===16?(we(H,H.bi_buf),H.bi_buf=0,H.bi_valid=0):8<=H.bi_valid&&(H.pending_buf[H.pending++]=255&H.bi_buf,H.bi_buf>>=8,H.bi_valid-=8)}(N)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(s){(function(o,a){if(!o.setImmediate){var l,h,p,g,v=1,m={},_=!1,u=o.document,C=Object.getPrototypeOf&&Object.getPrototypeOf(o);C=C&&C.setTimeout?C:o,l={}.toString.call(o.process)==="[object process]"?function(M){process.nextTick(function(){A(M)})}:function(){if(o.postMessage&&!o.importScripts){var M=!0,F=o.onmessage;return o.onmessage=function(){M=!1},o.postMessage("","*"),o.onmessage=F,M}}()?(g="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",V,!1):o.attachEvent("onmessage",V),function(M){o.postMessage(g+M,"*")}):o.MessageChannel?((p=new MessageChannel).port1.onmessage=function(M){A(M.data)},function(M){p.port2.postMessage(M)}):u&&"onreadystatechange"in u.createElement("script")?(h=u.documentElement,function(M){var F=u.createElement("script");F.onreadystatechange=function(){A(M),F.onreadystatechange=null,h.removeChild(F),F=null},h.appendChild(F)}):function(M){setTimeout(A,0,M)},C.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var F=new Array(arguments.length-1),L=0;L<F.length;L++)F[L]=arguments[L+1];var I={callback:M,args:F};return m[v]=I,l(v),v++},C.clearImmediate=x}function x(M){delete m[M]}function A(M){if(_)setTimeout(A,0,M);else{var F=m[M];if(F){_=!0;try{(function(L){var I=L.callback,b=L.args;switch(b.length){case 0:I();break;case 1:I(b[0]);break;case 2:I(b[0],b[1]);break;case 3:I(b[0],b[1],b[2]);break;default:I.apply(a,b)}})(F)}finally{x(M),_=!1}}}}function V(M){M.source===o&&typeof M.data=="string"&&M.data.indexOf(g)===0&&A(+M.data.slice(g.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof pa<"u"?pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(h1);var aD=h1.exports;const lD=oD(aD),cD={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},uD={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},dD={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},hD={class:"export-tabs tabs"},fD={class:"export-content"},pD={class:"export-options",style:{"margin-bottom":"20px"}},gD={class:"form-group"},mD={class:"export-meta"},vD={class:"meta-item"},yD={class:"meta-item"},_D={class:"meta-item"},bD={class:"export-options",style:{"margin-bottom":"20px"}},wD={class:"form-group"},ED={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},ID={class:"coming-soon"},CD={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},xD={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},kD={key:1,class:"export-success"},TD={__name:"ExportModal",setup(t){const e=vn(),n=dn(),r=Fo(),i=xe(()=>n.getProject(e.projectId)),s=pe("json"),o=pe(""),a=pe(""),l=pe(!0);Kt(i,_=>{_&&!a.value&&(a.value=_.name||"presentation")},{immediate:!0});function h(){const _=n.exportProject(e.projectId);if(!_)return;const u=new Blob([_],{type:"application/json"}),C=URL.createObjectURL(u),x=document.createElement("a");x.href=C,x.download=`${a.value||"project"}.learnforge.json`,x.click(),URL.revokeObjectURL(C),o.value="success",setTimeout(()=>o.value="",3e3)}function p(_,u="presentation"){return String(_).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||u}function g(_,u){return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
body {
  min-height: 100vh;
  font-family: ${(_==null?void 0:_.fontFamily)||"Inter, sans-serif"};
  background:
    radial-gradient(circle at 18% 18%, rgba(108, 71, 255, 0.24), transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(0, 201, 167, 0.18), transparent 28%),
    linear-gradient(180deg, #08101f 0%, #050916 62%, #02050b 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.lf-shell {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.lf-shell::before,
.lf-shell::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  filter: blur(24px);
  pointer-events: none;
}
.lf-shell::before {
  width: 420px;
  height: 420px;
  top: -120px;
  left: -80px;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.18), transparent 72%);
}
.lf-shell::after {
  width: 520px;
  height: 520px;
  right: -160px;
  bottom: -200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.22), transparent 72%);
}
.lf-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at center, rgba(0,0,0,0.65), transparent 88%);
  pointer-events: none;
}
.lf-stage-shell {
  position: relative;
  z-index: 1;
  padding: 18px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 30px 80px rgba(0,0,0,.34);
}
.lf-stage-shell::before {
  content: '';
  position: absolute;
  inset: 12px;
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.08);
  pointer-events: none;
}
.presentation {
  position: relative;
  width: 960px;
  height: 540px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(0,0,0,.5);
  transform-origin: center center;
}
.slide {
  position: absolute;
  inset: 0;
  display: none;
  overflow: hidden;
  color: ${(_==null?void 0:_.textColor)||"#1a1a2e"};
}
.slide.active { display: block; }
.lf-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: rgba(255,255,255,.72);
  font-size: 16px;
  background: rgba(255,255,255,.06);
}
.lf-el {
  position: absolute;
  box-sizing: border-box;
}
.lf-el-content {
  width: 100%;
  height: 100%;
}
.lf-text {
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-break: break-word;
  white-space: pre-wrap;
}
.lf-image,
.lf-video,
.lf-video iframe,
.lf-video video {
  width: 100%;
  height: 100%;
}
.lf-video {
  background: #000;
  border-radius: 10px;
  overflow: hidden;
}
.lf-button-wrap,
.lf-divider-wrap,
.lf-audio-wrap {
  width: 100%;
  height: 100%;
}
.lf-button {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 16px;
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease, opacity .18s ease;
}
.lf-button:hover { transform: translateY(-1px); }
.lf-button:focus-visible,
.lf-hotspot-btn:focus-visible,
.nav-btn:focus-visible,
.dot:focus-visible,
.lf-quiz-submit:focus-visible,
.lf-quiz-reset:focus-visible,
.lf-quiz-option:focus-visible {
  outline: 2px solid rgba(255,255,255,.9);
  outline-offset: 2px;
}
.lf-hotspot-btn {
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(15, 23, 42, .26);
}
.lf-hotspot-popup {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 12px);
  transform: translateX(-50%) translateY(6px);
  min-width: 220px;
  max-width: 300px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, .08);
  box-shadow: 0 24px 48px rgba(15, 23, 42, .22);
  opacity: 0;
  visibility: hidden;
  transition: opacity .16s ease, transform .16s ease, visibility .16s ease;
  z-index: 20;
  overflow: hidden;
}
.lf-hotspot-popup.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}
.lf-hotspot-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 14px;
  border-bottom: 1px solid rgba(15, 23, 42, .08);
}
.lf-hotspot-title {
  font-size: 14px;
  font-weight: 700;
}
.lf-hotspot-close {
  border: none;
  background: transparent;
  color: inherit;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}
.lf-hotspot-body {
  padding: 12px 14px 14px;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap;
}
.lf-audio-card {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
}
.lf-audio-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
.lf-audio-label {
  min-width: 0;
  flex: 0 0 auto;
  max-width: 180px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lf-audio-player {
  flex: 1;
  min-width: 120px;
}
.lf-divider {
  width: 100%;
  height: 100%;
  margin: 0;
  border: none;
}
.lf-quiz {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border: 1px solid rgba(15, 23, 42, .08);
  border-radius: 14px;
  overflow: auto;
  box-shadow: 0 14px 34px rgba(15, 23, 42, .08);
}
.lf-quiz-question {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
}
.lf-quiz-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.lf-quiz-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1.5px solid #dbe3ef;
  background: rgba(255,255,255,.92);
  text-align: left;
  cursor: pointer;
  transition: border-color .16s ease, background .16s ease, transform .16s ease;
}
.lf-quiz-option:hover:not([disabled]) {
  transform: translateY(-1px);
}
.lf-quiz-option.selected {
  background: rgba(108, 71, 255, .12);
}
.lf-quiz-option.correct {
  border-color: #16a34a;
  background: rgba(22, 163, 74, .10);
  color: #14532d;
}
.lf-quiz-option.wrong {
  border-color: #ef4444;
  background: rgba(239, 68, 68, .10);
  color: #991b1b;
}
.lf-quiz-option[disabled] {
  cursor: default;
}
.lf-quiz-letter {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: rgba(15, 23, 42, .08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex: 0 0 auto;
}
.lf-quiz-text {
  flex: 1;
}
.lf-quiz-actions {
  display: flex;
  gap: 10px;
  margin-top: 2px;
}
.lf-quiz-submit,
.lf-quiz-reset {
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}
.lf-quiz-submit[disabled] {
  opacity: .45;
  cursor: not-allowed;
}
.lf-quiz-feedback {
  display: none;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.5;
}
.lf-quiz-feedback.show { display: block; }
.lf-quiz-feedback.correct {
  background: rgba(22, 163, 74, .12);
  color: #166534;
}
.lf-quiz-feedback.wrong {
  background: rgba(239, 68, 68, .12);
  color: #991b1b;
}
.nav {
  position: fixed;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  display: ${(u==null?void 0:u.showNavControls)===!1?"none":"flex"};
  align-items: center;
  gap: 12px;
  z-index: 5;
}
.nav-btn {
  border: 1px solid rgba(255,255,255,.16);
  background: rgba(255,255,255,.1);
  color: #fff;
  min-width: 92px;
  padding: 10px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  backdrop-filter: blur(10px);
  transition: background .18s ease, opacity .18s ease, transform .18s ease;
}
.nav-btn:hover:not(:disabled) {
  background: rgba(255,255,255,.18);
  transform: translateY(-1px);
}
.nav-btn:disabled {
  opacity: .3;
  cursor: default;
}
.nav-counter {
  min-width: 74px;
  text-align: center;
  color: rgba(255,255,255,.76);
  font-size: 13px;
}
.dot-nav {
  position: fixed;
  left: 50%;
  bottom: 74px;
  transform: translateX(-50%);
  display: ${(u==null?void 0:u.showNavControls)===!1?"none":"flex"};
  align-items: center;
  gap: 8px;
  z-index: 5;
}
.dot {
  width: 10px;
  height: 8px;
  border-radius: 999px;
  border: none;
  padding: 0;
  background: rgba(255,255,255,.28);
  cursor: pointer;
  transition: width .18s ease, background .18s ease;
}
.dot.active {
  width: 30px;
  background: #ffffff;
}
.progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: ${(_==null?void 0:_.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(u==null?void 0:u.showProgress)===!1?"none":"block"};
  z-index: 6;
}
@media (max-width: 900px) {
  .lf-stage-shell {
    padding: 10px;
    border-radius: 20px;
  }
  .dot-nav { bottom: 66px; }
  .nav { bottom: 12px; }
  .nav-btn {
    min-width: 78px;
    padding: 9px 14px;
  }
}
`}function v(){return`
(function () {
  var dataNode = document.getElementById('lf-data');
  if (!dataNode) return;

  var project;
  try {
    project = JSON.parse(dataNode.textContent || '{}');
  } catch (error) {
    console.error('LearnForge export could not read project data.', error);
    var mountError = document.getElementById('presentation');
    if (mountError) mountError.innerHTML = '<div class="lf-empty">Unable to load exported slides.</div>';
    return;
  }

  var slides = Array.isArray(project.slides)
    ? project.slides.slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); })
    : [];
  var settings = project.settings || {};
  var theme = project.theme || {};
  var state = { current: 0, timer: null };
  var slideLookup = {};
  var slideNodes = [];

  var mount = document.getElementById('presentation');
  var counter = document.getElementById('counter');
  var progress = document.getElementById('progress');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  var dotNav = document.getElementById('dot-nav');

  slides.forEach(function (slide, index) {
    slideLookup[slide.id] = index;
    var node = renderSlide(slide, index);
    mount.appendChild(node);
    slideNodes.push(node);
  });

  if (!slideNodes.length) {
    mount.innerHTML = '<div class="lf-empty">This export has no slides.</div>';
    if (counter) counter.textContent = '0 / 0';
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }

  renderDots();

  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { next(); });

  if (settings.allowKeyboardNav !== false) {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        next();
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        prev();
      }
    });
  }

  document.addEventListener('click', function (event) {
    if (event.target.closest('.lf-hotspot-btn') || event.target.closest('.lf-hotspot-popup')) return;
    document.querySelectorAll('.lf-hotspot-popup.is-open').forEach(function (popup) {
      popup.classList.remove('is-open');
    });
  });

  window.addEventListener('resize', resizeStage);
  resizeStage();
  show(0);

  function resizeStage() {
    var stage = document.getElementById('presentation');
    if (!stage) return;
    var scale = Math.min(window.innerWidth / 960, window.innerHeight / 540, 1.5);
    stage.style.transform = 'scale(' + scale + ')';
  }

  function renderDots() {
    if (!dotNav) return;
    dotNav.innerHTML = '';
    slideNodes.forEach(function (_, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'dot';
      button.setAttribute('aria-label', 'Go to slide ' + (index + 1));
      button.addEventListener('click', function () { show(index); });
      dotNav.appendChild(button);
    });
  }

  function next() {
    if (state.current < slideNodes.length - 1) {
      show(state.current + 1);
      return;
    }
    if (settings.loop) show(0);
  }

  function prev() {
    if (state.current > 0) {
      show(state.current - 1);
      return;
    }
    if (settings.loop) show(slideNodes.length - 1);
  }

  function show(index) {
    if (!slideNodes.length) return;
    if (index < 0) index = 0;
    if (index > slideNodes.length - 1) index = slideNodes.length - 1;

    slideNodes.forEach(function (node, nodeIndex) {
      node.classList.toggle('active', nodeIndex === index);
    });

    state.current = index;
    if (counter) counter.textContent = (index + 1) + ' / ' + slideNodes.length;
    if (progress) progress.style.width = (((index + 1) / slideNodes.length) * 100) + '%';
    if (prevBtn) prevBtn.disabled = !settings.loop && index === 0;
    if (nextBtn) nextBtn.disabled = !settings.loop && index === slideNodes.length - 1;

    Array.prototype.forEach.call(dotNav ? dotNav.children : [], function (dot, dotIndex) {
      dot.classList.toggle('active', dotIndex === index);
    });

    closeHotspots();
    pauseInactiveMedia(index);
    triggerLoadInteractions(slideNodes[index]);
    scheduleAutoAdvance();
  }

  function scheduleAutoAdvance() {
    window.clearTimeout(state.timer);
    if (!settings.autoPlay) return;
    var currentSlide = slides[state.current] || {};
    var duration = Number(currentSlide.duration || 0);
    if (duration > 0) {
      state.timer = window.setTimeout(function () { next(); }, duration * 1000);
    }
  }

  function closeHotspots() {
    document.querySelectorAll('.lf-hotspot-popup.is-open').forEach(function (popup) {
      popup.classList.remove('is-open');
    });
  }

  function pauseInactiveMedia(activeIndex) {
    slideNodes.forEach(function (slideNode, index) {
      if (index === activeIndex) return;
      slideNode.querySelectorAll('audio, video').forEach(function (media) {
        try { media.pause(); } catch (error) {}
      });
    });
  }

  function resolveSlideTarget(value) {
    var raw = String(value == null ? '' : value).trim();
    if (!raw) return null;
    if (/^d+$/.test(raw)) {
      var numericIndex = Number(raw) - 1;
      if (numericIndex >= 0 && numericIndex < slideNodes.length) return numericIndex;
    }
    if (Object.prototype.hasOwnProperty.call(slideLookup, raw)) {
      return slideLookup[raw];
    }
    var lower = raw.toLowerCase();
    var titleIndex = slides.findIndex(function (slide) {
      return String(slide.title || '').trim().toLowerCase() === lower;
    });
    return titleIndex >= 0 ? titleIndex : null;
  }

  function runAction(action, value, sourceNode) {
    if (!action || action === 'none') return;
    if (action === 'navigate') {
      var targetIndex = resolveSlideTarget(value);
      if (targetIndex !== null) show(targetIndex);
      return;
    }
    if (action === 'openUrl' || action === 'link') {
      var url = String(value || '').trim();
      if (url) window.open(url, '_blank', 'noopener');
      return;
    }
    if (action === 'showPopup') {
      var popup = sourceNode ? sourceNode.querySelector('.lf-hotspot-popup') : null;
      if (popup) {
        popup.classList.toggle('is-open');
      } else if (value) {
        window.alert(String(value));
      }
      return;
    }
    if (action === 'playAudio') {
      var audioTarget = resolveMediaNode('audio', value, sourceNode);
      if (audioTarget) audioTarget.play().catch(function () {});
      return;
    }
    if (action === 'pauseVideo') {
      var videoTarget = resolveMediaNode('video', value, sourceNode);
      if (videoTarget) videoTarget.pause();
      return;
    }
    if (action === 'submit') {
      var scope = sourceNode ? sourceNode.closest('.slide') : slideNodes[state.current];
      var submitButton = scope ? scope.querySelector('.lf-quiz-submit') : null;
      if (submitButton) submitButton.click();
    }
  }

  function resolveMediaNode(tagName, value, sourceNode) {
    var scope = sourceNode ? sourceNode.closest('.slide') : slideNodes[state.current];
    if (!scope) return null;
    var target = String(value || '').trim();
    if (target) {
      var byElement = scope.querySelector('[data-el-id="' + cssEscape(target) + '"] ' + tagName);
      if (byElement) return byElement;
    }
    return scope.querySelector(tagName);
  }

  function triggerLoadInteractions(slideNode) {
    if (!slideNode) return;
    slideNode.querySelectorAll('.lf-el').forEach(function (node) {
      var interactions = node._lfLoadInteractions || [];
      interactions.forEach(function (interaction) {
        runAction(interaction.action, interaction.value, node);
      });
    });
  }

  function buildElementBox(el, interactive) {
    var node = document.createElement('div');
    node.className = 'lf-el lf-el-' + (el.type || 'unknown');
    node.dataset.elId = el.id || '';
    node.dataset.elType = el.type || '';
    node.style.left = (el.x || 0) + 'px';
    node.style.top = (el.y || 0) + 'px';
    node.style.width = (el.width || 0) + 'px';
    node.style.height = (el.height || 0) + 'px';
    node.style.opacity = el.opacity == null ? '1' : String(el.opacity);
    node.style.zIndex = String(el.zIndex || 1);
    node.style.transform = el.rotation ? 'rotate(' + el.rotation + 'deg)' : '';
    node.style.pointerEvents = interactive ? 'auto' : 'none';
    return node;
  }

  function renderSlide(slide, slideIndex) {
    var node = document.createElement('section');
    node.className = 'slide';
    node.dataset.slideId = slide.id || '';
    node.dataset.slideIndex = String(slideIndex);
    applySlideBackground(node, slide);

    var elements = Array.isArray(slide.elements)
      ? slide.elements.slice().sort(function (a, b) { return (a.zIndex || 0) - (b.zIndex || 0); })
      : [];

    elements.forEach(function (el) {
      if (el && el.visible !== false) {
        node.appendChild(renderElement(el));
      }
    });

    return node;
  }

  function applySlideBackground(node, slide) {
    if (slide.backgroundType === 'gradient' && slide.backgroundGradient) {
      node.style.background = slide.backgroundGradient;
      return;
    }
    if (slide.backgroundType === 'image' && slide.backgroundImage) {
      node.style.backgroundImage = 'url("' + String(slide.backgroundImage).replace(/"/g, '&quot;') + '")';
      node.style.backgroundSize = 'cover';
      node.style.backgroundPosition = 'center';
      return;
    }
    node.style.background = slide.background || theme.bgColor || '#ffffff';
  }

  function renderElement(el) {
    var interactions = Array.isArray(el.interactions) ? el.interactions.filter(Boolean) : [];
    var interactive = ['button', 'hotspot', 'quiz', 'video', 'audio'].includes(el.type) || interactions.length > 0;
    var wrapper = buildElementBox(el, interactive);
    var content = el.content || {};

    if (el.type === 'text' || el.type === 'heading') {
      var text = document.createElement('div');
      text.className = 'lf-text';
      text.textContent = content.text || '';
      text.style.fontSize = (content.fontSize || (el.type === 'heading' ? 36 : 18)) + 'px';
      text.style.fontFamily = content.fontFamily || theme.fontFamily || 'Inter, sans-serif';
      text.style.fontWeight = String(content.fontWeight || (el.type === 'heading' ? '700' : '400'));
      text.style.fontStyle = content.fontStyle || 'normal';
      text.style.textDecoration = content.textDecoration || 'none';
      text.style.textAlign = content.textAlign || 'left';
      text.style.color = content.color || theme.textColor || '#1a1a2e';
      text.style.lineHeight = String(content.lineHeight || (el.type === 'heading' ? 1.2 : 1.5));
      text.style.letterSpacing = (content.letterSpacing || 0) + 'px';
      text.style.textTransform = content.textTransform || 'none';
      wrapper.appendChild(text);
    } else if (el.type === 'image') {
      var image = document.createElement('img');
      image.className = 'lf-image';
      image.src = content.src || '';
      image.alt = content.alt || '';
      image.style.objectFit = content.objectFit || 'cover';
      image.style.borderRadius = (content.borderRadius || 0) + 'px';
      image.style.border = (content.borderWidth || 0) + 'px solid ' + (content.borderColor || 'transparent');
      wrapper.appendChild(image);
    } else if (el.type === 'shape') {
      wrapper.appendChild(renderShape(el));
    } else if (el.type === 'button') {
      var buttonWrap = document.createElement('div');
      buttonWrap.className = 'lf-button-wrap';
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'lf-button';
      button.textContent = content.label || 'Button';
      button.style.fontSize = (content.fontSize || 15) + 'px';
      button.style.fontWeight = String(content.fontWeight || 600);
      button.style.fontFamily = content.fontFamily || theme.fontFamily || 'Inter, sans-serif';
      button.style.letterSpacing = (content.letterSpacing || 0) + 'px';
      button.style.borderRadius = (content.borderRadius == null ? 8 : content.borderRadius) + 'px';
      applyButtonStyle(button, content, theme);
      buttonWrap.appendChild(button);
      wrapper.appendChild(buttonWrap);

      if (content.action && content.action !== 'none') {
        button.addEventListener('click', function (event) {
          event.stopPropagation();
          var action = content.action === 'link' ? 'openUrl' : content.action;
          runAction(action, content.target, wrapper);
        });
      }
    } else if (el.type === 'hotspot') {
      wrapper.appendChild(renderHotspot(content));
    } else if (el.type === 'video') {
      wrapper.appendChild(renderVideo(content));
    } else if (el.type === 'audio') {
      wrapper.appendChild(renderAudio(content));
    } else if (el.type === 'quiz') {
      wrapper.appendChild(renderQuiz(content));
    } else if (el.type === 'divider') {
      var dividerWrap = document.createElement('div');
      dividerWrap.className = 'lf-divider-wrap';
      var divider = document.createElement('hr');
      divider.className = 'lf-divider';
      divider.style.borderTop = (content.thickness || 2) + 'px solid ' + (content.color || '#e2e8f0');
      dividerWrap.appendChild(divider);
      wrapper.appendChild(dividerWrap);
    }

    bindInteractions(wrapper, interactions);
    return wrapper;
  }

  function renderShape(el) {
    var content = el.content || {};
    var type = content.shapeType || 'rectangle';
    if (['triangle', 'diamond', 'star', 'arrow'].includes(type)) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', String(el.width || 0));
      svg.setAttribute('height', String(el.height || 0));
      svg.setAttribute('viewBox', '0 0 ' + (el.width || 0) + ' ' + (el.height || 0));
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.style.width = '100%';
      svg.style.height = '100%';
      var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      polygon.setAttribute('points', getPolygonPoints(type, el.width || 0, el.height || 0));
      polygon.setAttribute('fill', content.fillColor || '#6c47ff');
      polygon.setAttribute('stroke', content.borderColor || 'transparent');
      polygon.setAttribute('stroke-width', String(content.borderWidth || 0));
      svg.appendChild(polygon);
      return svg;
    }

    var div = document.createElement('div');
    div.className = 'lf-el-content';
    div.style.background = content.fillColor || '#6c47ff';
    div.style.border = (content.borderWidth || 0) + 'px solid ' + (content.borderColor || 'transparent');
    div.style.opacity = content.opacity == null ? '1' : String(content.opacity);
    div.style.borderRadius = type === 'circle' ? '50%' : (content.borderRadius || 0) + 'px';
    return div;
  }

  function getPolygonPoints(type, width, height) {
    if (type === 'triangle') return (width / 2) + ',0 ' + width + ',' + height + ' 0,' + height;
    if (type === 'diamond') return (width / 2) + ',0 ' + width + ',' + (height / 2) + ' ' + (width / 2) + ',' + height + ' 0,' + (height / 2);
    if (type === 'arrow') {
      return '0,' + (height * 0.3) + ' ' + (width * 0.6) + ',' + (height * 0.3) + ' ' + (width * 0.6) + ',0 ' + width + ',' + (height / 2) + ' ' + (width * 0.6) + ',' + height + ' ' + (width * 0.6) + ',' + (height * 0.7) + ' 0,' + (height * 0.7);
    }
    if (type === 'star') {
      var points = [];
      var cx = width / 2;
      var cy = height / 2;
      var outerR = Math.min(width, height) / 2;
      var innerR = outerR * 0.4;
      for (var index = 0; index < 10; index++) {
        var angle = ((index * 36) - 90) * Math.PI / 180;
        var radius = index % 2 === 0 ? outerR : innerR;
        points.push((cx + radius * Math.cos(angle)) + ',' + (cy + radius * Math.sin(angle)));
      }
      return points.join(' ');
    }
    return '';
  }

  function applyButtonStyle(button, content, themeConfig) {
    var primary = themeConfig.primaryColor || '#6c47ff';
    var variants = {
      primary: { background: primary, color: '#ffffff', border: 'none' },
      secondary: { background: '#f0f0f0', color: '#333333', border: '1px solid #dbe3ef' },
      outline: { background: 'transparent', color: primary, border: '2px solid ' + primary },
      ghost: { background: 'transparent', color: primary, border: 'none' },
      danger: { background: '#ef4444', color: '#ffffff', border: 'none' },
    };
    var variant = variants[content.variant || 'primary'] || variants.primary;
    button.style.background = content.bgColor || variant.background;
    button.style.color = content.textColor || variant.color;
    button.style.border = content.borderColor ? '1px solid ' + content.borderColor : variant.border;
  }

  function renderHotspot(content) {
    var root = document.createElement('div');
    root.className = 'lf-el-content';
    root.style.position = 'relative';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'lf-hotspot-btn';
    button.textContent = content.icon || '?';
    button.style.background = content.bgColor || '#6c47ff';
    button.style.color = content.iconColor || '#ffffff';
    button.style.borderRadius = (content.borderRadius == null ? 999 : content.borderRadius) >= 999 ? '50%' : (content.borderRadius || 0) + 'px';

    var popup = document.createElement('div');
    popup.className = 'lf-hotspot-popup';
    popup.style.background = content.popupBgColor || '#ffffff';
    popup.style.color = content.popupTextColor || '#1a1a2e';

    var header = document.createElement('div');
    header.className = 'lf-hotspot-header';
    var title = document.createElement('div');
    title.className = 'lf-hotspot-title';
    title.textContent = content.popupTitle || 'Info';
    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'lf-hotspot-close';
    close.textContent = '×';
    close.addEventListener('click', function (event) {
      event.stopPropagation();
      popup.classList.remove('is-open');
    });
    header.appendChild(title);
    header.appendChild(close);

    var body = document.createElement('div');
    body.className = 'lf-hotspot-body';
    body.textContent = content.popupContent || 'Add your content in the editor.';

    popup.appendChild(header);
    popup.appendChild(body);

    button.addEventListener('click', function (event) {
      event.stopPropagation();
      popup.classList.toggle('is-open');
    });

    root.appendChild(button);
    root.appendChild(popup);
    return root;
  }

  function renderVideo(content) {
    var wrapper = document.createElement('div');
    wrapper.className = 'lf-video';
    var src = String(content.src || '').trim();
    var embed = toEmbedUrl(src);

    if (embed) {
      var frame = document.createElement('iframe');
      frame.src = embed;
      frame.setAttribute('frameborder', '0');
      frame.setAttribute('allowfullscreen', 'true');
      frame.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      wrapper.appendChild(frame);
      return wrapper;
    }

    if (!src) {
      var empty = document.createElement('div');
      empty.className = 'lf-empty';
      empty.textContent = 'No video source';
      wrapper.appendChild(empty);
      return wrapper;
    }

    var video = document.createElement('video');
    video.src = src;
    if (content.poster) video.poster = content.poster;
    video.controls = content.controls !== false;
    video.autoplay = Boolean(content.autoplay);
    video.loop = Boolean(content.loop);
    video.muted = Boolean(content.muted);
    video.style.objectFit = content.objectFit || 'cover';
    wrapper.appendChild(video);
    return wrapper;
  }

  function toEmbedUrl(src) {
    if (!src) return '';
    if (src.includes('youtube.com/embed/')) return src;
    if (src.includes('youtu.be/') || src.includes('youtube.com/watch')) {
      var ytMatch = src.match(/(?:v=|youtu.be/)([^&?/]+)/);
      return ytMatch ? 'https://www.youtube.com/embed/' + ytMatch[1] : '';
    }
    if (src.includes('player.vimeo.com/video/')) return src;
    if (src.includes('vimeo.com/')) {
      var vimeoMatch = src.match(/vimeo.com/(?:video/)?(d+)/);
      return vimeoMatch ? 'https://player.vimeo.com/video/' + vimeoMatch[1] : '';
    }
    return '';
  }

  function renderAudio(content) {
    var wrap = document.createElement('div');
    wrap.className = 'lf-audio-card';
    wrap.style.background = content.bgColor || '#ede7ff';

    var icon = document.createElement('div');
    icon.className = 'lf-audio-icon';
    icon.style.background = content.accentColor || '#6c47ff';
    icon.textContent = '♪';

    var label = document.createElement('div');
    label.className = 'lf-audio-label';
    label.style.color = content.textColor || '#555555';
    label.textContent = content.label || 'Audio Player';

    var audio = document.createElement('audio');
    audio.className = 'lf-audio-player';
    audio.src = content.src || '';
    audio.controls = content.controls !== false;
    audio.autoplay = Boolean(content.autoplay);
    audio.loop = Boolean(content.loop);

    wrap.appendChild(icon);
    wrap.appendChild(label);
    wrap.appendChild(audio);
    return wrap;
  }

  function renderQuiz(content) {
    var root = document.createElement('div');
    root.className = 'lf-quiz';
    root.style.background = content.cardBgColor || '#ffffff';
    root.style.color = content.questionColor || '#1a1a2e';
    root.style.setProperty('--quiz-accent', content.accentColor || '#6c47ff');

    var question = document.createElement('p');
    question.className = 'lf-quiz-question';
    question.style.color = content.questionColor || '#1a1a2e';
    question.textContent = content.question || 'Question';

    var optionsWrap = document.createElement('div');
    optionsWrap.className = 'lf-quiz-options';
    var optionButtons = [];
    var selectedIndex = null;
    var submitted = false;
    var correctIndex = Number(content.correctIndex || 0);

    (Array.isArray(content.options) ? content.options : []).forEach(function (option, optionIndex) {
      var optionBtn = document.createElement('button');
      optionBtn.type = 'button';
      optionBtn.className = 'lf-quiz-option';
      optionBtn.style.borderColor = '#dbe3ef';

      var letter = document.createElement('span');
      letter.className = 'lf-quiz-letter';
      letter.textContent = String.fromCharCode(65 + optionIndex);

      var text = document.createElement('span');
      text.className = 'lf-quiz-text';
      text.textContent = option;

      optionBtn.appendChild(letter);
      optionBtn.appendChild(text);
      optionBtn.addEventListener('click', function () {
        if (submitted) return;
        selectedIndex = optionIndex;
        syncQuizState();
      });
      optionsWrap.appendChild(optionBtn);
      optionButtons.push(optionBtn);
    });

    var feedback = document.createElement('div');
    feedback.className = 'lf-quiz-feedback';

    var actions = document.createElement('div');
    actions.className = 'lf-quiz-actions';

    var submit = document.createElement('button');
    submit.type = 'button';
    submit.className = 'lf-quiz-submit';
    submit.textContent = 'Submit';
    submit.style.background = content.accentColor || '#6c47ff';
    submit.style.color = '#ffffff';
    submit.disabled = true;
    submit.addEventListener('click', function () {
      if (selectedIndex == null) return;
      submitted = true;
      syncQuizState();
    });

    var reset = document.createElement('button');
    reset.type = 'button';
    reset.className = 'lf-quiz-reset';
    reset.textContent = 'Try Again';
    reset.style.background = '#f0f0f0';
    reset.style.color = '#333333';
    reset.style.display = 'none';
    reset.addEventListener('click', function () {
      selectedIndex = null;
      submitted = false;
      syncQuizState();
    });

    actions.appendChild(submit);
    actions.appendChild(reset);

    root.appendChild(question);
    root.appendChild(optionsWrap);
    root.appendChild(feedback);
    root.appendChild(actions);

    function syncQuizState() {
      optionButtons.forEach(function (button, optionIndex) {
        button.classList.remove('selected', 'correct', 'wrong');
        button.disabled = submitted;
        button.style.borderColor = optionIndex === selectedIndex ? (content.accentColor || '#6c47ff') : '#dbe3ef';
        button.style.background = optionIndex === selectedIndex ? 'rgba(108, 71, 255, .10)' : 'rgba(255,255,255,.92)';
        if (submitted) {
          if (optionIndex === correctIndex) {
            button.classList.add('correct');
          } else if (optionIndex === selectedIndex && selectedIndex !== correctIndex) {
            button.classList.add('wrong');
          }
        } else if (optionIndex === selectedIndex) {
          button.classList.add('selected');
        }
      });

      submit.disabled = selectedIndex == null || submitted;
      submit.style.display = submitted ? 'none' : 'inline-flex';
      reset.style.display = submitted ? 'inline-flex' : 'none';

      if (!submitted) {
        feedback.className = 'lf-quiz-feedback';
        feedback.textContent = '';
        return;
      }

      var correct = selectedIndex === correctIndex;
      feedback.className = 'lf-quiz-feedback show ' + (correct ? 'correct' : 'wrong');
      feedback.textContent = correct
        ? '✓ Correct!'
        : ('✗ Incorrect.' + (content.explanation ? ' ' + content.explanation : ''));
    }

    return root;
  }

  function bindInteractions(wrapper, interactions) {
    if (!interactions.length) return;

    wrapper._lfLoadInteractions = interactions.filter(function (interaction) {
      return interaction && interaction.trigger === 'load';
    });

    interactions.forEach(function (interaction) {
      if (!interaction || !interaction.action) return;
      if (interaction.trigger === 'click') {
        wrapper.addEventListener('click', function (event) {
          if (event.target.closest('.lf-button')) return;
          runAction(interaction.action, interaction.value, wrapper);
        });
      }
      if (interaction.trigger === 'hover') {
        wrapper.addEventListener('mouseenter', function () {
          runAction(interaction.action, interaction.value, wrapper);
        });
      }
    });
  }

  function cssEscape(value) {
    return String(value).replace(/([ #;?%&,.+*~':"!^$[]()=>|/])/g, '\\$1');
  }
})();
`}async function m(){var J,ae,z;const _=i.value;if(!_)return;o.value="processing";const u=new lD,C=u.folder("assets");let x=0;async function A(de,se="media"){if((!de||de.startsWith("data:")||de.startsWith("http://localhost")||de.startsWith("blob:"))&&de.startsWith("data:"))return de;try{const te=await(await fetch(de)).blob();let Z="bin";const we=te.type;if(we.includes("image/png")?Z="png":we.includes("image/jpeg")?Z="jpg":we.includes("image/gif")?Z="gif":we.includes("image/svg")?Z="svg":we.includes("image/webp")?Z="webp":we.includes("video/mp4")?Z="mp4":we.includes("audio/mpeg")&&(Z="mp3"),Z==="bin"){const X=de.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);X&&(Z=X[1])}x++;const ve=`${se}_${x}.${Z}`;return C.file(ve,te),`assets/${ve}`}catch(Ie){return console.warn("Could not fetch asset:",de,Ie),de}}const V=JSON.parse(JSON.stringify([..._.slides||[]])).sort((de,se)=>(de.order??0)-(se.order??0));if(l.value)for(const de of V){de.backgroundType==="image"&&de.backgroundImage&&(de.backgroundImage=await A(de.backgroundImage,"bg"));for(const se of de.elements||[])se.type==="image"&&((J=se.content)!=null&&J.src)&&(se.content.src=await A(se.content.src,"img")),se.type==="video"&&((ae=se.content)!=null&&ae.src)&&!se.content.src.includes("youtube")&&!se.content.src.includes("youtu.be")&&(se.content.src=await A(se.content.src,"vid")),se.type==="audio"&&((z=se.content)!=null&&z.src)&&(se.content.src=await A(se.content.src,"aud"))}const M=p(a.value||_.name||"presentation"),F={name:_.name,theme:_.theme||{},settings:_.settings||{},slides:V},L=JSON.stringify(F).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),I=g(_.theme,_.settings),b=v(),w=`<script id="lf-data" type="application/json">${L}<\/script>`,D=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${M}</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="lf-shell">
<div class="progress" id="progress"></div>
<div class="lf-grid"></div>
<div class="lf-stage-shell">
  <div class="presentation" id="presentation"></div>
</div>
<div class="dot-nav" id="dot-nav"></div>
<nav class="nav">
  <button class="nav-btn" id="prev-btn" type="button">← Prev</button>
  <span class="nav-counter" id="counter">1 / ${V.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${w}
<script src="script.js"><\/script>
</body>
</html>`;u.file("index.html",D),u.file("style.css",I),u.file("script.js",b);const E=await u.generateAsync({type:"blob"}),R=URL.createObjectURL(E),S=document.createElement("a");S.href=R,S.download=`${M}.zip`,S.click(),URL.revokeObjectURL(R),o.value="success",setTimeout(()=>o.value="",3e3)}return(_,u)=>(K(),_t(Ls,{title:"Export Project",size:"md",onClose:u[9]||(u[9]=C=>Ee(e).showExportModal=!1)},{footer:Et(()=>[d("button",{class:"btn btn-secondary",onClick:u[8]||(u[8]=C=>Ee(e).showExportModal=!1)},"Close")]),default:Et(()=>{var C,x,A,V,M;return[Ee(r).user?(K(),Q(Pe,{key:1},[d("div",hD,[d("button",{class:Me(["tab-btn",s.value==="json"&&"active"]),onClick:u[2]||(u[2]=F=>s.value="json")},"JSON Project",2),d("button",{class:Me(["tab-btn",s.value==="html"&&"active"]),onClick:u[3]||(u[3]=F=>s.value="html")},"HTML Package",2),d("button",{class:Me(["tab-btn",s.value==="scorm"&&"active"]),onClick:u[4]||(u[4]=F=>s.value="scorm")},"SCORM",2)]),d("div",fD,[s.value==="json"?(K(),Q(Pe,{key:0},[u[20]||(u[20]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"📦"),d("div",null,[d("h4",null,"JSON Project File"),d("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another LearnForge instance.")])],-1)),d("div",pD,[d("div",gD,[u[15]||(u[15]=d("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),Ye(d("input",{type:"text","onUpdate:modelValue":u[5]||(u[5]=F=>a.value=F),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ht,a.value]])])]),d("div",mD,[d("div",vD,[u[16]||(u[16]=d("span",null,"Project",-1)),d("strong",null,fe((C=i.value)==null?void 0:C.name),1)]),d("div",yD,[u[17]||(u[17]=d("span",null,"Slides",-1)),d("strong",null,fe(((A=(x=i.value)==null?void 0:x.slides)==null?void 0:A.length)||0),1)]),d("div",_D,[u[18]||(u[18]=d("span",null,"Elements",-1)),d("strong",null,fe(((M=(V=i.value)==null?void 0:V.slides)==null?void 0:M.reduce((F,L)=>{var I;return F+(((I=L.elements)==null?void 0:I.length)||0)},0))||0),1)])]),d("button",{class:"btn btn-primary export-btn",onClick:h},[...u[19]||(u[19]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ae(" Download JSON ",-1)])])],64)):s.value==="html"?(K(),Q(Pe,{key:1},[u[24]||(u[24]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"🌐"),d("div",null,[d("h4",null,"Standalone HTML Package"),d("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),d("div",bD,[d("div",wD,[u[21]||(u[21]=d("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),Ye(d("input",{type:"text","onUpdate:modelValue":u[6]||(u[6]=F=>a.value=F),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[ht,a.value]])]),d("label",ED,[Ye(d("input",{type:"checkbox","onUpdate:modelValue":u[7]||(u[7]=F=>l.value=F)},null,512),[[Em,l.value]]),u[22]||(u[22]=Ae(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),u[25]||(u[25]=d("div",{class:"export-features"},[d("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),d("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),d("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),d("div",{class:"feature-item"},"✓ Progress bar"),d("div",{class:"feature-item"},"✓ Responsive scaling"),d("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),d("button",{class:"btn btn-primary export-btn",onClick:m},[...u[23]||(u[23]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ae(" Download HTML ",-1)])])],64)):s.value==="scorm"?(K(),Q(Pe,{key:2},[u[29]||(u[29]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"🎓"),d("div",null,[d("h4",null,"SCORM Package"),d("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),d("div",ID,[(K(),Q("svg",CD,[...u[26]||(u[26]=[d("circle",{cx:"12",cy:"12",r:"10"},null,-1),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),u[27]||(u[27]=d("h4",null,"Coming Soon",-1)),u[28]||(u[28]=d("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):Te("",!0),ot(qr,{name:"fade"},{default:Et(()=>[o.value==="processing"?(K(),Q("div",xD,[...u[30]||(u[30]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),Ae(" Generating package... Please wait. ",-1)])])):o.value==="success"?(K(),Q("div",kD,[...u[31]||(u[31]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("polyline",{points:"20 6 9 17 4 12"})],-1),Ae(" Export successful! Check your downloads folder. ",-1)])])):Te("",!0)]),_:1})])],64)):(K(),Q("div",cD,[(K(),Q("svg",uD,[...u[10]||(u[10]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),u[13]||(u[13]=d("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),u[14]||(u[14]=d("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),d("div",dD,[d("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:u[0]||(u[0]=F=>Ee(r).loginWithGoogle())},[...u[11]||(u[11]=[d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M12 8v8m-4-4h8"})],-1),Ae(" Continue with Google ",-1)])]),d("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:u[1]||(u[1]=F=>Ee(r).loginWithMicrosoft())},[...u[12]||(u[12]=[d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"7",height:"7"}),d("rect",{x:"14",y:"3",width:"7",height:"7"}),d("rect",{x:"14",y:"14",width:"7",height:"7"}),d("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),Ae(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},SD=Rt(TD,[["__scopeId","data-v-18da96e9"]]),AD={key:0,class:"editor-view"},RD={class:"editor-topbar"},PD={class:"topbar-left"},OD={class:"project-name-wrap"},ND=["value"],DD={class:"save-label"},MD={class:"topbar-center"},LD={key:0,class:"slide-position"},VD={class:"topbar-right"},$D={class:"editor-body"},FD={class:"authoring-rail"},BD=["onClick","data-tooltip"],UD={key:0,class:"rail-icon"},zD={key:1,class:"rail-icon"},jD={key:2,class:"rail-icon"},qD={key:3,class:"rail-icon"},HD={key:4,class:"rail-icon"},WD={key:5,class:"rail-icon"},GD={key:6,class:"rail-icon"},KD={key:7,class:"rail-icon"},JD={key:8,class:"rail-icon"},QD={class:"right-panel"},YD={class:"panel-tabs"},XD=["onClick","data-tooltip"],ZD={class:"tab-icon"},e8={class:"tab-label"},t8={class:"panel-content"},n8={key:1,class:"editor-not-found"},r8={__name:"EditorView",setup(t){const e=Um(),n=ju(),r=vn(),i=dn(),s=Fo(),o=xe(()=>e.params.id),a=xe(()=>i.getProject(o.value)),l=xe(()=>{var L;return[...((L=a.value)==null?void 0:L.slides)||[]].sort((I,b)=>I.order-b.order)}),h=pe(null);let p=!1,g=null;Kt(()=>a.value,L=>{if(L){if(p){p=!1;return}g&&clearTimeout(g),g=setTimeout(()=>{r.pushHistory(L)},600)}},{deep:!0}),Kt(()=>s.isAuthReady,L=>{if(L){if(!a.value){n.push({name:"dashboard"});return}r.setProject(o.value),l.value.length>0&&r.setCurrentSlide(l.value[0].id),r.pushHistory(a.value)}},{immediate:!0});const v=xe(()=>{const L=a.value;return L?`Saved ${new Date(L.updatedAt).toLocaleTimeString()}`:""}),m=xe(()=>{switch(r.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});E4({undo:()=>{if(r.canUndo()){const L=r.undo();L&&(p=!0,i.updateProject(o.value,L))}},redo:()=>{if(r.canRedo()){const L=r.redo();L&&(p=!0,i.updateProject(o.value,L))}},delete:()=>{r.selectedElementId&&(i.deleteElement(r.projectId,r.currentSlideId,r.selectedElementId),r.clearSelection())},escape:()=>{r.clearSelection(),r.setActiveTool("select")},copy:()=>{var I,b,w,P;const L=(P=(w=(b=(I=a.value)==null?void 0:I.slides)==null?void 0:b.find(D=>D.id===r.currentSlideId))==null?void 0:w.elements)==null?void 0:P.find(D=>D.id===r.selectedElementId);L&&r.setClipboard(L)},paste:()=>{if(r.clipboard&&r.currentSlideId){const L=r.clipboard;i.addElement(r.projectId,r.currentSlideId,L.type,{...L,x:L.x+20,y:L.y+20,id:void 0})}},duplicate:()=>{if(r.selectedElementId){const L=i.duplicateElement(r.projectId,r.currentSlideId,r.selectedElementId);L&&r.selectElement(L.id)}},zoomIn:()=>r.zoomIn(),zoomOut:()=>r.zoomOut(),zoomReset:()=>r.zoomReset(),toggleGrid:()=>r.toggleGrid(),nudge:(L,I)=>{var w,P,D,E;if(!r.selectedElementId)return;const b=(E=(D=(P=(w=a.value)==null?void 0:w.slides)==null?void 0:P.find(R=>R.id===r.currentSlideId))==null?void 0:D.elements)==null?void 0:E.find(R=>R.id===r.selectedElementId);b&&i.updateElement(r.projectId,r.currentSlideId,r.selectedElementId,{x:b.x+L,y:b.y+I})},selectAll:()=>{var I,b,w;(((w=(b=(I=a.value)==null?void 0:I.slides)==null?void 0:b.find(P=>P.id===r.currentSlideId))==null?void 0:w.elements)||[]).forEach((P,D)=>r.selectElement(P.id,D>0))}});function _(){n.push({name:"dashboard"})}function u(){n.push({name:"preview",params:{id:o.value}})}function C(L,I="Image"){if(!r.projectId||!r.currentSlideId||!L)return;const b=new Image;b.onload=()=>{const D=Math.min(420/b.width,280/b.height,1),E=Math.max(120,Math.round(b.width*D)),R=Math.max(80,Math.round(b.height*D)),S=Math.max(24,Math.round((960-E)/2)),J=Math.max(24,Math.round((540-R)/2)),ae=i.addElement(r.projectId,r.currentSlideId,"image",{x:S,y:J,width:E,height:R,content:{src:L,alt:I,objectFit:"cover"}});ae&&(r.selectElement(ae.id),r.setRightPanel("properties"),r.setActiveTool("select"))},b.src=L}function x(L){const[I]=Array.from(L.target.files||[]);if(!I||!I.type.startsWith("image/"))return;const b=new FileReader;b.onload=()=>C(String(b.result||""),I.name),b.readAsDataURL(I),L.target.value=""}function A(){var L;(L=h.value)==null||L.click()}const V=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function M(L){if(L==="text"){r.setActiveTool("text");return}if(L==="resources"){r.setActiveTool("image");return}if(L==="interactive-elements"){r.setActiveTool("hotspot");return}if(L==="interactive-questions"){r.setActiveTool("quiz");return}if(L==="widgets"){r.setActiveTool("shape");return}if(L==="insert"){A();return}if(L==="style"){r.setRightPanel("properties");return}if(L==="background"){r.clearSelection(),r.setRightPanel("properties");return}L==="pages"&&r.toggleSlidePanel()}function F(L){return L==="text"?["text","heading"].includes(r.activeTool):L==="resources"?r.activeTool==="image":L==="interactive-elements"?["hotspot","button"].includes(r.activeTool):L==="interactive-questions"?r.activeTool==="quiz":L==="widgets"?["shape","video","audio"].includes(r.activeTool):L==="insert"?!1:L==="style"||L==="background"?r.rightPanelTab==="properties":L==="pages"?r.showSlidePanel:!1}return(L,I)=>a.value?(K(),Q("div",AD,[d("input",{ref_key:"imageInputRef",ref:h,type:"file",accept:"image/*",class:"sr-only",onChange:x},null,544),d("header",RD,[d("div",PD,[d("button",{class:"btn btn-ghost btn-sm back-btn",onClick:_,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...I[4]||(I[4]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Ae(" Dashboard ",-1)])]),d("div",OD,[d("input",{value:a.value.name,class:"project-name-input",onChange:I[0]||(I[0]=b=>Ee(i).updateProject(o.value,{name:b.target.value}))},null,40,ND)]),d("span",DD,fe(v.value),1)]),d("div",MD,[Ee(r).currentSlideId?(K(),Q("span",LD," Slide "+fe(l.value.findIndex(b=>b.id===Ee(r).currentSlideId)+1)+" of "+fe(l.value.length),1)):Te("",!0)]),d("div",VD,[d("button",{class:Me(["btn btn-ghost btn-sm",Ee(r).showAIPanel&&"active-btn"]),onClick:I[1]||(I[1]=b=>{Ee(r).showAIPanel=!Ee(r).showAIPanel,Ee(r).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...I[5]||(I[5]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Ae(" AI ",-1)])],2),d("button",{class:"btn btn-ghost btn-sm",onClick:I[2]||(I[2]=b=>{Ee(r).showThemeManager=!Ee(r).showThemeManager,Ee(r).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...I[6]||(I[6]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M12 8v4m0 4h.01"})],-1),Ae(" Theme ",-1)])]),d("button",{class:"btn btn-secondary btn-sm",onClick:u,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...I[7]||(I[7]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),Ae(" Preview ",-1)])]),d("button",{class:"btn btn-primary btn-sm",onClick:I[3]||(I[3]=b=>Ee(r).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...I[8]||(I[8]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ae(" Export ",-1)])])])]),ot(W6),d("div",$D,[d("aside",FD,[(K(),Q(Pe,null,Ke(V,b=>d("button",{key:b.id,class:Me(["rail-option",F(b.id)&&"active"]),onClick:w=>M(b.id),"data-tooltip":b.label,"data-tooltip-position":"right"},[b.id==="text"?(K(),Q("span",UD,"T")):b.id==="resources"?(K(),Q("span",zD,[...I[9]||(I[9]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),d("polyline",{points:"21 15 16 10 5 21"})],-1)])])):b.id==="interactive-elements"?(K(),Q("span",jD,[...I[10]||(I[10]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):b.id==="interactive-questions"?(K(),Q("span",qD,[...I[11]||(I[11]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):b.id==="widgets"?(K(),Q("span",HD,[...I[12]||(I[12]=[Zt('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5c99e548><rect x="3" y="3" width="7" height="7" data-v-5c99e548></rect><rect x="14" y="3" width="7" height="7" data-v-5c99e548></rect><rect x="14" y="14" width="7" height="7" data-v-5c99e548></rect><rect x="3" y="14" width="7" height="7" data-v-5c99e548></rect></svg>',1)])])):b.id==="insert"?(K(),Q("span",WD,[...I[13]||(I[13]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):b.id==="style"?(K(),Q("span",GD,[...I[14]||(I[14]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):b.id==="background"?(K(),Q("span",KD,[...I[15]||(I[15]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),d("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):b.id==="pages"?(K(),Q("span",JD,[...I[16]||(I[16]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),d("polyline",{points:"13 2 13 9 20 9"})],-1)])])):Te("",!0),Ae(" "+fe(b.label),1)],10,BD)),64))]),ot(qr,{name:"side-panel-slide"},{default:Et(()=>[Ee(r).showSlidePanel?(K(),_t(N4,{key:0})):Te("",!0)]),_:1}),ot(z3),d("aside",QD,[d("div",YD,[(K(),Q(Pe,null,Ke([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],b=>d("button",{key:b.id,class:Me(["panel-tab",Ee(r).rightPanelTab===b.id&&"active"]),onClick:w=>Ee(r).setRightPanel(b.id),"data-tooltip":`Open ${b.label}`,"data-tooltip-position":"bottom"},[d("span",ZD,fe(b.icon),1),d("span",e8,fe(b.label),1)],10,XD)),64))]),d("div",t8,[ot(qr,{name:"editor-panel-switch",mode:"out-in"},{default:Et(()=>[(K(),Q("div",{key:m.value,class:"panel-content-view"},[Ee(r).rightPanelTab==="properties"?(K(),_t(S6,{key:0})):Ee(r).rightPanelTab==="layers"?(K(),_t(eR,{key:1})):Ee(r).rightPanelTab==="ai"?(K(),_t(NN,{key:2})):Ee(r).rightPanelTab==="theme"?(K(),_t(sD,{key:3})):Te("",!0)]))]),_:1})])])]),Ee(r).showExportModal?(K(),_t(SD,{key:0})):Te("",!0)])):(K(),Q("div",n8,[I[17]||(I[17]=d("h2",null,"Project not found",-1)),I[18]||(I[18]=d("p",null,"This project may have been deleted or the link is invalid.",-1)),d("button",{class:"btn btn-primary",onClick:_},"Go to Dashboard")]))}},i8=Rt(r8,[["__scopeId","data-v-5c99e548"]]),s8={key:0,class:"preview-stage"},o8=["src","alt"],a8={key:2,style:{width:"100%",height:"100%"}},l8=["viewBox"],c8=["points","fill","stroke","stroke-width"],u8=["points","fill","stroke","stroke-width"],d8={key:3,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},h8={key:4,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",position:"relative"}},f8=["onClick"],p8={key:0,class:"hotspot-popup",style:{position:"absolute",left:"60px",top:"0",background:"#fff",color:"#111",borderRadius:"8px",padding:"12px 16px",minWidth:"160px",maxWidth:"220px",boxShadow:"0 8px 24px rgba(0,0,0,.3)",zIndex:10}},g8={style:{display:"block","margin-bottom":"4px","font-size":"14px"}},m8={style:{"font-size":"13px",margin:"0","line-height":"1.5"}},v8={key:5,style:{width:"100%",height:"100%",background:"#000","border-radius":"4px",overflow:"hidden"}},y8=["src"],_8=["src"],b8={key:2,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#666","font-size":"13px"}},w8={key:6,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column",gap:"8px",padding:"8px","box-sizing":"border-box"}},E8={style:{"font-size":"12px",color:"#aaa"}},I8=["src"],C8={key:7,style:{width:"100%",height:"100%",padding:"16px","box-sizing":"border-box",background:"rgba(0,0,0,.4)","border-radius":"6px",overflow:"auto"}},x8={style:{margin:"0 0 12px","font-size":"15px",color:"#fff"}},k8={style:{display:"flex","flex-direction":"column",gap:"8px"}},T8=["onClick"],S8={key:0,style:{"margin-top":"12px"}},A8=["onClick","disabled"],R8={key:1,style:{"margin-top":"12px"}},P8={key:0,style:{"font-size":"12px",color:"#ccc",margin:"0 0 8px"}},O8=["onClick"],N8={class:"preview-ui"},D8={class:"preview-topbar"},M8={class:"preview-title"},L8={class:"slide-counter"},V8=["disabled"],$8=["disabled"],F8={class:"dot-nav"},B8=["onClick"],U8=960,z8=540,j8={__name:"PreviewView",setup(t){const e=Um(),n=ju(),r=dn(),i=Fo(),s=xe(()=>e.params.id),o=xe(()=>r.getProject(s.value)),a=xe(()=>{var J;return[...((J=o.value)==null?void 0:J.slides)||[]].sort((ae,z)=>ae.order-z.order)}),l=pe(0),h=pe(null),p=pe(1),g=pe(!0);let v=null;const m=xe(()=>a.value[l.value]||null);function _(){if(!h.value)return;const J=h.value.clientWidth,ae=h.value.clientHeight;p.value=Math.min(J/U8,ae/z8,1.5)}function u(){l.value<a.value.length-1&&l.value++}function C(){l.value>0&&l.value--}function x(J){l.value=J}function A(J){(J.key==="ArrowRight"||J.key==="ArrowDown"||J.key===" ")&&u(),(J.key==="ArrowLeft"||J.key==="ArrowUp")&&C(),J.key==="Escape"&&V()}function V(){n.push({name:"editor",params:{id:s.value}})}function M(){g.value=!0,clearTimeout(v),v=setTimeout(()=>{g.value=!1},3e3)}const F=new ResizeObserver(_);Kt(()=>i.isAuthReady,J=>{if(J&&!o.value){n.push({name:"dashboard"});return}},{immediate:!0}),ko(()=>{window.addEventListener("keydown",A),h.value&&(F.observe(h.value),_()),M()}),To(()=>{window.removeEventListener("keydown",A),F.disconnect(),clearTimeout(v)});function L(J){return J?J.backgroundType==="gradient"&&J.backgroundGradient?{background:J.backgroundGradient}:J.backgroundType==="image"&&J.backgroundImage?{backgroundImage:`url(${J.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:J.background||"#1a1a2e"}:{}}function I(J){return{position:"absolute",left:`${J.x}px`,top:`${J.y}px`,width:`${J.width}px`,height:`${J.height}px`,opacity:J.opacity??1,transform:J.rotation?`rotate(${J.rotation}deg)`:void 0,overflow:"hidden",pointerEvents:["button","hotspot","quiz"].includes(J.type)?"auto":"none"}}const b=pe({}),w=pe({});function P(J,ae){w.value[J]||(b.value[J]=ae)}function D(J){b.value[J.id]!==void 0&&(w.value[J.id]=!0)}function E(J){delete b.value[J],delete w.value[J]}const R=pe({});function S(J){R.value[J]=!R.value[J]}return(J,ae)=>(K(),Q("div",{class:"preview-root",onMousemove:M,onClick:Dt(M,["self"])},[ae[4]||(ae[4]=d("div",{class:"preview-orb preview-orb-left"},null,-1)),ae[5]||(ae[5]=d("div",{class:"preview-orb preview-orb-right"},null,-1)),ae[6]||(ae[6]=d("div",{class:"preview-grid"},null,-1)),d("div",{class:"canvas-bg",ref_key:"containerRef",ref:h},[m.value?(K(),Q("div",s8,[d("div",{class:"slide-canvas",style:Le([L(m.value),{transform:`scale(${p.value})`,transformOrigin:"center center"}])},[(K(!0),Q(Pe,null,Ke([...m.value.elements||[]].sort((z,de)=>z.zIndex-de.zIndex),z=>(K(),Q(Pe,{key:z.id},[z.visible!==!1?(K(),Q("div",{key:0,style:Le(I(z))},[z.type==="text"||z.type==="heading"?(K(),Q("div",{key:0,class:"el-text",style:Le({fontSize:z.content.fontSize+"px",color:z.content.color,fontFamily:z.content.fontFamily,fontWeight:z.content.bold||z.type==="heading"?"700":"400",fontStyle:z.content.italic?"italic":"normal",textDecoration:z.content.underline?"underline":"none",textAlign:z.content.align,lineHeight:z.content.lineHeight||1.4,letterSpacing:z.content.letterSpacing?z.content.letterSpacing+"px":void 0,padding:"4px",width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",wordBreak:"break-word"})},fe(z.content.text),5)):z.type==="image"?(K(),Q("img",{key:1,src:z.content.src,alt:z.content.alt,style:Le({width:"100%",height:"100%",objectFit:z.content.objectFit||"cover",borderRadius:z.content.borderRadius?z.content.borderRadius+"px":void 0})},null,12,o8)):z.type==="shape"?(K(),Q("div",a8,[z.content.shape==="rectangle"||z.content.shape==="circle"?(K(),Q("div",{key:0,style:Le({width:"100%",height:"100%",backgroundColor:z.content.fillColor,border:`${z.content.strokeWidth||0}px solid ${z.content.strokeColor||"transparent"}`,borderRadius:z.content.shape==="circle"?"50%":(z.content.borderRadius||0)+"px",boxSizing:"border-box"})},null,4)):(K(),Q("svg",{key:1,width:"100%",height:"100%",viewBox:`0 0 ${z.width} ${z.height}`,preserveAspectRatio:"xMidYMid meet"},[z.content.shape==="triangle"?(K(),Q("polygon",{key:0,points:`${z.width/2} 0 ${z.width} ${z.height} 0 ${z.height}`,fill:z.content.fillColor,stroke:z.content.strokeColor,"stroke-width":z.content.strokeWidth||0},null,8,c8)):Te("",!0),z.content.shape==="diamond"?(K(),Q("polygon",{key:1,points:`${z.width/2} 0 ${z.width} ${z.height/2} ${z.width/2} ${z.height} 0 ${z.height/2}`,fill:z.content.fillColor,stroke:z.content.strokeColor,"stroke-width":z.content.strokeWidth||0},null,8,u8)):Te("",!0)],8,l8))])):z.type==="button"?(K(),Q("div",d8,[d("button",{style:Le({padding:"8px 20px",borderRadius:"6px",fontWeight:600,fontSize:(z.content.fontSize||14)+"px",cursor:"pointer",border:"2px solid "+(z.content.backgroundColor||"#5865f2"),backgroundColor:z.content.variant==="outline"||z.content.variant==="ghost"?"transparent":z.content.backgroundColor||"#5865f2",color:z.content.variant==="outline"||z.content.variant==="ghost"?z.content.backgroundColor||"#5865f2":z.content.textColor||"#fff",fontFamily:z.content.fontFamily})},fe(z.content.label),5)])):z.type==="hotspot"?(K(),Q("div",h8,[d("button",{class:"hotspot-trigger",style:Le({width:"48px",height:"48px",borderRadius:"50%",backgroundColor:z.content.color||"#5865f2",border:"3px solid rgba(255,255,255,0.4)",color:"#fff",fontSize:"20px",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}),onClick:de=>S(z.id)},"+",12,f8),ot(qr,{name:"popup"},{default:Et(()=>[R.value[z.id]?(K(),Q("div",p8,[d("strong",g8,fe(z.content.title),1),d("p",m8,fe(z.content.body),1)])):Te("",!0)]),_:2},1024)])):z.type==="video"?(K(),Q("div",v8,[z.content.src&&(z.content.src.includes("youtube")||z.content.src.includes("vimeo"))?(K(),Q("iframe",{key:0,src:z.content.src,width:"100%",height:"100%",frameborder:"0",allowfullscreen:"",allow:"autoplay"},null,8,y8)):z.content.src?(K(),Q("video",{key:1,src:z.content.src,controls:"",style:{width:"100%",height:"100%","object-fit":"contain"}},null,8,_8)):(K(),Q("div",b8,"No video source"))])):z.type==="audio"?(K(),Q("div",w8,[ae[0]||(ae[0]=d("span",{style:{"font-size":"28px"}},"🎵",-1)),d("span",E8,fe(z.content.label||"Audio"),1),z.content.src?(K(),Q("audio",{key:0,src:z.content.src,controls:"",style:{width:"100%","max-width":"240px"}},null,8,I8)):Te("",!0)])):z.type==="quiz"?(K(),Q("div",C8,[d("h4",x8,fe(z.content.question),1),d("div",k8,[(K(!0),Q(Pe,null,Ke(z.content.options,(de,se)=>(K(),Q("button",{key:se,onClick:Ie=>P(z.id,se),style:Le({padding:"8px 12px",borderRadius:"6px",border:b.value[z.id]===se?"2px solid #5865f2":"1px solid rgba(255,255,255,.2)",background:w.value[z.id]?se===z.content.correctIndex?"rgba(87,242,135,.2)":b.value[z.id]===se?"rgba(237,66,69,.2)":"rgba(255,255,255,.05)":b.value[z.id]===se?"rgba(88,101,242,.3)":"rgba(255,255,255,.05)",color:"#fff",textAlign:"left",cursor:w.value[z.id]?"default":"pointer",fontSize:"13px",fontFamily:"inherit"})},fe(de),13,T8))),128))]),w.value[z.id]?(K(),Q("div",R8,[d("p",{style:Le({color:b.value[z.id]===z.content.correctIndex?"#57f287":"#ed4245",fontWeight:600,fontSize:"13px",margin:"0 0 4px"})},fe(b.value[z.id]===z.content.correctIndex?"✓ Correct!":"✗ Incorrect"),5),z.content.explanation?(K(),Q("p",P8,fe(z.content.explanation),1)):Te("",!0),d("button",{onClick:de=>E(z.id),style:{padding:"4px 12px",background:"transparent",border:"1px solid rgba(255,255,255,.3)","border-radius":"4px",color:"#ccc","font-size":"12px",cursor:"pointer","font-family":"inherit"}},"Try Again",8,O8)])):(K(),Q("div",S8,[d("button",{onClick:de=>D(z),disabled:b.value[z.id]===void 0,style:{padding:"6px 16px",background:"#5865f2",border:"none","border-radius":"6px",color:"#fff","font-size":"13px",cursor:"pointer","font-family":"inherit"}},"Submit",8,A8)]))])):Te("",!0)],4)):Te("",!0)],64))),128))],4)])):Te("",!0)],512),ot(qr,{name:"ui-fade"},{default:Et(()=>{var z;return[Ye(d("div",N8,[d("div",D8,[d("button",{class:"ui-btn",onClick:V},[...ae[1]||(ae[1]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Ae(" Back to Editor ",-1)])]),d("span",M8,fe((z=o.value)==null?void 0:z.name),1),d("span",L8,fe(l.value+1)+" / "+fe(a.value.length),1)]),d("button",{class:"nav-btn nav-btn-left",onClick:C,disabled:l.value===0},[...ae[2]||(ae[2]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M15 18l-6-6 6-6"})],-1)])],8,V8),d("button",{class:"nav-btn nav-btn-right",onClick:u,disabled:l.value===a.value.length-1},[...ae[3]||(ae[3]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M9 18l6-6-6-6"})],-1)])],8,$8),d("div",F8,[(K(!0),Q(Pe,null,Ke(a.value,(de,se)=>(K(),Q("button",{key:de.id,class:Me(["dot",se===l.value&&"active"]),onClick:Ie=>x(se)},null,10,B8))),128))])],512),[[Vb,g.value]])]}),_:1})],32))}},q8=Rt(j8,[["__scopeId","data-v-649ef8b8"]]),H8=[{path:"/",name:"dashboard",component:w4},{path:"/editor/:id",name:"editor",component:i8,props:!0},{path:"/preview/:id",name:"preview",component:q8,props:!0}],W8=vw({history:Q0(),routes:H8}),Ld=r0(_w);Ld.use(o0());Ld.use(W8);Ld.mount("#app");
