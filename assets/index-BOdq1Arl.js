(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ad(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const dt={},ts=[],Gn=()=>{},dg=()=>!1,kl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ld=t=>t.startsWith("onUpdate:"),Ut=Object.assign,cd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fb=Object.prototype.hasOwnProperty,ot=(t,e)=>fb.call(t,e),Le=Array.isArray,ns=t=>zo(t)==="[object Map]",bs=t=>zo(t)==="[object Set]",vf=t=>zo(t)==="[object Date]",qe=t=>typeof t=="function",wt=t=>typeof t=="string",Dn=t=>typeof t=="symbol",ct=t=>t!==null&&typeof t=="object",hg=t=>(ct(t)||qe(t))&&qe(t.then)&&qe(t.catch),fg=Object.prototype.toString,zo=t=>fg.call(t),pb=t=>zo(t).slice(8,-1),pg=t=>zo(t)==="[object Object]",Sl=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ro=ad(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mb=/-\w/g,kn=Al(t=>t.replace(mb,e=>e.slice(1).toUpperCase())),gb=/\B([A-Z])/g,ci=Al(t=>t.replace(gb,"-$1").toLowerCase()),Rl=Al(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nc=Al(t=>t?`on${Rl(t)}`:""),Qr=(t,e)=>!Object.is(t,e),Oa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},mg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vb=t=>{const e=wt(t)?Number(t):NaN;return isNaN(e)?t:e};let yf;const Nl=()=>yf||(yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function je(t){if(Le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=wt(r)?wb(r):je(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(wt(t)||ct(t))return t}const yb=/;(?![^(]*\))/g,_b=/:([^]+)/,bb=/\/\*[^]*?\*\//g;function wb(t){const e={};return t.replace(bb,"").split(yb).forEach(n=>{if(n){const r=n.split(_b);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fe(t){let e="";if(wt(t))e=t;else if(Le(t))for(let n=0;n<t.length;n++){const r=Fe(t[n]);r&&(e+=r+" ")}else if(ct(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Eb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ib=ad(Eb);function gg(t){return!!t||t===""}function Tb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ws(t[r],e[r]);return n}function ws(t,e){if(t===e)return!0;let n=vf(t),r=vf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Dn(t),r=Dn(e),n||r)return t===e;if(n=Le(t),r=Le(e),n||r)return n&&r?Tb(t,e):!1;if(n=ct(t),r=ct(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ws(t[o],e[o]))return!1}}return String(t)===String(e)}function ud(t,e){return t.findIndex(n=>ws(n,e))}const vg=t=>!!(t&&t.__v_isRef===!0),ye=t=>wt(t)?t:t==null?"":Le(t)||ct(t)&&(t.toString===fg||!qe(t.toString))?vg(t)?ye(t.value):JSON.stringify(t,yg,2):String(t),yg=(t,e)=>vg(e)?yg(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Oc(r,s)+" =>"]=i,n),{})}:bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oc(n))}:Dn(e)?Oc(e):ct(e)&&!Le(e)&&!pg(e)?String(e):e,Oc=(t,e="")=>{var n;return Dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class _g{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Zt;try{return Zt=this,e()}finally{Zt=n}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){this._on>0&&--this._on===0&&(Zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function bg(t){return new _g(t)}function wg(){return Zt}function Cb(t,e=!1){Zt&&Zt.cleanups.push(t)}let ft;const Dc=new WeakSet;class Eg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dc.has(this)&&(Dc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_f(this),Cg(this);const e=ft,n=Pn;ft=this,Pn=!0;try{return this.fn()}finally{xg(this),ft=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fd(e);this.deps=this.depsTail=void 0,_f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fu(this)&&this.run()}get dirty(){return fu(this)}}let Ig=0,io,so;function Tg(t,e=!1){if(t.flags|=8,e){t.next=so,so=t;return}t.next=io,io=t}function dd(){Ig++}function hd(){if(--Ig>0)return;if(so){let e=so;for(so=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;io;){let e=io;for(io=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Cg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xg(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),fd(r),xb(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function fu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wo)||(t.globalVersion=wo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fu(t))))return;t.flags|=2;const e=t.dep,n=ft,r=Pn;ft=t,Pn=!0;try{Cg(t);const i=t.fn(t._value);(e.version===0||Qr(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ft=n,Pn=r,xg(t),t.flags&=-3}}function fd(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)fd(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xb(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const Sg=[];function _r(){Sg.push(Pn),Pn=!1}function br(){const t=Sg.pop();Pn=t===void 0?!0:t}function _f(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ft;ft=void 0;try{e()}finally{ft=n}}}let wo=0;class kb{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!Pn||ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ft)n=this.activeLink=new kb(ft,this),ft.deps?(n.prevDep=ft.depsTail,ft.depsTail.nextDep=n,ft.depsTail=n):ft.deps=ft.depsTail=n,Ag(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ft.depsTail,n.nextDep=void 0,ft.depsTail.nextDep=n,ft.depsTail=n,ft.deps===n&&(ft.deps=r)}return n}trigger(e){this.version++,wo++,this.notify(e)}notify(e){dd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hd()}}}function Ag(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ag(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ka=new WeakMap,Ai=Symbol(""),pu=Symbol(""),Eo=Symbol("");function tn(t,e,n){if(Pn&&ft){let r=Ka.get(t);r||Ka.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new pd),i.map=r,i.key=n),i.track()}}function ur(t,e,n,r,i,s){const o=Ka.get(t);if(!o){wo++;return}const a=l=>{l&&l.trigger()};if(dd(),e==="clear")o.forEach(a);else{const l=Le(t),h=l&&Sl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Eo||!Dn(m)&&m>=f)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),h&&a(o.get(Eo)),e){case"add":l?h&&a(o.get("length")):(a(o.get(Ai)),ns(t)&&a(o.get(pu)));break;case"delete":l||(a(o.get(Ai)),ns(t)&&a(o.get(pu)));break;case"set":ns(t)&&a(o.get(Ai));break}}hd()}function Sb(t,e){const n=Ka.get(t);return n&&n.get(e)}function Gi(t){const e=nt(t);return e===t?e:(tn(e,"iterate",Eo),_n(t)?e:e.map(Mn))}function Ol(t){return tn(t=nt(t),"iterate",Eo),t}function zr(t,e){return wr(t)?ds(mr(t)?Mn(e):e):Mn(e)}const Ab={__proto__:null,[Symbol.iterator](){return Mc(this,Symbol.iterator,t=>zr(this,t))},concat(...t){return Gi(this).concat(...t.map(e=>Le(e)?Gi(e):e))},entries(){return Mc(this,"entries",t=>(t[1]=zr(this,t[1]),t))},every(t,e){return ir(this,"every",t,e,void 0,arguments)},filter(t,e){return ir(this,"filter",t,e,n=>n.map(r=>zr(this,r)),arguments)},find(t,e){return ir(this,"find",t,e,n=>zr(this,n),arguments)},findIndex(t,e){return ir(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ir(this,"findLast",t,e,n=>zr(this,n),arguments)},findLastIndex(t,e){return ir(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ir(this,"forEach",t,e,void 0,arguments)},includes(...t){return Lc(this,"includes",t)},indexOf(...t){return Lc(this,"indexOf",t)},join(t){return Gi(this).join(t)},lastIndexOf(...t){return Lc(this,"lastIndexOf",t)},map(t,e){return ir(this,"map",t,e,void 0,arguments)},pop(){return qs(this,"pop")},push(...t){return qs(this,"push",t)},reduce(t,...e){return bf(this,"reduce",t,e)},reduceRight(t,...e){return bf(this,"reduceRight",t,e)},shift(){return qs(this,"shift")},some(t,e){return ir(this,"some",t,e,void 0,arguments)},splice(...t){return qs(this,"splice",t)},toReversed(){return Gi(this).toReversed()},toSorted(t){return Gi(this).toSorted(t)},toSpliced(...t){return Gi(this).toSpliced(...t)},unshift(...t){return qs(this,"unshift",t)},values(){return Mc(this,"values",t=>zr(this,t))}};function Mc(t,e,n){const r=Ol(t),i=r[e]();return r!==t&&!_n(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const Rb=Array.prototype;function ir(t,e,n,r,i,s){const o=Ol(t),a=o!==t&&!_n(t),l=o[e];if(l!==Rb[e]){const p=l.apply(t,s);return a?Mn(p):p}let h=n;o!==t&&(a?h=function(p,m){return n.call(this,zr(t,p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,h,r);return a&&i?i(f):f}function bf(t,e,n,r){const i=Ol(t);let s=n;return i!==t&&(_n(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,zr(t,a),l,t)}),i[e](s,...r)}function Lc(t,e,n){const r=nt(t);tn(r,"iterate",Eo);const i=r[e](...n);return(i===-1||i===!1)&&Dl(n[0])?(n[0]=nt(n[0]),r[e](...n)):i}function qs(t,e,n=[]){_r(),dd();const r=nt(t)[e].apply(t,n);return hd(),br(),r}const Pb=ad("__proto__,__v_isRef,__isVue"),Rg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn));function Nb(t){Dn(t)||(t=String(t));const e=nt(this);return tn(e,"has",t),e.hasOwnProperty(t)}class Pg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Bb:Mg:s?Dg:Og).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Le(e);if(!i){let l;if(o&&(l=Ab[n]))return l;if(n==="hasOwnProperty")return Nb}const a=Reflect.get(e,n,St(e)?e:r);if((Dn(n)?Rg.has(n):Pb(n))||(i||tn(e,"get",n),s))return a;if(St(a)){const l=o&&Sl(n)?a:a.value;return i&&ct(l)?gu(l):l}return ct(a)?i?gu(a):Bo(a):a}}class Ng extends Pg{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];const o=Le(e)&&Sl(n);if(!this._isShallow){const h=wr(s);if(!_n(r)&&!wr(r)&&(s=nt(s),r=nt(r)),!o&&St(s)&&!St(r))return h||(s.value=r),!0}const a=o?Number(n)<e.length:ot(e,n),l=Reflect.set(e,n,r,St(e)?e:i);return e===nt(i)&&(a?Qr(r,s)&&ur(e,"set",n,r):ur(e,"add",n,r)),l}deleteProperty(e,n){const r=ot(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&ur(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Dn(n)||!Rg.has(n))&&tn(e,"has",n),r}ownKeys(e){return tn(e,"iterate",Le(e)?"length":Ai),Reflect.ownKeys(e)}}class Ob extends Pg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Db=new Ng,Mb=new Ob,Lb=new Ng(!0);const mu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function Vb(t,e,n){return function(...r){const i=this.__v_raw,s=nt(i),o=ns(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=i[t](...r),f=n?mu:e?ds:Mn;return!e&&tn(s,"iterate",l?pu:Ai),Ut(Object.create(h),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:a?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function _a(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $b(t,e){const n={get(i){const s=this.__v_raw,o=nt(s),a=nt(i);t||(Qr(i,a)&&tn(o,"get",i),tn(o,"get",a));const{has:l}=ya(o),h=e?mu:t?ds:Mn;if(l.call(o,i))return h(s.get(i));if(l.call(o,a))return h(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&tn(nt(i),"iterate",Ai),i.size},has(i){const s=this.__v_raw,o=nt(s),a=nt(i);return t||(Qr(i,a)&&tn(o,"has",i),tn(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=nt(a),h=e?mu:t?ds:Mn;return!t&&tn(l,"iterate",Ai),a.forEach((f,p)=>i.call(s,h(f),h(p),o))}};return Ut(n,t?{add:_a("add"),set:_a("set"),delete:_a("delete"),clear:_a("clear")}:{add(i){!e&&!_n(i)&&!wr(i)&&(i=nt(i));const s=nt(this);return ya(s).has.call(s,i)||(s.add(i),ur(s,"add",i,i)),this},set(i,s){!e&&!_n(s)&&!wr(s)&&(s=nt(s));const o=nt(this),{has:a,get:l}=ya(o);let h=a.call(o,i);h||(i=nt(i),h=a.call(o,i));const f=l.call(o,i);return o.set(i,s),h?Qr(s,f)&&ur(o,"set",i,s):ur(o,"add",i,s),this},delete(i){const s=nt(this),{has:o,get:a}=ya(s);let l=o.call(s,i);l||(i=nt(i),l=o.call(s,i)),a&&a.call(s,i);const h=s.delete(i);return l&&ur(s,"delete",i,void 0),h},clear(){const i=nt(this),s=i.size!==0,o=i.clear();return s&&ur(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Vb(i,t,e)}),n}function md(t,e){const n=$b(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ot(n,i)&&i in r?n:r,i,s)}const Fb={get:md(!1,!1)},Ub={get:md(!1,!0)},zb={get:md(!0,!1)};const Og=new WeakMap,Dg=new WeakMap,Mg=new WeakMap,Bb=new WeakMap;function jb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qb(t){return t.__v_skip||!Object.isExtensible(t)?0:jb(pb(t))}function Bo(t){return wr(t)?t:gd(t,!1,Db,Fb,Og)}function Lg(t){return gd(t,!1,Lb,Ub,Dg)}function gu(t){return gd(t,!0,Mb,zb,Mg)}function gd(t,e,n,r,i){if(!ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=qb(t);if(s===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function mr(t){return wr(t)?mr(t.__v_raw):!!(t&&t.__v_isReactive)}function wr(t){return!!(t&&t.__v_isReadonly)}function _n(t){return!!(t&&t.__v_isShallow)}function Dl(t){return t?!!t.__v_raw:!1}function nt(t){const e=t&&t.__v_raw;return e?nt(e):t}function vd(t){return!ot(t,"__v_skip")&&Object.isExtensible(t)&&mg(t,"__v_skip",!0),t}const Mn=t=>ct(t)?Bo(t):t,ds=t=>ct(t)?gu(t):t;function St(t){return t?t.__v_isRef===!0:!1}function ve(t){return Vg(t,!1)}function Wb(t){return Vg(t,!0)}function Vg(t,e){return St(t)?t:new Hb(t,e)}class Hb{constructor(e,n){this.dep=new pd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:nt(e),this._value=n?e:Mn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||_n(e)||wr(e);e=r?e:nt(e),Qr(e,n)&&(this._rawValue=e,this._value=r?e:Mn(e),this.dep.trigger())}}function be(t){return St(t)?t.value:t}const Gb={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return St(i)&&!St(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function $g(t){return mr(t)?t:new Proxy(t,Gb)}function Kb(t){const e=Le(t)?new Array(t.length):{};for(const n in t)e[n]=Jb(t,n);return e}class Qb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=nt(e);let i=!0,s=e;if(!Le(e)||!Sl(String(n)))do i=!Dl(s)||_n(s);while(i&&(s=s.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=be(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&St(this._raw[this._key])){const n=this._object[this._key];if(St(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Sb(this._raw,this._key)}}function Jb(t,e,n){return new Qb(t,e,n)}class Yb{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return Tg(this,!0),!0}get value(){const e=this.dep.track();return kg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xb(t,e,n=!1){let r,i;return qe(t)?r=t:(r=t.get,i=t.set),new Yb(r,i,n)}const ba={},Qa=new WeakMap;let Ei;function Zb(t,e=!1,n=Ei){if(n){let r=Qa.get(n);r||Qa.set(n,r=[]),r.push(t)}}function e0(t,e,n=dt){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,h=L=>i?L:_n(L)||i===!1||i===0?dr(L,1):dr(L);let f,p,m,g,_=!1,u=!1;if(St(t)?(p=()=>t.value,_=_n(t)):mr(t)?(p=()=>h(t),_=!0):Le(t)?(u=!0,_=t.some(L=>mr(L)||_n(L)),p=()=>t.map(L=>{if(St(L))return L.value;if(mr(L))return h(L);if(qe(L))return l?l(L,2):L()})):qe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){_r();try{m()}finally{br()}}const L=Ei;Ei=f;try{return l?l(t,3,[g]):t(g)}finally{Ei=L}}:p=Gn,e&&i){const L=p,V=i===!0?1/0:i;p=()=>dr(L(),V)}const E=wg(),T=()=>{f.stop(),E&&E.active&&cd(E.effects,f)};if(s&&e){const L=e;e=(...V)=>{L(...V),T()}}let S=u?new Array(t.length).fill(ba):ba;const M=L=>{if(!(!(f.flags&1)||!f.dirty&&!L))if(e){const V=f.run();if(i||_||(u?V.some((Q,P)=>Qr(Q,S[P])):Qr(V,S))){m&&m();const Q=Ei;Ei=f;try{const P=[V,S===ba?void 0:u&&S[0]===ba?[]:S,g];S=V,l?l(e,3,P):e(...P)}finally{Ei=Q}}}else f.run()};return a&&a(M),f=new Eg(p),f.scheduler=o?()=>o(M,!1):M,g=L=>Zb(L,!1,f),m=f.onStop=()=>{const L=Qa.get(f);if(L){if(l)l(L,4);else for(const V of L)V();Qa.delete(f)}},e?r?M(!0):S=f.run():o?o(M.bind(null,!0),!0):f.run(),T.pause=f.pause.bind(f),T.resume=f.resume.bind(f),T.stop=T,T}function dr(t,e=1/0,n){if(e<=0||!ct(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,St(t))dr(t.value,e,n);else if(Le(t))for(let r=0;r<t.length;r++)dr(t[r],e,n);else if(bs(t)||ns(t))t.forEach(r=>{dr(r,e,n)});else if(pg(t)){for(const r in t)dr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&dr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jo(t,e,n,r){try{return r?t(...r):t()}catch(i){Ml(i,e,n)}}function Ln(t,e,n,r){if(qe(t)){const i=jo(t,e,n,r);return i&&hg(i)&&i.catch(s=>{Ml(s,e,n)}),i}if(Le(t)){const i=[];for(let s=0;s<t.length;s++)i.push(Ln(t[s],e,n,r));return i}}function Ml(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}a=a.parent}if(s){_r(),jo(s,null,10,[t,l,h]),br();return}}t0(t,n,i,r,o)}function t0(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const cn=[];let jn=-1;const rs=[];let Br=null,Qi=0;const Fg=Promise.resolve();let Ja=null;function qo(t){const e=Ja||Fg;return t?e.then(this?t.bind(this):t):e}function n0(t){let e=jn+1,n=cn.length;for(;e<n;){const r=e+n>>>1,i=cn[r],s=Io(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function yd(t){if(!(t.flags&1)){const e=Io(t),n=cn[cn.length-1];!n||!(t.flags&2)&&e>=Io(n)?cn.push(t):cn.splice(n0(e),0,t),t.flags|=1,Ug()}}function Ug(){Ja||(Ja=Fg.then(Bg))}function r0(t){Le(t)?rs.push(...t):Br&&t.id===-1?Br.splice(Qi+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),Ug()}function wf(t,e,n=jn+1){for(;n<cn.length;n++){const r=cn[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;cn.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zg(t){if(rs.length){const e=[...new Set(rs)].sort((n,r)=>Io(n)-Io(r));if(rs.length=0,Br){Br.push(...e);return}for(Br=e,Qi=0;Qi<Br.length;Qi++){const n=Br[Qi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Br=null,Qi=0}}const Io=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Bg(t){try{for(jn=0;jn<cn.length;jn++){const e=cn[jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jn<cn.length;jn++){const e=cn[jn];e&&(e.flags&=-2)}jn=-1,cn.length=0,zg(),Ja=null,(cn.length||rs.length)&&Bg()}}let Gt=null,jg=null;function Ya(t){const e=Gt;return Gt=t,jg=t&&t.type.__scopeId||null,e}function bt(t,e=Gt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&el(-1);const s=Ya(e);let o;try{o=t(...i)}finally{Ya(s),r._d&&el(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ht(t,e){if(Gt===null)return t;const n=Ul(Gt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=dt]=e[i];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&dr(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function yi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(_r(),Ln(l,n,8,[t.el,a,t,e]),br())}}function oo(t,e){if(sn){let n=sn.provides;const r=sn.parent&&sn.parent.provides;r===n&&(n=sn.provides=Object.create(r)),n[t]=e}}function bn(t,e,n=!1){const r=Td();if(r||Ri){let i=Ri?Ri._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&qe(e)?e.call(r&&r.proxy):e}}function i0(){return!!(Td()||Ri)}const s0=Symbol.for("v-scx"),o0=()=>bn(s0);function Kt(t,e,n){return qg(t,e,n)}function qg(t,e,n=dt){const{immediate:r,deep:i,flush:s,once:o}=n,a=Ut({},n),l=e&&r||!e&&s!=="post";let h;if(ko){if(s==="sync"){const g=o0();h=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Gn,g.resume=Gn,g.pause=Gn,g}}const f=sn;a.call=(g,_,u)=>Ln(g,f,_,u);let p=!1;s==="post"?a.scheduler=g=>{Xt(g,f&&f.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(g,_)=>{_?g():yd(g)}),a.augmentJob=g=>{e&&(g.flags|=4),p&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const m=e0(t,e,a);return ko&&(h?h.push(m):l&&m()),m}function a0(t,e,n){const r=this.proxy,i=wt(t)?t.includes(".")?Wg(r,t):()=>r[t]:t.bind(r,r);let s;qe(e)?s=e:(s=e.handler,n=e);const o=Go(this),a=qg(i,s.bind(r),n);return o(),a}function Wg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Hg=Symbol("_vte"),Gg=t=>t.__isTeleport,ao=t=>t&&(t.disabled||t.disabled===""),Ef=t=>t&&(t.defer||t.defer===""),If=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Tf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,vu=(t,e)=>{const n=t&&t.to;return wt(n)?e?e(n):null:n},Kg={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,h){const{mc:f,pc:p,pbc:m,o:{insert:g,querySelector:_,createText:u,createComment:E}}=h,T=ao(e.props);let{shapeFlag:S,children:M,dynamicChildren:L}=e;if(t==null){const V=e.el=u(""),Q=e.anchor=u("");g(V,n,r),g(Q,n,r);const P=(C,R)=>{S&16&&f(M,C,R,i,s,o,a,l)},A=()=>{const C=e.target=vu(e.props,_),R=yu(C,e,u,g);C&&(o!=="svg"&&If(C)?o="svg":o!=="mathml"&&Tf(C)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(C),T||(P(C,R),Da(e,!1)))};T&&(P(n,Q),Da(e,!0)),Ef(e.props)?(e.el.__isMounted=!1,Xt(()=>{A(),delete e.el.__isMounted},s)):A()}else{if(Ef(e.props)&&t.el.__isMounted===!1){Xt(()=>{Kg.process(t,e,n,r,i,s,o,a,l,h)},s);return}e.el=t.el,e.targetStart=t.targetStart;const V=e.anchor=t.anchor,Q=e.target=t.target,P=e.targetAnchor=t.targetAnchor,A=ao(t.props),C=A?n:Q,R=A?V:P;if(o==="svg"||If(Q)?o="svg":(o==="mathml"||Tf(Q))&&(o="mathml"),L?(m(t.dynamicChildren,L,C,i,s,o,a),Ed(t,e,!0)):l||p(t,e,C,R,i,s,o,a,!1),T)A?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):wa(e,n,V,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const O=e.target=vu(e.props,_);O&&wa(e,O,null,h,0)}else A&&wa(e,Q,P,h,1);Da(e,T)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:h,targetAnchor:f,target:p,props:m}=t;if(p&&(i(h),i(f)),s&&i(l),o&16){const g=s||!ao(m);for(let _=0;_<a.length;_++){const u=a[_];r(u,e,n,g,!!u.dynamicChildren)}}},move:wa,hydrate:l0};function wa(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:h,props:f}=t,p=s===2;if(p&&r(o,e,n),(!p||ao(f))&&l&16)for(let m=0;m<h.length;m++)i(h[m],e,n,2);p&&r(a,e,n)}function l0(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:h,createText:f}},p){function m(E,T){let S=T;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")e.targetStart=S;else if(S.data==="teleport anchor"){e.targetAnchor=S,E._lpa=e.targetAnchor&&o(e.targetAnchor);break}}S=o(S)}}function g(E,T){T.anchor=p(o(E),T,a(E),n,r,i,s)}const _=e.target=vu(e.props,l),u=ao(e.props);if(_){const E=_._lpa||_.firstChild;e.shapeFlag&16&&(u?(g(t,e),m(_,E),e.targetAnchor||yu(_,e,f,h,a(t)===_?t:null)):(e.anchor=o(t),m(_,E),e.targetAnchor||yu(_,e,f,h),p(E&&o(E),e,_,n,r,i,s))),Da(e,u)}else u&&e.shapeFlag&16&&(g(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const _d=Kg;function Da(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function yu(t,e,n,r,i=null){const s=e.targetStart=n(""),o=e.targetAnchor=n("");return s[Hg]=o,t&&(r(s,t,i),r(o,t,i)),o}const qn=Symbol("_leaveCb"),Ws=Symbol("_enterCb");function c0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wo(()=>{t.isMounted=!0}),Ho(()=>{t.isUnmounting=!0}),t}const Tn=[Function,Array],Qg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},Jg=t=>{const e=t.subTree;return e.component?Jg(e.component):e},u0={name:"BaseTransition",props:Qg,setup(t,{slots:e}){const n=Td(),r=c0();return()=>{const i=e.default&&Zg(e.default(),!0);if(!i||!i.length)return;const s=Yg(i),o=nt(t),{mode:a}=o;if(r.isLeaving)return Vc(s);const l=Cf(s);if(!l)return Vc(s);let h=_u(l,o,r,n,p=>h=p);l.type!==rn&&To(l,h);let f=n.subTree&&Cf(n.subTree);if(f&&f.type!==rn&&!Ti(f,l)&&Jg(n).type!==rn){let p=_u(f,o,r,n);if(To(f,p),a==="out-in"&&l.type!==rn)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Vc(s);a==="in-out"&&l.type!==rn?p.delayLeave=(m,g,_)=>{const u=Xg(r,f);u[String(f.key)]=f,m[qn]=()=>{g(),m[qn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{_(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function Yg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==rn){e=n;break}}return e}const d0=u0;function Xg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _u(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:g,onAfterLeave:_,onLeaveCancelled:u,onBeforeAppear:E,onAppear:T,onAfterAppear:S,onAppearCancelled:M}=e,L=String(t.key),V=Xg(n,t),Q=(C,R)=>{C&&Ln(C,r,9,R)},P=(C,R)=>{const O=R[1];Q(C,R),Le(C)?C.every(b=>b.length<=1)&&O():C.length<=1&&O()},A={mode:o,persisted:a,beforeEnter(C){let R=l;if(!n.isMounted)if(s)R=E||l;else return;C[qn]&&C[qn](!0);const O=V[L];O&&Ti(t,O)&&O.el[qn]&&O.el[qn](),Q(R,[C])},enter(C){if(V[L]===t)return;let R=h,O=f,b=p;if(!n.isMounted)if(s)R=T||h,O=S||f,b=M||p;else return;let I=!1;C[Ws]=X=>{I||(I=!0,X?Q(b,[C]):Q(O,[C]),A.delayedLeave&&A.delayedLeave(),C[Ws]=void 0)};const w=C[Ws].bind(null,!1);R?P(R,[C,w]):w()},leave(C,R){const O=String(t.key);if(C[Ws]&&C[Ws](!0),n.isUnmounting)return R();Q(m,[C]);let b=!1;C[qn]=w=>{b||(b=!0,R(),w?Q(u,[C]):Q(_,[C]),C[qn]=void 0,V[O]===t&&delete V[O])};const I=C[qn].bind(null,!1);V[O]=t,g?P(g,[C,I]):I()},clone(C){const R=_u(C,e,n,r,i);return i&&i(R),R}};return A}function Vc(t){if(Ll(t))return t=ti(t),t.children=null,t}function Cf(t){if(!Ll(t))return Gg(t.type)&&t.children?Yg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&qe(n.default))return n.default()}}function To(t,e){t.shapeFlag&6&&t.component?(t.transition=e,To(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zg(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===De?(o.patchFlag&128&&i++,r=r.concat(Zg(o.children,e,a))):(e||o.type!==rn)&&r.push(a!=null?ti(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ev(t,e){return qe(t)?Ut({name:t.name},e,{setup:t}):t}function tv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function xf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Xa=new WeakMap;function lo(t,e,n,r,i=!1){if(Le(t)){t.forEach((u,E)=>lo(u,e&&(Le(e)?e[E]:e),n,r,i));return}if(is(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&lo(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?Ul(r.component):r.el,o=i?null:s,{i:a,r:l}=t,h=e&&e.r,f=a.refs===dt?a.refs={}:a.refs,p=a.setupState,m=nt(p),g=p===dt?dg:u=>xf(f,u)?!1:ot(m,u),_=(u,E)=>!(E&&xf(f,E));if(h!=null&&h!==l){if(kf(e),wt(h))f[h]=null,g(h)&&(p[h]=null);else if(St(h)){const u=e;_(h,u.k)&&(h.value=null),u.k&&(f[u.k]=null)}}if(qe(l))jo(l,a,12,[o,f]);else{const u=wt(l),E=St(l);if(u||E){const T=()=>{if(t.f){const S=u?g(l)?p[l]:f[l]:_()||!t.k?l.value:f[t.k];if(i)Le(S)&&cd(S,s);else if(Le(S))S.includes(s)||S.push(s);else if(u)f[l]=[s],g(l)&&(p[l]=f[l]);else{const M=[s];_(l,t.k)&&(l.value=M),t.k&&(f[t.k]=M)}}else u?(f[l]=o,g(l)&&(p[l]=o)):E&&(_(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const S=()=>{T(),Xa.delete(t)};S.id=-1,Xa.set(t,S),Xt(S,n)}else kf(t),T()}}}function kf(t){const e=Xa.get(t);e&&(e.flags|=8,Xa.delete(t))}Nl().requestIdleCallback;Nl().cancelIdleCallback;const is=t=>!!t.type.__asyncLoader,Ll=t=>t.type.__isKeepAlive;function h0(t,e){nv(t,"a",e)}function f0(t,e){nv(t,"da",e)}function nv(t,e,n=sn){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ll(i.parent.vnode)&&p0(r,e,n,i),i=i.parent}}function p0(t,e,n,r){const i=Vl(e,t,r,!0);rv(()=>{cd(r[e],i)},n)}function Vl(t,e,n=sn,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{_r();const a=Go(n),l=Ln(e,n,t,o);return a(),br(),l});return r?i.unshift(s):i.push(s),s}}const kr=t=>(e,n=sn)=>{(!ko||t==="sp")&&Vl(t,(...r)=>e(...r),n)},m0=kr("bm"),Wo=kr("m"),g0=kr("bu"),v0=kr("u"),Ho=kr("bum"),rv=kr("um"),y0=kr("sp"),_0=kr("rtg"),b0=kr("rtc");function w0(t,e=sn){Vl("ec",t,e)}const E0="components",iv=Symbol.for("v-ndc");function sv(t){return wt(t)?I0(E0,t,!1)||t:t||iv}function I0(t,e,n=!0,r=!1){const i=Gt||sn;if(i){const s=i.type;{const a=aw(s,!1);if(a&&(a===e||a===kn(e)||a===Rl(kn(e))))return s}const o=Sf(i[t]||s[t],e)||Sf(i.appContext[t],e);return!o&&r?s:o}}function Sf(t,e){return t&&(t[e]||t[kn(e)]||t[Rl(kn(e))])}function it(t,e,n,r){let i;const s=n,o=Le(t);if(o||wt(t)){const a=o&&mr(t);let l=!1,h=!1;a&&(l=!_n(t),h=wr(t),t=Ol(t)),i=new Array(t.length);for(let f=0,p=t.length;f<p;f++)i[f]=e(l?h?ds(Mn(t[f])):Mn(t[f]):t[f],f,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s)}else if(ct(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,h=a.length;l<h;l++){const f=a[l];i[l]=e(t[f],f,l,s)}}else i=[];return i}function bu(t,e,n={},r,i){if(Gt.ce||Gt.parent&&is(Gt.parent)&&Gt.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),W(),at(De,null,[pt("slot",n,r)],h?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),W();const o=s&&ov(s(n)),a=n.key||o&&o.key,l=at(De,{key:(a&&!Dn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function ov(t){return t.some(e=>xo(e)?!(e.type===rn||e.type===De&&!ov(e.children)):!0)?t:null}const wu=t=>t?Cv(t)?Ul(t):wu(t.parent):null,co=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wu(t.parent),$root:t=>wu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lv(t),$forceUpdate:t=>t.f||(t.f=()=>{yd(t.update)}),$nextTick:t=>t.n||(t.n=qo.bind(t.proxy)),$watch:t=>a0.bind(t)}),$c=(t,e)=>t!==dt&&!t.__isScriptSetup&&ot(t,e),T0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if($c(r,e))return o[e]=1,r[e];if(i!==dt&&ot(i,e))return o[e]=2,i[e];if(ot(s,e))return o[e]=3,s[e];if(n!==dt&&ot(n,e))return o[e]=4,n[e];Eu&&(o[e]=0)}}const h=co[e];let f,p;if(h)return e==="$attrs"&&tn(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==dt&&ot(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ot(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return $c(i,e)?(i[e]=n,!0):r!==dt&&ot(r,e)?(r[e]=n,!0):ot(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(n[a]||t!==dt&&a[0]!=="$"&&ot(t,a)||$c(e,a)||ot(s,a)||ot(r,a)||ot(co,a)||ot(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ot(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Af(t){return Le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Eu=!0;function C0(t){const e=lv(t),n=t.proxy,r=t.ctx;Eu=!1,e.beforeCreate&&Rf(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:u,deactivated:E,beforeDestroy:T,beforeUnmount:S,destroyed:M,unmounted:L,render:V,renderTracked:Q,renderTriggered:P,errorCaptured:A,serverPrefetch:C,expose:R,inheritAttrs:O,components:b,directives:I,filters:w}=e;if(h&&x0(h,r,null),o)for(const J in o){const ce=o[J];qe(ce)&&(r[J]=ce.bind(n))}if(i){const J=i.call(n,n);ct(J)&&(t.data=Bo(J))}if(Eu=!0,s)for(const J in s){const ce=s[J],re=qe(ce)?ce.bind(n,n):qe(ce.get)?ce.get.bind(n,n):Gn,_e=!qe(ce)&&qe(ce.set)?ce.set.bind(n):Gn,ne=Se({get:re,set:_e});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>ne.value,set:ee=>ne.value=ee})}if(a)for(const J in a)av(a[J],r,n,J);if(l){const J=qe(l)?l.call(n):l;Reflect.ownKeys(J).forEach(ce=>{oo(ce,J[ce])})}f&&Rf(f,t,"c");function oe(J,ce){Le(ce)?ce.forEach(re=>J(re.bind(n))):ce&&J(ce.bind(n))}if(oe(m0,p),oe(Wo,m),oe(g0,g),oe(v0,_),oe(h0,u),oe(f0,E),oe(w0,A),oe(b0,Q),oe(_0,P),oe(Ho,S),oe(rv,L),oe(y0,C),Le(R))if(R.length){const J=t.exposed||(t.exposed={});R.forEach(ce=>{Object.defineProperty(J,ce,{get:()=>n[ce],set:re=>n[ce]=re,enumerable:!0})})}else t.exposed||(t.exposed={});V&&t.render===Gn&&(t.render=V),O!=null&&(t.inheritAttrs=O),b&&(t.components=b),I&&(t.directives=I),C&&tv(t)}function x0(t,e,n=Gn){Le(t)&&(t=Iu(t));for(const r in t){const i=t[r];let s;ct(i)?"default"in i?s=bn(i.from||r,i.default,!0):s=bn(i.from||r):s=bn(i),St(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Rf(t,e,n){Ln(Le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function av(t,e,n,r){let i=r.includes(".")?Wg(n,r):()=>n[r];if(wt(t)){const s=e[t];qe(s)&&Kt(i,s)}else if(qe(t))Kt(i,t.bind(n));else if(ct(t))if(Le(t))t.forEach(s=>av(s,e,n,r));else{const s=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(s)&&Kt(i,s,t)}}function lv(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(h=>Za(l,h,o,!0)),Za(l,e,o)),ct(e)&&s.set(e,l),l}function Za(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Za(t,s,n,!0),i&&i.forEach(o=>Za(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=k0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const k0={data:Pf,props:Nf,emits:Nf,methods:Js,computed:Js,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Js,directives:Js,watch:A0,provide:Pf,inject:S0};function Pf(t,e){return e?t?function(){return Ut(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function S0(t,e){return Js(Iu(t),Iu(e))}function Iu(t){if(Le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function an(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?Ut(Object.create(null),t,e):e}function Nf(t,e){return t?Le(t)&&Le(e)?[...new Set([...t,...e])]:Ut(Object.create(null),Af(t),Af(e??{})):e}function A0(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const r in e)n[r]=an(t[r],e[r]);return n}function cv(){return{app:null,config:{isNativeTag:dg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R0=0;function P0(t,e){return function(r,i=null){qe(r)||(r=Ut({},r)),i!=null&&!ct(i)&&(i=null);const s=cv(),o=new WeakSet,a=[];let l=!1;const h=s.app={_uid:R0++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:cw,get config(){return s.config},set config(f){},use(f,...p){return o.has(f)||(f&&qe(f.install)?(o.add(f),f.install(h,...p)):qe(f)&&(o.add(f),f(h,...p))),h},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),h},component(f,p){return p?(s.components[f]=p,h):s.components[f]},directive(f,p){return p?(s.directives[f]=p,h):s.directives[f]},mount(f,p,m){if(!l){const g=h._ceVNode||pt(r,i);return g.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),t(g,f,m),l=!0,h._container=f,f.__vue_app__=h,Ul(g.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Ln(a,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return s.provides[f]=p,h},runWithContext(f){const p=Ri;Ri=h;try{return f()}finally{Ri=p}}};return h}}let Ri=null;const N0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${ci(e)}Modifiers`];function O0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||dt;let i=n;const s=e.startsWith("update:"),o=s&&N0(r,e.slice(7));o&&(o.trim&&(i=n.map(f=>wt(f)?f.trim():f)),o.number&&(i=n.map(Pl)));let a,l=r[a=Nc(e)]||r[a=Nc(kn(e))];!l&&s&&(l=r[a=Nc(ci(e))]),l&&Ln(l,t,6,i);const h=r[a+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ln(h,t,6,i)}}const D0=new WeakMap;function uv(t,e,n=!1){const r=n?D0:e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!qe(t)){const l=h=>{const f=uv(h,e,!0);f&&(a=!0,Ut(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ct(t)&&r.set(t,null),null):(Le(s)?s.forEach(l=>o[l]=null):Ut(o,s),ct(t)&&r.set(t,o),o)}function $l(t,e){return!t||!kl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(t,e[0].toLowerCase()+e.slice(1))||ot(t,ci(e))||ot(t,e))}function Of(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:h,renderCache:f,props:p,data:m,setupState:g,ctx:_,inheritAttrs:u}=t,E=Ya(t);let T,S;try{if(n.shapeFlag&4){const L=i||r,V=L;T=Hn(h.call(V,L,f,p,g,m,_)),S=a}else{const L=e;T=Hn(L.length>1?L(p,{attrs:a,slots:o,emit:l}):L(p,null)),S=e.props?a:M0(a)}}catch(L){uo.length=0,Ml(L,t,1),T=pt(rn)}let M=T;if(S&&u!==!1){const L=Object.keys(S),{shapeFlag:V}=M;L.length&&V&7&&(s&&L.some(ld)&&(S=L0(S,s)),M=ti(M,S,!1,!0))}return n.dirs&&(M=ti(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&To(M,n.transition),T=M,Ya(E),T}const M0=t=>{let e;for(const n in t)(n==="class"||n==="style"||kl(n))&&((e||(e={}))[n]=t[n]);return e},L0=(t,e)=>{const n={};for(const r in t)(!ld(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function V0(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Df(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(dv(o,r,m)&&!$l(h,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Df(r,o,h):!0:!!o;return!1}function Df(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(dv(e,t,s)&&!$l(n,s))return!0}return!1}function dv(t,e,n){const r=t[n],i=e[n];return n==="style"&&ct(r)&&ct(i)?!ws(r,i):r!==i}function $0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const hv={},fv=()=>Object.create(hv),pv=t=>Object.getPrototypeOf(t)===hv;function F0(t,e,n,r=!1){const i={},s=fv();t.propsDefaults=Object.create(null),mv(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Lg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function U0(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=nt(i),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if($l(t.emitsOptions,m))continue;const g=e[m];if(l)if(ot(s,m))g!==s[m]&&(s[m]=g,h=!0);else{const _=kn(m);i[_]=Tu(l,a,_,g,t,!1)}else g!==s[m]&&(s[m]=g,h=!0)}}}else{mv(t,e,i,s)&&(h=!0);let f;for(const p in a)(!e||!ot(e,p)&&((f=ci(p))===p||!ot(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=Tu(l,a,p,void 0,t,!0)):delete i[p]);if(s!==a)for(const p in s)(!e||!ot(e,p))&&(delete s[p],h=!0)}h&&ur(t.attrs,"set","")}function mv(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ro(l))continue;const h=e[l];let f;i&&ot(i,f=kn(l))?!s||!s.includes(f)?n[f]=h:(a||(a={}))[f]=h:$l(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(s){const l=nt(n),h=a||dt;for(let f=0;f<s.length;f++){const p=s[f];n[p]=Tu(i,l,p,h[p],t,!ot(h,p))}}return o}function Tu(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ot(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const f=Go(i);r=h[n]=l.call(null,e),f()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ci(n))&&(r=!0))}return r}const z0=new WeakMap;function gv(t,e,n=!1){const r=n?z0:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!qe(t)){const f=p=>{l=!0;const[m,g]=gv(p,e,!0);Ut(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!l)return ct(t)&&r.set(t,ts),ts;if(Le(s))for(let f=0;f<s.length;f++){const p=kn(s[f]);Mf(p)&&(o[p]=dt)}else if(s)for(const f in s){const p=kn(f);if(Mf(p)){const m=s[f],g=o[p]=Le(m)||qe(m)?{type:m}:Ut({},m),_=g.type;let u=!1,E=!0;if(Le(_))for(let T=0;T<_.length;++T){const S=_[T],M=qe(S)&&S.name;if(M==="Boolean"){u=!0;break}else M==="String"&&(E=!1)}else u=qe(_)&&_.name==="Boolean";g[0]=u,g[1]=E,(u||ot(g,"default"))&&a.push(p)}}const h=[o,a];return ct(t)&&r.set(t,h),h}function Mf(t){return t[0]!=="$"&&!ro(t)}const bd=t=>t==="_"||t==="_ctx"||t==="$stable",wd=t=>Le(t)?t.map(Hn):[Hn(t)],B0=(t,e,n)=>{if(e._n)return e;const r=bt((...i)=>wd(e(...i)),n);return r._c=!1,r},vv=(t,e,n)=>{const r=t._ctx;for(const i in t){if(bd(i))continue;const s=t[i];if(qe(s))e[i]=B0(i,s,r);else if(s!=null){const o=wd(s);e[i]=()=>o}}},yv=(t,e)=>{const n=wd(e);t.slots.default=()=>n},_v=(t,e,n)=>{for(const r in e)(n||!bd(r))&&(t[r]=e[r])},j0=(t,e,n)=>{const r=t.slots=fv();if(t.vnode.shapeFlag&32){const i=e._;i?(_v(r,e,n),n&&mg(r,"_",i,!0)):vv(e,r)}else e&&yv(t,e)},q0=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=dt;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:_v(i,e,n):(s=!e.$stable,vv(e,i)),o=e}else e&&(yv(t,e),o={default:1});if(s)for(const a in i)!bd(a)&&o[a]==null&&delete i[a]},Xt=Q0;function W0(t){return H0(t)}function H0(t,e){const n=Nl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:g=Gn,insertStaticContent:_}=t,u=(z,H,v,K=null,q=null,N=null,D=void 0,B=null,U=!!H.dynamicChildren)=>{if(z===H)return;z&&!Ti(z,H)&&(K=G(z),ee(z,q,N,!0),z=null),H.patchFlag===-2&&(U=!1,H.dynamicChildren=null);const{type:k,ref:j,shapeFlag:te}=H;switch(k){case Fl:E(z,H,v,K);break;case rn:T(z,H,v,K);break;case Ma:z==null&&S(H,v,K,D);break;case De:b(z,H,v,K,q,N,D,B,U);break;default:te&1?V(z,H,v,K,q,N,D,B,U):te&6?I(z,H,v,K,q,N,D,B,U):(te&64||te&128)&&k.process(z,H,v,K,q,N,D,B,U,Ie)}j!=null&&q?lo(j,z&&z.ref,N,H||z,!H):j==null&&z&&z.ref!=null&&lo(z.ref,null,N,z,!0)},E=(z,H,v,K)=>{if(z==null)r(H.el=a(H.children),v,K);else{const q=H.el=z.el;H.children!==z.children&&h(q,H.children)}},T=(z,H,v,K)=>{z==null?r(H.el=l(H.children||""),v,K):H.el=z.el},S=(z,H,v,K)=>{[z.el,z.anchor]=_(z.children,H,v,K,z.el,z.anchor)},M=({el:z,anchor:H},v,K)=>{let q;for(;z&&z!==H;)q=m(z),r(z,v,K),z=q;r(H,v,K)},L=({el:z,anchor:H})=>{let v;for(;z&&z!==H;)v=m(z),i(z),z=v;i(H)},V=(z,H,v,K,q,N,D,B,U)=>{if(H.type==="svg"?D="svg":H.type==="math"&&(D="mathml"),z==null)Q(H,v,K,q,N,D,B,U);else{const k=z.el&&z.el._isVueCE?z.el:null;try{k&&k._beginPatch(),C(z,H,q,N,D,B,U)}finally{k&&k._endPatch()}}},Q=(z,H,v,K,q,N,D,B)=>{let U,k;const{props:j,shapeFlag:te,transition:ae,dirs:fe}=z;if(U=z.el=o(z.type,N,j&&j.is,j),te&8?f(U,z.children):te&16&&A(z.children,U,null,K,q,Fc(z,N),D,B),fe&&yi(z,null,K,"created"),P(U,z,z.scopeId,D,K),j){for(const Pe in j)Pe!=="value"&&!ro(Pe)&&s(U,Pe,null,j[Pe],N,K);"value"in j&&s(U,"value",null,j.value,N),(k=j.onVnodeBeforeMount)&&Bn(k,K,z)}fe&&yi(z,null,K,"beforeMount");const Ee=G0(q,ae);Ee&&ae.beforeEnter(U),r(U,H,v),((k=j&&j.onVnodeMounted)||Ee||fe)&&Xt(()=>{k&&Bn(k,K,z),Ee&&ae.enter(U),fe&&yi(z,null,K,"mounted")},q)},P=(z,H,v,K,q)=>{if(v&&g(z,v),K)for(let N=0;N<K.length;N++)g(z,K[N]);if(q){let N=q.subTree;if(H===N||Ev(N.type)&&(N.ssContent===H||N.ssFallback===H)){const D=q.vnode;P(z,D,D.scopeId,D.slotScopeIds,q.parent)}}},A=(z,H,v,K,q,N,D,B,U=0)=>{for(let k=U;k<z.length;k++){const j=z[k]=B?cr(z[k]):Hn(z[k]);u(null,j,H,v,K,q,N,D,B)}},C=(z,H,v,K,q,N,D)=>{const B=H.el=z.el;let{patchFlag:U,dynamicChildren:k,dirs:j}=H;U|=z.patchFlag&16;const te=z.props||dt,ae=H.props||dt;let fe;if(v&&_i(v,!1),(fe=ae.onVnodeBeforeUpdate)&&Bn(fe,v,H,z),j&&yi(H,z,v,"beforeUpdate"),v&&_i(v,!0),(te.innerHTML&&ae.innerHTML==null||te.textContent&&ae.textContent==null)&&f(B,""),k?R(z.dynamicChildren,k,B,v,K,Fc(H,q),N):D||ce(z,H,B,null,v,K,Fc(H,q),N,!1),U>0){if(U&16)O(B,te,ae,v,q);else if(U&2&&te.class!==ae.class&&s(B,"class",null,ae.class,q),U&4&&s(B,"style",te.style,ae.style,q),U&8){const Ee=H.dynamicProps;for(let Pe=0;Pe<Ee.length;Pe++){const he=Ee[Pe],Be=te[he],rt=ae[he];(rt!==Be||he==="value")&&s(B,he,Be,rt,q,v)}}U&1&&z.children!==H.children&&f(B,H.children)}else!D&&k==null&&O(B,te,ae,v,q);((fe=ae.onVnodeUpdated)||j)&&Xt(()=>{fe&&Bn(fe,v,H,z),j&&yi(H,z,v,"updated")},K)},R=(z,H,v,K,q,N,D)=>{for(let B=0;B<H.length;B++){const U=z[B],k=H[B],j=U.el&&(U.type===De||!Ti(U,k)||U.shapeFlag&198)?p(U.el):v;u(U,k,j,null,K,q,N,D,!0)}},O=(z,H,v,K,q)=>{if(H!==v){if(H!==dt)for(const N in H)!ro(N)&&!(N in v)&&s(z,N,H[N],null,q,K);for(const N in v){if(ro(N))continue;const D=v[N],B=H[N];D!==B&&N!=="value"&&s(z,N,B,D,q,K)}"value"in v&&s(z,"value",H.value,v.value,q)}},b=(z,H,v,K,q,N,D,B,U)=>{const k=H.el=z?z.el:a(""),j=H.anchor=z?z.anchor:a("");let{patchFlag:te,dynamicChildren:ae,slotScopeIds:fe}=H;fe&&(B=B?B.concat(fe):fe),z==null?(r(k,v,K),r(j,v,K),A(H.children||[],v,j,q,N,D,B,U)):te>0&&te&64&&ae&&z.dynamicChildren&&z.dynamicChildren.length===ae.length?(R(z.dynamicChildren,ae,v,q,N,D,B),(H.key!=null||q&&H===q.subTree)&&Ed(z,H,!0)):ce(z,H,v,j,q,N,D,B,U)},I=(z,H,v,K,q,N,D,B,U)=>{H.slotScopeIds=B,z==null?H.shapeFlag&512?q.ctx.activate(H,v,K,D,U):w(H,v,K,q,N,D,U):X(z,H,U)},w=(z,H,v,K,q,N,D)=>{const B=z.component=nw(z,K,q);if(Ll(z)&&(B.ctx.renderer=Ie),rw(B,!1,D),B.asyncDep){if(q&&q.registerDep(B,oe,D),!z.el){const U=B.subTree=pt(rn);T(null,U,H,v),z.placeholder=U.el}}else oe(B,z,H,v,q,N,D)},X=(z,H,v)=>{const K=H.component=z.component;if(V0(z,H,v))if(K.asyncDep&&!K.asyncResolved){J(K,H,v);return}else K.next=H,K.update();else H.el=z.el,K.vnode=H},oe=(z,H,v,K,q,N,D)=>{const B=()=>{if(z.isMounted){let{next:te,bu:ae,u:fe,parent:Ee,vnode:Pe}=z;{const yt=bv(z);if(yt){te&&(te.el=Pe.el,J(z,te,D)),yt.asyncDep.then(()=>{Xt(()=>{z.isUnmounted||k()},q)});return}}let he=te,Be;_i(z,!1),te?(te.el=Pe.el,J(z,te,D)):te=Pe,ae&&Oa(ae),(Be=te.props&&te.props.onVnodeBeforeUpdate)&&Bn(Be,Ee,te,Pe),_i(z,!0);const rt=Of(z),Ke=z.subTree;z.subTree=rt,u(Ke,rt,p(Ke.el),G(Ke),z,q,N),te.el=rt.el,he===null&&$0(z,rt.el),fe&&Xt(fe,q),(Be=te.props&&te.props.onVnodeUpdated)&&Xt(()=>Bn(Be,Ee,te,Pe),q)}else{let te;const{el:ae,props:fe}=H,{bm:Ee,m:Pe,parent:he,root:Be,type:rt}=z,Ke=is(H);_i(z,!1),Ee&&Oa(Ee),!Ke&&(te=fe&&fe.onVnodeBeforeMount)&&Bn(te,he,H),_i(z,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(rt);const yt=z.subTree=Of(z);u(null,yt,v,K,z,q,N),H.el=yt.el}if(Pe&&Xt(Pe,q),!Ke&&(te=fe&&fe.onVnodeMounted)){const yt=H;Xt(()=>Bn(te,he,yt),q)}(H.shapeFlag&256||he&&is(he.vnode)&&he.vnode.shapeFlag&256)&&z.a&&Xt(z.a,q),z.isMounted=!0,H=v=K=null}};z.scope.on();const U=z.effect=new Eg(B);z.scope.off();const k=z.update=U.run.bind(U),j=z.job=U.runIfDirty.bind(U);j.i=z,j.id=z.uid,U.scheduler=()=>yd(j),_i(z,!0),k()},J=(z,H,v)=>{H.component=z;const K=z.vnode.props;z.vnode=H,z.next=null,U0(z,H.props,K,v),q0(z,H.children,v),_r(),wf(z),br()},ce=(z,H,v,K,q,N,D,B,U=!1)=>{const k=z&&z.children,j=z?z.shapeFlag:0,te=H.children,{patchFlag:ae,shapeFlag:fe}=H;if(ae>0){if(ae&128){_e(k,te,v,K,q,N,D,B,U);return}else if(ae&256){re(k,te,v,K,q,N,D,B,U);return}}fe&8?(j&16&&le(k,q,N),te!==k&&f(v,te)):j&16?fe&16?_e(k,te,v,K,q,N,D,B,U):le(k,q,N,!0):(j&8&&f(v,""),fe&16&&A(te,v,K,q,N,D,B,U))},re=(z,H,v,K,q,N,D,B,U)=>{z=z||ts,H=H||ts;const k=z.length,j=H.length,te=Math.min(k,j);let ae;for(ae=0;ae<te;ae++){const fe=H[ae]=U?cr(H[ae]):Hn(H[ae]);u(z[ae],fe,v,null,q,N,D,B,U)}k>j?le(z,q,N,!0,!1,te):A(H,v,K,q,N,D,B,U,te)},_e=(z,H,v,K,q,N,D,B,U)=>{let k=0;const j=H.length;let te=z.length-1,ae=j-1;for(;k<=te&&k<=ae;){const fe=z[k],Ee=H[k]=U?cr(H[k]):Hn(H[k]);if(Ti(fe,Ee))u(fe,Ee,v,null,q,N,D,B,U);else break;k++}for(;k<=te&&k<=ae;){const fe=z[te],Ee=H[ae]=U?cr(H[ae]):Hn(H[ae]);if(Ti(fe,Ee))u(fe,Ee,v,null,q,N,D,B,U);else break;te--,ae--}if(k>te){if(k<=ae){const fe=ae+1,Ee=fe<j?H[fe].el:K;for(;k<=ae;)u(null,H[k]=U?cr(H[k]):Hn(H[k]),v,Ee,q,N,D,B,U),k++}}else if(k>ae)for(;k<=te;)ee(z[k],q,N,!0),k++;else{const fe=k,Ee=k,Pe=new Map;for(k=Ee;k<=ae;k++){const tt=H[k]=U?cr(H[k]):Hn(H[k]);tt.key!=null&&Pe.set(tt.key,k)}let he,Be=0;const rt=ae-Ee+1;let Ke=!1,yt=0;const Ge=new Array(rt);for(k=0;k<rt;k++)Ge[k]=0;for(k=fe;k<=te;k++){const tt=z[k];if(Be>=rt){ee(tt,q,N,!0);continue}let Ze;if(tt.key!=null)Ze=Pe.get(tt.key);else for(he=Ee;he<=ae;he++)if(Ge[he-Ee]===0&&Ti(tt,H[he])){Ze=he;break}Ze===void 0?ee(tt,q,N,!0):(Ge[Ze-Ee]=k+1,Ze>=yt?yt=Ze:Ke=!0,u(tt,H[Ze],v,null,q,N,D,B,U),Be++)}const Jt=Ke?K0(Ge):ts;for(he=Jt.length-1,k=rt-1;k>=0;k--){const tt=Ee+k,Ze=H[tt],Tt=H[tt+1],Te=tt+1<j?Tt.el||wv(Tt):K;Ge[k]===0?u(null,Ze,v,Te,q,N,D,B,U):Ke&&(he<0||k!==Jt[he]?ne(Ze,v,Te,2):he--)}}},ne=(z,H,v,K,q=null)=>{const{el:N,type:D,transition:B,children:U,shapeFlag:k}=z;if(k&6){ne(z.component.subTree,H,v,K);return}if(k&128){z.suspense.move(H,v,K);return}if(k&64){D.move(z,H,v,Ie);return}if(D===De){r(N,H,v);for(let te=0;te<U.length;te++)ne(U[te],H,v,K);r(z.anchor,H,v);return}if(D===Ma){M(z,H,v);return}if(K!==2&&k&1&&B)if(K===0)B.beforeEnter(N),r(N,H,v),Xt(()=>B.enter(N),q);else{const{leave:te,delayLeave:ae,afterLeave:fe}=B,Ee=()=>{z.ctx.isUnmounted?i(N):r(N,H,v)},Pe=()=>{N._isLeaving&&N[qn](!0),te(N,()=>{Ee(),fe&&fe()})};ae?ae(N,Ee,Pe):Pe()}else r(N,H,v)},ee=(z,H,v,K=!1,q=!1)=>{const{type:N,props:D,ref:B,children:U,dynamicChildren:k,shapeFlag:j,patchFlag:te,dirs:ae,cacheIndex:fe}=z;if(te===-2&&(q=!1),B!=null&&(_r(),lo(B,null,v,z,!0),br()),fe!=null&&(H.renderCache[fe]=void 0),j&256){H.ctx.deactivate(z);return}const Ee=j&1&&ae,Pe=!is(z);let he;if(Pe&&(he=D&&D.onVnodeBeforeUnmount)&&Bn(he,H,z),j&6)$(z.component,v,K);else{if(j&128){z.suspense.unmount(v,K);return}Ee&&yi(z,null,H,"beforeUnmount"),j&64?z.type.remove(z,H,v,Ie,K):k&&!k.hasOnce&&(N!==De||te>0&&te&64)?le(k,H,v,!1,!0):(N===De&&te&384||!q&&j&16)&&le(U,H,v),K&&de(z)}(Pe&&(he=D&&D.onVnodeUnmounted)||Ee)&&Xt(()=>{he&&Bn(he,H,z),Ee&&yi(z,null,H,"unmounted")},v)},de=z=>{const{type:H,el:v,anchor:K,transition:q}=z;if(H===De){pe(v,K);return}if(H===Ma){L(z);return}const N=()=>{i(v),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(z.shapeFlag&1&&q&&!q.persisted){const{leave:D,delayLeave:B}=q,U=()=>D(v,N);B?B(z.el,N,U):U()}else N()},pe=(z,H)=>{let v;for(;z!==H;)v=m(z),i(z),z=v;i(H)},$=(z,H,v)=>{const{bum:K,scope:q,job:N,subTree:D,um:B,m:U,a:k}=z;Lf(U),Lf(k),K&&Oa(K),q.stop(),N&&(N.flags|=8,ee(D,z,H,v)),B&&Xt(B,H),Xt(()=>{z.isUnmounted=!0},H)},le=(z,H,v,K=!1,q=!1,N=0)=>{for(let D=N;D<z.length;D++)ee(z[D],H,v,K,q)},G=z=>{if(z.shapeFlag&6)return G(z.component.subTree);if(z.shapeFlag&128)return z.suspense.next();const H=m(z.anchor||z.el),v=H&&H[Hg];return v?m(v):H};let Z=!1;const ge=(z,H,v)=>{let K;z==null?H._vnode&&(ee(H._vnode,null,null,!0),K=H._vnode.component):u(H._vnode||null,z,H,null,null,null,v),H._vnode=z,Z||(Z=!0,wf(K),zg(),Z=!1)},Ie={p:u,um:ee,m:ne,r:de,mt:w,mc:A,pc:ce,pbc:R,n:G,o:t};return{render:ge,hydrate:void 0,createApp:P0(ge)}}function Fc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _i({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function G0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ed(t,e,n=!1){const r=t.children,i=e.children;if(Le(r)&&Le(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=cr(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Ed(o,a)),a.type===Fl&&(a.patchFlag===-1&&(a=i[s]=cr(a)),a.el=o.el),a.type===rn&&!a.el&&(a.el=o.el)}}function K0(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(i=n[n.length-1],t[i]<h){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<h?s=a+1:o=a;h<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function bv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bv(e)}function Lf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function wv(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?wv(e.subTree):null}const Ev=t=>t.__isSuspense;function Q0(t,e){e&&e.pendingBranch?Le(t)?e.effects.push(...t):e.effects.push(t):r0(t)}const De=Symbol.for("v-fgt"),Fl=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),uo=[];let vn=null;function W(t=!1){uo.push(vn=t?null:[])}function J0(){uo.pop(),vn=uo[uo.length-1]||null}let Co=1;function el(t,e=!1){Co+=t,t<0&&vn&&e&&(vn.hasOnce=!0)}function Iv(t){return t.dynamicChildren=Co>0?vn||ts:null,J0(),Co>0&&vn&&vn.push(t),t}function Y(t,e,n,r,i,s){return Iv(d(t,e,n,r,i,s,!0))}function at(t,e,n,r,i){return Iv(pt(t,e,n,r,i,!0))}function xo(t){return t?t.__v_isVNode===!0:!1}function Ti(t,e){return t.type===e.type&&t.key===e.key}const Tv=({key:t})=>t??null,La=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||St(t)||qe(t)?{i:Gt,r:t,k:e,f:!!n}:t:null);function d(t,e=null,n=null,r=0,i=null,s=t===De?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tv(e),ref:e&&La(e),scopeId:jg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Gt};return a?(Id(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=wt(n)?8:16),Co>0&&!o&&vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vn.push(l),l}const pt=Y0;function Y0(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===iv)&&(t=rn),xo(t)){const a=ti(t,e,!0);return n&&Id(a,n),Co>0&&!s&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag=-2,a}if(lw(t)&&(t=t.__vccOpts),e){e=X0(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Fe(a)),ct(l)&&(Dl(l)&&!Le(l)&&(l=Ut({},l)),e.style=je(l))}const o=wt(t)?1:Ev(t)?128:Gg(t)?64:ct(t)?4:qe(t)?2:0;return d(t,e,n,r,i,o,s,!0)}function X0(t){return t?Dl(t)||pv(t)?Ut({},t):t:null}function ti(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=t,h=e?Z0(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Tv(h),ref:e&&e.ref?n&&s?Le(s)?s.concat(La(e)):[s,La(e)]:La(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ti(t.ssContent),ssFallback:t.ssFallback&&ti(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&To(f,l.clone(f)),f}function Oe(t=" ",e=0){return pt(Fl,null,t,e)}function un(t,e){const n=pt(Ma,null,t);return n.staticCount=e,n}function Re(t="",e=!1){return e?(W(),at(rn,null,t)):pt(rn,null,t)}function Hn(t){return t==null||typeof t=="boolean"?pt(rn):Le(t)?pt(De,null,t.slice()):xo(t)?cr(t):pt(Fl,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ti(t)}function Id(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Le(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Id(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!pv(e)?e._ctx=Gt:i===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Gt},n=32):(e=String(e),r&64?(n=16,e=[Oe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Z0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Fe([e.class,r.class]));else if(i==="style")e.style=je([e.style,r.style]);else if(kl(i)){const s=e[i],o=r[i];o&&s!==o&&!(Le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Bn(t,e,n,r=null){Ln(t,e,7,[n,r])}const ew=cv();let tw=0;function nw(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||ew,s={uid:tw++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gv(r,i),emitsOptions:uv(r,i),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:r.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=O0.bind(null,s),t.ce&&t.ce(s),s}let sn=null;const Td=()=>sn||Gt;let tl,Cu;{const t=Nl(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};tl=e("__VUE_INSTANCE_SETTERS__",n=>sn=n),Cu=e("__VUE_SSR_SETTERS__",n=>ko=n)}const Go=t=>{const e=sn;return tl(t),t.scope.on(),()=>{t.scope.off(),tl(e)}},Vf=()=>{sn&&sn.scope.off(),tl(null)};function Cv(t){return t.vnode.shapeFlag&4}let ko=!1;function rw(t,e=!1,n=!1){e&&Cu(e);const{props:r,children:i}=t.vnode,s=Cv(t);F0(t,r,s,e),j0(t,i,n||e);const o=s?iw(t,e):void 0;return e&&Cu(!1),o}function iw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,T0);const{setup:r}=n;if(r){_r();const i=t.setupContext=r.length>1?ow(t):null,s=Go(t),o=jo(r,t,0,[t.props,i]),a=hg(o);if(br(),s(),(a||t.sp)&&!is(t)&&tv(t),a){if(o.then(Vf,Vf),e)return o.then(l=>{$f(t,l)}).catch(l=>{Ml(l,t,0)});t.asyncDep=o}else $f(t,o)}else xv(t)}function $f(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ct(e)&&(t.setupState=$g(e)),xv(t)}function xv(t,e,n){const r=t.type;t.render||(t.render=r.render||Gn);{const i=Go(t);_r();try{C0(t)}finally{br(),i()}}}const sw={get(t,e){return tn(t,"get",""),t[e]}};function ow(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sw),slots:t.slots,emit:t.emit,expose:e}}function Ul(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($g(vd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)},has(e,n){return n in e||n in co}})):t.proxy}function aw(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function lw(t){return qe(t)&&"__vccOpts"in t}const Se=(t,e)=>Xb(t,e,ko);function Cd(t,e,n){try{el(-1);const r=arguments.length;return r===2?ct(e)&&!Le(e)?xo(e)?pt(t,null,[e]):pt(t,e):pt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xo(n)&&(n=[n]),pt(t,e,n))}finally{el(1)}}const cw="3.5.29";/**
* @vue/runtime-dom v3.5.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xu;const Ff=typeof window<"u"&&window.trustedTypes;if(Ff)try{xu=Ff.createPolicy("vue",{createHTML:t=>t})}catch{}const kv=xu?t=>xu.createHTML(t):t=>t,uw="http://www.w3.org/2000/svg",dw="http://www.w3.org/1998/Math/MathML",lr=typeof document<"u"?document:null,Uf=lr&&lr.createElement("template"),hw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?lr.createElementNS(uw,t):e==="mathml"?lr.createElementNS(dw,t):n?lr.createElement(t,{is:n}):lr.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>lr.createTextNode(t),createComment:t=>lr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Uf.innerHTML=kv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Uf.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vr="transition",Hs="animation",So=Symbol("_vtc"),Sv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fw=Ut({},Qg,Sv),pw=t=>(t.displayName="Transition",t.props=fw,t),gr=pw((t,{slots:e})=>Cd(d0,mw(t),e)),bi=(t,e=[])=>{Le(t)?t.forEach(n=>n(...e)):t&&t(...e)},zf=t=>t?Le(t)?t.some(e=>e.length>1):t.length>1:!1;function mw(t){const e={};for(const b in t)b in Sv||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:h=o,appearToClass:f=a,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=gw(i),u=_&&_[0],E=_&&_[1],{onBeforeEnter:T,onEnter:S,onEnterCancelled:M,onLeave:L,onLeaveCancelled:V,onBeforeAppear:Q=T,onAppear:P=S,onAppearCancelled:A=M}=e,C=(b,I,w,X)=>{b._enterCancelled=X,wi(b,I?f:a),wi(b,I?h:o),w&&w()},R=(b,I)=>{b._isLeaving=!1,wi(b,p),wi(b,g),wi(b,m),I&&I()},O=b=>(I,w)=>{const X=b?P:S,oe=()=>C(I,b,w);bi(X,[I,oe]),Bf(()=>{wi(I,b?l:s),sr(I,b?f:a),zf(X)||jf(I,r,u,oe)})};return Ut(e,{onBeforeEnter(b){bi(T,[b]),sr(b,s),sr(b,o)},onBeforeAppear(b){bi(Q,[b]),sr(b,l),sr(b,h)},onEnter:O(!1),onAppear:O(!0),onLeave(b,I){b._isLeaving=!0;const w=()=>R(b,I);sr(b,p),b._enterCancelled?(sr(b,m),Hf(b)):(Hf(b),sr(b,m)),Bf(()=>{b._isLeaving&&(wi(b,p),sr(b,g),zf(L)||jf(b,r,E,w))}),bi(L,[b,w])},onEnterCancelled(b){C(b,!1,void 0,!0),bi(M,[b])},onAppearCancelled(b){C(b,!0,void 0,!0),bi(A,[b])},onLeaveCancelled(b){R(b),bi(V,[b])}})}function gw(t){if(t==null)return null;if(ct(t))return[Uc(t.enter),Uc(t.leave)];{const e=Uc(t);return[e,e]}}function Uc(t){return vb(t)}function sr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[So]||(t[So]=new Set)).add(e)}function wi(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[So];n&&(n.delete(e),n.size||(t[So]=void 0))}function Bf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vw=0;function jf(t,e,n,r){const i=t._endId=++vw,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=yw(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,m),s()},m=g=>{g.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},a+1),t.addEventListener(h,m)}function yw(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),i=r(`${Vr}Delay`),s=r(`${Vr}Duration`),o=qf(i,s),a=r(`${Hs}Delay`),l=r(`${Hs}Duration`),h=qf(a,l);let f=null,p=0,m=0;e===Vr?o>0&&(f=Vr,p=o,m=s.length):e===Hs?h>0&&(f=Hs,p=h,m=l.length):(p=Math.max(o,h),f=p>0?o>h?Vr:Hs:null,m=f?f===Vr?s.length:l.length:0);const g=f===Vr&&/\b(?:transform|all)(?:,|$)/.test(r(`${Vr}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:g}}function qf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Wf(n)+Wf(t[r])))}function Wf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Hf(t){return(t?t.ownerDocument:document).body.offsetHeight}function _w(t,e,n){const r=t[So];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nl=Symbol("_vod"),Av=Symbol("_vsh"),bw={name:"show",beforeMount(t,{value:e},{transition:n}){t[nl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Gs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Gs(t,!0),r.enter(t)):r.leave(t,()=>{Gs(t,!1)}):Gs(t,e))},beforeUnmount(t,{value:e}){Gs(t,e)}};function Gs(t,e){t.style.display=e?t[nl]:"none",t[Av]=!e}const ww=Symbol(""),Ew=/(?:^|;)\s*display\s*:/;function Iw(t,e,n){const r=t.style,i=wt(n);let s=!1;if(n&&!i){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Va(r,a,"")}else for(const o in e)n[o]==null&&Va(r,o,"");for(const o in n)o==="display"&&(s=!0),Va(r,o,n[o])}else if(i){if(e!==n){const o=r[ww];o&&(n+=";"+o),r.cssText=n,s=Ew.test(n)}}else e&&t.removeAttribute("style");nl in t&&(t[nl]=s?r.display:"",t[Av]&&(r.display="none"))}const Gf=/\s*!important$/;function Va(t,e,n){if(Le(n))n.forEach(r=>Va(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tw(t,e);Gf.test(n)?t.setProperty(ci(r),n.replace(Gf,""),"important"):t[r]=n}}const Kf=["Webkit","Moz","ms"],zc={};function Tw(t,e){const n=zc[e];if(n)return n;let r=kn(e);if(r!=="filter"&&r in t)return zc[e]=r;r=Rl(r);for(let i=0;i<Kf.length;i++){const s=Kf[i]+r;if(s in t)return zc[e]=s}return e}const Qf="http://www.w3.org/1999/xlink";function Jf(t,e,n,r,i,s=Ib(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qf,e.slice(6,e.length)):t.setAttributeNS(Qf,e,n):n==null||s&&!gg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Dn(n)?String(n):n)}function Yf(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?kv(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=gg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function qr(t,e,n,r){t.addEventListener(e,n,r)}function Cw(t,e,n,r){t.removeEventListener(e,n,r)}const Xf=Symbol("_vei");function xw(t,e,n,r,i=null){const s=t[Xf]||(t[Xf]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=kw(e);if(r){const h=s[e]=Rw(r,i);qr(t,a,h,l)}else o&&(Cw(t,a,o,l),s[e]=void 0)}}const Zf=/(?:Once|Passive|Capture)$/;function kw(t){let e;if(Zf.test(t)){e={};let r;for(;r=t.match(Zf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ci(t.slice(2)),e]}let Bc=0;const Sw=Promise.resolve(),Aw=()=>Bc||(Sw.then(()=>Bc=0),Bc=Date.now());function Rw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ln(Pw(r,n.value),e,5,[r])};return n.value=t,n.attached=Aw(),n}function Pw(t,e){if(Le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ep=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Nw=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?_w(t,r,o):e==="style"?Iw(t,n,r):kl(e)?ld(e)||xw(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ow(t,e,r,o))?(Yf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jf(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!wt(r))?Yf(t,kn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jf(t,e,r,o))};function Ow(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ep(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ep(e)&&wt(n)?!1:e in t}const hs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Le(e)?n=>Oa(e,n):e};function Dw(t){t.target.composing=!0}function tp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vr=Symbol("_assign");function np(t,e,n){return e&&(t=t.trim()),n&&(t=Pl(t)),t}const Lt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[vr]=hs(i);const s=r||i.props&&i.props.type==="number";qr(t,e?"change":"input",o=>{o.target.composing||t[vr](np(t.value,n,s))}),(n||s)&&qr(t,"change",()=>{t.value=np(t.value,n,s)}),e||(qr(t,"compositionstart",Dw),qr(t,"compositionend",tp),qr(t,"change",tp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[vr]=hs(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Pl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Rv={deep:!0,created(t,e,n){t[vr]=hs(n),qr(t,"change",()=>{const r=t._modelValue,i=Ao(t),s=t.checked,o=t[vr];if(Le(r)){const a=ud(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const h=[...r];h.splice(a,1),o(h)}}else if(bs(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(Pv(t,s))})},mounted:rp,beforeUpdate(t,e,n){t[vr]=hs(n),rp(t,e,n)}};function rp(t,{value:e,oldValue:n},r){t._modelValue=e;let i;if(Le(e))i=ud(e,r.props.value)>-1;else if(bs(e))i=e.has(r.props.value);else{if(e===n)return;i=ws(e,Pv(t,!0))}t.checked!==i&&(t.checked=i)}const Ea={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=bs(e);qr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pl(Ao(o)):Ao(o));t[vr](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,qo(()=>{t._assigning=!1})}),t[vr]=hs(r)},mounted(t,{value:e}){ip(t,e)},beforeUpdate(t,e,n){t[vr]=hs(n)},updated(t,{value:e}){t._assigning||ip(t,e)}};function ip(t,e){const n=t.multiple,r=Le(e);if(!(n&&!r&&!bs(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],a=Ao(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(a)):o.selected=ud(e,a)>-1}else o.selected=e.has(a);else if(ws(Ao(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ao(t){return"_value"in t?t._value:t.value}function Pv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Mw=["ctrl","shift","alt","meta"],Lw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mw.some(n=>t[`${n}Key`]&&!e.includes(n))},Wt=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=Lw[e[o]];if(a&&a(i,e))return}return t(i,...s)})},Vw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ku=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=ci(i.key);if(e.some(o=>o===s||Vw[o]===s))return t(i)})},$w=Ut({patchProp:Nw},hw);let sp;function Fw(){return sp||(sp=W0($w))}const Uw=(...t)=>{const e=Fw().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Bw(r);if(!i)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,zw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function zw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bw(t){return wt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Nv;const zl=t=>Nv=t,Ov=Symbol();function Su(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ho;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ho||(ho={}));function jw(){const t=bg(!0),e=t.run(()=>ve({}));let n=[],r=[];const i=vd({install(s){zl(i),i._a=s,s.provide(Ov,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return this._a?n.push(s):r.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Dv=()=>{};function op(t,e,n,r=Dv){t.add(e);const i=()=>{t.delete(e)&&r()};return!n&&wg()&&Cb(i),i}function Ki(t,...e){t.forEach(n=>{n(...e)})}const qw=t=>t(),ap=Symbol(),jc=Symbol();function Au(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Su(i)&&Su(r)&&t.hasOwnProperty(n)&&!St(r)&&!mr(r)?t[n]=Au(i,r):t[n]=r}return t}const Ww=Symbol();function Hw(t){return!Su(t)||!Object.prototype.hasOwnProperty.call(t,Ww)}const{assign:Ur}=Object;function Gw(t){return!!(St(t)&&t.effect)}function Kw(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function h(){a||(n.state.value[t]=i?i():{});const f=Kb(n.state.value[t]);return Ur(f,s,Object.keys(o||{}).reduce((p,m)=>(p[m]=vd(Se(()=>{zl(n);const g=n._s.get(t);return o[m].call(g,g)})),p),{}))}return l=Mv(t,h,e,n,r,!0),l}function Mv(t,e,n={},r,i,s){let o;const a=Ur({actions:{}},n),l={deep:!0};let h,f,p=new Set,m=new Set,g;const _=r.state.value[t];!s&&!_&&(r.state.value[t]={});let u;function E(A){let C;h=f=!1,typeof A=="function"?(A(r.state.value[t]),C={type:ho.patchFunction,storeId:t,events:g}):(Au(r.state.value[t],A),C={type:ho.patchObject,payload:A,storeId:t,events:g});const R=u=Symbol();qo().then(()=>{u===R&&(h=!0)}),f=!0,Ki(p,C,r.state.value[t])}const T=s?function(){const{state:C}=n,R=C?C():{};this.$patch(O=>{Ur(O,R)})}:Dv;function S(){o.stop(),p.clear(),m.clear(),r._s.delete(t)}const M=(A,C="")=>{if(ap in A)return A[jc]=C,A;const R=function(){zl(r);const O=Array.from(arguments),b=new Set,I=new Set;function w(J){b.add(J)}function X(J){I.add(J)}Ki(m,{args:O,name:R[jc],store:V,after:w,onError:X});let oe;try{oe=A.apply(this&&this.$id===t?this:V,O)}catch(J){throw Ki(I,J),J}return oe instanceof Promise?oe.then(J=>(Ki(b,J),J)).catch(J=>(Ki(I,J),Promise.reject(J))):(Ki(b,oe),oe)};return R[ap]=!0,R[jc]=C,R},L={_p:r,$id:t,$onAction:op.bind(null,m),$patch:E,$reset:T,$subscribe(A,C={}){const R=op(p,A,C.detached,()=>O()),O=o.run(()=>Kt(()=>r.state.value[t],b=>{(C.flush==="sync"?f:h)&&A({storeId:t,type:ho.direct,events:g},b)},Ur({},l,C)));return R},$dispose:S},V=Bo(L);r._s.set(t,V);const P=(r._a&&r._a.runWithContext||qw)(()=>r._e.run(()=>(o=bg()).run(()=>e({action:M}))));for(const A in P){const C=P[A];if(St(C)&&!Gw(C)||mr(C))s||(_&&Hw(C)&&(St(C)?C.value=_[A]:Au(C,_[A])),r.state.value[t][A]=C);else if(typeof C=="function"){const R=M(C,A);P[A]=R,a.actions[A]=C}}return Ur(V,P),Ur(nt(V),P),Object.defineProperty(V,"$state",{get:()=>r.state.value[t],set:A=>{E(C=>{Ur(C,A)})}}),r._p.forEach(A=>{Ur(V,o.run(()=>A({store:V,app:r._a,pinia:r,options:a})))}),_&&s&&n.hydrate&&n.hydrate(V.$state,_),h=!0,f=!0,V}/*! #__NO_SIDE_EFFECTS__ */function Bl(t,e,n){let r;const i=typeof e=="function";r=i?n:e;function s(o,a){const l=i0();return o=o||(l?bn(Ov,null):null),o&&zl(o),o=Nv,o._s.has(t)||(i?Mv(t,e,r,o):Kw(t,r,o)),o._s.get(t)}return s.$id=t,s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ji=typeof document<"u";function Lv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Lv(t.default)}const st=Object.assign;function qc(t,e){const n={};for(const r in e){const i=e[r];n[r]=Vn(i)?i.map(t):t(i)}return n}const fo=()=>{},Vn=Array.isArray;function lp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Vv=/#/g,Jw=/&/g,Yw=/\//g,Xw=/=/g,Zw=/\?/g,$v=/\+/g,e2=/%5B/g,t2=/%5D/g,Fv=/%5E/g,n2=/%60/g,Uv=/%7B/g,r2=/%7C/g,zv=/%7D/g,i2=/%20/g;function xd(t){return t==null?"":encodeURI(""+t).replace(r2,"|").replace(e2,"[").replace(t2,"]")}function s2(t){return xd(t).replace(Uv,"{").replace(zv,"}").replace(Fv,"^")}function Ru(t){return xd(t).replace($v,"%2B").replace(i2,"+").replace(Vv,"%23").replace(Jw,"%26").replace(n2,"`").replace(Uv,"{").replace(zv,"}").replace(Fv,"^")}function o2(t){return Ru(t).replace(Xw,"%3D")}function a2(t){return xd(t).replace(Vv,"%23").replace(Zw,"%3F")}function l2(t){return a2(t).replace(Yw,"%2F")}function Ro(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const c2=/\/$/,u2=t=>t.replace(c2,"");function Wc(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),s=e.slice(l,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=p2(r??e,n),{fullPath:r+s+o,path:r,query:i,hash:Ro(o)}}function d2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function h2(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&fs(e.matched[r],n.matched[i])&&Bv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!f2(t[n],e[n]))return!1;return!0}function f2(t,e){return Vn(t)?up(t,e):Vn(e)?up(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function up(t,e){return Vn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function p2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const $r={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Pu=function(t){return t.pop="pop",t.push="push",t}({}),Hc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function m2(t){if(!t)if(Ji){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u2(t)}const g2=/^[^#]+#/;function v2(t,e){return t.replace(g2,"#")+e}function y2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jl=()=>({left:window.scrollX,top:window.scrollY});function _2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=y2(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function dp(t,e){return(history.state?history.state.position-e:-1)+t}const Nu=new Map;function b2(t,e){Nu.set(t,e)}function w2(t){const e=Nu.get(t);return Nu.delete(t),e}function E2(t){return typeof t=="string"||t&&typeof t=="object"}function jv(t){return typeof t=="string"||typeof t=="symbol"}let kt=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const qv=Symbol("");kt.MATCHER_NOT_FOUND+"",kt.NAVIGATION_GUARD_REDIRECT+"",kt.NAVIGATION_ABORTED+"",kt.NAVIGATION_CANCELLED+"",kt.NAVIGATION_DUPLICATED+"";function ps(t,e){return st(new Error,{type:t,[qv]:!0},e)}function or(t,e){return t instanceof Error&&qv in t&&(e==null||!!(t.type&e))}const I2=["params","query","hash"];function T2(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of I2)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function C2(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace($v," "),s=i.indexOf("="),o=Ro(s<0?i:i.slice(0,s)),a=s<0?null:Ro(i.slice(s+1));if(o in e){let l=e[o];Vn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function hp(t){let e="";for(let n in t){const r=t[n];if(n=o2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vn(r)?r.map(i=>i&&Ru(i)):[r&&Ru(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function x2(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const k2=Symbol(""),fp=Symbol(""),ql=Symbol(""),kd=Symbol(""),Ou=Symbol("");function Ks(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jr(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const h=m=>{m===!1?l(ps(kt.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):E2(m)?l(ps(kt.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),a())},f=s(()=>t.call(r&&r.instances[i],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Gc(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Lv(l)){const h=(l.__vccOpts||l)[e];h&&s.push(jr(h,n,r,o,a,i))}else{let h=l();s.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const p=Qw(f)?f.default:f;o.mods[a]=f,o.components[a]=p;const m=(p.__vccOpts||p)[e];return m&&jr(m,n,r,o,a,i)()}))}}return s}function S2(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(h=>fs(h,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(h=>fs(h,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let A2=()=>location.protocol+"//"+location.host;function Wv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let o=i.includes(t.slice(s))?t.slice(s).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),cp(a,"")}return cp(n,t)+r+i}function R2(t,e,n,r){let i=[],s=[],o=null;const a=({state:m})=>{const g=Wv(t,location),_=n.value,u=e.value;let E=0;if(m){if(n.value=g,e.value=m,o&&o===_){o=null;return}E=u?m.position-u.position:0}else r(g);i.forEach(T=>{T(n.value,_,{delta:E,type:Pu.pop,direction:E?E>0?Hc.forward:Hc.back:Hc.unknown})})};function l(){o=n.value}function h(m){i.push(m);const g=()=>{const _=i.indexOf(m);_>-1&&i.splice(_,1)};return s.push(g),g}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(st({},m.state,{scroll:jl()}),"")}}function p(){for(const m of s)m();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function pp(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?jl():null}}function P2(t){const{history:e,location:n}=window,r={value:Wv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:A2()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),i.value=h}catch(g){console.error(g),n[f?"replace":"assign"](m)}}function o(l,h){s(l,st({},e.state,pp(i.value.back,l,i.value.forward,!0),h,{position:i.value.position}),!0),r.value=l}function a(l,h){const f=st({},i.value,e.state,{forward:l,scroll:jl()});s(f.current,f,!0),s(l,st({},pp(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function N2(t){t=m2(t);const e=P2(t),n=R2(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=st({location:"",base:t,go:r,createHref:v2.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function O2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),N2(t)}let Ci=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Mt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Mt||{});const D2={type:Ci.Static,value:""},M2=/[a-zA-Z0-9_]/;function L2(t){if(!t)return[[]];if(t==="/")return[[D2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${h}": ${g}`)}let n=Mt.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,h="",f="";function p(){h&&(n===Mt.Static?s.push({type:Ci.Static,value:h}):n===Mt.Param||n===Mt.ParamRegExp||n===Mt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Ci.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Mt.ParamRegExp){r=n,n=Mt.EscapeNext;continue}switch(n){case Mt.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=Mt.Param):m();break;case Mt.EscapeNext:m(),n=r;break;case Mt.Param:l==="("?n=Mt.ParamRegExp:M2.test(l)?m():(p(),n=Mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Mt.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Mt.ParamRegExpEnd:f+=l;break;case Mt.ParamRegExpEnd:p(),n=Mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===Mt.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),i}const mp="[^/]+?",V2={sensitive:!1,strict:!1,start:!0,end:!0};var ln=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(ln||{});const $2=/[.+*?^${}()[\]/\\]/g;function F2(t,e){const n=st({},V2,e),r=[];let i=n.start?"^":"";const s=[];for(const h of t){const f=h.length?[]:[ln.Root];n.strict&&!h.length&&(i+="/");for(let p=0;p<h.length;p++){const m=h[p];let g=ln.Segment+(n.sensitive?ln.BonusCaseSensitive:0);if(m.type===Ci.Static)p||(i+="/"),i+=m.value.replace($2,"\\$&"),g+=ln.Static;else if(m.type===Ci.Param){const{value:_,repeatable:u,optional:E,regexp:T}=m;s.push({name:_,repeatable:u,optional:E});const S=T||mp;if(S!==mp){g+=ln.BonusCustomRegExp;try{`${S}`}catch(L){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+L.message)}}let M=u?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;p||(M=E&&h.length<2?`(?:/${M})`:"/"+M),E&&(M+="?"),i+=M,g+=ln.Dynamic,E&&(g+=ln.BonusOptional),u&&(g+=ln.BonusRepeatable),S===".*"&&(g+=ln.BonusWildcard)}f.push(g)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=ln.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const g=f[m]||"",_=s[m-1];p[_.name]=g&&_.repeatable?g.split("/"):g}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const g of m)if(g.type===Ci.Static)f+=g.value;else if(g.type===Ci.Param){const{value:_,repeatable:u,optional:E}=g,T=_ in h?h[_]:"";if(Vn(T)&&!u)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=Vn(T)?T.join("/"):T;if(!S)if(E)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${_}"`);f+=S}}return f||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function U2(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===ln.Static+ln.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===ln.Static+ln.Segment?1:-1:0}function Hv(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=U2(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(gp(r))return 1;if(gp(i))return-1}return i.length-r.length}function gp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const z2={strict:!1,end:!0,sensitive:!1};function B2(t,e,n){const r=F2(L2(t.path),n),i=st(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function j2(t,e){const n=[],r=new Map;e=lp(z2,e);function i(p){return r.get(p)}function s(p,m,g){const _=!g,u=yp(p);u.aliasOf=g&&g.record;const E=lp(e,p),T=[u];if("alias"in p){const L=typeof p.alias=="string"?[p.alias]:p.alias;for(const V of L)T.push(yp(st({},u,{components:g?g.record.components:u.components,path:V,aliasOf:g?g.record:u})))}let S,M;for(const L of T){const{path:V}=L;if(m&&V[0]!=="/"){const Q=m.record.path,P=Q[Q.length-1]==="/"?"":"/";L.path=m.record.path+(V&&P+V)}if(S=B2(L,m,E),g?g.alias.push(S):(M=M||S,M!==S&&M.alias.push(S),_&&p.name&&!_p(S)&&o(p.name)),Gv(S)&&l(S),u.children){const Q=u.children;for(let P=0;P<Q.length;P++)s(Q[P],S,g&&g.children[P])}g=g||S}return M?()=>{o(M)}:fo}function o(p){if(jv(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function a(){return n}function l(p){const m=H2(p,n);n.splice(m,0,p),p.record.name&&!_p(p)&&r.set(p.record.name,p)}function h(p,m){let g,_={},u,E;if("name"in p&&p.name){if(g=r.get(p.name),!g)throw ps(kt.MATCHER_NOT_FOUND,{location:p});E=g.record.name,_=st(vp(m.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&vp(p.params,g.keys.map(M=>M.name))),u=g.stringify(_)}else if(p.path!=null)u=p.path,g=n.find(M=>M.re.test(u)),g&&(_=g.parse(u),E=g.record.name);else{if(g=m.name?r.get(m.name):n.find(M=>M.re.test(m.path)),!g)throw ps(kt.MATCHER_NOT_FOUND,{location:p,currentLocation:m});E=g.record.name,_=st({},m.params,p.params),u=g.stringify(_)}const T=[];let S=g;for(;S;)T.unshift(S.record),S=S.parent;return{name:E,path:u,params:_,matched:T,meta:W2(T)}}t.forEach(p=>s(p));function f(){n.length=0,r.clear()}return{addRoute:s,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function vp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function yp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:q2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function q2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function _p(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function W2(t){return t.reduce((e,n)=>st(e,n.meta),{})}function H2(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Hv(t,e[s])<0?r=s:n=s+1}const i=G2(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function G2(t){let e=t;for(;e=e.parent;)if(Gv(e)&&Hv(t,e)===0)return e}function Gv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function bp(t){const e=bn(ql),n=bn(kd),r=Se(()=>{const l=be(t.to);return e.resolve(l)}),i=Se(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(fs.bind(null,f));if(m>-1)return m;const g=wp(l[h-2]);return h>1&&wp(f)===g&&p[p.length-1].path!==g?p.findIndex(fs.bind(null,l[h-2])):m}),s=Se(()=>i.value>-1&&X2(n.params,r.value.params)),o=Se(()=>i.value>-1&&i.value===n.matched.length-1&&Bv(n.params,r.value.params));function a(l={}){if(Y2(l)){const h=e[be(t.replace)?"replace":"push"](be(t.to)).catch(fo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function K2(t){return t.length===1?t[0]:t}const Q2=ev({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bp,setup(t,{slots:e}){const n=Bo(bp(t)),{options:r}=bn(ql),i=Se(()=>({[Ep(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ep(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&K2(e.default(n));return t.custom?s:Cd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),J2=Q2;function Y2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function X2(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Vn(i)||i.length!==r.length||r.some((s,o)=>s.valueOf()!==i[o].valueOf()))return!1}return!0}function wp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ep=(t,e,n)=>t??e??n,Z2=ev({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=bn(Ou),i=Se(()=>t.route||r.value),s=bn(fp,0),o=Se(()=>{let h=be(s);const{matched:f}=i.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),a=Se(()=>i.value.matched[o.value]);oo(fp,Se(()=>o.value+1)),oo(k2,a),oo(Ou,i);const l=ve();return Kt(()=>[l.value,a.value,t.name],([h,f,p],[m,g,_])=>{f&&(f.instances[p]=h,g&&g!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),h&&f&&(!g||!fs(f,g)||!m)&&(f.enterCallbacks[p]||[]).forEach(u=>u(h))},{flush:"post"}),()=>{const h=i.value,f=t.name,p=a.value,m=p&&p.components[f];if(!m)return Ip(n.default,{Component:m,route:h});const g=p.props[f],_=g?g===!0?h.params:typeof g=="function"?g(h):g:null,E=Cd(m,st({},_,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Ip(n.default,{Component:E,route:h})||E}}});function Ip(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kv=Z2;function eE(t){const e=j2(t.routes,t),n=t.parseQuery||C2,r=t.stringifyQuery||hp,i=t.history,s=Ks(),o=Ks(),a=Ks(),l=Wb($r);let h=$r;Ji&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=qc.bind(null,G=>""+G),p=qc.bind(null,l2),m=qc.bind(null,Ro);function g(G,Z){let ge,Ie;return jv(G)?(ge=e.getRecordMatcher(G),Ie=Z):Ie=G,e.addRoute(Ie,ge)}function _(G){const Z=e.getRecordMatcher(G);Z&&e.removeRoute(Z)}function u(){return e.getRoutes().map(G=>G.record)}function E(G){return!!e.getRecordMatcher(G)}function T(G,Z){if(Z=st({},Z||l.value),typeof G=="string"){const v=Wc(n,G,Z.path),K=e.resolve({path:v.path},Z),q=i.createHref(v.fullPath);return st(v,K,{params:m(K.params),hash:Ro(v.hash),redirectedFrom:void 0,href:q})}let ge;if(G.path!=null)ge=st({},G,{path:Wc(n,G.path,Z.path).path});else{const v=st({},G.params);for(const K in v)v[K]==null&&delete v[K];ge=st({},G,{params:p(v)}),Z.params=p(Z.params)}const Ie=e.resolve(ge,Z),ke=G.hash||"";Ie.params=f(m(Ie.params));const z=d2(r,st({},G,{hash:s2(ke),path:Ie.path})),H=i.createHref(z);return st({fullPath:z,hash:ke,query:r===hp?x2(G.query):G.query||{}},Ie,{redirectedFrom:void 0,href:H})}function S(G){return typeof G=="string"?Wc(n,G,l.value.path):st({},G)}function M(G,Z){if(h!==G)return ps(kt.NAVIGATION_CANCELLED,{from:Z,to:G})}function L(G){return P(G)}function V(G){return L(st(S(G),{replace:!0}))}function Q(G,Z){const ge=G.matched[G.matched.length-1];if(ge&&ge.redirect){const{redirect:Ie}=ge;let ke=typeof Ie=="function"?Ie(G,Z):Ie;return typeof ke=="string"&&(ke=ke.includes("?")||ke.includes("#")?ke=S(ke):{path:ke},ke.params={}),st({query:G.query,hash:G.hash,params:ke.path!=null?{}:G.params},ke)}}function P(G,Z){const ge=h=T(G),Ie=l.value,ke=G.state,z=G.force,H=G.replace===!0,v=Q(ge,Ie);if(v)return P(st(S(v),{state:typeof v=="object"?st({},ke,v.state):ke,force:z,replace:H}),Z||ge);const K=ge;K.redirectedFrom=Z;let q;return!z&&h2(r,Ie,ge)&&(q=ps(kt.NAVIGATION_DUPLICATED,{to:K,from:Ie}),ne(Ie,Ie,!0,!1)),(q?Promise.resolve(q):R(K,Ie)).catch(N=>or(N)?or(N,kt.NAVIGATION_GUARD_REDIRECT)?N:_e(N):ce(N,K,Ie)).then(N=>{if(N){if(or(N,kt.NAVIGATION_GUARD_REDIRECT))return P(st({replace:H},S(N.to),{state:typeof N.to=="object"?st({},ke,N.to.state):ke,force:z}),Z||K)}else N=b(K,Ie,!0,H,ke);return O(K,Ie,N),N})}function A(G,Z){const ge=M(G,Z);return ge?Promise.reject(ge):Promise.resolve()}function C(G){const Z=pe.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(G):G()}function R(G,Z){let ge;const[Ie,ke,z]=S2(G,Z);ge=Gc(Ie.reverse(),"beforeRouteLeave",G,Z);for(const v of Ie)v.leaveGuards.forEach(K=>{ge.push(jr(K,G,Z))});const H=A.bind(null,G,Z);return ge.push(H),le(ge).then(()=>{ge=[];for(const v of s.list())ge.push(jr(v,G,Z));return ge.push(H),le(ge)}).then(()=>{ge=Gc(ke,"beforeRouteUpdate",G,Z);for(const v of ke)v.updateGuards.forEach(K=>{ge.push(jr(K,G,Z))});return ge.push(H),le(ge)}).then(()=>{ge=[];for(const v of z)if(v.beforeEnter)if(Vn(v.beforeEnter))for(const K of v.beforeEnter)ge.push(jr(K,G,Z));else ge.push(jr(v.beforeEnter,G,Z));return ge.push(H),le(ge)}).then(()=>(G.matched.forEach(v=>v.enterCallbacks={}),ge=Gc(z,"beforeRouteEnter",G,Z,C),ge.push(H),le(ge))).then(()=>{ge=[];for(const v of o.list())ge.push(jr(v,G,Z));return ge.push(H),le(ge)}).catch(v=>or(v,kt.NAVIGATION_CANCELLED)?v:Promise.reject(v))}function O(G,Z,ge){a.list().forEach(Ie=>C(()=>Ie(G,Z,ge)))}function b(G,Z,ge,Ie,ke){const z=M(G,Z);if(z)return z;const H=Z===$r,v=Ji?history.state:{};ge&&(Ie||H?i.replace(G.fullPath,st({scroll:H&&v&&v.scroll},ke)):i.push(G.fullPath,ke)),l.value=G,ne(G,Z,ge,H),_e()}let I;function w(){I||(I=i.listen((G,Z,ge)=>{if(!$.listening)return;const Ie=T(G),ke=Q(Ie,$.currentRoute.value);if(ke){P(st(ke,{replace:!0,force:!0}),Ie).catch(fo);return}h=Ie;const z=l.value;Ji&&b2(dp(z.fullPath,ge.delta),jl()),R(Ie,z).catch(H=>or(H,kt.NAVIGATION_ABORTED|kt.NAVIGATION_CANCELLED)?H:or(H,kt.NAVIGATION_GUARD_REDIRECT)?(P(st(S(H.to),{force:!0}),Ie).then(v=>{or(v,kt.NAVIGATION_ABORTED|kt.NAVIGATION_DUPLICATED)&&!ge.delta&&ge.type===Pu.pop&&i.go(-1,!1)}).catch(fo),Promise.reject()):(ge.delta&&i.go(-ge.delta,!1),ce(H,Ie,z))).then(H=>{H=H||b(Ie,z,!1),H&&(ge.delta&&!or(H,kt.NAVIGATION_CANCELLED)?i.go(-ge.delta,!1):ge.type===Pu.pop&&or(H,kt.NAVIGATION_ABORTED|kt.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),O(Ie,z,H)}).catch(fo)}))}let X=Ks(),oe=Ks(),J;function ce(G,Z,ge){_e(G);const Ie=oe.list();return Ie.length?Ie.forEach(ke=>ke(G,Z,ge)):console.error(G),Promise.reject(G)}function re(){return J&&l.value!==$r?Promise.resolve():new Promise((G,Z)=>{X.add([G,Z])})}function _e(G){return J||(J=!G,w(),X.list().forEach(([Z,ge])=>G?ge(G):Z()),X.reset()),G}function ne(G,Z,ge,Ie){const{scrollBehavior:ke}=t;if(!Ji||!ke)return Promise.resolve();const z=!ge&&w2(dp(G.fullPath,0))||(Ie||!ge)&&history.state&&history.state.scroll||null;return qo().then(()=>ke(G,Z,z)).then(H=>H&&_2(H)).catch(H=>ce(H,G,Z))}const ee=G=>i.go(G);let de;const pe=new Set,$={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:E,getRoutes:u,resolve:T,options:t,push:L,replace:V,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:re,install(G){G.component("RouterLink",J2),G.component("RouterView",Kv),G.config.globalProperties.$router=$,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),Ji&&!de&&l.value===$r&&(de=!0,L(i.location).catch(Ie=>{}));const Z={};for(const Ie in $r)Object.defineProperty(Z,Ie,{get:()=>l.value[Ie],enumerable:!0});G.provide(ql,$),G.provide(kd,Lg(Z)),G.provide(Ou,l);const ge=G.unmount;pe.add(G),G.unmount=function(){pe.delete(G),pe.size<1&&(h=$r,I&&I(),I=null,l.value=$r,de=!1,J=!1),ge()}}};function le(G){return G.reduce((Z,ge)=>Z.then(()=>C(ge)),Promise.resolve())}return $}function Wl(){return bn(ql)}function Sd(t){return bn(kd)}const At=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},tE={__name:"App",setup(t){return(e,n)=>(W(),at(be(Kv),null,{default:bt(({Component:r,route:i})=>[pt(gr,{name:"app-view",mode:"out-in"},{default:bt(()=>[(W(),at(sv(r),{key:i.fullPath}))]),_:2},1024)]),_:1}))}},nE=At(tE,[["__scopeId","data-v-b9a41e6f"]]),rE=()=>{};var Tp={};/**
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
 */const Qv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|h>>6,g=h&63;l||(g=64,o||(m=64)),r.push(n[f],n[p],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||p==null)throw new sE;const m=s<<2|a>>4;if(r.push(m),h!==64){const g=a<<4&240|h>>2;if(r.push(g),p!==64){const _=h<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oE=function(t){const e=Qv(t);return Jv.encodeByteArray(e,!0)},rl=function(t){return oE(t).replace(/\./g,"")},Yv=function(t){try{return Jv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const lE=()=>aE().__FIREBASE_DEFAULTS__,cE=()=>{if(typeof process>"u"||typeof Tp>"u")return;const t=Tp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yv(t[1]);return e&&JSON.parse(e)},Hl=()=>{try{return rE()||lE()||cE()||uE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xv=t=>{var e,n;return(n=(e=Hl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},dE=t=>{const e=Xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zv=()=>{var t;return(t=Hl())==null?void 0:t.config},ey=t=>{var e;return(e=Hl())==null?void 0:e[`_${t}`]};/**
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
 */function fE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),""].join(".")}const po={};function pE(){const t={prod:[],emulator:[]};for(const e of Object.keys(po))po[e]?t.emulator.push(e):t.prod.push(e);return t}function mE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Cp=!1;function ny(t,e){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||po[t]===e||po[t]||Cp)return;po[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=pE().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Cp=!0,o()},m}function f(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=mE(r),g=n("text"),_=document.getElementById(g)||document.createElement("span"),u=n("learnmore"),E=document.getElementById(u)||document.createElement("a"),T=n("preprendIcon"),S=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const M=m.element;a(M),f(E,u);const L=h();l(S,T),M.append(S,_,E,L),document.body.appendChild(M)}s?(_.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function vE(){var e;const t=(e=Hl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ad(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _E(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bE(){const t=on();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wE(){return!vE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rd(){try{return typeof indexedDB=="object"}catch{return!1}}function Pd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function ry(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const EE="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EE,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,r)}}function IE(t,e){return t.replace(TE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TE=/\{\$([^}]+)}/g;function CE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xp(s)&&xp(o)){if(!ni(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xE(t,e){const n=new kE(t,e);return n.subscribe.bind(n)}class kE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}/**
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
 */const AE=1e3,RE=2,PE=4*60*60*1e3,NE=.5;function kp(t,e=AE,n=RE){const r=e*Math.pow(n,t),i=Math.round(NE*r*(Math.random()-.5)*2);return Math.min(PE,r+i)}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class OE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ME(e))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ii){return this.instances.has(e)}getOptions(e=Ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ii){return this.component?this.component.multipleInstances?e:Ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DE(t){return t===Ii?void 0:t}function ME(t){return t.instantiationMode==="EAGER"}/**
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
 */class LE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Je||(Je={}));const VE={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},$E=Je.INFO,FE={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},UE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=FE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=$E,this._logHandler=UE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...e),this._logHandler(this,Je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...e),this._logHandler(this,Je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...e),this._logHandler(this,Je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...e),this._logHandler(this,Je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...e),this._logHandler(this,Je.ERROR,...e)}}const zE=(t,e)=>e.some(n=>t instanceof n);let Sp,Ap;function BE(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jE(){return Ap||(Ap=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iy=new WeakMap,Du=new WeakMap,sy=new WeakMap,Qc=new WeakMap,Nd=new WeakMap;function qE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iy.set(n,t)}).catch(()=>{}),Nd.set(e,t),e}function WE(t){if(Du.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Du.set(t,e)}let Mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Du.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HE(t){Mu=t(Mu)}function GE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return sy.set(r,e.sort?e.sort():[e]),Jr(r)}:jE().includes(t)?function(...e){return t.apply(Jc(this),e),Jr(iy.get(this))}:function(...e){return Jr(t.apply(Jc(this),e))}}function KE(t){return typeof t=="function"?GE(t):(t instanceof IDBTransaction&&WE(t),zE(t,BE())?new Proxy(t,Mu):t)}function Jr(t){if(t instanceof IDBRequest)return qE(t);if(Qc.has(t))return Qc.get(t);const e=KE(t);return e!==t&&(Qc.set(t,e),Nd.set(e,t)),e}const Jc=t=>Nd.get(t);function oy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Jr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jr(o.result),l.oldVersion,l.newVersion,Jr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const QE=["get","getKey","getAll","getAllKeys","count"],JE=["put","add","delete","clear"],Yc=new Map;function Rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return Yc.set(e,s),s}HE(t=>({...t,get:(e,n,r)=>Rp(e,n)||t.get(e,n,r),has:(e,n)=>!!Rp(e,n)||t.has(e,n)}));/**
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
 */class YE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lu="@firebase/app",Pp="0.14.9";/**
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
 */const Er=new Gl("@firebase/app"),ZE="@firebase/app-compat",eI="@firebase/analytics-compat",tI="@firebase/analytics",nI="@firebase/app-check-compat",rI="@firebase/app-check",iI="@firebase/auth",sI="@firebase/auth-compat",oI="@firebase/database",aI="@firebase/data-connect",lI="@firebase/database-compat",cI="@firebase/functions",uI="@firebase/functions-compat",dI="@firebase/installations",hI="@firebase/installations-compat",fI="@firebase/messaging",pI="@firebase/messaging-compat",mI="@firebase/performance",gI="@firebase/performance-compat",vI="@firebase/remote-config",yI="@firebase/remote-config-compat",_I="@firebase/storage",bI="@firebase/storage-compat",wI="@firebase/firestore",EI="@firebase/ai",II="@firebase/firestore-compat",TI="firebase",CI="12.10.0";/**
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
 */const Vu="[DEFAULT]",xI={[Lu]:"fire-core",[ZE]:"fire-core-compat",[tI]:"fire-analytics",[eI]:"fire-analytics-compat",[rI]:"fire-app-check",[nI]:"fire-app-check-compat",[iI]:"fire-auth",[sI]:"fire-auth-compat",[oI]:"fire-rtdb",[aI]:"fire-data-connect",[lI]:"fire-rtdb-compat",[cI]:"fire-fn",[uI]:"fire-fn-compat",[dI]:"fire-iid",[hI]:"fire-iid-compat",[fI]:"fire-fcm",[pI]:"fire-fcm-compat",[mI]:"fire-perf",[gI]:"fire-perf-compat",[vI]:"fire-rc",[yI]:"fire-rc-compat",[_I]:"fire-gcs",[bI]:"fire-gcs-compat",[wI]:"fire-fst",[II]:"fire-fst-compat",[EI]:"fire-vertex","fire-js":"fire-js",[TI]:"fire-js-all"};/**
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
 */const il=new Map,kI=new Map,$u=new Map;function Np(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if($u.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;$u.set(e,t);for(const n of il.values())Np(n,t);for(const n of kI.values())Np(n,t);return!0}function zi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const SI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new Ui("app","Firebase",SI);/**
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
 */class AI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=CI;function ay(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Vu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Yr.create("bad-app-name",{appName:String(i)});if(n||(n=Zv()),!n)throw Yr.create("no-options");const s=il.get(i);if(s){if(ni(n,s.options)&&ni(r,s.config))return s;throw Yr.create("duplicate-app",{appName:i})}const o=new LE(i);for(const l of $u.values())o.addComponent(l);const a=new AI(n,r,o);return il.set(i,a),a}function Od(t=Vu){const e=il.get(t);if(!e&&t===Vu&&Zv())return ay();if(!e)throw Yr.create("no-app",{appName:t});return e}function xn(t,e,n){let r=xI[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(o.join(" "));return}Zn(new $n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const RI="firebase-heartbeat-database",PI=1,Po="firebase-heartbeat-store";let Xc=null;function ly(){return Xc||(Xc=oy(RI,PI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Po)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function NI(t){try{const n=(await ly()).transaction(Po),r=await n.objectStore(Po).get(cy(t));return await n.done,r}catch(e){if(e instanceof Fn)Er.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function Op(t,e){try{const r=(await ly()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,cy(t)),await r.done}catch(n){if(n instanceof Fn)Er.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function cy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OI=1024,DI=30;class MI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>DI){const o=$I(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dp(),{heartbeatsToSend:r,unsentEntries:i}=LI(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Er.warn(n),""}}}function Dp(){return new Date().toISOString().substring(0,10)}function LI(t,e=OI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?Pd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mp(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}function $I(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function FI(t){Zn(new $n("platform-logger",e=>new YE(e),"PRIVATE")),Zn(new $n("heartbeat",e=>new MI(e),"PRIVATE")),xn(Lu,Pp,t),xn(Lu,Pp,"esm2020"),xn("fire-js","")}FI("");var UI="firebase",zI="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(UI,zI,"app");function uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BI=uy,dy=new Ui("auth","Firebase",uy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Gl("@firebase/auth");function jI(t,...e){sl.logLevel<=Je.WARN&&sl.warn(`Auth (${Is}): ${t}`,...e)}function $a(t,...e){sl.logLevel<=Je.ERROR&&sl.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw Md(t,...e)}function Nn(t,...e){return Md(t,...e)}function Dd(t,e,n){const r={...BI(),[e]:n};return new Ui("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return Dd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sn(t,"argument-error"),Dd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Md(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dy.create(t,...e)}function $e(t,e,...n){if(!t)throw Md(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function Ir(t,e){t||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function WI(){return Lp()==="http:"||Lp()==="https:"}function Lp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WI()||Ad()||"connection"in navigator)?navigator.onLine:!0}function GI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ir(n>e,"Short delay should be less than long delay!"),this.isMobile=gE()||_E()}get(){return HI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t,e){Ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const QI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JI=new Qo(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,i={}){return fy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ko({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...s};return yE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Es(t.emulatorConfig.host)&&(h.credentials="include"),hy.fetch()(await py(t,t.config.apiHost,n,a),h)})}async function fy(t,e,n){t._canInitEmulator=!1;const r={...KI,...e};try{const i=new XI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ia(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Dd(t,f,h);Sn(t,f)}}catch(i){if(i instanceof Fn)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function Jo(t,e,n,r,i={}){const s=await Ar(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function py(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ld(t.config,i):`${t.config.apiScheme}://${i}`;return QI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function YI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),JI.get())})}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}function Vp(t){return t!==void 0&&t.enterprise!==void 0}class ZI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eT(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function ol(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nT(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=Vd(r);$e(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(Zc(i.auth_time)),issuedAtTime:mo(Zc(i.iat)),expirationTime:mo(Zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zc(t){return Number(t)*1e3}function Vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yv(n);return i?JSON.parse(i):($a("Failed to decode base64 JWT payload"),null)}catch(i){return $a("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $p(t){const e=Vd(t);return $e(e,"internal-error"),$e(typeof e.exp<"u","internal-error"),$e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&rT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function al(t){var p;const e=t.auth,n=await t.getIdToken(),r=await No(t,ol(e,{idToken:n}));$e(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?my(i.providerUserInfo):[],o=oT(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Uu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function sT(t){const e=Et(t);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function my(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t,e){const n=await fy(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await py(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Es(t.emulatorConfig.host)&&(l.credentials="include"),hy.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lT(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$e(e.idToken,"internal-error"),$e(typeof e.idToken<"u","internal-error"),$e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$p(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$e(e.length!==0,"internal-error");const n=$p(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ss;return r&&($e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($e(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($e(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){$e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new iT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Uu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await No(this,this.stsTokenManager.getToken(this.auth,e));return $e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nT(this,e)}reload(){return sT(this)}_assign(e){this!==e&&($e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){$e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await No(this,tT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:g,providerData:_,stsTokenManager:u}=n;$e(p&&u,e,"internal-error");const E=ss.fromJSON(this.name,u);$e(typeof p=="string",e,"internal-error"),Fr(r,e.name),Fr(i,e.name),$e(typeof m=="boolean",e,"internal-error"),$e(typeof g=="boolean",e,"internal-error"),Fr(s,e.name),Fr(o,e.name),Fr(a,e.name),Fr(l,e.name),Fr(h,e.name),Fr(f,e.name);const T=new Rn({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:E,createdAt:h,lastLoginAt:f});return _&&Array.isArray(_)&&(T.providerData=_.map(S=>({...S}))),l&&(T._redirectEventId=l),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ss;i.updateFromServerResponse(n);const s=new Rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$e(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?my(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ss;a.updateFromIdToken(r);const l=new Rn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=new Map;function pr(t){Ir(t instanceof Function,"Expected a class definition");let e=Fp.get(t);return e?(Ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fp.set(t,e),e)}/**
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
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ol(this.auth,{idToken:e}).catch(()=>{});return n?Rn._fromGetAccountInfoResponse(this.auth,n,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(pr(Up),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||pr(Up);const o=Fa(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await ol(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Rn._fromGetAccountInfoResponse(e,m,f)}else p=Rn._fromJSON(e,f);h!==s&&(a=p),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new os(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(by(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ey(e))return"Blackberry";if(Iy(e))return"Webos";if(yy(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vy(t=on()){return/firefox\//i.test(t)}function yy(t=on()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(t=on()){return/crios\//i.test(t)}function by(t=on()){return/iemobile/i.test(t)}function wy(t=on()){return/android/i.test(t)}function Ey(t=on()){return/blackberry/i.test(t)}function Iy(t=on()){return/webos/i.test(t)}function $d(t=on()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cT(t=on()){var e;return $d(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uT(){return bE()&&document.documentMode===10}function Ty(t=on()){return $d(t)||wy(t)||Iy(t)||Ey(t)||/windows phone/i.test(t)||by(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e=[]){let n;switch(t){case"Browser":n=zp(on());break;case"Worker":n=`${zp(on())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
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
 */async function hT(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
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
 */class mT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bp(this),this.idTokenSubscription=new Bp(this),this.beforeStateQueue=new dT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ol(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(yr(this));const n=e?Et(e):null;return n&&$e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hT(this),n=new pT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;$e(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($e(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ui(t){return Et(t)}class Bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=xE(n=>this.observer=n)}get next(){return $e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gT(t){Kl=t}function xy(t){return Kl.loadJS(t)}function vT(){return Kl.recaptchaEnterpriseScript}function yT(){return Kl.gapiScript}function _T(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class bT{constructor(){this.enterprise=new wT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class wT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ET="recaptcha-enterprise",ky="NO_RECAPTCHA";class IT{constructor(e){this.type=ET,this.auth=ui(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{eT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new ZI(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Vp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(ky)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bT().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Vp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=vT();l.length!==0&&(l+=a),xy(l).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function jp(t,e,n,r=!1,i=!1){const s=new IT(t);let o;if(i)o=ky;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function zu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await jp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await jp(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t,e){const n=zi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ni(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function CT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xT(t,e,n){const r=ui(t);$e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Sy(e),{host:o,port:a}=kT(e),l=a===null?"":`:${a}`,h={url:`${s}//${o}${l}/`},f=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$e(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$e(ni(h,r.config.emulator)&&ni(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Es(o)?(ty(`${s}//${o}${l}`),ny("Auth",!0)):ST()}function Sy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kT(t){const e=Sy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ST(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function AT(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e){return Jo(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}async function PT(t,e){return Ar(t,"POST","/v1/accounts:sendOobCode",Sr(t,e))}async function NT(t,e){return PT(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function DT(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Fd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zu(e,n,"signInWithPassword",RT);case"emailLink":return OT(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zu(e,r,"signUpPassword",AT);case"emailLink":return DT(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return Jo(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="http://localhost";class Tr extends Fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:MT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VT(t){const e=Ys(Xs(t)).link,n=e?Ys(Xs(e)).deep_link_id:null,r=Ys(Xs(t)).deep_link_id;return(r?Ys(Xs(r)).link:null)||r||n||e||t}class Ud{constructor(e){const n=Ys(Xs(e)),r=n.apiKey??null,i=n.oobCode??null,s=LT(n.mode??null);$e(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=VT(e);try{return new Ud(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.providerId=Ts.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ud.parseLink(n);return $e(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}Ts.PROVIDER_ID="password";Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cs extends zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class go extends Cs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return $e("providerId"in n&&"signInMethod"in n,"argument-error"),Tr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return $e(e.idToken||e.accessToken,"argument-error"),Tr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return go.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return go.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new go(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Cs{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Cs{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Cs{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.TWITTER_SIGN_IN_METHOD="twitter.com";Gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t,e){return Jo(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rn._fromIdTokenResponse(e,r,i),o=Wp(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wp(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Fn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ll(e,n,r,i)}}function Ay(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ll._fromErrorAndOperation(t,s,e,r):s})}async function FT(t,e,n=!1){const r=await No(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function UT(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(yr(r));const i="reauthenticate";try{const s=await No(t,Ay(r,i,e,t),n);$e(s.idToken,r,"internal-error");const o=Vd(s.idToken);$e(o,r,"internal-error");const{sub:a}=o;return $e(t.uid===a,r,"user-mismatch"),Oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(t,e,n=!1){if(gn(t.app))return Promise.reject(yr(t));const r="signIn",i=await Ay(t,r,e),s=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zT(t,e){return Ry(ui(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py(t){const e=ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BT(t,e,n){if(gn(t.app))return Promise.reject(yr(t));const r=ui(t),o=await zu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$T).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Py(t),l}),a=await Oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function jT(t,e,n){return gn(t.app)?Promise.reject(yr(t)):zT(Et(t),Ts.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Py(t),r})}async function Hp(t,e){const n=Et(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await NT(n.auth,i);s!==t.email&&await t.reload()}function qT(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function WT(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function HT(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function GT(t){return Et(t).signOut()}const cl="__sak";/**
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
 */const KT=1e3,QT=10;class Oy extends Ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oy.type="LOCAL";const JT=Oy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),l=await YT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const h=Bd("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function ZT(t){Kn().location.href=t}/**
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
 */function Ly(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function eC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function nC(){return Ly()?self:null}/**
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
 */const Vy="firebaseLocalStorageDb",rC=1,ul="firebaseLocalStorage",$y="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jl(t,e){return t.transaction([ul],e?"readwrite":"readonly").objectStore(ul)}function iC(){const t=indexedDB.deleteDatabase(Vy);return new Yo(t).toPromise()}function Bu(){const t=indexedDB.open(Vy,rC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ul,{keyPath:$y})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ul)?e(r):(r.close(),await iC(),e(await Bu()))})})}async function Gp(t,e,n){const r=Jl(t,!0).put({[$y]:e,value:n});return new Yo(r).toPromise()}async function sC(t,e){const n=Jl(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function Kp(t,e){const n=Jl(t,!0).delete(e);return new Yo(n).toPromise()}const oC=800,aC=3;class Fy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ly()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ql._getInstance(nC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await eC(),!this.activeServiceWorker)return;this.sender=new XT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bu();return await Gp(e,cl,"1"),await Kp(e,cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jl(i,!1).getAll();return new Yo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fy.type="LOCAL";const lC=Fy;new Qo(3e4,6e4);/**
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
 */function Uy(t,e){return e?pr(e):($e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jd extends Fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cC(t){return Ry(t.auth,new jd(t),t.bypassAuthState)}function uC(t){const{auth:e,user:n}=t;return $e(n,e,"internal-error"),UT(n,new jd(t),t.bypassAuthState)}async function dC(t){const{auth:e,user:n}=t;return $e(n,e,"internal-error"),FT(n,new jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cC;case"linkViaPopup":case"linkViaRedirect":return dC;case"reauthViaPopup":case"reauthViaRedirect":return uC;default:Sn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new Qo(2e3,1e4);async function Qp(t,e,n){if(gn(t.app))return Promise.reject(Nn(t,"operation-not-supported-in-this-environment"));const r=ui(t);qI(t,e,zd);const i=Uy(r,n);return new xi(r,"signInViaPopup",e,i).executeNotNull()}class xi extends zy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $e(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hC.get())};e()}}xi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="pendingRedirect",Ua=new Map;class pC extends zy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await mC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mC(t,e){const n=yC(e),r=vC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gC(t,e){Ua.set(t._key(),e)}function vC(t){return pr(t._redirectPersistence)}function yC(t){return Fa(fC,t.config.apiKey,t.name)}async function _C(t,e,n=!1){if(gn(t.app))return Promise.reject(yr(t));const r=ui(t),i=Uy(r,e),o=await new pC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=10*60*1e3;class wC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!By(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jp(e))}saveEventToCache(e){this.cachedEventUids.add(Jp(e)),this.lastProcessedEventTime=Date.now()}}function Jp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function By({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return By(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CC=/^https?/;async function xC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IC(t);for(const n of e)try{if(kC(n))return}catch{}Sn(t,"unauthorized-domain")}function kC(t){const e=Fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CC.test(n))return!1;if(TC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SC=new Qo(3e4,6e4);function Yp(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AC(t){return new Promise((e,n)=>{var i,s,o;function r(){Yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yp(),n(Nn(t,"network-request-failed"))},timeout:SC.get()})}if((s=(i=Kn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Kn().gapi)!=null&&o.load)r();else{const a=_T("iframefcb");return Kn()[a]=()=>{gapi.load?r():n(Nn(t,"network-request-failed"))},xy(`${yT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw za=null,e})}let za=null;function RC(t){return za=za||AC(t),za}/**
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
 */const PC=new Qo(5e3,15e3),NC="__/auth/iframe",OC="emulator/auth/iframe",DC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LC(t){const e=t.config;$e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ld(e,OC):`https://${t.config.authDomain}/${NC}`,r={apiKey:e.apiKey,appName:t.name,v:Is},i=MC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ko(r).slice(1)}`}async function VC(t){const e=await RC(t),n=Kn().gapi;return $e(n,t,"internal-error"),e.open({where:document.body,url:LC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=Kn().setTimeout(()=>{s(o)},PC.get());function l(){Kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const $C={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FC=500,UC=600,zC="_blank",BC="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jC(t,e,n,r=FC,i=UC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...$C,width:r.toString(),height:i.toString(),top:s,left:o},h=on().toLowerCase();n&&(a=_y(h)?zC:n),vy(h)&&(e=e||BC,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[g,_])=>`${m}${g}=${_},`,"");if(cT(h)&&a!=="_self")return qC(e||"",a),new Xp(null);const p=window.open(e||"",a,f);$e(p,t,"popup-blocked");try{p.focus()}catch{}return new Xp(p)}function qC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WC="__/auth/handler",HC="emulator/auth/handler",GC=encodeURIComponent("fac");async function Zp(t,e,n,r,i,s){$e(t.config.authDomain,t,"auth-domain-config-required"),$e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:i};if(e instanceof zd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Cs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),h=l?`#${GC}=${encodeURIComponent(l)}`:"";return`${KC(t)}?${Ko(a).slice(1)}${h}`}function KC({config:t}){return t.emulator?Ld(t,HC):`https://${t.authDomain}/${WC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="webStorageSupport";class QC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=My,this._completeRedirectFn=_C,this._overrideRedirectResult=gC}async _openPopup(e,n,r,i){var o;Ir((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Zp(e,n,r,Fu(),i);return jC(e,s,Bd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zp(e,n,r,Fu(),i);return ZT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VC(e),r=new wC(e);return n.register("authEvent",i=>($e(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eu,{type:eu},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[eu];s!==void 0&&n(!!s),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||yy()||$d()}}const JC=QC;var em="@firebase/auth",tm="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function XC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZC(t){Zn(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cy(t)},h=new mT(r,i,s,l);return CT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new $n("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(r=>new YC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(em,tm,XC(t)),xn(em,tm,"esm2020")}/**
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
 */const ex=5*60,tx=ey("authIdTokenMaxAge")||ex;let nm=null;const nx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tx)return;const i=n==null?void 0:n.token;nm!==i&&(nm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rx(t=Od()){const e=zi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TT(t,{popupRedirectResolver:JC,persistence:[lC,JT,My]}),r=ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nx(s.toString());WT(n,o,()=>o(n.currentUser)),qT(n,a=>o(a))}}const i=Xv("auth");return i&&xT(n,`http://${i}`),n}function ix(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}gT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ix().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZC("Browser");var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,jy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,A){function C(){}C.prototype=A.prototype,P.F=A.prototype,P.prototype=new C,P.prototype.constructor=P,P.D=function(R,O,b){for(var I=Array(arguments.length-2),w=2;w<arguments.length;w++)I[w-2]=arguments[w];return A.prototype[O].apply(R,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(P,A,C){C||(C=0);const R=Array(16);if(typeof A=="string")for(var O=0;O<16;++O)R[O]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(O=0;O<16;++O)R[O]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=P.g[0],C=P.g[1],O=P.g[2];let b=P.g[3],I;I=A+(b^C&(O^b))+R[0]+3614090360&4294967295,A=C+(I<<7&4294967295|I>>>25),I=b+(O^A&(C^O))+R[1]+3905402710&4294967295,b=A+(I<<12&4294967295|I>>>20),I=O+(C^b&(A^C))+R[2]+606105819&4294967295,O=b+(I<<17&4294967295|I>>>15),I=C+(A^O&(b^A))+R[3]+3250441966&4294967295,C=O+(I<<22&4294967295|I>>>10),I=A+(b^C&(O^b))+R[4]+4118548399&4294967295,A=C+(I<<7&4294967295|I>>>25),I=b+(O^A&(C^O))+R[5]+1200080426&4294967295,b=A+(I<<12&4294967295|I>>>20),I=O+(C^b&(A^C))+R[6]+2821735955&4294967295,O=b+(I<<17&4294967295|I>>>15),I=C+(A^O&(b^A))+R[7]+4249261313&4294967295,C=O+(I<<22&4294967295|I>>>10),I=A+(b^C&(O^b))+R[8]+1770035416&4294967295,A=C+(I<<7&4294967295|I>>>25),I=b+(O^A&(C^O))+R[9]+2336552879&4294967295,b=A+(I<<12&4294967295|I>>>20),I=O+(C^b&(A^C))+R[10]+4294925233&4294967295,O=b+(I<<17&4294967295|I>>>15),I=C+(A^O&(b^A))+R[11]+2304563134&4294967295,C=O+(I<<22&4294967295|I>>>10),I=A+(b^C&(O^b))+R[12]+1804603682&4294967295,A=C+(I<<7&4294967295|I>>>25),I=b+(O^A&(C^O))+R[13]+4254626195&4294967295,b=A+(I<<12&4294967295|I>>>20),I=O+(C^b&(A^C))+R[14]+2792965006&4294967295,O=b+(I<<17&4294967295|I>>>15),I=C+(A^O&(b^A))+R[15]+1236535329&4294967295,C=O+(I<<22&4294967295|I>>>10),I=A+(O^b&(C^O))+R[1]+4129170786&4294967295,A=C+(I<<5&4294967295|I>>>27),I=b+(C^O&(A^C))+R[6]+3225465664&4294967295,b=A+(I<<9&4294967295|I>>>23),I=O+(A^C&(b^A))+R[11]+643717713&4294967295,O=b+(I<<14&4294967295|I>>>18),I=C+(b^A&(O^b))+R[0]+3921069994&4294967295,C=O+(I<<20&4294967295|I>>>12),I=A+(O^b&(C^O))+R[5]+3593408605&4294967295,A=C+(I<<5&4294967295|I>>>27),I=b+(C^O&(A^C))+R[10]+38016083&4294967295,b=A+(I<<9&4294967295|I>>>23),I=O+(A^C&(b^A))+R[15]+3634488961&4294967295,O=b+(I<<14&4294967295|I>>>18),I=C+(b^A&(O^b))+R[4]+3889429448&4294967295,C=O+(I<<20&4294967295|I>>>12),I=A+(O^b&(C^O))+R[9]+568446438&4294967295,A=C+(I<<5&4294967295|I>>>27),I=b+(C^O&(A^C))+R[14]+3275163606&4294967295,b=A+(I<<9&4294967295|I>>>23),I=O+(A^C&(b^A))+R[3]+4107603335&4294967295,O=b+(I<<14&4294967295|I>>>18),I=C+(b^A&(O^b))+R[8]+1163531501&4294967295,C=O+(I<<20&4294967295|I>>>12),I=A+(O^b&(C^O))+R[13]+2850285829&4294967295,A=C+(I<<5&4294967295|I>>>27),I=b+(C^O&(A^C))+R[2]+4243563512&4294967295,b=A+(I<<9&4294967295|I>>>23),I=O+(A^C&(b^A))+R[7]+1735328473&4294967295,O=b+(I<<14&4294967295|I>>>18),I=C+(b^A&(O^b))+R[12]+2368359562&4294967295,C=O+(I<<20&4294967295|I>>>12),I=A+(C^O^b)+R[5]+4294588738&4294967295,A=C+(I<<4&4294967295|I>>>28),I=b+(A^C^O)+R[8]+2272392833&4294967295,b=A+(I<<11&4294967295|I>>>21),I=O+(b^A^C)+R[11]+1839030562&4294967295,O=b+(I<<16&4294967295|I>>>16),I=C+(O^b^A)+R[14]+4259657740&4294967295,C=O+(I<<23&4294967295|I>>>9),I=A+(C^O^b)+R[1]+2763975236&4294967295,A=C+(I<<4&4294967295|I>>>28),I=b+(A^C^O)+R[4]+1272893353&4294967295,b=A+(I<<11&4294967295|I>>>21),I=O+(b^A^C)+R[7]+4139469664&4294967295,O=b+(I<<16&4294967295|I>>>16),I=C+(O^b^A)+R[10]+3200236656&4294967295,C=O+(I<<23&4294967295|I>>>9),I=A+(C^O^b)+R[13]+681279174&4294967295,A=C+(I<<4&4294967295|I>>>28),I=b+(A^C^O)+R[0]+3936430074&4294967295,b=A+(I<<11&4294967295|I>>>21),I=O+(b^A^C)+R[3]+3572445317&4294967295,O=b+(I<<16&4294967295|I>>>16),I=C+(O^b^A)+R[6]+76029189&4294967295,C=O+(I<<23&4294967295|I>>>9),I=A+(C^O^b)+R[9]+3654602809&4294967295,A=C+(I<<4&4294967295|I>>>28),I=b+(A^C^O)+R[12]+3873151461&4294967295,b=A+(I<<11&4294967295|I>>>21),I=O+(b^A^C)+R[15]+530742520&4294967295,O=b+(I<<16&4294967295|I>>>16),I=C+(O^b^A)+R[2]+3299628645&4294967295,C=O+(I<<23&4294967295|I>>>9),I=A+(O^(C|~b))+R[0]+4096336452&4294967295,A=C+(I<<6&4294967295|I>>>26),I=b+(C^(A|~O))+R[7]+1126891415&4294967295,b=A+(I<<10&4294967295|I>>>22),I=O+(A^(b|~C))+R[14]+2878612391&4294967295,O=b+(I<<15&4294967295|I>>>17),I=C+(b^(O|~A))+R[5]+4237533241&4294967295,C=O+(I<<21&4294967295|I>>>11),I=A+(O^(C|~b))+R[12]+1700485571&4294967295,A=C+(I<<6&4294967295|I>>>26),I=b+(C^(A|~O))+R[3]+2399980690&4294967295,b=A+(I<<10&4294967295|I>>>22),I=O+(A^(b|~C))+R[10]+4293915773&4294967295,O=b+(I<<15&4294967295|I>>>17),I=C+(b^(O|~A))+R[1]+2240044497&4294967295,C=O+(I<<21&4294967295|I>>>11),I=A+(O^(C|~b))+R[8]+1873313359&4294967295,A=C+(I<<6&4294967295|I>>>26),I=b+(C^(A|~O))+R[15]+4264355552&4294967295,b=A+(I<<10&4294967295|I>>>22),I=O+(A^(b|~C))+R[6]+2734768916&4294967295,O=b+(I<<15&4294967295|I>>>17),I=C+(b^(O|~A))+R[13]+1309151649&4294967295,C=O+(I<<21&4294967295|I>>>11),I=A+(O^(C|~b))+R[4]+4149444226&4294967295,A=C+(I<<6&4294967295|I>>>26),I=b+(C^(A|~O))+R[11]+3174756917&4294967295,b=A+(I<<10&4294967295|I>>>22),I=O+(A^(b|~C))+R[2]+718787259&4294967295,O=b+(I<<15&4294967295|I>>>17),I=C+(b^(O|~A))+R[9]+3951481745&4294967295,P.g[0]=P.g[0]+A&4294967295,P.g[1]=P.g[1]+(O+(I<<21&4294967295|I>>>11))&4294967295,P.g[2]=P.g[2]+O&4294967295,P.g[3]=P.g[3]+b&4294967295}r.prototype.v=function(P,A){A===void 0&&(A=P.length);const C=A-this.blockSize,R=this.C;let O=this.h,b=0;for(;b<A;){if(O==0)for(;b<=C;)i(this,P,b),b+=this.blockSize;if(typeof P=="string"){for(;b<A;)if(R[O++]=P.charCodeAt(b++),O==this.blockSize){i(this,R),O=0;break}}else for(;b<A;)if(R[O++]=P[b++],O==this.blockSize){i(this,R),O=0;break}}this.h=O,this.o+=A},r.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var A=1;A<P.length-8;++A)P[A]=0;A=this.o*8;for(var C=P.length-8;C<P.length;++C)P[C]=A&255,A/=256;for(this.v(P),P=Array(16),A=0,C=0;C<4;++C)for(let R=0;R<32;R+=8)P[A++]=this.g[C]>>>R&255;return P};function s(P,A){var C=a;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=A(P)}function o(P,A){this.h=A;const C=[];let R=!0;for(let O=P.length-1;O>=0;O--){const b=P[O]|0;R&&b==A||(C[O]=b,R=!1)}this.g=C}var a={};function l(P){return-128<=P&&P<128?s(P,function(A){return new o([A|0],A<0?-1:0)}):new o([P|0],P<0?-1:0)}function h(P){if(isNaN(P)||!isFinite(P))return p;if(P<0)return E(h(-P));const A=[];let C=1;for(let R=0;P>=C;R++)A[R]=P/C|0,C*=4294967296;return new o(A,0)}function f(P,A){if(P.length==0)throw Error("number format error: empty string");if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(P.charAt(0)=="-")return E(f(P.substring(1),A));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=h(Math.pow(A,8));let R=p;for(let b=0;b<P.length;b+=8){var O=Math.min(8,P.length-b);const I=parseInt(P.substring(b,b+O),A);O<8?(O=h(Math.pow(A,O)),R=R.j(O).add(h(I))):(R=R.j(C),R=R.add(h(I)))}return R}var p=l(0),m=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(u(this))return-E(this).m();let P=0,A=1;for(let C=0;C<this.g.length;C++){const R=this.i(C);P+=(R>=0?R:4294967296+R)*A,A*=4294967296}return P},t.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(_(this))return"0";if(u(this))return"-"+E(this).toString(P);const A=h(Math.pow(P,6));var C=this;let R="";for(;;){const O=L(C,A).g;C=T(C,O.j(A));let b=((C.g.length>0?C.g[0]:C.h)>>>0).toString(P);if(C=O,_(C))return b+R;for(;b.length<6;)b="0"+b;R=b+R}},t.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function _(P){if(P.h!=0)return!1;for(let A=0;A<P.g.length;A++)if(P.g[A]!=0)return!1;return!0}function u(P){return P.h==-1}t.l=function(P){return P=T(this,P),u(P)?-1:_(P)?0:1};function E(P){const A=P.g.length,C=[];for(let R=0;R<A;R++)C[R]=~P.g[R];return new o(C,~P.h).add(m)}t.abs=function(){return u(this)?E(this):this},t.add=function(P){const A=Math.max(this.g.length,P.g.length),C=[];let R=0;for(let O=0;O<=A;O++){let b=R+(this.i(O)&65535)+(P.i(O)&65535),I=(b>>>16)+(this.i(O)>>>16)+(P.i(O)>>>16);R=I>>>16,b&=65535,I&=65535,C[O]=I<<16|b}return new o(C,C[C.length-1]&-2147483648?-1:0)};function T(P,A){return P.add(E(A))}t.j=function(P){if(_(this)||_(P))return p;if(u(this))return u(P)?E(this).j(E(P)):E(E(this).j(P));if(u(P))return E(this.j(E(P)));if(this.l(g)<0&&P.l(g)<0)return h(this.m()*P.m());const A=this.g.length+P.g.length,C=[];for(var R=0;R<2*A;R++)C[R]=0;for(R=0;R<this.g.length;R++)for(let O=0;O<P.g.length;O++){const b=this.i(R)>>>16,I=this.i(R)&65535,w=P.i(O)>>>16,X=P.i(O)&65535;C[2*R+2*O]+=I*X,S(C,2*R+2*O),C[2*R+2*O+1]+=b*X,S(C,2*R+2*O+1),C[2*R+2*O+1]+=I*w,S(C,2*R+2*O+1),C[2*R+2*O+2]+=b*w,S(C,2*R+2*O+2)}for(P=0;P<A;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=A;P<2*A;P++)C[P]=0;return new o(C,0)};function S(P,A){for(;(P[A]&65535)!=P[A];)P[A+1]+=P[A]>>>16,P[A]&=65535,A++}function M(P,A){this.g=P,this.h=A}function L(P,A){if(_(A))throw Error("division by zero");if(_(P))return new M(p,p);if(u(P))return A=L(E(P),A),new M(E(A.g),E(A.h));if(u(A))return A=L(P,E(A)),new M(E(A.g),A.h);if(P.g.length>30){if(u(P)||u(A))throw Error("slowDivide_ only works with positive integers.");for(var C=m,R=A;R.l(P)<=0;)C=V(C),R=V(R);var O=Q(C,1),b=Q(R,1);for(R=Q(R,2),C=Q(C,2);!_(R);){var I=b.add(R);I.l(P)<=0&&(O=O.add(C),b=I),R=Q(R,1),C=Q(C,1)}return A=T(P,O.j(A)),new M(O,A)}for(O=p;P.l(A)>=0;){for(C=Math.max(1,Math.floor(P.m()/A.m())),R=Math.ceil(Math.log(C)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),b=h(C),I=b.j(A);u(I)||I.l(P)>0;)C-=R,b=h(C),I=b.j(A);_(b)&&(b=m),O=O.add(b),P=T(P,I)}return new M(O,P)}t.B=function(P){return L(this,P).h},t.and=function(P){const A=Math.max(this.g.length,P.g.length),C=[];for(let R=0;R<A;R++)C[R]=this.i(R)&P.i(R);return new o(C,this.h&P.h)},t.or=function(P){const A=Math.max(this.g.length,P.g.length),C=[];for(let R=0;R<A;R++)C[R]=this.i(R)|P.i(R);return new o(C,this.h|P.h)},t.xor=function(P){const A=Math.max(this.g.length,P.g.length),C=[];for(let R=0;R<A;R++)C[R]=this.i(R)^P.i(R);return new o(C,this.h^P.h)};function V(P){const A=P.g.length+1,C=[];for(let R=0;R<A;R++)C[R]=P.i(R)<<1|P.i(R-1)>>>31;return new o(C,P.h)}function Q(P,A){const C=A>>5;A%=32;const R=P.g.length-C,O=[];for(let b=0;b<R;b++)O[b]=A>0?P.i(b+C)>>>A|P.i(b+C+1)<<32-A:P.i(b+C);return new o(O,P.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Xr=o}).apply(typeof rm<"u"?rm:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qy,Zs,Wy,Ba,ju,Hy,Gy,Ky;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var y=0;y<c.length;++y){var x=c[y];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}var r=n(this);function i(c,y){if(y)e:{var x=r;c=c.split(".");for(var F=0;F<c.length-1;F++){var ue=c[F];if(!(ue in x))break e;x=x[ue]}c=c[c.length-1],F=x[c],y=y(F),y!=F&&y!=null&&e(x,c,{configurable:!0,writable:!0,value:y})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(y){var x=[],F;for(F in y)Object.prototype.hasOwnProperty.call(y,F)&&x.push([F,y[F]]);return x}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function l(c,y,x){return c.call.apply(c.bind,arguments)}function h(c,y,x){return h=l,h.apply(null,arguments)}function f(c,y){var x=Array.prototype.slice.call(arguments,1);return function(){var F=x.slice();return F.push.apply(F,arguments),c.apply(this,F)}}function p(c,y){function x(){}x.prototype=y.prototype,c.Z=y.prototype,c.prototype=new x,c.prototype.constructor=c,c.Ob=function(F,ue,me){for(var Ae=Array(arguments.length-2),He=2;He<arguments.length;He++)Ae[He-2]=arguments[He];return y.prototype[ue].apply(F,Ae)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function g(c){const y=c.length;if(y>0){const x=Array(y);for(let F=0;F<y;F++)x[F]=c[F];return x}return[]}function _(c,y){for(let F=1;F<arguments.length;F++){const ue=arguments[F];var x=typeof ue;if(x=x!="object"?x:ue?Array.isArray(ue)?"array":x:"null",x=="array"||x=="object"&&typeof ue.length=="number"){x=c.length||0;const me=ue.length||0;c.length=x+me;for(let Ae=0;Ae<me;Ae++)c[x+Ae]=ue[Ae]}else c.push(ue)}}class u{constructor(y,x){this.i=y,this.j=x,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function E(c){o.setTimeout(()=>{throw c},0)}function T(){var c=P;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class S{constructor(){this.h=this.g=null}add(y,x){const F=M.get();F.set(y,x),this.h?this.h.next=F:this.g=F,this.h=F}}var M=new u(()=>new L,c=>c.reset());class L{constructor(){this.next=this.g=this.h=null}set(y,x){this.h=y,this.g=x,this.next=null}reset(){this.next=this.g=this.h=null}}let V,Q=!1,P=new S,A=()=>{const c=Promise.resolve(void 0);V=()=>{c.then(C)}};function C(){for(var c;c=T();){try{c.h.call(c.g)}catch(x){E(x)}var y=M;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}Q=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const x=()=>{};o.addEventListener("test",x,y),o.removeEventListener("test",x,y)}catch{}return c}();function I(c){return/^[\s\xa0]*$/.test(c)}function w(c,y){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}p(w,O),w.prototype.init=function(c,y){const x=this.type=c.type,F=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(x=="mouseover"?y=c.fromElement:x=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,F?(this.clientX=F.clientX!==void 0?F.clientX:F.pageX,this.clientY=F.clientY!==void 0?F.clientY:F.pageY,this.screenX=F.screenX||0,this.screenY=F.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&w.Z.h.call(this)},w.prototype.h=function(){w.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var X="closure_listenable_"+(Math.random()*1e6|0),oe=0;function J(c,y,x,F,ue){this.listener=c,this.proxy=null,this.src=y,this.type=x,this.capture=!!F,this.ha=ue,this.key=++oe,this.da=this.fa=!1}function ce(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function re(c,y,x){for(const F in c)y.call(x,c[F],F,c)}function _e(c,y){for(const x in c)y.call(void 0,c[x],x,c)}function ne(c){const y={};for(const x in c)y[x]=c[x];return y}const ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(c,y){let x,F;for(let ue=1;ue<arguments.length;ue++){F=arguments[ue];for(x in F)c[x]=F[x];for(let me=0;me<ee.length;me++)x=ee[me],Object.prototype.hasOwnProperty.call(F,x)&&(c[x]=F[x])}}function pe(c){this.src=c,this.g={},this.h=0}pe.prototype.add=function(c,y,x,F,ue){const me=c.toString();c=this.g[me],c||(c=this.g[me]=[],this.h++);const Ae=le(c,y,F,ue);return Ae>-1?(y=c[Ae],x||(y.fa=!1)):(y=new J(y,this.src,me,!!F,ue),y.fa=x,c.push(y)),y};function $(c,y){const x=y.type;if(x in c.g){var F=c.g[x],ue=Array.prototype.indexOf.call(F,y,void 0),me;(me=ue>=0)&&Array.prototype.splice.call(F,ue,1),me&&(ce(y),c.g[x].length==0&&(delete c.g[x],c.h--))}}function le(c,y,x,F){for(let ue=0;ue<c.length;++ue){const me=c[ue];if(!me.da&&me.listener==y&&me.capture==!!x&&me.ha==F)return ue}return-1}var G="closure_lm_"+(Math.random()*1e6|0),Z={};function ge(c,y,x,F,ue){if(Array.isArray(y)){for(let me=0;me<y.length;me++)ge(c,y[me],x,F,ue);return null}return x=D(x),c&&c[X]?c.J(y,x,a(F)?!!F.capture:!1,ue):Ie(c,y,x,!1,F,ue)}function Ie(c,y,x,F,ue,me){if(!y)throw Error("Invalid event type");const Ae=a(ue)?!!ue.capture:!!ue;let He=q(c);if(He||(c[G]=He=new pe(c)),x=He.add(y,x,F,Ae,me),x.proxy)return x;if(F=ke(),x.proxy=F,F.src=c,F.listener=x,c.addEventListener)b||(ue=Ae),ue===void 0&&(ue=!1),c.addEventListener(y.toString(),F,ue);else if(c.attachEvent)c.attachEvent(v(y.toString()),F);else if(c.addListener&&c.removeListener)c.addListener(F);else throw Error("addEventListener and attachEvent are unavailable.");return x}function ke(){function c(x){return y.call(c.src,c.listener,x)}const y=K;return c}function z(c,y,x,F,ue){if(Array.isArray(y))for(var me=0;me<y.length;me++)z(c,y[me],x,F,ue);else F=a(F)?!!F.capture:!!F,x=D(x),c&&c[X]?(c=c.i,me=String(y).toString(),me in c.g&&(y=c.g[me],x=le(y,x,F,ue),x>-1&&(ce(y[x]),Array.prototype.splice.call(y,x,1),y.length==0&&(delete c.g[me],c.h--)))):c&&(c=q(c))&&(y=c.g[y.toString()],c=-1,y&&(c=le(y,x,F,ue)),(x=c>-1?y[c]:null)&&H(x))}function H(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[X])$(y.i,c);else{var x=c.type,F=c.proxy;y.removeEventListener?y.removeEventListener(x,F,c.capture):y.detachEvent?y.detachEvent(v(x),F):y.addListener&&y.removeListener&&y.removeListener(F),(x=q(y))?($(x,c),x.h==0&&(x.src=null,y[G]=null)):ce(c)}}}function v(c){return c in Z?Z[c]:Z[c]="on"+c}function K(c,y){if(c.da)c=!0;else{y=new w(y,this);const x=c.listener,F=c.ha||c.src;c.fa&&H(c),c=x.call(F,y)}return c}function q(c){return c=c[G],c instanceof pe?c:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function D(c){return typeof c=="function"?c:(c[N]||(c[N]=function(y){return c.handleEvent(y)}),c[N])}function B(){R.call(this),this.i=new pe(this),this.M=this,this.G=null}p(B,R),B.prototype[X]=!0,B.prototype.removeEventListener=function(c,y,x,F){z(this,c,y,x,F)};function U(c,y){var x,F=c.G;if(F)for(x=[];F;F=F.G)x.push(F);if(c=c.M,F=y.type||y,typeof y=="string")y=new O(y,c);else if(y instanceof O)y.target=y.target||c;else{var ue=y;y=new O(F,c),de(y,ue)}ue=!0;let me,Ae;if(x)for(Ae=x.length-1;Ae>=0;Ae--)me=y.g=x[Ae],ue=k(me,F,!0,y)&&ue;if(me=y.g=c,ue=k(me,F,!0,y)&&ue,ue=k(me,F,!1,y)&&ue,x)for(Ae=0;Ae<x.length;Ae++)me=y.g=x[Ae],ue=k(me,F,!1,y)&&ue}B.prototype.N=function(){if(B.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const x=c.g[y];for(let F=0;F<x.length;F++)ce(x[F]);delete c.g[y],c.h--}}this.G=null},B.prototype.J=function(c,y,x,F){return this.i.add(String(c),y,!1,x,F)},B.prototype.K=function(c,y,x,F){return this.i.add(String(c),y,!0,x,F)};function k(c,y,x,F){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let ue=!0;for(let me=0;me<y.length;++me){const Ae=y[me];if(Ae&&!Ae.da&&Ae.capture==x){const He=Ae.listener,Dt=Ae.ha||Ae.src;Ae.fa&&$(c.i,Ae),ue=He.call(Dt,F)!==!1&&ue}}return ue&&!F.defaultPrevented}function j(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=h(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:o.setTimeout(c,y||0)}function te(c){c.g=j(()=>{c.g=null,c.i&&(c.i=!1,te(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class ae extends R{constructor(y,x){super(),this.m=y,this.l=x,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fe(c){R.call(this),this.h=c,this.g={}}p(fe,R);var Ee=[];function Pe(c){re(c.g,function(y,x){this.g.hasOwnProperty(x)&&H(y)},c),c.g={}}fe.prototype.N=function(){fe.Z.N.call(this),Pe(this)},fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var he=o.JSON.stringify,Be=o.JSON.parse,rt=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Ke(){}function yt(){}var Ge={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Jt(){O.call(this,"d")}p(Jt,O);function tt(){O.call(this,"c")}p(tt,O);var Ze={},Tt=null;function Te(){return Tt=Tt||new B}Ze.Ia="serverreachability";function ie(c){O.call(this,Ze.Ia,c)}p(ie,O);function Qe(c){const y=Te();U(y,new ie(y))}Ze.STAT_EVENT="statevent";function Rt(c,y){O.call(this,Ze.STAT_EVENT,c),this.stat=y}p(Rt,O);function xe(c){const y=Te();U(y,new Rt(y,c))}Ze.Ja="timingevent";function Ct(c,y){O.call(this,Ze.Ja,c),this.size=y}p(Ct,O);function nr(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},y)}function Rr(){this.g=!0}Rr.prototype.ua=function(){this.g=!1};function ia(c,y,x,F,ue,me){c.info(function(){if(c.g)if(me){var Ae="",He=me.split("&");for(let ut=0;ut<He.length;ut++){var Dt=He[ut].split("=");if(Dt.length>1){const zt=Dt[0];Dt=Dt[1];const zn=zt.split("_");Ae=zn.length>=2&&zn[1]=="type"?Ae+(zt+"="+Dt+"&"):Ae+(zt+"=redacted&")}}}else Ae=null;else Ae=me;return"XMLHTTP REQ ("+F+") [attempt "+ue+"]: "+y+`
`+x+`
`+Ae})}function sa(c,y,x,F,ue,me,Ae){c.info(function(){return"XMLHTTP RESP ("+F+") [ attempt "+ue+"]: "+y+`
`+x+`
`+me+" "+Ae})}function rr(c,y,x,F){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+aa(c,x)+(F?" "+F:"")})}function oa(c,y){c.info(function(){return"TIMEOUT: "+y})}Rr.prototype.info=function(){};function aa(c,y){if(!c.g)return y;if(!y)return null;try{const me=JSON.parse(y);if(me){for(c=0;c<me.length;c++)if(Array.isArray(me[c])){var x=me[c];if(!(x.length<2)){var F=x[1];if(Array.isArray(F)&&!(F.length<1)){var ue=F[0];if(ue!="noop"&&ue!="stop"&&ue!="close")for(let Ae=1;Ae<F.length;Ae++)F[Ae]=""}}}}return he(me)}catch{return y}}var fi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ns={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Os;function qi(){}p(qi,Ke),qi.prototype.g=function(){return new XMLHttpRequest},Os=new qi;function Pr(c){return encodeURIComponent(String(c))}function se(c){var y=1;c=c.split(":");const x=[];for(;y>0&&c.length;)x.push(c.shift()),y--;return c.length&&x.push(c.join(":")),x}function _t(c,y,x,F){this.j=c,this.i=y,this.l=x,this.S=F||1,this.V=new fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new la}function la(){this.i=null,this.g="",this.h=!1}var Dh={},_c={};function bc(c,y,x){c.M=1,c.A=ua(Un(y)),c.u=x,c.R=!0,Mh(c,null)}function Mh(c,y){c.F=Date.now(),ca(c),c.B=Un(c.A);var x=c.B,F=c.S;Array.isArray(F)||(F=[String(F)]),Kh(x.i,"t",F),c.C=0,x=c.j.L,c.h=new la,c.g=ff(c.j,x?y:null,!c.u),c.P>0&&(c.O=new ae(h(c.Y,c,c.g),c.P)),y=c.V,x=c.g,F=c.ba;var ue="readystatechange";Array.isArray(ue)||(ue&&(Ee[0]=ue.toString()),ue=Ee);for(let me=0;me<ue.length;me++){const Ae=ge(x,ue[me],F||y.handleEvent,!1,y.h||y);if(!Ae)break;y.g[Ae.key]=Ae}y=c.J?ne(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),Qe(),ia(c.i,c.v,c.B,c.l,c.S,c.u)}_t.prototype.ba=function(c){c=c.target;const y=this.O;y&&Dr(c)==3?y.j():this.Y(c)},_t.prototype.Y=function(c){try{if(c==this.g)e:{const He=Dr(this.g),Dt=this.g.ya(),ut=this.g.ca();if(!(He<3)&&(He!=3||this.g&&(this.h.h||this.g.la()||tf(this.g)))){this.K||He!=4||Dt==7||(Dt==8||ut<=0?Qe(3):Qe(2)),wc(this);var y=this.g.ca();this.X=y;var x=J_(this);if(this.o=y==200,sa(this.i,this.v,this.B,this.l,this.S,He,y),this.o){if(this.U&&!this.L){t:{if(this.g){var F,ue=this.g;if((F=ue.g?ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(F)){var me=F;break t}}me=null}if(c=me)rr(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ec(this,c);else{this.o=!1,this.m=3,xe(12),pi(this),Ds(this);break e}}if(this.R){c=!0;let zt;for(;!this.K&&this.C<x.length;)if(zt=Y_(this,x),zt==_c){He==4&&(this.m=4,xe(14),c=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Dh){this.m=4,xe(15),rr(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else rr(this.i,this.l,zt,null),Ec(this,zt);if(Lh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||x.length!=0||this.h.h||(this.m=1,xe(16),c=!1),this.o=this.o&&c,!c)rr(this.i,this.l,x,"[Invalid Chunked Response]"),pi(this),Ds(this);else if(x.length>0&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.aa&&!Ae.P&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Rc(Ae),Ae.P=!0,xe(11))}}else rr(this.i,this.l,x,null),Ec(this,x);He==4&&pi(this),this.o&&!this.K&&(He==4?cf(this.j,this):(this.o=!1,ca(this)))}else db(this.g),y==400&&x.indexOf("Unknown SID")>0?(this.m=3,xe(12)):(this.m=0,xe(13)),pi(this),Ds(this)}}}catch{}finally{}};function J_(c){if(!Lh(c))return c.g.la();const y=tf(c.g);if(y==="")return"";let x="";const F=y.length,ue=Dr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return pi(c),Ds(c),"";c.h.i=new o.TextDecoder}for(let me=0;me<F;me++)c.h.h=!0,x+=c.h.i.decode(y[me],{stream:!(ue&&me==F-1)});return y.length=0,c.h.g+=x,c.C=0,c.h.g}function Lh(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Y_(c,y){var x=c.C,F=y.indexOf(`
`,x);return F==-1?_c:(x=Number(y.substring(x,F)),isNaN(x)?Dh:(F+=1,F+x>y.length?_c:(y=y.slice(F,F+x),c.C=F+x,y)))}_t.prototype.cancel=function(){this.K=!0,pi(this)};function ca(c){c.T=Date.now()+c.H,Vh(c,c.H)}function Vh(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=nr(h(c.aa,c),y)}function wc(c){c.D&&(o.clearTimeout(c.D),c.D=null)}_t.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(oa(this.i,this.B),this.M!=2&&(Qe(),xe(17)),pi(this),this.m=2,Ds(this)):Vh(this,this.T-c)};function Ds(c){c.j.I==0||c.K||cf(c.j,c)}function pi(c){wc(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Pe(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function Ec(c,y){try{var x=c.j;if(x.I!=0&&(x.g==c||Ic(x.h,c))){if(!c.L&&Ic(x.h,c)&&x.I==3){try{var F=x.Ba.g.parse(y)}catch{F=null}if(Array.isArray(F)&&F.length==3){var ue=F;if(ue[0]==0){e:if(!x.v){if(x.g)if(x.g.F+3e3<c.F)ma(x),fa(x);else break e;Ac(x),xe(18)}}else x.xa=ue[1],0<x.xa-x.K&&ue[2]<37500&&x.F&&x.A==0&&!x.C&&(x.C=nr(h(x.Va,x),6e3));Uh(x.h)<=1&&x.ta&&(x.ta=void 0)}else gi(x,11)}else if((c.L||x.g==c)&&ma(x),!I(y))for(ue=x.Ba.g.parse(y),y=0;y<ue.length;y++){let ut=ue[y];const zt=ut[0];if(!(zt<=x.K))if(x.K=zt,ut=ut[1],x.I==2)if(ut[0]=="c"){x.M=ut[1],x.ba=ut[2];const zn=ut[3];zn!=null&&(x.ka=zn,x.j.info("VER="+x.ka));const vi=ut[4];vi!=null&&(x.za=vi,x.j.info("SVER="+x.za));const Mr=ut[5];Mr!=null&&typeof Mr=="number"&&Mr>0&&(F=1.5*Mr,x.O=F,x.j.info("backChannelRequestTimeoutMs_="+F)),F=x;const Lr=c.g;if(Lr){const va=Lr.g?Lr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var me=F.h;me.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(me.j=me.l,me.g=new Set,me.h&&(Tc(me,me.h),me.h=null))}if(F.G){const Pc=Lr.g?Lr.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(F.wa=Pc,mt(F.J,F.G,Pc))}}x.I=3,x.l&&x.l.ra(),x.aa&&(x.T=Date.now()-c.F,x.j.info("Handshake RTT: "+x.T+"ms")),F=x;var Ae=c;if(F.na=hf(F,F.L?F.ba:null,F.W),Ae.L){zh(F.h,Ae);var He=Ae,Dt=F.O;Dt&&(He.H=Dt),He.D&&(wc(He),ca(He)),F.g=Ae}else af(F);x.i.length>0&&pa(x)}else ut[0]!="stop"&&ut[0]!="close"||gi(x,7);else x.I==3&&(ut[0]=="stop"||ut[0]=="close"?ut[0]=="stop"?gi(x,7):Sc(x):ut[0]!="noop"&&x.l&&x.l.qa(ut),x.A=0)}}Qe(4)}catch{}}var X_=class{constructor(c,y){this.g=c,this.map=y}};function $h(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Uh(c){return c.h?1:c.g?c.g.size:0}function Ic(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Tc(c,y){c.g?c.g.add(y):c.h=y}function zh(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}$h.prototype.cancel=function(){if(this.i=Bh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Bh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const x of c.g.values())y=y.concat(x.G);return y}return g(c.i)}var jh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Z_(c,y){if(c){c=c.split("&");for(let x=0;x<c.length;x++){const F=c[x].indexOf("=");let ue,me=null;F>=0?(ue=c[x].substring(0,F),me=c[x].substring(F+1)):ue=c[x],y(ue,me?decodeURIComponent(me.replace(/\+/g," ")):"")}}}function Nr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Nr?(this.l=c.l,Ms(this,c.j),this.o=c.o,this.g=c.g,Ls(this,c.u),this.h=c.h,Cc(this,Qh(c.i)),this.m=c.m):c&&(y=String(c).match(jh))?(this.l=!1,Ms(this,y[1]||"",!0),this.o=Vs(y[2]||""),this.g=Vs(y[3]||"",!0),Ls(this,y[4]),this.h=Vs(y[5]||"",!0),Cc(this,y[6]||"",!0),this.m=Vs(y[7]||"")):(this.l=!1,this.i=new Fs(null,this.l))}Nr.prototype.toString=function(){const c=[];var y=this.j;y&&c.push($s(y,qh,!0),":");var x=this.g;return(x||y=="file")&&(c.push("//"),(y=this.o)&&c.push($s(y,qh,!0),"@"),c.push(Pr(x).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),x=this.u,x!=null&&c.push(":",String(x))),(x=this.h)&&(this.g&&x.charAt(0)!="/"&&c.push("/"),c.push($s(x,x.charAt(0)=="/"?nb:tb,!0))),(x=this.i.toString())&&c.push("?",x),(x=this.m)&&c.push("#",$s(x,ib)),c.join("")},Nr.prototype.resolve=function(c){const y=Un(this);let x=!!c.j;x?Ms(y,c.j):x=!!c.o,x?y.o=c.o:x=!!c.g,x?y.g=c.g:x=c.u!=null;var F=c.h;if(x)Ls(y,c.u);else if(x=!!c.h){if(F.charAt(0)!="/")if(this.g&&!this.h)F="/"+F;else{var ue=y.h.lastIndexOf("/");ue!=-1&&(F=y.h.slice(0,ue+1)+F)}if(ue=F,ue==".."||ue==".")F="";else if(ue.indexOf("./")!=-1||ue.indexOf("/.")!=-1){F=ue.lastIndexOf("/",0)==0,ue=ue.split("/");const me=[];for(let Ae=0;Ae<ue.length;){const He=ue[Ae++];He=="."?F&&Ae==ue.length&&me.push(""):He==".."?((me.length>1||me.length==1&&me[0]!="")&&me.pop(),F&&Ae==ue.length&&me.push("")):(me.push(He),F=!0)}F=me.join("/")}else F=ue}return x?y.h=F:x=c.i.toString()!=="",x?Cc(y,Qh(c.i)):x=!!c.m,x&&(y.m=c.m),y};function Un(c){return new Nr(c)}function Ms(c,y,x){c.j=x?Vs(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Ls(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function Cc(c,y,x){y instanceof Fs?(c.i=y,sb(c.i,c.l)):(x||(y=$s(y,rb)),c.i=new Fs(y,c.l))}function mt(c,y,x){c.i.set(y,x)}function ua(c){return mt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Vs(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function $s(c,y,x){return typeof c=="string"?(c=encodeURI(c).replace(y,eb),x&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function eb(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var qh=/[#\/\?@]/g,tb=/[#\?:]/g,nb=/[#\?]/g,rb=/[#\?@]/g,ib=/#/g;function Fs(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function mi(c){c.g||(c.g=new Map,c.h=0,c.i&&Z_(c.i,function(y,x){c.add(decodeURIComponent(y.replace(/\+/g," ")),x)}))}t=Fs.prototype,t.add=function(c,y){mi(this),this.i=null,c=Wi(this,c);let x=this.g.get(c);return x||this.g.set(c,x=[]),x.push(y),this.h+=1,this};function Wh(c,y){mi(c),y=Wi(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Hh(c,y){return mi(c),y=Wi(c,y),c.g.has(y)}t.forEach=function(c,y){mi(this),this.g.forEach(function(x,F){x.forEach(function(ue){c.call(y,ue,F,this)},this)},this)};function Gh(c,y){mi(c);let x=[];if(typeof y=="string")Hh(c,y)&&(x=x.concat(c.g.get(Wi(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)x=x.concat(c[y]);return x}t.set=function(c,y){return mi(this),this.i=null,c=Wi(this,c),Hh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},t.get=function(c,y){return c?(c=Gh(this,c),c.length>0?String(c[0]):y):y};function Kh(c,y,x){Wh(c,y),x.length>0&&(c.i=null,c.g.set(Wi(c,y),g(x)),c.h+=x.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let F=0;F<y.length;F++){var x=y[F];const ue=Pr(x);x=Gh(this,x);for(let me=0;me<x.length;me++){let Ae=ue;x[me]!==""&&(Ae+="="+Pr(x[me])),c.push(Ae)}}return this.i=c.join("&")};function Qh(c){const y=new Fs;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function Wi(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function sb(c,y){y&&!c.j&&(mi(c),c.i=null,c.g.forEach(function(x,F){const ue=F.toLowerCase();F!=ue&&(Wh(this,F),Kh(this,ue,x))},c)),c.j=y}function ob(c,y){const x=new Rr;if(o.Image){const F=new Image;F.onload=f(Or,x,"TestLoadImage: loaded",!0,y,F),F.onerror=f(Or,x,"TestLoadImage: error",!1,y,F),F.onabort=f(Or,x,"TestLoadImage: abort",!1,y,F),F.ontimeout=f(Or,x,"TestLoadImage: timeout",!1,y,F),o.setTimeout(function(){F.ontimeout&&F.ontimeout()},1e4),F.src=c}else y(!1)}function ab(c,y){const x=new Rr,F=new AbortController,ue=setTimeout(()=>{F.abort(),Or(x,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:F.signal}).then(me=>{clearTimeout(ue),me.ok?Or(x,"TestPingServer: ok",!0,y):Or(x,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(ue),Or(x,"TestPingServer: error",!1,y)})}function Or(c,y,x,F,ue){try{ue&&(ue.onload=null,ue.onerror=null,ue.onabort=null,ue.ontimeout=null),F(x)}catch{}}function lb(){this.g=new rt}function xc(c){this.i=c.Sb||null,this.h=c.ab||!1}p(xc,Ke),xc.prototype.g=function(){return new da(this.i,this.h)};function da(c,y){B.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(da,B),t=da.prototype,t.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,zs(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||o).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?Us(this):zs(this),this.readyState==3&&Jh(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Us(this))},t.Na=function(c){this.g&&(this.response=c,Us(this))},t.ga=function(){this.g&&Us(this)};function Us(c){c.readyState=4,c.l=null,c.j=null,c.B=null,zs(c)}t.setRequestHeader=function(c,y){this.A.append(c,y)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var x=y.next();!x.done;)x=x.value,c.push(x[0]+": "+x[1]),x=y.next();return c.join(`\r
`)};function zs(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Yh(c){let y="";return re(c,function(x,F){y+=F,y+=":",y+=x,y+=`\r
`}),y}function kc(c,y,x){e:{for(F in x){var F=!1;break e}F=!0}F||(x=Yh(x),typeof c=="string"?x!=null&&Pr(x):mt(c,y,x))}function xt(c){B.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(xt,B);var cb=/^https?$/i,ub=["POST","PUT"];t=xt.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,y,x,F){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Os.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(me){Xh(this,me);return}if(c=x||"",x=new Map(this.headers),F)if(Object.getPrototypeOf(F)===Object.prototype)for(var ue in F)x.set(ue,F[ue]);else if(typeof F.keys=="function"&&typeof F.get=="function")for(const me of F.keys())x.set(me,F.get(me));else throw Error("Unknown input type for opt_headers: "+String(F));F=Array.from(x.keys()).find(me=>me.toLowerCase()=="content-type"),ue=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(ub,y,void 0)>=0)||F||ue||x.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[me,Ae]of x)this.g.setRequestHeader(me,Ae);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(me){Xh(this,me)}};function Xh(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,Zh(c),ha(c)}function Zh(c){c.A||(c.A=!0,U(c,"complete"),U(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,U(this,"complete"),U(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),xt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ef(this):this.Xa())},t.Xa=function(){ef(this)};function ef(c){if(c.h&&typeof s<"u"){if(c.v&&Dr(c)==4)setTimeout(c.Ca.bind(c),0);else if(U(c,"readystatechange"),Dr(c)==4){c.h=!1;try{const me=c.ca();e:switch(me){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var x;if(!(x=y)){var F;if(F=me===0){let Ae=String(c.D).match(jh)[1]||null;!Ae&&o.self&&o.self.location&&(Ae=o.self.location.protocol.slice(0,-1)),F=!cb.test(Ae?Ae.toLowerCase():"")}x=F}if(x)U(c,"complete"),U(c,"success");else{c.o=6;try{var ue=Dr(c)>2?c.g.statusText:""}catch{ue=""}c.l=ue+" ["+c.ca()+"]",Zh(c)}}finally{ha(c)}}}}function ha(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const x=c.g;c.g=null,y||U(c,"ready");try{x.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Be(y)}};function tf(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function db(c){const y={};c=(c.g&&Dr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let F=0;F<c.length;F++){if(I(c[F]))continue;var x=se(c[F]);const ue=x[0];if(x=x[1],typeof x!="string")continue;x=x.trim();const me=y[ue]||[];y[ue]=me,me.push(x)}_e(y,function(F){return F.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(c,y,x){return x&&x.internalChannelParams&&x.internalChannelParams[c]||y}function nf(c){this.za=0,this.i=[],this.j=new Rr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bs("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bs("baseRetryDelayMs",5e3,c),this.Za=Bs("retryDelaySeedMs",1e4,c),this.Ta=Bs("forwardChannelMaxRetries",2,c),this.va=Bs("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new $h(c&&c.concurrentRequestLimit),this.Ba=new lb,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=nf.prototype,t.ka=8,t.I=1,t.connect=function(c,y,x,F){xe(0),this.W=c,this.H=y||{},x&&F!==void 0&&(this.H.OSID=x,this.H.OAID=F),this.F=this.X,this.J=hf(this,null,this.W),pa(this)};function Sc(c){if(rf(c),c.I==3){var y=c.V++,x=Un(c.J);if(mt(x,"SID",c.M),mt(x,"RID",y),mt(x,"TYPE","terminate"),js(c,x),y=new _t(c,c.j,y),y.M=2,y.A=ua(Un(x)),x=!1,o.navigator&&o.navigator.sendBeacon)try{x=o.navigator.sendBeacon(y.A.toString(),"")}catch{}!x&&o.Image&&(new Image().src=y.A,x=!0),x||(y.g=ff(y.j,null),y.g.ea(y.A)),y.F=Date.now(),ca(y)}df(c)}function fa(c){c.g&&(Rc(c),c.g.cancel(),c.g=null)}function rf(c){fa(c),c.v&&(o.clearTimeout(c.v),c.v=null),ma(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function pa(c){if(!Fh(c.h)&&!c.m){c.m=!0;var y=c.Ea;V||A(),Q||(V(),Q=!0),P.add(y,c),c.D=0}}function hb(c,y){return Uh(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=nr(h(c.Ea,c,y),uf(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const ue=new _t(this,this.j,c);let me=this.o;if(this.U&&(me?(me=ne(me),de(me,this.U)):me=this.U),this.u!==null||this.R||(ue.J=me,me=null),this.S)e:{for(var y=0,x=0;x<this.i.length;x++){t:{var F=this.i[x];if("__data__"in F.map&&(F=F.map.__data__,typeof F=="string")){F=F.length;break t}F=void 0}if(F===void 0)break;if(y+=F,y>4096){y=x;break e}if(y===4096||x===this.i.length-1){y=x+1;break e}}y=1e3}else y=1e3;y=of(this,ue,y),x=Un(this.J),mt(x,"RID",c),mt(x,"CVER",22),this.G&&mt(x,"X-HTTP-Session-Id",this.G),js(this,x),me&&(this.R?y="headers="+Pr(Yh(me))+"&"+y:this.u&&kc(x,this.u,me)),Tc(this.h,ue),this.Ra&&mt(x,"TYPE","init"),this.S?(mt(x,"$req",y),mt(x,"SID","null"),ue.U=!0,bc(ue,x,null)):bc(ue,x,y),this.I=2}}else this.I==3&&(c?sf(this,c):this.i.length==0||Fh(this.h)||sf(this))};function sf(c,y){var x;y?x=y.l:x=c.V++;const F=Un(c.J);mt(F,"SID",c.M),mt(F,"RID",x),mt(F,"AID",c.K),js(c,F),c.u&&c.o&&kc(F,c.u,c.o),x=new _t(c,c.j,x,c.D+1),c.u===null&&(x.J=c.o),y&&(c.i=y.G.concat(c.i)),y=of(c,x,1e3),x.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Tc(c.h,x),bc(x,F,y)}function js(c,y){c.H&&re(c.H,function(x,F){mt(y,F,x)}),c.l&&re({},function(x,F){mt(y,F,x)})}function of(c,y,x){x=Math.min(c.i.length,x);const F=c.l?h(c.l.Ka,c.l,c):null;e:{var ue=c.i;let He=-1;for(;;){const Dt=["count="+x];He==-1?x>0?(He=ue[0].g,Dt.push("ofs="+He)):He=0:Dt.push("ofs="+He);let ut=!0;for(let zt=0;zt<x;zt++){var me=ue[zt].g;const zn=ue[zt].map;if(me-=He,me<0)He=Math.max(0,ue[zt].g-100),ut=!1;else try{me="req"+me+"_"||"";try{var Ae=zn instanceof Map?zn:Object.entries(zn);for(const[vi,Mr]of Ae){let Lr=Mr;a(Mr)&&(Lr=he(Mr)),Dt.push(me+vi+"="+encodeURIComponent(Lr))}}catch(vi){throw Dt.push(me+"type="+encodeURIComponent("_badmap")),vi}}catch{F&&F(zn)}}if(ut){Ae=Dt.join("&");break e}}Ae=void 0}return c=c.i.splice(0,x),y.G=c,Ae}function af(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;V||A(),Q||(V(),Q=!0),P.add(y,c),c.A=0}}function Ac(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=nr(h(c.Da,c),uf(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,lf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=nr(h(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xe(10),fa(this),lf(this))};function Rc(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function lf(c){c.g=new _t(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=Un(c.na);mt(y,"RID","rpc"),mt(y,"SID",c.M),mt(y,"AID",c.K),mt(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&mt(y,"TO",c.ia),mt(y,"TYPE","xmlhttp"),js(c,y),c.u&&c.o&&kc(y,c.u,c.o),c.O&&(c.g.H=c.O);var x=c.g;c=c.ba,x.M=1,x.A=ua(Un(y)),x.u=null,x.R=!0,Mh(x,c)}t.Va=function(){this.C!=null&&(this.C=null,fa(this),Ac(this),xe(19))};function ma(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function cf(c,y){var x=null;if(c.g==y){ma(c),Rc(c),c.g=null;var F=2}else if(Ic(c.h,y))x=y.G,zh(c.h,y),F=1;else return;if(c.I!=0){if(y.o)if(F==1){x=y.u?y.u.length:0,y=Date.now()-y.F;var ue=c.D;F=Te(),U(F,new Ct(F,x)),pa(c)}else af(c);else if(ue=y.m,ue==3||ue==0&&y.X>0||!(F==1&&hb(c,y)||F==2&&Ac(c)))switch(x&&x.length>0&&(y=c.h,y.i=y.i.concat(x)),ue){case 1:gi(c,5);break;case 4:gi(c,10);break;case 3:gi(c,6);break;default:gi(c,2)}}}function uf(c,y){let x=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(x*=2),x*y}function gi(c,y){if(c.j.info("Error code "+y),y==2){var x=h(c.bb,c),F=c.Ua;const ue=!F;F=new Nr(F||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ms(F,"https"),ua(F),ue?ob(F.toString(),x):ab(F.toString(),x)}else xe(2);c.I=0,c.l&&c.l.pa(y),df(c),rf(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function df(c){if(c.I=0,c.ja=[],c.l){const y=Bh(c.h);(y.length!=0||c.i.length!=0)&&(_(c.ja,y),_(c.ja,c.i),c.h.i.length=0,g(c.i),c.i.length=0),c.l.oa()}}function hf(c,y,x){var F=x instanceof Nr?Un(x):new Nr(x);if(F.g!="")y&&(F.g=y+"."+F.g),Ls(F,F.u);else{var ue=o.location;F=ue.protocol,y=y?y+"."+ue.hostname:ue.hostname,ue=+ue.port;const me=new Nr(null);F&&Ms(me,F),y&&(me.g=y),ue&&Ls(me,ue),x&&(me.h=x),F=me}return x=c.G,y=c.wa,x&&y&&mt(F,x,y),mt(F,"VER",c.ka),js(c,F),F}function ff(c,y,x){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new xt(new xc({ab:x})):new xt(c.ma),y.Fa(c.L),y}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pf(){}t=pf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ga(){}ga.prototype.g=function(c,y){return new mn(c,y)};function mn(c,y){B.call(this),this.g=new nf(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!I(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!I(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Hi(this)}p(mn,B),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Sc(this.g)},mn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var x={};x.__data__=c,c=x}else this.v&&(x={},x.__data__=he(c),c=x);y.i.push(new X_(y.Ya++,c)),y.I==3&&pa(y)},mn.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,mn.Z.N.call(this)};function mf(c){Jt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const x in y){c=x;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}p(mf,Jt);function gf(){tt.call(this),this.status=1}p(gf,tt);function Hi(c){this.g=c}p(Hi,pf),Hi.prototype.ra=function(){U(this.g,"a")},Hi.prototype.qa=function(c){U(this.g,new mf(c))},Hi.prototype.pa=function(c){U(this.g,new gf)},Hi.prototype.oa=function(){U(this.g,"b")},ga.prototype.createWebChannel=ga.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Ky=function(){return new ga},Gy=function(){return Te()},Hy=Ze,ju={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fi.NO_ERROR=0,fi.TIMEOUT=8,fi.HTTP_ERROR=6,Ba=fi,Ns.COMPLETE="complete",Wy=Ns,yt.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",B.prototype.listen=B.prototype.J,Zs=yt,xt.prototype.listenOnce=xt.prototype.K,xt.prototype.getLastError=xt.prototype.Ha,xt.prototype.getLastErrorCode=xt.prototype.ya,xt.prototype.getStatus=xt.prototype.ca,xt.prototype.getResponseJson=xt.prototype.La,xt.prototype.getResponseText=xt.prototype.la,xt.prototype.send=xt.prototype.ea,xt.prototype.setWithCredentials=xt.prototype.Fa,qy=xt}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let xs="12.10.0";function sx(t){xs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Di=new Gl("@firebase/firestore");function Yi(){return Di.logLevel}function Ne(t,...e){if(Di.logLevel<=Je.DEBUG){const n=e.map(qd);Di.debug(`Firestore (${xs}): ${t}`,...n)}}function Cr(t,...e){if(Di.logLevel<=Je.ERROR){const n=e.map(qd);Di.error(`Firestore (${xs}): ${t}`,...n)}}function Mi(t,...e){if(Di.logLevel<=Je.WARN){const n=e.map(qd);Di.warn(`Firestore (${xs}): ${t}`,...n)}}function qd(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qy(t,r,n)}function Qy(t,e,n){let r=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Cr(r),new Error(r)}function lt(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Qy(e,i,r)}function We(t,e){return t}/**
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
 */const Ce={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Me extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ox{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(en.UNAUTHENTICATED))}shutdown(){}}class ax{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lx{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){lt(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string",31837,{l:r}),new Jy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class cx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=en.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ux{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new cx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(en.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class im{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){lt(this.o===void 0,3512);const r=s=>{s.error!=null&&Ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new im(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(lt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new im(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Ye(t,e){return t<e?-1:t>e?1:0}function qu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return tu(i)===tu(s)?Ye(i,s):tu(i)?1:-1}return Ye(t.length,e.length)}const fx=55296,px=57343;function tu(t){const e=t.charCodeAt(0);return e>=fx&&e<=px}function ms(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const sm="__name__";class Wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Ye(e.length,n.length)}static compareSegments(e,n){const r=Wn.isNumericId(e),i=Wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):qu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xr.fromString(e.substring(4,e.length-2))}}class gt extends Wn{construct(e,n,r){return new gt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Me(Ce.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const mx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends Wn{construct(e,n,r){return new Ht(e,n,r)}static isValidIdentifier(e){return mx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sm}static keyField(){return new Ht([sm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Me(Ce.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Me(Ce.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Me(Ce.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Me(Ce.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
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
 */function Yy(t,e,n){if(!n)throw new Me(Ce.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gx(t,e,n,r){if(e===!0&&r===!0)throw new Me(Ce.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function om(t){if(!Ve.isDocumentKey(t))throw new Me(Ce.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function am(t){if(Ve.isDocumentKey(t))throw new Me(Ce.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ue(12329,{type:typeof t})}function Qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Me(Ce.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hd(t);throw new Me(Ce.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ot(t,e){const n={typeString:t};return e&&(n.value=e),n}function Xo(t,e){if(!Xy(t))throw new Me(Ce.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Me(Ce.INVALID_ARGUMENT,n);return!0}/**
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
 */const lm=-62135596800,cm=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*cm);return new vt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Me(Ce.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Me(Ce.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<lm)throw new Me(Ce.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Me(Ce.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cm}_compareTo(e){return this.seconds===e.seconds?Ye(this.nanoseconds,e.nanoseconds):Ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xo(e,vt._jsonSchema))return new vt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Ot("string",vt._jsonSchemaVersion),seconds:Ot("number"),nanoseconds:Ot("number")};/**
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
 */class ze{static fromTimestamp(e){return new ze(e)}static min(){return new ze(new vt(0,0))}static max(){return new ze(new vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Do=-1;function vx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ze.fromTimestamp(r===1e9?new vt(n+1,0):new vt(n,r));return new ri(i,Ve.empty(),e)}function yx(t){return new ri(t.readTime,t.key,Do)}class ri{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ri(ze.min(),Ve.empty(),Do)}static max(){return new ri(ze.max(),Ve.empty(),Do)}}function _x(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ve.comparator(t.documentKey,e.documentKey),n!==0?n:Ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ks(t){if(t.code!==Ce.FAILED_PRECONDITION||t.message!==bx)throw t;Ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class we{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new we((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof we?n:we.resolve(n)}catch(n){return we.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):we.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):we.reject(n)}static resolve(e){return new we((n,r)=>{n(e)})}static reject(e){return new we((n,r)=>{r(e)})}static waitFor(e){return new we((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=we.resolve(!1);for(const r of e)n=n.next(i=>i?we.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new we((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new we((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ex(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yl.ce=-1;/**
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
 */const Gd=-1;function Xl(t){return t==null}function dl(t){return t===0&&1/t==-1/0}function Ix(t){return typeof t=="number"&&Number.isInteger(t)&&!dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Zy="";function Tx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=um(e)),e=Cx(t.get(n),e);return um(e)}function Cx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Zy:n+="";break;default:n+=s}}return n}function um(t){return t+Zy+""}/**
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
 */function dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function e1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class It{constructor(e,n){this.comparator=e,this.root=n||qt.EMPTY}insert(e,n){return new It(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new It(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qt.RED,this.left=i??qt.EMPTY,this.right=s??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ue(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ue(57766)}get value(){throw Ue(16141)}get color(){throw Ue(16727)}get left(){throw Ue(29726)}get right(){throw Ue(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(e){this.comparator=e,this.data=new It(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hm(this.data.getIterator())}getIteratorFrom(e){return new hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ft(this.comparator);return n.data=e,n}}class hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new yn([])}unionWith(e){let n=new Ft(Ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new t1("Invalid base64 string: "+s):s}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const xx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ii(t){if(lt(!!t,39018),typeof t=="string"){let e=0;const n=xx.exec(t);if(lt(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pt(t.seconds),nanos:Pt(t.nanos)}}function Pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function si(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="server_timestamp",r1="__type__",i1="__previous_value__",s1="__local_write_time__";function Kd(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[r1])==null?void 0:r.stringValue)===n1}function Zl(t){const e=t.mapValue.fields[i1];return Kd(e)?Zl(e):e}function Mo(t){const e=ii(t.mapValue.fields[s1].timestampValue);return new vt(e.seconds,e.nanos)}/**
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
 */class kx{constructor(e,n,r,i,s,o,a,l,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const hl="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||hl}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===hl}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}function Sx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Me(Ce.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="__type__",Ax="__max__",xa={mapValue:{}},a1="__vector__",fl="value";function oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kd(t)?4:Px(t)?9007199254740991:Rx(t)?10:11:Ue(28295,{value:t})}function er(t,e){if(t===e)return!0;const n=oi(t);if(n!==oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mo(t).isEqual(Mo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ii(i.timestampValue),a=ii(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return si(i.bytesValue).isEqual(si(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pt(i.geoPointValue.latitude)===Pt(s.geoPointValue.latitude)&&Pt(i.geoPointValue.longitude)===Pt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pt(i.integerValue)===Pt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pt(i.doubleValue),a=Pt(s.doubleValue);return o===a?dl(o)===dl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dm(o)!==dm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!er(o[l],a[l])))return!1;return!0}(t,e);default:return Ue(52216,{left:t})}}function Vo(t,e){return(t.values||[]).find(n=>er(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=oi(t),r=oi(e);if(n!==r)return Ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ye(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Pt(s.integerValue||s.doubleValue),l=Pt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return fm(t.timestampValue,e.timestampValue);case 4:return fm(Mo(t),Mo(e));case 5:return qu(t.stringValue,e.stringValue);case 6:return function(s,o){const a=si(s),l=si(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=Ye(a[h],l[h]);if(f!==0)return f}return Ye(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ye(Pt(s.latitude),Pt(o.latitude));return a!==0?a:Ye(Pt(s.longitude),Pt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,g,_,u;const a=s.fields||{},l=o.fields||{},h=(m=a[fl])==null?void 0:m.arrayValue,f=(g=l[fl])==null?void 0:g.arrayValue,p=Ye(((_=h==null?void 0:h.values)==null?void 0:_.length)||0,((u=f==null?void 0:f.values)==null?void 0:u.length)||0);return p!==0?p:pm(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===xa.mapValue&&o===xa.mapValue)return 0;if(s===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=qu(l[p],f[p]);if(m!==0)return m;const g=gs(a[l[p]],h[f[p]]);if(g!==0)return g}return Ye(l.length,f.length)}(t.mapValue,e.mapValue);default:throw Ue(23264,{he:n})}}function fm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ye(t,e);const n=ii(t),r=ii(e),i=Ye(n.seconds,r.seconds);return i!==0?i:Ye(n.nanos,r.nanos)}function pm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=gs(n[i],r[i]);if(s)return s}return Ye(n.length,r.length)}function vs(t){return Wu(t)}function Wu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ii(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return si(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Ve.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Wu(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Wu(n.fields[o])}`;return i+"}"}(t.mapValue):Ue(61005,{value:t})}function ja(t){switch(oi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zl(t);return e?16+ja(e):16;case 5:return 2*t.stringValue.length;case 6:return si(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ja(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return di(r.fields,(s,o)=>{i+=s.length+ja(o)}),i}(t.mapValue);default:throw Ue(13486,{value:t})}}function Hu(t){return!!t&&"integerValue"in t}function Qd(t){return!!t&&"arrayValue"in t}function mm(t){return!!t&&"nullValue"in t}function gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function Rx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[o1])==null?void 0:r.stringValue)===a1}function vo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return{...t}}function Px(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ax}/**
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
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=Ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=vo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new fn(vo(this.value))}}function l1(t){const e=[];return di(t.fields,(n,r)=>{const i=new Ht([n]);if(qa(r)){const s=l1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yn(e)}/**
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
 */class nn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nn(e,0,ze.min(),ze.min(),ze.min(),fn.empty(),0)}static newFoundDocument(e,n,r,i){return new nn(e,1,n,ze.min(),r,i,0)}static newNoDocument(e,n){return new nn(e,2,n,ze.min(),ze.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new nn(e,3,n,ze.min(),ze.min(),fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ze.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ze.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pl{constructor(e,n){this.position=e,this.inclusive=n}}function vm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Ve.comparator(Ve.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!er(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function Nx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class c1{}class Vt extends c1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Dx(e,n,r):n==="array-contains"?new Vx(e,r):n==="in"?new $x(e,r):n==="not-in"?new Fx(e,r):n==="array-contains-any"?new Ux(e,r):new Vt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Mx(e,r):new Lx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&oi(this.value)===oi(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends c1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new tr(e,n)}matches(e){return u1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function u1(t){return t.op==="and"}function d1(t){return Ox(t)&&u1(t)}function Ox(t){for(const e of t.filters)if(e instanceof tr)return!1;return!0}function Gu(t){if(t instanceof Vt)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(d1(t))return t.filters.map(e=>Gu(e)).join(",");{const e=t.filters.map(n=>Gu(n)).join(",");return`${t.op}(${e})`}}function h1(t,e){return t instanceof Vt?function(r,i){return i instanceof Vt&&r.op===i.op&&r.field.isEqual(i.field)&&er(r.value,i.value)}(t,e):t instanceof tr?function(r,i){return i instanceof tr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&h1(o,i.filters[a]),!0):!1}(t,e):void Ue(19439)}function f1(t){return t instanceof Vt?function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`}(t):t instanceof tr?function(n){return n.op.toString()+" {"+n.getFilters().map(f1).join(" ,")+"}"}(t):"Filter"}class Dx extends Vt{constructor(e,n,r){super(e,n,r),this.key=Ve.fromName(r.referenceValue)}matches(e){const n=Ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mx extends Vt{constructor(e,n){super(e,"in",n),this.keys=p1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lx extends Vt{constructor(e,n){super(e,"not-in",n),this.keys=p1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function p1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Ve.fromName(r.referenceValue))}class Vx extends Vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qd(n)&&Vo(n.arrayValue,this.value)}}class $x extends Vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class Fx extends Vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vo(this.value.arrayValue,n)}}class Ux extends Vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
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
 */class zx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function _m(t,e=null,n=[],r=[],i=null,s=null,o=null){return new zx(t,e,n,r,i,s,o)}function Jd(t){const e=We(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vs(r)).join(",")),e.Te=n}return e.Te}function Yd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Nx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ym(t.startAt,e.startAt)&&ym(t.endAt,e.endAt)}function Ku(t){return Ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ec{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Bx(t,e,n,r,i,s,o,a){return new ec(t,e,n,r,i,s,o,a)}function Xd(t){return new ec(t)}function bm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jx(t){return Ve.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function qx(t){return t.collectionGroup!==null}function yo(t){const e=We(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ft(Ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ml(s,r))}),n.has(Ht.keyField().canonicalString())||e.Ie.push(new ml(Ht.keyField(),r))}return e.Ie}function Jn(t){const e=We(t);return e.Ee||(e.Ee=Wx(e,yo(t))),e.Ee}function Wx(t,e){if(t.limitType==="F")return _m(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ml(i.field,s)});const n=t.endAt?new pl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pl(t.startAt.position,t.startAt.inclusive):null;return _m(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qu(t,e,n){return new ec(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return Yd(Jn(t),Jn(e))&&t.limitType===e.limitType}function m1(t){return`${Jd(Jn(t))}|lt:${t.limitType}`}function Xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>f1(i)).join(", ")}]`),Xl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vs(i)).join(",")),`Target(${r})`}(Jn(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Ve.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const h=vm(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,yo(r),i)||r.endAt&&!function(o,a,l){const h=vm(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,yo(r),i))}(t,e)}function Hx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g1(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=Gx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Gx(t,e,n){const r=t.field.isKeyField()?Ve.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),h=a.data.field(s);return l!==null&&h!==null?gs(l,h):Ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ue(19790,{direction:t.dir})}}/**
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
 */class Bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return e1(this.inner)}size(){return this.innerSize}}/**
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
 */const Kx=new It(Ve.comparator);function xr(){return Kx}const v1=new It(Ve.comparator);function eo(...t){let e=v1;for(const n of t)e=e.insert(n.key,n);return e}function y1(t){let e=v1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ki(){return _o()}function _1(){return _o()}function _o(){return new Bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Qx=new It(Ve.comparator),Jx=new Ft(Ve.comparator);function Xe(...t){let e=Jx;for(const n of t)e=e.add(n);return e}const Yx=new Ft(Ye);function Xx(){return Yx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dl(e)?"-0":e}}function b1(t){return{integerValue:""+t}}function Zx(t,e){return Ix(e)?b1(e):Zd(t,e)}/**
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
 */class rc{constructor(){this._=void 0}}function ek(t,e,n){return t instanceof gl?function(i,s){const o={fields:{[r1]:{stringValue:n1},[s1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Kd(s)&&(s=Zl(s)),s&&(o.fields[i1]=s),{mapValue:o}}(n,e):t instanceof $o?E1(t,e):t instanceof Fo?I1(t,e):function(i,s){const o=w1(i,s),a=wm(o)+wm(i.Ae);return Hu(o)&&Hu(i.Ae)?b1(a):Zd(i.serializer,a)}(t,e)}function tk(t,e,n){return t instanceof $o?E1(t,e):t instanceof Fo?I1(t,e):n}function w1(t,e){return t instanceof vl?function(r){return Hu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class gl extends rc{}class $o extends rc{constructor(e){super(),this.elements=e}}function E1(t,e){const n=T1(e);for(const r of t.elements)n.some(i=>er(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fo extends rc{constructor(e){super(),this.elements=e}}function I1(t,e){let n=T1(e);for(const r of t.elements)n=n.filter(i=>!er(i,r));return{arrayValue:{values:n}}}class vl extends rc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function wm(t){return Pt(t.integerValue||t.doubleValue)}function T1(t){return Qd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $o&&i instanceof $o||r instanceof Fo&&i instanceof Fo?ms(r.elements,i.elements,er):r instanceof vl&&i instanceof vl?er(r.Ae,i.Ae):r instanceof gl&&i instanceof gl}(t.transform,e.transform)}class rk{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ic{}function C1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sc(t.key,wn.none()):new Zo(t.key,t.data,wn.none());{const n=t.data,r=fn.empty();let i=new Ft(Ht.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hi(t.key,r,new yn(i.toArray()),wn.none())}}function ik(t,e,n){t instanceof Zo?function(i,s,o){const a=i.value.clone(),l=Im(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(i,s,o){if(!Wa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Im(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(x1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof Zo?function(s,o,a,l){if(!Wa(s.precondition,o))return a;const h=s.value.clone(),f=Tm(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof hi?function(s,o,a,l){if(!Wa(s.precondition,o))return a;const h=Tm(s.fieldTransforms,l,o),f=o.data;return f.setAll(x1(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Wa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function sk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=w1(r.transform,i||null);s!=null&&(n===null&&(n=fn.empty()),n.set(r.field,s))}return n||null}function Em(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ms(r,i,(s,o)=>nk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends ic{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hi extends ic{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function x1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Im(t,e,n){const r=new Map;lt(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,tk(o,a,n[i]))}return r}function Tm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ek(s,o,e))}return r}class sc extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ok extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ak{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ik(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=C1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ze.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Xe())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>Em(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>Em(n,r))}}class eh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){lt(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Qx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new eh(e,n,r,i)}}/**
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
 */var Nt,et;function uk(t){switch(t){case Ce.OK:return Ue(64938);case Ce.CANCELLED:case Ce.UNKNOWN:case Ce.DEADLINE_EXCEEDED:case Ce.RESOURCE_EXHAUSTED:case Ce.INTERNAL:case Ce.UNAVAILABLE:case Ce.UNAUTHENTICATED:return!1;case Ce.INVALID_ARGUMENT:case Ce.NOT_FOUND:case Ce.ALREADY_EXISTS:case Ce.PERMISSION_DENIED:case Ce.FAILED_PRECONDITION:case Ce.ABORTED:case Ce.OUT_OF_RANGE:case Ce.UNIMPLEMENTED:case Ce.DATA_LOSS:return!0;default:return Ue(15467,{code:t})}}function k1(t){if(t===void 0)return Cr("GRPC error has no .code"),Ce.UNKNOWN;switch(t){case Nt.OK:return Ce.OK;case Nt.CANCELLED:return Ce.CANCELLED;case Nt.UNKNOWN:return Ce.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return Ce.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return Ce.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return Ce.INTERNAL;case Nt.UNAVAILABLE:return Ce.UNAVAILABLE;case Nt.UNAUTHENTICATED:return Ce.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return Ce.INVALID_ARGUMENT;case Nt.NOT_FOUND:return Ce.NOT_FOUND;case Nt.ALREADY_EXISTS:return Ce.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return Ce.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return Ce.FAILED_PRECONDITION;case Nt.ABORTED:return Ce.ABORTED;case Nt.OUT_OF_RANGE:return Ce.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return Ce.UNIMPLEMENTED;case Nt.DATA_LOSS:return Ce.DATA_LOSS;default:return Ue(39323,{code:t})}}(et=Nt||(Nt={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const hk=new Xr([4294967295,4294967295],0);function Cm(t){const e=dk().encode(t),n=new jy;return n.update(e),new Uint8Array(n.digest())}function xm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Xr([n,r],0),new Xr([i,s],0)]}class th{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Xr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Xr.fromNumber(r)));return i.compare(hk)===1&&(i=new Xr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cm(e),[r,i]=xm(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new th(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=Cm(e),[r,i]=xm(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oc(ze.min(),i,new It(Ye),xr(),Xe())}}class ea{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ea(r,n,Xe(),Xe(),Xe())}}/**
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
 */class Ha{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class S1{constructor(e,n){this.targetId=e,this.Ce=n}}class A1{constructor(e,n,r=Qt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class km{constructor(){this.ve=0,this.Fe=Sm(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Xe(),n=Xe(),r=Xe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Ue(38017,{changeType:s})}}),new ea(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Sm()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,lt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fk{constructor(e){this.Ge=e,this.ze=new Map,this.je=xr(),this.He=ka(),this.Je=ka(),this.Ze=new It(Ye)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ku(s))if(r===0){const o=new Ve(s.path);this.et(n,o,nn.newNoDocument(o,ze.min()))}else lt(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=si(r).toUint8Array()}catch(l){if(l instanceof t1)return Mi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new th(o,i,s)}catch(l){return Mi(l instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&Ku(a.target)){const l=new Ve(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,nn.newNoDocument(l,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=Xe();this.Je.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new oc(e,n,this.Ze,this.je,r);return this.je=xr(),this.He=ka(),this.Je=ka(),this.Ze=new It(Ye),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new km,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ft(Ye),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ft(Ye),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Ne("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new km),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ka(){return new It(Ve.comparator)}function Sm(){return new It(Ve.comparator)}const pk={asc:"ASCENDING",desc:"DESCENDING"},mk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gk={and:"AND",or:"OR"};class vk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ju(t,e){return t.useProto3Json||Xl(e)?e:{value:e}}function yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yk(t,e){return yl(t,e.toTimestamp())}function Yn(t){return lt(!!t,49232),ze.fromTimestamp(function(n){const r=ii(n);return new vt(r.seconds,r.nanos)}(t))}function nh(t,e){return Yu(t,e).canonicalString()}function Yu(t,e){const n=function(i){return new gt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function P1(t){const e=gt.fromString(t);return lt(L1(e),10190,{key:e.toString()}),e}function Xu(t,e){return nh(t.databaseId,e.path)}function nu(t,e){const n=P1(e);if(n.get(1)!==t.databaseId.projectId)throw new Me(Ce.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Me(Ce.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ve(O1(n))}function N1(t,e){return nh(t.databaseId,e)}function _k(t){const e=P1(t);return e.length===4?gt.emptyPath():O1(e)}function Zu(t){return new gt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function O1(t){return lt(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Am(t,e,n){return{name:Xu(t,e),fields:n.value.mapValue.fields}}function bk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Ue(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(lt(f===void 0||typeof f=="string",58123),Qt.fromBase64String(f||"")):(lt(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const f=h.code===void 0?Ce.UNKNOWN:k1(h.code);return new Me(f,h.message||"")}(o);n=new A1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nu(t,r.document.name),s=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):ze.min(),a=new fn({mapValue:{fields:r.document.fields}}),l=nn.newFoundDocument(i,s,o,a),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ha(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nu(t,r.document),s=r.readTime?Yn(r.readTime):ze.min(),o=nn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nu(t,r.document),s=r.removedTargetIds||[];n=new Ha([],s,i,null)}else{if(!("filter"in e))return Ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ck(i,s),a=r.targetId;n=new S1(a,o)}}return n}function wk(t,e){let n;if(e instanceof Zo)n={update:Am(t,e.key,e.value)};else if(e instanceof sc)n={delete:Xu(t,e.key)};else if(e instanceof hi)n={update:Am(t,e.key,e.data),updateMask:Rk(e.fieldMask)};else{if(!(e instanceof ok))return Ue(16599,{dt:e.type});n={verify:Xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vl)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ue(27497)}(t,e.precondition)),n}function Ek(t,e){return t&&t.length>0?(lt(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Yn(i.updateTime):Yn(s);return o.isEqual(ze.min())&&(o=Yn(s)),new rk(o,i.transformResults||[])}(n,e))):[]}function Ik(t,e){return{documents:[N1(t,e.path)]}}function Tk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=N1(t,i);const s=function(h){if(h.length!==0)return M1(tr.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Zi(m.field),direction:kk(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ju(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function Ck(t){let e=_k(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){lt(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=D1(p);return m instanceof tr&&d1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(_){return new ml(es(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Xl(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,g=p.values||[];return new pl(g,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,g=p.values||[];return new pl(g,m)}(n.endAt)),Bx(e,i,o,s,a,"F",l,h)}function xk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ue(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function D1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return Vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return Vt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return Vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return Vt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ue(61313);default:return Ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return Vt.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ue(58110);default:return Ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tr.create(n.compositeFilter.filters.map(r=>D1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ue(1026)}}(n.compositeFilter.op))}(t):Ue(30097,{filter:t})}function kk(t){return pk[t]}function Sk(t){return mk[t]}function Ak(t){return gk[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return Ht.fromServerFormat(t.fieldPath)}function M1(t){return t instanceof Vt?function(n){if(n.op==="=="){if(gm(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(mm(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gm(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(mm(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:Sk(n.op),value:n.value}}}(t):t instanceof tr?function(n){const r=n.getFilters().map(i=>M1(i));return r.length===1?r[0]:{compositeFilter:{op:Ak(n.op),filters:r}}}(t):Ue(54877,{filter:t})}function Rk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function L1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function V1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Kr{constructor(e,n,r,i,s=ze.min(),o=ze.min(),a=Qt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Pk{constructor(e){this.yt=e}}function Nk(t){const e=Ck({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qu(e,e.limit,"L"):e}/**
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
 */class Ok{constructor(){this.Sn=new Dk}addToCollectionParentIndex(e,n){return this.Sn.add(n),we.resolve()}getCollectionParents(e,n){return we.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return we.resolve()}deleteFieldIndex(e,n){return we.resolve()}deleteAllFieldIndexes(e){return we.resolve()}createTargetIndexes(e,n){return we.resolve()}getDocumentsMatchingTarget(e,n){return we.resolve(null)}getIndexType(e,n){return we.resolve(0)}getFieldIndexes(e,n){return we.resolve([])}getNextCollectionGroupToUpdate(e){return we.resolve(null)}getMinOffset(e,n){return we.resolve(ri.min())}getMinOffsetFromCollectionGroup(e,n){return we.resolve(ri.min())}updateCollectionGroup(e,n,r){return we.resolve()}updateIndexEntries(e,n){return we.resolve()}}class Dk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ft(gt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ft(gt.comparator)).toArray()}}/**
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
 */const Rm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$1=41943040;class hn{static withCacheSize(e){return new hn(e,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn($1,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
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
 */const Pm="LruGarbageCollector",Mk=1048576;function Nm([t,e],[n,r]){const i=Ye(t,n);return i===0?Ye(e,r):i}class Lk{constructor(e){this.Pr=e,this.buffer=new Ft(Nm),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Nm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Vk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Ne(Pm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ss(n)?Ne(Pm,"Ignoring IndexedDB error during garbage collection: ",n):await ks(n)}await this.Ar(3e5)})}}class $k{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return we.resolve(Yl.ce);const r=new Lk(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Ne("LruGarbageCollector","Garbage collection skipped; disabled"),we.resolve(Rm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rm):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Yi()<=Je.DEBUG&&Ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),we.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function Fk(t,e){return new $k(t,e)}/**
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
 */class Uk{constructor(){this.changes=new Bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?we.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bo(r.mutation,i,yn.empty(),vt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Xe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Xe()){const i=ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=eo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Xe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=xr();const o=_o(),a=function(){return _o()}();return n.forEach((l,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof hi)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),bo(f.mutation,h,f.mutation.getFieldMask(),vt.now())):o.set(h.key,yn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>a.set(h,new zk(f,o.get(h)??null))),a))}recalculateAndSaveOverlays(e,n){const r=_o();let i=new It((o,a)=>o-a),s=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||yn.empty();f=a.applyToLocalView(h,f),r.set(l,f);const p=(i.get(a.batchId)||Xe()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,p=_1();f.forEach(m=>{if(!s.has(m)){const g=C1(n.get(m),r.get(m));g!==null&&p.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return we.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return jx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):we.resolve(ki());let a=Do,l=s;return o.next(h=>we.forEach(h,(f,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(f)?we.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,Xe())).next(f=>({batchId:a,changes:y1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ve(n)).next(r=>{let i=eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=eo();return this.indexManager.getCollectionParents(e,s).next(a=>we.forEach(a,l=>{const h=function(p,m){return new ec(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,nn.newInvalidDocument(f)))});let a=eo();return o.forEach((l,h)=>{const f=s.get(l);f!==void 0&&bo(f.mutation,h,yn.empty(),vt.now()),nc(n,h)&&(a=a.insert(l,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return we.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yn(i.createTime)}}(n)),we.resolve()}getNamedQuery(e,n){return we.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:Nk(i.bundledQuery),readTime:Yn(i.readTime)}}(n)),we.resolve()}}/**
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
 */class qk{constructor(){this.overlays=new It(Ve.comparator),this.Lr=new Map}getOverlay(e,n){return we.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ki();return we.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),we.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),we.resolve()}getOverlaysForCollection(e,n,r){const i=ki(),s=n.length+1,o=new Ve(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return we.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new It((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=ki(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=ki(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>a.set(h,f)),!(a.size()>=i)););return we.resolve(a)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lk(n,r));let s=this.Lr.get(n);s===void 0&&(s=Xe(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class Wk{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return we.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,we.resolve()}}/**
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
 */class rh{constructor(){this.kr=new Ft(Bt.Kr),this.qr=new Ft(Bt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Bt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Bt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Ve(new gt([])),r=new Bt(n,e),i=new Bt(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Ve(new gt([])),r=new Bt(n,e),i=new Bt(n,e+1);let s=Xe();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Bt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Bt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Ve.comparator(e.key,n.key)||Ye(e.Hr,n.Hr)}static Ur(e,n){return Ye(e.Hr,n.Hr)||Ve.comparator(e.key,n.key)}}/**
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
 */class Hk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ft(Bt.Kr)}checkEmpty(e){return we.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ak(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Jr=this.Jr.add(new Bt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return we.resolve(o)}lookupMutationBatch(e,n){return we.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return we.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return we.resolve(this.mutationQueue.length===0?Gd:this.Yn-1)}getAllMutationBatches(e){return we.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Bt(n,0),i=new Bt(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),we.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ft(Ye);return n.forEach(i=>{const s=new Bt(i,0),o=new Bt(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),we.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Ve.isDocumentKey(s)||(s=s.child(""));const o=new Bt(new Ve(s),0);let a=new Ft(Ye);return this.Jr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(l.Hr)),!0)},o),we.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){lt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return we.forEach(n.mutations,i=>{const s=new Bt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Bt(n,0),i=this.Jr.firstAfterOrEqual(r);return we.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,we.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Gk{constructor(e){this.ti=e,this.docs=function(){return new It(Ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return we.resolve(r?r.document.mutableCopy():nn.newInvalidDocument(n))}getEntries(e,n){let r=xr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nn.newInvalidDocument(i))}),we.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xr();const o=n.path,a=new Ve(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||_x(yx(f),r)<=0||(i.has(f.key)||nc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return we.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Ue(9500)}ni(e,n){return we.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kk(this)}getSize(e){return we.resolve(this.size)}}class Kk extends Uk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),we.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class Qk{constructor(e){this.persistence=e,this.ri=new Bi(n=>Jd(n),Yd),this.lastRemoteSnapshotVersion=ze.min(),this.highestTargetId=0,this.ii=0,this.si=new rh,this.targetCount=0,this.oi=ys._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),we.resolve()}getLastRemoteSnapshotVersion(e){return we.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return we.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),we.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),we.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,we.resolve()}updateTargetData(e,n){return this.lr(n),we.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,we.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),we.waitFor(s).next(()=>i)}getTargetCount(e){return we.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return we.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),we.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),we.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),we.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return we.resolve(r)}containsKey(e,n){return we.resolve(this.si.containsKey(n))}}/**
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
 */class F1{constructor(e,n){this._i={},this.overlays={},this.ai=new Yl(0),this.ui=!1,this.ui=!0,this.ci=new Wk,this.referenceDelegate=e(this),this.li=new Qk(this),this.indexManager=new Ok,this.remoteDocumentCache=function(i){return new Gk(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Pk(n),this.Pi=new jk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Hk(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){Ne("MemoryPersistence","Starting transaction:",e);const i=new Jk(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return we.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Jk extends wx{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.Ri=new rh,this.Ai=null}static Vi(e){return new ih(e)}get di(){if(this.Ai)return this.Ai;throw Ue(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),we.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),we.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),we.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return we.forEach(this.di,r=>{const i=Ve.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ze.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return we.or([()=>we.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class _l{constructor(e,n){this.persistence=e,this.fi=new Bi(r=>Tx(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Fk(this,n)}static Vi(e,n){return new _l(e,n)}Ti(){}Ii(e){return we.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return we.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?we.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,ze.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),we.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),we.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),we.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),we.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ja(e.data.value)),n}wr(e,n,r){return we.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return we.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class sh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=Xe(),i=Xe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sh(e,n.fromCache,r,i)}}/**
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
 */class Xk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return wE()?8:Ex(on())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Yk;return this.ys(e,n,o).next(a=>{if(s.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Yi()<=Je.DEBUG&&Ne("QueryEngine","SDK will not create cache indexes for query:",Xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),we.resolve()):(Yi()<=Je.DEBUG&&Ne("QueryEngine","Query:",Xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Yi()<=Je.DEBUG&&Ne("QueryEngine","The SDK decides to create cache indexes for query:",Xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(n))):we.resolve())}gs(e,n){if(bm(n))return we.resolve(null);let r=Jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qu(n,null,"F"),r=Jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Xe(...s);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.bs(n,a);return this.Ss(n,h,o,l.readTime)?this.gs(e,Qu(n,null,"F")):this.Ds(e,h,n,l)}))})))}ps(e,n,r,i){return bm(n)||i.isEqual(ze.min())?we.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?we.resolve(null):(Yi()<=Je.DEBUG&&Ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xi(n)),this.Ds(e,o,n,vx(i,Do)).next(a=>a))})}bs(e,n){let r=new Ft(g1(e));return n.forEach((i,s)=>{nc(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Yi()<=Je.DEBUG&&Ne("QueryEngine","Using full collection scan to execute query:",Xi(n)),this.fs.getDocumentsMatchingQuery(e,n,ri.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="LocalStore",Zk=3e8;class eS{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new It(Ye),this.Fs=new Bi(s=>Jd(s),Yd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function tS(t,e,n,r){return new eS(t,e,n,r)}async function U1(t,e){const n=We(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Xe();for(const h of i){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:a}))})})}function nS(t,e){const n=We(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,h,f){const p=h.batch,m=p.keys();let g=we.resolve();return m.forEach(_=>{g=g.next(()=>f.getEntry(l,_)).next(u=>{const E=h.docVersions.get(_);lt(E!==null,48541),u.version.compareTo(E)<0&&(p.applyToRemoteDocument(u,h),u.isValidDocument()&&(u.setReadTime(h.commitVersion),f.addEntry(u)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Xe();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function z1(t){const e=We(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function rS(t,e){const n=We(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const a=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;a.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?g=g.withResumeToken(Qt.EMPTY_BYTE_STRING,ze.min()).withLastLimboFreeSnapshotVersion(ze.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),i=i.insert(p,g),function(u,E,T){return u.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=Zk?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,g,f)&&a.push(n.li.updateTargetData(s,g))});let l=xr(),h=Xe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(iS(s,o,e.documentUpdates).next(f=>{l=f.Bs,h=f.Ls})),!r.isEqual(ze.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return we.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(n.vs=i,s))}function iS(t,e,n){let r=Xe(),i=Xe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xr();return n.forEach((a,l)=>{const h=s.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ze.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Ne(oh,"Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)}),{Bs:o,Ls:i}})}function sS(t,e){const n=We(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oS(t,e){const n=We(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,we.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function ed(t,e,n){const r=We(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ss(o))throw o;Ne(oh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Om(t,e,n){const r=We(t);let i=ze.min(),s=Xe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=We(l),m=p.Fs.get(f);return m!==void 0?we.resolve(p.vs.get(m)):p.li.getTargetData(h,f)}(r,o,Jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ze.min(),n?s:Xe())).next(a=>(aS(r,Hx(e),a),{documents:a,ks:s})))}function aS(t,e,n){let r=t.Ms.get(e)||ze.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Dm{constructor(){this.activeTargetIds=Xx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lS{constructor(){this.vo=new Dm,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const Mm="ConnectivityMonitor";class Lm{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Ne(Mm,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Ne(Mm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sa=null;function td(){return Sa===null?Sa=function(){return 268435456+Math.round(2147483648*Math.random())}():Sa++,"0x"+Sa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="RestConnection",uS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class dS{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===hl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=td(),a=this.Qo(e,n.toUriEncodedString());Ne(ru,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:h}=new URL(a),f=Es(h);return this.zo(e,a,l,r,f).then(p=>(Ne(ru,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Mi(ru,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=uS[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */const Yt="WebChannelConnection",Qs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ls extends dS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ls.c_){const e=Gy();Qs(e,Hy.STAT_EVENT,n=>{n.stat===ju.PROXY?Ne(Yt,"STAT_EVENT: detected buffering proxy"):n.stat===ju.NOPROXY&&Ne(Yt,"STAT_EVENT: detected no buffering proxy")}),ls.c_=!0}}zo(e,n,r,i,s){const o=td();return new Promise((a,l)=>{const h=new qy;h.setWithCredentials(!0),h.listenOnce(Wy.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ba.NO_ERROR:const p=h.getResponseJson();Ne(Yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Ba.TIMEOUT:Ne(Yt,`RPC '${e}' ${o} timed out`),l(new Me(Ce.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const m=h.getStatus();if(Ne(Yt,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let g=h.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const u=function(T){const S=T.toLowerCase().replace(/_/g,"-");return Object.values(Ce).indexOf(S)>=0?S:Ce.UNKNOWN}(_.status);l(new Me(u,_.message))}else l(new Me(Ce.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Me(Ce.UNAVAILABLE,"Connection failed."));break;default:Ue(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Ne(Yt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);Ne(Yt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=td(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const h=s.join("");Ne(Yt,`Creating RPC '${e}' stream ${i}: ${h}`,a);const f=o.createWebChannel(h,a);this.I_(f);let p=!1,m=!1;const g=new hS({Ho:_=>{m?Ne(Yt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(p||(Ne(Yt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),Ne(Yt,`RPC '${e}' stream ${i} sending:`,_),f.send(_))},Jo:()=>f.close()});return Qs(f,Zs.EventType.OPEN,()=>{m||(Ne(Yt,`RPC '${e}' stream ${i} transport opened.`),g.i_())}),Qs(f,Zs.EventType.CLOSE,()=>{m||(m=!0,Ne(Yt,`RPC '${e}' stream ${i} transport closed`),g.o_(),this.E_(f))}),Qs(f,Zs.EventType.ERROR,_=>{m||(m=!0,Mi(Yt,`RPC '${e}' stream ${i} transport errored. Name:`,_.name,"Message:",_.message),g.o_(new Me(Ce.UNAVAILABLE,"The operation could not be completed")))}),Qs(f,Zs.EventType.MESSAGE,_=>{var u;if(!m){const E=_.data[0];lt(!!E,16349);const T=E,S=(T==null?void 0:T.error)||((u=T[0])==null?void 0:u.error);if(S){Ne(Yt,`RPC '${e}' stream ${i} received error:`,S);const M=S.status;let L=function(P){const A=Nt[P];if(A!==void 0)return k1(A)}(M),V=S.message;M==="NOT_FOUND"&&V.includes("database")&&V.includes("does not exist")&&V.includes(this.databaseId.database)&&Mi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=Ce.INTERNAL,V="Unknown error status: "+M+" with message "+S.message),m=!0,g.o_(new Me(L,V)),f.close()}else Ne(Yt,`RPC '${e}' stream ${i} received:`,E),g.__(E)}}),ls.u_(),setTimeout(()=>{g.s_()},0),g}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ky()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){return new ls(t)}function iu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t){return new vk(t,!0)}/**
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
 */ls.c_=!1;class B1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Vm="PersistentStream";class j1{constructor(e,n,r,i,s,o,a,l){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new B1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Ce.RESOURCE_EXHAUSTED?(Cr(n.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Ce.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new Me(Ce.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Ne(Vm,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(Ne(Vm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pS extends j1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=bk(this.serializer,e),r=function(s){if(!("targetChange"in s))return ze.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ze.min():o.readTime?Yn(o.readTime):ze.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Zu(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ku(l)?{documents:Ik(s,l)}:{query:Tk(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=R1(s,o.resumeToken);const h=Ju(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(ze.min())>0){a.readTime=yl(s,o.snapshotVersion.toTimestamp());const h=Ju(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=xk(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Zu(this.serializer),n.removeTarget=e,this.K_(n)}}class mS extends j1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return lt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){lt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Ek(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Zu(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wk(this.serializer,r))};this.K_(n)}}/**
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
 */class gS{}class vS extends gS{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Me(Ce.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Yu(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ce.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Me(Ce.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Yu(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Ce.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Me(Ce.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function yS(t,e,n,r){return new vS(t,e,n,r)}class _S{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cr(n),this.aa=!1):Ne("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Li="RemoteStore";class bS{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ji(this)&&(Ne(Li,"Restarting streams for network reachability change."),await async function(l){const h=We(l);h.Ea.add(4),await ta(h),h.Va.set("Unknown"),h.Ea.delete(4),await lc(h)}(this))})}),this.Va=new _S(r,i)}}async function lc(t){if(ji(t))for(const e of t.Ra)await e(!0)}async function ta(t){for(const e of t.Ra)await e(!1)}function q1(t,e){const n=We(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),uh(n)?ch(n):As(n).O_()&&lh(n,e))}function ah(t,e){const n=We(t),r=As(n);n.Ia.delete(e),r.O_()&&W1(n,e),n.Ia.size===0&&(r.O_()?r.L_():ji(n)&&n.Va.set("Unknown"))}function lh(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ze.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).Z_(e)}function W1(t,e){t.da.$e(e),As(t).X_(e)}function ch(t){t.da=new fk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),As(t).start(),t.Va.ua()}function uh(t){return ji(t)&&!As(t).x_()&&t.Ia.size>0}function ji(t){return We(t).Ea.size===0}function H1(t){t.da=void 0}async function wS(t){t.Va.set("Online")}async function ES(t){t.Ia.forEach((e,n)=>{lh(t,e)})}async function IS(t,e){H1(t),uh(t)?(t.Va.ha(e),ch(t)):t.Va.set("Unknown")}async function TS(t,e,n){if(t.Va.set("Online"),e instanceof A1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.da.removeTarget(a))}(t,e)}catch(r){Ne(Li,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof Ha?t.da.Xe(e):e instanceof S1?t.da.st(e):t.da.tt(e),!n.isEqual(ze.min()))try{const r=await z1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.da.Tt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=s.Ia.get(l);if(!f)return;s.Ia.set(l,f.withResumeToken(Qt.EMPTY_BYTE_STRING,f.snapshotVersion)),W1(s,l);const p=new Kr(f.target,l,h,f.sequenceNumber);lh(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Ne(Li,"Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!Ss(e))throw e;t.Ea.add(1),await ta(t),t.Va.set("Offline"),n||(n=()=>z1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Ne(Li,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await lc(t)})}function G1(t,e){return e().catch(n=>bl(t,n,e))}async function cc(t){const e=We(t),n=ai(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gd;for(;CS(e);)try{const i=await sS(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,xS(e,i)}catch(i){await bl(e,i)}K1(e)&&Q1(e)}function CS(t){return ji(t)&&t.Ta.length<10}function xS(t,e){t.Ta.push(e);const n=ai(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function K1(t){return ji(t)&&!ai(t).x_()&&t.Ta.length>0}function Q1(t){ai(t).start()}async function kS(t){ai(t).ra()}async function SS(t){const e=ai(t);for(const n of t.Ta)e.ea(n.mutations)}async function AS(t,e,n){const r=t.Ta.shift(),i=eh.from(r,e,n);await G1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cc(t)}async function RS(t,e){e&&ai(t).Y_&&await async function(r,i){if(function(o){return uk(o)&&o!==Ce.ABORTED}(i.code)){const s=r.Ta.shift();ai(r).B_(),await G1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cc(r)}}(t,e),K1(t)&&Q1(t)}async function $m(t,e){const n=We(t);n.asyncQueue.verifyOperationInProgress(),Ne(Li,"RemoteStore received new credentials");const r=ji(n);n.Ea.add(3),await ta(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await lc(n)}async function PS(t,e){const n=We(t);e?(n.Ea.delete(2),await lc(n)):e||(n.Ea.add(2),await ta(n),n.Va.set("Unknown"))}function As(t){return t.ma||(t.ma=function(n,r,i){const s=We(n);return s.sa(),new pS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:wS.bind(null,t),Yo:ES.bind(null,t),t_:IS.bind(null,t),J_:TS.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),uh(t)?ch(t):t.Va.set("Unknown")):(await t.ma.stop(),H1(t))})),t.ma}function ai(t){return t.fa||(t.fa=function(n,r,i){const s=We(n);return s.sa(),new mS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kS.bind(null,t),t_:RS.bind(null,t),ta:SS.bind(null,t),na:AS.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await cc(t)):(await t.fa.stop(),t.Ta.length>0&&(Ne(Li,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class dh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new dh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Me(Ce.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hh(t,e){if(Cr("AsyncQueue",`${e}: ${t}`),Ss(t))return new Me(Ce.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Ve.comparator(n.key,r.key):(n,r)=>Ve.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new It(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Fm{constructor(){this.ga=new It(Ve.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ue(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class _s{constructor(e,n,r,i,s,o,a,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _s(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class NS{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class OS{constructor(){this.queries=Um(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=We(n),s=i.queries;i.queries=Um(),s.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new Me(Ce.ABORTED,"Firestore shutting down"))}}function Um(){return new Bi(t=>m1(t),tc)}async function J1(t,e){const n=We(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new NS,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=hh(o,`Initialization of query '${Xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&fh(n)}async function Y1(t,e){const n=We(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DS(t,e){const n=We(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ba)a.Fa(i)&&(r=!0);o.wa=i}}r&&fh(n)}function MS(t,e,n){const r=We(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function fh(t){t.Ca.forEach(e=>{e.next()})}var nd,zm;(zm=nd||(nd={})).Ma="default",zm.Cache="cache";class X1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==nd.Cache}}/**
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
 */class Z1{constructor(e){this.key=e}}class e_{constructor(e){this.key=e}}class LS{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Xe(),this.mutatedKeys=Xe(),this.eu=g1(e),this.tu=new cs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Fm,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),g=nc(this.query,p)?p:null,_=!!m&&this.mutatedKeys.has(m.key),u=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;m&&g?m.data.isEqual(g.data)?_!==u&&(r.track({type:3,doc:g}),E=!0):this.su(m,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.eu(g,l)>0||h&&this.eu(g,h)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),E=!0):m&&!g&&(r.track({type:1,doc:m}),E=!0,(l||h)&&(a=!0)),E&&(g?(o=o.add(g),s=u?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:a,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(g,_){const u=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ue(20277,{Vt:E})}};return u(g)-u(_)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const a=n&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new _s(this.query,e.tu,s,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fm,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Xe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new e_(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Z1(r))}),n}cu(e){this.Za=e.ks,this.Ya=Xe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return _s.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ph="SyncEngine";class VS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $S{constructor(e){this.key=e,this.hu=!1}}class FS{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Bi(a=>m1(a),tc),this.Iu=new Map,this.Eu=new Set,this.Ru=new It(Ve.comparator),this.Au=new Map,this.Vu=new rh,this.du={},this.mu=new Map,this.fu=ys.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function US(t,e,n=!0){const r=o_(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await t_(r,e,n,!0),i}async function zS(t,e){const n=o_(t);await t_(n,e,!0,!1)}async function t_(t,e,n,r){const i=await oS(t.localStore,Jn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await BS(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&q1(t.remoteStore,i),a}async function BS(t,e,n,r,i){t.pu=(p,m,g)=>async function(u,E,T,S){let M=E.view.ru(T);M.Ss&&(M=await Om(u.localStore,E.query,!1).then(({documents:P})=>E.view.ru(P,M)));const L=S&&S.targetChanges.get(E.targetId),V=S&&S.targetMismatches.get(E.targetId)!=null,Q=E.view.applyChanges(M,u.isPrimaryClient,L,V);return jm(u,E.targetId,Q.au),Q.snapshot}(t,p,m,g);const s=await Om(t.localStore,e,!0),o=new LS(e,s.ks),a=o.ru(s.documents),l=ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(a,t.isPrimaryClient,l);jm(t,n,h.au);const f=new VS(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function jS(t,e,n){const r=We(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!tc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ed(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ah(r.remoteStore,i.targetId),rd(r,i.targetId)}).catch(ks)):(rd(r,i.targetId),await ed(r.localStore,i.targetId,!0))}async function qS(t,e){const n=We(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ah(n.remoteStore,r.targetId))}async function WS(t,e,n){const r=XS(t);try{const i=await function(o,a){const l=We(o),h=vt.now(),f=a.reduce((g,_)=>g.add(_.key),Xe());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=xr(),u=Xe();return l.xs.getEntries(g,f).next(E=>{_=E,_.forEach((T,S)=>{S.isValidDocument()||(u=u.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(E=>{p=E;const T=[];for(const S of a){const M=sk(S,p.get(S.key).overlayedDocument);M!=null&&T.push(new hi(S.key,M,l1(M.value.mapValue),wn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,h,T,a)}).next(E=>{m=E;const T=E.applyToLocalDocumentSet(p,u);return l.documentOverlayCache.saveOverlays(g,E.batchId,T)})}).then(()=>({batchId:m.batchId,changes:y1(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let h=o.du[o.currentUser.toKey()];h||(h=new It(Ye)),h=h.insert(a,l),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await na(r,i.changes),await cc(r.remoteStore)}catch(i){const s=hh(i,"Failed to persist write");n.reject(s)}}async function n_(t,e){const n=We(t);try{const r=await rS(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(lt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?lt(o.hu,14607):i.removedDocuments.size>0&&(lt(o.hu,42227),o.hu=!1))}),await na(n,r,e)}catch(r){await ks(r)}}function Bm(t,e,n){const r=We(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=We(o);l.onlineState=a;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.ba)m.va(a)&&(h=!0)}),h&&fh(l)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HS(t,e,n){const r=We(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new It(Ve.comparator);o=o.insert(s,nn.newNoDocument(s,ze.min()));const a=Xe().add(s),l=new oc(ze.min(),new Map,new It(Ye),o,a);await n_(r,l),r.Ru=r.Ru.remove(s),r.Au.delete(e),mh(r)}else await ed(r.localStore,e,!1).then(()=>rd(r,e,n)).catch(ks)}async function GS(t,e){const n=We(t),r=e.batch.batchId;try{const i=await nS(n.localStore,e);i_(n,r,null),r_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await na(n,i)}catch(i){await ks(i)}}async function KS(t,e,n){const r=We(t);try{const i=await function(o,a){const l=We(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,a).next(p=>(lt(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);i_(r,e,n),r_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await na(r,i)}catch(i){await ks(i)}}function r_(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function i_(t,e,n){const r=We(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||s_(t,r)})}function s_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(ah(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),mh(t))}function jm(t,e,n){for(const r of n)r instanceof Z1?(t.Vu.addReference(r.key,e),QS(t,r)):r instanceof e_?(Ne(ph,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||s_(t,r.key)):Ue(19791,{wu:r})}function QS(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(Ne(ph,"New document in limbo: "+n),t.Eu.add(r),mh(t))}function mh(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Ve(gt.fromString(e)),r=t.fu.next();t.Au.set(r,new $S(n)),t.Ru=t.Ru.insert(n,r),q1(t.remoteStore,new Kr(Jn(Xd(n.path)),r,"TargetPurposeLimboResolution",Yl.ce))}}async function na(t,e,n){const r=We(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=sh.Es(l.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(l,h){const f=We(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>we.forEach(h,m=>we.forEach(m.Ts,g=>f.persistence.referenceDelegate.addReference(p,m.targetId,g)).next(()=>we.forEach(m.Is,g=>f.persistence.referenceDelegate.removeReference(p,m.targetId,g)))))}catch(p){if(!Ss(p))throw p;Ne(oh,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const g=f.vs.get(m),_=g.snapshotVersion,u=g.withLastLimboFreeSnapshotVersion(_);f.vs=f.vs.insert(m,u)}}}(r.localStore,s))}async function JS(t,e){const n=We(t);if(!n.currentUser.isEqual(e)){Ne(ph,"User change. New user:",e.toKey());const r=await U1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new Me(Ce.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await na(n,r.Ns)}}function YS(t,e){const n=We(t),r=n.Au.get(e);if(r&&r.hu)return Xe().add(r.key);{let i=Xe();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const a=n.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function o_(t){const e=We(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=n_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HS.bind(null,e),e.Pu.J_=DS.bind(null,e.eventManager),e.Pu.yu=MS.bind(null,e.eventManager),e}function XS(t){const e=We(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KS.bind(null,e),e}class wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ac(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return tS(this.persistence,new Xk,e.initialUser,this.serializer)}Cu(e){return new F1(ih.Vi,this.serializer)}Du(e){return new lS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wl.provider={build:()=>new wl};class ZS extends wl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){lt(this.persistence.referenceDelegate instanceof _l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Vk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new F1(r=>_l.Vi(r,n),this.serializer)}}class id{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JS.bind(null,this.syncEngine),await PS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OS}()}createDatastore(e){const n=ac(e.databaseInfo.databaseId),r=fS(e.databaseInfo);return yS(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new bS(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Bm(this.syncEngine,n,0),function(){return Lm.v()?new Lm:new cS}())}createSyncEngine(e,n){return function(i,s,o,a,l,h,f){const p=new FS(i,s,o,a,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=We(i);Ne(Li,"RemoteStore shutting down."),s.Ea.add(5),await ta(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}id.provider={build:()=>new id};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const li="FirestoreClient";class eA{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=en.UNAUTHENTICATED,this.clientId=Wd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Ne(li,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Ne(li,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function su(t,e){t.asyncQueue.verifyOperationInProgress(),Ne(li,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await U1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tA(t);Ne(li,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$m(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$m(e.remoteStore,i)),t._onlineComponents=e}async function tA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ne(li,"Using user provided OfflineComponentProvider");try{await su(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===Ce.FAILED_PRECONDITION||i.code===Ce.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Mi("Error using user provided cache. Falling back to memory cache: "+n),await su(t,new wl)}}else Ne(li,"Using default OfflineComponentProvider"),await su(t,new ZS(void 0));return t._offlineComponents}async function l_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ne(li,"Using user provided OnlineComponentProvider"),await qm(t,t._uninitializedComponentsProvider._online)):(Ne(li,"Using default OnlineComponentProvider"),await qm(t,new id))),t._onlineComponents}function nA(t){return l_(t).then(e=>e.syncEngine)}async function sd(t){const e=await l_(t),n=e.eventManager;return n.onListen=US.bind(null,e.syncEngine),n.onUnlisten=jS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qS.bind(null,e.syncEngine),n}function rA(t,e,n,r){const i=new a_(r),s=new X1(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>J1(await sd(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Y1(await sd(t),s))}}function iA(t,e,n={}){const r=new Zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,h){const f=new a_({next:m=>{f.Nu(),o.enqueueAndForget(()=>Y1(s,p)),m.fromCache&&l.source==="server"?h.reject(new Me(Ce.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new X1(a,f,{includeMetadataChanges:!0,Ka:!0});return J1(s,p)}(await sd(t),t.asyncQueue,e,n,r)),r.promise}function sA(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget(async()=>WS(await nA(t),e,n)),n.promise}/**
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
 */const oA="ComponentProvider",Wm=new Map;function aA(t,e,n,r,i){return new kx(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,c_(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="firestore.googleapis.com",Hm=!0;class Gm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Me(Ce.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=u_,this.ssl=Hm}else this.host=e.host,this.ssl=e.ssl??Hm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Mk)throw new Me(Ce.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c_(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Me(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Me(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Me(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Me(Ce.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Me(Ce.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ox;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Me(Ce.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wm.get(n);r&&(Ne(oA,"Removing Datastore"),Wm.delete(n),r.terminate())}(this),Promise.resolve()}}function lA(t,e,n,r={}){var h;t=Qn(t,uc);const i=Es(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&(ty(`https://${a}`),ny("Firestore",!0)),s.host!==u_&&s.host!==a&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!ni(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=en.MOCK_USER;else{f=fE(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Me(Ce.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new en(m)}t._authCredentials=new ax(new Jy(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ra(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}toJSON(){return{type:$t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Xo(n,$t._jsonSchema))return new $t(e,r||null,new Ve(gt.fromString(n.referencePath)))}}$t._jsonSchemaVersion="firestore/documentReference/1.0",$t._jsonSchema={type:Ot("string",$t._jsonSchemaVersion),referencePath:Ot("string")};class ei extends ra{constructor(e,n,r){super(e,n,Xd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new Ve(e))}withConverter(e){return new ei(this.firestore,e,this._path)}}function cA(t,e,...n){if(t=Et(t),Yy("collection","path",e),t instanceof uc){const r=gt.fromString(e,...n);return am(r),new ei(t,null,r)}{if(!(t instanceof $t||t instanceof ei))throw new Me(Ce.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(gt.fromString(e,...n));return am(r),new ei(t.firestore,null,r)}}function dc(t,e,...n){if(t=Et(t),arguments.length===1&&(e=Wd.newId()),Yy("doc","path",e),t instanceof uc){const r=gt.fromString(e,...n);return om(r),new $t(t,null,new Ve(r))}{if(!(t instanceof $t||t instanceof ei))throw new Me(Ce.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(gt.fromString(e,...n));return om(r),new $t(t.firestore,t instanceof ei?t.converter:null,new Ve(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="AsyncQueue";class Qm{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new B1(this,"async_queue_retry"),this._c=()=>{const r=iu();r&&Ne(Km,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=iu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=iu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ss(e))throw e;Ne(Km,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Cr("INTERNAL UNHANDLED ERROR: ",Jm(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=dh.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Ue(47125,{Pc:Jm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Jm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Vi extends uc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qm(e),this._firestoreClient=void 0,await e}}}function uA(t,e){const n=typeof t=="object"?t:Od(),r=typeof t=="string"?t:hl,i=zi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dE("firestore");s&&lA(i,...s)}return i}function hc(t){if(t._terminated)throw new Me(Ce.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dA(t),t._firestoreClient}function dA(t){var r,i,s,o;const e=t._freezeSettings(),n=aA(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new eA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Qt.fromBase64String(e))}catch(n){throw new Me(Ce.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cn(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xo(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:Ot("string",Cn._jsonSchemaVersion),bytes:Ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Me(Ce.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this._methodName=e}}/**
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
 */class Xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Me(Ce.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Me(Ce.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ye(this._lat,e._lat)||Ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(Xo(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:Ot("string",Xn._jsonSchemaVersion),latitude:Ot("number"),longitude:Ot("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xo(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new Me(Ce.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:Ot("string",On._jsonSchemaVersion),vectorValues:Ot("object")};/**
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
 */const hA=/^__.*__$/;class fA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zo(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function h_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ue(40011,{dataSource:t})}}class yh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new yh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return El(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(h_(this.dataSource)&&hA.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class pA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ac(e)}createContext(e,n,r,i=!1){return new yh({dataSource:e,methodName:n,targetDoc:r,path:Ht.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function f_(t){const e=t._freezeSettings(),n=ac(t._databaseId);return new pA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function p_(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);_h("Data must be an object, but it was:",o,r);const a=m_(r,o);let l,h;if(s.merge)l=new yn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Uo(e,p,n);if(!o.contains(m))throw new Me(Ce.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);y_(f,m)||f.push(m)}l=new yn(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new fA(new fn(a),l,h)}class fc extends vh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fc}}function mA(t,e,n,r){const i=t.createContext(1,e,n);_h("Data must be an object, but it was:",i,r);const s=[],o=fn.empty();di(r,(l,h)=>{const f=v_(e,l,n);h=Et(h);const p=i.childContextForFieldPath(f);if(h instanceof fc)s.push(f);else{const m=pc(h,p);m!=null&&(s.push(f),o.set(f,m))}});const a=new yn(s);return new d_(o,a,i.fieldTransforms)}function gA(t,e,n,r,i,s){const o=t.createContext(1,e,n),a=[Uo(e,r,n)],l=[i];if(s.length%2!=0)throw new Me(Ce.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Uo(e,s[m])),l.push(s[m+1]);const h=[],f=fn.empty();for(let m=a.length-1;m>=0;--m)if(!y_(h,a[m])){const g=a[m];let _=l[m];_=Et(_);const u=o.childContextForFieldPath(g);if(_ instanceof fc)h.push(g);else{const E=pc(_,u);E!=null&&(h.push(g),f.set(g,E))}}const p=new yn(h);return new d_(f,p,o.fieldTransforms)}function pc(t,e){if(g_(t=Et(t)))return _h("Unsupported field value:",e,t),m_(t,e);if(t instanceof vh)return function(r,i){if(!h_(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=pc(a,i.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=vt.fromDate(r);return{timestampValue:yl(i.serializer,s)}}if(r instanceof vt){const s=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yl(i.serializer,s)}}if(r instanceof Xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cn)return{bytesValue:R1(i.serializer,r._byteString)};if(r instanceof $t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nh(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof On)return function(o,a){const l=o instanceof On?o.toArray():o;return{mapValue:{fields:{[o1]:{stringValue:a1},[fl]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw a.createError("VectorValues must only contain numeric values.");return Zd(a.serializer,f)})}}}}}}(r,i);if(V1(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Hd(r)}`)}(t,e)}function m_(t,e){const n={};return e1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=pc(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function g_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof Xn||t instanceof Cn||t instanceof $t||t instanceof vh||t instanceof On||V1(t))}function _h(t,e,n){if(!g_(n)||!Xy(n)){const r=Hd(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Uo(t,e,n){if((e=Et(e))instanceof gh)return e._internalPath;if(typeof e=="string")return v_(t,e);throw El("Field path arguments must be of type string or ",t,!1,void 0,n)}const vA=new RegExp("[~\\*/\\[\\]]");function v_(t,e,n){if(e.search(vA)>=0)throw El(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gh(...e.split("."))._internalPath}catch{throw El(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function El(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Me(Ce.INVALID_ARGUMENT,a+t+l)}function y_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{convertValue(e,n="none"){switch(oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[fl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Pt(o.doubleValue));return new On(n)}convertGeoPoint(e){return new Xn(Pt(e.latitude),Pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mo(e));default:return null}}convertTimestamp(e){const n=ii(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=gt.fromString(e);lt(L1(r),9688,{name:e});const i=new Lo(r.get(1),r.get(3)),s=new Ve(r.popFirst(5));return i.isEqual(n)||Cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class bh extends yA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}const Ym="@firebase/firestore",Xm="4.12.0";/**
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
 */class __{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _A(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Uo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _A extends __{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Me(Ce.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function w_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class no{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pi extends __{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Me(Ce.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Pi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Pi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pi._jsonSchema={type:Ot("string",Pi._jsonSchemaVersion),bundleSource:Ot("string","DocumentSnapshot"),bundleName:Ot("string"),bundle:Ot("string")};class Ga extends Pi{data(e={}){return super.data(e)}}class Ni{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new no(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new no(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Me(Ce.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new no(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new no(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:bA(a.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Me(Ce.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ue(61501,{type:t})}}/**
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
 */Ni._jsonSchemaVersion="firestore/querySnapshot/1.0",Ni._jsonSchema={type:Ot("string",Ni._jsonSchemaVersion),bundleSource:Ot("string","QuerySnapshot"),bundleName:Ot("string"),bundle:Ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=f_(e)}set(e,n,r){this._verifyNotCommitted();const i=ou(e,this._firestore),s=w_(i.converter,n,r),o=p_(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,wn.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ou(e,this._firestore);let o;return o=typeof(n=Et(n))=="string"||n instanceof gh?gA(this._dataReader,"WriteBatch.update",s._key,n,r,i):mA(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,wn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ou(e,this._firestore);return this._mutations=this._mutations.concat(new sc(n._key,wn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Me(Ce.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ou(t,e){if((t=Et(t)).firestore!==e)throw new Me(Ce.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function EA(t){t=Qn(t,ra);const e=Qn(t.firestore,Vi),n=hc(e),r=new bh(e);return b_(t._query),iA(n,t._query).then(i=>new Ni(e,r,t,i))}function E_(t,e,n){t=Qn(t,$t);const r=Qn(t.firestore,Vi),i=w_(t.converter,e,n),s=f_(r);return wh(r,[p_(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wn.none())])}function IA(t){return wh(Qn(t.firestore,Vi),[new sc(t._key,wn.none())])}function TA(t,...e){var h,f,p;t=Et(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Zm(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Zm(e[r])){const m=e[r];e[r]=(h=m.next)==null?void 0:h.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,a;if(t instanceof $t)o=Qn(t.firestore,Vi),a=Xd(t._key.path),s={next:m=>{e[r]&&e[r](CA(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Qn(t,ra);o=Qn(m.firestore,Vi),a=m._query;const g=new bh(o);s={next:_=>{e[r]&&e[r](new Ni(o,g,m,_))},error:e[r+1],complete:e[r+2]},b_(t._query)}const l=hc(o);return rA(l,a,i,s)}function wh(t,e){const n=hc(t);return sA(n,e)}function CA(t,e,n){const r=n.docs.get(e._key),i=new bh(t);return new Pi(t,i,e._key,r,new no(n.hasPendingWrites,n.fromCache),e.converter)}function xA(t){return t=Qn(t,Vi),hc(t),new wA(t,e=>wh(t,e))}(function(e,n=!0){sx(Is),Zn(new $n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Vi(new lx(r.getProvider("auth-internal")),new dx(o,r.getProvider("app-check-internal")),Sx(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xn(Ym,Xm,e),xn(Ym,Xm,"esm2020")})();const I_="@firebase/installations",Eh="0.6.20";/**
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
 */const T_=1e4,C_=`w:${Eh}`,x_="FIS_v2",kA="https://firebaseinstallations.googleapis.com/v1",SA=60*60*1e3,AA="installations",RA="Installations";/**
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
 */const PA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$i=new Ui(AA,RA,PA);function k_(t){return t instanceof Fn&&t.code.includes("request-failed")}/**
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
 */function S_({projectId:t}){return`${kA}/projects/${t}/installations`}function A_(t){return{token:t.token,requestStatus:2,expiresIn:OA(t.expiresIn),creationTime:Date.now()}}async function R_(t,e){const r=(await e.json()).error;return $i.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function P_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function NA(t,{refreshToken:e}){const n=P_(t);return n.append("Authorization",DA(e)),n}async function N_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OA(t){return Number(t.replace("s","000"))}function DA(t){return`${x_} ${t}`}/**
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
 */async function MA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=S_(t),i=P_(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:x_,appId:t.appId,sdkVersion:C_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await N_(()=>fetch(r,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:A_(h.authToken)}}else throw await R_("Create Installation",l)}/**
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
 */const VA=/^[cdef][\w-]{21}$/,od="";function $A(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=FA(t);return VA.test(n)?n:od}catch{return od}}function FA(t){return LA(t).substr(0,22)}/**
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
 */function mc(t){return`${t.appName}!${t.appId}`}/**
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
 */const D_=new Map;function M_(t,e){const n=mc(t);L_(n,e),UA(n,e)}function L_(t,e){const n=D_.get(t);if(n)for(const r of n)r(e)}function UA(t,e){const n=zA();n&&n.postMessage({key:t,fid:e}),BA()}let Si=null;function zA(){return!Si&&"BroadcastChannel"in self&&(Si=new BroadcastChannel("[Firebase] FID Change"),Si.onmessage=t=>{L_(t.data.key,t.data.fid)}),Si}function BA(){D_.size===0&&Si&&(Si.close(),Si=null)}/**
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
 */const jA="firebase-installations-database",qA=1,Fi="firebase-installations-store";let au=null;function Ih(){return au||(au=oy(jA,qA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}})),au}async function Il(t,e){const n=mc(t),i=(await Ih()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&M_(t,e.fid),e}async function V_(t){const e=mc(t),r=(await Ih()).transaction(Fi,"readwrite");await r.objectStore(Fi).delete(e),await r.done}async function gc(t,e){const n=mc(t),i=(await Ih()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&M_(t,a.fid),a}/**
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
 */async function Th(t){let e;const n=await gc(t.appConfig,r=>{const i=WA(r),s=HA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===od?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WA(t){const e=t||{fid:$A(),registrationStatus:0};return $_(e)}function HA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($i.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KA(t)}:{installationEntry:e}}async function GA(t,e){try{const n=await MA(t,e);return Il(t.appConfig,n)}catch(n){throw k_(n)&&n.customData.serverCode===409?await V_(t.appConfig):await Il(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KA(t){let e=await eg(t.appConfig);for(;e.registrationStatus===1;)await O_(100),e=await eg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Th(t);return r||n}return e}function eg(t){return gc(t,e=>{if(!e)throw $i.create("installation-not-found");return $_(e)})}function $_(t){return QA(t)?{fid:t.fid,registrationStatus:0}:t}function QA(t){return t.registrationStatus===1&&t.registrationTime+T_<Date.now()}/**
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
 */async function JA({appConfig:t,heartbeatServiceProvider:e},n){const r=YA(t,n),i=NA(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:C_,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await N_(()=>fetch(r,a));if(l.ok){const h=await l.json();return A_(h)}else throw await R_("Generate Auth Token",l)}function YA(t,{fid:e}){return`${S_(t)}/${e}/authTokens:generate`}/**
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
 */async function Ch(t,e=!1){let n;const r=await gc(t.appConfig,s=>{if(!F_(s))throw $i.create("not-registered");const o=s.authToken;if(!e&&eR(o))return s;if(o.requestStatus===1)return n=XA(t,e),s;{if(!navigator.onLine)throw $i.create("app-offline");const a=nR(s);return n=ZA(t,a),a}});return n?await n:r.authToken}async function XA(t,e){let n=await tg(t.appConfig);for(;n.authToken.requestStatus===1;)await O_(100),n=await tg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ch(t,e):r}function tg(t){return gc(t,e=>{if(!F_(e))throw $i.create("not-registered");const n=e.authToken;return rR(n)?{...e,authToken:{requestStatus:0}}:e})}async function ZA(t,e){try{const n=await JA(t,e),r={...e,authToken:n};return await Il(t.appConfig,r),n}catch(n){if(k_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await V_(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Il(t.appConfig,r)}throw n}}function F_(t){return t!==void 0&&t.registrationStatus===2}function eR(t){return t.requestStatus===2&&!tR(t)}function tR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+SA}function nR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function rR(t){return t.requestStatus===1&&t.requestTime+T_<Date.now()}/**
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
 */async function iR(t){const e=t,{installationEntry:n,registrationPromise:r}=await Th(e);return r?r.catch(console.error):Ch(e).catch(console.error),n.fid}/**
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
 */async function sR(t,e=!1){const n=t;return await oR(n),(await Ch(n,e)).token}async function oR(t){const{registrationPromise:e}=await Th(t);e&&await e}/**
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
 */function aR(t){if(!t||!t.options)throw lu("App Configuration");if(!t.name)throw lu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw lu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function lu(t){return $i.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="installations",lR="installations-internal",cR=t=>{const e=t.getProvider("app").getImmediate(),n=aR(e),r=zi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uR=t=>{const e=t.getProvider("app").getImmediate(),n=zi(e,U_).getImmediate();return{getId:()=>iR(n),getToken:i=>sR(n,i)}};function dR(){Zn(new $n(U_,cR,"PUBLIC")),Zn(new $n(lR,uR,"PRIVATE"))}dR();xn(I_,Eh);xn(I_,Eh,"esm2020");/**
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
 */const Tl="analytics",hR="firebase_id",fR="origin",pR=60*1e3,mR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xh="https://www.googletagmanager.com/gtag/js";/**
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
 */const dn=new Gl("@firebase/analytics");/**
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
 */const gR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},En=new Ui("analytics","Analytics",gR);/**
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
 */function vR(t){if(!t.startsWith(xh)){const e=En.create("invalid-gtag-resource",{gtagURL:t});return dn.warn(e.message),""}return t}function z_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yR(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _R(t,e){const n=yR("firebase-js-sdk-policy",{createScriptURL:vR}),r=document.createElement("script"),i=`${xh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function bR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function wR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await z_(n)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(a){dn.error(a)}t("config",i,s)}async function ER(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await z_(n);for(const l of o){const h=a.find(p=>p.measurementId===l),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){dn.error(s)}}function IR(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await ER(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await wR(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,h]=o;t("get",a,l,h)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){dn.error(a)}}return i}function TR(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=IR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function CR(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(xh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=30,kR=1e3;class SR{constructor(e={},n=kR){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const B_=new SR;function AR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function RR(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:AR(n)},i=mR.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw En.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function PR(t,e=B_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw En.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw En.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new DR;return setTimeout(async()=>{a.abort()},pR),j_({appId:r,apiKey:i,measurementId:s},o,a,e)}async function j_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=B_){var a;const{appId:s,measurementId:o}=t;try{await NR(r,e)}catch(l){if(o)return dn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await RR(t);return i.deleteThrottleMetadata(s),l}catch(l){const h=l;if(!OR(h)){if(i.deleteThrottleMetadata(s),o)return dn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:o};throw l}const f=Number((a=h==null?void 0:h.customData)==null?void 0:a.httpStatus)===503?kp(n,i.intervalMillis,xR):kp(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),dn.debug(`Calling attemptFetch again in ${f} millis`),j_(t,p,r,i)}}function NR(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(En.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OR(t){if(!(t instanceof Fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class DR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function MR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function LR(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(){if(Rd())try{await Pd()}catch(t){return dn.warn(En.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return dn.warn(En.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $R(t,e,n,r,i,s,o){const a=PR(t);a.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&dn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>dn.error(m)),e.push(a);const l=VR().then(m=>{if(m)return r.getId()}),[h,f]=await Promise.all([a,l]);CR(s)||_R(s,h.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[fR]="firebase",p.update=!0,f!=null&&(p[hR]=f),i("config",h.measurementId,p),h.measurementId}/**
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
 */class FR{constructor(e){this.app=e}_delete(){return delete us[this.app.options.appId],Promise.resolve()}}let us={},ng=[];const rg={};let cu="dataLayer",UR="gtag",ig,kh,sg=!1;function zR(){const t=[];if(Ad()&&t.push("This is a browser extension environment."),ry()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=En.create("invalid-analytics-context",{errorInfo:e});dn.warn(n.message)}}function BR(t,e,n){zR();const r=t.options.appId;if(!r)throw En.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)dn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw En.create("no-api-key");if(us[r]!=null)throw En.create("already-exists",{id:r});if(!sg){bR(cu);const{wrappedGtag:s,gtagCore:o}=TR(us,ng,rg,cu,UR);kh=s,ig=o,sg=!0}return us[r]=$R(t,ng,rg,e,ig,cu,n),new FR(t)}function jR(t=Od()){t=Et(t);const e=zi(t,Tl);return e.isInitialized()?e.getImmediate():qR(t)}function qR(t,e={}){const n=zi(t,Tl);if(n.isInitialized()){const i=n.getImmediate();if(ni(e,n.getOptions()))return i;throw En.create("already-initialized")}return n.initialize({options:e})}async function WR(){if(Ad()||!ry()||!Rd())return!1;try{return await Pd()}catch{return!1}}function HR(t,e,n){t=Et(t),LR(kh,us[t.app.options.appId],e,n).catch(r=>dn.error(r))}function GR(t,e,n,r){t=Et(t),MR(kh,us[t.app.options.appId],e,n,r).catch(i=>dn.error(i))}const og="@firebase/analytics",ag="0.10.20";function KR(){Zn(new $n(Tl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return BR(r,i,n)},"PUBLIC")),Zn(new $n("analytics-internal",t,"PRIVATE")),xn(og,ag),xn(og,ag,"esm2020");function t(e){try{const n=e.getProvider(Tl).getImmediate();return{logEvent:(r,i,s)=>GR(n,r,i,s),setUserProperties:(r,i)=>HR(n,r,i)}}catch(n){throw En.create("interop-component-reg-failed",{reason:n})}}}KR();const QR={apiKey:"AIzaSyBcbduc3YI8apT4rqL-gCha2v0NFMO__ds",authDomain:"powerpoint-ai-authoring-tool.firebaseapp.com",projectId:"powerpoint-ai-authoring-tool",storageBucket:"powerpoint-ai-authoring-tool.firebasestorage.app",messagingSenderId:"262485353950",appId:"1:262485353950:web:e894909bd1a8c1c2f8a94f",measurementId:"G-F7VD36R6PQ"},Sh=ay(QR);WR().then(t=>{t&&jR(Sh)});const ar=rx(Sh),JR=new hr,YR=new go("microsoft.com"),Ah=uA(Sh),Rs=Bl("auth",()=>{const t=ve(null),e=ve(!1);async function n(f){if(f)try{const p=dc(Ah,"users",f.uid);await E_(p,{email:f.email,displayName:f.displayName||"Unknown User",photoURL:f.photoURL||"",lastActive:new Date().toISOString()},{merge:!0})}catch(p){console.error("Failed to track user activity in Firestore",p)}}HT(ar,f=>{t.value=f,e.value=!0,f&&n(f)});async function r(){try{const f=await Qp(ar,JR);return t.value=f.user,f.user}catch(f){throw console.error("Google Sign-In Error:",f),f}}async function i(){try{const f=await Qp(ar,YR);return t.value=f.user,f.user}catch(f){throw console.error("Microsoft Sign-In Error:",f),f}}async function s(f,p){try{const m=await jT(ar,f,p);return t.value=m.user,m.user}catch(m){throw console.error("Email Sign-In Error:",m),m}}async function o(f,p){try{const m=await BT(ar,f,p);return t.value=m.user,await Hp(m.user),m.user}catch(m){throw console.error("Email Sign-Up Error:",m),m}}async function a(){t.value&&await Hp(t.value)}async function l(){ar.currentUser&&(await ar.currentUser.reload(),t.value=ar.currentUser)}async function h(){try{await GT(ar),t.value=null}catch(f){console.error("Sign-Out Error:",f)}}return{user:t,isAuthReady:e,loginWithGoogle:r,loginWithMicrosoft:i,loginWithEmail:s,signUpWithEmail:o,resendVerification:a,reloadUser:l,logout:h}}),jt=[];for(let t=0;t<256;++t)jt.push((t+256).toString(16).slice(1));function XR(t,e=0){return(jt[t[e+0]]+jt[t[e+1]]+jt[t[e+2]]+jt[t[e+3]]+"-"+jt[t[e+4]]+jt[t[e+5]]+"-"+jt[t[e+6]]+jt[t[e+7]]+"-"+jt[t[e+8]]+jt[t[e+9]]+"-"+jt[t[e+10]]+jt[t[e+11]]+jt[t[e+12]]+jt[t[e+13]]+jt[t[e+14]]+jt[t[e+15]]).toLowerCase()}let uu;const ZR=new Uint8Array(16);function e4(){if(!uu){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");uu=crypto.getRandomValues.bind(crypto)}return uu(ZR)}const t4=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),lg={randomUUID:t4};function n4(t,e,n){var i;t=t||{};const r=t.random??((i=t.rng)==null?void 0:i.call(t))??e4();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,XR(r)}function An(t,e,n){return lg.randomUUID&&!t?lg.randomUUID():n4(t)}const vc="elearn_projects",Rh=`${vc}_anonymous`;function Ph(){return{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif",fontSize:16,headingFont:"Inter, sans-serif"}}function Cl(t=0){return{id:An(),title:`Slide ${t+1}`,background:"#ffffff",backgroundType:"color",backgroundGradient:"",backgroundImage:"",elements:[],notes:"",order:t,transition:"none",duration:0}}function du(t="Untitled Project"){const e=Cl(0);return{id:An(),name:t,description:"",thumbnail:"",slides:[e],theme:Ph(),createdAt:Date.now(),updatedAt:Date.now(),version:"1.0",authorName:"",tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0}}}function r4(t,e={}){const n=q_(t);return{id:An(),type:t,x:e.x??100,y:e.y??100,width:e.width??n.width,height:e.height??n.height,rotation:e.rotation??0,zIndex:e.zIndex??1,locked:!1,visible:!0,opacity:e.opacity??1,content:{...n.content||{},...e.content||{}},styles:{...n.styles||{}},interactions:e.interactions||[],animations:e.animations||[]}}function i4(t,e=0){return{id:An(),title:t.title||`Slide ${e+1}`,background:t.background||"#ffffff",backgroundType:t.backgroundType||"color",backgroundGradient:t.backgroundGradient||"",backgroundImage:t.backgroundImage||"",elements:(t.elements||[]).map((n,r)=>r4(n.type,{...n,zIndex:n.zIndex??r+1})),notes:t.notes||"",order:e,transition:t.transition||"none",duration:t.duration||0}}function s4(t,e){return{microcourse:{description:"Interactive lesson template",theme:{primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#f8f8ff",textColor:"#1a1a2e"},slides:[{title:"Course Intro",background:"#f8f8ff",elements:[{type:"heading",x:80,y:72,width:800,height:84,content:{text:e||"Microcourse: AI in Education",textAlign:"left"}},{type:"text",x:80,y:170,width:760,height:90,content:{text:"Learning objective: understand practical AI use-cases for classrooms and workplace training."}},{type:"button",x:80,y:292,width:180,height:50,content:{label:"Start Lesson",action:"navigate",target:"2"}},{type:"shape",x:700,y:320,width:190,height:130,content:{shapeType:"rectangle",fillColor:"#00c9a7",borderRadius:18}}]},{title:"Knowledge Check",background:"#ffffff",elements:[{type:"heading",x:80,y:44,width:600,height:70,content:{text:"Quick Check",textAlign:"left",fontSize:40}},{type:"quiz",x:80,y:130,width:760,height:330,content:{question:"Which AI feature best supports personalized learning?",options:["Automated attendance only","Adaptive feedback based on learner progress","Static PDF handouts","Manual grading spreadsheets"],correctIndex:1,explanation:"Adaptive feedback tailors support based on learner responses and performance."}}]}]},chromatic:{description:"Modern presentation starter",theme:{primaryColor:"#7c3aed",secondaryColor:"#ec4899",bgColor:"#ffffff",textColor:"#1f1638"},slides:[{title:"Title Slide",backgroundType:"gradient",backgroundGradient:"linear-gradient(135deg, #faf5ff 0%, #fff1f2 100%)",elements:[{type:"heading",x:90,y:130,width:780,height:88,content:{text:e||"Chromatic Presentation",textAlign:"center",fontSize:52}},{type:"text",x:180,y:232,width:600,height:70,content:{text:"A colorful template to introduce your topic with style.",textAlign:"center"}},{type:"button",x:390,y:328,width:180,height:48,content:{label:"Continue",action:"navigate",target:"2",variant:"primary",bgColor:"#7c3aed"}}]}]},branching:{description:"Branching scenario template",theme:{primaryColor:"#2563eb",secondaryColor:"#14b8a6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Decision Point",background:"#f8fafc",elements:[{type:"heading",x:80,y:60,width:740,height:74,content:{text:"Branching Scenario",textAlign:"left"}},{type:"text",x:80,y:150,width:800,height:80,content:{text:"A customer asks for a full refund after the deadline. What do you do first?"}},{type:"button",x:80,y:270,width:290,height:54,content:{label:"Option A: Escalate to manager",action:"navigate",target:"2"}},{type:"button",x:390,y:270,width:290,height:54,content:{label:"Option B: Offer partial credit",action:"navigate",target:"3"}},{type:"hotspot",x:770,y:420,width:66,height:66,content:{icon:"i",popupTitle:"Facilitator Tip",popupContent:"Ask learners why they chose each option before revealing outcomes."}}]}]},flipcards:{description:"Interactive card challenge starter",theme:{primaryColor:"#0891b2",secondaryColor:"#f59e0b",bgColor:"#f0f9ff",textColor:"#0f172a"},slides:[{title:"Flipcards Activity",background:"#f0f9ff",elements:[{type:"heading",x:80,y:58,width:800,height:74,content:{text:"Flipcards Museum",textAlign:"left"}},{type:"text",x:80,y:138,width:780,height:64,content:{text:"Prompt learners to reveal each card and discuss what they discover."}},{type:"shape",x:120,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:380,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}},{type:"shape",x:640,y:235,width:200,height:150,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#0891b2",borderWidth:2,borderRadius:14}}]}]},"higher-ed":{description:"Higher education lecture starter",theme:{primaryColor:"#1d4ed8",secondaryColor:"#16a34a",bgColor:"#ffffff",textColor:"#0f172a"},slides:[{title:"Lecture Overview",background:"#ffffff",elements:[{type:"heading",x:80,y:70,width:790,height:80,content:{text:e||"Higher Education",textAlign:"left"}},{type:"text",x:80,y:170,width:780,height:124,content:{text:"Use this deck to define outcomes, introduce key concepts, and include formative checks."}},{type:"button",x:80,y:328,width:190,height:48,content:{label:"Add Agenda",action:"none"}}]}]},complete:{description:"Sentence completion quiz starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#22c55e",bgColor:"#f8f7ff",textColor:"#1a1a2e"},slides:[{title:"Complete the Sentence",background:"#f8f7ff",elements:[{type:"heading",x:80,y:55,width:700,height:76,content:{text:"Complete the sentence",textAlign:"left"}},{type:"quiz",x:80,y:140,width:760,height:330,content:{question:"AI literacy in workplaces improves when teams ______.",options:["Avoid practical tasks","Use AI tools with clear guardrails and practice","Rely only on theory","Stop measuring outcomes"],correctIndex:1,explanation:"Practice with clear policies helps teams use AI safely and effectively."}}]}]},"fill-blanks":{description:"Quiz assessment starter",theme:{primaryColor:"#6c47ff",secondaryColor:"#06b6d4",bgColor:"#ffffff",textColor:"#111827"},slides:[{title:"Quiz Assessment",background:"#ffffff",elements:[{type:"heading",x:80,y:48,width:760,height:76,content:{text:"Fill in the blanks",textAlign:"left"}},{type:"text",x:80,y:126,width:760,height:64,content:{text:"Replace with your own question set and publish in minutes."}},{type:"quiz",x:80,y:196,width:760,height:280,content:{question:"The most important part of a good assessment is ______.",options:["Clear learning objective","Random difficulty","Longer text only","Colorful background"],correctIndex:0,explanation:"Assessments should align clearly with learning objectives."}}]}]},timeline:{description:"Timeline infographic starter",theme:{primaryColor:"#0ea5e9",secondaryColor:"#8b5cf6",bgColor:"#f8fafc",textColor:"#0f172a"},slides:[{title:"Data Timeline",background:"#f8fafc",elements:[{type:"heading",x:80,y:40,width:760,height:74,content:{text:"Data Viz Timeline",textAlign:"left"}},{type:"shape",x:100,y:255,width:760,height:8,content:{shapeType:"rectangle",fillColor:"#0ea5e9",borderRadius:8}},{type:"shape",x:170,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:430,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"shape",x:690,y:235,width:46,height:46,content:{shapeType:"circle",fillColor:"#8b5cf6"}},{type:"text",x:120,y:290,width:150,height:70,content:{text:`Phase 1
Discovery`,textAlign:"center"}},{type:"text",x:380,y:290,width:150,height:70,content:{text:`Phase 2
Build`,textAlign:"center"}},{type:"text",x:640,y:290,width:150,height:70,content:{text:`Phase 3
Launch`,textAlign:"center"}}]}]}}[t]||{description:"Starter template",theme:Ph(),slides:[{title:e||"New Slide",background:"#ffffff",elements:[]}]}}function xl(t=null){const e=t?`${vc}_${t}`:Rh;try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function cg(t,e=null){const n=e?`${vc}_${e}`:Rh;try{localStorage.setItem(n,JSON.stringify(t))}catch{}}function ug(t=null){const e=t?`${vc}_${t}`:Rh;try{localStorage.removeItem(e)}catch{}}function yc(t){return cA(Ah,"users",t,"projects")}function Nh(t){return{...t,description:t.description||"",thumbnail:t.thumbnail||"",slides:Array.isArray(t.slides)?t.slides:[Cl(0)],theme:{...Ph(),...t.theme||{}},createdAt:Number(t.createdAt)||Date.now(),updatedAt:Number(t.updatedAt)||Date.now(),version:t.version||"1.0",authorName:t.authorName||"",tags:Array.isArray(t.tags)?t.tags:[],settings:{slideWidth:960,slideHeight:540,autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,...t.settings||{}}}}async function o4(t,e){!t||!(e!=null&&e.id)||await E_(dc(yc(t),e.id),Nh(e))}async function a4(t,e){!t||!e||await IA(dc(yc(t),e))}async function l4(t){if(!t)return;const e=[...xl(),...xl(t)];if(!e.length)return;const n=yc(t),r=await EA(n),i=new Set(r.docs.map(a=>a.id)),s=xA(Ah);let o=!1;e.forEach(a=>{i.has(a.id)||(s.set(dc(n,a.id),Nh(a)),i.add(a.id),o=!0)}),o&&await s.commit(),ug(),ug(t)}const pn=Bl("projects",()=>{const t=Rs(),e=ve([]),n=ve("");let r=null;Kt(()=>{var R;return(R=t.user)==null?void 0:R.uid},async R=>{if(n.value="",r&&(r(),r=null),!R){e.value=xl();return}e.value=[];try{await l4(R)}catch(O){console.error("Failed to migrate browser projects",O),n.value="Some browser-saved projects could not be migrated to your account."}r=TA(yc(R),O=>{e.value=O.docs.map(b=>Nh({id:b.id,...b.data()})),cg(e.value,R)},O=>{console.error("Failed to sync account projects",O),n.value="Unable to sync your projects right now.",e.value=xl(R)})},{immediate:!0,flush:"sync"});const i=Se(()=>[...e.value].sort((R,O)=>O.updatedAt-R.updatedAt));function s(){var R;cg(e.value,((R=t.user)==null?void 0:R.uid)||null)}function o(R){var O;return s(),(O=t.user)!=null&&O.uid?o4(t.user.uid,R).catch(b=>{console.error("Failed to persist project",b),n.value="Unable to save your latest project changes."}):Promise.resolve()}function a(R){var O;return s(),(O=t.user)!=null&&O.uid?a4(t.user.uid,R).catch(b=>{console.error("Failed to delete project",b),n.value="Unable to delete this project from your account."}):Promise.resolve()}function l(R){const O=du(R);return e.value.push(O),o(O),O}function h(R,O,b=""){const I=s4(R,O),w=du(O);return w.description=b||I.description||"",w.theme={...w.theme,...I.theme||{}},w.slides=(I.slides||[]).map((X,oe)=>i4(X,oe)),w.createdAt=Date.now(),w.updatedAt=Date.now(),e.value.push(w),o(w),w}function f(R){const O=e.value.find(I=>I.id===R);if(!O)return null;const b=JSON.parse(JSON.stringify(O));return b.id=An(),b.name=`${b.name} (copy)`,b.createdAt=Date.now(),b.updatedAt=Date.now(),b.slides=b.slides.map(I=>(I.id=An(),I.elements=I.elements.map(w=>({...w,id:An()})),I)),e.value.push(b),o(b),b}function p(R){const O=e.value.findIndex(b=>b.id===R);O!==-1&&(e.value.splice(O,1),a(R))}function m(R){return e.value.find(O=>O.id===R)||null}function g(R,O){const b=e.value.findIndex(I=>I.id===R);b!==-1&&(e.value[b]={...e.value[b],...O,updatedAt:Date.now()},o(e.value[b]))}function _(R,O=-1){const b=m(R);if(!b)return null;const I=O>=0?O+1:b.slides.length,w=Cl(I);return O>=0?b.slides.splice(O+1,0,w):b.slides.push(w),b.slides.forEach((X,oe)=>{X.order=oe}),b.updatedAt=Date.now(),o(b),w}function u(R,O){const b=m(R);if(!b||b.slides.length<=1)return;const I=b.slides.findIndex(w=>w.id===O);I!==-1&&(b.slides.splice(I,1),b.slides.forEach((w,X)=>{w.order=X}),b.updatedAt=Date.now(),o(b))}function E(R,O){const b=m(R);if(!b)return null;const I=b.slides.find(oe=>oe.id===O);if(!I)return null;const w=JSON.parse(JSON.stringify(I));w.id=An(),w.title=`${w.title} (copy)`;const X=b.slides.findIndex(oe=>oe.id===O);return b.slides.splice(X+1,0,w),b.slides.forEach((oe,J)=>{oe.order=J}),b.updatedAt=Date.now(),o(b),w}function T(R,O,b){const I=m(R);if(!I)return;const[w]=I.slides.splice(O,1);I.slides.splice(b,0,w),I.slides.forEach((X,oe)=>{X.order=oe}),I.updatedAt=Date.now(),o(I)}function S(R,O,b){const I=m(R);if(!I)return;const w=I.slides.find(X=>X.id===O);w&&(Object.assign(w,b),I.updatedAt=Date.now(),o(I))}function M(R,O,b,I={}){const w=m(R);if(!w)return null;const X=w.slides.find(re=>re.id===O);if(!X)return null;const oe=X.elements.reduce((re,_e)=>Math.max(re,_e.zIndex||0),0),J=q_(b),ce={id:An(),type:b,x:100,y:100,width:J.width,height:J.height,rotation:0,zIndex:oe+1,locked:!1,visible:!0,opacity:1,...J,...I,interactions:[],animations:[]};return X.elements.push(ce),w.updatedAt=Date.now(),o(w),ce}function L(R,O,b,I){const w=m(R);if(!w)return;const X=w.slides.find(J=>J.id===O);if(!X)return;const oe=X.elements.find(J=>J.id===b);oe&&(Object.assign(oe,I),w.updatedAt=Date.now(),o(w))}function V(R,O,b){const I=m(R);if(!I)return;const w=I.slides.find(oe=>oe.id===O);if(!w)return;const X=w.elements.findIndex(oe=>oe.id===b);X!==-1&&(w.elements.splice(X,1),I.updatedAt=Date.now(),o(I))}function Q(R,O,b){const I=m(R);if(!I)return null;const w=I.slides.find(J=>J.id===O);if(!w)return null;const X=w.elements.find(J=>J.id===b);if(!X)return null;const oe=JSON.parse(JSON.stringify(X));return oe.id=An(),oe.x+=20,oe.y+=20,oe.zIndex=X.zIndex+1,w.elements.push(oe),I.updatedAt=Date.now(),o(I),oe}function P(R,O,b,I){const w=m(R);if(!w)return;const X=w.slides.find(re=>re.id===O);if(!X)return;const oe=X.elements.find(re=>re.id===b);if(!oe)return;const J=X.elements.map(re=>re.zIndex).sort((re,_e)=>re-_e),ce=oe.zIndex;if(I==="up"){const re=J.find(_e=>_e>ce);if(re!==void 0){const _e=X.elements.find(ne=>ne.zIndex===re);_e&&(_e.zIndex=ce,oe.zIndex=re)}}else{const re=[...J].reverse().find(_e=>_e<ce);if(re!==void 0){const _e=X.elements.find(ne=>ne.zIndex===re);_e&&(_e.zIndex=ce,oe.zIndex=re)}}w.updatedAt=Date.now(),o(w)}function A(R){const O=m(R);return O?JSON.stringify(O,null,2):null}function C(R){try{const O=JSON.parse(R);return O.id=An(),O.name=`${O.name} (imported)`,O.createdAt=Date.now(),O.updatedAt=Date.now(),e.value.push(O),o(O),O}catch{return null}}return{projects:e,sortedProjects:i,syncError:n,createProject:l,createProjectFromTemplate:h,duplicateProject:f,deleteProject:p,getProject:m,updateProject:g,addSlide:_,deleteSlide:u,duplicateSlide:E,reorderSlides:T,updateSlide:S,addElement:M,updateElement:L,deleteElement:V,duplicateElement:Q,reorderElement:P,exportProject:A,importProject:C,makeBlankSlide:Cl,makeNewProject:du}});function q_(t){const e={text:{width:300,height:80,content:{text:"Click to edit text",fontSize:18,fontFamily:"Inter, sans-serif",fontWeight:"normal",fontStyle:"normal",textDecoration:"none",textAlign:"left",color:"#1a1a2e",lineHeight:1.5,textTransform:"none",letterSpacing:0},styles:{}},heading:{width:500,height:80,content:{text:"Heading",fontSize:36,fontFamily:"Inter, sans-serif",fontWeight:"bold",fontStyle:"normal",textDecoration:"none",textAlign:"center",color:"#1a1a2e",lineHeight:1.2,textTransform:"none",letterSpacing:0},styles:{}},image:{width:300,height:200,content:{src:"",alt:"",objectFit:"cover",borderRadius:0,borderWidth:0,borderColor:"#e2e8f0"},styles:{}},shape:{width:150,height:100,content:{shapeType:"rectangle",fillColor:"#6c47ff",borderColor:"transparent",borderWidth:0,borderRadius:8,opacity:1},styles:{}},button:{width:160,height:48,content:{label:"Click Me",variant:"primary",action:"none",target:"",bgColor:"",textColor:"",borderColor:"",borderRadius:8,fontSize:15,fontWeight:600,fontFamily:"Inter, sans-serif",letterSpacing:0},styles:{}},hotspot:{width:60,height:60,content:{icon:"?",bgColor:"#6c47ff",iconColor:"#ffffff",borderRadius:999,tooltip:"Click to learn more",popupContent:"Add your content here...",popupTitle:"Info",popupBgColor:"#ffffff",popupTextColor:"#1a1a2e"},styles:{}},video:{width:480,height:270,content:{src:"",poster:"",autoplay:!1,controls:!0,loop:!1,muted:!1,objectFit:"cover"},styles:{}},audio:{width:280,height:56,content:{src:"",label:"Audio Player",autoplay:!1,controls:!0,loop:!1,bgColor:"#ede7ff",textColor:"#555555",accentColor:"#6c47ff"},styles:{}},divider:{width:400,height:4,content:{color:"#e2e8f0",thickness:2},styles:{}},quiz:{width:480,height:300,content:{question:"Your question here?",options:["Option A","Option B","Option C","Option D"],correctIndex:0,explanation:"",cardBgColor:"#ffffff",questionColor:"#1a1a2e",accentColor:"#6c47ff"},styles:{}}};return e[t]||e.text}const In=Bl("editor",()=>{const t=ve(null),e=ve(null),n=ve([]),r=ve(null),i=ve("select"),s=ve("rectangle"),o=ve("properties"),a=ve("slides"),l=ve(!1),h=ve(!1),f=ve(!0),p=ve(20),m=ve(!1),g=ve(1),_=ve(!1),u=ve(!1),E=ve(!1),T=ve(null),S=ve(!1),M=ve(!1),L=ve(!0),V=ve(null),Q=ve([]),P=ve(-1),A=20,C=ve(!1),R=ve(!1),O=ve(null),b=ve(0),I=ve(0),w=Se(()=>n.value.length===1?n.value[0]:null),X=Se(()=>n.value.length>0),oe=Se(()=>n.value.length>1);function J(N){t.value=N,n.value=[],Q.value=[],P.value=-1,g.value=1}function ce(N){e.value=N,n.value=[]}function re(N,D=!1){D&&N?n.value.includes(N)?n.value=n.value.filter(B=>B!==N):n.value=[...n.value,N]:n.value=N?[N]:[]}function _e(N){n.value=N}function ne(){n.value=[]}function ee(N){i.value=N,N!=="select"&&(n.value=[])}function de(N){o.value=N}function pe(N){g.value=Math.max(.25,Math.min(3,N))}function $(){pe(g.value+.1)}function le(){pe(g.value-.1)}function G(){pe(1)}function Z(){h.value=!h.value}function ge(){f.value=!f.value}function Ie(){L.value=!L.value}function ke(N){P.value<Q.value.length-1&&Q.value.splice(P.value+1),Q.value.push(JSON.parse(JSON.stringify(N))),Q.value.length>A&&Q.value.shift(),P.value=Q.value.length-1}function z(){return P.value>0}function H(){return P.value<Q.value.length-1}function v(){return z()?(P.value--,JSON.parse(JSON.stringify(Q.value[P.value]))):null}function K(){return H()?(P.value++,JSON.parse(JSON.stringify(Q.value[P.value]))):null}function q(N){V.value=JSON.parse(JSON.stringify(N))}return{projectId:t,currentSlideId:e,selectedElementIds:n,selectedElementId:w,hoveredElementId:r,activeTool:i,activeShape:s,rightPanelTab:o,leftPanelTab:a,isFullscreen:l,showGrid:h,snapToGrid:f,gridSize:p,showRulers:m,zoomLevel:g,isSaving:_,showExportModal:u,showInteractionEditor:E,interactionElementId:T,showThemeManager:S,showAIPanel:M,showSlidePanel:L,clipboard:V,isDragging:C,isResizing:R,resizeHandle:O,panX:b,panY:I,hasSelection:X,multiSelection:oe,setProject:J,setCurrentSlide:ce,selectElement:re,setSelection:_e,clearSelection:ne,setActiveTool:ee,setRightPanel:de,setZoom:pe,zoomIn:$,zoomOut:le,zoomReset:G,toggleGrid:Z,toggleSnap:ge,toggleSlidePanel:Ie,pushHistory:ke,canUndo:z,canRedo:H,undo:v,redo:K,setClipboard:q}}),W_=Bl("ai",()=>{const t=ve(localStorage.getItem("ai_api_key")||""),e=ve(localStorage.getItem("ai_provider")||"openai"),n=ve(!1),r=ve(""),i=ve([]);function s(E){t.value=E,localStorage.setItem("ai_api_key",E)}function o(E){e.value=E,localStorage.setItem("ai_provider",E)}async function a(E,T={}){var S;if(!t.value)return u(E,T);n.value=!0,r.value="";try{const M=[{role:"system",content:`You are an expert eLearning content creator. Generate clear, engaging, and educational content. Format output as clean text unless asked for JSON. Context: ${JSON.stringify(T)}`},{role:"user",content:E}],L=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.value}`},body:JSON.stringify({model:"gpt-4o-mini",messages:M,temperature:.7,max_tokens:1500})});if(!L.ok){const P=await L.json();throw new Error(((S=P.error)==null?void 0:S.message)||`HTTP ${L.status}`)}const Q=(await L.json()).choices[0].message.content;return i.value.push({prompt:E,result:Q,timestamp:Date.now()}),Q}catch(M){return r.value=M.message,null}finally{n.value=!1}}async function l(E,T="general",S="",M=""){let L;if(M.trim())L=M.trim();else{const Q=S.trim()?`
Additional context: ${S.trim()}`:"",P={intro:"Focus on welcoming learners, stating the purpose, and building motivation.",overview:"Provide a high-level map of all topics to be covered.",concept:"Explain the concept clearly with a definition, how it works, and why it matters.",example:"Present a real-world case study or worked example with outcome.",summary:"Recap the key points covered and reinforce the main message.",callout:"Highlight a single critical insight or action item.",general:"Create a well-structured educational slide with title, key points, and a takeaway."}[T]||"";L=`You are an expert eLearning content creator and visual slide designer.
Create content for a "${T}" eLearning slide about: "${E}".${Q}
Instruction: ${P}

Return ONLY a valid JSON object, no markdown:
{
  "title": "Concise, engaging slide title",
  "subtitle": "One-line supporting statement (optional)",
  "bullets": ["Specific point 1 about ${E}", "Specific point 2", "Specific point 3"],
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
- Ensure all content is specific to "${E}" — never use generic placeholders.`}const V=await a(L,{type:"slideContent",slideType:T,topic:E});if(!V)return null;try{return JSON.parse(V.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return{title:E,bullets:[V]}}}async function h(E,T=5,{audience:S="",objective:M="",tone:L="professional",customPrompt:V=""}={}){const Q=Math.max(1,Math.min(20,Number(T)||1));let P;if(V.trim())P=V.trim();else{const C=S.trim()?`
Audience: ${S.trim()}`:"",R=M.trim()?`
Learning objective: ${M.trim()}`:"";P=`You are an expert eLearning instructional designer.
Create a complete ${Q}-slide deck about "${E}" in a ${L} tone.${C}${R}

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
- Return exactly ${Q} slides
- Sequence the deck logically: intro → concept build-up → applied example(s) → summary
- Keep each slide distinct and avoid repeated bullet wording
- Keep bullets concise (3-5 per slide), action-oriented, and specific to "${E}"`}const A=await a(P,{type:"slideDeck",topic:E,slideCount:Q,tone:L});if(!A)return null;try{const C=A.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim(),R=JSON.parse(C),O=Array.isArray(R)?R:R==null?void 0:R.slides;return Array.isArray(O)?O.slice(0,Q).map((b,I)=>{const w=Array.isArray(b==null?void 0:b.bullets)?b.bullets:typeof(b==null?void 0:b.bullets)=="string"?b.bullets.split(`
`):[];return{title:String((b==null?void 0:b.title)||`${E||"Slide"} ${I+1}`).trim(),subtitle:String((b==null?void 0:b.subtitle)||"").trim(),bullets:w.map(X=>String(X||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean),callout:String((b==null?void 0:b.callout)||"").trim(),slideType:String((b==null?void 0:b.slideType)||"general").trim()}}):null}catch{return null}}async function f(E,T=4,{difficulty:S="intermediate",questionType:M="multiple-choice",objective:L="",customPrompt:V=""}={}){if(V.trim()){const O=await a(V.trim(),{type:"quiz",topic:E,count:T,difficulty:S,questionType:M});if(!O)return null;try{return JSON.parse(O.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}const Q=M==="true-false"?'Each question must be True/False with exactly 2 options: ["True", "False"]':M==="mixed"?'Mix multiple-choice (4 options) and True/False (2 options: ["True", "False"]) questions roughly 50/50':"Each question must be multiple-choice with exactly 4 distinct options",P={beginner:"Use simple vocabulary. Focus on foundational recall and recognition.",intermediate:"Require some understanding and application of concepts.",advanced:"Challenge deeper understanding, analysis, and critical thinking."}[S]||"",A=L?`
Learning objective: ${L}`:"",C=`You are an expert eLearning instructional designer.
Create exactly ${T} quiz questions about: "${E}".${A}

Difficulty: ${S.charAt(0).toUpperCase()+S.slice(1)} — ${P}
Question type: ${Q}

Return ONLY a valid JSON array, no markdown, no extra text:
[
  {
    "question": "Clear, unambiguous question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Brief explanation of why the answer is correct",
    "difficulty": "${S}",
    "type": "multiple-choice"
  }
]

Ensure:
- All questions are unique and clearly worded
- Wrong options (distractors) are plausible but clearly incorrect
- Explanations are educational and concise
- correctIndex is 0-based index into the options array`,R=await a(C,{type:"quiz",topic:E,count:T,difficulty:S,questionType:M});if(!R)return null;try{return JSON.parse(R.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim())}catch{return null}}async function p(E,T="professional"){const S=`Write a ${T} voiceover script for a slide with this content: "${E}".
Keep it concise (30-60 seconds when read aloud). Write naturally as if speaking.`;return a(S,{type:"voiceover",style:T})}async function m(E,T){const S=`Translate the following eLearning content to ${T}. Preserve formatting and educational tone:

${E}`;return a(S,{type:"translation",targetLanguage:T})}async function g(E,T="Make it clearer and more engaging"){const S=`${T}:

${E}`;return a(S,{type:"improve"})}async function _(E){const T=`Generate a detailed image prompt for a corporate or educational slide about: "${E}". 
Make it suitable for AI image generation (like Midjourney or DALL-E). Ensure the prompt specifically asks for a "highly detailed photorealistic image, realistic lighting, photographic style, no text". Be specific about composition and relevance.`;return a(T,{type:"imagePrompt",topic:E})}function u(E,T){const S=T.topic||"this topic",M=Math.max(1,Math.min(20,Number(T.slideCount)||5)),L={slideContent:JSON.stringify({title:T.topic||"Sample Slide",subtitle:`An introduction to ${S}`,bullets:[`${T.topic?T.topic+" covers":"This topic covers"} foundational principles that drive real-world applications`,"Understanding the core components helps in diagnosing and solving complex problems effectively","Best practices ensure safety, efficiency, and long-term performance in this domain"],callout:`Master the fundamentals of ${T.topic||"this subject"} to build a strong professional foundation`,design:{layout:"split",titleAlign:"left",bulletStyle:"check",emphasis:"balanced"}}),slideDeck:JSON.stringify({slides:Array.from({length:M},(V,Q)=>{const P=Q===0,A=Q===M-1;return{title:P?`${S}: Introduction`:A?`${S}: Key Takeaways`:`${S}: Core Idea ${Q}`,subtitle:P?`Why ${S} matters`:A?"Summary and next steps":"Building practical understanding",bullets:[`Understand a concrete aspect of ${S}`,"Apply this concept in a practical context","Connect this idea to real-world outcomes"],callout:A?`Use these principles of ${S} to guide decisions and actions.`:"Focus on clarity and practical application.",slideType:P?"intro":A?"summary":"concept"}})}),quiz:JSON.stringify([{question:"Which of the following best describes the core concept of this topic?",options:["It focuses on foundational principles","It applies advanced methodologies","It combines theory with practice","It relies solely on memorization"],correctIndex:2,explanation:"Combining theory with practice is the most effective approach for deep understanding.",difficulty:"intermediate",type:"multiple-choice"},{question:"A learner who understands this topic can apply it to real-world problems.",options:["True","False"],correctIndex:0,explanation:"Understanding foundational concepts enables practical application in real-world scenarios.",difficulty:"intermediate",type:"true-false"},{question:"What is the first step when approaching this subject?",options:["Skip to advanced material","Define key terminology","Practice without understanding","Avoid structured learning"],correctIndex:1,explanation:"Defining key terminology builds the vocabulary needed for deeper comprehension.",difficulty:"beginner",type:"multiple-choice"},{question:"Which strategy leads to the best long-term retention of this material?",options:["Cramming the night before","Spaced repetition and active recall","Reading passively multiple times","Watching videos only"],correctIndex:1,explanation:"Spaced repetition and active recall are scientifically proven to maximize long-term retention.",difficulty:"intermediate",type:"multiple-choice"}]),voiceover:"Welcome to this lesson. In this section, we'll explore the key concepts that will help you understand the topic better. Pay close attention to the main points as we go through them one by one.",translation:`[Translated text for: ${S}]

Las mejores prÃ¡cticas garantizan la seguridad, la eficiencia y el rendimiento a largo plazo en este dominio.`,improve:`Here is a clearer, more engaging version of your text:

Understanding the core components helps you diagnose and solve complex problems much more effectively.`,imagePrompt:`A high-quality, professional, photorealistic image about: "${S}". 8k resolution, highly detailed, realistic lighting, photographic style, suitable for a corporate presentation.`,default:"This is a sample AI-generated response. Configure your OpenAI API key in the AI settings panel to get real responses."};return n.value=!0,new Promise(V=>{setTimeout(()=>{n.value=!1;const Q=T.type||"default";V(L[Q]||L.default)},1500)})}return{apiKey:t,apiProvider:e,isGenerating:n,lastError:r,generationHistory:i,setApiKey:s,setProvider:o,generate:a,generateSlideContent:l,generateSlideDeck:h,generateQuiz:f,generateVoiceoverScript:p,generateTranslation:m,improveText:g,generateImagePrompt:_}});function H_({onRequireAuth:t}={}){const e=Wl(),n=W_(),r=Rs(),i=In(),s=pn(),o=ve(!1),a=ve("quiz"),l=ve(""),h=ve(""),f=ve(""),p=ve(5),m=ve(5),g=ve("intermediate"),_=ve("multiple-choice"),u=ve(""),E=ve(!1),T=Se(()=>{const I=l.value.trim();return I?a.value==="quiz"?`${I} Quiz`:`${I} Slide Deck`:a.value==="quiz"?"AI Quiz Project":"AI Slide Deck"}),S=Se(()=>E.value||n.isGenerating?a.value==="quiz"?"Creating quiz...":"Creating slides...":a.value==="quiz"?"Create quiz project":"Create slide project");function M(I){i.setProject(I),e.push({name:"editor",params:{id:I}})}function L(I="quiz"){a.value=I,l.value="",h.value="",f.value="",p.value=5,m.value=5,g.value="intermediate",_.value="multiple-choice",u.value=""}function V(I,w,X=1,oe=20){const J=Number.parseInt(I,10);return Number.isNaN(J)?w:Math.max(X,Math.min(oe,J))}function Q(I="quiz",w={}){if(L(I),typeof w.topic=="string"&&(l.value=w.topic.trim()),typeof w.context=="string"&&(h.value=w.context.trim()),typeof w.projectName=="string"&&(f.value=w.projectName.trim()),I==="deck"){p.value=V(w.slideCount,p.value,1,10);return}m.value=V(w.questionCount,m.value,1,10),["beginner","intermediate","advanced"].includes(w.difficulty)&&(g.value=w.difficulty),["multiple-choice","true-false","mixed"].includes(w.questionType)&&(_.value=w.questionType)}function P(I="quiz",w={}){return r.user?(Q(I,w),o.value=!0,setTimeout(()=>{var X;return(X=document.getElementById("ai-topic-input"))==null?void 0:X.focus()},50),!0):(t==null||t("signin"),!1)}function A(I=a.value){return I==="quiz"?{primary:"#5b21b6",secondary:"#f59e0b",surface:"#fffaf0",text:"#111827",muted:"#475569",gradient:"linear-gradient(135deg, #faf5ff 0%, #fff7ed 100%)",panel:"#ffffff",accentSoft:"#f3e8ff"}:{primary:"#2563eb",secondary:"#14b8a6",surface:"#f8fbff",text:"#0f172a",muted:"#475569",gradient:"linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%)",panel:"#ffffff",accentSoft:"#dbeafe"}}function C(I){const w=I&&typeof I=="object"?I:{},X=Array.isArray(w.bullets)?w.bullets:typeof w.bullets=="string"?w.bullets.split(`
`):[];return{title:String(w.title||l.value||"Untitled Slide").trim(),subtitle:String(w.subtitle||"").trim(),bullets:X.map(oe=>String(oe||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean),callout:String(w.callout||"").trim(),slideType:String(w.slideType||"general").trim()}}function R(I,w,X,oe=0){const J=C(X),ce=A("deck"),re=oe===0||J.slideType==="intro",_e=J.slideType==="summary",ne=re?"AI lesson opener":_e?"AI summary slide":"AI learning slide",ee=J.subtitle?228:196,de=Math.min(190+J.bullets.length*14,238),pe=re?174:190,$=re?"linear-gradient(135deg, #eff6ff 0%, #e0f2fe 48%, #ecfeff 100%)":_e?"linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%)":ce.gradient;s.updateSlide(I,w,{title:J.title,notes:J.callout||"",order:oe,backgroundType:"gradient",backgroundGradient:$,background:ce.surface}),s.addElement(I,w,"shape",{x:720,y:28,width:180,height:180,content:{shapeType:"circle",fillColor:ce.accentSoft,borderColor:"transparent",borderWidth:0,opacity:.9}}),s.addElement(I,w,"shape",{x:760,y:74,width:94,height:94,content:{shapeType:"circle",fillColor:"#ffffff",borderColor:"transparent",borderWidth:0,opacity:.82}}),s.addElement(I,w,"shape",{x:68,y:40,width:148,height:30,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:ce.accentSoft,borderWidth:1,borderRadius:999}}),s.addElement(I,w,"text",{x:92,y:47,width:112,height:16,content:{text:ne,fontSize:12,fontWeight:600,textAlign:"left",color:ce.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,letterSpacing:.4,textTransform:"uppercase"}}),s.addElement(I,w,"heading",{x:68,y:86,width:610,height:88,content:{text:J.title,fontSize:re?38:34,fontWeight:"bold",textAlign:"left",color:ce.text,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),J.subtitle&&s.addElement(I,w,"text",{x:68,y:172,width:590,height:46,content:{text:J.subtitle,fontSize:19,textAlign:"left",color:ce.muted,fontFamily:"Inter, sans-serif",lineHeight:1.45}}),s.addElement(I,w,"shape",{x:68,y:ee-26,width:574,height:de,content:{shapeType:"rectangle",fillColor:ce.panel,borderColor:"#dbeafe",borderWidth:1,borderRadius:22}}),J.bullets.length&&s.addElement(I,w,"text",{x:96,y:ee,width:520,height:Math.max(de-40,120),content:{text:J.bullets.map(le=>`• ${le}`).join(`
`),fontSize:18,textAlign:"left",color:"#1e293b",fontFamily:"Inter, sans-serif",lineHeight:1.8}}),s.addElement(I,w,"shape",{x:676,y:pe,width:216,height:re?240:222,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:ce.accentSoft,borderWidth:1,borderRadius:26}}),s.addElement(I,w,"text",{x:704,y:pe+26,width:160,height:20,content:{text:_e?"Wrap-up":"Key takeaway",fontSize:12,fontWeight:700,textAlign:"left",color:ce.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,letterSpacing:.5,textTransform:"uppercase"}}),s.addElement(I,w,"text",{x:704,y:pe+62,width:162,height:120,content:{text:J.callout||`Use this slide to anchor discussion around ${l.value||"the topic"}.`,fontSize:18,fontWeight:600,textAlign:"left",color:ce.text,fontFamily:"Inter, sans-serif",lineHeight:1.55}}),s.addElement(I,w,"shape",{x:704,y:pe+176,width:110,height:2,content:{shapeType:"rectangle",fillColor:ce.primary,borderColor:"transparent",borderWidth:0,borderRadius:8}}),s.addElement(I,w,"text",{x:68,y:488,width:280,height:20,content:{text:`Generated from: ${l.value}`,fontSize:12,textAlign:"left",color:"#64748b",fontFamily:"Inter, sans-serif",lineHeight:1.3}})}function O(I,w,X,oe=0,J=1){const ce=A("quiz"),re=String((X==null?void 0:X.question)||`Question ${oe+1}`).trim(),_e=String((X==null?void 0:X.explanation)||"").trim(),ne=(X==null?void 0:X.type)==="true-false"?"True / False":"Multiple choice";s.updateSlide(I,w,{title:`Question ${oe+1}`,notes:_e,order:oe,backgroundType:"gradient",backgroundGradient:ce.gradient,background:ce.surface}),s.addElement(I,w,"shape",{x:70,y:34,width:820,height:472,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#f3e8ff",borderWidth:1,borderRadius:28}}),s.addElement(I,w,"shape",{x:70,y:34,width:820,height:76,content:{shapeType:"rectangle",fillColor:"#faf5ff",borderColor:"transparent",borderWidth:0,borderRadius:28}}),s.addElement(I,w,"shape",{x:92,y:56,width:118,height:26,content:{shapeType:"rectangle",fillColor:"#ffffff",borderColor:"#ddd6fe",borderWidth:1,borderRadius:999}}),s.addElement(I,w,"text",{x:114,y:62,width:90,height:14,content:{text:`${ne}`,fontSize:11,fontWeight:700,textAlign:"left",color:ce.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2,textTransform:"uppercase",letterSpacing:.5}}),s.addElement(I,w,"text",{x:736,y:60,width:116,height:18,content:{text:`${oe+1} / ${J}`,fontSize:16,fontWeight:700,textAlign:"right",color:ce.primary,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),s.addElement(I,w,"heading",{x:92,y:124,width:708,height:56,content:{text:re,fontSize:29,fontWeight:"bold",textAlign:"left",color:ce.text,fontFamily:"Inter, sans-serif",lineHeight:1.2}}),s.addElement(I,w,"text",{x:92,y:198,width:360,height:20,content:{text:`Choose the best answer for ${l.value}.`,fontSize:14,fontWeight:500,textAlign:"left",color:ce.muted,fontFamily:"Inter, sans-serif",lineHeight:1.35}}),s.addElement(I,w,"quiz",{x:92,y:238,width:776,height:188,content:{question:re,options:Array.isArray(X==null?void 0:X.options)?X.options:[],correctIndex:typeof(X==null?void 0:X.correctIndex)=="number"?X.correctIndex:0,explanation:_e,cardBgColor:"#ffffff",questionColor:ce.text,accentColor:ce.primary}}),s.addElement(I,w,"shape",{x:92,y:444,width:776,height:42,content:{shapeType:"rectangle",fillColor:"#fff7ed",borderColor:"#fde68a",borderWidth:1,borderRadius:14}}),s.addElement(I,w,"text",{x:112,y:456,width:736,height:18,content:{text:_e||"Add your facilitator explanation here after reviewing the AI-generated answer choices.",fontSize:14,textAlign:"left",color:"#92400e",fontFamily:"Inter, sans-serif",lineHeight:1.4}})}async function b(I={}){var w,X;if(!l.value.trim()){u.value="Add a topic so the AI has something concrete to generate.";return}E.value=!0,u.value="";try{const oe=f.value.trim()||T.value;if(a.value==="quiz"){const re=await n.generateQuiz(l.value,m.value,{difficulty:g.value,questionType:_.value,objective:h.value});if(!Array.isArray(re)||!re.length)throw new Error(n.lastError||"No quiz content was generated.");const _e=s.createProject(oe);s.updateProject(_e.id,{description:h.value||`AI-generated quiz about ${l.value}`,tags:["ai","quiz"],theme:{..._e.theme,primaryColor:"#5b21b6",secondaryColor:"#f59e0b",bgColor:"#fffaf0",textColor:"#111827"}}),re.forEach((ne,ee)=>{const de=ee===0?_e.slides[0]:s.addSlide(_e.id);de&&O(_e.id,de.id,ne,ee,re.length)}),await((w=I.onSuccess)==null?void 0:w.call(I,_e)),o.value=!1,M(_e.id);return}const J=await n.generateSlideDeck(l.value,p.value,{objective:h.value});if(!Array.isArray(J)||!J.length)throw new Error(n.lastError||"No slide content was generated.");const ce=s.createProject(oe);s.updateProject(ce.id,{description:h.value||`AI-generated slide deck about ${l.value}`,tags:["ai","slides"],theme:{...ce.theme,primaryColor:"#2563eb",secondaryColor:"#14b8a6",bgColor:"#f8fbff",textColor:"#0f172a"}}),J.forEach((re,_e)=>{const ne=_e===0?ce.slides[0]:s.addSlide(ce.id);ne&&R(ce.id,ne.id,re,_e)}),await((X=I.onSuccess)==null?void 0:X.call(I,ce)),o.value=!1,M(ce.id)}catch(oe){console.error("AI project creation failed",oe),u.value=(oe==null?void 0:oe.message)||"The AI flow failed. Please try again."}finally{E.value=!1}}return{aiStore:n,showAIModal:o,aiMode:a,aiTopic:l,aiContext:h,aiProjectName:f,aiSlideCount:p,aiQuestionCount:m,aiDifficulty:g,aiQuestionType:_,aiCreationError:u,aiSubmitting:E,aiProjectNamePlaceholder:T,aiPrimaryActionLabel:S,openAICreationModal:P,createAIProject:b}}const c4=["aria-label"],u4={key:0,class:"modal-header"},d4={key:0,class:"modal-title"},h4={class:"modal-body"},f4={key:1,class:"modal-footer"},p4={__name:"Modal",props:{title:{type:String,default:""},size:{type:String,default:"md"},showClose:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(_d,{to:"body"},[pt(gr,{name:"modal"},{default:bt(()=>[d("div",{class:"modal-overlay",onMousedown:i[1]||(i[1]=Wt(s=>n("close"),["self"]))},[d("div",{class:Fe(["modal-box",`modal-${t.size}`]),role:"dialog","aria-modal":"true","aria-label":t.title||"Dialog"},[t.title||t.showClose?(W(),Y("div",u4,[t.title?(W(),Y("h3",d4,ye(t.title),1)):Re("",!0),t.showClose?(W(),Y("button",{key:1,class:"btn btn-icon modal-close",onClick:i[0]||(i[0]=s=>n("close"))},[...i[2]||(i[2]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])):Re("",!0)])):Re("",!0),d("div",h4,[bu(r.$slots,"default",{},void 0,!0)]),r.$slots.footer?(W(),Y("div",f4,[bu(r.$slots,"footer",{},void 0,!0)])):Re("",!0)],10,c4)],32)]),_:3})]))}},Ps=At(p4,[["__scopeId","data-v-417bb59d"]]),m4={class:"ai-create-shell"},g4={class:"ai-mode-grid"},v4={class:"form-group"},y4=["value"],_4={class:"form-group"},b4=["value","placeholder"],w4={class:"form-group"},E4=["value"],I4={class:"ai-config-grid"},T4={key:0,class:"form-group"},C4=["value"],x4={class:"form-group"},k4=["value"],S4={class:"form-group"},A4=["value"],R4={class:"form-group"},P4=["value"],N4={class:"ai-create-note"},O4={key:0,class:"error-msg"},D4=["disabled"],M4={__name:"AIProjectModal",props:{mode:{type:String,default:"quiz"},topic:{type:String,default:""},context:{type:String,default:""},projectName:{type:String,default:""},slideCount:{type:Number,default:5},questionCount:{type:Number,default:5},difficulty:{type:String,default:"intermediate"},questionType:{type:String,default:"multiple-choice"},projectNamePlaceholder:{type:String,default:"AI Project"},primaryActionLabel:{type:String,default:"Create project"},creationError:{type:String,default:""},isSubmitting:{type:Boolean,default:!1},isGenerating:{type:Boolean,default:!1},hasApiKey:{type:Boolean,default:!1}},emits:["close","create","update:mode","update:topic","update:context","update:projectName","update:slideCount","update:questionCount","update:difficulty","update:questionType"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Ps,{title:"Create with AI",size:"lg",onClose:i[11]||(i[11]=s=>n("close"))},{footer:bt(()=>[d("button",{class:"btn btn-secondary",onClick:i[9]||(i[9]=s=>n("close"))},"Cancel"),d("button",{class:"btn btn-primary",disabled:t.isSubmitting||t.isGenerating,onClick:i[10]||(i[10]=s=>n("create"))},ye(t.primaryActionLabel),9,D4)]),default:bt(()=>[d("div",m4,[d("div",g4,[d("button",{class:Fe(["ai-mode-card",t.mode==="quiz"&&"active"]),type:"button",onClick:i[0]||(i[0]=s=>n("update:mode","quiz"))},[...i[12]||(i[12]=[d("strong",null,"Quiz project",-1),d("span",null,"Generate question slides learners can answer right away.",-1)])],2),d("button",{class:Fe(["ai-mode-card",t.mode==="deck"&&"active"]),type:"button",onClick:i[1]||(i[1]=s=>n("update:mode","deck"))},[...i[13]||(i[13]=[d("strong",null,"Slide deck",-1),d("span",null,"Create a structured lesson deck from a topic and learning goal.",-1)])],2)]),d("div",v4,[i[14]||(i[14]=d("label",{class:"form-label"},"Topic",-1)),d("input",{id:"ai-topic-input",value:t.topic,class:"input",placeholder:"e.g. Cybersecurity basics for new employees",onInput:i[2]||(i[2]=s=>n("update:topic",s.target.value))},null,40,y4)]),d("div",_4,[i[15]||(i[15]=d("label",{class:"form-label"},"Project name",-1)),d("input",{value:t.projectName,class:"input",placeholder:t.projectNamePlaceholder,onInput:i[3]||(i[3]=s=>n("update:projectName",s.target.value))},null,40,b4)]),d("div",w4,[i[16]||(i[16]=d("label",{class:"form-label"},"Goal or context",-1)),d("textarea",{value:t.context,class:"textarea ai-create-textarea",placeholder:"Explain the audience, learning objective, tone, or any constraints you want the AI to follow.",onInput:i[4]||(i[4]=s=>n("update:context",s.target.value))},null,40,E4)]),d("div",I4,[t.mode==="deck"?(W(),Y("div",T4,[i[18]||(i[18]=d("label",{class:"form-label"},"Slides",-1)),d("select",{value:t.slideCount,class:"ai-select",onChange:i[5]||(i[5]=s=>n("update:slideCount",Number(s.target.value)))},[...i[17]||(i[17]=[d("option",{value:3},"3",-1),d("option",{value:5},"5",-1),d("option",{value:7},"7",-1),d("option",{value:10},"10",-1)])],40,C4)])):(W(),Y(De,{key:1},[d("div",x4,[i[20]||(i[20]=d("label",{class:"form-label"},"Questions",-1)),d("select",{value:t.questionCount,class:"ai-select",onChange:i[6]||(i[6]=s=>n("update:questionCount",Number(s.target.value)))},[...i[19]||(i[19]=[d("option",{value:3},"3",-1),d("option",{value:5},"5",-1),d("option",{value:8},"8",-1),d("option",{value:10},"10",-1)])],40,k4)]),d("div",S4,[i[22]||(i[22]=d("label",{class:"form-label"},"Difficulty",-1)),d("select",{value:t.difficulty,class:"ai-select",onChange:i[7]||(i[7]=s=>n("update:difficulty",s.target.value))},[...i[21]||(i[21]=[d("option",{value:"beginner"},"Beginner",-1),d("option",{value:"intermediate"},"Intermediate",-1),d("option",{value:"advanced"},"Advanced",-1)])],40,A4)]),d("div",R4,[i[24]||(i[24]=d("label",{class:"form-label"},"Question type",-1)),d("select",{value:t.questionType,class:"ai-select",onChange:i[8]||(i[8]=s=>n("update:questionType",s.target.value))},[...i[23]||(i[23]=[d("option",{value:"multiple-choice"},"Multiple choice",-1),d("option",{value:"true-false"},"True / False",-1),d("option",{value:"mixed"},"Mixed",-1)])],40,P4)])],64))]),d("p",N4,ye(t.hasApiKey?"Using your configured AI provider.":"No API key configured yet. The built-in sample generator will still create starter content."),1),t.creationError?(W(),Y("p",O4,ye(t.creationError),1)):Re("",!0)])]),_:1}))}},G_=At(M4,[["__scopeId","data-v-42eed040"]]),L4={class:"auth-modal-body"},V4={class:"auth-title"},$4={class:"auth-message"},F4={class:"auth-mode-toggle"},U4={class:"form-group"},z4=["value"],B4={class:"form-group"},j4=["value"],q4={key:0,class:"auth-error-msg"},W4=["disabled"],H4={class:"auth-provider-list"},G4=["onClick"],K4={class:"provider-name"},Q4={class:"provider-description"},J4={__name:"WorkspaceAuthModal",props:{mode:{type:String,default:"signin"},titleText:{type:String,default:"Welcome back"},messageText:{type:String,default:""},email:{type:String,default:""},password:{type:String,default:""},errorText:{type:String,default:""},isLoading:{type:Boolean,default:!1},providers:{type:Array,default:()=>[]}},emits:["close","submit","provider","update:mode","update:email","update:password"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Ps,{title:t.mode==="signin"?"Sign In":"Sign Up",size:"md",onClose:i[5]||(i[5]=s=>n("close"))},{default:bt(()=>[d("div",L4,[i[8]||(i[8]=d("p",{class:"auth-eyebrow"},"Access your workspace",-1)),d("h2",V4,ye(t.titleText),1),d("p",$4,ye(t.messageText),1),d("div",F4,[d("button",{class:Fe(["auth-mode-btn",t.mode==="signin"&&"active"]),type:"button",onClick:i[0]||(i[0]=s=>n("update:mode","signin"))}," Sign In ",2),d("button",{class:Fe(["auth-mode-btn",t.mode==="signup"&&"active"]),type:"button",onClick:i[1]||(i[1]=s=>n("update:mode","signup"))}," Sign Up ",2)]),d("form",{class:"auth-email-form",onSubmit:i[4]||(i[4]=Wt(s=>n("submit"),["prevent"]))},[d("div",U4,[i[6]||(i[6]=d("label",{class:"form-label"},"Email",-1)),d("input",{type:"email",value:t.email,class:"input",placeholder:"you@example.com",required:"",onInput:i[2]||(i[2]=s=>n("update:email",s.target.value))},null,40,z4)]),d("div",B4,[i[7]||(i[7]=d("label",{class:"form-label"},"Password",-1)),d("input",{type:"password",value:t.password,class:"input",placeholder:"••••••••",required:"",minlength:"6",onInput:i[3]||(i[3]=s=>n("update:password",s.target.value))},null,40,j4)]),t.errorText?(W(),Y("div",q4,ye(t.errorText),1)):Re("",!0),d("button",{type:"submit",class:"btn btn-primary auth-submit-btn",disabled:t.isLoading},ye(t.isLoading?"Loading...":t.mode==="signin"?"Sign In with Email":"Sign Up with Email"),9,W4)],32),i[9]||(i[9]=d("div",{class:"auth-divider"},[d("span",null,"or continue with")],-1)),d("div",H4,[(W(!0),Y(De,null,it(t.providers,s=>(W(),Y("button",{key:s.id,class:"auth-provider-btn",type:"button",onClick:o=>n("provider",s)},[d("span",K4,ye(s.label),1),d("span",Q4,ye(s.description),1)],8,G4))),128))])])]),_:1},8,["title"]))}},Y4=At(J4,[["__scopeId","data-v-e11e7f59"]]),X4={class:"form-group"},Z4=["value","placeholder"],eP={__name:"ProjectNameModal",props:{title:{type:String,default:"New Project"},value:{type:String,default:""},placeholder:{type:String,default:"e.g. Quiz Assessment"},confirmLabel:{type:String,default:"Create Project"}},emits:["close","confirm","update:value"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Ps,{title:t.title,size:"sm",onClose:i[4]||(i[4]=s=>n("close"))},{footer:bt(()=>[d("button",{class:"btn btn-secondary",onClick:i[2]||(i[2]=s=>n("close"))},"Cancel"),d("button",{class:"btn btn-primary",onClick:i[3]||(i[3]=s=>n("confirm"))},ye(t.confirmLabel),1)]),default:bt(()=>[d("div",X4,[i[5]||(i[5]=d("label",{class:"form-label"},"Project Name",-1)),d("input",{id:"project-name-input",value:t.value,class:"input",placeholder:t.placeholder,onInput:i[0]||(i[0]=s=>n("update:value",s.target.value)),onKeydown:i[1]||(i[1]=ku(s=>n("confirm"),["enter"]))},null,40,Z4)])]),_:1},8,["title"]))}},tP={class:"form-group"},nP=["value"],rP={key:0,class:"error-msg"},iP={__name:"ImportProjectModal",props:{value:{type:String,default:""},errorText:{type:String,default:""}},emits:["close","confirm","update:value"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Ps,{title:"Import Project",size:"md",onClose:i[3]||(i[3]=s=>n("close"))},{footer:bt(()=>[d("button",{class:"btn btn-secondary",onClick:i[1]||(i[1]=s=>n("close"))},"Cancel"),d("button",{class:"btn btn-primary",onClick:i[2]||(i[2]=s=>n("confirm"))},"Import")]),default:bt(()=>[d("div",tP,[i[4]||(i[4]=d("label",{class:"form-label"},"Paste Project JSON",-1)),d("textarea",{value:t.value,class:"textarea import-textarea",placeholder:'{"name":"My Project",...}',onInput:i[0]||(i[0]=s=>n("update:value",s.target.value))},null,40,nP)]),t.errorText?(W(),Y("p",rP,ye(t.errorText),1)):Re("",!0)]),_:1}))}},sP=At(iP,[["__scopeId","data-v-563b0b6e"]]),oP={class:"confirm-message"},aP={__name:"ConfirmActionModal",props:{title:{type:String,default:"Confirm action"},message:{type:String,default:""},confirmLabel:{type:String,default:"Continue"},cancelLabel:{type:String,default:"Cancel"},confirmVariant:{type:String,default:"primary"}},emits:["close","confirm"],setup(t,{emit:e}){const n=e;return(r,i)=>(W(),at(Ps,{title:t.title,size:"sm",onClose:i[2]||(i[2]=s=>n("close"))},{footer:bt(()=>[d("button",{class:"btn btn-secondary",onClick:i[0]||(i[0]=s=>n("close"))},ye(t.cancelLabel),1),d("button",{class:Fe(["btn",t.confirmVariant==="danger"?"btn-danger":"btn-primary"]),onClick:i[1]||(i[1]=s=>n("confirm"))},ye(t.confirmLabel),3)]),default:bt(()=>[d("p",oP,ye(t.message),1)]),_:1},8,["title"]))}},K_=At(aP,[["__scopeId","data-v-56f017fb"]]),lP={__name:"ProjectDeleteModal",props:{projectName:{type:String,default:""}},emits:["close","confirm"],setup(t,{emit:e}){const n=t,r=e,i=Se(()=>n.projectName?`Delete "${n.projectName}"? This action cannot be undone.`:"Delete this project? This action cannot be undone.");return(s,o)=>(W(),at(K_,{title:"Delete Project",message:i.value,"confirm-label":"Delete","confirm-variant":"danger",onClose:o[0]||(o[0]=a=>r("close")),onConfirm:o[1]||(o[1]=a=>r("confirm"))},null,8,["message"]))}},cP={class:"market-shell"},uP={class:"left-rail"},dP={class:"rail-nav"},hP={class:"market-main"},fP={key:0,class:"verification-banner"},pP={class:"verification-actions"},mP=["disabled"],gP={id:"home-anchor",class:"hero templates-hero"},vP={class:"hero-top"},yP={key:0,class:"hero-user g-rounded"},_P={class:"user-chip-new"},bP={key:1,class:"hero-user g-rounded"},wP={class:"search-bar-g"},EP={id:"templates-anchor",class:"toolbar-row-g"},IP={class:"chip-list-g"},TP=["onClick"],CP={class:"section-title"},xP={class:"cards-row"},kP=["onClick"],SP={class:"card-type"},AP={class:"card-title"},RP={class:"app-top-nav"},PP={class:"nav-search-bar"},NP={class:"nav-actions"},OP={key:0,class:"user-info-mini"},DP={class:"user-chip"},MP={key:1},LP={key:0,class:"home-container"},VP={class:"home-hero"},$P={class:"home-hero-copy"},FP={class:"home-hero-actions"},UP={class:"home-hero-metrics"},zP={class:"hero-metric-card"},BP={class:"hero-metric-card"},jP={class:"welcome-section"},qP={class:"welcome-title"},WP={class:"quick-actions"},HP={class:"projects-section",style:{"padding-top":"0"}},GP={class:"projects-head",style:{"justify-content":"space-between"}},KP={key:0,class:"project-grid"},QP=["onClick","data-tooltip"],JP={class:"project-name"},YP={class:"project-meta"},XP=["onClick"],ZP={key:1,class:"projects-lock-card"},e5={key:2,class:"projects-lock-card"},t5={key:1,class:"content-container"},n5={class:"projects-section",style:{padding:"0"}},r5={key:0,class:"project-grid"},i5=["onClick","data-tooltip"],s5={class:"project-name"},o5={class:"project-meta"},a5=["onClick"],l5=["onClick"],c5={__name:"DashboardView",setup(t){const e=Sd(),n=Wl(),r=pn(),i=In(),s=Rs(),o=ve(!1),a=ve(!1),l=ve(!1),h=ve(""),f=ve(""),p=ve(""),m=ve(""),g=ve("all"),_=ve("home"),u=ve(null),E=ve("signin"),T=ve(""),S=ve(""),M=ve(""),L=ve(!1),V=Se(()=>s.user?{authTypeLabel:s.user.displayName||s.user.email||"Current User",emailVerified:s.user.emailVerified,email:s.user.email}:null),{aiStore:Q,showAIModal:P,aiMode:A,aiTopic:C,aiContext:R,aiProjectName:O,aiSlideCount:b,aiQuestionCount:I,aiDifficulty:w,aiQuestionType:X,aiCreationError:oe,aiSubmitting:J,aiProjectNamePlaceholder:ce,aiPrimaryActionLabel:re,openAICreationModal:_e,createAIProject:ne}=H_({onRequireAuth:tt}),ee=["ai","topic","context","name","slides","questions","difficulty","type"],de=[{id:"google",label:"Google",description:"Continue with your Google account"},{id:"microsoft",label:"Microsoft",description:"Continue with your Microsoft account"}],pe=Se(()=>E.value==="signin"?"Welcome back":"Create your account"),$=Se(()=>E.value==="signin"?"Existing users can sign in with a standard provider.":"New users can sign up with a standard provider."),le=[{label:"Games and challenges",value:"games"},{label:"Quizzes and Surveys",value:"quizzes"},{label:"Presentations",value:"presentations"},{label:"More",value:"more"}],G=[{id:"microcourse",title:"Microcourse: AI in Education",subtitle:"Interactive lesson",category:"presentations",section:"Teach classes",style:"bg-a"},{id:"chromatic",title:"Chromatic",subtitle:"Presentation",category:"presentations",section:"Teach classes",style:"bg-b"},{id:"branching",title:"Branching Scenario",subtitle:"Scenario practice",category:"games",section:"Teach classes",style:"bg-c"},{id:"flipcards",title:"Flipcards Museum",subtitle:"Game challenge",category:"games",section:"Teach classes",style:"bg-d"},{id:"higher-ed",title:"Higher Education",subtitle:"Presentation",category:"presentations",section:"Boost power skills",style:"bg-e"},{id:"complete",title:"Complete the sentence",subtitle:"Quiz",category:"quizzes",section:"Boost power skills",style:"bg-f"},{id:"fill-blanks",title:"Fill in the blanks",subtitle:"Quiz assessment",category:"quizzes",section:"Boost power skills",style:"bg-g"},{id:"timeline",title:"Data Viz Timeline",subtitle:"Interactive infographic",category:"more",section:"Boost power skills",style:"bg-h"}],Z=Se(()=>{const Te=m.value.trim().toLowerCase();return G.filter(ie=>{const Qe=g.value==="all"||ie.category===g.value,Rt=!Te||ie.title.toLowerCase().includes(Te)||ie.subtitle.toLowerCase().includes(Te);return Qe&&Rt})}),ge=Se(()=>{const Te=new Map;return Z.value.forEach(ie=>{Te.has(ie.section)||Te.set(ie.section,[]),Te.get(ie.section).push(ie)}),Array.from(Te.entries()).map(([ie,Qe])=>({title:ie,cards:Qe}))}),Ie=Se(()=>{const Te=m.value.trim().toLowerCase();return r.sortedProjects.filter(ie=>{var Qe;return Te?ie.name.toLowerCase().includes(Te)||((Qe=ie.description)==null?void 0:Qe.toLowerCase().includes(Te)):!0}).slice(0,8)}),ke=Se(()=>u.value?r.getProject(u.value):null);function z(){if(!V.value){tt("signin");return}h.value="My New Course",o.value=!0,setTimeout(()=>{var Te;return(Te=document.getElementById("project-name-input"))==null?void 0:Te.focus()},50)}function H(){if(!V.value){tt("signin");return}a.value=!0}function v(Te={}){const ie={...e.query};return ee.forEach(Qe=>delete ie[Qe]),Object.entries(Te).forEach(([Qe,Rt])=>{Rt==null||Rt===""||(ie[Qe]=String(Rt))}),ie}function K(Te=e.query,ie=Te.ai){const Qe={topic:typeof Te.topic=="string"?Te.topic:"",context:typeof Te.context=="string"?Te.context:"",projectName:typeof Te.name=="string"?Te.name:""};return ie==="deck"?(typeof Te.slides=="string"&&(Qe.slideCount=Te.slides),Qe):(typeof Te.questions=="string"&&(Qe.questionCount=Te.questions),typeof Te.difficulty=="string"&&(Qe.difficulty=Te.difficulty),typeof Te.type=="string"&&(Qe.questionType=Te.type),Qe)}function q(Te="quiz",ie={}){n.replace({query:v({ai:Te,...ie})})}function N(){return ee.some(Te=>Te in e.query)?n.replace({query:v()}):Promise.resolve()}function D(){P.value=!1,N()}function B(){return ne({onSuccess:N})}function U(){if(!h.value.trim())return;const Te=r.createProject(h.value.trim());o.value=!1,k(Te.id)}function k(Te){i.setProject(Te),n.push({name:"editor",params:{id:Te}})}function j(Te){const ie=r.createProjectFromTemplate(Te.id,Te.title,`${Te.subtitle} template`);k(ie.id)}function te(Te){u.value=Te}function ae(){u.value&&(r.deleteProject(u.value),u.value=null)}function fe(Te){r.duplicateProject(Te)}function Ee(){p.value="";const Te=r.importProject(f.value);if(!Te){p.value="Invalid project JSON. Please check and try again.";return}a.value=!1,f.value="",k(Te.id)}function Pe(Te){return Te?new Date(Te).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}):""}function he(Te){var ie;return((ie=Te.slides)==null?void 0:ie.length)||0}function Be(Te){E.value=Te,M.value="",T.value="",S.value=""}async function rt(){if(!T.value||!S.value){M.value="Please enter both email and password.";return}L.value=!0,M.value="";try{E.value==="signin"?await s.loginWithEmail(T.value,S.value):await s.signUpWithEmail(T.value,S.value),l.value=!1}catch(Te){console.error("Email Auth Error:",Te),Te.code==="auth/email-already-in-use"?M.value="This email is already in use. Try signing in instead.":Te.code==="auth/wrong-password"||Te.code==="auth/user-not-found"||Te.code==="auth/invalid-credential"?M.value="Invalid email or password.":Te.code==="auth/weak-password"?M.value="Password should be at least 6 characters.":M.value="An error occurred. Please try again."}finally{L.value=!1}}const Ke=ve(!1);async function yt(){Ke.value=!0;try{await s.resendVerification(),alert("Verification email sent! Please check your inbox.")}catch(Te){console.error(Te),alert("Failed to send verification email. Please wait a moment and try again.")}finally{Ke.value=!1}}async function Ge(){var Te;await s.reloadUser(),(Te=V.value)!=null&&Te.emailVerified?alert("Thank you! Your email has been verified."):alert("Email not verified yet. Please check your inbox or resend the email.")}async function Jt(Te){try{M.value="",Te.id==="google"?await s.loginWithGoogle():Te.id==="microsoft"&&await s.loginWithMicrosoft(),l.value=!1}catch(ie){console.error("Login failed",ie)}}function tt(Te="signin"){E.value=Te,l.value=!0}Kt(()=>{var Te;return[e.query.ai,e.query.topic,e.query.context,e.query.name,e.query.slides,e.query.questions,e.query.difficulty,e.query.type,(Te=s.user)==null?void 0:Te.uid]},([Te])=>{const ie=Te==="deck"||Te==="quiz"?Te:null;if(!ie)return;if(!V.value){tt("signin");return}const Qe=K(e.query,ie);(!P.value||A.value!==ie)&&_e(ie,Qe)},{immediate:!0});async function Ze(){await s.logout(),l.value=!1,E.value="signin"}function Tt(Te){(Te==="community"||Te==="activity"||Te==="brand")&&(Te="home"),_.value=Te,Te==="content"&&!V.value&&tt("signin"),!(typeof window>"u")&&requestAnimationFrame(()=>{var ie,Qe,Rt;if(Te==="templates"){(ie=document.getElementById("templates-anchor"))==null||ie.scrollIntoView({behavior:"smooth",block:"start"});return}if(Te==="content"){(Qe=document.getElementById("projects-anchor"))==null||Qe.scrollIntoView({behavior:"smooth",block:"start"});return}(Rt=document.getElementById("home-anchor"))==null||Rt.scrollIntoView({behavior:"smooth",block:"start"})})}return(Te,ie)=>{var Qe,Rt;return W(),Y("div",cP,[d("aside",uP,[ie[43]||(ie[43]=d("div",{class:"rail-logo"},"MS",-1)),d("nav",dP,[d("button",{class:Fe(["rail-item",_.value==="home"&&"active"]),type:"button",onClick:ie[0]||(ie[0]=xe=>Tt("home")),"data-tooltip":"Go to home","data-tooltip-position":"right"},[...ie[37]||(ie[37]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),d("polyline",{points:"9 22 9 12 15 12 15 22"})],-1),Oe(" Home ",-1)])],2),d("button",{class:Fe(["rail-item",_.value==="content"&&"active"]),type:"button",onClick:ie[1]||(ie[1]=xe=>Tt("content")),"data-tooltip":"View your content","data-tooltip-position":"right"},[...ie[38]||(ie[38]=[un('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b29df973><rect width="18" height="18" x="3" y="3" rx="2" ry="2" data-v-b29df973></rect><path d="M7 7h10" data-v-b29df973></path><path d="M7 12h10" data-v-b29df973></path><path d="M7 17h10" data-v-b29df973></path></svg> Content ',2)])],2),d("button",{class:Fe(["rail-item",_.value==="templates"&&"active"]),type:"button",onClick:ie[2]||(ie[2]=xe=>Tt("templates")),"data-tooltip":"Browse templates","data-tooltip-position":"right"},[...ie[39]||(ie[39]=[un('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b29df973><rect width="7" height="9" x="3" y="3" rx="1" data-v-b29df973></rect><rect width="7" height="5" x="14" y="3" rx="1" data-v-b29df973></rect><rect width="7" height="9" x="14" y="12" rx="1" data-v-b29df973></rect><rect width="7" height="5" x="3" y="16" rx="1" data-v-b29df973></rect></svg> Templates ',2)])],2),d("button",{class:"rail-item",type:"button",onClick:ie[3]||(ie[3]=xe=>Tt("community")),"data-tooltip":"Community coming soon","data-tooltip-position":"right"},[...ie[40]||(ie[40]=[un('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b29df973><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-v-b29df973></path><circle cx="9" cy="7" r="4" data-v-b29df973></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-v-b29df973></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-v-b29df973></path></svg> Community ',2)])]),d("button",{class:"rail-item",type:"button",onClick:ie[4]||(ie[4]=xe=>Tt("activity")),"data-tooltip":"Activity coming soon","data-tooltip-position":"right"},[...ie[41]||(ie[41]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})],-1),Oe(" Activity ",-1)])]),d("button",{class:"rail-item",type:"button",onClick:ie[5]||(ie[5]=xe=>Tt("brand")),"data-tooltip":"Brand kit coming soon","data-tooltip-position":"right"},[...ie[42]||(ie[42]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"M12 2v20"}),d("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})],-1),Oe(" Brand kit ",-1)])])])]),d("main",hP,[V.value&&!V.value.emailVerified?(W(),Y("div",fP,[d("span",null,[ie[44]||(ie[44]=Oe("Please verify your email address (",-1)),d("strong",null,ye(V.value.email),1),ie[45]||(ie[45]=Oe(") to secure your account and unlock all features.",-1))]),d("div",pP,[d("button",{class:"btn btn-primary btn-sm",onClick:Ge},"I've verified my email"),d("button",{class:"btn btn-secondary btn-sm",onClick:yt,disabled:Ke.value},ye(Ke.value?"Sending...":"Resend Email"),9,mP)])])):Re("",!0),_.value==="templates"?(W(),Y(De,{key:1},[d("section",gP,[d("div",vP,[V.value?(W(),Y("div",yP,[d("span",_P,ye(V.value.authTypeLabel),1),d("button",{class:"btn btn-ghost-text",type:"button",onClick:Ze},"Sign out")])):(W(),Y("div",bP,[d("button",{class:"btn btn-ghost-text",type:"button",onClick:ie[6]||(ie[6]=xe=>tt("signin"))},"Log In"),d("button",{class:"btn btn-ghost-text",type:"button",onClick:ie[7]||(ie[7]=xe=>tt("signup"))},"Sign Up")])),d("div",{class:"hero-actions"},[ie[46]||(ie[46]=d("button",{class:"btn g-premium-btn"},[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),Oe(" Upgrade to Premium ")],-1)),d("button",{class:"btn g-outline-btn",onClick:H,"data-tooltip":"Import a project"},"Import")])]),ie[48]||(ie[48]=d("h1",{class:"hero-title-g"},"Choose how to create",-1)),d("div",wP,[ht(d("input",{"onUpdate:modelValue":ie[8]||(ie[8]=xe=>m.value=xe),class:"search-input-g",placeholder:"Describe what you're looking for"},null,512),[[Lt,m.value]]),ie[47]||(ie[47]=d("button",{class:"search-btn-g",type:"button","aria-label":"Search"},[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("path",{d:"m21 21-4.35-4.35"})])],-1))])]),d("section",EP,[d("div",IP,[d("button",{class:Fe(["chip-g",g.value==="all"&&"active"]),onClick:ie[9]||(ie[9]=xe=>g.value="all"),type:"button"},"All",2),(W(),Y(De,null,it(le,xe=>d("button",{key:xe.value,class:Fe(["chip-g",g.value===xe.value&&"active"]),onClick:Ct=>g.value=xe.value,type:"button"},ye(xe.label),11,TP)),64))]),d("button",{class:"btn g-outline-btn ai-btn-g",type:"button",onClick:ie[10]||(ie[10]=xe=>q("quiz"))},[...ie[49]||(ie[49]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})],-1),Oe(" Create quiz with AI ",-1)])])]),(W(!0),Y(De,null,it(ge.value,xe=>(W(),Y("section",{key:xe.title,class:"template-section"},[d("h2",CP,ye(xe.title),1),d("div",xP,[(W(!0),Y(De,null,it(xe.cards,Ct=>(W(),Y("article",{key:Ct.id,class:Fe(["market-card",Ct.style]),onClick:nr=>j(Ct)},[ie[50]||(ie[50]=un('<div class="hover-overlay" data-v-b29df973></div><div class="action-icon" data-v-b29df973><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-b29df973><line x1="12" y1="5" x2="12" y2="19" data-v-b29df973></line><line x1="5" y1="12" x2="19" y2="12" data-v-b29df973></line></svg></div>',2)),d("span",SP,ye(Ct.subtitle),1),d("h3",AP,ye(Ct.title),1)],10,kP))),128))])]))),128))],64)):Re("",!0),_.value==="home"||_.value==="content"?(W(),Y(De,{key:2},[d("header",RP,[d("div",PP,[ie[51]||(ie[51]=d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("path",{d:"m21 21-4.35-4.35"})],-1)),ht(d("input",{"onUpdate:modelValue":ie[11]||(ie[11]=xe=>m.value=xe),placeholder:"Search templates and creations"},null,512),[[Lt,m.value]])]),d("div",NP,[ie[52]||(ie[52]=d("button",{class:"btn btn-secondary btn-sm",style:{color:"#d97706","border-color":"rgba(217,119,6,0.3)",background:"#fffbeb"}},[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})]),Oe(" Upgrade to Premium ")],-1)),V.value?(W(),Y("div",OP,[d("span",DP,ye(V.value.authTypeLabel),1),d("div",{class:"user-actions-mini"},[d("button",{class:"btn btn-secondary btn-sm",type:"button",onClick:Ze},"Log out"),d("button",{class:"btn btn-primary btn-sm",onClick:z},"Create course")])])):(W(),Y("div",MP,[d("button",{class:"btn btn-secondary btn-sm",onClick:ie[12]||(ie[12]=xe=>tt("signin"))},"Sign In")]))])]),_.value==="home"?(W(),Y("div",LP,[d("section",VP,[ie[57]||(ie[57]=d("div",{class:"home-hero-pattern"},null,-1)),ie[58]||(ie[58]=d("div",{class:"home-hero-glow home-hero-glow-left"},null,-1)),ie[59]||(ie[59]=d("div",{class:"home-hero-glow home-hero-glow-right"},null,-1)),d("div",$P,[ie[54]||(ie[54]=d("span",{class:"home-hero-kicker"},"Featured challenge",-1)),ie[55]||(ie[55]=d("h1",{class:"home-hero-title"},"Build interactions that feel alive.",-1)),ie[56]||(ie[56]=d("p",{class:"home-hero-text"}," Design drag-and-drop lessons, branching slides, and quick knowledge checks with a workspace that feels built for fast iteration. ",-1)),d("div",FP,[d("button",{class:"btn btn-primary btn-lg",onClick:z,"data-tooltip":"Create a new project from scratch"},"Start a new course"),d("button",{class:"btn home-hero-secondary",onClick:ie[13]||(ie[13]=xe=>Tt("templates")),"data-tooltip":"Open the templates library"},"Browse templates")]),d("div",UP,[d("div",zP,[d("strong",null,ye(Ie.value.length||0),1),ie[53]||(ie[53]=d("span",null,"projects in motion",-1))]),d("div",BP,[d("strong",null,ye(V.value?"Ready":"Guest"),1),d("span",null,ye(V.value?"workspace synced":"sign in to sync"),1)])])]),ie[60]||(ie[60]=un('<div class="home-hero-visual" aria-hidden="true" data-v-b29df973><div class="hero-preview-card hero-preview-main" data-v-b29df973><span class="preview-badge" data-v-b29df973>Drag and drop</span><div class="preview-line preview-line-lg" data-v-b29df973></div><div class="preview-line preview-line-md" data-v-b29df973></div><div class="preview-dropzones" data-v-b29df973><span data-v-b29df973></span><span data-v-b29df973></span><span data-v-b29df973></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-quiz" data-v-b29df973><span class="preview-dot" data-v-b29df973></span><div class="preview-line preview-line-sm" data-v-b29df973></div><div class="preview-pill-row" data-v-b29df973><span data-v-b29df973></span><span data-v-b29df973></span><span data-v-b29df973></span></div></div><div class="hero-preview-card hero-preview-floating hero-preview-media" data-v-b29df973><div class="preview-media" data-v-b29df973></div><div class="preview-line preview-line-sm" data-v-b29df973></div></div></div>',1))]),d("div",jP,[d("h2",qP," Hi, "+ye(((Qe=V.value)==null?void 0:Qe.authTypeLabel.split(" ")[0])||"Creator")+" 👋 What are you going to create today? ",1),d("div",WP,[d("button",{class:"quick-btn",onClick:z,"data-tooltip":"Start with a blank project"},[...ie[61]||(ie[61]=[d("span",{class:"q-icon",style:{color:"var(--color-primary)"}},"+",-1),Oe(" Create scratch project",-1)])]),d("button",{class:"quick-btn quick-btn-ai",onClick:ie[14]||(ie[14]=xe=>q("quiz")),"data-tooltip":"Generate a quiz project with AI"},[...ie[62]||(ie[62]=[d("span",{class:"q-icon",style:{color:"#7c3aed"}},"✦",-1),Oe(" Create quiz with AI",-1)])]),d("button",{class:"quick-btn quick-btn-deck",onClick:ie[15]||(ie[15]=xe=>q("deck")),"data-tooltip":"Generate a lesson deck with AI"},[...ie[63]||(ie[63]=[d("span",{class:"q-icon",style:{color:"#0284c7"}},"◫",-1),Oe(" Create slides with AI",-1)])]),d("button",{class:"quick-btn",onClick:ie[16]||(ie[16]=xe=>Tt("templates")),"data-tooltip":"Use a game template"},[...ie[64]||(ie[64]=[d("span",{class:"q-icon",style:{color:"var(--color-secondary)"}},"🎮",-1),Oe(" Create a game",-1)])]),d("button",{class:"quick-btn",onClick:ie[17]||(ie[17]=xe=>Tt("templates")),"data-tooltip":"Use a presentation template"},[...ie[65]||(ie[65]=[d("span",{class:"q-icon",style:{color:"var(--color-success)"}},"📱",-1),Oe(" Create a presentation",-1)])])])]),d("section",HP,[d("div",GP,[ie[66]||(ie[66]=d("h2",{class:"section-title"},"Pick up where you left off",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:ie[18]||(ie[18]=xe=>Tt("content"))},"Go to My Content ›")]),V.value&&Ie.value.length?(W(),Y("div",KP,[(W(!0),Y(De,null,it(Ie.value.slice(0,4),xe=>(W(),Y("article",{key:xe.id,class:"project-card",onClick:Ct=>k(xe.id),"data-tooltip":`Open ${xe.name}`},[d("div",JP,ye(xe.name),1),d("p",YP,ye(he(xe))+" slides · "+ye(Pe(xe.updatedAt)),1),d("div",{class:"project-actions",onClick:ie[19]||(ie[19]=Wt(()=>{},["stop"]))},[d("button",{class:"btn btn-ghost btn-sm",onClick:Ct=>fe(xe.id)},"Duplicate",8,XP)])],8,QP))),128))])):V.value?(W(),Y("div",e5,[...ie[68]||(ie[68]=[d("p",null,"You haven't created any projects yet. Start by creating a project from scratch or a template.",-1)])])):(W(),Y("div",ZP,[...ie[67]||(ie[67]=[d("p",null,"Sign in to see your recent projects.",-1)])]))])])):Re("",!0),_.value==="content"?(W(),Y("div",t5,[ie[70]||(ie[70]=d("div",{class:"content-header-row"},[d("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[d("div",{class:"content-icon"},"💿"),d("h1",{style:{"font-size":"28px","font-weight":"700"}},"My content")])],-1)),d("div",n5,[V.value?(W(),Y("div",r5,[d("article",{class:"project-card create-new-card",onClick:z,"data-tooltip":"Create a project"},[...ie[69]||(ie[69]=[d("div",{class:"create-circle"},"+",-1),d("div",{class:"create-text"},"Create new project",-1)])]),(W(!0),Y(De,null,it(Ie.value,xe=>(W(),Y("article",{key:xe.id,class:"project-card",onClick:Ct=>k(xe.id),"data-tooltip":`Open ${xe.name}`},[d("div",s5,ye(xe.name),1),d("p",o5,ye(he(xe))+" slides · "+ye(Pe(xe.updatedAt)),1),d("div",{class:"project-actions",onClick:ie[20]||(ie[20]=Wt(()=>{},["stop"]))},[d("button",{class:"btn btn-ghost btn-sm",onClick:Ct=>fe(xe.id)},"Duplicate",8,a5),d("button",{class:"btn btn-ghost btn-sm",onClick:Ct=>te(xe.id),style:{color:"var(--color-danger)"}},"Delete",8,l5)])],8,i5))),128))])):Re("",!0)])])):Re("",!0)],64)):Re("",!0)]),l.value?(W(),at(Y4,{key:0,mode:E.value,"title-text":pe.value,"message-text":$.value,email:T.value,password:S.value,"error-text":M.value,"is-loading":L.value,providers:de,onClose:ie[21]||(ie[21]=xe=>l.value=!1),onSubmit:rt,onProvider:Jt,"onUpdate:mode":Be,"onUpdate:email":ie[22]||(ie[22]=xe=>T.value=xe),"onUpdate:password":ie[23]||(ie[23]=xe=>S.value=xe)},null,8,["mode","title-text","message-text","email","password","error-text","is-loading"])):Re("",!0),o.value?(W(),at(eP,{key:1,title:"New Project",value:h.value,placeholder:"e.g. Quiz Assessment","confirm-label":"Create Project",onClose:ie[24]||(ie[24]=xe=>o.value=!1),onConfirm:U,"onUpdate:value":ie[25]||(ie[25]=xe=>h.value=xe)},null,8,["value"])):Re("",!0),a.value?(W(),at(sP,{key:2,value:f.value,"error-text":p.value,onClose:ie[26]||(ie[26]=xe=>a.value=!1),onConfirm:Ee,"onUpdate:value":ie[27]||(ie[27]=xe=>f.value=xe)},null,8,["value","error-text"])):Re("",!0),be(P)?(W(),at(G_,{key:3,mode:be(A),topic:be(C),context:be(R),"project-name":be(O),"slide-count":be(b),"question-count":be(I),difficulty:be(w),"question-type":be(X),"project-name-placeholder":be(ce),"primary-action-label":be(re),"creation-error":be(oe),"is-submitting":be(J),"is-generating":be(Q).isGenerating,"has-api-key":!!be(Q).apiKey,onClose:D,onCreate:B,"onUpdate:mode":ie[28]||(ie[28]=xe=>A.value=xe),"onUpdate:topic":ie[29]||(ie[29]=xe=>C.value=xe),"onUpdate:context":ie[30]||(ie[30]=xe=>R.value=xe),"onUpdate:projectName":ie[31]||(ie[31]=xe=>O.value=xe),"onUpdate:slideCount":ie[32]||(ie[32]=xe=>b.value=xe),"onUpdate:questionCount":ie[33]||(ie[33]=xe=>I.value=xe),"onUpdate:difficulty":ie[34]||(ie[34]=xe=>w.value=xe),"onUpdate:questionType":ie[35]||(ie[35]=xe=>X.value=xe)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key"])):Re("",!0),u.value?(W(),at(lP,{key:4,"project-name":((Rt=ke.value)==null?void 0:Rt.name)||"",onClose:ie[36]||(ie[36]=xe=>u.value=null),onConfirm:ae},null,8,["project-name"])):Re("",!0)])}}},u5=At(c5,[["__scopeId","data-v-b29df973"]]);function d5(t){function e(n){var a,l,h,f,p,m,g,_,u,E,T,S,M,L,V,Q,P;const r=n.ctrlKey||n.metaKey,i=n.key.toLowerCase(),s=n.target.tagName.toLowerCase(),o=s==="input"||s==="textarea"||n.target.isContentEditable;o&&r&&["c","v","x","a","z","y"].includes(i)||(r&&i==="z"&&!n.shiftKey?(n.preventDefault(),(a=t.undo)==null||a.call(t)):r&&(i==="y"||i==="z"&&n.shiftKey)?(n.preventDefault(),(l=t.redo)==null||l.call(t)):r&&i==="c"?(n.preventDefault(),(h=t.copy)==null||h.call(t)):r&&i==="v"?(n.preventDefault(),(f=t.paste)==null||f.call(t)):r&&i==="x"?(n.preventDefault(),(p=t.cut)==null||p.call(t)):r&&i==="d"?(n.preventDefault(),(m=t.duplicate)==null||m.call(t)):r&&i==="a"?(n.preventDefault(),(g=t.selectAll)==null||g.call(t)):i==="delete"||i==="backspace"?o||(n.preventDefault(),(_=t.delete)==null||_.call(t)):i==="escape"?(u=t.escape)==null||u.call(t):r&&i==="g"?(n.preventDefault(),(E=t.toggleGrid)==null||E.call(t)):r&&i==="="||r&&i==="+"?(n.preventDefault(),(T=t.zoomIn)==null||T.call(t)):r&&i==="-"?(n.preventDefault(),(S=t.zoomOut)==null||S.call(t)):r&&i==="0"?(n.preventDefault(),(M=t.zoomReset)==null||M.call(t)):i==="arrowleft"?(L=t.nudge)==null||L.call(t,-1,0):i==="arrowright"?(V=t.nudge)==null||V.call(t,1,0):i==="arrowup"?(Q=t.nudge)==null||Q.call(t,0,-1):i==="arrowdown"&&((P=t.nudge)==null||P.call(t,0,1)))}Wo(()=>window.addEventListener("keydown",e)),Ho(()=>window.removeEventListener("keydown",e))}const h5={class:"slide-panel"},f5={class:"slide-panel-header"},p5={class:"slide-count"},m5={class:"slides-list"},g5=["onClick","onContextmenu","onDragstart","onDrop"],v5={class:"slide-number"},y5={class:"slide-footer"},_5={class:"slide-title"},b5=["onClick"],w5={__name:"SlidePanel",setup(t){const e=In(),n=pn(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var L,V;return((V=(L=r.value)==null?void 0:L.slides)==null?void 0:V.slice().sort((Q,P)=>Q.order-P.order))||[]}),s=ve({show:!1,x:0,y:0,slideId:null});function o(L){e.setCurrentSlide(L)}function a(){const L=i.value.findIndex(Q=>Q.id===e.currentSlideId),V=n.addSlide(e.projectId,L);V&&e.setCurrentSlide(V.id)}function l(L){var P,A;const V=i.value.findIndex(C=>C.id===L);n.deleteSlide(e.projectId,L);const Q=((P=r.value)==null?void 0:P.slides)||[];if(Q.length>0){const C=Q.slice().sort((O,b)=>O.order-b.order),R=Math.min(V,C.length-1);e.setCurrentSlide((A=C[R])==null?void 0:A.id)}}function h(L,V){L.preventDefault(),s.value={show:!0,x:L.clientX,y:L.clientY,slideId:V},setTimeout(()=>window.addEventListener("click",f,{once:!0}),0)}function f(){s.value.show=!1}function p(){const L=n.duplicateSlide(e.projectId,s.value.slideId);L&&e.setCurrentSlide(L.id),f()}function m(){l(s.value.slideId),f()}function g(L,V){L.stopPropagation(),l(V)}function _(){const L=i.value.findIndex(V=>V.id===s.value.slideId);L>0&&n.reorderSlides(e.projectId,L,L-1),f()}function u(){const L=i.value.findIndex(V=>V.id===s.value.slideId);L<i.value.length-1&&n.reorderSlides(e.projectId,L,L+1),f()}let E=-1;function T(L,V){E=V,L.dataTransfer.effectAllowed="move"}function S(L,V){L.preventDefault(),E!==-1&&E!==V&&n.reorderSlides(e.projectId,E,V),E=-1}function M(L){return L.backgroundType==="gradient"&&L.backgroundGradient?{background:L.backgroundGradient}:L.backgroundType==="image"&&L.backgroundImage?{backgroundImage:`url(${L.backgroundImage})`,backgroundSize:"cover"}:{background:L.background||"#fff"}}return(L,V)=>(W(),Y("div",h5,[d("div",f5,[V[2]||(V[2]=d("span",{class:"panel-section-title"},"Slides",-1)),d("span",p5,ye(i.value.length),1),d("button",{class:"btn btn-icon add-slide-btn",onClick:a,"data-tooltip":"Add slide","aria-label":"Add slide"},[...V[1]||(V[1]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),d("div",m5,[(W(!0),Y(De,null,it(i.value,(Q,P)=>(W(),Y("div",{key:Q.id,class:Fe(["slide-thumb-item",be(e).currentSlideId===Q.id&&"active"]),draggable:"true",onClick:A=>o(Q.id),onContextmenu:A=>h(A,Q.id),onDragstart:A=>T(A,P),onDragover:V[0]||(V[0]=Wt(()=>{},["prevent"])),onDrop:A=>S(A,P)},[d("div",v5,ye(P+1),1),d("div",{class:"slide-thumb",style:je(M(Q))},[(W(!0),Y(De,null,it(Q.elements.slice(0,6),A=>{var C,R;return W(),Y("div",{key:A.id,class:"mini-element",style:je({left:A.x/960*100+"%",top:A.y/540*100+"%",width:A.width/960*100+"%",height:A.height/540*100+"%",background:A.type==="shape"?(C=A.content)==null?void 0:C.fillColor:A.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:A.type==="shape"&&((R=A.content)==null?void 0:R.shapeType)==="circle"?"50%":void 0})},null,4)}),128))],4),d("div",y5,[d("div",_5,ye(Q.title||`Slide ${P+1}`),1),i.value.length>1?(W(),Y("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:A=>g(A,Q.id)},[...V[3]||(V[3]=[un('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1b392fd3><polyline points="3 6 5 6 21 6" data-v-1b392fd3></polyline><path d="M19 6l-1 14H6L5 6" data-v-1b392fd3></path><path d="M10 11v6M14 11v6" data-v-1b392fd3></path><path d="M9 6V4h6v2" data-v-1b392fd3></path></svg>',1)])],8,b5)):Re("",!0)])],42,g5))),128))]),d("button",{class:"add-slide-bottom",onClick:a},[...V[4]||(V[4]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Oe(" Add Slide ",-1)])]),(W(),at(_d,{to:"body"},[s.value.show?(W(),Y("div",{key:0,class:"context-menu",style:je({left:s.value.x+"px",top:s.value.y+"px"})},[d("button",{class:"ctx-item",onClick:p},"Duplicate"),d("button",{class:"ctx-item",onClick:_},"Move Up"),d("button",{class:"ctx-item",onClick:u},"Move Down"),V[5]||(V[5]=d("div",{class:"ctx-divider"},null,-1)),d("button",{class:"ctx-item danger",onClick:m},"Delete Slide")],4)):Re("",!0)]))]))}},E5=At(w5,[["__scopeId","data-v-1b392fd3"]]),I5={class:"layer-panel"},T5={class:"layer-header panel-section"},C5={class:"panel-title",style:{"margin-bottom":"0"}},x5={class:"layer-count"},k5={key:0,class:"layers-empty"},S5={key:1,class:"layers-list"},A5=["onClick"],R5={class:"layer-type-icon"},P5={class:"layer-name"},N5={class:"layer-actions"},O5=["onClick","data-tooltip"],D5={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},M5={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},L5=["onClick","data-tooltip"],V5={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$5={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},F5=["onClick"],U5=["onClick"],z5=["onClick"],B5={__name:"LayerPanel",setup(t){const e=In(),n=pn(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var _,u;return(u=(_=r.value)==null?void 0:_.slides)==null?void 0:u.find(E=>E.id===e.currentSlideId)}),s=Se(()=>{var _;return[...((_=i.value)==null?void 0:_.elements)||[]].sort((u,E)=>(E.zIndex||0)-(u.zIndex||0))});function o(_){e.selectElement(_)}function a(_){n.updateElement(e.projectId,e.currentSlideId,_.id,{visible:!_.visible})}function l(_){n.updateElement(e.projectId,e.currentSlideId,_.id,{locked:!_.locked})}function h(_){n.reorderElement(e.projectId,e.currentSlideId,_,"up")}function f(_){n.reorderElement(e.projectId,e.currentSlideId,_,"down")}function p(_){n.deleteElement(e.projectId,e.currentSlideId,_),e.selectedElementId===_&&e.clearSelection()}function m(_){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[_]||"◆"}function g(_){var u,E,T;return(u=_.content)!=null&&u.text?_.content.text.slice(0,24):(E=_.content)!=null&&E.label?_.content.label:(T=_.content)!=null&&T.question?_.content.question.slice(0,24):_.type.charAt(0).toUpperCase()+_.type.slice(1)}return(_,u)=>(W(),Y("div",I5,[d("div",T5,[d("div",C5,[u[0]||(u[0]=Oe(" Layers ",-1)),d("span",x5,ye(s.value.length),1)])]),s.value.length===0?(W(),Y("div",k5,[...u[1]||(u[1]=[d("p",null,"No elements on this slide.",-1),d("p",null,"Add elements using the toolbar above.",-1)])])):(W(),Y("div",S5,[(W(!0),Y(De,null,it(s.value,E=>(W(),Y("div",{key:E.id,class:Fe(["layer-item",be(e).selectedElementIds.includes(E.id)&&"selected",E.locked&&"locked",!E.visible&&"hidden"]),onClick:T=>o(E.id)},[d("span",R5,ye(m(E.type)),1),d("span",P5,ye(g(E)),1),d("div",N5,[d("button",{class:Fe(["layer-action-btn",{active:E.visible}]),onClick:Wt(T=>a(E),["stop"]),"data-tooltip":E.visible?"Hide":"Show"},[E.visible?(W(),Y("svg",D5,[...u[2]||(u[2]=[d("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),d("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(W(),Y("svg",M5,[...u[3]||(u[3]=[d("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),d("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),d("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,O5),d("button",{class:Fe(["layer-action-btn",{active:E.locked}]),onClick:Wt(T=>l(E),["stop"]),"data-tooltip":E.locked?"Unlock":"Lock"},[E.locked?(W(),Y("svg",V5,[...u[4]||(u[4]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(W(),Y("svg",$5,[...u[5]||(u[5]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,L5),d("button",{class:"layer-action-btn",onClick:Wt(T=>h(E.id),["stop"]),"data-tooltip":"Move up"},[...u[6]||(u[6]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,F5),d("button",{class:"layer-action-btn",onClick:Wt(T=>f(E.id),["stop"]),"data-tooltip":"Move down"},[...u[7]||(u[7]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,U5),d("button",{class:"layer-action-btn danger",onClick:Wt(T=>p(E.id),["stop"]),"data-tooltip":"Delete"},[...u[8]||(u[8]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,z5)])],10,A5))),128))]))]))}},j5=At(B5,[["__scopeId","data-v-7407acd8"]]),q5={class:"properties-panel"},W5={class:"panel-section"},H5={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},G5={class:"form-group"},K5={class:"bg-type-tabs"},Q5=["onClick"],J5={key:0,class:"color-row"},Y5=["value"],X5=["value"],Z5={class:"panel-section"},e6={class:"panel-section"},t6=["value"],n6={class:"panel-section"},r6={class:"panel-title"},i6={class:"element-type-badge"},s6={class:"geo-grid"},o6={class:"form-group"},a6=["value"],l6={class:"form-group"},c6=["value"],u6={class:"form-group"},d6=["value"],h6={class:"form-group"},f6=["value"],p6={class:"form-group"},m6=["value"],g6={class:"form-group"},v6=["value"],y6={key:0,class:"panel-section"},_6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},b6=["value"],w6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},E6={class:"form-group"},I6=["value"],T6={class:"form-group"},C6=["value"],x6={class:"form-group",style:{"margin-top":"var(--space-3)"}},k6=["value"],S6=["value"],A6={class:"form-group",style:{"margin-top":"var(--space-3)"}},R6={class:"align-btns"},P6=["onClick"],N6={class:"form-group",style:{"margin-top":"var(--space-3)"}},O6={class:"style-btns"},D6={class:"form-group",style:{"margin-top":"var(--space-3)"}},M6={class:"color-row"},L6=["value"],V6=["value"],$6={class:"form-group",style:{"margin-top":"var(--space-3)"}},F6=["value"],U6={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},z6={class:"form-group"},B6=["value"],j6={class:"form-group"},q6=["value"],W6={key:1,class:"panel-section"},H6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},G6=["value"],K6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Q6=["value"],J6={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Y6=["value"],X6={class:"form-group"},Z6=["value"],e3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},t3={class:"form-group"},n3=["value"],r3={class:"form-group"},i3=["value"],s3={key:2,class:"panel-section"},o3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},a3=["value"],l3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},c3={class:"color-row"},u3=["value"],d3=["value"],h3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},f3={class:"color-row"},p3=["value"],m3=["value"],g3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},v3=["value"],y3={class:"form-group"},_3=["value"],b3={class:"form-group",style:{"margin-top":"var(--space-3)"}},w3=["value"],E3={key:3,class:"panel-section"},I3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},T3=["value"],C3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},x3=["value"],k3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},S3=["value"],A3={key:0,class:"form-group"},R3=["value"],P3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},N3={class:"form-group"},O3=["value"],D3={class:"form-group"},M3=["value"],L3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},V3={class:"form-group"},$3=["value"],F3={class:"form-group"},U3=["value"],z3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},B3={class:"form-group"},j3=["value"],q3={class:"form-group"},W3=["value"],H3={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},G3={class:"form-group"},K3=["value"],Q3=["value"],J3={class:"form-group"},Y3=["value"],X3={key:4,class:"panel-section"},Z3={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},eN=["value"],tN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nN={class:"color-row"},rN=["value"],iN=["value"],sN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},oN={class:"form-group"},aN=["value"],lN={class:"form-group"},cN=["value"],uN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},dN=["value"],hN={class:"form-group"},fN=["value"],pN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},mN={class:"form-group"},gN=["value"],vN={class:"form-group"},yN=["value"],_N={key:5,class:"panel-section"},bN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},wN=["value"],EN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},IN=["value"],TN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},CN=["value"],xN={class:"check-row"},kN=["checked"],SN={class:"check-row"},AN=["checked"],RN={class:"check-row"},PN=["checked"],NN={class:"check-row"},ON=["checked"],DN={key:6,class:"panel-section"},MN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},LN=["value"],VN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$N=["value"],FN={class:"check-row"},UN=["checked"],zN={class:"check-row"},BN=["checked"],jN={class:"check-row"},qN=["checked"],WN={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},HN={class:"form-group"},GN=["value"],KN={class:"form-group"},QN=["value"],JN={class:"form-group",style:{"margin-top":"var(--space-3)"}},YN=["value"],XN={key:7,class:"panel-section"},ZN={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},eO=["value"],tO={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nO=["value"],rO={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},iO=["value"],sO={class:"form-group"},oO=["value"],aO={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},lO={class:"form-group"},cO=["value"],uO={class:"form-group"},dO=["value"],hO={class:"form-group",style:{"margin-top":"var(--space-3)"}},fO=["value"],pO={class:"panel-section"},mO={class:"actions-list"},gO={__name:"PropertiesPanel",setup(t){const e=In(),n=pn(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var _,u;return(u=(_=r.value)==null?void 0:_.slides)==null?void 0:u.find(E=>E.id===e.currentSlideId)}),s=Se(()=>{var _,u;return e.selectedElementId?(u=(_=i.value)==null?void 0:_.elements)==null?void 0:u.find(E=>E.id===e.selectedElementId):null}),o=ve({});Kt(s,_=>{_?o.value=JSON.parse(JSON.stringify(_)):o.value={}},{immediate:!0,deep:!0});function a(_){s.value&&n.updateElement(e.projectId,e.currentSlideId,s.value.id,_)}function l(_){if(!s.value)return;const u={...s.value.content,..._};a({content:u})}function h(_,u){const E=parseFloat(u);isNaN(E)||a({[_]:E})}const f=ve({});Kt(i,_=>{_&&(f.value={..._})},{immediate:!0});function p(_){i.value&&n.updateSlide(e.projectId,i.value.id,_)}function m(_,u){p({[_]:u})}const g=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(_,u)=>{var E,T,S,M,L,V,Q,P,A,C,R,O,b,I,w,X,oe,J,ce,re,_e,ne,ee,de,pe,$,le,G,Z,ge,Ie,ke,z,H,v,K,q,N,D,B,U,k,j,te,ae,fe,Ee,Pe,he,Be,rt,Ke,yt,Ge,Jt,tt,Ze,Tt,Te,ie,Qe,Rt,xe,Ct,nr,Rr,ia,sa,rr,oa,aa,fi,Ns,Os,qi,Pr;return W(),Y("div",q5,[u[190]||(u[190]=d("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),s.value?(W(),Y(De,{key:1},[d("div",n6,[d("div",r6,[u[95]||(u[95]=Oe(" Position & Size ",-1)),d("span",i6,ye(s.value.type),1)]),d("div",s6,[d("div",o6,[u[96]||(u[96]=d("label",{class:"form-label"},"X",-1)),d("input",{type:"number",value:Math.round(s.value.x),class:"input",onChange:u[11]||(u[11]=se=>h("x",se.target.value))},null,40,a6)]),d("div",l6,[u[97]||(u[97]=d("label",{class:"form-label"},"Y",-1)),d("input",{type:"number",value:Math.round(s.value.y),class:"input",onChange:u[12]||(u[12]=se=>h("y",se.target.value))},null,40,c6)]),d("div",u6,[u[98]||(u[98]=d("label",{class:"form-label"},"W",-1)),d("input",{type:"number",value:Math.round(s.value.width),class:"input",onChange:u[13]||(u[13]=se=>h("width",se.target.value))},null,40,d6)]),d("div",h6,[u[99]||(u[99]=d("label",{class:"form-label"},"H",-1)),d("input",{type:"number",value:Math.round(s.value.height),class:"input",onChange:u[14]||(u[14]=se=>h("height",se.target.value))},null,40,f6)]),d("div",p6,[u[100]||(u[100]=d("label",{class:"form-label"},"Rot °",-1)),d("input",{type:"number",value:Math.round(s.value.rotation||0),class:"input",onChange:u[15]||(u[15]=se=>h("rotation",se.target.value))},null,40,m6)]),d("div",g6,[u[101]||(u[101]=d("label",{class:"form-label"},"Opacity",-1)),d("input",{type:"number",min:"0",max:"1",step:".05",value:s.value.opacity??1,class:"input",onChange:u[16]||(u[16]=se=>h("opacity",se.target.value))},null,40,v6)])])]),["text","heading"].includes(s.value.type)?(W(),Y("div",y6,[u[117]||(u[117]=d("div",{class:"panel-title"},"Text",-1)),d("div",_6,[u[102]||(u[102]=d("label",{class:"form-label"},"Content",-1)),d("textarea",{value:(V=s.value.content)==null?void 0:V.text,class:"textarea",style:{"min-height":"64px"},onInput:u[17]||(u[17]=se=>l({text:se.target.value}))},null,40,b6)]),d("div",w6,[d("div",E6,[u[103]||(u[103]=d("label",{class:"form-label"},"Size",-1)),d("input",{type:"number",value:(Q=s.value.content)==null?void 0:Q.fontSize,class:"input",onChange:u[18]||(u[18]=se=>l({fontSize:+se.target.value}))},null,40,I6)]),d("div",T6,[u[105]||(u[105]=d("label",{class:"form-label"},"Weight",-1)),d("select",{value:(P=s.value.content)==null?void 0:P.fontWeight,class:"select",onChange:u[19]||(u[19]=se=>l({fontWeight:se.target.value}))},[...u[104]||(u[104]=[d("option",{value:"normal"},"Normal",-1),d("option",{value:"bold"},"Bold",-1),d("option",{value:"600"},"Semi-bold",-1),d("option",{value:"300"},"Light",-1)])],40,C6)])]),d("div",x6,[u[106]||(u[106]=d("label",{class:"form-label"},"Font Family",-1)),d("select",{value:(A=s.value.content)==null?void 0:A.fontFamily,class:"select",onChange:u[20]||(u[20]=se=>l({fontFamily:se.target.value}))},[(W(),Y(De,null,it(g,se=>d("option",{key:se,value:se},ye(se.split(",")[0]),9,S6)),64))],40,k6)]),d("div",A6,[u[107]||(u[107]=d("label",{class:"form-label"},"Align",-1)),d("div",R6,[(W(),Y(De,null,it(["left","center","right","justify"],se=>{var _t;return d("button",{key:se,class:Fe(["align-btn",((_t=s.value.content)==null?void 0:_t.textAlign)===se&&"active"]),onClick:la=>l({textAlign:se})},ye(se[0].toUpperCase()),11,P6)}),64))])]),d("div",N6,[u[111]||(u[111]=d("label",{class:"form-label"},"Style",-1)),d("div",O6,[d("button",{class:Fe(["style-btn",((C=s.value.content)==null?void 0:C.fontStyle)==="italic"&&"active"]),onClick:u[21]||(u[21]=se=>{var _t;return l({fontStyle:((_t=s.value.content)==null?void 0:_t.fontStyle)==="italic"?"normal":"italic"})})},[...u[108]||(u[108]=[d("i",null,"I",-1)])],2),d("button",{class:Fe(["style-btn",((R=s.value.content)==null?void 0:R.textDecoration)==="underline"&&"active"]),onClick:u[22]||(u[22]=se=>{var _t;return l({textDecoration:((_t=s.value.content)==null?void 0:_t.textDecoration)==="underline"?"none":"underline"})})},[...u[109]||(u[109]=[d("u",null,"U",-1)])],2),d("button",{class:Fe(["style-btn",((O=s.value.content)==null?void 0:O.textDecoration)==="line-through"&&"active"]),onClick:u[23]||(u[23]=se=>{var _t;return l({textDecoration:((_t=s.value.content)==null?void 0:_t.textDecoration)==="line-through"?"none":"line-through"})})},[...u[110]||(u[110]=[d("s",null,"S",-1)])],2)])]),d("div",D6,[u[112]||(u[112]=d("label",{class:"form-label"},"Color",-1)),d("div",M6,[d("input",{type:"color",value:((b=s.value.content)==null?void 0:b.color)||"#000",onInput:u[24]||(u[24]=se=>l({color:se.target.value})),class:"color-input-native"},null,40,L6),d("input",{value:((I=s.value.content)==null?void 0:I.color)||"#000",class:"input",onInput:u[25]||(u[25]=se=>l({color:se.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,V6)])]),d("div",$6,[u[113]||(u[113]=d("label",{class:"form-label"},"Line Height",-1)),d("input",{type:"number",min:".8",max:"3",step:".1",value:((w=s.value.content)==null?void 0:w.lineHeight)??1.5,class:"input",onChange:u[26]||(u[26]=se=>l({lineHeight:+se.target.value}))},null,40,F6)]),d("div",U6,[d("div",z6,[u[115]||(u[115]=d("label",{class:"form-label"},"Case",-1)),d("select",{value:((X=s.value.content)==null?void 0:X.textTransform)||"none",class:"select",onChange:u[27]||(u[27]=se=>l({textTransform:se.target.value}))},[...u[114]||(u[114]=[d("option",{value:"none"},"Normal",-1),d("option",{value:"uppercase"},"UPPERCASE",-1),d("option",{value:"lowercase"},"lowercase",-1),d("option",{value:"capitalize"},"Capitalize",-1)])],40,B6)]),d("div",j6,[u[116]||(u[116]=d("label",{class:"form-label"},"Letter Spacing",-1)),d("input",{type:"number",step:".2",value:((oe=s.value.content)==null?void 0:oe.letterSpacing)??0,class:"input",onChange:u[28]||(u[28]=se=>l({letterSpacing:+se.target.value}))},null,40,q6)])])])):Re("",!0),s.value.type==="image"?(W(),Y("div",W6,[u[125]||(u[125]=d("div",{class:"panel-title"},"Image",-1)),d("div",H6,[u[118]||(u[118]=d("label",{class:"form-label"},"Source URL",-1)),d("input",{value:(J=s.value.content)==null?void 0:J.src,class:"input",placeholder:"https://...",onInput:u[29]||(u[29]=se=>l({src:se.target.value}))},null,40,G6)]),d("div",K6,[u[119]||(u[119]=d("label",{class:"form-label"},"Alt Text",-1)),d("input",{value:(ce=s.value.content)==null?void 0:ce.alt,class:"input",onInput:u[30]||(u[30]=se=>l({alt:se.target.value}))},null,40,Q6)]),d("div",J6,[u[121]||(u[121]=d("label",{class:"form-label"},"Object Fit",-1)),d("select",{value:((re=s.value.content)==null?void 0:re.objectFit)||"cover",class:"select",onChange:u[31]||(u[31]=se=>l({objectFit:se.target.value}))},[...u[120]||(u[120]=[d("option",{value:"cover"},"Cover",-1),d("option",{value:"contain"},"Contain",-1),d("option",{value:"fill"},"Fill",-1),d("option",{value:"none"},"None",-1)])],40,Y6)]),d("div",X6,[u[122]||(u[122]=d("label",{class:"form-label"},"Border Radius",-1)),d("input",{type:"number",min:"0",value:((_e=s.value.content)==null?void 0:_e.borderRadius)||0,class:"input",onChange:u[32]||(u[32]=se=>l({borderRadius:+se.target.value}))},null,40,Z6)]),d("div",e3,[d("div",t3,[u[123]||(u[123]=d("label",{class:"form-label"},"Border Width",-1)),d("input",{type:"number",min:"0",value:((ne=s.value.content)==null?void 0:ne.borderWidth)||0,class:"input",onChange:u[33]||(u[33]=se=>l({borderWidth:+se.target.value}))},null,40,n3)]),d("div",r3,[u[124]||(u[124]=d("label",{class:"form-label"},"Border Color",-1)),d("input",{type:"color",value:((ee=s.value.content)==null?void 0:ee.borderColor)||"#e2e8f0",class:"color-input-native",onInput:u[34]||(u[34]=se=>l({borderColor:se.target.value}))},null,40,i3)])])])):Re("",!0),s.value.type==="shape"?(W(),Y("div",s3,[u[133]||(u[133]=d("div",{class:"panel-title"},"Shape",-1)),d("div",o3,[u[127]||(u[127]=d("label",{class:"form-label"},"Type",-1)),d("select",{value:((de=s.value.content)==null?void 0:de.shapeType)||"rectangle",class:"select",onChange:u[35]||(u[35]=se=>l({shapeType:se.target.value}))},[...u[126]||(u[126]=[un('<option value="rectangle" data-v-51014b61>Rectangle</option><option value="circle" data-v-51014b61>Circle</option><option value="triangle" data-v-51014b61>Triangle</option><option value="star" data-v-51014b61>Star</option><option value="arrow" data-v-51014b61>Arrow</option><option value="diamond" data-v-51014b61>Diamond</option>',6)])],40,a3)]),d("div",l3,[u[128]||(u[128]=d("label",{class:"form-label"},"Fill Color",-1)),d("div",c3,[d("input",{type:"color",value:((pe=s.value.content)==null?void 0:pe.fillColor)||"#6c47ff",onInput:u[36]||(u[36]=se=>l({fillColor:se.target.value})),class:"color-input-native"},null,40,u3),d("input",{value:(($=s.value.content)==null?void 0:$.fillColor)||"#6c47ff",class:"input",onInput:u[37]||(u[37]=se=>l({fillColor:se.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,d3)])]),d("div",h3,[u[129]||(u[129]=d("label",{class:"form-label"},"Border Color",-1)),d("div",f3,[d("input",{type:"color",value:((le=s.value.content)==null?void 0:le.borderColor)||"transparent",onInput:u[38]||(u[38]=se=>l({borderColor:se.target.value})),class:"color-input-native"},null,40,p3),d("input",{value:((G=s.value.content)==null?void 0:G.borderColor)||"transparent",class:"input",onInput:u[39]||(u[39]=se=>l({borderColor:se.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,m3)])]),d("div",g3,[u[130]||(u[130]=d("label",{class:"form-label"},"Border Width",-1)),d("input",{type:"number",min:"0",value:((Z=s.value.content)==null?void 0:Z.borderWidth)||0,class:"input",onChange:u[40]||(u[40]=se=>l({borderWidth:+se.target.value}))},null,40,v3)]),d("div",y3,[u[131]||(u[131]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((ge=s.value.content)==null?void 0:ge.borderRadius)||0,class:"input",onChange:u[41]||(u[41]=se=>l({borderRadius:+se.target.value}))},null,40,_3)]),d("div",b3,[u[132]||(u[132]=d("label",{class:"form-label"},"Fill Opacity",-1)),d("input",{type:"number",min:"0",max:"1",step:".05",value:((Ie=s.value.content)==null?void 0:Ie.opacity)??1,class:"input",onChange:u[42]||(u[42]=se=>l({opacity:+se.target.value}))},null,40,w3)])])):Re("",!0),s.value.type==="button"?(W(),Y("div",E3,[u[149]||(u[149]=d("div",{class:"panel-title"},"Button",-1)),d("div",I3,[u[134]||(u[134]=d("label",{class:"form-label"},"Label",-1)),d("input",{value:(ke=s.value.content)==null?void 0:ke.label,class:"input",onInput:u[43]||(u[43]=se=>l({label:se.target.value}))},null,40,T3)]),d("div",C3,[u[136]||(u[136]=d("label",{class:"form-label"},"Style",-1)),d("select",{value:((z=s.value.content)==null?void 0:z.variant)||"primary",class:"select",onChange:u[44]||(u[44]=se=>l({variant:se.target.value}))},[...u[135]||(u[135]=[un('<option value="primary" data-v-51014b61>Primary</option><option value="secondary" data-v-51014b61>Secondary</option><option value="outline" data-v-51014b61>Outline</option><option value="ghost" data-v-51014b61>Ghost</option><option value="danger" data-v-51014b61>Danger</option>',5)])],40,x3)]),d("div",k3,[u[138]||(u[138]=d("label",{class:"form-label"},"Action",-1)),d("select",{value:((H=s.value.content)==null?void 0:H.action)||"none",class:"select",onChange:u[45]||(u[45]=se=>l({action:se.target.value}))},[...u[137]||(u[137]=[d("option",{value:"none"},"None",-1),d("option",{value:"navigate"},"Navigate to slide",-1),d("option",{value:"link"},"Open URL",-1),d("option",{value:"submit"},"Submit",-1)])],40,S3)]),(v=s.value.content)!=null&&v.action&&s.value.content.action!=="none"?(W(),Y("div",A3,[u[139]||(u[139]=d("label",{class:"form-label"},"Target (slide # or URL)",-1)),d("input",{value:(K=s.value.content)==null?void 0:K.target,class:"input",placeholder:"Slide # or https://...",onInput:u[46]||(u[46]=se=>l({target:se.target.value}))},null,40,R3)])):Re("",!0),d("div",P3,[d("div",N3,[u[140]||(u[140]=d("label",{class:"form-label"},"Background",-1)),d("input",{type:"color",value:((q=s.value.content)==null?void 0:q.bgColor)||"#6c47ff",class:"color-input-native",onInput:u[47]||(u[47]=se=>l({bgColor:se.target.value}))},null,40,O3)]),d("div",D3,[u[141]||(u[141]=d("label",{class:"form-label"},"Text Color",-1)),d("input",{type:"color",value:((N=s.value.content)==null?void 0:N.textColor)||"#ffffff",class:"color-input-native",onInput:u[48]||(u[48]=se=>l({textColor:se.target.value}))},null,40,M3)])]),d("div",L3,[d("div",V3,[u[142]||(u[142]=d("label",{class:"form-label"},"Border Color",-1)),d("input",{type:"color",value:((D=s.value.content)==null?void 0:D.borderColor)||"#6c47ff",class:"color-input-native",onInput:u[49]||(u[49]=se=>l({borderColor:se.target.value}))},null,40,$3)]),d("div",F3,[u[143]||(u[143]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((B=s.value.content)==null?void 0:B.borderRadius)??8,class:"input",onChange:u[50]||(u[50]=se=>l({borderRadius:+se.target.value}))},null,40,U3)])]),d("div",z3,[d("div",B3,[u[144]||(u[144]=d("label",{class:"form-label"},"Font Size",-1)),d("input",{type:"number",min:"10",value:((U=s.value.content)==null?void 0:U.fontSize)??15,class:"input",onChange:u[51]||(u[51]=se=>l({fontSize:+se.target.value}))},null,40,j3)]),d("div",q3,[u[146]||(u[146]=d("label",{class:"form-label"},"Weight",-1)),d("select",{value:String(((k=s.value.content)==null?void 0:k.fontWeight)??600),class:"select",onChange:u[52]||(u[52]=se=>l({fontWeight:+se.target.value}))},[...u[145]||(u[145]=[d("option",{value:"400"},"Normal",-1),d("option",{value:"500"},"Medium",-1),d("option",{value:"600"},"Semi-bold",-1),d("option",{value:"700"},"Bold",-1)])],40,W3)])]),d("div",H3,[d("div",G3,[u[147]||(u[147]=d("label",{class:"form-label"},"Font Family",-1)),d("select",{value:((j=s.value.content)==null?void 0:j.fontFamily)||"Inter, sans-serif",class:"select",onChange:u[53]||(u[53]=se=>l({fontFamily:se.target.value}))},[(W(),Y(De,null,it(g,se=>d("option",{key:`btn-${se}`,value:se},ye(se.split(",")[0]),9,Q3)),64))],40,K3)]),d("div",J3,[u[148]||(u[148]=d("label",{class:"form-label"},"Letter Spacing",-1)),d("input",{type:"number",step:".2",value:((te=s.value.content)==null?void 0:te.letterSpacing)??0,class:"input",onChange:u[54]||(u[54]=se=>l({letterSpacing:+se.target.value}))},null,40,Y3)])])])):Re("",!0),s.value.type==="hotspot"?(W(),Y("div",X3,[u[159]||(u[159]=d("div",{class:"panel-title"},"Hotspot",-1)),d("div",Z3,[u[151]||(u[151]=d("label",{class:"form-label"},"Icon",-1)),d("select",{value:((ae=s.value.content)==null?void 0:ae.icon)||"?",class:"select",onChange:u[55]||(u[55]=se=>l({icon:se.target.value}))},[...u[150]||(u[150]=[un('<option value="?" data-v-51014b61>? (Info)</option><option value="!" data-v-51014b61>! (Alert)</option><option value="+" data-v-51014b61>+ (Plus)</option><option value="i" data-v-51014b61>i (Info)</option><option value="✦" data-v-51014b61>✦ (Star)</option>',5)])],40,eN)]),d("div",tN,[u[152]||(u[152]=d("label",{class:"form-label"},"Background Color",-1)),d("div",nN,[d("input",{type:"color",value:((fe=s.value.content)==null?void 0:fe.bgColor)||"#6c47ff",onInput:u[56]||(u[56]=se=>l({bgColor:se.target.value})),class:"color-input-native"},null,40,rN),d("input",{value:((Ee=s.value.content)==null?void 0:Ee.bgColor)||"#6c47ff",class:"input",onInput:u[57]||(u[57]=se=>l({bgColor:se.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,iN)])]),d("div",sN,[d("div",oN,[u[153]||(u[153]=d("label",{class:"form-label"},"Icon Color",-1)),d("input",{type:"color",value:((Pe=s.value.content)==null?void 0:Pe.iconColor)||"#ffffff",class:"color-input-native",onInput:u[58]||(u[58]=se=>l({iconColor:se.target.value}))},null,40,aN)]),d("div",lN,[u[154]||(u[154]=d("label",{class:"form-label"},"Corner Radius",-1)),d("input",{type:"number",min:"0",value:((he=s.value.content)==null?void 0:he.borderRadius)??999,class:"input",onChange:u[59]||(u[59]=se=>l({borderRadius:+se.target.value}))},null,40,cN)])]),d("div",uN,[u[155]||(u[155]=d("label",{class:"form-label"},"Popup Title",-1)),d("input",{value:(Be=s.value.content)==null?void 0:Be.popupTitle,class:"input",onInput:u[60]||(u[60]=se=>l({popupTitle:se.target.value}))},null,40,dN)]),d("div",hN,[u[156]||(u[156]=d("label",{class:"form-label"},"Popup Content",-1)),d("textarea",{value:(rt=s.value.content)==null?void 0:rt.popupContent,class:"textarea",onInput:u[61]||(u[61]=se=>l({popupContent:se.target.value}))},null,40,fN)]),d("div",pN,[d("div",mN,[u[157]||(u[157]=d("label",{class:"form-label"},"Popup Background",-1)),d("input",{type:"color",value:((Ke=s.value.content)==null?void 0:Ke.popupBgColor)||"#ffffff",class:"color-input-native",onInput:u[62]||(u[62]=se=>l({popupBgColor:se.target.value}))},null,40,gN)]),d("div",vN,[u[158]||(u[158]=d("label",{class:"form-label"},"Popup Text",-1)),d("input",{type:"color",value:((yt=s.value.content)==null?void 0:yt.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:u[63]||(u[63]=se=>l({popupTextColor:se.target.value}))},null,40,yN)])])])):Re("",!0),s.value.type==="video"?(W(),Y("div",_N,[u[168]||(u[168]=d("div",{class:"panel-title"},"Video",-1)),d("div",bN,[u[160]||(u[160]=d("label",{class:"form-label"},"Video URL / Embed",-1)),d("input",{value:(Ge=s.value.content)==null?void 0:Ge.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:u[64]||(u[64]=se=>l({src:se.target.value}))},null,40,wN)]),d("div",EN,[u[161]||(u[161]=d("label",{class:"form-label"},"Poster Image URL",-1)),d("input",{value:(Jt=s.value.content)==null?void 0:Jt.poster,class:"input",onInput:u[65]||(u[65]=se=>l({poster:se.target.value}))},null,40,IN)]),d("div",TN,[u[163]||(u[163]=d("label",{class:"form-label"},"Object Fit",-1)),d("select",{value:((tt=s.value.content)==null?void 0:tt.objectFit)||"cover",class:"select",onChange:u[66]||(u[66]=se=>l({objectFit:se.target.value}))},[...u[162]||(u[162]=[d("option",{value:"cover"},"Cover",-1),d("option",{value:"contain"},"Contain",-1),d("option",{value:"fill"},"Fill",-1),d("option",{value:"none"},"None",-1)])],40,CN)]),d("label",xN,[d("input",{type:"checkbox",checked:(Ze=s.value.content)==null?void 0:Ze.autoplay,onChange:u[67]||(u[67]=se=>l({autoplay:se.target.checked}))},null,40,kN),u[164]||(u[164]=Oe(" Autoplay ",-1))]),d("label",SN,[d("input",{type:"checkbox",checked:((Tt=s.value.content)==null?void 0:Tt.controls)??!0,onChange:u[68]||(u[68]=se=>l({controls:se.target.checked}))},null,40,AN),u[165]||(u[165]=Oe(" Show Controls ",-1))]),d("label",RN,[d("input",{type:"checkbox",checked:(Te=s.value.content)==null?void 0:Te.loop,onChange:u[69]||(u[69]=se=>l({loop:se.target.checked}))},null,40,PN),u[166]||(u[166]=Oe(" Loop ",-1))]),d("label",NN,[d("input",{type:"checkbox",checked:(ie=s.value.content)==null?void 0:ie.muted,onChange:u[70]||(u[70]=se=>l({muted:se.target.checked}))},null,40,ON),u[167]||(u[167]=Oe(" Muted ",-1))])])):Re("",!0),s.value.type==="audio"?(W(),Y("div",DN,[u[177]||(u[177]=d("div",{class:"panel-title"},"Audio",-1)),d("div",MN,[u[169]||(u[169]=d("label",{class:"form-label"},"Audio URL",-1)),d("input",{value:(Qe=s.value.content)==null?void 0:Qe.src,class:"input",placeholder:".mp3 / .wav URL",onInput:u[71]||(u[71]=se=>l({src:se.target.value}))},null,40,LN)]),d("div",VN,[u[170]||(u[170]=d("label",{class:"form-label"},"Label",-1)),d("input",{value:(Rt=s.value.content)==null?void 0:Rt.label,class:"input",onInput:u[72]||(u[72]=se=>l({label:se.target.value}))},null,40,$N)]),d("label",FN,[d("input",{type:"checkbox",checked:(xe=s.value.content)==null?void 0:xe.autoplay,onChange:u[73]||(u[73]=se=>l({autoplay:se.target.checked}))},null,40,UN),u[171]||(u[171]=Oe(" Autoplay ",-1))]),d("label",zN,[d("input",{type:"checkbox",checked:((Ct=s.value.content)==null?void 0:Ct.controls)!==!1,onChange:u[74]||(u[74]=se=>l({controls:se.target.checked}))},null,40,BN),u[172]||(u[172]=Oe(" Show Controls ",-1))]),d("label",jN,[d("input",{type:"checkbox",checked:(nr=s.value.content)==null?void 0:nr.loop,onChange:u[75]||(u[75]=se=>l({loop:se.target.checked}))},null,40,qN),u[173]||(u[173]=Oe(" Loop ",-1))]),d("div",WN,[d("div",HN,[u[174]||(u[174]=d("label",{class:"form-label"},"Accent Color",-1)),d("input",{type:"color",value:((Rr=s.value.content)==null?void 0:Rr.accentColor)||"#6c47ff",class:"color-input-native",onInput:u[76]||(u[76]=se=>l({accentColor:se.target.value}))},null,40,GN)]),d("div",KN,[u[175]||(u[175]=d("label",{class:"form-label"},"Text Color",-1)),d("input",{type:"color",value:((ia=s.value.content)==null?void 0:ia.textColor)||"#555555",class:"color-input-native",onInput:u[77]||(u[77]=se=>l({textColor:se.target.value}))},null,40,QN)])]),d("div",JN,[u[176]||(u[176]=d("label",{class:"form-label"},"Background Color",-1)),d("input",{type:"color",value:((sa=s.value.content)==null?void 0:sa.bgColor)||"#ede7ff",class:"color-input-native",onInput:u[78]||(u[78]=se=>l({bgColor:se.target.value}))},null,40,YN)])])):Re("",!0),s.value.type==="quiz"?(W(),Y("div",XN,[u[185]||(u[185]=d("div",{class:"panel-title"},"Quiz Question",-1)),d("div",ZN,[u[178]||(u[178]=d("label",{class:"form-label"},"Question",-1)),d("textarea",{value:(rr=s.value.content)==null?void 0:rr.question,class:"textarea",style:{"min-height":"60px"},onInput:u[79]||(u[79]=se=>l({question:se.target.value}))},null,40,eO)]),d("div",tO,[u[179]||(u[179]=d("label",{class:"form-label"},"Options (one per line)",-1)),d("textarea",{value:(aa=(oa=s.value.content)==null?void 0:oa.options)==null?void 0:aa.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:u[80]||(u[80]=se=>l({options:se.target.value.split(`
`).filter(Boolean)}))},null,40,nO)]),d("div",rO,[u[180]||(u[180]=d("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),d("input",{type:"number",min:"0",value:((fi=s.value.content)==null?void 0:fi.correctIndex)??0,class:"input",onChange:u[81]||(u[81]=se=>l({correctIndex:+se.target.value}))},null,40,iO)]),d("div",sO,[u[181]||(u[181]=d("label",{class:"form-label"},"Explanation",-1)),d("textarea",{value:(Ns=s.value.content)==null?void 0:Ns.explanation,class:"textarea",onInput:u[82]||(u[82]=se=>l({explanation:se.target.value}))},null,40,oO)]),d("div",aO,[d("div",lO,[u[182]||(u[182]=d("label",{class:"form-label"},"Card Background",-1)),d("input",{type:"color",value:((Os=s.value.content)==null?void 0:Os.cardBgColor)||"#ffffff",class:"color-input-native",onInput:u[83]||(u[83]=se=>l({cardBgColor:se.target.value}))},null,40,cO)]),d("div",uO,[u[183]||(u[183]=d("label",{class:"form-label"},"Question Color",-1)),d("input",{type:"color",value:((qi=s.value.content)==null?void 0:qi.questionColor)||"#1a1a2e",class:"color-input-native",onInput:u[84]||(u[84]=se=>l({questionColor:se.target.value}))},null,40,dO)])]),d("div",hO,[u[184]||(u[184]=d("label",{class:"form-label"},"Accent Color",-1)),d("input",{type:"color",value:((Pr=s.value.content)==null?void 0:Pr.accentColor)||"#6c47ff",class:"color-input-native",onInput:u[85]||(u[85]=se=>l({accentColor:se.target.value}))},null,40,fO)])])):Re("",!0),d("div",pO,[u[189]||(u[189]=d("div",{class:"panel-title"},"Actions",-1)),d("div",mO,[d("button",{class:"btn btn-secondary btn-sm w-full",onClick:u[86]||(u[86]=se=>be(n).duplicateElement(be(e).projectId,be(e).currentSlideId,s.value.id))},[...u[186]||(u[186]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),d("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),Oe(" Duplicate ",-1)])]),d("button",{class:"btn btn-secondary btn-sm w-full",onClick:u[87]||(u[87]=se=>{be(e).showInteractionEditor=!0,be(e).interactionElementId=s.value.id})},[...u[187]||(u[187]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Oe(" Interactions ",-1)])]),d("button",{class:"btn btn-danger btn-sm w-full",onClick:u[88]||(u[88]=se=>{be(n).deleteElement(be(e).projectId,be(e).currentSlideId,s.value.id),be(e).clearSelection()})},[...u[188]||(u[188]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polyline",{points:"3 6 5 6 21 6"}),d("path",{d:"M19 6l-1 14H6L5 6"}),d("path",{d:"M9 6V4h6v2"})],-1),Oe(" Delete Element ",-1)])])])])],64)):(W(),Y(De,{key:0},[d("div",W5,[u[91]||(u[91]=d("div",{class:"panel-title"},"Slide Properties",-1)),d("div",H5,[u[89]||(u[89]=d("label",{class:"form-label"},"Title",-1)),ht(d("input",{"onUpdate:modelValue":u[0]||(u[0]=se=>f.value.title=se),class:"input",onInput:u[1]||(u[1]=se=>m("title",f.value.title))},null,544),[[Lt,f.value.title]])]),d("div",G5,[u[90]||(u[90]=d("label",{class:"form-label"},"Background",-1)),d("div",K5,[(W(),Y(De,null,it(["color","gradient","image"],se=>{var _t;return d("button",{key:se,class:Fe(["bg-type-btn",(((_t=i.value)==null?void 0:_t.backgroundType)||"color")===se&&"active"]),onClick:la=>p({backgroundType:se})},ye(se),11,Q5)}),64))]),(((E=i.value)==null?void 0:E.backgroundType)||"color")==="color"?(W(),Y("div",J5,[d("input",{type:"color",value:((T=i.value)==null?void 0:T.background)||"#ffffff",onInput:u[2]||(u[2]=se=>p({background:se.target.value})),class:"color-input-native"},null,40,Y5),d("input",{value:((S=i.value)==null?void 0:S.background)||"#ffffff",class:"input",onInput:u[3]||(u[3]=se=>p({background:se.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,X5)])):((M=i.value)==null?void 0:M.backgroundType)==="gradient"?ht((W(),Y("input",{key:1,"onUpdate:modelValue":u[4]||(u[4]=se=>f.value.backgroundGradient=se),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:u[5]||(u[5]=se=>p({backgroundGradient:f.value.backgroundGradient}))},null,544)),[[Lt,f.value.backgroundGradient]]):ht((W(),Y("input",{key:2,"onUpdate:modelValue":u[6]||(u[6]=se=>f.value.backgroundImage=se),class:"input",placeholder:"https://...",onInput:u[7]||(u[7]=se=>p({backgroundImage:f.value.backgroundImage}))},null,544)),[[Lt,f.value.backgroundImage]])])]),d("div",Z5,[u[92]||(u[92]=d("div",{class:"panel-title"},"Slide Notes",-1)),ht(d("textarea",{"onUpdate:modelValue":u[8]||(u[8]=se=>f.value.notes=se),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:u[9]||(u[9]=se=>m("notes",f.value.notes))},null,544),[[Lt,f.value.notes]])]),d("div",e6,[u[94]||(u[94]=d("div",{class:"panel-title"},"Transition",-1)),d("select",{value:((L=i.value)==null?void 0:L.transition)||"none",class:"select",onChange:u[10]||(u[10]=se=>p({transition:se.target.value}))},[...u[93]||(u[93]=[un('<option value="none" data-v-51014b61>None</option><option value="fade" data-v-51014b61>Fade</option><option value="slide" data-v-51014b61>Slide</option><option value="zoom" data-v-51014b61>Zoom</option><option value="flip" data-v-51014b61>Flip</option>',5)])],40,t6)])],64))])}}},vO=At(gO,[["__scopeId","data-v-51014b61"]]),yO={class:"editor-toolbar"},_O={class:"toolbar-group"},bO={class:"toolbar-group"},wO=["data-tooltip","onClick"],EO={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},IO={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},TO={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},CO={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},xO={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},kO={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},SO={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},AO={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},RO={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},PO={class:"tool-label"},NO={class:"toolbar-group"},OO={class:"toolbar-group"},DO={class:"toolbar-group"},MO={__name:"EditorToolbar",emits:["open-ai-project"],setup(t,{emit:e}){const n=e,r=In();pn();const i=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"}];function s(o){r.setActiveTool(o)}return(o,a)=>(W(),Y("div",yO,[d("div",_O,[d("button",{class:Fe(["tool-btn",be(r).activeTool==="select"&&"active"]),onClick:a[0]||(a[0]=l=>s("select")),"data-tooltip":"Select (V)"},[...a[7]||(a[7]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),d("span",{class:"tool-label"},"Select",-1)])],2)]),a[22]||(a[22]=d("div",{class:"toolbar-divider"},null,-1)),d("div",bO,[(W(),Y(De,null,it(i,l=>d("button",{key:l.id,class:Fe(["tool-btn",be(r).activeTool===l.id&&"active"]),"data-tooltip":l.tooltip,onClick:h=>s(l.id)},[l.icon==="text"?(W(),Y("svg",EO,[...a[8]||(a[8]=[d("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),d("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),d("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):l.icon==="heading"?(W(),Y("svg",IO,[...a[9]||(a[9]=[d("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):l.icon==="image"?(W(),Y("svg",TO,[...a[10]||(a[10]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),d("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):l.icon==="shape"?(W(),Y("svg",CO,[...a[11]||(a[11]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):l.icon==="button"?(W(),Y("svg",xO,[...a[12]||(a[12]=[d("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),d("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):l.icon==="hotspot"?(W(),Y("svg",kO,[...a[13]||(a[13]=[d("circle",{cx:"12",cy:"12",r:"10"},null,-1),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):l.icon==="video"?(W(),Y("svg",SO,[...a[14]||(a[14]=[d("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),d("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):l.icon==="audio"?(W(),Y("svg",AO,[...a[15]||(a[15]=[d("path",{d:"M9 18V5l12-2v13"},null,-1),d("circle",{cx:"6",cy:"18",r:"3"},null,-1),d("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):l.icon==="quiz"?(W(),Y("svg",RO,[...a[16]||(a[16]=[d("path",{d:"M9 11l3 3L22 4"},null,-1),d("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):Re("",!0),d("span",PO,ye(l.label),1)],10,wO)),64))]),a[23]||(a[23]=d("div",{class:"toolbar-divider"},null,-1)),d("div",NO,[d("button",{class:"tool-btn tool-btn-ai-project",onClick:a[1]||(a[1]=l=>n("open-ai-project")),"data-tooltip":"Create a new AI project"},[...a[17]||(a[17]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),d("span",{class:"tool-label"},"AI Project",-1)])])]),a[24]||(a[24]=d("div",{class:"toolbar-spacer"},null,-1)),d("div",OO,[d("button",{class:"tool-btn",onClick:a[2]||(a[2]=l=>be(r).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...a[18]||(a[18]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"11",cy:"11",r:"8"}),d("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),d("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),d("button",{class:"zoom-display",onClick:a[3]||(a[3]=l=>be(r).zoomReset())},ye(Math.round(be(r).zoomLevel*100))+"% ",1),d("button",{class:"tool-btn",onClick:a[4]||(a[4]=l=>be(r).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...a[19]||(a[19]=[un('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="11" cy="11" r="8" data-v-53bae632></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-53bae632></line><line x1="11" y1="8" x2="11" y2="14" data-v-53bae632></line><line x1="8" y1="11" x2="14" y2="11" data-v-53bae632></line></svg>',1)])])]),a[25]||(a[25]=d("div",{class:"toolbar-divider"},null,-1)),d("div",DO,[d("button",{class:Fe(["tool-btn",be(r).showGrid&&"active"]),onClick:a[5]||(a[5]=l=>be(r).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...a[20]||(a[20]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[d("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),d("button",{class:Fe(["tool-btn",be(r).snapToGrid&&"active"]),onClick:a[6]||(a[6]=l=>be(r).toggleSnap()),"data-tooltip":"Snap to grid"},[...a[21]||(a[21]=[un('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-53bae632><circle cx="5" cy="5" r="1" data-v-53bae632></circle><circle cx="12" cy="5" r="1" data-v-53bae632></circle><circle cx="19" cy="5" r="1" data-v-53bae632></circle><circle cx="5" cy="12" r="1" data-v-53bae632></circle><circle cx="12" cy="12" r="1" data-v-53bae632></circle><circle cx="19" cy="12" r="1" data-v-53bae632></circle><circle cx="5" cy="19" r="1" data-v-53bae632></circle><circle cx="12" cy="19" r="1" data-v-53bae632></circle><circle cx="19" cy="19" r="1" data-v-53bae632></circle></svg>',1)])],2)])]))}},LO=At(MO,[["__scopeId","data-v-53bae632"]]),VO=["onMousedown"],$O={key:1,class:"selection-border locked-border"},FO={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=In(),r=pn(),i=bn("canvasScale",ve(1)),s=Se(()=>n.projectId),o=Se(()=>n.currentSlideId),a=Se(()=>n.selectedElementIds.includes(e.element.id)),l=Se(()=>e.element.locked),h=Se(()=>e.element.visible!==!1);let f=!1,p=0,m=0,g=new Map;function _(oe){var re;if(l.value||oe.target.classList.contains("resize-handle"))return;const J=oe.ctrlKey||oe.metaKey||oe.shiftKey;a.value?J&&n.selectElement(e.element.id,!0):n.selectElement(e.element.id,J),n.setActiveTool("select"),f=!1,p=oe.clientX,m=oe.clientY,g.clear();const ce=(re=r.getProject(s.value))==null?void 0:re.slides.find(_e=>_e.id===o.value);ce&&n.selectedElementIds.forEach(_e=>{const ne=ce.elements.find(ee=>ee.id===_e);ne&&!ne.locked&&g.set(_e,{x:ne.x,y:ne.y})}),window.addEventListener("mousemove",u),window.addEventListener("mouseup",E),oe.stopPropagation()}function u(oe){const J=(oe.clientX-p)/i.value,ce=(oe.clientY-m)/i.value;!f&&(Math.abs(J)>3||Math.abs(ce)>3)&&(f=!0),f&&g.forEach((re,_e)=>{let ne=re.x+J,ee=re.y+ce;if(n.snapToGrid&&n.gridSize){const de=n.gridSize;ne=Math.round(ne/de)*de,ee=Math.round(ee/de)*de}r.updateElement(s.value,o.value,_e,{x:ne,y:ee})})}function E(oe){f||!(oe.ctrlKey||oe.metaKey||oe.shiftKey)&&n.selectedElementIds.length>1&&n.selectElement(e.element.id,!1),f=!1,window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",E)}const T=["n","ne","e","se","s","sw","w","nw"];let S=!1,M="",L=0,V=0,Q=0,P=0,A=0,C=0;function R(oe,J){l.value||(oe.stopPropagation(),oe.preventDefault(),S=!0,M=J,L=oe.clientX,V=oe.clientY,Q=e.element.width,P=e.element.height,A=e.element.x,C=e.element.y,window.addEventListener("mousemove",O),window.addEventListener("mouseup",b))}function O(oe){if(!S)return;const J=i.value,ce=(oe.clientX-L)/J,re=(oe.clientY-V)/J,_e=20;let ne=A,ee=C,de=Q,pe=P;if(M.includes("e")&&(de=Math.max(_e,Q+ce)),M.includes("s")&&(pe=Math.max(_e,P+re)),M.includes("w")){const $=Math.max(_e,Q-ce);ne=A+(Q-$),de=$}if(M.includes("n")){const $=Math.max(_e,P-re);ee=C+(P-$),pe=$}if(n.snapToGrid&&n.gridSize){const $=n.gridSize;de=Math.round(de/$)*$,pe=Math.round(pe/$)*$,ne=Math.round(ne/$)*$,ee=Math.round(ee/$)*$}r.updateElement(s.value,o.value,e.element.id,{x:ne,y:ee,width:de,height:pe})}function b(){S=!1,window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",b)}function I(){["text","heading"].includes(e.element.type)&&n.setRightPanel("properties")}const w=Se(()=>({position:"absolute",left:`${e.element.x}px`,top:`${e.element.y}px`,width:`${e.element.width}px`,height:`${e.element.height}px`,transform:`rotate(${e.element.rotation||0}deg)`,opacity:e.element.opacity??1,zIndex:e.element.zIndex||1,cursor:l.value?"not-allowed":"move",visibility:h.value?"visible":"hidden",userSelect:"none"}));function X(oe){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[oe]||"auto"}return(oe,J)=>(W(),Y("div",{class:Fe(["element-wrapper",a.value&&"selected",l.value&&"locked"]),style:je(w.value),onMousedown:_,onDblclick:I},[bu(oe.$slots,"default",{},void 0),a.value&&!l.value?(W(),Y(De,{key:0},[J[0]||(J[0]=d("div",{class:"selection-border"},null,-1)),(W(),Y(De,null,it(T,ce=>d("div",{key:ce,class:Fe(["resize-handle",`handle-${ce}`]),style:je({cursor:X(ce)}),onMousedown:Wt(re=>R(re,ce),["stop"])},null,46,VO)),64))],64)):Re("",!0),a.value&&l.value?(W(),Y("div",$O)):Re("",!0)],38))}},UO=At(FO,[["__scopeId","data-v-2b4aa1b3"]]),zO=["contenteditable"],hu={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=In(),i=pn(),s=ve(!1),o=ve(null),a=ve("");Kt(()=>n.value.text,m=>{s.value||(a.value=m||(e.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function l(){r.selectedElementId===e.element.id&&(s.value=!0,qo(()=>{if(o.value){o.value.focus();const m=document.createRange();m.selectNodeContents(o.value),m.collapse(!1);const g=window.getSelection();g.removeAllRanges(),g.addRange(m)}}))}function h(m){}function f(m){s.value&&m.stopPropagation()}function p(){if(s.value=!1,o.value){const m=o.value.innerText;a.value=m,i.updateElement(r.projectId,r.currentSlideId,e.element.id,{content:{...e.element.content,text:m}})}}return(m,g)=>(W(),Y("div",{class:"text-element",ref_key:"textRef",ref:o,contenteditable:s.value,onDblclick:l,onBlur:p,onInput:h,onMousedown:f,style:je({fontSize:(n.value.fontSize||16)+"px",fontFamily:n.value.fontFamily||"Inter, sans-serif",fontWeight:n.value.fontWeight||"normal",fontStyle:n.value.fontStyle||"normal",textDecoration:n.value.textDecoration||"none",textAlign:n.value.textAlign||"left",color:n.value.color||"#1a1a2e",lineHeight:n.value.lineHeight||1.5,textTransform:n.value.textTransform||"none",letterSpacing:(n.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:s.value?"2px solid var(--primary)":"none",cursor:s.value?"text":"inherit",userSelect:s.value?"text":"none"})},ye(a.value),45,zO))}},BO=["src","alt"],jO={key:1,class:"image-placeholder"},qO={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},WO={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o;return W(),Y("div",{class:"image-element",style:je({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((r=t.element.content)==null?void 0:r.borderRadius)||0)+"px",border:`${((i=t.element.content)==null?void 0:i.borderWidth)||0}px solid ${((s=t.element.content)==null?void 0:s.borderColor)||"transparent"}`})},[(o=t.element.content)!=null&&o.src?(W(),Y("img",{key:0,src:t.element.content.src,alt:t.element.content.alt||"",style:je({width:"100%",height:"100%",objectFit:t.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,BO)):(W(),Y("div",jO,[(W(),Y("svg",qO,[...n[0]||(n[0]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),d("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),n[1]||(n[1]=d("span",null,"Image",-1))]))],4)}}},HO=At(WO,[["__scopeId","data-v-401e9ff3"]]),GO={class:"shape-element",style:{width:"100%",height:"100%"}},KO=["width","height"],QO=["points","fill","stroke","stroke-width"],JO={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const o=n.value.shapeType||"rectangle",a={width:"100%",height:"100%",background:n.value.fillColor||"#6c47ff",border:`${n.value.borderWidth||0}px solid ${n.value.borderColor||"transparent"}`,opacity:n.value.opacity??1};return o==="circle"?{...a,borderRadius:"50%"}:o==="rectangle"?{...a,borderRadius:(n.value.borderRadius||0)+"px"}:a}),i=Se(()=>["triangle","star","arrow","diamond"].includes(n.value.shapeType)),s=Se(()=>{const o=e.element.width||150,a=e.element.height||100,l=n.value.shapeType;if(l==="triangle")return`${o/2},0 ${o},${a} 0,${a}`;if(l==="diamond")return`${o/2},0 ${o},${a/2} ${o/2},${a} 0,${a/2}`;if(l==="arrow")return`0,${a*.3} ${o*.6},${a*.3} ${o*.6},0 ${o},${a/2} ${o*.6},${a} ${o*.6},${a*.7} 0,${a*.7}`;if(l==="star"){const h=o/2,f=a/2,p=Math.min(o,a)/2,m=p*.4;let g="";for(let _=0;_<10;_++){const u=(_*36-90)*Math.PI/180,E=_%2===0?p:m;g+=`${h+E*Math.cos(u)},${f+E*Math.sin(u)} `}return g.trim()}return""});return(o,a)=>(W(),Y("div",GO,[i.value?(W(),Y("svg",{key:1,width:t.element.width,height:t.element.height,style:{display:"block",overflow:"visible"}},[d("polygon",{points:s.value,fill:n.value.fillColor||"#6c47ff",stroke:n.value.borderColor||"none","stroke-width":n.value.borderWidth||0},null,8,QO)],8,KO)):(W(),Y("div",{key:0,style:je(r.value)},null,4))]))}},YO={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const i={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},s=i[n.value.variant||"primary"]||i.primary;return{...s,background:n.value.bgColor||s.background,color:n.value.textColor||s.color,border:n.value.borderColor?`1px solid ${n.value.borderColor}`:s.border,borderRadius:(n.value.borderRadius??8)+"px"}});return(i,s)=>(W(),Y("div",{class:"button-element",style:je({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(n.value.fontSize??15)+"px",fontWeight:n.value.fontWeight??600,letterSpacing:(n.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:n.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...r.value})},ye(n.value.label||"Button"),5))}},XO={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},ZO={class:"popup-header"},eD={class:"popup-body"},tD={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=ve(!1);function i(s){s.stopPropagation(),r.value=!r.value}return(s,o)=>(W(),Y("div",XO,[d("div",{class:"hotspot-btn",style:je({width:"100%",height:"100%",background:n.value.bgColor||"#6c47ff",borderRadius:(n.value.borderRadius??999)>=999?"50%":(n.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:n.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Wt(i,["stop"])},ye(n.value.icon||"?"),5),pt(gr,{name:"fade"},{default:bt(()=>[r.value?(W(),Y("div",{key:0,class:"hotspot-popup",style:je({background:n.value.popupBgColor||"#ffffff",color:n.value.popupTextColor||"#1a1a2e"})},[d("div",ZO,[d("strong",null,ye(n.value.popupTitle||"Info"),1),d("button",{class:"popup-close",onClick:o[0]||(o[0]=Wt(a=>r.value=!1,["stop"]))},"×")]),d("div",eD,ye(n.value.popupContent||"Add your content in the properties panel."),1)],4)):Re("",!0)]),_:1})]))}},nD=At(tD,[["__scopeId","data-v-ef5f15f6"]]),rD={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},iD=["src"],sD=["src","poster","autoplay","controls","loop","muted"],oD={key:2,class:"video-placeholder"},aD={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},lD={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=Se(()=>{const s=n.value.src||"";return s.includes("youtube")||s.includes("youtu.be")}),i=Se(()=>{var o,a;const s=n.value.src||"";if(r.value){const l=(o=s.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:o[1];return l?`https://www.youtube.com/embed/${l}`:""}if(s.includes("vimeo.com")){const l=(a=s.match(/vimeo\.com\/(\d+)/))==null?void 0:a[1];return l?`https://player.vimeo.com/video/${l}`:""}return""});return(s,o)=>(W(),Y("div",rD,[i.value?(W(),Y("iframe",{key:0,src:i.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,iD)):n.value.src&&!i.value?(W(),Y("video",{key:1,src:n.value.src,poster:n.value.poster,autoplay:n.value.autoplay,controls:n.value.controls!==!1,loop:n.value.loop,muted:n.value.muted,style:je({width:"100%",height:"100%",objectFit:n.value.objectFit||"cover"})},null,12,sD)):(W(),Y("div",oD,[(W(),Y("svg",aD,[...o[0]||(o[0]=[d("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),d("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),o[1]||(o[1]=d("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},cD=At(lD,[["__scopeId","data-v-dfea1a16"]]),uD=["stroke"],dD=["src","controls","autoplay","loop"],hD={key:1,style:{"font-size":"11px",color:"#aaa"}},fD={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(t){return(e,n)=>{var r,i,s,o,a,l,h,f,p;return W(),Y("div",{class:"audio-element",style:je({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((r=t.element.content)==null?void 0:r.bgColor)||"#ede7ff",border:`1px solid ${((i=t.element.content)==null?void 0:i.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(W(),Y("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((s=t.element.content)==null?void 0:s.accentColor)||"#6c47ff","stroke-width":"2"},[...n[1]||(n[1]=[d("path",{d:"M9 18V5l12-2v13"},null,-1),d("circle",{cx:"6",cy:"18",r:"3"},null,-1),d("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,uD)),d("span",{style:je({fontSize:"13px",color:((o=t.element.content)==null?void 0:o.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},ye(((a=t.element.content)==null?void 0:a.label)||"Audio Player"),5),(l=t.element.content)!=null&&l.src?(W(),Y("audio",{key:0,src:t.element.content.src,controls:((h=t.element.content)==null?void 0:h.controls)!==!1,autoplay:(f=t.element.content)==null?void 0:f.autoplay,loop:(p=t.element.content)==null?void 0:p.loop,style:{height:"28px","max-width":"180px"},onMousedown:n[0]||(n[0]=Wt(()=>{},["stop"]))},null,40,dD)):(W(),Y("span",hD,"No source"))],4)}}},pD={class:"quiz-options"},mD=["onClick"],gD={class:"opt-letter"},vD={class:"opt-text"},yD={key:0},_D={class:"quiz-actions"},bD=["disabled"],wD={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(t){const e=t,n=Se(()=>e.element.content||{}),r=ve(null),i=ve(!1);function s(h){i.value||(r.value=h)}function o(){r.value!==null&&(i.value=!0)}function a(){r.value=null,i.value=!1}const l=Se(()=>i.value&&r.value===(n.value.correctIndex??0));return(h,f)=>(W(),Y("div",{class:"quiz-element",style:je({width:"100%",height:"100%",background:n.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":n.value.accentColor||"#6c47ff"})},[d("p",{style:je({fontSize:"15px",fontWeight:600,color:n.value.questionColor||"#1a1a2e",lineHeight:1.4})},ye(n.value.question||"Question text…"),5),d("div",pD,[(W(!0),Y(De,null,it(n.value.options||[],(p,m)=>(W(),Y("div",{key:m,class:Fe(["quiz-opt",r.value===m&&"selected",i.value&&m===n.value.correctIndex&&"correct",i.value&&r.value===m&&m!==n.value.correctIndex&&"wrong"]),onClick:g=>s(m)},[d("span",gD,ye(String.fromCharCode(65+m)),1),d("span",vD,ye(p),1)],10,mD))),128))]),i.value?(W(),Y("div",{key:0,class:Fe(["quiz-feedback",l.value?"correct":"wrong"])},[Oe(ye(l.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!l.value&&n.value.explanation?(W(),Y("span",yD,ye(n.value.explanation),1)):Re("",!0)],2)):Re("",!0),d("div",_D,[i.value?(W(),Y("button",{key:1,class:"quiz-btn secondary",onClick:a},"Try Again")):(W(),Y("button",{key:0,class:"quiz-btn primary",disabled:r.value===null,onClick:o},"Submit",8,bD))])],4))}},ED=At(wD,[["__scopeId","data-v-ca2bd187"]]),ID={key:0,class:"canvas-empty"},TD={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},CD={key:0,class:"drop-hint"},xD={class:"canvas-info-bar"},kD=["disabled"],SD={class:"slide-index"},AD=["disabled"],RD={key:0},Aa=960,Ra=540,PD={__name:"EditorCanvas",setup(t){const e=In(),n=pn(),r=ve(null),i=ve(null),s=ve(1);oo("canvasScale",s);const o=Se(()=>n.getProject(e.projectId)),a=Se(()=>{var $,le;return(le=($=o.value)==null?void 0:$.slides)==null?void 0:le.find(G=>G.id===e.currentSlideId)}),l=Se(()=>{var $;return[...(($=o.value)==null?void 0:$.slides)||[]].sort((le,G)=>le.order-G.order)}),h=Se(()=>l.value.findIndex($=>$.id===e.currentSlideId)),f=Se(()=>{var $;return[...(($=a.value)==null?void 0:$.elements)||[]].sort((le,G)=>(le.zIndex||0)-(G.zIndex||0))}),p=Se(()=>{const $=a.value;return $?$.backgroundType==="gradient"&&$.backgroundGradient?{background:$.backgroundGradient}:$.backgroundType==="image"&&$.backgroundImage?{backgroundImage:`url(${$.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:$.background||"#fff"}:{background:"#fff"}}),m=Se(()=>`scale(${e.zoomLevel})`);function g(){if(!r.value)return;const{clientWidth:$,clientHeight:le}=r.value,G=($-80)/Aa,Z=(le-80)/Ra;s.value=Math.min(G,Z)}let _=null;Wo(()=>{g(),_=new ResizeObserver(g),r.value&&_.observe(r.value)}),Ho(()=>_==null?void 0:_.disconnect());const u=ve({x:0,y:0}),E=ve({x:0,y:0}),T=ve(!1),S=ve(!1),M=Se(()=>{if(!T.value)return null;const $=Math.min(u.value.x,E.value.x),le=Math.min(u.value.y,E.value.y),G=Math.abs(E.value.x-u.value.x),Z=Math.abs(E.value.y-u.value.y);return{x:$,y:le,width:G,height:Z}});function L($){!T.value&&($.target===i.value||$.target===$.currentTarget)&&e.clearSelection()}function V($){return $?Array.from($.files||[]).some(le=>le.type.startsWith("image/")):!1}function Q($,le,G){if(!$||!$.type.startsWith("image/"))return;const Z=new FileReader;Z.onload=()=>{const ge=String(Z.result||"");if(!ge)return;const Ie=new Image;Ie.onload=()=>{const ke=i.value.getBoundingClientRect(),z=(le-ke.left)/e.zoomLevel,H=(G-ke.top)/e.zoomLevel,q=Math.min(420/Ie.width,280/Ie.height,1),N=Math.max(120,Math.round(Ie.width*q)),D=Math.max(80,Math.round(Ie.height*q)),B=Math.max(0,Math.min(Aa-N,Math.round(z-N/2))),U=Math.max(0,Math.min(Ra-D,Math.round(H-D/2))),k=n.addElement(e.projectId,e.currentSlideId,"image",{x:B,y:U,width:N,height:D,content:{src:ge,alt:$.name,objectFit:"cover"}});k&&(e.selectElement(k.id),e.setActiveTool("select"),e.setRightPanel("properties"))},Ie.src=ge},Z.readAsDataURL($)}function P($){V($.dataTransfer)&&($.preventDefault(),$.dataTransfer.dropEffect="copy",S.value=!0)}function A($){var le;(le=$.currentTarget)!=null&&le.contains($.relatedTarget)||(S.value=!1)}function C($){if(!V($.dataTransfer))return;$.preventDefault(),S.value=!1;const le=Array.from($.dataTransfer.files||[]).find(G=>G.type.startsWith("image/"));le&&Q(le,$.clientX,$.clientY)}function R($){const le=e.activeTool;if($.target!==i.value&&$.target!==$.currentTarget)return;$.preventDefault(),$.stopPropagation();const G=i.value.getBoundingClientRect(),Z=($.clientX-G.left)/e.zoomLevel,ge=($.clientY-G.top)/e.zoomLevel;if(le==="select"){T.value=!0,u.value={x:Z,y:ge},E.value={x:Z,y:ge};const z=v=>{E.value={x:(v.clientX-G.left)/e.zoomLevel,y:(v.clientY-G.top)/e.zoomLevel}},H=()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",H);const v=M.value;if(v&&(v.width>2||v.height>2)){const K=f.value.filter(q=>{const N=q.x,D=q.y,B=q.width||100,U=q.height||100;return N<v.x+v.width&&N+B>v.x&&D<v.y+v.height&&D+U>v.y}).map(q=>q.id);K.length>0?e.setSelection(K):e.clearSelection()}else e.clearSelection();setTimeout(()=>{T.value=!1},0)};window.addEventListener("mousemove",z),window.addEventListener("mouseup",H);return}const Ie=z=>e.snapToGrid?Math.round(z/e.gridSize)*e.gridSize:z,ke=n.addElement(e.projectId,e.currentSlideId,le,{x:Ie(Z-75),y:Ie(ge-40)});ke&&(e.selectElement(ke.id),e.setActiveTool("select"),e.setRightPanel("properties"))}const O=Se(()=>{if(!e.showGrid)return{};const $=e.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${$}px ${$}px`}}),b={text:hu,heading:hu,image:HO,shape:JO,button:YO,hotspot:nD,video:cD,audio:fD,quiz:ED,divider:"div"};function I($){return b[$]||hu}function w($){var le,G;return $.type!=="divider"?{}:{borderTop:`${((le=$.content)==null?void 0:le.thickness)||2}px solid ${((G=$.content)==null?void 0:G.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const X=ve({show:!1,x:0,y:0,elId:null});function oe($,le){$.preventDefault(),X.value={show:!0,x:$.clientX,y:$.clientY,elId:le},e.selectElement(le),setTimeout(()=>window.addEventListener("click",J,{once:!0}),0)}function J(){X.value.show=!1}function ce(){if(X.value.elId){const $=n.duplicateElement(e.projectId,e.currentSlideId,X.value.elId);$&&e.selectElement($.id)}J()}function re(){X.value.elId&&(n.deleteElement(e.projectId,e.currentSlideId,X.value.elId),e.clearSelection()),J()}function _e(){X.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,X.value.elId,"up"),J()}function ne(){X.value.elId&&n.reorderElement(e.projectId,e.currentSlideId,X.value.elId,"down"),J()}function ee(){const $=h.value,le=n.addSlide(e.projectId,$);le&&e.setCurrentSlide(le.id)}function de(){const $=h.value;$>0&&e.setCurrentSlide(l.value[$-1].id)}function pe(){const $=h.value;$<l.value.length-1&&e.setCurrentSlide(l.value[$+1].id)}return($,le)=>{var G;return W(),Y("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:r},[a.value?(W(),Y(De,{key:1},[d("div",{class:"canvas-zoom-wrapper",style:je({transform:m.value,transformOrigin:"center center",transition:"transform .15s ease"})},[d("div",{ref_key:"canvasRef",ref:i,class:"slide-canvas",style:je({width:Aa+"px",height:Ra+"px",...p.value,...O.value}),onClick:L,onMousedown:R,onDragover:P,onDragleave:A,onDrop:C,onContextmenu:le[0]||(le[0]=Wt(()=>{},["prevent"]))},[(W(!0),Y(De,null,it(f.value,Z=>(W(),at(UO,{key:Z.id,element:Z,onContextmenu:Wt(ge=>oe(ge,Z.id),["stop"])},{default:bt(()=>[(W(),at(sv(I(Z.type)),{element:Z,style:je(Z.type==="divider"?w(Z):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),be(e).activeTool!=="select"||S.value?(W(),Y("div",CD,ye(S.value?"Drop image to insert it on this slide":`Click anywhere to add ${be(e).activeTool}`),1)):Re("",!0),T.value&&M.value?(W(),Y("div",{key:1,class:"selection-marquee",style:je({left:M.value.x+"px",top:M.value.y+"px",width:M.value.width+"px",height:M.value.height+"px"})},null,4)):Re("",!0)],36)],4),d("div",xD,[d("button",{class:"bar-btn",onClick:ee},"Add page"),d("button",{class:"bar-btn icon",onClick:de,disabled:h.value<=0},"◀",8,kD),d("span",SD,ye(h.value+1)+" / "+ye(l.value.length),1),d("button",{class:"bar-btn icon",onClick:pe,disabled:h.value>=l.value.length-1},"▶",8,AD),d("span",null,ye(Aa)+" × "+ye(Ra)+"px"),le[4]||(le[4]=d("span",null,"·",-1)),d("span",null,ye(((G=a.value.elements)==null?void 0:G.length)||0)+" elements",1),be(e).hasSelection?(W(),Y("span",RD,"· "+ye(be(e).selectedElementIds.length)+" selected",1)):Re("",!0),d("button",{class:"bar-btn ai",onClick:le[1]||(le[1]=Z=>be(e).setRightPanel("ai"))},"AI")])],64)):(W(),Y("div",ID,[(W(),Y("svg",TD,[...le[2]||(le[2]=[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),le[3]||(le[3]=d("p",null,"Select a slide to start editing",-1))])),(W(),at(_d,{to:"body"},[X.value.show?(W(),Y("div",{key:0,class:"ctx-menu",style:je({left:X.value.x+"px",top:X.value.y+"px"})},[d("button",{class:"ctx-item",onClick:ce},"Duplicate"),d("button",{class:"ctx-item",onClick:_e},"Bring Forward"),d("button",{class:"ctx-item",onClick:ne},"Send Backward"),le[5]||(le[5]=d("div",{class:"ctx-divider"},null,-1)),d("button",{class:"ctx-item danger",onClick:re},"Delete")],4)):Re("",!0)]))],512)}}},ND=At(PD,[["__scopeId","data-v-47ef6b03"]]),OD={class:"ai-panel"},DD={class:"ai-mode-tabs"},MD=["onClick"],LD={class:"ai-content"},VD={class:"form-group"},$D={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},FD={key:0,class:"form-group"},UD={key:1,class:"form-group"},zD={class:"form-group"},BD={class:"form-group"},jD={class:"prompt-label-row"},qD={key:1,class:"prompt-auto-badge"},WD={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},HD=["disabled"],GD={key:0,class:"spinner"},KD={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},QD={key:3,class:"creative-options-wrap"},JD={class:"result-header"},YD={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},XD={key:1,class:"creative-options-list"},ZD={class:"creative-title"},eM={class:"creative-angle"},tM=["onClick"],nM={class:"form-group"},rM={class:"quiz-config-row"},iM={class:"form-group",style:{flex:"1"}},sM={class:"form-group",style:{flex:"1"}},oM={class:"form-group"},aM={class:"qtype-btns"},lM=["onClick"],cM={class:"qtype-icon"},uM={class:"form-group"},dM={class:"form-group"},hM={class:"prompt-label-row"},fM={key:1,class:"prompt-auto-badge"},pM=["disabled"],mM={key:0,class:"spinner"},gM={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},vM={key:0,class:"quiz-results"},yM={class:"quiz-results-header"},_M={class:"form-label"},bM={class:"quiz-header-actions"},wM={class:"regen-row"},EM=["disabled"],IM={key:0,class:"spinner spinner-sm"},TM={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},CM=["disabled"],xM={class:"quiz-card-header"},kM={class:"quiz-card-check"},SM=["onUpdate:modelValue"],AM={class:"q-num"},RM={class:"q-badges"},PM={class:"badge type-badge"},NM={class:"q-question"},OM={class:"q-options"},DM={class:"q-option-letter"},MM={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},LM={key:0,class:"q-explanation"},VM=["disabled"],$M={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},FM=["disabled"],UM={key:0,class:"spinner"},zM={key:0,class:"selected-text-preview"},BM={class:"text-preview"},jM={key:1,class:"ai-hint"},qM={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},WM=["disabled"],HM={key:0,class:"spinner"},GM={key:0,class:"selected-text-preview"},KM={class:"text-preview"},QM={key:1,class:"ai-hint"},JM={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},YM=["disabled"],XM={key:0,class:"spinner"},ZM={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},e8={class:"result-header"},t8={class:"result-actions"},n8=["disabled"],r8={class:"textarea result-display"},i8={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},s8=["disabled"],o8={key:0,class:"spinner"},a8={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},l8={class:"textarea result-display",style:{color:"var(--color-primary)"}},c8={key:6,class:"ai-settings"},u8={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},d8=["value"],h8={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},f8=["value"],p8={key:0,class:"demo-notice"},m8={key:7,class:"result-area"},g8={class:"result-header"},v8={class:"result-pre"},y8={class:"result-actions"},_8=["disabled"],b8={key:8,class:"ai-error"},w8={__name:"AIAssistant",setup(t){const e=W_(),n=In(),r=pn(),i=ve("generate"),s=ve(""),o=ve(""),a=ve("");Kt(i,()=>{a.value=""});const l=ve(4),h=ve("general"),f=ve("Spanish"),p=ve(""),m=ve(""),g=ve(""),_=ve(!1),u=ve("single"),E=ve(5),T=ve("slide"),S=ve([]),M=ve(""),L=Se(()=>{const U=o.value.trim()||"[your topic]";if(u.value==="deck"){let te=`Create a complete ${E.value}-slide learning deck about "${U}".`;return m.value.trim()&&(te+=`
Additional context: ${m.value.trim()}`),te+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,te+=`
Make each slide distinct, logically sequenced, and specific to "${U}".`,te}let j=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[h.value]||"educational slide"} about "${U}".`;return m.value.trim()&&(j+=`
Additional context: ${m.value.trim()}`),j+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${U}" — no generic placeholders.`,j});Kt(L,U=>{_.value||(g.value=U)},{immediate:!0});function V(){g.value=L.value,_.value=!1}const Q=ve(""),P=ve("intermediate"),A=ve("multiple-choice"),C=ve(""),R=ve([]),O=ve(""),b=ve(!1),I=Se(()=>{const U=Q.value.trim()||"[your topic]",k={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},j={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let te=`Generate ${l.value} ${k[P.value]} ${j[A.value]} quiz questions about "${U}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return C.value.trim()&&(te+=`
Learning objective: ${C.value.trim()}`),te});Kt(I,U=>{b.value||(O.value=U)},{immediate:!0});function w(){O.value=I.value,b.value=!1}const X=Se(()=>r.getProject(n.projectId)),oe=Se(()=>{var U,k;return(k=(U=X.value)==null?void 0:U.slides)==null?void 0:k.find(j=>j.id===n.currentSlideId)}),J=Se(()=>{var U,k;return n.selectedElementId?(k=(U=oe.value)==null?void 0:U.elements)==null?void 0:k.find(j=>j.id===n.selectedElementId):null});async function ce(){if(!o.value.trim()&&!g.value.trim())return;if(a.value="",S.value=[],M.value="",u.value==="deck"){const k=await e.generateSlideDeck(o.value,E.value,{objective:m.value,customPrompt:g.value});if(k!=null&&k.length){const j=k.map(te=>re(te));a.value=JSON.stringify({slides:j},null,2),de(j,{replaceGenerated:!0})}return}if(T.value==="options"){await le();return}const U=await e.generateSlideContent(o.value,h.value,m.value,g.value);if(U){const k=re(U);a.value=JSON.stringify(k,null,2),pe(k,{replaceGenerated:!0})}}function re(U){const k=U&&typeof U=="object"?U:{},te=(Array.isArray(k.bullets)?k.bullets:typeof k.bullets=="string"?k.bullets.split(`
`):[]).map(ae=>String(ae||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(k.title||o.value||"Untitled Slide").trim(),subtitle:String(k.subtitle||"").trim(),bullets:te,callout:String(k.callout||"").trim()}}function _e(U,k){var ae,fe,Ee;const j=(fe=(ae=r.getProject(U))==null?void 0:ae.slides)==null?void 0:fe.find(Pe=>Pe.id===k);if(!((Ee=j==null?void 0:j.elements)!=null&&Ee.length))return;j.elements.filter(Pe=>{var he;return((he=Pe.meta)==null?void 0:he.source)==="ai-content"}).map(Pe=>Pe.id).forEach(Pe=>{r.deleteElement(U,k,Pe)})}function ne(U,k,j,te){return r.addElement(U,k,j,{...te,meta:{...te.meta||{},source:"ai-content"}})}function ee(U,k,j,{replaceGenerated:te=!1}={}){var ae;if(!(!U||!k)){if(te&&_e(U,k),j.title&&(r.updateSlide(U,k,{title:j.title}),ne(U,k,"heading",{x:60,y:40,width:840,height:80,content:{text:j.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),j.subtitle&&ne(U,k,"text",{x:60,y:130,width:840,height:50,content:{text:j.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(ae=j.bullets)!=null&&ae.length){const fe=j.bullets.map(Ee=>`• ${Ee}`).join(`
`);ne(U,k,"text",{x:60,y:j.subtitle?200:150,width:840,height:200,content:{text:fe,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}j.callout&&(ne(U,k,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),ne(U,k,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${j.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function de(U,{replaceGenerated:k=!1}={}){if(!n.currentSlideId)return;const j=n.projectId;if(!j||!Array.isArray(U)||!U.length)return;U.map(ae=>re(ae)).forEach(ae=>{const fe=r.addSlide(j);fe&&ee(j,fe.id,ae,{replaceGenerated:k})})}function pe(U=null,{replaceGenerated:k=!1}={}){if(!n.currentSlideId)return;let j=U;if(!j){if(!a.value)return;try{j=JSON.parse(a.value)}catch(Ee){console.warn("Could not parse AI content:",Ee);return}}const te=re(j),ae=n.projectId,fe=n.currentSlideId;!ae||!fe||ee(ae,fe,te,{replaceGenerated:k})}function $(){if(a.value){if(u.value==="deck"){try{const U=JSON.parse(a.value),k=Array.isArray(U)?U:U==null?void 0:U.slides;if(!Array.isArray(k)||!k.length)return;de(k,{replaceGenerated:!0})}catch{return}return}pe()}}async function le(){const U=o.value.trim()||"[your topic]",k=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${h.value}" slide about "${U}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,j=await e.generate(k,{type:"creativeOptions",topic:U,slideType:h.value});if(j)try{const te=JSON.parse(j.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(te))throw new Error("Options must be an array");S.value=te.slice(0,3).map((ae,fe)=>({title:String((ae==null?void 0:ae.title)||`Option ${fe+1}`),angle:String((ae==null?void 0:ae.angle)||""),prompt:String((ae==null?void 0:ae.prompt)||"")})).filter(ae=>ae.prompt.trim()),S.value.length||(M.value="No usable creative options were returned. Try generating again.")}catch{M.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function G(U){U!=null&&U.prompt&&(g.value=U.prompt,_.value=!0,T.value="slide",await ce())}async function Z(U=!1){if(!Q.value.trim()&&!O.value.trim())return;U||(R.value=[]);const k=await e.generateQuiz(Q.value,l.value,{difficulty:P.value,questionType:A.value,objective:C.value,customPrompt:O.value});if(k)if(U){const j=new Set(R.value.map(ae=>ae.question)),te=k.filter(ae=>!j.has(ae.question)).map(ae=>({...ae,_selected:!0}));R.value=[...R.value,...te]}else R.value=k.map(j=>({...j,_selected:!0}))}async function ge(){const U=R.value.filter(j=>j._selected);if(!U.length)return;const k=n.projectId;U.forEach((j,te)=>{const ae=r.addSlide(k);ae&&(r.addElement(k,ae.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:j.question,options:j.options,correctIndex:j.correctIndex,explanation:j.explanation||""}}),r.updateSlide(k,ae.id,{title:`Q${te+1}: ${j.question.slice(0,40)}…`}))}),R.value=[]}function Ie(U){R.value.forEach(k=>k._selected=U)}async function ke(){if(!p.value.trim())return;const U=await e.generateVoiceoverScript(p.value);U&&(a.value=U)}async function z(){var j,te;const U=(te=(j=J.value)==null?void 0:j.content)==null?void 0:te.text;if(!U)return;const k=await e.generateTranslation(U,f.value);k&&(a.value=k)}async function H(){!a.value||!J.value||r.updateElement(n.projectId,n.currentSlideId,J.value.id,{content:{...J.value.content,text:a.value}})}const v=ve(""),K=ve(!1);async function q(){if(v.value.trim()){K.value=!0,a.value="Optimizing prompt...";try{let U=v.value;const k=await e.generateImagePrompt(v.value);k&&(U=k.replace(/```(json)?\n?/g,"").trim()),a.value="Painting image... this takes about 10-20 seconds. Please wait.";const j=Math.floor(Math.random()*1e6),te=`https://image.pollinations.ai/prompt/${encodeURIComponent(U)}?width=600&height=400&nologo=true&seed=${j}`;await new Promise((ae,fe)=>{const Ee=new Image;Ee.onload=ae,Ee.onerror=fe,Ee.src=te}),r.addElement(n.projectId,n.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:te,objectFit:"cover"}}),a.value="Image added to slide!"}catch{a.value="Failed to generate image. Try a different prompt."}finally{K.value=!1}}}async function N(){var k,j;if(!((j=(k=J.value)==null?void 0:k.content)!=null&&j.text))return;const U=await e.improveText(J.value.content.text,s.value||"Make it clearer and more engaging");U&&(a.value=U)}async function D(){!a.value||!J.value||r.updateElement(n.projectId,n.currentSlideId,J.value.id,{content:{...J.value.content,text:a.value}})}async function B(){if(!s.value.trim())return;const U=await e.generate(s.value);U&&(a.value=U)}return(U,k)=>{var j,te,ae,fe,Ee,Pe;return W(),Y("div",OD,[d("div",DD,[(W(),Y(De,null,it([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],he=>d("button",{key:he.id,class:Fe(["ai-mode-btn",i.value===he.id&&"active"]),onClick:Be=>i.value=he.id},ye(he.label),11,MD)),64))]),d("div",LD,[i.value==="generate"?(W(),Y(De,{key:0},[d("div",VD,[k[34]||(k[34]=d("label",{class:"form-label"},[Oe("Topic / Subject "),d("span",{class:"required"},"*")],-1)),ht(d("input",{"onUpdate:modelValue":k[0]||(k[0]=he=>o.value=he),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:ku(ce,["enter"])},null,544),[[Lt,o.value]])]),d("div",$D,[d("button",{class:Fe(["output-mode-btn",u.value==="single"&&"active"]),onClick:k[1]||(k[1]=he=>u.value="single")},"Single Slide",2),d("button",{class:Fe(["output-mode-btn",u.value==="deck"&&"active"]),onClick:k[2]||(k[2]=he=>u.value="deck")},"Slide Deck",2)]),u.value==="single"?(W(),Y("div",FD,[k[36]||(k[36]=d("label",{class:"form-label"},"Slide Type",-1)),ht(d("select",{"onUpdate:modelValue":k[3]||(k[3]=he=>h.value=he),class:"select"},[...k[35]||(k[35]=[un('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[Ea,h.value]])])):(W(),Y("div",UD,[k[37]||(k[37]=d("label",{class:"form-label"},"Number of Slides",-1)),ht(d("input",{"onUpdate:modelValue":k[4]||(k[4]=he=>E.value=he),class:"input",type:"number",min:"1",max:"20"},null,512),[[Lt,E.value,void 0,{number:!0}]]),k[38]||(k[38]=d("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),d("div",zD,[k[39]||(k[39]=d("label",{class:"form-label"},[Oe("Description "),d("span",{class:"optional"},"(optional)")],-1)),ht(d("textarea",{"onUpdate:modelValue":k[5]||(k[5]=he=>m.value=he),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[Lt,m.value]])]),d("div",BD,[d("div",jD,[k[41]||(k[41]=d("label",{class:"form-label"},"AI Prompt",-1)),_.value?(W(),Y("button",{key:0,class:"prompt-reset-btn",onClick:V,title:"Reset to auto-generated prompt"},[...k[40]||(k[40]=[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Oe(" Reset ",-1)])])):(W(),Y("span",qD,"auto"))]),ht(d("textarea",{"onUpdate:modelValue":k[6]||(k[6]=he=>g.value=he),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:k[7]||(k[7]=he=>_.value=!0),spellcheck:"false"},null,544),[[Lt,g.value]]),k[42]||(k[42]=d("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),u.value==="single"?(W(),Y("div",WD,[d("button",{class:Fe(["output-mode-btn",T.value==="slide"&&"active"]),onClick:k[8]||(k[8]=he=>T.value="slide")},"Show on Slide",2),d("button",{class:Fe(["output-mode-btn",T.value==="options"&&"active"]),onClick:k[9]||(k[9]=he=>T.value="options")},"Creative Options",2)])):Re("",!0),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating||!o.value.trim()&&!g.value.trim()||u.value==="deck"&&(!E.value||E.value<1||E.value>20),onClick:ce},[be(e).isGenerating?(W(),Y("span",GD)):(W(),Y("svg",KD,[...k[43]||(k[43]=[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Oe(" "+ye(be(e).isGenerating?"Generating…":u.value==="deck"?a.value?`Regenerate ${E.value} Slides`:`Generate ${E.value} Slides`:T.value==="slide"?a.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,HD),u.value==="single"&&T.value==="options"&&(S.value.length||M.value)?(W(),Y("div",QD,[d("div",JD,[k[44]||(k[44]=d("span",{class:"form-label"},"Creative Options",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:k[10]||(k[10]=he=>{S.value=[],M.value=""})},"Clear")]),M.value?(W(),Y("div",YD,[k[45]||(k[45]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Oe(" "+ye(M.value),1)])):(W(),Y("div",XD,[(W(!0),Y(De,null,it(S.value,(he,Be)=>(W(),Y("article",{key:Be,class:"creative-option-card"},[d("h4",ZD,ye(he.title),1),d("p",eM,ye(he.angle),1),d("button",{class:"btn btn-secondary btn-sm",onClick:rt=>G(he)},"Use This Option",8,tM)]))),128))]))])):Re("",!0)],64)):i.value==="quiz"?(W(),Y(De,{key:1},[d("div",nM,[k[46]||(k[46]=d("label",{class:"form-label"},[Oe("Quiz Topic "),d("span",{class:"required"},"*")],-1)),ht(d("input",{"onUpdate:modelValue":k[11]||(k[11]=he=>Q.value=he),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:ku(Z,["enter"])},null,544),[[Lt,Q.value]])]),d("div",rM,[d("div",iM,[k[48]||(k[48]=d("label",{class:"form-label"},"Questions",-1)),ht(d("select",{"onUpdate:modelValue":k[12]||(k[12]=he=>l.value=he),class:"select"},[...k[47]||(k[47]=[d("option",{value:2},"2",-1),d("option",{value:3},"3",-1),d("option",{value:4},"4",-1),d("option",{value:5},"5",-1),d("option",{value:6},"6",-1),d("option",{value:8},"8",-1),d("option",{value:10},"10",-1)])],512),[[Ea,l.value,void 0,{number:!0}]])]),d("div",sM,[k[50]||(k[50]=d("label",{class:"form-label"},"Difficulty",-1)),ht(d("select",{"onUpdate:modelValue":k[13]||(k[13]=he=>P.value=he),class:"select"},[...k[49]||(k[49]=[d("option",{value:"beginner"},"Beginner",-1),d("option",{value:"intermediate"},"Intermediate",-1),d("option",{value:"advanced"},"Advanced",-1)])],512),[[Ea,P.value]])])]),d("div",oM,[k[51]||(k[51]=d("label",{class:"form-label"},"Question Type",-1)),d("div",aM,[(W(),Y(De,null,it([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],he=>d("button",{key:he.id,class:Fe(["qtype-btn",A.value===he.id&&"active"]),onClick:Be=>A.value=he.id},[d("span",cM,ye(he.icon),1),d("span",null,ye(he.label),1)],10,lM)),64))])]),d("div",uM,[k[52]||(k[52]=d("label",{class:"form-label"},[Oe("Learning Objective "),d("span",{class:"optional"},"(optional)")],-1)),ht(d("input",{"onUpdate:modelValue":k[14]||(k[14]=he=>C.value=he),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[Lt,C.value]])]),d("div",dM,[d("div",hM,[k[54]||(k[54]=d("label",{class:"form-label"},"AI Prompt",-1)),b.value?(W(),Y("button",{key:0,class:"prompt-reset-btn",onClick:w,title:"Reset to auto-generated prompt"},[...k[53]||(k[53]=[d("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Oe(" Reset ",-1)])])):(W(),Y("span",fM,"auto"))]),ht(d("textarea",{"onUpdate:modelValue":k[15]||(k[15]=he=>O.value=he),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:k[16]||(k[16]=he=>b.value=!0),spellcheck:"false"},null,544),[[Lt,O.value]]),k[55]||(k[55]=d("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating||!Q.value.trim()&&!O.value.trim(),onClick:k[17]||(k[17]=he=>Z(!1))},[be(e).isGenerating?(W(),Y("span",mM)):(W(),Y("svg",gM,[...k[56]||(k[56]=[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Oe(" "+ye(be(e).isGenerating?"Generating…":`Generate ${l.value} Questions`),1)],8,pM),R.value.length?(W(),Y("div",vM,[d("div",yM,[d("span",_M,ye(R.value.length)+" Questions",1),d("div",bM,[d("button",{class:"btn btn-ghost btn-sm",onClick:k[18]||(k[18]=he=>Ie(!0))},"All"),d("button",{class:"btn btn-ghost btn-sm",onClick:k[19]||(k[19]=he=>Ie(!1))},"None"),d("button",{class:"btn btn-ghost btn-sm danger",onClick:k[20]||(k[20]=he=>R.value=[])},"Clear")])]),d("div",wM,[d("button",{class:"btn btn-secondary regen-btn",disabled:be(e).isGenerating,onClick:k[21]||(k[21]=he=>Z(!1)),title:"Replace all questions with a new set"},[be(e).isGenerating?(W(),Y("span",IM)):(W(),Y("svg",TM,[...k[57]||(k[57]=[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),d("path",{d:"M3 3v5h5"},null,-1)])])),k[58]||(k[58]=Oe(" Regenerate ",-1))],8,EM),d("button",{class:"btn btn-ghost regen-btn",disabled:be(e).isGenerating,onClick:k[22]||(k[22]=he=>Z(!0)),title:"Generate more and append to current list"},[...k[59]||(k[59]=[d("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Oe(" Add More ",-1)])],8,CM)]),(W(!0),Y(De,null,it(R.value,(he,Be)=>(W(),Y("div",{key:Be,class:Fe(["quiz-card",{deselected:!he._selected}])},[d("div",xM,[d("label",kM,[ht(d("input",{type:"checkbox","onUpdate:modelValue":rt=>he._selected=rt},null,8,SM),[[Rv,he._selected]]),d("span",AM,"Q"+ye(Be+1),1)]),d("div",RM,[d("span",{class:Fe(["badge difficulty-badge",he.difficulty])},ye(he.difficulty),3),d("span",PM,ye(he.type==="true-false"?"T/F":"MCQ"),1)])]),d("p",NM,ye(he.question),1),d("div",OM,[(W(!0),Y(De,null,it(he.options,(rt,Ke)=>(W(),Y("div",{key:Ke,class:Fe(["q-option",Ke===he.correctIndex&&"correct"])},[d("span",DM,ye(["A","B","C","D"][Ke]),1),d("span",null,ye(rt),1),Ke===he.correctIndex?(W(),Y("svg",MM,[...k[60]||(k[60]=[d("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):Re("",!0)],2))),128))]),he.explanation?(W(),Y("div",LM,[k[61]||(k[61]=d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),Oe(" "+ye(he.explanation),1)])):Re("",!0)],2))),128)),d("button",{class:"btn btn-primary w-full",disabled:!R.value.filter(he=>he._selected).length,onClick:ge},[k[62]||(k[62]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),Oe(" Add "+ye(R.value.filter(he=>he._selected).length)+" Selected as Quiz Slides ",1)],8,VM)])):Re("",!0)],64)):i.value==="voiceover"?(W(),Y(De,{key:2},[d("div",$M,[k[63]||(k[63]=d("label",{class:"form-label"},"Slide Content / Key Points",-1)),ht(d("textarea",{"onUpdate:modelValue":k[23]||(k[23]=he=>p.value=he),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[Lt,p.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating,onClick:ke},[be(e).isGenerating?(W(),Y("span",UM)):Re("",!0),Oe(" "+ye(be(e).isGenerating?"Generating…":"Generate Script"),1)],8,FM)],64)):i.value==="improve"?(W(),Y(De,{key:3},[(te=(j=J.value)==null?void 0:j.content)!=null&&te.text?(W(),Y("div",zM,[k[64]||(k[64]=d("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),d("div",BM,ye(J.value.content.text.slice(0,120))+ye(J.value.content.text.length>120?"…":""),1)])):(W(),Y("p",jM,"Select a text element on the canvas to improve it.")),d("div",qM,[k[65]||(k[65]=d("label",{class:"form-label"},"Instruction",-1)),ht(d("input",{"onUpdate:modelValue":k[24]||(k[24]=he=>s.value=he),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[Lt,s.value]])]),k[66]||(k[66]=d("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),ht(d("textarea",{"onUpdate:modelValue":k[25]||(k[25]=he=>s.value=he),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[Lt,s.value]]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating||!J.value&&!s.value,onClick:k[26]||(k[26]=he=>J.value?N():B())},[be(e).isGenerating?(W(),Y("span",HM)):Re("",!0),Oe(" "+ye(be(e).isGenerating?"Processing…":"Generate"),1)],8,WM)],64)):i.value==="translate"?(W(),Y(De,{key:4},[(fe=(ae=J.value)==null?void 0:ae.content)!=null&&fe.text?(W(),Y("div",GM,[k[67]||(k[67]=d("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),d("div",KM,ye(J.value.content.text.slice(0,120))+ye(J.value.content.text.length>120?"…":""),1)])):(W(),Y("p",QM,"Select a text element on the canvas to translate it.")),d("div",JM,[k[69]||(k[69]=d("label",{class:"form-label"},"Target Language",-1)),ht(d("select",{"onUpdate:modelValue":k[27]||(k[27]=he=>f.value=he),class:"select"},[...k[68]||(k[68]=[un('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[Ea,f.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:be(e).isGenerating||!((Pe=(Ee=J.value)==null?void 0:Ee.content)!=null&&Pe.text),onClick:z},[be(e).isGenerating?(W(),Y("span",XM)):Re("",!0),Oe(" "+ye(be(e).isGenerating?"Translating…":"Translate Text"),1)],8,YM),a.value?(W(),Y("div",ZM,[d("div",e8,[k[70]||(k[70]=d("span",{class:"form-label"},"Translation Result",-1)),d("div",t8,[d("button",{class:"btn btn-ghost btn-sm",onClick:k[28]||(k[28]=he=>U.navigator.clipboard.writeText(a.value))},"Copy"),d("button",{class:"btn btn-primary btn-sm",onClick:H,disabled:!J.value},"Apply",8,n8)])]),d("div",r8,ye(a.value),1)])):Re("",!0)],64)):i.value==="image"?(W(),Y(De,{key:5},[k[73]||(k[73]=d("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),d("div",i8,[k[71]||(k[71]=d("label",{class:"form-label"},"Image Description",-1)),ht(d("textarea",{"onUpdate:modelValue":k[29]||(k[29]=he=>v.value=he),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[Lt,v.value]])]),d("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:K.value||be(e).isGenerating||!v.value,onClick:q},[K.value||be(e).isGenerating?(W(),Y("span",o8)):Re("",!0),Oe(" "+ye(K.value||be(e).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,s8),a.value?(W(),Y("div",a8,[k[72]||(k[72]=d("div",{class:"result-header"},[d("span",{class:"form-label"},"Status")],-1)),d("div",l8,ye(a.value),1)])):Re("",!0)],64)):i.value==="settings"?(W(),Y("div",c8,[d("div",u8,[k[75]||(k[75]=d("label",{class:"form-label"},"AI Provider",-1)),d("select",{value:be(e).apiProvider,class:"select",onChange:k[30]||(k[30]=he=>be(e).setProvider(he.target.value))},[...k[74]||(k[74]=[d("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),d("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,d8)]),d("div",h8,[k[76]||(k[76]=d("label",{class:"form-label"},"API Key",-1)),d("input",{type:"password",value:be(e).apiKey,class:"input",placeholder:"sk-…",onChange:k[31]||(k[31]=he=>be(e).setApiKey(he.target.value))},null,40,f8),k[77]||(k[77]=d("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),be(e).apiKey?Re("",!0):(W(),Y("div",p8,[...k[78]||(k[78]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),Oe(" Running in ",-1),d("strong",null,"demo mode",-1),Oe(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):Re("",!0),a.value&&i.value!=="settings"&&i.value!=="quiz"?(W(),Y("div",m8,[d("div",g8,[k[79]||(k[79]=d("span",{class:"form-label"},"Result",-1)),d("button",{class:"btn btn-ghost btn-sm",onClick:k[32]||(k[32]=he=>a.value="")},"Clear")]),d("pre",v8,ye(a.value),1),d("div",y8,[i.value==="generate"?(W(),Y("button",{key:0,class:"btn btn-primary btn-sm",onClick:$},ye(u.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):Re("",!0),i.value==="generate"?(W(),Y("button",{key:1,class:"btn btn-ghost btn-sm",disabled:be(e).isGenerating,onClick:ce},[...k[80]||(k[80]=[d("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),d("path",{d:"M3 3v5h5"})],-1),Oe(" Regenerate ",-1)])],8,_8)):Re("",!0),i.value==="improve"&&J.value?(W(),Y("button",{key:2,class:"btn btn-primary btn-sm",onClick:D}," Apply to Element ")):Re("",!0),d("button",{class:"btn btn-secondary btn-sm",onClick:k[33]||(k[33]=he=>{var Be;return(Be=U.navigator.clipboard)==null?void 0:Be.writeText(a.value)})}," Copy ")])])):Re("",!0),be(e).lastError?(W(),Y("div",b8,[k[81]||(k[81]=d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Oe(" "+ye(be(e).lastError),1)])):Re("",!0)])])}}},E8=At(w8,[["__scopeId","data-v-697ec3ea"]]),I8={class:"theme-manager"},T8={class:"panel-section"},C8={class:"presets-grid"},x8=["title","onClick"],k8={class:"preset-preview"},S8={class:"preset-name"},A8={class:"panel-section"},R8={class:"theme-fields"},P8={class:"form-label"},N8={class:"color-row"},O8=["value","onInput"],D8=["value","onChange"],M8={class:"panel-section"},L8={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},V8=["value"],$8=["value"],F8={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},U8=["value"],z8=["value"],B8={class:"form-group"},j8=["value"],q8={class:"panel-section"},W8={key:0,class:"apply-message success"},H8={key:1,class:"apply-message error"},G8={__name:"ThemeManager",setup(t){const e=In(),n=pn(),r=Se(()=>n.getProject(e.projectId)),i=Se(()=>{var g;return((g=r.value)==null?void 0:g.theme)||{}}),s=ve(""),o=ve("");function a(g){n.updateProject(e.projectId,{theme:{...i.value,...g}})}const l=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],h=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function f(g){a(g)}function p(g,_){const u=g.content||{};return g.type==="text"?{content:{...u,fontFamily:_.fontFamily||u.fontFamily,color:_.textColor||u.color}}:g.type==="heading"?{content:{...u,fontFamily:_.headingFont||_.fontFamily||u.fontFamily,color:_.textColor||u.color}}:g.type==="shape"?{content:{...u,fillColor:_.secondaryColor||u.fillColor}}:g.type==="hotspot"?{content:{...u,bgColor:_.primaryColor||u.bgColor}}:g.type==="button"?{content:{...u,bgColor:_.primaryColor||u.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:_.fontFamily||u.fontFamily}}:g.type==="quiz"?{content:{...u,cardBgColor:_.bgColor||u.cardBgColor,questionColor:_.textColor||u.questionColor,accentColor:_.primaryColor||u.accentColor}}:null}function m(){s.value="",o.value="";const g=e.projectId,_=r.value,u=i.value;if(!g||!_){o.value="No active project to apply theme.";return}const E=_.slides||[];let T=0;E.forEach(S=>{(S.backgroundType||"color")==="color"&&n.updateSlide(g,S.id,{backgroundType:"color",background:u.bgColor||S.background||"#ffffff"}),(S.elements||[]).forEach(M=>{const L=p(M,u);L&&(n.updateElement(g,S.id,M.id,L),T+=1)})}),s.value=`Applied theme to ${E.length} slide${E.length===1?"":"s"} and ${T} element${T===1?"":"s"}.`}return(g,_)=>(W(),Y("div",I8,[d("div",T8,[_[3]||(_[3]=d("div",{class:"panel-title"},"Preset Themes",-1)),d("div",C8,[(W(),Y(De,null,it(l,u=>d("div",{key:u.name,class:"preset-card",title:u.name,onClick:E=>f(u)},[d("div",k8,[d("div",{class:"pp-header",style:je({background:u.primaryColor})},null,4),d("div",{class:"pp-body",style:je({background:u.bgColor})},[d("div",{class:"pp-line",style:je({background:u.textColor,opacity:.7})},null,4),d("div",{class:"pp-line",style:je({background:u.textColor,opacity:.4,width:"60%"})},null,4)],4),d("div",{class:"pp-accent",style:je({background:u.secondaryColor})},null,4)]),d("span",S8,ye(u.name),1)],8,x8)),64))])]),d("div",A8,[_[4]||(_[4]=d("div",{class:"panel-title"},"Colors",-1)),d("div",R8,[(W(),Y(De,null,it({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(u,E)=>d("div",{class:"theme-field",key:E},[d("label",P8,ye(u),1),d("div",N8,[d("input",{type:"color",value:i.value[E]||"#ffffff",class:"color-input-native",onInput:T=>a({[E]:T.target.value})},null,40,O8),d("input",{value:i.value[E]||"",class:"input",onChange:T=>a({[E]:T.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,D8)])])),64))])]),d("div",M8,[_[8]||(_[8]=d("div",{class:"panel-title"},"Typography",-1)),d("div",L8,[_[5]||(_[5]=d("label",{class:"form-label"},"Heading Font",-1)),d("select",{value:i.value.headingFont||"Inter, sans-serif",class:"select",onChange:_[0]||(_[0]=u=>a({headingFont:u.target.value}))},[(W(),Y(De,null,it(h,u=>d("option",{key:u.value,value:u.value},ye(u.label),9,$8)),64))],40,V8)]),d("div",F8,[_[6]||(_[6]=d("label",{class:"form-label"},"Body Font",-1)),d("select",{value:i.value.fontFamily||"Inter, sans-serif",class:"select",onChange:_[1]||(_[1]=u=>a({fontFamily:u.target.value}))},[(W(),Y(De,null,it(h,u=>d("option",{key:u.value,value:u.value},ye(u.label),9,z8)),64))],40,U8)]),d("div",B8,[_[7]||(_[7]=d("label",{class:"form-label"},"Base Font Size",-1)),d("input",{type:"number",min:"12",max:"24",value:i.value.fontSize||16,class:"input",onChange:_[2]||(_[2]=u=>a({fontSize:+u.target.value}))},null,40,j8)])]),d("div",q8,[_[9]||(_[9]=d("div",{class:"panel-title"},"Preview",-1)),d("div",{class:"theme-preview",style:je({background:i.value.bgColor||"#fff",fontFamily:i.value.fontFamily||"Inter, sans-serif"})},[d("div",{class:"tp-heading",style:je({color:i.value.textColor,fontFamily:i.value.headingFont||i.value.fontFamily})}," Heading Text ",4),d("div",{class:"tp-body",style:je({color:i.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),d("div",{class:"tp-btn",style:je({background:i.value.primaryColor})},"Button",4),d("div",{class:"tp-badge",style:je({background:i.value.secondaryColor})},"Badge",4)],4),d("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:m}," Apply Theme to Slides "),s.value?(W(),Y("p",W8,ye(s.value),1)):Re("",!0),o.value?(W(),Y("p",H8,ye(o.value),1)):Re("",!0)])]))}},K8=At(G8,[["__scopeId","data-v-dd457d78"]]);var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Q8(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Na(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Q_={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(t,e){(function(n){t.exports=n()})(function(){return function n(r,i,s){function o(h,f){if(!i[h]){if(!r[h]){var p=typeof Na=="function"&&Na;if(!f&&p)return p(h,!0);if(a)return a(h,!0);var m=new Error("Cannot find module '"+h+"'");throw m.code="MODULE_NOT_FOUND",m}var g=i[h]={exports:{}};r[h][0].call(g.exports,function(_){var u=r[h][1][_];return o(u||_)},g,g.exports,n,r,i,s)}return i[h].exports}for(var a=typeof Na=="function"&&Na,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(n,r,i){var s=n("./utils"),o=n("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var h,f,p,m,g,_,u,E=[],T=0,S=l.length,M=S,L=s.getTypeOf(l)!=="string";T<l.length;)M=S-T,p=L?(h=l[T++],f=T<S?l[T++]:0,T<S?l[T++]:0):(h=l.charCodeAt(T++),f=T<S?l.charCodeAt(T++):0,T<S?l.charCodeAt(T++):0),m=h>>2,g=(3&h)<<4|f>>4,_=1<M?(15&f)<<2|p>>6:64,u=2<M?63&p:64,E.push(a.charAt(m)+a.charAt(g)+a.charAt(_)+a.charAt(u));return E.join("")},i.decode=function(l){var h,f,p,m,g,_,u=0,E=0,T="data:";if(l.substr(0,T.length)===T)throw new Error("Invalid base64 input, it looks like a data url.");var S,M=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&M--,l.charAt(l.length-2)===a.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=o.uint8array?new Uint8Array(0|M):new Array(0|M);u<l.length;)h=a.indexOf(l.charAt(u++))<<2|(m=a.indexOf(l.charAt(u++)))>>4,f=(15&m)<<4|(g=a.indexOf(l.charAt(u++)))>>2,p=(3&g)<<6|(_=a.indexOf(l.charAt(u++))),S[E++]=h,g!==64&&(S[E++]=f),_!==64&&(S[E++]=p);return S}},{"./support":30,"./utils":32}],2:[function(n,r,i){var s=n("./external"),o=n("./stream/DataWorker"),a=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function h(f,p,m,g,_){this.compressedSize=f,this.uncompressedSize=p,this.crc32=m,this.compression=g,this.compressedContent=_}h.prototype={getContentWorker:function(){var f=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return f.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,p,m){return f.pipe(new a).pipe(new l("uncompressedSize")).pipe(p.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var s=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var s=n("./utils"),o=function(){for(var a,l=[],h=0;h<256;h++){a=h;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;l[h]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(h,f,p,m){var g=o,_=m+p;h^=-1;for(var u=m;u<_;u++)h=h>>>8^g[255&(h^f[u])];return-1^h}(0|l,a,a.length,0):function(h,f,p,m){var g=o,_=m+p;h^=-1;for(var u=m;u<_;u++)h=h>>>8^g[255&(h^f.charCodeAt(u))];return-1^h}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var s=null;s=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:s}},{lie:37}],7:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=n("pako"),a=n("./utils"),l=n("./stream/GenericWorker"),h=s?"uint8array":"array";function f(p,m){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=m,this.meta={}}i.magic="\b\0",a.inherits(f,l),f.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(h,p.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(m){p.push({data:m,meta:p.meta})}},i.compressWorker=function(p){return new f("Deflate",p)},i.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function s(g,_){var u,E="";for(u=0;u<_;u++)E+=String.fromCharCode(255&g),g>>>=8;return E}function o(g,_,u,E,T,S){var M,L,V=g.file,Q=g.compression,P=S!==h.utf8encode,A=a.transformTo("string",S(V.name)),C=a.transformTo("string",h.utf8encode(V.name)),R=V.comment,O=a.transformTo("string",S(R)),b=a.transformTo("string",h.utf8encode(R)),I=C.length!==V.name.length,w=b.length!==R.length,X="",oe="",J="",ce=V.dir,re=V.date,_e={crc32:0,compressedSize:0,uncompressedSize:0};_&&!u||(_e.crc32=g.crc32,_e.compressedSize=g.compressedSize,_e.uncompressedSize=g.uncompressedSize);var ne=0;_&&(ne|=8),P||!I&&!w||(ne|=2048);var ee=0,de=0;ce&&(ee|=16),T==="UNIX"?(de=798,ee|=function($,le){var G=$;return $||(G=le?16893:33204),(65535&G)<<16}(V.unixPermissions,ce)):(de=20,ee|=function($){return 63&($||0)}(V.dosPermissions)),M=re.getUTCHours(),M<<=6,M|=re.getUTCMinutes(),M<<=5,M|=re.getUTCSeconds()/2,L=re.getUTCFullYear()-1980,L<<=4,L|=re.getUTCMonth()+1,L<<=5,L|=re.getUTCDate(),I&&(oe=s(1,1)+s(f(A),4)+C,X+="up"+s(oe.length,2)+oe),w&&(J=s(1,1)+s(f(O),4)+b,X+="uc"+s(J.length,2)+J);var pe="";return pe+=`
\0`,pe+=s(ne,2),pe+=Q.magic,pe+=s(M,2),pe+=s(L,2),pe+=s(_e.crc32,4),pe+=s(_e.compressedSize,4),pe+=s(_e.uncompressedSize,4),pe+=s(A.length,2),pe+=s(X.length,2),{fileRecord:p.LOCAL_FILE_HEADER+pe+A+X,dirRecord:p.CENTRAL_FILE_HEADER+s(de,2)+pe+s(O.length,2)+"\0\0\0\0"+s(ee,4)+s(E,4)+A+X+O}}var a=n("../utils"),l=n("../stream/GenericWorker"),h=n("../utf8"),f=n("../crc32"),p=n("../signature");function m(g,_,u,E){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=u,this.encodeFileName=E,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(g){var _=g.meta.percent||0,u=this.entriesCount,E=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,l.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:u?(_+100*(u-E-1))/u:100}}))},m.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var _=this.streamFiles&&!g.file.dir;if(_){var u=o(g,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(g){this.accumulate=!1;var _=this.streamFiles&&!g.file.dir,u=o(g,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),_)this.push({data:function(E){return p.DATA_DESCRIPTOR+s(E.crc32,4)+s(E.compressedSize,4)+s(E.uncompressedSize,4)}(g),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var g=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var u=this.bytesWritten-g,E=function(T,S,M,L,V){var Q=a.transformTo("string",V(L));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(T,2)+s(T,2)+s(S,4)+s(M,4)+s(Q.length,2)+Q}(this.dirRecords.length,u,g,this.zipComment,this.encodeFileName);this.push({data:E,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(g){this._sources.push(g);var _=this;return g.on("data",function(u){_.processChunk(u)}),g.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),g.on("error",function(u){_.error(u)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(g){var _=this._sources;if(!l.prototype.error.call(this,g))return!1;for(var u=0;u<_.length;u++)try{_[u].error(g)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var g=this._sources,_=0;_<g.length;_++)g[_].lock()},r.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var s=n("../compressions"),o=n("./ZipFileWorker");i.generateWorker=function(a,l,h){var f=new o(l.streamFiles,h,l.platform,l.encodeFileName),p=0;try{a.forEach(function(m,g){p++;var _=function(S,M){var L=S||M,V=s[L];if(!V)throw new Error(L+" is not a valid compression method !");return V}(g.options.compression,l.compression),u=g.options.compressionOptions||l.compressionOptions||{},E=g.dir,T=g.date;g._compressWorker(_,u).withStreamInfo("file",{name:m,dir:E,date:T,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(f)}),f.entriesCount=p}catch(m){f.error(m)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=n("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var s=n("./utils"),o=n("./external"),a=n("./utf8"),l=n("./zipEntries"),h=n("./stream/Crc32Probe"),f=n("./nodejsUtils");function p(m){return new o.Promise(function(g,_){var u=m.decompressed.getContentWorker().pipe(new h);u.on("error",function(E){_(E)}).on("end",function(){u.streamInfo.crc32!==m.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}r.exports=function(m,g){var _=this;return g=s.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),f.isNode&&f.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,g.optimizedBinaryString,g.base64).then(function(u){var E=new l(g);return E.load(u),E}).then(function(u){var E=[o.Promise.resolve(u)],T=u.files;if(g.checkCRC32)for(var S=0;S<T.length;S++)E.push(p(T[S]));return o.Promise.all(E)}).then(function(u){for(var E=u.shift(),T=E.files,S=0;S<T.length;S++){var M=T[S],L=M.fileNameStr,V=s.resolve(M.fileNameStr);_.file(V,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:g.createFolders}),M.dir||(_.file(V).unsafeOriginalName=L)}return E.zipComment.length&&(_.comment=E.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var s=n("../utils"),o=n("../stream/GenericWorker");function a(l,h){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(a,o),a.prototype._bindStream=function(l){var h=this;(this._stream=l).pause(),l.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var s=n("readable-stream").Readable;function o(a,l,h){s.call(this,l),this._helper=a;var f=this;a.on("data",function(p,m){f.push(p)||f._helper.pause(),h&&h(m)}).on("error",function(p){f.emit("error",p)}).on("end",function(){f.push(null)})}n("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,r,i){function s(V,Q,P){var A,C=a.getTypeOf(Q),R=a.extend(P||{},f);R.date=R.date||new Date,R.compression!==null&&(R.compression=R.compression.toUpperCase()),typeof R.unixPermissions=="string"&&(R.unixPermissions=parseInt(R.unixPermissions,8)),R.unixPermissions&&16384&R.unixPermissions&&(R.dir=!0),R.dosPermissions&&16&R.dosPermissions&&(R.dir=!0),R.dir&&(V=T(V)),R.createFolders&&(A=E(V))&&S.call(this,A,!0);var O=C==="string"&&R.binary===!1&&R.base64===!1;P&&P.binary!==void 0||(R.binary=!O),(Q instanceof p&&Q.uncompressedSize===0||R.dir||!Q||Q.length===0)&&(R.base64=!1,R.binary=!0,Q="",R.compression="STORE",C="string");var b=null;b=Q instanceof p||Q instanceof l?Q:_.isNode&&_.isStream(Q)?new u(V,Q):a.prepareContent(V,Q,R.binary,R.optimizedBinaryString,R.base64);var I=new m(V,b,R);this.files[V]=I}var o=n("./utf8"),a=n("./utils"),l=n("./stream/GenericWorker"),h=n("./stream/StreamHelper"),f=n("./defaults"),p=n("./compressedObject"),m=n("./zipObject"),g=n("./generate"),_=n("./nodejsUtils"),u=n("./nodejs/NodejsStreamInputAdapter"),E=function(V){V.slice(-1)==="/"&&(V=V.substring(0,V.length-1));var Q=V.lastIndexOf("/");return 0<Q?V.substring(0,Q):""},T=function(V){return V.slice(-1)!=="/"&&(V+="/"),V},S=function(V,Q){return Q=Q!==void 0?Q:f.createFolders,V=T(V),this.files[V]||s.call(this,V,null,{dir:!0,createFolders:Q}),this.files[V]};function M(V){return Object.prototype.toString.call(V)==="[object RegExp]"}var L={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(V){var Q,P,A;for(Q in this.files)A=this.files[Q],(P=Q.slice(this.root.length,Q.length))&&Q.slice(0,this.root.length)===this.root&&V(P,A)},filter:function(V){var Q=[];return this.forEach(function(P,A){V(P,A)&&Q.push(A)}),Q},file:function(V,Q,P){if(arguments.length!==1)return V=this.root+V,s.call(this,V,Q,P),this;if(M(V)){var A=V;return this.filter(function(R,O){return!O.dir&&A.test(R)})}var C=this.files[this.root+V];return C&&!C.dir?C:null},folder:function(V){if(!V)return this;if(M(V))return this.filter(function(C,R){return R.dir&&V.test(C)});var Q=this.root+V,P=S.call(this,Q),A=this.clone();return A.root=P.name,A},remove:function(V){V=this.root+V;var Q=this.files[V];if(Q||(V.slice(-1)!=="/"&&(V+="/"),Q=this.files[V]),Q&&!Q.dir)delete this.files[V];else for(var P=this.filter(function(C,R){return R.name.slice(0,V.length)===V}),A=0;A<P.length;A++)delete this.files[P[A].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(V){var Q,P={};try{if((P=a.extend(V||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");a.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var A=P.comment||this.comment||"";Q=g.generateWorker(this,P,A)}catch(C){(Q=new l("error")).error(C)}return new h(Q,P.type||"string",P.mimeType)},generateAsync:function(V,Q){return this.generateInternalStream(V).accumulate(Q)},generateNodeStream:function(V,Q){return(V=V||{}).type||(V.type="nodebuffer"),this.generateInternalStream(V).toNodejsStream(Q)}};r.exports=L},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),h=a.charCodeAt(1),f=a.charCodeAt(2),p=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===h&&this.data[m+2]===f&&this.data[m+3]===p)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),h=a.charCodeAt(1),f=a.charCodeAt(2),p=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&h===m[1]&&f===m[2]&&p===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var s=n("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,h=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)h=(h<<8)+this.byteAt(l);return this.index+=a,h},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=o},{"../utils":32}],19:[function(n,r,i){var s=n("./Uint8ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var s=n("./DataReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var s=n("./ArrayReader");function o(a){s.call(this,a)}n("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var s=n("../utils"),o=n("../support"),a=n("./ArrayReader"),l=n("./StringReader"),h=n("./NodeBufferReader"),f=n("./Uint8ArrayReader");r.exports=function(p){var m=s.getTypeOf(p);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new h(p):o.uint8array?new f(s.transformTo("uint8array",p)):new a(s.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var s=n("./GenericWorker"),o=n("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var s=n("./GenericWorker"),o=n("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+l.data.length}o.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var s=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,h);break;case"uint8array":l=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":l=this.data.slice(this.index,h)}return this.index=h,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=s},{}],29:[function(n,r,i){var s=n("../utils"),o=n("./ConvertWorker"),a=n("./GenericWorker"),l=n("../base64"),h=n("../support"),f=n("../external"),p=null;if(h.nodestream)try{p=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(_,u){return new f.Promise(function(E,T){var S=[],M=_._internalType,L=_._outputType,V=_._mimeType;_.on("data",function(Q,P){S.push(Q),u&&u(P)}).on("error",function(Q){S=[],T(Q)}).on("end",function(){try{var Q=function(P,A,C){switch(P){case"blob":return s.newBlob(s.transformTo("arraybuffer",A),C);case"base64":return l.encode(A);default:return s.transformTo(P,A)}}(L,function(P,A){var C,R=0,O=null,b=0;for(C=0;C<A.length;C++)b+=A[C].length;switch(P){case"string":return A.join("");case"array":return Array.prototype.concat.apply([],A);case"uint8array":for(O=new Uint8Array(b),C=0;C<A.length;C++)O.set(A[C],R),R+=A[C].length;return O;case"nodebuffer":return Buffer.concat(A);default:throw new Error("concat : unsupported type '"+P+"'")}}(M,S),V);E(Q)}catch(P){T(P)}S=[]}).resume()})}function g(_,u,E){var T=u;switch(u){case"blob":case"arraybuffer":T="uint8array";break;case"base64":T="string"}try{this._internalType=T,this._outputType=u,this._mimeType=E,s.checkSupport(T),this._worker=_.pipe(new o(T)),_.lock()}catch(S){this._worker=new a("error"),this._worker.error(S)}}g.prototype={accumulate:function(_){return m(this,_)},on:function(_,u){var E=this;return _==="data"?this._worker.on(_,function(T){u.call(E,T.data,T.meta)}):this._worker.on(_,function(){s.delay(u,arguments,E)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},_)}},r.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var s=n("./utils"),o=n("./support"),a=n("./nodejsUtils"),l=n("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}i.utf8encode=function(g){return o.nodebuffer?a.newBufferFrom(g,"utf-8"):function(_){var u,E,T,S,M,L=_.length,V=0;for(S=0;S<L;S++)(64512&(E=_.charCodeAt(S)))==55296&&S+1<L&&(64512&(T=_.charCodeAt(S+1)))==56320&&(E=65536+(E-55296<<10)+(T-56320),S++),V+=E<128?1:E<2048?2:E<65536?3:4;for(u=o.uint8array?new Uint8Array(V):new Array(V),S=M=0;M<V;S++)(64512&(E=_.charCodeAt(S)))==55296&&S+1<L&&(64512&(T=_.charCodeAt(S+1)))==56320&&(E=65536+(E-55296<<10)+(T-56320),S++),E<128?u[M++]=E:(E<2048?u[M++]=192|E>>>6:(E<65536?u[M++]=224|E>>>12:(u[M++]=240|E>>>18,u[M++]=128|E>>>12&63),u[M++]=128|E>>>6&63),u[M++]=128|63&E);return u}(g)},i.utf8decode=function(g){return o.nodebuffer?s.transformTo("nodebuffer",g).toString("utf-8"):function(_){var u,E,T,S,M=_.length,L=new Array(2*M);for(u=E=0;u<M;)if((T=_[u++])<128)L[E++]=T;else if(4<(S=h[T]))L[E++]=65533,u+=S-1;else{for(T&=S===2?31:S===3?15:7;1<S&&u<M;)T=T<<6|63&_[u++],S--;1<S?L[E++]=65533:T<65536?L[E++]=T:(T-=65536,L[E++]=55296|T>>10&1023,L[E++]=56320|1023&T)}return L.length!==E&&(L.subarray?L=L.subarray(0,E):L.length=E),s.applyFromCharCode(L)}(g=s.transformTo(o.uint8array?"uint8array":"array",g))},s.inherits(p,l),p.prototype.processChunk=function(g){var _=s.transformTo(o.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var u=_;(_=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),_.set(u,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var E=function(S,M){var L;for((M=M||S.length)>S.length&&(M=S.length),L=M-1;0<=L&&(192&S[L])==128;)L--;return L<0||L===0?M:L+h[S[L]]>M?L:M}(_),T=_;E!==_.length&&(o.uint8array?(T=_.subarray(0,E),this.leftOver=_.subarray(E,_.length)):(T=_.slice(0,E),this.leftOver=_.slice(E,_.length))),this.push({data:i.utf8decode(T),meta:g.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=p,s.inherits(m,l),m.prototype.processChunk=function(g){this.push({data:i.utf8encode(g.data),meta:g.meta})},i.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var s=n("./support"),o=n("./base64"),a=n("./nodejsUtils"),l=n("./external");function h(u){return u}function f(u,E){for(var T=0;T<u.length;++T)E[T]=255&u.charCodeAt(T);return E}n("setimmediate"),i.newBlob=function(u,E){i.checkSupport("blob");try{return new Blob([u],{type:E})}catch{try{var T=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return T.append(u),T.getBlob(E)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(u,E,T){var S=[],M=0,L=u.length;if(L<=T)return String.fromCharCode.apply(null,u);for(;M<L;)E==="array"||E==="nodebuffer"?S.push(String.fromCharCode.apply(null,u.slice(M,Math.min(M+T,L)))):S.push(String.fromCharCode.apply(null,u.subarray(M,Math.min(M+T,L)))),M+=T;return S.join("")},stringifyByChar:function(u){for(var E="",T=0;T<u.length;T++)E+=String.fromCharCode(u[T]);return E},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(u){var E=65536,T=i.getTypeOf(u),S=!0;if(T==="uint8array"?S=p.applyCanBeUsed.uint8array:T==="nodebuffer"&&(S=p.applyCanBeUsed.nodebuffer),S)for(;1<E;)try{return p.stringifyByChunk(u,T,E)}catch{E=Math.floor(E/2)}return p.stringifyByChar(u)}function g(u,E){for(var T=0;T<u.length;T++)E[T]=u[T];return E}i.applyFromCharCode=m;var _={};_.string={string:h,array:function(u){return f(u,new Array(u.length))},arraybuffer:function(u){return _.string.uint8array(u).buffer},uint8array:function(u){return f(u,new Uint8Array(u.length))},nodebuffer:function(u){return f(u,a.allocBuffer(u.length))}},_.array={string:m,array:h,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(u)}},_.arraybuffer={string:function(u){return m(new Uint8Array(u))},array:function(u){return g(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:h,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(new Uint8Array(u))}},_.uint8array={string:m,array:function(u){return g(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:h,nodebuffer:function(u){return a.newBufferFrom(u)}},_.nodebuffer={string:m,array:function(u){return g(u,new Array(u.length))},arraybuffer:function(u){return _.nodebuffer.uint8array(u).buffer},uint8array:function(u){return g(u,new Uint8Array(u.length))},nodebuffer:h},i.transformTo=function(u,E){if(E=E||"",!u)return E;i.checkSupport(u);var T=i.getTypeOf(E);return _[T][u](E)},i.resolve=function(u){for(var E=u.split("/"),T=[],S=0;S<E.length;S++){var M=E[S];M==="."||M===""&&S!==0&&S!==E.length-1||(M===".."?T.pop():T.push(M))}return T.join("/")},i.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(u)?"nodebuffer":s.uint8array&&u instanceof Uint8Array?"uint8array":s.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(u){if(!s[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(u){var E,T,S="";for(T=0;T<(u||"").length;T++)S+="\\x"+((E=u.charCodeAt(T))<16?"0":"")+E.toString(16).toUpperCase();return S},i.delay=function(u,E,T){setImmediate(function(){u.apply(T||null,E||[])})},i.inherits=function(u,E){function T(){}T.prototype=E.prototype,u.prototype=new T},i.extend=function(){var u,E,T={};for(u=0;u<arguments.length;u++)for(E in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],E)&&T[E]===void 0&&(T[E]=arguments[u][E]);return T},i.prepareContent=function(u,E,T,S,M){return l.Promise.resolve(E).then(function(L){return s.blob&&(L instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(L))!==-1)&&typeof FileReader<"u"?new l.Promise(function(V,Q){var P=new FileReader;P.onload=function(A){V(A.target.result)},P.onerror=function(A){Q(A.target.error)},P.readAsArrayBuffer(L)}):L}).then(function(L){var V=i.getTypeOf(L);return V?(V==="arraybuffer"?L=i.transformTo("uint8array",L):V==="string"&&(M?L=o.decode(L):T&&S!==!0&&(L=function(Q){return f(Q,s.uint8array?new Uint8Array(Q.length):new Array(Q.length))}(L))),L):l.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./signature"),l=n("./zipEntry"),h=n("./support");function f(p){this.files=[],this.loadOptions=p}f.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(p)+")")}},isSignature:function(p,m){var g=this.reader.index;this.reader.setIndex(p);var _=this.reader.readString(4)===m;return this.reader.setIndex(g),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),m=h.uint8array?"uint8array":"array",g=o.transformTo(m,p);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,m,g,_=this.zip64EndOfCentralSize-44;0<_;)p=this.reader.readInt(2),m=this.reader.readInt(4),g=this.reader.readData(m),this.zip64ExtensibleData[p]={id:p,length:m,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,m;for(p=0;p<this.files.length;p++)m=this.files[p],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var m=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var _=m-g;if(0<_)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var s=n("./reader/readerFor"),o=n("./utils"),a=n("./compressedObject"),l=n("./crc32"),h=n("./utf8"),f=n("./compressions"),p=n("./support");function m(g,_){this.options=g,this.loadOptions=_}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var _,u;if(g.skip(22),this.fileNameLength=g.readInt(2),u=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(E){for(var T in f)if(Object.prototype.hasOwnProperty.call(f,T)&&f[T].magic===E)return f[T];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var _=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(_),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var g=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(g){var _,u,E,T=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<T;)_=g.readInt(2),u=g.readInt(2),E=g.readData(u),this.extraFields[_]={id:_,length:u,value:E};g.setIndex(T)},handleUTF8:function(){var g=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var u=o.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var E=this.findExtraFieldUnicodeComment();if(E!==null)this.fileCommentStr=E;else{var T=o.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(T)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var _=s(g.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:h.utf8decode(_.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var _=s(g.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:h.utf8decode(_.readData(g.length-5))}return null}},r.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function s(_,u,E){this.name=_,this.dir=E.dir,this.date=E.date,this.comment=E.comment,this.unixPermissions=E.unixPermissions,this.dosPermissions=E.dosPermissions,this._data=u,this._dataBinary=E.binary,this.options={compression:E.compression,compressionOptions:E.compressionOptions}}var o=n("./stream/StreamHelper"),a=n("./stream/DataWorker"),l=n("./utf8"),h=n("./compressedObject"),f=n("./stream/GenericWorker");s.prototype={internalStream:function(_){var u=null,E="string";try{if(!_)throw new Error("No output type specified.");var T=(E=_.toLowerCase())==="string"||E==="text";E!=="binarystring"&&E!=="text"||(E="string"),u=this._decompressWorker();var S=!this._dataBinary;S&&!T&&(u=u.pipe(new l.Utf8EncodeWorker)),!S&&T&&(u=u.pipe(new l.Utf8DecodeWorker))}catch(M){(u=new f("error")).error(M)}return new o(u,E,"")},async:function(_,u){return this.internalStream(_).accumulate(u)},nodeStream:function(_,u){return this.internalStream(_||"nodebuffer").toNodejsStream(u)},_compressWorker:function(_,u){if(this._data instanceof h&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var E=this._decompressWorker();return this._dataBinary||(E=E.pipe(new l.Utf8EncodeWorker)),h.createWorkerFrom(E,_,u)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<p.length;g++)s.prototype[p[g]]=m;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var h=0,f=new l(_),p=s.document.createTextNode("");f.observe(p,{characterData:!0}),o=function(){p.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var u=s.document.createElement("script");u.onreadystatechange=function(){_(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},s.document.documentElement.appendChild(u)}:function(){setTimeout(_,0)};else{var m=new s.MessageChannel;m.port1.onmessage=_,o=function(){m.port2.postMessage(0)}}var g=[];function _(){var u,E;a=!0;for(var T=g.length;T;){for(E=g,g=[],u=-1;++u<T;)E[u]();T=g.length}a=!1}r.exports=function(u){g.push(u)!==1||a||o()}}).call(this,typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var s=n("immediate");function o(){}var a={},l=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function p(T){if(typeof T!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,T!==o&&u(this,T)}function m(T,S,M){this.promise=T,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function g(T,S,M){s(function(){var L;try{L=S(M)}catch(V){return a.reject(T,V)}L===T?a.reject(T,new TypeError("Cannot resolve promise with itself")):a.resolve(T,L)})}function _(T){var S=T&&T.then;if(T&&(typeof T=="object"||typeof T=="function")&&typeof S=="function")return function(){S.apply(T,arguments)}}function u(T,S){var M=!1;function L(P){M||(M=!0,a.reject(T,P))}function V(P){M||(M=!0,a.resolve(T,P))}var Q=E(function(){S(V,L)});Q.status==="error"&&L(Q.value)}function E(T,S){var M={};try{M.value=T(S),M.status="success"}catch(L){M.status="error",M.value=L}return M}(r.exports=p).prototype.finally=function(T){if(typeof T!="function")return this;var S=this.constructor;return this.then(function(M){return S.resolve(T()).then(function(){return M})},function(M){return S.resolve(T()).then(function(){throw M})})},p.prototype.catch=function(T){return this.then(null,T)},p.prototype.then=function(T,S){if(typeof T!="function"&&this.state===h||typeof S!="function"&&this.state===l)return this;var M=new this.constructor(o);return this.state!==f?g(M,this.state===h?T:S,this.outcome):this.queue.push(new m(M,T,S)),M},m.prototype.callFulfilled=function(T){a.resolve(this.promise,T)},m.prototype.otherCallFulfilled=function(T){g(this.promise,this.onFulfilled,T)},m.prototype.callRejected=function(T){a.reject(this.promise,T)},m.prototype.otherCallRejected=function(T){g(this.promise,this.onRejected,T)},a.resolve=function(T,S){var M=E(_,S);if(M.status==="error")return a.reject(T,M.value);var L=M.value;if(L)u(T,L);else{T.state=h,T.outcome=S;for(var V=-1,Q=T.queue.length;++V<Q;)T.queue[V].callFulfilled(S)}return T},a.reject=function(T,S){T.state=l,T.outcome=S;for(var M=-1,L=T.queue.length;++M<L;)T.queue[M].callRejected(S);return T},p.resolve=function(T){return T instanceof this?T:a.resolve(new this(o),T)},p.reject=function(T){var S=new this(o);return a.reject(S,T)},p.all=function(T){var S=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=T.length,L=!1;if(!M)return this.resolve([]);for(var V=new Array(M),Q=0,P=-1,A=new this(o);++P<M;)C(T[P],P);return A;function C(R,O){S.resolve(R).then(function(b){V[O]=b,++Q!==M||L||(L=!0,a.resolve(A,V))},function(b){L||(L=!0,a.reject(A,b))})}},p.race=function(T){var S=this;if(Object.prototype.toString.call(T)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=T.length,L=!1;if(!M)return this.resolve([]);for(var V=-1,Q=new this(o);++V<M;)P=T[V],S.resolve(P).then(function(A){L||(L=!0,a.resolve(Q,A))},function(A){L||(L=!0,a.reject(Q,A))});var P;return Q}},{immediate:36}],38:[function(n,r,i){var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var s=n("./zlib/deflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/messages"),h=n("./zlib/zstream"),f=Object.prototype.toString,p=0,m=-1,g=0,_=8;function u(T){if(!(this instanceof u))return new u(T);this.options=o.assign({level:m,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},T||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var M=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(M!==p)throw new Error(l[M]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var L;if(L=typeof S.dictionary=="string"?a.string2buf(S.dictionary):f.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(M=s.deflateSetDictionary(this.strm,L))!==p)throw new Error(l[M]);this._dict_set=!0}}function E(T,S){var M=new u(S);if(M.push(T,!0),M.err)throw M.msg||l[M.err];return M.result}u.prototype.push=function(T,S){var M,L,V=this.strm,Q=this.options.chunkSize;if(this.ended)return!1;L=S===~~S?S:S===!0?4:0,typeof T=="string"?V.input=a.string2buf(T):f.call(T)==="[object ArrayBuffer]"?V.input=new Uint8Array(T):V.input=T,V.next_in=0,V.avail_in=V.input.length;do{if(V.avail_out===0&&(V.output=new o.Buf8(Q),V.next_out=0,V.avail_out=Q),(M=s.deflate(V,L))!==1&&M!==p)return this.onEnd(M),!(this.ended=!0);V.avail_out!==0&&(V.avail_in!==0||L!==4&&L!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(V.output,V.next_out))):this.onData(o.shrinkBuf(V.output,V.next_out)))}while((0<V.avail_in||V.avail_out===0)&&M!==1);return L===4?(M=s.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===p):L!==2||(this.onEnd(p),!(V.avail_out=0))},u.prototype.onData=function(T){this.chunks.push(T)},u.prototype.onEnd=function(T){T===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=T,this.msg=this.strm.msg},i.Deflate=u,i.deflate=E,i.deflateRaw=function(T,S){return(S=S||{}).raw=!0,E(T,S)},i.gzip=function(T,S){return(S=S||{}).gzip=!0,E(T,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var s=n("./zlib/inflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/constants"),h=n("./zlib/messages"),f=n("./zlib/zstream"),p=n("./zlib/gzheader"),m=Object.prototype.toString;function g(u){if(!(this instanceof g))return new g(u);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},u||{});var E=this.options;E.raw&&0<=E.windowBits&&E.windowBits<16&&(E.windowBits=-E.windowBits,E.windowBits===0&&(E.windowBits=-15)),!(0<=E.windowBits&&E.windowBits<16)||u&&u.windowBits||(E.windowBits+=32),15<E.windowBits&&E.windowBits<48&&!(15&E.windowBits)&&(E.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var T=s.inflateInit2(this.strm,E.windowBits);if(T!==l.Z_OK)throw new Error(h[T]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function _(u,E){var T=new g(E);if(T.push(u,!0),T.err)throw T.msg||h[T.err];return T.result}g.prototype.push=function(u,E){var T,S,M,L,V,Q,P=this.strm,A=this.options.chunkSize,C=this.options.dictionary,R=!1;if(this.ended)return!1;S=E===~~E?E:E===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof u=="string"?P.input=a.binstring2buf(u):m.call(u)==="[object ArrayBuffer]"?P.input=new Uint8Array(u):P.input=u,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new o.Buf8(A),P.next_out=0,P.avail_out=A),(T=s.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&C&&(Q=typeof C=="string"?a.string2buf(C):m.call(C)==="[object ArrayBuffer]"?new Uint8Array(C):C,T=s.inflateSetDictionary(this.strm,Q)),T===l.Z_BUF_ERROR&&R===!0&&(T=l.Z_OK,R=!1),T!==l.Z_STREAM_END&&T!==l.Z_OK)return this.onEnd(T),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&T!==l.Z_STREAM_END&&(P.avail_in!==0||S!==l.Z_FINISH&&S!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=a.utf8border(P.output,P.next_out),L=P.next_out-M,V=a.buf2string(P.output,M),P.next_out=L,P.avail_out=A-L,L&&o.arraySet(P.output,P.output,M,L,0),this.onData(V)):this.onData(o.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(R=!0)}while((0<P.avail_in||P.avail_out===0)&&T!==l.Z_STREAM_END);return T===l.Z_STREAM_END&&(S=l.Z_FINISH),S===l.Z_FINISH?(T=s.inflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===l.Z_OK):S!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},g.prototype.onData=function(u){this.chunks.push(u)},g.prototype.onEnd=function(u){u===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},i.Inflate=g,i.inflate=_,i.inflateRaw=function(u,E){return(E=E||{}).raw=!0,_(u,E)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var p in f)f.hasOwnProperty(p)&&(l[p]=f[p])}}return l},i.shrinkBuf=function(l,h){return l.length===h?l:l.subarray?l.subarray(0,h):(l.length=h,l)};var o={arraySet:function(l,h,f,p,m){if(h.subarray&&l.subarray)l.set(h.subarray(f,f+p),m);else for(var g=0;g<p;g++)l[m+g]=h[f+g]},flattenChunks:function(l){var h,f,p,m,g,_;for(h=p=0,f=l.length;h<f;h++)p+=l[h].length;for(_=new Uint8Array(p),h=m=0,f=l.length;h<f;h++)g=l[h],_.set(g,m),m+=g.length;return _}},a={arraySet:function(l,h,f,p,m){for(var g=0;g<p;g++)l[m+g]=h[f+g]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(n,r,i){var s=n("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),h=0;h<256;h++)l[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(p,m){if(m<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(p,m));for(var g="",_=0;_<m;_++)g+=String.fromCharCode(p[_]);return g}l[254]=l[254]=1,i.string2buf=function(p){var m,g,_,u,E,T=p.length,S=0;for(u=0;u<T;u++)(64512&(g=p.charCodeAt(u)))==55296&&u+1<T&&(64512&(_=p.charCodeAt(u+1)))==56320&&(g=65536+(g-55296<<10)+(_-56320),u++),S+=g<128?1:g<2048?2:g<65536?3:4;for(m=new s.Buf8(S),u=E=0;E<S;u++)(64512&(g=p.charCodeAt(u)))==55296&&u+1<T&&(64512&(_=p.charCodeAt(u+1)))==56320&&(g=65536+(g-55296<<10)+(_-56320),u++),g<128?m[E++]=g:(g<2048?m[E++]=192|g>>>6:(g<65536?m[E++]=224|g>>>12:(m[E++]=240|g>>>18,m[E++]=128|g>>>12&63),m[E++]=128|g>>>6&63),m[E++]=128|63&g);return m},i.buf2binstring=function(p){return f(p,p.length)},i.binstring2buf=function(p){for(var m=new s.Buf8(p.length),g=0,_=m.length;g<_;g++)m[g]=p.charCodeAt(g);return m},i.buf2string=function(p,m){var g,_,u,E,T=m||p.length,S=new Array(2*T);for(g=_=0;g<T;)if((u=p[g++])<128)S[_++]=u;else if(4<(E=l[u]))S[_++]=65533,g+=E-1;else{for(u&=E===2?31:E===3?15:7;1<E&&g<T;)u=u<<6|63&p[g++],E--;1<E?S[_++]=65533:u<65536?S[_++]=u:(u-=65536,S[_++]=55296|u>>10&1023,S[_++]=56320|1023&u)}return f(S,_)},i.utf8border=function(p,m){var g;for((m=m||p.length)>p.length&&(m=p.length),g=m-1;0<=g&&(192&p[g])==128;)g--;return g<0||g===0?m:g+l[p[g]]>m?g:m}},{"./common":41}],43:[function(n,r,i){r.exports=function(s,o,a,l){for(var h=65535&s|0,f=s>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;f=f+(h=h+o[l++]|0)|0,--p;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();r.exports=function(o,a,l,h){var f=s,p=h+l;o^=-1;for(var m=h;m<p;m++)o=o>>>8^f[255&(o^a[m])];return-1^o}},{}],46:[function(n,r,i){var s,o=n("../utils/common"),a=n("./trees"),l=n("./adler32"),h=n("./crc32"),f=n("./messages"),p=0,m=4,g=0,_=-2,u=-1,E=4,T=2,S=8,M=9,L=286,V=30,Q=19,P=2*L+1,A=15,C=3,R=258,O=R+C+1,b=42,I=113,w=1,X=2,oe=3,J=4;function ce(v,K){return v.msg=f[K],K}function re(v){return(v<<1)-(4<v?9:0)}function _e(v){for(var K=v.length;0<=--K;)v[K]=0}function ne(v){var K=v.state,q=K.pending;q>v.avail_out&&(q=v.avail_out),q!==0&&(o.arraySet(v.output,K.pending_buf,K.pending_out,q,v.next_out),v.next_out+=q,K.pending_out+=q,v.total_out+=q,v.avail_out-=q,K.pending-=q,K.pending===0&&(K.pending_out=0))}function ee(v,K){a._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,K),v.block_start=v.strstart,ne(v.strm)}function de(v,K){v.pending_buf[v.pending++]=K}function pe(v,K){v.pending_buf[v.pending++]=K>>>8&255,v.pending_buf[v.pending++]=255&K}function $(v,K){var q,N,D=v.max_chain_length,B=v.strstart,U=v.prev_length,k=v.nice_match,j=v.strstart>v.w_size-O?v.strstart-(v.w_size-O):0,te=v.window,ae=v.w_mask,fe=v.prev,Ee=v.strstart+R,Pe=te[B+U-1],he=te[B+U];v.prev_length>=v.good_match&&(D>>=2),k>v.lookahead&&(k=v.lookahead);do if(te[(q=K)+U]===he&&te[q+U-1]===Pe&&te[q]===te[B]&&te[++q]===te[B+1]){B+=2,q++;do;while(te[++B]===te[++q]&&te[++B]===te[++q]&&te[++B]===te[++q]&&te[++B]===te[++q]&&te[++B]===te[++q]&&te[++B]===te[++q]&&te[++B]===te[++q]&&te[++B]===te[++q]&&B<Ee);if(N=R-(Ee-B),B=Ee-R,U<N){if(v.match_start=K,k<=(U=N))break;Pe=te[B+U-1],he=te[B+U]}}while((K=fe[K&ae])>j&&--D!=0);return U<=v.lookahead?U:v.lookahead}function le(v){var K,q,N,D,B,U,k,j,te,ae,fe=v.w_size;do{if(D=v.window_size-v.lookahead-v.strstart,v.strstart>=fe+(fe-O)){for(o.arraySet(v.window,v.window,fe,fe,0),v.match_start-=fe,v.strstart-=fe,v.block_start-=fe,K=q=v.hash_size;N=v.head[--K],v.head[K]=fe<=N?N-fe:0,--q;);for(K=q=fe;N=v.prev[--K],v.prev[K]=fe<=N?N-fe:0,--q;);D+=fe}if(v.strm.avail_in===0)break;if(U=v.strm,k=v.window,j=v.strstart+v.lookahead,te=D,ae=void 0,ae=U.avail_in,te<ae&&(ae=te),q=ae===0?0:(U.avail_in-=ae,o.arraySet(k,U.input,U.next_in,ae,j),U.state.wrap===1?U.adler=l(U.adler,k,ae,j):U.state.wrap===2&&(U.adler=h(U.adler,k,ae,j)),U.next_in+=ae,U.total_in+=ae,ae),v.lookahead+=q,v.lookahead+v.insert>=C)for(B=v.strstart-v.insert,v.ins_h=v.window[B],v.ins_h=(v.ins_h<<v.hash_shift^v.window[B+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[B+C-1])&v.hash_mask,v.prev[B&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=B,B++,v.insert--,!(v.lookahead+v.insert<C)););}while(v.lookahead<O&&v.strm.avail_in!==0)}function G(v,K){for(var q,N;;){if(v.lookahead<O){if(le(v),v.lookahead<O&&K===p)return w;if(v.lookahead===0)break}if(q=0,v.lookahead>=C&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+C-1])&v.hash_mask,q=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),q!==0&&v.strstart-q<=v.w_size-O&&(v.match_length=$(v,q)),v.match_length>=C)if(N=a._tr_tally(v,v.strstart-v.match_start,v.match_length-C),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=C){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+C-1])&v.hash_mask,q=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else N=a._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(N&&(ee(v,!1),v.strm.avail_out===0))return w}return v.insert=v.strstart<C-1?v.strstart:C-1,K===m?(ee(v,!0),v.strm.avail_out===0?oe:J):v.last_lit&&(ee(v,!1),v.strm.avail_out===0)?w:X}function Z(v,K){for(var q,N,D;;){if(v.lookahead<O){if(le(v),v.lookahead<O&&K===p)return w;if(v.lookahead===0)break}if(q=0,v.lookahead>=C&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+C-1])&v.hash_mask,q=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=C-1,q!==0&&v.prev_length<v.max_lazy_match&&v.strstart-q<=v.w_size-O&&(v.match_length=$(v,q),v.match_length<=5&&(v.strategy===1||v.match_length===C&&4096<v.strstart-v.match_start)&&(v.match_length=C-1)),v.prev_length>=C&&v.match_length<=v.prev_length){for(D=v.strstart+v.lookahead-C,N=a._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-C),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=D&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+C-1])&v.hash_mask,q=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=C-1,v.strstart++,N&&(ee(v,!1),v.strm.avail_out===0))return w}else if(v.match_available){if((N=a._tr_tally(v,0,v.window[v.strstart-1]))&&ee(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return w}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(N=a._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<C-1?v.strstart:C-1,K===m?(ee(v,!0),v.strm.avail_out===0?oe:J):v.last_lit&&(ee(v,!1),v.strm.avail_out===0)?w:X}function ge(v,K,q,N,D){this.good_length=v,this.max_lazy=K,this.nice_length=q,this.max_chain=N,this.func=D}function Ie(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*P),this.dyn_dtree=new o.Buf16(2*(2*V+1)),this.bl_tree=new o.Buf16(2*(2*Q+1)),_e(this.dyn_ltree),_e(this.dyn_dtree),_e(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(A+1),this.heap=new o.Buf16(2*L+1),_e(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*L+1),_e(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ke(v){var K;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=T,(K=v.state).pending=0,K.pending_out=0,K.wrap<0&&(K.wrap=-K.wrap),K.status=K.wrap?b:I,v.adler=K.wrap===2?0:1,K.last_flush=p,a._tr_init(K),g):ce(v,_)}function z(v){var K=ke(v);return K===g&&function(q){q.window_size=2*q.w_size,_e(q.head),q.max_lazy_match=s[q.level].max_lazy,q.good_match=s[q.level].good_length,q.nice_match=s[q.level].nice_length,q.max_chain_length=s[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=C-1,q.match_available=0,q.ins_h=0}(v.state),K}function H(v,K,q,N,D,B){if(!v)return _;var U=1;if(K===u&&(K=6),N<0?(U=0,N=-N):15<N&&(U=2,N-=16),D<1||M<D||q!==S||N<8||15<N||K<0||9<K||B<0||E<B)return ce(v,_);N===8&&(N=9);var k=new Ie;return(v.state=k).strm=v,k.wrap=U,k.gzhead=null,k.w_bits=N,k.w_size=1<<k.w_bits,k.w_mask=k.w_size-1,k.hash_bits=D+7,k.hash_size=1<<k.hash_bits,k.hash_mask=k.hash_size-1,k.hash_shift=~~((k.hash_bits+C-1)/C),k.window=new o.Buf8(2*k.w_size),k.head=new o.Buf16(k.hash_size),k.prev=new o.Buf16(k.w_size),k.lit_bufsize=1<<D+6,k.pending_buf_size=4*k.lit_bufsize,k.pending_buf=new o.Buf8(k.pending_buf_size),k.d_buf=1*k.lit_bufsize,k.l_buf=3*k.lit_bufsize,k.level=K,k.strategy=B,k.method=q,z(v)}s=[new ge(0,0,0,0,function(v,K){var q=65535;for(q>v.pending_buf_size-5&&(q=v.pending_buf_size-5);;){if(v.lookahead<=1){if(le(v),v.lookahead===0&&K===p)return w;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var N=v.block_start+q;if((v.strstart===0||v.strstart>=N)&&(v.lookahead=v.strstart-N,v.strstart=N,ee(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-O&&(ee(v,!1),v.strm.avail_out===0))return w}return v.insert=0,K===m?(ee(v,!0),v.strm.avail_out===0?oe:J):(v.strstart>v.block_start&&(ee(v,!1),v.strm.avail_out),w)}),new ge(4,4,8,4,G),new ge(4,5,16,8,G),new ge(4,6,32,32,G),new ge(4,4,16,16,Z),new ge(8,16,32,32,Z),new ge(8,16,128,128,Z),new ge(8,32,128,256,Z),new ge(32,128,258,1024,Z),new ge(32,258,258,4096,Z)],i.deflateInit=function(v,K){return H(v,K,S,15,8,0)},i.deflateInit2=H,i.deflateReset=z,i.deflateResetKeep=ke,i.deflateSetHeader=function(v,K){return v&&v.state?v.state.wrap!==2?_:(v.state.gzhead=K,g):_},i.deflate=function(v,K){var q,N,D,B;if(!v||!v.state||5<K||K<0)return v?ce(v,_):_;if(N=v.state,!v.output||!v.input&&v.avail_in!==0||N.status===666&&K!==m)return ce(v,v.avail_out===0?-5:_);if(N.strm=v,q=N.last_flush,N.last_flush=K,N.status===b)if(N.wrap===2)v.adler=0,de(N,31),de(N,139),de(N,8),N.gzhead?(de(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),de(N,255&N.gzhead.time),de(N,N.gzhead.time>>8&255),de(N,N.gzhead.time>>16&255),de(N,N.gzhead.time>>24&255),de(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),de(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(de(N,255&N.gzhead.extra.length),de(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(v.adler=h(v.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(de(N,0),de(N,0),de(N,0),de(N,0),de(N,0),de(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),de(N,3),N.status=I);else{var U=S+(N.w_bits-8<<4)<<8;U|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(U|=32),U+=31-U%31,N.status=I,pe(N,U),N.strstart!==0&&(pe(N,v.adler>>>16),pe(N,65535&v.adler)),v.adler=1}if(N.status===69)if(N.gzhead.extra){for(D=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>D&&(v.adler=h(v.adler,N.pending_buf,N.pending-D,D)),ne(v),D=N.pending,N.pending!==N.pending_buf_size));)de(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>D&&(v.adler=h(v.adler,N.pending_buf,N.pending-D,D)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){D=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>D&&(v.adler=h(v.adler,N.pending_buf,N.pending-D,D)),ne(v),D=N.pending,N.pending===N.pending_buf_size)){B=1;break}B=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,de(N,B)}while(B!==0);N.gzhead.hcrc&&N.pending>D&&(v.adler=h(v.adler,N.pending_buf,N.pending-D,D)),B===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){D=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>D&&(v.adler=h(v.adler,N.pending_buf,N.pending-D,D)),ne(v),D=N.pending,N.pending===N.pending_buf_size)){B=1;break}B=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,de(N,B)}while(B!==0);N.gzhead.hcrc&&N.pending>D&&(v.adler=h(v.adler,N.pending_buf,N.pending-D,D)),B===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&ne(v),N.pending+2<=N.pending_buf_size&&(de(N,255&v.adler),de(N,v.adler>>8&255),v.adler=0,N.status=I)):N.status=I),N.pending!==0){if(ne(v),v.avail_out===0)return N.last_flush=-1,g}else if(v.avail_in===0&&re(K)<=re(q)&&K!==m)return ce(v,-5);if(N.status===666&&v.avail_in!==0)return ce(v,-5);if(v.avail_in!==0||N.lookahead!==0||K!==p&&N.status!==666){var k=N.strategy===2?function(j,te){for(var ae;;){if(j.lookahead===0&&(le(j),j.lookahead===0)){if(te===p)return w;break}if(j.match_length=0,ae=a._tr_tally(j,0,j.window[j.strstart]),j.lookahead--,j.strstart++,ae&&(ee(j,!1),j.strm.avail_out===0))return w}return j.insert=0,te===m?(ee(j,!0),j.strm.avail_out===0?oe:J):j.last_lit&&(ee(j,!1),j.strm.avail_out===0)?w:X}(N,K):N.strategy===3?function(j,te){for(var ae,fe,Ee,Pe,he=j.window;;){if(j.lookahead<=R){if(le(j),j.lookahead<=R&&te===p)return w;if(j.lookahead===0)break}if(j.match_length=0,j.lookahead>=C&&0<j.strstart&&(fe=he[Ee=j.strstart-1])===he[++Ee]&&fe===he[++Ee]&&fe===he[++Ee]){Pe=j.strstart+R;do;while(fe===he[++Ee]&&fe===he[++Ee]&&fe===he[++Ee]&&fe===he[++Ee]&&fe===he[++Ee]&&fe===he[++Ee]&&fe===he[++Ee]&&fe===he[++Ee]&&Ee<Pe);j.match_length=R-(Pe-Ee),j.match_length>j.lookahead&&(j.match_length=j.lookahead)}if(j.match_length>=C?(ae=a._tr_tally(j,1,j.match_length-C),j.lookahead-=j.match_length,j.strstart+=j.match_length,j.match_length=0):(ae=a._tr_tally(j,0,j.window[j.strstart]),j.lookahead--,j.strstart++),ae&&(ee(j,!1),j.strm.avail_out===0))return w}return j.insert=0,te===m?(ee(j,!0),j.strm.avail_out===0?oe:J):j.last_lit&&(ee(j,!1),j.strm.avail_out===0)?w:X}(N,K):s[N.level].func(N,K);if(k!==oe&&k!==J||(N.status=666),k===w||k===oe)return v.avail_out===0&&(N.last_flush=-1),g;if(k===X&&(K===1?a._tr_align(N):K!==5&&(a._tr_stored_block(N,0,0,!1),K===3&&(_e(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),ne(v),v.avail_out===0))return N.last_flush=-1,g}return K!==m?g:N.wrap<=0?1:(N.wrap===2?(de(N,255&v.adler),de(N,v.adler>>8&255),de(N,v.adler>>16&255),de(N,v.adler>>24&255),de(N,255&v.total_in),de(N,v.total_in>>8&255),de(N,v.total_in>>16&255),de(N,v.total_in>>24&255)):(pe(N,v.adler>>>16),pe(N,65535&v.adler)),ne(v),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?g:1)},i.deflateEnd=function(v){var K;return v&&v.state?(K=v.state.status)!==b&&K!==69&&K!==73&&K!==91&&K!==103&&K!==I&&K!==666?ce(v,_):(v.state=null,K===I?ce(v,-3):g):_},i.deflateSetDictionary=function(v,K){var q,N,D,B,U,k,j,te,ae=K.length;if(!v||!v.state||(B=(q=v.state).wrap)===2||B===1&&q.status!==b||q.lookahead)return _;for(B===1&&(v.adler=l(v.adler,K,ae,0)),q.wrap=0,ae>=q.w_size&&(B===0&&(_e(q.head),q.strstart=0,q.block_start=0,q.insert=0),te=new o.Buf8(q.w_size),o.arraySet(te,K,ae-q.w_size,q.w_size,0),K=te,ae=q.w_size),U=v.avail_in,k=v.next_in,j=v.input,v.avail_in=ae,v.next_in=0,v.input=K,le(q);q.lookahead>=C;){for(N=q.strstart,D=q.lookahead-(C-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[N+C-1])&q.hash_mask,q.prev[N&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=N,N++,--D;);q.strstart=N,q.lookahead=C-1,le(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=C-1,q.match_available=0,v.next_in=k,v.input=j,v.avail_in=U,q.wrap=B,g},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(s,o){var a,l,h,f,p,m,g,_,u,E,T,S,M,L,V,Q,P,A,C,R,O,b,I,w,X;a=s.state,l=s.next_in,w=s.input,h=l+(s.avail_in-5),f=s.next_out,X=s.output,p=f-(o-s.avail_out),m=f+(s.avail_out-257),g=a.dmax,_=a.wsize,u=a.whave,E=a.wnext,T=a.window,S=a.hold,M=a.bits,L=a.lencode,V=a.distcode,Q=(1<<a.lenbits)-1,P=(1<<a.distbits)-1;e:do{M<15&&(S+=w[l++]<<M,M+=8,S+=w[l++]<<M,M+=8),A=L[S&Q];t:for(;;){if(S>>>=C=A>>>24,M-=C,(C=A>>>16&255)===0)X[f++]=65535&A;else{if(!(16&C)){if(!(64&C)){A=L[(65535&A)+(S&(1<<C)-1)];continue t}if(32&C){a.mode=12;break e}s.msg="invalid literal/length code",a.mode=30;break e}R=65535&A,(C&=15)&&(M<C&&(S+=w[l++]<<M,M+=8),R+=S&(1<<C)-1,S>>>=C,M-=C),M<15&&(S+=w[l++]<<M,M+=8,S+=w[l++]<<M,M+=8),A=V[S&P];n:for(;;){if(S>>>=C=A>>>24,M-=C,!(16&(C=A>>>16&255))){if(!(64&C)){A=V[(65535&A)+(S&(1<<C)-1)];continue n}s.msg="invalid distance code",a.mode=30;break e}if(O=65535&A,M<(C&=15)&&(S+=w[l++]<<M,(M+=8)<C&&(S+=w[l++]<<M,M+=8)),g<(O+=S&(1<<C)-1)){s.msg="invalid distance too far back",a.mode=30;break e}if(S>>>=C,M-=C,(C=f-p)<O){if(u<(C=O-C)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break e}if(I=T,(b=0)===E){if(b+=_-C,C<R){for(R-=C;X[f++]=T[b++],--C;);b=f-O,I=X}}else if(E<C){if(b+=_+E-C,(C-=E)<R){for(R-=C;X[f++]=T[b++],--C;);if(b=0,E<R){for(R-=C=E;X[f++]=T[b++],--C;);b=f-O,I=X}}}else if(b+=E-C,C<R){for(R-=C;X[f++]=T[b++],--C;);b=f-O,I=X}for(;2<R;)X[f++]=I[b++],X[f++]=I[b++],X[f++]=I[b++],R-=3;R&&(X[f++]=I[b++],1<R&&(X[f++]=I[b++]))}else{for(b=f-O;X[f++]=X[b++],X[f++]=X[b++],X[f++]=X[b++],2<(R-=3););R&&(X[f++]=X[b++],1<R&&(X[f++]=X[b++]))}break}}break}}while(l<h&&f<m);l-=R=M>>3,S&=(1<<(M-=R<<3))-1,s.next_in=l,s.next_out=f,s.avail_in=l<h?h-l+5:5-(l-h),s.avail_out=f<m?m-f+257:257-(f-m),a.hold=S,a.bits=M}},{}],49:[function(n,r,i){var s=n("../utils/common"),o=n("./adler32"),a=n("./crc32"),l=n("./inffast"),h=n("./inftrees"),f=1,p=2,m=0,g=-2,_=1,u=852,E=592;function T(b){return(b>>>24&255)+(b>>>8&65280)+((65280&b)<<8)+((255&b)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(b){var I;return b&&b.state?(I=b.state,b.total_in=b.total_out=I.total=0,b.msg="",I.wrap&&(b.adler=1&I.wrap),I.mode=_,I.last=0,I.havedict=0,I.dmax=32768,I.head=null,I.hold=0,I.bits=0,I.lencode=I.lendyn=new s.Buf32(u),I.distcode=I.distdyn=new s.Buf32(E),I.sane=1,I.back=-1,m):g}function L(b){var I;return b&&b.state?((I=b.state).wsize=0,I.whave=0,I.wnext=0,M(b)):g}function V(b,I){var w,X;return b&&b.state?(X=b.state,I<0?(w=0,I=-I):(w=1+(I>>4),I<48&&(I&=15)),I&&(I<8||15<I)?g:(X.window!==null&&X.wbits!==I&&(X.window=null),X.wrap=w,X.wbits=I,L(b))):g}function Q(b,I){var w,X;return b?(X=new S,(b.state=X).window=null,(w=V(b,I))!==m&&(b.state=null),w):g}var P,A,C=!0;function R(b){if(C){var I;for(P=new s.Buf32(512),A=new s.Buf32(32),I=0;I<144;)b.lens[I++]=8;for(;I<256;)b.lens[I++]=9;for(;I<280;)b.lens[I++]=7;for(;I<288;)b.lens[I++]=8;for(h(f,b.lens,0,288,P,0,b.work,{bits:9}),I=0;I<32;)b.lens[I++]=5;h(p,b.lens,0,32,A,0,b.work,{bits:5}),C=!1}b.lencode=P,b.lenbits=9,b.distcode=A,b.distbits=5}function O(b,I,w,X){var oe,J=b.state;return J.window===null&&(J.wsize=1<<J.wbits,J.wnext=0,J.whave=0,J.window=new s.Buf8(J.wsize)),X>=J.wsize?(s.arraySet(J.window,I,w-J.wsize,J.wsize,0),J.wnext=0,J.whave=J.wsize):(X<(oe=J.wsize-J.wnext)&&(oe=X),s.arraySet(J.window,I,w-X,oe,J.wnext),(X-=oe)?(s.arraySet(J.window,I,w-X,X,0),J.wnext=X,J.whave=J.wsize):(J.wnext+=oe,J.wnext===J.wsize&&(J.wnext=0),J.whave<J.wsize&&(J.whave+=oe))),0}i.inflateReset=L,i.inflateReset2=V,i.inflateResetKeep=M,i.inflateInit=function(b){return Q(b,15)},i.inflateInit2=Q,i.inflate=function(b,I){var w,X,oe,J,ce,re,_e,ne,ee,de,pe,$,le,G,Z,ge,Ie,ke,z,H,v,K,q,N,D=0,B=new s.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!b||!b.state||!b.output||!b.input&&b.avail_in!==0)return g;(w=b.state).mode===12&&(w.mode=13),ce=b.next_out,oe=b.output,_e=b.avail_out,J=b.next_in,X=b.input,re=b.avail_in,ne=w.hold,ee=w.bits,de=re,pe=_e,K=m;e:for(;;)switch(w.mode){case _:if(w.wrap===0){w.mode=13;break}for(;ee<16;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(2&w.wrap&&ne===35615){B[w.check=0]=255&ne,B[1]=ne>>>8&255,w.check=a(w.check,B,2,0),ee=ne=0,w.mode=2;break}if(w.flags=0,w.head&&(w.head.done=!1),!(1&w.wrap)||(((255&ne)<<8)+(ne>>8))%31){b.msg="incorrect header check",w.mode=30;break}if((15&ne)!=8){b.msg="unknown compression method",w.mode=30;break}if(ee-=4,v=8+(15&(ne>>>=4)),w.wbits===0)w.wbits=v;else if(v>w.wbits){b.msg="invalid window size",w.mode=30;break}w.dmax=1<<v,b.adler=w.check=1,w.mode=512&ne?10:12,ee=ne=0;break;case 2:for(;ee<16;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(w.flags=ne,(255&w.flags)!=8){b.msg="unknown compression method",w.mode=30;break}if(57344&w.flags){b.msg="unknown header flags set",w.mode=30;break}w.head&&(w.head.text=ne>>8&1),512&w.flags&&(B[0]=255&ne,B[1]=ne>>>8&255,w.check=a(w.check,B,2,0)),ee=ne=0,w.mode=3;case 3:for(;ee<32;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}w.head&&(w.head.time=ne),512&w.flags&&(B[0]=255&ne,B[1]=ne>>>8&255,B[2]=ne>>>16&255,B[3]=ne>>>24&255,w.check=a(w.check,B,4,0)),ee=ne=0,w.mode=4;case 4:for(;ee<16;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}w.head&&(w.head.xflags=255&ne,w.head.os=ne>>8),512&w.flags&&(B[0]=255&ne,B[1]=ne>>>8&255,w.check=a(w.check,B,2,0)),ee=ne=0,w.mode=5;case 5:if(1024&w.flags){for(;ee<16;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}w.length=ne,w.head&&(w.head.extra_len=ne),512&w.flags&&(B[0]=255&ne,B[1]=ne>>>8&255,w.check=a(w.check,B,2,0)),ee=ne=0}else w.head&&(w.head.extra=null);w.mode=6;case 6:if(1024&w.flags&&(re<($=w.length)&&($=re),$&&(w.head&&(v=w.head.extra_len-w.length,w.head.extra||(w.head.extra=new Array(w.head.extra_len)),s.arraySet(w.head.extra,X,J,$,v)),512&w.flags&&(w.check=a(w.check,X,$,J)),re-=$,J+=$,w.length-=$),w.length))break e;w.length=0,w.mode=7;case 7:if(2048&w.flags){if(re===0)break e;for($=0;v=X[J+$++],w.head&&v&&w.length<65536&&(w.head.name+=String.fromCharCode(v)),v&&$<re;);if(512&w.flags&&(w.check=a(w.check,X,$,J)),re-=$,J+=$,v)break e}else w.head&&(w.head.name=null);w.length=0,w.mode=8;case 8:if(4096&w.flags){if(re===0)break e;for($=0;v=X[J+$++],w.head&&v&&w.length<65536&&(w.head.comment+=String.fromCharCode(v)),v&&$<re;);if(512&w.flags&&(w.check=a(w.check,X,$,J)),re-=$,J+=$,v)break e}else w.head&&(w.head.comment=null);w.mode=9;case 9:if(512&w.flags){for(;ee<16;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(ne!==(65535&w.check)){b.msg="header crc mismatch",w.mode=30;break}ee=ne=0}w.head&&(w.head.hcrc=w.flags>>9&1,w.head.done=!0),b.adler=w.check=0,w.mode=12;break;case 10:for(;ee<32;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}b.adler=w.check=T(ne),ee=ne=0,w.mode=11;case 11:if(w.havedict===0)return b.next_out=ce,b.avail_out=_e,b.next_in=J,b.avail_in=re,w.hold=ne,w.bits=ee,2;b.adler=w.check=1,w.mode=12;case 12:if(I===5||I===6)break e;case 13:if(w.last){ne>>>=7&ee,ee-=7&ee,w.mode=27;break}for(;ee<3;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}switch(w.last=1&ne,ee-=1,3&(ne>>>=1)){case 0:w.mode=14;break;case 1:if(R(w),w.mode=20,I!==6)break;ne>>>=2,ee-=2;break e;case 2:w.mode=17;break;case 3:b.msg="invalid block type",w.mode=30}ne>>>=2,ee-=2;break;case 14:for(ne>>>=7&ee,ee-=7&ee;ee<32;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if((65535&ne)!=(ne>>>16^65535)){b.msg="invalid stored block lengths",w.mode=30;break}if(w.length=65535&ne,ee=ne=0,w.mode=15,I===6)break e;case 15:w.mode=16;case 16:if($=w.length){if(re<$&&($=re),_e<$&&($=_e),$===0)break e;s.arraySet(oe,X,J,$,ce),re-=$,J+=$,_e-=$,ce+=$,w.length-=$;break}w.mode=12;break;case 17:for(;ee<14;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(w.nlen=257+(31&ne),ne>>>=5,ee-=5,w.ndist=1+(31&ne),ne>>>=5,ee-=5,w.ncode=4+(15&ne),ne>>>=4,ee-=4,286<w.nlen||30<w.ndist){b.msg="too many length or distance symbols",w.mode=30;break}w.have=0,w.mode=18;case 18:for(;w.have<w.ncode;){for(;ee<3;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}w.lens[U[w.have++]]=7&ne,ne>>>=3,ee-=3}for(;w.have<19;)w.lens[U[w.have++]]=0;if(w.lencode=w.lendyn,w.lenbits=7,q={bits:w.lenbits},K=h(0,w.lens,0,19,w.lencode,0,w.work,q),w.lenbits=q.bits,K){b.msg="invalid code lengths set",w.mode=30;break}w.have=0,w.mode=19;case 19:for(;w.have<w.nlen+w.ndist;){for(;ge=(D=w.lencode[ne&(1<<w.lenbits)-1])>>>16&255,Ie=65535&D,!((Z=D>>>24)<=ee);){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(Ie<16)ne>>>=Z,ee-=Z,w.lens[w.have++]=Ie;else{if(Ie===16){for(N=Z+2;ee<N;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(ne>>>=Z,ee-=Z,w.have===0){b.msg="invalid bit length repeat",w.mode=30;break}v=w.lens[w.have-1],$=3+(3&ne),ne>>>=2,ee-=2}else if(Ie===17){for(N=Z+3;ee<N;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}ee-=Z,v=0,$=3+(7&(ne>>>=Z)),ne>>>=3,ee-=3}else{for(N=Z+7;ee<N;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}ee-=Z,v=0,$=11+(127&(ne>>>=Z)),ne>>>=7,ee-=7}if(w.have+$>w.nlen+w.ndist){b.msg="invalid bit length repeat",w.mode=30;break}for(;$--;)w.lens[w.have++]=v}}if(w.mode===30)break;if(w.lens[256]===0){b.msg="invalid code -- missing end-of-block",w.mode=30;break}if(w.lenbits=9,q={bits:w.lenbits},K=h(f,w.lens,0,w.nlen,w.lencode,0,w.work,q),w.lenbits=q.bits,K){b.msg="invalid literal/lengths set",w.mode=30;break}if(w.distbits=6,w.distcode=w.distdyn,q={bits:w.distbits},K=h(p,w.lens,w.nlen,w.ndist,w.distcode,0,w.work,q),w.distbits=q.bits,K){b.msg="invalid distances set",w.mode=30;break}if(w.mode=20,I===6)break e;case 20:w.mode=21;case 21:if(6<=re&&258<=_e){b.next_out=ce,b.avail_out=_e,b.next_in=J,b.avail_in=re,w.hold=ne,w.bits=ee,l(b,pe),ce=b.next_out,oe=b.output,_e=b.avail_out,J=b.next_in,X=b.input,re=b.avail_in,ne=w.hold,ee=w.bits,w.mode===12&&(w.back=-1);break}for(w.back=0;ge=(D=w.lencode[ne&(1<<w.lenbits)-1])>>>16&255,Ie=65535&D,!((Z=D>>>24)<=ee);){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(ge&&!(240&ge)){for(ke=Z,z=ge,H=Ie;ge=(D=w.lencode[H+((ne&(1<<ke+z)-1)>>ke)])>>>16&255,Ie=65535&D,!(ke+(Z=D>>>24)<=ee);){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}ne>>>=ke,ee-=ke,w.back+=ke}if(ne>>>=Z,ee-=Z,w.back+=Z,w.length=Ie,ge===0){w.mode=26;break}if(32&ge){w.back=-1,w.mode=12;break}if(64&ge){b.msg="invalid literal/length code",w.mode=30;break}w.extra=15&ge,w.mode=22;case 22:if(w.extra){for(N=w.extra;ee<N;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}w.length+=ne&(1<<w.extra)-1,ne>>>=w.extra,ee-=w.extra,w.back+=w.extra}w.was=w.length,w.mode=23;case 23:for(;ge=(D=w.distcode[ne&(1<<w.distbits)-1])>>>16&255,Ie=65535&D,!((Z=D>>>24)<=ee);){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(!(240&ge)){for(ke=Z,z=ge,H=Ie;ge=(D=w.distcode[H+((ne&(1<<ke+z)-1)>>ke)])>>>16&255,Ie=65535&D,!(ke+(Z=D>>>24)<=ee);){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}ne>>>=ke,ee-=ke,w.back+=ke}if(ne>>>=Z,ee-=Z,w.back+=Z,64&ge){b.msg="invalid distance code",w.mode=30;break}w.offset=Ie,w.extra=15&ge,w.mode=24;case 24:if(w.extra){for(N=w.extra;ee<N;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}w.offset+=ne&(1<<w.extra)-1,ne>>>=w.extra,ee-=w.extra,w.back+=w.extra}if(w.offset>w.dmax){b.msg="invalid distance too far back",w.mode=30;break}w.mode=25;case 25:if(_e===0)break e;if($=pe-_e,w.offset>$){if(($=w.offset-$)>w.whave&&w.sane){b.msg="invalid distance too far back",w.mode=30;break}le=$>w.wnext?($-=w.wnext,w.wsize-$):w.wnext-$,$>w.length&&($=w.length),G=w.window}else G=oe,le=ce-w.offset,$=w.length;for(_e<$&&($=_e),_e-=$,w.length-=$;oe[ce++]=G[le++],--$;);w.length===0&&(w.mode=21);break;case 26:if(_e===0)break e;oe[ce++]=w.length,_e--,w.mode=21;break;case 27:if(w.wrap){for(;ee<32;){if(re===0)break e;re--,ne|=X[J++]<<ee,ee+=8}if(pe-=_e,b.total_out+=pe,w.total+=pe,pe&&(b.adler=w.check=w.flags?a(w.check,oe,pe,ce-pe):o(w.check,oe,pe,ce-pe)),pe=_e,(w.flags?ne:T(ne))!==w.check){b.msg="incorrect data check",w.mode=30;break}ee=ne=0}w.mode=28;case 28:if(w.wrap&&w.flags){for(;ee<32;){if(re===0)break e;re--,ne+=X[J++]<<ee,ee+=8}if(ne!==(4294967295&w.total)){b.msg="incorrect length check",w.mode=30;break}ee=ne=0}w.mode=29;case 29:K=1;break e;case 30:K=-3;break e;case 31:return-4;case 32:default:return g}return b.next_out=ce,b.avail_out=_e,b.next_in=J,b.avail_in=re,w.hold=ne,w.bits=ee,(w.wsize||pe!==b.avail_out&&w.mode<30&&(w.mode<27||I!==4))&&O(b,b.output,b.next_out,pe-b.avail_out)?(w.mode=31,-4):(de-=b.avail_in,pe-=b.avail_out,b.total_in+=de,b.total_out+=pe,w.total+=pe,w.wrap&&pe&&(b.adler=w.check=w.flags?a(w.check,oe,pe,b.next_out-pe):o(w.check,oe,pe,b.next_out-pe)),b.data_type=w.bits+(w.last?64:0)+(w.mode===12?128:0)+(w.mode===20||w.mode===15?256:0),(de==0&&pe===0||I===4)&&K===m&&(K=-5),K)},i.inflateEnd=function(b){if(!b||!b.state)return g;var I=b.state;return I.window&&(I.window=null),b.state=null,m},i.inflateGetHeader=function(b,I){var w;return b&&b.state&&2&(w=b.state).wrap?((w.head=I).done=!1,m):g},i.inflateSetDictionary=function(b,I){var w,X=I.length;return b&&b.state?(w=b.state).wrap!==0&&w.mode!==11?g:w.mode===11&&o(1,I,X,0)!==w.check?-3:O(b,I,X,X)?(w.mode=31,-4):(w.havedict=1,m):g},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var s=n("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(f,p,m,g,_,u,E,T){var S,M,L,V,Q,P,A,C,R,O=T.bits,b=0,I=0,w=0,X=0,oe=0,J=0,ce=0,re=0,_e=0,ne=0,ee=null,de=0,pe=new s.Buf16(16),$=new s.Buf16(16),le=null,G=0;for(b=0;b<=15;b++)pe[b]=0;for(I=0;I<g;I++)pe[p[m+I]]++;for(oe=O,X=15;1<=X&&pe[X]===0;X--);if(X<oe&&(oe=X),X===0)return _[u++]=20971520,_[u++]=20971520,T.bits=1,0;for(w=1;w<X&&pe[w]===0;w++);for(oe<w&&(oe=w),b=re=1;b<=15;b++)if(re<<=1,(re-=pe[b])<0)return-1;if(0<re&&(f===0||X!==1))return-1;for($[1]=0,b=1;b<15;b++)$[b+1]=$[b]+pe[b];for(I=0;I<g;I++)p[m+I]!==0&&(E[$[p[m+I]]++]=I);if(P=f===0?(ee=le=E,19):f===1?(ee=o,de-=257,le=a,G-=257,256):(ee=l,le=h,-1),b=w,Q=u,ce=I=ne=0,L=-1,V=(_e=1<<(J=oe))-1,f===1&&852<_e||f===2&&592<_e)return 1;for(;;){for(A=b-ce,R=E[I]<P?(C=0,E[I]):E[I]>P?(C=le[G+E[I]],ee[de+E[I]]):(C=96,0),S=1<<b-ce,w=M=1<<J;_[Q+(ne>>ce)+(M-=S)]=A<<24|C<<16|R|0,M!==0;);for(S=1<<b-1;ne&S;)S>>=1;if(S!==0?(ne&=S-1,ne+=S):ne=0,I++,--pe[b]==0){if(b===X)break;b=p[m+E[I]]}if(oe<b&&(ne&V)!==L){for(ce===0&&(ce=oe),Q+=w,re=1<<(J=b-ce);J+ce<X&&!((re-=pe[J+ce])<=0);)J++,re<<=1;if(_e+=1<<J,f===1&&852<_e||f===2&&592<_e)return 1;_[L=ne&V]=oe<<24|J<<16|Q-u|0}}return ne!==0&&(_[Q+ne]=b-ce<<24|64<<16|0),T.bits=oe,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var s=n("../utils/common"),o=0,a=1;function l(D){for(var B=D.length;0<=--B;)D[B]=0}var h=0,f=29,p=256,m=p+1+f,g=30,_=19,u=2*m+1,E=15,T=16,S=7,M=256,L=16,V=17,Q=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],R=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],O=new Array(2*(m+2));l(O);var b=new Array(2*g);l(b);var I=new Array(512);l(I);var w=new Array(256);l(w);var X=new Array(f);l(X);var oe,J,ce,re=new Array(g);function _e(D,B,U,k,j){this.static_tree=D,this.extra_bits=B,this.extra_base=U,this.elems=k,this.max_length=j,this.has_stree=D&&D.length}function ne(D,B){this.dyn_tree=D,this.max_code=0,this.stat_desc=B}function ee(D){return D<256?I[D]:I[256+(D>>>7)]}function de(D,B){D.pending_buf[D.pending++]=255&B,D.pending_buf[D.pending++]=B>>>8&255}function pe(D,B,U){D.bi_valid>T-U?(D.bi_buf|=B<<D.bi_valid&65535,de(D,D.bi_buf),D.bi_buf=B>>T-D.bi_valid,D.bi_valid+=U-T):(D.bi_buf|=B<<D.bi_valid&65535,D.bi_valid+=U)}function $(D,B,U){pe(D,U[2*B],U[2*B+1])}function le(D,B){for(var U=0;U|=1&D,D>>>=1,U<<=1,0<--B;);return U>>>1}function G(D,B,U){var k,j,te=new Array(E+1),ae=0;for(k=1;k<=E;k++)te[k]=ae=ae+U[k-1]<<1;for(j=0;j<=B;j++){var fe=D[2*j+1];fe!==0&&(D[2*j]=le(te[fe]++,fe))}}function Z(D){var B;for(B=0;B<m;B++)D.dyn_ltree[2*B]=0;for(B=0;B<g;B++)D.dyn_dtree[2*B]=0;for(B=0;B<_;B++)D.bl_tree[2*B]=0;D.dyn_ltree[2*M]=1,D.opt_len=D.static_len=0,D.last_lit=D.matches=0}function ge(D){8<D.bi_valid?de(D,D.bi_buf):0<D.bi_valid&&(D.pending_buf[D.pending++]=D.bi_buf),D.bi_buf=0,D.bi_valid=0}function Ie(D,B,U,k){var j=2*B,te=2*U;return D[j]<D[te]||D[j]===D[te]&&k[B]<=k[U]}function ke(D,B,U){for(var k=D.heap[U],j=U<<1;j<=D.heap_len&&(j<D.heap_len&&Ie(B,D.heap[j+1],D.heap[j],D.depth)&&j++,!Ie(B,k,D.heap[j],D.depth));)D.heap[U]=D.heap[j],U=j,j<<=1;D.heap[U]=k}function z(D,B,U){var k,j,te,ae,fe=0;if(D.last_lit!==0)for(;k=D.pending_buf[D.d_buf+2*fe]<<8|D.pending_buf[D.d_buf+2*fe+1],j=D.pending_buf[D.l_buf+fe],fe++,k===0?$(D,j,B):($(D,(te=w[j])+p+1,B),(ae=P[te])!==0&&pe(D,j-=X[te],ae),$(D,te=ee(--k),U),(ae=A[te])!==0&&pe(D,k-=re[te],ae)),fe<D.last_lit;);$(D,M,B)}function H(D,B){var U,k,j,te=B.dyn_tree,ae=B.stat_desc.static_tree,fe=B.stat_desc.has_stree,Ee=B.stat_desc.elems,Pe=-1;for(D.heap_len=0,D.heap_max=u,U=0;U<Ee;U++)te[2*U]!==0?(D.heap[++D.heap_len]=Pe=U,D.depth[U]=0):te[2*U+1]=0;for(;D.heap_len<2;)te[2*(j=D.heap[++D.heap_len]=Pe<2?++Pe:0)]=1,D.depth[j]=0,D.opt_len--,fe&&(D.static_len-=ae[2*j+1]);for(B.max_code=Pe,U=D.heap_len>>1;1<=U;U--)ke(D,te,U);for(j=Ee;U=D.heap[1],D.heap[1]=D.heap[D.heap_len--],ke(D,te,1),k=D.heap[1],D.heap[--D.heap_max]=U,D.heap[--D.heap_max]=k,te[2*j]=te[2*U]+te[2*k],D.depth[j]=(D.depth[U]>=D.depth[k]?D.depth[U]:D.depth[k])+1,te[2*U+1]=te[2*k+1]=j,D.heap[1]=j++,ke(D,te,1),2<=D.heap_len;);D.heap[--D.heap_max]=D.heap[1],function(he,Be){var rt,Ke,yt,Ge,Jt,tt,Ze=Be.dyn_tree,Tt=Be.max_code,Te=Be.stat_desc.static_tree,ie=Be.stat_desc.has_stree,Qe=Be.stat_desc.extra_bits,Rt=Be.stat_desc.extra_base,xe=Be.stat_desc.max_length,Ct=0;for(Ge=0;Ge<=E;Ge++)he.bl_count[Ge]=0;for(Ze[2*he.heap[he.heap_max]+1]=0,rt=he.heap_max+1;rt<u;rt++)xe<(Ge=Ze[2*Ze[2*(Ke=he.heap[rt])+1]+1]+1)&&(Ge=xe,Ct++),Ze[2*Ke+1]=Ge,Tt<Ke||(he.bl_count[Ge]++,Jt=0,Rt<=Ke&&(Jt=Qe[Ke-Rt]),tt=Ze[2*Ke],he.opt_len+=tt*(Ge+Jt),ie&&(he.static_len+=tt*(Te[2*Ke+1]+Jt)));if(Ct!==0){do{for(Ge=xe-1;he.bl_count[Ge]===0;)Ge--;he.bl_count[Ge]--,he.bl_count[Ge+1]+=2,he.bl_count[xe]--,Ct-=2}while(0<Ct);for(Ge=xe;Ge!==0;Ge--)for(Ke=he.bl_count[Ge];Ke!==0;)Tt<(yt=he.heap[--rt])||(Ze[2*yt+1]!==Ge&&(he.opt_len+=(Ge-Ze[2*yt+1])*Ze[2*yt],Ze[2*yt+1]=Ge),Ke--)}}(D,B),G(te,Pe,D.bl_count)}function v(D,B,U){var k,j,te=-1,ae=B[1],fe=0,Ee=7,Pe=4;for(ae===0&&(Ee=138,Pe=3),B[2*(U+1)+1]=65535,k=0;k<=U;k++)j=ae,ae=B[2*(k+1)+1],++fe<Ee&&j===ae||(fe<Pe?D.bl_tree[2*j]+=fe:j!==0?(j!==te&&D.bl_tree[2*j]++,D.bl_tree[2*L]++):fe<=10?D.bl_tree[2*V]++:D.bl_tree[2*Q]++,te=j,Pe=(fe=0)===ae?(Ee=138,3):j===ae?(Ee=6,3):(Ee=7,4))}function K(D,B,U){var k,j,te=-1,ae=B[1],fe=0,Ee=7,Pe=4;for(ae===0&&(Ee=138,Pe=3),k=0;k<=U;k++)if(j=ae,ae=B[2*(k+1)+1],!(++fe<Ee&&j===ae)){if(fe<Pe)for(;$(D,j,D.bl_tree),--fe!=0;);else j!==0?(j!==te&&($(D,j,D.bl_tree),fe--),$(D,L,D.bl_tree),pe(D,fe-3,2)):fe<=10?($(D,V,D.bl_tree),pe(D,fe-3,3)):($(D,Q,D.bl_tree),pe(D,fe-11,7));te=j,Pe=(fe=0)===ae?(Ee=138,3):j===ae?(Ee=6,3):(Ee=7,4)}}l(re);var q=!1;function N(D,B,U,k){pe(D,(h<<1)+(k?1:0),3),function(j,te,ae,fe){ge(j),de(j,ae),de(j,~ae),s.arraySet(j.pending_buf,j.window,te,ae,j.pending),j.pending+=ae}(D,B,U)}i._tr_init=function(D){q||(function(){var B,U,k,j,te,ae=new Array(E+1);for(j=k=0;j<f-1;j++)for(X[j]=k,B=0;B<1<<P[j];B++)w[k++]=j;for(w[k-1]=j,j=te=0;j<16;j++)for(re[j]=te,B=0;B<1<<A[j];B++)I[te++]=j;for(te>>=7;j<g;j++)for(re[j]=te<<7,B=0;B<1<<A[j]-7;B++)I[256+te++]=j;for(U=0;U<=E;U++)ae[U]=0;for(B=0;B<=143;)O[2*B+1]=8,B++,ae[8]++;for(;B<=255;)O[2*B+1]=9,B++,ae[9]++;for(;B<=279;)O[2*B+1]=7,B++,ae[7]++;for(;B<=287;)O[2*B+1]=8,B++,ae[8]++;for(G(O,m+1,ae),B=0;B<g;B++)b[2*B+1]=5,b[2*B]=le(B,5);oe=new _e(O,P,p+1,m,E),J=new _e(b,A,0,g,E),ce=new _e(new Array(0),C,0,_,S)}(),q=!0),D.l_desc=new ne(D.dyn_ltree,oe),D.d_desc=new ne(D.dyn_dtree,J),D.bl_desc=new ne(D.bl_tree,ce),D.bi_buf=0,D.bi_valid=0,Z(D)},i._tr_stored_block=N,i._tr_flush_block=function(D,B,U,k){var j,te,ae=0;0<D.level?(D.strm.data_type===2&&(D.strm.data_type=function(fe){var Ee,Pe=4093624447;for(Ee=0;Ee<=31;Ee++,Pe>>>=1)if(1&Pe&&fe.dyn_ltree[2*Ee]!==0)return o;if(fe.dyn_ltree[18]!==0||fe.dyn_ltree[20]!==0||fe.dyn_ltree[26]!==0)return a;for(Ee=32;Ee<p;Ee++)if(fe.dyn_ltree[2*Ee]!==0)return a;return o}(D)),H(D,D.l_desc),H(D,D.d_desc),ae=function(fe){var Ee;for(v(fe,fe.dyn_ltree,fe.l_desc.max_code),v(fe,fe.dyn_dtree,fe.d_desc.max_code),H(fe,fe.bl_desc),Ee=_-1;3<=Ee&&fe.bl_tree[2*R[Ee]+1]===0;Ee--);return fe.opt_len+=3*(Ee+1)+5+5+4,Ee}(D),j=D.opt_len+3+7>>>3,(te=D.static_len+3+7>>>3)<=j&&(j=te)):j=te=U+5,U+4<=j&&B!==-1?N(D,B,U,k):D.strategy===4||te===j?(pe(D,2+(k?1:0),3),z(D,O,b)):(pe(D,4+(k?1:0),3),function(fe,Ee,Pe,he){var Be;for(pe(fe,Ee-257,5),pe(fe,Pe-1,5),pe(fe,he-4,4),Be=0;Be<he;Be++)pe(fe,fe.bl_tree[2*R[Be]+1],3);K(fe,fe.dyn_ltree,Ee-1),K(fe,fe.dyn_dtree,Pe-1)}(D,D.l_desc.max_code+1,D.d_desc.max_code+1,ae+1),z(D,D.dyn_ltree,D.dyn_dtree)),Z(D),k&&ge(D)},i._tr_tally=function(D,B,U){return D.pending_buf[D.d_buf+2*D.last_lit]=B>>>8&255,D.pending_buf[D.d_buf+2*D.last_lit+1]=255&B,D.pending_buf[D.l_buf+D.last_lit]=255&U,D.last_lit++,B===0?D.dyn_ltree[2*U]++:(D.matches++,B--,D.dyn_ltree[2*(w[U]+p+1)]++,D.dyn_dtree[2*ee(B)]++),D.last_lit===D.lit_bufsize-1},i._tr_align=function(D){pe(D,2,3),$(D,M,O),function(B){B.bi_valid===16?(de(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)}(D)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(s){(function(o,a){if(!o.setImmediate){var l,h,f,p,m=1,g={},_=!1,u=o.document,E=Object.getPrototypeOf&&Object.getPrototypeOf(o);E=E&&E.setTimeout?E:o,l={}.toString.call(o.process)==="[object process]"?function(L){process.nextTick(function(){S(L)})}:function(){if(o.postMessage&&!o.importScripts){var L=!0,V=o.onmessage;return o.onmessage=function(){L=!1},o.postMessage("","*"),o.onmessage=V,L}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",M,!1):o.attachEvent("onmessage",M),function(L){o.postMessage(p+L,"*")}):o.MessageChannel?((f=new MessageChannel).port1.onmessage=function(L){S(L.data)},function(L){f.port2.postMessage(L)}):u&&"onreadystatechange"in u.createElement("script")?(h=u.documentElement,function(L){var V=u.createElement("script");V.onreadystatechange=function(){S(L),V.onreadystatechange=null,h.removeChild(V),V=null},h.appendChild(V)}):function(L){setTimeout(S,0,L)},E.setImmediate=function(L){typeof L!="function"&&(L=new Function(""+L));for(var V=new Array(arguments.length-1),Q=0;Q<V.length;Q++)V[Q]=arguments[Q+1];var P={callback:L,args:V};return g[m]=P,l(m),m++},E.clearImmediate=T}function T(L){delete g[L]}function S(L){if(_)setTimeout(S,0,L);else{var V=g[L];if(V){_=!0;try{(function(Q){var P=Q.callback,A=Q.args;switch(A.length){case 0:P();break;case 1:P(A[0]);break;case 2:P(A[0],A[1]);break;case 3:P(A[0],A[1],A[2]);break;default:P.apply(a,A)}})(V)}finally{T(L),_=!1}}}}function M(L){L.source===o&&typeof L.data=="string"&&L.data.indexOf(p)===0&&S(+L.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Q_);var J8=Q_.exports;const Y8=Q8(J8),X8={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Z8={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},eL={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},tL={class:"export-tabs tabs"},nL={class:"export-content"},rL={class:"export-options",style:{"margin-bottom":"20px"}},iL={class:"form-group"},sL={class:"export-meta"},oL={class:"meta-item"},aL={class:"meta-item"},lL={class:"meta-item"},cL={class:"export-options",style:{"margin-bottom":"20px"}},uL={class:"form-group"},dL={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},hL={class:"coming-soon"},fL={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},pL={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},mL={key:1,class:"export-success"},gL={__name:"ExportModal",setup(t){const e=In(),n=pn(),r=Rs(),i=Se(()=>n.getProject(e.projectId)),s=ve("json"),o=ve(""),a=ve(""),l=ve(!0);Kt(i,_=>{_&&!a.value&&(a.value=_.name||"presentation")},{immediate:!0});function h(){const _=n.exportProject(e.projectId);if(!_)return;const u=new Blob([_],{type:"application/json"}),E=URL.createObjectURL(u),T=document.createElement("a");T.href=E,T.download=`${a.value||"project"}.mediasurf.json`,T.click(),URL.revokeObjectURL(E),o.value="success",setTimeout(()=>o.value="",3e3)}function f(_,u="presentation"){return String(_).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||u}function p(_,u){return`
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
`}async function g(){var X,oe,J;const _=i.value;if(!_)return;o.value="processing";const u=new Y8,E=u.folder("assets");let T=0;async function S(ce,re="media"){if((!ce||ce.startsWith("data:")||ce.startsWith("http://localhost")||ce.startsWith("blob:"))&&ce.startsWith("data:"))return ce;try{const ne=await(await fetch(ce)).blob();let ee="bin";const de=ne.type;if(de.includes("image/png")?ee="png":de.includes("image/jpeg")?ee="jpg":de.includes("image/gif")?ee="gif":de.includes("image/svg")?ee="svg":de.includes("image/webp")?ee="webp":de.includes("video/mp4")?ee="mp4":de.includes("audio/mpeg")&&(ee="mp3"),ee==="bin"){const $=ce.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);$&&(ee=$[1])}T++;const pe=`${re}_${T}.${ee}`;return E.file(pe,ne),`assets/${pe}`}catch(_e){return console.warn("Could not fetch asset:",ce,_e),ce}}const M=JSON.parse(JSON.stringify([..._.slides||[]])).sort((ce,re)=>(ce.order??0)-(re.order??0));if(l.value)for(const ce of M){ce.backgroundType==="image"&&ce.backgroundImage&&(ce.backgroundImage=await S(ce.backgroundImage,"bg"));for(const re of ce.elements||[])re.type==="image"&&((X=re.content)!=null&&X.src)&&(re.content.src=await S(re.content.src,"img")),re.type==="video"&&((oe=re.content)!=null&&oe.src)&&!re.content.src.includes("youtube")&&!re.content.src.includes("youtu.be")&&(re.content.src=await S(re.content.src,"vid")),re.type==="audio"&&((J=re.content)!=null&&J.src)&&(re.content.src=await S(re.content.src,"aud"))}const L=f(a.value||_.name||"presentation"),V={name:_.name,theme:_.theme||{},settings:_.settings||{},slides:M},Q=JSON.stringify(V).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),P=p(_.theme,_.settings),A=m(),C=`<script id="lf-data" type="application/json">${Q}<\/script>`,O=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${L}</title>
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
${C}
<script src="script.js"><\/script>
</body>
</html>`;u.file("index.html",O),u.file("style.css",P),u.file("script.js",A);const b=await u.generateAsync({type:"blob"}),I=URL.createObjectURL(b),w=document.createElement("a");w.href=I,w.download=`${L}.zip`,w.click(),URL.revokeObjectURL(I),o.value="success",setTimeout(()=>o.value="",3e3)}return(_,u)=>(W(),at(Ps,{title:"Export Project",size:"md",onClose:u[9]||(u[9]=E=>be(e).showExportModal=!1)},{footer:bt(()=>[d("button",{class:"btn btn-secondary",onClick:u[8]||(u[8]=E=>be(e).showExportModal=!1)},"Close")]),default:bt(()=>{var E,T,S,M,L;return[be(r).user?(W(),Y(De,{key:1},[d("div",tL,[d("button",{class:Fe(["tab-btn",s.value==="json"&&"active"]),onClick:u[2]||(u[2]=V=>s.value="json")},"JSON Project",2),d("button",{class:Fe(["tab-btn",s.value==="html"&&"active"]),onClick:u[3]||(u[3]=V=>s.value="html")},"HTML Package",2),d("button",{class:Fe(["tab-btn",s.value==="scorm"&&"active"]),onClick:u[4]||(u[4]=V=>s.value="scorm")},"SCORM",2)]),d("div",nL,[s.value==="json"?(W(),Y(De,{key:0},[u[20]||(u[20]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"📦"),d("div",null,[d("h4",null,"JSON Project File"),d("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),d("div",rL,[d("div",iL,[u[15]||(u[15]=d("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),ht(d("input",{type:"text","onUpdate:modelValue":u[5]||(u[5]=V=>a.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Lt,a.value]])])]),d("div",sL,[d("div",oL,[u[16]||(u[16]=d("span",null,"Project",-1)),d("strong",null,ye((E=i.value)==null?void 0:E.name),1)]),d("div",aL,[u[17]||(u[17]=d("span",null,"Slides",-1)),d("strong",null,ye(((S=(T=i.value)==null?void 0:T.slides)==null?void 0:S.length)||0),1)]),d("div",lL,[u[18]||(u[18]=d("span",null,"Elements",-1)),d("strong",null,ye(((L=(M=i.value)==null?void 0:M.slides)==null?void 0:L.reduce((V,Q)=>{var P;return V+(((P=Q.elements)==null?void 0:P.length)||0)},0))||0),1)])]),d("button",{class:"btn btn-primary export-btn",onClick:h},[...u[19]||(u[19]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Oe(" Download JSON ",-1)])])],64)):s.value==="html"?(W(),Y(De,{key:1},[u[24]||(u[24]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"🌐"),d("div",null,[d("h4",null,"Standalone HTML Package"),d("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),d("div",cL,[d("div",uL,[u[21]||(u[21]=d("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),ht(d("input",{type:"text","onUpdate:modelValue":u[6]||(u[6]=V=>a.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[Lt,a.value]])]),d("label",dL,[ht(d("input",{type:"checkbox","onUpdate:modelValue":u[7]||(u[7]=V=>l.value=V)},null,512),[[Rv,l.value]]),u[22]||(u[22]=Oe(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),u[25]||(u[25]=d("div",{class:"export-features"},[d("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),d("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),d("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),d("div",{class:"feature-item"},"✓ Progress bar"),d("div",{class:"feature-item"},"✓ Responsive scaling"),d("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),d("button",{class:"btn btn-primary export-btn",onClick:g},[...u[23]||(u[23]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Oe(" Download HTML ",-1)])])],64)):s.value==="scorm"?(W(),Y(De,{key:2},[u[29]||(u[29]=d("div",{class:"export-info"},[d("div",{class:"export-icon"},"🎓"),d("div",null,[d("h4",null,"SCORM Package"),d("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),d("div",hL,[(W(),Y("svg",fL,[...u[26]||(u[26]=[d("circle",{cx:"12",cy:"12",r:"10"},null,-1),d("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),d("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),u[27]||(u[27]=d("h4",null,"Coming Soon",-1)),u[28]||(u[28]=d("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):Re("",!0),pt(gr,{name:"fade"},{default:bt(()=>[o.value==="processing"?(W(),Y("div",pL,[...u[30]||(u[30]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),Oe(" Generating package... Please wait. ",-1)])])):o.value==="success"?(W(),Y("div",mL,[...u[31]||(u[31]=[d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("polyline",{points:"20 6 9 17 4 12"})],-1),Oe(" Export successful! Check your downloads folder. ",-1)])])):Re("",!0)]),_:1})])],64)):(W(),Y("div",X8,[(W(),Y("svg",Z8,[...u[10]||(u[10]=[d("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),d("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),u[13]||(u[13]=d("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),u[14]||(u[14]=d("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),d("div",eL,[d("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:u[0]||(u[0]=V=>be(r).loginWithGoogle())},[...u[11]||(u[11]=[d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M12 8v8m-4-4h8"})],-1),Oe(" Continue with Google ",-1)])]),d("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:u[1]||(u[1]=V=>be(r).loginWithMicrosoft())},[...u[12]||(u[12]=[d("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"7",height:"7"}),d("rect",{x:"14",y:"3",width:"7",height:"7"}),d("rect",{x:"14",y:"14",width:"7",height:"7"}),d("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),Oe(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},vL=At(gL,[["__scopeId","data-v-1dc02f55"]]),yL={key:0,class:"editor-view"},_L={class:"editor-topbar"},bL={class:"topbar-left"},wL={class:"project-name-wrap"},EL=["value"],IL={class:"save-label"},TL={class:"topbar-center"},CL={key:0,class:"slide-position"},xL={class:"topbar-right"},kL={class:"editor-body"},SL={class:"authoring-rail"},AL=["onClick","data-tooltip"],RL={key:0,class:"rail-icon"},PL={key:1,class:"rail-icon"},NL={key:2,class:"rail-icon"},OL={key:3,class:"rail-icon"},DL={key:4,class:"rail-icon"},ML={key:5,class:"rail-icon"},LL={key:6,class:"rail-icon"},VL={key:7,class:"rail-icon"},$L={key:8,class:"rail-icon"},FL={class:"right-panel"},UL={class:"panel-tabs"},zL=["onClick","data-tooltip"],BL={class:"tab-icon"},jL={class:"tab-label"},qL={class:"panel-content"},WL={key:1,class:"editor-not-found"},HL={__name:"EditorView",setup(t){const e=Sd(),n=Wl(),r=In(),i=pn(),s=Rs(),o=Se(()=>e.params.id),a=Se(()=>i.getProject(o.value)),l=Se(()=>{var le;return[...((le=a.value)==null?void 0:le.slides)||[]].sort((G,Z)=>G.order-Z.order)}),h=ve(null),f=ve(!1),p=ve("deck"),{aiStore:m,showAIModal:g,aiMode:_,aiTopic:u,aiContext:E,aiProjectName:T,aiSlideCount:S,aiQuestionCount:M,aiDifficulty:L,aiQuestionType:V,aiCreationError:Q,aiSubmitting:P,aiProjectNamePlaceholder:A,aiPrimaryActionLabel:C,openAICreationModal:R,createAIProject:O}=H_({onRequireAuth:()=>n.push({name:"dashboard"})});let b=!1,I=null;Kt(()=>a.value,le=>{if(le){if(b){b=!1;return}I&&clearTimeout(I),I=setTimeout(()=>{r.pushHistory(le)},600)}},{deep:!0}),Kt(()=>s.isAuthReady,le=>{if(le){if(!a.value){n.push({name:"dashboard"});return}r.setProject(o.value),l.value.length>0&&r.setCurrentSlide(l.value[0].id),r.pushHistory(a.value)}},{immediate:!0});const w=Se(()=>{const le=a.value;return le?`Saved ${new Date(le.updatedAt).toLocaleTimeString()}`:""}),X=Se(()=>{switch(r.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});d5({undo:()=>{if(r.canUndo()){const le=r.undo();le&&(b=!0,i.updateProject(o.value,le))}},redo:()=>{if(r.canRedo()){const le=r.redo();le&&(b=!0,i.updateProject(o.value,le))}},delete:()=>{r.selectedElementId&&(i.deleteElement(r.projectId,r.currentSlideId,r.selectedElementId),r.clearSelection())},escape:()=>{r.clearSelection(),r.setActiveTool("select")},copy:()=>{var G,Z,ge,Ie;const le=(Ie=(ge=(Z=(G=a.value)==null?void 0:G.slides)==null?void 0:Z.find(ke=>ke.id===r.currentSlideId))==null?void 0:ge.elements)==null?void 0:Ie.find(ke=>ke.id===r.selectedElementId);le&&r.setClipboard(le)},paste:()=>{if(r.clipboard&&r.currentSlideId){const le=r.clipboard;i.addElement(r.projectId,r.currentSlideId,le.type,{...le,x:le.x+20,y:le.y+20,id:void 0})}},duplicate:()=>{if(r.selectedElementId){const le=i.duplicateElement(r.projectId,r.currentSlideId,r.selectedElementId);le&&r.selectElement(le.id)}},zoomIn:()=>r.zoomIn(),zoomOut:()=>r.zoomOut(),zoomReset:()=>r.zoomReset(),toggleGrid:()=>r.toggleGrid(),nudge:(le,G)=>{var ge,Ie,ke,z;if(!r.selectedElementId)return;const Z=(z=(ke=(Ie=(ge=a.value)==null?void 0:ge.slides)==null?void 0:Ie.find(H=>H.id===r.currentSlideId))==null?void 0:ke.elements)==null?void 0:z.find(H=>H.id===r.selectedElementId);Z&&i.updateElement(r.projectId,r.currentSlideId,r.selectedElementId,{x:Z.x+le,y:Z.y+G})},selectAll:()=>{var G,Z,ge;(((ge=(Z=(G=a.value)==null?void 0:G.slides)==null?void 0:Z.find(Ie=>Ie.id===r.currentSlideId))==null?void 0:ge.elements)||[]).forEach((Ie,ke)=>r.selectElement(Ie.id,ke>0))}});function oe(){n.push({name:"dashboard"})}function J(){n.push({name:"preview",params:{id:o.value},query:{from:"editor"}})}function ce(le="deck"){p.value=le,f.value=!0}function re(){f.value=!1,R(p.value)}function _e(le,G="Image"){if(!r.projectId||!r.currentSlideId||!le)return;const Z=new Image;Z.onload=()=>{const ke=Math.min(420/Z.width,280/Z.height,1),z=Math.max(120,Math.round(Z.width*ke)),H=Math.max(80,Math.round(Z.height*ke)),v=Math.max(24,Math.round((960-z)/2)),K=Math.max(24,Math.round((540-H)/2)),q=i.addElement(r.projectId,r.currentSlideId,"image",{x:v,y:K,width:z,height:H,content:{src:le,alt:G,objectFit:"cover"}});q&&(r.selectElement(q.id),r.setRightPanel("properties"),r.setActiveTool("select"))},Z.src=le}function ne(le){const[G]=Array.from(le.target.files||[]);if(!G||!G.type.startsWith("image/"))return;const Z=new FileReader;Z.onload=()=>_e(String(Z.result||""),G.name),Z.readAsDataURL(G),le.target.value=""}function ee(){var le;(le=h.value)==null||le.click()}const de=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function pe(le){if(le==="text"){r.setActiveTool("text");return}if(le==="resources"){r.setActiveTool("image");return}if(le==="interactive-elements"){r.setActiveTool("hotspot");return}if(le==="interactive-questions"){r.setActiveTool("quiz");return}if(le==="widgets"){r.setActiveTool("shape");return}if(le==="insert"){ee();return}if(le==="style"){r.setRightPanel("properties");return}if(le==="background"){r.clearSelection(),r.setRightPanel("properties");return}le==="pages"&&r.toggleSlidePanel()}function $(le){return le==="text"?["text","heading"].includes(r.activeTool):le==="resources"?r.activeTool==="image":le==="interactive-elements"?["hotspot","button"].includes(r.activeTool):le==="interactive-questions"?r.activeTool==="quiz":le==="widgets"?["shape","video","audio"].includes(r.activeTool):le==="insert"?!1:le==="style"||le==="background"?r.rightPanelTab==="properties":le==="pages"?r.showSlidePanel:!1}return(le,G)=>a.value?(W(),Y("div",yL,[d("input",{ref_key:"imageInputRef",ref:h,type:"file",accept:"image/*",class:"sr-only",onChange:ne},null,544),d("header",_L,[d("div",bL,[d("button",{class:"btn btn-ghost btn-sm back-btn",onClick:oe,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...G[14]||(G[14]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Oe(" Dashboard ",-1)])]),d("div",wL,[d("input",{value:a.value.name,class:"project-name-input",onChange:G[0]||(G[0]=Z=>be(i).updateProject(o.value,{name:Z.target.value}))},null,40,EL)]),d("span",IL,ye(w.value),1)]),d("div",TL,[be(r).currentSlideId?(W(),Y("span",CL," Slide "+ye(l.value.findIndex(Z=>Z.id===be(r).currentSlideId)+1)+" of "+ye(l.value.length),1)):Re("",!0)]),d("div",xL,[d("button",{class:Fe(["btn btn-ghost btn-sm",be(r).showAIPanel&&"active-btn"]),onClick:G[1]||(G[1]=Z=>{be(r).showAIPanel=!be(r).showAIPanel,be(r).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...G[15]||(G[15]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Oe(" AI ",-1)])],2),d("button",{class:"btn btn-ghost btn-sm",onClick:G[2]||(G[2]=Z=>{be(r).showThemeManager=!be(r).showThemeManager,be(r).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...G[16]||(G[16]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M12 8v4m0 4h.01"})],-1),Oe(" Theme ",-1)])]),d("button",{class:"btn btn-secondary btn-sm",onClick:J,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...G[17]||(G[17]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),Oe(" Preview ",-1)])]),d("button",{class:"btn btn-primary btn-sm",onClick:G[3]||(G[3]=Z=>be(r).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...G[18]||(G[18]=[d("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d("polyline",{points:"7 10 12 15 17 10"}),d("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Oe(" Export ",-1)])])])]),pt(LO,{onOpenAiProject:ce}),d("div",kL,[d("aside",SL,[(W(),Y(De,null,it(de,Z=>d("button",{key:Z.id,class:Fe(["rail-option",$(Z.id)&&"active"]),onClick:ge=>pe(Z.id),"data-tooltip":Z.label,"data-tooltip-position":"right"},[Z.id==="text"?(W(),Y("span",RL,"T")):Z.id==="resources"?(W(),Y("span",PL,[...G[19]||(G[19]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),d("polyline",{points:"21 15 16 10 5 21"})],-1)])])):Z.id==="interactive-elements"?(W(),Y("span",NL,[...G[20]||(G[20]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):Z.id==="interactive-questions"?(W(),Y("span",OL,[...G[21]||(G[21]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("circle",{cx:"12",cy:"12",r:"10"}),d("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):Z.id==="widgets"?(W(),Y("span",DL,[...G[22]||(G[22]=[un('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1e121fb8><rect x="3" y="3" width="7" height="7" data-v-1e121fb8></rect><rect x="14" y="3" width="7" height="7" data-v-1e121fb8></rect><rect x="14" y="14" width="7" height="7" data-v-1e121fb8></rect><rect x="3" y="14" width="7" height="7" data-v-1e121fb8></rect></svg>',1)])])):Z.id==="insert"?(W(),Y("span",ML,[...G[23]||(G[23]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):Z.id==="style"?(W(),Y("span",LL,[...G[24]||(G[24]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):Z.id==="background"?(W(),Y("span",VL,[...G[25]||(G[25]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),d("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):Z.id==="pages"?(W(),Y("span",$L,[...G[26]||(G[26]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),d("polyline",{points:"13 2 13 9 20 9"})],-1)])])):Re("",!0),Oe(" "+ye(Z.label),1)],10,AL)),64))]),pt(gr,{name:"side-panel-slide"},{default:bt(()=>[be(r).showSlidePanel?(W(),at(E5,{key:0})):Re("",!0)]),_:1}),pt(ND),d("aside",FL,[d("div",UL,[(W(),Y(De,null,it([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],Z=>d("button",{key:Z.id,class:Fe(["panel-tab",be(r).rightPanelTab===Z.id&&"active"]),onClick:ge=>be(r).setRightPanel(Z.id),"data-tooltip":`Open ${Z.label}`,"data-tooltip-position":"bottom"},[d("span",BL,ye(Z.icon),1),d("span",jL,ye(Z.label),1)],10,zL)),64))]),d("div",qL,[pt(gr,{name:"editor-panel-switch",mode:"out-in"},{default:bt(()=>[(W(),Y("div",{key:X.value,class:"panel-content-view"},[be(r).rightPanelTab==="properties"?(W(),at(vO,{key:0})):be(r).rightPanelTab==="layers"?(W(),at(j5,{key:1})):be(r).rightPanelTab==="ai"?(W(),at(E8,{key:2})):be(r).rightPanelTab==="theme"?(W(),at(K8,{key:3})):Re("",!0)]))]),_:1})])])]),be(r).showExportModal?(W(),at(vL,{key:0})):Re("",!0),f.value?(W(),at(K_,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:G[4]||(G[4]=Z=>f.value=!1),onConfirm:re})):Re("",!0),be(g)?(W(),at(G_,{key:2,mode:be(_),topic:be(u),context:be(E),"project-name":be(T),"slide-count":be(S),"question-count":be(M),difficulty:be(L),"question-type":be(V),"project-name-placeholder":be(A),"primary-action-label":be(C),"creation-error":be(Q),"is-submitting":be(P),"is-generating":be(m).isGenerating,"has-api-key":!!be(m).apiKey,onClose:G[5]||(G[5]=Z=>g.value=!1),onCreate:be(O),"onUpdate:mode":G[6]||(G[6]=Z=>_.value=Z),"onUpdate:topic":G[7]||(G[7]=Z=>u.value=Z),"onUpdate:context":G[8]||(G[8]=Z=>E.value=Z),"onUpdate:projectName":G[9]||(G[9]=Z=>T.value=Z),"onUpdate:slideCount":G[10]||(G[10]=Z=>S.value=Z),"onUpdate:questionCount":G[11]||(G[11]=Z=>M.value=Z),"onUpdate:difficulty":G[12]||(G[12]=Z=>L.value=Z),"onUpdate:questionType":G[13]||(G[13]=Z=>V.value=Z)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):Re("",!0)])):(W(),Y("div",WL,[G[27]||(G[27]=d("h2",null,"Project not found",-1)),G[28]||(G[28]=d("p",null,"This project may have been deleted or the link is invalid.",-1)),d("button",{class:"btn btn-primary",onClick:oe},"Go to Dashboard")]))}},GL=At(HL,[["__scopeId","data-v-1e121fb8"]]),KL=["src","alt"],QL={key:2,style:{width:"100%",height:"100%"}},JL=["viewBox"],YL=["points","fill","stroke","stroke-width"],XL=["points","fill","stroke","stroke-width"],ZL={key:3,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center"}},eV={key:4,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",position:"relative"}},tV=["onClick"],nV={key:0,class:"hotspot-popup",style:{position:"absolute",left:"60px",top:"0",background:"#fff",color:"#111",borderRadius:"8px",padding:"12px 16px",minWidth:"160px",maxWidth:"220px",boxShadow:"0 8px 24px rgba(0,0,0,.3)",zIndex:10}},rV={style:{display:"block","margin-bottom":"4px","font-size":"14px"}},iV={style:{"font-size":"13px",margin:"0","line-height":"1.5"}},sV={key:5,style:{width:"100%",height:"100%",background:"#000","border-radius":"4px",overflow:"hidden"}},oV=["src"],aV=["src"],lV={key:2,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#666","font-size":"13px"}},cV={key:6,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center","flex-direction":"column",gap:"8px",padding:"8px","box-sizing":"border-box"}},uV={style:{"font-size":"12px",color:"#aaa"}},dV=["src"],hV={key:7,style:{width:"100%",height:"100%",padding:"16px","box-sizing":"border-box",background:"rgba(0,0,0,.4)","border-radius":"6px",overflow:"auto"}},fV={style:{margin:"0 0 12px","font-size":"15px",color:"#fff"}},pV={style:{display:"flex","flex-direction":"column",gap:"8px"}},mV=["onClick"],gV={key:0,style:{"margin-top":"12px"}},vV=["onClick","disabled"],yV={key:1,style:{"margin-top":"12px"}},_V={key:0,style:{"font-size":"12px",color:"#ccc",margin:"0 0 8px"}},bV=["onClick"],wV={class:"preview-ui"},EV={class:"preview-topbar"},IV={class:"preview-title"},TV={class:"slide-counter"},CV=["disabled"],xV=["disabled"],kV={class:"dot-nav"},SV=["onClick"],AV=960,RV=540,PV={__name:"PreviewView",setup(t){const e=Sd(),n=Wl(),r=pn(),i=Rs(),s=Se(()=>e.params.id),o=Se(()=>r.getProject(s.value)),a=Se(()=>{var de;return[...((de=o.value)==null?void 0:de.slides)||[]].sort((pe,$)=>pe.order-$.order)}),l=ve(0),h=ve(null),f=ve(1),p=ve(!0);let m=null;const g=Se(()=>a.value[l.value]||null),_=Se(()=>typeof e.query.from=="string"?e.query.from:"dashboard"),u=Se(()=>_.value==="editor"?"Back to Editor":"Back to Dashboard"),E=Se(()=>{var de;return[...((de=g.value)==null?void 0:de.elements)||[]].sort((pe,$)=>(pe.zIndex||0)-($.zIndex||0))}),T=Se(()=>{var de;switch((de=g.value)==null?void 0:de.transition){case"fade":return"slide-fade";case"slide":return"slide-shift";case"zoom":return"slide-zoom";case"flip":return"slide-flip";default:return"slide-fade"}});function S(){if(!h.value)return;const de=h.value.clientWidth,pe=h.value.clientHeight;f.value=Math.min(de/AV,pe/RV,1.5)}function M(){l.value<a.value.length-1&&l.value++}function L(){l.value>0&&l.value--}function V(de){l.value=de}function Q(de){(de.key==="ArrowRight"||de.key==="ArrowDown"||de.key===" ")&&M(),(de.key==="ArrowLeft"||de.key==="ArrowUp")&&L(),de.key==="Escape"&&C()}function P(){n.push({name:"editor",params:{id:s.value}})}function A(){n.push({name:"dashboard"})}function C(){if(_.value==="editor"){P();return}A()}function R(){p.value=!0,clearTimeout(m),m=setTimeout(()=>{p.value=!1},3e3)}const O=new ResizeObserver(S);Kt(()=>i.isAuthReady,de=>{if(de&&!o.value){n.push({name:"dashboard"});return}},{immediate:!0}),Wo(()=>{window.addEventListener("keydown",Q),h.value&&(O.observe(h.value),S()),R()}),Ho(()=>{window.removeEventListener("keydown",Q),O.disconnect(),clearTimeout(m)});function b(de){return de?de.backgroundType==="gradient"&&de.backgroundGradient?{background:de.backgroundGradient}:de.backgroundType==="image"&&de.backgroundImage?{backgroundImage:`url(${de.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:de.background||"#1a1a2e"}:{}}function I(de){return{position:"absolute",left:`${de.x}px`,top:`${de.y}px`,width:`${de.width}px`,height:`${de.height}px`,opacity:de.opacity??1,transform:de.rotation?`rotate(${de.rotation}deg)`:void 0,overflow:"hidden",pointerEvents:["button","hotspot","quiz"].includes(de.type)?"auto":"none"}}function w(de){const pe=Array.isArray(de.animations)?de.animations[0]:null,$=(pe==null?void 0:pe.type)||(pe==null?void 0:pe.name);if($)return $.toString().toLowerCase().replace(/\s+/g,"-");switch(de.type){case"heading":return"fade-up-strong";case"text":return"fade-up";case"image":return"zoom-in";case"shape":return"soft-pop";case"button":return"pop-in";case"quiz":return"fade-up-strong";case"hotspot":return"pop-in";case"video":case"audio":return"fade-up";default:return"fade-up"}}function X(de,pe){const $=I(de),le=Math.min(pe*90,720),G=de.type==="heading"?720:de.type==="image"?780:640;return{...$,"--enter-delay":`${le}ms`,"--enter-duration":`${G}ms`}}const oe=ve({}),J=ve({});function ce(de,pe){J.value[de]||(oe.value[de]=pe)}function re(de){oe.value[de.id]!==void 0&&(J.value[de.id]=!0)}function _e(de){delete oe.value[de],delete J.value[de]}const ne=ve({});function ee(de){ne.value[de]=!ne.value[de]}return(de,pe)=>(W(),Y("div",{class:"preview-root",onMousemove:R,onClick:Wt(R,["self"])},[pe[4]||(pe[4]=d("div",{class:"preview-orb preview-orb-left"},null,-1)),pe[5]||(pe[5]=d("div",{class:"preview-orb preview-orb-right"},null,-1)),pe[6]||(pe[6]=d("div",{class:"preview-grid"},null,-1)),d("div",{class:"canvas-bg",ref_key:"containerRef",ref:h},[pt(gr,{name:T.value,mode:"out-in"},{default:bt(()=>[g.value?(W(),Y("div",{class:"preview-stage",key:g.value.id},[d("div",{class:"slide-canvas",style:je([b(g.value),{transform:`scale(${f.value})`,transformOrigin:"center center"}])},[(W(!0),Y(De,null,it(E.value,($,le)=>(W(),Y(De,{key:$.id},[$.visible!==!1?(W(),Y("div",{key:0,class:Fe(["preview-element",`motion-${w($)}`]),style:je(X($,le))},[$.type==="text"||$.type==="heading"?(W(),Y("div",{key:0,class:"el-text",style:je({fontSize:$.content.fontSize+"px",color:$.content.color,fontFamily:$.content.fontFamily,fontWeight:$.content.bold||$.type==="heading"?"700":"400",fontStyle:$.content.italic?"italic":"normal",textDecoration:$.content.underline?"underline":"none",textAlign:$.content.align,lineHeight:$.content.lineHeight||1.4,letterSpacing:$.content.letterSpacing?$.content.letterSpacing+"px":void 0,padding:"4px",width:"100%",height:"100%",boxSizing:"border-box",display:"flex",alignItems:"center",wordBreak:"break-word"})},ye($.content.text),5)):$.type==="image"?(W(),Y("img",{key:1,src:$.content.src,alt:$.content.alt,style:je({width:"100%",height:"100%",objectFit:$.content.objectFit||"cover",borderRadius:$.content.borderRadius?$.content.borderRadius+"px":void 0})},null,12,KL)):$.type==="shape"?(W(),Y("div",QL,[$.content.shape==="rectangle"||$.content.shape==="circle"?(W(),Y("div",{key:0,style:je({width:"100%",height:"100%",backgroundColor:$.content.fillColor,border:`${$.content.strokeWidth||0}px solid ${$.content.strokeColor||"transparent"}`,borderRadius:$.content.shape==="circle"?"50%":($.content.borderRadius||0)+"px",boxSizing:"border-box"})},null,4)):(W(),Y("svg",{key:1,width:"100%",height:"100%",viewBox:`0 0 ${$.width} ${$.height}`,preserveAspectRatio:"xMidYMid meet"},[$.content.shape==="triangle"?(W(),Y("polygon",{key:0,points:`${$.width/2} 0 ${$.width} ${$.height} 0 ${$.height}`,fill:$.content.fillColor,stroke:$.content.strokeColor,"stroke-width":$.content.strokeWidth||0},null,8,YL)):Re("",!0),$.content.shape==="diamond"?(W(),Y("polygon",{key:1,points:`${$.width/2} 0 ${$.width} ${$.height/2} ${$.width/2} ${$.height} 0 ${$.height/2}`,fill:$.content.fillColor,stroke:$.content.strokeColor,"stroke-width":$.content.strokeWidth||0},null,8,XL)):Re("",!0)],8,JL))])):$.type==="button"?(W(),Y("div",ZL,[d("button",{style:je({padding:"8px 20px",borderRadius:"6px",fontWeight:600,fontSize:($.content.fontSize||14)+"px",cursor:"pointer",border:"2px solid "+($.content.backgroundColor||"#5865f2"),backgroundColor:$.content.variant==="outline"||$.content.variant==="ghost"?"transparent":$.content.backgroundColor||"#5865f2",color:$.content.variant==="outline"||$.content.variant==="ghost"?$.content.backgroundColor||"#5865f2":$.content.textColor||"#fff",fontFamily:$.content.fontFamily})},ye($.content.label),5)])):$.type==="hotspot"?(W(),Y("div",eV,[d("button",{class:"hotspot-trigger",style:je({width:"48px",height:"48px",borderRadius:"50%",backgroundColor:$.content.color||"#5865f2",border:"3px solid rgba(255,255,255,0.4)",color:"#fff",fontSize:"20px",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}),onClick:G=>ee($.id)},"+",12,tV),pt(gr,{name:"popup"},{default:bt(()=>[ne.value[$.id]?(W(),Y("div",nV,[d("strong",rV,ye($.content.title),1),d("p",iV,ye($.content.body),1)])):Re("",!0)]),_:2},1024)])):$.type==="video"?(W(),Y("div",sV,[$.content.src&&($.content.src.includes("youtube")||$.content.src.includes("vimeo"))?(W(),Y("iframe",{key:0,src:$.content.src,width:"100%",height:"100%",frameborder:"0",allowfullscreen:"",allow:"autoplay"},null,8,oV)):$.content.src?(W(),Y("video",{key:1,src:$.content.src,controls:"",style:{width:"100%",height:"100%","object-fit":"contain"}},null,8,aV)):(W(),Y("div",lV,"No video source"))])):$.type==="audio"?(W(),Y("div",cV,[pe[0]||(pe[0]=d("span",{style:{"font-size":"28px"}},"🎵",-1)),d("span",uV,ye($.content.label||"Audio"),1),$.content.src?(W(),Y("audio",{key:0,src:$.content.src,controls:"",style:{width:"100%","max-width":"240px"}},null,8,dV)):Re("",!0)])):$.type==="quiz"?(W(),Y("div",hV,[d("h4",fV,ye($.content.question),1),d("div",pV,[(W(!0),Y(De,null,it($.content.options,(G,Z)=>(W(),Y("button",{key:Z,onClick:ge=>ce($.id,Z),style:je({padding:"8px 12px",borderRadius:"6px",border:oe.value[$.id]===Z?"2px solid #5865f2":"1px solid rgba(255,255,255,.2)",background:J.value[$.id]?Z===$.content.correctIndex?"rgba(87,242,135,.2)":oe.value[$.id]===Z?"rgba(237,66,69,.2)":"rgba(255,255,255,.05)":oe.value[$.id]===Z?"rgba(88,101,242,.3)":"rgba(255,255,255,.05)",color:"#fff",textAlign:"left",cursor:J.value[$.id]?"default":"pointer",fontSize:"13px",fontFamily:"inherit"})},ye(G),13,mV))),128))]),J.value[$.id]?(W(),Y("div",yV,[d("p",{style:je({color:oe.value[$.id]===$.content.correctIndex?"#57f287":"#ed4245",fontWeight:600,fontSize:"13px",margin:"0 0 4px"})},ye(oe.value[$.id]===$.content.correctIndex?"✓ Correct!":"✗ Incorrect"),5),$.content.explanation?(W(),Y("p",_V,ye($.content.explanation),1)):Re("",!0),d("button",{onClick:G=>_e($.id),style:{padding:"4px 12px",background:"transparent",border:"1px solid rgba(255,255,255,.3)","border-radius":"4px",color:"#ccc","font-size":"12px",cursor:"pointer","font-family":"inherit"}},"Try Again",8,bV)])):(W(),Y("div",gV,[d("button",{onClick:G=>re($),disabled:oe.value[$.id]===void 0,style:{padding:"6px 16px",background:"#5865f2",border:"none","border-radius":"6px",color:"#fff","font-size":"13px",cursor:"pointer","font-family":"inherit"}},"Submit",8,vV)]))])):Re("",!0)],6)):Re("",!0)],64))),128))],4)])):Re("",!0)]),_:1},8,["name"])],512),pt(gr,{name:"ui-fade"},{default:bt(()=>{var $;return[ht(d("div",wV,[d("div",EV,[d("button",{class:"ui-btn",onClick:C},[pe[1]||(pe[1]=d("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[d("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1)),Oe(" "+ye(u.value),1)]),d("span",IV,ye(($=o.value)==null?void 0:$.name),1),d("span",TV,ye(l.value+1)+" / "+ye(a.value.length),1)]),d("button",{class:"nav-btn nav-btn-left",onClick:L,disabled:l.value===0},[...pe[2]||(pe[2]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M15 18l-6-6 6-6"})],-1)])],8,CV),d("button",{class:"nav-btn nav-btn-right",onClick:M,disabled:l.value===a.value.length-1},[...pe[3]||(pe[3]=[d("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[d("path",{d:"M9 18l6-6-6-6"})],-1)])],8,xV),d("div",kV,[(W(!0),Y(De,null,it(a.value,(le,G)=>(W(),Y("button",{key:le.id,class:Fe(["dot",G===l.value&&"active"]),onClick:Z=>V(G)},null,10,SV))),128))])],512),[[bw,p.value]])]}),_:1})],32))}},NV=At(PV,[["__scopeId","data-v-a786daa2"]]),OV=[{path:"/",name:"dashboard",component:u5},{path:"/editor/:id",name:"editor",component:GL,props:!0},{path:"/preview/:id",name:"preview",component:NV,props:!0}],DV=eE({history:O2(),routes:OV}),Oh=Uw(nE);Oh.use(jw());Oh.use(DV);Oh.mount("#app");
