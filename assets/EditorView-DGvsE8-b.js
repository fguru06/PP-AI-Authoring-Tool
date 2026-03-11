import{O as Mt,P as Tn,v as d,F as u,B as e,C as $,H as Z,I as ue,E as Me,D as te,u as S,Q as me,L as Ve,G as q,K as Q,q as qe,R as Nn,f as M,r as B,M as re,S as $t,w as He,N as be,i as il,U as sl,n as al,y as vt,x as nt,T as kt,V as gt,z as rl,p as dl,J as $n}from"./vue-core-DtFYlhKN.js";import{u as ul,d as cl}from"./vue-ecosystem-iLG-KstC.js";import{u as Qe,b as pl,M as vl,a as ml,C as fl,A as gl}from"./ConfirmActionModal-BEpesdiF.js";import{u as Ye,b as bl,g as yt,C as yl,n as hl,p as xl,s as wl,m as zn,f as Ln,c as Bn,d as kl,e as Cl,h as In,a as jn}from"./projectStore-DtPq_03T.js";import{_ as Re}from"./index-CGSJQjpR.js";import{C as Sl}from"./ChartElement-DC-TK6na.js";import{J as $l}from"./jszip-529iNPX7.js";let Et={},Dn;function It(r={}){Et={animate:!0,allowClose:!0,overlayClickBehavior:"close",overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...r}}function U(r){return r?Et[r]:Et}function Il(r){Dn=r}function We(){return Dn}let Ct={};function xt(r,n){Ct[r]=n}function lt(r){var n;(n=Ct[r])==null||n.call(Ct)}function Al(){Ct={}}function wt(r,n,i,s){return(r/=s/2)<1?i/2*r*r+n:-i/2*(--r*(r-2)-1)+n}function Rn(r){const n='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return r.flatMap(i=>{const s=i.matches(n),a=Array.from(i.querySelectorAll(n));return[...s?[i]:[],...a]}).filter(i=>getComputedStyle(i).pointerEvents!=="none"&&Pl(i))}function qn(r){if(!r||Ml(r))return;const n=U("smoothScroll"),i=r.offsetHeight>window.innerHeight;r.scrollIntoView({behavior:!n||El(r)?"auto":"smooth",inline:"center",block:i?"start":"center"})}function El(r){if(!r||!r.parentElement)return;const n=r.parentElement;return n.scrollHeight>n.clientHeight}function Ml(r){const n=r.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}function Pl(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)}let St={};function ze(r,n){St[r]=n}function G(r){return r?St[r]:St}function An(){St={}}function _l(r,n,i,s){let a=G("__activeStagePosition");const m=a||i.getBoundingClientRect(),y=s.getBoundingClientRect(),v=wt(r,m.x,y.x-m.x,n),h=wt(r,m.y,y.y-m.y,n),j=wt(r,m.width,y.width-m.width,n),N=wt(r,m.height,y.height-m.height,n);a={x:v,y:h,width:j,height:N},Wn(a),ze("__activeStagePosition",a)}function Fn(r){if(!r)return;const n=r.getBoundingClientRect(),i={x:n.x,y:n.y,width:n.width,height:n.height};ze("__activeStagePosition",i),Wn(i)}function Tl(){const r=G("__activeStagePosition"),n=G("__overlaySvg");if(!r)return;if(!n){console.warn("No stage svg found.");return}const i=window.innerWidth,s=window.innerHeight;n.setAttribute("viewBox",`0 0 ${i} ${s}`)}function Nl(r){const n=zl(r);document.body.appendChild(n),Vn(n,i=>{i.target.tagName==="path"&&lt("overlayClick")}),ze("__overlaySvg",n)}function Wn(r){const n=G("__overlaySvg");if(!n){Nl(r);return}const i=n.firstElementChild;if((i==null?void 0:i.tagName)!=="path")throw new Error("no path element found in stage svg");i.setAttribute("d",Un(r))}function zl(r){const n=window.innerWidth,i=window.innerHeight,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.classList.add("driver-overlay","driver-overlay-animated"),s.setAttribute("viewBox",`0 0 ${n} ${i}`),s.setAttribute("xmlSpace","preserve"),s.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),s.setAttribute("version","1.1"),s.setAttribute("preserveAspectRatio","xMinYMin slice"),s.style.fillRule="evenodd",s.style.clipRule="evenodd",s.style.strokeLinejoin="round",s.style.strokeMiterlimit="2",s.style.zIndex="10000",s.style.position="fixed",s.style.top="0",s.style.left="0",s.style.width="100%",s.style.height="100%";const a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d",Un(r)),a.style.fill=U("overlayColor")||"rgb(0,0,0)",a.style.opacity=`${U("overlayOpacity")}`,a.style.pointerEvents="auto",a.style.cursor="auto",s.appendChild(a),s}function Un(r){const n=window.innerWidth,i=window.innerHeight,s=U("stagePadding")||0,a=U("stageRadius")||0,m=r.width+s*2,y=r.height+s*2,v=Math.min(a,m/2,y/2),h=Math.floor(Math.max(v,0)),j=r.x-s+h,N=r.y-s,z=m-h*2,k=y-h*2;return`M${n},0L0,0L0,${i}L${n},${i}L${n},0Z
    M${j},${N} h${z} a${h},${h} 0 0 1 ${h},${h} v${k} a${h},${h} 0 0 1 -${h},${h} h-${z} a${h},${h} 0 0 1 -${h},-${h} v-${k} a${h},${h} 0 0 1 ${h},-${h} z`}function Ll(){const r=G("__overlaySvg");r&&r.remove()}function Bl(){const r=document.getElementById("driver-dummy-element");if(r)return r;let n=document.createElement("div");return n.id="driver-dummy-element",n.style.width="0",n.style.height="0",n.style.pointerEvents="none",n.style.opacity="0",n.style.position="fixed",n.style.top="50%",n.style.left="50%",document.body.appendChild(n),n}function En(r){const{element:n}=r;let i=typeof n=="function"?n():typeof n=="string"?document.querySelector(n):n;i||(i=Bl()),Dl(i,r)}function jl(){const r=G("__activeElement"),n=G("__activeStep");r&&(Fn(r),Tl(),Gn(r,n))}function Dl(r,n){var i;const s=Date.now(),a=G("__activeStep"),m=G("__activeElement")||r,y=!m||m===r,v=r.id==="driver-dummy-element",h=m.id==="driver-dummy-element",j=U("animate"),N=n.onHighlightStarted||U("onHighlightStarted"),z=(n==null?void 0:n.onHighlighted)||U("onHighlighted"),k=(a==null?void 0:a.onDeselected)||U("onDeselected"),C=U(),x=G();!y&&k&&k(h?void 0:m,a,{config:C,state:x,driver:We()}),N&&N(v?void 0:r,n,{config:C,state:x,driver:We()});const l=!y&&j;let g=!1;Ul(),ze("previousStep",a),ze("previousElement",m),ze("activeStep",n),ze("activeElement",r);const w=()=>{if(G("__transitionCallback")!==w)return;const D=Date.now()-s,O=400-D<=400/2;n.popover&&O&&!g&&l&&(Mn(r,n),g=!0),U("animate")&&D<400?_l(D,400,m,r):(Fn(r),z&&z(v?void 0:r,n,{config:U(),state:G(),driver:We()}),ze("__transitionCallback",void 0),ze("__previousStep",a),ze("__previousElement",m),ze("__activeStep",n),ze("__activeElement",r)),window.requestAnimationFrame(w)};ze("__transitionCallback",w),window.requestAnimationFrame(w),qn(r),!l&&n.popover&&Mn(r,n),m.classList.remove("driver-active-element","driver-no-interaction"),m.removeAttribute("aria-haspopup"),m.removeAttribute("aria-expanded"),m.removeAttribute("aria-controls"),((i=n.disableActiveInteraction)!=null?i:U("disableActiveInteraction"))&&r.classList.add("driver-no-interaction"),r.classList.add("driver-active-element"),r.setAttribute("aria-haspopup","dialog"),r.setAttribute("aria-expanded","true"),r.setAttribute("aria-controls","driver-popover-content")}function Rl(){var r;(r=document.getElementById("driver-dummy-element"))==null||r.remove(),document.querySelectorAll(".driver-active-element").forEach(n=>{n.classList.remove("driver-active-element","driver-no-interaction"),n.removeAttribute("aria-haspopup"),n.removeAttribute("aria-expanded"),n.removeAttribute("aria-controls")})}function bt(){const r=G("__resizeTimeout");r&&window.cancelAnimationFrame(r),ze("__resizeTimeout",window.requestAnimationFrame(jl))}function ql(r){var n;if(!G("isInitialized")||!(r.key==="Tab"||r.keyCode===9))return;const i=G("__activeElement"),s=(n=G("popover"))==null?void 0:n.wrapper,a=Rn([...s?[s]:[],...i?[i]:[]]),m=a[0],y=a[a.length-1];if(r.preventDefault(),r.shiftKey){const v=a[a.indexOf(document.activeElement)-1]||y;v==null||v.focus()}else{const v=a[a.indexOf(document.activeElement)+1]||m;v==null||v.focus()}}function On(r){var n;((n=U("allowKeyboardControl"))==null||n)&&(r.key==="Escape"?lt("escapePress"):r.key==="ArrowRight"?lt("arrowRightPress"):r.key==="ArrowLeft"&&lt("arrowLeftPress"))}function Vn(r,n,i){const s=(a,m)=>{const y=a.target;r.contains(y)&&((!i||i(y))&&(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation()),m==null||m(a))};document.addEventListener("pointerdown",s,!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerup",s,!0),document.addEventListener("mouseup",s,!0),document.addEventListener("click",a=>{s(a,n)},!0)}function Fl(){window.addEventListener("keyup",On,!1),window.addEventListener("keydown",ql,!1),window.addEventListener("resize",bt),window.addEventListener("scroll",bt)}function Wl(){window.removeEventListener("keyup",On),window.removeEventListener("resize",bt),window.removeEventListener("scroll",bt)}function Ul(){const r=G("popover");r&&(r.wrapper.style.display="none")}function Mn(r,n){var i,s;let a=G("popover");a&&document.body.removeChild(a.wrapper),a=Vl(),document.body.appendChild(a.wrapper);const{title:m,description:y,showButtons:v,disableButtons:h,showProgress:j,nextBtnText:N=U("nextBtnText")||"Next &rarr;",prevBtnText:z=U("prevBtnText")||"&larr; Previous",progressText:k=U("progressText")||"{current} of {total}"}=n.popover||{};a.nextButton.innerHTML=N,a.previousButton.innerHTML=z,a.progress.innerHTML=k,m?(a.title.innerHTML=m,a.title.style.display="block"):a.title.style.display="none",y?(a.description.innerHTML=y,a.description.style.display="block"):a.description.style.display="none";const C=v||U("showButtons"),x=j||U("showProgress")||!1,l=(C==null?void 0:C.includes("next"))||(C==null?void 0:C.includes("previous"))||x;a.closeButton.style.display=C.includes("close")?"block":"none",l?(a.footer.style.display="flex",a.progress.style.display=x?"block":"none",a.nextButton.style.display=C.includes("next")?"block":"none",a.previousButton.style.display=C.includes("previous")?"block":"none"):a.footer.style.display="none";const g=h||U("disableButtons")||[];g!=null&&g.includes("next")&&(a.nextButton.disabled=!0,a.nextButton.classList.add("driver-popover-btn-disabled")),g!=null&&g.includes("previous")&&(a.previousButton.disabled=!0,a.previousButton.classList.add("driver-popover-btn-disabled")),g!=null&&g.includes("close")&&(a.closeButton.disabled=!0,a.closeButton.classList.add("driver-popover-btn-disabled"));const w=a.wrapper;w.style.display="block",w.style.left="",w.style.top="",w.style.bottom="",w.style.right="",w.id="driver-popover-content",w.setAttribute("role","dialog"),w.setAttribute("aria-labelledby","driver-popover-title"),w.setAttribute("aria-describedby","driver-popover-description");const D=a.arrow;D.className="driver-popover-arrow";const O=((i=n.popover)==null?void 0:i.popoverClass)||U("popoverClass")||"";w.className=`driver-popover ${O}`.trim(),Vn(a.wrapper,ie=>{var L,R,K;const ne=ie.target,J=((L=n.popover)==null?void 0:L.onNextClick)||U("onNextClick"),se=((R=n.popover)==null?void 0:R.onPrevClick)||U("onPrevClick"),de=((K=n.popover)==null?void 0:K.onCloseClick)||U("onCloseClick");if(ne.closest(".driver-popover-next-btn"))return J?J(r,n,{config:U(),state:G(),driver:We()}):lt("nextClick");if(ne.closest(".driver-popover-prev-btn"))return se?se(r,n,{config:U(),state:G(),driver:We()}):lt("prevClick");if(ne.closest(".driver-popover-close-btn"))return de?de(r,n,{config:U(),state:G(),driver:We()}):lt("closeClick")},ie=>!(a!=null&&a.description.contains(ie))&&!(a!=null&&a.title.contains(ie))&&typeof ie.className=="string"&&ie.className.includes("driver-popover")),ze("popover",a);const oe=((s=n.popover)==null?void 0:s.onPopoverRender)||U("onPopoverRender");oe&&oe(a,{config:U(),state:G(),driver:We()}),Gn(r,n),qn(w);const V=r.classList.contains("driver-dummy-element"),Y=Rn([w,...V?[]:[r]]);Y.length>0&&Y[0].focus()}function Hn(){const r=G("popover");if(!(r!=null&&r.wrapper))return;const n=r.wrapper.getBoundingClientRect(),i=U("stagePadding")||0,s=U("popoverOffset")||0;return{width:n.width+i+s,height:n.height+i+s,realWidth:n.width,realHeight:n.height}}function Pn(r,n){const{elementDimensions:i,popoverDimensions:s,popoverPadding:a,popoverArrowDimensions:m}=n;return r==="start"?Math.max(Math.min(i.top-a,window.innerHeight-s.realHeight-m.width),m.width):r==="end"?Math.max(Math.min(i.top-(s==null?void 0:s.realHeight)+i.height+a,window.innerHeight-(s==null?void 0:s.realHeight)-m.width),m.width):r==="center"?Math.max(Math.min(i.top+i.height/2-(s==null?void 0:s.realHeight)/2,window.innerHeight-(s==null?void 0:s.realHeight)-m.width),m.width):0}function _n(r,n){const{elementDimensions:i,popoverDimensions:s,popoverPadding:a,popoverArrowDimensions:m}=n;return r==="start"?Math.max(Math.min(i.left-a,window.innerWidth-s.realWidth-m.width),m.width):r==="end"?Math.max(Math.min(i.left-(s==null?void 0:s.realWidth)+i.width+a,window.innerWidth-(s==null?void 0:s.realWidth)-m.width),m.width):r==="center"?Math.max(Math.min(i.left+i.width/2-(s==null?void 0:s.realWidth)/2,window.innerWidth-(s==null?void 0:s.realWidth)-m.width),m.width):0}function Gn(r,n){const i=G("popover");if(!i)return;const{align:s="start",side:a="left"}=(n==null?void 0:n.popover)||{},m=s,y=r.id==="driver-dummy-element"?"over":a,v=U("stagePadding")||0,h=Hn(),j=i.arrow.getBoundingClientRect(),N=r.getBoundingClientRect(),z=N.top-h.height;let k=z>=0;const C=window.innerHeight-(N.bottom+h.height);let x=C>=0;const l=N.left-h.width;let g=l>=0;const w=window.innerWidth-(N.right+h.width);let D=w>=0;const O=!k&&!x&&!g&&!D;let oe=y;if(y==="top"&&k?D=g=x=!1:y==="bottom"&&x?D=g=k=!1:y==="left"&&g?D=k=x=!1:y==="right"&&D&&(g=k=x=!1),y==="over"){const V=window.innerWidth/2-h.realWidth/2,Y=window.innerHeight/2-h.realHeight/2;i.wrapper.style.left=`${V}px`,i.wrapper.style.right="auto",i.wrapper.style.top=`${Y}px`,i.wrapper.style.bottom="auto"}else if(O){const V=window.innerWidth/2-(h==null?void 0:h.realWidth)/2,Y=10;i.wrapper.style.left=`${V}px`,i.wrapper.style.right="auto",i.wrapper.style.bottom=`${Y}px`,i.wrapper.style.top="auto"}else if(g){const V=Math.min(l,window.innerWidth-(h==null?void 0:h.realWidth)-j.width),Y=Pn(m,{elementDimensions:N,popoverDimensions:h,popoverPadding:v,popoverArrowDimensions:j});i.wrapper.style.left=`${V}px`,i.wrapper.style.top=`${Y}px`,i.wrapper.style.bottom="auto",i.wrapper.style.right="auto",oe="left"}else if(D){const V=Math.min(w,window.innerWidth-(h==null?void 0:h.realWidth)-j.width),Y=Pn(m,{elementDimensions:N,popoverDimensions:h,popoverPadding:v,popoverArrowDimensions:j});i.wrapper.style.right=`${V}px`,i.wrapper.style.top=`${Y}px`,i.wrapper.style.bottom="auto",i.wrapper.style.left="auto",oe="right"}else if(k){const V=Math.min(z,window.innerHeight-h.realHeight-j.width);let Y=_n(m,{elementDimensions:N,popoverDimensions:h,popoverPadding:v,popoverArrowDimensions:j});i.wrapper.style.top=`${V}px`,i.wrapper.style.left=`${Y}px`,i.wrapper.style.bottom="auto",i.wrapper.style.right="auto",oe="top"}else if(x){const V=Math.min(C,window.innerHeight-(h==null?void 0:h.realHeight)-j.width);let Y=_n(m,{elementDimensions:N,popoverDimensions:h,popoverPadding:v,popoverArrowDimensions:j});i.wrapper.style.left=`${Y}px`,i.wrapper.style.bottom=`${V}px`,i.wrapper.style.top="auto",i.wrapper.style.right="auto",oe="bottom"}O?i.arrow.classList.add("driver-popover-arrow-none"):Ol(m,oe,r)}function Ol(r,n,i){const s=G("popover");if(!s)return;const a=i.getBoundingClientRect(),m=Hn(),y=s.arrow,v=m.width,h=window.innerWidth,j=a.width,N=a.left,z=m.height,k=window.innerHeight,C=a.top,x=a.height;y.className="driver-popover-arrow";let l=n,g=r;if(n==="top"?(N+j<=0?(l="right",g="end"):N+j-v<=0&&(l="top",g="start"),N>=h?(l="left",g="end"):N+v>=h&&(l="top",g="end")):n==="bottom"?(N+j<=0?(l="right",g="start"):N+j-v<=0&&(l="bottom",g="start"),N>=h?(l="left",g="start"):N+v>=h&&(l="bottom",g="end")):n==="left"?(C+x<=0?(l="bottom",g="end"):C+x-z<=0&&(l="left",g="start"),C>=k?(l="top",g="end"):C+z>=k&&(l="left",g="end")):n==="right"&&(C+x<=0?(l="bottom",g="start"):C+x-z<=0&&(l="right",g="start"),C>=k?(l="top",g="start"):C+z>=k&&(l="right",g="end")),!l)y.classList.add("driver-popover-arrow-none");else{y.classList.add(`driver-popover-arrow-side-${l}`),y.classList.add(`driver-popover-arrow-align-${g}`);const w=i.getBoundingClientRect(),D=y.getBoundingClientRect(),O=U("stagePadding")||0,oe=w.left-O<window.innerWidth&&w.right+O>0&&w.top-O<window.innerHeight&&w.bottom+O>0;n==="bottom"&&oe&&(D.x>w.x&&D.x+D.width<w.x+w.width?s.wrapper.style.transform="translateY(0)":(y.classList.remove(`driver-popover-arrow-align-${g}`),y.classList.add("driver-popover-arrow-none"),s.wrapper.style.transform=`translateY(-${O/2}px)`))}}function Vl(){const r=document.createElement("div");r.classList.add("driver-popover");const n=document.createElement("div");n.classList.add("driver-popover-arrow");const i=document.createElement("header");i.id="driver-popover-title",i.classList.add("driver-popover-title"),i.style.display="none",i.innerText="Popover Title";const s=document.createElement("div");s.id="driver-popover-description",s.classList.add("driver-popover-description"),s.style.display="none",s.innerText="Popover description is here";const a=document.createElement("button");a.type="button",a.classList.add("driver-popover-close-btn"),a.setAttribute("aria-label","Close"),a.innerHTML="&times;";const m=document.createElement("footer");m.classList.add("driver-popover-footer");const y=document.createElement("span");y.classList.add("driver-popover-progress-text"),y.innerText="";const v=document.createElement("span");v.classList.add("driver-popover-navigation-btns");const h=document.createElement("button");h.type="button",h.classList.add("driver-popover-prev-btn"),h.innerHTML="&larr; Previous";const j=document.createElement("button");return j.type="button",j.classList.add("driver-popover-next-btn"),j.innerHTML="Next &rarr;",v.appendChild(h),v.appendChild(j),m.appendChild(y),m.appendChild(v),r.appendChild(a),r.appendChild(n),r.appendChild(i),r.appendChild(s),r.appendChild(m),{wrapper:r,arrow:n,title:i,description:s,footer:m,previousButton:h,nextButton:j,closeButton:a,footerButtons:v,progress:y}}function Hl(){var r;const n=G("popover");n&&((r=n.wrapper.parentElement)==null||r.removeChild(n.wrapper))}function Gl(r={}){It(r);function n(){U("allowClose")&&N()}function i(){const k=U("overlayClickBehavior");if(U("allowClose")&&k==="close"){N();return}if(typeof k=="function"){const C=G("__activeStep"),x=G("__activeElement");k(x,C,{config:U(),state:G(),driver:We()});return}k==="nextStep"&&s()}function s(){const k=G("activeIndex"),C=U("steps")||[];if(typeof k>"u")return;const x=k+1;C[x]?j(x):N()}function a(){const k=G("activeIndex"),C=U("steps")||[];if(typeof k>"u")return;const x=k-1;C[x]?j(x):N()}function m(k){(U("steps")||[])[k]?j(k):N()}function y(){var k;if(G("__transitionCallback"))return;const C=G("activeIndex"),x=G("__activeStep"),l=G("__activeElement");if(typeof C>"u"||typeof x>"u"||typeof G("activeIndex")>"u")return;const g=((k=x.popover)==null?void 0:k.onPrevClick)||U("onPrevClick");if(g)return g(l,x,{config:U(),state:G(),driver:We()});a()}function v(){var k;if(G("__transitionCallback"))return;const C=G("activeIndex"),x=G("__activeStep"),l=G("__activeElement");if(typeof C>"u"||typeof x>"u")return;const g=((k=x.popover)==null?void 0:k.onNextClick)||U("onNextClick");if(g)return g(l,x,{config:U(),state:G(),driver:We()});s()}function h(){G("isInitialized")||(ze("isInitialized",!0),document.body.classList.add("driver-active",U("animate")?"driver-fade":"driver-simple"),Fl(),xt("overlayClick",i),xt("escapePress",n),xt("arrowLeftPress",y),xt("arrowRightPress",v))}function j(k=0){var C,x,l,g,w,D,O,oe;const V=U("steps");if(!V){console.error("No steps to drive through"),N();return}if(!V[k]){N();return}ze("__activeOnDestroyed",document.activeElement),ze("activeIndex",k);const Y=V[k],ie=V[k+1],L=V[k-1],R=((C=Y.popover)==null?void 0:C.doneBtnText)||U("doneBtnText")||"Done",K=U("allowClose"),ne=typeof((x=Y.popover)==null?void 0:x.showProgress)<"u"?(l=Y.popover)==null?void 0:l.showProgress:U("showProgress"),J=(((g=Y.popover)==null?void 0:g.progressText)||U("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${k+1}`).replace("{{total}}",`${V.length}`),se=((w=Y.popover)==null?void 0:w.showButtons)||U("showButtons"),de=["next","previous",...K?["close"]:[]].filter(ge=>!(se!=null&&se.length)||se.includes(ge)),Ee=((D=Y.popover)==null?void 0:D.onNextClick)||U("onNextClick"),he=((O=Y.popover)==null?void 0:O.onPrevClick)||U("onPrevClick"),fe=((oe=Y.popover)==null?void 0:oe.onCloseClick)||U("onCloseClick");En({...Y,popover:{showButtons:de,nextBtnText:ie?void 0:R,disableButtons:[...L?[]:["previous"]],showProgress:ne,progressText:J,onNextClick:Ee||(()=>{ie?j(k+1):N()}),onPrevClick:he||(()=>{j(k-1)}),onCloseClick:fe||(()=>{N()}),...(Y==null?void 0:Y.popover)||{}}})}function N(k=!0){const C=G("__activeElement"),x=G("__activeStep"),l=G("__activeOnDestroyed"),g=U("onDestroyStarted");if(k&&g){const O=!C||(C==null?void 0:C.id)==="driver-dummy-element";g(O?void 0:C,x,{config:U(),state:G(),driver:We()});return}const w=(x==null?void 0:x.onDeselected)||U("onDeselected"),D=U("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),Wl(),Hl(),Rl(),Ll(),Al(),An(),C&&x){const O=C.id==="driver-dummy-element";w&&w(O?void 0:C,x,{config:U(),state:G(),driver:We()}),D&&D(O?void 0:C,x,{config:U(),state:G(),driver:We()})}l&&l.focus()}const z={isActive:()=>G("isInitialized")||!1,refresh:bt,drive:(k=0)=>{h(),j(k)},setConfig:It,setSteps:k=>{An(),It({...U(),steps:k})},getConfig:U,getState:G,getActiveIndex:()=>G("activeIndex"),isFirstStep:()=>G("activeIndex")===0,isLastStep:()=>{const k=U("steps")||[],C=G("activeIndex");return C!==void 0&&C===k.length-1},getActiveStep:()=>G("activeStep"),getActiveElement:()=>G("activeElement"),getPreviousElement:()=>G("previousElement"),getPreviousStep:()=>G("previousStep"),moveNext:s,movePrevious:a,moveTo:m,hasNextStep:()=>{const k=U("steps")||[],C=G("activeIndex");return C!==void 0&&!!k[C+1]},hasPreviousStep:()=>{const k=U("steps")||[],C=G("activeIndex");return C!==void 0&&!!k[C-1]},highlight:k=>{h(),En({...k,popover:k.popover?{showButtons:[],showProgress:!1,progressText:"",...k.popover}:void 0})},destroy:()=>{N(!1)}};return Il(z),z}function Ql(r){function n(i){var v,h,j,N,z,k,C,x,l,g,w,D,O,oe,V,Y,ie;const s=i.ctrlKey||i.metaKey,a=i.key.toLowerCase(),m=i.target.tagName.toLowerCase(),y=m==="input"||m==="textarea"||i.target.isContentEditable;y&&s&&["c","v","x","a","z","y"].includes(a)||(s&&a==="z"&&!i.shiftKey?(i.preventDefault(),(v=r.undo)==null||v.call(r)):s&&(a==="y"||a==="z"&&i.shiftKey)?(i.preventDefault(),(h=r.redo)==null||h.call(r)):s&&a==="c"?(i.preventDefault(),(j=r.copy)==null||j.call(r)):s&&a==="v"?(i.preventDefault(),(N=r.paste)==null||N.call(r)):s&&a==="x"?(i.preventDefault(),(z=r.cut)==null||z.call(r)):s&&a==="d"?(i.preventDefault(),(k=r.duplicate)==null||k.call(r)):s&&a==="a"?(i.preventDefault(),(C=r.selectAll)==null||C.call(r)):a==="delete"||a==="backspace"?y||(i.preventDefault(),(x=r.delete)==null||x.call(r)):a==="escape"?(l=r.escape)==null||l.call(r):s&&a==="g"?(i.preventDefault(),(g=r.toggleGrid)==null||g.call(r)):s&&a==="="||s&&a==="+"?(i.preventDefault(),(w=r.zoomIn)==null||w.call(r)):s&&a==="-"?(i.preventDefault(),(D=r.zoomOut)==null||D.call(r)):s&&a==="0"?(i.preventDefault(),(O=r.zoomReset)==null||O.call(r)):a==="arrowleft"?(oe=r.nudge)==null||oe.call(r,-1,0):a==="arrowright"?(V=r.nudge)==null||V.call(r,1,0):a==="arrowup"?(Y=r.nudge)==null||Y.call(r,0,-1):a==="arrowdown"&&((ie=r.nudge)==null||ie.call(r,0,1)))}Mt(()=>window.addEventListener("keydown",n)),Tn(()=>window.removeEventListener("keydown",n))}const Yl={class:"slide-panel"},Kl={class:"slide-panel-header"},Jl={class:"slide-count"},Xl={class:"slides-list"},Zl=["onClick","onContextmenu","onDragstart","onDrop"],ei={class:"slide-number"},ti=["viewBox"],oi=["x","y","width","height","fill"],ni=["d","stroke"],li=["d","fill"],ii={class:"slide-footer"},si={class:"slide-title"},ai=["onClick"],ri={__name:"SlidePanel",setup(r){const n=Qe(),i=Ye(),s=M(()=>i.getProject(n.projectId)),a=M(()=>yt(s.value)),m=M(()=>{var L,R;return((R=(L=s.value)==null?void 0:L.slides)==null?void 0:R.slice().sort((K,ne)=>K.order-ne.order))||[]}),y=B({show:!1,x:0,y:0,slideId:null});function v(L){n.setCurrentSlide(L)}function h(){const L=m.value.findIndex(K=>K.id===n.currentSlideId),R=i.addSlide(n.projectId,L);R&&n.setCurrentSlide(R.id)}function j(L){var ne,J;const R=m.value.findIndex(se=>se.id===L);i.deleteSlide(n.projectId,L);const K=((ne=s.value)==null?void 0:ne.slides)||[];if(K.length>0){const se=K.slice().sort((Ee,he)=>Ee.order-he.order),de=Math.min(R,se.length-1);n.setCurrentSlide((J=se[de])==null?void 0:J.id)}}function N(L,R){L.preventDefault(),y.value={show:!0,x:L.clientX,y:L.clientY,slideId:R},setTimeout(()=>window.addEventListener("click",z,{once:!0}),0)}function z(){y.value.show=!1}function k(){const L=i.duplicateSlide(n.projectId,y.value.slideId);L&&n.setCurrentSlide(L.id),z()}function C(){j(y.value.slideId),z()}function x(L,R){L.stopPropagation(),j(R)}function l(){const L=m.value.findIndex(R=>R.id===y.value.slideId);L>0&&i.reorderSlides(n.projectId,L,L-1),z()}function g(){const L=m.value.findIndex(R=>R.id===y.value.slideId);L<m.value.length-1&&i.reorderSlides(n.projectId,L,L+1),z()}let w=-1;function D(L,R){w=R,L.dataTransfer.effectAllowed="move"}function O(L,R){L.preventDefault(),w!==-1&&w!==R&&i.reorderSlides(n.projectId,w,R),w=-1}function oe(L){return L.backgroundType==="gradient"&&L.backgroundGradient?{background:L.backgroundGradient}:L.backgroundType==="image"&&L.backgroundImage?{backgroundImage:`url(${L.backgroundImage})`,backgroundSize:"cover"}:{background:L.background||"#fff"}}function V(L){return{left:L.x/a.value.width*100+"%",top:L.y/a.value.height*100+"%",width:L.width/a.value.width*100+"%",height:L.height/a.value.height*100+"%"}}function Y(L){var R,K;return{background:L.type==="shape"?(R=L.content)==null?void 0:R.fillColor:L.type==="button"?"var(--color-primary)":"rgba(0,0,0,.1)",borderRadius:L.type==="shape"&&((K=L.content)==null?void 0:K.shapeType)==="circle"?"50%":void 0}}function ie(L){var R;return bl(L.content||{},L.width||420,L.height||280,((R=s.value)==null?void 0:R.theme)||{})}return(L,R)=>(d(),u("div",Yl,[e("div",Kl,[R[2]||(R[2]=e("span",{class:"panel-section-title"},"Slides",-1)),e("span",Jl,$(m.value.length),1),e("button",{class:"btn btn-icon add-slide-btn",onClick:h,"data-tooltip":"Add slide","aria-label":"Add slide"},[...R[1]||(R[1]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])]),e("div",Xl,[(d(!0),u(Z,null,ue(m.value,(K,ne)=>(d(),u("div",{key:K.id,class:te(["slide-thumb-item",S(n).currentSlideId===K.id&&"active"]),draggable:"true",onClick:J=>v(K.id),onContextmenu:J=>N(J,K.id),onDragstart:J=>D(J,ne),onDragover:R[0]||(R[0]=Me(()=>{},["prevent"])),onDrop:J=>O(J,ne)},[e("div",ei,$(ne+1),1),e("div",{class:"slide-thumb",style:me(oe(K))},[(d(!0),u(Z,null,ue(K.elements.slice(0,6),J=>{var se;return d(),u("div",{key:J.id,class:"mini-element-frame",style:me(V(J))},[J.type==="chart"?(d(),u("svg",{key:0,class:"mini-chart-svg",viewBox:`0 0 ${J.width||420} ${J.height||280}`,preserveAspectRatio:"none"},[ie(J).type==="bar"?(d(!0),u(Z,{key:0},ue(ie(J).cartesian.bars,de=>(d(),u("rect",{key:`mini-bar-${de.id}`,x:de.x,y:de.y,width:de.width,height:de.height,fill:de.color,rx:"6"},null,8,oi))),128)):ie(J).type==="line"?(d(),u("path",{key:1,d:ie(J).cartesian.linePath,stroke:((se=ie(J).cartesian.points[0])==null?void 0:se.color)||"#6c47ff","stroke-width":"10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},null,8,ni)):(d(!0),u(Z,{key:2},ue(ie(J).circle.slices,de=>(d(),u("path",{key:`mini-slice-${de.id}`,d:de.path,fill:de.color},null,8,li))),128))],8,ti)):(d(),u("div",{key:1,class:"mini-element",style:me(Y(J))},null,4))],4)}),128))],4),e("div",ii,[e("div",si,$(K.title||`Slide ${ne+1}`),1),m.value.length>1?(d(),u("button",{key:0,class:"slide-delete-btn",title:"Delete slide","aria-label":"Delete slide",onClick:J=>x(J,K.id)},[...R[3]||(R[3]=[Ve('<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30eea542><polyline points="3 6 5 6 21 6" data-v-30eea542></polyline><path d="M19 6l-1 14H6L5 6" data-v-30eea542></path><path d="M10 11v6M14 11v6" data-v-30eea542></path><path d="M9 6V4h6v2" data-v-30eea542></path></svg>',1)])],8,ai)):q("",!0)])],42,Zl))),128))]),e("button",{class:"add-slide-bottom",onClick:h},[...R[4]||(R[4]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Q(" Add Slide ",-1)])]),(d(),qe(Nn,{to:"body"},[y.value.show?(d(),u("div",{key:0,class:"context-menu",style:me({left:y.value.x+"px",top:y.value.y+"px"})},[e("button",{class:"ctx-item",onClick:k},"Duplicate"),e("button",{class:"ctx-item",onClick:l},"Move Up"),e("button",{class:"ctx-item",onClick:g},"Move Down"),R[5]||(R[5]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:C},"Delete Slide")],4)):q("",!0)]))]))}},di=Re(ri,[["__scopeId","data-v-30eea542"]]),ui={class:"layer-panel"},ci={class:"layer-header panel-section"},pi={class:"panel-title",style:{"margin-bottom":"0"}},vi={class:"layer-count"},mi={key:0,class:"layers-empty"},fi={key:1,class:"layers-list"},gi=["onClick"],bi={class:"layer-type-icon"},yi={class:"layer-name"},hi={class:"layer-actions"},xi=["onClick","data-tooltip"],wi={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ki={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ci=["onClick","data-tooltip"],Si={key:0,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},$i={key:1,width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Ii=["onClick"],Ai=["onClick"],Ei=["onClick"],Mi={__name:"LayerPanel",setup(r){const n=Qe(),i=Ye(),s=M(()=>i.getProject(n.projectId)),a=M(()=>{var x,l;return(l=(x=s.value)==null?void 0:x.slides)==null?void 0:l.find(g=>g.id===n.currentSlideId)}),m=M(()=>{var x;return[...((x=a.value)==null?void 0:x.elements)||[]].sort((l,g)=>(g.zIndex||0)-(l.zIndex||0))});function y(x){n.selectElement(x)}function v(x){i.updateElement(n.projectId,n.currentSlideId,x.id,{visible:!x.visible})}function h(x){i.updateElement(n.projectId,n.currentSlideId,x.id,{locked:!x.locked})}function j(x){i.reorderElement(n.projectId,n.currentSlideId,x,"up")}function N(x){i.reorderElement(n.projectId,n.currentSlideId,x,"down")}function z(x){i.deleteElement(n.projectId,n.currentSlideId,x),n.selectedElementId===x&&n.clearSelection()}function k(x){return{text:"T",heading:"H1",image:"🖼",shape:"■",button:"◉",hotspot:"?",video:"▶",audio:"♪",quiz:"✅",divider:"—"}[x]||"◆"}function C(x){var l,g,w;return(l=x.content)!=null&&l.text?x.content.text.slice(0,24):(g=x.content)!=null&&g.label?x.content.label:(w=x.content)!=null&&w.question?x.content.question.slice(0,24):x.type.charAt(0).toUpperCase()+x.type.slice(1)}return(x,l)=>(d(),u("div",ui,[e("div",ci,[e("div",pi,[l[0]||(l[0]=Q(" Layers ",-1)),e("span",vi,$(m.value.length),1)])]),m.value.length===0?(d(),u("div",mi,[...l[1]||(l[1]=[e("p",null,"No elements on this slide.",-1),e("p",null,"Add elements using the toolbar above.",-1)])])):(d(),u("div",fi,[(d(!0),u(Z,null,ue(m.value,g=>(d(),u("div",{key:g.id,class:te(["layer-item",S(n).selectedElementIds.includes(g.id)&&"selected",g.locked&&"locked",!g.visible&&"hidden"]),onClick:w=>y(g.id)},[e("span",bi,$(k(g.type)),1),e("span",yi,$(C(g)),1),e("div",hi,[e("button",{class:te(["layer-action-btn",{active:g.visible}]),onClick:Me(w=>v(g),["stop"]),"data-tooltip":g.visible?"Hide":"Show"},[g.visible?(d(),u("svg",wi,[...l[2]||(l[2]=[e("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),e("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):(d(),u("svg",ki,[...l[3]||(l[3]=[e("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"},null,-1),e("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"},null,-1),e("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])]))],10,xi),e("button",{class:te(["layer-action-btn",{active:g.locked}]),onClick:Me(w=>h(g),["stop"]),"data-tooltip":g.locked?"Unlock":"Lock"},[g.locked?(d(),u("svg",Si,[...l[4]||(l[4]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])):(d(),u("svg",$i,[...l[5]||(l[5]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"},null,-1)])]))],10,Ci),e("button",{class:"layer-action-btn",onClick:Me(w=>j(g.id),["stop"]),"data-tooltip":"Move up"},[...l[6]||(l[6]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"18 15 12 9 6 15"})],-1)])],8,Ii),e("button",{class:"layer-action-btn",onClick:Me(w=>N(g.id),["stop"]),"data-tooltip":"Move down"},[...l[7]||(l[7]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"6 9 12 15 18 9"})],-1)])],8,Ai),e("button",{class:"layer-action-btn danger",onClick:Me(w=>z(g.id),["stop"]),"data-tooltip":"Delete"},[...l[8]||(l[8]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,Ei)])],10,gi))),128))]))]))}},Pi=Re(Mi,[["__scopeId","data-v-7407acd8"]]),_i={class:"panel-section"},Ti={class:"preset-toolbar"},Ni=["value"],zi=["value"],Li=["value"],Bi={key:0,class:"preset-list",style:{"margin-top":"var(--space-3)"}},ji=["onClick"],Di={class:"preset-meta-chip muted"},Ri={key:1,class:"import-review"},qi={class:"motion-scrubber-header"},Fi={class:"preset-toolbar compact"},Wi=["value"],Ui=["value"],Oi={class:"import-list"},Vi=["onUpdate:modelValue"],Hi={class:"import-item-title"},Gi={class:"preset-meta-chip"},Qi={key:0,class:"preset-meta-chip muted"},Yi={__name:"MotionLibraryPanel",props:{searchQuery:{type:String,required:!0},categoryFilter:{type:String,required:!0},availableCategories:{type:Array,required:!0},recentPresets:{type:Array,required:!0},pendingImportedPresets:{type:Array,required:!0},filteredPendingImports:{type:Array,required:!0},importScopeFilter:{type:String,required:!0},importConflictMode:{type:String,required:!0}},emits:["update:searchQuery","update:categoryFilter","trigger-import","export-presets","apply-preset","clear-imports","update:importScopeFilter","update:importConflictMode","apply-imports"],setup(r,{emit:n}){const i=n;return(s,a)=>(d(),u("div",_i,[a[13]||(a[13]=e("div",{class:"panel-title"},"Motion Library",-1)),e("div",Ti,[e("input",{value:r.searchQuery,class:"input",placeholder:"Search presets by name, category, or tag",onInput:a[0]||(a[0]=m=>i("update:searchQuery",m.target.value))},null,40,Ni),e("select",{value:r.categoryFilter,class:"select",onChange:a[1]||(a[1]=m=>i("update:categoryFilter",m.target.value))},[a[8]||(a[8]=e("option",{value:"all"},"All categories",-1)),(d(!0),u(Z,null,ue(r.availableCategories,m=>(d(),u("option",{key:`library-${m}`,value:m},$(m),9,Li))),128))],40,zi),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:a[2]||(a[2]=m=>i("trigger-import"))},"Import"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:a[3]||(a[3]=m=>i("export-presets"))},"Export")]),r.recentPresets.length?(d(),u("div",Bi,[a[9]||(a[9]=e("div",{class:"field-hint"},"Recently used",-1)),(d(!0),u(Z,null,ue(r.recentPresets,m=>(d(),u("div",{class:"preset-item",key:`recent-${m.id}`},[e("button",{type:"button",class:"preset-chip",onClick:y=>i("apply-preset",m)},$(m.name),9,ji),e("span",Di,"Used "+$(m.usageCount)+"x",1)]))),128))])):q("",!0),r.pendingImportedPresets.length?(d(),u("div",Ri,[e("div",qi,[a[10]||(a[10]=e("span",{class:"motion-scrubber-title"},"Import Review",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:a[4]||(a[4]=m=>i("clear-imports"))},"Discard")]),e("div",Fi,[e("select",{value:r.importScopeFilter,class:"select",onChange:a[5]||(a[5]=m=>i("update:importScopeFilter",m.target.value))},[...a[11]||(a[11]=[e("option",{value:"all"},"All scopes",-1),e("option",{value:"single"},"Single presets",-1),e("option",{value:"group"},"Group presets",-1)])],40,Wi),e("select",{value:r.importConflictMode,class:"select",onChange:a[6]||(a[6]=m=>i("update:importConflictMode",m.target.value))},[...a[12]||(a[12]=[e("option",{value:"replace"},"Replace matching names",-1),e("option",{value:"copy"},"Import as copies",-1)])],40,Ui),e("button",{type:"button",class:"btn btn-primary btn-sm",onClick:a[7]||(a[7]=m=>i("apply-imports"))},"Merge Selected")]),e("div",Oi,[(d(!0),u(Z,null,ue(r.filteredPendingImports,m=>(d(),u("label",{key:`pending-${m.id}`,class:"import-item"},[re(e("input",{"onUpdate:modelValue":y=>m.selected=y,type:"checkbox"},null,8,Vi),[[$t,m.selected]]),e("span",Hi,$(m.name),1),e("span",Gi,$(m.scope),1),m.category?(d(),u("span",Qi,$(m.category),1)):q("",!0)]))),128))])])):q("",!0)]))}},Ki=Re(Yi,[["__scopeId","data-v-61f99273"]]),Ji={class:"properties-panel"},Xi={key:1,class:"panel-section"},Zi={class:"field-hint"},es={class:"motion-scrubber-shell"},ts={class:"motion-card-grid",style:{"margin-top":"var(--space-3)"}},os=["onClick"],ns={class:"motion-preview"},ls={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},is={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},ss={class:"motion-card-label"},as={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},rs={class:"form-group"},ds={class:"form-group"},us={class:"form-group",style:{"margin-top":"var(--space-3)"}},cs={class:"preset-row",style:{"margin-top":"var(--space-3)"}},ps={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},vs={key:0,class:"preset-list"},ms=["onDragstart","onDragenter","onDrop"],fs=["onClick"],gs={key:0,class:"preset-meta-chip"},bs=["onClick"],ys=["onClick"],hs=["onClick"],xs={key:1,class:"preset-row preset-edit-row"},ws=["onClick"],ks={key:1,class:"field-hint"},Cs={key:2,class:"panel-section"},Ss={class:"slide-settings-tabs"},$s={key:0,class:"slide-settings-pane"},Is={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},As={class:"form-group"},Es={class:"bg-type-tabs"},Ms=["onClick"],Ps={key:0,class:"color-row"},_s=["value"],Ts=["value"],Ns={class:"slide-settings-subsection"},zs={class:"canvas-size-grid"},Ls=["onClick"],Bs={class:"canvas-size-icon-shell"},js={class:"canvas-size-name"},Ds={class:"canvas-size-ratio"},Rs={class:"canvas-custom-card"},qs={class:"canvas-custom-header"},Fs={class:"field-hint"},Ws={class:"canvas-custom-inputs"},Us={class:"form-group"},Os={class:"canvas-size-input-wrap"},Vs=["value"],Hs={class:"form-group"},Gs={class:"canvas-size-input-wrap"},Qs=["value"],Ys={class:"check-row canvas-size-lock"},Ks={class:"slide-settings-subsection"},Js={key:1,class:"slide-settings-pane"},Xs=["value"],Zs={class:"form-group",style:{"margin-top":"var(--space-3)"}},ea=["value"],ta={class:"check-row"},oa=["checked"],na={key:2,class:"slide-settings-pane"},la={class:"check-row"},ia=["checked"],sa={class:"check-row"},aa=["checked"],ra={class:"check-row"},da=["checked"],ua={class:"check-row"},ca=["checked"],pa={class:"check-row"},va=["checked"],ma={class:"panel-section"},fa={class:"panel-title"},ga={class:"element-type-badge"},ba={class:"geo-grid"},ya={class:"form-group"},ha=["value"],xa={class:"form-group"},wa=["value"],ka={class:"form-group"},Ca=["value"],Sa={class:"form-group"},$a=["value"],Ia={class:"form-group"},Aa=["value"],Ea={class:"form-group"},Ma=["value"],Pa={class:"panel-section"},_a={class:"motion-scrubber-shell"},Ta={class:"motion-card-grid"},Na=["onClick"],za={class:"motion-preview"},La={key:0,class:"motion-preview-dot motion-preview-dot-secondary motion-sample-stagger-in-secondary"},Ba={key:1,class:"motion-preview-dot motion-preview-dot-tertiary motion-sample-stagger-in-tertiary"},ja={class:"motion-card-label"},Da={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},Ra={class:"form-group"},qa=["value"],Fa={class:"form-group"},Wa=["value"],Ua={class:"preset-row",style:{"margin-top":"var(--space-3)"}},Oa={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-2)"}},Va={key:0,class:"preset-list"},Ha=["onDragstart","onDragenter","onDrop"],Ga=["onClick"],Qa={key:0,class:"preset-meta-chip"},Ya=["onClick"],Ka=["onClick"],Ja=["onClick"],Xa={key:1,class:"preset-row preset-edit-row"},Za=["onClick"],er={key:1,class:"field-hint"},tr={key:0,class:"panel-section"},or={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},nr=["value"],lr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr"}},ir={class:"form-group"},sr=["value"],ar={class:"form-group"},rr=["value"],dr={class:"form-group",style:{"margin-top":"var(--space-3)"}},ur=["value"],cr=["value"],pr={class:"form-group",style:{"margin-top":"var(--space-3)"}},vr={class:"align-btns"},mr=["onClick"],fr={class:"form-group",style:{"margin-top":"var(--space-3)"}},gr={class:"style-btns"},br={class:"form-group",style:{"margin-top":"var(--space-3)"}},yr={class:"color-row"},hr=["value"],xr=["value"],wr={class:"form-group",style:{"margin-top":"var(--space-3)"}},kr=["value"],Cr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Sr={class:"form-group"},$r=["value"],Ir={class:"form-group"},Ar=["value"],Er={key:1,class:"panel-section"},Mr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Pr=["value"],_r={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Tr=["value"],Nr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zr=["value"],Lr={class:"form-group"},Br=["value"],jr={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Dr={class:"form-group"},Rr=["value"],qr={class:"form-group"},Fr=["value"],Wr={key:2,class:"panel-section"},Ur={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Or=["value"],Vr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hr={class:"color-row"},Gr=["value"],Qr=["value"],Yr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Kr={class:"color-row"},Jr=["value"],Xr=["value"],Zr={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ed=["value"],td={class:"form-group"},od=["value"],nd={class:"form-group",style:{"margin-top":"var(--space-3)"}},ld=["value"],id={key:3,class:"panel-section"},sd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ad=["value"],rd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},dd=["value"],ud={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},cd=["value"],pd={class:"form-group chart-import-card",style:{"margin-bottom":"var(--space-3)"}},vd={class:"chart-data-actions"},md={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},fd=["value","placeholder"],gd={class:"chart-palette-preview"},bd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},yd={class:"form-group"},hd=["value"],xd={class:"form-group"},wd=["value"],kd={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Cd={class:"form-group"},Sd=["value"],$d={class:"form-group"},Id=["value"],Ad={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Ed={class:"form-group"},Md=["value"],Pd={key:0,class:"form-group"},_d=["value"],Td={key:1,class:"form-group"},Nd=["value"],zd={key:0,class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Ld={class:"form-group"},Bd=["value"],jd={class:"check-row",style:{"margin-top":"20px"}},Dd=["checked"],Rd={class:"check-row"},qd=["checked"],Fd={key:1,class:"check-row"},Wd=["checked"],Ud={class:"check-row"},Od=["checked"],Vd={key:4,class:"panel-section"},Hd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Gd=["value"],Qd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Yd=["value"],Kd={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Jd=["value"],Xd={key:0,class:"form-group"},Zd=["value"],eu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},tu={class:"form-group"},ou=["value"],nu={class:"form-group"},lu=["value"],iu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},su={class:"form-group"},au=["value"],ru={class:"form-group"},du=["value"],uu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},cu={class:"form-group"},pu=["value"],vu={class:"form-group"},mu=["value"],fu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},gu={class:"form-group"},bu=["value"],yu=["value"],hu={class:"form-group"},xu=["value"],wu={key:5,class:"panel-section"},ku={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cu=["value"],Su={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$u={class:"color-row"},Iu=["value"],Au=["value"],Eu={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-bottom":"var(--space-3)"}},Mu={class:"form-group"},Pu=["value"],_u={class:"form-group"},Tu=["value"],Nu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},zu=["value"],Lu={class:"form-group"},Bu=["value"],ju={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},Du={class:"form-group"},Ru=["value"],qu={class:"form-group"},Fu=["value"],Wu={key:6,class:"panel-section"},Uu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ou=["value"],Vu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Hu=["value"],Gu={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Qu=["value"],Yu={class:"check-row"},Ku=["checked"],Ju={class:"check-row"},Xu=["checked"],Zu={class:"check-row"},ec=["checked"],tc={class:"check-row"},oc=["checked"],nc={key:7,class:"panel-section"},lc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ic=["value"],sc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},ac=["value"],rc={class:"check-row"},dc=["checked"],uc={class:"check-row"},cc=["checked"],pc={class:"check-row"},vc=["checked"],mc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},fc={class:"form-group"},gc=["value"],bc={class:"form-group"},yc=["value"],hc={class:"form-group",style:{"margin-top":"var(--space-3)"}},xc=["value"],wc={key:8,class:"panel-section"},kc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Cc=["value"],Sc={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},$c=["value"],Ic={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},Ac=["value"],Ec={class:"form-group"},Mc=["value"],Pc={class:"geo-grid",style:{"grid-template-columns":"1fr 1fr","margin-top":"var(--space-3)"}},_c={class:"form-group"},Tc=["value"],Nc={class:"form-group"},zc=["value"],Lc={class:"form-group",style:{"margin-top":"var(--space-3)"}},Bc=["value"],jc={class:"panel-section"},Dc={class:"actions-list"},Rc={__name:"PropertiesPanel",setup(r){const n=Qe(),i=Ye(),s=M(()=>i.getProject(n.projectId)),a=M(()=>{var p,t;return(t=(p=s.value)==null?void 0:p.slides)==null?void 0:t.find(T=>T.id===n.currentSlideId)}),m=M(()=>{var p;return{autoPlay:!1,loop:!1,showProgress:!0,showNavControls:!0,allowKeyboardNav:!0,motionPresets:[],...((p=s.value)==null?void 0:p.settings)||{}}}),y=M(()=>yt(m.value)),v=M(()=>zn(m.value)),h=M(()=>Ln(y.value.width,y.value.height)),j=B(!0),N=B("canvas"),z=M(()=>Array.isArray(m.value.motionPresets)?m.value.motionPresets:[]),k=M(()=>z.value.filter(p=>p.scope!=="group")),C=M(()=>z.value.filter(p=>p.scope==="group")),x=M(()=>{var t;const p=new Set(n.selectedElementIds);return(((t=a.value)==null?void 0:t.elements)||[]).filter(T=>p.has(T.id))}),l=M(()=>{var p,t;return n.selectedElementId?(t=(p=a.value)==null?void 0:p.elements)==null?void 0:t.find(T=>T.id===n.selectedElementId):null}),g=M(()=>n.multiSelection||!!l.value),w=M(()=>n.multiSelection?"group":"single"),D=M(()=>{var t,T;const p=(T=(t=l.value)==null?void 0:t.animations)==null?void 0:T[0];return{type:(p==null?void 0:p.type)||"auto",delay:Number((p==null?void 0:p.delay)||0),duration:Number((p==null?void 0:p.duration)||.64)}}),O=M(()=>{var Se,Ne;const p=x.value.map(Pe=>{var ot;return((ot=Pe.animations)==null?void 0:ot[0])||null}),t=((Se=p[0])==null?void 0:Se.type)||"auto",T=Number(((Ne=p[0])==null?void 0:Ne.duration)||.64),le=p.every(Pe=>((Pe==null?void 0:Pe.type)||"auto")===t),ke=p.every(Pe=>Number((Pe==null?void 0:Pe.duration)||.64)===T);return{type:le?t:"mixed",duration:ke?T:.64}}),oe=B(0),V=B(0),Y=B(""),ie=B(""),L=B(""),R=B(""),K=B(""),ne=B(""),J=B(""),se=B(""),de=B(""),Ee=B(""),he=B(""),fe=B(""),ge=B(""),W=B("all"),ae=B(null),ve=B(null),ce=B([]),ye=B("all"),we=B("replace"),$e=B(""),_e=B({});He(l,p=>{p?_e.value=JSON.parse(JSON.stringify(p)):_e.value={},(p==null?void 0:p.type)==="chart"&&($e.value="")},{immediate:!0,deep:!0});function Le(p){l.value&&i.updateElement(n.projectId,n.currentSlideId,l.value.id,p)}function f(p){if(!l.value)return;const t={...l.value.content,...p};Le({content:t})}function E(p,t){const T=parseFloat(t);isNaN(T)||Le({[p]:T})}const P=B({});He(a,p=>{p&&(P.value={...p})},{immediate:!0});function Ie(p){a.value&&i.updateSlide(n.projectId,a.value.id,p)}function Ce(p){if(!s.value)return;const t={...m.value,...p};i.updateProject(n.projectId,{settings:{...t,...hl(t)}})}function Be(p){Ce({slideWidth:p.width,slideHeight:p.height})}function xe(p,t){const T=Math.round(Number(t)||0);if(!T)return;const le={[`slide${p==="width"?"Width":"Height"}`]:T};if(j.value){const ke=y.value.width,Se=y.value.height;p==="width"?le.slideHeight=Math.round(T*(Se/ke)):le.slideWidth=Math.round(T*(ke/Se))}Ce(le)}const Te=M(()=>{var p;return Bn(((p=s.value)==null?void 0:p.theme)||{})}),Ge=M(()=>{var t,T;if(((t=l.value)==null?void 0:t.type)!=="chart")return[];const p=((T=l.value.content)==null?void 0:T.paletteText)||Te.value.paletteText;return kl(p)});function Ze(p){const t=xl(p,{fallbackToDefault:!1});return t.length?wl(t):""}function Ke(p){var T;if(((T=l.value)==null?void 0:T.type)!=="chart")return;const t=Ze(p);t&&(f({dataText:t}),$e.value="")}async function mt(p){var le;const t=p.target,T=(le=t==null?void 0:t.files)==null?void 0:le[0];if(T)try{const ke=await T.text();Ke(ke)}finally{t&&(t.value="")}}function _(){var p;(p=ve.value)==null||p.click()}function c(){var t,T;if(((t=l.value)==null?void 0:t.type)!=="chart")return;const p=Ze(((T=l.value.content)==null?void 0:T.dataText)||"");p&&f({dataText:p})}function F(){var p;((p=l.value)==null?void 0:p.type)==="chart"&&f({...Te.value})}function pe(){var p;((p=l.value)==null?void 0:p.type)==="chart"&&f({paletteText:Te.value.paletteText})}function b(p){return String(p||"").split(",").map(t=>t.trim()).filter(Boolean)}function A(p){const t=(p==null?void 0:p.scope)==="group"?"group":"single";return{id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,scope:t,name:String((p==null?void 0:p.name)||"Imported Preset").trim()||"Imported Preset",category:String((p==null?void 0:p.category)||"").trim(),tags:Array.isArray(p==null?void 0:p.tags)?p.tags.map(T=>String(T).trim()).filter(Boolean):b(p==null?void 0:p.tags),type:String((p==null?void 0:p.type)||"auto"),delay:Math.max(0,Number(p==null?void 0:p.delay)||0),duration:Math.max(.1,Number(p==null?void 0:p.duration)||.72),stepDelay:Math.max(0,Number(p==null?void 0:p.stepDelay)||0)}}const H=M(()=>[...new Set(z.value.map(t=>t.category).filter(Boolean))].sort((t,T)=>t.localeCompare(T))),ee=M(()=>[...z.value].filter(p=>Number(p.usageCount||0)>0).sort((p,t)=>{const T=Number(t.lastUsedAt||0)-Number(p.lastUsedAt||0);return T!==0?T:Number(t.usageCount||0)-Number(p.usageCount||0)}).slice(0,6)),I=M(()=>ye.value==="all"?ce.value:ce.value.filter(p=>p.scope===ye.value));function Ae(p){const t=ge.value.trim().toLowerCase(),T=W.value;return T==="all"||(p.category||"")===T?t?[p.name,p.category,...p.tags||[]].filter(Boolean).some(ke=>String(ke).toLowerCase().includes(t)):!0:!1}const Fe=M(()=>k.value.filter(Ae)),De=M(()=>C.value.filter(Ae)),it=M(()=>ee.value.filter(p=>w.value==="group"?p.scope==="group":p.scope!=="group"));function je(p){const t=String(p.name||"").trim();if(!t)return;const T=z.value.findIndex(Se=>Se.scope===p.scope&&Se.name.toLowerCase()===t.toLowerCase()),le={...p,id:T>=0?z.value[T].id:`motion-${Date.now()}`,name:t,category:String(p.category||"").trim(),tags:Array.isArray(p.tags)?p.tags:b(p.tags)},ke=[...z.value];T>=0?ke.splice(T,1,le):ke.push(le),Ce({motionPresets:ke})}function st(p,t){const T=z.value.map(le=>le.id===p?{...le,...t}:le);Ce({motionPresets:T})}function Ue(p){const t=z.value.find(T=>T.id===p);t&&st(p,{usageCount:Math.max(0,Number(t.usageCount||0))+1,lastUsedAt:Date.now()})}function Je(p,t){const T=z.value.filter(Ne=>Ne.scope===p).map(Ne=>Ne.name.toLowerCase()),le=String(t||"Preset").trim()||"Preset";if(!T.includes(le.toLowerCase()))return le;let ke=2,Se=`${le} Copy`;for(;T.includes(Se.toLowerCase());)Se=`${le} Copy ${ke}`,ke+=1;return Se}function Xe(p){Ce({motionPresets:z.value.filter(t=>t.id!==p)}),L.value===p&&(L.value="",R.value="")}function at(p){je({...p,id:void 0,name:Je(p.scope,p.name)})}function rt(p){L.value=p.id,R.value=p.name,K.value=p.category||"",ne.value=Array.isArray(p.tags)?p.tags.join(", "):""}function dt(){L.value="",R.value="",K.value="",ne.value=""}function Pt(p){const t=String(R.value||"").trim();t&&(st(p,{name:t,category:String(K.value||"").trim(),tags:b(ne.value)}),dt())}function Qn(p,t,T){if(!t||!T||t===T)return;const le=z.value.filter(Oe=>Oe.scope===p),ke=le.findIndex(Oe=>Oe.id===t),Se=le.findIndex(Oe=>Oe.id===T);if(ke===-1||Se===-1)return;const Ne=[...le],[Pe]=Ne.splice(ke,1);Ne.splice(Se,0,Pe);const ot=z.value.filter(Oe=>Oe.scope!==p),pt=[];z.value.forEach(Oe=>{if(Oe.scope===p){Ne.length&&pt.push(Ne.shift());return}const ft=ot.shift();ft&&pt.push(ft)}),Ce({motionPresets:pt})}function _t(p){J.value=p.id,se.value=p.id}function Tt(p){J.value&&(se.value=p.id)}function Nt(p){J.value&&(Qn(p.scope,J.value,p.id),J.value="",se.value="")}function zt(){J.value="",se.value=""}function Lt(){oe.value+=1}function Bt(){V.value+=1}function jt(p,t){Ie({[p]:t})}function Yn(p){const t=Math.max(0,Number(p)||0);Ie({duration:t})}function ht(p){var le;if(!l.value)return;const T={...((le=l.value.animations)==null?void 0:le[0])||{type:"auto",delay:0,duration:.64},...p};if(T.type==="auto"){Le({animations:[]});return}Le({animations:[{type:T.type||"none",delay:Math.max(0,Number(T.delay)||0),duration:Math.max(.1,Number(T.duration)||.64)}]})}const et=B("stagger-in"),ut=B(0),ct=B(.12),tt=B(.72);He(x,p=>{p.length&&(et.value=O.value.type==="mixed"?"stagger-in":O.value.type,tt.value=O.value.duration)},{immediate:!0,deep:!0});function Kn(){if(!x.value.length)return;[...x.value].sort((t,T)=>(t.y||0)!==(T.y||0)?(t.y||0)-(T.y||0):(t.x||0)-(T.x||0)).forEach((t,T)=>{if(et.value==="auto"){i.updateElement(n.projectId,n.currentSlideId,t.id,{animations:[]});return}i.updateElement(n.projectId,n.currentSlideId,t.id,{animations:[{type:et.value,delay:Math.max(0,Number(ut.value)||0)+T*Math.max(0,Number(ct.value)||0),duration:Math.max(.1,Number(tt.value)||.72)}]})})}function Dt(p){et.value=p.type||"stagger-in",ut.value=Number(p.delay||0),ct.value=Number(p.stepDelay||0),tt.value=Number(p.duration||.72),Ue(p.id),Bt()}function Jn(){je({scope:"group",name:ie.value,category:he.value,tags:b(fe.value),type:et.value,delay:Math.max(0,Number(ut.value)||0),stepDelay:Math.max(0,Number(ct.value)||0),duration:Math.max(.1,Number(tt.value)||.72)}),ie.value="",he.value="",fe.value=""}function Rt(p){ht({type:p.type||"auto",delay:Number(p.delay||0),duration:Number(p.duration||.72)}),Ue(p.id),Lt()}function Xn(){je({scope:"single",name:Y.value,category:de.value,tags:b(Ee.value),type:D.value.type,delay:Math.max(0,Number(D.value.delay)||0),stepDelay:0,duration:Math.max(.1,Number(D.value.duration)||.72)}),Y.value="",de.value="",Ee.value=""}function Zn(){var p;(p=ae.value)==null||p.click()}async function el(p){var le;const t=p.target,T=(le=t==null?void 0:t.files)==null?void 0:le[0];if(T)try{const ke=await T.text(),Se=JSON.parse(ke),Ne=Array.isArray(Se)?Se:Array.isArray(Se.motionPresets)?Se.motionPresets:[];if(!Ne.length)return;ce.value=Ne.map(Pe=>({...A(Pe),selected:!0,importName:String((Pe==null?void 0:Pe.name)||"Imported Preset").trim()||"Imported Preset"}))}catch{}finally{t&&(t.value="")}}function qt(){ce.value=[]}function tl(){const p=ce.value.filter(T=>T.selected);if(!p.length)return;const t=[...z.value];p.forEach(T=>{const le=t.findIndex(ke=>ke.scope===T.scope&&ke.name.toLowerCase()===T.name.toLowerCase());if(le>=0){we.value==="replace"?t.splice(le,1,{...t[le],...T,id:t[le].id}):t.push({...T,id:`motion-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:Je(T.scope,T.name)});return}t.push(T)}),Ce({motionPresets:t}),qt()}function ol(){var Se;if(!z.value.length)return;const p={version:1,exportedAt:new Date().toISOString(),motionPresets:z.value.map(({id:Ne,...Pe})=>Pe)},t=new Blob([JSON.stringify(p,null,2)],{type:"application/json"}),T=URL.createObjectURL(t),le=document.createElement("a"),ke=String(((Se=s.value)==null?void 0:Se.name)||"project").trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase()||"project";le.href=T,le.download=`${ke}-motion-presets.json`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(T)}const nl=M(()=>[{id:`single-${oe.value}`,delay:Math.max(0,Number(D.value.delay)||0),duration:Math.max(.1,Number(D.value.duration)||.72),type:D.value.type}]),ll=M(()=>Array.from({length:Math.min(Math.max(x.value.length,3),5)},(p,t)=>({id:`group-${V.value}-${t}`,delay:Math.max(0,Number(ut.value)||0)+t*Math.max(0,Number(ct.value)||0),duration:Math.max(.1,Number(tt.value)||.72),type:et.value}))),Ft=[{value:"auto",label:"Auto",sampleClass:"motion-sample-auto"},{value:"none",label:"None",sampleClass:"motion-sample-none"},{value:"fade-up",label:"Fade Up",sampleClass:"motion-sample-fade-up"},{value:"fade-up-strong",label:"Fade Strong",sampleClass:"motion-sample-fade-up-strong"},{value:"fade-left",label:"Fade Left",sampleClass:"motion-sample-fade-left"},{value:"fade-right",label:"Fade Right",sampleClass:"motion-sample-fade-right"},{value:"zoom-in",label:"Zoom In",sampleClass:"motion-sample-zoom-in"},{value:"pop-in",label:"Pop In",sampleClass:"motion-sample-pop-in"},{value:"soft-pop",label:"Soft Pop",sampleClass:"motion-sample-soft-pop"},{value:"stagger-in",label:"Stagger In",sampleClass:"motion-sample-stagger-in"}],Wt=["Inter, sans-serif","Poppins, sans-serif","Montserrat, sans-serif","Roboto, sans-serif","Lato, sans-serif",'"Open Sans", sans-serif',"Raleway, sans-serif","Nunito, sans-serif","Arial, sans-serif",'"Trebuchet MS", sans-serif',"Tahoma, sans-serif","Georgia, serif",'"Playfair Display", serif',"Merriweather, serif",'"Times New Roman", serif',"Verdana, sans-serif",'"Courier New", monospace',"Pacifico, cursive","Caveat, cursive",'"Bebas Neue", sans-serif'];return(p,t)=>{var T,le,ke,Se,Ne,Pe,ot,pt,Oe,ft,Ut,Ot,Vt,Ht,Gt,Qt,Yt,Kt,Jt,Xt,Zt,eo,to,oo,no,lo,io,so,ao,ro,uo,co,po,vo,mo,fo,go,bo,yo,ho,xo,wo,ko,Co,So,$o,Io,Ao,Eo,Mo,Po,_o,To,No,zo,Lo,Bo,jo,Do,Ro,qo,Fo,Wo,Uo,Oo,Vo,Ho,Go,Qo,Yo,Ko,Jo,Xo,Zo,en,tn,on,nn,ln,sn,an,rn,dn,un,cn,pn,vn,mn,fn,gn,bn,yn,hn,xn,wn,kn,Cn;return d(),u("div",Ji,[e("input",{ref_key:"presetImportInput",ref:ae,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:el},null,544),e("input",{ref_key:"chartImportInput",ref:ve,type:"file",accept:".csv,.txt,text/csv,text/plain",style:{display:"none"},onChange:mt},null,544),t[300]||(t[300]=e("div",{class:"panel-section autosave-note"}," Changes apply instantly ",-1)),g.value?(d(),qe(Ki,{key:0,"search-query":ge.value,"category-filter":W.value,"available-categories":H.value,"recent-presets":it.value,"pending-imported-presets":ce.value,"filtered-pending-imports":I.value,"import-scope-filter":ye.value,"import-conflict-mode":we.value,"onUpdate:searchQuery":t[0]||(t[0]=o=>ge.value=o),"onUpdate:categoryFilter":t[1]||(t[1]=o=>W.value=o),onTriggerImport:Zn,onExportPresets:ol,onApplyPreset:t[2]||(t[2]=o=>w.value==="group"?Dt(o):Rt(o)),onClearImports:qt,"onUpdate:importScopeFilter":t[3]||(t[3]=o=>ye.value=o),"onUpdate:importConflictMode":t[4]||(t[4]=o=>we.value=o),onApplyImports:tl},null,8,["search-query","category-filter","available-categories","recent-presets","pending-imported-presets","filtered-pending-imports","import-scope-filter","import-conflict-mode"])):q("",!0),S(n).multiSelection?(d(),u("div",Xi,[t[148]||(t[148]=e("div",{class:"panel-title"},"Group Motion",-1)),e("div",Zi,$(x.value.length)+" elements selected. Apply one timed sequence to the whole selection.",1),e("div",es,[e("div",{class:"motion-scrubber-header"},[t[144]||(t[144]=e("span",{class:"motion-scrubber-title"},"Sequence Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Bt},"Replay")]),(d(),u("div",{class:"motion-scrubber-stage",key:`group-preview-${V.value}`},[(d(!0),u(Z,null,ue(ll.value,o=>(d(),u("span",{key:o.id,class:te(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:me({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",ts,[(d(),u(Z,null,ue(Ft,o=>e("button",{key:`group-${o.value}`,type:"button",class:te(["motion-card",et.value===o.value&&"active"]),onClick:X=>et.value=o.value},[e("span",ns,[e("span",{class:te(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(d(),u("span",ls)):q("",!0),o.value==="stagger-in"?(d(),u("span",is)):q("",!0)]),e("span",ss,$(o.label),1)],10,os)),64))]),e("div",as,[e("div",rs,[t[145]||(t[145]=e("label",{class:"form-label"},"Start Delay (seconds)",-1)),re(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[5]||(t[5]=o=>ut.value=o),class:"input"},null,512),[[be,ut.value]])]),e("div",ds,[t[146]||(t[146]=e("label",{class:"form-label"},"Step Delay (seconds)",-1)),re(e("input",{type:"number",min:"0",step:"0.05","onUpdate:modelValue":t[6]||(t[6]=o=>ct.value=o),class:"input"},null,512),[[be,ct.value]])])]),e("div",us,[t[147]||(t[147]=e("label",{class:"form-label"},"Duration (seconds)",-1)),re(e("input",{type:"number",min:"0.1",step:"0.05","onUpdate:modelValue":t[7]||(t[7]=o=>tt.value=o),class:"input"},null,512),[[be,tt.value]])]),e("div",cs,[re(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>ie.value=o),class:"input",placeholder:"Save as preset, e.g. Three Card Cascade"},null,512),[[be,ie.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Jn},"Save")]),e("div",ps,[re(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>he.value=o),class:"input",placeholder:"Category, e.g. Sequence"},null,512),[[be,he.value]]),re(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>fe.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[be,fe.value]])]),De.value.length?(d(),u("div",vs,[(d(!0),u(Z,null,ue(De.value,o=>(d(),u("div",{key:o.id,class:te(["preset-item",J.value===o.id&&"dragging",se.value===o.id&&J.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:X=>_t(o),onDragenter:Me(X=>Tt(o),["prevent"]),onDragover:t[14]||(t[14]=Me(()=>{},["prevent"])),onDrop:Me(X=>Nt(o),["prevent"]),onDragend:zt},[e("button",{type:"button",class:"preset-chip",onClick:X=>Dt(o)},$(o.name),9,fs),o.category?(d(),u("span",gs,$(o.category),1)):q("",!0),(d(!0),u(Z,null,ue(o.tags||[],X=>(d(),u("span",{key:`${o.id}-${X}`,class:"preset-meta-chip muted"},"#"+$(X),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:X=>at(o)},"Duplicate",8,bs),e("button",{type:"button",class:"preset-mini-btn",onClick:X=>rt(o)},"Rename",8,ys),e("button",{type:"button",class:"preset-mini-btn danger",onClick:X=>Xe(o.id)},"Delete",8,hs),L.value===o.id?(d(),u("div",xs,[re(e("input",{"onUpdate:modelValue":t[11]||(t[11]=X=>R.value=X),class:"input"},null,512),[[be,R.value]]),re(e("input",{"onUpdate:modelValue":t[12]||(t[12]=X=>K.value=X),class:"input",placeholder:"Category"},null,512),[[be,K.value]]),re(e("input",{"onUpdate:modelValue":t[13]||(t[13]=X=>ne.value=X),class:"input",placeholder:"Tags, comma separated"},null,512),[[be,ne.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:X=>Pt(o.id)},"Save",8,ws),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:dt},"Cancel")])):q("",!0)],42,ms))),128))])):C.value.length?(d(),u("div",ks,"No group presets match the current search.")):q("",!0),e("button",{class:"btn btn-primary btn-sm w-full",style:{"margin-top":"var(--space-3)"},onClick:Kn}," Apply Sequence to Selection ")])):l.value?(d(),u(Z,{key:3},[e("div",ma,[e("div",fa,[t[179]||(t[179]=Q(" Position & Size ",-1)),e("span",ga,$(l.value.type),1)]),e("div",ba,[e("div",ya,[t[180]||(t[180]=e("label",{class:"form-label"},"X",-1)),e("input",{type:"number",value:Math.round(l.value.x),class:"input",onChange:t[39]||(t[39]=o=>E("x",o.target.value))},null,40,ha)]),e("div",xa,[t[181]||(t[181]=e("label",{class:"form-label"},"Y",-1)),e("input",{type:"number",value:Math.round(l.value.y),class:"input",onChange:t[40]||(t[40]=o=>E("y",o.target.value))},null,40,wa)]),e("div",ka,[t[182]||(t[182]=e("label",{class:"form-label"},"W",-1)),e("input",{type:"number",value:Math.round(l.value.width),class:"input",onChange:t[41]||(t[41]=o=>E("width",o.target.value))},null,40,Ca)]),e("div",Sa,[t[183]||(t[183]=e("label",{class:"form-label"},"H",-1)),e("input",{type:"number",value:Math.round(l.value.height),class:"input",onChange:t[42]||(t[42]=o=>E("height",o.target.value))},null,40,$a)]),e("div",Ia,[t[184]||(t[184]=e("label",{class:"form-label"},"Rot °",-1)),e("input",{type:"number",value:Math.round(l.value.rotation||0),class:"input",onChange:t[43]||(t[43]=o=>E("rotation",o.target.value))},null,40,Aa)]),e("div",Ea,[t[185]||(t[185]=e("label",{class:"form-label"},"Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:l.value.opacity??1,class:"input",onChange:t[44]||(t[44]=o=>E("opacity",o.target.value))},null,40,Ma)])])]),e("div",Pa,[t[189]||(t[189]=e("div",{class:"panel-title"},"Animation",-1)),e("div",_a,[e("div",{class:"motion-scrubber-header"},[t[186]||(t[186]=e("span",{class:"motion-scrubber-title"},"Live Motion Preview",-1)),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Lt},"Replay")]),(d(),u("div",{class:"motion-scrubber-stage motion-scrubber-stage-single",key:`single-preview-${oe.value}`},[(d(!0),u(Z,null,ue(nl.value,o=>(d(),u("span",{key:o.id,class:te(["motion-scrubber-node",`motion-preview-live-${o.type==="auto"?"fade-up":o.type}`]),style:me({"--preview-delay":`${o.delay}s`,"--preview-duration":`${o.duration}s`})},null,6))),128))]))]),e("div",Ta,[(d(),u(Z,null,ue(Ft,o=>e("button",{key:o.value,type:"button",class:te(["motion-card",D.value.type===o.value&&"active"]),onClick:X=>ht({type:o.value})},[e("span",za,[e("span",{class:te(["motion-preview-dot",o.sampleClass])},null,2),o.value==="stagger-in"?(d(),u("span",La)):q("",!0),o.value==="stagger-in"?(d(),u("span",Ba)):q("",!0)]),e("span",ja,$(o.label),1)],10,Na)),64))]),e("div",Da,[e("div",Ra,[t[187]||(t[187]=e("label",{class:"form-label"},"Delay (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.05",value:D.value.delay,class:"input",onChange:t[45]||(t[45]=o=>ht({delay:o.target.value}))},null,40,qa)]),e("div",Fa,[t[188]||(t[188]=e("label",{class:"form-label"},"Duration (seconds)",-1)),e("input",{type:"number",min:"0.1",step:"0.05",value:D.value.duration,class:"input",onChange:t[46]||(t[46]=o=>ht({duration:o.target.value}))},null,40,Wa)])]),e("div",Ua,[re(e("input",{"onUpdate:modelValue":t[47]||(t[47]=o=>Y.value=o),class:"input",placeholder:"Save as preset, e.g. Hero Intro"},null,512),[[be,Y.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:Xn},"Save")]),e("div",Oa,[re(e("input",{"onUpdate:modelValue":t[48]||(t[48]=o=>de.value=o),class:"input",placeholder:"Category, e.g. Presentation"},null,512),[[be,de.value]]),re(e("input",{"onUpdate:modelValue":t[49]||(t[49]=o=>Ee.value=o),class:"input",placeholder:"Tags, comma separated"},null,512),[[be,Ee.value]])]),Fe.value.length?(d(),u("div",Va,[(d(!0),u(Z,null,ue(Fe.value,o=>(d(),u("div",{key:o.id,class:te(["preset-item",J.value===o.id&&"dragging",se.value===o.id&&J.value!==o.id&&"drag-over"]),draggable:"true",onDragstart:X=>_t(o),onDragenter:Me(X=>Tt(o),["prevent"]),onDragover:t[53]||(t[53]=Me(()=>{},["prevent"])),onDrop:Me(X=>Nt(o),["prevent"]),onDragend:zt},[e("button",{type:"button",class:"preset-chip",onClick:X=>Rt(o)},$(o.name),9,Ga),o.category?(d(),u("span",Qa,$(o.category),1)):q("",!0),(d(!0),u(Z,null,ue(o.tags||[],X=>(d(),u("span",{key:`${o.id}-${X}`,class:"preset-meta-chip muted"},"#"+$(X),1))),128)),e("button",{type:"button",class:"preset-mini-btn",onClick:X=>at(o)},"Duplicate",8,Ya),e("button",{type:"button",class:"preset-mini-btn",onClick:X=>rt(o)},"Rename",8,Ka),e("button",{type:"button",class:"preset-mini-btn danger",onClick:X=>Xe(o.id)},"Delete",8,Ja),L.value===o.id?(d(),u("div",Xa,[re(e("input",{"onUpdate:modelValue":t[50]||(t[50]=X=>R.value=X),class:"input"},null,512),[[be,R.value]]),re(e("input",{"onUpdate:modelValue":t[51]||(t[51]=X=>K.value=X),class:"input",placeholder:"Category"},null,512),[[be,K.value]]),re(e("input",{"onUpdate:modelValue":t[52]||(t[52]=X=>ne.value=X),class:"input",placeholder:"Tags, comma separated"},null,512),[[be,ne.value]]),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:X=>Pt(o.id)},"Save",8,Za),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:dt},"Cancel")])):q("",!0)],42,Ha))),128))])):k.value.length?(d(),u("div",er,"No single-element presets match the current search.")):q("",!0),t[190]||(t[190]=e("div",{class:"field-hint"},"Use Auto to keep the preview defaults, or override with a specific entrance effect.",-1))]),["text","heading"].includes(l.value.type)?(d(),u("div",tr,[t[206]||(t[206]=e("div",{class:"panel-title"},"Text",-1)),e("div",or,[t[191]||(t[191]=e("label",{class:"form-label"},"Content",-1)),e("textarea",{value:(pt=l.value.content)==null?void 0:pt.text,class:"textarea",style:{"min-height":"64px"},onInput:t[54]||(t[54]=o=>f({text:o.target.value}))},null,40,nr)]),e("div",lr,[e("div",ir,[t[192]||(t[192]=e("label",{class:"form-label"},"Size",-1)),e("input",{type:"number",value:(Oe=l.value.content)==null?void 0:Oe.fontSize,class:"input",onChange:t[55]||(t[55]=o=>f({fontSize:+o.target.value}))},null,40,sr)]),e("div",ar,[t[194]||(t[194]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:(ft=l.value.content)==null?void 0:ft.fontWeight,class:"select",onChange:t[56]||(t[56]=o=>f({fontWeight:o.target.value}))},[...t[193]||(t[193]=[e("option",{value:"normal"},"Normal",-1),e("option",{value:"bold"},"Bold",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"300"},"Light",-1)])],40,rr)])]),e("div",dr,[t[195]||(t[195]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:(Ut=l.value.content)==null?void 0:Ut.fontFamily,class:"select",onChange:t[57]||(t[57]=o=>f({fontFamily:o.target.value}))},[(d(),u(Z,null,ue(Wt,o=>e("option",{key:o,value:o},$(o.split(",")[0]),9,cr)),64))],40,ur)]),e("div",pr,[t[196]||(t[196]=e("label",{class:"form-label"},"Align",-1)),e("div",vr,[(d(),u(Z,null,ue(["left","center","right","justify"],o=>{var X;return e("button",{key:o,class:te(["align-btn",((X=l.value.content)==null?void 0:X.textAlign)===o&&"active"]),onClick:Sn=>f({textAlign:o})},$(o[0].toUpperCase()),11,mr)}),64))])]),e("div",fr,[t[200]||(t[200]=e("label",{class:"form-label"},"Style",-1)),e("div",gr,[e("button",{class:te(["style-btn",((Ot=l.value.content)==null?void 0:Ot.fontStyle)==="italic"&&"active"]),onClick:t[58]||(t[58]=o=>{var X;return f({fontStyle:((X=l.value.content)==null?void 0:X.fontStyle)==="italic"?"normal":"italic"})})},[...t[197]||(t[197]=[e("i",null,"I",-1)])],2),e("button",{class:te(["style-btn",((Vt=l.value.content)==null?void 0:Vt.textDecoration)==="underline"&&"active"]),onClick:t[59]||(t[59]=o=>{var X;return f({textDecoration:((X=l.value.content)==null?void 0:X.textDecoration)==="underline"?"none":"underline"})})},[...t[198]||(t[198]=[e("u",null,"U",-1)])],2),e("button",{class:te(["style-btn",((Ht=l.value.content)==null?void 0:Ht.textDecoration)==="line-through"&&"active"]),onClick:t[60]||(t[60]=o=>{var X;return f({textDecoration:((X=l.value.content)==null?void 0:X.textDecoration)==="line-through"?"none":"line-through"})})},[...t[199]||(t[199]=[e("s",null,"S",-1)])],2)])]),e("div",br,[t[201]||(t[201]=e("label",{class:"form-label"},"Color",-1)),e("div",yr,[e("input",{type:"color",value:((Gt=l.value.content)==null?void 0:Gt.color)||"#000",onInput:t[61]||(t[61]=o=>f({color:o.target.value})),class:"color-input-native"},null,40,hr),e("input",{value:((Qt=l.value.content)==null?void 0:Qt.color)||"#000",class:"input",onInput:t[62]||(t[62]=o=>f({color:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,xr)])]),e("div",wr,[t[202]||(t[202]=e("label",{class:"form-label"},"Line Height",-1)),e("input",{type:"number",min:".8",max:"3",step:".1",value:((Yt=l.value.content)==null?void 0:Yt.lineHeight)??1.5,class:"input",onChange:t[63]||(t[63]=o=>f({lineHeight:+o.target.value}))},null,40,kr)]),e("div",Cr,[e("div",Sr,[t[204]||(t[204]=e("label",{class:"form-label"},"Case",-1)),e("select",{value:((Kt=l.value.content)==null?void 0:Kt.textTransform)||"none",class:"select",onChange:t[64]||(t[64]=o=>f({textTransform:o.target.value}))},[...t[203]||(t[203]=[e("option",{value:"none"},"Normal",-1),e("option",{value:"uppercase"},"UPPERCASE",-1),e("option",{value:"lowercase"},"lowercase",-1),e("option",{value:"capitalize"},"Capitalize",-1)])],40,$r)]),e("div",Ir,[t[205]||(t[205]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Jt=l.value.content)==null?void 0:Jt.letterSpacing)??0,class:"input",onChange:t[65]||(t[65]=o=>f({letterSpacing:+o.target.value}))},null,40,Ar)])])])):q("",!0),l.value.type==="image"?(d(),u("div",Er,[t[214]||(t[214]=e("div",{class:"panel-title"},"Image",-1)),e("div",Mr,[t[207]||(t[207]=e("label",{class:"form-label"},"Source URL",-1)),e("input",{value:(Xt=l.value.content)==null?void 0:Xt.src,class:"input",placeholder:"https://...",onInput:t[66]||(t[66]=o=>f({src:o.target.value}))},null,40,Pr)]),e("div",_r,[t[208]||(t[208]=e("label",{class:"form-label"},"Alt Text",-1)),e("input",{value:(Zt=l.value.content)==null?void 0:Zt.alt,class:"input",onInput:t[67]||(t[67]=o=>f({alt:o.target.value}))},null,40,Tr)]),e("div",Nr,[t[210]||(t[210]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((eo=l.value.content)==null?void 0:eo.objectFit)||"cover",class:"select",onChange:t[68]||(t[68]=o=>f({objectFit:o.target.value}))},[...t[209]||(t[209]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,zr)]),e("div",Lr,[t[211]||(t[211]=e("label",{class:"form-label"},"Border Radius",-1)),e("input",{type:"number",min:"0",value:((to=l.value.content)==null?void 0:to.borderRadius)||0,class:"input",onChange:t[69]||(t[69]=o=>f({borderRadius:+o.target.value}))},null,40,Br)]),e("div",jr,[e("div",Dr,[t[212]||(t[212]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((oo=l.value.content)==null?void 0:oo.borderWidth)||0,class:"input",onChange:t[70]||(t[70]=o=>f({borderWidth:+o.target.value}))},null,40,Rr)]),e("div",qr,[t[213]||(t[213]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((no=l.value.content)==null?void 0:no.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[71]||(t[71]=o=>f({borderColor:o.target.value}))},null,40,Fr)])])])):q("",!0),l.value.type==="shape"?(d(),u("div",Wr,[t[222]||(t[222]=e("div",{class:"panel-title"},"Shape",-1)),e("div",Ur,[t[216]||(t[216]=e("label",{class:"form-label"},"Type",-1)),e("select",{value:((lo=l.value.content)==null?void 0:lo.shapeType)||"rectangle",class:"select",onChange:t[72]||(t[72]=o=>f({shapeType:o.target.value}))},[...t[215]||(t[215]=[Ve('<option value="rectangle" data-v-4f48861a>Rectangle</option><option value="circle" data-v-4f48861a>Circle</option><option value="triangle" data-v-4f48861a>Triangle</option><option value="star" data-v-4f48861a>Star</option><option value="arrow" data-v-4f48861a>Arrow</option><option value="diamond" data-v-4f48861a>Diamond</option>',6)])],40,Or)]),e("div",Vr,[t[217]||(t[217]=e("label",{class:"form-label"},"Fill Color",-1)),e("div",Hr,[e("input",{type:"color",value:((io=l.value.content)==null?void 0:io.fillColor)||"#6c47ff",onInput:t[73]||(t[73]=o=>f({fillColor:o.target.value})),class:"color-input-native"},null,40,Gr),e("input",{value:((so=l.value.content)==null?void 0:so.fillColor)||"#6c47ff",class:"input",onInput:t[74]||(t[74]=o=>f({fillColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Qr)])]),e("div",Yr,[t[218]||(t[218]=e("label",{class:"form-label"},"Border Color",-1)),e("div",Kr,[e("input",{type:"color",value:((ao=l.value.content)==null?void 0:ao.borderColor)||"transparent",onInput:t[75]||(t[75]=o=>f({borderColor:o.target.value})),class:"color-input-native"},null,40,Jr),e("input",{value:((ro=l.value.content)==null?void 0:ro.borderColor)||"transparent",class:"input",onInput:t[76]||(t[76]=o=>f({borderColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Xr)])]),e("div",Zr,[t[219]||(t[219]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((uo=l.value.content)==null?void 0:uo.borderWidth)||0,class:"input",onChange:t[77]||(t[77]=o=>f({borderWidth:+o.target.value}))},null,40,ed)]),e("div",td,[t[220]||(t[220]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((co=l.value.content)==null?void 0:co.borderRadius)||0,class:"input",onChange:t[78]||(t[78]=o=>f({borderRadius:+o.target.value}))},null,40,od)]),e("div",nd,[t[221]||(t[221]=e("label",{class:"form-label"},"Fill Opacity",-1)),e("input",{type:"number",min:"0",max:"1",step:".05",value:((po=l.value.content)==null?void 0:po.opacity)??1,class:"input",onChange:t[79]||(t[79]=o=>f({opacity:+o.target.value}))},null,40,ld)])])):q("",!0),l.value.type==="chart"?(d(),u("div",id,[t[243]||(t[243]=e("div",{class:"panel-title"},"Chart",-1)),e("div",sd,[t[224]||(t[224]=e("label",{class:"form-label"},"Chart Type",-1)),e("select",{value:((vo=l.value.content)==null?void 0:vo.chartType)||"bar",class:"select",onChange:t[80]||(t[80]=o=>f({chartType:o.target.value}))},[...t[223]||(t[223]=[e("option",{value:"bar"},"Bar",-1),e("option",{value:"line"},"Line",-1),e("option",{value:"circle"},"Circle",-1)])],40,ad)]),e("div",rd,[t[225]||(t[225]=e("label",{class:"form-label"},"Title",-1)),e("input",{value:((mo=l.value.content)==null?void 0:mo.title)||"",class:"input",onInput:t[81]||(t[81]=o=>f({title:o.target.value}))},null,40,dd)]),e("div",ud,[t[226]||(t[226]=e("label",{class:"form-label"},"Data or pasted CSV/TSV",-1)),e("textarea",{value:((fo=l.value.content)==null?void 0:fo.dataText)||"",class:"textarea",style:{"min-height":"110px"},placeholder:`Q1, 120
Q2, 180
Q3, 150`,onInput:t[82]||(t[82]=o=>f({dataText:o.target.value}))},null,40,cd),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:c},"Normalize rows"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:_},"Upload CSV")]),t[227]||(t[227]=e("div",{class:"field-hint"},"Use `label, value`, `label: value`, spreadsheet tab-separated rows, or a two-column CSV. Percentages and totals are calculated automatically for circle charts.",-1))]),e("div",pd,[t[228]||(t[228]=e("label",{class:"form-label"},"Paste table data",-1)),re(e("textarea",{"onUpdate:modelValue":t[83]||(t[83]=o=>$e.value=o),class:"textarea",style:{"min-height":"84px"},placeholder:`Label,Value
North,42
South,31`},null,512),[[be,$e.value]]),e("div",vd,[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:t[84]||(t[84]=o=>Ke($e.value))},"Convert pasted data")])]),e("div",md,[t[229]||(t[229]=e("label",{class:"form-label"},"Palette",-1)),e("input",{value:((go=l.value.content)==null?void 0:go.paletteText)||"",class:"input",placeholder:Te.value.paletteText,onInput:t[85]||(t[85]=o=>f({paletteText:o.target.value}))},null,40,fd),e("div",gd,[(d(!0),u(Z,null,ue(Ge.value,(o,X)=>(d(),u("span",{key:`chart-palette-${X}`,class:"chart-palette-swatch",style:me({background:o})},null,4))),128))]),e("div",{class:"chart-data-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:pe},"Use theme palette"),e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:F},"Apply theme colors")]),t[230]||(t[230]=e("div",{class:"field-hint"},"Separate colors with commas. Theme palette uses the project theme colors if you leave this aligned with the generated value.",-1))]),e("div",bd,[e("div",yd,[t[231]||(t[231]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((bo=l.value.content)==null?void 0:bo.backgroundColor)||"#ffffff",class:"color-input-native",onInput:t[86]||(t[86]=o=>f({backgroundColor:o.target.value}))},null,40,hd)]),e("div",xd,[t[232]||(t[232]=e("label",{class:"form-label"},"Text",-1)),e("input",{type:"color",value:((yo=l.value.content)==null?void 0:yo.textColor)||"#1a1a2e",class:"color-input-native",onInput:t[87]||(t[87]=o=>f({textColor:o.target.value}))},null,40,wd)])]),e("div",kd,[e("div",Cd,[t[233]||(t[233]=e("label",{class:"form-label"},"Grid",-1)),e("input",{type:"color",value:((ho=l.value.content)==null?void 0:ho.gridColor)||"#dbe3ef",class:"color-input-native",onInput:t[88]||(t[88]=o=>f({gridColor:o.target.value}))},null,40,Sd)]),e("div",$d,[t[234]||(t[234]=e("label",{class:"form-label"},"Border",-1)),e("input",{type:"color",value:((xo=l.value.content)==null?void 0:xo.borderColor)||"#e2e8f0",class:"color-input-native",onInput:t[89]||(t[89]=o=>f({borderColor:o.target.value}))},null,40,Id)])]),e("div",Ad,[e("div",Ed,[t[235]||(t[235]=e("label",{class:"form-label"},"Border Width",-1)),e("input",{type:"number",min:"0",value:((wo=l.value.content)==null?void 0:wo.borderWidth)??1,class:"input",onChange:t[90]||(t[90]=o=>f({borderWidth:+o.target.value}))},null,40,Md)]),((ko=l.value.content)==null?void 0:ko.chartType)!=="circle"?(d(),u("div",Pd,[t[236]||(t[236]=e("label",{class:"form-label"},"Max Value",-1)),e("input",{value:((Co=l.value.content)==null?void 0:Co.maxValue)??"",class:"input",placeholder:"Auto",onInput:t[91]||(t[91]=o=>f({maxValue:o.target.value}))},null,40,_d)])):(d(),u("div",Td,[t[237]||(t[237]=e("label",{class:"form-label"},"Inner Radius %",-1)),e("input",{type:"number",min:"20",max:"85",value:((So=l.value.content)==null?void 0:So.innerRadius)??62,class:"input",onChange:t[92]||(t[92]=o=>f({innerRadius:+o.target.value}))},null,40,Nd)]))]),(($o=l.value.content)==null?void 0:$o.chartType)==="line"?(d(),u("div",zd,[e("div",Ld,[t[238]||(t[238]=e("label",{class:"form-label"},"Line Width",-1)),e("input",{type:"number",min:"1",max:"8",value:((Io=l.value.content)==null?void 0:Io.strokeWidth)??3,class:"input",onChange:t[93]||(t[93]=o=>f({strokeWidth:+o.target.value}))},null,40,Bd)]),e("label",jd,[e("input",{type:"checkbox",checked:!!((Ao=l.value.content)!=null&&Ao.showArea),onChange:t[94]||(t[94]=o=>f({showArea:o.target.checked}))},null,40,Dd),t[239]||(t[239]=Q(" Show area fill ",-1))])])):q("",!0),e("label",Rd,[e("input",{type:"checkbox",checked:((Eo=l.value.content)==null?void 0:Eo.showLegend)!==!1,onChange:t[95]||(t[95]=o=>f({showLegend:o.target.checked}))},null,40,qd),t[240]||(t[240]=Q(" Show legend ",-1))]),((Mo=l.value.content)==null?void 0:Mo.chartType)!=="circle"?(d(),u("label",Fd,[e("input",{type:"checkbox",checked:((Po=l.value.content)==null?void 0:Po.showGrid)!==!1,onChange:t[96]||(t[96]=o=>f({showGrid:o.target.checked}))},null,40,Wd),t[241]||(t[241]=Q(" Show grid lines ",-1))])):q("",!0),e("label",Ud,[e("input",{type:"checkbox",checked:((_o=l.value.content)==null?void 0:_o.showValues)!==!1,onChange:t[97]||(t[97]=o=>f({showValues:o.target.checked}))},null,40,Od),t[242]||(t[242]=Q(" Show values ",-1))])])):q("",!0),l.value.type==="button"?(d(),u("div",Vd,[t[259]||(t[259]=e("div",{class:"panel-title"},"Button",-1)),e("div",Hd,[t[244]||(t[244]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(To=l.value.content)==null?void 0:To.label,class:"input",onInput:t[98]||(t[98]=o=>f({label:o.target.value}))},null,40,Gd)]),e("div",Qd,[t[246]||(t[246]=e("label",{class:"form-label"},"Style",-1)),e("select",{value:((No=l.value.content)==null?void 0:No.variant)||"primary",class:"select",onChange:t[99]||(t[99]=o=>f({variant:o.target.value}))},[...t[245]||(t[245]=[Ve('<option value="primary" data-v-4f48861a>Primary</option><option value="secondary" data-v-4f48861a>Secondary</option><option value="outline" data-v-4f48861a>Outline</option><option value="ghost" data-v-4f48861a>Ghost</option><option value="danger" data-v-4f48861a>Danger</option>',5)])],40,Yd)]),e("div",Kd,[t[248]||(t[248]=e("label",{class:"form-label"},"Action",-1)),e("select",{value:((zo=l.value.content)==null?void 0:zo.action)||"none",class:"select",onChange:t[100]||(t[100]=o=>f({action:o.target.value}))},[...t[247]||(t[247]=[e("option",{value:"none"},"None",-1),e("option",{value:"navigate"},"Navigate to slide",-1),e("option",{value:"link"},"Open URL",-1),e("option",{value:"submit"},"Submit",-1)])],40,Jd)]),(Lo=l.value.content)!=null&&Lo.action&&l.value.content.action!=="none"?(d(),u("div",Xd,[t[249]||(t[249]=e("label",{class:"form-label"},"Target (slide # or URL)",-1)),e("input",{value:(Bo=l.value.content)==null?void 0:Bo.target,class:"input",placeholder:"Slide # or https://...",onInput:t[101]||(t[101]=o=>f({target:o.target.value}))},null,40,Zd)])):q("",!0),e("div",eu,[e("div",tu,[t[250]||(t[250]=e("label",{class:"form-label"},"Background",-1)),e("input",{type:"color",value:((jo=l.value.content)==null?void 0:jo.bgColor)||"#6c47ff",class:"color-input-native",onInput:t[102]||(t[102]=o=>f({bgColor:o.target.value}))},null,40,ou)]),e("div",nu,[t[251]||(t[251]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((Do=l.value.content)==null?void 0:Do.textColor)||"#ffffff",class:"color-input-native",onInput:t[103]||(t[103]=o=>f({textColor:o.target.value}))},null,40,lu)])]),e("div",iu,[e("div",su,[t[252]||(t[252]=e("label",{class:"form-label"},"Border Color",-1)),e("input",{type:"color",value:((Ro=l.value.content)==null?void 0:Ro.borderColor)||"#6c47ff",class:"color-input-native",onInput:t[104]||(t[104]=o=>f({borderColor:o.target.value}))},null,40,au)]),e("div",ru,[t[253]||(t[253]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((qo=l.value.content)==null?void 0:qo.borderRadius)??8,class:"input",onChange:t[105]||(t[105]=o=>f({borderRadius:+o.target.value}))},null,40,du)])]),e("div",uu,[e("div",cu,[t[254]||(t[254]=e("label",{class:"form-label"},"Font Size",-1)),e("input",{type:"number",min:"10",value:((Fo=l.value.content)==null?void 0:Fo.fontSize)??15,class:"input",onChange:t[106]||(t[106]=o=>f({fontSize:+o.target.value}))},null,40,pu)]),e("div",vu,[t[256]||(t[256]=e("label",{class:"form-label"},"Weight",-1)),e("select",{value:String(((Wo=l.value.content)==null?void 0:Wo.fontWeight)??600),class:"select",onChange:t[107]||(t[107]=o=>f({fontWeight:+o.target.value}))},[...t[255]||(t[255]=[e("option",{value:"400"},"Normal",-1),e("option",{value:"500"},"Medium",-1),e("option",{value:"600"},"Semi-bold",-1),e("option",{value:"700"},"Bold",-1)])],40,mu)])]),e("div",fu,[e("div",gu,[t[257]||(t[257]=e("label",{class:"form-label"},"Font Family",-1)),e("select",{value:((Uo=l.value.content)==null?void 0:Uo.fontFamily)||"Inter, sans-serif",class:"select",onChange:t[108]||(t[108]=o=>f({fontFamily:o.target.value}))},[(d(),u(Z,null,ue(Wt,o=>e("option",{key:`btn-${o}`,value:o},$(o.split(",")[0]),9,yu)),64))],40,bu)]),e("div",hu,[t[258]||(t[258]=e("label",{class:"form-label"},"Letter Spacing",-1)),e("input",{type:"number",step:".2",value:((Oo=l.value.content)==null?void 0:Oo.letterSpacing)??0,class:"input",onChange:t[109]||(t[109]=o=>f({letterSpacing:+o.target.value}))},null,40,xu)])])])):q("",!0),l.value.type==="hotspot"?(d(),u("div",wu,[t[269]||(t[269]=e("div",{class:"panel-title"},"Hotspot",-1)),e("div",ku,[t[261]||(t[261]=e("label",{class:"form-label"},"Icon",-1)),e("select",{value:((Vo=l.value.content)==null?void 0:Vo.icon)||"?",class:"select",onChange:t[110]||(t[110]=o=>f({icon:o.target.value}))},[...t[260]||(t[260]=[Ve('<option value="?" data-v-4f48861a>? (Info)</option><option value="!" data-v-4f48861a>! (Alert)</option><option value="+" data-v-4f48861a>+ (Plus)</option><option value="i" data-v-4f48861a>i (Info)</option><option value="✦" data-v-4f48861a>✦ (Star)</option>',5)])],40,Cu)]),e("div",Su,[t[262]||(t[262]=e("label",{class:"form-label"},"Background Color",-1)),e("div",$u,[e("input",{type:"color",value:((Ho=l.value.content)==null?void 0:Ho.bgColor)||"#6c47ff",onInput:t[111]||(t[111]=o=>f({bgColor:o.target.value})),class:"color-input-native"},null,40,Iu),e("input",{value:((Go=l.value.content)==null?void 0:Go.bgColor)||"#6c47ff",class:"input",onInput:t[112]||(t[112]=o=>f({bgColor:o.target.value})),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,Au)])]),e("div",Eu,[e("div",Mu,[t[263]||(t[263]=e("label",{class:"form-label"},"Icon Color",-1)),e("input",{type:"color",value:((Qo=l.value.content)==null?void 0:Qo.iconColor)||"#ffffff",class:"color-input-native",onInput:t[113]||(t[113]=o=>f({iconColor:o.target.value}))},null,40,Pu)]),e("div",_u,[t[264]||(t[264]=e("label",{class:"form-label"},"Corner Radius",-1)),e("input",{type:"number",min:"0",value:((Yo=l.value.content)==null?void 0:Yo.borderRadius)??999,class:"input",onChange:t[114]||(t[114]=o=>f({borderRadius:+o.target.value}))},null,40,Tu)])]),e("div",Nu,[t[265]||(t[265]=e("label",{class:"form-label"},"Popup Title",-1)),e("input",{value:(Ko=l.value.content)==null?void 0:Ko.popupTitle,class:"input",onInput:t[115]||(t[115]=o=>f({popupTitle:o.target.value}))},null,40,zu)]),e("div",Lu,[t[266]||(t[266]=e("label",{class:"form-label"},"Popup Content",-1)),e("textarea",{value:(Jo=l.value.content)==null?void 0:Jo.popupContent,class:"textarea",onInput:t[116]||(t[116]=o=>f({popupContent:o.target.value}))},null,40,Bu)]),e("div",ju,[e("div",Du,[t[267]||(t[267]=e("label",{class:"form-label"},"Popup Background",-1)),e("input",{type:"color",value:((Xo=l.value.content)==null?void 0:Xo.popupBgColor)||"#ffffff",class:"color-input-native",onInput:t[117]||(t[117]=o=>f({popupBgColor:o.target.value}))},null,40,Ru)]),e("div",qu,[t[268]||(t[268]=e("label",{class:"form-label"},"Popup Text",-1)),e("input",{type:"color",value:((Zo=l.value.content)==null?void 0:Zo.popupTextColor)||"#1a1a2e",class:"color-input-native",onInput:t[118]||(t[118]=o=>f({popupTextColor:o.target.value}))},null,40,Fu)])])])):q("",!0),l.value.type==="video"?(d(),u("div",Wu,[t[278]||(t[278]=e("div",{class:"panel-title"},"Video",-1)),e("div",Uu,[t[270]||(t[270]=e("label",{class:"form-label"},"Video URL / Embed",-1)),e("input",{value:(en=l.value.content)==null?void 0:en.src,class:"input",placeholder:"YouTube, Vimeo, or direct .mp4 URL",onInput:t[119]||(t[119]=o=>f({src:o.target.value}))},null,40,Ou)]),e("div",Vu,[t[271]||(t[271]=e("label",{class:"form-label"},"Poster Image URL",-1)),e("input",{value:(tn=l.value.content)==null?void 0:tn.poster,class:"input",onInput:t[120]||(t[120]=o=>f({poster:o.target.value}))},null,40,Hu)]),e("div",Gu,[t[273]||(t[273]=e("label",{class:"form-label"},"Object Fit",-1)),e("select",{value:((on=l.value.content)==null?void 0:on.objectFit)||"cover",class:"select",onChange:t[121]||(t[121]=o=>f({objectFit:o.target.value}))},[...t[272]||(t[272]=[e("option",{value:"cover"},"Cover",-1),e("option",{value:"contain"},"Contain",-1),e("option",{value:"fill"},"Fill",-1),e("option",{value:"none"},"None",-1)])],40,Qu)]),e("label",Yu,[e("input",{type:"checkbox",checked:(nn=l.value.content)==null?void 0:nn.autoplay,onChange:t[122]||(t[122]=o=>f({autoplay:o.target.checked}))},null,40,Ku),t[274]||(t[274]=Q(" Autoplay ",-1))]),e("label",Ju,[e("input",{type:"checkbox",checked:((ln=l.value.content)==null?void 0:ln.controls)??!0,onChange:t[123]||(t[123]=o=>f({controls:o.target.checked}))},null,40,Xu),t[275]||(t[275]=Q(" Show Controls ",-1))]),e("label",Zu,[e("input",{type:"checkbox",checked:(sn=l.value.content)==null?void 0:sn.loop,onChange:t[124]||(t[124]=o=>f({loop:o.target.checked}))},null,40,ec),t[276]||(t[276]=Q(" Loop ",-1))]),e("label",tc,[e("input",{type:"checkbox",checked:(an=l.value.content)==null?void 0:an.muted,onChange:t[125]||(t[125]=o=>f({muted:o.target.checked}))},null,40,oc),t[277]||(t[277]=Q(" Muted ",-1))])])):q("",!0),l.value.type==="audio"?(d(),u("div",nc,[t[287]||(t[287]=e("div",{class:"panel-title"},"Audio",-1)),e("div",lc,[t[279]||(t[279]=e("label",{class:"form-label"},"Audio URL",-1)),e("input",{value:(rn=l.value.content)==null?void 0:rn.src,class:"input",placeholder:".mp3 / .wav URL",onInput:t[126]||(t[126]=o=>f({src:o.target.value}))},null,40,ic)]),e("div",sc,[t[280]||(t[280]=e("label",{class:"form-label"},"Label",-1)),e("input",{value:(dn=l.value.content)==null?void 0:dn.label,class:"input",onInput:t[127]||(t[127]=o=>f({label:o.target.value}))},null,40,ac)]),e("label",rc,[e("input",{type:"checkbox",checked:(un=l.value.content)==null?void 0:un.autoplay,onChange:t[128]||(t[128]=o=>f({autoplay:o.target.checked}))},null,40,dc),t[281]||(t[281]=Q(" Autoplay ",-1))]),e("label",uc,[e("input",{type:"checkbox",checked:((cn=l.value.content)==null?void 0:cn.controls)!==!1,onChange:t[129]||(t[129]=o=>f({controls:o.target.checked}))},null,40,cc),t[282]||(t[282]=Q(" Show Controls ",-1))]),e("label",pc,[e("input",{type:"checkbox",checked:(pn=l.value.content)==null?void 0:pn.loop,onChange:t[130]||(t[130]=o=>f({loop:o.target.checked}))},null,40,vc),t[283]||(t[283]=Q(" Loop ",-1))]),e("div",mc,[e("div",fc,[t[284]||(t[284]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((vn=l.value.content)==null?void 0:vn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[131]||(t[131]=o=>f({accentColor:o.target.value}))},null,40,gc)]),e("div",bc,[t[285]||(t[285]=e("label",{class:"form-label"},"Text Color",-1)),e("input",{type:"color",value:((mn=l.value.content)==null?void 0:mn.textColor)||"#555555",class:"color-input-native",onInput:t[132]||(t[132]=o=>f({textColor:o.target.value}))},null,40,yc)])]),e("div",hc,[t[286]||(t[286]=e("label",{class:"form-label"},"Background Color",-1)),e("input",{type:"color",value:((fn=l.value.content)==null?void 0:fn.bgColor)||"#ede7ff",class:"color-input-native",onInput:t[133]||(t[133]=o=>f({bgColor:o.target.value}))},null,40,xc)])])):q("",!0),l.value.type==="quiz"?(d(),u("div",wc,[t[295]||(t[295]=e("div",{class:"panel-title"},"Quiz Question",-1)),e("div",kc,[t[288]||(t[288]=e("label",{class:"form-label"},"Question",-1)),e("textarea",{value:(gn=l.value.content)==null?void 0:gn.question,class:"textarea",style:{"min-height":"60px"},onInput:t[134]||(t[134]=o=>f({question:o.target.value}))},null,40,Cc)]),e("div",Sc,[t[289]||(t[289]=e("label",{class:"form-label"},"Options (one per line)",-1)),e("textarea",{value:(yn=(bn=l.value.content)==null?void 0:bn.options)==null?void 0:yn.join(`
`),class:"textarea",style:{"min-height":"80px"},onInput:t[135]||(t[135]=o=>f({options:o.target.value.split(`
`).filter(Boolean)}))},null,40,$c)]),e("div",Ic,[t[290]||(t[290]=e("label",{class:"form-label"},"Correct Answer Index (0-based)",-1)),e("input",{type:"number",min:"0",value:((hn=l.value.content)==null?void 0:hn.correctIndex)??0,class:"input",onChange:t[136]||(t[136]=o=>f({correctIndex:+o.target.value}))},null,40,Ac)]),e("div",Ec,[t[291]||(t[291]=e("label",{class:"form-label"},"Explanation",-1)),e("textarea",{value:(xn=l.value.content)==null?void 0:xn.explanation,class:"textarea",onInput:t[137]||(t[137]=o=>f({explanation:o.target.value}))},null,40,Mc)]),e("div",Pc,[e("div",_c,[t[292]||(t[292]=e("label",{class:"form-label"},"Card Background",-1)),e("input",{type:"color",value:((wn=l.value.content)==null?void 0:wn.cardBgColor)||"#ffffff",class:"color-input-native",onInput:t[138]||(t[138]=o=>f({cardBgColor:o.target.value}))},null,40,Tc)]),e("div",Nc,[t[293]||(t[293]=e("label",{class:"form-label"},"Question Color",-1)),e("input",{type:"color",value:((kn=l.value.content)==null?void 0:kn.questionColor)||"#1a1a2e",class:"color-input-native",onInput:t[139]||(t[139]=o=>f({questionColor:o.target.value}))},null,40,zc)])]),e("div",Lc,[t[294]||(t[294]=e("label",{class:"form-label"},"Accent Color",-1)),e("input",{type:"color",value:((Cn=l.value.content)==null?void 0:Cn.accentColor)||"#6c47ff",class:"color-input-native",onInput:t[140]||(t[140]=o=>f({accentColor:o.target.value}))},null,40,Bc)])])):q("",!0),e("div",jc,[t[299]||(t[299]=e("div",{class:"panel-title"},"Actions",-1)),e("div",Dc,[e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[141]||(t[141]=o=>S(i).duplicateElement(S(n).projectId,S(n).currentSlideId,l.value.id))},[...t[296]||(t[296]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})],-1),Q(" Duplicate ",-1)])]),e("button",{class:"btn btn-secondary btn-sm w-full",onClick:t[142]||(t[142]=o=>{S(n).showInteractionEditor=!0,S(n).interactionElementId=l.value.id})},[...t[297]||(t[297]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Q(" Interactions ",-1)])]),e("button",{class:"btn btn-danger btn-sm w-full",onClick:t[143]||(t[143]=o=>{S(i).deleteElement(S(n).projectId,S(n).currentSlideId,l.value.id),S(n).clearSelection()})},[...t[298]||(t[298]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6l-1 14H6L5 6"}),e("path",{d:"M9 6V4h6v2"})],-1),Q(" Delete Element ",-1)])])])])],64)):(d(),u("div",Cs,[e("div",Ss,[e("button",{type:"button",class:te(["slide-settings-tab",N.value==="canvas"&&"active"]),onClick:t[15]||(t[15]=o=>N.value="canvas")},[...t[149]||(t[149]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("rect",{x:"3.5",y:"5",width:"17",height:"12",rx:"2"}),e("path",{d:"M8 19h8"})],-1),e("span",null,"Canvas",-1)])],2),e("button",{type:"button",class:te(["slide-settings-tab",N.value==="transitions"&&"active"]),onClick:t[16]||(t[16]=o=>N.value="transitions")},[...t[150]||(t[150]=[Ve('<svg class="slide-settings-tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" data-v-4f48861a><path d="M5 7h5" data-v-4f48861a></path><path d="M5 12h10" data-v-4f48861a></path><path d="M5 17h14" data-v-4f48861a></path><path d="M14 7l5 5-5 5" data-v-4f48861a></path></svg><span data-v-4f48861a>Transitions</span>',2)])],2),e("button",{type:"button",class:te(["slide-settings-tab",N.value==="navigation"&&"active"]),onClick:t[17]||(t[17]=o=>N.value="navigation")},[...t[151]||(t[151]=[e("svg",{class:"slide-settings-tab-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M12 4v16"}),e("path",{d:"M8 8l4-4 4 4"}),e("path",{d:"M16 16l-4 4-4-4"})],-1),e("span",null,"Navigation",-1)])],2)]),N.value==="canvas"?(d(),u("div",$s,[t[166]||(t[166]=e("div",{class:"panel-title"},"Canvas",-1)),e("div",Is,[t[152]||(t[152]=e("label",{class:"form-label"},"Title",-1)),re(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>P.value.title=o),class:"input",onInput:t[19]||(t[19]=o=>jt("title",P.value.title))},null,544),[[be,P.value.title]])]),e("div",As,[t[153]||(t[153]=e("label",{class:"form-label"},"Background",-1)),e("div",Es,[(d(),u(Z,null,ue(["color","gradient","image"],o=>{var X;return e("button",{key:o,class:te(["bg-type-btn",(((X=a.value)==null?void 0:X.backgroundType)||"color")===o&&"active"]),onClick:Sn=>Ie({backgroundType:o})},$(o),11,Ms)}),64))]),(((T=a.value)==null?void 0:T.backgroundType)||"color")==="color"?(d(),u("div",Ps,[e("input",{type:"color",value:((le=a.value)==null?void 0:le.background)||"#ffffff",onInput:t[20]||(t[20]=o=>Ie({background:o.target.value})),class:"color-input-native"},null,40,_s),e("input",{value:((ke=a.value)==null?void 0:ke.background)||"#ffffff",class:"input",onInput:t[21]||(t[21]=o=>Ie({background:o.target.value})),style:{"font-size":"var(--text-xs)","font-family":"var(--font-mono)"}},null,40,Ts)])):((Se=a.value)==null?void 0:Se.backgroundType)==="gradient"?re((d(),u("input",{key:1,"onUpdate:modelValue":t[22]||(t[22]=o=>P.value.backgroundGradient=o),class:"input",placeholder:"linear-gradient(135deg, #667eea, #764ba2)",onInput:t[23]||(t[23]=o=>Ie({backgroundGradient:P.value.backgroundGradient}))},null,544)),[[be,P.value.backgroundGradient]]):re((d(),u("input",{key:2,"onUpdate:modelValue":t[24]||(t[24]=o=>P.value.backgroundImage=o),class:"input",placeholder:"https://...",onInput:t[25]||(t[25]=o=>Ie({backgroundImage:P.value.backgroundImage}))},null,544)),[[be,P.value.backgroundImage]])]),e("div",Ns,[t[163]||(t[163]=e("div",{class:"panel-title"},"Select Size",-1)),e("div",zs,[(d(!0),u(Z,null,ue(S(yl),o=>{var X;return d(),u("button",{key:o.id,type:"button",class:te(["canvas-size-card",((X=v.value)==null?void 0:X.id)===o.id&&"active"]),onClick:Sn=>Be(o)},[e("span",Bs,[e("span",{class:te(["canvas-size-thumb",`canvas-size-thumb-${o.id}`]),"aria-hidden":"true"},[...t[154]||(t[154]=[e("span",{class:"canvas-size-thumb-frame"},null,-1),e("span",{class:"canvas-size-thumb-safe"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-top"},null,-1),e("span",{class:"canvas-size-thumb-line canvas-size-thumb-line-bottom"},null,-1)])],2)]),e("span",js,$(o.label),1),e("span",Ds,$(o.ratioLabel),1)],10,Ls)}),128))]),e("div",Rs,[e("div",qs,[t[155]||(t[155]=e("span",null,"Custom",-1)),e("span",Fs,"Current ratio "+$(h.value),1)]),e("div",Ws,[e("div",Us,[t[157]||(t[157]=e("label",{class:"form-label"},"Width",-1)),e("div",Os,[e("input",{type:"number",min:"320",max:"4096",value:y.value.width,class:"input",onChange:t[26]||(t[26]=o=>xe("width",o.target.value))},null,40,Vs),t[156]||(t[156]=e("span",{class:"canvas-size-unit"},"px",-1))])]),t[160]||(t[160]=e("div",{class:"canvas-size-separator"},"×",-1)),e("div",Hs,[t[159]||(t[159]=e("label",{class:"form-label"},"Height",-1)),e("div",Gs,[e("input",{type:"number",min:"320",max:"4096",value:y.value.height,class:"input",onChange:t[27]||(t[27]=o=>xe("height",o.target.value))},null,40,Qs),t[158]||(t[158]=e("span",{class:"canvas-size-unit"},"px",-1))])])]),e("label",Ys,[re(e("input",{type:"checkbox","onUpdate:modelValue":t[28]||(t[28]=o=>j.value=o)},null,512),[[$t,j.value]]),t[161]||(t[161]=Q(" Maintain proportions ",-1))]),t[162]||(t[162]=e("div",{class:"field-hint"},"Canvas size affects the editor, preview, slide thumbnails, and exported HTML package.",-1))]),t[164]||(t[164]=Ve('<div class="canvas-size-callout" data-v-4f48861a><svg class="canvas-size-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-4f48861a><circle cx="12" cy="12" r="9" data-v-4f48861a></circle><path d="M12 10v6" data-v-4f48861a></path><path d="M12 7h.01" data-v-4f48861a></path></svg><span data-v-4f48861a>Changes will be applied to all pages in the project.</span></div>',1))]),e("div",Ks,[t[165]||(t[165]=e("div",{class:"panel-title"},"Slide Notes",-1)),re(e("textarea",{"onUpdate:modelValue":t[29]||(t[29]=o=>P.value.notes=o),class:"textarea",placeholder:"Speaker notes…",style:{"min-height":"80px"},onInput:t[30]||(t[30]=o=>jt("notes",P.value.notes))},null,544),[[be,P.value.notes]])])])):N.value==="transitions"?(d(),u("div",Js,[t[171]||(t[171]=e("div",{class:"panel-title"},"Transitions",-1)),e("select",{value:((Ne=a.value)==null?void 0:Ne.transition)||"none",class:"select",onChange:t[31]||(t[31]=o=>Ie({transition:o.target.value}))},[...t[167]||(t[167]=[Ve('<option value="none" data-v-4f48861a>None</option><option value="fade" data-v-4f48861a>Fade</option><option value="slide" data-v-4f48861a>Slide</option><option value="zoom" data-v-4f48861a>Zoom</option><option value="flip" data-v-4f48861a>Flip</option>',5)])],40,Xs),e("div",Zs,[t[168]||(t[168]=e("label",{class:"form-label"},"Auto-advance Duration (seconds)",-1)),e("input",{type:"number",min:"0",step:"0.5",value:((Pe=a.value)==null?void 0:Pe.duration)??0,class:"input",onChange:t[32]||(t[32]=o=>Yn(o.target.value))},null,40,ea),t[169]||(t[169]=e("div",{class:"field-hint"},"Set to 0 to require manual navigation on this slide.",-1))]),e("label",ta,[e("input",{type:"checkbox",checked:!!((ot=a.value)!=null&&ot.advanceOnMediaEnd),onChange:t[33]||(t[33]=o=>Ie({advanceOnMediaEnd:o.target.checked}))},null,40,oa),t[170]||(t[170]=Q(" Advance when slide media finishes ",-1))]),t[172]||(t[172]=e("div",{class:"field-hint"},"Uses the first playable audio or direct video on the slide. Embedded YouTube/Vimeo iframes cannot report completion here.",-1))])):(d(),u("div",na,[t[178]||(t[178]=e("div",{class:"panel-title"},"Navigation",-1)),e("label",la,[e("input",{type:"checkbox",checked:m.value.autoPlay,onChange:t[34]||(t[34]=o=>Ce({autoPlay:o.target.checked}))},null,40,ia),t[173]||(t[173]=Q(" Autoplay preview and exported presentation ",-1))]),e("label",sa,[e("input",{type:"checkbox",checked:m.value.loop,onChange:t[35]||(t[35]=o=>Ce({loop:o.target.checked}))},null,40,aa),t[174]||(t[174]=Q(" Loop back to the first slide at the end ",-1))]),e("label",ra,[e("input",{type:"checkbox",checked:m.value.showProgress,onChange:t[36]||(t[36]=o=>Ce({showProgress:o.target.checked}))},null,40,da),t[175]||(t[175]=Q(" Show progress bar in preview ",-1))]),e("label",ua,[e("input",{type:"checkbox",checked:m.value.showNavControls,onChange:t[37]||(t[37]=o=>Ce({showNavControls:o.target.checked}))},null,40,ca),t[176]||(t[176]=Q(" Show previous/next and dot navigation ",-1))]),e("label",pa,[e("input",{type:"checkbox",checked:m.value.allowKeyboardNav,onChange:t[38]||(t[38]=o=>Ce({allowKeyboardNav:o.target.checked}))},null,40,va),t[177]||(t[177]=Q(" Allow arrow keys and space bar navigation ",-1))])]))]))])}}},qc=Re(Rc,[["__scopeId","data-v-4f48861a"]]),Fc={class:"editor-toolbar"},Wc={class:"toolbar-group"},Uc={class:"toolbar-group"},Oc=["data-tooltip","onClick"],Vc={key:0,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Hc={key:1,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Gc={key:2,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Qc={key:3,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Yc={key:4,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Kc={key:5,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Jc={key:6,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Xc={key:7,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Zc={key:8,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},ep={key:9,width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},tp={class:"tool-label"},op={class:"toolbar-group"},np={class:"toolbar-group"},lp={class:"toolbar-group"},ip={__name:"EditorToolbar",emits:["open-ai-project"],setup(r,{emit:n}){const i=n,s=Qe();Ye();const a=[{id:"text",label:"Text",tooltip:"Add text (T)",icon:"text"},{id:"heading",label:"Heading",tooltip:"Add heading",icon:"heading"},{id:"image",label:"Image",tooltip:"Add image (I)",icon:"image"},{id:"shape",label:"Shape",tooltip:"Add shape (S)",icon:"shape"},{id:"button",label:"Button",tooltip:"Add button (B)",icon:"button"},{id:"hotspot",label:"Hotspot",tooltip:"Add hotspot (H)",icon:"hotspot"},{id:"video",label:"Video",tooltip:"Embed video",icon:"video"},{id:"audio",label:"Audio",tooltip:"Embed audio",icon:"audio"},{id:"quiz",label:"Quiz",tooltip:"Add quiz",icon:"quiz"},{id:"chart",label:"Chart",tooltip:"Add chart",icon:"chart"}];function m(y){s.setActiveTool(y)}return(y,v)=>(d(),u("div",Fc,[e("div",Wc,[e("button",{class:te(["tool-btn",S(s).activeTool==="select"&&"active"]),onClick:v[0]||(v[0]=h=>m("select")),"data-tooltip":"Select (V)"},[...v[7]||(v[7]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M5 3l14 9-7 2-5 7V3z"})],-1),e("span",{class:"tool-label"},"Select",-1)])],2)]),v[23]||(v[23]=e("div",{class:"toolbar-divider"},null,-1)),e("div",Uc,[(d(),u(Z,null,ue(a,h=>e("button",{key:h.id,class:te(["tool-btn",S(s).activeTool===h.id&&"active"]),"data-tooltip":h.tooltip,onClick:j=>m(h.id)},[h.icon==="text"?(d(),u("svg",Vc,[...v[8]||(v[8]=[e("polyline",{points:"4 7 4 4 20 4 20 7"},null,-1),e("line",{x1:"9",y1:"20",x2:"15",y2:"20"},null,-1),e("line",{x1:"12",y1:"4",x2:"12",y2:"20"},null,-1)])])):h.icon==="heading"?(d(),u("svg",Hc,[...v[9]||(v[9]=[e("path",{d:"M6 12h12M6 4v16M18 4v16","stroke-linecap":"round"},null,-1)])])):h.icon==="image"?(d(),u("svg",Gc,[...v[10]||(v[10]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])):h.icon==="shape"?(d(),u("svg",Qc,[...v[11]||(v[11]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"},null,-1)])])):h.icon==="button"?(d(),u("svg",Yc,[...v[12]||(v[12]=[e("rect",{x:"2",y:"7",width:"20",height:"10",rx:"5"},null,-1),e("line",{x1:"8",y1:"12",x2:"16",y2:"12"},null,-1)])])):h.icon==="hotspot"?(d(),u("svg",Kc,[...v[13]||(v[13]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):h.icon==="video"?(d(),u("svg",Jc,[...v[14]||(v[14]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])):h.icon==="audio"?(d(),u("svg",Xc,[...v[15]||(v[15]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):h.icon==="quiz"?(d(),u("svg",Zc,[...v[16]||(v[16]=[e("path",{d:"M9 11l3 3L22 4"},null,-1),e("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},null,-1)])])):h.icon==="chart"?(d(),u("svg",ep,[...v[17]||(v[17]=[e("path",{d:"M4 19h16"},null,-1),e("path",{d:"M7 16V9"},null,-1),e("path",{d:"M12 16V5"},null,-1),e("path",{d:"M17 16v-4"},null,-1)])])):q("",!0),e("span",tp,$(h.label),1)],10,Oc)),64))]),v[24]||(v[24]=e("div",{class:"toolbar-divider"},null,-1)),e("div",op,[e("button",{class:"tool-btn tool-btn-ai-project",onClick:v[1]||(v[1]=h=>i("open-ai-project")),"data-tooltip":"Create a new AI project"},[...v[18]||(v[18]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"})],-1),e("span",{class:"tool-label"},"AI Project",-1)])])]),v[25]||(v[25]=e("div",{class:"toolbar-spacer"},null,-1)),e("div",np,[e("button",{class:"tool-btn",onClick:v[2]||(v[2]=h=>S(s).zoomOut()),"data-tooltip":"Zoom out (Ctrl−)"},[...v[19]||(v[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),e("line",{x1:"8",y1:"11",x2:"14",y2:"11"})],-1)])]),e("button",{class:"zoom-display",onClick:v[3]||(v[3]=h=>S(s).zoomReset())},$(Math.round(S(s).zoomLevel*100))+"% ",1),e("button",{class:"tool-btn",onClick:v[4]||(v[4]=h=>S(s).zoomIn()),"data-tooltip":"Zoom in (Ctrl+)"},[...v[20]||(v[20]=[Ve('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="11" cy="11" r="8" data-v-d964cc0f></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-d964cc0f></line><line x1="11" y1="8" x2="11" y2="14" data-v-d964cc0f></line><line x1="8" y1="11" x2="14" y2="11" data-v-d964cc0f></line></svg>',1)])])]),v[26]||(v[26]=e("div",{class:"toolbar-divider"},null,-1)),e("div",lp,[e("button",{class:te(["tool-btn",S(s).showGrid&&"active"]),onClick:v[5]||(v[5]=h=>S(s).toggleGrid()),"data-tooltip":"Toggle grid (Ctrl+G)"},[...v[21]||(v[21]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18"})],-1)])],2),e("button",{class:te(["tool-btn",S(s).snapToGrid&&"active"]),onClick:v[6]||(v[6]=h=>S(s).toggleSnap()),"data-tooltip":"Snap to grid"},[...v[22]||(v[22]=[Ve('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d964cc0f><circle cx="5" cy="5" r="1" data-v-d964cc0f></circle><circle cx="12" cy="5" r="1" data-v-d964cc0f></circle><circle cx="19" cy="5" r="1" data-v-d964cc0f></circle><circle cx="5" cy="12" r="1" data-v-d964cc0f></circle><circle cx="12" cy="12" r="1" data-v-d964cc0f></circle><circle cx="19" cy="12" r="1" data-v-d964cc0f></circle><circle cx="5" cy="19" r="1" data-v-d964cc0f></circle><circle cx="12" cy="19" r="1" data-v-d964cc0f></circle><circle cx="19" cy="19" r="1" data-v-d964cc0f></circle></svg>',1)])],2)])]))}},sp=Re(ip,[["__scopeId","data-v-d964cc0f"]]),ap=["value"],rp=["value"],dp=["onMousedown"],up={key:1,class:"selection-border locked-border"},cp={__name:"ElementWrapper",props:{element:{type:Object,required:!0}},setup(r){const n=r,i=Qe(),s=Ye(),a=il("canvasScale",B(1)),m=M(()=>i.projectId),y=M(()=>i.currentSlideId),v=M(()=>i.selectedElementIds.includes(n.element.id)),h=M(()=>n.element.locked),j=M(()=>n.element.visible!==!1),N=M(()=>{var W,ae;return((ae=(W=n.element.animations)==null?void 0:W[0])==null?void 0:ae.type)||"auto"}),z=[{value:"auto",label:"Auto"},{value:"none",label:"None"},{value:"fade-up",label:"Fade"},{value:"fade-left",label:"Left"},{value:"fade-right",label:"Right"},{value:"zoom-in",label:"Zoom"},{value:"pop-in",label:"Pop"},{value:"stagger-in",label:"Stagger"}];let k=!1,C=0,x=0,l=new Map;function g(W){var ce;if(h.value||W.target.classList.contains("resize-handle"))return;const ae=W.ctrlKey||W.metaKey||W.shiftKey;v.value?ae&&i.selectElement(n.element.id,!0):i.selectElement(n.element.id,ae),i.setActiveTool("select"),k=!1,C=W.clientX,x=W.clientY,l.clear();const ve=(ce=s.getProject(m.value))==null?void 0:ce.slides.find(ye=>ye.id===y.value);ve&&i.selectedElementIds.forEach(ye=>{const we=ve.elements.find($e=>$e.id===ye);we&&!we.locked&&l.set(ye,{x:we.x,y:we.y})}),window.addEventListener("mousemove",w),window.addEventListener("mouseup",D),W.stopPropagation()}function w(W){const ae=(W.clientX-C)/a.value,ve=(W.clientY-x)/a.value;!k&&(Math.abs(ae)>3||Math.abs(ve)>3)&&(k=!0),k&&l.forEach((ce,ye)=>{let we=ce.x+ae,$e=ce.y+ve;if(i.snapToGrid&&i.gridSize){const _e=i.gridSize;we=Math.round(we/_e)*_e,$e=Math.round($e/_e)*_e}s.updateElement(m.value,y.value,ye,{x:we,y:$e})})}function D(W){k||!(W.ctrlKey||W.metaKey||W.shiftKey)&&i.selectedElementIds.length>1&&i.selectElement(n.element.id,!1),k=!1,window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",D)}const O=["n","ne","e","se","s","sw","w","nw"];let oe=!1,V="",Y=0,ie=0,L=0,R=0,K=0,ne=0;function J(W,ae){h.value||(W.stopPropagation(),W.preventDefault(),oe=!0,V=ae,Y=W.clientX,ie=W.clientY,L=n.element.width,R=n.element.height,K=n.element.x,ne=n.element.y,window.addEventListener("mousemove",se),window.addEventListener("mouseup",de))}function se(W){if(!oe)return;const ae=a.value,ve=(W.clientX-Y)/ae,ce=(W.clientY-ie)/ae,ye=20;let we=K,$e=ne,_e=L,Le=R;if(V.includes("e")&&(_e=Math.max(ye,L+ve)),V.includes("s")&&(Le=Math.max(ye,R+ce)),V.includes("w")){const f=Math.max(ye,L-ve);we=K+(L-f),_e=f}if(V.includes("n")){const f=Math.max(ye,R-ce);$e=ne+(R-f),Le=f}if(i.snapToGrid&&i.gridSize){const f=i.gridSize;_e=Math.round(_e/f)*f,Le=Math.round(Le/f)*f,we=Math.round(we/f)*f,$e=Math.round($e/f)*f}s.updateElement(m.value,y.value,n.element.id,{x:we,y:$e,width:_e,height:Le})}function de(){oe=!1,window.removeEventListener("mousemove",se),window.removeEventListener("mouseup",de)}function Ee(){["text","heading"].includes(n.element.type)&&i.setRightPanel("properties")}const he=M(()=>({position:"absolute",left:`${n.element.x}px`,top:`${n.element.y}px`,width:`${n.element.width}px`,height:`${n.element.height}px`,transform:`rotate(${n.element.rotation||0}deg)`,opacity:n.element.opacity??1,zIndex:n.element.zIndex||1,cursor:h.value?"not-allowed":"move",visibility:j.value?"visible":"hidden",userSelect:"none"}));function fe(W){return{n:"n-resize",ne:"ne-resize",e:"e-resize",se:"se-resize",s:"s-resize",sw:"sw-resize",w:"w-resize",nw:"nw-resize"}[W]||"auto"}function ge(W){var ve;if(h.value)return;if(W==="auto"){s.updateElement(m.value,y.value,n.element.id,{animations:[]});return}const ae=((ve=n.element.animations)==null?void 0:ve[0])||{};s.updateElement(m.value,y.value,n.element.id,{animations:[{type:W,delay:Math.max(0,Number(ae.delay)||0),duration:Math.max(.1,Number(ae.duration)||.64)}]})}return(W,ae)=>(d(),u("div",{class:te(["element-wrapper",v.value&&"selected",h.value&&"locked"]),style:me(he.value),onMousedown:g,onDblclick:Ee},[sl(W.$slots,"default",{},void 0),v.value&&!h.value?(d(),u(Z,{key:0},[ae[3]||(ae[3]=e("div",{class:"selection-border"},null,-1)),e("div",{class:"motion-chip",onMousedown:ae[1]||(ae[1]=Me(()=>{},["stop"]))},[ae[2]||(ae[2]=e("span",{class:"motion-chip-label"},"Motion",-1)),e("select",{class:"motion-chip-select",value:N.value,onChange:ae[0]||(ae[0]=ve=>ge(ve.target.value))},[(d(),u(Z,null,ue(z,ve=>e("option",{key:ve.value,value:ve.value},$(ve.label),9,rp)),64))],40,ap)],32),(d(),u(Z,null,ue(O,ve=>e("div",{key:ve,class:te(["resize-handle",`handle-${ve}`]),style:me({cursor:fe(ve)}),onMousedown:Me(ce=>J(ce,ve),["stop"])},null,46,dp)),64))],64)):q("",!0),v.value&&h.value?(d(),u("div",up)):q("",!0)],38))}},pp=Re(cp,[["__scopeId","data-v-179c0a50"]]),vp=["contenteditable"],At={__name:"TextElement",props:{element:{type:Object,required:!0}},setup(r){const n=r,i=M(()=>n.element.content||{}),s=Qe(),a=Ye(),m=B(!1),y=B(null),v=B("");He(()=>i.value.text,k=>{m.value||(v.value=k||(n.element.type==="heading"?"Heading":"Click to edit text"))},{immediate:!0});function h(){s.selectedElementId===n.element.id&&(m.value=!0,al(()=>{if(y.value){y.value.focus();const k=document.createRange();k.selectNodeContents(y.value),k.collapse(!1);const C=window.getSelection();C.removeAllRanges(),C.addRange(k)}}))}function j(k){}function N(k){m.value&&k.stopPropagation()}function z(){if(m.value=!1,y.value){const k=y.value.innerText;v.value=k,a.updateElement(s.projectId,s.currentSlideId,n.element.id,{content:{...n.element.content,text:k}})}}return(k,C)=>(d(),u("div",{class:"text-element",ref_key:"textRef",ref:y,contenteditable:m.value,onDblclick:h,onBlur:z,onInput:j,onMousedown:N,style:me({fontSize:(i.value.fontSize||16)+"px",fontFamily:i.value.fontFamily||"Inter, sans-serif",fontWeight:i.value.fontWeight||"normal",fontStyle:i.value.fontStyle||"normal",textDecoration:i.value.textDecoration||"none",textAlign:i.value.textAlign||"left",color:i.value.color||"#1a1a2e",lineHeight:i.value.lineHeight||1.5,textTransform:i.value.textTransform||"none",letterSpacing:(i.value.letterSpacing||0)+"px",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"pre-wrap",wordBreak:"break-word",padding:"4px",outline:m.value?"2px solid var(--primary)":"none",cursor:m.value?"text":"inherit",userSelect:m.value?"text":"none"})},$(v.value),45,vp))}},mp=["src","alt"],fp={key:1,class:"image-placeholder"},gp={width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},bp={__name:"ImageElement",props:{element:{type:Object,required:!0}},setup(r){return(n,i)=>{var s,a,m,y;return d(),u("div",{class:"image-element",style:me({width:"100%",height:"100%",overflow:"hidden",borderRadius:(((s=r.element.content)==null?void 0:s.borderRadius)||0)+"px",border:`${((a=r.element.content)==null?void 0:a.borderWidth)||0}px solid ${((m=r.element.content)==null?void 0:m.borderColor)||"transparent"}`})},[(y=r.element.content)!=null&&y.src?(d(),u("img",{key:0,src:r.element.content.src,alt:r.element.content.alt||"",style:me({width:"100%",height:"100%",objectFit:r.element.content.objectFit||"cover",display:"block"}),draggable:"false"},null,12,mp)):(d(),u("div",fp,[(d(),u("svg",gp,[...i[0]||(i[0]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"},null,-1),e("polyline",{points:"21 15 16 10 5 21"},null,-1)])])),i[1]||(i[1]=e("span",null,"Image",-1))]))],4)}}},yp=Re(bp,[["__scopeId","data-v-401e9ff3"]]),hp={class:"shape-element",style:{width:"100%",height:"100%"}},xp=["width","height"],wp=["points","fill","stroke","stroke-width"],kp={__name:"ShapeElement",props:{element:{type:Object,required:!0}},setup(r){const n=r,i=M(()=>n.element.content||{}),s=M(()=>{const y=i.value.shapeType||"rectangle",v={width:"100%",height:"100%",background:i.value.fillColor||"#6c47ff",border:`${i.value.borderWidth||0}px solid ${i.value.borderColor||"transparent"}`,opacity:i.value.opacity??1};return y==="circle"?{...v,borderRadius:"50%"}:y==="rectangle"?{...v,borderRadius:(i.value.borderRadius||0)+"px"}:v}),a=M(()=>["triangle","star","arrow","diamond"].includes(i.value.shapeType)),m=M(()=>{const y=n.element.width||150,v=n.element.height||100,h=i.value.shapeType;if(h==="triangle")return`${y/2},0 ${y},${v} 0,${v}`;if(h==="diamond")return`${y/2},0 ${y},${v/2} ${y/2},${v} 0,${v/2}`;if(h==="arrow")return`0,${v*.3} ${y*.6},${v*.3} ${y*.6},0 ${y},${v/2} ${y*.6},${v} ${y*.6},${v*.7} 0,${v*.7}`;if(h==="star"){const j=y/2,N=v/2,z=Math.min(y,v)/2,k=z*.4;let C="";for(let x=0;x<10;x++){const l=(x*36-90)*Math.PI/180,g=x%2===0?z:k;C+=`${j+g*Math.cos(l)},${N+g*Math.sin(l)} `}return C.trim()}return""});return(y,v)=>(d(),u("div",hp,[a.value?(d(),u("svg",{key:1,width:r.element.width,height:r.element.height,style:{display:"block",overflow:"visible"}},[e("polygon",{points:m.value,fill:i.value.fillColor||"#6c47ff",stroke:i.value.borderColor||"none","stroke-width":i.value.borderWidth||0},null,8,wp)],8,xp)):(d(),u("div",{key:0,style:me(s.value)},null,4))]))}},Cp={__name:"ButtonElement",props:{element:{type:Object,required:!0}},setup(r){const n=r,i=M(()=>n.element.content||{}),s=M(()=>{const a={primary:{background:"#6c47ff",color:"#fff",border:"none"},secondary:{background:"#f0f0f0",color:"#333",border:"1px solid #ddd"},outline:{background:"transparent",color:"#6c47ff",border:"2px solid #6c47ff"},ghost:{background:"transparent",color:"#6c47ff",border:"none"},danger:{background:"#ef4444",color:"#fff",border:"none"}},m=a[i.value.variant||"primary"]||a.primary;return{...m,background:i.value.bgColor||m.background,color:i.value.textColor||m.color,border:i.value.borderColor?`1px solid ${i.value.borderColor}`:m.border,borderRadius:(i.value.borderRadius??8)+"px"}});return(a,m)=>(d(),u("div",{class:"button-element",style:me({width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontSize:(i.value.fontSize??15)+"px",fontWeight:i.value.fontWeight??600,letterSpacing:(i.value.letterSpacing||0)+"px",cursor:"pointer",fontFamily:i.value.fontFamily||"Inter, sans-serif",transition:"opacity .15s",...s.value})},$(i.value.label||"Button"),5))}},Sp={class:"hotspot-root",style:{width:"100%",height:"100%",position:"relative"}},$p={class:"popup-header"},Ip={class:"popup-body"},Ap={__name:"HotspotElement",props:{element:{type:Object,required:!0}},setup(r){const n=r,i=M(()=>n.element.content||{}),s=B(!1);function a(m){m.stopPropagation(),s.value=!s.value}return(m,y)=>(d(),u("div",Sp,[e("div",{class:"hotspot-btn",style:me({width:"100%",height:"100%",background:i.value.bgColor||"#6c47ff",borderRadius:(i.value.borderRadius??999)>=999?"50%":(i.value.borderRadius||0)+"px",display:"flex",alignItems:"center",justifyContent:"center",color:i.value.iconColor||"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",boxShadow:"0 2px 12px rgba(108,71,255,.4)"}),onClick:Me(a,["stop"])},$(i.value.icon||"?"),5),vt(kt,{name:"fade"},{default:nt(()=>[s.value?(d(),u("div",{key:0,class:"hotspot-popup",style:me({background:i.value.popupBgColor||"#ffffff",color:i.value.popupTextColor||"#1a1a2e"})},[e("div",$p,[e("strong",null,$(i.value.popupTitle||"Info"),1),e("button",{class:"popup-close",onClick:y[0]||(y[0]=Me(v=>s.value=!1,["stop"]))},"×")]),e("div",Ip,$(i.value.popupContent||"Add your content in the properties panel."),1)],4)):q("",!0)]),_:1})]))}},Ep=Re(Ap,[["__scopeId","data-v-ef5f15f6"]]),Mp={class:"video-element",style:{width:"100%",height:"100%",overflow:"hidden","border-radius":"4px",background:"#000"}},Pp=["src"],_p=["src","poster","autoplay","controls","loop","muted"],Tp={key:2,class:"video-placeholder"},Np={width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".3"}},zp={__name:"VideoElement",props:{element:{type:Object,required:!0}},setup(r){const n=r,i=M(()=>n.element.content||{}),s=M(()=>{const m=i.value.src||"";return m.includes("youtube")||m.includes("youtu.be")}),a=M(()=>{var y,v;const m=i.value.src||"";if(s.value){const h=(y=m.match(/(?:v=|youtu\.be\/)([^&?]+)/))==null?void 0:y[1];return h?`https://www.youtube.com/embed/${h}`:""}if(m.includes("vimeo.com")){const h=(v=m.match(/vimeo\.com\/(\d+)/))==null?void 0:v[1];return h?`https://player.vimeo.com/video/${h}`:""}return""});return(m,y)=>(d(),u("div",Mp,[a.value?(d(),u("iframe",{key:0,src:a.value,style:{width:"100%",height:"100%",border:"none"},allowfullscreen:""},null,8,Pp)):i.value.src&&!a.value?(d(),u("video",{key:1,src:i.value.src,poster:i.value.poster,autoplay:i.value.autoplay,controls:i.value.controls!==!1,loop:i.value.loop,muted:i.value.muted,style:me({width:"100%",height:"100%",objectFit:i.value.objectFit||"cover"})},null,12,_p)):(d(),u("div",Tp,[(d(),u("svg",Np,[...y[0]||(y[0]=[e("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1),e("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2"},null,-1)])])),y[1]||(y[1]=e("span",{style:{"font-size":"12px",color:"#888"}},"Add video URL in Properties",-1))]))]))}},Lp=Re(zp,[["__scopeId","data-v-dfea1a16"]]),Bp=["stroke"],jp=["src","controls","autoplay","loop"],Dp={key:1,style:{"font-size":"11px",color:"#aaa"}},Rp={__name:"AudioElement",props:{element:{type:Object,required:!0}},setup(r){return(n,i)=>{var s,a,m,y,v,h,j,N,z;return d(),u("div",{class:"audio-element",style:me({width:"100%",height:"100%",display:"flex",alignItems:"center",gap:"10px",background:((s=r.element.content)==null?void 0:s.bgColor)||"#ede7ff",border:`1px solid ${((a=r.element.content)==null?void 0:a.accentColor)||"#6c47ff"}`,borderRadius:"8px",padding:"0 12px"})},[(d(),u("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:((m=r.element.content)==null?void 0:m.accentColor)||"#6c47ff","stroke-width":"2"},[...i[1]||(i[1]=[e("path",{d:"M9 18V5l12-2v13"},null,-1),e("circle",{cx:"6",cy:"18",r:"3"},null,-1),e("circle",{cx:"18",cy:"16",r:"3"},null,-1)])],8,Bp)),e("span",{style:me({fontSize:"13px",color:((y=r.element.content)==null?void 0:y.textColor)||"#555",flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"})},$(((v=r.element.content)==null?void 0:v.label)||"Audio Player"),5),(h=r.element.content)!=null&&h.src?(d(),u("audio",{key:0,src:r.element.content.src,controls:((j=r.element.content)==null?void 0:j.controls)!==!1,autoplay:(N=r.element.content)==null?void 0:N.autoplay,loop:(z=r.element.content)==null?void 0:z.loop,style:{height:"28px","max-width":"180px"},onMousedown:i[0]||(i[0]=Me(()=>{},["stop"]))},null,40,jp)):(d(),u("span",Dp,"No source"))],4)}}},qp={class:"quiz-options"},Fp=["onClick"],Wp={class:"opt-letter"},Up={class:"opt-text"},Op={key:0},Vp={class:"quiz-actions"},Hp=["disabled"],Gp={__name:"QuizElement",props:{element:{type:Object,required:!0}},setup(r){const n=r,i=M(()=>n.element.content||{}),s=B(null),a=B(!1);function m(j){a.value||(s.value=j)}function y(){s.value!==null&&(a.value=!0)}function v(){s.value=null,a.value=!1}const h=M(()=>a.value&&s.value===(i.value.correctIndex??0));return(j,N)=>(d(),u("div",{class:"quiz-element",style:me({width:"100%",height:"100%",background:i.value.cardBgColor||"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"16px",display:"flex",flexDirection:"column",gap:"10px",overflow:"auto",fontFamily:"Inter, sans-serif","--quiz-accent":i.value.accentColor||"#6c47ff"})},[e("p",{style:me({fontSize:"15px",fontWeight:600,color:i.value.questionColor||"#1a1a2e",lineHeight:1.4})},$(i.value.question||"Question text…"),5),e("div",qp,[(d(!0),u(Z,null,ue(i.value.options||[],(z,k)=>(d(),u("div",{key:k,class:te(["quiz-opt",s.value===k&&"selected",a.value&&k===i.value.correctIndex&&"correct",a.value&&s.value===k&&k!==i.value.correctIndex&&"wrong"]),onClick:C=>m(k)},[e("span",Wp,$(String.fromCharCode(65+k)),1),e("span",Up,$(z),1)],10,Fp))),128))]),a.value?(d(),u("div",{key:0,class:te(["quiz-feedback",h.value?"correct":"wrong"])},[Q($(h.value?"✓ Correct!":"✗ Incorrect.")+" ",1),!h.value&&i.value.explanation?(d(),u("span",Op,$(i.value.explanation),1)):q("",!0)],2)):q("",!0),e("div",Vp,[a.value?(d(),u("button",{key:1,class:"quiz-btn secondary",onClick:v},"Try Again")):(d(),u("button",{key:0,class:"quiz-btn primary",disabled:s.value===null,onClick:y},"Submit",8,Hp))])],4))}},Qp=Re(Gp,[["__scopeId","data-v-ca2bd187"]]),Yp={key:0,class:"canvas-empty"},Kp={width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1",style:{opacity:".2"}},Jp={key:0,class:"canvas-device-frame","aria-hidden":"true"},Xp=["value"],Zp={class:"canvas-guide-label"},ev={key:4,class:"drop-hint"},tv={class:"canvas-info-bar"},ov=["disabled"],nv={class:"slide-index"},lv=["disabled"],iv={key:0},sv={__name:"EditorCanvas",setup(r){const n=Qe(),i=Ye(),s=B(null),a=B(null),m=B(1),y=M(()=>m.value*n.zoomLevel);dl("canvasScale",y);const v=M(()=>i.getProject(n.projectId)),h=M(()=>yt(v.value)),j=M(()=>zn(v.value)),N=M(()=>h.value.width),z=M(()=>h.value.height),k=M(()=>Ln(N.value,z.value)),C=M(()=>{var b,A;return(A=(b=v.value)==null?void 0:b.slides)==null?void 0:A.find(H=>H.id===n.currentSlideId)}),x=M(()=>{var b;return[...((b=v.value)==null?void 0:b.slides)||[]].sort((A,H)=>A.order-H.order)}),l=M(()=>x.value.findIndex(b=>b.id===n.currentSlideId)),g=M(()=>{var b;return{autoPlay:!1,motionPresets:[],...((b=v.value)==null?void 0:b.settings)||{}}}),w=M(()=>(Array.isArray(g.value.motionPresets)?g.value.motionPresets:[]).filter(b=>b.scope==="group")),D=M(()=>{const b=new Set(n.selectedElementIds);return ie.value.filter(A=>b.has(A.id))}),O=B(""),oe=M(()=>C.value?C.value.advanceOnMediaEnd?{label:"Media Advance",tone:"media"}:g.value.autoPlay&&Number(C.value.duration||0)>0?{label:`Auto ${Number(C.value.duration).toFixed(Number(C.value.duration)%1===0?0:1)}s`,tone:"auto"}:{label:"Manual",tone:"manual"}:{label:"Manual",tone:"manual"});function V(){const b=w.value.find(H=>H.id===O.value);if(!b||!D.value.length)return;[...D.value].sort((H,ee)=>(H.y||0)!==(ee.y||0)?(H.y||0)-(ee.y||0):(H.x||0)-(ee.x||0)).forEach((H,ee)=>{if(b.type==="auto"){i.updateElement(n.projectId,n.currentSlideId,H.id,{animations:[]});return}i.updateElement(n.projectId,n.currentSlideId,H.id,{animations:[{type:b.type,delay:Math.max(0,Number(b.delay)||0)+ee*Math.max(0,Number(b.stepDelay)||0),duration:Math.max(.1,Number(b.duration)||.72)}]})}),i.updateProject(n.projectId,{settings:{...g.value,motionPresets:(g.value.motionPresets||[]).map(H=>H.id===b.id?{...H,usageCount:Math.max(0,Number(H.usageCount||0))+1,lastUsedAt:Date.now()}:H)}})}function Y(){if(!w.value.length){O.value="";return}w.value.some(b=>b.id===O.value)||(O.value=w.value[0].id)}const ie=M(()=>{var b;return[...((b=C.value)==null?void 0:b.elements)||[]].sort((A,H)=>(A.zIndex||0)-(H.zIndex||0))}),L=M(()=>{const b=C.value;return b?b.backgroundType==="gradient"&&b.backgroundGradient?{background:b.backgroundGradient}:b.backgroundType==="image"&&b.backgroundImage?{backgroundImage:`url(${b.backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center"}:{background:b.background||"#fff"}:{background:"#fff"}}),R=M(()=>`scale(${y.value})`);function K(){if(!s.value)return;const{clientWidth:b,clientHeight:A}=s.value,H=(b-80)/N.value,ee=(A-80)/z.value;m.value=Math.min(H,ee,1)}let ne=null;Mt(()=>{K(),ne=new ResizeObserver(K),s.value&&ne.observe(s.value),Y()}),Tn(()=>ne==null?void 0:ne.disconnect()),He(w,()=>{Y()},{deep:!0,immediate:!0}),He(h,()=>{K()},{deep:!0});const J=B({x:0,y:0}),se=B({x:0,y:0}),de=B(!1),Ee=B(!1),he=M(()=>{var b,A;return((b=j.value)==null?void 0:b.id)==="mobile"?{tone:"mobile",label:"Mobile safe area",style:{inset:"5% 8%",borderRadius:"28px"}}:((A=j.value)==null?void 0:A.id)==="square"?{tone:"square",label:"Square composition guide",style:{inset:"8%",borderRadius:"24px"}}:null}),fe=M(()=>{if(!he.value)return null;if(he.value.tone==="mobile"){const H=N.value*.08,ee=z.value*.05;return{x:H,y:ee,width:N.value-H*2,height:z.value-ee*2}}const b=N.value*.08,A=z.value*.08;return{x:b,y:A,width:N.value-b*2,height:z.value-A*2}}),ge=M(()=>{if(!fe.value)return[];const b=fe.value;return ie.value.filter(A=>A.visible!==!1).filter(A=>{const H=Number(A.x||0),ee=Number(A.y||0),I=H+Number(A.width||0),Ae=ee+Number(A.height||0);return H<b.x||ee<b.y||I>b.x+b.width||Ae>b.y+b.height}).map(A=>A.id)}),W=M(()=>n.selectedElementIds.filter(b=>ge.value.includes(b)).length),ae=M(()=>ge.value.length),ve=M(()=>!he.value||!ae.value?null:W.value?`${W.value} selected ${W.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`:`${ae.value} ${ae.value===1?"element is":"elements are"} outside the ${he.value.label.toLowerCase()}.`),ce=M(()=>{if(!de.value)return null;const b=Math.min(J.value.x,se.value.x),A=Math.min(J.value.y,se.value.y),H=Math.abs(se.value.x-J.value.x),ee=Math.abs(se.value.y-J.value.y);return{x:b,y:A,width:H,height:ee}});function ye(b){!de.value&&(b.target===a.value||b.target===b.currentTarget)&&n.clearSelection()}function we(b){return b?Array.from(b.files||[]).some(A=>A.type.startsWith("image/")):!1}function $e(b,A,H){if(!b||!b.type.startsWith("image/"))return;const ee=new FileReader;ee.onload=()=>{const I=String(ee.result||"");if(!I)return;const Ae=new Image;Ae.onload=()=>{const Fe=a.value.getBoundingClientRect(),De=(A-Fe.left)/y.value,it=(H-Fe.top)/y.value,Ue=Math.min(420/Ae.width,280/Ae.height,1),Je=Math.max(120,Math.round(Ae.width*Ue)),Xe=Math.max(80,Math.round(Ae.height*Ue)),at=Math.max(0,Math.min(N.value-Je,Math.round(De-Je/2))),rt=Math.max(0,Math.min(z.value-Xe,Math.round(it-Xe/2))),dt=i.addElement(n.projectId,n.currentSlideId,"image",{x:at,y:rt,width:Je,height:Xe,content:{src:I,alt:b.name,objectFit:"cover"}});dt&&(n.selectElement(dt.id),n.setActiveTool("select"),n.setRightPanel("properties"))},Ae.src=I},ee.readAsDataURL(b)}function _e(b){we(b.dataTransfer)&&(b.preventDefault(),b.dataTransfer.dropEffect="copy",Ee.value=!0)}function Le(b){var A;(A=b.currentTarget)!=null&&A.contains(b.relatedTarget)||(Ee.value=!1)}function f(b){if(!we(b.dataTransfer))return;b.preventDefault(),Ee.value=!1;const A=Array.from(b.dataTransfer.files||[]).find(H=>H.type.startsWith("image/"));A&&$e(A,b.clientX,b.clientY)}function E(b){const A=n.activeTool;if(b.target!==a.value&&b.target!==b.currentTarget)return;b.preventDefault(),b.stopPropagation();const H=a.value.getBoundingClientRect(),ee=(b.clientX-H.left)/y.value,I=(b.clientY-H.top)/y.value;if(A==="select"){de.value=!0,J.value={x:ee,y:I},se.value={x:ee,y:I};const De=je=>{se.value={x:(je.clientX-H.left)/y.value,y:(je.clientY-H.top)/y.value}},it=()=>{window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",it);const je=ce.value;if(je&&(je.width>2||je.height>2)){const st=ie.value.filter(Ue=>{const Je=Ue.x,Xe=Ue.y,at=Ue.width||100,rt=Ue.height||100;return Je<je.x+je.width&&Je+at>je.x&&Xe<je.y+je.height&&Xe+rt>je.y}).map(Ue=>Ue.id);st.length>0?n.setSelection(st):n.clearSelection()}else n.clearSelection();setTimeout(()=>{de.value=!1},0)};window.addEventListener("mousemove",De),window.addEventListener("mouseup",it);return}const Ae=De=>n.snapToGrid?Math.round(De/n.gridSize)*n.gridSize:De,Fe=i.addElement(n.projectId,n.currentSlideId,A,{x:Ae(ee-75),y:Ae(I-40)});Fe&&(n.selectElement(Fe.id),n.setActiveTool("select"),n.setRightPanel("properties"))}const P=M(()=>{if(!n.showGrid)return{};const b=n.gridSize;return{backgroundImage:`
      linear-gradient(to right, rgba(108,71,255,.10) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(108,71,255,.10) 1px, transparent 1px)
    `,backgroundSize:`${b}px ${b}px`}}),Ie={text:At,heading:At,image:yp,shape:kp,button:Cp,hotspot:Ep,video:Lp,audio:Rp,quiz:Qp,chart:Sl,divider:"div"};function Ce(b){return Ie[b]||At}function Be(b){var A,H;return b.type!=="divider"?{}:{borderTop:`${((A=b.content)==null?void 0:A.thickness)||2}px solid ${((H=b.content)==null?void 0:H.color)||"#e2e8f0"}`,width:"100%",height:"100%"}}const xe=B({show:!1,x:0,y:0,elId:null});function Te(b,A){b.preventDefault(),xe.value={show:!0,x:b.clientX,y:b.clientY,elId:A},n.selectElement(A),setTimeout(()=>window.addEventListener("click",Ge,{once:!0}),0)}function Ge(){xe.value.show=!1}function Ze(){if(xe.value.elId){const b=i.duplicateElement(n.projectId,n.currentSlideId,xe.value.elId);b&&n.selectElement(b.id)}Ge()}function Ke(){xe.value.elId&&(i.deleteElement(n.projectId,n.currentSlideId,xe.value.elId),n.clearSelection()),Ge()}function mt(){xe.value.elId&&i.reorderElement(n.projectId,n.currentSlideId,xe.value.elId,"up"),Ge()}function _(){xe.value.elId&&i.reorderElement(n.projectId,n.currentSlideId,xe.value.elId,"down"),Ge()}function c(){const b=l.value,A=i.addSlide(n.projectId,b);A&&n.setCurrentSlide(A.id)}function F(){const b=l.value;b>0&&n.setCurrentSlide(x.value[b-1].id)}function pe(){const b=l.value;b<x.value.length-1&&n.setCurrentSlide(x.value[b+1].id)}return(b,A)=>{var H;return d(),u("div",{class:"canvas-container",ref_key:"canvasContainerRef",ref:s},[C.value?(d(),u(Z,{key:1},[e("div",{class:te(["canvas-zoom-wrapper",[he.value&&`canvas-zoom-wrapper-${he.value.tone}`]]),style:me({transform:R.value,transformOrigin:"center center",transition:"transform .15s ease"})},[e("div",{ref_key:"canvasRef",ref:a,class:"slide-canvas",style:me({width:N.value+"px",height:z.value+"px",...L.value,...P.value}),onClick:ye,onMousedown:E,onDragover:_e,onDragleave:Le,onDrop:f,onContextmenu:A[3]||(A[3]=Me(()=>{},["prevent"]))},[he.value?(d(),u("div",Jp)):q("",!0),S(n).multiSelection&&w.value.length?(d(),u("div",{key:1,class:"selection-preset-chip",onMousedown:A[1]||(A[1]=Me(()=>{},["stop"]))},[A[7]||(A[7]=e("span",{class:"selection-preset-label"},"Sequence",-1)),re(e("select",{"onUpdate:modelValue":A[0]||(A[0]=ee=>O.value=ee),class:"selection-preset-select"},[(d(!0),u(Z,null,ue(w.value,ee=>(d(),u("option",{key:ee.id,value:ee.id},$(ee.name),9,Xp))),128))],512),[[gt,O.value]]),e("button",{type:"button",class:"selection-preset-apply",onClick:Me(V,["stop"])},"Apply")],32)):q("",!0),ve.value?(d(),u("div",{key:2,class:"canvas-guide-warning",onMousedown:A[2]||(A[2]=Me(()=>{},["stop"]))},[A[8]||(A[8]=e("span",{class:"canvas-guide-warning-dot"},null,-1)),e("span",null,$(ve.value),1)],32)):q("",!0),(d(!0),u(Z,null,ue(ie.value,ee=>(d(),qe(pp,{key:ee.id,element:ee,onContextmenu:Me(I=>Te(I,ee.id),["stop"])},{default:nt(()=>[(d(),qe(rl(Ce(ee.type)),{element:ee,style:me(ee.type==="divider"?Be(ee):{})},null,8,["element","style"]))]),_:2},1032,["element","onContextmenu"]))),128)),he.value?(d(),u("div",{key:3,class:te(["canvas-guide",[`canvas-guide-${he.value.tone}`,ae.value&&"canvas-guide-warning-state"]]),style:me(he.value.style),"aria-hidden":"true"},[e("span",Zp,$(he.value.label)+" · "+$(k.value),1)],6)):q("",!0),S(n).activeTool!=="select"||Ee.value?(d(),u("div",ev,$(Ee.value?"Drop image to insert it on this slide":`Click anywhere to add ${S(n).activeTool}`),1)):q("",!0),de.value&&ce.value?(d(),u("div",{key:5,class:"selection-marquee",style:me({left:ce.value.x+"px",top:ce.value.y+"px",width:ce.value.width+"px",height:ce.value.height+"px"})},null,4)):q("",!0)],36)],6),e("div",tv,[e("button",{class:"bar-btn",onClick:c},"Add page"),e("button",{class:"bar-btn icon",onClick:F,disabled:l.value<=0},"◀",8,ov),e("span",nv,$(l.value+1)+" / "+$(x.value.length),1),e("button",{class:"bar-btn icon",onClick:pe,disabled:l.value>=x.value.length-1},"▶",8,lv),e("span",null,$(N.value)+" × "+$(z.value)+"px",1),A[9]||(A[9]=e("span",null,"·",-1)),e("span",null,$(((H=C.value.elements)==null?void 0:H.length)||0)+" elements",1),A[10]||(A[10]=e("span",null,"·",-1)),e("span",{class:te(["playback-badge",`playback-badge-${oe.value.tone}`])},$(oe.value.label),3),S(n).hasSelection?(d(),u("span",iv,"· "+$(S(n).selectedElementIds.length)+" selected",1)):q("",!0),e("button",{class:"bar-btn ai",onClick:A[4]||(A[4]=ee=>S(n).setRightPanel("ai"))},"AI")])],64)):(d(),u("div",Yp,[(d(),u("svg",Kp,[...A[5]||(A[5]=[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"},null,-1)])])),A[6]||(A[6]=e("p",null,"Select a slide to start editing",-1))])),(d(),qe(Nn,{to:"body"},[xe.value.show?(d(),u("div",{key:0,class:"ctx-menu",style:me({left:xe.value.x+"px",top:xe.value.y+"px"})},[e("button",{class:"ctx-item",onClick:Ze},"Duplicate"),e("button",{class:"ctx-item",onClick:mt},"Bring Forward"),e("button",{class:"ctx-item",onClick:_},"Send Backward"),A[11]||(A[11]=e("div",{class:"ctx-divider"},null,-1)),e("button",{class:"ctx-item danger",onClick:Ke},"Delete")],4)):q("",!0)]))],512)}}},av=Re(sv,[["__scopeId","data-v-c6947122"]]),rv={class:"ai-panel"},dv={class:"ai-mode-tabs"},uv=["onClick"],cv={class:"ai-content"},pv={class:"form-group"},vv={class:"output-mode-switch",role:"group","aria-label":"Slide generation scope"},mv={key:0,class:"form-group"},fv={key:1,class:"form-group"},gv={class:"form-group"},bv={class:"form-group"},yv={class:"prompt-label-row"},hv={key:1,class:"prompt-auto-badge"},xv={key:2,class:"output-mode-switch",role:"group","aria-label":"Generation output mode"},wv=["disabled"],kv={key:0,class:"spinner"},Cv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Sv={key:3,class:"creative-options-wrap"},$v={class:"result-header"},Iv={key:0,class:"ai-error",style:{"margin-top":"var(--space-2)"}},Av={key:1,class:"creative-options-list"},Ev={class:"creative-title"},Mv={class:"creative-angle"},Pv=["onClick"],_v={class:"form-group"},Tv={class:"quiz-config-row"},Nv={class:"form-group",style:{flex:"1"}},zv={class:"form-group",style:{flex:"1"}},Lv={class:"form-group"},Bv={class:"qtype-btns"},jv=["onClick"],Dv={class:"qtype-icon"},Rv={class:"form-group"},qv={class:"form-group"},Fv={class:"prompt-label-row"},Wv={key:1,class:"prompt-auto-badge"},Uv=["disabled"],Ov={key:0,class:"spinner"},Vv={key:1,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},Hv={key:0,class:"quiz-results"},Gv={class:"quiz-results-header"},Qv={class:"form-label"},Yv={class:"quiz-header-actions"},Kv={class:"regen-row"},Jv=["disabled"],Xv={key:0,class:"spinner spinner-sm"},Zv={key:1,width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},e1=["disabled"],t1={class:"quiz-card-header"},o1={class:"quiz-card-check"},n1=["onUpdate:modelValue"],l1={class:"q-num"},i1={class:"q-badges"},s1={class:"badge type-badge"},a1={class:"q-question"},r1={class:"q-options"},d1={class:"q-option-letter"},u1={key:0,class:"q-check-icon",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},c1={key:0,class:"q-explanation"},p1=["disabled"],v1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},m1=["disabled"],f1={key:0,class:"spinner"},g1={key:0,class:"selected-text-preview"},b1={class:"text-preview"},y1={key:1,class:"ai-hint"},h1={class:"form-group",style:{"margin-bottom":"var(--space-3)","margin-top":"var(--space-3)"}},x1=["disabled"],w1={key:0,class:"spinner"},k1={key:0,class:"selected-text-preview"},C1={class:"text-preview"},S1={key:1,class:"ai-hint"},$1={class:"form-group",style:{"margin-top":"var(--space-3)","margin-bottom":"var(--space-3)"}},I1=["disabled"],A1={key:0,class:"spinner"},E1={key:2,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},M1={class:"result-header"},P1={class:"result-actions"},_1=["disabled"],T1={class:"textarea result-display"},N1={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},z1=["disabled"],L1={key:0,class:"spinner"},B1={key:0,class:"improve-result-wrap",style:{"margin-top":"var(--space-4)"}},j1={class:"textarea result-display",style:{color:"var(--color-primary)"}},D1={key:6,class:"ai-settings"},R1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},q1=["value"],F1={class:"form-group",style:{"margin-bottom":"var(--space-4)"}},W1=["value"],U1={key:0,class:"demo-notice"},O1={key:7,class:"result-area"},V1={class:"result-header"},H1={class:"result-pre"},G1={class:"result-actions"},Q1=["disabled"],Y1={key:8,class:"ai-error"},K1={__name:"AIAssistant",setup(r){const n=pl(),i=Qe(),s=Ye(),a=B("generate"),m=B(""),y=B(""),v=B("");He(a,()=>{v.value=""});const h=B(4),j=B("general"),N=B("Spanish"),z=B(""),k=B(""),C=B(""),x=B(!1),l=B("single"),g=B(5),w=B("slide"),D=B([]),O=B(""),oe=M(()=>{const _=y.value.trim()||"[your topic]";if(l.value==="deck"){let pe=`Create a complete ${g.value}-slide learning deck about "${_}".`;return k.value.trim()&&(pe+=`
Additional context: ${k.value.trim()}`),pe+=`
Return ONLY valid JSON: { "slides": [{ "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "...", "slideType": "..." }] }`,pe+=`
Make each slide distinct, logically sequenced, and specific to "${_}".`,pe}let F=`Create a ${{general:"well-structured educational slide with title, key points, and a takeaway",intro:"introduction slide — purpose, motivation, and what learners will achieve",overview:"overview slide — high-level map of all topics to be covered",concept:"concept slide — definition, how it works, and why it matters",example:"example slide — real-world case study or worked example with outcome",summary:"summary slide — recap key points and reinforce the main message",callout:"callout slide — single critical insight or action item"}[j.value]||"educational slide"} about "${_}".`;return k.value.trim()&&(F+=`
Additional context: ${k.value.trim()}`),F+=`
Return ONLY valid JSON: { "title": "...", "subtitle": "...", "bullets": ["..."], "callout": "..." }
Make all content specific to "${_}" — no generic placeholders.`,F});He(oe,_=>{x.value||(C.value=_)},{immediate:!0});function V(){C.value=oe.value,x.value=!1}const Y=B(""),ie=B("intermediate"),L=B("multiple-choice"),R=B(""),K=B([]),ne=B(""),J=B(!1),se=M(()=>{const _=Y.value.trim()||"[your topic]",c={beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced"},F={"multiple-choice":"Multiple Choice","true-false":"True / False",mixed:"Mixed (MCQ + T/F)"};let pe=`Generate ${h.value} ${c[ie.value]} ${F[L.value]} quiz questions about "${_}".
Return ONLY a valid JSON array with no markdown, each item having: question, options (array), correctIndex (0-based), explanation, difficulty, type.`;return R.value.trim()&&(pe+=`
Learning objective: ${R.value.trim()}`),pe});He(se,_=>{J.value||(ne.value=_)},{immediate:!0});function de(){ne.value=se.value,J.value=!1}const Ee=M(()=>s.getProject(i.projectId)),he=M(()=>{var _,c;return(c=(_=Ee.value)==null?void 0:_.slides)==null?void 0:c.find(F=>F.id===i.currentSlideId)}),fe=M(()=>{var _,c;return i.selectedElementId?(c=(_=he.value)==null?void 0:_.elements)==null?void 0:c.find(F=>F.id===i.selectedElementId):null});async function ge(){if(!y.value.trim()&&!C.value.trim())return;if(v.value="",D.value=[],O.value="",l.value==="deck"){const c=await n.generateSlideDeck(y.value,g.value,{objective:k.value,customPrompt:C.value});if(c!=null&&c.length){const F=c.map(pe=>W(pe));v.value=JSON.stringify({slides:F},null,2),ye(F,{replaceGenerated:!0})}return}if(w.value==="options"){await _e();return}const _=await n.generateSlideContent(y.value,j.value,k.value,C.value);if(_){const c=W(_);v.value=JSON.stringify(c,null,2),we(c,{replaceGenerated:!0})}}function W(_){const c=_&&typeof _=="object"?_:{},pe=(Array.isArray(c.bullets)?c.bullets:typeof c.bullets=="string"?c.bullets.split(`
`):[]).map(b=>String(b||"").replace(/^\s*[-•]\s*/,"").trim()).filter(Boolean);return{title:String(c.title||y.value||"Untitled Slide").trim(),subtitle:String(c.subtitle||"").trim(),bullets:pe,callout:String(c.callout||"").trim()}}function ae(_,c){var b,A,H;const F=(A=(b=s.getProject(_))==null?void 0:b.slides)==null?void 0:A.find(ee=>ee.id===c);if(!((H=F==null?void 0:F.elements)!=null&&H.length))return;F.elements.filter(ee=>{var I;return((I=ee.meta)==null?void 0:I.source)==="ai-content"}).map(ee=>ee.id).forEach(ee=>{s.deleteElement(_,c,ee)})}function ve(_,c,F,pe){return s.addElement(_,c,F,{...pe,meta:{...pe.meta||{},source:"ai-content"}})}function ce(_,c,F,{replaceGenerated:pe=!1}={}){var b;if(!(!_||!c)){if(pe&&ae(_,c),F.title&&(s.updateSlide(_,c,{title:F.title}),ve(_,c,"heading",{x:60,y:40,width:840,height:80,content:{text:F.title,fontSize:36,fontWeight:"bold",textAlign:"center",color:"#1a1a2e",fontFamily:"Inter, sans-serif",lineHeight:1.2}})),F.subtitle&&ve(_,c,"text",{x:60,y:130,width:840,height:50,content:{text:F.subtitle,fontSize:20,fontWeight:"normal",textAlign:"center",color:"#4a4a6a",fontFamily:"Inter, sans-serif",lineHeight:1.4}}),(b=F.bullets)!=null&&b.length){const A=F.bullets.map(H=>`• ${H}`).join(`
`);ve(_,c,"text",{x:60,y:F.subtitle?200:150,width:840,height:200,content:{text:A,fontSize:18,fontWeight:"normal",textAlign:"left",color:"#2d2d4e",fontFamily:"Inter, sans-serif",lineHeight:1.8}})}F.callout&&(ve(_,c,"shape",{x:60,y:420,width:840,height:60,content:{shapeType:"rectangle",fillColor:"#ede9ff",borderColor:"#6c47ff",borderWidth:2,borderRadius:8}}),ve(_,c,"text",{x:80,y:432,width:800,height:40,content:{text:`💡 ${F.callout}`,fontSize:15,fontWeight:"600",textAlign:"center",color:"#6c47ff",fontFamily:"Inter, sans-serif",lineHeight:1.4}}))}}function ye(_,{replaceGenerated:c=!1}={}){if(!i.currentSlideId)return;const F=i.projectId;if(!F||!Array.isArray(_)||!_.length)return;_.map(b=>W(b)).forEach(b=>{const A=s.addSlide(F);A&&ce(F,A.id,b,{replaceGenerated:c})})}function we(_=null,{replaceGenerated:c=!1}={}){if(!i.currentSlideId)return;let F=_;if(!F){if(!v.value)return;try{F=JSON.parse(v.value)}catch(H){console.warn("Could not parse AI content:",H);return}}const pe=W(F),b=i.projectId,A=i.currentSlideId;!b||!A||ce(b,A,pe,{replaceGenerated:c})}function $e(){if(v.value){if(l.value==="deck"){try{const _=JSON.parse(v.value),c=Array.isArray(_)?_:_==null?void 0:_.slides;if(!Array.isArray(c)||!c.length)return;ye(c,{replaceGenerated:!0})}catch{return}return}we()}}async function _e(){const _=y.value.trim()||"[your topic]",c=`You are an expert instructional designer.
Create exactly 3 distinct creative slide directions for a "${j.value}" slide about "${_}".

Return ONLY valid JSON array:
[
  {
    "title": "Short option title",
    "angle": "What makes this approach unique in one sentence",
    "prompt": "A detailed prompt for generating that slide content as JSON with title/subtitle/bullets/callout"
  }
]

Each option must be meaningfully different in teaching style and structure.`,F=await n.generate(c,{type:"creativeOptions",topic:_,slideType:j.value});if(F)try{const pe=JSON.parse(F.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim());if(!Array.isArray(pe))throw new Error("Options must be an array");D.value=pe.slice(0,3).map((b,A)=>({title:String((b==null?void 0:b.title)||`Option ${A+1}`),angle:String((b==null?void 0:b.angle)||""),prompt:String((b==null?void 0:b.prompt)||"")})).filter(b=>b.prompt.trim()),D.value.length||(O.value="No usable creative options were returned. Try generating again.")}catch{O.value="Could not parse creative options. Try again or switch to “Show on Slide”."}}async function Le(_){_!=null&&_.prompt&&(C.value=_.prompt,x.value=!0,w.value="slide",await ge())}async function f(_=!1){if(!Y.value.trim()&&!ne.value.trim())return;_||(K.value=[]);const c=await n.generateQuiz(Y.value,h.value,{difficulty:ie.value,questionType:L.value,objective:R.value,customPrompt:ne.value});if(c)if(_){const F=new Set(K.value.map(b=>b.question)),pe=c.filter(b=>!F.has(b.question)).map(b=>({...b,_selected:!0}));K.value=[...K.value,...pe]}else K.value=c.map(F=>({...F,_selected:!0}))}async function E(){const _=K.value.filter(F=>F._selected);if(!_.length)return;const c=i.projectId;_.forEach((F,pe)=>{const b=s.addSlide(c);b&&(s.addElement(c,b.id,"quiz",{x:60,y:80,width:840,height:380,content:{question:F.question,options:F.options,correctIndex:F.correctIndex,explanation:F.explanation||""}}),s.updateSlide(c,b.id,{title:`Q${pe+1}: ${F.question.slice(0,40)}…`}))}),K.value=[]}function P(_){K.value.forEach(c=>c._selected=_)}async function Ie(){if(!z.value.trim())return;const _=await n.generateVoiceoverScript(z.value);_&&(v.value=_)}async function Ce(){var F,pe;const _=(pe=(F=fe.value)==null?void 0:F.content)==null?void 0:pe.text;if(!_)return;const c=await n.generateTranslation(_,N.value);c&&(v.value=c)}async function Be(){!v.value||!fe.value||s.updateElement(i.projectId,i.currentSlideId,fe.value.id,{content:{...fe.value.content,text:v.value}})}const xe=B(""),Te=B(!1);async function Ge(){if(xe.value.trim()){Te.value=!0,v.value="Optimizing prompt...";try{let _=xe.value;const c=await n.generateImagePrompt(xe.value);c&&(_=c.replace(/```(json)?\n?/g,"").trim()),v.value="Painting image... this takes about 10-20 seconds. Please wait.";const F=Math.floor(Math.random()*1e6),pe=`https://image.pollinations.ai/prompt/${encodeURIComponent(_)}?width=600&height=400&nologo=true&seed=${F}`;await new Promise((b,A)=>{const H=new Image;H.onload=b,H.onerror=A,H.src=pe}),s.addElement(i.projectId,i.currentSlideId,"image",{x:60,y:150,width:420,height:280,content:{src:pe,objectFit:"cover"}}),v.value="Image added to slide!"}catch{v.value="Failed to generate image. Try a different prompt."}finally{Te.value=!1}}}async function Ze(){var c,F;if(!((F=(c=fe.value)==null?void 0:c.content)!=null&&F.text))return;const _=await n.improveText(fe.value.content.text,m.value||"Make it clearer and more engaging");_&&(v.value=_)}async function Ke(){!v.value||!fe.value||s.updateElement(i.projectId,i.currentSlideId,fe.value.id,{content:{...fe.value.content,text:v.value}})}async function mt(){if(!m.value.trim())return;const _=await n.generate(m.value);_&&(v.value=_)}return(_,c)=>{var F,pe,b,A,H,ee;return d(),u("div",rv,[e("div",dv,[(d(),u(Z,null,ue([{id:"generate",label:"✦ Content"},{id:"quiz",label:"✅ Quiz"},{id:"voiceover",label:"🎙 Voiceover"},{id:"improve",label:"✏️ Improve"},{id:"translate",label:"🌐 Translate"},{id:"image",label:"🎨 Image"},{id:"settings",label:"⚙ API"}],I=>e("button",{key:I.id,class:te(["ai-mode-btn",a.value===I.id&&"active"]),onClick:Ae=>a.value=I.id},$(I.label),11,uv)),64))]),e("div",cv,[a.value==="generate"?(d(),u(Z,{key:0},[e("div",pv,[c[34]||(c[34]=e("label",{class:"form-label"},[Q("Topic / Subject "),e("span",{class:"required"},"*")],-1)),re(e("input",{"onUpdate:modelValue":c[0]||(c[0]=I=>y.value=I),class:"input",placeholder:"e.g. Automotive Braking System, Photosynthesis…",onKeydown:$n(ge,["enter"])},null,544),[[be,y.value]])]),e("div",vv,[e("button",{class:te(["output-mode-btn",l.value==="single"&&"active"]),onClick:c[1]||(c[1]=I=>l.value="single")},"Single Slide",2),e("button",{class:te(["output-mode-btn",l.value==="deck"&&"active"]),onClick:c[2]||(c[2]=I=>l.value="deck")},"Slide Deck",2)]),l.value==="single"?(d(),u("div",mv,[c[36]||(c[36]=e("label",{class:"form-label"},"Slide Type",-1)),re(e("select",{"onUpdate:modelValue":c[3]||(c[3]=I=>j.value=I),class:"select"},[...c[35]||(c[35]=[Ve('<option value="general" data-v-697ec3ea>General</option><option value="intro" data-v-697ec3ea>Introduction</option><option value="overview" data-v-697ec3ea>Overview</option><option value="concept" data-v-697ec3ea>Concept Explanation</option><option value="example" data-v-697ec3ea>Example / Case Study</option><option value="summary" data-v-697ec3ea>Summary</option><option value="callout" data-v-697ec3ea>Key Takeaway</option>',7)])],512),[[gt,j.value]])])):(d(),u("div",fv,[c[37]||(c[37]=e("label",{class:"form-label"},"Number of Slides",-1)),re(e("input",{"onUpdate:modelValue":c[4]||(c[4]=I=>g.value=I),class:"input",type:"number",min:"1",max:"20"},null,512),[[be,g.value,void 0,{number:!0}]]),c[38]||(c[38]=e("p",{class:"form-hint"},"Generates this many slides from one full prompt.",-1))])),e("div",gv,[c[39]||(c[39]=e("label",{class:"form-label"},[Q("Description "),e("span",{class:"optional"},"(optional)")],-1)),re(e("textarea",{"onUpdate:modelValue":c[5]||(c[5]=I=>k.value=I),class:"textarea",style:{"min-height":"64px",resize:"vertical"},placeholder:"Add context, audience level, specific subtopics, tone, or any extra detail…"},null,512),[[be,k.value]])]),e("div",bv,[e("div",yv,[c[41]||(c[41]=e("label",{class:"form-label"},"AI Prompt",-1)),x.value?(d(),u("button",{key:0,class:"prompt-reset-btn",onClick:V,title:"Reset to auto-generated prompt"},[...c[40]||(c[40]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Q(" Reset ",-1)])])):(d(),u("span",hv,"auto"))]),re(e("textarea",{"onUpdate:modelValue":c[6]||(c[6]=I=>C.value=I),class:"textarea prompt-textarea",placeholder:"Describe exactly what you want the AI to create…",onInput:c[7]||(c[7]=I=>x.value=!0),spellcheck:"false"},null,544),[[be,C.value]]),c[42]||(c[42]=e("p",{class:"form-hint"},"Edit freely — the AI will follow your exact instructions.",-1))]),l.value==="single"?(d(),u("div",xv,[e("button",{class:te(["output-mode-btn",w.value==="slide"&&"active"]),onClick:c[8]||(c[8]=I=>w.value="slide")},"Show on Slide",2),e("button",{class:te(["output-mode-btn",w.value==="options"&&"active"]),onClick:c[9]||(c[9]=I=>w.value="options")},"Creative Options",2)])):q("",!0),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:S(n).isGenerating||!y.value.trim()&&!C.value.trim()||l.value==="deck"&&(!g.value||g.value<1||g.value>20),onClick:ge},[S(n).isGenerating?(d(),u("span",kv)):(d(),u("svg",Cv,[...c[43]||(c[43]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Q(" "+$(S(n).isGenerating?"Generating…":l.value==="deck"?v.value?`Regenerate ${g.value} Slides`:`Generate ${g.value} Slides`:w.value==="slide"?v.value?"Regenerate & Apply":"Generate & Apply":"Generate Creative Options"),1)],8,wv),l.value==="single"&&w.value==="options"&&(D.value.length||O.value)?(d(),u("div",Sv,[e("div",$v,[c[44]||(c[44]=e("span",{class:"form-label"},"Creative Options",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:c[10]||(c[10]=I=>{D.value=[],O.value=""})},"Clear")]),O.value?(d(),u("div",Iv,[c[45]||(c[45]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Q(" "+$(O.value),1)])):(d(),u("div",Av,[(d(!0),u(Z,null,ue(D.value,(I,Ae)=>(d(),u("article",{key:Ae,class:"creative-option-card"},[e("h4",Ev,$(I.title),1),e("p",Mv,$(I.angle),1),e("button",{class:"btn btn-secondary btn-sm",onClick:Fe=>Le(I)},"Use This Option",8,Pv)]))),128))]))])):q("",!0)],64)):a.value==="quiz"?(d(),u(Z,{key:1},[e("div",_v,[c[46]||(c[46]=e("label",{class:"form-label"},[Q("Quiz Topic "),e("span",{class:"required"},"*")],-1)),re(e("input",{"onUpdate:modelValue":c[11]||(c[11]=I=>Y.value=I),class:"input",placeholder:"e.g. World War II Timeline, Photosynthesis, SQL Joins…",onKeydown:$n(f,["enter"])},null,544),[[be,Y.value]])]),e("div",Tv,[e("div",Nv,[c[48]||(c[48]=e("label",{class:"form-label"},"Questions",-1)),re(e("select",{"onUpdate:modelValue":c[12]||(c[12]=I=>h.value=I),class:"select"},[...c[47]||(c[47]=[e("option",{value:2},"2",-1),e("option",{value:3},"3",-1),e("option",{value:4},"4",-1),e("option",{value:5},"5",-1),e("option",{value:6},"6",-1),e("option",{value:8},"8",-1),e("option",{value:10},"10",-1)])],512),[[gt,h.value,void 0,{number:!0}]])]),e("div",zv,[c[50]||(c[50]=e("label",{class:"form-label"},"Difficulty",-1)),re(e("select",{"onUpdate:modelValue":c[13]||(c[13]=I=>ie.value=I),class:"select"},[...c[49]||(c[49]=[e("option",{value:"beginner"},"Beginner",-1),e("option",{value:"intermediate"},"Intermediate",-1),e("option",{value:"advanced"},"Advanced",-1)])],512),[[gt,ie.value]])])]),e("div",Lv,[c[51]||(c[51]=e("label",{class:"form-label"},"Question Type",-1)),e("div",Bv,[(d(),u(Z,null,ue([{id:"multiple-choice",label:"Multiple Choice",icon:"☑"},{id:"true-false",label:"True / False",icon:"✓✗"},{id:"mixed",label:"Mixed",icon:"⊕"}],I=>e("button",{key:I.id,class:te(["qtype-btn",L.value===I.id&&"active"]),onClick:Ae=>L.value=I.id},[e("span",Dv,$(I.icon),1),e("span",null,$(I.label),1)],10,jv)),64))])]),e("div",Rv,[c[52]||(c[52]=e("label",{class:"form-label"},[Q("Learning Objective "),e("span",{class:"optional"},"(optional)")],-1)),re(e("input",{"onUpdate:modelValue":c[14]||(c[14]=I=>R.value=I),class:"input",placeholder:"e.g. Identify key causes of WWI"},null,512),[[be,R.value]])]),e("div",qv,[e("div",Fv,[c[54]||(c[54]=e("label",{class:"form-label"},"AI Prompt",-1)),J.value?(d(),u("button",{key:0,class:"prompt-reset-btn",onClick:de,title:"Reset to auto-generated prompt"},[...c[53]||(c[53]=[e("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Q(" Reset ",-1)])])):(d(),u("span",Wv,"auto"))]),re(e("textarea",{"onUpdate:modelValue":c[15]||(c[15]=I=>ne.value=I),class:"textarea prompt-textarea",placeholder:"Describe what quiz questions you want the AI to create…",onInput:c[16]||(c[16]=I=>J.value=!0),spellcheck:"false"},null,544),[[be,ne.value]]),c[55]||(c[55]=e("p",{class:"form-hint"},"Edit this prompt freely. The AI will follow your exact instructions.",-1))]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:S(n).isGenerating||!Y.value.trim()&&!ne.value.trim(),onClick:c[17]||(c[17]=I=>f(!1))},[S(n).isGenerating?(d(),u("span",Ov)):(d(),u("svg",Vv,[...c[56]||(c[56]=[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},null,-1)])])),Q(" "+$(S(n).isGenerating?"Generating…":`Generate ${h.value} Questions`),1)],8,Uv),K.value.length?(d(),u("div",Hv,[e("div",Gv,[e("span",Qv,$(K.value.length)+" Questions",1),e("div",Yv,[e("button",{class:"btn btn-ghost btn-sm",onClick:c[18]||(c[18]=I=>P(!0))},"All"),e("button",{class:"btn btn-ghost btn-sm",onClick:c[19]||(c[19]=I=>P(!1))},"None"),e("button",{class:"btn btn-ghost btn-sm danger",onClick:c[20]||(c[20]=I=>K.value=[])},"Clear")])]),e("div",Kv,[e("button",{class:"btn btn-secondary regen-btn",disabled:S(n).isGenerating,onClick:c[21]||(c[21]=I=>f(!1)),title:"Replace all questions with a new set"},[S(n).isGenerating?(d(),u("span",Xv)):(d(),u("svg",Zv,[...c[57]||(c[57]=[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},null,-1),e("path",{d:"M3 3v5h5"},null,-1)])])),c[58]||(c[58]=Q(" Regenerate ",-1))],8,Jv),e("button",{class:"btn btn-ghost regen-btn",disabled:S(n).isGenerating,onClick:c[22]||(c[22]=I=>f(!0)),title:"Generate more and append to current list"},[...c[59]||(c[59]=[e("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Q(" Add More ",-1)])],8,e1)]),(d(!0),u(Z,null,ue(K.value,(I,Ae)=>(d(),u("div",{key:Ae,class:te(["quiz-card",{deselected:!I._selected}])},[e("div",t1,[e("label",o1,[re(e("input",{type:"checkbox","onUpdate:modelValue":Fe=>I._selected=Fe},null,8,n1),[[$t,I._selected]]),e("span",l1,"Q"+$(Ae+1),1)]),e("div",i1,[e("span",{class:te(["badge difficulty-badge",I.difficulty])},$(I.difficulty),3),e("span",s1,$(I.type==="true-false"?"T/F":"MCQ"),1)])]),e("p",a1,$(I.question),1),e("div",r1,[(d(!0),u(Z,null,ue(I.options,(Fe,De)=>(d(),u("div",{key:De,class:te(["q-option",De===I.correctIndex&&"correct"])},[e("span",d1,$(["A","B","C","D"][De]),1),e("span",null,$(Fe),1),De===I.correctIndex?(d(),u("svg",u1,[...c[60]||(c[60]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):q("",!0)],2))),128))]),I.explanation?(d(),u("div",c1,[c[61]||(c[61]=e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),Q(" "+$(I.explanation),1)])):q("",!0)],2))),128)),e("button",{class:"btn btn-primary w-full",disabled:!K.value.filter(I=>I._selected).length,onClick:E},[c[62]||(c[62]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 5v14M5 12l7 7 7-7"})],-1)),Q(" Add "+$(K.value.filter(I=>I._selected).length)+" Selected as Quiz Slides ",1)],8,p1)])):q("",!0)],64)):a.value==="voiceover"?(d(),u(Z,{key:2},[e("div",v1,[c[63]||(c[63]=e("label",{class:"form-label"},"Slide Content / Key Points",-1)),re(e("textarea",{"onUpdate:modelValue":c[23]||(c[23]=I=>z.value=I),class:"textarea",style:{"min-height":"100px"},placeholder:"Paste the slide content or talking points here…"},null,512),[[be,z.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:S(n).isGenerating,onClick:Ie},[S(n).isGenerating?(d(),u("span",f1)):q("",!0),Q(" "+$(S(n).isGenerating?"Generating…":"Generate Script"),1)],8,m1)],64)):a.value==="improve"?(d(),u(Z,{key:3},[(pe=(F=fe.value)==null?void 0:F.content)!=null&&pe.text?(d(),u("div",g1,[c[64]||(c[64]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",b1,$(fe.value.content.text.slice(0,120))+$(fe.value.content.text.length>120?"…":""),1)])):(d(),u("p",y1,"Select a text element on the canvas to improve it.")),e("div",h1,[c[65]||(c[65]=e("label",{class:"form-label"},"Instruction",-1)),re(e("input",{"onUpdate:modelValue":c[24]||(c[24]=I=>m.value=I),class:"input",placeholder:"Make it more concise and engaging"},null,512),[[be,m.value]])]),c[66]||(c[66]=e("div",{class:"tab-section-title",style:{"margin-bottom":"var(--space-3)"}},"Or send a custom prompt:",-1)),re(e("textarea",{"onUpdate:modelValue":c[25]||(c[25]=I=>m.value=I),class:"textarea",style:{"min-height":"70px"},placeholder:"Write anything…"},null,512),[[be,m.value]]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:S(n).isGenerating||!fe.value&&!m.value,onClick:c[26]||(c[26]=I=>fe.value?Ze():mt())},[S(n).isGenerating?(d(),u("span",w1)):q("",!0),Q(" "+$(S(n).isGenerating?"Processing…":"Generate"),1)],8,x1)],64)):a.value==="translate"?(d(),u(Z,{key:4},[(A=(b=fe.value)==null?void 0:b.content)!=null&&A.text?(d(),u("div",k1,[c[67]||(c[67]=e("div",{class:"form-label",style:{"margin-bottom":"var(--space-1)"}},"Selected Text",-1)),e("div",C1,$(fe.value.content.text.slice(0,120))+$(fe.value.content.text.length>120?"…":""),1)])):(d(),u("p",S1,"Select a text element on the canvas to translate it.")),e("div",$1,[c[69]||(c[69]=e("label",{class:"form-label"},"Target Language",-1)),re(e("select",{"onUpdate:modelValue":c[27]||(c[27]=I=>N.value=I),class:"select"},[...c[68]||(c[68]=[Ve('<option value="Spanish" data-v-697ec3ea>Spanish</option><option value="French" data-v-697ec3ea>French</option><option value="German" data-v-697ec3ea>German</option><option value="Italian" data-v-697ec3ea>Italian</option><option value="Portuguese" data-v-697ec3ea>Portuguese</option><option value="Chinese (Simplified)" data-v-697ec3ea>Chinese (Simplified)</option><option value="Japanese" data-v-697ec3ea>Japanese</option><option value="Arabic" data-v-697ec3ea>Arabic</option>',8)])],512),[[gt,N.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:S(n).isGenerating||!((ee=(H=fe.value)==null?void 0:H.content)!=null&&ee.text),onClick:Ce},[S(n).isGenerating?(d(),u("span",A1)):q("",!0),Q(" "+$(S(n).isGenerating?"Translating…":"Translate Text"),1)],8,I1),v.value?(d(),u("div",E1,[e("div",M1,[c[70]||(c[70]=e("span",{class:"form-label"},"Translation Result",-1)),e("div",P1,[e("button",{class:"btn btn-ghost btn-sm",onClick:c[28]||(c[28]=I=>_.navigator.clipboard.writeText(v.value))},"Copy"),e("button",{class:"btn btn-primary btn-sm",onClick:Be,disabled:!fe.value},"Apply",8,_1)])]),e("div",T1,$(v.value),1)])):q("",!0)],64)):a.value==="image"?(d(),u(Z,{key:5},[c[73]||(c[73]=e("p",{class:"ai-hint",style:{"margin-bottom":"var(--space-3)"}},"Generate distinct educational visual assets instantly. The image will be added directly to your slide.",-1)),e("div",N1,[c[71]||(c[71]=e("label",{class:"form-label"},"Image Description",-1)),re(e("textarea",{"onUpdate:modelValue":c[29]||(c[29]=I=>xe.value=I),class:"textarea",style:{"min-height":"100px"},placeholder:"Describe the image (e.g. 'A futuristic city skyline at sunset in a vibrant retro style')"},null,512),[[be,xe.value]])]),e("button",{class:"btn btn-primary w-full ai-generate-btn",disabled:Te.value||S(n).isGenerating||!xe.value,onClick:Ge},[Te.value||S(n).isGenerating?(d(),u("span",L1)):q("",!0),Q(" "+$(Te.value||S(n).isGenerating?"Generating Image…":"Generate & Insert"),1)],8,z1),v.value?(d(),u("div",B1,[c[72]||(c[72]=e("div",{class:"result-header"},[e("span",{class:"form-label"},"Status")],-1)),e("div",j1,$(v.value),1)])):q("",!0)],64)):a.value==="settings"?(d(),u("div",D1,[e("div",R1,[c[75]||(c[75]=e("label",{class:"form-label"},"AI Provider",-1)),e("select",{value:S(n).apiProvider,class:"select",onChange:c[30]||(c[30]=I=>S(n).setProvider(I.target.value))},[...c[74]||(c[74]=[e("option",{value:"openai"},"OpenAI (GPT-4o mini)",-1),e("option",{value:"anthropic"},"Anthropic (Claude)",-1)])],40,q1)]),e("div",F1,[c[76]||(c[76]=e("label",{class:"form-label"},"API Key",-1)),e("input",{type:"password",value:S(n).apiKey,class:"input",placeholder:"sk-…",onChange:c[31]||(c[31]=I=>S(n).setApiKey(I.target.value))},null,40,W1),c[77]||(c[77]=e("p",{class:"form-hint"},"Key is stored locally in your browser. It is never sent to our servers.",-1))]),S(n).apiKey?q("",!0):(d(),u("div",U1,[...c[78]||(c[78]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1),Q(" Running in ",-1),e("strong",null,"demo mode",-1),Q(" — sample responses only. Add your API key to use real AI generation. ",-1)])]))])):q("",!0),v.value&&a.value!=="settings"&&a.value!=="quiz"?(d(),u("div",O1,[e("div",V1,[c[79]||(c[79]=e("span",{class:"form-label"},"Result",-1)),e("button",{class:"btn btn-ghost btn-sm",onClick:c[32]||(c[32]=I=>v.value="")},"Clear")]),e("pre",H1,$(v.value),1),e("div",G1,[a.value==="generate"?(d(),u("button",{key:0,class:"btn btn-primary btn-sm",onClick:$e},$(l.value==="deck"?"Apply as Deck":"Apply to Slide"),1)):q("",!0),a.value==="generate"?(d(),u("button",{key:1,class:"btn btn-ghost btn-sm",disabled:S(n).isGenerating,onClick:ge},[...c[80]||(c[80]=[e("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e("path",{d:"M3 3v5h5"})],-1),Q(" Regenerate ",-1)])],8,Q1)):q("",!0),a.value==="improve"&&fe.value?(d(),u("button",{key:2,class:"btn btn-primary btn-sm",onClick:Ke}," Apply to Element ")):q("",!0),e("button",{class:"btn btn-secondary btn-sm",onClick:c[33]||(c[33]=I=>{var Ae;return(Ae=_.navigator.clipboard)==null?void 0:Ae.writeText(v.value)})}," Copy ")])])):q("",!0),S(n).lastError?(d(),u("div",Y1,[c[81]||(c[81]=e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})],-1)),Q(" "+$(S(n).lastError),1)])):q("",!0)])])}}},J1=Re(K1,[["__scopeId","data-v-697ec3ea"]]),X1={class:"theme-manager"},Z1={class:"panel-section"},em={class:"presets-grid"},tm=["title","onClick"],om={class:"preset-preview"},nm={class:"preset-name"},lm={class:"panel-section"},im={class:"theme-fields"},sm={class:"form-label"},am={class:"color-row"},rm=["value","onInput"],dm=["value","onChange"],um={class:"panel-section"},cm={class:"theme-field"},pm=["value","placeholder"],vm={class:"chart-palette-preview"},mm={class:"panel-section"},fm={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},gm=["value"],bm=["value"],ym={class:"form-group",style:{"margin-bottom":"var(--space-3)"}},hm=["value"],xm=["value"],wm={class:"form-group"},km=["value"],Cm={class:"panel-section"},Sm={class:"tp-chart-row"},$m={key:0,class:"apply-message success"},Im={key:1,class:"apply-message error"},Am={__name:"ThemeManager",setup(r){const n=Qe(),i=Ye(),s=M(()=>i.getProject(n.projectId)),a=M(()=>{var l;return((l=s.value)==null?void 0:l.theme)||{}}),m=M(()=>In(a.value)),y=B(""),v=B("");function h(l){i.updateProject(n.projectId,{theme:{...a.value,...l}})}const j=[{name:"Corporate Blue",primaryColor:"#1e40af",secondaryColor:"#0ea5e9",bgColor:"#f8fafc",textColor:"#0f172a",fontFamily:"Inter, sans-serif"},{name:"Vibrant Purple",primaryColor:"#6c47ff",secondaryColor:"#00c9a7",bgColor:"#ffffff",textColor:"#1a1a2e",fontFamily:"Inter, sans-serif"},{name:"Nature Green",primaryColor:"#16a34a",secondaryColor:"#84cc16",bgColor:"#f0fdf4",textColor:"#14532d",fontFamily:"Georgia, serif"},{name:"Dark Modern",primaryColor:"#818cf8",secondaryColor:"#f472b6",bgColor:"#0f172a",textColor:"#e2e8f0",fontFamily:"Inter, sans-serif"},{name:"Warm Sunset",primaryColor:"#dc2626",secondaryColor:"#f59e0b",bgColor:"#fffbeb",textColor:"#451a03",fontFamily:"Verdana, sans-serif"},{name:"Ocean Breeze",primaryColor:"#0891b2",secondaryColor:"#6366f1",bgColor:"#ecfeff",textColor:"#164e63",fontFamily:"Trebuchet MS, sans-serif"}],N=[{label:"Inter",value:"Inter, sans-serif"},{label:"Arial",value:"Arial, sans-serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Verdana",value:"Verdana, sans-serif"},{label:"Times New Roman",value:'"Times New Roman", serif'},{label:"Courier New",value:'"Courier New", monospace'},{label:"Trebuchet MS",value:'"Trebuchet MS", sans-serif'},{label:"Tahoma",value:"Tahoma, sans-serif"}];function z(l){h(l)}function k(l,g){const w=l.content||{};return l.type==="text"?{content:{...w,fontFamily:g.fontFamily||w.fontFamily,color:g.textColor||w.color}}:l.type==="heading"?{content:{...w,fontFamily:g.headingFont||g.fontFamily||w.fontFamily,color:g.textColor||w.color}}:l.type==="shape"?{content:{...w,fillColor:g.secondaryColor||w.fillColor}}:l.type==="hotspot"?{content:{...w,bgColor:g.primaryColor||w.bgColor}}:l.type==="button"?{content:{...w,bgColor:g.primaryColor||w.bgColor,textColor:"#ffffff",borderColor:"transparent",fontFamily:g.fontFamily||w.fontFamily}}:l.type==="quiz"?{content:{...w,cardBgColor:g.bgColor||w.cardBgColor,questionColor:g.textColor||w.questionColor,accentColor:g.primaryColor||w.accentColor}}:l.type==="chart"?{content:{...w,...Bn(g)}}:null}function C(){h({chartPalette:""})}function x(){y.value="",v.value="";const l=n.projectId,g=s.value,w=a.value;if(!l||!g){v.value="No active project to apply theme.";return}const D=g.slides||[];let O=0;D.forEach(oe=>{(oe.backgroundType||"color")==="color"&&i.updateSlide(l,oe.id,{backgroundType:"color",background:w.bgColor||oe.background||"#ffffff"}),(oe.elements||[]).forEach(V=>{const Y=k(V,w);Y&&(i.updateElement(l,oe.id,V.id,Y),O+=1)})}),y.value=`Applied theme to ${D.length} slide${D.length===1?"":"s"} and ${O} element${O===1?"":"s"}.`}return(l,g)=>(d(),u("div",X1,[e("div",Z1,[g[4]||(g[4]=e("div",{class:"panel-title"},"Preset Themes",-1)),e("div",em,[(d(),u(Z,null,ue(j,w=>e("div",{key:w.name,class:"preset-card",title:w.name,onClick:D=>z(w)},[e("div",om,[e("div",{class:"pp-header",style:me({background:w.primaryColor})},null,4),e("div",{class:"pp-body",style:me({background:w.bgColor})},[e("div",{class:"pp-line",style:me({background:w.textColor,opacity:.7})},null,4),e("div",{class:"pp-line",style:me({background:w.textColor,opacity:.4,width:"60%"})},null,4)],4),e("div",{class:"pp-accent",style:me({background:w.secondaryColor})},null,4)]),e("span",nm,$(w.name),1)],8,tm)),64))])]),e("div",lm,[g[5]||(g[5]=e("div",{class:"panel-title"},"Colors",-1)),e("div",im,[(d(),u(Z,null,ue({primaryColor:"Primary Color",secondaryColor:"Secondary Color",bgColor:"Background",textColor:"Text Color"},(w,D)=>e("div",{class:"theme-field",key:D},[e("label",sm,$(w),1),e("div",am,[e("input",{type:"color",value:a.value[D]||"#ffffff",class:"color-input-native",onInput:O=>h({[D]:O.target.value})},null,40,rm),e("input",{value:a.value[D]||"",class:"input",onChange:O=>h({[D]:O.target.value}),style:{"font-family":"var(--font-mono)","font-size":"var(--text-xs)"}},null,40,dm)])])),64))])]),e("div",um,[g[8]||(g[8]=e("div",{class:"panel-title"},"Chart Palette",-1)),e("div",cm,[g[6]||(g[6]=e("label",{class:"form-label"},"Chart Colors",-1)),e("input",{value:a.value.chartPalette||"",class:"input",placeholder:S(Cl)(S(In)(a.value)),onChange:g[0]||(g[0]=w=>h({chartPalette:w.target.value}))},null,40,pm),e("div",vm,[(d(!0),u(Z,null,ue(m.value,(w,D)=>(d(),u("span",{key:`theme-chart-${D}`,class:"chart-palette-dot",style:me({background:w})},null,4))),128))]),e("div",{class:"chart-palette-actions"},[e("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:C},"Use auto palette")]),g[7]||(g[7]=e("div",{class:"field-hint"},"Leave blank to derive chart colors from the theme primary, secondary, background, and text colors.",-1))])]),e("div",mm,[g[12]||(g[12]=e("div",{class:"panel-title"},"Typography",-1)),e("div",fm,[g[9]||(g[9]=e("label",{class:"form-label"},"Heading Font",-1)),e("select",{value:a.value.headingFont||"Inter, sans-serif",class:"select",onChange:g[1]||(g[1]=w=>h({headingFont:w.target.value}))},[(d(),u(Z,null,ue(N,w=>e("option",{key:w.value,value:w.value},$(w.label),9,bm)),64))],40,gm)]),e("div",ym,[g[10]||(g[10]=e("label",{class:"form-label"},"Body Font",-1)),e("select",{value:a.value.fontFamily||"Inter, sans-serif",class:"select",onChange:g[2]||(g[2]=w=>h({fontFamily:w.target.value}))},[(d(),u(Z,null,ue(N,w=>e("option",{key:w.value,value:w.value},$(w.label),9,xm)),64))],40,hm)]),e("div",wm,[g[11]||(g[11]=e("label",{class:"form-label"},"Base Font Size",-1)),e("input",{type:"number",min:"12",max:"24",value:a.value.fontSize||16,class:"input",onChange:g[3]||(g[3]=w=>h({fontSize:+w.target.value}))},null,40,km)])]),e("div",Cm,[g[13]||(g[13]=e("div",{class:"panel-title"},"Preview",-1)),e("div",{class:"theme-preview",style:me({background:a.value.bgColor||"#fff",fontFamily:a.value.fontFamily||"Inter, sans-serif"})},[e("div",{class:"tp-heading",style:me({color:a.value.textColor,fontFamily:a.value.headingFont||a.value.fontFamily})}," Heading Text ",4),e("div",{class:"tp-body",style:me({color:a.value.textColor,opacity:.7})}," Body text looks like this. Clear, readable, and well-spaced for learners. ",4),e("div",{class:"tp-btn",style:me({background:a.value.primaryColor})},"Button",4),e("div",{class:"tp-badge",style:me({background:a.value.secondaryColor})},"Badge",4),e("div",Sm,[(d(!0),u(Z,null,ue(m.value.slice(0,5),(w,D)=>(d(),u("span",{key:`preview-chart-${D}`,class:"tp-chart-bar",style:me({background:w,height:`${22+D*8}px`})},null,4))),128))])],4),e("button",{class:"btn btn-primary w-full apply-theme-btn",onClick:x}," Apply Theme to Slides "),y.value?(d(),u("p",$m,$(y.value),1)):q("",!0),v.value?(d(),u("p",Im,$(v.value),1)):q("",!0)])]))}},Em=Re(Am,[["__scopeId","data-v-da2b0ce4"]]),Mm={key:0,class:"auth-gate",style:{"text-align":"center",padding:"40px 20px"}},Pm={width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:"0.5","margin-bottom":"16px","margin-inline":"auto"}},_m={style:{display:"flex","flex-direction":"column",gap:"12px","max-width":"300px",margin:"0 auto"}},Tm={class:"export-tabs tabs"},Nm={class:"export-content"},zm={class:"export-options",style:{"margin-bottom":"20px"}},Lm={class:"form-group"},Bm={class:"export-meta"},jm={class:"meta-item"},Dm={class:"meta-item"},Rm={class:"meta-item"},qm={class:"export-options",style:{"margin-bottom":"20px"}},Fm={class:"form-group"},Wm={style:{display:"flex","align-items":"center",gap:"8px","margin-top":"12px","font-size":"13px",cursor:"pointer"}},Um={class:"coming-soon"},Om={width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",style:{opacity:".4"}},Vm={key:0,class:"export-success",style:{background:"#e0f2fe",color:"#166534","border-color":"#bbf7d0"}},Hm={key:1,class:"export-success"},Gm={__name:"ExportModal",setup(r){const n=Qe(),i=Ye(),s=jn(),a=M(()=>i.getProject(n.projectId)),m=B("json"),y=B(""),v=B(""),h=B(!0);He(a,x=>{x&&!v.value&&(v.value=x.name||"presentation")},{immediate:!0});function j(){const x=i.exportProject(n.projectId);if(!x)return;const l=new Blob([x],{type:"application/json"}),g=URL.createObjectURL(l),w=document.createElement("a");w.href=g,w.download=`${v.value||"project"}.mediasurf.json`,w.click(),URL.revokeObjectURL(g),y.value="success",setTimeout(()=>y.value="",3e3)}function N(x,l="presentation"){return String(x).trim().replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim()||l}function z(x,l){const g=yt(l);return`
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; min-height: 100%; }
:root {
  --lf-slide-width: ${g.width}px;
  --lf-slide-height: ${g.height}px;
}
body {
  min-height: 100vh;
  font-family: ${(x==null?void 0:x.fontFamily)||"Inter, sans-serif"};
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
  width: var(--lf-slide-width);
  height: var(--lf-slide-height);
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
  color: ${(x==null?void 0:x.textColor)||"#1a1a2e"};
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
.lf-chart-wrap,
.lf-divider-wrap,
.lf-audio-wrap {
  width: 100%;
  height: 100%;
}
.lf-chart-wrap {
  border-radius: 16px;
  overflow: hidden;
}
.lf-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 12px 10px;
  border-radius: 16px;
}
.lf-chart-title {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}
.lf-chart-svg {
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow: visible;
}
.lf-chart-axis,
.lf-chart-value,
.lf-chart-center-label,
.lf-chart-center-value {
  font-family: inherit;
}
.lf-chart-axis {
  font-size: 10px;
  opacity: .78;
}
.lf-chart-value {
  font-size: 10px;
  font-weight: 700;
}
.lf-chart-center-value {
  font-size: 18px;
  font-weight: 800;
}
.lf-chart-center-label {
  font-size: 10px;
  opacity: .72;
  text-transform: uppercase;
  letter-spacing: .08em;
}
.lf-chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-top: 8px;
}
.lf-chart-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  font-size: 10px;
}
.lf-chart-legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  flex: 0 0 auto;
}
.lf-chart-legend-label {
  max-width: 9ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: .82;
}
.lf-chart-legend-value {
  font-weight: 700;
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
  display: ${(l==null?void 0:l.showNavControls)===!1?"none":"flex"};
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
  display: ${(l==null?void 0:l.showNavControls)===!1?"none":"flex"};
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
  background: ${(x==null?void 0:x.primaryColor)||"#6c47ff"};
  transition: width .22s ease;
  display: ${(l==null?void 0:l.showProgress)===!1?"none":"block"};
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
`}function k(){return`
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
  var state = { current: 0, timer: null, mediaCleanup: null };
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
    var slideWidth = Math.max(320, Number(settings.slideWidth || 960));
    var slideHeight = Math.max(320, Number(settings.slideHeight || 540));
    var availableWidth = Math.max(240, window.innerWidth - 72);
    var availableHeight = Math.max(240, window.innerHeight - 72);
    var scale = Math.min(availableWidth / slideWidth, availableHeight / slideHeight, 1.5);
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
    bindMediaAdvance(index);
    triggerLoadInteractions(slideNodes[index]);
    scheduleAutoAdvance();
  }

  function scheduleAutoAdvance() {
    window.clearTimeout(state.timer);
    if (!settings.autoPlay) return;
    var currentSlide = slides[state.current] || {};
    if (currentSlide.advanceOnMediaEnd && getMediaAdvanceNode(state.current)) return;
    var duration = Number(currentSlide.duration || 0);
    if (duration > 0) {
      state.timer = window.setTimeout(function () { next(); }, duration * 1000);
    }
  }

  function bindMediaAdvance(index) {
    if (typeof state.mediaCleanup === 'function') {
      state.mediaCleanup();
      state.mediaCleanup = null;
    }

    var slide = slides[index] || {};
    if (!slide.advanceOnMediaEnd) return;

    var media = getMediaAdvanceNode(index);
    if (!media) return;

    var onEnded = function () { next(); };
    media.addEventListener('ended', onEnded);
    state.mediaCleanup = function () {
      media.removeEventListener('ended', onEnded);
    };
  }

  function getMediaAdvanceNode(index) {
    var slide = slides[index] || {};
    var node = slideNodes[index];
    if (!slide || !node || !Array.isArray(slide.elements)) return null;

    var mediaElements = slide.elements.filter(function (element) {
      if (['video', 'audio'].indexOf(element.type) === -1) return false;
      var src = String((element.content && element.content.src) || '').trim();
      if (!src) return false;
      if (element.type === 'video' && (src.indexOf('youtube') !== -1 || src.indexOf('youtu.be') !== -1 || src.indexOf('vimeo') !== -1)) {
        return false;
      }
      return true;
    });

    if (!mediaElements.length) return null;

    var preferred = mediaElements.find(function (element) {
      return Boolean(element.content && element.content.autoplay);
    }) || mediaElements[0];

    var selector = preferred.type === 'video' ? '.lf-video video' : '.lf-audio-player';
    return node.querySelector(selector);
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
    } else if (el.type === 'chart') {
      wrapper.appendChild(renderChart(el));
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

  function renderChart(el) {
    var model = buildChartModel(el.content || {}, el.width || 420, el.height || 280, project.theme || {});
    var wrap = document.createElement('div');
    wrap.className = 'lf-chart-wrap';

    var root = document.createElement('div');
    root.className = 'lf-chart';
    root.style.background = model.backgroundColor;
    root.style.color = model.textColor;
    root.style.border = (model.borderWidth || 0) + 'px solid ' + (model.borderColor || '#e2e8f0');

    if (model.title) {
      var title = document.createElement('div');
      title.className = 'lf-chart-title';
      title.textContent = model.title;
      root.appendChild(title);
    }

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'lf-chart-svg');
    svg.setAttribute('viewBox', '0 0 ' + (el.width || 420) + ' ' + (el.height || 280));
    svg.setAttribute('preserveAspectRatio', 'none');

    if (model.type === 'circle') {
      model.circle.slices.forEach(function (slice) {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', slice.path);
        path.setAttribute('fill', slice.color);
        svg.appendChild(path);
      });

      var inner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      inner.setAttribute('cx', model.circle.center.x);
      inner.setAttribute('cy', model.circle.center.y);
      inner.setAttribute('r', Math.max(0, model.circle.innerRadius - 2));
      inner.setAttribute('fill', model.backgroundColor);
      svg.appendChild(inner);

      var centerValue = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      centerValue.setAttribute('x', model.circle.center.x);
      centerValue.setAttribute('y', model.circle.center.y - 4);
      centerValue.setAttribute('text-anchor', 'middle');
      centerValue.setAttribute('class', 'lf-chart-center-value');
      centerValue.setAttribute('fill', model.textColor);
      centerValue.textContent = model.circle.centerValue;
      svg.appendChild(centerValue);

      var centerLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      centerLabel.setAttribute('x', model.circle.center.x);
      centerLabel.setAttribute('y', model.circle.center.y + 14);
      centerLabel.setAttribute('text-anchor', 'middle');
      centerLabel.setAttribute('class', 'lf-chart-center-label');
      centerLabel.setAttribute('fill', model.textColor);
      centerLabel.textContent = 'Total';
      svg.appendChild(centerLabel);
    } else {
      if (model.showGrid) {
        model.cartesian.ticks.forEach(function (tick) {
          var grid = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          grid.setAttribute('x1', model.cartesian.padding.left);
          grid.setAttribute('x2', model.cartesian.padding.left + model.cartesian.plotWidth);
          grid.setAttribute('y1', tick.y);
          grid.setAttribute('y2', tick.y);
          grid.setAttribute('stroke', model.gridColor);
          grid.setAttribute('stroke-width', '1');
          svg.appendChild(grid);
        });
      }

      model.cartesian.ticks.forEach(function (tick) {
        var tickLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        tickLabel.setAttribute('x', model.cartesian.padding.left - 8);
        tickLabel.setAttribute('y', tick.y + 4);
        tickLabel.setAttribute('text-anchor', 'end');
        tickLabel.setAttribute('class', 'lf-chart-axis');
        tickLabel.setAttribute('fill', model.textColor);
        tickLabel.textContent = tick.label;
        svg.appendChild(tickLabel);
      });

      if (model.type === 'bar') {
        model.cartesian.bars.forEach(function (bar) {
          var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          rect.setAttribute('x', bar.x);
          rect.setAttribute('y', bar.y);
          rect.setAttribute('width', bar.width);
          rect.setAttribute('height', bar.height);
          rect.setAttribute('fill', bar.color);
          rect.setAttribute('rx', '8');
          svg.appendChild(rect);

          if (model.showValues) {
            var valueLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            valueLabel.setAttribute('x', bar.x + (bar.width / 2));
            valueLabel.setAttribute('y', bar.y - 8);
            valueLabel.setAttribute('text-anchor', 'middle');
            valueLabel.setAttribute('class', 'lf-chart-value');
            valueLabel.setAttribute('fill', model.textColor);
            valueLabel.textContent = bar.valueLabel;
            svg.appendChild(valueLabel);
          }

          var barLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          barLabel.setAttribute('x', bar.x + (bar.width / 2));
          barLabel.setAttribute('y', model.cartesian.padding.top + model.cartesian.plotHeight + 18);
          barLabel.setAttribute('text-anchor', 'middle');
          barLabel.setAttribute('class', 'lf-chart-axis');
          barLabel.setAttribute('fill', model.textColor);
          barLabel.textContent = bar.label;
          svg.appendChild(barLabel);
        });
      } else {
        if (model.showArea && model.cartesian.areaPath) {
          var area = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          area.setAttribute('d', model.cartesian.areaPath);
          area.setAttribute('fill', (model.cartesian.points[0] && model.cartesian.points[0].color) || '#6c47ff');
          area.setAttribute('opacity', '0.16');
          svg.appendChild(area);
        }

        var line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        line.setAttribute('d', model.cartesian.linePath);
        line.setAttribute('stroke', (model.cartesian.points[0] && model.cartesian.points[0].color) || '#6c47ff');
        line.setAttribute('stroke-width', model.strokeWidth || 3);
        line.setAttribute('fill', 'none');
        line.setAttribute('stroke-linecap', 'round');
        line.setAttribute('stroke-linejoin', 'round');
        svg.appendChild(line);

        model.cartesian.points.forEach(function (point) {
          var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          dot.setAttribute('cx', point.x);
          dot.setAttribute('cy', point.y);
          dot.setAttribute('r', '4.5');
          dot.setAttribute('fill', point.color);
          svg.appendChild(dot);

          if (model.showValues) {
            var pointValue = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            pointValue.setAttribute('x', point.x);
            pointValue.setAttribute('y', point.y - 10);
            pointValue.setAttribute('text-anchor', 'middle');
            pointValue.setAttribute('class', 'lf-chart-value');
            pointValue.setAttribute('fill', model.textColor);
            pointValue.textContent = point.valueLabel;
            svg.appendChild(pointValue);
          }

          var pointLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          pointLabel.setAttribute('x', point.x);
          pointLabel.setAttribute('y', model.cartesian.padding.top + model.cartesian.plotHeight + 18);
          pointLabel.setAttribute('text-anchor', 'middle');
          pointLabel.setAttribute('class', 'lf-chart-axis');
          pointLabel.setAttribute('fill', model.textColor);
          pointLabel.textContent = point.label;
          svg.appendChild(pointLabel);
        });
      }
    }

    root.appendChild(svg);

    if (model.showLegend) {
      var legend = document.createElement('div');
      legend.className = 'lf-chart-legend';
      model.series.forEach(function (item) {
        var legendItem = document.createElement('div');
        legendItem.className = 'lf-chart-legend-item';

        var dot = document.createElement('span');
        dot.className = 'lf-chart-legend-dot';
        dot.style.background = item.color;

        var label = document.createElement('span');
        label.className = 'lf-chart-legend-label';
        label.textContent = item.label;

        var value = document.createElement('span');
        value.className = 'lf-chart-legend-value';
        value.textContent = String(item.value);

        legendItem.appendChild(dot);
        legendItem.appendChild(label);
        legendItem.appendChild(value);
        legend.appendChild(legendItem);
      });
      root.appendChild(legend);
    }

    wrap.appendChild(root);
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
`}async function C(){var Ee,he,fe;const x=a.value;if(!x)return;y.value="processing";const l=new $l,g=l.folder("assets");let w=0;async function D(ge,W="media"){if((!ge||ge.startsWith("data:")||ge.startsWith("http://localhost")||ge.startsWith("blob:"))&&ge.startsWith("data:"))return ge;try{const ve=await(await fetch(ge)).blob();let ce="bin";const ye=ve.type;if(ye.includes("image/png")?ce="png":ye.includes("image/jpeg")?ce="jpg":ye.includes("image/gif")?ce="gif":ye.includes("image/svg")?ce="svg":ye.includes("image/webp")?ce="webp":ye.includes("video/mp4")?ce="mp4":ye.includes("audio/mpeg")&&(ce="mp3"),ce==="bin"){const $e=ge.match(/\\.([a-zA-Z0-9]+)(\\?.*)?$/);$e&&(ce=$e[1])}w++;const we=`${W}_${w}.${ce}`;return g.file(we,ve),`assets/${we}`}catch(ae){return console.warn("Could not fetch asset:",ge,ae),ge}}const O=JSON.parse(JSON.stringify([...x.slides||[]])).sort((ge,W)=>(ge.order??0)-(W.order??0));if(h.value)for(const ge of O){ge.backgroundType==="image"&&ge.backgroundImage&&(ge.backgroundImage=await D(ge.backgroundImage,"bg"));for(const W of ge.elements||[])W.type==="image"&&((Ee=W.content)!=null&&Ee.src)&&(W.content.src=await D(W.content.src,"img")),W.type==="video"&&((he=W.content)!=null&&he.src)&&!W.content.src.includes("youtube")&&!W.content.src.includes("youtu.be")&&(W.content.src=await D(W.content.src,"vid")),W.type==="audio"&&((fe=W.content)!=null&&fe.src)&&(W.content.src=await D(W.content.src,"aud"))}const oe=N(v.value||x.name||"presentation"),V={name:x.name,theme:x.theme||{},settings:x.settings||{},slides:O},Y=JSON.stringify(V).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026"),ie=z(x.theme,x.settings),L=k(),R=`<script id="lf-data" type="application/json">${Y}<\/script>`,ne=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${oe}</title>
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
  <span class="nav-counter" id="counter">1 / ${O.length}</span>
  <button class="nav-btn" id="next-btn" type="button">Next →</button>
</nav>
</div>
${R}
<script src="script.js"><\/script>
</body>
</html>`;l.file("index.html",ne),l.file("style.css",ie),l.file("script.js",L);const J=await l.generateAsync({type:"blob"}),se=URL.createObjectURL(J),de=document.createElement("a");de.href=se,de.download=`${oe}.zip`,de.click(),URL.revokeObjectURL(se),y.value="success",setTimeout(()=>y.value="",3e3)}return(x,l)=>(d(),qe(vl,{title:"Export Project",size:"md",onClose:l[9]||(l[9]=g=>S(n).showExportModal=!1)},{footer:nt(()=>[e("button",{class:"btn btn-secondary",onClick:l[8]||(l[8]=g=>S(n).showExportModal=!1)},"Close")]),default:nt(()=>{var g,w,D,O,oe;return[S(s).user?(d(),u(Z,{key:1},[e("div",Tm,[e("button",{class:te(["tab-btn",m.value==="json"&&"active"]),onClick:l[2]||(l[2]=V=>m.value="json")},"JSON Project",2),e("button",{class:te(["tab-btn",m.value==="html"&&"active"]),onClick:l[3]||(l[3]=V=>m.value="html")},"HTML Package",2),e("button",{class:te(["tab-btn",m.value==="scorm"&&"active"]),onClick:l[4]||(l[4]=V=>m.value="scorm")},"SCORM",2)]),e("div",Nm,[m.value==="json"?(d(),u(Z,{key:0},[l[20]||(l[20]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"📦"),e("div",null,[e("h4",null,"JSON Project File"),e("p",null,"Export your complete project as a JSON file. Use this to back up your work, share it with collaborators, or import it into another MediaSurf instance.")])],-1)),e("div",zm,[e("div",Lm,[l[15]||(l[15]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"File Name",-1)),re(e("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=V=>v.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[be,v.value]])])]),e("div",Bm,[e("div",jm,[l[16]||(l[16]=e("span",null,"Project",-1)),e("strong",null,$((g=a.value)==null?void 0:g.name),1)]),e("div",Dm,[l[17]||(l[17]=e("span",null,"Slides",-1)),e("strong",null,$(((D=(w=a.value)==null?void 0:w.slides)==null?void 0:D.length)||0),1)]),e("div",Rm,[l[18]||(l[18]=e("span",null,"Elements",-1)),e("strong",null,$(((oe=(O=a.value)==null?void 0:O.slides)==null?void 0:oe.reduce((V,Y)=>{var ie;return V+(((ie=Y.elements)==null?void 0:ie.length)||0)},0))||0),1)])]),e("button",{class:"btn btn-primary export-btn",onClick:j},[...l[19]||(l[19]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Q(" Download JSON ",-1)])])],64)):m.value==="html"?(d(),u(Z,{key:1},[l[24]||(l[24]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🌐"),e("div",null,[e("h4",null,"Standalone HTML Package"),e("p",null,"Export as a self-contained HTML file that works in any browser. Includes all slides, interactions, and quiz functionality. No internet connection required.")])],-1)),e("div",qm,[e("div",Fm,[l[21]||(l[21]=e("label",{style:{display:"block","margin-bottom":"4px","font-size":"13px","font-weight":"600",color:"#333"}},"Package Name",-1)),re(e("input",{type:"text","onUpdate:modelValue":l[6]||(l[6]=V=>v.value=V),class:"inp",placeholder:"My Presentation",style:{width:"100%",padding:"8px","border-radius":"6px",border:"1px solid #ddd"}},null,512),[[be,v.value]])]),e("label",Wm,[re(e("input",{type:"checkbox","onUpdate:modelValue":l[7]||(l[7]=V=>h.value=V)},null,512),[[$t,h.value]]),l[22]||(l[22]=Q(" Download external assets (Images/Audio/Video) locally for offline use ",-1))])]),l[25]||(l[25]=e("div",{class:"export-features"},[e("div",{class:"feature-item"},"✓ Keyboard navigation (arrow keys)"),e("div",{class:"feature-item"},"✓ Click-to-reveal hotspots"),e("div",{class:"feature-item"},"✓ Interactive quizzes with feedback"),e("div",{class:"feature-item"},"✓ Progress bar"),e("div",{class:"feature-item"},"✓ Responsive scaling"),e("div",{class:"feature-item"},"✓ YouTube/Vimeo video embeds")],-1)),e("button",{class:"btn btn-primary export-btn",onClick:C},[...l[23]||(l[23]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Q(" Download HTML ",-1)])])],64)):m.value==="scorm"?(d(),u(Z,{key:2},[l[29]||(l[29]=e("div",{class:"export-info"},[e("div",{class:"export-icon"},"🎓"),e("div",null,[e("h4",null,"SCORM Package"),e("p",null,"Export as a SCORM 1.2 / xAPI compatible package for LMS platforms like Moodle, Blackboard, and Canvas.")])],-1)),e("div",Um,[(d(),u("svg",Om,[...l[26]||(l[26]=[e("circle",{cx:"12",cy:"12",r:"10"},null,-1),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])),l[27]||(l[27]=e("h4",null,"Coming Soon",-1)),l[28]||(l[28]=e("p",null,"SCORM export is planned for a future release. Use the HTML export for now and embed it via iframe in your LMS.",-1))])],64)):q("",!0),vt(kt,{name:"fade"},{default:nt(()=>[y.value==="processing"?(d(),u("div",Vm,[...l[30]||(l[30]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"spin",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"})],-1),Q(" Generating package... Please wait. ",-1)])])):y.value==="success"?(d(),u("div",Hm,[...l[31]||(l[31]=[e("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),Q(" Export successful! Check your downloads folder. ",-1)])])):q("",!0)]),_:1})])],64)):(d(),u("div",Mm,[(d(),u("svg",Pm,[...l[10]||(l[10]=[e("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},null,-1),e("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"},null,-1)])])),l[13]||(l[13]=e("h3",{style:{"font-size":"20px","font-weight":"600","margin-bottom":"8px"}},"Sign up to export",-1)),l[14]||(l[14]=e("p",{style:{"font-size":"14px",color:"#64748b","margin-bottom":"32px"}},"Create a free account to export, save, and share your presentations.",-1)),e("div",_m,[e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:l[0]||(l[0]=V=>S(s).loginWithGoogle())},[...l[11]||(l[11]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v8m-4-4h8"})],-1),Q(" Continue with Google ",-1)])]),e("button",{class:"btn btn-secondary",style:{width:"100%","justify-content":"center",gap:"8px"},onClick:l[1]||(l[1]=V=>S(s).loginWithMicrosoft())},[...l[12]||(l[12]=[e("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"3",width:"7",height:"7"}),e("rect",{x:"14",y:"14",width:"7",height:"7"}),e("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),Q(" Continue with Microsoft ",-1)])])])]))]}),_:1}))}},Qm=Re(Gm,[["__scopeId","data-v-10fbcd07"]]),Ym={key:0,class:"editor-view"},Km={class:"editor-topbar"},Jm={class:"topbar-left"},Xm={class:"project-name-wrap"},Zm=["value"],ef={class:"save-label"},tf={class:"topbar-center"},of={key:0,class:"slide-position"},nf={class:"topbar-right"},lf={class:"editor-body"},sf={class:"authoring-rail"},af=["onClick","data-tooltip"],rf={key:0,class:"rail-icon"},df={key:1,class:"rail-icon"},uf={key:2,class:"rail-icon"},cf={key:3,class:"rail-icon"},pf={key:4,class:"rail-icon"},vf={key:5,class:"rail-icon"},mf={key:6,class:"rail-icon"},ff={key:7,class:"rail-icon"},gf={key:8,class:"rail-icon"},bf={class:"right-panel"},yf={class:"panel-tabs"},hf=["onClick","data-tooltip"],xf={class:"tab-icon"},wf={class:"tab-label"},kf={class:"panel-content"},Cf={key:1,class:"editor-not-found"},Sf={__name:"EditorView",setup(r){const n=cl(),i=ul(),s=Qe(),a=Ye(),m=jn(),y=M(()=>n.params.id),v=M(()=>a.getProject(y.value)),h=M(()=>yt(v.value)),j=M(()=>{var f;return[...((f=v.value)==null?void 0:f.slides)||[]].sort((E,P)=>E.order-P.order)}),N=B(null),z=B(!1),k=B("deck"),{aiStore:C,showAIModal:x,aiMode:l,aiTopic:g,aiContext:w,aiProjectName:D,aiSlideCount:O,aiQuestionCount:oe,aiDifficulty:V,aiQuestionType:Y,aiCreationError:ie,aiSubmitting:L,aiProjectNamePlaceholder:R,aiPrimaryActionLabel:K,openAICreationModal:ne,createAIProject:J}=ml({onRequireAuth:()=>i.push({name:"dashboard"})});let se=!1,de=null;He(()=>v.value,f=>{if(f){if(se){se=!1;return}de&&clearTimeout(de),de=setTimeout(()=>{s.pushHistory(f)},600)}},{deep:!0}),He(()=>m.isAuthReady,async f=>{var E;if(f){if((E=m.user)!=null&&E.uid&&await a.ensureRemoteProjectsLoaded(),!v.value){i.push({name:"dashboard"});return}s.setProject(y.value),j.value.length>0&&s.setCurrentSlide(j.value[0].id),s.pushHistory(v.value)}},{immediate:!0});const Ee=M(()=>{const f=v.value;return f?`Saved ${new Date(f.updatedAt).toLocaleTimeString()}`:""}),he=M(()=>{switch(s.rightPanelTab){case"layers":return"layers";case"ai":return"ai";case"theme":return"theme";default:return"properties"}});Ql({undo:()=>{if(s.canUndo()){const f=s.undo();f&&(se=!0,a.updateProject(y.value,f))}},redo:()=>{if(s.canRedo()){const f=s.redo();f&&(se=!0,a.updateProject(y.value,f))}},delete:()=>{s.selectedElementId&&(a.deleteElement(s.projectId,s.currentSlideId,s.selectedElementId),s.clearSelection())},escape:()=>{s.clearSelection(),s.setActiveTool("select")},copy:()=>{var E,P,Ie,Ce;const f=(Ce=(Ie=(P=(E=v.value)==null?void 0:E.slides)==null?void 0:P.find(Be=>Be.id===s.currentSlideId))==null?void 0:Ie.elements)==null?void 0:Ce.find(Be=>Be.id===s.selectedElementId);f&&s.setClipboard(f)},paste:()=>{if(s.clipboard&&s.currentSlideId){const f=s.clipboard;a.addElement(s.projectId,s.currentSlideId,f.type,{...f,x:f.x+20,y:f.y+20,id:void 0})}},duplicate:()=>{if(s.selectedElementId){const f=a.duplicateElement(s.projectId,s.currentSlideId,s.selectedElementId);f&&s.selectElement(f.id)}},zoomIn:()=>s.zoomIn(),zoomOut:()=>s.zoomOut(),zoomReset:()=>s.zoomReset(),toggleGrid:()=>s.toggleGrid(),nudge:(f,E)=>{var Ie,Ce,Be,xe;if(!s.selectedElementId)return;const P=(xe=(Be=(Ce=(Ie=v.value)==null?void 0:Ie.slides)==null?void 0:Ce.find(Te=>Te.id===s.currentSlideId))==null?void 0:Be.elements)==null?void 0:xe.find(Te=>Te.id===s.selectedElementId);P&&a.updateElement(s.projectId,s.currentSlideId,s.selectedElementId,{x:P.x+f,y:P.y+E})},selectAll:()=>{var E,P,Ie;(((Ie=(P=(E=v.value)==null?void 0:E.slides)==null?void 0:P.find(Ce=>Ce.id===s.currentSlideId))==null?void 0:Ie.elements)||[]).forEach((Ce,Be)=>s.selectElement(Ce.id,Be>0))}});function fe(){i.push({name:"dashboard"})}function ge(){i.push({name:"preview",params:{id:y.value},query:{from:"editor"}})}function W(f="deck"){k.value=f,z.value=!0}function ae(){z.value=!1,ne(k.value)}function ve(f,E="Image"){if(!s.projectId||!s.currentSlideId||!f)return;const P=new Image;P.onload=()=>{const Be=Math.min(420/P.width,280/P.height,1),xe=Math.max(120,Math.round(P.width*Be)),Te=Math.max(80,Math.round(P.height*Be)),Ge=Math.max(24,Math.round((h.value.width-xe)/2)),Ze=Math.max(24,Math.round((h.value.height-Te)/2)),Ke=a.addElement(s.projectId,s.currentSlideId,"image",{x:Ge,y:Ze,width:xe,height:Te,content:{src:f,alt:E,objectFit:"cover"}});Ke&&(s.selectElement(Ke.id),s.setRightPanel("properties"),s.setActiveTool("select"))},P.src=f}function ce(f){const[E]=Array.from(f.target.files||[]);if(!E||!E.type.startsWith("image/"))return;const P=new FileReader;P.onload=()=>ve(String(P.result||""),E.name),P.readAsDataURL(E),f.target.value=""}function ye(){var f;(f=N.value)==null||f.click()}const we=[{id:"text",label:"Text"},{id:"resources",label:"Resources"},{id:"interactive-elements",label:"Interactive elements"},{id:"interactive-questions",label:"Interactive questions"},{id:"widgets",label:"Widgets"},{id:"insert",label:"Insert"},{id:"style",label:"Style"},{id:"background",label:"Background"},{id:"pages",label:"Pages"}];function $e(f){if(f==="text"){s.setActiveTool("text");return}if(f==="resources"){s.setActiveTool("image");return}if(f==="interactive-elements"){s.setActiveTool("hotspot");return}if(f==="interactive-questions"){s.setActiveTool("quiz");return}if(f==="widgets"){s.setActiveTool("shape");return}if(f==="insert"){ye();return}if(f==="style"){s.setRightPanel("properties");return}if(f==="background"){s.clearSelection(),s.setRightPanel("properties");return}f==="pages"&&s.toggleSlidePanel()}function _e(f){return f==="text"?["text","heading"].includes(s.activeTool):f==="resources"?s.activeTool==="image":f==="interactive-elements"?["hotspot","button"].includes(s.activeTool):f==="interactive-questions"?s.activeTool==="quiz":f==="widgets"?["shape","video","audio","chart"].includes(s.activeTool):f==="insert"?!1:f==="style"||f==="background"?s.rightPanelTab==="properties":f==="pages"?s.showSlidePanel:!1}function Le(){Gl({showProgress:!0,steps:[{popover:{title:"Welcome to the Editor!",description:"This is a brief intro about the app. Let us show you around!"}},{element:"#tour-export-btn",popover:{title:"Export Your Project",description:"Use the export feature to publish or download your final project when you are done.",side:"bottom",align:"start"}},{element:".authoring-rail",popover:{title:"Authoring Tools",description:"Here you can add new elements like text, images, and interactive widgets to your slides.",side:"right",align:"start"}},{element:".topbar-center",popover:{title:"Slide Navigation",description:"Keep track of which slide you are currently editing.",side:"bottom",align:"center"}}],onDestroyed:()=>{localStorage.setItem("hasSeenWalkthrough","true")}}).drive()}return Mt(()=>{localStorage.getItem("hasSeenWalkthrough")||setTimeout(()=>{Le()},500)}),(f,E)=>v.value?(d(),u("div",Ym,[e("input",{ref_key:"imageInputRef",ref:N,type:"file",accept:"image/*",class:"sr-only",onChange:ce},null,544),e("header",Km,[e("div",Jm,[e("button",{class:"btn btn-ghost btn-sm back-btn",onClick:fe,"data-tooltip":"Return to dashboard","data-tooltip-position":"bottom"},[...E[14]||(E[14]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 12H5M12 19l-7-7 7-7"})],-1),Q(" Dashboard ",-1)])]),e("div",Xm,[e("input",{value:v.value.name,class:"project-name-input",onChange:E[0]||(E[0]=P=>S(a).updateProject(y.value,{name:P.target.value}))},null,40,Zm)]),e("span",ef,$(Ee.value),1)]),e("div",tf,[S(s).currentSlideId?(d(),u("span",of," Slide "+$(j.value.findIndex(P=>P.id===S(s).currentSlideId)+1)+" of "+$(j.value.length),1)):q("",!0)]),e("div",nf,[e("button",{class:"btn btn-ghost btn-sm",onClick:Le,"data-tooltip":"Show Help","data-tooltip-position":"bottom"},[...E[15]||(E[15]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1),Q(" Help ",-1)])]),e("button",{class:te(["btn btn-ghost btn-sm",S(s).showAIPanel&&"active-btn"]),onClick:E[1]||(E[1]=P=>{S(s).showAIPanel=!S(s).showAIPanel,S(s).setRightPanel("ai")}),"data-tooltip":"Open AI assistant","data-tooltip-position":"bottom"},[...E[16]||(E[16]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})],-1),Q(" AI ",-1)])],2),e("button",{class:"btn btn-ghost btn-sm",onClick:E[2]||(E[2]=P=>{S(s).showThemeManager=!S(s).showThemeManager,S(s).setRightPanel("theme")}),"data-tooltip":"Open theme controls","data-tooltip-position":"bottom"},[...E[17]||(E[17]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 8v4m0 4h.01"})],-1),Q(" Theme ",-1)])]),e("button",{class:"btn btn-secondary btn-sm",onClick:ge,"data-tooltip":"Preview your project","data-tooltip-position":"bottom"},[...E[18]||(E[18]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),Q(" Preview ",-1)])]),e("button",{id:"tour-export-btn",class:"btn btn-primary btn-sm",onClick:E[3]||(E[3]=P=>S(s).showExportModal=!0),"data-tooltip":"Export or publish","data-tooltip-position":"bottom"},[...E[19]||(E[19]=[e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Q(" Export ",-1)])])])]),vt(sp,{onOpenAiProject:W}),e("div",lf,[e("aside",sf,[(d(),u(Z,null,ue(we,P=>e("button",{key:P.id,class:te(["rail-option",_e(P.id)&&"active"]),onClick:Ie=>$e(P.id),"data-tooltip":P.label,"data-tooltip-position":"right"},[P.id==="text"?(d(),u("span",rf,"T")):P.id==="resources"?(d(),u("span",df,[...E[20]||(E[20]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e("polyline",{points:"21 15 16 10 5 21"})],-1)])])):P.id==="interactive-elements"?(d(),u("span",uf,[...E[21]||(E[21]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])):P.id==="interactive-questions"?(d(),u("span",cf,[...E[22]||(E[22]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})],-1)])])):P.id==="widgets"?(d(),u("span",pf,[...E[23]||(E[23]=[Ve('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-68e98bac><rect x="3" y="3" width="7" height="7" data-v-68e98bac></rect><rect x="14" y="3" width="7" height="7" data-v-68e98bac></rect><rect x="14" y="14" width="7" height="7" data-v-68e98bac></rect><rect x="3" y="14" width="7" height="7" data-v-68e98bac></rect></svg>',1)])])):P.id==="insert"?(d(),u("span",vf,[...E[24]||(E[24]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])])):P.id==="style"?(d(),u("span",mf,[...E[25]||(E[25]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})],-1)])])):P.id==="background"?(d(),u("span",ff,[...E[26]||(E[26]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e("line",{x1:"9",y1:"21",x2:"9",y2:"9"})],-1)])])):P.id==="pages"?(d(),u("span",gf,[...E[27]||(E[27]=[e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1)])])):q("",!0),Q(" "+$(P.label),1)],10,af)),64))]),vt(kt,{name:"side-panel-slide"},{default:nt(()=>[S(s).showSlidePanel?(d(),qe(di,{key:0})):q("",!0)]),_:1}),vt(av),e("aside",bf,[e("div",yf,[(d(),u(Z,null,ue([{id:"properties",label:"Props",icon:"⚙"},{id:"layers",label:"Layers",icon:"◧"},{id:"ai",label:"AI",icon:"✦"},{id:"theme",label:"Theme",icon:"🎨"}],P=>e("button",{key:P.id,class:te(["panel-tab",S(s).rightPanelTab===P.id&&"active"]),onClick:Ie=>S(s).setRightPanel(P.id),"data-tooltip":`Open ${P.label}`,"data-tooltip-position":"bottom"},[e("span",xf,$(P.icon),1),e("span",wf,$(P.label),1)],10,hf)),64))]),e("div",kf,[vt(kt,{name:"editor-panel-switch",mode:"out-in"},{default:nt(()=>[(d(),u("div",{key:he.value,class:"panel-content-view"},[S(s).rightPanelTab==="properties"?(d(),qe(qc,{key:0})):S(s).rightPanelTab==="layers"?(d(),qe(Pi,{key:1})):S(s).rightPanelTab==="ai"?(d(),qe(J1,{key:2})):S(s).rightPanelTab==="theme"?(d(),qe(Em,{key:3})):q("",!0)]))]),_:1})])])]),S(s).showExportModal?(d(),qe(Qm,{key:0})):q("",!0),z.value?(d(),qe(fl,{key:1,title:"Create a New AI Project",message:"Your current project stays saved. When the AI finishes, the editor will switch to the new generated project.","confirm-label":"Continue",onClose:E[4]||(E[4]=P=>z.value=!1),onConfirm:ae})):q("",!0),S(x)?(d(),qe(gl,{key:2,mode:S(l),topic:S(g),context:S(w),"project-name":S(D),"slide-count":S(O),"question-count":S(oe),difficulty:S(V),"question-type":S(Y),"project-name-placeholder":S(R),"primary-action-label":S(K),"creation-error":S(ie),"is-submitting":S(L),"is-generating":S(C).isGenerating,"has-api-key":!!S(C).apiKey,onClose:E[5]||(E[5]=P=>x.value=!1),onCreate:S(J),"onUpdate:mode":E[6]||(E[6]=P=>l.value=P),"onUpdate:topic":E[7]||(E[7]=P=>g.value=P),"onUpdate:context":E[8]||(E[8]=P=>w.value=P),"onUpdate:projectName":E[9]||(E[9]=P=>D.value=P),"onUpdate:slideCount":E[10]||(E[10]=P=>O.value=P),"onUpdate:questionCount":E[11]||(E[11]=P=>oe.value=P),"onUpdate:difficulty":E[12]||(E[12]=P=>V.value=P),"onUpdate:questionType":E[13]||(E[13]=P=>Y.value=P)},null,8,["mode","topic","context","project-name","slide-count","question-count","difficulty","question-type","project-name-placeholder","primary-action-label","creation-error","is-submitting","is-generating","has-api-key","onCreate"])):q("",!0)])):(d(),u("div",Cf,[E[28]||(E[28]=e("h2",null,"Project not found",-1)),E[29]||(E[29]=e("p",null,"This project may have been deleted or the link is invalid.",-1)),e("button",{class:"btn btn-primary",onClick:fe},"Go to Dashboard")]))}},Tf=Re(Sf,[["__scopeId","data-v-68e98bac"]]);export{Tf as default};
