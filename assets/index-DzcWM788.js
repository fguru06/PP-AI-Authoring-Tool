(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function od(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ot={},ts=[],Wn=()=>{},ug=()=>!1,xl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ad=t=>t.startsWith("onUpdate:"),Ot=Object.assign,ld=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cb=Object.prototype.hasOwnProperty,nt=(t,e)=>cb.call(t,e),Oe=Array.isArray,ns=t=>Uo(t)==="[object Map]",bs=t=>Uo(t)==="[object Set]",gf=t=>Uo(t)==="[object Date]",Ue=t=>typeof t=="function",gt=t=>typeof t=="string",Rn=t=>typeof t=="symbol",it=t=>t!==null&&typeof t=="object",dg=t=>(it(t)||Ue(t))&&Ue(t.then)&&Ue(t.catch),hg=Object.prototype.toString,Uo=t=>hg.call(t),ub=t=>Uo(t).slice(8,-1),fg=t=>Uo(t)==="[object Object]",Sl=t=>gt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=od(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},db=/-\w/g,wn=Al(t=>t.replace(db,e=>e.slice(1).toUpperCase())),hb=/\B([A-Z])/g,li=Al(t=>t.replace(hb,"-$1").toLowerCase()),Rl=Al(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pc=Al(t=>t?`on${Rl(t)}`:""),Gr=(t,e)=>!Object.is(t,e),Oa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},pg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fb=t=>{const e=gt(t)?Number(t):NaN;return isNaN(e)?t:e};let vf;const Nl=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $e(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=gt(r)?vb(r):$e(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(gt(t)||it(t))return t}const pb=/;(?![^(]*\))/g,mb=/:([^]+)/,gb=/\/\*[^]*?\*\//g;function vb(t){const e={};return t.replace(gb,"").split(pb).forEach(n=>{if(n){const r=n.split(mb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fe(t){let e="";if(gt(t))e=t;else if(Oe(t))for(let n=0;n<t.length;n++){const r=Fe(t[n]);r&&(e+=r+" ")}else if(it(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_b=od(yb);function mg(t){return!!t||t===""}function bb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ws(t[r],e[r]);return n}function ws(t,e){if(t===e)return!0;let n=gf(t),r=gf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Rn(t),r=Rn(e),n||r)return t===e;if(n=Oe(t),r=Oe(e),n||r)return n&&r?bb(t,e):!1;if(n=it(t),r=it(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ws(t[o],e[o]))return!1}}return String(t)===String(e)}function cd(t,e){return t.findIndex(n=>ws(n,e))}const gg=t=>!!(t&&t.__v_isRef===!0),fe=t=>gt(t)?t:t==null?"":Oe(t)||it(t)&&(t.toString===hg||!Ue(t.toString))?gg(t)?fe(t.value):JSON.stringify(t,vg,2):String(t),vg=(t,e)=>gg(e)?vg(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Nc(r,s)+" =>"]=i,n),{})}:bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Nc(n))}:Rn(e)?Nc(e):it(e)&&!Oe(e)&&!fg(e)?String(e):e,Nc=(t,e="")=>{var n;return Rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class yg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function _g(t){return new yg(t)}function bg(){return Wt}function wb(t,e=!1){Wt&&Wt.cleanups.push(t)}let at;const Oc=new WeakSet;class wg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oc.has(this)&&(Oc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yf(this),Tg(this);const e=at,n=xn;at=this,xn=!0;try{return this.fn()}finally{Cg(this),at=e,xn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hd(e);this.deps=this.depsTail=void 0,yf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hu(this)&&this.run()}get dirty(){return hu(this)}}let Eg=0,ro,io;function Ig(t,e=!1){if(t.flags|=8,e){t.next=io,io=t;return}t.next=ro,ro=t}function ud(){Eg++}function dd(){if(--Eg>0)return;if(io){let e=io;for(io=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ro;){let e=ro;for(ro=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Tg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cg(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),hd(r),Eb(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function hu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bo)||(t.globalVersion=bo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!hu(t))))return;t.flags|=2;const e=t.dep,n=at,r=xn;at=t,xn=!0;try{Tg(t);const i=t.fn(t._value);(e.version===0||Gr(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{at=n,xn=r,Cg(t),t.flags&=-3}}function hd(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)hd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Eb(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let xn=!0;const xg=[];function mr(){xg.push(xn),xn=!1}function gr(){const t=xg.pop();xn=t===void 0?!0:t}function yf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=at;at=void 0;try{e()}finally{at=n}}}let bo=0;class Ib{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!at||!xn||at===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==at)n=this.activeLink=new Ib(at,this),at.deps?(n.prevDep=at.depsTail,at.depsTail.nextDep=n,at.depsTail=n):at.deps=at.depsTail=n,Sg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=at.depsTail,n.nextDep=void 0,at.depsTail.nextDep=n,at.depsTail=n,at.deps===n&&(at.deps=r)}return n}trigger(e){this.version++,bo++,this.notify(e)}notify(e){ud();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dd()}}}function Sg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ka=new WeakMap,Ai=Symbol(""),fu=Symbol(""),wo=Symbol("");function Gt(t,e,n){if(xn&&at){let r=Ka.get(t);r||Ka.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new fd),i.map=r,i.key=n),i.track()}}function ar(t,e,n,r,i,s){const o=Ka.get(t);if(!o){bo++;return}const a=l=>{l&&l.trigger()};if(ud(),e==="clear")o.forEach(a);else{const l=Oe(t),h=l&&Sl(n);if(l&&n==="length"){const f=Number(r);o.forEach((m,g)=>{(g==="length"||g===wo||!Rn(g)&&g>=f)&&a(m)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),h&&a(o.get(wo)),e){case"add":l?h&&a(o.get("length")):(a(o.get(Ai)),ns(t)&&a(o.get(fu)));break;case"delete":l||(a(o.get(Ai)),ns(t)&&a(o.get(fu)));break;case"set":ns(t)&&a(o.get(Ai));break}}dd()}function Tb(t,e){const n=Ka.get(t);return n&&n.get(e)}function Gi(t){const e=Qe(t);return e===t?e:(Gt(e,"iterate",wo),hn(t)?e:e.map(Pn))}function Ol(t){return Gt(t=Qe(t),"iterate",wo),t}function $r(t,e){return vr(t)?ds(hr(t)?Pn(e):e):Pn(e)}const Cb={__proto__:null,[Symbol.iterator](){return Dc(this,Symbol.iterator,t=>$r(this,t))},concat(...t){return Gi(this).concat(...t.map(e=>Oe(e)?Gi(e):e))},entries(){return Dc(this,"entries",t=>(t[1]=$r(this,t[1]),t))},every(t,e){return tr(this,"every",t,e,void 0,arguments)},filter(t,e){return tr(this,"filter",t,e,n=>n.map(r=>$r(this,r)),arguments)},find(t,e){return tr(this,"find",t,e,n=>$r(this,n),arguments)},findIndex(t,e){return tr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return tr(this,"findLast",t,e,n=>$r(this,n),arguments)},findLastIndex(t,e){return tr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return tr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Mc(this,"includes",t)},indexOf(...t){return Mc(this,"indexOf",t)},join(t){return Gi(this).join(t)},lastIndexOf(...t){return Mc(this,"lastIndexOf",t)},map(t,e){return tr(this,"map",t,e,void 0,arguments)},pop(){return zs(this,"pop")},push(...t){return zs(this,"push",t)},reduce(t,...e){return _f(this,"reduce",t,e)},reduceRight(t,...e){return _f(this,"reduceRight",t,e)},shift(){return zs(this,"shift")},some(t,e){return tr(this,"some",t,e,void 0,arguments)},splice(...t){return zs(this,"splice",t)},toReversed(){return Gi(this).toReversed()},toSorted(t){return Gi(this).toSorted(t)},toSpliced(...t){return Gi(this).toSpliced(...t)},unshift(...t){return zs(this,"unshift",t)},values(){return Dc(this,"values",t=>$r(this,t))}};function Dc(t,e,n){const r=Ol(t),i=r[e]();return r!==t&&!hn(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const kb=Array.prototype;function tr(t,e,n,r,i,s){const o=Ol(t),a=o!==t&&!hn(t),l=o[e];if(l!==kb[e]){const m=l.apply(t,s);return a?Pn(m):m}let h=n;o!==t&&(a?h=function(m,g){return n.call(this,$r(t,m),g,t)}:n.length>2&&(h=function(m,g){return n.call(this,m,g,t)}));const f=l.call(o,h,r);return a&&i?i(f):f}function _f(t,e,n,r){const i=Ol(t);let s=n;return i!==t&&(hn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,$r(t,a),l,t)}),i[e](s,...r)}function Mc(t,e,n){const r=Qe(t);Gt(r,"iterate",wo);const i=r[e](...n);return(i===-1||i===!1)&&Dl(n[0])?(n[0]=Qe(n[0]),r[e](...n)):i}function zs(t,e,n=[]){mr(),ud();const r=Qe(t)[e].apply(t,n);return dd(),gr(),r}const xb=od("__proto__,__v_isRef,__isVue"),Ag=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn));function Sb(t){Rn(t)||(t=String(t));const e=Qe(this);return Gt(e,"has",t),e.hasOwnProperty(t)}class Rg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Fb:Dg:s?Og:Ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Oe(e);if(!i){let l;if(o&&(l=Cb[n]))return l;if(n==="hasOwnProperty")return Sb}const a=Reflect.get(e,n,Et(e)?e:r);if((Rn(n)?Ag.has(n):xb(n))||(i||Gt(e,"get",n),s))return a;if(Et(a)){const l=o&&Sl(n)?a:a.value;return i&&it(l)?mu(l):l}return it(a)?i?mu(a):Bo(a):a}}class Pg extends Rg{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];const o=Oe(e)&&Sl(n);if(!this._isShallow){const h=vr(s);if(!hn(r)&&!vr(r)&&(s=Qe(s),r=Qe(r)),!o&&Et(s)&&!Et(r))return h||(s.value=r),!0}const a=o?Number(n)<e.length:nt(e,n),l=Reflect.set(e,n,r,Et(e)?e:i);return e===Qe(i)&&(a?Gr(r,s)&&ar(e,"set",n,r):ar(e,"add",n,r)),l}deleteProperty(e,n){const r=nt(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&ar(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Rn(n)||!Ag.has(n))&&Gt(e,"has",n),r}ownKeys(e){return Gt(e,"iterate",Oe(e)?"length":Ai),Reflect.ownKeys(e)}}class Ab extends Rg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Rb=new Pg,Pb=new Ab,Nb=new Pg(!0);const pu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function Ob(t,e,n){return function(...r){const i=this.__v_raw,s=Qe(i),o=ns(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=i[t](...r),f=n?pu:e?ds:Pn;return!e&&Gt(s,"iterate",l?fu:Ai),Ot(Object.create(h),{next(){const{value:m,done:g}=h.next();return g?{value:m,done:g}:{value:a?[f(m[0]),f(m[1])]:f(m),done:g}}})}}function _a(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Db(t,e){const n={get(i){const s=this.__v_raw,o=Qe(s),a=Qe(i);t||(Gr(i,a)&&Gt(o,"get",i),Gt(o,"get",a));const{has:l}=ya(o),h=e?pu:t?ds:Pn;if(l.call(o,i))return h(s.get(i));if(l.call(o,a))return h(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&Gt(Qe(i),"iterate",Ai),i.size},has(i){const s=this.__v_raw,o=Qe(s),a=Qe(i);return t||(Gr(i,a)&&Gt(o,"has",i),Gt(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=Qe(a),h=e?pu:t?ds:Pn;return!t&&Gt(l,"iterate",Ai),a.forEach((f,m)=>i.call(s,h(f),h(m),o))}};return Ot(n,t?{add:_a("add"),set:_a("set"),delete:_a("delete"),clear:_a("clear")}:{add(i){!e&&!hn(i)&&!vr(i)&&(i=Qe(i));const s=Qe(this);return ya(s).has.call(s,i)||(s.add(i),ar(s,"add",i,i)),this},set(i,s){!e&&!hn(s)&&!vr(s)&&(s=Qe(s));const o=Qe(this),{has:a,get:l}=ya(o);let h=a.call(o,i);h||(i=Qe(i),h=a.call(o,i));const f=l.call(o,i);return o.set(i,s),h?Gr(s,f)&&ar(o,"set",i,s):ar(o,"add",i,s),this},delete(i){const s=Qe(this),{has:o,get:a}=ya(s);let l=o.call(s,i);l||(i=Qe(i),l=o.call(s,i)),a&&a.call(s,i);const h=s.delete(i);return l&&ar(s,"delete",i,void 0),h},clear(){const i=Qe(this),s=i.size!==0,o=i.clear();return s&&ar(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ob(i,t,e)}),n}function pd(t,e){const n=Db(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(nt(n,i)&&i in r?n:r,i,s)}const Mb={get:pd(!1,!1)},Vb={get:pd(!1,!0)},Lb={get:pd(!0,!1)};const Ng=new WeakMap,Og=new WeakMap,Dg=new WeakMap,Fb=new WeakMap;function $b(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ub(t){return t.__v_skip||!Object.isExtensible(t)?0:$b(ub(t))}function Bo(t){return vr(t)?t:md(t,!1,Rb,Mb,Ng)}function Mg(t){return md(t,!1,Nb,Vb,Og)}function mu(t){return md(t,!0,Pb,Lb,Dg)}function md(t,e,n,r,i){if(!it(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Ub(t);if(s===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function hr(t){return vr(t)?hr(t.__v_raw):!!(t&&t.__v_isReactive)}function vr(t){return!!(t&&t.__v_isReadonly)}function hn(t){return!!(t&&t.__v_isShallow)}function Dl(t){return t?!!t.__v_raw:!1}function Qe(t){const e=t&&t.__v_raw;return e?Qe(e):t}function gd(t){return!nt(t,"__v_skip")&&Object.isExtensible(t)&&pg(t,"__v_skip",!0),t}const Pn=t=>it(t)?Bo(t):t,ds=t=>it(t)?mu(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function pe(t){return Vg(t,!1)}function Bb(t){return Vg(t,!0)}function Vg(t,e){return Et(t)?t:new zb(t,e)}class zb{constructor(e,n){this.dep=new fd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Qe(e),this._value=n?e:Pn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||hn(e)||vr(e);e=r?e:Qe(e),Gr(e,n)&&(this._rawValue=e,this._value=r?e:Pn(e),this.dep.trigger())}}function Ie(t){return Et(t)?t.value:t}const jb={get:(t,e,n)=>e==="__v_raw"?t:Ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Et(i)&&!Et(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Lg(t){return hr(t)?t:new Proxy(t,jb)}function qb(t){const e=Oe(t)?new Array(t.length):{};for(const n in t)e[n]=Hb(t,n);return e}class Wb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=Qe(e);let i=!0,s=e;if(!Oe(e)||!Sl(String(n)))do i=!Dl(s)||hn(s);while(i&&(s=s.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=Ie(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Et(this._raw[this._key])){const n=this._object[this._key];if(Et(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Tb(this._raw,this._key)}}function Hb(t,e,n){return new Wb(t,e,n)}class Gb{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new fd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&at!==this)return Ig(this,!0),!0}get value(){const e=this.dep.track();return kg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kb(t,e,n=!1){let r,i;return Ue(t)?r=t:(r=t.get,i=t.set),new Gb(r,i,n)}const ba={},Qa=new WeakMap;let Ei;function Qb(t,e=!1,n=Ei){if(n){let r=Qa.get(n);r||Qa.set(n,r=[]),r.push(t)}}function Jb(t,e,n=ot){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,h=M=>i?M:hn(M)||i===!1||i===0?lr(M,1):lr(M);let f,m,g,v,_=!1,u=!1;if(Et(t)?(m=()=>t.value,_=hn(t)):hr(t)?(m=()=>h(t),_=!0):Oe(t)?(u=!0,_=t.some(M=>hr(M)||hn(M)),m=()=>t.map(M=>{if(Et(M))return M.value;if(hr(M))return h(M);if(Ue(M))return l?l(M,2):M()})):Ue(t)?e?m=l?()=>l(t,2):t:m=()=>{if(g){mr();try{g()}finally{gr()}}const M=Ei;Ei=f;try{return l?l(t,3,[v]):t(v)}finally{Ei=M}}:m=Wn,e&&i){const M=m,F=i===!0?1/0:i;m=()=>lr(M(),F)}const w=bg(),C=()=>{f.stop(),w&&w.active&&ld(w.effects,f)};if(s&&e){const M=e;e=(...F)=>{M(...F),C()}}let R=u?new Array(t.length).fill(ba):ba;const V=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(e){const F=f.run();if(i||_||(u?F.some((z,k)=>Gr(z,R[k])):Gr(F,R))){g&&g();const z=Ei;Ei=f;try{const k=[F,R===ba?void 0:u&&R[0]===ba?[]:R,v];R=F,l?l(e,3,k):e(...k)}finally{Ei=z}}}else f.run()};return a&&a(V),f=new wg(m),f.scheduler=o?()=>o(V,!1):V,v=M=>Qb(M,!1,f),g=f.onStop=()=>{const M=Qa.get(f);if(M){if(l)l(M,4);else for(const F of M)F();Qa.delete(f)}},e?r?V(!0):R=f.run():o?o(V.bind(null,!0),!0):f.run(),C.pause=f.pause.bind(f),C.resume=f.resume.bind(f),C.stop=C,C}function lr(t,e=1/0,n){if(e<=0||!it(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Et(t))lr(t.value,e,n);else if(Oe(t))for(let r=0;r<t.length;r++)lr(t[r],e,n);else if(bs(t)||ns(t))t.forEach(r=>{lr(r,e,n)});else if(fg(t)){for(const r in t)lr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&lr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zo(t,e,n,r){try{return r?t(...r):t()}catch(i){Ml(i,e,n)}}function Nn(t,e,n,r){if(Ue(t)){const i=zo(t,e,n,r);return i&&dg(i)&&i.catch(s=>{Ml(s,e,n)}),i}if(Oe(t)){const i=[];for(let s=0;s<t.length;s++)i.push(Nn(t[s],e,n,r));return i}}function Ml(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ot;if(e){let a=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let m=0;m<f.length;m++)if(f[m](t,l,h)===!1)return}a=a.parent}if(s){mr(),zo(s,null,10,[t,l,h]),gr();return}}Yb(t,n,i,r,o)}function Yb(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const tn=[];let Bn=-1;const rs=[];let Ur=null,Qi=0;const Fg=Promise.resolve();let Ja=null;function jo(t){const e=Ja||Fg;return t?e.then(this?t.bind(this):t):e}function Xb(t){let e=Bn+1,n=tn.length;for(;e<n;){const r=e+n>>>1,i=tn[r],s=Eo(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function vd(t){if(!(t.flags&1)){const e=Eo(t),n=tn[tn.length-1];!n||!(t.flags&2)&&e>=Eo(n)?tn.push(t):tn.splice(Xb(e),0,t),t.flags|=1,$g()}}function $g(){Ja||(Ja=Fg.then(Bg))}function Zb(t){Oe(t)?rs.push(...t):Ur&&t.id===-1?Ur.splice(Qi+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),$g()}function bf(t,e,n=Bn+1){for(;n<tn.length;n++){const r=tn[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;tn.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ug(t){if(rs.length){const e=[...new Set(rs)].sort((n,r)=>Eo(n)-Eo(r));if(rs.length=0,Ur){Ur.push(...e);return}for(Ur=e,Qi=0;Qi<Ur.length;Qi++){const n=Ur[Qi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ur=null,Qi=0}}const Eo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Bg(t){try{for(Bn=0;Bn<tn.length;Bn++){const e=tn[Bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bn<tn.length;Bn++){const e=tn[Bn];e&&(e.flags&=-2)}Bn=-1,tn.length=0,Ug(),Ja=null,(tn.length||rs.length)&&Bg()}}let Bt=null,zg=null;function Ya(t){const e=Bt;return Bt=t,zg=t&&t.type.__scopeId||null,e}function kt(t,e=Bt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&el(-1);const s=Ya(e);let o;try{o=t(...i)}finally{Ya(s),r._d&&el(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function tt(t,e){if(Bt===null)return t;const n=Ul(Bt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=ot]=e[i];s&&(Ue(s)&&(s={mounted:s,updated:s}),s.deep&&lr(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function yi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(mr(),Nn(l,n,8,[t.el,a,t,e]),gr())}}function so(t,e){if(Jt){let n=Jt.provides;const r=Jt.parent&&Jt.parent.provides;r===n&&(n=Jt.provides=Object.create(r)),n[t]=e}}function fn(t,e,n=!1){const r=Id();if(r||Ri){let i=Ri?Ri._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ue(e)?e.call(r&&r.proxy):e}}function e0(){return!!(Id()||Ri)}const t0=Symbol.for("v-scx"),n0=()=>fn(t0);function Yt(t,e,n){return jg(t,e,n)}function jg(t,e,n=ot){const{immediate:r,deep:i,flush:s,once:o}=n,a=Ot({},n),l=e&&r||!e&&s!=="post";let h;if(ko){if(s==="sync"){const v=n0();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=Wn,v.resume=Wn,v.pause=Wn,v}}const f=Jt;a.call=(v,_,u)=>Nn(v,f,_,u);let m=!1;s==="post"?a.scheduler=v=>{qt(v,f&&f.suspense)}:s!=="sync"&&(m=!0,a.scheduler=(v,_)=>{_?v():vd(v)}),a.augmentJob=v=>{e&&(v.flags|=4),m&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const g=Jb(t,e,a);return ko&&(h?h.push(g):l&&g()),g}function r0(t,e,n){const r=this.proxy,i=gt(t)?t.includes(".")?qg(r,t):()=>r[t]:t.bind(r,r);let s;Ue(e)?s=e:(s=e.handler,n=e);const o=Ho(this),a=jg(i,s.bind(r),n);return o(),a}function qg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Wg=Symbol("_vte"),Hg=t=>t.__isTeleport,oo=t=>t&&(t.disabled||t.disabled===""),wf=t=>t&&(t.defer||t.defer===""),Ef=t=>typeof SVGElement<"u"&&t instanceof SVGElement,If=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,gu=(t,e)=>{const n=t&&t.to;return gt(n)?e?e(n):null:n},Gg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,h){const{mc:f,pc:m,pbc:g,o:{insert:v,querySelector:_,createText:u,createComment:w}}=h,C=oo(e.props);let{shapeFlag:R,children:V,dynamicChildren:M}=e;if(t==null){const F=e.el=u(""),z=e.anchor=u("");v(F,n,r),v(z,n,r);const k=(T,P)=>{R&16&&f(V,T,P,i,s,o,a,l)},E=()=>{const T=e.target=gu(e.props,_),P=vu(T,e,u,v);T&&(o!=="svg"&&Ef(T)?o="svg":o!=="mathml"&&If(T)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(T),C||(k(T,P),Da(e,!1)))};C&&(k(n,z),Da(e,!0)),wf(e.props)?(e.el.__isMounted=!1,qt(()=>{E(),delete e.el.__isMounted},s)):E()}else{if(wf(e.props)&&t.el.__isMounted===!1){qt(()=>{Gg.process(t,e,n,r,i,s,o,a,l,h)},s);return}e.el=t.el,e.targetStart=t.targetStart;const F=e.anchor=t.anchor,z=e.target=t.target,k=e.targetAnchor=t.targetAnchor,E=oo(t.props),T=E?n:z,P=E?F:k;if(o==="svg"||Ef(z)?o="svg":(o==="mathml"||If(z))&&(o="mathml"),M?(g(t.dynamicChildren,M,T,i,s,o,a),wd(t,e,!0)):l||m(t,e,T,P,i,s,o,a,!1),C)E?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):wa(e,n,F,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const O=e.target=gu(e.props,_);O&&wa(e,O,null,h,0)}else E&&wa(e,z,k,h,1);Da(e,C)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:h,targetAnchor:f,target:m,props:g}=t;if(m&&(i(h),i(f)),s&&i(l),o&16){const v=s||!oo(g);for(let _=0;_<a.length;_++){const u=a[_];r(u,e,n,v,!!u.dynamicChildren)}}},move:wa,hydrate:i0};function wa(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:h,props:f}=t,m=s===2;if(m&&r(o,e,n),(!m||oo(f))&&l&16)for(let g=0;g<h.length;g++)i(h[g],e,n,2);m&&r(a,e,n)}function i0(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:h,createText:f}},m){function g(w,C){let R=C;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")e.targetStart=R;else if(R.data==="teleport anchor"){e.targetAnchor=R,w._lpa=e.targetAnchor&&o(e.targetAnchor);break}}R=o(R)}}function v(w,C){C.anchor=m(o(w),C,a(w),n,r,i,s)}const _=e.target=gu(e.props,l),u=oo(e.props);if(_){const w=_._lpa||_.firstChild;e.shapeFlag&16&&(u?(v(t,e),g(_,w),e.targetAnchor||vu(_,e,f,h,a(t)===_?t:null)):(e.anchor=o(t),g(_,w),e.targetAnchor||vu(_,e,f,h),m(w&&o(w),e,_,n,r,i,s))),Da(e,u)}else u&&e.shapeFlag&16&&(v(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const yd=Gg;function Da(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function vu(t,e,n,r,i=null){const s=e.targetStart=n(""),o=e.targetAnchor=n("");return s[Wg]=o,t&&(r(s,t,i),r(o,t,i)),o}const zn=Symbol("_leaveCb"),js=Symbol("_enterCb");function s0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qo(()=>{t.isMounted=!0}),Wo(()=>{t.isUnmounting=!0}),t}const yn=[Function,Array],Kg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},Qg=t=>{const e=t.subTree;return e.component?Qg(e.component):e},o0={name:"BaseTransition",props:Kg,setup(t,{slots:e}){const n=Id(),r=s0();return()=>{const i=e.default&&Xg(e.default(),!0);if(!i||!i.length)return;const s=Jg(i),o=Qe(t),{mode:a}=o;if(r.isLeaving)return Vc(s);const l=Tf(s);if(!l)return Vc(s);let h=yu(l,o,r,n,m=>h=m);l.type!==Qt&&Io(l,h);let f=n.subTree&&Tf(n.subTree);if(f&&f.type!==Qt&&!Ti(f,l)&&Qg(n).type!==Qt){let m=yu(f,o,r,n);if(Io(f,m),a==="out-in"&&l.type!==Qt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete m.afterLeave,f=void 0},Vc(s);a==="in-out"&&l.type!==Qt?m.delayLeave=(g,v,_)=>{const u=Yg(r,f);u[String(f.key)]=f,g[zn]=()=>{v(),g[zn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{_(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function Jg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Qt){e=n;break}}return e}const a0=o0;function Yg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yu(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:m,onBeforeLeave:g,onLeave:v,onAfterLeave:_,onLeaveCancelled:u,onBeforeAppear:w,onAppear:C,onAfterAppear:R,onAppearCancelled:V}=e,M=String(t.key),F=Yg(n,t),z=(T,P)=>{T&&Nn(T,r,9,P)},k=(T,P)=>{const O=P[1];z(T,P),Oe(T)?T.every(b=>b.length<=1)&&O():T.length<=1&&O()},E={mode:o,persisted:a,beforeEnter(T){let P=l;if(!n.isMounted)if(s)P=w||l;else return;T[zn]&&T[zn](!0);const O=F[M];O&&Ti(t,O)&&O.el[zn]&&O.el[zn](),z(P,[T])},enter(T){if(F[M]===t)return;let P=h,O=f,b=m;if(!n.isMounted)if(s)P=C||h,O=R||f,b=V||m;else return;let S=!1;T[js]=Q=>{S||(S=!0,Q?z(b,[T]):z(O,[T]),E.delayedLeave&&E.delayedLeave(),T[js]=void 0)};const I=T[js].bind(null,!1);P?k(P,[T,I]):I()},leave(T,P){const O=String(t.key);if(T[js]&&T[js](!0),n.isUnmounting)return P();z(g,[T]);let b=!1;T[zn]=I=>{b||(b=!0,P(),I?z(u,[T]):z(_,[T]),T[zn]=void 0,F[O]===t&&delete F[O])};const S=T[zn].bind(null,!1);F[O]=t,v?k(v,[T,S]):S()},clone(T){const P=yu(T,e,n,r,i);return i&&i(P),P}};return E}function Vc(t){if(Vl(t))return t=Zr(t),t.children=null,t}function Tf(t){if(!Vl(t))return Hg(t.type)&&t.children?Jg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ue(n.default))return n.default()}}function Io(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Io(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xg(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ne?(o.patchFlag&128&&i++,r=r.concat(Xg(o.children,e,a))):(e||o.type!==Qt)&&r.push(a!=null?Zr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Zg(t,e){return Ue(t)?Ot({name:t.name},e,{setup:t}):t}function ev(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Cf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Xa=new WeakMap;function ao(t,e,n,r,i=!1){if(Oe(t)){t.forEach((u,w)=>ao(u,e&&(Oe(e)?e[w]:e),n,r,i));return}if(is(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ao(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?Ul(r.component):r.el,o=i?null:s,{i:a,r:l}=t,h=e&&e.r,f=a.refs===ot?a.refs={}:a.refs,m=a.setupState,g=Qe(m),v=m===ot?ug:u=>Cf(f,u)?!1:nt(g,u),_=(u,w)=>!(w&&Cf(f,w));if(h!=null&&h!==l){if(kf(e),gt(h))f[h]=null,v(h)&&(m[h]=null);else if(Et(h)){const u=e;_(h,u.k)&&(h.value=null),u.k&&(f[u.k]=null)}}if(Ue(l))zo(l,a,12,[o,f]);else{const u=gt(l),w=Et(l);if(u||w){const C=()=>{if(t.f){const R=u?v(l)?m[l]:f[l]:_()||!t.k?l.value:f[t.k];if(i)Oe(R)&&ld(R,s);else if(Oe(R))R.includes(s)||R.push(s);else if(u)f[l]=[s],v(l)&&(m[l]=f[l]);else{const V=[s];_(l,t.k)&&(l.value=V),t.k&&(f[t.k]=V)}}else u?(f[l]=o,v(l)&&(m[l]=o)):w&&(_(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const R=()=>{C(),Xa.delete(t)};R.id=-1,Xa.set(t,R),qt(R,n)}else kf(t),C()}}}function kf(t){const e=Xa.get(t);e&&(e.flags|=8,Xa.delete(t))}Nl().requestIdleCallback;Nl().cancelIdleCallback;const is=t=>!!t.type.__asyncLoader,Vl=t=>t.type.__isKeepAlive;function l0(t,e){tv(t,"a",e)}function c0(t,e){tv(t,"da",e)}function tv(t,e,n=Jt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ll(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Vl(i.parent.vnode)&&u0(r,e,n,i),i=i.parent}}function u0(t,e,n,r){const i=Ll(e,t,r,!0);nv(()=>{ld(r[e],i)},n)}function Ll(t,e,n=Jt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{mr();const a=Ho(n),l=Nn(e,n,t,o);return a(),gr(),l});return r?i.unshift(s):i.push(s),s}}const Ir=t=>(e,n=Jt)=>{(!ko||t==="sp")&&Ll(t,(...r)=>e(...r),n)},d0=Ir("bm"),qo=Ir("m"),h0=Ir("bu"),f0=Ir("u"),Wo=Ir("bum"),nv=Ir("um"),p0=Ir("sp"),m0=Ir("rtg"),g0=Ir("rtc");function v0(t,e=Jt){Ll("ec",t,e)}const y0="components",rv=Symbol.for("v-ndc");function iv(t){return gt(t)?_0(y0,t,!1)||t:t||rv}function _0(t,e,n=!0,r=!1){const i=Bt||Jt;if(i){const s=i.type;{const a=rw(s,!1);if(a&&(a===e||a===wn(e)||a===Rl(wn(e))))return s}const o=xf(i[t]||s[t],e)||xf(i.appContext[t],e);return!o&&r?s:o}}function xf(t,e){return t&&(t[e]||t[wn(e)]||t[Rl(wn(e))])}function Xe(t,e,n,r){let i;const s=n,o=Oe(t);if(o||gt(t)){const a=o&&hr(t);let l=!1,h=!1;a&&(l=!hn(t),h=vr(t),t=Ol(t)),i=new Array(t.length);for(let f=0,m=t.length;f<m;f++)i[f]=e(l?h?ds(Pn(t[f])):Pn(t[f]):t[f],f,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s)}else if(it(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,h=a.length;l<h;l++){const f=a[l];i[l]=e(t[f],f,l,s)}}else i=[];return i}function _u(t,e,n={},r,i){if(Bt.ce||Bt.parent&&is(Bt.parent)&&Bt.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),K(),Tt(Ne,null,[dt("slot",n,r)],h?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),K();const o=s&&sv(s(n)),a=n.key||o&&o.key,l=Tt(Ne,{key:(a&&!Rn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function sv(t){return t.some(e=>Co(e)?!(e.type===Qt||e.type===Ne&&!sv(e.children)):!0)?t:null}const bu=t=>t?Tv(t)?Ul(t):bu(t.parent):null,lo=Ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bu(t.parent),$root:t=>bu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>av(t),$forceUpdate:t=>t.f||(t.f=()=>{vd(t.update)}),$nextTick:t=>t.n||(t.n=jo.bind(t.proxy)),$watch:t=>r0.bind(t)}),Lc=(t,e)=>t!==ot&&!t.__isScriptSetup&&nt(t,e),b0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Lc(r,e))return o[e]=1,r[e];if(i!==ot&&nt(i,e))return o[e]=2,i[e];if(nt(s,e))return o[e]=3,s[e];if(n!==ot&&nt(n,e))return o[e]=4,n[e];wu&&(o[e]=0)}}const h=lo[e];let f,m;if(h)return e==="$attrs"&&Gt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ot&&nt(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,nt(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Lc(i,e)?(i[e]=n,!0):r!==ot&&nt(r,e)?(r[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(n[a]||t!==ot&&a[0]!=="$"&&nt(t,a)||Lc(e,a)||nt(s,a)||nt(r,a)||nt(lo,a)||nt(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sf(t){return Oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wu=!0;function w0(t){const e=av(t),n=t.proxy,r=t.ctx;wu=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:h,created:f,beforeMount:m,mounted:g,beforeUpdate:v,updated:_,activated:u,deactivated:w,beforeDestroy:C,beforeUnmount:R,destroyed:V,unmounted:M,render:F,renderTracked:z,renderTriggered:k,errorCaptured:E,serverPrefetch:T,expose:P,inheritAttrs:O,components:b,directives:S,filters:I}=e;if(h&&E0(h,r,null),o)for(const $ in o){const ue=o[$];Ue(ue)&&(r[$]=ue.bind(n))}if(i){const $=i.call(n,n);it($)&&(t.data=Bo($))}if(wu=!0,s)for(const $ in s){const ue=s[$],ne=Ue(ue)?ue.bind(n,n):Ue(ue.get)?ue.get.bind(n,n):Wn,_e=!Ue(ue)&&Ue(ue.set)?ue.set.bind(n):Wn,te=Ce({get:ne,set:_e});Object.defineProperty(r,$,{enumerable:!0,configurable:!0,get:()=>te.value,set:Z=>te.value=Z})}if(a)for(const $ in a)ov(a[$],r,n,$);if(l){const $=Ue(l)?l.call(n):l;Reflect.ownKeys($).forEach(ue=>{so(ue,$[ue])})}f&&Af(f,t,"c");function re($,ue){Oe(ue)?ue.forEach(ne=>$(ne.bind(n))):ue&&$(ue.bind(n))}if(re(d0,m),re(qo,g),re(h0,v),re(f0,_),re(l0,u),re(c0,w),re(v0,E),re(g0,z),re(m0,k),re(Wo,R),re(nv,M),re(p0,T),Oe(P))if(P.length){const $=t.exposed||(t.exposed={});P.forEach(ue=>{Object.defineProperty($,ue,{get:()=>n[ue],set:ne=>n[ue]=ne,enumerable:!0})})}else t.exposed||(t.exposed={});F&&t.render===Wn&&(t.render=F),O!=null&&(t.inheritAttrs=O),b&&(t.components=b),S&&(t.directives=S),T&&ev(t)}function E0(t,e,n=Wn){Oe(t)&&(t=Eu(t));for(const r in t){const i=t[r];let s;it(i)?"default"in i?s=fn(i.from||r,i.default,!0):s=fn(i.from||r):s=fn(i),Et(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Af(t,e,n){Nn(Oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ov(t,e,n,r){let i=r.includes(".")?qg(n,r):()=>n[r];if(gt(t)){const s=e[t];Ue(s)&&Yt(i,s)}else if(Ue(t))Yt(i,t.bind(n));else if(it(t))if(Oe(t))t.forEach(s=>ov(s,e,n,r));else{const s=Ue(t.handler)?t.handler.bind(n):e[t.handler];Ue(s)&&Yt(i,s,t)}}function av(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(h=>Za(l,h,o,!0)),Za(l,e,o)),it(e)&&s.set(e,l),l}function Za(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Za(t,s,n,!0),i&&i.forEach(o=>Za(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=I0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const I0={data:Rf,props:Pf,emits:Pf,methods:Ks,computed:Ks,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Ks,directives:Ks,watch:C0,provide:Rf,inject:T0};function Rf(t,e){return e?t?function(){return Ot(Ue(t)?t.call(this,this):t,Ue(e)?e.call(this,this):e)}:e:t}function T0(t,e){return Ks(Eu(t),Eu(e))}function Eu(t){if(Oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ks(t,e){return t?Ot(Object.create(null),t,e):e}function Pf(t,e){return t?Oe(t)&&Oe(e)?[...new Set([...t,...e])]:Ot(Object.create(null),Sf(t),Sf(e??{})):e}function C0(t,e){if(!t)return e;if(!e)return t;const n=Ot(Object.create(null),t);for(const r in e)n[r]=Zt(t[r],e[r]);return n}function lv(){return{app:null,config:{isNativeTag:ug,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k0=0;function x0(t,e){return function(r,i=null){Ue(r)||(r=Ot({},r)),i!=null&&!it(i)&&(i=null);const s=lv(),o=new WeakSet,a=[];let l=!1;const h=s.app={_uid:k0++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:sw,get config(){return s.config},set config(f){},use(f,...m){return o.has(f)||(f&&Ue(f.install)?(o.add(f),f.install(h,...m)):Ue(f)&&(o.add(f),f(h,...m))),h},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),h},component(f,m){return m?(s.components[f]=m,h):s.components[f]},directive(f,m){return m?(s.directives[f]=m,h):s.directives[f]},mount(f,m,g){if(!l){const v=h._ceVNode||dt(r,i);return v.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),t(v,f,g),l=!0,h._container=f,f.__vue_app__=h,Ul(v.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Nn(a,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,m){return s.provides[f]=m,h},runWithContext(f){const m=Ri;Ri=h;try{return f()}finally{Ri=m}}};return h}}let Ri=null;const S0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${wn(e)}Modifiers`]||t[`${li(e)}Modifiers`];function A0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ot;let i=n;const s=e.startsWith("update:"),o=s&&S0(r,e.slice(7));o&&(o.trim&&(i=n.map(f=>gt(f)?f.trim():f)),o.number&&(i=n.map(Pl)));let a,l=r[a=Pc(e)]||r[a=Pc(wn(e))];!l&&s&&(l=r[a=Pc(li(e))]),l&&Nn(l,t,6,i);const h=r[a+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nn(h,t,6,i)}}const R0=new WeakMap;function cv(t,e,n=!1){const r=n?R0:e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Ue(t)){const l=h=>{const f=cv(h,e,!0);f&&(a=!0,Ot(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(it(t)&&r.set(t,null),null):(Oe(s)?s.forEach(l=>o[l]=null):Ot(o,s),it(t)&&r.set(t,o),o)}function Fl(t,e){return!t||!xl(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,li(e))||nt(t,e))}function Nf(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:h,renderCache:f,props:m,data:g,setupState:v,ctx:_,inheritAttrs:u}=t,w=Ya(t);let C,R;try{if(n.shapeFlag&4){const M=i||r,F=M;C=qn(h.call(F,M,f,m,v,g,_)),R=a}else{const M=e;C=qn(M.length>1?M(m,{attrs:a,slots:o,emit:l}):M(m,null)),R=e.props?a:P0(a)}}catch(M){co.length=0,Ml(M,t,1),C=dt(Qt)}let V=C;if(R&&u!==!1){const M=Object.keys(R),{shapeFlag:F}=V;M.length&&F&7&&(s&&M.some(ad)&&(R=N0(R,s)),V=Zr(V,R,!1,!0))}return n.dirs&&(V=Zr(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&Io(V,n.transition),C=V,Ya(w),C}const P0=t=>{let e;for(const n in t)(n==="class"||n==="style"||xl(n))&&((e||(e={}))[n]=t[n]);return e},N0=(t,e)=>{const n={};for(const r in t)(!ad(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function O0(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Of(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const g=f[m];if(uv(o,r,g)&&!Fl(h,g))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Of(r,o,h):!0:!!o;return!1}function Of(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(uv(e,t,s)&&!Fl(n,s))return!0}return!1}function uv(t,e,n){const r=t[n],i=e[n];return n==="style"&&it(r)&&it(i)?!ws(r,i):r!==i}function D0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const dv={},hv=()=>Object.create(dv),fv=t=>Object.getPrototypeOf(t)===dv;function M0(t,e,n,r=!1){const i={},s=hv();t.propsDefaults=Object.create(null),pv(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Mg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function V0(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Qe(i),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let m=0;m<f.length;m++){let g=f[m];if(Fl(t.emitsOptions,g))continue;const v=e[g];if(l)if(nt(s,g))v!==s[g]&&(s[g]=v,h=!0);else{const _=wn(g);i[_]=Iu(l,a,_,v,t,!1)}else v!==s[g]&&(s[g]=v,h=!0)}}}else{pv(t,e,i,s)&&(h=!0);let f;for(const m in a)(!e||!nt(e,m)&&((f=li(m))===m||!nt(e,f)))&&(l?n&&(n[m]!==void 0||n[f]!==void 0)&&(i[m]=Iu(l,a,m,void 0,t,!0)):delete i[m]);if(s!==a)for(const m in s)(!e||!nt(e,m))&&(delete s[m],h=!0)}h&&ar(t.attrs,"set","")}function pv(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(no(l))continue;const h=e[l];let f;i&&nt(i,f=wn(l))?!s||!s.includes(f)?n[f]=h:(a||(a={}))[f]=h:Fl(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(s){const l=Qe(n),h=a||ot;for(let f=0;f<s.length;f++){const m=s[f];n[m]=Iu(i,l,m,h[m],t,!nt(h,m))}}return o}function Iu(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ue(l)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const f=Ho(i);r=h[n]=l.call(null,e),f()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===li(n))&&(r=!0))}return r}const L0=new WeakMap;function mv(t,e,n=!1){const r=n?L0:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Ue(t)){const f=m=>{l=!0;const[g,v]=mv(m,e,!0);Ot(o,g),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!l)return it(t)&&r.set(t,ts),ts;if(Oe(s))for(let f=0;f<s.length;f++){const m=wn(s[f]);Df(m)&&(o[m]=ot)}else if(s)for(const f in s){const m=wn(f);if(Df(m)){const g=s[f],v=o[m]=Oe(g)||Ue(g)?{type:g}:Ot({},g),_=v.type;let u=!1,w=!0;if(Oe(_))for(let C=0;C<_.length;++C){const R=_[C],V=Ue(R)&&R.name;if(V==="Boolean"){u=!0;break}else V==="String"&&(w=!1)}else u=Ue(_)&&_.name==="Boolean";v[0]=u,v[1]=w,(u||nt(v,"default"))&&a.push(m)}}const h=[o,a];return it(t)&&r.set(t,h),h}function Df(t){return t[0]!=="$"&&!no(t)}const _d=t=>t==="_"||t==="_ctx"||t==="$stable",bd=t=>Oe(t)?t.map(qn):[qn(t)],F0=(t,e,n)=>{if(e._n)return e;const r=kt((...i)=>bd(e(...i)),n);return r._c=!1,r},gv=(t,e,n)=>{const r=t._ctx;for(const i in t){if(_d(i))continue;const s=t[i];if(Ue(s))e[i]=F0(i,s,r);else if(s!=null){const o=bd(s);e[i]=()=>o}}},vv=(t,e)=>{const n=bd(e);t.slots.default=()=>n},yv=(t,e,n)=>{for(const r in e)(n||!_d(r))&&(t[r]=e[r])},$0=(t,e,n)=>{const r=t.slots=hv();if(t.vnode.shapeFlag&32){const i=e._;i?(yv(r,e,n),n&&pg(r,"_",i,!0)):gv(e,r)}else e&&vv(t,e)},U0=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ot;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:yv(i,e,n):(s=!e.$stable,gv(e,i)),o=e}else e&&(vv(t,e),o={default:1});if(s)for(const a in i)!_d(a)&&o[a]==null&&delete i[a]},qt=W0;function B0(t){return z0(t)}function z0(t,e){const n=Nl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:h,setElementText:f,parentNode:m,nextSibling:g,setScopeId:v=Wn,insertStaticContent:_}=t,u=(q,U,p,G=null,L=null,N=null,D=void 0,W=null,j=!!U.dynamicChildren)=>{if(q===U)return;q&&!Ti(q,U)&&(G=se(q),Z(q,L,N,!0),q=null),U.patchFlag===-2&&(j=!1,U.dynamicChildren=null);const{type:A,ref:H,shapeFlag:Y}=U;switch(A){case $l:w(q,U,p,G);break;case Qt:C(q,U,p,G);break;case Ma:q==null&&R(U,p,G,D);break;case Ne:b(q,U,p,G,L,N,D,W,j);break;default:Y&1?F(q,U,p,G,L,N,D,W,j):Y&6?S(q,U,p,G,L,N,D,W,j):(Y&64||Y&128)&&A.process(q,U,p,G,L,N,D,W,j,be)}H!=null&&L?ao(H,q&&q.ref,N,U||q,!U):H==null&&q&&q.ref!=null&&ao(q.ref,null,N,q,!0)},w=(q,U,p,G)=>{if(q==null)r(U.el=a(U.children),p,G);else{const L=U.el=q.el;U.children!==q.children&&h(L,U.children)}},C=(q,U,p,G)=>{q==null?r(U.el=l(U.children||""),p,G):U.el=q.el},R=(q,U,p,G)=>{[q.el,q.anchor]=_(q.children,U,p,G,q.el,q.anchor)},V=({el:q,anchor:U},p,G)=>{let L;for(;q&&q!==U;)L=g(q),r(q,p,G),q=L;r(U,p,G)},M=({el:q,anchor:U})=>{let p;for(;q&&q!==U;)p=g(q),i(q),q=p;i(U)},F=(q,U,p,G,L,N,D,W,j)=>{if(U.type==="svg"?D="svg":U.type==="math"&&(D="mathml"),q==null)z(U,p,G,L,N,D,W,j);else{const A=q.el&&q.el._isVueCE?q.el:null;try{A&&A._beginPatch(),T(q,U,L,N,D,W,j)}finally{A&&A._endPatch()}}},z=(q,U,p,G,L,N,D,W)=>{let j,A;const{props:H,shapeFlag:Y,transition:ie,dirs:le}=q;if(j=q.el=o(q.type,N,H&&H.is,H),Y&8?f(j,q.children):Y&16&&E(q.children,j,null,G,L,Fc(q,N),D,W),le&&yi(q,null,G,"created"),k(j,q,q.scopeId,D,G),H){for(const Se in H)Se!=="value"&&!no(Se)&&s(j,Se,null,H[Se],N,G);"value"in H&&s(j,"value",null,H.value,N),(A=H.onVnodeBeforeMount)&&Un(A,G,q)}le&&yi(q,null,G,"beforeMount");const ge=j0(L,ie);ge&&ie.beforeEnter(j),r(j,U,p),((A=H&&H.onVnodeMounted)||ge||le)&&qt(()=>{A&&Un(A,G,q),ge&&ie.enter(j),le&&yi(q,null,G,"mounted")},L)},k=(q,U,p,G,L)=>{if(p&&v(q,p),G)for(let N=0;N<G.length;N++)v(q,G[N]);if(L){let N=L.subTree;if(U===N||wv(N.type)&&(N.ssContent===U||N.ssFallback===U)){const D=L.vnode;k(q,D,D.scopeId,D.slotScopeIds,L.parent)}}},E=(q,U,p,G,L,N,D,W,j=0)=>{for(let A=j;A<q.length;A++){const H=q[A]=W?or(q[A]):qn(q[A]);u(null,H,U,p,G,L,N,D,W)}},T=(q,U,p,G,L,N,D)=>{const W=U.el=q.el;let{patchFlag:j,dynamicChildren:A,dirs:H}=U;j|=q.patchFlag&16;const Y=q.props||ot,ie=U.props||ot;let le;if(p&&_i(p,!1),(le=ie.onVnodeBeforeUpdate)&&Un(le,p,U,q),H&&yi(U,q,p,"beforeUpdate"),p&&_i(p,!0),(Y.innerHTML&&ie.innerHTML==null||Y.textContent&&ie.textContent==null)&&f(W,""),A?P(q.dynamicChildren,A,W,p,G,Fc(U,L),N):D||ue(q,U,W,null,p,G,Fc(U,L),N,!1),j>0){if(j&16)O(W,Y,ie,p,L);else if(j&2&&Y.class!==ie.class&&s(W,"class",null,ie.class,L),j&4&&s(W,"style",Y.style,ie.style,L),j&8){const ge=U.dynamicProps;for(let Se=0;Se<ge.length;Se++){const ae=ge[Se],ze=Y[ae],Ze=ie[ae];(Ze!==ze||ae==="value")&&s(W,ae,ze,Ze,L,p)}}j&1&&q.children!==U.children&&f(W,U.children)}else!D&&A==null&&O(W,Y,ie,p,L);((le=ie.onVnodeUpdated)||H)&&qt(()=>{le&&Un(le,p,U,q),H&&yi(U,q,p,"updated")},G)},P=(q,U,p,G,L,N,D)=>{for(let W=0;W<U.length;W++){const j=q[W],A=U[W],H=j.el&&(j.type===Ne||!Ti(j,A)||j.shapeFlag&198)?m(j.el):p;u(j,A,H,null,G,L,N,D,!0)}},O=(q,U,p,G,L)=>{if(U!==p){if(U!==ot)for(const N in U)!no(N)&&!(N in p)&&s(q,N,U[N],null,L,G);for(const N in p){if(no(N))continue;const D=p[N],W=U[N];D!==W&&N!=="value"&&s(q,N,W,D,L,G)}"value"in p&&s(q,"value",U.value,p.value,L)}},b=(q,U,p,G,L,N,D,W,j)=>{const A=U.el=q?q.el:a(""),H=U.anchor=q?q.anchor:a("");let{patchFlag:Y,dynamicChildren:ie,slotScopeIds:le}=U;le&&(W=W?W.concat(le):le),q==null?(r(A,p,G),r(H,p,G),E(U.children||[],p,H,L,N,D,W,j)):Y>0&&Y&64&&ie&&q.dynamicChildren&&q.dynamicChildren.length===ie.length?(P(q.dynamicChildren,ie,p,L,N,D,W),(U.key!=null||L&&U===L.subTree)&&wd(q,U,!0)):ue(q,U,p,H,L,N,D,W,j)},S=(q,U,p,G,L,N,D,W,j)=>{U.slotScopeIds=W,q==null?U.shapeFlag&512?L.ctx.activate(U,p,G,D,j):I(U,p,G,L,N,D,j):Q(q,U,j)},I=(q,U,p,G,L,N,D)=>{const W=q.component=X0(q,G,L);if(Vl(q)&&(W.ctx.renderer=be),Z0(W,!1,D),W.asyncDep){if(L&&L.registerDep(W,re,D),!q.el){const j=W.subTree=dt(Qt);C(null,j,U,p),q.placeholder=j.el}}else re(W,q,U,p,L,N,D)},Q=(q,U,p)=>{const G=U.component=q.component;if(O0(q,U,p))if(G.asyncDep&&!G.asyncResolved){$(G,U,p);return}else G.next=U,G.update();else U.el=q.el,G.vnode=U},re=(q,U,p,G,L,N,D)=>{const W=()=>{if(q.isMounted){let{next:Y,bu:ie,u:le,parent:ge,vnode:Se}=q;{const _t=_v(q);if(_t){Y&&(Y.el=Se.el,$(q,Y,D)),_t.asyncDep.then(()=>{qt(()=>{q.isUnmounted||A()},L)});return}}let ae=Y,ze;_i(q,!1),Y?(Y.el=Se.el,$(q,Y,D)):Y=Se,ie&&Oa(ie),(ze=Y.props&&Y.props.onVnodeBeforeUpdate)&&Un(ze,ge,Y,Se),_i(q,!0);const Ze=Nf(q),Je=q.subTree;q.subTree=Ze,u(Je,Ze,m(Je.el),se(Je),q,L,N),Y.el=Ze.el,ae===null&&D0(q,Ze.el),le&&qt(le,L),(ze=Y.props&&Y.props.onVnodeUpdated)&&qt(()=>Un(ze,ge,Y,Se),L)}else{let Y;const{el:ie,props:le}=U,{bm:ge,m:Se,parent:ae,root:ze,type:Ze}=q,Je=is(U);_i(q,!1),ge&&Oa(ge),!Je&&(Y=le&&le.onVnodeBeforeMount)&&Un(Y,ae,U),_i(q,!0);{ze.ce&&ze.ce._hasShadowRoot()&&ze.ce._injectChildStyle(Ze);const _t=q.subTree=Nf(q);u(null,_t,p,G,q,L,N),U.el=_t.el}if(Se&&qt(Se,L),!Je&&(Y=le&&le.onVnodeMounted)){const _t=U;qt(()=>Un(Y,ae,_t),L)}(U.shapeFlag&256||ae&&is(ae.vnode)&&ae.vnode.shapeFlag&256)&&q.a&&qt(q.a,L),q.isMounted=!0,U=p=G=null}};q.scope.on();const j=q.effect=new wg(W);q.scope.off();const A=q.update=j.run.bind(j),H=q.job=j.runIfDirty.bind(j);H.i=q,H.id=q.uid,j.scheduler=()=>vd(H),_i(q,!0),A()},$=(q,U,p)=>{U.component=q;const G=q.vnode.props;q.vnode=U,q.next=null,V0(q,U.props,G,p),U0(q,U.children,p),mr(),bf(q),gr()},ue=(q,U,p,G,L,N,D,W,j=!1)=>{const A=q&&q.children,H=q?q.shapeFlag:0,Y=U.children,{patchFlag:ie,shapeFlag:le}=U;if(ie>0){if(ie&128){_e(A,Y,p,G,L,N,D,W,j);return}else if(ie&256){ne(A,Y,p,G,L,N,D,W,j);return}}le&8?(H&16&&we(A,L,N),Y!==A&&f(p,Y)):H&16?le&16?_e(A,Y,p,G,L,N,D,W,j):we(A,L,N,!0):(H&8&&f(p,""),le&16&&E(Y,p,G,L,N,D,W,j))},ne=(q,U,p,G,L,N,D,W,j)=>{q=q||ts,U=U||ts;const A=q.length,H=U.length,Y=Math.min(A,H);let ie;for(ie=0;ie<Y;ie++){const le=U[ie]=j?or(U[ie]):qn(U[ie]);u(q[ie],le,p,null,L,N,D,W,j)}A>H?we(q,L,N,!0,!1,Y):E(U,p,G,L,N,D,W,j,Y)},_e=(q,U,p,G,L,N,D,W,j)=>{let A=0;const H=U.length;let Y=q.length-1,ie=H-1;for(;A<=Y&&A<=ie;){const le=q[A],ge=U[A]=j?or(U[A]):qn(U[A]);if(Ti(le,ge))u(le,ge,p,null,L,N,D,W,j);else break;A++}for(;A<=Y&&A<=ie;){const le=q[Y],ge=U[ie]=j?or(U[ie]):qn(U[ie]);if(Ti(le,ge))u(le,ge,p,null,L,N,D,W,j);else break;Y--,ie--}if(A>Y){if(A<=ie){const le=ie+1,ge=le<H?U[le].el:G;for(;A<=ie;)u(null,U[A]=j?or(U[A]):qn(U[A]),p,ge,L,N,D,W,j),A++}}else if(A>ie)for(;A<=Y;)Z(q[A],L,N,!0),A++;else{const le=A,ge=A,Se=new Map;for(A=ge;A<=ie;A++){const ht=U[A]=j?or(U[A]):qn(U[A]);ht.key!=null&&Se.set(ht.key,A)}let ae,ze=0;const Ze=ie-ge+1;let Je=!1,_t=0;const qe=new Array(Ze);for(A=0;A<Ze;A++)qe[A]=0;for(A=le;A<=Y;A++){const ht=q[A];if(ze>=Ze){Z(ht,L,N,!0);continue}let Ye;if(ht.key!=null)Ye=Se.get(ht.key);else for(ae=ge;ae<=ie;ae++)if(qe[ae-ge]===0&&Ti(ht,U[ae])){Ye=ae;break}Ye===void 0?Z(ht,L,N,!0):(qe[Ye-ge]=A+1,Ye>=_t?_t=Ye:Je=!0,u(ht,U[Ye],p,null,L,N,D,W,j),ze++)}const sn=Je?q0(qe):ts;for(ae=sn.length-1,A=Ze-1;A>=0;A--){const ht=ge+A,Ye=U[ht],Tn=U[ht+1],vn=ht+1<H?Tn.el||bv(Tn):G;qe[A]===0?u(null,Ye,p,vn,L,N,D,W,j):Je&&(ae<0||A!==sn[ae]?te(Ye,p,vn,2):ae--)}}},te=(q,U,p,G,L=null)=>{const{el:N,type:D,transition:W,children:j,shapeFlag:A}=q;if(A&6){te(q.component.subTree,U,p,G);return}if(A&128){q.suspense.move(U,p,G);return}if(A&64){D.move(q,U,p,be);return}if(D===Ne){r(N,U,p);for(let Y=0;Y<j.length;Y++)te(j[Y],U,p,G);r(q.anchor,U,p);return}if(D===Ma){V(q,U,p);return}if(G!==2&&A&1&&W)if(G===0)W.beforeEnter(N),r(N,U,p),qt(()=>W.enter(N),L);else{const{leave:Y,delayLeave:ie,afterLeave:le}=W,ge=()=>{q.ctx.isUnmounted?i(N):r(N,U,p)},Se=()=>{N._isLeaving&&N[zn](!0),Y(N,()=>{ge(),le&&le()})};ie?ie(N,ge,Se):Se()}else r(N,U,p)},Z=(q,U,p,G=!1,L=!1)=>{const{type:N,props:D,ref:W,children:j,dynamicChildren:A,shapeFlag:H,patchFlag:Y,dirs:ie,cacheIndex:le}=q;if(Y===-2&&(L=!1),W!=null&&(mr(),ao(W,null,p,q,!0),gr()),le!=null&&(U.renderCache[le]=void 0),H&256){U.ctx.deactivate(q);return}const ge=H&1&&ie,Se=!is(q);let ae;if(Se&&(ae=D&&D.onVnodeBeforeUnmount)&&Un(ae,U,q),H&6)X(q.component,p,G);else{if(H&128){q.suspense.unmount(p,G);return}ge&&yi(q,null,U,"beforeUnmount"),H&64?q.type.remove(q,U,p,be,G):A&&!A.hasOnce&&(N!==Ne||Y>0&&Y&64)?we(A,U,p,!1,!0):(N===Ne&&Y&384||!L&&H&16)&&we(j,U,p),G&&Ee(q)}(Se&&(ae=D&&D.onVnodeUnmounted)||ge)&&qt(()=>{ae&&Un(ae,U,q),ge&&yi(q,null,U,"unmounted")},p)},Ee=q=>{const{type:U,el:p,anchor:G,transition:L}=q;if(U===Ne){ye(p,G);return}if(U===Ma){M(q);return}const N=()=>{i(p),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(q.shapeFlag&1&&L&&!L.persisted){const{leave:D,delayLeave:W}=L,j=()=>D(p,N);W?W(q.el,N,j):j()}else N()},ye=(q,U)=>{let p;for(;q!==U;)p=g(q),i(q),q=p;i(U)},X=(q,U,p)=>{const{bum:G,scope:L,job:N,subTree:D,um:W,m:j,a:A}=q;Mf(j),Mf(A),G&&Oa(G),L.stop(),N&&(N.flags|=8,Z(D,q,U,p)),W&&qt(W,U),qt(()=>{q.isUnmounted=!0},U)},we=(q,U,p,G=!1,L=!1,N=0)=>{for(let D=N;D<q.length;D++)Z(q[D],U,p,G,L)},se=q=>{if(q.shapeFlag&6)return se(q.component.subTree);if(q.shapeFlag&128)return q.suspense.next();const U=g(q.anchor||q.el),p=U&&U[Wg];return p?g(p):U};let de=!1;const he=(q,U,p)=>{let G;q==null?U._vnode&&(Z(U._vnode,null,null,!0),G=U._vnode.component):u(U._vnode||null,q,U,null,null,null,p),U._vnode=q,de||(de=!0,bf(G),Ug(),de=!1)},be={p:u,um:Z,m:te,r:Ee,mt:I,mc:E,pc:ue,pbc:P,n:se,o:t};return{render:he,hydrate:void 0,createApp:x0(he)}}function Fc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _i({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function j0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wd(t,e,n=!1){const r=t.children,i=e.children;if(Oe(r)&&Oe(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=or(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&wd(o,a)),a.type===$l&&(a.patchFlag===-1&&(a=i[s]=or(a)),a.el=o.el),a.type===Qt&&!a.el&&(a.el=o.el)}}function q0(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(i=n[n.length-1],t[i]<h){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<h?s=a+1:o=a;h<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function _v(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_v(e)}function Mf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function bv(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?bv(e.subTree):null}const wv=t=>t.__isSuspense;function W0(t,e){e&&e.pendingBranch?Oe(t)?e.effects.push(...t):e.effects.push(t):Zb(t)}const Ne=Symbol.for("v-fgt"),$l=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),co=[];let un=null;function K(t=!1){co.push(un=t?null:[])}function H0(){co.pop(),un=co[co.length-1]||null}let To=1;function el(t,e=!1){To+=t,t<0&&un&&e&&(un.hasOnce=!0)}function Ev(t){return t.dynamicChildren=To>0?un||ts:null,H0(),To>0&&un&&un.push(t),t}function J(t,e,n,r,i,s){return Ev(d(t,e,n,r,i,s,!0))}function Tt(t,e,n,r,i){return Ev(dt(t,e,n,r,i,!0))}function Co(t){return t?t.__v_isVNode===!0:!1}function Ti(t,e){return t.type===e.type&&t.key===e.key}const Iv=({key:t})=>t??null,Va=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?gt(t)||Et(t)||Ue(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,r=0,i=null,s=t===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Iv(e),ref:e&&Va(e),scopeId:zg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Bt};return a?(Ed(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=gt(n)?8:16),To>0&&!o&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const dt=G0;function G0(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===rv)&&(t=Qt),Co(t)){const a=Zr(t,e,!0);return n&&Ed(a,n),To>0&&!s&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag=-2,a}if(iw(t)&&(t=t.__vccOpts),e){e=K0(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=Fe(a)),it(l)&&(Dl(l)&&!Oe(l)&&(l=Ot({},l)),e.style=$e(l))}const o=gt(t)?1:wv(t)?128:Hg(t)?64:it(t)?4:Ue(t)?2:0;return d(t,e,n,r,i,o,s,!0)}function K0(t){return t?Dl(t)||fv(t)?Ot({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=t,h=e?Q0(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Iv(h),ref:e&&e.ref?n&&s?Oe(s)?s.concat(Va(e)):[s,Va(e)]:Va(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Io(f,l.clone(f)),f}function Pe(t=" ",e=0){return dt($l,null,t,e)}function nn(t,e){const n=dt(Ma,null,t);return n.staticCount=e,n}function xe(t="",e=!1){return e?(K(),Tt(Qt,null,t)):dt(Qt,null,t)}function qn(t){return t==null||typeof t=="boolean"?dt(Qt):Oe(t)?dt(Ne,null,t.slice()):Co(t)?or(t):dt($l,null,String(t))}function or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function Ed(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Oe(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ed(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!fv(e)?e._ctx=Bt:i===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),r&64?(n=16,e=[Pe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Q0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Fe([e.class,r.class]));else if(i==="style")e.style=$e([e.style,r.style]);else if(xl(i)){const s=e[i],o=r[i];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Un(t,e,n,r=null){Nn(t,e,7,[n,r])}const J0=lv();let Y0=0;function X0(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||J0,s={uid:Y0++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mv(r,i),emitsOptions:cv(r,i),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:r.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=A0.bind(null,s),t.ce&&t.ce(s),s}let Jt=null;const Id=()=>Jt||Bt;let tl,Tu;{const t=Nl(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};tl=e("__VUE_INSTANCE_SETTERS__",n=>Jt=n),Tu=e("__VUE_SSR_SETTERS__",n=>ko=n)}const Ho=t=>{const e=Jt;return tl(t),t.scope.on(),()=>{t.scope.off(),tl(e)}},Vf=()=>{Jt&&Jt.scope.off(),tl(null)};function Tv(t){return t.vnode.shapeFlag&4}let ko=!1;function Z0(t,e=!1,n=!1){e&&Tu(e);const{props:r,children:i}=t.vnode,s=Tv(t);M0(t,r,s,e),$0(t,i,n||e);const o=s?ew(t,e):void 0;return e&&Tu(!1),o}function ew(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,b0);const{setup:r}=n;if(r){mr();const i=t.setupContext=r.length>1?nw(t):null,s=Ho(t),o=zo(r,t,0,[t.props,i]),a=dg(o);if(gr(),s(),(a||t.sp)&&!is(t)&&ev(t),a){if(o.then(Vf,Vf),e)return o.then(l=>{Lf(t,l)}).catch(l=>{Ml(l,t,0)});t.asyncDep=o}else Lf(t,o)}else Cv(t)}function Lf(t,e,n){Ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:it(e)&&(t.setupState=Lg(e)),Cv(t)}function Cv(t,e,n){const r=t.type;t.render||(t.render=r.render||Wn);{const i=Ho(t);mr();try{w0(t)}finally{gr(),i()}}}const tw={get(t,e){return Gt(t,"get",""),t[e]}};function nw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tw),slots:t.slots,emit:t.emit,expose:e}}function Ul(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Lg(gd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lo)return lo[n](t)},has(e,n){return n in e||n in lo}})):t.proxy}function rw(t,e=!0){return Ue(t)?t.displayName||t.name:t.name||e&&t.__name}function iw(t){return Ue(t)&&"__vccOpts"in t}const Ce=(t,e)=>Kb(t,e,ko);function Td(t,e,n){try{el(-1);const r=arguments.length;return r===2?it(e)&&!Oe(e)?Co(e)?dt(t,null,[e]):dt(t,e):dt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Co(n)&&(n=[n]),dt(t,e,n))}finally{el(1)}}const sw="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cu;const Ff=typeof window<"u"&&window.trustedTypes;if(Ff)try{Cu=Ff.createPolicy("vue",{createHTML:t=>t})}catch{}const kv=Cu?t=>Cu.createHTML(t):t=>t,ow="http://www.w3.org/2000/svg",aw="http://www.w3.org/1998/Math/MathML",sr=typeof document<"u"?document:null,$f=sr&&sr.createElement("template"),lw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?sr.createElementNS(ow,t):e==="mathml"?sr.createElementNS(aw,t):n?sr.createElement(t,{is:n}):sr.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{$f.innerHTML=kv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=$f.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Mr="transition",qs="animation",xo=Symbol("_vtc"),xv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cw=Ot({},Kg,xv),uw=t=>(t.displayName="Transition",t.props=cw,t),ei=uw((t,{slots:e})=>Td(a0,dw(t),e)),bi=(t,e=[])=>{Oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uf=t=>t?Oe(t)?t.some(e=>e.length>1):t.length>1:!1;function dw(t){const e={};for(const b in t)b in xv||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:h=o,appearToClass:f=a,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,_=hw(i),u=_&&_[0],w=_&&_[1],{onBeforeEnter:C,onEnter:R,onEnterCancelled:V,onLeave:M,onLeaveCancelled:F,onBeforeAppear:z=C,onAppear:k=R,onAppearCancelled:E=V}=e,T=(b,S,I,Q)=>{b._enterCancelled=Q,wi(b,S?f:a),wi(b,S?h:o),I&&I()},P=(b,S)=>{b._isLeaving=!1,wi(b,m),wi(b,v),wi(b,g),S&&S()},O=b=>(S,I)=>{const Q=b?k:R,re=()=>T(S,b,I);bi(Q,[S,re]),Bf(()=>{wi(S,b?l:s),nr(S,b?f:a),Uf(Q)||zf(S,r,u,re)})};return Ot(e,{onBeforeEnter(b){bi(C,[b]),nr(b,s),nr(b,o)},onBeforeAppear(b){bi(z,[b]),nr(b,l),nr(b,h)},onEnter:O(!1),onAppear:O(!0),onLeave(b,S){b._isLeaving=!0;const I=()=>P(b,S);nr(b,m),b._enterCancelled?(nr(b,g),Wf(b)):(Wf(b),nr(b,g)),Bf(()=>{b._isLeaving&&(wi(b,m),nr(b,v),Uf(M)||zf(b,r,w,I))}),bi(M,[b,I])},onEnterCancelled(b){T(b,!1,void 0,!0),bi(V,[b])},onAppearCancelled(b){T(b,!0,void 0,!0),bi(E,[b])},onLeaveCancelled(b){P(b),bi(F,[b])}})}function hw(t){if(t==null)return null;if(it(t))return[$c(t.enter),$c(t.leave)];{const e=$c(t);return[e,e]}}function $c(t){return fb(t)}function nr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[xo]||(t[xo]=new Set)).add(e)}function wi(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[xo];n&&(n.delete(e),n.size||(t[xo]=void 0))}function Bf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fw=0;function zf(t,e,n,r){const i=t._endId=++fw,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=pw(t,e);if(!o)return r();const h=o+"end";let f=0;const m=()=>{t.removeEventListener(h,g),s()},g=v=>{v.target===t&&++f>=l&&m()};setTimeout(()=>{f<l&&m()},a+1),t.addEventListener(h,g)}function pw(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),i=r(`${Mr}Delay`),s=r(`${Mr}Duration`),o=jf(i,s),a=r(`${qs}Delay`),l=r(`${qs}Duration`),h=jf(a,l);let f=null,m=0,g=0;e===Mr?o>0&&(f=Mr,m=o,g=s.length):e===qs?h>0&&(f=qs,m=h,g=l.length):(m=Math.max(o,h),f=m>0?o>h?Mr:qs:null,g=f?f===Mr?s.length:l.length:0);const v=f===Mr&&/\b(?:transform|all)(?:,|$)/.test(r(`${Mr}Property`).toString());return{type:f,timeout:m,propCount:g,hasTransform:v}}function jf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>qf(n)+qf(t[r])))}function qf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Wf(t){return(t?t.ownerDocument:document).body.offsetHeight}function mw(t,e,n){const r=t[xo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nl=Symbol("_vod"),Sv=Symbol("_vsh"),gw={name:"show",beforeMount(t,{value:e},{transition:n}){t[nl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ws(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ws(t,!0),r.enter(t)):r.leave(t,()=>{Ws(t,!1)}):Ws(t,e))},beforeUnmount(t,{value:e}){Ws(t,e)}};function Ws(t,e){t.style.display=e?t[nl]:"none",t[Sv]=!e}const vw=Symbol(""),yw=/(?:^|;)\s*display\s*:/;function _w(t,e,n){const r=t.style,i=gt(n);let s=!1;if(n&&!i){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&La(r,a,"")}else for(const o in e)n[o]==null&&La(r,o,"");for(const o in n)o==="display"&&(s=!0),La(r,o,n[o])}else if(i){if(e!==n){const o=r[vw];o&&(n+=";"+o),r.cssText=n,s=yw.test(n)}}else e&&t.removeAttribute("style");nl in t&&(t[nl]=s?r.display:"",t[Sv]&&(r.display="none"))}const Hf=/\s*!important$/;function La(t,e,n){if(Oe(n))n.forEach(r=>La(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bw(t,e);Hf.test(n)?t.setProperty(li(r),n.replace(Hf,""),"important"):t[r]=n}}const Gf=["Webkit","Moz","ms"],Uc={};function bw(t,e){const n=Uc[e];if(n)return n;let r=wn(e);if(r!=="filter"&&r in t)return Uc[e]=r;r=Rl(r);for(let i=0;i<Gf.length;i++){const s=Gf[i]+r;if(s in t)return Uc[e]=s}return e}const Kf="http://www.w3.org/1999/xlink";function Qf(t,e,n,r,i,s=_b(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kf,e.slice(6,e.length)):t.setAttributeNS(Kf,e,n):n==null||s&&!mg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Rn(n)?String(n):n)}function Jf(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?kv(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=mg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function zr(t,e,n,r){t.addEventListener(e,n,r)}function ww(t,e,n,r){t.removeEventListener(e,n,r)}const Yf=Symbol("_vei");function Ew(t,e,n,r,i=null){const s=t[Yf]||(t[Yf]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Iw(e);if(r){const h=s[e]=kw(r,i);zr(t,a,h,l)}else o&&(ww(t,a,o,l),s[e]=void 0)}}const Xf=/(?:Once|Passive|Capture)$/;function Iw(t){let e;if(Xf.test(t)){e={};let r;for(;r=t.match(Xf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):li(t.slice(2)),e]}let Bc=0;const Tw=Promise.resolve(),Cw=()=>Bc||(Tw.then(()=>Bc=0),Bc=Date.now());function kw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Nn(xw(r,n.value),e,5,[r])};return n.value=t,n.attached=Cw(),n}function xw(t,e){if(Oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Zf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sw=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?mw(t,r,o):e==="style"?_w(t,n,r):xl(e)?ad(e)||Ew(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Aw(t,e,r,o))?(Jf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qf(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!gt(r))?Jf(t,wn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qf(t,e,r,o))};function Aw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zf(e)&&Ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Zf(e)&&gt(n)?!1:e in t}const hs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Oe(e)?n=>Oa(e,n):e};function Rw(t){t.target.composing=!0}function ep(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fr=Symbol("_assign");function tp(t,e,n){return e&&(t=t.trim()),n&&(t=Pl(t)),t}const mt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[fr]=hs(i);const s=r||i.props&&i.props.type==="number";zr(t,e?"change":"input",o=>{o.target.composing||t[fr](tp(t.value,n,s))}),(n||s)&&zr(t,"change",()=>{t.value=tp(t.value,n,s)}),e||(zr(t,"compositionstart",Rw),zr(t,"compositionend",ep),zr(t,"change",ep))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[fr]=hs(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Pl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Av={deep:!0,created(t,e,n){t[fr]=hs(n),zr(t,"change",()=>{const r=t._modelValue,i=So(t),s=t.checked,o=t[fr];if(Oe(r)){const a=cd(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const h=[...r];h.splice(a,1),o(h)}}else if(bs(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(Rv(t,s))})},mounted:np,beforeUpdate(t,e,n){t[fr]=hs(n),np(t,e,n)}};function np(t,{value:e,oldValue:n},r){t._modelValue=e;let i;if(Oe(e))i=cd(e,r.props.value)>-1;else if(bs(e))i=e.has(r.props.value);else{if(e===n)return;i=ws(e,Rv(t,!0))}t.checked!==i&&(t.checked=i)}const Ea={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=bs(e);zr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pl(So(o)):So(o));t[fr](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,jo(()=>{t._assigning=!1})}),t[fr]=hs(r)},mounted(t,{value:e}){rp(t,e)},beforeUpdate(t,e,n){t[fr]=hs(n)},updated(t,{value:e}){t._assigning||rp(t,e)}};function rp(t,e){const n=t.multiple,r=Oe(e);if(!(n&&!r&&!bs(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],a=So(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(a)):o.selected=cd(e,a)>-1}else o.selected=e.has(a);else if(ws(So(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function So(t){return"_value"in t?t._value:t.value}function Rv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Pw=["ctrl","shift","alt","meta"],Nw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pw.some(n=>t[`${n}Key`]&&!e.includes(n))},$t=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=Nw[e[o]];if(a&&a(i,e))return}return t(i,...s)})},Ow={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ku=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=li(i.key);if(e.some(o=>o===s||Ow[o]===s))return t(i)})},Dw=Ot({patchProp:Sw},lw);let ip;function Mw(){return ip||(ip=B0(Dw))}const Vw=(...t)=>{const e=Mw().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Fw(r);if(!i)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Lw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Lw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fw(t){return gt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Pv;const Bl=t=>Pv=t,Nv=Symbol();function xu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var uo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(uo||(uo={}));function $w(){const t=_g(!0),e=t.run(()=>pe({}));let n=[],r=[];const i=gd({install(s){Bl(i),i._a=s,s.provide(Nv,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return this._a?n.push(s):r.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ov=()=>{};function sp(t,e,n,r=Ov){t.add(e);const i=()=>{t.delete(e)&&r()};return!n&&bg()&&wb(i),i}function Ki(t,...e){t.forEach(n=>{n(...e)})}const Uw=t=>t(),op=Symbol(),zc=Symbol();function Su(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];xu(i)&&xu(r)&&t.hasOwnProperty(n)&&!Et(r)&&!hr(r)?t[n]=Su(i,r):t[n]=r}return t}const Bw=Symbol();function zw(t){return!xu(t)||!Object.prototype.hasOwnProperty.call(t,Bw)}const{assign:Fr}=Object;function jw(t){return!!(Et(t)&&t.effect)}function qw(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function h(){a||(n.state.value[t]=i?i():{});const f=qb(n.state.value[t]);return Fr(f,s,Object.keys(o||{}).reduce((m,g)=>(m[g]=gd(Ce(()=>{Bl(n);const v=n._s.get(t);return o[g].call(v,v)})),m),{}))}return l=Dv(t,h,e,n,r,!0),l}function Dv(t,e,n={},r,i,s){let o;const a=Fr({actions:{}},n),l={deep:!0};let h,f,m=new Set,g=new Set,v;const _=r.state.value[t];!s&&!_&&(r.state.value[t]={});let u;function w(E){let T;h=f=!1,typeof E=="function"?(E(r.state.value[t]),T={type:uo.patchFunction,storeId:t,events:v}):(Su(r.state.value[t],E),T={type:uo.patchObject,payload:E,storeId:t,events:v});const P=u=Symbol();jo().then(()=>{u===P&&(h=!0)}),f=!0,Ki(m,T,r.state.value[t])}const C=s?function(){const{state:T}=n,P=T?T():{};this.$patch(O=>{Fr(O,P)})}:Ov;function R(){o.stop(),m.clear(),g.clear(),r._s.delete(t)}const V=(E,T="")=>{if(op in E)return E[zc]=T,E;const P=function(){Bl(r);const O=Array.from(arguments),b=new Set,S=new Set;function I($){b.add($)}function Q($){S.add($)}Ki(g,{args:O,name:P[zc],store:F,after:I,onError:Q});let re;try{re=E.apply(this&&this.$id===t?this:F,O)}catch($){throw Ki(S,$),$}return re instanceof Promise?re.then($=>(Ki(b,$),$)).catch($=>(Ki(S,$),Promise.reject($))):(Ki(b,re),re)};return P[op]=!0,P[zc]=T,P},M={_p:r,$id:t,$onAction:sp.bind(null,g),$patch:w,$reset:C,$subscribe(E,T={}){const P=sp(m,E,T.detached,()=>O()),O=o.run(()=>Yt(()=>r.state.value[t],b=>{(T.flush==="sync"?f:h)&&E({storeId:t,type:uo.direct,events:v},b)},Fr({},l,T)));return P},$dispose:R},F=Bo(M);r._s.set(t,F);const k=(r._a&&r._a.runWithContext||Uw)(()=>r._e.run(()=>(o=_g()).run(()=>e({action:V}))));for(const E in k){const T=k[E];if(Et(T)&&!jw(T)||hr(T))s||(_&&zw(T)&&(Et(T)?T.value=_[E]:Su(T,_[E])),r.state.value[t][E]=T);else if(typeof T=="function"){const P=V(T,E);k[E]=P,a.actions[E]=T}}return Fr(F,k),Fr(Qe(F),k),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:E=>{w(T=>{Fr(T,E)})}}),r._p.forEach(E=>{Fr(F,o.run(()=>E({store:F,app:r._a,pinia:r,options:a})))}),_&&s&&n.hydrate&&n.hydrate(F.$state,_),h=!0,f=!0,F}/*! #__NO_SIDE_EFFECTS__ */function zl(t,e,n){let r;const i=typeof e=="function";r=i?n:e;function s(o,a){const l=e0();return o=o||(l?fn(Nv,null):null),o&&Bl(o),o=Pv,o._s.has(t)||(i?Dv(t,e,r,o):qw(t,r,o)),o._s.get(t)}return s.$id=t,s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ji=typeof document<"u";function Mv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ww(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Mv(t.default)}const et=Object.assign;function jc(t,e){const n={};for(const r in e){const i=e[r];n[r]=On(i)?i.map(t):t(i)}return n}const ho=()=>{},On=Array.isArray;function ap(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Vv=/#/g,Hw=/&/g,Gw=/\//g,Kw=/=/g,Qw=/\?/g,Lv=/\+/g,Jw=/%5B/g,Yw=/%5D/g,Fv=/%5E/g,Xw=/%60/g,$v=/%7B/g,Zw=/%7C/g,Uv=/%7D/g,e2=/%20/g;function Cd(t){return t==null?"":encodeURI(""+t).replace(Zw,"|").replace(Jw,"[").replace(Yw,"]")}function t2(t){return Cd(t).replace($v,"{").replace(Uv,"}").replace(Fv,"^")}function Au(t){return Cd(t).replace(Lv,"%2B").replace(e2,"+").replace(Vv,"%23").replace(Hw,"%26").replace(Xw,"`").replace($v,"{").replace(Uv,"}").replace(Fv,"^")}function n2(t){return Au(t).replace(Kw,"%3D")}function r2(t){return Cd(t).replace(Vv,"%23").replace(Qw,"%3F")}function i2(t){return r2(t).replace(Gw,"%2F")}function Ao(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const s2=/\/$/,o2=t=>t.replace(s2,"");function qc(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),s=e.slice(l,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=u2(r??e,n),{fullPath:r+s+o,path:r,query:i,hash:Ao(o)}}function a2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function l2(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&fs(e.matched[r],n.matched[i])&&Bv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!c2(t[n],e[n]))return!1;return!0}function c2(t,e){return On(t)?cp(t,e):On(e)?cp(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function cp(t,e){return On(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function u2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Vr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ru=function(t){return t.pop="pop",t.push="push",t}({}),Wc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function d2(t){if(!t)if(Ji){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),o2(t)}const h2=/^[^#]+#/;function f2(t,e){return t.replace(h2,"#")+e}function p2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jl=()=>({left:window.scrollX,top:window.scrollY});function m2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=p2(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function up(t,e){return(history.state?history.state.position-e:-1)+t}const Pu=new Map;function g2(t,e){Pu.set(t,e)}function v2(t){const e=Pu.get(t);return Pu.delete(t),e}function y2(t){return typeof t=="string"||t&&typeof t=="object"}function zv(t){return typeof t=="string"||typeof t=="symbol"}let wt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const jv=Symbol("");wt.MATCHER_NOT_FOUND+"",wt.NAVIGATION_GUARD_REDIRECT+"",wt.NAVIGATION_ABORTED+"",wt.NAVIGATION_CANCELLED+"",wt.NAVIGATION_DUPLICATED+"";function ps(t,e){return et(new Error,{type:t,[jv]:!0},e)}function rr(t,e){return t instanceof Error&&jv in t&&(e==null||!!(t.type&e))}const _2=["params","query","hash"];function b2(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of _2)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function w2(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(Lv," "),s=i.indexOf("="),o=Ao(s<0?i:i.slice(0,s)),a=s<0?null:Ao(i.slice(s+1));if(o in e){let l=e[o];On(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function dp(t){let e="";for(let n in t){const r=t[n];if(n=n2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(On(r)?r.map(i=>i&&Au(i)):[r&&Au(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function E2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=On(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const I2=Symbol(""),hp=Symbol(""),ql=Symbol(""),kd=Symbol(""),Nu=Symbol("");function Hs(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Br(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const h=g=>{g===!1?l(ps(wt.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):y2(g)?l(ps(wt.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),a())},f=s(()=>t.call(r&&r.instances[i],e,n,h));let m=Promise.resolve(f);t.length<3&&(m=m.then(h)),m.catch(g=>l(g))})}function Hc(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Mv(l)){const h=(l.__vccOpts||l)[e];h&&s.push(Br(h,n,r,o,a,i))}else{let h=l();s.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const m=Ww(f)?f.default:f;o.mods[a]=f,o.components[a]=m;const g=(m.__vccOpts||m)[e];return g&&Br(g,n,r,o,a,i)()}))}}return s}function T2(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(h=>fs(h,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(h=>fs(h,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let C2=()=>location.protocol+"//"+location.host;function qv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let o=i.includes(t.slice(s))?t.slice(s).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),lp(a,"")}return lp(n,t)+r+i}function k2(t,e,n,r){let i=[],s=[],o=null;const a=({state:g})=>{const v=qv(t,location),_=n.value,u=e.value;let w=0;if(g){if(n.value=v,e.value=g,o&&o===_){o=null;return}w=u?g.position-u.position:0}else r(v);i.forEach(C=>{C(n.value,_,{delta:w,type:Ru.pop,direction:w?w>0?Wc.forward:Wc.back:Wc.unknown})})};function l(){o=n.value}function h(g){i.push(g);const v=()=>{const _=i.indexOf(g);_>-1&&i.splice(_,1)};return s.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(et({},g.state,{scroll:jl()}),"")}}function m(){for(const g of s)g();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:m}}function fp(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?jl():null}}function x2(t){const{history:e,location:n}=window,r={value:qv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,h,f){const m=t.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+l:C2()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),i.value=h}catch(v){console.error(v),n[f?"replace":"assign"](g)}}function o(l,h){s(l,et({},e.state,fp(i.value.back,l,i.value.forward,!0),h,{position:i.value.position}),!0),r.value=l}function a(l,h){const f=et({},i.value,e.state,{forward:l,scroll:jl()});s(f.current,f,!0),s(l,et({},fp(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function S2(t){t=d2(t);const e=x2(t),n=k2(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=et({location:"",base:t,go:r,createHref:f2.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function A2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),S2(t)}let Ci=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var At=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(At||{});const R2={type:Ci.Static,value:""},P2=/[a-zA-Z0-9_]/;function N2(t){if(!t)return[[]];if(t==="/")return[[R2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=At.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,h="",f="";function m(){h&&(n===At.Static?s.push({type:Ci.Static,value:h}):n===At.Param||n===At.ParamRegExp||n===At.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Ci.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==At.ParamRegExp){r=n,n=At.EscapeNext;continue}switch(n){case At.Static:l==="/"?(h&&m(),o()):l===":"?(m(),n=At.Param):g();break;case At.EscapeNext:g(),n=r;break;case At.Param:l==="("?n=At.ParamRegExp:P2.test(l)?g():(m(),n=At.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case At.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=At.ParamRegExpEnd:f+=l;break;case At.ParamRegExpEnd:m(),n=At.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===At.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),m(),o(),i}const pp="[^/]+?",O2={sensitive:!1,strict:!1,start:!0,end:!0};var en=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(en||{});const D2=/[.+*?^${}()[\]/\\]/g;function M2(t,e){const n=et({},O2,e),r=[];let i=n.start?"^":"";const s=[];for(const h of t){const f=h.length?[]:[en.Root];n.strict&&!h.length&&(i+="/");for(let m=0;m<h.length;m++){const g=h[m];let v=en.Segment+(n.sensitive?en.BonusCaseSensitive:0);if(g.type===Ci.Static)m||(i+="/"),i+=g.value.replace(D2,"\\$&"),v+=en.Static;else if(g.type===Ci.Param){const{value:_,repeatable:u,optional:w,regexp:C}=g;s.push({name:_,repeatable:u,optional:w});const R=C||pp;if(R!==pp){v+=en.BonusCustomRegExp;try{`${R}`}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+M.message)}}let V=u?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;m||(V=w&&h.length<2?`(?:/${V})`:"/"+V),w&&(V+="?"),i+=V,v+=en.Dynamic,w&&(v+=en.BonusOptional),u&&(v+=en.BonusRepeatable),R===".*"&&(v+=en.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=en.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(h){const f=h.match(o),m={};if(!f)return null;for(let g=1;g<f.length;g++){const v=f[g]||"",_=s[g-1];m[_.name]=v&&_.repeatable?v.split("/"):v}return m}function l(h){let f="",m=!1;for(const g of t){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const v of g)if(v.type===Ci.Static)f+=v.value;else if(v.type===Ci.Param){const{value:_,repeatable:u,optional:w}=v,C=_ in h?h[_]:"";if(On(C)&&!u)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=On(C)?C.join("/"):C;if(!R)if(w)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${_}"`);f+=R}}return f||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function V2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===en.Static+en.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===en.Static+en.Segment?1:-1:0}function Wv(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=V2(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(mp(r))return 1;if(mp(i))return-1}return i.length-r.length}function mp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const L2={strict:!1,end:!0,sensitive:!1};function F2(t,e,n){const r=M2(N2(t.path),n),i=et(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function $2(t,e){const n=[],r=new Map;e=ap(L2,e);function i(m){return r.get(m)}function s(m,g,v){const _=!v,u=vp(m);u.aliasOf=v&&v.record;const w=ap(e,m),C=[u];if("alias"in m){const M=typeof m.alias=="string"?[m.alias]:m.alias;for(const F of M)C.push(vp(et({},u,{components:v?v.record.components:u.components,path:F,aliasOf:v?v.record:u})))}let R,V;for(const M of C){const{path:F}=M;if(g&&F[0]!=="/"){const z=g.record.path,k=z[z.length-1]==="/"?"":"/";M.path=g.record.path+(F&&k+F)}if(R=F2(M,g,w),v?v.alias.push(R):(V=V||R,V!==R&&V.alias.push(R),_&&m.name&&!yp(R)&&o(m.name)),Hv(R)&&l(R),u.children){const z=u.children;for(let k=0;k<z.length;k++)s(z[k],R,v&&v.children[k])}v=v||R}return V?()=>{o(V)}:ho}function o(m){if(zv(m)){const g=r.get(m);g&&(r.delete(m),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(m);g>-1&&(n.splice(g,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function a(){return n}function l(m){const g=z2(m,n);n.splice(g,0,m),m.record.name&&!yp(m)&&r.set(m.record.name,m)}function h(m,g){let v,_={},u,w;if("name"in m&&m.name){if(v=r.get(m.name),!v)throw ps(wt.MATCHER_NOT_FOUND,{location:m});w=v.record.name,_=et(gp(g.params,v.keys.filter(V=>!V.optional).concat(v.parent?v.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),m.params&&gp(m.params,v.keys.map(V=>V.name))),u=v.stringify(_)}else if(m.path!=null)u=m.path,v=n.find(V=>V.re.test(u)),v&&(_=v.parse(u),w=v.record.name);else{if(v=g.name?r.get(g.name):n.find(V=>V.re.test(g.path)),!v)throw ps(wt.MATCHER_NOT_FOUND,{location:m,currentLocation:g});w=v.record.name,_=et({},g.params,m.params),u=v.stringify(_)}const C=[];let R=v;for(;R;)C.unshift(R.record),R=R.parent;return{name:w,path:u,params:_,matched:C,meta:B2(C)}}t.forEach(m=>s(m));function f(){n.length=0,r.clear()}return{addRoute:s,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function gp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:U2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function U2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function yp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B2(t){return t.reduce((e,n)=>et(e,n.meta),{})}function z2(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Wv(t,e[s])<0?r=s:n=s+1}const i=j2(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function j2(t){let e=t;for(;e=e.parent;)if(Hv(e)&&Wv(t,e)===0)return e}function Hv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _p(t){const e=fn(ql),n=fn(kd),r=Ce(()=>{const l=Ie(t.to);return e.resolve(l)}),i=Ce(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],m=n.matched;if(!f||!m.length)return-1;const g=m.findIndex(fs.bind(null,f));if(g>-1)return g;const v=bp(l[h-2]);return h>1&&bp(f)===v&&m[m.length-1].path!==v?m.findIndex(fs.bind(null,l[h-2])):g}),s=Ce(()=>i.value>-1&&K2(n.params,r.value.params)),o=Ce(()=>i.value>-1&&i.value===n.matched.length-1&&Bv(n.params,r.value.params));function a(l={}){if(G2(l)){const h=e[Ie(t.replace)?"replace":"push"](Ie(t.to)).catch(ho);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function q2(t){return t.length===1?t[0]:t}const W2=Zg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_p,setup(t,{slots:e}){const n=Bo(_p(t)),{options:r}=fn(ql),i=Ce(()=>({[wp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&q2(e.default(n));return t.custom?s:Td("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),H2=W2;function G2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function K2(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!On(i)||i.length!==r.length||r.some((s,o)=>s.valueOf()!==i[o].valueOf()))return!1}return!0}function bp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wp=(t,e,n)=>t??e??n,Q2=Zg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=fn(Nu),i=Ce(()=>t.route||r.value),s=fn(hp,0),o=Ce(()=>{let h=Ie(s);const{matched:f}=i.value;let m;for(;(m=f[h])&&!m.components;)h++;return h}),a=Ce(()=>i.value.matched[o.value]);so(hp,Ce(()=>o.value+1)),so(I2,a),so(Nu,i);const l=pe();return Yt(()=>[l.value,a.value,t.name],([h,f,m],[g,v,_])=>{f&&(f.instances[m]=h,v&&v!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),h&&f&&(!v||!fs(f,v)||!g)&&(f.enterCallbacks[m]||[]).forEach(u=>u(h))},{flush:"post"}),()=>{const h=i.value,f=t.name,m=a.value,g=m&&m.components[f];if(!g)return Ep(n.default,{Component:g,route:h});const v=m.props[f],_=v?v===!0?h.params:typeof v=="function"?v(h):v:null,w=Td(g,et({},_,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(m.instances[f]=null)},ref:l}));return Ep(n.default,{Component:w,route:h})||w}}});function Ep(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gv=Q2;function J2(t){const e=$2(t.routes,t),n=t.parseQuery||w2,r=t.stringifyQuery||dp,i=t.history,s=Hs(),o=Hs(),a=Hs(),l=Bb(Vr);let h=Vr;Ji&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=jc.bind(null,se=>""+se),m=jc.bind(null,i2),g=jc.bind(null,Ao);function v(se,de){let he,be;return zv(se)?(he=e.getRecordMatcher(se),be=de):be=se,e.addRoute(be,he)}function _(se){const de=e.getRecordMatcher(se);de&&e.removeRoute(de)}function u(){return e.getRoutes().map(se=>se.record)}function w(se){return!!e.getRecordMatcher(se)}function C(se,de){if(de=et({},de||l.value),typeof se=="string"){const p=qc(n,se,de.path),G=e.resolve({path:p.path},de),L=i.createHref(p.fullPath);return et(p,G,{params:g(G.params),hash:Ao(p.hash),redirectedFrom:void 0,href:L})}let he;if(se.path!=null)he=et({},se,{path:qc(n,se.path,de.path).path});else{const p=et({},se.params);for(const G in p)p[G]==null&&delete p[G];he=et({},se,{params:m(p)}),de.params=m(de.params)}const be=e.resolve(he,de),ke=se.hash||"";be.params=f(g(be.params));const q=a2(r,et({},se,{hash:t2(ke),path:be.path})),U=i.createHref(q);return et({fullPath:q,hash:ke,query:r===dp?E2(se.query):se.query||{}},be,{redirectedFrom:void 0,href:U})}function R(se){return typeof se=="string"?qc(n,se,l.value.path):et({},se)}function V(se,de){if(h!==se)return ps(wt.NAVIGATION_CANCELLED,{from:de,to:se})}function M(se){return k(se)}function F(se){return M(et(R(se),{replace:!0}))}function z(se,de){const he=se.matched[se.matched.length-1];if(he&&he.redirect){const{redirect:be}=he;let ke=typeof be=="function"?be(se,de):be;return typeof ke=="string"&&(ke=ke.includes("?")||ke.includes("#")?ke=R(ke):{path:ke},ke.params={}),et({query:se.query,hash:se.hash,params:ke.path!=null?{}:se.params},ke)}}function k(se,de){const he=h=C(se),be=l.value,ke=se.state,q=se.force,U=se.replace===!0,p=z(he,be);if(p)return k(et(R(p),{state:typeof p=="object"?et({},ke,p.state):ke,force:q,replace:U}),de||he);const G=he;G.redirectedFrom=de;let L;return!q&&l2(r,be,he)&&(L=ps(wt.NAVIGATION_DUPLICATED,{to:G,from:be}),te(be,be,!0,!1)),(L?Promise.resolve(L):P(G,be)).catch(N=>rr(N)?rr(N,wt.NAVIGATION_GUARD_REDIRECT)?N:_e(N):ue(N,G,be)).then(N=>{if(N){if(rr(N,wt.NAVIGATION_GUARD_REDIRECT))return k(et({replace:U},R(N.to),{state:typeof N.to=="object"?et({},ke,N.to.state):ke,force:q}),de||G)}else N=b(G,be,!0,U,ke);return O(G,be,N),N})}function E(se,de){const he=V(se,de);return he?Promise.reject(he):Promise.resolve()}function T(se){const de=ye.values().next().value;return de&&typeof de.runWithContext=="function"?de.runWithContext(se):se()}function P(se,de){let he;const[be,ke,q]=T2(se,de);he=Hc(be.reverse(),"beforeRouteLeave",se,de);for(const p of be)p.leaveGuards.forEach(G=>{he.push(Br(G,se,de))});const U=E.bind(null,se,de);return he.push(U),we(he).then(()=>{he=[];for(const p of s.list())he.push(Br(p,se,de));return he.push(U),we(he)}).then(()=>{he=Hc(ke,"beforeRouteUpdate",se,de);for(const p of ke)p.updateGuards.forEach(G=>{he.push(Br(G,se,de))});return he.push(U),we(he)}).then(()=>{he=[];for(const p of q)if(p.beforeEnter)if(On(p.beforeEnter))for(const G of p.beforeEnter)he.push(Br(G,se,de));else he.push(Br(p.beforeEnter,se,de));return he.push(U),we(he)}).then(()=>(se.matched.forEach(p=>p.enterCallbacks={}),he=Hc(q,"beforeRouteEnter",se,de,T),he.push(U),we(he))).then(()=>{he=[];for(const p of o.list())he.push(Br(p,se,de));return he.push(U),we(he)}).catch(p=>rr(p,wt.NAVIGATION_CANCELLED)?p:Promise.reject(p))}function O(se,de,he){a.list().forEach(be=>T(()=>be(se,de,he)))}function b(se,de,he,be,ke){const q=V(se,de);if(q)return q;const U=de===Vr,p=Ji?history.state:{};he&&(be||U?i.replace(se.fullPath,et({scroll:U&&p&&p.scroll},ke)):i.push(se.fullPath,ke)),l.value=se,te(se,de,he,U),_e()}let S;function I(){S||(S=i.listen((se,de,he)=>{if(!X.listening)return;const be=C(se),ke=z(be,X.currentRoute.value);if(ke){k(et(ke,{replace:!0,force:!0}),be).catch(ho);return}h=be;const q=l.value;Ji&&g2(up(q.fullPath,he.delta),jl()),P(be,q).catch(U=>rr(U,wt.NAVIGATION_ABORTED|wt.NAVIGATION_CANCELLED)?U:rr(U,wt.NAVIGATION_GUARD_REDIRECT)?(k(et(R(U.to),{force:!0}),be).then(p=>{rr(p,wt.NAVIGATION_ABORTED|wt.NAVIGATION_DUPLICATED)&&!he.delta&&he.type===Ru.pop&&i.go(-1,!1)}).catch(ho),Promise.reject()):(he.delta&&i.go(-he.delta,!1),ue(U,be,q))).then(U=>{U=U||b(be,q,!1),U&&(he.delta&&!rr(U,wt.NAVIGATION_CANCELLED)?i.go(-he.delta,!1):he.type===Ru.pop&&rr(U,wt.NAVIGATION_ABORTED|wt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),O(be,q,U)}).catch(ho)}))}let Q=Hs(),re=Hs(),$;function ue(se,de,he){_e(se);const be=re.list();return be.length?be.forEach(ke=>ke(se,de,he)):console.error(se),Promise.reject(se)}function ne(){return $&&l.value!==Vr?Promise.resolve():new Promise((se,de)=>{Q.add([se,de])})}function _e(se){return $||($=!se,I(),Q.list().forEach(([de,he])=>se?he(se):de()),Q.reset()),se}function te(se,de,he,be){const{scrollBehavior:ke}=t;if(!Ji||!ke)return Promise.resolve();const q=!he&&v2(up(se.fullPath,0))||(be||!he)&&history.state&&history.state.scroll||null;return jo().then(()=>ke(se,de,q)).then(U=>U&&m2(U)).catch(U=>ue(U,se,de))}const Z=se=>i.go(se);let Ee;const ye=new Set,X={currentRoute:l,listening:!0,addRoute:v,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:u,resolve:C,options:t,push:M,replace:F,go:Z,back:()=>Z(-1),forward:()=>Z(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:ne,install(se){se.component("RouterLink",H2),se.component("RouterView",Gv),se.config.globalProperties.$router=X,Object.defineProperty(se.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(l)}),Ji&&!Ee&&l.value===Vr&&(Ee=!0,M(i.location).catch(be=>{}));const de={};for(const be in Vr)Object.defineProperty(de,be,{get:()=>l.value[be],enumerable:!0});se.provide(ql,X),se.provide(kd,Mg(de)),se.provide(Nu,l);const he=se.unmount;ye.add(se),se.unmount=function(){ye.delete(se),ye.size<1&&(h=Vr,S&&S(),S=null,l.value=Vr,Ee=!1,$=!1),he()}}};function we(se){return se.reduce((de,he)=>de.then(()=>T(he)),Promise.resolve())}return X}function xd(){return fn(ql)}function Kv(t){return fn(kd)}const Vt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Y2={__name:"App",setup(t){return(e,n)=>(K(),Tt(Ie(Gv),null,{default:kt(({Component:r,route:i})=>[dt(ei,{name:"app-view",mode:"out-in"},{default:kt(()=>[(K(),Tt(iv(r),{key:i.fullPath}))]),_:2},1024)]),_:1}))}},X2=Vt(Y2,[["__scopeId","data-v-b9a41e6f"]]),Lt=[];for(let t=0;t<256;++t)Lt.push((t+256).toString(16).slice(1));function Z2(t,e=0){return(Lt[t[e+0]]+Lt[t[e+1]]+Lt[t[e+2]]+Lt[t[e+3]]+"-"+Lt[t[e+4]]+Lt[t[e+5]]+"-"+Lt[t[e+6]]+Lt[t[e+7]]+"-"+Lt[t[e+8]]+Lt[t[e+9]]+"-"+Lt[t[e+10]]+Lt[t[e+11]]+Lt[t[e+12]]+Lt[t[e+13]]+Lt[t[e+14]]+Lt[t[e+15]]).toLowerCase()}let Gc;const eE=new Uint8Array(16);function tE(){if(!Gc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Gc=crypto.getRandomValues.bind(crypto)}return Gc(eE)}const nE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ip={randomUUID:nE};function rE(t,e,n){var i;t=t||{};const r=t.random??((i=t.rng)==null?void 0:i.call(t))??tE();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Z2(r)}function Cn(t,e,n){return Ip.randomUUID&&!t?Ip.randomUUID():rE(t)}const iE=()=>{};var Tp={};/**
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
 */const Qv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,f=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|h>>6,v=h&63;l||(v=64,o||(g=64)),r.push(n[f],n[m],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||m==null)throw new oE;const g=s<<2|a>>4;if(r.push(g),h!==64){const v=a<<4&240|h>>2;if(r.push(v),m!==64){const _=h<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aE=function(t){const e=Qv(t);return Jv.encodeByteArray(e,!0)},rl=function(t){return aE(t).replace(/\./g,"")},Yv=function(t){try{return Jv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cE=()=>lE().__FIREBASE_DEFAULTS__,uE=()=>{if(typeof process>"u"||typeof Tp>"u")return;const t=Tp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yv(t[1]);return e&&JSON.parse(e)},Wl=()=>{try{return iE()||cE()||uE()||dE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xv=t=>{var e,n;return(n=(e=Wl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},hE=t=>{const e=Xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zv=()=>{var t;return(t=Wl())==null?void 0:t.config},ey=t=>{var e;return(e=Wl())==null?void 0:e[`_${t}`]};/**
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
 */class fE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ty(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function pE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),""].join(".")}const fo={};function mE(){const t={prod:[],emulator:[]};for(const e of Object.keys(fo))fo[e]?t.emulator.push(e):t.prod.push(e);return t}function gE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Cp=!1;function ny(t,e){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||fo[t]===e||fo[t]||Cp)return;fo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=mE().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Cp=!0,o()},g}function f(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=gE(r),v=n("text"),_=document.getElementById(v)||document.createElement("span"),u=n("learnmore"),w=document.getElementById(u)||document.createElement("a"),C=n("preprendIcon"),R=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const V=g.element;a(V),f(w,u);const M=h();l(R,C),V.append(R,_,w,M),document.body.appendChild(V)}s?(_.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function yE(){var e;const t=(e=Wl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _E(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wE(){const t=Xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EE(){return!yE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ad(){try{return typeof indexedDB=="object"}catch{return!1}}function Rd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function ry(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const IE="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IE,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,a,r)}}function TE(t,e){return t.replace(CE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const CE=/\{\$([^}]+)}/g;function kE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(kp(s)&&kp(o)){if(!ti(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kp(t){return t!==null&&typeof t=="object"}/**
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
 */function Go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xE(t,e){const n=new SE(t,e);return n.subscribe.bind(n)}class SE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}/**
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
 */const RE=1e3,PE=2,NE=4*60*60*1e3,OE=.5;function xp(t,e=RE,n=PE){const r=e*Math.pow(n,t),i=Math.round(OE*r*(Math.random()-.5)*2);return Math.min(NE,r+i)}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ii="[DEFAULT]";/**
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
 */class DE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VE(e))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ii){return this.instances.has(e)}getOptions(e=Ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ME(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ii){return this.component?this.component.multipleInstances?e:Ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ME(t){return t===Ii?void 0:t}function VE(t){return t.instantiationMode==="EAGER"}/**
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
 */var We;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(We||(We={}));const FE={debug:We.DEBUG,verbose:We.VERBOSE,info:We.INFO,warn:We.WARN,error:We.ERROR,silent:We.SILENT},$E=We.INFO,UE={[We.DEBUG]:"log",[We.VERBOSE]:"log",[We.INFO]:"info",[We.WARN]:"warn",[We.ERROR]:"error"},BE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hl{constructor(e){this.name=e,this._logLevel=$E,this._logHandler=BE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in We))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,We.DEBUG,...e),this._logHandler(this,We.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,We.VERBOSE,...e),this._logHandler(this,We.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,We.INFO,...e),this._logHandler(this,We.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,We.WARN,...e),this._logHandler(this,We.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,We.ERROR,...e),this._logHandler(this,We.ERROR,...e)}}const zE=(t,e)=>e.some(n=>t instanceof n);let Sp,Ap;function jE(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qE(){return Ap||(Ap=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iy=new WeakMap,Ou=new WeakMap,sy=new WeakMap,Qc=new WeakMap,Pd=new WeakMap;function WE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iy.set(n,t)}).catch(()=>{}),Pd.set(e,t),e}function HE(t){if(Ou.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ou.set(t,e)}let Du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GE(t){Du=t(Du)}function KE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return sy.set(r,e.sort?e.sort():[e]),Kr(r)}:qE().includes(t)?function(...e){return t.apply(Jc(this),e),Kr(iy.get(this))}:function(...e){return Kr(t.apply(Jc(this),e))}}function QE(t){return typeof t=="function"?KE(t):(t instanceof IDBTransaction&&HE(t),zE(t,jE())?new Proxy(t,Du):t)}function Kr(t){if(t instanceof IDBRequest)return WE(t);if(Qc.has(t))return Qc.get(t);const e=QE(t);return e!==t&&(Qc.set(t,e),Pd.set(e,t)),e}const Jc=t=>Pd.get(t);function oy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kr(o.result),l.oldVersion,l.newVersion,Kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const JE=["get","getKey","getAll","getAllKeys","count"],YE=["put","add","delete","clear"],Yc=new Map;function Rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return Yc.set(e,s),s}GE(t=>({...t,get:(e,n,r)=>Rp(e,n)||t.get(e,n,r),has:(e,n)=>!!Rp(e,n)||t.has(e,n)}));/**
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
 */class XE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mu="@firebase/app",Pp="0.14.9";/**
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
 */const yr=new Hl("@firebase/app"),eI="@firebase/app-compat",tI="@firebase/analytics-compat",nI="@firebase/analytics",rI="@firebase/app-check-compat",iI="@firebase/app-check",sI="@firebase/auth",oI="@firebase/auth-compat",aI="@firebase/database",lI="@firebase/data-connect",cI="@firebase/database-compat",uI="@firebase/functions",dI="@firebase/functions-compat",hI="@firebase/installations",fI="@firebase/installations-compat",pI="@firebase/messaging",mI="@firebase/messaging-compat",gI="@firebase/performance",vI="@firebase/performance-compat",yI="@firebase/remote-config",_I="@firebase/remote-config-compat",bI="@firebase/storage",wI="@firebase/storage-compat",EI="@firebase/firestore",II="@firebase/ai",TI="@firebase/firestore-compat",CI="firebase",kI="12.10.0";/**
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
 */const Vu="[DEFAULT]",xI={[Mu]:"fire-core",[eI]:"fire-core-compat",[nI]:"fire-analytics",[tI]:"fire-analytics-compat",[iI]:"fire-app-check",[rI]:"fire-app-check-compat",[sI]:"fire-auth",[oI]:"fire-auth-compat",[aI]:"fire-rtdb",[lI]:"fire-data-connect",[cI]:"fire-rtdb-compat",[uI]:"fire-fn",[dI]:"fire-fn-compat",[hI]:"fire-iid",[fI]:"fire-iid-compat",[pI]:"fire-fcm",[mI]:"fire-fcm-compat",[gI]:"fire-perf",[vI]:"fire-perf-compat",[yI]:"fire-rc",[_I]:"fire-rc-compat",[bI]:"fire-gcs",[wI]:"fire-gcs-compat",[EI]:"fire-fst",[TI]:"fire-fst-compat",[II]:"fire-vertex","fire-js":"fire-js",[CI]:"fire-js-all"};/**
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
 */const il=new Map,SI=new Map,Lu=new Map;function Np(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(Lu.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of il.values())Np(n,t);for(const n of SI.values())Np(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const AI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new Ui("app","Firebase",AI);/**
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
 */class RI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=kI;function ay(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Vu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Qr.create("bad-app-name",{appName:String(i)});if(n||(n=Zv()),!n)throw Qr.create("no-options");const s=il.get(i);if(s){if(ti(n,s.options)&&ti(r,s.config))return s;throw Qr.create("duplicate-app",{appName:i})}const o=new LE(i);for(const l of Lu.values())o.addComponent(l);const a=new RI(n,r,o);return il.set(i,a),a}function Nd(t=Vu){const e=il.get(t);if(!e&&t===Vu&&Zv())return ay();if(!e)throw Qr.create("no-app",{appName:t});return e}function bn(t,e,n){let r=xI[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(o.join(" "));return}Yn(new Dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const PI="firebase-heartbeat-database",NI=1,Ro="firebase-heartbeat-store";let Xc=null;function ly(){return Xc||(Xc=oy(PI,NI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function OI(t){try{const n=(await ly()).transaction(Ro),r=await n.objectStore(Ro).get(cy(t));return await n.done,r}catch(e){if(e instanceof Mn)yr.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function Op(t,e){try{const r=(await ly()).transaction(Ro,"readwrite");await r.objectStore(Ro).put(e,cy(t)),await r.done}catch(n){if(n instanceof Mn)yr.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function cy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DI=1024,MI=30;class VI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>MI){const o=$I(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dp(),{heartbeatsToSend:r,unsentEntries:i}=LI(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return yr.warn(n),""}}}function Dp(){return new Date().toISOString().substring(0,10)}function LI(t,e=DI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ad()?Rd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mp(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}function $I(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function UI(t){Yn(new Dn("platform-logger",e=>new XE(e),"PRIVATE")),Yn(new Dn("heartbeat",e=>new VI(e),"PRIVATE")),bn(Mu,Pp,t),bn(Mu,Pp,"esm2020"),bn("fire-js","")}UI("");var BI="firebase",zI="12.10.0";/**
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
 */bn(BI,zI,"app");function uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jI=uy,dy=new Ui("auth","Firebase",uy());/**
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
 */const sl=new Hl("@firebase/auth");function qI(t,...e){sl.logLevel<=We.WARN&&sl.warn(`Auth (${Is}): ${t}`,...e)}function Fa(t,...e){sl.logLevel<=We.ERROR&&sl.error(`Auth (${Is}): ${t}`,...e)}/**
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
 */function En(t,...e){throw Dd(t,...e)}function Sn(t,...e){return Dd(t,...e)}function Od(t,e,n){const r={...jI(),[e]:n};return new Ui("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return Od(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function WI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(t,"argument-error"),Od(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dy.create(t,...e)}function Me(t,e,...n){if(!t)throw Dd(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fa(e),new Error(e)}function _r(t,e){t||ur(e)}/**
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
 */function Fu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function HI(){return Vp()==="http:"||Vp()==="https:"}function Vp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function GI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HI()||Sd()||"connection"in navigator)?navigator.onLine:!0}function KI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,_r(n>e,"Short delay should be less than long delay!"),this.isMobile=vE()||bE()}get(){return GI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Md(t,e){_r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YI=new Ko(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Cr(t,e,n,r,i={}){return fy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Go({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...s};return _E()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Es(t.emulatorConfig.host)&&(h.credentials="include"),hy.fetch()(await py(t,t.config.apiHost,n,a),h)})}async function fy(t,e,n){t._canInitEmulator=!1;const r={...QI,...e};try{const i=new ZI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ia(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Od(t,f,h);En(t,f)}}catch(i){if(i instanceof Mn)throw i;En(t,"network-request-failed",{message:String(i)})}}async function Qo(t,e,n,r,i={}){const s=await Cr(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function py(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Md(t.config,i):`${t.config.apiScheme}://${i}`;return JI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function XI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),YI.get())})}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}function Lp(t){return t!==void 0&&t.enterprise!==void 0}class eT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tT(t,e){return Cr(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
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
 */async function nT(t,e){return Cr(t,"POST","/v1/accounts:delete",e)}async function ol(t,e){return Cr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rT(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=Vd(r);Me(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:po(Zc(i.auth_time)),issuedAtTime:po(Zc(i.iat)),expirationTime:po(Zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zc(t){return Number(t)*1e3}function Vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yv(n);return i?JSON.parse(i):(Fa("Failed to decode base64 JWT payload"),null)}catch(i){return Fa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fp(t){const e=Vd(t);return Me(e,"internal-error"),Me(typeof e.exp<"u","internal-error"),Me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&iT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function al(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Po(t,ol(e,{idToken:n}));Me(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?my(i.providerUserInfo):[],o=aT(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new $u(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function oT(t){const e=vt(t);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function my(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function lT(t,e){const n=await fy(t,{},async()=>{const r=Go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await py(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Es(t.emulatorConfig.host)&&(l.credentials="include"),hy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cT(t,e){return Cr(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
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
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Me(e.idToken,"internal-error"),Me(typeof e.idToken<"u","internal-error"),Me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Me(e.length!==0,"internal-error");const n=Fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ss;return r&&(Me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Me(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Me(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function Lr(t,e){Me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new sT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $u(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return Me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rT(this,e)}reload(){return oT(this)}_assign(e){this!==e&&(Me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Po(this,nT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:v,providerData:_,stsTokenManager:u}=n;Me(m&&u,e,"internal-error");const w=ss.fromJSON(this.name,u);Me(typeof m=="string",e,"internal-error"),Lr(r,e.name),Lr(i,e.name),Me(typeof g=="boolean",e,"internal-error"),Me(typeof v=="boolean",e,"internal-error"),Lr(s,e.name),Lr(o,e.name),Lr(a,e.name),Lr(l,e.name),Lr(h,e.name),Lr(f,e.name);const C=new kn({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:w,createdAt:h,lastLoginAt:f});return _&&Array.isArray(_)&&(C.providerData=_.map(R=>({...R}))),l&&(C._redirectEventId=l),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new ss;i.updateFromServerResponse(n);const s=new kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Me(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?my(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ss;a.updateFromIdToken(r);const l=new kn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $u(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
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
 */const $p=new Map;function dr(t){_r(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(_r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
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
 */function $a(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$a(this.userKey,i.apiKey,s),this.fullPersistenceKey=$a("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ol(this.auth,{idToken:e}).catch(()=>{});return n?kn._fromGetAccountInfoResponse(this.auth,n,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(dr(Up),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dr(Up);const o=$a(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const g=await ol(e,{idToken:f}).catch(()=>{});if(!g)break;m=await kn._fromGetAccountInfoResponse(e,g,f)}else m=kn._fromJSON(e,f);h!==s&&(a=m),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new os(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new os(s,e,r))}}/**
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
 */function Bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(by(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ey(e))return"Blackberry";if(Iy(e))return"Webos";if(yy(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vy(t=Xt()){return/firefox\//i.test(t)}function yy(t=Xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(t=Xt()){return/crios\//i.test(t)}function by(t=Xt()){return/iemobile/i.test(t)}function wy(t=Xt()){return/android/i.test(t)}function Ey(t=Xt()){return/blackberry/i.test(t)}function Iy(t=Xt()){return/webos/i.test(t)}function Ld(t=Xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uT(t=Xt()){var e;return Ld(t)&&!!((e=window.navigator)!=null&&e.standalone)}function dT(){return wE()&&document.documentMode===10}function Ty(t=Xt()){return Ld(t)||wy(t)||Iy(t)||Ey(t)||/windows phone/i.test(t)||by(t)}/**
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
 */function Cy(t,e=[]){let n;switch(t){case"Browser":n=Bp(Xt());break;case"Worker":n=`${Bp(Xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
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
 */class hT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fT(t,e={}){return Cr(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
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
 */const pT=6;class mT{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??pT,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class gT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zp(this),this.idTokenSubscription=new zp(this),this.beforeStateQueue=new hT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ol(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(pr(this));const n=e?vt(e):null;return n&&Me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fT(this),n=new mT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;Me(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Me(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&qI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ci(t){return vt(t)}class zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=xE(n=>this.observer=n)}get next(){return Me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vT(t){Gl=t}function ky(t){return Gl.loadJS(t)}function yT(){return Gl.recaptchaEnterpriseScript}function _T(){return Gl.gapiScript}function bT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wT{constructor(){this.enterprise=new ET}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ET{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const IT="recaptcha-enterprise",xy="NO_RECAPTCHA";class TT{constructor(e){this.type=IT,this.auth=ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new eT(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Lp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(xy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wT().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Lp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=yT();l.length!==0&&(l+=a),ky(l).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function jp(t,e,n,r=!1,i=!1){const s=new TT(t);let o;if(i)o=xy;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Uu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await jp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await jp(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function CT(t,e){const n=Bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ti(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function kT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xT(t,e,n){const r=ci(t);Me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Sy(e),{host:o,port:a}=ST(e),l=a===null?"":`:${a}`,h={url:`${s}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Me(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Me(ti(h,r.config.emulator)&&ti(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Es(o)?(ty(`${s}//${o}${l}`),ny("Auth",!0)):AT()}function Sy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ST(t){const e=Sy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function RT(t,e){return Cr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function PT(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}async function NT(t,e){return Cr(t,"POST","/v1/accounts:sendOobCode",Tr(t,e))}async function OT(t,e){return NT(t,e)}/**
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
 */async function DT(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function MT(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
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
 */class No extends Fd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new No(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new No(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,n,"signInWithPassword",PT);case"emailLink":return DT(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uu(e,r,"signUpPassword",RT);case"emailLink":return MT(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function as(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
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
 */const VT="http://localhost";class br extends Fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:VT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Go(n)}return e}}/**
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
 */function LT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FT(t){const e=Qs(Js(t)).link,n=e?Qs(Js(e)).deep_link_id:null,r=Qs(Js(t)).deep_link_id;return(r?Qs(Js(r)).link:null)||r||n||e||t}class $d{constructor(e){const n=Qs(Js(e)),r=n.apiKey??null,i=n.oobCode??null,s=LT(n.mode??null);Me(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=FT(e);try{return new $d(n)}catch{return null}}}/**
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
 */class Ts{constructor(){this.providerId=Ts.PROVIDER_ID}static credential(e,n){return No._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$d.parseLink(n);return Me(r,"argument-error"),No._fromEmailAndCode(e,r.code,r.tenantId)}}Ts.PROVIDER_ID="password";Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cs extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class mo extends Cs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return Me("providerId"in n&&"signInMethod"in n,"argument-error"),br._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return Me(e.idToken||e.accessToken,"argument-error"),br._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return mo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return mo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new mo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class jr extends Cs{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
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
 */class cr extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class qr extends Cs{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
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
 */class Wr extends Cs{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
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
 */async function $T(t,e){return Qo(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
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
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kn._fromIdTokenResponse(e,r,i),o=Wp(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wp(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ll extends Mn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ll(e,n,r,i)}}function Ay(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ll._fromErrorAndOperation(t,s,e,r):s})}async function UT(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function BT(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(pr(r));const i="reauthenticate";try{const s=await Po(t,Ay(r,i,e,t),n);Me(s.idToken,r,"internal-error");const o=Vd(s.idToken);Me(o,r,"internal-error");const{sub:a}=o;return Me(t.uid===a,r,"user-mismatch"),Oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
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
 */async function Ry(t,e,n=!1){if(cn(t.app))return Promise.reject(pr(t));const r="signIn",i=await Ay(t,r,e),s=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zT(t,e){return Ry(ci(t),e)}/**
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
 */async function Py(t){const e=ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jT(t,e,n){if(cn(t.app))return Promise.reject(pr(t));const r=ci(t),o=await Uu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$T).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Py(t),l}),a=await Oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qT(t,e,n){return cn(t.app)?Promise.reject(pr(t)):zT(vt(t),Ts.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Py(t),r})}async function Hp(t,e){const n=vt(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await OT(n.auth,i);s!==t.email&&await t.reload()}function WT(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function HT(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function GT(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function KT(t){return vt(t).signOut()}const cl="__sak";/**
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
 */const QT=1e3,JT=10;class Oy extends Ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oy.type="LOCAL";const YT=Oy;/**
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
 */function XT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),l=await XT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kl.receivers=[];/**
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
 */function Bd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const h=Bd("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Hn(){return window}function eC(t){Hn().location.href=t}/**
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
 */function Vy(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function tC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function rC(){return Vy()?self:null}/**
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
 */const Ly="firebaseLocalStorageDb",iC=1,ul="firebaseLocalStorage",Fy="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ql(t,e){return t.transaction([ul],e?"readwrite":"readonly").objectStore(ul)}function sC(){const t=indexedDB.deleteDatabase(Ly);return new Jo(t).toPromise()}function Bu(){const t=indexedDB.open(Ly,iC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ul,{keyPath:Fy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ul)?e(r):(r.close(),await sC(),e(await Bu()))})})}async function Gp(t,e,n){const r=Ql(t,!0).put({[Fy]:e,value:n});return new Jo(r).toPromise()}async function oC(t,e){const n=Ql(t,!1).get(e),r=await new Jo(n).toPromise();return r===void 0?null:r.value}function Kp(t,e){const n=Ql(t,!0).delete(e);return new Jo(n).toPromise()}const aC=800,lC=3;class $y{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(rC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await tC(),!this.activeServiceWorker)return;this.sender=new ZT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bu();return await Gp(e,cl,"1"),await Kp(e,cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ql(i,!1).getAll();return new Jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$y.type="LOCAL";const cC=$y;new Ko(3e4,6e4);/**
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
 */function Uy(t,e){return e?dr(e):(Me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zd extends Fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uC(t){return Ry(t.auth,new zd(t),t.bypassAuthState)}function dC(t){const{auth:e,user:n}=t;return Me(n,e,"internal-error"),BT(n,new zd(t),t.bypassAuthState)}async function hC(t){const{auth:e,user:n}=t;return Me(n,e,"internal-error"),UT(n,new zd(t),t.bypassAuthState)}/**
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
 */class By{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uC;case"linkViaPopup":case"linkViaRedirect":return hC;case"reauthViaPopup":case"reauthViaRedirect":return dC;default:En(this.auth,"internal-error")}}resolve(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fC=new Ko(2e3,1e4);async function Qp(t,e,n){if(cn(t.app))return Promise.reject(Sn(t,"operation-not-supported-in-this-environment"));const r=ci(t);WI(t,e,Ud);const i=Uy(r,n);return new ki(r,"signInViaPopup",e,i).executeNotNull()}class ki extends By{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Me(e,this.auth,"internal-error"),e}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fC.get())};e()}}ki.currentPopupAction=null;/**
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
 */const pC="pendingRedirect",Ua=new Map;class mC extends By{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await gC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gC(t,e){const n=_C(e),r=yC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vC(t,e){Ua.set(t._key(),e)}function yC(t){return dr(t._redirectPersistence)}function _C(t){return $a(pC,t.config.apiKey,t.name)}async function bC(t,e,n=!1){if(cn(t.app))return Promise.reject(pr(t));const r=ci(t),i=Uy(r,e),o=await new mC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const wC=10*60*1e3;class EC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zy(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jp(e))}saveEventToCache(e){this.cachedEventUids.add(Jp(e)),this.lastProcessedEventTime=Date.now()}}function Jp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zy(t);default:return!1}}/**
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
 */async function TC(t,e={}){return Cr(t,"GET","/v1/projects",e)}/**
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
 */const CC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kC=/^https?/;async function xC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TC(t);for(const n of e)try{if(SC(n))return}catch{}En(t,"unauthorized-domain")}function SC(t){const e=Fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kC.test(n))return!1;if(CC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const AC=new Ko(3e4,6e4);function Yp(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RC(t){return new Promise((e,n)=>{var i,s,o;function r(){Yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yp(),n(Sn(t,"network-request-failed"))},timeout:AC.get()})}if((s=(i=Hn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Hn().gapi)!=null&&o.load)r();else{const a=bT("iframefcb");return Hn()[a]=()=>{gapi.load?r():n(Sn(t,"network-request-failed"))},ky(`${_T()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function PC(t){return Ba=Ba||RC(t),Ba}/**
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
 */const NC=new Ko(5e3,15e3),OC="__/auth/iframe",DC="emulator/auth/iframe",MC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LC(t){const e=t.config;Me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Md(e,DC):`https://${t.config.authDomain}/${OC}`,r={apiKey:e.apiKey,appName:t.name,v:Is},i=VC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Go(r).slice(1)}`}async function FC(t){const e=await PC(t),n=Hn().gapi;return Me(n,t,"internal-error"),e.open({where:document.body,url:LC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=Hn().setTimeout(()=>{s(o)},NC.get());function l(){Hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const $C={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UC=500,BC=600,zC="_blank",jC="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qC(t,e,n,r=UC,i=BC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...$C,width:r.toString(),height:i.toString(),top:s,left:o},h=Xt().toLowerCase();n&&(a=_y(h)?zC:n),vy(h)&&(e=e||jC,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[v,_])=>`${g}${v}=${_},`,"");if(uT(h)&&a!=="_self")return WC(e||"",a),new Xp(null);const m=window.open(e||"",a,f);Me(m,t,"popup-blocked");try{m.focus()}catch{}return new Xp(m)}function WC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HC="__/auth/handler",GC="emulator/auth/handler",KC=encodeURIComponent("fac");async function Zp(t,e,n,r,i,s){Me(t.config.authDomain,t,"auth-domain-config-required"),Me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:i};if(e instanceof Ud){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Cs){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),h=l?`#${KC}=${encodeURIComponent(l)}`:"";return`${QC(t)}?${Go(a).slice(1)}${h}`}function QC({config:t}){return t.emulator?Md(t,GC):`https://${t.authDomain}/${HC}`}/**
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
 */const eu="webStorageSupport";class JC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=My,this._completeRedirectFn=bC,this._overrideRedirectResult=vC}async _openPopup(e,n,r,i){var o;_r((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Zp(e,n,r,Fu(),i);return qC(e,s,Bd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zp(e,n,r,Fu(),i);return eC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FC(e),r=new EC(e);return n.register("authEvent",i=>(Me(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eu,{type:eu},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[eu];s!==void 0&&n(!!s),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||yy()||Ld()}}const YC=JC;var em="@firebase/auth",tm="1.12.1";/**
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
 */class XC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ek(t){Yn(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cy(t)},h=new gT(r,i,s,l);return kT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yn(new Dn("auth-internal",e=>{const n=ci(e.getProvider("auth").getImmediate());return(r=>new XC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(em,tm,ZC(t)),bn(em,tm,"esm2020")}/**
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
 */const tk=5*60,nk=ey("authIdTokenMaxAge")||tk;let nm=null;const rk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nk)return;const i=n==null?void 0:n.token;nm!==i&&(nm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ik(t=Nd()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CT(t,{popupRedirectResolver:YC,persistence:[cC,YT,My]}),r=ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=rk(s.toString());HT(n,o,()=>o(n.currentUser)),WT(n,a=>o(a))}}const i=Xv("auth");return i&&xT(n,`http://${i}`),n}function sk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}vT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ek("Browser");var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,jy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,E){function T(){}T.prototype=E.prototype,k.F=E.prototype,k.prototype=new T,k.prototype.constructor=k,k.D=function(P,O,b){for(var S=Array(arguments.length-2),I=2;I<arguments.length;I++)S[I-2]=arguments[I];return E.prototype[O].apply(P,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,E,T){T||(T=0);const P=Array(16);if(typeof E=="string")for(var O=0;O<16;++O)P[O]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(O=0;O<16;++O)P[O]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=k.g[0],T=k.g[1],O=k.g[2];let b=k.g[3],S;S=E+(b^T&(O^b))+P[0]+3614090360&4294967295,E=T+(S<<7&4294967295|S>>>25),S=b+(O^E&(T^O))+P[1]+3905402710&4294967295,b=E+(S<<12&4294967295|S>>>20),S=O+(T^b&(E^T))+P[2]+606105819&4294967295,O=b+(S<<17&4294967295|S>>>15),S=T+(E^O&(b^E))+P[3]+3250441966&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(b^T&(O^b))+P[4]+4118548399&4294967295,E=T+(S<<7&4294967295|S>>>25),S=b+(O^E&(T^O))+P[5]+1200080426&4294967295,b=E+(S<<12&4294967295|S>>>20),S=O+(T^b&(E^T))+P[6]+2821735955&4294967295,O=b+(S<<17&4294967295|S>>>15),S=T+(E^O&(b^E))+P[7]+4249261313&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(b^T&(O^b))+P[8]+1770035416&4294967295,E=T+(S<<7&4294967295|S>>>25),S=b+(O^E&(T^O))+P[9]+2336552879&4294967295,b=E+(S<<12&4294967295|S>>>20),S=O+(T^b&(E^T))+P[10]+4294925233&4294967295,O=b+(S<<17&4294967295|S>>>15),S=T+(E^O&(b^E))+P[11]+2304563134&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(b^T&(O^b))+P[12]+1804603682&4294967295,E=T+(S<<7&4294967295|S>>>25),S=b+(O^E&(T^O))+P[13]+4254626195&4294967295,b=E+(S<<12&4294967295|S>>>20),S=O+(T^b&(E^T))+P[14]+2792965006&4294967295,O=b+(S<<17&4294967295|S>>>15),S=T+(E^O&(b^E))+P[15]+1236535329&4294967295,T=O+(S<<22&4294967295|S>>>10),S=E+(O^b&(T^O))+P[1]+4129170786&4294967295,E=T+(S<<5&4294967295|S>>>27),S=b+(T^O&(E^T))+P[6]+3225465664&4294967295,b=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(b^E))+P[11]+643717713&4294967295,O=b+(S<<14&4294967295|S>>>18),S=T+(b^E&(O^b))+P[0]+3921069994&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^b&(T^O))+P[5]+3593408605&4294967295,E=T+(S<<5&4294967295|S>>>27),S=b+(T^O&(E^T))+P[10]+38016083&4294967295,b=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(b^E))+P[15]+3634488961&4294967295,O=b+(S<<14&4294967295|S>>>18),S=T+(b^E&(O^b))+P[4]+3889429448&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^b&(T^O))+P[9]+568446438&4294967295,E=T+(S<<5&4294967295|S>>>27),S=b+(T^O&(E^T))+P[14]+3275163606&4294967295,b=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(b^E))+P[3]+4107603335&4294967295,O=b+(S<<14&4294967295|S>>>18),S=T+(b^E&(O^b))+P[8]+1163531501&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(O^b&(T^O))+P[13]+2850285829&4294967295,E=T+(S<<5&4294967295|S>>>27),S=b+(T^O&(E^T))+P[2]+4243563512&4294967295,b=E+(S<<9&4294967295|S>>>23),S=O+(E^T&(b^E))+P[7]+1735328473&4294967295,O=b+(S<<14&4294967295|S>>>18),S=T+(b^E&(O^b))+P[12]+2368359562&4294967295,T=O+(S<<20&4294967295|S>>>12),S=E+(T^O^b)+P[5]+4294588738&4294967295,E=T+(S<<4&4294967295|S>>>28),S=b+(E^T^O)+P[8]+2272392833&4294967295,b=E+(S<<11&4294967295|S>>>21),S=O+(b^E^T)+P[11]+1839030562&4294967295,O=b+(S<<16&4294967295|S>>>16),S=T+(O^b^E)+P[14]+4259657740&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^b)+P[1]+2763975236&4294967295,E=T+(S<<4&4294967295|S>>>28),S=b+(E^T^O)+P[4]+1272893353&4294967295,b=E+(S<<11&4294967295|S>>>21),S=O+(b^E^T)+P[7]+4139469664&4294967295,O=b+(S<<16&4294967295|S>>>16),S=T+(O^b^E)+P[10]+3200236656&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^b)+P[13]+681279174&4294967295,E=T+(S<<4&4294967295|S>>>28),S=b+(E^T^O)+P[0]+3936430074&4294967295,b=E+(S<<11&4294967295|S>>>21),S=O+(b^E^T)+P[3]+3572445317&4294967295,O=b+(S<<16&4294967295|S>>>16),S=T+(O^b^E)+P[6]+76029189&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(T^O^b)+P[9]+3654602809&4294967295,E=T+(S<<4&4294967295|S>>>28),S=b+(E^T^O)+P[12]+3873151461&4294967295,b=E+(S<<11&4294967295|S>>>21),S=O+(b^E^T)+P[15]+530742520&4294967295,O=b+(S<<16&4294967295|S>>>16),S=T+(O^b^E)+P[2]+3299628645&4294967295,T=O+(S<<23&4294967295|S>>>9),S=E+(O^(T|~b))+P[0]+4096336452&4294967295,E=T+(S<<6&4294967295|S>>>26),S=b+(T^(E|~O))+P[7]+1126891415&4294967295,b=E+(S<<10&4294967295|S>>>22),S=O+(E^(b|~T))+P[14]+2878612391&4294967295,O=b+(S<<15&4294967295|S>>>17),S=T+(b^(O|~E))+P[5]+4237533241&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~b))+P[12]+1700485571&4294967295,E=T+(S<<6&4294967295|S>>>26),S=b+(T^(E|~O))+P[3]+2399980690&4294967295,b=E+(S<<10&4294967295|S>>>22),S=O+(E^(b|~T))+P[10]+4293915773&4294967295,O=b+(S<<15&4294967295|S>>>17),S=T+(b^(O|~E))+P[1]+2240044497&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~b))+P[8]+1873313359&4294967295,E=T+(S<<6&4294967295|S>>>26),S=b+(T^(E|~O))+P[15]+4264355552&4294967295,b=E+(S<<10&4294967295|S>>>22),S=O+(E^(b|~T))+P[6]+2734768916&4294967295,O=b+(S<<15&4294967295|S>>>17),S=T+(b^(O|~E))+P[13]+1309151649&4294967295,T=O+(S<<21&4294967295|S>>>11),S=E+(O^(T|~b))+P[4]+4149444226&4294967295,E=T+(S<<6&4294967295|S>>>26),S=b+(T^(E|~O))+P[11]+3174756917&4294967295,b=E+(S<<10&4294967295|S>>>22),S=O+(E^(b|~T))+P[2]+718787259&4294967295,O=b+(S<<15&4294967295|S>>>17),S=T+(b^(O|~E))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+E&4294967295,k.g[1]=k.g[1]+(O+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+O&4294967295,k.g[3]=k.g[3]+b&4294967295}r.prototype.v=function(k,E){E===void 0&&(E=k.length);const T=E-this.blockSize,P=this.C;let O=this.h,b=0;for(;b<E;){if(O==0)for(;b<=T;)i(this,k,b),b+=this.blockSize;if(typeof k=="string"){for(;b<E;)if(P[O++]=k.charCodeAt(b++),O==this.blockSize){i(this,P),O=0;break}}else for(;b<E;)if(P[O++]=k[b++],O==this.blockSize){i(this,P),O=0;break}}this.h=O,this.o+=E},r.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var E=1;E<k.length-8;++E)k[E]=0;E=this.o*8;for(var T=k.length-8;T<k.length;++T)k[T]=E&255,E/=256;for(this.v(k),k=Array(16),E=0,T=0;T<4;++T)for(let P=0;P<32;P+=8)k[E++]=this.g[T]>>>P&255;return k};function s(k,E){var T=a;return Object.prototype.hasOwnProperty.call(T,k)?T[k]:T[k]=E(k)}function o(k,E){this.h=E;const T=[];let P=!0;for(let O=k.length-1;O>=0;O--){const b=k[O]|0;P&&b==E||(T[O]=b,P=!1)}this.g=T}var a={};function l(k){return-128<=k&&k<128?s(k,function(E){return new o([E|0],E<0?-1:0)}):new o([k|0],k<0?-1:0)}function h(k){if(isNaN(k)||!isFinite(k))return m;if(k<0)return w(h(-k));const E=[];let T=1;for(let P=0;k>=T;P++)E[P]=k/T|0,T*=4294967296;return new o(E,0)}function f(k,E){if(k.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k.charAt(0)=="-")return w(f(k.substring(1),E));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(E,8));let P=m;for(let b=0;b<k.length;b+=8){var O=Math.min(8,k.length-b);const S=parseInt(k.substring(b,b+O),E);O<8?(O=h(Math.pow(E,O)),P=P.j(O).add(h(S))):(P=P.j(T),P=P.add(h(S)))}return P}var m=l(0),g=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(u(this))return-w(this).m();let k=0,E=1;for(let T=0;T<this.g.length;T++){const P=this.i(T);k+=(P>=0?P:4294967296+P)*E,E*=4294967296}return k},t.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(_(this))return"0";if(u(this))return"-"+w(this).toString(k);const E=h(Math.pow(k,6));var T=this;let P="";for(;;){const O=M(T,E).g;T=C(T,O.j(E));let b=((T.g.length>0?T.g[0]:T.h)>>>0).toString(k);if(T=O,_(T))return b+P;for(;b.length<6;)b="0"+b;P=b+P}},t.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function _(k){if(k.h!=0)return!1;for(let E=0;E<k.g.length;E++)if(k.g[E]!=0)return!1;return!0}function u(k){return k.h==-1}t.l=function(k){return k=C(this,k),u(k)?-1:_(k)?0:1};function w(k){const E=k.g.length,T=[];for(let P=0;P<E;P++)T[P]=~k.g[P];return new o(T,~k.h).add(g)}t.abs=function(){return u(this)?w(this):this},t.add=function(k){const E=Math.max(this.g.length,k.g.length),T=[];let P=0;for(let O=0;O<=E;O++){let b=P+(this.i(O)&65535)+(k.i(O)&65535),S=(b>>>16)+(this.i(O)>>>16)+(k.i(O)>>>16);P=S>>>16,b&=65535,S&=65535,T[O]=S<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function C(k,E){return k.add(w(E))}t.j=function(k){if(_(this)||_(k))return m;if(u(this))return u(k)?w(this).j(w(k)):w(w(this).j(k));if(u(k))return w(this.j(w(k)));if(this.l(v)<0&&k.l(v)<0)return h(this.m()*k.m());const E=this.g.length+k.g.length,T=[];for(var P=0;P<2*E;P++)T[P]=0;for(P=0;P<this.g.length;P++)for(let O=0;O<k.g.length;O++){const b=this.i(P)>>>16,S=this.i(P)&65535,I=k.i(O)>>>16,Q=k.i(O)&65535;T[2*P+2*O]+=S*Q,R(T,2*P+2*O),T[2*P+2*O+1]+=b*Q,R(T,2*P+2*O+1),T[2*P+2*O+1]+=S*I,R(T,2*P+2*O+1),T[2*P+2*O+2]+=b*I,R(T,2*P+2*O+2)}for(k=0;k<E;k++)T[k]=T[2*k+1]<<16|T[2*k];for(k=E;k<2*E;k++)T[k]=0;return new o(T,0)};function R(k,E){for(;(k[E]&65535)!=k[E];)k[E+1]+=k[E]>>>16,k[E]&=65535,E++}function V(k,E){this.g=k,this.h=E}function M(k,E){if(_(E))throw Error("division by zero");if(_(k))return new V(m,m);if(u(k))return E=M(w(k),E),new V(w(E.g),w(E.h));if(u(E))return E=M(k,w(E)),new V(w(E.g),E.h);if(k.g.length>30){if(u(k)||u(E))throw Error("slowDivide_ only works with positive integers.");for(var T=g,P=E;P.l(k)<=0;)T=F(T),P=F(P);var O=z(T,1),b=z(P,1);for(P=z(P,2),T=z(T,2);!_(P);){var S=b.add(P);S.l(k)<=0&&(O=O.add(T),b=S),P=z(P,1),T=z(T,1)}return E=C(k,O.j(E)),new V(O,E)}for(O=m;k.l(E)>=0;){for(T=Math.max(1,Math.floor(k.m()/E.m())),P=Math.ceil(Math.log(T)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),b=h(T),S=b.j(E);u(S)||S.l(k)>0;)T-=P,b=h(T),S=b.j(E);_(b)&&(b=g),O=O.add(b),k=C(k,S)}return new V(O,k)}t.B=function(k){return M(this,k).h},t.and=function(k){const E=Math.max(this.g.length,k.g.length),T=[];for(let P=0;P<E;P++)T[P]=this.i(P)&k.i(P);return new o(T,this.h&k.h)},t.or=function(k){const E=Math.max(this.g.length,k.g.length),T=[];for(let P=0;P<E;P++)T[P]=this.i(P)|k.i(P);return new o(T,this.h|k.h)},t.xor=function(k){const E=Math.max(this.g.length,k.g.length),T=[];for(let P=0;P<E;P++)T[P]=this.i(P)^k.i(P);return new o(T,this.h^k.h)};function F(k){const E=k.g.length+1,T=[];for(let P=0;P<E;P++)T[P]=k.i(P)<<1|k.i(P-1)>>>31;return new o(T,k.h)}function z(k,E){const T=E>>5;E%=32;const P=k.g.length-T,O=[];for(let b=0;b<P;b++)O[b]=E>0?k.i(b+T)>>>E|k.i(b+T+1)<<32-E:k.i(b+T);return new o(O,k.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Jr=o}).apply(typeof rm<"u"?rm:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qy,Ys,Wy,za,zu,Hy,Gy,Ky;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var y=0;y<c.length;++y){var x=c[y];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var r=n(this);function i(c,y){if(y)e:{var x=r;c=c.split(".");for(var B=0;B<c.length-1;B++){var oe=c[B];if(!(oe in x))break e;x=x[oe]}c=c[c.length-1],B=x[c],y=y(B),y!=B&&y!=null&&e(x,c,{configurable:!0,writable:!0,value:y})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(y){var x=[],B;for(B in y)Object.prototype.hasOwnProperty.call(y,B)&&x.push([B,y[B]]);return x}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function l(c,y,x){return c.call.apply(c.bind,arguments)}function h(c,y,x){return h=l,h.apply(null,arguments)}function f(c,y){var x=Array.prototype.slice.call(arguments,1);return function(){var B=x.slice();return B.push.apply(B,arguments),c.apply(this,B)}}function m(c,y){function x(){}x.prototype=y.prototype,c.Z=y.prototype,c.prototype=new x,c.prototype.constructor=c,c.Ob=function(B,oe,ce){for(var Te=Array(arguments.length-2),je=2;je<arguments.length;je++)Te[je-2]=arguments[je];return y.prototype[oe].apply(B,Te)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function v(c){const y=c.length;if(y>0){const x=Array(y);for(let B=0;B<y;B++)x[B]=c[B];return x}return[]}function _(c,y){for(let B=1;B<arguments.length;B++){const oe=arguments[B];var x=typeof oe;if(x=x!="object"?x:oe?Array.isArray(oe)?"array":x:"null",x=="array"||x=="object"&&typeof oe.length=="number"){x=c.length||0;const ce=oe.length||0;c.length=x+ce;for(let Te=0;Te<ce;Te++)c[x+Te]=oe[Te]}else c.push(oe)}}class u{constructor(y,x){this.i=y,this.j=x,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function w(c){o.setTimeout(()=>{throw c},0)}function C(){var c=k;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class R{constructor(){this.h=this.g=null}add(y,x){const B=V.get();B.set(y,x),this.h?this.h.next=B:this.g=B,this.h=B}}var V=new u(()=>new M,c=>c.reset());class M{constructor(){this.next=this.g=this.h=null}set(y,x){this.h=y,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let F,z=!1,k=new R,E=()=>{const c=Promise.resolve(void 0);F=()=>{c.then(T)}};function T(){for(var c;c=C();){try{c.h.call(c.g)}catch(x){w(x)}var y=V;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}z=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const x=()=>{};o.addEventListener("test",x,y),o.removeEventListener("test",x,y)}catch{}return c}();function S(c){return/^[\s\xa0]*$/.test(c)}function I(c,y){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}m(I,O),I.prototype.init=function(c,y){const x=this.type=c.type,B=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(x=="mouseover"?y=c.fromElement:x=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,B?(this.clientX=B.clientX!==void 0?B.clientX:B.pageX,this.clientY=B.clientY!==void 0?B.clientY:B.pageY,this.screenX=B.screenX||0,this.screenY=B.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&I.Z.h.call(this)},I.prototype.h=function(){I.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Q="closure_listenable_"+(Math.random()*1e6|0),re=0;function $(c,y,x,B,oe){this.listener=c,this.proxy=null,this.src=y,this.type=x,this.capture=!!B,this.ha=oe,this.key=++re,this.da=this.fa=!1}function ue(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ne(c,y,x){for(const B in c)y.call(x,c[B],B,c)}function _e(c,y){for(const x in c)y.call(void 0,c[x],x,c)}function te(c){const y={};for(const x in c)y[x]=c[x];return y}const Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ee(c,y){let x,B;for(let oe=1;oe<arguments.length;oe++){B=arguments[oe];for(x in B)c[x]=B[x];for(let ce=0;ce<Z.length;ce++)x=Z[ce],Object.prototype.hasOwnProperty.call(B,x)&&(c[x]=B[x])}}function ye(c){this.src=c,this.g={},this.h=0}ye.prototype.add=function(c,y,x,B,oe){const ce=c.toString();c=this.g[ce],c||(c=this.g[ce]=[],this.h++);const Te=we(c,y,B,oe);return Te>-1?(y=c[Te],x||(y.fa=!1)):(y=new $(y,this.src,ce,!!B,oe),y.fa=x,c.push(y)),y};function X(c,y){const x=y.type;if(x in c.g){var B=c.g[x],oe=Array.prototype.indexOf.call(B,y,void 0),ce;(ce=oe>=0)&&Array.prototype.splice.call(B,oe,1),ce&&(ue(y),c.g[x].length==0&&(delete c.g[x],c.h--))}}function we(c,y,x,B){for(let oe=0;oe<c.length;++oe){const ce=c[oe];if(!ce.da&&ce.listener==y&&ce.capture==!!x&&ce.ha==B)return oe}return-1}var se="closure_lm_"+(Math.random()*1e6|0),de={};function he(c,y,x,B,oe){if(Array.isArray(y)){for(let ce=0;ce<y.length;ce++)he(c,y[ce],x,B,oe);return null}return x=D(x),c&&c[Q]?c.J(y,x,a(B)?!!B.capture:!1,oe):be(c,y,x,!1,B,oe)}function be(c,y,x,B,oe,ce){if(!y)throw Error("Invalid event type");const Te=a(oe)?!!oe.capture:!!oe;let je=L(c);if(je||(c[se]=je=new ye(c)),x=je.add(y,x,B,Te,ce),x.proxy)return x;if(B=ke(),x.proxy=B,B.src=c,B.listener=x,c.addEventListener)b||(oe=Te),oe===void 0&&(oe=!1),c.addEventListener(y.toString(),B,oe);else if(c.attachEvent)c.attachEvent(p(y.toString()),B);else if(c.addListener&&c.removeListener)c.addListener(B);else throw Error("addEventListener and attachEvent are unavailable.");return x}function ke(){function c(x){return y.call(c.src,c.listener,x)}const y=G;return c}function q(c,y,x,B,oe){if(Array.isArray(y))for(var ce=0;ce<y.length;ce++)q(c,y[ce],x,B,oe);else B=a(B)?!!B.capture:!!B,x=D(x),c&&c[Q]?(c=c.i,ce=String(y).toString(),ce in c.g&&(y=c.g[ce],x=we(y,x,B,oe),x>-1&&(ue(y[x]),Array.prototype.splice.call(y,x,1),y.length==0&&(delete c.g[ce],c.h--)))):c&&(c=L(c))&&(y=c.g[y.toString()],c=-1,y&&(c=we(y,x,B,oe)),(x=c>-1?y[c]:null)&&U(x))}function U(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[Q])X(y.i,c);else{var x=c.type,B=c.proxy;y.removeEventListener?y.removeEventListener(x,B,c.capture):y.detachEvent?y.detachEvent(p(x),B):y.addListener&&y.removeListener&&y.removeListener(B),(x=L(y))?(X(x,c),x.h==0&&(x.src=null,y[se]=null)):ue(c)}}}function p(c){return c in de?de[c]:de[c]="on"+c}function G(c,y){if(c.da)c=!0;else{y=new I(y,this);const x=c.listener,B=c.ha||c.src;c.fa&&U(c),c=x.call(B,y)}return c}function L(c){return c=c[se],c instanceof ye?c:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function D(c){return typeof c=="function"?c:(c[N]||(c[N]=function(y){return c.handleEvent(y)}),c[N])}function W(){P.call(this),this.i=new ye(this),this.M=this,this.G=null}m(W,P),W.prototype[Q]=!0,W.prototype.removeEventListener=function(c,y,x,B){q(this,c,y,x,B)};function j(c,y){var x,B=c.G;if(B)for(x=[];B;B=B.G)x.push(B);if(c=c.M,B=y.type||y,typeof y=="string")y=new O(y,c);else if(y instanceof O)y.target=y.target||c;else{var oe=y;y=new O(B,c),Ee(y,oe)}oe=!0;let ce,Te;if(x)for(Te=x.length-1;Te>=0;Te--)ce=y.g=x[Te],oe=A(ce,B,!0,y)&&oe;if(ce=y.g=c,oe=A(ce,B,!0,y)&&oe,oe=A(ce,B,!1,y)&&oe,x)for(Te=0;Te<x.length;Te++)ce=y.g=x[Te],oe=A(ce,B,!1,y)&&oe}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const x=c.g[y];for(let B=0;B<x.length;B++)ue(x[B]);delete c.g[y],c.h--}}this.G=null},W.prototype.J=function(c,y,x,B){return this.i.add(String(c),y,!1,x,B)},W.prototype.K=function(c,y,x,B){return this.i.add(String(c),y,!0,x,B)};function A(c,y,x,B){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let oe=!0;for(let ce=0;ce<y.length;++ce){const Te=y[ce];if(Te&&!Te.da&&Te.capture==x){const je=Te.listener,St=Te.ha||Te.src;Te.fa&&X(c.i,Te),oe=je.call(St,B)!==!1&&oe}}return oe&&!B.defaultPrevented}function H(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=h(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:o.setTimeout(c,y||0)}function Y(c){c.g=H(()=>{c.g=null,c.i&&(c.i=!1,Y(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class ie extends P{constructor(y,x){super(),this.m=y,this.l=x,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function le(c){P.call(this),this.h=c,this.g={}}m(le,P);var ge=[];function Se(c){ne(c.g,function(y,x){this.g.hasOwnProperty(x)&&U(y)},c),c.g={}}le.prototype.N=function(){le.Z.N.call(this),Se(this)},le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ae=o.JSON.stringify,ze=o.JSON.parse,Ze=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Je(){}function _t(){}var qe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function sn(){O.call(this,"d")}m(sn,O);function ht(){O.call(this,"c")}m(ht,O);var Ye={},Tn=null;function vn(){return Tn=Tn||new W}Ye.Ia="serverreachability";function hi(c){O.call(this,Ye.Ia,c)}m(hi,O);function Vn(c){const y=vn();j(y,new hi(y))}Ye.STAT_EVENT="statevent";function kr(c,y){O.call(this,Ye.STAT_EVENT,c),this.stat=y}m(kr,O);function ft(c){const y=vn();j(y,new kr(y,c))}Ye.Ja="timingevent";function Ln(c,y){O.call(this,Ye.Ja,c),this.size=y}m(Ln,O);function xr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},y)}function Sr(){this.g=!0}Sr.prototype.ua=function(){this.g=!1};function ia(c,y,x,B,oe,ce){c.info(function(){if(c.g)if(ce){var Te="",je=ce.split("&");for(let st=0;st<je.length;st++){var St=je[st].split("=");if(St.length>1){const Dt=St[0];St=St[1];const $n=Dt.split("_");Te=$n.length>=2&&$n[1]=="type"?Te+(Dt+"="+St+"&"):Te+(Dt+"=redacted&")}}}else Te=null;else Te=ce;return"XMLHTTP REQ ("+B+") [attempt "+oe+"]: "+y+`
`+x+`
`+Te})}function sa(c,y,x,B,oe,ce,Te){c.info(function(){return"XMLHTTP RESP ("+B+") [ attempt "+oe+"]: "+y+`
`+x+`
`+ce+" "+Te})}function er(c,y,x,B){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+aa(c,x)+(B?" "+B:"")})}function oa(c,y){c.info(function(){return"TIMEOUT: "+y})}Sr.prototype.info=function(){};function aa(c,y){if(!c.g)return y;if(!y)return null;try{const ce=JSON.parse(y);if(ce){for(c=0;c<ce.length;c++)if(Array.isArray(ce[c])){var x=ce[c];if(!(x.length<2)){var B=x[1];if(Array.isArray(B)&&!(B.length<1)){var oe=B[0];if(oe!="noop"&&oe!="stop"&&oe!="close")for(let Te=1;Te<B.length;Te++)B[Te]=""}}}}return ae(ce)}catch{return y}}var fi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Rs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ps;function qi(){}m(qi,Je),qi.prototype.g=function(){return new XMLHttpRequest},Ps=new qi;function Ar(c){return encodeURIComponent(String(c))}function ee(c){var y=1;c=c.split(":");const x=[];for(;y>0&&c.length;)x.push(c.shift()),y--;return c.length&&x.push(c.join(":")),x}function pt(c,y,x,B){this.j=c,this.i=y,this.l=x,this.S=B||1,this.V=new le(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new la}function la(){this.i=null,this.g="",this.h=!1}var Oh={},yc={};function _c(c,y,x){c.M=1,c.A=ua(Fn(y)),c.u=x,c.R=!0,Dh(c,null)}function Dh(c,y){c.F=Date.now(),ca(c),c.B=Fn(c.A);var x=c.B,B=c.S;Array.isArray(B)||(B=[String(B)]),Gh(x.i,"t",B),c.C=0,x=c.j.L,c.h=new la,c.g=hf(c.j,x?y:null,!c.u),c.P>0&&(c.O=new ie(h(c.Y,c,c.g),c.P)),y=c.V,x=c.g,B=c.ba;var oe="readystatechange";Array.isArray(oe)||(oe&&(ge[0]=oe.toString()),oe=ge);for(let ce=0;ce<oe.length;ce++){const Te=he(x,oe[ce],B||y.handleEvent,!1,y.h||y);if(!Te)break;y.g[Te.key]=Te}y=c.J?te(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),Vn(),ia(c.i,c.v,c.B,c.l,c.S,c.u)}pt.prototype.ba=function(c){c=c.target;const y=this.O;y&&Nr(c)==3?y.j():this.Y(c)},pt.prototype.Y=function(c){try{if(c==this.g)e:{const je=Nr(this.g),St=this.g.ya(),st=this.g.ca();if(!(je<3)&&(je!=3||this.g&&(this.h.h||this.g.la()||ef(this.g)))){this.K||je!=4||St==7||(St==8||st<=0?Vn(3):Vn(2)),bc(this);var y=this.g.ca();this.X=y;var x=H_(this);if(this.o=y==200,sa(this.i,this.v,this.B,this.l,this.S,je,y),this.o){if(this.U&&!this.L){t:{if(this.g){var B,oe=this.g;if((B=oe.g?oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(B)){var ce=B;break t}}ce=null}if(c=ce)er(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wc(this,c);else{this.o=!1,this.m=3,ft(12),pi(this),Ns(this);break e}}if(this.R){c=!0;let Dt;for(;!this.K&&this.C<x.length;)if(Dt=G_(this,x),Dt==yc){je==4&&(this.m=4,ft(14),c=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Oh){this.m=4,ft(15),er(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else er(this.i,this.l,Dt,null),wc(this,Dt);if(Mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||x.length!=0||this.h.h||(this.m=1,ft(16),c=!1),this.o=this.o&&c,!c)er(this.i,this.l,x,"[Invalid Chunked Response]"),pi(this),Ns(this);else if(x.length>0&&!this.W){this.W=!0;var Te=this.j;Te.g==this&&Te.aa&&!Te.P&&(Te.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Ac(Te),Te.P=!0,ft(11))}}else er(this.i,this.l,x,null),wc(this,x);je==4&&pi(this),this.o&&!this.K&&(je==4?lf(this.j,this):(this.o=!1,ca(this)))}else ab(this.g),y==400&&x.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),pi(this),Ns(this)}}}catch{}finally{}};function H_(c){if(!Mh(c))return c.g.la();const y=ef(c.g);if(y==="")return"";let x="";const B=y.length,oe=Nr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return pi(c),Ns(c),"";c.h.i=new o.TextDecoder}for(let ce=0;ce<B;ce++)c.h.h=!0,x+=c.h.i.decode(y[ce],{stream:!(oe&&ce==B-1)});return y.length=0,c.h.g+=x,c.C=0,c.h.g}function Mh(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function G_(c,y){var x=c.C,B=y.indexOf(`
`,x);return B==-1?yc:(x=Number(y.substring(x,B)),isNaN(x)?Oh:(B+=1,B+x>y.length?yc:(y=y.slice(B,B+x),c.C=B+x,y)))}pt.prototype.cancel=function(){this.K=!0,pi(this)};function ca(c){c.T=Date.now()+c.H,Vh(c,c.H)}function Vh(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=xr(h(c.aa,c),y)}function bc(c){c.D&&(o.clearTimeout(c.D),c.D=null)}pt.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(oa(this.i,this.B),this.M!=2&&(Vn(),ft(17)),pi(this),this.m=2,Ns(this)):Vh(this,this.T-c)};function Ns(c){c.j.I==0||c.K||lf(c.j,c)}function pi(c){bc(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Se(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function wc(c,y){try{var x=c.j;if(x.I!=0&&(x.g==c||Ec(x.h,c))){if(!c.L&&Ec(x.h,c)&&x.I==3){try{var B=x.Ba.g.parse(y)}catch{B=null}if(Array.isArray(B)&&B.length==3){var oe=B;if(oe[0]==0){e:if(!x.v){if(x.g)if(x.g.F+3e3<c.F)ma(x),fa(x);else break e;Sc(x),ft(18)}}else x.xa=oe[1],0<x.xa-x.K&&oe[2]<37500&&x.F&&x.A==0&&!x.C&&(x.C=xr(h(x.Va,x),6e3));$h(x.h)<=1&&x.ta&&(x.ta=void 0)}else gi(x,11)}else if((c.L||x.g==c)&&ma(x),!S(y))for(oe=x.Ba.g.parse(y),y=0;y<oe.length;y++){let st=oe[y];const Dt=st[0];if(!(Dt<=x.K))if(x.K=Dt,st=st[1],x.I==2)if(st[0]=="c"){x.M=st[1],x.ba=st[2];const $n=st[3];$n!=null&&(x.ka=$n,x.j.info("VER="+x.ka));const vi=st[4];vi!=null&&(x.za=vi,x.j.info("SVER="+x.za));const Or=st[5];Or!=null&&typeof Or=="number"&&Or>0&&(B=1.5*Or,x.O=B,x.j.info("backChannelRequestTimeoutMs_="+B)),B=x;const Dr=c.g;if(Dr){const va=Dr.g?Dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var ce=B.h;ce.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(ce.j=ce.l,ce.g=new Set,ce.h&&(Ic(ce,ce.h),ce.h=null))}if(B.G){const Rc=Dr.g?Dr.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(B.wa=Rc,lt(B.J,B.G,Rc))}}x.I=3,x.l&&x.l.ra(),x.aa&&(x.T=Date.now()-c.F,x.j.info("Handshake RTT: "+x.T+"ms")),B=x;var Te=c;if(B.na=df(B,B.L?B.ba:null,B.W),Te.L){Uh(B.h,Te);var je=Te,St=B.O;St&&(je.H=St),je.D&&(bc(je),ca(je)),B.g=Te}else of(B);x.i.length>0&&pa(x)}else st[0]!="stop"&&st[0]!="close"||gi(x,7);else x.I==3&&(st[0]=="stop"||st[0]=="close"?st[0]=="stop"?gi(x,7):xc(x):st[0]!="noop"&&x.l&&x.l.qa(st),x.A=0)}}Vn(4)}catch{}}var K_=class{constructor(c,y){this.g=c,this.map=y}};function Lh(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function $h(c){return c.h?1:c.g?c.g.size:0}function Ec(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ic(c,y){c.g?c.g.add(y):c.h=y}function Uh(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Lh.prototype.cancel=function(){if(this.i=Bh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Bh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const x of c.g.values())y=y.concat(x.G);return y}return v(c.i)}var zh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Q_(c,y){if(c){c=c.split("&");for(let x=0;x<c.length;x++){const B=c[x].indexOf("=");let oe,ce=null;B>=0?(oe=c[x].substring(0,B),ce=c[x].substring(B+1)):oe=c[x],y(oe,ce?decodeURIComponent(ce.replace(/\+/g," ")):"")}}}function Rr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Rr?(this.l=c.l,Os(this,c.j),this.o=c.o,this.g=c.g,Ds(this,c.u),this.h=c.h,Tc(this,Kh(c.i)),this.m=c.m):c&&(y=String(c).match(zh))?(this.l=!1,Os(this,y[1]||"",!0),this.o=Ms(y[2]||""),this.g=Ms(y[3]||"",!0),Ds(this,y[4]),this.h=Ms(y[5]||"",!0),Tc(this,y[6]||"",!0),this.m=Ms(y[7]||"")):(this.l=!1,this.i=new Ls(null,this.l))}Rr.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(Vs(y,jh,!0),":");var x=this.g;return(x||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Vs(y,jh,!0),"@"),c.push(Ar(x).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.u,x!=null&&c.push(":",String(x))),(x=this.h)&&(this.g&&x.charAt(0)!="/"&&c.push("/"),c.push(Vs(x,x.charAt(0)=="/"?X_:Y_,!0))),(x=this.i.toString())&&c.push("?",x),(x=this.m)&&c.push("#",Vs(x,eb)),c.join("")},Rr.prototype.resolve=function(c){const y=Fn(this);let x=!!c.j;x?Os(y,c.j):x=!!c.o,x?y.o=c.o:x=!!c.g,x?y.g=c.g:x=c.u!=null;var B=c.h;if(x)Ds(y,c.u);else if(x=!!c.h){if(B.charAt(0)!="/")if(this.g&&!this.h)B="/"+B;else{var oe=y.h.lastIndexOf("/");oe!=-1&&(B=y.h.slice(0,oe+1)+B)}if(oe=B,oe==".."||oe==".")B="";else if(oe.indexOf("./")!=-1||oe.indexOf("/.")!=-1){B=oe.lastIndexOf("/",0)==0,oe=oe.split("/");const ce=[];for(let Te=0;Te<oe.length;){const je=oe[Te++];je=="."?B&&Te==oe.length&&ce.push(""):je==".."?((ce.length>1||ce.length==1&&ce[0]!="")&&ce.pop(),B&&Te==oe.length&&ce.push("")):(ce.push(je),B=!0)}B=ce.join("/")}else B=oe}return x?y.h=B:x=c.i.toString()!=="",x?Tc(y,Kh(c.i)):x=!!c.m,x&&(y.m=c.m),y};function Fn(c){return new Rr(c)}function Os(c,y,x){c.j=x?Ms(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Ds(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function Tc(c,y,x){y instanceof Ls?(c.i=y,tb(c.i,c.l)):(x||(y=Vs(y,Z_)),c.i=new Ls(y,c.l))}function lt(c,y,x){c.i.set(y,x)}function ua(c){return lt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ms(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Vs(c,y,x){return typeof c=="string"?(c=encodeURI(c).replace(y,J_),x&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function J_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var jh=/[#\/\?@]/g,Y_=/[#\?:]/g,X_=/[#\?]/g,Z_=/[#\?@]/g,eb=/#/g;function Ls(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function mi(c){c.g||(c.g=new Map,c.h=0,c.i&&Q_(c.i,function(y,x){c.add(decodeURIComponent(y.replace(/\+/g," ")),x)}))}t=Ls.prototype,t.add=function(c,y){mi(this),this.i=null,c=Wi(this,c);let x=this.g.get(c);return x||this.g.set(c,x=[]),x.push(y),this.h+=1,this};function qh(c,y){mi(c),y=Wi(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Wh(c,y){return mi(c),y=Wi(c,y),c.g.has(y)}t.forEach=function(c,y){mi(this),this.g.forEach(function(x,B){x.forEach(function(oe){c.call(y,oe,B,this)},this)},this)};function Hh(c,y){mi(c);let x=[];if(typeof y=="string")Wh(c,y)&&(x=x.concat(c.g.get(Wi(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)x=x.concat(c[y]);return x}t.set=function(c,y){return mi(this),this.i=null,c=Wi(this,c),Wh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},t.get=function(c,y){return c?(c=Hh(this,c),c.length>0?String(c[0]):y):y};function Gh(c,y,x){qh(c,y),x.length>0&&(c.i=null,c.g.set(Wi(c,y),v(x)),c.h+=x.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let B=0;B<y.length;B++){var x=y[B];const oe=Ar(x);x=Hh(this,x);for(let ce=0;ce<x.length;ce++){let Te=oe;x[ce]!==""&&(Te+="="+Ar(x[ce])),c.push(Te)}}return this.i=c.join("&")};function Kh(c){const y=new Ls;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Wi(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function tb(c,y){y&&!c.j&&(mi(c),c.i=null,c.g.forEach(function(x,B){const oe=B.toLowerCase();B!=oe&&(qh(this,B),Gh(this,oe,x))},c)),c.j=y}function nb(c,y){const x=new Sr;if(o.Image){const B=new Image;B.onload=f(Pr,x,"TestLoadImage: loaded",!0,y,B),B.onerror=f(Pr,x,"TestLoadImage: error",!1,y,B),B.onabort=f(Pr,x,"TestLoadImage: abort",!1,y,B),B.ontimeout=f(Pr,x,"TestLoadImage: timeout",!1,y,B),o.setTimeout(function(){B.ontimeout&&B.ontimeout()},1e4),B.src=c}else y(!1)}function rb(c,y){const x=new Sr,B=new AbortController,oe=setTimeout(()=>{B.abort(),Pr(x,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:B.signal}).then(ce=>{clearTimeout(oe),ce.ok?Pr(x,"TestPingServer: ok",!0,y):Pr(x,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(oe),Pr(x,"TestPingServer: error",!1,y)})}function Pr(c,y,x,B,oe){try{oe&&(oe.onload=null,oe.onerror=null,oe.onabort=null,oe.ontimeout=null),B(x)}catch{}}function ib(){this.g=new Ze}function Cc(c){this.i=c.Sb||null,this.h=c.ab||!1}m(Cc,Je),Cc.prototype.g=function(){return new da(this.i,this.h)};function da(c,y){W.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(da,W),t=da.prototype,t.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,$s(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||o).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Fs(this):$s(this),this.readyState==3&&Qh(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Fs(this))},t.Na=function(c){this.g&&(this.response=c,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,$s(c)}t.setRequestHeader=function(c,y){this.A.append(c,y)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var x=y.next();!x.done;)x=x.value,c.push(x[0]+": "+x[1]),x=y.next();return c.join(`\r
`)};function $s(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Jh(c){let y="";return ne(c,function(x,B){y+=B,y+=":",y+=x,y+=`\r
`}),y}function kc(c,y,x){e:{for(B in x){var B=!1;break e}B=!0}B||(x=Jh(x),typeof c=="string"?x!=null&&Ar(x):lt(c,y,x))}function bt(c){W.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(bt,W);var sb=/^https?$/i,ob=["POST","PUT"];t=bt.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,y,x,B){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ps.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(ce){Yh(this,ce);return}if(c=x||"",x=new Map(this.headers),B)if(Object.getPrototypeOf(B)===Object.prototype)for(var oe in B)x.set(oe,B[oe]);else if(typeof B.keys=="function"&&typeof B.get=="function")for(const ce of B.keys())x.set(ce,B.get(ce));else throw Error("Unknown input type for opt_headers: "+String(B));B=Array.from(x.keys()).find(ce=>ce.toLowerCase()=="content-type"),oe=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(ob,y,void 0)>=0)||B||oe||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[ce,Te]of x)this.g.setRequestHeader(ce,Te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(ce){Yh(this,ce)}};function Yh(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Xh(c),ha(c)}function Xh(c){c.A||(c.A=!0,j(c,"complete"),j(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,j(this,"complete"),j(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),bt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Zh(this):this.Xa())},t.Xa=function(){Zh(this)};function Zh(c){if(c.h&&typeof s<"u"){if(c.v&&Nr(c)==4)setTimeout(c.Ca.bind(c),0);else if(j(c,"readystatechange"),Nr(c)==4){c.h=!1;try{const ce=c.ca();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var x;if(!(x=y)){var B;if(B=ce===0){let Te=String(c.D).match(zh)[1]||null;!Te&&o.self&&o.self.location&&(Te=o.self.location.protocol.slice(0,-1)),B=!sb.test(Te?Te.toLowerCase():"")}x=B}if(x)j(c,"complete"),j(c,"success");else{c.o=6;try{var oe=Nr(c)>2?c.g.statusText:""}catch{oe=""}c.l=oe+" ["+c.ca()+"]",Xh(c)}}finally{ha(c)}}}}function ha(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const x=c.g;c.g=null,y||j(c,"ready");try{x.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Nr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Nr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ze(y)}};function ef(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ab(c){const y={};c=(c.g&&Nr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let B=0;B<c.length;B++){if(S(c[B]))continue;var x=ee(c[B]);const oe=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const ce=y[oe]||[];y[oe]=ce,ce.push(x)}_e(y,function(B){return B.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(c,y,x){return x&&x.internalChannelParams&&x.internalChannelParams[c]||y}function tf(c){this.za=0,this.i=[],this.j=new Sr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Us("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Us("baseRetryDelayMs",5e3,c),this.Za=Us("retryDelaySeedMs",1e4,c),this.Ta=Us("forwardChannelMaxRetries",2,c),this.va=Us("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Lh(c&&c.concurrentRequestLimit),this.Ba=new ib,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=tf.prototype,t.ka=8,t.I=1,t.connect=function(c,y,x,B){ft(0),this.W=c,this.H=y||{},x&&B!==void 0&&(this.H.OSID=x,this.H.OAID=B),this.F=this.X,this.J=df(this,null,this.W),pa(this)};function xc(c){if(nf(c),c.I==3){var y=c.V++,x=Fn(c.J);if(lt(x,"SID",c.M),lt(x,"RID",y),lt(x,"TYPE","terminate"),Bs(c,x),y=new pt(c,c.j,y),y.M=2,y.A=ua(Fn(x)),x=!1,o.navigator&&o.navigator.sendBeacon)try{x=o.navigator.sendBeacon(y.A.toString(),"")}catch{}!x&&o.Image&&(new Image().src=y.A,x=!0),x||(y.g=hf(y.j,null),y.g.ea(y.A)),y.F=Date.now(),ca(y)}uf(c)}function fa(c){c.g&&(Ac(c),c.g.cancel(),c.g=null)}function nf(c){fa(c),c.v&&(o.clearTimeout(c.v),c.v=null),ma(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function pa(c){if(!Fh(c.h)&&!c.m){c.m=!0;var y=c.Ea;F||E(),z||(F(),z=!0),k.add(y,c),c.D=0}}function lb(c,y){return $h(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=xr(h(c.Ea,c,y),cf(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const oe=new pt(this,this.j,c);let ce=this.o;if(this.U&&(ce?(ce=te(ce),Ee(ce,this.U)):ce=this.U),this.u!==null||this.R||(oe.J=ce,ce=null),this.S)e:{for(var y=0,x=0;x<this.i.length;x++){t:{var B=this.i[x];if("__data__"in B.map&&(B=B.map.__data__,typeof B=="string")){B=B.length;break t}B=void 0}if(B===void 0)break;if(y+=B,y>4096){y=x;break e}if(y===4096||x===this.i.length-1){y=x+1;break e}}y=1e3}else y=1e3;y=sf(this,oe,y),x=Fn(this.J),lt(x,"RID",c),lt(x,"CVER",22),this.G&&lt(x,"X-HTTP-Session-Id",this.G),Bs(this,x),ce&&(this.R?y="headers="+Ar(Jh(ce))+"&"+y:this.u&&kc(x,this.u,ce)),Ic(this.h,oe),this.Ra&&lt(x,"TYPE","init"),this.S?(lt(x,"$req",y),lt(x,"SID","null"),oe.U=!0,_c(oe,x,null)):_c(oe,x,y),this.I=2}}else this.I==3&&(c?rf(this,c):this.i.length==0||Fh(this.h)||rf(this))};function rf(c,y){var x;y?x=y.l:x=c.V++;const B=Fn(c.J);lt(B,"SID",c.M),lt(B,"RID",x),lt(B,"AID",c.K),Bs(c,B),c.u&&c.o&&kc(B,c.u,c.o),x=new pt(c,c.j,x,c.D+1),c.u===null&&(x.J=c.o),y&&(c.i=y.G.concat(c.i)),y=sf(c,x,1e3),x.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ic(c.h,x),_c(x,B,y)}function Bs(c,y){c.H&&ne(c.H,function(x,B){lt(y,B,x)}),c.l&&ne({},function(x,B){lt(y,B,x)})}function sf(c,y,x){x=Math.min(c.i.length,x);const B=c.l?h(c.l.Ka,c.l,c):null;e:{var oe=c.i;let je=-1;for(;;){const St=["count="+x];je==-1?x>0?(je=oe[0].g,St.push("ofs="+je)):je=0:St.push("ofs="+je);let st=!0;for(let Dt=0;Dt<x;Dt++){var ce=oe[Dt].g;const $n=oe[Dt].map;if(ce-=je,ce<0)je=Math.max(0,oe[Dt].g-100),st=!1;else try{ce="req"+ce+"_"||"";try{var Te=$n instanceof Map?$n:Object.entries($n);for(const[vi,Or]of Te){let Dr=Or;a(Or)&&(Dr=ae(Or)),St.push(ce+vi+"="+encodeURIComponent(Dr))}}catch(vi){throw St.push(ce+"type="+encodeURIComponent("_badmap")),vi}}catch{B&&B($n)}}if(st){Te=St.join("&");break e}}Te=void 0}return c=c.i.splice(0,x),y.G=c,Te}function of(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;F||E(),z||(F(),z=!0),k.add(y,c),c.A=0}}function Sc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=xr(h(c.Da,c),cf(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,af(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=xr(h(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),fa(this),af(this))};function Ac(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function af(c){c.g=new pt(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=Fn(c.na);lt(y,"RID","rpc"),lt(y,"SID",c.M),lt(y,"AID",c.K),lt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&lt(y,"TO",c.ia),lt(y,"TYPE","xmlhttp"),Bs(c,y),c.u&&c.o&&kc(y,c.u,c.o),c.O&&(c.g.H=c.O);var x=c.g;c=c.ba,x.M=1,x.A=ua(Fn(y)),x.u=null,x.R=!0,Dh(x,c)}t.Va=function(){this.C!=null&&(this.C=null,fa(this),Sc(this),ft(19))};function ma(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function lf(c,y){var x=null;if(c.g==y){ma(c),Ac(c),c.g=null;var B=2}else if(Ec(c.h,y))x=y.G,Uh(c.h,y),B=1;else return;if(c.I!=0){if(y.o)if(B==1){x=y.u?y.u.length:0,y=Date.now()-y.F;var oe=c.D;B=vn(),j(B,new Ln(B,x)),pa(c)}else of(c);else if(oe=y.m,oe==3||oe==0&&y.X>0||!(B==1&&lb(c,y)||B==2&&Sc(c)))switch(x&&x.length>0&&(y=c.h,y.i=y.i.concat(x)),oe){case 1:gi(c,5);break;case 4:gi(c,10);break;case 3:gi(c,6);break;default:gi(c,2)}}}function cf(c,y){let x=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(x*=2),x*y}function gi(c,y){if(c.j.info("Error code "+y),y==2){var x=h(c.bb,c),B=c.Ua;const oe=!B;B=new Rr(B||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Os(B,"https"),ua(B),oe?nb(B.toString(),x):rb(B.toString(),x)}else ft(2);c.I=0,c.l&&c.l.pa(y),uf(c),nf(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function uf(c){if(c.I=0,c.ja=[],c.l){const y=Bh(c.h);(y.length!=0||c.i.length!=0)&&(_(c.ja,y),_(c.ja,c.i),c.h.i.length=0,v(c.i),c.i.length=0),c.l.oa()}}function df(c,y,x){var B=x instanceof Rr?Fn(x):new Rr(x);if(B.g!="")y&&(B.g=y+"."+B.g),Ds(B,B.u);else{var oe=o.location;B=oe.protocol,y=y?y+"."+oe.hostname:oe.hostname,oe=+oe.port;const ce=new Rr(null);B&&Os(ce,B),y&&(ce.g=y),oe&&Ds(ce,oe),x&&(ce.h=x),B=ce}return x=c.G,y=c.wa,x&&y&&lt(B,x,y),lt(B,"VER",c.ka),Bs(c,B),B}function hf(c,y,x){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new bt(new Cc({ab:x})):new bt(c.ma),y.Fa(c.L),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ff(){}t=ff.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ga(){}ga.prototype.g=function(c,y){return new ln(c,y)};function ln(c,y){W.call(this),this.g=new tf(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!S(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!S(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Hi(this)}m(ln,W),ln.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ln.prototype.close=function(){xc(this.g)},ln.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var x={};x.__data__=c,c=x}else this.v&&(x={},x.__data__=ae(c),c=x);y.i.push(new K_(y.Ya++,c)),y.I==3&&pa(y)},ln.prototype.N=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,ln.Z.N.call(this)};function pf(c){sn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const x in y){c=x;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}m(pf,sn);function mf(){ht.call(this),this.status=1}m(mf,ht);function Hi(c){this.g=c}m(Hi,ff),Hi.prototype.ra=function(){j(this.g,"a")},Hi.prototype.qa=function(c){j(this.g,new pf(c))},Hi.prototype.pa=function(c){j(this.g,new mf)},Hi.prototype.oa=function(){j(this.g,"b")},ga.prototype.createWebChannel=ga.prototype.g,ln.prototype.send=ln.prototype.o,ln.prototype.open=ln.prototype.m,ln.prototype.close=ln.prototype.close,Ky=function(){return new ga},Gy=function(){return vn()},Hy=Ye,zu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fi.NO_ERROR=0,fi.TIMEOUT=8,fi.HTTP_ERROR=6,za=fi,Rs.COMPLETE="complete",Wy=Rs,_t.EventType=qe,qe.OPEN="a",qe.CLOSE="b",qe.ERROR="c",qe.MESSAGE="d",W.prototype.listen=W.prototype.J,Ys=_t,bt.prototype.listenOnce=bt.prototype.K,bt.prototype.getLastError=bt.prototype.Ha,bt.prototype.getLastErrorCode=bt.prototype.ya,bt.prototype.getStatus=bt.prototype.ca,bt.prototype.getResponseJson=bt.prototype.La,bt.prototype.getResponseText=bt.prototype.la,bt.prototype.send=bt.prototype.ea,bt.prototype.setWithCredentials=bt.prototype.Fa,qy=bt}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
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
 */let ks="12.10.0";function ok(t){ks=t}/**
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
 */const Di=new Hl("@firebase/firestore");function Yi(){return Di.logLevel}function Ae(t,...e){if(Di.logLevel<=We.DEBUG){const n=e.map(jd);Di.debug(`Firestore (${ks}): ${t}`,...n)}}function wr(t,...e){if(Di.logLevel<=We.ERROR){const n=e.map(jd);Di.error(`Firestore (${ks}): ${t}`,...n)}}function Mi(t,...e){if(Di.logLevel<=We.WARN){const n=e.map(jd);Di.warn(`Firestore (${ks}): ${t}`,...n)}}function jd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Ve(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qy(t,r,n)}function Qy(t,e,n){let r=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw wr(r),new Error(r)}function rt(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Qy(e,i,r)}function Be(t,e){return t}/**
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
 */const ve={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Re extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ht.UNAUTHENTICATED))}shutdown(){}}class lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ck{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){rt(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string",31837,{l:r}),new Jy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class uk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new uk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class im{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){rt(this.o===void 0,3512);const r=s=>{s.error!=null&&Ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new im(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(rt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new im(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=fk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function He(t,e){return t<e?-1:t>e?1:0}function ju(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return tu(i)===tu(s)?He(i,s):tu(i)?1:-1}return He(t.length,e.length)}const pk=55296,mk=57343;function tu(t){const e=t.charCodeAt(0);return e>=pk&&e<=mk}function ms(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const sm="__name__";class jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ve(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ve(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=jn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return He(e.length,n.length)}static compareSegments(e,n){const r=jn.isNumericId(e),i=jn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?jn.extractNumericId(e).compare(jn.extractNumericId(n)):ju(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jr.fromString(e.substring(4,e.length-2))}}class ct extends jn{construct(e,n,r){return new ct(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Re(ve.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ct(n)}static emptyPath(){return new ct([])}}const gk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends jn{construct(e,n,r){return new Ut(e,n,r)}static isValidIdentifier(e){return gk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sm}static keyField(){return new Ut([sm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Re(ve.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Re(ve.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Re(ve.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Re(ve.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(n)}static emptyPath(){return new Ut([])}}/**
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
 */class De{constructor(e){this.path=e}static fromPath(e){return new De(ct.fromString(e))}static fromName(e){return new De(ct.fromString(e).popFirst(5))}static empty(){return new De(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ct.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ct.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new De(new ct(e.slice()))}}/**
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
 */function Yy(t,e,n){if(!n)throw new Re(ve.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vk(t,e,n,r){if(e===!0&&r===!0)throw new Re(ve.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function om(t){if(!De.isDocumentKey(t))throw new Re(ve.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function am(t){if(De.isDocumentKey(t))throw new Re(ve.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ve(12329,{type:typeof t})}function Gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Re(ve.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wd(t);throw new Re(ve.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function xt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Yo(t,e){if(!Xy(t))throw new Re(ve.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Re(ve.INVALID_ARGUMENT,n);return!0}/**
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
 */const lm=-62135596800,cm=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*cm);return new ut(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Re(ve.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Re(ve.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<lm)throw new Re(ve.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Re(ve.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cm}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yo(e,ut._jsonSchema))return new ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:xt("string",ut._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
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
 */class Le{static fromTimestamp(e){return new Le(e)}static min(){return new Le(new ut(0,0))}static max(){return new Le(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oo=-1;function yk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Le.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new ni(i,De.empty(),e)}function _k(t){return new ni(t.readTime,t.key,Oo)}class ni{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ni(Le.min(),De.empty(),Oo)}static max(){return new ni(Le.max(),De.empty(),Oo)}}function bk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=De.comparator(t.documentKey,e.documentKey),n!==0?n:He(t.largestBatchId,e.largestBatchId))}/**
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
 */const wk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ek{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(t){if(t.code!==ve.FAILED_PRECONDITION||t.message!==wk)throw t;Ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class me{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new me((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof me?n:me.resolve(n)}catch(n){return me.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):me.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):me.reject(n)}static resolve(e){return new me((n,r)=>{n(e)})}static reject(e){return new me((n,r)=>{r(e)})}static waitFor(e){return new me((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=me.resolve(!1);for(const r of e)n=n.next(i=>i?me.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new me((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new me((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ik(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const Hd=-1;function Yl(t){return t==null}function dl(t){return t===0&&1/t==-1/0}function Tk(t){return typeof t=="number"&&Number.isInteger(t)&&!dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zy="";function Ck(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=um(e)),e=kk(t.get(n),e);return um(e)}function kk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Zy:n+="";break;default:n+=s}}return n}function um(t){return t+Zy+""}/**
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
 */function dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function e1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class yt{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ft.RED,this.left=i??Ft.EMPTY,this.right=s??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ve(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw Ve(57766)}get value(){throw Ve(16141)}get color(){throw Ve(16727)}get left(){throw Ve(29726)}get right(){throw Ve(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Nt{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hm(this.data.getIterator())}getIteratorFrom(e){return new hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new dn([])}unionWith(e){let n=new Nt(Ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new t1("Invalid base64 string: "+s):s}}(e);return new zt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const xk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ri(t){if(rt(!!t,39018),typeof t=="string"){let e=0;const n=xk.exec(t);if(rt(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:It(t.seconds),nanos:It(t.nanos)}}function It(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?zt.fromBase64String(t):zt.fromUint8Array(t)}/**
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
 */const n1="server_timestamp",r1="__type__",i1="__previous_value__",s1="__local_write_time__";function Gd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[r1])==null?void 0:r.stringValue)===n1}function Xl(t){const e=t.mapValue.fields[i1];return Gd(e)?Xl(e):e}function Do(t){const e=ri(t.mapValue.fields[s1].timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class Sk{constructor(e,n,r,i,s,o,a,l,h,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const hl="(default)";class Mo{constructor(e,n){this.projectId=e,this.database=n||hl}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database===hl}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}function Ak(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Re(ve.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(t.options.projectId,e)}/**
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
 */const o1="__type__",Rk="__max__",ka={mapValue:{}},a1="__vector__",fl="value";function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gd(t)?4:Nk(t)?9007199254740991:Pk(t)?10:11:Ve(28295,{value:t})}function Xn(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ri(i.timestampValue),a=ri(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ii(i.bytesValue).isEqual(ii(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return It(i.geoPointValue.latitude)===It(s.geoPointValue.latitude)&&It(i.geoPointValue.longitude)===It(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return It(i.integerValue)===It(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=It(i.doubleValue),a=It(s.doubleValue);return o===a?dl(o)===dl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dm(o)!==dm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xn(o[l],a[l])))return!1;return!0}(t,e);default:return Ve(52216,{left:t})}}function Vo(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=si(t),r=si(e);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=It(s.integerValue||s.doubleValue),l=It(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return fm(t.timestampValue,e.timestampValue);case 4:return fm(Do(t),Do(e));case 5:return ju(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ii(s),l=ii(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=He(a[h],l[h]);if(f!==0)return f}return He(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=He(It(s.latitude),It(o.latitude));return a!==0?a:He(It(s.longitude),It(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,v,_,u;const a=s.fields||{},l=o.fields||{},h=(g=a[fl])==null?void 0:g.arrayValue,f=(v=l[fl])==null?void 0:v.arrayValue,m=He(((_=h==null?void 0:h.values)==null?void 0:_.length)||0,((u=f==null?void 0:f.values)==null?void 0:u.length)||0);return m!==0?m:pm(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ka.mapValue&&o===ka.mapValue)return 0;if(s===ka.mapValue)return 1;if(o===ka.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const g=ju(l[m],f[m]);if(g!==0)return g;const v=gs(a[l[m]],h[f[m]]);if(v!==0)return v}return He(l.length,f.length)}(t.mapValue,e.mapValue);default:throw Ve(23264,{he:n})}}function fm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return He(t,e);const n=ri(t),r=ri(e),i=He(n.seconds,r.seconds);return i!==0?i:He(n.nanos,r.nanos)}function pm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=gs(n[i],r[i]);if(s)return s}return He(n.length,r.length)}function vs(t){return qu(t)}function qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ri(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ii(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return De.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=qu(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qu(n.fields[o])}`;return i+"}"}(t.mapValue):Ve(61005,{value:t})}function ja(t){switch(si(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xl(t);return e?16+ja(e):16;case 5:return 2*t.stringValue.length;case 6:return ii(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ja(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ui(r.fields,(s,o)=>{i+=s.length+ja(o)}),i}(t.mapValue);default:throw Ve(13486,{value:t})}}function Wu(t){return!!t&&"integerValue"in t}function Kd(t){return!!t&&"arrayValue"in t}function mm(t){return!!t&&"nullValue"in t}function gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function Pk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[o1])==null?void 0:r.stringValue)===a1}function go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return{...t}}function Nk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Rk}/**
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
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=Ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=go(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new an(go(this.value))}}function l1(t){const e=[];return ui(t.fields,(n,r)=>{const i=new Ut([n]);if(qa(r)){const s=l1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
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
 */class Kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Kt(e,0,Le.min(),Le.min(),Le.min(),an.empty(),0)}static newFoundDocument(e,n,r,i){return new Kt(e,1,n,Le.min(),r,i,0)}static newNoDocument(e,n){return new Kt(e,2,n,Le.min(),Le.min(),an.empty(),0)}static newUnknownDocument(e,n){return new Kt(e,3,n,Le.min(),Le.min(),an.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pl{constructor(e,n){this.position=e,this.inclusive=n}}function vm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=De.comparator(De.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ok(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class c1{}class Rt extends c1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Mk(e,n,r):n==="array-contains"?new Fk(e,r):n==="in"?new $k(e,r):n==="not-in"?new Uk(e,r):n==="array-contains-any"?new Bk(e,r):new Rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Vk(e,r):new Lk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&si(this.value)===si(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends c1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Zn(e,n)}matches(e){return u1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function u1(t){return t.op==="and"}function d1(t){return Dk(t)&&u1(t)}function Dk(t){for(const e of t.filters)if(e instanceof Zn)return!1;return!0}function Hu(t){if(t instanceof Rt)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(d1(t))return t.filters.map(e=>Hu(e)).join(",");{const e=t.filters.map(n=>Hu(n)).join(",");return`${t.op}(${e})`}}function h1(t,e){return t instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.field.isEqual(i.field)&&Xn(r.value,i.value)}(t,e):t instanceof Zn?function(r,i){return i instanceof Zn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&h1(o,i.filters[a]),!0):!1}(t,e):void Ve(19439)}function f1(t){return t instanceof Rt?function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`}(t):t instanceof Zn?function(n){return n.op.toString()+" {"+n.getFilters().map(f1).join(" ,")+"}"}(t):"Filter"}class Mk extends Rt{constructor(e,n,r){super(e,n,r),this.key=De.fromName(r.referenceValue)}matches(e){const n=De.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vk extends Rt{constructor(e,n){super(e,"in",n),this.keys=p1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lk extends Rt{constructor(e,n){super(e,"not-in",n),this.keys=p1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function p1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>De.fromName(r.referenceValue))}class Fk extends Rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kd(n)&&Vo(n.arrayValue,this.value)}}class $k extends Rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class Uk extends Rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vo(this.value.arrayValue,n)}}class Bk extends Rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
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
 */class zk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function _m(t,e=null,n=[],r=[],i=null,s=null,o=null){return new zk(t,e,n,r,i,s,o)}function Qd(t){const e=Be(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),e.Te=n}return e.Te}function Jd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ok(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ym(t.startAt,e.startAt)&&ym(t.endAt,e.endAt)}function Gu(t){return De.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function jk(t,e,n,r,i,s,o,a){return new Zl(t,e,n,r,i,s,o,a)}function Yd(t){return new Zl(t)}function bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qk(t){return De.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Wk(t){return t.collectionGroup!==null}function vo(t){const e=Be(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Nt(Ut.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ml(s,r))}),n.has(Ut.keyField().canonicalString())||e.Ie.push(new ml(Ut.keyField(),r))}return e.Ie}function Kn(t){const e=Be(t);return e.Ee||(e.Ee=Hk(e,vo(t))),e.Ee}function Hk(t,e){if(t.limitType==="F")return _m(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ml(i.field,s)});const n=t.endAt?new pl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pl(t.startAt.position,t.startAt.inclusive):null;return _m(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ku(t,e,n){return new Zl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Jd(Kn(t),Kn(e))&&t.limitType===e.limitType}function m1(t){return`${Qd(Kn(t))}|lt:${t.limitType}`}function Xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>f1(i)).join(", ")}]`),Yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vs(i)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):De.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of vo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const h=vm(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,vo(r),i)||r.endAt&&!function(o,a,l){const h=vm(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,vo(r),i))}(t,e)}function Gk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g1(t){return(e,n)=>{let r=!1;for(const i of vo(t)){const s=Kk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Kk(t,e,n){const r=t.field.isKeyField()?De.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),h=a.data.field(s);return l!==null&&h!==null?gs(l,h):Ve(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ve(19790,{direction:t.dir})}}/**
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
 */class zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return e1(this.inner)}size(){return this.innerSize}}/**
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
 */const Qk=new yt(De.comparator);function Er(){return Qk}const v1=new yt(De.comparator);function Xs(...t){let e=v1;for(const n of t)e=e.insert(n.key,n);return e}function y1(t){let e=v1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xi(){return yo()}function _1(){return yo()}function yo(){return new zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jk=new yt(De.comparator),Yk=new Nt(De.comparator);function Ge(...t){let e=Yk;for(const n of t)e=e.add(n);return e}const Xk=new Nt(He);function Zk(){return Xk}/**
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
 */function Xd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dl(e)?"-0":e}}function b1(t){return{integerValue:""+t}}function ex(t,e){return Tk(e)?b1(e):Xd(t,e)}/**
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
 */class nc{constructor(){this._=void 0}}function tx(t,e,n){return t instanceof gl?function(i,s){const o={fields:{[r1]:{stringValue:n1},[s1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gd(s)&&(s=Xl(s)),s&&(o.fields[i1]=s),{mapValue:o}}(n,e):t instanceof Lo?E1(t,e):t instanceof Fo?I1(t,e):function(i,s){const o=w1(i,s),a=wm(o)+wm(i.Ae);return Wu(o)&&Wu(i.Ae)?b1(a):Xd(i.serializer,a)}(t,e)}function nx(t,e,n){return t instanceof Lo?E1(t,e):t instanceof Fo?I1(t,e):n}function w1(t,e){return t instanceof vl?function(r){return Wu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gl extends nc{}class Lo extends nc{constructor(e){super(),this.elements=e}}function E1(t,e){const n=T1(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends nc{constructor(e){super(),this.elements=e}}function I1(t,e){let n=T1(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class vl extends nc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function wm(t){return It(t.integerValue||t.doubleValue)}function T1(t){return Kd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Lo&&i instanceof Lo||r instanceof Fo&&i instanceof Fo?ms(r.elements,i.elements,Xn):r instanceof vl&&i instanceof vl?Xn(r.Ae,i.Ae):r instanceof gl&&i instanceof gl}(t.transform,e.transform)}class ix{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function C1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ic(t.key,pn.none()):new Xo(t.key,t.data,pn.none());{const n=t.data,r=an.empty();let i=new Nt(Ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new di(t.key,r,new dn(i.toArray()),pn.none())}}function sx(t,e,n){t instanceof Xo?function(i,s,o){const a=i.value.clone(),l=Im(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof di?function(i,s,o){if(!Wa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Im(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(k1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof Xo?function(s,o,a,l){if(!Wa(s.precondition,o))return a;const h=s.value.clone(),f=Tm(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof di?function(s,o,a,l){if(!Wa(s.precondition,o))return a;const h=Tm(s.fieldTransforms,l,o),f=o.data;return f.setAll(k1(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,a){return Wa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ox(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=w1(r.transform,i||null);s!=null&&(n===null&&(n=an.empty()),n.set(r.field,s))}return n||null}function Em(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ms(r,i,(s,o)=>rx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends rc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class di extends rc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function k1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Im(t,e,n){const r=new Map;rt(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,nx(o,a,n[i]))}return r}function Tm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tx(s,o,e))}return r}class ic extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ax extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=C1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ge())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>Em(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>Em(n,r))}}class Zd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){rt(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Jk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zd(e,n,r,i)}}/**
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
 */class cx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ux{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ct,Ke;function dx(t){switch(t){case ve.OK:return Ve(64938);case ve.CANCELLED:case ve.UNKNOWN:case ve.DEADLINE_EXCEEDED:case ve.RESOURCE_EXHAUSTED:case ve.INTERNAL:case ve.UNAVAILABLE:case ve.UNAUTHENTICATED:return!1;case ve.INVALID_ARGUMENT:case ve.NOT_FOUND:case ve.ALREADY_EXISTS:case ve.PERMISSION_DENIED:case ve.FAILED_PRECONDITION:case ve.ABORTED:case ve.OUT_OF_RANGE:case ve.UNIMPLEMENTED:case ve.DATA_LOSS:return!0;default:return Ve(15467,{code:t})}}function x1(t){if(t===void 0)return wr("GRPC error has no .code"),ve.UNKNOWN;switch(t){case Ct.OK:return ve.OK;case Ct.CANCELLED:return ve.CANCELLED;case Ct.UNKNOWN:return ve.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return ve.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return ve.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return ve.INTERNAL;case Ct.UNAVAILABLE:return ve.UNAVAILABLE;case Ct.UNAUTHENTICATED:return ve.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return ve.INVALID_ARGUMENT;case Ct.NOT_FOUND:return ve.NOT_FOUND;case Ct.ALREADY_EXISTS:return ve.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return ve.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return ve.FAILED_PRECONDITION;case Ct.ABORTED:return ve.ABORTED;case Ct.OUT_OF_RANGE:return ve.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return ve.UNIMPLEMENTED;case Ct.DATA_LOSS:return ve.DATA_LOSS;default:return Ve(39323,{code:t})}}(Ke=Ct||(Ct={}))[Ke.OK=0]="OK",Ke[Ke.CANCELLED=1]="CANCELLED",Ke[Ke.UNKNOWN=2]="UNKNOWN",Ke[Ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ke[Ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ke[Ke.NOT_FOUND=5]="NOT_FOUND",Ke[Ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ke[Ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ke[Ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ke[Ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ke[Ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ke[Ke.ABORTED=10]="ABORTED",Ke[Ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ke[Ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ke[Ke.INTERNAL=13]="INTERNAL",Ke[Ke.UNAVAILABLE=14]="UNAVAILABLE",Ke[Ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hx(){return new TextEncoder}/**
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
 */const fx=new Jr([4294967295,4294967295],0);function Cm(t){const e=hx().encode(t),n=new jy;return n.update(e),new Uint8Array(n.digest())}function km(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([i,s],0)]}class eh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zs(`Invalid padding: ${n}`);if(r<0)throw new Zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Jr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Jr.fromNumber(r)));return i.compare(fx)===1&&(i=new Jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cm(e),[r,i]=km(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new eh(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=Cm(e),[r,i]=km(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(Le.min(),i,new yt(He),Er(),Ge())}}class Zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zo(r,n,Ge(),Ge(),Ge())}}/**
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
 */class Ha{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class S1{constructor(e,n){this.targetId=e,this.Ce=n}}class A1{constructor(e,n,r=zt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xm{constructor(){this.ve=0,this.Fe=Sm(),this.Me=zt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ge(),n=Ge(),r=Ge();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Ve(38017,{changeType:s})}}),new Zo(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Sm()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,rt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class px{constructor(e){this.Ge=e,this.ze=new Map,this.je=Er(),this.He=xa(),this.Je=xa(),this.Ze=new yt(He)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Ve(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Gu(s))if(r===0){const o=new De(s.path);this.et(n,o,Kt.newNoDocument(o,Le.min()))}else rt(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ii(r).toUint8Array()}catch(l){if(l instanceof t1)return Mi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new eh(o,i,s)}catch(l){return Mi(l instanceof Zs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&Gu(a.target)){const l=new De(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Kt.newNoDocument(l,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=Ge();this.Je.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new sc(e,n,this.Ze,this.je,r);return this.je=Er(),this.He=xa(),this.Je=xa(),this.Ze=new yt(He),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new xm,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Nt(He),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Nt(He),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Ae("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new xm),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function xa(){return new yt(De.comparator)}function Sm(){return new yt(De.comparator)}const mx={asc:"ASCENDING",desc:"DESCENDING"},gx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vx={and:"AND",or:"OR"};class yx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qu(t,e){return t.useProto3Json||Yl(e)?e:{value:e}}function yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _x(t,e){return yl(t,e.toTimestamp())}function Qn(t){return rt(!!t,49232),Le.fromTimestamp(function(n){const r=ri(n);return new ut(r.seconds,r.nanos)}(t))}function th(t,e){return Ju(t,e).canonicalString()}function Ju(t,e){const n=function(i){return new ct(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function P1(t){const e=ct.fromString(t);return rt(V1(e),10190,{key:e.toString()}),e}function Yu(t,e){return th(t.databaseId,e.path)}function nu(t,e){const n=P1(e);if(n.get(1)!==t.databaseId.projectId)throw new Re(ve.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Re(ve.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new De(O1(n))}function N1(t,e){return th(t.databaseId,e)}function bx(t){const e=P1(t);return e.length===4?ct.emptyPath():O1(e)}function Xu(t){return new ct(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function O1(t){return rt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Am(t,e,n){return{name:Yu(t,e),fields:n.value.mapValue.fields}}function wx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Ve(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(rt(f===void 0||typeof f=="string",58123),zt.fromBase64String(f||"")):(rt(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),zt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const f=h.code===void 0?ve.UNKNOWN:x1(h.code);return new Re(f,h.message||"")}(o);n=new A1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nu(t,r.document.name),s=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):Le.min(),a=new an({mapValue:{fields:r.document.fields}}),l=Kt.newFoundDocument(i,s,o,a),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ha(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nu(t,r.document),s=r.readTime?Qn(r.readTime):Le.min(),o=Kt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nu(t,r.document),s=r.removedTargetIds||[];n=new Ha([],s,i,null)}else{if(!("filter"in e))return Ve(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ux(i,s),a=r.targetId;n=new S1(a,o)}}return n}function Ex(t,e){let n;if(e instanceof Xo)n={update:Am(t,e.key,e.value)};else if(e instanceof ic)n={delete:Yu(t,e.key)};else if(e instanceof di)n={update:Am(t,e.key,e.data),updateMask:Px(e.fieldMask)};else{if(!(e instanceof ax))return Ve(16599,{dt:e.type});n={verify:Yu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vl)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Ve(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_x(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ve(27497)}(t,e.precondition)),n}function Ix(t,e){return t&&t.length>0?(rt(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Qn(i.updateTime):Qn(s);return o.isEqual(Le.min())&&(o=Qn(s)),new ix(o,i.transformResults||[])}(n,e))):[]}function Tx(t,e){return{documents:[N1(t,e.path)]}}function Cx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=N1(t,i);const s=function(h){if(h.length!==0)return M1(Zn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Zi(g.field),direction:Sx(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function kx(t){let e=bx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){rt(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=D1(m);return g instanceof Zn&&d1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(_){return new ml(es(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(m){let g;return g=typeof m=="object"?m.value:m,Yl(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(m){const g=!!m.before,v=m.values||[];return new pl(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,v=m.values||[];return new pl(v,g)}(n.endAt)),jk(e,i,o,s,a,"F",l,h)}function xx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ve(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function D1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return Rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return Rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return Rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return Rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ve(61313);default:return Ve(60726)}}(t):t.fieldFilter!==void 0?function(n){return Rt.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ve(58110);default:return Ve(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zn.create(n.compositeFilter.filters.map(r=>D1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ve(1026)}}(n.compositeFilter.op))}(t):Ve(30097,{filter:t})}function Sx(t){return mx[t]}function Ax(t){return gx[t]}function Rx(t){return vx[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return Ut.fromServerFormat(t.fieldPath)}function M1(t){return t instanceof Rt?function(n){if(n.op==="=="){if(gm(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(mm(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gm(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(mm(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:Ax(n.op),value:n.value}}}(t):t instanceof Zn?function(n){const r=n.getFilters().map(i=>M1(i));return r.length===1?r[0]:{compositeFilter:{op:Rx(n.op),filters:r}}}(t):Ve(54877,{filter:t})}function Px(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function V1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function L1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Hr{constructor(e,n,r,i,s=Le.min(),o=Le.min(),a=zt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Nx{constructor(e){this.yt=e}}function Ox(t){const e=kx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ku(e,e.limit,"L"):e}/**
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
 */class Dx{constructor(){this.Sn=new Mx}addToCollectionParentIndex(e,n){return this.Sn.add(n),me.resolve()}getCollectionParents(e,n){return me.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return me.resolve()}deleteFieldIndex(e,n){return me.resolve()}deleteAllFieldIndexes(e){return me.resolve()}createTargetIndexes(e,n){return me.resolve()}getDocumentsMatchingTarget(e,n){return me.resolve(null)}getIndexType(e,n){return me.resolve(0)}getFieldIndexes(e,n){return me.resolve([])}getNextCollectionGroupToUpdate(e){return me.resolve(null)}getMinOffset(e,n){return me.resolve(ni.min())}getMinOffsetFromCollectionGroup(e,n){return me.resolve(ni.min())}updateCollectionGroup(e,n,r){return me.resolve()}updateIndexEntries(e,n){return me.resolve()}}class Mx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Nt(ct.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Nt(ct.comparator)).toArray()}}/**
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
 */const Rm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},F1=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(F1,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
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
 */class ys{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ys(0)}static ar(){return new ys(-1)}}/**
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
 */const Pm="LruGarbageCollector",Vx=1048576;function Nm([t,e],[n,r]){const i=He(t,n);return i===0?He(e,r):i}class Lx{constructor(e){this.Pr=e,this.buffer=new Nt(Nm),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Nm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Fx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Ae(Pm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ss(n)?Ae(Pm,"Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.Ar(3e5)})}}class $x{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return me.resolve(Jl.ce);const r=new Lx(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Ae("LruGarbageCollector","Garbage collection skipped; disabled"),me.resolve(Rm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rm):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(Ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Yi()<=We.DEBUG&&Ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),me.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Ux(t,e){return new $x(t,e)}/**
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
 */class Bx{constructor(){this.changes=new zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?me.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_o(r.mutation,i,dn.empty(),ut.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ge()){const i=xi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Er();const o=yo(),a=function(){return yo()}();return n.forEach((l,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof di)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),_o(f.mutation,h,f.mutation.getFieldMask(),ut.now())):o.set(h.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>a.set(h,new zx(f,o.get(h)??null))),a))}recalculateAndSaveOverlays(e,n){const r=yo();let i=new yt((o,a)=>o-a),s=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||dn.empty();f=a.applyToLocalView(h,f),r.set(l,f);const m=(i.get(a.batchId)||Ge()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,m=_1();f.forEach(g=>{if(!s.has(g)){const v=C1(n.get(g),r.get(g));v!==null&&m.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return me.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return qk(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):me.resolve(xi());let a=Oo,l=s;return o.next(h=>me.forEach(h,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),s.get(f)?me.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,Ge())).next(f=>({batchId:a,changes:y1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new De(n)).next(r=>{let i=Xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,s).next(a=>me.forEach(a,l=>{const h=function(m,g){return new Zl(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Kt.newInvalidDocument(f)))});let a=Xs();return o.forEach((l,h)=>{const f=s.get(l);f!==void 0&&_o(f.mutation,h,dn.empty(),ut.now()),tc(n,h)&&(a=a.insert(l,h))}),a})}}/**
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
 */class qx{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return me.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qn(i.createTime)}}(n)),me.resolve()}getNamedQuery(e,n){return me.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:Ox(i.bundledQuery),readTime:Qn(i.readTime)}}(n)),me.resolve()}}/**
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
 */class Wx{constructor(){this.overlays=new yt(De.comparator),this.Lr=new Map}getOverlay(e,n){return me.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xi();return me.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),me.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),me.resolve()}getOverlaysForCollection(e,n,r){const i=xi(),s=n.length+1,o=new De(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return me.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new yt((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=xi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=xi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>a.set(h,f)),!(a.size()>=i)););return me.resolve(a)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cx(n,r));let s=this.Lr.get(n);s===void 0&&(s=Ge(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class Hx{constructor(){this.sessionToken=zt.EMPTY_BYTE_STRING}getSessionToken(e){return me.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,me.resolve()}}/**
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
 */class nh{constructor(){this.kr=new Nt(Mt.Kr),this.qr=new Nt(Mt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Mt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Mt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new De(new ct([])),r=new Mt(n,e),i=new Mt(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new De(new ct([])),r=new Mt(n,e),i=new Mt(n,e+1);let s=Ge();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Mt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Mt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return De.comparator(e.key,n.key)||He(e.Hr,n.Hr)}static Ur(e,n){return He(e.Hr,n.Hr)||De.comparator(e.key,n.key)}}/**
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
 */class Gx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Nt(Mt.Kr)}checkEmpty(e){return me.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Jr=this.Jr.add(new Mt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return me.resolve(o)}lookupMutationBatch(e,n){return me.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return me.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return me.resolve(this.mutationQueue.length===0?Hd:this.Yn-1)}getAllMutationBatches(e){return me.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Mt(n,0),i=new Mt(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),me.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Nt(He);return n.forEach(i=>{const s=new Mt(i,0),o=new Mt(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),me.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;De.isDocumentKey(s)||(s=s.child(""));const o=new Mt(new De(s),0);let a=new Nt(He);return this.Jr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(l.Hr)),!0)},o),me.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){rt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return me.forEach(n.mutations,i=>{const s=new Mt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Mt(n,0),i=this.Jr.firstAfterOrEqual(r);return me.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,me.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kx{constructor(e){this.ti=e,this.docs=function(){return new yt(De.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return me.resolve(r?r.document.mutableCopy():Kt.newInvalidDocument(n))}getEntries(e,n){let r=Er();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Kt.newInvalidDocument(i))}),me.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Er();const o=n.path,a=new De(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||bk(_k(f),r)<=0||(i.has(f.key)||tc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return me.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Ve(9500)}ni(e,n){return me.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qx(this)}getSize(e){return me.resolve(this.size)}}class Qx extends Bx{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),me.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class Jx{constructor(e){this.persistence=e,this.ri=new zi(n=>Qd(n),Jd),this.lastRemoteSnapshotVersion=Le.min(),this.highestTargetId=0,this.ii=0,this.si=new nh,this.targetCount=0,this.oi=ys._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),me.resolve()}getLastRemoteSnapshotVersion(e){return me.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return me.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),me.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),me.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,me.resolve()}updateTargetData(e,n){return this.lr(n),me.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,me.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),me.waitFor(s).next(()=>i)}getTargetCount(e){return me.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return me.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),me.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),me.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),me.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return me.resolve(r)}containsKey(e,n){return me.resolve(this.si.containsKey(n))}}/**
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
 */class $1{constructor(e,n){this._i={},this.overlays={},this.ai=new Jl(0),this.ui=!1,this.ui=!0,this.ci=new Hx,this.referenceDelegate=e(this),this.li=new Jx(this),this.indexManager=new Dx,this.remoteDocumentCache=function(i){return new Kx(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Nx(n),this.Pi=new qx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Gx(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){Ae("MemoryPersistence","Starting transaction:",e);const i=new Yx(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return me.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Yx extends Ek{constructor(e){super(),this.currentSequenceNumber=e}}class rh{constructor(e){this.persistence=e,this.Ri=new nh,this.Ai=null}static Vi(e){return new rh(e)}get di(){if(this.Ai)return this.Ai;throw Ve(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),me.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),me.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),me.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return me.forEach(this.di,r=>{const i=De.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Le.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return me.or([()=>me.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class _l{constructor(e,n){this.persistence=e,this.fi=new zi(r=>Ck(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Ux(this,n)}static Vi(e,n){return new _l(e,n)}Ti(){}Ii(e){return me.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return me.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?me.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Le.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),me.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),me.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),me.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),me.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ja(e.data.value)),n}wr(e,n,r){return me.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return me.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ih{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=Ge(),i=Ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ih(e,n.fromCache,r,i)}}/**
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
 */class Xx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Zx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return EE()?8:Ik(Xt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Xx;return this.ys(e,n,o).next(a=>{if(s.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Yi()<=We.DEBUG&&Ae("QueryEngine","SDK will not create cache indexes for query:",Xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),me.resolve()):(Yi()<=We.DEBUG&&Ae("QueryEngine","Query:",Xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Yi()<=We.DEBUG&&Ae("QueryEngine","The SDK decides to create cache indexes for query:",Xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):me.resolve())}gs(e,n){if(bm(n))return me.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ku(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ge(...s);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.bs(n,a);return this.Ss(n,h,o,l.readTime)?this.gs(e,Ku(n,null,"F")):this.Ds(e,h,n,l)}))})))}ps(e,n,r,i){return bm(n)||i.isEqual(Le.min())?me.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?me.resolve(null):(Yi()<=We.DEBUG&&Ae("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xi(n)),this.Ds(e,o,n,yk(i,Oo)).next(a=>a))})}bs(e,n){let r=new Nt(g1(e));return n.forEach((i,s)=>{tc(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Yi()<=We.DEBUG&&Ae("QueryEngine","Using full collection scan to execute query:",Xi(n)),this.fs.getDocumentsMatchingQuery(e,n,ni.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const sh="LocalStore",eS=3e8;class tS{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new yt(He),this.Fs=new zi(s=>Qd(s),Jd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jx(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function nS(t,e,n,r){return new tS(t,e,n,r)}async function U1(t,e){const n=Be(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Ge();for(const h of i){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:a}))})})}function rS(t,e){const n=Be(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,h,f){const m=h.batch,g=m.keys();let v=me.resolve();return g.forEach(_=>{v=v.next(()=>f.getEntry(l,_)).next(u=>{const w=h.docVersions.get(_);rt(w!==null,48541),u.version.compareTo(w)<0&&(m.applyToRemoteDocument(u,h),u.isValidDocument()&&(u.setReadTime(h.commitVersion),f.addEntry(u)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ge();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function B1(t){const e=Be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function iS(t,e){const n=Be(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const a=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;a.push(n.li.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,m)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?v=v.withResumeToken(zt.EMPTY_BYTE_STRING,Le.min()).withLastLimboFreeSnapshotVersion(Le.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(m,v),function(u,w,C){return u.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=eS?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,v,f)&&a.push(n.li.updateTargetData(s,v))});let l=Er(),h=Ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(sS(s,o,e.documentUpdates).next(f=>{l=f.Bs,h=f.Ls})),!r.isEqual(Le.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return me.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(n.vs=i,s))}function sS(t,e,n){let r=Ge(),i=Ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Er();return n.forEach((a,l)=>{const h=s.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Ae(sh,"Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)}),{Bs:o,Ls:i}})}function oS(t,e){const n=Be(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aS(t,e){const n=Be(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,me.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Zu(t,e,n){const r=Be(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ss(o))throw o;Ae(sh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Om(t,e,n){const r=Be(t);let i=Le.min(),s=Ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const m=Be(l),g=m.Fs.get(f);return g!==void 0?me.resolve(m.vs.get(g)):m.li.getTargetData(h,f)}(r,o,Kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Le.min(),n?s:Ge())).next(a=>(lS(r,Gk(e),a),{documents:a,ks:s})))}function lS(t,e,n){let r=t.Ms.get(e)||Le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Dm{constructor(){this.activeTargetIds=Zk()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cS{constructor(){this.vo=new Dm,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uS{Mo(e){}shutdown(){}}/**
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
 */const Mm="ConnectivityMonitor";class Vm{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Ae(Mm,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Ae(Mm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ru="RestConnection",dS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hS{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===hl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=ed(),a=this.Qo(e,n.toUriEncodedString());Ae(ru,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:h}=new URL(a),f=Es(h);return this.zo(e,a,l,r,f).then(m=>(Ae(ru,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Mi(ru,`RPC '${e}' ${o} failed with error: `,m,"url: ",a,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=dS[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class fS{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const jt="WebChannelConnection",Gs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ls extends hS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ls.c_){const e=Gy();Gs(e,Hy.STAT_EVENT,n=>{n.stat===zu.PROXY?Ae(jt,"STAT_EVENT: detected buffering proxy"):n.stat===zu.NOPROXY&&Ae(jt,"STAT_EVENT: detected no buffering proxy")}),ls.c_=!0}}zo(e,n,r,i,s){const o=ed();return new Promise((a,l)=>{const h=new qy;h.setWithCredentials(!0),h.listenOnce(Wy.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case za.NO_ERROR:const m=h.getResponseJson();Ae(jt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case za.TIMEOUT:Ae(jt,`RPC '${e}' ${o} timed out`),l(new Re(ve.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const g=h.getStatus();if(Ae(jt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const _=v==null?void 0:v.error;if(_&&_.status&&_.message){const u=function(C){const R=C.toLowerCase().replace(/_/g,"-");return Object.values(ve).indexOf(R)>=0?R:ve.UNKNOWN}(_.status);l(new Re(u,_.message))}else l(new Re(ve.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Re(ve.UNAVAILABLE,"Connection failed."));break;default:Ve(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Ae(jt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);Ae(jt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=ed(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const h=s.join("");Ae(jt,`Creating RPC '${e}' stream ${i}: ${h}`,a);const f=o.createWebChannel(h,a);this.I_(f);let m=!1,g=!1;const v=new fS({Ho:_=>{g?Ae(jt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(m||(Ae(jt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Ae(jt,`RPC '${e}' stream ${i} sending:`,_),f.send(_))},Jo:()=>f.close()});return Gs(f,Ys.EventType.OPEN,()=>{g||(Ae(jt,`RPC '${e}' stream ${i} transport opened.`),v.i_())}),Gs(f,Ys.EventType.CLOSE,()=>{g||(g=!0,Ae(jt,`RPC '${e}' stream ${i} transport closed`),v.o_(),this.E_(f))}),Gs(f,Ys.EventType.ERROR,_=>{g||(g=!0,Mi(jt,`RPC '${e}' stream ${i} transport errored. Name:`,_.name,"Message:",_.message),v.o_(new Re(ve.UNAVAILABLE,"The operation could not be completed")))}),Gs(f,Ys.EventType.MESSAGE,_=>{var u;if(!g){const w=_.data[0];rt(!!w,16349);const C=w,R=(C==null?void 0:C.error)||((u=C[0])==null?void 0:u.error);if(R){Ae(jt,`RPC '${e}' stream ${i} received error:`,R);const V=R.status;let M=function(k){const E=Ct[k];if(E!==void 0)return x1(E)}(V),F=R.message;V==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&Mi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=ve.INTERNAL,F="Unknown error status: "+V+" with message "+R.message),g=!0,v.o_(new Re(M,F)),f.close()}else Ae(jt,`RPC '${e}' stream ${i} received:`,w),v.__(w)}}),ls.u_(),setTimeout(()=>{v.s_()},0),v}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ky()}}/**
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
 */function pS(t){return new ls(t)}function iu(){return typeof document<"u"?document:null}/**
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
 */function oc(t){return new yx(t,!0)}/**
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
 */ls.c_=!1;class z1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Ae("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Lm="PersistentStream";class j1{constructor(e,n,r,i,s,o,a,l){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new z1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ve.RESOURCE_EXHAUSTED?(wr(n.toString()),wr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ve.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new Re(ve.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Ae(Lm,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(Ae(Lm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mS extends j1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=wx(this.serializer,e),r=function(s){if(!("targetChange"in s))return Le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Le.min():o.readTime?Qn(o.readTime):Le.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Xu(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Gu(l)?{documents:Tx(s,l)}:{query:Cx(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=R1(s,o.resumeToken);const h=Qu(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(Le.min())>0){a.readTime=yl(s,o.snapshotVersion.toTimestamp());const h=Qu(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=xx(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Xu(this.serializer),n.removeTarget=e,this.K_(n)}}class gS extends j1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return rt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,rt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){rt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Ix(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Xu(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ex(this.serializer,r))};this.K_(n)}}/**
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
 */class vS{}class yS extends vS{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Re(ve.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Ju(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ve.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Re(ve.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Ju(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ve.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Re(ve.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _S(t,e,n,r){return new yS(t,e,n,r)}class bS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(wr(n),this.aa=!1):Ae("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Vi="RemoteStore";class wS{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ji(this)&&(Ae(Vi,"Restarting streams for network reachability change."),await async function(l){const h=Be(l);h.Ea.add(4),await ea(h),h.Va.set("Unknown"),h.Ea.delete(4),await ac(h)}(this))})}),this.Va=new bS(r,i)}}async function ac(t){if(ji(t))for(const e of t.Ra)await e(!0)}async function ea(t){for(const e of t.Ra)await e(!1)}function q1(t,e){const n=Be(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ch(n)?lh(n):As(n).O_()&&ah(n,e))}function oh(t,e){const n=Be(t),r=As(n);n.Ia.delete(e),r.O_()&&W1(n,e),n.Ia.size===0&&(r.O_()?r.L_():ji(n)&&n.Va.set("Unknown"))}function ah(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).Z_(e)}function W1(t,e){t.da.$e(e),As(t).X_(e)}function lh(t){t.da=new px({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),As(t).start(),t.Va.ua()}function ch(t){return ji(t)&&!As(t).x_()&&t.Ia.size>0}function ji(t){return Be(t).Ea.size===0}function H1(t){t.da=void 0}async function ES(t){t.Va.set("Online")}async function IS(t){t.Ia.forEach((e,n)=>{ah(t,e)})}async function TS(t,e){H1(t),ch(t)?(t.Va.ha(e),lh(t)):t.Va.set("Unknown")}async function CS(t,e,n){if(t.Va.set("Online"),e instanceof A1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.da.removeTarget(a))}(t,e)}catch(r){Ae(Vi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof Ha?t.da.Xe(e):e instanceof S1?t.da.st(e):t.da.tt(e),!n.isEqual(Le.min()))try{const r=await B1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.da.Tt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=s.Ia.get(l);if(!f)return;s.Ia.set(l,f.withResumeToken(zt.EMPTY_BYTE_STRING,f.snapshotVersion)),W1(s,l);const m=new Hr(f.target,l,h,f.sequenceNumber);ah(s,m)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Ae(Vi,"Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!Ss(e))throw e;t.Ea.add(1),await ea(t),t.Va.set("Offline"),n||(n=()=>B1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Ae(Vi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ac(t)})}function G1(t,e){return e().catch(n=>bl(t,n,e))}async function lc(t){const e=Be(t),n=oi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hd;for(;kS(e);)try{const i=await oS(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,xS(e,i)}catch(i){await bl(e,i)}K1(e)&&Q1(e)}function kS(t){return ji(t)&&t.Ta.length<10}function xS(t,e){t.Ta.push(e);const n=oi(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function K1(t){return ji(t)&&!oi(t).x_()&&t.Ta.length>0}function Q1(t){oi(t).start()}async function SS(t){oi(t).ra()}async function AS(t){const e=oi(t);for(const n of t.Ta)e.ea(n.mutations)}async function RS(t,e,n){const r=t.Ta.shift(),i=Zd.from(r,e,n);await G1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lc(t)}async function PS(t,e){e&&oi(t).Y_&&await async function(r,i){if(function(o){return dx(o)&&o!==ve.ABORTED}(i.code)){const s=r.Ta.shift();oi(r).B_(),await G1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await lc(r)}}(t,e),K1(t)&&Q1(t)}async function Fm(t,e){const n=Be(t);n.asyncQueue.verifyOperationInProgress(),Ae(Vi,"RemoteStore received new credentials");const r=ji(n);n.Ea.add(3),await ea(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ac(n)}async function NS(t,e){const n=Be(t);e?(n.Ea.delete(2),await ac(n)):e||(n.Ea.add(2),await ea(n),n.Va.set("Unknown"))}function As(t){return t.ma||(t.ma=function(n,r,i){const s=Be(n);return s.sa(),new mS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:ES.bind(null,t),Yo:IS.bind(null,t),t_:TS.bind(null,t),J_:CS.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ch(t)?lh(t):t.Va.set("Unknown")):(await t.ma.stop(),H1(t))})),t.ma}function oi(t){return t.fa||(t.fa=function(n,r,i){const s=Be(n);return s.sa(),new gS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:SS.bind(null,t),t_:PS.bind(null,t),ta:AS.bind(null,t),na:RS.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await lc(t)):(await t.fa.stop(),t.Ta.length>0&&(Ae(Vi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class uh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new uh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Re(ve.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(t,e){if(wr("AsyncQueue",`${e}: ${t}`),Ss(t))return new Re(ve.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||De.comparator(n.key,r.key):(n,r)=>De.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new yt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class $m{constructor(){this.ga=new yt(De.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ve(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class _s{constructor(e,n,r,i,s,o,a,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _s(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class OS{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class DS{constructor(){this.queries=Um(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Be(n),s=i.queries;i.queries=Um(),s.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new Re(ve.ABORTED,"Firestore shutting down"))}}function Um(){return new zi(t=>m1(t),ec)}async function J1(t,e){const n=Be(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new OS,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=dh(o,`Initialization of query '${Xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&hh(n)}async function Y1(t,e){const n=Be(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MS(t,e){const n=Be(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ba)a.Fa(i)&&(r=!0);o.wa=i}}r&&hh(n)}function VS(t,e,n){const r=Be(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function hh(t){t.Ca.forEach(e=>{e.next()})}var td,Bm;(Bm=td||(td={})).Ma="default",Bm.Cache="cache";class X1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==td.Cache}}/**
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
 */class Z1{constructor(e){this.key=e}}class e_{constructor(e){this.key=e}}class LS{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ge(),this.mutatedKeys=Ge(),this.eu=g1(e),this.tu=new cs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new $m,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),v=tc(this.query,m)?m:null,_=!!g&&this.mutatedKeys.has(g.key),u=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let w=!1;g&&v?g.data.isEqual(v.data)?_!==u&&(r.track({type:3,doc:v}),w=!0):this.su(g,v)||(r.track({type:2,doc:v}),w=!0,(l&&this.eu(v,l)>0||h&&this.eu(v,h)<0)&&(a=!0)):!g&&v?(r.track({type:0,doc:v}),w=!0):g&&!v&&(r.track({type:1,doc:g}),w=!0,(l||h)&&(a=!0)),w&&(v?(o=o.add(v),s=u?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:a,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(v,_){const u=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ve(20277,{Vt:w})}};return u(v)-u(_)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const a=n&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new _s(this.query,e.tu,s,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $m,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ge(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new e_(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Z1(r))}),n}cu(e){this.Za=e.ks,this.Ya=Ge();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return _s.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const fh="SyncEngine";class FS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $S{constructor(e){this.key=e,this.hu=!1}}class US{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new zi(a=>m1(a),ec),this.Iu=new Map,this.Eu=new Set,this.Ru=new yt(De.comparator),this.Au=new Map,this.Vu=new nh,this.du={},this.mu=new Map,this.fu=ys.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BS(t,e,n=!0){const r=o_(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await t_(r,e,n,!0),i}async function zS(t,e){const n=o_(t);await t_(n,e,!0,!1)}async function t_(t,e,n,r){const i=await aS(t.localStore,Kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await jS(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&q1(t.remoteStore,i),a}async function jS(t,e,n,r,i){t.pu=(m,g,v)=>async function(u,w,C,R){let V=w.view.ru(C);V.Ss&&(V=await Om(u.localStore,w.query,!1).then(({documents:k})=>w.view.ru(k,V)));const M=R&&R.targetChanges.get(w.targetId),F=R&&R.targetMismatches.get(w.targetId)!=null,z=w.view.applyChanges(V,u.isPrimaryClient,M,F);return jm(u,w.targetId,z.au),z.snapshot}(t,m,g,v);const s=await Om(t.localStore,e,!0),o=new LS(e,s.ks),a=o.ru(s.documents),l=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(a,t.isPrimaryClient,l);jm(t,n,h.au);const f=new FS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function qS(t,e,n){const r=Be(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!ec(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&oh(r.remoteStore,i.targetId),nd(r,i.targetId)}).catch(xs)):(nd(r,i.targetId),await Zu(r.localStore,i.targetId,!0))}async function WS(t,e){const n=Be(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),oh(n.remoteStore,r.targetId))}async function HS(t,e,n){const r=ZS(t);try{const i=await function(o,a){const l=Be(o),h=ut.now(),f=a.reduce((v,_)=>v.add(_.key),Ge());let m,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let _=Er(),u=Ge();return l.xs.getEntries(v,f).next(w=>{_=w,_.forEach((C,R)=>{R.isValidDocument()||(u=u.add(C))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,_)).next(w=>{m=w;const C=[];for(const R of a){const V=ox(R,m.get(R.key).overlayedDocument);V!=null&&C.push(new di(R.key,V,l1(V.value.mapValue),pn.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,C,a)}).next(w=>{g=w;const C=w.applyToLocalDocumentSet(m,u);return l.documentOverlayCache.saveOverlays(v,w.batchId,C)})}).then(()=>({batchId:g.batchId,changes:y1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let h=o.du[o.currentUser.toKey()];h||(h=new yt(He)),h=h.insert(a,l),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await ta(r,i.changes),await lc(r.remoteStore)}catch(i){const s=dh(i,"Failed to persist write");n.reject(s)}}async function n_(t,e){const n=Be(t);try{const r=await iS(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(rt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?rt(o.hu,14607):i.removedDocuments.size>0&&(rt(o.hu,42227),o.hu=!1))}),await ta(n,r,e)}catch(r){await xs(r)}}function zm(t,e,n){const r=Be(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Be(o);l.onlineState=a;let h=!1;l.queries.forEach((f,m)=>{for(const g of m.ba)g.va(a)&&(h=!0)}),h&&hh(l)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GS(t,e,n){const r=Be(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new yt(De.comparator);o=o.insert(s,Kt.newNoDocument(s,Le.min()));const a=Ge().add(s),l=new sc(Le.min(),new Map,new yt(He),o,a);await n_(r,l),r.Ru=r.Ru.remove(s),r.Au.delete(e),ph(r)}else await Zu(r.localStore,e,!1).then(()=>nd(r,e,n)).catch(xs)}async function KS(t,e){const n=Be(t),r=e.batch.batchId;try{const i=await rS(n.localStore,e);i_(n,r,null),r_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,i)}catch(i){await xs(i)}}async function QS(t,e,n){const r=Be(t);try{const i=await function(o,a){const l=Be(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,a).next(m=>(rt(m!==null,37113),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);i_(r,e,n),r_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,i)}catch(i){await xs(i)}}function r_(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function i_(t,e,n){const r=Be(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||s_(t,r)})}function s_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(oh(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),ph(t))}function jm(t,e,n){for(const r of n)r instanceof Z1?(t.Vu.addReference(r.key,e),JS(t,r)):r instanceof e_?(Ae(fh,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||s_(t,r.key)):Ve(19791,{wu:r})}function JS(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(Ae(fh,"New document in limbo: "+n),t.Eu.add(r),ph(t))}function ph(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new De(ct.fromString(e)),r=t.fu.next();t.Au.set(r,new $S(n)),t.Ru=t.Ru.insert(n,r),q1(t.remoteStore,new Hr(Kn(Yd(n.path)),r,"TargetPurposeLimboResolution",Jl.ce))}}async function ta(t,e,n){const r=Be(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){i.push(h);const m=ih.Es(l.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(l,h){const f=Be(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>me.forEach(h,g=>me.forEach(g.Ts,v=>f.persistence.referenceDelegate.addReference(m,g.targetId,v)).next(()=>me.forEach(g.Is,v=>f.persistence.referenceDelegate.removeReference(m,g.targetId,v)))))}catch(m){if(!Ss(m))throw m;Ae(sh,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const v=f.vs.get(g),_=v.snapshotVersion,u=v.withLastLimboFreeSnapshotVersion(_);f.vs=f.vs.insert(g,u)}}}(r.localStore,s))}async function YS(t,e){const n=Be(t);if(!n.currentUser.isEqual(e)){Ae(fh,"User change. New user:",e.toKey());const r=await U1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new Re(ve.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ta(n,r.Ns)}}function XS(t,e){const n=Be(t),r=n.Au.get(e);if(r&&r.hu)return Ge().add(r.key);{let i=Ge();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const a=n.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function o_(t){const e=Be(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=n_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GS.bind(null,e),e.Pu.J_=MS.bind(null,e.eventManager),e.Pu.yu=VS.bind(null,e.eventManager),e}function ZS(t){const e=Be(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QS.bind(null,e),e}class wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return nS(this.persistence,new Zx,e.initialUser,this.serializer)}Cu(e){return new $1(rh.Vi,this.serializer)}Du(e){return new cS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wl.provider={build:()=>new wl};class eA extends wl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){rt(this.persistence.referenceDelegate instanceof _l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Fx(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new $1(r=>_l.Vi(r,n),this.serializer)}}class rd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YS.bind(null,this.syncEngine),await NS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DS}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),r=pS(e.databaseInfo);return _S(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new wS(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>zm(this.syncEngine,n,0),function(){return Vm.v()?new Vm:new uS}())}createSyncEngine(e,n){return function(i,s,o,a,l,h,f){const m=new US(i,s,o,a,l,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Be(i);Ae(Vi,"RemoteStore shutting down."),s.Ea.add(5),await ea(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}rd.provider={build:()=>new rd};/**
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
 */class a_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):wr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ai="FirestoreClient";class tA{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Ht.UNAUTHENTICATED,this.clientId=qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Ae(ai,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Ae(ai,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function su(t,e){t.asyncQueue.verifyOperationInProgress(),Ae(ai,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await U1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nA(t);Ae(ai,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Fm(e.remoteStore,i)),t._onlineComponents=e}async function nA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ae(ai,"Using user provided OfflineComponentProvider");try{await su(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===ve.FAILED_PRECONDITION||i.code===ve.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Mi("Error using user provided cache. Falling back to memory cache: "+n),await su(t,new wl)}}else Ae(ai,"Using default OfflineComponentProvider"),await su(t,new eA(void 0));return t._offlineComponents}async function l_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ae(ai,"Using user provided OnlineComponentProvider"),await qm(t,t._uninitializedComponentsProvider._online)):(Ae(ai,"Using default OnlineComponentProvider"),await qm(t,new rd))),t._onlineComponents}function rA(t){return l_(t).then(e=>e.syncEngine)}async function id(t){const e=await l_(t),n=e.eventManager;return n.onListen=BS.bind(null,e.syncEngine),n.onUnlisten=qS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WS.bind(null,e.syncEngine),n}function iA(t,e,n,r){const i=new a_(r),s=new X1(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>J1(await id(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Y1(await id(t),s))}}function sA(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,h){const f=new a_({next:g=>{f.Nu(),o.enqueueAndForget(()=>Y1(s,m)),g.fromCache&&l.source==="server"?h.reject(new Re(ve.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new X1(a,f,{includeMetadataChanges:!0,Ka:!0});return J1(s,m)}(await id(t),t.asyncQueue,e,n,r)),r.promise}function oA(t,e){const n=new Yr;return t.asyncQueue.enqueueAndForget(async()=>HS(await rA(t),e,n)),n.promise}/**
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
 */const aA="ComponentProvider",Wm=new Map;function lA(t,e,n,r,i){return new Sk(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,c_(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const u_="firestore.googleapis.com",Hm=!0;class Gm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Re(ve.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=u_,this.ssl=Hm}else this.host=e.host,this.ssl=e.ssl??Hm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=F1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Vx)throw new Re(ve.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c_(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Re(ve.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Re(ve.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Re(ve.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Re(ve.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Re(ve.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ak;switch(r.type){case"firstParty":return new dk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Re(ve.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wm.get(n);r&&(Ae(aA,"Removing Datastore"),Wm.delete(n),r.terminate())}(this),Promise.resolve()}}function cA(t,e,n,r={}){var h;t=Gn(t,cc);const i=Es(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(ty(`https://${a}`),ny("Firestore",!0)),s.host!==u_&&s.host!==a&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!ti(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ht.MOCK_USER;else{f=pE(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Re(ve.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ht(g)}t._authCredentials=new lk(new Jy(f,m))}}/**
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
 */class na{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new na(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}toJSON(){return{type:Pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Yo(n,Pt._jsonSchema))return new Pt(e,r||null,new De(ct.fromString(n.referencePath)))}}Pt._jsonSchemaVersion="firestore/documentReference/1.0",Pt._jsonSchema={type:xt("string",Pt._jsonSchemaVersion),referencePath:xt("string")};class Xr extends na{constructor(e,n,r){super(e,n,Yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new De(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function uA(t,e,...n){if(t=vt(t),Yy("collection","path",e),t instanceof cc){const r=ct.fromString(e,...n);return am(r),new Xr(t,null,r)}{if(!(t instanceof Pt||t instanceof Xr))throw new Re(ve.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ct.fromString(e,...n));return am(r),new Xr(t.firestore,null,r)}}function uc(t,e,...n){if(t=vt(t),arguments.length===1&&(e=qd.newId()),Yy("doc","path",e),t instanceof cc){const r=ct.fromString(e,...n);return om(r),new Pt(t,null,new De(r))}{if(!(t instanceof Pt||t instanceof Xr))throw new Re(ve.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ct.fromString(e,...n));return om(r),new Pt(t.firestore,t instanceof Xr?t.converter:null,new De(r))}}/**
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
 */const Km="AsyncQueue";class Qm{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new z1(this,"async_queue_retry"),this._c=()=>{const r=iu();r&&Ae(Km,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=iu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=iu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Yr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ss(e))throw e;Ae(Km,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,wr("INTERNAL UNHANDLED ERROR: ",Jm(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=uh.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Ve(47125,{Pc:Jm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Jm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Li extends cc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qm(e),this._firestoreClient=void 0,await e}}}function dA(t,e){const n=typeof t=="object"?t:Nd(),r=typeof t=="string"?t:hl,i=Bi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hE("firestore");s&&cA(i,...s)}return i}function dc(t){if(t._terminated)throw new Re(ve.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hA(t),t._firestoreClient}function hA(t){var r,i,s,o;const e=t._freezeSettings(),n=lA(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(zt.fromBase64String(e))}catch(n){throw new Re(ve.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _n(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yo(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:xt("string",_n._jsonSchemaVersion),bytes:xt("string")};/**
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
 */class mh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Re(ve.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Re(ve.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Re(ve.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jn._jsonSchemaVersion}}static fromJSON(e){if(Yo(e,Jn._jsonSchema))return new Jn(e.latitude,e.longitude)}}Jn._jsonSchemaVersion="firestore/geoPoint/1.0",Jn._jsonSchema={type:xt("string",Jn._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class An{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yo(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new An(e.vectorValues);throw new Re(ve.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:xt("string",An._jsonSchemaVersion),vectorValues:xt("object")};/**
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
 */const fA=/^__.*__$/;class pA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new di(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function h_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ve(40011,{dataSource:t})}}class vh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new vh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return El(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(h_(this.dataSource)&&fA.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class mA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oc(e)}createContext(e,n,r,i=!1){return new vh({dataSource:e,methodName:n,targetDoc:r,path:Ut.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function f_(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new mA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function p_(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);yh("Data must be an object, but it was:",o,r);const a=m_(r,o);let l,h;if(s.merge)l=new dn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=$o(e,m,n);if(!o.contains(g))throw new Re(ve.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);y_(f,g)||f.push(g)}l=new dn(f),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new pA(new an(a),l,h)}class hc extends gh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hc}}function gA(t,e,n,r){const i=t.createContext(1,e,n);yh("Data must be an object, but it was:",i,r);const s=[],o=an.empty();ui(r,(l,h)=>{const f=v_(e,l,n);h=vt(h);const m=i.childContextForFieldPath(f);if(h instanceof hc)s.push(f);else{const g=fc(h,m);g!=null&&(s.push(f),o.set(f,g))}});const a=new dn(s);return new d_(o,a,i.fieldTransforms)}function vA(t,e,n,r,i,s){const o=t.createContext(1,e,n),a=[$o(e,r,n)],l=[i];if(s.length%2!=0)throw new Re(ve.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push($o(e,s[g])),l.push(s[g+1]);const h=[],f=an.empty();for(let g=a.length-1;g>=0;--g)if(!y_(h,a[g])){const v=a[g];let _=l[g];_=vt(_);const u=o.childContextForFieldPath(v);if(_ instanceof hc)h.push(v);else{const w=fc(_,u);w!=null&&(h.push(v),f.set(v,w))}}const m=new dn(h);return new d_(f,m,o.fieldTransforms)}function fc(t,e){if(g_(t=vt(t)))return yh("Unsupported field value:",e,t),m_(t,e);if(t instanceof gh)return function(r,i){if(!h_(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=fc(a,i.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ex(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ut.fromDate(r);return{timestampValue:yl(i.serializer,s)}}if(r instanceof ut){const s=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yl(i.serializer,s)}}if(r instanceof Jn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _n)return{bytesValue:R1(i.serializer,r._byteString)};if(r instanceof Pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:th(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof An)return function(o,a){const l=o instanceof An?o.toArray():o;return{mapValue:{fields:{[o1]:{stringValue:a1},[fl]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw a.createError("VectorValues must only contain numeric values.");return Xd(a.serializer,f)})}}}}}}(r,i);if(L1(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Wd(r)}`)}(t,e)}function m_(t,e){const n={};return e1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(r,i)=>{const s=fc(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function g_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof Jn||t instanceof _n||t instanceof Pt||t instanceof gh||t instanceof An||L1(t))}function yh(t,e,n){if(!g_(n)||!Xy(n)){const r=Wd(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function $o(t,e,n){if((e=vt(e))instanceof mh)return e._internalPath;if(typeof e=="string")return v_(t,e);throw El("Field path arguments must be of type string or ",t,!1,void 0,n)}const yA=new RegExp("[~\\*/\\[\\]]");function v_(t,e,n){if(e.search(yA)>=0)throw El(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mh(...e.split("."))._internalPath}catch{throw El(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function El(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Re(ve.INVALID_ARGUMENT,a+t+l)}function y_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _A{convertValue(e,n="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[fl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>It(o.doubleValue));return new An(n)}convertGeoPoint(e){return new Jn(It(e.latitude),It(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=ri(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ct.fromString(e);rt(V1(r),9688,{name:e});const i=new Mo(r.get(1),r.get(3)),s=new De(r.popFirst(5));return i.isEqual(n)||wr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class _h extends _A{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}const Ym="@firebase/firestore",Xm="4.12.0";/**
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
 */class __{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field($o("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bA extends __{data(){return super.data()}}/**
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
 */function b_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Re(ve.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function w_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pi extends __{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($o("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Re(ve.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Pi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Pi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pi._jsonSchema={type:xt("string",Pi._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class Ga extends Pi{data(e={}){return super.data(e)}}class Ni{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new eo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Re(ve.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new eo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new eo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:wA(a.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Re(ve.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ve(61501,{type:t})}}/**
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
 */Ni._jsonSchemaVersion="firestore/querySnapshot/1.0",Ni._jsonSchema={type:xt("string",Ni._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};/**
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
 */class EA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=f_(e)}set(e,n,r){this._verifyNotCommitted();const i=ou(e,this._firestore),s=w_(i.converter,n,r),o=p_(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,pn.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ou(e,this._firestore);let o;return o=typeof(n=vt(n))=="string"||n instanceof mh?vA(this._dataReader,"WriteBatch.update",s._key,n,r,i):gA(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,pn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ou(e,this._firestore);return this._mutations=this._mutations.concat(new ic(n._key,pn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Re(ve.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ou(t,e){if((t=vt(t)).firestore!==e)throw new Re(ve.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function IA(t){t=Gn(t,na);const e=Gn(t.firestore,Li),n=dc(e),r=new _h(e);return b_(t._query),sA(n,t._query).then(i=>new Ni(e,r,t,i))}function E_(t,e,n){t=Gn(t,Pt);const r=Gn(t.firestore,Li),i=w_(t.converter,e,n),s=f_(r);return bh(r,[p_(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pn.none())])}function TA(t){return bh(Gn(t.firestore,Li),[new ic(t._key,pn.none())])}function CA(t,...e){var h,f,m;t=vt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Zm(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Zm(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(m=g.complete)==null?void 0:m.bind(g)}let s,o,a;if(t instanceof Pt)o=Gn(t.firestore,Li),a=Yd(t._key.path),s={next:g=>{e[r]&&e[r](kA(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Gn(t,na);o=Gn(g.firestore,Li),a=g._query;const v=new _h(o);s={next:_=>{e[r]&&e[r](new Ni(o,v,g,_))},error:e[r+1],complete:e[r+2]},b_(t._query)}const l=dc(o);return iA(l,a,i,s)}function bh(t,e){const n=dc(t);return oA(n,e)}function kA(t,e,n){const r=n.docs.get(e._key),i=new _h(t);return new Pi(t,i,e._key,r,new eo(n.hasPendingWrites,n.fromCache),e.converter)}function xA(t){return t=Gn(t,Li),dc(t),new EA(t,e=>bh(t,e))}(function(e,n=!0){ok(Is),Yn(new Dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Li(new ck(r.getProvider("auth-internal")),new hk(o,r.getProvider("app-check-internal")),Ak(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bn(Ym,Xm,e),bn(Ym,Xm,"esm2020")})();const I_="@firebase/installations",wh="0.6.20";/**
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
 */const T_=1e4,C_=`w:${wh}`,k_="FIS_v2",SA="https://firebaseinstallations.googleapis.com/v1",AA=60*60*1e3,RA="installations",PA="Installations";/**
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
 */const NA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fi=new Ui(RA,PA,NA);function x_(t){return t instanceof Mn&&t.code.includes("request-failed")}/**
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
 */function S_({projectId:t}){return`${SA}/projects/${t}/installations`}function A_(t){return{token:t.token,requestStatus:2,expiresIn:DA(t.expiresIn),creationTime:Date.now()}}async function R_(t,e){const r=(await e.json()).error;return Fi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function P_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OA(t,{refreshToken:e}){const n=P_(t);return n.append("Authorization",MA(e)),n}async function N_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DA(t){return Number(t.replace("s","000"))}function MA(t){return`${k_} ${t}`}/**
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
 */async function VA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=S_(t),i=P_(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:k_,appId:t.appId,sdkVersion:C_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await N_(()=>fetch(r,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:A_(h.authToken)}}else throw await R_("Create Installation",l)}/**
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
 */const FA=/^[cdef][\w-]{21}$/,sd="";function $A(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=UA(t);return FA.test(n)?n:sd}catch{return sd}}function UA(t){return LA(t).substr(0,22)}/**
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
 */const D_=new Map;function M_(t,e){const n=pc(t);V_(n,e),BA(n,e)}function V_(t,e){const n=D_.get(t);if(n)for(const r of n)r(e)}function BA(t,e){const n=zA();n&&n.postMessage({key:t,fid:e}),jA()}let Si=null;function zA(){return!Si&&"BroadcastChannel"in self&&(Si=new BroadcastChannel("[Firebase] FID Change"),Si.onmessage=t=>{V_(t.data.key,t.data.fid)}),Si}function jA(){D_.size===0&&Si&&(Si.close(),Si=null)}/**
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
 */const qA="firebase-installations-database",WA=1,$i="firebase-installations-store";let au=null;function Eh(){return au||(au=oy(qA,WA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}})),au}async function Il(t,e){const n=pc(t),i=(await Eh()).transaction($i,"readwrite"),s=i.objectStore($i),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&M_(t,e.fid),e}async function L_(t){const e=pc(t),r=(await Eh()).transaction($i,"readwrite");await r.objectStore($i).delete(e),await r.done}async function mc(t,e){const n=pc(t),i=(await Eh()).transaction($i,"readwrite"),s=i.objectStore($i),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&M_(t,a.fid),a}/**
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
 */async function Ih(t){let e;const n=await mc(t.appConfig,r=>{const i=HA(r),s=GA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===sd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HA(t){const e=t||{fid:$A(),registrationStatus:0};return F_(e)}function GA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=KA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QA(t)}:{installationEntry:e}}async function KA(t,e){try{const n=await VA(t,e);return Il(t.appConfig,n)}catch(n){throw x_(n)&&n.customData.serverCode===409?await L_(t.appConfig):await Il(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QA(t){let e=await eg(t.appConfig);for(;e.registrationStatus===1;)await O_(100),e=await eg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ih(t);return r||n}return e}function eg(t){return mc(t,e=>{if(!e)throw Fi.create("installation-not-found");return F_(e)})}function F_(t){return JA(t)?{fid:t.fid,registrationStatus:0}:t}function JA(t){return t.registrationStatus===1&&t.registrationTime+T_<Date.now()}/**
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
 */async function YA({appConfig:t,heartbeatServiceProvider:e},n){const r=XA(t,n),i=OA(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:C_,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await N_(()=>fetch(r,a));if(l.ok){const h=await l.json();return A_(h)}else throw await R_("Generate Auth Token",l)}function XA(t,{fid:e}){return`${S_(t)}/${e}/authTokens:generate`}/**
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
 */async function Th(t,e=!1){let n;const r=await mc(t.appConfig,s=>{if(!$_(s))throw Fi.create("not-registered");const o=s.authToken;if(!e&&tR(o))return s;if(o.requestStatus===1)return n=ZA(t,e),s;{if(!navigator.onLine)throw Fi.create("app-offline");const a=rR(s);return n=eR(t,a),a}});return n?await n:r.authToken}async function ZA(t,e){let n=await tg(t.appConfig);for(;n.authToken.requestStatus===1;)await O_(100),n=await tg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Th(t,e):r}function tg(t){return mc(t,e=>{if(!$_(e))throw Fi.create("not-registered");const n=e.authToken;return iR(n)?{...e,authToken:{requestStatus:0}}:e})}async function eR(t,e){try{const n=await YA(t,e),r={...e,authToken:n};return await Il(t.appConfig,r),n}catch(n){if(x_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await L_(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Il(t.appConfig,r)}throw n}}function $_(t){return t!==void 0&&t.registrationStatus===2}function tR(t){return t.requestStatus===2&&!nR(t)}function nR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AA}function rR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function iR(t){return t.requestStatus===1&&t.requestTime+T_<Date.now()}/**
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
 */async function sR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ih(e);return r?r.catch(console.error):Th(e).catch(console.error),n.fid}/**
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
 */async function oR(t,e=!1){const n=t;return await aR(n),(await Th(n,e)).token}async function aR(t){const{registrationPromise:e}=await Ih(t);e&&await e}/**
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
 */function lR(t){if(!t||!t.options)throw lu("App Configuration");if(!t.name)throw lu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw lu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function lu(t){return Fi.create("missing-app-config-values",{valueName:t})}/**
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
 */const U_="installations",cR="installations-internal",uR=t=>{const e=t.getProvider("app").getImmediate(),n=lR(e),r=Bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dR=t=>{const e=t.getProvider("app").getImmediate(),n=Bi(e,U_).getImmediate();return{getId:()=>sR(n),getToken:i=>oR(n,i)}};function hR(){Yn(new Dn(U_,uR,"PUBLIC")),Yn(new Dn(cR,dR,"PRIVATE"))}hR();bn(I_,wh);bn(I_,wh,"esm2020");/**
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
 */const Tl="analytics",fR="firebase_id",pR="origin",mR=60*1e3,gR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ch="https://www.googletagmanager.com/gtag/js";/**
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
 */const rn=new Hl("@firebase/analytics");/**
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
 */const vR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mn=new Ui("analytics","Analytics",vR);/**
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
 */function yR(t){if(!t.startsWith(Ch)){const e=mn.create("invalid-gtag-resource",{gtagURL:t});return rn.warn(e.message),""}return t}function B_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _R(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function bR(t,e){const n=_R("firebase-js-sdk-policy",{createScriptURL:yR}),r=document.createElement("script"),i=`${Ch}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function wR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ER(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await B_(n)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(a){rn.error(a)}t("config",i,s)}async function IR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await B_(n);for(const l of o){const h=a.find(m=>m.measurementId===l),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){rn.error(s)}}function TR(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await IR(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await ER(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,h]=o;t("get",a,l,h)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){rn.error(a)}}return i}function CR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=TR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function kR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ch)&&n.src.includes(t))return n;return null}/**
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
 */const xR=30,SR=1e3;class AR{constructor(e={},n=SR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const z_=new AR;function RR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function PR(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:RR(n)},i=gR.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw mn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function NR(t,e=z_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw mn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw mn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new MR;return setTimeout(async()=>{a.abort()},mR),j_({appId:r,apiKey:i,measurementId:s},o,a,e)}async function j_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=z_){var a;const{appId:s,measurementId:o}=t;try{await OR(r,e)}catch(l){if(o)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await PR(t);return i.deleteThrottleMetadata(s),l}catch(l){const h=l;if(!DR(h)){if(i.deleteThrottleMetadata(s),o)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:o};throw l}const f=Number((a=h==null?void 0:h.customData)==null?void 0:a.httpStatus)===503?xp(n,i.intervalMillis,xR):xp(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),rn.debug(`Calling attemptFetch again in ${f} millis`),j_(t,m,r,i)}}function OR(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(mn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DR(t){if(!(t instanceof Mn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class MR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function LR(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function FR(){if(Ad())try{await Rd()}catch(t){return rn.warn(mn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return rn.warn(mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $R(t,e,n,r,i,s,o){const a=NR(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>rn.error(g)),e.push(a);const l=FR().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([a,l]);kR(s)||bR(s,h.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[pR]="firebase",m.update=!0,f!=null&&(m[fR]=f),i("config",h.measurementId,m),h.measurementId}/**
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
 */class UR{constructor(e){this.app=e}_delete(){return delete us[this.app.options.appId],Promise.resolve()}}let us={},ng=[];const rg={};let cu="dataLayer",BR="gtag",ig,kh,sg=!1;function zR(){const t=[];if(Sd()&&t.push("This is a browser extension environment."),ry()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=mn.create("invalid-analytics-context",{errorInfo:e});rn.warn(n.message)}}function jR(t,e,n){zR();const r=t.options.appId;if(!r)throw mn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mn.create("no-api-key");if(us[r]!=null)throw mn.create("already-exists",{id:r});if(!sg){wR(cu);const{wrappedGtag:s,gtagCore:o}=CR(us,ng,rg,cu,BR);kh=s,ig=o,sg=!0}return us[r]=$R(t,ng,rg,e,ig,cu,n),new UR(t)}function qR(t=Nd()){t=vt(t);const e=Bi(t,Tl);return e.isInitialized()?e.getImmediate():WR(t)}function WR(t,e={}){const n=Bi(t,Tl);if(n.isInitialized()){const i=n.getImmediate();if(ti(e,n.getOptions()))return i;throw mn.create("already-initialized")}return n.initialize({options:e})}async function HR(){if(Sd()||!ry()||!Ad())return!1;try{return await Rd()}catch{return!1}}function GR(t,e,n){t=vt(t),LR(kh,us[t.app.options.appId],e,n).catch(r=>rn.error(r))}function KR(t,e,n,r){t=vt(t),VR(kh,us[t.app.options.appId],e,n,r).catch(i=>rn.error(i))}const og="@firebase/analytics",ag="0.10.20";function QR(){Yn(new Dn(Tl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return jR(r,i,n)},"PUBLIC")),Yn(new Dn("analytics-internal",t,"PRIVATE")),bn(og,ag),bn(og,ag,"esm2020");function t(e){try{const n=e.getProvider(Tl).getImmediate();return{logEvent:(r,i,s)=>KR(n,r,i,s),setUserProperties:(r,i)=>GR(n,r,i)}}catch(n){throw mn.create("interop-component-reg-failed",{reason:n})}}}QR();const JR={apiKey:"AIzaSyBcbduc3YI8apT4rqL-gCha2v0NFMO__ds",authDomain:"powerpoint-ai-authoring-tool.firebaseapp.com",projectId:"powerpoint-ai-authoring-tool",storageBucket:"powerpoint-ai-authoring-tool.firebasestorage.app",messagingSenderId:"262485353950",appId:"1:262485353950:web:e894909bd1a8c1c2f8a94f",measurementId:"G-F7VD36R6PQ"},xh=ay(JR);HR().then(t=>{t&&qR(xh)});const ir=ik(xh),YR=new cr,XR=new mo("microsoft.com"),Sh=dA(xh),ra=zl("auth",()=>{const t=pe(null),e=pe(!1);async function n(f){if(f)try{const m=uc(Sh,"users",f.uid);await E_(m,{email:f.email,displayName:f.displayName||"Unknown User",photoURL:f.photoURL||"",lastActive:new Date().toISOString()},{merge:!0})}catch(m){console.error("Failed to track user activity in Firestore",m)}}GT(ir,f=>{t.value=f,e.value=!0,f&&n(f)});async function r(){try{const f=await Qp(ir,YR);return t.value=f.user,f.user}catch(f){throw console.error("Google Sign-In Error:",f),f}}async function i(){try{const f=await Qp(ir,XR);return t.value=f.user,f.user}catch(f){throw console.error("Microsoft Sign-In Error:",f),f}}async function s(f,m){try{const g=await qT(ir,f,m);return t.value=g.user,g.user}catch(g){throw console.error("Email Sign-In Error:",g),g}}async function o(f,m){try{const g=await jT(ir,f,m);return t.value=g.user,await Hp(g.user),g.user}catch(g){throw console.error("Email Sign-Up Error:",g),g}}async function a(){t.value&&await Hp(t.value)}async function l(){ir.currentUser&&(await ir.currentUser.reload(),t.value=ir.currentUser)}async function h(){try{await KT(ir),t.value=null}catch(f){console.error("Sign-Out Error:",f)}}return{user:t,isAuthReady:e,loginWithGoogle:r,loginWithMicrosoft:i,loginWithEmail:s,signUpWithEmail:o,resendVerification:a,reloadUser:l,logout:h}}),gc="elearn_projects",Ah=`${gc}_anonymous`;function Rh(){return{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif",fontSize:16,headingFont:"Inter, sans-serif"}}function Cl(t=0){return{id:Cn(),title:`Slide ${t+1}`,background:"#ffffff",backgroundType:"color",backgroundGradient:"",backgroundImage:"",elements:[],notes:"",order:t,transition:"none",duration:0}}function uu(t="Untitled Project"){const e=Cl(0);return{id:Cn(),name:t,description:"",thumbnail:"",slides:[e],theme:Rh(),createdAt:Date.now(),updatedAt:Date.now(),version:"1.0",authorName:"",tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0}}}function ZR(t,e={}){const n=q_(t);return{id:Cn(),type:t,x:e.x??100,y:e.y??100,width:e.width??n.width,height:e.height??n.height,rotation:e.rotation??0,zIndex:e.zIndex??1,locked:!1,visible:!0,opacity:e.opacity??1,content:{...n.content||{},...e.content||{}},styles:{...n.styles||{}},interactions:e.interactions||[],animations:e.animations||[]}}function e4(t,e=0){return{id:Cn(),title:t.title||`Slide ${e+1}`,background:t.background||"#ffffff",backgroundType:t.backgroundType||"color",backgroundGradient:t.backgroundGradient||"",backgroundImage:t.backgroundImage||"",elements:(t.elements||[]).map((n,r)=>ZR(n.type,{...n,zIndex:n.zIndex??r+1})),notes:t.notes||"",order:e,transition:t.transition||"none",duration:t.duration||0}}function t4(t,e){return{microcourse:{description:"Interactive lesson template",theme:{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#f8f8ff",textColor:"#1a1a2e"},slides:[{title:"Course Intro",background:"#f8f8ff",elements:[{type:"heading",x:80,y:72,width:800,height:84,content:{text:e||"Microcourse: AI in Education",textAlign:"left"}},{type:"text",x:80,y:170,width:760,height:90,content:{text:"Learning objective: understand practical AI use-cases for classrooms and workplace training."}},{type:"button",x:80,y:292,width:180,height:50,content:{label:"Start Lesson",action:"navigate",target:"2"}},{type:"shape",x:700,y:320,width:190,height:130,content:{shapeType:"rectangle",fillColor:"#00c9a7",borderRadius:18}}]},{title:"Knowledge Check",background:"#ffffff",elements:[{type:"heading",x:80,y:44,width:600,height:70,content:{text:"Quick Check",textAlign:"left",fontSize:40}},{type:"quiz",x:80,y:130,width:760,height:330,content:{question:"Which AI feature best supports personalized learning?",options:["Automated attendance only","Adaptive feedback based on learner progress","Static PDF handouts","Manual grading spreadsheets"],correctIndex:1,explanation:"Adaptive feedback tailors support based on learner responses and performance."}}]}]},chromatic:{description:"Modern presentation starter",theme:{primaryColor:"#7c3aed",secondaryColor:"#ec4899",bgColor:"#ffffff",textColor:"#1f1638"},slides:[{title:"Title Slide",backgroundType:"gradient",backgroundGradient:"linear-gradient(135deg, #faf5ff 0%, #fff1f2 100%)",elements:[{type:"heading",x:90,y:130,width:780,height:88,content:{text:e||"Chromatic Presentation",textAlign:"center",fontSize:52}},{type:"text",x:180,y:232,width:600,height:70,content:{text:"A colorful template to introduce your topic with style.",textAlign:"center"}},{type:"button",x:390,y:328,width:180,height:48,content:{label:"Continue",action:"navigate",target:"2",variant:"primary",bgColor:"#7c3aed"}}]}]},branching:{description:"Branching scenario template",theme:{primaryColor:"#2563eb",secondaryColor:"#14b8a6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Decision Point",background:"#f8fafc",elements:[{type:"heading",x:80,y:60,width:740,height:74,content:{text:"Branching Scenario",textAlign:"left"}},{type:"text",x:80,y:150,width:800,height:80,content:{text:"A customer asks for a full refund after the deadline. What do you do first?"}},{type:"button",x:80,y:270,width:290,height:54,content:{label:"Option A: Escalate to manager",action:"navigate",target:"2"}},{type:"button",x:390,y:270,width:290,height:54,content:{label:"Option B: Offer partial credit",action:"navigate",target:"3"}},{type:"hotspot",x:770,y:420,width:66,height:66,content:{icon:"i",popupTitle:"Facilitator Tip",popupContent:"Ask learners why they chose each option before revealing outcomes."}}]}]},flipcards:{description:"Interactive card challenge starter",theme:{primaryColor:"#0891b2",secondaryColor:"#f59e0b",bgColor:"#f0f9ff",textColor:"#0f172a"},slides:[{title:"Flipcards Activity",background:"#f0f9ff",elements:[{type:"heading",x:80,y:58,width:800,height:74,content:{text:"Flipcards Museum",textAlign:"left"}},{type:"text",x:80,y:138,width:780,height:64,content:{text:"Prompt learners to reveal each card and discuss what they discover."}},{type:"shape",x:120,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:380,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:640,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}}]}]},"higher-ed":{description:"Higher education lecture starter",theme:{primaryColor:"#1d4ed8",secondaryColor:"#16a34a",bgColor:"#ffffff",textColor:"#0f172a"},slides:[{title:"Lecture Overview",background:"#ffffff",elements:[{type:"heading",x:80,y:70,width:790,height:80,content:{text:e||"Higher Education",textAlign:"left"}},{type:"text",x:80,y:170,width:780,height:124,content:{text:"Use this deck to define outcomes, introduce key concepts, and include formative checks."}},{type:"button",x:80,y:328,width:190,height:48,content:{label:"Add Agenda",action:"none"}}]}]},complete:{description:"Sentence completion quiz starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#22c55e",bgColor:"#f8f7ff",textColor:"#1a1a2e"},slides:[{title:"Complete the Sentence",background:"#f8f7ff",elements:[{type:"heading",x:80,y:55,width:700,height:76,content:{text:"Complete the sentence",textAlign:"left"}},{type:"quiz",x:80,y:140,width:760,height:330,content:{question:"AI literacy in workplaces improves when teams ______.",options:["Avoid practical tasks","Use AI tools with clear guardrails and practice","Rely only on theory","Stop measuring outcomes"],correctIndex:1,explanation:"Practice with clear policies helps teams use AI safely and effectively."}}]}]},"fill-blanks":{description:"Quiz assessment starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#06b6d4",bgColor:"#ffffff",textColor:"#111827"},slides:[{title:"Quiz Assessment",background:"#ffffff",elements:[{type:"heading",x:80,y:48,width:760,height:76,content:{text:"Fill in the blanks",textAlign:"left"}},{type:"text",x:80,y:126,width:760,height:64,content:{text:"Replace with your own question set and publish in minutes."}},{type:"quiz",x:80,y:196,width:760,height:280,content:{question:"The most important part of a good assessment is ______.",options:["Clear learning objective","Random difficulty","Longer text only","Colorful background"],correctIndex:0,explanation:"Assessments should align clearly with learning objectives."}}]}]},timeline:{description:"Timeline infographic starter",theme:{primaryColor:"#0ea5e9",secondaryColor:"#8b5cf6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Data Timeline",background:"#f8fafc",elements:[{type:"heading",x:80,y:40,width:760,height:74,content:{text:"Data Viz Timeline",textAlign:"left"}},{type:"shape",x:100,y:255,width:760,height:8,content:{shapeType:"rectangle",fillColor:"#0ea5e9",borderRadius:8}},{type:"shape",x:170,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:430,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:690,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"text",x:120,y:290,width:150,height:70,content:{text:`Phase 1
Discovery`,textAlign:"center"}},{type:"text",x:380,y:290,width:150,height:70,content:{text:`Phase 2
Build`,textAlign:"center"}},{type:"text",x:640,y:290,width:150,height:70,content:{text:`Phase 3
Launch`,textAlign:"center"}}]}]}}[t]||{description:"Starter template",theme:Rh(),slides:[{title:e||"New Slide",background:"#ffffff",elements:[]}]}}function kl(t=null){const e=t?`${gc}_${t}`:Ah;try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function lg(t,e=null){const n=e?`${gc}_${e}`:Ah;try{localStorage.setItem(n,JSON.stringify(t))}catch{}}function cg(t=null){const e=t?`${gc}_${t}`:Ah;try{localStorage.removeItem(e)}catch{}}function vc(t){return uA(Sh,"users",t,"projects")}function Ph(t){return{...t,description:t.description||"",thumbnail:t.thumbnail||"",slides:Array.isArray(t.slides)?t.slides:[Cl(0)],theme:{...Rh(),...t.theme||{}},createdAt:Number(t.createdAt)||Date.now(),updatedAt:Number(t.updatedAt)||Date.now(),version:t.version||"1.0",authorName:t.authorName||"",tags:Array.isArray(t.tags)?t.tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,...t.settings||{}}}}async function n4(t,e){!t||!(e!=null&&e.id)||await E_(uc(vc(t),e.id),Ph(e))}async function r4(t,e){!t||!e||await TA(uc(vc(t),e))}async function i4(t){if(!t)return;const e=[...kl(),...kl(t)];if(!e.length)return;const n=vc(t),r=await IA(n),i=new Set(r.docs.map(a=>a.id)),s=xA(Sh);let o=!1;e.forEach(a=>{i.has(a.id)||(s.set(uc(n,a.id),Ph(a)),i.add(a.id),o=!0)}),o&&await s.commit(),cg(),cg(t)}const gn=zl("projects",()=>{const t=ra(),e=pe([]),n=pe("");let r=null;Yt(()=>{var P;return(P=t.user)==null?void 0:P.uid},async P=>{if(n.value="",r&&(r(),r=null),!P){e.value=kl();return}e.value=[];try{await i4(P)}catch(O){console.error("Failed to migrate browser projects",O),n.value="Some browser-saved projects could not be migrated to your account."}r=CA(vc(P),O=>{e.value=O.docs.map(b=>Ph({id:b.id,...b.data()})),lg(e.value,P)},O=>{console.error("Failed to sync account projects",O),n.value="Unable to sync your projects right now.",e.value=kl(P)})},{immediate:!0,flush:"sync"});const i=Ce(()=>[...e.value].sort((P,O)=>O.updatedAt-P.updatedAt));function s(){var P;lg(e.value,((P=t.user)==null?void 0:P.uid)||null)}function o(P){var O;return s(),(O=t.user)!=null&&O.uid?n4(t.user.uid,P).catch(b=>{console.error("Failed to persist project",b),n.value="Unable to save your latest project changes."}):Promise.resolve()}function a(P){var O;return s(),(O=t.user)!=null&&O.uid?r4(t.user.uid,P).catch(b=>{console.error("Failed to delete project",b),n.value="Unable to delete this project from your account."}):Promise.resolve()}function l(P){const O=uu(P);return e.value.push(O),o(O),O}function h(P,O,b=""){const S=t4(P,O),I=uu(O);return I.description=b||S.description||"",I.theme={...I.theme,...S.theme||{}},I.slides=(S.slides||[]).map((Q,re)=>e4(Q,re)),I.createdAt=Date.now(),I.updatedAt=Date.now(),e.value.push(I),o(I),I}function f(P){const O=e.value.find(S=>S.id===P);if(!O)return null;const b=JSON.parse(JSON.stringify(O));return b.id=Cn(),b.name=`${b.name} (copy)`,b.createdAt=Date.now(),b.updatedAt=Date.now(),b.slides=b.slides.map(S=>(S.id=Cn(),S.elements=S.elements.map(I=>({...I,id:Cn()})),S)),e.value.push(b),o(b),b}function m(P){const O=e.value.findIndex(b=>b.id===P);O!==-1&&(e.value.splice(O,1),a(P))}function g(P){return e.value.find(O=>O.id===P)||null}function v(P,O){const b=e.value.findIndex(S=>S.id===P);b!==-1&&(e.value[b]={...e.value[b],...O,updatedAt:Date.now()},o(e.value[b]))}function _(P,O=-1){const b=g(P);if(!b)return null;const S=O>=0?O+1:b.slides.length,I=Cl(S);return O>=0?b.slides.splice(O+1,0,I):b.slides.push(I),b.slides.forEach((Q,re)=>{Q.order=re}),b.updatedAt=Date.now(),o(b),I}function u(P,O){const b=g(P);if(!b||b.slides.length<=1)return;const S=b.slides.findIndex(I=>I.id===O);S!==-1&&(b.slides.splice(S,1),b.slides.forEach((I,Q)=>{I.order=Q}),b.updatedAt=Date.now(),o(b))}function w(P,O){const b=g(P);if(!b)return null;const S=b.slides.find(re=>re.id===O);if(!S)return null;const I=JSON.parse(JSON.stringify(S));I.id=Cn(),I.title=`${I.title} (copy)`;const Q=b.slides.findIndex(re=>re.id===O);return b.slides.splice(Q+1,0,I),b.slides.forEach((re,$)=>{re.order=$}),b.updatedAt=Date.now(),o(b),I}function C(P,O,b){const S=g(P);if(!S)return;const[I]=S.slides.splice(O,1);S.slides.splice(b,0,I),S.slides.forEach((Q,re)=>{Q.order=re}),S.updatedAt=Date.now(),o(S)}function R(P,O,b){const S=g(P);if(!S)return;const I=S.slides.find(Q=>Q.id===O);I&&(Object.assign(I,b),S.updatedAt=Date.now(),o(S))}function V(P,O,b,S={}){const I=g(P);if(!I)return null;const Q=I.slides.find(ne=>ne.id===O);if(!Q)return null;const re=Q.elements.reduce((ne,_e)=>Math.max(ne,_e.zIndex||0),0),$=q_(b),ue={id:Cn(),type:b,x:100,y:100,width:$.width,height:$.height,rotation:0,zIndex:re+1,locked:!1,visible:!0,opacity:1,...$,...S,interactions:[],animations:[]};return Q.elements.push(ue),I.updatedAt=Date.now(),o(I),ue}function M(P,O,b,S){const I=g(P);if(!I)return;const Q=I.slides.find($=>$.id===O);if(!Q)return;const re=Q.elements.find($=>$.id===b);re&&(Object.assign(re,S),I.updatedAt=Date.now(),o(I))}function F(P,O,b){const S=g(P);if(!S)return;const I=S.slides.find(re=>re.id===O);if(!I)return;const Q=I.elements.findIndex(re=>re.id===b);Q!==-1&&(I.elements.splice(Q,1),S.updatedAt=Date.now(),o(S))}function z(P,O,b){const S=g(P);if(!S)return null;const I=S.slides.find($=>$.id===O);if(!I)return null;const Q=I.elements.find($=>$.id===b);if(!Q)return null;const re=JSON.parse(JSON.stringify(Q));return re.id=Cn(),re.x+=20,re.y+=20,re.zIndex=Q.zIndex+1,I.elements.push(re),S.updatedAt=Date.now(),o(S),re}function k(P,O,b,S){const I=g(P);if(!I)return;const Q=I.slides.find(ne=>ne.id===O);if(!Q)return;const re=Q.elements.find(ne=>ne.id===b);if(!re)return;const $=Q.elements.map(ne=>ne.zIndex).sort((ne,_e)=>ne-_e),ue=re.zIndex;if(S==="up"){const ne=$.find(_e=>_e>ue);if(ne!==void 0){const _e=Q.elements.find(te=>te.zIndex===ne);_e&&(_e.zIndex=ue,re.zIndex=ne)}}else{const ne=[...$].reverse().find(_e=>_e<ue);if(ne!==void 0){const _e=Q.elements.find(te=>te.zIndex===ne);_e&&(_e.zIndex=ue,re.zIndex=ne)}}I.updatedAt=Date.now(),o(I)}function E(P){const O=g(P);return O?JSON.stringify(O,null,2):null}function T(P){try{const O=JSON.parse(P);return O.id=Cn(),O.name=`${O.name} (imported)`,O.createdAt=Date.now(),O.updatedAt=Date.now(),e.value.push(O),o(O),O}catch{return null}}return{projects:e,sortedProjects:i,syncError:n,createProject:l,createProjectFromTemplate:h,duplicateProject:f,deleteProject:m,getProject:g,updateProject:v,addSlide:_,deleteSlide:u,duplicateSlide:w,reorderSlides:C,updateSlide:R,addElement:V,updateElement:M,deleteElement:F,duplicateElement:z,reorderElement:k,exportProject:E,importProject:T,makeBlankSlide:Cl,makeNewProject:uu}});function q_(t){const e={text:{width:300,height:80,content:{text:"Click to edit text",fontSize:18,fontFamily:"Inter, sans-serif",fontWeight:"normal",fontStyle:"normal",textDecoration:"none",textAlign:"left",color:"#1a1a2e",lineHeight:1.5,textTransform:"none",letterSpacing:0},styles:{}},heading:{width:500,height:80,content:{text:"Heading",fontSize:36,fontFamily:"Inter, sans-serif",fontWeight:"bold",fontStyle:"normal",textDecoration:"none",textAlign:"center",color:"#1a1a2e",lineHeight:1.2,textTransform:"none",letterSpacing:0},styles:{}},image:{width:300,height:200,content:{src:"",alt:"",objectFit:"cover",borderRadius:0,borderWidth:0,borderColor:"#e2e8f0"},styles:{}},shape:{width:150,height:100,content:{shapeType:"rectangle",fillColor:"#6c47ff",borderColor:"transparent",borderWidth:0,borderRadius:8,opacity:1},styles:{}},button:{width:160,height:48,content:{label:"Click Me",variant:"primary",action:"none",target:"",bgColor:"",textColor:"",borderColor:"",borderRadius:8,fontSize:15,fontWeight:600,fontFamily:"Inter, sans-serif",letterSpacing:0},styles:{}},hotspot:{width:60,height:60,content:{icon:"?",bgColor:"#6c47ff",iconColor:"#ffffff",borderRadius:999,tooltip:"Click to learn more",popupContent:"Add your content here...",popupTitle:"Info",popupBgColor:"#ffffff",popupTextColor:"#1a1a2e"},styles:{}},video:{width:480,height:270,content:{src:"",poster:"",autoplay:!1,controls:!0,loop:!1,muted:!1,objectFit:"cover"},styles:{}},audio:{width:280,height:56,content:{src:"",label:"Audio Player",autoplay:!1,controls:!0,loop:!1,bgColor:"#ede7ff",textColor:"#555555",accentColor:"#6c47ff"},styles:{}},divider:{width:400,height:4,content:{color:"#e2e8f0",thickness:2},styles:{}},quiz:{width:480,height:300,content:{question:"Your question here?",options:["Option A","Option B","Option C","Option D"],correctIndex:0,explanation:"",cardBgColor:"#ffffff",questionColor:"#1a1a2e",accentColor:"#6c47ff"},styles:{}}};return e[t]||e.text}const In=zl("editor",()=>{const t=pe(null),e=pe(null),n=pe([]),r=pe(null),i=pe("select"),s=pe("rectangle"),o=pe("properties"),a=pe("slides"),l=pe(!1),h=pe(!1),f=pe(!0),m=pe(20),g=pe(!1),v=pe(1),_=pe(!1),u=pe(!1),w=pe(!1),C=pe(null),R=pe(!1),V=pe(!1),M=pe(!0),F=pe(null),z=pe([]),k=pe(-1),E=20,T=pe(!1),P=pe(!1),O=pe(null),b=pe(0),S=pe(0),I=Ce(()=>n.value.length===1?n.value[0]:null),Q=Ce(()=>n.value.length>0),re=Ce(()=>n.value.length>1);function $(N){t.value=N,n.value=[],z.value=[],k.value=-1,v.value=1}function ue(N){e.value=N,n.value=[]}function ne(N,D=!1){D&&N?n.value.includes(N)?n.value=n.value.filter(W=>W!==N):n.value=[...n.value,N]:n.value=N?[N]:[]}function _e(N){n.value=N}function te(){n.value=[]}function Z(N){i.value=N,N!=="select"&&(n.value=[])}function Ee(N){o.value=N}function ye(N){v.value=Math.max(.25,Math.min(3,N))}function X(){ye(v.value+.1)}function we(){ye(v.value-.1)}function se(){ye(1)}function de(){h.value=!h.value}function he(){f.value=!f.value}function be(){M.value=!M.value}function ke(N){k.value<z.value.length-1&&z.value.splice(k.value+1),z.value.push(JSON.parse(JSON.stringify(N))),z.value.length>E&&z.value.shift(),k.value=z.value.length-1}function q(){return k.value>0}function U(){return k.value<z.value.length-1}function p(){return q()?(k.value--,JSON.parse(JSON.stringify(z.value[k.value]))):null}function G(){return U()?(k.value++,JSON.parse(JSON.stringify(z.value[k.value]))):null}function L(N){F.value=JSON.parse(JSON.stringify(N))}return{projectId:t,currentSlideId:e,selectedElementIds:n,selectedElementId:I,hoveredElementId:r,activeTool:i,activeShape:s,rightPanelTab:o,leftPanelTab:a,isFullscreen:l,showGrid:h,snapToGrid:f,gridSize:m,showRulers:g,zoomLevel:v,isSaving:_,showExportModal:u,showInteractionEditor:w,interactionElementId:C,showThemeManager:R,showAIPanel:V,showSlidePanel:M,clipboard:F,isDragging:T,isResizing:P,resizeHandle:O,panX:b,panY:S,hasSelection:Q,multiSelection:re,setProject:$,setCurrentSlide:ue,selectElement:ne,setSelection:_e,clearSelection:te,setActiveTool:Z,setRightPanel:Ee,setZoom:ye,zoomIn:X,zoomOut:we,zoomReset:se,toggleGrid:de,toggleSnap:he,toggleSlidePanel:be,pushHistory:ke,canUndo:q,canRedo:U,undo:p,redo:G,setClipboard:L}}),s4=["aria-label"],o4={key:0,class:"modal-header"},a4={key:0,class:"modal-title"},l4={class:"modal-body"},c4={key:1,class:"modal-footer"},u4={__name:"Modal",props:{title:{type:String,default:""},size:{type:String,default:"md"},showClose:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:e}){const n=e;return(r,i)=>(K(),Tt(yd,{to:"body"},[dt(ei,{name:"modal"},{default:kt(()=>[d("div",{class:"modal-overlay",onMousedown:i[1]||(i[1]=$t(s=>n("close"),["self"]))},[d("div",{class:Fe(["modal-box",`modal-${t.size}`]),role:"dialog","aria-modal":"true","aria-label":t.title||"Dialog"},[t.title||t.showClose?(K(),J("div",o4,[t.title?(K(),J("h3",a4,fe(t.title),1)):xe("",!0),t.showClose?(K(),J("button",{key:1,class:"btn btn-icon modal-close",onClick:i[0]||(i[0]=s=>n("close"))},[...i[2]||(i[2]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])):xe("",!0)])):xe("",!0),d("div",l4,[_u(r.$slots,"default",{},void 0,!0)]),r.$slots.footer?(K(),J("div",c4,[_u(r.$slots,"footer",{},void 0,!0)])):xe("",!0)],10,s4)],32)]),_:3})]))}},to=Vt(u4,[["__scopeId","data-v-417bb59d"]]),d4={class:"market-shell"},h4={class:"left-rail"},f4={class:"rail-nav"},p4={class:"market-main"},m4={key:0,class:"verification-banner"},g4={class:"verification-actions"},v4=["disabled"],y4={id:"home-anchor",class:"hero templates-hero"},_4={class:"hero-top"},b4={key:0,class:"hero-user g-rounded"},w4={class:"user-chip-new"},E4={key:1,class:"hero-user g-rounded"},I4={class:"search-bar-g"},T4={id:"templates-anchor",class:"toolbar-row-g"},C4={class:"chip-list-g"},k4=["onClick"],x4={class:"section-title"},S4={class:"cards-row"},A4=["onClick"],R4={class:"card-type"},P4={class:"card-title"},N4={class:"app-top-nav"},O4={class:"nav-search-bar"},D4={class:"nav-actions"},M4={key:0,class:"user-info-mini"},V4={class:"user-chip"},L4={key:1},F4={key:0,class:"home-container"},$4={class:"home-hero"},U4={class:"home-hero-copy"},B4={class:"home-hero-actions"},z4={class:"home-hero-metrics"},j4={class:"hero-metric-card"},q4={class:"hero-metric-card"},W4={class:"welcome-section"},H4={class:"welcome-title"},G4={class:"quick-actions"},K4={class:"projects-section",style:{"padding-top":"0"}},Q4={class:"projects-head",style:{"justify-content":"space-between"}},J4={key:0,class:"project-grid"},Y4=["onClick","data-tooltip"],X4={class:"project-name"},Z4={class:"project-meta"},eP=["onClick"],tP={key:1,class:"projects-lock-card"},nP={key:2,class:"projects-lock-card"},rP={key:1,class:"content-container"},iP={class:"projects-section",style:{padding:"0"}},sP={key:0,class:"project-grid"},oP=["onClick","data-tooltip"],aP={class:"project-name"},lP={class:"project-meta"},cP=["onClick"],uP=["onClick"],dP={class:"auth-modal-body"},hP={class:"auth-title"},fP={class:"auth-message"},pP={class:"auth-mode-toggle"},mP={class:"form-group"},gP={class:"form-group"},vP={key:0,class:"auth-error-msg"},yP=["disabled"],_P={class:"auth-provider-list"},bP=["onClick"],wP={class:"provider-name"},EP={class:"provider-description"},IP={class:"form-group"},TP={class:"form-group"},CP={key:0,class:"error-msg"},kP={__name:"DashboardView",setup(t){const e=xd(),n=gn(),r=In(),i=ra(),s=pe(!1),o=pe(!1),a=pe(!1),l=pe(""),h=pe(""),f=pe(""),m=pe(""),g=pe("all"),v=pe("home"),_=pe(null),u=pe("signin"),w=pe(""),C=pe(""),R=pe(""),V=pe(!1),M=Ce(()=>i.user?{authTypeLabel:i.user.displayName||i.user.email||"Current User",emailVerified:i.user.emailVerified,email:i.user.email}:null),F=[{id:"google",label:"Google",description:"Continue with your Google account"},{id:"microsoft",label:"Microsoft",description:"Continue with your Microsoft account"}],z=Ce(()=>u.value==="signin"?"Welcome back":"Create your account"),k=Ce(()=>u.value==="signin"?"Existing users can sign in with a standard provider.":"New users can sign up with a standard provider."),E=[{label:"Games and challenges",value:"games"},{label:"Quizzes and Surveys",value:"quizzes"},{label:"Presentations",value:"presentations"},{label:"More",value:"more"}],T=[{id:"microcourse",title:"Microcourse: AI in Education",subtitle:"Interactive lesson",category:"presentations",section:"Teach classes",style:"bg-a"},{id:"chromatic",title:"Chromatic",subtitle:"Presentation",category:"presentations",section:"Teach classes",style:"bg-b"},{id:"branching",title:"Branching Scenario",subtitle:"Scenario practice",category:"games",section:"Teach classes",style:"bg-c"},{id:"flipcards",title:"Flipcards Museum",subtitle:"Game challenge",category:"games",section:"Teach classes",style:"bg-d"},{id:"higher-ed",title:"Higher Education",subtitle:"Presentation",category:"presentations",section:"Boost power skills",style:"bg-e"},{id:"complete",title:"Complete the sentence",subtitle:"Quiz",category:"quizzes",section:"Boost power skills",style:"bg-f"},{id:"fill-blanks",title:"Fill in the blanks",subtitle:"Quiz assessment",category:"quizzes",section:"Boost power skills",style:"bg-g"},{id:"timeline",title:"Data Viz Timeline",subtitle:"Interactive infographic",category:"more",section:"Boost power skills",style:"bg-h"}],P=Ce(()=>{const U=m.value.trim().toLowerCase();return T.filter(p=>{const G=g.value==="all"||p.category===g.value,L=!U||p.title.toLowerCase().includes(U)||p.subtitle.toLowerCase().includes(U);return G&&L})}),O=Ce(()=>{const U=new Map;return P.value.forEach(p=>{U.has(p.section)||U.set(p.section,[]),U.get(p.section).push(p)}),Array.from(U.entries()).map(([p,G])=>({title:p,cards:G}))}),b=Ce(()=>{const U=m.value.trim().toLowerCase();return n.sortedProjects.filter(p=>{var G;return U?p.name.toLowerCase().includes(U)||((G=p.description)==null?void 0:G.toLowerCase().includes(U)):!0}).slice(0,8)});function S(){if(!M.value){be("signin");return}l.value="My New Course",s.value=!0,setTimeout(()=>{var U;return(U=document.getElementById("project-name-input"))==null?void 0:U.focus()},50)}function I(){if(!M.value){be("signin");return}o.value=!0}function Q(){if(!l.value.trim())return;const U=n.createProject(l.value.trim());s.value=!1,re(U.id)}function re(U){r.setProject(U),e.push({name:"editor",params:{id:U}})}function $(U){const p=n.createProjectFromTemplate(U.id,U.title,`${U.subtitle} template`);re(p.id)}function ue(U){_.value=U}function ne(){_.value&&(n.deleteProject(_.value),_.value=null)}function _e(U){n.duplicateProject(U)}function te(){f.value="";const U=n.importProject(h.value);if(!U){f.value="Invalid project JSON. Please check and try again.";return}o.value=!1,h.value="",re(U.id)}function Z(U){return U?new Date(U).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}):""}function Ee(U){var p;return((p=U.slides)==null?void 0:p.length)||0}function ye(U){u.value=U,R.value="",w.value="",C.value=""}async function X(){if(!w.value||!C.value){R.value="Please enter both email and password.";return}V.value=!0,R.value="";try{u.value==="signin"?await i.loginWithEmail(w.value,C.value):await i.signUpWithEmail(w.value,C.value),a.value=!1}catch(U){console.error("Email Auth Error:",U),U.code==="auth/email-already-in-use"?R.value="This email is already in use. Try signing in instead.":U.code==="auth/wrong-password"||U.code==="auth/user-not-found"||U.code==="auth/invalid-credential"?R.value="Invalid email or password.":U.code==="auth/weak-password"?R.value="Password should be at least 6 characters.":R.value="An error occurred. Please try again."}finally{V.value=!1}}const we=pe(!1);async function se(){we.value=!0;try{await i.resendVerification(),alert("Verification email sent! Please check your inbox.")}catch(U){console.error(U),alert("Failed to send verification email. Please wait a moment and try again.")}finally{we.value=!1}}async function de(){var U;await i.reloadUser(),(U=M.value)!=null&&U.emailVerified?alert("Thank you! Your email has been verified."):alert("Email not verified yet. Please check your inbox or resend the email.")}async function he(U){try{R.value="",U.id==="google"?await i.loginWithGoogle():U.id==="microsoft"&&await i.loginWithMicrosoft(),a.value=!1}catch(p){console.error("Login failed",p)}}function be(U="signin"){u.value=U,a.value=!0}async function ke(){await i.logout(),a.value=!1,u.value="signin"}function q(U){(U==="community"||U==="activity"||U==="brand")&&(U="home"),v.value=U,U==="content"&&!M.value&&be("signin"),!(typeof window>"u")&&requestAnimationFrame(()=>{var p,G,L;if(U==="templates"){(p=document.getElementById("templates-anchor"))==null||p.scrollIntoView({behavior:"smooth",block:"start"});return}if(U==="content"){(G=document.getElementById("projects-anchor"))==null||G.scrollIntoView({behavior:"smooth",block:"start"});return}(L=document.getElementById("home-anchor"))==null||L.scrollIntoView({behavior:"smooth",block:"start"})})}return(U,p)=>{var G;return K(),J("div",d4,[d("aside",h4,[p[37]||(p[37]=d("div",{class:"rail-logo"},"MS",-1)),d("nav",f4,[d("button",{class:Fe(["rail-item",v.value==="home"&&"active"]),type:"button",onClick:p[0]||(p[0]=L=>q("home")),"data-tooltip":"Go to home","data-tooltip-position":"right"},[...p[31]||(p[31]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),d("polyline",{points:"9 22 9 12 15 12 15 22"})],-1),Pe(" Home ",-1)])],2),d("button",{class:Fe(["rail-item",v.value==="content"&&"active"]),type:"button",onClick:p[1]||(p[1]=L=>q("content")),"data-tooltip":"View your content","data-tooltip-position":"right"},[...p[32]||(p[32]=[nn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-fe516a51><rect width="18" height="18" x="3" y="3" rx="2" ry="2" data-v-fe516a51></rect><path d="M7 7h10" data-v-fe516a51></path><path d="M7 12h10" data-v-fe516a51></path><path d="M7 17h10" data-v-fe516a51></path></svg> Content ',2)])],2),d("button",{class:Fe(["rail-item",v.value==="templates"&&"active"]),type:"button",onClick:p[2]||(p[2]=L=>q("templates")),"data-tooltip":"Browse templates","data-tooltip-position":"right"},[...p[33]||(p[33]=[nn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-fe516a51><rect width="7" height="9" x="3" y="3" rx="1" data-v-fe516a51></rect><rect width="7" height="5" x="14" y="3" rx="1" data-v-fe516a51></rect><rect width="7" height="9" x="14" y="12" rx="1" data-v-fe516a51></rect><rect width="7" height="5" x="3" y="16" rx="1" data-v-fe516a51></rect></svg> Templates ',2)])],2),d("button",{class:"rail-item",type:"button",onClick:p[3]||(p[3]=L=>q("community")),"data-tooltip":"Community coming soon","data-tooltip-position":"right"},[...p[34]||(p[34]=[nn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-fe516a51><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-v-fe516a51></path><circle cx="9" cy="7" r="4" data-v-fe516a51></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-v-fe516a51></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-v-fe516a51></path></svg> Community ',2)])]),d("button",{class:"rail-item",type:"button",onClick:p[4]||(p[4]=L=>q("activity")),"data-tooltip":"Activity coming soon","data-tooltip-position":"right"},[...p[35]||(p[35]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})],-1),Pe(" Activity ",-1)])]),d("button",{class:"rail-item",type:"button",onClick:p[5]||(p[5]=L=>q("brand")),"data-tooltip":"Brand kit coming soon","data-tooltip-position":"right"},[...p[36]||(p[36]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"M12 2v20"}),d("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})],-1),Pe(" Brand kit ",-1)])])])]),d("main",p4,[M.value&&!M.value.emailVerified?(K(),J("div",m4,[d("span",null,[p[38]||(p[38]=Pe("Please verify your email address (",-1)),d("strong",null,fe(M.value.email),1),p[39]||(p[39]=Pe(") to secure your account and unlock all features.",-1))]),d("div",g4,[d("button",{class:"btn btn-primary btn-sm",onClick:de},"I've verified my email"),d("button",{class:"btn btn-secondary btn-sm",onClick:se,disabled:we.value},fe(we.value?"Sending...":"Resend Email"),9,v4)])])):xe("",!0),v.value==="templates"?(K(),J(Ne,{key:1},[d("section",y4,[d("div",_4,[M.value?(K(),J("div",b4,[d("span",w4,fe(M.value.authTypeLabel),1),d("button",{class:"btn btn-ghost-text",type:"button",onClick:ke},"Sign out")])):(K(),J("div",E4,[d("button",{class:"btn btn-ghost-text",type:"button",onClick:p[6]||(p[6]=L=>be("signin"))},"Log In"),d("button",{class:"btn btn-ghost-text",type:"button",onClick:p[7]||(p[7]=L=>be("signup"))},"Sign Up")])),d("div",{class:"hero-actions"},[p[40]||(p[40]=d("button",{class:"btn g-premium-btn"},[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),Pe(" Upgrade to Premium ")],-1)),d("button",{class:"btn g-outline-btn",onClick:I,"data-tooltip":"Import a project"},"Import")])]),p[42]||(p[42]=d("h1",{class:"hero-title-g"},"Choose how to create",-1)),d("div",I4,[tt(d("input",{"onUpdate:modelValue":p[8]||(p[8]=L=>m.value=L),class:"search-input-g",placeholder:"Describe what you're looking for"},null,512),[[mt,m.value]]),p[41]||(p[41]=d("button",{class:"search-btn-g",type:"button","aria-label":"Search"},[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("path",{d:"m21 21-4.35-4.35"})])],-1))])]),d("section",T4,[d("div",C4,[d("button",{class:Fe(["chip-g",g.value==="all"&&"active"]),onClick:p[9]||(p[9]=L=>g.value="all"),type:"button"},"All",2),(K(),J(Ne,null,Xe(E,L=>d("button",{key:L.value,class:Fe(["chip-g",g.value===L.value&&"active"]),onClick:N=>g.value=L.value,type:"button"},fe(L.label),11,k4)),64))]),p[43]||(p[43]=d("button",{class:"btn g-outline-btn ai-btn-g"},[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})]),Pe(" Create quiz with AI ")],-1))]),(K(!0),J(Ne,null,Xe(O.value,L=>(K(),J("section",{key:L.title,class:"template-section"},[d("h2",x4,fe(L.title),1),d("div",S4,[(K(!0),J(Ne,null,Xe(L.cards,N=>(K(),J("article",{key:N.id,class:Fe(["market-card",N.style]),onClick:D=>$(N)},[p[44]||(p[44]=nn('<div class="hover-overlay" data-v-fe516a51></div><div class="action-icon" data-v-fe516a51><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-fe516a51><line x1="12" y1="5" x2="12" y2="19" data-v-fe516a51></line><line x1="5" y1="12" x2="19" y2="12" data-v-fe516a51></line></svg></div>',2)),d("span",R4,fe(N.subtitle),1),d("h3",P4,fe(N.title),1)],10,A4))),128))])]))),128))],64)):xe("",!0),v.value==="home"||v.value==="content"?(K(),J(Ne,{key:2},[d("header",N4,[d("div",O4,[p[45]||(p[45]=d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("path",{d:"m21 21-4.35-4.35"})],-1)),tt(d("input",{"onUpdate:modelValue":p[10]||(p[10]=L=>m.value=L),placeholder:"Search templates and creations"},null,512),[[mt,m.value]])]),d("div",D4,[p[46]||(p[46]=d("button",{class:"btn btn-secondary btn-sm",style:{color:"#d97706","border-color":"rgba(217,119,6,0.3)",background:"#fffbeb"}},[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),Pe(" Upgrade to Premium ")],-1)),M.value?(K(),J("div",M4,[d("span",V4,fe(M.value.authTypeLabel),1),d("div",{class:"user-actions-mini"},[d("button",{class:"btn btn-secondary btn-sm",type:"button",onClick:ke},"Log out"),d("button",{class:"btn btn-primary btn-sm",onClick:S},"Create course")])])):(K(),J("div",L4,[d("button",{class:"btn btn-secondary btn-sm",onClick:p[11]||(p[11]=L=>be("signin"))},"Sign In")]))])]),v.value==="home"?(K(),J("div",F4,[d("section",$4,[p[51]||(p[51]=d("div",{class:"home-hero-pattern"},null,-1)),p[52]||(p[52]=d("div",{class:"home-hero-glow home-hero-glow-left"},null,-1)),p[53]||(p[53]=d("div",{class:"home-hero-glow home-hero-glow-right"},null,-1)),d("div",U4,[p[48]||(p[48]=d("span",{class:"home-hero-kicker"},"Featured challenge",-1)),p[49]||(p[49]=d("h1",{class:"home-hero-title"},"Build interactions that feel alive.",-1)),p[50]||(p[50]=d("p",{class:"home-hero-text"}," Design drag-and-drop lessons, branching slides, and quick knowledge checks with a workspace that feels built for fast iteration. ",-1)),d("div",B4,[d("button",{class:"btn btn-primary btn-lg",onClick:S,"data-tooltip":"Create a new project from scratch"},"Start a new course"),d("button",{class:"btn home-hero-secondary",onClick:p[12]||(p[12]=L=>q("templates")),"data-tooltip":"Open the templates library"},"Browse templates")]),d("div",z4,[d("div",j4,[d("strong",null,fe(b.value.length||0),1),p[47]||(p[47]=d("span",null,"projects in motion",-1))]),d("div",q4,[d("strong",null,fe(M.value?"Ready":"Guest"),1),d("span",null,fe(M.value?"workspace synced":"sign in to sync"),1)])])]),p[54]||(p[54]=nn('<div class="home-hero-visual" aria-hidden="true" data-v-fe516a51><div class="hero-preview-card hero-preview-main" data-v-fe516a51><span class="preview-badge" data-v-fe516a51>Drag and drop</span><div class="preview-line preview-line-lg" data-v-fe516a51></div><div class="preview-line preview-line-md" data-v-fe516a51></div><div class="preview-dropzones" data-v-fe516a51><span data-v-fe516a51></span><span data-v-fe516a51></span><span data-v-fe516a51></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-quiz" data-v-fe516a51><span class="preview-dot" data-v-fe516a51></span><div class="preview-line preview-line-sm" data-v-fe516a51></div><div class="preview-pill-row" data-v-fe516a51><span data-v-fe516a51></span><span data-v-fe516a51></span><span data-v-fe516a51></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-media" data-v-fe516a51><div class="preview-media" data-v-fe516a51></div><div class="preview-line preview-line-sm" data-v-fe516a51></div></div></div>',1))]),d("div",W4,[d("h2",H4," Hi, "+fe(((G=M.value)==null?void 0:G.authTypeLabel.split(" ")[0])||"Creator")+" 👋 What are you going to create today? ",1),d("div",G4,[d("button",{class:"quick-btn",onClick:S,"data-tooltip":"Start with a blank project"},[...p[55]||(p[55]=[d("span",{class:"q-icon",style:{color:"var(--color-primary)"}},"+",-1),Pe(" Create scratch project",-1)])]),d("button",{class:"quick-btn",onClick:p[13]||(p[13]=L=>q("templates")),"data-tooltip":"Use a game template"},[...p[56]||(p[56]=[d("span",{class:"q-icon",style:{color:"var(--color-secondary)"}},"🎮",-1),Pe(" Create a game",-1)])]),d("button",{class:"quick-btn",onClick:p[14]||(p[14]=L=>q("templates")),"data-tooltip":"Use a presentation template"},[...p[57]||(p[57]=[d("span",{class:"q-icon",style:{color:"var(--color-success)"}},"📱",-1),Pe(" Create a presentation",-1)])])])]),d("section",K4,[d("div",Q4,[p[58]||(p[58]=d("h2",{class:"section-title"},"Pick up where you left off",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:p[15]||(p[15]=L=>q("content"))},"Go to My Content ›")]),M.value&&b.value.length?(K(),J("div",J4,[(K(!0),J(Ne,null,Xe(b.value.slice(0,4),L=>(K(),J("article",{key:L.id,class:"project-card",onClick:N=>re(L.id),"data-tooltip":`Open ${L.name}`},[d("div",X4,fe(L.name),1),d("p",Z4,fe(Ee(L))+" slides · "+fe(Z(L.updatedAt)),1),d("div",{class:"project-actions",onClick:p[16]||(p[16]=$t(()=>{},["stop"]))},[d("button",{class:"btn btn-ghost btn-sm",onClick:N=>_e(L.id)},"Duplicate",8,eP)])],8,Y4))),128))])):M.value?(K(),J("div",nP,[...p[60]||(p[60]=[d("p",null,"You haven't created any projects yet. Start by creating a project from scratch or a template.",-1)])])):(K(),J("div",tP,[...p[59]||(p[59]=[d("p",null,"Sign in to see your recent projects.",-1)])]))])])):xe("",!0),v.value==="content"?(K(),J("div",rP,[p[62]||(p[62]=d("div",{class:"content-header-row"},[d("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[d("div",{class:"content-icon"},"💿"),d("h1",{style:{"font-size":"28px","font-weight":"700"}},"My content")])],-1)),d("div",iP,[M.value?(K(),J("div",sP,[d("article",{class:"project-card create-new-card",onClick:S,"data-tooltip":"Create a project"},[...p[61]||(p[61]=[d("div",{class:"create-circle"},"+",-1),d("div",{class:"create-text"},"Create new project",-1)])]),(K(!0),J(Ne,null,Xe(b.value,L=>(K(),J("article",{key:L.id,class:"project-card",onClick:N=>re(L.id),"data-tooltip":`Open ${L.name}`},[d("div",aP,fe(L.name),1),d("p",lP,fe(Ee(L))+" slides · "+fe(Z(L.updatedAt)),1),d("div",{class:"project-actions",onClick:p[17]||(p[17]=$t(()=>{},["stop"]))},[d("button",{class:"btn btn-ghost btn-sm",onClick:N=>_e(L.id)},"Duplicate",8,cP),d("button",{class:"btn btn-ghost btn-sm",onClick:N=>ue(L.id),style:{color:"var(--color-danger)"}},"Delete",8,uP)])],8,oP))),128))])):xe("",!0)])])):xe("",!0)],64)):xe("",!0)]),a.value?(K(),Tt(to,{key:0,title:u.value==="signin"?"Sign In":"Sign Up",size:"md",onClose:p[22]||(p[22]=L=>a.value=!1)},{default:kt(()=>[d("div",dP,[p[65]||(p[65]=d("p",{class:"auth-eyebrow"},"Access your workspace",-1)),d("h2",hP,fe(z.value),1),d("p",fP,fe(k.value),1),d("div",pP,[d("button",{class:Fe(["auth-mode-btn",u.value==="signin"&&"active"]),type:"button",onClick:p[18]||(p[18]=L=>ye("signin"))}," Sign In ",2),d("button",{class:Fe(["auth-mode-btn",u.value==="signup"&&"active"]),type:"button",onClick:p[19]||(p[19]=L=>ye("signup"))}," Sign Up ",2)]),d("form",{onSubmit:$t(X,["prevent"]),class:"auth-email-form"},[d("div",mP,[p[63]||(p[63]=d("label",{class:"form-label"},"Email",-1)),tt(d("input",{type:"email","onUpdate:modelValue":p[20]||(p[20]=L=>w.value=L),class:"input",placeholder:"you@example.com",required:""},null,512),[[mt,w.value]])]),d("div",gP,[p[64]||(p[64]=d("label",{class:"form-label"},"Password",-1)),tt(d("input",{type:"password","onUpdate:modelValue":p[21]||(p[21]=L=>C.value=L),class:"input",placeholder:"••••••••",required:"",minlength:"6"},null,512),[[mt,C.value]])]),R.value?(K(),J("div",vP,fe(R.value),1)):xe("",!0),d("button",{type:"submit",class:"btn btn-primary",style:{width:"100%","justify-content":"center",height:"42px"},disabled:V.value},fe(V.value?"Loading...":u.value==="signin"?"Sign In with Email":"Sign Up with Email"),9,yP)],32),p[66]||(p[66]=d("div",{class:"auth-divider"},[d("span",null,"or continue with")],-1)),d("div",_P,[(K(),J(Ne,null,Xe(F,L=>d("button",{key:L.id,class:"auth-provider-btn",type:"button",onClick:N=>he(L)},[d("span",wP,fe(L.label),1),d("span",EP,fe(L.description),1)],8,bP)),64))])])]),_:1},8,["title"])):xe("",!0),s.value?(K(),Tt(to,{key:1,title:"New Project",size:"sm",onClose:p[25]||(p[25]=L=>s.value=!1)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:p[24]||(p[24]=L=>s.value=!1)},"Cancel"),d("button",{class:"btn btn-primary",onClick:Q},"Create Project")]),default:kt(()=>[d("div",IP,[p[67]||(p[67]=d("label",{class:"form-label"},"Project Name",-1)),tt(d("input",{id:"project-name-input","onUpdate:modelValue":p[23]||(p[23]=L=>l.value=L),class:"input",placeholder:"e.g. Quiz Assessment",onKeydown:ku(Q,["enter"])},null,544),[[mt,l.value]])])]),_:1})):xe("",!0),o.value?(K(),Tt(to,{key:2,title:"Import Project",size:"md",onClose:p[28]||(p[28]=L=>o.value=!1)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:p[27]||(p[27]=L=>o.value=!1)},"Cancel"),d("button",{class:"btn btn-primary",onClick:te},"Import")]),default:kt(()=>[d("div",TP,[p[68]||(p[68]=d("label",{class:"form-label"},"Paste Project JSON",-1)),tt(d("textarea",{"onUpdate:modelValue":p[26]||(p[26]=L=>h.value=L),class:"textarea",style:{"min-height":"160px"},placeholder:'{"name":"My Project",...}'},null,512),[[mt,h.value]])]),f.value?(K(),J("p",CP,fe(f.value),1)):xe("",!0)]),_:1})):xe("",!0),_.value?(K(),Tt(to,{key:3,title:"Delete Project",size:"sm",onClose:p[30]||(p[30]=L=>_.value=null)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:p[29]||(p[29]=L=>_.value=null)},"Cancel"),d("button",{class:"btn btn-danger",onClick:ne},"Delete")]),default:kt(()=>[p[69]||(p[69]=d("p",{class:"delete-text"},"Are you sure you want to delete this project? This action cannot be undone.",-1))]),_:1})):xe("",!0)])}}},xP=Vt(kP,[["__scopeId","data-v-fe516a51"]]);function SP(t){function e(n){var a,l,h,f,m,g,v,_,u,w,C,R,V,M,F,z,k;const r=n.ctrlKey||n.metaKey,i=n.key.toLowerCase(),s=n.target.tagName.toLowerCase(),o=s==="input"||s==="textarea"||n.target.isContentEditable;o&&r&&["c","v","x","a","z","y"].includes(i)||(r&&i==="z"&&!n.shiftKey?(n.preventDefault(),(a=t.undo)==null||a.call(t)):r&&(i==="y"||i==="z"&&n.shiftKey)?(n.preventDefault(),(l=t.redo)==null||l.call(t)):r&&i==="c"?(n.preventDefault(),(h=t.copy)==null||h.call(t)):r&&i==="v"?(n.preventDefault(),(f=t.paste)==null||f.call(t)):r&&i==="x"?(n.preventDefault(),(m=t.cut)==null||m.call(t)):r&&i==="d"?(n.preventDefault(),(g=t.duplicate)==null||g.call(t)):r&&i==="a"?(n.preventDefault(),(v=t.selectAll)==null||v.call(t)):i==="delete"||i==="backspace"?o||(n.preventDefault(),(_=t.delete)==null||_.call(t)):i==="escape"?(u=t.escape)==null||u.call(t):r&&i==="g"?(n.preventDefault(),(w=t.toggleGrid)==null||w.call(t)):r&&i==="="||r&&i==="+"?(n.preventDefault(),(C=t.zoomIn)==null||C.call(t)):r&&i==="-"?(n.preventDefault(),(R=t.zoomOut)==null||R.call(t)):r&&i==="0"?(n.preventDefault(),(V=t.zoomReset)==null||V.call(t)):i==="arrowleft"?(M=t.nudge)==null||M.call(t,-1,0):i==="arrowright"?(F=t.nudge)==null||F.call(t,1,0):i==="arrowup"?(z=t.nudge)==null||z.call(t,0,-1):i==="arrowdown"&&((k=t.nudge)==null||k.call(t,0,1)))}qo(()=>window.addEventListener("keydown",e)),Wo(()=>window.removeEventListener("keydown",e))}const AP={class:"slide-panel"},RP={class:"slide-panel-header"},PP={class:"slide-count"},NP={class:"slides-list"},OP=["onClick","onContextmenu","onDragstart","onDrop"],DP={class:"slide-number"},MP={class:"slide-footer"},VP={class:"slide-title"},LP=["onClick"],FP={__name:"SlidePanel",setup(t){const e=In(),n=gn(),r=Ce(()=>n.getProject(e.projectId)),i=Ce(()=>{var M,F;return((F=(M=r.value)==null?void 0:M.slides)==null?void 0:F.slice().sort((z,k)=>z.order-k.order))||[]}),s=pe({show:!1,x:0,y:0,slideId:null});function o(M){e.setCurrentSlide(M)}function a(){const M=i.value.findIndex(z=>z.id===e.currentSlideId),F=n.addSlide(e.projectId,M);F&&e.setCurrentSlide(F.id)}function l(M){var k,E;const F=i.value.findIndex(T=>T.id===M);n.deleteSlide(e.projectId,M);const z=((k=r.value)==null?void 0:k.slides)||[];if(z.length>0){const T=z.slice().sort((O,b)=>O.order-b.order),P=Math.min(F,T.length-1);e.setCurrentSlide((E=T[P])==null?void 0:E.id)}}function h(M,F){M.preventDefault(),s.value={show:!0,x:M.clientX,y:M.clientY,slideId:F},setTimeout(()=>window.addEventListener("click",f,{once:!0}),0)}function f(){s.value.show=!1}function m(){const M=n.duplicateSlide(e.projectId,s.value.slideId);M&&e.setCurrentSlide(M.id),f()}function g(){l(s.value.slideId),f()}function v(M,F){M.stopPropagation(),l(F)}function _(){const M=i.value.findIndex(F=>F.id===s.value.slideId);M>0&&n.reorderSlides(e.projectId,M,M-1),f()}function u(){const M=i.value.findIndex(F=>F.id===s.value.slideId);M<i.value.length-1&&n.reorderSlides(e.projectId,M,M+1),f()}let w=-1;function C(M,F){w=F,M.dataTransfer.effectAllowed="move"}function R(M,F){M.preventDefault(),w!==-1&&w!==F&&n.reorderSlides(e.projectId,w,F),w=-1}function V(M){return M.backgroundType==="gradient"&&M.backgroundGradient?{background:M.backgroundGradient}:M.backgroundType==="image"&&M.backgroundImage?{backgroundImage:`url(${M.backgroundImage})`,backgroundSize:"cover"}:{background:M.background||"#fff"}}return(M,F)=>(K(),J("div",AP,[d("div",RP,[F[2]||(F[2]=d("span",{class:"panel-section-title"},"Slides",-1)),d("span",PP,fe(i.value.length),1),d("button",{class:"btn btn-icon add-slide-btn",onClick:a,"data-tooltip":"Add slide","aria-label":"Add slide"},[...F[1]||(F[1]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),d("div",NP,[(K(!0),J(Ne,null,Xe(i.value,(z,k)=>(K(),J("div",{key:z.id,class:Fe(["slide-thumb-item",Ie(e).currentSlideId===z.id&&"active"]),draggable:"true",onClick:E=>o(z.id),onContextmenu:E=>h(E,z.id),onDragstart:E=>C(E,k),onDragover:F[0]||(F[0]=$t(()=>{},["prevent"])),onDrop:E=>R(E,k)},[d("div",DP,fe(k+1),1),d("div",{class:"slide-thumb",style:$e(V(z))},[(K(!0),J(Ne,null,Xe(z.elements.slice(0,6),E=>{var T,P;return K(),J("div",{key:E.id,class:"mini-element",style:$e({left:E.x/960*100+"%",top:E.y/540*100+"%",width:E.width/960*100+"%",height:E.height/540*100+"%",background:E.type==="shape"?(T=E.content)==null?void 0:T.fillColor:E.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:E.type==="shape"&&((P=E.content)==null?void 0:P.shapeType)==="circle"?"50%":void 0})},null,4)}),128))],4),d("div",MP,[d("div",VP,fe(z.title||`Slide ${k+1}`),1),i.value.length>1?(K(),J("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:E=>v(E,z.id)},[...F[3]||(F[3]=[nn('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1b392fd3><polyline points="3 6 5 6 21 6" data-v-1b392fd3></polyline><path d="M19 6l-1 14H6L5 6" data-v-1b392fd3></path><path d="M10 11v6M14 11v6" data-v-1b392fd3></path><path d="M9 6V4h6v2" data-v-1b392fd3></path></svg>',1)])],8,LP)):xe("",!0)])],42,OP))),128))]),d("button",{class:"add-slide-bottom",onClick:a},[...F[4]||(F[4]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Pe(" Add Slide ",-1)])]),(K(),Tt(yd,{to:"body"},[s.value.show?(K(),J("div",{key:0,class:"context-menu",style:$e({left:s.value.x+"px",top:s.value.y+"px"})},[d("button",{class:"ctx-item",onClick:m},"Duplicate"),d("button",{class:"ctx-item",onClick:_},"Move Up"),d("button",{class:"ctx-item",onClick:u},"Move Down"),F[5]||(F[5]=d("div",{class:"ctx-divider"},null,-1)),d("button",{class:"ctx-item danger",onClick:g},"Delete Slide")],4)):xe("",!0)]))]))}},$P=Vt(FP,[["__scopeId","data-v-1b392fd3"]]),UP={class:"layer-panel"},BP={class:"layer-header panel-section"},zP={class:"panel-title",style:{"margin-bottom":"0"}},jP={class:"layer-count"},qP={key:0,class:"layers-empty"},WP={key:1,class:"layers-list"},HP=["onClick"],GP={class:"layer-type-icon"},KP={class:"layer-name"},QP={class:"layer-actions"},JP=["onClick","data-tooltip"],YP={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},XP={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ZP=["onClick","data-tooltip"],e5={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},t5={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},n5=["onClick"],r5=["onClick"],i5=["onClick"],s5={__name:"LayerPanel",setup(t){const e=In(),n=gn(),r=Ce(()=>n.getProject(e.projectId)),i=Ce(()=>{var _,u;return(u=(_=r.value)==null?void 0:_.slides)==null?void 0:u.find(w=>w.id===e.currentSlideId)}),s=Ce(()=>{var _;return[...((_=i.value)==null?void 0:_.elements)||[]].sort((u,w)=>(w.zIndex||0)-(u.zIndex||0))});function o(_){e.selectElement(_)}function a(_){n.updateElement(e.projectId,e.currentSlideId,_.id,{visible:!_.visible})}function l(_){n.updateElement(e.projectId,e.currentSlideId,_.id,{locked:!_.locked})}function h(_){n.reorderElement(e.projectId,e.currentSlideId,_,"up")}function f(_){n.reorderElement(e.projectId,e.currentSlideId,_,"down")}function m(_){n.deleteElement(e.projectId,e.currentSlideId,_),e.selectedElementId===_&&e.clearSelection()}function g(_){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[_]||"◆"}function v(_){var u,w,C;return(u=_.content)!=null&&u.text?_.content.text.slice(0,24):(w=_.content)!=null&&w.label?_.content.label:(C=_.content)!=null&&C.question?_.content.question.slice(0,24):_.type.charAt(0).toUpperCase()+_.type.slice(1)}return(_,u)=>(K(),J("div",UP,[d("div",BP,[d("div",zP,[u[0]||(u[0]=Pe(" Layers ",-1)),d("span",jP,fe(s.value.length),1)])]),s.value.length===0?(K(),J("div",qP,[...u[1]||(u[1]=[d("p",null,"No elements on this slide.",-1),d("p",null,"Add elements using the toolbar above.",-1)])])):(K(),J("div",WP,[(K(!0),J(Ne,null,Xe(s.value,w=>(K(),J("div",{key:w.id,class:Fe(["layer-item",Ie(e).selectedElementIds.includes(w.id)&&"selected",w.locked&&"locked",!w.visible&&"hidden"]),onClick:C=>o(w.id)},[d("span",GP,fe(g(w.type)),1),d("span",KP,fe(v(w)),1),d("div",QP,[d("button",{class:Fe(["layer-action-btn",{active:w.visible}]),onClick:$t(C=>a(w),["stop"]),"data-tooltip":w.visible?"Hide":"Show"},[w.visible?(K(),J("svg",YP,[...u[2]||(u[2]=[d("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),d("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(K(),J("svg",XP,[...u[3]||(u[3]=[d("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),d("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),d("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,JP),d("button",{class:Fe(["layer-action-btn",{active:w.locked}]),onClick:$t(C=>l(w),["stop"]),"data-tooltip":w.locked?"Unlock":"Lock"},[w.locked?(K(),J("svg",e5,[...u[4]||(u[4]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(K(),J("svg",t5,[...u[5]||(u[5]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,ZP),d("button",{class:"layer-action-btn",onClick:$t(C=>h(w.id),["stop"]),"data-tooltip":"Move up"},[...u[6]||(u[6]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,n5),d("button",{class:"layer-action-btn",onClick:$t(C=>f(w.id),["stop"]),"data-tooltip":"Move down"},[...u[7]||(u[7]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,r5),d("button",{class:"layer-action-btn danger",onClick:$t(C=>m(w.id),["stop"]),"data-tooltip":"Delete"},[...u[8]||(u[8]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,i5)])],10,HP))),128))]))]))}},o5=Vt(s5,[["__scopeId","data-v-7407acd8"]]),a5={class:"properties-panel"},l5={class:"panel-section"},c5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},u5={class:"form-group"},d5={class:"bg-type-tabs"},h5=["onClick"],f5={key:0,class:"color-row"},p5=["value"],m5=["value"],g5={class:"panel-section"},v5={class:"panel-section"},y5=["value"],_5={class:"panel-section"},b5={class:"panel-title"},w5={class:"element-type-badge"},E5={class:"geo-grid"},I5={class:"form-group"},T5=["value"],C5={class:"form-group"},k5=["value"],x5={class:"form-group"},S5=["value"],A5={class:"form-group"},R5=["value"],P5={class:"form-group"},N5=["value"],O5={class:"form-group"},D5=["value"],M5={key:0,class:"panel-section"},V5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},L5=["value"],F5={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},$5={class:"form-group"},U5=["value"],B5={class:"form-group"},z5=["value"],j5={class:"form-group",style:{"margin-top":"var(--space-3)"}},q5=["value"],W5=["value"],H5={class:"form-group",style:{"margin-top":"var(--space-3)"}},G5={class:"align-btns"},K5=["onClick"],Q5={class:"form-group",style:{"margin-top":"var(--space-3)"}},J5={class:"style-btns"},Y5={class:"form-group",style:{"margin-top":"var(--space-3)"}},X5={class:"color-row"},Z5=["value"],e6=["value"],t6={class:"form-group",style:{"margin-top":"var(--space-3)"}},n6=["value"],r6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},i6={class:"form-group"},s6=["value"],o6={class:"form-group"},a6=["value"],l6={key:1,class:"panel-section"},c6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},u6=["value"],d6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},h6=["value"],f6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},p6=["value"],m6={class:"form-group"},g6=["value"],v6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},y6={class:"form-group"},_6=["value"],b6={class:"form-group"},w6=["value"],E6={key:2,class:"panel-section"},I6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},T6=["value"],C6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},k6={class:"color-row"},x6=["value"],S6=["value"],A6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},R6={class:"color-row"},P6=["value"],N6=["value"],O6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},D6=["value"],M6={class:"form-group"},V6=["value"],L6={class:"form-group",style:{"margin-top":"var(--space-3)"}},F6=["value"],$6={key:3,class:"panel-section"},U6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},B6=["value"],z6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},j6=["value"],q6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},W6=["value"],H6={key:0,class:"form-group"},G6=["value"],K6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Q6={class:"form-group"},J6=["value"],Y6={class:"form-group"},X6=["value"],Z6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},e3={class:"form-group"},t3=["value"],n3={class:"form-group"},r3=["value"],i3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},s3={class:"form-group"},o3=["value"],a3={class:"form-group"},l3=["value"],c3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},u3={class:"form-group"},d3=["value"],h3=["value"],f3={class:"form-group"},p3=["value"],m3={key:4,class:"panel-section"},g3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},v3=["value"],y3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_3={class:"color-row"},b3=["value"],w3=["value"],E3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},I3={class:"form-group"},T3=["value"],C3={class:"form-group"},k3=["value"],x3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},S3=["value"],A3={class:"form-group"},R3=["value"],P3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},N3={class:"form-group"},O3=["value"],D3={class:"form-group"},M3=["value"],V3={key:5,class:"panel-section"},L3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},F3=["value"],$3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},U3=["value"],B3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},z3=["value"],j3={class:"check-row"},q3=["checked"],W3={class:"check-row"},H3=["checked"],G3={class:"check-row"},K3=["checked"],Q3={class:"check-row"},J3=["checked"],Y3={key:6,class:"panel-section"},X3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Z3=["value"],eN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},tN=["value"],nN={class:"check-row"},rN=["checked"],iN={class:"check-row"},sN=["checked"],oN={class:"check-row"},aN=["checked"],lN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},cN={class:"form-group"},uN=["value"],dN={class:"form-group"},hN=["value"],fN={class:"form-group",style:{"margin-top":"var(--space-3)"}},pN=["value"],mN={key:7,class:"panel-section"},gN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},vN=["value"],yN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},_N=["value"],bN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wN=["value"],EN={class:"form-group"},IN=["value"],TN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},CN={class:"form-group"},kN=["value"],xN={class:"form-group"},SN=["value"],AN={class:"form-group",style:{"margin-top":"var(--space-3)"}},RN=["value"],PN={class:"panel-section"},NN={class:"actions-list"},ON={__name:"PropertiesPanel",setup(t){const e=In(),n=gn(),r=Ce(()=>n.getProject(e.projectId)),i=Ce(()=>{var _,u;return(u=(_=r.value)==null?void 0:_.slides)==null?void 0:u.find(w=>w.id===e.currentSlideId)}),s=Ce(()=>{var _,u;return e.selectedElementId?(u=(_=i.value)==null?void 0:_.elements)==null?void 0:u.find(w=>w.id===e.selectedElementId):null}),o=pe({});Yt(s,_=>{_?o.value=JSON.parse(JSON.stringify(_)):o.value={}},{immediate:!0,deep:!0});function a(_){s.value&&n.updateElement(e.projectId,e.currentSlideId,s.value.id,_)}function l(_){if(!s.value)return;const u={...s.value.content,..._};a({content:u})}function h(_,u){const w=parseFloat(u);isNaN(w)||a({[_]:w})}const f=pe({});Yt(i,_=>{_&&(f.value={..._})},{immediate:!0});function m(_){i.value&&n.updateSlide(e.projectId,i.value.id,_)}function g(_,u){m({[_]:u})}const v=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(_,u)=>{var w,C,R,V,M,F,z,k,E,T,P,O,b,S,I,Q,re,$,ue,ne,_e,te,Z,Ee,ye,X,we,se,de,he,be,ke,q,U,p,G,L,N,D,W,j,A,H,Y,ie,le,ge,Se,ae,ze,Ze,Je,_t,qe,sn,ht,Ye,Tn,vn,hi,Vn,kr,ft,Ln,xr,Sr,ia,sa,er,oa,aa,fi,Rs,Ps,qi,Ar;return K(),J("div",a5,[u[190]||(u[190]=d("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),s.value?(K(),J(Ne,{key:1},[d("div",_5,[d("div",b5,[u[95]||(u[95]=Pe(" Position & Size ",-1)),d("span",w5,fe(s.value.type),1)]),d("div",E5,[d("div",I5,[u[96]||(u[96]=d("label",{class:"form-label"},"X",-1)),d("input",{type:"number",value:Math.round(s.value.x),class:"input",onChange:u[11]||(u[11]=ee=>h("x",ee.target.value))},null,40,T5)]),d("div",C5,[u[97]||(u[97]=d("label",{class:"form-label"},"Y",-1)),d("input",{type:"number",value:Math.round(s.value.y),class:"input",onChange:u[12]||(u[12]=ee=>h("y",ee.target.value))},null,40,k5)]),d("div",x5,[u[98]||(u[98]=d("label",{class:"form-label"},"W",-1)),d("input",{type:"number",value:Math.round(s.value.width),class:"input",onChange:u[13]||(u[13]=ee=>h("width",ee.target.value))},null,40,S5)]),d("div",A5,[u[99]||(u[99]=d("label",{class:"form-label"},"H",-1)),d("input",{type:"number",value:Math.round(s.value.height),class:"input",onChange:u[14]||(u[14]=ee=>h("height",ee.target.value))},null,40,R5)]),d("div",P5,[u[100]||(u[100]=d("label",{class:"form-label"},"Rot °",-1)),d("input",{type:"number",value:Math.round(s.value.rotation||0),class:"input",onChange:u[15]||(u[15]=ee=>h("rotation",ee.target.value))},null,40,N5)]),d("div",O5,[u[101]||(u[101]=d("label",{class:"form-label"},"Opacity",-1)),d("input",{type:"number",min:"0",max:"1",step:".05",value:s.value.opacity??1,class:"input",onChange:u[16]||(u[16]=ee=>h("opacity",ee.target.value))},null,40,D5)])])]),["text","heading"].includes(s.value.type)?(K(),J("div",M5,[u[117]||(u[117]=d("div",{class:"panel-title"},"Text",-1)),d("div",V5,[u[102]||(u[102]=d("label",{class:"form-label"},"Content",-1)),d("textarea",{value:(F=s.value.content)==null?void 0:F.text,class:"textarea",style:{"min-height":"64px"},onInput:u[17]||(u[17]=ee=>l({text:ee.target.value}))},null,40,L5)]),d("div",F5,[d("div",$5,[u[103]||(u[103]=d("label",{class:"form-label"},"Size",-1)),d("input",{type:"number",value:(z=s.value.content)==null?void 0:z.fontSize,class:"input",onChange:u[18]||(u[18]=ee=>l({fontSize:+ee.target.value}))},null,40,U5)]),d("div",B5,[u[105]||(u[105]=d("label",{class:"form-label"},"Weight",-1)),d("select",{value:(k=s.value.content)==null?void 0:k.fontWeight,class:"select",onChange:u[19]||(u[19]=ee=>l({fontWeight:ee.target.value}))},[...u[104]||(u[104]=[d("option",{value:"normal"},"Normal",-1),d("option",{value:"bold"},"Bold",-1),d("option",{value:"600"},"Semi-bold",-1),d("option",{value:"300"},"Light",-1)])],40,z5)])]),d("div",j5,[u[106]||(u[106]=d("label",{class:"form-label"},"Font Family",-1)),d("select",{value:(E=s.value.content)==null?void 0:E.fontFamily,class:"select",onChange:u[20]||(u[20]=ee=>l({fontFamily:ee.target.value}))},[(K(),J(Ne,null,Xe(v,ee=>d("option",{key:ee,value:ee},fe(ee.split(",")[0]),9,W5)),64))],40,q5)]),d("div",H5,[u[107]||(u[107]=d("label",{class:"form-label"},"Align",-1)),d("div",G5,[(K(),J(Ne,null,Xe(["left","center","right","justify"],ee=>{var pt;return d("button",{key:ee,class:Fe(["align-btn",((pt=s.value.content)==null?void 0:pt.textAlign)===ee&&"active"]),onClick:la=>l({textAlign:ee})},fe(ee[0].toUpperCase()),11,K5)}),64))])]),d("div",Q5,[u[111]||(u[111]=d("label",{class:"form-label"},"Style",-1)),d("div",J5,[d("button",{class:Fe(["style-btn",((T=s.value.content)==null?void 0:T.fontStyle)==="italic"&&"active"]),onClick:u[21]||(u[21]=ee=>{var pt;return l({fontStyle:((pt=s.value.content)==null?void 0:pt.fontStyle)==="italic"?"normal":"italic"})})},[...u[108]||(u[108]=[d("i",null,"I",-1)])],2),d("button",{class:Fe(["style-btn",((P=s.value.content)==null?void 0:P.textDecoration)==="underline"&&"active"]),onClick:u[22]||(u[22]=ee=>{var pt;return l({textDecoration:((pt=s.value.content)==null?void 0:pt.textDecoration)==="underline"?"none":"underline"})})},[...u[109]||(u[109]=[d("u",null,"U",-1)])],2),d("button",{class:Fe(["style-btn",((O=s.value.content)==null?void 0:O.textDecoration)==="line-through"&&"active"]),onClick:u[23]||(u[23]=ee=>{var pt;return l({textDecoration:((pt=s.value.content)==null?void 0:pt.textDecoration)==="line-through"?"none":"line-through"})})},[...u[110]||(u[110]=[d("s",null,"S",-1)])],2)])]),d("div",Y5,[u[112]||(u[112]=d("label",{class:"form-label"},"Color",-1)),d("div",X5,[d("input",{type:"color",value:((b=s.value.content)==null?void 0:b.color)||"#000",onInput:u[24]||(u[24]=ee=>l({color:ee.target.value})),class:"color-input-native"},null,40,Z5),d("input",{value:((S=s.value.content)==null?void 0:S.color)||"#000",class:"input",onInput:u[25]||(u[25]=ee=>l({color:ee.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,e6)])]),d("div",t6,[u[113]||(u[113]=d("label",{class:"form-label"},"Line Height",-1)),d("input",{type:"number",min:".8",max:"3",step:".1",value:((I=s.value.content)==null?void 0:I.lineHeight)??1.5,class:"input",onChange:u[26]||(u[26]=ee=>l({lineHeight:+ee.target.value}))},null,40,n6)]),d("div",r6,[d("div",i6,[u[115]||(u[115]=d("label",{class:"form-label"},"Case",-1)),d("select",{value:((Q=s.value.content)==null?void 0:Q.textTransform)||"none",class:"select",onChange:u[27]||(u[27]=ee=>l({textTransform:ee.target.value}))},[...u[114]||(u[114]=[d("option",{value:"none"},"Normal",-1),d("option",{value:"uppercase"},"UPPERCASE",-1),d("option",{value:"lowercase"},"lowercase",-1),d("option",{value:"capitalize"},"Capitalize",-1)])],40,s6)]),d("div",o6,[u[116]||(u[116]=d("label",{class:"form-label"},"Letter Spacing",-1)),d("input",{type:"number",step:".2",value:((re=s.value.content)==null?void 0:re.letterSpacing)??0,class:"input",onChange:u[28]||(u[28]=ee=>l({letterSpacing:+ee.target.value}))},null,40,a6)])])])):xe("",!0),s.value.type==="image"?(K(),J("div",l6,[u[125]||(u[125]=d("div",{class:"panel-title"},"Image",-1)),d("div",c6,[u[118]||(u[118]=d("label",{class:"form-label"},"Source URL",-1)),d("input",{value:($=s.value.content)==null?void 0:$.src,class:"input",placeholder:"https://...",onInput:u[29]||(u[29]=ee=>l({src:ee.target.value}))},null,40,u6)]),d("div",d6,[u[119]||(u[119]=d("label",{class:"form-label"},"Alt Text",-1)),d("input",{value:(ue=s.value.content)==null?void 0:ue.alt,class:"input",onInput:u[30]||(u[30]=ee=>l({alt:ee.target.value}))},null,40,h6)]),d("div",f6,[u[121]||(u[121]=d("label",{class:"form-label"},"Object Fit",-1)),d("select",{value:((ne=s.value.content)==null?void 0:ne.objectFit)||"cover",class:"select",onChange:u[31]||(u[31]=ee=>l({objectFit:ee.target.value}))},[...u[120]||(u[120]=[d("option",{value:"cover"},"Cover",-1),d("option",{value:"contain"},"Contain",-1),d("option",{value:"fill"},"Fill",-1),d("option",{value:"none"},"None",-1)])],40,p6)]),d("div",m6,[u[122]||(u[122]=d("label",{class:"form-label"},"Border Radius",-1)),d("input",{type:"number",min:"0",value:((_e=s.value.content)==null?void 0:_e.borderRadius)||0,class:"input",onChange:u[32]||(u[32]=ee=>l({borderRadius:+ee.target.value}))},null,40,g6)]),d("div",v6,[d("div",y6,[u[123]||(u[123]=d("label",{class:"form-label"},"Border Width",-1)),d("input",{type:"number",min:"0",value:((te=s.value.content)==null?void 0:te.borderWidth)||0,class:"input",onChange:u[33]||(u[33]=ee=>l({borderWidth:+ee.target.value}))},null,40,_6)]),d("div",b6,[u[124]||(u[124]=d("label",{class:"form-label"},"Border Color",-1)),d("input",{type:"color",value:((Z=s.value.content)==null?void 0:Z.borderColor)||"#e2e8f0",class:"color-input-native",onInput:u[34]||(u[34]=ee=>l({borderColor:ee.target.value}))},null,40,w6)])])])):xe("",!0),s.value.type==="shape"?(K(),J("div",E6,[u[133]||(u[133]=d("div",{class:"panel-title"},"Shape",-1)),d("div",I6,[u[127]||(u[127]=d("label",{class:"form-label"},"Type",-1)),d("select",{value:((Ee=s.value.content)==null?void 0:Ee.shapeType)||"rectangle",class:"select",onChange:u[35]||(u[35]=ee=>l({shapeType:ee.target.value}))},[...u[126]||(u[126]=[nn('<option value="rectangle" data-v-51014b61>Rectangle</option><option value="circle" data-v-51014b61>Circle</option><option value="triangle" data-v-51014b61>Triangle</option><option value="star" data-v-51014b61>Star</option><option value="arrow" data-v-51014b61>Arrow</option><option value="diamond" data-v-51014b61>Diamond</option>',6)])],40,T6)]),d("div",C6,[u[128]||(u[128]=d("label",{class:"form-label"},"Fill Color",-1)),d("div",k6,[d("input",{type:"color",value:((ye=s.value.content)==null?void 0:ye.fillColor)||"#6c47ff",onInput:u[36]||(u[36]=ee=>l({fillColor:ee.target.value})),class:"color-input-native"},null,40,x6),d("input",{value:((X=s.value.content)==null?void 0:X.fillColor)||"#6c47ff",class:"input",onInput:u[37]||(u[37]=ee=>l({fillColor:ee.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,S6)])]),d("div",A6,[u[129]||(u[129]=d("label",{class:"form-label"},"Border Color",-1)),d("div",R6,[d("input",{type:"color",value:((we=s.value.content)==null?void 0:we.borderColor)||"transparent",onInput:u[38]||(u[38]=ee=>l({borderColor:ee.target.value})),class:"color-input-native"},null,40,P6),d("input",{value:((se=s.value.content)==null?void 0:se.borderColor)||"transparent",class:"input",onInput:u[39]||(u[39]=ee=>l({borderColor:ee.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,N6)])]),d("div",O6,[u[130]||(u[130]=d("label",{class:"form-label"},"Border Width",-1)),d("input",{type:"number",min:"0",value:((de=s.value.content)==null?void 0:de.borderWidth)||0,class:"input",onChange:u[40]||(u[40]=ee=>l({borderWidth:+ee.target.value}))},null,40,D6)]),d("div",M6,[u[131]||(u[131]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((he=s.value.content)==null?void 0:he.borderRadius)||0,class:"input",onChange:u[41]||(u[41]=ee=>l({borderRadius:+ee.target.value}))},null,40,V6)]),d("div",L6,[u[132]||(u[132]=d("label",{class:"form-label"},"Fill Opacity",-1)),d("input",{type:"number",min:"0",max:"1",step:".05",value:((be=s.value.content)==null?void 0:be.opacity)??1,class:"input",onChange:u[42]||(u[42]=ee=>l({opacity:+ee.target.value}))},null,40,F6)])])):xe("",!0),s.value.type==="button"?(K(),J("div",$6,[u[149]||(u[149]=d("div",{class:"panel-title"},"Button",-1)),d("div",U6,[u[134]||(u[134]=d("label",{class:"form-label"},"Label",-1)),d("input",{value:(ke=s.value.content)==null?void 0:ke.label,class:"input",onInput:u[43]||(u[43]=ee=>l({label:ee.target.value}))},null,40,B6)]),d("div",z6,[u[136]||(u[136]=d("label",{class:"form-label"},"Style",-1)),d("select",{value:((q=s.value.content)==null?void 0:q.variant)||"primary",class:"select",onChange:u[44]||(u[44]=ee=>l({variant:ee.target.value}))},[...u[135]||(u[135]=[nn('<option value="primary" data-v-51014b61>Primary</option><option value="secondary" data-v-51014b61>Secondary</option><option value="outline" data-v-51014b61>Outline</option><option value="ghost" data-v-51014b61>Ghost</option><option value="danger" data-v-51014b61>Danger</option>',5)])],40,j6)]),d("div",q6,[u[138]||(u[138]=d("label",{class:"form-label"},"Action",-1)),d("select",{value:((U=s.value.content)==null?void 0:U.action)||"none",class:"select",onChange:u[45]||(u[45]=ee=>l({action:ee.target.value}))},[...u[137]||(u[137]=[d("option",{value:"none"},"None",-1),d("option",{value:"navigate"},"Navigate to slide",-1),d("option",{value:"link"},"Open URL",-1),d("option",{value:"submit"},"Submit",-1)])],40,W6)]),(p=s.value.content)!=null&&p.action&&s.value.content.action!=="none"?(K(),J("div",H6,[u[139]||(u[139]=d("label",{class:"form-label"},"Target (slide # or URL)",-1)),d("input",{value:(G=s.value.content)==null?void 0:G.target,class:"input",placeholder:"Slide # or https://...",onInput:u[46]||(u[46]=ee=>l({target:ee.target.value}))},null,40,G6)])):xe("",!0),d("div",K6,[d("div",Q6,[u[140]||(u[140]=d("label",{class:"form-label"},"Background",-1)),d("input",{type:"color",value:((L=s.value.content)==null?void 0:L.bgColor)||"#6c47ff",class:"color-input-native",onInput:u[47]||(u[47]=ee=>l({bgColor:ee.target.value}))},null,40,J6)]),d("div",Y6,[u[141]||(u[141]=d("label",{class:"form-label"},"Text Color",-1)),d("input",{type:"color",value:((N=s.value.content)==null?void 0:N.textColor)||"#ffffff",class:"color-input-native",onInput:u[48]||(u[48]=ee=>l({textColor:ee.target.value}))},null,40,X6)])]),d("div",Z6,[d("div",e3,[u[142]||(u[142]=d("label",{class:"form-label"},"Border Color",-1)),d("input",{type:"color",value:((D=s.value.content)==null?void 0:D.borderColor)||"#6c47ff",class:"color-input-native",onInput:u[49]||(u[49]=ee=>l({borderColor:ee.target.value}))},null,40,t3)]),d("div",n3,[u[143]||(u[143]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((W=s.value.content)==null?void 0:W.borderRadius)??8,class:"input",onChange:u[50]||(u[50]=ee=>l({borderRadius:+ee.target.value}))},null,40,r3)])]),d("div",i3,[d("div",s3,[u[144]||(u[144]=d("label",{class:"form-label"},"Font Size",-1)),d("input",{type:"number",min:"10",value:((j=s.value.content)==null?void 0:j.fontSize)??15,class:"input",onChange:u[51]||(u[51]=ee=>l({fontSize:+ee.target.value}))},null,40,o3)]),d("div",a3,[u[146]||(u[146]=d("label",{class:"form-label"},"Weight",-1)),d("select",{value:String(((A=s.value.content)==null?void 0:A.fontWeight)??600),class:"select",onChange:u[52]||(u[52]=ee=>l({fontWeight:+ee.target.value}))},[...u[145]||(u[145]=[d("option",{value:"400"},"Normal",-1),d("option",{value:"500"},"Medium",-1),d("option",{value:"600"},"Semi-bold",-1),d("option",{value:"700"},"Bold",-1)])],40,l3)])]),d("div",c3,[d("div",u3,[u[147]||(u[147]=d("label",{class:"form-label"},"Font Family",-1)),d("select",{value:((H=s.value.content)==null?void 0:H.fontFamily)||"Inter, sans-serif",class:"select",onChange:u[53]||(u[53]=ee=>l({fontFamily:ee.target.value}))},[(K(),J(Ne,null,Xe(v,ee=>d("option",{key:`btn-${ee}`,value:ee},fe(ee.split(",")[0]),9,h3)),64))],40,d3)]),d("div",f3,[u[148]||(u[148]=d("label",{class:"form-label"},"Letter Spacing",-1)),d("input",{type:"number",step:".2",value:((Y=s.value.content)==null?void 0:Y.letterSpacing)??0,class:"input",onChange:u[54]||(u[54]=ee=>l({letterSpacing:+ee.target.value}))},null,40,p3)])])])):xe("",!0),s.value.type==="hotspot"?(K(),J("div",m3,[u[159]||(u[159]=d("div",{class:"panel-title"},"Hotspot",-1)),d("div",g3,[u[151]||(u[151]=d("label",{class:"form-label"},"Icon",-1)),d("select",{value:((ie=s.value.content)==null?void 0:ie.icon)||"?",class:"select",onChange:u[55]||(u[55]=ee=>l({icon:ee.target.value}))},[...u[150]||(u[150]=[nn('<option value="?" data-v-51014b61>? (Info)</option><option value="!" data-v-51014b61>! (Alert)</option><option value="+" data-v-51014b61>+ (Plus)</option><option value="i" data-v-51014b61>i (Info)</option><option value="✦" data-v-51014b61>✦ (Star)</option>',5)])],40,v3)]),d("div",y3,[u[152]||(u[152]=d("label",{class:"form-label"},"Background Color",-1)),d("div",_3,[d("input",{type:"color",value:((le=s.value.content)==null?void 0:le.bgColor)||"#6c47ff",onInput:u[56]||(u[56]=ee=>l({bgColor:ee.target.value})),class:"color-input-native"},null,40,b3),d("input",{value:((ge=s.value.content)==null?void 0:ge.bgColor)||"#6c47ff",class:"input",onInput:u[57]||(u[57]=ee=>l({bgColor:ee.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,w3)])]),d("div",E3,[d("div",I3,[u[153]||(u[153]=d("label",{class:"form-label"},"Icon Color",-1)),d("input",{type:"color",value:((Se=s.value.content)==null?void 0:Se.iconColor)||"#ffffff",class:"color-input-native",onInput:u[58]||(u[58]=ee=>l({iconColor:ee.target.value}))},null,40,T3)]),d("div",C3,[u[154]||(u[154]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((ae=s.value.content)==null?void 0:ae.borderRadius)??999,class:"input",onChange:u[59]||(u[59]=ee=>l({borderRadius:+ee.target.value}))},null,40,k3)])]),d("div",x3,[u[155]||(u[155]=d("label",{class:"form-label"},"Popup Title",-1)),d("input",{value:(ze=s.value.content)==null?void 0:ze.popupTitle,class:"input",onInput:u[60]||(u[60]=ee=>l({popupTitle:ee.target.value}))},null,40,S3)]),d("div",A3,[u[156]||(u[156]=d("label",{class:"form-label"},"Popup Content",-1)),d("textarea",{value:(Ze=s.value.content)==null?void 0:Ze.popupContent,class:"textarea",onInput:u[61]||(u[61]=ee=>l({popupContent:ee.target.value}))},null,40,R3)]),d("div",P3,[d("div",N3,[u[157]||(u[157]=d("label",{class:"form-label"},"Popup Background",-1)),d("input",{type:"color",value:((Je=s.value.content)==null?void 0:Je.popupBgColor)||"#ffffff",class:"color-input-native",onInput:u[62]||(u[62]=ee=>l({popupBgColor:ee.target.value}))},null,40,O3)]),d("div",D3,[u[158]||(u[158]=d("label",{class:"form-label"},"Popup Text",-1)),d("input",{type:"color",value:((_t=s.value.content)==null?void 0:_t.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:u[63]||(u[63]=ee=>l({popupTextColor:ee.target.value}))},null,40,M3)])])])):xe("",!0),s.value.type==="video"?(K(),J("div",V3,[u[168]||(u[168]=d("div",{class:"panel-title"},"Video",-1)),d("div",L3,[u[160]||(u[160]=d("label",{class:"form-label"},"Video URL / Embed",-1)),d("input",{value:(qe=s.value.content)==null?void 0:qe.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:u[64]||(u[64]=ee=>l({src:ee.target.value}))},null,40,F3)]),d("div",$3,[u[161]||(u[161]=d("label",{class:"form-label"},"Poster Image URL",-1)),d("input",{value:(sn=s.value.content)==null?void 0:sn.poster,class:"input",onInput:u[65]||(u[65]=ee=>l({poster:ee.target.value}))},null,40,U3)]),d("div",B3,[u[163]||(u[163]=d("label",{class:"form-label"},"Object Fit",-1)),d("select",{value:((ht=s.value.content)==null?void 0:ht.objectFit)||"cover",class:"select",onChange:u[66]||(u[66]=ee=>l({objectFit:ee.target.value}))},[...u[162]||(u[162]=[d("option",{value:"cover"},"Cover",-1),d("option",{value:"contain"},"Contain",-1),d("option",{value:"fill"},"Fill",-1),d("option",{value:"none"},"None",-1)])],40,z3)]),d("label",j3,[d("input",{type:"checkbox",checked:(Ye=s.value.content)==null?void 0:Ye.autoplay,onChange:u[67]||(u[67]=ee=>l({autoplay:ee.target.checked}))},null,40,q3),u[164]||(u[164]=Pe(" Autoplay ",-1))]),d("label",W3,[d("input",{type:"checkbox",checked:((Tn=s.value.content)==null?void 0:Tn.controls)??!0,onChange:u[68]||(u[68]=ee=>l({controls:ee.target.checked}))},null,40,H3),u[165]||(u[165]=Pe(" Show Controls ",-1))]),d("label",G3,[d("input",{type:"checkbox",checked:(vn=s.value.content)==null?void 0:vn.loop,onChange:u[69]||(u[69]=ee=>l({loop:ee.target.checked}))},null,40,K3),u[166]||(u[166]=Pe(" Loop ",-1))]),d("label",Q3,[d("input",{type:"checkbox",checked:(hi=s.value.content)==null?void 0:hi.muted,onChange:u[70]||(u[70]=ee=>l({muted:ee.target.checked}))},null,40,J3),u[167]||(u[167]=Pe(" Muted ",-1))])])):xe("",!0),s.value.type==="audio"?(K(),J("div",Y3,[u[177]||(u[177]=d("div",{class:"panel-title"},"Audio",-1)),d("div",X3,[u[169]||(u[169]=d("label",{class:"form-label"},"Audio URL",-1)),d("input",{value:(Vn=s.value.content)==null?void 0:Vn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:u[71]||(u[71]=ee=>l({src:ee.target.value}))},null,40,Z3)]),d("div",eN,[u[170]||(u[170]=d("label",{class:"form-label"},"Label",-1)),d("input",{value:(kr=s.value.content)==null?void 0:kr.label,class:"input",onInput:u[72]||(u[72]=ee=>l({label:ee.target.value}))},null,40,tN)]),d("label",nN,[d("input",{type:"checkbox",checked:(ft=s.value.content)==null?void 0:ft.autoplay,onChange:u[73]||(u[73]=ee=>l({autoplay:ee.target.checked}))},null,40,rN),u[171]||(u[171]=Pe(" Autoplay ",-1))]),d("label",iN,[d("input",{type:"checkbox",checked:((Ln=s.value.content)==null?void 0:Ln.controls)!==!1,onChange:u[74]||(u[74]=ee=>l({controls:ee.target.checked}))},null,40,sN),u[172]||(u[172]=Pe(" Show Controls ",-1))]),d("label",oN,[d("input",{type:"checkbox",checked:(xr=s.value.content)==null?void 0:xr.loop,onChange:u[75]||(u[75]=ee=>l({loop:ee.target.checked}))},null,40,aN),u[173]||(u[173]=Pe(" Loop ",-1))]),d("div",lN,[d("div",cN,[u[174]||(u[174]=d("label",{class:"form-label"},"Accent Color",-1)),d("input",{type:"color",value:((Sr=s.value.content)==null?void 0:Sr.accentColor)||"#6c47ff",class:"color-input-native",onInput:u[76]||(u[76]=ee=>l({accentColor:ee.target.value}))},null,40,uN)]),d("div",dN,[u[175]||(u[175]=d("label",{class:"form-label"},"Text Color",-1)),d("input",{type:"color",value:((ia=s.value.content)==null?void 0:ia.textColor)||"#555555",class:"color-input-native",onInput:u[77]||(u[77]=ee=>l({textColor:ee.target.value}))},null,40,hN)])]),d("div",fN,[u[176]||(u[176]=d("label",{class:"form-label"},"Background Color",-1)),d("input",{type:"color",value:((sa=s.value.content)==null?void 0:sa.bgColor)||"#ede7ff",class:"color-input-native",onInput:u[78]||(u[78]=ee=>l({bgColor:ee.target.value}))},null,40,pN)])])):xe("",!0),s.value.type==="quiz"?(K(),J("div",mN,[u[185]||(u[185]=d("div",{class:"panel-title"},"Quiz Question",-1)),d("div",gN,[u[178]||(u[178]=d("label",{class:"form-label"},"Question",-1)),d("textarea",{value:(er=s.value.content)==null?void 0:er.question,class:"textarea",style:{"min-height":"60px"},onInput:u[79]||(u[79]=ee=>l({question:ee.target.value}))},null,40,vN)]),d("div",yN,[u[179]||(u[179]=d("label",{class:"form-label"},"Options (one per line)",-1)),d("textarea",{value:(aa=(oa=s.value.content)==null?void 0:oa.options)==null?void 0:aa.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:u[80]||(u[80]=ee=>l({options:ee.target.value.split(`
`).filter(Boolean)}))},null,40,_N)]),d("div",bN,[u[180]||(u[180]=d("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),d("input",{type:"number",min:"0",value:((fi=s.value.content)==null?void 0:fi.correctIndex)??0,class:"input",onChange:u[81]||(u[81]=ee=>l({correctIndex:+ee.target.value}))},null,40,wN)]),d("div",EN,[u[181]||(u[181]=d("label",{class:"form-label"},"Explanation",-1)),d("textarea",{value:(Rs=s.value.content)==null?void 0:Rs.explanation,class:"textarea",onInput:u[82]||(u[82]=ee=>l({explanation:ee.target.value}))},null,40,IN)]),d("div",TN,[d("div",CN,[u[182]||(u[182]=d("label",{class:"form-label"},"Card Background",-1)),d("input",{type:"color",value:((Ps=s.value.content)==null?void 0:Ps.cardBgColor)||"#ffffff",class:"color-input-native",onInput:u[83]||(u[83]=ee=>l({cardBgColor:ee.target.value}))},null,40,kN)]),d("div",xN,[u[183]||(u[183]=d("label",{class:"form-label"},"Question Color",-1)),d("input",{type:"color",value:((qi=s.value.content)==null?void 0:qi.questionColor)||"#1a1a2e",class:"color-input-native",onInput:u[84]||(u[84]=ee=>l({questionColor:ee.target.value}))},null,40,SN)])]),d("div",AN,[u[184]||(u[184]=d("label",{class:"form-label"},"Accent Color",-1)),d("input",{type:"color",value:((Ar=s.value.content)==null?void 0:Ar.accentColor)||"#6c47ff",class:"color-input-native",onInput:u[85]||(u[85]=ee=>l({accentColor:ee.target.value}))},null,40,RN)])])):xe("",!0),d("div",PN,[u[189]||(u[189]=d("div",{class:"panel-title"},"Actions",-1)),d("div",NN,[d("button",{class:"btn btn-secondary btn-sm w-full",onClick:u[86]||(u[86]=ee=>Ie(n).duplicateElement(Ie(e).projectId,Ie(e).currentSlideId,s.value.id))},[...u[186]||(u[186]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),d("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),Pe(" Duplicate ",-1)])]),d("button",{class:"btn btn-secondary btn-sm w-full",onClick:u[87]||(u[87]=ee=>{Ie(e).showInteractionEditor=!0,Ie(e).interactionElementId=s.value.id})},[...u[187]||(u[187]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Pe(" Interactions ",-1)])]),d("button",{class:"btn btn-danger btn-sm w-full",onClick:u[88]||(u[88]=ee=>{Ie(n).deleteElement(Ie(e).projectId,Ie(e).currentSlideId,s.value.id),Ie(e).clearSelection()})},[...u[188]||(u[188]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"3 6 5 6 21 6"}),d("path",{d:"M19 6l-1 14H6L5 6"}),d("path",{d:"M9 6V4h6v2"})],-1),Pe(" Delete Element ",-1)])])])])],64)):(K(),J(Ne,{key:0},[d("div",l5,[u[91]||(u[91]=d("div",{class:"panel-title"},"Slide Properties",-1)),d("div",c5,[u[89]||(u[89]=d("label",{class:"form-label"},"Title",-1)),tt(d("input",{"onUpdate:modelValue":u[0]||(u[0]=ee=>f.value.title=ee),class:"input",onInput:u[1]||(u[1]=ee=>g("title",f.value.title))},null,544),[[mt,f.value.title]])]),d("div",u5,[u[90]||(u[90]=d("label",{class:"form-label"},"Background",-1)),d("div",d5,[(K(),J(Ne,null,Xe(["color","gradient","image"],ee=>{var pt;return d("button",{key:ee,class:Fe(["bg-type-btn",(((pt=i.value)==null?void 0:pt.backgroundType)||"color")===ee&&"active"]),onClick:la=>m({backgroundType:ee})},fe(ee),11,h5)}),64))]),(((w=i.value)==null?void 0:w.backgroundType)||"color")==="color"?(K(),J("div",f5,[d("input",{type:"color",value:((C=i.value)==null?void 0:C.background)||"#ffffff",onInput:u[2]||(u[2]=ee=>m({background:ee.target.value})),class:"color-input-native"},null,40,p5),d("input",{value:((R=i.value)==null?void 0:R.background)||"#ffffff",class:"input",onInput:u[3]||(u[3]=ee=>m({background:ee.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,m5)])):((V=i.value)==null?void 0:V.backgroundType)==="gradient"?tt((K(),J("input",{key:1,"onUpdate:modelValue":u[4]||(u[4]=ee=>f.value.backgroundGradient=ee),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:u[5]||(u[5]=ee=>m({backgroundGradient:f.value.backgroundGradient}))},null,544)),[[mt,f.value.backgroundGradient]]):tt((K(),J("input",{key:2,"onUpdate:modelValue":u[6]||(u[6]=ee=>f.value.backgroundImage=ee),class:"input",placeholder:"https://...",onInput:u[7]||(u[7]=ee=>m({backgroundImage:f.value.backgroundImage}))},null,544)),[[mt,f.value.backgroundImage]])])]),d("div",g5,[u[92]||(u[92]=d("div",{class:"panel-title"},"Slide Notes",-1)),tt(d("textarea",{"onUpdate:modelValue":u[8]||(u[8]=ee=>f.value.notes=ee),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:u[9]||(u[9]=ee=>g("notes",f.value.notes))},null,544),[[mt,f.value.notes]])]),d("div",v5,[u[94]||(u[94]=d("div",{class:"panel-title"},"Transition",-1)),d("select",{value:((M=i.value)==null?void 0:M.transition)||"none",class:"select",onChange:u[10]||(u[10]=ee=>m({transition:ee.target.value}))},[...u[93]||(u[93]=[nn('<option value="none" data-v-51014b61>None</option><option value="fade" data-v-51014b61>Fade</option><option value="slide" data-v-51014b61>Slide</option><option value="zoom" data-v-51014b61>Zoom</option><option value="flip" data-v-51014b61>Flip</option>',5)])],40,y5)])],64))])}}},DN=Vt(ON,[["__scopeId","data-v-51014b61"]]),MN={class:"editor-toolbar"},VN={class:"toolbar-group"},LN={class:"toolbar-group"},FN=["data-tooltip","onClick"],$N={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},UN={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},BN={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},zN={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},jN={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},qN={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},WN={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},HN={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},GN={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},KN={class:"tool-label"},QN={class:"toolbar-group"},JN={class:"toolbar-group"},YN={__name:"EditorToolbar",setup(t){const e=In();gn();const n=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"}];function r(i){e.setActiveTool(i)}return(i,s)=>(K(),J("div",MN,[d("div",VN,[d("button",{class:Fe(["tool-btn",Ie(e).activeTool==="select"&&"active"]),onClick:s[0]||(s[0]=o=>r("select")),"data-tooltip":"Select (V)"},[...s[6]||(s[6]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),d("span",{class:"tool-label"},"Select",-1)])],2)]),s[20]||(s[20]=d("div",{class:"toolbar-divider"},null,-1)),d("div",LN,[(K(),J(Ne,null,Xe(n,o=>d("button",{key:o.id,class:Fe(["tool-btn",Ie(e).activeTool===o.id&&"active"]),"data-tooltip":o.tooltip,onClick:a=>r(o.id)},[o.icon==="text"?(K(),J("svg",$N,[...s[7]||(s[7]=[d("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),d("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),d("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):o.icon==="heading"?(K(),J("svg",UN,[...s[8]||(s[8]=[d("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):o.icon==="image"?(K(),J("svg",BN,[...s[9]||(s[9]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),d("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):o.icon==="shape"?(K(),J("svg",zN,[...s[10]||(s[10]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):o.icon==="button"?(K(),J("svg",jN,[...s[11]||(s[11]=[d("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),d("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):o.icon==="hotspot"?(K(),J("svg",qN,[...s[12]||(s[12]=[d("circle",{cx:"12",cy:"12",r:"10"},null,-1),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):o.icon==="video"?(K(),J("svg",WN,[...s[13]||(s[13]=[d("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),d("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):o.icon==="audio"?(K(),J("svg",HN,[...s[14]||(s[14]=[d("path",{d:"M9 18V5l12-2v13"},null,-1),d("circle",{cx:"6",cy:"18",r:"3"},null,-1),d("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):o.icon==="quiz"?(K(),J("svg",GN,[...s[15]||(s[15]=[d("path",{d:"M9 11l3 3L22 4"},null,-1),d("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):xe("",!0),d("span",KN,fe(o.label),1)],10,FN)),64))]),s[21]||(s[21]=d("div",{class:"toolbar-spacer"},null,-1)),d("div",QN,[d("button",{class:"tool-btn",onClick:s[1]||(s[1]=o=>Ie(e).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...s[16]||(s[16]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),d("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),d("button",{class:"zoom-display",onClick:s[2]||(s[2]=o=>Ie(e).zoomReset())},fe(Math.round(Ie(e).zoomLevel*100))+"% ",1),d("button",{class:"tool-btn",onClick:s[3]||(s[3]=o=>Ie(e).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...s[17]||(s[17]=[nn('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1eac61d4><circle cx="11" cy="11" r="8" data-v-1eac61d4></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-1eac61d4></line><line x1="11" y1="8" x2="11" y2="14" data-v-1eac61d4></line><line x1="8" y1="11" x2="14" y2="11" data-v-1eac61d4></line></svg>',1)])])]),s[22]||(s[22]=d("div",{class:"toolbar-divider"},null,-1)),d("div",JN,[d("button",{class:Fe(["tool-btn",Ie(e).showGrid&&"active"]),onClick:s[4]||(s[4]=o=>Ie(e).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...s[18]||(s[18]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[d("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),d("button",{class:Fe(["tool-btn",Ie(e).snapToGrid&&"active"]),onClick:s[5]||(s[5]=o=>Ie(e).toggleSnap()),"data-tooltip":"Snap to grid"},[...s[19]||(s[19]=[nn('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1eac61d4><circle cx="5" cy="5" r="1" data-v-1eac61d4></circle><circle cx="12" cy="5" r="1" data-v-1eac61d4></circle><circle cx="19" cy="5" r="1" data-v-1eac61d4></circle><circle cx="5" cy="12" r="1" data-v-1eac61d4></circle><circle cx="12" cy="12" r="1" data-v-1eac61d4></circle><circle cx="19" cy="12" r="1" data-v-1eac61d4></circle><circle cx="5" cy="19" r="1" data-v-1eac61d4></circle><circle cx="12" cy="19" r="1" data-v-1eac61d4></circle><circle cx="19" cy="19" r="1" data-v-1eac61d4></circle></svg>',1)])],2)])]))}},XN=Vt(YN,[["__scopeId","data-v-1eac61d4"]]),ZN=["onMousedown"],eO={key:1,class:"selection-border locked-border"},tO={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=In(),r=gn(),i=fn("canvasScale",pe(1)),s=Ce(()=>n.projectId),o=Ce(()=>n.currentSlideId),a=Ce(()=>n.selectedElementIds.includes(e.element.id)),l=Ce(()=>e.element.locked),h=Ce(()=>e.element.visible!==!1);let f=!1,m=0,g=0,v=new Map;function _(re){var ne;if(l.value||re.target.classList.contains("resize-handle"))return;const $=re.ctrlKey||re.metaKey||re.shiftKey;a.value?$&&n.selectElement(e.element.id,!0):n.selectElement(e.element.id,$),n.setActiveTool("select"),f=!1,m=re.clientX,g=re.clientY,v.clear();const ue=(ne=r.getProject(s.value))==null?void 0:ne.slides.find(_e=>_e.id===o.value);ue&&n.selectedElementIds.forEach(_e=>{const te=ue.elements.find(Z=>Z.id===_e);te&&!te.locked&&v.set(_e,{x:te.x,y:te.y})}),window.addEventListener("mousemove",u),window.addEventListener("mouseup",w),re.stopPropagation()}function u(re){const $=(re.clientX-m)/i.value,ue=(re.clientY-g)/i.value;!f&&(Math.abs($)>3||Math.abs(ue)>3)&&(f=!0),f&&v.forEach((ne,_e)=>{let te=ne.x+$,Z=ne.y+ue;if(n.snapToGrid&&n.gridSize){const Ee=n.gridSize;te=Math.round(te/Ee)*Ee,Z=Math.round(Z/Ee)*Ee}r.updateElement(s.value,o.value,_e,{x:te,y:Z})})}function w(re){f||!(re.ctrlKey||re.metaKey||re.shiftKey)&&n.selectedElementIds.length>1&&n.selectElement(e.element.id,!1),f=!1,window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",w)}const C=["n","ne","e","se","s","sw","w","nw"];let R=!1,V="",M=0,F=0,z=0,k=0,E=0,T=0;function P(re,$){l.value||(re.stopPropagation(),re.preventDefault(),R=!0,V=$,M=re.clientX,F=re.clientY,z=e.element.width,k=e.element.height,E=e.element.x,T=e.element.y,window.addEventListener("mousemove",O),window.addEventListener("mouseup",b))}function O(re){if(!R)return;const $=i.value,ue=(re.clientX-M)/$,ne=(re.clientY-F)/$,_e=20;let te=E,Z=T,Ee=z,ye=k;if(V.includes("e")&&(Ee=Math.max(_e,z+ue)),V.includes("s")&&(ye=Math.max(_e,k+ne)),V.includes("w")){const X=Math.max(_e,z-ue);te=E+(z-X),Ee=X}if(V.includes("n")){const X=Math.max(_e,k-ne);Z=T+(k-X),ye=X}if(n.snapToGrid&&n.gridSize){const X=n.gridSize;Ee=Math.round(Ee/X)*X,ye=Math.round(ye/X)*X,te=Math.round(te/X)*X,Z=Math.round(Z/X)*X}r.updateElement(s.value,o.value,e.element.id,{x:te,y:Z,width:Ee,height:ye})}function b(){R=!1,window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",b)}function S(){["text","heading"].includes(e.element.type)&&n.setRightPanel("properties")}const I=Ce(()=>({position:"absolute",left:`${e.element.x}px`,top:`${e.element.y}px`,width:`${e.element.width}px`,height:`${e.element.height}px`,transform:`rotate(${e.element.rotation||0}deg)`,opacity:e.element.opacity??1,zIndex:e.element.zIndex||1,cursor:l.value?"not-allowed":"move",visibility:h.value?"visible":"hidden",userSelect:"none"}));function Q(re){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[re]||"auto"}return(re,$)=>(K(),J("div",{class:Fe(["element-wrapper",a.value&&"selected",l.value&&"locked"]),style:$e(I.value),onMousedown:_,onDblclick:S},[_u(re.$slots,"default",{},void 0),a.value&&!l.value?(K(),J(Ne,{key:0},[$[0]||($[0]=d("div",{class:"selection-border"},null,-1)),(K(),J(Ne,null,Xe(C,ue=>d("div",{key:ue,class:Fe(["resize-handle",`handle-${ue}`]),style:$e({cursor:Q(ue)}),onMousedown:$t(ne=>P(ne,ue),["stop"])},null,46,ZN)),64))],64)):xe("",!0),a.value&&l.value?(K(),J("div",eO)):xe("",!0)],38))}},nO=Vt(tO,[["__scopeId","data-v-2b4aa1b3"]]),rO=["contenteditable"],du={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Ce(()=>e.element.content||{}),r=In(),i=gn(),s=pe(!1),o=pe(null),a=pe("");Yt(()=>n.value.text,g=>{s.value||(a.value=g||(e.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function l(){r.selectedElementId===e.element.id&&(s.value=!0,jo(()=>{if(o.value){o.value.focus();const g=document.createRange();g.selectNodeContents(o.value),g.collapse(!1);const v=window.getSelection();v.removeAllRanges(),v.addRange(g)}}))}function h(g){}function f(g){s.value&&g.stopPropagation()}function m(){if(s.value=!1,o.value){const g=o.value.innerText;a.value=g,i.updateElement(r.projectId,r.currentSlideId,e.element.id,{content:{...e.element.content,text:g}})}}return(g,v)=>(K(),J("div",{class:"text-element",ref_key:"textRef",ref:o,contenteditable:s.value,onDblclick:l,onBlur:m,onInput:h,onMousedown:f,style:$e({fontSize:(n.value.fontSize||16)+"px",fontFamily:n.value.fontFamily||"Inter, sans-serif",fontWeight:n.value.fontWeight||"normal",fontStyle:n.value.fontStyle||"normal",textDecoration:n.value.textDecoration||"none",textAlign:n.value.textAlign||"left",color:n.value.color||"#1a1a2e",lineHeight:n.value.lineHeight||1.5,textTransform:n.value.textTransform||"none",letterSpacing:(n.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:s.value?"2px solid var(--primary)":"none",cursor:s.value?"text":"inherit",userSelect:s.value?"text":"none"})},fe(a.value),45,rO))}},iO=["src","alt"],sO={key:1,class:"image-placeholder"},oO={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},aO={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o;return K(),J("div",{class:"image-element",style:$e({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((r=t.element.content)==null?void 0:r.borderRadius)||0)+"px",border:`${((i=t.element.content)==null?void 0:i.borderWidth)||0}px solid ${((s=t.element.content)==null?void 0:s.borderColor)||"transparent"}`})},[(o=t.element.content)!=null&&o.src?(K(),J("img",{key:0,src:t.element.content.src,alt:t.element.content.alt||"",style:$e({width:"100%",height:"100%",objectFit:t.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,iO)):(K(),J("div",sO,[(K(),J("svg",oO,[...n[0]||(n[0]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),d("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),n[1]||(n[1]=d("span",null,"Image",-1))]))],4)}}},lO=Vt(aO,[["__scopeId","data-v-401e9ff3"]]),cO={class:"shape-element",style:{width:"100%",height:"100%"}},uO=["width","height"],dO=["points","fill","stroke","stroke-width"],hO={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Ce(()=>e.element.content||{}),r=Ce(()=>{const o=n.value.shapeType||"rectangle",a={width:"100%",height:"100%",background:n.value.fillColor||"#6c47ff",border:`${n.value.borderWidth||0}px solid ${n.value.borderColor||"transparent"}`,opacity:n.value.opacity??1};return o==="circle"?{...a,borderRadius:"50%"}:o==="rectangle"?{...a,borderRadius:(n.value.borderRadius||0)+"px"}:a}),i=Ce(()=>["triangle","star","arrow","diamond"].includes(n.value.shapeType)),s=Ce(()=>{const o=e.element.width||150,a=e.element.height||100,l=n.value.shapeType;if(l==="triangle")return`${o/2},0 ${o},${a} 0,${a}`;if(l==="diamond")return`${o/2},0 ${o},${a/2} ${o/2},${a} 0,${a/2}`;if(l==="arrow")return`0,${a*.3} ${o*.6},${a*.3} ${o*.6},0 ${o},${a/2} ${o*.6},${a} ${o*.6},${a*.7} 0,${a*.7}`;if(l==="star"){const h=o/2,f=a/2,m=Math.min(o,a)/2,g=m*.4;let v="";for(let _=0;_<10;_++){const u=(_*36-90)*Math.PI/180,w=_%2===0?m:g;v+=`${h+w*Math.cos(u)},${f+w*Math.sin(u)} `}return v.trim()}return""});return(o,a)=>(K(),J("div",cO,[i.value?(K(),J("svg",{key:1,width:t.element.width,height:t.element.height,style:{display:"block",overflow:"visible"}},[d("polygon",{points:s.value,fill:n.value.fillColor||"#6c47ff",stroke:n.value.borderColor||"none","stroke-width":n.value.borderWidth||0},null,8,dO)],8,uO)):(K(),J("div",{key:0,style:$e(r.value)},null,4))]))}},fO={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Ce(()=>e.element.content||{}),r=Ce(()=>{const i={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},s=i[n.value.variant||"primary"]||i.primary;return{...s,background:n.value.bgColor||s.background,color:n.value.textColor||s.color,border:n.value.borderColor?`1px solid ${n.value.borderColor}`:s.border,borderRadius:(n.value.borderRadius??8)+"px"}});return(i,s)=>(K(),J("div",{class:"button-element",style:$e({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(n.value.fontSize??15)+"px",fontWeight:n.value.fontWeight??600,letterSpacing:(n.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:n.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...r.value})},fe(n.value.label||"Button"),5))}},pO={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},mO={class:"popup-header"},gO={class:"popup-body"},vO={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Ce(()=>e.element.content||{}),r=pe(!1);function i(s){s.stopPropagation(),r.value=!r.value}return(s,o)=>(K(),J("div",pO,[d("div",{class:"hotspot-btn",style:$e({width:"100%",height:"100%",background:n.value.bgColor||"#6c47ff",borderRadius:(n.value.borderRadius??999)>=999?"50%":(n.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:n.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:$t(i,["stop"])},fe(n.value.icon||"?"),5),dt(ei,{name:"fade"},{default:kt(()=>[r.value?(K(),J("div",{key:0,class:"hotspot-popup",style:$e({background:n.value.popupBgColor||"#ffffff",color:n.value.popupTextColor||"#1a1a2e"})},[d("div",mO,[d("strong",null,fe(n.value.popupTitle||"Info"),1),d("button",{class:"popup-close",onClick:o[0]||(o[0]=$t(a=>r.value=!1,["stop"]))},"×")]),d("div",gO,fe(n.value.popupContent||"Add your content in the properties panel."),1)],4)):xe("",!0)]),_:1})]))}},yO=Vt(vO,[["__scopeId","data-v-ef5f15f6"]]),_O={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},bO=["src"],wO=["src","poster","autoplay","controls","loop","muted"],EO={key:2,class:"video-placeholder"},IO={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},TO={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Ce(()=>e.element.content||{}),r=Ce(()=>{const s=n.value.src||"";return s.includes("youtube")||s.includes("youtu.be")}),i=Ce(()=>{var o,a;const s=n.value.src||"";if(r.value){const l=(o=s.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:o[1];return l?`https://www.youtube.com/embed/${l}`:""}if(s.includes("vimeo.com")){const l=(a=s.match(/vimeo\.com\/(\d+)/))==null?void 0:a[1];return l?`https://player.vimeo.com/video/${l}`:""}return""});return(s,o)=>(K(),J("div",_O,[i.value?(K(),J("iframe",{key:0,src:i.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,bO)):n.value.src&&!i.value?(K(),J("video",{key:1,src:n.value.src,poster:n.value.poster,autoplay:n.value.autoplay,controls:n.value.controls!==!1,loop:n.value.loop,muted:n.value.muted,style:$e({width:"100%",height:"100%",objectFit:n.value.objectFit||"cover"})},null,12,wO)):(K(),J("div",EO,[(K(),J("svg",IO,[...o[0]||(o[0]=[d("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),d("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),o[1]||(o[1]=d("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},CO=Vt(TO,[["__scopeId","data-v-dfea1a16"]]),kO=["stroke"],xO=["src","controls","autoplay","loop"],SO={key:1,style:{"font-size":"11px",color:"#aaa"}},AO={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o,a,l,h,f,m;return K(),J("div",{class:"audio-element",style:$e({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((r=t.element.content)==null?void 0:r.bgColor)||"#ede7ff",border:`1px solid ${((i=t.element.content)==null?void 0:i.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(K(),J("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((s=t.element.content)==null?void 0:s.accentColor)||"#6c47ff","stroke-width":"2"},[...n[1]||(n[1]=[d("path",{d:"M9 18V5l12-2v13"},null,-1),d("circle",{cx:"6",cy:"18",r:"3"},null,-1),d("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,kO)),d("span",{style:$e({fontSize:"13px",color:((o=t.element.content)==null?void 0:o.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},fe(((a=t.element.content)==null?void 0:a.label)||"Audio Player"),5),(l=t.element.content)!=null&&l.src?(K(),J("audio",{key:0,src:t.element.content.src,controls:((h=t.element.content)==null?void 0:h.controls)!==!1,autoplay:(f=t.element.content)==null?void 0:f.autoplay,loop:(m=t.element.content)==null?void 0:m.loop,style:{height:"28px","max-width":"180px"},onMousedown:n[0]||(n[0]=$t(()=>{},["stop"]))},null,40,xO)):(K(),J("span",SO,"No source"))],4)}}},RO={class:"quiz-options"},PO=["onClick"],NO={class:"opt-letter"},OO={class:"opt-text"},DO={key:0},MO={class:"quiz-actions"},VO=["disabled"],LO={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Ce(()=>e.element.content||{}),r=pe(null),i=pe(!1);function s(h){i.value||(r.value=h)}function o(){r.value!==null&&(i.value=!0)}function a(){r.value=null,i.value=!1}const l=Ce(()=>i.value&&r.value===(n.value.correctIndex??0));return(h,f)=>(K(),J("div",{class:"quiz-element",style:$e({width:"100%",height:"100%",background:n.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":n.value.accentColor||"#6c47ff"})},[d("p",{style:$e({fontSize:"15px",fontWeight:600,color:n.value.questionColor||"#1a1a2e",lineHeight:1.4})},fe(n.value.question||"Question text…"),5),d("div",RO,[(K(!0),J(Ne,null,Xe(n.value.options||[],(m,g)=>(K(),J("div",{key:g,class:Fe(["quiz-opt",r.value===g&&"selected",i.value&&g===n.value.correctIndex&&"correct",i.value&&r.value===g&&g!==n.value.correctIndex&&"wrong"]),onClick:v=>s(g)},[d("span",NO,fe(String.fromCharCode(65+g)),1),d("span",OO,fe(m),1)],10,PO))),128))]),i.value?(K(),J("div",{key:0,class:Fe(["quiz-feedback",l.value?"correct":"wrong"])},[Pe(fe(l.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!l.value&&n.value.explanation?(K(),J("span",DO,fe(n.value.explanation),1)):xe("",!0)],2)):xe("",!0),d("div",MO,[i.value?(K(),J("button",{key:1,class:"quiz-btn secondary",onClick:a},"Try Again")):(K(),J("button",{key:0,class:"quiz-btn primary",disabled:r.value===null,onClick:o},"Submit",8,VO))])],4))}},FO=Vt(LO,[["__scopeId","data-v-ca2bd187"]]),$O={key:0,class:"canvas-empty"},UO={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},BO={key:0,class:"drop-hint"},zO={class:"canvas-info-bar"},jO=["disabled"],qO={class:"slide-index"},WO=["disabled"],HO={key:0},Aa=960,Ra=540,GO={__name:"EditorCanvas",setup(t){const e=In(),n=gn(),r=pe(null),i=pe(null),s=pe(1);so("canvasScale",s);const o=Ce(()=>n.getProject(e.projectId)),a=Ce(()=>{var X,we;return(we=(X=o.value)==null?void 0:X.slides)==null?void 0:we.find(se=>se.id===e.currentSlideId)}),l=Ce(()=>{var X;return[...((X=o.value)==null?void 0:X.slides)||[]].sort((we,se)=>we.order-se.order)}),h=Ce(()=>l.value.findIndex(X=>X.id===e.currentSlideId)),f=Ce(()=>{var X;return[...((X=a.value)==null?void 0:X.elements)||[]].sort((we,se)=>(we.zIndex||0)-(se.zIndex||0))}),m=Ce(()=>{const X=a.value;return X?X.backgroundType==="gradient"&&X.backgroundGradient?{background:X.backgroundGradient}:X.backgroundType==="image"&&X.backgroundImage?{backgroundImage:`url(${X.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:X.background||"#fff"}:{background:"#fff"}}),g=Ce(()=>`scale(${e.zoomLevel})`);function v(){if(!r.value)return;const{clientWidth:X,clientHeight:we}=r.value,se=(X-80)/Aa,de=(we-80)/Ra;s.value=Math.min(se,de)}let _=null;qo(()=>{v(),_=new ResizeObserver(v),r.value&&_.observe(r.value)}),Wo(()=>_==null?void 0:_.disconnect());const u=pe({x:0,y:0}),w=pe({x:0,y:0}),C=pe(!1),R=pe(!1),V=Ce(()=>{if(!C.value)return null;const X=Math.min(u.value.x,w.value.x),we=Math.min(u.value.y,w.value.y),se=Math.abs(w.value.x-u.value.x),de=Math.abs(w.value.y-u.value.y);return{x:X,y:we,width:se,height:de}});function M(X){!C.value&&(X.target===i.value||X.target===X.currentTarget)&&e.clearSelection()}function F(X){return X?Array.from(X.files||[]).some(we=>we.type.startsWith("image/")):!1}function z(X,we,se){if(!X||!X.type.startsWith("image/"))return;const de=new FileReader;de.onload=()=>{const he=String(de.result||"");if(!he)return;const be=new Image;be.onload=()=>{const ke=i.value.getBoundingClientRect(),q=(we-ke.left)/e.zoomLevel,U=(se-ke.top)/e.zoomLevel,L=Math.min(420/be.width,280/be.height,1),N=Math.max(120,Math.round(be.width*L)),D=Math.max(80,Math.round(be.height*L)),W=Math.max(0,Math.min(Aa-N,Math.round(q-N/2))),j=Math.max(0,Math.min(Ra-D,Math.round(U-D/2))),A=n.addElement(e.projectId,e.currentSlideId,"image",{x:W,y:j,width:N,height:D,content:{src:he,alt:X.name,objectFit:"cover"}});A&&(e.selectElement(A.id),e.setActiveTool("select"),e.setRightPanel("properties"))},be.src=he},de.readAsDataURL(X)}function k(X){F(X.dataTransfer)&&(X.preventDefault(),X.dataTransfer.dropEffect="copy",R.value=!0)}function E(X){var we;(we=X.currentTarget)!=null&&we.contains(X.relatedTarget)||(R.value=!1)}function T(X){if(!F(X.dataTransfer))return;X.preventDefault(),R.value=!1;const we=Array.from(X.dataTransfer.files||[]).find(se=>se.type.startsWith("image/"));we&&z(we,X.clientX,X.clientY)}function P(X){const we=e.activeTool;if(X.target!==i.value&&X.target!==X.currentTarget)return;X.preventDefault(),X.stopPropagation();const se=i.value.getBoundingClientRect(),de=(X.clientX-se.left)/e.zoomLevel,he=(X.clientY-se.top)/e.zoomLevel;if(we==="select"){C.value=!0,u.value={x:de,y:he},w.value={x:de,y:he};const q=p=>{w.value={x:(p.clientX-se.left)/e.zoomLevel,y:(p.clientY-se.top)/e.zoomLevel}},U=()=>{window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",U);const p=V.value;if(p&&(p.width>2||p.height>2)){const G=f.value.filter(L=>{const N=L.x,D=L.y,W=L.width||100,j=L.height||100;return N<p.x+p.width&&N+W>p.x&&D<p.y+p.height&&D+j>p.y}).map(L=>L.id);G.length>0?e.setSelection(G):e.clearSelection()}else e.clearSelection();setTimeout(()=>{C.value=!1},0)};window.addEventListener("mousemove",q),window.addEventListener("mouseup",U);return}const be=q=>e.snapToGrid?Math.round(q/e.gridSize)*e.gridSize:q,ke=n.addElement(e.projectId,e.currentSlideId,we,{x:be(de-75),y:be(he-40)});ke&&(e.selectElement(ke.id),e.setActiveTool("select"),e.setRightPanel("properties"))}const O=Ce(()=>{if(!e.showGrid)return{};const X=e.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${X}px ${X}px`}}),b={text:du,heading:du,image:lO,shape:hO,button:fO,hotspot:yO,video:CO,audio:AO,quiz:FO,divider:"div"};function S(X){return b[X]||du}function I(X){var we,se;return X.type!=="divider"?{}:{borderTop:`${((we=X.content)==null?void 0:we.thickness)||2}px solid ${((se=X.content)==null?void 0:se.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const Q=pe({show:!1,x:0,y:0,elId:null});function re(X,we){X.preventDefault(),Q.value={show:!0,x:X.clientX,y:X.clientY,elId:we},e.selectElement(we),setTimeout(()=>window.addEventListener("click",$,{once:!0}),0)}function $(){Q.value.show=!1}function ue(){if(Q.value.elId){const X=n.duplicateElement(e.projectId,e.currentSlideId,Q.value.elId);X&&e.selectElement(X.id)}$()}function ne(){Q.value.elId&&(n.deleteElement(e.projectId,e.currentSlideId,Q.value.elId),e.clearSelection()),$()}function _e(){Q.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,Q.value.elId,"up"),$()}function te(){Q.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,Q.value.elId,"down"),$()}function Z(){const X=h.value,we=n.addSlide(e.projectId,X);we&&e.setCurrentSlide(we.id)}function Ee(){const X=h.value;X>0&&e.setCurrentSlide(l.value[X-1].id)}function ye(){const X=h.value;X<l.value.length-1&&e.setCurrentSlide(l.value[X+1].id)}return(X,we)=>{var se;return K(),J("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:r},[a.value?(K(),J(Ne,{key:1},[d("div",{class:"canvas-zoom-wrapper",style:$e({transform:g.value,transformOrigin:"center center",transition:"transform .15s ease"})},[d("div",{ref_key:"canvasRef",ref:i,class:"slide-canvas",style:$e({width:Aa+"px",height:Ra+"px",...m.value,...O.value}),onClick:M,onMousedown:P,onDragover:k,onDragleave:E,onDrop:T,onContextmenu:we[0]||(we[0]=$t(()=>{},["prevent"]))},[(K(!0),J(Ne,null,Xe(f.value,de=>(K(),Tt(nO,{key:de.id,element:de,onContextmenu:$t(he=>re(he,de.id),["stop"])},{default:kt(()=>[(K(),Tt(iv(S(de.type)),{element:de,style:$e(de.type==="divider"?I(de):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),Ie(e).activeTool!=="select"||R.value?(K(),J("div",BO,fe(R.value?"Drop image to insert it on this slide":`Click anywhere to add ${Ie(e).activeTool}`),1)):xe("",!0),C.value&&V.value?(K(),J("div",{key:1,class:"selection-marquee",style:$e({left:V.value.x+"px",top:V.value.y+"px",width:V.value.width+"px",height:V.value.height+"px"})},null,4)):xe("",!0)],36)],4),d("div",zO,[d("button",{class:"bar-btn",onClick:Z},"Add page"),d("button",{class:"bar-btn icon",onClick:Ee,disabled:h.value<=0},"◀",8,jO),d("span",qO,fe(h.value+1)+" / "+fe(l.value.length),1),d("button",{class:"bar-btn icon",onClick:ye,disabled:h.value>=l.value.length-1},"▶",8,WO),d("span",null,fe(Aa)+" × "+fe(Ra)+"px"),we[4]||(we[4]=d("span",null,"·",-1)),d("span",null,fe(((se=a.value.elements)==null?void 0:se.length)||0)+" elements",1),Ie(e).hasSelection?(K(),J("span",HO,"· "+fe(Ie(e).selectedElementIds.length)+" selected",1)):xe("",!0),d("button",{class:"bar-btn ai",onClick:we[1]||(we[1]=de=>Ie(e).setRightPanel("ai"))},"AI")])],64)):(K(),J("div",$O,[(K(),J("svg",UO,[...we[2]||(we[2]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),we[3]||(we[3]=d("p",null,"Select a slide to start editing",-1))])),(K(),Tt(yd,{to:"body"},[Q.value.show?(K(),J("div",{key:0,class:"ctx-menu",style:$e({left:Q.value.x+"px",top:Q.value.y+"px"})},[d("button",{class:"ctx-item",onClick:ue},"Duplicate"),d("button",{class:"ctx-item",onClick:_e},"Bring Forward"),d("button",{class:"ctx-item",onClick:te},"Send Backward"),we[5]||(we[5]=d("div",{class:"ctx-divider"},null,-1)),d("button",{class:"ctx-item danger",onClick:ne},"Delete")],4)):xe("",!0)]))],512)}}},KO=Vt(GO,[["__scopeId","data-v-47ef6b03"]]),QO=zl("ai",()=>{const t=pe(localStorage.getItem("ai_api_key")||""),e=pe(localStorage.getItem("ai_provider")||"openai"),n=pe(!1),r=pe(""),i=pe([]);function s(w){t.value=w,localStorage.setItem("ai_api_key",w)}function o(w){e.value=w,localStorage.setItem("ai_provider",w)}async function a(w,C={}){var R;if(!t.value)return u(w,C);n.value=!0,r.value="";try{const V=[{role:"system",content:`You are an expert eLearning content creator. Generate clear, engaging, and educational content. Format output as clean text unless asked for JSON. Context: ${JSON.stringify(C)}`},{role:"user",content:w}],M=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.value}`},body:JSON.stringify({model:"gpt-4o-mini",messages:V,temperature:.7,max_tokens:1500})});if(!M.ok){const k=await M.json();throw new Error(((R=k.error)==null?void 0:R.message)||`HTTP ${M.status}`)}const z=(await M.json()).choices[0].message.content;return i.value.push({prompt:w,result:z,timestamp:Date.now()}),z}catch(V){return r.value=V.message,null}finally{n.value=!1}}async function l(w,C="general",R="",V=""){let M;if(V.trim())M=V.trim();else{const z=R.trim()?`
Additional context: ${R.trim()}`:"",k={intro:"Focus on welcoming learners, stating the purpose, and building motivation.",overview:"Provide a high-level map of all topics to be covered.",concept:"Explain the concept clearly with a definition, how it works, and why it matters.",example:"Present a real-world case study or worked example with outcome.",summary:"Recap the key points covered and reinforce the main message.",callout:"Highlight a single critical insight or action item.",general:"Create a well-structured educational slide with title, key points, and a takeaway."}[C]||"";M=`You are an expert eLearning content creator and visual slide designer.
Create content for a "${C}" eLearning slide about: "${w}".${z}
Instruction: ${k}

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
- Ensure all content is specific to "${w}" — never use generic placeholders.`}const F=await a(M,{type:"slideContent",slideType:C,topic:w});if(!F)return null;try{return JSON.parse(F.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return{title:w,bullets:[F]}}}async function h(w,C=5,{audience:R="",objective:V="",tone:M="professional",customPrompt:F=""}={}){const z=Math.max(1,Math.min(20,Number(C)||1));let k;if(F.trim())k=F.trim();else{const T=R.trim()?`
Audience: ${R.trim()}`:"",P=V.trim()?`
Learning objective: ${V.trim()}`:"";k=`You are an expert eLearning instructional designer.
Create a complete ${z}-slide deck about "${w}" in a ${M} tone.${T}${P}

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
- Return exactly ${z} slides
- Sequence the deck logically: intro → concept build-up → applied example(s) → summary
- Keep each slide distinct and avoid repeated bullet wording
- Keep bullets concise (3-5 per slide), action-oriented, and specific to "${w}"`}const E=await a(k,{type:"slideDeck",topic:w,slideCount:z,tone:M});if(!E)return null;try{const T=E.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim(),P=JSON.parse(T),O=Array.isArray(P)?P:P==null?void 0:P.slides;return Array.isArray(O)?O.slice(0,z).map((b,S)=>{const I=Array.isArray(b==null?void 0:b.bullets)?b.bullets:typeof(b==null?void 0:b.bullets)=="string"?b.bullets.split(`
`):[];return{title:String((b==null?void 0:b.title)||`${w||"Slide"} ${S+1}`).trim(),subtitle:String((b==null?void 0:b.subtitle)||"").trim(),bullets:I.map(Q=>String(Q||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean),callout:String((b==null?void 0:b.callout)||"").trim(),slideType:String((b==null?void 0:b.slideType)||"general").trim()}}):null}catch{return null}}async function f(w,C=4,{difficulty:R="intermediate",questionType:V="multiple-choice",objective:M="",customPrompt:F=""}={}){if(F.trim()){const O=await a(F.trim(),{type:"quiz",topic:w,count:C,difficulty:R,questionType:V});if(!O)return null;try{return JSON.parse(O.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}const z=V==="true-false"?'Each question must be True/False with exactly 2 options: ["True", "False"]':V==="mixed"?'Mix multiple-choice (4 options) and True/False (2 options: ["True", "False"]) questions roughly 50/50':"Each question must be multiple-choice with exactly 4 distinct options",k={beginner:"Use simple vocabulary. Focus on foundational recall and recognition.",intermediate:"Require some understanding and application of concepts.",advanced:"Challenge deeper understanding, analysis, and critical thinking."}[R]||"",E=M?`
Learning objective: ${M}`:"",T=`You are an expert eLearning instructional designer.
Create exactly ${C} quiz questions about: "${w}".${E}

Difficulty: ${R.charAt(0).toUpperCase()+R.slice(1)} — ${k}
Question type: ${z}

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
- correctIndex is 0-based index into the options array`,P=await a(T,{type:"quiz",topic:w,count:C,difficulty:R,questionType:V});if(!P)return null;try{return JSON.parse(P.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}async function m(w,C="professional"){const R=`Write a ${C} voiceover script for a slide with this content: "${w}".
Keep it concise (30-60 seconds when read aloud). Write naturally as if speaking.`;return a(R,{type:"voiceover",style:C})}async function g(w,C){const R=`Translate the following eLearning content to ${C}. Preserve formatting and educational tone:

${w}`;return a(R,{type:"translation",targetLanguage:C})}async function v(w,C="Make it clearer and more engaging"){const R=`${C}:

${w}`;return a(R,{type:"improve"})}async function _(w){const C=`Generate a detailed image prompt for a corporate or educational slide about: "${w}". 
Make it suitable for AI image generation (like Midjourney or DALL-E). Ensure the prompt specifically asks for a "highly detailed photorealistic image, realistic lighting, photographic style, no text". Be specific about composition and relevance.`;return a(C,{type:"imagePrompt",topic:w})}function u(w,C){const R=C.topic||"this topic",V=Math.max(1,Math.min(20,Number(C.slideCount)||5)),M={slideContent:JSON.stringify({title:C.topic||"Sample Slide",subtitle:`An introduction to ${R}`,bullets:[`${C.topic?C.topic+" covers":"This topic covers"} foundational principles that drive real-world applications`,"Understanding the core components helps in diagnosing and solving complex problems effectively","Best practices ensure safety, efficiency, and long-term performance in this domain"],callout:`Master the fundamentals of ${C.topic||"this subject"} to build a strong professional foundation`,design:{layout:"split",titleAlign:"left",bulletStyle:"check",emphasis:"balanced"}}),slideDeck:JSON.stringify({slides:Array.from({length:V},(F,z)=>{const k=z===0,E=z===V-1;return{title:k?`${R}: Introduction`:E?`${R}: Key Takeaways`:`${R}: Core Idea ${z}`,subtitle:k?`Why ${R} matters`:E?"Summary and next steps":"Building practical understanding",bullets:[`Understand a concrete aspect of ${R}`,"Apply this concept in a practical context","Connect this idea to real-world outcomes"],callout:E?`Use these principles of ${R} to guide decisions and actions.`:"Focus on clarity and practical application.",slideType:k?"intro":E?"summary":"concept"}})}),quiz:JSON.stringify([{question:"Which of the following best describes the core concept of this topic?",options:["It focuses on foundational principles","It applies advanced methodologies","It combines theory with practice","It relies solely on memorization"],correctIndex:2,explanation:"Combining theory with practice is the most effective approach for deep understanding.",difficulty:"intermediate",type:"multiple-choice"},{question:"A learner who understands this topic can apply it to real-world problems.",options:["True","False"],correctIndex:0,explanation:"Understanding foundational concepts enables practical application in real-world scenarios.",difficulty:"intermediate",type:"true-false"},{question:"What is the first step when approaching this subject?",options:["Skip to advanced material","Define key terminology","Practice without understanding","Avoid structured learning"],correctIndex:1,explanation:"Defining key terminology builds the vocabulary needed for deeper comprehension.",difficulty:"beginner",type:"multiple-choice"},{question:"Which strategy leads to the best long-term retention of this material?",options:["Cramming the night before","Spaced repetition and active recall","Reading passively multiple times","Watching videos only"],correctIndex:1,explanation:"Spaced repetition and active recall are scientifically proven to maximize long-term retention.",difficulty:"intermediate",type:"multiple-choice"}]),voiceover:"Welcome to this lesson. In this section, we'll explore the key concepts that will help you understand the topic better. Pay close attention to the main points as we go through them one by one.",translation:`[Translated text for: ${R}]

Las mejores prÃ¡cticas garantizan la seguridad, la eficiencia y el rendimiento a largo plazo en este dominio.`,improve:`Here is a clearer, more engaging version of your text:

Understanding the core components helps you diagnose and solve complex problems much more effectively.`,imagePrompt:`A high-quality, professional, photorealistic image about: "${R}". 8k resolution, highly detailed, realistic lighting, photographic style, suitable for a corporate presentation.`,default:"This is a sample AI-generated response. Configure your OpenAI API key in the AI settings panel to get real responses."};return n.value=!0,new Promise(F=>{setTimeout(()=>{n.value=!1;const z=C.type||"default";F(M[z]||M.default)},1500)})}return{apiKey:t,apiProvider:e,isGenerating:n,lastError:r,generationHistory:i,setApiKey:s,setProvider:o,generate:a,generateSlideContent:l,generateSlideDeck:h,generateQuiz:f,generateVoiceoverScript:m,generateTranslation:g,improveText:v,generateImagePrompt:_}}),JO={class:"ai-panel"},YO={class:"ai-mode-tabs"},XO=["onClick"],ZO={class:"ai-content"},eD={class:"form-group"},tD={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},nD={key:0,class:"form-group"},rD={key:1,class:"form-group"},iD={class:"form-group"},sD={class:"form-group"},oD={class:"prompt-label-row"},aD={key:1,class:"prompt-auto-badge"},lD={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},cD=["disabled"],uD={key:0,class:"spinner"},dD={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},hD={key:3,class:"creative-options-wrap"},fD={class:"result-header"},pD={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},mD={key:1,class:"creative-options-list"},gD={class:"creative-title"},vD={class:"creative-angle"},yD=["onClick"],_D={class:"form-group"},bD={class:"quiz-config-row"},wD={class:"form-group",style:{flex:"1"}},ED={class:"form-group",style:{flex:"1"}},ID={class:"form-group"},TD={class:"qtype-btns"},CD=["onClick"],kD={class:"qtype-icon"},xD={class:"form-group"},SD={class:"form-group"},AD={class:"prompt-label-row"},RD={key:1,class:"prompt-auto-badge"},PD=["disabled"],ND={key:0,class:"spinner"},OD={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},DD={key:0,class:"quiz-results"},MD={class:"quiz-results-header"},VD={class:"form-label"},LD={class:"quiz-header-actions"},FD={class:"regen-row"},$D=["disabled"],UD={key:0,class:"spinner spinner-sm"},BD={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},zD=["disabled"],jD={class:"quiz-card-header"},qD={class:"quiz-card-check"},WD=["onUpdate:modelValue"],HD={class:"q-num"},GD={class:"q-badges"},KD={class:"badge type-badge"},QD={class:"q-question"},JD={class:"q-options"},YD={class:"q-option-letter"},XD={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},ZD={key:0,class:"q-explanation"},eM=["disabled"],tM={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nM=["disabled"],rM={key:0,class:"spinner"},iM={key:0,class:"selected-text-preview"},sM={class:"text-preview"},oM={key:1,class:"ai-hint"},aM={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},lM=["disabled"],cM={key:0,class:"spinner"},uM={key:0,class:"selected-text-preview"},dM={class:"text-preview"},hM={key:1,class:"ai-hint"},fM={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},pM=["disabled"],mM={key:0,class:"spinner"},gM={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},vM={class:"result-header"},yM={class:"result-actions"},_M=["disabled"],bM={class:"textarea result-display"},wM={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},EM=["disabled"],IM={key:0,class:"spinner"},TM={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},CM={class:"textarea result-display",style:{color:"var(--color-primary)"}},kM={key:6,class:"ai-settings"},xM={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},SM=["value"],AM={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},RM=["value"],PM={key:0,class:"demo-notice"},NM={key:7,class:"result-area"},OM={class:"result-header"},DM={class:"result-pre"},MM={class:"result-actions"},VM=["disabled"],LM={key:8,class:"ai-error"},FM={__name:"AIAssistant",setup(t){const e=QO(),n=In(),r=gn(),i=pe("generate"),s=pe(""),o=pe(""),a=pe("");Yt(i,()=>{a.value=""});const l=pe(4),h=pe("general"),f=pe("Spanish"),m=pe(""),g=pe(""),v=pe(""),_=pe(!1),u=pe("single"),w=pe(5),C=pe("slide"),R=pe([]),V=pe(""),M=Ce(()=>{const j=o.value.trim()||"[your topic]";if(u.value==="deck"){let Y=`Create a complete ${w.value}-slide learning deck about "${j}".`;return g.value.trim()&&(Y+=`
Additional context: ${g.value.trim()}`),Y+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,Y+=`
Make each slide distinct, logically sequenced, and specific to "${j}".`,Y}let H=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[h.value]||"educational slide"} about "${j}".`;return g.value.trim()&&(H+=`
Additional context: ${g.value.trim()}`),H+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${j}" — no generic placeholders.`,H});Yt(M,j=>{_.value||(v.value=j)},{immediate:!0});function F(){v.value=M.value,_.value=!1}const z=pe(""),k=pe("intermediate"),E=pe("multiple-choice"),T=pe(""),P=pe([]),O=pe(""),b=pe(!1),S=Ce(()=>{const j=z.value.trim()||"[your topic]",A={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},H={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let Y=`Generate ${l.value} ${A[k.value]} ${H[E.value]} quiz questions about "${j}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return T.value.trim()&&(Y+=`
Learning objective: ${T.value.trim()}`),Y});Yt(S,j=>{b.value||(O.value=j)},{immediate:!0});function I(){O.value=S.value,b.value=!1}const Q=Ce(()=>r.getProject(n.projectId)),re=Ce(()=>{var j,A;return(A=(j=Q.value)==null?void 0:j.slides)==null?void 0:A.find(H=>H.id===n.currentSlideId)}),$=Ce(()=>{var j,A;return n.selectedElementId?(A=(j=re.value)==null?void 0:j.elements)==null?void 0:A.find(H=>H.id===n.selectedElementId):null});async function ue(){if(!o.value.trim()&&!v.value.trim())return;if(a.value="",R.value=[],V.value="",u.value==="deck"){const A=await e.generateSlideDeck(o.value,w.value,{objective:g.value,customPrompt:v.value});if(A!=null&&A.length){const H=A.map(Y=>ne(Y));a.value=JSON.stringify({slides:H},null,2),Ee(H,{replaceGenerated:!0})}return}if(C.value==="options"){await we();return}const j=await e.generateSlideContent(o.value,h.value,g.value,v.value);if(j){const A=ne(j);a.value=JSON.stringify(A,null,2),ye(A,{replaceGenerated:!0})}}function ne(j){const A=j&&typeof j=="object"?j:{},Y=(Array.isArray(A.bullets)?A.bullets:typeof A.bullets=="string"?A.bullets.split(`
`):[]).map(ie=>String(ie||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(A.title||o.value||"Untitled Slide").trim(),subtitle:String(A.subtitle||"").trim(),bullets:Y,callout:String(A.callout||"").trim()}}function _e(j,A){var ie,le,ge;const H=(le=(ie=r.getProject(j))==null?void 0:ie.slides)==null?void 0:le.find(Se=>Se.id===A);if(!((ge=H==null?void 0:H.elements)!=null&&ge.length))return;H.elements.filter(Se=>{var ae;return((ae=Se.meta)==null?void 0:ae.source)==="ai-content"}).map(Se=>Se.id).forEach(Se=>{r.deleteElement(j,A,Se)})}function te(j,A,H,Y){return r.addElement(j,A,H,{...Y,meta:{...Y.meta||{},source:"ai-content"}})}function Z(j,A,H,{replaceGenerated:Y=!1}={}){var ie;if(!(!j||!A)){if(Y&&_e(j,A),H.title&&(r.updateSlide(j,A,{title:H.title}),te(j,A,"heading",{x:60,y:40,width:840,height:80,content:{text:H.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),H.subtitle&&te(j,A,"text",{x:60,y:130,width:840,height:50,content:{text:H.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(ie=H.bullets)!=null&&ie.length){const le=H.bullets.map(ge=>`• ${ge}`).join(`
`);te(j,A,"text",{x:60,y:H.subtitle?200:150,width:840,height:200,content:{text:le,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}H.callout&&(te(j,A,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),te(j,A,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${H.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function Ee(j,{replaceGenerated:A=!1}={}){if(!n.currentSlideId)return;const H=n.projectId;if(!H||!Array.isArray(j)||!j.length)return;j.map(ie=>ne(ie)).forEach(ie=>{const le=r.addSlide(H);le&&Z(H,le.id,ie,{replaceGenerated:A})})}function ye(j=null,{replaceGenerated:A=!1}={}){if(!n.currentSlideId)return;let H=j;if(!H){if(!a.value)return;try{H=JSON.parse(a.value)}catch(ge){console.warn("Could not parse AI content:",ge);return}}const Y=ne(H),ie=n.projectId,le=n.currentSlideId;!ie||!le||Z(ie,le,Y,{replaceGenerated:A})}function X(){if(a.value){if(u.value==="deck"){try{const j=JSON.parse(a.value),A=Array.isArray(j)?j:j==null?void 0:j.slides;if(!Array.isArray(A)||!A.length)return;Ee(A,{replaceGenerated:!0})}catch{return}return}ye()}}async function we(){const j=o.value.trim()||"[your topic]",A=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${h.value}" slide about "${j}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,H=await e.generate(A,{type:"creativeOptions",topic:j,slideType:h.value});if(H)try{const Y=JSON.parse(H.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(Y))throw new Error("Options must be an array");R.value=Y.slice(0,3).map((ie,le)=>({title:String((ie==null?void 0:ie.title)||`Option ${le+1}`),angle:String((ie==null?void 0:ie.angle)||""),prompt:String((ie==null?void 0:ie.prompt)||"")})).filter(ie=>ie.prompt.trim()),R.value.length||(V.value="No usable creative options were returned. Try generating again.")}catch{V.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function se(j){j!=null&&j.prompt&&(v.value=j.prompt,_.value=!0,C.value="slide",await ue())}async function de(j=!1){if(!z.value.trim()&&!O.value.trim())return;j||(P.value=[]);const A=await e.generateQuiz(z.value,l.value,{difficulty:k.value,questionType:E.value,objective:T.value,customPrompt:O.value});if(A)if(j){const H=new Set(P.value.map(ie=>ie.question)),Y=A.filter(ie=>!H.has(ie.question)).map(ie=>({...ie,_selected:!0}));P.value=[...P.value,...Y]}else P.value=A.map(H=>({...H,_selected:!0}))}async function he(){const j=P.value.filter(H=>H._selected);if(!j.length)return;const A=n.projectId;j.forEach((H,Y)=>{const ie=r.addSlide(A);ie&&(r.addElement(A,ie.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:H.question,options:H.options,correctIndex:H.correctIndex,explanation:H.explanation||""}}),r.updateSlide(A,ie.id,{title:`Q${Y+1}: ${H.question.slice(0,40)}…`}))}),P.value=[]}function be(j){P.value.forEach(A=>A._selected=j)}async function ke(){if(!m.value.trim())return;const j=await e.generateVoiceoverScript(m.value);j&&(a.value=j)}async function q(){var H,Y;const j=(Y=(H=$.value)==null?void 0:H.content)==null?void 0:Y.text;if(!j)return;const A=await e.generateTranslation(j,f.value);A&&(a.value=A)}async function U(){!a.value||!$.value||r.updateElement(n.projectId,n.currentSlideId,$.value.id,{content:{...$.value.content,text:a.value}})}const p=pe(""),G=pe(!1);async function L(){if(p.value.trim()){G.value=!0,a.value="Optimizing prompt...";try{let j=p.value;const A=await e.generateImagePrompt(p.value);A&&(j=A.replace(/```(json)?\n?/g,"").trim()),a.value="Painting image... this takes about 10-20 seconds. Please wait.";const H=Math.floor(Math.random()*1e6),Y=`https://image.pollinations.ai/prompt/${encodeURIComponent(j)}?width=600&height=400&nologo=true&seed=${H}`;await new Promise((ie,le)=>{const ge=new Image;ge.onload=ie,ge.onerror=le,ge.src=Y}),r.addElement(n.projectId,n.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:Y,objectFit:"cover"}}),a.value="Image added to slide!"}catch{a.value="Failed to generate image. Try a different prompt."}finally{G.value=!1}}}async function N(){var A,H;if(!((H=(A=$.value)==null?void 0:A.content)!=null&&H.text))return;const j=await e.improveText($.value.content.text,s.value||"Make it clearer and more engaging");j&&(a.value=j)}async function D(){!a.value||!$.value||r.updateElement(n.projectId,n.currentSlideId,$.value.id,{content:{...$.value.content,text:a.value}})}async function W(){if(!s.value.trim())return;const j=await e.generate(s.value);j&&(a.value=j)}return(j,A)=>{var H,Y,ie,le,ge,Se;return K(),J("div",JO,[d("div",YO,[(K(),J(Ne,null,Xe([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],ae=>d("button",{key:ae.id,class:Fe(["ai-mode-btn",i.value===ae.id&&"active"]),onClick:ze=>i.value=ae.id},fe(ae.label),11,XO)),64))]),d("div",ZO,[i.value==="generate"?(K(),J(Ne,{key:0},[d("div",eD,[A[34]||(A[34]=d("label",{class:"form-label"},[Pe("Topic / Subject "),d("span",{class:"required"},"*")],-1)),tt(d("input",{"onUpdate:modelValue":A[0]||(A[0]=ae=>o.value=ae),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:ku(ue,["enter"])},null,544),[[mt,o.value]])]),d("div",tD,[d("button",{class:Fe(["output-mode-btn",u.value==="single"&&"active"]),onClick:A[1]||(A[1]=ae=>u.value="single")},"Single Slide",2),d("button",{class:Fe(["output-mode-btn",u.value==="deck"&&"active"]),onClick:A[2]||(A[2]=ae=>u.value="deck")},"Slide Deck",2)]),u.value==="single"?(K(),J("div",nD,[A[36]||(A[36]=d("label",{class:"form-label"},"Slide Type",-1)),tt(d("select",{"onUpdate:modelValue":A[3]||(A[3]=ae=>h.value=ae),class:"select"},[...A[35]||(A[35]=[nn('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[Ea,h.value]])])):(K(),J("div",rD,[A[37]||(A[37]=d("label",{class:"form-label"},"Number of Slides",-1)),tt(d("input",{"onUpdate:modelValue":A[4]||(A[4]=ae=>w.value=ae),class:"input",type:"number",min:"1",max:"20"},null,512),[[mt,w.value,void 0,{number:!0}]]),A[38]||(A[38]=d("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),d("div",iD,[A[39]||(A[39]=d("label",{class:"form-label"},[Pe("Description "),d("span",{class:"optional"},"(optional)")],-1)),tt(d("textarea",{"onUpdate:modelValue":A[5]||(A[5]=ae=>g.value=ae),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[mt,g.value]])]),d("div",sD,[d("div",oD,[A[41]||(A[41]=d("label",{class:"form-label"},"AI Prompt",-1)),_.value?(K(),J("button",{key:0,class:"prompt-reset-btn",onClick:F,title:"Reset to auto-generated prompt"},[...A[40]||(A[40]=[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Pe(" Reset ",-1)])])):(K(),J("span",aD,"auto"))]),tt(d("textarea",{"onUpdate:modelValue":A[6]||(A[6]=ae=>v.value=ae),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:A[7]||(A[7]=ae=>_.value=!0),spellcheck:"false"},null,544),[[mt,v.value]]),A[42]||(A[42]=d("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),u.value==="single"?(K(),J("div",lD,[d("button",{class:Fe(["output-mode-btn",C.value==="slide"&&"active"]),onClick:A[8]||(A[8]=ae=>C.value="slide")},"Show on Slide",2),d("button",{class:Fe(["output-mode-btn",C.value==="options"&&"active"]),onClick:A[9]||(A[9]=ae=>C.value="options")},"Creative Options",2)])):xe("",!0),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ie(e).isGenerating||!o.value.trim()&&!v.value.trim()||u.value==="deck"&&(!w.value||w.value<1||w.value>20),onClick:ue},[Ie(e).isGenerating?(K(),J("span",uD)):(K(),J("svg",dD,[...A[43]||(A[43]=[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Pe(" "+fe(Ie(e).isGenerating?"Generating…":u.value==="deck"?a.value?`Regenerate ${w.value} Slides`:`Generate ${w.value} Slides`:C.value==="slide"?a.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,cD),u.value==="single"&&C.value==="options"&&(R.value.length||V.value)?(K(),J("div",hD,[d("div",fD,[A[44]||(A[44]=d("span",{class:"form-label"},"Creative Options",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:A[10]||(A[10]=ae=>{R.value=[],V.value=""})},"Clear")]),V.value?(K(),J("div",pD,[A[45]||(A[45]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Pe(" "+fe(V.value),1)])):(K(),J("div",mD,[(K(!0),J(Ne,null,Xe(R.value,(ae,ze)=>(K(),J("article",{key:ze,class:"creative-option-card"},[d("h4",gD,fe(ae.title),1),d("p",vD,fe(ae.angle),1),d("button",{class:"btn btn-secondary btn-sm",onClick:Ze=>se(ae)},"Use This Option",8,yD)]))),128))]))])):xe("",!0)],64)):i.value==="quiz"?(K(),J(Ne,{key:1},[d("div",_D,[A[46]||(A[46]=d("label",{class:"form-label"},[Pe("Quiz Topic "),d("span",{class:"required"},"*")],-1)),tt(d("input",{"onUpdate:modelValue":A[11]||(A[11]=ae=>z.value=ae),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:ku(de,["enter"])},null,544),[[mt,z.value]])]),d("div",bD,[d("div",wD,[A[48]||(A[48]=d("label",{class:"form-label"},"Questions",-1)),tt(d("select",{"onUpdate:modelValue":A[12]||(A[12]=ae=>l.value=ae),class:"select"},[...A[47]||(A[47]=[d("option",{value:2},"2",-1),d("option",{value:3},"3",-1),d("option",{value:4},"4",-1),d("option",{value:5},"5",-1),d("option",{value:6},"6",-1),d("option",{value:8},"8",-1),d("option",{value:10},"10",-1)])],512),[[Ea,l.value,void 0,{number:!0}]])]),d("div",ED,[A[50]||(A[50]=d("label",{class:"form-label"},"Difficulty",-1)),tt(d("select",{"onUpdate:modelValue":A[13]||(A[13]=ae=>k.value=ae),class:"select"},[...A[49]||(A[49]=[d("option",{value:"beginner"},"Beginner",-1),d("option",{value:"intermediate"},"Intermediate",-1),d("option",{value:"advanced"},"Advanced",-1)])],512),[[Ea,k.value]])])]),d("div",ID,[A[51]||(A[51]=d("label",{class:"form-label"},"Question Type",-1)),d("div",TD,[(K(),J(Ne,null,Xe([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],ae=>d("button",{key:ae.id,class:Fe(["qtype-btn",E.value===ae.id&&"active"]),onClick:ze=>E.value=ae.id},[d("span",kD,fe(ae.icon),1),d("span",null,fe(ae.label),1)],10,CD)),64))])]),d("div",xD,[A[52]||(A[52]=d("label",{class:"form-label"},[Pe("Learning Objective "),d("span",{class:"optional"},"(optional)")],-1)),tt(d("input",{"onUpdate:modelValue":A[14]||(A[14]=ae=>T.value=ae),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[mt,T.value]])]),d("div",SD,[d("div",AD,[A[54]||(A[54]=d("label",{class:"form-label"},"AI Prompt",-1)),b.value?(K(),J("button",{key:0,class:"prompt-reset-btn",onClick:I,title:"Reset to auto-generated prompt"},[...A[53]||(A[53]=[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Pe(" Reset ",-1)])])):(K(),J("span",RD,"auto"))]),tt(d("textarea",{"onUpdate:modelValue":A[15]||(A[15]=ae=>O.value=ae),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:A[16]||(A[16]=ae=>b.value=!0),spellcheck:"false"},null,544),[[mt,O.value]]),A[55]||(A[55]=d("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ie(e).isGenerating||!z.value.trim()&&!O.value.trim(),onClick:A[17]||(A[17]=ae=>de(!1))},[Ie(e).isGenerating?(K(),J("span",ND)):(K(),J("svg",OD,[...A[56]||(A[56]=[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Pe(" "+fe(Ie(e).isGenerating?"Generating…":`Generate ${l.value} Questions`),1)],8,PD),P.value.length?(K(),J("div",DD,[d("div",MD,[d("span",VD,fe(P.value.length)+" Questions",1),d("div",LD,[d("button",{class:"btn btn-ghost btn-sm",onClick:A[18]||(A[18]=ae=>be(!0))},"All"),d("button",{class:"btn btn-ghost btn-sm",onClick:A[19]||(A[19]=ae=>be(!1))},"None"),d("button",{class:"btn btn-ghost btn-sm danger",onClick:A[20]||(A[20]=ae=>P.value=[])},"Clear")])]),d("div",FD,[d("button",{class:"btn btn-secondary regen-btn",disabled:Ie(e).isGenerating,onClick:A[21]||(A[21]=ae=>de(!1)),title:"Replace all questions with a new set"},[Ie(e).isGenerating?(K(),J("span",UD)):(K(),J("svg",BD,[...A[57]||(A[57]=[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),d("path",{d:"M3 3v5h5"},null,-1)])])),A[58]||(A[58]=Pe(" Regenerate ",-1))],8,$D),d("button",{class:"btn btn-ghost regen-btn",disabled:Ie(e).isGenerating,onClick:A[22]||(A[22]=ae=>de(!0)),title:"Generate more and append to current list"},[...A[59]||(A[59]=[d("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Pe(" Add More ",-1)])],8,zD)]),(K(!0),J(Ne,null,Xe(P.value,(ae,ze)=>(K(),J("div",{key:ze,class:Fe(["quiz-card",{deselected:!ae._selected}])},[d("div",jD,[d("label",qD,[tt(d("input",{type:"checkbox","onUpdate:modelValue":Ze=>ae._selected=Ze},null,8,WD),[[Av,ae._selected]]),d("span",HD,"Q"+fe(ze+1),1)]),d("div",GD,[d("span",{class:Fe(["badge difficulty-badge",ae.difficulty])},fe(ae.difficulty),3),d("span",KD,fe(ae.type==="true-false"?"T/F":"MCQ"),1)])]),d("p",QD,fe(ae.question),1),d("div",JD,[(K(!0),J(Ne,null,Xe(ae.options,(Ze,Je)=>(K(),J("div",{key:Je,class:Fe(["q-option",Je===ae.correctIndex&&"correct"])},[d("span",YD,fe(["A","B","C","D"][Je]),1),d("span",null,fe(Ze),1),Je===ae.correctIndex?(K(),J("svg",XD,[...A[60]||(A[60]=[d("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):xe("",!0)],2))),128))]),ae.explanation?(K(),J("div",ZD,[A[61]||(A[61]=d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),Pe(" "+fe(ae.explanation),1)])):xe("",!0)],2))),128)),d("button",{class:"btn btn-primary w-full",disabled:!P.value.filter(ae=>ae._selected).length,onClick:he},[A[62]||(A[62]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),Pe(" Add "+fe(P.value.filter(ae=>ae._selected).length)+" Selected as Quiz Slides ",1)],8,eM)])):xe("",!0)],64)):i.value==="voiceover"?(K(),J(Ne,{key:2},[d("div",tM,[A[63]||(A[63]=d("label",{class:"form-label"},"Slide Content / Key Points",-1)),tt(d("textarea",{"onUpdate:modelValue":A[23]||(A[23]=ae=>m.value=ae),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[mt,m.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ie(e).isGenerating,onClick:ke},[Ie(e).isGenerating?(K(),J("span",rM)):xe("",!0),Pe(" "+fe(Ie(e).isGenerating?"Generating…":"Generate Script"),1)],8,nM)],64)):i.value==="improve"?(K(),J(Ne,{key:3},[(Y=(H=$.value)==null?void 0:H.content)!=null&&Y.text?(K(),J("div",iM,[A[64]||(A[64]=d("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),d("div",sM,fe($.value.content.text.slice(0,120))+fe($.value.content.text.length>120?"…":""),1)])):(K(),J("p",oM,"Select a text element on the canvas to improve it.")),d("div",aM,[A[65]||(A[65]=d("label",{class:"form-label"},"Instruction",-1)),tt(d("input",{"onUpdate:modelValue":A[24]||(A[24]=ae=>s.value=ae),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[mt,s.value]])]),A[66]||(A[66]=d("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),tt(d("textarea",{"onUpdate:modelValue":A[25]||(A[25]=ae=>s.value=ae),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[mt,s.value]]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ie(e).isGenerating||!$.value&&!s.value,onClick:A[26]||(A[26]=ae=>$.value?N():W())},[Ie(e).isGenerating?(K(),J("span",cM)):xe("",!0),Pe(" "+fe(Ie(e).isGenerating?"Processing…":"Generate"),1)],8,lM)],64)):i.value==="translate"?(K(),J(Ne,{key:4},[(le=(ie=$.value)==null?void 0:ie.content)!=null&&le.text?(K(),J("div",uM,[A[67]||(A[67]=d("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),d("div",dM,fe($.value.content.text.slice(0,120))+fe($.value.content.text.length>120?"…":""),1)])):(K(),J("p",hM,"Select a text element on the canvas to translate it.")),d("div",fM,[A[69]||(A[69]=d("label",{class:"form-label"},"Target Language",-1)),tt(d("select",{"onUpdate:modelValue":A[27]||(A[27]=ae=>f.value=ae),class:"select"},[...A[68]||(A[68]=[nn('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[Ea,f.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Ie(e).isGenerating||!((Se=(ge=$.value)==null?void 0:ge.content)!=null&&Se.text),onClick:q},[Ie(e).isGenerating?(K(),J("span",mM)):xe("",!0),Pe(" "+fe(Ie(e).isGenerating?"Translating…":"Translate Text"),1)],8,pM),a.value?(K(),J("div",gM,[d("div",vM,[A[70]||(A[70]=d("span",{class:"form-label"},"Translation Result",-1)),d("div",yM,[d("button",{class:"btn btn-ghost btn-sm",onClick:A[28]||(A[28]=ae=>j.navigator.clipboard.writeText(a.value))},"Copy"),d("button",{class:"btn btn-primary btn-sm",onClick:U,disabled:!$.value},"Apply",8,_M)])]),d("div",bM,fe(a.value),1)])):xe("",!0)],64)):i.value==="image"?(K(),J(Ne,{key:5},[A[73]||(A[73]=d("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),d("div",wM,[A[71]||(A[71]=d("label",{class:"form-label"},"Image Description",-1)),tt(d("textarea",{"onUpdate:modelValue":A[29]||(A[29]=ae=>p.value=ae),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[mt,p.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:G.value||Ie(e).isGenerating||!p.value,onClick:L},[G.value||Ie(e).isGenerating?(K(),J("span",IM)):xe("",!0),Pe(" "+fe(G.value||Ie(e).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,EM),a.value?(K(),J("div",TM,[A[72]||(A[72]=d("div",{class:"result-header"},[d("span",{class:"form-label"},"Status")],-1)),d("div",CM,fe(a.value),1)])):xe("",!0)],64)):i.value==="settings"?(K(),J("div",kM,[d("div",xM,[A[75]||(A[75]=d("label",{class:"form-label"},"AI Provider",-1)),d("select",{value:Ie(e).apiProvider,class:"select",onChange:A[30]||(A[30]=ae=>Ie(e).setProvider(ae.target.value))},[...A[74]||(A[74]=[d("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),d("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,SM)]),d("div",AM,[A[76]||(A[76]=d("label",{class:"form-label"},"API Key",-1)),d("input",{type:"password",value:Ie(e).apiKey,class:"input",placeholder:"sk-…",onChange:A[31]||(A[31]=ae=>Ie(e).setApiKey(ae.target.value))},null,40,RM),A[77]||(A[77]=d("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),Ie(e).apiKey?xe("",!0):(K(),J("div",PM,[...A[78]||(A[78]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),Pe(" Running in ",-1),d("strong",null,"demo mode",-1),Pe(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):xe("",!0),a.value&&i.value!=="settings"&&i.value!=="quiz"?(K(),J("div",NM,[d("div",OM,[A[79]||(A[79]=d("span",{class:"form-label"},"Result",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:A[32]||(A[32]=ae=>a.value="")},"Clear")]),d("pre",DM,fe(a.value),1),d("div",MM,[i.value==="generate"?(K(),J("button",{key:0,class:"btn btn-primary btn-sm",onClick:X},fe(u.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):xe("",!0),i.value==="generate"?(K(),J("button",{key:1,class:"btn btn-ghost btn-sm",disabled:Ie(e).isGenerating,onClick:ue},[...A[80]||(A[80]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Pe(" Regenerate ",-1)])],8,VM)):xe("",!0),i.value==="improve"&&$.value?(K(),J("button",{key:2,class:"btn btn-primary btn-sm",onClick:D}," Apply to Element ")):xe("",!0),d("button",{class:"btn btn-secondary btn-sm",onClick:A[33]||(A[33]=ae=>{var ze;return(ze=j.navigator.clipboard)==null?void 0:ze.writeText(a.value)})}," Copy ")])])):xe("",!0),Ie(e).lastError?(K(),J("div",LM,[A[81]||(A[81]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Pe(" "+fe(Ie(e).lastError),1)])):xe("",!0)])])}}},$M=Vt(FM,[["__scopeId","data-v-697ec3ea"]]),UM={class:"theme-manager"},BM={class:"panel-section"},zM={class:"presets-grid"},jM=["title","onClick"],qM={class:"preset-preview"},WM={class:"preset-name"},HM={class:"panel-section"},GM={class:"theme-fields"},KM={class:"form-label"},QM={class:"color-row"},JM=["value","onInput"],YM=["value","onChange"],XM={class:"panel-section"},ZM={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},eV=["value"],tV=["value"],nV={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},rV=["value"],iV=["value"],sV={class:"form-group"},oV=["value"],aV={class:"panel-section"},lV={key:0,class:"apply-message success"},cV={key:1,class:"apply-message error"},uV={__name:"ThemeManager",setup(t){const e=In(),n=gn(),r=Ce(()=>n.getProject(e.projectId)),i=Ce(()=>{var v;return((v=r.value)==null?void 0:v.theme)||{}}),s=pe(""),o=pe("");function a(v){n.updateProject(e.projectId,{theme:{...i.value,...v}})}const l=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],h=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function f(v){a(v)}function m(v,_){const u=v.content||{};return v.type==="text"?{content:{...u,fontFamily:_.fontFamily||u.fontFamily,color:_.textColor||u.color}}:v.type==="heading"?{content:{...u,fontFamily:_.headingFont||_.fontFamily||u.fontFamily,color:_.textColor||u.color}}:v.type==="shape"?{content:{...u,fillColor:_.secondaryColor||u.fillColor}}:v.type==="hotspot"?{content:{...u,bgColor:_.primaryColor||u.bgColor}}:v.type==="button"?{content:{...u,bgColor:_.primaryColor||u.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:_.fontFamily||u.fontFamily}}:v.type==="quiz"?{content:{...u,cardBgColor:_.bgColor||u.cardBgColor,questionColor:_.textColor||u.questionColor,accentColor:_.primaryColor||u.accentColor}}:null}function g(){s.value="",o.value="";const v=e.projectId,_=r.value,u=i.value;if(!v||!_){o.value="No active project to apply theme.";return}const w=_.slides||[];let C=0;w.forEach(R=>{(R.backgroundType||"color")==="color"&&n.updateSlide(v,R.id,{backgroundType:"color",background:u.bgColor||R.background||"#ffffff"}),(R.elements||[]).forEach(V=>{const M=m(V,u);M&&(n.updateElement(v,R.id,V.id,M),C+=1)})}),s.value=`Applied theme to ${w.length} slide${w.length===1?"":"s"} and ${C} element${C===1?"":"s"}.`}return(v,_)=>(K(),J("div",UM,[d("div",BM,[_[3]||(_[3]=d("div",{class:"panel-title"},"Preset Themes",-1)),d("div",zM,[(K(),J(Ne,null,Xe(l,u=>d("div",{key:u.name,class:"preset-card",title:u.name,onClick:w=>f(u)},[d("div",qM,[d("div",{class:"pp-header",style:$e({background:u.primaryColor})},null,4),d("div",{class:"pp-body",style:$e({background:u.bgColor})},[d("div",{class:"pp-line",style:$e({background:u.textColor,opacity:.7})},null,4),d("div",{class:"pp-line",style:$e({background:u.textColor,opacity:.4,width:"60%"})},null,4)],4),d("div",{class:"pp-accent",style:$e({background:u.secondaryColor})},null,4)]),d("span",WM,fe(u.name),1)],8,jM)),64))])]),d("div",HM,[_[4]||(_[4]=d("div",{class:"panel-title"},"Colors",-1)),d("div",GM,[(K(),J(Ne,null,Xe({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(u,w)=>d("div",{class:"theme-field",key:w},[d("label",KM,fe(u),1),d("div",QM,[d("input",{type:"color",value:i.value[w]||"#ffffff",class:"color-input-native",onInput:C=>a({[w]:C.target.value})},null,40,JM),d("input",{value:i.value[w]||"",class:"input",onChange:C=>a({[w]:C.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,YM)])])),64))])]),d("div",XM,[_[8]||(_[8]=d("div",{class:"panel-title"},"Typography",-1)),d("div",ZM,[_[5]||(_[5]=d("label",{class:"form-label"},"Heading Font",-1)),d("select",{value:i.value.headingFont||"Inter, sans-serif",class:"select",onChange:_[0]||(_[0]=u=>a({headingFont:u.target.value}))},[(K(),J(Ne,null,Xe(h,u=>d("option",{key:u.value,value:u.value},fe(u.label),9,tV)),64))],40,eV)]),d("div",nV,[_[6]||(_[6]=d("label",{class:"form-label"},"Body Font",-1)),d("select",{value:i.value.fontFamily||"Inter, sans-serif",class:"select",onChange:_[1]||(_[1]=u=>a({fontFamily:u.target.value}))},[(K(),J(Ne,null,Xe(h,u=>d("option",{key:u.value,value:u.value},fe(u.label),9,iV)),64))],40,rV)]),d("div",sV,[_[7]||(_[7]=d("label",{class:"form-label"},"Base Font Size",-1)),d("input",{type:"number",min:"12",max:"24",value:i.value.fontSize||16,class:"input",onChange:_[2]||(_[2]=u=>a({fontSize:+u.target.value}))},null,40,oV)])]),d("div",aV,[_[9]||(_[9]=d("div",{class:"panel-title"},"Preview",-1)),d("div",{class:"theme-preview",style:$e({background:i.value.bgColor||"#fff",fontFamily:i.value.fontFamily||"Inter, sans-serif"})},[d("div",{class:"tp-heading",style:$e({color:i.value.textColor,fontFamily:i.value.headingFont||i.value.fontFamily})}," Heading Text ",4),d("div",{class:"tp-body",style:$e({color:i.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),d("div",{class:"tp-btn",style:$e({background:i.value.primaryColor})},"Button",4),d("div",{class:"tp-badge",style:$e({background:i.value.secondaryColor})},"Badge",4)],4),d("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:g}," Apply Theme to Slides "),s.value?(K(),J("p",lV,fe(s.value),1)):xe("",!0),o.value?(K(),J("p",cV,fe(o.value),1)):xe("",!0)])]))}},dV=Vt(uV,[["__scopeId","data-v-dd457d78"]]);var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hV(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Na(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var W_={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(t,e){(function(n){t.exports=n()})(function(){return function n(r,i,s){function o(h,f){if(!i[h]){if(!r[h]){var m=typeof Na=="function"&&Na;if(!f&&m)return m(h,!0);if(a)return a(h,!0);var g=new Error("Cannot find module '"+h+"'");throw g.code="MODULE_NOT_FOUND",g}var v=i[h]={exports:{}};r[h][0].call(v.exports,function(_){var u=r[h][1][_];return o(u||_)},v,v.exports,n,r,i,s)}return i[h].exports}for(var a=typeof Na=="function"&&Na,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(n,r,i){var s=n("./utils"),o=n("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var h,f,m,g,v,_,u,w=[],C=0,R=l.length,V=R,M=s.getTypeOf(l)!=="string";C<l.length;)V=R-C,m=M?(h=l[C++],f=C<R?l[C++]:0,C<R?l[C++]:0):(h=l.charCodeAt(C++),f=C<R?l.charCodeAt(C++):0,C<R?l.charCodeAt(C++):0),g=h>>2,v=(3&h)<<4|f>>4,_=1<V?(15&f)<<2|m>>6:64,u=2<V?63&m:64,w.push(a.charAt(g)+a.charAt(v)+a.charAt(_)+a.charAt(u));return w.join("")},i.decode=function(l){var h,f,m,g,v,_,u=0,w=0,C="data:";if(l.substr(0,C.length)===C)throw new Error("Invalid base64 input, it looks like a data url.");var R,V=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&V--,l.charAt(l.length-2)===a.charAt(64)&&V--,V%1!=0)throw new Error("Invalid base64 input, bad content length.");for(R=o.uint8array?new Uint8Array(0|V):new Array(0|V);u<l.length;)h=a.indexOf(l.charAt(u++))<<2|(g=a.indexOf(l.charAt(u++)))>>4,f=(15&g)<<4|(v=a.indexOf(l.charAt(u++)))>>2,m=(3&v)<<6|(_=a.indexOf(l.charAt(u++))),R[w++]=h,v!==64&&(R[w++]=f),_!==64&&(R[w++]=m);return R}},{"./support":30,"./utils":32}],2:[function(n,r,i){var s=n("./external"),o=n("./stream/DataWorker"),a=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function h(f,m,g,v,_){this.compressedSize=f,this.uncompressedSize=m,this.crc32=g,this.compression=v,this.compressedContent=_}h.prototype={getContentWorker:function(){var f=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return f.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,m,g){return f.pipe(new a).pipe(new l("uncompressedSize")).pipe(m.compressWorker(g)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var s=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var s=n("./utils"),o=function(){for(var a,l=[],h=0;h<256;h++){a=h;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;l[h]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(h,f,m,g){var v=o,_=g+m;h^=-1;for(var u=g;u<_;u++)h=h>>>8^v[255&(h^f[u])];return-1^h}(0|l,a,a.length,0):function(h,f,m,g){var v=o,_=g+m;h^=-1;for(var u=g;u<_;u++)h=h>>>8^v[255&(h^f.charCodeAt(u))];return-1^h}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var s=null;s=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:s}},{lie:37}],7:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=n("pako"),a=n("./utils"),l=n("./stream/GenericWorker"),h=s?"uint8array":"array";function f(m,g){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=g,this.meta={}}i.magic="\b\0",a.inherits(f,l),f.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,m.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(g){m.push({data:g,meta:m.meta})}},i.compressWorker=function(m){return new f("Deflate",m)},i.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function s(v,_){var u,w="";for(u=0;u<_;u++)w+=String.fromCharCode(255&v),v>>>=8;return w}function o(v,_,u,w,C,R){var V,M,F=v.file,z=v.compression,k=R!==h.utf8encode,E=a.transformTo("string",R(F.name)),T=a.transformTo("string",h.utf8encode(F.name)),P=F.comment,O=a.transformTo("string",R(P)),b=a.transformTo("string",h.utf8encode(P)),S=T.length!==F.name.length,I=b.length!==P.length,Q="",re="",$="",ue=F.dir,ne=F.date,_e={crc32:0,compressedSize:0,uncompressedSize:0};_&&!u||(_e.crc32=v.crc32,_e.compressedSize=v.compressedSize,_e.uncompressedSize=v.uncompressedSize);var te=0;_&&(te|=8),k||!S&&!I||(te|=2048);var Z=0,Ee=0;ue&&(Z|=16),C==="UNIX"?(Ee=798,Z|=function(X,we){var se=X;return X||(se=we?16893:33204),(65535&se)<<16}(F.unixPermissions,ue)):(Ee=20,Z|=function(X){return 63&(X||0)}(F.dosPermissions)),V=ne.getUTCHours(),V<<=6,V|=ne.getUTCMinutes(),V<<=5,V|=ne.getUTCSeconds()/2,M=ne.getUTCFullYear()-1980,M<<=4,M|=ne.getUTCMonth()+1,M<<=5,M|=ne.getUTCDate(),S&&(re=s(1,1)+s(f(E),4)+T,Q+="up"+s(re.length,2)+re),I&&($=s(1,1)+s(f(O),4)+b,Q+="uc"+s($.length,2)+$);var ye="";return ye+=`
\0`,ye+=s(te,2),ye+=z.magic,ye+=s(V,2),ye+=s(M,2),ye+=s(_e.crc32,4),ye+=s(_e.compressedSize,4),ye+=s(_e.uncompressedSize,4),ye+=s(E.length,2),ye+=s(Q.length,2),{fileRecord:m.LOCAL_FILE_HEADER+ye+E+Q,dirRecord:m.CENTRAL_FILE_HEADER+s(Ee,2)+ye+s(O.length,2)+"\0\0\0\0"+s(Z,4)+s(w,4)+E+Q+O}}var a=n("../utils"),l=n("../stream/GenericWorker"),h=n("../utf8"),f=n("../crc32"),m=n("../signature");function g(v,_,u,w){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=u,this.encodeFileName=w,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(g,l),g.prototype.push=function(v){var _=v.meta.percent||0,u=this.entriesCount,w=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,l.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:u?(_+100*(u-w-1))/u:100}}))},g.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var _=this.streamFiles&&!v.file.dir;if(_){var u=o(v,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},g.prototype.closedSource=function(v){this.accumulate=!1;var _=this.streamFiles&&!v.file.dir,u=o(v,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),_)this.push({data:function(w){return m.DATA_DESCRIPTOR+s(w.crc32,4)+s(w.compressedSize,4)+s(w.uncompressedSize,4)}(v),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},g.prototype.flush=function(){for(var v=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var u=this.bytesWritten-v,w=function(C,R,V,M,F){var z=a.transformTo("string",F(M));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(C,2)+s(C,2)+s(R,4)+s(V,4)+s(z.length,2)+z}(this.dirRecords.length,u,v,this.zipComment,this.encodeFileName);this.push({data:w,meta:{percent:100}})},g.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},g.prototype.registerPrevious=function(v){this._sources.push(v);var _=this;return v.on("data",function(u){_.processChunk(u)}),v.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),v.on("error",function(u){_.error(u)}),this},g.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},g.prototype.error=function(v){var _=this._sources;if(!l.prototype.error.call(this,v))return!1;for(var u=0;u<_.length;u++)try{_[u].error(v)}catch{}return!0},g.prototype.lock=function(){l.prototype.lock.call(this);for(var v=this._sources,_=0;_<v.length;_++)v[_].lock()},r.exports=g},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var s=n("../compressions"),o=n("./ZipFileWorker");i.generateWorker=function(a,l,h){var f=new o(l.streamFiles,h,l.platform,l.encodeFileName),m=0;try{a.forEach(function(g,v){m++;var _=function(R,V){var M=R||V,F=s[M];if(!F)throw new Error(M+" is not a valid compression method !");return F}(v.options.compression,l.compression),u=v.options.compressionOptions||l.compressionOptions||{},w=v.dir,C=v.date;v._compressWorker(_,u).withStreamInfo("file",{name:g,dir:w,date:C,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(f)}),f.entriesCount=m}catch(g){f.error(g)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=n("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var s=n("./utils"),o=n("./external"),a=n("./utf8"),l=n("./zipEntries"),h=n("./stream/Crc32Probe"),f=n("./nodejsUtils");function m(g){return new o.Promise(function(v,_){var u=g.decompressed.getContentWorker().pipe(new h);u.on("error",function(w){_(w)}).on("end",function(){u.streamInfo.crc32!==g.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}r.exports=function(g,v){var _=this;return v=s.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),f.isNode&&f.isStream(g)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",g,!0,v.optimizedBinaryString,v.base64).then(function(u){var w=new l(v);return w.load(u),w}).then(function(u){var w=[o.Promise.resolve(u)],C=u.files;if(v.checkCRC32)for(var R=0;R<C.length;R++)w.push(m(C[R]));return o.Promise.all(w)}).then(function(u){for(var w=u.shift(),C=w.files,R=0;R<C.length;R++){var V=C[R],M=V.fileNameStr,F=s.resolve(V.fileNameStr);_.file(F,V.decompressed,{binary:!0,optimizedBinaryString:!0,date:V.date,dir:V.dir,comment:V.fileCommentStr.length?V.fileCommentStr:null,unixPermissions:V.unixPermissions,dosPermissions:V.dosPermissions,createFolders:v.createFolders}),V.dir||(_.file(F).unsafeOriginalName=M)}return w.zipComment.length&&(_.comment=w.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var s=n("../utils"),o=n("../stream/GenericWorker");function a(l,h){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(a,o),a.prototype._bindStream=function(l){var h=this;(this._stream=l).pause(),l.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var s=n("readable-stream").Readable;function o(a,l,h){s.call(this,l),this._helper=a;var f=this;a.on("data",function(m,g){f.push(m)||f._helper.pause(),h&&h(g)}).on("error",function(m){f.emit("error",m)}).on("end",function(){f.push(null)})}n("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,r,i){function s(F,z,k){var E,T=a.getTypeOf(z),P=a.extend(k||{},f);P.date=P.date||new Date,P.compression!==null&&(P.compression=P.compression.toUpperCase()),typeof P.unixPermissions=="string"&&(P.unixPermissions=parseInt(P.unixPermissions,8)),P.unixPermissions&&16384&P.unixPermissions&&(P.dir=!0),P.dosPermissions&&16&P.dosPermissions&&(P.dir=!0),P.dir&&(F=C(F)),P.createFolders&&(E=w(F))&&R.call(this,E,!0);var O=T==="string"&&P.binary===!1&&P.base64===!1;k&&k.binary!==void 0||(P.binary=!O),(z instanceof m&&z.uncompressedSize===0||P.dir||!z||z.length===0)&&(P.base64=!1,P.binary=!0,z="",P.compression="STORE",T="string");var b=null;b=z instanceof m||z instanceof l?z:_.isNode&&_.isStream(z)?new u(F,z):a.prepareContent(F,z,P.binary,P.optimizedBinaryString,P.base64);var S=new g(F,b,P);this.files[F]=S}var o=n("./utf8"),a=n("./utils"),l=n("./stream/GenericWorker"),h=n("./stream/StreamHelper"),f=n("./defaults"),m=n("./compressedObject"),g=n("./zipObject"),v=n("./generate"),_=n("./nodejsUtils"),u=n("./nodejs/NodejsStreamInputAdapter"),w=function(F){F.slice(-1)==="/"&&(F=F.substring(0,F.length-1));var z=F.lastIndexOf("/");return 0<z?F.substring(0,z):""},C=function(F){return F.slice(-1)!=="/"&&(F+="/"),F},R=function(F,z){return z=z!==void 0?z:f.createFolders,F=C(F),this.files[F]||s.call(this,F,null,{dir:!0,createFolders:z}),this.files[F]};function V(F){return Object.prototype.toString.call(F)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(F){var z,k,E;for(z in this.files)E=this.files[z],(k=z.slice(this.root.length,z.length))&&z.slice(0,this.root.length)===this.root&&F(k,E)},filter:function(F){var z=[];return this.forEach(function(k,E){F(k,E)&&z.push(E)}),z},file:function(F,z,k){if(arguments.length!==1)return F=this.root+F,s.call(this,F,z,k),this;if(V(F)){var E=F;return this.filter(function(P,O){return!O.dir&&E.test(P)})}var T=this.files[this.root+F];return T&&!T.dir?T:null},folder:function(F){if(!F)return this;if(V(F))return this.filter(function(T,P){return P.dir&&F.test(T)});var z=this.root+F,k=R.call(this,z),E=this.clone();return E.root=k.name,E},remove:function(F){F=this.root+F;var z=this.files[F];if(z||(F.slice(-1)!=="/"&&(F+="/"),z=this.files[F]),z&&!z.dir)delete this.files[F];else for(var k=this.filter(function(T,P){return P.name.slice(0,F.length)===F}),E=0;E<k.length;E++)delete this.files[k[E].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(F){var z,k={};try{if((k=a.extend(F||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=k.type.toLowerCase(),k.compression=k.compression.toUpperCase(),k.type==="binarystring"&&(k.type="string"),!k.type)throw new Error("No output type specified.");a.checkSupport(k.type),k.platform!=="darwin"&&k.platform!=="freebsd"&&k.platform!=="linux"&&k.platform!=="sunos"||(k.platform="UNIX"),k.platform==="win32"&&(k.platform="DOS");var E=k.comment||this.comment||"";z=v.generateWorker(this,k,E)}catch(T){(z=new l("error")).error(T)}return new h(z,k.type||"string",k.mimeType)},generateAsync:function(F,z){return this.generateInternalStream(F).accumulate(z)},generateNodeStream:function(F,z){return(F=F||{}).type||(F.type="nodebuffer"),this.generateInternalStream(F).toNodejsStream(z)}};r.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),h=a.charCodeAt(1),f=a.charCodeAt(2),m=a.charCodeAt(3),g=this.length-4;0<=g;--g)if(this.data[g]===l&&this.data[g+1]===h&&this.data[g+2]===f&&this.data[g+3]===m)return g-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),h=a.charCodeAt(1),f=a.charCodeAt(2),m=a.charCodeAt(3),g=this.readData(4);return l===g[0]&&h===g[1]&&f===g[2]&&m===g[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var s=n("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,h=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)h=(h<<8)+this.byteAt(l);return this.index+=a,h},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=o},{"../utils":32}],19:[function(n,r,i){var s=n("./Uint8ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var s=n("./ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var s=n("../utils"),o=n("../support"),a=n("./ArrayReader"),l=n("./StringReader"),h=n("./NodeBufferReader"),f=n("./Uint8ArrayReader");r.exports=function(m){var g=s.getTypeOf(m);return s.checkSupport(g),g!=="string"||o.uint8array?g==="nodebuffer"?new h(m):o.uint8array?new f(s.transformTo("uint8array",m)):new a(s.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var s=n("./GenericWorker"),o=n("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var s=n("./GenericWorker"),o=n("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+l.data.length}o.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,h);break;case"uint8array":l=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":l=this.data.slice(this.index,h)}return this.index=h,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=s},{}],29:[function(n,r,i){var s=n("../utils"),o=n("./ConvertWorker"),a=n("./GenericWorker"),l=n("../base64"),h=n("../support"),f=n("../external"),m=null;if(h.nodestream)try{m=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function g(_,u){return new f.Promise(function(w,C){var R=[],V=_._internalType,M=_._outputType,F=_._mimeType;_.on("data",function(z,k){R.push(z),u&&u(k)}).on("error",function(z){R=[],C(z)}).on("end",function(){try{var z=function(k,E,T){switch(k){case"blob":return s.newBlob(s.transformTo("arraybuffer",E),T);case"base64":return l.encode(E);default:return s.transformTo(k,E)}}(M,function(k,E){var T,P=0,O=null,b=0;for(T=0;T<E.length;T++)b+=E[T].length;switch(k){case"string":return E.join("");case"array":return Array.prototype.concat.apply([],E);case"uint8array":for(O=new Uint8Array(b),T=0;T<E.length;T++)O.set(E[T],P),P+=E[T].length;return O;case"nodebuffer":return Buffer.concat(E);default:throw new Error("concat : unsupported type '"+k+"'")}}(V,R),F);w(z)}catch(k){C(k)}R=[]}).resume()})}function v(_,u,w){var C=u;switch(u){case"blob":case"arraybuffer":C="uint8array";break;case"base64":C="string"}try{this._internalType=C,this._outputType=u,this._mimeType=w,s.checkSupport(C),this._worker=_.pipe(new o(C)),_.lock()}catch(R){this._worker=new a("error"),this._worker.error(R)}}v.prototype={accumulate:function(_){return g(this,_)},on:function(_,u){var w=this;return _==="data"?this._worker.on(_,function(C){u.call(w,C.data,C.meta)}):this._worker.on(_,function(){s.delay(u,arguments,w)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},_)}},r.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var s=n("./utils"),o=n("./support"),a=n("./nodejsUtils"),l=n("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function g(){l.call(this,"utf-8 encode")}i.utf8encode=function(v){return o.nodebuffer?a.newBufferFrom(v,"utf-8"):function(_){var u,w,C,R,V,M=_.length,F=0;for(R=0;R<M;R++)(64512&(w=_.charCodeAt(R)))==55296&&R+1<M&&(64512&(C=_.charCodeAt(R+1)))==56320&&(w=65536+(w-55296<<10)+(C-56320),R++),F+=w<128?1:w<2048?2:w<65536?3:4;for(u=o.uint8array?new Uint8Array(F):new Array(F),R=V=0;V<F;R++)(64512&(w=_.charCodeAt(R)))==55296&&R+1<M&&(64512&(C=_.charCodeAt(R+1)))==56320&&(w=65536+(w-55296<<10)+(C-56320),R++),w<128?u[V++]=w:(w<2048?u[V++]=192|w>>>6:(w<65536?u[V++]=224|w>>>12:(u[V++]=240|w>>>18,u[V++]=128|w>>>12&63),u[V++]=128|w>>>6&63),u[V++]=128|63&w);return u}(v)},i.utf8decode=function(v){return o.nodebuffer?s.transformTo("nodebuffer",v).toString("utf-8"):function(_){var u,w,C,R,V=_.length,M=new Array(2*V);for(u=w=0;u<V;)if((C=_[u++])<128)M[w++]=C;else if(4<(R=h[C]))M[w++]=65533,u+=R-1;else{for(C&=R===2?31:R===3?15:7;1<R&&u<V;)C=C<<6|63&_[u++],R--;1<R?M[w++]=65533:C<65536?M[w++]=C:(C-=65536,M[w++]=55296|C>>10&1023,M[w++]=56320|1023&C)}return M.length!==w&&(M.subarray?M=M.subarray(0,w):M.length=w),s.applyFromCharCode(M)}(v=s.transformTo(o.uint8array?"uint8array":"array",v))},s.inherits(m,l),m.prototype.processChunk=function(v){var _=s.transformTo(o.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var u=_;(_=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),_.set(u,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var w=function(R,V){var M;for((V=V||R.length)>R.length&&(V=R.length),M=V-1;0<=M&&(192&R[M])==128;)M--;return M<0||M===0?V:M+h[R[M]]>V?M:V}(_),C=_;w!==_.length&&(o.uint8array?(C=_.subarray(0,w),this.leftOver=_.subarray(w,_.length)):(C=_.slice(0,w),this.leftOver=_.slice(w,_.length))),this.push({data:i.utf8decode(C),meta:v.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=m,s.inherits(g,l),g.prototype.processChunk=function(v){this.push({data:i.utf8encode(v.data),meta:v.meta})},i.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var s=n("./support"),o=n("./base64"),a=n("./nodejsUtils"),l=n("./external");function h(u){return u}function f(u,w){for(var C=0;C<u.length;++C)w[C]=255&u.charCodeAt(C);return w}n("setimmediate"),i.newBlob=function(u,w){i.checkSupport("blob");try{return new Blob([u],{type:w})}catch{try{var C=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return C.append(u),C.getBlob(w)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(u,w,C){var R=[],V=0,M=u.length;if(M<=C)return String.fromCharCode.apply(null,u);for(;V<M;)w==="array"||w==="nodebuffer"?R.push(String.fromCharCode.apply(null,u.slice(V,Math.min(V+C,M)))):R.push(String.fromCharCode.apply(null,u.subarray(V,Math.min(V+C,M)))),V+=C;return R.join("")},stringifyByChar:function(u){for(var w="",C=0;C<u.length;C++)w+=String.fromCharCode(u[C]);return w},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function g(u){var w=65536,C=i.getTypeOf(u),R=!0;if(C==="uint8array"?R=m.applyCanBeUsed.uint8array:C==="nodebuffer"&&(R=m.applyCanBeUsed.nodebuffer),R)for(;1<w;)try{return m.stringifyByChunk(u,C,w)}catch{w=Math.floor(w/2)}return m.stringifyByChar(u)}function v(u,w){for(var C=0;C<u.length;C++)w[C]=u[C];return w}i.applyFromCharCode=g;var _={};_.string={string:h,array:function(u){return f(u,new Array(u.length))},arraybuffer:function(u){return _.string.uint8array(u).buffer},uint8array:function(u){return f(u,new Uint8Array(u.length))},nodebuffer:function(u){return f(u,a.allocBuffer(u.length))}},_.array={string:g,array:h,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(u)}},_.arraybuffer={string:function(u){return g(new Uint8Array(u))},array:function(u){return v(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:h,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(new Uint8Array(u))}},_.uint8array={string:g,array:function(u){return v(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:h,nodebuffer:function(u){return a.newBufferFrom(u)}},_.nodebuffer={string:g,array:function(u){return v(u,new Array(u.length))},arraybuffer:function(u){return _.nodebuffer.uint8array(u).buffer},uint8array:function(u){return v(u,new Uint8Array(u.length))},nodebuffer:h},i.transformTo=function(u,w){if(w=w||"",!u)return w;i.checkSupport(u);var C=i.getTypeOf(w);return _[C][u](w)},i.resolve=function(u){for(var w=u.split("/"),C=[],R=0;R<w.length;R++){var V=w[R];V==="."||V===""&&R!==0&&R!==w.length-1||(V===".."?C.pop():C.push(V))}return C.join("/")},i.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(u)?"nodebuffer":s.uint8array&&u instanceof Uint8Array?"uint8array":s.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(u){if(!s[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(u){var w,C,R="";for(C=0;C<(u||"").length;C++)R+="\\x"+((w=u.charCodeAt(C))<16?"0":"")+w.toString(16).toUpperCase();return R},i.delay=function(u,w,C){setImmediate(function(){u.apply(C||null,w||[])})},i.inherits=function(u,w){function C(){}C.prototype=w.prototype,u.prototype=new C},i.extend=function(){var u,w,C={};for(u=0;u<arguments.length;u++)for(w in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],w)&&C[w]===void 0&&(C[w]=arguments[u][w]);return C},i.prepareContent=function(u,w,C,R,V){return l.Promise.resolve(w).then(function(M){return s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)&&typeof FileReader<"u"?new l.Promise(function(F,z){var k=new FileReader;k.onload=function(E){F(E.target.result)},k.onerror=function(E){z(E.target.error)},k.readAsArrayBuffer(M)}):M}).then(function(M){var F=i.getTypeOf(M);return F?(F==="arraybuffer"?M=i.transformTo("uint8array",M):F==="string"&&(V?M=o.decode(M):C&&R!==!0&&(M=function(z){return f(z,s.uint8array?new Uint8Array(z.length):new Array(z.length))}(M))),M):l.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./signature"),l=n("./zipEntry"),h=n("./support");function f(m){this.files=[],this.loadOptions=m}f.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var g=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(g)+", expected "+o.pretty(m)+")")}},isSignature:function(m,g){var v=this.reader.index;this.reader.setIndex(m);var _=this.reader.readString(4)===g;return this.reader.setIndex(v),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),g=h.uint8array?"uint8array":"array",v=o.transformTo(g,m);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,g,v,_=this.zip64EndOfCentralSize-44;0<_;)m=this.reader.readInt(2),g=this.reader.readInt(4),v=this.reader.readData(g),this.zip64ExtensibleData[m]={id:m,length:g,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,g;for(m=0;m<this.files.length;m++)g=this.files[m],this.reader.setIndex(g.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),g.readLocalPart(this.reader),g.handleUTF8(),g.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var g=m;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var _=g-v;if(0<_)this.isSignature(g,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(m){this.reader=s(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./compressedObject"),l=n("./crc32"),h=n("./utf8"),f=n("./compressions"),m=n("./support");function g(v,_){this.options=v,this.loadOptions=_}g.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var _,u;if(v.skip(22),this.fileNameLength=v.readInt(2),u=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(w){for(var C in f)if(Object.prototype.hasOwnProperty.call(f,C)&&f[C].magic===w)return f[C];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var _=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(_),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var _,u,w,C=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<C;)_=v.readInt(2),u=v.readInt(2),w=v.readData(u),this.extraFields[_]={id:_,length:u,value:w};v.setIndex(C)},handleUTF8:function(){var v=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var u=o.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var w=this.findExtraFieldUnicodeComment();if(w!==null)this.fileCommentStr=w;else{var C=o.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(C)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var _=s(v.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:h.utf8decode(_.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var _=s(v.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:h.utf8decode(_.readData(v.length-5))}return null}},r.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function s(_,u,w){this.name=_,this.dir=w.dir,this.date=w.date,this.comment=w.comment,this.unixPermissions=w.unixPermissions,this.dosPermissions=w.dosPermissions,this._data=u,this._dataBinary=w.binary,this.options={compression:w.compression,compressionOptions:w.compressionOptions}}var o=n("./stream/StreamHelper"),a=n("./stream/DataWorker"),l=n("./utf8"),h=n("./compressedObject"),f=n("./stream/GenericWorker");s.prototype={internalStream:function(_){var u=null,w="string";try{if(!_)throw new Error("No output type specified.");var C=(w=_.toLowerCase())==="string"||w==="text";w!=="binarystring"&&w!=="text"||(w="string"),u=this._decompressWorker();var R=!this._dataBinary;R&&!C&&(u=u.pipe(new l.Utf8EncodeWorker)),!R&&C&&(u=u.pipe(new l.Utf8DecodeWorker))}catch(V){(u=new f("error")).error(V)}return new o(u,w,"")},async:function(_,u){return this.internalStream(_).accumulate(u)},nodeStream:function(_,u){return this.internalStream(_||"nodebuffer").toNodejsStream(u)},_compressWorker:function(_,u){if(this._data instanceof h&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var w=this._decompressWorker();return this._dataBinary||(w=w.pipe(new l.Utf8EncodeWorker)),h.createWorkerFrom(w,_,u)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new a(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],g=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<m.length;v++)s.prototype[m[v]]=g;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var h=0,f=new l(_),m=s.document.createTextNode("");f.observe(m,{characterData:!0}),o=function(){m.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var u=s.document.createElement("script");u.onreadystatechange=function(){_(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},s.document.documentElement.appendChild(u)}:function(){setTimeout(_,0)};else{var g=new s.MessageChannel;g.port1.onmessage=_,o=function(){g.port2.postMessage(0)}}var v=[];function _(){var u,w;a=!0;for(var C=v.length;C;){for(w=v,v=[],u=-1;++u<C;)w[u]();C=v.length}a=!1}r.exports=function(u){v.push(u)!==1||a||o()}}).call(this,typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var s=n("immediate");function o(){}var a={},l=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function m(C){if(typeof C!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,C!==o&&u(this,C)}function g(C,R,V){this.promise=C,typeof R=="function"&&(this.onFulfilled=R,this.callFulfilled=this.otherCallFulfilled),typeof V=="function"&&(this.onRejected=V,this.callRejected=this.otherCallRejected)}function v(C,R,V){s(function(){var M;try{M=R(V)}catch(F){return a.reject(C,F)}M===C?a.reject(C,new TypeError("Cannot resolve promise with itself")):a.resolve(C,M)})}function _(C){var R=C&&C.then;if(C&&(typeof C=="object"||typeof C=="function")&&typeof R=="function")return function(){R.apply(C,arguments)}}function u(C,R){var V=!1;function M(k){V||(V=!0,a.reject(C,k))}function F(k){V||(V=!0,a.resolve(C,k))}var z=w(function(){R(F,M)});z.status==="error"&&M(z.value)}function w(C,R){var V={};try{V.value=C(R),V.status="success"}catch(M){V.status="error",V.value=M}return V}(r.exports=m).prototype.finally=function(C){if(typeof C!="function")return this;var R=this.constructor;return this.then(function(V){return R.resolve(C()).then(function(){return V})},function(V){return R.resolve(C()).then(function(){throw V})})},m.prototype.catch=function(C){return this.then(null,C)},m.prototype.then=function(C,R){if(typeof C!="function"&&this.state===h||typeof R!="function"&&this.state===l)return this;var V=new this.constructor(o);return this.state!==f?v(V,this.state===h?C:R,this.outcome):this.queue.push(new g(V,C,R)),V},g.prototype.callFulfilled=function(C){a.resolve(this.promise,C)},g.prototype.otherCallFulfilled=function(C){v(this.promise,this.onFulfilled,C)},g.prototype.callRejected=function(C){a.reject(this.promise,C)},g.prototype.otherCallRejected=function(C){v(this.promise,this.onRejected,C)},a.resolve=function(C,R){var V=w(_,R);if(V.status==="error")return a.reject(C,V.value);var M=V.value;if(M)u(C,M);else{C.state=h,C.outcome=R;for(var F=-1,z=C.queue.length;++F<z;)C.queue[F].callFulfilled(R)}return C},a.reject=function(C,R){C.state=l,C.outcome=R;for(var V=-1,M=C.queue.length;++V<M;)C.queue[V].callRejected(R);return C},m.resolve=function(C){return C instanceof this?C:a.resolve(new this(o),C)},m.reject=function(C){var R=new this(o);return a.reject(R,C)},m.all=function(C){var R=this;if(Object.prototype.toString.call(C)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=C.length,M=!1;if(!V)return this.resolve([]);for(var F=new Array(V),z=0,k=-1,E=new this(o);++k<V;)T(C[k],k);return E;function T(P,O){R.resolve(P).then(function(b){F[O]=b,++z!==V||M||(M=!0,a.resolve(E,F))},function(b){M||(M=!0,a.reject(E,b))})}},m.race=function(C){var R=this;if(Object.prototype.toString.call(C)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=C.length,M=!1;if(!V)return this.resolve([]);for(var F=-1,z=new this(o);++F<V;)k=C[F],R.resolve(k).then(function(E){M||(M=!0,a.resolve(z,E))},function(E){M||(M=!0,a.reject(z,E))});var k;return z}},{immediate:36}],38:[function(n,r,i){var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var s=n("./zlib/deflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/messages"),h=n("./zlib/zstream"),f=Object.prototype.toString,m=0,g=-1,v=0,_=8;function u(C){if(!(this instanceof u))return new u(C);this.options=o.assign({level:g,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},C||{});var R=this.options;R.raw&&0<R.windowBits?R.windowBits=-R.windowBits:R.gzip&&0<R.windowBits&&R.windowBits<16&&(R.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var V=s.deflateInit2(this.strm,R.level,R.method,R.windowBits,R.memLevel,R.strategy);if(V!==m)throw new Error(l[V]);if(R.header&&s.deflateSetHeader(this.strm,R.header),R.dictionary){var M;if(M=typeof R.dictionary=="string"?a.string2buf(R.dictionary):f.call(R.dictionary)==="[object ArrayBuffer]"?new Uint8Array(R.dictionary):R.dictionary,(V=s.deflateSetDictionary(this.strm,M))!==m)throw new Error(l[V]);this._dict_set=!0}}function w(C,R){var V=new u(R);if(V.push(C,!0),V.err)throw V.msg||l[V.err];return V.result}u.prototype.push=function(C,R){var V,M,F=this.strm,z=this.options.chunkSize;if(this.ended)return!1;M=R===~~R?R:R===!0?4:0,typeof C=="string"?F.input=a.string2buf(C):f.call(C)==="[object ArrayBuffer]"?F.input=new Uint8Array(C):F.input=C,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new o.Buf8(z),F.next_out=0,F.avail_out=z),(V=s.deflate(F,M))!==1&&V!==m)return this.onEnd(V),!(this.ended=!0);F.avail_out!==0&&(F.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(F.output,F.next_out))):this.onData(o.shrinkBuf(F.output,F.next_out)))}while((0<F.avail_in||F.avail_out===0)&&V!==1);return M===4?(V=s.deflateEnd(this.strm),this.onEnd(V),this.ended=!0,V===m):M!==2||(this.onEnd(m),!(F.avail_out=0))},u.prototype.onData=function(C){this.chunks.push(C)},u.prototype.onEnd=function(C){C===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=C,this.msg=this.strm.msg},i.Deflate=u,i.deflate=w,i.deflateRaw=function(C,R){return(R=R||{}).raw=!0,w(C,R)},i.gzip=function(C,R){return(R=R||{}).gzip=!0,w(C,R)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var s=n("./zlib/inflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/constants"),h=n("./zlib/messages"),f=n("./zlib/zstream"),m=n("./zlib/gzheader"),g=Object.prototype.toString;function v(u){if(!(this instanceof v))return new v(u);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},u||{});var w=this.options;w.raw&&0<=w.windowBits&&w.windowBits<16&&(w.windowBits=-w.windowBits,w.windowBits===0&&(w.windowBits=-15)),!(0<=w.windowBits&&w.windowBits<16)||u&&u.windowBits||(w.windowBits+=32),15<w.windowBits&&w.windowBits<48&&!(15&w.windowBits)&&(w.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var C=s.inflateInit2(this.strm,w.windowBits);if(C!==l.Z_OK)throw new Error(h[C]);this.header=new m,s.inflateGetHeader(this.strm,this.header)}function _(u,w){var C=new v(w);if(C.push(u,!0),C.err)throw C.msg||h[C.err];return C.result}v.prototype.push=function(u,w){var C,R,V,M,F,z,k=this.strm,E=this.options.chunkSize,T=this.options.dictionary,P=!1;if(this.ended)return!1;R=w===~~w?w:w===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof u=="string"?k.input=a.binstring2buf(u):g.call(u)==="[object ArrayBuffer]"?k.input=new Uint8Array(u):k.input=u,k.next_in=0,k.avail_in=k.input.length;do{if(k.avail_out===0&&(k.output=new o.Buf8(E),k.next_out=0,k.avail_out=E),(C=s.inflate(k,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&T&&(z=typeof T=="string"?a.string2buf(T):g.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,C=s.inflateSetDictionary(this.strm,z)),C===l.Z_BUF_ERROR&&P===!0&&(C=l.Z_OK,P=!1),C!==l.Z_STREAM_END&&C!==l.Z_OK)return this.onEnd(C),!(this.ended=!0);k.next_out&&(k.avail_out!==0&&C!==l.Z_STREAM_END&&(k.avail_in!==0||R!==l.Z_FINISH&&R!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(V=a.utf8border(k.output,k.next_out),M=k.next_out-V,F=a.buf2string(k.output,V),k.next_out=M,k.avail_out=E-M,M&&o.arraySet(k.output,k.output,V,M,0),this.onData(F)):this.onData(o.shrinkBuf(k.output,k.next_out)))),k.avail_in===0&&k.avail_out===0&&(P=!0)}while((0<k.avail_in||k.avail_out===0)&&C!==l.Z_STREAM_END);return C===l.Z_STREAM_END&&(R=l.Z_FINISH),R===l.Z_FINISH?(C=s.inflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===l.Z_OK):R!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(k.avail_out=0))},v.prototype.onData=function(u){this.chunks.push(u)},v.prototype.onEnd=function(u){u===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},i.Inflate=v,i.inflate=_,i.inflateRaw=function(u,w){return(w=w||{}).raw=!0,_(u,w)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var m in f)f.hasOwnProperty(m)&&(l[m]=f[m])}}return l},i.shrinkBuf=function(l,h){return l.length===h?l:l.subarray?l.subarray(0,h):(l.length=h,l)};var o={arraySet:function(l,h,f,m,g){if(h.subarray&&l.subarray)l.set(h.subarray(f,f+m),g);else for(var v=0;v<m;v++)l[g+v]=h[f+v]},flattenChunks:function(l){var h,f,m,g,v,_;for(h=m=0,f=l.length;h<f;h++)m+=l[h].length;for(_=new Uint8Array(m),h=g=0,f=l.length;h<f;h++)v=l[h],_.set(v,g),g+=v.length;return _}},a={arraySet:function(l,h,f,m,g){for(var v=0;v<m;v++)l[g+v]=h[f+v]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(n,r,i){var s=n("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),h=0;h<256;h++)l[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(m,g){if(g<65537&&(m.subarray&&a||!m.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(m,g));for(var v="",_=0;_<g;_++)v+=String.fromCharCode(m[_]);return v}l[254]=l[254]=1,i.string2buf=function(m){var g,v,_,u,w,C=m.length,R=0;for(u=0;u<C;u++)(64512&(v=m.charCodeAt(u)))==55296&&u+1<C&&(64512&(_=m.charCodeAt(u+1)))==56320&&(v=65536+(v-55296<<10)+(_-56320),u++),R+=v<128?1:v<2048?2:v<65536?3:4;for(g=new s.Buf8(R),u=w=0;w<R;u++)(64512&(v=m.charCodeAt(u)))==55296&&u+1<C&&(64512&(_=m.charCodeAt(u+1)))==56320&&(v=65536+(v-55296<<10)+(_-56320),u++),v<128?g[w++]=v:(v<2048?g[w++]=192|v>>>6:(v<65536?g[w++]=224|v>>>12:(g[w++]=240|v>>>18,g[w++]=128|v>>>12&63),g[w++]=128|v>>>6&63),g[w++]=128|63&v);return g},i.buf2binstring=function(m){return f(m,m.length)},i.binstring2buf=function(m){for(var g=new s.Buf8(m.length),v=0,_=g.length;v<_;v++)g[v]=m.charCodeAt(v);return g},i.buf2string=function(m,g){var v,_,u,w,C=g||m.length,R=new Array(2*C);for(v=_=0;v<C;)if((u=m[v++])<128)R[_++]=u;else if(4<(w=l[u]))R[_++]=65533,v+=w-1;else{for(u&=w===2?31:w===3?15:7;1<w&&v<C;)u=u<<6|63&m[v++],w--;1<w?R[_++]=65533:u<65536?R[_++]=u:(u-=65536,R[_++]=55296|u>>10&1023,R[_++]=56320|1023&u)}return f(R,_)},i.utf8border=function(m,g){var v;for((g=g||m.length)>m.length&&(g=m.length),v=g-1;0<=v&&(192&m[v])==128;)v--;return v<0||v===0?g:v+l[m[v]]>g?v:g}},{"./common":41}],43:[function(n,r,i){r.exports=function(s,o,a,l){for(var h=65535&s|0,f=s>>>16&65535|0,m=0;a!==0;){for(a-=m=2e3<a?2e3:a;f=f+(h=h+o[l++]|0)|0,--m;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();r.exports=function(o,a,l,h){var f=s,m=h+l;o^=-1;for(var g=h;g<m;g++)o=o>>>8^f[255&(o^a[g])];return-1^o}},{}],46:[function(n,r,i){var s,o=n("../utils/common"),a=n("./trees"),l=n("./adler32"),h=n("./crc32"),f=n("./messages"),m=0,g=4,v=0,_=-2,u=-1,w=4,C=2,R=8,V=9,M=286,F=30,z=19,k=2*M+1,E=15,T=3,P=258,O=P+T+1,b=42,S=113,I=1,Q=2,re=3,$=4;function ue(p,G){return p.msg=f[G],G}function ne(p){return(p<<1)-(4<p?9:0)}function _e(p){for(var G=p.length;0<=--G;)p[G]=0}function te(p){var G=p.state,L=G.pending;L>p.avail_out&&(L=p.avail_out),L!==0&&(o.arraySet(p.output,G.pending_buf,G.pending_out,L,p.next_out),p.next_out+=L,G.pending_out+=L,p.total_out+=L,p.avail_out-=L,G.pending-=L,G.pending===0&&(G.pending_out=0))}function Z(p,G){a._tr_flush_block(p,0<=p.block_start?p.block_start:-1,p.strstart-p.block_start,G),p.block_start=p.strstart,te(p.strm)}function Ee(p,G){p.pending_buf[p.pending++]=G}function ye(p,G){p.pending_buf[p.pending++]=G>>>8&255,p.pending_buf[p.pending++]=255&G}function X(p,G){var L,N,D=p.max_chain_length,W=p.strstart,j=p.prev_length,A=p.nice_match,H=p.strstart>p.w_size-O?p.strstart-(p.w_size-O):0,Y=p.window,ie=p.w_mask,le=p.prev,ge=p.strstart+P,Se=Y[W+j-1],ae=Y[W+j];p.prev_length>=p.good_match&&(D>>=2),A>p.lookahead&&(A=p.lookahead);do if(Y[(L=G)+j]===ae&&Y[L+j-1]===Se&&Y[L]===Y[W]&&Y[++L]===Y[W+1]){W+=2,L++;do;while(Y[++W]===Y[++L]&&Y[++W]===Y[++L]&&Y[++W]===Y[++L]&&Y[++W]===Y[++L]&&Y[++W]===Y[++L]&&Y[++W]===Y[++L]&&Y[++W]===Y[++L]&&Y[++W]===Y[++L]&&W<ge);if(N=P-(ge-W),W=ge-P,j<N){if(p.match_start=G,A<=(j=N))break;Se=Y[W+j-1],ae=Y[W+j]}}while((G=le[G&ie])>H&&--D!=0);return j<=p.lookahead?j:p.lookahead}function we(p){var G,L,N,D,W,j,A,H,Y,ie,le=p.w_size;do{if(D=p.window_size-p.lookahead-p.strstart,p.strstart>=le+(le-O)){for(o.arraySet(p.window,p.window,le,le,0),p.match_start-=le,p.strstart-=le,p.block_start-=le,G=L=p.hash_size;N=p.head[--G],p.head[G]=le<=N?N-le:0,--L;);for(G=L=le;N=p.prev[--G],p.prev[G]=le<=N?N-le:0,--L;);D+=le}if(p.strm.avail_in===0)break;if(j=p.strm,A=p.window,H=p.strstart+p.lookahead,Y=D,ie=void 0,ie=j.avail_in,Y<ie&&(ie=Y),L=ie===0?0:(j.avail_in-=ie,o.arraySet(A,j.input,j.next_in,ie,H),j.state.wrap===1?j.adler=l(j.adler,A,ie,H):j.state.wrap===2&&(j.adler=h(j.adler,A,ie,H)),j.next_in+=ie,j.total_in+=ie,ie),p.lookahead+=L,p.lookahead+p.insert>=T)for(W=p.strstart-p.insert,p.ins_h=p.window[W],p.ins_h=(p.ins_h<<p.hash_shift^p.window[W+1])&p.hash_mask;p.insert&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[W+T-1])&p.hash_mask,p.prev[W&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=W,W++,p.insert--,!(p.lookahead+p.insert<T)););}while(p.lookahead<O&&p.strm.avail_in!==0)}function se(p,G){for(var L,N;;){if(p.lookahead<O){if(we(p),p.lookahead<O&&G===m)return I;if(p.lookahead===0)break}if(L=0,p.lookahead>=T&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+T-1])&p.hash_mask,L=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),L!==0&&p.strstart-L<=p.w_size-O&&(p.match_length=X(p,L)),p.match_length>=T)if(N=a._tr_tally(p,p.strstart-p.match_start,p.match_length-T),p.lookahead-=p.match_length,p.match_length<=p.max_lazy_match&&p.lookahead>=T){for(p.match_length--;p.strstart++,p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+T-1])&p.hash_mask,L=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart,--p.match_length!=0;);p.strstart++}else p.strstart+=p.match_length,p.match_length=0,p.ins_h=p.window[p.strstart],p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+1])&p.hash_mask;else N=a._tr_tally(p,0,p.window[p.strstart]),p.lookahead--,p.strstart++;if(N&&(Z(p,!1),p.strm.avail_out===0))return I}return p.insert=p.strstart<T-1?p.strstart:T-1,G===g?(Z(p,!0),p.strm.avail_out===0?re:$):p.last_lit&&(Z(p,!1),p.strm.avail_out===0)?I:Q}function de(p,G){for(var L,N,D;;){if(p.lookahead<O){if(we(p),p.lookahead<O&&G===m)return I;if(p.lookahead===0)break}if(L=0,p.lookahead>=T&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+T-1])&p.hash_mask,L=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),p.prev_length=p.match_length,p.prev_match=p.match_start,p.match_length=T-1,L!==0&&p.prev_length<p.max_lazy_match&&p.strstart-L<=p.w_size-O&&(p.match_length=X(p,L),p.match_length<=5&&(p.strategy===1||p.match_length===T&&4096<p.strstart-p.match_start)&&(p.match_length=T-1)),p.prev_length>=T&&p.match_length<=p.prev_length){for(D=p.strstart+p.lookahead-T,N=a._tr_tally(p,p.strstart-1-p.prev_match,p.prev_length-T),p.lookahead-=p.prev_length-1,p.prev_length-=2;++p.strstart<=D&&(p.ins_h=(p.ins_h<<p.hash_shift^p.window[p.strstart+T-1])&p.hash_mask,L=p.prev[p.strstart&p.w_mask]=p.head[p.ins_h],p.head[p.ins_h]=p.strstart),--p.prev_length!=0;);if(p.match_available=0,p.match_length=T-1,p.strstart++,N&&(Z(p,!1),p.strm.avail_out===0))return I}else if(p.match_available){if((N=a._tr_tally(p,0,p.window[p.strstart-1]))&&Z(p,!1),p.strstart++,p.lookahead--,p.strm.avail_out===0)return I}else p.match_available=1,p.strstart++,p.lookahead--}return p.match_available&&(N=a._tr_tally(p,0,p.window[p.strstart-1]),p.match_available=0),p.insert=p.strstart<T-1?p.strstart:T-1,G===g?(Z(p,!0),p.strm.avail_out===0?re:$):p.last_lit&&(Z(p,!1),p.strm.avail_out===0)?I:Q}function he(p,G,L,N,D){this.good_length=p,this.max_lazy=G,this.nice_length=L,this.max_chain=N,this.func=D}function be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=R,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*k),this.dyn_dtree=new o.Buf16(2*(2*F+1)),this.bl_tree=new o.Buf16(2*(2*z+1)),_e(this.dyn_ltree),_e(this.dyn_dtree),_e(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(E+1),this.heap=new o.Buf16(2*M+1),_e(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*M+1),_e(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ke(p){var G;return p&&p.state?(p.total_in=p.total_out=0,p.data_type=C,(G=p.state).pending=0,G.pending_out=0,G.wrap<0&&(G.wrap=-G.wrap),G.status=G.wrap?b:S,p.adler=G.wrap===2?0:1,G.last_flush=m,a._tr_init(G),v):ue(p,_)}function q(p){var G=ke(p);return G===v&&function(L){L.window_size=2*L.w_size,_e(L.head),L.max_lazy_match=s[L.level].max_lazy,L.good_match=s[L.level].good_length,L.nice_match=s[L.level].nice_length,L.max_chain_length=s[L.level].max_chain,L.strstart=0,L.block_start=0,L.lookahead=0,L.insert=0,L.match_length=L.prev_length=T-1,L.match_available=0,L.ins_h=0}(p.state),G}function U(p,G,L,N,D,W){if(!p)return _;var j=1;if(G===u&&(G=6),N<0?(j=0,N=-N):15<N&&(j=2,N-=16),D<1||V<D||L!==R||N<8||15<N||G<0||9<G||W<0||w<W)return ue(p,_);N===8&&(N=9);var A=new be;return(p.state=A).strm=p,A.wrap=j,A.gzhead=null,A.w_bits=N,A.w_size=1<<A.w_bits,A.w_mask=A.w_size-1,A.hash_bits=D+7,A.hash_size=1<<A.hash_bits,A.hash_mask=A.hash_size-1,A.hash_shift=~~((A.hash_bits+T-1)/T),A.window=new o.Buf8(2*A.w_size),A.head=new o.Buf16(A.hash_size),A.prev=new o.Buf16(A.w_size),A.lit_bufsize=1<<D+6,A.pending_buf_size=4*A.lit_bufsize,A.pending_buf=new o.Buf8(A.pending_buf_size),A.d_buf=1*A.lit_bufsize,A.l_buf=3*A.lit_bufsize,A.level=G,A.strategy=W,A.method=L,q(p)}s=[new he(0,0,0,0,function(p,G){var L=65535;for(L>p.pending_buf_size-5&&(L=p.pending_buf_size-5);;){if(p.lookahead<=1){if(we(p),p.lookahead===0&&G===m)return I;if(p.lookahead===0)break}p.strstart+=p.lookahead,p.lookahead=0;var N=p.block_start+L;if((p.strstart===0||p.strstart>=N)&&(p.lookahead=p.strstart-N,p.strstart=N,Z(p,!1),p.strm.avail_out===0)||p.strstart-p.block_start>=p.w_size-O&&(Z(p,!1),p.strm.avail_out===0))return I}return p.insert=0,G===g?(Z(p,!0),p.strm.avail_out===0?re:$):(p.strstart>p.block_start&&(Z(p,!1),p.strm.avail_out),I)}),new he(4,4,8,4,se),new he(4,5,16,8,se),new he(4,6,32,32,se),new he(4,4,16,16,de),new he(8,16,32,32,de),new he(8,16,128,128,de),new he(8,32,128,256,de),new he(32,128,258,1024,de),new he(32,258,258,4096,de)],i.deflateInit=function(p,G){return U(p,G,R,15,8,0)},i.deflateInit2=U,i.deflateReset=q,i.deflateResetKeep=ke,i.deflateSetHeader=function(p,G){return p&&p.state?p.state.wrap!==2?_:(p.state.gzhead=G,v):_},i.deflate=function(p,G){var L,N,D,W;if(!p||!p.state||5<G||G<0)return p?ue(p,_):_;if(N=p.state,!p.output||!p.input&&p.avail_in!==0||N.status===666&&G!==g)return ue(p,p.avail_out===0?-5:_);if(N.strm=p,L=N.last_flush,N.last_flush=G,N.status===b)if(N.wrap===2)p.adler=0,Ee(N,31),Ee(N,139),Ee(N,8),N.gzhead?(Ee(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),Ee(N,255&N.gzhead.time),Ee(N,N.gzhead.time>>8&255),Ee(N,N.gzhead.time>>16&255),Ee(N,N.gzhead.time>>24&255),Ee(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),Ee(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(Ee(N,255&N.gzhead.extra.length),Ee(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(p.adler=h(p.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(Ee(N,0),Ee(N,0),Ee(N,0),Ee(N,0),Ee(N,0),Ee(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),Ee(N,3),N.status=S);else{var j=R+(N.w_bits-8<<4)<<8;j|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(j|=32),j+=31-j%31,N.status=S,ye(N,j),N.strstart!==0&&(ye(N,p.adler>>>16),ye(N,65535&p.adler)),p.adler=1}if(N.status===69)if(N.gzhead.extra){for(D=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>D&&(p.adler=h(p.adler,N.pending_buf,N.pending-D,D)),te(p),D=N.pending,N.pending!==N.pending_buf_size));)Ee(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>D&&(p.adler=h(p.adler,N.pending_buf,N.pending-D,D)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){D=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>D&&(p.adler=h(p.adler,N.pending_buf,N.pending-D,D)),te(p),D=N.pending,N.pending===N.pending_buf_size)){W=1;break}W=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,Ee(N,W)}while(W!==0);N.gzhead.hcrc&&N.pending>D&&(p.adler=h(p.adler,N.pending_buf,N.pending-D,D)),W===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){D=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>D&&(p.adler=h(p.adler,N.pending_buf,N.pending-D,D)),te(p),D=N.pending,N.pending===N.pending_buf_size)){W=1;break}W=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,Ee(N,W)}while(W!==0);N.gzhead.hcrc&&N.pending>D&&(p.adler=h(p.adler,N.pending_buf,N.pending-D,D)),W===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&te(p),N.pending+2<=N.pending_buf_size&&(Ee(N,255&p.adler),Ee(N,p.adler>>8&255),p.adler=0,N.status=S)):N.status=S),N.pending!==0){if(te(p),p.avail_out===0)return N.last_flush=-1,v}else if(p.avail_in===0&&ne(G)<=ne(L)&&G!==g)return ue(p,-5);if(N.status===666&&p.avail_in!==0)return ue(p,-5);if(p.avail_in!==0||N.lookahead!==0||G!==m&&N.status!==666){var A=N.strategy===2?function(H,Y){for(var ie;;){if(H.lookahead===0&&(we(H),H.lookahead===0)){if(Y===m)return I;break}if(H.match_length=0,ie=a._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++,ie&&(Z(H,!1),H.strm.avail_out===0))return I}return H.insert=0,Y===g?(Z(H,!0),H.strm.avail_out===0?re:$):H.last_lit&&(Z(H,!1),H.strm.avail_out===0)?I:Q}(N,G):N.strategy===3?function(H,Y){for(var ie,le,ge,Se,ae=H.window;;){if(H.lookahead<=P){if(we(H),H.lookahead<=P&&Y===m)return I;if(H.lookahead===0)break}if(H.match_length=0,H.lookahead>=T&&0<H.strstart&&(le=ae[ge=H.strstart-1])===ae[++ge]&&le===ae[++ge]&&le===ae[++ge]){Se=H.strstart+P;do;while(le===ae[++ge]&&le===ae[++ge]&&le===ae[++ge]&&le===ae[++ge]&&le===ae[++ge]&&le===ae[++ge]&&le===ae[++ge]&&le===ae[++ge]&&ge<Se);H.match_length=P-(Se-ge),H.match_length>H.lookahead&&(H.match_length=H.lookahead)}if(H.match_length>=T?(ie=a._tr_tally(H,1,H.match_length-T),H.lookahead-=H.match_length,H.strstart+=H.match_length,H.match_length=0):(ie=a._tr_tally(H,0,H.window[H.strstart]),H.lookahead--,H.strstart++),ie&&(Z(H,!1),H.strm.avail_out===0))return I}return H.insert=0,Y===g?(Z(H,!0),H.strm.avail_out===0?re:$):H.last_lit&&(Z(H,!1),H.strm.avail_out===0)?I:Q}(N,G):s[N.level].func(N,G);if(A!==re&&A!==$||(N.status=666),A===I||A===re)return p.avail_out===0&&(N.last_flush=-1),v;if(A===Q&&(G===1?a._tr_align(N):G!==5&&(a._tr_stored_block(N,0,0,!1),G===3&&(_e(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),te(p),p.avail_out===0))return N.last_flush=-1,v}return G!==g?v:N.wrap<=0?1:(N.wrap===2?(Ee(N,255&p.adler),Ee(N,p.adler>>8&255),Ee(N,p.adler>>16&255),Ee(N,p.adler>>24&255),Ee(N,255&p.total_in),Ee(N,p.total_in>>8&255),Ee(N,p.total_in>>16&255),Ee(N,p.total_in>>24&255)):(ye(N,p.adler>>>16),ye(N,65535&p.adler)),te(p),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?v:1)},i.deflateEnd=function(p){var G;return p&&p.state?(G=p.state.status)!==b&&G!==69&&G!==73&&G!==91&&G!==103&&G!==S&&G!==666?ue(p,_):(p.state=null,G===S?ue(p,-3):v):_},i.deflateSetDictionary=function(p,G){var L,N,D,W,j,A,H,Y,ie=G.length;if(!p||!p.state||(W=(L=p.state).wrap)===2||W===1&&L.status!==b||L.lookahead)return _;for(W===1&&(p.adler=l(p.adler,G,ie,0)),L.wrap=0,ie>=L.w_size&&(W===0&&(_e(L.head),L.strstart=0,L.block_start=0,L.insert=0),Y=new o.Buf8(L.w_size),o.arraySet(Y,G,ie-L.w_size,L.w_size,0),G=Y,ie=L.w_size),j=p.avail_in,A=p.next_in,H=p.input,p.avail_in=ie,p.next_in=0,p.input=G,we(L);L.lookahead>=T;){for(N=L.strstart,D=L.lookahead-(T-1);L.ins_h=(L.ins_h<<L.hash_shift^L.window[N+T-1])&L.hash_mask,L.prev[N&L.w_mask]=L.head[L.ins_h],L.head[L.ins_h]=N,N++,--D;);L.strstart=N,L.lookahead=T-1,we(L)}return L.strstart+=L.lookahead,L.block_start=L.strstart,L.insert=L.lookahead,L.lookahead=0,L.match_length=L.prev_length=T-1,L.match_available=0,p.next_in=A,p.input=H,p.avail_in=j,L.wrap=W,v},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(s,o){var a,l,h,f,m,g,v,_,u,w,C,R,V,M,F,z,k,E,T,P,O,b,S,I,Q;a=s.state,l=s.next_in,I=s.input,h=l+(s.avail_in-5),f=s.next_out,Q=s.output,m=f-(o-s.avail_out),g=f+(s.avail_out-257),v=a.dmax,_=a.wsize,u=a.whave,w=a.wnext,C=a.window,R=a.hold,V=a.bits,M=a.lencode,F=a.distcode,z=(1<<a.lenbits)-1,k=(1<<a.distbits)-1;e:do{V<15&&(R+=I[l++]<<V,V+=8,R+=I[l++]<<V,V+=8),E=M[R&z];t:for(;;){if(R>>>=T=E>>>24,V-=T,(T=E>>>16&255)===0)Q[f++]=65535&E;else{if(!(16&T)){if(!(64&T)){E=M[(65535&E)+(R&(1<<T)-1)];continue t}if(32&T){a.mode=12;break e}s.msg="invalid literal/length code",a.mode=30;break e}P=65535&E,(T&=15)&&(V<T&&(R+=I[l++]<<V,V+=8),P+=R&(1<<T)-1,R>>>=T,V-=T),V<15&&(R+=I[l++]<<V,V+=8,R+=I[l++]<<V,V+=8),E=F[R&k];n:for(;;){if(R>>>=T=E>>>24,V-=T,!(16&(T=E>>>16&255))){if(!(64&T)){E=F[(65535&E)+(R&(1<<T)-1)];continue n}s.msg="invalid distance code",a.mode=30;break e}if(O=65535&E,V<(T&=15)&&(R+=I[l++]<<V,(V+=8)<T&&(R+=I[l++]<<V,V+=8)),v<(O+=R&(1<<T)-1)){s.msg="invalid distance too far back",a.mode=30;break e}if(R>>>=T,V-=T,(T=f-m)<O){if(u<(T=O-T)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break e}if(S=C,(b=0)===w){if(b+=_-T,T<P){for(P-=T;Q[f++]=C[b++],--T;);b=f-O,S=Q}}else if(w<T){if(b+=_+w-T,(T-=w)<P){for(P-=T;Q[f++]=C[b++],--T;);if(b=0,w<P){for(P-=T=w;Q[f++]=C[b++],--T;);b=f-O,S=Q}}}else if(b+=w-T,T<P){for(P-=T;Q[f++]=C[b++],--T;);b=f-O,S=Q}for(;2<P;)Q[f++]=S[b++],Q[f++]=S[b++],Q[f++]=S[b++],P-=3;P&&(Q[f++]=S[b++],1<P&&(Q[f++]=S[b++]))}else{for(b=f-O;Q[f++]=Q[b++],Q[f++]=Q[b++],Q[f++]=Q[b++],2<(P-=3););P&&(Q[f++]=Q[b++],1<P&&(Q[f++]=Q[b++]))}break}}break}}while(l<h&&f<g);l-=P=V>>3,R&=(1<<(V-=P<<3))-1,s.next_in=l,s.next_out=f,s.avail_in=l<h?h-l+5:5-(l-h),s.avail_out=f<g?g-f+257:257-(f-g),a.hold=R,a.bits=V}},{}],49:[function(n,r,i){var s=n("../utils/common"),o=n("./adler32"),a=n("./crc32"),l=n("./inffast"),h=n("./inftrees"),f=1,m=2,g=0,v=-2,_=1,u=852,w=592;function C(b){return(b>>>24&255)+(b>>>8&65280)+((65280&b)<<8)+((255&b)<<24)}function R(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function V(b){var S;return b&&b.state?(S=b.state,b.total_in=b.total_out=S.total=0,b.msg="",S.wrap&&(b.adler=1&S.wrap),S.mode=_,S.last=0,S.havedict=0,S.dmax=32768,S.head=null,S.hold=0,S.bits=0,S.lencode=S.lendyn=new s.Buf32(u),S.distcode=S.distdyn=new s.Buf32(w),S.sane=1,S.back=-1,g):v}function M(b){var S;return b&&b.state?((S=b.state).wsize=0,S.whave=0,S.wnext=0,V(b)):v}function F(b,S){var I,Q;return b&&b.state?(Q=b.state,S<0?(I=0,S=-S):(I=1+(S>>4),S<48&&(S&=15)),S&&(S<8||15<S)?v:(Q.window!==null&&Q.wbits!==S&&(Q.window=null),Q.wrap=I,Q.wbits=S,M(b))):v}function z(b,S){var I,Q;return b?(Q=new R,(b.state=Q).window=null,(I=F(b,S))!==g&&(b.state=null),I):v}var k,E,T=!0;function P(b){if(T){var S;for(k=new s.Buf32(512),E=new s.Buf32(32),S=0;S<144;)b.lens[S++]=8;for(;S<256;)b.lens[S++]=9;for(;S<280;)b.lens[S++]=7;for(;S<288;)b.lens[S++]=8;for(h(f,b.lens,0,288,k,0,b.work,{bits:9}),S=0;S<32;)b.lens[S++]=5;h(m,b.lens,0,32,E,0,b.work,{bits:5}),T=!1}b.lencode=k,b.lenbits=9,b.distcode=E,b.distbits=5}function O(b,S,I,Q){var re,$=b.state;return $.window===null&&($.wsize=1<<$.wbits,$.wnext=0,$.whave=0,$.window=new s.Buf8($.wsize)),Q>=$.wsize?(s.arraySet($.window,S,I-$.wsize,$.wsize,0),$.wnext=0,$.whave=$.wsize):(Q<(re=$.wsize-$.wnext)&&(re=Q),s.arraySet($.window,S,I-Q,re,$.wnext),(Q-=re)?(s.arraySet($.window,S,I-Q,Q,0),$.wnext=Q,$.whave=$.wsize):($.wnext+=re,$.wnext===$.wsize&&($.wnext=0),$.whave<$.wsize&&($.whave+=re))),0}i.inflateReset=M,i.inflateReset2=F,i.inflateResetKeep=V,i.inflateInit=function(b){return z(b,15)},i.inflateInit2=z,i.inflate=function(b,S){var I,Q,re,$,ue,ne,_e,te,Z,Ee,ye,X,we,se,de,he,be,ke,q,U,p,G,L,N,D=0,W=new s.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!b||!b.state||!b.output||!b.input&&b.avail_in!==0)return v;(I=b.state).mode===12&&(I.mode=13),ue=b.next_out,re=b.output,_e=b.avail_out,$=b.next_in,Q=b.input,ne=b.avail_in,te=I.hold,Z=I.bits,Ee=ne,ye=_e,G=g;e:for(;;)switch(I.mode){case _:if(I.wrap===0){I.mode=13;break}for(;Z<16;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(2&I.wrap&&te===35615){W[I.check=0]=255&te,W[1]=te>>>8&255,I.check=a(I.check,W,2,0),Z=te=0,I.mode=2;break}if(I.flags=0,I.head&&(I.head.done=!1),!(1&I.wrap)||(((255&te)<<8)+(te>>8))%31){b.msg="incorrect header check",I.mode=30;break}if((15&te)!=8){b.msg="unknown compression method",I.mode=30;break}if(Z-=4,p=8+(15&(te>>>=4)),I.wbits===0)I.wbits=p;else if(p>I.wbits){b.msg="invalid window size",I.mode=30;break}I.dmax=1<<p,b.adler=I.check=1,I.mode=512&te?10:12,Z=te=0;break;case 2:for(;Z<16;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(I.flags=te,(255&I.flags)!=8){b.msg="unknown compression method",I.mode=30;break}if(57344&I.flags){b.msg="unknown header flags set",I.mode=30;break}I.head&&(I.head.text=te>>8&1),512&I.flags&&(W[0]=255&te,W[1]=te>>>8&255,I.check=a(I.check,W,2,0)),Z=te=0,I.mode=3;case 3:for(;Z<32;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}I.head&&(I.head.time=te),512&I.flags&&(W[0]=255&te,W[1]=te>>>8&255,W[2]=te>>>16&255,W[3]=te>>>24&255,I.check=a(I.check,W,4,0)),Z=te=0,I.mode=4;case 4:for(;Z<16;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}I.head&&(I.head.xflags=255&te,I.head.os=te>>8),512&I.flags&&(W[0]=255&te,W[1]=te>>>8&255,I.check=a(I.check,W,2,0)),Z=te=0,I.mode=5;case 5:if(1024&I.flags){for(;Z<16;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}I.length=te,I.head&&(I.head.extra_len=te),512&I.flags&&(W[0]=255&te,W[1]=te>>>8&255,I.check=a(I.check,W,2,0)),Z=te=0}else I.head&&(I.head.extra=null);I.mode=6;case 6:if(1024&I.flags&&(ne<(X=I.length)&&(X=ne),X&&(I.head&&(p=I.head.extra_len-I.length,I.head.extra||(I.head.extra=new Array(I.head.extra_len)),s.arraySet(I.head.extra,Q,$,X,p)),512&I.flags&&(I.check=a(I.check,Q,X,$)),ne-=X,$+=X,I.length-=X),I.length))break e;I.length=0,I.mode=7;case 7:if(2048&I.flags){if(ne===0)break e;for(X=0;p=Q[$+X++],I.head&&p&&I.length<65536&&(I.head.name+=String.fromCharCode(p)),p&&X<ne;);if(512&I.flags&&(I.check=a(I.check,Q,X,$)),ne-=X,$+=X,p)break e}else I.head&&(I.head.name=null);I.length=0,I.mode=8;case 8:if(4096&I.flags){if(ne===0)break e;for(X=0;p=Q[$+X++],I.head&&p&&I.length<65536&&(I.head.comment+=String.fromCharCode(p)),p&&X<ne;);if(512&I.flags&&(I.check=a(I.check,Q,X,$)),ne-=X,$+=X,p)break e}else I.head&&(I.head.comment=null);I.mode=9;case 9:if(512&I.flags){for(;Z<16;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(te!==(65535&I.check)){b.msg="header crc mismatch",I.mode=30;break}Z=te=0}I.head&&(I.head.hcrc=I.flags>>9&1,I.head.done=!0),b.adler=I.check=0,I.mode=12;break;case 10:for(;Z<32;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}b.adler=I.check=C(te),Z=te=0,I.mode=11;case 11:if(I.havedict===0)return b.next_out=ue,b.avail_out=_e,b.next_in=$,b.avail_in=ne,I.hold=te,I.bits=Z,2;b.adler=I.check=1,I.mode=12;case 12:if(S===5||S===6)break e;case 13:if(I.last){te>>>=7&Z,Z-=7&Z,I.mode=27;break}for(;Z<3;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}switch(I.last=1&te,Z-=1,3&(te>>>=1)){case 0:I.mode=14;break;case 1:if(P(I),I.mode=20,S!==6)break;te>>>=2,Z-=2;break e;case 2:I.mode=17;break;case 3:b.msg="invalid block type",I.mode=30}te>>>=2,Z-=2;break;case 14:for(te>>>=7&Z,Z-=7&Z;Z<32;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if((65535&te)!=(te>>>16^65535)){b.msg="invalid stored block lengths",I.mode=30;break}if(I.length=65535&te,Z=te=0,I.mode=15,S===6)break e;case 15:I.mode=16;case 16:if(X=I.length){if(ne<X&&(X=ne),_e<X&&(X=_e),X===0)break e;s.arraySet(re,Q,$,X,ue),ne-=X,$+=X,_e-=X,ue+=X,I.length-=X;break}I.mode=12;break;case 17:for(;Z<14;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(I.nlen=257+(31&te),te>>>=5,Z-=5,I.ndist=1+(31&te),te>>>=5,Z-=5,I.ncode=4+(15&te),te>>>=4,Z-=4,286<I.nlen||30<I.ndist){b.msg="too many length or distance symbols",I.mode=30;break}I.have=0,I.mode=18;case 18:for(;I.have<I.ncode;){for(;Z<3;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}I.lens[j[I.have++]]=7&te,te>>>=3,Z-=3}for(;I.have<19;)I.lens[j[I.have++]]=0;if(I.lencode=I.lendyn,I.lenbits=7,L={bits:I.lenbits},G=h(0,I.lens,0,19,I.lencode,0,I.work,L),I.lenbits=L.bits,G){b.msg="invalid code lengths set",I.mode=30;break}I.have=0,I.mode=19;case 19:for(;I.have<I.nlen+I.ndist;){for(;he=(D=I.lencode[te&(1<<I.lenbits)-1])>>>16&255,be=65535&D,!((de=D>>>24)<=Z);){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(be<16)te>>>=de,Z-=de,I.lens[I.have++]=be;else{if(be===16){for(N=de+2;Z<N;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(te>>>=de,Z-=de,I.have===0){b.msg="invalid bit length repeat",I.mode=30;break}p=I.lens[I.have-1],X=3+(3&te),te>>>=2,Z-=2}else if(be===17){for(N=de+3;Z<N;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}Z-=de,p=0,X=3+(7&(te>>>=de)),te>>>=3,Z-=3}else{for(N=de+7;Z<N;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}Z-=de,p=0,X=11+(127&(te>>>=de)),te>>>=7,Z-=7}if(I.have+X>I.nlen+I.ndist){b.msg="invalid bit length repeat",I.mode=30;break}for(;X--;)I.lens[I.have++]=p}}if(I.mode===30)break;if(I.lens[256]===0){b.msg="invalid code -- missing end-of-block",I.mode=30;break}if(I.lenbits=9,L={bits:I.lenbits},G=h(f,I.lens,0,I.nlen,I.lencode,0,I.work,L),I.lenbits=L.bits,G){b.msg="invalid literal/lengths set",I.mode=30;break}if(I.distbits=6,I.distcode=I.distdyn,L={bits:I.distbits},G=h(m,I.lens,I.nlen,I.ndist,I.distcode,0,I.work,L),I.distbits=L.bits,G){b.msg="invalid distances set",I.mode=30;break}if(I.mode=20,S===6)break e;case 20:I.mode=21;case 21:if(6<=ne&&258<=_e){b.next_out=ue,b.avail_out=_e,b.next_in=$,b.avail_in=ne,I.hold=te,I.bits=Z,l(b,ye),ue=b.next_out,re=b.output,_e=b.avail_out,$=b.next_in,Q=b.input,ne=b.avail_in,te=I.hold,Z=I.bits,I.mode===12&&(I.back=-1);break}for(I.back=0;he=(D=I.lencode[te&(1<<I.lenbits)-1])>>>16&255,be=65535&D,!((de=D>>>24)<=Z);){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(he&&!(240&he)){for(ke=de,q=he,U=be;he=(D=I.lencode[U+((te&(1<<ke+q)-1)>>ke)])>>>16&255,be=65535&D,!(ke+(de=D>>>24)<=Z);){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}te>>>=ke,Z-=ke,I.back+=ke}if(te>>>=de,Z-=de,I.back+=de,I.length=be,he===0){I.mode=26;break}if(32&he){I.back=-1,I.mode=12;break}if(64&he){b.msg="invalid literal/length code",I.mode=30;break}I.extra=15&he,I.mode=22;case 22:if(I.extra){for(N=I.extra;Z<N;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}I.length+=te&(1<<I.extra)-1,te>>>=I.extra,Z-=I.extra,I.back+=I.extra}I.was=I.length,I.mode=23;case 23:for(;he=(D=I.distcode[te&(1<<I.distbits)-1])>>>16&255,be=65535&D,!((de=D>>>24)<=Z);){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(!(240&he)){for(ke=de,q=he,U=be;he=(D=I.distcode[U+((te&(1<<ke+q)-1)>>ke)])>>>16&255,be=65535&D,!(ke+(de=D>>>24)<=Z);){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}te>>>=ke,Z-=ke,I.back+=ke}if(te>>>=de,Z-=de,I.back+=de,64&he){b.msg="invalid distance code",I.mode=30;break}I.offset=be,I.extra=15&he,I.mode=24;case 24:if(I.extra){for(N=I.extra;Z<N;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}I.offset+=te&(1<<I.extra)-1,te>>>=I.extra,Z-=I.extra,I.back+=I.extra}if(I.offset>I.dmax){b.msg="invalid distance too far back",I.mode=30;break}I.mode=25;case 25:if(_e===0)break e;if(X=ye-_e,I.offset>X){if((X=I.offset-X)>I.whave&&I.sane){b.msg="invalid distance too far back",I.mode=30;break}we=X>I.wnext?(X-=I.wnext,I.wsize-X):I.wnext-X,X>I.length&&(X=I.length),se=I.window}else se=re,we=ue-I.offset,X=I.length;for(_e<X&&(X=_e),_e-=X,I.length-=X;re[ue++]=se[we++],--X;);I.length===0&&(I.mode=21);break;case 26:if(_e===0)break e;re[ue++]=I.length,_e--,I.mode=21;break;case 27:if(I.wrap){for(;Z<32;){if(ne===0)break e;ne--,te|=Q[$++]<<Z,Z+=8}if(ye-=_e,b.total_out+=ye,I.total+=ye,ye&&(b.adler=I.check=I.flags?a(I.check,re,ye,ue-ye):o(I.check,re,ye,ue-ye)),ye=_e,(I.flags?te:C(te))!==I.check){b.msg="incorrect data check",I.mode=30;break}Z=te=0}I.mode=28;case 28:if(I.wrap&&I.flags){for(;Z<32;){if(ne===0)break e;ne--,te+=Q[$++]<<Z,Z+=8}if(te!==(4294967295&I.total)){b.msg="incorrect length check",I.mode=30;break}Z=te=0}I.mode=29;case 29:G=1;break e;case 30:G=-3;break e;case 31:return-4;case 32:default:return v}return b.next_out=ue,b.avail_out=_e,b.next_in=$,b.avail_in=ne,I.hold=te,I.bits=Z,(I.wsize||ye!==b.avail_out&&I.mode<30&&(I.mode<27||S!==4))&&O(b,b.output,b.next_out,ye-b.avail_out)?(I.mode=31,-4):(Ee-=b.avail_in,ye-=b.avail_out,b.total_in+=Ee,b.total_out+=ye,I.total+=ye,I.wrap&&ye&&(b.adler=I.check=I.flags?a(I.check,re,ye,b.next_out-ye):o(I.check,re,ye,b.next_out-ye)),b.data_type=I.bits+(I.last?64:0)+(I.mode===12?128:0)+(I.mode===20||I.mode===15?256:0),(Ee==0&&ye===0||S===4)&&G===g&&(G=-5),G)},i.inflateEnd=function(b){if(!b||!b.state)return v;var S=b.state;return S.window&&(S.window=null),b.state=null,g},i.inflateGetHeader=function(b,S){var I;return b&&b.state&&2&(I=b.state).wrap?((I.head=S).done=!1,g):v},i.inflateSetDictionary=function(b,S){var I,Q=S.length;return b&&b.state?(I=b.state).wrap!==0&&I.mode!==11?v:I.mode===11&&o(1,S,Q,0)!==I.check?-3:O(b,S,Q,Q)?(I.mode=31,-4):(I.havedict=1,g):v},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var s=n("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(f,m,g,v,_,u,w,C){var R,V,M,F,z,k,E,T,P,O=C.bits,b=0,S=0,I=0,Q=0,re=0,$=0,ue=0,ne=0,_e=0,te=0,Z=null,Ee=0,ye=new s.Buf16(16),X=new s.Buf16(16),we=null,se=0;for(b=0;b<=15;b++)ye[b]=0;for(S=0;S<v;S++)ye[m[g+S]]++;for(re=O,Q=15;1<=Q&&ye[Q]===0;Q--);if(Q<re&&(re=Q),Q===0)return _[u++]=20971520,_[u++]=20971520,C.bits=1,0;for(I=1;I<Q&&ye[I]===0;I++);for(re<I&&(re=I),b=ne=1;b<=15;b++)if(ne<<=1,(ne-=ye[b])<0)return-1;if(0<ne&&(f===0||Q!==1))return-1;for(X[1]=0,b=1;b<15;b++)X[b+1]=X[b]+ye[b];for(S=0;S<v;S++)m[g+S]!==0&&(w[X[m[g+S]]++]=S);if(k=f===0?(Z=we=w,19):f===1?(Z=o,Ee-=257,we=a,se-=257,256):(Z=l,we=h,-1),b=I,z=u,ue=S=te=0,M=-1,F=(_e=1<<($=re))-1,f===1&&852<_e||f===2&&592<_e)return 1;for(;;){for(E=b-ue,P=w[S]<k?(T=0,w[S]):w[S]>k?(T=we[se+w[S]],Z[Ee+w[S]]):(T=96,0),R=1<<b-ue,I=V=1<<$;_[z+(te>>ue)+(V-=R)]=E<<24|T<<16|P|0,V!==0;);for(R=1<<b-1;te&R;)R>>=1;if(R!==0?(te&=R-1,te+=R):te=0,S++,--ye[b]==0){if(b===Q)break;b=m[g+w[S]]}if(re<b&&(te&F)!==M){for(ue===0&&(ue=re),z+=I,ne=1<<($=b-ue);$+ue<Q&&!((ne-=ye[$+ue])<=0);)$++,ne<<=1;if(_e+=1<<$,f===1&&852<_e||f===2&&592<_e)return 1;_[M=te&F]=re<<24|$<<16|z-u|0}}return te!==0&&(_[z+te]=b-ue<<24|64<<16|0),C.bits=re,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var s=n("../utils/common"),o=0,a=1;function l(D){for(var W=D.length;0<=--W;)D[W]=0}var h=0,f=29,m=256,g=m+1+f,v=30,_=19,u=2*g+1,w=15,C=16,R=7,V=256,M=16,F=17,z=18,k=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],E=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],O=new Array(2*(g+2));l(O);var b=new Array(2*v);l(b);var S=new Array(512);l(S);var I=new Array(256);l(I);var Q=new Array(f);l(Q);var re,$,ue,ne=new Array(v);function _e(D,W,j,A,H){this.static_tree=D,this.extra_bits=W,this.extra_base=j,this.elems=A,this.max_length=H,this.has_stree=D&&D.length}function te(D,W){this.dyn_tree=D,this.max_code=0,this.stat_desc=W}function Z(D){return D<256?S[D]:S[256+(D>>>7)]}function Ee(D,W){D.pending_buf[D.pending++]=255&W,D.pending_buf[D.pending++]=W>>>8&255}function ye(D,W,j){D.bi_valid>C-j?(D.bi_buf|=W<<D.bi_valid&65535,Ee(D,D.bi_buf),D.bi_buf=W>>C-D.bi_valid,D.bi_valid+=j-C):(D.bi_buf|=W<<D.bi_valid&65535,D.bi_valid+=j)}function X(D,W,j){ye(D,j[2*W],j[2*W+1])}function we(D,W){for(var j=0;j|=1&D,D>>>=1,j<<=1,0<--W;);return j>>>1}function se(D,W,j){var A,H,Y=new Array(w+1),ie=0;for(A=1;A<=w;A++)Y[A]=ie=ie+j[A-1]<<1;for(H=0;H<=W;H++){var le=D[2*H+1];le!==0&&(D[2*H]=we(Y[le]++,le))}}function de(D){var W;for(W=0;W<g;W++)D.dyn_ltree[2*W]=0;for(W=0;W<v;W++)D.dyn_dtree[2*W]=0;for(W=0;W<_;W++)D.bl_tree[2*W]=0;D.dyn_ltree[2*V]=1,D.opt_len=D.static_len=0,D.last_lit=D.matches=0}function he(D){8<D.bi_valid?Ee(D,D.bi_buf):0<D.bi_valid&&(D.pending_buf[D.pending++]=D.bi_buf),D.bi_buf=0,D.bi_valid=0}function be(D,W,j,A){var H=2*W,Y=2*j;return D[H]<D[Y]||D[H]===D[Y]&&A[W]<=A[j]}function ke(D,W,j){for(var A=D.heap[j],H=j<<1;H<=D.heap_len&&(H<D.heap_len&&be(W,D.heap[H+1],D.heap[H],D.depth)&&H++,!be(W,A,D.heap[H],D.depth));)D.heap[j]=D.heap[H],j=H,H<<=1;D.heap[j]=A}function q(D,W,j){var A,H,Y,ie,le=0;if(D.last_lit!==0)for(;A=D.pending_buf[D.d_buf+2*le]<<8|D.pending_buf[D.d_buf+2*le+1],H=D.pending_buf[D.l_buf+le],le++,A===0?X(D,H,W):(X(D,(Y=I[H])+m+1,W),(ie=k[Y])!==0&&ye(D,H-=Q[Y],ie),X(D,Y=Z(--A),j),(ie=E[Y])!==0&&ye(D,A-=ne[Y],ie)),le<D.last_lit;);X(D,V,W)}function U(D,W){var j,A,H,Y=W.dyn_tree,ie=W.stat_desc.static_tree,le=W.stat_desc.has_stree,ge=W.stat_desc.elems,Se=-1;for(D.heap_len=0,D.heap_max=u,j=0;j<ge;j++)Y[2*j]!==0?(D.heap[++D.heap_len]=Se=j,D.depth[j]=0):Y[2*j+1]=0;for(;D.heap_len<2;)Y[2*(H=D.heap[++D.heap_len]=Se<2?++Se:0)]=1,D.depth[H]=0,D.opt_len--,le&&(D.static_len-=ie[2*H+1]);for(W.max_code=Se,j=D.heap_len>>1;1<=j;j--)ke(D,Y,j);for(H=ge;j=D.heap[1],D.heap[1]=D.heap[D.heap_len--],ke(D,Y,1),A=D.heap[1],D.heap[--D.heap_max]=j,D.heap[--D.heap_max]=A,Y[2*H]=Y[2*j]+Y[2*A],D.depth[H]=(D.depth[j]>=D.depth[A]?D.depth[j]:D.depth[A])+1,Y[2*j+1]=Y[2*A+1]=H,D.heap[1]=H++,ke(D,Y,1),2<=D.heap_len;);D.heap[--D.heap_max]=D.heap[1],function(ae,ze){var Ze,Je,_t,qe,sn,ht,Ye=ze.dyn_tree,Tn=ze.max_code,vn=ze.stat_desc.static_tree,hi=ze.stat_desc.has_stree,Vn=ze.stat_desc.extra_bits,kr=ze.stat_desc.extra_base,ft=ze.stat_desc.max_length,Ln=0;for(qe=0;qe<=w;qe++)ae.bl_count[qe]=0;for(Ye[2*ae.heap[ae.heap_max]+1]=0,Ze=ae.heap_max+1;Ze<u;Ze++)ft<(qe=Ye[2*Ye[2*(Je=ae.heap[Ze])+1]+1]+1)&&(qe=ft,Ln++),Ye[2*Je+1]=qe,Tn<Je||(ae.bl_count[qe]++,sn=0,kr<=Je&&(sn=Vn[Je-kr]),ht=Ye[2*Je],ae.opt_len+=ht*(qe+sn),hi&&(ae.static_len+=ht*(vn[2*Je+1]+sn)));if(Ln!==0){do{for(qe=ft-1;ae.bl_count[qe]===0;)qe--;ae.bl_count[qe]--,ae.bl_count[qe+1]+=2,ae.bl_count[ft]--,Ln-=2}while(0<Ln);for(qe=ft;qe!==0;qe--)for(Je=ae.bl_count[qe];Je!==0;)Tn<(_t=ae.heap[--Ze])||(Ye[2*_t+1]!==qe&&(ae.opt_len+=(qe-Ye[2*_t+1])*Ye[2*_t],Ye[2*_t+1]=qe),Je--)}}(D,W),se(Y,Se,D.bl_count)}function p(D,W,j){var A,H,Y=-1,ie=W[1],le=0,ge=7,Se=4;for(ie===0&&(ge=138,Se=3),W[2*(j+1)+1]=65535,A=0;A<=j;A++)H=ie,ie=W[2*(A+1)+1],++le<ge&&H===ie||(le<Se?D.bl_tree[2*H]+=le:H!==0?(H!==Y&&D.bl_tree[2*H]++,D.bl_tree[2*M]++):le<=10?D.bl_tree[2*F]++:D.bl_tree[2*z]++,Y=H,Se=(le=0)===ie?(ge=138,3):H===ie?(ge=6,3):(ge=7,4))}function G(D,W,j){var A,H,Y=-1,ie=W[1],le=0,ge=7,Se=4;for(ie===0&&(ge=138,Se=3),A=0;A<=j;A++)if(H=ie,ie=W[2*(A+1)+1],!(++le<ge&&H===ie)){if(le<Se)for(;X(D,H,D.bl_tree),--le!=0;);else H!==0?(H!==Y&&(X(D,H,D.bl_tree),le--),X(D,M,D.bl_tree),ye(D,le-3,2)):le<=10?(X(D,F,D.bl_tree),ye(D,le-3,3)):(X(D,z,D.bl_tree),ye(D,le-11,7));Y=H,Se=(le=0)===ie?(ge=138,3):H===ie?(ge=6,3):(ge=7,4)}}l(ne);var L=!1;function N(D,W,j,A){ye(D,(h<<1)+(A?1:0),3),function(H,Y,ie,le){he(H),Ee(H,ie),Ee(H,~ie),s.arraySet(H.pending_buf,H.window,Y,ie,H.pending),H.pending+=ie}(D,W,j)}i._tr_init=function(D){L||(function(){var W,j,A,H,Y,ie=new Array(w+1);for(H=A=0;H<f-1;H++)for(Q[H]=A,W=0;W<1<<k[H];W++)I[A++]=H;for(I[A-1]=H,H=Y=0;H<16;H++)for(ne[H]=Y,W=0;W<1<<E[H];W++)S[Y++]=H;for(Y>>=7;H<v;H++)for(ne[H]=Y<<7,W=0;W<1<<E[H]-7;W++)S[256+Y++]=H;for(j=0;j<=w;j++)ie[j]=0;for(W=0;W<=143;)O[2*W+1]=8,W++,ie[8]++;for(;W<=255;)O[2*W+1]=9,W++,ie[9]++;for(;W<=279;)O[2*W+1]=7,W++,ie[7]++;for(;W<=287;)O[2*W+1]=8,W++,ie[8]++;for(se(O,g+1,ie),W=0;W<v;W++)b[2*W+1]=5,b[2*W]=we(W,5);re=new _e(O,k,m+1,g,w),$=new _e(b,E,0,v,w),ue=new _e(new Array(0),T,0,_,R)}(),L=!0),D.l_desc=new te(D.dyn_ltree,re),D.d_desc=new te(D.dyn_dtree,$),D.bl_desc=new te(D.bl_tree,ue),D.bi_buf=0,D.bi_valid=0,de(D)},i._tr_stored_block=N,i._tr_flush_block=function(D,W,j,A){var H,Y,ie=0;0<D.level?(D.strm.data_type===2&&(D.strm.data_type=function(le){var ge,Se=4093624447;for(ge=0;ge<=31;ge++,Se>>>=1)if(1&Se&&le.dyn_ltree[2*ge]!==0)return o;if(le.dyn_ltree[18]!==0||le.dyn_ltree[20]!==0||le.dyn_ltree[26]!==0)return a;for(ge=32;ge<m;ge++)if(le.dyn_ltree[2*ge]!==0)return a;return o}(D)),U(D,D.l_desc),U(D,D.d_desc),ie=function(le){var ge;for(p(le,le.dyn_ltree,le.l_desc.max_code),p(le,le.dyn_dtree,le.d_desc.max_code),U(le,le.bl_desc),ge=_-1;3<=ge&&le.bl_tree[2*P[ge]+1]===0;ge--);return le.opt_len+=3*(ge+1)+5+5+4,ge}(D),H=D.opt_len+3+7>>>3,(Y=D.static_len+3+7>>>3)<=H&&(H=Y)):H=Y=j+5,j+4<=H&&W!==-1?N(D,W,j,A):D.strategy===4||Y===H?(ye(D,2+(A?1:0),3),q(D,O,b)):(ye(D,4+(A?1:0),3),function(le,ge,Se,ae){var ze;for(ye(le,ge-257,5),ye(le,Se-1,5),ye(le,ae-4,4),ze=0;ze<ae;ze++)ye(le,le.bl_tree[2*P[ze]+1],3);G(le,le.dyn_ltree,ge-1),G(le,le.dyn_dtree,Se-1)}(D,D.l_desc.max_code+1,D.d_desc.max_code+1,ie+1),q(D,D.dyn_ltree,D.dyn_dtree)),de(D),A&&he(D)},i._tr_tally=function(D,W,j){return D.pending_buf[D.d_buf+2*D.last_lit]=W>>>8&255,D.pending_buf[D.d_buf+2*D.last_lit+1]=255&W,D.pending_buf[D.l_buf+D.last_lit]=255&j,D.last_lit++,W===0?D.dyn_ltree[2*j]++:(D.matches++,W--,D.dyn_ltree[2*(I[j]+m+1)]++,D.dyn_dtree[2*Z(W)]++),D.last_lit===D.lit_bufsize-1},i._tr_align=function(D){ye(D,2,3),X(D,V,O),function(W){W.bi_valid===16?(Ee(W,W.bi_buf),W.bi_buf=0,W.bi_valid=0):8<=W.bi_valid&&(W.pending_buf[W.pending++]=255&W.bi_buf,W.bi_buf>>=8,W.bi_valid-=8)}(D)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(s){(function(o,a){if(!o.setImmediate){var l,h,f,m,g=1,v={},_=!1,u=o.document,w=Object.getPrototypeOf&&Object.getPrototypeOf(o);w=w&&w.setTimeout?w:o,l={}.toString.call(o.process)==="[object process]"?function(M){process.nextTick(function(){R(M)})}:function(){if(o.postMessage&&!o.importScripts){var M=!0,F=o.onmessage;return o.onmessage=function(){M=!1},o.postMessage("","*"),o.onmessage=F,M}}()?(m="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",V,!1):o.attachEvent("onmessage",V),function(M){o.postMessage(m+M,"*")}):o.MessageChannel?((f=new MessageChannel).port1.onmessage=function(M){R(M.data)},function(M){f.port2.postMessage(M)}):u&&"onreadystatechange"in u.createElement("script")?(h=u.documentElement,function(M){var F=u.createElement("script");F.onreadystatechange=function(){R(M),F.onreadystatechange=null,h.removeChild(F),F=null},h.appendChild(F)}):function(M){setTimeout(R,0,M)},w.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var F=new Array(arguments.length-1),z=0;z<F.length;z++)F[z]=arguments[z+1];var k={callback:M,args:F};return v[g]=k,l(g),g++},w.clearImmediate=C}function C(M){delete v[M]}function R(M){if(_)setTimeout(R,0,M);else{var F=v[M];if(F){_=!0;try{(function(z){var k=z.callback,E=z.args;switch(E.length){case 0:k();break;case 1:k(E[0]);break;case 2:k(E[0],E[1]);break;case 3:k(E[0],E[1],E[2]);break;default:k.apply(a,E)}})(F)}finally{C(M),_=!1}}}}function V(M){M.source===o&&typeof M.data=="string"&&M.data.indexOf(m)===0&&R(+M.data.slice(m.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(W_);var fV=W_.exports;const pV=hV(fV),mV={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},gV={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},vV={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},yV={class:"export-tabs tabs"},_V={class:"export-content"},bV={class:"export-options",style:{"margin-bottom":"20px"}},wV={class:"form-group"},EV={class:"export-meta"},IV={class:"meta-item"},TV={class:"meta-item"},CV={class:"meta-item"},kV={class:"export-options",style:{"margin-bottom":"20px"}},xV={class:"form-group"},SV={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},AV={class:"coming-soon"},RV={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},PV={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},NV={key:1,class:"export-success"},OV={__name:"ExportModal",setup(t){const e=In(),n=gn(),r=ra(),i=Ce(()=>n.getProject(e.projectId)),s=pe("json"),o=pe(""),a=pe(""),l=pe(!0);Yt(i,_=>{_&&!a.value&&(a.value=_.name||"presentation")},{immediate:!0});function h(){const _=n.exportProject(e.projectId);if(!_)return;const u=new Blob([_],{type:"application/json"}),w=URL.createObjectURL(u),C=document.createElement("a");C.href=w,C.download=`${a.value||"project"}.mediasurf.json`,C.click(),URL.revokeObjectURL(w),o.value="success",setTimeout(()=>o.value="",3e3)}function f(_,u="presentation"){return String(_).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||u}function m(_,u){return`
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
`}async function v(){var Q,re,$;const _=i.value;if(!_)return;o.value="processing";const u=new pV,w=u.folder("assets");let C=0;async function R(ue,ne="media"){if((!ue||ue.startsWith("data:")||ue.startsWith("http://localhost")||ue.startsWith("blob:"))&&ue.startsWith("data:"))return ue;try{const te=await(await fetch(ue)).blob();let Z="bin";const Ee=te.type;if(Ee.includes("image/png")?Z="png":Ee.includes("image/jpeg")?Z="jpg":Ee.includes("image/gif")?Z="gif":Ee.includes("image/svg")?Z="svg":Ee.includes("image/webp")?Z="webp":Ee.includes("video/mp4")?Z="mp4":Ee.includes("audio/mpeg")&&(Z="mp3"),Z==="bin"){const X=ue.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);X&&(Z=X[1])}C++;const ye=`${ne}_${C}.${Z}`;return w.file(ye,te),`assets/${ye}`}catch(_e){return console.warn("Could not fetch asset:",ue,_e),ue}}const V=JSON.parse(JSON.stringify([..._.slides||[]])).sort((ue,ne)=>(ue.order??0)-(ne.order??0));if(l.value)for(const ue of V){ue.backgroundType==="image"&&ue.backgroundImage&&(ue.backgroundImage=await R(ue.backgroundImage,"bg"));for(const ne of ue.elements||[])ne.type==="image"&&((Q=ne.content)!=null&&Q.src)&&(ne.content.src=await R(ne.content.src,"img")),ne.type==="video"&&((re=ne.content)!=null&&re.src)&&!ne.content.src.includes("youtube")&&!ne.content.src.includes("youtu.be")&&(ne.content.src=await R(ne.content.src,"vid")),ne.type==="audio"&&(($=ne.content)!=null&&$.src)&&(ne.content.src=await R(ne.content.src,"aud"))}const M=f(a.value||_.name||"presentation"),F={name:_.name,theme:_.theme||{},settings:_.settings||{},slides:V},z=JSON.stringify(F).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),k=m(_.theme,_.settings),E=g(),T=`<script id="lf-data" type="application/json">${z}<\/script>`,O=`<!DOCTYPE html>
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
${T}
<script src="script.js"><\/script>
</body>
</html>`;u.file("index.html",O),u.file("style.css",k),u.file("script.js",E);const b=await u.generateAsync({type:"blob"}),S=URL.createObjectURL(b),I=document.createElement("a");I.href=S,I.download=`${M}.zip`,I.click(),URL.revokeObjectURL(S),o.value="success",setTimeout(()=>o.value="",3e3)}return(_,u)=>(K(),Tt(to,{title:"Export Project",size:"md",onClose:u[9]||(u[9]=w=>Ie(e).showExportModal=!1)},{footer:kt(()=>[d("button",{class:"btn btn-secondary",onClick:u[8]||(u[8]=w=>Ie(e).showExportModal=!1)},"Close")]),default:kt(()=>{var w,C,R,V,M;return[Ie(r).user?(K(),J(Ne,{key:1},[d("div",yV,[d("button",{class:Fe(["tab-btn",s.value==="json"&&"active"]),onClick:u[2]||(u[2]=F=>s.value="json")},"JSON Project",2),d("button",{class:Fe(["tab-btn",s.value==="html"&&"active"]),onClick:u[3]||(u[3]=F=>s.value="html")},"HTML Package",2),d("button",{class:Fe(["tab-btn",s.value==="scorm"&&"active"]),onClick:u[4]||(u[4]=F=>s.value="scorm")},"SCORM",2)]),d("div",_V,[s.value==="json"?(K(),J(Ne,{key:0},[u[20]||(u[20]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"📦"),d("div",null,[d("h4",null,"JSON Project File"),d("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),d("div",bV,[d("div",wV,[u[15]||(u[15]=d("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),tt(d("input",{type:"text","onUpdate:modelValue":u[5]||(u[5]=F=>a.value=F),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[mt,a.value]])])]),d("div",EV,[d("div",IV,[u[16]||(u[16]=d("span",null,"Project",-1)),d("strong",null,fe((w=i.value)==null?void 0:w.name),1)]),d("div",TV,[u[17]||(u[17]=d("span",null,"Slides",-1)),d("strong",null,fe(((R=(C=i.value)==null?void 0:C.slides)==null?void 0:R.length)||0),1)]),d("div",CV,[u[18]||(u[18]=d("span",null,"Elements",-1)),d("strong",null,fe(((M=(V=i.value)==null?void 0:V.slides)==null?void 0:M.reduce((F,z)=>{var k;return F+(((k=z.elements)==null?void 0:k.length)||0)},0))||0),1)])]),d("button",{class:"btn btn-primary export-btn",onClick:h},[...u[19]||(u[19]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Pe(" Download JSON ",-1)])])],64)):s.value==="html"?(K(),J(Ne,{key:1},[u[24]||(u[24]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"🌐"),d("div",null,[d("h4",null,"Standalone HTML Package"),d("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),d("div",kV,[d("div",xV,[u[21]||(u[21]=d("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),tt(d("input",{type:"text","onUpdate:modelValue":u[6]||(u[6]=F=>a.value=F),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[mt,a.value]])]),d("label",SV,[tt(d("input",{type:"checkbox","onUpdate:modelValue":u[7]||(u[7]=F=>l.value=F)},null,512),[[Av,l.value]]),u[22]||(u[22]=Pe(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),u[25]||(u[25]=d("div",{class:"export-features"},[d("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),d("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),d("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),d("div",{class:"feature-item"},"✓ Progress bar"),d("div",{class:"feature-item"},"✓ Responsive scaling"),d("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),d("button",{class:"btn btn-primary export-btn",onClick:v},[...u[23]||(u[23]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Pe(" Download HTML ",-1)])])],64)):s.value==="scorm"?(K(),J(Ne,{key:2},[u[29]||(u[29]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"🎓"),d("div",null,[d("h4",null,"SCORM Package"),d("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),d("div",AV,[(K(),J("svg",RV,[...u[26]||(u[26]=[d("circle",{cx:"12",cy:"12",r:"10"},null,-1),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),u[27]||(u[27]=d("h4",null,"Coming Soon",-1)),u[28]||(u[28]=d("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):xe("",!0),dt(ei,{name:"fade"},{default:kt(()=>[o.value==="processing"?(K(),J("div",PV,[...u[30]||(u[30]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),Pe(" Generating package... Please wait. ",-1)])])):o.value==="success"?(K(),J("div",NV,[...u[31]||(u[31]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("polyline",{points:"20 6 9 17 4 12"})],-1),Pe(" Export successful! Check your downloads folder. ",-1)])])):xe("",!0)]),_:1})])],64)):(K(),J("div",mV,[(K(),J("svg",gV,[...u[10]||(u[10]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),u[13]||(u[13]=d("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),u[14]||(u[14]=d("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),d("div",vV,[d("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:u[0]||(u[0]=F=>Ie(r).loginWithGoogle())},[...u[11]||(u[11]=[d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M12 8v8m-4-4h8"})],-1),Pe(" Continue with Google ",-1)])]),d("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:u[1]||(u[1]=F=>Ie(r).loginWithMicrosoft())},[...u[12]||(u[12]=[d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"7",height:"7"}),d("rect",{x:"14",y:"3",width:"7",height:"7"}),d("rect",{x:"14",y:"14",width:"7",height:"7"}),d("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),Pe(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},DV=Vt(OV,[["__scopeId","data-v-1dc02f55"]]),MV={key:0,class:"editor-view"},VV={class:"editor-topbar"},LV={class:"topbar-left"},FV={class:"project-name-wrap"},$V=["value"],UV={class:"save-label"},BV={class:"topbar-center"},zV={key:0,class:"slide-position"},jV={class:"topbar-right"},qV={class:"editor-body"},WV={class:"authoring-rail"},HV=["onClick","data-tooltip"],GV={key:0,class:"rail-icon"},KV={key:1,class:"rail-icon"},QV={key:2,class:"rail-icon"},JV={key:3,class:"rail-icon"},YV={key:4,class:"rail-icon"},XV={key:5,class:"rail-icon"},ZV={key:6,class:"rail-icon"},e8={key:7,class:"rail-icon"},t8={key:8,class:"rail-icon"},n8={class:"right-panel"},r8={class:"panel-tabs"},i8=["onClick","data-tooltip"],s8={class:"tab-icon"},o8={class:"tab-label"},a8={class:"panel-content"},l8={key:1,class:"editor-not-found"},c8={__name:"EditorView",setup(t){const e=Kv(),n=xd(),r=In(),i=gn(),s=ra(),o=Ce(()=>e.params.id),a=Ce(()=>i.getProject(o.value)),l=Ce(()=>{var z;return[...((z=a.value)==null?void 0:z.slides)||[]].sort((k,E)=>k.order-E.order)}),h=pe(null);let f=!1,m=null;Yt(()=>a.value,z=>{if(z){if(f){f=!1;return}m&&clearTimeout(m),m=setTimeout(()=>{r.pushHistory(z)},600)}},{deep:!0}),Yt(()=>s.isAuthReady,z=>{if(z){if(!a.value){n.push({name:"dashboard"});return}r.setProject(o.value),l.value.length>0&&r.setCurrentSlide(l.value[0].id),r.pushHistory(a.value)}},{immediate:!0});const g=Ce(()=>{const z=a.value;return z?`Saved ${new Date(z.updatedAt).toLocaleTimeString()}`:""}),v=Ce(()=>{switch(r.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});SP({undo:()=>{if(r.canUndo()){const z=r.undo();z&&(f=!0,i.updateProject(o.value,z))}},redo:()=>{if(r.canRedo()){const z=r.redo();z&&(f=!0,i.updateProject(o.value,z))}},delete:()=>{r.selectedElementId&&(i.deleteElement(r.projectId,r.currentSlideId,r.selectedElementId),r.clearSelection())},escape:()=>{r.clearSelection(),r.setActiveTool("select")},copy:()=>{var k,E,T,P;const z=(P=(T=(E=(k=a.value)==null?void 0:k.slides)==null?void 0:E.find(O=>O.id===r.currentSlideId))==null?void 0:T.elements)==null?void 0:P.find(O=>O.id===r.selectedElementId);z&&r.setClipboard(z)},paste:()=>{if(r.clipboard&&r.currentSlideId){const z=r.clipboard;i.addElement(r.projectId,r.currentSlideId,z.type,{...z,x:z.x+20,y:z.y+20,id:void 0})}},duplicate:()=>{if(r.selectedElementId){const z=i.duplicateElement(r.projectId,r.currentSlideId,r.selectedElementId);z&&r.selectElement(z.id)}},zoomIn:()=>r.zoomIn(),zoomOut:()=>r.zoomOut(),zoomReset:()=>r.zoomReset(),toggleGrid:()=>r.toggleGrid(),nudge:(z,k)=>{var T,P,O,b;if(!r.selectedElementId)return;const E=(b=(O=(P=(T=a.value)==null?void 0:T.slides)==null?void 0:P.find(S=>S.id===r.currentSlideId))==null?void 0:O.elements)==null?void 0:b.find(S=>S.id===r.selectedElementId);E&&i.updateElement(r.projectId,r.currentSlideId,r.selectedElementId,{x:E.x+z,y:E.y+k})},selectAll:()=>{var k,E,T;(((T=(E=(k=a.value)==null?void 0:k.slides)==null?void 0:E.find(P=>P.id===r.currentSlideId))==null?void 0:T.elements)||[]).forEach((P,O)=>r.selectElement(P.id,O>0))}});function _(){n.push({name:"dashboard"})}function u(){n.push({name:"preview",params:{id:o.value}})}function w(z,k="Image"){if(!r.projectId||!r.currentSlideId||!z)return;const E=new Image;E.onload=()=>{const O=Math.min(420/E.width,280/E.height,1),b=Math.max(120,Math.round(E.width*O)),S=Math.max(80,Math.round(E.height*O)),I=Math.max(24,Math.round((960-b)/2)),Q=Math.max(24,Math.round((540-S)/2)),re=i.addElement(r.projectId,r.currentSlideId,"image",{x:I,y:Q,width:b,height:S,content:{src:z,alt:k,objectFit:"cover"}});re&&(r.selectElement(re.id),r.setRightPanel("properties"),r.setActiveTool("select"))},E.src=z}function C(z){const[k]=Array.from(z.target.files||[]);if(!k||!k.type.startsWith("image/"))return;const E=new FileReader;E.onload=()=>w(String(E.result||""),k.name),E.readAsDataURL(k),z.target.value=""}function R(){var z;(z=h.value)==null||z.click()}const V=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function M(z){if(z==="text"){r.setActiveTool("text");return}if(z==="resources"){r.setActiveTool("image");return}if(z==="interactive-elements"){r.setActiveTool("hotspot");return}if(z==="interactive-questions"){r.setActiveTool("quiz");return}if(z==="widgets"){r.setActiveTool("shape");return}if(z==="insert"){R();return}if(z==="style"){r.setRightPanel("properties");return}if(z==="background"){r.clearSelection(),r.setRightPanel("properties");return}z==="pages"&&r.toggleSlidePanel()}function F(z){return z==="text"?["text","heading"].includes(r.activeTool):z==="resources"?r.activeTool==="image":z==="interactive-elements"?["hotspot","button"].includes(r.activeTool):z==="interactive-questions"?r.activeTool==="quiz":z==="widgets"?["shape","video","audio"].includes(r.activeTool):z==="insert"?!1:z==="style"||z==="background"?r.rightPanelTab==="properties":z==="pages"?r.showSlidePanel:!1}return(z,k)=>a.value?(K(),J("div",MV,[d("input",{ref_key:"imageInputRef",ref:h,type:"file",accept:"image/*",class:"sr-only",onChange:C},null,544),d("header",VV,[d("div",LV,[d("button",{class:"btn btn-ghost btn-sm back-btn",onClick:_,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...k[4]||(k[4]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Pe(" Dashboard ",-1)])]),d("div",FV,[d("input",{value:a.value.name,class:"project-name-input",onChange:k[0]||(k[0]=E=>Ie(i).updateProject(o.value,{name:E.target.value}))},null,40,$V)]),d("span",UV,fe(g.value),1)]),d("div",BV,[Ie(r).currentSlideId?(K(),J("span",zV," Slide "+fe(l.value.findIndex(E=>E.id===Ie(r).currentSlideId)+1)+" of "+fe(l.value.length),1)):xe("",!0)]),d("div",jV,[d("button",{class:Fe(["btn btn-ghost btn-sm",Ie(r).showAIPanel&&"active-btn"]),onClick:k[1]||(k[1]=E=>{Ie(r).showAIPanel=!Ie(r).showAIPanel,Ie(r).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...k[5]||(k[5]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Pe(" AI ",-1)])],2),d("button",{class:"btn btn-ghost btn-sm",onClick:k[2]||(k[2]=E=>{Ie(r).showThemeManager=!Ie(r).showThemeManager,Ie(r).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...k[6]||(k[6]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M12 8v4m0 4h.01"})],-1),Pe(" Theme ",-1)])]),d("button",{class:"btn btn-secondary btn-sm",onClick:u,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...k[7]||(k[7]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),Pe(" Preview ",-1)])]),d("button",{class:"btn btn-primary btn-sm",onClick:k[3]||(k[3]=E=>Ie(r).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...k[8]||(k[8]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Pe(" Export ",-1)])])])]),dt(XN),d("div",qV,[d("aside",WV,[(K(),J(Ne,null,Xe(V,E=>d("button",{key:E.id,class:Fe(["rail-option",F(E.id)&&"active"]),onClick:T=>M(E.id),"data-tooltip":E.label,"data-tooltip-position":"right"},[E.id==="text"?(K(),J("span",GV,"T")):E.id==="resources"?(K(),J("span",KV,[...k[9]||(k[9]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),d("polyline",{points:"21 15 16 10 5 21"})],-1)])])):E.id==="interactive-elements"?(K(),J("span",QV,[...k[10]||(k[10]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):E.id==="interactive-questions"?(K(),J("span",JV,[...k[11]||(k[11]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):E.id==="widgets"?(K(),J("span",YV,[...k[12]||(k[12]=[nn('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5c99e548><rect x="3" y="3" width="7" height="7" data-v-5c99e548></rect><rect x="14" y="3" width="7" height="7" data-v-5c99e548></rect><rect x="14" y="14" width="7" height="7" data-v-5c99e548></rect><rect x="3" y="14" width="7" height="7" data-v-5c99e548></rect></svg>',1)])])):E.id==="insert"?(K(),J("span",XV,[...k[13]||(k[13]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):E.id==="style"?(K(),J("span",ZV,[...k[14]||(k[14]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):E.id==="background"?(K(),J("span",e8,[...k[15]||(k[15]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),d("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):E.id==="pages"?(K(),J("span",t8,[...k[16]||(k[16]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),d("polyline",{points:"13 2 13 9 20 9"})],-1)])])):xe("",!0),Pe(" "+fe(E.label),1)],10,HV)),64))]),dt(ei,{name:"side-panel-slide"},{default:kt(()=>[Ie(r).showSlidePanel?(K(),Tt($P,{key:0})):xe("",!0)]),_:1}),dt(KO),d("aside",n8,[d("div",r8,[(K(),J(Ne,null,Xe([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],E=>d("button",{key:E.id,class:Fe(["panel-tab",Ie(r).rightPanelTab===E.id&&"active"]),onClick:T=>Ie(r).setRightPanel(E.id),"data-tooltip":`Open ${E.label}`,"data-tooltip-position":"bottom"},[d("span",s8,fe(E.icon),1),d("span",o8,fe(E.label),1)],10,i8)),64))]),d("div",a8,[dt(ei,{name:"editor-panel-switch",mode:"out-in"},{default:kt(()=>[(K(),J("div",{key:v.value,class:"panel-content-view"},[Ie(r).rightPanelTab==="properties"?(K(),Tt(DN,{key:0})):Ie(r).rightPanelTab==="layers"?(K(),Tt(o5,{key:1})):Ie(r).rightPanelTab==="ai"?(K(),Tt($M,{key:2})):Ie(r).rightPanelTab==="theme"?(K(),Tt(dV,{key:3})):xe("",!0)]))]),_:1})])])]),Ie(r).showExportModal?(K(),Tt(DV,{key:0})):xe("",!0)])):(K(),J("div",l8,[k[17]||(k[17]=d("h2",null,"Project not found",-1)),k[18]||(k[18]=d("p",null,"This project may have been deleted or the link is invalid.",-1)),d("button",{class:"btn btn-primary",onClick:_},"Go to Dashboard")]))}},u8=Vt(c8,[["__scopeId","data-v-5c99e548"]]),d8={key:0,class:"preview-stage"},h8=["src","alt"],f8={key:2,style:{width:"100%",height:"100%"}},p8=["viewBox"],m8=["points","fill","stroke","stroke-width"],g8=["points","fill","stroke","stroke-width"],v8={key:3,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},y8={key:4,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",position:"relative"}},_8=["onClick"],b8={key:0,class:"hotspot-popup",style:{position:"absolute",left:"60px",top:"0",background:"#fff",color:"#111",borderRadius:"8px",padding:"12px 16px",minWidth:"160px",maxWidth:"220px",boxShadow:"0 8px 24px rgba(0,0,0,.3)",zIndex:10}},w8={style:{display:"block","margin-bottom":"4px","font-size":"14px"}},E8={style:{"font-size":"13px",margin:"0","line-height":"1.5"}},I8={key:5,style:{width:"100%",height:"100%",background:"#000","border-radius":"4px",overflow:"hidden"}},T8=["src"],C8=["src"],k8={key:2,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#666","font-size":"13px"}},x8={key:6,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column",gap:"8px",padding:"8px","box-sizing":"border-box"}},S8={style:{"font-size":"12px",color:"#aaa"}},A8=["src"],R8={key:7,style:{width:"100%",height:"100%",padding:"16px","box-sizing":"border-box",background:"rgba(0,0,0,.4)","border-radius":"6px",overflow:"auto"}},P8={style:{margin:"0 0 12px","font-size":"15px",color:"#fff"}},N8={style:{display:"flex","flex-direction":"column",gap:"8px"}},O8=["onClick"],D8={key:0,style:{"margin-top":"12px"}},M8=["onClick","disabled"],V8={key:1,style:{"margin-top":"12px"}},L8={key:0,style:{"font-size":"12px",color:"#ccc",margin:"0 0 8px"}},F8=["onClick"],$8={class:"preview-ui"},U8={class:"preview-topbar"},B8={class:"preview-title"},z8={class:"slide-counter"},j8=["disabled"],q8=["disabled"],W8={class:"dot-nav"},H8=["onClick"],G8=960,K8=540,Q8={__name:"PreviewView",setup(t){const e=Kv(),n=xd(),r=gn(),i=ra(),s=Ce(()=>e.params.id),o=Ce(()=>r.getProject(s.value)),a=Ce(()=>{var Q;return[...((Q=o.value)==null?void 0:Q.slides)||[]].sort((re,$)=>re.order-$.order)}),l=pe(0),h=pe(null),f=pe(1),m=pe(!0);let g=null;const v=Ce(()=>a.value[l.value]||null);function _(){if(!h.value)return;const Q=h.value.clientWidth,re=h.value.clientHeight;f.value=Math.min(Q/G8,re/K8,1.5)}function u(){l.value<a.value.length-1&&l.value++}function w(){l.value>0&&l.value--}function C(Q){l.value=Q}function R(Q){(Q.key==="ArrowRight"||Q.key==="ArrowDown"||Q.key===" ")&&u(),(Q.key==="ArrowLeft"||Q.key==="ArrowUp")&&w(),Q.key==="Escape"&&V()}function V(){n.push({name:"editor",params:{id:s.value}})}function M(){m.value=!0,clearTimeout(g),g=setTimeout(()=>{m.value=!1},3e3)}const F=new ResizeObserver(_);Yt(()=>i.isAuthReady,Q=>{if(Q&&!o.value){n.push({name:"dashboard"});return}},{immediate:!0}),qo(()=>{window.addEventListener("keydown",R),h.value&&(F.observe(h.value),_()),M()}),Wo(()=>{window.removeEventListener("keydown",R),F.disconnect(),clearTimeout(g)});function z(Q){return Q?Q.backgroundType==="gradient"&&Q.backgroundGradient?{background:Q.backgroundGradient}:Q.backgroundType==="image"&&Q.backgroundImage?{backgroundImage:`url(${Q.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:Q.background||"#1a1a2e"}:{}}function k(Q){return{position:"absolute",left:`${Q.x}px`,top:`${Q.y}px`,width:`${Q.width}px`,height:`${Q.height}px`,opacity:Q.opacity??1,transform:Q.rotation?`rotate(${Q.rotation}deg)`:void 0,overflow:"hidden",pointerEvents:["button","hotspot","quiz"].includes(Q.type)?"auto":"none"}}const E=pe({}),T=pe({});function P(Q,re){T.value[Q]||(E.value[Q]=re)}function O(Q){E.value[Q.id]!==void 0&&(T.value[Q.id]=!0)}function b(Q){delete E.value[Q],delete T.value[Q]}const S=pe({});function I(Q){S.value[Q]=!S.value[Q]}return(Q,re)=>(K(),J("div",{class:"preview-root",onMousemove:M,onClick:$t(M,["self"])},[re[4]||(re[4]=d("div",{class:"preview-orb preview-orb-left"},null,-1)),re[5]||(re[5]=d("div",{class:"preview-orb preview-orb-right"},null,-1)),re[6]||(re[6]=d("div",{class:"preview-grid"},null,-1)),d("div",{class:"canvas-bg",ref_key:"containerRef",ref:h},[v.value?(K(),J("div",d8,[d("div",{class:"slide-canvas",style:$e([z(v.value),{transform:`scale(${f.value})`,transformOrigin:"center center"}])},[(K(!0),J(Ne,null,Xe([...v.value.elements||[]].sort(($,ue)=>$.zIndex-ue.zIndex),$=>(K(),J(Ne,{key:$.id},[$.visible!==!1?(K(),J("div",{key:0,style:$e(k($))},[$.type==="text"||$.type==="heading"?(K(),J("div",{key:0,class:"el-text",style:$e({fontSize:$.content.fontSize+"px",color:$.content.color,fontFamily:$.content.fontFamily,fontWeight:$.content.bold||$.type==="heading"?"700":"400",fontStyle:$.content.italic?"italic":"normal",textDecoration:$.content.underline?"underline":"none",textAlign:$.content.align,lineHeight:$.content.lineHeight||1.4,letterSpacing:$.content.letterSpacing?$.content.letterSpacing+"px":void 0,padding:"4px",width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",wordBreak:"break-word"})},fe($.content.text),5)):$.type==="image"?(K(),J("img",{key:1,src:$.content.src,alt:$.content.alt,style:$e({width:"100%",height:"100%",objectFit:$.content.objectFit||"cover",borderRadius:$.content.borderRadius?$.content.borderRadius+"px":void 0})},null,12,h8)):$.type==="shape"?(K(),J("div",f8,[$.content.shape==="rectangle"||$.content.shape==="circle"?(K(),J("div",{key:0,style:$e({width:"100%",height:"100%",backgroundColor:$.content.fillColor,border:`${$.content.strokeWidth||0}px solid ${$.content.strokeColor||"transparent"}`,borderRadius:$.content.shape==="circle"?"50%":($.content.borderRadius||0)+"px",boxSizing:"border-box"})},null,4)):(K(),J("svg",{key:1,width:"100%",height:"100%",viewBox:`0 0 ${$.width} ${$.height}`,preserveAspectRatio:"xMidYMid meet"},[$.content.shape==="triangle"?(K(),J("polygon",{key:0,points:`${$.width/2} 0 ${$.width} ${$.height} 0 ${$.height}`,fill:$.content.fillColor,stroke:$.content.strokeColor,"stroke-width":$.content.strokeWidth||0},null,8,m8)):xe("",!0),$.content.shape==="diamond"?(K(),J("polygon",{key:1,points:`${$.width/2} 0 ${$.width} ${$.height/2} ${$.width/2} ${$.height} 0 ${$.height/2}`,fill:$.content.fillColor,stroke:$.content.strokeColor,"stroke-width":$.content.strokeWidth||0},null,8,g8)):xe("",!0)],8,p8))])):$.type==="button"?(K(),J("div",v8,[d("button",{style:$e({padding:"8px 20px",borderRadius:"6px",fontWeight:600,fontSize:($.content.fontSize||14)+"px",cursor:"pointer",border:"2px solid "+($.content.backgroundColor||"#5865f2"),backgroundColor:$.content.variant==="outline"||$.content.variant==="ghost"?"transparent":$.content.backgroundColor||"#5865f2",color:$.content.variant==="outline"||$.content.variant==="ghost"?$.content.backgroundColor||"#5865f2":$.content.textColor||"#fff",fontFamily:$.content.fontFamily})},fe($.content.label),5)])):$.type==="hotspot"?(K(),J("div",y8,[d("button",{class:"hotspot-trigger",style:$e({width:"48px",height:"48px",borderRadius:"50%",backgroundColor:$.content.color||"#5865f2",border:"3px solid rgba(255,255,255,0.4)",color:"#fff",fontSize:"20px",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}),onClick:ue=>I($.id)},"+",12,_8),dt(ei,{name:"popup"},{default:kt(()=>[S.value[$.id]?(K(),J("div",b8,[d("strong",w8,fe($.content.title),1),d("p",E8,fe($.content.body),1)])):xe("",!0)]),_:2},1024)])):$.type==="video"?(K(),J("div",I8,[$.content.src&&($.content.src.includes("youtube")||$.content.src.includes("vimeo"))?(K(),J("iframe",{key:0,src:$.content.src,width:"100%",height:"100%",frameborder:"0",allowfullscreen:"",allow:"autoplay"},null,8,T8)):$.content.src?(K(),J("video",{key:1,src:$.content.src,controls:"",style:{width:"100%",height:"100%","object-fit":"contain"}},null,8,C8)):(K(),J("div",k8,"No video source"))])):$.type==="audio"?(K(),J("div",x8,[re[0]||(re[0]=d("span",{style:{"font-size":"28px"}},"🎵",-1)),d("span",S8,fe($.content.label||"Audio"),1),$.content.src?(K(),J("audio",{key:0,src:$.content.src,controls:"",style:{width:"100%","max-width":"240px"}},null,8,A8)):xe("",!0)])):$.type==="quiz"?(K(),J("div",R8,[d("h4",P8,fe($.content.question),1),d("div",N8,[(K(!0),J(Ne,null,Xe($.content.options,(ue,ne)=>(K(),J("button",{key:ne,onClick:_e=>P($.id,ne),style:$e({padding:"8px 12px",borderRadius:"6px",border:E.value[$.id]===ne?"2px solid #5865f2":"1px solid rgba(255,255,255,.2)",background:T.value[$.id]?ne===$.content.correctIndex?"rgba(87,242,135,.2)":E.value[$.id]===ne?"rgba(237,66,69,.2)":"rgba(255,255,255,.05)":E.value[$.id]===ne?"rgba(88,101,242,.3)":"rgba(255,255,255,.05)",color:"#fff",textAlign:"left",cursor:T.value[$.id]?"default":"pointer",fontSize:"13px",fontFamily:"inherit"})},fe(ue),13,O8))),128))]),T.value[$.id]?(K(),J("div",V8,[d("p",{style:$e({color:E.value[$.id]===$.content.correctIndex?"#57f287":"#ed4245",fontWeight:600,fontSize:"13px",margin:"0 0 4px"})},fe(E.value[$.id]===$.content.correctIndex?"✓ Correct!":"✗ Incorrect"),5),$.content.explanation?(K(),J("p",L8,fe($.content.explanation),1)):xe("",!0),d("button",{onClick:ue=>b($.id),style:{padding:"4px 12px",background:"transparent",border:"1px solid rgba(255,255,255,.3)","border-radius":"4px",color:"#ccc","font-size":"12px",cursor:"pointer","font-family":"inherit"}},"Try Again",8,F8)])):(K(),J("div",D8,[d("button",{onClick:ue=>O($),disabled:E.value[$.id]===void 0,style:{padding:"6px 16px",background:"#5865f2",border:"none","border-radius":"6px",color:"#fff","font-size":"13px",cursor:"pointer","font-family":"inherit"}},"Submit",8,M8)]))])):xe("",!0)],4)):xe("",!0)],64))),128))],4)])):xe("",!0)],512),dt(ei,{name:"ui-fade"},{default:kt(()=>{var $;return[tt(d("div",$8,[d("div",U8,[d("button",{class:"ui-btn",onClick:V},[...re[1]||(re[1]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Pe(" Back to Editor ",-1)])]),d("span",B8,fe(($=o.value)==null?void 0:$.name),1),d("span",z8,fe(l.value+1)+" / "+fe(a.value.length),1)]),d("button",{class:"nav-btn nav-btn-left",onClick:w,disabled:l.value===0},[...re[2]||(re[2]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M15 18l-6-6 6-6"})],-1)])],8,j8),d("button",{class:"nav-btn nav-btn-right",onClick:u,disabled:l.value===a.value.length-1},[...re[3]||(re[3]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M9 18l6-6-6-6"})],-1)])],8,q8),d("div",W8,[(K(!0),J(Ne,null,Xe(a.value,(ue,ne)=>(K(),J("button",{key:ue.id,class:Fe(["dot",ne===l.value&&"active"]),onClick:_e=>C(ne)},null,10,H8))),128))])],512),[[gw,m.value]])]}),_:1})],32))}},J8=Vt(Q8,[["__scopeId","data-v-649ef8b8"]]),Y8=[{path:"/",name:"dashboard",component:xP},{path:"/editor/:id",name:"editor",component:u8,props:!0},{path:"/preview/:id",name:"preview",component:J8,props:!0}],X8=J2({history:A2(),routes:Y8}),Nh=Vw(X2);Nh.use($w());Nh.use(X8);Nh.mount("#app");
