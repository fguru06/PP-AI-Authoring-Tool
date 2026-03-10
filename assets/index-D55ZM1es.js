(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function od(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ht={},ss=[],Qn=()=>{},ug=()=>!1,kl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ad=t=>t.startsWith("onUpdate:"),Ft=Object.assign,ld=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ub=Object.prototype.hasOwnProperty,at=(t,e)=>ub.call(t,e),Le=Array.isArray,os=t=>jo(t)==="[object Map]",Ts=t=>jo(t)==="[object Set]",gf=t=>jo(t)==="[object Date]",Ge=t=>typeof t=="function",wt=t=>typeof t=="string",Vn=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",dg=t=>(ct(t)||Ge(t))&&Ge(t.then)&&Ge(t.catch),hg=Object.prototype.toString,jo=t=>hg.call(t),db=t=>jo(t).slice(8,-1),fg=t=>jo(t)==="[object Object]",Sl=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,so=od(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hb=/-\w/g,kn=Al(t=>t.replace(hb,e=>e.slice(1).toUpperCase())),fb=/\B([A-Z])/g,ui=Al(t=>t.replace(fb,"-$1").toLowerCase()),Rl=Al(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pc=Al(t=>t?`on${Rl(t)}`:""),Qr=(t,e)=>!Object.is(t,e),Oa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},pg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pb=t=>{const e=wt(t)?Number(t):NaN;return isNaN(e)?t:e};let vf;const Nl=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function He(t){if(Le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=wt(r)?yb(r):He(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(wt(t)||ct(t))return t}const mb=/;(?![^(]*\))/g,gb=/:([^]+)/,vb=/\/\*[^]*?\*\//g;function yb(t){const e={};return t.replace(vb,"").split(mb).forEach(n=>{if(n){const r=n.split(gb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function je(t){let e="";if(wt(t))e=t;else if(Le(t))for(let n=0;n<t.length;n++){const r=je(t[n]);r&&(e+=r+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _b="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bb=od(_b);function mg(t){return!!t||t===""}function wb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Cs(t[r],e[r]);return n}function Cs(t,e){if(t===e)return!0;let n=gf(t),r=gf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Vn(t),r=Vn(e),n||r)return t===e;if(n=Le(t),r=Le(e),n||r)return n&&r?wb(t,e):!1;if(n=ct(t),r=ct(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Cs(t[o],e[o]))return!1}}return String(t)===String(e)}function cd(t,e){return t.findIndex(n=>Cs(n,e))}const gg=t=>!!(t&&t.__v_isRef===!0),ve=t=>wt(t)?t:t==null?"":Le(t)||ct(t)&&(t.toString===hg||!Ge(t.toString))?gg(t)?ve(t.value):JSON.stringify(t,vg,2):String(t),vg=(t,e)=>gg(e)?vg(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Nc(r,s)+" =>"]=i,n),{})}:Ts(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Nc(n))}:Vn(e)?Nc(e):ct(e)&&!Le(e)&&!fg(e)?String(e):e,Nc=(t,e="")=>{var n;return Vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class yg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}}on(){++this._on===1&&(this.prevScope=Yt,Yt=this)}off(){this._on>0&&--this._on===0&&(Yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function _g(t){return new yg(t)}function bg(){return Yt}function Eb(t,e=!1){Yt&&Yt.cleanups.push(t)}let ft;const Oc=new WeakSet;class wg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oc.has(this)&&(Oc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yf(this),Tg(this);const e=ft,n=On;ft=this,On=!0;try{return this.fn()}finally{Cg(this),ft=e,On=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hd(e);this.deps=this.depsTail=void 0,yf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hu(this)&&this.run()}get dirty(){return hu(this)}}let Eg=0,oo,ao;function Ig(t,e=!1){if(t.flags|=8,e){t.next=ao,ao=t;return}t.next=oo,oo=t}function ud(){Eg++}function dd(){if(--Eg>0)return;if(ao){let e=ao;for(ao=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oo;){let e=oo;for(oo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Tg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cg(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),hd(r),Ib(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function hu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Io)||(t.globalVersion=Io,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!hu(t))))return;t.flags|=2;const e=t.dep,n=ft,r=On;ft=t,On=!0;try{Tg(t);const i=t.fn(t._value);(e.version===0||Qr(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ft=n,On=r,Cg(t),t.flags&=-3}}function hd(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)hd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ib(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let On=!0;const kg=[];function _r(){kg.push(On),On=!1}function br(){const t=kg.pop();On=t===void 0?!0:t}function yf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ft;ft=void 0;try{e()}finally{ft=n}}}let Io=0;class Tb{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!On||ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ft)n=this.activeLink=new Tb(ft,this),ft.deps?(n.prevDep=ft.depsTail,ft.depsTail.nextDep=n,ft.depsTail=n):ft.deps=ft.depsTail=n,Sg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ft.depsTail,n.nextDep=void 0,ft.depsTail.nextDep=n,ft.depsTail=n,ft.deps===n&&(ft.deps=r)}return n}trigger(e){this.version++,Io++,this.notify(e)}notify(e){ud();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dd()}}}function Sg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ka=new WeakMap,Ri=Symbol(""),fu=Symbol(""),To=Symbol("");function Zt(t,e,n){if(On&&ft){let r=Ka.get(t);r||Ka.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new fd),i.map=r,i.key=n),i.track()}}function dr(t,e,n,r,i,s){const o=Ka.get(t);if(!o){Io++;return}const a=l=>{l&&l.trigger()};if(ud(),e==="clear")o.forEach(a);else{const l=Le(t),h=l&&Sl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===To||!Vn(m)&&m>=f)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),h&&a(o.get(To)),e){case"add":l?h&&a(o.get("length")):(a(o.get(Ri)),os(t)&&a(o.get(fu)));break;case"delete":l||(a(o.get(Ri)),os(t)&&a(o.get(fu)));break;case"set":os(t)&&a(o.get(Ri));break}}dd()}function Cb(t,e){const n=Ka.get(t);return n&&n.get(e)}function Ji(t){const e=rt(t);return e===t?e:(Zt(e,"iterate",To),_n(t)?e:e.map(Ln))}function Ol(t){return Zt(t=rt(t),"iterate",To),t}function Ur(t,e){return wr(t)?ms(gr(t)?Ln(e):e):Ln(e)}const xb={__proto__:null,[Symbol.iterator](){return Dc(this,Symbol.iterator,t=>Ur(this,t))},concat(...t){return Ji(this).concat(...t.map(e=>Le(e)?Ji(e):e))},entries(){return Dc(this,"entries",t=>(t[1]=Ur(this,t[1]),t))},every(t,e){return sr(this,"every",t,e,void 0,arguments)},filter(t,e){return sr(this,"filter",t,e,n=>n.map(r=>Ur(this,r)),arguments)},find(t,e){return sr(this,"find",t,e,n=>Ur(this,n),arguments)},findIndex(t,e){return sr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return sr(this,"findLast",t,e,n=>Ur(this,n),arguments)},findLastIndex(t,e){return sr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return sr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Mc(this,"includes",t)},indexOf(...t){return Mc(this,"indexOf",t)},join(t){return Ji(this).join(t)},lastIndexOf(...t){return Mc(this,"lastIndexOf",t)},map(t,e){return sr(this,"map",t,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...t){return Hs(this,"push",t)},reduce(t,...e){return _f(this,"reduce",t,e)},reduceRight(t,...e){return _f(this,"reduceRight",t,e)},shift(){return Hs(this,"shift")},some(t,e){return sr(this,"some",t,e,void 0,arguments)},splice(...t){return Hs(this,"splice",t)},toReversed(){return Ji(this).toReversed()},toSorted(t){return Ji(this).toSorted(t)},toSpliced(...t){return Ji(this).toSpliced(...t)},unshift(...t){return Hs(this,"unshift",t)},values(){return Dc(this,"values",t=>Ur(this,t))}};function Dc(t,e,n){const r=Ol(t),i=r[e]();return r!==t&&!_n(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const kb=Array.prototype;function sr(t,e,n,r,i,s){const o=Ol(t),a=o!==t&&!_n(t),l=o[e];if(l!==kb[e]){const p=l.apply(t,s);return a?Ln(p):p}let h=n;o!==t&&(a?h=function(p,m){return n.call(this,Ur(t,p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,h,r);return a&&i?i(f):f}function _f(t,e,n,r){const i=Ol(t);let s=n;return i!==t&&(_n(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ur(t,a),l,t)}),i[e](s,...r)}function Mc(t,e,n){const r=rt(t);Zt(r,"iterate",To);const i=r[e](...n);return(i===-1||i===!1)&&Dl(n[0])?(n[0]=rt(n[0]),r[e](...n)):i}function Hs(t,e,n=[]){_r(),ud();const r=rt(t)[e].apply(t,n);return dd(),br(),r}const Sb=od("__proto__,__v_isRef,__isVue"),Ag=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vn));function Ab(t){Vn(t)||(t=String(t));const e=rt(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class Rg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Fb:Dg:s?Og:Ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Le(e);if(!i){let l;if(o&&(l=xb[n]))return l;if(n==="hasOwnProperty")return Ab}const a=Reflect.get(e,n,At(e)?e:r);if((Vn(n)?Ag.has(n):Sb(n))||(i||Zt(e,"get",n),s))return a;if(At(a)){const l=o&&Sl(n)?a:a.value;return i&&ct(l)?mu(l):l}return ct(a)?i?mu(a):qo(a):a}}class Pg extends Rg{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];const o=Le(e)&&Sl(n);if(!this._isShallow){const h=wr(s);if(!_n(r)&&!wr(r)&&(s=rt(s),r=rt(r)),!o&&At(s)&&!At(r))return h||(s.value=r),!0}const a=o?Number(n)<e.length:at(e,n),l=Reflect.set(e,n,r,At(e)?e:i);return e===rt(i)&&(a?Qr(r,s)&&dr(e,"set",n,r):dr(e,"add",n,r)),l}deleteProperty(e,n){const r=at(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&dr(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Vn(n)||!Ag.has(n))&&Zt(e,"has",n),r}ownKeys(e){return Zt(e,"iterate",Le(e)?"length":Ri),Reflect.ownKeys(e)}}class Rb extends Rg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Pb=new Pg,Nb=new Rb,Ob=new Pg(!0);const pu=t=>t,_a=t=>Reflect.getPrototypeOf(t);function Db(t,e,n){return function(...r){const i=this.__v_raw,s=rt(i),o=os(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=i[t](...r),f=n?pu:e?ms:Ln;return!e&&Zt(s,"iterate",l?fu:Ri),Ft(Object.create(h),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:a?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function ba(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mb(t,e){const n={get(i){const s=this.__v_raw,o=rt(s),a=rt(i);t||(Qr(i,a)&&Zt(o,"get",i),Zt(o,"get",a));const{has:l}=_a(o),h=e?pu:t?ms:Ln;if(l.call(o,i))return h(s.get(i));if(l.call(o,a))return h(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&Zt(rt(i),"iterate",Ri),i.size},has(i){const s=this.__v_raw,o=rt(s),a=rt(i);return t||(Qr(i,a)&&Zt(o,"has",i),Zt(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=rt(a),h=e?pu:t?ms:Ln;return!t&&Zt(l,"iterate",Ri),a.forEach((f,p)=>i.call(s,h(f),h(p),o))}};return Ft(n,t?{add:ba("add"),set:ba("set"),delete:ba("delete"),clear:ba("clear")}:{add(i){!e&&!_n(i)&&!wr(i)&&(i=rt(i));const s=rt(this);return _a(s).has.call(s,i)||(s.add(i),dr(s,"add",i,i)),this},set(i,s){!e&&!_n(s)&&!wr(s)&&(s=rt(s));const o=rt(this),{has:a,get:l}=_a(o);let h=a.call(o,i);h||(i=rt(i),h=a.call(o,i));const f=l.call(o,i);return o.set(i,s),h?Qr(s,f)&&dr(o,"set",i,s):dr(o,"add",i,s),this},delete(i){const s=rt(this),{has:o,get:a}=_a(s);let l=o.call(s,i);l||(i=rt(i),l=o.call(s,i)),a&&a.call(s,i);const h=s.delete(i);return l&&dr(s,"delete",i,void 0),h},clear(){const i=rt(this),s=i.size!==0,o=i.clear();return s&&dr(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Db(i,t,e)}),n}function pd(t,e){const n=Mb(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(at(n,i)&&i in r?n:r,i,s)}const Vb={get:pd(!1,!1)},Lb={get:pd(!1,!0)},$b={get:pd(!0,!1)};const Ng=new WeakMap,Og=new WeakMap,Dg=new WeakMap,Fb=new WeakMap;function Ub(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zb(t){return t.__v_skip||!Object.isExtensible(t)?0:Ub(db(t))}function qo(t){return wr(t)?t:md(t,!1,Pb,Vb,Ng)}function Mg(t){return md(t,!1,Ob,Lb,Og)}function mu(t){return md(t,!0,Nb,$b,Dg)}function md(t,e,n,r,i){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=zb(t);if(s===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function gr(t){return wr(t)?gr(t.__v_raw):!!(t&&t.__v_isReactive)}function wr(t){return!!(t&&t.__v_isReadonly)}function _n(t){return!!(t&&t.__v_isShallow)}function Dl(t){return t?!!t.__v_raw:!1}function rt(t){const e=t&&t.__v_raw;return e?rt(e):t}function gd(t){return!at(t,"__v_skip")&&Object.isExtensible(t)&&pg(t,"__v_skip",!0),t}const Ln=t=>ct(t)?qo(t):t,ms=t=>ct(t)?mu(t):t;function At(t){return t?t.__v_isRef===!0:!1}function me(t){return Vg(t,!1)}function Bb(t){return Vg(t,!0)}function Vg(t,e){return At(t)?t:new jb(t,e)}class jb{constructor(e,n){this.dep=new fd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:rt(e),this._value=n?e:Ln(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||_n(e)||wr(e);e=r?e:rt(e),Qr(e,n)&&(this._rawValue=e,this._value=r?e:Ln(e),this.dep.trigger())}}function xe(t){return At(t)?t.value:t}const qb={get:(t,e,n)=>e==="__v_raw"?t:xe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return At(i)&&!At(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Lg(t){return gr(t)?t:new Proxy(t,qb)}function Wb(t){const e=Le(t)?new Array(t.length):{};for(const n in t)e[n]=Gb(t,n);return e}class Hb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=rt(e);let i=!0,s=e;if(!Le(e)||!Sl(String(n)))do i=!Dl(s)||_n(s);while(i&&(s=s.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=xe(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&At(this._raw[this._key])){const n=this._object[this._key];if(At(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Cb(this._raw,this._key)}}function Gb(t,e,n){return new Hb(t,e,n)}class Kb{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Io-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return Ig(this,!0),!0}get value(){const e=this.dep.track();return xg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qb(t,e,n=!1){let r,i;return Ge(t)?r=t:(r=t.get,i=t.set),new Kb(r,i,n)}const wa={},Qa=new WeakMap;let Ii;function Jb(t,e=!1,n=Ii){if(n){let r=Qa.get(n);r||Qa.set(n,r=[]),r.push(t)}}function Yb(t,e,n=ht){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,h=V=>i?V:_n(V)||i===!1||i===0?hr(V,1):hr(V);let f,p,m,v,_=!1,u=!1;if(At(t)?(p=()=>t.value,_=_n(t)):gr(t)?(p=()=>h(t),_=!0):Le(t)?(u=!0,_=t.some(V=>gr(V)||_n(V)),p=()=>t.map(V=>{if(At(V))return V.value;if(gr(V))return h(V);if(Ge(V))return l?l(V,2):V()})):Ge(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){_r();try{m()}finally{br()}}const V=Ii;Ii=f;try{return l?l(t,3,[v]):t(v)}finally{Ii=V}}:p=Qn,e&&i){const V=p,L=i===!0?1/0:i;p=()=>hr(V(),L)}const w=bg(),x=()=>{f.stop(),w&&w.active&&ld(w.effects,f)};if(s&&e){const V=e;e=(...L)=>{V(...L),x()}}let R=u?new Array(t.length).fill(wa):wa;const M=V=>{if(!(!(f.flags&1)||!f.dirty&&!V))if(e){const L=f.run();if(i||_||(u?L.some((F,C)=>Qr(F,R[C])):Qr(L,R))){m&&m();const F=Ii;Ii=f;try{const C=[L,R===wa?void 0:u&&R[0]===wa?[]:R,v];R=L,l?l(e,3,C):e(...C)}finally{Ii=F}}}else f.run()};return a&&a(M),f=new wg(p),f.scheduler=o?()=>o(M,!1):M,v=V=>Jb(V,!1,f),m=f.onStop=()=>{const V=Qa.get(f);if(V){if(l)l(V,4);else for(const L of V)L();Qa.delete(f)}},e?r?M(!0):R=f.run():o?o(M.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function hr(t,e=1/0,n){if(e<=0||!ct(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,At(t))hr(t.value,e,n);else if(Le(t))for(let r=0;r<t.length;r++)hr(t[r],e,n);else if(Ts(t)||os(t))t.forEach(r=>{hr(r,e,n)});else if(fg(t)){for(const r in t)hr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&hr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(t,e,n,r){try{return r?t(...r):t()}catch(i){Ml(i,e,n)}}function $n(t,e,n,r){if(Ge(t)){const i=Wo(t,e,n,r);return i&&dg(i)&&i.catch(s=>{Ml(s,e,n)}),i}if(Le(t)){const i=[];for(let s=0;s<t.length;s++)i.push($n(t[s],e,n,r));return i}}function Ml(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}a=a.parent}if(s){_r(),Wo(s,null,10,[t,l,h]),br();return}}Xb(t,n,i,r,o)}function Xb(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const ln=[];let Wn=-1;const as=[];let zr=null,Xi=0;const $g=Promise.resolve();let Ja=null;function Ho(t){const e=Ja||$g;return t?e.then(this?t.bind(this):t):e}function Zb(t){let e=Wn+1,n=ln.length;for(;e<n;){const r=e+n>>>1,i=ln[r],s=Co(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function vd(t){if(!(t.flags&1)){const e=Co(t),n=ln[ln.length-1];!n||!(t.flags&2)&&e>=Co(n)?ln.push(t):ln.splice(Zb(e),0,t),t.flags|=1,Fg()}}function Fg(){Ja||(Ja=$g.then(zg))}function e0(t){Le(t)?as.push(...t):zr&&t.id===-1?zr.splice(Xi+1,0,t):t.flags&1||(as.push(t),t.flags|=1),Fg()}function bf(t,e,n=Wn+1){for(;n<ln.length;n++){const r=ln[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ln.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ug(t){if(as.length){const e=[...new Set(as)].sort((n,r)=>Co(n)-Co(r));if(as.length=0,zr){zr.push(...e);return}for(zr=e,Xi=0;Xi<zr.length;Xi++){const n=zr[Xi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zr=null,Xi=0}}const Co=t=>t.id==null?t.flags&2?-1:1/0:t.id;function zg(t){try{for(Wn=0;Wn<ln.length;Wn++){const e=ln[Wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wn<ln.length;Wn++){const e=ln[Wn];e&&(e.flags&=-2)}Wn=-1,ln.length=0,Ug(),Ja=null,(ln.length||as.length)&&zg()}}let Gt=null,Bg=null;function Ya(t){const e=Gt;return Gt=t,Bg=t&&t.type.__scopeId||null,e}function kt(t,e=Gt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&el(-1);const s=Ya(e);let o;try{o=t(...i)}finally{Ya(s),r._d&&el(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ye(t,e){if(Gt===null)return t;const n=Ul(Gt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=ht]=e[i];s&&(Ge(s)&&(s={mounted:s,updated:s}),s.deep&&hr(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function _i(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(_r(),$n(l,n,8,[t.el,a,t,e]),br())}}function lo(t,e){if(nn){let n=nn.provides;const r=nn.parent&&nn.parent.provides;r===n&&(n=nn.provides=Object.create(r)),n[t]=e}}function bn(t,e,n=!1){const r=Id();if(r||Pi){let i=Pi?Pi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ge(e)?e.call(r&&r.proxy):e}}function t0(){return!!(Id()||Pi)}const n0=Symbol.for("v-scx"),r0=()=>bn(n0);function rn(t,e,n){return jg(t,e,n)}function jg(t,e,n=ht){const{immediate:r,deep:i,flush:s,once:o}=n,a=Ft({},n),l=e&&r||!e&&s!=="post";let h;if(Ao){if(s==="sync"){const v=r0();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=Qn,v.resume=Qn,v.pause=Qn,v}}const f=nn;a.call=(v,_,u)=>$n(v,f,_,u);let p=!1;s==="post"?a.scheduler=v=>{Jt(v,f&&f.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(v,_)=>{_?v():vd(v)}),a.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=Yb(t,e,a);return Ao&&(h?h.push(m):l&&m()),m}function i0(t,e,n){const r=this.proxy,i=wt(t)?t.includes(".")?qg(r,t):()=>r[t]:t.bind(r,r);let s;Ge(e)?s=e:(s=e.handler,n=e);const o=Qo(this),a=jg(i,s.bind(r),n);return o(),a}function qg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Wg=Symbol("_vte"),Hg=t=>t.__isTeleport,co=t=>t&&(t.disabled||t.disabled===""),wf=t=>t&&(t.defer||t.defer===""),Ef=t=>typeof SVGElement<"u"&&t instanceof SVGElement,If=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,gu=(t,e)=>{const n=t&&t.to;return wt(n)?e?e(n):null:n},Gg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,h){const{mc:f,pc:p,pbc:m,o:{insert:v,querySelector:_,createText:u,createComment:w}}=h,x=co(e.props);let{shapeFlag:R,children:M,dynamicChildren:V}=e;if(t==null){const L=e.el=u(""),F=e.anchor=u("");v(L,n,r),v(F,n,r);const C=(T,P)=>{R&16&&f(M,T,P,i,s,o,a,l)},E=()=>{const T=e.target=gu(e.props,_),P=vu(T,e,u,v);T&&(o!=="svg"&&Ef(T)?o="svg":o!=="mathml"&&If(T)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(T),x||(C(T,P),Da(e,!1)))};x&&(C(n,F),Da(e,!0)),wf(e.props)?(e.el.__isMounted=!1,Jt(()=>{E(),delete e.el.__isMounted},s)):E()}else{if(wf(e.props)&&t.el.__isMounted===!1){Jt(()=>{Gg.process(t,e,n,r,i,s,o,a,l,h)},s);return}e.el=t.el,e.targetStart=t.targetStart;const L=e.anchor=t.anchor,F=e.target=t.target,C=e.targetAnchor=t.targetAnchor,E=co(t.props),T=E?n:F,P=E?L:C;if(o==="svg"||Ef(F)?o="svg":(o==="mathml"||If(F))&&(o="mathml"),V?(m(t.dynamicChildren,V,T,i,s,o,a),wd(t,e,!0)):l||p(t,e,T,P,i,s,o,a,!1),x)E?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ea(e,n,L,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const O=e.target=gu(e.props,_);O&&Ea(e,O,null,h,0)}else E&&Ea(e,F,C,h,1);Da(e,x)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:h,targetAnchor:f,target:p,props:m}=t;if(p&&(i(h),i(f)),s&&i(l),o&16){const v=s||!co(m);for(let _=0;_<a.length;_++){const u=a[_];r(u,e,n,v,!!u.dynamicChildren)}}},move:Ea,hydrate:s0};function Ea(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:h,props:f}=t,p=s===2;if(p&&r(o,e,n),(!p||co(f))&&l&16)for(let m=0;m<h.length;m++)i(h[m],e,n,2);p&&r(a,e,n)}function s0(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:h,createText:f}},p){function m(w,x){let R=x;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")e.targetStart=R;else if(R.data==="teleport anchor"){e.targetAnchor=R,w._lpa=e.targetAnchor&&o(e.targetAnchor);break}}R=o(R)}}function v(w,x){x.anchor=p(o(w),x,a(w),n,r,i,s)}const _=e.target=gu(e.props,l),u=co(e.props);if(_){const w=_._lpa||_.firstChild;e.shapeFlag&16&&(u?(v(t,e),m(_,w),e.targetAnchor||vu(_,e,f,h,a(t)===_?t:null)):(e.anchor=o(t),m(_,w),e.targetAnchor||vu(_,e,f,h),p(w&&o(w),e,_,n,r,i,s))),Da(e,u)}else u&&e.shapeFlag&16&&(v(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const yd=Gg;function Da(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function vu(t,e,n,r,i=null){const s=e.targetStart=n(""),o=e.targetAnchor=n("");return s[Wg]=o,t&&(r(s,t,i),r(o,t,i)),o}const Hn=Symbol("_leaveCb"),Gs=Symbol("_enterCb");function o0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Go(()=>{t.isMounted=!0}),Ko(()=>{t.isUnmounting=!0}),t}const Tn=[Function,Array],Kg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},Qg=t=>{const e=t.subTree;return e.component?Qg(e.component):e},a0={name:"BaseTransition",props:Kg,setup(t,{slots:e}){const n=Id(),r=o0();return()=>{const i=e.default&&Xg(e.default(),!0);if(!i||!i.length)return;const s=Jg(i),o=rt(t),{mode:a}=o;if(r.isLeaving)return Vc(s);const l=Tf(s);if(!l)return Vc(s);let h=yu(l,o,r,n,p=>h=p);l.type!==tn&&xo(l,h);let f=n.subTree&&Tf(n.subTree);if(f&&f.type!==tn&&!Ci(f,l)&&Qg(n).type!==tn){let p=yu(f,o,r,n);if(xo(f,p),a==="out-in"&&l.type!==tn)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Vc(s);a==="in-out"&&l.type!==tn?p.delayLeave=(m,v,_)=>{const u=Yg(r,f);u[String(f.key)]=f,m[Hn]=()=>{v(),m[Hn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{_(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function Jg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==tn){e=n;break}}return e}const l0=a0;function Yg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yu(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:v,onAfterLeave:_,onLeaveCancelled:u,onBeforeAppear:w,onAppear:x,onAfterAppear:R,onAppearCancelled:M}=e,V=String(t.key),L=Yg(n,t),F=(T,P)=>{T&&$n(T,r,9,P)},C=(T,P)=>{const O=P[1];F(T,P),Le(T)?T.every(b=>b.length<=1)&&O():T.length<=1&&O()},E={mode:o,persisted:a,beforeEnter(T){let P=l;if(!n.isMounted)if(s)P=w||l;else return;T[Hn]&&T[Hn](!0);const O=L[V];O&&Ci(t,O)&&O.el[Hn]&&O.el[Hn](),F(P,[T])},enter(T){if(L[V]===t)return;let P=h,O=f,b=p;if(!n.isMounted)if(s)P=x||h,O=R||f,b=M||p;else return;let S=!1;T[Gs]=J=>{S||(S=!0,J?F(b,[T]):F(O,[T]),E.delayedLeave&&E.delayedLeave(),T[Gs]=void 0)};const I=T[Gs].bind(null,!1);P?C(P,[T,I]):I()},leave(T,P){const O=String(t.key);if(T[Gs]&&T[Gs](!0),n.isUnmounting)return P();F(m,[T]);let b=!1;T[Hn]=I=>{b||(b=!0,P(),I?F(u,[T]):F(_,[T]),T[Hn]=void 0,L[O]===t&&delete L[O])};const S=T[Hn].bind(null,!1);L[O]=t,v?C(v,[T,S]):S()},clone(T){const P=yu(T,e,n,r,i);return i&&i(P),P}};return E}function Vc(t){if(Vl(t))return t=ti(t),t.children=null,t}function Tf(t){if(!Vl(t))return Hg(t.type)&&t.children?Jg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ge(n.default))return n.default()}}function xo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xg(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Me?(o.patchFlag&128&&i++,r=r.concat(Xg(o.children,e,a))):(e||o.type!==tn)&&r.push(a!=null?ti(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Zg(t,e){return Ge(t)?Ft({name:t.name},e,{setup:t}):t}function ev(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Cf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Xa=new WeakMap;function uo(t,e,n,r,i=!1){if(Le(t)){t.forEach((u,w)=>uo(u,e&&(Le(e)?e[w]:e),n,r,i));return}if(ls(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&uo(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?Ul(r.component):r.el,o=i?null:s,{i:a,r:l}=t,h=e&&e.r,f=a.refs===ht?a.refs={}:a.refs,p=a.setupState,m=rt(p),v=p===ht?ug:u=>Cf(f,u)?!1:at(m,u),_=(u,w)=>!(w&&Cf(f,w));if(h!=null&&h!==l){if(xf(e),wt(h))f[h]=null,v(h)&&(p[h]=null);else if(At(h)){const u=e;_(h,u.k)&&(h.value=null),u.k&&(f[u.k]=null)}}if(Ge(l))Wo(l,a,12,[o,f]);else{const u=wt(l),w=At(l);if(u||w){const x=()=>{if(t.f){const R=u?v(l)?p[l]:f[l]:_()||!t.k?l.value:f[t.k];if(i)Le(R)&&ld(R,s);else if(Le(R))R.includes(s)||R.push(s);else if(u)f[l]=[s],v(l)&&(p[l]=f[l]);else{const M=[s];_(l,t.k)&&(l.value=M),t.k&&(f[t.k]=M)}}else u?(f[l]=o,v(l)&&(p[l]=o)):w&&(_(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const R=()=>{x(),Xa.delete(t)};R.id=-1,Xa.set(t,R),Jt(R,n)}else xf(t),x()}}}function xf(t){const e=Xa.get(t);e&&(e.flags|=8,Xa.delete(t))}Nl().requestIdleCallback;Nl().cancelIdleCallback;const ls=t=>!!t.type.__asyncLoader,Vl=t=>t.type.__isKeepAlive;function c0(t,e){tv(t,"a",e)}function u0(t,e){tv(t,"da",e)}function tv(t,e,n=nn){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ll(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Vl(i.parent.vnode)&&d0(r,e,n,i),i=i.parent}}function d0(t,e,n,r){const i=Ll(e,t,r,!0);nv(()=>{ld(r[e],i)},n)}function Ll(t,e,n=nn,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{_r();const a=Qo(n),l=$n(e,n,t,o);return a(),br(),l});return r?i.unshift(s):i.push(s),s}}const kr=t=>(e,n=nn)=>{(!Ao||t==="sp")&&Ll(t,(...r)=>e(...r),n)},h0=kr("bm"),Go=kr("m"),f0=kr("bu"),p0=kr("u"),Ko=kr("bum"),nv=kr("um"),m0=kr("sp"),g0=kr("rtg"),v0=kr("rtc");function y0(t,e=nn){Ll("ec",t,e)}const _0="components",rv=Symbol.for("v-ndc");function iv(t){return wt(t)?b0(_0,t,!1)||t:t||rv}function b0(t,e,n=!0,r=!1){const i=Gt||nn;if(i){const s=i.type;{const a=iw(s,!1);if(a&&(a===e||a===kn(e)||a===Rl(kn(e))))return s}const o=kf(i[t]||s[t],e)||kf(i.appContext[t],e);return!o&&r?s:o}}function kf(t,e){return t&&(t[e]||t[kn(e)]||t[Rl(kn(e))])}function st(t,e,n,r){let i;const s=n,o=Le(t);if(o||wt(t)){const a=o&&gr(t);let l=!1,h=!1;a&&(l=!_n(t),h=wr(t),t=Ol(t)),i=new Array(t.length);for(let f=0,p=t.length;f<p;f++)i[f]=e(l?h?ms(Ln(t[f])):Ln(t[f]):t[f],f,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s)}else if(ct(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,h=a.length;l<h;l++){const f=a[l];i[l]=e(t[f],f,l,s)}}else i=[];return i}function _u(t,e,n={},r,i){if(Gt.ce||Gt.parent&&ls(Gt.parent)&&Gt.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),G(),St(Me,null,[_t("slot",n,r)],h?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),G();const o=s&&sv(s(n)),a=n.key||o&&o.key,l=St(Me,{key:(a&&!Vn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function sv(t){return t.some(e=>So(e)?!(e.type===tn||e.type===Me&&!sv(e.children)):!0)?t:null}const bu=t=>t?Tv(t)?Ul(t):bu(t.parent):null,ho=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bu(t.parent),$root:t=>bu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>av(t),$forceUpdate:t=>t.f||(t.f=()=>{vd(t.update)}),$nextTick:t=>t.n||(t.n=Ho.bind(t.proxy)),$watch:t=>i0.bind(t)}),Lc=(t,e)=>t!==ht&&!t.__isScriptSetup&&at(t,e),w0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Lc(r,e))return o[e]=1,r[e];if(i!==ht&&at(i,e))return o[e]=2,i[e];if(at(s,e))return o[e]=3,s[e];if(n!==ht&&at(n,e))return o[e]=4,n[e];wu&&(o[e]=0)}}const h=ho[e];let f,p;if(h)return e==="$attrs"&&Zt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ht&&at(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,at(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Lc(i,e)?(i[e]=n,!0):r!==ht&&at(r,e)?(r[e]=n,!0):at(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(n[a]||t!==ht&&a[0]!=="$"&&at(t,a)||Lc(e,a)||at(s,a)||at(r,a)||at(ho,a)||at(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:at(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sf(t){return Le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wu=!0;function E0(t){const e=av(t),n=t.proxy,r=t.ctx;wu=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:_,activated:u,deactivated:w,beforeDestroy:x,beforeUnmount:R,destroyed:M,unmounted:V,render:L,renderTracked:F,renderTriggered:C,errorCaptured:E,serverPrefetch:T,expose:P,inheritAttrs:O,components:b,directives:S,filters:I}=e;if(h&&I0(h,r,null),o)for(const $ in o){const de=o[$];Ge(de)&&(r[$]=de.bind(n))}if(i){const $=i.call(n,n);ct($)&&(t.data=qo($))}if(wu=!0,s)for(const $ in s){const de=s[$],ie=Ge(de)?de.bind(n,n):Ge(de.get)?de.get.bind(n,n):Qn,Ee=!Ge(de)&&Ge(de.set)?de.set.bind(n):Qn,re=Se({get:ie,set:Ee});Object.defineProperty(r,$,{enumerable:!0,configurable:!0,get:()=>re.value,set:ee=>re.value=ee})}if(a)for(const $ in a)ov(a[$],r,n,$);if(l){const $=Ge(l)?l.call(n):l;Reflect.ownKeys($).forEach(de=>{lo(de,$[de])})}f&&Af(f,t,"c");function te($,de){Le(de)?de.forEach(ie=>$(ie.bind(n))):de&&$(de.bind(n))}if(te(h0,p),te(Go,m),te(f0,v),te(p0,_),te(c0,u),te(u0,w),te(y0,E),te(v0,F),te(g0,C),te(Ko,R),te(nv,V),te(m0,T),Le(P))if(P.length){const $=t.exposed||(t.exposed={});P.forEach(de=>{Object.defineProperty($,de,{get:()=>n[de],set:ie=>n[de]=ie,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===Qn&&(t.render=L),O!=null&&(t.inheritAttrs=O),b&&(t.components=b),S&&(t.directives=S),T&&ev(t)}function I0(t,e,n=Qn){Le(t)&&(t=Eu(t));for(const r in t){const i=t[r];let s;ct(i)?"default"in i?s=bn(i.from||r,i.default,!0):s=bn(i.from||r):s=bn(i),At(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Af(t,e,n){$n(Le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ov(t,e,n,r){let i=r.includes(".")?qg(n,r):()=>n[r];if(wt(t)){const s=e[t];Ge(s)&&rn(i,s)}else if(Ge(t))rn(i,t.bind(n));else if(ct(t))if(Le(t))t.forEach(s=>ov(s,e,n,r));else{const s=Ge(t.handler)?t.handler.bind(n):e[t.handler];Ge(s)&&rn(i,s,t)}}function av(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(h=>Za(l,h,o,!0)),Za(l,e,o)),ct(e)&&s.set(e,l),l}function Za(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Za(t,s,n,!0),i&&i.forEach(o=>Za(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=T0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const T0={data:Rf,props:Pf,emits:Pf,methods:Xs,computed:Xs,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:Xs,directives:Xs,watch:x0,provide:Rf,inject:C0};function Rf(t,e){return e?t?function(){return Ft(Ge(t)?t.call(this,this):t,Ge(e)?e.call(this,this):e)}:e:t}function C0(t,e){return Xs(Eu(t),Eu(e))}function Eu(t){if(Le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function on(t,e){return t?[...new Set([].concat(t,e))]:e}function Xs(t,e){return t?Ft(Object.create(null),t,e):e}function Pf(t,e){return t?Le(t)&&Le(e)?[...new Set([...t,...e])]:Ft(Object.create(null),Sf(t),Sf(e??{})):e}function x0(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const r in e)n[r]=on(t[r],e[r]);return n}function lv(){return{app:null,config:{isNativeTag:ug,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k0=0;function S0(t,e){return function(r,i=null){Ge(r)||(r=Ft({},r)),i!=null&&!ct(i)&&(i=null);const s=lv(),o=new WeakSet,a=[];let l=!1;const h=s.app={_uid:k0++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:ow,get config(){return s.config},set config(f){},use(f,...p){return o.has(f)||(f&&Ge(f.install)?(o.add(f),f.install(h,...p)):Ge(f)&&(o.add(f),f(h,...p))),h},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),h},component(f,p){return p?(s.components[f]=p,h):s.components[f]},directive(f,p){return p?(s.directives[f]=p,h):s.directives[f]},mount(f,p,m){if(!l){const v=h._ceVNode||_t(r,i);return v.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),l=!0,h._container=f,f.__vue_app__=h,Ul(v.component)}},onUnmount(f){a.push(f)},unmount(){l&&($n(a,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return s.provides[f]=p,h},runWithContext(f){const p=Pi;Pi=h;try{return f()}finally{Pi=p}}};return h}}let Pi=null;const A0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${ui(e)}Modifiers`];function R0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ht;let i=n;const s=e.startsWith("update:"),o=s&&A0(r,e.slice(7));o&&(o.trim&&(i=n.map(f=>wt(f)?f.trim():f)),o.number&&(i=n.map(Pl)));let a,l=r[a=Pc(e)]||r[a=Pc(kn(e))];!l&&s&&(l=r[a=Pc(ui(e))]),l&&$n(l,t,6,i);const h=r[a+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$n(h,t,6,i)}}const P0=new WeakMap;function cv(t,e,n=!1){const r=n?P0:e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Ge(t)){const l=h=>{const f=cv(h,e,!0);f&&(a=!0,Ft(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ct(t)&&r.set(t,null),null):(Le(s)?s.forEach(l=>o[l]=null):Ft(o,s),ct(t)&&r.set(t,o),o)}function $l(t,e){return!t||!kl(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(t,e[0].toLowerCase()+e.slice(1))||at(t,ui(e))||at(t,e))}function Nf(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:h,renderCache:f,props:p,data:m,setupState:v,ctx:_,inheritAttrs:u}=t,w=Ya(t);let x,R;try{if(n.shapeFlag&4){const V=i||r,L=V;x=Kn(h.call(L,V,f,p,v,m,_)),R=a}else{const V=e;x=Kn(V.length>1?V(p,{attrs:a,slots:o,emit:l}):V(p,null)),R=e.props?a:N0(a)}}catch(V){fo.length=0,Ml(V,t,1),x=_t(tn)}let M=x;if(R&&u!==!1){const V=Object.keys(R),{shapeFlag:L}=M;V.length&&L&7&&(s&&V.some(ad)&&(R=O0(R,s)),M=ti(M,R,!1,!0))}return n.dirs&&(M=ti(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&xo(M,n.transition),x=M,Ya(w),x}const N0=t=>{let e;for(const n in t)(n==="class"||n==="style"||kl(n))&&((e||(e={}))[n]=t[n]);return e},O0=(t,e)=>{const n={};for(const r in t)(!ad(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function D0(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Of(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(uv(o,r,m)&&!$l(h,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Of(r,o,h):!0:!!o;return!1}function Of(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(uv(e,t,s)&&!$l(n,s))return!0}return!1}function uv(t,e,n){const r=t[n],i=e[n];return n==="style"&&ct(r)&&ct(i)?!Cs(r,i):r!==i}function M0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const dv={},hv=()=>Object.create(dv),fv=t=>Object.getPrototypeOf(t)===dv;function V0(t,e,n,r=!1){const i={},s=hv();t.propsDefaults=Object.create(null),pv(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Mg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function L0(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=rt(i),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if($l(t.emitsOptions,m))continue;const v=e[m];if(l)if(at(s,m))v!==s[m]&&(s[m]=v,h=!0);else{const _=kn(m);i[_]=Iu(l,a,_,v,t,!1)}else v!==s[m]&&(s[m]=v,h=!0)}}}else{pv(t,e,i,s)&&(h=!0);let f;for(const p in a)(!e||!at(e,p)&&((f=ui(p))===p||!at(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=Iu(l,a,p,void 0,t,!0)):delete i[p]);if(s!==a)for(const p in s)(!e||!at(e,p))&&(delete s[p],h=!0)}h&&dr(t.attrs,"set","")}function pv(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(so(l))continue;const h=e[l];let f;i&&at(i,f=kn(l))?!s||!s.includes(f)?n[f]=h:(a||(a={}))[f]=h:$l(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(s){const l=rt(n),h=a||ht;for(let f=0;f<s.length;f++){const p=s[f];n[p]=Iu(i,l,p,h[p],t,!at(h,p))}}return o}function Iu(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=at(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const f=Qo(i);r=h[n]=l.call(null,e),f()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ui(n))&&(r=!0))}return r}const $0=new WeakMap;function mv(t,e,n=!1){const r=n?$0:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Ge(t)){const f=p=>{l=!0;const[m,v]=mv(p,e,!0);Ft(o,m),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!l)return ct(t)&&r.set(t,ss),ss;if(Le(s))for(let f=0;f<s.length;f++){const p=kn(s[f]);Df(p)&&(o[p]=ht)}else if(s)for(const f in s){const p=kn(f);if(Df(p)){const m=s[f],v=o[p]=Le(m)||Ge(m)?{type:m}:Ft({},m),_=v.type;let u=!1,w=!0;if(Le(_))for(let x=0;x<_.length;++x){const R=_[x],M=Ge(R)&&R.name;if(M==="Boolean"){u=!0;break}else M==="String"&&(w=!1)}else u=Ge(_)&&_.name==="Boolean";v[0]=u,v[1]=w,(u||at(v,"default"))&&a.push(p)}}const h=[o,a];return ct(t)&&r.set(t,h),h}function Df(t){return t[0]!=="$"&&!so(t)}const _d=t=>t==="_"||t==="_ctx"||t==="$stable",bd=t=>Le(t)?t.map(Kn):[Kn(t)],F0=(t,e,n)=>{if(e._n)return e;const r=kt((...i)=>bd(e(...i)),n);return r._c=!1,r},gv=(t,e,n)=>{const r=t._ctx;for(const i in t){if(_d(i))continue;const s=t[i];if(Ge(s))e[i]=F0(i,s,r);else if(s!=null){const o=bd(s);e[i]=()=>o}}},vv=(t,e)=>{const n=bd(e);t.slots.default=()=>n},yv=(t,e,n)=>{for(const r in e)(n||!_d(r))&&(t[r]=e[r])},U0=(t,e,n)=>{const r=t.slots=hv();if(t.vnode.shapeFlag&32){const i=e._;i?(yv(r,e,n),n&&pg(r,"_",i,!0)):gv(e,r)}else e&&vv(t,e)},z0=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ht;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:yv(i,e,n):(s=!e.$stable,gv(e,i)),o=e}else e&&(vv(t,e),o={default:1});if(s)for(const a in i)!_d(a)&&o[a]==null&&delete i[a]},Jt=H0;function B0(t){return j0(t)}function j0(t,e){const n=Nl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=Qn,insertStaticContent:_}=t,u=(q,K,g,Q=null,H=null,N=null,D=void 0,j=null,z=!!K.dynamicChildren)=>{if(q===K)return;q&&!Ci(q,K)&&(Q=oe(q),ee(q,H,N,!0),q=null),K.patchFlag===-2&&(z=!1,K.dynamicChildren=null);const{type:A,ref:W,shapeFlag:X}=K;switch(A){case Fl:w(q,K,g,Q);break;case tn:x(q,K,g,Q);break;case Ma:q==null&&R(K,g,Q,D);break;case Me:b(q,K,g,Q,H,N,D,j,z);break;default:X&1?L(q,K,g,Q,H,N,D,j,z):X&6?S(q,K,g,Q,H,N,D,j,z):(X&64||X&128)&&A.process(q,K,g,Q,H,N,D,j,z,Te)}W!=null&&H?uo(W,q&&q.ref,N,K||q,!K):W==null&&q&&q.ref!=null&&uo(q.ref,null,N,q,!0)},w=(q,K,g,Q)=>{if(q==null)r(K.el=a(K.children),g,Q);else{const H=K.el=q.el;K.children!==q.children&&h(H,K.children)}},x=(q,K,g,Q)=>{q==null?r(K.el=l(K.children||""),g,Q):K.el=q.el},R=(q,K,g,Q)=>{[q.el,q.anchor]=_(q.children,K,g,Q,q.el,q.anchor)},M=({el:q,anchor:K},g,Q)=>{let H;for(;q&&q!==K;)H=m(q),r(q,g,Q),q=H;r(K,g,Q)},V=({el:q,anchor:K})=>{let g;for(;q&&q!==K;)g=m(q),i(q),q=g;i(K)},L=(q,K,g,Q,H,N,D,j,z)=>{if(K.type==="svg"?D="svg":K.type==="math"&&(D="mathml"),q==null)F(K,g,Q,H,N,D,j,z);else{const A=q.el&&q.el._isVueCE?q.el:null;try{A&&A._beginPatch(),T(q,K,H,N,D,j,z)}finally{A&&A._endPatch()}}},F=(q,K,g,Q,H,N,D,j)=>{let z,A;const{props:W,shapeFlag:X,transition:se,dirs:le}=q;if(z=q.el=o(q.type,N,W&&W.is,W),X&8?f(z,q.children):X&16&&E(q.children,z,null,Q,H,$c(q,N),D,j),le&&_i(q,null,Q,"created"),C(z,q,q.scopeId,D,Q),W){for(const Ae in W)Ae!=="value"&&!so(Ae)&&s(z,Ae,null,W[Ae],N,Q);"value"in W&&s(z,"value",null,W.value,N),(A=W.onVnodeBeforeMount)&&qn(A,Q,q)}le&&_i(q,null,Q,"beforeMount");const _e=q0(H,se);_e&&se.beforeEnter(z),r(z,K,g),((A=W&&W.onVnodeMounted)||_e||le)&&Jt(()=>{A&&qn(A,Q,q),_e&&se.enter(z),le&&_i(q,null,Q,"mounted")},H)},C=(q,K,g,Q,H)=>{if(g&&v(q,g),Q)for(let N=0;N<Q.length;N++)v(q,Q[N]);if(H){let N=H.subTree;if(K===N||wv(N.type)&&(N.ssContent===K||N.ssFallback===K)){const D=H.vnode;C(q,D,D.scopeId,D.slotScopeIds,H.parent)}}},E=(q,K,g,Q,H,N,D,j,z=0)=>{for(let A=z;A<q.length;A++){const W=q[A]=j?ur(q[A]):Kn(q[A]);u(null,W,K,g,Q,H,N,D,j)}},T=(q,K,g,Q,H,N,D)=>{const j=K.el=q.el;let{patchFlag:z,dynamicChildren:A,dirs:W}=K;z|=q.patchFlag&16;const X=q.props||ht,se=K.props||ht;let le;if(g&&bi(g,!1),(le=se.onVnodeBeforeUpdate)&&qn(le,g,K,q),W&&_i(K,q,g,"beforeUpdate"),g&&bi(g,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&f(j,""),A?P(q.dynamicChildren,A,j,g,Q,$c(K,H),N):D||de(q,K,j,null,g,Q,$c(K,H),N,!1),z>0){if(z&16)O(j,X,se,g,H);else if(z&2&&X.class!==se.class&&s(j,"class",null,se.class,H),z&4&&s(j,"style",X.style,se.style,H),z&8){const _e=K.dynamicProps;for(let Ae=0;Ae<_e.length;Ae++){const ce=_e[Ae],We=X[ce],it=se[ce];(it!==We||ce==="value")&&s(j,ce,We,it,H,g)}}z&1&&q.children!==K.children&&f(j,K.children)}else!D&&A==null&&O(j,X,se,g,H);((le=se.onVnodeUpdated)||W)&&Jt(()=>{le&&qn(le,g,K,q),W&&_i(K,q,g,"updated")},Q)},P=(q,K,g,Q,H,N,D)=>{for(let j=0;j<K.length;j++){const z=q[j],A=K[j],W=z.el&&(z.type===Me||!Ci(z,A)||z.shapeFlag&198)?p(z.el):g;u(z,A,W,null,Q,H,N,D,!0)}},O=(q,K,g,Q,H)=>{if(K!==g){if(K!==ht)for(const N in K)!so(N)&&!(N in g)&&s(q,N,K[N],null,H,Q);for(const N in g){if(so(N))continue;const D=g[N],j=K[N];D!==j&&N!=="value"&&s(q,N,j,D,H,Q)}"value"in g&&s(q,"value",K.value,g.value,H)}},b=(q,K,g,Q,H,N,D,j,z)=>{const A=K.el=q?q.el:a(""),W=K.anchor=q?q.anchor:a("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:le}=K;le&&(j=j?j.concat(le):le),q==null?(r(A,g,Q),r(W,g,Q),E(K.children||[],g,W,H,N,D,j,z)):X>0&&X&64&&se&&q.dynamicChildren&&q.dynamicChildren.length===se.length?(P(q.dynamicChildren,se,g,H,N,D,j),(K.key!=null||H&&K===H.subTree)&&wd(q,K,!0)):de(q,K,g,W,H,N,D,j,z)},S=(q,K,g,Q,H,N,D,j,z)=>{K.slotScopeIds=j,q==null?K.shapeFlag&512?H.ctx.activate(K,g,Q,D,z):I(K,g,Q,H,N,D,z):J(q,K,z)},I=(q,K,g,Q,H,N,D)=>{const j=q.component=Z0(q,Q,H);if(Vl(q)&&(j.ctx.renderer=Te),ew(j,!1,D),j.asyncDep){if(H&&H.registerDep(j,te,D),!q.el){const z=j.subTree=_t(tn);x(null,z,K,g),q.placeholder=z.el}}else te(j,q,K,g,H,N,D)},J=(q,K,g)=>{const Q=K.component=q.component;if(D0(q,K,g))if(Q.asyncDep&&!Q.asyncResolved){$(Q,K,g);return}else Q.next=K,Q.update();else K.el=q.el,Q.vnode=K},te=(q,K,g,Q,H,N,D)=>{const j=()=>{if(q.isMounted){let{next:X,bu:se,u:le,parent:_e,vnode:Ae}=q;{const mt=_v(q);if(mt){X&&(X.el=Ae.el,$(q,X,D)),mt.asyncDep.then(()=>{Jt(()=>{q.isUnmounted||A()},H)});return}}let ce=X,We;bi(q,!1),X?(X.el=Ae.el,$(q,X,D)):X=Ae,se&&Oa(se),(We=X.props&&X.props.onVnodeBeforeUpdate)&&qn(We,_e,X,Ae),bi(q,!0);const it=Nf(q),Qe=q.subTree;q.subTree=it,u(Qe,it,p(Qe.el),oe(Qe),q,H,N),X.el=it.el,ce===null&&M0(q,it.el),le&&Jt(le,H),(We=X.props&&X.props.onVnodeUpdated)&&Jt(()=>qn(We,_e,X,Ae),H)}else{let X;const{el:se,props:le}=K,{bm:_e,m:Ae,parent:ce,root:We,type:it}=q,Qe=ls(K);bi(q,!1),_e&&Oa(_e),!Qe&&(X=le&&le.onVnodeBeforeMount)&&qn(X,ce,K),bi(q,!0);{We.ce&&We.ce._hasShadowRoot()&&We.ce._injectChildStyle(it);const mt=q.subTree=Nf(q);u(null,mt,g,Q,q,H,N),K.el=mt.el}if(Ae&&Jt(Ae,H),!Qe&&(X=le&&le.onVnodeMounted)){const mt=K;Jt(()=>qn(X,ce,mt),H)}(K.shapeFlag&256||ce&&ls(ce.vnode)&&ce.vnode.shapeFlag&256)&&q.a&&Jt(q.a,H),q.isMounted=!0,K=g=Q=null}};q.scope.on();const z=q.effect=new wg(j);q.scope.off();const A=q.update=z.run.bind(z),W=q.job=z.runIfDirty.bind(z);W.i=q,W.id=q.uid,z.scheduler=()=>vd(W),bi(q,!0),A()},$=(q,K,g)=>{K.component=q;const Q=q.vnode.props;q.vnode=K,q.next=null,L0(q,K.props,Q,g),z0(q,K.children,g),_r(),bf(q),br()},de=(q,K,g,Q,H,N,D,j,z=!1)=>{const A=q&&q.children,W=q?q.shapeFlag:0,X=K.children,{patchFlag:se,shapeFlag:le}=K;if(se>0){if(se&128){Ee(A,X,g,Q,H,N,D,j,z);return}else if(se&256){ie(A,X,g,Q,H,N,D,j,z);return}}le&8?(W&16&&Ie(A,H,N),X!==A&&f(g,X)):W&16?le&16?Ee(A,X,g,Q,H,N,D,j,z):Ie(A,H,N,!0):(W&8&&f(g,""),le&16&&E(X,g,Q,H,N,D,j,z))},ie=(q,K,g,Q,H,N,D,j,z)=>{q=q||ss,K=K||ss;const A=q.length,W=K.length,X=Math.min(A,W);let se;for(se=0;se<X;se++){const le=K[se]=z?ur(K[se]):Kn(K[se]);u(q[se],le,g,null,H,N,D,j,z)}A>W?Ie(q,H,N,!0,!1,X):E(K,g,Q,H,N,D,j,z,X)},Ee=(q,K,g,Q,H,N,D,j,z)=>{let A=0;const W=K.length;let X=q.length-1,se=W-1;for(;A<=X&&A<=se;){const le=q[A],_e=K[A]=z?ur(K[A]):Kn(K[A]);if(Ci(le,_e))u(le,_e,g,null,H,N,D,j,z);else break;A++}for(;A<=X&&A<=se;){const le=q[X],_e=K[se]=z?ur(K[se]):Kn(K[se]);if(Ci(le,_e))u(le,_e,g,null,H,N,D,j,z);else break;X--,se--}if(A>X){if(A<=se){const le=se+1,_e=le<W?K[le].el:Q;for(;A<=se;)u(null,K[A]=z?ur(K[A]):Kn(K[A]),g,_e,H,N,D,j,z),A++}}else if(A>se)for(;A<=X;)ee(q[A],H,N,!0),A++;else{const le=A,_e=A,Ae=new Map;for(A=_e;A<=se;A++){const B=K[A]=z?ur(K[A]):Kn(K[A]);B.key!=null&&Ae.set(B.key,A)}let ce,We=0;const it=se-_e+1;let Qe=!1,mt=0;const Be=new Array(it);for(A=0;A<it;A++)Be[A]=0;for(A=le;A<=X;A++){const B=q[A];if(We>=it){ee(B,H,N,!0);continue}let Ne;if(B.key!=null)Ne=Ae.get(B.key);else for(ce=_e;ce<=se;ce++)if(Be[ce-_e]===0&&Ci(B,K[ce])){Ne=ce;break}Ne===void 0?ee(B,H,N,!0):(Be[Ne-_e]=A+1,Ne>=mt?mt=Ne:Qe=!0,u(B,K[Ne],g,null,H,N,D,j,z),We++)}const fe=Qe?W0(Be):ss;for(ce=fe.length-1,A=it-1;A>=0;A--){const B=_e+A,Ne=K[B],ge=K[B+1],Ue=B+1<W?ge.el||bv(ge):Q;Be[A]===0?u(null,Ne,g,Ue,H,N,D,j,z):Qe&&(ce<0||A!==fe[ce]?re(Ne,g,Ue,2):ce--)}}},re=(q,K,g,Q,H=null)=>{const{el:N,type:D,transition:j,children:z,shapeFlag:A}=q;if(A&6){re(q.component.subTree,K,g,Q);return}if(A&128){q.suspense.move(K,g,Q);return}if(A&64){D.move(q,K,g,Te);return}if(D===Me){r(N,K,g);for(let X=0;X<z.length;X++)re(z[X],K,g,Q);r(q.anchor,K,g);return}if(D===Ma){M(q,K,g);return}if(Q!==2&&A&1&&j)if(Q===0)j.beforeEnter(N),r(N,K,g),Jt(()=>j.enter(N),H);else{const{leave:X,delayLeave:se,afterLeave:le}=j,_e=()=>{q.ctx.isUnmounted?i(N):r(N,K,g)},Ae=()=>{N._isLeaving&&N[Hn](!0),X(N,()=>{_e(),le&&le()})};se?se(N,_e,Ae):Ae()}else r(N,K,g)},ee=(q,K,g,Q=!1,H=!1)=>{const{type:N,props:D,ref:j,children:z,dynamicChildren:A,shapeFlag:W,patchFlag:X,dirs:se,cacheIndex:le}=q;if(X===-2&&(H=!1),j!=null&&(_r(),uo(j,null,g,q,!0),br()),le!=null&&(K.renderCache[le]=void 0),W&256){K.ctx.deactivate(q);return}const _e=W&1&&se,Ae=!ls(q);let ce;if(Ae&&(ce=D&&D.onVnodeBeforeUnmount)&&qn(ce,K,q),W&6)Z(q.component,g,Q);else{if(W&128){q.suspense.unmount(g,Q);return}_e&&_i(q,null,K,"beforeUnmount"),W&64?q.type.remove(q,K,g,Te,Q):A&&!A.hasOnce&&(N!==Me||X>0&&X&64)?Ie(A,K,g,!1,!0):(N===Me&&X&384||!H&&W&16)&&Ie(z,K,g),Q&&Ce(q)}(Ae&&(ce=D&&D.onVnodeUnmounted)||_e)&&Jt(()=>{ce&&qn(ce,K,q),_e&&_i(q,null,K,"unmounted")},g)},Ce=q=>{const{type:K,el:g,anchor:Q,transition:H}=q;if(K===Me){we(g,Q);return}if(K===Ma){V(q);return}const N=()=>{i(g),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(q.shapeFlag&1&&H&&!H.persisted){const{leave:D,delayLeave:j}=H,z=()=>D(g,N);j?j(q.el,N,z):z()}else N()},we=(q,K)=>{let g;for(;q!==K;)g=m(q),i(q),q=g;i(K)},Z=(q,K,g)=>{const{bum:Q,scope:H,job:N,subTree:D,um:j,m:z,a:A}=q;Mf(z),Mf(A),Q&&Oa(Q),H.stop(),N&&(N.flags|=8,ee(D,q,K,g)),j&&Jt(j,K),Jt(()=>{q.isUnmounted=!0},K)},Ie=(q,K,g,Q=!1,H=!1,N=0)=>{for(let D=N;D<q.length;D++)ee(q[D],K,g,Q,H)},oe=q=>{if(q.shapeFlag&6)return oe(q.component.subTree);if(q.shapeFlag&128)return q.suspense.next();const K=m(q.anchor||q.el),g=K&&K[Wg];return g?m(g):K};let he=!1;const pe=(q,K,g)=>{let Q;q==null?K._vnode&&(ee(K._vnode,null,null,!0),Q=K._vnode.component):u(K._vnode||null,q,K,null,null,null,g),K._vnode=q,he||(he=!0,bf(Q),Ug(),he=!1)},Te={p:u,um:ee,m:re,r:Ce,mt:I,mc:E,pc:de,pbc:P,n:oe,o:t};return{render:pe,hydrate:void 0,createApp:S0(pe)}}function $c({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function bi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function q0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wd(t,e,n=!1){const r=t.children,i=e.children;if(Le(r)&&Le(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ur(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&wd(o,a)),a.type===Fl&&(a.patchFlag===-1&&(a=i[s]=ur(a)),a.el=o.el),a.type===tn&&!a.el&&(a.el=o.el)}}function W0(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(i=n[n.length-1],t[i]<h){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<h?s=a+1:o=a;h<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function _v(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_v(e)}function Mf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function bv(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?bv(e.subTree):null}const wv=t=>t.__isSuspense;function H0(t,e){e&&e.pendingBranch?Le(t)?e.effects.push(...t):e.effects.push(t):e0(t)}const Me=Symbol.for("v-fgt"),Fl=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),fo=[];let vn=null;function G(t=!1){fo.push(vn=t?null:[])}function G0(){fo.pop(),vn=fo[fo.length-1]||null}let ko=1;function el(t,e=!1){ko+=t,t<0&&vn&&e&&(vn.hasOnce=!0)}function Ev(t){return t.dynamicChildren=ko>0?vn||ss:null,G0(),ko>0&&vn&&vn.push(t),t}function Y(t,e,n,r,i,s){return Ev(d(t,e,n,r,i,s,!0))}function St(t,e,n,r,i){return Ev(_t(t,e,n,r,i,!0))}function So(t){return t?t.__v_isVNode===!0:!1}function Ci(t,e){return t.type===e.type&&t.key===e.key}const Iv=({key:t})=>t??null,Va=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||At(t)||Ge(t)?{i:Gt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,r=0,i=null,s=t===Me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Iv(e),ref:e&&Va(e),scopeId:Bg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Gt};return a?(Ed(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=wt(n)?8:16),ko>0&&!o&&vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vn.push(l),l}const _t=K0;function K0(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===rv)&&(t=tn),So(t)){const a=ti(t,e,!0);return n&&Ed(a,n),ko>0&&!s&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag=-2,a}if(sw(t)&&(t=t.__vccOpts),e){e=Q0(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=je(a)),ct(l)&&(Dl(l)&&!Le(l)&&(l=Ft({},l)),e.style=He(l))}const o=wt(t)?1:wv(t)?128:Hg(t)?64:ct(t)?4:Ge(t)?2:0;return d(t,e,n,r,i,o,s,!0)}function Q0(t){return t?Dl(t)||fv(t)?Ft({},t):t:null}function ti(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=t,h=e?J0(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Iv(h),ref:e&&e.ref?n&&s?Le(s)?s.concat(Va(e)):[s,Va(e)]:Va(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ti(t.ssContent),ssFallback:t.ssFallback&&ti(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&xo(f,l.clone(f)),f}function De(t=" ",e=0){return _t(Fl,null,t,e)}function cn(t,e){const n=_t(Ma,null,t);return n.staticCount=e,n}function Pe(t="",e=!1){return e?(G(),St(tn,null,t)):_t(tn,null,t)}function Kn(t){return t==null||typeof t=="boolean"?_t(tn):Le(t)?_t(Me,null,t.slice()):So(t)?ur(t):_t(Fl,null,String(t))}function ur(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ti(t)}function Ed(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Le(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ed(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!fv(e)?e._ctx=Gt:i===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:Gt},n=32):(e=String(e),r&64?(n=16,e=[De(e)]):n=8);t.children=e,t.shapeFlag|=n}function J0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=je([e.class,r.class]));else if(i==="style")e.style=He([e.style,r.style]);else if(kl(i)){const s=e[i],o=r[i];o&&s!==o&&!(Le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function qn(t,e,n,r=null){$n(t,e,7,[n,r])}const Y0=lv();let X0=0;function Z0(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Y0,s={uid:X0++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mv(r,i),emitsOptions:cv(r,i),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:r.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=R0.bind(null,s),t.ce&&t.ce(s),s}let nn=null;const Id=()=>nn||Gt;let tl,Tu;{const t=Nl(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};tl=e("__VUE_INSTANCE_SETTERS__",n=>nn=n),Tu=e("__VUE_SSR_SETTERS__",n=>Ao=n)}const Qo=t=>{const e=nn;return tl(t),t.scope.on(),()=>{t.scope.off(),tl(e)}},Vf=()=>{nn&&nn.scope.off(),tl(null)};function Tv(t){return t.vnode.shapeFlag&4}let Ao=!1;function ew(t,e=!1,n=!1){e&&Tu(e);const{props:r,children:i}=t.vnode,s=Tv(t);V0(t,r,s,e),U0(t,i,n||e);const o=s?tw(t,e):void 0;return e&&Tu(!1),o}function tw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,w0);const{setup:r}=n;if(r){_r();const i=t.setupContext=r.length>1?rw(t):null,s=Qo(t),o=Wo(r,t,0,[t.props,i]),a=dg(o);if(br(),s(),(a||t.sp)&&!ls(t)&&ev(t),a){if(o.then(Vf,Vf),e)return o.then(l=>{Lf(t,l)}).catch(l=>{Ml(l,t,0)});t.asyncDep=o}else Lf(t,o)}else Cv(t)}function Lf(t,e,n){Ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=Lg(e)),Cv(t)}function Cv(t,e,n){const r=t.type;t.render||(t.render=r.render||Qn);{const i=Qo(t);_r();try{E0(t)}finally{br(),i()}}}const nw={get(t,e){return Zt(t,"get",""),t[e]}};function rw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nw),slots:t.slots,emit:t.emit,expose:e}}function Ul(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Lg(gd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ho)return ho[n](t)},has(e,n){return n in e||n in ho}})):t.proxy}function iw(t,e=!0){return Ge(t)?t.displayName||t.name:t.name||e&&t.__name}function sw(t){return Ge(t)&&"__vccOpts"in t}const Se=(t,e)=>Qb(t,e,Ao);function Td(t,e,n){try{el(-1);const r=arguments.length;return r===2?ct(e)&&!Le(e)?So(e)?_t(t,null,[e]):_t(t,e):_t(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&So(n)&&(n=[n]),_t(t,e,n))}finally{el(1)}}const ow="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cu;const $f=typeof window<"u"&&window.trustedTypes;if($f)try{Cu=$f.createPolicy("vue",{createHTML:t=>t})}catch{}const xv=Cu?t=>Cu.createHTML(t):t=>t,aw="http://www.w3.org/2000/svg",lw="http://www.w3.org/1998/Math/MathML",cr=typeof document<"u"?document:null,Ff=cr&&cr.createElement("template"),cw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?cr.createElementNS(aw,t):e==="mathml"?cr.createElementNS(lw,t):n?cr.createElement(t,{is:n}):cr.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>cr.createTextNode(t),createComment:t=>cr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Ff.innerHTML=xv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ff.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vr="transition",Ks="animation",Ro=Symbol("_vtc"),kv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},uw=Ft({},Kg,kv),dw=t=>(t.displayName="Transition",t.props=uw,t),ni=dw((t,{slots:e})=>Td(l0,hw(t),e)),wi=(t,e=[])=>{Le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uf=t=>t?Le(t)?t.some(e=>e.length>1):t.length>1:!1;function hw(t){const e={};for(const b in t)b in kv||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:h=o,appearToClass:f=a,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,_=fw(i),u=_&&_[0],w=_&&_[1],{onBeforeEnter:x,onEnter:R,onEnterCancelled:M,onLeave:V,onLeaveCancelled:L,onBeforeAppear:F=x,onAppear:C=R,onAppearCancelled:E=M}=e,T=(b,S,I,J)=>{b._enterCancelled=J,Ei(b,S?f:a),Ei(b,S?h:o),I&&I()},P=(b,S)=>{b._isLeaving=!1,Ei(b,p),Ei(b,v),Ei(b,m),S&&S()},O=b=>(S,I)=>{const J=b?C:R,te=()=>T(S,b,I);wi(J,[S,te]),zf(()=>{Ei(S,b?l:s),or(S,b?f:a),Uf(J)||Bf(S,r,u,te)})};return Ft(e,{onBeforeEnter(b){wi(x,[b]),or(b,s),or(b,o)},onBeforeAppear(b){wi(F,[b]),or(b,l),or(b,h)},onEnter:O(!1),onAppear:O(!0),onLeave(b,S){b._isLeaving=!0;const I=()=>P(b,S);or(b,p),b._enterCancelled?(or(b,m),Wf(b)):(Wf(b),or(b,m)),zf(()=>{b._isLeaving&&(Ei(b,p),or(b,v),Uf(V)||Bf(b,r,w,I))}),wi(V,[b,I])},onEnterCancelled(b){T(b,!1,void 0,!0),wi(M,[b])},onAppearCancelled(b){T(b,!0,void 0,!0),wi(E,[b])},onLeaveCancelled(b){P(b),wi(L,[b])}})}function fw(t){if(t==null)return null;if(ct(t))return[Fc(t.enter),Fc(t.leave)];{const e=Fc(t);return[e,e]}}function Fc(t){return pb(t)}function or(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ro]||(t[Ro]=new Set)).add(e)}function Ei(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ro];n&&(n.delete(e),n.size||(t[Ro]=void 0))}function zf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let pw=0;function Bf(t,e,n,r){const i=t._endId=++pw,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=mw(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,m),s()},m=v=>{v.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},a+1),t.addEventListener(h,m)}function mw(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),i=r(`${Vr}Delay`),s=r(`${Vr}Duration`),o=jf(i,s),a=r(`${Ks}Delay`),l=r(`${Ks}Duration`),h=jf(a,l);let f=null,p=0,m=0;e===Vr?o>0&&(f=Vr,p=o,m=s.length):e===Ks?h>0&&(f=Ks,p=h,m=l.length):(p=Math.max(o,h),f=p>0?o>h?Vr:Ks:null,m=f?f===Vr?s.length:l.length:0);const v=f===Vr&&/\b(?:transform|all)(?:,|$)/.test(r(`${Vr}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:v}}function jf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>qf(n)+qf(t[r])))}function qf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Wf(t){return(t?t.ownerDocument:document).body.offsetHeight}function gw(t,e,n){const r=t[Ro];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nl=Symbol("_vod"),Sv=Symbol("_vsh"),vw={name:"show",beforeMount(t,{value:e},{transition:n}){t[nl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Qs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Qs(t,!0),r.enter(t)):r.leave(t,()=>{Qs(t,!1)}):Qs(t,e))},beforeUnmount(t,{value:e}){Qs(t,e)}};function Qs(t,e){t.style.display=e?t[nl]:"none",t[Sv]=!e}const yw=Symbol(""),_w=/(?:^|;)\s*display\s*:/;function bw(t,e,n){const r=t.style,i=wt(n);let s=!1;if(n&&!i){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&La(r,a,"")}else for(const o in e)n[o]==null&&La(r,o,"");for(const o in n)o==="display"&&(s=!0),La(r,o,n[o])}else if(i){if(e!==n){const o=r[yw];o&&(n+=";"+o),r.cssText=n,s=_w.test(n)}}else e&&t.removeAttribute("style");nl in t&&(t[nl]=s?r.display:"",t[Sv]&&(r.display="none"))}const Hf=/\s*!important$/;function La(t,e,n){if(Le(n))n.forEach(r=>La(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ww(t,e);Hf.test(n)?t.setProperty(ui(r),n.replace(Hf,""),"important"):t[r]=n}}const Gf=["Webkit","Moz","ms"],Uc={};function ww(t,e){const n=Uc[e];if(n)return n;let r=kn(e);if(r!=="filter"&&r in t)return Uc[e]=r;r=Rl(r);for(let i=0;i<Gf.length;i++){const s=Gf[i]+r;if(s in t)return Uc[e]=s}return e}const Kf="http://www.w3.org/1999/xlink";function Qf(t,e,n,r,i,s=bb(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kf,e.slice(6,e.length)):t.setAttributeNS(Kf,e,n):n==null||s&&!mg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Vn(n)?String(n):n)}function Jf(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xv(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=mg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function Ew(t,e,n,r){t.removeEventListener(e,n,r)}const Yf=Symbol("_vei");function Iw(t,e,n,r,i=null){const s=t[Yf]||(t[Yf]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Tw(e);if(r){const h=s[e]=kw(r,i);jr(t,a,h,l)}else o&&(Ew(t,a,o,l),s[e]=void 0)}}const Xf=/(?:Once|Passive|Capture)$/;function Tw(t){let e;if(Xf.test(t)){e={};let r;for(;r=t.match(Xf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ui(t.slice(2)),e]}let zc=0;const Cw=Promise.resolve(),xw=()=>zc||(Cw.then(()=>zc=0),zc=Date.now());function kw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$n(Sw(r,n.value),e,5,[r])};return n.value=t,n.attached=xw(),n}function Sw(t,e){if(Le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Zf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Aw=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?gw(t,r,o):e==="style"?bw(t,n,r):kl(e)?ad(e)||Iw(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rw(t,e,r,o))?(Jf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qf(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!wt(r))?Jf(t,kn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qf(t,e,r,o))};function Rw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zf(e)&&Ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Zf(e)&&wt(n)?!1:e in t}const gs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Le(e)?n=>Oa(e,n):e};function Pw(t){t.target.composing=!0}function ep(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vr=Symbol("_assign");function tp(t,e,n){return e&&(t=t.trim()),n&&(t=Pl(t)),t}const pt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[vr]=gs(i);const s=r||i.props&&i.props.type==="number";jr(t,e?"change":"input",o=>{o.target.composing||t[vr](tp(t.value,n,s))}),(n||s)&&jr(t,"change",()=>{t.value=tp(t.value,n,s)}),e||(jr(t,"compositionstart",Pw),jr(t,"compositionend",ep),jr(t,"change",ep))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[vr]=gs(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Pl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Av={deep:!0,created(t,e,n){t[vr]=gs(n),jr(t,"change",()=>{const r=t._modelValue,i=Po(t),s=t.checked,o=t[vr];if(Le(r)){const a=cd(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const h=[...r];h.splice(a,1),o(h)}}else if(Ts(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(Rv(t,s))})},mounted:np,beforeUpdate(t,e,n){t[vr]=gs(n),np(t,e,n)}};function np(t,{value:e,oldValue:n},r){t._modelValue=e;let i;if(Le(e))i=cd(e,r.props.value)>-1;else if(Ts(e))i=e.has(r.props.value);else{if(e===n)return;i=Cs(e,Rv(t,!0))}t.checked!==i&&(t.checked=i)}const Gr={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Ts(e);jr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pl(Po(o)):Po(o));t[vr](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,Ho(()=>{t._assigning=!1})}),t[vr]=gs(r)},mounted(t,{value:e}){rp(t,e)},beforeUpdate(t,e,n){t[vr]=gs(n)},updated(t,{value:e}){t._assigning||rp(t,e)}};function rp(t,e){const n=t.multiple,r=Le(e);if(!(n&&!r&&!Ts(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],a=Po(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(a)):o.selected=cd(e,a)>-1}else o.selected=e.has(a);else if(Cs(Po(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Po(t){return"_value"in t?t._value:t.value}function Rv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Nw=["ctrl","shift","alt","meta"],Ow={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nw.some(n=>t[`${n}Key`]&&!e.includes(n))},Wt=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=Ow[e[o]];if(a&&a(i,e))return}return t(i,...s)})},Dw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xu=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=ui(i.key);if(e.some(o=>o===s||Dw[o]===s))return t(i)})},Mw=Ft({patchProp:Aw},cw);let ip;function Vw(){return ip||(ip=B0(Mw))}const Lw=(...t)=>{const e=Vw().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Fw(r);if(!i)return;const s=e._component;!Ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,$w(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $w(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fw(t){return wt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Pv;const zl=t=>Pv=t,Nv=Symbol();function ku(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var po;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(po||(po={}));function Uw(){const t=_g(!0),e=t.run(()=>me({}));let n=[],r=[];const i=gd({install(s){zl(i),i._a=s,s.provide(Nv,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return this._a?n.push(s):r.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ov=()=>{};function sp(t,e,n,r=Ov){t.add(e);const i=()=>{t.delete(e)&&r()};return!n&&bg()&&Eb(i),i}function Yi(t,...e){t.forEach(n=>{n(...e)})}const zw=t=>t(),op=Symbol(),Bc=Symbol();function Su(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];ku(i)&&ku(r)&&t.hasOwnProperty(n)&&!At(r)&&!gr(r)?t[n]=Su(i,r):t[n]=r}return t}const Bw=Symbol();function jw(t){return!ku(t)||!Object.prototype.hasOwnProperty.call(t,Bw)}const{assign:Fr}=Object;function qw(t){return!!(At(t)&&t.effect)}function Ww(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function h(){a||(n.state.value[t]=i?i():{});const f=Wb(n.state.value[t]);return Fr(f,s,Object.keys(o||{}).reduce((p,m)=>(p[m]=gd(Se(()=>{zl(n);const v=n._s.get(t);return o[m].call(v,v)})),p),{}))}return l=Dv(t,h,e,n,r,!0),l}function Dv(t,e,n={},r,i,s){let o;const a=Fr({actions:{}},n),l={deep:!0};let h,f,p=new Set,m=new Set,v;const _=r.state.value[t];!s&&!_&&(r.state.value[t]={});let u;function w(E){let T;h=f=!1,typeof E=="function"?(E(r.state.value[t]),T={type:po.patchFunction,storeId:t,events:v}):(Su(r.state.value[t],E),T={type:po.patchObject,payload:E,storeId:t,events:v});const P=u=Symbol();Ho().then(()=>{u===P&&(h=!0)}),f=!0,Yi(p,T,r.state.value[t])}const x=s?function(){const{state:T}=n,P=T?T():{};this.$patch(O=>{Fr(O,P)})}:Ov;function R(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const M=(E,T="")=>{if(op in E)return E[Bc]=T,E;const P=function(){zl(r);const O=Array.from(arguments),b=new Set,S=new Set;function I($){b.add($)}function J($){S.add($)}Yi(m,{args:O,name:P[Bc],store:L,after:I,onError:J});let te;try{te=E.apply(this&&this.$id===t?this:L,O)}catch($){throw Yi(S,$),$}return te instanceof Promise?te.then($=>(Yi(b,$),$)).catch($=>(Yi(S,$),Promise.reject($))):(Yi(b,te),te)};return P[op]=!0,P[Bc]=T,P},V={_p:r,$id:t,$onAction:sp.bind(null,m),$patch:w,$reset:x,$subscribe(E,T={}){const P=sp(p,E,T.detached,()=>O()),O=o.run(()=>rn(()=>r.state.value[t],b=>{(T.flush==="sync"?f:h)&&E({storeId:t,type:po.direct,events:v},b)},Fr({},l,T)));return P},$dispose:R},L=qo(V);r._s.set(t,L);const C=(r._a&&r._a.runWithContext||zw)(()=>r._e.run(()=>(o=_g()).run(()=>e({action:M}))));for(const E in C){const T=C[E];if(At(T)&&!qw(T)||gr(T))s||(_&&jw(T)&&(At(T)?T.value=_[E]:Su(T,_[E])),r.state.value[t][E]=T);else if(typeof T=="function"){const P=M(T,E);C[E]=P,a.actions[E]=T}}return Fr(L,C),Fr(rt(L),C),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:E=>{w(T=>{Fr(T,E)})}}),r._p.forEach(E=>{Fr(L,o.run(()=>E({store:L,app:r._a,pinia:r,options:a})))}),_&&s&&n.hydrate&&n.hydrate(L.$state,_),h=!0,f=!0,L}/*! #__NO_SIDE_EFFECTS__ */function Bl(t,e,n){let r;const i=typeof e=="function";r=i?n:e;function s(o,a){const l=t0();return o=o||(l?bn(Nv,null):null),o&&zl(o),o=Pv,o._s.has(t)||(i?Dv(t,e,r,o):Ww(t,r,o)),o._s.get(t)}return s.$id=t,s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Zi=typeof document<"u";function Mv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Mv(t.default)}const ot=Object.assign;function jc(t,e){const n={};for(const r in e){const i=e[r];n[r]=Fn(i)?i.map(t):t(i)}return n}const mo=()=>{},Fn=Array.isArray;function ap(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Vv=/#/g,Gw=/&/g,Kw=/\//g,Qw=/=/g,Jw=/\?/g,Lv=/\+/g,Yw=/%5B/g,Xw=/%5D/g,$v=/%5E/g,Zw=/%60/g,Fv=/%7B/g,e2=/%7C/g,Uv=/%7D/g,t2=/%20/g;function Cd(t){return t==null?"":encodeURI(""+t).replace(e2,"|").replace(Yw,"[").replace(Xw,"]")}function n2(t){return Cd(t).replace(Fv,"{").replace(Uv,"}").replace($v,"^")}function Au(t){return Cd(t).replace(Lv,"%2B").replace(t2,"+").replace(Vv,"%23").replace(Gw,"%26").replace(Zw,"`").replace(Fv,"{").replace(Uv,"}").replace($v,"^")}function r2(t){return Au(t).replace(Qw,"%3D")}function i2(t){return Cd(t).replace(Vv,"%23").replace(Jw,"%3F")}function s2(t){return i2(t).replace(Kw,"%2F")}function No(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const o2=/\/$/,a2=t=>t.replace(o2,"");function qc(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),s=e.slice(l,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=d2(r??e,n),{fullPath:r+s+o,path:r,query:i,hash:No(o)}}function l2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function c2(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&vs(e.matched[r],n.matched[i])&&zv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!u2(t[n],e[n]))return!1;return!0}function u2(t,e){return Fn(t)?cp(t,e):Fn(e)?cp(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function cp(t,e){return Fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function d2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Lr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ru=function(t){return t.pop="pop",t.push="push",t}({}),Wc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function h2(t){if(!t)if(Zi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),a2(t)}const f2=/^[^#]+#/;function p2(t,e){return t.replace(f2,"#")+e}function m2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jl=()=>({left:window.scrollX,top:window.scrollY});function g2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=m2(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function up(t,e){return(history.state?history.state.position-e:-1)+t}const Pu=new Map;function v2(t,e){Pu.set(t,e)}function y2(t){const e=Pu.get(t);return Pu.delete(t),e}function _2(t){return typeof t=="string"||t&&typeof t=="object"}function Bv(t){return typeof t=="string"||typeof t=="symbol"}let xt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const jv=Symbol("");xt.MATCHER_NOT_FOUND+"",xt.NAVIGATION_GUARD_REDIRECT+"",xt.NAVIGATION_ABORTED+"",xt.NAVIGATION_CANCELLED+"",xt.NAVIGATION_DUPLICATED+"";function ys(t,e){return ot(new Error,{type:t,[jv]:!0},e)}function ar(t,e){return t instanceof Error&&jv in t&&(e==null||!!(t.type&e))}const b2=["params","query","hash"];function w2(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of b2)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function E2(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(Lv," "),s=i.indexOf("="),o=No(s<0?i:i.slice(0,s)),a=s<0?null:No(i.slice(s+1));if(o in e){let l=e[o];Fn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function dp(t){let e="";for(let n in t){const r=t[n];if(n=r2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fn(r)?r.map(i=>i&&Au(i)):[r&&Au(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function I2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const T2=Symbol(""),hp=Symbol(""),ql=Symbol(""),xd=Symbol(""),Nu=Symbol("");function Js(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Br(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const h=m=>{m===!1?l(ys(xt.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):_2(m)?l(ys(xt.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),a())},f=s(()=>t.call(r&&r.instances[i],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Hc(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Mv(l)){const h=(l.__vccOpts||l)[e];h&&s.push(Br(h,n,r,o,a,i))}else{let h=l();s.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const p=Hw(f)?f.default:f;o.mods[a]=f,o.components[a]=p;const m=(p.__vccOpts||p)[e];return m&&Br(m,n,r,o,a,i)()}))}}return s}function C2(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(h=>vs(h,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(h=>vs(h,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let x2=()=>location.protocol+"//"+location.host;function qv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let o=i.includes(t.slice(s))?t.slice(s).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),lp(a,"")}return lp(n,t)+r+i}function k2(t,e,n,r){let i=[],s=[],o=null;const a=({state:m})=>{const v=qv(t,location),_=n.value,u=e.value;let w=0;if(m){if(n.value=v,e.value=m,o&&o===_){o=null;return}w=u?m.position-u.position:0}else r(v);i.forEach(x=>{x(n.value,_,{delta:w,type:Ru.pop,direction:w?w>0?Wc.forward:Wc.back:Wc.unknown})})};function l(){o=n.value}function h(m){i.push(m);const v=()=>{const _=i.indexOf(m);_>-1&&i.splice(_,1)};return s.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(ot({},m.state,{scroll:jl()}),"")}}function p(){for(const m of s)m();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function fp(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?jl():null}}function S2(t){const{history:e,location:n}=window,r={value:qv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:x2()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),i.value=h}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(l,h){s(l,ot({},e.state,fp(i.value.back,l,i.value.forward,!0),h,{position:i.value.position}),!0),r.value=l}function a(l,h){const f=ot({},i.value,e.state,{forward:l,scroll:jl()});s(f.current,f,!0),s(l,ot({},fp(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function A2(t){t=h2(t);const e=S2(t),n=k2(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ot({location:"",base:t,go:r,createHref:p2.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function R2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),A2(t)}let xi=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Mt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Mt||{});const P2={type:xi.Static,value:""},N2=/[a-zA-Z0-9_]/;function O2(t){if(!t)return[[]];if(t==="/")return[[P2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=Mt.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,h="",f="";function p(){h&&(n===Mt.Static?s.push({type:xi.Static,value:h}):n===Mt.Param||n===Mt.ParamRegExp||n===Mt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:xi.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Mt.ParamRegExp){r=n,n=Mt.EscapeNext;continue}switch(n){case Mt.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=Mt.Param):m();break;case Mt.EscapeNext:m(),n=r;break;case Mt.Param:l==="("?n=Mt.ParamRegExp:N2.test(l)?m():(p(),n=Mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Mt.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Mt.ParamRegExpEnd:f+=l;break;case Mt.ParamRegExpEnd:p(),n=Mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===Mt.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),i}const pp="[^/]+?",D2={sensitive:!1,strict:!1,start:!0,end:!0};var an=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(an||{});const M2=/[.+*?^${}()[\]/\\]/g;function V2(t,e){const n=ot({},D2,e),r=[];let i=n.start?"^":"";const s=[];for(const h of t){const f=h.length?[]:[an.Root];n.strict&&!h.length&&(i+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=an.Segment+(n.sensitive?an.BonusCaseSensitive:0);if(m.type===xi.Static)p||(i+="/"),i+=m.value.replace(M2,"\\$&"),v+=an.Static;else if(m.type===xi.Param){const{value:_,repeatable:u,optional:w,regexp:x}=m;s.push({name:_,repeatable:u,optional:w});const R=x||pp;if(R!==pp){v+=an.BonusCustomRegExp;try{`${R}`}catch(V){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+V.message)}}let M=u?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;p||(M=w&&h.length<2?`(?:/${M})`:"/"+M),w&&(M+="?"),i+=M,v+=an.Dynamic,w&&(v+=an.BonusOptional),u&&(v+=an.BonusRepeatable),R===".*"&&(v+=an.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=an.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",_=s[m-1];p[_.name]=v&&_.repeatable?v.split("/"):v}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===xi.Static)f+=v.value;else if(v.type===xi.Param){const{value:_,repeatable:u,optional:w}=v,x=_ in h?h[_]:"";if(Fn(x)&&!u)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=Fn(x)?x.join("/"):x;if(!R)if(w)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${_}"`);f+=R}}return f||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function L2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===an.Static+an.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===an.Static+an.Segment?1:-1:0}function Wv(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=L2(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(mp(r))return 1;if(mp(i))return-1}return i.length-r.length}function mp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $2={strict:!1,end:!0,sensitive:!1};function F2(t,e,n){const r=V2(O2(t.path),n),i=ot(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function U2(t,e){const n=[],r=new Map;e=ap($2,e);function i(p){return r.get(p)}function s(p,m,v){const _=!v,u=vp(p);u.aliasOf=v&&v.record;const w=ap(e,p),x=[u];if("alias"in p){const V=typeof p.alias=="string"?[p.alias]:p.alias;for(const L of V)x.push(vp(ot({},u,{components:v?v.record.components:u.components,path:L,aliasOf:v?v.record:u})))}let R,M;for(const V of x){const{path:L}=V;if(m&&L[0]!=="/"){const F=m.record.path,C=F[F.length-1]==="/"?"":"/";V.path=m.record.path+(L&&C+L)}if(R=F2(V,m,w),v?v.alias.push(R):(M=M||R,M!==R&&M.alias.push(R),_&&p.name&&!yp(R)&&o(p.name)),Hv(R)&&l(R),u.children){const F=u.children;for(let C=0;C<F.length;C++)s(F[C],R,v&&v.children[C])}v=v||R}return M?()=>{o(M)}:mo}function o(p){if(Bv(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function a(){return n}function l(p){const m=j2(p,n);n.splice(m,0,p),p.record.name&&!yp(p)&&r.set(p.record.name,p)}function h(p,m){let v,_={},u,w;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw ys(xt.MATCHER_NOT_FOUND,{location:p});w=v.record.name,_=ot(gp(m.params,v.keys.filter(M=>!M.optional).concat(v.parent?v.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&gp(p.params,v.keys.map(M=>M.name))),u=v.stringify(_)}else if(p.path!=null)u=p.path,v=n.find(M=>M.re.test(u)),v&&(_=v.parse(u),w=v.record.name);else{if(v=m.name?r.get(m.name):n.find(M=>M.re.test(m.path)),!v)throw ys(xt.MATCHER_NOT_FOUND,{location:p,currentLocation:m});w=v.record.name,_=ot({},m.params,p.params),u=v.stringify(_)}const x=[];let R=v;for(;R;)x.unshift(R.record),R=R.parent;return{name:w,path:u,params:_,matched:x,meta:B2(x)}}t.forEach(p=>s(p));function f(){n.length=0,r.clear()}return{addRoute:s,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function gp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:z2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function z2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function yp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B2(t){return t.reduce((e,n)=>ot(e,n.meta),{})}function j2(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Wv(t,e[s])<0?r=s:n=s+1}const i=q2(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function q2(t){let e=t;for(;e=e.parent;)if(Hv(e)&&Wv(t,e)===0)return e}function Hv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _p(t){const e=bn(ql),n=bn(xd),r=Se(()=>{const l=xe(t.to);return e.resolve(l)}),i=Se(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(vs.bind(null,f));if(m>-1)return m;const v=bp(l[h-2]);return h>1&&bp(f)===v&&p[p.length-1].path!==v?p.findIndex(vs.bind(null,l[h-2])):m}),s=Se(()=>i.value>-1&&Q2(n.params,r.value.params)),o=Se(()=>i.value>-1&&i.value===n.matched.length-1&&zv(n.params,r.value.params));function a(l={}){if(K2(l)){const h=e[xe(t.replace)?"replace":"push"](xe(t.to)).catch(mo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function W2(t){return t.length===1?t[0]:t}const H2=Zg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_p,setup(t,{slots:e}){const n=qo(_p(t)),{options:r}=bn(ql),i=Se(()=>({[wp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&W2(e.default(n));return t.custom?s:Td("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),G2=H2;function K2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Q2(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Fn(i)||i.length!==r.length||r.some((s,o)=>s.valueOf()!==i[o].valueOf()))return!1}return!0}function bp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wp=(t,e,n)=>t??e??n,J2=Zg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=bn(Nu),i=Se(()=>t.route||r.value),s=bn(hp,0),o=Se(()=>{let h=xe(s);const{matched:f}=i.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),a=Se(()=>i.value.matched[o.value]);lo(hp,Se(()=>o.value+1)),lo(T2,a),lo(Nu,i);const l=me();return rn(()=>[l.value,a.value,t.name],([h,f,p],[m,v,_])=>{f&&(f.instances[p]=h,v&&v!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),h&&f&&(!v||!vs(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(u=>u(h))},{flush:"post"}),()=>{const h=i.value,f=t.name,p=a.value,m=p&&p.components[f];if(!m)return Ep(n.default,{Component:m,route:h});const v=p.props[f],_=v?v===!0?h.params:typeof v=="function"?v(h):v:null,w=Td(m,ot({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Ep(n.default,{Component:w,route:h})||w}}});function Ep(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gv=J2;function Y2(t){const e=U2(t.routes,t),n=t.parseQuery||E2,r=t.stringifyQuery||dp,i=t.history,s=Js(),o=Js(),a=Js(),l=Bb(Lr);let h=Lr;Zi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=jc.bind(null,oe=>""+oe),p=jc.bind(null,s2),m=jc.bind(null,No);function v(oe,he){let pe,Te;return Bv(oe)?(pe=e.getRecordMatcher(oe),Te=he):Te=oe,e.addRoute(Te,pe)}function _(oe){const he=e.getRecordMatcher(oe);he&&e.removeRoute(he)}function u(){return e.getRoutes().map(oe=>oe.record)}function w(oe){return!!e.getRecordMatcher(oe)}function x(oe,he){if(he=ot({},he||l.value),typeof oe=="string"){const g=qc(n,oe,he.path),Q=e.resolve({path:g.path},he),H=i.createHref(g.fullPath);return ot(g,Q,{params:m(Q.params),hash:No(g.hash),redirectedFrom:void 0,href:H})}let pe;if(oe.path!=null)pe=ot({},oe,{path:qc(n,oe.path,he.path).path});else{const g=ot({},oe.params);for(const Q in g)g[Q]==null&&delete g[Q];pe=ot({},oe,{params:p(g)}),he.params=p(he.params)}const Te=e.resolve(pe,he),Re=oe.hash||"";Te.params=f(m(Te.params));const q=l2(r,ot({},oe,{hash:n2(Re),path:Te.path})),K=i.createHref(q);return ot({fullPath:q,hash:Re,query:r===dp?I2(oe.query):oe.query||{}},Te,{redirectedFrom:void 0,href:K})}function R(oe){return typeof oe=="string"?qc(n,oe,l.value.path):ot({},oe)}function M(oe,he){if(h!==oe)return ys(xt.NAVIGATION_CANCELLED,{from:he,to:oe})}function V(oe){return C(oe)}function L(oe){return V(ot(R(oe),{replace:!0}))}function F(oe,he){const pe=oe.matched[oe.matched.length-1];if(pe&&pe.redirect){const{redirect:Te}=pe;let Re=typeof Te=="function"?Te(oe,he):Te;return typeof Re=="string"&&(Re=Re.includes("?")||Re.includes("#")?Re=R(Re):{path:Re},Re.params={}),ot({query:oe.query,hash:oe.hash,params:Re.path!=null?{}:oe.params},Re)}}function C(oe,he){const pe=h=x(oe),Te=l.value,Re=oe.state,q=oe.force,K=oe.replace===!0,g=F(pe,Te);if(g)return C(ot(R(g),{state:typeof g=="object"?ot({},Re,g.state):Re,force:q,replace:K}),he||pe);const Q=pe;Q.redirectedFrom=he;let H;return!q&&c2(r,Te,pe)&&(H=ys(xt.NAVIGATION_DUPLICATED,{to:Q,from:Te}),re(Te,Te,!0,!1)),(H?Promise.resolve(H):P(Q,Te)).catch(N=>ar(N)?ar(N,xt.NAVIGATION_GUARD_REDIRECT)?N:Ee(N):de(N,Q,Te)).then(N=>{if(N){if(ar(N,xt.NAVIGATION_GUARD_REDIRECT))return C(ot({replace:K},R(N.to),{state:typeof N.to=="object"?ot({},Re,N.to.state):Re,force:q}),he||Q)}else N=b(Q,Te,!0,K,Re);return O(Q,Te,N),N})}function E(oe,he){const pe=M(oe,he);return pe?Promise.reject(pe):Promise.resolve()}function T(oe){const he=we.values().next().value;return he&&typeof he.runWithContext=="function"?he.runWithContext(oe):oe()}function P(oe,he){let pe;const[Te,Re,q]=C2(oe,he);pe=Hc(Te.reverse(),"beforeRouteLeave",oe,he);for(const g of Te)g.leaveGuards.forEach(Q=>{pe.push(Br(Q,oe,he))});const K=E.bind(null,oe,he);return pe.push(K),Ie(pe).then(()=>{pe=[];for(const g of s.list())pe.push(Br(g,oe,he));return pe.push(K),Ie(pe)}).then(()=>{pe=Hc(Re,"beforeRouteUpdate",oe,he);for(const g of Re)g.updateGuards.forEach(Q=>{pe.push(Br(Q,oe,he))});return pe.push(K),Ie(pe)}).then(()=>{pe=[];for(const g of q)if(g.beforeEnter)if(Fn(g.beforeEnter))for(const Q of g.beforeEnter)pe.push(Br(Q,oe,he));else pe.push(Br(g.beforeEnter,oe,he));return pe.push(K),Ie(pe)}).then(()=>(oe.matched.forEach(g=>g.enterCallbacks={}),pe=Hc(q,"beforeRouteEnter",oe,he,T),pe.push(K),Ie(pe))).then(()=>{pe=[];for(const g of o.list())pe.push(Br(g,oe,he));return pe.push(K),Ie(pe)}).catch(g=>ar(g,xt.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function O(oe,he,pe){a.list().forEach(Te=>T(()=>Te(oe,he,pe)))}function b(oe,he,pe,Te,Re){const q=M(oe,he);if(q)return q;const K=he===Lr,g=Zi?history.state:{};pe&&(Te||K?i.replace(oe.fullPath,ot({scroll:K&&g&&g.scroll},Re)):i.push(oe.fullPath,Re)),l.value=oe,re(oe,he,pe,K),Ee()}let S;function I(){S||(S=i.listen((oe,he,pe)=>{if(!Z.listening)return;const Te=x(oe),Re=F(Te,Z.currentRoute.value);if(Re){C(ot(Re,{replace:!0,force:!0}),Te).catch(mo);return}h=Te;const q=l.value;Zi&&v2(up(q.fullPath,pe.delta),jl()),P(Te,q).catch(K=>ar(K,xt.NAVIGATION_ABORTED|xt.NAVIGATION_CANCELLED)?K:ar(K,xt.NAVIGATION_GUARD_REDIRECT)?(C(ot(R(K.to),{force:!0}),Te).then(g=>{ar(g,xt.NAVIGATION_ABORTED|xt.NAVIGATION_DUPLICATED)&&!pe.delta&&pe.type===Ru.pop&&i.go(-1,!1)}).catch(mo),Promise.reject()):(pe.delta&&i.go(-pe.delta,!1),de(K,Te,q))).then(K=>{K=K||b(Te,q,!1),K&&(pe.delta&&!ar(K,xt.NAVIGATION_CANCELLED)?i.go(-pe.delta,!1):pe.type===Ru.pop&&ar(K,xt.NAVIGATION_ABORTED|xt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),O(Te,q,K)}).catch(mo)}))}let J=Js(),te=Js(),$;function de(oe,he,pe){Ee(oe);const Te=te.list();return Te.length?Te.forEach(Re=>Re(oe,he,pe)):console.error(oe),Promise.reject(oe)}function ie(){return $&&l.value!==Lr?Promise.resolve():new Promise((oe,he)=>{J.add([oe,he])})}function Ee(oe){return $||($=!oe,I(),J.list().forEach(([he,pe])=>oe?pe(oe):he()),J.reset()),oe}function re(oe,he,pe,Te){const{scrollBehavior:Re}=t;if(!Zi||!Re)return Promise.resolve();const q=!pe&&y2(up(oe.fullPath,0))||(Te||!pe)&&history.state&&history.state.scroll||null;return Ho().then(()=>Re(oe,he,q)).then(K=>K&&g2(K)).catch(K=>de(K,oe,he))}const ee=oe=>i.go(oe);let Ce;const we=new Set,Z={currentRoute:l,listening:!0,addRoute:v,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:u,resolve:x,options:t,push:V,replace:L,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:ie,install(oe){oe.component("RouterLink",G2),oe.component("RouterView",Gv),oe.config.globalProperties.$router=Z,Object.defineProperty(oe.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(l)}),Zi&&!Ce&&l.value===Lr&&(Ce=!0,V(i.location).catch(Te=>{}));const he={};for(const Te in Lr)Object.defineProperty(he,Te,{get:()=>l.value[Te],enumerable:!0});oe.provide(ql,Z),oe.provide(xd,Mg(he)),oe.provide(Nu,l);const pe=oe.unmount;we.add(oe),oe.unmount=function(){we.delete(oe),we.size<1&&(h=Lr,S&&S(),S=null,l.value=Lr,Ce=!1,$=!1),pe()}}};function Ie(oe){return oe.reduce((he,pe)=>he.then(()=>T(pe)),Promise.resolve())}return Z}function kd(){return bn(ql)}function Kv(t){return bn(xd)}const Bt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},X2={__name:"App",setup(t){return(e,n)=>(G(),St(xe(Gv),null,{default:kt(({Component:r,route:i})=>[_t(ni,{name:"app-view",mode:"out-in"},{default:kt(()=>[(G(),St(iv(r),{key:i.fullPath}))]),_:2},1024)]),_:1}))}},Z2=Bt(X2,[["__scopeId","data-v-b9a41e6f"]]),jt=[];for(let t=0;t<256;++t)jt.push((t+256).toString(16).slice(1));function eE(t,e=0){return(jt[t[e+0]]+jt[t[e+1]]+jt[t[e+2]]+jt[t[e+3]]+"-"+jt[t[e+4]]+jt[t[e+5]]+"-"+jt[t[e+6]]+jt[t[e+7]]+"-"+jt[t[e+8]]+jt[t[e+9]]+"-"+jt[t[e+10]]+jt[t[e+11]]+jt[t[e+12]]+jt[t[e+13]]+jt[t[e+14]]+jt[t[e+15]]).toLowerCase()}let Gc;const tE=new Uint8Array(16);function nE(){if(!Gc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Gc=crypto.getRandomValues.bind(crypto)}return Gc(tE)}const rE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ip={randomUUID:rE};function iE(t,e,n){var i;t=t||{};const r=t.random??((i=t.rng)==null?void 0:i.call(t))??nE();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,eE(r)}function Pn(t,e,n){return Ip.randomUUID&&!t?Ip.randomUUID():iE(t)}const sE=()=>{};var Tp={};/**
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
 */const Qv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|h>>6,v=h&63;l||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||p==null)throw new aE;const m=s<<2|a>>4;if(r.push(m),h!==64){const v=a<<4&240|h>>2;if(r.push(v),p!==64){const _=h<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lE=function(t){const e=Qv(t);return Jv.encodeByteArray(e,!0)},rl=function(t){return lE(t).replace(/\./g,"")},Yv=function(t){try{return Jv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uE=()=>cE().__FIREBASE_DEFAULTS__,dE=()=>{if(typeof process>"u"||typeof Tp>"u")return;const t=Tp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yv(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return sE()||uE()||dE()||hE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xv=t=>{var e,n;return(n=(e=Wl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},fE=t=>{const e=Xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zv=()=>{var t;return(t=Wl())==null?void 0:t.config},ey=t=>{var e;return(e=Wl())==null?void 0:e[`_${t}`]};/**
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
 */class pE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ty(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function mE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),""].join(".")}const go={};function gE(){const t={prod:[],emulator:[]};for(const e of Object.keys(go))go[e]?t.emulator.push(e):t.prod.push(e);return t}function vE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Cp=!1;function ny(t,e){if(typeof window>"u"||typeof document>"u"||!xs(window.location.host)||go[t]===e||go[t]||Cp)return;go[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=gE().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Cp=!0,o()},m}function f(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=vE(r),v=n("text"),_=document.getElementById(v)||document.createElement("span"),u=n("learnmore"),w=document.getElementById(u)||document.createElement("a"),x=n("preprendIcon"),R=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const M=m.element;a(M),f(w,u);const V=h();l(R,x),M.append(R,_,w,V),document.body.appendChild(M)}s?(_.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function _E(){var e;const t=(e=Wl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EE(){const t=sn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IE(){return!_E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ad(){try{return typeof indexedDB=="object"}catch{return!1}}function Rd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function ry(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const TE="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TE,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?CE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zn(i,a,r)}}function CE(t,e){return t.replace(xE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xE=/\{\$([^}]+)}/g;function kE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xp(s)&&xp(o)){if(!ri(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xp(t){return t!==null&&typeof t=="object"}/**
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
 */function Jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SE(t,e){const n=new AE(t,e);return n.subscribe.bind(n)}class AE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}/**
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
 */const PE=1e3,NE=2,OE=4*60*60*1e3,DE=.5;function kp(t,e=PE,n=NE){const r=e*Math.pow(n,t),i=Math.round(DE*r*(Math.random()-.5)*2);return Math.min(OE,r+i)}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ti="[DEFAULT]";/**
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
 */class ME{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LE(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ti){return this.instances.has(e)}getOptions(e=Ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ti){return this.component?this.component.multipleInstances?e:Ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VE(t){return t===Ti?void 0:t}function LE(t){return t.instantiationMode==="EAGER"}/**
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
 */class $E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ME(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Xe||(Xe={}));const FE={debug:Xe.DEBUG,verbose:Xe.VERBOSE,info:Xe.INFO,warn:Xe.WARN,error:Xe.ERROR,silent:Xe.SILENT},UE=Xe.INFO,zE={[Xe.DEBUG]:"log",[Xe.VERBOSE]:"log",[Xe.INFO]:"info",[Xe.WARN]:"warn",[Xe.ERROR]:"error"},BE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=UE,this._logHandler=BE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Xe.DEBUG,...e),this._logHandler(this,Xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Xe.VERBOSE,...e),this._logHandler(this,Xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Xe.INFO,...e),this._logHandler(this,Xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Xe.WARN,...e),this._logHandler(this,Xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Xe.ERROR,...e),this._logHandler(this,Xe.ERROR,...e)}}const jE=(t,e)=>e.some(n=>t instanceof n);let Sp,Ap;function qE(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WE(){return Ap||(Ap=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iy=new WeakMap,Ou=new WeakMap,sy=new WeakMap,Qc=new WeakMap,Pd=new WeakMap;function HE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iy.set(n,t)}).catch(()=>{}),Pd.set(e,t),e}function GE(t){if(Ou.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ou.set(t,e)}let Du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KE(t){Du=t(Du)}function QE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return sy.set(r,e.sort?e.sort():[e]),Jr(r)}:WE().includes(t)?function(...e){return t.apply(Jc(this),e),Jr(iy.get(this))}:function(...e){return Jr(t.apply(Jc(this),e))}}function JE(t){return typeof t=="function"?QE(t):(t instanceof IDBTransaction&&GE(t),jE(t,qE())?new Proxy(t,Du):t)}function Jr(t){if(t instanceof IDBRequest)return HE(t);if(Qc.has(t))return Qc.get(t);const e=JE(t);return e!==t&&(Qc.set(t,e),Pd.set(e,t)),e}const Jc=t=>Pd.get(t);function oy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const YE=["get","getKey","getAll","getAllKeys","count"],XE=["put","add","delete","clear"],Yc=new Map;function Rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return Yc.set(e,s),s}KE(t=>({...t,get:(e,n,r)=>Rp(e,n)||t.get(e,n,r),has:(e,n)=>!!Rp(e,n)||t.has(e,n)}));/**
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
 */class ZE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mu="@firebase/app",Pp="0.14.9";/**
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
 */const Er=new Hl("@firebase/app"),tI="@firebase/app-compat",nI="@firebase/analytics-compat",rI="@firebase/analytics",iI="@firebase/app-check-compat",sI="@firebase/app-check",oI="@firebase/auth",aI="@firebase/auth-compat",lI="@firebase/database",cI="@firebase/data-connect",uI="@firebase/database-compat",dI="@firebase/functions",hI="@firebase/functions-compat",fI="@firebase/installations",pI="@firebase/installations-compat",mI="@firebase/messaging",gI="@firebase/messaging-compat",vI="@firebase/performance",yI="@firebase/performance-compat",_I="@firebase/remote-config",bI="@firebase/remote-config-compat",wI="@firebase/storage",EI="@firebase/storage-compat",II="@firebase/firestore",TI="@firebase/ai",CI="@firebase/firestore-compat",xI="firebase",kI="12.10.0";/**
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
 */const Vu="[DEFAULT]",SI={[Mu]:"fire-core",[tI]:"fire-core-compat",[rI]:"fire-analytics",[nI]:"fire-analytics-compat",[sI]:"fire-app-check",[iI]:"fire-app-check-compat",[oI]:"fire-auth",[aI]:"fire-auth-compat",[lI]:"fire-rtdb",[cI]:"fire-data-connect",[uI]:"fire-rtdb-compat",[dI]:"fire-fn",[hI]:"fire-fn-compat",[fI]:"fire-iid",[pI]:"fire-iid-compat",[mI]:"fire-fcm",[gI]:"fire-fcm-compat",[vI]:"fire-perf",[yI]:"fire-perf-compat",[_I]:"fire-rc",[bI]:"fire-rc-compat",[wI]:"fire-gcs",[EI]:"fire-gcs-compat",[II]:"fire-fst",[CI]:"fire-fst-compat",[TI]:"fire-vertex","fire-js":"fire-js",[xI]:"fire-js-all"};/**
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
 */const il=new Map,AI=new Map,Lu=new Map;function Np(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(Lu.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of il.values())Np(n,t);for(const n of AI.values())Np(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const RI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new zi("app","Firebase",RI);/**
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
 */class PI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=kI;function ay(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Vu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Yr.create("bad-app-name",{appName:String(i)});if(n||(n=Zv()),!n)throw Yr.create("no-options");const s=il.get(i);if(s){if(ri(n,s.options)&&ri(r,s.config))return s;throw Yr.create("duplicate-app",{appName:i})}const o=new $E(i);for(const l of Lu.values())o.addComponent(l);const a=new PI(n,r,o);return il.set(i,a),a}function Nd(t=Vu){const e=il.get(t);if(!e&&t===Vu&&Zv())return ay();if(!e)throw Yr.create("no-app",{appName:t});return e}function xn(t,e,n){let r=SI[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(o.join(" "));return}tr(new Un(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const NI="firebase-heartbeat-database",OI=1,Oo="firebase-heartbeat-store";let Xc=null;function ly(){return Xc||(Xc=oy(NI,OI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function DI(t){try{const n=(await ly()).transaction(Oo),r=await n.objectStore(Oo).get(cy(t));return await n.done,r}catch(e){if(e instanceof zn)Er.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function Op(t,e){try{const r=(await ly()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,cy(t)),await r.done}catch(n){if(n instanceof zn)Er.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function cy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MI=1024,VI=30;class LI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>VI){const o=UI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dp(),{heartbeatsToSend:r,unsentEntries:i}=$I(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Er.warn(n),""}}}function Dp(){return new Date().toISOString().substring(0,10)}function $I(t,e=MI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ad()?Rd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mp(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}function UI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function zI(t){tr(new Un("platform-logger",e=>new ZE(e),"PRIVATE")),tr(new Un("heartbeat",e=>new LI(e),"PRIVATE")),xn(Mu,Pp,t),xn(Mu,Pp,"esm2020"),xn("fire-js","")}zI("");var BI="firebase",jI="12.10.0";/**
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
 */xn(BI,jI,"app");function uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qI=uy,dy=new zi("auth","Firebase",uy());/**
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
 */const sl=new Hl("@firebase/auth");function WI(t,...e){sl.logLevel<=Xe.WARN&&sl.warn(`Auth (${ks}): ${t}`,...e)}function $a(t,...e){sl.logLevel<=Xe.ERROR&&sl.error(`Auth (${ks}): ${t}`,...e)}/**
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
 */function Sn(t,...e){throw Dd(t,...e)}function Dn(t,...e){return Dd(t,...e)}function Od(t,e,n){const r={...qI(),[e]:n};return new zi("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return Od(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sn(t,"argument-error"),Od(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dy.create(t,...e)}function Fe(t,e,...n){if(!t)throw Dd(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function Ir(t,e){t||pr(e)}/**
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
 */function $u(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function GI(){return Vp()==="http:"||Vp()==="https:"}function Vp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function KI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GI()||Sd()||"connection"in navigator)?navigator.onLine:!0}function QI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ir(n>e,"Short delay should be less than long delay!"),this.isMobile=yE()||wE()}get(){return KI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Md(t,e){Ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XI=new Yo(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,i={}){return fy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Jo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...s};return bE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&xs(t.emulatorConfig.host)&&(h.credentials="include"),hy.fetch()(await py(t,t.config.apiHost,n,a),h)})}async function fy(t,e,n){t._canInitEmulator=!1;const r={...JI,...e};try{const i=new eT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ia(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Od(t,f,h);Sn(t,f)}}catch(i){if(i instanceof zn)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function Xo(t,e,n,r,i={}){const s=await Ar(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function py(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Md(t.config,i):`${t.config.apiScheme}://${i}`;return YI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function ZI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),XI.get())})}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dn(t,e,r);return i.customData._tokenResponse=n,i}function Lp(t){return t!==void 0&&t.enterprise!==void 0}class tT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nT(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
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
 */async function rT(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function ol(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iT(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=Vd(r);Fe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vo(Zc(i.auth_time)),issuedAtTime:vo(Zc(i.iat)),expirationTime:vo(Zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zc(t){return Number(t)*1e3}function Vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yv(n);return i?JSON.parse(i):($a("Failed to decode base64 JWT payload"),null)}catch(i){return $a("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $p(t){const e=Vd(t);return Fe(e,"internal-error"),Fe(typeof e.exp<"u","internal-error"),Fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&sT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vo(this.lastLoginAt),this.creationTime=vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function al(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Do(t,ol(e,{idToken:n}));Fe(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?my(i.providerUserInfo):[],o=lT(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Fu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function aT(t){const e=Et(t);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function my(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function cT(t,e){const n=await fy(t,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await py(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&xs(t.emulatorConfig.host)&&(l.credentials="include"),hy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uT(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
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
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Fe(e.idToken,"internal-error"),Fe(typeof e.idToken<"u","internal-error"),Fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$p(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Fe(e.length!==0,"internal-error");const n=$p(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cs;return r&&(Fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Fe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Fe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function $r(t,e){Fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new oT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return Fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iT(this,e)}reload(){return aT(this)}_assign(e){this!==e&&(Fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await Do(this,rT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:v,providerData:_,stsTokenManager:u}=n;Fe(p&&u,e,"internal-error");const w=cs.fromJSON(this.name,u);Fe(typeof p=="string",e,"internal-error"),$r(r,e.name),$r(i,e.name),Fe(typeof m=="boolean",e,"internal-error"),Fe(typeof v=="boolean",e,"internal-error"),$r(s,e.name),$r(o,e.name),$r(a,e.name),$r(l,e.name),$r(h,e.name),$r(f,e.name);const x=new Nn({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:w,createdAt:h,lastLoginAt:f});return _&&Array.isArray(_)&&(x.providerData=_.map(R=>({...R}))),l&&(x._redirectEventId=l),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new cs;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Fe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?my(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new cs;a.updateFromIdToken(r);const l=new Nn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
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
 */const Fp=new Map;function mr(t){Ir(t instanceof Function,"Expected a class definition");let e=Fp.get(t);return e?(Ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fp.set(t,e),e)}/**
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
 */class gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gy.type="NONE";const Up=gy;/**
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
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ol(this.auth,{idToken:e}).catch(()=>{});return n?Nn._fromGetAccountInfoResponse(this.auth,n,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(mr(Up),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||mr(Up);const o=Fa(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await ol(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Nn._fromGetAccountInfoResponse(e,m,f)}else p=Nn._fromJSON(e,f);h!==s&&(a=p),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new us(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new us(s,e,r))}}/**
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
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(by(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ey(e))return"Blackberry";if(Iy(e))return"Webos";if(yy(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vy(t=sn()){return/firefox\//i.test(t)}function yy(t=sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(t=sn()){return/crios\//i.test(t)}function by(t=sn()){return/iemobile/i.test(t)}function wy(t=sn()){return/android/i.test(t)}function Ey(t=sn()){return/blackberry/i.test(t)}function Iy(t=sn()){return/webos/i.test(t)}function Ld(t=sn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dT(t=sn()){var e;return Ld(t)&&!!((e=window.navigator)!=null&&e.standalone)}function hT(){return EE()&&document.documentMode===10}function Ty(t=sn()){return Ld(t)||wy(t)||Iy(t)||Ey(t)||/windows phone/i.test(t)||by(t)}/**
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
 */function Cy(t,e=[]){let n;switch(t){case"Browser":n=zp(sn());break;case"Worker":n=`${zp(sn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${r}`}/**
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
 */class fT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pT(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
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
 */const mT=6;class gT{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mT,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class vT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bp(this),this.idTokenSubscription=new Bp(this),this.beforeStateQueue=new fT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ol(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(yr(this));const n=e?Et(e):null;return n&&Fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pT(this),n=new gT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mr(e)||this._popupRedirectResolver;Fe(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Fe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&WI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function di(t){return Et(t)}class Bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=SE(n=>this.observer=n)}get next(){return Fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yT(t){Gl=t}function xy(t){return Gl.loadJS(t)}function _T(){return Gl.recaptchaEnterpriseScript}function bT(){return Gl.gapiScript}function wT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ET{constructor(){this.enterprise=new IT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class IT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const TT="recaptcha-enterprise",ky="NO_RECAPTCHA";class CT{constructor(e){this.type=TT,this.auth=di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{nT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new tT(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Lp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(ky)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ET().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Lp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_T();l.length!==0&&(l+=a),xy(l).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function jp(t,e,n,r=!1,i=!1){const s=new CT(t);let o;if(i)o=ky;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Uu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await jp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await jp(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function xT(t,e){const n=Bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ri(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function kT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ST(t,e,n){const r=di(t);Fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Sy(e),{host:o,port:a}=AT(e),l=a===null?"":`:${a}`,h={url:`${s}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Fe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Fe(ri(h,r.config.emulator)&&ri(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,xs(o)?(ty(`${s}//${o}${l}`),ny("Auth",!0)):RT()}function Sy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AT(t){const e=Sy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $d{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function PT(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NT(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}async function OT(t,e){return Ar(t,"POST","/v1/accounts:sendOobCode",Sr(t,e))}async function DT(t,e){return OT(t,e)}/**
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
 */async function MT(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function VT(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
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
 */class Mo extends $d{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,n,"signInWithPassword",NT);case"emailLink":return MT(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,r,"signUpPassword",PT);case"emailLink":return VT(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ds(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
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
 */const LT="http://localhost";class Tr extends $d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:LT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
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
 */function $T(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FT(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,r=Zs(eo(t)).deep_link_id;return(r?Zs(eo(r)).link:null)||r||n||e||t}class Fd{constructor(e){const n=Zs(eo(e)),r=n.apiKey??null,i=n.oobCode??null,s=$T(n.mode??null);Fe(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=FT(e);try{return new Fd(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fd.parseLink(n);return Fe(r,"argument-error"),Mo._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class As extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class yo extends As{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return Fe("providerId"in n&&"signInMethod"in n,"argument-error"),Tr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return Fe(e.idToken||e.accessToken,"argument-error"),Tr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return yo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return yo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new yo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class qr extends As{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class Wr extends As{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.GITHUB_SIGN_IN_METHOD="github.com";Wr.PROVIDER_ID="github.com";/**
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
 */class Hr extends As{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */async function UT(t,e){return Xo(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
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
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=Wp(r);return new Di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wp(r);return new Di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ll extends zn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ll(e,n,r,i)}}function Ay(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ll._fromErrorAndOperation(t,s,e,r):s})}async function zT(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Di._forOperation(t,"link",r)}/**
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
 */async function BT(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(yr(r));const i="reauthenticate";try{const s=await Do(t,Ay(r,i,e,t),n);Fe(s.idToken,r,"internal-error");const o=Vd(s.idToken);Fe(o,r,"internal-error");const{sub:a}=o;return Fe(t.uid===a,r,"user-mismatch"),Di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
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
 */async function Ry(t,e,n=!1){if(gn(t.app))return Promise.reject(yr(t));const r="signIn",i=await Ay(t,r,e),s=await Di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jT(t,e){return Ry(di(t),e)}/**
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
 */async function Py(t){const e=di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qT(t,e,n){if(gn(t.app))return Promise.reject(yr(t));const r=di(t),o=await Uu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Py(t),l}),a=await Di._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function WT(t,e,n){return gn(t.app)?Promise.reject(yr(t)):jT(Et(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Py(t),r})}async function Hp(t,e){const n=Et(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await DT(n.auth,i);s!==t.email&&await t.reload()}function HT(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function GT(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function KT(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function QT(t){return Et(t).signOut()}const cl="__sak";/**
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
 */class Ny{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cl,"1"),this.storage.removeItem(cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const JT=1e3,YT=10;class Oy extends Ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oy.type="LOCAL";const XT=Oy;/**
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
 */class Dy extends Ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dy.type="SESSION";const My=Dy;/**
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
 */function ZT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),l=await ZT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kl.receivers=[];/**
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
 */function zd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const h=zd("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jn(){return window}function tC(t){Jn().location.href=t}/**
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
 */function Vy(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function nC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iC(){return Vy()?self:null}/**
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
 */const Ly="firebaseLocalStorageDb",sC=1,ul="firebaseLocalStorage",$y="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ql(t,e){return t.transaction([ul],e?"readwrite":"readonly").objectStore(ul)}function oC(){const t=indexedDB.deleteDatabase(Ly);return new Zo(t).toPromise()}function zu(){const t=indexedDB.open(Ly,sC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ul,{keyPath:$y})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ul)?e(r):(r.close(),await oC(),e(await zu()))})})}async function Gp(t,e,n){const r=Ql(t,!0).put({[$y]:e,value:n});return new Zo(r).toPromise()}async function aC(t,e){const n=Ql(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function Kp(t,e){const n=Ql(t,!0).delete(e);return new Zo(n).toPromise()}const lC=800,cC=3;class Fy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(iC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await nC(),!this.activeServiceWorker)return;this.sender=new eC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zu();return await Gp(e,cl,"1"),await Kp(e,cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ql(i,!1).getAll();return new Zo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fy.type="LOCAL";const uC=Fy;new Yo(3e4,6e4);/**
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
 */function Uy(t,e){return e?mr(e):(Fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bd extends $d{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dC(t){return Ry(t.auth,new Bd(t),t.bypassAuthState)}function hC(t){const{auth:e,user:n}=t;return Fe(n,e,"internal-error"),BT(n,new Bd(t),t.bypassAuthState)}async function fC(t){const{auth:e,user:n}=t;return Fe(n,e,"internal-error"),zT(n,new Bd(t),t.bypassAuthState)}/**
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
 */class zy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dC;case"linkViaPopup":case"linkViaRedirect":return fC;case"reauthViaPopup":case"reauthViaRedirect":return hC;default:Sn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pC=new Yo(2e3,1e4);async function Qp(t,e,n){if(gn(t.app))return Promise.reject(Dn(t,"operation-not-supported-in-this-environment"));const r=di(t);HI(t,e,Ud);const i=Uy(r,n);return new ki(r,"signInViaPopup",e,i).executeNotNull()}class ki extends zy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Fe(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pC.get())};e()}}ki.currentPopupAction=null;/**
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
 */const mC="pendingRedirect",Ua=new Map;class gC extends zy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await vC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vC(t,e){const n=bC(e),r=_C(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yC(t,e){Ua.set(t._key(),e)}function _C(t){return mr(t._redirectPersistence)}function bC(t){return Fa(mC,t.config.apiKey,t.name)}async function wC(t,e,n=!1){if(gn(t.app))return Promise.reject(yr(t));const r=di(t),i=Uy(r,e),o=await new gC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const EC=10*60*1e3;class IC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!By(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jp(e))}saveEventToCache(e){this.cachedEventUids.add(Jp(e)),this.lastProcessedEventTime=Date.now()}}function Jp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function By({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return By(t);default:return!1}}/**
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
 */async function CC(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const xC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kC=/^https?/;async function SC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CC(t);for(const n of e)try{if(AC(n))return}catch{}Sn(t,"unauthorized-domain")}function AC(t){const e=$u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kC.test(n))return!1;if(xC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RC=new Yo(3e4,6e4);function Yp(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PC(t){return new Promise((e,n)=>{var i,s,o;function r(){Yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yp(),n(Dn(t,"network-request-failed"))},timeout:RC.get()})}if((s=(i=Jn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Jn().gapi)!=null&&o.load)r();else{const a=wT("iframefcb");return Jn()[a]=()=>{gapi.load?r():n(Dn(t,"network-request-failed"))},xy(`${bT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw za=null,e})}let za=null;function NC(t){return za=za||PC(t),za}/**
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
 */const OC=new Yo(5e3,15e3),DC="__/auth/iframe",MC="emulator/auth/iframe",VC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $C(t){const e=t.config;Fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Md(e,MC):`https://${t.config.authDomain}/${DC}`,r={apiKey:e.apiKey,appName:t.name,v:ks},i=LC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jo(r).slice(1)}`}async function FC(t){const e=await NC(t),n=Jn().gapi;return Fe(n,t,"internal-error"),e.open({where:document.body,url:$C(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),a=Jn().setTimeout(()=>{s(o)},OC.get());function l(){Jn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const UC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zC=500,BC=600,jC="_blank",qC="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WC(t,e,n,r=zC,i=BC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...UC,width:r.toString(),height:i.toString(),top:s,left:o},h=sn().toLowerCase();n&&(a=_y(h)?jC:n),vy(h)&&(e=e||qC,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,_])=>`${m}${v}=${_},`,"");if(dT(h)&&a!=="_self")return HC(e||"",a),new Xp(null);const p=window.open(e||"",a,f);Fe(p,t,"popup-blocked");try{p.focus()}catch{}return new Xp(p)}function HC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const GC="__/auth/handler",KC="emulator/auth/handler",QC=encodeURIComponent("fac");async function Zp(t,e,n,r,i,s){Fe(t.config.authDomain,t,"auth-domain-config-required"),Fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ks,eventId:i};if(e instanceof Ud){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof As){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),h=l?`#${QC}=${encodeURIComponent(l)}`:"";return`${JC(t)}?${Jo(a).slice(1)}${h}`}function JC({config:t}){return t.emulator?Md(t,KC):`https://${t.authDomain}/${GC}`}/**
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
 */const eu="webStorageSupport";class YC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=My,this._completeRedirectFn=wC,this._overrideRedirectResult=yC}async _openPopup(e,n,r,i){var o;Ir((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Zp(e,n,r,$u(),i);return WC(e,s,zd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zp(e,n,r,$u(),i);return tC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FC(e),r=new IC(e);return n.register("authEvent",i=>(Fe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eu,{type:eu},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[eu];s!==void 0&&n(!!s),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||yy()||Ld()}}const XC=YC;var em="@firebase/auth",tm="1.12.1";/**
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
 */class ZC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ex(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tx(t){tr(new Un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cy(t)},h=new vT(r,i,s,l);return kT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new Un("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new ZC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(em,tm,ex(t)),xn(em,tm,"esm2020")}/**
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
 */const nx=5*60,rx=ey("authIdTokenMaxAge")||nx;let nm=null;const ix=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rx)return;const i=n==null?void 0:n.token;nm!==i&&(nm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sx(t=Nd()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xT(t,{popupRedirectResolver:XC,persistence:[uC,XT,My]}),r=ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ix(s.toString());GT(n,o,()=>o(n.currentUser)),HT(n,a=>o(a))}}const i=Xv("auth");return i&&ST(n,`http://${i}`),n}function ox(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}yT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ox().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tx("Browser");var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,jy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,E){function T(){}T.prototype=E.prototype,C.F=E.prototype,C.prototype=new T,C.prototype.constructor=C,C.D=function(P,O,b){for(var S=Array(arguments.length-2),I=2;I<arguments.length;I++)S[I-2]=arguments[I];return E.prototype[O].apply(P,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,E,T){T||(T=0);const P=Array(16);if(typeof E=="string")for(var O=0;O<16;++O)P[O]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(O=0;O<16;++O)P[O]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=C.g[0],T=C.g[1],O=C.g[2];let b=C.g[3],S;S=E+(b^T&(O^b))+P[0]+3614090360&4294967295,E=T+(S<<7&4294967295|S>>>25),S=b+(O^E&(T^O))+P[1]+3905402710&4294967295,b=E+(S<<12&4294967295|S>>>20),S=O+(T^b&(E^T))+P[2]+606105819&4294967295,O=b+(S<<17&4294967295|S>>>15),S=T+(E^O&(b^E))+P[3]+3250441966&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(b^T&(O^b))+P[4]+4118548399&4294967295,E=T+(S<<7&4294967295|S>>>25),S=b+(O^E&(T^O))+P[5]+1200080426&4294967295,b=E+(S<<12&4294967295|S>>>20),S=O+(T^b&(E^T))+P[6]+2821735955&4294967295,O=b+(S<<17&4294967295|S>>>15),S=T+(E^O&(b^E))+P[7]+4249261313&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(b^T&(O^b))+P[8]+1770035416&4294967295,E=T+(S<<7&4294967295|S>>>25),S=b+(O^E&(T^O))+P[9]+2336552879&4294967295,b=E+(S<<12&4294967295|S>>>20),S=O+(T^b&(E^T))+P[10]+4294925233&4294967295,O=b+(S<<17&4294967295|S>>>15),S=T+(E^O&(b^E))+P[11]+2304563134&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(b^T&(O^b))+P[12]+1804603682&4294967295,E=T+(S<<7&4294967295|S>>>25),S=b+(O^E&(T^O))+P[13]+4254626195&4294967295,b=E+(S<<12&4294967295|S>>>20),S=O+(T^b&(E^T))+P[14]+2792965006&4294967295,O=b+(S<<17&4294967295|S>>>15),S=T+(E^O&(b^E))+P[15]+1236535329&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(O^b&(T^O))+P[1]+4129170786&4294967295,E=T+(S<<5&4294967295|S>>>27),S=b+(T^O&(E^T))+P[6]+3225465664&4294967295,b=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(b^E))+P[11]+643717713&4294967295,O=b+(S<<14&4294967295|S>>>18),S=T+(b^E&(O^b))+P[0]+3921069994&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^b&(T^O))+P[5]+3593408605&4294967295,E=T+(S<<5&4294967295|S>>>27),S=b+(T^O&(E^T))+P[10]+38016083&4294967295,b=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(b^E))+P[15]+3634488961&4294967295,O=b+(S<<14&4294967295|S>>>18),S=T+(b^E&(O^b))+P[4]+3889429448&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^b&(T^O))+P[9]+568446438&4294967295,E=T+(S<<5&4294967295|S>>>27),S=b+(T^O&(E^T))+P[14]+3275163606&4294967295,b=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(b^E))+P[3]+4107603335&4294967295,O=b+(S<<14&4294967295|S>>>18),S=T+(b^E&(O^b))+P[8]+1163531501&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^b&(T^O))+P[13]+2850285829&4294967295,E=T+(S<<5&4294967295|S>>>27),S=b+(T^O&(E^T))+P[2]+4243563512&4294967295,b=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(b^E))+P[7]+1735328473&4294967295,O=b+(S<<14&4294967295|S>>>18),S=T+(b^E&(O^b))+P[12]+2368359562&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(T^O^b)+P[5]+4294588738&4294967295,E=T+(S<<4&4294967295|S>>>28),S=b+(E^T^O)+P[8]+2272392833&4294967295,b=E+(S<<11&4294967295|S>>>21),S=O+(b^E^T)+P[11]+1839030562&4294967295,O=b+(S<<16&4294967295|S>>>16),S=T+(O^b^E)+P[14]+4259657740&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^b)+P[1]+2763975236&4294967295,E=T+(S<<4&4294967295|S>>>28),S=b+(E^T^O)+P[4]+1272893353&4294967295,b=E+(S<<11&4294967295|S>>>21),S=O+(b^E^T)+P[7]+4139469664&4294967295,O=b+(S<<16&4294967295|S>>>16),S=T+(O^b^E)+P[10]+3200236656&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^b)+P[13]+681279174&4294967295,E=T+(S<<4&4294967295|S>>>28),S=b+(E^T^O)+P[0]+3936430074&4294967295,b=E+(S<<11&4294967295|S>>>21),S=O+(b^E^T)+P[3]+3572445317&4294967295,O=b+(S<<16&4294967295|S>>>16),S=T+(O^b^E)+P[6]+76029189&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^b)+P[9]+3654602809&4294967295,E=T+(S<<4&4294967295|S>>>28),S=b+(E^T^O)+P[12]+3873151461&4294967295,b=E+(S<<11&4294967295|S>>>21),S=O+(b^E^T)+P[15]+530742520&4294967295,O=b+(S<<16&4294967295|S>>>16),S=T+(O^b^E)+P[2]+3299628645&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(O^(T|~b))+P[0]+4096336452&4294967295,E=T+(S<<6&4294967295|S>>>26),S=b+(T^(E|~O))+P[7]+1126891415&4294967295,b=E+(S<<10&4294967295|S>>>22),S=O+(E^(b|~T))+P[14]+2878612391&4294967295,O=b+(S<<15&4294967295|S>>>17),S=T+(b^(O|~E))+P[5]+4237533241&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~b))+P[12]+1700485571&4294967295,E=T+(S<<6&4294967295|S>>>26),S=b+(T^(E|~O))+P[3]+2399980690&4294967295,b=E+(S<<10&4294967295|S>>>22),S=O+(E^(b|~T))+P[10]+4293915773&4294967295,O=b+(S<<15&4294967295|S>>>17),S=T+(b^(O|~E))+P[1]+2240044497&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~b))+P[8]+1873313359&4294967295,E=T+(S<<6&4294967295|S>>>26),S=b+(T^(E|~O))+P[15]+4264355552&4294967295,b=E+(S<<10&4294967295|S>>>22),S=O+(E^(b|~T))+P[6]+2734768916&4294967295,O=b+(S<<15&4294967295|S>>>17),S=T+(b^(O|~E))+P[13]+1309151649&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~b))+P[4]+4149444226&4294967295,E=T+(S<<6&4294967295|S>>>26),S=b+(T^(E|~O))+P[11]+3174756917&4294967295,b=E+(S<<10&4294967295|S>>>22),S=O+(E^(b|~T))+P[2]+718787259&4294967295,O=b+(S<<15&4294967295|S>>>17),S=T+(b^(O|~E))+P[9]+3951481745&4294967295,C.g[0]=C.g[0]+E&4294967295,C.g[1]=C.g[1]+(O+(S<<21&4294967295|S>>>11))&4294967295,C.g[2]=C.g[2]+O&4294967295,C.g[3]=C.g[3]+b&4294967295}r.prototype.v=function(C,E){E===void 0&&(E=C.length);const T=E-this.blockSize,P=this.C;let O=this.h,b=0;for(;b<E;){if(O==0)for(;b<=T;)i(this,C,b),b+=this.blockSize;if(typeof C=="string"){for(;b<E;)if(P[O++]=C.charCodeAt(b++),O==this.blockSize){i(this,P),O=0;break}}else for(;b<E;)if(P[O++]=C[b++],O==this.blockSize){i(this,P),O=0;break}}this.h=O,this.o+=E},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var E=1;E<C.length-8;++E)C[E]=0;E=this.o*8;for(var T=C.length-8;T<C.length;++T)C[T]=E&255,E/=256;for(this.v(C),C=Array(16),E=0,T=0;T<4;++T)for(let P=0;P<32;P+=8)C[E++]=this.g[T]>>>P&255;return C};function s(C,E){var T=a;return Object.prototype.hasOwnProperty.call(T,C)?T[C]:T[C]=E(C)}function o(C,E){this.h=E;const T=[];let P=!0;for(let O=C.length-1;O>=0;O--){const b=C[O]|0;P&&b==E||(T[O]=b,P=!1)}this.g=T}var a={};function l(C){return-128<=C&&C<128?s(C,function(E){return new o([E|0],E<0?-1:0)}):new o([C|0],C<0?-1:0)}function h(C){if(isNaN(C)||!isFinite(C))return p;if(C<0)return w(h(-C));const E=[];let T=1;for(let P=0;C>=T;P++)E[P]=C/T|0,T*=4294967296;return new o(E,0)}function f(C,E){if(C.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C.charAt(0)=="-")return w(f(C.substring(1),E));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(E,8));let P=p;for(let b=0;b<C.length;b+=8){var O=Math.min(8,C.length-b);const S=parseInt(C.substring(b,b+O),E);O<8?(O=h(Math.pow(E,O)),P=P.j(O).add(h(S))):(P=P.j(T),P=P.add(h(S)))}return P}var p=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(u(this))return-w(this).m();let C=0,E=1;for(let T=0;T<this.g.length;T++){const P=this.i(T);C+=(P>=0?P:4294967296+P)*E,E*=4294967296}return C},t.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(_(this))return"0";if(u(this))return"-"+w(this).toString(C);const E=h(Math.pow(C,6));var T=this;let P="";for(;;){const O=V(T,E).g;T=x(T,O.j(E));let b=((T.g.length>0?T.g[0]:T.h)>>>0).toString(C);if(T=O,_(T))return b+P;for(;b.length<6;)b="0"+b;P=b+P}},t.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function _(C){if(C.h!=0)return!1;for(let E=0;E<C.g.length;E++)if(C.g[E]!=0)return!1;return!0}function u(C){return C.h==-1}t.l=function(C){return C=x(this,C),u(C)?-1:_(C)?0:1};function w(C){const E=C.g.length,T=[];for(let P=0;P<E;P++)T[P]=~C.g[P];return new o(T,~C.h).add(m)}t.abs=function(){return u(this)?w(this):this},t.add=function(C){const E=Math.max(this.g.length,C.g.length),T=[];let P=0;for(let O=0;O<=E;O++){let b=P+(this.i(O)&65535)+(C.i(O)&65535),S=(b>>>16)+(this.i(O)>>>16)+(C.i(O)>>>16);P=S>>>16,b&=65535,S&=65535,T[O]=S<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function x(C,E){return C.add(w(E))}t.j=function(C){if(_(this)||_(C))return p;if(u(this))return u(C)?w(this).j(w(C)):w(w(this).j(C));if(u(C))return w(this.j(w(C)));if(this.l(v)<0&&C.l(v)<0)return h(this.m()*C.m());const E=this.g.length+C.g.length,T=[];for(var P=0;P<2*E;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(let O=0;O<C.g.length;O++){const b=this.i(P)>>>16,S=this.i(P)&65535,I=C.i(O)>>>16,J=C.i(O)&65535;T[2*P+2*O]+=S*J,R(T,2*P+2*O),T[2*P+2*O+1]+=b*J,R(T,2*P+2*O+1),T[2*P+2*O+1]+=S*I,R(T,2*P+2*O+1),T[2*P+2*O+2]+=b*I,R(T,2*P+2*O+2)}for(C=0;C<E;C++)T[C]=T[2*C+1]<<16|T[2*C];for(C=E;C<2*E;C++)T[C]=0;return new o(T,0)};function R(C,E){for(;(C[E]&65535)!=C[E];)C[E+1]+=C[E]>>>16,C[E]&=65535,E++}function M(C,E){this.g=C,this.h=E}function V(C,E){if(_(E))throw Error("division by zero");if(_(C))return new M(p,p);if(u(C))return E=V(w(C),E),new M(w(E.g),w(E.h));if(u(E))return E=V(C,w(E)),new M(w(E.g),E.h);if(C.g.length>30){if(u(C)||u(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,P=E;P.l(C)<=0;)T=L(T),P=L(P);var O=F(T,1),b=F(P,1);for(P=F(P,2),T=F(T,2);!_(P);){var S=b.add(P);S.l(C)<=0&&(O=O.add(T),b=S),P=F(P,1),T=F(T,1)}return E=x(C,O.j(E)),new M(O,E)}for(O=p;C.l(E)>=0;){for(T=Math.max(1,Math.floor(C.m()/E.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),b=h(T),S=b.j(E);u(S)||S.l(C)>0;)T-=P,b=h(T),S=b.j(E);_(b)&&(b=m),O=O.add(b),C=x(C,S)}return new M(O,C)}t.B=function(C){return V(this,C).h},t.and=function(C){const E=Math.max(this.g.length,C.g.length),T=[];for(let P=0;P<E;P++)T[P]=this.i(P)&C.i(P);return new o(T,this.h&C.h)},t.or=function(C){const E=Math.max(this.g.length,C.g.length),T=[];for(let P=0;P<E;P++)T[P]=this.i(P)|C.i(P);return new o(T,this.h|C.h)},t.xor=function(C){const E=Math.max(this.g.length,C.g.length),T=[];for(let P=0;P<E;P++)T[P]=this.i(P)^C.i(P);return new o(T,this.h^C.h)};function L(C){const E=C.g.length+1,T=[];for(let P=0;P<E;P++)T[P]=C.i(P)<<1|C.i(P-1)>>>31;return new o(T,C.h)}function F(C,E){const T=E>>5;E%=32;const P=C.g.length-T,O=[];for(let b=0;b<P;b++)O[b]=E>0?C.i(b+T)>>>E|C.i(b+T+1)<<32-E:C.i(b+T);return new o(O,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Xr=o}).apply(typeof rm<"u"?rm:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qy,to,Wy,Ba,Bu,Hy,Gy,Ky;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var y=0;y<c.length;++y){var k=c[y];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var r=n(this);function i(c,y){if(y)e:{var k=r;c=c.split(".");for(var U=0;U<c.length-1;U++){var ae=c[U];if(!(ae in k))break e;k=k[ae]}c=c[c.length-1],U=k[c],y=y(U),y!=U&&y!=null&&e(k,c,{configurable:!0,writable:!0,value:y})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(y){var k=[],U;for(U in y)Object.prototype.hasOwnProperty.call(y,U)&&k.push([U,y[U]]);return k}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function l(c,y,k){return c.call.apply(c.bind,arguments)}function h(c,y,k){return h=l,h.apply(null,arguments)}function f(c,y){var k=Array.prototype.slice.call(arguments,1);return function(){var U=k.slice();return U.push.apply(U,arguments),c.apply(this,U)}}function p(c,y){function k(){}k.prototype=y.prototype,c.Z=y.prototype,c.prototype=new k,c.prototype.constructor=c,c.Ob=function(U,ae,ue){for(var ke=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)ke[Je-2]=arguments[Je];return y.prototype[ae].apply(U,ke)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function v(c){const y=c.length;if(y>0){const k=Array(y);for(let U=0;U<y;U++)k[U]=c[U];return k}return[]}function _(c,y){for(let U=1;U<arguments.length;U++){const ae=arguments[U];var k=typeof ae;if(k=k!="object"?k:ae?Array.isArray(ae)?"array":k:"null",k=="array"||k=="object"&&typeof ae.length=="number"){k=c.length||0;const ue=ae.length||0;c.length=k+ue;for(let ke=0;ke<ue;ke++)c[k+ke]=ae[ke]}else c.push(ae)}}class u{constructor(y,k){this.i=y,this.j=k,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function w(c){o.setTimeout(()=>{throw c},0)}function x(){var c=C;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class R{constructor(){this.h=this.g=null}add(y,k){const U=M.get();U.set(y,k),this.h?this.h.next=U:this.g=U,this.h=U}}var M=new u(()=>new V,c=>c.reset());class V{constructor(){this.next=this.g=this.h=null}set(y,k){this.h=y,this.g=k,this.next=null}reset(){this.next=this.g=this.h=null}}let L,F=!1,C=new R,E=()=>{const c=Promise.resolve(void 0);L=()=>{c.then(T)}};function T(){for(var c;c=x();){try{c.h.call(c.g)}catch(k){w(k)}var y=M;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}F=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const k=()=>{};o.addEventListener("test",k,y),o.removeEventListener("test",k,y)}catch{}return c}();function S(c){return/^[\s\xa0]*$/.test(c)}function I(c,y){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}p(I,O),I.prototype.init=function(c,y){const k=this.type=c.type,U=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(k=="mouseover"?y=c.fromElement:k=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,U?(this.clientX=U.clientX!==void 0?U.clientX:U.pageX,this.clientY=U.clientY!==void 0?U.clientY:U.pageY,this.screenX=U.screenX||0,this.screenY=U.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&I.Z.h.call(this)},I.prototype.h=function(){I.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var J="closure_listenable_"+(Math.random()*1e6|0),te=0;function $(c,y,k,U,ae){this.listener=c,this.proxy=null,this.src=y,this.type=k,this.capture=!!U,this.ha=ae,this.key=++te,this.da=this.fa=!1}function de(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ie(c,y,k){for(const U in c)y.call(k,c[U],U,c)}function Ee(c,y){for(const k in c)y.call(void 0,c[k],k,c)}function re(c){const y={};for(const k in c)y[k]=c[k];return y}const ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ce(c,y){let k,U;for(let ae=1;ae<arguments.length;ae++){U=arguments[ae];for(k in U)c[k]=U[k];for(let ue=0;ue<ee.length;ue++)k=ee[ue],Object.prototype.hasOwnProperty.call(U,k)&&(c[k]=U[k])}}function we(c){this.src=c,this.g={},this.h=0}we.prototype.add=function(c,y,k,U,ae){const ue=c.toString();c=this.g[ue],c||(c=this.g[ue]=[],this.h++);const ke=Ie(c,y,U,ae);return ke>-1?(y=c[ke],k||(y.fa=!1)):(y=new $(y,this.src,ue,!!U,ae),y.fa=k,c.push(y)),y};function Z(c,y){const k=y.type;if(k in c.g){var U=c.g[k],ae=Array.prototype.indexOf.call(U,y,void 0),ue;(ue=ae>=0)&&Array.prototype.splice.call(U,ae,1),ue&&(de(y),c.g[k].length==0&&(delete c.g[k],c.h--))}}function Ie(c,y,k,U){for(let ae=0;ae<c.length;++ae){const ue=c[ae];if(!ue.da&&ue.listener==y&&ue.capture==!!k&&ue.ha==U)return ae}return-1}var oe="closure_lm_"+(Math.random()*1e6|0),he={};function pe(c,y,k,U,ae){if(Array.isArray(y)){for(let ue=0;ue<y.length;ue++)pe(c,y[ue],k,U,ae);return null}return k=D(k),c&&c[J]?c.J(y,k,a(U)?!!U.capture:!1,ae):Te(c,y,k,!1,U,ae)}function Te(c,y,k,U,ae,ue){if(!y)throw Error("Invalid event type");const ke=a(ae)?!!ae.capture:!!ae;let Je=H(c);if(Je||(c[oe]=Je=new we(c)),k=Je.add(y,k,U,ke,ue),k.proxy)return k;if(U=Re(),k.proxy=U,U.src=c,U.listener=k,c.addEventListener)b||(ae=ke),ae===void 0&&(ae=!1),c.addEventListener(y.toString(),U,ae);else if(c.attachEvent)c.attachEvent(g(y.toString()),U);else if(c.addListener&&c.removeListener)c.addListener(U);else throw Error("addEventListener and attachEvent are unavailable.");return k}function Re(){function c(k){return y.call(c.src,c.listener,k)}const y=Q;return c}function q(c,y,k,U,ae){if(Array.isArray(y))for(var ue=0;ue<y.length;ue++)q(c,y[ue],k,U,ae);else U=a(U)?!!U.capture:!!U,k=D(k),c&&c[J]?(c=c.i,ue=String(y).toString(),ue in c.g&&(y=c.g[ue],k=Ie(y,k,U,ae),k>-1&&(de(y[k]),Array.prototype.splice.call(y,k,1),y.length==0&&(delete c.g[ue],c.h--)))):c&&(c=H(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Ie(y,k,U,ae)),(k=c>-1?y[c]:null)&&K(k))}function K(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[J])Z(y.i,c);else{var k=c.type,U=c.proxy;y.removeEventListener?y.removeEventListener(k,U,c.capture):y.detachEvent?y.detachEvent(g(k),U):y.addListener&&y.removeListener&&y.removeListener(U),(k=H(y))?(Z(k,c),k.h==0&&(k.src=null,y[oe]=null)):de(c)}}}function g(c){return c in he?he[c]:he[c]="on"+c}function Q(c,y){if(c.da)c=!0;else{y=new I(y,this);const k=c.listener,U=c.ha||c.src;c.fa&&K(c),c=k.call(U,y)}return c}function H(c){return c=c[oe],c instanceof we?c:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function D(c){return typeof c=="function"?c:(c[N]||(c[N]=function(y){return c.handleEvent(y)}),c[N])}function j(){P.call(this),this.i=new we(this),this.M=this,this.G=null}p(j,P),j.prototype[J]=!0,j.prototype.removeEventListener=function(c,y,k,U){q(this,c,y,k,U)};function z(c,y){var k,U=c.G;if(U)for(k=[];U;U=U.G)k.push(U);if(c=c.M,U=y.type||y,typeof y=="string")y=new O(y,c);else if(y instanceof O)y.target=y.target||c;else{var ae=y;y=new O(U,c),Ce(y,ae)}ae=!0;let ue,ke;if(k)for(ke=k.length-1;ke>=0;ke--)ue=y.g=k[ke],ae=A(ue,U,!0,y)&&ae;if(ue=y.g=c,ae=A(ue,U,!0,y)&&ae,ae=A(ue,U,!1,y)&&ae,k)for(ke=0;ke<k.length;ke++)ue=y.g=k[ke],ae=A(ue,U,!1,y)&&ae}j.prototype.N=function(){if(j.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const k=c.g[y];for(let U=0;U<k.length;U++)de(k[U]);delete c.g[y],c.h--}}this.G=null},j.prototype.J=function(c,y,k,U){return this.i.add(String(c),y,!1,k,U)},j.prototype.K=function(c,y,k,U){return this.i.add(String(c),y,!0,k,U)};function A(c,y,k,U){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let ae=!0;for(let ue=0;ue<y.length;++ue){const ke=y[ue];if(ke&&!ke.da&&ke.capture==k){const Je=ke.listener,Dt=ke.ha||ke.src;ke.fa&&Z(c.i,ke),ae=Je.call(Dt,U)!==!1&&ae}}return ae&&!U.defaultPrevented}function W(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=h(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:o.setTimeout(c,y||0)}function X(c){c.g=W(()=>{c.g=null,c.i&&(c.i=!1,X(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class se extends P{constructor(y,k){super(),this.m=y,this.l=k,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function le(c){P.call(this),this.h=c,this.g={}}p(le,P);var _e=[];function Ae(c){ie(c.g,function(y,k){this.g.hasOwnProperty(k)&&K(y)},c),c.g={}}le.prototype.N=function(){le.Z.N.call(this),Ae(this)},le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=o.JSON.stringify,We=o.JSON.parse,it=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Qe(){}function mt(){}var Be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function fe(){O.call(this,"d")}p(fe,O);function B(){O.call(this,"c")}p(B,O);var Ne={},ge=null;function Ue(){return ge=ge||new j}Ne.Ia="serverreachability";function tt(c){O.call(this,Ne.Ia,c)}p(tt,O);function Tt(c){const y=Ue();z(y,new tt(y))}Ne.STAT_EVENT="statevent";function Ot(c,y){O.call(this,Ne.STAT_EVENT,c),this.stat=y}p(Ot,O);function ut(c){const y=Ue();z(y,new Ot(y,c))}Ne.Ja="timingevent";function fn(c,y){O.call(this,Ne.Ja,c),this.size=y}p(fn,O);function Rn(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},y)}function pn(){this.g=!0}pn.prototype.ua=function(){this.g=!1};function Wi(c,y,k,U,ae,ue){c.info(function(){if(c.g)if(ue){var ke="",Je=ue.split("&");for(let dt=0;dt<Je.length;dt++){var Dt=Je[dt].split("=");if(Dt.length>1){const Ut=Dt[0];Dt=Dt[1];const jn=Ut.split("_");ke=jn.length>=2&&jn[1]=="type"?ke+(Ut+"="+Dt+"&"):ke+(Ut+"=redacted&")}}}else ke=null;else ke=ue;return"XMLHTTP REQ ("+U+") [attempt "+ae+"]: "+y+`
`+k+`
`+ke})}function Hi(c,y,k,U,ae,ue,ke){c.info(function(){return"XMLHTTP RESP ("+U+") [ attempt "+ae+"]: "+y+`
`+k+`
`+ue+" "+ke})}function ir(c,y,k,U){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+la(c,k)+(U?" "+U:"")})}function aa(c,y){c.info(function(){return"TIMEOUT: "+y})}pn.prototype.info=function(){};function la(c,y){if(!c.g)return y;if(!y)return null;try{const ue=JSON.parse(y);if(ue){for(c=0;c<ue.length;c++)if(Array.isArray(ue[c])){var k=ue[c];if(!(k.length<2)){var U=k[1];if(Array.isArray(U)&&!(U.length<1)){var ae=U[0];if(ae!="noop"&&ae!="stop"&&ae!="close")for(let ke=1;ke<U.length;ke++)U[ke]=""}}}}return ce(ue)}catch{return y}}var pi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ds={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ms;function Gi(){}p(Gi,Qe),Gi.prototype.g=function(){return new XMLHttpRequest},Ms=new Gi;function Rr(c){return encodeURIComponent(String(c))}function ne(c){var y=1;c=c.split(":");const k=[];for(;y>0&&c.length;)k.push(c.shift()),y--;return c.length&&k.push(c.join(":")),k}function bt(c,y,k,U){this.j=c,this.i=y,this.l=k,this.S=U||1,this.V=new le(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ca}function ca(){this.i=null,this.g="",this.h=!1}var Oh={},yc={};function _c(c,y,k){c.M=1,c.A=da(Bn(y)),c.u=k,c.R=!0,Dh(c,null)}function Dh(c,y){c.F=Date.now(),ua(c),c.B=Bn(c.A);var k=c.B,U=c.S;Array.isArray(U)||(U=[String(U)]),Gh(k.i,"t",U),c.C=0,k=c.j.L,c.h=new ca,c.g=hf(c.j,k?y:null,!c.u),c.P>0&&(c.O=new se(h(c.Y,c,c.g),c.P)),y=c.V,k=c.g,U=c.ba;var ae="readystatechange";Array.isArray(ae)||(ae&&(_e[0]=ae.toString()),ae=_e);for(let ue=0;ue<ae.length;ue++){const ke=pe(k,ae[ue],U||y.handleEvent,!1,y.h||y);if(!ke)break;y.g[ke.key]=ke}y=c.J?re(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),Tt(),Wi(c.i,c.v,c.B,c.l,c.S,c.u)}bt.prototype.ba=function(c){c=c.target;const y=this.O;y&&Or(c)==3?y.j():this.Y(c)},bt.prototype.Y=function(c){try{if(c==this.g)e:{const Je=Or(this.g),Dt=this.g.ya(),dt=this.g.ca();if(!(Je<3)&&(Je!=3||this.g&&(this.h.h||this.g.la()||ef(this.g)))){this.K||Je!=4||Dt==7||(Dt==8||dt<=0?Tt(3):Tt(2)),bc(this);var y=this.g.ca();this.X=y;var k=G_(this);if(this.o=y==200,Hi(this.i,this.v,this.B,this.l,this.S,Je,y),this.o){if(this.U&&!this.L){t:{if(this.g){var U,ae=this.g;if((U=ae.g?ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(U)){var ue=U;break t}}ue=null}if(c=ue)ir(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wc(this,c);else{this.o=!1,this.m=3,ut(12),mi(this),Vs(this);break e}}if(this.R){c=!0;let Ut;for(;!this.K&&this.C<k.length;)if(Ut=K_(this,k),Ut==yc){Je==4&&(this.m=4,ut(14),c=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==Oh){this.m=4,ut(15),ir(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else ir(this.i,this.l,Ut,null),wc(this,Ut);if(Mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||k.length!=0||this.h.h||(this.m=1,ut(16),c=!1),this.o=this.o&&c,!c)ir(this.i,this.l,k,"[Invalid Chunked Response]"),mi(this),Vs(this);else if(k.length>0&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.aa&&!ke.P&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ac(ke),ke.P=!0,ut(11))}}else ir(this.i,this.l,k,null),wc(this,k);Je==4&&mi(this),this.o&&!this.K&&(Je==4?lf(this.j,this):(this.o=!1,ua(this)))}else lb(this.g),y==400&&k.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),mi(this),Vs(this)}}}catch{}finally{}};function G_(c){if(!Mh(c))return c.g.la();const y=ef(c.g);if(y==="")return"";let k="";const U=y.length,ae=Or(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return mi(c),Vs(c),"";c.h.i=new o.TextDecoder}for(let ue=0;ue<U;ue++)c.h.h=!0,k+=c.h.i.decode(y[ue],{stream:!(ae&&ue==U-1)});return y.length=0,c.h.g+=k,c.C=0,c.h.g}function Mh(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function K_(c,y){var k=c.C,U=y.indexOf(`
`,k);return U==-1?yc:(k=Number(y.substring(k,U)),isNaN(k)?Oh:(U+=1,U+k>y.length?yc:(y=y.slice(U,U+k),c.C=U+k,y)))}bt.prototype.cancel=function(){this.K=!0,mi(this)};function ua(c){c.T=Date.now()+c.H,Vh(c,c.H)}function Vh(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Rn(h(c.aa,c),y)}function bc(c){c.D&&(o.clearTimeout(c.D),c.D=null)}bt.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(aa(this.i,this.B),this.M!=2&&(Tt(),ut(17)),mi(this),this.m=2,Vs(this)):Vh(this,this.T-c)};function Vs(c){c.j.I==0||c.K||lf(c.j,c)}function mi(c){bc(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Ae(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function wc(c,y){try{var k=c.j;if(k.I!=0&&(k.g==c||Ec(k.h,c))){if(!c.L&&Ec(k.h,c)&&k.I==3){try{var U=k.Ba.g.parse(y)}catch{U=null}if(Array.isArray(U)&&U.length==3){var ae=U;if(ae[0]==0){e:if(!k.v){if(k.g)if(k.g.F+3e3<c.F)ga(k),pa(k);else break e;Sc(k),ut(18)}}else k.xa=ae[1],0<k.xa-k.K&&ae[2]<37500&&k.F&&k.A==0&&!k.C&&(k.C=Rn(h(k.Va,k),6e3));Fh(k.h)<=1&&k.ta&&(k.ta=void 0)}else vi(k,11)}else if((c.L||k.g==c)&&ga(k),!S(y))for(ae=k.Ba.g.parse(y),y=0;y<ae.length;y++){let dt=ae[y];const Ut=dt[0];if(!(Ut<=k.K))if(k.K=Ut,dt=dt[1],k.I==2)if(dt[0]=="c"){k.M=dt[1],k.ba=dt[2];const jn=dt[3];jn!=null&&(k.ka=jn,k.j.info("VER="+k.ka));const yi=dt[4];yi!=null&&(k.za=yi,k.j.info("SVER="+k.za));const Dr=dt[5];Dr!=null&&typeof Dr=="number"&&Dr>0&&(U=1.5*Dr,k.O=U,k.j.info("backChannelRequestTimeoutMs_="+U)),U=k;const Mr=c.g;if(Mr){const ya=Mr.g?Mr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ya){var ue=U.h;ue.g||ya.indexOf("spdy")==-1&&ya.indexOf("quic")==-1&&ya.indexOf("h2")==-1||(ue.j=ue.l,ue.g=new Set,ue.h&&(Ic(ue,ue.h),ue.h=null))}if(U.G){const Rc=Mr.g?Mr.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(U.wa=Rc,gt(U.J,U.G,Rc))}}k.I=3,k.l&&k.l.ra(),k.aa&&(k.T=Date.now()-c.F,k.j.info("Handshake RTT: "+k.T+"ms")),U=k;var ke=c;if(U.na=df(U,U.L?U.ba:null,U.W),ke.L){Uh(U.h,ke);var Je=ke,Dt=U.O;Dt&&(Je.H=Dt),Je.D&&(bc(Je),ua(Je)),U.g=ke}else of(U);k.i.length>0&&ma(k)}else dt[0]!="stop"&&dt[0]!="close"||vi(k,7);else k.I==3&&(dt[0]=="stop"||dt[0]=="close"?dt[0]=="stop"?vi(k,7):kc(k):dt[0]!="noop"&&k.l&&k.l.qa(dt),k.A=0)}}Tt(4)}catch{}}var Q_=class{constructor(c,y){this.g=c,this.map=y}};function Lh(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $h(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Fh(c){return c.h?1:c.g?c.g.size:0}function Ec(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ic(c,y){c.g?c.g.add(y):c.h=y}function Uh(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Lh.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function zh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const k of c.g.values())y=y.concat(k.G);return y}return v(c.i)}var Bh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function J_(c,y){if(c){c=c.split("&");for(let k=0;k<c.length;k++){const U=c[k].indexOf("=");let ae,ue=null;U>=0?(ae=c[k].substring(0,U),ue=c[k].substring(U+1)):ae=c[k],y(ae,ue?decodeURIComponent(ue.replace(/\+/g," ")):"")}}}function Pr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Pr?(this.l=c.l,Ls(this,c.j),this.o=c.o,this.g=c.g,$s(this,c.u),this.h=c.h,Tc(this,Kh(c.i)),this.m=c.m):c&&(y=String(c).match(Bh))?(this.l=!1,Ls(this,y[1]||"",!0),this.o=Fs(y[2]||""),this.g=Fs(y[3]||"",!0),$s(this,y[4]),this.h=Fs(y[5]||"",!0),Tc(this,y[6]||"",!0),this.m=Fs(y[7]||"")):(this.l=!1,this.i=new zs(null,this.l))}Pr.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(Us(y,jh,!0),":");var k=this.g;return(k||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Us(y,jh,!0),"@"),c.push(Rr(k).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),k=this.u,k!=null&&c.push(":",String(k))),(k=this.h)&&(this.g&&k.charAt(0)!="/"&&c.push("/"),c.push(Us(k,k.charAt(0)=="/"?Z_:X_,!0))),(k=this.i.toString())&&c.push("?",k),(k=this.m)&&c.push("#",Us(k,tb)),c.join("")},Pr.prototype.resolve=function(c){const y=Bn(this);let k=!!c.j;k?Ls(y,c.j):k=!!c.o,k?y.o=c.o:k=!!c.g,k?y.g=c.g:k=c.u!=null;var U=c.h;if(k)$s(y,c.u);else if(k=!!c.h){if(U.charAt(0)!="/")if(this.g&&!this.h)U="/"+U;else{var ae=y.h.lastIndexOf("/");ae!=-1&&(U=y.h.slice(0,ae+1)+U)}if(ae=U,ae==".."||ae==".")U="";else if(ae.indexOf("./")!=-1||ae.indexOf("/.")!=-1){U=ae.lastIndexOf("/",0)==0,ae=ae.split("/");const ue=[];for(let ke=0;ke<ae.length;){const Je=ae[ke++];Je=="."?U&&ke==ae.length&&ue.push(""):Je==".."?((ue.length>1||ue.length==1&&ue[0]!="")&&ue.pop(),U&&ke==ae.length&&ue.push("")):(ue.push(Je),U=!0)}U=ue.join("/")}else U=ae}return k?y.h=U:k=c.i.toString()!=="",k?Tc(y,Kh(c.i)):k=!!c.m,k&&(y.m=c.m),y};function Bn(c){return new Pr(c)}function Ls(c,y,k){c.j=k?Fs(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function $s(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function Tc(c,y,k){y instanceof zs?(c.i=y,nb(c.i,c.l)):(k||(y=Us(y,eb)),c.i=new zs(y,c.l))}function gt(c,y,k){c.i.set(y,k)}function da(c){return gt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Fs(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Us(c,y,k){return typeof c=="string"?(c=encodeURI(c).replace(y,Y_),k&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Y_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var jh=/[#\/\?@]/g,X_=/[#\?:]/g,Z_=/[#\?]/g,eb=/[#\?@]/g,tb=/#/g;function zs(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function gi(c){c.g||(c.g=new Map,c.h=0,c.i&&J_(c.i,function(y,k){c.add(decodeURIComponent(y.replace(/\+/g," ")),k)}))}t=zs.prototype,t.add=function(c,y){gi(this),this.i=null,c=Ki(this,c);let k=this.g.get(c);return k||this.g.set(c,k=[]),k.push(y),this.h+=1,this};function qh(c,y){gi(c),y=Ki(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Wh(c,y){return gi(c),y=Ki(c,y),c.g.has(y)}t.forEach=function(c,y){gi(this),this.g.forEach(function(k,U){k.forEach(function(ae){c.call(y,ae,U,this)},this)},this)};function Hh(c,y){gi(c);let k=[];if(typeof y=="string")Wh(c,y)&&(k=k.concat(c.g.get(Ki(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)k=k.concat(c[y]);return k}t.set=function(c,y){return gi(this),this.i=null,c=Ki(this,c),Wh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},t.get=function(c,y){return c?(c=Hh(this,c),c.length>0?String(c[0]):y):y};function Gh(c,y,k){qh(c,y),k.length>0&&(c.i=null,c.g.set(Ki(c,y),v(k)),c.h+=k.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let U=0;U<y.length;U++){var k=y[U];const ae=Rr(k);k=Hh(this,k);for(let ue=0;ue<k.length;ue++){let ke=ae;k[ue]!==""&&(ke+="="+Rr(k[ue])),c.push(ke)}}return this.i=c.join("&")};function Kh(c){const y=new zs;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Ki(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function nb(c,y){y&&!c.j&&(gi(c),c.i=null,c.g.forEach(function(k,U){const ae=U.toLowerCase();U!=ae&&(qh(this,U),Gh(this,ae,k))},c)),c.j=y}function rb(c,y){const k=new pn;if(o.Image){const U=new Image;U.onload=f(Nr,k,"TestLoadImage: loaded",!0,y,U),U.onerror=f(Nr,k,"TestLoadImage: error",!1,y,U),U.onabort=f(Nr,k,"TestLoadImage: abort",!1,y,U),U.ontimeout=f(Nr,k,"TestLoadImage: timeout",!1,y,U),o.setTimeout(function(){U.ontimeout&&U.ontimeout()},1e4),U.src=c}else y(!1)}function ib(c,y){const k=new pn,U=new AbortController,ae=setTimeout(()=>{U.abort(),Nr(k,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:U.signal}).then(ue=>{clearTimeout(ae),ue.ok?Nr(k,"TestPingServer: ok",!0,y):Nr(k,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(ae),Nr(k,"TestPingServer: error",!1,y)})}function Nr(c,y,k,U,ae){try{ae&&(ae.onload=null,ae.onerror=null,ae.onabort=null,ae.ontimeout=null),U(k)}catch{}}function sb(){this.g=new it}function Cc(c){this.i=c.Sb||null,this.h=c.ab||!1}p(Cc,Qe),Cc.prototype.g=function(){return new ha(this.i,this.h)};function ha(c,y){j.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ha,j),t=ha.prototype,t.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,js(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||o).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Bs(this):js(this),this.readyState==3&&Qh(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Bs(this))},t.Na=function(c){this.g&&(this.response=c,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,js(c)}t.setRequestHeader=function(c,y){this.A.append(c,y)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var k=y.next();!k.done;)k=k.value,c.push(k[0]+": "+k[1]),k=y.next();return c.join(`\r
`)};function js(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Jh(c){let y="";return ie(c,function(k,U){y+=U,y+=":",y+=k,y+=`\r
`}),y}function xc(c,y,k){e:{for(U in k){var U=!1;break e}U=!0}U||(k=Jh(k),typeof c=="string"?k!=null&&Rr(k):gt(c,y,k))}function Ct(c){j.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ct,j);var ob=/^https?$/i,ab=["POST","PUT"];t=Ct.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,y,k,U){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ms.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(ue){Yh(this,ue);return}if(c=k||"",k=new Map(this.headers),U)if(Object.getPrototypeOf(U)===Object.prototype)for(var ae in U)k.set(ae,U[ae]);else if(typeof U.keys=="function"&&typeof U.get=="function")for(const ue of U.keys())k.set(ue,U.get(ue));else throw Error("Unknown input type for opt_headers: "+String(U));U=Array.from(k.keys()).find(ue=>ue.toLowerCase()=="content-type"),ae=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(ab,y,void 0)>=0)||U||ae||k.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ue,ke]of k)this.g.setRequestHeader(ue,ke);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(ue){Yh(this,ue)}};function Yh(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Xh(c),fa(c)}function Xh(c){c.A||(c.A=!0,z(c,"complete"),z(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,z(this,"complete"),z(this,"abort"),fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fa(this,!0)),Ct.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Zh(this):this.Xa())},t.Xa=function(){Zh(this)};function Zh(c){if(c.h&&typeof s<"u"){if(c.v&&Or(c)==4)setTimeout(c.Ca.bind(c),0);else if(z(c,"readystatechange"),Or(c)==4){c.h=!1;try{const ue=c.ca();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var k;if(!(k=y)){var U;if(U=ue===0){let ke=String(c.D).match(Bh)[1]||null;!ke&&o.self&&o.self.location&&(ke=o.self.location.protocol.slice(0,-1)),U=!ob.test(ke?ke.toLowerCase():"")}k=U}if(k)z(c,"complete"),z(c,"success");else{c.o=6;try{var ae=Or(c)>2?c.g.statusText:""}catch{ae=""}c.l=ae+" ["+c.ca()+"]",Xh(c)}}finally{fa(c)}}}}function fa(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const k=c.g;c.g=null,y||z(c,"ready");try{k.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Or(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Or(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),We(y)}};function ef(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function lb(c){const y={};c=(c.g&&Or(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let U=0;U<c.length;U++){if(S(c[U]))continue;var k=ne(c[U]);const ae=k[0];if(k=k[1],typeof k!="string")continue;k=k.trim();const ue=y[ae]||[];y[ae]=ue,ue.push(k)}Ee(y,function(U){return U.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qs(c,y,k){return k&&k.internalChannelParams&&k.internalChannelParams[c]||y}function tf(c){this.za=0,this.i=[],this.j=new pn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qs("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qs("baseRetryDelayMs",5e3,c),this.Za=qs("retryDelaySeedMs",1e4,c),this.Ta=qs("forwardChannelMaxRetries",2,c),this.va=qs("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Lh(c&&c.concurrentRequestLimit),this.Ba=new sb,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=tf.prototype,t.ka=8,t.I=1,t.connect=function(c,y,k,U){ut(0),this.W=c,this.H=y||{},k&&U!==void 0&&(this.H.OSID=k,this.H.OAID=U),this.F=this.X,this.J=df(this,null,this.W),ma(this)};function kc(c){if(nf(c),c.I==3){var y=c.V++,k=Bn(c.J);if(gt(k,"SID",c.M),gt(k,"RID",y),gt(k,"TYPE","terminate"),Ws(c,k),y=new bt(c,c.j,y),y.M=2,y.A=da(Bn(k)),k=!1,o.navigator&&o.navigator.sendBeacon)try{k=o.navigator.sendBeacon(y.A.toString(),"")}catch{}!k&&o.Image&&(new Image().src=y.A,k=!0),k||(y.g=hf(y.j,null),y.g.ea(y.A)),y.F=Date.now(),ua(y)}uf(c)}function pa(c){c.g&&(Ac(c),c.g.cancel(),c.g=null)}function nf(c){pa(c),c.v&&(o.clearTimeout(c.v),c.v=null),ga(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function ma(c){if(!$h(c.h)&&!c.m){c.m=!0;var y=c.Ea;L||E(),F||(L(),F=!0),C.add(y,c),c.D=0}}function cb(c,y){return Fh(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Rn(h(c.Ea,c,y),cf(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const ae=new bt(this,this.j,c);let ue=this.o;if(this.U&&(ue?(ue=re(ue),Ce(ue,this.U)):ue=this.U),this.u!==null||this.R||(ae.J=ue,ue=null),this.S)e:{for(var y=0,k=0;k<this.i.length;k++){t:{var U=this.i[k];if("__data__"in U.map&&(U=U.map.__data__,typeof U=="string")){U=U.length;break t}U=void 0}if(U===void 0)break;if(y+=U,y>4096){y=k;break e}if(y===4096||k===this.i.length-1){y=k+1;break e}}y=1e3}else y=1e3;y=sf(this,ae,y),k=Bn(this.J),gt(k,"RID",c),gt(k,"CVER",22),this.G&&gt(k,"X-HTTP-Session-Id",this.G),Ws(this,k),ue&&(this.R?y="headers="+Rr(Jh(ue))+"&"+y:this.u&&xc(k,this.u,ue)),Ic(this.h,ae),this.Ra&&gt(k,"TYPE","init"),this.S?(gt(k,"$req",y),gt(k,"SID","null"),ae.U=!0,_c(ae,k,null)):_c(ae,k,y),this.I=2}}else this.I==3&&(c?rf(this,c):this.i.length==0||$h(this.h)||rf(this))};function rf(c,y){var k;y?k=y.l:k=c.V++;const U=Bn(c.J);gt(U,"SID",c.M),gt(U,"RID",k),gt(U,"AID",c.K),Ws(c,U),c.u&&c.o&&xc(U,c.u,c.o),k=new bt(c,c.j,k,c.D+1),c.u===null&&(k.J=c.o),y&&(c.i=y.G.concat(c.i)),y=sf(c,k,1e3),k.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ic(c.h,k),_c(k,U,y)}function Ws(c,y){c.H&&ie(c.H,function(k,U){gt(y,U,k)}),c.l&&ie({},function(k,U){gt(y,U,k)})}function sf(c,y,k){k=Math.min(c.i.length,k);const U=c.l?h(c.l.Ka,c.l,c):null;e:{var ae=c.i;let Je=-1;for(;;){const Dt=["count="+k];Je==-1?k>0?(Je=ae[0].g,Dt.push("ofs="+Je)):Je=0:Dt.push("ofs="+Je);let dt=!0;for(let Ut=0;Ut<k;Ut++){var ue=ae[Ut].g;const jn=ae[Ut].map;if(ue-=Je,ue<0)Je=Math.max(0,ae[Ut].g-100),dt=!1;else try{ue="req"+ue+"_"||"";try{var ke=jn instanceof Map?jn:Object.entries(jn);for(const[yi,Dr]of ke){let Mr=Dr;a(Dr)&&(Mr=ce(Dr)),Dt.push(ue+yi+"="+encodeURIComponent(Mr))}}catch(yi){throw Dt.push(ue+"type="+encodeURIComponent("_badmap")),yi}}catch{U&&U(jn)}}if(dt){ke=Dt.join("&");break e}}ke=void 0}return c=c.i.splice(0,k),y.G=c,ke}function of(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;L||E(),F||(L(),F=!0),C.add(y,c),c.A=0}}function Sc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Rn(h(c.Da,c),cf(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,af(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Rn(h(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),pa(this),af(this))};function Ac(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function af(c){c.g=new bt(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=Bn(c.na);gt(y,"RID","rpc"),gt(y,"SID",c.M),gt(y,"AID",c.K),gt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&gt(y,"TO",c.ia),gt(y,"TYPE","xmlhttp"),Ws(c,y),c.u&&c.o&&xc(y,c.u,c.o),c.O&&(c.g.H=c.O);var k=c.g;c=c.ba,k.M=1,k.A=da(Bn(y)),k.u=null,k.R=!0,Dh(k,c)}t.Va=function(){this.C!=null&&(this.C=null,pa(this),Sc(this),ut(19))};function ga(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function lf(c,y){var k=null;if(c.g==y){ga(c),Ac(c),c.g=null;var U=2}else if(Ec(c.h,y))k=y.G,Uh(c.h,y),U=1;else return;if(c.I!=0){if(y.o)if(U==1){k=y.u?y.u.length:0,y=Date.now()-y.F;var ae=c.D;U=Ue(),z(U,new fn(U,k)),ma(c)}else of(c);else if(ae=y.m,ae==3||ae==0&&y.X>0||!(U==1&&cb(c,y)||U==2&&Sc(c)))switch(k&&k.length>0&&(y=c.h,y.i=y.i.concat(k)),ae){case 1:vi(c,5);break;case 4:vi(c,10);break;case 3:vi(c,6);break;default:vi(c,2)}}}function cf(c,y){let k=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(k*=2),k*y}function vi(c,y){if(c.j.info("Error code "+y),y==2){var k=h(c.bb,c),U=c.Ua;const ae=!U;U=new Pr(U||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ls(U,"https"),da(U),ae?rb(U.toString(),k):ib(U.toString(),k)}else ut(2);c.I=0,c.l&&c.l.pa(y),uf(c),nf(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function uf(c){if(c.I=0,c.ja=[],c.l){const y=zh(c.h);(y.length!=0||c.i.length!=0)&&(_(c.ja,y),_(c.ja,c.i),c.h.i.length=0,v(c.i),c.i.length=0),c.l.oa()}}function df(c,y,k){var U=k instanceof Pr?Bn(k):new Pr(k);if(U.g!="")y&&(U.g=y+"."+U.g),$s(U,U.u);else{var ae=o.location;U=ae.protocol,y=y?y+"."+ae.hostname:ae.hostname,ae=+ae.port;const ue=new Pr(null);U&&Ls(ue,U),y&&(ue.g=y),ae&&$s(ue,ae),k&&(ue.h=k),U=ue}return k=c.G,y=c.wa,k&&y&&gt(U,k,y),gt(U,"VER",c.ka),Ws(c,U),U}function hf(c,y,k){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new Ct(new Cc({ab:k})):new Ct(c.ma),y.Fa(c.L),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ff(){}t=ff.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function va(){}va.prototype.g=function(c,y){return new mn(c,y)};function mn(c,y){j.call(this),this.g=new tf(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!S(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!S(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Qi(this)}p(mn,j),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){kc(this.g)},mn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var k={};k.__data__=c,c=k}else this.v&&(k={},k.__data__=ce(c),c=k);y.i.push(new Q_(y.Ya++,c)),y.I==3&&ma(y)},mn.prototype.N=function(){this.g.l=null,delete this.j,kc(this.g),delete this.g,mn.Z.N.call(this)};function pf(c){fe.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const k in y){c=k;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}p(pf,fe);function mf(){B.call(this),this.status=1}p(mf,B);function Qi(c){this.g=c}p(Qi,ff),Qi.prototype.ra=function(){z(this.g,"a")},Qi.prototype.qa=function(c){z(this.g,new pf(c))},Qi.prototype.pa=function(c){z(this.g,new mf)},Qi.prototype.oa=function(){z(this.g,"b")},va.prototype.createWebChannel=va.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Ky=function(){return new va},Gy=function(){return Ue()},Hy=Ne,Bu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Ba=pi,Ds.COMPLETE="complete",Wy=Ds,mt.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",j.prototype.listen=j.prototype.J,to=mt,Ct.prototype.listenOnce=Ct.prototype.K,Ct.prototype.getLastError=Ct.prototype.Ha,Ct.prototype.getLastErrorCode=Ct.prototype.ya,Ct.prototype.getStatus=Ct.prototype.ca,Ct.prototype.getResponseJson=Ct.prototype.La,Ct.prototype.getResponseText=Ct.prototype.la,Ct.prototype.send=Ct.prototype.ea,Ct.prototype.setWithCredentials=Ct.prototype.Fa,qy=Ct}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let Rs="12.10.0";function ax(t){Rs=t}/**
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
 */const Mi=new Hl("@firebase/firestore");function es(){return Mi.logLevel}function Oe(t,...e){if(Mi.logLevel<=Xe.DEBUG){const n=e.map(jd);Mi.debug(`Firestore (${Rs}): ${t}`,...n)}}function Cr(t,...e){if(Mi.logLevel<=Xe.ERROR){const n=e.map(jd);Mi.error(`Firestore (${Rs}): ${t}`,...n)}}function Vi(t,...e){if(Mi.logLevel<=Xe.WARN){const n=e.map(jd);Mi.warn(`Firestore (${Rs}): ${t}`,...n)}}function jd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ze(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qy(t,r,n)}function Qy(t,e,n){let r=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Cr(r),new Error(r)}function lt(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Qy(e,i,r)}function Ke(t,e){return t}/**
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
 */const be={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ve extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class cx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ux{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string",31837,{l:r}),new Jy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class dx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class hx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class im{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const r=s=>{s.error!=null&&Oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Oe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new im(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new im(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function px(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=px(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Ze(t,e){return t<e?-1:t>e?1:0}function ju(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return tu(i)===tu(s)?Ze(i,s):tu(i)?1:-1}return Ze(t.length,e.length)}const mx=55296,gx=57343;function tu(t){const e=t.charCodeAt(0);return e>=mx&&e<=gx}function _s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const sm="__name__";class Gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ze(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ze(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Gn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Ze(e.length,n.length)}static compareSegments(e,n){const r=Gn.isNumericId(e),i=Gn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Gn.extractNumericId(e).compare(Gn.extractNumericId(n)):ju(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xr.fromString(e.substring(4,e.length-2))}}class vt extends Gn{construct(e,n,r){return new vt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Ve(be.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new vt(n)}static emptyPath(){return new vt([])}}const vx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Gn{construct(e,n,r){return new Ht(e,n,r)}static isValidIdentifier(e){return vx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sm}static keyField(){return new Ht([sm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Ve(be.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Ve(be.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ve(be.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Ve(be.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
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
 */class $e{constructor(e){this.path=e}static fromPath(e){return new $e(vt.fromString(e))}static fromName(e){return new $e(vt.fromString(e).popFirst(5))}static empty(){return new $e(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&vt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return vt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $e(new vt(e.slice()))}}/**
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
 */function Yy(t,e,n){if(!n)throw new Ve(be.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yx(t,e,n,r){if(e===!0&&r===!0)throw new Ve(be.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function om(t){if(!$e.isDocumentKey(t))throw new Ve(be.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function am(t){if($e.isDocumentKey(t))throw new Ve(be.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ze(12329,{type:typeof t})}function Yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ve(be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wd(t);throw new Ve(be.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Nt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ea(t,e){if(!Xy(t))throw new Ve(be.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Ve(be.INVALID_ARGUMENT,n);return!0}/**
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
 */const lm=-62135596800,cm=1e6;class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*cm);return new yt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ve(be.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ve(be.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<lm)throw new Ve(be.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ve(be.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cm}_compareTo(e){return this.seconds===e.seconds?Ze(this.nanoseconds,e.nanoseconds):Ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:yt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ea(e,yt._jsonSchema))return new yt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}yt._jsonSchemaVersion="firestore/timestamp/1.0",yt._jsonSchema={type:Nt("string",yt._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
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
 */class qe{static fromTimestamp(e){return new qe(e)}static min(){return new qe(new yt(0,0))}static max(){return new qe(new yt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vo=-1;function _x(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=qe.fromTimestamp(r===1e9?new yt(n+1,0):new yt(n,r));return new ii(i,$e.empty(),e)}function bx(t){return new ii(t.readTime,t.key,Vo)}class ii{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ii(qe.min(),$e.empty(),Vo)}static max(){return new ii(qe.max(),$e.empty(),Vo)}}function wx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$e.comparator(t.documentKey,e.documentKey),n!==0?n:Ze(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ex="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ix{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ps(t){if(t.code!==be.FAILED_PRECONDITION||t.message!==Ex)throw t;Oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ye{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ze(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ye((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ye?n:ye.resolve(n)}catch(n){return ye.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ye.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ye.reject(n)}static resolve(e){return new ye((n,r)=>{n(e)})}static reject(e){return new ye((n,r)=>{r(e)})}static waitFor(e){return new ye((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=ye.resolve(!1);for(const r of e)n=n.next(i=>i?ye.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new ye((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new ye((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Tx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Jl.ce=-1;/**
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
 */const Hd=-1;function Yl(t){return t==null}function dl(t){return t===0&&1/t==-1/0}function Cx(t){return typeof t=="number"&&Number.isInteger(t)&&!dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zy="";function xx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=um(e)),e=kx(t.get(n),e);return um(e)}function kx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Zy:n+="";break;default:n+=s}}return n}function um(t){return t+Zy+""}/**
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
 */function dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function e1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class It{constructor(e,n){this.comparator=e,this.root=n||qt.EMPTY}insert(e,n){return new It(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new It(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qt.RED,this.left=i??qt.EMPTY,this.right=s??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ze(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ze(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ze(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw ze(57766)}get value(){throw ze(16141)}get color(){throw ze(16727)}get left(){throw ze(29726)}get right(){throw ze(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $t{constructor(e){this.comparator=e,this.data=new It(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hm(this.data.getIterator())}getIteratorFrom(e){return new hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $t(this.comparator);return n.data=e,n}}class hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new yn([])}unionWith(e){let n=new $t(Ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class t1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new t1("Invalid base64 string: "+s):s}}(e);return new Kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const Sx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(t){if(lt(!!t,39018),typeof t=="string"){let e=0;const n=Sx.exec(t);if(lt(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Rt(t.seconds),nanos:Rt(t.nanos)}}function Rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Kt.fromBase64String(t):Kt.fromUint8Array(t)}/**
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
 */const n1="server_timestamp",r1="__type__",i1="__previous_value__",s1="__local_write_time__";function Gd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[r1])==null?void 0:r.stringValue)===n1}function Xl(t){const e=t.mapValue.fields[i1];return Gd(e)?Xl(e):e}function Lo(t){const e=si(t.mapValue.fields[s1].timestampValue);return new yt(e.seconds,e.nanos)}/**
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
 */class Ax{constructor(e,n,r,i,s,o,a,l,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const hl="(default)";class $o{constructor(e,n){this.projectId=e,this.database=n||hl}static empty(){return new $o("","")}get isDefaultDatabase(){return this.database===hl}isEqual(e){return e instanceof $o&&e.projectId===this.projectId&&e.database===this.database}}function Rx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ve(be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $o(t.options.projectId,e)}/**
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
 */const o1="__type__",Px="__max__",xa={mapValue:{}},a1="__vector__",fl="value";function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gd(t)?4:Ox(t)?9007199254740991:Nx(t)?10:11:ze(28295,{value:t})}function nr(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lo(t).isEqual(Lo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=si(i.timestampValue),a=si(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return oi(i.bytesValue).isEqual(oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Rt(i.geoPointValue.latitude)===Rt(s.geoPointValue.latitude)&&Rt(i.geoPointValue.longitude)===Rt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Rt(i.integerValue)===Rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Rt(i.doubleValue),a=Rt(s.doubleValue);return o===a?dl(o)===dl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dm(o)!==dm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!nr(o[l],a[l])))return!1;return!0}(t,e);default:return ze(52216,{left:t})}}function Fo(t,e){return(t.values||[]).find(n=>nr(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=ai(t),r=ai(e);if(n!==r)return Ze(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ze(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Rt(s.integerValue||s.doubleValue),l=Rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return fm(t.timestampValue,e.timestampValue);case 4:return fm(Lo(t),Lo(e));case 5:return ju(t.stringValue,e.stringValue);case 6:return function(s,o){const a=oi(s),l=oi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=Ze(a[h],l[h]);if(f!==0)return f}return Ze(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ze(Rt(s.latitude),Rt(o.latitude));return a!==0?a:Ze(Rt(s.longitude),Rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,v,_,u;const a=s.fields||{},l=o.fields||{},h=(m=a[fl])==null?void 0:m.arrayValue,f=(v=l[fl])==null?void 0:v.arrayValue,p=Ze(((_=h==null?void 0:h.values)==null?void 0:_.length)||0,((u=f==null?void 0:f.values)==null?void 0:u.length)||0);return p!==0?p:pm(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===xa.mapValue&&o===xa.mapValue)return 0;if(s===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=ju(l[p],f[p]);if(m!==0)return m;const v=bs(a[l[p]],h[f[p]]);if(v!==0)return v}return Ze(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ze(23264,{he:n})}}function fm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ze(t,e);const n=si(t),r=si(e),i=Ze(n.seconds,r.seconds);return i!==0?i:Ze(n.nanos,r.nanos)}function pm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=bs(n[i],r[i]);if(s)return s}return Ze(n.length,r.length)}function ws(t){return qu(t)}function qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $e.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=qu(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qu(n.fields[o])}`;return i+"}"}(t.mapValue):ze(61005,{value:t})}function ja(t){switch(ai(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xl(t);return e?16+ja(e):16;case 5:return 2*t.stringValue.length;case 6:return oi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ja(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return hi(r.fields,(s,o)=>{i+=s.length+ja(o)}),i}(t.mapValue);default:throw ze(13486,{value:t})}}function Wu(t){return!!t&&"integerValue"in t}function Kd(t){return!!t&&"arrayValue"in t}function mm(t){return!!t&&"nullValue"in t}function gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function Nx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[o1])==null?void 0:r.stringValue)===a1}function _o(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_o(t.arrayValue.values[n]);return e}return{...t}}function Ox(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Px}/**
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
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(n)}setAll(e){let n=Ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_o(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new hn(_o(this.value))}}function l1(t){const e=[];return hi(t.fields,(n,r)=>{const i=new Ht([n]);if(qa(r)){const s=l1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yn(e)}/**
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
 */class en{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new en(e,0,qe.min(),qe.min(),qe.min(),hn.empty(),0)}static newFoundDocument(e,n,r,i){return new en(e,1,n,qe.min(),r,i,0)}static newNoDocument(e,n){return new en(e,2,n,qe.min(),qe.min(),hn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,qe.min(),qe.min(),hn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pl{constructor(e,n){this.position=e,this.inclusive=n}}function vm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$e.comparator($e.fromName(o.referenceValue),n.key):r=bs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function Dx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class c1{}class Vt extends c1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Vx(e,n,r):n==="array-contains"?new Fx(e,r):n==="in"?new Ux(e,r):n==="not-in"?new zx(e,r):n==="array-contains-any"?new Bx(e,r):new Vt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Lx(e,r):new $x(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(bs(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ze(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends c1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rr(e,n)}matches(e){return u1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function u1(t){return t.op==="and"}function d1(t){return Mx(t)&&u1(t)}function Mx(t){for(const e of t.filters)if(e instanceof rr)return!1;return!0}function Hu(t){if(t instanceof Vt)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(d1(t))return t.filters.map(e=>Hu(e)).join(",");{const e=t.filters.map(n=>Hu(n)).join(",");return`${t.op}(${e})`}}function h1(t,e){return t instanceof Vt?function(r,i){return i instanceof Vt&&r.op===i.op&&r.field.isEqual(i.field)&&nr(r.value,i.value)}(t,e):t instanceof rr?function(r,i){return i instanceof rr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&h1(o,i.filters[a]),!0):!1}(t,e):void ze(19439)}function f1(t){return t instanceof Vt?function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`}(t):t instanceof rr?function(n){return n.op.toString()+" {"+n.getFilters().map(f1).join(" ,")+"}"}(t):"Filter"}class Vx extends Vt{constructor(e,n,r){super(e,n,r),this.key=$e.fromName(r.referenceValue)}matches(e){const n=$e.comparator(e.key,this.key);return this.matchesComparison(n)}}class Lx extends Vt{constructor(e,n){super(e,"in",n),this.keys=p1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $x extends Vt{constructor(e,n){super(e,"not-in",n),this.keys=p1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function p1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>$e.fromName(r.referenceValue))}class Fx extends Vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kd(n)&&Fo(n.arrayValue,this.value)}}class Ux extends Vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fo(this.value.arrayValue,n)}}class zx extends Vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Fo(this.value.arrayValue,n)}}class Bx extends Vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fo(this.value.arrayValue,r))}}/**
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
 */class jx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function _m(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jx(t,e,n,r,i,s,o)}function Qd(t){const e=Ke(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ws(r)).join(",")),e.Te=n}return e.Te}function Jd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Dx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ym(t.startAt,e.startAt)&&ym(t.endAt,e.endAt)}function Gu(t){return $e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qx(t,e,n,r,i,s,o,a){return new Zl(t,e,n,r,i,s,o,a)}function Yd(t){return new Zl(t)}function bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wx(t){return $e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Hx(t){return t.collectionGroup!==null}function bo(t){const e=Ke(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $t(Ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ml(s,r))}),n.has(Ht.keyField().canonicalString())||e.Ie.push(new ml(Ht.keyField(),r))}return e.Ie}function Xn(t){const e=Ke(t);return e.Ee||(e.Ee=Gx(e,bo(t))),e.Ee}function Gx(t,e){if(t.limitType==="F")return _m(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ml(i.field,s)});const n=t.endAt?new pl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pl(t.startAt.position,t.startAt.inclusive):null;return _m(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ku(t,e,n){return new Zl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Jd(Xn(t),Xn(e))&&t.limitType===e.limitType}function m1(t){return`${Qd(Xn(t))}|lt:${t.limitType}`}function ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>f1(i)).join(", ")}]`),Yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ws(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ws(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$e.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of bo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const h=vm(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,bo(r),i)||r.endAt&&!function(o,a,l){const h=vm(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,bo(r),i))}(t,e)}function Kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g1(t){return(e,n)=>{let r=!1;for(const i of bo(t)){const s=Qx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Qx(t,e,n){const r=t.field.isKeyField()?$e.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),h=a.data.field(s);return l!==null&&h!==null?bs(l,h):ze(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ze(19790,{direction:t.dir})}}/**
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
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return e1(this.inner)}size(){return this.innerSize}}/**
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
 */const Jx=new It($e.comparator);function xr(){return Jx}const v1=new It($e.comparator);function no(...t){let e=v1;for(const n of t)e=e.insert(n.key,n);return e}function y1(t){let e=v1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return wo()}function _1(){return wo()}function wo(){return new ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yx=new It($e.comparator),Xx=new $t($e.comparator);function et(...t){let e=Xx;for(const n of t)e=e.add(n);return e}const Zx=new $t(Ze);function ek(){return Zx}/**
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
 */function Xd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dl(e)?"-0":e}}function b1(t){return{integerValue:""+t}}function tk(t,e){return Cx(e)?b1(e):Xd(t,e)}/**
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
 */class nc{constructor(){this._=void 0}}function nk(t,e,n){return t instanceof gl?function(i,s){const o={fields:{[r1]:{stringValue:n1},[s1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gd(s)&&(s=Xl(s)),s&&(o.fields[i1]=s),{mapValue:o}}(n,e):t instanceof Uo?E1(t,e):t instanceof zo?I1(t,e):function(i,s){const o=w1(i,s),a=wm(o)+wm(i.Ae);return Wu(o)&&Wu(i.Ae)?b1(a):Xd(i.serializer,a)}(t,e)}function rk(t,e,n){return t instanceof Uo?E1(t,e):t instanceof zo?I1(t,e):n}function w1(t,e){return t instanceof vl?function(r){return Wu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gl extends nc{}class Uo extends nc{constructor(e){super(),this.elements=e}}function E1(t,e){const n=T1(e);for(const r of t.elements)n.some(i=>nr(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends nc{constructor(e){super(),this.elements=e}}function I1(t,e){let n=T1(e);for(const r of t.elements)n=n.filter(i=>!nr(i,r));return{arrayValue:{values:n}}}class vl extends nc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function wm(t){return Rt(t.integerValue||t.doubleValue)}function T1(t){return Kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ik(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Uo&&i instanceof Uo||r instanceof zo&&i instanceof zo?_s(r.elements,i.elements,nr):r instanceof vl&&i instanceof vl?nr(r.Ae,i.Ae):r instanceof gl&&i instanceof gl}(t.transform,e.transform)}class sk{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function C1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ic(t.key,wn.none()):new ta(t.key,t.data,wn.none());{const n=t.data,r=hn.empty();let i=new $t(Ht.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fi(t.key,r,new yn(i.toArray()),wn.none())}}function ok(t,e,n){t instanceof ta?function(i,s,o){const a=i.value.clone(),l=Im(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,o){if(!Wa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Im(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(x1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof ta?function(s,o,a,l){if(!Wa(s.precondition,o))return a;const h=s.value.clone(),f=Tm(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(s,o,a,l){if(!Wa(s.precondition,o))return a;const h=Tm(s.fieldTransforms,l,o),f=o.data;return f.setAll(x1(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Wa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ak(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=w1(r.transform,i||null);s!=null&&(n===null&&(n=hn.empty()),n.set(r.field,s))}return n||null}function Em(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_s(r,i,(s,o)=>ik(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ta extends rc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends rc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function x1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Im(t,e,n){const r=new Map;lt(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,rk(o,a,n[i]))}return r}function Tm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nk(s,o,e))}return r}class ic extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lk extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ck{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ok(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=C1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(qe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),et())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>Em(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>Em(n,r))}}class Zd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){lt(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Yx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zd(e,n,r,i)}}/**
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
 */class uk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pt,nt;function hk(t){switch(t){case be.OK:return ze(64938);case be.CANCELLED:case be.UNKNOWN:case be.DEADLINE_EXCEEDED:case be.RESOURCE_EXHAUSTED:case be.INTERNAL:case be.UNAVAILABLE:case be.UNAUTHENTICATED:return!1;case be.INVALID_ARGUMENT:case be.NOT_FOUND:case be.ALREADY_EXISTS:case be.PERMISSION_DENIED:case be.FAILED_PRECONDITION:case be.ABORTED:case be.OUT_OF_RANGE:case be.UNIMPLEMENTED:case be.DATA_LOSS:return!0;default:return ze(15467,{code:t})}}function k1(t){if(t===void 0)return Cr("GRPC error has no .code"),be.UNKNOWN;switch(t){case Pt.OK:return be.OK;case Pt.CANCELLED:return be.CANCELLED;case Pt.UNKNOWN:return be.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return be.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return be.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return be.INTERNAL;case Pt.UNAVAILABLE:return be.UNAVAILABLE;case Pt.UNAUTHENTICATED:return be.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return be.INVALID_ARGUMENT;case Pt.NOT_FOUND:return be.NOT_FOUND;case Pt.ALREADY_EXISTS:return be.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return be.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return be.FAILED_PRECONDITION;case Pt.ABORTED:return be.ABORTED;case Pt.OUT_OF_RANGE:return be.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return be.UNIMPLEMENTED;case Pt.DATA_LOSS:return be.DATA_LOSS;default:return ze(39323,{code:t})}}(nt=Pt||(Pt={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fk(){return new TextEncoder}/**
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
 */const pk=new Xr([4294967295,4294967295],0);function Cm(t){const e=fk().encode(t),n=new jy;return n.update(e),new Uint8Array(n.digest())}function xm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Xr([n,r],0),new Xr([i,s],0)]}class eh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Xr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Xr.fromNumber(r)));return i.compare(pk)===1&&(i=new Xr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cm(e),[r,i]=xm(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new eh(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=Cm(e),[r,i]=xm(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(qe.min(),i,new It(Ze),xr(),et())}}class na{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new na(r,n,et(),et(),et())}}/**
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
 */class Ha{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class S1{constructor(e,n){this.targetId=e,this.Ce=n}}class A1{constructor(e,n,r=Kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class km{constructor(){this.ve=0,this.Fe=Sm(),this.Me=Kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=et(),n=et(),r=et();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ze(38017,{changeType:s})}}),new na(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Sm()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class mk{constructor(e){this.Ge=e,this.ze=new Map,this.je=xr(),this.He=ka(),this.Je=ka(),this.Ze=new It(Ze)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ze(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Gu(s))if(r===0){const o=new $e(s.path);this.et(n,o,en.newNoDocument(o,qe.min()))}else lt(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=oi(r).toUint8Array()}catch(l){if(l instanceof t1)return Vi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new eh(o,i,s)}catch(l){return Vi(l instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&Gu(a.target)){const l=new $e(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,en.newNoDocument(l,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=et();this.Je.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new sc(e,n,this.Ze,this.je,r);return this.je=xr(),this.He=ka(),this.Je=ka(),this.Ze=new It(Ze),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new km,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new $t(Ze),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new $t(Ze),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Oe("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new km),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ka(){return new It($e.comparator)}function Sm(){return new It($e.comparator)}const gk={asc:"ASCENDING",desc:"DESCENDING"},vk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yk={and:"AND",or:"OR"};class _k{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qu(t,e){return t.useProto3Json||Yl(e)?e:{value:e}}function yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bk(t,e){return yl(t,e.toTimestamp())}function Zn(t){return lt(!!t,49232),qe.fromTimestamp(function(n){const r=si(n);return new yt(r.seconds,r.nanos)}(t))}function th(t,e){return Ju(t,e).canonicalString()}function Ju(t,e){const n=function(i){return new vt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function P1(t){const e=vt.fromString(t);return lt(V1(e),10190,{key:e.toString()}),e}function Yu(t,e){return th(t.databaseId,e.path)}function nu(t,e){const n=P1(e);if(n.get(1)!==t.databaseId.projectId)throw new Ve(be.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ve(be.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $e(O1(n))}function N1(t,e){return th(t.databaseId,e)}function wk(t){const e=P1(t);return e.length===4?vt.emptyPath():O1(e)}function Xu(t){return new vt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function O1(t){return lt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Am(t,e,n){return{name:Yu(t,e),fields:n.value.mapValue.fields}}function Ek(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ze(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(lt(f===void 0||typeof f=="string",58123),Kt.fromBase64String(f||"")):(lt(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Kt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const f=h.code===void 0?be.UNKNOWN:k1(h.code);return new Ve(f,h.message||"")}(o);n=new A1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nu(t,r.document.name),s=Zn(r.document.updateTime),o=r.document.createTime?Zn(r.document.createTime):qe.min(),a=new hn({mapValue:{fields:r.document.fields}}),l=en.newFoundDocument(i,s,o,a),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ha(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nu(t,r.document),s=r.readTime?Zn(r.readTime):qe.min(),o=en.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nu(t,r.document),s=r.removedTargetIds||[];n=new Ha([],s,i,null)}else{if(!("filter"in e))return ze(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dk(i,s),a=r.targetId;n=new S1(a,o)}}return n}function Ik(t,e){let n;if(e instanceof ta)n={update:Am(t,e.key,e.value)};else if(e instanceof ic)n={delete:Yu(t,e.key)};else if(e instanceof fi)n={update:Am(t,e.key,e.data),updateMask:Nk(e.fieldMask)};else{if(!(e instanceof lk))return ze(16599,{dt:e.type});n={verify:Yu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vl)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw ze(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ze(27497)}(t,e.precondition)),n}function Tk(t,e){return t&&t.length>0?(lt(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Zn(i.updateTime):Zn(s);return o.isEqual(qe.min())&&(o=Zn(s)),new sk(o,i.transformResults||[])}(n,e))):[]}function Ck(t,e){return{documents:[N1(t,e.path)]}}function xk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=N1(t,i);const s=function(h){if(h.length!==0)return M1(rr.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:ns(m.field),direction:Ak(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function kk(t){let e=wk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lt(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=D1(p);return m instanceof rr&&d1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(_){return new ml(rs(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Yl(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,v=p.values||[];return new pl(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new pl(v,m)}(n.endAt)),qx(e,i,o,s,a,"F",l,h)}function Sk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ze(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function D1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=rs(n.unaryFilter.field);return Vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=rs(n.unaryFilter.field);return Vt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rs(n.unaryFilter.field);return Vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rs(n.unaryFilter.field);return Vt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ze(61313);default:return ze(60726)}}(t):t.fieldFilter!==void 0?function(n){return Vt.create(rs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ze(58110);default:return ze(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rr.create(n.compositeFilter.filters.map(r=>D1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ze(1026)}}(n.compositeFilter.op))}(t):ze(30097,{filter:t})}function Ak(t){return gk[t]}function Rk(t){return vk[t]}function Pk(t){return yk[t]}function ns(t){return{fieldPath:t.canonicalString()}}function rs(t){return Ht.fromServerFormat(t.fieldPath)}function M1(t){return t instanceof Vt?function(n){if(n.op==="=="){if(gm(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NAN"}};if(mm(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gm(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NAN"}};if(mm(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(n.field),op:Rk(n.op),value:n.value}}}(t):t instanceof rr?function(n){const r=n.getFilters().map(i=>M1(i));return r.length===1?r[0]:{compositeFilter:{op:Pk(n.op),filters:r}}}(t):ze(54877,{filter:t})}function Nk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function V1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function L1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Kr{constructor(e,n,r,i,s=qe.min(),o=qe.min(),a=Kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ok{constructor(e){this.yt=e}}function Dk(t){const e=kk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ku(e,e.limit,"L"):e}/**
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
 */class Mk{constructor(){this.Sn=new Vk}addToCollectionParentIndex(e,n){return this.Sn.add(n),ye.resolve()}getCollectionParents(e,n){return ye.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return ye.resolve()}deleteFieldIndex(e,n){return ye.resolve()}deleteAllFieldIndexes(e){return ye.resolve()}createTargetIndexes(e,n){return ye.resolve()}getDocumentsMatchingTarget(e,n){return ye.resolve(null)}getIndexType(e,n){return ye.resolve(0)}getFieldIndexes(e,n){return ye.resolve([])}getNextCollectionGroupToUpdate(e){return ye.resolve(null)}getMinOffset(e,n){return ye.resolve(ii.min())}getMinOffsetFromCollectionGroup(e,n){return ye.resolve(ii.min())}updateCollectionGroup(e,n,r){return ye.resolve()}updateIndexEntries(e,n){return ye.resolve()}}class Vk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $t(vt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $t(vt.comparator)).toArray()}}/**
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
 */const Rm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$1=41943040;class dn{static withCacheSize(e){return new dn(e,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */dn.DEFAULT_COLLECTION_PERCENTILE=10,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dn.DEFAULT=new dn($1,dn.DEFAULT_COLLECTION_PERCENTILE,dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dn.DISABLED=new dn(-1,0,0);/**
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
 */class Es{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Es(0)}static ar(){return new Es(-1)}}/**
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
 */const Pm="LruGarbageCollector",Lk=1048576;function Nm([t,e],[n,r]){const i=Ze(t,n);return i===0?Ze(e,r):i}class $k{constructor(e){this.Pr=e,this.buffer=new $t(Nm),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Nm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Fk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Oe(Pm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?Oe(Pm,"Ignoring IndexedDB error during garbage collection: ",n):await Ps(n)}await this.Ar(3e5)})}}class Uk{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return ye.resolve(Jl.ce);const r=new $k(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Oe("LruGarbageCollector","Garbage collection skipped; disabled"),ye.resolve(Rm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rm):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),es()<=Xe.DEBUG&&Oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),ye.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function zk(t,e){return new Uk(t,e)}/**
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
 */class Bk{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?ye.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Eo(r.mutation,i,yn.empty(),yt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,et()).next(()=>r))}getLocalViewOfDocuments(e,n,r=et()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=no();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,et()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=xr();const o=wo(),a=function(){return wo()}();return n.forEach((l,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof fi)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Eo(f.mutation,h,f.mutation.getFieldMask(),yt.now())):o.set(h.key,yn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>a.set(h,new jk(f,o.get(h)??null))),a))}recalculateAndSaveOverlays(e,n){const r=wo();let i=new It((o,a)=>o-a),s=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||yn.empty();f=a.applyToLocalView(h,f),r.set(l,f);const p=(i.get(a.batchId)||et()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,p=_1();f.forEach(m=>{if(!s.has(m)){const v=C1(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return ye.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return Wx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):ye.resolve(Si());let a=Vo,l=s;return o.next(h=>ye.forEach(h,(f,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(f)?ye.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,et())).next(f=>({batchId:a,changes:y1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $e(n)).next(r=>{let i=no();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,s).next(a=>ye.forEach(a,l=>{const h=function(p,m){return new Zl(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,en.newInvalidDocument(f)))});let a=no();return o.forEach((l,h)=>{const f=s.get(l);f!==void 0&&Eo(f.mutation,h,yn.empty(),yt.now()),tc(n,h)&&(a=a.insert(l,h))}),a})}}/**
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
 */class Wk{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return ye.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zn(i.createTime)}}(n)),ye.resolve()}getNamedQuery(e,n){return ye.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:Dk(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),ye.resolve()}}/**
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
 */class Hk{constructor(){this.overlays=new It($e.comparator),this.Lr=new Map}getOverlay(e,n){return ye.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return ye.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),ye.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),ye.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new $e(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return ye.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new It((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Si(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=Si(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>a.set(h,f)),!(a.size()>=i)););return ye.resolve(a)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uk(n,r));let s=this.Lr.get(n);s===void 0&&(s=et(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class Gk{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(e){return ye.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ye.resolve()}}/**
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
 */class nh{constructor(){this.kr=new $t(zt.Kr),this.qr=new $t(zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new zt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new zt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new $e(new vt([])),r=new zt(n,e),i=new zt(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new $e(new vt([])),r=new zt(n,e),i=new zt(n,e+1);let s=et();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new zt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return $e.comparator(e.key,n.key)||Ze(e.Hr,n.Hr)}static Ur(e,n){return Ze(e.Hr,n.Hr)||$e.comparator(e.key,n.key)}}/**
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
 */class Kk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new $t(zt.Kr)}checkEmpty(e){return ye.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ck(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Jr=this.Jr.add(new zt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return ye.resolve(o)}lookupMutationBatch(e,n){return ye.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return ye.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ye.resolve(this.mutationQueue.length===0?Hd:this.Yn-1)}getAllMutationBatches(e){return ye.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new zt(n,0),i=new zt(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),ye.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $t(Ze);return n.forEach(i=>{const s=new zt(i,0),o=new zt(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),ye.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$e.isDocumentKey(s)||(s=s.child(""));const o=new zt(new $e(s),0);let a=new $t(Ze);return this.Jr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(l.Hr)),!0)},o),ye.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){lt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return ye.forEach(n.mutations,i=>{const s=new zt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new zt(n,0),i=this.Jr.firstAfterOrEqual(r);return ye.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ye.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Qk{constructor(e){this.ti=e,this.docs=function(){return new It($e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return ye.resolve(r?r.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let r=xr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():en.newInvalidDocument(i))}),ye.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xr();const o=n.path,a=new $e(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||wx(bx(f),r)<=0||(i.has(f.key)||tc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return ye.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ze(9500)}ni(e,n){return ye.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jk(this)}getSize(e){return ye.resolve(this.size)}}class Jk extends Bk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),ye.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class Yk{constructor(e){this.persistence=e,this.ri=new ji(n=>Qd(n),Jd),this.lastRemoteSnapshotVersion=qe.min(),this.highestTargetId=0,this.ii=0,this.si=new nh,this.targetCount=0,this.oi=Es._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),ye.resolve()}getLastRemoteSnapshotVersion(e){return ye.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ye.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ye.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),ye.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,ye.resolve()}updateTargetData(e,n){return this.lr(n),ye.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,ye.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),ye.waitFor(s).next(()=>i)}getTargetCount(e){return ye.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return ye.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),ye.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),ye.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),ye.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return ye.resolve(r)}containsKey(e,n){return ye.resolve(this.si.containsKey(n))}}/**
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
 */class F1{constructor(e,n){this._i={},this.overlays={},this.ai=new Jl(0),this.ui=!1,this.ui=!0,this.ci=new Gk,this.referenceDelegate=e(this),this.li=new Yk(this),this.indexManager=new Mk,this.remoteDocumentCache=function(i){return new Qk(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Ok(n),this.Pi=new Wk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Kk(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){Oe("MemoryPersistence","Starting transaction:",e);const i=new Xk(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return ye.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Xk extends Ix{constructor(e){super(),this.currentSequenceNumber=e}}class rh{constructor(e){this.persistence=e,this.Ri=new nh,this.Ai=null}static Vi(e){return new rh(e)}get di(){if(this.Ai)return this.Ai;throw ze(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),ye.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),ye.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),ye.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ye.forEach(this.di,r=>{const i=$e.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,qe.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return ye.or([()=>ye.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class _l{constructor(e,n){this.persistence=e,this.fi=new ji(r=>xx(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=zk(this,n)}static Vi(e,n){return new _l(e,n)}Ti(){}Ii(e){return ye.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return ye.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?ye.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,qe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),ye.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ye.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ye.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),ye.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ja(e.data.value)),n}wr(e,n,r){return ye.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return ye.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ih{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=et(),i=et();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ih(e,n.fromCache,r,i)}}/**
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
 */class Zk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eS{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return IE()?8:Tx(sn())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Zk;return this.ys(e,n,o).next(a=>{if(s.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(es()<=Xe.DEBUG&&Oe("QueryEngine","SDK will not create cache indexes for query:",ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ye.resolve()):(es()<=Xe.DEBUG&&Oe("QueryEngine","Query:",ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(es()<=Xe.DEBUG&&Oe("QueryEngine","The SDK decides to create cache indexes for query:",ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):ye.resolve())}gs(e,n){if(bm(n))return ye.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ku(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=et(...s);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.bs(n,a);return this.Ss(n,h,o,l.readTime)?this.gs(e,Ku(n,null,"F")):this.Ds(e,h,n,l)}))})))}ps(e,n,r,i){return bm(n)||i.isEqual(qe.min())?ye.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?ye.resolve(null):(es()<=Xe.DEBUG&&Oe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ts(n)),this.Ds(e,o,n,_x(i,Vo)).next(a=>a))})}bs(e,n){let r=new $t(g1(e));return n.forEach((i,s)=>{tc(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return es()<=Xe.DEBUG&&Oe("QueryEngine","Using full collection scan to execute query:",ts(n)),this.fs.getDocumentsMatchingQuery(e,n,ii.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const sh="LocalStore",tS=3e8;class nS{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new It(Ze),this.Fs=new ji(s=>Qd(s),Jd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function rS(t,e,n,r){return new nS(t,e,n,r)}async function U1(t,e){const n=Ke(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=et();for(const h of i){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:a}))})})}function iS(t,e){const n=Ke(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,h,f){const p=h.batch,m=p.keys();let v=ye.resolve();return m.forEach(_=>{v=v.next(()=>f.getEntry(l,_)).next(u=>{const w=h.docVersions.get(_);lt(w!==null,48541),u.version.compareTo(w)<0&&(p.applyToRemoteDocument(u,h),u.isValidDocument()&&(u.setReadTime(h.commitVersion),f.addEntry(u)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=et();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function z1(t){const e=Ke(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function sS(t,e){const n=Ke(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const a=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;a.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Kt.EMPTY_BYTE_STRING,qe.min()).withLastLimboFreeSnapshotVersion(qe.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),function(u,w,x){return u.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=tS?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,v,f)&&a.push(n.li.updateTargetData(s,v))});let l=xr(),h=et();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(oS(s,o,e.documentUpdates).next(f=>{l=f.Bs,h=f.Ls})),!r.isEqual(qe.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return ye.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(n.vs=i,s))}function oS(t,e,n){let r=et(),i=et();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xr();return n.forEach((a,l)=>{const h=s.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(qe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Oe(sh,"Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)}),{Bs:o,Ls:i}})}function aS(t,e){const n=Ke(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lS(t,e){const n=Ke(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,ye.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Zu(t,e,n){const r=Ke(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ns(o))throw o;Oe(sh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Om(t,e,n){const r=Ke(t);let i=qe.min(),s=et();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=Ke(l),m=p.Fs.get(f);return m!==void 0?ye.resolve(p.vs.get(m)):p.li.getTargetData(h,f)}(r,o,Xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:qe.min(),n?s:et())).next(a=>(cS(r,Kx(e),a),{documents:a,ks:s})))}function cS(t,e,n){let r=t.Ms.get(e)||qe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Dm{constructor(){this.activeTargetIds=ek()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uS{constructor(){this.vo=new Dm,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dS{Mo(e){}shutdown(){}}/**
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
 */const Mm="ConnectivityMonitor";class Vm{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Oe(Mm,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Oe(Mm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sa=null;function ed(){return Sa===null?Sa=function(){return 268435456+Math.round(2147483648*Math.random())}():Sa++,"0x"+Sa.toString(16)}/**
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
 */const ru="RestConnection",hS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class fS{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===hl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=ed(),a=this.Qo(e,n.toUriEncodedString());Oe(ru,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:h}=new URL(a),f=xs(h);return this.zo(e,a,l,r,f).then(p=>(Oe(ru,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Vi(ru,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=hS[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class pS{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Qt="WebChannelConnection",Ys=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class hs extends fS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!hs.c_){const e=Gy();Ys(e,Hy.STAT_EVENT,n=>{n.stat===Bu.PROXY?Oe(Qt,"STAT_EVENT: detected buffering proxy"):n.stat===Bu.NOPROXY&&Oe(Qt,"STAT_EVENT: detected no buffering proxy")}),hs.c_=!0}}zo(e,n,r,i,s){const o=ed();return new Promise((a,l)=>{const h=new qy;h.setWithCredentials(!0),h.listenOnce(Wy.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ba.NO_ERROR:const p=h.getResponseJson();Oe(Qt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Ba.TIMEOUT:Oe(Qt,`RPC '${e}' ${o} timed out`),l(new Ve(be.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const m=h.getStatus();if(Oe(Qt,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const _=v==null?void 0:v.error;if(_&&_.status&&_.message){const u=function(x){const R=x.toLowerCase().replace(/_/g,"-");return Object.values(be).indexOf(R)>=0?R:be.UNKNOWN}(_.status);l(new Ve(u,_.message))}else l(new Ve(be.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Ve(be.UNAVAILABLE,"Connection failed."));break;default:ze(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Oe(Qt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);Oe(Qt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=ed(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const h=s.join("");Oe(Qt,`Creating RPC '${e}' stream ${i}: ${h}`,a);const f=o.createWebChannel(h,a);this.I_(f);let p=!1,m=!1;const v=new pS({Ho:_=>{m?Oe(Qt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(p||(Oe(Qt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),Oe(Qt,`RPC '${e}' stream ${i} sending:`,_),f.send(_))},Jo:()=>f.close()});return Ys(f,to.EventType.OPEN,()=>{m||(Oe(Qt,`RPC '${e}' stream ${i} transport opened.`),v.i_())}),Ys(f,to.EventType.CLOSE,()=>{m||(m=!0,Oe(Qt,`RPC '${e}' stream ${i} transport closed`),v.o_(),this.E_(f))}),Ys(f,to.EventType.ERROR,_=>{m||(m=!0,Vi(Qt,`RPC '${e}' stream ${i} transport errored. Name:`,_.name,"Message:",_.message),v.o_(new Ve(be.UNAVAILABLE,"The operation could not be completed")))}),Ys(f,to.EventType.MESSAGE,_=>{var u;if(!m){const w=_.data[0];lt(!!w,16349);const x=w,R=(x==null?void 0:x.error)||((u=x[0])==null?void 0:u.error);if(R){Oe(Qt,`RPC '${e}' stream ${i} received error:`,R);const M=R.status;let V=function(C){const E=Pt[C];if(E!==void 0)return k1(E)}(M),L=R.message;M==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&Vi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=be.INTERNAL,L="Unknown error status: "+M+" with message "+R.message),m=!0,v.o_(new Ve(V,L)),f.close()}else Oe(Qt,`RPC '${e}' stream ${i} received:`,w),v.__(w)}}),hs.u_(),setTimeout(()=>{v.s_()},0),v}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ky()}}/**
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
 */function mS(t){return new hs(t)}function iu(){return typeof document<"u"?document:null}/**
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
 */function oc(t){return new _k(t,!0)}/**
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
 */hs.c_=!1;class B1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Oe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Lm="PersistentStream";class j1{constructor(e,n,r,i,s,o,a,l){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new B1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===be.RESOURCE_EXHAUSTED?(Cr(n.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===be.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new Ve(be.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Oe(Lm,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(Oe(Lm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gS extends j1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Ek(this.serializer,e),r=function(s){if(!("targetChange"in s))return qe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?qe.min():o.readTime?Zn(o.readTime):qe.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Xu(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Gu(l)?{documents:Ck(s,l)}:{query:xk(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=R1(s,o.resumeToken);const h=Qu(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(qe.min())>0){a.readTime=yl(s,o.snapshotVersion.toTimestamp());const h=Qu(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=Sk(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Xu(this.serializer),n.removeTarget=e,this.K_(n)}}class vS extends j1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return lt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){lt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Tk(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Xu(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ik(this.serializer,r))};this.K_(n)}}/**
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
 */class yS{}class _S extends yS{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Ve(be.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Ju(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===be.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ve(be.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Ju(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===be.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ve(be.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function bS(t,e,n,r){return new _S(t,e,n,r)}class wS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cr(n),this.aa=!1):Oe("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Li="RemoteStore";class ES{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{qi(this)&&(Oe(Li,"Restarting streams for network reachability change."),await async function(l){const h=Ke(l);h.Ea.add(4),await ra(h),h.Va.set("Unknown"),h.Ea.delete(4),await ac(h)}(this))})}),this.Va=new wS(r,i)}}async function ac(t){if(qi(t))for(const e of t.Ra)await e(!0)}async function ra(t){for(const e of t.Ra)await e(!1)}function q1(t,e){const n=Ke(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ch(n)?lh(n):Os(n).O_()&&ah(n,e))}function oh(t,e){const n=Ke(t),r=Os(n);n.Ia.delete(e),r.O_()&&W1(n,e),n.Ia.size===0&&(r.O_()?r.L_():qi(n)&&n.Va.set("Unknown"))}function ah(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(qe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Os(t).Z_(e)}function W1(t,e){t.da.$e(e),Os(t).X_(e)}function lh(t){t.da=new mk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Os(t).start(),t.Va.ua()}function ch(t){return qi(t)&&!Os(t).x_()&&t.Ia.size>0}function qi(t){return Ke(t).Ea.size===0}function H1(t){t.da=void 0}async function IS(t){t.Va.set("Online")}async function TS(t){t.Ia.forEach((e,n)=>{ah(t,e)})}async function CS(t,e){H1(t),ch(t)?(t.Va.ha(e),lh(t)):t.Va.set("Unknown")}async function xS(t,e,n){if(t.Va.set("Online"),e instanceof A1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.da.removeTarget(a))}(t,e)}catch(r){Oe(Li,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof Ha?t.da.Xe(e):e instanceof S1?t.da.st(e):t.da.tt(e),!n.isEqual(qe.min()))try{const r=await z1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.da.Tt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=s.Ia.get(l);if(!f)return;s.Ia.set(l,f.withResumeToken(Kt.EMPTY_BYTE_STRING,f.snapshotVersion)),W1(s,l);const p=new Kr(f.target,l,h,f.sequenceNumber);ah(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Oe(Li,"Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!Ns(e))throw e;t.Ea.add(1),await ra(t),t.Va.set("Offline"),n||(n=()=>z1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Oe(Li,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ac(t)})}function G1(t,e){return e().catch(n=>bl(t,n,e))}async function lc(t){const e=Ke(t),n=li(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hd;for(;kS(e);)try{const i=await aS(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,SS(e,i)}catch(i){await bl(e,i)}K1(e)&&Q1(e)}function kS(t){return qi(t)&&t.Ta.length<10}function SS(t,e){t.Ta.push(e);const n=li(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function K1(t){return qi(t)&&!li(t).x_()&&t.Ta.length>0}function Q1(t){li(t).start()}async function AS(t){li(t).ra()}async function RS(t){const e=li(t);for(const n of t.Ta)e.ea(n.mutations)}async function PS(t,e,n){const r=t.Ta.shift(),i=Zd.from(r,e,n);await G1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lc(t)}async function NS(t,e){e&&li(t).Y_&&await async function(r,i){if(function(o){return hk(o)&&o!==be.ABORTED}(i.code)){const s=r.Ta.shift();li(r).B_(),await G1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await lc(r)}}(t,e),K1(t)&&Q1(t)}async function $m(t,e){const n=Ke(t);n.asyncQueue.verifyOperationInProgress(),Oe(Li,"RemoteStore received new credentials");const r=qi(n);n.Ea.add(3),await ra(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ac(n)}async function OS(t,e){const n=Ke(t);e?(n.Ea.delete(2),await ac(n)):e||(n.Ea.add(2),await ra(n),n.Va.set("Unknown"))}function Os(t){return t.ma||(t.ma=function(n,r,i){const s=Ke(n);return s.sa(),new gS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:IS.bind(null,t),Yo:TS.bind(null,t),t_:CS.bind(null,t),J_:xS.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ch(t)?lh(t):t.Va.set("Unknown")):(await t.ma.stop(),H1(t))})),t.ma}function li(t){return t.fa||(t.fa=function(n,r,i){const s=Ke(n);return s.sa(),new vS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:AS.bind(null,t),t_:NS.bind(null,t),ta:RS.bind(null,t),na:PS.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await lc(t)):(await t.fa.stop(),t.Ta.length>0&&(Oe(Li,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class uh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new uh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(be.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(t,e){if(Cr("AsyncQueue",`${e}: ${t}`),Ns(t))return new Ve(be.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fs{static emptySet(e){return new fs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||$e.comparator(n.key,r.key):(n,r)=>$e.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new It(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fm{constructor(){this.ga=new It($e.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ze(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,i,s,o,a,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class DS{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class MS{constructor(){this.queries=Um(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Ke(n),s=i.queries;i.queries=Um(),s.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new Ve(be.ABORTED,"Firestore shutting down"))}}function Um(){return new ji(t=>m1(t),ec)}async function J1(t,e){const n=Ke(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new DS,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=dh(o,`Initialization of query '${ts(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&hh(n)}async function Y1(t,e){const n=Ke(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VS(t,e){const n=Ke(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ba)a.Fa(i)&&(r=!0);o.wa=i}}r&&hh(n)}function LS(t,e,n){const r=Ke(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function hh(t){t.Ca.forEach(e=>{e.next()})}var td,zm;(zm=td||(td={})).Ma="default",zm.Cache="cache";class X1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==td.Cache}}/**
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
 */class Z1{constructor(e){this.key=e}}class e_{constructor(e){this.key=e}}class $S{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=et(),this.mutatedKeys=et(),this.eu=g1(e),this.tu=new fs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Fm,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),v=tc(this.query,p)?p:null,_=!!m&&this.mutatedKeys.has(m.key),u=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let w=!1;m&&v?m.data.isEqual(v.data)?_!==u&&(r.track({type:3,doc:v}),w=!0):this.su(m,v)||(r.track({type:2,doc:v}),w=!0,(l&&this.eu(v,l)>0||h&&this.eu(v,h)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),w=!0):m&&!v&&(r.track({type:1,doc:m}),w=!0,(l||h)&&(a=!0)),w&&(v?(o=o.add(v),s=u?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:a,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(v,_){const u=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ze(20277,{Vt:w})}};return u(v)-u(_)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const a=n&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new Is(this.query,e.tu,s,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fm,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=et(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new e_(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Z1(r))}),n}cu(e){this.Za=e.ks,this.Ya=et();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Is.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const fh="SyncEngine";class FS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class US{constructor(e){this.key=e,this.hu=!1}}class zS{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ji(a=>m1(a),ec),this.Iu=new Map,this.Eu=new Set,this.Ru=new It($e.comparator),this.Au=new Map,this.Vu=new nh,this.du={},this.mu=new Map,this.fu=Es.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BS(t,e,n=!0){const r=o_(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await t_(r,e,n,!0),i}async function jS(t,e){const n=o_(t);await t_(n,e,!0,!1)}async function t_(t,e,n,r){const i=await lS(t.localStore,Xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await qS(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&q1(t.remoteStore,i),a}async function qS(t,e,n,r,i){t.pu=(p,m,v)=>async function(u,w,x,R){let M=w.view.ru(x);M.Ss&&(M=await Om(u.localStore,w.query,!1).then(({documents:C})=>w.view.ru(C,M)));const V=R&&R.targetChanges.get(w.targetId),L=R&&R.targetMismatches.get(w.targetId)!=null,F=w.view.applyChanges(M,u.isPrimaryClient,V,L);return jm(u,w.targetId,F.au),F.snapshot}(t,p,m,v);const s=await Om(t.localStore,e,!0),o=new $S(e,s.ks),a=o.ru(s.documents),l=na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(a,t.isPrimaryClient,l);jm(t,n,h.au);const f=new FS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function WS(t,e,n){const r=Ke(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!ec(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&oh(r.remoteStore,i.targetId),nd(r,i.targetId)}).catch(Ps)):(nd(r,i.targetId),await Zu(r.localStore,i.targetId,!0))}async function HS(t,e){const n=Ke(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),oh(n.remoteStore,r.targetId))}async function GS(t,e,n){const r=eA(t);try{const i=await function(o,a){const l=Ke(o),h=yt.now(),f=a.reduce((v,_)=>v.add(_.key),et());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let _=xr(),u=et();return l.xs.getEntries(v,f).next(w=>{_=w,_.forEach((x,R)=>{R.isValidDocument()||(u=u.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,_)).next(w=>{p=w;const x=[];for(const R of a){const M=ak(R,p.get(R.key).overlayedDocument);M!=null&&x.push(new fi(R.key,M,l1(M.value.mapValue),wn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,x,a)}).next(w=>{m=w;const x=w.applyToLocalDocumentSet(p,u);return l.documentOverlayCache.saveOverlays(v,w.batchId,x)})}).then(()=>({batchId:m.batchId,changes:y1(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let h=o.du[o.currentUser.toKey()];h||(h=new It(Ze)),h=h.insert(a,l),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await ia(r,i.changes),await lc(r.remoteStore)}catch(i){const s=dh(i,"Failed to persist write");n.reject(s)}}async function n_(t,e){const n=Ke(t);try{const r=await sS(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?lt(o.hu,14607):i.removedDocuments.size>0&&(lt(o.hu,42227),o.hu=!1))}),await ia(n,r,e)}catch(r){await Ps(r)}}function Bm(t,e,n){const r=Ke(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Ke(o);l.onlineState=a;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.ba)m.va(a)&&(h=!0)}),h&&hh(l)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KS(t,e,n){const r=Ke(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new It($e.comparator);o=o.insert(s,en.newNoDocument(s,qe.min()));const a=et().add(s),l=new sc(qe.min(),new Map,new It(Ze),o,a);await n_(r,l),r.Ru=r.Ru.remove(s),r.Au.delete(e),ph(r)}else await Zu(r.localStore,e,!1).then(()=>nd(r,e,n)).catch(Ps)}async function QS(t,e){const n=Ke(t),r=e.batch.batchId;try{const i=await iS(n.localStore,e);i_(n,r,null),r_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ia(n,i)}catch(i){await Ps(i)}}async function JS(t,e,n){const r=Ke(t);try{const i=await function(o,a){const l=Ke(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,a).next(p=>(lt(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);i_(r,e,n),r_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ia(r,i)}catch(i){await Ps(i)}}function r_(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function i_(t,e,n){const r=Ke(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||s_(t,r)})}function s_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(oh(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),ph(t))}function jm(t,e,n){for(const r of n)r instanceof Z1?(t.Vu.addReference(r.key,e),YS(t,r)):r instanceof e_?(Oe(fh,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||s_(t,r.key)):ze(19791,{wu:r})}function YS(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(Oe(fh,"New document in limbo: "+n),t.Eu.add(r),ph(t))}function ph(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new $e(vt.fromString(e)),r=t.fu.next();t.Au.set(r,new US(n)),t.Ru=t.Ru.insert(n,r),q1(t.remoteStore,new Kr(Xn(Yd(n.path)),r,"TargetPurposeLimboResolution",Jl.ce))}}async function ia(t,e,n){const r=Ke(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=ih.Es(l.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(l,h){const f=Ke(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>ye.forEach(h,m=>ye.forEach(m.Ts,v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>ye.forEach(m.Is,v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Ns(p))throw p;Oe(sh,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=f.vs.get(m),_=v.snapshotVersion,u=v.withLastLimboFreeSnapshotVersion(_);f.vs=f.vs.insert(m,u)}}}(r.localStore,s))}async function XS(t,e){const n=Ke(t);if(!n.currentUser.isEqual(e)){Oe(fh,"User change. New user:",e.toKey());const r=await U1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new Ve(be.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ia(n,r.Ns)}}function ZS(t,e){const n=Ke(t),r=n.Au.get(e);if(r&&r.hu)return et().add(r.key);{let i=et();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const a=n.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function o_(t){const e=Ke(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=n_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KS.bind(null,e),e.Pu.J_=VS.bind(null,e.eventManager),e.Pu.yu=LS.bind(null,e.eventManager),e}function eA(t){const e=Ke(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JS.bind(null,e),e}class wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return rS(this.persistence,new eS,e.initialUser,this.serializer)}Cu(e){return new F1(rh.Vi,this.serializer)}Du(e){return new uS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wl.provider={build:()=>new wl};class tA extends wl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof _l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Fk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?dn.withCacheSize(this.cacheSizeBytes):dn.DEFAULT;return new F1(r=>_l.Vi(r,n),this.serializer)}}class rd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XS.bind(null,this.syncEngine),await OS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MS}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),r=mS(e.databaseInfo);return bS(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new ES(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Bm(this.syncEngine,n,0),function(){return Vm.v()?new Vm:new dS}())}createSyncEngine(e,n){return function(i,s,o,a,l,h,f){const p=new zS(i,s,o,a,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Ke(i);Oe(Li,"RemoteStore shutting down."),s.Ea.add(5),await ra(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}rd.provider={build:()=>new rd};/**
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
 */class a_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ci="FirestoreClient";class nA{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Oe(ci,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Oe(ci,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function su(t,e){t.asyncQueue.verifyOperationInProgress(),Oe(ci,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await U1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rA(t);Oe(ci,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$m(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$m(e.remoteStore,i)),t._onlineComponents=e}async function rA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Oe(ci,"Using user provided OfflineComponentProvider");try{await su(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===be.FAILED_PRECONDITION||i.code===be.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Vi("Error using user provided cache. Falling back to memory cache: "+n),await su(t,new wl)}}else Oe(ci,"Using default OfflineComponentProvider"),await su(t,new tA(void 0));return t._offlineComponents}async function l_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Oe(ci,"Using user provided OnlineComponentProvider"),await qm(t,t._uninitializedComponentsProvider._online)):(Oe(ci,"Using default OnlineComponentProvider"),await qm(t,new rd))),t._onlineComponents}function iA(t){return l_(t).then(e=>e.syncEngine)}async function id(t){const e=await l_(t),n=e.eventManager;return n.onListen=BS.bind(null,e.syncEngine),n.onUnlisten=WS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HS.bind(null,e.syncEngine),n}function sA(t,e,n,r){const i=new a_(r),s=new X1(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>J1(await id(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Y1(await id(t),s))}}function oA(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,h){const f=new a_({next:m=>{f.Nu(),o.enqueueAndForget(()=>Y1(s,p)),m.fromCache&&l.source==="server"?h.reject(new Ve(be.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new X1(a,f,{includeMetadataChanges:!0,Ka:!0});return J1(s,p)}(await id(t),t.asyncQueue,e,n,r)),r.promise}function aA(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget(async()=>GS(await iA(t),e,n)),n.promise}/**
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
 */function c_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const lA="ComponentProvider",Wm=new Map;function cA(t,e,n,r,i){return new Ax(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,c_(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const u_="firestore.googleapis.com",Hm=!0;class Gm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Ve(be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=u_,this.ssl=Hm}else this.host=e.host,this.ssl=e.ssl??Hm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lk)throw new Ve(be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c_(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Ve(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Ve(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Ve(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ve(be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ve(be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lx;switch(r.type){case"firstParty":return new hx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ve(be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wm.get(n);r&&(Oe(lA,"Removing Datastore"),Wm.delete(n),r.terminate())}(this),Promise.resolve()}}function uA(t,e,n,r={}){var h;t=Yn(t,cc);const i=xs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(ty(`https://${a}`),ny("Firestore",!0)),s.host!==u_&&s.host!==a&&Vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!ri(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Xt.MOCK_USER;else{f=mE(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Ve(be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Xt(m)}t._authCredentials=new cx(new Jy(f,p))}}/**
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
 */class sa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}toJSON(){return{type:Lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ea(n,Lt._jsonSchema))return new Lt(e,r||null,new $e(vt.fromString(n.referencePath)))}}Lt._jsonSchemaVersion="firestore/documentReference/1.0",Lt._jsonSchema={type:Nt("string",Lt._jsonSchemaVersion),referencePath:Nt("string")};class ei extends sa{constructor(e,n,r){super(e,n,Yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new $e(e))}withConverter(e){return new ei(this.firestore,e,this._path)}}function dA(t,e,...n){if(t=Et(t),Yy("collection","path",e),t instanceof cc){const r=vt.fromString(e,...n);return am(r),new ei(t,null,r)}{if(!(t instanceof Lt||t instanceof ei))throw new Ve(be.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(vt.fromString(e,...n));return am(r),new ei(t.firestore,null,r)}}function uc(t,e,...n){if(t=Et(t),arguments.length===1&&(e=qd.newId()),Yy("doc","path",e),t instanceof cc){const r=vt.fromString(e,...n);return om(r),new Lt(t,null,new $e(r))}{if(!(t instanceof Lt||t instanceof ei))throw new Ve(be.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(vt.fromString(e,...n));return om(r),new Lt(t.firestore,t instanceof ei?t.converter:null,new $e(r))}}/**
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
 */const Km="AsyncQueue";class Qm{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new B1(this,"async_queue_retry"),this._c=()=>{const r=iu();r&&Oe(Km,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=iu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=iu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ns(e))throw e;Oe(Km,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Cr("INTERNAL UNHANDLED ERROR: ",Jm(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=uh.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&ze(47125,{Pc:Jm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Jm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class $i extends cc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qm(e),this._firestoreClient=void 0,await e}}}function hA(t,e){const n=typeof t=="object"?t:Nd(),r=typeof t=="string"?t:hl,i=Bi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fE("firestore");s&&uA(i,...s)}return i}function dc(t){if(t._terminated)throw new Ve(be.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fA(t),t._firestoreClient}function fA(t){var r,i,s,o;const e=t._freezeSettings(),n=cA(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new nA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Kt.fromBase64String(e))}catch(n){throw new Ve(be.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cn(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ea(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:Nt("string",Cn._jsonSchemaVersion),bytes:Nt("string")};/**
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
 */class mh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ve(be.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gh{constructor(e){this._methodName=e}}/**
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
 */class er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ve(be.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ve(be.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ze(this._lat,e._lat)||Ze(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(ea(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:Nt("string",er._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
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
 */class Mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ea(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Mn(e.vectorValues);throw new Ve(be.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:Nt("string",Mn._jsonSchemaVersion),vectorValues:Nt("object")};/**
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
 */const pA=/^__.*__$/;class mA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ta(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function h_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ze(40011,{dataSource:t})}}class vh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new vh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return El(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(h_(this.dataSource)&&pA.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class gA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oc(e)}createContext(e,n,r,i=!1){return new vh({dataSource:e,methodName:n,targetDoc:r,path:Ht.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function f_(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new gA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function p_(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);yh("Data must be an object, but it was:",o,r);const a=m_(r,o);let l,h;if(s.merge)l=new yn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Bo(e,p,n);if(!o.contains(m))throw new Ve(be.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);y_(f,m)||f.push(m)}l=new yn(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new mA(new hn(a),l,h)}class hc extends gh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hc}}function vA(t,e,n,r){const i=t.createContext(1,e,n);yh("Data must be an object, but it was:",i,r);const s=[],o=hn.empty();hi(r,(l,h)=>{const f=v_(e,l,n);h=Et(h);const p=i.childContextForFieldPath(f);if(h instanceof hc)s.push(f);else{const m=fc(h,p);m!=null&&(s.push(f),o.set(f,m))}});const a=new yn(s);return new d_(o,a,i.fieldTransforms)}function yA(t,e,n,r,i,s){const o=t.createContext(1,e,n),a=[Bo(e,r,n)],l=[i];if(s.length%2!=0)throw new Ve(be.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Bo(e,s[m])),l.push(s[m+1]);const h=[],f=hn.empty();for(let m=a.length-1;m>=0;--m)if(!y_(h,a[m])){const v=a[m];let _=l[m];_=Et(_);const u=o.childContextForFieldPath(v);if(_ instanceof hc)h.push(v);else{const w=fc(_,u);w!=null&&(h.push(v),f.set(v,w))}}const p=new yn(h);return new d_(f,p,o.fieldTransforms)}function fc(t,e){if(g_(t=Et(t)))return yh("Unsupported field value:",e,t),m_(t,e);if(t instanceof gh)return function(r,i){if(!h_(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=fc(a,i.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=yt.fromDate(r);return{timestampValue:yl(i.serializer,s)}}if(r instanceof yt){const s=new yt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yl(i.serializer,s)}}if(r instanceof er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cn)return{bytesValue:R1(i.serializer,r._byteString)};if(r instanceof Lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:th(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Mn)return function(o,a){const l=o instanceof Mn?o.toArray():o;return{mapValue:{fields:{[o1]:{stringValue:a1},[fl]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw a.createError("VectorValues must only contain numeric values.");return Xd(a.serializer,f)})}}}}}}(r,i);if(L1(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Wd(r)}`)}(t,e)}function m_(t,e){const n={};return e1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=fc(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function g_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof yt||t instanceof er||t instanceof Cn||t instanceof Lt||t instanceof gh||t instanceof Mn||L1(t))}function yh(t,e,n){if(!g_(n)||!Xy(n)){const r=Wd(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Bo(t,e,n){if((e=Et(e))instanceof mh)return e._internalPath;if(typeof e=="string")return v_(t,e);throw El("Field path arguments must be of type string or ",t,!1,void 0,n)}const _A=new RegExp("[~\\*/\\[\\]]");function v_(t,e,n){if(e.search(_A)>=0)throw El(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mh(...e.split("."))._internalPath}catch{throw El(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function El(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Ve(be.INVALID_ARGUMENT,a+t+l)}function y_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bA{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ze(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[fl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Rt(o.doubleValue));return new Mn(n)}convertGeoPoint(e){return new er(Rt(e.latitude),Rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Lo(e));default:return null}}convertTimestamp(e){const n=si(e);return new yt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=vt.fromString(e);lt(V1(r),9688,{name:e});const i=new $o(r.get(1),r.get(3)),s=new $e(r.popFirst(5));return i.isEqual(n)||Cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class _h extends bA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}const Ym="@firebase/firestore",Xm="4.12.0";/**
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
 */function Zm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class __{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Bo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wA extends __{data(){return super.data()}}/**
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
 */function b_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Ve(be.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function w_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ni extends __{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Ve(be.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ni._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ni._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ni._jsonSchema={type:Nt("string",Ni._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Ga extends Ni{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ve(be.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new io(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new io(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:EA(a.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Ve(be.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ze(61501,{type:t})}}/**
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
 */Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:Nt("string",Oi._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};/**
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
 */class IA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=f_(e)}set(e,n,r){this._verifyNotCommitted();const i=ou(e,this._firestore),s=w_(i.converter,n,r),o=p_(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,wn.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ou(e,this._firestore);let o;return o=typeof(n=Et(n))=="string"||n instanceof mh?yA(this._dataReader,"WriteBatch.update",s._key,n,r,i):vA(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,wn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ou(e,this._firestore);return this._mutations=this._mutations.concat(new ic(n._key,wn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Ve(be.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ou(t,e){if((t=Et(t)).firestore!==e)throw new Ve(be.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function TA(t){t=Yn(t,sa);const e=Yn(t.firestore,$i),n=dc(e),r=new _h(e);return b_(t._query),oA(n,t._query).then(i=>new Oi(e,r,t,i))}function E_(t,e,n){t=Yn(t,Lt);const r=Yn(t.firestore,$i),i=w_(t.converter,e,n),s=f_(r);return bh(r,[p_(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wn.none())])}function CA(t){return bh(Yn(t.firestore,$i),[new ic(t._key,wn.none())])}function xA(t,...e){var h,f,p;t=Et(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Zm(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Zm(e[r])){const m=e[r];e[r]=(h=m.next)==null?void 0:h.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,a;if(t instanceof Lt)o=Yn(t.firestore,$i),a=Yd(t._key.path),s={next:m=>{e[r]&&e[r](kA(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Yn(t,sa);o=Yn(m.firestore,$i),a=m._query;const v=new _h(o);s={next:_=>{e[r]&&e[r](new Oi(o,v,m,_))},error:e[r+1],complete:e[r+2]},b_(t._query)}const l=dc(o);return sA(l,a,i,s)}function bh(t,e){const n=dc(t);return aA(n,e)}function kA(t,e,n){const r=n.docs.get(e._key),i=new _h(t);return new Ni(t,i,e._key,r,new io(n.hasPendingWrites,n.fromCache),e.converter)}function SA(t){return t=Yn(t,$i),dc(t),new IA(t,e=>bh(t,e))}(function(e,n=!0){ax(ks),tr(new Un("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $i(new ux(r.getProvider("auth-internal")),new fx(o,r.getProvider("app-check-internal")),Rx(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xn(Ym,Xm,e),xn(Ym,Xm,"esm2020")})();const I_="@firebase/installations",wh="0.6.20";/**
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
 */const T_=1e4,C_=`w:${wh}`,x_="FIS_v2",AA="https://firebaseinstallations.googleapis.com/v1",RA=60*60*1e3,PA="installations",NA="Installations";/**
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
 */const OA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fi=new zi(PA,NA,OA);function k_(t){return t instanceof zn&&t.code.includes("request-failed")}/**
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
 */function S_({projectId:t}){return`${AA}/projects/${t}/installations`}function A_(t){return{token:t.token,requestStatus:2,expiresIn:MA(t.expiresIn),creationTime:Date.now()}}async function R_(t,e){const r=(await e.json()).error;return Fi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function P_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DA(t,{refreshToken:e}){const n=P_(t);return n.append("Authorization",VA(e)),n}async function N_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function MA(t){return Number(t.replace("s","000"))}function VA(t){return`${x_} ${t}`}/**
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
 */async function LA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=S_(t),i=P_(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:x_,appId:t.appId,sdkVersion:C_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await N_(()=>fetch(r,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:A_(h.authToken)}}else throw await R_("Create Installation",l)}/**
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
 */function O_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function $A(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const FA=/^[cdef][\w-]{21}$/,sd="";function UA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zA(t);return FA.test(n)?n:sd}catch{return sd}}function zA(t){return $A(t).substr(0,22)}/**
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
 */function pc(t){return`${t.appName}!${t.appId}`}/**
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
 */const D_=new Map;function M_(t,e){const n=pc(t);V_(n,e),BA(n,e)}function V_(t,e){const n=D_.get(t);if(n)for(const r of n)r(e)}function BA(t,e){const n=jA();n&&n.postMessage({key:t,fid:e}),qA()}let Ai=null;function jA(){return!Ai&&"BroadcastChannel"in self&&(Ai=new BroadcastChannel("[Firebase] FID Change"),Ai.onmessage=t=>{V_(t.data.key,t.data.fid)}),Ai}function qA(){D_.size===0&&Ai&&(Ai.close(),Ai=null)}/**
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
 */const WA="firebase-installations-database",HA=1,Ui="firebase-installations-store";let au=null;function Eh(){return au||(au=oy(WA,HA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}})),au}async function Il(t,e){const n=pc(t),i=(await Eh()).transaction(Ui,"readwrite"),s=i.objectStore(Ui),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&M_(t,e.fid),e}async function L_(t){const e=pc(t),r=(await Eh()).transaction(Ui,"readwrite");await r.objectStore(Ui).delete(e),await r.done}async function mc(t,e){const n=pc(t),i=(await Eh()).transaction(Ui,"readwrite"),s=i.objectStore(Ui),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&M_(t,a.fid),a}/**
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
 */async function Ih(t){let e;const n=await mc(t.appConfig,r=>{const i=GA(r),s=KA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===sd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GA(t){const e=t||{fid:UA(),registrationStatus:0};return $_(e)}function KA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:JA(t)}:{installationEntry:e}}async function QA(t,e){try{const n=await LA(t,e);return Il(t.appConfig,n)}catch(n){throw k_(n)&&n.customData.serverCode===409?await L_(t.appConfig):await Il(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function JA(t){let e=await eg(t.appConfig);for(;e.registrationStatus===1;)await O_(100),e=await eg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ih(t);return r||n}return e}function eg(t){return mc(t,e=>{if(!e)throw Fi.create("installation-not-found");return $_(e)})}function $_(t){return YA(t)?{fid:t.fid,registrationStatus:0}:t}function YA(t){return t.registrationStatus===1&&t.registrationTime+T_<Date.now()}/**
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
 */async function XA({appConfig:t,heartbeatServiceProvider:e},n){const r=ZA(t,n),i=DA(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:C_,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await N_(()=>fetch(r,a));if(l.ok){const h=await l.json();return A_(h)}else throw await R_("Generate Auth Token",l)}function ZA(t,{fid:e}){return`${S_(t)}/${e}/authTokens:generate`}/**
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
 */async function Th(t,e=!1){let n;const r=await mc(t.appConfig,s=>{if(!F_(s))throw Fi.create("not-registered");const o=s.authToken;if(!e&&n4(o))return s;if(o.requestStatus===1)return n=e4(t,e),s;{if(!navigator.onLine)throw Fi.create("app-offline");const a=i4(s);return n=t4(t,a),a}});return n?await n:r.authToken}async function e4(t,e){let n=await tg(t.appConfig);for(;n.authToken.requestStatus===1;)await O_(100),n=await tg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Th(t,e):r}function tg(t){return mc(t,e=>{if(!F_(e))throw Fi.create("not-registered");const n=e.authToken;return s4(n)?{...e,authToken:{requestStatus:0}}:e})}async function t4(t,e){try{const n=await XA(t,e),r={...e,authToken:n};return await Il(t.appConfig,r),n}catch(n){if(k_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await L_(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Il(t.appConfig,r)}throw n}}function F_(t){return t!==void 0&&t.registrationStatus===2}function n4(t){return t.requestStatus===2&&!r4(t)}function r4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RA}function i4(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function s4(t){return t.requestStatus===1&&t.requestTime+T_<Date.now()}/**
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
 */async function o4(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ih(e);return r?r.catch(console.error):Th(e).catch(console.error),n.fid}/**
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
 */async function a4(t,e=!1){const n=t;return await l4(n),(await Th(n,e)).token}async function l4(t){const{registrationPromise:e}=await Ih(t);e&&await e}/**
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
 */function c4(t){if(!t||!t.options)throw lu("App Configuration");if(!t.name)throw lu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw lu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function lu(t){return Fi.create("missing-app-config-values",{valueName:t})}/**
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
 */const U_="installations",u4="installations-internal",d4=t=>{const e=t.getProvider("app").getImmediate(),n=c4(e),r=Bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},h4=t=>{const e=t.getProvider("app").getImmediate(),n=Bi(e,U_).getImmediate();return{getId:()=>o4(n),getToken:i=>a4(n,i)}};function f4(){tr(new Un(U_,d4,"PUBLIC")),tr(new Un(u4,h4,"PRIVATE"))}f4();xn(I_,wh);xn(I_,wh,"esm2020");/**
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
 */const Tl="analytics",p4="firebase_id",m4="origin",g4=60*1e3,v4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ch="https://www.googletagmanager.com/gtag/js";/**
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
 */const un=new Hl("@firebase/analytics");/**
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
 */const y4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},En=new zi("analytics","Analytics",y4);/**
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
 */function _4(t){if(!t.startsWith(Ch)){const e=En.create("invalid-gtag-resource",{gtagURL:t});return un.warn(e.message),""}return t}function z_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function b4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function w4(t,e){const n=b4("firebase-js-sdk-policy",{createScriptURL:_4}),r=document.createElement("script"),i=`${Ch}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function E4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function I4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await z_(n)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(a){un.error(a)}t("config",i,s)}async function T4(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await z_(n);for(const l of o){const h=a.find(p=>p.measurementId===l),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){un.error(s)}}function C4(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await T4(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await I4(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,h]=o;t("get",a,l,h)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){un.error(a)}}return i}function x4(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=C4(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function k4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ch)&&n.src.includes(t))return n;return null}/**
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
 */const S4=30,A4=1e3;class R4{constructor(e={},n=A4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const B_=new R4;function P4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function N4(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:P4(n)},i=v4.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw En.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function O4(t,e=B_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw En.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw En.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new V4;return setTimeout(async()=>{a.abort()},g4),j_({appId:r,apiKey:i,measurementId:s},o,a,e)}async function j_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=B_){var a;const{appId:s,measurementId:o}=t;try{await D4(r,e)}catch(l){if(o)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await N4(t);return i.deleteThrottleMetadata(s),l}catch(l){const h=l;if(!M4(h)){if(i.deleteThrottleMetadata(s),o)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:o};throw l}const f=Number((a=h==null?void 0:h.customData)==null?void 0:a.httpStatus)===503?kp(n,i.intervalMillis,S4):kp(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),un.debug(`Calling attemptFetch again in ${f} millis`),j_(t,p,r,i)}}function D4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(En.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function M4(t){if(!(t instanceof zn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class V4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function L4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function $4(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function F4(){if(Ad())try{await Rd()}catch(t){return un.warn(En.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return un.warn(En.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function U4(t,e,n,r,i,s,o){const a=O4(t);a.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>un.error(m)),e.push(a);const l=F4().then(m=>{if(m)return r.getId()}),[h,f]=await Promise.all([a,l]);k4(s)||w4(s,h.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[m4]="firebase",p.update=!0,f!=null&&(p[p4]=f),i("config",h.measurementId,p),h.measurementId}/**
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
 */class z4{constructor(e){this.app=e}_delete(){return delete ps[this.app.options.appId],Promise.resolve()}}let ps={},ng=[];const rg={};let cu="dataLayer",B4="gtag",ig,xh,sg=!1;function j4(){const t=[];if(Sd()&&t.push("This is a browser extension environment."),ry()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=En.create("invalid-analytics-context",{errorInfo:e});un.warn(n.message)}}function q4(t,e,n){j4();const r=t.options.appId;if(!r)throw En.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw En.create("no-api-key");if(ps[r]!=null)throw En.create("already-exists",{id:r});if(!sg){E4(cu);const{wrappedGtag:s,gtagCore:o}=x4(ps,ng,rg,cu,B4);xh=s,ig=o,sg=!0}return ps[r]=U4(t,ng,rg,e,ig,cu,n),new z4(t)}function W4(t=Nd()){t=Et(t);const e=Bi(t,Tl);return e.isInitialized()?e.getImmediate():H4(t)}function H4(t,e={}){const n=Bi(t,Tl);if(n.isInitialized()){const i=n.getImmediate();if(ri(e,n.getOptions()))return i;throw En.create("already-initialized")}return n.initialize({options:e})}async function G4(){if(Sd()||!ry()||!Ad())return!1;try{return await Rd()}catch{return!1}}function K4(t,e,n){t=Et(t),$4(xh,ps[t.app.options.appId],e,n).catch(r=>un.error(r))}function Q4(t,e,n,r){t=Et(t),L4(xh,ps[t.app.options.appId],e,n,r).catch(i=>un.error(i))}const og="@firebase/analytics",ag="0.10.20";function J4(){tr(new Un(Tl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return q4(r,i,n)},"PUBLIC")),tr(new Un("analytics-internal",t,"PRIVATE")),xn(og,ag),xn(og,ag,"esm2020");function t(e){try{const n=e.getProvider(Tl).getImmediate();return{logEvent:(r,i,s)=>Q4(n,r,i,s),setUserProperties:(r,i)=>K4(n,r,i)}}catch(n){throw En.create("interop-component-reg-failed",{reason:n})}}}J4();const Y4={apiKey:"AIzaSyBcbduc3YI8apT4rqL-gCha2v0NFMO__ds",authDomain:"powerpoint-ai-authoring-tool.firebaseapp.com",projectId:"powerpoint-ai-authoring-tool",storageBucket:"powerpoint-ai-authoring-tool.firebasestorage.app",messagingSenderId:"262485353950",appId:"1:262485353950:web:e894909bd1a8c1c2f8a94f",measurementId:"G-F7VD36R6PQ"},kh=ay(Y4);G4().then(t=>{t&&W4(kh)});const lr=sx(kh),X4=new fr,Z4=new yo("microsoft.com"),Sh=hA(kh),oa=Bl("auth",()=>{const t=me(null),e=me(!1);async function n(f){if(f)try{const p=uc(Sh,"users",f.uid);await E_(p,{email:f.email,displayName:f.displayName||"Unknown User",photoURL:f.photoURL||"",lastActive:new Date().toISOString()},{merge:!0})}catch(p){console.error("Failed to track user activity in Firestore",p)}}KT(lr,f=>{t.value=f,e.value=!0,f&&n(f)});async function r(){try{const f=await Qp(lr,X4);return t.value=f.user,f.user}catch(f){throw console.error("Google Sign-In Error:",f),f}}async function i(){try{const f=await Qp(lr,Z4);return t.value=f.user,f.user}catch(f){throw console.error("Microsoft Sign-In Error:",f),f}}async function s(f,p){try{const m=await WT(lr,f,p);return t.value=m.user,m.user}catch(m){throw console.error("Email Sign-In Error:",m),m}}async function o(f,p){try{const m=await qT(lr,f,p);return t.value=m.user,await Hp(m.user),m.user}catch(m){throw console.error("Email Sign-Up Error:",m),m}}async function a(){t.value&&await Hp(t.value)}async function l(){lr.currentUser&&(await lr.currentUser.reload(),t.value=lr.currentUser)}async function h(){try{await QT(lr),t.value=null}catch(f){console.error("Sign-Out Error:",f)}}return{user:t,isAuthReady:e,loginWithGoogle:r,loginWithMicrosoft:i,loginWithEmail:s,signUpWithEmail:o,resendVerification:a,reloadUser:l,logout:h}}),gc="elearn_projects",Ah=`${gc}_anonymous`;function Rh(){return{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif",fontSize:16,headingFont:"Inter, sans-serif"}}function Cl(t=0){return{id:Pn(),title:`Slide ${t+1}`,background:"#ffffff",backgroundType:"color",backgroundGradient:"",backgroundImage:"",elements:[],notes:"",order:t,transition:"none",duration:0}}function uu(t="Untitled Project"){const e=Cl(0);return{id:Pn(),name:t,description:"",thumbnail:"",slides:[e],theme:Rh(),createdAt:Date.now(),updatedAt:Date.now(),version:"1.0",authorName:"",tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0}}}function eR(t,e={}){const n=q_(t);return{id:Pn(),type:t,x:e.x??100,y:e.y??100,width:e.width??n.width,height:e.height??n.height,rotation:e.rotation??0,zIndex:e.zIndex??1,locked:!1,visible:!0,opacity:e.opacity??1,content:{...n.content||{},...e.content||{}},styles:{...n.styles||{}},interactions:e.interactions||[],animations:e.animations||[]}}function tR(t,e=0){return{id:Pn(),title:t.title||`Slide ${e+1}`,background:t.background||"#ffffff",backgroundType:t.backgroundType||"color",backgroundGradient:t.backgroundGradient||"",backgroundImage:t.backgroundImage||"",elements:(t.elements||[]).map((n,r)=>eR(n.type,{...n,zIndex:n.zIndex??r+1})),notes:t.notes||"",order:e,transition:t.transition||"none",duration:t.duration||0}}function nR(t,e){return{microcourse:{description:"Interactive lesson template",theme:{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#f8f8ff",textColor:"#1a1a2e"},slides:[{title:"Course Intro",background:"#f8f8ff",elements:[{type:"heading",x:80,y:72,width:800,height:84,content:{text:e||"Microcourse: AI in Education",textAlign:"left"}},{type:"text",x:80,y:170,width:760,height:90,content:{text:"Learning objective: understand practical AI use-cases for classrooms and workplace training."}},{type:"button",x:80,y:292,width:180,height:50,content:{label:"Start Lesson",action:"navigate",target:"2"}},{type:"shape",x:700,y:320,width:190,height:130,content:{shapeType:"rectangle",fillColor:"#00c9a7",borderRadius:18}}]},{title:"Knowledge Check",background:"#ffffff",elements:[{type:"heading",x:80,y:44,width:600,height:70,content:{text:"Quick Check",textAlign:"left",fontSize:40}},{type:"quiz",x:80,y:130,width:760,height:330,content:{question:"Which AI feature best supports personalized learning?",options:["Automated attendance only","Adaptive feedback based on learner progress","Static PDF handouts","Manual grading spreadsheets"],correctIndex:1,explanation:"Adaptive feedback tailors support based on learner responses and performance."}}]}]},chromatic:{description:"Modern presentation starter",theme:{primaryColor:"#7c3aed",secondaryColor:"#ec4899",bgColor:"#ffffff",textColor:"#1f1638"},slides:[{title:"Title Slide",backgroundType:"gradient",backgroundGradient:"linear-gradient(135deg, #faf5ff 0%, #fff1f2 100%)",elements:[{type:"heading",x:90,y:130,width:780,height:88,content:{text:e||"Chromatic Presentation",textAlign:"center",fontSize:52}},{type:"text",x:180,y:232,width:600,height:70,content:{text:"A colorful template to introduce your topic with style.",textAlign:"center"}},{type:"button",x:390,y:328,width:180,height:48,content:{label:"Continue",action:"navigate",target:"2",variant:"primary",bgColor:"#7c3aed"}}]}]},branching:{description:"Branching scenario template",theme:{primaryColor:"#2563eb",secondaryColor:"#14b8a6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Decision Point",background:"#f8fafc",elements:[{type:"heading",x:80,y:60,width:740,height:74,content:{text:"Branching Scenario",textAlign:"left"}},{type:"text",x:80,y:150,width:800,height:80,content:{text:"A customer asks for a full refund after the deadline. What do you do first?"}},{type:"button",x:80,y:270,width:290,height:54,content:{label:"Option A: Escalate to manager",action:"navigate",target:"2"}},{type:"button",x:390,y:270,width:290,height:54,content:{label:"Option B: Offer partial credit",action:"navigate",target:"3"}},{type:"hotspot",x:770,y:420,width:66,height:66,content:{icon:"i",popupTitle:"Facilitator Tip",popupContent:"Ask learners why they chose each option before revealing outcomes."}}]}]},flipcards:{description:"Interactive card challenge starter",theme:{primaryColor:"#0891b2",secondaryColor:"#f59e0b",bgColor:"#f0f9ff",textColor:"#0f172a"},slides:[{title:"Flipcards Activity",background:"#f0f9ff",elements:[{type:"heading",x:80,y:58,width:800,height:74,content:{text:"Flipcards Museum",textAlign:"left"}},{type:"text",x:80,y:138,width:780,height:64,content:{text:"Prompt learners to reveal each card and discuss what they discover."}},{type:"shape",x:120,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:380,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:640,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}}]}]},"higher-ed":{description:"Higher education lecture starter",theme:{primaryColor:"#1d4ed8",secondaryColor:"#16a34a",bgColor:"#ffffff",textColor:"#0f172a"},slides:[{title:"Lecture Overview",background:"#ffffff",elements:[{type:"heading",x:80,y:70,width:790,height:80,content:{text:e||"Higher Education",textAlign:"left"}},{type:"text",x:80,y:170,width:780,height:124,content:{text:"Use this deck to define outcomes, introduce key concepts, and include formative checks."}},{type:"button",x:80,y:328,width:190,height:48,content:{label:"Add Agenda",action:"none"}}]}]},complete:{description:"Sentence completion quiz starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#22c55e",bgColor:"#f8f7ff",textColor:"#1a1a2e"},slides:[{title:"Complete the Sentence",background:"#f8f7ff",elements:[{type:"heading",x:80,y:55,width:700,height:76,content:{text:"Complete the sentence",textAlign:"left"}},{type:"quiz",x:80,y:140,width:760,height:330,content:{question:"AI literacy in workplaces improves when teams ______.",options:["Avoid practical tasks","Use AI tools with clear guardrails and practice","Rely only on theory","Stop measuring outcomes"],correctIndex:1,explanation:"Practice with clear policies helps teams use AI safely and effectively."}}]}]},"fill-blanks":{description:"Quiz assessment starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#06b6d4",bgColor:"#ffffff",textColor:"#111827"},slides:[{title:"Quiz Assessment",background:"#ffffff",elements:[{type:"heading",x:80,y:48,width:760,height:76,content:{text:"Fill in the blanks",textAlign:"left"}},{type:"text",x:80,y:126,width:760,height:64,content:{text:"Replace with your own question set and publish in minutes."}},{type:"quiz",x:80,y:196,width:760,height:280,content:{question:"The most important part of a good assessment is ______.",options:["Clear learning objective","Random difficulty","Longer text only","Colorful background"],correctIndex:0,explanation:"Assessments should align clearly with learning objectives."}}]}]},timeline:{description:"Timeline infographic starter",theme:{primaryColor:"#0ea5e9",secondaryColor:"#8b5cf6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Data Timeline",background:"#f8fafc",elements:[{type:"heading",x:80,y:40,width:760,height:74,content:{text:"Data Viz Timeline",textAlign:"left"}},{type:"shape",x:100,y:255,width:760,height:8,content:{shapeType:"rectangle",fillColor:"#0ea5e9",borderRadius:8}},{type:"shape",x:170,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:430,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:690,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"text",x:120,y:290,width:150,height:70,content:{text:`Phase 1
Discovery`,textAlign:"center"}},{type:"text",x:380,y:290,width:150,height:70,content:{text:`Phase 2
Build`,textAlign:"center"}},{type:"text",x:640,y:290,width:150,height:70,content:{text:`Phase 3
Launch`,textAlign:"center"}}]}]}}[t]||{description:"Starter template",theme:Rh(),slides:[{title:e||"New Slide",background:"#ffffff",elements:[]}]}}function xl(t=null){const e=t?`${gc}_${t}`:Ah;try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function lg(t,e=null){const n=e?`${gc}_${e}`:Ah;try{localStorage.setItem(n,JSON.stringify(t))}catch{}}function cg(t=null){const e=t?`${gc}_${t}`:Ah;try{localStorage.removeItem(e)}catch{}}function vc(t){return dA(Sh,"users",t,"projects")}function Ph(t){return{...t,description:t.description||"",thumbnail:t.thumbnail||"",slides:Array.isArray(t.slides)?t.slides:[Cl(0)],theme:{...Rh(),...t.theme||{}},createdAt:Number(t.createdAt)||Date.now(),updatedAt:Number(t.updatedAt)||Date.now(),version:t.version||"1.0",authorName:t.authorName||"",tags:Array.isArray(t.tags)?t.tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,...t.settings||{}}}}async function rR(t,e){!t||!(e!=null&&e.id)||await E_(uc(vc(t),e.id),Ph(e))}async function iR(t,e){!t||!e||await CA(uc(vc(t),e))}async function sR(t){if(!t)return;const e=[...xl(),...xl(t)];if(!e.length)return;const n=vc(t),r=await TA(n),i=new Set(r.docs.map(a=>a.id)),s=SA(Sh);let o=!1;e.forEach(a=>{i.has(a.id)||(s.set(uc(n,a.id),Ph(a)),i.add(a.id),o=!0)}),o&&await s.commit(),cg(),cg(t)}const In=Bl("projects",()=>{const t=oa(),e=me([]),n=me("");let r=null;rn(()=>{var P;return(P=t.user)==null?void 0:P.uid},async P=>{if(n.value="",r&&(r(),r=null),!P){e.value=xl();return}e.value=[];try{await sR(P)}catch(O){console.error("Failed to migrate browser projects",O),n.value="Some browser-saved projects could not be migrated to your account."}r=xA(vc(P),O=>{e.value=O.docs.map(b=>Ph({id:b.id,...b.data()})),lg(e.value,P)},O=>{console.error("Failed to sync account projects",O),n.value="Unable to sync your projects right now.",e.value=xl(P)})},{immediate:!0,flush:"sync"});const i=Se(()=>[...e.value].sort((P,O)=>O.updatedAt-P.updatedAt));function s(){var P;lg(e.value,((P=t.user)==null?void 0:P.uid)||null)}function o(P){var O;return s(),(O=t.user)!=null&&O.uid?rR(t.user.uid,P).catch(b=>{console.error("Failed to persist project",b),n.value="Unable to save your latest project changes."}):Promise.resolve()}function a(P){var O;return s(),(O=t.user)!=null&&O.uid?iR(t.user.uid,P).catch(b=>{console.error("Failed to delete project",b),n.value="Unable to delete this project from your account."}):Promise.resolve()}function l(P){const O=uu(P);return e.value.push(O),o(O),O}function h(P,O,b=""){const S=nR(P,O),I=uu(O);return I.description=b||S.description||"",I.theme={...I.theme,...S.theme||{}},I.slides=(S.slides||[]).map((J,te)=>tR(J,te)),I.createdAt=Date.now(),I.updatedAt=Date.now(),e.value.push(I),o(I),I}function f(P){const O=e.value.find(S=>S.id===P);if(!O)return null;const b=JSON.parse(JSON.stringify(O));return b.id=Pn(),b.name=`${b.name} (copy)`,b.createdAt=Date.now(),b.updatedAt=Date.now(),b.slides=b.slides.map(S=>(S.id=Pn(),S.elements=S.elements.map(I=>({...I,id:Pn()})),S)),e.value.push(b),o(b),b}function p(P){const O=e.value.findIndex(b=>b.id===P);O!==-1&&(e.value.splice(O,1),a(P))}function m(P){return e.value.find(O=>O.id===P)||null}function v(P,O){const b=e.value.findIndex(S=>S.id===P);b!==-1&&(e.value[b]={...e.value[b],...O,updatedAt:Date.now()},o(e.value[b]))}function _(P,O=-1){const b=m(P);if(!b)return null;const S=O>=0?O+1:b.slides.length,I=Cl(S);return O>=0?b.slides.splice(O+1,0,I):b.slides.push(I),b.slides.forEach((J,te)=>{J.order=te}),b.updatedAt=Date.now(),o(b),I}function u(P,O){const b=m(P);if(!b||b.slides.length<=1)return;const S=b.slides.findIndex(I=>I.id===O);S!==-1&&(b.slides.splice(S,1),b.slides.forEach((I,J)=>{I.order=J}),b.updatedAt=Date.now(),o(b))}function w(P,O){const b=m(P);if(!b)return null;const S=b.slides.find(te=>te.id===O);if(!S)return null;const I=JSON.parse(JSON.stringify(S));I.id=Pn(),I.title=`${I.title} (copy)`;const J=b.slides.findIndex(te=>te.id===O);return b.slides.splice(J+1,0,I),b.slides.forEach((te,$)=>{te.order=$}),b.updatedAt=Date.now(),o(b),I}function x(P,O,b){const S=m(P);if(!S)return;const[I]=S.slides.splice(O,1);S.slides.splice(b,0,I),S.slides.forEach((J,te)=>{J.order=te}),S.updatedAt=Date.now(),o(S)}function R(P,O,b){const S=m(P);if(!S)return;const I=S.slides.find(J=>J.id===O);I&&(Object.assign(I,b),S.updatedAt=Date.now(),o(S))}function M(P,O,b,S={}){const I=m(P);if(!I)return null;const J=I.slides.find(ie=>ie.id===O);if(!J)return null;const te=J.elements.reduce((ie,Ee)=>Math.max(ie,Ee.zIndex||0),0),$=q_(b),de={id:Pn(),type:b,x:100,y:100,width:$.width,height:$.height,rotation:0,zIndex:te+1,locked:!1,visible:!0,opacity:1,...$,...S,interactions:[],animations:[]};return J.elements.push(de),I.updatedAt=Date.now(),o(I),de}function V(P,O,b,S){const I=m(P);if(!I)return;const J=I.slides.find($=>$.id===O);if(!J)return;const te=J.elements.find($=>$.id===b);te&&(Object.assign(te,S),I.updatedAt=Date.now(),o(I))}function L(P,O,b){const S=m(P);if(!S)return;const I=S.slides.find(te=>te.id===O);if(!I)return;const J=I.elements.findIndex(te=>te.id===b);J!==-1&&(I.elements.splice(J,1),S.updatedAt=Date.now(),o(S))}function F(P,O,b){const S=m(P);if(!S)return null;const I=S.slides.find($=>$.id===O);if(!I)return null;const J=I.elements.find($=>$.id===b);if(!J)return null;const te=JSON.parse(JSON.stringify(J));return te.id=Pn(),te.x+=20,te.y+=20,te.zIndex=J.zIndex+1,I.elements.push(te),S.updatedAt=Date.now(),o(S),te}function C(P,O,b,S){const I=m(P);if(!I)return;const J=I.slides.find(ie=>ie.id===O);if(!J)return;const te=J.elements.find(ie=>ie.id===b);if(!te)return;const $=J.elements.map(ie=>ie.zIndex).sort((ie,Ee)=>ie-Ee),de=te.zIndex;if(S==="up"){const ie=$.find(Ee=>Ee>de);if(ie!==void 0){const Ee=J.elements.find(re=>re.zIndex===ie);Ee&&(Ee.zIndex=de,te.zIndex=ie)}}else{const ie=[...$].reverse().find(Ee=>Ee<de);if(ie!==void 0){const Ee=J.elements.find(re=>re.zIndex===ie);Ee&&(Ee.zIndex=de,te.zIndex=ie)}}I.updatedAt=Date.now(),o(I)}function E(P){const O=m(P);return O?JSON.stringify(O,null,2):null}function T(P){try{const O=JSON.parse(P);return O.id=Pn(),O.name=`${O.name} (imported)`,O.createdAt=Date.now(),O.updatedAt=Date.now(),e.value.push(O),o(O),O}catch{return null}}return{projects:e,sortedProjects:i,syncError:n,createProject:l,createProjectFromTemplate:h,duplicateProject:f,deleteProject:p,getProject:m,updateProject:v,addSlide:_,deleteSlide:u,duplicateSlide:w,reorderSlides:x,updateSlide:R,addElement:M,updateElement:V,deleteElement:L,duplicateElement:F,reorderElement:C,exportProject:E,importProject:T,makeBlankSlide:Cl,makeNewProject:uu}});function q_(t){const e={text:{width:300,height:80,content:{text:"Click to edit text",fontSize:18,fontFamily:"Inter, sans-serif",fontWeight:"normal",fontStyle:"normal",textDecoration:"none",textAlign:"left",color:"#1a1a2e",lineHeight:1.5,textTransform:"none",letterSpacing:0},styles:{}},heading:{width:500,height:80,content:{text:"Heading",fontSize:36,fontFamily:"Inter, sans-serif",fontWeight:"bold",fontStyle:"normal",textDecoration:"none",textAlign:"center",color:"#1a1a2e",lineHeight:1.2,textTransform:"none",letterSpacing:0},styles:{}},image:{width:300,height:200,content:{src:"",alt:"",objectFit:"cover",borderRadius:0,borderWidth:0,borderColor:"#e2e8f0"},styles:{}},shape:{width:150,height:100,content:{shapeType:"rectangle",fillColor:"#6c47ff",borderColor:"transparent",borderWidth:0,borderRadius:8,opacity:1},styles:{}},button:{width:160,height:48,content:{label:"Click Me",variant:"primary",action:"none",target:"",bgColor:"",textColor:"",borderColor:"",borderRadius:8,fontSize:15,fontWeight:600,fontFamily:"Inter, sans-serif",letterSpacing:0},styles:{}},hotspot:{width:60,height:60,content:{icon:"?",bgColor:"#6c47ff",iconColor:"#ffffff",borderRadius:999,tooltip:"Click to learn more",popupContent:"Add your content here...",popupTitle:"Info",popupBgColor:"#ffffff",popupTextColor:"#1a1a2e"},styles:{}},video:{width:480,height:270,content:{src:"",poster:"",autoplay:!1,controls:!0,loop:!1,muted:!1,objectFit:"cover"},styles:{}},audio:{width:280,height:56,content:{src:"",label:"Audio Player",autoplay:!1,controls:!0,loop:!1,bgColor:"#ede7ff",textColor:"#555555",accentColor:"#6c47ff"},styles:{}},divider:{width:400,height:4,content:{color:"#e2e8f0",thickness:2},styles:{}},quiz:{width:480,height:300,content:{question:"Your question here?",options:["Option A","Option B","Option C","Option D"],correctIndex:0,explanation:"",cardBgColor:"#ffffff",questionColor:"#1a1a2e",accentColor:"#6c47ff"},styles:{}}};return e[t]||e.text}const An=Bl("editor",()=>{const t=me(null),e=me(null),n=me([]),r=me(null),i=me("select"),s=me("rectangle"),o=me("properties"),a=me("slides"),l=me(!1),h=me(!1),f=me(!0),p=me(20),m=me(!1),v=me(1),_=me(!1),u=me(!1),w=me(!1),x=me(null),R=me(!1),M=me(!1),V=me(!0),L=me(null),F=me([]),C=me(-1),E=20,T=me(!1),P=me(!1),O=me(null),b=me(0),S=me(0),I=Se(()=>n.value.length===1?n.value[0]:null),J=Se(()=>n.value.length>0),te=Se(()=>n.value.length>1);function $(N){t.value=N,n.value=[],F.value=[],C.value=-1,v.value=1}function de(N){e.value=N,n.value=[]}function ie(N,D=!1){D&&N?n.value.includes(N)?n.value=n.value.filter(j=>j!==N):n.value=[...n.value,N]:n.value=N?[N]:[]}function Ee(N){n.value=N}function re(){n.value=[]}function ee(N){i.value=N,N!=="select"&&(n.value=[])}function Ce(N){o.value=N}function we(N){v.value=Math.max(.25,Math.min(3,N))}function Z(){we(v.value+.1)}function Ie(){we(v.value-.1)}function oe(){we(1)}function he(){h.value=!h.value}function pe(){f.value=!f.value}function Te(){V.value=!V.value}function Re(N){C.value<F.value.length-1&&F.value.splice(C.value+1),F.value.push(JSON.parse(JSON.stringify(N))),F.value.length>E&&F.value.shift(),C.value=F.value.length-1}function q(){return C.value>0}function K(){return C.value<F.value.length-1}function g(){return q()?(C.value--,JSON.parse(JSON.stringify(F.value[C.value]))):null}function Q(){return K()?(C.value++,JSON.parse(JSON.stringify(F.value[C.value]))):null}function H(N){L.value=JSON.parse(JSON.stringify(N))}return{projectId:t,currentSlideId:e,selectedElementIds:n,selectedElementId:I,hoveredElementId:r,activeTool:i,activeShape:s,rightPanelTab:o,leftPanelTab:a,isFullscreen:l,showGrid:h,snapToGrid:f,gridSize:p,showRulers:m,zoomLevel:v,isSaving:_,showExportModal:u,showInteractionEditor:w,interactionElementId:x,showThemeManager:R,showAIPanel:M,showSlidePanel:V,clipboard:L,isDragging:T,isResizing:P,resizeHandle:O,panX:b,panY:S,hasSelection:J,multiSelection:te,setProject:$,setCurrentSlide:de,selectElement:ie,setSelection:Ee,clearSelection:re,setActiveTool:ee,setRightPanel:Ce,setZoom:we,zoomIn:Z,zoomOut:Ie,zoomReset:oe,toggleGrid:he,toggleSnap:pe,toggleSlidePanel:Te,pushHistory:Re,canUndo:q,canRedo:K,undo:g,redo:Q,setClipboard:H}}),W_=Bl("ai",()=>{const t=me(localStorage.getItem("ai_api_key")||""),e=me(localStorage.getItem("ai_provider")||"openai"),n=me(!1),r=me(""),i=me([]);function s(w){t.value=w,localStorage.setItem("ai_api_key",w)}function o(w){e.value=w,localStorage.setItem("ai_provider",w)}async function a(w,x={}){var R;if(!t.value)return u(w,x);n.value=!0,r.value="";try{const M=[{role:"system",content:`You are an expert eLearning content creator. Generate clear, engaging, and educational content. Format output as clean text unless asked for JSON. Context: ${JSON.stringify(x)}`},{role:"user",content:w}],V=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.value}`},body:JSON.stringify({model:"gpt-4o-mini",messages:M,temperature:.7,max_tokens:1500})});if(!V.ok){const C=await V.json();throw new Error(((R=C.error)==null?void 0:R.message)||`HTTP ${V.status}`)}const F=(await V.json()).choices[0].message.content;return i.value.push({prompt:w,result:F,timestamp:Date.now()}),F}catch(M){return r.value=M.message,null}finally{n.value=!1}}async function l(w,x="general",R="",M=""){let V;if(M.trim())V=M.trim();else{const F=R.trim()?`
Additional context: ${R.trim()}`:"",C={intro:"Focus on welcoming learners, stating the purpose, and building motivation.",overview:"Provide a high-level map of all topics to be covered.",concept:"Explain the concept clearly with a definition, how it works, and why it matters.",example:"Present a real-world case study or worked example with outcome.",summary:"Recap the key points covered and reinforce the main message.",callout:"Highlight a single critical insight or action item.",general:"Create a well-structured educational slide with title, key points, and a takeaway."}[x]||"";V=`You are an expert eLearning content creator and visual slide designer.
Create content for a "${x}" eLearning slide about: "${w}".${F}
Instruction: ${C}

Return ONLY a valid JSON object, no markdown:
{
  "title": "Concise, engaging slide title",
  "subtitle": "One-line supporting statement (optional)",
  "bullets": ["Specific point 1 about ${w}", "Specific point 2", "Specific point 3"],
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
- Ensure all content is specific to "${w}" — never use generic placeholders.`}const L=await a(V,{type:"slideContent",slideType:x,topic:w});if(!L)return null;try{return JSON.parse(L.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return{title:w,bullets:[L]}}}async function h(w,x=5,{audience:R="",objective:M="",tone:V="professional",customPrompt:L=""}={}){const F=Math.max(1,Math.min(20,Number(x)||1));let C;if(L.trim())C=L.trim();else{const T=R.trim()?`
Audience: ${R.trim()}`:"",P=M.trim()?`
Learning objective: ${M.trim()}`:"";C=`You are an expert eLearning instructional designer.
Create a complete ${F}-slide deck about "${w}" in a ${V} tone.${T}${P}

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
- Return exactly ${F} slides
- Sequence the deck logically: intro → concept build-up → applied example(s) → summary
- Keep each slide distinct and avoid repeated bullet wording
- Keep bullets concise (3-5 per slide), action-oriented, and specific to "${w}"`}const E=await a(C,{type:"slideDeck",topic:w,slideCount:F,tone:V});if(!E)return null;try{const T=E.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim(),P=JSON.parse(T),O=Array.isArray(P)?P:P==null?void 0:P.slides;return Array.isArray(O)?O.slice(0,F).map((b,S)=>{const I=Array.isArray(b==null?void 0:b.bullets)?b.bullets:typeof(b==null?void 0:b.bullets)=="string"?b.bullets.split(`
`):[];return{title:String((b==null?void 0:b.title)||`${w||"Slide"} ${S+1}`).trim(),subtitle:String((b==null?void 0:b.subtitle)||"").trim(),bullets:I.map(J=>String(J||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean),callout:String((b==null?void 0:b.callout)||"").trim(),slideType:String((b==null?void 0:b.slideType)||"general").trim()}}):null}catch{return null}}async function f(w,x=4,{difficulty:R="intermediate",questionType:M="multiple-choice",objective:V="",customPrompt:L=""}={}){if(L.trim()){const O=await a(L.trim(),{type:"quiz",topic:w,count:x,difficulty:R,questionType:M});if(!O)return null;try{return JSON.parse(O.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}const F=M==="true-false"?'Each question must be True/False with exactly 2 options: ["True", "False"]':M==="mixed"?'Mix multiple-choice (4 options) and True/False (2 options: ["True", "False"]) questions roughly 50/50':"Each question must be multiple-choice with exactly 4 distinct options",C={beginner:"Use simple vocabulary. Focus on foundational recall and recognition.",intermediate:"Require some understanding and application of concepts.",advanced:"Challenge deeper understanding, analysis, and critical thinking."}[R]||"",E=V?`
Learning objective: ${V}`:"",T=`You are an expert eLearning instructional designer.
Create exactly ${x} quiz questions about: "${w}".${E}

Difficulty: ${R.charAt(0).toUpperCase()+R.slice(1)} — ${C}
Question type: ${F}

Return ONLY a valid JSON array, no markdown, no extra text:
[
  {
    "question": "Clear, unambiguous question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Brief explanation of why the answer is correct",
    "difficulty": "${R}",
    "type": "multiple-choice"
  }
]

Ensure:
- All questions are unique and clearly worded
- Wrong options (distractors) are plausible but clearly incorrect
- Explanations are educational and concise
- correctIndex is 0-based index into the options array`,P=await a(T,{type:"quiz",topic:w,count:x,difficulty:R,questionType:M});if(!P)return null;try{return JSON.parse(P.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}async function p(w,x="professional"){const R=`Write a ${x} voiceover script for a slide with this content: "${w}".
Keep it concise (30-60 seconds when read aloud). Write naturally as if speaking.`;return a(R,{type:"voiceover",style:x})}async function m(w,x){const R=`Translate the following eLearning content to ${x}. Preserve formatting and educational tone:

${w}`;return a(R,{type:"translation",targetLanguage:x})}async function v(w,x="Make it clearer and more engaging"){const R=`${x}:

${w}`;return a(R,{type:"improve"})}async function _(w){const x=`Generate a detailed image prompt for a corporate or educational slide about: "${w}". 
Make it suitable for AI image generation (like Midjourney or DALL-E). Ensure the prompt specifically asks for a "highly detailed photorealistic image, realistic lighting, photographic style, no text". Be specific about composition and relevance.`;return a(x,{type:"imagePrompt",topic:w})}function u(w,x){const R=x.topic||"this topic",M=Math.max(1,Math.min(20,Number(x.slideCount)||5)),V={slideContent:JSON.stringify({title:x.topic||"Sample Slide",subtitle:`An introduction to ${R}`,bullets:[`${x.topic?x.topic+" covers":"This topic covers"} foundational principles that drive real-world applications`,"Understanding the core components helps in diagnosing and solving complex problems effectively","Best practices ensure safety, efficiency, and long-term performance in this domain"],callout:`Master the fundamentals of ${x.topic||"this subject"} to build a strong professional foundation`,design:{layout:"split",titleAlign:"left",bulletStyle:"check",emphasis:"balanced"}}),slideDeck:JSON.stringify({slides:Array.from({length:M},(L,F)=>{const C=F===0,E=F===M-1;return{title:C?`${R}: Introduction`:E?`${R}: Key Takeaways`:`${R}: Core Idea ${F}`,subtitle:C?`Why ${R} matters`:E?"Summary and next steps":"Building practical understanding",bullets:[`Understand a concrete aspect of ${R}`,"Apply this concept in a practical context","Connect this idea to real-world outcomes"],callout:E?`Use these principles of ${R} to guide decisions and actions.`:"Focus on clarity and practical application.",slideType:C?"intro":E?"summary":"concept"}})}),quiz:JSON.stringify([{question:"Which of the following best describes the core concept of this topic?",options:["It focuses on foundational principles","It applies advanced methodologies","It combines theory with practice","It relies solely on memorization"],correctIndex:2,explanation:"Combining theory with practice is the most effective approach for deep understanding.",difficulty:"intermediate",type:"multiple-choice"},{question:"A learner who understands this topic can apply it to real-world problems.",options:["True","False"],correctIndex:0,explanation:"Understanding foundational concepts enables practical application in real-world scenarios.",difficulty:"intermediate",type:"true-false"},{question:"What is the first step when approaching this subject?",options:["Skip to advanced material","Define key terminology","Practice without understanding","Avoid structured learning"],correctIndex:1,explanation:"Defining key terminology builds the vocabulary needed for deeper comprehension.",difficulty:"beginner",type:"multiple-choice"},{question:"Which strategy leads to the best long-term retention of this material?",options:["Cramming the night before","Spaced repetition and active recall","Reading passively multiple times","Watching videos only"],correctIndex:1,explanation:"Spaced repetition and active recall are scientifically proven to maximize long-term retention.",difficulty:"intermediate",type:"multiple-choice"}]),voiceover:"Welcome to this lesson. In this section, we'll explore the key concepts that will help you understand the topic better. Pay close attention to the main points as we go through them one by one.",translation:`[Translated text for: ${R}]

Las mejores prÃ¡cticas garantizan la seguridad, la eficiencia y el rendimiento a largo plazo en este dominio.`,improve:`Here is a clearer, more engaging version of your text:

Understanding the core components helps you diagnose and solve complex problems much more effectively.`,imagePrompt:`A high-quality, professional, photorealistic image about: "${R}". 8k resolution, highly detailed, realistic lighting, photographic style, suitable for a corporate presentation.`,default:"This is a sample AI-generated response. Configure your OpenAI API key in the AI settings panel to get real responses."};return n.value=!0,new Promise(L=>{setTimeout(()=>{n.value=!1;const F=x.type||"default";L(V[F]||V.default)},1500)})}return{apiKey:t,apiProvider:e,isGenerating:n,lastError:r,generationHistory:i,setApiKey:s,setProvider:o,generate:a,generateSlideContent:l,generateSlideDeck:h,generateQuiz:f,generateVoiceoverScript:p,generateTranslation:m,improveText:v,generateImagePrompt:_}}),oR=["aria-label"],aR={key:0,class:"modal-header"},lR={key:0,class:"modal-title"},cR={class:"modal-body"},uR={key:1,class:"modal-footer"},dR={__name:"Modal",props:{title:{type:String,default:""},size:{type:String,default:"md"},showClose:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:e}){const n=e;return(r,i)=>(G(),St(yd,{to:"body"},[_t(ni,{name:"modal"},{default:kt(()=>[d("div",{class:"modal-overlay",onMousedown:i[1]||(i[1]=Wt(s=>n("close"),["self"]))},[d("div",{class:je(["modal-box",`modal-${t.size}`]),role:"dialog","aria-modal":"true","aria-label":t.title||"Dialog"},[t.title||t.showClose?(G(),Y("div",aR,[t.title?(G(),Y("h3",lR,ve(t.title),1)):Pe("",!0),t.showClose?(G(),Y("button",{key:1,class:"btn btn-icon modal-close",onClick:i[0]||(i[0]=s=>n("close"))},[...i[2]||(i[2]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])):Pe("",!0)])):Pe("",!0),d("div",cR,[_u(r.$slots,"default",{},void 0,!0)]),r.$slots.footer?(G(),Y("div",uR,[_u(r.$slots,"footer",{},void 0,!0)])):Pe("",!0)],10,oR)],32)]),_:3})]))}},is=Bt(dR,[["__scopeId","data-v-417bb59d"]]),hR={class:"market-shell"},fR={class:"left-rail"},pR={class:"rail-nav"},mR={class:"market-main"},gR={key:0,class:"verification-banner"},vR={class:"verification-actions"},yR=["disabled"],_R={id:"home-anchor",class:"hero templates-hero"},bR={class:"hero-top"},wR={key:0,class:"hero-user g-rounded"},ER={class:"user-chip-new"},IR={key:1,class:"hero-user g-rounded"},TR={class:"search-bar-g"},CR={id:"templates-anchor",class:"toolbar-row-g"},xR={class:"chip-list-g"},kR=["onClick"],SR={class:"section-title"},AR={class:"cards-row"},RR=["onClick"],PR={class:"card-type"},NR={class:"card-title"},OR={class:"app-top-nav"},DR={class:"nav-search-bar"},MR={class:"nav-actions"},VR={key:0,class:"user-info-mini"},LR={class:"user-chip"},$R={key:1},FR={key:0,class:"home-container"},UR={class:"home-hero"},zR={class:"home-hero-copy"},BR={class:"home-hero-actions"},jR={class:"home-hero-metrics"},qR={class:"hero-metric-card"},WR={class:"hero-metric-card"},HR={class:"welcome-section"},GR={class:"welcome-title"},KR={class:"quick-actions"},QR={class:"projects-section",style:{"padding-top":"0"}},JR={class:"projects-head",style:{"justify-content":"space-between"}},YR={key:0,class:"project-grid"},XR=["onClick","data-tooltip"],ZR={class:"project-name"},eP={class:"project-meta"},tP=["onClick"],nP={key:1,class:"projects-lock-card"},rP={key:2,class:"projects-lock-card"},iP={key:1,class:"content-container"},sP={class:"projects-section",style:{padding:"0"}},oP={key:0,class:"project-grid"},aP=["onClick","data-tooltip"],lP={class:"project-name"},cP={class:"project-meta"},uP=["onClick"],dP=["onClick"],hP={class:"auth-modal-body"},fP={class:"auth-title"},pP={class:"auth-message"},mP={class:"auth-mode-toggle"},gP={class:"form-group"},vP={class:"form-group"},yP={key:0,class:"auth-error-msg"},_P=["disabled"],bP={class:"auth-provider-list"},wP=["onClick"],EP={class:"provider-name"},IP={class:"provider-description"},TP={class:"form-group"},CP={class:"form-group"},xP={key:0,class:"error-msg"},kP={class:"ai-create-shell"},SP={class:"ai-mode-grid"},AP={class:"form-group"},RP={class:"form-group"},PP=["placeholder"],NP={class:"form-group"},OP={class:"ai-config-grid"},DP={key:0,class:"form-group"},MP={class:"form-group"},VP={class:"form-group"},LP={class:"form-group"},$P={class:"ai-create-note"},FP={key:0,class:"error-msg"},UP=["disabled"],zP={__name:"DashboardView",setup(t){const e=kd(),n=In(),r=An(),i=oa(),s=W_(),o=me(!1),a=me(!1),l=me(!1),h=me(""),f=me(""),p=me(""),m=me(""),v=me("all"),_=me("home"),u=me(null),w=me("signin"),x=me(""),R=me(""),M=me(""),V=me(!1),L=me(!1),F=me("quiz"),C=me(""),E=me(""),T=me(""),P=me(5),O=me(5),b=me("intermediate"),S=me("multiple-choice"),I=me(""),J=me(!1),te=Se(()=>i.user?{authTypeLabel:i.user.displayName||i.user.email||"Current User",emailVerified:i.user.emailVerified,email:i.user.email}:null),$=Se(()=>{const fe=C.value.trim();return fe?F.value==="quiz"?`${fe} Quiz`:`${fe} Slide Deck`:F.value==="quiz"?"AI Quiz Project":"AI Slide Deck"}),de=Se(()=>J.value||s.isGenerating?F.value==="quiz"?"Creating quiz...":"Creating slides...":F.value==="quiz"?"Create quiz project":"Create slide project"),ie=[{id:"google",label:"Google",description:"Continue with your Google account"},{id:"microsoft",label:"Microsoft",description:"Continue with your Microsoft account"}],Ee=Se(()=>w.value==="signin"?"Welcome back":"Create your account"),re=Se(()=>w.value==="signin"?"Existing users can sign in with a standard provider.":"New users can sign up with a standard provider."),ee=[{label:"Games and challenges",value:"games"},{label:"Quizzes and Surveys",value:"quizzes"},{label:"Presentations",value:"presentations"},{label:"More",value:"more"}],Ce=[{id:"microcourse",title:"Microcourse: AI in Education",subtitle:"Interactive lesson",category:"presentations",section:"Teach classes",style:"bg-a"},{id:"chromatic",title:"Chromatic",subtitle:"Presentation",category:"presentations",section:"Teach classes",style:"bg-b"},{id:"branching",title:"Branching Scenario",subtitle:"Scenario practice",category:"games",section:"Teach classes",style:"bg-c"},{id:"flipcards",title:"Flipcards Museum",subtitle:"Game challenge",category:"games",section:"Teach classes",style:"bg-d"},{id:"higher-ed",title:"Higher Education",subtitle:"Presentation",category:"presentations",section:"Boost power skills",style:"bg-e"},{id:"complete",title:"Complete the sentence",subtitle:"Quiz",category:"quizzes",section:"Boost power skills",style:"bg-f"},{id:"fill-blanks",title:"Fill in the blanks",subtitle:"Quiz assessment",category:"quizzes",section:"Boost power skills",style:"bg-g"},{id:"timeline",title:"Data Viz Timeline",subtitle:"Interactive infographic",category:"more",section:"Boost power skills",style:"bg-h"}],we=Se(()=>{const fe=m.value.trim().toLowerCase();return Ce.filter(B=>{const Ne=v.value==="all"||B.category===v.value,ge=!fe||B.title.toLowerCase().includes(fe)||B.subtitle.toLowerCase().includes(fe);return Ne&&ge})}),Z=Se(()=>{const fe=new Map;return we.value.forEach(B=>{fe.has(B.section)||fe.set(B.section,[]),fe.get(B.section).push(B)}),Array.from(fe.entries()).map(([B,Ne])=>({title:B,cards:Ne}))}),Ie=Se(()=>{const fe=m.value.trim().toLowerCase();return n.sortedProjects.filter(B=>{var Ne;return fe?B.name.toLowerCase().includes(fe)||((Ne=B.description)==null?void 0:Ne.toLowerCase().includes(fe)):!0}).slice(0,8)});function oe(){if(!te.value){Qe("signin");return}h.value="My New Course",o.value=!0,setTimeout(()=>{var fe;return(fe=document.getElementById("project-name-input"))==null?void 0:fe.focus()},50)}function he(){if(!te.value){Qe("signin");return}a.value=!0}function pe(fe="quiz"){F.value=fe,C.value="",E.value="",T.value="",P.value=5,O.value=5,b.value="intermediate",S.value="multiple-choice",I.value=""}function Te(fe="quiz"){if(!te.value){Qe("signin");return}pe(fe),L.value=!0,setTimeout(()=>{var B;return(B=document.getElementById("ai-topic-input"))==null?void 0:B.focus()},50)}function Re(){if(!h.value.trim())return;const fe=n.createProject(h.value.trim());o.value=!1,q(fe.id)}function q(fe){r.setProject(fe),e.push({name:"editor",params:{id:fe}})}function K(fe){const B=n.createProjectFromTemplate(fe.id,fe.title,`${fe.subtitle} template`);q(B.id)}function g(fe=F.value){return fe==="quiz"?{primary:"#5b21b6",secondary:"#f59e0b",surface:"#fffaf0",text:"#111827",muted:"#475569",gradient:"linear-gradient(135deg, #faf5ff 0%, #fff7ed 100%)",panel:"#ffffff",accentSoft:"#f3e8ff"}:{primary:"#2563eb",secondary:"#14b8a6",surface:"#f8fbff",text:"#0f172a",muted:"#475569",gradient:"linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%)",panel:"#ffffff",accentSoft:"#dbeafe"}}function Q(fe){const B=fe&&typeof fe=="object"?fe:{},Ne=Array.isArray(B.bullets)?B.bullets:typeof B.bullets=="string"?B.bullets.split(`
`):[];return{title:String(B.title||C.value||"Untitled Slide").trim(),subtitle:String(B.subtitle||"").trim(),bullets:Ne.map(ge=>String(ge||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean),callout:String(B.callout||"").trim(),slideType:String(B.slideType||"general").trim()}}function H(fe,B,Ne,ge=0){const Ue=Q(Ne),tt=g("deck"),Tt=ge===0||Ue.slideType==="intro",Ot=Ue.slideType==="summary",ut=Tt?"AI lesson opener":Ot?"AI summary slide":"AI learning slide",fn=Ue.subtitle?228:196,Rn=Math.min(190+Ue.bullets.length*14,238),pn=Tt?174:190,Wi=Tt?"linear-gradient(135deg, #eff6ff 0%, #e0f2fe 48%, #ecfeff 100%)":Ot?"linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%)":tt.gradient;n.updateSlide(fe,B,{title:Ue.title,notes:Ue.callout||"",order:ge,backgroundType:"gradient",backgroundGradient:Wi,background:tt.surface}),n.addElement(fe,B,"shape",{x:720,y:28,width:180,height:180,content:{shapeType:"circle",fillColor:tt.accentSoft,borderColor:"transparent",borderWidth:0,opacity:.9}}),n.addElement(fe,B,"shape",{x:760,y:74,width:94,height:94,content:{shapeType:"circle",fillColor:"#ffffff",borderColor:"transparent",borderWidth:0,opacity:.82}}),n.addElement(fe,B,"shape",{x:68,y:40,width:148,height:30,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:tt.accentSoft,borderWidth:1,borderRadius:999}}),n.addElement(fe,B,"text",{x:92,y:47,width:112,height:16,content:{text:ut,fontSize:12,fontWeight:600,textAlign:"left",color:tt.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,letterSpacing:.4,textTransform:"uppercase"}}),n.addElement(fe,B,"heading",{x:68,y:86,width:610,height:88,content:{text:Ue.title,fontSize:Tt?38:34,fontWeight:"bold",textAlign:"left",color:tt.text,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),Ue.subtitle&&n.addElement(fe,B,"text",{x:68,y:172,width:590,height:46,content:{text:Ue.subtitle,fontSize:19,textAlign:"left",color:tt.muted,fontFamily:"Inter, sans-serif",lineHeight:1.45}}),n.addElement(fe,B,"shape",{x:68,y:fn-26,width:574,height:Rn,content:{shapeType:"rectangle",fillColor:tt.panel,borderColor:"#dbeafe",borderWidth:1,borderRadius:22}}),Ue.bullets.length&&n.addElement(fe,B,"text",{x:96,y:fn,width:520,height:Math.max(Rn-40,120),content:{text:Ue.bullets.map(Hi=>`• ${Hi}`).join(`
`),fontSize:18,textAlign:"left",color:"#1e293b",fontFamily:"Inter, sans-serif",lineHeight:1.8}}),n.addElement(fe,B,"shape",{x:676,y:pn,width:216,height:Tt?240:222,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:tt.accentSoft,borderWidth:1,borderRadius:26}}),n.addElement(fe,B,"text",{x:704,y:pn+26,width:160,height:20,content:{text:Ot?"Wrap-up":"Key takeaway",fontSize:12,fontWeight:700,textAlign:"left",color:tt.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,letterSpacing:.5,textTransform:"uppercase"}}),n.addElement(fe,B,"text",{x:704,y:pn+62,width:162,height:120,content:{text:Ue.callout||`Use this slide to anchor discussion around ${C.value||"the topic"}.`,fontSize:18,fontWeight:600,textAlign:"left",color:tt.text,fontFamily:"Inter, sans-serif",lineHeight:1.55}}),n.addElement(fe,B,"shape",{x:704,y:pn+176,width:110,height:2,content:{shapeType:"rectangle",fillColor:tt.primary,borderColor:"transparent",borderWidth:0,borderRadius:8}}),n.addElement(fe,B,"text",{x:68,y:488,width:280,height:20,content:{text:`Generated from: ${C.value}`,fontSize:12,textAlign:"left",color:"#64748b",fontFamily:"Inter, sans-serif",lineHeight:1.3}})}function N(fe,B,Ne,ge=0,Ue=1){const tt=g("quiz"),Tt=String((Ne==null?void 0:Ne.question)||`Question ${ge+1}`).trim(),Ot=String((Ne==null?void 0:Ne.explanation)||"").trim(),ut=(Ne==null?void 0:Ne.type)==="true-false"?"True / False":"Multiple choice";n.updateSlide(fe,B,{title:`Question ${ge+1}`,notes:Ot,order:ge,backgroundType:"gradient",backgroundGradient:tt.gradient,background:tt.surface}),n.addElement(fe,B,"shape",{x:70,y:34,width:820,height:472,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#f3e8ff",borderWidth:1,borderRadius:28}}),n.addElement(fe,B,"shape",{x:70,y:34,width:820,height:76,content:{shapeType:"rectangle",fillColor:"#faf5ff",borderColor:"transparent",borderWidth:0,borderRadius:28}}),n.addElement(fe,B,"shape",{x:92,y:56,width:118,height:26,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#ddd6fe",borderWidth:1,borderRadius:999}}),n.addElement(fe,B,"text",{x:114,y:62,width:90,height:14,content:{text:`${ut}`,fontSize:11,fontWeight:700,textAlign:"left",color:tt.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,textTransform:"uppercase",letterSpacing:.5}}),n.addElement(fe,B,"text",{x:736,y:60,width:116,height:18,content:{text:`${ge+1} / ${Ue}`,fontSize:16,fontWeight:700,textAlign:"right",color:tt.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),n.addElement(fe,B,"heading",{x:92,y:124,width:708,height:56,content:{text:Tt,fontSize:29,fontWeight:"bold",textAlign:"left",color:tt.text,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),n.addElement(fe,B,"text",{x:92,y:198,width:360,height:20,content:{text:`Choose the best answer for ${C.value}.`,fontSize:14,fontWeight:500,textAlign:"left",color:tt.muted,fontFamily:"Inter, sans-serif",lineHeight:1.35}}),n.addElement(fe,B,"quiz",{x:92,y:238,width:776,height:188,content:{question:Tt,options:Array.isArray(Ne==null?void 0:Ne.options)?Ne.options:[],correctIndex:typeof(Ne==null?void 0:Ne.correctIndex)=="number"?Ne.correctIndex:0,explanation:Ot,cardBgColor:"#ffffff",questionColor:tt.text,accentColor:tt.primary}}),n.addElement(fe,B,"shape",{x:92,y:444,width:776,height:42,content:{shapeType:"rectangle",fillColor:"#fff7ed",borderColor:"#fde68a",borderWidth:1,borderRadius:14}}),n.addElement(fe,B,"text",{x:112,y:456,width:736,height:18,content:{text:Ot||"Add your facilitator explanation here after reviewing the AI-generated answer choices.",fontSize:14,textAlign:"left",color:"#92400e",fontFamily:"Inter, sans-serif",lineHeight:1.4}})}async function D(){if(!C.value.trim()){I.value="Add a topic so the AI has something concrete to generate.";return}J.value=!0,I.value="";try{const fe=T.value.trim()||$.value;if(F.value==="quiz"){const ge=await s.generateQuiz(C.value,O.value,{difficulty:b.value,questionType:S.value,objective:E.value});if(!Array.isArray(ge)||!ge.length)throw new Error(s.lastError||"No quiz content was generated.");const Ue=n.createProject(fe);n.updateProject(Ue.id,{description:E.value||`AI-generated quiz about ${C.value}`,tags:["ai","quiz"],theme:{...Ue.theme,primaryColor:"#5b21b6",secondaryColor:"#f59e0b",bgColor:"#fffaf0",textColor:"#111827"}}),ge.forEach((tt,Tt)=>{const Ot=Tt===0?Ue.slides[0]:n.addSlide(Ue.id);Ot&&N(Ue.id,Ot.id,tt,Tt,ge.length)}),L.value=!1,q(Ue.id);return}const B=await s.generateSlideDeck(C.value,P.value,{objective:E.value});if(!Array.isArray(B)||!B.length)throw new Error(s.lastError||"No slide content was generated.");const Ne=n.createProject(fe);n.updateProject(Ne.id,{description:E.value||`AI-generated slide deck about ${C.value}`,tags:["ai","slides"],theme:{...Ne.theme,primaryColor:"#2563eb",secondaryColor:"#14b8a6",bgColor:"#f8fbff",textColor:"#0f172a"}}),B.forEach((ge,Ue)=>{const tt=Ue===0?Ne.slides[0]:n.addSlide(Ne.id);tt&&H(Ne.id,tt.id,ge,Ue)}),L.value=!1,q(Ne.id)}catch(fe){console.error("AI project creation failed",fe),I.value=(fe==null?void 0:fe.message)||"The AI flow failed. Please try again."}finally{J.value=!1}}function j(fe){u.value=fe}function z(){u.value&&(n.deleteProject(u.value),u.value=null)}function A(fe){n.duplicateProject(fe)}function W(){p.value="";const fe=n.importProject(f.value);if(!fe){p.value="Invalid project JSON. Please check and try again.";return}a.value=!1,f.value="",q(fe.id)}function X(fe){return fe?new Date(fe).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}):""}function se(fe){var B;return((B=fe.slides)==null?void 0:B.length)||0}function le(fe){w.value=fe,M.value="",x.value="",R.value=""}async function _e(){if(!x.value||!R.value){M.value="Please enter both email and password.";return}V.value=!0,M.value="";try{w.value==="signin"?await i.loginWithEmail(x.value,R.value):await i.signUpWithEmail(x.value,R.value),l.value=!1}catch(fe){console.error("Email Auth Error:",fe),fe.code==="auth/email-already-in-use"?M.value="This email is already in use. Try signing in instead.":fe.code==="auth/wrong-password"||fe.code==="auth/user-not-found"||fe.code==="auth/invalid-credential"?M.value="Invalid email or password.":fe.code==="auth/weak-password"?M.value="Password should be at least 6 characters.":M.value="An error occurred. Please try again."}finally{V.value=!1}}const Ae=me(!1);async function ce(){Ae.value=!0;try{await i.resendVerification(),alert("Verification email sent! Please check your inbox.")}catch(fe){console.error(fe),alert("Failed to send verification email. Please wait a moment and try again.")}finally{Ae.value=!1}}async function We(){var fe;await i.reloadUser(),(fe=te.value)!=null&&fe.emailVerified?alert("Thank you! Your email has been verified."):alert("Email not verified yet. Please check your inbox or resend the email.")}async function it(fe){try{M.value="",fe.id==="google"?await i.loginWithGoogle():fe.id==="microsoft"&&await i.loginWithMicrosoft(),l.value=!1}catch(B){console.error("Login failed",B)}}function Qe(fe="signin"){w.value=fe,l.value=!0}async function mt(){await i.logout(),l.value=!1,w.value="signin"}function Be(fe){(fe==="community"||fe==="activity"||fe==="brand")&&(fe="home"),_.value=fe,fe==="content"&&!te.value&&Qe("signin"),!(typeof window>"u")&&requestAnimationFrame(()=>{var B,Ne,ge;if(fe==="templates"){(B=document.getElementById("templates-anchor"))==null||B.scrollIntoView({behavior:"smooth",block:"start"});return}if(fe==="content"){(Ne=document.getElementById("projects-anchor"))==null||Ne.scrollIntoView({behavior:"smooth",block:"start"});return}(ge=document.getElementById("home-anchor"))==null||ge.scrollIntoView({behavior:"smooth",block:"start"})})}return(fe,B)=>{var Ne;return G(),Y("div",hR,[d("aside",fR,[B[50]||(B[50]=d("div",{class:"rail-logo"},"MS",-1)),d("nav",pR,[d("button",{class:je(["rail-item",_.value==="home"&&"active"]),type:"button",onClick:B[0]||(B[0]=ge=>Be("home")),"data-tooltip":"Go to home","data-tooltip-position":"right"},[...B[44]||(B[44]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),d("polyline",{points:"9 22 9 12 15 12 15 22"})],-1),De(" Home ",-1)])],2),d("button",{class:je(["rail-item",_.value==="content"&&"active"]),type:"button",onClick:B[1]||(B[1]=ge=>Be("content")),"data-tooltip":"View your content","data-tooltip-position":"right"},[...B[45]||(B[45]=[cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b44050be><rect width="18" height="18" x="3" y="3" rx="2" ry="2" data-v-b44050be></rect><path d="M7 7h10" data-v-b44050be></path><path d="M7 12h10" data-v-b44050be></path><path d="M7 17h10" data-v-b44050be></path></svg> Content ',2)])],2),d("button",{class:je(["rail-item",_.value==="templates"&&"active"]),type:"button",onClick:B[2]||(B[2]=ge=>Be("templates")),"data-tooltip":"Browse templates","data-tooltip-position":"right"},[...B[46]||(B[46]=[cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b44050be><rect width="7" height="9" x="3" y="3" rx="1" data-v-b44050be></rect><rect width="7" height="5" x="14" y="3" rx="1" data-v-b44050be></rect><rect width="7" height="9" x="14" y="12" rx="1" data-v-b44050be></rect><rect width="7" height="5" x="3" y="16" rx="1" data-v-b44050be></rect></svg> Templates ',2)])],2),d("button",{class:"rail-item",type:"button",onClick:B[3]||(B[3]=ge=>Be("community")),"data-tooltip":"Community coming soon","data-tooltip-position":"right"},[...B[47]||(B[47]=[cn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b44050be><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-v-b44050be></path><circle cx="9" cy="7" r="4" data-v-b44050be></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-v-b44050be></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-v-b44050be></path></svg> Community ',2)])]),d("button",{class:"rail-item",type:"button",onClick:B[4]||(B[4]=ge=>Be("activity")),"data-tooltip":"Activity coming soon","data-tooltip-position":"right"},[...B[48]||(B[48]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})],-1),De(" Activity ",-1)])]),d("button",{class:"rail-item",type:"button",onClick:B[5]||(B[5]=ge=>Be("brand")),"data-tooltip":"Brand kit coming soon","data-tooltip-position":"right"},[...B[49]||(B[49]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"M12 2v20"}),d("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})],-1),De(" Brand kit ",-1)])])])]),d("main",mR,[te.value&&!te.value.emailVerified?(G(),Y("div",gR,[d("span",null,[B[51]||(B[51]=De("Please verify your email address (",-1)),d("strong",null,ve(te.value.email),1),B[52]||(B[52]=De(") to secure your account and unlock all features.",-1))]),d("div",vR,[d("button",{class:"btn btn-primary btn-sm",onClick:We},"I've verified my email"),d("button",{class:"btn btn-secondary btn-sm",onClick:ce,disabled:Ae.value},ve(Ae.value?"Sending...":"Resend Email"),9,yR)])])):Pe("",!0),_.value==="templates"?(G(),Y(Me,{key:1},[d("section",_R,[d("div",bR,[te.value?(G(),Y("div",wR,[d("span",ER,ve(te.value.authTypeLabel),1),d("button",{class:"btn btn-ghost-text",type:"button",onClick:mt},"Sign out")])):(G(),Y("div",IR,[d("button",{class:"btn btn-ghost-text",type:"button",onClick:B[6]||(B[6]=ge=>Qe("signin"))},"Log In"),d("button",{class:"btn btn-ghost-text",type:"button",onClick:B[7]||(B[7]=ge=>Qe("signup"))},"Sign Up")])),d("div",{class:"hero-actions"},[B[53]||(B[53]=d("button",{class:"btn g-premium-btn"},[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),De(" Upgrade to Premium ")],-1)),d("button",{class:"btn g-outline-btn",onClick:he,"data-tooltip":"Import a project"},"Import")])]),B[55]||(B[55]=d("h1",{class:"hero-title-g"},"Choose how to create",-1)),d("div",TR,[Ye(d("input",{"onUpdate:modelValue":B[8]||(B[8]=ge=>m.value=ge),class:"search-input-g",placeholder:"Describe what you're looking for"},null,512),[[pt,m.value]]),B[54]||(B[54]=d("button",{class:"search-btn-g",type:"button","aria-label":"Search"},[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("path",{d:"m21 21-4.35-4.35"})])],-1))])]),d("section",CR,[d("div",xR,[d("button",{class:je(["chip-g",v.value==="all"&&"active"]),onClick:B[9]||(B[9]=ge=>v.value="all"),type:"button"},"All",2),(G(),Y(Me,null,st(ee,ge=>d("button",{key:ge.value,class:je(["chip-g",v.value===ge.value&&"active"]),onClick:Ue=>v.value=ge.value,type:"button"},ve(ge.label),11,kR)),64))]),d("button",{class:"btn g-outline-btn ai-btn-g",type:"button",onClick:B[10]||(B[10]=ge=>Te("quiz"))},[...B[56]||(B[56]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})],-1),De(" Create quiz with AI ",-1)])])]),(G(!0),Y(Me,null,st(Z.value,ge=>(G(),Y("section",{key:ge.title,class:"template-section"},[d("h2",SR,ve(ge.title),1),d("div",AR,[(G(!0),Y(Me,null,st(ge.cards,Ue=>(G(),Y("article",{key:Ue.id,class:je(["market-card",Ue.style]),onClick:tt=>K(Ue)},[B[57]||(B[57]=cn('<div class="hover-overlay" data-v-b44050be></div><div class="action-icon" data-v-b44050be><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-b44050be><line x1="12" y1="5" x2="12" y2="19" data-v-b44050be></line><line x1="5" y1="12" x2="19" y2="12" data-v-b44050be></line></svg></div>',2)),d("span",PR,ve(Ue.subtitle),1),d("h3",NR,ve(Ue.title),1)],10,RR))),128))])]))),128))],64)):Pe("",!0),_.value==="home"||_.value==="content"?(G(),Y(Me,{key:2},[d("header",OR,[d("div",DR,[B[58]||(B[58]=d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("path",{d:"m21 21-4.35-4.35"})],-1)),Ye(d("input",{"onUpdate:modelValue":B[11]||(B[11]=ge=>m.value=ge),placeholder:"Search templates and creations"},null,512),[[pt,m.value]])]),d("div",MR,[B[59]||(B[59]=d("button",{class:"btn btn-secondary btn-sm",style:{color:"#d97706","border-color":"rgba(217,119,6,0.3)",background:"#fffbeb"}},[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),De(" Upgrade to Premium ")],-1)),te.value?(G(),Y("div",VR,[d("span",LR,ve(te.value.authTypeLabel),1),d("div",{class:"user-actions-mini"},[d("button",{class:"btn btn-secondary btn-sm",type:"button",onClick:mt},"Log out"),d("button",{class:"btn btn-primary btn-sm",onClick:oe},"Create course")])])):(G(),Y("div",$R,[d("button",{class:"btn btn-secondary btn-sm",onClick:B[12]||(B[12]=ge=>Qe("signin"))},"Sign In")]))])]),_.value==="home"?(G(),Y("div",FR,[d("section",UR,[B[64]||(B[64]=d("div",{class:"home-hero-pattern"},null,-1)),B[65]||(B[65]=d("div",{class:"home-hero-glow home-hero-glow-left"},null,-1)),B[66]||(B[66]=d("div",{class:"home-hero-glow home-hero-glow-right"},null,-1)),d("div",zR,[B[61]||(B[61]=d("span",{class:"home-hero-kicker"},"Featured challenge",-1)),B[62]||(B[62]=d("h1",{class:"home-hero-title"},"Build interactions that feel alive.",-1)),B[63]||(B[63]=d("p",{class:"home-hero-text"}," Design drag-and-drop lessons, branching slides, and quick knowledge checks with a workspace that feels built for fast iteration. ",-1)),d("div",BR,[d("button",{class:"btn btn-primary btn-lg",onClick:oe,"data-tooltip":"Create a new project from scratch"},"Start a new course"),d("button",{class:"btn home-hero-secondary",onClick:B[13]||(B[13]=ge=>Be("templates")),"data-tooltip":"Open the templates library"},"Browse templates")]),d("div",jR,[d("div",qR,[d("strong",null,ve(Ie.value.length||0),1),B[60]||(B[60]=d("span",null,"projects in motion",-1))]),d("div",WR,[d("strong",null,ve(te.value?"Ready":"Guest"),1),d("span",null,ve(te.value?"workspace synced":"sign in to sync"),1)])])]),B[67]||(B[67]=cn('<div class="home-hero-visual" aria-hidden="true" data-v-b44050be><div class="hero-preview-card hero-preview-main" data-v-b44050be><span class="preview-badge" data-v-b44050be>Drag and drop</span><div class="preview-line preview-line-lg" data-v-b44050be></div><div class="preview-line preview-line-md" data-v-b44050be></div><div class="preview-dropzones" data-v-b44050be><span data-v-b44050be></span><span data-v-b44050be></span><span data-v-b44050be></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-quiz" data-v-b44050be><span class="preview-dot" data-v-b44050be></span><div class="preview-line preview-line-sm" data-v-b44050be></div><div class="preview-pill-row" data-v-b44050be><span data-v-b44050be></span><span data-v-b44050be></span><span data-v-b44050be></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-media" data-v-b44050be><div class="preview-media" data-v-b44050be></div><div class="preview-line preview-line-sm" data-v-b44050be></div></div></div>',1))]),d("div",HR,[d("h2",GR," Hi, "+ve(((Ne=te.value)==null?void 0:Ne.authTypeLabel.split(" ")[0])||"Creator")+" 👋 What are you going to create today? ",1),d("div",KR,[d("button",{class:"quick-btn",onClick:oe,"data-tooltip":"Start with a blank project"},[...B[68]||(B[68]=[d("span",{class:"q-icon",style:{color:"var(--color-primary)"}},"+",-1),De(" Create scratch project",-1)])]),d("button",{class:"quick-btn quick-btn-ai",onClick:B[14]||(B[14]=ge=>Te("quiz")),"data-tooltip":"Generate a project with AI"},[...B[69]||(B[69]=[d("span",{class:"q-icon",style:{color:"#7c3aed"}},"✦",-1),De(" Create with AI",-1)])]),d("button",{class:"quick-btn",onClick:B[15]||(B[15]=ge=>Be("templates")),"data-tooltip":"Use a game template"},[...B[70]||(B[70]=[d("span",{class:"q-icon",style:{color:"var(--color-secondary)"}},"🎮",-1),De(" Create a game",-1)])]),d("button",{class:"quick-btn",onClick:B[16]||(B[16]=ge=>Be("templates")),"data-tooltip":"Use a presentation template"},[...B[71]||(B[71]=[d("span",{class:"q-icon",style:{color:"var(--color-success)"}},"📱",-1),De(" Create a presentation",-1)])])])]),d("section",QR,[d("div",JR,[B[72]||(B[72]=d("h2",{class:"section-title"},"Pick up where you left off",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:B[17]||(B[17]=ge=>Be("content"))},"Go to My Content ›")]),te.value&&Ie.value.length?(G(),Y("div",YR,[(G(!0),Y(Me,null,st(Ie.value.slice(0,4),ge=>(G(),Y("article",{key:ge.id,class:"project-card",onClick:Ue=>q(ge.id),"data-tooltip":`Open ${ge.name}`},[d("div",ZR,ve(ge.name),1),d("p",eP,ve(se(ge))+" slides · "+ve(X(ge.updatedAt)),1),d("div",{class:"project-actions",onClick:B[18]||(B[18]=Wt(()=>{},["stop"]))},[d("button",{class:"btn btn-ghost btn-sm",onClick:Ue=>A(ge.id)},"Duplicate",8,tP)])],8,XR))),128))])):te.value?(G(),Y("div",rP,[...B[74]||(B[74]=[d("p",null,"You haven't created any projects yet. Start by creating a project from scratch or a template.",-1)])])):(G(),Y("div",nP,[...B[73]||(B[73]=[d("p",null,"Sign in to see your recent projects.",-1)])]))])])):Pe("",!0),_.value==="content"?(G(),Y("div",iP,[B[76]||(B[76]=d("div",{class:"content-header-row"},[d("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[d("div",{class:"content-icon"},"💿"),d("h1",{style:{"font-size":"28px","font-weight":"700"}},"My content")])],-1)),d("div",sP,[te.value?(G(),Y("div",oP,[d("article",{class:"project-card create-new-card",onClick:oe,"data-tooltip":"Create a project"},[...B[75]||(B[75]=[d("div",{class:"create-circle"},"+",-1),d("div",{class:"create-text"},"Create new project",-1)])]),(G(!0),Y(Me,null,st(Ie.value,ge=>(G(),Y("article",{key:ge.id,class:"project-card",onClick:Ue=>q(ge.id),"data-tooltip":`Open ${ge.name}`},[d("div",lP,ve(ge.name),1),d("p",cP,ve(se(ge))+" slides · "+ve(X(ge.updatedAt)),1),d("div",{class:"project-actions",onClick:B[19]||(B[19]=Wt(()=>{},["stop"]))},[d("button",{class:"btn btn-ghost btn-sm",onClick:Ue=>A(ge.id)},"Duplicate",8,uP),d("button",{class:"btn btn-ghost btn-sm",onClick:Ue=>j(ge.id),style:{color:"var(--color-danger)"}},"Delete",8,dP)])],8,aP))),128))])):Pe("",!0)])])):Pe("",!0)],64)):Pe("",!0)]),l.value?(G(),St(is,{key:0,title:w.value==="signin"?"Sign In":"Sign Up",size:"md",onClose:B[24]||(B[24]=ge=>l.value=!1)},{default:kt(()=>[d("div",hP,[B[79]||(B[79]=d("p",{class:"auth-eyebrow"},"Access your workspace",-1)),d("h2",fP,ve(Ee.value),1),d("p",pP,ve(re.value),1),d("div",mP,[d("button",{class:je(["auth-mode-btn",w.value==="signin"&&"active"]),type:"button",onClick:B[20]||(B[20]=ge=>le("signin"))}," Sign In ",2),d("button",{class:je(["auth-mode-btn",w.value==="signup"&&"active"]),type:"button",onClick:B[21]||(B[21]=ge=>le("signup"))}," Sign Up ",2)]),d("form",{onSubmit:Wt(_e,["prevent"]),class:"auth-email-form"},[d("div",gP,[B[77]||(B[77]=d("label",{class:"form-label"},"Email",-1)),Ye(d("input",{type:"email","onUpdate:modelValue":B[22]||(B[22]=ge=>x.value=ge),class:"input",placeholder:"you@example.com",required:""},null,512),[[pt,x.value]])]),d("div",vP,[B[78]||(B[78]=d("label",{class:"form-label"},"Password",-1)),Ye(d("input",{type:"password","onUpdate:modelValue":B[23]||(B[23]=ge=>R.value=ge),class:"input",placeholder:"••••••••",required:"",minlength:"6"},null,512),[[pt,R.value]])]),M.value?(G(),Y("div",yP,ve(M.value),1)):Pe("",!0),d("button",{type:"submit",class:"btn btn-primary",style:{width:"100%","justify-content":"center",height:"42px"},disabled:V.value},ve(V.value?"Loading...":w.value==="signin"?"Sign In with Email":"Sign Up with Email"),9,_P)],32),B[80]||(B[80]=d("div",{class:"auth-divider"},[d("span",null,"or continue with")],-1)),d("div",bP,[(G(),Y(Me,null,st(ie,ge=>d("button",{key:ge.id,class:"auth-provider-btn",type:"button",onClick:Ue=>it(ge)},[d("span",EP,ve(ge.label),1),d("span",IP,ve(ge.description),1)],8,wP)),64))])])]),_:1},8,["title"])):Pe("",!0),o.value?(G(),St(is,{key:1,title:"New Project",size:"sm",onClose:B[27]||(B[27]=ge=>o.value=!1)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:B[26]||(B[26]=ge=>o.value=!1)},"Cancel"),d("button",{class:"btn btn-primary",onClick:Re},"Create Project")]),default:kt(()=>[d("div",TP,[B[81]||(B[81]=d("label",{class:"form-label"},"Project Name",-1)),Ye(d("input",{id:"project-name-input","onUpdate:modelValue":B[25]||(B[25]=ge=>h.value=ge),class:"input",placeholder:"e.g. Quiz Assessment",onKeydown:xu(Re,["enter"])},null,544),[[pt,h.value]])])]),_:1})):Pe("",!0),a.value?(G(),St(is,{key:2,title:"Import Project",size:"md",onClose:B[30]||(B[30]=ge=>a.value=!1)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:B[29]||(B[29]=ge=>a.value=!1)},"Cancel"),d("button",{class:"btn btn-primary",onClick:W},"Import")]),default:kt(()=>[d("div",CP,[B[82]||(B[82]=d("label",{class:"form-label"},"Paste Project JSON",-1)),Ye(d("textarea",{"onUpdate:modelValue":B[28]||(B[28]=ge=>f.value=ge),class:"textarea",style:{"min-height":"160px"},placeholder:'{"name":"My Project",...}'},null,512),[[pt,f.value]])]),p.value?(G(),Y("p",xP,ve(p.value),1)):Pe("",!0)]),_:1})):Pe("",!0),L.value?(G(),St(is,{key:3,title:"Create with AI",size:"lg",onClose:B[41]||(B[41]=ge=>L.value=!1)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:B[40]||(B[40]=ge=>L.value=!1)},"Cancel"),d("button",{class:"btn btn-primary",disabled:J.value||xe(s).isGenerating,onClick:D},ve(de.value),9,UP)]),default:kt(()=>[d("div",kP,[d("div",SP,[d("button",{class:je(["ai-mode-card",F.value==="quiz"&&"active"]),type:"button",onClick:B[31]||(B[31]=ge=>F.value="quiz")},[...B[83]||(B[83]=[d("strong",null,"Quiz project",-1),d("span",null,"Generate question slides learners can answer right away.",-1)])],2),d("button",{class:je(["ai-mode-card",F.value==="deck"&&"active"]),type:"button",onClick:B[32]||(B[32]=ge=>F.value="deck")},[...B[84]||(B[84]=[d("strong",null,"Slide deck",-1),d("span",null,"Create a structured lesson deck from a topic and learning goal.",-1)])],2)]),d("div",AP,[B[85]||(B[85]=d("label",{class:"form-label"},"Topic",-1)),Ye(d("input",{id:"ai-topic-input","onUpdate:modelValue":B[33]||(B[33]=ge=>C.value=ge),class:"input",placeholder:"e.g. Cybersecurity basics for new employees"},null,512),[[pt,C.value]])]),d("div",RP,[B[86]||(B[86]=d("label",{class:"form-label"},"Project name",-1)),Ye(d("input",{"onUpdate:modelValue":B[34]||(B[34]=ge=>T.value=ge),class:"input",placeholder:$.value},null,8,PP),[[pt,T.value]])]),d("div",NP,[B[87]||(B[87]=d("label",{class:"form-label"},"Goal or context",-1)),Ye(d("textarea",{"onUpdate:modelValue":B[35]||(B[35]=ge=>E.value=ge),class:"textarea ai-create-textarea",placeholder:"Explain the audience, learning objective, tone, or any constraints you want the AI to follow."},null,512),[[pt,E.value]])]),d("div",OP,[F.value==="deck"?(G(),Y("div",DP,[B[89]||(B[89]=d("label",{class:"form-label"},"Slides",-1)),Ye(d("select",{"onUpdate:modelValue":B[36]||(B[36]=ge=>P.value=ge),class:"ai-select"},[...B[88]||(B[88]=[d("option",{value:3},"3",-1),d("option",{value:5},"5",-1),d("option",{value:7},"7",-1),d("option",{value:10},"10",-1)])],512),[[Gr,P.value]])])):(G(),Y(Me,{key:1},[d("div",MP,[B[91]||(B[91]=d("label",{class:"form-label"},"Questions",-1)),Ye(d("select",{"onUpdate:modelValue":B[37]||(B[37]=ge=>O.value=ge),class:"ai-select"},[...B[90]||(B[90]=[d("option",{value:3},"3",-1),d("option",{value:5},"5",-1),d("option",{value:8},"8",-1),d("option",{value:10},"10",-1)])],512),[[Gr,O.value]])]),d("div",VP,[B[93]||(B[93]=d("label",{class:"form-label"},"Difficulty",-1)),Ye(d("select",{"onUpdate:modelValue":B[38]||(B[38]=ge=>b.value=ge),class:"ai-select"},[...B[92]||(B[92]=[d("option",{value:"beginner"},"Beginner",-1),d("option",{value:"intermediate"},"Intermediate",-1),d("option",{value:"advanced"},"Advanced",-1)])],512),[[Gr,b.value]])]),d("div",LP,[B[95]||(B[95]=d("label",{class:"form-label"},"Question type",-1)),Ye(d("select",{"onUpdate:modelValue":B[39]||(B[39]=ge=>S.value=ge),class:"ai-select"},[...B[94]||(B[94]=[d("option",{value:"multiple-choice"},"Multiple choice",-1),d("option",{value:"true-false"},"True / False",-1),d("option",{value:"mixed"},"Mixed",-1)])],512),[[Gr,S.value]])])],64))]),d("p",$P,ve(xe(s).apiKey?"Using your configured AI provider.":"No API key configured yet. The built-in sample generator will still create starter content."),1),I.value?(G(),Y("p",FP,ve(I.value),1)):Pe("",!0)])]),_:1})):Pe("",!0),u.value?(G(),St(is,{key:4,title:"Delete Project",size:"sm",onClose:B[43]||(B[43]=ge=>u.value=null)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:B[42]||(B[42]=ge=>u.value=null)},"Cancel"),d("button",{class:"btn btn-danger",onClick:z},"Delete")]),default:kt(()=>[B[96]||(B[96]=d("p",{class:"delete-text"},"Are you sure you want to delete this project? This action cannot be undone.",-1))]),_:1})):Pe("",!0)])}}},BP=Bt(zP,[["__scopeId","data-v-b44050be"]]);function jP(t){function e(n){var a,l,h,f,p,m,v,_,u,w,x,R,M,V,L,F,C;const r=n.ctrlKey||n.metaKey,i=n.key.toLowerCase(),s=n.target.tagName.toLowerCase(),o=s==="input"||s==="textarea"||n.target.isContentEditable;o&&r&&["c","v","x","a","z","y"].includes(i)||(r&&i==="z"&&!n.shiftKey?(n.preventDefault(),(a=t.undo)==null||a.call(t)):r&&(i==="y"||i==="z"&&n.shiftKey)?(n.preventDefault(),(l=t.redo)==null||l.call(t)):r&&i==="c"?(n.preventDefault(),(h=t.copy)==null||h.call(t)):r&&i==="v"?(n.preventDefault(),(f=t.paste)==null||f.call(t)):r&&i==="x"?(n.preventDefault(),(p=t.cut)==null||p.call(t)):r&&i==="d"?(n.preventDefault(),(m=t.duplicate)==null||m.call(t)):r&&i==="a"?(n.preventDefault(),(v=t.selectAll)==null||v.call(t)):i==="delete"||i==="backspace"?o||(n.preventDefault(),(_=t.delete)==null||_.call(t)):i==="escape"?(u=t.escape)==null||u.call(t):r&&i==="g"?(n.preventDefault(),(w=t.toggleGrid)==null||w.call(t)):r&&i==="="||r&&i==="+"?(n.preventDefault(),(x=t.zoomIn)==null||x.call(t)):r&&i==="-"?(n.preventDefault(),(R=t.zoomOut)==null||R.call(t)):r&&i==="0"?(n.preventDefault(),(M=t.zoomReset)==null||M.call(t)):i==="arrowleft"?(V=t.nudge)==null||V.call(t,-1,0):i==="arrowright"?(L=t.nudge)==null||L.call(t,1,0):i==="arrowup"?(F=t.nudge)==null||F.call(t,0,-1):i==="arrowdown"&&((C=t.nudge)==null||C.call(t,0,1)))}Go(()=>window.addEventListener("keydown",e)),Ko(()=>window.removeEventListener("keydown",e))}const qP={class:"slide-panel"},WP={class:"slide-panel-header"},HP={class:"slide-count"},GP={class:"slides-list"},KP=["onClick","onContextmenu","onDragstart","onDrop"],QP={class:"slide-number"},JP={class:"slide-footer"},YP={class:"slide-title"},XP=["onClick"],ZP={__name:"SlidePanel",setup(t){const e=An(),n=In(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var V,L;return((L=(V=r.value)==null?void 0:V.slides)==null?void 0:L.slice().sort((F,C)=>F.order-C.order))||[]}),s=me({show:!1,x:0,y:0,slideId:null});function o(V){e.setCurrentSlide(V)}function a(){const V=i.value.findIndex(F=>F.id===e.currentSlideId),L=n.addSlide(e.projectId,V);L&&e.setCurrentSlide(L.id)}function l(V){var C,E;const L=i.value.findIndex(T=>T.id===V);n.deleteSlide(e.projectId,V);const F=((C=r.value)==null?void 0:C.slides)||[];if(F.length>0){const T=F.slice().sort((O,b)=>O.order-b.order),P=Math.min(L,T.length-1);e.setCurrentSlide((E=T[P])==null?void 0:E.id)}}function h(V,L){V.preventDefault(),s.value={show:!0,x:V.clientX,y:V.clientY,slideId:L},setTimeout(()=>window.addEventListener("click",f,{once:!0}),0)}function f(){s.value.show=!1}function p(){const V=n.duplicateSlide(e.projectId,s.value.slideId);V&&e.setCurrentSlide(V.id),f()}function m(){l(s.value.slideId),f()}function v(V,L){V.stopPropagation(),l(L)}function _(){const V=i.value.findIndex(L=>L.id===s.value.slideId);V>0&&n.reorderSlides(e.projectId,V,V-1),f()}function u(){const V=i.value.findIndex(L=>L.id===s.value.slideId);V<i.value.length-1&&n.reorderSlides(e.projectId,V,V+1),f()}let w=-1;function x(V,L){w=L,V.dataTransfer.effectAllowed="move"}function R(V,L){V.preventDefault(),w!==-1&&w!==L&&n.reorderSlides(e.projectId,w,L),w=-1}function M(V){return V.backgroundType==="gradient"&&V.backgroundGradient?{background:V.backgroundGradient}:V.backgroundType==="image"&&V.backgroundImage?{backgroundImage:`url(${V.backgroundImage})`,backgroundSize:"cover"}:{background:V.background||"#fff"}}return(V,L)=>(G(),Y("div",qP,[d("div",WP,[L[2]||(L[2]=d("span",{class:"panel-section-title"},"Slides",-1)),d("span",HP,ve(i.value.length),1),d("button",{class:"btn btn-icon add-slide-btn",onClick:a,"data-tooltip":"Add slide","aria-label":"Add slide"},[...L[1]||(L[1]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),d("div",GP,[(G(!0),Y(Me,null,st(i.value,(F,C)=>(G(),Y("div",{key:F.id,class:je(["slide-thumb-item",xe(e).currentSlideId===F.id&&"active"]),draggable:"true",onClick:E=>o(F.id),onContextmenu:E=>h(E,F.id),onDragstart:E=>x(E,C),onDragover:L[0]||(L[0]=Wt(()=>{},["prevent"])),onDrop:E=>R(E,C)},[d("div",QP,ve(C+1),1),d("div",{class:"slide-thumb",style:He(M(F))},[(G(!0),Y(Me,null,st(F.elements.slice(0,6),E=>{var T,P;return G(),Y("div",{key:E.id,class:"mini-element",style:He({left:E.x/960*100+"%",top:E.y/540*100+"%",width:E.width/960*100+"%",height:E.height/540*100+"%",background:E.type==="shape"?(T=E.content)==null?void 0:T.fillColor:E.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:E.type==="shape"&&((P=E.content)==null?void 0:P.shapeType)==="circle"?"50%":void 0})},null,4)}),128))],4),d("div",JP,[d("div",YP,ve(F.title||`Slide ${C+1}`),1),i.value.length>1?(G(),Y("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:E=>v(E,F.id)},[...L[3]||(L[3]=[cn('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1b392fd3><polyline points="3 6 5 6 21 6" data-v-1b392fd3></polyline><path d="M19 6l-1 14H6L5 6" data-v-1b392fd3></path><path d="M10 11v6M14 11v6" data-v-1b392fd3></path><path d="M9 6V4h6v2" data-v-1b392fd3></path></svg>',1)])],8,XP)):Pe("",!0)])],42,KP))),128))]),d("button",{class:"add-slide-bottom",onClick:a},[...L[4]||(L[4]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),De(" Add Slide ",-1)])]),(G(),St(yd,{to:"body"},[s.value.show?(G(),Y("div",{key:0,class:"context-menu",style:He({left:s.value.x+"px",top:s.value.y+"px"})},[d("button",{class:"ctx-item",onClick:p},"Duplicate"),d("button",{class:"ctx-item",onClick:_},"Move Up"),d("button",{class:"ctx-item",onClick:u},"Move Down"),L[5]||(L[5]=d("div",{class:"ctx-divider"},null,-1)),d("button",{class:"ctx-item danger",onClick:m},"Delete Slide")],4)):Pe("",!0)]))]))}},e5=Bt(ZP,[["__scopeId","data-v-1b392fd3"]]),t5={class:"layer-panel"},n5={class:"layer-header panel-section"},r5={class:"panel-title",style:{"margin-bottom":"0"}},i5={class:"layer-count"},s5={key:0,class:"layers-empty"},o5={key:1,class:"layers-list"},a5=["onClick"],l5={class:"layer-type-icon"},c5={class:"layer-name"},u5={class:"layer-actions"},d5=["onClick","data-tooltip"],h5={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},f5={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},p5=["onClick","data-tooltip"],m5={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},g5={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},v5=["onClick"],y5=["onClick"],_5=["onClick"],b5={__name:"LayerPanel",setup(t){const e=An(),n=In(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var _,u;return(u=(_=r.value)==null?void 0:_.slides)==null?void 0:u.find(w=>w.id===e.currentSlideId)}),s=Se(()=>{var _;return[...((_=i.value)==null?void 0:_.elements)||[]].sort((u,w)=>(w.zIndex||0)-(u.zIndex||0))});function o(_){e.selectElement(_)}function a(_){n.updateElement(e.projectId,e.currentSlideId,_.id,{visible:!_.visible})}function l(_){n.updateElement(e.projectId,e.currentSlideId,_.id,{locked:!_.locked})}function h(_){n.reorderElement(e.projectId,e.currentSlideId,_,"up")}function f(_){n.reorderElement(e.projectId,e.currentSlideId,_,"down")}function p(_){n.deleteElement(e.projectId,e.currentSlideId,_),e.selectedElementId===_&&e.clearSelection()}function m(_){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[_]||"◆"}function v(_){var u,w,x;return(u=_.content)!=null&&u.text?_.content.text.slice(0,24):(w=_.content)!=null&&w.label?_.content.label:(x=_.content)!=null&&x.question?_.content.question.slice(0,24):_.type.charAt(0).toUpperCase()+_.type.slice(1)}return(_,u)=>(G(),Y("div",t5,[d("div",n5,[d("div",r5,[u[0]||(u[0]=De(" Layers ",-1)),d("span",i5,ve(s.value.length),1)])]),s.value.length===0?(G(),Y("div",s5,[...u[1]||(u[1]=[d("p",null,"No elements on this slide.",-1),d("p",null,"Add elements using the toolbar above.",-1)])])):(G(),Y("div",o5,[(G(!0),Y(Me,null,st(s.value,w=>(G(),Y("div",{key:w.id,class:je(["layer-item",xe(e).selectedElementIds.includes(w.id)&&"selected",w.locked&&"locked",!w.visible&&"hidden"]),onClick:x=>o(w.id)},[d("span",l5,ve(m(w.type)),1),d("span",c5,ve(v(w)),1),d("div",u5,[d("button",{class:je(["layer-action-btn",{active:w.visible}]),onClick:Wt(x=>a(w),["stop"]),"data-tooltip":w.visible?"Hide":"Show"},[w.visible?(G(),Y("svg",h5,[...u[2]||(u[2]=[d("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),d("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(G(),Y("svg",f5,[...u[3]||(u[3]=[d("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),d("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),d("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,d5),d("button",{class:je(["layer-action-btn",{active:w.locked}]),onClick:Wt(x=>l(w),["stop"]),"data-tooltip":w.locked?"Unlock":"Lock"},[w.locked?(G(),Y("svg",m5,[...u[4]||(u[4]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(G(),Y("svg",g5,[...u[5]||(u[5]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,p5),d("button",{class:"layer-action-btn",onClick:Wt(x=>h(w.id),["stop"]),"data-tooltip":"Move up"},[...u[6]||(u[6]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,v5),d("button",{class:"layer-action-btn",onClick:Wt(x=>f(w.id),["stop"]),"data-tooltip":"Move down"},[...u[7]||(u[7]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,y5),d("button",{class:"layer-action-btn danger",onClick:Wt(x=>p(w.id),["stop"]),"data-tooltip":"Delete"},[...u[8]||(u[8]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,_5)])],10,a5))),128))]))]))}},w5=Bt(b5,[["__scopeId","data-v-7407acd8"]]),E5={class:"properties-panel"},I5={class:"panel-section"},T5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},C5={class:"form-group"},x5={class:"bg-type-tabs"},k5=["onClick"],S5={key:0,class:"color-row"},A5=["value"],R5=["value"],P5={class:"panel-section"},N5={class:"panel-section"},O5=["value"],D5={class:"panel-section"},M5={class:"panel-title"},V5={class:"element-type-badge"},L5={class:"geo-grid"},$5={class:"form-group"},F5=["value"],U5={class:"form-group"},z5=["value"],B5={class:"form-group"},j5=["value"],q5={class:"form-group"},W5=["value"],H5={class:"form-group"},G5=["value"],K5={class:"form-group"},Q5=["value"],J5={key:0,class:"panel-section"},Y5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},X5=["value"],Z5={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},e6={class:"form-group"},t6=["value"],n6={class:"form-group"},r6=["value"],i6={class:"form-group",style:{"margin-top":"var(--space-3)"}},s6=["value"],o6=["value"],a6={class:"form-group",style:{"margin-top":"var(--space-3)"}},l6={class:"align-btns"},c6=["onClick"],u6={class:"form-group",style:{"margin-top":"var(--space-3)"}},d6={class:"style-btns"},h6={class:"form-group",style:{"margin-top":"var(--space-3)"}},f6={class:"color-row"},p6=["value"],m6=["value"],g6={class:"form-group",style:{"margin-top":"var(--space-3)"}},v6=["value"],y6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_6={class:"form-group"},b6=["value"],w6={class:"form-group"},E6=["value"],I6={key:1,class:"panel-section"},T6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},C6=["value"],x6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},k6=["value"],S6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},A6=["value"],R6={class:"form-group"},P6=["value"],N6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},O6={class:"form-group"},D6=["value"],M6={class:"form-group"},V6=["value"],L6={key:2,class:"panel-section"},$6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},F6=["value"],U6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},z6={class:"color-row"},B6=["value"],j6=["value"],q6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},W6={class:"color-row"},H6=["value"],G6=["value"],K6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Q6=["value"],J6={class:"form-group"},Y6=["value"],X6={class:"form-group",style:{"margin-top":"var(--space-3)"}},Z6=["value"],e3={key:3,class:"panel-section"},t3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},n3=["value"],r3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},i3=["value"],s3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},o3=["value"],a3={key:0,class:"form-group"},l3=["value"],c3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},u3={class:"form-group"},d3=["value"],h3={class:"form-group"},f3=["value"],p3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},m3={class:"form-group"},g3=["value"],v3={class:"form-group"},y3=["value"],_3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},b3={class:"form-group"},w3=["value"],E3={class:"form-group"},I3=["value"],T3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},C3={class:"form-group"},x3=["value"],k3=["value"],S3={class:"form-group"},A3=["value"],R3={key:4,class:"panel-section"},P3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},N3=["value"],O3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},D3={class:"color-row"},M3=["value"],V3=["value"],L3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},$3={class:"form-group"},F3=["value"],U3={class:"form-group"},z3=["value"],B3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},j3=["value"],q3={class:"form-group"},W3=["value"],H3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},G3={class:"form-group"},K3=["value"],Q3={class:"form-group"},J3=["value"],Y3={key:5,class:"panel-section"},X3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Z3=["value"],eN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},tN=["value"],nN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rN=["value"],iN={class:"check-row"},sN=["checked"],oN={class:"check-row"},aN=["checked"],lN={class:"check-row"},cN=["checked"],uN={class:"check-row"},dN=["checked"],hN={key:6,class:"panel-section"},fN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pN=["value"],mN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gN=["value"],vN={class:"check-row"},yN=["checked"],_N={class:"check-row"},bN=["checked"],wN={class:"check-row"},EN=["checked"],IN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},TN={class:"form-group"},CN=["value"],xN={class:"form-group"},kN=["value"],SN={class:"form-group",style:{"margin-top":"var(--space-3)"}},AN=["value"],RN={key:7,class:"panel-section"},PN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},NN=["value"],ON={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},DN=["value"],MN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},VN=["value"],LN={class:"form-group"},$N=["value"],FN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},UN={class:"form-group"},zN=["value"],BN={class:"form-group"},jN=["value"],qN={class:"form-group",style:{"margin-top":"var(--space-3)"}},WN=["value"],HN={class:"panel-section"},GN={class:"actions-list"},KN={__name:"PropertiesPanel",setup(t){const e=An(),n=In(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var _,u;return(u=(_=r.value)==null?void 0:_.slides)==null?void 0:u.find(w=>w.id===e.currentSlideId)}),s=Se(()=>{var _,u;return e.selectedElementId?(u=(_=i.value)==null?void 0:_.elements)==null?void 0:u.find(w=>w.id===e.selectedElementId):null}),o=me({});rn(s,_=>{_?o.value=JSON.parse(JSON.stringify(_)):o.value={}},{immediate:!0,deep:!0});function a(_){s.value&&n.updateElement(e.projectId,e.currentSlideId,s.value.id,_)}function l(_){if(!s.value)return;const u={...s.value.content,..._};a({content:u})}function h(_,u){const w=parseFloat(u);isNaN(w)||a({[_]:w})}const f=me({});rn(i,_=>{_&&(f.value={..._})},{immediate:!0});function p(_){i.value&&n.updateSlide(e.projectId,i.value.id,_)}function m(_,u){p({[_]:u})}const v=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(_,u)=>{var w,x,R,M,V,L,F,C,E,T,P,O,b,S,I,J,te,$,de,ie,Ee,re,ee,Ce,we,Z,Ie,oe,he,pe,Te,Re,q,K,g,Q,H,N,D,j,z,A,W,X,se,le,_e,Ae,ce,We,it,Qe,mt,Be,fe,B,Ne,ge,Ue,tt,Tt,Ot,ut,fn,Rn,pn,Wi,Hi,ir,aa,la,pi,Ds,Ms,Gi,Rr;return G(),Y("div",E5,[u[190]||(u[190]=d("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),s.value?(G(),Y(Me,{key:1},[d("div",D5,[d("div",M5,[u[95]||(u[95]=De(" Position & Size ",-1)),d("span",V5,ve(s.value.type),1)]),d("div",L5,[d("div",$5,[u[96]||(u[96]=d("label",{class:"form-label"},"X",-1)),d("input",{type:"number",value:Math.round(s.value.x),class:"input",onChange:u[11]||(u[11]=ne=>h("x",ne.target.value))},null,40,F5)]),d("div",U5,[u[97]||(u[97]=d("label",{class:"form-label"},"Y",-1)),d("input",{type:"number",value:Math.round(s.value.y),class:"input",onChange:u[12]||(u[12]=ne=>h("y",ne.target.value))},null,40,z5)]),d("div",B5,[u[98]||(u[98]=d("label",{class:"form-label"},"W",-1)),d("input",{type:"number",value:Math.round(s.value.width),class:"input",onChange:u[13]||(u[13]=ne=>h("width",ne.target.value))},null,40,j5)]),d("div",q5,[u[99]||(u[99]=d("label",{class:"form-label"},"H",-1)),d("input",{type:"number",value:Math.round(s.value.height),class:"input",onChange:u[14]||(u[14]=ne=>h("height",ne.target.value))},null,40,W5)]),d("div",H5,[u[100]||(u[100]=d("label",{class:"form-label"},"Rot °",-1)),d("input",{type:"number",value:Math.round(s.value.rotation||0),class:"input",onChange:u[15]||(u[15]=ne=>h("rotation",ne.target.value))},null,40,G5)]),d("div",K5,[u[101]||(u[101]=d("label",{class:"form-label"},"Opacity",-1)),d("input",{type:"number",min:"0",max:"1",step:".05",value:s.value.opacity??1,class:"input",onChange:u[16]||(u[16]=ne=>h("opacity",ne.target.value))},null,40,Q5)])])]),["text","heading"].includes(s.value.type)?(G(),Y("div",J5,[u[117]||(u[117]=d("div",{class:"panel-title"},"Text",-1)),d("div",Y5,[u[102]||(u[102]=d("label",{class:"form-label"},"Content",-1)),d("textarea",{value:(L=s.value.content)==null?void 0:L.text,class:"textarea",style:{"min-height":"64px"},onInput:u[17]||(u[17]=ne=>l({text:ne.target.value}))},null,40,X5)]),d("div",Z5,[d("div",e6,[u[103]||(u[103]=d("label",{class:"form-label"},"Size",-1)),d("input",{type:"number",value:(F=s.value.content)==null?void 0:F.fontSize,class:"input",onChange:u[18]||(u[18]=ne=>l({fontSize:+ne.target.value}))},null,40,t6)]),d("div",n6,[u[105]||(u[105]=d("label",{class:"form-label"},"Weight",-1)),d("select",{value:(C=s.value.content)==null?void 0:C.fontWeight,class:"select",onChange:u[19]||(u[19]=ne=>l({fontWeight:ne.target.value}))},[...u[104]||(u[104]=[d("option",{value:"normal"},"Normal",-1),d("option",{value:"bold"},"Bold",-1),d("option",{value:"600"},"Semi-bold",-1),d("option",{value:"300"},"Light",-1)])],40,r6)])]),d("div",i6,[u[106]||(u[106]=d("label",{class:"form-label"},"Font Family",-1)),d("select",{value:(E=s.value.content)==null?void 0:E.fontFamily,class:"select",onChange:u[20]||(u[20]=ne=>l({fontFamily:ne.target.value}))},[(G(),Y(Me,null,st(v,ne=>d("option",{key:ne,value:ne},ve(ne.split(",")[0]),9,o6)),64))],40,s6)]),d("div",a6,[u[107]||(u[107]=d("label",{class:"form-label"},"Align",-1)),d("div",l6,[(G(),Y(Me,null,st(["left","center","right","justify"],ne=>{var bt;return d("button",{key:ne,class:je(["align-btn",((bt=s.value.content)==null?void 0:bt.textAlign)===ne&&"active"]),onClick:ca=>l({textAlign:ne})},ve(ne[0].toUpperCase()),11,c6)}),64))])]),d("div",u6,[u[111]||(u[111]=d("label",{class:"form-label"},"Style",-1)),d("div",d6,[d("button",{class:je(["style-btn",((T=s.value.content)==null?void 0:T.fontStyle)==="italic"&&"active"]),onClick:u[21]||(u[21]=ne=>{var bt;return l({fontStyle:((bt=s.value.content)==null?void 0:bt.fontStyle)==="italic"?"normal":"italic"})})},[...u[108]||(u[108]=[d("i",null,"I",-1)])],2),d("button",{class:je(["style-btn",((P=s.value.content)==null?void 0:P.textDecoration)==="underline"&&"active"]),onClick:u[22]||(u[22]=ne=>{var bt;return l({textDecoration:((bt=s.value.content)==null?void 0:bt.textDecoration)==="underline"?"none":"underline"})})},[...u[109]||(u[109]=[d("u",null,"U",-1)])],2),d("button",{class:je(["style-btn",((O=s.value.content)==null?void 0:O.textDecoration)==="line-through"&&"active"]),onClick:u[23]||(u[23]=ne=>{var bt;return l({textDecoration:((bt=s.value.content)==null?void 0:bt.textDecoration)==="line-through"?"none":"line-through"})})},[...u[110]||(u[110]=[d("s",null,"S",-1)])],2)])]),d("div",h6,[u[112]||(u[112]=d("label",{class:"form-label"},"Color",-1)),d("div",f6,[d("input",{type:"color",value:((b=s.value.content)==null?void 0:b.color)||"#000",onInput:u[24]||(u[24]=ne=>l({color:ne.target.value})),class:"color-input-native"},null,40,p6),d("input",{value:((S=s.value.content)==null?void 0:S.color)||"#000",class:"input",onInput:u[25]||(u[25]=ne=>l({color:ne.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,m6)])]),d("div",g6,[u[113]||(u[113]=d("label",{class:"form-label"},"Line Height",-1)),d("input",{type:"number",min:".8",max:"3",step:".1",value:((I=s.value.content)==null?void 0:I.lineHeight)??1.5,class:"input",onChange:u[26]||(u[26]=ne=>l({lineHeight:+ne.target.value}))},null,40,v6)]),d("div",y6,[d("div",_6,[u[115]||(u[115]=d("label",{class:"form-label"},"Case",-1)),d("select",{value:((J=s.value.content)==null?void 0:J.textTransform)||"none",class:"select",onChange:u[27]||(u[27]=ne=>l({textTransform:ne.target.value}))},[...u[114]||(u[114]=[d("option",{value:"none"},"Normal",-1),d("option",{value:"uppercase"},"UPPERCASE",-1),d("option",{value:"lowercase"},"lowercase",-1),d("option",{value:"capitalize"},"Capitalize",-1)])],40,b6)]),d("div",w6,[u[116]||(u[116]=d("label",{class:"form-label"},"Letter Spacing",-1)),d("input",{type:"number",step:".2",value:((te=s.value.content)==null?void 0:te.letterSpacing)??0,class:"input",onChange:u[28]||(u[28]=ne=>l({letterSpacing:+ne.target.value}))},null,40,E6)])])])):Pe("",!0),s.value.type==="image"?(G(),Y("div",I6,[u[125]||(u[125]=d("div",{class:"panel-title"},"Image",-1)),d("div",T6,[u[118]||(u[118]=d("label",{class:"form-label"},"Source URL",-1)),d("input",{value:($=s.value.content)==null?void 0:$.src,class:"input",placeholder:"https://...",onInput:u[29]||(u[29]=ne=>l({src:ne.target.value}))},null,40,C6)]),d("div",x6,[u[119]||(u[119]=d("label",{class:"form-label"},"Alt Text",-1)),d("input",{value:(de=s.value.content)==null?void 0:de.alt,class:"input",onInput:u[30]||(u[30]=ne=>l({alt:ne.target.value}))},null,40,k6)]),d("div",S6,[u[121]||(u[121]=d("label",{class:"form-label"},"Object Fit",-1)),d("select",{value:((ie=s.value.content)==null?void 0:ie.objectFit)||"cover",class:"select",onChange:u[31]||(u[31]=ne=>l({objectFit:ne.target.value}))},[...u[120]||(u[120]=[d("option",{value:"cover"},"Cover",-1),d("option",{value:"contain"},"Contain",-1),d("option",{value:"fill"},"Fill",-1),d("option",{value:"none"},"None",-1)])],40,A6)]),d("div",R6,[u[122]||(u[122]=d("label",{class:"form-label"},"Border Radius",-1)),d("input",{type:"number",min:"0",value:((Ee=s.value.content)==null?void 0:Ee.borderRadius)||0,class:"input",onChange:u[32]||(u[32]=ne=>l({borderRadius:+ne.target.value}))},null,40,P6)]),d("div",N6,[d("div",O6,[u[123]||(u[123]=d("label",{class:"form-label"},"Border Width",-1)),d("input",{type:"number",min:"0",value:((re=s.value.content)==null?void 0:re.borderWidth)||0,class:"input",onChange:u[33]||(u[33]=ne=>l({borderWidth:+ne.target.value}))},null,40,D6)]),d("div",M6,[u[124]||(u[124]=d("label",{class:"form-label"},"Border Color",-1)),d("input",{type:"color",value:((ee=s.value.content)==null?void 0:ee.borderColor)||"#e2e8f0",class:"color-input-native",onInput:u[34]||(u[34]=ne=>l({borderColor:ne.target.value}))},null,40,V6)])])])):Pe("",!0),s.value.type==="shape"?(G(),Y("div",L6,[u[133]||(u[133]=d("div",{class:"panel-title"},"Shape",-1)),d("div",$6,[u[127]||(u[127]=d("label",{class:"form-label"},"Type",-1)),d("select",{value:((Ce=s.value.content)==null?void 0:Ce.shapeType)||"rectangle",class:"select",onChange:u[35]||(u[35]=ne=>l({shapeType:ne.target.value}))},[...u[126]||(u[126]=[cn('<option value="rectangle" data-v-51014b61>Rectangle</option><option value="circle" data-v-51014b61>Circle</option><option value="triangle" data-v-51014b61>Triangle</option><option value="star" data-v-51014b61>Star</option><option value="arrow" data-v-51014b61>Arrow</option><option value="diamond" data-v-51014b61>Diamond</option>',6)])],40,F6)]),d("div",U6,[u[128]||(u[128]=d("label",{class:"form-label"},"Fill Color",-1)),d("div",z6,[d("input",{type:"color",value:((we=s.value.content)==null?void 0:we.fillColor)||"#6c47ff",onInput:u[36]||(u[36]=ne=>l({fillColor:ne.target.value})),class:"color-input-native"},null,40,B6),d("input",{value:((Z=s.value.content)==null?void 0:Z.fillColor)||"#6c47ff",class:"input",onInput:u[37]||(u[37]=ne=>l({fillColor:ne.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,j6)])]),d("div",q6,[u[129]||(u[129]=d("label",{class:"form-label"},"Border Color",-1)),d("div",W6,[d("input",{type:"color",value:((Ie=s.value.content)==null?void 0:Ie.borderColor)||"transparent",onInput:u[38]||(u[38]=ne=>l({borderColor:ne.target.value})),class:"color-input-native"},null,40,H6),d("input",{value:((oe=s.value.content)==null?void 0:oe.borderColor)||"transparent",class:"input",onInput:u[39]||(u[39]=ne=>l({borderColor:ne.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,G6)])]),d("div",K6,[u[130]||(u[130]=d("label",{class:"form-label"},"Border Width",-1)),d("input",{type:"number",min:"0",value:((he=s.value.content)==null?void 0:he.borderWidth)||0,class:"input",onChange:u[40]||(u[40]=ne=>l({borderWidth:+ne.target.value}))},null,40,Q6)]),d("div",J6,[u[131]||(u[131]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((pe=s.value.content)==null?void 0:pe.borderRadius)||0,class:"input",onChange:u[41]||(u[41]=ne=>l({borderRadius:+ne.target.value}))},null,40,Y6)]),d("div",X6,[u[132]||(u[132]=d("label",{class:"form-label"},"Fill Opacity",-1)),d("input",{type:"number",min:"0",max:"1",step:".05",value:((Te=s.value.content)==null?void 0:Te.opacity)??1,class:"input",onChange:u[42]||(u[42]=ne=>l({opacity:+ne.target.value}))},null,40,Z6)])])):Pe("",!0),s.value.type==="button"?(G(),Y("div",e3,[u[149]||(u[149]=d("div",{class:"panel-title"},"Button",-1)),d("div",t3,[u[134]||(u[134]=d("label",{class:"form-label"},"Label",-1)),d("input",{value:(Re=s.value.content)==null?void 0:Re.label,class:"input",onInput:u[43]||(u[43]=ne=>l({label:ne.target.value}))},null,40,n3)]),d("div",r3,[u[136]||(u[136]=d("label",{class:"form-label"},"Style",-1)),d("select",{value:((q=s.value.content)==null?void 0:q.variant)||"primary",class:"select",onChange:u[44]||(u[44]=ne=>l({variant:ne.target.value}))},[...u[135]||(u[135]=[cn('<option value="primary" data-v-51014b61>Primary</option><option value="secondary" data-v-51014b61>Secondary</option><option value="outline" data-v-51014b61>Outline</option><option value="ghost" data-v-51014b61>Ghost</option><option value="danger" data-v-51014b61>Danger</option>',5)])],40,i3)]),d("div",s3,[u[138]||(u[138]=d("label",{class:"form-label"},"Action",-1)),d("select",{value:((K=s.value.content)==null?void 0:K.action)||"none",class:"select",onChange:u[45]||(u[45]=ne=>l({action:ne.target.value}))},[...u[137]||(u[137]=[d("option",{value:"none"},"None",-1),d("option",{value:"navigate"},"Navigate to slide",-1),d("option",{value:"link"},"Open URL",-1),d("option",{value:"submit"},"Submit",-1)])],40,o3)]),(g=s.value.content)!=null&&g.action&&s.value.content.action!=="none"?(G(),Y("div",a3,[u[139]||(u[139]=d("label",{class:"form-label"},"Target (slide # or URL)",-1)),d("input",{value:(Q=s.value.content)==null?void 0:Q.target,class:"input",placeholder:"Slide # or https://...",onInput:u[46]||(u[46]=ne=>l({target:ne.target.value}))},null,40,l3)])):Pe("",!0),d("div",c3,[d("div",u3,[u[140]||(u[140]=d("label",{class:"form-label"},"Background",-1)),d("input",{type:"color",value:((H=s.value.content)==null?void 0:H.bgColor)||"#6c47ff",class:"color-input-native",onInput:u[47]||(u[47]=ne=>l({bgColor:ne.target.value}))},null,40,d3)]),d("div",h3,[u[141]||(u[141]=d("label",{class:"form-label"},"Text Color",-1)),d("input",{type:"color",value:((N=s.value.content)==null?void 0:N.textColor)||"#ffffff",class:"color-input-native",onInput:u[48]||(u[48]=ne=>l({textColor:ne.target.value}))},null,40,f3)])]),d("div",p3,[d("div",m3,[u[142]||(u[142]=d("label",{class:"form-label"},"Border Color",-1)),d("input",{type:"color",value:((D=s.value.content)==null?void 0:D.borderColor)||"#6c47ff",class:"color-input-native",onInput:u[49]||(u[49]=ne=>l({borderColor:ne.target.value}))},null,40,g3)]),d("div",v3,[u[143]||(u[143]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((j=s.value.content)==null?void 0:j.borderRadius)??8,class:"input",onChange:u[50]||(u[50]=ne=>l({borderRadius:+ne.target.value}))},null,40,y3)])]),d("div",_3,[d("div",b3,[u[144]||(u[144]=d("label",{class:"form-label"},"Font Size",-1)),d("input",{type:"number",min:"10",value:((z=s.value.content)==null?void 0:z.fontSize)??15,class:"input",onChange:u[51]||(u[51]=ne=>l({fontSize:+ne.target.value}))},null,40,w3)]),d("div",E3,[u[146]||(u[146]=d("label",{class:"form-label"},"Weight",-1)),d("select",{value:String(((A=s.value.content)==null?void 0:A.fontWeight)??600),class:"select",onChange:u[52]||(u[52]=ne=>l({fontWeight:+ne.target.value}))},[...u[145]||(u[145]=[d("option",{value:"400"},"Normal",-1),d("option",{value:"500"},"Medium",-1),d("option",{value:"600"},"Semi-bold",-1),d("option",{value:"700"},"Bold",-1)])],40,I3)])]),d("div",T3,[d("div",C3,[u[147]||(u[147]=d("label",{class:"form-label"},"Font Family",-1)),d("select",{value:((W=s.value.content)==null?void 0:W.fontFamily)||"Inter, sans-serif",class:"select",onChange:u[53]||(u[53]=ne=>l({fontFamily:ne.target.value}))},[(G(),Y(Me,null,st(v,ne=>d("option",{key:`btn-${ne}`,value:ne},ve(ne.split(",")[0]),9,k3)),64))],40,x3)]),d("div",S3,[u[148]||(u[148]=d("label",{class:"form-label"},"Letter Spacing",-1)),d("input",{type:"number",step:".2",value:((X=s.value.content)==null?void 0:X.letterSpacing)??0,class:"input",onChange:u[54]||(u[54]=ne=>l({letterSpacing:+ne.target.value}))},null,40,A3)])])])):Pe("",!0),s.value.type==="hotspot"?(G(),Y("div",R3,[u[159]||(u[159]=d("div",{class:"panel-title"},"Hotspot",-1)),d("div",P3,[u[151]||(u[151]=d("label",{class:"form-label"},"Icon",-1)),d("select",{value:((se=s.value.content)==null?void 0:se.icon)||"?",class:"select",onChange:u[55]||(u[55]=ne=>l({icon:ne.target.value}))},[...u[150]||(u[150]=[cn('<option value="?" data-v-51014b61>? (Info)</option><option value="!" data-v-51014b61>! (Alert)</option><option value="+" data-v-51014b61>+ (Plus)</option><option value="i" data-v-51014b61>i (Info)</option><option value="✦" data-v-51014b61>✦ (Star)</option>',5)])],40,N3)]),d("div",O3,[u[152]||(u[152]=d("label",{class:"form-label"},"Background Color",-1)),d("div",D3,[d("input",{type:"color",value:((le=s.value.content)==null?void 0:le.bgColor)||"#6c47ff",onInput:u[56]||(u[56]=ne=>l({bgColor:ne.target.value})),class:"color-input-native"},null,40,M3),d("input",{value:((_e=s.value.content)==null?void 0:_e.bgColor)||"#6c47ff",class:"input",onInput:u[57]||(u[57]=ne=>l({bgColor:ne.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,V3)])]),d("div",L3,[d("div",$3,[u[153]||(u[153]=d("label",{class:"form-label"},"Icon Color",-1)),d("input",{type:"color",value:((Ae=s.value.content)==null?void 0:Ae.iconColor)||"#ffffff",class:"color-input-native",onInput:u[58]||(u[58]=ne=>l({iconColor:ne.target.value}))},null,40,F3)]),d("div",U3,[u[154]||(u[154]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((ce=s.value.content)==null?void 0:ce.borderRadius)??999,class:"input",onChange:u[59]||(u[59]=ne=>l({borderRadius:+ne.target.value}))},null,40,z3)])]),d("div",B3,[u[155]||(u[155]=d("label",{class:"form-label"},"Popup Title",-1)),d("input",{value:(We=s.value.content)==null?void 0:We.popupTitle,class:"input",onInput:u[60]||(u[60]=ne=>l({popupTitle:ne.target.value}))},null,40,j3)]),d("div",q3,[u[156]||(u[156]=d("label",{class:"form-label"},"Popup Content",-1)),d("textarea",{value:(it=s.value.content)==null?void 0:it.popupContent,class:"textarea",onInput:u[61]||(u[61]=ne=>l({popupContent:ne.target.value}))},null,40,W3)]),d("div",H3,[d("div",G3,[u[157]||(u[157]=d("label",{class:"form-label"},"Popup Background",-1)),d("input",{type:"color",value:((Qe=s.value.content)==null?void 0:Qe.popupBgColor)||"#ffffff",class:"color-input-native",onInput:u[62]||(u[62]=ne=>l({popupBgColor:ne.target.value}))},null,40,K3)]),d("div",Q3,[u[158]||(u[158]=d("label",{class:"form-label"},"Popup Text",-1)),d("input",{type:"color",value:((mt=s.value.content)==null?void 0:mt.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:u[63]||(u[63]=ne=>l({popupTextColor:ne.target.value}))},null,40,J3)])])])):Pe("",!0),s.value.type==="video"?(G(),Y("div",Y3,[u[168]||(u[168]=d("div",{class:"panel-title"},"Video",-1)),d("div",X3,[u[160]||(u[160]=d("label",{class:"form-label"},"Video URL / Embed",-1)),d("input",{value:(Be=s.value.content)==null?void 0:Be.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:u[64]||(u[64]=ne=>l({src:ne.target.value}))},null,40,Z3)]),d("div",eN,[u[161]||(u[161]=d("label",{class:"form-label"},"Poster Image URL",-1)),d("input",{value:(fe=s.value.content)==null?void 0:fe.poster,class:"input",onInput:u[65]||(u[65]=ne=>l({poster:ne.target.value}))},null,40,tN)]),d("div",nN,[u[163]||(u[163]=d("label",{class:"form-label"},"Object Fit",-1)),d("select",{value:((B=s.value.content)==null?void 0:B.objectFit)||"cover",class:"select",onChange:u[66]||(u[66]=ne=>l({objectFit:ne.target.value}))},[...u[162]||(u[162]=[d("option",{value:"cover"},"Cover",-1),d("option",{value:"contain"},"Contain",-1),d("option",{value:"fill"},"Fill",-1),d("option",{value:"none"},"None",-1)])],40,rN)]),d("label",iN,[d("input",{type:"checkbox",checked:(Ne=s.value.content)==null?void 0:Ne.autoplay,onChange:u[67]||(u[67]=ne=>l({autoplay:ne.target.checked}))},null,40,sN),u[164]||(u[164]=De(" Autoplay ",-1))]),d("label",oN,[d("input",{type:"checkbox",checked:((ge=s.value.content)==null?void 0:ge.controls)??!0,onChange:u[68]||(u[68]=ne=>l({controls:ne.target.checked}))},null,40,aN),u[165]||(u[165]=De(" Show Controls ",-1))]),d("label",lN,[d("input",{type:"checkbox",checked:(Ue=s.value.content)==null?void 0:Ue.loop,onChange:u[69]||(u[69]=ne=>l({loop:ne.target.checked}))},null,40,cN),u[166]||(u[166]=De(" Loop ",-1))]),d("label",uN,[d("input",{type:"checkbox",checked:(tt=s.value.content)==null?void 0:tt.muted,onChange:u[70]||(u[70]=ne=>l({muted:ne.target.checked}))},null,40,dN),u[167]||(u[167]=De(" Muted ",-1))])])):Pe("",!0),s.value.type==="audio"?(G(),Y("div",hN,[u[177]||(u[177]=d("div",{class:"panel-title"},"Audio",-1)),d("div",fN,[u[169]||(u[169]=d("label",{class:"form-label"},"Audio URL",-1)),d("input",{value:(Tt=s.value.content)==null?void 0:Tt.src,class:"input",placeholder:".mp3 / .wav URL",onInput:u[71]||(u[71]=ne=>l({src:ne.target.value}))},null,40,pN)]),d("div",mN,[u[170]||(u[170]=d("label",{class:"form-label"},"Label",-1)),d("input",{value:(Ot=s.value.content)==null?void 0:Ot.label,class:"input",onInput:u[72]||(u[72]=ne=>l({label:ne.target.value}))},null,40,gN)]),d("label",vN,[d("input",{type:"checkbox",checked:(ut=s.value.content)==null?void 0:ut.autoplay,onChange:u[73]||(u[73]=ne=>l({autoplay:ne.target.checked}))},null,40,yN),u[171]||(u[171]=De(" Autoplay ",-1))]),d("label",_N,[d("input",{type:"checkbox",checked:((fn=s.value.content)==null?void 0:fn.controls)!==!1,onChange:u[74]||(u[74]=ne=>l({controls:ne.target.checked}))},null,40,bN),u[172]||(u[172]=De(" Show Controls ",-1))]),d("label",wN,[d("input",{type:"checkbox",checked:(Rn=s.value.content)==null?void 0:Rn.loop,onChange:u[75]||(u[75]=ne=>l({loop:ne.target.checked}))},null,40,EN),u[173]||(u[173]=De(" Loop ",-1))]),d("div",IN,[d("div",TN,[u[174]||(u[174]=d("label",{class:"form-label"},"Accent Color",-1)),d("input",{type:"color",value:((pn=s.value.content)==null?void 0:pn.accentColor)||"#6c47ff",class:"color-input-native",onInput:u[76]||(u[76]=ne=>l({accentColor:ne.target.value}))},null,40,CN)]),d("div",xN,[u[175]||(u[175]=d("label",{class:"form-label"},"Text Color",-1)),d("input",{type:"color",value:((Wi=s.value.content)==null?void 0:Wi.textColor)||"#555555",class:"color-input-native",onInput:u[77]||(u[77]=ne=>l({textColor:ne.target.value}))},null,40,kN)])]),d("div",SN,[u[176]||(u[176]=d("label",{class:"form-label"},"Background Color",-1)),d("input",{type:"color",value:((Hi=s.value.content)==null?void 0:Hi.bgColor)||"#ede7ff",class:"color-input-native",onInput:u[78]||(u[78]=ne=>l({bgColor:ne.target.value}))},null,40,AN)])])):Pe("",!0),s.value.type==="quiz"?(G(),Y("div",RN,[u[185]||(u[185]=d("div",{class:"panel-title"},"Quiz Question",-1)),d("div",PN,[u[178]||(u[178]=d("label",{class:"form-label"},"Question",-1)),d("textarea",{value:(ir=s.value.content)==null?void 0:ir.question,class:"textarea",style:{"min-height":"60px"},onInput:u[79]||(u[79]=ne=>l({question:ne.target.value}))},null,40,NN)]),d("div",ON,[u[179]||(u[179]=d("label",{class:"form-label"},"Options (one per line)",-1)),d("textarea",{value:(la=(aa=s.value.content)==null?void 0:aa.options)==null?void 0:la.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:u[80]||(u[80]=ne=>l({options:ne.target.value.split(`
`).filter(Boolean)}))},null,40,DN)]),d("div",MN,[u[180]||(u[180]=d("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),d("input",{type:"number",min:"0",value:((pi=s.value.content)==null?void 0:pi.correctIndex)??0,class:"input",onChange:u[81]||(u[81]=ne=>l({correctIndex:+ne.target.value}))},null,40,VN)]),d("div",LN,[u[181]||(u[181]=d("label",{class:"form-label"},"Explanation",-1)),d("textarea",{value:(Ds=s.value.content)==null?void 0:Ds.explanation,class:"textarea",onInput:u[82]||(u[82]=ne=>l({explanation:ne.target.value}))},null,40,$N)]),d("div",FN,[d("div",UN,[u[182]||(u[182]=d("label",{class:"form-label"},"Card Background",-1)),d("input",{type:"color",value:((Ms=s.value.content)==null?void 0:Ms.cardBgColor)||"#ffffff",class:"color-input-native",onInput:u[83]||(u[83]=ne=>l({cardBgColor:ne.target.value}))},null,40,zN)]),d("div",BN,[u[183]||(u[183]=d("label",{class:"form-label"},"Question Color",-1)),d("input",{type:"color",value:((Gi=s.value.content)==null?void 0:Gi.questionColor)||"#1a1a2e",class:"color-input-native",onInput:u[84]||(u[84]=ne=>l({questionColor:ne.target.value}))},null,40,jN)])]),d("div",qN,[u[184]||(u[184]=d("label",{class:"form-label"},"Accent Color",-1)),d("input",{type:"color",value:((Rr=s.value.content)==null?void 0:Rr.accentColor)||"#6c47ff",class:"color-input-native",onInput:u[85]||(u[85]=ne=>l({accentColor:ne.target.value}))},null,40,WN)])])):Pe("",!0),d("div",HN,[u[189]||(u[189]=d("div",{class:"panel-title"},"Actions",-1)),d("div",GN,[d("button",{class:"btn btn-secondary btn-sm w-full",onClick:u[86]||(u[86]=ne=>xe(n).duplicateElement(xe(e).projectId,xe(e).currentSlideId,s.value.id))},[...u[186]||(u[186]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),d("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),De(" Duplicate ",-1)])]),d("button",{class:"btn btn-secondary btn-sm w-full",onClick:u[87]||(u[87]=ne=>{xe(e).showInteractionEditor=!0,xe(e).interactionElementId=s.value.id})},[...u[187]||(u[187]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),De(" Interactions ",-1)])]),d("button",{class:"btn btn-danger btn-sm w-full",onClick:u[88]||(u[88]=ne=>{xe(n).deleteElement(xe(e).projectId,xe(e).currentSlideId,s.value.id),xe(e).clearSelection()})},[...u[188]||(u[188]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"3 6 5 6 21 6"}),d("path",{d:"M19 6l-1 14H6L5 6"}),d("path",{d:"M9 6V4h6v2"})],-1),De(" Delete Element ",-1)])])])])],64)):(G(),Y(Me,{key:0},[d("div",I5,[u[91]||(u[91]=d("div",{class:"panel-title"},"Slide Properties",-1)),d("div",T5,[u[89]||(u[89]=d("label",{class:"form-label"},"Title",-1)),Ye(d("input",{"onUpdate:modelValue":u[0]||(u[0]=ne=>f.value.title=ne),class:"input",onInput:u[1]||(u[1]=ne=>m("title",f.value.title))},null,544),[[pt,f.value.title]])]),d("div",C5,[u[90]||(u[90]=d("label",{class:"form-label"},"Background",-1)),d("div",x5,[(G(),Y(Me,null,st(["color","gradient","image"],ne=>{var bt;return d("button",{key:ne,class:je(["bg-type-btn",(((bt=i.value)==null?void 0:bt.backgroundType)||"color")===ne&&"active"]),onClick:ca=>p({backgroundType:ne})},ve(ne),11,k5)}),64))]),(((w=i.value)==null?void 0:w.backgroundType)||"color")==="color"?(G(),Y("div",S5,[d("input",{type:"color",value:((x=i.value)==null?void 0:x.background)||"#ffffff",onInput:u[2]||(u[2]=ne=>p({background:ne.target.value})),class:"color-input-native"},null,40,A5),d("input",{value:((R=i.value)==null?void 0:R.background)||"#ffffff",class:"input",onInput:u[3]||(u[3]=ne=>p({background:ne.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,R5)])):((M=i.value)==null?void 0:M.backgroundType)==="gradient"?Ye((G(),Y("input",{key:1,"onUpdate:modelValue":u[4]||(u[4]=ne=>f.value.backgroundGradient=ne),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:u[5]||(u[5]=ne=>p({backgroundGradient:f.value.backgroundGradient}))},null,544)),[[pt,f.value.backgroundGradient]]):Ye((G(),Y("input",{key:2,"onUpdate:modelValue":u[6]||(u[6]=ne=>f.value.backgroundImage=ne),class:"input",placeholder:"https://...",onInput:u[7]||(u[7]=ne=>p({backgroundImage:f.value.backgroundImage}))},null,544)),[[pt,f.value.backgroundImage]])])]),d("div",P5,[u[92]||(u[92]=d("div",{class:"panel-title"},"Slide Notes",-1)),Ye(d("textarea",{"onUpdate:modelValue":u[8]||(u[8]=ne=>f.value.notes=ne),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:u[9]||(u[9]=ne=>m("notes",f.value.notes))},null,544),[[pt,f.value.notes]])]),d("div",N5,[u[94]||(u[94]=d("div",{class:"panel-title"},"Transition",-1)),d("select",{value:((V=i.value)==null?void 0:V.transition)||"none",class:"select",onChange:u[10]||(u[10]=ne=>p({transition:ne.target.value}))},[...u[93]||(u[93]=[cn('<option value="none" data-v-51014b61>None</option><option value="fade" data-v-51014b61>Fade</option><option value="slide" data-v-51014b61>Slide</option><option value="zoom" data-v-51014b61>Zoom</option><option value="flip" data-v-51014b61>Flip</option>',5)])],40,O5)])],64))])}}},QN=Bt(KN,[["__scopeId","data-v-51014b61"]]),JN={class:"editor-toolbar"},YN={class:"toolbar-group"},XN={class:"toolbar-group"},ZN=["data-tooltip","onClick"],eO={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tO={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},nO={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},rO={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},iO={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},sO={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},oO={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},aO={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},lO={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},cO={class:"tool-label"},uO={class:"toolbar-group"},dO={class:"toolbar-group"},hO={__name:"EditorToolbar",setup(t){const e=An();In();const n=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"}];function r(i){e.setActiveTool(i)}return(i,s)=>(G(),Y("div",JN,[d("div",YN,[d("button",{class:je(["tool-btn",xe(e).activeTool==="select"&&"active"]),onClick:s[0]||(s[0]=o=>r("select")),"data-tooltip":"Select (V)"},[...s[6]||(s[6]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),d("span",{class:"tool-label"},"Select",-1)])],2)]),s[20]||(s[20]=d("div",{class:"toolbar-divider"},null,-1)),d("div",XN,[(G(),Y(Me,null,st(n,o=>d("button",{key:o.id,class:je(["tool-btn",xe(e).activeTool===o.id&&"active"]),"data-tooltip":o.tooltip,onClick:a=>r(o.id)},[o.icon==="text"?(G(),Y("svg",eO,[...s[7]||(s[7]=[d("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),d("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),d("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):o.icon==="heading"?(G(),Y("svg",tO,[...s[8]||(s[8]=[d("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):o.icon==="image"?(G(),Y("svg",nO,[...s[9]||(s[9]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),d("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):o.icon==="shape"?(G(),Y("svg",rO,[...s[10]||(s[10]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):o.icon==="button"?(G(),Y("svg",iO,[...s[11]||(s[11]=[d("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),d("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):o.icon==="hotspot"?(G(),Y("svg",sO,[...s[12]||(s[12]=[d("circle",{cx:"12",cy:"12",r:"10"},null,-1),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):o.icon==="video"?(G(),Y("svg",oO,[...s[13]||(s[13]=[d("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),d("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):o.icon==="audio"?(G(),Y("svg",aO,[...s[14]||(s[14]=[d("path",{d:"M9 18V5l12-2v13"},null,-1),d("circle",{cx:"6",cy:"18",r:"3"},null,-1),d("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):o.icon==="quiz"?(G(),Y("svg",lO,[...s[15]||(s[15]=[d("path",{d:"M9 11l3 3L22 4"},null,-1),d("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):Pe("",!0),d("span",cO,ve(o.label),1)],10,ZN)),64))]),s[21]||(s[21]=d("div",{class:"toolbar-spacer"},null,-1)),d("div",uO,[d("button",{class:"tool-btn",onClick:s[1]||(s[1]=o=>xe(e).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...s[16]||(s[16]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),d("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),d("button",{class:"zoom-display",onClick:s[2]||(s[2]=o=>xe(e).zoomReset())},ve(Math.round(xe(e).zoomLevel*100))+"% ",1),d("button",{class:"tool-btn",onClick:s[3]||(s[3]=o=>xe(e).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...s[17]||(s[17]=[cn('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1eac61d4><circle cx="11" cy="11" r="8" data-v-1eac61d4></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-1eac61d4></line><line x1="11" y1="8" x2="11" y2="14" data-v-1eac61d4></line><line x1="8" y1="11" x2="14" y2="11" data-v-1eac61d4></line></svg>',1)])])]),s[22]||(s[22]=d("div",{class:"toolbar-divider"},null,-1)),d("div",dO,[d("button",{class:je(["tool-btn",xe(e).showGrid&&"active"]),onClick:s[4]||(s[4]=o=>xe(e).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...s[18]||(s[18]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[d("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),d("button",{class:je(["tool-btn",xe(e).snapToGrid&&"active"]),onClick:s[5]||(s[5]=o=>xe(e).toggleSnap()),"data-tooltip":"Snap to grid"},[...s[19]||(s[19]=[cn('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1eac61d4><circle cx="5" cy="5" r="1" data-v-1eac61d4></circle><circle cx="12" cy="5" r="1" data-v-1eac61d4></circle><circle cx="19" cy="5" r="1" data-v-1eac61d4></circle><circle cx="5" cy="12" r="1" data-v-1eac61d4></circle><circle cx="12" cy="12" r="1" data-v-1eac61d4></circle><circle cx="19" cy="12" r="1" data-v-1eac61d4></circle><circle cx="5" cy="19" r="1" data-v-1eac61d4></circle><circle cx="12" cy="19" r="1" data-v-1eac61d4></circle><circle cx="19" cy="19" r="1" data-v-1eac61d4></circle></svg>',1)])],2)])]))}},fO=Bt(hO,[["__scopeId","data-v-1eac61d4"]]),pO=["onMousedown"],mO={key:1,class:"selection-border locked-border"},gO={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=An(),r=In(),i=bn("canvasScale",me(1)),s=Se(()=>n.projectId),o=Se(()=>n.currentSlideId),a=Se(()=>n.selectedElementIds.includes(e.element.id)),l=Se(()=>e.element.locked),h=Se(()=>e.element.visible!==!1);let f=!1,p=0,m=0,v=new Map;function _(te){var ie;if(l.value||te.target.classList.contains("resize-handle"))return;const $=te.ctrlKey||te.metaKey||te.shiftKey;a.value?$&&n.selectElement(e.element.id,!0):n.selectElement(e.element.id,$),n.setActiveTool("select"),f=!1,p=te.clientX,m=te.clientY,v.clear();const de=(ie=r.getProject(s.value))==null?void 0:ie.slides.find(Ee=>Ee.id===o.value);de&&n.selectedElementIds.forEach(Ee=>{const re=de.elements.find(ee=>ee.id===Ee);re&&!re.locked&&v.set(Ee,{x:re.x,y:re.y})}),window.addEventListener("mousemove",u),window.addEventListener("mouseup",w),te.stopPropagation()}function u(te){const $=(te.clientX-p)/i.value,de=(te.clientY-m)/i.value;!f&&(Math.abs($)>3||Math.abs(de)>3)&&(f=!0),f&&v.forEach((ie,Ee)=>{let re=ie.x+$,ee=ie.y+de;if(n.snapToGrid&&n.gridSize){const Ce=n.gridSize;re=Math.round(re/Ce)*Ce,ee=Math.round(ee/Ce)*Ce}r.updateElement(s.value,o.value,Ee,{x:re,y:ee})})}function w(te){f||!(te.ctrlKey||te.metaKey||te.shiftKey)&&n.selectedElementIds.length>1&&n.selectElement(e.element.id,!1),f=!1,window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",w)}const x=["n","ne","e","se","s","sw","w","nw"];let R=!1,M="",V=0,L=0,F=0,C=0,E=0,T=0;function P(te,$){l.value||(te.stopPropagation(),te.preventDefault(),R=!0,M=$,V=te.clientX,L=te.clientY,F=e.element.width,C=e.element.height,E=e.element.x,T=e.element.y,window.addEventListener("mousemove",O),window.addEventListener("mouseup",b))}function O(te){if(!R)return;const $=i.value,de=(te.clientX-V)/$,ie=(te.clientY-L)/$,Ee=20;let re=E,ee=T,Ce=F,we=C;if(M.includes("e")&&(Ce=Math.max(Ee,F+de)),M.includes("s")&&(we=Math.max(Ee,C+ie)),M.includes("w")){const Z=Math.max(Ee,F-de);re=E+(F-Z),Ce=Z}if(M.includes("n")){const Z=Math.max(Ee,C-ie);ee=T+(C-Z),we=Z}if(n.snapToGrid&&n.gridSize){const Z=n.gridSize;Ce=Math.round(Ce/Z)*Z,we=Math.round(we/Z)*Z,re=Math.round(re/Z)*Z,ee=Math.round(ee/Z)*Z}r.updateElement(s.value,o.value,e.element.id,{x:re,y:ee,width:Ce,height:we})}function b(){R=!1,window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",b)}function S(){["text","heading"].includes(e.element.type)&&n.setRightPanel("properties")}const I=Se(()=>({position:"absolute",left:`${e.element.x}px`,top:`${e.element.y}px`,width:`${e.element.width}px`,height:`${e.element.height}px`,transform:`rotate(${e.element.rotation||0}deg)`,opacity:e.element.opacity??1,zIndex:e.element.zIndex||1,cursor:l.value?"not-allowed":"move",visibility:h.value?"visible":"hidden",userSelect:"none"}));function J(te){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[te]||"auto"}return(te,$)=>(G(),Y("div",{class:je(["element-wrapper",a.value&&"selected",l.value&&"locked"]),style:He(I.value),onMousedown:_,onDblclick:S},[_u(te.$slots,"default",{},void 0),a.value&&!l.value?(G(),Y(Me,{key:0},[$[0]||($[0]=d("div",{class:"selection-border"},null,-1)),(G(),Y(Me,null,st(x,de=>d("div",{key:de,class:je(["resize-handle",`handle-${de}`]),style:He({cursor:J(de)}),onMousedown:Wt(ie=>P(ie,de),["stop"])},null,46,pO)),64))],64)):Pe("",!0),a.value&&l.value?(G(),Y("div",mO)):Pe("",!0)],38))}},vO=Bt(gO,[["__scopeId","data-v-2b4aa1b3"]]),yO=["contenteditable"],du={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=An(),i=In(),s=me(!1),o=me(null),a=me("");rn(()=>n.value.text,m=>{s.value||(a.value=m||(e.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function l(){r.selectedElementId===e.element.id&&(s.value=!0,Ho(()=>{if(o.value){o.value.focus();const m=document.createRange();m.selectNodeContents(o.value),m.collapse(!1);const v=window.getSelection();v.removeAllRanges(),v.addRange(m)}}))}function h(m){}function f(m){s.value&&m.stopPropagation()}function p(){if(s.value=!1,o.value){const m=o.value.innerText;a.value=m,i.updateElement(r.projectId,r.currentSlideId,e.element.id,{content:{...e.element.content,text:m}})}}return(m,v)=>(G(),Y("div",{class:"text-element",ref_key:"textRef",ref:o,contenteditable:s.value,onDblclick:l,onBlur:p,onInput:h,onMousedown:f,style:He({fontSize:(n.value.fontSize||16)+"px",fontFamily:n.value.fontFamily||"Inter, sans-serif",fontWeight:n.value.fontWeight||"normal",fontStyle:n.value.fontStyle||"normal",textDecoration:n.value.textDecoration||"none",textAlign:n.value.textAlign||"left",color:n.value.color||"#1a1a2e",lineHeight:n.value.lineHeight||1.5,textTransform:n.value.textTransform||"none",letterSpacing:(n.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:s.value?"2px solid var(--primary)":"none",cursor:s.value?"text":"inherit",userSelect:s.value?"text":"none"})},ve(a.value),45,yO))}},_O=["src","alt"],bO={key:1,class:"image-placeholder"},wO={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},EO={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o;return G(),Y("div",{class:"image-element",style:He({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((r=t.element.content)==null?void 0:r.borderRadius)||0)+"px",border:`${((i=t.element.content)==null?void 0:i.borderWidth)||0}px solid ${((s=t.element.content)==null?void 0:s.borderColor)||"transparent"}`})},[(o=t.element.content)!=null&&o.src?(G(),Y("img",{key:0,src:t.element.content.src,alt:t.element.content.alt||"",style:He({width:"100%",height:"100%",objectFit:t.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,_O)):(G(),Y("div",bO,[(G(),Y("svg",wO,[...n[0]||(n[0]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),d("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),n[1]||(n[1]=d("span",null,"Image",-1))]))],4)}}},IO=Bt(EO,[["__scopeId","data-v-401e9ff3"]]),TO={class:"shape-element",style:{width:"100%",height:"100%"}},CO=["width","height"],xO=["points","fill","stroke","stroke-width"],kO={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const o=n.value.shapeType||"rectangle",a={width:"100%",height:"100%",background:n.value.fillColor||"#6c47ff",border:`${n.value.borderWidth||0}px solid ${n.value.borderColor||"transparent"}`,opacity:n.value.opacity??1};return o==="circle"?{...a,borderRadius:"50%"}:o==="rectangle"?{...a,borderRadius:(n.value.borderRadius||0)+"px"}:a}),i=Se(()=>["triangle","star","arrow","diamond"].includes(n.value.shapeType)),s=Se(()=>{const o=e.element.width||150,a=e.element.height||100,l=n.value.shapeType;if(l==="triangle")return`${o/2},0 ${o},${a} 0,${a}`;if(l==="diamond")return`${o/2},0 ${o},${a/2} ${o/2},${a} 0,${a/2}`;if(l==="arrow")return`0,${a*.3} ${o*.6},${a*.3} ${o*.6},0 ${o},${a/2} ${o*.6},${a} ${o*.6},${a*.7} 0,${a*.7}`;if(l==="star"){const h=o/2,f=a/2,p=Math.min(o,a)/2,m=p*.4;let v="";for(let _=0;_<10;_++){const u=(_*36-90)*Math.PI/180,w=_%2===0?p:m;v+=`${h+w*Math.cos(u)},${f+w*Math.sin(u)} `}return v.trim()}return""});return(o,a)=>(G(),Y("div",TO,[i.value?(G(),Y("svg",{key:1,width:t.element.width,height:t.element.height,style:{display:"block",overflow:"visible"}},[d("polygon",{points:s.value,fill:n.value.fillColor||"#6c47ff",stroke:n.value.borderColor||"none","stroke-width":n.value.borderWidth||0},null,8,xO)],8,CO)):(G(),Y("div",{key:0,style:He(r.value)},null,4))]))}},SO={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const i={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},s=i[n.value.variant||"primary"]||i.primary;return{...s,background:n.value.bgColor||s.background,color:n.value.textColor||s.color,border:n.value.borderColor?`1px solid ${n.value.borderColor}`:s.border,borderRadius:(n.value.borderRadius??8)+"px"}});return(i,s)=>(G(),Y("div",{class:"button-element",style:He({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(n.value.fontSize??15)+"px",fontWeight:n.value.fontWeight??600,letterSpacing:(n.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:n.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...r.value})},ve(n.value.label||"Button"),5))}},AO={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},RO={class:"popup-header"},PO={class:"popup-body"},NO={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=me(!1);function i(s){s.stopPropagation(),r.value=!r.value}return(s,o)=>(G(),Y("div",AO,[d("div",{class:"hotspot-btn",style:He({width:"100%",height:"100%",background:n.value.bgColor||"#6c47ff",borderRadius:(n.value.borderRadius??999)>=999?"50%":(n.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:n.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Wt(i,["stop"])},ve(n.value.icon||"?"),5),_t(ni,{name:"fade"},{default:kt(()=>[r.value?(G(),Y("div",{key:0,class:"hotspot-popup",style:He({background:n.value.popupBgColor||"#ffffff",color:n.value.popupTextColor||"#1a1a2e"})},[d("div",RO,[d("strong",null,ve(n.value.popupTitle||"Info"),1),d("button",{class:"popup-close",onClick:o[0]||(o[0]=Wt(a=>r.value=!1,["stop"]))},"×")]),d("div",PO,ve(n.value.popupContent||"Add your content in the properties panel."),1)],4)):Pe("",!0)]),_:1})]))}},OO=Bt(NO,[["__scopeId","data-v-ef5f15f6"]]),DO={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},MO=["src"],VO=["src","poster","autoplay","controls","loop","muted"],LO={key:2,class:"video-placeholder"},$O={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},FO={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const s=n.value.src||"";return s.includes("youtube")||s.includes("youtu.be")}),i=Se(()=>{var o,a;const s=n.value.src||"";if(r.value){const l=(o=s.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:o[1];return l?`https://www.youtube.com/embed/${l}`:""}if(s.includes("vimeo.com")){const l=(a=s.match(/vimeo\.com\/(\d+)/))==null?void 0:a[1];return l?`https://player.vimeo.com/video/${l}`:""}return""});return(s,o)=>(G(),Y("div",DO,[i.value?(G(),Y("iframe",{key:0,src:i.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,MO)):n.value.src&&!i.value?(G(),Y("video",{key:1,src:n.value.src,poster:n.value.poster,autoplay:n.value.autoplay,controls:n.value.controls!==!1,loop:n.value.loop,muted:n.value.muted,style:He({width:"100%",height:"100%",objectFit:n.value.objectFit||"cover"})},null,12,VO)):(G(),Y("div",LO,[(G(),Y("svg",$O,[...o[0]||(o[0]=[d("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),d("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),o[1]||(o[1]=d("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},UO=Bt(FO,[["__scopeId","data-v-dfea1a16"]]),zO=["stroke"],BO=["src","controls","autoplay","loop"],jO={key:1,style:{"font-size":"11px",color:"#aaa"}},qO={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o,a,l,h,f,p;return G(),Y("div",{class:"audio-element",style:He({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((r=t.element.content)==null?void 0:r.bgColor)||"#ede7ff",border:`1px solid ${((i=t.element.content)==null?void 0:i.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(G(),Y("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((s=t.element.content)==null?void 0:s.accentColor)||"#6c47ff","stroke-width":"2"},[...n[1]||(n[1]=[d("path",{d:"M9 18V5l12-2v13"},null,-1),d("circle",{cx:"6",cy:"18",r:"3"},null,-1),d("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,zO)),d("span",{style:He({fontSize:"13px",color:((o=t.element.content)==null?void 0:o.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},ve(((a=t.element.content)==null?void 0:a.label)||"Audio Player"),5),(l=t.element.content)!=null&&l.src?(G(),Y("audio",{key:0,src:t.element.content.src,controls:((h=t.element.content)==null?void 0:h.controls)!==!1,autoplay:(f=t.element.content)==null?void 0:f.autoplay,loop:(p=t.element.content)==null?void 0:p.loop,style:{height:"28px","max-width":"180px"},onMousedown:n[0]||(n[0]=Wt(()=>{},["stop"]))},null,40,BO)):(G(),Y("span",jO,"No source"))],4)}}},WO={class:"quiz-options"},HO=["onClick"],GO={class:"opt-letter"},KO={class:"opt-text"},QO={key:0},JO={class:"quiz-actions"},YO=["disabled"],XO={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=me(null),i=me(!1);function s(h){i.value||(r.value=h)}function o(){r.value!==null&&(i.value=!0)}function a(){r.value=null,i.value=!1}const l=Se(()=>i.value&&r.value===(n.value.correctIndex??0));return(h,f)=>(G(),Y("div",{class:"quiz-element",style:He({width:"100%",height:"100%",background:n.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":n.value.accentColor||"#6c47ff"})},[d("p",{style:He({fontSize:"15px",fontWeight:600,color:n.value.questionColor||"#1a1a2e",lineHeight:1.4})},ve(n.value.question||"Question text…"),5),d("div",WO,[(G(!0),Y(Me,null,st(n.value.options||[],(p,m)=>(G(),Y("div",{key:m,class:je(["quiz-opt",r.value===m&&"selected",i.value&&m===n.value.correctIndex&&"correct",i.value&&r.value===m&&m!==n.value.correctIndex&&"wrong"]),onClick:v=>s(m)},[d("span",GO,ve(String.fromCharCode(65+m)),1),d("span",KO,ve(p),1)],10,HO))),128))]),i.value?(G(),Y("div",{key:0,class:je(["quiz-feedback",l.value?"correct":"wrong"])},[De(ve(l.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!l.value&&n.value.explanation?(G(),Y("span",QO,ve(n.value.explanation),1)):Pe("",!0)],2)):Pe("",!0),d("div",JO,[i.value?(G(),Y("button",{key:1,class:"quiz-btn secondary",onClick:a},"Try Again")):(G(),Y("button",{key:0,class:"quiz-btn primary",disabled:r.value===null,onClick:o},"Submit",8,YO))])],4))}},ZO=Bt(XO,[["__scopeId","data-v-ca2bd187"]]),eD={key:0,class:"canvas-empty"},tD={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},nD={key:0,class:"drop-hint"},rD={class:"canvas-info-bar"},iD=["disabled"],sD={class:"slide-index"},oD=["disabled"],aD={key:0},Aa=960,Ra=540,lD={__name:"EditorCanvas",setup(t){const e=An(),n=In(),r=me(null),i=me(null),s=me(1);lo("canvasScale",s);const o=Se(()=>n.getProject(e.projectId)),a=Se(()=>{var Z,Ie;return(Ie=(Z=o.value)==null?void 0:Z.slides)==null?void 0:Ie.find(oe=>oe.id===e.currentSlideId)}),l=Se(()=>{var Z;return[...((Z=o.value)==null?void 0:Z.slides)||[]].sort((Ie,oe)=>Ie.order-oe.order)}),h=Se(()=>l.value.findIndex(Z=>Z.id===e.currentSlideId)),f=Se(()=>{var Z;return[...((Z=a.value)==null?void 0:Z.elements)||[]].sort((Ie,oe)=>(Ie.zIndex||0)-(oe.zIndex||0))}),p=Se(()=>{const Z=a.value;return Z?Z.backgroundType==="gradient"&&Z.backgroundGradient?{background:Z.backgroundGradient}:Z.backgroundType==="image"&&Z.backgroundImage?{backgroundImage:`url(${Z.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:Z.background||"#fff"}:{background:"#fff"}}),m=Se(()=>`scale(${e.zoomLevel})`);function v(){if(!r.value)return;const{clientWidth:Z,clientHeight:Ie}=r.value,oe=(Z-80)/Aa,he=(Ie-80)/Ra;s.value=Math.min(oe,he)}let _=null;Go(()=>{v(),_=new ResizeObserver(v),r.value&&_.observe(r.value)}),Ko(()=>_==null?void 0:_.disconnect());const u=me({x:0,y:0}),w=me({x:0,y:0}),x=me(!1),R=me(!1),M=Se(()=>{if(!x.value)return null;const Z=Math.min(u.value.x,w.value.x),Ie=Math.min(u.value.y,w.value.y),oe=Math.abs(w.value.x-u.value.x),he=Math.abs(w.value.y-u.value.y);return{x:Z,y:Ie,width:oe,height:he}});function V(Z){!x.value&&(Z.target===i.value||Z.target===Z.currentTarget)&&e.clearSelection()}function L(Z){return Z?Array.from(Z.files||[]).some(Ie=>Ie.type.startsWith("image/")):!1}function F(Z,Ie,oe){if(!Z||!Z.type.startsWith("image/"))return;const he=new FileReader;he.onload=()=>{const pe=String(he.result||"");if(!pe)return;const Te=new Image;Te.onload=()=>{const Re=i.value.getBoundingClientRect(),q=(Ie-Re.left)/e.zoomLevel,K=(oe-Re.top)/e.zoomLevel,H=Math.min(420/Te.width,280/Te.height,1),N=Math.max(120,Math.round(Te.width*H)),D=Math.max(80,Math.round(Te.height*H)),j=Math.max(0,Math.min(Aa-N,Math.round(q-N/2))),z=Math.max(0,Math.min(Ra-D,Math.round(K-D/2))),A=n.addElement(e.projectId,e.currentSlideId,"image",{x:j,y:z,width:N,height:D,content:{src:pe,alt:Z.name,objectFit:"cover"}});A&&(e.selectElement(A.id),e.setActiveTool("select"),e.setRightPanel("properties"))},Te.src=pe},he.readAsDataURL(Z)}function C(Z){L(Z.dataTransfer)&&(Z.preventDefault(),Z.dataTransfer.dropEffect="copy",R.value=!0)}function E(Z){var Ie;(Ie=Z.currentTarget)!=null&&Ie.contains(Z.relatedTarget)||(R.value=!1)}function T(Z){if(!L(Z.dataTransfer))return;Z.preventDefault(),R.value=!1;const Ie=Array.from(Z.dataTransfer.files||[]).find(oe=>oe.type.startsWith("image/"));Ie&&F(Ie,Z.clientX,Z.clientY)}function P(Z){const Ie=e.activeTool;if(Z.target!==i.value&&Z.target!==Z.currentTarget)return;Z.preventDefault(),Z.stopPropagation();const oe=i.value.getBoundingClientRect(),he=(Z.clientX-oe.left)/e.zoomLevel,pe=(Z.clientY-oe.top)/e.zoomLevel;if(Ie==="select"){x.value=!0,u.value={x:he,y:pe},w.value={x:he,y:pe};const q=g=>{w.value={x:(g.clientX-oe.left)/e.zoomLevel,y:(g.clientY-oe.top)/e.zoomLevel}},K=()=>{window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",K);const g=M.value;if(g&&(g.width>2||g.height>2)){const Q=f.value.filter(H=>{const N=H.x,D=H.y,j=H.width||100,z=H.height||100;return N<g.x+g.width&&N+j>g.x&&D<g.y+g.height&&D+z>g.y}).map(H=>H.id);Q.length>0?e.setSelection(Q):e.clearSelection()}else e.clearSelection();setTimeout(()=>{x.value=!1},0)};window.addEventListener("mousemove",q),window.addEventListener("mouseup",K);return}const Te=q=>e.snapToGrid?Math.round(q/e.gridSize)*e.gridSize:q,Re=n.addElement(e.projectId,e.currentSlideId,Ie,{x:Te(he-75),y:Te(pe-40)});Re&&(e.selectElement(Re.id),e.setActiveTool("select"),e.setRightPanel("properties"))}const O=Se(()=>{if(!e.showGrid)return{};const Z=e.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${Z}px ${Z}px`}}),b={text:du,heading:du,image:IO,shape:kO,button:SO,hotspot:OO,video:UO,audio:qO,quiz:ZO,divider:"div"};function S(Z){return b[Z]||du}function I(Z){var Ie,oe;return Z.type!=="divider"?{}:{borderTop:`${((Ie=Z.content)==null?void 0:Ie.thickness)||2}px solid ${((oe=Z.content)==null?void 0:oe.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const J=me({show:!1,x:0,y:0,elId:null});function te(Z,Ie){Z.preventDefault(),J.value={show:!0,x:Z.clientX,y:Z.clientY,elId:Ie},e.selectElement(Ie),setTimeout(()=>window.addEventListener("click",$,{once:!0}),0)}function $(){J.value.show=!1}function de(){if(J.value.elId){const Z=n.duplicateElement(e.projectId,e.currentSlideId,J.value.elId);Z&&e.selectElement(Z.id)}$()}function ie(){J.value.elId&&(n.deleteElement(e.projectId,e.currentSlideId,J.value.elId),e.clearSelection()),$()}function Ee(){J.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,J.value.elId,"up"),$()}function re(){J.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,J.value.elId,"down"),$()}function ee(){const Z=h.value,Ie=n.addSlide(e.projectId,Z);Ie&&e.setCurrentSlide(Ie.id)}function Ce(){const Z=h.value;Z>0&&e.setCurrentSlide(l.value[Z-1].id)}function we(){const Z=h.value;Z<l.value.length-1&&e.setCurrentSlide(l.value[Z+1].id)}return(Z,Ie)=>{var oe;return G(),Y("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:r},[a.value?(G(),Y(Me,{key:1},[d("div",{class:"canvas-zoom-wrapper",style:He({transform:m.value,transformOrigin:"center center",transition:"transform .15s ease"})},[d("div",{ref_key:"canvasRef",ref:i,class:"slide-canvas",style:He({width:Aa+"px",height:Ra+"px",...p.value,...O.value}),onClick:V,onMousedown:P,onDragover:C,onDragleave:E,onDrop:T,onContextmenu:Ie[0]||(Ie[0]=Wt(()=>{},["prevent"]))},[(G(!0),Y(Me,null,st(f.value,he=>(G(),St(vO,{key:he.id,element:he,onContextmenu:Wt(pe=>te(pe,he.id),["stop"])},{default:kt(()=>[(G(),St(iv(S(he.type)),{element:he,style:He(he.type==="divider"?I(he):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),xe(e).activeTool!=="select"||R.value?(G(),Y("div",nD,ve(R.value?"Drop image to insert it on this slide":`Click anywhere to add ${xe(e).activeTool}`),1)):Pe("",!0),x.value&&M.value?(G(),Y("div",{key:1,class:"selection-marquee",style:He({left:M.value.x+"px",top:M.value.y+"px",width:M.value.width+"px",height:M.value.height+"px"})},null,4)):Pe("",!0)],36)],4),d("div",rD,[d("button",{class:"bar-btn",onClick:ee},"Add page"),d("button",{class:"bar-btn icon",onClick:Ce,disabled:h.value<=0},"◀",8,iD),d("span",sD,ve(h.value+1)+" / "+ve(l.value.length),1),d("button",{class:"bar-btn icon",onClick:we,disabled:h.value>=l.value.length-1},"▶",8,oD),d("span",null,ve(Aa)+" × "+ve(Ra)+"px"),Ie[4]||(Ie[4]=d("span",null,"·",-1)),d("span",null,ve(((oe=a.value.elements)==null?void 0:oe.length)||0)+" elements",1),xe(e).hasSelection?(G(),Y("span",aD,"· "+ve(xe(e).selectedElementIds.length)+" selected",1)):Pe("",!0),d("button",{class:"bar-btn ai",onClick:Ie[1]||(Ie[1]=he=>xe(e).setRightPanel("ai"))},"AI")])],64)):(G(),Y("div",eD,[(G(),Y("svg",tD,[...Ie[2]||(Ie[2]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),Ie[3]||(Ie[3]=d("p",null,"Select a slide to start editing",-1))])),(G(),St(yd,{to:"body"},[J.value.show?(G(),Y("div",{key:0,class:"ctx-menu",style:He({left:J.value.x+"px",top:J.value.y+"px"})},[d("button",{class:"ctx-item",onClick:de},"Duplicate"),d("button",{class:"ctx-item",onClick:Ee},"Bring Forward"),d("button",{class:"ctx-item",onClick:re},"Send Backward"),Ie[5]||(Ie[5]=d("div",{class:"ctx-divider"},null,-1)),d("button",{class:"ctx-item danger",onClick:ie},"Delete")],4)):Pe("",!0)]))],512)}}},cD=Bt(lD,[["__scopeId","data-v-47ef6b03"]]),uD={class:"ai-panel"},dD={class:"ai-mode-tabs"},hD=["onClick"],fD={class:"ai-content"},pD={class:"form-group"},mD={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},gD={key:0,class:"form-group"},vD={key:1,class:"form-group"},yD={class:"form-group"},_D={class:"form-group"},bD={class:"prompt-label-row"},wD={key:1,class:"prompt-auto-badge"},ED={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},ID=["disabled"],TD={key:0,class:"spinner"},CD={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},xD={key:3,class:"creative-options-wrap"},kD={class:"result-header"},SD={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},AD={key:1,class:"creative-options-list"},RD={class:"creative-title"},PD={class:"creative-angle"},ND=["onClick"],OD={class:"form-group"},DD={class:"quiz-config-row"},MD={class:"form-group",style:{flex:"1"}},VD={class:"form-group",style:{flex:"1"}},LD={class:"form-group"},$D={class:"qtype-btns"},FD=["onClick"],UD={class:"qtype-icon"},zD={class:"form-group"},BD={class:"form-group"},jD={class:"prompt-label-row"},qD={key:1,class:"prompt-auto-badge"},WD=["disabled"],HD={key:0,class:"spinner"},GD={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},KD={key:0,class:"quiz-results"},QD={class:"quiz-results-header"},JD={class:"form-label"},YD={class:"quiz-header-actions"},XD={class:"regen-row"},ZD=["disabled"],e8={key:0,class:"spinner spinner-sm"},t8={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},n8=["disabled"],r8={class:"quiz-card-header"},i8={class:"quiz-card-check"},s8=["onUpdate:modelValue"],o8={class:"q-num"},a8={class:"q-badges"},l8={class:"badge type-badge"},c8={class:"q-question"},u8={class:"q-options"},d8={class:"q-option-letter"},h8={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},f8={key:0,class:"q-explanation"},p8=["disabled"],m8={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},g8=["disabled"],v8={key:0,class:"spinner"},y8={key:0,class:"selected-text-preview"},_8={class:"text-preview"},b8={key:1,class:"ai-hint"},w8={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},E8=["disabled"],I8={key:0,class:"spinner"},T8={key:0,class:"selected-text-preview"},C8={class:"text-preview"},x8={key:1,class:"ai-hint"},k8={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},S8=["disabled"],A8={key:0,class:"spinner"},R8={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},P8={class:"result-header"},N8={class:"result-actions"},O8=["disabled"],D8={class:"textarea result-display"},M8={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},V8=["disabled"],L8={key:0,class:"spinner"},$8={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},F8={class:"textarea result-display",style:{color:"var(--color-primary)"}},U8={key:6,class:"ai-settings"},z8={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},B8=["value"],j8={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},q8=["value"],W8={key:0,class:"demo-notice"},H8={key:7,class:"result-area"},G8={class:"result-header"},K8={class:"result-pre"},Q8={class:"result-actions"},J8=["disabled"],Y8={key:8,class:"ai-error"},X8={__name:"AIAssistant",setup(t){const e=W_(),n=An(),r=In(),i=me("generate"),s=me(""),o=me(""),a=me("");rn(i,()=>{a.value=""});const l=me(4),h=me("general"),f=me("Spanish"),p=me(""),m=me(""),v=me(""),_=me(!1),u=me("single"),w=me(5),x=me("slide"),R=me([]),M=me(""),V=Se(()=>{const z=o.value.trim()||"[your topic]";if(u.value==="deck"){let X=`Create a complete ${w.value}-slide learning deck about "${z}".`;return m.value.trim()&&(X+=`
Additional context: ${m.value.trim()}`),X+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,X+=`
Make each slide distinct, logically sequenced, and specific to "${z}".`,X}let W=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[h.value]||"educational slide"} about "${z}".`;return m.value.trim()&&(W+=`
Additional context: ${m.value.trim()}`),W+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${z}" — no generic placeholders.`,W});rn(V,z=>{_.value||(v.value=z)},{immediate:!0});function L(){v.value=V.value,_.value=!1}const F=me(""),C=me("intermediate"),E=me("multiple-choice"),T=me(""),P=me([]),O=me(""),b=me(!1),S=Se(()=>{const z=F.value.trim()||"[your topic]",A={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},W={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let X=`Generate ${l.value} ${A[C.value]} ${W[E.value]} quiz questions about "${z}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return T.value.trim()&&(X+=`
Learning objective: ${T.value.trim()}`),X});rn(S,z=>{b.value||(O.value=z)},{immediate:!0});function I(){O.value=S.value,b.value=!1}const J=Se(()=>r.getProject(n.projectId)),te=Se(()=>{var z,A;return(A=(z=J.value)==null?void 0:z.slides)==null?void 0:A.find(W=>W.id===n.currentSlideId)}),$=Se(()=>{var z,A;return n.selectedElementId?(A=(z=te.value)==null?void 0:z.elements)==null?void 0:A.find(W=>W.id===n.selectedElementId):null});async function de(){if(!o.value.trim()&&!v.value.trim())return;if(a.value="",R.value=[],M.value="",u.value==="deck"){const A=await e.generateSlideDeck(o.value,w.value,{objective:m.value,customPrompt:v.value});if(A!=null&&A.length){const W=A.map(X=>ie(X));a.value=JSON.stringify({slides:W},null,2),Ce(W,{replaceGenerated:!0})}return}if(x.value==="options"){await Ie();return}const z=await e.generateSlideContent(o.value,h.value,m.value,v.value);if(z){const A=ie(z);a.value=JSON.stringify(A,null,2),we(A,{replaceGenerated:!0})}}function ie(z){const A=z&&typeof z=="object"?z:{},X=(Array.isArray(A.bullets)?A.bullets:typeof A.bullets=="string"?A.bullets.split(`
`):[]).map(se=>String(se||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(A.title||o.value||"Untitled Slide").trim(),subtitle:String(A.subtitle||"").trim(),bullets:X,callout:String(A.callout||"").trim()}}function Ee(z,A){var se,le,_e;const W=(le=(se=r.getProject(z))==null?void 0:se.slides)==null?void 0:le.find(Ae=>Ae.id===A);if(!((_e=W==null?void 0:W.elements)!=null&&_e.length))return;W.elements.filter(Ae=>{var ce;return((ce=Ae.meta)==null?void 0:ce.source)==="ai-content"}).map(Ae=>Ae.id).forEach(Ae=>{r.deleteElement(z,A,Ae)})}function re(z,A,W,X){return r.addElement(z,A,W,{...X,meta:{...X.meta||{},source:"ai-content"}})}function ee(z,A,W,{replaceGenerated:X=!1}={}){var se;if(!(!z||!A)){if(X&&Ee(z,A),W.title&&(r.updateSlide(z,A,{title:W.title}),re(z,A,"heading",{x:60,y:40,width:840,height:80,content:{text:W.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),W.subtitle&&re(z,A,"text",{x:60,y:130,width:840,height:50,content:{text:W.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(se=W.bullets)!=null&&se.length){const le=W.bullets.map(_e=>`• ${_e}`).join(`
`);re(z,A,"text",{x:60,y:W.subtitle?200:150,width:840,height:200,content:{text:le,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}W.callout&&(re(z,A,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),re(z,A,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${W.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function Ce(z,{replaceGenerated:A=!1}={}){if(!n.currentSlideId)return;const W=n.projectId;if(!W||!Array.isArray(z)||!z.length)return;z.map(se=>ie(se)).forEach(se=>{const le=r.addSlide(W);le&&ee(W,le.id,se,{replaceGenerated:A})})}function we(z=null,{replaceGenerated:A=!1}={}){if(!n.currentSlideId)return;let W=z;if(!W){if(!a.value)return;try{W=JSON.parse(a.value)}catch(_e){console.warn("Could not parse AI content:",_e);return}}const X=ie(W),se=n.projectId,le=n.currentSlideId;!se||!le||ee(se,le,X,{replaceGenerated:A})}function Z(){if(a.value){if(u.value==="deck"){try{const z=JSON.parse(a.value),A=Array.isArray(z)?z:z==null?void 0:z.slides;if(!Array.isArray(A)||!A.length)return;Ce(A,{replaceGenerated:!0})}catch{return}return}we()}}async function Ie(){const z=o.value.trim()||"[your topic]",A=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${h.value}" slide about "${z}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,W=await e.generate(A,{type:"creativeOptions",topic:z,slideType:h.value});if(W)try{const X=JSON.parse(W.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(X))throw new Error("Options must be an array");R.value=X.slice(0,3).map((se,le)=>({title:String((se==null?void 0:se.title)||`Option ${le+1}`),angle:String((se==null?void 0:se.angle)||""),prompt:String((se==null?void 0:se.prompt)||"")})).filter(se=>se.prompt.trim()),R.value.length||(M.value="No usable creative options were returned. Try generating again.")}catch{M.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function oe(z){z!=null&&z.prompt&&(v.value=z.prompt,_.value=!0,x.value="slide",await de())}async function he(z=!1){if(!F.value.trim()&&!O.value.trim())return;z||(P.value=[]);const A=await e.generateQuiz(F.value,l.value,{difficulty:C.value,questionType:E.value,objective:T.value,customPrompt:O.value});if(A)if(z){const W=new Set(P.value.map(se=>se.question)),X=A.filter(se=>!W.has(se.question)).map(se=>({...se,_selected:!0}));P.value=[...P.value,...X]}else P.value=A.map(W=>({...W,_selected:!0}))}async function pe(){const z=P.value.filter(W=>W._selected);if(!z.length)return;const A=n.projectId;z.forEach((W,X)=>{const se=r.addSlide(A);se&&(r.addElement(A,se.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:W.question,options:W.options,correctIndex:W.correctIndex,explanation:W.explanation||""}}),r.updateSlide(A,se.id,{title:`Q${X+1}: ${W.question.slice(0,40)}…`}))}),P.value=[]}function Te(z){P.value.forEach(A=>A._selected=z)}async function Re(){if(!p.value.trim())return;const z=await e.generateVoiceoverScript(p.value);z&&(a.value=z)}async function q(){var W,X;const z=(X=(W=$.value)==null?void 0:W.content)==null?void 0:X.text;if(!z)return;const A=await e.generateTranslation(z,f.value);A&&(a.value=A)}async function K(){!a.value||!$.value||r.updateElement(n.projectId,n.currentSlideId,$.value.id,{content:{...$.value.content,text:a.value}})}const g=me(""),Q=me(!1);async function H(){if(g.value.trim()){Q.value=!0,a.value="Optimizing prompt...";try{let z=g.value;const A=await e.generateImagePrompt(g.value);A&&(z=A.replace(/```(json)?\n?/g,"").trim()),a.value="Painting image... this takes about 10-20 seconds. Please wait.";const W=Math.floor(Math.random()*1e6),X=`https://image.pollinations.ai/prompt/${encodeURIComponent(z)}?width=600&height=400&nologo=true&seed=${W}`;await new Promise((se,le)=>{const _e=new Image;_e.onload=se,_e.onerror=le,_e.src=X}),r.addElement(n.projectId,n.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:X,objectFit:"cover"}}),a.value="Image added to slide!"}catch{a.value="Failed to generate image. Try a different prompt."}finally{Q.value=!1}}}async function N(){var A,W;if(!((W=(A=$.value)==null?void 0:A.content)!=null&&W.text))return;const z=await e.improveText($.value.content.text,s.value||"Make it clearer and more engaging");z&&(a.value=z)}async function D(){!a.value||!$.value||r.updateElement(n.projectId,n.currentSlideId,$.value.id,{content:{...$.value.content,text:a.value}})}async function j(){if(!s.value.trim())return;const z=await e.generate(s.value);z&&(a.value=z)}return(z,A)=>{var W,X,se,le,_e,Ae;return G(),Y("div",uD,[d("div",dD,[(G(),Y(Me,null,st([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],ce=>d("button",{key:ce.id,class:je(["ai-mode-btn",i.value===ce.id&&"active"]),onClick:We=>i.value=ce.id},ve(ce.label),11,hD)),64))]),d("div",fD,[i.value==="generate"?(G(),Y(Me,{key:0},[d("div",pD,[A[34]||(A[34]=d("label",{class:"form-label"},[De("Topic / Subject "),d("span",{class:"required"},"*")],-1)),Ye(d("input",{"onUpdate:modelValue":A[0]||(A[0]=ce=>o.value=ce),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:xu(de,["enter"])},null,544),[[pt,o.value]])]),d("div",mD,[d("button",{class:je(["output-mode-btn",u.value==="single"&&"active"]),onClick:A[1]||(A[1]=ce=>u.value="single")},"Single Slide",2),d("button",{class:je(["output-mode-btn",u.value==="deck"&&"active"]),onClick:A[2]||(A[2]=ce=>u.value="deck")},"Slide Deck",2)]),u.value==="single"?(G(),Y("div",gD,[A[36]||(A[36]=d("label",{class:"form-label"},"Slide Type",-1)),Ye(d("select",{"onUpdate:modelValue":A[3]||(A[3]=ce=>h.value=ce),class:"select"},[...A[35]||(A[35]=[cn('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[Gr,h.value]])])):(G(),Y("div",vD,[A[37]||(A[37]=d("label",{class:"form-label"},"Number of Slides",-1)),Ye(d("input",{"onUpdate:modelValue":A[4]||(A[4]=ce=>w.value=ce),class:"input",type:"number",min:"1",max:"20"},null,512),[[pt,w.value,void 0,{number:!0}]]),A[38]||(A[38]=d("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),d("div",yD,[A[39]||(A[39]=d("label",{class:"form-label"},[De("Description "),d("span",{class:"optional"},"(optional)")],-1)),Ye(d("textarea",{"onUpdate:modelValue":A[5]||(A[5]=ce=>m.value=ce),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[pt,m.value]])]),d("div",_D,[d("div",bD,[A[41]||(A[41]=d("label",{class:"form-label"},"AI Prompt",-1)),_.value?(G(),Y("button",{key:0,class:"prompt-reset-btn",onClick:L,title:"Reset to auto-generated prompt"},[...A[40]||(A[40]=[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),De(" Reset ",-1)])])):(G(),Y("span",wD,"auto"))]),Ye(d("textarea",{"onUpdate:modelValue":A[6]||(A[6]=ce=>v.value=ce),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:A[7]||(A[7]=ce=>_.value=!0),spellcheck:"false"},null,544),[[pt,v.value]]),A[42]||(A[42]=d("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),u.value==="single"?(G(),Y("div",ED,[d("button",{class:je(["output-mode-btn",x.value==="slide"&&"active"]),onClick:A[8]||(A[8]=ce=>x.value="slide")},"Show on Slide",2),d("button",{class:je(["output-mode-btn",x.value==="options"&&"active"]),onClick:A[9]||(A[9]=ce=>x.value="options")},"Creative Options",2)])):Pe("",!0),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:xe(e).isGenerating||!o.value.trim()&&!v.value.trim()||u.value==="deck"&&(!w.value||w.value<1||w.value>20),onClick:de},[xe(e).isGenerating?(G(),Y("span",TD)):(G(),Y("svg",CD,[...A[43]||(A[43]=[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),De(" "+ve(xe(e).isGenerating?"Generating…":u.value==="deck"?a.value?`Regenerate ${w.value} Slides`:`Generate ${w.value} Slides`:x.value==="slide"?a.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,ID),u.value==="single"&&x.value==="options"&&(R.value.length||M.value)?(G(),Y("div",xD,[d("div",kD,[A[44]||(A[44]=d("span",{class:"form-label"},"Creative Options",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:A[10]||(A[10]=ce=>{R.value=[],M.value=""})},"Clear")]),M.value?(G(),Y("div",SD,[A[45]||(A[45]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),De(" "+ve(M.value),1)])):(G(),Y("div",AD,[(G(!0),Y(Me,null,st(R.value,(ce,We)=>(G(),Y("article",{key:We,class:"creative-option-card"},[d("h4",RD,ve(ce.title),1),d("p",PD,ve(ce.angle),1),d("button",{class:"btn btn-secondary btn-sm",onClick:it=>oe(ce)},"Use This Option",8,ND)]))),128))]))])):Pe("",!0)],64)):i.value==="quiz"?(G(),Y(Me,{key:1},[d("div",OD,[A[46]||(A[46]=d("label",{class:"form-label"},[De("Quiz Topic "),d("span",{class:"required"},"*")],-1)),Ye(d("input",{"onUpdate:modelValue":A[11]||(A[11]=ce=>F.value=ce),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:xu(he,["enter"])},null,544),[[pt,F.value]])]),d("div",DD,[d("div",MD,[A[48]||(A[48]=d("label",{class:"form-label"},"Questions",-1)),Ye(d("select",{"onUpdate:modelValue":A[12]||(A[12]=ce=>l.value=ce),class:"select"},[...A[47]||(A[47]=[d("option",{value:2},"2",-1),d("option",{value:3},"3",-1),d("option",{value:4},"4",-1),d("option",{value:5},"5",-1),d("option",{value:6},"6",-1),d("option",{value:8},"8",-1),d("option",{value:10},"10",-1)])],512),[[Gr,l.value,void 0,{number:!0}]])]),d("div",VD,[A[50]||(A[50]=d("label",{class:"form-label"},"Difficulty",-1)),Ye(d("select",{"onUpdate:modelValue":A[13]||(A[13]=ce=>C.value=ce),class:"select"},[...A[49]||(A[49]=[d("option",{value:"beginner"},"Beginner",-1),d("option",{value:"intermediate"},"Intermediate",-1),d("option",{value:"advanced"},"Advanced",-1)])],512),[[Gr,C.value]])])]),d("div",LD,[A[51]||(A[51]=d("label",{class:"form-label"},"Question Type",-1)),d("div",$D,[(G(),Y(Me,null,st([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],ce=>d("button",{key:ce.id,class:je(["qtype-btn",E.value===ce.id&&"active"]),onClick:We=>E.value=ce.id},[d("span",UD,ve(ce.icon),1),d("span",null,ve(ce.label),1)],10,FD)),64))])]),d("div",zD,[A[52]||(A[52]=d("label",{class:"form-label"},[De("Learning Objective "),d("span",{class:"optional"},"(optional)")],-1)),Ye(d("input",{"onUpdate:modelValue":A[14]||(A[14]=ce=>T.value=ce),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[pt,T.value]])]),d("div",BD,[d("div",jD,[A[54]||(A[54]=d("label",{class:"form-label"},"AI Prompt",-1)),b.value?(G(),Y("button",{key:0,class:"prompt-reset-btn",onClick:I,title:"Reset to auto-generated prompt"},[...A[53]||(A[53]=[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),De(" Reset ",-1)])])):(G(),Y("span",qD,"auto"))]),Ye(d("textarea",{"onUpdate:modelValue":A[15]||(A[15]=ce=>O.value=ce),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:A[16]||(A[16]=ce=>b.value=!0),spellcheck:"false"},null,544),[[pt,O.value]]),A[55]||(A[55]=d("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:xe(e).isGenerating||!F.value.trim()&&!O.value.trim(),onClick:A[17]||(A[17]=ce=>he(!1))},[xe(e).isGenerating?(G(),Y("span",HD)):(G(),Y("svg",GD,[...A[56]||(A[56]=[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),De(" "+ve(xe(e).isGenerating?"Generating…":`Generate ${l.value} Questions`),1)],8,WD),P.value.length?(G(),Y("div",KD,[d("div",QD,[d("span",JD,ve(P.value.length)+" Questions",1),d("div",YD,[d("button",{class:"btn btn-ghost btn-sm",onClick:A[18]||(A[18]=ce=>Te(!0))},"All"),d("button",{class:"btn btn-ghost btn-sm",onClick:A[19]||(A[19]=ce=>Te(!1))},"None"),d("button",{class:"btn btn-ghost btn-sm danger",onClick:A[20]||(A[20]=ce=>P.value=[])},"Clear")])]),d("div",XD,[d("button",{class:"btn btn-secondary regen-btn",disabled:xe(e).isGenerating,onClick:A[21]||(A[21]=ce=>he(!1)),title:"Replace all questions with a new set"},[xe(e).isGenerating?(G(),Y("span",e8)):(G(),Y("svg",t8,[...A[57]||(A[57]=[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),d("path",{d:"M3 3v5h5"},null,-1)])])),A[58]||(A[58]=De(" Regenerate ",-1))],8,ZD),d("button",{class:"btn btn-ghost regen-btn",disabled:xe(e).isGenerating,onClick:A[22]||(A[22]=ce=>he(!0)),title:"Generate more and append to current list"},[...A[59]||(A[59]=[d("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),De(" Add More ",-1)])],8,n8)]),(G(!0),Y(Me,null,st(P.value,(ce,We)=>(G(),Y("div",{key:We,class:je(["quiz-card",{deselected:!ce._selected}])},[d("div",r8,[d("label",i8,[Ye(d("input",{type:"checkbox","onUpdate:modelValue":it=>ce._selected=it},null,8,s8),[[Av,ce._selected]]),d("span",o8,"Q"+ve(We+1),1)]),d("div",a8,[d("span",{class:je(["badge difficulty-badge",ce.difficulty])},ve(ce.difficulty),3),d("span",l8,ve(ce.type==="true-false"?"T/F":"MCQ"),1)])]),d("p",c8,ve(ce.question),1),d("div",u8,[(G(!0),Y(Me,null,st(ce.options,(it,Qe)=>(G(),Y("div",{key:Qe,class:je(["q-option",Qe===ce.correctIndex&&"correct"])},[d("span",d8,ve(["A","B","C","D"][Qe]),1),d("span",null,ve(it),1),Qe===ce.correctIndex?(G(),Y("svg",h8,[...A[60]||(A[60]=[d("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):Pe("",!0)],2))),128))]),ce.explanation?(G(),Y("div",f8,[A[61]||(A[61]=d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),De(" "+ve(ce.explanation),1)])):Pe("",!0)],2))),128)),d("button",{class:"btn btn-primary w-full",disabled:!P.value.filter(ce=>ce._selected).length,onClick:pe},[A[62]||(A[62]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),De(" Add "+ve(P.value.filter(ce=>ce._selected).length)+" Selected as Quiz Slides ",1)],8,p8)])):Pe("",!0)],64)):i.value==="voiceover"?(G(),Y(Me,{key:2},[d("div",m8,[A[63]||(A[63]=d("label",{class:"form-label"},"Slide Content / Key Points",-1)),Ye(d("textarea",{"onUpdate:modelValue":A[23]||(A[23]=ce=>p.value=ce),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[pt,p.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:xe(e).isGenerating,onClick:Re},[xe(e).isGenerating?(G(),Y("span",v8)):Pe("",!0),De(" "+ve(xe(e).isGenerating?"Generating…":"Generate Script"),1)],8,g8)],64)):i.value==="improve"?(G(),Y(Me,{key:3},[(X=(W=$.value)==null?void 0:W.content)!=null&&X.text?(G(),Y("div",y8,[A[64]||(A[64]=d("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),d("div",_8,ve($.value.content.text.slice(0,120))+ve($.value.content.text.length>120?"…":""),1)])):(G(),Y("p",b8,"Select a text element on the canvas to improve it.")),d("div",w8,[A[65]||(A[65]=d("label",{class:"form-label"},"Instruction",-1)),Ye(d("input",{"onUpdate:modelValue":A[24]||(A[24]=ce=>s.value=ce),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[pt,s.value]])]),A[66]||(A[66]=d("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),Ye(d("textarea",{"onUpdate:modelValue":A[25]||(A[25]=ce=>s.value=ce),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[pt,s.value]]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:xe(e).isGenerating||!$.value&&!s.value,onClick:A[26]||(A[26]=ce=>$.value?N():j())},[xe(e).isGenerating?(G(),Y("span",I8)):Pe("",!0),De(" "+ve(xe(e).isGenerating?"Processing…":"Generate"),1)],8,E8)],64)):i.value==="translate"?(G(),Y(Me,{key:4},[(le=(se=$.value)==null?void 0:se.content)!=null&&le.text?(G(),Y("div",T8,[A[67]||(A[67]=d("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),d("div",C8,ve($.value.content.text.slice(0,120))+ve($.value.content.text.length>120?"…":""),1)])):(G(),Y("p",x8,"Select a text element on the canvas to translate it.")),d("div",k8,[A[69]||(A[69]=d("label",{class:"form-label"},"Target Language",-1)),Ye(d("select",{"onUpdate:modelValue":A[27]||(A[27]=ce=>f.value=ce),class:"select"},[...A[68]||(A[68]=[cn('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[Gr,f.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:xe(e).isGenerating||!((Ae=(_e=$.value)==null?void 0:_e.content)!=null&&Ae.text),onClick:q},[xe(e).isGenerating?(G(),Y("span",A8)):Pe("",!0),De(" "+ve(xe(e).isGenerating?"Translating…":"Translate Text"),1)],8,S8),a.value?(G(),Y("div",R8,[d("div",P8,[A[70]||(A[70]=d("span",{class:"form-label"},"Translation Result",-1)),d("div",N8,[d("button",{class:"btn btn-ghost btn-sm",onClick:A[28]||(A[28]=ce=>z.navigator.clipboard.writeText(a.value))},"Copy"),d("button",{class:"btn btn-primary btn-sm",onClick:K,disabled:!$.value},"Apply",8,O8)])]),d("div",D8,ve(a.value),1)])):Pe("",!0)],64)):i.value==="image"?(G(),Y(Me,{key:5},[A[73]||(A[73]=d("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),d("div",M8,[A[71]||(A[71]=d("label",{class:"form-label"},"Image Description",-1)),Ye(d("textarea",{"onUpdate:modelValue":A[29]||(A[29]=ce=>g.value=ce),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[pt,g.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Q.value||xe(e).isGenerating||!g.value,onClick:H},[Q.value||xe(e).isGenerating?(G(),Y("span",L8)):Pe("",!0),De(" "+ve(Q.value||xe(e).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,V8),a.value?(G(),Y("div",$8,[A[72]||(A[72]=d("div",{class:"result-header"},[d("span",{class:"form-label"},"Status")],-1)),d("div",F8,ve(a.value),1)])):Pe("",!0)],64)):i.value==="settings"?(G(),Y("div",U8,[d("div",z8,[A[75]||(A[75]=d("label",{class:"form-label"},"AI Provider",-1)),d("select",{value:xe(e).apiProvider,class:"select",onChange:A[30]||(A[30]=ce=>xe(e).setProvider(ce.target.value))},[...A[74]||(A[74]=[d("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),d("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,B8)]),d("div",j8,[A[76]||(A[76]=d("label",{class:"form-label"},"API Key",-1)),d("input",{type:"password",value:xe(e).apiKey,class:"input",placeholder:"sk-…",onChange:A[31]||(A[31]=ce=>xe(e).setApiKey(ce.target.value))},null,40,q8),A[77]||(A[77]=d("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),xe(e).apiKey?Pe("",!0):(G(),Y("div",W8,[...A[78]||(A[78]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),De(" Running in ",-1),d("strong",null,"demo mode",-1),De(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):Pe("",!0),a.value&&i.value!=="settings"&&i.value!=="quiz"?(G(),Y("div",H8,[d("div",G8,[A[79]||(A[79]=d("span",{class:"form-label"},"Result",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:A[32]||(A[32]=ce=>a.value="")},"Clear")]),d("pre",K8,ve(a.value),1),d("div",Q8,[i.value==="generate"?(G(),Y("button",{key:0,class:"btn btn-primary btn-sm",onClick:Z},ve(u.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):Pe("",!0),i.value==="generate"?(G(),Y("button",{key:1,class:"btn btn-ghost btn-sm",disabled:xe(e).isGenerating,onClick:de},[...A[80]||(A[80]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),De(" Regenerate ",-1)])],8,J8)):Pe("",!0),i.value==="improve"&&$.value?(G(),Y("button",{key:2,class:"btn btn-primary btn-sm",onClick:D}," Apply to Element ")):Pe("",!0),d("button",{class:"btn btn-secondary btn-sm",onClick:A[33]||(A[33]=ce=>{var We;return(We=z.navigator.clipboard)==null?void 0:We.writeText(a.value)})}," Copy ")])])):Pe("",!0),xe(e).lastError?(G(),Y("div",Y8,[A[81]||(A[81]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),De(" "+ve(xe(e).lastError),1)])):Pe("",!0)])])}}},Z8=Bt(X8,[["__scopeId","data-v-697ec3ea"]]),eM={class:"theme-manager"},tM={class:"panel-section"},nM={class:"presets-grid"},rM=["title","onClick"],iM={class:"preset-preview"},sM={class:"preset-name"},oM={class:"panel-section"},aM={class:"theme-fields"},lM={class:"form-label"},cM={class:"color-row"},uM=["value","onInput"],dM=["value","onChange"],hM={class:"panel-section"},fM={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},pM=["value"],mM=["value"],gM={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vM=["value"],yM=["value"],_M={class:"form-group"},bM=["value"],wM={class:"panel-section"},EM={key:0,class:"apply-message success"},IM={key:1,class:"apply-message error"},TM={__name:"ThemeManager",setup(t){const e=An(),n=In(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var v;return((v=r.value)==null?void 0:v.theme)||{}}),s=me(""),o=me("");function a(v){n.updateProject(e.projectId,{theme:{...i.value,...v}})}const l=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],h=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function f(v){a(v)}function p(v,_){const u=v.content||{};return v.type==="text"?{content:{...u,fontFamily:_.fontFamily||u.fontFamily,color:_.textColor||u.color}}:v.type==="heading"?{content:{...u,fontFamily:_.headingFont||_.fontFamily||u.fontFamily,color:_.textColor||u.color}}:v.type==="shape"?{content:{...u,fillColor:_.secondaryColor||u.fillColor}}:v.type==="hotspot"?{content:{...u,bgColor:_.primaryColor||u.bgColor}}:v.type==="button"?{content:{...u,bgColor:_.primaryColor||u.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:_.fontFamily||u.fontFamily}}:v.type==="quiz"?{content:{...u,cardBgColor:_.bgColor||u.cardBgColor,questionColor:_.textColor||u.questionColor,accentColor:_.primaryColor||u.accentColor}}:null}function m(){s.value="",o.value="";const v=e.projectId,_=r.value,u=i.value;if(!v||!_){o.value="No active project to apply theme.";return}const w=_.slides||[];let x=0;w.forEach(R=>{(R.backgroundType||"color")==="color"&&n.updateSlide(v,R.id,{backgroundType:"color",background:u.bgColor||R.background||"#ffffff"}),(R.elements||[]).forEach(M=>{const V=p(M,u);V&&(n.updateElement(v,R.id,M.id,V),x+=1)})}),s.value=`Applied theme to ${w.length} slide${w.length===1?"":"s"} and ${x} element${x===1?"":"s"}.`}return(v,_)=>(G(),Y("div",eM,[d("div",tM,[_[3]||(_[3]=d("div",{class:"panel-title"},"Preset Themes",-1)),d("div",nM,[(G(),Y(Me,null,st(l,u=>d("div",{key:u.name,class:"preset-card",title:u.name,onClick:w=>f(u)},[d("div",iM,[d("div",{class:"pp-header",style:He({background:u.primaryColor})},null,4),d("div",{class:"pp-body",style:He({background:u.bgColor})},[d("div",{class:"pp-line",style:He({background:u.textColor,opacity:.7})},null,4),d("div",{class:"pp-line",style:He({background:u.textColor,opacity:.4,width:"60%"})},null,4)],4),d("div",{class:"pp-accent",style:He({background:u.secondaryColor})},null,4)]),d("span",sM,ve(u.name),1)],8,rM)),64))])]),d("div",oM,[_[4]||(_[4]=d("div",{class:"panel-title"},"Colors",-1)),d("div",aM,[(G(),Y(Me,null,st({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(u,w)=>d("div",{class:"theme-field",key:w},[d("label",lM,ve(u),1),d("div",cM,[d("input",{type:"color",value:i.value[w]||"#ffffff",class:"color-input-native",onInput:x=>a({[w]:x.target.value})},null,40,uM),d("input",{value:i.value[w]||"",class:"input",onChange:x=>a({[w]:x.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,dM)])])),64))])]),d("div",hM,[_[8]||(_[8]=d("div",{class:"panel-title"},"Typography",-1)),d("div",fM,[_[5]||(_[5]=d("label",{class:"form-label"},"Heading Font",-1)),d("select",{value:i.value.headingFont||"Inter, sans-serif",class:"select",onChange:_[0]||(_[0]=u=>a({headingFont:u.target.value}))},[(G(),Y(Me,null,st(h,u=>d("option",{key:u.value,value:u.value},ve(u.label),9,mM)),64))],40,pM)]),d("div",gM,[_[6]||(_[6]=d("label",{class:"form-label"},"Body Font",-1)),d("select",{value:i.value.fontFamily||"Inter, sans-serif",class:"select",onChange:_[1]||(_[1]=u=>a({fontFamily:u.target.value}))},[(G(),Y(Me,null,st(h,u=>d("option",{key:u.value,value:u.value},ve(u.label),9,yM)),64))],40,vM)]),d("div",_M,[_[7]||(_[7]=d("label",{class:"form-label"},"Base Font Size",-1)),d("input",{type:"number",min:"12",max:"24",value:i.value.fontSize||16,class:"input",onChange:_[2]||(_[2]=u=>a({fontSize:+u.target.value}))},null,40,bM)])]),d("div",wM,[_[9]||(_[9]=d("div",{class:"panel-title"},"Preview",-1)),d("div",{class:"theme-preview",style:He({background:i.value.bgColor||"#fff",fontFamily:i.value.fontFamily||"Inter, sans-serif"})},[d("div",{class:"tp-heading",style:He({color:i.value.textColor,fontFamily:i.value.headingFont||i.value.fontFamily})}," Heading Text ",4),d("div",{class:"tp-body",style:He({color:i.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),d("div",{class:"tp-btn",style:He({background:i.value.primaryColor})},"Button",4),d("div",{class:"tp-badge",style:He({background:i.value.secondaryColor})},"Badge",4)],4),d("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:m}," Apply Theme to Slides "),s.value?(G(),Y("p",EM,ve(s.value),1)):Pe("",!0),o.value?(G(),Y("p",IM,ve(o.value),1)):Pe("",!0)])]))}},CM=Bt(TM,[["__scopeId","data-v-dd457d78"]]);var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Na(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var H_={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(t,e){(function(n){t.exports=n()})(function(){return function n(r,i,s){function o(h,f){if(!i[h]){if(!r[h]){var p=typeof Na=="function"&&Na;if(!f&&p)return p(h,!0);if(a)return a(h,!0);var m=new Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m}var v=i[h]={exports:{}};r[h][0].call(v.exports,function(_){var u=r[h][1][_];return o(u||_)},v,v.exports,n,r,i,s)}return i[h].exports}for(var a=typeof Na=="function"&&Na,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(n,r,i){var s=n("./utils"),o=n("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var h,f,p,m,v,_,u,w=[],x=0,R=l.length,M=R,V=s.getTypeOf(l)!=="string";x<l.length;)M=R-x,p=V?(h=l[x++],f=x<R?l[x++]:0,x<R?l[x++]:0):(h=l.charCodeAt(x++),f=x<R?l.charCodeAt(x++):0,x<R?l.charCodeAt(x++):0),m=h>>2,v=(3&h)<<4|f>>4,_=1<M?(15&f)<<2|p>>6:64,u=2<M?63&p:64,w.push(a.charAt(m)+a.charAt(v)+a.charAt(_)+a.charAt(u));return w.join("")},i.decode=function(l){var h,f,p,m,v,_,u=0,w=0,x="data:";if(l.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");var R,M=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&M--,l.charAt(l.length-2)===a.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(R=o.uint8array?new Uint8Array(0|M):new Array(0|M);u<l.length;)h=a.indexOf(l.charAt(u++))<<2|(m=a.indexOf(l.charAt(u++)))>>4,f=(15&m)<<4|(v=a.indexOf(l.charAt(u++)))>>2,p=(3&v)<<6|(_=a.indexOf(l.charAt(u++))),R[w++]=h,v!==64&&(R[w++]=f),_!==64&&(R[w++]=p);return R}},{"./support":30,"./utils":32}],2:[function(n,r,i){var s=n("./external"),o=n("./stream/DataWorker"),a=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function h(f,p,m,v,_){this.compressedSize=f,this.uncompressedSize=p,this.crc32=m,this.compression=v,this.compressedContent=_}h.prototype={getContentWorker:function(){var f=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return f.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,p,m){return f.pipe(new a).pipe(new l("uncompressedSize")).pipe(p.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var s=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var s=n("./utils"),o=function(){for(var a,l=[],h=0;h<256;h++){a=h;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;l[h]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(h,f,p,m){var v=o,_=m+p;h^=-1;for(var u=m;u<_;u++)h=h>>>8^v[255&(h^f[u])];return-1^h}(0|l,a,a.length,0):function(h,f,p,m){var v=o,_=m+p;h^=-1;for(var u=m;u<_;u++)h=h>>>8^v[255&(h^f.charCodeAt(u))];return-1^h}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var s=null;s=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:s}},{lie:37}],7:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=n("pako"),a=n("./utils"),l=n("./stream/GenericWorker"),h=s?"uint8array":"array";function f(p,m){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=m,this.meta={}}i.magic="\b\0",a.inherits(f,l),f.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,p.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(m){p.push({data:m,meta:p.meta})}},i.compressWorker=function(p){return new f("Deflate",p)},i.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function s(v,_){var u,w="";for(u=0;u<_;u++)w+=String.fromCharCode(255&v),v>>>=8;return w}function o(v,_,u,w,x,R){var M,V,L=v.file,F=v.compression,C=R!==h.utf8encode,E=a.transformTo("string",R(L.name)),T=a.transformTo("string",h.utf8encode(L.name)),P=L.comment,O=a.transformTo("string",R(P)),b=a.transformTo("string",h.utf8encode(P)),S=T.length!==L.name.length,I=b.length!==P.length,J="",te="",$="",de=L.dir,ie=L.date,Ee={crc32:0,compressedSize:0,uncompressedSize:0};_&&!u||(Ee.crc32=v.crc32,Ee.compressedSize=v.compressedSize,Ee.uncompressedSize=v.uncompressedSize);var re=0;_&&(re|=8),C||!S&&!I||(re|=2048);var ee=0,Ce=0;de&&(ee|=16),x==="UNIX"?(Ce=798,ee|=function(Z,Ie){var oe=Z;return Z||(oe=Ie?16893:33204),(65535&oe)<<16}(L.unixPermissions,de)):(Ce=20,ee|=function(Z){return 63&(Z||0)}(L.dosPermissions)),M=ie.getUTCHours(),M<<=6,M|=ie.getUTCMinutes(),M<<=5,M|=ie.getUTCSeconds()/2,V=ie.getUTCFullYear()-1980,V<<=4,V|=ie.getUTCMonth()+1,V<<=5,V|=ie.getUTCDate(),S&&(te=s(1,1)+s(f(E),4)+T,J+="up"+s(te.length,2)+te),I&&($=s(1,1)+s(f(O),4)+b,J+="uc"+s($.length,2)+$);var we="";return we+=`
\0`,we+=s(re,2),we+=F.magic,we+=s(M,2),we+=s(V,2),we+=s(Ee.crc32,4),we+=s(Ee.compressedSize,4),we+=s(Ee.uncompressedSize,4),we+=s(E.length,2),we+=s(J.length,2),{fileRecord:p.LOCAL_FILE_HEADER+we+E+J,dirRecord:p.CENTRAL_FILE_HEADER+s(Ce,2)+we+s(O.length,2)+"\0\0\0\0"+s(ee,4)+s(w,4)+E+J+O}}var a=n("../utils"),l=n("../stream/GenericWorker"),h=n("../utf8"),f=n("../crc32"),p=n("../signature");function m(v,_,u,w){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=u,this.encodeFileName=w,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(v){var _=v.meta.percent||0,u=this.entriesCount,w=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,l.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:u?(_+100*(u-w-1))/u:100}}))},m.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var _=this.streamFiles&&!v.file.dir;if(_){var u=o(v,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(v){this.accumulate=!1;var _=this.streamFiles&&!v.file.dir,u=o(v,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),_)this.push({data:function(w){return p.DATA_DESCRIPTOR+s(w.crc32,4)+s(w.compressedSize,4)+s(w.uncompressedSize,4)}(v),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var v=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var u=this.bytesWritten-v,w=function(x,R,M,V,L){var F=a.transformTo("string",L(V));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(x,2)+s(x,2)+s(R,4)+s(M,4)+s(F.length,2)+F}(this.dirRecords.length,u,v,this.zipComment,this.encodeFileName);this.push({data:w,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(v){this._sources.push(v);var _=this;return v.on("data",function(u){_.processChunk(u)}),v.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),v.on("error",function(u){_.error(u)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(v){var _=this._sources;if(!l.prototype.error.call(this,v))return!1;for(var u=0;u<_.length;u++)try{_[u].error(v)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var v=this._sources,_=0;_<v.length;_++)v[_].lock()},r.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var s=n("../compressions"),o=n("./ZipFileWorker");i.generateWorker=function(a,l,h){var f=new o(l.streamFiles,h,l.platform,l.encodeFileName),p=0;try{a.forEach(function(m,v){p++;var _=function(R,M){var V=R||M,L=s[V];if(!L)throw new Error(V+" is not a valid compression method !");return L}(v.options.compression,l.compression),u=v.options.compressionOptions||l.compressionOptions||{},w=v.dir,x=v.date;v._compressWorker(_,u).withStreamInfo("file",{name:m,dir:w,date:x,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(f)}),f.entriesCount=p}catch(m){f.error(m)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=n("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var s=n("./utils"),o=n("./external"),a=n("./utf8"),l=n("./zipEntries"),h=n("./stream/Crc32Probe"),f=n("./nodejsUtils");function p(m){return new o.Promise(function(v,_){var u=m.decompressed.getContentWorker().pipe(new h);u.on("error",function(w){_(w)}).on("end",function(){u.streamInfo.crc32!==m.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}r.exports=function(m,v){var _=this;return v=s.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),f.isNode&&f.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,v.optimizedBinaryString,v.base64).then(function(u){var w=new l(v);return w.load(u),w}).then(function(u){var w=[o.Promise.resolve(u)],x=u.files;if(v.checkCRC32)for(var R=0;R<x.length;R++)w.push(p(x[R]));return o.Promise.all(w)}).then(function(u){for(var w=u.shift(),x=w.files,R=0;R<x.length;R++){var M=x[R],V=M.fileNameStr,L=s.resolve(M.fileNameStr);_.file(L,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:v.createFolders}),M.dir||(_.file(L).unsafeOriginalName=V)}return w.zipComment.length&&(_.comment=w.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var s=n("../utils"),o=n("../stream/GenericWorker");function a(l,h){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(a,o),a.prototype._bindStream=function(l){var h=this;(this._stream=l).pause(),l.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var s=n("readable-stream").Readable;function o(a,l,h){s.call(this,l),this._helper=a;var f=this;a.on("data",function(p,m){f.push(p)||f._helper.pause(),h&&h(m)}).on("error",function(p){f.emit("error",p)}).on("end",function(){f.push(null)})}n("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,r,i){function s(L,F,C){var E,T=a.getTypeOf(F),P=a.extend(C||{},f);P.date=P.date||new Date,P.compression!==null&&(P.compression=P.compression.toUpperCase()),typeof P.unixPermissions=="string"&&(P.unixPermissions=parseInt(P.unixPermissions,8)),P.unixPermissions&&16384&P.unixPermissions&&(P.dir=!0),P.dosPermissions&&16&P.dosPermissions&&(P.dir=!0),P.dir&&(L=x(L)),P.createFolders&&(E=w(L))&&R.call(this,E,!0);var O=T==="string"&&P.binary===!1&&P.base64===!1;C&&C.binary!==void 0||(P.binary=!O),(F instanceof p&&F.uncompressedSize===0||P.dir||!F||F.length===0)&&(P.base64=!1,P.binary=!0,F="",P.compression="STORE",T="string");var b=null;b=F instanceof p||F instanceof l?F:_.isNode&&_.isStream(F)?new u(L,F):a.prepareContent(L,F,P.binary,P.optimizedBinaryString,P.base64);var S=new m(L,b,P);this.files[L]=S}var o=n("./utf8"),a=n("./utils"),l=n("./stream/GenericWorker"),h=n("./stream/StreamHelper"),f=n("./defaults"),p=n("./compressedObject"),m=n("./zipObject"),v=n("./generate"),_=n("./nodejsUtils"),u=n("./nodejs/NodejsStreamInputAdapter"),w=function(L){L.slice(-1)==="/"&&(L=L.substring(0,L.length-1));var F=L.lastIndexOf("/");return 0<F?L.substring(0,F):""},x=function(L){return L.slice(-1)!=="/"&&(L+="/"),L},R=function(L,F){return F=F!==void 0?F:f.createFolders,L=x(L),this.files[L]||s.call(this,L,null,{dir:!0,createFolders:F}),this.files[L]};function M(L){return Object.prototype.toString.call(L)==="[object RegExp]"}var V={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(L){var F,C,E;for(F in this.files)E=this.files[F],(C=F.slice(this.root.length,F.length))&&F.slice(0,this.root.length)===this.root&&L(C,E)},filter:function(L){var F=[];return this.forEach(function(C,E){L(C,E)&&F.push(E)}),F},file:function(L,F,C){if(arguments.length!==1)return L=this.root+L,s.call(this,L,F,C),this;if(M(L)){var E=L;return this.filter(function(P,O){return!O.dir&&E.test(P)})}var T=this.files[this.root+L];return T&&!T.dir?T:null},folder:function(L){if(!L)return this;if(M(L))return this.filter(function(T,P){return P.dir&&L.test(T)});var F=this.root+L,C=R.call(this,F),E=this.clone();return E.root=C.name,E},remove:function(L){L=this.root+L;var F=this.files[L];if(F||(L.slice(-1)!=="/"&&(L+="/"),F=this.files[L]),F&&!F.dir)delete this.files[L];else for(var C=this.filter(function(T,P){return P.name.slice(0,L.length)===L}),E=0;E<C.length;E++)delete this.files[C[E].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(L){var F,C={};try{if((C=a.extend(L||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=C.type.toLowerCase(),C.compression=C.compression.toUpperCase(),C.type==="binarystring"&&(C.type="string"),!C.type)throw new Error("No output type specified.");a.checkSupport(C.type),C.platform!=="darwin"&&C.platform!=="freebsd"&&C.platform!=="linux"&&C.platform!=="sunos"||(C.platform="UNIX"),C.platform==="win32"&&(C.platform="DOS");var E=C.comment||this.comment||"";F=v.generateWorker(this,C,E)}catch(T){(F=new l("error")).error(T)}return new h(F,C.type||"string",C.mimeType)},generateAsync:function(L,F){return this.generateInternalStream(L).accumulate(F)},generateNodeStream:function(L,F){return(L=L||{}).type||(L.type="nodebuffer"),this.generateInternalStream(L).toNodejsStream(F)}};r.exports=V},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),h=a.charCodeAt(1),f=a.charCodeAt(2),p=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===h&&this.data[m+2]===f&&this.data[m+3]===p)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),h=a.charCodeAt(1),f=a.charCodeAt(2),p=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&h===m[1]&&f===m[2]&&p===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var s=n("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,h=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)h=(h<<8)+this.byteAt(l);return this.index+=a,h},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=o},{"../utils":32}],19:[function(n,r,i){var s=n("./Uint8ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var s=n("./ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var s=n("../utils"),o=n("../support"),a=n("./ArrayReader"),l=n("./StringReader"),h=n("./NodeBufferReader"),f=n("./Uint8ArrayReader");r.exports=function(p){var m=s.getTypeOf(p);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new h(p):o.uint8array?new f(s.transformTo("uint8array",p)):new a(s.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var s=n("./GenericWorker"),o=n("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var s=n("./GenericWorker"),o=n("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+l.data.length}o.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,h);break;case"uint8array":l=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":l=this.data.slice(this.index,h)}return this.index=h,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=s},{}],29:[function(n,r,i){var s=n("../utils"),o=n("./ConvertWorker"),a=n("./GenericWorker"),l=n("../base64"),h=n("../support"),f=n("../external"),p=null;if(h.nodestream)try{p=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(_,u){return new f.Promise(function(w,x){var R=[],M=_._internalType,V=_._outputType,L=_._mimeType;_.on("data",function(F,C){R.push(F),u&&u(C)}).on("error",function(F){R=[],x(F)}).on("end",function(){try{var F=function(C,E,T){switch(C){case"blob":return s.newBlob(s.transformTo("arraybuffer",E),T);case"base64":return l.encode(E);default:return s.transformTo(C,E)}}(V,function(C,E){var T,P=0,O=null,b=0;for(T=0;T<E.length;T++)b+=E[T].length;switch(C){case"string":return E.join("");case"array":return Array.prototype.concat.apply([],E);case"uint8array":for(O=new Uint8Array(b),T=0;T<E.length;T++)O.set(E[T],P),P+=E[T].length;return O;case"nodebuffer":return Buffer.concat(E);default:throw new Error("concat : unsupported type '"+C+"'")}}(M,R),L);w(F)}catch(C){x(C)}R=[]}).resume()})}function v(_,u,w){var x=u;switch(u){case"blob":case"arraybuffer":x="uint8array";break;case"base64":x="string"}try{this._internalType=x,this._outputType=u,this._mimeType=w,s.checkSupport(x),this._worker=_.pipe(new o(x)),_.lock()}catch(R){this._worker=new a("error"),this._worker.error(R)}}v.prototype={accumulate:function(_){return m(this,_)},on:function(_,u){var w=this;return _==="data"?this._worker.on(_,function(x){u.call(w,x.data,x.meta)}):this._worker.on(_,function(){s.delay(u,arguments,w)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},_)}},r.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var s=n("./utils"),o=n("./support"),a=n("./nodejsUtils"),l=n("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}i.utf8encode=function(v){return o.nodebuffer?a.newBufferFrom(v,"utf-8"):function(_){var u,w,x,R,M,V=_.length,L=0;for(R=0;R<V;R++)(64512&(w=_.charCodeAt(R)))==55296&&R+1<V&&(64512&(x=_.charCodeAt(R+1)))==56320&&(w=65536+(w-55296<<10)+(x-56320),R++),L+=w<128?1:w<2048?2:w<65536?3:4;for(u=o.uint8array?new Uint8Array(L):new Array(L),R=M=0;M<L;R++)(64512&(w=_.charCodeAt(R)))==55296&&R+1<V&&(64512&(x=_.charCodeAt(R+1)))==56320&&(w=65536+(w-55296<<10)+(x-56320),R++),w<128?u[M++]=w:(w<2048?u[M++]=192|w>>>6:(w<65536?u[M++]=224|w>>>12:(u[M++]=240|w>>>18,u[M++]=128|w>>>12&63),u[M++]=128|w>>>6&63),u[M++]=128|63&w);return u}(v)},i.utf8decode=function(v){return o.nodebuffer?s.transformTo("nodebuffer",v).toString("utf-8"):function(_){var u,w,x,R,M=_.length,V=new Array(2*M);for(u=w=0;u<M;)if((x=_[u++])<128)V[w++]=x;else if(4<(R=h[x]))V[w++]=65533,u+=R-1;else{for(x&=R===2?31:R===3?15:7;1<R&&u<M;)x=x<<6|63&_[u++],R--;1<R?V[w++]=65533:x<65536?V[w++]=x:(x-=65536,V[w++]=55296|x>>10&1023,V[w++]=56320|1023&x)}return V.length!==w&&(V.subarray?V=V.subarray(0,w):V.length=w),s.applyFromCharCode(V)}(v=s.transformTo(o.uint8array?"uint8array":"array",v))},s.inherits(p,l),p.prototype.processChunk=function(v){var _=s.transformTo(o.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var u=_;(_=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),_.set(u,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var w=function(R,M){var V;for((M=M||R.length)>R.length&&(M=R.length),V=M-1;0<=V&&(192&R[V])==128;)V--;return V<0||V===0?M:V+h[R[V]]>M?V:M}(_),x=_;w!==_.length&&(o.uint8array?(x=_.subarray(0,w),this.leftOver=_.subarray(w,_.length)):(x=_.slice(0,w),this.leftOver=_.slice(w,_.length))),this.push({data:i.utf8decode(x),meta:v.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=p,s.inherits(m,l),m.prototype.processChunk=function(v){this.push({data:i.utf8encode(v.data),meta:v.meta})},i.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var s=n("./support"),o=n("./base64"),a=n("./nodejsUtils"),l=n("./external");function h(u){return u}function f(u,w){for(var x=0;x<u.length;++x)w[x]=255&u.charCodeAt(x);return w}n("setimmediate"),i.newBlob=function(u,w){i.checkSupport("blob");try{return new Blob([u],{type:w})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(u),x.getBlob(w)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(u,w,x){var R=[],M=0,V=u.length;if(V<=x)return String.fromCharCode.apply(null,u);for(;M<V;)w==="array"||w==="nodebuffer"?R.push(String.fromCharCode.apply(null,u.slice(M,Math.min(M+x,V)))):R.push(String.fromCharCode.apply(null,u.subarray(M,Math.min(M+x,V)))),M+=x;return R.join("")},stringifyByChar:function(u){for(var w="",x=0;x<u.length;x++)w+=String.fromCharCode(u[x]);return w},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(u){var w=65536,x=i.getTypeOf(u),R=!0;if(x==="uint8array"?R=p.applyCanBeUsed.uint8array:x==="nodebuffer"&&(R=p.applyCanBeUsed.nodebuffer),R)for(;1<w;)try{return p.stringifyByChunk(u,x,w)}catch{w=Math.floor(w/2)}return p.stringifyByChar(u)}function v(u,w){for(var x=0;x<u.length;x++)w[x]=u[x];return w}i.applyFromCharCode=m;var _={};_.string={string:h,array:function(u){return f(u,new Array(u.length))},arraybuffer:function(u){return _.string.uint8array(u).buffer},uint8array:function(u){return f(u,new Uint8Array(u.length))},nodebuffer:function(u){return f(u,a.allocBuffer(u.length))}},_.array={string:m,array:h,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(u)}},_.arraybuffer={string:function(u){return m(new Uint8Array(u))},array:function(u){return v(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:h,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(new Uint8Array(u))}},_.uint8array={string:m,array:function(u){return v(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:h,nodebuffer:function(u){return a.newBufferFrom(u)}},_.nodebuffer={string:m,array:function(u){return v(u,new Array(u.length))},arraybuffer:function(u){return _.nodebuffer.uint8array(u).buffer},uint8array:function(u){return v(u,new Uint8Array(u.length))},nodebuffer:h},i.transformTo=function(u,w){if(w=w||"",!u)return w;i.checkSupport(u);var x=i.getTypeOf(w);return _[x][u](w)},i.resolve=function(u){for(var w=u.split("/"),x=[],R=0;R<w.length;R++){var M=w[R];M==="."||M===""&&R!==0&&R!==w.length-1||(M===".."?x.pop():x.push(M))}return x.join("/")},i.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(u)?"nodebuffer":s.uint8array&&u instanceof Uint8Array?"uint8array":s.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(u){if(!s[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(u){var w,x,R="";for(x=0;x<(u||"").length;x++)R+="\\x"+((w=u.charCodeAt(x))<16?"0":"")+w.toString(16).toUpperCase();return R},i.delay=function(u,w,x){setImmediate(function(){u.apply(x||null,w||[])})},i.inherits=function(u,w){function x(){}x.prototype=w.prototype,u.prototype=new x},i.extend=function(){var u,w,x={};for(u=0;u<arguments.length;u++)for(w in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],w)&&x[w]===void 0&&(x[w]=arguments[u][w]);return x},i.prepareContent=function(u,w,x,R,M){return l.Promise.resolve(w).then(function(V){return s.blob&&(V instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(V))!==-1)&&typeof FileReader<"u"?new l.Promise(function(L,F){var C=new FileReader;C.onload=function(E){L(E.target.result)},C.onerror=function(E){F(E.target.error)},C.readAsArrayBuffer(V)}):V}).then(function(V){var L=i.getTypeOf(V);return L?(L==="arraybuffer"?V=i.transformTo("uint8array",V):L==="string"&&(M?V=o.decode(V):x&&R!==!0&&(V=function(F){return f(F,s.uint8array?new Uint8Array(F.length):new Array(F.length))}(V))),V):l.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./signature"),l=n("./zipEntry"),h=n("./support");function f(p){this.files=[],this.loadOptions=p}f.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(p)+")")}},isSignature:function(p,m){var v=this.reader.index;this.reader.setIndex(p);var _=this.reader.readString(4)===m;return this.reader.setIndex(v),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),m=h.uint8array?"uint8array":"array",v=o.transformTo(m,p);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,m,v,_=this.zip64EndOfCentralSize-44;0<_;)p=this.reader.readInt(2),m=this.reader.readInt(4),v=this.reader.readData(m),this.zip64ExtensibleData[p]={id:p,length:m,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,m;for(p=0;p<this.files.length;p++)m=this.files[p],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var m=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var _=m-v;if(0<_)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./compressedObject"),l=n("./crc32"),h=n("./utf8"),f=n("./compressions"),p=n("./support");function m(v,_){this.options=v,this.loadOptions=_}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var _,u;if(v.skip(22),this.fileNameLength=v.readInt(2),u=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(w){for(var x in f)if(Object.prototype.hasOwnProperty.call(f,x)&&f[x].magic===w)return f[x];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var _=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(_),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var _,u,w,x=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<x;)_=v.readInt(2),u=v.readInt(2),w=v.readData(u),this.extraFields[_]={id:_,length:u,value:w};v.setIndex(x)},handleUTF8:function(){var v=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var u=o.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var w=this.findExtraFieldUnicodeComment();if(w!==null)this.fileCommentStr=w;else{var x=o.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(x)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var _=s(v.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:h.utf8decode(_.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var _=s(v.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:h.utf8decode(_.readData(v.length-5))}return null}},r.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function s(_,u,w){this.name=_,this.dir=w.dir,this.date=w.date,this.comment=w.comment,this.unixPermissions=w.unixPermissions,this.dosPermissions=w.dosPermissions,this._data=u,this._dataBinary=w.binary,this.options={compression:w.compression,compressionOptions:w.compressionOptions}}var o=n("./stream/StreamHelper"),a=n("./stream/DataWorker"),l=n("./utf8"),h=n("./compressedObject"),f=n("./stream/GenericWorker");s.prototype={internalStream:function(_){var u=null,w="string";try{if(!_)throw new Error("No output type specified.");var x=(w=_.toLowerCase())==="string"||w==="text";w!=="binarystring"&&w!=="text"||(w="string"),u=this._decompressWorker();var R=!this._dataBinary;R&&!x&&(u=u.pipe(new l.Utf8EncodeWorker)),!R&&x&&(u=u.pipe(new l.Utf8DecodeWorker))}catch(M){(u=new f("error")).error(M)}return new o(u,w,"")},async:function(_,u){return this.internalStream(_).accumulate(u)},nodeStream:function(_,u){return this.internalStream(_||"nodebuffer").toNodejsStream(u)},_compressWorker:function(_,u){if(this._data instanceof h&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var w=this._decompressWorker();return this._dataBinary||(w=w.pipe(new l.Utf8EncodeWorker)),h.createWorkerFrom(w,_,u)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<p.length;v++)s.prototype[p[v]]=m;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var h=0,f=new l(_),p=s.document.createTextNode("");f.observe(p,{characterData:!0}),o=function(){p.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var u=s.document.createElement("script");u.onreadystatechange=function(){_(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},s.document.documentElement.appendChild(u)}:function(){setTimeout(_,0)};else{var m=new s.MessageChannel;m.port1.onmessage=_,o=function(){m.port2.postMessage(0)}}var v=[];function _(){var u,w;a=!0;for(var x=v.length;x;){for(w=v,v=[],u=-1;++u<x;)w[u]();x=v.length}a=!1}r.exports=function(u){v.push(u)!==1||a||o()}}).call(this,typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var s=n("immediate");function o(){}var a={},l=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function p(x){if(typeof x!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,x!==o&&u(this,x)}function m(x,R,M){this.promise=x,typeof R=="function"&&(this.onFulfilled=R,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function v(x,R,M){s(function(){var V;try{V=R(M)}catch(L){return a.reject(x,L)}V===x?a.reject(x,new TypeError("Cannot resolve promise with itself")):a.resolve(x,V)})}function _(x){var R=x&&x.then;if(x&&(typeof x=="object"||typeof x=="function")&&typeof R=="function")return function(){R.apply(x,arguments)}}function u(x,R){var M=!1;function V(C){M||(M=!0,a.reject(x,C))}function L(C){M||(M=!0,a.resolve(x,C))}var F=w(function(){R(L,V)});F.status==="error"&&V(F.value)}function w(x,R){var M={};try{M.value=x(R),M.status="success"}catch(V){M.status="error",M.value=V}return M}(r.exports=p).prototype.finally=function(x){if(typeof x!="function")return this;var R=this.constructor;return this.then(function(M){return R.resolve(x()).then(function(){return M})},function(M){return R.resolve(x()).then(function(){throw M})})},p.prototype.catch=function(x){return this.then(null,x)},p.prototype.then=function(x,R){if(typeof x!="function"&&this.state===h||typeof R!="function"&&this.state===l)return this;var M=new this.constructor(o);return this.state!==f?v(M,this.state===h?x:R,this.outcome):this.queue.push(new m(M,x,R)),M},m.prototype.callFulfilled=function(x){a.resolve(this.promise,x)},m.prototype.otherCallFulfilled=function(x){v(this.promise,this.onFulfilled,x)},m.prototype.callRejected=function(x){a.reject(this.promise,x)},m.prototype.otherCallRejected=function(x){v(this.promise,this.onRejected,x)},a.resolve=function(x,R){var M=w(_,R);if(M.status==="error")return a.reject(x,M.value);var V=M.value;if(V)u(x,V);else{x.state=h,x.outcome=R;for(var L=-1,F=x.queue.length;++L<F;)x.queue[L].callFulfilled(R)}return x},a.reject=function(x,R){x.state=l,x.outcome=R;for(var M=-1,V=x.queue.length;++M<V;)x.queue[M].callRejected(R);return x},p.resolve=function(x){return x instanceof this?x:a.resolve(new this(o),x)},p.reject=function(x){var R=new this(o);return a.reject(R,x)},p.all=function(x){var R=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=x.length,V=!1;if(!M)return this.resolve([]);for(var L=new Array(M),F=0,C=-1,E=new this(o);++C<M;)T(x[C],C);return E;function T(P,O){R.resolve(P).then(function(b){L[O]=b,++F!==M||V||(V=!0,a.resolve(E,L))},function(b){V||(V=!0,a.reject(E,b))})}},p.race=function(x){var R=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=x.length,V=!1;if(!M)return this.resolve([]);for(var L=-1,F=new this(o);++L<M;)C=x[L],R.resolve(C).then(function(E){V||(V=!0,a.resolve(F,E))},function(E){V||(V=!0,a.reject(F,E))});var C;return F}},{immediate:36}],38:[function(n,r,i){var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var s=n("./zlib/deflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/messages"),h=n("./zlib/zstream"),f=Object.prototype.toString,p=0,m=-1,v=0,_=8;function u(x){if(!(this instanceof u))return new u(x);this.options=o.assign({level:m,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},x||{});var R=this.options;R.raw&&0<R.windowBits?R.windowBits=-R.windowBits:R.gzip&&0<R.windowBits&&R.windowBits<16&&(R.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var M=s.deflateInit2(this.strm,R.level,R.method,R.windowBits,R.memLevel,R.strategy);if(M!==p)throw new Error(l[M]);if(R.header&&s.deflateSetHeader(this.strm,R.header),R.dictionary){var V;if(V=typeof R.dictionary=="string"?a.string2buf(R.dictionary):f.call(R.dictionary)==="[object ArrayBuffer]"?new Uint8Array(R.dictionary):R.dictionary,(M=s.deflateSetDictionary(this.strm,V))!==p)throw new Error(l[M]);this._dict_set=!0}}function w(x,R){var M=new u(R);if(M.push(x,!0),M.err)throw M.msg||l[M.err];return M.result}u.prototype.push=function(x,R){var M,V,L=this.strm,F=this.options.chunkSize;if(this.ended)return!1;V=R===~~R?R:R===!0?4:0,typeof x=="string"?L.input=a.string2buf(x):f.call(x)==="[object ArrayBuffer]"?L.input=new Uint8Array(x):L.input=x,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new o.Buf8(F),L.next_out=0,L.avail_out=F),(M=s.deflate(L,V))!==1&&M!==p)return this.onEnd(M),!(this.ended=!0);L.avail_out!==0&&(L.avail_in!==0||V!==4&&V!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(L.output,L.next_out))):this.onData(o.shrinkBuf(L.output,L.next_out)))}while((0<L.avail_in||L.avail_out===0)&&M!==1);return V===4?(M=s.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===p):V!==2||(this.onEnd(p),!(L.avail_out=0))},u.prototype.onData=function(x){this.chunks.push(x)},u.prototype.onEnd=function(x){x===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},i.Deflate=u,i.deflate=w,i.deflateRaw=function(x,R){return(R=R||{}).raw=!0,w(x,R)},i.gzip=function(x,R){return(R=R||{}).gzip=!0,w(x,R)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var s=n("./zlib/inflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/constants"),h=n("./zlib/messages"),f=n("./zlib/zstream"),p=n("./zlib/gzheader"),m=Object.prototype.toString;function v(u){if(!(this instanceof v))return new v(u);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},u||{});var w=this.options;w.raw&&0<=w.windowBits&&w.windowBits<16&&(w.windowBits=-w.windowBits,w.windowBits===0&&(w.windowBits=-15)),!(0<=w.windowBits&&w.windowBits<16)||u&&u.windowBits||(w.windowBits+=32),15<w.windowBits&&w.windowBits<48&&!(15&w.windowBits)&&(w.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var x=s.inflateInit2(this.strm,w.windowBits);if(x!==l.Z_OK)throw new Error(h[x]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function _(u,w){var x=new v(w);if(x.push(u,!0),x.err)throw x.msg||h[x.err];return x.result}v.prototype.push=function(u,w){var x,R,M,V,L,F,C=this.strm,E=this.options.chunkSize,T=this.options.dictionary,P=!1;if(this.ended)return!1;R=w===~~w?w:w===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof u=="string"?C.input=a.binstring2buf(u):m.call(u)==="[object ArrayBuffer]"?C.input=new Uint8Array(u):C.input=u,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(E),C.next_out=0,C.avail_out=E),(x=s.inflate(C,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&T&&(F=typeof T=="string"?a.string2buf(T):m.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,x=s.inflateSetDictionary(this.strm,F)),x===l.Z_BUF_ERROR&&P===!0&&(x=l.Z_OK,P=!1),x!==l.Z_STREAM_END&&x!==l.Z_OK)return this.onEnd(x),!(this.ended=!0);C.next_out&&(C.avail_out!==0&&x!==l.Z_STREAM_END&&(C.avail_in!==0||R!==l.Z_FINISH&&R!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=a.utf8border(C.output,C.next_out),V=C.next_out-M,L=a.buf2string(C.output,M),C.next_out=V,C.avail_out=E-V,V&&o.arraySet(C.output,C.output,M,V,0),this.onData(L)):this.onData(o.shrinkBuf(C.output,C.next_out)))),C.avail_in===0&&C.avail_out===0&&(P=!0)}while((0<C.avail_in||C.avail_out===0)&&x!==l.Z_STREAM_END);return x===l.Z_STREAM_END&&(R=l.Z_FINISH),R===l.Z_FINISH?(x=s.inflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===l.Z_OK):R!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(C.avail_out=0))},v.prototype.onData=function(u){this.chunks.push(u)},v.prototype.onEnd=function(u){u===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},i.Inflate=v,i.inflate=_,i.inflateRaw=function(u,w){return(w=w||{}).raw=!0,_(u,w)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var p in f)f.hasOwnProperty(p)&&(l[p]=f[p])}}return l},i.shrinkBuf=function(l,h){return l.length===h?l:l.subarray?l.subarray(0,h):(l.length=h,l)};var o={arraySet:function(l,h,f,p,m){if(h.subarray&&l.subarray)l.set(h.subarray(f,f+p),m);else for(var v=0;v<p;v++)l[m+v]=h[f+v]},flattenChunks:function(l){var h,f,p,m,v,_;for(h=p=0,f=l.length;h<f;h++)p+=l[h].length;for(_=new Uint8Array(p),h=m=0,f=l.length;h<f;h++)v=l[h],_.set(v,m),m+=v.length;return _}},a={arraySet:function(l,h,f,p,m){for(var v=0;v<p;v++)l[m+v]=h[f+v]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(n,r,i){var s=n("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),h=0;h<256;h++)l[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(p,m){if(m<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(p,m));for(var v="",_=0;_<m;_++)v+=String.fromCharCode(p[_]);return v}l[254]=l[254]=1,i.string2buf=function(p){var m,v,_,u,w,x=p.length,R=0;for(u=0;u<x;u++)(64512&(v=p.charCodeAt(u)))==55296&&u+1<x&&(64512&(_=p.charCodeAt(u+1)))==56320&&(v=65536+(v-55296<<10)+(_-56320),u++),R+=v<128?1:v<2048?2:v<65536?3:4;for(m=new s.Buf8(R),u=w=0;w<R;u++)(64512&(v=p.charCodeAt(u)))==55296&&u+1<x&&(64512&(_=p.charCodeAt(u+1)))==56320&&(v=65536+(v-55296<<10)+(_-56320),u++),v<128?m[w++]=v:(v<2048?m[w++]=192|v>>>6:(v<65536?m[w++]=224|v>>>12:(m[w++]=240|v>>>18,m[w++]=128|v>>>12&63),m[w++]=128|v>>>6&63),m[w++]=128|63&v);return m},i.buf2binstring=function(p){return f(p,p.length)},i.binstring2buf=function(p){for(var m=new s.Buf8(p.length),v=0,_=m.length;v<_;v++)m[v]=p.charCodeAt(v);return m},i.buf2string=function(p,m){var v,_,u,w,x=m||p.length,R=new Array(2*x);for(v=_=0;v<x;)if((u=p[v++])<128)R[_++]=u;else if(4<(w=l[u]))R[_++]=65533,v+=w-1;else{for(u&=w===2?31:w===3?15:7;1<w&&v<x;)u=u<<6|63&p[v++],w--;1<w?R[_++]=65533:u<65536?R[_++]=u:(u-=65536,R[_++]=55296|u>>10&1023,R[_++]=56320|1023&u)}return f(R,_)},i.utf8border=function(p,m){var v;for((m=m||p.length)>p.length&&(m=p.length),v=m-1;0<=v&&(192&p[v])==128;)v--;return v<0||v===0?m:v+l[p[v]]>m?v:m}},{"./common":41}],43:[function(n,r,i){r.exports=function(s,o,a,l){for(var h=65535&s|0,f=s>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;f=f+(h=h+o[l++]|0)|0,--p;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();r.exports=function(o,a,l,h){var f=s,p=h+l;o^=-1;for(var m=h;m<p;m++)o=o>>>8^f[255&(o^a[m])];return-1^o}},{}],46:[function(n,r,i){var s,o=n("../utils/common"),a=n("./trees"),l=n("./adler32"),h=n("./crc32"),f=n("./messages"),p=0,m=4,v=0,_=-2,u=-1,w=4,x=2,R=8,M=9,V=286,L=30,F=19,C=2*V+1,E=15,T=3,P=258,O=P+T+1,b=42,S=113,I=1,J=2,te=3,$=4;function de(g,Q){return g.msg=f[Q],Q}function ie(g){return(g<<1)-(4<g?9:0)}function Ee(g){for(var Q=g.length;0<=--Q;)g[Q]=0}function re(g){var Q=g.state,H=Q.pending;H>g.avail_out&&(H=g.avail_out),H!==0&&(o.arraySet(g.output,Q.pending_buf,Q.pending_out,H,g.next_out),g.next_out+=H,Q.pending_out+=H,g.total_out+=H,g.avail_out-=H,Q.pending-=H,Q.pending===0&&(Q.pending_out=0))}function ee(g,Q){a._tr_flush_block(g,0<=g.block_start?g.block_start:-1,g.strstart-g.block_start,Q),g.block_start=g.strstart,re(g.strm)}function Ce(g,Q){g.pending_buf[g.pending++]=Q}function we(g,Q){g.pending_buf[g.pending++]=Q>>>8&255,g.pending_buf[g.pending++]=255&Q}function Z(g,Q){var H,N,D=g.max_chain_length,j=g.strstart,z=g.prev_length,A=g.nice_match,W=g.strstart>g.w_size-O?g.strstart-(g.w_size-O):0,X=g.window,se=g.w_mask,le=g.prev,_e=g.strstart+P,Ae=X[j+z-1],ce=X[j+z];g.prev_length>=g.good_match&&(D>>=2),A>g.lookahead&&(A=g.lookahead);do if(X[(H=Q)+z]===ce&&X[H+z-1]===Ae&&X[H]===X[j]&&X[++H]===X[j+1]){j+=2,H++;do;while(X[++j]===X[++H]&&X[++j]===X[++H]&&X[++j]===X[++H]&&X[++j]===X[++H]&&X[++j]===X[++H]&&X[++j]===X[++H]&&X[++j]===X[++H]&&X[++j]===X[++H]&&j<_e);if(N=P-(_e-j),j=_e-P,z<N){if(g.match_start=Q,A<=(z=N))break;Ae=X[j+z-1],ce=X[j+z]}}while((Q=le[Q&se])>W&&--D!=0);return z<=g.lookahead?z:g.lookahead}function Ie(g){var Q,H,N,D,j,z,A,W,X,se,le=g.w_size;do{if(D=g.window_size-g.lookahead-g.strstart,g.strstart>=le+(le-O)){for(o.arraySet(g.window,g.window,le,le,0),g.match_start-=le,g.strstart-=le,g.block_start-=le,Q=H=g.hash_size;N=g.head[--Q],g.head[Q]=le<=N?N-le:0,--H;);for(Q=H=le;N=g.prev[--Q],g.prev[Q]=le<=N?N-le:0,--H;);D+=le}if(g.strm.avail_in===0)break;if(z=g.strm,A=g.window,W=g.strstart+g.lookahead,X=D,se=void 0,se=z.avail_in,X<se&&(se=X),H=se===0?0:(z.avail_in-=se,o.arraySet(A,z.input,z.next_in,se,W),z.state.wrap===1?z.adler=l(z.adler,A,se,W):z.state.wrap===2&&(z.adler=h(z.adler,A,se,W)),z.next_in+=se,z.total_in+=se,se),g.lookahead+=H,g.lookahead+g.insert>=T)for(j=g.strstart-g.insert,g.ins_h=g.window[j],g.ins_h=(g.ins_h<<g.hash_shift^g.window[j+1])&g.hash_mask;g.insert&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[j+T-1])&g.hash_mask,g.prev[j&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=j,j++,g.insert--,!(g.lookahead+g.insert<T)););}while(g.lookahead<O&&g.strm.avail_in!==0)}function oe(g,Q){for(var H,N;;){if(g.lookahead<O){if(Ie(g),g.lookahead<O&&Q===p)return I;if(g.lookahead===0)break}if(H=0,g.lookahead>=T&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+T-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),H!==0&&g.strstart-H<=g.w_size-O&&(g.match_length=Z(g,H)),g.match_length>=T)if(N=a._tr_tally(g,g.strstart-g.match_start,g.match_length-T),g.lookahead-=g.match_length,g.match_length<=g.max_lazy_match&&g.lookahead>=T){for(g.match_length--;g.strstart++,g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+T-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart,--g.match_length!=0;);g.strstart++}else g.strstart+=g.match_length,g.match_length=0,g.ins_h=g.window[g.strstart],g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+1])&g.hash_mask;else N=a._tr_tally(g,0,g.window[g.strstart]),g.lookahead--,g.strstart++;if(N&&(ee(g,!1),g.strm.avail_out===0))return I}return g.insert=g.strstart<T-1?g.strstart:T-1,Q===m?(ee(g,!0),g.strm.avail_out===0?te:$):g.last_lit&&(ee(g,!1),g.strm.avail_out===0)?I:J}function he(g,Q){for(var H,N,D;;){if(g.lookahead<O){if(Ie(g),g.lookahead<O&&Q===p)return I;if(g.lookahead===0)break}if(H=0,g.lookahead>=T&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+T-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),g.prev_length=g.match_length,g.prev_match=g.match_start,g.match_length=T-1,H!==0&&g.prev_length<g.max_lazy_match&&g.strstart-H<=g.w_size-O&&(g.match_length=Z(g,H),g.match_length<=5&&(g.strategy===1||g.match_length===T&&4096<g.strstart-g.match_start)&&(g.match_length=T-1)),g.prev_length>=T&&g.match_length<=g.prev_length){for(D=g.strstart+g.lookahead-T,N=a._tr_tally(g,g.strstart-1-g.prev_match,g.prev_length-T),g.lookahead-=g.prev_length-1,g.prev_length-=2;++g.strstart<=D&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+T-1])&g.hash_mask,H=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),--g.prev_length!=0;);if(g.match_available=0,g.match_length=T-1,g.strstart++,N&&(ee(g,!1),g.strm.avail_out===0))return I}else if(g.match_available){if((N=a._tr_tally(g,0,g.window[g.strstart-1]))&&ee(g,!1),g.strstart++,g.lookahead--,g.strm.avail_out===0)return I}else g.match_available=1,g.strstart++,g.lookahead--}return g.match_available&&(N=a._tr_tally(g,0,g.window[g.strstart-1]),g.match_available=0),g.insert=g.strstart<T-1?g.strstart:T-1,Q===m?(ee(g,!0),g.strm.avail_out===0?te:$):g.last_lit&&(ee(g,!1),g.strm.avail_out===0)?I:J}function pe(g,Q,H,N,D){this.good_length=g,this.max_lazy=Q,this.nice_length=H,this.max_chain=N,this.func=D}function Te(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=R,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*C),this.dyn_dtree=new o.Buf16(2*(2*L+1)),this.bl_tree=new o.Buf16(2*(2*F+1)),Ee(this.dyn_ltree),Ee(this.dyn_dtree),Ee(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(E+1),this.heap=new o.Buf16(2*V+1),Ee(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*V+1),Ee(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Re(g){var Q;return g&&g.state?(g.total_in=g.total_out=0,g.data_type=x,(Q=g.state).pending=0,Q.pending_out=0,Q.wrap<0&&(Q.wrap=-Q.wrap),Q.status=Q.wrap?b:S,g.adler=Q.wrap===2?0:1,Q.last_flush=p,a._tr_init(Q),v):de(g,_)}function q(g){var Q=Re(g);return Q===v&&function(H){H.window_size=2*H.w_size,Ee(H.head),H.max_lazy_match=s[H.level].max_lazy,H.good_match=s[H.level].good_length,H.nice_match=s[H.level].nice_length,H.max_chain_length=s[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=T-1,H.match_available=0,H.ins_h=0}(g.state),Q}function K(g,Q,H,N,D,j){if(!g)return _;var z=1;if(Q===u&&(Q=6),N<0?(z=0,N=-N):15<N&&(z=2,N-=16),D<1||M<D||H!==R||N<8||15<N||Q<0||9<Q||j<0||w<j)return de(g,_);N===8&&(N=9);var A=new Te;return(g.state=A).strm=g,A.wrap=z,A.gzhead=null,A.w_bits=N,A.w_size=1<<A.w_bits,A.w_mask=A.w_size-1,A.hash_bits=D+7,A.hash_size=1<<A.hash_bits,A.hash_mask=A.hash_size-1,A.hash_shift=~~((A.hash_bits+T-1)/T),A.window=new o.Buf8(2*A.w_size),A.head=new o.Buf16(A.hash_size),A.prev=new o.Buf16(A.w_size),A.lit_bufsize=1<<D+6,A.pending_buf_size=4*A.lit_bufsize,A.pending_buf=new o.Buf8(A.pending_buf_size),A.d_buf=1*A.lit_bufsize,A.l_buf=3*A.lit_bufsize,A.level=Q,A.strategy=j,A.method=H,q(g)}s=[new pe(0,0,0,0,function(g,Q){var H=65535;for(H>g.pending_buf_size-5&&(H=g.pending_buf_size-5);;){if(g.lookahead<=1){if(Ie(g),g.lookahead===0&&Q===p)return I;if(g.lookahead===0)break}g.strstart+=g.lookahead,g.lookahead=0;var N=g.block_start+H;if((g.strstart===0||g.strstart>=N)&&(g.lookahead=g.strstart-N,g.strstart=N,ee(g,!1),g.strm.avail_out===0)||g.strstart-g.block_start>=g.w_size-O&&(ee(g,!1),g.strm.avail_out===0))return I}return g.insert=0,Q===m?(ee(g,!0),g.strm.avail_out===0?te:$):(g.strstart>g.block_start&&(ee(g,!1),g.strm.avail_out),I)}),new pe(4,4,8,4,oe),new pe(4,5,16,8,oe),new pe(4,6,32,32,oe),new pe(4,4,16,16,he),new pe(8,16,32,32,he),new pe(8,16,128,128,he),new pe(8,32,128,256,he),new pe(32,128,258,1024,he),new pe(32,258,258,4096,he)],i.deflateInit=function(g,Q){return K(g,Q,R,15,8,0)},i.deflateInit2=K,i.deflateReset=q,i.deflateResetKeep=Re,i.deflateSetHeader=function(g,Q){return g&&g.state?g.state.wrap!==2?_:(g.state.gzhead=Q,v):_},i.deflate=function(g,Q){var H,N,D,j;if(!g||!g.state||5<Q||Q<0)return g?de(g,_):_;if(N=g.state,!g.output||!g.input&&g.avail_in!==0||N.status===666&&Q!==m)return de(g,g.avail_out===0?-5:_);if(N.strm=g,H=N.last_flush,N.last_flush=Q,N.status===b)if(N.wrap===2)g.adler=0,Ce(N,31),Ce(N,139),Ce(N,8),N.gzhead?(Ce(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),Ce(N,255&N.gzhead.time),Ce(N,N.gzhead.time>>8&255),Ce(N,N.gzhead.time>>16&255),Ce(N,N.gzhead.time>>24&255),Ce(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),Ce(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(Ce(N,255&N.gzhead.extra.length),Ce(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(g.adler=h(g.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(Ce(N,0),Ce(N,0),Ce(N,0),Ce(N,0),Ce(N,0),Ce(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),Ce(N,3),N.status=S);else{var z=R+(N.w_bits-8<<4)<<8;z|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(z|=32),z+=31-z%31,N.status=S,we(N,z),N.strstart!==0&&(we(N,g.adler>>>16),we(N,65535&g.adler)),g.adler=1}if(N.status===69)if(N.gzhead.extra){for(D=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>D&&(g.adler=h(g.adler,N.pending_buf,N.pending-D,D)),re(g),D=N.pending,N.pending!==N.pending_buf_size));)Ce(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>D&&(g.adler=h(g.adler,N.pending_buf,N.pending-D,D)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){D=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>D&&(g.adler=h(g.adler,N.pending_buf,N.pending-D,D)),re(g),D=N.pending,N.pending===N.pending_buf_size)){j=1;break}j=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,Ce(N,j)}while(j!==0);N.gzhead.hcrc&&N.pending>D&&(g.adler=h(g.adler,N.pending_buf,N.pending-D,D)),j===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){D=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>D&&(g.adler=h(g.adler,N.pending_buf,N.pending-D,D)),re(g),D=N.pending,N.pending===N.pending_buf_size)){j=1;break}j=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,Ce(N,j)}while(j!==0);N.gzhead.hcrc&&N.pending>D&&(g.adler=h(g.adler,N.pending_buf,N.pending-D,D)),j===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&re(g),N.pending+2<=N.pending_buf_size&&(Ce(N,255&g.adler),Ce(N,g.adler>>8&255),g.adler=0,N.status=S)):N.status=S),N.pending!==0){if(re(g),g.avail_out===0)return N.last_flush=-1,v}else if(g.avail_in===0&&ie(Q)<=ie(H)&&Q!==m)return de(g,-5);if(N.status===666&&g.avail_in!==0)return de(g,-5);if(g.avail_in!==0||N.lookahead!==0||Q!==p&&N.status!==666){var A=N.strategy===2?function(W,X){for(var se;;){if(W.lookahead===0&&(Ie(W),W.lookahead===0)){if(X===p)return I;break}if(W.match_length=0,se=a._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,se&&(ee(W,!1),W.strm.avail_out===0))return I}return W.insert=0,X===m?(ee(W,!0),W.strm.avail_out===0?te:$):W.last_lit&&(ee(W,!1),W.strm.avail_out===0)?I:J}(N,Q):N.strategy===3?function(W,X){for(var se,le,_e,Ae,ce=W.window;;){if(W.lookahead<=P){if(Ie(W),W.lookahead<=P&&X===p)return I;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=T&&0<W.strstart&&(le=ce[_e=W.strstart-1])===ce[++_e]&&le===ce[++_e]&&le===ce[++_e]){Ae=W.strstart+P;do;while(le===ce[++_e]&&le===ce[++_e]&&le===ce[++_e]&&le===ce[++_e]&&le===ce[++_e]&&le===ce[++_e]&&le===ce[++_e]&&le===ce[++_e]&&_e<Ae);W.match_length=P-(Ae-_e),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=T?(se=a._tr_tally(W,1,W.match_length-T),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(se=a._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),se&&(ee(W,!1),W.strm.avail_out===0))return I}return W.insert=0,X===m?(ee(W,!0),W.strm.avail_out===0?te:$):W.last_lit&&(ee(W,!1),W.strm.avail_out===0)?I:J}(N,Q):s[N.level].func(N,Q);if(A!==te&&A!==$||(N.status=666),A===I||A===te)return g.avail_out===0&&(N.last_flush=-1),v;if(A===J&&(Q===1?a._tr_align(N):Q!==5&&(a._tr_stored_block(N,0,0,!1),Q===3&&(Ee(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),re(g),g.avail_out===0))return N.last_flush=-1,v}return Q!==m?v:N.wrap<=0?1:(N.wrap===2?(Ce(N,255&g.adler),Ce(N,g.adler>>8&255),Ce(N,g.adler>>16&255),Ce(N,g.adler>>24&255),Ce(N,255&g.total_in),Ce(N,g.total_in>>8&255),Ce(N,g.total_in>>16&255),Ce(N,g.total_in>>24&255)):(we(N,g.adler>>>16),we(N,65535&g.adler)),re(g),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?v:1)},i.deflateEnd=function(g){var Q;return g&&g.state?(Q=g.state.status)!==b&&Q!==69&&Q!==73&&Q!==91&&Q!==103&&Q!==S&&Q!==666?de(g,_):(g.state=null,Q===S?de(g,-3):v):_},i.deflateSetDictionary=function(g,Q){var H,N,D,j,z,A,W,X,se=Q.length;if(!g||!g.state||(j=(H=g.state).wrap)===2||j===1&&H.status!==b||H.lookahead)return _;for(j===1&&(g.adler=l(g.adler,Q,se,0)),H.wrap=0,se>=H.w_size&&(j===0&&(Ee(H.head),H.strstart=0,H.block_start=0,H.insert=0),X=new o.Buf8(H.w_size),o.arraySet(X,Q,se-H.w_size,H.w_size,0),Q=X,se=H.w_size),z=g.avail_in,A=g.next_in,W=g.input,g.avail_in=se,g.next_in=0,g.input=Q,Ie(H);H.lookahead>=T;){for(N=H.strstart,D=H.lookahead-(T-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[N+T-1])&H.hash_mask,H.prev[N&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=N,N++,--D;);H.strstart=N,H.lookahead=T-1,Ie(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=T-1,H.match_available=0,g.next_in=A,g.input=W,g.avail_in=z,H.wrap=j,v},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(s,o){var a,l,h,f,p,m,v,_,u,w,x,R,M,V,L,F,C,E,T,P,O,b,S,I,J;a=s.state,l=s.next_in,I=s.input,h=l+(s.avail_in-5),f=s.next_out,J=s.output,p=f-(o-s.avail_out),m=f+(s.avail_out-257),v=a.dmax,_=a.wsize,u=a.whave,w=a.wnext,x=a.window,R=a.hold,M=a.bits,V=a.lencode,L=a.distcode,F=(1<<a.lenbits)-1,C=(1<<a.distbits)-1;e:do{M<15&&(R+=I[l++]<<M,M+=8,R+=I[l++]<<M,M+=8),E=V[R&F];t:for(;;){if(R>>>=T=E>>>24,M-=T,(T=E>>>16&255)===0)J[f++]=65535&E;else{if(!(16&T)){if(!(64&T)){E=V[(65535&E)+(R&(1<<T)-1)];continue t}if(32&T){a.mode=12;break e}s.msg="invalid literal/length code",a.mode=30;break e}P=65535&E,(T&=15)&&(M<T&&(R+=I[l++]<<M,M+=8),P+=R&(1<<T)-1,R>>>=T,M-=T),M<15&&(R+=I[l++]<<M,M+=8,R+=I[l++]<<M,M+=8),E=L[R&C];n:for(;;){if(R>>>=T=E>>>24,M-=T,!(16&(T=E>>>16&255))){if(!(64&T)){E=L[(65535&E)+(R&(1<<T)-1)];continue n}s.msg="invalid distance code",a.mode=30;break e}if(O=65535&E,M<(T&=15)&&(R+=I[l++]<<M,(M+=8)<T&&(R+=I[l++]<<M,M+=8)),v<(O+=R&(1<<T)-1)){s.msg="invalid distance too far back",a.mode=30;break e}if(R>>>=T,M-=T,(T=f-p)<O){if(u<(T=O-T)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break e}if(S=x,(b=0)===w){if(b+=_-T,T<P){for(P-=T;J[f++]=x[b++],--T;);b=f-O,S=J}}else if(w<T){if(b+=_+w-T,(T-=w)<P){for(P-=T;J[f++]=x[b++],--T;);if(b=0,w<P){for(P-=T=w;J[f++]=x[b++],--T;);b=f-O,S=J}}}else if(b+=w-T,T<P){for(P-=T;J[f++]=x[b++],--T;);b=f-O,S=J}for(;2<P;)J[f++]=S[b++],J[f++]=S[b++],J[f++]=S[b++],P-=3;P&&(J[f++]=S[b++],1<P&&(J[f++]=S[b++]))}else{for(b=f-O;J[f++]=J[b++],J[f++]=J[b++],J[f++]=J[b++],2<(P-=3););P&&(J[f++]=J[b++],1<P&&(J[f++]=J[b++]))}break}}break}}while(l<h&&f<m);l-=P=M>>3,R&=(1<<(M-=P<<3))-1,s.next_in=l,s.next_out=f,s.avail_in=l<h?h-l+5:5-(l-h),s.avail_out=f<m?m-f+257:257-(f-m),a.hold=R,a.bits=M}},{}],49:[function(n,r,i){var s=n("../utils/common"),o=n("./adler32"),a=n("./crc32"),l=n("./inffast"),h=n("./inftrees"),f=1,p=2,m=0,v=-2,_=1,u=852,w=592;function x(b){return(b>>>24&255)+(b>>>8&65280)+((65280&b)<<8)+((255&b)<<24)}function R(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(b){var S;return b&&b.state?(S=b.state,b.total_in=b.total_out=S.total=0,b.msg="",S.wrap&&(b.adler=1&S.wrap),S.mode=_,S.last=0,S.havedict=0,S.dmax=32768,S.head=null,S.hold=0,S.bits=0,S.lencode=S.lendyn=new s.Buf32(u),S.distcode=S.distdyn=new s.Buf32(w),S.sane=1,S.back=-1,m):v}function V(b){var S;return b&&b.state?((S=b.state).wsize=0,S.whave=0,S.wnext=0,M(b)):v}function L(b,S){var I,J;return b&&b.state?(J=b.state,S<0?(I=0,S=-S):(I=1+(S>>4),S<48&&(S&=15)),S&&(S<8||15<S)?v:(J.window!==null&&J.wbits!==S&&(J.window=null),J.wrap=I,J.wbits=S,V(b))):v}function F(b,S){var I,J;return b?(J=new R,(b.state=J).window=null,(I=L(b,S))!==m&&(b.state=null),I):v}var C,E,T=!0;function P(b){if(T){var S;for(C=new s.Buf32(512),E=new s.Buf32(32),S=0;S<144;)b.lens[S++]=8;for(;S<256;)b.lens[S++]=9;for(;S<280;)b.lens[S++]=7;for(;S<288;)b.lens[S++]=8;for(h(f,b.lens,0,288,C,0,b.work,{bits:9}),S=0;S<32;)b.lens[S++]=5;h(p,b.lens,0,32,E,0,b.work,{bits:5}),T=!1}b.lencode=C,b.lenbits=9,b.distcode=E,b.distbits=5}function O(b,S,I,J){var te,$=b.state;return $.window===null&&($.wsize=1<<$.wbits,$.wnext=0,$.whave=0,$.window=new s.Buf8($.wsize)),J>=$.wsize?(s.arraySet($.window,S,I-$.wsize,$.wsize,0),$.wnext=0,$.whave=$.wsize):(J<(te=$.wsize-$.wnext)&&(te=J),s.arraySet($.window,S,I-J,te,$.wnext),(J-=te)?(s.arraySet($.window,S,I-J,J,0),$.wnext=J,$.whave=$.wsize):($.wnext+=te,$.wnext===$.wsize&&($.wnext=0),$.whave<$.wsize&&($.whave+=te))),0}i.inflateReset=V,i.inflateReset2=L,i.inflateResetKeep=M,i.inflateInit=function(b){return F(b,15)},i.inflateInit2=F,i.inflate=function(b,S){var I,J,te,$,de,ie,Ee,re,ee,Ce,we,Z,Ie,oe,he,pe,Te,Re,q,K,g,Q,H,N,D=0,j=new s.Buf8(4),z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!b||!b.state||!b.output||!b.input&&b.avail_in!==0)return v;(I=b.state).mode===12&&(I.mode=13),de=b.next_out,te=b.output,Ee=b.avail_out,$=b.next_in,J=b.input,ie=b.avail_in,re=I.hold,ee=I.bits,Ce=ie,we=Ee,Q=m;e:for(;;)switch(I.mode){case _:if(I.wrap===0){I.mode=13;break}for(;ee<16;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(2&I.wrap&&re===35615){j[I.check=0]=255&re,j[1]=re>>>8&255,I.check=a(I.check,j,2,0),ee=re=0,I.mode=2;break}if(I.flags=0,I.head&&(I.head.done=!1),!(1&I.wrap)||(((255&re)<<8)+(re>>8))%31){b.msg="incorrect header check",I.mode=30;break}if((15&re)!=8){b.msg="unknown compression method",I.mode=30;break}if(ee-=4,g=8+(15&(re>>>=4)),I.wbits===0)I.wbits=g;else if(g>I.wbits){b.msg="invalid window size",I.mode=30;break}I.dmax=1<<g,b.adler=I.check=1,I.mode=512&re?10:12,ee=re=0;break;case 2:for(;ee<16;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(I.flags=re,(255&I.flags)!=8){b.msg="unknown compression method",I.mode=30;break}if(57344&I.flags){b.msg="unknown header flags set",I.mode=30;break}I.head&&(I.head.text=re>>8&1),512&I.flags&&(j[0]=255&re,j[1]=re>>>8&255,I.check=a(I.check,j,2,0)),ee=re=0,I.mode=3;case 3:for(;ee<32;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}I.head&&(I.head.time=re),512&I.flags&&(j[0]=255&re,j[1]=re>>>8&255,j[2]=re>>>16&255,j[3]=re>>>24&255,I.check=a(I.check,j,4,0)),ee=re=0,I.mode=4;case 4:for(;ee<16;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}I.head&&(I.head.xflags=255&re,I.head.os=re>>8),512&I.flags&&(j[0]=255&re,j[1]=re>>>8&255,I.check=a(I.check,j,2,0)),ee=re=0,I.mode=5;case 5:if(1024&I.flags){for(;ee<16;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}I.length=re,I.head&&(I.head.extra_len=re),512&I.flags&&(j[0]=255&re,j[1]=re>>>8&255,I.check=a(I.check,j,2,0)),ee=re=0}else I.head&&(I.head.extra=null);I.mode=6;case 6:if(1024&I.flags&&(ie<(Z=I.length)&&(Z=ie),Z&&(I.head&&(g=I.head.extra_len-I.length,I.head.extra||(I.head.extra=new Array(I.head.extra_len)),s.arraySet(I.head.extra,J,$,Z,g)),512&I.flags&&(I.check=a(I.check,J,Z,$)),ie-=Z,$+=Z,I.length-=Z),I.length))break e;I.length=0,I.mode=7;case 7:if(2048&I.flags){if(ie===0)break e;for(Z=0;g=J[$+Z++],I.head&&g&&I.length<65536&&(I.head.name+=String.fromCharCode(g)),g&&Z<ie;);if(512&I.flags&&(I.check=a(I.check,J,Z,$)),ie-=Z,$+=Z,g)break e}else I.head&&(I.head.name=null);I.length=0,I.mode=8;case 8:if(4096&I.flags){if(ie===0)break e;for(Z=0;g=J[$+Z++],I.head&&g&&I.length<65536&&(I.head.comment+=String.fromCharCode(g)),g&&Z<ie;);if(512&I.flags&&(I.check=a(I.check,J,Z,$)),ie-=Z,$+=Z,g)break e}else I.head&&(I.head.comment=null);I.mode=9;case 9:if(512&I.flags){for(;ee<16;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(re!==(65535&I.check)){b.msg="header crc mismatch",I.mode=30;break}ee=re=0}I.head&&(I.head.hcrc=I.flags>>9&1,I.head.done=!0),b.adler=I.check=0,I.mode=12;break;case 10:for(;ee<32;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}b.adler=I.check=x(re),ee=re=0,I.mode=11;case 11:if(I.havedict===0)return b.next_out=de,b.avail_out=Ee,b.next_in=$,b.avail_in=ie,I.hold=re,I.bits=ee,2;b.adler=I.check=1,I.mode=12;case 12:if(S===5||S===6)break e;case 13:if(I.last){re>>>=7&ee,ee-=7&ee,I.mode=27;break}for(;ee<3;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}switch(I.last=1&re,ee-=1,3&(re>>>=1)){case 0:I.mode=14;break;case 1:if(P(I),I.mode=20,S!==6)break;re>>>=2,ee-=2;break e;case 2:I.mode=17;break;case 3:b.msg="invalid block type",I.mode=30}re>>>=2,ee-=2;break;case 14:for(re>>>=7&ee,ee-=7&ee;ee<32;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if((65535&re)!=(re>>>16^65535)){b.msg="invalid stored block lengths",I.mode=30;break}if(I.length=65535&re,ee=re=0,I.mode=15,S===6)break e;case 15:I.mode=16;case 16:if(Z=I.length){if(ie<Z&&(Z=ie),Ee<Z&&(Z=Ee),Z===0)break e;s.arraySet(te,J,$,Z,de),ie-=Z,$+=Z,Ee-=Z,de+=Z,I.length-=Z;break}I.mode=12;break;case 17:for(;ee<14;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(I.nlen=257+(31&re),re>>>=5,ee-=5,I.ndist=1+(31&re),re>>>=5,ee-=5,I.ncode=4+(15&re),re>>>=4,ee-=4,286<I.nlen||30<I.ndist){b.msg="too many length or distance symbols",I.mode=30;break}I.have=0,I.mode=18;case 18:for(;I.have<I.ncode;){for(;ee<3;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}I.lens[z[I.have++]]=7&re,re>>>=3,ee-=3}for(;I.have<19;)I.lens[z[I.have++]]=0;if(I.lencode=I.lendyn,I.lenbits=7,H={bits:I.lenbits},Q=h(0,I.lens,0,19,I.lencode,0,I.work,H),I.lenbits=H.bits,Q){b.msg="invalid code lengths set",I.mode=30;break}I.have=0,I.mode=19;case 19:for(;I.have<I.nlen+I.ndist;){for(;pe=(D=I.lencode[re&(1<<I.lenbits)-1])>>>16&255,Te=65535&D,!((he=D>>>24)<=ee);){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(Te<16)re>>>=he,ee-=he,I.lens[I.have++]=Te;else{if(Te===16){for(N=he+2;ee<N;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(re>>>=he,ee-=he,I.have===0){b.msg="invalid bit length repeat",I.mode=30;break}g=I.lens[I.have-1],Z=3+(3&re),re>>>=2,ee-=2}else if(Te===17){for(N=he+3;ee<N;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}ee-=he,g=0,Z=3+(7&(re>>>=he)),re>>>=3,ee-=3}else{for(N=he+7;ee<N;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}ee-=he,g=0,Z=11+(127&(re>>>=he)),re>>>=7,ee-=7}if(I.have+Z>I.nlen+I.ndist){b.msg="invalid bit length repeat",I.mode=30;break}for(;Z--;)I.lens[I.have++]=g}}if(I.mode===30)break;if(I.lens[256]===0){b.msg="invalid code -- missing end-of-block",I.mode=30;break}if(I.lenbits=9,H={bits:I.lenbits},Q=h(f,I.lens,0,I.nlen,I.lencode,0,I.work,H),I.lenbits=H.bits,Q){b.msg="invalid literal/lengths set",I.mode=30;break}if(I.distbits=6,I.distcode=I.distdyn,H={bits:I.distbits},Q=h(p,I.lens,I.nlen,I.ndist,I.distcode,0,I.work,H),I.distbits=H.bits,Q){b.msg="invalid distances set",I.mode=30;break}if(I.mode=20,S===6)break e;case 20:I.mode=21;case 21:if(6<=ie&&258<=Ee){b.next_out=de,b.avail_out=Ee,b.next_in=$,b.avail_in=ie,I.hold=re,I.bits=ee,l(b,we),de=b.next_out,te=b.output,Ee=b.avail_out,$=b.next_in,J=b.input,ie=b.avail_in,re=I.hold,ee=I.bits,I.mode===12&&(I.back=-1);break}for(I.back=0;pe=(D=I.lencode[re&(1<<I.lenbits)-1])>>>16&255,Te=65535&D,!((he=D>>>24)<=ee);){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(pe&&!(240&pe)){for(Re=he,q=pe,K=Te;pe=(D=I.lencode[K+((re&(1<<Re+q)-1)>>Re)])>>>16&255,Te=65535&D,!(Re+(he=D>>>24)<=ee);){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}re>>>=Re,ee-=Re,I.back+=Re}if(re>>>=he,ee-=he,I.back+=he,I.length=Te,pe===0){I.mode=26;break}if(32&pe){I.back=-1,I.mode=12;break}if(64&pe){b.msg="invalid literal/length code",I.mode=30;break}I.extra=15&pe,I.mode=22;case 22:if(I.extra){for(N=I.extra;ee<N;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}I.length+=re&(1<<I.extra)-1,re>>>=I.extra,ee-=I.extra,I.back+=I.extra}I.was=I.length,I.mode=23;case 23:for(;pe=(D=I.distcode[re&(1<<I.distbits)-1])>>>16&255,Te=65535&D,!((he=D>>>24)<=ee);){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(!(240&pe)){for(Re=he,q=pe,K=Te;pe=(D=I.distcode[K+((re&(1<<Re+q)-1)>>Re)])>>>16&255,Te=65535&D,!(Re+(he=D>>>24)<=ee);){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}re>>>=Re,ee-=Re,I.back+=Re}if(re>>>=he,ee-=he,I.back+=he,64&pe){b.msg="invalid distance code",I.mode=30;break}I.offset=Te,I.extra=15&pe,I.mode=24;case 24:if(I.extra){for(N=I.extra;ee<N;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}I.offset+=re&(1<<I.extra)-1,re>>>=I.extra,ee-=I.extra,I.back+=I.extra}if(I.offset>I.dmax){b.msg="invalid distance too far back",I.mode=30;break}I.mode=25;case 25:if(Ee===0)break e;if(Z=we-Ee,I.offset>Z){if((Z=I.offset-Z)>I.whave&&I.sane){b.msg="invalid distance too far back",I.mode=30;break}Ie=Z>I.wnext?(Z-=I.wnext,I.wsize-Z):I.wnext-Z,Z>I.length&&(Z=I.length),oe=I.window}else oe=te,Ie=de-I.offset,Z=I.length;for(Ee<Z&&(Z=Ee),Ee-=Z,I.length-=Z;te[de++]=oe[Ie++],--Z;);I.length===0&&(I.mode=21);break;case 26:if(Ee===0)break e;te[de++]=I.length,Ee--,I.mode=21;break;case 27:if(I.wrap){for(;ee<32;){if(ie===0)break e;ie--,re|=J[$++]<<ee,ee+=8}if(we-=Ee,b.total_out+=we,I.total+=we,we&&(b.adler=I.check=I.flags?a(I.check,te,we,de-we):o(I.check,te,we,de-we)),we=Ee,(I.flags?re:x(re))!==I.check){b.msg="incorrect data check",I.mode=30;break}ee=re=0}I.mode=28;case 28:if(I.wrap&&I.flags){for(;ee<32;){if(ie===0)break e;ie--,re+=J[$++]<<ee,ee+=8}if(re!==(4294967295&I.total)){b.msg="incorrect length check",I.mode=30;break}ee=re=0}I.mode=29;case 29:Q=1;break e;case 30:Q=-3;break e;case 31:return-4;case 32:default:return v}return b.next_out=de,b.avail_out=Ee,b.next_in=$,b.avail_in=ie,I.hold=re,I.bits=ee,(I.wsize||we!==b.avail_out&&I.mode<30&&(I.mode<27||S!==4))&&O(b,b.output,b.next_out,we-b.avail_out)?(I.mode=31,-4):(Ce-=b.avail_in,we-=b.avail_out,b.total_in+=Ce,b.total_out+=we,I.total+=we,I.wrap&&we&&(b.adler=I.check=I.flags?a(I.check,te,we,b.next_out-we):o(I.check,te,we,b.next_out-we)),b.data_type=I.bits+(I.last?64:0)+(I.mode===12?128:0)+(I.mode===20||I.mode===15?256:0),(Ce==0&&we===0||S===4)&&Q===m&&(Q=-5),Q)},i.inflateEnd=function(b){if(!b||!b.state)return v;var S=b.state;return S.window&&(S.window=null),b.state=null,m},i.inflateGetHeader=function(b,S){var I;return b&&b.state&&2&(I=b.state).wrap?((I.head=S).done=!1,m):v},i.inflateSetDictionary=function(b,S){var I,J=S.length;return b&&b.state?(I=b.state).wrap!==0&&I.mode!==11?v:I.mode===11&&o(1,S,J,0)!==I.check?-3:O(b,S,J,J)?(I.mode=31,-4):(I.havedict=1,m):v},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var s=n("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(f,p,m,v,_,u,w,x){var R,M,V,L,F,C,E,T,P,O=x.bits,b=0,S=0,I=0,J=0,te=0,$=0,de=0,ie=0,Ee=0,re=0,ee=null,Ce=0,we=new s.Buf16(16),Z=new s.Buf16(16),Ie=null,oe=0;for(b=0;b<=15;b++)we[b]=0;for(S=0;S<v;S++)we[p[m+S]]++;for(te=O,J=15;1<=J&&we[J]===0;J--);if(J<te&&(te=J),J===0)return _[u++]=20971520,_[u++]=20971520,x.bits=1,0;for(I=1;I<J&&we[I]===0;I++);for(te<I&&(te=I),b=ie=1;b<=15;b++)if(ie<<=1,(ie-=we[b])<0)return-1;if(0<ie&&(f===0||J!==1))return-1;for(Z[1]=0,b=1;b<15;b++)Z[b+1]=Z[b]+we[b];for(S=0;S<v;S++)p[m+S]!==0&&(w[Z[p[m+S]]++]=S);if(C=f===0?(ee=Ie=w,19):f===1?(ee=o,Ce-=257,Ie=a,oe-=257,256):(ee=l,Ie=h,-1),b=I,F=u,de=S=re=0,V=-1,L=(Ee=1<<($=te))-1,f===1&&852<Ee||f===2&&592<Ee)return 1;for(;;){for(E=b-de,P=w[S]<C?(T=0,w[S]):w[S]>C?(T=Ie[oe+w[S]],ee[Ce+w[S]]):(T=96,0),R=1<<b-de,I=M=1<<$;_[F+(re>>de)+(M-=R)]=E<<24|T<<16|P|0,M!==0;);for(R=1<<b-1;re&R;)R>>=1;if(R!==0?(re&=R-1,re+=R):re=0,S++,--we[b]==0){if(b===J)break;b=p[m+w[S]]}if(te<b&&(re&L)!==V){for(de===0&&(de=te),F+=I,ie=1<<($=b-de);$+de<J&&!((ie-=we[$+de])<=0);)$++,ie<<=1;if(Ee+=1<<$,f===1&&852<Ee||f===2&&592<Ee)return 1;_[V=re&L]=te<<24|$<<16|F-u|0}}return re!==0&&(_[F+re]=b-de<<24|64<<16|0),x.bits=te,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var s=n("../utils/common"),o=0,a=1;function l(D){for(var j=D.length;0<=--j;)D[j]=0}var h=0,f=29,p=256,m=p+1+f,v=30,_=19,u=2*m+1,w=15,x=16,R=7,M=256,V=16,L=17,F=18,C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],E=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],O=new Array(2*(m+2));l(O);var b=new Array(2*v);l(b);var S=new Array(512);l(S);var I=new Array(256);l(I);var J=new Array(f);l(J);var te,$,de,ie=new Array(v);function Ee(D,j,z,A,W){this.static_tree=D,this.extra_bits=j,this.extra_base=z,this.elems=A,this.max_length=W,this.has_stree=D&&D.length}function re(D,j){this.dyn_tree=D,this.max_code=0,this.stat_desc=j}function ee(D){return D<256?S[D]:S[256+(D>>>7)]}function Ce(D,j){D.pending_buf[D.pending++]=255&j,D.pending_buf[D.pending++]=j>>>8&255}function we(D,j,z){D.bi_valid>x-z?(D.bi_buf|=j<<D.bi_valid&65535,Ce(D,D.bi_buf),D.bi_buf=j>>x-D.bi_valid,D.bi_valid+=z-x):(D.bi_buf|=j<<D.bi_valid&65535,D.bi_valid+=z)}function Z(D,j,z){we(D,z[2*j],z[2*j+1])}function Ie(D,j){for(var z=0;z|=1&D,D>>>=1,z<<=1,0<--j;);return z>>>1}function oe(D,j,z){var A,W,X=new Array(w+1),se=0;for(A=1;A<=w;A++)X[A]=se=se+z[A-1]<<1;for(W=0;W<=j;W++){var le=D[2*W+1];le!==0&&(D[2*W]=Ie(X[le]++,le))}}function he(D){var j;for(j=0;j<m;j++)D.dyn_ltree[2*j]=0;for(j=0;j<v;j++)D.dyn_dtree[2*j]=0;for(j=0;j<_;j++)D.bl_tree[2*j]=0;D.dyn_ltree[2*M]=1,D.opt_len=D.static_len=0,D.last_lit=D.matches=0}function pe(D){8<D.bi_valid?Ce(D,D.bi_buf):0<D.bi_valid&&(D.pending_buf[D.pending++]=D.bi_buf),D.bi_buf=0,D.bi_valid=0}function Te(D,j,z,A){var W=2*j,X=2*z;return D[W]<D[X]||D[W]===D[X]&&A[j]<=A[z]}function Re(D,j,z){for(var A=D.heap[z],W=z<<1;W<=D.heap_len&&(W<D.heap_len&&Te(j,D.heap[W+1],D.heap[W],D.depth)&&W++,!Te(j,A,D.heap[W],D.depth));)D.heap[z]=D.heap[W],z=W,W<<=1;D.heap[z]=A}function q(D,j,z){var A,W,X,se,le=0;if(D.last_lit!==0)for(;A=D.pending_buf[D.d_buf+2*le]<<8|D.pending_buf[D.d_buf+2*le+1],W=D.pending_buf[D.l_buf+le],le++,A===0?Z(D,W,j):(Z(D,(X=I[W])+p+1,j),(se=C[X])!==0&&we(D,W-=J[X],se),Z(D,X=ee(--A),z),(se=E[X])!==0&&we(D,A-=ie[X],se)),le<D.last_lit;);Z(D,M,j)}function K(D,j){var z,A,W,X=j.dyn_tree,se=j.stat_desc.static_tree,le=j.stat_desc.has_stree,_e=j.stat_desc.elems,Ae=-1;for(D.heap_len=0,D.heap_max=u,z=0;z<_e;z++)X[2*z]!==0?(D.heap[++D.heap_len]=Ae=z,D.depth[z]=0):X[2*z+1]=0;for(;D.heap_len<2;)X[2*(W=D.heap[++D.heap_len]=Ae<2?++Ae:0)]=1,D.depth[W]=0,D.opt_len--,le&&(D.static_len-=se[2*W+1]);for(j.max_code=Ae,z=D.heap_len>>1;1<=z;z--)Re(D,X,z);for(W=_e;z=D.heap[1],D.heap[1]=D.heap[D.heap_len--],Re(D,X,1),A=D.heap[1],D.heap[--D.heap_max]=z,D.heap[--D.heap_max]=A,X[2*W]=X[2*z]+X[2*A],D.depth[W]=(D.depth[z]>=D.depth[A]?D.depth[z]:D.depth[A])+1,X[2*z+1]=X[2*A+1]=W,D.heap[1]=W++,Re(D,X,1),2<=D.heap_len;);D.heap[--D.heap_max]=D.heap[1],function(ce,We){var it,Qe,mt,Be,fe,B,Ne=We.dyn_tree,ge=We.max_code,Ue=We.stat_desc.static_tree,tt=We.stat_desc.has_stree,Tt=We.stat_desc.extra_bits,Ot=We.stat_desc.extra_base,ut=We.stat_desc.max_length,fn=0;for(Be=0;Be<=w;Be++)ce.bl_count[Be]=0;for(Ne[2*ce.heap[ce.heap_max]+1]=0,it=ce.heap_max+1;it<u;it++)ut<(Be=Ne[2*Ne[2*(Qe=ce.heap[it])+1]+1]+1)&&(Be=ut,fn++),Ne[2*Qe+1]=Be,ge<Qe||(ce.bl_count[Be]++,fe=0,Ot<=Qe&&(fe=Tt[Qe-Ot]),B=Ne[2*Qe],ce.opt_len+=B*(Be+fe),tt&&(ce.static_len+=B*(Ue[2*Qe+1]+fe)));if(fn!==0){do{for(Be=ut-1;ce.bl_count[Be]===0;)Be--;ce.bl_count[Be]--,ce.bl_count[Be+1]+=2,ce.bl_count[ut]--,fn-=2}while(0<fn);for(Be=ut;Be!==0;Be--)for(Qe=ce.bl_count[Be];Qe!==0;)ge<(mt=ce.heap[--it])||(Ne[2*mt+1]!==Be&&(ce.opt_len+=(Be-Ne[2*mt+1])*Ne[2*mt],Ne[2*mt+1]=Be),Qe--)}}(D,j),oe(X,Ae,D.bl_count)}function g(D,j,z){var A,W,X=-1,se=j[1],le=0,_e=7,Ae=4;for(se===0&&(_e=138,Ae=3),j[2*(z+1)+1]=65535,A=0;A<=z;A++)W=se,se=j[2*(A+1)+1],++le<_e&&W===se||(le<Ae?D.bl_tree[2*W]+=le:W!==0?(W!==X&&D.bl_tree[2*W]++,D.bl_tree[2*V]++):le<=10?D.bl_tree[2*L]++:D.bl_tree[2*F]++,X=W,Ae=(le=0)===se?(_e=138,3):W===se?(_e=6,3):(_e=7,4))}function Q(D,j,z){var A,W,X=-1,se=j[1],le=0,_e=7,Ae=4;for(se===0&&(_e=138,Ae=3),A=0;A<=z;A++)if(W=se,se=j[2*(A+1)+1],!(++le<_e&&W===se)){if(le<Ae)for(;Z(D,W,D.bl_tree),--le!=0;);else W!==0?(W!==X&&(Z(D,W,D.bl_tree),le--),Z(D,V,D.bl_tree),we(D,le-3,2)):le<=10?(Z(D,L,D.bl_tree),we(D,le-3,3)):(Z(D,F,D.bl_tree),we(D,le-11,7));X=W,Ae=(le=0)===se?(_e=138,3):W===se?(_e=6,3):(_e=7,4)}}l(ie);var H=!1;function N(D,j,z,A){we(D,(h<<1)+(A?1:0),3),function(W,X,se,le){pe(W),Ce(W,se),Ce(W,~se),s.arraySet(W.pending_buf,W.window,X,se,W.pending),W.pending+=se}(D,j,z)}i._tr_init=function(D){H||(function(){var j,z,A,W,X,se=new Array(w+1);for(W=A=0;W<f-1;W++)for(J[W]=A,j=0;j<1<<C[W];j++)I[A++]=W;for(I[A-1]=W,W=X=0;W<16;W++)for(ie[W]=X,j=0;j<1<<E[W];j++)S[X++]=W;for(X>>=7;W<v;W++)for(ie[W]=X<<7,j=0;j<1<<E[W]-7;j++)S[256+X++]=W;for(z=0;z<=w;z++)se[z]=0;for(j=0;j<=143;)O[2*j+1]=8,j++,se[8]++;for(;j<=255;)O[2*j+1]=9,j++,se[9]++;for(;j<=279;)O[2*j+1]=7,j++,se[7]++;for(;j<=287;)O[2*j+1]=8,j++,se[8]++;for(oe(O,m+1,se),j=0;j<v;j++)b[2*j+1]=5,b[2*j]=Ie(j,5);te=new Ee(O,C,p+1,m,w),$=new Ee(b,E,0,v,w),de=new Ee(new Array(0),T,0,_,R)}(),H=!0),D.l_desc=new re(D.dyn_ltree,te),D.d_desc=new re(D.dyn_dtree,$),D.bl_desc=new re(D.bl_tree,de),D.bi_buf=0,D.bi_valid=0,he(D)},i._tr_stored_block=N,i._tr_flush_block=function(D,j,z,A){var W,X,se=0;0<D.level?(D.strm.data_type===2&&(D.strm.data_type=function(le){var _e,Ae=4093624447;for(_e=0;_e<=31;_e++,Ae>>>=1)if(1&Ae&&le.dyn_ltree[2*_e]!==0)return o;if(le.dyn_ltree[18]!==0||le.dyn_ltree[20]!==0||le.dyn_ltree[26]!==0)return a;for(_e=32;_e<p;_e++)if(le.dyn_ltree[2*_e]!==0)return a;return o}(D)),K(D,D.l_desc),K(D,D.d_desc),se=function(le){var _e;for(g(le,le.dyn_ltree,le.l_desc.max_code),g(le,le.dyn_dtree,le.d_desc.max_code),K(le,le.bl_desc),_e=_-1;3<=_e&&le.bl_tree[2*P[_e]+1]===0;_e--);return le.opt_len+=3*(_e+1)+5+5+4,_e}(D),W=D.opt_len+3+7>>>3,(X=D.static_len+3+7>>>3)<=W&&(W=X)):W=X=z+5,z+4<=W&&j!==-1?N(D,j,z,A):D.strategy===4||X===W?(we(D,2+(A?1:0),3),q(D,O,b)):(we(D,4+(A?1:0),3),function(le,_e,Ae,ce){var We;for(we(le,_e-257,5),we(le,Ae-1,5),we(le,ce-4,4),We=0;We<ce;We++)we(le,le.bl_tree[2*P[We]+1],3);Q(le,le.dyn_ltree,_e-1),Q(le,le.dyn_dtree,Ae-1)}(D,D.l_desc.max_code+1,D.d_desc.max_code+1,se+1),q(D,D.dyn_ltree,D.dyn_dtree)),he(D),A&&pe(D)},i._tr_tally=function(D,j,z){return D.pending_buf[D.d_buf+2*D.last_lit]=j>>>8&255,D.pending_buf[D.d_buf+2*D.last_lit+1]=255&j,D.pending_buf[D.l_buf+D.last_lit]=255&z,D.last_lit++,j===0?D.dyn_ltree[2*z]++:(D.matches++,j--,D.dyn_ltree[2*(I[z]+p+1)]++,D.dyn_dtree[2*ee(j)]++),D.last_lit===D.lit_bufsize-1},i._tr_align=function(D){we(D,2,3),Z(D,M,O),function(j){j.bi_valid===16?(Ce(j,j.bi_buf),j.bi_buf=0,j.bi_valid=0):8<=j.bi_valid&&(j.pending_buf[j.pending++]=255&j.bi_buf,j.bi_buf>>=8,j.bi_valid-=8)}(D)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(s){(function(o,a){if(!o.setImmediate){var l,h,f,p,m=1,v={},_=!1,u=o.document,w=Object.getPrototypeOf&&Object.getPrototypeOf(o);w=w&&w.setTimeout?w:o,l={}.toString.call(o.process)==="[object process]"?function(V){process.nextTick(function(){R(V)})}:function(){if(o.postMessage&&!o.importScripts){var V=!0,L=o.onmessage;return o.onmessage=function(){V=!1},o.postMessage("","*"),o.onmessage=L,V}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",M,!1):o.attachEvent("onmessage",M),function(V){o.postMessage(p+V,"*")}):o.MessageChannel?((f=new MessageChannel).port1.onmessage=function(V){R(V.data)},function(V){f.port2.postMessage(V)}):u&&"onreadystatechange"in u.createElement("script")?(h=u.documentElement,function(V){var L=u.createElement("script");L.onreadystatechange=function(){R(V),L.onreadystatechange=null,h.removeChild(L),L=null},h.appendChild(L)}):function(V){setTimeout(R,0,V)},w.setImmediate=function(V){typeof V!="function"&&(V=new Function(""+V));for(var L=new Array(arguments.length-1),F=0;F<L.length;F++)L[F]=arguments[F+1];var C={callback:V,args:L};return v[m]=C,l(m),m++},w.clearImmediate=x}function x(V){delete v[V]}function R(V){if(_)setTimeout(R,0,V);else{var L=v[V];if(L){_=!0;try{(function(F){var C=F.callback,E=F.args;switch(E.length){case 0:C();break;case 1:C(E[0]);break;case 2:C(E[0],E[1]);break;case 3:C(E[0],E[1],E[2]);break;default:C.apply(a,E)}})(L)}finally{x(V),_=!1}}}}function M(V){V.source===o&&typeof V.data=="string"&&V.data.indexOf(p)===0&&R(+V.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(H_);var kM=H_.exports;const SM=xM(kM),AM={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},RM={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},PM={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},NM={class:"export-tabs tabs"},OM={class:"export-content"},DM={class:"export-options",style:{"margin-bottom":"20px"}},MM={class:"form-group"},VM={class:"export-meta"},LM={class:"meta-item"},$M={class:"meta-item"},FM={class:"meta-item"},UM={class:"export-options",style:{"margin-bottom":"20px"}},zM={class:"form-group"},BM={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},jM={class:"coming-soon"},qM={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},WM={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},HM={key:1,class:"export-success"},GM={__name:"ExportModal",setup(t){const e=An(),n=In(),r=oa(),i=Se(()=>n.getProject(e.projectId)),s=me("json"),o=me(""),a=me(""),l=me(!0);rn(i,_=>{_&&!a.value&&(a.value=_.name||"presentation")},{immediate:!0});function h(){const _=n.exportProject(e.projectId);if(!_)return;const u=new Blob([_],{type:"application/json"}),w=URL.createObjectURL(u),x=document.createElement("a");x.href=w,x.download=`${a.value||"project"}.mediasurf.json`,x.click(),URL.revokeObjectURL(w),o.value="success",setTimeout(()=>o.value="",3e3)}function f(_,u="presentation"){return String(_).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||u}function p(_,u){return`
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
`}function m(){return`
(function () {
  var dataNode = document.getElementById('lf-data');
  if (!dataNode) return;

  var project;
  try {
    project = JSON.parse(dataNode.textContent || '{}');
  } catch (error) {
    console.error('MediaSurf export could not read project data.', error);
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
    if (String(Number(raw)) === raw && Number.isInteger(Number(raw))) {
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
      var videoId = extractYouTubeId(src);
      return videoId ? 'https://www.youtube.com/embed/' + videoId : '';
    }
    if (src.includes('player.vimeo.com/video/')) return src;
    if (src.includes('vimeo.com/')) {
      var vimeoId = extractVimeoId(src);
      return vimeoId ? 'https://player.vimeo.com/video/' + vimeoId : '';
    }
    return '';
  }

  function extractYouTubeId(src) {
    if (src.includes('youtu.be/')) {
      var shortPart = src.split('youtu.be/')[1] || '';
      return stripAfterDelimiters(shortPart) || '';
    }
    if (src.includes('v=')) {
      var queryPart = src.split('v=')[1] || '';
      return stripAfterDelimiters(queryPart) || '';
    }
    return '';
  }

  function extractVimeoId(src) {
    var parts = src.split('/').filter(Boolean);
    for (var index = parts.length - 1; index >= 0; index--) {
      var part = stripAfterDelimiters(parts[index]);
      if (String(Number(part)) === part && Number.isInteger(Number(part))) {
        return part;
      }
    }
    return '';
  }

  function stripAfterDelimiters(value) {
    var end = value.length;
    ['?', '&', '#', '/'].forEach(function (token) {
      var index = value.indexOf(token);
      if (index !== -1 && index < end) end = index;
    });
    return value.slice(0, end);
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
    if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
      return CSS.escape(String(value));
    }
    return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&');
  }
})();
`}async function v(){var J,te,$;const _=i.value;if(!_)return;o.value="processing";const u=new SM,w=u.folder("assets");let x=0;async function R(de,ie="media"){if((!de||de.startsWith("data:")||de.startsWith("http://localhost")||de.startsWith("blob:"))&&de.startsWith("data:"))return de;try{const re=await(await fetch(de)).blob();let ee="bin";const Ce=re.type;if(Ce.includes("image/png")?ee="png":Ce.includes("image/jpeg")?ee="jpg":Ce.includes("image/gif")?ee="gif":Ce.includes("image/svg")?ee="svg":Ce.includes("image/webp")?ee="webp":Ce.includes("video/mp4")?ee="mp4":Ce.includes("audio/mpeg")&&(ee="mp3"),ee==="bin"){const Z=de.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);Z&&(ee=Z[1])}x++;const we=`${ie}_${x}.${ee}`;return w.file(we,re),`assets/${we}`}catch(Ee){return console.warn("Could not fetch asset:",de,Ee),de}}const M=JSON.parse(JSON.stringify([..._.slides||[]])).sort((de,ie)=>(de.order??0)-(ie.order??0));if(l.value)for(const de of M){de.backgroundType==="image"&&de.backgroundImage&&(de.backgroundImage=await R(de.backgroundImage,"bg"));for(const ie of de.elements||[])ie.type==="image"&&((J=ie.content)!=null&&J.src)&&(ie.content.src=await R(ie.content.src,"img")),ie.type==="video"&&((te=ie.content)!=null&&te.src)&&!ie.content.src.includes("youtube")&&!ie.content.src.includes("youtu.be")&&(ie.content.src=await R(ie.content.src,"vid")),ie.type==="audio"&&(($=ie.content)!=null&&$.src)&&(ie.content.src=await R(ie.content.src,"aud"))}const V=f(a.value||_.name||"presentation"),L={name:_.name,theme:_.theme||{},settings:_.settings||{},slides:M},F=JSON.stringify(L).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),C=p(_.theme,_.settings),E=m(),T=`<script id="lf-data" type="application/json">${F}<\/script>`,O=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${V}</title>
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
  <span class="nav-counter" id="counter">1 / ${M.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${T}
<script src="script.js"><\/script>
</body>
</html>`;u.file("index.html",O),u.file("style.css",C),u.file("script.js",E);const b=await u.generateAsync({type:"blob"}),S=URL.createObjectURL(b),I=document.createElement("a");I.href=S,I.download=`${V}.zip`,I.click(),URL.revokeObjectURL(S),o.value="success",setTimeout(()=>o.value="",3e3)}return(_,u)=>(G(),St(is,{title:"Export Project",size:"md",onClose:u[9]||(u[9]=w=>xe(e).showExportModal=!1)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:u[8]||(u[8]=w=>xe(e).showExportModal=!1)},"Close")]),default:kt(()=>{var w,x,R,M,V;return[xe(r).user?(G(),Y(Me,{key:1},[d("div",NM,[d("button",{class:je(["tab-btn",s.value==="json"&&"active"]),onClick:u[2]||(u[2]=L=>s.value="json")},"JSON Project",2),d("button",{class:je(["tab-btn",s.value==="html"&&"active"]),onClick:u[3]||(u[3]=L=>s.value="html")},"HTML Package",2),d("button",{class:je(["tab-btn",s.value==="scorm"&&"active"]),onClick:u[4]||(u[4]=L=>s.value="scorm")},"SCORM",2)]),d("div",OM,[s.value==="json"?(G(),Y(Me,{key:0},[u[20]||(u[20]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"📦"),d("div",null,[d("h4",null,"JSON Project File"),d("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),d("div",DM,[d("div",MM,[u[15]||(u[15]=d("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),Ye(d("input",{type:"text","onUpdate:modelValue":u[5]||(u[5]=L=>a.value=L),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[pt,a.value]])])]),d("div",VM,[d("div",LM,[u[16]||(u[16]=d("span",null,"Project",-1)),d("strong",null,ve((w=i.value)==null?void 0:w.name),1)]),d("div",$M,[u[17]||(u[17]=d("span",null,"Slides",-1)),d("strong",null,ve(((R=(x=i.value)==null?void 0:x.slides)==null?void 0:R.length)||0),1)]),d("div",FM,[u[18]||(u[18]=d("span",null,"Elements",-1)),d("strong",null,ve(((V=(M=i.value)==null?void 0:M.slides)==null?void 0:V.reduce((L,F)=>{var C;return L+(((C=F.elements)==null?void 0:C.length)||0)},0))||0),1)])]),d("button",{class:"btn btn-primary export-btn",onClick:h},[...u[19]||(u[19]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),De(" Download JSON ",-1)])])],64)):s.value==="html"?(G(),Y(Me,{key:1},[u[24]||(u[24]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"🌐"),d("div",null,[d("h4",null,"Standalone HTML Package"),d("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),d("div",UM,[d("div",zM,[u[21]||(u[21]=d("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),Ye(d("input",{type:"text","onUpdate:modelValue":u[6]||(u[6]=L=>a.value=L),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[pt,a.value]])]),d("label",BM,[Ye(d("input",{type:"checkbox","onUpdate:modelValue":u[7]||(u[7]=L=>l.value=L)},null,512),[[Av,l.value]]),u[22]||(u[22]=De(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),u[25]||(u[25]=d("div",{class:"export-features"},[d("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),d("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),d("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),d("div",{class:"feature-item"},"✓ Progress bar"),d("div",{class:"feature-item"},"✓ Responsive scaling"),d("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),d("button",{class:"btn btn-primary export-btn",onClick:v},[...u[23]||(u[23]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),De(" Download HTML ",-1)])])],64)):s.value==="scorm"?(G(),Y(Me,{key:2},[u[29]||(u[29]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"🎓"),d("div",null,[d("h4",null,"SCORM Package"),d("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),d("div",jM,[(G(),Y("svg",qM,[...u[26]||(u[26]=[d("circle",{cx:"12",cy:"12",r:"10"},null,-1),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),u[27]||(u[27]=d("h4",null,"Coming Soon",-1)),u[28]||(u[28]=d("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):Pe("",!0),_t(ni,{name:"fade"},{default:kt(()=>[o.value==="processing"?(G(),Y("div",WM,[...u[30]||(u[30]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),De(" Generating package... Please wait. ",-1)])])):o.value==="success"?(G(),Y("div",HM,[...u[31]||(u[31]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("polyline",{points:"20 6 9 17 4 12"})],-1),De(" Export successful! Check your downloads folder. ",-1)])])):Pe("",!0)]),_:1})])],64)):(G(),Y("div",AM,[(G(),Y("svg",RM,[...u[10]||(u[10]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),u[13]||(u[13]=d("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),u[14]||(u[14]=d("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),d("div",PM,[d("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:u[0]||(u[0]=L=>xe(r).loginWithGoogle())},[...u[11]||(u[11]=[d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M12 8v8m-4-4h8"})],-1),De(" Continue with Google ",-1)])]),d("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:u[1]||(u[1]=L=>xe(r).loginWithMicrosoft())},[...u[12]||(u[12]=[d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"7",height:"7"}),d("rect",{x:"14",y:"3",width:"7",height:"7"}),d("rect",{x:"14",y:"14",width:"7",height:"7"}),d("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),De(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},KM=Bt(GM,[["__scopeId","data-v-1dc02f55"]]),QM={key:0,class:"editor-view"},JM={class:"editor-topbar"},YM={class:"topbar-left"},XM={class:"project-name-wrap"},ZM=["value"],eV={class:"save-label"},tV={class:"topbar-center"},nV={key:0,class:"slide-position"},rV={class:"topbar-right"},iV={class:"editor-body"},sV={class:"authoring-rail"},oV=["onClick","data-tooltip"],aV={key:0,class:"rail-icon"},lV={key:1,class:"rail-icon"},cV={key:2,class:"rail-icon"},uV={key:3,class:"rail-icon"},dV={key:4,class:"rail-icon"},hV={key:5,class:"rail-icon"},fV={key:6,class:"rail-icon"},pV={key:7,class:"rail-icon"},mV={key:8,class:"rail-icon"},gV={class:"right-panel"},vV={class:"panel-tabs"},yV=["onClick","data-tooltip"],_V={class:"tab-icon"},bV={class:"tab-label"},wV={class:"panel-content"},EV={key:1,class:"editor-not-found"},IV={__name:"EditorView",setup(t){const e=Kv(),n=kd(),r=An(),i=In(),s=oa(),o=Se(()=>e.params.id),a=Se(()=>i.getProject(o.value)),l=Se(()=>{var F;return[...((F=a.value)==null?void 0:F.slides)||[]].sort((C,E)=>C.order-E.order)}),h=me(null);let f=!1,p=null;rn(()=>a.value,F=>{if(F){if(f){f=!1;return}p&&clearTimeout(p),p=setTimeout(()=>{r.pushHistory(F)},600)}},{deep:!0}),rn(()=>s.isAuthReady,F=>{if(F){if(!a.value){n.push({name:"dashboard"});return}r.setProject(o.value),l.value.length>0&&r.setCurrentSlide(l.value[0].id),r.pushHistory(a.value)}},{immediate:!0});const m=Se(()=>{const F=a.value;return F?`Saved ${new Date(F.updatedAt).toLocaleTimeString()}`:""}),v=Se(()=>{switch(r.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});jP({undo:()=>{if(r.canUndo()){const F=r.undo();F&&(f=!0,i.updateProject(o.value,F))}},redo:()=>{if(r.canRedo()){const F=r.redo();F&&(f=!0,i.updateProject(o.value,F))}},delete:()=>{r.selectedElementId&&(i.deleteElement(r.projectId,r.currentSlideId,r.selectedElementId),r.clearSelection())},escape:()=>{r.clearSelection(),r.setActiveTool("select")},copy:()=>{var C,E,T,P;const F=(P=(T=(E=(C=a.value)==null?void 0:C.slides)==null?void 0:E.find(O=>O.id===r.currentSlideId))==null?void 0:T.elements)==null?void 0:P.find(O=>O.id===r.selectedElementId);F&&r.setClipboard(F)},paste:()=>{if(r.clipboard&&r.currentSlideId){const F=r.clipboard;i.addElement(r.projectId,r.currentSlideId,F.type,{...F,x:F.x+20,y:F.y+20,id:void 0})}},duplicate:()=>{if(r.selectedElementId){const F=i.duplicateElement(r.projectId,r.currentSlideId,r.selectedElementId);F&&r.selectElement(F.id)}},zoomIn:()=>r.zoomIn(),zoomOut:()=>r.zoomOut(),zoomReset:()=>r.zoomReset(),toggleGrid:()=>r.toggleGrid(),nudge:(F,C)=>{var T,P,O,b;if(!r.selectedElementId)return;const E=(b=(O=(P=(T=a.value)==null?void 0:T.slides)==null?void 0:P.find(S=>S.id===r.currentSlideId))==null?void 0:O.elements)==null?void 0:b.find(S=>S.id===r.selectedElementId);E&&i.updateElement(r.projectId,r.currentSlideId,r.selectedElementId,{x:E.x+F,y:E.y+C})},selectAll:()=>{var C,E,T;(((T=(E=(C=a.value)==null?void 0:C.slides)==null?void 0:E.find(P=>P.id===r.currentSlideId))==null?void 0:T.elements)||[]).forEach((P,O)=>r.selectElement(P.id,O>0))}});function _(){n.push({name:"dashboard"})}function u(){n.push({name:"preview",params:{id:o.value}})}function w(F,C="Image"){if(!r.projectId||!r.currentSlideId||!F)return;const E=new Image;E.onload=()=>{const O=Math.min(420/E.width,280/E.height,1),b=Math.max(120,Math.round(E.width*O)),S=Math.max(80,Math.round(E.height*O)),I=Math.max(24,Math.round((960-b)/2)),J=Math.max(24,Math.round((540-S)/2)),te=i.addElement(r.projectId,r.currentSlideId,"image",{x:I,y:J,width:b,height:S,content:{src:F,alt:C,objectFit:"cover"}});te&&(r.selectElement(te.id),r.setRightPanel("properties"),r.setActiveTool("select"))},E.src=F}function x(F){const[C]=Array.from(F.target.files||[]);if(!C||!C.type.startsWith("image/"))return;const E=new FileReader;E.onload=()=>w(String(E.result||""),C.name),E.readAsDataURL(C),F.target.value=""}function R(){var F;(F=h.value)==null||F.click()}const M=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function V(F){if(F==="text"){r.setActiveTool("text");return}if(F==="resources"){r.setActiveTool("image");return}if(F==="interactive-elements"){r.setActiveTool("hotspot");return}if(F==="interactive-questions"){r.setActiveTool("quiz");return}if(F==="widgets"){r.setActiveTool("shape");return}if(F==="insert"){R();return}if(F==="style"){r.setRightPanel("properties");return}if(F==="background"){r.clearSelection(),r.setRightPanel("properties");return}F==="pages"&&r.toggleSlidePanel()}function L(F){return F==="text"?["text","heading"].includes(r.activeTool):F==="resources"?r.activeTool==="image":F==="interactive-elements"?["hotspot","button"].includes(r.activeTool):F==="interactive-questions"?r.activeTool==="quiz":F==="widgets"?["shape","video","audio"].includes(r.activeTool):F==="insert"?!1:F==="style"||F==="background"?r.rightPanelTab==="properties":F==="pages"?r.showSlidePanel:!1}return(F,C)=>a.value?(G(),Y("div",QM,[d("input",{ref_key:"imageInputRef",ref:h,type:"file",accept:"image/*",class:"sr-only",onChange:x},null,544),d("header",JM,[d("div",YM,[d("button",{class:"btn btn-ghost btn-sm back-btn",onClick:_,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...C[4]||(C[4]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),De(" Dashboard ",-1)])]),d("div",XM,[d("input",{value:a.value.name,class:"project-name-input",onChange:C[0]||(C[0]=E=>xe(i).updateProject(o.value,{name:E.target.value}))},null,40,ZM)]),d("span",eV,ve(m.value),1)]),d("div",tV,[xe(r).currentSlideId?(G(),Y("span",nV," Slide "+ve(l.value.findIndex(E=>E.id===xe(r).currentSlideId)+1)+" of "+ve(l.value.length),1)):Pe("",!0)]),d("div",rV,[d("button",{class:je(["btn btn-ghost btn-sm",xe(r).showAIPanel&&"active-btn"]),onClick:C[1]||(C[1]=E=>{xe(r).showAIPanel=!xe(r).showAIPanel,xe(r).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...C[5]||(C[5]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),De(" AI ",-1)])],2),d("button",{class:"btn btn-ghost btn-sm",onClick:C[2]||(C[2]=E=>{xe(r).showThemeManager=!xe(r).showThemeManager,xe(r).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...C[6]||(C[6]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M12 8v4m0 4h.01"})],-1),De(" Theme ",-1)])]),d("button",{class:"btn btn-secondary btn-sm",onClick:u,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...C[7]||(C[7]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),De(" Preview ",-1)])]),d("button",{class:"btn btn-primary btn-sm",onClick:C[3]||(C[3]=E=>xe(r).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...C[8]||(C[8]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),De(" Export ",-1)])])])]),_t(fO),d("div",iV,[d("aside",sV,[(G(),Y(Me,null,st(M,E=>d("button",{key:E.id,class:je(["rail-option",L(E.id)&&"active"]),onClick:T=>V(E.id),"data-tooltip":E.label,"data-tooltip-position":"right"},[E.id==="text"?(G(),Y("span",aV,"T")):E.id==="resources"?(G(),Y("span",lV,[...C[9]||(C[9]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),d("polyline",{points:"21 15 16 10 5 21"})],-1)])])):E.id==="interactive-elements"?(G(),Y("span",cV,[...C[10]||(C[10]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):E.id==="interactive-questions"?(G(),Y("span",uV,[...C[11]||(C[11]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):E.id==="widgets"?(G(),Y("span",dV,[...C[12]||(C[12]=[cn('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5c99e548><rect x="3" y="3" width="7" height="7" data-v-5c99e548></rect><rect x="14" y="3" width="7" height="7" data-v-5c99e548></rect><rect x="14" y="14" width="7" height="7" data-v-5c99e548></rect><rect x="3" y="14" width="7" height="7" data-v-5c99e548></rect></svg>',1)])])):E.id==="insert"?(G(),Y("span",hV,[...C[13]||(C[13]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):E.id==="style"?(G(),Y("span",fV,[...C[14]||(C[14]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):E.id==="background"?(G(),Y("span",pV,[...C[15]||(C[15]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),d("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):E.id==="pages"?(G(),Y("span",mV,[...C[16]||(C[16]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),d("polyline",{points:"13 2 13 9 20 9"})],-1)])])):Pe("",!0),De(" "+ve(E.label),1)],10,oV)),64))]),_t(ni,{name:"side-panel-slide"},{default:kt(()=>[xe(r).showSlidePanel?(G(),St(e5,{key:0})):Pe("",!0)]),_:1}),_t(cD),d("aside",gV,[d("div",vV,[(G(),Y(Me,null,st([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],E=>d("button",{key:E.id,class:je(["panel-tab",xe(r).rightPanelTab===E.id&&"active"]),onClick:T=>xe(r).setRightPanel(E.id),"data-tooltip":`Open ${E.label}`,"data-tooltip-position":"bottom"},[d("span",_V,ve(E.icon),1),d("span",bV,ve(E.label),1)],10,yV)),64))]),d("div",wV,[_t(ni,{name:"editor-panel-switch",mode:"out-in"},{default:kt(()=>[(G(),Y("div",{key:v.value,class:"panel-content-view"},[xe(r).rightPanelTab==="properties"?(G(),St(QN,{key:0})):xe(r).rightPanelTab==="layers"?(G(),St(w5,{key:1})):xe(r).rightPanelTab==="ai"?(G(),St(Z8,{key:2})):xe(r).rightPanelTab==="theme"?(G(),St(CM,{key:3})):Pe("",!0)]))]),_:1})])])]),xe(r).showExportModal?(G(),St(KM,{key:0})):Pe("",!0)])):(G(),Y("div",EV,[C[17]||(C[17]=d("h2",null,"Project not found",-1)),C[18]||(C[18]=d("p",null,"This project may have been deleted or the link is invalid.",-1)),d("button",{class:"btn btn-primary",onClick:_},"Go to Dashboard")]))}},TV=Bt(IV,[["__scopeId","data-v-5c99e548"]]),CV={key:0,class:"preview-stage"},xV=["src","alt"],kV={key:2,style:{width:"100%",height:"100%"}},SV=["viewBox"],AV=["points","fill","stroke","stroke-width"],RV=["points","fill","stroke","stroke-width"],PV={key:3,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},NV={key:4,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",position:"relative"}},OV=["onClick"],DV={key:0,class:"hotspot-popup",style:{position:"absolute",left:"60px",top:"0",background:"#fff",color:"#111",borderRadius:"8px",padding:"12px 16px",minWidth:"160px",maxWidth:"220px",boxShadow:"0 8px 24px rgba(0,0,0,.3)",zIndex:10}},MV={style:{display:"block","margin-bottom":"4px","font-size":"14px"}},VV={style:{"font-size":"13px",margin:"0","line-height":"1.5"}},LV={key:5,style:{width:"100%",height:"100%",background:"#000","border-radius":"4px",overflow:"hidden"}},$V=["src"],FV=["src"],UV={key:2,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#666","font-size":"13px"}},zV={key:6,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column",gap:"8px",padding:"8px","box-sizing":"border-box"}},BV={style:{"font-size":"12px",color:"#aaa"}},jV=["src"],qV={key:7,style:{width:"100%",height:"100%",padding:"16px","box-sizing":"border-box",background:"rgba(0,0,0,.4)","border-radius":"6px",overflow:"auto"}},WV={style:{margin:"0 0 12px","font-size":"15px",color:"#fff"}},HV={style:{display:"flex","flex-direction":"column",gap:"8px"}},GV=["onClick"],KV={key:0,style:{"margin-top":"12px"}},QV=["onClick","disabled"],JV={key:1,style:{"margin-top":"12px"}},YV={key:0,style:{"font-size":"12px",color:"#ccc",margin:"0 0 8px"}},XV=["onClick"],ZV={class:"preview-ui"},eL={class:"preview-topbar"},tL={class:"preview-title"},nL={class:"slide-counter"},rL=["disabled"],iL=["disabled"],sL={class:"dot-nav"},oL=["onClick"],aL=960,lL=540,cL={__name:"PreviewView",setup(t){const e=Kv(),n=kd(),r=In(),i=oa(),s=Se(()=>e.params.id),o=Se(()=>r.getProject(s.value)),a=Se(()=>{var J;return[...((J=o.value)==null?void 0:J.slides)||[]].sort((te,$)=>te.order-$.order)}),l=me(0),h=me(null),f=me(1),p=me(!0);let m=null;const v=Se(()=>a.value[l.value]||null);function _(){if(!h.value)return;const J=h.value.clientWidth,te=h.value.clientHeight;f.value=Math.min(J/aL,te/lL,1.5)}function u(){l.value<a.value.length-1&&l.value++}function w(){l.value>0&&l.value--}function x(J){l.value=J}function R(J){(J.key==="ArrowRight"||J.key==="ArrowDown"||J.key===" ")&&u(),(J.key==="ArrowLeft"||J.key==="ArrowUp")&&w(),J.key==="Escape"&&M()}function M(){n.push({name:"editor",params:{id:s.value}})}function V(){p.value=!0,clearTimeout(m),m=setTimeout(()=>{p.value=!1},3e3)}const L=new ResizeObserver(_);rn(()=>i.isAuthReady,J=>{if(J&&!o.value){n.push({name:"dashboard"});return}},{immediate:!0}),Go(()=>{window.addEventListener("keydown",R),h.value&&(L.observe(h.value),_()),V()}),Ko(()=>{window.removeEventListener("keydown",R),L.disconnect(),clearTimeout(m)});function F(J){return J?J.backgroundType==="gradient"&&J.backgroundGradient?{background:J.backgroundGradient}:J.backgroundType==="image"&&J.backgroundImage?{backgroundImage:`url(${J.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:J.background||"#1a1a2e"}:{}}function C(J){return{position:"absolute",left:`${J.x}px`,top:`${J.y}px`,width:`${J.width}px`,height:`${J.height}px`,opacity:J.opacity??1,transform:J.rotation?`rotate(${J.rotation}deg)`:void 0,overflow:"hidden",pointerEvents:["button","hotspot","quiz"].includes(J.type)?"auto":"none"}}const E=me({}),T=me({});function P(J,te){T.value[J]||(E.value[J]=te)}function O(J){E.value[J.id]!==void 0&&(T.value[J.id]=!0)}function b(J){delete E.value[J],delete T.value[J]}const S=me({});function I(J){S.value[J]=!S.value[J]}return(J,te)=>(G(),Y("div",{class:"preview-root",onMousemove:V,onClick:Wt(V,["self"])},[te[4]||(te[4]=d("div",{class:"preview-orb preview-orb-left"},null,-1)),te[5]||(te[5]=d("div",{class:"preview-orb preview-orb-right"},null,-1)),te[6]||(te[6]=d("div",{class:"preview-grid"},null,-1)),d("div",{class:"canvas-bg",ref_key:"containerRef",ref:h},[v.value?(G(),Y("div",CV,[d("div",{class:"slide-canvas",style:He([F(v.value),{transform:`scale(${f.value})`,transformOrigin:"center center"}])},[(G(!0),Y(Me,null,st([...v.value.elements||[]].sort(($,de)=>$.zIndex-de.zIndex),$=>(G(),Y(Me,{key:$.id},[$.visible!==!1?(G(),Y("div",{key:0,style:He(C($))},[$.type==="text"||$.type==="heading"?(G(),Y("div",{key:0,class:"el-text",style:He({fontSize:$.content.fontSize+"px",color:$.content.color,fontFamily:$.content.fontFamily,fontWeight:$.content.bold||$.type==="heading"?"700":"400",fontStyle:$.content.italic?"italic":"normal",textDecoration:$.content.underline?"underline":"none",textAlign:$.content.align,lineHeight:$.content.lineHeight||1.4,letterSpacing:$.content.letterSpacing?$.content.letterSpacing+"px":void 0,padding:"4px",width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",wordBreak:"break-word"})},ve($.content.text),5)):$.type==="image"?(G(),Y("img",{key:1,src:$.content.src,alt:$.content.alt,style:He({width:"100%",height:"100%",objectFit:$.content.objectFit||"cover",borderRadius:$.content.borderRadius?$.content.borderRadius+"px":void 0})},null,12,xV)):$.type==="shape"?(G(),Y("div",kV,[$.content.shape==="rectangle"||$.content.shape==="circle"?(G(),Y("div",{key:0,style:He({width:"100%",height:"100%",backgroundColor:$.content.fillColor,border:`${$.content.strokeWidth||0}px solid ${$.content.strokeColor||"transparent"}`,borderRadius:$.content.shape==="circle"?"50%":($.content.borderRadius||0)+"px",boxSizing:"border-box"})},null,4)):(G(),Y("svg",{key:1,width:"100%",height:"100%",viewBox:`0 0 ${$.width} ${$.height}`,preserveAspectRatio:"xMidYMid meet"},[$.content.shape==="triangle"?(G(),Y("polygon",{key:0,points:`${$.width/2} 0 ${$.width} ${$.height} 0 ${$.height}`,fill:$.content.fillColor,stroke:$.content.strokeColor,"stroke-width":$.content.strokeWidth||0},null,8,AV)):Pe("",!0),$.content.shape==="diamond"?(G(),Y("polygon",{key:1,points:`${$.width/2} 0 ${$.width} ${$.height/2} ${$.width/2} ${$.height} 0 ${$.height/2}`,fill:$.content.fillColor,stroke:$.content.strokeColor,"stroke-width":$.content.strokeWidth||0},null,8,RV)):Pe("",!0)],8,SV))])):$.type==="button"?(G(),Y("div",PV,[d("button",{style:He({padding:"8px 20px",borderRadius:"6px",fontWeight:600,fontSize:($.content.fontSize||14)+"px",cursor:"pointer",border:"2px solid "+($.content.backgroundColor||"#5865f2"),backgroundColor:$.content.variant==="outline"||$.content.variant==="ghost"?"transparent":$.content.backgroundColor||"#5865f2",color:$.content.variant==="outline"||$.content.variant==="ghost"?$.content.backgroundColor||"#5865f2":$.content.textColor||"#fff",fontFamily:$.content.fontFamily})},ve($.content.label),5)])):$.type==="hotspot"?(G(),Y("div",NV,[d("button",{class:"hotspot-trigger",style:He({width:"48px",height:"48px",borderRadius:"50%",backgroundColor:$.content.color||"#5865f2",border:"3px solid rgba(255,255,255,0.4)",color:"#fff",fontSize:"20px",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}),onClick:de=>I($.id)},"+",12,OV),_t(ni,{name:"popup"},{default:kt(()=>[S.value[$.id]?(G(),Y("div",DV,[d("strong",MV,ve($.content.title),1),d("p",VV,ve($.content.body),1)])):Pe("",!0)]),_:2},1024)])):$.type==="video"?(G(),Y("div",LV,[$.content.src&&($.content.src.includes("youtube")||$.content.src.includes("vimeo"))?(G(),Y("iframe",{key:0,src:$.content.src,width:"100%",height:"100%",frameborder:"0",allowfullscreen:"",allow:"autoplay"},null,8,$V)):$.content.src?(G(),Y("video",{key:1,src:$.content.src,controls:"",style:{width:"100%",height:"100%","object-fit":"contain"}},null,8,FV)):(G(),Y("div",UV,"No video source"))])):$.type==="audio"?(G(),Y("div",zV,[te[0]||(te[0]=d("span",{style:{"font-size":"28px"}},"🎵",-1)),d("span",BV,ve($.content.label||"Audio"),1),$.content.src?(G(),Y("audio",{key:0,src:$.content.src,controls:"",style:{width:"100%","max-width":"240px"}},null,8,jV)):Pe("",!0)])):$.type==="quiz"?(G(),Y("div",qV,[d("h4",WV,ve($.content.question),1),d("div",HV,[(G(!0),Y(Me,null,st($.content.options,(de,ie)=>(G(),Y("button",{key:ie,onClick:Ee=>P($.id,ie),style:He({padding:"8px 12px",borderRadius:"6px",border:E.value[$.id]===ie?"2px solid #5865f2":"1px solid rgba(255,255,255,.2)",background:T.value[$.id]?ie===$.content.correctIndex?"rgba(87,242,135,.2)":E.value[$.id]===ie?"rgba(237,66,69,.2)":"rgba(255,255,255,.05)":E.value[$.id]===ie?"rgba(88,101,242,.3)":"rgba(255,255,255,.05)",color:"#fff",textAlign:"left",cursor:T.value[$.id]?"default":"pointer",fontSize:"13px",fontFamily:"inherit"})},ve(de),13,GV))),128))]),T.value[$.id]?(G(),Y("div",JV,[d("p",{style:He({color:E.value[$.id]===$.content.correctIndex?"#57f287":"#ed4245",fontWeight:600,fontSize:"13px",margin:"0 0 4px"})},ve(E.value[$.id]===$.content.correctIndex?"✓ Correct!":"✗ Incorrect"),5),$.content.explanation?(G(),Y("p",YV,ve($.content.explanation),1)):Pe("",!0),d("button",{onClick:de=>b($.id),style:{padding:"4px 12px",background:"transparent",border:"1px solid rgba(255,255,255,.3)","border-radius":"4px",color:"#ccc","font-size":"12px",cursor:"pointer","font-family":"inherit"}},"Try Again",8,XV)])):(G(),Y("div",KV,[d("button",{onClick:de=>O($),disabled:E.value[$.id]===void 0,style:{padding:"6px 16px",background:"#5865f2",border:"none","border-radius":"6px",color:"#fff","font-size":"13px",cursor:"pointer","font-family":"inherit"}},"Submit",8,QV)]))])):Pe("",!0)],4)):Pe("",!0)],64))),128))],4)])):Pe("",!0)],512),_t(ni,{name:"ui-fade"},{default:kt(()=>{var $;return[Ye(d("div",ZV,[d("div",eL,[d("button",{class:"ui-btn",onClick:M},[...te[1]||(te[1]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),De(" Back to Editor ",-1)])]),d("span",tL,ve(($=o.value)==null?void 0:$.name),1),d("span",nL,ve(l.value+1)+" / "+ve(a.value.length),1)]),d("button",{class:"nav-btn nav-btn-left",onClick:w,disabled:l.value===0},[...te[2]||(te[2]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M15 18l-6-6 6-6"})],-1)])],8,rL),d("button",{class:"nav-btn nav-btn-right",onClick:u,disabled:l.value===a.value.length-1},[...te[3]||(te[3]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M9 18l6-6-6-6"})],-1)])],8,iL),d("div",sL,[(G(!0),Y(Me,null,st(a.value,(de,ie)=>(G(),Y("button",{key:de.id,class:je(["dot",ie===l.value&&"active"]),onClick:Ee=>x(ie)},null,10,oL))),128))])],512),[[vw,p.value]])]}),_:1})],32))}},uL=Bt(cL,[["__scopeId","data-v-649ef8b8"]]),dL=[{path:"/",name:"dashboard",component:BP},{path:"/editor/:id",name:"editor",component:TV,props:!0},{path:"/preview/:id",name:"preview",component:uL,props:!0}],hL=Y2({history:R2(),routes:dL}),Nh=Lw(Z2);Nh.use(Uw());Nh.use(hL);Nh.mount("#app");
