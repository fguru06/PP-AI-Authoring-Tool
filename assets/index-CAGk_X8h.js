(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const dt={},is=[],Kn=()=>{},fg=()=>!1,Dl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fd=t=>t.startsWith("onUpdate:"),Ft=Object.assign,pd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f_=Object.prototype.hasOwnProperty,ot=(t,e)=>f_.call(t,e),Le=Array.isArray,ss=t=>Go(t)==="[object Map]",Is=t=>Go(t)==="[object Set]",bf=t=>Go(t)==="[object Date]",qe=t=>typeof t=="function",_t=t=>typeof t=="string",Mn=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",pg=t=>(ct(t)||qe(t))&&qe(t.then)&&qe(t.catch),mg=Object.prototype.toString,Go=t=>mg.call(t),p_=t=>Go(t).slice(8,-1),gg=t=>Go(t)==="[object Object]",Ol=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,co=hd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},m_=/-\w/g,kn=Ml(t=>t.replace(m_,e=>e.slice(1).toUpperCase())),g_=/\B([A-Z])/g,ui=Ml(t=>t.replace(g_,"-$1").toLowerCase()),Ll=Ml(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vc=Ml(t=>t?`on${Ll(t)}`:""),Jr=(t,e)=>!Object.is(t,e),Fa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Vl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},v_=t=>{const e=_t(t)?Number(t):NaN;return isNaN(e)?t:e};let _f;const $l=()=>_f||(_f=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ze(t){if(Le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=_t(r)?w_(r):ze(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(_t(t)||ct(t))return t}const y_=/;(?![^(]*\))/g,b_=/:([^]+)/,__=/\/\*[^]*?\*\//g;function w_(t){const e={};return t.replace(__,"").split(y_).forEach(n=>{if(n){const r=n.split(b_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fe(t){let e="";if(_t(t))e=t;else if(Le(t))for(let n=0;n<t.length;n++){const r=Fe(t[n]);r&&(e+=r+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",I_=hd(E_);function yg(t){return!!t||t===""}function T_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ts(t[r],e[r]);return n}function Ts(t,e){if(t===e)return!0;let n=bf(t),r=bf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Mn(t),r=Mn(e),n||r)return t===e;if(n=Le(t),r=Le(e),n||r)return n&&r?T_(t,e):!1;if(n=ct(t),r=ct(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ts(t[o],e[o]))return!1}}return String(t)===String(e)}function md(t,e){return t.findIndex(n=>Ts(n,e))}const bg=t=>!!(t&&t.__v_isRef===!0),ve=t=>_t(t)?t:t==null?"":Le(t)||ct(t)&&(t.toString===mg||!qe(t.toString))?bg(t)?ve(t.value):JSON.stringify(t,_g,2):String(t),_g=(t,e)=>bg(e)?_g(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[$c(r,s)+" =>"]=i,n),{})}:Is(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$c(n))}:Mn(e)?$c(e):ct(e)&&!Le(e)&&!gg(e)?String(e):e,$c=(t,e="")=>{var n;return Mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class wg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Zt;try{return Zt=this,e()}finally{Zt=n}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){this._on>0&&--this._on===0&&(Zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Eg(t){return new wg(t)}function Ig(){return Zt}function C_(t,e=!1){Zt&&Zt.cleanups.push(t)}let ft;const Fc=new WeakSet;class Tg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fc.has(this)&&(Fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wf(this),kg(this);const e=ft,n=Nn;ft=this,Nn=!0;try{return this.fn()}finally{Sg(this),ft=e,Nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)yd(e);this.deps=this.depsTail=void 0,wf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yu(this)&&this.run()}get dirty(){return yu(this)}}let Cg=0,uo,ho;function xg(t,e=!1){if(t.flags|=8,e){t.next=ho,ho=t;return}t.next=uo,uo=t}function gd(){Cg++}function vd(){if(--Cg>0)return;if(ho){let e=ho;for(ho=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;uo;){let e=uo;for(uo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function kg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sg(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),yd(r),x_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function yu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ag(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ag(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ko)||(t.globalVersion=ko,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yu(t))))return;t.flags|=2;const e=t.dep,n=ft,r=Nn;ft=t,Nn=!0;try{kg(t);const i=t.fn(t._value);(e.version===0||Jr(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ft=n,Nn=r,Sg(t),t.flags&=-3}}function yd(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)yd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function x_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nn=!0;const Rg=[];function _r(){Rg.push(Nn),Nn=!1}function wr(){const t=Rg.pop();Nn=t===void 0?!0:t}function wf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ft;ft=void 0;try{e()}finally{ft=n}}}let ko=0;class k_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!Nn||ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ft)n=this.activeLink=new k_(ft,this),ft.deps?(n.prevDep=ft.depsTail,ft.depsTail.nextDep=n,ft.depsTail=n):ft.deps=ft.depsTail=n,Pg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ft.depsTail,n.nextDep=void 0,ft.depsTail.nextDep=n,ft.depsTail=n,ft.deps===n&&(ft.deps=r)}return n}trigger(e){this.version++,ko++,this.notify(e)}notify(e){gd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vd()}}}function Pg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Pg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const el=new WeakMap,Ri=Symbol(""),bu=Symbol(""),So=Symbol("");function tn(t,e,n){if(Nn&&ft){let r=el.get(t);r||el.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new bd),i.map=r,i.key=n),i.track()}}function dr(t,e,n,r,i,s){const o=el.get(t);if(!o){ko++;return}const a=l=>{l&&l.trigger()};if(gd(),e==="clear")o.forEach(a);else{const l=Le(t),d=l&&Ol(n);if(l&&n==="length"){const h=Number(r);o.forEach((m,g)=>{(g==="length"||g===So||!Mn(g)&&g>=h)&&a(m)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(So)),e){case"add":l?d&&a(o.get("length")):(a(o.get(Ri)),ss(t)&&a(o.get(bu)));break;case"delete":l||(a(o.get(Ri)),ss(t)&&a(o.get(bu)));break;case"set":ss(t)&&a(o.get(Ri));break}}vd()}function S_(t,e){const n=el.get(t);return n&&n.get(e)}function Ji(t){const e=nt(t);return e===t?e:(tn(e,"iterate",So),bn(t)?e:e.map(Ln))}function Fl(t){return tn(t=nt(t),"iterate",So),t}function Br(t,e){return Er(t)?ps(gr(t)?Ln(e):e):Ln(e)}const A_={__proto__:null,[Symbol.iterator](){return Uc(this,Symbol.iterator,t=>Br(this,t))},concat(...t){return Ji(this).concat(...t.map(e=>Le(e)?Ji(e):e))},entries(){return Uc(this,"entries",t=>(t[1]=Br(this,t[1]),t))},every(t,e){return sr(this,"every",t,e,void 0,arguments)},filter(t,e){return sr(this,"filter",t,e,n=>n.map(r=>Br(this,r)),arguments)},find(t,e){return sr(this,"find",t,e,n=>Br(this,n),arguments)},findIndex(t,e){return sr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return sr(this,"findLast",t,e,n=>Br(this,n),arguments)},findLastIndex(t,e){return sr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return sr(this,"forEach",t,e,void 0,arguments)},includes(...t){return zc(this,"includes",t)},indexOf(...t){return zc(this,"indexOf",t)},join(t){return Ji(this).join(t)},lastIndexOf(...t){return zc(this,"lastIndexOf",t)},map(t,e){return sr(this,"map",t,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...t){return Js(this,"push",t)},reduce(t,...e){return Ef(this,"reduce",t,e)},reduceRight(t,...e){return Ef(this,"reduceRight",t,e)},shift(){return Js(this,"shift")},some(t,e){return sr(this,"some",t,e,void 0,arguments)},splice(...t){return Js(this,"splice",t)},toReversed(){return Ji(this).toReversed()},toSorted(t){return Ji(this).toSorted(t)},toSpliced(...t){return Ji(this).toSpliced(...t)},unshift(...t){return Js(this,"unshift",t)},values(){return Uc(this,"values",t=>Br(this,t))}};function Uc(t,e,n){const r=Fl(t),i=r[e]();return r!==t&&!bn(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const R_=Array.prototype;function sr(t,e,n,r,i,s){const o=Fl(t),a=o!==t&&!bn(t),l=o[e];if(l!==R_[e]){const m=l.apply(t,s);return a?Ln(m):m}let d=n;o!==t&&(a?d=function(m,g){return n.call(this,Br(t,m),g,t)}:n.length>2&&(d=function(m,g){return n.call(this,m,g,t)}));const h=l.call(o,d,r);return a&&i?i(h):h}function Ef(t,e,n,r){const i=Fl(t);let s=n;return i!==t&&(bn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Br(t,a),l,t)}),i[e](s,...r)}function zc(t,e,n){const r=nt(t);tn(r,"iterate",So);const i=r[e](...n);return(i===-1||i===!1)&&Ul(n[0])?(n[0]=nt(n[0]),r[e](...n)):i}function Js(t,e,n=[]){_r(),gd();const r=nt(t)[e].apply(t,n);return vd(),wr(),r}const P_=hd("__proto__,__v_isRef,__isVue"),Ng=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mn));function N_(t){Mn(t)||(t=String(t));const e=nt(this);return tn(e,"has",t),e.hasOwnProperty(t)}class Dg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?B_:Vg:s?Lg:Mg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Le(e);if(!i){let l;if(o&&(l=A_[n]))return l;if(n==="hasOwnProperty")return N_}const a=Reflect.get(e,n,kt(e)?e:r);if((Mn(n)?Ng.has(n):P_(n))||(i||tn(e,"get",n),s))return a;if(kt(a)){const l=o&&Ol(n)?a:a.value;return i&&ct(l)?wu(l):l}return ct(a)?i?wu(a):Ko(a):a}}class Og extends Dg{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];const o=Le(e)&&Ol(n);if(!this._isShallow){const d=Er(s);if(!bn(r)&&!Er(r)&&(s=nt(s),r=nt(r)),!o&&kt(s)&&!kt(r))return d||(s.value=r),!0}const a=o?Number(n)<e.length:ot(e,n),l=Reflect.set(e,n,r,kt(e)?e:i);return e===nt(i)&&(a?Jr(r,s)&&dr(e,"set",n,r):dr(e,"add",n,r)),l}deleteProperty(e,n){const r=ot(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&dr(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Mn(n)||!Ng.has(n))&&tn(e,"has",n),r}ownKeys(e){return tn(e,"iterate",Le(e)?"length":Ri),Reflect.ownKeys(e)}}class D_ extends Dg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const O_=new Og,M_=new D_,L_=new Og(!0);const _u=t=>t,Ta=t=>Reflect.getPrototypeOf(t);function V_(t,e,n){return function(...r){const i=this.__v_raw,s=nt(i),o=ss(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,d=i[t](...r),h=n?_u:e?ps:Ln;return!e&&tn(s,"iterate",l?bu:Ri),Ft(Object.create(d),{next(){const{value:m,done:g}=d.next();return g?{value:m,done:g}:{value:a?[h(m[0]),h(m[1])]:h(m),done:g}}})}}function Ca(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $_(t,e){const n={get(i){const s=this.__v_raw,o=nt(s),a=nt(i);t||(Jr(i,a)&&tn(o,"get",i),tn(o,"get",a));const{has:l}=Ta(o),d=e?_u:t?ps:Ln;if(l.call(o,i))return d(s.get(i));if(l.call(o,a))return d(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&tn(nt(i),"iterate",Ri),i.size},has(i){const s=this.__v_raw,o=nt(s),a=nt(i);return t||(Jr(i,a)&&tn(o,"has",i),tn(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=nt(a),d=e?_u:t?ps:Ln;return!t&&tn(l,"iterate",Ri),a.forEach((h,m)=>i.call(s,d(h),d(m),o))}};return Ft(n,t?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(i){!e&&!bn(i)&&!Er(i)&&(i=nt(i));const s=nt(this);return Ta(s).has.call(s,i)||(s.add(i),dr(s,"add",i,i)),this},set(i,s){!e&&!bn(s)&&!Er(s)&&(s=nt(s));const o=nt(this),{has:a,get:l}=Ta(o);let d=a.call(o,i);d||(i=nt(i),d=a.call(o,i));const h=l.call(o,i);return o.set(i,s),d?Jr(s,h)&&dr(o,"set",i,s):dr(o,"add",i,s),this},delete(i){const s=nt(this),{has:o,get:a}=Ta(s);let l=o.call(s,i);l||(i=nt(i),l=o.call(s,i)),a&&a.call(s,i);const d=s.delete(i);return l&&dr(s,"delete",i,void 0),d},clear(){const i=nt(this),s=i.size!==0,o=i.clear();return s&&dr(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=V_(i,t,e)}),n}function _d(t,e){const n=$_(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ot(n,i)&&i in r?n:r,i,s)}const F_={get:_d(!1,!1)},U_={get:_d(!1,!0)},z_={get:_d(!0,!1)};const Mg=new WeakMap,Lg=new WeakMap,Vg=new WeakMap,B_=new WeakMap;function j_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function q_(t){return t.__v_skip||!Object.isExtensible(t)?0:j_(p_(t))}function Ko(t){return Er(t)?t:wd(t,!1,O_,F_,Mg)}function $g(t){return wd(t,!1,L_,U_,Lg)}function wu(t){return wd(t,!0,M_,z_,Vg)}function wd(t,e,n,r,i){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=q_(t);if(s===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function gr(t){return Er(t)?gr(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function bn(t){return!!(t&&t.__v_isShallow)}function Ul(t){return t?!!t.__v_raw:!1}function nt(t){const e=t&&t.__v_raw;return e?nt(e):t}function Ed(t){return!ot(t,"__v_skip")&&Object.isExtensible(t)&&vg(t,"__v_skip",!0),t}const Ln=t=>ct(t)?Ko(t):t,ps=t=>ct(t)?wu(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function ge(t){return Fg(t,!1)}function W_(t){return Fg(t,!0)}function Fg(t,e){return kt(t)?t:new H_(t,e)}class H_{constructor(e,n){this.dep=new bd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:nt(e),this._value=n?e:Ln(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||bn(e)||Er(e);e=r?e:nt(e),Jr(e,n)&&(this._rawValue=e,this._value=r?e:Ln(e),this.dep.trigger())}}function be(t){return kt(t)?t.value:t}const G_={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return kt(i)&&!kt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ug(t){return gr(t)?t:new Proxy(t,G_)}function K_(t){const e=Le(t)?new Array(t.length):{};for(const n in t)e[n]=J_(t,n);return e}class Q_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=nt(e);let i=!0,s=e;if(!Le(e)||!Ol(String(n)))do i=!Ul(s)||bn(s);while(i&&(s=s.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=be(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&kt(this._raw[this._key])){const n=this._object[this._key];if(kt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return S_(this._raw,this._key)}}function J_(t,e,n){return new Q_(t,e,n)}class Y_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ko-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return xg(this,!0),!0}get value(){const e=this.dep.track();return Ag(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function X_(t,e,n=!1){let r,i;return qe(t)?r=t:(r=t.get,i=t.set),new Y_(r,i,n)}const xa={},tl=new WeakMap;let Ii;function Z_(t,e=!1,n=Ii){if(n){let r=tl.get(n);r||tl.set(n,r=[]),r.push(t)}}function e0(t,e,n=dt){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,d=M=>i?M:bn(M)||i===!1||i===0?hr(M,1):hr(M);let h,m,g,y,w=!1,v=!1;if(kt(t)?(m=()=>t.value,w=bn(t)):gr(t)?(m=()=>d(t),w=!0):Le(t)?(v=!0,w=t.some(M=>gr(M)||bn(M)),m=()=>t.map(M=>{if(kt(M))return M.value;if(gr(M))return d(M);if(qe(M))return l?l(M,2):M()})):qe(t)?e?m=l?()=>l(t,2):t:m=()=>{if(g){_r();try{g()}finally{wr()}}const M=Ii;Ii=h;try{return l?l(t,3,[y]):t(y)}finally{Ii=M}}:m=Kn,e&&i){const M=m,f=i===!0?1/0:i;m=()=>hr(M(),f)}const I=Ig(),C=()=>{h.stop(),I&&I.active&&pd(I.effects,h)};if(s&&e){const M=e;e=(...f)=>{M(...f),C()}}let R=v?new Array(t.length).fill(xa):xa;const V=M=>{if(!(!(h.flags&1)||!h.dirty&&!M))if(e){const f=h.run();if(i||w||(v?f.some((G,N)=>Jr(G,R[N])):Jr(f,R))){g&&g();const G=Ii;Ii=h;try{const N=[f,R===xa?void 0:v&&R[0]===xa?[]:R,y];R=f,l?l(e,3,N):e(...N)}finally{Ii=G}}}else h.run()};return a&&a(V),h=new Tg(m),h.scheduler=o?()=>o(V,!1):V,y=M=>Z_(M,!1,h),g=h.onStop=()=>{const M=tl.get(h);if(M){if(l)l(M,4);else for(const f of M)f();tl.delete(h)}},e?r?V(!0):R=h.run():o?o(V.bind(null,!0),!0):h.run(),C.pause=h.pause.bind(h),C.resume=h.resume.bind(h),C.stop=C,C}function hr(t,e=1/0,n){if(e<=0||!ct(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,kt(t))hr(t.value,e,n);else if(Le(t))for(let r=0;r<t.length;r++)hr(t[r],e,n);else if(Is(t)||ss(t))t.forEach(r=>{hr(r,e,n)});else if(gg(t)){for(const r in t)hr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&hr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qo(t,e,n,r){try{return r?t(...r):t()}catch(i){zl(i,e,n)}}function Vn(t,e,n,r){if(qe(t)){const i=Qo(t,e,n,r);return i&&pg(i)&&i.catch(s=>{zl(s,e,n)}),i}if(Le(t)){const i=[];for(let s=0;s<t.length;s++)i.push(Vn(t[s],e,n,r));return i}}function zl(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let m=0;m<h.length;m++)if(h[m](t,l,d)===!1)return}a=a.parent}if(s){_r(),Qo(s,null,10,[t,l,d]),wr();return}}t0(t,n,i,r,o)}function t0(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const cn=[];let qn=-1;const os=[];let jr=null,Xi=0;const zg=Promise.resolve();let nl=null;function Jo(t){const e=nl||zg;return t?e.then(this?t.bind(this):t):e}function n0(t){let e=qn+1,n=cn.length;for(;e<n;){const r=e+n>>>1,i=cn[r],s=Ao(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function Id(t){if(!(t.flags&1)){const e=Ao(t),n=cn[cn.length-1];!n||!(t.flags&2)&&e>=Ao(n)?cn.push(t):cn.splice(n0(e),0,t),t.flags|=1,Bg()}}function Bg(){nl||(nl=zg.then(qg))}function r0(t){Le(t)?os.push(...t):jr&&t.id===-1?jr.splice(Xi+1,0,t):t.flags&1||(os.push(t),t.flags|=1),Bg()}function If(t,e,n=qn+1){for(;n<cn.length;n++){const r=cn[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;cn.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function jg(t){if(os.length){const e=[...new Set(os)].sort((n,r)=>Ao(n)-Ao(r));if(os.length=0,jr){jr.push(...e);return}for(jr=e,Xi=0;Xi<jr.length;Xi++){const n=jr[Xi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}jr=null,Xi=0}}const Ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qg(t){try{for(qn=0;qn<cn.length;qn++){const e=cn[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<cn.length;qn++){const e=cn[qn];e&&(e.flags&=-2)}qn=-1,cn.length=0,jg(),nl=null,(cn.length||os.length)&&qg()}}let Kt=null,Wg=null;function rl(t){const e=Kt;return Kt=t,Wg=t&&t.type.__scopeId||null,e}function bt(t,e=Kt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&ol(-1);const s=rl(e);let o;try{o=t(...i)}finally{rl(s),r._d&&ol(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ht(t,e){if(Kt===null)return t;const n=Hl(Kt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=dt]=e[i];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&hr(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function bi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(_r(),Vn(l,n,8,[t.el,a,t,e]),wr())}}function fo(t,e){if(sn){let n=sn.provides;const r=sn.parent&&sn.parent.provides;r===n&&(n=sn.provides=Object.create(r)),n[t]=e}}function _n(t,e,n=!1){const r=Ad();if(r||Pi){let i=Pi?Pi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&qe(e)?e.call(r&&r.proxy):e}}function i0(){return!!(Ad()||Pi)}const s0=Symbol.for("v-scx"),o0=()=>_n(s0);function Bt(t,e,n){return Hg(t,e,n)}function Hg(t,e,n=dt){const{immediate:r,deep:i,flush:s,once:o}=n,a=Ft({},n),l=e&&r||!e&&s!=="post";let d;if(Do){if(s==="sync"){const y=o0();d=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=Kn,y.resume=Kn,y.pause=Kn,y}}const h=sn;a.call=(y,w,v)=>Vn(y,h,w,v);let m=!1;s==="post"?a.scheduler=y=>{Xt(y,h&&h.suspense)}:s!=="sync"&&(m=!0,a.scheduler=(y,w)=>{w?y():Id(y)}),a.augmentJob=y=>{e&&(y.flags|=4),m&&(y.flags|=2,h&&(y.id=h.uid,y.i=h))};const g=e0(t,e,a);return Do&&(d?d.push(g):l&&g()),g}function a0(t,e,n){const r=this.proxy,i=_t(t)?t.includes(".")?Gg(r,t):()=>r[t]:t.bind(r,r);let s;qe(e)?s=e:(s=e.handler,n=e);const o=Zo(this),a=Hg(i,s.bind(r),n);return o(),a}function Gg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Kg=Symbol("_vte"),Qg=t=>t.__isTeleport,po=t=>t&&(t.disabled||t.disabled===""),Tf=t=>t&&(t.defer||t.defer===""),Cf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,xf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Eu=(t,e)=>{const n=t&&t.to;return _t(n)?e?e(n):null:n},Jg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,d){const{mc:h,pc:m,pbc:g,o:{insert:y,querySelector:w,createText:v,createComment:I}}=d,C=po(e.props);let{shapeFlag:R,children:V,dynamicChildren:M}=e;if(t==null){const f=e.el=v(""),G=e.anchor=v("");y(f,n,r),y(G,n,r);const N=(x,P)=>{R&16&&h(V,x,P,i,s,o,a,l)},A=()=>{const x=e.target=Eu(e.props,w),P=Iu(x,e,v,y);x&&(o!=="svg"&&Cf(x)?o="svg":o!=="mathml"&&xf(x)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(x),C||(N(x,P),Ua(e,!1)))};C&&(N(n,G),Ua(e,!0)),Tf(e.props)?(e.el.__isMounted=!1,Xt(()=>{A(),delete e.el.__isMounted},s)):A()}else{if(Tf(e.props)&&t.el.__isMounted===!1){Xt(()=>{Jg.process(t,e,n,r,i,s,o,a,l,d)},s);return}e.el=t.el,e.targetStart=t.targetStart;const f=e.anchor=t.anchor,G=e.target=t.target,N=e.targetAnchor=t.targetAnchor,A=po(t.props),x=A?n:G,P=A?f:N;if(o==="svg"||Cf(G)?o="svg":(o==="mathml"||xf(G))&&(o="mathml"),M?(g(t.dynamicChildren,M,x,i,s,o,a),kd(t,e,!0)):l||m(t,e,x,P,i,s,o,a,!1),C)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ka(e,n,f,d,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const O=e.target=Eu(e.props,w);O&&ka(e,O,null,d,0)}else A&&ka(e,G,N,d,1);Ua(e,C)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:d,targetAnchor:h,target:m,props:g}=t;if(m&&(i(d),i(h)),s&&i(l),o&16){const y=s||!po(g);for(let w=0;w<a.length;w++){const v=a[w];r(v,e,n,y,!!v.dynamicChildren)}}},move:ka,hydrate:l0};function ka(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:d,props:h}=t,m=s===2;if(m&&r(o,e,n),(!m||po(h))&&l&16)for(let g=0;g<d.length;g++)i(d[g],e,n,2);m&&r(a,e,n)}function l0(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:d,createText:h}},m){function g(I,C){let R=C;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")e.targetStart=R;else if(R.data==="teleport anchor"){e.targetAnchor=R,I._lpa=e.targetAnchor&&o(e.targetAnchor);break}}R=o(R)}}function y(I,C){C.anchor=m(o(I),C,a(I),n,r,i,s)}const w=e.target=Eu(e.props,l),v=po(e.props);if(w){const I=w._lpa||w.firstChild;e.shapeFlag&16&&(v?(y(t,e),g(w,I),e.targetAnchor||Iu(w,e,h,d,a(t)===w?t:null)):(e.anchor=o(t),g(w,I),e.targetAnchor||Iu(w,e,h,d),m(I&&o(I),e,w,n,r,i,s))),Ua(e,v)}else v&&e.shapeFlag&16&&(y(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Td=Jg;function Ua(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Iu(t,e,n,r,i=null){const s=e.targetStart=n(""),o=e.targetAnchor=n("");return s[Kg]=o,t&&(r(s,t,i),r(o,t,i)),o}const Wn=Symbol("_leaveCb"),Ys=Symbol("_enterCb");function c0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yo(()=>{t.isMounted=!0}),Xo(()=>{t.isUnmounting=!0}),t}const Tn=[Function,Array],Yg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},Xg=t=>{const e=t.subTree;return e.component?Xg(e.component):e},u0={name:"BaseTransition",props:Yg,setup(t,{slots:e}){const n=Ad(),r=c0();return()=>{const i=e.default&&tv(e.default(),!0);if(!i||!i.length)return;const s=Zg(i),o=nt(t),{mode:a}=o;if(r.isLeaving)return Bc(s);const l=kf(s);if(!l)return Bc(s);let d=Tu(l,o,r,n,m=>d=m);l.type!==rn&&Ro(l,d);let h=n.subTree&&kf(n.subTree);if(h&&h.type!==rn&&!Ci(h,l)&&Xg(n).type!==rn){let m=Tu(h,o,r,n);if(Ro(h,m),a==="out-in"&&l.type!==rn)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete m.afterLeave,h=void 0},Bc(s);a==="in-out"&&l.type!==rn?m.delayLeave=(g,y,w)=>{const v=ev(r,h);v[String(h.key)]=h,g[Wn]=()=>{y(),g[Wn]=void 0,delete d.delayedLeave,h=void 0},d.delayedLeave=()=>{w(),delete d.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return s}}};function Zg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==rn){e=n;break}}return e}const d0=u0;function ev(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Tu(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:d,onAfterEnter:h,onEnterCancelled:m,onBeforeLeave:g,onLeave:y,onAfterLeave:w,onLeaveCancelled:v,onBeforeAppear:I,onAppear:C,onAfterAppear:R,onAppearCancelled:V}=e,M=String(t.key),f=ev(n,t),G=(x,P)=>{x&&Vn(x,r,9,P)},N=(x,P)=>{const O=P[1];G(x,P),Le(x)?x.every(_=>_.length<=1)&&O():x.length<=1&&O()},A={mode:o,persisted:a,beforeEnter(x){let P=l;if(!n.isMounted)if(s)P=I||l;else return;x[Wn]&&x[Wn](!0);const O=f[M];O&&Ci(t,O)&&O.el[Wn]&&O.el[Wn](),G(P,[x])},enter(x){if(f[M]===t)return;let P=d,O=h,_=m;if(!n.isMounted)if(s)P=C||d,O=R||h,_=V||m;else return;let T=!1;x[Ys]=Y=>{T||(T=!0,Y?G(_,[x]):G(O,[x]),A.delayedLeave&&A.delayedLeave(),x[Ys]=void 0)};const E=x[Ys].bind(null,!1);P?N(P,[x,E]):E()},leave(x,P){const O=String(t.key);if(x[Ys]&&x[Ys](!0),n.isUnmounting)return P();G(g,[x]);let _=!1;x[Wn]=E=>{_||(_=!0,P(),E?G(v,[x]):G(w,[x]),x[Wn]=void 0,f[O]===t&&delete f[O])};const T=x[Wn].bind(null,!1);f[O]=t,y?N(y,[x,T]):T()},clone(x){const P=Tu(x,e,n,r,i);return i&&i(P),P}};return A}function Bc(t){if(Bl(t))return t=ni(t),t.children=null,t}function kf(t){if(!Bl(t))return Qg(t.type)&&t.children?Zg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&qe(n.default))return n.default()}}function Ro(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ro(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tv(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Oe?(o.patchFlag&128&&i++,r=r.concat(tv(o.children,e,a))):(e||o.type!==rn)&&r.push(a!=null?ni(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function nv(t,e){return qe(t)?Ft({name:t.name},e,{setup:t}):t}function rv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Sf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const il=new WeakMap;function mo(t,e,n,r,i=!1){if(Le(t)){t.forEach((v,I)=>mo(v,e&&(Le(e)?e[I]:e),n,r,i));return}if(as(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mo(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?Hl(r.component):r.el,o=i?null:s,{i:a,r:l}=t,d=e&&e.r,h=a.refs===dt?a.refs={}:a.refs,m=a.setupState,g=nt(m),y=m===dt?fg:v=>Sf(h,v)?!1:ot(g,v),w=(v,I)=>!(I&&Sf(h,I));if(d!=null&&d!==l){if(Af(e),_t(d))h[d]=null,y(d)&&(m[d]=null);else if(kt(d)){const v=e;w(d,v.k)&&(d.value=null),v.k&&(h[v.k]=null)}}if(qe(l))Qo(l,a,12,[o,h]);else{const v=_t(l),I=kt(l);if(v||I){const C=()=>{if(t.f){const R=v?y(l)?m[l]:h[l]:w()||!t.k?l.value:h[t.k];if(i)Le(R)&&pd(R,s);else if(Le(R))R.includes(s)||R.push(s);else if(v)h[l]=[s],y(l)&&(m[l]=h[l]);else{const V=[s];w(l,t.k)&&(l.value=V),t.k&&(h[t.k]=V)}}else v?(h[l]=o,y(l)&&(m[l]=o)):I&&(w(l,t.k)&&(l.value=o),t.k&&(h[t.k]=o))};if(o){const R=()=>{C(),il.delete(t)};R.id=-1,il.set(t,R),Xt(R,n)}else Af(t),C()}}}function Af(t){const e=il.get(t);e&&(e.flags|=8,il.delete(t))}$l().requestIdleCallback;$l().cancelIdleCallback;const as=t=>!!t.type.__asyncLoader,Bl=t=>t.type.__isKeepAlive;function h0(t,e){iv(t,"a",e)}function f0(t,e){iv(t,"da",e)}function iv(t,e,n=sn){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(jl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Bl(i.parent.vnode)&&p0(r,e,n,i),i=i.parent}}function p0(t,e,n,r){const i=jl(e,t,r,!0);sv(()=>{pd(r[e],i)},n)}function jl(t,e,n=sn,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{_r();const a=Zo(n),l=Vn(e,n,t,o);return a(),wr(),l});return r?i.unshift(s):i.push(s),s}}const Sr=t=>(e,n=sn)=>{(!Do||t==="sp")&&jl(t,(...r)=>e(...r),n)},m0=Sr("bm"),Yo=Sr("m"),g0=Sr("bu"),v0=Sr("u"),Xo=Sr("bum"),sv=Sr("um"),y0=Sr("sp"),b0=Sr("rtg"),_0=Sr("rtc");function w0(t,e=sn){jl("ec",t,e)}const E0="components",ov=Symbol.for("v-ndc");function av(t){return _t(t)?I0(E0,t,!1)||t:t||ov}function I0(t,e,n=!0,r=!1){const i=Kt||sn;if(i){const s=i.type;{const a=aw(s,!1);if(a&&(a===e||a===kn(e)||a===Ll(kn(e))))return s}const o=Rf(i[t]||s[t],e)||Rf(i.appContext[t],e);return!o&&r?s:o}}function Rf(t,e){return t&&(t[e]||t[kn(e)]||t[Ll(kn(e))])}function it(t,e,n,r){let i;const s=n,o=Le(t);if(o||_t(t)){const a=o&&gr(t);let l=!1,d=!1;a&&(l=!bn(t),d=Er(t),t=Fl(t)),i=new Array(t.length);for(let h=0,m=t.length;h<m;h++)i[h]=e(l?d?ps(Ln(t[h])):Ln(t[h]):t[h],h,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s)}else if(ct(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const h=a[l];i[l]=e(t[h],h,l,s)}}else i=[];return i}function Cu(t,e,n={},r,i){if(Kt.ce||Kt.parent&&as(Kt.parent)&&Kt.parent.ce){const d=Object.keys(n).length>0;return e!=="default"&&(n.name=e),W(),at(Oe,null,[pt("slot",n,r)],d?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),W();const o=s&&lv(s(n)),a=n.key||o&&o.key,l=at(Oe,{key:(a&&!Mn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function lv(t){return t.some(e=>No(e)?!(e.type===rn||e.type===Oe&&!lv(e.children)):!0)?t:null}const xu=t=>t?kv(t)?Hl(t):xu(t.parent):null,go=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xu(t.parent),$root:t=>xu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>uv(t),$forceUpdate:t=>t.f||(t.f=()=>{Id(t.update)}),$nextTick:t=>t.n||(t.n=Jo.bind(t.proxy)),$watch:t=>a0.bind(t)}),jc=(t,e)=>t!==dt&&!t.__isScriptSetup&&ot(t,e),T0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(jc(r,e))return o[e]=1,r[e];if(i!==dt&&ot(i,e))return o[e]=2,i[e];if(ot(s,e))return o[e]=3,s[e];if(n!==dt&&ot(n,e))return o[e]=4,n[e];ku&&(o[e]=0)}}const d=go[e];let h,m;if(d)return e==="$attrs"&&tn(t.attrs,"get",""),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==dt&&ot(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,ot(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return jc(i,e)?(i[e]=n,!0):r!==dt&&ot(r,e)?(r[e]=n,!0):ot(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(n[a]||t!==dt&&a[0]!=="$"&&ot(t,a)||jc(e,a)||ot(s,a)||ot(r,a)||ot(go,a)||ot(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ot(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pf(t){return Le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ku=!0;function C0(t){const e=uv(t),n=t.proxy,r=t.ctx;ku=!1,e.beforeCreate&&Nf(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:d,created:h,beforeMount:m,mounted:g,beforeUpdate:y,updated:w,activated:v,deactivated:I,beforeDestroy:C,beforeUnmount:R,destroyed:V,unmounted:M,render:f,renderTracked:G,renderTriggered:N,errorCaptured:A,serverPrefetch:x,expose:P,inheritAttrs:O,components:_,directives:T,filters:E}=e;if(d&&x0(d,r,null),o)for(const J in o){const ce=o[J];qe(ce)&&(r[J]=ce.bind(n))}if(i){const J=i.call(n,n);ct(J)&&(t.data=Ko(J))}if(ku=!0,s)for(const J in s){const ce=s[J],ie=qe(ce)?ce.bind(n,n):qe(ce.get)?ce.get.bind(n,n):Kn,ye=!qe(ce)&&qe(ce.set)?ce.set.bind(n):Kn,re=Se({get:ie,set:ye});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>re.value,set:ee=>re.value=ee})}if(a)for(const J in a)cv(a[J],r,n,J);if(l){const J=qe(l)?l.call(n):l;Reflect.ownKeys(J).forEach(ce=>{fo(ce,J[ce])})}h&&Nf(h,t,"c");function ae(J,ce){Le(ce)?ce.forEach(ie=>J(ie.bind(n))):ce&&J(ce.bind(n))}if(ae(m0,m),ae(Yo,g),ae(g0,y),ae(v0,w),ae(h0,v),ae(f0,I),ae(w0,A),ae(_0,G),ae(b0,N),ae(Xo,R),ae(sv,M),ae(y0,x),Le(P))if(P.length){const J=t.exposed||(t.exposed={});P.forEach(ce=>{Object.defineProperty(J,ce,{get:()=>n[ce],set:ie=>n[ce]=ie,enumerable:!0})})}else t.exposed||(t.exposed={});f&&t.render===Kn&&(t.render=f),O!=null&&(t.inheritAttrs=O),_&&(t.components=_),T&&(t.directives=T),x&&rv(t)}function x0(t,e,n=Kn){Le(t)&&(t=Su(t));for(const r in t){const i=t[r];let s;ct(i)?"default"in i?s=_n(i.from||r,i.default,!0):s=_n(i.from||r):s=_n(i),kt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Nf(t,e,n){Vn(Le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cv(t,e,n,r){let i=r.includes(".")?Gg(n,r):()=>n[r];if(_t(t)){const s=e[t];qe(s)&&Bt(i,s)}else if(qe(t))Bt(i,t.bind(n));else if(ct(t))if(Le(t))t.forEach(s=>cv(s,e,n,r));else{const s=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(s)&&Bt(i,s,t)}}function uv(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(d=>sl(l,d,o,!0)),sl(l,e,o)),ct(e)&&s.set(e,l),l}function sl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&sl(t,s,n,!0),i&&i.forEach(o=>sl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=k0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const k0={data:Df,props:Of,emits:Of,methods:no,computed:no,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:no,directives:no,watch:A0,provide:Df,inject:S0};function Df(t,e){return e?t?function(){return Ft(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function S0(t,e){return no(Su(t),Su(e))}function Su(t){if(Le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function an(t,e){return t?[...new Set([].concat(t,e))]:e}function no(t,e){return t?Ft(Object.create(null),t,e):e}function Of(t,e){return t?Le(t)&&Le(e)?[...new Set([...t,...e])]:Ft(Object.create(null),Pf(t),Pf(e??{})):e}function A0(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const r in e)n[r]=an(t[r],e[r]);return n}function dv(){return{app:null,config:{isNativeTag:fg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R0=0;function P0(t,e){return function(r,i=null){qe(r)||(r=Ft({},r)),i!=null&&!ct(i)&&(i=null);const s=dv(),o=new WeakSet,a=[];let l=!1;const d=s.app={_uid:R0++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:cw,get config(){return s.config},set config(h){},use(h,...m){return o.has(h)||(h&&qe(h.install)?(o.add(h),h.install(d,...m)):qe(h)&&(o.add(h),h(d,...m))),d},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),d},component(h,m){return m?(s.components[h]=m,d):s.components[h]},directive(h,m){return m?(s.directives[h]=m,d):s.directives[h]},mount(h,m,g){if(!l){const y=d._ceVNode||pt(r,i);return y.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),t(y,h,g),l=!0,d._container=h,h.__vue_app__=d,Hl(y.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Vn(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(h,m){return s.provides[h]=m,d},runWithContext(h){const m=Pi;Pi=d;try{return h()}finally{Pi=m}}};return d}}let Pi=null;const N0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${ui(e)}Modifiers`];function D0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||dt;let i=n;const s=e.startsWith("update:"),o=s&&N0(r,e.slice(7));o&&(o.trim&&(i=n.map(h=>_t(h)?h.trim():h)),o.number&&(i=n.map(Vl)));let a,l=r[a=Vc(e)]||r[a=Vc(kn(e))];!l&&s&&(l=r[a=Vc(ui(e))]),l&&Vn(l,t,6,i);const d=r[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vn(d,t,6,i)}}const O0=new WeakMap;function hv(t,e,n=!1){const r=n?O0:e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!qe(t)){const l=d=>{const h=hv(d,e,!0);h&&(a=!0,Ft(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ct(t)&&r.set(t,null),null):(Le(s)?s.forEach(l=>o[l]=null):Ft(o,s),ct(t)&&r.set(t,o),o)}function ql(t,e){return!t||!Dl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(t,e[0].toLowerCase()+e.slice(1))||ot(t,ui(e))||ot(t,e))}function Mf(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:d,renderCache:h,props:m,data:g,setupState:y,ctx:w,inheritAttrs:v}=t,I=rl(t);let C,R;try{if(n.shapeFlag&4){const M=i||r,f=M;C=Gn(d.call(f,M,h,m,y,g,w)),R=a}else{const M=e;C=Gn(M.length>1?M(m,{attrs:a,slots:o,emit:l}):M(m,null)),R=e.props?a:M0(a)}}catch(M){vo.length=0,zl(M,t,1),C=pt(rn)}let V=C;if(R&&v!==!1){const M=Object.keys(R),{shapeFlag:f}=V;M.length&&f&7&&(s&&M.some(fd)&&(R=L0(R,s)),V=ni(V,R,!1,!0))}return n.dirs&&(V=ni(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Ro(V,n.transition),C=V,rl(I),C}const M0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Dl(n))&&((e||(e={}))[n]=t[n]);return e},L0=(t,e)=>{const n={};for(const r in t)(!fd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function V0(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,d=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Lf(r,o,d):!!o;if(l&8){const h=e.dynamicProps;for(let m=0;m<h.length;m++){const g=h[m];if(fv(o,r,g)&&!ql(d,g))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Lf(r,o,d):!0:!!o;return!1}function Lf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(fv(e,t,s)&&!ql(n,s))return!0}return!1}function fv(t,e,n){const r=t[n],i=e[n];return n==="style"&&ct(r)&&ct(i)?!Ts(r,i):r!==i}function $0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const pv={},mv=()=>Object.create(pv),gv=t=>Object.getPrototypeOf(t)===pv;function F0(t,e,n,r=!1){const i={},s=mv();t.propsDefaults=Object.create(null),vv(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:$g(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function U0(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=nt(i),[l]=t.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let m=0;m<h.length;m++){let g=h[m];if(ql(t.emitsOptions,g))continue;const y=e[g];if(l)if(ot(s,g))y!==s[g]&&(s[g]=y,d=!0);else{const w=kn(g);i[w]=Au(l,a,w,y,t,!1)}else y!==s[g]&&(s[g]=y,d=!0)}}}else{vv(t,e,i,s)&&(d=!0);let h;for(const m in a)(!e||!ot(e,m)&&((h=ui(m))===m||!ot(e,h)))&&(l?n&&(n[m]!==void 0||n[h]!==void 0)&&(i[m]=Au(l,a,m,void 0,t,!0)):delete i[m]);if(s!==a)for(const m in s)(!e||!ot(e,m))&&(delete s[m],d=!0)}d&&dr(t.attrs,"set","")}function vv(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(co(l))continue;const d=e[l];let h;i&&ot(i,h=kn(l))?!s||!s.includes(h)?n[h]=d:(a||(a={}))[h]=d:ql(t.emitsOptions,l)||(!(l in r)||d!==r[l])&&(r[l]=d,o=!0)}if(s){const l=nt(n),d=a||dt;for(let h=0;h<s.length;h++){const m=s[h];n[m]=Au(i,l,m,d[m],t,!ot(d,m))}}return o}function Au(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ot(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:d}=i;if(n in d)r=d[n];else{const h=Zo(i);r=d[n]=l.call(null,e),h()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ui(n))&&(r=!0))}return r}const z0=new WeakMap;function yv(t,e,n=!1){const r=n?z0:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!qe(t)){const h=m=>{l=!0;const[g,y]=yv(m,e,!0);Ft(o,g),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!l)return ct(t)&&r.set(t,is),is;if(Le(s))for(let h=0;h<s.length;h++){const m=kn(s[h]);Vf(m)&&(o[m]=dt)}else if(s)for(const h in s){const m=kn(h);if(Vf(m)){const g=s[h],y=o[m]=Le(g)||qe(g)?{type:g}:Ft({},g),w=y.type;let v=!1,I=!0;if(Le(w))for(let C=0;C<w.length;++C){const R=w[C],V=qe(R)&&R.name;if(V==="Boolean"){v=!0;break}else V==="String"&&(I=!1)}else v=qe(w)&&w.name==="Boolean";y[0]=v,y[1]=I,(v||ot(y,"default"))&&a.push(m)}}const d=[o,a];return ct(t)&&r.set(t,d),d}function Vf(t){return t[0]!=="$"&&!co(t)}const Cd=t=>t==="_"||t==="_ctx"||t==="$stable",xd=t=>Le(t)?t.map(Gn):[Gn(t)],B0=(t,e,n)=>{if(e._n)return e;const r=bt((...i)=>xd(e(...i)),n);return r._c=!1,r},bv=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Cd(i))continue;const s=t[i];if(qe(s))e[i]=B0(i,s,r);else if(s!=null){const o=xd(s);e[i]=()=>o}}},_v=(t,e)=>{const n=xd(e);t.slots.default=()=>n},wv=(t,e,n)=>{for(const r in e)(n||!Cd(r))&&(t[r]=e[r])},j0=(t,e,n)=>{const r=t.slots=mv();if(t.vnode.shapeFlag&32){const i=e._;i?(wv(r,e,n),n&&vg(r,"_",i,!0)):bv(e,r)}else e&&_v(t,e)},q0=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=dt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:wv(i,e,n):(s=!e.$stable,bv(e,i)),o=e}else e&&(_v(t,e),o={default:1});if(s)for(const a in i)!Cd(a)&&o[a]==null&&delete i[a]},Xt=Q0;function W0(t){return H0(t)}function H0(t,e){const n=$l();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:d,setElementText:h,parentNode:m,nextSibling:g,setScopeId:y=Kn,insertStaticContent:w}=t,v=(F,q,p,H=null,B=null,D=null,L=void 0,z=null,U=!!q.dynamicChildren)=>{if(F===q)return;F&&!Ci(F,q)&&(H=K(F),ee(F,B,D,!0),F=null),q.patchFlag===-2&&(U=!1,q.dynamicChildren=null);const{type:S,ref:j,shapeFlag:ne}=q;switch(S){case Wl:I(F,q,p,H);break;case rn:C(F,q,p,H);break;case za:F==null&&R(q,p,H,L);break;case Oe:_(F,q,p,H,B,D,L,z,U);break;default:ne&1?f(F,q,p,H,B,D,L,z,U):ne&6?T(F,q,p,H,B,D,L,z,U):(ne&64||ne&128)&&S.process(F,q,p,H,B,D,L,z,U,oe)}j!=null&&B?mo(j,F&&F.ref,D,q||F,!q):j==null&&F&&F.ref!=null&&mo(F.ref,null,D,F,!0)},I=(F,q,p,H)=>{if(F==null)r(q.el=a(q.children),p,H);else{const B=q.el=F.el;q.children!==F.children&&d(B,q.children)}},C=(F,q,p,H)=>{F==null?r(q.el=l(q.children||""),p,H):q.el=F.el},R=(F,q,p,H)=>{[F.el,F.anchor]=w(F.children,q,p,H,F.el,F.anchor)},V=({el:F,anchor:q},p,H)=>{let B;for(;F&&F!==q;)B=g(F),r(F,p,H),F=B;r(q,p,H)},M=({el:F,anchor:q})=>{let p;for(;F&&F!==q;)p=g(F),i(F),F=p;i(q)},f=(F,q,p,H,B,D,L,z,U)=>{if(q.type==="svg"?L="svg":q.type==="math"&&(L="mathml"),F==null)G(q,p,H,B,D,L,z,U);else{const S=F.el&&F.el._isVueCE?F.el:null;try{S&&S._beginPatch(),x(F,q,B,D,L,z,U)}finally{S&&S._endPatch()}}},G=(F,q,p,H,B,D,L,z)=>{let U,S;const{props:j,shapeFlag:ne,transition:le,dirs:fe}=F;if(U=F.el=o(F.type,D,j&&j.is,j),ne&8?h(U,F.children):ne&16&&A(F.children,U,null,H,B,qc(F,D),L,z),fe&&bi(F,null,H,"created"),N(U,F,F.scopeId,L,H),j){for(const Pe in j)Pe!=="value"&&!co(Pe)&&s(U,Pe,null,j[Pe],D,H);"value"in j&&s(U,"value",null,j.value,D),(S=j.onVnodeBeforeMount)&&jn(S,H,F)}fe&&bi(F,null,H,"beforeMount");const Te=G0(B,le);Te&&le.beforeEnter(U),r(U,q,p),((S=j&&j.onVnodeMounted)||Te||fe)&&Xt(()=>{S&&jn(S,H,F),Te&&le.enter(U),fe&&bi(F,null,H,"mounted")},B)},N=(F,q,p,H,B)=>{if(p&&y(F,p),H)for(let D=0;D<H.length;D++)y(F,H[D]);if(B){let D=B.subTree;if(q===D||Tv(D.type)&&(D.ssContent===q||D.ssFallback===q)){const L=B.vnode;N(F,L,L.scopeId,L.slotScopeIds,B.parent)}}},A=(F,q,p,H,B,D,L,z,U=0)=>{for(let S=U;S<F.length;S++){const j=F[S]=z?ur(F[S]):Gn(F[S]);v(null,j,q,p,H,B,D,L,z)}},x=(F,q,p,H,B,D,L)=>{const z=q.el=F.el;let{patchFlag:U,dynamicChildren:S,dirs:j}=q;U|=F.patchFlag&16;const ne=F.props||dt,le=q.props||dt;let fe;if(p&&_i(p,!1),(fe=le.onVnodeBeforeUpdate)&&jn(fe,p,q,F),j&&bi(q,F,p,"beforeUpdate"),p&&_i(p,!0),(ne.innerHTML&&le.innerHTML==null||ne.textContent&&le.textContent==null)&&h(z,""),S?P(F.dynamicChildren,S,z,p,H,qc(q,B),D):L||ce(F,q,z,null,p,H,qc(q,B),D,!1),U>0){if(U&16)O(z,ne,le,p,B);else if(U&2&&ne.class!==le.class&&s(z,"class",null,le.class,B),U&4&&s(z,"style",ne.style,le.style,B),U&8){const Te=q.dynamicProps;for(let Pe=0;Pe<Te.length;Pe++){const he=Te[Pe],je=ne[he],rt=le[he];(rt!==je||he==="value")&&s(z,he,je,rt,B,p)}}U&1&&F.children!==q.children&&h(z,q.children)}else!L&&S==null&&O(z,ne,le,p,B);((fe=le.onVnodeUpdated)||j)&&Xt(()=>{fe&&jn(fe,p,q,F),j&&bi(q,F,p,"updated")},H)},P=(F,q,p,H,B,D,L)=>{for(let z=0;z<q.length;z++){const U=F[z],S=q[z],j=U.el&&(U.type===Oe||!Ci(U,S)||U.shapeFlag&198)?m(U.el):p;v(U,S,j,null,H,B,D,L,!0)}},O=(F,q,p,H,B)=>{if(q!==p){if(q!==dt)for(const D in q)!co(D)&&!(D in p)&&s(F,D,q[D],null,B,H);for(const D in p){if(co(D))continue;const L=p[D],z=q[D];L!==z&&D!=="value"&&s(F,D,z,L,B,H)}"value"in p&&s(F,"value",q.value,p.value,B)}},_=(F,q,p,H,B,D,L,z,U)=>{const S=q.el=F?F.el:a(""),j=q.anchor=F?F.anchor:a("");let{patchFlag:ne,dynamicChildren:le,slotScopeIds:fe}=q;fe&&(z=z?z.concat(fe):fe),F==null?(r(S,p,H),r(j,p,H),A(q.children||[],p,j,B,D,L,z,U)):ne>0&&ne&64&&le&&F.dynamicChildren&&F.dynamicChildren.length===le.length?(P(F.dynamicChildren,le,p,B,D,L,z),(q.key!=null||B&&q===B.subTree)&&kd(F,q,!0)):ce(F,q,p,j,B,D,L,z,U)},T=(F,q,p,H,B,D,L,z,U)=>{q.slotScopeIds=z,F==null?q.shapeFlag&512?B.ctx.activate(q,p,H,L,U):E(q,p,H,B,D,L,U):Y(F,q,U)},E=(F,q,p,H,B,D,L)=>{const z=F.component=nw(F,H,B);if(Bl(F)&&(z.ctx.renderer=oe),rw(z,!1,L),z.asyncDep){if(B&&B.registerDep(z,ae,L),!F.el){const U=z.subTree=pt(rn);C(null,U,q,p),F.placeholder=U.el}}else ae(z,F,q,p,B,D,L)},Y=(F,q,p)=>{const H=q.component=F.component;if(V0(F,q,p))if(H.asyncDep&&!H.asyncResolved){J(H,q,p);return}else H.next=q,H.update();else q.el=F.el,H.vnode=q},ae=(F,q,p,H,B,D,L)=>{const z=()=>{if(F.isMounted){let{next:ne,bu:le,u:fe,parent:Te,vnode:Pe}=F;{const yt=Ev(F);if(yt){ne&&(ne.el=Pe.el,J(F,ne,L)),yt.asyncDep.then(()=>{Xt(()=>{F.isUnmounted||S()},B)});return}}let he=ne,je;_i(F,!1),ne?(ne.el=Pe.el,J(F,ne,L)):ne=Pe,le&&Fa(le),(je=ne.props&&ne.props.onVnodeBeforeUpdate)&&jn(je,Te,ne,Pe),_i(F,!0);const rt=Mf(F),Ke=F.subTree;F.subTree=rt,v(Ke,rt,m(Ke.el),K(Ke),F,B,D),ne.el=rt.el,he===null&&$0(F,rt.el),fe&&Xt(fe,B),(je=ne.props&&ne.props.onVnodeUpdated)&&Xt(()=>jn(je,Te,ne,Pe),B)}else{let ne;const{el:le,props:fe}=q,{bm:Te,m:Pe,parent:he,root:je,type:rt}=F,Ke=as(q);_i(F,!1),Te&&Fa(Te),!Ke&&(ne=fe&&fe.onVnodeBeforeMount)&&jn(ne,he,q),_i(F,!0);{je.ce&&je.ce._hasShadowRoot()&&je.ce._injectChildStyle(rt);const yt=F.subTree=Mf(F);v(null,yt,p,H,F,B,D),q.el=yt.el}if(Pe&&Xt(Pe,B),!Ke&&(ne=fe&&fe.onVnodeMounted)){const yt=q;Xt(()=>jn(ne,he,yt),B)}(q.shapeFlag&256||he&&as(he.vnode)&&he.vnode.shapeFlag&256)&&F.a&&Xt(F.a,B),F.isMounted=!0,q=p=H=null}};F.scope.on();const U=F.effect=new Tg(z);F.scope.off();const S=F.update=U.run.bind(U),j=F.job=U.runIfDirty.bind(U);j.i=F,j.id=F.uid,U.scheduler=()=>Id(j),_i(F,!0),S()},J=(F,q,p)=>{q.component=F;const H=F.vnode.props;F.vnode=q,F.next=null,U0(F,q.props,H,p),q0(F,q.children,p),_r(),If(F),wr()},ce=(F,q,p,H,B,D,L,z,U=!1)=>{const S=F&&F.children,j=F?F.shapeFlag:0,ne=q.children,{patchFlag:le,shapeFlag:fe}=q;if(le>0){if(le&128){ye(S,ne,p,H,B,D,L,z,U);return}else if(le&256){ie(S,ne,p,H,B,D,L,z,U);return}}fe&8?(j&16&&ue(S,B,D),ne!==S&&h(p,ne)):j&16?fe&16?ye(S,ne,p,H,B,D,L,z,U):ue(S,B,D,!0):(j&8&&h(p,""),fe&16&&A(ne,p,H,B,D,L,z,U))},ie=(F,q,p,H,B,D,L,z,U)=>{F=F||is,q=q||is;const S=F.length,j=q.length,ne=Math.min(S,j);let le;for(le=0;le<ne;le++){const fe=q[le]=U?ur(q[le]):Gn(q[le]);v(F[le],fe,p,null,B,D,L,z,U)}S>j?ue(F,B,D,!0,!1,ne):A(q,p,H,B,D,L,z,U,ne)},ye=(F,q,p,H,B,D,L,z,U)=>{let S=0;const j=q.length;let ne=F.length-1,le=j-1;for(;S<=ne&&S<=le;){const fe=F[S],Te=q[S]=U?ur(q[S]):Gn(q[S]);if(Ci(fe,Te))v(fe,Te,p,null,B,D,L,z,U);else break;S++}for(;S<=ne&&S<=le;){const fe=F[ne],Te=q[le]=U?ur(q[le]):Gn(q[le]);if(Ci(fe,Te))v(fe,Te,p,null,B,D,L,z,U);else break;ne--,le--}if(S>ne){if(S<=le){const fe=le+1,Te=fe<j?q[fe].el:H;for(;S<=le;)v(null,q[S]=U?ur(q[S]):Gn(q[S]),p,Te,B,D,L,z,U),S++}}else if(S>le)for(;S<=ne;)ee(F[S],B,D,!0),S++;else{const fe=S,Te=S,Pe=new Map;for(S=Te;S<=le;S++){const tt=q[S]=U?ur(q[S]):Gn(q[S]);tt.key!=null&&Pe.set(tt.key,S)}let he,je=0;const rt=le-Te+1;let Ke=!1,yt=0;const Ge=new Array(rt);for(S=0;S<rt;S++)Ge[S]=0;for(S=fe;S<=ne;S++){const tt=F[S];if(je>=rt){ee(tt,B,D,!0);continue}let Ze;if(tt.key!=null)Ze=Pe.get(tt.key);else for(he=Te;he<=le;he++)if(Ge[he-Te]===0&&Ci(tt,q[he])){Ze=he;break}Ze===void 0?ee(tt,B,D,!0):(Ge[Ze-Te]=S+1,Ze>=yt?yt=Ze:Ke=!0,v(tt,q[Ze],p,null,B,D,L,z,U),je++)}const Jt=Ke?K0(Ge):is;for(he=Jt.length-1,S=rt-1;S>=0;S--){const tt=Te+S,Ze=q[tt],It=q[tt+1],Ce=tt+1<j?It.el||Iv(It):H;Ge[S]===0?v(null,Ze,p,Ce,B,D,L,z,U):Ke&&(he<0||S!==Jt[he]?re(Ze,p,Ce,2):he--)}}},re=(F,q,p,H,B=null)=>{const{el:D,type:L,transition:z,children:U,shapeFlag:S}=F;if(S&6){re(F.component.subTree,q,p,H);return}if(S&128){F.suspense.move(q,p,H);return}if(S&64){L.move(F,q,p,oe);return}if(L===Oe){r(D,q,p);for(let ne=0;ne<U.length;ne++)re(U[ne],q,p,H);r(F.anchor,q,p);return}if(L===za){V(F,q,p);return}if(H!==2&&S&1&&z)if(H===0)z.beforeEnter(D),r(D,q,p),Xt(()=>z.enter(D),B);else{const{leave:ne,delayLeave:le,afterLeave:fe}=z,Te=()=>{F.ctx.isUnmounted?i(D):r(D,q,p)},Pe=()=>{D._isLeaving&&D[Wn](!0),ne(D,()=>{Te(),fe&&fe()})};le?le(D,Te,Pe):Pe()}else r(D,q,p)},ee=(F,q,p,H=!1,B=!1)=>{const{type:D,props:L,ref:z,children:U,dynamicChildren:S,shapeFlag:j,patchFlag:ne,dirs:le,cacheIndex:fe}=F;if(ne===-2&&(B=!1),z!=null&&(_r(),mo(z,null,p,F,!0),wr()),fe!=null&&(q.renderCache[fe]=void 0),j&256){q.ctx.deactivate(F);return}const Te=j&1&&le,Pe=!as(F);let he;if(Pe&&(he=L&&L.onVnodeBeforeUnmount)&&jn(he,q,F),j&6)te(F.component,p,H);else{if(j&128){F.suspense.unmount(p,H);return}Te&&bi(F,null,q,"beforeUnmount"),j&64?F.type.remove(F,q,p,oe,H):S&&!S.hasOnce&&(D!==Oe||ne>0&&ne&64)?ue(S,q,p,!1,!0):(D===Oe&&ne&384||!B&&j&16)&&ue(U,q,p),H&&Ie(F)}(Pe&&(he=L&&L.onVnodeUnmounted)||Te)&&Xt(()=>{he&&jn(he,q,F),Te&&bi(F,null,q,"unmounted")},p)},Ie=F=>{const{type:q,el:p,anchor:H,transition:B}=F;if(q===Oe){we(p,H);return}if(q===za){M(F);return}const D=()=>{i(p),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(F.shapeFlag&1&&B&&!B.persisted){const{leave:L,delayLeave:z}=B,U=()=>L(p,D);z?z(F.el,D,U):U()}else D()},we=(F,q)=>{let p;for(;F!==q;)p=g(F),i(F),F=p;i(q)},te=(F,q,p)=>{const{bum:H,scope:B,job:D,subTree:L,um:z,m:U,a:S}=F;$f(U),$f(S),H&&Fa(H),B.stop(),D&&(D.flags|=8,ee(L,F,q,p)),z&&Xt(z,q),Xt(()=>{F.isUnmounted=!0},q)},ue=(F,q,p,H=!1,B=!1,D=0)=>{for(let L=D;L<F.length;L++)ee(F[L],q,p,H,B)},K=F=>{if(F.shapeFlag&6)return K(F.component.subTree);if(F.shapeFlag&128)return F.suspense.next();const q=g(F.anchor||F.el),p=q&&q[Kg];return p?g(p):q};let X=!1;const me=(F,q,p)=>{let H;F==null?q._vnode&&(ee(q._vnode,null,null,!0),H=q._vnode.component):v(q._vnode||null,F,q,null,null,null,p),q._vnode=F,X||(X=!0,If(H),jg(),X=!1)},oe={p:v,um:ee,m:re,r:Ie,mt:E,mc:A,pc:ce,pbc:P,n:K,o:t};return{render:me,hydrate:void 0,createApp:P0(me)}}function qc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _i({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function G0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kd(t,e,n=!1){const r=t.children,i=e.children;if(Le(r)&&Le(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ur(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&kd(o,a)),a.type===Wl&&(a.patchFlag===-1&&(a=i[s]=ur(a)),a.el=o.el),a.type===rn&&!a.el&&(a.el=o.el)}}function K0(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const d=t[r];if(d!==0){if(i=n[n.length-1],t[i]<d){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<d?s=a+1:o=a;d<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Ev(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ev(e)}function $f(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Iv(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Iv(e.subTree):null}const Tv=t=>t.__isSuspense;function Q0(t,e){e&&e.pendingBranch?Le(t)?e.effects.push(...t):e.effects.push(t):r0(t)}const Oe=Symbol.for("v-fgt"),Wl=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),vo=[];let vn=null;function W(t=!1){vo.push(vn=t?null:[])}function J0(){vo.pop(),vn=vo[vo.length-1]||null}let Po=1;function ol(t,e=!1){Po+=t,t<0&&vn&&e&&(vn.hasOnce=!0)}function Cv(t){return t.dynamicChildren=Po>0?vn||is:null,J0(),Po>0&&vn&&vn.push(t),t}function Q(t,e,n,r,i,s){return Cv(u(t,e,n,r,i,s,!0))}function at(t,e,n,r,i){return Cv(pt(t,e,n,r,i,!0))}function No(t){return t?t.__v_isVNode===!0:!1}function Ci(t,e){return t.type===e.type&&t.key===e.key}const xv=({key:t})=>t??null,Ba=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||kt(t)||qe(t)?{i:Kt,r:t,k:e,f:!!n}:t:null);function u(t,e=null,n=null,r=0,i=null,s=t===Oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xv(e),ref:e&&Ba(e),scopeId:Wg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Kt};return a?(Sd(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),Po>0&&!o&&vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vn.push(l),l}const pt=Y0;function Y0(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ov)&&(t=rn),No(t)){const a=ni(t,e,!0);return n&&Sd(a,n),Po>0&&!s&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag=-2,a}if(lw(t)&&(t=t.__vccOpts),e){e=X0(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=Fe(a)),ct(l)&&(Ul(l)&&!Le(l)&&(l=Ft({},l)),e.style=ze(l))}const o=_t(t)?1:Tv(t)?128:Qg(t)?64:ct(t)?4:qe(t)?2:0;return u(t,e,n,r,i,o,s,!0)}function X0(t){return t?Ul(t)||gv(t)?Ft({},t):t:null}function ni(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=t,d=e?Z0(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&xv(d),ref:e&&e.ref?n&&s?Le(s)?s.concat(Ba(e)):[s,Ba(e)]:Ba(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ni(t.ssContent),ssFallback:t.ssFallback&&ni(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ro(h,l.clone(h)),h}function Ne(t=" ",e=0){return pt(Wl,null,t,e)}function un(t,e){const n=pt(za,null,t);return n.staticCount=e,n}function Re(t="",e=!1){return e?(W(),at(rn,null,t)):pt(rn,null,t)}function Gn(t){return t==null||typeof t=="boolean"?pt(rn):Le(t)?pt(Oe,null,t.slice()):No(t)?ur(t):pt(Wl,null,String(t))}function ur(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ni(t)}function Sd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Le(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Sd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!gv(e)?e._ctx=Kt:i===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Kt},n=32):(e=String(e),r&64?(n=16,e=[Ne(e)]):n=8);t.children=e,t.shapeFlag|=n}function Z0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Fe([e.class,r.class]));else if(i==="style")e.style=ze([e.style,r.style]);else if(Dl(i)){const s=e[i],o=r[i];o&&s!==o&&!(Le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function jn(t,e,n,r=null){Vn(t,e,7,[n,r])}const ew=dv();let tw=0;function nw(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||ew,s={uid:tw++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yv(r,i),emitsOptions:hv(r,i),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:r.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=D0.bind(null,s),t.ce&&t.ce(s),s}let sn=null;const Ad=()=>sn||Kt;let al,Ru;{const t=$l(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};al=e("__VUE_INSTANCE_SETTERS__",n=>sn=n),Ru=e("__VUE_SSR_SETTERS__",n=>Do=n)}const Zo=t=>{const e=sn;return al(t),t.scope.on(),()=>{t.scope.off(),al(e)}},Ff=()=>{sn&&sn.scope.off(),al(null)};function kv(t){return t.vnode.shapeFlag&4}let Do=!1;function rw(t,e=!1,n=!1){e&&Ru(e);const{props:r,children:i}=t.vnode,s=kv(t);F0(t,r,s,e),j0(t,i,n||e);const o=s?iw(t,e):void 0;return e&&Ru(!1),o}function iw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,T0);const{setup:r}=n;if(r){_r();const i=t.setupContext=r.length>1?ow(t):null,s=Zo(t),o=Qo(r,t,0,[t.props,i]),a=pg(o);if(wr(),s(),(a||t.sp)&&!as(t)&&rv(t),a){if(o.then(Ff,Ff),e)return o.then(l=>{Uf(t,l)}).catch(l=>{zl(l,t,0)});t.asyncDep=o}else Uf(t,o)}else Sv(t)}function Uf(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=Ug(e)),Sv(t)}function Sv(t,e,n){const r=t.type;t.render||(t.render=r.render||Kn);{const i=Zo(t);_r();try{C0(t)}finally{wr(),i()}}}const sw={get(t,e){return tn(t,"get",""),t[e]}};function ow(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sw),slots:t.slots,emit:t.emit,expose:e}}function Hl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ug(Ed(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in go)return go[n](t)},has(e,n){return n in e||n in go}})):t.proxy}function aw(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function lw(t){return qe(t)&&"__vccOpts"in t}const Se=(t,e)=>X_(t,e,Do);function Rd(t,e,n){try{ol(-1);const r=arguments.length;return r===2?ct(e)&&!Le(e)?No(e)?pt(t,null,[e]):pt(t,e):pt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&No(n)&&(n=[n]),pt(t,e,n))}finally{ol(1)}}const cw="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pu;const zf=typeof window<"u"&&window.trustedTypes;if(zf)try{Pu=zf.createPolicy("vue",{createHTML:t=>t})}catch{}const Av=Pu?t=>Pu.createHTML(t):t=>t,uw="http://www.w3.org/2000/svg",dw="http://www.w3.org/1998/Math/MathML",cr=typeof document<"u"?document:null,Bf=cr&&cr.createElement("template"),hw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?cr.createElementNS(uw,t):e==="mathml"?cr.createElementNS(dw,t):n?cr.createElement(t,{is:n}):cr.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>cr.createTextNode(t),createComment:t=>cr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Bf.innerHTML=Av(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Bf.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$r="transition",Xs="animation",Oo=Symbol("_vtc"),Rv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fw=Ft({},Yg,Rv),pw=t=>(t.displayName="Transition",t.props=fw,t),vr=pw((t,{slots:e})=>Rd(d0,mw(t),e)),wi=(t,e=[])=>{Le(t)?t.forEach(n=>n(...e)):t&&t(...e)},jf=t=>t?Le(t)?t.some(e=>e.length>1):t.length>1:!1;function mw(t){const e={};for(const _ in t)_ in Rv||(e[_]=t[_]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:d=o,appearToClass:h=a,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,w=gw(i),v=w&&w[0],I=w&&w[1],{onBeforeEnter:C,onEnter:R,onEnterCancelled:V,onLeave:M,onLeaveCancelled:f,onBeforeAppear:G=C,onAppear:N=R,onAppearCancelled:A=V}=e,x=(_,T,E,Y)=>{_._enterCancelled=Y,Ei(_,T?h:a),Ei(_,T?d:o),E&&E()},P=(_,T)=>{_._isLeaving=!1,Ei(_,m),Ei(_,y),Ei(_,g),T&&T()},O=_=>(T,E)=>{const Y=_?N:R,ae=()=>x(T,_,E);wi(Y,[T,ae]),qf(()=>{Ei(T,_?l:s),or(T,_?h:a),jf(Y)||Wf(T,r,v,ae)})};return Ft(e,{onBeforeEnter(_){wi(C,[_]),or(_,s),or(_,o)},onBeforeAppear(_){wi(G,[_]),or(_,l),or(_,d)},onEnter:O(!1),onAppear:O(!0),onLeave(_,T){_._isLeaving=!0;const E=()=>P(_,T);or(_,m),_._enterCancelled?(or(_,g),Kf(_)):(Kf(_),or(_,g)),qf(()=>{_._isLeaving&&(Ei(_,m),or(_,y),jf(M)||Wf(_,r,I,E))}),wi(M,[_,E])},onEnterCancelled(_){x(_,!1,void 0,!0),wi(V,[_])},onAppearCancelled(_){x(_,!0,void 0,!0),wi(A,[_])},onLeaveCancelled(_){P(_),wi(f,[_])}})}function gw(t){if(t==null)return null;if(ct(t))return[Wc(t.enter),Wc(t.leave)];{const e=Wc(t);return[e,e]}}function Wc(t){return v_(t)}function or(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Oo]||(t[Oo]=new Set)).add(e)}function Ei(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Oo];n&&(n.delete(e),n.size||(t[Oo]=void 0))}function qf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vw=0;function Wf(t,e,n,r){const i=t._endId=++vw,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=yw(t,e);if(!o)return r();const d=o+"end";let h=0;const m=()=>{t.removeEventListener(d,g),s()},g=y=>{y.target===t&&++h>=l&&m()};setTimeout(()=>{h<l&&m()},a+1),t.addEventListener(d,g)}function yw(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),i=r(`${$r}Delay`),s=r(`${$r}Duration`),o=Hf(i,s),a=r(`${Xs}Delay`),l=r(`${Xs}Duration`),d=Hf(a,l);let h=null,m=0,g=0;e===$r?o>0&&(h=$r,m=o,g=s.length):e===Xs?d>0&&(h=Xs,m=d,g=l.length):(m=Math.max(o,d),h=m>0?o>d?$r:Xs:null,g=h?h===$r?s.length:l.length:0);const y=h===$r&&/\b(?:transform|all)(?:,|$)/.test(r(`${$r}Property`).toString());return{type:h,timeout:m,propCount:g,hasTransform:y}}function Hf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Gf(n)+Gf(t[r])))}function Gf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Kf(t){return(t?t.ownerDocument:document).body.offsetHeight}function bw(t,e,n){const r=t[Oo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ll=Symbol("_vod"),Pv=Symbol("_vsh"),_w={name:"show",beforeMount(t,{value:e},{transition:n}){t[ll]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Zs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Zs(t,!0),r.enter(t)):r.leave(t,()=>{Zs(t,!1)}):Zs(t,e))},beforeUnmount(t,{value:e}){Zs(t,e)}};function Zs(t,e){t.style.display=e?t[ll]:"none",t[Pv]=!e}const ww=Symbol(""),Ew=/(?:^|;)\s*display\s*:/;function Iw(t,e,n){const r=t.style,i=_t(n);let s=!1;if(n&&!i){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ja(r,a,"")}else for(const o in e)n[o]==null&&ja(r,o,"");for(const o in n)o==="display"&&(s=!0),ja(r,o,n[o])}else if(i){if(e!==n){const o=r[ww];o&&(n+=";"+o),r.cssText=n,s=Ew.test(n)}}else e&&t.removeAttribute("style");ll in t&&(t[ll]=s?r.display:"",t[Pv]&&(r.display="none"))}const Qf=/\s*!important$/;function ja(t,e,n){if(Le(n))n.forEach(r=>ja(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tw(t,e);Qf.test(n)?t.setProperty(ui(r),n.replace(Qf,""),"important"):t[r]=n}}const Jf=["Webkit","Moz","ms"],Hc={};function Tw(t,e){const n=Hc[e];if(n)return n;let r=kn(e);if(r!=="filter"&&r in t)return Hc[e]=r;r=Ll(r);for(let i=0;i<Jf.length;i++){const s=Jf[i]+r;if(s in t)return Hc[e]=s}return e}const Yf="http://www.w3.org/1999/xlink";function Xf(t,e,n,r,i,s=I_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yf,e.slice(6,e.length)):t.setAttributeNS(Yf,e,n):n==null||s&&!yg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Mn(n)?String(n):n)}function Zf(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Av(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=yg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Wr(t,e,n,r){t.addEventListener(e,n,r)}function Cw(t,e,n,r){t.removeEventListener(e,n,r)}const ep=Symbol("_vei");function xw(t,e,n,r,i=null){const s=t[ep]||(t[ep]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=kw(e);if(r){const d=s[e]=Rw(r,i);Wr(t,a,d,l)}else o&&(Cw(t,a,o,l),s[e]=void 0)}}const tp=/(?:Once|Passive|Capture)$/;function kw(t){let e;if(tp.test(t)){e={};let r;for(;r=t.match(tp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ui(t.slice(2)),e]}let Gc=0;const Sw=Promise.resolve(),Aw=()=>Gc||(Sw.then(()=>Gc=0),Gc=Date.now());function Rw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Vn(Pw(r,n.value),e,5,[r])};return n.value=t,n.attached=Aw(),n}function Pw(t,e){if(Le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const np=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Nw=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?bw(t,r,o):e==="style"?Iw(t,n,r):Dl(e)?fd(e)||xw(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dw(t,e,r,o))?(Zf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xf(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_t(r))?Zf(t,kn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xf(t,e,r,o))};function Dw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&np(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return np(e)&&_t(n)?!1:e in t}const ms=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Le(e)?n=>Fa(e,n):e};function Ow(t){t.target.composing=!0}function rp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yr=Symbol("_assign");function ip(t,e,n){return e&&(t=t.trim()),n&&(t=Vl(t)),t}const Mt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[yr]=ms(i);const s=r||i.props&&i.props.type==="number";Wr(t,e?"change":"input",o=>{o.target.composing||t[yr](ip(t.value,n,s))}),(n||s)&&Wr(t,"change",()=>{t.value=ip(t.value,n,s)}),e||(Wr(t,"compositionstart",Ow),Wr(t,"compositionend",rp),Wr(t,"change",rp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[yr]=ms(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Vl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Nv={deep:!0,created(t,e,n){t[yr]=ms(n),Wr(t,"change",()=>{const r=t._modelValue,i=Mo(t),s=t.checked,o=t[yr];if(Le(r)){const a=md(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const d=[...r];d.splice(a,1),o(d)}}else if(Is(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(Dv(t,s))})},mounted:sp,beforeUpdate(t,e,n){t[yr]=ms(n),sp(t,e,n)}};function sp(t,{value:e,oldValue:n},r){t._modelValue=e;let i;if(Le(e))i=md(e,r.props.value)>-1;else if(Is(e))i=e.has(r.props.value);else{if(e===n)return;i=Ts(e,Dv(t,!0))}t.checked!==i&&(t.checked=i)}const Sa={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Is(e);Wr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Vl(Mo(o)):Mo(o));t[yr](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,Jo(()=>{t._assigning=!1})}),t[yr]=ms(r)},mounted(t,{value:e}){op(t,e)},beforeUpdate(t,e,n){t[yr]=ms(n)},updated(t,{value:e}){t._assigning||op(t,e)}};function op(t,e){const n=t.multiple,r=Le(e);if(!(n&&!r&&!Is(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],a=Mo(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(d=>String(d)===String(a)):o.selected=md(e,a)>-1}else o.selected=e.has(a);else if(Ts(Mo(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Mo(t){return"_value"in t?t._value:t.value}function Dv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Mw=["ctrl","shift","alt","meta"],Lw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mw.some(n=>t[`${n}Key`]&&!e.includes(n))},Ht=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=Lw[e[o]];if(a&&a(i,e))return}return t(i,...s)})},Vw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Nu=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=ui(i.key);if(e.some(o=>o===s||Vw[o]===s))return t(i)})},$w=Ft({patchProp:Nw},hw);let ap;function Fw(){return ap||(ap=W0($w))}const Uw=(...t)=>{const e=Fw().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Bw(r);if(!i)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,zw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bw(t){return _t(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ov;const Gl=t=>Ov=t,Mv=Symbol();function Du(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yo||(yo={}));function jw(){const t=Eg(!0),e=t.run(()=>ge({}));let n=[],r=[];const i=Ed({install(s){Gl(i),i._a=s,s.provide(Mv,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return this._a?n.push(s):r.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Lv=()=>{};function lp(t,e,n,r=Lv){t.add(e);const i=()=>{t.delete(e)&&r()};return!n&&Ig()&&C_(i),i}function Yi(t,...e){t.forEach(n=>{n(...e)})}const qw=t=>t(),cp=Symbol(),Kc=Symbol();function Ou(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Du(i)&&Du(r)&&t.hasOwnProperty(n)&&!kt(r)&&!gr(r)?t[n]=Ou(i,r):t[n]=r}return t}const Ww=Symbol();function Hw(t){return!Du(t)||!Object.prototype.hasOwnProperty.call(t,Ww)}const{assign:zr}=Object;function Gw(t){return!!(kt(t)&&t.effect)}function Kw(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function d(){a||(n.state.value[t]=i?i():{});const h=K_(n.state.value[t]);return zr(h,s,Object.keys(o||{}).reduce((m,g)=>(m[g]=Ed(Se(()=>{Gl(n);const y=n._s.get(t);return o[g].call(y,y)})),m),{}))}return l=Vv(t,d,e,n,r,!0),l}function Vv(t,e,n={},r,i,s){let o;const a=zr({actions:{}},n),l={deep:!0};let d,h,m=new Set,g=new Set,y;const w=r.state.value[t];!s&&!w&&(r.state.value[t]={});let v;function I(A){let x;d=h=!1,typeof A=="function"?(A(r.state.value[t]),x={type:yo.patchFunction,storeId:t,events:y}):(Ou(r.state.value[t],A),x={type:yo.patchObject,payload:A,storeId:t,events:y});const P=v=Symbol();Jo().then(()=>{v===P&&(d=!0)}),h=!0,Yi(m,x,r.state.value[t])}const C=s?function(){const{state:x}=n,P=x?x():{};this.$patch(O=>{zr(O,P)})}:Lv;function R(){o.stop(),m.clear(),g.clear(),r._s.delete(t)}const V=(A,x="")=>{if(cp in A)return A[Kc]=x,A;const P=function(){Gl(r);const O=Array.from(arguments),_=new Set,T=new Set;function E(J){_.add(J)}function Y(J){T.add(J)}Yi(g,{args:O,name:P[Kc],store:f,after:E,onError:Y});let ae;try{ae=A.apply(this&&this.$id===t?this:f,O)}catch(J){throw Yi(T,J),J}return ae instanceof Promise?ae.then(J=>(Yi(_,J),J)).catch(J=>(Yi(T,J),Promise.reject(J))):(Yi(_,ae),ae)};return P[cp]=!0,P[Kc]=x,P},M={_p:r,$id:t,$onAction:lp.bind(null,g),$patch:I,$reset:C,$subscribe(A,x={}){const P=lp(m,A,x.detached,()=>O()),O=o.run(()=>Bt(()=>r.state.value[t],_=>{(x.flush==="sync"?h:d)&&A({storeId:t,type:yo.direct,events:y},_)},zr({},l,x)));return P},$dispose:R},f=Ko(M);r._s.set(t,f);const N=(r._a&&r._a.runWithContext||qw)(()=>r._e.run(()=>(o=Eg()).run(()=>e({action:V}))));for(const A in N){const x=N[A];if(kt(x)&&!Gw(x)||gr(x))s||(w&&Hw(x)&&(kt(x)?x.value=w[A]:Ou(x,w[A])),r.state.value[t][A]=x);else if(typeof x=="function"){const P=V(x,A);N[A]=P,a.actions[A]=x}}return zr(f,N),zr(nt(f),N),Object.defineProperty(f,"$state",{get:()=>r.state.value[t],set:A=>{I(x=>{zr(x,A)})}}),r._p.forEach(A=>{zr(f,o.run(()=>A({store:f,app:r._a,pinia:r,options:a})))}),w&&s&&n.hydrate&&n.hydrate(f.$state,w),d=!0,h=!0,f}/*! #__NO_SIDE_EFFECTS__ */function Kl(t,e,n){let r;const i=typeof e=="function";r=i?n:e;function s(o,a){const l=i0();return o=o||(l?_n(Mv,null):null),o&&Gl(o),o=Ov,o._s.has(t)||(i?Vv(t,e,r,o):Kw(t,r,o)),o._s.get(t)}return s.$id=t,s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Zi=typeof document<"u";function $v(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$v(t.default)}const st=Object.assign;function Qc(t,e){const n={};for(const r in e){const i=e[r];n[r]=$n(i)?i.map(t):t(i)}return n}const bo=()=>{},$n=Array.isArray;function up(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Fv=/#/g,Jw=/&/g,Yw=/\//g,Xw=/=/g,Zw=/\?/g,Uv=/\+/g,e2=/%5B/g,t2=/%5D/g,zv=/%5E/g,n2=/%60/g,Bv=/%7B/g,r2=/%7C/g,jv=/%7D/g,i2=/%20/g;function Pd(t){return t==null?"":encodeURI(""+t).replace(r2,"|").replace(e2,"[").replace(t2,"]")}function s2(t){return Pd(t).replace(Bv,"{").replace(jv,"}").replace(zv,"^")}function Mu(t){return Pd(t).replace(Uv,"%2B").replace(i2,"+").replace(Fv,"%23").replace(Jw,"%26").replace(n2,"`").replace(Bv,"{").replace(jv,"}").replace(zv,"^")}function o2(t){return Mu(t).replace(Xw,"%3D")}function a2(t){return Pd(t).replace(Fv,"%23").replace(Zw,"%3F")}function l2(t){return a2(t).replace(Yw,"%2F")}function Lo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const c2=/\/$/,u2=t=>t.replace(c2,"");function Jc(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),s=e.slice(l,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=p2(r??e,n),{fullPath:r+s+o,path:r,query:i,hash:Lo(o)}}function d2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function h2(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&gs(e.matched[r],n.matched[i])&&qv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!f2(t[n],e[n]))return!1;return!0}function f2(t,e){return $n(t)?hp(t,e):$n(e)?hp(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function hp(t,e){return $n(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function p2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Lu=function(t){return t.pop="pop",t.push="push",t}({}),Yc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function m2(t){if(!t)if(Zi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u2(t)}const g2=/^[^#]+#/;function v2(t,e){return t.replace(g2,"#")+e}function y2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ql=()=>({left:window.scrollX,top:window.scrollY});function b2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=y2(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fp(t,e){return(history.state?history.state.position-e:-1)+t}const Vu=new Map;function _2(t,e){Vu.set(t,e)}function w2(t){const e=Vu.get(t);return Vu.delete(t),e}function E2(t){return typeof t=="string"||t&&typeof t=="object"}function Wv(t){return typeof t=="string"||typeof t=="symbol"}let xt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Hv=Symbol("");xt.MATCHER_NOT_FOUND+"",xt.NAVIGATION_GUARD_REDIRECT+"",xt.NAVIGATION_ABORTED+"",xt.NAVIGATION_CANCELLED+"",xt.NAVIGATION_DUPLICATED+"";function vs(t,e){return st(new Error,{type:t,[Hv]:!0},e)}function ar(t,e){return t instanceof Error&&Hv in t&&(e==null||!!(t.type&e))}const I2=["params","query","hash"];function T2(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of I2)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function C2(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(Uv," "),s=i.indexOf("="),o=Lo(s<0?i:i.slice(0,s)),a=s<0?null:Lo(i.slice(s+1));if(o in e){let l=e[o];$n(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function pp(t){let e="";for(let n in t){const r=t[n];if(n=o2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($n(r)?r.map(i=>i&&Mu(i)):[r&&Mu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function x2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$n(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const k2=Symbol(""),mp=Symbol(""),Jl=Symbol(""),Nd=Symbol(""),$u=Symbol("");function eo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qr(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const d=g=>{g===!1?l(vs(xt.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):E2(g)?l(vs(xt.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),a())},h=s(()=>t.call(r&&r.instances[i],e,n,d));let m=Promise.resolve(h);t.length<3&&(m=m.then(d)),m.catch(g=>l(g))})}function Xc(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if($v(l)){const d=(l.__vccOpts||l)[e];d&&s.push(qr(d,n,r,o,a,i))}else{let d=l();s.push(()=>d.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const m=Qw(h)?h.default:h;o.mods[a]=h,o.components[a]=m;const g=(m.__vccOpts||m)[e];return g&&qr(g,n,r,o,a,i)()}))}}return s}function S2(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(d=>gs(d,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(d=>gs(d,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let A2=()=>location.protocol+"//"+location.host;function Gv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let o=i.includes(t.slice(s))?t.slice(s).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),dp(a,"")}return dp(n,t)+r+i}function R2(t,e,n,r){let i=[],s=[],o=null;const a=({state:g})=>{const y=Gv(t,location),w=n.value,v=e.value;let I=0;if(g){if(n.value=y,e.value=g,o&&o===w){o=null;return}I=v?g.position-v.position:0}else r(y);i.forEach(C=>{C(n.value,w,{delta:I,type:Lu.pop,direction:I?I>0?Yc.forward:Yc.back:Yc.unknown})})};function l(){o=n.value}function d(g){i.push(g);const y=()=>{const w=i.indexOf(g);w>-1&&i.splice(w,1)};return s.push(y),y}function h(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(st({},g.state,{scroll:Ql()}),"")}}function m(){for(const g of s)g();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:l,listen:d,destroy:m}}function gp(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Ql():null}}function P2(t){const{history:e,location:n}=window,r={value:Gv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,d,h){const m=t.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+l:A2()+t+l;try{e[h?"replaceState":"pushState"](d,"",g),i.value=d}catch(y){console.error(y),n[h?"replace":"assign"](g)}}function o(l,d){s(l,st({},e.state,gp(i.value.back,l,i.value.forward,!0),d,{position:i.value.position}),!0),r.value=l}function a(l,d){const h=st({},i.value,e.state,{forward:l,scroll:Ql()});s(h.current,h,!0),s(l,st({},gp(r.value,l,null),{position:h.position+1},d),!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function N2(t){t=m2(t);const e=P2(t),n=R2(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=st({location:"",base:t,go:r,createHref:v2.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function D2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),N2(t)}let xi=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Ot=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Ot||{});const O2={type:xi.Static,value:""},M2=/[a-zA-Z0-9_]/;function L2(t){if(!t)return[[]];if(t==="/")return[[O2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${d}": ${y}`)}let n=Ot.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,d="",h="";function m(){d&&(n===Ot.Static?s.push({type:xi.Static,value:d}):n===Ot.Param||n===Ot.ParamRegExp||n===Ot.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),s.push({type:xi.Param,value:d,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),d="")}function g(){d+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Ot.ParamRegExp){r=n,n=Ot.EscapeNext;continue}switch(n){case Ot.Static:l==="/"?(d&&m(),o()):l===":"?(m(),n=Ot.Param):g();break;case Ot.EscapeNext:g(),n=r;break;case Ot.Param:l==="("?n=Ot.ParamRegExp:M2.test(l)?g():(m(),n=Ot.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ot.ParamRegExp:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=Ot.ParamRegExpEnd:h+=l;break;case Ot.ParamRegExpEnd:m(),n=Ot.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===Ot.ParamRegExp&&e(`Unfinished custom RegExp for param "${d}"`),m(),o(),i}const vp="[^/]+?",V2={sensitive:!1,strict:!1,start:!0,end:!0};var ln=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(ln||{});const $2=/[.+*?^${}()[\]/\\]/g;function F2(t,e){const n=st({},V2,e),r=[];let i=n.start?"^":"";const s=[];for(const d of t){const h=d.length?[]:[ln.Root];n.strict&&!d.length&&(i+="/");for(let m=0;m<d.length;m++){const g=d[m];let y=ln.Segment+(n.sensitive?ln.BonusCaseSensitive:0);if(g.type===xi.Static)m||(i+="/"),i+=g.value.replace($2,"\\$&"),y+=ln.Static;else if(g.type===xi.Param){const{value:w,repeatable:v,optional:I,regexp:C}=g;s.push({name:w,repeatable:v,optional:I});const R=C||vp;if(R!==vp){y+=ln.BonusCustomRegExp;try{`${R}`}catch(M){throw new Error(`Invalid custom RegExp for param "${w}" (${R}): `+M.message)}}let V=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;m||(V=I&&d.length<2?`(?:/${V})`:"/"+V),I&&(V+="?"),i+=V,y+=ln.Dynamic,I&&(y+=ln.BonusOptional),v&&(y+=ln.BonusRepeatable),R===".*"&&(y+=ln.BonusWildcard)}h.push(y)}r.push(h)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=ln.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(d){const h=d.match(o),m={};if(!h)return null;for(let g=1;g<h.length;g++){const y=h[g]||"",w=s[g-1];m[w.name]=y&&w.repeatable?y.split("/"):y}return m}function l(d){let h="",m=!1;for(const g of t){(!m||!h.endsWith("/"))&&(h+="/"),m=!1;for(const y of g)if(y.type===xi.Static)h+=y.value;else if(y.type===xi.Param){const{value:w,repeatable:v,optional:I}=y,C=w in d?d[w]:"";if($n(C)&&!v)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const R=$n(C)?C.join("/"):C;if(!R)if(I)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):m=!0);else throw new Error(`Missing required param "${w}"`);h+=R}}return h||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function U2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===ln.Static+ln.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===ln.Static+ln.Segment?1:-1:0}function Kv(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=U2(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(yp(r))return 1;if(yp(i))return-1}return i.length-r.length}function yp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const z2={strict:!1,end:!0,sensitive:!1};function B2(t,e,n){const r=F2(L2(t.path),n),i=st(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function j2(t,e){const n=[],r=new Map;e=up(z2,e);function i(m){return r.get(m)}function s(m,g,y){const w=!y,v=_p(m);v.aliasOf=y&&y.record;const I=up(e,m),C=[v];if("alias"in m){const M=typeof m.alias=="string"?[m.alias]:m.alias;for(const f of M)C.push(_p(st({},v,{components:y?y.record.components:v.components,path:f,aliasOf:y?y.record:v})))}let R,V;for(const M of C){const{path:f}=M;if(g&&f[0]!=="/"){const G=g.record.path,N=G[G.length-1]==="/"?"":"/";M.path=g.record.path+(f&&N+f)}if(R=B2(M,g,I),y?y.alias.push(R):(V=V||R,V!==R&&V.alias.push(R),w&&m.name&&!wp(R)&&o(m.name)),Qv(R)&&l(R),v.children){const G=v.children;for(let N=0;N<G.length;N++)s(G[N],R,y&&y.children[N])}y=y||R}return V?()=>{o(V)}:bo}function o(m){if(Wv(m)){const g=r.get(m);g&&(r.delete(m),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(m);g>-1&&(n.splice(g,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function a(){return n}function l(m){const g=H2(m,n);n.splice(g,0,m),m.record.name&&!wp(m)&&r.set(m.record.name,m)}function d(m,g){let y,w={},v,I;if("name"in m&&m.name){if(y=r.get(m.name),!y)throw vs(xt.MATCHER_NOT_FOUND,{location:m});I=y.record.name,w=st(bp(g.params,y.keys.filter(V=>!V.optional).concat(y.parent?y.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),m.params&&bp(m.params,y.keys.map(V=>V.name))),v=y.stringify(w)}else if(m.path!=null)v=m.path,y=n.find(V=>V.re.test(v)),y&&(w=y.parse(v),I=y.record.name);else{if(y=g.name?r.get(g.name):n.find(V=>V.re.test(g.path)),!y)throw vs(xt.MATCHER_NOT_FOUND,{location:m,currentLocation:g});I=y.record.name,w=st({},g.params,m.params),v=y.stringify(w)}const C=[];let R=y;for(;R;)C.unshift(R.record),R=R.parent;return{name:I,path:v,params:w,matched:C,meta:W2(C)}}t.forEach(m=>s(m));function h(){n.length=0,r.clear()}return{addRoute:s,resolve:d,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function bp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _p(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:q2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function q2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function W2(t){return t.reduce((e,n)=>st(e,n.meta),{})}function H2(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Kv(t,e[s])<0?r=s:n=s+1}const i=G2(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function G2(t){let e=t;for(;e=e.parent;)if(Qv(e)&&Kv(t,e)===0)return e}function Qv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ep(t){const e=_n(Jl),n=_n(Nd),r=Se(()=>{const l=be(t.to);return e.resolve(l)}),i=Se(()=>{const{matched:l}=r.value,{length:d}=l,h=l[d-1],m=n.matched;if(!h||!m.length)return-1;const g=m.findIndex(gs.bind(null,h));if(g>-1)return g;const y=Ip(l[d-2]);return d>1&&Ip(h)===y&&m[m.length-1].path!==y?m.findIndex(gs.bind(null,l[d-2])):g}),s=Se(()=>i.value>-1&&X2(n.params,r.value.params)),o=Se(()=>i.value>-1&&i.value===n.matched.length-1&&qv(n.params,r.value.params));function a(l={}){if(Y2(l)){const d=e[be(t.replace)?"replace":"push"](be(t.to)).catch(bo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function K2(t){return t.length===1?t[0]:t}const Q2=nv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ep,setup(t,{slots:e}){const n=Ko(Ep(t)),{options:r}=_n(Jl),i=Se(()=>({[Tp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Tp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&K2(e.default(n));return t.custom?s:Rd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),J2=Q2;function Y2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function X2(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!$n(i)||i.length!==r.length||r.some((s,o)=>s.valueOf()!==i[o].valueOf()))return!1}return!0}function Ip(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tp=(t,e,n)=>t??e??n,Z2=nv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_n($u),i=Se(()=>t.route||r.value),s=_n(mp,0),o=Se(()=>{let d=be(s);const{matched:h}=i.value;let m;for(;(m=h[d])&&!m.components;)d++;return d}),a=Se(()=>i.value.matched[o.value]);fo(mp,Se(()=>o.value+1)),fo(k2,a),fo($u,i);const l=ge();return Bt(()=>[l.value,a.value,t.name],([d,h,m],[g,y,w])=>{h&&(h.instances[m]=d,y&&y!==h&&d&&d===g&&(h.leaveGuards.size||(h.leaveGuards=y.leaveGuards),h.updateGuards.size||(h.updateGuards=y.updateGuards))),d&&h&&(!y||!gs(h,y)||!g)&&(h.enterCallbacks[m]||[]).forEach(v=>v(d))},{flush:"post"}),()=>{const d=i.value,h=t.name,m=a.value,g=m&&m.components[h];if(!g)return Cp(n.default,{Component:g,route:d});const y=m.props[h],w=y?y===!0?d.params:typeof y=="function"?y(d):y:null,I=Rd(g,st({},w,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(m.instances[h]=null)},ref:l}));return Cp(n.default,{Component:I,route:d})||I}}});function Cp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jv=Z2;function eE(t){const e=j2(t.routes,t),n=t.parseQuery||C2,r=t.stringifyQuery||pp,i=t.history,s=eo(),o=eo(),a=eo(),l=W_(Fr);let d=Fr;Zi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Qc.bind(null,K=>""+K),m=Qc.bind(null,l2),g=Qc.bind(null,Lo);function y(K,X){let me,oe;return Wv(K)?(me=e.getRecordMatcher(K),oe=X):oe=K,e.addRoute(oe,me)}function w(K){const X=e.getRecordMatcher(K);X&&e.removeRoute(X)}function v(){return e.getRoutes().map(K=>K.record)}function I(K){return!!e.getRecordMatcher(K)}function C(K,X){if(X=st({},X||l.value),typeof K=="string"){const p=Jc(n,K,X.path),H=e.resolve({path:p.path},X),B=i.createHref(p.fullPath);return st(p,H,{params:g(H.params),hash:Lo(p.hash),redirectedFrom:void 0,href:B})}let me;if(K.path!=null)me=st({},K,{path:Jc(n,K.path,X.path).path});else{const p=st({},K.params);for(const H in p)p[H]==null&&delete p[H];me=st({},K,{params:m(p)}),X.params=m(X.params)}const oe=e.resolve(me,X),_e=K.hash||"";oe.params=h(g(oe.params));const F=d2(r,st({},K,{hash:s2(_e),path:oe.path})),q=i.createHref(F);return st({fullPath:F,hash:_e,query:r===pp?x2(K.query):K.query||{}},oe,{redirectedFrom:void 0,href:q})}function R(K){return typeof K=="string"?Jc(n,K,l.value.path):st({},K)}function V(K,X){if(d!==K)return vs(xt.NAVIGATION_CANCELLED,{from:X,to:K})}function M(K){return N(K)}function f(K){return M(st(R(K),{replace:!0}))}function G(K,X){const me=K.matched[K.matched.length-1];if(me&&me.redirect){const{redirect:oe}=me;let _e=typeof oe=="function"?oe(K,X):oe;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=R(_e):{path:_e},_e.params={}),st({query:K.query,hash:K.hash,params:_e.path!=null?{}:K.params},_e)}}function N(K,X){const me=d=C(K),oe=l.value,_e=K.state,F=K.force,q=K.replace===!0,p=G(me,oe);if(p)return N(st(R(p),{state:typeof p=="object"?st({},_e,p.state):_e,force:F,replace:q}),X||me);const H=me;H.redirectedFrom=X;let B;return!F&&h2(r,oe,me)&&(B=vs(xt.NAVIGATION_DUPLICATED,{to:H,from:oe}),re(oe,oe,!0,!1)),(B?Promise.resolve(B):P(H,oe)).catch(D=>ar(D)?ar(D,xt.NAVIGATION_GUARD_REDIRECT)?D:ye(D):ce(D,H,oe)).then(D=>{if(D){if(ar(D,xt.NAVIGATION_GUARD_REDIRECT))return N(st({replace:q},R(D.to),{state:typeof D.to=="object"?st({},_e,D.to.state):_e,force:F}),X||H)}else D=_(H,oe,!0,q,_e);return O(H,oe,D),D})}function A(K,X){const me=V(K,X);return me?Promise.reject(me):Promise.resolve()}function x(K){const X=we.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(K):K()}function P(K,X){let me;const[oe,_e,F]=S2(K,X);me=Xc(oe.reverse(),"beforeRouteLeave",K,X);for(const p of oe)p.leaveGuards.forEach(H=>{me.push(qr(H,K,X))});const q=A.bind(null,K,X);return me.push(q),ue(me).then(()=>{me=[];for(const p of s.list())me.push(qr(p,K,X));return me.push(q),ue(me)}).then(()=>{me=Xc(_e,"beforeRouteUpdate",K,X);for(const p of _e)p.updateGuards.forEach(H=>{me.push(qr(H,K,X))});return me.push(q),ue(me)}).then(()=>{me=[];for(const p of F)if(p.beforeEnter)if($n(p.beforeEnter))for(const H of p.beforeEnter)me.push(qr(H,K,X));else me.push(qr(p.beforeEnter,K,X));return me.push(q),ue(me)}).then(()=>(K.matched.forEach(p=>p.enterCallbacks={}),me=Xc(F,"beforeRouteEnter",K,X,x),me.push(q),ue(me))).then(()=>{me=[];for(const p of o.list())me.push(qr(p,K,X));return me.push(q),ue(me)}).catch(p=>ar(p,xt.NAVIGATION_CANCELLED)?p:Promise.reject(p))}function O(K,X,me){a.list().forEach(oe=>x(()=>oe(K,X,me)))}function _(K,X,me,oe,_e){const F=V(K,X);if(F)return F;const q=X===Fr,p=Zi?history.state:{};me&&(oe||q?i.replace(K.fullPath,st({scroll:q&&p&&p.scroll},_e)):i.push(K.fullPath,_e)),l.value=K,re(K,X,me,q),ye()}let T;function E(){T||(T=i.listen((K,X,me)=>{if(!te.listening)return;const oe=C(K),_e=G(oe,te.currentRoute.value);if(_e){N(st(_e,{replace:!0,force:!0}),oe).catch(bo);return}d=oe;const F=l.value;Zi&&_2(fp(F.fullPath,me.delta),Ql()),P(oe,F).catch(q=>ar(q,xt.NAVIGATION_ABORTED|xt.NAVIGATION_CANCELLED)?q:ar(q,xt.NAVIGATION_GUARD_REDIRECT)?(N(st(R(q.to),{force:!0}),oe).then(p=>{ar(p,xt.NAVIGATION_ABORTED|xt.NAVIGATION_DUPLICATED)&&!me.delta&&me.type===Lu.pop&&i.go(-1,!1)}).catch(bo),Promise.reject()):(me.delta&&i.go(-me.delta,!1),ce(q,oe,F))).then(q=>{q=q||_(oe,F,!1),q&&(me.delta&&!ar(q,xt.NAVIGATION_CANCELLED)?i.go(-me.delta,!1):me.type===Lu.pop&&ar(q,xt.NAVIGATION_ABORTED|xt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),O(oe,F,q)}).catch(bo)}))}let Y=eo(),ae=eo(),J;function ce(K,X,me){ye(K);const oe=ae.list();return oe.length?oe.forEach(_e=>_e(K,X,me)):console.error(K),Promise.reject(K)}function ie(){return J&&l.value!==Fr?Promise.resolve():new Promise((K,X)=>{Y.add([K,X])})}function ye(K){return J||(J=!K,E(),Y.list().forEach(([X,me])=>K?me(K):X()),Y.reset()),K}function re(K,X,me,oe){const{scrollBehavior:_e}=t;if(!Zi||!_e)return Promise.resolve();const F=!me&&w2(fp(K.fullPath,0))||(oe||!me)&&history.state&&history.state.scroll||null;return Jo().then(()=>_e(K,X,F)).then(q=>q&&b2(q)).catch(q=>ce(q,K,X))}const ee=K=>i.go(K);let Ie;const we=new Set,te={currentRoute:l,listening:!0,addRoute:y,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:v,resolve:C,options:t,push:M,replace:f,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:ie,install(K){K.component("RouterLink",J2),K.component("RouterView",Jv),K.config.globalProperties.$router=te,Object.defineProperty(K.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),Zi&&!Ie&&l.value===Fr&&(Ie=!0,M(i.location).catch(oe=>{}));const X={};for(const oe in Fr)Object.defineProperty(X,oe,{get:()=>l.value[oe],enumerable:!0});K.provide(Jl,te),K.provide(Nd,$g(X)),K.provide($u,l);const me=K.unmount;we.add(K),K.unmount=function(){we.delete(K),we.size<1&&(d=Fr,T&&T(),T=null,l.value=Fr,Ie=!1,J=!1),me()}}};function ue(K){return K.reduce((X,me)=>X.then(()=>x(me)),Promise.resolve())}return te}function Yl(){return _n(Jl)}function Dd(t){return _n(Nd)}const St=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},tE={__name:"App",setup(t){return(e,n)=>(W(),at(be(Jv),null,{default:bt(({Component:r,route:i})=>[pt(vr,{name:"app-view",mode:"out-in"},{default:bt(()=>[(W(),at(av(r),{key:i.fullPath}))]),_:2},1024)]),_:1}))}},nE=St(tE,[["__scopeId","data-v-b9a41e6f"]]),rE=()=>{};var xp={};/**
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
 */const Yv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,h=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|d>>6,y=d&63;l||(y=64,o||(g=64)),r.push(n[h],n[m],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||d==null||m==null)throw new sE;const g=s<<2|a>>4;if(r.push(g),d!==64){const y=a<<4&240|d>>2;if(r.push(y),m!==64){const w=d<<6&192|m;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oE=function(t){const e=Yv(t);return Xv.encodeByteArray(e,!0)},cl=function(t){return oE(t).replace(/\./g,"")},Zv=function(t){try{return Xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lE=()=>aE().__FIREBASE_DEFAULTS__,cE=()=>{if(typeof process>"u"||typeof xp>"u")return;const t=xp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zv(t[1]);return e&&JSON.parse(e)},Xl=()=>{try{return rE()||lE()||cE()||uE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ey=t=>{var e,n;return(n=(e=Xl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},dE=t=>{const e=ey(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ty=()=>{var t;return(t=Xl())==null?void 0:t.config},ny=t=>{var e;return(e=Xl())==null?void 0:e[`_${t}`]};/**
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
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ry(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function fE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),""].join(".")}const _o={};function pE(){const t={prod:[],emulator:[]};for(const e of Object.keys(_o))_o[e]?t.emulator.push(e):t.prod.push(e);return t}function mE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let kp=!1;function iy(t,e){if(typeof window>"u"||typeof document>"u"||!Cs(window.location.host)||_o[t]===e||_o[t]||kp)return;_o[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=pE().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{kp=!0,o()},g}function h(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=mE(r),y=n("text"),w=document.getElementById(y)||document.createElement("span"),v=n("learnmore"),I=document.getElementById(v)||document.createElement("a"),C=n("preprendIcon"),R=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const V=g.element;a(V),h(I,v);const M=d();l(R,C),V.append(R,w,I,M),document.body.appendChild(V)}s?(w.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function vE(){var e;const t=(e=Xl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Od(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _E(){const t=on();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wE(){return!vE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Md(){try{return typeof indexedDB=="object"}catch{return!1}}function Ld(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function sy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const EE="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EE,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Un(i,a,r)}}function IE(t,e){return t.replace(TE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TE=/\{\$([^}]+)}/g;function CE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sp(s)&&Sp(o)){if(!ri(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sp(t){return t!==null&&typeof t=="object"}/**
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
 */function ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xE(t,e){const n=new kE(t,e);return n.subscribe.bind(n)}class kE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zc),i.error===void 0&&(i.error=Zc),i.complete===void 0&&(i.complete=Zc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
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
 */const AE=1e3,RE=2,PE=4*60*60*1e3,NE=.5;function Ap(t,e=AE,n=RE){const r=e*Math.pow(n,t),i=Math.round(NE*r*(Math.random()-.5)*2);return Math.min(PE,r+i)}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class DE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ME(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ti){return this.instances.has(e)}getOptions(e=Ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ti){return this.component?this.component.multipleInstances?e:Ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OE(t){return t===Ti?void 0:t}function ME(t){return t.instantiationMode==="EAGER"}/**
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
 */class LE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Je||(Je={}));const VE={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},$E=Je.INFO,FE={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},UE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=FE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=$E,this._logHandler=UE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...e),this._logHandler(this,Je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...e),this._logHandler(this,Je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...e),this._logHandler(this,Je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...e),this._logHandler(this,Je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...e),this._logHandler(this,Je.ERROR,...e)}}const zE=(t,e)=>e.some(n=>t instanceof n);let Rp,Pp;function BE(){return Rp||(Rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jE(){return Pp||(Pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oy=new WeakMap,Fu=new WeakMap,ay=new WeakMap,eu=new WeakMap,Vd=new WeakMap;function qE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oy.set(n,t)}).catch(()=>{}),Vd.set(e,t),e}function WE(t){if(Fu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fu.set(t,e)}let Uu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ay.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HE(t){Uu=t(Uu)}function GE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tu(this),e,...n);return ay.set(r,e.sort?e.sort():[e]),Yr(r)}:jE().includes(t)?function(...e){return t.apply(tu(this),e),Yr(oy.get(this))}:function(...e){return Yr(t.apply(tu(this),e))}}function KE(t){return typeof t=="function"?GE(t):(t instanceof IDBTransaction&&WE(t),zE(t,BE())?new Proxy(t,Uu):t)}function Yr(t){if(t instanceof IDBRequest)return qE(t);if(eu.has(t))return eu.get(t);const e=KE(t);return e!==t&&(eu.set(t,e),Vd.set(e,t)),e}const tu=t=>Vd.get(t);function ly(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yr(o.result),l.oldVersion,l.newVersion,Yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const QE=["get","getKey","getAll","getAllKeys","count"],JE=["put","add","delete","clear"],nu=new Map;function Np(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nu.get(e))return nu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return nu.set(e,s),s}HE(t=>({...t,get:(e,n,r)=>Np(e,n)||t.get(e,n,r),has:(e,n)=>!!Np(e,n)||t.has(e,n)}));/**
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
 */class YE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zu="@firebase/app",Dp="0.14.9";/**
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
 */const Ir=new Zl("@firebase/app"),ZE="@firebase/app-compat",eI="@firebase/analytics-compat",tI="@firebase/analytics",nI="@firebase/app-check-compat",rI="@firebase/app-check",iI="@firebase/auth",sI="@firebase/auth-compat",oI="@firebase/database",aI="@firebase/data-connect",lI="@firebase/database-compat",cI="@firebase/functions",uI="@firebase/functions-compat",dI="@firebase/installations",hI="@firebase/installations-compat",fI="@firebase/messaging",pI="@firebase/messaging-compat",mI="@firebase/performance",gI="@firebase/performance-compat",vI="@firebase/remote-config",yI="@firebase/remote-config-compat",bI="@firebase/storage",_I="@firebase/storage-compat",wI="@firebase/firestore",EI="@firebase/ai",II="@firebase/firestore-compat",TI="firebase",CI="12.10.0";/**
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
 */const Bu="[DEFAULT]",xI={[zu]:"fire-core",[ZE]:"fire-core-compat",[tI]:"fire-analytics",[eI]:"fire-analytics-compat",[rI]:"fire-app-check",[nI]:"fire-app-check-compat",[iI]:"fire-auth",[sI]:"fire-auth-compat",[oI]:"fire-rtdb",[aI]:"fire-data-connect",[lI]:"fire-rtdb-compat",[cI]:"fire-fn",[uI]:"fire-fn-compat",[dI]:"fire-iid",[hI]:"fire-iid-compat",[fI]:"fire-fcm",[pI]:"fire-fcm-compat",[mI]:"fire-perf",[gI]:"fire-perf-compat",[vI]:"fire-rc",[yI]:"fire-rc-compat",[bI]:"fire-gcs",[_I]:"fire-gcs-compat",[wI]:"fire-fst",[II]:"fire-fst-compat",[EI]:"fire-vertex","fire-js":"fire-js",[TI]:"fire-js-all"};/**
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
 */const ul=new Map,kI=new Map,ju=new Map;function Op(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function er(t){const e=t.name;if(ju.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;ju.set(e,t);for(const n of ul.values())Op(n,t);for(const n of kI.values())Op(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const SI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new zi("app","Firebase",SI);/**
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
 */class AI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=CI;function cy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Bu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Xr.create("bad-app-name",{appName:String(i)});if(n||(n=ty()),!n)throw Xr.create("no-options");const s=ul.get(i);if(s){if(ri(n,s.options)&&ri(r,s.config))return s;throw Xr.create("duplicate-app",{appName:i})}const o=new LE(i);for(const l of ju.values())o.addComponent(l);const a=new AI(n,r,o);return ul.set(i,a),a}function $d(t=Bu){const e=ul.get(t);if(!e&&t===Bu&&ty())return cy();if(!e)throw Xr.create("no-app",{appName:t});return e}function xn(t,e,n){let r=xI[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(o.join(" "));return}er(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const RI="firebase-heartbeat-database",PI=1,Vo="firebase-heartbeat-store";let ru=null;function uy(){return ru||(ru=ly(RI,PI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),ru}async function NI(t){try{const n=(await uy()).transaction(Vo),r=await n.objectStore(Vo).get(dy(t));return await n.done,r}catch(e){if(e instanceof Un)Ir.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function Mp(t,e){try{const r=(await uy()).transaction(Vo,"readwrite");await r.objectStore(Vo).put(e,dy(t)),await r.done}catch(n){if(n instanceof Un)Ir.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function dy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DI=1024,OI=30;class MI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>OI){const o=$I(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lp(),{heartbeatsToSend:r,unsentEntries:i}=LI(this._heartbeatsCache.heartbeats),s=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ir.warn(n),""}}}function Lp(){return new Date().toISOString().substring(0,10)}function LI(t,e=DI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Md()?Ld().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vp(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}function $I(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function FI(t){er(new Fn("platform-logger",e=>new YE(e),"PRIVATE")),er(new Fn("heartbeat",e=>new MI(e),"PRIVATE")),xn(zu,Dp,t),xn(zu,Dp,"esm2020"),xn("fire-js","")}FI("");var UI="firebase",zI="12.10.0";/**
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
 */xn(UI,zI,"app");function hy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BI=hy,fy=new zi("auth","Firebase",hy());/**
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
 */const dl=new Zl("@firebase/auth");function jI(t,...e){dl.logLevel<=Je.WARN&&dl.warn(`Auth (${xs}): ${t}`,...e)}function qa(t,...e){dl.logLevel<=Je.ERROR&&dl.error(`Auth (${xs}): ${t}`,...e)}/**
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
 */function Sn(t,...e){throw Ud(t,...e)}function Dn(t,...e){return Ud(t,...e)}function Fd(t,e,n){const r={...BI(),[e]:n};return new zi("auth","Firebase",r).create(e,{appName:t.name})}function br(t){return Fd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sn(t,"argument-error"),Fd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ud(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fy.create(t,...e)}function $e(t,e,...n){if(!t)throw Ud(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function Tr(t,e){t||pr(e)}/**
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
 */function qu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function WI(){return $p()==="http:"||$p()==="https:"}function $p(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function HI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WI()||Od()||"connection"in navigator)?navigator.onLine:!0}function GI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tr(n>e,"Short delay should be less than long delay!"),this.isMobile=gE()||bE()}get(){return HI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zd(t,e){Tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class py{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JI=new ta(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Rr(t,e,n,r,i={}){return my(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ea({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:l,...s};return yE()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(d.credentials="include"),py.fetch()(await gy(t,t.config.apiHost,n,a),d)})}async function my(t,e,n){t._canInitEmulator=!1;const r={...KI,...e};try{const i=new XI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Aa(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Fd(t,h,d);Sn(t,h)}}catch(i){if(i instanceof Un)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function na(t,e,n,r,i={}){const s=await Rr(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function gy(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?zd(t.config,i):`${t.config.apiScheme}://${i}`;return QI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function YI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),JI.get())})}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dn(t,e,r);return i.customData._tokenResponse=n,i}function Fp(t){return t!==void 0&&t.enterprise!==void 0}class ZI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eT(t,e){return Rr(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
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
 */async function tT(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function hl(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nT(t,e=!1){const n=wt(t),r=await n.getIdToken(e),i=Bd(r);$e(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wo(iu(i.auth_time)),issuedAtTime:wo(iu(i.iat)),expirationTime:wo(iu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function iu(t){return Number(t)*1e3}function Bd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zv(n);return i?JSON.parse(i):(qa("Failed to decode base64 JWT payload"),null)}catch(i){return qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Up(t){const e=Bd(t);return $e(e,"internal-error"),$e(typeof e.exp<"u","internal-error"),$e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&rT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await $o(t,hl(e,{idToken:n}));$e(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?vy(i.providerUserInfo):[],o=oT(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),d=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Wu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function sT(t){const e=wt(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vy(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function aT(t,e){const n=await my(t,{},async()=>{const r=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await gy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(l.credentials="include"),py.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lT(t,e){return Rr(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
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
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$e(e.idToken,"internal-error"),$e(typeof e.idToken<"u","internal-error"),$e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Up(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$e(e.length!==0,"internal-error");const n=Up(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ls;return r&&($e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($e(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($e(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function Ur(t,e){$e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new iT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return $e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nT(this,e)}reload(){return sT(this)}_assign(e){this!==e&&($e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){$e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await $o(this,tT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,d=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:y,providerData:w,stsTokenManager:v}=n;$e(m&&v,e,"internal-error");const I=ls.fromJSON(this.name,v);$e(typeof m=="string",e,"internal-error"),Ur(r,e.name),Ur(i,e.name),$e(typeof g=="boolean",e,"internal-error"),$e(typeof y=="boolean",e,"internal-error"),Ur(s,e.name),Ur(o,e.name),Ur(a,e.name),Ur(l,e.name),Ur(d,e.name),Ur(h,e.name);const C=new Pn({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:I,createdAt:d,lastLoginAt:h});return w&&Array.isArray(w)&&(C.providerData=w.map(R=>({...R}))),l&&(C._redirectEventId=l),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new ls;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$e(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ls;a.updateFromIdToken(r);const l=new Pn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,d),l}}/**
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
 */const zp=new Map;function mr(t){Tr(t instanceof Function,"Expected a class definition");let e=zp.get(t);return e?(Tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zp.set(t,e),e)}/**
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
 */class yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yy.type="NONE";const Bp=yy;/**
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
 */function Wa(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hl(this.auth,{idToken:e}).catch(()=>{});return n?Pn._fromGetAccountInfoResponse(this.auth,n,e):null}return Pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(mr(Bp),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||mr(Bp);const o=Wa(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(o);if(h){let m;if(typeof h=="string"){const g=await hl(e,{idToken:h}).catch(()=>{});if(!g)break;m=await Pn._fromGetAccountInfoResponse(e,g,h)}else m=Pn._fromJSON(e,h);d!==s&&(a=m),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new cs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new cs(s,e,r))}}/**
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
 */function jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(by(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ty(e))return"Blackberry";if(Cy(e))return"Webos";if(_y(e))return"Safari";if((e.includes("chrome/")||wy(e))&&!e.includes("edge/"))return"Chrome";if(Iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function by(t=on()){return/firefox\//i.test(t)}function _y(t=on()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wy(t=on()){return/crios\//i.test(t)}function Ey(t=on()){return/iemobile/i.test(t)}function Iy(t=on()){return/android/i.test(t)}function Ty(t=on()){return/blackberry/i.test(t)}function Cy(t=on()){return/webos/i.test(t)}function jd(t=on()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cT(t=on()){var e;return jd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uT(){return _E()&&document.documentMode===10}function xy(t=on()){return jd(t)||Iy(t)||Cy(t)||Ty(t)||/windows phone/i.test(t)||Ey(t)}/**
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
 */function ky(t,e=[]){let n;switch(t){case"Browser":n=jp(on());break;case"Worker":n=`${jp(on())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class dT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hT(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
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
 */const fT=6;class pT{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??fT,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class mT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qp(this),this.idTokenSubscription=new qp(this),this.beforeStateQueue=new dT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hl(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(br(this));const n=e?wt(e):null;return n&&$e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hT(this),n=new pT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mr(e)||this._popupRedirectResolver;$e(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($e(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function di(t){return wt(t)}class qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=xE(n=>this.observer=n)}get next(){return $e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gT(t){ec=t}function Sy(t){return ec.loadJS(t)}function vT(){return ec.recaptchaEnterpriseScript}function yT(){return ec.gapiScript}function bT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class _T{constructor(){this.enterprise=new wT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class wT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ET="recaptcha-enterprise",Ay="NO_RECAPTCHA";class IT{constructor(e){this.type=ET,this.auth=di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{eT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new ZI(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Fp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Ay)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _T().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Fp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=vT();l.length!==0&&(l+=a),Sy(l).then(()=>{i(a,s,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function Wp(t,e,n,r=!1,i=!1){const s=new IT(t);let o;if(i)o=Ay;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Wp(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function TT(t,e){const n=Bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ri(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function CT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xT(t,e,n){const r=di(t);$e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ry(e),{host:o,port:a}=kT(e),l=a===null?"":`:${a}`,d={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$e(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$e(ri(d,r.config.emulator)&&ri(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Cs(o)?(ry(`${s}//${o}${l}`),iy("Auth",!0)):ST()}function Ry(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kT(t){const e=Ry(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hp(o)}}}function Hp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ST(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function AT(t,e){return Rr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function RT(t,e){return na(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}async function PT(t,e){return Rr(t,"POST","/v1/accounts:sendOobCode",Ar(t,e))}async function NT(t,e){return PT(t,e)}/**
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
 */async function DT(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function OT(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
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
 */class Fo extends qd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hu(e,n,"signInWithPassword",RT);case"emailLink":return DT(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hu(e,r,"signUpPassword",AT);case"emailLink":return OT(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return na(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
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
 */const MT="http://localhost";class Cr extends qd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:MT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ea(n)}return e}}/**
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
 */function LT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VT(t){const e=ro(io(t)).link,n=e?ro(io(e)).deep_link_id:null,r=ro(io(t)).deep_link_id;return(r?ro(io(r)).link:null)||r||n||e||t}class Wd{constructor(e){const n=ro(io(e)),r=n.apiKey??null,i=n.oobCode??null,s=LT(n.mode??null);$e(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=VT(e);try{return new Wd(n)}catch{return null}}}/**
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
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return Fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wd.parseLink(n);return $e(r,"argument-error"),Fo._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ss extends Hd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Eo extends Ss{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return $e("providerId"in n&&"signInMethod"in n,"argument-error"),Cr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return $e(e.idToken||e.accessToken,"argument-error"),Cr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Eo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Eo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Eo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Hr extends Ss{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class Gr extends Ss{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
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
 */class Kr extends Ss{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
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
 */async function $T(t,e){return na(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
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
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=Gp(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gp(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pl extends Un{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pl(e,n,r,i)}}function Py(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,s,e,r):s})}async function FT(t,e,n=!1){const r=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function UT(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(br(r));const i="reauthenticate";try{const s=await $o(t,Py(r,i,e,t),n);$e(s.idToken,r,"internal-error");const o=Bd(s.idToken);$e(o,r,"internal-error");const{sub:a}=o;return $e(t.uid===a,r,"user-mismatch"),Oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
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
 */async function Ny(t,e,n=!1){if(gn(t.app))return Promise.reject(br(t));const r="signIn",i=await Py(t,r,e),s=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zT(t,e){return Ny(di(t),e)}/**
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
 */async function Dy(t){const e=di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BT(t,e,n){if(gn(t.app))return Promise.reject(br(t));const r=di(t),o=await Hu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$T).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Dy(t),l}),a=await Oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function jT(t,e,n){return gn(t.app)?Promise.reject(br(t)):zT(wt(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dy(t),r})}async function Kp(t,e){const n=wt(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await NT(n.auth,i);s!==t.email&&await t.reload()}function qT(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function WT(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function HT(t,e,n,r){return wt(t).onAuthStateChanged(e,n,r)}function GT(t){return wt(t).signOut()}const ml="__sak";/**
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
 */class Oy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ml,"1"),this.storage.removeItem(ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KT=1e3,QT=10;class My extends Oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}My.type="LOCAL";const JT=My;/**
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
 */class Ly extends Oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ly.type="SESSION";const Vy=Ly;/**
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
 */function YT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async d=>d(n.origin,s)),l=await YT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
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
 */function Gd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const d=Gd("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qn(){return window}function ZT(t){Qn().location.href=t}/**
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
 */function $y(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function eC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function nC(){return $y()?self:null}/**
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
 */const Fy="firebaseLocalStorageDb",rC=1,gl="firebaseLocalStorage",Uy="fbase_key";class ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nc(t,e){return t.transaction([gl],e?"readwrite":"readonly").objectStore(gl)}function iC(){const t=indexedDB.deleteDatabase(Fy);return new ra(t).toPromise()}function Gu(){const t=indexedDB.open(Fy,rC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gl,{keyPath:Uy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gl)?e(r):(r.close(),await iC(),e(await Gu()))})})}async function Qp(t,e,n){const r=nc(t,!0).put({[Uy]:e,value:n});return new ra(r).toPromise()}async function sC(t,e){const n=nc(t,!1).get(e),r=await new ra(n).toPromise();return r===void 0?null:r.value}function Jp(t,e){const n=nc(t,!0).delete(e);return new ra(n).toPromise()}const oC=800,aC=3;class zy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(nC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await eC(),!this.activeServiceWorker)return;this.sender=new XT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gu();return await Qp(e,ml,"1"),await Jp(e,ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nc(i,!1).getAll();return new ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zy.type="LOCAL";const lC=zy;new ta(3e4,6e4);/**
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
 */function By(t,e){return e?mr(e):($e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kd extends qd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cC(t){return Ny(t.auth,new Kd(t),t.bypassAuthState)}function uC(t){const{auth:e,user:n}=t;return $e(n,e,"internal-error"),UT(n,new Kd(t),t.bypassAuthState)}async function dC(t){const{auth:e,user:n}=t;return $e(n,e,"internal-error"),FT(n,new Kd(t),t.bypassAuthState)}/**
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
 */class jy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cC;case"linkViaPopup":case"linkViaRedirect":return dC;case"reauthViaPopup":case"reauthViaRedirect":return uC;default:Sn(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hC=new ta(2e3,1e4);async function Yp(t,e,n){if(gn(t.app))return Promise.reject(Dn(t,"operation-not-supported-in-this-environment"));const r=di(t);qI(t,e,Hd);const i=By(r,n);return new ki(r,"signInViaPopup",e,i).executeNotNull()}class ki extends jy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $e(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=Gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hC.get())};e()}}ki.currentPopupAction=null;/**
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
 */const fC="pendingRedirect",Ha=new Map;class pC extends jy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ha.get(this.auth._key());if(!e){try{const r=await mC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ha.set(this.auth._key(),e)}return this.bypassAuthState||Ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mC(t,e){const n=yC(e),r=vC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gC(t,e){Ha.set(t._key(),e)}function vC(t){return mr(t._redirectPersistence)}function yC(t){return Wa(fC,t.config.apiKey,t.name)}async function bC(t,e,n=!1){if(gn(t.app))return Promise.reject(br(t));const r=di(t),i=By(r,e),o=await new pC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _C=10*60*1e3;class wC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qy(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_C&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xp(e))}saveEventToCache(e){this.cachedEventUids.add(Xp(e)),this.lastProcessedEventTime=Date.now()}}function Xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qy(t);default:return!1}}/**
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
 */async function IC(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
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
 */const TC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CC=/^https?/;async function xC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IC(t);for(const n of e)try{if(kC(n))return}catch{}Sn(t,"unauthorized-domain")}function kC(t){const e=qu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CC.test(n))return!1;if(TC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SC=new ta(3e4,6e4);function Zp(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AC(t){return new Promise((e,n)=>{var i,s,o;function r(){Zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zp(),n(Dn(t,"network-request-failed"))},timeout:SC.get()})}if((s=(i=Qn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Qn().gapi)!=null&&o.load)r();else{const a=bT("iframefcb");return Qn()[a]=()=>{gapi.load?r():n(Dn(t,"network-request-failed"))},Sy(`${yT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ga=null,e})}let Ga=null;function RC(t){return Ga=Ga||AC(t),Ga}/**
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
 */const PC=new ta(5e3,15e3),NC="__/auth/iframe",DC="emulator/auth/iframe",OC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LC(t){const e=t.config;$e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zd(e,DC):`https://${t.config.authDomain}/${NC}`,r={apiKey:e.apiKey,appName:t.name,v:xs},i=MC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ea(r).slice(1)}`}async function VC(t){const e=await RC(t),n=Qn().gapi;return $e(n,t,"internal-error"),e.open({where:document.body,url:LC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),a=Qn().setTimeout(()=>{s(o)},PC.get());function l(){Qn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const $C={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FC=500,UC=600,zC="_blank",BC="http://localhost";class em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jC(t,e,n,r=FC,i=UC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...$C,width:r.toString(),height:i.toString(),top:s,left:o},d=on().toLowerCase();n&&(a=wy(d)?zC:n),by(d)&&(e=e||BC,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[y,w])=>`${g}${y}=${w},`,"");if(cT(d)&&a!=="_self")return qC(e||"",a),new em(null);const m=window.open(e||"",a,h);$e(m,t,"popup-blocked");try{m.focus()}catch{}return new em(m)}function qC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WC="__/auth/handler",HC="emulator/auth/handler",GC=encodeURIComponent("fac");async function tm(t,e,n,r,i,s){$e(t.config.authDomain,t,"auth-domain-config-required"),$e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:i};if(e instanceof Hd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Ss){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),d=l?`#${GC}=${encodeURIComponent(l)}`:"";return`${KC(t)}?${ea(a).slice(1)}${d}`}function KC({config:t}){return t.emulator?zd(t,HC):`https://${t.authDomain}/${WC}`}/**
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
 */const su="webStorageSupport";class QC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vy,this._completeRedirectFn=bC,this._overrideRedirectResult=gC}async _openPopup(e,n,r,i){var o;Tr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await tm(e,n,r,qu(),i);return jC(e,s,Gd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tm(e,n,r,qu(),i);return ZT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VC(e),r=new wC(e);return n.register("authEvent",i=>($e(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[su];s!==void 0&&n(!!s),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xy()||_y()||jd()}}const JC=QC;var nm="@firebase/auth",rm="1.12.1";/**
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
 */class YC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZC(t){er(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ky(t)},d=new mT(r,i,s,l);return CT(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),er(new Fn("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new YC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(nm,rm,XC(t)),xn(nm,rm,"esm2020")}/**
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
 */const ex=5*60,tx=ny("authIdTokenMaxAge")||ex;let im=null;const nx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tx)return;const i=n==null?void 0:n.token;im!==i&&(im=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rx(t=$d()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TT(t,{popupRedirectResolver:JC,persistence:[lC,JT,Vy]}),r=ny("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nx(s.toString());WT(n,o,()=>o(n.currentUser)),qT(n,a=>o(a))}}const i=ey("auth");return i&&xT(n,`http://${i}`),n}function ix(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}gT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ix().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZC("Browser");var sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,Wy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,A){function x(){}x.prototype=A.prototype,N.F=A.prototype,N.prototype=new x,N.prototype.constructor=N,N.D=function(P,O,_){for(var T=Array(arguments.length-2),E=2;E<arguments.length;E++)T[E-2]=arguments[E];return A.prototype[O].apply(P,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(N,A,x){x||(x=0);const P=Array(16);if(typeof A=="string")for(var O=0;O<16;++O)P[O]=A.charCodeAt(x++)|A.charCodeAt(x++)<<8|A.charCodeAt(x++)<<16|A.charCodeAt(x++)<<24;else for(O=0;O<16;++O)P[O]=A[x++]|A[x++]<<8|A[x++]<<16|A[x++]<<24;A=N.g[0],x=N.g[1],O=N.g[2];let _=N.g[3],T;T=A+(_^x&(O^_))+P[0]+3614090360&4294967295,A=x+(T<<7&4294967295|T>>>25),T=_+(O^A&(x^O))+P[1]+3905402710&4294967295,_=A+(T<<12&4294967295|T>>>20),T=O+(x^_&(A^x))+P[2]+606105819&4294967295,O=_+(T<<17&4294967295|T>>>15),T=x+(A^O&(_^A))+P[3]+3250441966&4294967295,x=O+(T<<22&4294967295|T>>>10),T=A+(_^x&(O^_))+P[4]+4118548399&4294967295,A=x+(T<<7&4294967295|T>>>25),T=_+(O^A&(x^O))+P[5]+1200080426&4294967295,_=A+(T<<12&4294967295|T>>>20),T=O+(x^_&(A^x))+P[6]+2821735955&4294967295,O=_+(T<<17&4294967295|T>>>15),T=x+(A^O&(_^A))+P[7]+4249261313&4294967295,x=O+(T<<22&4294967295|T>>>10),T=A+(_^x&(O^_))+P[8]+1770035416&4294967295,A=x+(T<<7&4294967295|T>>>25),T=_+(O^A&(x^O))+P[9]+2336552879&4294967295,_=A+(T<<12&4294967295|T>>>20),T=O+(x^_&(A^x))+P[10]+4294925233&4294967295,O=_+(T<<17&4294967295|T>>>15),T=x+(A^O&(_^A))+P[11]+2304563134&4294967295,x=O+(T<<22&4294967295|T>>>10),T=A+(_^x&(O^_))+P[12]+1804603682&4294967295,A=x+(T<<7&4294967295|T>>>25),T=_+(O^A&(x^O))+P[13]+4254626195&4294967295,_=A+(T<<12&4294967295|T>>>20),T=O+(x^_&(A^x))+P[14]+2792965006&4294967295,O=_+(T<<17&4294967295|T>>>15),T=x+(A^O&(_^A))+P[15]+1236535329&4294967295,x=O+(T<<22&4294967295|T>>>10),T=A+(O^_&(x^O))+P[1]+4129170786&4294967295,A=x+(T<<5&4294967295|T>>>27),T=_+(x^O&(A^x))+P[6]+3225465664&4294967295,_=A+(T<<9&4294967295|T>>>23),T=O+(A^x&(_^A))+P[11]+643717713&4294967295,O=_+(T<<14&4294967295|T>>>18),T=x+(_^A&(O^_))+P[0]+3921069994&4294967295,x=O+(T<<20&4294967295|T>>>12),T=A+(O^_&(x^O))+P[5]+3593408605&4294967295,A=x+(T<<5&4294967295|T>>>27),T=_+(x^O&(A^x))+P[10]+38016083&4294967295,_=A+(T<<9&4294967295|T>>>23),T=O+(A^x&(_^A))+P[15]+3634488961&4294967295,O=_+(T<<14&4294967295|T>>>18),T=x+(_^A&(O^_))+P[4]+3889429448&4294967295,x=O+(T<<20&4294967295|T>>>12),T=A+(O^_&(x^O))+P[9]+568446438&4294967295,A=x+(T<<5&4294967295|T>>>27),T=_+(x^O&(A^x))+P[14]+3275163606&4294967295,_=A+(T<<9&4294967295|T>>>23),T=O+(A^x&(_^A))+P[3]+4107603335&4294967295,O=_+(T<<14&4294967295|T>>>18),T=x+(_^A&(O^_))+P[8]+1163531501&4294967295,x=O+(T<<20&4294967295|T>>>12),T=A+(O^_&(x^O))+P[13]+2850285829&4294967295,A=x+(T<<5&4294967295|T>>>27),T=_+(x^O&(A^x))+P[2]+4243563512&4294967295,_=A+(T<<9&4294967295|T>>>23),T=O+(A^x&(_^A))+P[7]+1735328473&4294967295,O=_+(T<<14&4294967295|T>>>18),T=x+(_^A&(O^_))+P[12]+2368359562&4294967295,x=O+(T<<20&4294967295|T>>>12),T=A+(x^O^_)+P[5]+4294588738&4294967295,A=x+(T<<4&4294967295|T>>>28),T=_+(A^x^O)+P[8]+2272392833&4294967295,_=A+(T<<11&4294967295|T>>>21),T=O+(_^A^x)+P[11]+1839030562&4294967295,O=_+(T<<16&4294967295|T>>>16),T=x+(O^_^A)+P[14]+4259657740&4294967295,x=O+(T<<23&4294967295|T>>>9),T=A+(x^O^_)+P[1]+2763975236&4294967295,A=x+(T<<4&4294967295|T>>>28),T=_+(A^x^O)+P[4]+1272893353&4294967295,_=A+(T<<11&4294967295|T>>>21),T=O+(_^A^x)+P[7]+4139469664&4294967295,O=_+(T<<16&4294967295|T>>>16),T=x+(O^_^A)+P[10]+3200236656&4294967295,x=O+(T<<23&4294967295|T>>>9),T=A+(x^O^_)+P[13]+681279174&4294967295,A=x+(T<<4&4294967295|T>>>28),T=_+(A^x^O)+P[0]+3936430074&4294967295,_=A+(T<<11&4294967295|T>>>21),T=O+(_^A^x)+P[3]+3572445317&4294967295,O=_+(T<<16&4294967295|T>>>16),T=x+(O^_^A)+P[6]+76029189&4294967295,x=O+(T<<23&4294967295|T>>>9),T=A+(x^O^_)+P[9]+3654602809&4294967295,A=x+(T<<4&4294967295|T>>>28),T=_+(A^x^O)+P[12]+3873151461&4294967295,_=A+(T<<11&4294967295|T>>>21),T=O+(_^A^x)+P[15]+530742520&4294967295,O=_+(T<<16&4294967295|T>>>16),T=x+(O^_^A)+P[2]+3299628645&4294967295,x=O+(T<<23&4294967295|T>>>9),T=A+(O^(x|~_))+P[0]+4096336452&4294967295,A=x+(T<<6&4294967295|T>>>26),T=_+(x^(A|~O))+P[7]+1126891415&4294967295,_=A+(T<<10&4294967295|T>>>22),T=O+(A^(_|~x))+P[14]+2878612391&4294967295,O=_+(T<<15&4294967295|T>>>17),T=x+(_^(O|~A))+P[5]+4237533241&4294967295,x=O+(T<<21&4294967295|T>>>11),T=A+(O^(x|~_))+P[12]+1700485571&4294967295,A=x+(T<<6&4294967295|T>>>26),T=_+(x^(A|~O))+P[3]+2399980690&4294967295,_=A+(T<<10&4294967295|T>>>22),T=O+(A^(_|~x))+P[10]+4293915773&4294967295,O=_+(T<<15&4294967295|T>>>17),T=x+(_^(O|~A))+P[1]+2240044497&4294967295,x=O+(T<<21&4294967295|T>>>11),T=A+(O^(x|~_))+P[8]+1873313359&4294967295,A=x+(T<<6&4294967295|T>>>26),T=_+(x^(A|~O))+P[15]+4264355552&4294967295,_=A+(T<<10&4294967295|T>>>22),T=O+(A^(_|~x))+P[6]+2734768916&4294967295,O=_+(T<<15&4294967295|T>>>17),T=x+(_^(O|~A))+P[13]+1309151649&4294967295,x=O+(T<<21&4294967295|T>>>11),T=A+(O^(x|~_))+P[4]+4149444226&4294967295,A=x+(T<<6&4294967295|T>>>26),T=_+(x^(A|~O))+P[11]+3174756917&4294967295,_=A+(T<<10&4294967295|T>>>22),T=O+(A^(_|~x))+P[2]+718787259&4294967295,O=_+(T<<15&4294967295|T>>>17),T=x+(_^(O|~A))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+A&4294967295,N.g[1]=N.g[1]+(O+(T<<21&4294967295|T>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+_&4294967295}r.prototype.v=function(N,A){A===void 0&&(A=N.length);const x=A-this.blockSize,P=this.C;let O=this.h,_=0;for(;_<A;){if(O==0)for(;_<=x;)i(this,N,_),_+=this.blockSize;if(typeof N=="string"){for(;_<A;)if(P[O++]=N.charCodeAt(_++),O==this.blockSize){i(this,P),O=0;break}}else for(;_<A;)if(P[O++]=N[_++],O==this.blockSize){i(this,P),O=0;break}}this.h=O,this.o+=A},r.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var A=1;A<N.length-8;++A)N[A]=0;A=this.o*8;for(var x=N.length-8;x<N.length;++x)N[x]=A&255,A/=256;for(this.v(N),N=Array(16),A=0,x=0;x<4;++x)for(let P=0;P<32;P+=8)N[A++]=this.g[x]>>>P&255;return N};function s(N,A){var x=a;return Object.prototype.hasOwnProperty.call(x,N)?x[N]:x[N]=A(N)}function o(N,A){this.h=A;const x=[];let P=!0;for(let O=N.length-1;O>=0;O--){const _=N[O]|0;P&&_==A||(x[O]=_,P=!1)}this.g=x}var a={};function l(N){return-128<=N&&N<128?s(N,function(A){return new o([A|0],A<0?-1:0)}):new o([N|0],N<0?-1:0)}function d(N){if(isNaN(N)||!isFinite(N))return m;if(N<0)return I(d(-N));const A=[];let x=1;for(let P=0;N>=x;P++)A[P]=N/x|0,x*=4294967296;return new o(A,0)}function h(N,A){if(N.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(N.charAt(0)=="-")return I(h(N.substring(1),A));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=d(Math.pow(A,8));let P=m;for(let _=0;_<N.length;_+=8){var O=Math.min(8,N.length-_);const T=parseInt(N.substring(_,_+O),A);O<8?(O=d(Math.pow(A,O)),P=P.j(O).add(d(T))):(P=P.j(x),P=P.add(d(T)))}return P}var m=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(v(this))return-I(this).m();let N=0,A=1;for(let x=0;x<this.g.length;x++){const P=this.i(x);N+=(P>=0?P:4294967296+P)*A,A*=4294967296}return N},t.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(w(this))return"0";if(v(this))return"-"+I(this).toString(N);const A=d(Math.pow(N,6));var x=this;let P="";for(;;){const O=M(x,A).g;x=C(x,O.j(A));let _=((x.g.length>0?x.g[0]:x.h)>>>0).toString(N);if(x=O,w(x))return _+P;for(;_.length<6;)_="0"+_;P=_+P}},t.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function w(N){if(N.h!=0)return!1;for(let A=0;A<N.g.length;A++)if(N.g[A]!=0)return!1;return!0}function v(N){return N.h==-1}t.l=function(N){return N=C(this,N),v(N)?-1:w(N)?0:1};function I(N){const A=N.g.length,x=[];for(let P=0;P<A;P++)x[P]=~N.g[P];return new o(x,~N.h).add(g)}t.abs=function(){return v(this)?I(this):this},t.add=function(N){const A=Math.max(this.g.length,N.g.length),x=[];let P=0;for(let O=0;O<=A;O++){let _=P+(this.i(O)&65535)+(N.i(O)&65535),T=(_>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);P=T>>>16,_&=65535,T&=65535,x[O]=T<<16|_}return new o(x,x[x.length-1]&-2147483648?-1:0)};function C(N,A){return N.add(I(A))}t.j=function(N){if(w(this)||w(N))return m;if(v(this))return v(N)?I(this).j(I(N)):I(I(this).j(N));if(v(N))return I(this.j(I(N)));if(this.l(y)<0&&N.l(y)<0)return d(this.m()*N.m());const A=this.g.length+N.g.length,x=[];for(var P=0;P<2*A;P++)x[P]=0;for(P=0;P<this.g.length;P++)for(let O=0;O<N.g.length;O++){const _=this.i(P)>>>16,T=this.i(P)&65535,E=N.i(O)>>>16,Y=N.i(O)&65535;x[2*P+2*O]+=T*Y,R(x,2*P+2*O),x[2*P+2*O+1]+=_*Y,R(x,2*P+2*O+1),x[2*P+2*O+1]+=T*E,R(x,2*P+2*O+1),x[2*P+2*O+2]+=_*E,R(x,2*P+2*O+2)}for(N=0;N<A;N++)x[N]=x[2*N+1]<<16|x[2*N];for(N=A;N<2*A;N++)x[N]=0;return new o(x,0)};function R(N,A){for(;(N[A]&65535)!=N[A];)N[A+1]+=N[A]>>>16,N[A]&=65535,A++}function V(N,A){this.g=N,this.h=A}function M(N,A){if(w(A))throw Error("division by zero");if(w(N))return new V(m,m);if(v(N))return A=M(I(N),A),new V(I(A.g),I(A.h));if(v(A))return A=M(N,I(A)),new V(I(A.g),A.h);if(N.g.length>30){if(v(N)||v(A))throw Error("slowDivide_ only works with positive integers.");for(var x=g,P=A;P.l(N)<=0;)x=f(x),P=f(P);var O=G(x,1),_=G(P,1);for(P=G(P,2),x=G(x,2);!w(P);){var T=_.add(P);T.l(N)<=0&&(O=O.add(x),_=T),P=G(P,1),x=G(x,1)}return A=C(N,O.j(A)),new V(O,A)}for(O=m;N.l(A)>=0;){for(x=Math.max(1,Math.floor(N.m()/A.m())),P=Math.ceil(Math.log(x)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),_=d(x),T=_.j(A);v(T)||T.l(N)>0;)x-=P,_=d(x),T=_.j(A);w(_)&&(_=g),O=O.add(_),N=C(N,T)}return new V(O,N)}t.B=function(N){return M(this,N).h},t.and=function(N){const A=Math.max(this.g.length,N.g.length),x=[];for(let P=0;P<A;P++)x[P]=this.i(P)&N.i(P);return new o(x,this.h&N.h)},t.or=function(N){const A=Math.max(this.g.length,N.g.length),x=[];for(let P=0;P<A;P++)x[P]=this.i(P)|N.i(P);return new o(x,this.h|N.h)},t.xor=function(N){const A=Math.max(this.g.length,N.g.length),x=[];for(let P=0;P<A;P++)x[P]=this.i(P)^N.i(P);return new o(x,this.h^N.h)};function f(N){const A=N.g.length+1,x=[];for(let P=0;P<A;P++)x[P]=N.i(P)<<1|N.i(P-1)>>>31;return new o(x,N.h)}function G(N,A){const x=A>>5;A%=32;const P=N.g.length-x,O=[];for(let _=0;_<P;_++)O[_]=A>0?N.i(_+x)>>>A|N.i(_+x+1)<<32-A:N.i(_+x);return new o(O,N.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,Zr=o}).apply(typeof sm<"u"?sm:typeof self<"u"?self:typeof window<"u"?window:{});var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hy,so,Gy,Ka,Ku,Ky,Qy,Jy;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ra=="object"&&Ra];for(var b=0;b<c.length;++b){var k=c[b];if(k&&k.Math==Math)return k}throw Error("Cannot find global object")}var r=n(this);function i(c,b){if(b)e:{var k=r;c=c.split(".");for(var $=0;$<c.length-1;$++){var de=c[$];if(!(de in k))break e;k=k[de]}c=c[c.length-1],$=k[c],b=b($),b!=$&&b!=null&&e(k,c,{configurable:!0,writable:!0,value:b})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(b){var k=[],$;for($ in b)Object.prototype.hasOwnProperty.call(b,$)&&k.push([$,b[$]]);return k}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var b=typeof c;return b=="object"&&c!=null||b=="function"}function l(c,b,k){return c.call.apply(c.bind,arguments)}function d(c,b,k){return d=l,d.apply(null,arguments)}function h(c,b){var k=Array.prototype.slice.call(arguments,1);return function(){var $=k.slice();return $.push.apply($,arguments),c.apply(this,$)}}function m(c,b){function k(){}k.prototype=b.prototype,c.Z=b.prototype,c.prototype=new k,c.prototype.constructor=c,c.Ob=function($,de,pe){for(var Ae=Array(arguments.length-2),He=2;He<arguments.length;He++)Ae[He-2]=arguments[He];return b.prototype[de].apply($,Ae)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function y(c){const b=c.length;if(b>0){const k=Array(b);for(let $=0;$<b;$++)k[$]=c[$];return k}return[]}function w(c,b){for(let $=1;$<arguments.length;$++){const de=arguments[$];var k=typeof de;if(k=k!="object"?k:de?Array.isArray(de)?"array":k:"null",k=="array"||k=="object"&&typeof de.length=="number"){k=c.length||0;const pe=de.length||0;c.length=k+pe;for(let Ae=0;Ae<pe;Ae++)c[k+Ae]=de[Ae]}else c.push(de)}}class v{constructor(b,k){this.i=b,this.j=k,this.h=0,this.g=null}get(){let b;return this.h>0?(this.h--,b=this.g,this.g=b.next,b.next=null):b=this.i(),b}}function I(c){o.setTimeout(()=>{throw c},0)}function C(){var c=N;let b=null;return c.g&&(b=c.g,c.g=c.g.next,c.g||(c.h=null),b.next=null),b}class R{constructor(){this.h=this.g=null}add(b,k){const $=V.get();$.set(b,k),this.h?this.h.next=$:this.g=$,this.h=$}}var V=new v(()=>new M,c=>c.reset());class M{constructor(){this.next=this.g=this.h=null}set(b,k){this.h=b,this.g=k,this.next=null}reset(){this.next=this.g=this.h=null}}let f,G=!1,N=new R,A=()=>{const c=Promise.resolve(void 0);f=()=>{c.then(x)}};function x(){for(var c;c=C();){try{c.h.call(c.g)}catch(k){I(k)}var b=V;b.j(c),b.h<100&&(b.h++,c.next=b.g,b.g=c)}G=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,b){this.type=c,this.g=this.target=b,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,b=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const k=()=>{};o.addEventListener("test",k,b),o.removeEventListener("test",k,b)}catch{}return c}();function T(c){return/^[\s\xa0]*$/.test(c)}function E(c,b){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,b)}m(E,O),E.prototype.init=function(c,b){const k=this.type=c.type,$=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=b,b=c.relatedTarget,b||(k=="mouseover"?b=c.fromElement:k=="mouseout"&&(b=c.toElement)),this.relatedTarget=b,$?(this.clientX=$.clientX!==void 0?$.clientX:$.pageX,this.clientY=$.clientY!==void 0?$.clientY:$.pageY,this.screenX=$.screenX||0,this.screenY=$.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&E.Z.h.call(this)},E.prototype.h=function(){E.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Y="closure_listenable_"+(Math.random()*1e6|0),ae=0;function J(c,b,k,$,de){this.listener=c,this.proxy=null,this.src=b,this.type=k,this.capture=!!$,this.ha=de,this.key=++ae,this.da=this.fa=!1}function ce(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ie(c,b,k){for(const $ in c)b.call(k,c[$],$,c)}function ye(c,b){for(const k in c)b.call(void 0,c[k],k,c)}function re(c){const b={};for(const k in c)b[k]=c[k];return b}const ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(c,b){let k,$;for(let de=1;de<arguments.length;de++){$=arguments[de];for(k in $)c[k]=$[k];for(let pe=0;pe<ee.length;pe++)k=ee[pe],Object.prototype.hasOwnProperty.call($,k)&&(c[k]=$[k])}}function we(c){this.src=c,this.g={},this.h=0}we.prototype.add=function(c,b,k,$,de){const pe=c.toString();c=this.g[pe],c||(c=this.g[pe]=[],this.h++);const Ae=ue(c,b,$,de);return Ae>-1?(b=c[Ae],k||(b.fa=!1)):(b=new J(b,this.src,pe,!!$,de),b.fa=k,c.push(b)),b};function te(c,b){const k=b.type;if(k in c.g){var $=c.g[k],de=Array.prototype.indexOf.call($,b,void 0),pe;(pe=de>=0)&&Array.prototype.splice.call($,de,1),pe&&(ce(b),c.g[k].length==0&&(delete c.g[k],c.h--))}}function ue(c,b,k,$){for(let de=0;de<c.length;++de){const pe=c[de];if(!pe.da&&pe.listener==b&&pe.capture==!!k&&pe.ha==$)return de}return-1}var K="closure_lm_"+(Math.random()*1e6|0),X={};function me(c,b,k,$,de){if(Array.isArray(b)){for(let pe=0;pe<b.length;pe++)me(c,b[pe],k,$,de);return null}return k=L(k),c&&c[Y]?c.J(b,k,a($)?!!$.capture:!1,de):oe(c,b,k,!1,$,de)}function oe(c,b,k,$,de,pe){if(!b)throw Error("Invalid event type");const Ae=a(de)?!!de.capture:!!de;let He=B(c);if(He||(c[K]=He=new we(c)),k=He.add(b,k,$,Ae,pe),k.proxy)return k;if($=_e(),k.proxy=$,$.src=c,$.listener=k,c.addEventListener)_||(de=Ae),de===void 0&&(de=!1),c.addEventListener(b.toString(),$,de);else if(c.attachEvent)c.attachEvent(p(b.toString()),$);else if(c.addListener&&c.removeListener)c.addListener($);else throw Error("addEventListener and attachEvent are unavailable.");return k}function _e(){function c(k){return b.call(c.src,c.listener,k)}const b=H;return c}function F(c,b,k,$,de){if(Array.isArray(b))for(var pe=0;pe<b.length;pe++)F(c,b[pe],k,$,de);else $=a($)?!!$.capture:!!$,k=L(k),c&&c[Y]?(c=c.i,pe=String(b).toString(),pe in c.g&&(b=c.g[pe],k=ue(b,k,$,de),k>-1&&(ce(b[k]),Array.prototype.splice.call(b,k,1),b.length==0&&(delete c.g[pe],c.h--)))):c&&(c=B(c))&&(b=c.g[b.toString()],c=-1,b&&(c=ue(b,k,$,de)),(k=c>-1?b[c]:null)&&q(k))}function q(c){if(typeof c!="number"&&c&&!c.da){var b=c.src;if(b&&b[Y])te(b.i,c);else{var k=c.type,$=c.proxy;b.removeEventListener?b.removeEventListener(k,$,c.capture):b.detachEvent?b.detachEvent(p(k),$):b.addListener&&b.removeListener&&b.removeListener($),(k=B(b))?(te(k,c),k.h==0&&(k.src=null,b[K]=null)):ce(c)}}}function p(c){return c in X?X[c]:X[c]="on"+c}function H(c,b){if(c.da)c=!0;else{b=new E(b,this);const k=c.listener,$=c.ha||c.src;c.fa&&q(c),c=k.call($,b)}return c}function B(c){return c=c[K],c instanceof we?c:null}var D="__closure_events_fn_"+(Math.random()*1e9>>>0);function L(c){return typeof c=="function"?c:(c[D]||(c[D]=function(b){return c.handleEvent(b)}),c[D])}function z(){P.call(this),this.i=new we(this),this.M=this,this.G=null}m(z,P),z.prototype[Y]=!0,z.prototype.removeEventListener=function(c,b,k,$){F(this,c,b,k,$)};function U(c,b){var k,$=c.G;if($)for(k=[];$;$=$.G)k.push($);if(c=c.M,$=b.type||b,typeof b=="string")b=new O(b,c);else if(b instanceof O)b.target=b.target||c;else{var de=b;b=new O($,c),Ie(b,de)}de=!0;let pe,Ae;if(k)for(Ae=k.length-1;Ae>=0;Ae--)pe=b.g=k[Ae],de=S(pe,$,!0,b)&&de;if(pe=b.g=c,de=S(pe,$,!0,b)&&de,de=S(pe,$,!1,b)&&de,k)for(Ae=0;Ae<k.length;Ae++)pe=b.g=k[Ae],de=S(pe,$,!1,b)&&de}z.prototype.N=function(){if(z.Z.N.call(this),this.i){var c=this.i;for(const b in c.g){const k=c.g[b];for(let $=0;$<k.length;$++)ce(k[$]);delete c.g[b],c.h--}}this.G=null},z.prototype.J=function(c,b,k,$){return this.i.add(String(c),b,!1,k,$)},z.prototype.K=function(c,b,k,$){return this.i.add(String(c),b,!0,k,$)};function S(c,b,k,$){if(b=c.i.g[String(b)],!b)return!0;b=b.concat();let de=!0;for(let pe=0;pe<b.length;++pe){const Ae=b[pe];if(Ae&&!Ae.da&&Ae.capture==k){const He=Ae.listener,Dt=Ae.ha||Ae.src;Ae.fa&&te(c.i,Ae),de=He.call(Dt,$)!==!1&&de}}return de&&!$.defaultPrevented}function j(c,b){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=d(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(b)>2147483647?-1:o.setTimeout(c,b||0)}function ne(c){c.g=j(()=>{c.g=null,c.i&&(c.i=!1,ne(c))},c.l);const b=c.h;c.h=null,c.m.apply(null,b)}class le extends P{constructor(b,k){super(),this.m=b,this.l=k,this.h=null,this.i=!1,this.g=null}j(b){this.h=arguments,this.g?this.i=!0:ne(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fe(c){P.call(this),this.h=c,this.g={}}m(fe,P);var Te=[];function Pe(c){ie(c.g,function(b,k){this.g.hasOwnProperty(k)&&q(b)},c),c.g={}}fe.prototype.N=function(){fe.Z.N.call(this),Pe(this)},fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var he=o.JSON.stringify,je=o.JSON.parse,rt=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Ke(){}function yt(){}var Ge={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Jt(){O.call(this,"d")}m(Jt,O);function tt(){O.call(this,"c")}m(tt,O);var Ze={},It=null;function Ce(){return It=It||new z}Ze.Ia="serverreachability";function se(c){O.call(this,Ze.Ia,c)}m(se,O);function Qe(c){const b=Ce();U(b,new se(b))}Ze.STAT_EVENT="statevent";function At(c,b){O.call(this,Ze.STAT_EVENT,c),this.stat=b}m(At,O);function ke(c){const b=Ce();U(b,new At(b,c))}Ze.Ja="timingevent";function Tt(c,b){O.call(this,Ze.Ja,c),this.size=b}m(Tt,O);function rr(c,b){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},b)}function Pr(){this.g=!0}Pr.prototype.ua=function(){this.g=!1};function ua(c,b,k,$,de,pe){c.info(function(){if(c.g)if(pe){var Ae="",He=pe.split("&");for(let ut=0;ut<He.length;ut++){var Dt=He[ut].split("=");if(Dt.length>1){const Ut=Dt[0];Dt=Dt[1];const Bn=Ut.split("_");Ae=Bn.length>=2&&Bn[1]=="type"?Ae+(Ut+"="+Dt+"&"):Ae+(Ut+"=redacted&")}}}else Ae=null;else Ae=pe;return"XMLHTTP REQ ("+$+") [attempt "+de+"]: "+b+`
`+k+`
`+Ae})}function da(c,b,k,$,de,pe,Ae){c.info(function(){return"XMLHTTP RESP ("+$+") [ attempt "+de+"]: "+b+`
`+k+`
`+pe+" "+Ae})}function ir(c,b,k,$){c.info(function(){return"XMLHTTP TEXT ("+b+"): "+fa(c,k)+($?" "+$:"")})}function ha(c,b){c.info(function(){return"TIMEOUT: "+b})}Pr.prototype.info=function(){};function fa(c,b){if(!c.g)return b;if(!b)return null;try{const pe=JSON.parse(b);if(pe){for(c=0;c<pe.length;c++)if(Array.isArray(pe[c])){var k=pe[c];if(!(k.length<2)){var $=k[1];if(Array.isArray($)&&!($.length<1)){var de=$[0];if(de!="noop"&&de!="stop"&&de!="close")for(let Ae=1;Ae<$.length;Ae++)$[Ae]=""}}}}return he(pe)}catch{return b}}var pi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ms={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ls;function Wi(){}m(Wi,Ke),Wi.prototype.g=function(){return new XMLHttpRequest},Ls=new Wi;function Nr(c){return encodeURIComponent(String(c))}function pa(c){var b=1;c=c.split(":");const k=[];for(;b>0&&c.length;)k.push(c.shift()),b--;return c.length&&k.push(c.join(":")),k}function An(c,b,k,$){this.j=c,this.i=b,this.l=k,this.S=$||1,this.V=new fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vs}function Vs(){this.i=null,this.g="",this.h=!1}var $s={},Hi={};function Gi(c,b,k){c.M=1,c.A=ga(zn(b)),c.u=k,c.R=!0,Fs(c,null)}function Fs(c,b){c.F=Date.now(),ma(c),c.B=zn(c.A);var k=c.B,$=c.S;Array.isArray($)||($=[String($)]),Jh(k.i,"t",$),c.C=0,k=c.j.L,c.h=new Vs,c.g=mf(c.j,k?b:null,!c.u),c.P>0&&(c.O=new le(d(c.Y,c,c.g),c.P)),b=c.V,k=c.g,$=c.ba;var de="readystatechange";Array.isArray(de)||(de&&(Te[0]=de.toString()),de=Te);for(let pe=0;pe<de.length;pe++){const Ae=me(k,de[pe],$||b.handleEvent,!1,b.h||b);if(!Ae)break;b.g[Ae.key]=Ae}b=c.J?re(c.J):{},c.u?(c.v||(c.v="POST"),b["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,b)):(c.v="GET",c.g.ea(c.B,c.v,null,b)),Qe(),ua(c.i,c.v,c.B,c.l,c.S,c.u)}An.prototype.ba=function(c){c=c.target;const b=this.O;b&&Mr(c)==3?b.j():this.Y(c)},An.prototype.Y=function(c){try{if(c==this.g)e:{const He=Mr(this.g),Dt=this.g.ya(),ut=this.g.ca();if(!(He<3)&&(He!=3||this.g&&(this.h.h||this.g.la()||rf(this.g)))){this.K||He!=4||Dt==7||(Dt==8||ut<=0?Qe(3):Qe(2)),xc(this);var b=this.g.ca();this.X=b;var k=Z(this);if(this.o=b==200,da(this.i,this.v,this.B,this.l,this.S,He,b),this.o){if(this.U&&!this.L){t:{if(this.g){var $,de=this.g;if(($=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T($)){var pe=$;break t}}pe=null}if(c=pe)ir(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,kc(this,c);else{this.o=!1,this.m=3,ke(12),mi(this),Us(this);break e}}if(this.R){c=!0;let Ut;for(;!this.K&&this.C<k.length;)if(Ut=Cc(this,k),Ut==Hi){He==4&&(this.m=4,ke(14),c=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==$s){this.m=4,ke(15),ir(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else ir(this.i,this.l,Ut,null),kc(this,Ut);if(jt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||k.length!=0||this.h.h||(this.m=1,ke(16),c=!1),this.o=this.o&&c,!c)ir(this.i,this.l,k,"[Invalid Chunked Response]"),mi(this),Us(this);else if(k.length>0&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.aa&&!Ae.P&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Mc(Ae),Ae.P=!0,ke(11))}}else ir(this.i,this.l,k,null),kc(this,k);He==4&&mi(this),this.o&&!this.K&&(He==4?df(this.j,this):(this.o=!1,ma(this)))}else d_(this.g),b==400&&k.indexOf("Unknown SID")>0?(this.m=3,ke(12)):(this.m=0,ke(13)),mi(this),Us(this)}}}catch{}finally{}};function Z(c){if(!jt(c))return c.g.la();const b=rf(c.g);if(b==="")return"";let k="";const $=b.length,de=Mr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return mi(c),Us(c),"";c.h.i=new o.TextDecoder}for(let pe=0;pe<$;pe++)c.h.h=!0,k+=c.h.i.decode(b[pe],{stream:!(de&&pe==$-1)});return b.length=0,c.h.g+=k,c.C=0,c.h.g}function jt(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Cc(c,b){var k=c.C,$=b.indexOf(`
`,k);return $==-1?Hi:(k=Number(b.substring(k,$)),isNaN(k)?$s:($+=1,$+k>b.length?Hi:(b=b.slice($,$+k),c.C=$+k,b)))}An.prototype.cancel=function(){this.K=!0,mi(this)};function ma(c){c.T=Date.now()+c.H,Fh(c,c.H)}function Fh(c,b){if(c.D!=null)throw Error("WatchDog timer not null");c.D=rr(d(c.aa,c),b)}function xc(c){c.D&&(o.clearTimeout(c.D),c.D=null)}An.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ha(this.i,this.B),this.M!=2&&(Qe(),ke(17)),mi(this),this.m=2,Us(this)):Fh(this,this.T-c)};function Us(c){c.j.I==0||c.K||df(c.j,c)}function mi(c){xc(c);var b=c.O;b&&typeof b.dispose=="function"&&b.dispose(),c.O=null,Pe(c.V),c.g&&(b=c.g,c.g=null,b.abort(),b.dispose())}function kc(c,b){try{var k=c.j;if(k.I!=0&&(k.g==c||Sc(k.h,c))){if(!c.L&&Sc(k.h,c)&&k.I==3){try{var $=k.Ba.g.parse(b)}catch{$=null}if(Array.isArray($)&&$.length==3){var de=$;if(de[0]==0){e:if(!k.v){if(k.g)if(k.g.F+3e3<c.F)wa(k),ba(k);else break e;Oc(k),ke(18)}}else k.xa=de[1],0<k.xa-k.K&&de[2]<37500&&k.F&&k.A==0&&!k.C&&(k.C=rr(d(k.Va,k),6e3));Bh(k.h)<=1&&k.ta&&(k.ta=void 0)}else vi(k,11)}else if((c.L||k.g==c)&&wa(k),!T(b))for(de=k.Ba.g.parse(b),b=0;b<de.length;b++){let ut=de[b];const Ut=ut[0];if(!(Ut<=k.K))if(k.K=Ut,ut=ut[1],k.I==2)if(ut[0]=="c"){k.M=ut[1],k.ba=ut[2];const Bn=ut[3];Bn!=null&&(k.ka=Bn,k.j.info("VER="+k.ka));const yi=ut[4];yi!=null&&(k.za=yi,k.j.info("SVER="+k.za));const Lr=ut[5];Lr!=null&&typeof Lr=="number"&&Lr>0&&($=1.5*Lr,k.O=$,k.j.info("backChannelRequestTimeoutMs_="+$)),$=k;const Vr=c.g;if(Vr){const Ia=Vr.g?Vr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var pe=$.h;pe.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(pe.j=pe.l,pe.g=new Set,pe.h&&(Ac(pe,pe.h),pe.h=null))}if($.G){const Lc=Vr.g?Vr.g.getResponseHeader("X-HTTP-Session-Id"):null;Lc&&($.wa=Lc,mt($.J,$.G,Lc))}}k.I=3,k.l&&k.l.ra(),k.aa&&(k.T=Date.now()-c.F,k.j.info("Handshake RTT: "+k.T+"ms")),$=k;var Ae=c;if($.na=pf($,$.L?$.ba:null,$.W),Ae.L){jh($.h,Ae);var He=Ae,Dt=$.O;Dt&&(He.H=Dt),He.D&&(xc(He),ma(He)),$.g=Ae}else cf($);k.i.length>0&&_a(k)}else ut[0]!="stop"&&ut[0]!="close"||vi(k,7);else k.I==3&&(ut[0]=="stop"||ut[0]=="close"?ut[0]=="stop"?vi(k,7):Dc(k):ut[0]!="noop"&&k.l&&k.l.qa(ut),k.A=0)}}Qe(4)}catch{}}var Xb=class{constructor(c,b){this.g=c,this.map=b}};function Uh(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Bh(c){return c.h?1:c.g?c.g.size:0}function Sc(c,b){return c.h?c.h==b:c.g?c.g.has(b):!1}function Ac(c,b){c.g?c.g.add(b):c.h=b}function jh(c,b){c.h&&c.h==b?c.h=null:c.g&&c.g.has(b)&&c.g.delete(b)}Uh.prototype.cancel=function(){if(this.i=qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function qh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let b=c.i;for(const k of c.g.values())b=b.concat(k.G);return b}return y(c.i)}var Wh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zb(c,b){if(c){c=c.split("&");for(let k=0;k<c.length;k++){const $=c[k].indexOf("=");let de,pe=null;$>=0?(de=c[k].substring(0,$),pe=c[k].substring($+1)):de=c[k],b(de,pe?decodeURIComponent(pe.replace(/\+/g," ")):"")}}}function Dr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let b;c instanceof Dr?(this.l=c.l,zs(this,c.j),this.o=c.o,this.g=c.g,Bs(this,c.u),this.h=c.h,Rc(this,Yh(c.i)),this.m=c.m):c&&(b=String(c).match(Wh))?(this.l=!1,zs(this,b[1]||"",!0),this.o=js(b[2]||""),this.g=js(b[3]||"",!0),Bs(this,b[4]),this.h=js(b[5]||"",!0),Rc(this,b[6]||"",!0),this.m=js(b[7]||"")):(this.l=!1,this.i=new Ws(null,this.l))}Dr.prototype.toString=function(){const c=[];var b=this.j;b&&c.push(qs(b,Hh,!0),":");var k=this.g;return(k||b=="file")&&(c.push("//"),(b=this.o)&&c.push(qs(b,Hh,!0),"@"),c.push(Nr(k).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),k=this.u,k!=null&&c.push(":",String(k))),(k=this.h)&&(this.g&&k.charAt(0)!="/"&&c.push("/"),c.push(qs(k,k.charAt(0)=="/"?n_:t_,!0))),(k=this.i.toString())&&c.push("?",k),(k=this.m)&&c.push("#",qs(k,i_)),c.join("")},Dr.prototype.resolve=function(c){const b=zn(this);let k=!!c.j;k?zs(b,c.j):k=!!c.o,k?b.o=c.o:k=!!c.g,k?b.g=c.g:k=c.u!=null;var $=c.h;if(k)Bs(b,c.u);else if(k=!!c.h){if($.charAt(0)!="/")if(this.g&&!this.h)$="/"+$;else{var de=b.h.lastIndexOf("/");de!=-1&&($=b.h.slice(0,de+1)+$)}if(de=$,de==".."||de==".")$="";else if(de.indexOf("./")!=-1||de.indexOf("/.")!=-1){$=de.lastIndexOf("/",0)==0,de=de.split("/");const pe=[];for(let Ae=0;Ae<de.length;){const He=de[Ae++];He=="."?$&&Ae==de.length&&pe.push(""):He==".."?((pe.length>1||pe.length==1&&pe[0]!="")&&pe.pop(),$&&Ae==de.length&&pe.push("")):(pe.push(He),$=!0)}$=pe.join("/")}else $=de}return k?b.h=$:k=c.i.toString()!=="",k?Rc(b,Yh(c.i)):k=!!c.m,k&&(b.m=c.m),b};function zn(c){return new Dr(c)}function zs(c,b,k){c.j=k?js(b,!0):b,c.j&&(c.j=c.j.replace(/:$/,""))}function Bs(c,b){if(b){if(b=Number(b),isNaN(b)||b<0)throw Error("Bad port number "+b);c.u=b}else c.u=null}function Rc(c,b,k){b instanceof Ws?(c.i=b,s_(c.i,c.l)):(k||(b=qs(b,r_)),c.i=new Ws(b,c.l))}function mt(c,b,k){c.i.set(b,k)}function ga(c){return mt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function js(c,b){return c?b?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function qs(c,b,k){return typeof c=="string"?(c=encodeURI(c).replace(b,e_),k&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function e_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Hh=/[#\/\?@]/g,t_=/[#\?:]/g,n_=/[#\?]/g,r_=/[#\?@]/g,i_=/#/g;function Ws(c,b){this.h=this.g=null,this.i=c||null,this.j=!!b}function gi(c){c.g||(c.g=new Map,c.h=0,c.i&&Zb(c.i,function(b,k){c.add(decodeURIComponent(b.replace(/\+/g," ")),k)}))}t=Ws.prototype,t.add=function(c,b){gi(this),this.i=null,c=Ki(this,c);let k=this.g.get(c);return k||this.g.set(c,k=[]),k.push(b),this.h+=1,this};function Gh(c,b){gi(c),b=Ki(c,b),c.g.has(b)&&(c.i=null,c.h-=c.g.get(b).length,c.g.delete(b))}function Kh(c,b){return gi(c),b=Ki(c,b),c.g.has(b)}t.forEach=function(c,b){gi(this),this.g.forEach(function(k,$){k.forEach(function(de){c.call(b,de,$,this)},this)},this)};function Qh(c,b){gi(c);let k=[];if(typeof b=="string")Kh(c,b)&&(k=k.concat(c.g.get(Ki(c,b))));else for(c=Array.from(c.g.values()),b=0;b<c.length;b++)k=k.concat(c[b]);return k}t.set=function(c,b){return gi(this),this.i=null,c=Ki(this,c),Kh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[b]),this.h+=1,this},t.get=function(c,b){return c?(c=Qh(this,c),c.length>0?String(c[0]):b):b};function Jh(c,b,k){Gh(c,b),k.length>0&&(c.i=null,c.g.set(Ki(c,b),y(k)),c.h+=k.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],b=Array.from(this.g.keys());for(let $=0;$<b.length;$++){var k=b[$];const de=Nr(k);k=Qh(this,k);for(let pe=0;pe<k.length;pe++){let Ae=de;k[pe]!==""&&(Ae+="="+Nr(k[pe])),c.push(Ae)}}return this.i=c.join("&")};function Yh(c){const b=new Ws;return b.i=c.i,c.g&&(b.g=new Map(c.g),b.h=c.h),b}function Ki(c,b){return b=String(b),c.j&&(b=b.toLowerCase()),b}function s_(c,b){b&&!c.j&&(gi(c),c.i=null,c.g.forEach(function(k,$){const de=$.toLowerCase();$!=de&&(Gh(this,$),Jh(this,de,k))},c)),c.j=b}function o_(c,b){const k=new Pr;if(o.Image){const $=new Image;$.onload=h(Or,k,"TestLoadImage: loaded",!0,b,$),$.onerror=h(Or,k,"TestLoadImage: error",!1,b,$),$.onabort=h(Or,k,"TestLoadImage: abort",!1,b,$),$.ontimeout=h(Or,k,"TestLoadImage: timeout",!1,b,$),o.setTimeout(function(){$.ontimeout&&$.ontimeout()},1e4),$.src=c}else b(!1)}function a_(c,b){const k=new Pr,$=new AbortController,de=setTimeout(()=>{$.abort(),Or(k,"TestPingServer: timeout",!1,b)},1e4);fetch(c,{signal:$.signal}).then(pe=>{clearTimeout(de),pe.ok?Or(k,"TestPingServer: ok",!0,b):Or(k,"TestPingServer: server error",!1,b)}).catch(()=>{clearTimeout(de),Or(k,"TestPingServer: error",!1,b)})}function Or(c,b,k,$,de){try{de&&(de.onload=null,de.onerror=null,de.onabort=null,de.ontimeout=null),$(k)}catch{}}function l_(){this.g=new rt}function Pc(c){this.i=c.Sb||null,this.h=c.ab||!1}m(Pc,Ke),Pc.prototype.g=function(){return new va(this.i,this.h)};function va(c,b){z.call(this),this.H=c,this.o=b,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(va,z),t=va.prototype,t.open=function(c,b){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=b,this.readyState=1,Gs(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const b={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(b.body=c),(this.H||o).fetch(new Request(this.D,b)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var b=c.value?c.value:new Uint8Array(0);(b=this.B.decode(b,{stream:!c.done}))&&(this.response=this.responseText+=b)}c.done?Hs(this):Gs(this),this.readyState==3&&Xh(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Hs(this))},t.Na=function(c){this.g&&(this.response=c,Hs(this))},t.ga=function(){this.g&&Hs(this)};function Hs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Gs(c)}t.setRequestHeader=function(c,b){this.A.append(c,b)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],b=this.h.entries();for(var k=b.next();!k.done;)k=k.value,c.push(k[0]+": "+k[1]),k=b.next();return c.join(`\r
`)};function Gs(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Zh(c){let b="";return ie(c,function(k,$){b+=$,b+=":",b+=k,b+=`\r
`}),b}function Nc(c,b,k){e:{for($ in k){var $=!1;break e}$=!0}$||(k=Zh(k),typeof c=="string"?k!=null&&Nr(k):mt(c,b,k))}function Ct(c){z.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ct,z);var c_=/^https?$/i,u_=["POST","PUT"];t=Ct.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,b,k,$){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);b=b?b.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ls.g(),this.g.onreadystatechange=g(d(this.Ca,this));try{this.B=!0,this.g.open(b,String(c),!0),this.B=!1}catch(pe){ef(this,pe);return}if(c=k||"",k=new Map(this.headers),$)if(Object.getPrototypeOf($)===Object.prototype)for(var de in $)k.set(de,$[de]);else if(typeof $.keys=="function"&&typeof $.get=="function")for(const pe of $.keys())k.set(pe,$.get(pe));else throw Error("Unknown input type for opt_headers: "+String($));$=Array.from(k.keys()).find(pe=>pe.toLowerCase()=="content-type"),de=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(u_,b,void 0)>=0)||$||de||k.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[pe,Ae]of k)this.g.setRequestHeader(pe,Ae);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(pe){ef(this,pe)}};function ef(c,b){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=b,c.o=5,tf(c),ya(c)}function tf(c){c.A||(c.A=!0,U(c,"complete"),U(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,U(this,"complete"),U(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),Ct.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?nf(this):this.Xa())},t.Xa=function(){nf(this)};function nf(c){if(c.h&&typeof s<"u"){if(c.v&&Mr(c)==4)setTimeout(c.Ca.bind(c),0);else if(U(c,"readystatechange"),Mr(c)==4){c.h=!1;try{const pe=c.ca();e:switch(pe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var b=!0;break e;default:b=!1}var k;if(!(k=b)){var $;if($=pe===0){let Ae=String(c.D).match(Wh)[1]||null;!Ae&&o.self&&o.self.location&&(Ae=o.self.location.protocol.slice(0,-1)),$=!c_.test(Ae?Ae.toLowerCase():"")}k=$}if(k)U(c,"complete"),U(c,"success");else{c.o=6;try{var de=Mr(c)>2?c.g.statusText:""}catch{de=""}c.l=de+" ["+c.ca()+"]",tf(c)}}finally{ya(c)}}}}function ya(c,b){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const k=c.g;c.g=null,b||U(c,"ready");try{k.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Mr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Mr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var b=this.g.responseText;return c&&b.indexOf(c)==0&&(b=b.substring(c.length)),je(b)}};function rf(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function d_(c){const b={};c=(c.g&&Mr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let $=0;$<c.length;$++){if(T(c[$]))continue;var k=pa(c[$]);const de=k[0];if(k=k[1],typeof k!="string")continue;k=k.trim();const pe=b[de]||[];b[de]=pe,pe.push(k)}ye(b,function($){return $.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(c,b,k){return k&&k.internalChannelParams&&k.internalChannelParams[c]||b}function sf(c){this.za=0,this.i=[],this.j=new Pr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ks("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ks("baseRetryDelayMs",5e3,c),this.Za=Ks("retryDelaySeedMs",1e4,c),this.Ta=Ks("forwardChannelMaxRetries",2,c),this.va=Ks("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Uh(c&&c.concurrentRequestLimit),this.Ba=new l_,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=sf.prototype,t.ka=8,t.I=1,t.connect=function(c,b,k,$){ke(0),this.W=c,this.H=b||{},k&&$!==void 0&&(this.H.OSID=k,this.H.OAID=$),this.F=this.X,this.J=pf(this,null,this.W),_a(this)};function Dc(c){if(of(c),c.I==3){var b=c.V++,k=zn(c.J);if(mt(k,"SID",c.M),mt(k,"RID",b),mt(k,"TYPE","terminate"),Qs(c,k),b=new An(c,c.j,b),b.M=2,b.A=ga(zn(k)),k=!1,o.navigator&&o.navigator.sendBeacon)try{k=o.navigator.sendBeacon(b.A.toString(),"")}catch{}!k&&o.Image&&(new Image().src=b.A,k=!0),k||(b.g=mf(b.j,null),b.g.ea(b.A)),b.F=Date.now(),ma(b)}ff(c)}function ba(c){c.g&&(Mc(c),c.g.cancel(),c.g=null)}function of(c){ba(c),c.v&&(o.clearTimeout(c.v),c.v=null),wa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function _a(c){if(!zh(c.h)&&!c.m){c.m=!0;var b=c.Ea;f||A(),G||(f(),G=!0),N.add(b,c),c.D=0}}function h_(c,b){return Bh(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=b.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=rr(d(c.Ea,c,b),hf(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const de=new An(this,this.j,c);let pe=this.o;if(this.U&&(pe?(pe=re(pe),Ie(pe,this.U)):pe=this.U),this.u!==null||this.R||(de.J=pe,pe=null),this.S)e:{for(var b=0,k=0;k<this.i.length;k++){t:{var $=this.i[k];if("__data__"in $.map&&($=$.map.__data__,typeof $=="string")){$=$.length;break t}$=void 0}if($===void 0)break;if(b+=$,b>4096){b=k;break e}if(b===4096||k===this.i.length-1){b=k+1;break e}}b=1e3}else b=1e3;b=lf(this,de,b),k=zn(this.J),mt(k,"RID",c),mt(k,"CVER",22),this.G&&mt(k,"X-HTTP-Session-Id",this.G),Qs(this,k),pe&&(this.R?b="headers="+Nr(Zh(pe))+"&"+b:this.u&&Nc(k,this.u,pe)),Ac(this.h,de),this.Ra&&mt(k,"TYPE","init"),this.S?(mt(k,"$req",b),mt(k,"SID","null"),de.U=!0,Gi(de,k,null)):Gi(de,k,b),this.I=2}}else this.I==3&&(c?af(this,c):this.i.length==0||zh(this.h)||af(this))};function af(c,b){var k;b?k=b.l:k=c.V++;const $=zn(c.J);mt($,"SID",c.M),mt($,"RID",k),mt($,"AID",c.K),Qs(c,$),c.u&&c.o&&Nc($,c.u,c.o),k=new An(c,c.j,k,c.D+1),c.u===null&&(k.J=c.o),b&&(c.i=b.G.concat(c.i)),b=lf(c,k,1e3),k.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ac(c.h,k),Gi(k,$,b)}function Qs(c,b){c.H&&ie(c.H,function(k,$){mt(b,$,k)}),c.l&&ie({},function(k,$){mt(b,$,k)})}function lf(c,b,k){k=Math.min(c.i.length,k);const $=c.l?d(c.l.Ka,c.l,c):null;e:{var de=c.i;let He=-1;for(;;){const Dt=["count="+k];He==-1?k>0?(He=de[0].g,Dt.push("ofs="+He)):He=0:Dt.push("ofs="+He);let ut=!0;for(let Ut=0;Ut<k;Ut++){var pe=de[Ut].g;const Bn=de[Ut].map;if(pe-=He,pe<0)He=Math.max(0,de[Ut].g-100),ut=!1;else try{pe="req"+pe+"_"||"";try{var Ae=Bn instanceof Map?Bn:Object.entries(Bn);for(const[yi,Lr]of Ae){let Vr=Lr;a(Lr)&&(Vr=he(Lr)),Dt.push(pe+yi+"="+encodeURIComponent(Vr))}}catch(yi){throw Dt.push(pe+"type="+encodeURIComponent("_badmap")),yi}}catch{$&&$(Bn)}}if(ut){Ae=Dt.join("&");break e}}Ae=void 0}return c=c.i.splice(0,k),b.G=c,Ae}function cf(c){if(!c.g&&!c.v){c.Y=1;var b=c.Da;f||A(),G||(f(),G=!0),N.add(b,c),c.A=0}}function Oc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=rr(d(c.Da,c),hf(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,uf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=rr(d(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ke(10),ba(this),uf(this))};function Mc(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function uf(c){c.g=new An(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var b=zn(c.na);mt(b,"RID","rpc"),mt(b,"SID",c.M),mt(b,"AID",c.K),mt(b,"CI",c.F?"0":"1"),!c.F&&c.ia&&mt(b,"TO",c.ia),mt(b,"TYPE","xmlhttp"),Qs(c,b),c.u&&c.o&&Nc(b,c.u,c.o),c.O&&(c.g.H=c.O);var k=c.g;c=c.ba,k.M=1,k.A=ga(zn(b)),k.u=null,k.R=!0,Fs(k,c)}t.Va=function(){this.C!=null&&(this.C=null,ba(this),Oc(this),ke(19))};function wa(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function df(c,b){var k=null;if(c.g==b){wa(c),Mc(c),c.g=null;var $=2}else if(Sc(c.h,b))k=b.G,jh(c.h,b),$=1;else return;if(c.I!=0){if(b.o)if($==1){k=b.u?b.u.length:0,b=Date.now()-b.F;var de=c.D;$=Ce(),U($,new Tt($,k)),_a(c)}else cf(c);else if(de=b.m,de==3||de==0&&b.X>0||!($==1&&h_(c,b)||$==2&&Oc(c)))switch(k&&k.length>0&&(b=c.h,b.i=b.i.concat(k)),de){case 1:vi(c,5);break;case 4:vi(c,10);break;case 3:vi(c,6);break;default:vi(c,2)}}}function hf(c,b){let k=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(k*=2),k*b}function vi(c,b){if(c.j.info("Error code "+b),b==2){var k=d(c.bb,c),$=c.Ua;const de=!$;$=new Dr($||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||zs($,"https"),ga($),de?o_($.toString(),k):a_($.toString(),k)}else ke(2);c.I=0,c.l&&c.l.pa(b),ff(c),of(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function ff(c){if(c.I=0,c.ja=[],c.l){const b=qh(c.h);(b.length!=0||c.i.length!=0)&&(w(c.ja,b),w(c.ja,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.oa()}}function pf(c,b,k){var $=k instanceof Dr?zn(k):new Dr(k);if($.g!="")b&&($.g=b+"."+$.g),Bs($,$.u);else{var de=o.location;$=de.protocol,b=b?b+"."+de.hostname:de.hostname,de=+de.port;const pe=new Dr(null);$&&zs(pe,$),b&&(pe.g=b),de&&Bs(pe,de),k&&(pe.h=k),$=pe}return k=c.G,b=c.wa,k&&b&&mt($,k,b),mt($,"VER",c.ka),Qs(c,$),$}function mf(c,b,k){if(b&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return b=c.Aa&&!c.ma?new Ct(new Pc({ab:k})):new Ct(c.ma),b.Fa(c.L),b}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function gf(){}t=gf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ea(){}Ea.prototype.g=function(c,b){return new mn(c,b)};function mn(c,b){z.call(this),this.g=new sf(b),this.l=c,this.h=b&&b.messageUrlParams||null,c=b&&b.messageHeaders||null,b&&b.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=b&&b.initMessageHeaders||null,b&&b.messageContentType&&(c?c["X-WebChannel-Content-Type"]=b.messageContentType:c={"X-WebChannel-Content-Type":b.messageContentType}),b&&b.sa&&(c?c["X-WebChannel-Client-Profile"]=b.sa:c={"X-WebChannel-Client-Profile":b.sa}),this.g.U=c,(c=b&&b.Qb)&&!T(c)&&(this.g.u=c),this.A=b&&b.supportsCrossDomainXhr||!1,this.v=b&&b.sendRawJson||!1,(b=b&&b.httpSessionIdParam)&&!T(b)&&(this.g.G=b,c=this.h,c!==null&&b in c&&(c=this.h,b in c&&delete c[b])),this.j=new Qi(this)}m(mn,z),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Dc(this.g)},mn.prototype.o=function(c){var b=this.g;if(typeof c=="string"){var k={};k.__data__=c,c=k}else this.v&&(k={},k.__data__=he(c),c=k);b.i.push(new Xb(b.Ya++,c)),b.I==3&&_a(b)},mn.prototype.N=function(){this.g.l=null,delete this.j,Dc(this.g),delete this.g,mn.Z.N.call(this)};function vf(c){Jt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var b=c.__sm__;if(b){e:{for(const k in b){c=k;break e}c=void 0}(this.i=c)&&(c=this.i,b=b!==null&&c in b?b[c]:void 0),this.data=b}else this.data=c}m(vf,Jt);function yf(){tt.call(this),this.status=1}m(yf,tt);function Qi(c){this.g=c}m(Qi,gf),Qi.prototype.ra=function(){U(this.g,"a")},Qi.prototype.qa=function(c){U(this.g,new vf(c))},Qi.prototype.pa=function(c){U(this.g,new yf)},Qi.prototype.oa=function(){U(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Jy=function(){return new Ea},Qy=function(){return Ce()},Ky=Ze,Ku={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pi.NO_ERROR=0,pi.TIMEOUT=8,pi.HTTP_ERROR=6,Ka=pi,Ms.COMPLETE="complete",Gy=Ms,yt.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",z.prototype.listen=z.prototype.J,so=yt,Ct.prototype.listenOnce=Ct.prototype.K,Ct.prototype.getLastError=Ct.prototype.Ha,Ct.prototype.getLastErrorCode=Ct.prototype.ya,Ct.prototype.getStatus=Ct.prototype.ca,Ct.prototype.getResponseJson=Ct.prototype.La,Ct.prototype.getResponseText=Ct.prototype.la,Ct.prototype.send=Ct.prototype.ea,Ct.prototype.setWithCredentials=Ct.prototype.Fa,Hy=Ct}).apply(typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let As="12.10.0";function sx(t){As=t}/**
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
 */const Mi=new Zl("@firebase/firestore");function es(){return Mi.logLevel}function De(t,...e){if(Mi.logLevel<=Je.DEBUG){const n=e.map(Qd);Mi.debug(`Firestore (${As}): ${t}`,...n)}}function xr(t,...e){if(Mi.logLevel<=Je.ERROR){const n=e.map(Qd);Mi.error(`Firestore (${As}): ${t}`,...n)}}function Li(t,...e){if(Mi.logLevel<=Je.WARN){const n=e.map(Qd);Mi.warn(`Firestore (${As}): ${t}`,...n)}}function Qd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Yy(t,r,n)}function Yy(t,e,n){let r=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw xr(r),new Error(r)}function lt(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Yy(e,i,r)}function We(t,e){return t}/**
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
 */const xe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Me extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ei{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Xy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ox{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(en.UNAUTHENTICATED))}shutdown(){}}class ax{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lx{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ei;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ei,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{De("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(De("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ei)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(De("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string",31837,{l:r}),new Xy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class cx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=en.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ux{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new cx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(en.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class om{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const r=s=>{s.error!=null&&De("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,De("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{De("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):De("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new om(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new om(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Jd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Ye(t,e){return t<e?-1:t>e?1:0}function Qu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return ou(i)===ou(s)?Ye(i,s):ou(i)?1:-1}return Ye(t.length,e.length)}const fx=55296,px=57343;function ou(t){const e=t.charCodeAt(0);return e>=fx&&e<=px}function ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const am="__name__";class Hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Hn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Ye(e.length,n.length)}static compareSegments(e,n){const r=Hn.isNumericId(e),i=Hn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Hn.extractNumericId(e).compare(Hn.extractNumericId(n)):Qu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class gt extends Hn{construct(e,n,r){return new gt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Me(xe.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const mx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends Hn{construct(e,n,r){return new Gt(e,n,r)}static isValidIdentifier(e){return mx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===am}static keyField(){return new Gt([am])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Me(xe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Me(xe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Me(xe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Me(xe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
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
 */class Ve{constructor(e){this.path=e}static fromPath(e){return new Ve(gt.fromString(e))}static fromName(e){return new Ve(gt.fromString(e).popFirst(5))}static empty(){return new Ve(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&gt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return gt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ve(new gt(e.slice()))}}/**
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
 */function Zy(t,e,n){if(!n)throw new Me(xe.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gx(t,e,n,r){if(e===!0&&r===!0)throw new Me(xe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lm(t){if(!Ve.isDocumentKey(t))throw new Me(xe.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cm(t){if(Ve.isDocumentKey(t))throw new Me(xe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function e1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Yd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ue(12329,{type:typeof t})}function Jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Me(xe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yd(t);throw new Me(xe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Nt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ia(t,e){if(!e1(t))throw new Me(xe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Me(xe.INVALID_ARGUMENT,n);return!0}/**
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
 */const um=-62135596800,dm=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*dm);return new vt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Me(xe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Me(xe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<um)throw new Me(xe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Me(xe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dm}_compareTo(e){return this.seconds===e.seconds?Ye(this.nanoseconds,e.nanoseconds):Ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ia(e,vt._jsonSchema))return new vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-um;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Nt("string",vt._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
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
 */class Be{static fromTimestamp(e){return new Be(e)}static min(){return new Be(new vt(0,0))}static max(){return new Be(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uo=-1;function vx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Be.fromTimestamp(r===1e9?new vt(n+1,0):new vt(n,r));return new ii(i,Ve.empty(),e)}function yx(t){return new ii(t.readTime,t.key,Uo)}class ii{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ii(Be.min(),Ve.empty(),Uo)}static max(){return new ii(Be.max(),Ve.empty(),Uo)}}function bx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ve.comparator(t.documentKey,e.documentKey),n!==0?n:Ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const _x="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rs(t){if(t.code!==xe.FAILED_PRECONDITION||t.message!==_x)throw t;De("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Ee((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Ee?n:Ee.resolve(n)}catch(n){return Ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Ee.reject(n)}static resolve(e){return new Ee((n,r)=>{n(e)})}static reject(e){return new Ee((n,r)=>{r(e)})}static waitFor(e){return new Ee((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=Ee.resolve(!1);for(const r of e)n=n.next(i=>i?Ee.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new Ee((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const d=l;n(e[d]).next(h=>{o[d]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new Ee((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ex(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ps(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rc.ce=-1;/**
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
 */const Xd=-1;function ic(t){return t==null}function vl(t){return t===0&&1/t==-1/0}function Ix(t){return typeof t=="number"&&Number.isInteger(t)&&!vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const t1="";function Tx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hm(e)),e=Cx(t.get(n),e);return hm(e)}function Cx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case t1:n+="";break;default:n+=s}}return n}function hm(t){return t+t1+""}/**
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
 */function fm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function n1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Et{constructor(e,n){this.comparator=e,this.root=n||Wt.EMPTY}insert(e,n){return new Et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Wt.RED,this.left=i??Wt.EMPTY,this.right=s??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Wt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ue(27949);return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ue(57766)}get value(){throw Ue(16141)}get color(){throw Ue(16727)}get left(){throw Ue(29726)}get right(){throw Ue(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $t{constructor(e){this.comparator=e,this.data=new Et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pm(this.data.getIterator())}getIteratorFrom(e){return new pm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $t(this.comparator);return n.data=e,n}}class pm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yn{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new yn([])}unionWith(e){let n=new $t(Gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class r1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new r1("Invalid base64 string: "+s):s}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const xx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(t){if(lt(!!t,39018),typeof t=="string"){let e=0;const n=xx.exec(t);if(lt(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Rt(t.seconds),nanos:Rt(t.nanos)}}function Rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
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
 */const i1="server_timestamp",s1="__type__",o1="__previous_value__",a1="__local_write_time__";function Zd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[s1])==null?void 0:r.stringValue)===i1}function sc(t){const e=t.mapValue.fields[o1];return Zd(e)?sc(e):e}function zo(t){const e=si(t.mapValue.fields[a1].timestampValue);return new vt(e.seconds,e.nanos)}/**
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
 */class kx{constructor(e,n,r,i,s,o,a,l,d,h,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=h,this.apiKey=m}}const yl="(default)";class Bo{constructor(e,n){this.projectId=e,this.database=n||yl}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===yl}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}function Sx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Me(xe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(t.options.projectId,e)}/**
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
 */const l1="__type__",Ax="__max__",Na={mapValue:{}},c1="__vector__",bl="value";function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zd(t)?4:Px(t)?9007199254740991:Rx(t)?10:11:Ue(28295,{value:t})}function tr(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=si(i.timestampValue),a=si(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return oi(i.bytesValue).isEqual(oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Rt(i.geoPointValue.latitude)===Rt(s.geoPointValue.latitude)&&Rt(i.geoPointValue.longitude)===Rt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Rt(i.integerValue)===Rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Rt(i.doubleValue),a=Rt(s.doubleValue);return o===a?vl(o)===vl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(fm(o)!==fm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!tr(o[l],a[l])))return!1;return!0}(t,e);default:return Ue(52216,{left:t})}}function jo(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=ai(t),r=ai(e);if(n!==r)return Ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ye(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Rt(s.integerValue||s.doubleValue),l=Rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return mm(t.timestampValue,e.timestampValue);case 4:return mm(zo(t),zo(e));case 5:return Qu(t.stringValue,e.stringValue);case 6:return function(s,o){const a=oi(s),l=oi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let d=0;d<a.length&&d<l.length;d++){const h=Ye(a[d],l[d]);if(h!==0)return h}return Ye(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ye(Rt(s.latitude),Rt(o.latitude));return a!==0?a:Ye(Rt(s.longitude),Rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return gm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,y,w,v;const a=s.fields||{},l=o.fields||{},d=(g=a[bl])==null?void 0:g.arrayValue,h=(y=l[bl])==null?void 0:y.arrayValue,m=Ye(((w=d==null?void 0:d.values)==null?void 0:w.length)||0,((v=h==null?void 0:h.values)==null?void 0:v.length)||0);return m!==0?m:gm(d,h)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Na.mapValue&&o===Na.mapValue)return 0;if(s===Na.mapValue)return 1;if(o===Na.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),d=o.fields||{},h=Object.keys(d);l.sort(),h.sort();for(let m=0;m<l.length&&m<h.length;++m){const g=Qu(l[m],h[m]);if(g!==0)return g;const y=bs(a[l[m]],d[h[m]]);if(y!==0)return y}return Ye(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Ue(23264,{he:n})}}function mm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ye(t,e);const n=si(t),r=si(e),i=Ye(n.seconds,r.seconds);return i!==0?i:Ye(n.nanos,r.nanos)}function gm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=bs(n[i],r[i]);if(s)return s}return Ye(n.length,r.length)}function _s(t){return Ju(t)}function Ju(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Ve.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ju(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ju(n.fields[o])}`;return i+"}"}(t.mapValue):Ue(61005,{value:t})}function Qa(t){switch(ai(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sc(t);return e?16+Qa(e):16;case 5:return 2*t.stringValue.length;case 6:return oi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Qa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return hi(r.fields,(s,o)=>{i+=s.length+Qa(o)}),i}(t.mapValue);default:throw Ue(13486,{value:t})}}function Yu(t){return!!t&&"integerValue"in t}function eh(t){return!!t&&"arrayValue"in t}function vm(t){return!!t&&"nullValue"in t}function ym(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function Rx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[l1])==null?void 0:r.stringValue)===c1}function Io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return{...t}}function Px(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ax}/**
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
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=Gt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Io(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ja(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new fn(Io(this.value))}}function u1(t){const e=[];return hi(t.fields,(n,r)=>{const i=new Gt([n]);if(Ja(r)){const s=u1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yn(e)}/**
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
 */class nn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nn(e,0,Be.min(),Be.min(),Be.min(),fn.empty(),0)}static newFoundDocument(e,n,r,i){return new nn(e,1,n,Be.min(),r,i,0)}static newNoDocument(e,n){return new nn(e,2,n,Be.min(),Be.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new nn(e,3,n,Be.min(),Be.min(),fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _l{constructor(e,n){this.position=e,this.inclusive=n}}function bm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Ve.comparator(Ve.fromName(o.referenceValue),n.key):r=bs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _m(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Nx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class d1{}class Lt extends d1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ox(e,n,r):n==="array-contains"?new Vx(e,r):n==="in"?new $x(e,r):n==="not-in"?new Fx(e,r):n==="array-contains-any"?new Ux(e,r):new Lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Mx(e,r):new Lx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(bs(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends d1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new nr(e,n)}matches(e){return h1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function h1(t){return t.op==="and"}function f1(t){return Dx(t)&&h1(t)}function Dx(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function Xu(t){if(t instanceof Lt)return t.field.canonicalString()+t.op.toString()+_s(t.value);if(f1(t))return t.filters.map(e=>Xu(e)).join(",");{const e=t.filters.map(n=>Xu(n)).join(",");return`${t.op}(${e})`}}function p1(t,e){return t instanceof Lt?function(r,i){return i instanceof Lt&&r.op===i.op&&r.field.isEqual(i.field)&&tr(r.value,i.value)}(t,e):t instanceof nr?function(r,i){return i instanceof nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&p1(o,i.filters[a]),!0):!1}(t,e):void Ue(19439)}function m1(t){return t instanceof Lt?function(n){return`${n.field.canonicalString()} ${n.op} ${_s(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(m1).join(" ,")+"}"}(t):"Filter"}class Ox extends Lt{constructor(e,n,r){super(e,n,r),this.key=Ve.fromName(r.referenceValue)}matches(e){const n=Ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mx extends Lt{constructor(e,n){super(e,"in",n),this.keys=g1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lx extends Lt{constructor(e,n){super(e,"not-in",n),this.keys=g1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Ve.fromName(r.referenceValue))}class Vx extends Lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return eh(n)&&jo(n.arrayValue,this.value)}}class $x extends Lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class Fx extends Lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!jo(this.value.arrayValue,n)}}class Ux extends Lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!eh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
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
 */class zx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function wm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new zx(t,e,n,r,i,s,o)}function th(t){const e=We(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),e.Te=n}return e.Te}function nh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Nx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!p1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_m(t.startAt,e.startAt)&&_m(t.endAt,e.endAt)}function Zu(t){return Ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class oc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Bx(t,e,n,r,i,s,o,a){return new oc(t,e,n,r,i,s,o,a)}function rh(t){return new oc(t)}function Em(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jx(t){return Ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function qx(t){return t.collectionGroup!==null}function To(t){const e=We(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $t(Gt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new wl(s,r))}),n.has(Gt.keyField().canonicalString())||e.Ie.push(new wl(Gt.keyField(),r))}return e.Ie}function Yn(t){const e=We(t);return e.Ee||(e.Ee=Wx(e,To(t))),e.Ee}function Wx(t,e){if(t.limitType==="F")return wm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wl(i.field,s)});const n=t.endAt?new _l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _l(t.startAt.position,t.startAt.inclusive):null;return wm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ed(t,e,n){return new oc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return nh(Yn(t),Yn(e))&&t.limitType===e.limitType}function v1(t){return`${th(Yn(t))}|lt:${t.limitType}`}function ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>m1(i)).join(", ")}]`),ic(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_s(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_s(i)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Ve.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of To(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const d=bm(o,a,l);return o.inclusive?d<=0:d<0}(r.startAt,To(r),i)||r.endAt&&!function(o,a,l){const d=bm(o,a,l);return o.inclusive?d>=0:d>0}(r.endAt,To(r),i))}(t,e)}function Hx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function y1(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=Gx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Gx(t,e,n){const r=t.field.isKeyField()?Ve.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),d=a.data.field(s);return l!==null&&d!==null?bs(l,d):Ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ue(19790,{direction:t.dir})}}/**
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
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return n1(this.inner)}size(){return this.innerSize}}/**
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
 */const Kx=new Et(Ve.comparator);function kr(){return Kx}const b1=new Et(Ve.comparator);function oo(...t){let e=b1;for(const n of t)e=e.insert(n.key,n);return e}function _1(t){let e=b1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return Co()}function w1(){return Co()}function Co(){return new ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const Qx=new Et(Ve.comparator),Jx=new $t(Ve.comparator);function Xe(...t){let e=Jx;for(const n of t)e=e.add(n);return e}const Yx=new $t(Ye);function Xx(){return Yx}/**
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
 */function ih(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vl(e)?"-0":e}}function E1(t){return{integerValue:""+t}}function Zx(t,e){return Ix(e)?E1(e):ih(t,e)}/**
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
 */class cc{constructor(){this._=void 0}}function ek(t,e,n){return t instanceof El?function(i,s){const o={fields:{[s1]:{stringValue:i1},[a1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zd(s)&&(s=sc(s)),s&&(o.fields[o1]=s),{mapValue:o}}(n,e):t instanceof qo?T1(t,e):t instanceof Wo?C1(t,e):function(i,s){const o=I1(i,s),a=Im(o)+Im(i.Ae);return Yu(o)&&Yu(i.Ae)?E1(a):ih(i.serializer,a)}(t,e)}function tk(t,e,n){return t instanceof qo?T1(t,e):t instanceof Wo?C1(t,e):n}function I1(t,e){return t instanceof Il?function(r){return Yu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class El extends cc{}class qo extends cc{constructor(e){super(),this.elements=e}}function T1(t,e){const n=x1(e);for(const r of t.elements)n.some(i=>tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends cc{constructor(e){super(),this.elements=e}}function C1(t,e){let n=x1(e);for(const r of t.elements)n=n.filter(i=>!tr(i,r));return{arrayValue:{values:n}}}class Il extends cc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Im(t){return Rt(t.integerValue||t.doubleValue)}function x1(t){return eh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qo&&i instanceof qo||r instanceof Wo&&i instanceof Wo?ys(r.elements,i.elements,tr):r instanceof Il&&i instanceof Il?tr(r.Ae,i.Ae):r instanceof El&&i instanceof El}(t.transform,e.transform)}class rk{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uc{}function k1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dc(t.key,wn.none()):new sa(t.key,t.data,wn.none());{const n=t.data,r=fn.empty();let i=new $t(Gt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fi(t.key,r,new yn(i.toArray()),wn.none())}}function ik(t,e,n){t instanceof sa?function(i,s,o){const a=i.value.clone(),l=Cm(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,o){if(!Ya(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Cm(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(S1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xo(t,e,n,r){return t instanceof sa?function(s,o,a,l){if(!Ya(s.precondition,o))return a;const d=s.value.clone(),h=xm(s.fieldTransforms,l,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(s,o,a,l){if(!Ya(s.precondition,o))return a;const d=xm(s.fieldTransforms,l,o),h=o.data;return h.setAll(S1(s)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,a){return Ya(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function sk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=I1(r.transform,i||null);s!=null&&(n===null&&(n=fn.empty()),n.set(r.field,s))}return n||null}function Tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ys(r,i,(s,o)=>nk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends uc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends uc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function S1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cm(t,e,n){const r=new Map;lt(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tk(o,a,n[i]))}return r}function xm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ek(s,o,e))}return r}class dc extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ok extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ak{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ik(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=w1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=k1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Be.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Xe())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,r)=>Tm(n,r))&&ys(this.baseMutations,e.baseMutations,(n,r)=>Tm(n,r))}}class sh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){lt(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Qx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sh(e,n,r,i)}}/**
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
 */class lk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ck{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pt,et;function uk(t){switch(t){case xe.OK:return Ue(64938);case xe.CANCELLED:case xe.UNKNOWN:case xe.DEADLINE_EXCEEDED:case xe.RESOURCE_EXHAUSTED:case xe.INTERNAL:case xe.UNAVAILABLE:case xe.UNAUTHENTICATED:return!1;case xe.INVALID_ARGUMENT:case xe.NOT_FOUND:case xe.ALREADY_EXISTS:case xe.PERMISSION_DENIED:case xe.FAILED_PRECONDITION:case xe.ABORTED:case xe.OUT_OF_RANGE:case xe.UNIMPLEMENTED:case xe.DATA_LOSS:return!0;default:return Ue(15467,{code:t})}}function A1(t){if(t===void 0)return xr("GRPC error has no .code"),xe.UNKNOWN;switch(t){case Pt.OK:return xe.OK;case Pt.CANCELLED:return xe.CANCELLED;case Pt.UNKNOWN:return xe.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return xe.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return xe.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return xe.INTERNAL;case Pt.UNAVAILABLE:return xe.UNAVAILABLE;case Pt.UNAUTHENTICATED:return xe.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return xe.INVALID_ARGUMENT;case Pt.NOT_FOUND:return xe.NOT_FOUND;case Pt.ALREADY_EXISTS:return xe.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return xe.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return xe.FAILED_PRECONDITION;case Pt.ABORTED:return xe.ABORTED;case Pt.OUT_OF_RANGE:return xe.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return xe.UNIMPLEMENTED;case Pt.DATA_LOSS:return xe.DATA_LOSS;default:return Ue(39323,{code:t})}}(et=Pt||(Pt={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dk(){return new TextEncoder}/**
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
 */const hk=new Zr([4294967295,4294967295],0);function km(t){const e=dk().encode(t),n=new Wy;return n.update(e),new Uint8Array(n.digest())}function Sm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zr([n,r],0),new Zr([i,s],0)]}class oh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Zr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Zr.fromNumber(r)));return i.compare(hk)===1&&(i=new Zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=km(e),[r,i]=Sm(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new oh(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=km(e),[r,i]=Sm(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hc(Be.min(),i,new Et(Ye),kr(),Xe())}}class oa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oa(r,n,Xe(),Xe(),Xe())}}/**
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
 */class Xa{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class R1{constructor(e,n){this.targetId=e,this.Ce=n}}class P1{constructor(e,n,r=Qt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Am{constructor(){this.ve=0,this.Fe=Rm(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Xe(),n=Xe(),r=Xe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Ue(38017,{changeType:s})}}),new oa(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Rm()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fk{constructor(e){this.Ge=e,this.ze=new Map,this.je=kr(),this.He=Da(),this.Je=Da(),this.Ze=new Et(Ye)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Zu(s))if(r===0){const o=new Ve(s.path);this.et(n,o,nn.newNoDocument(o,Be.min()))}else lt(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=oi(r).toUint8Array()}catch(l){if(l instanceof r1)return Li("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new oh(o,i,s)}catch(l){return Li(l instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&Zu(a.target)){const l=new Ve(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,nn.newNoDocument(l,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=Xe();this.Je.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new hc(e,n,this.Ze,this.je,r);return this.je=kr(),this.He=Da(),this.Je=Da(),this.Ze=new Et(Ye),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Am,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new $t(Ye),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new $t(Ye),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||De("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Am),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Da(){return new Et(Ve.comparator)}function Rm(){return new Et(Ve.comparator)}const pk={asc:"ASCENDING",desc:"DESCENDING"},mk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gk={and:"AND",or:"OR"};class vk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function td(t,e){return t.useProto3Json||ic(e)?e:{value:e}}function Tl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yk(t,e){return Tl(t,e.toTimestamp())}function Xn(t){return lt(!!t,49232),Be.fromTimestamp(function(n){const r=si(n);return new vt(r.seconds,r.nanos)}(t))}function ah(t,e){return nd(t,e).canonicalString()}function nd(t,e){const n=function(i){return new gt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function D1(t){const e=gt.fromString(t);return lt($1(e),10190,{key:e.toString()}),e}function rd(t,e){return ah(t.databaseId,e.path)}function au(t,e){const n=D1(e);if(n.get(1)!==t.databaseId.projectId)throw new Me(xe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Me(xe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ve(M1(n))}function O1(t,e){return ah(t.databaseId,e)}function bk(t){const e=D1(t);return e.length===4?gt.emptyPath():M1(e)}function id(t){return new gt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function M1(t){return lt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Pm(t,e,n){return{name:rd(t,e),fields:n.value.mapValue.fields}}function _k(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Ue(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,h){return d.useProto3Json?(lt(h===void 0||typeof h=="string",58123),Qt.fromBase64String(h||"")):(lt(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Qt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(d){const h=d.code===void 0?xe.UNKNOWN:A1(d.code);return new Me(h,d.message||"")}(o);n=new P1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=au(t,r.document.name),s=Xn(r.document.updateTime),o=r.document.createTime?Xn(r.document.createTime):Be.min(),a=new fn({mapValue:{fields:r.document.fields}}),l=nn.newFoundDocument(i,s,o,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new Xa(d,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=au(t,r.document),s=r.readTime?Xn(r.readTime):Be.min(),o=nn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=au(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return Ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ck(i,s),a=r.targetId;n=new R1(a,o)}}return n}function wk(t,e){let n;if(e instanceof sa)n={update:Pm(t,e.key,e.value)};else if(e instanceof dc)n={delete:rd(t,e.key)};else if(e instanceof fi)n={update:Pm(t,e.key,e.data),updateMask:Rk(e.fieldMask)};else{if(!(e instanceof ok))return Ue(16599,{dt:e.type});n={verify:rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof El)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Il)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ue(27497)}(t,e.precondition)),n}function Ek(t,e){return t&&t.length>0?(lt(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Xn(i.updateTime):Xn(s);return o.isEqual(Be.min())&&(o=Xn(s)),new rk(o,i.transformResults||[])}(n,e))):[]}function Ik(t,e){return{documents:[O1(t,e.path)]}}function Tk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=O1(t,i);const s=function(d){if(d.length!==0)return V1(nr.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(h=>function(g){return{field:ns(g.field),direction:kk(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=td(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:i}}function Ck(t){let e=bk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lt(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(m){const g=L1(m);return g instanceof nr&&f1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(w){return new wl(rs(w.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,ic(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(m){const g=!!m.before,y=m.values||[];return new _l(y,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,y=m.values||[];return new _l(y,g)}(n.endAt)),Bx(e,i,o,s,a,"F",l,d)}function xk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ue(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function L1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=rs(n.unaryFilter.field);return Lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=rs(n.unaryFilter.field);return Lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rs(n.unaryFilter.field);return Lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rs(n.unaryFilter.field);return Lt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ue(61313);default:return Ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return Lt.create(rs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ue(58110);default:return Ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>L1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ue(1026)}}(n.compositeFilter.op))}(t):Ue(30097,{filter:t})}function kk(t){return pk[t]}function Sk(t){return mk[t]}function Ak(t){return gk[t]}function ns(t){return{fieldPath:t.canonicalString()}}function rs(t){return Gt.fromServerFormat(t.fieldPath)}function V1(t){return t instanceof Lt?function(n){if(n.op==="=="){if(ym(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NAN"}};if(vm(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ym(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NAN"}};if(vm(n.value))return{unaryFilter:{field:ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ns(n.field),op:Sk(n.op),value:n.value}}}(t):t instanceof nr?function(n){const r=n.getFilters().map(i=>V1(i));return r.length===1?r[0]:{compositeFilter:{op:Ak(n.op),filters:r}}}(t):Ue(54877,{filter:t})}function Rk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function F1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Qr{constructor(e,n,r,i,s=Be.min(),o=Be.min(),a=Qt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Pk{constructor(e){this.yt=e}}function Nk(t){const e=Ck({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ed(e,e.limit,"L"):e}/**
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
 */class Dk{constructor(){this.Sn=new Ok}addToCollectionParentIndex(e,n){return this.Sn.add(n),Ee.resolve()}getCollectionParents(e,n){return Ee.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return Ee.resolve()}deleteFieldIndex(e,n){return Ee.resolve()}deleteAllFieldIndexes(e){return Ee.resolve()}createTargetIndexes(e,n){return Ee.resolve()}getDocumentsMatchingTarget(e,n){return Ee.resolve(null)}getIndexType(e,n){return Ee.resolve(0)}getFieldIndexes(e,n){return Ee.resolve([])}getNextCollectionGroupToUpdate(e){return Ee.resolve(null)}getMinOffset(e,n){return Ee.resolve(ii.min())}getMinOffsetFromCollectionGroup(e,n){return Ee.resolve(ii.min())}updateCollectionGroup(e,n,r){return Ee.resolve()}updateIndexEntries(e,n){return Ee.resolve()}}class Ok{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $t(gt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $t(gt.comparator)).toArray()}}/**
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
 */const Nm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},U1=41943040;class hn{static withCacheSize(e){return new hn(e,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(U1,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
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
 */class ws{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ws(0)}static ar(){return new ws(-1)}}/**
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
 */const Dm="LruGarbageCollector",Mk=1048576;function Om([t,e],[n,r]){const i=Ye(t,n);return i===0?Ye(e,r):i}class Lk{constructor(e){this.Pr=e,this.buffer=new $t(Om),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Om(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Vk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){De(Dm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ps(n)?De(Dm,"Ignoring IndexedDB error during garbage collection: ",n):await Rs(n)}await this.Ar(3e5)})}}class $k{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return Ee.resolve(rc.ce);const r=new Lk(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(De("LruGarbageCollector","Garbage collection skipped; disabled"),Ee.resolve(Nm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(De("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nm):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,a,l,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(De("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),es()<=Je.DEBUG&&De("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${m} documents in `+(d-l)+`ms
Total Duration: ${d-h}ms`),Ee.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Fk(t,e){return new $k(t,e)}/**
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
 */class Uk{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?Ee.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Bk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xo(r.mutation,i,yn.empty(),vt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Xe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Xe()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Xe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=kr();const o=Co(),a=function(){return Co()}();return n.forEach((l,d)=>{const h=r.get(d.key);i.has(d.key)&&(h===void 0||h.mutation instanceof fi)?s=s.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),xo(h.mutation,d,h.mutation.getFieldMask(),vt.now())):o.set(d.key,yn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,h)=>o.set(d,h)),n.forEach((d,h)=>a.set(d,new zk(h,o.get(d)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Co();let i=new Et((o,a)=>o-a),s=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let h=r.get(l)||yn.empty();h=a.applyToLocalView(d,h),r.set(l,h);const m=(i.get(a.batchId)||Xe()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,h=l.value,m=w1();h.forEach(g=>{if(!s.has(g)){const y=k1(n.get(g),r.get(g));y!==null&&m.set(g,y),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return Ee.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return jx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):Ee.resolve(Si());let a=Uo,l=s;return o.next(d=>Ee.forEach(d,(h,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),s.get(h)?Ee.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,Xe())).next(h=>({batchId:a,changes:_1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ve(n)).next(r=>{let i=oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=oo();return this.indexManager.getCollectionParents(e,s).next(a=>Ee.forEach(a,l=>{const d=function(m,g){return new oc(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(h=>{h.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,nn.newInvalidDocument(h)))});let a=oo();return o.forEach((l,d)=>{const h=s.get(l);h!==void 0&&xo(h.mutation,d,yn.empty(),vt.now()),lc(n,d)&&(a=a.insert(l,d))}),a})}}/**
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
 */class jk{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return Ee.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xn(i.createTime)}}(n)),Ee.resolve()}getNamedQuery(e,n){return Ee.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:Nk(i.bundledQuery),readTime:Xn(i.readTime)}}(n)),Ee.resolve()}}/**
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
 */class qk{constructor(){this.overlays=new Et(Ve.comparator),this.Lr=new Map}getOverlay(e,n){return Ee.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return Ee.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),Ee.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),Ee.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new Ve(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return Ee.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Et((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=s.get(d.largestBatchId);h===null&&(h=Si(),s=s.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=Si(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=i)););return Ee.resolve(a)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lk(n,r));let s=this.Lr.get(n);s===void 0&&(s=Xe(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class Wk{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return Ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,Ee.resolve()}}/**
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
 */class lh{constructor(){this.kr=new $t(zt.Kr),this.qr=new $t(zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new zt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new zt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Ve(new gt([])),r=new zt(n,e),i=new zt(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Ve(new gt([])),r=new zt(n,e),i=new zt(n,e+1);let s=Xe();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new zt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Ve.comparator(e.key,n.key)||Ye(e.Hr,n.Hr)}static Ur(e,n){return Ye(e.Hr,n.Hr)||Ve.comparator(e.key,n.key)}}/**
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
 */class Hk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new $t(zt.Kr)}checkEmpty(e){return Ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ak(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Jr=this.Jr.add(new zt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Ee.resolve(o)}lookupMutationBatch(e,n){return Ee.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return Ee.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ee.resolve(this.mutationQueue.length===0?Xd:this.Yn-1)}getAllMutationBatches(e){return Ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new zt(n,0),i=new zt(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),Ee.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $t(Ye);return n.forEach(i=>{const s=new zt(i,0),o=new zt(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),Ee.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Ve.isDocumentKey(s)||(s=s.child(""));const o=new zt(new Ve(s),0);let a=new $t(Ye);return this.Jr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(l.Hr)),!0)},o),Ee.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){lt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return Ee.forEach(n.mutations,i=>{const s=new zt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new zt(n,0),i=this.Jr.firstAfterOrEqual(r);return Ee.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ee.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Gk{constructor(e){this.ti=e,this.docs=function(){return new Et(Ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return Ee.resolve(r?r.document.mutableCopy():nn.newInvalidDocument(n))}getEntries(e,n){let r=kr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nn.newInvalidDocument(i))}),Ee.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kr();const o=n.path,a=new Ve(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:h}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||bx(yx(h),r)<=0||(i.has(h.key)||lc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return Ee.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Ue(9500)}ni(e,n){return Ee.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kk(this)}getSize(e){return Ee.resolve(this.size)}}class Kk extends Uk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),Ee.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class Qk{constructor(e){this.persistence=e,this.ri=new ji(n=>th(n),nh),this.lastRemoteSnapshotVersion=Be.min(),this.highestTargetId=0,this.ii=0,this.si=new lh,this.targetCount=0,this.oi=ws._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),Ee.resolve()}getLastRemoteSnapshotVersion(e){return Ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ee.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),Ee.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,Ee.resolve()}updateTargetData(e,n){return this.lr(n),Ee.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,Ee.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),Ee.waitFor(s).next(()=>i)}getTargetCount(e){return Ee.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return Ee.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),Ee.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),Ee.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),Ee.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return Ee.resolve(r)}containsKey(e,n){return Ee.resolve(this.si.containsKey(n))}}/**
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
 */class z1{constructor(e,n){this._i={},this.overlays={},this.ai=new rc(0),this.ui=!1,this.ui=!0,this.ci=new Wk,this.referenceDelegate=e(this),this.li=new Qk(this),this.indexManager=new Dk,this.remoteDocumentCache=function(i){return new Gk(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Pk(n),this.Pi=new jk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Hk(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){De("MemoryPersistence","Starting transaction:",e);const i=new Jk(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return Ee.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Jk extends wx{constructor(e){super(),this.currentSequenceNumber=e}}class ch{constructor(e){this.persistence=e,this.Ri=new lh,this.Ai=null}static Vi(e){return new ch(e)}get di(){if(this.Ai)return this.Ai;throw Ue(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),Ee.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),Ee.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),Ee.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ee.forEach(this.di,r=>{const i=Ve.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Be.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return Ee.or([()=>Ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Cl{constructor(e,n){this.persistence=e,this.fi=new ji(r=>Tx(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Fk(this,n)}static Vi(e,n){return new Cl(e,n)}Ti(){}Ii(e){return Ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return Ee.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?Ee.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Be.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),Ee.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),Ee.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),Ee.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),Ee.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qa(e.data.value)),n}wr(e,n,r){return Ee.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return Ee.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class uh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=Xe(),i=Xe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new uh(e,n.fromCache,r,i)}}/**
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
 */class Yk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Xk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return wE()?8:Ex(on())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Yk;return this.ys(e,n,o).next(a=>{if(s.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(es()<=Je.DEBUG&&De("QueryEngine","SDK will not create cache indexes for query:",ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Ee.resolve()):(es()<=Je.DEBUG&&De("QueryEngine","Query:",ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(es()<=Je.DEBUG&&De("QueryEngine","The SDK decides to create cache indexes for query:",ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):Ee.resolve())}gs(e,n){if(Em(n))return Ee.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ed(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Xe(...s);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.bs(n,a);return this.Ss(n,d,o,l.readTime)?this.gs(e,ed(n,null,"F")):this.Ds(e,d,n,l)}))})))}ps(e,n,r,i){return Em(n)||i.isEqual(Be.min())?Ee.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?Ee.resolve(null):(es()<=Je.DEBUG&&De("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ts(n)),this.Ds(e,o,n,vx(i,Uo)).next(a=>a))})}bs(e,n){let r=new $t(y1(e));return n.forEach((i,s)=>{lc(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return es()<=Je.DEBUG&&De("QueryEngine","Using full collection scan to execute query:",ts(n)),this.fs.getDocumentsMatchingQuery(e,n,ii.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const dh="LocalStore",Zk=3e8;class eS{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Et(Ye),this.Fs=new ji(s=>th(s),nh),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function tS(t,e,n,r){return new eS(t,e,n,r)}async function B1(t,e){const n=We(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Xe();for(const d of i){o.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}for(const d of s){a.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:a}))})})}function nS(t,e){const n=We(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,h){const m=d.batch,g=m.keys();let y=Ee.resolve();return g.forEach(w=>{y=y.next(()=>h.getEntry(l,w)).next(v=>{const I=d.docVersions.get(w);lt(I!==null,48541),v.version.compareTo(I)<0&&(m.applyToRemoteDocument(v,d),v.isValidDocument()&&(v.setReadTime(d.commitVersion),h.addEntry(v)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Xe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function j1(t){const e=We(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function rS(t,e){const n=We(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const a=[];e.targetChanges.forEach((h,m)=>{const g=i.get(m);if(!g)return;a.push(n.li.removeMatchingKeys(s,h.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,h.addedDocuments,m)));let y=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?y=y.withResumeToken(Qt.EMPTY_BYTE_STRING,Be.min()).withLastLimboFreeSnapshotVersion(Be.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(m,y),function(v,I,C){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=Zk?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,y,h)&&a.push(n.li.updateTargetData(s,y))});let l=kr(),d=Xe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(iS(s,o,e.documentUpdates).next(h=>{l=h.Bs,d=h.Ls})),!r.isEqual(Be.min())){const h=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return Ee.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(n.vs=i,s))}function iS(t,e,n){let r=Xe(),i=Xe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kr();return n.forEach((a,l)=>{const d=s.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Be.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):De(dh,"Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Bs:o,Ls:i}})}function sS(t,e){const n=We(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oS(t,e){const n=We(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,Ee.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function sd(t,e,n){const r=We(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ps(o))throw o;De(dh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Mm(t,e,n){const r=We(t);let i=Be.min(),s=Xe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,h){const m=We(l),g=m.Fs.get(h);return g!==void 0?Ee.resolve(m.vs.get(g)):m.li.getTargetData(d,h)}(r,o,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Be.min(),n?s:Xe())).next(a=>(aS(r,Hx(e),a),{documents:a,ks:s})))}function aS(t,e,n){let r=t.Ms.get(e)||Be.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Lm{constructor(){this.activeTargetIds=Xx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lS{constructor(){this.vo=new Lm,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Lm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cS{Mo(e){}shutdown(){}}/**
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
 */const Vm="ConnectivityMonitor";class $m{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){De(Vm,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){De(Vm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oa=null;function od(){return Oa===null?Oa=function(){return 268435456+Math.round(2147483648*Math.random())}():Oa++,"0x"+Oa.toString(16)}/**
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
 */const lu="RestConnection",uS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class dS{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===yl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=od(),a=this.Qo(e,n.toUriEncodedString());De(lu,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:d}=new URL(a),h=Cs(d);return this.zo(e,a,l,r,h).then(m=>(De(lu,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Li(lu,`RPC '${e}' ${o} failed with error: `,m,"url: ",a,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=uS[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class hS{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Yt="WebChannelConnection",to=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ds extends dS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ds.c_){const e=Qy();to(e,Ky.STAT_EVENT,n=>{n.stat===Ku.PROXY?De(Yt,"STAT_EVENT: detected buffering proxy"):n.stat===Ku.NOPROXY&&De(Yt,"STAT_EVENT: detected no buffering proxy")}),ds.c_=!0}}zo(e,n,r,i,s){const o=od();return new Promise((a,l)=>{const d=new Hy;d.setWithCredentials(!0),d.listenOnce(Gy.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ka.NO_ERROR:const m=d.getResponseJson();De(Yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case Ka.TIMEOUT:De(Yt,`RPC '${e}' ${o} timed out`),l(new Me(xe.DEADLINE_EXCEEDED,"Request time out"));break;case Ka.HTTP_ERROR:const g=d.getStatus();if(De(Yt,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let y=d.getResponseJson();Array.isArray(y)&&(y=y[0]);const w=y==null?void 0:y.error;if(w&&w.status&&w.message){const v=function(C){const R=C.toLowerCase().replace(/_/g,"-");return Object.values(xe).indexOf(R)>=0?R:xe.UNKNOWN}(w.status);l(new Me(v,w.message))}else l(new Me(xe.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new Me(xe.UNAVAILABLE,"Connection failed."));break;default:Ue(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{De(Yt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);De(Yt,`RPC '${e}' ${o} sending request:`,i),d.send(n,"POST",h,r,15)})}T_(e,n,r){const i=od(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const d=s.join("");De(Yt,`Creating RPC '${e}' stream ${i}: ${d}`,a);const h=o.createWebChannel(d,a);this.I_(h);let m=!1,g=!1;const y=new hS({Ho:w=>{g?De(Yt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(m||(De(Yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),m=!0),De(Yt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},Jo:()=>h.close()});return to(h,so.EventType.OPEN,()=>{g||(De(Yt,`RPC '${e}' stream ${i} transport opened.`),y.i_())}),to(h,so.EventType.CLOSE,()=>{g||(g=!0,De(Yt,`RPC '${e}' stream ${i} transport closed`),y.o_(),this.E_(h))}),to(h,so.EventType.ERROR,w=>{g||(g=!0,Li(Yt,`RPC '${e}' stream ${i} transport errored. Name:`,w.name,"Message:",w.message),y.o_(new Me(xe.UNAVAILABLE,"The operation could not be completed")))}),to(h,so.EventType.MESSAGE,w=>{var v;if(!g){const I=w.data[0];lt(!!I,16349);const C=I,R=(C==null?void 0:C.error)||((v=C[0])==null?void 0:v.error);if(R){De(Yt,`RPC '${e}' stream ${i} received error:`,R);const V=R.status;let M=function(N){const A=Pt[N];if(A!==void 0)return A1(A)}(V),f=R.message;V==="NOT_FOUND"&&f.includes("database")&&f.includes("does not exist")&&f.includes(this.databaseId.database)&&Li(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=xe.INTERNAL,f="Unknown error status: "+V+" with message "+R.message),g=!0,y.o_(new Me(M,f)),h.close()}else De(Yt,`RPC '${e}' stream ${i} received:`,I),y.__(I)}}),ds.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Jy()}}/**
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
 */function fS(t){return new ds(t)}function cu(){return typeof document<"u"?document:null}/**
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
 */function fc(t){return new vk(t,!0)}/**
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
 */ds.c_=!1;class q1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&De("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Fm="PersistentStream";class W1{constructor(e,n,r,i,s,o,a,l){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new q1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===xe.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===xe.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new Me(xe.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return De(Fm,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(De(Fm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pS extends W1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=_k(this.serializer,e),r=function(s){if(!("targetChange"in s))return Be.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Be.min():o.readTime?Xn(o.readTime):Be.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=id(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Zu(l)?{documents:Ik(s,l)}:{query:Tk(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=N1(s,o.resumeToken);const d=td(s,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(Be.min())>0){a.readTime=Tl(s,o.snapshotVersion.toTimestamp());const d=td(s,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=xk(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=id(this.serializer),n.removeTarget=e,this.K_(n)}}class mS extends W1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return lt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){lt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Ek(e.writeResults,e.commitTime),r=Xn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=id(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wk(this.serializer,r))};this.K_(n)}}/**
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
 */class gS{}class vS extends gS{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Me(xe.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,nd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===xe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Me(xe.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,nd(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===xe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Me(xe.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function yS(t,e,n,r){return new vS(t,e,n,r)}class bS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(n),this.aa=!1):De("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Vi="RemoteStore";class _S{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{qi(this)&&(De(Vi,"Restarting streams for network reachability change."),await async function(l){const d=We(l);d.Ea.add(4),await aa(d),d.Va.set("Unknown"),d.Ea.delete(4),await pc(d)}(this))})}),this.Va=new bS(r,i)}}async function pc(t){if(qi(t))for(const e of t.Ra)await e(!0)}async function aa(t){for(const e of t.Ra)await e(!1)}function H1(t,e){const n=We(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),mh(n)?ph(n):Ns(n).O_()&&fh(n,e))}function hh(t,e){const n=We(t),r=Ns(n);n.Ia.delete(e),r.O_()&&G1(n,e),n.Ia.size===0&&(r.O_()?r.L_():qi(n)&&n.Va.set("Unknown"))}function fh(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Be.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).Z_(e)}function G1(t,e){t.da.$e(e),Ns(t).X_(e)}function ph(t){t.da=new fk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.Va.ua()}function mh(t){return qi(t)&&!Ns(t).x_()&&t.Ia.size>0}function qi(t){return We(t).Ea.size===0}function K1(t){t.da=void 0}async function wS(t){t.Va.set("Online")}async function ES(t){t.Ia.forEach((e,n)=>{fh(t,e)})}async function IS(t,e){K1(t),mh(t)?(t.Va.ha(e),ph(t)):t.Va.set("Unknown")}async function TS(t,e,n){if(t.Va.set("Online"),e instanceof P1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.da.removeTarget(a))}(t,e)}catch(r){De(Vi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xl(t,r)}else if(e instanceof Xa?t.da.Xe(e):e instanceof R1?t.da.st(e):t.da.tt(e),!n.isEqual(Be.min()))try{const r=await j1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.da.Tt(o);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ia.get(d);h&&s.Ia.set(d,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,d)=>{const h=s.Ia.get(l);if(!h)return;s.Ia.set(l,h.withResumeToken(Qt.EMPTY_BYTE_STRING,h.snapshotVersion)),G1(s,l);const m=new Qr(h.target,l,d,h.sequenceNumber);fh(s,m)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){De(Vi,"Failed to raise snapshot:",r),await xl(t,r)}}async function xl(t,e,n){if(!Ps(e))throw e;t.Ea.add(1),await aa(t),t.Va.set("Offline"),n||(n=()=>j1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{De(Vi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pc(t)})}function Q1(t,e){return e().catch(n=>xl(t,n,e))}async function mc(t){const e=We(t),n=li(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xd;for(;CS(e);)try{const i=await sS(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,xS(e,i)}catch(i){await xl(e,i)}J1(e)&&Y1(e)}function CS(t){return qi(t)&&t.Ta.length<10}function xS(t,e){t.Ta.push(e);const n=li(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function J1(t){return qi(t)&&!li(t).x_()&&t.Ta.length>0}function Y1(t){li(t).start()}async function kS(t){li(t).ra()}async function SS(t){const e=li(t);for(const n of t.Ta)e.ea(n.mutations)}async function AS(t,e,n){const r=t.Ta.shift(),i=sh.from(r,e,n);await Q1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await mc(t)}async function RS(t,e){e&&li(t).Y_&&await async function(r,i){if(function(o){return uk(o)&&o!==xe.ABORTED}(i.code)){const s=r.Ta.shift();li(r).B_(),await Q1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mc(r)}}(t,e),J1(t)&&Y1(t)}async function Um(t,e){const n=We(t);n.asyncQueue.verifyOperationInProgress(),De(Vi,"RemoteStore received new credentials");const r=qi(n);n.Ea.add(3),await aa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pc(n)}async function PS(t,e){const n=We(t);e?(n.Ea.delete(2),await pc(n)):e||(n.Ea.add(2),await aa(n),n.Va.set("Unknown"))}function Ns(t){return t.ma||(t.ma=function(n,r,i){const s=We(n);return s.sa(),new pS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:wS.bind(null,t),Yo:ES.bind(null,t),t_:IS.bind(null,t),J_:TS.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),mh(t)?ph(t):t.Va.set("Unknown")):(await t.ma.stop(),K1(t))})),t.ma}function li(t){return t.fa||(t.fa=function(n,r,i){const s=We(n);return s.sa(),new mS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kS.bind(null,t),t_:RS.bind(null,t),ta:SS.bind(null,t),na:AS.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await mc(t)):(await t.fa.stop(),t.Ta.length>0&&(De(Vi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class gh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Me(xe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vh(t,e){if(xr("AsyncQueue",`${e}: ${t}`),Ps(t))return new Me(xe.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class hs{static emptySet(e){return new hs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Ve.comparator(n.key,r.key):(n,r)=>Ve.comparator(n.key,r.key),this.keyedMap=oo(),this.sortedSet=new Et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zm{constructor(){this.ga=new Et(Ve.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ue(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,i,s,o,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Es(e,n,hs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class NS{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class DS{constructor(){this.queries=Bm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=We(n),s=i.queries;i.queries=Bm(),s.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new Me(xe.ABORTED,"Firestore shutting down"))}}function Bm(){return new ji(t=>v1(t),ac)}async function X1(t,e){const n=We(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new NS,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=vh(o,`Initialization of query '${ts(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&yh(n)}async function Z1(t,e){const n=We(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OS(t,e){const n=We(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ba)a.Fa(i)&&(r=!0);o.wa=i}}r&&yh(n)}function MS(t,e,n){const r=We(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function yh(t){t.Ca.forEach(e=>{e.next()})}var ad,jm;(jm=ad||(ad={})).Ma="default",jm.Cache="cache";class eb{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ad.Cache}}/**
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
 */class tb{constructor(e){this.key=e}}class nb{constructor(e){this.key=e}}class LS{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Xe(),this.mutatedKeys=Xe(),this.eu=y1(e),this.tu=new hs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new zm,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,m)=>{const g=i.get(h),y=lc(this.query,m)?m:null,w=!!g&&this.mutatedKeys.has(g.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let I=!1;g&&y?g.data.isEqual(y.data)?w!==v&&(r.track({type:3,doc:y}),I=!0):this.su(g,y)||(r.track({type:2,doc:y}),I=!0,(l&&this.eu(y,l)>0||d&&this.eu(y,d)<0)&&(a=!0)):!g&&y?(r.track({type:0,doc:y}),I=!0):g&&!y&&(r.track({type:1,doc:g}),I=!0,(l||d)&&(a=!0)),I&&(y?(o=o.add(y),s=v?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:a,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,m)=>function(y,w){const v=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ue(20277,{Vt:I})}};return v(y)-v(w)}(h.type,m.type)||this.eu(h.doc,m.doc)),this.ou(r),i=i??!1;const a=n&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new Es(this.query,e.tu,s,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new zm,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Xe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new nb(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new tb(r))}),n}cu(e){this.Za=e.ks,this.Ya=Xe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Es.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const bh="SyncEngine";class VS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $S{constructor(e){this.key=e,this.hu=!1}}class FS{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ji(a=>v1(a),ac),this.Iu=new Map,this.Eu=new Set,this.Ru=new Et(Ve.comparator),this.Au=new Map,this.Vu=new lh,this.du={},this.mu=new Map,this.fu=ws.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function US(t,e,n=!0){const r=lb(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await rb(r,e,n,!0),i}async function zS(t,e){const n=lb(t);await rb(n,e,!0,!1)}async function rb(t,e,n,r){const i=await oS(t.localStore,Yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await BS(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&H1(t.remoteStore,i),a}async function BS(t,e,n,r,i){t.pu=(m,g,y)=>async function(v,I,C,R){let V=I.view.ru(C);V.Ss&&(V=await Mm(v.localStore,I.query,!1).then(({documents:N})=>I.view.ru(N,V)));const M=R&&R.targetChanges.get(I.targetId),f=R&&R.targetMismatches.get(I.targetId)!=null,G=I.view.applyChanges(V,v.isPrimaryClient,M,f);return Wm(v,I.targetId,G.au),G.snapshot}(t,m,g,y);const s=await Mm(t.localStore,e,!0),o=new LS(e,s.ks),a=o.ru(s.documents),l=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(a,t.isPrimaryClient,l);Wm(t,n,d.au);const h=new VS(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function jS(t,e,n){const r=We(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!ac(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await sd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&hh(r.remoteStore,i.targetId),ld(r,i.targetId)}).catch(Rs)):(ld(r,i.targetId),await sd(r.localStore,i.targetId,!0))}async function qS(t,e){const n=We(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hh(n.remoteStore,r.targetId))}async function WS(t,e,n){const r=XS(t);try{const i=await function(o,a){const l=We(o),d=vt.now(),h=a.reduce((y,w)=>y.add(w.key),Xe());let m,g;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let w=kr(),v=Xe();return l.xs.getEntries(y,h).next(I=>{w=I,w.forEach((C,R)=>{R.isValidDocument()||(v=v.add(C))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,w)).next(I=>{m=I;const C=[];for(const R of a){const V=sk(R,m.get(R.key).overlayedDocument);V!=null&&C.push(new fi(R.key,V,u1(V.value.mapValue),wn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,d,C,a)}).next(I=>{g=I;const C=I.applyToLocalDocumentSet(m,v);return l.documentOverlayCache.saveOverlays(y,I.batchId,C)})}).then(()=>({batchId:g.batchId,changes:_1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let d=o.du[o.currentUser.toKey()];d||(d=new Et(Ye)),d=d.insert(a,l),o.du[o.currentUser.toKey()]=d}(r,i.batchId,n),await la(r,i.changes),await mc(r.remoteStore)}catch(i){const s=vh(i,"Failed to persist write");n.reject(s)}}async function ib(t,e){const n=We(t);try{const r=await rS(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?lt(o.hu,14607):i.removedDocuments.size>0&&(lt(o.hu,42227),o.hu=!1))}),await la(n,r,e)}catch(r){await Rs(r)}}function qm(t,e,n){const r=We(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=We(o);l.onlineState=a;let d=!1;l.queries.forEach((h,m)=>{for(const g of m.ba)g.va(a)&&(d=!0)}),d&&yh(l)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HS(t,e,n){const r=We(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Et(Ve.comparator);o=o.insert(s,nn.newNoDocument(s,Be.min()));const a=Xe().add(s),l=new hc(Be.min(),new Map,new Et(Ye),o,a);await ib(r,l),r.Ru=r.Ru.remove(s),r.Au.delete(e),_h(r)}else await sd(r.localStore,e,!1).then(()=>ld(r,e,n)).catch(Rs)}async function GS(t,e){const n=We(t),r=e.batch.batchId;try{const i=await nS(n.localStore,e);ob(n,r,null),sb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,i)}catch(i){await Rs(i)}}async function KS(t,e,n){const r=We(t);try{const i=await function(o,a){const l=We(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return l.mutationQueue.lookupMutationBatch(d,a).next(m=>(lt(m!==null,37113),h=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>l.localDocuments.getDocuments(d,h))})}(r.localStore,e);ob(r,e,n),sb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,i)}catch(i){await Rs(i)}}function sb(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function ob(t,e,n){const r=We(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||ab(t,r)})}function ab(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(hh(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),_h(t))}function Wm(t,e,n){for(const r of n)r instanceof tb?(t.Vu.addReference(r.key,e),QS(t,r)):r instanceof nb?(De(bh,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||ab(t,r.key)):Ue(19791,{wu:r})}function QS(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(De(bh,"New document in limbo: "+n),t.Eu.add(r),_h(t))}function _h(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Ve(gt.fromString(e)),r=t.fu.next();t.Au.set(r,new $S(n)),t.Ru=t.Ru.insert(n,r),H1(t.remoteStore,new Qr(Yn(rh(n.path)),r,"TargetPurposeLimboResolution",rc.ce))}}async function la(t,e,n){const r=We(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=uh.Es(l.targetId,d);s.push(m)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(l,d){const h=We(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>Ee.forEach(d,g=>Ee.forEach(g.Ts,y=>h.persistence.referenceDelegate.addReference(m,g.targetId,y)).next(()=>Ee.forEach(g.Is,y=>h.persistence.referenceDelegate.removeReference(m,g.targetId,y)))))}catch(m){if(!Ps(m))throw m;De(dh,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const y=h.vs.get(g),w=y.snapshotVersion,v=y.withLastLimboFreeSnapshotVersion(w);h.vs=h.vs.insert(g,v)}}}(r.localStore,s))}async function JS(t,e){const n=We(t);if(!n.currentUser.isEqual(e)){De(bh,"User change. New user:",e.toKey());const r=await B1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new Me(xe.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r.Ns)}}function YS(t,e){const n=We(t),r=n.Au.get(e);if(r&&r.hu)return Xe().add(r.key);{let i=Xe();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const a=n.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function lb(t){const e=We(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ib.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HS.bind(null,e),e.Pu.J_=OS.bind(null,e.eventManager),e.Pu.yu=MS.bind(null,e.eventManager),e}function XS(t){const e=We(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KS.bind(null,e),e}class kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return tS(this.persistence,new Xk,e.initialUser,this.serializer)}Cu(e){return new z1(ch.Vi,this.serializer)}Du(e){return new lS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kl.provider={build:()=>new kl};class ZS extends kl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof Cl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Vk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new z1(r=>Cl.Vi(r,n),this.serializer)}}class cd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JS.bind(null,this.syncEngine),await PS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DS}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=fS(e.databaseInfo);return yS(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new _S(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qm(this.syncEngine,n,0),function(){return $m.v()?new $m:new cS}())}createSyncEngine(e,n){return function(i,s,o,a,l,d,h){const m=new FS(i,s,o,a,l,d);return h&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=We(i);De(Vi,"RemoteStore shutting down."),s.Ea.add(5),await aa(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}cd.provider={build:()=>new cd};/**
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
 */class cb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ci="FirestoreClient";class eA{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=en.UNAUTHENTICATED,this.clientId=Jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{De(ci,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(De(ci,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uu(t,e){t.asyncQueue.verifyOperationInProgress(),De(ci,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await B1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tA(t);De(ci,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Um(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Um(e.remoteStore,i)),t._onlineComponents=e}async function tA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){De(ci,"Using user provided OfflineComponentProvider");try{await uu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===xe.FAILED_PRECONDITION||i.code===xe.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Li("Error using user provided cache. Falling back to memory cache: "+n),await uu(t,new kl)}}else De(ci,"Using default OfflineComponentProvider"),await uu(t,new ZS(void 0));return t._offlineComponents}async function ub(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(De(ci,"Using user provided OnlineComponentProvider"),await Hm(t,t._uninitializedComponentsProvider._online)):(De(ci,"Using default OnlineComponentProvider"),await Hm(t,new cd))),t._onlineComponents}function nA(t){return ub(t).then(e=>e.syncEngine)}async function ud(t){const e=await ub(t),n=e.eventManager;return n.onListen=US.bind(null,e.syncEngine),n.onUnlisten=jS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qS.bind(null,e.syncEngine),n}function rA(t,e,n,r){const i=new cb(r),s=new eb(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>X1(await ud(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Z1(await ud(t),s))}}function iA(t,e,n={}){const r=new ei;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,d){const h=new cb({next:g=>{h.Nu(),o.enqueueAndForget(()=>Z1(s,m)),g.fromCache&&l.source==="server"?d.reject(new Me(xe.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new eb(a,h,{includeMetadataChanges:!0,Ka:!0});return X1(s,m)}(await ud(t),t.asyncQueue,e,n,r)),r.promise}function sA(t,e){const n=new ei;return t.asyncQueue.enqueueAndForget(async()=>WS(await nA(t),e,n)),n.promise}/**
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
 */function db(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const oA="ComponentProvider",Gm=new Map;function aA(t,e,n,r,i){return new kx(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,db(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const hb="firestore.googleapis.com",Km=!0;class Qm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Me(xe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hb,this.ssl=Km}else this.host=e.host,this.ssl=e.ssl??Km;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=U1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Mk)throw new Me(xe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=db(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Me(xe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Me(xe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Me(xe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Me(xe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Me(xe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ox;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Me(xe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gm.get(n);r&&(De(oA,"Removing Datastore"),Gm.delete(n),r.terminate())}(this),Promise.resolve()}}function lA(t,e,n,r={}){var d;t=Jn(t,gc);const i=Cs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(ry(`https://${a}`),iy("Firestore",!0)),s.host!==hb&&s.host!==a&&Li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!ri(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,m;if(typeof r.mockUserToken=="string")h=r.mockUserToken,m=en.MOCK_USER;else{h=fE(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Me(xe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new en(g)}t._authCredentials=new ax(new Xy(h,m))}}/**
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
 */class ca{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ca(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}toJSON(){return{type:Vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ia(n,Vt._jsonSchema))return new Vt(e,r||null,new Ve(gt.fromString(n.referencePath)))}}Vt._jsonSchemaVersion="firestore/documentReference/1.0",Vt._jsonSchema={type:Nt("string",Vt._jsonSchemaVersion),referencePath:Nt("string")};class ti extends ca{constructor(e,n,r){super(e,n,rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new Ve(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function cA(t,e,...n){if(t=wt(t),Zy("collection","path",e),t instanceof gc){const r=gt.fromString(e,...n);return cm(r),new ti(t,null,r)}{if(!(t instanceof Vt||t instanceof ti))throw new Me(xe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(gt.fromString(e,...n));return cm(r),new ti(t.firestore,null,r)}}function vc(t,e,...n){if(t=wt(t),arguments.length===1&&(e=Jd.newId()),Zy("doc","path",e),t instanceof gc){const r=gt.fromString(e,...n);return lm(r),new Vt(t,null,new Ve(r))}{if(!(t instanceof Vt||t instanceof ti))throw new Me(xe.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(gt.fromString(e,...n));return lm(r),new Vt(t.firestore,t instanceof ti?t.converter:null,new Ve(r))}}/**
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
 */const Jm="AsyncQueue";class Ym{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new q1(this,"async_queue_retry"),this._c=()=>{const r=cu();r&&De(Jm,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=cu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ei;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ps(e))throw e;De(Jm,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",Xm(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=gh.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Ue(47125,{Pc:Xm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Xm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class $i extends gc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ym,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ym(e),this._firestoreClient=void 0,await e}}}function uA(t,e){const n=typeof t=="object"?t:$d(),r=typeof t=="string"?t:yl,i=Bi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dE("firestore");s&&lA(i,...s)}return i}function yc(t){if(t._terminated)throw new Me(xe.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dA(t),t._firestoreClient}function dA(t){var r,i,s,o;const e=t._freezeSettings(),n=aA(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new eA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(t._componentsProvider))}/**
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
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Qt.fromBase64String(e))}catch(n){throw new Me(xe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cn(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ia(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:Nt("string",Cn._jsonSchemaVersion),bytes:Nt("string")};/**
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
 */class wh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Me(xe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Eh{constructor(e){this._methodName=e}}/**
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
 */class Zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Me(xe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Me(xe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ye(this._lat,e._lat)||Ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(ia(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:Nt("string",Zn._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ia(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new Me(xe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:Nt("string",On._jsonSchemaVersion),vectorValues:Nt("object")};/**
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
 */const hA=/^__.*__$/;class fA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}class fb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ue(40011,{dataSource:t})}}class Ih{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ih({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Sl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(pb(this.dataSource)&&hA.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class pA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}createContext(e,n,r,i=!1){return new Ih({dataSource:e,methodName:n,targetDoc:r,path:Gt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mb(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new pA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gb(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);Th("Data must be an object, but it was:",o,r);const a=vb(r,o);let l,d;if(s.merge)l=new yn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const m of s.mergeFields){const g=Ho(e,m,n);if(!o.contains(g))throw new Me(xe.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);_b(h,g)||h.push(g)}l=new yn(h),d=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=o.fieldTransforms;return new fA(new fn(a),l,d)}class bc extends Eh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bc}}function mA(t,e,n,r){const i=t.createContext(1,e,n);Th("Data must be an object, but it was:",i,r);const s=[],o=fn.empty();hi(r,(l,d)=>{const h=bb(e,l,n);d=wt(d);const m=i.childContextForFieldPath(h);if(d instanceof bc)s.push(h);else{const g=_c(d,m);g!=null&&(s.push(h),o.set(h,g))}});const a=new yn(s);return new fb(o,a,i.fieldTransforms)}function gA(t,e,n,r,i,s){const o=t.createContext(1,e,n),a=[Ho(e,r,n)],l=[i];if(s.length%2!=0)throw new Me(xe.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Ho(e,s[g])),l.push(s[g+1]);const d=[],h=fn.empty();for(let g=a.length-1;g>=0;--g)if(!_b(d,a[g])){const y=a[g];let w=l[g];w=wt(w);const v=o.childContextForFieldPath(y);if(w instanceof bc)d.push(y);else{const I=_c(w,v);I!=null&&(d.push(y),h.set(y,I))}}const m=new yn(d);return new fb(h,m,o.fieldTransforms)}function _c(t,e){if(yb(t=wt(t)))return Th("Unsupported field value:",e,t),vb(t,e);if(t instanceof Eh)return function(r,i){if(!pb(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=_c(a,i.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=vt.fromDate(r);return{timestampValue:Tl(i.serializer,s)}}if(r instanceof vt){const s=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tl(i.serializer,s)}}if(r instanceof Zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cn)return{bytesValue:N1(i.serializer,r._byteString)};if(r instanceof Vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ah(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof On)return function(o,a){const l=o instanceof On?o.toArray():o;return{mapValue:{fields:{[l1]:{stringValue:c1},[bl]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return ih(a.serializer,h)})}}}}}}(r,i);if(F1(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Yd(r)}`)}(t,e)}function vb(t,e){const n={};return n1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=_c(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof Zn||t instanceof Cn||t instanceof Vt||t instanceof Eh||t instanceof On||F1(t))}function Th(t,e,n){if(!yb(n)||!e1(n)){const r=Yd(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ho(t,e,n){if((e=wt(e))instanceof wh)return e._internalPath;if(typeof e=="string")return bb(t,e);throw Sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const vA=new RegExp("[~\\*/\\[\\]]");function bb(t,e,n){if(e.search(vA)>=0)throw Sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wh(...e.split("."))._internalPath}catch{throw Sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Me(xe.INVALID_ARGUMENT,a+t+l)}function _b(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yA{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[bl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Rt(o.doubleValue));return new On(n)}convertGeoPoint(e){return new Zn(Rt(e.latitude),Rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=si(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=gt.fromString(e);lt($1(r),9688,{name:e});const i=new Bo(r.get(1),r.get(3)),s=new Ve(r.popFirst(5));return i.isEqual(n)||xr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Ch extends yA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}const Zm="@firebase/firestore",eg="4.12.0";/**
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
 */function tg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class wb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ho("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bA extends wb{data(){return super.data()}}/**
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
 */function Eb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Me(xe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Ib(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ni extends wb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ho("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Me(xe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ni._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ni._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ni._jsonSchema={type:Nt("string",Ni._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Za extends Ni{data(e={}){return super.data(e)}}class Di{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Za(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Me(xe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Za(i._firestore,i._userDataWriter,a.doc.key,a.doc,new lo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Za(i._firestore,i._userDataWriter,a.doc.key,a.doc,new lo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,h=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:_A(a.type),doc:l,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Me(xe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Di._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _A(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ue(61501,{type:t})}}/**
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
 */Di._jsonSchemaVersion="firestore/querySnapshot/1.0",Di._jsonSchema={type:Nt("string",Di._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};/**
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
 */class wA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=mb(e)}set(e,n,r){this._verifyNotCommitted();const i=du(e,this._firestore),s=Ib(i.converter,n,r),o=gb(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,wn.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=du(e,this._firestore);let o;return o=typeof(n=wt(n))=="string"||n instanceof wh?gA(this._dataReader,"WriteBatch.update",s._key,n,r,i):mA(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,wn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=du(e,this._firestore);return this._mutations=this._mutations.concat(new dc(n._key,wn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Me(xe.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function du(t,e){if((t=wt(t)).firestore!==e)throw new Me(xe.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function EA(t){t=Jn(t,ca);const e=Jn(t.firestore,$i),n=yc(e),r=new Ch(e);return Eb(t._query),iA(n,t._query).then(i=>new Di(e,r,t,i))}function Tb(t,e,n){t=Jn(t,Vt);const r=Jn(t.firestore,$i),i=Ib(t.converter,e,n),s=mb(r);return xh(r,[gb(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wn.none())])}function IA(t){return xh(Jn(t.firestore,$i),[new dc(t._key,wn.none())])}function TA(t,...e){var d,h,m;t=wt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||tg(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(tg(e[r])){const g=e[r];e[r]=(d=g.next)==null?void 0:d.bind(g),e[r+1]=(h=g.error)==null?void 0:h.bind(g),e[r+2]=(m=g.complete)==null?void 0:m.bind(g)}let s,o,a;if(t instanceof Vt)o=Jn(t.firestore,$i),a=rh(t._key.path),s={next:g=>{e[r]&&e[r](CA(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Jn(t,ca);o=Jn(g.firestore,$i),a=g._query;const y=new Ch(o);s={next:w=>{e[r]&&e[r](new Di(o,y,g,w))},error:e[r+1],complete:e[r+2]},Eb(t._query)}const l=yc(o);return rA(l,a,i,s)}function xh(t,e){const n=yc(t);return sA(n,e)}function CA(t,e,n){const r=n.docs.get(e._key),i=new Ch(t);return new Ni(t,i,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}function xA(t){return t=Jn(t,$i),yc(t),new wA(t,e=>xh(t,e))}(function(e,n=!0){sx(xs),er(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new $i(new lx(r.getProvider("auth-internal")),new dx(o,r.getProvider("app-check-internal")),Sx(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xn(Zm,eg,e),xn(Zm,eg,"esm2020")})();const Cb="@firebase/installations",kh="0.6.20";/**
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
 */const xb=1e4,kb=`w:${kh}`,Sb="FIS_v2",kA="https://firebaseinstallations.googleapis.com/v1",SA=60*60*1e3,AA="installations",RA="Installations";/**
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
 */const PA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fi=new zi(AA,RA,PA);function Ab(t){return t instanceof Un&&t.code.includes("request-failed")}/**
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
 */function Rb({projectId:t}){return`${kA}/projects/${t}/installations`}function Pb(t){return{token:t.token,requestStatus:2,expiresIn:DA(t.expiresIn),creationTime:Date.now()}}async function Nb(t,e){const r=(await e.json()).error;return Fi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Db({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function NA(t,{refreshToken:e}){const n=Db(t);return n.append("Authorization",OA(e)),n}async function Ob(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DA(t){return Number(t.replace("s","000"))}function OA(t){return`${Sb} ${t}`}/**
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
 */async function MA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Rb(t),i=Db(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:Sb,appId:t.appId,sdkVersion:kb},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ob(()=>fetch(r,a));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Pb(d.authToken)}}else throw await Nb("Create Installation",l)}/**
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
 */function Mb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function LA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const VA=/^[cdef][\w-]{21}$/,dd="";function $A(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=FA(t);return VA.test(n)?n:dd}catch{return dd}}function FA(t){return LA(t).substr(0,22)}/**
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
 */function wc(t){return`${t.appName}!${t.appId}`}/**
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
 */const Lb=new Map;function Vb(t,e){const n=wc(t);$b(n,e),UA(n,e)}function $b(t,e){const n=Lb.get(t);if(n)for(const r of n)r(e)}function UA(t,e){const n=zA();n&&n.postMessage({key:t,fid:e}),BA()}let Ai=null;function zA(){return!Ai&&"BroadcastChannel"in self&&(Ai=new BroadcastChannel("[Firebase] FID Change"),Ai.onmessage=t=>{$b(t.data.key,t.data.fid)}),Ai}function BA(){Lb.size===0&&Ai&&(Ai.close(),Ai=null)}/**
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
 */const jA="firebase-installations-database",qA=1,Ui="firebase-installations-store";let hu=null;function Sh(){return hu||(hu=ly(jA,qA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}})),hu}async function Al(t,e){const n=wc(t),i=(await Sh()).transaction(Ui,"readwrite"),s=i.objectStore(Ui),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Vb(t,e.fid),e}async function Fb(t){const e=wc(t),r=(await Sh()).transaction(Ui,"readwrite");await r.objectStore(Ui).delete(e),await r.done}async function Ec(t,e){const n=wc(t),i=(await Sh()).transaction(Ui,"readwrite"),s=i.objectStore(Ui),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Vb(t,a.fid),a}/**
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
 */async function Ah(t){let e;const n=await Ec(t.appConfig,r=>{const i=WA(r),s=HA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WA(t){const e=t||{fid:$A(),registrationStatus:0};return Ub(e)}function HA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KA(t)}:{installationEntry:e}}async function GA(t,e){try{const n=await MA(t,e);return Al(t.appConfig,n)}catch(n){throw Ab(n)&&n.customData.serverCode===409?await Fb(t.appConfig):await Al(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KA(t){let e=await ng(t.appConfig);for(;e.registrationStatus===1;)await Mb(100),e=await ng(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ah(t);return r||n}return e}function ng(t){return Ec(t,e=>{if(!e)throw Fi.create("installation-not-found");return Ub(e)})}function Ub(t){return QA(t)?{fid:t.fid,registrationStatus:0}:t}function QA(t){return t.registrationStatus===1&&t.registrationTime+xb<Date.now()}/**
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
 */async function JA({appConfig:t,heartbeatServiceProvider:e},n){const r=YA(t,n),i=NA(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:kb,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ob(()=>fetch(r,a));if(l.ok){const d=await l.json();return Pb(d)}else throw await Nb("Generate Auth Token",l)}function YA(t,{fid:e}){return`${Rb(t)}/${e}/authTokens:generate`}/**
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
 */async function Rh(t,e=!1){let n;const r=await Ec(t.appConfig,s=>{if(!zb(s))throw Fi.create("not-registered");const o=s.authToken;if(!e&&eR(o))return s;if(o.requestStatus===1)return n=XA(t,e),s;{if(!navigator.onLine)throw Fi.create("app-offline");const a=nR(s);return n=ZA(t,a),a}});return n?await n:r.authToken}async function XA(t,e){let n=await rg(t.appConfig);for(;n.authToken.requestStatus===1;)await Mb(100),n=await rg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Rh(t,e):r}function rg(t){return Ec(t,e=>{if(!zb(e))throw Fi.create("not-registered");const n=e.authToken;return rR(n)?{...e,authToken:{requestStatus:0}}:e})}async function ZA(t,e){try{const n=await JA(t,e),r={...e,authToken:n};return await Al(t.appConfig,r),n}catch(n){if(Ab(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Fb(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Al(t.appConfig,r)}throw n}}function zb(t){return t!==void 0&&t.registrationStatus===2}function eR(t){return t.requestStatus===2&&!tR(t)}function tR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+SA}function nR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function rR(t){return t.requestStatus===1&&t.requestTime+xb<Date.now()}/**
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
 */async function iR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ah(e);return r?r.catch(console.error):Rh(e).catch(console.error),n.fid}/**
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
 */async function sR(t,e=!1){const n=t;return await oR(n),(await Rh(n,e)).token}async function oR(t){const{registrationPromise:e}=await Ah(t);e&&await e}/**
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
 */function aR(t){if(!t||!t.options)throw fu("App Configuration");if(!t.name)throw fu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fu(t){return Fi.create("missing-app-config-values",{valueName:t})}/**
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
 */const Bb="installations",lR="installations-internal",cR=t=>{const e=t.getProvider("app").getImmediate(),n=aR(e),r=Bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uR=t=>{const e=t.getProvider("app").getImmediate(),n=Bi(e,Bb).getImmediate();return{getId:()=>iR(n),getToken:i=>sR(n,i)}};function dR(){er(new Fn(Bb,cR,"PUBLIC")),er(new Fn(lR,uR,"PRIVATE"))}dR();xn(Cb,kh);xn(Cb,kh,"esm2020");/**
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
 */const Rl="analytics",hR="firebase_id",fR="origin",pR=60*1e3,mR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ph="https://www.googletagmanager.com/gtag/js";/**
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
 */const dn=new Zl("@firebase/analytics");/**
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
 */const gR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},En=new zi("analytics","Analytics",gR);/**
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
 */function vR(t){if(!t.startsWith(Ph)){const e=En.create("invalid-gtag-resource",{gtagURL:t});return dn.warn(e.message),""}return t}function jb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function bR(t,e){const n=yR("firebase-js-sdk-policy",{createScriptURL:vR}),r=document.createElement("script"),i=`${Ph}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function _R(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await jb(n)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(a){dn.error(a)}t("config",i,s)}async function ER(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await jb(n);for(const l of o){const d=a.find(m=>m.measurementId===l),h=d&&e[d.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){dn.error(s)}}function IR(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await ER(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await wR(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,d]=o;t("get",a,l,d)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){dn.error(a)}}return i}function TR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=IR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function CR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ph)&&n.src.includes(t))return n;return null}/**
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
 */const xR=30,kR=1e3;class SR{constructor(e={},n=kR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qb=new SR;function AR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function RR(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:AR(n)},i=mR.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw En.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function PR(t,e=qb,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw En.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw En.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new OR;return setTimeout(async()=>{a.abort()},pR),Wb({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Wb(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=qb){var a;const{appId:s,measurementId:o}=t;try{await NR(r,e)}catch(l){if(o)return dn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await RR(t);return i.deleteThrottleMetadata(s),l}catch(l){const d=l;if(!DR(d)){if(i.deleteThrottleMetadata(s),o)return dn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:o};throw l}const h=Number((a=d==null?void 0:d.customData)==null?void 0:a.httpStatus)===503?Ap(n,i.intervalMillis,xR):Ap(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,m),dn.debug(`Calling attemptFetch again in ${h} millis`),Wb(t,m,r,i)}}function NR(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(En.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DR(t){if(!(t instanceof Un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class OR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function MR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function LR(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function VR(){if(Md())try{await Ld()}catch(t){return dn.warn(En.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return dn.warn(En.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $R(t,e,n,r,i,s,o){const a=PR(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&dn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>dn.error(g)),e.push(a);const l=VR().then(g=>{if(g)return r.getId()}),[d,h]=await Promise.all([a,l]);CR(s)||bR(s,d.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[fR]="firebase",m.update=!0,h!=null&&(m[hR]=h),i("config",d.measurementId,m),d.measurementId}/**
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
 */class FR{constructor(e){this.app=e}_delete(){return delete fs[this.app.options.appId],Promise.resolve()}}let fs={},ig=[];const sg={};let pu="dataLayer",UR="gtag",og,Nh,ag=!1;function zR(){const t=[];if(Od()&&t.push("This is a browser extension environment."),sy()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=En.create("invalid-analytics-context",{errorInfo:e});dn.warn(n.message)}}function BR(t,e,n){zR();const r=t.options.appId;if(!r)throw En.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)dn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw En.create("no-api-key");if(fs[r]!=null)throw En.create("already-exists",{id:r});if(!ag){_R(pu);const{wrappedGtag:s,gtagCore:o}=TR(fs,ig,sg,pu,UR);Nh=s,og=o,ag=!0}return fs[r]=$R(t,ig,sg,e,og,pu,n),new FR(t)}function jR(t=$d()){t=wt(t);const e=Bi(t,Rl);return e.isInitialized()?e.getImmediate():qR(t)}function qR(t,e={}){const n=Bi(t,Rl);if(n.isInitialized()){const i=n.getImmediate();if(ri(e,n.getOptions()))return i;throw En.create("already-initialized")}return n.initialize({options:e})}async function WR(){if(Od()||!sy()||!Md())return!1;try{return await Ld()}catch{return!1}}function HR(t,e,n){t=wt(t),LR(Nh,fs[t.app.options.appId],e,n).catch(r=>dn.error(r))}function GR(t,e,n,r){t=wt(t),MR(Nh,fs[t.app.options.appId],e,n,r).catch(i=>dn.error(i))}const lg="@firebase/analytics",cg="0.10.20";function KR(){er(new Fn(Rl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return BR(r,i,n)},"PUBLIC")),er(new Fn("analytics-internal",t,"PRIVATE")),xn(lg,cg),xn(lg,cg,"esm2020");function t(e){try{const n=e.getProvider(Rl).getImmediate();return{logEvent:(r,i,s)=>GR(n,r,i,s),setUserProperties:(r,i)=>HR(n,r,i)}}catch(n){throw En.create("interop-component-reg-failed",{reason:n})}}}KR();const QR={apiKey:"AIzaSyBcbduc3YI8apT4rqL-gCha2v0NFMO__ds",authDomain:"powerpoint-ai-authoring-tool.firebaseapp.com",projectId:"powerpoint-ai-authoring-tool",storageBucket:"powerpoint-ai-authoring-tool.firebasestorage.app",messagingSenderId:"262485353950",appId:"1:262485353950:web:e894909bd1a8c1c2f8a94f",measurementId:"G-F7VD36R6PQ"},Dh=cy(QR);WR().then(t=>{t&&jR(Dh)});const lr=rx(Dh),JR=new fr,YR=new Eo("microsoft.com"),Oh=uA(Dh),Ds=Kl("auth",()=>{const t=ge(null),e=ge(!1);async function n(h){if(h)try{const m=vc(Oh,"users",h.uid);await Tb(m,{email:h.email,displayName:h.displayName||"Unknown User",photoURL:h.photoURL||"",lastActive:new Date().toISOString()},{merge:!0})}catch(m){console.error("Failed to track user activity in Firestore",m)}}HT(lr,h=>{t.value=h,e.value=!0,h&&n(h)});async function r(){try{const h=await Yp(lr,JR);return t.value=h.user,h.user}catch(h){throw console.error("Google Sign-In Error:",h),h}}async function i(){try{const h=await Yp(lr,YR);return t.value=h.user,h.user}catch(h){throw console.error("Microsoft Sign-In Error:",h),h}}async function s(h,m){try{const g=await jT(lr,h,m);return t.value=g.user,g.user}catch(g){throw console.error("Email Sign-In Error:",g),g}}async function o(h,m){try{const g=await BT(lr,h,m);return t.value=g.user,await Kp(g.user),g.user}catch(g){throw console.error("Email Sign-Up Error:",g),g}}async function a(){t.value&&await Kp(t.value)}async function l(){lr.currentUser&&(await lr.currentUser.reload(),t.value=lr.currentUser)}async function d(){try{await GT(lr),t.value=null}catch(h){console.error("Sign-Out Error:",h)}}return{user:t,isAuthReady:e,loginWithGoogle:r,loginWithMicrosoft:i,loginWithEmail:s,signUpWithEmail:o,resendVerification:a,reloadUser:l,logout:d}}),qt=[];for(let t=0;t<256;++t)qt.push((t+256).toString(16).slice(1));function XR(t,e=0){return(qt[t[e+0]]+qt[t[e+1]]+qt[t[e+2]]+qt[t[e+3]]+"-"+qt[t[e+4]]+qt[t[e+5]]+"-"+qt[t[e+6]]+qt[t[e+7]]+"-"+qt[t[e+8]]+qt[t[e+9]]+"-"+qt[t[e+10]]+qt[t[e+11]]+qt[t[e+12]]+qt[t[e+13]]+qt[t[e+14]]+qt[t[e+15]]).toLowerCase()}let mu;const ZR=new Uint8Array(16);function e4(){if(!mu){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");mu=crypto.getRandomValues.bind(crypto)}return mu(ZR)}const t4=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ug={randomUUID:t4};function n4(t,e,n){var i;t=t||{};const r=t.random??((i=t.rng)==null?void 0:i.call(t))??e4();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,XR(r)}function Rn(t,e,n){return ug.randomUUID&&!t?ug.randomUUID():n4(t)}const Ic="elearn_projects",Mh=`${Ic}_anonymous`;function Lh(){return{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif",fontSize:16,headingFont:"Inter, sans-serif"}}function Pl(t=0){return{id:Rn(),title:`Slide ${t+1}`,background:"#ffffff",backgroundType:"color",backgroundGradient:"",backgroundImage:"",elements:[],notes:"",order:t,transition:"none",duration:0}}function gu(t="Untitled Project"){const e=Pl(0);return{id:Rn(),name:t,description:"",thumbnail:"",slides:[e],theme:Lh(),createdAt:Date.now(),updatedAt:Date.now(),version:"1.0",authorName:"",tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0}}}function r4(t,e={}){const n=Hb(t);return{id:Rn(),type:t,x:e.x??100,y:e.y??100,width:e.width??n.width,height:e.height??n.height,rotation:e.rotation??0,zIndex:e.zIndex??1,locked:!1,visible:!0,opacity:e.opacity??1,content:{...n.content||{},...e.content||{}},styles:{...n.styles||{}},interactions:e.interactions||[],animations:e.animations||[]}}function i4(t,e=0){return{id:Rn(),title:t.title||`Slide ${e+1}`,background:t.background||"#ffffff",backgroundType:t.backgroundType||"color",backgroundGradient:t.backgroundGradient||"",backgroundImage:t.backgroundImage||"",elements:(t.elements||[]).map((n,r)=>r4(n.type,{...n,zIndex:n.zIndex??r+1})),notes:t.notes||"",order:e,transition:t.transition||"none",duration:t.duration||0}}function s4(t,e){return{microcourse:{description:"Interactive lesson template",theme:{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#f8f8ff",textColor:"#1a1a2e"},slides:[{title:"Course Intro",background:"#f8f8ff",elements:[{type:"heading",x:80,y:72,width:800,height:84,content:{text:e||"Microcourse: AI in Education",textAlign:"left"}},{type:"text",x:80,y:170,width:760,height:90,content:{text:"Learning objective: understand practical AI use-cases for classrooms and workplace training."}},{type:"button",x:80,y:292,width:180,height:50,content:{label:"Start Lesson",action:"navigate",target:"2"}},{type:"shape",x:700,y:320,width:190,height:130,content:{shapeType:"rectangle",fillColor:"#00c9a7",borderRadius:18}}]},{title:"Knowledge Check",background:"#ffffff",elements:[{type:"heading",x:80,y:44,width:600,height:70,content:{text:"Quick Check",textAlign:"left",fontSize:40}},{type:"quiz",x:80,y:130,width:760,height:330,content:{question:"Which AI feature best supports personalized learning?",options:["Automated attendance only","Adaptive feedback based on learner progress","Static PDF handouts","Manual grading spreadsheets"],correctIndex:1,explanation:"Adaptive feedback tailors support based on learner responses and performance."}}]}]},chromatic:{description:"Modern presentation starter",theme:{primaryColor:"#7c3aed",secondaryColor:"#ec4899",bgColor:"#ffffff",textColor:"#1f1638"},slides:[{title:"Title Slide",backgroundType:"gradient",backgroundGradient:"linear-gradient(135deg, #faf5ff 0%, #fff1f2 100%)",elements:[{type:"heading",x:90,y:130,width:780,height:88,content:{text:e||"Chromatic Presentation",textAlign:"center",fontSize:52}},{type:"text",x:180,y:232,width:600,height:70,content:{text:"A colorful template to introduce your topic with style.",textAlign:"center"}},{type:"button",x:390,y:328,width:180,height:48,content:{label:"Continue",action:"navigate",target:"2",variant:"primary",bgColor:"#7c3aed"}}]}]},branching:{description:"Branching scenario template",theme:{primaryColor:"#2563eb",secondaryColor:"#14b8a6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Decision Point",background:"#f8fafc",elements:[{type:"heading",x:80,y:60,width:740,height:74,content:{text:"Branching Scenario",textAlign:"left"}},{type:"text",x:80,y:150,width:800,height:80,content:{text:"A customer asks for a full refund after the deadline. What do you do first?"}},{type:"button",x:80,y:270,width:290,height:54,content:{label:"Option A: Escalate to manager",action:"navigate",target:"2"}},{type:"button",x:390,y:270,width:290,height:54,content:{label:"Option B: Offer partial credit",action:"navigate",target:"3"}},{type:"hotspot",x:770,y:420,width:66,height:66,content:{icon:"i",popupTitle:"Facilitator Tip",popupContent:"Ask learners why they chose each option before revealing outcomes."}}]}]},flipcards:{description:"Interactive card challenge starter",theme:{primaryColor:"#0891b2",secondaryColor:"#f59e0b",bgColor:"#f0f9ff",textColor:"#0f172a"},slides:[{title:"Flipcards Activity",background:"#f0f9ff",elements:[{type:"heading",x:80,y:58,width:800,height:74,content:{text:"Flipcards Museum",textAlign:"left"}},{type:"text",x:80,y:138,width:780,height:64,content:{text:"Prompt learners to reveal each card and discuss what they discover."}},{type:"shape",x:120,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:380,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:640,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}}]}]},"higher-ed":{description:"Higher education lecture starter",theme:{primaryColor:"#1d4ed8",secondaryColor:"#16a34a",bgColor:"#ffffff",textColor:"#0f172a"},slides:[{title:"Lecture Overview",background:"#ffffff",elements:[{type:"heading",x:80,y:70,width:790,height:80,content:{text:e||"Higher Education",textAlign:"left"}},{type:"text",x:80,y:170,width:780,height:124,content:{text:"Use this deck to define outcomes, introduce key concepts, and include formative checks."}},{type:"button",x:80,y:328,width:190,height:48,content:{label:"Add Agenda",action:"none"}}]}]},complete:{description:"Sentence completion quiz starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#22c55e",bgColor:"#f8f7ff",textColor:"#1a1a2e"},slides:[{title:"Complete the Sentence",background:"#f8f7ff",elements:[{type:"heading",x:80,y:55,width:700,height:76,content:{text:"Complete the sentence",textAlign:"left"}},{type:"quiz",x:80,y:140,width:760,height:330,content:{question:"AI literacy in workplaces improves when teams ______.",options:["Avoid practical tasks","Use AI tools with clear guardrails and practice","Rely only on theory","Stop measuring outcomes"],correctIndex:1,explanation:"Practice with clear policies helps teams use AI safely and effectively."}}]}]},"fill-blanks":{description:"Quiz assessment starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#06b6d4",bgColor:"#ffffff",textColor:"#111827"},slides:[{title:"Quiz Assessment",background:"#ffffff",elements:[{type:"heading",x:80,y:48,width:760,height:76,content:{text:"Fill in the blanks",textAlign:"left"}},{type:"text",x:80,y:126,width:760,height:64,content:{text:"Replace with your own question set and publish in minutes."}},{type:"quiz",x:80,y:196,width:760,height:280,content:{question:"The most important part of a good assessment is ______.",options:["Clear learning objective","Random difficulty","Longer text only","Colorful background"],correctIndex:0,explanation:"Assessments should align clearly with learning objectives."}}]}]},timeline:{description:"Timeline infographic starter",theme:{primaryColor:"#0ea5e9",secondaryColor:"#8b5cf6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Data Timeline",background:"#f8fafc",elements:[{type:"heading",x:80,y:40,width:760,height:74,content:{text:"Data Viz Timeline",textAlign:"left"}},{type:"shape",x:100,y:255,width:760,height:8,content:{shapeType:"rectangle",fillColor:"#0ea5e9",borderRadius:8}},{type:"shape",x:170,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:430,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:690,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"text",x:120,y:290,width:150,height:70,content:{text:`Phase 1
Discovery`,textAlign:"center"}},{type:"text",x:380,y:290,width:150,height:70,content:{text:`Phase 2
Build`,textAlign:"center"}},{type:"text",x:640,y:290,width:150,height:70,content:{text:`Phase 3
Launch`,textAlign:"center"}}]}]}}[t]||{description:"Starter template",theme:Lh(),slides:[{title:e||"New Slide",background:"#ffffff",elements:[]}]}}function Nl(t=null){const e=t?`${Ic}_${t}`:Mh;try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function dg(t,e=null){const n=e?`${Ic}_${e}`:Mh;try{localStorage.setItem(n,JSON.stringify(t))}catch{}}function hg(t=null){const e=t?`${Ic}_${t}`:Mh;try{localStorage.removeItem(e)}catch{}}function Tc(t){return cA(Oh,"users",t,"projects")}function Vh(t){return{...t,description:t.description||"",thumbnail:t.thumbnail||"",slides:Array.isArray(t.slides)?t.slides:[Pl(0)],theme:{...Lh(),...t.theme||{}},createdAt:Number(t.createdAt)||Date.now(),updatedAt:Number(t.updatedAt)||Date.now(),version:t.version||"1.0",authorName:t.authorName||"",tags:Array.isArray(t.tags)?t.tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,...t.settings||{}}}}async function o4(t,e){!t||!(e!=null&&e.id)||await Tb(vc(Tc(t),e.id),Vh(e))}async function a4(t,e){!t||!e||await IA(vc(Tc(t),e))}async function l4(t){if(!t)return;const e=[...Nl(),...Nl(t)];if(!e.length)return;const n=Tc(t),r=await EA(n),i=new Set(r.docs.map(a=>a.id)),s=xA(Oh);let o=!1;e.forEach(a=>{i.has(a.id)||(s.set(vc(n,a.id),Vh(a)),i.add(a.id),o=!0)}),o&&await s.commit(),hg(),hg(t)}const pn=Kl("projects",()=>{const t=Ds(),e=ge([]),n=ge("");let r=null;Bt(()=>{var P;return(P=t.user)==null?void 0:P.uid},async P=>{if(n.value="",r&&(r(),r=null),!P){e.value=Nl();return}e.value=[];try{await l4(P)}catch(O){console.error("Failed to migrate browser projects",O),n.value="Some browser-saved projects could not be migrated to your account."}r=TA(Tc(P),O=>{e.value=O.docs.map(_=>Vh({id:_.id,..._.data()})),dg(e.value,P)},O=>{console.error("Failed to sync account projects",O),n.value="Unable to sync your projects right now.",e.value=Nl(P)})},{immediate:!0,flush:"sync"});const i=Se(()=>[...e.value].sort((P,O)=>O.updatedAt-P.updatedAt));function s(){var P;dg(e.value,((P=t.user)==null?void 0:P.uid)||null)}function o(P){var O;return s(),(O=t.user)!=null&&O.uid?o4(t.user.uid,P).catch(_=>{console.error("Failed to persist project",_),n.value="Unable to save your latest project changes."}):Promise.resolve()}function a(P){var O;return s(),(O=t.user)!=null&&O.uid?a4(t.user.uid,P).catch(_=>{console.error("Failed to delete project",_),n.value="Unable to delete this project from your account."}):Promise.resolve()}function l(P){const O=gu(P);return e.value.push(O),o(O),O}function d(P,O,_=""){const T=s4(P,O),E=gu(O);return E.description=_||T.description||"",E.theme={...E.theme,...T.theme||{}},E.slides=(T.slides||[]).map((Y,ae)=>i4(Y,ae)),E.createdAt=Date.now(),E.updatedAt=Date.now(),e.value.push(E),o(E),E}function h(P){const O=e.value.find(T=>T.id===P);if(!O)return null;const _=JSON.parse(JSON.stringify(O));return _.id=Rn(),_.name=`${_.name} (copy)`,_.createdAt=Date.now(),_.updatedAt=Date.now(),_.slides=_.slides.map(T=>(T.id=Rn(),T.elements=T.elements.map(E=>({...E,id:Rn()})),T)),e.value.push(_),o(_),_}function m(P){const O=e.value.findIndex(_=>_.id===P);O!==-1&&(e.value.splice(O,1),a(P))}function g(P){return e.value.find(O=>O.id===P)||null}function y(P,O){const _=e.value.findIndex(T=>T.id===P);_!==-1&&(e.value[_]={...e.value[_],...O,updatedAt:Date.now()},o(e.value[_]))}function w(P,O=-1){const _=g(P);if(!_)return null;const T=O>=0?O+1:_.slides.length,E=Pl(T);return O>=0?_.slides.splice(O+1,0,E):_.slides.push(E),_.slides.forEach((Y,ae)=>{Y.order=ae}),_.updatedAt=Date.now(),o(_),E}function v(P,O){const _=g(P);if(!_||_.slides.length<=1)return;const T=_.slides.findIndex(E=>E.id===O);T!==-1&&(_.slides.splice(T,1),_.slides.forEach((E,Y)=>{E.order=Y}),_.updatedAt=Date.now(),o(_))}function I(P,O){const _=g(P);if(!_)return null;const T=_.slides.find(ae=>ae.id===O);if(!T)return null;const E=JSON.parse(JSON.stringify(T));E.id=Rn(),E.title=`${E.title} (copy)`;const Y=_.slides.findIndex(ae=>ae.id===O);return _.slides.splice(Y+1,0,E),_.slides.forEach((ae,J)=>{ae.order=J}),_.updatedAt=Date.now(),o(_),E}function C(P,O,_){const T=g(P);if(!T)return;const[E]=T.slides.splice(O,1);T.slides.splice(_,0,E),T.slides.forEach((Y,ae)=>{Y.order=ae}),T.updatedAt=Date.now(),o(T)}function R(P,O,_){const T=g(P);if(!T)return;const E=T.slides.find(Y=>Y.id===O);E&&(Object.assign(E,_),T.updatedAt=Date.now(),o(T))}function V(P,O,_,T={}){const E=g(P);if(!E)return null;const Y=E.slides.find(ie=>ie.id===O);if(!Y)return null;const ae=Y.elements.reduce((ie,ye)=>Math.max(ie,ye.zIndex||0),0),J=Hb(_),ce={id:Rn(),type:_,x:100,y:100,width:J.width,height:J.height,rotation:0,zIndex:ae+1,locked:!1,visible:!0,opacity:1,...J,...T,interactions:[],animations:[]};return Y.elements.push(ce),E.updatedAt=Date.now(),o(E),ce}function M(P,O,_,T){const E=g(P);if(!E)return;const Y=E.slides.find(J=>J.id===O);if(!Y)return;const ae=Y.elements.find(J=>J.id===_);ae&&(Object.assign(ae,T),E.updatedAt=Date.now(),o(E))}function f(P,O,_){const T=g(P);if(!T)return;const E=T.slides.find(ae=>ae.id===O);if(!E)return;const Y=E.elements.findIndex(ae=>ae.id===_);Y!==-1&&(E.elements.splice(Y,1),T.updatedAt=Date.now(),o(T))}function G(P,O,_){const T=g(P);if(!T)return null;const E=T.slides.find(J=>J.id===O);if(!E)return null;const Y=E.elements.find(J=>J.id===_);if(!Y)return null;const ae=JSON.parse(JSON.stringify(Y));return ae.id=Rn(),ae.x+=20,ae.y+=20,ae.zIndex=Y.zIndex+1,E.elements.push(ae),T.updatedAt=Date.now(),o(T),ae}function N(P,O,_,T){const E=g(P);if(!E)return;const Y=E.slides.find(ie=>ie.id===O);if(!Y)return;const ae=Y.elements.find(ie=>ie.id===_);if(!ae)return;const J=Y.elements.map(ie=>ie.zIndex).sort((ie,ye)=>ie-ye),ce=ae.zIndex;if(T==="up"){const ie=J.find(ye=>ye>ce);if(ie!==void 0){const ye=Y.elements.find(re=>re.zIndex===ie);ye&&(ye.zIndex=ce,ae.zIndex=ie)}}else{const ie=[...J].reverse().find(ye=>ye<ce);if(ie!==void 0){const ye=Y.elements.find(re=>re.zIndex===ie);ye&&(ye.zIndex=ce,ae.zIndex=ie)}}E.updatedAt=Date.now(),o(E)}function A(P){const O=g(P);return O?JSON.stringify(O,null,2):null}function x(P){try{const O=JSON.parse(P);return O.id=Rn(),O.name=`${O.name} (imported)`,O.createdAt=Date.now(),O.updatedAt=Date.now(),e.value.push(O),o(O),O}catch{return null}}return{projects:e,sortedProjects:i,syncError:n,createProject:l,createProjectFromTemplate:d,duplicateProject:h,deleteProject:m,getProject:g,updateProject:y,addSlide:w,deleteSlide:v,duplicateSlide:I,reorderSlides:C,updateSlide:R,addElement:V,updateElement:M,deleteElement:f,duplicateElement:G,reorderElement:N,exportProject:A,importProject:x,makeBlankSlide:Pl,makeNewProject:gu}});function Hb(t){const e={text:{width:300,height:80,content:{text:"Click to edit text",fontSize:18,fontFamily:"Inter, sans-serif",fontWeight:"normal",fontStyle:"normal",textDecoration:"none",textAlign:"left",color:"#1a1a2e",lineHeight:1.5,textTransform:"none",letterSpacing:0},styles:{}},heading:{width:500,height:80,content:{text:"Heading",fontSize:36,fontFamily:"Inter, sans-serif",fontWeight:"bold",fontStyle:"normal",textDecoration:"none",textAlign:"center",color:"#1a1a2e",lineHeight:1.2,textTransform:"none",letterSpacing:0},styles:{}},image:{width:300,height:200,content:{src:"",alt:"",objectFit:"cover",borderRadius:0,borderWidth:0,borderColor:"#e2e8f0"},styles:{}},shape:{width:150,height:100,content:{shapeType:"rectangle",fillColor:"#6c47ff",borderColor:"transparent",borderWidth:0,borderRadius:8,opacity:1},styles:{}},button:{width:160,height:48,content:{label:"Click Me",variant:"primary",action:"none",target:"",bgColor:"",textColor:"",borderColor:"",borderRadius:8,fontSize:15,fontWeight:600,fontFamily:"Inter, sans-serif",letterSpacing:0},styles:{}},hotspot:{width:60,height:60,content:{icon:"?",bgColor:"#6c47ff",iconColor:"#ffffff",borderRadius:999,tooltip:"Click to learn more",popupContent:"Add your content here...",popupTitle:"Info",popupBgColor:"#ffffff",popupTextColor:"#1a1a2e"},styles:{}},video:{width:480,height:270,content:{src:"",poster:"",autoplay:!1,controls:!0,loop:!1,muted:!1,objectFit:"cover"},styles:{}},audio:{width:280,height:56,content:{src:"",label:"Audio Player",autoplay:!1,controls:!0,loop:!1,bgColor:"#ede7ff",textColor:"#555555",accentColor:"#6c47ff"},styles:{}},divider:{width:400,height:4,content:{color:"#e2e8f0",thickness:2},styles:{}},quiz:{width:480,height:300,content:{question:"Your question here?",options:["Option A","Option B","Option C","Option D"],correctIndex:0,explanation:"",cardBgColor:"#ffffff",questionColor:"#1a1a2e",accentColor:"#6c47ff"},styles:{}}};return e[t]||e.text}const In=Kl("editor",()=>{const t=ge(null),e=ge(null),n=ge([]),r=ge(null),i=ge("select"),s=ge("rectangle"),o=ge("properties"),a=ge("slides"),l=ge(!1),d=ge(!1),h=ge(!0),m=ge(20),g=ge(!1),y=ge(1),w=ge(!1),v=ge(!1),I=ge(!1),C=ge(null),R=ge(!1),V=ge(!1),M=ge(!0),f=ge(null),G=ge([]),N=ge(-1),A=20,x=ge(!1),P=ge(!1),O=ge(null),_=ge(0),T=ge(0),E=Se(()=>n.value.length===1?n.value[0]:null),Y=Se(()=>n.value.length>0),ae=Se(()=>n.value.length>1);function J(D){t.value=D,n.value=[],G.value=[],N.value=-1,y.value=1}function ce(D){e.value=D,n.value=[]}function ie(D,L=!1){L&&D?n.value.includes(D)?n.value=n.value.filter(z=>z!==D):n.value=[...n.value,D]:n.value=D?[D]:[]}function ye(D){n.value=D}function re(){n.value=[]}function ee(D){i.value=D,D!=="select"&&(n.value=[])}function Ie(D){o.value=D}function we(D){y.value=Math.max(.25,Math.min(3,D))}function te(){we(y.value+.1)}function ue(){we(y.value-.1)}function K(){we(1)}function X(){d.value=!d.value}function me(){h.value=!h.value}function oe(){M.value=!M.value}function _e(D){N.value<G.value.length-1&&G.value.splice(N.value+1),G.value.push(JSON.parse(JSON.stringify(D))),G.value.length>A&&G.value.shift(),N.value=G.value.length-1}function F(){return N.value>0}function q(){return N.value<G.value.length-1}function p(){return F()?(N.value--,JSON.parse(JSON.stringify(G.value[N.value]))):null}function H(){return q()?(N.value++,JSON.parse(JSON.stringify(G.value[N.value]))):null}function B(D){f.value=JSON.parse(JSON.stringify(D))}return{projectId:t,currentSlideId:e,selectedElementIds:n,selectedElementId:E,hoveredElementId:r,activeTool:i,activeShape:s,rightPanelTab:o,leftPanelTab:a,isFullscreen:l,showGrid:d,snapToGrid:h,gridSize:m,showRulers:g,zoomLevel:y,isSaving:w,showExportModal:v,showInteractionEditor:I,interactionElementId:C,showThemeManager:R,showAIPanel:V,showSlidePanel:M,clipboard:f,isDragging:x,isResizing:P,resizeHandle:O,panX:_,panY:T,hasSelection:Y,multiSelection:ae,setProject:J,setCurrentSlide:ce,selectElement:ie,setSelection:ye,clearSelection:re,setActiveTool:ee,setRightPanel:Ie,setZoom:we,zoomIn:te,zoomOut:ue,zoomReset:K,toggleGrid:X,toggleSnap:me,toggleSlidePanel:oe,pushHistory:_e,canUndo:F,canRedo:q,undo:p,redo:H,setClipboard:B}}),Gb=Kl("ai",()=>{const t=ge(localStorage.getItem("ai_api_key")||""),e=ge(localStorage.getItem("ai_provider")||"openai"),n=ge(!1),r=ge(""),i=ge([]);function s(I){t.value=I,localStorage.setItem("ai_api_key",I)}function o(I){e.value=I,localStorage.setItem("ai_provider",I)}async function a(I,C={}){var R;if(!t.value)return v(I,C);n.value=!0,r.value="";try{const V=[{role:"system",content:`You are an expert eLearning content creator. Generate clear, engaging, and educational content. Format output as clean text unless asked for JSON. Context: ${JSON.stringify(C)}`},{role:"user",content:I}],M=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.value}`},body:JSON.stringify({model:"gpt-4o-mini",messages:V,temperature:.7,max_tokens:1500})});if(!M.ok){const N=await M.json();throw new Error(((R=N.error)==null?void 0:R.message)||`HTTP ${M.status}`)}const G=(await M.json()).choices[0].message.content;return i.value.push({prompt:I,result:G,timestamp:Date.now()}),G}catch(V){return r.value=V.message,null}finally{n.value=!1}}async function l(I,C="general",R="",V=""){let M;if(V.trim())M=V.trim();else{const G=R.trim()?`
Additional context: ${R.trim()}`:"",N={intro:"Focus on welcoming learners, stating the purpose, and building motivation.",overview:"Provide a high-level map of all topics to be covered.",concept:"Explain the concept clearly with a definition, how it works, and why it matters.",example:"Present a real-world case study or worked example with outcome.",summary:"Recap the key points covered and reinforce the main message.",callout:"Highlight a single critical insight or action item.",general:"Create a well-structured educational slide with title, key points, and a takeaway."}[C]||"";M=`You are an expert eLearning content creator and visual slide designer.
Create content for a "${C}" eLearning slide about: "${I}".${G}
Instruction: ${N}

Return ONLY a valid JSON object, no markdown:
{
  "title": "Concise, engaging slide title",
  "subtitle": "One-line supporting statement (optional)",
  "bullets": ["Specific point 1 about ${I}", "Specific point 2", "Specific point 3"],
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
- Ensure all content is specific to "${I}" — never use generic placeholders.`}const f=await a(M,{type:"slideContent",slideType:C,topic:I});if(!f)return null;try{return JSON.parse(f.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return{title:I,bullets:[f]}}}async function d(I,C=5,{audience:R="",objective:V="",tone:M="professional",customPrompt:f=""}={}){const G=Math.max(1,Math.min(20,Number(C)||1));let N;if(f.trim())N=f.trim();else{const x=R.trim()?`
Audience: ${R.trim()}`:"",P=V.trim()?`
Learning objective: ${V.trim()}`:"";N=`You are an expert eLearning instructional designer.
Create a complete ${G}-slide deck about "${I}" in a ${M} tone.${x}${P}

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
- Return exactly ${G} slides
- Sequence the deck logically: intro → concept build-up → applied example(s) → summary
- Keep each slide distinct and avoid repeated bullet wording
- Keep bullets concise (3-5 per slide), action-oriented, and specific to "${I}"`}const A=await a(N,{type:"slideDeck",topic:I,slideCount:G,tone:M});if(!A)return null;try{const x=A.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim(),P=JSON.parse(x),O=Array.isArray(P)?P:P==null?void 0:P.slides;return Array.isArray(O)?O.slice(0,G).map((_,T)=>{const E=Array.isArray(_==null?void 0:_.bullets)?_.bullets:typeof(_==null?void 0:_.bullets)=="string"?_.bullets.split(`
`):[];return{title:String((_==null?void 0:_.title)||`${I||"Slide"} ${T+1}`).trim(),subtitle:String((_==null?void 0:_.subtitle)||"").trim(),bullets:E.map(Y=>String(Y||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean),callout:String((_==null?void 0:_.callout)||"").trim(),slideType:String((_==null?void 0:_.slideType)||"general").trim()}}):null}catch{return null}}async function h(I,C=4,{difficulty:R="intermediate",questionType:V="multiple-choice",objective:M="",customPrompt:f=""}={}){if(f.trim()){const O=await a(f.trim(),{type:"quiz",topic:I,count:C,difficulty:R,questionType:V});if(!O)return null;try{return JSON.parse(O.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}const G=V==="true-false"?'Each question must be True/False with exactly 2 options: ["True", "False"]':V==="mixed"?'Mix multiple-choice (4 options) and True/False (2 options: ["True", "False"]) questions roughly 50/50':"Each question must be multiple-choice with exactly 4 distinct options",N={beginner:"Use simple vocabulary. Focus on foundational recall and recognition.",intermediate:"Require some understanding and application of concepts.",advanced:"Challenge deeper understanding, analysis, and critical thinking."}[R]||"",A=M?`
Learning objective: ${M}`:"",x=`You are an expert eLearning instructional designer.
Create exactly ${C} quiz questions about: "${I}".${A}

Difficulty: ${R.charAt(0).toUpperCase()+R.slice(1)} — ${N}
Question type: ${G}

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
- correctIndex is 0-based index into the options array`,P=await a(x,{type:"quiz",topic:I,count:C,difficulty:R,questionType:V});if(!P)return null;try{return JSON.parse(P.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}async function m(I,C="professional"){const R=`Write a ${C} voiceover script for a slide with this content: "${I}".
Keep it concise (30-60 seconds when read aloud). Write naturally as if speaking.`;return a(R,{type:"voiceover",style:C})}async function g(I,C){const R=`Translate the following eLearning content to ${C}. Preserve formatting and educational tone:

${I}`;return a(R,{type:"translation",targetLanguage:C})}async function y(I,C="Make it clearer and more engaging"){const R=`${C}:

${I}`;return a(R,{type:"improve"})}async function w(I){const C=`Generate a detailed image prompt for a corporate or educational slide about: "${I}". 
Make it suitable for AI image generation (like Midjourney or DALL-E). Ensure the prompt specifically asks for a "highly detailed photorealistic image, realistic lighting, photographic style, no text". Be specific about composition and relevance.`;return a(C,{type:"imagePrompt",topic:I})}function v(I,C){const R=C.topic||"this topic",V=Math.max(1,Math.min(20,Number(C.slideCount)||5)),M={slideContent:JSON.stringify({title:C.topic||"Sample Slide",subtitle:`An introduction to ${R}`,bullets:[`${C.topic?C.topic+" covers":"This topic covers"} foundational principles that drive real-world applications`,"Understanding the core components helps in diagnosing and solving complex problems effectively","Best practices ensure safety, efficiency, and long-term performance in this domain"],callout:`Master the fundamentals of ${C.topic||"this subject"} to build a strong professional foundation`,design:{layout:"split",titleAlign:"left",bulletStyle:"check",emphasis:"balanced"}}),slideDeck:JSON.stringify({slides:Array.from({length:V},(f,G)=>{const N=G===0,A=G===V-1;return{title:N?`${R}: Introduction`:A?`${R}: Key Takeaways`:`${R}: Core Idea ${G}`,subtitle:N?`Why ${R} matters`:A?"Summary and next steps":"Building practical understanding",bullets:[`Understand a concrete aspect of ${R}`,"Apply this concept in a practical context","Connect this idea to real-world outcomes"],callout:A?`Use these principles of ${R} to guide decisions and actions.`:"Focus on clarity and practical application.",slideType:N?"intro":A?"summary":"concept"}})}),quiz:JSON.stringify([{question:"Which of the following best describes the core concept of this topic?",options:["It focuses on foundational principles","It applies advanced methodologies","It combines theory with practice","It relies solely on memorization"],correctIndex:2,explanation:"Combining theory with practice is the most effective approach for deep understanding.",difficulty:"intermediate",type:"multiple-choice"},{question:"A learner who understands this topic can apply it to real-world problems.",options:["True","False"],correctIndex:0,explanation:"Understanding foundational concepts enables practical application in real-world scenarios.",difficulty:"intermediate",type:"true-false"},{question:"What is the first step when approaching this subject?",options:["Skip to advanced material","Define key terminology","Practice without understanding","Avoid structured learning"],correctIndex:1,explanation:"Defining key terminology builds the vocabulary needed for deeper comprehension.",difficulty:"beginner",type:"multiple-choice"},{question:"Which strategy leads to the best long-term retention of this material?",options:["Cramming the night before","Spaced repetition and active recall","Reading passively multiple times","Watching videos only"],correctIndex:1,explanation:"Spaced repetition and active recall are scientifically proven to maximize long-term retention.",difficulty:"intermediate",type:"multiple-choice"}]),voiceover:"Welcome to this lesson. In this section, we'll explore the key concepts that will help you understand the topic better. Pay close attention to the main points as we go through them one by one.",translation:`[Translated text for: ${R}]

Las mejores prÃ¡cticas garantizan la seguridad, la eficiencia y el rendimiento a largo plazo en este dominio.`,improve:`Here is a clearer, more engaging version of your text:

Understanding the core components helps you diagnose and solve complex problems much more effectively.`,imagePrompt:`A high-quality, professional, photorealistic image about: "${R}". 8k resolution, highly detailed, realistic lighting, photographic style, suitable for a corporate presentation.`,default:"This is a sample AI-generated response. Configure your OpenAI API key in the AI settings panel to get real responses."};return n.value=!0,new Promise(f=>{setTimeout(()=>{n.value=!1;const G=C.type||"default";f(M[G]||M.default)},1500)})}return{apiKey:t,apiProvider:e,isGenerating:n,lastError:r,generationHistory:i,setApiKey:s,setProvider:o,generate:a,generateSlideContent:l,generateSlideDeck:d,generateQuiz:h,generateVoiceoverScript:m,generateTranslation:g,improveText:y,generateImagePrompt:w}});function Kb({onRequireAuth:t}={}){const e=Yl(),n=Gb(),r=Ds(),i=In(),s=pn(),o=ge(!1),a=ge("quiz"),l=ge(""),d=ge(""),h=ge(""),m=ge(5),g=ge(5),y=ge("intermediate"),w=ge("multiple-choice"),v=ge(""),I=ge(!1),C=Se(()=>{const T=l.value.trim();return T?a.value==="quiz"?`${T} Quiz`:`${T} Slide Deck`:a.value==="quiz"?"AI Quiz Project":"AI Slide Deck"}),R=Se(()=>I.value||n.isGenerating?a.value==="quiz"?"Creating quiz...":"Creating slides...":a.value==="quiz"?"Create quiz project":"Create slide project");function V(T){i.setProject(T),e.push({name:"editor",params:{id:T}})}function M(T="quiz"){a.value=T,l.value="",d.value="",h.value="",m.value=5,g.value=5,y.value="intermediate",w.value="multiple-choice",v.value=""}function f(T,E,Y=1,ae=20){const J=Number.parseInt(T,10);return Number.isNaN(J)?E:Math.max(Y,Math.min(ae,J))}function G(T="quiz",E={}){if(M(T),typeof E.topic=="string"&&(l.value=E.topic.trim()),typeof E.context=="string"&&(d.value=E.context.trim()),typeof E.projectName=="string"&&(h.value=E.projectName.trim()),T==="deck"){m.value=f(E.slideCount,m.value,1,10);return}g.value=f(E.questionCount,g.value,1,10),["beginner","intermediate","advanced"].includes(E.difficulty)&&(y.value=E.difficulty),["multiple-choice","true-false","mixed"].includes(E.questionType)&&(w.value=E.questionType)}function N(T="quiz",E={}){return r.user?(G(T,E),o.value=!0,setTimeout(()=>{var Y;return(Y=document.getElementById("ai-topic-input"))==null?void 0:Y.focus()},50),!0):(t==null||t("signin"),!1)}function A(T=a.value){return T==="quiz"?{primary:"#5b21b6",secondary:"#f59e0b",surface:"#fffaf0",text:"#111827",muted:"#475569",gradient:"linear-gradient(135deg, #faf5ff 0%, #fff7ed 100%)",panel:"#ffffff",accentSoft:"#f3e8ff"}:{primary:"#2563eb",secondary:"#14b8a6",surface:"#f8fbff",text:"#0f172a",muted:"#475569",gradient:"linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%)",panel:"#ffffff",accentSoft:"#dbeafe"}}function x(T){const E=T&&typeof T=="object"?T:{},Y=Array.isArray(E.bullets)?E.bullets:typeof E.bullets=="string"?E.bullets.split(`
`):[];return{title:String(E.title||l.value||"Untitled Slide").trim(),subtitle:String(E.subtitle||"").trim(),bullets:Y.map(ae=>String(ae||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean),callout:String(E.callout||"").trim(),slideType:String(E.slideType||"general").trim()}}function P(T,E,Y,ae=0){const J=x(Y),ce=A("deck"),ie=ae===0||J.slideType==="intro",ye=J.slideType==="summary",re=ie?"AI lesson opener":ye?"AI summary slide":"AI learning slide",ee=J.subtitle?228:196,Ie=Math.min(190+J.bullets.length*14,238),we=ie?174:190,te=ie?"linear-gradient(135deg, #eff6ff 0%, #e0f2fe 48%, #ecfeff 100%)":ye?"linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%)":ce.gradient;s.updateSlide(T,E,{title:J.title,notes:J.callout||"",order:ae,backgroundType:"gradient",backgroundGradient:te,background:ce.surface}),s.addElement(T,E,"shape",{x:720,y:28,width:180,height:180,content:{shapeType:"circle",fillColor:ce.accentSoft,borderColor:"transparent",borderWidth:0,opacity:.9}}),s.addElement(T,E,"shape",{x:760,y:74,width:94,height:94,content:{shapeType:"circle",fillColor:"#ffffff",borderColor:"transparent",borderWidth:0,opacity:.82}}),s.addElement(T,E,"shape",{x:68,y:40,width:148,height:30,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:ce.accentSoft,borderWidth:1,borderRadius:999}}),s.addElement(T,E,"text",{x:92,y:47,width:112,height:16,content:{text:re,fontSize:12,fontWeight:600,textAlign:"left",color:ce.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,letterSpacing:.4,textTransform:"uppercase"}}),s.addElement(T,E,"heading",{x:68,y:86,width:610,height:88,content:{text:J.title,fontSize:ie?38:34,fontWeight:"bold",textAlign:"left",color:ce.text,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),J.subtitle&&s.addElement(T,E,"text",{x:68,y:172,width:590,height:46,content:{text:J.subtitle,fontSize:19,textAlign:"left",color:ce.muted,fontFamily:"Inter, sans-serif",lineHeight:1.45}}),s.addElement(T,E,"shape",{x:68,y:ee-26,width:574,height:Ie,content:{shapeType:"rectangle",fillColor:ce.panel,borderColor:"#dbeafe",borderWidth:1,borderRadius:22}}),J.bullets.length&&s.addElement(T,E,"text",{x:96,y:ee,width:520,height:Math.max(Ie-40,120),content:{text:J.bullets.map(ue=>`• ${ue}`).join(`
`),fontSize:18,textAlign:"left",color:"#1e293b",fontFamily:"Inter, sans-serif",lineHeight:1.8}}),s.addElement(T,E,"shape",{x:676,y:we,width:216,height:ie?240:222,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:ce.accentSoft,borderWidth:1,borderRadius:26}}),s.addElement(T,E,"text",{x:704,y:we+26,width:160,height:20,content:{text:ye?"Wrap-up":"Key takeaway",fontSize:12,fontWeight:700,textAlign:"left",color:ce.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,letterSpacing:.5,textTransform:"uppercase"}}),s.addElement(T,E,"text",{x:704,y:we+62,width:162,height:120,content:{text:J.callout||`Use this slide to anchor discussion around ${l.value||"the topic"}.`,fontSize:18,fontWeight:600,textAlign:"left",color:ce.text,fontFamily:"Inter, sans-serif",lineHeight:1.55}}),s.addElement(T,E,"shape",{x:704,y:we+176,width:110,height:2,content:{shapeType:"rectangle",fillColor:ce.primary,borderColor:"transparent",borderWidth:0,borderRadius:8}}),s.addElement(T,E,"text",{x:68,y:488,width:280,height:20,content:{text:`Generated from: ${l.value}`,fontSize:12,textAlign:"left",color:"#64748b",fontFamily:"Inter, sans-serif",lineHeight:1.3}})}function O(T,E,Y,ae=0,J=1){const ce=A("quiz"),ie=String((Y==null?void 0:Y.question)||`Question ${ae+1}`).trim(),ye=String((Y==null?void 0:Y.explanation)||"").trim(),re=(Y==null?void 0:Y.type)==="true-false"?"True / False":"Multiple choice";s.updateSlide(T,E,{title:`Question ${ae+1}`,notes:ye,order:ae,backgroundType:"gradient",backgroundGradient:ce.gradient,background:ce.surface}),s.addElement(T,E,"shape",{x:70,y:34,width:820,height:472,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#f3e8ff",borderWidth:1,borderRadius:28}}),s.addElement(T,E,"shape",{x:70,y:34,width:820,height:76,content:{shapeType:"rectangle",fillColor:"#faf5ff",borderColor:"transparent",borderWidth:0,borderRadius:28}}),s.addElement(T,E,"shape",{x:92,y:56,width:118,height:26,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#ddd6fe",borderWidth:1,borderRadius:999}}),s.addElement(T,E,"text",{x:114,y:62,width:90,height:14,content:{text:`${re}`,fontSize:11,fontWeight:700,textAlign:"left",color:ce.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,textTransform:"uppercase",letterSpacing:.5}}),s.addElement(T,E,"text",{x:736,y:60,width:116,height:18,content:{text:`${ae+1} / ${J}`,fontSize:16,fontWeight:700,textAlign:"right",color:ce.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),s.addElement(T,E,"heading",{x:92,y:124,width:708,height:56,content:{text:ie,fontSize:29,fontWeight:"bold",textAlign:"left",color:ce.text,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),s.addElement(T,E,"text",{x:92,y:198,width:360,height:20,content:{text:`Choose the best answer for ${l.value}.`,fontSize:14,fontWeight:500,textAlign:"left",color:ce.muted,fontFamily:"Inter, sans-serif",lineHeight:1.35}}),s.addElement(T,E,"quiz",{x:92,y:238,width:776,height:188,content:{question:ie,options:Array.isArray(Y==null?void 0:Y.options)?Y.options:[],correctIndex:typeof(Y==null?void 0:Y.correctIndex)=="number"?Y.correctIndex:0,explanation:ye,cardBgColor:"#ffffff",questionColor:ce.text,accentColor:ce.primary}}),s.addElement(T,E,"shape",{x:92,y:444,width:776,height:42,content:{shapeType:"rectangle",fillColor:"#fff7ed",borderColor:"#fde68a",borderWidth:1,borderRadius:14}}),s.addElement(T,E,"text",{x:112,y:456,width:736,height:18,content:{text:ye||"Add your facilitator explanation here after reviewing the AI-generated answer choices.",fontSize:14,textAlign:"left",color:"#92400e",fontFamily:"Inter, sans-serif",lineHeight:1.4}})}async function _(T={}){var E,Y;if(!l.value.trim()){v.value="Add a topic so the AI has something concrete to generate.";return}I.value=!0,v.value="";try{const ae=h.value.trim()||C.value;if(a.value==="quiz"){const ie=await n.generateQuiz(l.value,g.value,{difficulty:y.value,questionType:w.value,objective:d.value});if(!Array.isArray(ie)||!ie.length)throw new Error(n.lastError||"No quiz content was generated.");const ye=s.createProject(ae);s.updateProject(ye.id,{description:d.value||`AI-generated quiz about ${l.value}`,tags:["ai","quiz"],theme:{...ye.theme,primaryColor:"#5b21b6",secondaryColor:"#f59e0b",bgColor:"#fffaf0",textColor:"#111827"}}),ie.forEach((re,ee)=>{const Ie=ee===0?ye.slides[0]:s.addSlide(ye.id);Ie&&O(ye.id,Ie.id,re,ee,ie.length)}),await((E=T.onSuccess)==null?void 0:E.call(T,ye)),o.value=!1,V(ye.id);return}const J=await n.generateSlideDeck(l.value,m.value,{objective:d.value});if(!Array.isArray(J)||!J.length)throw new Error(n.lastError||"No slide content was generated.");const ce=s.createProject(ae);s.updateProject(ce.id,{description:d.value||`AI-generated slide deck about ${l.value}`,tags:["ai","slides"],theme:{...ce.theme,primaryColor:"#2563eb",secondaryColor:"#14b8a6",bgColor:"#f8fbff",textColor:"#0f172a"}}),J.forEach((ie,ye)=>{const re=ye===0?ce.slides[0]:s.addSlide(ce.id);re&&P(ce.id,re.id,ie,ye)}),await((Y=T.onSuccess)==null?void 0:Y.call(T,ce)),o.value=!1,V(ce.id)}catch(ae){console.error("AI project creation failed",ae),v.value=(ae==null?void 0:ae.message)||"The AI flow failed. Please try again."}finally{I.value=!1}}return{aiStore:n,showAIModal:o,aiMode:a,aiTopic:l,aiContext:d,aiProjectName:h,aiSlideCount:m,aiQuestionCount:g,aiDifficulty:y,aiQuestionType:w,aiCreationError:v,aiSubmitting:I,aiProjectNamePlaceholder:C,aiPrimaryActionLabel:R,openAICreationModal:N,createAIProject:_}}const c4=["aria-label"],u4={key:0,class:"modal-header"},d4={key:0,class:"modal-title"},h4={class:"modal-body"},f4={key:1,class:"modal-footer"},p4={__name:"Modal",props:{title:{type:String,default:""},size:{type:String,default:"md"},showClose:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Td,{to:"body"},[pt(vr,{name:"modal"},{default:bt(()=>[u("div",{class:"modal-overlay",onMousedown:i[1]||(i[1]=Ht(s=>n("close"),["self"]))},[u("div",{class:Fe(["modal-box",`modal-${t.size}`]),role:"dialog","aria-modal":"true","aria-label":t.title||"Dialog"},[t.title||t.showClose?(W(),Q("div",u4,[t.title?(W(),Q("h3",d4,ve(t.title),1)):Re("",!0),t.showClose?(W(),Q("button",{key:1,class:"btn btn-icon modal-close",onClick:i[0]||(i[0]=s=>n("close"))},[...i[2]||(i[2]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[u("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])):Re("",!0)])):Re("",!0),u("div",h4,[Cu(r.$slots,"default",{},void 0,!0)]),r.$slots.footer?(W(),Q("div",f4,[Cu(r.$slots,"footer",{},void 0,!0)])):Re("",!0)],10,c4)],32)]),_:3})]))}},Os=St(p4,[["__scopeId","data-v-417bb59d"]]),m4={class:"ai-create-shell"},g4={class:"ai-mode-grid"},v4={class:"form-group"},y4=["value"],b4={class:"form-group"},_4=["value","placeholder"],w4={class:"form-group"},E4=["value"],I4={class:"ai-config-grid"},T4={key:0,class:"form-group"},C4=["value"],x4={class:"form-group"},k4=["value"],S4={class:"form-group"},A4=["value"],R4={class:"form-group"},P4=["value"],N4={class:"ai-create-note"},D4={key:0,class:"error-msg"},O4=["disabled"],M4={__name:"AIProjectModal",props:{mode:{type:String,default:"quiz"},topic:{type:String,default:""},context:{type:String,default:""},projectName:{type:String,default:""},slideCount:{type:Number,default:5},questionCount:{type:Number,default:5},difficulty:{type:String,default:"intermediate"},questionType:{type:String,default:"multiple-choice"},projectNamePlaceholder:{type:String,default:"AI Project"},primaryActionLabel:{type:String,default:"Create project"},creationError:{type:String,default:""},isSubmitting:{type:Boolean,default:!1},isGenerating:{type:Boolean,default:!1},hasApiKey:{type:Boolean,default:!1}},emits:["close","create","update:mode","update:topic","update:context","update:projectName","update:slideCount","update:questionCount","update:difficulty","update:questionType"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Os,{title:"Create with AI",size:"lg",onClose:i[11]||(i[11]=s=>n("close"))},{footer:bt(()=>[u("button",{class:"btn btn-secondary",onClick:i[9]||(i[9]=s=>n("close"))},"Cancel"),u("button",{class:"btn btn-primary",disabled:t.isSubmitting||t.isGenerating,onClick:i[10]||(i[10]=s=>n("create"))},ve(t.primaryActionLabel),9,O4)]),default:bt(()=>[u("div",m4,[u("div",g4,[u("button",{class:Fe(["ai-mode-card",t.mode==="quiz"&&"active"]),type:"button",onClick:i[0]||(i[0]=s=>n("update:mode","quiz"))},[...i[12]||(i[12]=[u("strong",null,"Quiz project",-1),u("span",null,"Generate question slides learners can answer right away.",-1)])],2),u("button",{class:Fe(["ai-mode-card",t.mode==="deck"&&"active"]),type:"button",onClick:i[1]||(i[1]=s=>n("update:mode","deck"))},[...i[13]||(i[13]=[u("strong",null,"Slide deck",-1),u("span",null,"Create a structured lesson deck from a topic and learning goal.",-1)])],2)]),u("div",v4,[i[14]||(i[14]=u("label",{class:"form-label"},"Topic",-1)),u("input",{id:"ai-topic-input",value:t.topic,class:"input",placeholder:"e.g. Cybersecurity basics for new employees",onInput:i[2]||(i[2]=s=>n("update:topic",s.target.value))},null,40,y4)]),u("div",b4,[i[15]||(i[15]=u("label",{class:"form-label"},"Project name",-1)),u("input",{value:t.projectName,class:"input",placeholder:t.projectNamePlaceholder,onInput:i[3]||(i[3]=s=>n("update:projectName",s.target.value))},null,40,_4)]),u("div",w4,[i[16]||(i[16]=u("label",{class:"form-label"},"Goal or context",-1)),u("textarea",{value:t.context,class:"textarea ai-create-textarea",placeholder:"Explain the audience, learning objective, tone, or any constraints you want the AI to follow.",onInput:i[4]||(i[4]=s=>n("update:context",s.target.value))},null,40,E4)]),u("div",I4,[t.mode==="deck"?(W(),Q("div",T4,[i[18]||(i[18]=u("label",{class:"form-label"},"Slides",-1)),u("select",{value:t.slideCount,class:"ai-select",onChange:i[5]||(i[5]=s=>n("update:slideCount",Number(s.target.value)))},[...i[17]||(i[17]=[u("option",{value:3},"3",-1),u("option",{value:5},"5",-1),u("option",{value:7},"7",-1),u("option",{value:10},"10",-1)])],40,C4)])):(W(),Q(Oe,{key:1},[u("div",x4,[i[20]||(i[20]=u("label",{class:"form-label"},"Questions",-1)),u("select",{value:t.questionCount,class:"ai-select",onChange:i[6]||(i[6]=s=>n("update:questionCount",Number(s.target.value)))},[...i[19]||(i[19]=[u("option",{value:3},"3",-1),u("option",{value:5},"5",-1),u("option",{value:8},"8",-1),u("option",{value:10},"10",-1)])],40,k4)]),u("div",S4,[i[22]||(i[22]=u("label",{class:"form-label"},"Difficulty",-1)),u("select",{value:t.difficulty,class:"ai-select",onChange:i[7]||(i[7]=s=>n("update:difficulty",s.target.value))},[...i[21]||(i[21]=[u("option",{value:"beginner"},"Beginner",-1),u("option",{value:"intermediate"},"Intermediate",-1),u("option",{value:"advanced"},"Advanced",-1)])],40,A4)]),u("div",R4,[i[24]||(i[24]=u("label",{class:"form-label"},"Question type",-1)),u("select",{value:t.questionType,class:"ai-select",onChange:i[8]||(i[8]=s=>n("update:questionType",s.target.value))},[...i[23]||(i[23]=[u("option",{value:"multiple-choice"},"Multiple choice",-1),u("option",{value:"true-false"},"True / False",-1),u("option",{value:"mixed"},"Mixed",-1)])],40,P4)])],64))]),u("p",N4,ve(t.hasApiKey?"Using your configured AI provider.":"No API key configured yet. The built-in sample generator will still create starter content."),1),t.creationError?(W(),Q("p",D4,ve(t.creationError),1)):Re("",!0)])]),_:1}))}},Qb=St(M4,[["__scopeId","data-v-42eed040"]]),L4={class:"auth-modal-body"},V4={class:"auth-title"},$4={class:"auth-message"},F4={class:"auth-mode-toggle"},U4={class:"form-group"},z4=["value"],B4={class:"form-group"},j4=["value"],q4={key:0,class:"auth-error-msg"},W4=["disabled"],H4={class:"auth-provider-list"},G4=["onClick"],K4={class:"provider-name"},Q4={class:"provider-description"},J4={__name:"WorkspaceAuthModal",props:{mode:{type:String,default:"signin"},titleText:{type:String,default:"Welcome back"},messageText:{type:String,default:""},email:{type:String,default:""},password:{type:String,default:""},errorText:{type:String,default:""},isLoading:{type:Boolean,default:!1},providers:{type:Array,default:()=>[]}},emits:["close","submit","provider","update:mode","update:email","update:password"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Os,{title:t.mode==="signin"?"Sign In":"Sign Up",size:"md",onClose:i[5]||(i[5]=s=>n("close"))},{default:bt(()=>[u("div",L4,[i[8]||(i[8]=u("p",{class:"auth-eyebrow"},"Access your workspace",-1)),u("h2",V4,ve(t.titleText),1),u("p",$4,ve(t.messageText),1),u("div",F4,[u("button",{class:Fe(["auth-mode-btn",t.mode==="signin"&&"active"]),type:"button",onClick:i[0]||(i[0]=s=>n("update:mode","signin"))}," Sign In ",2),u("button",{class:Fe(["auth-mode-btn",t.mode==="signup"&&"active"]),type:"button",onClick:i[1]||(i[1]=s=>n("update:mode","signup"))}," Sign Up ",2)]),u("form",{class:"auth-email-form",onSubmit:i[4]||(i[4]=Ht(s=>n("submit"),["prevent"]))},[u("div",U4,[i[6]||(i[6]=u("label",{class:"form-label"},"Email",-1)),u("input",{type:"email",value:t.email,class:"input",placeholder:"you@example.com",required:"",onInput:i[2]||(i[2]=s=>n("update:email",s.target.value))},null,40,z4)]),u("div",B4,[i[7]||(i[7]=u("label",{class:"form-label"},"Password",-1)),u("input",{type:"password",value:t.password,class:"input",placeholder:"••••••••",required:"",minlength:"6",onInput:i[3]||(i[3]=s=>n("update:password",s.target.value))},null,40,j4)]),t.errorText?(W(),Q("div",q4,ve(t.errorText),1)):Re("",!0),u("button",{type:"submit",class:"btn btn-primary auth-submit-btn",disabled:t.isLoading},ve(t.isLoading?"Loading...":t.mode==="signin"?"Sign In with Email":"Sign Up with Email"),9,W4)],32),i[9]||(i[9]=u("div",{class:"auth-divider"},[u("span",null,"or continue with")],-1)),u("div",H4,[(W(!0),Q(Oe,null,it(t.providers,s=>(W(),Q("button",{key:s.id,class:"auth-provider-btn",type:"button",onClick:o=>n("provider",s)},[u("span",K4,ve(s.label),1),u("span",Q4,ve(s.description),1)],8,G4))),128))])])]),_:1},8,["title"]))}},Y4=St(J4,[["__scopeId","data-v-e11e7f59"]]),X4={class:"form-group"},Z4=["value","placeholder"],eP={__name:"ProjectNameModal",props:{title:{type:String,default:"New Project"},value:{type:String,default:""},placeholder:{type:String,default:"e.g. Quiz Assessment"},confirmLabel:{type:String,default:"Create Project"}},emits:["close","confirm","update:value"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Os,{title:t.title,size:"sm",onClose:i[4]||(i[4]=s=>n("close"))},{footer:bt(()=>[u("button",{class:"btn btn-secondary",onClick:i[2]||(i[2]=s=>n("close"))},"Cancel"),u("button",{class:"btn btn-primary",onClick:i[3]||(i[3]=s=>n("confirm"))},ve(t.confirmLabel),1)]),default:bt(()=>[u("div",X4,[i[5]||(i[5]=u("label",{class:"form-label"},"Project Name",-1)),u("input",{id:"project-name-input",value:t.value,class:"input",placeholder:t.placeholder,onInput:i[0]||(i[0]=s=>n("update:value",s.target.value)),onKeydown:i[1]||(i[1]=Nu(s=>n("confirm"),["enter"]))},null,40,Z4)])]),_:1},8,["title"]))}},tP={class:"form-group"},nP=["value"],rP={key:0,class:"error-msg"},iP={__name:"ImportProjectModal",props:{value:{type:String,default:""},errorText:{type:String,default:""}},emits:["close","confirm","update:value"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Os,{title:"Import Project",size:"md",onClose:i[3]||(i[3]=s=>n("close"))},{footer:bt(()=>[u("button",{class:"btn btn-secondary",onClick:i[1]||(i[1]=s=>n("close"))},"Cancel"),u("button",{class:"btn btn-primary",onClick:i[2]||(i[2]=s=>n("confirm"))},"Import")]),default:bt(()=>[u("div",tP,[i[4]||(i[4]=u("label",{class:"form-label"},"Paste Project JSON",-1)),u("textarea",{value:t.value,class:"textarea import-textarea",placeholder:'{"name":"My Project",...}',onInput:i[0]||(i[0]=s=>n("update:value",s.target.value))},null,40,nP)]),t.errorText?(W(),Q("p",rP,ve(t.errorText),1)):Re("",!0)]),_:1}))}},sP=St(iP,[["__scopeId","data-v-563b0b6e"]]),oP={class:"confirm-message"},aP={__name:"ConfirmActionModal",props:{title:{type:String,default:"Confirm action"},message:{type:String,default:""},confirmLabel:{type:String,default:"Continue"},cancelLabel:{type:String,default:"Cancel"},confirmVariant:{type:String,default:"primary"}},emits:["close","confirm"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Os,{title:t.title,size:"sm",onClose:i[2]||(i[2]=s=>n("close"))},{footer:bt(()=>[u("button",{class:"btn btn-secondary",onClick:i[0]||(i[0]=s=>n("close"))},ve(t.cancelLabel),1),u("button",{class:Fe(["btn",t.confirmVariant==="danger"?"btn-danger":"btn-primary"]),onClick:i[1]||(i[1]=s=>n("confirm"))},ve(t.confirmLabel),3)]),default:bt(()=>[u("p",oP,ve(t.message),1)]),_:1},8,["title"]))}},Jb=St(aP,[["__scopeId","data-v-56f017fb"]]),lP={__name:"ProjectDeleteModal",props:{projectName:{type:String,default:""}},emits:["close","confirm"],setup(t,{emit:e}){const n=t,r=e,i=Se(()=>n.projectName?`Delete "${n.projectName}"? This action cannot be undone.`:"Delete this project? This action cannot be undone.");return(s,o)=>(W(),at(Jb,{title:"Delete Project",message:i.value,"confirm-label":"Delete","confirm-variant":"danger",onClose:o[0]||(o[0]=a=>r("close")),onConfirm:o[1]||(o[1]=a=>r("confirm"))},null,8,["message"]))}},cP={class:"market-shell"},uP={class:"left-rail"},dP={class:"rail-nav"},hP={class:"market-main"},fP={key:0,class:"verification-banner"},pP={class:"verification-actions"},mP=["disabled"],gP={id:"home-anchor",class:"hero templates-hero"},vP={class:"hero-top"},yP={key:0,class:"hero-user g-rounded"},bP={class:"user-chip-new"},_P={key:1,class:"hero-user g-rounded"},wP={class:"search-bar-g"},EP={id:"templates-anchor",class:"toolbar-row-g"},IP={class:"chip-list-g"},TP=["onClick"],CP={class:"section-title"},xP={class:"cards-row"},kP=["onClick"],SP={class:"card-type"},AP={class:"card-title"},RP={class:"app-top-nav"},PP={class:"nav-search-bar"},NP={class:"nav-actions"},DP={key:0,class:"user-info-mini"},OP={class:"user-chip"},MP={key:1},LP={key:0,class:"home-container"},VP={class:"home-hero"},$P={class:"home-hero-copy"},FP={class:"home-hero-actions"},UP={class:"home-hero-metrics"},zP={class:"hero-metric-card"},BP={class:"hero-metric-card"},jP={class:"welcome-section"},qP={class:"welcome-title"},WP={class:"quick-actions"},HP={class:"projects-section",style:{"padding-top":"0"}},GP={class:"projects-head",style:{"justify-content":"space-between"}},KP={key:0,class:"project-grid"},QP=["onClick","data-tooltip"],JP={class:"project-name"},YP={class:"project-meta"},XP=["onClick"],ZP={key:1,class:"projects-lock-card"},e5={key:2,class:"projects-lock-card"},t5={key:1,class:"content-container"},n5={class:"projects-section",style:{padding:"0"}},r5={key:0,class:"project-grid"},i5=["onClick","data-tooltip"],s5={class:"project-name"},o5={class:"project-meta"},a5=["onClick"],l5=["onClick"],c5={__name:"DashboardView",setup(t){const e=Dd(),n=Yl(),r=pn(),i=In(),s=Ds(),o=ge(!1),a=ge(!1),l=ge(!1),d=ge(""),h=ge(""),m=ge(""),g=ge(""),y=ge("all"),w=ge("home"),v=ge(null),I=ge("signin"),C=ge(""),R=ge(""),V=ge(""),M=ge(!1),f=Se(()=>s.user?{authTypeLabel:s.user.displayName||s.user.email||"Current User",emailVerified:s.user.emailVerified,email:s.user.email}:null),{aiStore:G,showAIModal:N,aiMode:A,aiTopic:x,aiContext:P,aiProjectName:O,aiSlideCount:_,aiQuestionCount:T,aiDifficulty:E,aiQuestionType:Y,aiCreationError:ae,aiSubmitting:J,aiProjectNamePlaceholder:ce,aiPrimaryActionLabel:ie,openAICreationModal:ye,createAIProject:re}=Kb({onRequireAuth:tt}),ee=["ai","topic","context","name","slides","questions","difficulty","type"],Ie=[{id:"google",label:"Google",description:"Continue with your Google account"},{id:"microsoft",label:"Microsoft",description:"Continue with your Microsoft account"}],we=Se(()=>I.value==="signin"?"Welcome back":"Create your account"),te=Se(()=>I.value==="signin"?"Existing users can sign in with a standard provider.":"New users can sign up with a standard provider."),ue=[{label:"Games and challenges",value:"games"},{label:"Quizzes and Surveys",value:"quizzes"},{label:"Presentations",value:"presentations"},{label:"More",value:"more"}],K=[{id:"microcourse",title:"Microcourse: AI in Education",subtitle:"Interactive lesson",category:"presentations",section:"Teach classes",style:"bg-a"},{id:"chromatic",title:"Chromatic",subtitle:"Presentation",category:"presentations",section:"Teach classes",style:"bg-b"},{id:"branching",title:"Branching Scenario",subtitle:"Scenario practice",category:"games",section:"Teach classes",style:"bg-c"},{id:"flipcards",title:"Flipcards Museum",subtitle:"Game challenge",category:"games",section:"Teach classes",style:"bg-d"},{id:"higher-ed",title:"Higher Education",subtitle:"Presentation",category:"presentations",section:"Boost power skills",style:"bg-e"},{id:"complete",title:"Complete the sentence",subtitle:"Quiz",category:"quizzes",section:"Boost power skills",style:"bg-f"},{id:"fill-blanks",title:"Fill in the blanks",subtitle:"Quiz assessment",category:"quizzes",section:"Boost power skills",style:"bg-g"},{id:"timeline",title:"Data Viz Timeline",subtitle:"Interactive infographic",category:"more",section:"Boost power skills",style:"bg-h"}],X=Se(()=>{const Ce=g.value.trim().toLowerCase();return K.filter(se=>{const Qe=y.value==="all"||se.category===y.value,At=!Ce||se.title.toLowerCase().includes(Ce)||se.subtitle.toLowerCase().includes(Ce);return Qe&&At})}),me=Se(()=>{const Ce=new Map;return X.value.forEach(se=>{Ce.has(se.section)||Ce.set(se.section,[]),Ce.get(se.section).push(se)}),Array.from(Ce.entries()).map(([se,Qe])=>({title:se,cards:Qe}))}),oe=Se(()=>{const Ce=g.value.trim().toLowerCase();return r.sortedProjects.filter(se=>{var Qe;return Ce?se.name.toLowerCase().includes(Ce)||((Qe=se.description)==null?void 0:Qe.toLowerCase().includes(Ce)):!0}).slice(0,8)}),_e=Se(()=>v.value?r.getProject(v.value):null);function F(){if(!f.value){tt("signin");return}d.value="My New Course",o.value=!0,setTimeout(()=>{var Ce;return(Ce=document.getElementById("project-name-input"))==null?void 0:Ce.focus()},50)}function q(){if(!f.value){tt("signin");return}a.value=!0}function p(Ce={}){const se={...e.query};return ee.forEach(Qe=>delete se[Qe]),Object.entries(Ce).forEach(([Qe,At])=>{At==null||At===""||(se[Qe]=String(At))}),se}function H(Ce=e.query,se=Ce.ai){const Qe={topic:typeof Ce.topic=="string"?Ce.topic:"",context:typeof Ce.context=="string"?Ce.context:"",projectName:typeof Ce.name=="string"?Ce.name:""};return se==="deck"?(typeof Ce.slides=="string"&&(Qe.slideCount=Ce.slides),Qe):(typeof Ce.questions=="string"&&(Qe.questionCount=Ce.questions),typeof Ce.difficulty=="string"&&(Qe.difficulty=Ce.difficulty),typeof Ce.type=="string"&&(Qe.questionType=Ce.type),Qe)}function B(Ce="quiz",se={}){n.replace({query:p({ai:Ce,...se})})}function D(){return ee.some(Ce=>Ce in e.query)?n.replace({query:p()}):Promise.resolve()}function L(){N.value=!1,D()}function z(){return re({onSuccess:D})}function U(){if(!d.value.trim())return;const Ce=r.createProject(d.value.trim());o.value=!1,S(Ce.id)}function S(Ce){i.setProject(Ce),n.push({name:"editor",params:{id:Ce}})}function j(Ce){const se=r.createProjectFromTemplate(Ce.id,Ce.title,`${Ce.subtitle} template`);S(se.id)}function ne(Ce){v.value=Ce}function le(){v.value&&(r.deleteProject(v.value),v.value=null)}function fe(Ce){r.duplicateProject(Ce)}function Te(){m.value="";const Ce=r.importProject(h.value);if(!Ce){m.value="Invalid project JSON. Please check and try again.";return}a.value=!1,h.value="",S(Ce.id)}function Pe(Ce){return Ce?new Date(Ce).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}):""}function he(Ce){var se;return((se=Ce.slides)==null?void 0:se.length)||0}function je(Ce){I.value=Ce,V.value="",C.value="",R.value=""}async function rt(){if(!C.value||!R.value){V.value="Please enter both email and password.";return}M.value=!0,V.value="";try{I.value==="signin"?await s.loginWithEmail(C.value,R.value):await s.signUpWithEmail(C.value,R.value),l.value=!1}catch(Ce){console.error("Email Auth Error:",Ce),Ce.code==="auth/email-already-in-use"?V.value="This email is already in use. Try signing in instead.":Ce.code==="auth/wrong-password"||Ce.code==="auth/user-not-found"||Ce.code==="auth/invalid-credential"?V.value="Invalid email or password.":Ce.code==="auth/weak-password"?V.value="Password should be at least 6 characters.":V.value="An error occurred. Please try again."}finally{M.value=!1}}const Ke=ge(!1);async function yt(){Ke.value=!0;try{await s.resendVerification(),alert("Verification email sent! Please check your inbox.")}catch(Ce){console.error(Ce),alert("Failed to send verification email. Please wait a moment and try again.")}finally{Ke.value=!1}}async function Ge(){var Ce;await s.reloadUser(),(Ce=f.value)!=null&&Ce.emailVerified?alert("Thank you! Your email has been verified."):alert("Email not verified yet. Please check your inbox or resend the email.")}async function Jt(Ce){try{V.value="",Ce.id==="google"?await s.loginWithGoogle():Ce.id==="microsoft"&&await s.loginWithMicrosoft(),l.value=!1}catch(se){console.error("Login failed",se)}}function tt(Ce="signin"){I.value=Ce,l.value=!0}Bt(()=>{var Ce;return[e.query.ai,e.query.topic,e.query.context,e.query.name,e.query.slides,e.query.questions,e.query.difficulty,e.query.type,(Ce=s.user)==null?void 0:Ce.uid]},([Ce])=>{const se=Ce==="deck"||Ce==="quiz"?Ce:null;if(!se)return;if(!f.value){tt("signin");return}const Qe=H(e.query,se);(!N.value||A.value!==se)&&ye(se,Qe)},{immediate:!0});async function Ze(){await s.logout(),l.value=!1,I.value="signin"}function It(Ce){(Ce==="community"||Ce==="activity"||Ce==="brand")&&(Ce="home"),w.value=Ce,Ce==="content"&&!f.value&&tt("signin"),!(typeof window>"u")&&requestAnimationFrame(()=>{var se,Qe,At;if(Ce==="templates"){(se=document.getElementById("templates-anchor"))==null||se.scrollIntoView({behavior:"smooth",block:"start"});return}if(Ce==="content"){(Qe=document.getElementById("projects-anchor"))==null||Qe.scrollIntoView({behavior:"smooth",block:"start"});return}(At=document.getElementById("home-anchor"))==null||At.scrollIntoView({behavior:"smooth",block:"start"})})}return(Ce,se)=>{var Qe,At;return W(),Q("div",cP,[u("aside",uP,[se[43]||(se[43]=u("div",{class:"rail-logo"},"MS",-1)),u("nav",dP,[u("button",{class:Fe(["rail-item",w.value==="home"&&"active"]),type:"button",onClick:se[0]||(se[0]=ke=>It("home")),"data-tooltip":"Go to home","data-tooltip-position":"right"},[...se[37]||(se[37]=[u("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[u("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),u("polyline",{points:"9 22 9 12 15 12 15 22"})],-1),Ne(" Home ",-1)])],2),u("button",{class:Fe(["rail-item",w.value==="content"&&"active"]),type:"button",onClick:se[1]||(se[1]=ke=>It("content")),"data-tooltip":"View your content","data-tooltip-position":"right"},[...se[38]||(se[38]=[un('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b29df973><rect width="18" height="18" x="3" y="3" rx="2" ry="2" data-v-b29df973></rect><path d="M7 7h10" data-v-b29df973></path><path d="M7 12h10" data-v-b29df973></path><path d="M7 17h10" data-v-b29df973></path></svg> Content ',2)])],2),u("button",{class:Fe(["rail-item",w.value==="templates"&&"active"]),type:"button",onClick:se[2]||(se[2]=ke=>It("templates")),"data-tooltip":"Browse templates","data-tooltip-position":"right"},[...se[39]||(se[39]=[un('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b29df973><rect width="7" height="9" x="3" y="3" rx="1" data-v-b29df973></rect><rect width="7" height="5" x="14" y="3" rx="1" data-v-b29df973></rect><rect width="7" height="9" x="14" y="12" rx="1" data-v-b29df973></rect><rect width="7" height="5" x="3" y="16" rx="1" data-v-b29df973></rect></svg> Templates ',2)])],2),u("button",{class:"rail-item",type:"button",onClick:se[3]||(se[3]=ke=>It("community")),"data-tooltip":"Community coming soon","data-tooltip-position":"right"},[...se[40]||(se[40]=[un('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b29df973><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-v-b29df973></path><circle cx="9" cy="7" r="4" data-v-b29df973></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-v-b29df973></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-v-b29df973></path></svg> Community ',2)])]),u("button",{class:"rail-item",type:"button",onClick:se[4]||(se[4]=ke=>It("activity")),"data-tooltip":"Activity coming soon","data-tooltip-position":"right"},[...se[41]||(se[41]=[u("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[u("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})],-1),Ne(" Activity ",-1)])]),u("button",{class:"rail-item",type:"button",onClick:se[5]||(se[5]=ke=>It("brand")),"data-tooltip":"Brand kit coming soon","data-tooltip-position":"right"},[...se[42]||(se[42]=[u("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[u("path",{d:"M12 2v20"}),u("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})],-1),Ne(" Brand kit ",-1)])])])]),u("main",hP,[f.value&&!f.value.emailVerified?(W(),Q("div",fP,[u("span",null,[se[44]||(se[44]=Ne("Please verify your email address (",-1)),u("strong",null,ve(f.value.email),1),se[45]||(se[45]=Ne(") to secure your account and unlock all features.",-1))]),u("div",pP,[u("button",{class:"btn btn-primary btn-sm",onClick:Ge},"I've verified my email"),u("button",{class:"btn btn-secondary btn-sm",onClick:yt,disabled:Ke.value},ve(Ke.value?"Sending...":"Resend Email"),9,mP)])])):Re("",!0),w.value==="templates"?(W(),Q(Oe,{key:1},[u("section",gP,[u("div",vP,[f.value?(W(),Q("div",yP,[u("span",bP,ve(f.value.authTypeLabel),1),u("button",{class:"btn btn-ghost-text",type:"button",onClick:Ze},"Sign out")])):(W(),Q("div",_P,[u("button",{class:"btn btn-ghost-text",type:"button",onClick:se[6]||(se[6]=ke=>tt("signin"))},"Log In"),u("button",{class:"btn btn-ghost-text",type:"button",onClick:se[7]||(se[7]=ke=>tt("signup"))},"Sign Up")])),u("div",{class:"hero-actions"},[se[46]||(se[46]=u("button",{class:"btn g-premium-btn"},[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[u("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),Ne(" Upgrade to Premium ")],-1)),u("button",{class:"btn g-outline-btn",onClick:q,"data-tooltip":"Import a project"},"Import")])]),se[48]||(se[48]=u("h1",{class:"hero-title-g"},"Choose how to create",-1)),u("div",wP,[ht(u("input",{"onUpdate:modelValue":se[8]||(se[8]=ke=>g.value=ke),class:"search-input-g",placeholder:"Describe what you're looking for"},null,512),[[Mt,g.value]]),se[47]||(se[47]=u("button",{class:"search-btn-g",type:"button","aria-label":"Search"},[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"2"},[u("circle",{cx:"11",cy:"11",r:"8"}),u("path",{d:"m21 21-4.35-4.35"})])],-1))])]),u("section",EP,[u("div",IP,[u("button",{class:Fe(["chip-g",y.value==="all"&&"active"]),onClick:se[9]||(se[9]=ke=>y.value="all"),type:"button"},"All",2),(W(),Q(Oe,null,it(ue,ke=>u("button",{key:ke.value,class:Fe(["chip-g",y.value===ke.value&&"active"]),onClick:Tt=>y.value=ke.value,type:"button"},ve(ke.label),11,TP)),64))]),u("button",{class:"btn g-outline-btn ai-btn-g",type:"button",onClick:se[10]||(se[10]=ke=>B("quiz"))},[...se[49]||(se[49]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[u("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})],-1),Ne(" Create quiz with AI ",-1)])])]),(W(!0),Q(Oe,null,it(me.value,ke=>(W(),Q("section",{key:ke.title,class:"template-section"},[u("h2",CP,ve(ke.title),1),u("div",xP,[(W(!0),Q(Oe,null,it(ke.cards,Tt=>(W(),Q("article",{key:Tt.id,class:Fe(["market-card",Tt.style]),onClick:rr=>j(Tt)},[se[50]||(se[50]=un('<div class="hover-overlay" data-v-b29df973></div><div class="action-icon" data-v-b29df973><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-b29df973><line x1="12" y1="5" x2="12" y2="19" data-v-b29df973></line><line x1="5" y1="12" x2="19" y2="12" data-v-b29df973></line></svg></div>',2)),u("span",SP,ve(Tt.subtitle),1),u("h3",AP,ve(Tt.title),1)],10,kP))),128))])]))),128))],64)):Re("",!0),w.value==="home"||w.value==="content"?(W(),Q(Oe,{key:2},[u("header",RP,[u("div",PP,[se[51]||(se[51]=u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"11",cy:"11",r:"8"}),u("path",{d:"m21 21-4.35-4.35"})],-1)),ht(u("input",{"onUpdate:modelValue":se[11]||(se[11]=ke=>g.value=ke),placeholder:"Search templates and creations"},null,512),[[Mt,g.value]])]),u("div",NP,[se[52]||(se[52]=u("button",{class:"btn btn-secondary btn-sm",style:{color:"#d97706","border-color":"rgba(217,119,6,0.3)",background:"#fffbeb"}},[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[u("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),Ne(" Upgrade to Premium ")],-1)),f.value?(W(),Q("div",DP,[u("span",OP,ve(f.value.authTypeLabel),1),u("div",{class:"user-actions-mini"},[u("button",{class:"btn btn-secondary btn-sm",type:"button",onClick:Ze},"Log out"),u("button",{class:"btn btn-primary btn-sm",onClick:F},"Create course")])])):(W(),Q("div",MP,[u("button",{class:"btn btn-secondary btn-sm",onClick:se[12]||(se[12]=ke=>tt("signin"))},"Sign In")]))])]),w.value==="home"?(W(),Q("div",LP,[u("section",VP,[se[57]||(se[57]=u("div",{class:"home-hero-pattern"},null,-1)),se[58]||(se[58]=u("div",{class:"home-hero-glow home-hero-glow-left"},null,-1)),se[59]||(se[59]=u("div",{class:"home-hero-glow home-hero-glow-right"},null,-1)),u("div",$P,[se[54]||(se[54]=u("span",{class:"home-hero-kicker"},"Featured challenge",-1)),se[55]||(se[55]=u("h1",{class:"home-hero-title"},"Build interactions that feel alive.",-1)),se[56]||(se[56]=u("p",{class:"home-hero-text"}," Design drag-and-drop lessons, branching slides, and quick knowledge checks with a workspace that feels built for fast iteration. ",-1)),u("div",FP,[u("button",{class:"btn btn-primary btn-lg",onClick:F,"data-tooltip":"Create a new project from scratch"},"Start a new course"),u("button",{class:"btn home-hero-secondary",onClick:se[13]||(se[13]=ke=>It("templates")),"data-tooltip":"Open the templates library"},"Browse templates")]),u("div",UP,[u("div",zP,[u("strong",null,ve(oe.value.length||0),1),se[53]||(se[53]=u("span",null,"projects in motion",-1))]),u("div",BP,[u("strong",null,ve(f.value?"Ready":"Guest"),1),u("span",null,ve(f.value?"workspace synced":"sign in to sync"),1)])])]),se[60]||(se[60]=un('<div class="home-hero-visual" aria-hidden="true" data-v-b29df973><div class="hero-preview-card hero-preview-main" data-v-b29df973><span class="preview-badge" data-v-b29df973>Drag and drop</span><div class="preview-line preview-line-lg" data-v-b29df973></div><div class="preview-line preview-line-md" data-v-b29df973></div><div class="preview-dropzones" data-v-b29df973><span data-v-b29df973></span><span data-v-b29df973></span><span data-v-b29df973></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-quiz" data-v-b29df973><span class="preview-dot" data-v-b29df973></span><div class="preview-line preview-line-sm" data-v-b29df973></div><div class="preview-pill-row" data-v-b29df973><span data-v-b29df973></span><span data-v-b29df973></span><span data-v-b29df973></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-media" data-v-b29df973><div class="preview-media" data-v-b29df973></div><div class="preview-line preview-line-sm" data-v-b29df973></div></div></div>',1))]),u("div",jP,[u("h2",qP," Hi, "+ve(((Qe=f.value)==null?void 0:Qe.authTypeLabel.split(" ")[0])||"Creator")+" 👋 What are you going to create today? ",1),u("div",WP,[u("button",{class:"quick-btn",onClick:F,"data-tooltip":"Start with a blank project"},[...se[61]||(se[61]=[u("span",{class:"q-icon",style:{color:"var(--color-primary)"}},"+",-1),Ne(" Create scratch project",-1)])]),u("button",{class:"quick-btn quick-btn-ai",onClick:se[14]||(se[14]=ke=>B("quiz")),"data-tooltip":"Generate a quiz project with AI"},[...se[62]||(se[62]=[u("span",{class:"q-icon",style:{color:"#7c3aed"}},"✦",-1),Ne(" Create quiz with AI",-1)])]),u("button",{class:"quick-btn quick-btn-deck",onClick:se[15]||(se[15]=ke=>B("deck")),"data-tooltip":"Generate a lesson deck with AI"},[...se[63]||(se[63]=[u("span",{class:"q-icon",style:{color:"#0284c7"}},"◫",-1),Ne(" Create slides with AI",-1)])]),u("button",{class:"quick-btn",onClick:se[16]||(se[16]=ke=>It("templates")),"data-tooltip":"Use a game template"},[...se[64]||(se[64]=[u("span",{class:"q-icon",style:{color:"var(--color-secondary)"}},"🎮",-1),Ne(" Create a game",-1)])]),u("button",{class:"quick-btn",onClick:se[17]||(se[17]=ke=>It("templates")),"data-tooltip":"Use a presentation template"},[...se[65]||(se[65]=[u("span",{class:"q-icon",style:{color:"var(--color-success)"}},"📱",-1),Ne(" Create a presentation",-1)])])])]),u("section",HP,[u("div",GP,[se[66]||(se[66]=u("h2",{class:"section-title"},"Pick up where you left off",-1)),u("button",{class:"btn btn-ghost btn-sm",onClick:se[18]||(se[18]=ke=>It("content"))},"Go to My Content ›")]),f.value&&oe.value.length?(W(),Q("div",KP,[(W(!0),Q(Oe,null,it(oe.value.slice(0,4),ke=>(W(),Q("article",{key:ke.id,class:"project-card",onClick:Tt=>S(ke.id),"data-tooltip":`Open ${ke.name}`},[u("div",JP,ve(ke.name),1),u("p",YP,ve(he(ke))+" slides · "+ve(Pe(ke.updatedAt)),1),u("div",{class:"project-actions",onClick:se[19]||(se[19]=Ht(()=>{},["stop"]))},[u("button",{class:"btn btn-ghost btn-sm",onClick:Tt=>fe(ke.id)},"Duplicate",8,XP)])],8,QP))),128))])):f.value?(W(),Q("div",e5,[...se[68]||(se[68]=[u("p",null,"You haven't created any projects yet. Start by creating a project from scratch or a template.",-1)])])):(W(),Q("div",ZP,[...se[67]||(se[67]=[u("p",null,"Sign in to see your recent projects.",-1)])]))])])):Re("",!0),w.value==="content"?(W(),Q("div",t5,[se[70]||(se[70]=u("div",{class:"content-header-row"},[u("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[u("div",{class:"content-icon"},"💿"),u("h1",{style:{"font-size":"28px","font-weight":"700"}},"My content")])],-1)),u("div",n5,[f.value?(W(),Q("div",r5,[u("article",{class:"project-card create-new-card",onClick:F,"data-tooltip":"Create a project"},[...se[69]||(se[69]=[u("div",{class:"create-circle"},"+",-1),u("div",{class:"create-text"},"Create new project",-1)])]),(W(!0),Q(Oe,null,it(oe.value,ke=>(W(),Q("article",{key:ke.id,class:"project-card",onClick:Tt=>S(ke.id),"data-tooltip":`Open ${ke.name}`},[u("div",s5,ve(ke.name),1),u("p",o5,ve(he(ke))+" slides · "+ve(Pe(ke.updatedAt)),1),u("div",{class:"project-actions",onClick:se[20]||(se[20]=Ht(()=>{},["stop"]))},[u("button",{class:"btn btn-ghost btn-sm",onClick:Tt=>fe(ke.id)},"Duplicate",8,a5),u("button",{class:"btn btn-ghost btn-sm",onClick:Tt=>ne(ke.id),style:{color:"var(--color-danger)"}},"Delete",8,l5)])],8,i5))),128))])):Re("",!0)])])):Re("",!0)],64)):Re("",!0)]),l.value?(W(),at(Y4,{key:0,mode:I.value,"title-text":we.value,"message-text":te.value,email:C.value,password:R.value,"error-text":V.value,"is-loading":M.value,providers:Ie,onClose:se[21]||(se[21]=ke=>l.value=!1),onSubmit:rt,onProvider:Jt,"onUpdate:mode":je,"onUpdate:email":se[22]||(se[22]=ke=>C.value=ke),"onUpdate:password":se[23]||(se[23]=ke=>R.value=ke)},null,8,["mode","title-text","message-text","email","password","error-text","is-loading"])):Re("",!0),o.value?(W(),at(eP,{key:1,title:"New Project",value:d.value,placeholder:"e.g. Quiz Assessment","confirm-label":"Create Project",onClose:se[24]||(se[24]=ke=>o.value=!1),onConfirm:U,"onUpdate:value":se[25]||(se[25]=ke=>d.value=ke)},null,8,["value"])):Re("",!0),a.value?(W(),at(sP,{key:2,value:h.value,"error-text":m.value,onClose:se[26]||(se[26]=ke=>a.value=!1),onConfirm:Te,"onUpdate:value":se[27]||(se[27]=ke=>h.value=ke)},null,8,["value","error-text"])):Re("",!0),be(N)?(W(),at(Qb,{key:3,mode:be(A),topic:be(x),context:be(P),"project-name":be(O),"slide-count":be(_),"question-count":be(T),difficulty:be(E),"question-type":be(Y),"project-name-placeholder":be(ce),"primary-action-label":be(ie),"creation-error":be(ae),"is-submitting":be(J),"is-generating":be(G).isGenerating,"has-api-key":!!be(G).apiKey,onClose:L,onCreate:z,"onUpdate:mode":se[28]||(se[28]=ke=>A.value=ke),"onUpdate:topic":se[29]||(se[29]=ke=>x.value=ke),"onUpdate:context":se[30]||(se[30]=ke=>P.value=ke),"onUpdate:projectName":se[31]||(se[31]=ke=>O.value=ke),"onUpdate:slideCount":se[32]||(se[32]=ke=>_.value=ke),"onUpdate:questionCount":se[33]||(se[33]=ke=>T.value=ke),"onUpdate:difficulty":se[34]||(se[34]=ke=>E.value=ke),"onUpdate:questionType":se[35]||(se[35]=ke=>Y.value=ke)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key"])):Re("",!0),v.value?(W(),at(lP,{key:4,"project-name":((At=_e.value)==null?void 0:At.name)||"",onClose:se[36]||(se[36]=ke=>v.value=null),onConfirm:le},null,8,["project-name"])):Re("",!0)])}}},u5=St(c5,[["__scopeId","data-v-b29df973"]]);function d5(t){function e(n){var a,l,d,h,m,g,y,w,v,I,C,R,V,M,f,G,N;const r=n.ctrlKey||n.metaKey,i=n.key.toLowerCase(),s=n.target.tagName.toLowerCase(),o=s==="input"||s==="textarea"||n.target.isContentEditable;o&&r&&["c","v","x","a","z","y"].includes(i)||(r&&i==="z"&&!n.shiftKey?(n.preventDefault(),(a=t.undo)==null||a.call(t)):r&&(i==="y"||i==="z"&&n.shiftKey)?(n.preventDefault(),(l=t.redo)==null||l.call(t)):r&&i==="c"?(n.preventDefault(),(d=t.copy)==null||d.call(t)):r&&i==="v"?(n.preventDefault(),(h=t.paste)==null||h.call(t)):r&&i==="x"?(n.preventDefault(),(m=t.cut)==null||m.call(t)):r&&i==="d"?(n.preventDefault(),(g=t.duplicate)==null||g.call(t)):r&&i==="a"?(n.preventDefault(),(y=t.selectAll)==null||y.call(t)):i==="delete"||i==="backspace"?o||(n.preventDefault(),(w=t.delete)==null||w.call(t)):i==="escape"?(v=t.escape)==null||v.call(t):r&&i==="g"?(n.preventDefault(),(I=t.toggleGrid)==null||I.call(t)):r&&i==="="||r&&i==="+"?(n.preventDefault(),(C=t.zoomIn)==null||C.call(t)):r&&i==="-"?(n.preventDefault(),(R=t.zoomOut)==null||R.call(t)):r&&i==="0"?(n.preventDefault(),(V=t.zoomReset)==null||V.call(t)):i==="arrowleft"?(M=t.nudge)==null||M.call(t,-1,0):i==="arrowright"?(f=t.nudge)==null||f.call(t,1,0):i==="arrowup"?(G=t.nudge)==null||G.call(t,0,-1):i==="arrowdown"&&((N=t.nudge)==null||N.call(t,0,1)))}Yo(()=>window.addEventListener("keydown",e)),Xo(()=>window.removeEventListener("keydown",e))}const h5={class:"slide-panel"},f5={class:"slide-panel-header"},p5={class:"slide-count"},m5={class:"slides-list"},g5=["onClick","onContextmenu","onDragstart","onDrop"],v5={class:"slide-number"},y5={class:"slide-footer"},b5={class:"slide-title"},_5=["onClick"],w5={__name:"SlidePanel",setup(t){const e=In(),n=pn(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var M,f;return((f=(M=r.value)==null?void 0:M.slides)==null?void 0:f.slice().sort((G,N)=>G.order-N.order))||[]}),s=ge({show:!1,x:0,y:0,slideId:null});function o(M){e.setCurrentSlide(M)}function a(){const M=i.value.findIndex(G=>G.id===e.currentSlideId),f=n.addSlide(e.projectId,M);f&&e.setCurrentSlide(f.id)}function l(M){var N,A;const f=i.value.findIndex(x=>x.id===M);n.deleteSlide(e.projectId,M);const G=((N=r.value)==null?void 0:N.slides)||[];if(G.length>0){const x=G.slice().sort((O,_)=>O.order-_.order),P=Math.min(f,x.length-1);e.setCurrentSlide((A=x[P])==null?void 0:A.id)}}function d(M,f){M.preventDefault(),s.value={show:!0,x:M.clientX,y:M.clientY,slideId:f},setTimeout(()=>window.addEventListener("click",h,{once:!0}),0)}function h(){s.value.show=!1}function m(){const M=n.duplicateSlide(e.projectId,s.value.slideId);M&&e.setCurrentSlide(M.id),h()}function g(){l(s.value.slideId),h()}function y(M,f){M.stopPropagation(),l(f)}function w(){const M=i.value.findIndex(f=>f.id===s.value.slideId);M>0&&n.reorderSlides(e.projectId,M,M-1),h()}function v(){const M=i.value.findIndex(f=>f.id===s.value.slideId);M<i.value.length-1&&n.reorderSlides(e.projectId,M,M+1),h()}let I=-1;function C(M,f){I=f,M.dataTransfer.effectAllowed="move"}function R(M,f){M.preventDefault(),I!==-1&&I!==f&&n.reorderSlides(e.projectId,I,f),I=-1}function V(M){return M.backgroundType==="gradient"&&M.backgroundGradient?{background:M.backgroundGradient}:M.backgroundType==="image"&&M.backgroundImage?{backgroundImage:`url(${M.backgroundImage})`,backgroundSize:"cover"}:{background:M.background||"#fff"}}return(M,f)=>(W(),Q("div",h5,[u("div",f5,[f[2]||(f[2]=u("span",{class:"panel-section-title"},"Slides",-1)),u("span",p5,ve(i.value.length),1),u("button",{class:"btn btn-icon add-slide-btn",onClick:a,"data-tooltip":"Add slide","aria-label":"Add slide"},[...f[1]||(f[1]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[u("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),u("div",m5,[(W(!0),Q(Oe,null,it(i.value,(G,N)=>(W(),Q("div",{key:G.id,class:Fe(["slide-thumb-item",be(e).currentSlideId===G.id&&"active"]),draggable:"true",onClick:A=>o(G.id),onContextmenu:A=>d(A,G.id),onDragstart:A=>C(A,N),onDragover:f[0]||(f[0]=Ht(()=>{},["prevent"])),onDrop:A=>R(A,N)},[u("div",v5,ve(N+1),1),u("div",{class:"slide-thumb",style:ze(V(G))},[(W(!0),Q(Oe,null,it(G.elements.slice(0,6),A=>{var x,P;return W(),Q("div",{key:A.id,class:"mini-element",style:ze({left:A.x/960*100+"%",top:A.y/540*100+"%",width:A.width/960*100+"%",height:A.height/540*100+"%",background:A.type==="shape"?(x=A.content)==null?void 0:x.fillColor:A.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:A.type==="shape"&&((P=A.content)==null?void 0:P.shapeType)==="circle"?"50%":void 0})},null,4)}),128))],4),u("div",y5,[u("div",b5,ve(G.title||`Slide ${N+1}`),1),i.value.length>1?(W(),Q("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:A=>y(A,G.id)},[...f[3]||(f[3]=[un('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1b392fd3><polyline points="3 6 5 6 21 6" data-v-1b392fd3></polyline><path d="M19 6l-1 14H6L5 6" data-v-1b392fd3></path><path d="M10 11v6M14 11v6" data-v-1b392fd3></path><path d="M9 6V4h6v2" data-v-1b392fd3></path></svg>',1)])],8,_5)):Re("",!0)])],42,g5))),128))]),u("button",{class:"add-slide-bottom",onClick:a},[...f[4]||(f[4]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[u("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Ne(" Add Slide ",-1)])]),(W(),at(Td,{to:"body"},[s.value.show?(W(),Q("div",{key:0,class:"context-menu",style:ze({left:s.value.x+"px",top:s.value.y+"px"})},[u("button",{class:"ctx-item",onClick:m},"Duplicate"),u("button",{class:"ctx-item",onClick:w},"Move Up"),u("button",{class:"ctx-item",onClick:v},"Move Down"),f[5]||(f[5]=u("div",{class:"ctx-divider"},null,-1)),u("button",{class:"ctx-item danger",onClick:g},"Delete Slide")],4)):Re("",!0)]))]))}},E5=St(w5,[["__scopeId","data-v-1b392fd3"]]),I5={class:"layer-panel"},T5={class:"layer-header panel-section"},C5={class:"panel-title",style:{"margin-bottom":"0"}},x5={class:"layer-count"},k5={key:0,class:"layers-empty"},S5={key:1,class:"layers-list"},A5=["onClick"],R5={class:"layer-type-icon"},P5={class:"layer-name"},N5={class:"layer-actions"},D5=["onClick","data-tooltip"],O5={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},M5={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},L5=["onClick","data-tooltip"],V5={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$5={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},F5=["onClick"],U5=["onClick"],z5=["onClick"],B5={__name:"LayerPanel",setup(t){const e=In(),n=pn(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var w,v;return(v=(w=r.value)==null?void 0:w.slides)==null?void 0:v.find(I=>I.id===e.currentSlideId)}),s=Se(()=>{var w;return[...((w=i.value)==null?void 0:w.elements)||[]].sort((v,I)=>(I.zIndex||0)-(v.zIndex||0))});function o(w){e.selectElement(w)}function a(w){n.updateElement(e.projectId,e.currentSlideId,w.id,{visible:!w.visible})}function l(w){n.updateElement(e.projectId,e.currentSlideId,w.id,{locked:!w.locked})}function d(w){n.reorderElement(e.projectId,e.currentSlideId,w,"up")}function h(w){n.reorderElement(e.projectId,e.currentSlideId,w,"down")}function m(w){n.deleteElement(e.projectId,e.currentSlideId,w),e.selectedElementId===w&&e.clearSelection()}function g(w){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[w]||"◆"}function y(w){var v,I,C;return(v=w.content)!=null&&v.text?w.content.text.slice(0,24):(I=w.content)!=null&&I.label?w.content.label:(C=w.content)!=null&&C.question?w.content.question.slice(0,24):w.type.charAt(0).toUpperCase()+w.type.slice(1)}return(w,v)=>(W(),Q("div",I5,[u("div",T5,[u("div",C5,[v[0]||(v[0]=Ne(" Layers ",-1)),u("span",x5,ve(s.value.length),1)])]),s.value.length===0?(W(),Q("div",k5,[...v[1]||(v[1]=[u("p",null,"No elements on this slide.",-1),u("p",null,"Add elements using the toolbar above.",-1)])])):(W(),Q("div",S5,[(W(!0),Q(Oe,null,it(s.value,I=>(W(),Q("div",{key:I.id,class:Fe(["layer-item",be(e).selectedElementIds.includes(I.id)&&"selected",I.locked&&"locked",!I.visible&&"hidden"]),onClick:C=>o(I.id)},[u("span",R5,ve(g(I.type)),1),u("span",P5,ve(y(I)),1),u("div",N5,[u("button",{class:Fe(["layer-action-btn",{active:I.visible}]),onClick:Ht(C=>a(I),["stop"]),"data-tooltip":I.visible?"Hide":"Show"},[I.visible?(W(),Q("svg",O5,[...v[2]||(v[2]=[u("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),u("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(W(),Q("svg",M5,[...v[3]||(v[3]=[u("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),u("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),u("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,D5),u("button",{class:Fe(["layer-action-btn",{active:I.locked}]),onClick:Ht(C=>l(I),["stop"]),"data-tooltip":I.locked?"Unlock":"Lock"},[I.locked?(W(),Q("svg",V5,[...v[4]||(v[4]=[u("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),u("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(W(),Q("svg",$5,[...v[5]||(v[5]=[u("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),u("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,L5),u("button",{class:"layer-action-btn",onClick:Ht(C=>d(I.id),["stop"]),"data-tooltip":"Move up"},[...v[6]||(v[6]=[u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,F5),u("button",{class:"layer-action-btn",onClick:Ht(C=>h(I.id),["stop"]),"data-tooltip":"Move down"},[...v[7]||(v[7]=[u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,U5),u("button",{class:"layer-action-btn danger",onClick:Ht(C=>m(I.id),["stop"]),"data-tooltip":"Delete"},[...v[8]||(v[8]=[u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,z5)])],10,A5))),128))]))]))}},j5=St(B5,[["__scopeId","data-v-7407acd8"]]),q5={class:"properties-panel"},W5={class:"panel-section"},H5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},G5={class:"form-group"},K5={class:"bg-type-tabs"},Q5=["onClick"],J5={key:0,class:"color-row"},Y5=["value"],X5=["value"],Z5={class:"panel-section"},e6={class:"panel-section"},t6=["value"],n6={class:"form-group",style:{"margin-top":"var(--space-3)"}},r6=["value"],i6={class:"panel-section"},s6={class:"check-row"},o6=["checked"],a6={class:"check-row"},l6=["checked"],c6={class:"check-row"},u6=["checked"],d6={class:"check-row"},h6=["checked"],f6={class:"check-row"},p6=["checked"],m6={class:"panel-section"},g6={class:"panel-title"},v6={class:"element-type-badge"},y6={class:"geo-grid"},b6={class:"form-group"},_6=["value"],w6={class:"form-group"},E6=["value"],I6={class:"form-group"},T6=["value"],C6={class:"form-group"},x6=["value"],k6={class:"form-group"},S6=["value"],A6={class:"form-group"},R6=["value"],P6={class:"panel-section"},N6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},D6=["value"],O6=["value"],M6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},L6={class:"form-group"},V6=["value"],$6={class:"form-group"},F6=["value"],U6={key:0,class:"panel-section"},z6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},B6=["value"],j6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},q6={class:"form-group"},W6=["value"],H6={class:"form-group"},G6=["value"],K6={class:"form-group",style:{"margin-top":"var(--space-3)"}},Q6=["value"],J6=["value"],Y6={class:"form-group",style:{"margin-top":"var(--space-3)"}},X6={class:"align-btns"},Z6=["onClick"],e3={class:"form-group",style:{"margin-top":"var(--space-3)"}},t3={class:"style-btns"},n3={class:"form-group",style:{"margin-top":"var(--space-3)"}},r3={class:"color-row"},i3=["value"],s3=["value"],o3={class:"form-group",style:{"margin-top":"var(--space-3)"}},a3=["value"],l3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},c3={class:"form-group"},u3=["value"],d3={class:"form-group"},h3=["value"],f3={key:1,class:"panel-section"},p3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},m3=["value"],g3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},v3=["value"],y3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},b3=["value"],_3={class:"form-group"},w3=["value"],E3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},I3={class:"form-group"},T3=["value"],C3={class:"form-group"},x3=["value"],k3={key:2,class:"panel-section"},S3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},A3=["value"],R3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},P3={class:"color-row"},N3=["value"],D3=["value"],O3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},M3={class:"color-row"},L3=["value"],V3=["value"],$3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},F3=["value"],U3={class:"form-group"},z3=["value"],B3={class:"form-group",style:{"margin-top":"var(--space-3)"}},j3=["value"],q3={key:3,class:"panel-section"},W3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},H3=["value"],G3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},K3=["value"],Q3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},J3=["value"],Y3={key:0,class:"form-group"},X3=["value"],Z3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},eN={class:"form-group"},tN=["value"],nN={class:"form-group"},rN=["value"],iN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},sN={class:"form-group"},oN=["value"],aN={class:"form-group"},lN=["value"],cN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},uN={class:"form-group"},dN=["value"],hN={class:"form-group"},fN=["value"],pN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},mN={class:"form-group"},gN=["value"],vN=["value"],yN={class:"form-group"},bN=["value"],_N={key:4,class:"panel-section"},wN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},EN=["value"],IN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},TN={class:"color-row"},CN=["value"],xN=["value"],kN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},SN={class:"form-group"},AN=["value"],RN={class:"form-group"},PN=["value"],NN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},DN=["value"],ON={class:"form-group"},MN=["value"],LN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},VN={class:"form-group"},$N=["value"],FN={class:"form-group"},UN=["value"],zN={key:5,class:"panel-section"},BN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},jN=["value"],qN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},WN=["value"],HN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},GN=["value"],KN={class:"check-row"},QN=["checked"],JN={class:"check-row"},YN=["checked"],XN={class:"check-row"},ZN=["checked"],eD={class:"check-row"},tD=["checked"],nD={key:6,class:"panel-section"},rD={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iD=["value"],sD={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},oD=["value"],aD={class:"check-row"},lD=["checked"],cD={class:"check-row"},uD=["checked"],dD={class:"check-row"},hD=["checked"],fD={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},pD={class:"form-group"},mD=["value"],gD={class:"form-group"},vD=["value"],yD={class:"form-group",style:{"margin-top":"var(--space-3)"}},bD=["value"],_D={key:7,class:"panel-section"},wD={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ED=["value"],ID={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},TD=["value"],CD={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},xD=["value"],kD={class:"form-group"},SD=["value"],AD={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},RD={class:"form-group"},PD=["value"],ND={class:"form-group"},DD=["value"],OD={class:"form-group",style:{"margin-top":"var(--space-3)"}},MD=["value"],LD={class:"panel-section"},VD={class:"actions-list"},$D={__name:"PropertiesPanel",setup(t){const e=In(),n=pn(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var M,f;return(f=(M=r.value)==null?void 0:M.slides)==null?void 0:f.find(G=>G.id===e.currentSlideId)}),s=Se(()=>{var M;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,...((M=r.value)==null?void 0:M.settings)||{}}}),o=Se(()=>{var M,f;return e.selectedElementId?(f=(M=i.value)==null?void 0:M.elements)==null?void 0:f.find(G=>G.id===e.selectedElementId):null}),a=Se(()=>{var f,G;const M=(G=(f=o.value)==null?void 0:f.animations)==null?void 0:G[0];return{type:(M==null?void 0:M.type)||"auto",delay:Number((M==null?void 0:M.delay)||0),duration:Number((M==null?void 0:M.duration)||.64)}}),l=ge({});Bt(o,M=>{M?l.value=JSON.parse(JSON.stringify(M)):l.value={}},{immediate:!0,deep:!0});function d(M){o.value&&n.updateElement(e.projectId,e.currentSlideId,o.value.id,M)}function h(M){if(!o.value)return;const f={...o.value.content,...M};d({content:f})}function m(M,f){const G=parseFloat(f);isNaN(G)||d({[M]:G})}const g=ge({});Bt(i,M=>{M&&(g.value={...M})},{immediate:!0});function y(M){i.value&&n.updateSlide(e.projectId,i.value.id,M)}function w(M){r.value&&n.updateProject(e.projectId,{settings:{...s.value,...M}})}function v(M,f){y({[M]:f})}function I(M){const f=Math.max(0,Number(M)||0);y({duration:f})}function C(M){var N;if(!o.value)return;const G={...((N=o.value.animations)==null?void 0:N[0])||{type:"auto",delay:0,duration:.64},...M};if(G.type==="auto"){d({animations:[]});return}d({animations:[{type:G.type||"none",delay:Math.max(0,Number(G.delay)||0),duration:Math.max(.1,Number(G.duration)||.64)}]})}const R=[{value:"auto",label:"Auto by element type"},{value:"none",label:"No entrance animation"},{value:"fade-up",label:"Fade Up"},{value:"fade-up-strong",label:"Fade Up Strong"},{value:"zoom-in",label:"Zoom In"},{value:"pop-in",label:"Pop In"},{value:"soft-pop",label:"Soft Pop"}],V=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(M,f)=>{var G,N,A,x,P,O,_,T,E,Y,ae,J,ce,ie,ye,re,ee,Ie,we,te,ue,K,X,me,oe,_e,F,q,p,H,B,D,L,z,U,S,j,ne,le,fe,Te,Pe,he,je,rt,Ke,yt,Ge,Jt,tt,Ze,It,Ce,se,Qe,At,ke,Tt,rr,Pr,ua,da,ir,ha,fa,pi,Ms,Ls,Wi,Nr,pa,An,Vs,$s,Hi,Gi,Fs;return W(),Q("div",q5,[f[212]||(f[212]=u("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),o.value?(W(),Q(Oe,{key:1},[u("div",m6,[u("div",g6,[f[112]||(f[112]=Ne(" Position & Size ",-1)),u("span",v6,ve(o.value.type),1)]),u("div",y6,[u("div",b6,[f[113]||(f[113]=u("label",{class:"form-label"},"X",-1)),u("input",{type:"number",value:Math.round(o.value.x),class:"input",onChange:f[17]||(f[17]=Z=>m("x",Z.target.value))},null,40,_6)]),u("div",w6,[f[114]||(f[114]=u("label",{class:"form-label"},"Y",-1)),u("input",{type:"number",value:Math.round(o.value.y),class:"input",onChange:f[18]||(f[18]=Z=>m("y",Z.target.value))},null,40,E6)]),u("div",I6,[f[115]||(f[115]=u("label",{class:"form-label"},"W",-1)),u("input",{type:"number",value:Math.round(o.value.width),class:"input",onChange:f[19]||(f[19]=Z=>m("width",Z.target.value))},null,40,T6)]),u("div",C6,[f[116]||(f[116]=u("label",{class:"form-label"},"H",-1)),u("input",{type:"number",value:Math.round(o.value.height),class:"input",onChange:f[20]||(f[20]=Z=>m("height",Z.target.value))},null,40,x6)]),u("div",k6,[f[117]||(f[117]=u("label",{class:"form-label"},"Rot °",-1)),u("input",{type:"number",value:Math.round(o.value.rotation||0),class:"input",onChange:f[21]||(f[21]=Z=>m("rotation",Z.target.value))},null,40,S6)]),u("div",A6,[f[118]||(f[118]=u("label",{class:"form-label"},"Opacity",-1)),u("input",{type:"number",min:"0",max:"1",step:".05",value:o.value.opacity??1,class:"input",onChange:f[22]||(f[22]=Z=>m("opacity",Z.target.value))},null,40,R6)])])]),u("div",P6,[f[122]||(f[122]=u("div",{class:"panel-title"},"Animation",-1)),u("div",N6,[f[119]||(f[119]=u("label",{class:"form-label"},"Entrance Effect",-1)),u("select",{value:a.value.type,class:"select",onChange:f[23]||(f[23]=Z=>C({type:Z.target.value}))},[(W(),Q(Oe,null,it(R,Z=>u("option",{key:Z.value,value:Z.value},ve(Z.label),9,O6)),64))],40,D6)]),u("div",M6,[u("div",L6,[f[120]||(f[120]=u("label",{class:"form-label"},"Delay (seconds)",-1)),u("input",{type:"number",min:"0",step:"0.05",value:a.value.delay,class:"input",onChange:f[24]||(f[24]=Z=>C({delay:Z.target.value}))},null,40,V6)]),u("div",$6,[f[121]||(f[121]=u("label",{class:"form-label"},"Duration (seconds)",-1)),u("input",{type:"number",min:"0.1",step:"0.05",value:a.value.duration,class:"input",onChange:f[25]||(f[25]=Z=>C({duration:Z.target.value}))},null,40,F6)])]),f[123]||(f[123]=u("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))]),["text","heading"].includes(o.value.type)?(W(),Q("div",U6,[f[139]||(f[139]=u("div",{class:"panel-title"},"Text",-1)),u("div",z6,[f[124]||(f[124]=u("label",{class:"form-label"},"Content",-1)),u("textarea",{value:(_=o.value.content)==null?void 0:_.text,class:"textarea",style:{"min-height":"64px"},onInput:f[26]||(f[26]=Z=>h({text:Z.target.value}))},null,40,B6)]),u("div",j6,[u("div",q6,[f[125]||(f[125]=u("label",{class:"form-label"},"Size",-1)),u("input",{type:"number",value:(T=o.value.content)==null?void 0:T.fontSize,class:"input",onChange:f[27]||(f[27]=Z=>h({fontSize:+Z.target.value}))},null,40,W6)]),u("div",H6,[f[127]||(f[127]=u("label",{class:"form-label"},"Weight",-1)),u("select",{value:(E=o.value.content)==null?void 0:E.fontWeight,class:"select",onChange:f[28]||(f[28]=Z=>h({fontWeight:Z.target.value}))},[...f[126]||(f[126]=[u("option",{value:"normal"},"Normal",-1),u("option",{value:"bold"},"Bold",-1),u("option",{value:"600"},"Semi-bold",-1),u("option",{value:"300"},"Light",-1)])],40,G6)])]),u("div",K6,[f[128]||(f[128]=u("label",{class:"form-label"},"Font Family",-1)),u("select",{value:(Y=o.value.content)==null?void 0:Y.fontFamily,class:"select",onChange:f[29]||(f[29]=Z=>h({fontFamily:Z.target.value}))},[(W(),Q(Oe,null,it(V,Z=>u("option",{key:Z,value:Z},ve(Z.split(",")[0]),9,J6)),64))],40,Q6)]),u("div",Y6,[f[129]||(f[129]=u("label",{class:"form-label"},"Align",-1)),u("div",X6,[(W(),Q(Oe,null,it(["left","center","right","justify"],Z=>{var jt;return u("button",{key:Z,class:Fe(["align-btn",((jt=o.value.content)==null?void 0:jt.textAlign)===Z&&"active"]),onClick:Cc=>h({textAlign:Z})},ve(Z[0].toUpperCase()),11,Z6)}),64))])]),u("div",e3,[f[133]||(f[133]=u("label",{class:"form-label"},"Style",-1)),u("div",t3,[u("button",{class:Fe(["style-btn",((ae=o.value.content)==null?void 0:ae.fontStyle)==="italic"&&"active"]),onClick:f[30]||(f[30]=Z=>{var jt;return h({fontStyle:((jt=o.value.content)==null?void 0:jt.fontStyle)==="italic"?"normal":"italic"})})},[...f[130]||(f[130]=[u("i",null,"I",-1)])],2),u("button",{class:Fe(["style-btn",((J=o.value.content)==null?void 0:J.textDecoration)==="underline"&&"active"]),onClick:f[31]||(f[31]=Z=>{var jt;return h({textDecoration:((jt=o.value.content)==null?void 0:jt.textDecoration)==="underline"?"none":"underline"})})},[...f[131]||(f[131]=[u("u",null,"U",-1)])],2),u("button",{class:Fe(["style-btn",((ce=o.value.content)==null?void 0:ce.textDecoration)==="line-through"&&"active"]),onClick:f[32]||(f[32]=Z=>{var jt;return h({textDecoration:((jt=o.value.content)==null?void 0:jt.textDecoration)==="line-through"?"none":"line-through"})})},[...f[132]||(f[132]=[u("s",null,"S",-1)])],2)])]),u("div",n3,[f[134]||(f[134]=u("label",{class:"form-label"},"Color",-1)),u("div",r3,[u("input",{type:"color",value:((ie=o.value.content)==null?void 0:ie.color)||"#000",onInput:f[33]||(f[33]=Z=>h({color:Z.target.value})),class:"color-input-native"},null,40,i3),u("input",{value:((ye=o.value.content)==null?void 0:ye.color)||"#000",class:"input",onInput:f[34]||(f[34]=Z=>h({color:Z.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,s3)])]),u("div",o3,[f[135]||(f[135]=u("label",{class:"form-label"},"Line Height",-1)),u("input",{type:"number",min:".8",max:"3",step:".1",value:((re=o.value.content)==null?void 0:re.lineHeight)??1.5,class:"input",onChange:f[35]||(f[35]=Z=>h({lineHeight:+Z.target.value}))},null,40,a3)]),u("div",l3,[u("div",c3,[f[137]||(f[137]=u("label",{class:"form-label"},"Case",-1)),u("select",{value:((ee=o.value.content)==null?void 0:ee.textTransform)||"none",class:"select",onChange:f[36]||(f[36]=Z=>h({textTransform:Z.target.value}))},[...f[136]||(f[136]=[u("option",{value:"none"},"Normal",-1),u("option",{value:"uppercase"},"UPPERCASE",-1),u("option",{value:"lowercase"},"lowercase",-1),u("option",{value:"capitalize"},"Capitalize",-1)])],40,u3)]),u("div",d3,[f[138]||(f[138]=u("label",{class:"form-label"},"Letter Spacing",-1)),u("input",{type:"number",step:".2",value:((Ie=o.value.content)==null?void 0:Ie.letterSpacing)??0,class:"input",onChange:f[37]||(f[37]=Z=>h({letterSpacing:+Z.target.value}))},null,40,h3)])])])):Re("",!0),o.value.type==="image"?(W(),Q("div",f3,[f[147]||(f[147]=u("div",{class:"panel-title"},"Image",-1)),u("div",p3,[f[140]||(f[140]=u("label",{class:"form-label"},"Source URL",-1)),u("input",{value:(we=o.value.content)==null?void 0:we.src,class:"input",placeholder:"https://...",onInput:f[38]||(f[38]=Z=>h({src:Z.target.value}))},null,40,m3)]),u("div",g3,[f[141]||(f[141]=u("label",{class:"form-label"},"Alt Text",-1)),u("input",{value:(te=o.value.content)==null?void 0:te.alt,class:"input",onInput:f[39]||(f[39]=Z=>h({alt:Z.target.value}))},null,40,v3)]),u("div",y3,[f[143]||(f[143]=u("label",{class:"form-label"},"Object Fit",-1)),u("select",{value:((ue=o.value.content)==null?void 0:ue.objectFit)||"cover",class:"select",onChange:f[40]||(f[40]=Z=>h({objectFit:Z.target.value}))},[...f[142]||(f[142]=[u("option",{value:"cover"},"Cover",-1),u("option",{value:"contain"},"Contain",-1),u("option",{value:"fill"},"Fill",-1),u("option",{value:"none"},"None",-1)])],40,b3)]),u("div",_3,[f[144]||(f[144]=u("label",{class:"form-label"},"Border Radius",-1)),u("input",{type:"number",min:"0",value:((K=o.value.content)==null?void 0:K.borderRadius)||0,class:"input",onChange:f[41]||(f[41]=Z=>h({borderRadius:+Z.target.value}))},null,40,w3)]),u("div",E3,[u("div",I3,[f[145]||(f[145]=u("label",{class:"form-label"},"Border Width",-1)),u("input",{type:"number",min:"0",value:((X=o.value.content)==null?void 0:X.borderWidth)||0,class:"input",onChange:f[42]||(f[42]=Z=>h({borderWidth:+Z.target.value}))},null,40,T3)]),u("div",C3,[f[146]||(f[146]=u("label",{class:"form-label"},"Border Color",-1)),u("input",{type:"color",value:((me=o.value.content)==null?void 0:me.borderColor)||"#e2e8f0",class:"color-input-native",onInput:f[43]||(f[43]=Z=>h({borderColor:Z.target.value}))},null,40,x3)])])])):Re("",!0),o.value.type==="shape"?(W(),Q("div",k3,[f[155]||(f[155]=u("div",{class:"panel-title"},"Shape",-1)),u("div",S3,[f[149]||(f[149]=u("label",{class:"form-label"},"Type",-1)),u("select",{value:((oe=o.value.content)==null?void 0:oe.shapeType)||"rectangle",class:"select",onChange:f[44]||(f[44]=Z=>h({shapeType:Z.target.value}))},[...f[148]||(f[148]=[un('<option value="rectangle" data-v-5f61b1b3>Rectangle</option><option value="circle" data-v-5f61b1b3>Circle</option><option value="triangle" data-v-5f61b1b3>Triangle</option><option value="star" data-v-5f61b1b3>Star</option><option value="arrow" data-v-5f61b1b3>Arrow</option><option value="diamond" data-v-5f61b1b3>Diamond</option>',6)])],40,A3)]),u("div",R3,[f[150]||(f[150]=u("label",{class:"form-label"},"Fill Color",-1)),u("div",P3,[u("input",{type:"color",value:((_e=o.value.content)==null?void 0:_e.fillColor)||"#6c47ff",onInput:f[45]||(f[45]=Z=>h({fillColor:Z.target.value})),class:"color-input-native"},null,40,N3),u("input",{value:((F=o.value.content)==null?void 0:F.fillColor)||"#6c47ff",class:"input",onInput:f[46]||(f[46]=Z=>h({fillColor:Z.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,D3)])]),u("div",O3,[f[151]||(f[151]=u("label",{class:"form-label"},"Border Color",-1)),u("div",M3,[u("input",{type:"color",value:((q=o.value.content)==null?void 0:q.borderColor)||"transparent",onInput:f[47]||(f[47]=Z=>h({borderColor:Z.target.value})),class:"color-input-native"},null,40,L3),u("input",{value:((p=o.value.content)==null?void 0:p.borderColor)||"transparent",class:"input",onInput:f[48]||(f[48]=Z=>h({borderColor:Z.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,V3)])]),u("div",$3,[f[152]||(f[152]=u("label",{class:"form-label"},"Border Width",-1)),u("input",{type:"number",min:"0",value:((H=o.value.content)==null?void 0:H.borderWidth)||0,class:"input",onChange:f[49]||(f[49]=Z=>h({borderWidth:+Z.target.value}))},null,40,F3)]),u("div",U3,[f[153]||(f[153]=u("label",{class:"form-label"},"Corner Radius",-1)),u("input",{type:"number",min:"0",value:((B=o.value.content)==null?void 0:B.borderRadius)||0,class:"input",onChange:f[50]||(f[50]=Z=>h({borderRadius:+Z.target.value}))},null,40,z3)]),u("div",B3,[f[154]||(f[154]=u("label",{class:"form-label"},"Fill Opacity",-1)),u("input",{type:"number",min:"0",max:"1",step:".05",value:((D=o.value.content)==null?void 0:D.opacity)??1,class:"input",onChange:f[51]||(f[51]=Z=>h({opacity:+Z.target.value}))},null,40,j3)])])):Re("",!0),o.value.type==="button"?(W(),Q("div",q3,[f[171]||(f[171]=u("div",{class:"panel-title"},"Button",-1)),u("div",W3,[f[156]||(f[156]=u("label",{class:"form-label"},"Label",-1)),u("input",{value:(L=o.value.content)==null?void 0:L.label,class:"input",onInput:f[52]||(f[52]=Z=>h({label:Z.target.value}))},null,40,H3)]),u("div",G3,[f[158]||(f[158]=u("label",{class:"form-label"},"Style",-1)),u("select",{value:((z=o.value.content)==null?void 0:z.variant)||"primary",class:"select",onChange:f[53]||(f[53]=Z=>h({variant:Z.target.value}))},[...f[157]||(f[157]=[un('<option value="primary" data-v-5f61b1b3>Primary</option><option value="secondary" data-v-5f61b1b3>Secondary</option><option value="outline" data-v-5f61b1b3>Outline</option><option value="ghost" data-v-5f61b1b3>Ghost</option><option value="danger" data-v-5f61b1b3>Danger</option>',5)])],40,K3)]),u("div",Q3,[f[160]||(f[160]=u("label",{class:"form-label"},"Action",-1)),u("select",{value:((U=o.value.content)==null?void 0:U.action)||"none",class:"select",onChange:f[54]||(f[54]=Z=>h({action:Z.target.value}))},[...f[159]||(f[159]=[u("option",{value:"none"},"None",-1),u("option",{value:"navigate"},"Navigate to slide",-1),u("option",{value:"link"},"Open URL",-1),u("option",{value:"submit"},"Submit",-1)])],40,J3)]),(S=o.value.content)!=null&&S.action&&o.value.content.action!=="none"?(W(),Q("div",Y3,[f[161]||(f[161]=u("label",{class:"form-label"},"Target (slide # or URL)",-1)),u("input",{value:(j=o.value.content)==null?void 0:j.target,class:"input",placeholder:"Slide # or https://...",onInput:f[55]||(f[55]=Z=>h({target:Z.target.value}))},null,40,X3)])):Re("",!0),u("div",Z3,[u("div",eN,[f[162]||(f[162]=u("label",{class:"form-label"},"Background",-1)),u("input",{type:"color",value:((ne=o.value.content)==null?void 0:ne.bgColor)||"#6c47ff",class:"color-input-native",onInput:f[56]||(f[56]=Z=>h({bgColor:Z.target.value}))},null,40,tN)]),u("div",nN,[f[163]||(f[163]=u("label",{class:"form-label"},"Text Color",-1)),u("input",{type:"color",value:((le=o.value.content)==null?void 0:le.textColor)||"#ffffff",class:"color-input-native",onInput:f[57]||(f[57]=Z=>h({textColor:Z.target.value}))},null,40,rN)])]),u("div",iN,[u("div",sN,[f[164]||(f[164]=u("label",{class:"form-label"},"Border Color",-1)),u("input",{type:"color",value:((fe=o.value.content)==null?void 0:fe.borderColor)||"#6c47ff",class:"color-input-native",onInput:f[58]||(f[58]=Z=>h({borderColor:Z.target.value}))},null,40,oN)]),u("div",aN,[f[165]||(f[165]=u("label",{class:"form-label"},"Corner Radius",-1)),u("input",{type:"number",min:"0",value:((Te=o.value.content)==null?void 0:Te.borderRadius)??8,class:"input",onChange:f[59]||(f[59]=Z=>h({borderRadius:+Z.target.value}))},null,40,lN)])]),u("div",cN,[u("div",uN,[f[166]||(f[166]=u("label",{class:"form-label"},"Font Size",-1)),u("input",{type:"number",min:"10",value:((Pe=o.value.content)==null?void 0:Pe.fontSize)??15,class:"input",onChange:f[60]||(f[60]=Z=>h({fontSize:+Z.target.value}))},null,40,dN)]),u("div",hN,[f[168]||(f[168]=u("label",{class:"form-label"},"Weight",-1)),u("select",{value:String(((he=o.value.content)==null?void 0:he.fontWeight)??600),class:"select",onChange:f[61]||(f[61]=Z=>h({fontWeight:+Z.target.value}))},[...f[167]||(f[167]=[u("option",{value:"400"},"Normal",-1),u("option",{value:"500"},"Medium",-1),u("option",{value:"600"},"Semi-bold",-1),u("option",{value:"700"},"Bold",-1)])],40,fN)])]),u("div",pN,[u("div",mN,[f[169]||(f[169]=u("label",{class:"form-label"},"Font Family",-1)),u("select",{value:((je=o.value.content)==null?void 0:je.fontFamily)||"Inter, sans-serif",class:"select",onChange:f[62]||(f[62]=Z=>h({fontFamily:Z.target.value}))},[(W(),Q(Oe,null,it(V,Z=>u("option",{key:`btn-${Z}`,value:Z},ve(Z.split(",")[0]),9,vN)),64))],40,gN)]),u("div",yN,[f[170]||(f[170]=u("label",{class:"form-label"},"Letter Spacing",-1)),u("input",{type:"number",step:".2",value:((rt=o.value.content)==null?void 0:rt.letterSpacing)??0,class:"input",onChange:f[63]||(f[63]=Z=>h({letterSpacing:+Z.target.value}))},null,40,bN)])])])):Re("",!0),o.value.type==="hotspot"?(W(),Q("div",_N,[f[181]||(f[181]=u("div",{class:"panel-title"},"Hotspot",-1)),u("div",wN,[f[173]||(f[173]=u("label",{class:"form-label"},"Icon",-1)),u("select",{value:((Ke=o.value.content)==null?void 0:Ke.icon)||"?",class:"select",onChange:f[64]||(f[64]=Z=>h({icon:Z.target.value}))},[...f[172]||(f[172]=[un('<option value="?" data-v-5f61b1b3>? (Info)</option><option value="!" data-v-5f61b1b3>! (Alert)</option><option value="+" data-v-5f61b1b3>+ (Plus)</option><option value="i" data-v-5f61b1b3>i (Info)</option><option value="✦" data-v-5f61b1b3>✦ (Star)</option>',5)])],40,EN)]),u("div",IN,[f[174]||(f[174]=u("label",{class:"form-label"},"Background Color",-1)),u("div",TN,[u("input",{type:"color",value:((yt=o.value.content)==null?void 0:yt.bgColor)||"#6c47ff",onInput:f[65]||(f[65]=Z=>h({bgColor:Z.target.value})),class:"color-input-native"},null,40,CN),u("input",{value:((Ge=o.value.content)==null?void 0:Ge.bgColor)||"#6c47ff",class:"input",onInput:f[66]||(f[66]=Z=>h({bgColor:Z.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,xN)])]),u("div",kN,[u("div",SN,[f[175]||(f[175]=u("label",{class:"form-label"},"Icon Color",-1)),u("input",{type:"color",value:((Jt=o.value.content)==null?void 0:Jt.iconColor)||"#ffffff",class:"color-input-native",onInput:f[67]||(f[67]=Z=>h({iconColor:Z.target.value}))},null,40,AN)]),u("div",RN,[f[176]||(f[176]=u("label",{class:"form-label"},"Corner Radius",-1)),u("input",{type:"number",min:"0",value:((tt=o.value.content)==null?void 0:tt.borderRadius)??999,class:"input",onChange:f[68]||(f[68]=Z=>h({borderRadius:+Z.target.value}))},null,40,PN)])]),u("div",NN,[f[177]||(f[177]=u("label",{class:"form-label"},"Popup Title",-1)),u("input",{value:(Ze=o.value.content)==null?void 0:Ze.popupTitle,class:"input",onInput:f[69]||(f[69]=Z=>h({popupTitle:Z.target.value}))},null,40,DN)]),u("div",ON,[f[178]||(f[178]=u("label",{class:"form-label"},"Popup Content",-1)),u("textarea",{value:(It=o.value.content)==null?void 0:It.popupContent,class:"textarea",onInput:f[70]||(f[70]=Z=>h({popupContent:Z.target.value}))},null,40,MN)]),u("div",LN,[u("div",VN,[f[179]||(f[179]=u("label",{class:"form-label"},"Popup Background",-1)),u("input",{type:"color",value:((Ce=o.value.content)==null?void 0:Ce.popupBgColor)||"#ffffff",class:"color-input-native",onInput:f[71]||(f[71]=Z=>h({popupBgColor:Z.target.value}))},null,40,$N)]),u("div",FN,[f[180]||(f[180]=u("label",{class:"form-label"},"Popup Text",-1)),u("input",{type:"color",value:((se=o.value.content)==null?void 0:se.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:f[72]||(f[72]=Z=>h({popupTextColor:Z.target.value}))},null,40,UN)])])])):Re("",!0),o.value.type==="video"?(W(),Q("div",zN,[f[190]||(f[190]=u("div",{class:"panel-title"},"Video",-1)),u("div",BN,[f[182]||(f[182]=u("label",{class:"form-label"},"Video URL / Embed",-1)),u("input",{value:(Qe=o.value.content)==null?void 0:Qe.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:f[73]||(f[73]=Z=>h({src:Z.target.value}))},null,40,jN)]),u("div",qN,[f[183]||(f[183]=u("label",{class:"form-label"},"Poster Image URL",-1)),u("input",{value:(At=o.value.content)==null?void 0:At.poster,class:"input",onInput:f[74]||(f[74]=Z=>h({poster:Z.target.value}))},null,40,WN)]),u("div",HN,[f[185]||(f[185]=u("label",{class:"form-label"},"Object Fit",-1)),u("select",{value:((ke=o.value.content)==null?void 0:ke.objectFit)||"cover",class:"select",onChange:f[75]||(f[75]=Z=>h({objectFit:Z.target.value}))},[...f[184]||(f[184]=[u("option",{value:"cover"},"Cover",-1),u("option",{value:"contain"},"Contain",-1),u("option",{value:"fill"},"Fill",-1),u("option",{value:"none"},"None",-1)])],40,GN)]),u("label",KN,[u("input",{type:"checkbox",checked:(Tt=o.value.content)==null?void 0:Tt.autoplay,onChange:f[76]||(f[76]=Z=>h({autoplay:Z.target.checked}))},null,40,QN),f[186]||(f[186]=Ne(" Autoplay ",-1))]),u("label",JN,[u("input",{type:"checkbox",checked:((rr=o.value.content)==null?void 0:rr.controls)??!0,onChange:f[77]||(f[77]=Z=>h({controls:Z.target.checked}))},null,40,YN),f[187]||(f[187]=Ne(" Show Controls ",-1))]),u("label",XN,[u("input",{type:"checkbox",checked:(Pr=o.value.content)==null?void 0:Pr.loop,onChange:f[78]||(f[78]=Z=>h({loop:Z.target.checked}))},null,40,ZN),f[188]||(f[188]=Ne(" Loop ",-1))]),u("label",eD,[u("input",{type:"checkbox",checked:(ua=o.value.content)==null?void 0:ua.muted,onChange:f[79]||(f[79]=Z=>h({muted:Z.target.checked}))},null,40,tD),f[189]||(f[189]=Ne(" Muted ",-1))])])):Re("",!0),o.value.type==="audio"?(W(),Q("div",nD,[f[199]||(f[199]=u("div",{class:"panel-title"},"Audio",-1)),u("div",rD,[f[191]||(f[191]=u("label",{class:"form-label"},"Audio URL",-1)),u("input",{value:(da=o.value.content)==null?void 0:da.src,class:"input",placeholder:".mp3 / .wav URL",onInput:f[80]||(f[80]=Z=>h({src:Z.target.value}))},null,40,iD)]),u("div",sD,[f[192]||(f[192]=u("label",{class:"form-label"},"Label",-1)),u("input",{value:(ir=o.value.content)==null?void 0:ir.label,class:"input",onInput:f[81]||(f[81]=Z=>h({label:Z.target.value}))},null,40,oD)]),u("label",aD,[u("input",{type:"checkbox",checked:(ha=o.value.content)==null?void 0:ha.autoplay,onChange:f[82]||(f[82]=Z=>h({autoplay:Z.target.checked}))},null,40,lD),f[193]||(f[193]=Ne(" Autoplay ",-1))]),u("label",cD,[u("input",{type:"checkbox",checked:((fa=o.value.content)==null?void 0:fa.controls)!==!1,onChange:f[83]||(f[83]=Z=>h({controls:Z.target.checked}))},null,40,uD),f[194]||(f[194]=Ne(" Show Controls ",-1))]),u("label",dD,[u("input",{type:"checkbox",checked:(pi=o.value.content)==null?void 0:pi.loop,onChange:f[84]||(f[84]=Z=>h({loop:Z.target.checked}))},null,40,hD),f[195]||(f[195]=Ne(" Loop ",-1))]),u("div",fD,[u("div",pD,[f[196]||(f[196]=u("label",{class:"form-label"},"Accent Color",-1)),u("input",{type:"color",value:((Ms=o.value.content)==null?void 0:Ms.accentColor)||"#6c47ff",class:"color-input-native",onInput:f[85]||(f[85]=Z=>h({accentColor:Z.target.value}))},null,40,mD)]),u("div",gD,[f[197]||(f[197]=u("label",{class:"form-label"},"Text Color",-1)),u("input",{type:"color",value:((Ls=o.value.content)==null?void 0:Ls.textColor)||"#555555",class:"color-input-native",onInput:f[86]||(f[86]=Z=>h({textColor:Z.target.value}))},null,40,vD)])]),u("div",yD,[f[198]||(f[198]=u("label",{class:"form-label"},"Background Color",-1)),u("input",{type:"color",value:((Wi=o.value.content)==null?void 0:Wi.bgColor)||"#ede7ff",class:"color-input-native",onInput:f[87]||(f[87]=Z=>h({bgColor:Z.target.value}))},null,40,bD)])])):Re("",!0),o.value.type==="quiz"?(W(),Q("div",_D,[f[207]||(f[207]=u("div",{class:"panel-title"},"Quiz Question",-1)),u("div",wD,[f[200]||(f[200]=u("label",{class:"form-label"},"Question",-1)),u("textarea",{value:(Nr=o.value.content)==null?void 0:Nr.question,class:"textarea",style:{"min-height":"60px"},onInput:f[88]||(f[88]=Z=>h({question:Z.target.value}))},null,40,ED)]),u("div",ID,[f[201]||(f[201]=u("label",{class:"form-label"},"Options (one per line)",-1)),u("textarea",{value:(An=(pa=o.value.content)==null?void 0:pa.options)==null?void 0:An.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:f[89]||(f[89]=Z=>h({options:Z.target.value.split(`
`).filter(Boolean)}))},null,40,TD)]),u("div",CD,[f[202]||(f[202]=u("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),u("input",{type:"number",min:"0",value:((Vs=o.value.content)==null?void 0:Vs.correctIndex)??0,class:"input",onChange:f[90]||(f[90]=Z=>h({correctIndex:+Z.target.value}))},null,40,xD)]),u("div",kD,[f[203]||(f[203]=u("label",{class:"form-label"},"Explanation",-1)),u("textarea",{value:($s=o.value.content)==null?void 0:$s.explanation,class:"textarea",onInput:f[91]||(f[91]=Z=>h({explanation:Z.target.value}))},null,40,SD)]),u("div",AD,[u("div",RD,[f[204]||(f[204]=u("label",{class:"form-label"},"Card Background",-1)),u("input",{type:"color",value:((Hi=o.value.content)==null?void 0:Hi.cardBgColor)||"#ffffff",class:"color-input-native",onInput:f[92]||(f[92]=Z=>h({cardBgColor:Z.target.value}))},null,40,PD)]),u("div",ND,[f[205]||(f[205]=u("label",{class:"form-label"},"Question Color",-1)),u("input",{type:"color",value:((Gi=o.value.content)==null?void 0:Gi.questionColor)||"#1a1a2e",class:"color-input-native",onInput:f[93]||(f[93]=Z=>h({questionColor:Z.target.value}))},null,40,DD)])]),u("div",OD,[f[206]||(f[206]=u("label",{class:"form-label"},"Accent Color",-1)),u("input",{type:"color",value:((Fs=o.value.content)==null?void 0:Fs.accentColor)||"#6c47ff",class:"color-input-native",onInput:f[94]||(f[94]=Z=>h({accentColor:Z.target.value}))},null,40,MD)])])):Re("",!0),u("div",LD,[f[211]||(f[211]=u("div",{class:"panel-title"},"Actions",-1)),u("div",VD,[u("button",{class:"btn btn-secondary btn-sm w-full",onClick:f[95]||(f[95]=Z=>be(n).duplicateElement(be(e).projectId,be(e).currentSlideId,o.value.id))},[...f[208]||(f[208]=[u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),u("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),Ne(" Duplicate ",-1)])]),u("button",{class:"btn btn-secondary btn-sm w-full",onClick:f[96]||(f[96]=Z=>{be(e).showInteractionEditor=!0,be(e).interactionElementId=o.value.id})},[...f[209]||(f[209]=[u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Ne(" Interactions ",-1)])]),u("button",{class:"btn btn-danger btn-sm w-full",onClick:f[97]||(f[97]=Z=>{be(n).deleteElement(be(e).projectId,be(e).currentSlideId,o.value.id),be(e).clearSelection()})},[...f[210]||(f[210]=[u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("polyline",{points:"3 6 5 6 21 6"}),u("path",{d:"M19 6l-1 14H6L5 6"}),u("path",{d:"M9 6V4h6v2"})],-1),Ne(" Delete Element ",-1)])])])])],64)):(W(),Q(Oe,{key:0},[u("div",W5,[f[100]||(f[100]=u("div",{class:"panel-title"},"Slide Properties",-1)),u("div",H5,[f[98]||(f[98]=u("label",{class:"form-label"},"Title",-1)),ht(u("input",{"onUpdate:modelValue":f[0]||(f[0]=Z=>g.value.title=Z),class:"input",onInput:f[1]||(f[1]=Z=>v("title",g.value.title))},null,544),[[Mt,g.value.title]])]),u("div",G5,[f[99]||(f[99]=u("label",{class:"form-label"},"Background",-1)),u("div",K5,[(W(),Q(Oe,null,it(["color","gradient","image"],Z=>{var jt;return u("button",{key:Z,class:Fe(["bg-type-btn",(((jt=i.value)==null?void 0:jt.backgroundType)||"color")===Z&&"active"]),onClick:Cc=>y({backgroundType:Z})},ve(Z),11,Q5)}),64))]),(((G=i.value)==null?void 0:G.backgroundType)||"color")==="color"?(W(),Q("div",J5,[u("input",{type:"color",value:((N=i.value)==null?void 0:N.background)||"#ffffff",onInput:f[2]||(f[2]=Z=>y({background:Z.target.value})),class:"color-input-native"},null,40,Y5),u("input",{value:((A=i.value)==null?void 0:A.background)||"#ffffff",class:"input",onInput:f[3]||(f[3]=Z=>y({background:Z.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,X5)])):((x=i.value)==null?void 0:x.backgroundType)==="gradient"?ht((W(),Q("input",{key:1,"onUpdate:modelValue":f[4]||(f[4]=Z=>g.value.backgroundGradient=Z),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:f[5]||(f[5]=Z=>y({backgroundGradient:g.value.backgroundGradient}))},null,544)),[[Mt,g.value.backgroundGradient]]):ht((W(),Q("input",{key:2,"onUpdate:modelValue":f[6]||(f[6]=Z=>g.value.backgroundImage=Z),class:"input",placeholder:"https://...",onInput:f[7]||(f[7]=Z=>y({backgroundImage:g.value.backgroundImage}))},null,544)),[[Mt,g.value.backgroundImage]])])]),u("div",Z5,[f[101]||(f[101]=u("div",{class:"panel-title"},"Slide Notes",-1)),ht(u("textarea",{"onUpdate:modelValue":f[8]||(f[8]=Z=>g.value.notes=Z),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:f[9]||(f[9]=Z=>v("notes",g.value.notes))},null,544),[[Mt,g.value.notes]])]),u("div",e6,[f[105]||(f[105]=u("div",{class:"panel-title"},"Transition",-1)),u("select",{value:((P=i.value)==null?void 0:P.transition)||"none",class:"select",onChange:f[10]||(f[10]=Z=>y({transition:Z.target.value}))},[...f[102]||(f[102]=[un('<option value="none" data-v-5f61b1b3>None</option><option value="fade" data-v-5f61b1b3>Fade</option><option value="slide" data-v-5f61b1b3>Slide</option><option value="zoom" data-v-5f61b1b3>Zoom</option><option value="flip" data-v-5f61b1b3>Flip</option>',5)])],40,t6),u("div",n6,[f[103]||(f[103]=u("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),u("input",{type:"number",min:"0",step:"0.5",value:((O=i.value)==null?void 0:O.duration)??0,class:"input",onChange:f[11]||(f[11]=Z=>I(Z.target.value))},null,40,r6),f[104]||(f[104]=u("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))])]),u("div",i6,[f[111]||(f[111]=u("div",{class:"panel-title"},"Playback",-1)),u("label",s6,[u("input",{type:"checkbox",checked:s.value.autoPlay,onChange:f[12]||(f[12]=Z=>w({autoPlay:Z.target.checked}))},null,40,o6),f[106]||(f[106]=Ne(" Autoplay preview and exported presentation ",-1))]),u("label",a6,[u("input",{type:"checkbox",checked:s.value.loop,onChange:f[13]||(f[13]=Z=>w({loop:Z.target.checked}))},null,40,l6),f[107]||(f[107]=Ne(" Loop back to the first slide at the end ",-1))]),u("label",c6,[u("input",{type:"checkbox",checked:s.value.showProgress,onChange:f[14]||(f[14]=Z=>w({showProgress:Z.target.checked}))},null,40,u6),f[108]||(f[108]=Ne(" Show progress bar in preview ",-1))]),u("label",d6,[u("input",{type:"checkbox",checked:s.value.showNavControls,onChange:f[15]||(f[15]=Z=>w({showNavControls:Z.target.checked}))},null,40,h6),f[109]||(f[109]=Ne(" Show previous/next and dot navigation ",-1))]),u("label",f6,[u("input",{type:"checkbox",checked:s.value.allowKeyboardNav,onChange:f[16]||(f[16]=Z=>w({allowKeyboardNav:Z.target.checked}))},null,40,p6),f[110]||(f[110]=Ne(" Allow arrow keys and space bar navigation ",-1))])])],64))])}}},FD=St($D,[["__scopeId","data-v-5f61b1b3"]]),UD={class:"editor-toolbar"},zD={class:"toolbar-group"},BD={class:"toolbar-group"},jD=["data-tooltip","onClick"],qD={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},WD={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},HD={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},GD={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},KD={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},QD={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},JD={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},YD={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},XD={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ZD={class:"tool-label"},eO={class:"toolbar-group"},tO={class:"toolbar-group"},nO={class:"toolbar-group"},rO={__name:"EditorToolbar",emits:["open-ai-project"],setup(t,{emit:e}){const n=e,r=In();pn();const i=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"}];function s(o){r.setActiveTool(o)}return(o,a)=>(W(),Q("div",UD,[u("div",zD,[u("button",{class:Fe(["tool-btn",be(r).activeTool==="select"&&"active"]),onClick:a[0]||(a[0]=l=>s("select")),"data-tooltip":"Select (V)"},[...a[7]||(a[7]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),u("span",{class:"tool-label"},"Select",-1)])],2)]),a[22]||(a[22]=u("div",{class:"toolbar-divider"},null,-1)),u("div",BD,[(W(),Q(Oe,null,it(i,l=>u("button",{key:l.id,class:Fe(["tool-btn",be(r).activeTool===l.id&&"active"]),"data-tooltip":l.tooltip,onClick:d=>s(l.id)},[l.icon==="text"?(W(),Q("svg",qD,[...a[8]||(a[8]=[u("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),u("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),u("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):l.icon==="heading"?(W(),Q("svg",WD,[...a[9]||(a[9]=[u("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):l.icon==="image"?(W(),Q("svg",HD,[...a[10]||(a[10]=[u("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),u("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),u("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):l.icon==="shape"?(W(),Q("svg",GD,[...a[11]||(a[11]=[u("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):l.icon==="button"?(W(),Q("svg",KD,[...a[12]||(a[12]=[u("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),u("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):l.icon==="hotspot"?(W(),Q("svg",QD,[...a[13]||(a[13]=[u("circle",{cx:"12",cy:"12",r:"10"},null,-1),u("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),u("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):l.icon==="video"?(W(),Q("svg",JD,[...a[14]||(a[14]=[u("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),u("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):l.icon==="audio"?(W(),Q("svg",YD,[...a[15]||(a[15]=[u("path",{d:"M9 18V5l12-2v13"},null,-1),u("circle",{cx:"6",cy:"18",r:"3"},null,-1),u("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):l.icon==="quiz"?(W(),Q("svg",XD,[...a[16]||(a[16]=[u("path",{d:"M9 11l3 3L22 4"},null,-1),u("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):Re("",!0),u("span",ZD,ve(l.label),1)],10,jD)),64))]),a[23]||(a[23]=u("div",{class:"toolbar-divider"},null,-1)),u("div",eO,[u("button",{class:"tool-btn tool-btn-ai-project",onClick:a[1]||(a[1]=l=>n("open-ai-project")),"data-tooltip":"Create a new AI project"},[...a[17]||(a[17]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),u("span",{class:"tool-label"},"AI Project",-1)])])]),a[24]||(a[24]=u("div",{class:"toolbar-spacer"},null,-1)),u("div",tO,[u("button",{class:"tool-btn",onClick:a[2]||(a[2]=l=>be(r).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...a[18]||(a[18]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"11",cy:"11",r:"8"}),u("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),u("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),u("button",{class:"zoom-display",onClick:a[3]||(a[3]=l=>be(r).zoomReset())},ve(Math.round(be(r).zoomLevel*100))+"% ",1),u("button",{class:"tool-btn",onClick:a[4]||(a[4]=l=>be(r).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...a[19]||(a[19]=[un('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="11" cy="11" r="8" data-v-53bae632></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-53bae632></line><line x1="11" y1="8" x2="11" y2="14" data-v-53bae632></line><line x1="8" y1="11" x2="14" y2="11" data-v-53bae632></line></svg>',1)])])]),a[25]||(a[25]=u("div",{class:"toolbar-divider"},null,-1)),u("div",nO,[u("button",{class:Fe(["tool-btn",be(r).showGrid&&"active"]),onClick:a[5]||(a[5]=l=>be(r).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...a[20]||(a[20]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[u("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),u("button",{class:Fe(["tool-btn",be(r).snapToGrid&&"active"]),onClick:a[6]||(a[6]=l=>be(r).toggleSnap()),"data-tooltip":"Snap to grid"},[...a[21]||(a[21]=[un('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="5" cy="5" r="1" data-v-53bae632></circle><circle cx="12" cy="5" r="1" data-v-53bae632></circle><circle cx="19" cy="5" r="1" data-v-53bae632></circle><circle cx="5" cy="12" r="1" data-v-53bae632></circle><circle cx="12" cy="12" r="1" data-v-53bae632></circle><circle cx="19" cy="12" r="1" data-v-53bae632></circle><circle cx="5" cy="19" r="1" data-v-53bae632></circle><circle cx="12" cy="19" r="1" data-v-53bae632></circle><circle cx="19" cy="19" r="1" data-v-53bae632></circle></svg>',1)])],2)])]))}},iO=St(rO,[["__scopeId","data-v-53bae632"]]),sO=["onMousedown"],oO={key:1,class:"selection-border locked-border"},aO={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=In(),r=pn(),i=_n("canvasScale",ge(1)),s=Se(()=>n.projectId),o=Se(()=>n.currentSlideId),a=Se(()=>n.selectedElementIds.includes(e.element.id)),l=Se(()=>e.element.locked),d=Se(()=>e.element.visible!==!1);let h=!1,m=0,g=0,y=new Map;function w(ae){var ie;if(l.value||ae.target.classList.contains("resize-handle"))return;const J=ae.ctrlKey||ae.metaKey||ae.shiftKey;a.value?J&&n.selectElement(e.element.id,!0):n.selectElement(e.element.id,J),n.setActiveTool("select"),h=!1,m=ae.clientX,g=ae.clientY,y.clear();const ce=(ie=r.getProject(s.value))==null?void 0:ie.slides.find(ye=>ye.id===o.value);ce&&n.selectedElementIds.forEach(ye=>{const re=ce.elements.find(ee=>ee.id===ye);re&&!re.locked&&y.set(ye,{x:re.x,y:re.y})}),window.addEventListener("mousemove",v),window.addEventListener("mouseup",I),ae.stopPropagation()}function v(ae){const J=(ae.clientX-m)/i.value,ce=(ae.clientY-g)/i.value;!h&&(Math.abs(J)>3||Math.abs(ce)>3)&&(h=!0),h&&y.forEach((ie,ye)=>{let re=ie.x+J,ee=ie.y+ce;if(n.snapToGrid&&n.gridSize){const Ie=n.gridSize;re=Math.round(re/Ie)*Ie,ee=Math.round(ee/Ie)*Ie}r.updateElement(s.value,o.value,ye,{x:re,y:ee})})}function I(ae){h||!(ae.ctrlKey||ae.metaKey||ae.shiftKey)&&n.selectedElementIds.length>1&&n.selectElement(e.element.id,!1),h=!1,window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",I)}const C=["n","ne","e","se","s","sw","w","nw"];let R=!1,V="",M=0,f=0,G=0,N=0,A=0,x=0;function P(ae,J){l.value||(ae.stopPropagation(),ae.preventDefault(),R=!0,V=J,M=ae.clientX,f=ae.clientY,G=e.element.width,N=e.element.height,A=e.element.x,x=e.element.y,window.addEventListener("mousemove",O),window.addEventListener("mouseup",_))}function O(ae){if(!R)return;const J=i.value,ce=(ae.clientX-M)/J,ie=(ae.clientY-f)/J,ye=20;let re=A,ee=x,Ie=G,we=N;if(V.includes("e")&&(Ie=Math.max(ye,G+ce)),V.includes("s")&&(we=Math.max(ye,N+ie)),V.includes("w")){const te=Math.max(ye,G-ce);re=A+(G-te),Ie=te}if(V.includes("n")){const te=Math.max(ye,N-ie);ee=x+(N-te),we=te}if(n.snapToGrid&&n.gridSize){const te=n.gridSize;Ie=Math.round(Ie/te)*te,we=Math.round(we/te)*te,re=Math.round(re/te)*te,ee=Math.round(ee/te)*te}r.updateElement(s.value,o.value,e.element.id,{x:re,y:ee,width:Ie,height:we})}function _(){R=!1,window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",_)}function T(){["text","heading"].includes(e.element.type)&&n.setRightPanel("properties")}const E=Se(()=>({position:"absolute",left:`${e.element.x}px`,top:`${e.element.y}px`,width:`${e.element.width}px`,height:`${e.element.height}px`,transform:`rotate(${e.element.rotation||0}deg)`,opacity:e.element.opacity??1,zIndex:e.element.zIndex||1,cursor:l.value?"not-allowed":"move",visibility:d.value?"visible":"hidden",userSelect:"none"}));function Y(ae){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[ae]||"auto"}return(ae,J)=>(W(),Q("div",{class:Fe(["element-wrapper",a.value&&"selected",l.value&&"locked"]),style:ze(E.value),onMousedown:w,onDblclick:T},[Cu(ae.$slots,"default",{},void 0),a.value&&!l.value?(W(),Q(Oe,{key:0},[J[0]||(J[0]=u("div",{class:"selection-border"},null,-1)),(W(),Q(Oe,null,it(C,ce=>u("div",{key:ce,class:Fe(["resize-handle",`handle-${ce}`]),style:ze({cursor:Y(ce)}),onMousedown:Ht(ie=>P(ie,ce),["stop"])},null,46,sO)),64))],64)):Re("",!0),a.value&&l.value?(W(),Q("div",oO)):Re("",!0)],38))}},lO=St(aO,[["__scopeId","data-v-2b4aa1b3"]]),cO=["contenteditable"],vu={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=In(),i=pn(),s=ge(!1),o=ge(null),a=ge("");Bt(()=>n.value.text,g=>{s.value||(a.value=g||(e.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function l(){r.selectedElementId===e.element.id&&(s.value=!0,Jo(()=>{if(o.value){o.value.focus();const g=document.createRange();g.selectNodeContents(o.value),g.collapse(!1);const y=window.getSelection();y.removeAllRanges(),y.addRange(g)}}))}function d(g){}function h(g){s.value&&g.stopPropagation()}function m(){if(s.value=!1,o.value){const g=o.value.innerText;a.value=g,i.updateElement(r.projectId,r.currentSlideId,e.element.id,{content:{...e.element.content,text:g}})}}return(g,y)=>(W(),Q("div",{class:"text-element",ref_key:"textRef",ref:o,contenteditable:s.value,onDblclick:l,onBlur:m,onInput:d,onMousedown:h,style:ze({fontSize:(n.value.fontSize||16)+"px",fontFamily:n.value.fontFamily||"Inter, sans-serif",fontWeight:n.value.fontWeight||"normal",fontStyle:n.value.fontStyle||"normal",textDecoration:n.value.textDecoration||"none",textAlign:n.value.textAlign||"left",color:n.value.color||"#1a1a2e",lineHeight:n.value.lineHeight||1.5,textTransform:n.value.textTransform||"none",letterSpacing:(n.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:s.value?"2px solid var(--primary)":"none",cursor:s.value?"text":"inherit",userSelect:s.value?"text":"none"})},ve(a.value),45,cO))}},uO=["src","alt"],dO={key:1,class:"image-placeholder"},hO={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},fO={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o;return W(),Q("div",{class:"image-element",style:ze({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((r=t.element.content)==null?void 0:r.borderRadius)||0)+"px",border:`${((i=t.element.content)==null?void 0:i.borderWidth)||0}px solid ${((s=t.element.content)==null?void 0:s.borderColor)||"transparent"}`})},[(o=t.element.content)!=null&&o.src?(W(),Q("img",{key:0,src:t.element.content.src,alt:t.element.content.alt||"",style:ze({width:"100%",height:"100%",objectFit:t.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,uO)):(W(),Q("div",dO,[(W(),Q("svg",hO,[...n[0]||(n[0]=[u("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),u("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),u("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),n[1]||(n[1]=u("span",null,"Image",-1))]))],4)}}},pO=St(fO,[["__scopeId","data-v-401e9ff3"]]),mO={class:"shape-element",style:{width:"100%",height:"100%"}},gO=["width","height"],vO=["points","fill","stroke","stroke-width"],yO={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const o=n.value.shapeType||"rectangle",a={width:"100%",height:"100%",background:n.value.fillColor||"#6c47ff",border:`${n.value.borderWidth||0}px solid ${n.value.borderColor||"transparent"}`,opacity:n.value.opacity??1};return o==="circle"?{...a,borderRadius:"50%"}:o==="rectangle"?{...a,borderRadius:(n.value.borderRadius||0)+"px"}:a}),i=Se(()=>["triangle","star","arrow","diamond"].includes(n.value.shapeType)),s=Se(()=>{const o=e.element.width||150,a=e.element.height||100,l=n.value.shapeType;if(l==="triangle")return`${o/2},0 ${o},${a} 0,${a}`;if(l==="diamond")return`${o/2},0 ${o},${a/2} ${o/2},${a} 0,${a/2}`;if(l==="arrow")return`0,${a*.3} ${o*.6},${a*.3} ${o*.6},0 ${o},${a/2} ${o*.6},${a} ${o*.6},${a*.7} 0,${a*.7}`;if(l==="star"){const d=o/2,h=a/2,m=Math.min(o,a)/2,g=m*.4;let y="";for(let w=0;w<10;w++){const v=(w*36-90)*Math.PI/180,I=w%2===0?m:g;y+=`${d+I*Math.cos(v)},${h+I*Math.sin(v)} `}return y.trim()}return""});return(o,a)=>(W(),Q("div",mO,[i.value?(W(),Q("svg",{key:1,width:t.element.width,height:t.element.height,style:{display:"block",overflow:"visible"}},[u("polygon",{points:s.value,fill:n.value.fillColor||"#6c47ff",stroke:n.value.borderColor||"none","stroke-width":n.value.borderWidth||0},null,8,vO)],8,gO)):(W(),Q("div",{key:0,style:ze(r.value)},null,4))]))}},bO={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const i={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},s=i[n.value.variant||"primary"]||i.primary;return{...s,background:n.value.bgColor||s.background,color:n.value.textColor||s.color,border:n.value.borderColor?`1px solid ${n.value.borderColor}`:s.border,borderRadius:(n.value.borderRadius??8)+"px"}});return(i,s)=>(W(),Q("div",{class:"button-element",style:ze({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(n.value.fontSize??15)+"px",fontWeight:n.value.fontWeight??600,letterSpacing:(n.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:n.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...r.value})},ve(n.value.label||"Button"),5))}},_O={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},wO={class:"popup-header"},EO={class:"popup-body"},IO={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=ge(!1);function i(s){s.stopPropagation(),r.value=!r.value}return(s,o)=>(W(),Q("div",_O,[u("div",{class:"hotspot-btn",style:ze({width:"100%",height:"100%",background:n.value.bgColor||"#6c47ff",borderRadius:(n.value.borderRadius??999)>=999?"50%":(n.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:n.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Ht(i,["stop"])},ve(n.value.icon||"?"),5),pt(vr,{name:"fade"},{default:bt(()=>[r.value?(W(),Q("div",{key:0,class:"hotspot-popup",style:ze({background:n.value.popupBgColor||"#ffffff",color:n.value.popupTextColor||"#1a1a2e"})},[u("div",wO,[u("strong",null,ve(n.value.popupTitle||"Info"),1),u("button",{class:"popup-close",onClick:o[0]||(o[0]=Ht(a=>r.value=!1,["stop"]))},"×")]),u("div",EO,ve(n.value.popupContent||"Add your content in the properties panel."),1)],4)):Re("",!0)]),_:1})]))}},TO=St(IO,[["__scopeId","data-v-ef5f15f6"]]),CO={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},xO=["src"],kO=["src","poster","autoplay","controls","loop","muted"],SO={key:2,class:"video-placeholder"},AO={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},RO={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const s=n.value.src||"";return s.includes("youtube")||s.includes("youtu.be")}),i=Se(()=>{var o,a;const s=n.value.src||"";if(r.value){const l=(o=s.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:o[1];return l?`https://www.youtube.com/embed/${l}`:""}if(s.includes("vimeo.com")){const l=(a=s.match(/vimeo\.com\/(\d+)/))==null?void 0:a[1];return l?`https://player.vimeo.com/video/${l}`:""}return""});return(s,o)=>(W(),Q("div",CO,[i.value?(W(),Q("iframe",{key:0,src:i.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,xO)):n.value.src&&!i.value?(W(),Q("video",{key:1,src:n.value.src,poster:n.value.poster,autoplay:n.value.autoplay,controls:n.value.controls!==!1,loop:n.value.loop,muted:n.value.muted,style:ze({width:"100%",height:"100%",objectFit:n.value.objectFit||"cover"})},null,12,kO)):(W(),Q("div",SO,[(W(),Q("svg",AO,[...o[0]||(o[0]=[u("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),u("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),o[1]||(o[1]=u("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},PO=St(RO,[["__scopeId","data-v-dfea1a16"]]),NO=["stroke"],DO=["src","controls","autoplay","loop"],OO={key:1,style:{"font-size":"11px",color:"#aaa"}},MO={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o,a,l,d,h,m;return W(),Q("div",{class:"audio-element",style:ze({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((r=t.element.content)==null?void 0:r.bgColor)||"#ede7ff",border:`1px solid ${((i=t.element.content)==null?void 0:i.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(W(),Q("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((s=t.element.content)==null?void 0:s.accentColor)||"#6c47ff","stroke-width":"2"},[...n[1]||(n[1]=[u("path",{d:"M9 18V5l12-2v13"},null,-1),u("circle",{cx:"6",cy:"18",r:"3"},null,-1),u("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,NO)),u("span",{style:ze({fontSize:"13px",color:((o=t.element.content)==null?void 0:o.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},ve(((a=t.element.content)==null?void 0:a.label)||"Audio Player"),5),(l=t.element.content)!=null&&l.src?(W(),Q("audio",{key:0,src:t.element.content.src,controls:((d=t.element.content)==null?void 0:d.controls)!==!1,autoplay:(h=t.element.content)==null?void 0:h.autoplay,loop:(m=t.element.content)==null?void 0:m.loop,style:{height:"28px","max-width":"180px"},onMousedown:n[0]||(n[0]=Ht(()=>{},["stop"]))},null,40,DO)):(W(),Q("span",OO,"No source"))],4)}}},LO={class:"quiz-options"},VO=["onClick"],$O={class:"opt-letter"},FO={class:"opt-text"},UO={key:0},zO={class:"quiz-actions"},BO=["disabled"],jO={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=ge(null),i=ge(!1);function s(d){i.value||(r.value=d)}function o(){r.value!==null&&(i.value=!0)}function a(){r.value=null,i.value=!1}const l=Se(()=>i.value&&r.value===(n.value.correctIndex??0));return(d,h)=>(W(),Q("div",{class:"quiz-element",style:ze({width:"100%",height:"100%",background:n.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":n.value.accentColor||"#6c47ff"})},[u("p",{style:ze({fontSize:"15px",fontWeight:600,color:n.value.questionColor||"#1a1a2e",lineHeight:1.4})},ve(n.value.question||"Question text…"),5),u("div",LO,[(W(!0),Q(Oe,null,it(n.value.options||[],(m,g)=>(W(),Q("div",{key:g,class:Fe(["quiz-opt",r.value===g&&"selected",i.value&&g===n.value.correctIndex&&"correct",i.value&&r.value===g&&g!==n.value.correctIndex&&"wrong"]),onClick:y=>s(g)},[u("span",$O,ve(String.fromCharCode(65+g)),1),u("span",FO,ve(m),1)],10,VO))),128))]),i.value?(W(),Q("div",{key:0,class:Fe(["quiz-feedback",l.value?"correct":"wrong"])},[Ne(ve(l.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!l.value&&n.value.explanation?(W(),Q("span",UO,ve(n.value.explanation),1)):Re("",!0)],2)):Re("",!0),u("div",zO,[i.value?(W(),Q("button",{key:1,class:"quiz-btn secondary",onClick:a},"Try Again")):(W(),Q("button",{key:0,class:"quiz-btn primary",disabled:r.value===null,onClick:o},"Submit",8,BO))])],4))}},qO=St(jO,[["__scopeId","data-v-ca2bd187"]]),WO={key:0,class:"canvas-empty"},HO={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},GO={key:0,class:"drop-hint"},KO={class:"canvas-info-bar"},QO=["disabled"],JO={class:"slide-index"},YO=["disabled"],XO={key:0},Ma=960,La=540,ZO={__name:"EditorCanvas",setup(t){const e=In(),n=pn(),r=ge(null),i=ge(null),s=ge(1);fo("canvasScale",s);const o=Se(()=>n.getProject(e.projectId)),a=Se(()=>{var te,ue;return(ue=(te=o.value)==null?void 0:te.slides)==null?void 0:ue.find(K=>K.id===e.currentSlideId)}),l=Se(()=>{var te;return[...((te=o.value)==null?void 0:te.slides)||[]].sort((ue,K)=>ue.order-K.order)}),d=Se(()=>l.value.findIndex(te=>te.id===e.currentSlideId)),h=Se(()=>{var te;return[...((te=a.value)==null?void 0:te.elements)||[]].sort((ue,K)=>(ue.zIndex||0)-(K.zIndex||0))}),m=Se(()=>{const te=a.value;return te?te.backgroundType==="gradient"&&te.backgroundGradient?{background:te.backgroundGradient}:te.backgroundType==="image"&&te.backgroundImage?{backgroundImage:`url(${te.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:te.background||"#fff"}:{background:"#fff"}}),g=Se(()=>`scale(${e.zoomLevel})`);function y(){if(!r.value)return;const{clientWidth:te,clientHeight:ue}=r.value,K=(te-80)/Ma,X=(ue-80)/La;s.value=Math.min(K,X)}let w=null;Yo(()=>{y(),w=new ResizeObserver(y),r.value&&w.observe(r.value)}),Xo(()=>w==null?void 0:w.disconnect());const v=ge({x:0,y:0}),I=ge({x:0,y:0}),C=ge(!1),R=ge(!1),V=Se(()=>{if(!C.value)return null;const te=Math.min(v.value.x,I.value.x),ue=Math.min(v.value.y,I.value.y),K=Math.abs(I.value.x-v.value.x),X=Math.abs(I.value.y-v.value.y);return{x:te,y:ue,width:K,height:X}});function M(te){!C.value&&(te.target===i.value||te.target===te.currentTarget)&&e.clearSelection()}function f(te){return te?Array.from(te.files||[]).some(ue=>ue.type.startsWith("image/")):!1}function G(te,ue,K){if(!te||!te.type.startsWith("image/"))return;const X=new FileReader;X.onload=()=>{const me=String(X.result||"");if(!me)return;const oe=new Image;oe.onload=()=>{const _e=i.value.getBoundingClientRect(),F=(ue-_e.left)/e.zoomLevel,q=(K-_e.top)/e.zoomLevel,B=Math.min(420/oe.width,280/oe.height,1),D=Math.max(120,Math.round(oe.width*B)),L=Math.max(80,Math.round(oe.height*B)),z=Math.max(0,Math.min(Ma-D,Math.round(F-D/2))),U=Math.max(0,Math.min(La-L,Math.round(q-L/2))),S=n.addElement(e.projectId,e.currentSlideId,"image",{x:z,y:U,width:D,height:L,content:{src:me,alt:te.name,objectFit:"cover"}});S&&(e.selectElement(S.id),e.setActiveTool("select"),e.setRightPanel("properties"))},oe.src=me},X.readAsDataURL(te)}function N(te){f(te.dataTransfer)&&(te.preventDefault(),te.dataTransfer.dropEffect="copy",R.value=!0)}function A(te){var ue;(ue=te.currentTarget)!=null&&ue.contains(te.relatedTarget)||(R.value=!1)}function x(te){if(!f(te.dataTransfer))return;te.preventDefault(),R.value=!1;const ue=Array.from(te.dataTransfer.files||[]).find(K=>K.type.startsWith("image/"));ue&&G(ue,te.clientX,te.clientY)}function P(te){const ue=e.activeTool;if(te.target!==i.value&&te.target!==te.currentTarget)return;te.preventDefault(),te.stopPropagation();const K=i.value.getBoundingClientRect(),X=(te.clientX-K.left)/e.zoomLevel,me=(te.clientY-K.top)/e.zoomLevel;if(ue==="select"){C.value=!0,v.value={x:X,y:me},I.value={x:X,y:me};const F=p=>{I.value={x:(p.clientX-K.left)/e.zoomLevel,y:(p.clientY-K.top)/e.zoomLevel}},q=()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",q);const p=V.value;if(p&&(p.width>2||p.height>2)){const H=h.value.filter(B=>{const D=B.x,L=B.y,z=B.width||100,U=B.height||100;return D<p.x+p.width&&D+z>p.x&&L<p.y+p.height&&L+U>p.y}).map(B=>B.id);H.length>0?e.setSelection(H):e.clearSelection()}else e.clearSelection();setTimeout(()=>{C.value=!1},0)};window.addEventListener("mousemove",F),window.addEventListener("mouseup",q);return}const oe=F=>e.snapToGrid?Math.round(F/e.gridSize)*e.gridSize:F,_e=n.addElement(e.projectId,e.currentSlideId,ue,{x:oe(X-75),y:oe(me-40)});_e&&(e.selectElement(_e.id),e.setActiveTool("select"),e.setRightPanel("properties"))}const O=Se(()=>{if(!e.showGrid)return{};const te=e.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${te}px ${te}px`}}),_={text:vu,heading:vu,image:pO,shape:yO,button:bO,hotspot:TO,video:PO,audio:MO,quiz:qO,divider:"div"};function T(te){return _[te]||vu}function E(te){var ue,K;return te.type!=="divider"?{}:{borderTop:`${((ue=te.content)==null?void 0:ue.thickness)||2}px solid ${((K=te.content)==null?void 0:K.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const Y=ge({show:!1,x:0,y:0,elId:null});function ae(te,ue){te.preventDefault(),Y.value={show:!0,x:te.clientX,y:te.clientY,elId:ue},e.selectElement(ue),setTimeout(()=>window.addEventListener("click",J,{once:!0}),0)}function J(){Y.value.show=!1}function ce(){if(Y.value.elId){const te=n.duplicateElement(e.projectId,e.currentSlideId,Y.value.elId);te&&e.selectElement(te.id)}J()}function ie(){Y.value.elId&&(n.deleteElement(e.projectId,e.currentSlideId,Y.value.elId),e.clearSelection()),J()}function ye(){Y.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,Y.value.elId,"up"),J()}function re(){Y.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,Y.value.elId,"down"),J()}function ee(){const te=d.value,ue=n.addSlide(e.projectId,te);ue&&e.setCurrentSlide(ue.id)}function Ie(){const te=d.value;te>0&&e.setCurrentSlide(l.value[te-1].id)}function we(){const te=d.value;te<l.value.length-1&&e.setCurrentSlide(l.value[te+1].id)}return(te,ue)=>{var K;return W(),Q("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:r},[a.value?(W(),Q(Oe,{key:1},[u("div",{class:"canvas-zoom-wrapper",style:ze({transform:g.value,transformOrigin:"center center",transition:"transform .15s ease"})},[u("div",{ref_key:"canvasRef",ref:i,class:"slide-canvas",style:ze({width:Ma+"px",height:La+"px",...m.value,...O.value}),onClick:M,onMousedown:P,onDragover:N,onDragleave:A,onDrop:x,onContextmenu:ue[0]||(ue[0]=Ht(()=>{},["prevent"]))},[(W(!0),Q(Oe,null,it(h.value,X=>(W(),at(lO,{key:X.id,element:X,onContextmenu:Ht(me=>ae(me,X.id),["stop"])},{default:bt(()=>[(W(),at(av(T(X.type)),{element:X,style:ze(X.type==="divider"?E(X):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),be(e).activeTool!=="select"||R.value?(W(),Q("div",GO,ve(R.value?"Drop image to insert it on this slide":`Click anywhere to add ${be(e).activeTool}`),1)):Re("",!0),C.value&&V.value?(W(),Q("div",{key:1,class:"selection-marquee",style:ze({left:V.value.x+"px",top:V.value.y+"px",width:V.value.width+"px",height:V.value.height+"px"})},null,4)):Re("",!0)],36)],4),u("div",KO,[u("button",{class:"bar-btn",onClick:ee},"Add page"),u("button",{class:"bar-btn icon",onClick:Ie,disabled:d.value<=0},"◀",8,QO),u("span",JO,ve(d.value+1)+" / "+ve(l.value.length),1),u("button",{class:"bar-btn icon",onClick:we,disabled:d.value>=l.value.length-1},"▶",8,YO),u("span",null,ve(Ma)+" × "+ve(La)+"px"),ue[4]||(ue[4]=u("span",null,"·",-1)),u("span",null,ve(((K=a.value.elements)==null?void 0:K.length)||0)+" elements",1),be(e).hasSelection?(W(),Q("span",XO,"· "+ve(be(e).selectedElementIds.length)+" selected",1)):Re("",!0),u("button",{class:"bar-btn ai",onClick:ue[1]||(ue[1]=X=>be(e).setRightPanel("ai"))},"AI")])],64)):(W(),Q("div",WO,[(W(),Q("svg",HO,[...ue[2]||(ue[2]=[u("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),ue[3]||(ue[3]=u("p",null,"Select a slide to start editing",-1))])),(W(),at(Td,{to:"body"},[Y.value.show?(W(),Q("div",{key:0,class:"ctx-menu",style:ze({left:Y.value.x+"px",top:Y.value.y+"px"})},[u("button",{class:"ctx-item",onClick:ce},"Duplicate"),u("button",{class:"ctx-item",onClick:ye},"Bring Forward"),u("button",{class:"ctx-item",onClick:re},"Send Backward"),ue[5]||(ue[5]=u("div",{class:"ctx-divider"},null,-1)),u("button",{class:"ctx-item danger",onClick:ie},"Delete")],4)):Re("",!0)]))],512)}}},eM=St(ZO,[["__scopeId","data-v-47ef6b03"]]),tM={class:"ai-panel"},nM={class:"ai-mode-tabs"},rM=["onClick"],iM={class:"ai-content"},sM={class:"form-group"},oM={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},aM={key:0,class:"form-group"},lM={key:1,class:"form-group"},cM={class:"form-group"},uM={class:"form-group"},dM={class:"prompt-label-row"},hM={key:1,class:"prompt-auto-badge"},fM={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},pM=["disabled"],mM={key:0,class:"spinner"},gM={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vM={key:3,class:"creative-options-wrap"},yM={class:"result-header"},bM={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},_M={key:1,class:"creative-options-list"},wM={class:"creative-title"},EM={class:"creative-angle"},IM=["onClick"],TM={class:"form-group"},CM={class:"quiz-config-row"},xM={class:"form-group",style:{flex:"1"}},kM={class:"form-group",style:{flex:"1"}},SM={class:"form-group"},AM={class:"qtype-btns"},RM=["onClick"],PM={class:"qtype-icon"},NM={class:"form-group"},DM={class:"form-group"},OM={class:"prompt-label-row"},MM={key:1,class:"prompt-auto-badge"},LM=["disabled"],VM={key:0,class:"spinner"},$M={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},FM={key:0,class:"quiz-results"},UM={class:"quiz-results-header"},zM={class:"form-label"},BM={class:"quiz-header-actions"},jM={class:"regen-row"},qM=["disabled"],WM={key:0,class:"spinner spinner-sm"},HM={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},GM=["disabled"],KM={class:"quiz-card-header"},QM={class:"quiz-card-check"},JM=["onUpdate:modelValue"],YM={class:"q-num"},XM={class:"q-badges"},ZM={class:"badge type-badge"},e8={class:"q-question"},t8={class:"q-options"},n8={class:"q-option-letter"},r8={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},i8={key:0,class:"q-explanation"},s8=["disabled"],o8={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},a8=["disabled"],l8={key:0,class:"spinner"},c8={key:0,class:"selected-text-preview"},u8={class:"text-preview"},d8={key:1,class:"ai-hint"},h8={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},f8=["disabled"],p8={key:0,class:"spinner"},m8={key:0,class:"selected-text-preview"},g8={class:"text-preview"},v8={key:1,class:"ai-hint"},y8={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},b8=["disabled"],_8={key:0,class:"spinner"},w8={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},E8={class:"result-header"},I8={class:"result-actions"},T8=["disabled"],C8={class:"textarea result-display"},x8={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},k8=["disabled"],S8={key:0,class:"spinner"},A8={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},R8={class:"textarea result-display",style:{color:"var(--color-primary)"}},P8={key:6,class:"ai-settings"},N8={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},D8=["value"],O8={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},M8=["value"],L8={key:0,class:"demo-notice"},V8={key:7,class:"result-area"},$8={class:"result-header"},F8={class:"result-pre"},U8={class:"result-actions"},z8=["disabled"],B8={key:8,class:"ai-error"},j8={__name:"AIAssistant",setup(t){const e=Gb(),n=In(),r=pn(),i=ge("generate"),s=ge(""),o=ge(""),a=ge("");Bt(i,()=>{a.value=""});const l=ge(4),d=ge("general"),h=ge("Spanish"),m=ge(""),g=ge(""),y=ge(""),w=ge(!1),v=ge("single"),I=ge(5),C=ge("slide"),R=ge([]),V=ge(""),M=Se(()=>{const U=o.value.trim()||"[your topic]";if(v.value==="deck"){let ne=`Create a complete ${I.value}-slide learning deck about "${U}".`;return g.value.trim()&&(ne+=`
Additional context: ${g.value.trim()}`),ne+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,ne+=`
Make each slide distinct, logically sequenced, and specific to "${U}".`,ne}let j=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[d.value]||"educational slide"} about "${U}".`;return g.value.trim()&&(j+=`
Additional context: ${g.value.trim()}`),j+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${U}" — no generic placeholders.`,j});Bt(M,U=>{w.value||(y.value=U)},{immediate:!0});function f(){y.value=M.value,w.value=!1}const G=ge(""),N=ge("intermediate"),A=ge("multiple-choice"),x=ge(""),P=ge([]),O=ge(""),_=ge(!1),T=Se(()=>{const U=G.value.trim()||"[your topic]",S={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},j={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let ne=`Generate ${l.value} ${S[N.value]} ${j[A.value]} quiz questions about "${U}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return x.value.trim()&&(ne+=`
Learning objective: ${x.value.trim()}`),ne});Bt(T,U=>{_.value||(O.value=U)},{immediate:!0});function E(){O.value=T.value,_.value=!1}const Y=Se(()=>r.getProject(n.projectId)),ae=Se(()=>{var U,S;return(S=(U=Y.value)==null?void 0:U.slides)==null?void 0:S.find(j=>j.id===n.currentSlideId)}),J=Se(()=>{var U,S;return n.selectedElementId?(S=(U=ae.value)==null?void 0:U.elements)==null?void 0:S.find(j=>j.id===n.selectedElementId):null});async function ce(){if(!o.value.trim()&&!y.value.trim())return;if(a.value="",R.value=[],V.value="",v.value==="deck"){const S=await e.generateSlideDeck(o.value,I.value,{objective:g.value,customPrompt:y.value});if(S!=null&&S.length){const j=S.map(ne=>ie(ne));a.value=JSON.stringify({slides:j},null,2),Ie(j,{replaceGenerated:!0})}return}if(C.value==="options"){await ue();return}const U=await e.generateSlideContent(o.value,d.value,g.value,y.value);if(U){const S=ie(U);a.value=JSON.stringify(S,null,2),we(S,{replaceGenerated:!0})}}function ie(U){const S=U&&typeof U=="object"?U:{},ne=(Array.isArray(S.bullets)?S.bullets:typeof S.bullets=="string"?S.bullets.split(`
`):[]).map(le=>String(le||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(S.title||o.value||"Untitled Slide").trim(),subtitle:String(S.subtitle||"").trim(),bullets:ne,callout:String(S.callout||"").trim()}}function ye(U,S){var le,fe,Te;const j=(fe=(le=r.getProject(U))==null?void 0:le.slides)==null?void 0:fe.find(Pe=>Pe.id===S);if(!((Te=j==null?void 0:j.elements)!=null&&Te.length))return;j.elements.filter(Pe=>{var he;return((he=Pe.meta)==null?void 0:he.source)==="ai-content"}).map(Pe=>Pe.id).forEach(Pe=>{r.deleteElement(U,S,Pe)})}function re(U,S,j,ne){return r.addElement(U,S,j,{...ne,meta:{...ne.meta||{},source:"ai-content"}})}function ee(U,S,j,{replaceGenerated:ne=!1}={}){var le;if(!(!U||!S)){if(ne&&ye(U,S),j.title&&(r.updateSlide(U,S,{title:j.title}),re(U,S,"heading",{x:60,y:40,width:840,height:80,content:{text:j.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),j.subtitle&&re(U,S,"text",{x:60,y:130,width:840,height:50,content:{text:j.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(le=j.bullets)!=null&&le.length){const fe=j.bullets.map(Te=>`• ${Te}`).join(`
`);re(U,S,"text",{x:60,y:j.subtitle?200:150,width:840,height:200,content:{text:fe,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}j.callout&&(re(U,S,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),re(U,S,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${j.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function Ie(U,{replaceGenerated:S=!1}={}){if(!n.currentSlideId)return;const j=n.projectId;if(!j||!Array.isArray(U)||!U.length)return;U.map(le=>ie(le)).forEach(le=>{const fe=r.addSlide(j);fe&&ee(j,fe.id,le,{replaceGenerated:S})})}function we(U=null,{replaceGenerated:S=!1}={}){if(!n.currentSlideId)return;let j=U;if(!j){if(!a.value)return;try{j=JSON.parse(a.value)}catch(Te){console.warn("Could not parse AI content:",Te);return}}const ne=ie(j),le=n.projectId,fe=n.currentSlideId;!le||!fe||ee(le,fe,ne,{replaceGenerated:S})}function te(){if(a.value){if(v.value==="deck"){try{const U=JSON.parse(a.value),S=Array.isArray(U)?U:U==null?void 0:U.slides;if(!Array.isArray(S)||!S.length)return;Ie(S,{replaceGenerated:!0})}catch{return}return}we()}}async function ue(){const U=o.value.trim()||"[your topic]",S=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${d.value}" slide about "${U}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,j=await e.generate(S,{type:"creativeOptions",topic:U,slideType:d.value});if(j)try{const ne=JSON.parse(j.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(ne))throw new Error("Options must be an array");R.value=ne.slice(0,3).map((le,fe)=>({title:String((le==null?void 0:le.title)||`Option ${fe+1}`),angle:String((le==null?void 0:le.angle)||""),prompt:String((le==null?void 0:le.prompt)||"")})).filter(le=>le.prompt.trim()),R.value.length||(V.value="No usable creative options were returned. Try generating again.")}catch{V.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function K(U){U!=null&&U.prompt&&(y.value=U.prompt,w.value=!0,C.value="slide",await ce())}async function X(U=!1){if(!G.value.trim()&&!O.value.trim())return;U||(P.value=[]);const S=await e.generateQuiz(G.value,l.value,{difficulty:N.value,questionType:A.value,objective:x.value,customPrompt:O.value});if(S)if(U){const j=new Set(P.value.map(le=>le.question)),ne=S.filter(le=>!j.has(le.question)).map(le=>({...le,_selected:!0}));P.value=[...P.value,...ne]}else P.value=S.map(j=>({...j,_selected:!0}))}async function me(){const U=P.value.filter(j=>j._selected);if(!U.length)return;const S=n.projectId;U.forEach((j,ne)=>{const le=r.addSlide(S);le&&(r.addElement(S,le.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:j.question,options:j.options,correctIndex:j.correctIndex,explanation:j.explanation||""}}),r.updateSlide(S,le.id,{title:`Q${ne+1}: ${j.question.slice(0,40)}…`}))}),P.value=[]}function oe(U){P.value.forEach(S=>S._selected=U)}async function _e(){if(!m.value.trim())return;const U=await e.generateVoiceoverScript(m.value);U&&(a.value=U)}async function F(){var j,ne;const U=(ne=(j=J.value)==null?void 0:j.content)==null?void 0:ne.text;if(!U)return;const S=await e.generateTranslation(U,h.value);S&&(a.value=S)}async function q(){!a.value||!J.value||r.updateElement(n.projectId,n.currentSlideId,J.value.id,{content:{...J.value.content,text:a.value}})}const p=ge(""),H=ge(!1);async function B(){if(p.value.trim()){H.value=!0,a.value="Optimizing prompt...";try{let U=p.value;const S=await e.generateImagePrompt(p.value);S&&(U=S.replace(/```(json)?\n?/g,"").trim()),a.value="Painting image... this takes about 10-20 seconds. Please wait.";const j=Math.floor(Math.random()*1e6),ne=`https://image.pollinations.ai/prompt/${encodeURIComponent(U)}?width=600&height=400&nologo=true&seed=${j}`;await new Promise((le,fe)=>{const Te=new Image;Te.onload=le,Te.onerror=fe,Te.src=ne}),r.addElement(n.projectId,n.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:ne,objectFit:"cover"}}),a.value="Image added to slide!"}catch{a.value="Failed to generate image. Try a different prompt."}finally{H.value=!1}}}async function D(){var S,j;if(!((j=(S=J.value)==null?void 0:S.content)!=null&&j.text))return;const U=await e.improveText(J.value.content.text,s.value||"Make it clearer and more engaging");U&&(a.value=U)}async function L(){!a.value||!J.value||r.updateElement(n.projectId,n.currentSlideId,J.value.id,{content:{...J.value.content,text:a.value}})}async function z(){if(!s.value.trim())return;const U=await e.generate(s.value);U&&(a.value=U)}return(U,S)=>{var j,ne,le,fe,Te,Pe;return W(),Q("div",tM,[u("div",nM,[(W(),Q(Oe,null,it([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],he=>u("button",{key:he.id,class:Fe(["ai-mode-btn",i.value===he.id&&"active"]),onClick:je=>i.value=he.id},ve(he.label),11,rM)),64))]),u("div",iM,[i.value==="generate"?(W(),Q(Oe,{key:0},[u("div",sM,[S[34]||(S[34]=u("label",{class:"form-label"},[Ne("Topic / Subject "),u("span",{class:"required"},"*")],-1)),ht(u("input",{"onUpdate:modelValue":S[0]||(S[0]=he=>o.value=he),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:Nu(ce,["enter"])},null,544),[[Mt,o.value]])]),u("div",oM,[u("button",{class:Fe(["output-mode-btn",v.value==="single"&&"active"]),onClick:S[1]||(S[1]=he=>v.value="single")},"Single Slide",2),u("button",{class:Fe(["output-mode-btn",v.value==="deck"&&"active"]),onClick:S[2]||(S[2]=he=>v.value="deck")},"Slide Deck",2)]),v.value==="single"?(W(),Q("div",aM,[S[36]||(S[36]=u("label",{class:"form-label"},"Slide Type",-1)),ht(u("select",{"onUpdate:modelValue":S[3]||(S[3]=he=>d.value=he),class:"select"},[...S[35]||(S[35]=[un('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[Sa,d.value]])])):(W(),Q("div",lM,[S[37]||(S[37]=u("label",{class:"form-label"},"Number of Slides",-1)),ht(u("input",{"onUpdate:modelValue":S[4]||(S[4]=he=>I.value=he),class:"input",type:"number",min:"1",max:"20"},null,512),[[Mt,I.value,void 0,{number:!0}]]),S[38]||(S[38]=u("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),u("div",cM,[S[39]||(S[39]=u("label",{class:"form-label"},[Ne("Description "),u("span",{class:"optional"},"(optional)")],-1)),ht(u("textarea",{"onUpdate:modelValue":S[5]||(S[5]=he=>g.value=he),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[Mt,g.value]])]),u("div",uM,[u("div",dM,[S[41]||(S[41]=u("label",{class:"form-label"},"AI Prompt",-1)),w.value?(W(),Q("button",{key:0,class:"prompt-reset-btn",onClick:f,title:"Reset to auto-generated prompt"},[...S[40]||(S[40]=[u("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[u("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),u("path",{d:"M3 3v5h5"})],-1),Ne(" Reset ",-1)])])):(W(),Q("span",hM,"auto"))]),ht(u("textarea",{"onUpdate:modelValue":S[6]||(S[6]=he=>y.value=he),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:S[7]||(S[7]=he=>w.value=!0),spellcheck:"false"},null,544),[[Mt,y.value]]),S[42]||(S[42]=u("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),v.value==="single"?(W(),Q("div",fM,[u("button",{class:Fe(["output-mode-btn",C.value==="slide"&&"active"]),onClick:S[8]||(S[8]=he=>C.value="slide")},"Show on Slide",2),u("button",{class:Fe(["output-mode-btn",C.value==="options"&&"active"]),onClick:S[9]||(S[9]=he=>C.value="options")},"Creative Options",2)])):Re("",!0),u("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating||!o.value.trim()&&!y.value.trim()||v.value==="deck"&&(!I.value||I.value<1||I.value>20),onClick:ce},[be(e).isGenerating?(W(),Q("span",mM)):(W(),Q("svg",gM,[...S[43]||(S[43]=[u("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Ne(" "+ve(be(e).isGenerating?"Generating…":v.value==="deck"?a.value?`Regenerate ${I.value} Slides`:`Generate ${I.value} Slides`:C.value==="slide"?a.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,pM),v.value==="single"&&C.value==="options"&&(R.value.length||V.value)?(W(),Q("div",vM,[u("div",yM,[S[44]||(S[44]=u("span",{class:"form-label"},"Creative Options",-1)),u("button",{class:"btn btn-ghost btn-sm",onClick:S[10]||(S[10]=he=>{R.value=[],V.value=""})},"Clear")]),V.value?(W(),Q("div",bM,[S[45]||(S[45]=u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"12",cy:"12",r:"10"}),u("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),u("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Ne(" "+ve(V.value),1)])):(W(),Q("div",_M,[(W(!0),Q(Oe,null,it(R.value,(he,je)=>(W(),Q("article",{key:je,class:"creative-option-card"},[u("h4",wM,ve(he.title),1),u("p",EM,ve(he.angle),1),u("button",{class:"btn btn-secondary btn-sm",onClick:rt=>K(he)},"Use This Option",8,IM)]))),128))]))])):Re("",!0)],64)):i.value==="quiz"?(W(),Q(Oe,{key:1},[u("div",TM,[S[46]||(S[46]=u("label",{class:"form-label"},[Ne("Quiz Topic "),u("span",{class:"required"},"*")],-1)),ht(u("input",{"onUpdate:modelValue":S[11]||(S[11]=he=>G.value=he),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:Nu(X,["enter"])},null,544),[[Mt,G.value]])]),u("div",CM,[u("div",xM,[S[48]||(S[48]=u("label",{class:"form-label"},"Questions",-1)),ht(u("select",{"onUpdate:modelValue":S[12]||(S[12]=he=>l.value=he),class:"select"},[...S[47]||(S[47]=[u("option",{value:2},"2",-1),u("option",{value:3},"3",-1),u("option",{value:4},"4",-1),u("option",{value:5},"5",-1),u("option",{value:6},"6",-1),u("option",{value:8},"8",-1),u("option",{value:10},"10",-1)])],512),[[Sa,l.value,void 0,{number:!0}]])]),u("div",kM,[S[50]||(S[50]=u("label",{class:"form-label"},"Difficulty",-1)),ht(u("select",{"onUpdate:modelValue":S[13]||(S[13]=he=>N.value=he),class:"select"},[...S[49]||(S[49]=[u("option",{value:"beginner"},"Beginner",-1),u("option",{value:"intermediate"},"Intermediate",-1),u("option",{value:"advanced"},"Advanced",-1)])],512),[[Sa,N.value]])])]),u("div",SM,[S[51]||(S[51]=u("label",{class:"form-label"},"Question Type",-1)),u("div",AM,[(W(),Q(Oe,null,it([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],he=>u("button",{key:he.id,class:Fe(["qtype-btn",A.value===he.id&&"active"]),onClick:je=>A.value=he.id},[u("span",PM,ve(he.icon),1),u("span",null,ve(he.label),1)],10,RM)),64))])]),u("div",NM,[S[52]||(S[52]=u("label",{class:"form-label"},[Ne("Learning Objective "),u("span",{class:"optional"},"(optional)")],-1)),ht(u("input",{"onUpdate:modelValue":S[14]||(S[14]=he=>x.value=he),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[Mt,x.value]])]),u("div",DM,[u("div",OM,[S[54]||(S[54]=u("label",{class:"form-label"},"AI Prompt",-1)),_.value?(W(),Q("button",{key:0,class:"prompt-reset-btn",onClick:E,title:"Reset to auto-generated prompt"},[...S[53]||(S[53]=[u("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[u("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),u("path",{d:"M3 3v5h5"})],-1),Ne(" Reset ",-1)])])):(W(),Q("span",MM,"auto"))]),ht(u("textarea",{"onUpdate:modelValue":S[15]||(S[15]=he=>O.value=he),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:S[16]||(S[16]=he=>_.value=!0),spellcheck:"false"},null,544),[[Mt,O.value]]),S[55]||(S[55]=u("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),u("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating||!G.value.trim()&&!O.value.trim(),onClick:S[17]||(S[17]=he=>X(!1))},[be(e).isGenerating?(W(),Q("span",VM)):(W(),Q("svg",$M,[...S[56]||(S[56]=[u("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Ne(" "+ve(be(e).isGenerating?"Generating…":`Generate ${l.value} Questions`),1)],8,LM),P.value.length?(W(),Q("div",FM,[u("div",UM,[u("span",zM,ve(P.value.length)+" Questions",1),u("div",BM,[u("button",{class:"btn btn-ghost btn-sm",onClick:S[18]||(S[18]=he=>oe(!0))},"All"),u("button",{class:"btn btn-ghost btn-sm",onClick:S[19]||(S[19]=he=>oe(!1))},"None"),u("button",{class:"btn btn-ghost btn-sm danger",onClick:S[20]||(S[20]=he=>P.value=[])},"Clear")])]),u("div",jM,[u("button",{class:"btn btn-secondary regen-btn",disabled:be(e).isGenerating,onClick:S[21]||(S[21]=he=>X(!1)),title:"Replace all questions with a new set"},[be(e).isGenerating?(W(),Q("span",WM)):(W(),Q("svg",HM,[...S[57]||(S[57]=[u("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),u("path",{d:"M3 3v5h5"},null,-1)])])),S[58]||(S[58]=Ne(" Regenerate ",-1))],8,qM),u("button",{class:"btn btn-ghost regen-btn",disabled:be(e).isGenerating,onClick:S[22]||(S[22]=he=>X(!0)),title:"Generate more and append to current list"},[...S[59]||(S[59]=[u("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Ne(" Add More ",-1)])],8,GM)]),(W(!0),Q(Oe,null,it(P.value,(he,je)=>(W(),Q("div",{key:je,class:Fe(["quiz-card",{deselected:!he._selected}])},[u("div",KM,[u("label",QM,[ht(u("input",{type:"checkbox","onUpdate:modelValue":rt=>he._selected=rt},null,8,JM),[[Nv,he._selected]]),u("span",YM,"Q"+ve(je+1),1)]),u("div",XM,[u("span",{class:Fe(["badge difficulty-badge",he.difficulty])},ve(he.difficulty),3),u("span",ZM,ve(he.type==="true-false"?"T/F":"MCQ"),1)])]),u("p",e8,ve(he.question),1),u("div",t8,[(W(!0),Q(Oe,null,it(he.options,(rt,Ke)=>(W(),Q("div",{key:Ke,class:Fe(["q-option",Ke===he.correctIndex&&"correct"])},[u("span",n8,ve(["A","B","C","D"][Ke]),1),u("span",null,ve(rt),1),Ke===he.correctIndex?(W(),Q("svg",r8,[...S[60]||(S[60]=[u("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):Re("",!0)],2))),128))]),he.explanation?(W(),Q("div",i8,[S[61]||(S[61]=u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"12",cy:"12",r:"10"}),u("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),Ne(" "+ve(he.explanation),1)])):Re("",!0)],2))),128)),u("button",{class:"btn btn-primary w-full",disabled:!P.value.filter(he=>he._selected).length,onClick:me},[S[62]||(S[62]=u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),Ne(" Add "+ve(P.value.filter(he=>he._selected).length)+" Selected as Quiz Slides ",1)],8,s8)])):Re("",!0)],64)):i.value==="voiceover"?(W(),Q(Oe,{key:2},[u("div",o8,[S[63]||(S[63]=u("label",{class:"form-label"},"Slide Content / Key Points",-1)),ht(u("textarea",{"onUpdate:modelValue":S[23]||(S[23]=he=>m.value=he),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[Mt,m.value]])]),u("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating,onClick:_e},[be(e).isGenerating?(W(),Q("span",l8)):Re("",!0),Ne(" "+ve(be(e).isGenerating?"Generating…":"Generate Script"),1)],8,a8)],64)):i.value==="improve"?(W(),Q(Oe,{key:3},[(ne=(j=J.value)==null?void 0:j.content)!=null&&ne.text?(W(),Q("div",c8,[S[64]||(S[64]=u("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),u("div",u8,ve(J.value.content.text.slice(0,120))+ve(J.value.content.text.length>120?"…":""),1)])):(W(),Q("p",d8,"Select a text element on the canvas to improve it.")),u("div",h8,[S[65]||(S[65]=u("label",{class:"form-label"},"Instruction",-1)),ht(u("input",{"onUpdate:modelValue":S[24]||(S[24]=he=>s.value=he),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[Mt,s.value]])]),S[66]||(S[66]=u("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ht(u("textarea",{"onUpdate:modelValue":S[25]||(S[25]=he=>s.value=he),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[Mt,s.value]]),u("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating||!J.value&&!s.value,onClick:S[26]||(S[26]=he=>J.value?D():z())},[be(e).isGenerating?(W(),Q("span",p8)):Re("",!0),Ne(" "+ve(be(e).isGenerating?"Processing…":"Generate"),1)],8,f8)],64)):i.value==="translate"?(W(),Q(Oe,{key:4},[(fe=(le=J.value)==null?void 0:le.content)!=null&&fe.text?(W(),Q("div",m8,[S[67]||(S[67]=u("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),u("div",g8,ve(J.value.content.text.slice(0,120))+ve(J.value.content.text.length>120?"…":""),1)])):(W(),Q("p",v8,"Select a text element on the canvas to translate it.")),u("div",y8,[S[69]||(S[69]=u("label",{class:"form-label"},"Target Language",-1)),ht(u("select",{"onUpdate:modelValue":S[27]||(S[27]=he=>h.value=he),class:"select"},[...S[68]||(S[68]=[un('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[Sa,h.value]])]),u("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating||!((Pe=(Te=J.value)==null?void 0:Te.content)!=null&&Pe.text),onClick:F},[be(e).isGenerating?(W(),Q("span",_8)):Re("",!0),Ne(" "+ve(be(e).isGenerating?"Translating…":"Translate Text"),1)],8,b8),a.value?(W(),Q("div",w8,[u("div",E8,[S[70]||(S[70]=u("span",{class:"form-label"},"Translation Result",-1)),u("div",I8,[u("button",{class:"btn btn-ghost btn-sm",onClick:S[28]||(S[28]=he=>U.navigator.clipboard.writeText(a.value))},"Copy"),u("button",{class:"btn btn-primary btn-sm",onClick:q,disabled:!J.value},"Apply",8,T8)])]),u("div",C8,ve(a.value),1)])):Re("",!0)],64)):i.value==="image"?(W(),Q(Oe,{key:5},[S[73]||(S[73]=u("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),u("div",x8,[S[71]||(S[71]=u("label",{class:"form-label"},"Image Description",-1)),ht(u("textarea",{"onUpdate:modelValue":S[29]||(S[29]=he=>p.value=he),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[Mt,p.value]])]),u("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:H.value||be(e).isGenerating||!p.value,onClick:B},[H.value||be(e).isGenerating?(W(),Q("span",S8)):Re("",!0),Ne(" "+ve(H.value||be(e).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,k8),a.value?(W(),Q("div",A8,[S[72]||(S[72]=u("div",{class:"result-header"},[u("span",{class:"form-label"},"Status")],-1)),u("div",R8,ve(a.value),1)])):Re("",!0)],64)):i.value==="settings"?(W(),Q("div",P8,[u("div",N8,[S[75]||(S[75]=u("label",{class:"form-label"},"AI Provider",-1)),u("select",{value:be(e).apiProvider,class:"select",onChange:S[30]||(S[30]=he=>be(e).setProvider(he.target.value))},[...S[74]||(S[74]=[u("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),u("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,D8)]),u("div",O8,[S[76]||(S[76]=u("label",{class:"form-label"},"API Key",-1)),u("input",{type:"password",value:be(e).apiKey,class:"input",placeholder:"sk-…",onChange:S[31]||(S[31]=he=>be(e).setApiKey(he.target.value))},null,40,M8),S[77]||(S[77]=u("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),be(e).apiKey?Re("",!0):(W(),Q("div",L8,[...S[78]||(S[78]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"12",cy:"12",r:"10"}),u("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),u("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),Ne(" Running in ",-1),u("strong",null,"demo mode",-1),Ne(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):Re("",!0),a.value&&i.value!=="settings"&&i.value!=="quiz"?(W(),Q("div",V8,[u("div",$8,[S[79]||(S[79]=u("span",{class:"form-label"},"Result",-1)),u("button",{class:"btn btn-ghost btn-sm",onClick:S[32]||(S[32]=he=>a.value="")},"Clear")]),u("pre",F8,ve(a.value),1),u("div",U8,[i.value==="generate"?(W(),Q("button",{key:0,class:"btn btn-primary btn-sm",onClick:te},ve(v.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):Re("",!0),i.value==="generate"?(W(),Q("button",{key:1,class:"btn btn-ghost btn-sm",disabled:be(e).isGenerating,onClick:ce},[...S[80]||(S[80]=[u("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),u("path",{d:"M3 3v5h5"})],-1),Ne(" Regenerate ",-1)])],8,z8)):Re("",!0),i.value==="improve"&&J.value?(W(),Q("button",{key:2,class:"btn btn-primary btn-sm",onClick:L}," Apply to Element ")):Re("",!0),u("button",{class:"btn btn-secondary btn-sm",onClick:S[33]||(S[33]=he=>{var je;return(je=U.navigator.clipboard)==null?void 0:je.writeText(a.value)})}," Copy ")])])):Re("",!0),be(e).lastError?(W(),Q("div",B8,[S[81]||(S[81]=u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"12",cy:"12",r:"10"}),u("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),u("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Ne(" "+ve(be(e).lastError),1)])):Re("",!0)])])}}},q8=St(j8,[["__scopeId","data-v-697ec3ea"]]),W8={class:"theme-manager"},H8={class:"panel-section"},G8={class:"presets-grid"},K8=["title","onClick"],Q8={class:"preset-preview"},J8={class:"preset-name"},Y8={class:"panel-section"},X8={class:"theme-fields"},Z8={class:"form-label"},e9={class:"color-row"},t9=["value","onInput"],n9=["value","onChange"],r9={class:"panel-section"},i9={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},s9=["value"],o9=["value"],a9={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},l9=["value"],c9=["value"],u9={class:"form-group"},d9=["value"],h9={class:"panel-section"},f9={key:0,class:"apply-message success"},p9={key:1,class:"apply-message error"},m9={__name:"ThemeManager",setup(t){const e=In(),n=pn(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var y;return((y=r.value)==null?void 0:y.theme)||{}}),s=ge(""),o=ge("");function a(y){n.updateProject(e.projectId,{theme:{...i.value,...y}})}const l=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],d=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function h(y){a(y)}function m(y,w){const v=y.content||{};return y.type==="text"?{content:{...v,fontFamily:w.fontFamily||v.fontFamily,color:w.textColor||v.color}}:y.type==="heading"?{content:{...v,fontFamily:w.headingFont||w.fontFamily||v.fontFamily,color:w.textColor||v.color}}:y.type==="shape"?{content:{...v,fillColor:w.secondaryColor||v.fillColor}}:y.type==="hotspot"?{content:{...v,bgColor:w.primaryColor||v.bgColor}}:y.type==="button"?{content:{...v,bgColor:w.primaryColor||v.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:w.fontFamily||v.fontFamily}}:y.type==="quiz"?{content:{...v,cardBgColor:w.bgColor||v.cardBgColor,questionColor:w.textColor||v.questionColor,accentColor:w.primaryColor||v.accentColor}}:null}function g(){s.value="",o.value="";const y=e.projectId,w=r.value,v=i.value;if(!y||!w){o.value="No active project to apply theme.";return}const I=w.slides||[];let C=0;I.forEach(R=>{(R.backgroundType||"color")==="color"&&n.updateSlide(y,R.id,{backgroundType:"color",background:v.bgColor||R.background||"#ffffff"}),(R.elements||[]).forEach(V=>{const M=m(V,v);M&&(n.updateElement(y,R.id,V.id,M),C+=1)})}),s.value=`Applied theme to ${I.length} slide${I.length===1?"":"s"} and ${C} element${C===1?"":"s"}.`}return(y,w)=>(W(),Q("div",W8,[u("div",H8,[w[3]||(w[3]=u("div",{class:"panel-title"},"Preset Themes",-1)),u("div",G8,[(W(),Q(Oe,null,it(l,v=>u("div",{key:v.name,class:"preset-card",title:v.name,onClick:I=>h(v)},[u("div",Q8,[u("div",{class:"pp-header",style:ze({background:v.primaryColor})},null,4),u("div",{class:"pp-body",style:ze({background:v.bgColor})},[u("div",{class:"pp-line",style:ze({background:v.textColor,opacity:.7})},null,4),u("div",{class:"pp-line",style:ze({background:v.textColor,opacity:.4,width:"60%"})},null,4)],4),u("div",{class:"pp-accent",style:ze({background:v.secondaryColor})},null,4)]),u("span",J8,ve(v.name),1)],8,K8)),64))])]),u("div",Y8,[w[4]||(w[4]=u("div",{class:"panel-title"},"Colors",-1)),u("div",X8,[(W(),Q(Oe,null,it({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(v,I)=>u("div",{class:"theme-field",key:I},[u("label",Z8,ve(v),1),u("div",e9,[u("input",{type:"color",value:i.value[I]||"#ffffff",class:"color-input-native",onInput:C=>a({[I]:C.target.value})},null,40,t9),u("input",{value:i.value[I]||"",class:"input",onChange:C=>a({[I]:C.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,n9)])])),64))])]),u("div",r9,[w[8]||(w[8]=u("div",{class:"panel-title"},"Typography",-1)),u("div",i9,[w[5]||(w[5]=u("label",{class:"form-label"},"Heading Font",-1)),u("select",{value:i.value.headingFont||"Inter, sans-serif",class:"select",onChange:w[0]||(w[0]=v=>a({headingFont:v.target.value}))},[(W(),Q(Oe,null,it(d,v=>u("option",{key:v.value,value:v.value},ve(v.label),9,o9)),64))],40,s9)]),u("div",a9,[w[6]||(w[6]=u("label",{class:"form-label"},"Body Font",-1)),u("select",{value:i.value.fontFamily||"Inter, sans-serif",class:"select",onChange:w[1]||(w[1]=v=>a({fontFamily:v.target.value}))},[(W(),Q(Oe,null,it(d,v=>u("option",{key:v.value,value:v.value},ve(v.label),9,c9)),64))],40,l9)]),u("div",u9,[w[7]||(w[7]=u("label",{class:"form-label"},"Base Font Size",-1)),u("input",{type:"number",min:"12",max:"24",value:i.value.fontSize||16,class:"input",onChange:w[2]||(w[2]=v=>a({fontSize:+v.target.value}))},null,40,d9)])]),u("div",h9,[w[9]||(w[9]=u("div",{class:"panel-title"},"Preview",-1)),u("div",{class:"theme-preview",style:ze({background:i.value.bgColor||"#fff",fontFamily:i.value.fontFamily||"Inter, sans-serif"})},[u("div",{class:"tp-heading",style:ze({color:i.value.textColor,fontFamily:i.value.headingFont||i.value.fontFamily})}," Heading Text ",4),u("div",{class:"tp-body",style:ze({color:i.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),u("div",{class:"tp-btn",style:ze({background:i.value.primaryColor})},"Button",4),u("div",{class:"tp-badge",style:ze({background:i.value.secondaryColor})},"Badge",4)],4),u("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:g}," Apply Theme to Slides "),s.value?(W(),Q("p",f9,ve(s.value),1)):Re("",!0),o.value?(W(),Q("p",p9,ve(o.value),1)):Re("",!0)])]))}},g9=St(m9,[["__scopeId","data-v-dd457d78"]]);var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function v9(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function $a(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Yb={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(t,e){(function(n){t.exports=n()})(function(){return function n(r,i,s){function o(d,h){if(!i[d]){if(!r[d]){var m=typeof $a=="function"&&$a;if(!h&&m)return m(d,!0);if(a)return a(d,!0);var g=new Error("Cannot find module '"+d+"'");throw g.code="MODULE_NOT_FOUND",g}var y=i[d]={exports:{}};r[d][0].call(y.exports,function(w){var v=r[d][1][w];return o(v||w)},y,y.exports,n,r,i,s)}return i[d].exports}for(var a=typeof $a=="function"&&$a,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(n,r,i){var s=n("./utils"),o=n("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var d,h,m,g,y,w,v,I=[],C=0,R=l.length,V=R,M=s.getTypeOf(l)!=="string";C<l.length;)V=R-C,m=M?(d=l[C++],h=C<R?l[C++]:0,C<R?l[C++]:0):(d=l.charCodeAt(C++),h=C<R?l.charCodeAt(C++):0,C<R?l.charCodeAt(C++):0),g=d>>2,y=(3&d)<<4|h>>4,w=1<V?(15&h)<<2|m>>6:64,v=2<V?63&m:64,I.push(a.charAt(g)+a.charAt(y)+a.charAt(w)+a.charAt(v));return I.join("")},i.decode=function(l){var d,h,m,g,y,w,v=0,I=0,C="data:";if(l.substr(0,C.length)===C)throw new Error("Invalid base64 input, it looks like a data url.");var R,V=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&V--,l.charAt(l.length-2)===a.charAt(64)&&V--,V%1!=0)throw new Error("Invalid base64 input, bad content length.");for(R=o.uint8array?new Uint8Array(0|V):new Array(0|V);v<l.length;)d=a.indexOf(l.charAt(v++))<<2|(g=a.indexOf(l.charAt(v++)))>>4,h=(15&g)<<4|(y=a.indexOf(l.charAt(v++)))>>2,m=(3&y)<<6|(w=a.indexOf(l.charAt(v++))),R[I++]=d,y!==64&&(R[I++]=h),w!==64&&(R[I++]=m);return R}},{"./support":30,"./utils":32}],2:[function(n,r,i){var s=n("./external"),o=n("./stream/DataWorker"),a=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function d(h,m,g,y,w){this.compressedSize=h,this.uncompressedSize=m,this.crc32=g,this.compression=y,this.compressedContent=w}d.prototype={getContentWorker:function(){var h=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return h.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),h},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},d.createWorkerFrom=function(h,m,g){return h.pipe(new a).pipe(new l("uncompressedSize")).pipe(m.compressWorker(g)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},r.exports=d},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var s=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var s=n("./utils"),o=function(){for(var a,l=[],d=0;d<256;d++){a=d;for(var h=0;h<8;h++)a=1&a?3988292384^a>>>1:a>>>1;l[d]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(d,h,m,g){var y=o,w=g+m;d^=-1;for(var v=g;v<w;v++)d=d>>>8^y[255&(d^h[v])];return-1^d}(0|l,a,a.length,0):function(d,h,m,g){var y=o,w=g+m;d^=-1;for(var v=g;v<w;v++)d=d>>>8^y[255&(d^h.charCodeAt(v))];return-1^d}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var s=null;s=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:s}},{lie:37}],7:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=n("pako"),a=n("./utils"),l=n("./stream/GenericWorker"),d=s?"uint8array":"array";function h(m,g){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=g,this.meta={}}i.magic="\b\0",a.inherits(h,l),h.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(d,m.data),!1)},h.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(g){m.push({data:g,meta:m.meta})}},i.compressWorker=function(m){return new h("Deflate",m)},i.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function s(y,w){var v,I="";for(v=0;v<w;v++)I+=String.fromCharCode(255&y),y>>>=8;return I}function o(y,w,v,I,C,R){var V,M,f=y.file,G=y.compression,N=R!==d.utf8encode,A=a.transformTo("string",R(f.name)),x=a.transformTo("string",d.utf8encode(f.name)),P=f.comment,O=a.transformTo("string",R(P)),_=a.transformTo("string",d.utf8encode(P)),T=x.length!==f.name.length,E=_.length!==P.length,Y="",ae="",J="",ce=f.dir,ie=f.date,ye={crc32:0,compressedSize:0,uncompressedSize:0};w&&!v||(ye.crc32=y.crc32,ye.compressedSize=y.compressedSize,ye.uncompressedSize=y.uncompressedSize);var re=0;w&&(re|=8),N||!T&&!E||(re|=2048);var ee=0,Ie=0;ce&&(ee|=16),C==="UNIX"?(Ie=798,ee|=function(te,ue){var K=te;return te||(K=ue?16893:33204),(65535&K)<<16}(f.unixPermissions,ce)):(Ie=20,ee|=function(te){return 63&(te||0)}(f.dosPermissions)),V=ie.getUTCHours(),V<<=6,V|=ie.getUTCMinutes(),V<<=5,V|=ie.getUTCSeconds()/2,M=ie.getUTCFullYear()-1980,M<<=4,M|=ie.getUTCMonth()+1,M<<=5,M|=ie.getUTCDate(),T&&(ae=s(1,1)+s(h(A),4)+x,Y+="up"+s(ae.length,2)+ae),E&&(J=s(1,1)+s(h(O),4)+_,Y+="uc"+s(J.length,2)+J);var we="";return we+=`
\0`,we+=s(re,2),we+=G.magic,we+=s(V,2),we+=s(M,2),we+=s(ye.crc32,4),we+=s(ye.compressedSize,4),we+=s(ye.uncompressedSize,4),we+=s(A.length,2),we+=s(Y.length,2),{fileRecord:m.LOCAL_FILE_HEADER+we+A+Y,dirRecord:m.CENTRAL_FILE_HEADER+s(Ie,2)+we+s(O.length,2)+"\0\0\0\0"+s(ee,4)+s(I,4)+A+Y+O}}var a=n("../utils"),l=n("../stream/GenericWorker"),d=n("../utf8"),h=n("../crc32"),m=n("../signature");function g(y,w,v,I){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=v,this.encodeFileName=I,this.streamFiles=y,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(g,l),g.prototype.push=function(y){var w=y.meta.percent||0,v=this.entriesCount,I=this._sources.length;this.accumulate?this.contentBuffer.push(y):(this.bytesWritten+=y.data.length,l.prototype.push.call(this,{data:y.data,meta:{currentFile:this.currentFile,percent:v?(w+100*(v-I-1))/v:100}}))},g.prototype.openedSource=function(y){this.currentSourceOffset=this.bytesWritten,this.currentFile=y.file.name;var w=this.streamFiles&&!y.file.dir;if(w){var v=o(y,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:v.fileRecord,meta:{percent:0}})}else this.accumulate=!0},g.prototype.closedSource=function(y){this.accumulate=!1;var w=this.streamFiles&&!y.file.dir,v=o(y,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(v.dirRecord),w)this.push({data:function(I){return m.DATA_DESCRIPTOR+s(I.crc32,4)+s(I.compressedSize,4)+s(I.uncompressedSize,4)}(y),meta:{percent:100}});else for(this.push({data:v.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},g.prototype.flush=function(){for(var y=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var v=this.bytesWritten-y,I=function(C,R,V,M,f){var G=a.transformTo("string",f(M));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(C,2)+s(C,2)+s(R,4)+s(V,4)+s(G.length,2)+G}(this.dirRecords.length,v,y,this.zipComment,this.encodeFileName);this.push({data:I,meta:{percent:100}})},g.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},g.prototype.registerPrevious=function(y){this._sources.push(y);var w=this;return y.on("data",function(v){w.processChunk(v)}),y.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),y.on("error",function(v){w.error(v)}),this},g.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},g.prototype.error=function(y){var w=this._sources;if(!l.prototype.error.call(this,y))return!1;for(var v=0;v<w.length;v++)try{w[v].error(y)}catch{}return!0},g.prototype.lock=function(){l.prototype.lock.call(this);for(var y=this._sources,w=0;w<y.length;w++)y[w].lock()},r.exports=g},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var s=n("../compressions"),o=n("./ZipFileWorker");i.generateWorker=function(a,l,d){var h=new o(l.streamFiles,d,l.platform,l.encodeFileName),m=0;try{a.forEach(function(g,y){m++;var w=function(R,V){var M=R||V,f=s[M];if(!f)throw new Error(M+" is not a valid compression method !");return f}(y.options.compression,l.compression),v=y.options.compressionOptions||l.compressionOptions||{},I=y.dir,C=y.date;y._compressWorker(w,v).withStreamInfo("file",{name:g,dir:I,date:C,comment:y.comment||"",unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions}).pipe(h)}),h.entriesCount=m}catch(g){h.error(g)}return h}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=n("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var s=n("./utils"),o=n("./external"),a=n("./utf8"),l=n("./zipEntries"),d=n("./stream/Crc32Probe"),h=n("./nodejsUtils");function m(g){return new o.Promise(function(y,w){var v=g.decompressed.getContentWorker().pipe(new d);v.on("error",function(I){w(I)}).on("end",function(){v.streamInfo.crc32!==g.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):y()}).resume()})}r.exports=function(g,y){var w=this;return y=s.extend(y||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),h.isNode&&h.isStream(g)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",g,!0,y.optimizedBinaryString,y.base64).then(function(v){var I=new l(y);return I.load(v),I}).then(function(v){var I=[o.Promise.resolve(v)],C=v.files;if(y.checkCRC32)for(var R=0;R<C.length;R++)I.push(m(C[R]));return o.Promise.all(I)}).then(function(v){for(var I=v.shift(),C=I.files,R=0;R<C.length;R++){var V=C[R],M=V.fileNameStr,f=s.resolve(V.fileNameStr);w.file(f,V.decompressed,{binary:!0,optimizedBinaryString:!0,date:V.date,dir:V.dir,comment:V.fileCommentStr.length?V.fileCommentStr:null,unixPermissions:V.unixPermissions,dosPermissions:V.dosPermissions,createFolders:y.createFolders}),V.dir||(w.file(f).unsafeOriginalName=M)}return I.zipComment.length&&(w.comment=I.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var s=n("../utils"),o=n("../stream/GenericWorker");function a(l,d){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(d)}s.inherits(a,o),a.prototype._bindStream=function(l){var d=this;(this._stream=l).pause(),l.on("data",function(h){d.push({data:h,meta:{percent:0}})}).on("error",function(h){d.isPaused?this.generatedError=h:d.error(h)}).on("end",function(){d.isPaused?d._upstreamEnded=!0:d.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var s=n("readable-stream").Readable;function o(a,l,d){s.call(this,l),this._helper=a;var h=this;a.on("data",function(m,g){h.push(m)||h._helper.pause(),d&&d(g)}).on("error",function(m){h.emit("error",m)}).on("end",function(){h.push(null)})}n("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,r,i){function s(f,G,N){var A,x=a.getTypeOf(G),P=a.extend(N||{},h);P.date=P.date||new Date,P.compression!==null&&(P.compression=P.compression.toUpperCase()),typeof P.unixPermissions=="string"&&(P.unixPermissions=parseInt(P.unixPermissions,8)),P.unixPermissions&&16384&P.unixPermissions&&(P.dir=!0),P.dosPermissions&&16&P.dosPermissions&&(P.dir=!0),P.dir&&(f=C(f)),P.createFolders&&(A=I(f))&&R.call(this,A,!0);var O=x==="string"&&P.binary===!1&&P.base64===!1;N&&N.binary!==void 0||(P.binary=!O),(G instanceof m&&G.uncompressedSize===0||P.dir||!G||G.length===0)&&(P.base64=!1,P.binary=!0,G="",P.compression="STORE",x="string");var _=null;_=G instanceof m||G instanceof l?G:w.isNode&&w.isStream(G)?new v(f,G):a.prepareContent(f,G,P.binary,P.optimizedBinaryString,P.base64);var T=new g(f,_,P);this.files[f]=T}var o=n("./utf8"),a=n("./utils"),l=n("./stream/GenericWorker"),d=n("./stream/StreamHelper"),h=n("./defaults"),m=n("./compressedObject"),g=n("./zipObject"),y=n("./generate"),w=n("./nodejsUtils"),v=n("./nodejs/NodejsStreamInputAdapter"),I=function(f){f.slice(-1)==="/"&&(f=f.substring(0,f.length-1));var G=f.lastIndexOf("/");return 0<G?f.substring(0,G):""},C=function(f){return f.slice(-1)!=="/"&&(f+="/"),f},R=function(f,G){return G=G!==void 0?G:h.createFolders,f=C(f),this.files[f]||s.call(this,f,null,{dir:!0,createFolders:G}),this.files[f]};function V(f){return Object.prototype.toString.call(f)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(f){var G,N,A;for(G in this.files)A=this.files[G],(N=G.slice(this.root.length,G.length))&&G.slice(0,this.root.length)===this.root&&f(N,A)},filter:function(f){var G=[];return this.forEach(function(N,A){f(N,A)&&G.push(A)}),G},file:function(f,G,N){if(arguments.length!==1)return f=this.root+f,s.call(this,f,G,N),this;if(V(f)){var A=f;return this.filter(function(P,O){return!O.dir&&A.test(P)})}var x=this.files[this.root+f];return x&&!x.dir?x:null},folder:function(f){if(!f)return this;if(V(f))return this.filter(function(x,P){return P.dir&&f.test(x)});var G=this.root+f,N=R.call(this,G),A=this.clone();return A.root=N.name,A},remove:function(f){f=this.root+f;var G=this.files[f];if(G||(f.slice(-1)!=="/"&&(f+="/"),G=this.files[f]),G&&!G.dir)delete this.files[f];else for(var N=this.filter(function(x,P){return P.name.slice(0,f.length)===f}),A=0;A<N.length;A++)delete this.files[N[A].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(f){var G,N={};try{if((N=a.extend(f||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=N.type.toLowerCase(),N.compression=N.compression.toUpperCase(),N.type==="binarystring"&&(N.type="string"),!N.type)throw new Error("No output type specified.");a.checkSupport(N.type),N.platform!=="darwin"&&N.platform!=="freebsd"&&N.platform!=="linux"&&N.platform!=="sunos"||(N.platform="UNIX"),N.platform==="win32"&&(N.platform="DOS");var A=N.comment||this.comment||"";G=y.generateWorker(this,N,A)}catch(x){(G=new l("error")).error(x)}return new d(G,N.type||"string",N.mimeType)},generateAsync:function(f,G){return this.generateInternalStream(f).accumulate(G)},generateNodeStream:function(f,G){return(f=f||{}).type||(f.type="nodebuffer"),this.generateInternalStream(f).toNodejsStream(G)}};r.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),d=a.charCodeAt(1),h=a.charCodeAt(2),m=a.charCodeAt(3),g=this.length-4;0<=g;--g)if(this.data[g]===l&&this.data[g+1]===d&&this.data[g+2]===h&&this.data[g+3]===m)return g-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),d=a.charCodeAt(1),h=a.charCodeAt(2),m=a.charCodeAt(3),g=this.readData(4);return l===g[0]&&d===g[1]&&h===g[2]&&m===g[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var s=n("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,d=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)d=(d<<8)+this.byteAt(l);return this.index+=a,d},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=o},{"../utils":32}],19:[function(n,r,i){var s=n("./Uint8ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var s=n("./ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var s=n("../utils"),o=n("../support"),a=n("./ArrayReader"),l=n("./StringReader"),d=n("./NodeBufferReader"),h=n("./Uint8ArrayReader");r.exports=function(m){var g=s.getTypeOf(m);return s.checkSupport(g),g!=="string"||o.uint8array?g==="nodebuffer"?new d(m):o.uint8array?new h(s.transformTo("uint8array",m)):new a(s.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var s=n("./GenericWorker"),o=n("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var s=n("./GenericWorker"),o=n("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var d=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=d+l.data.length}o.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataWorker");var d=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(h){d.dataIsReady=!0,d.data=h,d.max=h&&h.length||0,d.type=s.getTypeOf(h),d.isPaused||d._tickAndRepeat()},function(h){d.error(h)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,d=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,d);break;case"uint8array":l=this.data.subarray(this.index,d);break;case"array":case"nodebuffer":l=this.data.slice(this.index,d)}return this.index=d,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=s},{}],29:[function(n,r,i){var s=n("../utils"),o=n("./ConvertWorker"),a=n("./GenericWorker"),l=n("../base64"),d=n("../support"),h=n("../external"),m=null;if(d.nodestream)try{m=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function g(w,v){return new h.Promise(function(I,C){var R=[],V=w._internalType,M=w._outputType,f=w._mimeType;w.on("data",function(G,N){R.push(G),v&&v(N)}).on("error",function(G){R=[],C(G)}).on("end",function(){try{var G=function(N,A,x){switch(N){case"blob":return s.newBlob(s.transformTo("arraybuffer",A),x);case"base64":return l.encode(A);default:return s.transformTo(N,A)}}(M,function(N,A){var x,P=0,O=null,_=0;for(x=0;x<A.length;x++)_+=A[x].length;switch(N){case"string":return A.join("");case"array":return Array.prototype.concat.apply([],A);case"uint8array":for(O=new Uint8Array(_),x=0;x<A.length;x++)O.set(A[x],P),P+=A[x].length;return O;case"nodebuffer":return Buffer.concat(A);default:throw new Error("concat : unsupported type '"+N+"'")}}(V,R),f);I(G)}catch(N){C(N)}R=[]}).resume()})}function y(w,v,I){var C=v;switch(v){case"blob":case"arraybuffer":C="uint8array";break;case"base64":C="string"}try{this._internalType=C,this._outputType=v,this._mimeType=I,s.checkSupport(C),this._worker=w.pipe(new o(C)),w.lock()}catch(R){this._worker=new a("error"),this._worker.error(R)}}y.prototype={accumulate:function(w){return g(this,w)},on:function(w,v){var I=this;return w==="data"?this._worker.on(w,function(C){v.call(I,C.data,C.meta)}):this._worker.on(w,function(){s.delay(v,arguments,I)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},w)}},r.exports=y},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var s=n("./utils"),o=n("./support"),a=n("./nodejsUtils"),l=n("./stream/GenericWorker"),d=new Array(256),h=0;h<256;h++)d[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;d[254]=d[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function g(){l.call(this,"utf-8 encode")}i.utf8encode=function(y){return o.nodebuffer?a.newBufferFrom(y,"utf-8"):function(w){var v,I,C,R,V,M=w.length,f=0;for(R=0;R<M;R++)(64512&(I=w.charCodeAt(R)))==55296&&R+1<M&&(64512&(C=w.charCodeAt(R+1)))==56320&&(I=65536+(I-55296<<10)+(C-56320),R++),f+=I<128?1:I<2048?2:I<65536?3:4;for(v=o.uint8array?new Uint8Array(f):new Array(f),R=V=0;V<f;R++)(64512&(I=w.charCodeAt(R)))==55296&&R+1<M&&(64512&(C=w.charCodeAt(R+1)))==56320&&(I=65536+(I-55296<<10)+(C-56320),R++),I<128?v[V++]=I:(I<2048?v[V++]=192|I>>>6:(I<65536?v[V++]=224|I>>>12:(v[V++]=240|I>>>18,v[V++]=128|I>>>12&63),v[V++]=128|I>>>6&63),v[V++]=128|63&I);return v}(y)},i.utf8decode=function(y){return o.nodebuffer?s.transformTo("nodebuffer",y).toString("utf-8"):function(w){var v,I,C,R,V=w.length,M=new Array(2*V);for(v=I=0;v<V;)if((C=w[v++])<128)M[I++]=C;else if(4<(R=d[C]))M[I++]=65533,v+=R-1;else{for(C&=R===2?31:R===3?15:7;1<R&&v<V;)C=C<<6|63&w[v++],R--;1<R?M[I++]=65533:C<65536?M[I++]=C:(C-=65536,M[I++]=55296|C>>10&1023,M[I++]=56320|1023&C)}return M.length!==I&&(M.subarray?M=M.subarray(0,I):M.length=I),s.applyFromCharCode(M)}(y=s.transformTo(o.uint8array?"uint8array":"array",y))},s.inherits(m,l),m.prototype.processChunk=function(y){var w=s.transformTo(o.uint8array?"uint8array":"array",y.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var v=w;(w=new Uint8Array(v.length+this.leftOver.length)).set(this.leftOver,0),w.set(v,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var I=function(R,V){var M;for((V=V||R.length)>R.length&&(V=R.length),M=V-1;0<=M&&(192&R[M])==128;)M--;return M<0||M===0?V:M+d[R[M]]>V?M:V}(w),C=w;I!==w.length&&(o.uint8array?(C=w.subarray(0,I),this.leftOver=w.subarray(I,w.length)):(C=w.slice(0,I),this.leftOver=w.slice(I,w.length))),this.push({data:i.utf8decode(C),meta:y.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=m,s.inherits(g,l),g.prototype.processChunk=function(y){this.push({data:i.utf8encode(y.data),meta:y.meta})},i.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var s=n("./support"),o=n("./base64"),a=n("./nodejsUtils"),l=n("./external");function d(v){return v}function h(v,I){for(var C=0;C<v.length;++C)I[C]=255&v.charCodeAt(C);return I}n("setimmediate"),i.newBlob=function(v,I){i.checkSupport("blob");try{return new Blob([v],{type:I})}catch{try{var C=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return C.append(v),C.getBlob(I)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(v,I,C){var R=[],V=0,M=v.length;if(M<=C)return String.fromCharCode.apply(null,v);for(;V<M;)I==="array"||I==="nodebuffer"?R.push(String.fromCharCode.apply(null,v.slice(V,Math.min(V+C,M)))):R.push(String.fromCharCode.apply(null,v.subarray(V,Math.min(V+C,M)))),V+=C;return R.join("")},stringifyByChar:function(v){for(var I="",C=0;C<v.length;C++)I+=String.fromCharCode(v[C]);return I},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function g(v){var I=65536,C=i.getTypeOf(v),R=!0;if(C==="uint8array"?R=m.applyCanBeUsed.uint8array:C==="nodebuffer"&&(R=m.applyCanBeUsed.nodebuffer),R)for(;1<I;)try{return m.stringifyByChunk(v,C,I)}catch{I=Math.floor(I/2)}return m.stringifyByChar(v)}function y(v,I){for(var C=0;C<v.length;C++)I[C]=v[C];return I}i.applyFromCharCode=g;var w={};w.string={string:d,array:function(v){return h(v,new Array(v.length))},arraybuffer:function(v){return w.string.uint8array(v).buffer},uint8array:function(v){return h(v,new Uint8Array(v.length))},nodebuffer:function(v){return h(v,a.allocBuffer(v.length))}},w.array={string:g,array:d,arraybuffer:function(v){return new Uint8Array(v).buffer},uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return a.newBufferFrom(v)}},w.arraybuffer={string:function(v){return g(new Uint8Array(v))},array:function(v){return y(new Uint8Array(v),new Array(v.byteLength))},arraybuffer:d,uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return a.newBufferFrom(new Uint8Array(v))}},w.uint8array={string:g,array:function(v){return y(v,new Array(v.length))},arraybuffer:function(v){return v.buffer},uint8array:d,nodebuffer:function(v){return a.newBufferFrom(v)}},w.nodebuffer={string:g,array:function(v){return y(v,new Array(v.length))},arraybuffer:function(v){return w.nodebuffer.uint8array(v).buffer},uint8array:function(v){return y(v,new Uint8Array(v.length))},nodebuffer:d},i.transformTo=function(v,I){if(I=I||"",!v)return I;i.checkSupport(v);var C=i.getTypeOf(I);return w[C][v](I)},i.resolve=function(v){for(var I=v.split("/"),C=[],R=0;R<I.length;R++){var V=I[R];V==="."||V===""&&R!==0&&R!==I.length-1||(V===".."?C.pop():C.push(V))}return C.join("/")},i.getTypeOf=function(v){return typeof v=="string"?"string":Object.prototype.toString.call(v)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(v)?"nodebuffer":s.uint8array&&v instanceof Uint8Array?"uint8array":s.arraybuffer&&v instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(v){if(!s[v.toLowerCase()])throw new Error(v+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(v){var I,C,R="";for(C=0;C<(v||"").length;C++)R+="\\x"+((I=v.charCodeAt(C))<16?"0":"")+I.toString(16).toUpperCase();return R},i.delay=function(v,I,C){setImmediate(function(){v.apply(C||null,I||[])})},i.inherits=function(v,I){function C(){}C.prototype=I.prototype,v.prototype=new C},i.extend=function(){var v,I,C={};for(v=0;v<arguments.length;v++)for(I in arguments[v])Object.prototype.hasOwnProperty.call(arguments[v],I)&&C[I]===void 0&&(C[I]=arguments[v][I]);return C},i.prepareContent=function(v,I,C,R,V){return l.Promise.resolve(I).then(function(M){return s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)&&typeof FileReader<"u"?new l.Promise(function(f,G){var N=new FileReader;N.onload=function(A){f(A.target.result)},N.onerror=function(A){G(A.target.error)},N.readAsArrayBuffer(M)}):M}).then(function(M){var f=i.getTypeOf(M);return f?(f==="arraybuffer"?M=i.transformTo("uint8array",M):f==="string"&&(V?M=o.decode(M):C&&R!==!0&&(M=function(G){return h(G,s.uint8array?new Uint8Array(G.length):new Array(G.length))}(M))),M):l.Promise.reject(new Error("Can't read the data of '"+v+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./signature"),l=n("./zipEntry"),d=n("./support");function h(m){this.files=[],this.loadOptions=m}h.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var g=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(g)+", expected "+o.pretty(m)+")")}},isSignature:function(m,g){var y=this.reader.index;this.reader.setIndex(m);var w=this.reader.readString(4)===g;return this.reader.setIndex(y),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),g=d.uint8array?"uint8array":"array",y=o.transformTo(g,m);this.zipComment=this.loadOptions.decodeFileName(y)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,g,y,w=this.zip64EndOfCentralSize-44;0<w;)m=this.reader.readInt(2),g=this.reader.readInt(4),y=this.reader.readData(g),this.zip64ExtensibleData[m]={id:m,length:g,value:y}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,g;for(m=0;m<this.files.length;m++)g=this.files[m],this.reader.setIndex(g.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),g.readLocalPart(this.reader),g.handleUTF8(),g.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var g=m;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var y=this.centralDirOffset+this.centralDirSize;this.zip64&&(y+=20,y+=12+this.zip64EndOfCentralSize);var w=g-y;if(0<w)this.isSignature(g,a.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(m){this.reader=s(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./compressedObject"),l=n("./crc32"),d=n("./utf8"),h=n("./compressions"),m=n("./support");function g(y,w){this.options=y,this.loadOptions=w}g.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(y){var w,v;if(y.skip(22),this.fileNameLength=y.readInt(2),v=y.readInt(2),this.fileName=y.readData(this.fileNameLength),y.skip(v),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(I){for(var C in h)if(Object.prototype.hasOwnProperty.call(h,C)&&h[C].magic===I)return h[C];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,w,y.readData(this.compressedSize))},readCentralPart:function(y){this.versionMadeBy=y.readInt(2),y.skip(2),this.bitFlag=y.readInt(2),this.compressionMethod=y.readString(2),this.date=y.readDate(),this.crc32=y.readInt(4),this.compressedSize=y.readInt(4),this.uncompressedSize=y.readInt(4);var w=y.readInt(2);if(this.extraFieldsLength=y.readInt(2),this.fileCommentLength=y.readInt(2),this.diskNumberStart=y.readInt(2),this.internalFileAttributes=y.readInt(2),this.externalFileAttributes=y.readInt(4),this.localHeaderOffset=y.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");y.skip(w),this.readExtraFields(y),this.parseZIP64ExtraField(y),this.fileComment=y.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var y=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),y==0&&(this.dosPermissions=63&this.externalFileAttributes),y==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var y=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=y.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=y.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=y.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=y.readInt(4))}},readExtraFields:function(y){var w,v,I,C=y.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});y.index+4<C;)w=y.readInt(2),v=y.readInt(2),I=y.readData(v),this.extraFields[w]={id:w,length:v,value:I};y.setIndex(C)},handleUTF8:function(){var y=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=d.utf8decode(this.fileName),this.fileCommentStr=d.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var v=o.transformTo(y,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(v)}var I=this.findExtraFieldUnicodeComment();if(I!==null)this.fileCommentStr=I;else{var C=o.transformTo(y,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(C)}}},findExtraFieldUnicodePath:function(){var y=this.extraFields[28789];if(y){var w=s(y.value);return w.readInt(1)!==1||l(this.fileName)!==w.readInt(4)?null:d.utf8decode(w.readData(y.length-5))}return null},findExtraFieldUnicodeComment:function(){var y=this.extraFields[25461];if(y){var w=s(y.value);return w.readInt(1)!==1||l(this.fileComment)!==w.readInt(4)?null:d.utf8decode(w.readData(y.length-5))}return null}},r.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function s(w,v,I){this.name=w,this.dir=I.dir,this.date=I.date,this.comment=I.comment,this.unixPermissions=I.unixPermissions,this.dosPermissions=I.dosPermissions,this._data=v,this._dataBinary=I.binary,this.options={compression:I.compression,compressionOptions:I.compressionOptions}}var o=n("./stream/StreamHelper"),a=n("./stream/DataWorker"),l=n("./utf8"),d=n("./compressedObject"),h=n("./stream/GenericWorker");s.prototype={internalStream:function(w){var v=null,I="string";try{if(!w)throw new Error("No output type specified.");var C=(I=w.toLowerCase())==="string"||I==="text";I!=="binarystring"&&I!=="text"||(I="string"),v=this._decompressWorker();var R=!this._dataBinary;R&&!C&&(v=v.pipe(new l.Utf8EncodeWorker)),!R&&C&&(v=v.pipe(new l.Utf8DecodeWorker))}catch(V){(v=new h("error")).error(V)}return new o(v,I,"")},async:function(w,v){return this.internalStream(w).accumulate(v)},nodeStream:function(w,v){return this.internalStream(w||"nodebuffer").toNodejsStream(v)},_compressWorker:function(w,v){if(this._data instanceof d&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var I=this._decompressWorker();return this._dataBinary||(I=I.pipe(new l.Utf8EncodeWorker)),d.createWorkerFrom(I,w,v)},_decompressWorker:function(){return this._data instanceof d?this._data.getContentWorker():this._data instanceof h?this._data:new a(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],g=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},y=0;y<m.length;y++)s.prototype[m[y]]=g;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var d=0,h=new l(w),m=s.document.createTextNode("");h.observe(m,{characterData:!0}),o=function(){m.data=d=++d%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var v=s.document.createElement("script");v.onreadystatechange=function(){w(),v.onreadystatechange=null,v.parentNode.removeChild(v),v=null},s.document.documentElement.appendChild(v)}:function(){setTimeout(w,0)};else{var g=new s.MessageChannel;g.port1.onmessage=w,o=function(){g.port2.postMessage(0)}}var y=[];function w(){var v,I;a=!0;for(var C=y.length;C;){for(I=y,y=[],v=-1;++v<C;)I[v]();C=y.length}a=!1}r.exports=function(v){y.push(v)!==1||a||o()}}).call(this,typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var s=n("immediate");function o(){}var a={},l=["REJECTED"],d=["FULFILLED"],h=["PENDING"];function m(C){if(typeof C!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,C!==o&&v(this,C)}function g(C,R,V){this.promise=C,typeof R=="function"&&(this.onFulfilled=R,this.callFulfilled=this.otherCallFulfilled),typeof V=="function"&&(this.onRejected=V,this.callRejected=this.otherCallRejected)}function y(C,R,V){s(function(){var M;try{M=R(V)}catch(f){return a.reject(C,f)}M===C?a.reject(C,new TypeError("Cannot resolve promise with itself")):a.resolve(C,M)})}function w(C){var R=C&&C.then;if(C&&(typeof C=="object"||typeof C=="function")&&typeof R=="function")return function(){R.apply(C,arguments)}}function v(C,R){var V=!1;function M(N){V||(V=!0,a.reject(C,N))}function f(N){V||(V=!0,a.resolve(C,N))}var G=I(function(){R(f,M)});G.status==="error"&&M(G.value)}function I(C,R){var V={};try{V.value=C(R),V.status="success"}catch(M){V.status="error",V.value=M}return V}(r.exports=m).prototype.finally=function(C){if(typeof C!="function")return this;var R=this.constructor;return this.then(function(V){return R.resolve(C()).then(function(){return V})},function(V){return R.resolve(C()).then(function(){throw V})})},m.prototype.catch=function(C){return this.then(null,C)},m.prototype.then=function(C,R){if(typeof C!="function"&&this.state===d||typeof R!="function"&&this.state===l)return this;var V=new this.constructor(o);return this.state!==h?y(V,this.state===d?C:R,this.outcome):this.queue.push(new g(V,C,R)),V},g.prototype.callFulfilled=function(C){a.resolve(this.promise,C)},g.prototype.otherCallFulfilled=function(C){y(this.promise,this.onFulfilled,C)},g.prototype.callRejected=function(C){a.reject(this.promise,C)},g.prototype.otherCallRejected=function(C){y(this.promise,this.onRejected,C)},a.resolve=function(C,R){var V=I(w,R);if(V.status==="error")return a.reject(C,V.value);var M=V.value;if(M)v(C,M);else{C.state=d,C.outcome=R;for(var f=-1,G=C.queue.length;++f<G;)C.queue[f].callFulfilled(R)}return C},a.reject=function(C,R){C.state=l,C.outcome=R;for(var V=-1,M=C.queue.length;++V<M;)C.queue[V].callRejected(R);return C},m.resolve=function(C){return C instanceof this?C:a.resolve(new this(o),C)},m.reject=function(C){var R=new this(o);return a.reject(R,C)},m.all=function(C){var R=this;if(Object.prototype.toString.call(C)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=C.length,M=!1;if(!V)return this.resolve([]);for(var f=new Array(V),G=0,N=-1,A=new this(o);++N<V;)x(C[N],N);return A;function x(P,O){R.resolve(P).then(function(_){f[O]=_,++G!==V||M||(M=!0,a.resolve(A,f))},function(_){M||(M=!0,a.reject(A,_))})}},m.race=function(C){var R=this;if(Object.prototype.toString.call(C)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=C.length,M=!1;if(!V)return this.resolve([]);for(var f=-1,G=new this(o);++f<V;)N=C[f],R.resolve(N).then(function(A){M||(M=!0,a.resolve(G,A))},function(A){M||(M=!0,a.reject(G,A))});var N;return G}},{immediate:36}],38:[function(n,r,i){var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var s=n("./zlib/deflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/messages"),d=n("./zlib/zstream"),h=Object.prototype.toString,m=0,g=-1,y=0,w=8;function v(C){if(!(this instanceof v))return new v(C);this.options=o.assign({level:g,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:y,to:""},C||{});var R=this.options;R.raw&&0<R.windowBits?R.windowBits=-R.windowBits:R.gzip&&0<R.windowBits&&R.windowBits<16&&(R.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var V=s.deflateInit2(this.strm,R.level,R.method,R.windowBits,R.memLevel,R.strategy);if(V!==m)throw new Error(l[V]);if(R.header&&s.deflateSetHeader(this.strm,R.header),R.dictionary){var M;if(M=typeof R.dictionary=="string"?a.string2buf(R.dictionary):h.call(R.dictionary)==="[object ArrayBuffer]"?new Uint8Array(R.dictionary):R.dictionary,(V=s.deflateSetDictionary(this.strm,M))!==m)throw new Error(l[V]);this._dict_set=!0}}function I(C,R){var V=new v(R);if(V.push(C,!0),V.err)throw V.msg||l[V.err];return V.result}v.prototype.push=function(C,R){var V,M,f=this.strm,G=this.options.chunkSize;if(this.ended)return!1;M=R===~~R?R:R===!0?4:0,typeof C=="string"?f.input=a.string2buf(C):h.call(C)==="[object ArrayBuffer]"?f.input=new Uint8Array(C):f.input=C,f.next_in=0,f.avail_in=f.input.length;do{if(f.avail_out===0&&(f.output=new o.Buf8(G),f.next_out=0,f.avail_out=G),(V=s.deflate(f,M))!==1&&V!==m)return this.onEnd(V),!(this.ended=!0);f.avail_out!==0&&(f.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(f.output,f.next_out))):this.onData(o.shrinkBuf(f.output,f.next_out)))}while((0<f.avail_in||f.avail_out===0)&&V!==1);return M===4?(V=s.deflateEnd(this.strm),this.onEnd(V),this.ended=!0,V===m):M!==2||(this.onEnd(m),!(f.avail_out=0))},v.prototype.onData=function(C){this.chunks.push(C)},v.prototype.onEnd=function(C){C===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=C,this.msg=this.strm.msg},i.Deflate=v,i.deflate=I,i.deflateRaw=function(C,R){return(R=R||{}).raw=!0,I(C,R)},i.gzip=function(C,R){return(R=R||{}).gzip=!0,I(C,R)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var s=n("./zlib/inflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/constants"),d=n("./zlib/messages"),h=n("./zlib/zstream"),m=n("./zlib/gzheader"),g=Object.prototype.toString;function y(v){if(!(this instanceof y))return new y(v);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},v||{});var I=this.options;I.raw&&0<=I.windowBits&&I.windowBits<16&&(I.windowBits=-I.windowBits,I.windowBits===0&&(I.windowBits=-15)),!(0<=I.windowBits&&I.windowBits<16)||v&&v.windowBits||(I.windowBits+=32),15<I.windowBits&&I.windowBits<48&&!(15&I.windowBits)&&(I.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var C=s.inflateInit2(this.strm,I.windowBits);if(C!==l.Z_OK)throw new Error(d[C]);this.header=new m,s.inflateGetHeader(this.strm,this.header)}function w(v,I){var C=new y(I);if(C.push(v,!0),C.err)throw C.msg||d[C.err];return C.result}y.prototype.push=function(v,I){var C,R,V,M,f,G,N=this.strm,A=this.options.chunkSize,x=this.options.dictionary,P=!1;if(this.ended)return!1;R=I===~~I?I:I===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof v=="string"?N.input=a.binstring2buf(v):g.call(v)==="[object ArrayBuffer]"?N.input=new Uint8Array(v):N.input=v,N.next_in=0,N.avail_in=N.input.length;do{if(N.avail_out===0&&(N.output=new o.Buf8(A),N.next_out=0,N.avail_out=A),(C=s.inflate(N,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&x&&(G=typeof x=="string"?a.string2buf(x):g.call(x)==="[object ArrayBuffer]"?new Uint8Array(x):x,C=s.inflateSetDictionary(this.strm,G)),C===l.Z_BUF_ERROR&&P===!0&&(C=l.Z_OK,P=!1),C!==l.Z_STREAM_END&&C!==l.Z_OK)return this.onEnd(C),!(this.ended=!0);N.next_out&&(N.avail_out!==0&&C!==l.Z_STREAM_END&&(N.avail_in!==0||R!==l.Z_FINISH&&R!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(V=a.utf8border(N.output,N.next_out),M=N.next_out-V,f=a.buf2string(N.output,V),N.next_out=M,N.avail_out=A-M,M&&o.arraySet(N.output,N.output,V,M,0),this.onData(f)):this.onData(o.shrinkBuf(N.output,N.next_out)))),N.avail_in===0&&N.avail_out===0&&(P=!0)}while((0<N.avail_in||N.avail_out===0)&&C!==l.Z_STREAM_END);return C===l.Z_STREAM_END&&(R=l.Z_FINISH),R===l.Z_FINISH?(C=s.inflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===l.Z_OK):R!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(N.avail_out=0))},y.prototype.onData=function(v){this.chunks.push(v)},y.prototype.onEnd=function(v){v===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},i.Inflate=y,i.inflate=w,i.inflateRaw=function(v,I){return(I=I||{}).raw=!0,w(v,I)},i.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var d=Array.prototype.slice.call(arguments,1);d.length;){var h=d.shift();if(h){if(typeof h!="object")throw new TypeError(h+"must be non-object");for(var m in h)h.hasOwnProperty(m)&&(l[m]=h[m])}}return l},i.shrinkBuf=function(l,d){return l.length===d?l:l.subarray?l.subarray(0,d):(l.length=d,l)};var o={arraySet:function(l,d,h,m,g){if(d.subarray&&l.subarray)l.set(d.subarray(h,h+m),g);else for(var y=0;y<m;y++)l[g+y]=d[h+y]},flattenChunks:function(l){var d,h,m,g,y,w;for(d=m=0,h=l.length;d<h;d++)m+=l[d].length;for(w=new Uint8Array(m),d=g=0,h=l.length;d<h;d++)y=l[d],w.set(y,g),g+=y.length;return w}},a={arraySet:function(l,d,h,m,g){for(var y=0;y<m;y++)l[g+y]=d[h+y]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(n,r,i){var s=n("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;function h(m,g){if(g<65537&&(m.subarray&&a||!m.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(m,g));for(var y="",w=0;w<g;w++)y+=String.fromCharCode(m[w]);return y}l[254]=l[254]=1,i.string2buf=function(m){var g,y,w,v,I,C=m.length,R=0;for(v=0;v<C;v++)(64512&(y=m.charCodeAt(v)))==55296&&v+1<C&&(64512&(w=m.charCodeAt(v+1)))==56320&&(y=65536+(y-55296<<10)+(w-56320),v++),R+=y<128?1:y<2048?2:y<65536?3:4;for(g=new s.Buf8(R),v=I=0;I<R;v++)(64512&(y=m.charCodeAt(v)))==55296&&v+1<C&&(64512&(w=m.charCodeAt(v+1)))==56320&&(y=65536+(y-55296<<10)+(w-56320),v++),y<128?g[I++]=y:(y<2048?g[I++]=192|y>>>6:(y<65536?g[I++]=224|y>>>12:(g[I++]=240|y>>>18,g[I++]=128|y>>>12&63),g[I++]=128|y>>>6&63),g[I++]=128|63&y);return g},i.buf2binstring=function(m){return h(m,m.length)},i.binstring2buf=function(m){for(var g=new s.Buf8(m.length),y=0,w=g.length;y<w;y++)g[y]=m.charCodeAt(y);return g},i.buf2string=function(m,g){var y,w,v,I,C=g||m.length,R=new Array(2*C);for(y=w=0;y<C;)if((v=m[y++])<128)R[w++]=v;else if(4<(I=l[v]))R[w++]=65533,y+=I-1;else{for(v&=I===2?31:I===3?15:7;1<I&&y<C;)v=v<<6|63&m[y++],I--;1<I?R[w++]=65533:v<65536?R[w++]=v:(v-=65536,R[w++]=55296|v>>10&1023,R[w++]=56320|1023&v)}return h(R,w)},i.utf8border=function(m,g){var y;for((g=g||m.length)>m.length&&(g=m.length),y=g-1;0<=y&&(192&m[y])==128;)y--;return y<0||y===0?g:y+l[m[y]]>g?y:g}},{"./common":41}],43:[function(n,r,i){r.exports=function(s,o,a,l){for(var d=65535&s|0,h=s>>>16&65535|0,m=0;a!==0;){for(a-=m=2e3<a?2e3:a;h=h+(d=d+o[l++]|0)|0,--m;);d%=65521,h%=65521}return d|h<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var d=0;d<8;d++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();r.exports=function(o,a,l,d){var h=s,m=d+l;o^=-1;for(var g=d;g<m;g++)o=o>>>8^h[255&(o^a[g])];return-1^o}},{}],46:[function(n,r,i){var s,o=n("../utils/common"),a=n("./trees"),l=n("./adler32"),d=n("./crc32"),h=n("./messages"),m=0,g=4,y=0,w=-2,v=-1,I=4,C=2,R=8,V=9,M=286,f=30,G=19,N=2*M+1,A=15,x=3,P=258,O=P+x+1,_=42,T=113,E=1,Y=2,ae=3,J=4;function ce(p,H){return p.msg=h[H],H}function ie(p){return(p<<1)-(4<p?9:0)}function ye(p){for(var H=p.length;0<=--H;)p[H]=0}function re(p){var H=p.state,B=H.pending;B>p.avail_out&&(B=p.avail_out),B!==0&&(o.arraySet(p.output,H.pending_buf,H.pending_out,B,p.next_out),p.next_out+=B,H.pending_out+=B,p.total_out+=B,p.avail_out-=B,H.pending-=B,H.pending===0&&(H.pending_out=0))}function ee(p,H){a._tr_flush_block(p,0<=p.block_start?p.block_start:-1,p.strstart-p.block_start,H),p.block_start=p.strstart,re(p.strm)}function Ie(p,H){p.pending_buf[p.pending++]=H}function we(p,H){p.pending_buf[p.pending++]=H>>>8&255,p.pending_buf[p.pending++]=255&H}function te(p,H){var B,D,L=p.max_chain_length,z=p.strstart,U=p.prev_length,S=p.nice_match,j=p.strstart>p.w_size-O?p.strstart-(p.w_size-O):0,ne=p.window,le=p.w_mask,fe=p.prev,Te=p.strstart+P,Pe=ne[z+U-1],he=ne[z+U];p.prev_length>=p.good_match&&(L>>=2),S>p.lookahead&&(S=p.lookahead);do if(ne[(B=H)+U]===he&&ne[B+U-1]===Pe&&ne[B]===ne[z]&&ne[++B]===ne[z+1]){z+=2,B++;do;while(ne[++z]===ne[++B]&&ne[++z]===ne[++B]&&ne[++z]===ne[++B]&&ne[++z]===ne[++B]&&ne[++z]===ne[++B]&&ne[++z]===ne[++B]&&ne[++z]===ne[++B]&&ne[++z]===ne[++B]&&z<Te);if(D=P-(Te-z),z=Te-P,U<D){if(p.match_start=H,S<=(U=D))break;Pe=ne[z+U-1],he=ne[z+U]}}while((H=fe[H&le])>j&&--L!=0);return U<=p.lookahead?U:p.lookahead}function ue(p){var H,B,D,L,z,U,S,j,ne,le,fe=p.w_size;do{if(L=p.window_size-p.lookahead-p.strstart,p.strstart>=fe+(fe-O)){for(o.arraySet(p.window,p.window,fe,fe,0),p.match_start-=fe,p.strstart-=fe,p.block_start-=fe,H=B=p.hash_size;D=p.head[--H],p.head[H]=fe<=D?D-fe:0,--B;);for(H=B=fe;D=p.prev[--H],p.prev[H]=fe<=D?D-fe:0,--B;);L+=fe}if(p.strm.avail_in===0)break;if(U=p.strm,S=p.window,j=p.strstart+p.lookahead,ne=L,le=void 0,le=U.avail_in,ne<le&&(le=ne),B=le===0?0:(U.avail_in-=le,o.arraySet(S,U.input,U.next_in,le,j),U.state.wrap===1?U.adler=l(U.adler,S,le,j):U.state.wrap===2&&(U.adler=d(U.adler,S,le,j)),U.next_in+=le,U.total_in+=le,le),p.lookahead+=B,p.lookahead+p.insert>=x)for(z=p.strstart-p.insert,p.ins_h=p.window[z],p.ins_h=(p.ins_h<<p.hash_shift^p.window[z+1])&p.hash_mask;p.insert&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[z+x-1])&p.hash_mask,p.prev[z&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=z,z++,p.insert--,!(p.lookahead+p.insert<x)););}while(p.lookahead<O&&p.strm.avail_in!==0)}function K(p,H){for(var B,D;;){if(p.lookahead<O){if(ue(p),p.lookahead<O&&H===m)return E;if(p.lookahead===0)break}if(B=0,p.lookahead>=x&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+x-1])&p.hash_mask,B=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),B!==0&&p.strstart-B<=p.w_size-O&&(p.match_length=te(p,B)),p.match_length>=x)if(D=a._tr_tally(p,p.strstart-p.match_start,p.match_length-x),p.lookahead-=p.match_length,p.match_length<=p.max_lazy_match&&p.lookahead>=x){for(p.match_length--;p.strstart++,p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+x-1])&p.hash_mask,B=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart,--p.match_length!=0;);p.strstart++}else p.strstart+=p.match_length,p.match_length=0,p.ins_h=p.window[p.strstart],p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+1])&p.hash_mask;else D=a._tr_tally(p,0,p.window[p.strstart]),p.lookahead--,p.strstart++;if(D&&(ee(p,!1),p.strm.avail_out===0))return E}return p.insert=p.strstart<x-1?p.strstart:x-1,H===g?(ee(p,!0),p.strm.avail_out===0?ae:J):p.last_lit&&(ee(p,!1),p.strm.avail_out===0)?E:Y}function X(p,H){for(var B,D,L;;){if(p.lookahead<O){if(ue(p),p.lookahead<O&&H===m)return E;if(p.lookahead===0)break}if(B=0,p.lookahead>=x&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+x-1])&p.hash_mask,B=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),p.prev_length=p.match_length,p.prev_match=p.match_start,p.match_length=x-1,B!==0&&p.prev_length<p.max_lazy_match&&p.strstart-B<=p.w_size-O&&(p.match_length=te(p,B),p.match_length<=5&&(p.strategy===1||p.match_length===x&&4096<p.strstart-p.match_start)&&(p.match_length=x-1)),p.prev_length>=x&&p.match_length<=p.prev_length){for(L=p.strstart+p.lookahead-x,D=a._tr_tally(p,p.strstart-1-p.prev_match,p.prev_length-x),p.lookahead-=p.prev_length-1,p.prev_length-=2;++p.strstart<=L&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+x-1])&p.hash_mask,B=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),--p.prev_length!=0;);if(p.match_available=0,p.match_length=x-1,p.strstart++,D&&(ee(p,!1),p.strm.avail_out===0))return E}else if(p.match_available){if((D=a._tr_tally(p,0,p.window[p.strstart-1]))&&ee(p,!1),p.strstart++,p.lookahead--,p.strm.avail_out===0)return E}else p.match_available=1,p.strstart++,p.lookahead--}return p.match_available&&(D=a._tr_tally(p,0,p.window[p.strstart-1]),p.match_available=0),p.insert=p.strstart<x-1?p.strstart:x-1,H===g?(ee(p,!0),p.strm.avail_out===0?ae:J):p.last_lit&&(ee(p,!1),p.strm.avail_out===0)?E:Y}function me(p,H,B,D,L){this.good_length=p,this.max_lazy=H,this.nice_length=B,this.max_chain=D,this.func=L}function oe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=R,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*N),this.dyn_dtree=new o.Buf16(2*(2*f+1)),this.bl_tree=new o.Buf16(2*(2*G+1)),ye(this.dyn_ltree),ye(this.dyn_dtree),ye(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(A+1),this.heap=new o.Buf16(2*M+1),ye(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*M+1),ye(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _e(p){var H;return p&&p.state?(p.total_in=p.total_out=0,p.data_type=C,(H=p.state).pending=0,H.pending_out=0,H.wrap<0&&(H.wrap=-H.wrap),H.status=H.wrap?_:T,p.adler=H.wrap===2?0:1,H.last_flush=m,a._tr_init(H),y):ce(p,w)}function F(p){var H=_e(p);return H===y&&function(B){B.window_size=2*B.w_size,ye(B.head),B.max_lazy_match=s[B.level].max_lazy,B.good_match=s[B.level].good_length,B.nice_match=s[B.level].nice_length,B.max_chain_length=s[B.level].max_chain,B.strstart=0,B.block_start=0,B.lookahead=0,B.insert=0,B.match_length=B.prev_length=x-1,B.match_available=0,B.ins_h=0}(p.state),H}function q(p,H,B,D,L,z){if(!p)return w;var U=1;if(H===v&&(H=6),D<0?(U=0,D=-D):15<D&&(U=2,D-=16),L<1||V<L||B!==R||D<8||15<D||H<0||9<H||z<0||I<z)return ce(p,w);D===8&&(D=9);var S=new oe;return(p.state=S).strm=p,S.wrap=U,S.gzhead=null,S.w_bits=D,S.w_size=1<<S.w_bits,S.w_mask=S.w_size-1,S.hash_bits=L+7,S.hash_size=1<<S.hash_bits,S.hash_mask=S.hash_size-1,S.hash_shift=~~((S.hash_bits+x-1)/x),S.window=new o.Buf8(2*S.w_size),S.head=new o.Buf16(S.hash_size),S.prev=new o.Buf16(S.w_size),S.lit_bufsize=1<<L+6,S.pending_buf_size=4*S.lit_bufsize,S.pending_buf=new o.Buf8(S.pending_buf_size),S.d_buf=1*S.lit_bufsize,S.l_buf=3*S.lit_bufsize,S.level=H,S.strategy=z,S.method=B,F(p)}s=[new me(0,0,0,0,function(p,H){var B=65535;for(B>p.pending_buf_size-5&&(B=p.pending_buf_size-5);;){if(p.lookahead<=1){if(ue(p),p.lookahead===0&&H===m)return E;if(p.lookahead===0)break}p.strstart+=p.lookahead,p.lookahead=0;var D=p.block_start+B;if((p.strstart===0||p.strstart>=D)&&(p.lookahead=p.strstart-D,p.strstart=D,ee(p,!1),p.strm.avail_out===0)||p.strstart-p.block_start>=p.w_size-O&&(ee(p,!1),p.strm.avail_out===0))return E}return p.insert=0,H===g?(ee(p,!0),p.strm.avail_out===0?ae:J):(p.strstart>p.block_start&&(ee(p,!1),p.strm.avail_out),E)}),new me(4,4,8,4,K),new me(4,5,16,8,K),new me(4,6,32,32,K),new me(4,4,16,16,X),new me(8,16,32,32,X),new me(8,16,128,128,X),new me(8,32,128,256,X),new me(32,128,258,1024,X),new me(32,258,258,4096,X)],i.deflateInit=function(p,H){return q(p,H,R,15,8,0)},i.deflateInit2=q,i.deflateReset=F,i.deflateResetKeep=_e,i.deflateSetHeader=function(p,H){return p&&p.state?p.state.wrap!==2?w:(p.state.gzhead=H,y):w},i.deflate=function(p,H){var B,D,L,z;if(!p||!p.state||5<H||H<0)return p?ce(p,w):w;if(D=p.state,!p.output||!p.input&&p.avail_in!==0||D.status===666&&H!==g)return ce(p,p.avail_out===0?-5:w);if(D.strm=p,B=D.last_flush,D.last_flush=H,D.status===_)if(D.wrap===2)p.adler=0,Ie(D,31),Ie(D,139),Ie(D,8),D.gzhead?(Ie(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),Ie(D,255&D.gzhead.time),Ie(D,D.gzhead.time>>8&255),Ie(D,D.gzhead.time>>16&255),Ie(D,D.gzhead.time>>24&255),Ie(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),Ie(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(Ie(D,255&D.gzhead.extra.length),Ie(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(p.adler=d(p.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(Ie(D,0),Ie(D,0),Ie(D,0),Ie(D,0),Ie(D,0),Ie(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),Ie(D,3),D.status=T);else{var U=R+(D.w_bits-8<<4)<<8;U|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(U|=32),U+=31-U%31,D.status=T,we(D,U),D.strstart!==0&&(we(D,p.adler>>>16),we(D,65535&p.adler)),p.adler=1}if(D.status===69)if(D.gzhead.extra){for(L=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>L&&(p.adler=d(p.adler,D.pending_buf,D.pending-L,L)),re(p),L=D.pending,D.pending!==D.pending_buf_size));)Ie(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>L&&(p.adler=d(p.adler,D.pending_buf,D.pending-L,L)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){L=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>L&&(p.adler=d(p.adler,D.pending_buf,D.pending-L,L)),re(p),L=D.pending,D.pending===D.pending_buf_size)){z=1;break}z=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,Ie(D,z)}while(z!==0);D.gzhead.hcrc&&D.pending>L&&(p.adler=d(p.adler,D.pending_buf,D.pending-L,L)),z===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){L=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>L&&(p.adler=d(p.adler,D.pending_buf,D.pending-L,L)),re(p),L=D.pending,D.pending===D.pending_buf_size)){z=1;break}z=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,Ie(D,z)}while(z!==0);D.gzhead.hcrc&&D.pending>L&&(p.adler=d(p.adler,D.pending_buf,D.pending-L,L)),z===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&re(p),D.pending+2<=D.pending_buf_size&&(Ie(D,255&p.adler),Ie(D,p.adler>>8&255),p.adler=0,D.status=T)):D.status=T),D.pending!==0){if(re(p),p.avail_out===0)return D.last_flush=-1,y}else if(p.avail_in===0&&ie(H)<=ie(B)&&H!==g)return ce(p,-5);if(D.status===666&&p.avail_in!==0)return ce(p,-5);if(p.avail_in!==0||D.lookahead!==0||H!==m&&D.status!==666){var S=D.strategy===2?function(j,ne){for(var le;;){if(j.lookahead===0&&(ue(j),j.lookahead===0)){if(ne===m)return E;break}if(j.match_length=0,le=a._tr_tally(j,0,j.window[j.strstart]),j.lookahead--,j.strstart++,le&&(ee(j,!1),j.strm.avail_out===0))return E}return j.insert=0,ne===g?(ee(j,!0),j.strm.avail_out===0?ae:J):j.last_lit&&(ee(j,!1),j.strm.avail_out===0)?E:Y}(D,H):D.strategy===3?function(j,ne){for(var le,fe,Te,Pe,he=j.window;;){if(j.lookahead<=P){if(ue(j),j.lookahead<=P&&ne===m)return E;if(j.lookahead===0)break}if(j.match_length=0,j.lookahead>=x&&0<j.strstart&&(fe=he[Te=j.strstart-1])===he[++Te]&&fe===he[++Te]&&fe===he[++Te]){Pe=j.strstart+P;do;while(fe===he[++Te]&&fe===he[++Te]&&fe===he[++Te]&&fe===he[++Te]&&fe===he[++Te]&&fe===he[++Te]&&fe===he[++Te]&&fe===he[++Te]&&Te<Pe);j.match_length=P-(Pe-Te),j.match_length>j.lookahead&&(j.match_length=j.lookahead)}if(j.match_length>=x?(le=a._tr_tally(j,1,j.match_length-x),j.lookahead-=j.match_length,j.strstart+=j.match_length,j.match_length=0):(le=a._tr_tally(j,0,j.window[j.strstart]),j.lookahead--,j.strstart++),le&&(ee(j,!1),j.strm.avail_out===0))return E}return j.insert=0,ne===g?(ee(j,!0),j.strm.avail_out===0?ae:J):j.last_lit&&(ee(j,!1),j.strm.avail_out===0)?E:Y}(D,H):s[D.level].func(D,H);if(S!==ae&&S!==J||(D.status=666),S===E||S===ae)return p.avail_out===0&&(D.last_flush=-1),y;if(S===Y&&(H===1?a._tr_align(D):H!==5&&(a._tr_stored_block(D,0,0,!1),H===3&&(ye(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),re(p),p.avail_out===0))return D.last_flush=-1,y}return H!==g?y:D.wrap<=0?1:(D.wrap===2?(Ie(D,255&p.adler),Ie(D,p.adler>>8&255),Ie(D,p.adler>>16&255),Ie(D,p.adler>>24&255),Ie(D,255&p.total_in),Ie(D,p.total_in>>8&255),Ie(D,p.total_in>>16&255),Ie(D,p.total_in>>24&255)):(we(D,p.adler>>>16),we(D,65535&p.adler)),re(p),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?y:1)},i.deflateEnd=function(p){var H;return p&&p.state?(H=p.state.status)!==_&&H!==69&&H!==73&&H!==91&&H!==103&&H!==T&&H!==666?ce(p,w):(p.state=null,H===T?ce(p,-3):y):w},i.deflateSetDictionary=function(p,H){var B,D,L,z,U,S,j,ne,le=H.length;if(!p||!p.state||(z=(B=p.state).wrap)===2||z===1&&B.status!==_||B.lookahead)return w;for(z===1&&(p.adler=l(p.adler,H,le,0)),B.wrap=0,le>=B.w_size&&(z===0&&(ye(B.head),B.strstart=0,B.block_start=0,B.insert=0),ne=new o.Buf8(B.w_size),o.arraySet(ne,H,le-B.w_size,B.w_size,0),H=ne,le=B.w_size),U=p.avail_in,S=p.next_in,j=p.input,p.avail_in=le,p.next_in=0,p.input=H,ue(B);B.lookahead>=x;){for(D=B.strstart,L=B.lookahead-(x-1);B.ins_h=(B.ins_h<<B.hash_shift^B.window[D+x-1])&B.hash_mask,B.prev[D&B.w_mask]=B.head[B.ins_h],B.head[B.ins_h]=D,D++,--L;);B.strstart=D,B.lookahead=x-1,ue(B)}return B.strstart+=B.lookahead,B.block_start=B.strstart,B.insert=B.lookahead,B.lookahead=0,B.match_length=B.prev_length=x-1,B.match_available=0,p.next_in=S,p.input=j,p.avail_in=U,B.wrap=z,y},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(s,o){var a,l,d,h,m,g,y,w,v,I,C,R,V,M,f,G,N,A,x,P,O,_,T,E,Y;a=s.state,l=s.next_in,E=s.input,d=l+(s.avail_in-5),h=s.next_out,Y=s.output,m=h-(o-s.avail_out),g=h+(s.avail_out-257),y=a.dmax,w=a.wsize,v=a.whave,I=a.wnext,C=a.window,R=a.hold,V=a.bits,M=a.lencode,f=a.distcode,G=(1<<a.lenbits)-1,N=(1<<a.distbits)-1;e:do{V<15&&(R+=E[l++]<<V,V+=8,R+=E[l++]<<V,V+=8),A=M[R&G];t:for(;;){if(R>>>=x=A>>>24,V-=x,(x=A>>>16&255)===0)Y[h++]=65535&A;else{if(!(16&x)){if(!(64&x)){A=M[(65535&A)+(R&(1<<x)-1)];continue t}if(32&x){a.mode=12;break e}s.msg="invalid literal/length code",a.mode=30;break e}P=65535&A,(x&=15)&&(V<x&&(R+=E[l++]<<V,V+=8),P+=R&(1<<x)-1,R>>>=x,V-=x),V<15&&(R+=E[l++]<<V,V+=8,R+=E[l++]<<V,V+=8),A=f[R&N];n:for(;;){if(R>>>=x=A>>>24,V-=x,!(16&(x=A>>>16&255))){if(!(64&x)){A=f[(65535&A)+(R&(1<<x)-1)];continue n}s.msg="invalid distance code",a.mode=30;break e}if(O=65535&A,V<(x&=15)&&(R+=E[l++]<<V,(V+=8)<x&&(R+=E[l++]<<V,V+=8)),y<(O+=R&(1<<x)-1)){s.msg="invalid distance too far back",a.mode=30;break e}if(R>>>=x,V-=x,(x=h-m)<O){if(v<(x=O-x)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break e}if(T=C,(_=0)===I){if(_+=w-x,x<P){for(P-=x;Y[h++]=C[_++],--x;);_=h-O,T=Y}}else if(I<x){if(_+=w+I-x,(x-=I)<P){for(P-=x;Y[h++]=C[_++],--x;);if(_=0,I<P){for(P-=x=I;Y[h++]=C[_++],--x;);_=h-O,T=Y}}}else if(_+=I-x,x<P){for(P-=x;Y[h++]=C[_++],--x;);_=h-O,T=Y}for(;2<P;)Y[h++]=T[_++],Y[h++]=T[_++],Y[h++]=T[_++],P-=3;P&&(Y[h++]=T[_++],1<P&&(Y[h++]=T[_++]))}else{for(_=h-O;Y[h++]=Y[_++],Y[h++]=Y[_++],Y[h++]=Y[_++],2<(P-=3););P&&(Y[h++]=Y[_++],1<P&&(Y[h++]=Y[_++]))}break}}break}}while(l<d&&h<g);l-=P=V>>3,R&=(1<<(V-=P<<3))-1,s.next_in=l,s.next_out=h,s.avail_in=l<d?d-l+5:5-(l-d),s.avail_out=h<g?g-h+257:257-(h-g),a.hold=R,a.bits=V}},{}],49:[function(n,r,i){var s=n("../utils/common"),o=n("./adler32"),a=n("./crc32"),l=n("./inffast"),d=n("./inftrees"),h=1,m=2,g=0,y=-2,w=1,v=852,I=592;function C(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function R(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function V(_){var T;return _&&_.state?(T=_.state,_.total_in=_.total_out=T.total=0,_.msg="",T.wrap&&(_.adler=1&T.wrap),T.mode=w,T.last=0,T.havedict=0,T.dmax=32768,T.head=null,T.hold=0,T.bits=0,T.lencode=T.lendyn=new s.Buf32(v),T.distcode=T.distdyn=new s.Buf32(I),T.sane=1,T.back=-1,g):y}function M(_){var T;return _&&_.state?((T=_.state).wsize=0,T.whave=0,T.wnext=0,V(_)):y}function f(_,T){var E,Y;return _&&_.state?(Y=_.state,T<0?(E=0,T=-T):(E=1+(T>>4),T<48&&(T&=15)),T&&(T<8||15<T)?y:(Y.window!==null&&Y.wbits!==T&&(Y.window=null),Y.wrap=E,Y.wbits=T,M(_))):y}function G(_,T){var E,Y;return _?(Y=new R,(_.state=Y).window=null,(E=f(_,T))!==g&&(_.state=null),E):y}var N,A,x=!0;function P(_){if(x){var T;for(N=new s.Buf32(512),A=new s.Buf32(32),T=0;T<144;)_.lens[T++]=8;for(;T<256;)_.lens[T++]=9;for(;T<280;)_.lens[T++]=7;for(;T<288;)_.lens[T++]=8;for(d(h,_.lens,0,288,N,0,_.work,{bits:9}),T=0;T<32;)_.lens[T++]=5;d(m,_.lens,0,32,A,0,_.work,{bits:5}),x=!1}_.lencode=N,_.lenbits=9,_.distcode=A,_.distbits=5}function O(_,T,E,Y){var ae,J=_.state;return J.window===null&&(J.wsize=1<<J.wbits,J.wnext=0,J.whave=0,J.window=new s.Buf8(J.wsize)),Y>=J.wsize?(s.arraySet(J.window,T,E-J.wsize,J.wsize,0),J.wnext=0,J.whave=J.wsize):(Y<(ae=J.wsize-J.wnext)&&(ae=Y),s.arraySet(J.window,T,E-Y,ae,J.wnext),(Y-=ae)?(s.arraySet(J.window,T,E-Y,Y,0),J.wnext=Y,J.whave=J.wsize):(J.wnext+=ae,J.wnext===J.wsize&&(J.wnext=0),J.whave<J.wsize&&(J.whave+=ae))),0}i.inflateReset=M,i.inflateReset2=f,i.inflateResetKeep=V,i.inflateInit=function(_){return G(_,15)},i.inflateInit2=G,i.inflate=function(_,T){var E,Y,ae,J,ce,ie,ye,re,ee,Ie,we,te,ue,K,X,me,oe,_e,F,q,p,H,B,D,L=0,z=new s.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return y;(E=_.state).mode===12&&(E.mode=13),ce=_.next_out,ae=_.output,ye=_.avail_out,J=_.next_in,Y=_.input,ie=_.avail_in,re=E.hold,ee=E.bits,Ie=ie,we=ye,H=g;e:for(;;)switch(E.mode){case w:if(E.wrap===0){E.mode=13;break}for(;ee<16;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(2&E.wrap&&re===35615){z[E.check=0]=255&re,z[1]=re>>>8&255,E.check=a(E.check,z,2,0),ee=re=0,E.mode=2;break}if(E.flags=0,E.head&&(E.head.done=!1),!(1&E.wrap)||(((255&re)<<8)+(re>>8))%31){_.msg="incorrect header check",E.mode=30;break}if((15&re)!=8){_.msg="unknown compression method",E.mode=30;break}if(ee-=4,p=8+(15&(re>>>=4)),E.wbits===0)E.wbits=p;else if(p>E.wbits){_.msg="invalid window size",E.mode=30;break}E.dmax=1<<p,_.adler=E.check=1,E.mode=512&re?10:12,ee=re=0;break;case 2:for(;ee<16;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(E.flags=re,(255&E.flags)!=8){_.msg="unknown compression method",E.mode=30;break}if(57344&E.flags){_.msg="unknown header flags set",E.mode=30;break}E.head&&(E.head.text=re>>8&1),512&E.flags&&(z[0]=255&re,z[1]=re>>>8&255,E.check=a(E.check,z,2,0)),ee=re=0,E.mode=3;case 3:for(;ee<32;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}E.head&&(E.head.time=re),512&E.flags&&(z[0]=255&re,z[1]=re>>>8&255,z[2]=re>>>16&255,z[3]=re>>>24&255,E.check=a(E.check,z,4,0)),ee=re=0,E.mode=4;case 4:for(;ee<16;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}E.head&&(E.head.xflags=255&re,E.head.os=re>>8),512&E.flags&&(z[0]=255&re,z[1]=re>>>8&255,E.check=a(E.check,z,2,0)),ee=re=0,E.mode=5;case 5:if(1024&E.flags){for(;ee<16;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}E.length=re,E.head&&(E.head.extra_len=re),512&E.flags&&(z[0]=255&re,z[1]=re>>>8&255,E.check=a(E.check,z,2,0)),ee=re=0}else E.head&&(E.head.extra=null);E.mode=6;case 6:if(1024&E.flags&&(ie<(te=E.length)&&(te=ie),te&&(E.head&&(p=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),s.arraySet(E.head.extra,Y,J,te,p)),512&E.flags&&(E.check=a(E.check,Y,te,J)),ie-=te,J+=te,E.length-=te),E.length))break e;E.length=0,E.mode=7;case 7:if(2048&E.flags){if(ie===0)break e;for(te=0;p=Y[J+te++],E.head&&p&&E.length<65536&&(E.head.name+=String.fromCharCode(p)),p&&te<ie;);if(512&E.flags&&(E.check=a(E.check,Y,te,J)),ie-=te,J+=te,p)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=8;case 8:if(4096&E.flags){if(ie===0)break e;for(te=0;p=Y[J+te++],E.head&&p&&E.length<65536&&(E.head.comment+=String.fromCharCode(p)),p&&te<ie;);if(512&E.flags&&(E.check=a(E.check,Y,te,J)),ie-=te,J+=te,p)break e}else E.head&&(E.head.comment=null);E.mode=9;case 9:if(512&E.flags){for(;ee<16;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(re!==(65535&E.check)){_.msg="header crc mismatch",E.mode=30;break}ee=re=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),_.adler=E.check=0,E.mode=12;break;case 10:for(;ee<32;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}_.adler=E.check=C(re),ee=re=0,E.mode=11;case 11:if(E.havedict===0)return _.next_out=ce,_.avail_out=ye,_.next_in=J,_.avail_in=ie,E.hold=re,E.bits=ee,2;_.adler=E.check=1,E.mode=12;case 12:if(T===5||T===6)break e;case 13:if(E.last){re>>>=7&ee,ee-=7&ee,E.mode=27;break}for(;ee<3;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}switch(E.last=1&re,ee-=1,3&(re>>>=1)){case 0:E.mode=14;break;case 1:if(P(E),E.mode=20,T!==6)break;re>>>=2,ee-=2;break e;case 2:E.mode=17;break;case 3:_.msg="invalid block type",E.mode=30}re>>>=2,ee-=2;break;case 14:for(re>>>=7&ee,ee-=7&ee;ee<32;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if((65535&re)!=(re>>>16^65535)){_.msg="invalid stored block lengths",E.mode=30;break}if(E.length=65535&re,ee=re=0,E.mode=15,T===6)break e;case 15:E.mode=16;case 16:if(te=E.length){if(ie<te&&(te=ie),ye<te&&(te=ye),te===0)break e;s.arraySet(ae,Y,J,te,ce),ie-=te,J+=te,ye-=te,ce+=te,E.length-=te;break}E.mode=12;break;case 17:for(;ee<14;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(E.nlen=257+(31&re),re>>>=5,ee-=5,E.ndist=1+(31&re),re>>>=5,ee-=5,E.ncode=4+(15&re),re>>>=4,ee-=4,286<E.nlen||30<E.ndist){_.msg="too many length or distance symbols",E.mode=30;break}E.have=0,E.mode=18;case 18:for(;E.have<E.ncode;){for(;ee<3;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}E.lens[U[E.have++]]=7&re,re>>>=3,ee-=3}for(;E.have<19;)E.lens[U[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,B={bits:E.lenbits},H=d(0,E.lens,0,19,E.lencode,0,E.work,B),E.lenbits=B.bits,H){_.msg="invalid code lengths set",E.mode=30;break}E.have=0,E.mode=19;case 19:for(;E.have<E.nlen+E.ndist;){for(;me=(L=E.lencode[re&(1<<E.lenbits)-1])>>>16&255,oe=65535&L,!((X=L>>>24)<=ee);){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(oe<16)re>>>=X,ee-=X,E.lens[E.have++]=oe;else{if(oe===16){for(D=X+2;ee<D;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(re>>>=X,ee-=X,E.have===0){_.msg="invalid bit length repeat",E.mode=30;break}p=E.lens[E.have-1],te=3+(3&re),re>>>=2,ee-=2}else if(oe===17){for(D=X+3;ee<D;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}ee-=X,p=0,te=3+(7&(re>>>=X)),re>>>=3,ee-=3}else{for(D=X+7;ee<D;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}ee-=X,p=0,te=11+(127&(re>>>=X)),re>>>=7,ee-=7}if(E.have+te>E.nlen+E.ndist){_.msg="invalid bit length repeat",E.mode=30;break}for(;te--;)E.lens[E.have++]=p}}if(E.mode===30)break;if(E.lens[256]===0){_.msg="invalid code -- missing end-of-block",E.mode=30;break}if(E.lenbits=9,B={bits:E.lenbits},H=d(h,E.lens,0,E.nlen,E.lencode,0,E.work,B),E.lenbits=B.bits,H){_.msg="invalid literal/lengths set",E.mode=30;break}if(E.distbits=6,E.distcode=E.distdyn,B={bits:E.distbits},H=d(m,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,B),E.distbits=B.bits,H){_.msg="invalid distances set",E.mode=30;break}if(E.mode=20,T===6)break e;case 20:E.mode=21;case 21:if(6<=ie&&258<=ye){_.next_out=ce,_.avail_out=ye,_.next_in=J,_.avail_in=ie,E.hold=re,E.bits=ee,l(_,we),ce=_.next_out,ae=_.output,ye=_.avail_out,J=_.next_in,Y=_.input,ie=_.avail_in,re=E.hold,ee=E.bits,E.mode===12&&(E.back=-1);break}for(E.back=0;me=(L=E.lencode[re&(1<<E.lenbits)-1])>>>16&255,oe=65535&L,!((X=L>>>24)<=ee);){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(me&&!(240&me)){for(_e=X,F=me,q=oe;me=(L=E.lencode[q+((re&(1<<_e+F)-1)>>_e)])>>>16&255,oe=65535&L,!(_e+(X=L>>>24)<=ee);){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}re>>>=_e,ee-=_e,E.back+=_e}if(re>>>=X,ee-=X,E.back+=X,E.length=oe,me===0){E.mode=26;break}if(32&me){E.back=-1,E.mode=12;break}if(64&me){_.msg="invalid literal/length code",E.mode=30;break}E.extra=15&me,E.mode=22;case 22:if(E.extra){for(D=E.extra;ee<D;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}E.length+=re&(1<<E.extra)-1,re>>>=E.extra,ee-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=23;case 23:for(;me=(L=E.distcode[re&(1<<E.distbits)-1])>>>16&255,oe=65535&L,!((X=L>>>24)<=ee);){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(!(240&me)){for(_e=X,F=me,q=oe;me=(L=E.distcode[q+((re&(1<<_e+F)-1)>>_e)])>>>16&255,oe=65535&L,!(_e+(X=L>>>24)<=ee);){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}re>>>=_e,ee-=_e,E.back+=_e}if(re>>>=X,ee-=X,E.back+=X,64&me){_.msg="invalid distance code",E.mode=30;break}E.offset=oe,E.extra=15&me,E.mode=24;case 24:if(E.extra){for(D=E.extra;ee<D;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}E.offset+=re&(1<<E.extra)-1,re>>>=E.extra,ee-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){_.msg="invalid distance too far back",E.mode=30;break}E.mode=25;case 25:if(ye===0)break e;if(te=we-ye,E.offset>te){if((te=E.offset-te)>E.whave&&E.sane){_.msg="invalid distance too far back",E.mode=30;break}ue=te>E.wnext?(te-=E.wnext,E.wsize-te):E.wnext-te,te>E.length&&(te=E.length),K=E.window}else K=ae,ue=ce-E.offset,te=E.length;for(ye<te&&(te=ye),ye-=te,E.length-=te;ae[ce++]=K[ue++],--te;);E.length===0&&(E.mode=21);break;case 26:if(ye===0)break e;ae[ce++]=E.length,ye--,E.mode=21;break;case 27:if(E.wrap){for(;ee<32;){if(ie===0)break e;ie--,re|=Y[J++]<<ee,ee+=8}if(we-=ye,_.total_out+=we,E.total+=we,we&&(_.adler=E.check=E.flags?a(E.check,ae,we,ce-we):o(E.check,ae,we,ce-we)),we=ye,(E.flags?re:C(re))!==E.check){_.msg="incorrect data check",E.mode=30;break}ee=re=0}E.mode=28;case 28:if(E.wrap&&E.flags){for(;ee<32;){if(ie===0)break e;ie--,re+=Y[J++]<<ee,ee+=8}if(re!==(4294967295&E.total)){_.msg="incorrect length check",E.mode=30;break}ee=re=0}E.mode=29;case 29:H=1;break e;case 30:H=-3;break e;case 31:return-4;case 32:default:return y}return _.next_out=ce,_.avail_out=ye,_.next_in=J,_.avail_in=ie,E.hold=re,E.bits=ee,(E.wsize||we!==_.avail_out&&E.mode<30&&(E.mode<27||T!==4))&&O(_,_.output,_.next_out,we-_.avail_out)?(E.mode=31,-4):(Ie-=_.avail_in,we-=_.avail_out,_.total_in+=Ie,_.total_out+=we,E.total+=we,E.wrap&&we&&(_.adler=E.check=E.flags?a(E.check,ae,we,_.next_out-we):o(E.check,ae,we,_.next_out-we)),_.data_type=E.bits+(E.last?64:0)+(E.mode===12?128:0)+(E.mode===20||E.mode===15?256:0),(Ie==0&&we===0||T===4)&&H===g&&(H=-5),H)},i.inflateEnd=function(_){if(!_||!_.state)return y;var T=_.state;return T.window&&(T.window=null),_.state=null,g},i.inflateGetHeader=function(_,T){var E;return _&&_.state&&2&(E=_.state).wrap?((E.head=T).done=!1,g):y},i.inflateSetDictionary=function(_,T){var E,Y=T.length;return _&&_.state?(E=_.state).wrap!==0&&E.mode!==11?y:E.mode===11&&o(1,T,Y,0)!==E.check?-3:O(_,T,Y,Y)?(E.mode=31,-4):(E.havedict=1,g):y},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var s=n("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(h,m,g,y,w,v,I,C){var R,V,M,f,G,N,A,x,P,O=C.bits,_=0,T=0,E=0,Y=0,ae=0,J=0,ce=0,ie=0,ye=0,re=0,ee=null,Ie=0,we=new s.Buf16(16),te=new s.Buf16(16),ue=null,K=0;for(_=0;_<=15;_++)we[_]=0;for(T=0;T<y;T++)we[m[g+T]]++;for(ae=O,Y=15;1<=Y&&we[Y]===0;Y--);if(Y<ae&&(ae=Y),Y===0)return w[v++]=20971520,w[v++]=20971520,C.bits=1,0;for(E=1;E<Y&&we[E]===0;E++);for(ae<E&&(ae=E),_=ie=1;_<=15;_++)if(ie<<=1,(ie-=we[_])<0)return-1;if(0<ie&&(h===0||Y!==1))return-1;for(te[1]=0,_=1;_<15;_++)te[_+1]=te[_]+we[_];for(T=0;T<y;T++)m[g+T]!==0&&(I[te[m[g+T]]++]=T);if(N=h===0?(ee=ue=I,19):h===1?(ee=o,Ie-=257,ue=a,K-=257,256):(ee=l,ue=d,-1),_=E,G=v,ce=T=re=0,M=-1,f=(ye=1<<(J=ae))-1,h===1&&852<ye||h===2&&592<ye)return 1;for(;;){for(A=_-ce,P=I[T]<N?(x=0,I[T]):I[T]>N?(x=ue[K+I[T]],ee[Ie+I[T]]):(x=96,0),R=1<<_-ce,E=V=1<<J;w[G+(re>>ce)+(V-=R)]=A<<24|x<<16|P|0,V!==0;);for(R=1<<_-1;re&R;)R>>=1;if(R!==0?(re&=R-1,re+=R):re=0,T++,--we[_]==0){if(_===Y)break;_=m[g+I[T]]}if(ae<_&&(re&f)!==M){for(ce===0&&(ce=ae),G+=E,ie=1<<(J=_-ce);J+ce<Y&&!((ie-=we[J+ce])<=0);)J++,ie<<=1;if(ye+=1<<J,h===1&&852<ye||h===2&&592<ye)return 1;w[M=re&f]=ae<<24|J<<16|G-v|0}}return re!==0&&(w[G+re]=_-ce<<24|64<<16|0),C.bits=ae,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var s=n("../utils/common"),o=0,a=1;function l(L){for(var z=L.length;0<=--z;)L[z]=0}var d=0,h=29,m=256,g=m+1+h,y=30,w=19,v=2*g+1,I=15,C=16,R=7,V=256,M=16,f=17,G=18,N=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],O=new Array(2*(g+2));l(O);var _=new Array(2*y);l(_);var T=new Array(512);l(T);var E=new Array(256);l(E);var Y=new Array(h);l(Y);var ae,J,ce,ie=new Array(y);function ye(L,z,U,S,j){this.static_tree=L,this.extra_bits=z,this.extra_base=U,this.elems=S,this.max_length=j,this.has_stree=L&&L.length}function re(L,z){this.dyn_tree=L,this.max_code=0,this.stat_desc=z}function ee(L){return L<256?T[L]:T[256+(L>>>7)]}function Ie(L,z){L.pending_buf[L.pending++]=255&z,L.pending_buf[L.pending++]=z>>>8&255}function we(L,z,U){L.bi_valid>C-U?(L.bi_buf|=z<<L.bi_valid&65535,Ie(L,L.bi_buf),L.bi_buf=z>>C-L.bi_valid,L.bi_valid+=U-C):(L.bi_buf|=z<<L.bi_valid&65535,L.bi_valid+=U)}function te(L,z,U){we(L,U[2*z],U[2*z+1])}function ue(L,z){for(var U=0;U|=1&L,L>>>=1,U<<=1,0<--z;);return U>>>1}function K(L,z,U){var S,j,ne=new Array(I+1),le=0;for(S=1;S<=I;S++)ne[S]=le=le+U[S-1]<<1;for(j=0;j<=z;j++){var fe=L[2*j+1];fe!==0&&(L[2*j]=ue(ne[fe]++,fe))}}function X(L){var z;for(z=0;z<g;z++)L.dyn_ltree[2*z]=0;for(z=0;z<y;z++)L.dyn_dtree[2*z]=0;for(z=0;z<w;z++)L.bl_tree[2*z]=0;L.dyn_ltree[2*V]=1,L.opt_len=L.static_len=0,L.last_lit=L.matches=0}function me(L){8<L.bi_valid?Ie(L,L.bi_buf):0<L.bi_valid&&(L.pending_buf[L.pending++]=L.bi_buf),L.bi_buf=0,L.bi_valid=0}function oe(L,z,U,S){var j=2*z,ne=2*U;return L[j]<L[ne]||L[j]===L[ne]&&S[z]<=S[U]}function _e(L,z,U){for(var S=L.heap[U],j=U<<1;j<=L.heap_len&&(j<L.heap_len&&oe(z,L.heap[j+1],L.heap[j],L.depth)&&j++,!oe(z,S,L.heap[j],L.depth));)L.heap[U]=L.heap[j],U=j,j<<=1;L.heap[U]=S}function F(L,z,U){var S,j,ne,le,fe=0;if(L.last_lit!==0)for(;S=L.pending_buf[L.d_buf+2*fe]<<8|L.pending_buf[L.d_buf+2*fe+1],j=L.pending_buf[L.l_buf+fe],fe++,S===0?te(L,j,z):(te(L,(ne=E[j])+m+1,z),(le=N[ne])!==0&&we(L,j-=Y[ne],le),te(L,ne=ee(--S),U),(le=A[ne])!==0&&we(L,S-=ie[ne],le)),fe<L.last_lit;);te(L,V,z)}function q(L,z){var U,S,j,ne=z.dyn_tree,le=z.stat_desc.static_tree,fe=z.stat_desc.has_stree,Te=z.stat_desc.elems,Pe=-1;for(L.heap_len=0,L.heap_max=v,U=0;U<Te;U++)ne[2*U]!==0?(L.heap[++L.heap_len]=Pe=U,L.depth[U]=0):ne[2*U+1]=0;for(;L.heap_len<2;)ne[2*(j=L.heap[++L.heap_len]=Pe<2?++Pe:0)]=1,L.depth[j]=0,L.opt_len--,fe&&(L.static_len-=le[2*j+1]);for(z.max_code=Pe,U=L.heap_len>>1;1<=U;U--)_e(L,ne,U);for(j=Te;U=L.heap[1],L.heap[1]=L.heap[L.heap_len--],_e(L,ne,1),S=L.heap[1],L.heap[--L.heap_max]=U,L.heap[--L.heap_max]=S,ne[2*j]=ne[2*U]+ne[2*S],L.depth[j]=(L.depth[U]>=L.depth[S]?L.depth[U]:L.depth[S])+1,ne[2*U+1]=ne[2*S+1]=j,L.heap[1]=j++,_e(L,ne,1),2<=L.heap_len;);L.heap[--L.heap_max]=L.heap[1],function(he,je){var rt,Ke,yt,Ge,Jt,tt,Ze=je.dyn_tree,It=je.max_code,Ce=je.stat_desc.static_tree,se=je.stat_desc.has_stree,Qe=je.stat_desc.extra_bits,At=je.stat_desc.extra_base,ke=je.stat_desc.max_length,Tt=0;for(Ge=0;Ge<=I;Ge++)he.bl_count[Ge]=0;for(Ze[2*he.heap[he.heap_max]+1]=0,rt=he.heap_max+1;rt<v;rt++)ke<(Ge=Ze[2*Ze[2*(Ke=he.heap[rt])+1]+1]+1)&&(Ge=ke,Tt++),Ze[2*Ke+1]=Ge,It<Ke||(he.bl_count[Ge]++,Jt=0,At<=Ke&&(Jt=Qe[Ke-At]),tt=Ze[2*Ke],he.opt_len+=tt*(Ge+Jt),se&&(he.static_len+=tt*(Ce[2*Ke+1]+Jt)));if(Tt!==0){do{for(Ge=ke-1;he.bl_count[Ge]===0;)Ge--;he.bl_count[Ge]--,he.bl_count[Ge+1]+=2,he.bl_count[ke]--,Tt-=2}while(0<Tt);for(Ge=ke;Ge!==0;Ge--)for(Ke=he.bl_count[Ge];Ke!==0;)It<(yt=he.heap[--rt])||(Ze[2*yt+1]!==Ge&&(he.opt_len+=(Ge-Ze[2*yt+1])*Ze[2*yt],Ze[2*yt+1]=Ge),Ke--)}}(L,z),K(ne,Pe,L.bl_count)}function p(L,z,U){var S,j,ne=-1,le=z[1],fe=0,Te=7,Pe=4;for(le===0&&(Te=138,Pe=3),z[2*(U+1)+1]=65535,S=0;S<=U;S++)j=le,le=z[2*(S+1)+1],++fe<Te&&j===le||(fe<Pe?L.bl_tree[2*j]+=fe:j!==0?(j!==ne&&L.bl_tree[2*j]++,L.bl_tree[2*M]++):fe<=10?L.bl_tree[2*f]++:L.bl_tree[2*G]++,ne=j,Pe=(fe=0)===le?(Te=138,3):j===le?(Te=6,3):(Te=7,4))}function H(L,z,U){var S,j,ne=-1,le=z[1],fe=0,Te=7,Pe=4;for(le===0&&(Te=138,Pe=3),S=0;S<=U;S++)if(j=le,le=z[2*(S+1)+1],!(++fe<Te&&j===le)){if(fe<Pe)for(;te(L,j,L.bl_tree),--fe!=0;);else j!==0?(j!==ne&&(te(L,j,L.bl_tree),fe--),te(L,M,L.bl_tree),we(L,fe-3,2)):fe<=10?(te(L,f,L.bl_tree),we(L,fe-3,3)):(te(L,G,L.bl_tree),we(L,fe-11,7));ne=j,Pe=(fe=0)===le?(Te=138,3):j===le?(Te=6,3):(Te=7,4)}}l(ie);var B=!1;function D(L,z,U,S){we(L,(d<<1)+(S?1:0),3),function(j,ne,le,fe){me(j),Ie(j,le),Ie(j,~le),s.arraySet(j.pending_buf,j.window,ne,le,j.pending),j.pending+=le}(L,z,U)}i._tr_init=function(L){B||(function(){var z,U,S,j,ne,le=new Array(I+1);for(j=S=0;j<h-1;j++)for(Y[j]=S,z=0;z<1<<N[j];z++)E[S++]=j;for(E[S-1]=j,j=ne=0;j<16;j++)for(ie[j]=ne,z=0;z<1<<A[j];z++)T[ne++]=j;for(ne>>=7;j<y;j++)for(ie[j]=ne<<7,z=0;z<1<<A[j]-7;z++)T[256+ne++]=j;for(U=0;U<=I;U++)le[U]=0;for(z=0;z<=143;)O[2*z+1]=8,z++,le[8]++;for(;z<=255;)O[2*z+1]=9,z++,le[9]++;for(;z<=279;)O[2*z+1]=7,z++,le[7]++;for(;z<=287;)O[2*z+1]=8,z++,le[8]++;for(K(O,g+1,le),z=0;z<y;z++)_[2*z+1]=5,_[2*z]=ue(z,5);ae=new ye(O,N,m+1,g,I),J=new ye(_,A,0,y,I),ce=new ye(new Array(0),x,0,w,R)}(),B=!0),L.l_desc=new re(L.dyn_ltree,ae),L.d_desc=new re(L.dyn_dtree,J),L.bl_desc=new re(L.bl_tree,ce),L.bi_buf=0,L.bi_valid=0,X(L)},i._tr_stored_block=D,i._tr_flush_block=function(L,z,U,S){var j,ne,le=0;0<L.level?(L.strm.data_type===2&&(L.strm.data_type=function(fe){var Te,Pe=4093624447;for(Te=0;Te<=31;Te++,Pe>>>=1)if(1&Pe&&fe.dyn_ltree[2*Te]!==0)return o;if(fe.dyn_ltree[18]!==0||fe.dyn_ltree[20]!==0||fe.dyn_ltree[26]!==0)return a;for(Te=32;Te<m;Te++)if(fe.dyn_ltree[2*Te]!==0)return a;return o}(L)),q(L,L.l_desc),q(L,L.d_desc),le=function(fe){var Te;for(p(fe,fe.dyn_ltree,fe.l_desc.max_code),p(fe,fe.dyn_dtree,fe.d_desc.max_code),q(fe,fe.bl_desc),Te=w-1;3<=Te&&fe.bl_tree[2*P[Te]+1]===0;Te--);return fe.opt_len+=3*(Te+1)+5+5+4,Te}(L),j=L.opt_len+3+7>>>3,(ne=L.static_len+3+7>>>3)<=j&&(j=ne)):j=ne=U+5,U+4<=j&&z!==-1?D(L,z,U,S):L.strategy===4||ne===j?(we(L,2+(S?1:0),3),F(L,O,_)):(we(L,4+(S?1:0),3),function(fe,Te,Pe,he){var je;for(we(fe,Te-257,5),we(fe,Pe-1,5),we(fe,he-4,4),je=0;je<he;je++)we(fe,fe.bl_tree[2*P[je]+1],3);H(fe,fe.dyn_ltree,Te-1),H(fe,fe.dyn_dtree,Pe-1)}(L,L.l_desc.max_code+1,L.d_desc.max_code+1,le+1),F(L,L.dyn_ltree,L.dyn_dtree)),X(L),S&&me(L)},i._tr_tally=function(L,z,U){return L.pending_buf[L.d_buf+2*L.last_lit]=z>>>8&255,L.pending_buf[L.d_buf+2*L.last_lit+1]=255&z,L.pending_buf[L.l_buf+L.last_lit]=255&U,L.last_lit++,z===0?L.dyn_ltree[2*U]++:(L.matches++,z--,L.dyn_ltree[2*(E[U]+m+1)]++,L.dyn_dtree[2*ee(z)]++),L.last_lit===L.lit_bufsize-1},i._tr_align=function(L){we(L,2,3),te(L,V,O),function(z){z.bi_valid===16?(Ie(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)}(L)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(s){(function(o,a){if(!o.setImmediate){var l,d,h,m,g=1,y={},w=!1,v=o.document,I=Object.getPrototypeOf&&Object.getPrototypeOf(o);I=I&&I.setTimeout?I:o,l={}.toString.call(o.process)==="[object process]"?function(M){process.nextTick(function(){R(M)})}:function(){if(o.postMessage&&!o.importScripts){var M=!0,f=o.onmessage;return o.onmessage=function(){M=!1},o.postMessage("","*"),o.onmessage=f,M}}()?(m="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",V,!1):o.attachEvent("onmessage",V),function(M){o.postMessage(m+M,"*")}):o.MessageChannel?((h=new MessageChannel).port1.onmessage=function(M){R(M.data)},function(M){h.port2.postMessage(M)}):v&&"onreadystatechange"in v.createElement("script")?(d=v.documentElement,function(M){var f=v.createElement("script");f.onreadystatechange=function(){R(M),f.onreadystatechange=null,d.removeChild(f),f=null},d.appendChild(f)}):function(M){setTimeout(R,0,M)},I.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var f=new Array(arguments.length-1),G=0;G<f.length;G++)f[G]=arguments[G+1];var N={callback:M,args:f};return y[g]=N,l(g),g++},I.clearImmediate=C}function C(M){delete y[M]}function R(M){if(w)setTimeout(R,0,M);else{var f=y[M];if(f){w=!0;try{(function(G){var N=G.callback,A=G.args;switch(A.length){case 0:N();break;case 1:N(A[0]);break;case 2:N(A[0],A[1]);break;case 3:N(A[0],A[1],A[2]);break;default:N.apply(a,A)}})(f)}finally{C(M),w=!1}}}}function V(M){M.source===o&&typeof M.data=="string"&&M.data.indexOf(m)===0&&R(+M.data.slice(m.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Yb);var y9=Yb.exports;const b9=v9(y9),_9={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},w9={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},E9={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},I9={class:"export-tabs tabs"},T9={class:"export-content"},C9={class:"export-options",style:{"margin-bottom":"20px"}},x9={class:"form-group"},k9={class:"export-meta"},S9={class:"meta-item"},A9={class:"meta-item"},R9={class:"meta-item"},P9={class:"export-options",style:{"margin-bottom":"20px"}},N9={class:"form-group"},D9={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},O9={class:"coming-soon"},M9={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},L9={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},V9={key:1,class:"export-success"},$9={__name:"ExportModal",setup(t){const e=In(),n=pn(),r=Ds(),i=Se(()=>n.getProject(e.projectId)),s=ge("json"),o=ge(""),a=ge(""),l=ge(!0);Bt(i,w=>{w&&!a.value&&(a.value=w.name||"presentation")},{immediate:!0});function d(){const w=n.exportProject(e.projectId);if(!w)return;const v=new Blob([w],{type:"application/json"}),I=URL.createObjectURL(v),C=document.createElement("a");C.href=I,C.download=`${a.value||"project"}.mediasurf.json`,C.click(),URL.revokeObjectURL(I),o.value="success",setTimeout(()=>o.value="",3e3)}function h(w,v="presentation"){return String(w).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||v}function m(w,v){return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
body {
  min-height: 100vh;
  font-family: ${(w==null?void 0:w.fontFamily)||"Inter, sans-serif"};
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
  color: ${(w==null?void 0:w.textColor)||"#1a1a2e"};
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
  display: ${(v==null?void 0:v.showNavControls)===!1?"none":"flex"};
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
  display: ${(v==null?void 0:v.showNavControls)===!1?"none":"flex"};
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
  background: ${(w==null?void 0:w.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(v==null?void 0:v.showProgress)===!1?"none":"block"};
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
`}function g(){return`
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
`}async function y(){var Y,ae,J;const w=i.value;if(!w)return;o.value="processing";const v=new b9,I=v.folder("assets");let C=0;async function R(ce,ie="media"){if((!ce||ce.startsWith("data:")||ce.startsWith("http://localhost")||ce.startsWith("blob:"))&&ce.startsWith("data:"))return ce;try{const re=await(await fetch(ce)).blob();let ee="bin";const Ie=re.type;if(Ie.includes("image/png")?ee="png":Ie.includes("image/jpeg")?ee="jpg":Ie.includes("image/gif")?ee="gif":Ie.includes("image/svg")?ee="svg":Ie.includes("image/webp")?ee="webp":Ie.includes("video/mp4")?ee="mp4":Ie.includes("audio/mpeg")&&(ee="mp3"),ee==="bin"){const te=ce.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);te&&(ee=te[1])}C++;const we=`${ie}_${C}.${ee}`;return I.file(we,re),`assets/${we}`}catch(ye){return console.warn("Could not fetch asset:",ce,ye),ce}}const V=JSON.parse(JSON.stringify([...w.slides||[]])).sort((ce,ie)=>(ce.order??0)-(ie.order??0));if(l.value)for(const ce of V){ce.backgroundType==="image"&&ce.backgroundImage&&(ce.backgroundImage=await R(ce.backgroundImage,"bg"));for(const ie of ce.elements||[])ie.type==="image"&&((Y=ie.content)!=null&&Y.src)&&(ie.content.src=await R(ie.content.src,"img")),ie.type==="video"&&((ae=ie.content)!=null&&ae.src)&&!ie.content.src.includes("youtube")&&!ie.content.src.includes("youtu.be")&&(ie.content.src=await R(ie.content.src,"vid")),ie.type==="audio"&&((J=ie.content)!=null&&J.src)&&(ie.content.src=await R(ie.content.src,"aud"))}const M=h(a.value||w.name||"presentation"),f={name:w.name,theme:w.theme||{},settings:w.settings||{},slides:V},G=JSON.stringify(f).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),N=m(w.theme,w.settings),A=g(),x=`<script id="lf-data" type="application/json">${G}<\/script>`,O=`<!DOCTYPE html>
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
${x}
<script src="script.js"><\/script>
</body>
</html>`;v.file("index.html",O),v.file("style.css",N),v.file("script.js",A);const _=await v.generateAsync({type:"blob"}),T=URL.createObjectURL(_),E=document.createElement("a");E.href=T,E.download=`${M}.zip`,E.click(),URL.revokeObjectURL(T),o.value="success",setTimeout(()=>o.value="",3e3)}return(w,v)=>(W(),at(Os,{title:"Export Project",size:"md",onClose:v[9]||(v[9]=I=>be(e).showExportModal=!1)},{footer:bt(()=>[u("button",{class:"btn btn-secondary",onClick:v[8]||(v[8]=I=>be(e).showExportModal=!1)},"Close")]),default:bt(()=>{var I,C,R,V,M;return[be(r).user?(W(),Q(Oe,{key:1},[u("div",I9,[u("button",{class:Fe(["tab-btn",s.value==="json"&&"active"]),onClick:v[2]||(v[2]=f=>s.value="json")},"JSON Project",2),u("button",{class:Fe(["tab-btn",s.value==="html"&&"active"]),onClick:v[3]||(v[3]=f=>s.value="html")},"HTML Package",2),u("button",{class:Fe(["tab-btn",s.value==="scorm"&&"active"]),onClick:v[4]||(v[4]=f=>s.value="scorm")},"SCORM",2)]),u("div",T9,[s.value==="json"?(W(),Q(Oe,{key:0},[v[20]||(v[20]=u("div",{class:"export-info"},[u("div",{class:"export-icon"},"📦"),u("div",null,[u("h4",null,"JSON Project File"),u("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),u("div",C9,[u("div",x9,[v[15]||(v[15]=u("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ht(u("input",{type:"text","onUpdate:modelValue":v[5]||(v[5]=f=>a.value=f),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Mt,a.value]])])]),u("div",k9,[u("div",S9,[v[16]||(v[16]=u("span",null,"Project",-1)),u("strong",null,ve((I=i.value)==null?void 0:I.name),1)]),u("div",A9,[v[17]||(v[17]=u("span",null,"Slides",-1)),u("strong",null,ve(((R=(C=i.value)==null?void 0:C.slides)==null?void 0:R.length)||0),1)]),u("div",R9,[v[18]||(v[18]=u("span",null,"Elements",-1)),u("strong",null,ve(((M=(V=i.value)==null?void 0:V.slides)==null?void 0:M.reduce((f,G)=>{var N;return f+(((N=G.elements)==null?void 0:N.length)||0)},0))||0),1)])]),u("button",{class:"btn btn-primary export-btn",onClick:d},[...v[19]||(v[19]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u("polyline",{points:"7 10 12 15 17 10"}),u("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ne(" Download JSON ",-1)])])],64)):s.value==="html"?(W(),Q(Oe,{key:1},[v[24]||(v[24]=u("div",{class:"export-info"},[u("div",{class:"export-icon"},"🌐"),u("div",null,[u("h4",null,"Standalone HTML Package"),u("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),u("div",P9,[u("div",N9,[v[21]||(v[21]=u("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ht(u("input",{type:"text","onUpdate:modelValue":v[6]||(v[6]=f=>a.value=f),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Mt,a.value]])]),u("label",D9,[ht(u("input",{type:"checkbox","onUpdate:modelValue":v[7]||(v[7]=f=>l.value=f)},null,512),[[Nv,l.value]]),v[22]||(v[22]=Ne(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),v[25]||(v[25]=u("div",{class:"export-features"},[u("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),u("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),u("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),u("div",{class:"feature-item"},"✓ Progress bar"),u("div",{class:"feature-item"},"✓ Responsive scaling"),u("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),u("button",{class:"btn btn-primary export-btn",onClick:y},[...v[23]||(v[23]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u("polyline",{points:"7 10 12 15 17 10"}),u("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ne(" Download HTML ",-1)])])],64)):s.value==="scorm"?(W(),Q(Oe,{key:2},[v[29]||(v[29]=u("div",{class:"export-info"},[u("div",{class:"export-icon"},"🎓"),u("div",null,[u("h4",null,"SCORM Package"),u("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),u("div",O9,[(W(),Q("svg",M9,[...v[26]||(v[26]=[u("circle",{cx:"12",cy:"12",r:"10"},null,-1),u("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),u("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),v[27]||(v[27]=u("h4",null,"Coming Soon",-1)),v[28]||(v[28]=u("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):Re("",!0),pt(vr,{name:"fade"},{default:bt(()=>[o.value==="processing"?(W(),Q("div",L9,[...v[30]||(v[30]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[u("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),Ne(" Generating package... Please wait. ",-1)])])):o.value==="success"?(W(),Q("div",V9,[...v[31]||(v[31]=[u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[u("polyline",{points:"20 6 9 17 4 12"})],-1),Ne(" Export successful! Check your downloads folder. ",-1)])])):Re("",!0)]),_:1})])],64)):(W(),Q("div",_9,[(W(),Q("svg",w9,[...v[10]||(v[10]=[u("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),u("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),v[13]||(v[13]=u("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),v[14]||(v[14]=u("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),u("div",E9,[u("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:v[0]||(v[0]=f=>be(r).loginWithGoogle())},[...v[11]||(v[11]=[u("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"12",cy:"12",r:"10"}),u("path",{d:"M12 8v8m-4-4h8"})],-1),Ne(" Continue with Google ",-1)])]),u("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:v[1]||(v[1]=f=>be(r).loginWithMicrosoft())},[...v[12]||(v[12]=[u("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("rect",{x:"3",y:"3",width:"7",height:"7"}),u("rect",{x:"14",y:"3",width:"7",height:"7"}),u("rect",{x:"14",y:"14",width:"7",height:"7"}),u("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),Ne(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},F9=St($9,[["__scopeId","data-v-1dc02f55"]]),U9={key:0,class:"editor-view"},z9={class:"editor-topbar"},B9={class:"topbar-left"},j9={class:"project-name-wrap"},q9=["value"],W9={class:"save-label"},H9={class:"topbar-center"},G9={key:0,class:"slide-position"},K9={class:"topbar-right"},Q9={class:"editor-body"},J9={class:"authoring-rail"},Y9=["onClick","data-tooltip"],X9={key:0,class:"rail-icon"},Z9={key:1,class:"rail-icon"},eL={key:2,class:"rail-icon"},tL={key:3,class:"rail-icon"},nL={key:4,class:"rail-icon"},rL={key:5,class:"rail-icon"},iL={key:6,class:"rail-icon"},sL={key:7,class:"rail-icon"},oL={key:8,class:"rail-icon"},aL={class:"right-panel"},lL={class:"panel-tabs"},cL=["onClick","data-tooltip"],uL={class:"tab-icon"},dL={class:"tab-label"},hL={class:"panel-content"},fL={key:1,class:"editor-not-found"},pL={__name:"EditorView",setup(t){const e=Dd(),n=Yl(),r=In(),i=pn(),s=Ds(),o=Se(()=>e.params.id),a=Se(()=>i.getProject(o.value)),l=Se(()=>{var ue;return[...((ue=a.value)==null?void 0:ue.slides)||[]].sort((K,X)=>K.order-X.order)}),d=ge(null),h=ge(!1),m=ge("deck"),{aiStore:g,showAIModal:y,aiMode:w,aiTopic:v,aiContext:I,aiProjectName:C,aiSlideCount:R,aiQuestionCount:V,aiDifficulty:M,aiQuestionType:f,aiCreationError:G,aiSubmitting:N,aiProjectNamePlaceholder:A,aiPrimaryActionLabel:x,openAICreationModal:P,createAIProject:O}=Kb({onRequireAuth:()=>n.push({name:"dashboard"})});let _=!1,T=null;Bt(()=>a.value,ue=>{if(ue){if(_){_=!1;return}T&&clearTimeout(T),T=setTimeout(()=>{r.pushHistory(ue)},600)}},{deep:!0}),Bt(()=>s.isAuthReady,ue=>{if(ue){if(!a.value){n.push({name:"dashboard"});return}r.setProject(o.value),l.value.length>0&&r.setCurrentSlide(l.value[0].id),r.pushHistory(a.value)}},{immediate:!0});const E=Se(()=>{const ue=a.value;return ue?`Saved ${new Date(ue.updatedAt).toLocaleTimeString()}`:""}),Y=Se(()=>{switch(r.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});d5({undo:()=>{if(r.canUndo()){const ue=r.undo();ue&&(_=!0,i.updateProject(o.value,ue))}},redo:()=>{if(r.canRedo()){const ue=r.redo();ue&&(_=!0,i.updateProject(o.value,ue))}},delete:()=>{r.selectedElementId&&(i.deleteElement(r.projectId,r.currentSlideId,r.selectedElementId),r.clearSelection())},escape:()=>{r.clearSelection(),r.setActiveTool("select")},copy:()=>{var K,X,me,oe;const ue=(oe=(me=(X=(K=a.value)==null?void 0:K.slides)==null?void 0:X.find(_e=>_e.id===r.currentSlideId))==null?void 0:me.elements)==null?void 0:oe.find(_e=>_e.id===r.selectedElementId);ue&&r.setClipboard(ue)},paste:()=>{if(r.clipboard&&r.currentSlideId){const ue=r.clipboard;i.addElement(r.projectId,r.currentSlideId,ue.type,{...ue,x:ue.x+20,y:ue.y+20,id:void 0})}},duplicate:()=>{if(r.selectedElementId){const ue=i.duplicateElement(r.projectId,r.currentSlideId,r.selectedElementId);ue&&r.selectElement(ue.id)}},zoomIn:()=>r.zoomIn(),zoomOut:()=>r.zoomOut(),zoomReset:()=>r.zoomReset(),toggleGrid:()=>r.toggleGrid(),nudge:(ue,K)=>{var me,oe,_e,F;if(!r.selectedElementId)return;const X=(F=(_e=(oe=(me=a.value)==null?void 0:me.slides)==null?void 0:oe.find(q=>q.id===r.currentSlideId))==null?void 0:_e.elements)==null?void 0:F.find(q=>q.id===r.selectedElementId);X&&i.updateElement(r.projectId,r.currentSlideId,r.selectedElementId,{x:X.x+ue,y:X.y+K})},selectAll:()=>{var K,X,me;(((me=(X=(K=a.value)==null?void 0:K.slides)==null?void 0:X.find(oe=>oe.id===r.currentSlideId))==null?void 0:me.elements)||[]).forEach((oe,_e)=>r.selectElement(oe.id,_e>0))}});function ae(){n.push({name:"dashboard"})}function J(){n.push({name:"preview",params:{id:o.value},query:{from:"editor"}})}function ce(ue="deck"){m.value=ue,h.value=!0}function ie(){h.value=!1,P(m.value)}function ye(ue,K="Image"){if(!r.projectId||!r.currentSlideId||!ue)return;const X=new Image;X.onload=()=>{const _e=Math.min(420/X.width,280/X.height,1),F=Math.max(120,Math.round(X.width*_e)),q=Math.max(80,Math.round(X.height*_e)),p=Math.max(24,Math.round((960-F)/2)),H=Math.max(24,Math.round((540-q)/2)),B=i.addElement(r.projectId,r.currentSlideId,"image",{x:p,y:H,width:F,height:q,content:{src:ue,alt:K,objectFit:"cover"}});B&&(r.selectElement(B.id),r.setRightPanel("properties"),r.setActiveTool("select"))},X.src=ue}function re(ue){const[K]=Array.from(ue.target.files||[]);if(!K||!K.type.startsWith("image/"))return;const X=new FileReader;X.onload=()=>ye(String(X.result||""),K.name),X.readAsDataURL(K),ue.target.value=""}function ee(){var ue;(ue=d.value)==null||ue.click()}const Ie=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function we(ue){if(ue==="text"){r.setActiveTool("text");return}if(ue==="resources"){r.setActiveTool("image");return}if(ue==="interactive-elements"){r.setActiveTool("hotspot");return}if(ue==="interactive-questions"){r.setActiveTool("quiz");return}if(ue==="widgets"){r.setActiveTool("shape");return}if(ue==="insert"){ee();return}if(ue==="style"){r.setRightPanel("properties");return}if(ue==="background"){r.clearSelection(),r.setRightPanel("properties");return}ue==="pages"&&r.toggleSlidePanel()}function te(ue){return ue==="text"?["text","heading"].includes(r.activeTool):ue==="resources"?r.activeTool==="image":ue==="interactive-elements"?["hotspot","button"].includes(r.activeTool):ue==="interactive-questions"?r.activeTool==="quiz":ue==="widgets"?["shape","video","audio"].includes(r.activeTool):ue==="insert"?!1:ue==="style"||ue==="background"?r.rightPanelTab==="properties":ue==="pages"?r.showSlidePanel:!1}return(ue,K)=>a.value?(W(),Q("div",U9,[u("input",{ref_key:"imageInputRef",ref:d,type:"file",accept:"image/*",class:"sr-only",onChange:re},null,544),u("header",z9,[u("div",B9,[u("button",{class:"btn btn-ghost btn-sm back-btn",onClick:ae,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...K[14]||(K[14]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Ne(" Dashboard ",-1)])]),u("div",j9,[u("input",{value:a.value.name,class:"project-name-input",onChange:K[0]||(K[0]=X=>be(i).updateProject(o.value,{name:X.target.value}))},null,40,q9)]),u("span",W9,ve(E.value),1)]),u("div",H9,[be(r).currentSlideId?(W(),Q("span",G9," Slide "+ve(l.value.findIndex(X=>X.id===be(r).currentSlideId)+1)+" of "+ve(l.value.length),1)):Re("",!0)]),u("div",K9,[u("button",{class:Fe(["btn btn-ghost btn-sm",be(r).showAIPanel&&"active-btn"]),onClick:K[1]||(K[1]=X=>{be(r).showAIPanel=!be(r).showAIPanel,be(r).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...K[15]||(K[15]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Ne(" AI ",-1)])],2),u("button",{class:"btn btn-ghost btn-sm",onClick:K[2]||(K[2]=X=>{be(r).showThemeManager=!be(r).showThemeManager,be(r).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...K[16]||(K[16]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"12",cy:"12",r:"10"}),u("path",{d:"M12 8v4m0 4h.01"})],-1),Ne(" Theme ",-1)])]),u("button",{class:"btn btn-secondary btn-sm",onClick:J,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...K[17]||(K[17]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),Ne(" Preview ",-1)])]),u("button",{class:"btn btn-primary btn-sm",onClick:K[3]||(K[3]=X=>be(r).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...K[18]||(K[18]=[u("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u("polyline",{points:"7 10 12 15 17 10"}),u("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ne(" Export ",-1)])])])]),pt(iO,{onOpenAiProject:ce}),u("div",Q9,[u("aside",J9,[(W(),Q(Oe,null,it(Ie,X=>u("button",{key:X.id,class:Fe(["rail-option",te(X.id)&&"active"]),onClick:me=>we(X.id),"data-tooltip":X.label,"data-tooltip-position":"right"},[X.id==="text"?(W(),Q("span",X9,"T")):X.id==="resources"?(W(),Q("span",Z9,[...K[19]||(K[19]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u("polyline",{points:"21 15 16 10 5 21"})],-1)])])):X.id==="interactive-elements"?(W(),Q("span",eL,[...K[20]||(K[20]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):X.id==="interactive-questions"?(W(),Q("span",tL,[...K[21]||(K[21]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("circle",{cx:"12",cy:"12",r:"10"}),u("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):X.id==="widgets"?(W(),Q("span",nL,[...K[22]||(K[22]=[un('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1e121fb8><rect x="3" y="3" width="7" height="7" data-v-1e121fb8></rect><rect x="14" y="3" width="7" height="7" data-v-1e121fb8></rect><rect x="14" y="14" width="7" height="7" data-v-1e121fb8></rect><rect x="3" y="14" width="7" height="7" data-v-1e121fb8></rect></svg>',1)])])):X.id==="insert"?(W(),Q("span",rL,[...K[23]||(K[23]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):X.id==="style"?(W(),Q("span",iL,[...K[24]||(K[24]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):X.id==="background"?(W(),Q("span",sL,[...K[25]||(K[25]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),u("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):X.id==="pages"?(W(),Q("span",oL,[...K[26]||(K[26]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),u("polyline",{points:"13 2 13 9 20 9"})],-1)])])):Re("",!0),Ne(" "+ve(X.label),1)],10,Y9)),64))]),pt(vr,{name:"side-panel-slide"},{default:bt(()=>[be(r).showSlidePanel?(W(),at(E5,{key:0})):Re("",!0)]),_:1}),pt(eM),u("aside",aL,[u("div",lL,[(W(),Q(Oe,null,it([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],X=>u("button",{key:X.id,class:Fe(["panel-tab",be(r).rightPanelTab===X.id&&"active"]),onClick:me=>be(r).setRightPanel(X.id),"data-tooltip":`Open ${X.label}`,"data-tooltip-position":"bottom"},[u("span",uL,ve(X.icon),1),u("span",dL,ve(X.label),1)],10,cL)),64))]),u("div",hL,[pt(vr,{name:"editor-panel-switch",mode:"out-in"},{default:bt(()=>[(W(),Q("div",{key:Y.value,class:"panel-content-view"},[be(r).rightPanelTab==="properties"?(W(),at(FD,{key:0})):be(r).rightPanelTab==="layers"?(W(),at(j5,{key:1})):be(r).rightPanelTab==="ai"?(W(),at(q8,{key:2})):be(r).rightPanelTab==="theme"?(W(),at(g9,{key:3})):Re("",!0)]))]),_:1})])])]),be(r).showExportModal?(W(),at(F9,{key:0})):Re("",!0),h.value?(W(),at(Jb,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:K[4]||(K[4]=X=>h.value=!1),onConfirm:ie})):Re("",!0),be(y)?(W(),at(Qb,{key:2,mode:be(w),topic:be(v),context:be(I),"project-name":be(C),"slide-count":be(R),"question-count":be(V),difficulty:be(M),"question-type":be(f),"project-name-placeholder":be(A),"primary-action-label":be(x),"creation-error":be(G),"is-submitting":be(N),"is-generating":be(g).isGenerating,"has-api-key":!!be(g).apiKey,onClose:K[5]||(K[5]=X=>y.value=!1),onCreate:be(O),"onUpdate:mode":K[6]||(K[6]=X=>w.value=X),"onUpdate:topic":K[7]||(K[7]=X=>v.value=X),"onUpdate:context":K[8]||(K[8]=X=>I.value=X),"onUpdate:projectName":K[9]||(K[9]=X=>C.value=X),"onUpdate:slideCount":K[10]||(K[10]=X=>R.value=X),"onUpdate:questionCount":K[11]||(K[11]=X=>V.value=X),"onUpdate:difficulty":K[12]||(K[12]=X=>M.value=X),"onUpdate:questionType":K[13]||(K[13]=X=>f.value=X)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):Re("",!0)])):(W(),Q("div",fL,[K[27]||(K[27]=u("h2",null,"Project not found",-1)),K[28]||(K[28]=u("p",null,"This project may have been deleted or the link is invalid.",-1)),u("button",{class:"btn btn-primary",onClick:ae},"Go to Dashboard")]))}},mL=St(pL,[["__scopeId","data-v-1e121fb8"]]),gL={key:0,class:"preview-progress-track"},vL=["src","alt"],yL={key:2,style:{width:"100%",height:"100%"}},bL=["viewBox"],_L=["points","fill","stroke","stroke-width"],wL=["points","fill","stroke","stroke-width"],EL={key:3,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},IL={key:4,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",position:"relative"}},TL=["onClick"],CL={key:0,class:"hotspot-popup",style:{position:"absolute",left:"60px",top:"0",background:"#fff",color:"#111",borderRadius:"8px",padding:"12px 16px",minWidth:"160px",maxWidth:"220px",boxShadow:"0 8px 24px rgba(0,0,0,.3)",zIndex:10}},xL={style:{display:"block","margin-bottom":"4px","font-size":"14px"}},kL={style:{"font-size":"13px",margin:"0","line-height":"1.5"}},SL={key:5,style:{width:"100%",height:"100%",background:"#000","border-radius":"4px",overflow:"hidden"}},AL=["src"],RL=["src"],PL={key:2,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#666","font-size":"13px"}},NL={key:6,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column",gap:"8px",padding:"8px","box-sizing":"border-box"}},DL={style:{"font-size":"12px",color:"#aaa"}},OL=["src"],ML={key:7,style:{width:"100%",height:"100%",padding:"16px","box-sizing":"border-box",background:"rgba(0,0,0,.4)","border-radius":"6px",overflow:"auto"}},LL={style:{margin:"0 0 12px","font-size":"15px",color:"#fff"}},VL={style:{display:"flex","flex-direction":"column",gap:"8px"}},$L=["onClick"],FL={key:0,style:{"margin-top":"12px"}},UL=["onClick","disabled"],zL={key:1,style:{"margin-top":"12px"}},BL={key:0,style:{"font-size":"12px",color:"#ccc",margin:"0 0 8px"}},jL=["onClick"],qL={class:"preview-ui"},WL={class:"preview-topbar"},HL={class:"preview-title"},GL={class:"slide-counter"},KL=["disabled"],QL=["disabled"],JL={key:2,class:"dot-nav"},YL=["onClick"],XL=960,ZL=540,eV={__name:"PreviewView",setup(t){const e=Dd(),n=Yl(),r=pn(),i=Ds(),s=Se(()=>e.params.id),o=Se(()=>r.getProject(s.value)),a=Se(()=>{var oe;return[...((oe=o.value)==null?void 0:oe.slides)||[]].sort((_e,F)=>_e.order-F.order)}),l=Se(()=>{var oe;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,...((oe=o.value)==null?void 0:oe.settings)||{}}}),d=ge(0),h=ge(null),m=ge(1),g=ge(!0);let y=null,w=null;const v=Se(()=>a.value[d.value]||null),I=Se(()=>typeof e.query.from=="string"?e.query.from:"dashboard"),C=Se(()=>I.value==="editor"?"Back to Editor":"Back to Dashboard"),R=Se(()=>{var oe;return[...((oe=v.value)==null?void 0:oe.elements)||[]].sort((_e,F)=>(_e.zIndex||0)-(F.zIndex||0))}),V=Se(()=>{var oe;switch((oe=v.value)==null?void 0:oe.transition){case"fade":return"slide-fade";case"slide":return"slide-shift";case"zoom":return"slide-zoom";case"flip":return"slide-flip";default:return"slide-fade"}}),M=Se(()=>{var oe;return Math.max(0,Number(((oe=v.value)==null?void 0:oe.duration)||0))*1e3}),f=Se(()=>l.value.autoPlay&&M.value>0&&a.value.length>1),G=Se(()=>a.value.length?(d.value+1)/a.value.length*100:0);function N(){if(!h.value)return;const oe=h.value.clientWidth,_e=h.value.clientHeight;m.value=Math.min(oe/XL,_e/ZL,1.5)}function A(){if(d.value<a.value.length-1){d.value++;return}l.value.loop&&(d.value=0)}function x(){if(d.value>0){d.value--;return}l.value.loop&&(d.value=a.value.length-1)}function P(oe){d.value=oe}function O(oe){l.value.allowKeyboardNav!==!1&&((oe.key==="ArrowRight"||oe.key==="ArrowDown"||oe.key===" ")&&(oe.preventDefault(),A()),(oe.key==="ArrowLeft"||oe.key==="ArrowUp")&&(oe.preventDefault(),x())),oe.key==="Escape"&&E()}function _(){n.push({name:"editor",params:{id:s.value}})}function T(){n.push({name:"dashboard"})}function E(){if(I.value==="editor"){_();return}T()}function Y(){g.value=!0,clearTimeout(y),y=setTimeout(()=>{g.value=!1},3e3)}function ae(){clearTimeout(w),w=null}function J(){ae(),f.value&&(w=setTimeout(()=>{A()},M.value))}const ce=new ResizeObserver(N);Bt(()=>i.isAuthReady,oe=>{if(oe&&!o.value){n.push({name:"dashboard"});return}},{immediate:!0}),Yo(()=>{window.addEventListener("keydown",O),h.value&&(ce.observe(h.value),N()),Y(),J()}),Xo(()=>{window.removeEventListener("keydown",O),ce.disconnect(),clearTimeout(y),ae()}),Bt([d,a,M,f],()=>{J()},{deep:!0});function ie(oe){return oe?oe.backgroundType==="gradient"&&oe.backgroundGradient?{background:oe.backgroundGradient}:oe.backgroundType==="image"&&oe.backgroundImage?{backgroundImage:`url(${oe.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:oe.background||"#1a1a2e"}:{}}function ye(oe){return{position:"absolute",left:`${oe.x}px`,top:`${oe.y}px`,width:`${oe.width}px`,height:`${oe.height}px`,opacity:oe.opacity??1,transform:oe.rotation?`rotate(${oe.rotation}deg)`:void 0,overflow:"hidden",pointerEvents:["button","hotspot","quiz"].includes(oe.type)?"auto":"none"}}function re(oe){const _e=Array.isArray(oe.animations)?oe.animations[0]:null,F=(_e==null?void 0:_e.type)||(_e==null?void 0:_e.name);if(F)return F.toString().toLowerCase().replace(/\s+/g,"-");switch(oe.type){case"heading":return"fade-up-strong";case"text":return"fade-up";case"image":return"zoom-in";case"shape":return"soft-pop";case"button":return"pop-in";case"quiz":return"fade-up-strong";case"hotspot":return"pop-in";case"video":case"audio":return"fade-up";default:return"fade-up"}}function ee(oe,_e){const F=ye(oe),q=Array.isArray(oe.animations)?oe.animations[0]:null,p=(q==null?void 0:q.delay)!=null?Math.max(0,Number(q.delay)||0)*1e3:Math.min(_e*90,720),H=(q==null?void 0:q.duration)!=null?Math.max(100,Number(q.duration)*1e3||640):oe.type==="heading"?720:oe.type==="image"?780:640;return{...F,"--enter-delay":`${p}ms`,"--enter-duration":`${H}ms`}}const Ie=ge({}),we=ge({});function te(oe,_e){we.value[oe]||(Ie.value[oe]=_e)}function ue(oe){Ie.value[oe.id]!==void 0&&(we.value[oe.id]=!0)}function K(oe){delete Ie.value[oe],delete we.value[oe]}const X=ge({});function me(oe){X.value[oe]=!X.value[oe]}return(oe,_e)=>{var F,q;return W(),Q("div",{class:"preview-root",onMousemove:Y,onClick:Ht(Y,["self"])},[_e[4]||(_e[4]=u("div",{class:"preview-orb preview-orb-left"},null,-1)),_e[5]||(_e[5]=u("div",{class:"preview-orb preview-orb-right"},null,-1)),_e[6]||(_e[6]=u("div",{class:"preview-grid"},null,-1)),l.value.showProgress!==!1?(W(),Q("div",gL,[u("div",{class:"preview-progress-bar",style:ze({width:`${G.value}%`,background:((q=(F=o.value)==null?void 0:F.theme)==null?void 0:q.primaryColor)||"#6c47ff"})},null,4)])):Re("",!0),u("div",{class:"canvas-bg",ref_key:"containerRef",ref:h},[pt(vr,{name:V.value,mode:"out-in"},{default:bt(()=>[v.value?(W(),Q("div",{class:"preview-stage",key:v.value.id},[u("div",{class:"slide-canvas",style:ze([ie(v.value),{transform:`scale(${m.value})`,transformOrigin:"center center"}])},[(W(!0),Q(Oe,null,it(R.value,(p,H)=>(W(),Q(Oe,{key:p.id},[p.visible!==!1?(W(),Q("div",{key:0,class:Fe(["preview-element",`motion-${re(p)}`]),style:ze(ee(p,H))},[p.type==="text"||p.type==="heading"?(W(),Q("div",{key:0,class:"el-text",style:ze({fontSize:p.content.fontSize+"px",color:p.content.color,fontFamily:p.content.fontFamily,fontWeight:p.content.bold||p.type==="heading"?"700":"400",fontStyle:p.content.italic?"italic":"normal",textDecoration:p.content.underline?"underline":"none",textAlign:p.content.align,lineHeight:p.content.lineHeight||1.4,letterSpacing:p.content.letterSpacing?p.content.letterSpacing+"px":void 0,padding:"4px",width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",wordBreak:"break-word"})},ve(p.content.text),5)):p.type==="image"?(W(),Q("img",{key:1,src:p.content.src,alt:p.content.alt,style:ze({width:"100%",height:"100%",objectFit:p.content.objectFit||"cover",borderRadius:p.content.borderRadius?p.content.borderRadius+"px":void 0})},null,12,vL)):p.type==="shape"?(W(),Q("div",yL,[p.content.shape==="rectangle"||p.content.shape==="circle"?(W(),Q("div",{key:0,style:ze({width:"100%",height:"100%",backgroundColor:p.content.fillColor,border:`${p.content.strokeWidth||0}px solid ${p.content.strokeColor||"transparent"}`,borderRadius:p.content.shape==="circle"?"50%":(p.content.borderRadius||0)+"px",boxSizing:"border-box"})},null,4)):(W(),Q("svg",{key:1,width:"100%",height:"100%",viewBox:`0 0 ${p.width} ${p.height}`,preserveAspectRatio:"xMidYMid meet"},[p.content.shape==="triangle"?(W(),Q("polygon",{key:0,points:`${p.width/2} 0 ${p.width} ${p.height} 0 ${p.height}`,fill:p.content.fillColor,stroke:p.content.strokeColor,"stroke-width":p.content.strokeWidth||0},null,8,_L)):Re("",!0),p.content.shape==="diamond"?(W(),Q("polygon",{key:1,points:`${p.width/2} 0 ${p.width} ${p.height/2} ${p.width/2} ${p.height} 0 ${p.height/2}`,fill:p.content.fillColor,stroke:p.content.strokeColor,"stroke-width":p.content.strokeWidth||0},null,8,wL)):Re("",!0)],8,bL))])):p.type==="button"?(W(),Q("div",EL,[u("button",{style:ze({padding:"8px 20px",borderRadius:"6px",fontWeight:600,fontSize:(p.content.fontSize||14)+"px",cursor:"pointer",border:"2px solid "+(p.content.backgroundColor||"#5865f2"),backgroundColor:p.content.variant==="outline"||p.content.variant==="ghost"?"transparent":p.content.backgroundColor||"#5865f2",color:p.content.variant==="outline"||p.content.variant==="ghost"?p.content.backgroundColor||"#5865f2":p.content.textColor||"#fff",fontFamily:p.content.fontFamily})},ve(p.content.label),5)])):p.type==="hotspot"?(W(),Q("div",IL,[u("button",{class:"hotspot-trigger",style:ze({width:"48px",height:"48px",borderRadius:"50%",backgroundColor:p.content.color||"#5865f2",border:"3px solid rgba(255,255,255,0.4)",color:"#fff",fontSize:"20px",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}),onClick:B=>me(p.id)},"+",12,TL),pt(vr,{name:"popup"},{default:bt(()=>[X.value[p.id]?(W(),Q("div",CL,[u("strong",xL,ve(p.content.title),1),u("p",kL,ve(p.content.body),1)])):Re("",!0)]),_:2},1024)])):p.type==="video"?(W(),Q("div",SL,[p.content.src&&(p.content.src.includes("youtube")||p.content.src.includes("vimeo"))?(W(),Q("iframe",{key:0,src:p.content.src,width:"100%",height:"100%",frameborder:"0",allowfullscreen:"",allow:"autoplay"},null,8,AL)):p.content.src?(W(),Q("video",{key:1,src:p.content.src,controls:"",style:{width:"100%",height:"100%","object-fit":"contain"}},null,8,RL)):(W(),Q("div",PL,"No video source"))])):p.type==="audio"?(W(),Q("div",NL,[_e[0]||(_e[0]=u("span",{style:{"font-size":"28px"}},"🎵",-1)),u("span",DL,ve(p.content.label||"Audio"),1),p.content.src?(W(),Q("audio",{key:0,src:p.content.src,controls:"",style:{width:"100%","max-width":"240px"}},null,8,OL)):Re("",!0)])):p.type==="quiz"?(W(),Q("div",ML,[u("h4",LL,ve(p.content.question),1),u("div",VL,[(W(!0),Q(Oe,null,it(p.content.options,(B,D)=>(W(),Q("button",{key:D,onClick:L=>te(p.id,D),style:ze({padding:"8px 12px",borderRadius:"6px",border:Ie.value[p.id]===D?"2px solid #5865f2":"1px solid rgba(255,255,255,.2)",background:we.value[p.id]?D===p.content.correctIndex?"rgba(87,242,135,.2)":Ie.value[p.id]===D?"rgba(237,66,69,.2)":"rgba(255,255,255,.05)":Ie.value[p.id]===D?"rgba(88,101,242,.3)":"rgba(255,255,255,.05)",color:"#fff",textAlign:"left",cursor:we.value[p.id]?"default":"pointer",fontSize:"13px",fontFamily:"inherit"})},ve(B),13,$L))),128))]),we.value[p.id]?(W(),Q("div",zL,[u("p",{style:ze({color:Ie.value[p.id]===p.content.correctIndex?"#57f287":"#ed4245",fontWeight:600,fontSize:"13px",margin:"0 0 4px"})},ve(Ie.value[p.id]===p.content.correctIndex?"✓ Correct!":"✗ Incorrect"),5),p.content.explanation?(W(),Q("p",BL,ve(p.content.explanation),1)):Re("",!0),u("button",{onClick:B=>K(p.id),style:{padding:"4px 12px",background:"transparent",border:"1px solid rgba(255,255,255,.3)","border-radius":"4px",color:"#ccc","font-size":"12px",cursor:"pointer","font-family":"inherit"}},"Try Again",8,jL)])):(W(),Q("div",FL,[u("button",{onClick:B=>ue(p),disabled:Ie.value[p.id]===void 0,style:{padding:"6px 16px",background:"#5865f2",border:"none","border-radius":"6px",color:"#fff","font-size":"13px",cursor:"pointer","font-family":"inherit"}},"Submit",8,UL)]))])):Re("",!0)],6)):Re("",!0)],64))),128))],4)])):Re("",!0)]),_:1},8,["name"])],512),pt(vr,{name:"ui-fade"},{default:bt(()=>{var p;return[ht(u("div",qL,[u("div",WL,[u("button",{class:"ui-btn",onClick:E},[_e[1]||(_e[1]=u("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[u("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1)),Ne(" "+ve(C.value),1)]),u("span",HL,ve((p=o.value)==null?void 0:p.name),1),u("span",GL,ve(d.value+1)+" / "+ve(a.value.length),1)]),l.value.showNavControls!==!1?(W(),Q("button",{key:0,class:"nav-btn nav-btn-left",onClick:x,disabled:!l.value.loop&&d.value===0},[..._e[2]||(_e[2]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[u("path",{d:"M15 18l-6-6 6-6"})],-1)])],8,KL)):Re("",!0),l.value.showNavControls!==!1?(W(),Q("button",{key:1,class:"nav-btn nav-btn-right",onClick:A,disabled:!l.value.loop&&d.value===a.value.length-1},[..._e[3]||(_e[3]=[u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[u("path",{d:"M9 18l6-6-6-6"})],-1)])],8,QL)):Re("",!0),l.value.showNavControls!==!1?(W(),Q("div",JL,[(W(!0),Q(Oe,null,it(a.value,(H,B)=>(W(),Q("button",{key:H.id,class:Fe(["dot",B===d.value&&"active"]),onClick:D=>P(B)},null,10,YL))),128))])):Re("",!0)],512),[[_w,g.value]])]}),_:1})],32)}}},tV=St(eV,[["__scopeId","data-v-715ec703"]]),nV=[{path:"/",name:"dashboard",component:u5},{path:"/editor/:id",name:"editor",component:mL,props:!0},{path:"/preview/:id",name:"preview",component:tV,props:!0}],rV=eE({history:D2(),routes:nV}),$h=Uw(nE);$h.use(jw());$h.use(rV);$h.mount("#app");
